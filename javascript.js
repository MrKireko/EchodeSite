$(document).ready(function(){
    
    var text1 = '#text1';
    var text2 = '#text2';
    
    /*text1*/
    $(text1).mouseenter(function(){
        $(text1).width(175);
        $(text2).width(65);
        $(text2).html("<br>Some");
    });
    
    $(text1).mouseleave(function(){
        $(text1).width(120);
        $(text2).width(120);
        $(text2).html("<br>Something");
    });
    
    $(text1).click(function(){
        window.open("http://www.github.com/marksomnian/echode");
    });
    
    /*text2*/
    $(text2).mouseenter(function(){
        $(text2).width(170);
        $(text1).width(65);
        $(text1).html("<br>GitHub");
    });
    
    $(text2).mouseleave(function(){
        $(text2).width(120);
        $(text1).width(120);
        $(text1).html("<br>Our GitHub");
    });
    $(text2).click(function(){
        window.open("http://marksomnian.com/echode/Index.html");
    });
	    $('.flip').mouseenter(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });
});