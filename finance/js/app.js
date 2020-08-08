"use strict";

// PRE-initialization
var APP = window.APP || {};
APP.Dev = APP.Dev || {};
APP.Browser = APP.Browser || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {}; // force scroll to top on initial load

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; // shorthand operators


var _window = $(window);

var _document = $(document);

var easingSwing = [0.02, 0.01, 0.47, 1]; // default jQuery easing

(function ($, APP) {
  APP.Initilizer = function () {
    var app = {};

    app.init = function () {
      app.initGlobalPlugins();
      app.initPlugins();
      app.initComponents();
    };

    app.onLoadTrigger = function () {// APP.Plugins.Preloader.loaded();
    };

    app.refresh = function () {
      APP.Plugins.Sharer.refresh();
      APP.Plugins.Sliders.reinit();
      app.initPlugins(true);
      app.initComponents(true);
    };

    app.destroy = function () {}; // pjax triggers


    app.newPageReady = function () {
      app.refresh();
    };

    app.transitionCompleted = function () {
      APP.Plugins.AOS.refresh();
      app.onLoadTrigger();
    }; // Global plugins which must be initialized once


    app.initGlobalPlugins = function () {
      APP.Dev.Credentials.logCredentials();
      APP.Dev.Breakpoint.listenResize();
      APP.Browser().methods.setBodyTags();
      APP.Plugins.LegacySupport.init();
      APP.Plugins.ScrollBlock.listenScroll();
      APP.Plugins.Clicks.init();
      APP.Plugins.AOS.init();
      APP.Plugins.Barba.init();
    }; // Plugins which depends on DOM and page content


    app.initPlugins = function (fromPjax) {
      APP.Plugins.Teleport.init();
      APP.Plugins.Sliders.init(fromPjax);
      APP.Plugins.Modals.init();
      APP.Plugins.Masks.init();
      APP.Plugins.Selectric.init();
      APP.Plugins.LazyLoadImages.init();
      APP.Plugins.TextareaAutoExpand.init();
      APP.Plugins.Validations.init();
      APP.Plugins.LegacySupport.fixImages(); // APP.Plugins.ScrollReveal.init();
      // APP.Plugins.Ymaps.init();
      // APP.Plugins.Countdown.init();
      // APP.Plugins.FooterReveal.init();
      // APP.Plugins.ScalerDesktop.init(fromPjax);
      // plugins
      // APP.Plugins.Sticky.init(fromPjax);
      // APP.Plugins.Photoswipe.init(fromPjax);
      // APP.Plugins.DatePicker.init(fromPjax);
      // ui
      // APP.Plugins.Clipboard.init();
      // APP.Plugins.InputFocuses.init();
    }; // All components from `src/componenets`


    app.initComponents = function (fromPjax) {
      APP.Components.Header.init(fromPjax);
      APP.Components.Test.init();
    };

    return app;
  }; // a.k.a. ready


  $(function () {
    APP.Initilizer().init();
  });
  $(window).on('load', function () {
    $.ready.then(function () {
      APP.Initilizer().onLoadTrigger();
    });
  });
})(jQuery, window.APP);

