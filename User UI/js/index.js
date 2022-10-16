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






$(document).ready(function () {
  $('.sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('.main').toggleClass('active');
    $(this).toggleClass('active');
  });


  $('#addaddress').on('click', function () {
    $('#address').addClass('hide');
    $('#showAddAddr').removeClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#showAddr').on('click', function () {
    $('#address').removeClass('hide');
    $('#showAddAddr').toggleClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#addnin').on('click', function () {
    $('#nin').addClass('hide');
    $('#shownin').removeClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#showNINBtn').on('click', function () {
    $('#nin').removeClass('hide');
    $('#shownin').toggleClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#trigger').on('click', function () {
    $('#showEdit').addClass('hide');
    $('#hideEdit').removeClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#trigger2').on('click', function () {
    $('#showEdit').removeClass('hide');
    $('#hideEdit').toggleClass('hide');
    // $(this).toggleClass('hide');
  })


  $('#file1').on('change', function () {
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

    if (/^image/.test(files[0].type)) { // only image file
      var reader = new FileReader(); // instance of the FileReader
      reader.readAsDataURL(files[0]); // read the local file

      reader.onloadend = function () { // set image data as background of div
        $('img.default').attr('src', reader.result).removeClass('default')
      }
    }
  })



  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['jan', 'Feb', 'Mar', 'April', 'May', 'June'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#DEA18678',
        borderColor: '#DEA186',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#DEA186',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        borderWidth: 3,
        fill: true
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: { display: false },

      }

    },

  });










  function change_tab(tab_id) {

    $(".nav-link").attr("class", "nav-link"); //clear classes
    $(".tab-pane").attr("class", "tab-pane fade"); //clear classes

    var tab_content = "#" + tab_id;
    var tab = "#" + tab_id + "-tab";
    $(tab).attr("class", "nav-link active show");
    $(tab_content).attr("class", " tab-pane fade active show");

    $('.mynav > .active').next('li').find('a').trigger('click');
  }

});


var input = document.querySelector('input[name=tags]');
var input2 = document.querySelector('input[name=tag2]');

// initialize Tagify on the above input node reference
new Tagify(input)
new Tagify(input2)