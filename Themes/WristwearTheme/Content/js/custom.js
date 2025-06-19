/*=========



=========*/

//const { Alert } = require("bootstrap");

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader Js
3.WoW Animation Js
4.Sticky Header JS
5.Partners Logo Slider JS
6.instructor Box Slider JS
7.Scroll To Top JS
8.Toggle Menu Mobile JS
=========*/

$(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    // Loader JS Start
    $(window).ready(function() {
        $('.loader-box').fadeOut();
        $('body').removeClass('fixed');
    });
    // Loader JS End

    // Wow Animation JS Start
    new WOW().init();
    // Wow Animation JS Start

    // Sticky Header JS Start
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 100) {
            $('.site-header').addClass('sticky-header');
        } else {
            $('.site-header').removeClass('sticky-header');
        }
    });
    // Sticky Header JS End

    // Partners Logo Slider Start JS
    $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow-team prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slick-arrow-team next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //Partners Logo Slider End JS

    // instructor Box Slider JS Start
    $('.instructor-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // instructor Box Slider JS End

    // Testimonial Slider JS Start
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // Testimonial Slider JS End

    // Scroll To Top JS Start
    $('#scroll-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $("#scroll-to-top").fadeIn(500);
        } else {
            $("#scroll-to-top").fadeOut(500);
        }
    });
    // Scroll To Top JS End

    // Toggle Menu Mobile JS Start
    $(".toggle-button").on('click', function() {
        $(".main-navigation").toggleClass('toggle-menu');
        $(".header-menu .black-shadow").fadeToggle();
    });
    $(".main-navigation ul li a").on('click', function() {
        $(".main-navigation").removeClass('toggle-menu');
        $(".header-menu .black-shadow").fadeOut();
    });
    $(".main-navigation ul li.sub-items>a").on('click', function() {
        $(".main-navigation").addClass('toggle-menu');
        $(".header-menu .black-shadow").stop();
    });
    $(".header-menu .black-shadow").on('click', function() {
        $(this).fadeOut();
        $(".main-navigation").removeClass('toggle-menu');
    });
    // Toggle Menu Mobile JS End

    // If Mobile Slider JS Start
    if ($(window).width() < 992) {

        // Submenu For Mobile JS Start
        $('body').on('click', '.main-navigation ul li.sub-items>a', function() {
            if (($(this).parent().hasClass('active-sub-menu'))) {
                $(this).parent().removeClass('active-sub-menu');
                $(this).parent().find('ul').slideUp();
            } else {
                $(this).parent().addClass('active-sub-menu');
                $(this).parent().find('ul').slideDown();
            }
        });
        // Submenu For Mobile JS End

        // programs Slider For Mobile JS Start
        $('.programs-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {


                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },

                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // programs Slider For Mobile JS End

        // programs Slider For Mobile JS Start
        $('.pricing-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // programs Slider For Mobile JS End

        // Blog Slider For Mobile JS Start
        $('.blog-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // blog Slider For Mobile JS End

        // Blog Slider For Mobile JS Start
        $('.academic-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // blog Slider For Mobile JS End

    }
    // If Mobile Slider JS End

    //Used js for flayout cart
    $("#flyout-cart").on('mouseenter', function(event) {
        $('#flyout-cart-wrapper').addClass('active');
    });

    $("#flyout-cart").on('mouseleave', function(event) {
        $('#flyout-cart-wrapper').removeClass('active');
    });

});
// Popup Code
$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

//CTA Modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
/*Section -- Pay Advantage Page*/

/*Section -- Add New Child*/
//Gloabl variable for child
var childCount = 1;
var validEmail = false;

document.querySelector("#postalCode").addEventListener("keypress", function(evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
    }
});


