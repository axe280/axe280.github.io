!function(e){function n(n){for(var r,i,c=n[0],l=n[1],a=n[2],p=0,s=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var f=l;u.push([2,1]),t()}([,,function(e,n,t){"use strict";t.r(n);t(3),t(6),t(8),t(10)},function(e,n,t){window.jQuery=t(1),window.$=window.jQuery,t(4),t(5);var r=document.querySelector(".burger-menu");r&&r.addEventListener("click",(function(){document.body.classList.toggle("menu_opened")}))},,,function(e,n,t){var r=t(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){}]);

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
