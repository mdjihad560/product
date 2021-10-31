(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

THEPAW TESTIMONIAL SLIDER JS
THEPAW SWIPER SLIDER JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){

/*--------------------------------------------------------------
OS STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});
	
/*--------------------------------------------------------------
OS MENU JS
--------------------------------------------------------------*/

$(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
});
$(".close, .offcanvas-overlay").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
});


if ($('.main-menu ul li a').length > 0) {
    $('.main-menu ul li a').click(function(e){
      e.preventDefault();

       var target = $(this.getAttribute('href'));
       
      $('body , html').animate({
        scrollTop: target.offset().top,
      }, 500);
    });
  }






});/*End document ready*/


$(window).on("resize", function(){


}); // end window resize


$(window).on("load" ,function(){

}); // End window LODE


})(jQuery);