(function ($, APP) {
  APP.Dev.Breakpoint = {
    setBreakpoint: function setBreakpoint() {
      var wHost = window.location.host.toLowerCase();
      var displayCondition = wHost.indexOf('localhost') >= 0 || wHost.indexOf('surge') >= 0 || wHost.indexOf('netlify') >= 0;

      if (displayCondition) {
        var wWidth = window.innerWidth;

        var wHeight = _window.height();

        var content = "<div class='dev-bp-debug'>" + wWidth + ' x ' + wHeight + '</div>';
        $('.page').append(content);
        setTimeout(function () {
          $('.dev-bp-debug').fadeOut();
        }, 1000);
        setTimeout(function () {
          $('.dev-bp-debug').remove();
        }, 1500);
      }
    },
    listenResize: function listenResize() {
      $(window).on('resize', debounce(this.setBreakpoint, 200));
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Dev.Credentials = {
    logCredentials: function logCredentials() {
      // eslint-disable-next-line
      console.log('👨‍💻 MADE WITH LOVE BY <> KHMELEVSKOY & ASSOCIATES </> https://khmelevskoy.co');
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Dev.LogOnScreen = {
    showLog: function showLog(message) {
      var wHost = window.location.host.toLowerCase();
      var displayCondition = wHost.indexOf('localhost') >= 0 || wHost.indexOf('surge') >= 0 || wHost.indexOf('netlify') >= 0;

      if (displayCondition) {
        var content = "<div class='dev-bp-debug'>" + message + '</div>';
        $('.page').append(content);
        setTimeout(function () {
          $('.dev-bp-debug').fadeOut();
        }, 1000);
        setTimeout(function () {
          $('.dev-bp-debug').remove();
        }, 1500);
      }
    }
  };
})(jQuery, window.APP); //////////
// AOS
//////////


(function ($, APP) {
  APP.Plugins.AOS = {
    init: function init() {
      AOS.init({
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120,
        // offset (in px) from the original trigger point
        delay: 0,
        // values from 0 to 3000, with step 50ms
        duration: 400,
        // values from 0 to 3000, with step 50ms
        easing: 'ease-in',
        // default easing for AOS animations
        once: true,
        // whether animation should happen only once - while scrolling down
        mirror: false,
        // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

      });
    },
    refresh: function refresh() {
      AOS.refreshHard();
    }
  };
})(jQuery, window.APP); ////////////////////
// LAZY LOAD
////////////////////


(function ($, APP) {
  APP.Plugins.LazyLoadImages = {
    init: function init() {
      var $lazy = _document.find('[js-lazy]:not(.is-loaded)');

      if ($lazy.length === 0) {
        APP.Plugins.LegacySupport.fixImages();
        return;
      }

      this.initLazy($lazy);
    },
    load: function load(DOMelement) {
      var $lazy = $(DOMelement);
      this.initLazy($lazy);
    },
    initLazy: function initLazy($lazy) {
      var _this = this;

      $lazy.Lazy({
        threshold: APP.Browser().data.isMobile ? 500 : 800,
        enableThrottle: true,
        throttle: 100,
        scrollDirection: 'vertical',
        // effect: 'fadeIn',
        // effectTime: 350,
        // visibleOnly: true,
        // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        onError: function onError(element) {
          // eslint-disable-next-line no-console
          console.log('error loading ' + element.data('src'));

          try {
            element.attr('src', element.data('src'));
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log('eroor appending src', e);
          }
        },
        beforeLoad: function beforeLoad(element) {// element.attr('style', '')
        },
        afterLoad: function afterLoad(element) {
          APP.Plugins.LegacySupport.fixImages();

          _this.animateLazy(element);
        }
      });
      triggerBody();
    },
    animateLazy: function animateLazy(element) {
      var fadeTimeout = 250;
      var $scaler = element.closest('.scaler');
      $scaler.addClass('is-loaded');

      if ($scaler.length === 0) {
        $(element).addClass('is-loaded');
      }

      if ($scaler.is('.no-bg-onload')) {
        setTimeout(function () {
          $scaler.addClass('is-bg-hidden');
        }, fadeTimeout);
      }
    }
  };
})(jQuery, window.APP); //////////
// MODALS
//////////


(function ($, APP) {
  APP.Plugins.Modals = {
    init: function init() {
      var startWindowScroll = 0;
      $('[js-popup]').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'popup-buble',
        callbacks: {
          beforeOpen: function beforeOpen() {
            startWindowScroll = _window.scrollTop(); // $('html').addClass('mfp-helper');
          },
          close: function close() {
            // $('html').removeClass('mfp-helper');
            _window.scrollTop(startWindowScroll);
          }
        }
      });
      $('[js-popup-gallery]').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка #%curr%...',
        mainClass: 'popup-buble',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
    },
    destroy: function destroy() {// ... code ...
    }
  };
})(jQuery, window.APP); //////////
// SLIDERS
//////////


(function ($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        productsSwiper: {
          instances: [],
          enableOn: 991
        }
      }
    },
    init: function init(fromPjax) {
      if (!fromPjax) {
        this.initSwipers();
        this.initSwiperDataTree();
        this.initResponsiveSwipers();
        this.listenResize();
      }
    },
    reinit: function reinit() {
      // without resize listeners double check
      this.initSwipers();
      this.initSwiperDataTree();
      this.initResponsiveSwipers();
    },
    update: function update(selector) {
      var $swiper; // if selector passed - update only with selector

      if (selector) {
        $swiper = $("".concat(selector, ".swiper-container-initialized"));
      } else {
        $swiper = $('.swiper-container-initialized');
      }

      if ($swiper.length > 0) {
        $swiper.each(function (i, swiper) {
          $(swiper)[0].swiper.update();
        });
      }
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function initSwipers() {
      var $page = $('.page').last(); // PDP gallery (initialization as a group)
      // gallery main is dependand on thumbs

      var haveGalleryThumbs = $page.find('.js-pdpGallery-thumbs').length > 0;
      var haveGalleryMain = $page.find('.js-pdpGallery-main').length > 0;

      if (haveGalleryThumbs && haveGalleryMain) {
        var selector = '.js-pdpGallery-thumbs:not(.swiper-container-initialized)';
        var $thumbs = $page.find(selector); // if ($thumbs.length === 0) return;

        $thumbs.each(function (i, thumb) {
          var id = $(thumb).data('swiper-group-id');
          new Swiper(thumb, {
            slideToClickedSlide: false,
            preventClicks: false,
            preventClicksPropagation: false,
            watchOverflow: true,
            setWrapperSize: false,
            spaceBetween: 5,
            slidesPerView: 'auto',
            normalizeSlideIndex: true,
            direction: 'vertical',
            on: {
              init: function init() {
                initGallerySwiper(id, this);
              }
            }
          });
        });
      }

      function initGallerySwiper(id, thumbsInstance) {
        // PDP main
        var selector = ".js-pdpGallery-main[data-swiper-group-id=\"".concat(id, "\"]");

        if ($page.find(selector).length > 0) {
          new Swiper(selector, {
            loop: true,
            watchOverflow: true,
            setWrapperSize: false,
            initialSlide: 0,
            spaceBetween: 5,
            centeredSlides: true,
            slidesPerView: 'auto',
            normalizeSlideIndex: false,
            freeMode: false,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            thumbs: {
              swiper: thumbsInstance
            }
          });
        }
      }
    },
    initSwiperDataTree: function initSwiperDataTree() {
      var productsSwiper = '.js-products-swiper';

      if ($(productsSwiper).length > 0) {
        this.initSwiperTree(productsSwiper, 'productsSwiper');
      }
    },
    initResponsiveSwipers: function initResponsiveSwipers() {
      var productsSwiper = '.js-products-swiper';

      if ($(productsSwiper).length > 0) {
        this.responsiveSwiperConstructor(productsSwiper, 'productsSwiper', {
          watchOverflow: true,
          setWrapperSize: false,
          spaceBetween: 0,
          slidesPerView: 'auto',
          freeMode: true,
          freeModeSticky: true
        });
      }
    },
    initSwiperTree: function initSwiperTree(selector, name) {
      var _this = this;

      _this.data.responsiveSwipers[name].instances = [];
      $(selector).each(function (i, sw) {
        _this.data.responsiveSwipers[name].instances.push(undefined);
      });
    },
    responsiveSwiperConstructor: function responsiveSwiperConstructor(selector, objName, options) {
      var dataObj = this.data.responsiveSwipers[objName];
      $(selector).each(function (idx, element) {
        if (window.innerWidth <= dataObj.enableOn) {
          if (dataObj.instances[idx] === undefined) {
            dataObj.instances[idx] = new Swiper(element, options);
          }
        } else {
          if (dataObj.instances[idx] !== undefined) {
            dataObj.instances[idx].destroy(true, true);
            dataObj.instances[idx] = undefined;
          }
        }
      });
      this.data.responsiveSwipers[objName] = dataObj;
    },
    destroy: function destroy() {// ... code ...
    }
  };
})(jQuery, window.APP); ////////////////
// FORM VALIDATIONS
// jQuery validate plugin https://jqueryvalidation.org
////////////////


