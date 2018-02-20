$('#reviews-wall').masonry({
    // options
    itemSelector: '.box-review',
    gutter: 48
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