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
        $(link1).html("<br>GitHub");
    });
    
    $(link2).mouseleave(function(){
        $(link2).width(120);
        $(link1).width(120);
        $(link1).html("<br>Our GitHub");
    });
    $(link2).click(function(){
        window.open("mrkireko.github.io/EchodeSite/");
    });
});