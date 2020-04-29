!function(e){function t(t){for(var n,i,l=t[0],a=t[1],c=t[2],p=0,s=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(f&&f(t);s.length;)s.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,l=1;l<r.length;l++){var a=r[l];0!==o[a]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={0:0},u=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=a;u.push([2,1]),r()}([,,function(e,t,r){"use strict";r.r(t),function(e){r(4),r(6);var t=r(0),n=r.n(t);r(7),r(9);e.jQuery=n.a,e.$=n.a}.call(this,r(3))},,function(e,t,r){"use strict";r(5)},,,function(e,t,r){var n=r(8);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(1)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){}]);

(function() {
  
  $('.burger-menu').click(function(){
  $('body').toggleClass('menu_opened')
})

$('.close-promo-panel').click(function(){
  $('body').removeClass('promo-panel_opened')
})

$('.modal-f-close').click(function(){
  $('body').removeClass('modal_opened')
})

$('.open-modal').on('click touchend', function(){
  $('body').removeClass('menu_opened')
  $('body').addClass('modal_opened')
})

$('.modal-f-close').click(function(){
  $('body').removeClass('modal_opened')
})

$('.modal-f-wrapper').click(function(event){
  if (event.target === this) {
    $('body').removeClass('modal_opened')
  }
})

$('.products-head__item').click(function(){
  if (this.dataset.module === 'module') {
    $('[data-panel]').removeClass('active')
    $('[data-module]').addClass('active')
  }

  if (this.dataset.panel === 'panel') {
    $('[data-module]').removeClass('active')
    $('[data-panel]').addClass('active')
  }
})

$('.product-item').mouseover(function(){
  $('.product-item').addClass('not-hover')
  $(this).removeClass('not-hover')
})

$('.product-item').mouseleave(function(){
  $('.product-item').removeClass('not-hover')
})

$('.open-video-btn').click(function(){
  $('body').addClass('video-modal_opened')
  $('.video-modal').fadeIn()
})

$('.close-video-panel').click(function(){
  $('body').removeClass('video-modal_opened')
  $('.video-modal').fadeOut()
})

$('.video-modal').click(function(event){
  if (event.target === this) {
    $('body').removeClass('video-modal_opened')
    $('.video-modal').fadeOut()
  }
})

// Scrool menu fixed
$(window).scroll(function() {
  if ($(this).scrollTop() > 200){  
    $('body').addClass("sticky")
  }
  else{
    $('body').removeClass("sticky")
  }
})

// increase/reduce modules
let imgCounter = 0

let modulesData = [
  {
    src: 'assets/img/modules/volts.302.png',
    capacity: '2',
    capacityBonus: '1',
    reserve: '8',
    reserveBonus: '4'
  },
  {
    src: 'assets/img/modules/volts.301.png',
    capacity: '3',
    capacityBonus: '2',
    reserve: '12',
    reserveBonus: '8'
  },
  {
    src: 'assets/img/modules/volts.300.png',
    capacity: '4',
    capacityBonus: '3',
    reserve: '16',
    reserveBonus: '12'
  },
  {
    src: 'assets/img/modules/volts.299.png',
    capacity: '5',
    capacityBonus: '4',
    reserve: '20',
    reserveBonus: '16'
  },
  {
    src: 'assets/img/modules/volts.298.png',
    capacity: '6',
    capacityBonus: '5',
    reserve: '24',
    reserveBonus: '20'
  },
  {
    src: 'assets/img/modules/volts.297.png',
    capacity: '7',
    capacityBonus: '6',
    reserve: '28',
    reserveBonus: '24'
  },
  {
    src: 'assets/img/modules/volts.296.png',
    capacity: '8',
    capacityBonus: '7',
    reserve: '32',
    reserveBonus: '28'
  },
]

setModuleData(modulesData[imgCounter])
$('.add-m').on('click', increaseModule)
$('.minus-m').on('click', reduceModule)

function setModuleData(item) {
  $('.volts-modules-img').attr('src', item.src)
  $('.m-capacity').text(item.capacity)
  $('.m-capacity-bonus').text(item.capacityBonus)
  $('.m-reserve').text(item.reserve)
  $('.m-reserve-bonus').text(item.reserveBonus)
}

function increaseModule() {
  imgCounter++  

  if (imgCounter > 0) {
    $('.minus-m').attr('disabled', false)
  }
  if (imgCounter === modulesData.length - 1) {
    $('.add-m').attr('disabled', true)
  }

  setModuleData(modulesData[imgCounter])
}

function reduceModule() {
  imgCounter--

  if (imgCounter === 0) {
    $('.minus-m').attr('disabled', true)
  }
  if (imgCounter < modulesData.length - 1) {
    $('.add-m').attr('disabled', false)
  }

  setModuleData(modulesData[imgCounter])
}
// END increase/reduce modules


$(document).ready(function(){
  // set horizontal mobile scroll at center
  let outerContent = $('.represent-img-wrapp')
  let innerContent = $('.represent-img-wrapp > div')
  outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2)

  // show video
  let targetBlock = $('.represest-video-wrapp')
  let video = $('#videoInner')[0]

  if (targetBlock.length) {
    $(window).scroll(function () {
      let y = $(document).scrollTop()
      let t = targetBlock.parent().offset().top
      let b = targetBlock.height() - 200
      if (y > t - targetBlock.height() && y < t + b) {
        targetBlock.addClass('video_showed')
        // video.load()
      }
      else {
        targetBlock.removeClass('video_showed')
        video.load()
      }
    })
  }

  // sliders
  $('.main-text-slider').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: false,
    autoplay: true,
    // animateOut: 'fadeOut',
    animateIn: 'pulse',
    touchDrag: false
  })

  $('.main-img-slider').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: false,
    autoplay: true,
    animateOut: 'fadeOut',
    touchDrag: false
  })

  $('.slider-about').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    autoHeight: true
  })

  $('.day-night-slider').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: false,
    autoHeight: false,
    autoplay: true,
    autoplaySpeed: 5000,
    touchDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  })

  $('.volts-hint-slider').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    autoHeight: false,
    autoplay: false,
    touchDrag: true
  })
})

})();