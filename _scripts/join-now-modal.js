$('.show-join-now-modal').click(function(event){
    event.stopPropagation();
    event.preventDefault();
    
    $('#join-now-modal').removeAttr('class').addClass("reveal-modal");
    $('body').addClass('modal-active');
})

$('#modal-background-click, #join-now-modal #add-to-cart').click(function(){
    $('#join-now-modal').addClass('out');
    $('body').removeClass('modal-active');
});