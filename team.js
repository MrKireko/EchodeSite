$(document).ready(function(){
    
    var header = $("#header");
    var erik = $("#erik");
    var bas = $("#bas");
    var marks = $("#marks");
    
    
    header.click(function(){
        document.location = "Index.html";
    });
    
    erik.mouseenter(function(){
        $(this).css("background-color", "#ddd");
    });
    erik.mouseleave(function(){
        $(this).css("background-color", "#ccc");
    });
    
    bas.mouseenter(function(){
        $(this).css("background-color", "#ddd");
    });
    bas.mouseleave(function(){
        $(this).css("background-color", "#ccc");
    });
    
    marks.mouseenter(function(){
        $(this).css("background-color", "#ddd");
    });
    marks.mouseleave(function(){
        $(this).css("background-color", "#ccc");
    });
    
});