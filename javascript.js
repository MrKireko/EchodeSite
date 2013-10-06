if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('mobile') == -1)) { /*checking if user uses a non-desktop browser*/
    document.location = "http://www.yahoo.com/";
}else if ((navigator.userAgent.indexOf('Mobile') != -1)) {
    document.location = "/EchodeSite/mobile/";
}

$(document).ready(function(){
    
    var link1 = '#link1';
    var link2 = '#link2';
    
    /*link1*/
    $(link1).mouseenter(function(){
        $(link1).width(175);
        $(link2).width(65);
        $(link2).html("<br>Web");
    });
    
    $(link1).mouseleave(function(){
        $(link1).width(120);
        $(link2).width(120);
        $(link2).html("<br>Website");
    });
    
    $(link1).click(function(){
        window.open("http://www.github.com/marksomnian/echode");
    });
    
    /*link2*/
    $(link2).mouseenter(function(){
        $(link2).width(170);
        $(link1).width(65);
        $(link2).css("margin-left", "40px;");
        $(link1).html("<br>GitHub");
    });
    
    $(link2).mouseleave(function(){
        $(link2).width(120);
        $(link1).width(120);
        $(link1).html("<br>Our GitHub");
    });
    $(link2).click(function(){
        window.open("http://mrkireko.github.io/EchodeSite/");
    });
});