$('.bannerSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.resourcesSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.eventSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button class="prevBtn btn"><img src="img/left.png" class="img-fluid" alt=""></button>',
    nextArrow: '<button class="nextBtn btn"><img src="img/right.png" class="img-fluid" alt=""></button>'
  });


  $('.navbar-toggler-btn').click(function(){
    $('#navbarSupportedContent').css('transform','translateX(0)')
  })
  $('.btn-closer').click(function(){
    $('#navbarSupportedContent').css('transform','translateX(-100%)')
  })

  