// heros

// height of homepage hero
if($("#hero-landing" + name).length > 0) {
    var windowHeight = $(window).height();
    if (windowHeight < 850 && windowHeight > 650) {
        $("#hero-landing").css("height", windowHeight);
        $("#scroll-arrow").delay(3000).queue(function(next){
            $(this).addClass("show");
        });
        $(window).scroll(function (event) {
            $("#scroll-arrow").removeClass("show");
        });
    }
}
    
$('.hero-background').waitForImages().done(function() {
    $('.hero-cover').fadeOut(650);
});

$('#reviews-wall').masonry({
    // options
    itemSelector: '.box-review',
    columnWidth: '.box-review',
    gutter: '.gutter-sizer'
});

$("#menu-button").click(function() {
   $("header").addClass("mobile"); 
});

$("#menu-button-close").click(function() {
   $("header").removeClass("mobile"); 
});

$("#hero-reviews #reviews-total").hover(
  function() {
    $(".reviews-explanation").addClass("visible");
  }, function() {
    $(".reviews-explanation").removeClass("visible");
  }
);

// Scrolling Header
//$(window).on('scroll',function(){
//    var breakPoint = 800;
//    if ($(window).scrollTop() >= breakPoint) {
//        // console.log('Past break point');
//        //$('header.clone.remove-header').removeClass('remove-header');
//        console.log("show");
//        $('header').addClass('reveal-header');
//    }
//    else if ($(window).scrollTop() < breakPoint) {
//        // console.log('Below break point');
//        // $('header.clone.reveal-header').addClass('remove-header');
//        console.log("hide");
//        $('header').removeClass('reveal-header');
//    }
//});
//

$(".select-quantity-dropdown").change(function () {
    var value = this.value;
    var type = $(this).attr("id");
    switch (type) {
        case "business-subscription-dropdown":
            console.log("business CTA is here to stay");
            var href1 = $("#cta-add-to-cart-1");
            var href2 = $("#cta-add-to-cart-2");
            var href3 = $("#cta-add-to-cart-3");
            var href4 = $("#cta-add-to-cart-4");
            var href5 = $("#cta-add-to-cart-5");
            switch(value) {
                case "1":
                    href1.removeClass("hide");
                    href2.addClass("hide");
                    href3.addClass("hide");
                    href4.addClass("hide");
                    href5.addClass("hide");
                    break;
                case "2":
                    href1.addClass("hide");
                    href2.removeClass("hide");
                    href3.addClass("hide");
                    href4.addClass("hide");
                    href5.addClass("hide");
                    break;
                case "3":
                    href1.addClass("hide");
                    href2.addClass("hide");
                    href3.removeClass("hide");
                    href4.addClass("hide");
                    href5.addClass("hide");
                    break;
                case "4":
                    href1.addClass("hide");
                    href2.addClass("hide");
                    href3.addClass("hide");
                    href4.removeClass("hide");
                    href5.addClass("hide");
                    break;
                case "sample":
                    href1.addClass("hide");
                    href2.addClass("hide");
                    href3.addClass("hide");
                    href4.addClass("hide");
                    href5.removeClass("hide");
                    break;
            }
            break;        
        case "gift-subscription-dropdown":
            var href1 = $("#cta-add-to-cart-1");
            var href2 = $("#cta-add-to-cart-2");
            var href3 = $("#cta-add-to-cart-3");
            switch(value) {
                case "3":
                    href1.removeClass("hide");
                    href2.addClass("hide");
                    href3.addClass("hide");
                    break;
                case "6":
                    href1.addClass("hide");
                    href2.removeClass("hide");
                    href3.addClass("hide");
                    break;
                case "12":
                    href1.addClass("hide");
                    href2.addClass("hide");
                    href3.removeClass("hide");
                    break;
            }
            break;
        case "individual-subscription-dropdown":
            var data = $("#cta-add-to-cart");
            switch(value) {
                case "1":
                    data.attr("data-pl-units", "1");
                    break;
                case "2":
                    data.attr("data-pl-units", "2");
                    break;
                case "3":
                    data.attr("data-pl-units", "3");
                    break;
                case "4":
                    data.attr("data-pl-units", "4");
                    break;
            }
            break;
    }
});

// Pricing dropdown join now dialog
$("#join-now-quantity-select").change(function () {
    var value = this.value;
    var price = $("#select-price");
    var plural = $(".plural");
    var button = $("#add-to-cart");
    console.log(value);
    if (value == "1") {
        price.html("$20");    
        plural.removeClass("visible");
        button.attr("data-pl-units", "1");
    }
    if (value == "2") {
        price.html("$30");    
        plural.addClass("visible");
        button.attr("data-pl-units", "2");
    }
    if (value == "3") {
        price.html("$45");    
        plural.addClass("visible");
        button.attr("data-pl-units", "3");
    }
    if (value == "4") {
        price.html("$60");    
        plural.addClass("visible");
        button.attr("data-pl-units", "4");
    }
});

// Pricing dropdown pricing page
$("#join-now-quantity-select-pricing").change(function () {
    var value = this.value;
    var price = $("#select-price-price");
    var plural = $(".plural-price");
    var button = $("#add-to-cart-price");
    console.log(value);
    if (value == "1") {
        price.html("$20");    
        plural.removeClass("visible");
        button.attr("data-pl-units", "1");
    }
    if (value == "2") {
        price.html("$30");    
        plural.addClass("visible");
        button.attr("data-pl-units", "2");
    }
    if (value == "3") {
        price.html("$45");    
        plural.addClass("visible");
        button.attr("data-pl-units", "3");
    }
    if (value == "4") {
        price.html("$60");    
        plural.addClass("visible");
        button.attr("data-pl-units", "4");
    }
});

// Business pricing dropdown
$("#join-now-quantity-select-biz").change(function () {
    var value = this.value;
    var price = $("#select-biz-price");
    var plural = $(".plural");
    var button = $("#add-to-cart-biz");
    console.log(value);
    if (value == "1") {
        price.html("$70");    
        plural.removeClass("visible");
        button.attr("data-pl-units", "1");
    }
    if (value == "2") {
        price.html("$130");    
        plural.addClass("visible");
        button.attr("data-pl-units", "2");
    }
    if (value == "3") {
        price.html("$195");    
        plural.addClass("visible");
        button.attr("data-pl-units", "3");
    }
    if (value == "4") {
        price.html("$260");    
        plural.addClass("visible");
        button.attr("data-pl-units", "4");
    }
});

//
// Forms
function onSubmitForm(event) {
    grecaptcha.execute();
    event.preventDefault();
}

function recaptchaOnSubmit(token) {
    var generalContactForm = $('#general-contact-form');

    // Submit the form via ajax
    $.ajax({
        url: generalContactForm.attr('action'), 
        method: 'POST',
        data: generalContactForm.serialize(),
        // This causes Accepts header to be application/json
        dataType: "json",
        success: function() {
          // Replace the form with a thank you message
          generalContactForm.hide();
          $('#thankYou').show();
        },
        error: function() {
          // Replace the form with a thank you message
          generalContactForm.hide();
          $('#thankYou').show();
        }
    });
}
    
$('#general-contact-form').on('submit', onSubmitForm);
// End Forms
//