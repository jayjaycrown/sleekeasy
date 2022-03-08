(function ($) {

  "use strict";

  $('.ogs-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.trending-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '80px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.results').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.services').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // dots: true,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });


  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });

  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: false,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    });

  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });


  $('.blog-main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },

    ]
  });









  //animation scroll js
  var html_body = $('html, body');
  $('.navbar a , .scroll-down a , .backtotop a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 65
        }, 1500);
        return false;
      }
    }
  });
  // preloader
  $(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut(1000);

  });
  // Closes responsive menu when a scroll link is clicked
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // smooth scroll js 
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var stikey = $('.sticky-top');

    if (scrolling >= 100) {

      $(stikey).addClass("nav-bg");

    } else {

      $(stikey).removeClass("nav-bg");
    }
    if (scrolling > 280) {
      $('.backtotop').fadeIn(500);
    } else {
      $('.backtotop').fadeOut(500);
    }
  });
  //scorllspy js
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
  })
}(jQuery));
