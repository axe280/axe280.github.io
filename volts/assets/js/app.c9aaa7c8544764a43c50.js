!function(e){function o(o){for(var a,r,i=o[0],l=o[1],c=o[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(o);p.length;)p.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,o=0;o<n.length;o++){for(var t=n[o],a=!0,i=1;i<t.length;i++){var l=t[i];0!==s[l]&&(a=!1)}a&&(n.splice(o--,1),e=r(r.s=t[0]))}return e}var a={},s={0:0},n=[];function r(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)r.d(t,a,function(o){return e[o]}.bind(null,a));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=o,i=i.slice();for(var c=0;c<i.length;c++)o(i[c]);var d=l;n.push([2,1]),t()}([,,function(e,o,t){"use strict";t.r(o),function(e){t(4),t(6);var o=t(0),a=t.n(o);t(7),t(9);e.jQuery=a.a,e.$=a.a}.call(this,t(3))},,function(e,o,t){"use strict";(function(e){t(5);e(".burger-menu").click((function(){e("body").toggleClass("menu_opened")})),e(".close-promo-panel").click((function(){e("body").removeClass("promo-panel_opened")})),e(".modal-f-close").click((function(){e("body").removeClass("modal_opened")})),e(".open-modal").on("click touchend",(function(){e("body").removeClass("menu_opened"),e("body").addClass("modal_opened")})),e(".modal-f-close").click((function(){e("body").removeClass("modal_opened")})),e(".modal-f-wrapper").click((function(o){o.target===this&&e("body").removeClass("modal_opened")})),e(".products-head__item").click((function(){"module"===this.dataset.module&&(e("[data-panel]").removeClass("active"),e("[data-module]").addClass("active")),"panel"===this.dataset.panel&&(e("[data-module]").removeClass("active"),e("[data-panel]").addClass("active"))})),e(".product-item").mouseover((function(){e(".product-item").addClass("not-hover"),e(this).removeClass("not-hover")})),e(".product-item").mouseleave((function(){e(".product-item").removeClass("not-hover")})),e(".open-video-btn").click((function(){e("body").addClass("video-modal_opened"),e(".video-modal").fadeIn()})),e(".close-video-panel").click((function(){e("body").removeClass("video-modal_opened"),e(".video-modal").fadeOut()})),e(".video-modal").click((function(o){o.target===this&&(e("body").removeClass("video-modal_opened"),e(".video-modal").fadeOut())})),e(window).scroll((function(){e(this).scrollTop()>200?e("body").addClass("sticky"):e("body").removeClass("sticky")}));var o=0,a=[{src:"assets/img/modules/volts.302.png",capacity:"2",capacityBonus:"1",reserve:"8",reserveBonus:"4"},{src:"assets/img/modules/volts.301.png",capacity:"3",capacityBonus:"2",reserve:"12",reserveBonus:"8"},{src:"assets/img/modules/volts.300.png",capacity:"4",capacityBonus:"3",reserve:"16",reserveBonus:"12"},{src:"assets/img/modules/volts.299.png",capacity:"5",capacityBonus:"4",reserve:"20",reserveBonus:"16"},{src:"assets/img/modules/volts.298.png",capacity:"6",capacityBonus:"5",reserve:"24",reserveBonus:"20"},{src:"assets/img/modules/volts.297.png",capacity:"7",capacityBonus:"6",reserve:"28",reserveBonus:"24"},{src:"assets/img/modules/volts.296.png",capacity:"8",capacityBonus:"7",reserve:"32",reserveBonus:"28"}];function s(o){e(".volts-modules-img").attr("src",o.src),e(".m-capacity").text(o.capacity),e(".m-capacity-bonus").text(o.capacityBonus),e(".m-reserve").text(o.reserve),e(".m-reserve-bonus").text(o.reserveBonus)}s(a[o]),e(".add-m").on("click",(function(){++o>0&&e(".minus-m").attr("disabled",!1);o===a.length-1&&e(".add-m").attr("disabled",!0);s(a[o])})),e(".minus-m").on("click",(function(){0===--o&&e(".minus-m").attr("disabled",!0);o<a.length-1&&e(".add-m").attr("disabled",!1);s(a[o])})),e(document).ready((function(){var o=e(".represent-img-wrapp"),t=e(".represent-img-wrapp > div");o.scrollLeft((t.width()-o.width())/2);var a=e(".represest-video-wrapp"),s=e("#videoInner")[0];a.length&&e(window).scroll((function(){var o=e(document).scrollTop(),t=a.parent().offset().top,n=a.height()-200;o>t-a.height()&&o<t+n?a.addClass("video_showed"):(a.removeClass("video_showed"),s.load())})),e(".main-text-slider").owlCarousel({items:1,loop:!0,mouseDrag:!1,dots:!1,nav:!1,autoplay:!0,animateIn:"pulse",touchDrag:!1}),e(".main-img-slider").owlCarousel({items:1,loop:!0,mouseDrag:!1,dots:!1,nav:!1,autoplay:!0,animateOut:"fadeOut",touchDrag:!1}),e(".slider-about").owlCarousel({items:1,loop:!0,mouseDrag:!1,dots:!1,nav:!0,autoHeight:!0}),e(".day-night-slider").owlCarousel({items:1,loop:!0,mouseDrag:!1,dots:!1,nav:!1,autoHeight:!1,autoplay:!0,autoplaySpeed:5e3,touchDrag:!1,animateOut:"fadeOut",animateIn:"fadeIn"}),e(".volts-hint-slider").owlCarousel({items:1,loop:!0,mouseDrag:!1,dots:!1,nav:!0,autoHeight:!1,autoplay:!1,touchDrag:!0})}))}).call(this,t(0))},,,function(e,o,t){var a=t(8);"string"==typeof a&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};t(1)(a,s);a.locals&&(e.exports=a.locals)},function(e,o,t){}]);