(function ($, APP) {
  APP.Plugins.Validations = {
    init: function init() {
      this.localize();
      this.customMethods();
      this.validateFormsConstructor();
      this.validateFormsCustom();
    },
    data: {
      // GENERIC FUNCTIONS
      validateErrorPlacement: function validateErrorPlacement(error, element) {
        error.addClass('ui-input__validation');

        if (element.is('select')) {
          error.appendTo(element.closest('.selectric-wrapper'));
        } else if (element.is('input[type="radio"]') || element.is('input[type="checkbox"]')) {
          error.appendTo(element.closest('.ui-group'));
        } else {
          error.appendTo(element.parent('div'));
        }
      },
      validateHighlight: function validateHighlight(element) {
        var $element = $(element);

        if ($element.is('select')) {
          $element.closest('.selectric-wrapper').addClass('has-error');
        } else {
          $(element).addClass('has-error');
        }
      },
      validateUnhighlight: function validateUnhighlight(element) {
        var $element = $(element);

        if ($element.is('select')) {
          $element.closest('.selectric-wrapper').removeClass('has-error');
        } else {
          $(element).removeClass('has-error');
        }
      },
      validateSubmitHandler: function validateSubmitHandler(form) {
        $(form).addClass('loading');
        var formData = $(form).serialize();
        var sucessFunction = $(form).data('success-function');

        if (sucessFunction !== undefined) {
          var x = eval(sucessFunction);

          if (typeof x == 'function') {
            x(formData);
          }
        }
      },
      masks: {
        phone: {
          required: true,
          normalizer: function normalizer(value) {
            var PHONE_MASK = '+X (XXX) XXX-XXXX';

            if (!value || value === PHONE_MASK) {
              return value;
            } else {
              return value.replace(/[^\d]/g, '');
            }
          },
          minlength: 11,
          digits: true
        }
      }
    },
    customMethods: function customMethods() {
      $.validator.addMethod('laxEmail', function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      }, 'Email format must be like name@site.com');
    },
    localize: function localize() {
      /*
       * Translated default messages for the jQuery validation plugin.
       * Locale: RU (Russian; русский язык)
       */
      $.extend($.validator.messages, {
        required: 'Это поле необходимо заполнить.',
        remote: 'Пожалуйста, введите правильное значение.',
        email: 'Пожалуйста, введите корректный адрес электронной почты.',
        url: 'Пожалуйста, введите корректный URL.',
        date: 'Пожалуйста, введите корректную дату.',
        dateISO: 'Пожалуйста, введите корректную дату в формате ISO.',
        number: 'Пожалуйста, введите число.',
        digits: 'Пожалуйста, вводите только цифры.',
        creditcard: 'Пожалуйста, введите правильный номер кредитной карты.',
        equalTo: 'Пожалуйста, введите такое же значение ещё раз.',
        extension: 'Пожалуйста, выберите файл с правильным расширением.',
        maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'),
        minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'),
        rangelength: $.validator.format('Пожалуйста, введите значение длиной от {0} до {1} символов.'),
        range: $.validator.format('Пожалуйста, введите число от {0} до {1}.'),
        max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'),
        min: $.validator.format('Пожалуйста, введите число, большее или равное {0}.')
      });
    },
    validateFormsConstructor: function validateFormsConstructor() {
      var _this = this;

      var $forms = $('.js-validate-form:not(.is-validation-attached)');
      if ($forms.length === 0) return; // CONSTRUCTOR LIKE FIRST

      $forms.each(function (i, form) {
        var $form = $(form);
        var validationOptions = {
          errorPlacement: _this.data.validateErrorPlacement,
          highlight: _this.data.validateHighlight,
          unhighlight: _this.data.validateUnhighlight,
          submitHandler: _this.data.validateSubmitHandler,
          // rules to be set in html as well (merged props)
          rules: {
            email: {
              required: true,
              email: true,
              laxEmail: true
            },
            phone: _this.data.masks.phone
          },
          messages: {
            email: {
              required: 'Please enter email',
              email: 'Email format must be like name@site.com'
            },
            phone: {
              minlength: 'Phome form is invalid'
            }
          }
        };
        $form.validate(validationOptions);
        $form.addClass('is-validation-attached');
      });
    },
    validateFormsCustom: function validateFormsCustom() {
      var _this = this;

      var requestValidationObject = {
        errorPlacement: _this.data.validateErrorPlacement,
        highlight: _this.data.validateHighlight,
        unhighlight: _this.data.validateUnhighlight,
        submitHandler: _this.data.validateSubmitHandler,
        rules: {
          phone: _this.data.masks.phone
        },
        messages: {
          phone: {
            required: 'Заполните это поле',
            minlength: 'Введите корректный телефон'
          }
        }
      }; // call/init

      $('[js-validate-request]').validate(requestValidationObject); // $("[js-subscription-validation-footer]").validate(subscriptionValidationObject);
      // $("[js-subscription-validation-menu]").validate(subscriptionValidationObject);
    }
  };
})(jQuery, window.APP); // - Допступные варианты валидации через html теги (`type`)
// required: 'Это поле необходимо заполнить.', // тег required
// remote: 'Пожалуйста, введите правильное значение.', // валидация через запрос к API
// email: 'Пожалуйста, введите корректный адрес электронной почты.', // type="email"
// url: 'Пожалуйста, введите корректный URL.', // type="url"
// date: 'Пожалуйста, введите корректную дату.', // type="date"
// dateISO: 'Пожалуйста, введите корректную дату в формате ISO.', // type="dateISO"
// number: 'Пожалуйста, введите число.', // type="number"
// digits: 'Пожалуйста, вводите только цифры.', // type="digits"
// // creditcard: 'Пожалуйста, введите правильный номер кредитной карты.', // тег creditcard - нужно подключение отдельного плагина
// equalTo: 'Пожалуйста, введите такое же значение ещё раз.', // equalTo="xxx"
// // extension: 'Пожалуйста, выберите файл с правильным расширением.', // extension="zip" - нужно подключение отдельного плагина
// maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'), // maxlength="10"
// minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'), // minlength="2"
// rangelength: $.validator.format(
// 	'Пожалуйста, введите значение длиной от {0} до {1} символов.',
// ), // rangelength="[2, 6]"
// range: $.validator.format('Пожалуйста, введите число от {0} до {1}.'), // range="[2,6]"
// max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'), // max="10"
// min: $.validator.format('Пожалуйста, введите число, большее или равное {0}.'), // min="2
//////////
// MASKS
//////////


