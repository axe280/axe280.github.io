jQuery(function($){

  $('input[placeholder], textarea[placeholder]').placeholder();


  $(function(){
    var val = parseInt($('#cont').attr('data-pct'));
    var $circle = $('#svgcont #bar');
    
    if (isNaN(val)) {
     val = 100; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      
      var pct = ((100-val)/100)*c;
      
      $circle.css({ strokeDashoffset: pct});
    }
  });


  // add-open-class
  $('.menu-icon-wrap').click(function(){
   if($(this).parent().is('.menu-mobile-open')){
     $(this).parent().removeClass('menu-mobile-open');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parent().addClass('menu-mobile-open');
     $('body').addClass('menu-open-wrapper-page');
   }
  });


  // add-open-class
  $('.menu-dd-open-link').click(function(){
   if($(this).parent().is('.m-dd-open')){
    $(this).parent().removeClass('m-dd-open');
   }else{
    $(this).parent().addClass('m-dd-open');
   }
  });

  // add-open-class
  $('.h-league-active').click(function(){
   if($(this).parent().is('.league-open')){
    $(this).parent().removeClass('league-open');
   }else{
    $(this).parent().addClass('league-open');
   }
  });

  $(document).bind('click touchstart', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("head-league-wrapp")){
      $(".head-league-wrapp").removeClass("league-open");
    }
  });


  // Scrool menu fixed
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.header').height()){  
      $('.header').addClass("h-sticky");
      $('#wrapper').addClass("h-sticky-buffer");
    }
    else{
      $('.header').removeClass("h-sticky");
      $('#wrapper').removeClass("h-sticky-buffer");
    }
  });


  // tabs
  $('ul.tabs').on('click', 'li:not(.current)', function() {
    $(this).addClass('current').siblings().removeClass('current')
      .parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
    if ($(this).closest('.owl-height').length) {
        var owl = $(this).closest('.owl-height');
            owl.css('height', owl.find('.owl-item.active').height() + 'px');
    }
  })


  $('.game-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoWidth:true,
    autoplay: false,
    autoplayTimeout: 5000,
    mouseDrag: true
  });


  $('.media-carousel, .st-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    mouseDrag: true
  });


  $('.staff-carousel').owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      mouseDrag: true,
      responsive:{
        0:{
            items: 1,
            margin: 10
        },
        480:{
            items: 2,
            margin: 20
        },
        768:{
            items: 3,
            margin: 20
        },
        1224:{
            items: 4,
            margin: 20
        }
      }
    });


  //popup gallery img
  $('.image-link').magnificPopup({
    type:'image'
  });


  $('.media-inner-video .media-item a, .media-main-video .media-item a, .media-video-link a').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });

  
  $('.gallery-album').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: '',
      mainClass: 'mfp-fade',
      removalDelay: 0,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        tCounter: '',
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  });


  $('.media-tabs a').click(function(e){
    e.preventDefault();
    $('.media-tabs li').each(function(i,a){
      $(a).removeClass('current');
    });
    $(this).parent().addClass('current');
    var type = $(this).parent().data('type');
    $('.st-inner-bl').each(function(i,a){
      if (type === 'all' || $(a).hasClass('media-' + type)) {
        $(a).show();
      } else {
        $(a).hide();
      }
    });
  });

  $('.control-tabs a').click(function(e){
    e.preventDefault();
    $('.control-tabs li').each(function(i,a){
      $(a).removeClass('current');
    });
    $(this).parent().addClass('current');
    var type = $(this).parent().data('type');
    $('.st-inner-bl').each(function(i,a){
      if (type === 'all' || $(a).hasClass('block-' + type)) {
        $(a).show();
      } else {
        $(a).hide();
      }
    });
  });


});



$(window).load(function() {

  $('.st-carousel-auto-height').each(function(i,o){
     $(o).owlCarousel({
         loop: false,
         nav: true,
         dots: false,
         items: 1,
         autoplay: false,
         autoplayTimeout: 5000,
         mouseDrag: true,
         autoHeight: true,
         startPosition: $(o).data('start') || 0
     });
  });

  $('.st-carousel-auto-height').on('click', '.owl-next,.owl-prev', function(e){
      var title = $(this).closest('.owl-carousel').find('.owl-item.active .st-season').data('title');
      if (title) {
        $('.inner-tt-head-slide-tt').html(title);
      }
  });

  //----------------------------------------------------
  // owl carousel thumb
  //

  var sync1 = $(".owl-slider-main");
  var sync2 = $(".owl-thumbs");
  var slidesPerPage = 0; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    items: 5,
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
});





//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);