"use strict";

$(function () {
  // aos animations
  AOS.init({
    once: true
  }); // svg for ie

  svg4everybody(); // page scroll blocker

  function toggleDocumentScrollBlocker() {
    var body = document.body;

    if (body.classList.contains('document-scroll-blocker')) {
      body.classList.remove('document-scroll-blocker');
    } else {
      body.classList.add('document-scroll-blocker');
    }
  } // mask


  $('input[type=tel]').mask('+7 (000) 000 00 00'); // open mobile menu

  $('.burger-menu').click(function () {
    $('body').addClass('menu_opened');
  }); // close mobile menu

  $('.burger-close').click(function () {
    $('body').removeClass('menu_opened');
  }); // open mobile dd menu

  $('.menu-open-dd-btn').click(function () {
    $(this).parent().toggleClass('opened').find('ul').slideToggle(200);
  });
  $('.menu-dd-btn').click(function () {
    $(this).parent().toggleClass('opened').find('ul').slideToggle(200);
  });
  $(document).bind('click touchstart', function (e) {
    var $clicked = $(e.target);

    if (!$clicked.parents().hasClass('mobile-menu-wrapper')) {
      $('body').removeClass('menu_opened');
    }
  });
  $(document).bind('click touchstart', function (e) {
    var $clicked = $(e.target);

    if (!$clicked.parents().hasClass('menu__dd')) {
      $('.menu__dd').removeClass('opened').find('ul').stop().slideUp(200);
    }
  }); // open faq item

  $('.faq-header').click(function () {
    $(this).parent().toggleClass('opened').find('.faq-body').slideToggle(200);
  }); //filter

  $('.filter-mob-btn').click(function () {
    toggleDocumentScrollBlocker();
    $('body').addClass('filter_open');
  });
  $('.filter-close').click(function () {
    toggleDocumentScrollBlocker();
    $('body').removeClass('filter_open');
  });
  $('.filter-items').on('click', '.filter-item__tt', function () {
    $(this).toggleClass('open').siblings('.filter-item-options').slideToggle();
  }); // checkboxes delivery tab

  var $deliveryForm = $('.delivery-form');
  $deliveryForm.on('click', 'input[type=radio]', function () {
    $deliveryForm.find('.form-del-check-wrapp').removeClass('checked');
    $(this).parents('.form-del-check-wrapp').addClass('checked');
  }); // simple tabs

  var $simpleTabs = $('.simple-tabs');
  $simpleTabs.on('click', 'li:not(.magic-line)', function () {
    $(this).addClass('current').siblings().removeClass('current').parents('.simple-tabs-wrapper').find('.simple-tabs-box').eq($(this).index()).fadeIn().addClass('visible').siblings('.simple-tabs-box').hide().removeClass('visible');
  }); // minHeight box items

  function setMinHeightBoxTab() {
    var mHeightMainBox = 0;
    $('.main-icons-section .simple-tabs-box').each(function () {
      var h = $(this).outerHeight();

      if (h > mHeightMainBox) {
        mHeightMainBox = h;
      }
    });
    $('.main-icons-section .simple-tabs-box').css('minHeight', mHeightMainBox);
  }

  setMinHeightBoxTab(); // magic line

  $('.main-icons.simple-tabs, .product-more-info .simple-tabs').each(function () {
    var $tabsWrap = $(this);
    $tabsWrap.append('<li class="magic-line"></li>');
    var $magicLine = $tabsWrap.find('.magic-line');
    $tabsWrap.children('li').click(function () {
      var $el = $(this);
      $magicLine.stop().animate({
        left: $el.position().left,
        width: $el.outerWidth()
      }, 300);
    });
    $tabsWrap.children('li:first-child').click();
  }); // validate all the same forms

  $('.js-validate-form').each(function () {
    $(this).validate({
      rules: {
        email: {
          email: true
        }
      },
      messages: {
        name: 'Текст ошибки',
        tel: {
          required: 'Текст ошибки'
        },
        comment: {
          required: 'Текст ошибки'
        },
        email: {
          required: 'Текст ошибки',
          email: 'Введите корректный e-mail'
        }
      }
    });
  });
  $('.st-modal-form .form-btn .btn').click(function () {
    var $form = $(this).parents('.st-modal-form');

    if (!$form.valid()) {
      $form.addClass('invalid-form');
    } else {
      $form.removeClass('invalid-form');
    }
  }); // swipers

  new Swiper('.swiper-tarifs', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 980px
      980: {
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  new Swiper('.swiper-review', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 980px
      980: {
        spaceBetween: 20
      }
    }
  });
  new Swiper('.swiper-contacts', {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  new Swiper('.swiper-operator', {
    slidesPerView: 2,
    spaceBetween: 6,
    freeMode: true,
    pagination: {
      el: '.swiper-operator-wrapper .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-operator-wrapper .swiper-button-next',
      prevEl: '.swiper-operator-wrapper .swiper-button-prev'
    },
    breakpoints: {
      375: {
        spaceBetween: 10
      },
      440: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      740: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      980: {
        spaceBetween: 18,
        slidesPerView: 4
      },
      1200: {
        spaceBetween: 18,
        slidesPerView: 5
      }
    }
  });
  new Swiper('.swiper-product', {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  new Swiper('.swiper-tarifs-destroy-desktop', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      980: {
        spaceBetween: 20
      }
    }
  }); // magnific popup

  $('.open-mfp-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-zoom',
    removalDelay: 300,
    cursor: null,
    callbacks: {
      open: function open() {
        toggleDocumentScrollBlocker();
      },
      close: function close() {
        toggleDocumentScrollBlocker();
      }
    }
  }); // success modal form

  $('.st-modal-form').submit(function () {
    if ($(this).valid()) {
      $.magnificPopup.open({
        items: {
          src: '#modalSuccess'
        }
      }, 0);
    }

    return false;
  }); // close magnific opened modal

  $('.btn-modal-close').click(function () {
    $.magnificPopup.close();
  }); // resize window

  $(window).resize(function () {
    setTimeout(function () {
      setMinHeightBoxTab();
    }, 100);
  }); // rating stars

  $('.rating-stars_ui').on('mouseover', '.rating-stars__item', function () {
    addRatingClass($(this), 'hover');
  }).on('mouseout', '.rating-stars__item', ratingHoverRemoveClass).on('click', '.rating-stars__item', function () {
    addRatingClass($(this), 'selected');
  });

  function ratingHoverRemoveClass() {
    $(this).parent().children('.rating-stars__item').each(function () {
      $(this).removeClass('hover');
    });
  }

  function addRatingClass($targetEl, addClassName) {
    var starVal = parseInt($targetEl.data('rating-value'), 10);
    $targetEl.parent().children('.rating-stars__item').each(function (idx) {
      if (idx < starVal) {
        $(this).addClass(addClassName);
      } else {
        $(this).removeClass(addClassName);
      }
    });
  } //scroll to slow


  $('a.scrollto').click(function () {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
      scrollTop: destination
    }, 800);
    return false;
  }); // click all product char link

  $('.all-char-link_js-click').click(function () {
    $('#allChar').click();
  }); // range slider

  var $rangeRadioBtns = $('.range-and-checkboxes-wrapper input[type="radio');
  var $rangeInput = $('.range-container input[type="range"');
  var $rangeValue = $('.range-value');
  $rangeInput.on('input', function () {
    var valPos = $(this).val();

    if (valPos < 0) {
      $(this).val(0);
      valPos = 0;
    }

    var $radioItem = $rangeRadioBtns.eq(valPos);
    $radioItem.prop('checked', true);
    $rangeValue.text($radioItem.val());
  });
  $rangeRadioBtns.on('change', function () {
    $rangeRadioBtns.each(function (index) {
      if ($(this)[0].checked) {
        $rangeInput.prop('value', index);
        $rangeValue.text($(this).val());
      }
    });
  }); // sticky buy block

  (function () {
    // elements
    var $startEl = $('[data-sticky-start]');
    var $targetEl = $('[data-sticky]');
    var $destinationEl = $targetEl.parent(); // if elements doesn't on page

    if (!$targetEl.length || !$destinationEl.length || !$startEl.length) {
      return;
    } // positions


    var resizeTimer, startBottomPosition, destinationBottomPosition; // events

    $(window).scroll(stickyHandler);
    $(window).resize(function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        calculatePositions();
        stickyHandler();
      }, 100);
    }); // init

    $(window).trigger('resize'); // calc positions

    function calculatePositions() {
      startBottomPosition = $startEl.offset().top + $startEl.height();
      destinationBottomPosition = $destinationEl.offset().top + $destinationEl.height() - $(window).height();
    }

    function stickyHandler() {
      var startPos = startBottomPosition - $(window).scrollTop();
      var destinationPos = destinationBottomPosition - $(window).scrollTop();

      if (startPos < 0) {
        $targetEl.addClass('animated');
      } else {
        $targetEl.removeClass('animated');
      }

      if (startPos < 0 && destinationPos > 0) {
        $targetEl.addClass('sticky-prod');
      } else {
        $targetEl.removeClass('sticky-prod');
      }
    }
  })();
});