$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('body').addClass('changeColor')
          $('.name').addClass('reverseFont')
          $('.copyright').addClass('reverseFont')

       }
       if ($(this).scrollTop() < 50) {
          $('body').removeClass('changeColor')
          $('.name').removeClass('reverseFont')
          $('.copyright').removeClass('reverseFont')
       }
    });
 });