(function ($, APP) {
  APP.Plugins.Masks = {
    init: function init() {
      $('[js-dateMask]').mask('99.99.99', {
        placeholder: 'ДД.ММ.ГГ'
      });
      $("input[type='tel']").mask('+7 (000) 000-0000', {
        placeholder: '+7 (___) ___-____'
      });
    }
  };
})(jQuery, window.APP); ////////////////////
// SELECTRIC PLUGIN
////////////////////


(function ($, APP) {
  APP.Plugins.Selectric = {
    init: function init() {
      var $select = $('[js-select]');
      if ($select.length === 0) return;
      $select.selectric({
        maxHeight: 300,
        disableOnMobile: false,
        nativeOnMobile: true,
        arrowButtonMarkup: '<b class="button"><svg class="ico ico-select-down"><use xlink:href="img/sprite.svg#ico-select-down"></use></svg></b>',
        onInit: function onInit(element, data) {
          var $elm = $(element),
              $wrapper = $elm.closest('.' + data.classes.wrapper);
          $wrapper.find('.label').html($elm.attr('placeholder'));
        },
        onBeforeOpen: function onBeforeOpen(element, data) {
          var $elm = $(element),
              $wrapper = $elm.closest('.' + data.classes.wrapper);
          $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
        },
        onBeforeClose: function onBeforeClose(element, data) {
          var $elm = $(element),
              $wrapper = $elm.closest('.' + data.classes.wrapper);
          $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        }
      });
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Plugins.TextareaAutoExpand = {
    init: function init() {
      // textarea autoExpand
      _document.one('focus.autoExpand', '.ui-group textarea', function () {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
      }).on('input.autoExpand', '.ui-group textarea', function () {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
      });
    }
  };
})(jQuery, window.APP); //////////
// DETECTORS
//////////


(function ($, APP) {
  APP.Browser = function () {
    var methods = {};

    methods.isRetinaDisplay = function () {
      if (window.matchMedia) {
        var mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)');
        return mq && mq.matches || window.devicePixelRatio > 1;
      }
    };

    methods.isMobile = function () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    };

    methods.isIosDevice = function () {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        return true;
      } else {
        return false;
      }
    };

    methods.msieversion = function () {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
        return true;
      } else {
        return false;
      }
    };

    methods.setBodyTags = function () {
      $('body').addClass('is-ready');

      if (methods.msieversion()) {
        $('body').addClass('is-ie');
      }

      if (methods.isMobile()) {
        $('body').addClass('is-mobile');
      }

      if (methods.isIosDevice()) {
        $('html').addClass('is-ios');
      }
    };

    var data = {
      isIe: methods.msieversion(),
      isMobile: methods.isMobile(),
      isIosDevice: methods.isIosDevice(),
      isRetinaDisplay: methods.isRetinaDisplay()
    };
    return {
      data: data,
      methods: methods
    };
  };
})(jQuery, window.APP); //////////
// CICKS
//////////


