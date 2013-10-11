if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') == -1)) { /*checking if user uses a non-desktop browser*/
    document.location = "http://www.yahoo.com/";
}else if ((navigator.userAgent.indexOf('Mobile') != -1)) {
    document.location = "/EchodeSite/mobile/";
}

$(document).ready(function(){
    
    var link1 = '#link1';
    var link2 = '#link2';
    var link3 = '#link3';
    
    /*link1*/
    $(link1).mouseenter(function(){
        $(link1).height(85);
    });
    
    $(link1).mouseleave(function(){
        $(link1).height(65);
    });
    
    $(link1).click(function(){
        window.open("http://www.github.com/marksomnian/echode");
    });
    
    /*link2*/
    $(link2).mouseenter(function(){
        $(link2).height(85);
    });
    
    $(link2).mouseleave(function(){
        $(link2).height(65);
    });
    
    $(link2).click(function(){
        window.open("http://www.twitter.com/EchodeOfficial");
    });
    
    /*link3*/
    $(link3).mouseenter(function(){
        $(link3).height(85);
    });
    
    $(link3).mouseleave(function(){
        var display = $('#aboutcont').css('display');
        if (display == "none") {
            $(link3).height(65);
        }
    });
    
    $(link3).click(function(){
        var display = $('#aboutcont').css('display');
        if (display == "none") {
            $("#aboutcont").css("display", "block");
            console.log(display);
            $("#dl").height(180);
            $(link3).height(85);
            scrollTo(100,50000000);
        }else{
            $("#aboutcont").css("display", "none");
            console.log(display);
            $(link3).height(65);
            $("#dl").height(110);
        }
    });
    
    var about1 = $("#about1");
    
    //about1
    about1.click(function(){
        document.location = "team.html";
    });
    
    //logo flip
    $('.flip').mouseenter(function () {
        $(this).find('.card').addClass('flipped').mouseleave(function () {
            $(this).removeClass('flipped');
        });
        return false;
    });
});