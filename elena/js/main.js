$(function() {
  $('.burger-menu').on('click', function() {
    $('body').toggleClass('menu_opened');
  });

  $('.main-slider').lightSlider({
    controls: false,
    item: 1
  });

  $('.aside-gallery').lightGallery({
    thumbnail: true
  }); 

  $('.review-slider').lightSlider({
    controls: false,

    responsive: [
      {
        breakpoint: 3000,
        settings: {
          item: 2,
          slideMargin: 70
        }
      },
      {
        breakpoint: 740,
        settings: {
          item: 1
        }
      }
    ]
  });

});