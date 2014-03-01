$(document).ready(function(){
    
    var menuOpen = false;
    
    $("#menubar").css("width", $(document).width());
    $('#button').click(function() {
        $("#sidebar").slideToggle('slow');
        
        /*if(menuOpen == false){
            $("#sidebar").slideDown('slow');
            menuOpen = true;
        }else{
            menuOpen = false;
        }*/
        
        console.log("toggled");
    });
    
    /*console.log("SITE LOADED");
    var menuopen = false;
    $("#button").click(function(){
        $("#sidebar").slideToggle('slow');
    });*/

})