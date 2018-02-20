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