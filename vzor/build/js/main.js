//table scroll
!function(e,r){"use strict";function t(){var e=r(this),t=e.closest(".scroltable-wrapper"),l=t.children(".scroltable-nav-left"),a=t.children(".scroltable-nav-right"),s=t.children(".scroltable-container"),n=s.scrollLeft();s.width()<e.outerWidth(!0)?(n>0?l.finish().fadeIn():l.finish().fadeOut(),e.outerWidth(!0)-s.width()>n?a.finish().fadeIn():a.finish().fadeOut()):(l.finish().hide(),a.finish().hide())}function l(){c.each(t)}function a(){var e=r(this),l=e.parent(),a=l.children(".scroltable-container"),s=a.scrollLeft()+(e.is(".scroltable-nav-left")?-100:100);a.animate({scrollLeft:s},300,t.bind(a.children(".scroltable")[0]))}function s(){return c&&c.length&&this.each(function(){var e=r(this),t=c.not(e);t.length<c.length&&(c=t,e.closest(".scroltable-wrapper").children(".scroltable-nav").off(".scroltable").end().children(".scroltable-container").off(".scroltable").end().after(e.detach()).remove().end().removeClass("scroltable"))}),this}function n(e){return"destroy"===e?s.apply(this,Array.prototype.slice.call(arguments,1)):this}function i(){s.call(this);var n=r('<div class="scroltable-wrapper"></div>'),i=r('<div class="scroltable-nav scroltable-nav-left"></div><div class="scroltable-nav scroltable-nav-right"></div>'),o=r('<div class="scroltable-container"></div>'),h=this.addClass("scroltable").wrap(n).before(i).wrap(o);return c=c?c.add(h):h,h.each(function(){r(this).closest(".scroltable-wrapper").children(".scroltable-nav").on("click.scroltable-wrapper",a).end().children(".scroltable-container").on("scroll.scroltable-wrapper",t.bind(this))}),r(e).off("resize.scroltable-wrapper").on("resize.scroltable-wrapper",l).trigger("resize.scroltable-wrapper"),this}var c;r.fn.scroltable=function(e){return"string"==typeof e?n.apply(this,arguments):i.apply(this,arguments)}}(this,jQuery);


'use strict';


// main section animation
document.addEventListener('DOMContentLoaded', function() {
  var headScene = document.querySelector('.head-animation-js');
  headScene.classList.add('h-animated');

  setTimeout(function() {
    headScene.classList.remove('h-animated');
    headScene.classList.remove('head-animation-js');
   }, 3000);
}, false);



(function() {

  // Scrool menu fixed
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.header-line').height()){  
      $('.header-main').addClass("sticky");
    }
    else{
      $('.header-main').removeClass("sticky");
    }
  });

  // add-open-class
  $('.burger-menu').click(function(){
    $('.header').toggleClass('opened-menu');
    $('body').toggleClass('menu-open-wrapper-page');
  });

  $('.h-search .h-icon-inner').click(function(){
    $('.header').addClass('opened-search');
    $('.h-search-field input').focus();
  });

  $('.h-search-close').click(function(){
    $('.header').removeClass('opened-search');
  });

  // $(document).bind('click touchstart', function(e) {
  //   var $clicked = $(e.target);
  //   if (! $clicked.parents().hasClass("opened")){
  //     $(".head-search-wrapp").removeClass("opened");
  //   }
  // });

  //jcf file and select
  jcf.setOptions('File', {
    buttonText: 'Выбрать',
    placeholderText: 'Выберите файл'
  });

  jcf.setOptions('Select', {
    wrapNative: false,
    multipleCompactStyle: true,
    maxVisibleItems: 6,
    useCustomScroll: false
  });

  jcf.replaceAll();

  //inputs focus form
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


  //scroll to slow
  $("a.scroll-head").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
  });

  //tabs
   $('ul.main-h-tabs').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .parents('div.section-tabs').find('div.main-h-tab-box').addClass('visible').eq($(this).index()).fadeIn(0).siblings('div.main-h-tab-box').hide().removeClass('visible');
    })

  // carousel
  $('.st-carousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1
  });

  $('.owl-carousel-flex').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    margin: 20,
    autoWidth: true
  });


  $('.table-card').scroltable();
  $('.table-card').after('<div class="table-push-right-pan"></div>');
})();



//file
!function(e){e.addModule(function(e){"use strict";return{name:"File",selector:'input[type="file"]',options:{fakeStructure:'<span class="jcf-file"><span class="jcf-fake-input"></span><span class="jcf-upload-button"><span class="jcf-button-content"></span></span></span>',buttonText:"Choose file",placeholderText:"No file chosen",realElementClass:"jcf-real-element",extensionPrefixClass:"jcf-extension-",selectedFileBlock:".jcf-fake-input",buttonTextBlock:".jcf-button-content"},matchElement:function(e){return e.is('input[type="file"]')},init:function(){this.initStructure(),this.attachEvents(),this.refresh()},initStructure:function(){this.doc=e(document),this.realElement=e(this.options.element).addClass(this.options.realElementClass),this.fakeElement=e(this.options.fakeStructure).insertBefore(this.realElement),this.fileNameBlock=this.fakeElement.find(this.options.selectedFileBlock),this.buttonTextBlock=this.fakeElement.find(this.options.buttonTextBlock).text(this.options.buttonText),this.realElement.appendTo(this.fakeElement).css({position:"absolute",opacity:0})},attachEvents:function(){this.realElement.on({"jcf-pointerdown":this.onPress,change:this.onChange,focus:this.onFocus})},onChange:function(){this.refresh()},onFocus:function(){this.fakeElement.addClass(this.options.focusClass),this.realElement.on("blur",this.onBlur)},onBlur:function(){this.fakeElement.removeClass(this.options.focusClass),this.realElement.off("blur",this.onBlur)},onPress:function(){this.fakeElement.addClass(this.options.pressedClass),this.doc.on("jcf-pointerup",this.onRelease)},onRelease:function(){this.fakeElement.removeClass(this.options.pressedClass),this.doc.off("jcf-pointerup",this.onRelease)},getFileName:function(){var t="",s=this.realElement.prop("files");return s&&s.length?e.each(s,function(e,s){t+=(e>0?", ":"")+s.name}):t=this.realElement.val().replace(/^[\s\S]*(?:\\|\/)([\s\S^\\\/]*)$/g,"$1"),t},getFileExtension:function(){var e=this.realElement.val();return e.lastIndexOf(".")<0?"":e.substring(e.lastIndexOf(".")+1).toLowerCase()},updateExtensionClass:function(){var e=this.getFileExtension(),t=this.fakeElement.prop("className"),s=t.replace(new RegExp("(\\s|^)"+this.options.extensionPrefixClass+"[^ ]+","gi"),"");this.fakeElement.prop("className",s),e&&this.fakeElement.addClass(this.options.extensionPrefixClass+e)},refresh:function(){var e=this.getFileName()||this.options.placeholderText;this.fakeElement.toggleClass(this.options.disabledClass,this.realElement.is(":disabled")),this.fileNameBlock.text(e),this.updateExtensionClass()},destroy:function(){this.realElement.insertBefore(this.fakeElement).removeClass(this.options.realElementClass).css({position:"",opacity:""}),this.fakeElement.remove(),this.realElement.off({"jcf-pointerdown":this.onPress,change:this.onChange,focus:this.onFocus,blur:this.onBlur}),this.doc.off("jcf-pointerup",this.onRelease)}}})}(jcf);