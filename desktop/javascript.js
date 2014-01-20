$(document).ready(function(){
    
    var logoheight = $(".flip").height()
    
    $("#logobr").css("font-size", logoheight/8)
    
    var link1 = '#link1';
    var link2 = '#link2';
    var link3 = '#link3';
    var link4 = '#link4';
    
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
            $("#dl").css("padding-bottom", "20px");
            $(link3).height(85);
            scrollTo(100,50000000);
        }else{
            $("#aboutcont").css("display", "none");
            console.log(display);
            $(link3).height(65);
            $("#dl").height(110);
            $("#dl").css("padding-bottom", "0px");
        }
    });
    $(link4).mouseenter(function(){
        $(link4).height(85);
    });
    
    $(link4).mouseleave(function(){
        $(link4).height(65);
    });
    
    $(link4).click(function(){
        window.open("http://marksomnian.com:8080/jenkins/");
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
