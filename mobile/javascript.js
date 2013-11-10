$(document).ready(function(){
    
    function ol() {
        var html1 = $("#links").html();
        var links = $("#links");
        var content = $("#linkcontent");
        var oc1 = $("#oc");
        if (html1.indexOf("Open") != -1) {
                //$("#links").html("<p>BOB</p>");
                content.css("display", "block");
                oc1.html("Close links");
                scrollTo(100,50000000);
        }else{
                //$("#links").html("<p>LINKS</p>");
                content.css("display", "none");
                oc1.html("Open links");
        }
    }
    
    function oa() {
        var css1 = $("#about").css("display");
        var about = $("#about");
        var oc2 = $("#link3");
        if (css1.indexOf("none") != -1) {
                about.css("display", "block");
                scrollTo(100,50000000);
        }else{
                about.css("display", "none");
        }
    }
    
    $("#links").click(function(){
        ol();
    });
    
    $("#link3").click(function(){
        oa();
        ol();
    });
    
});