$("body").on("click", "#submitData", function() {

    event.preventDefault();
    $("body").addClass("loading");
    //do something
    //$("#submitData").prop('disabled', true);

    var parentFirstName = $("#parentFirstName").val();
    var parentLastName = $("#parentLastName").val();

    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var countryId = $("#countryId").val();
    var stateProvinceId = $("#StateProvinceId").val();
    var suburb = $("#suburb").val();
    var address = $("#address").val();
    var postalCode = $("#postalCode").val();
    var discountCode = $("#discountCode").val();

    var termId = $("#termId").val();
    var childFullName = $("#childFullName").val();
    var childDateOfBirth = $("#childDateOfBirth").val();
    var childYearInSchool = $("#childYearInSchool").val();
    var schoolName = $("#schoolName").val();
    var creativeKidsVoucherCode = $("#createKidsVoucherCode").val();

    var State = $("#StateProvinceId option:selected").text();

    if (parentFirstName == "") {
        $("body").removeClass("loading");
        $("#parentFirstName").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parent first name must be filled.',
        })
        return false;
    }
    if (parentLastName == "") {
        $("body").removeClass("loading");
        $("#parentLastName").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parent last name must be filled.',
        })
        return false;
    }
    if (email == "") {
        $("body").removeClass("loading");
        $("#email").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parent email must be filled.',
        })
        return false;
    }
    if (!validEmail) {
        $("body").removeClass("loading");
        $("#email").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your email is not correct.',
        })
        return false;
    }
    if (phoneNumber == "" || $("#valid-msg").hasClass("hide")) {
        $("body").removeClass("loading");
        $("#phoneNumber").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parent phone No must be filled and in correct format.',
        })
        return false;
    }
    if (address == "") {
        $("body").removeClass("loading");
        $("#address").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Street address must be filled.',
        })
        return false;
    }
    if (suburb == "") {
        $("body").removeClass("loading");
        $("#suburb").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Suburb must be filled.',
        })
        return false;
    }
    if (postalCode == "") {
        $("body").removeClass("loading");
        $("#postalCode").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Post code must be filled.',
        })
        return false;
    }
    if (countryId == "" || countryId == "0") {
        $("body").removeClass("loading");
        $("#countryId").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selelct Country.',
        })
        return false;
    }
    if (stateProvinceId == "" || stateProvinceId == "0") {
        $("body").removeClass("loading");
        $("#StateProvinceId").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select State.',
        })
        return false;
    }
    //Check Child Validations
    if ($("#termId").val() == "0") {
        $("body").removeClass("loading");
        $("#termId").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select an enrolment term.',
        })
        return false;
    }
    if ($("#childFullName") == "") {
        $("body").removeClass("loading");
        $("#childFullName").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Child full name must be filled.',
        })
        return false;
    }
    if (childDateOfBirth == "") {
        $("body").removeClass("loading");
        $("#childDateOfBirth").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Child date of birth must be filled.',
        })
        return false;
    }
    if ($("#childYearInSchool") == "") {
        $("body").removeClass("loading");
        $("#childYearInSchool").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Child year in school must be filled.',
        })
        return false;
    }
    if ($("#schoolName") == "") {
        $("body").removeClass("loading");
        $("#schoolName").focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Child school name must be filled.',
        })
        return false;
    }

    var child = {
        ParentFirstName: parentFirstName,
        ParentLastName: parentLastName,
        ParentFullName: parentFirstName + ' ' + parentLastName,
        Email: email,
        PhoneNumber: phoneNumber,
        CountryId: countryId,
        StateProvinceId: stateProvinceId,
        Suburb: suburb,
        Address: address,
        Postalcode: postalCode,
        TermId: termId,
        ChildFullName: childFullName,
        ChildDateOfBirth: childDateOfBirth,
        ChildYearInSchool: childYearInSchool,
        SchoolName: schoolName,
        CreativeKidsVoucherCode: creativeKidsVoucherCode,
        CouponCode: discountCode
    }

    sendPayAdvantageDetails(child);
});

