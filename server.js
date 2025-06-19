const express = require('express');
const stripe = require('stripe')('pk_test_51Rb0xKFbzjdhy0yShN1ZIKBIpPg0AvkudePpU8dHW50atmIGeoQmHwSKVarKVEnnRVJHUlaJHaQVPNE4E83IytZD00IST39K2w'); // Replace with your secret key
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from public directory

// Enable CORS for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

// Create payment intent endpoint
app.post('/create-payment-intent', async (req, res) => {
    try {
        const {
            amount,
            studentFirstName,
            studentLastName,
            parentFirstName,
            parentLastName,
            email,
            phone,
            plan,
            planName
        } = req.body;

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount in cents
            currency: 'aud',
            description: `${planName} subscription for ${studentFirstName} ${studentLastName}`,
            metadata: {
                student_name: `${studentFirstName} ${studentLastName}`,
                parent_name: `${parentFirstName} ${parentLastName}`,
                parent_email: email,
                parent_phone: phone,
                plan: plan,
                plan_name: planName
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });

        console.log('Payment Intent created:', paymentIntent.id);
        console.log('Amount:', amount, 'cents');
        console.log('Student:', `${studentFirstName} ${studentLastName}`);
        console.log('Plan:', planName);

        res.send({
            client_secret: paymentIntent.client_secret,
        });

    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(400).send({
            error: error.message,
        });
    }
});

// Payment success page
app.get('/payment-success', (req, res) => {
    const paymentIntentId = req.query.payment_intent;
    res.send(`
        <html>
            <head>
                <title>Payment Successful</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    .success { color: green; font-size: 24px; }
                </style>
            </head>
            <body>
                <div class="success">
                    <h1>🎉 Payment Successful!</h1>
                    <p>Thank you for your payment.</p>
                    <p>Payment ID: ${paymentIntentId}</p>
                    <p>You will receive a confirmation email shortly.</p>
                </div>
            </body>
        </html>
    `);
});

// Webhook to handle completed payments (optional but recommended)
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'whsec_YOUR_WEBHOOK_SECRET'; // Add your webhook secret

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log(`Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('Payment succeeded:', paymentIntent.id);
            // Here you can save to database, send confirmation emails, etc.
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({received: true});
});

// Serve your payment.html file
app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, 'payment.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Payment endpoint: http://localhost:3000/create-payment-intent');
    console.log('Payment page: http://localhost:3000/payment');
});