(function ($, APP) {
  APP.Plugins.Clicks = {
    init: function init() {
      $(document).on('click', '[href="#"]', function (e) {
        e.preventDefault();
      }).on('click', '[js-link]', function (e) {
        var dataHref = $(this).data('href');

        if (dataHref && dataHref !== '#') {
          e.preventDefault();
          e.stopPropagation();
          Barba.Pjax.goTo(dataHref);
        }
      }) // prevent going the same link (if barba is connected)
      .on('click', 'a, [js-link]', function (e) {
        var href = $(this).data('href') || $(this).attr('href');
        var path = window.location.pathname;

        if (href === path.slice(1, path.length)) {
          e.preventDefault();
          e.stopPropagation();
        }
      }) // scroll to section
      .on('click', 'a[href^="#section"]', function () {
        // section scroll
        var el = $(this).attr('href');
        var topTarget = $(el).offset().top; // $('body, html').animate({scrollTop: topTarget}, 1000);

        TweenLite.to(window, 1, {
          scrollTo: {
            y: topTarget,
            autoKill: false
          },
          ease: easingSwing
        });
        return false;
      }) // grid toggler
      .on('click', '[js-show-grid]', function () {
        $(this).toggleClass('is-active');
        $('.demo-grid').fadeToggle();
      });
    },
    destroy: function destroy() {// ... code ...
    }
  };
})(jQuery, window.APP); //////////////////////////////////
// HELPERS and PROTOTYPE FUNCTIONS
//////////////////////////////////
// LINEAR NORMALIZATION


function normalize(value, fromMin, fromMax, toMin, toMax) {
  var pct = (value - fromMin) / (fromMax - fromMin);
  var normalized = pct * (toMax - toMin) + toMin; //Cap output to min/max

  if (normalized > toMax) return toMax;
  if (normalized < toMin) return toMin;
  return normalized;
} // get window width (not to forget about ie, win, scrollbars, etc)


function getWindowWidth() {
  return window.innerWidth;
} // manually trigger events to start certain plugins


function triggerBody() {
  $(window).scroll();
  $(window).resize();
} // Format with spaces


function formatNumberWithSpaces(num) {
  return num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
} // Add padding to numbers (a.k.a format by mask 00)
// use (9).pad(2) // output - 09


Number.prototype.pad = function (size) {
  var s = String(this);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}; // check if certain breakpoint was went through


function hasCrossedBreakpoint(prevResize, curWidth, targetBp) {
  if (curWidth >= targetBp && prevResize <= targetBp || curWidth <= targetBp && prevResize >= targetBp) {
    return true;
  }

  return false;
} // Plurize (russian)
// использование Plurize(number, 'пешеход', 'пешехода', 'пешеходов')
// автоматическая генерация как в английском не работает из-за склонений
// например "1 пешеход", "2 пешехода", "5 пешеходов"
// или "1 человек", "2 человека", "5 человек"  {1 и 5} - одиникавые


