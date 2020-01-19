'use strict';

(function() {

  jcf.setOptions('File', {
    buttonText: 'Загрузить',
    placeholderText: ''
  });

  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: true,
    multipleCompactStyle: true,
    maxVisibleItems: 14,
    useCustomScroll: false
  });

  jcf.replaceAll();

  let specUploadFile = document.querySelector('.js-spec-file .jcf-fake-input');
  if (specUploadFile) {
    specUploadFile.innerHTML = 'Вы можете загрузить до 10 файлов JPG или PNG до 6 МБ каждый';
  }


  //datepicker
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
    'Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''};
  $.datepicker.setDefaults($.datepicker.regional['ru']);


  $(".js-single-datepicker").datepicker({
    showButtonPanel: true,
    beforeShow: function( input ) {
        setTimeout(function() {
            var buttonPane = $( input )
                .datepicker( "widget" )
                .find( ".ui-datepicker-buttonpane" );

            $( "<button>", {
                text: "Весь месяц",
                addClass: 'btn_max',
                click: function() {

                }
            }).appendTo( buttonPane ).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all");
        }, 1 );
    }
  });
  


  // menu
  $('.burger-menu').click(function(){
   if($(this).parents('.header').is('.menu-opened')){
     $(this).parents('.header').removeClass('menu-opened');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parents('.header').addClass('menu-opened');
     $('body').addClass('menu-open-wrapper-page');
   }
  });


  // add-open-class
  $('.question-item__head').click(function(){
    $(this).parent().toggleClass('opened');
  });

  $('.js-show-answer').click(function(){
    $(this).parents('.review').toggleClass('answer-opened');
  });

  $('.js-more-adress').click(function(){
    $(this).parents('.service-info-item').addClass('opened-more-adress');
  });

  $('.js-filials-show').click(function(){
    $(this).parent().addClass('opened-more-filials');
  });

  $('.js-worktime-show').click(function(){
    $(this).parent().toggleClass('opened-more-worktime');
  })

  $('.js-show-more-main-menu').click(function(){
    $(this).parent().addClass('opened-menu-items');
  })

  $('.js-head-city-open').click(function(){
    $(this).parents('.header').removeClass('menu-opened');
    $('body').addClass('menu-open-wrapper-page');
    $(this).parents('.header').addClass('opened-city-list');
  })

  $('.js-city-close').click(function(){
    $('body').removeClass('menu-open-wrapper-page');
    $(this).parents('.header').removeClass('opened-city-list');
  })

  $('.js-desk-close-menu').click(function(){
    $(this).parents('.header').removeClass('menu-opened');
    $('body').removeClass('menu-open-wrapper-page');
  })

  $('.js-close-r-area').click(function(){
    $(this).parents('.header').removeClass('menu-opened');
    $('body').removeClass('menu-open-wrapper-page');
  })

  $('.js-category-show').click(function(){
    $(this).parent().toggleClass('opened-category-items');
  })

  $('.js-filter-open').click(function(){
    $('body').addClass('menu-open-wrapper-page');
    $(this).parents('.filter-w').addClass('filter-opened');
  })

  $('.js-filter-open').click(function(){
    $('body').addClass('menu-open-wrapper-page');
    $(this).parents('.filter-w').addClass('filter-opened');
  })

  $('.js-ff-btn-close').click(function(){
    $('body').removeClass('menu-open-wrapper-page');
    $(this).parents('.filter-w').removeClass('filter-opened');
  })


  //carousel
  $('.events_owl-carousel').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    autoplay: false,
    margin: 20,
    mouseDrag: true,
    responsive:{
      0:{
        items: 1,
      },
      740:{
          items: 2
      },
      1100:{
          items: 3
      }
    }
  });


  $('.gallery').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    autoplay: false,
    margin: 15,
    mouseDrag: true,
    responsive:{
      0:{
        items: 1,
        margin: 15,
        autoWidth: true
      },
      1100:{
        items: 5,
        autoWidth: false
      }
    }
  });


  //----------------------------------------------------
  // owl carousel thumb
  //

  var sync1 = $(".owl-slider-main");
  var sync2 = $(".owl-thumbs");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: false,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  //
  // end owl carousel thumb
  //----------------------------------------------------


})();