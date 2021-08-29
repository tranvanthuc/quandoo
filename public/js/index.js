$('.carousel-mf').slick({
  infinite: true,
  speed: 300,
  mobileFirst: true,
  prevArrow: '<div class="prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="next"><i class="fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});