function Plurize(number, one, two, five) {
  var n = Math.abs(number);
  n %= 100;

  if (n >= 5 && n <= 20) {
    return five;
  }

  n %= 10;

  if (n === 1) {
    return one;
  }

  if (n >= 2 && n <= 4) {
    return two;
  }

  return five;
} // convert hex to rgba


function rgba(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
} // MEDIA Condition helper function


function mediaCondition(cond) {
  var disabledBp;
  var conditionMedia = cond.substring(1);
  var conditionPosition = cond.substring(0, 1);

  if (conditionPosition === '<') {
    disabledBp = getWindowWidth() < conditionMedia;
  } else if (conditionPosition === '>') {
    disabledBp = getWindowWidth() > conditionMedia;
  }

  return disabledBp;
} //////////
// LEGACY
//////////


(function ($, APP) {
  APP.Plugins.LegacySupport = {
    init: function init() {
      // svg support for laggy browsers
      svg4everybody();

      if (!APP.Browser().data.isIe) {
        // Viewport units buggyfill
        window.viewportUnitsBuggyfill.init({
          force: false,
          refreshDebounceWait: 150,
          appendToBody: true
        });
      }
    },
    fixImages: function fixImages() {
      if (APP.Browser().data.isIe) {
        // if LAZY LOAD is used, move initialization to afterFinishAll
        picturefill();
        objectFitImages();
      }
    }
  };
})(jQuery, window.APP); //////////
// BARBA PJAX
//////////


(function ($, APP) {
  APP.Plugins.Barba = {
    getData: function getData() {
      return this.data;
    },
    init: function init() {
      // config
      Barba.Pjax.Dom.containerClass = 'page';
      this.data = this.data || {};
      this.data.transitionInitElement = ''; // initilization path

      this.getTransition();
      Barba.Prefetch.init();
      Barba.Pjax.start();
      this.listenEvents();
    },
    getTransition: function getTransition() {
      // set barba transition
      var _this = this;

      Barba.Pjax.getTransition = function () {
        return _this.transitions.FadeTransition; // return _this.transitions.HideShowTransition;
        // when there are multiple transitions on project
        // if ( transitionInitElement ){
        //   if ( transitionInitElement.attr('data-transition') ){
        //     var transition = transitionInitElement.data('transition');
        //     // console.log(transition)
        //     // if ( transition === "project" ){
        //     //   return ProjectTransition
        //     // }
        //   }
        //   return FadeTransition;
        // } else {
        //   // first visit + back button (history is blank)
        //   window.location.href = Barba.HistoryManager.history[1].url
        // }
      };
    },
    transitions: {
      HideShowTransition: Barba.BaseTransition.extend({
        start: function start() {
          this.newContainerLoading.then(this.finish.bind(this));
        },
        finish: function finish() {
          document.body.scrollTop = 0;
          this.done();
        }
      }),
      FadeTransition: Barba.BaseTransition.extend({
        start: function start() {
          Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
        },
        fadeOut: function fadeOut() {
          var _this = this;

          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);
          var deferred = Barba.Utils.deferred();
          TweenLite.to($oldPage, 0.5, {
            opacity: 0,
            ease: Power1.easeIn,
            onComplete: function onComplete() {
              deferred.resolve();
            }
          });
          return deferred.promise;
        },
        fadeIn: function fadeIn() {
          var _this = this;

          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);
          $(this.oldContainer).hide();
          $newPage.css({
            visibility: 'visible',
            opacity: 0
          });
          TweenLite.to(window, 0.15, {
            scrollTo: {
              y: 0,
              autoKill: false
            },
            ease: easingSwing
          });
          TweenLite.to($newPage, 0.5, {
            opacity: 1,
            ease: Power1.easeOut,
            onComplete: function onComplete() {
              _this.done();
            }
          });
        }
      })
    },
    listenEvents: function listenEvents() {
      // initialized transition
      var _this = this;

      Barba.Dispatcher.on('linkClicked', function (el) {
        _this.data.transitionInitElement = el instanceof jQuery ? el : $(el);
      }); // The new container has been loaded and injected in the wrapper.

      Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
        APP.Initilizer().newPageReady();
      }); // The transition has just finished and the old Container has been removed from the DOM.

      Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus) {
        APP.Initilizer().transitionCompleted();
      });
    }
  };
})(jQuery, window.APP); //////////
// ScrollBlock
//////////
// disable / enable scroll by setting negative margin to page-content eq. to prev. scroll
// this methods helps to prevent page-jumping on setting body height to 100%


