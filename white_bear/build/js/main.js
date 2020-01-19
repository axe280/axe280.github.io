(function() {

  // jcf
  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: true,
    maxVisibleItems: 5,
    useCustomScroll: true
  });

  jcf.replaceAll();


  $('.input-placeholder').focus(function(){
    $(this).parents('.field-item').addClass('focused');
  });

  $('.input-placeholder').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.field-item').removeClass('focused');  
    } else {
      $(this).addClass('filled');
    }
  })  

  $('.modal-open').magnificPopup({
    type:'inline',
    midClick: true
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.header').height()){  
      $('.header').addClass("scroll-h");
    }
    else{
      $('.header').removeClass("scroll-h");
    }
  });

  // add-open-class
  $('.burger-menu').click(function(){
    $('.header').toggleClass('opened-header');
    $('body').toggleClass('menu-opened');
  });

  $('.header-close-btn').click(function(){
    $('.header').toggleClass('opened-header');
    $('body').toggleClass('menu-opened');
  });

  $('.head-menu-list-tt').click(function(){
    $(this).parent().toggleClass('opened');
  });

  $('.h-search-open-btn').click(function(){
    $(this).parent().addClass('opened');
    $('.head-search-wrapp .form-search input').focus();
  });

  $('.read-answer').click(function(){
    $(this).parent().toggleClass('opened-a');
  });

  $(document).bind('click touchstart', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("opened")){
      $(".head-search-wrapp").removeClass("opened");
    }
  });

  $('.acc-toggle').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $this.removeClass('acc-opened');
    } else {
        $this.addClass('acc-opened');
        $this.parent().parent().find('li .acc-inner').removeClass('show');
        $this.parent().parent().find('li .acc-inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });


  $(".abs-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    // autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false
  });


  //show more text
  var showChar = 300;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "читать полностью";
  var lesstext = "скрыть отзыв";
  

  $('.case-h-read-more').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span> <a href="" class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
      }
  });

  $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
          $(this).prev().css("display", "none");
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
          $(this).prev().css("display", "inline");
      }
      $(this).parent().prev().toggle();
      return false;
  });


  $('.carousel-auto-width').owlCarousel({
    margin: 0,
    loop: false,
    autoWidth: true,
    nav: false,
    dots: false
  })
  


    //----------------------------------------------------
  // owl carousel thumb
  //

  var sync1 = $(".owl-slider-main");
  var sync2 = $(".owl-thumb-main");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
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
    nav: true,
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