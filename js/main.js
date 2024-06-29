// customer slider

$('.customer-outer').slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  // centerMode: true,
  // variableWidth: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
  ]
  
});



// review slider

$('.review-slider-sec').slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
    ]
});

// go to top

var btn = $('#toTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// menubar

$(".navbar-toggler").click(function () {
  $(".navbar-collapse").toggleClass("menu-visible");
  $(".menu_overlay").toggleClass("menu-visible");
  $("body").css("overflow", "hidden");
});

$(".menu_close_btn").click(function () {
  $(".navbar-collapse").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".menu_overlay").removeClass("menu-visible");
  $("body").css("overflow", "auto");
});

$(".menu_overlay").click(function () {
  $(".menu_overlay").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".navbar-collapse").removeClass("menu-visible");
  $("body").css("overflow", "auto");
});

// toggle password

$(".toggle-password").click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  $(this).toggleClass("show");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});