(function ($, APP) {
  APP.Plugins.ScrollBlock = {
    data: {
      y: _window.scrollTop(),
      blocked: false,
      direction: undefined,
      lastForScrollDir: 0,
      lastForBodyLock: 0,
      fillGapMethod: 'padding',
      scrolllDisabled: false
    },
    getData: function getData() {
      return this.data;
    },
    fillScrollbarGap: function fillScrollbarGap() {
      this.fillGapTarget($('.header').get(0));
      this.fillGapTarget(document.body);
    },
    unfillScrollbarGap: function unfillScrollbarGap() {
      this.unfillGapTarget($('.header').get(0));
      this.unfillGapTarget(document.body);
    },
    disableScroll: function disableScroll() {
      // prevent double lock
      if ($('body').is('.body-lock') || $('body').is('.body-m-lock')) return;
      if (this.data.scrolllDisabled) return;

      if (APP.Browser().data.isMobile) {
        // which elements are scrollable when scroll is locked?
        var $blockers = $('.blocker, .mobile-menu__scroller');

        if ($blockers.length > 0) {
          $blockers.each(function (i, el) {
            // disableBodyScroll(el);
            // lock(el);
            disablePageScroll(el);
          });
          this.data.scrolllDisabled = true;
          this.data.blocked = true; // APP.Dev.LogOnScreen.showLog('disablePageScroll (scoped)');

          $('body').addClass('body-m-lock');
        }
      } else {
        this.data.lastForBodyLock = _window.scrollTop();
        this.data.blocked = true;
        $('.page__content').css({
          'margin-top': '-' + this.data.lastForBodyLock + 'px'
        });
        this.fillScrollbarGap();
        $('body').addClass('body-lock');
      }
    },
    enableScroll: function enableScroll(target) {
      // console.log('enable', this.data.lastForBodyLock);
      if ($('.blocker').length) return;

      var _this = this;

      if (APP.Browser().data.isMobile) {
        // APP.Dev.LogOnScreen.showLog('enablePageScroll');
        clearQueueScrollLocks();
        enablePageScroll();
        this.data.scrolllDisabled = false;
        this.data.blocked = false;
        this.data.direction = 'up';
        $('body').removeClass('body-m-lock');
      } else {
        this.data.blocked = false;
        this.data.direction = 'up'; // keeps header

        $('.page__content').css({
          'margin-top': '-' + 0 + 'px'
        });
        this.unfillScrollbarGap();
        $('body').removeClass('body-lock');

        _window.scrollTop(this.data.lastForBodyLock);
      }
    },
    getWindowScroll: function getWindowScroll() {
      if (this.data.blocked) return;

      var wScroll = _window.scrollTop();

      this.data.y = wScroll;
      this.data.direction = wScroll > this.data.lastForScrollDir ? 'down' : 'up';
      this.data.lastForScrollDir = wScroll <= 0 ? 0 : wScroll;
      this.data.lastForBodyLock = wScroll;
    },
    listenScroll: function listenScroll() {
      _window.on('scroll', this.getWindowScroll.bind(this));
    },
    fillGapTarget: function fillGapTarget($target) {
      if ($target instanceof Node) {
        var scrollBarWidth;
        scrollBarWidth = this.getScrollBarWidth($target, true);
        var computedStyle = window.getComputedStyle($target);
        var fillGapMethod = this.data.fillGapMethod;

        if (fillGapMethod === 'margin') {
          var currentMargin = parseFloat(computedStyle.marginRight);
          $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
        } else if (fillGapMethod === 'width') {
          $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
        } else if (fillGapMethod === 'max-width') {
          $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
        } else if (fillGapMethod === 'padding') {
          var currentPadding = parseFloat(computedStyle.paddingRight);
          $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
        }
      }
    },
    unfillGapTarget: function unfillGapTarget($target) {
      if ($target instanceof Node) {
        var fillGapMethod = this.data.fillGapMethod;

        if (fillGapMethod === 'margin') {
          $target.style.marginRight = '';
        } else if (fillGapMethod === 'width') {
          $target.style.width = '';
        } else if (fillGapMethod === 'max-width') {
          $target.style.maxWidth = '';
        } else if (fillGapMethod === 'padding') {
          $target.style.paddingRight = '';
        }
      }
    },
    getScrollBarWidth: function getScrollBarWidth($target) {
      if ($target instanceof Node) {
        var documentWidth = document.documentElement.clientWidth;
        var windowWidth = window.innerWidth;
        var currentWidth = windowWidth - documentWidth;
        return currentWidth;
      } else {
        return 0;
      }
    }
  };
})(jQuery, window.APP); //////////
// TELEPORT
//////////


