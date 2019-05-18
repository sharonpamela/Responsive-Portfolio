$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('body').addClass('changeColor')
          $('intro').addClass('reverseFont')
          $('name').addClass('makeInvisible')
       }
       if ($(this).scrollTop() < 50) {
          $('body').removeClass('changeColor')
          $('intro').removeClass('reverseFont')
          $('name').removeClass('makeInvisible')
       }
    });
 });