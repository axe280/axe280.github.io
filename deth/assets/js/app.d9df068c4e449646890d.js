!function(e){function r(r){for(var n,i,l=r[0],a=r[1],f=r[2],p=0,s=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(r);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={0:0},u=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var f=0;f<l.length;f++)r(l[f]);var c=a;u.push([8,1]),t()}({5:function(e,r,t){var n=t(6),o=t(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1};n(o,u);e.exports=o.locals||{}},7:function(e,r,t){},8:function(e,r,t){"use strict";t.r(r);t(0);var n=t(1),o=t.n(n);t(5);window.AOS=o.a}});

$(function() {
  // open mobile menu
  $('.burger-menu').on('click', function() {
    $('body').toggleClass('menu_opened');
    toggleDocumentScrollBlocker();
  });

  $('.menu-item__link').on('click', function() {
    $('body').removeClass(['menu_opened', 'scroll-page-locked']);
  });

  $('.drop-d-wrapp-btn .btn').on('click', function() {
    $('.drop-d-list').slideToggle(500);
  });

  $(document).bind('click touchstart', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass('drop-d-wrapp-btn')){
      $('.drop-d-list').slideUp(500);
    }
  });

  $("a.scrollto, a.menu-item__link").click(function () {
    var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
  });

  $('.bl-faq-list-cap').on('click', function() {
    $(this).parent()
      .find('.bl-faq-list-info')
      .slideToggle(300);
  });
});

function toggleDocumentScrollBlocker() {
  var body = document.body;

  if (body.classList.contains('scroll-page-locked')) {
    body.classList.remove('scroll-page-locked');
  }
  else {
    body.classList.add('scroll-page-locked');
  }
}

window.onload = function () {
  AOS.init({
    duration: 1000,
    once: true
  });

  document.body.classList.add('loaded');

  setTimeout(() => {
    document.body.classList.remove('preloader-body');
  }, 750);
};