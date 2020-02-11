!function(e){function t(t){for(var n,l,u=t[0],a=t[1],c=t[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},i=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=a;i.push([2,1]),r()}([,,function(e,t,r){"use strict";r.r(t);r(3),r(6),r(8),r(10)},function(e,t,r){window.jQuery=r(1),window.$=window.jQuery,r(4),r(5);var n=document.querySelector(".burger-menu");n&&n.addEventListener("click",(function(){document.body.classList.toggle("menu_opened")})),$(".main-slider").lightSlider({controls:!1,item:1}),$(".aside-gallery").lightGallery({thumbnail:!0}),$(".review-slider").lightSlider({controls:!1,responsive:[{breakpoint:3e3,settings:{item:2,slideMargin:70}},{breakpoint:740,settings:{item:1}}]})},,,function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(0)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){}]);


(function() {
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
})();
