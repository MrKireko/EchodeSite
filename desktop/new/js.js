$(document).ready(function(){
    
    var menuOpen = false;
    
    $("#menubar").css("width", $(document).width());
    
    $('#button').click(function() {
        $("#sidebar").slideToggle(200);
        console.log("toggled");
    });
    
    $("#s1").click(function(){
        document.location = "index.html"
    });
    
    $("#titletext").mouseenter(function() {
        $("#motto").slideDown(200);
    });
    
    $("#titletext").mouseleave(function() {
        $("#motto").slideUp(200);
    });

})