/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
  /*CSS ANIMATION*/
$(window).scroll(function (){ 
  $(' .animate').each(function (){
   if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
    $(this).addClass($(this).data('animation')); 
  } 
  }); 
});﻿
 /*SCROLL SCRIPT*/
 $('.toBottom ').click(function(){
      $("html, body").animate({ scrollTop: $(".advantages").offset().top  }, 1500);
      return false;
   });
   $('.toTop ').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 2500);
      return false;
   });
  // Video start/click 


 $('.video__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: true,
  asNavFor: '.video__slider--small'
});
$('.video__slider--small').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.video__slider',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

 $('.client__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

 $('.comment__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

  // Equal Height
function setEqualHeight(columns)
{
  var tallestcolumn = 0;
  columns.each(
    function()
    {
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn)
      {
        tallestcolumn = currentHeight;
      }
    }
    );
  columns.height(tallestcolumn);
}
$(window).load(function() {
  if( $( window ).width() >= 768 ) {
    setEqualHeight($(".advantages .box__heading"));
    setEqualHeight($(".advantages .box__info"));
    setEqualHeight($(".comment__slider--box .ic"));
  }
});

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/


// Fixed navbar on Scroll
/*if(!$('.navbar-toggle').is(':visible')) {
  $('.navbar').affix({
    offset: {
      top: $('header').innerHeight()
    }
  }); 
}*/

// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
    target: '.navbar-fixed-top'
})*/

// Navbar class active
/*$(document).ready( function () {
  $(".nav li").click( function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
});*/

// Dropdowns on hover on desktop
/*var navbarToggle = '.navbar-toggle'; // name of navbar toggle, BS3 = '.navbar-toggle', BS4 = '.navbar-toggler'  
$('.dropdown, .dropup').each(function() {
  var dropdown = $(this),
    dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
    dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false;
  
  // Mouseover
  dropdown.hover(function(){
    var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none' && $(document).width() >= 992 ;
    if ((dropdownHoverAll === true || (dropdownHoverAll === false && notMobileMenu))) { 
      dropdownToggle.trigger('click');
    }
  });
});*/


// Close dropdowns on "esc"
/*$('.dropdown-menu').bind('keydown',function(event) {
  // ESC = Keycode 27
  if (event.keyCode == 27) {
    $(this).parrent().find('.dropdown-toggle').dropdown('toggle');
  }
});*/

// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});*/

// Equal height
$(window).on('resize', function(){
  // For all screen
  //setEqualHeight($(".work-item"));

  // Only 767px-
  if( $( window ).width() <= 767 ) {
    setEqualHeight($(".comment__slider--box .ic"));
  }

  // Only 768px+
  if( $( window ).width() >= 768 ) {
  }

  // Only 992px+
  if( $( window ).width() >= 992 ) {
  }
}).resize();
