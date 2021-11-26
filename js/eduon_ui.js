$(document).ready(function(){

    var isTop;
    $('.eduon_header').hover(function(){
        $('.eduon_header').addClass('header_over');
    },function(){
        $('.eduon_header').removeClass('header_over');
    });
    setGnb();
    $(window).scroll(function(){
        setGnb();
    });


    function setGnb(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0){
            $('.eduon_header').addClass('fixed_top');
        }else{
            $('.eduon_header').removeClass('fixed_top');
        }
    }



    $('.myname').click(function(){
        $(this).toggleClass('on');
    });

});