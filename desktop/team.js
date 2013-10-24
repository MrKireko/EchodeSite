$(document).ready(function(){
    
    var header = $("#header");
    var erik = $("#erik");
    var bas = $("#bas");
    var marks = $("#marks");
    var ae = $("#ae");
    var ab = $("#ab");
    var am = $("#am");
    var ww = $(window).width();
    
    bas.width($(document).width());
    
    header.click(function(){
        document.location = "index.html";
    });
    
    ae.click(function(){
        if (erik.css("display") == "none") {
            erik.css("display", "inline-block");
            bas.css("display", "none");
            marks.css("display", "none");
        }else{
            erik.css("display", "none");
        }
    });
    
    ab.click(function(){
        if (bas.css("display") == "none") {
            bas.css("width", ww);
            bas.css("display", "inline-block");
            erik.css("display", "none");
            marks.css("display", "none");
        }else{
            bas.css("display", "none");
        }
    });
    
    am.click(function(){
        if (marks.css("display") == "none") {
            marks.css("display", "inline-block");
            erik.css("display", "none");
            bas.css("display", "none");
        }else{
            marks.css("display", "none");
        }
    });
    
    erik.mouseenter(function(){
        $(this).css("background-color", "#d0d0d0");
    });
    erik.mouseleave(function(){
        $(this).css("background-color", "#ccc");
    });
    
    bas.mouseenter(function(){
        $(this).css("background-color", "#d0d0d0");
    });
    bas.mouseleave(function(){
        $(this).css("background-color", "#ccc");
    });
    
    marks.mouseenter(function(){
        $(this).css("background-color", "#d0d0d0");
    });
    marks.mouseleave(function(){
        $(this).css("background-color", "#ccc");
    });
    
});