$("a.show-join-now-modal").click(function(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("join now clicked");
    $("#join-now-modal").show();
    
});

$("body").delegate("#modal-button-close, #modal-bg, #join-now-modal #add-to-cart", "click", function(){
    console.log("close clicked");
    $("#join-now-modal").hide();
});