function sendPayAdvantageDetails(child) {
    //Send the JSON array to Controller using AJAX.
    $.ajax({
        url: "/PayAdvantageDetail/Index",
        type: "POST",
        data: child,
        success: function(r) {
            $("body").removeClass("loading");
            var a = JSON.parse(r);
            if (a.status == "success") {
                location.href = a.debitResponse.AuthorisationLinks.Link;
            } else if (a.status == "child_exist") {
                Swal.fire(
                    'Error',
                    'Child with the same name already exists.',
                    'error'
                ).then((result) => {
                    $("#termId").focus();
                })
            } else if (a.status == "child_exist_NotAuthorized") {
                Swal.fire({
                    title: 'Infomration',
                    text: "Child with the same name already exists, but the payment has not been authorised yet.",
                    icon: 'info',
                    showCancelButton: false,
                    confirmButtonColor: '#ee4462',
                    confirmButtonText: 'Authorise Now'
                }).then((result) => {
                    if (result.isConfirmed) {
                        location = a.AuthorizationLink;
                    }
                })
            } else if (a.status == "failed") {
                Swal.fire(
                    'Error',
                    'Some error has occurred. Please try again.',
                    'error'
                ).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.href = "/payadvantagedetail";
                    }
                })
            }
        }
    });
}

$("#email").keyup(function() {

    var emailAddress = $("#email").val();
    var emailChecked = validateEmail(emailAddress);

    if (emailChecked) {
        $("#emailCheckingSpan").addClass("visually-hidden");
        validEmail = true;
    } else {
        $("#emailCheckingSpan").removeClass("visually-hidden");
        validEmail = false;
    }
});

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function StateChange() {
    var state = $("#StateProvinceId option:selected").text();

    if (state == "New South Wales") {
        $("#createKidsVoucherCodeDiv").removeClass("visually-hidden");
    } else {
        $("#createKidsVoucherCodeDiv").addClass("visually-hidden");
    }

}

function HideCreativeKidsVoucherCodeDiv() {
    $("#createKidsVoucherCodeDiv").addClass("visually-hidden");
}

function GetTermDetail(termId) {

    if (termId > 0) {
        $.ajax({
            url: "/PayAdvantageDetail/GetTermDetails?termId=" + termId + "",
            type: "Get",
            success: function(r) {
                var a = JSON.parse(r);

                var tempStartDate = a.StartDate;
                var startDate = tempStartDate.replace("T00:00:00", "");
                $("#termStartDate").html("<strong>Term Start Date:</strong> " + startDate);

                var tempEndDate = a.EndDate;
                var endDate = tempEndDate.replace("T00:00:00", "");
                $("#termEndDate").html("<strong>Term End Date:</strong> " + endDate);

                var tempEnrollmentEndDate = a.EnrollmentEndDate;
                var enrollmentEndDate = tempEnrollmentEndDate.replace("T00:00:00", "");
                $("#enrollmentEndDate").html("<strong>Enrollment End Date:</strong> " + enrollmentEndDate);

            }
        });
    }
}

function animateToSpecifdiv(div) {
    $('html, body').animate({
        scrollTop: $("#" + div).offset().top
    });
}

//Global Variable
var DiscountCode

$("body").on("click", "#submitDiscountCode", function() {

    var discountCode = $("#discountCode").val();
    if (discountCode != "") {
        //Send the JSON array to Controller using AJAX.
        $.ajax({
            url: "/PayAdvantageDetail/GetAllDiscountCodeDetails",
            type: "POST",
            data: {
                discountCode: discountCode
            },
            success: function(r) {
                var a = JSON.parse(r);
                if (a.status == "success") {
                    Swal.fire(
                        'Discount Code Applied',
                        'Your discount code have been successfully added',
                        'success'
                    ).then((result) => {
                        /* Get Details of Discount Code Details and Discount Code Amount */
                        if (result.isConfirmed) {
                            $('#section-discount-code-details').show();
                            $("#discount-code-details").empty().html(a.discount[0].AdminComment);
                            if (a.discount[0].UsePercentage == true) {
                                $("#discount-code-amount").empty().html(a.discount[0].DiscountPercentage + "%");
                            } else {
                                $("#discount-code-amount").empty().html("$" + a.discount[0].DiscountAmount);
                            }
                        }
                    })
                } else if (a.status == "failed") {
                    $('#section-discount-code-details').hide();
                    $("#discount-code-details").empty();
                    $("#discount-code-amount").empty();
                    Swal.fire(
                        'Error',
                        'Your discount code is not valid',
                        'error'
                    )
                }
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Discount Code Not Filled',
        })
    }
});
/*End Section -- Pay Advantage Page*/