(function ($, APP) {
  APP.Plugins.Teleport = {
    data: {
      teleports: []
    },
    init: function init() {
      this.getElements();
      this.teleport();
      this.listenResize();
    },
    getElements: function getElements() {
      var _this = this;

      var $teleports = $('.page').last().find('.js-teleport');
      _this.data.teleports = [];

      if ($teleports.length === 0) {
        return;
      }

      $teleports.each(function (i, tp) {
        var $el = $(tp);
        var $target = $('[data-teleport-target=' + $el.data('teleport-to') + ']');
        var conditionMedia = $el.data('teleport-condition').substring(1);
        var conditionPosition = $el.data('teleport-condition').substring(0, 1);

        _this.data.teleports.push({
          el: $el,
          html: $el.html(),
          target: $target,
          conditionMedia: conditionMedia,
          conditionPosition: conditionPosition
        });
      });
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.teleport.bind(this), 100));
    },
    teleport: function teleport() {
      if (this.data.teleports.length === 0) {
        return;
      }

      $.each(this.data.teleports, function (i, obj) {
        if (obj.target && obj.html && obj.conditionPosition) {
          var condition;

          if (obj.conditionPosition === '<') {
            condition = window.innerWidth <= obj.conditionMedia;
          } else if (obj.conditionPosition === '>') {
            condition = window.innerWidth >= obj.conditionMedia;
          }

          if (condition) {
            obj.target.html(obj.html);
            obj.el.html('');
          } else {
            obj.el.html(obj.html);
            obj.target.html('');
          }
        }
      }); // re-init sliders and other components
      // APP.Plugins.Sliders.reinit();
    }
  };
})(jQuery, window.APP); //////////
// HEADER
//////////


(function ($, APP) {
  APP.Components.Header = {
    data: {
      classes: {
        fixedClass: 'is-fixed',
        visibleClass: 'is-fixed-visible',
        bodyFixedVisible: 'is-header-fixed-visible'
      },
      header: {
        container: undefined,
        bottomPoint: undefined
      }
    },
    init: function init(fromPjax) {
      if (!fromPjax) {
        this.getHeaderParams();
        this.hamburgerClickListener();
        this.listenScroll();
        this.listenResize();
      }

      this.closeMobileMenu();
      this.setMenuClass();
      this.controlHeaderClass();
    },
    getHeaderParams: function getHeaderParams() {
      var $header = $('.header');
      var headerOffsetTop = 0;
      var headerHeight = $header.outerHeight() + headerOffsetTop;
      this.data.header = {
        container: $header,
        bottomPoint: headerHeight
      };
    },
    closeMobileMenu: function closeMobileMenu() {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');
      APP.Plugins.ScrollBlock.enableScroll();
    },
    hamburgerClickListener: function hamburgerClickListener() {
      _document.on('click', '[js-hamburger]', function () {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');

        if ($(this).is('.is-active')) {
          APP.Plugins.ScrollBlock.disableScroll();
        } else {
          APP.Plugins.ScrollBlock.enableScroll();
        }
      });
    },
    listenScroll: function listenScroll() {
      _window.on('scroll', this.scrollHeader.bind(this));

      _window.on('scroll', debounce(this.scrollHeaderDebouce.bind(this), 1250, {
        trailing: true
      }));
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    },
    makeHeaderVisible: function makeHeaderVisible() {
      this.data.header.container.addClass(this.data.classes.visibleClass);
      $('body').addClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = true;
    },
    makeHeaderHidden: function makeHeaderHidden() {
      this.data.header.container.removeClass(this.data.classes.visibleClass);
      $('body').removeClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = false;
    },
    scrollHeaderDebouce: function scrollHeaderDebouce() {
      // always show header after user stop scrolling
      if (this.data.header.container !== undefined) {
        this.makeHeaderVisible();
      }
    },
    scrollHeader: function scrollHeader() {
      if (this.data.header.container !== undefined) {
        var fixedClass = 'is-fixed';
        var visibleClass = 'is-fixed-visible'; // get scroll params from blocker function

        var scroll = APP.Plugins.ScrollBlock.getData();
        if (scroll.blocked) return;

        if (scroll.y > this.data.header.bottomPoint) {
          this.data.header.container.addClass(fixedClass);

          if (scroll.y > this.data.header.bottomPoint * 2 && scroll.direction === 'up') {
            this.makeHeaderVisible();
          } else {
            this.makeHeaderHidden();
          }
        } else {
          // emulate position absolute by giving negative transform on initial scroll
          var normalized = Math.floor(normalize(scroll.y, this.data.header.bottomPoint, 0, 0, 100));
          var reverseNormalized = (100 - normalized) * -1;
          reverseNormalized = reverseNormalized * 1.2; // a bit faster transition

          this.data.header.container.css({
            transform: 'translate3d(0,' + reverseNormalized + '%,0)'
          });
          this.data.header.container.removeClass(fixedClass);
        }
      }
    },
    setMenuClass: function setMenuClass() {
      // SET ACTIVE CLASS IN HEADER
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;
      headerMenuList.each(function (i, val) {
        if ($(val).find('a').attr('href') === window.location.pathname.split('/').pop()) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
    controlHeaderClass: function controlHeaderClass() {
      this.data.header.container.attr('data-modifier', false);
      var $modifierElement = $('.page').last().find('[js-header-class]');

      if ($modifierElement.length > 0) {
        this.data.header.container.attr('data-modifier', $modifierElement.data('class'));
      }
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Components.Test = {
    init: function init() {
      $(document).on('click', function () {
        console.log('click');
      });
    }
  };
})(jQuery, window.APP);