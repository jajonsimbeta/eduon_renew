$(document).ready(function(){

   
    $('.eduon_header').hover(function(){
        $('.eduon_header').addClass('header_over');
    },function(){
        $('.eduon_header').removeClass('header_over');
    });
   

    $('.myname').click(function(){
        $(this).toggleClass('on');
    });

});