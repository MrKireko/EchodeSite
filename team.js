$(document).ready(function(){
    
    var header = $("#header");
    var erik = $("#erik");
    var bas = $("#bas");
    var marks = $("#marks");
    var ae = $("#ae");
    var ab = $("#ab");
    var am = $("#am");
    
    
    header.click(function(){
        document.location = "Index.html";
    });
    
    ae.click(function(){
        if (erik.css("display") == "none") {
            erik.css("display", "inline-block");
        }else{
            erik.css("display", "none");
        }
    });
    
    ab.click(function(){
        if (bas.css("display") == "none") {
            bas.css("display", "inline-block");
        }else{
            bas.css("display", "none");
        }
    });
    
    am.click(function(){
        if (marks.css("display") == "none") {
            marks.css("display", "inline-block");
        }else{
            marks.css("display", "none");
        }
    });
    
    //erik.mouseenter(function(){
    //    $(this).css("background-color", "#ddd");
    //});
    //erik.mouseleave(function(){
    //    $(this).css("background-color", "#ccc");
    //});
    //
    //bas.mouseenter(function(){
    //    $(this).css("background-color", "#ddd");
    //});
    //bas.mouseleave(function(){
    //    $(this).css("background-color", "#ccc");
    //});
    //
    //marks.mouseenter(function(){
    //    $(this).css("background-color", "#ddd");
    //});
    //marks.mouseleave(function(){
    //    $(this).css("background-color", "#ccc");
    //});
    
});