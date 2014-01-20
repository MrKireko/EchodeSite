$(document).ready(function(){

    console.log("SITE LOADED");
    var menuopen = false;
    
    $("#menubar").css("width", $(document).width());
    
    $("#button").click(function(){
        if(menuopen == false){
            $("#menubar").css("width", $(document).width()-200);
            $("#sidebar").css("display", "table-cell");
            menuopen = true;
        }else{
            $("#menubar").css("width", $(document).width());
            $("#sidebar").css("display", "none");
            menuopen = false;
        }
    });

})