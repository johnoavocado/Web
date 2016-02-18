$(document).ready(function(){
    $(".tile").hover(function(){
        $(this).css("background-color","#f269fb");
    },
    function(){
        $(this).css("background-color","#c62ad0");
    }); 
});

$(document).ready(function(){
    $(".mmenuitem").hover(function(){
        $(this).css("opacity","0.5");
    },
    function(){
        $(this).css("opacity","1.0");
    }); 
});

$(document).ready(function(){
    $(".tmitem").hover(function(){
        $(this).css("opacity","0.5");
    },
    function(){
        $(this).css("opacity","1.0");
    }); 
});