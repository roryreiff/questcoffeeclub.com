// heros

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
            var href = $("#cta-add-to-cart");
            switch(value) {
                case "1":
                    href.attr("data-pl-seats", "1");
                    href.attr("href", "https://plasso.com/s/q9OugNDtIG/plan/business_sub");
                    break;
                case "2":
                    href.attr("data-pl-seats", "2");
                    href.attr("href", "https://plasso.com/s/q9OugNDtIG/plan/business_sub");
                    break;
                case "3":
                    href.attr("data-pl-seats", "3");
                    href.attr("href", "https://plasso.com/s/q9OugNDtIG/plan/business_sub");
                    break;
                case "4":
                    href.attr("data-pl-seats", "4");
                    href.attr("href", "https://plasso.com/s/q9OugNDtIG/plan/business_sub");
                    break;
                case "sample":
                    href.attr("data-pl-seats", "1");
                    href.attr("href", "https://plasso.com/s/q9OugNDtIG/product/12_oz_sample");
                    break;
                default:
                    // code
                    break;
            }
            break;        
        case "gift-subscription-dropdown":
            var href = $("#cta-add-to-cart");
            switch(value) {
                case "3":
                    href.attr("href", "https://plasso.com/s/zYdw1vzFkc/product/3_month_gift_sub");
                    break;
                case "6":
                    href.attr("href", "https://plasso.com/s/zYdw1vzFkc/product/6_month_gift_sub");
                    break;
                case "12":
                    href.attr("href", "https://plasso.com/s/zYdw1vzFkc/product/12_month_gift_sub");
                    break;
            }
            break;
        case "individual-subscription-dropdown":
            var data = $("#cta-add-to-cart");
            switch(value) {
                case "1":
                    data.attr("data-pl-seats", "1");
                    break;
                case "2":
                    data.attr("data-pl-seats", "2");
                    break;
                case "3":
                    data.attr("data-pl-seats", "3");
                    break;
                case "4":
                    data.attr("data-pl-seats", "4");
                    break;
            }
            break;
    }
});

// Pricing dropdown
$("#price-quantity-select").change(function () {
    var value = this.value;
    var type = "individual";
    if ($(this).hasClass("business-quantity")) {
        var type = "business";
    }
    var price = $("#select-price");
    var plural = $(".plural");
    console.log(value);
    if (value == "1") {
        if (type == "individual") {
            price.html("$20");    
        } else {
            price.html("$70");
            
        }
        plural.removeClass("visible");
    }
    if (value == "2") {
        if (type == "individual") {
            price.html("$30");    
        } else {
            price.html("$130");
        }
        plural.addClass("visible");
    }
    if (value == "3") {
        if (type == "individual") {
            price.html("$45");    
        } else {
            price.html("$190");
        }
        plural.addClass("visible");
    }
    if (value == "4") {
        if (type == "individual") {
            price.html("$60");    
        } else {
            price.html("$250");
        }
        plural.addClass("visible");
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