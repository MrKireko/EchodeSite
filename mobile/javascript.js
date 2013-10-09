$(document).ready(function(){
    //$(".link").click(function(){
    //    $(this).html("<p>Bob</p>").click(function(){
    //        $(this).html("<p>LINKS</p>");
    //    });
    //    return false;
    //});
    
    $("#links").click(function(){
        var html1 = $("#links").html();
        var links = $("#links")
        var content = $("#linkcontent")
        var oc = $("#oc")
        if (html1.indexOf("Open") != -1) {
                //$("#links").html("<p>BOB</p>");
                content.css("display", "block");
                oc.html("Close links");
                scrollTo(100,50000000);
        }else{
                //$("#links").html("<p>LINKS</p>");
                content.css("display", "none");
                oc.html("Open links");
        }
    });
    
    
    /*$("#head").mouseenter(function(){
        $("#link").html("<p>Bob</p>").click(function(){
            $("#link").html("<p>LINKS</p>");
        });
    });*/
});