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
    $(this).find(".reviews-explanation").addClass("visible");
  }, function() {
    $( this ).find(".reviews-explanation").removeClass("visible");
  }
);

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