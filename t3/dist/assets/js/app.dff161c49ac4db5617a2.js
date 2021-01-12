!function(t){function i(i){for(var a,s,o=i[0],l=i[1],h=i[2],c=0,m=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(p&&p(i);m.length;)m.shift()();return r.push.apply(r,h||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],a=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(a=!1)}a&&(r.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={0:0},r=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=i,o=o.slice();for(var h=0;h<o.length;h++)i(o[h]);var p=l;r.push([10,1]),e()}([,,function(t,i){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,i){i=i||window;for(var e=0;e<this.length;e++)t.call(i,this[e],e,this)}),Number.isNan||Object.defineProperty(Number,"isNaN",{value:function(t){return t!=t}})},,,,function(t,i){
/*!
 * jquery.instagramFeed
 *
 * @version 1.3.2
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 * @contributor csanahuja <csanahuja10@gmail.com>
 *
 * https://github.com/jsanahuja/jquery.instagramFeed
 *
 */
var e,a,n,r;e=jQuery,a={host:"https://www.instagram.com/",username:"",tag:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,display_igtv:!1,callback:null,styling:!0,items:8,items_per_row:4,margin:.5,image_size:640,lazy_load:!1,on_error:console.error},n={150:0,240:1,320:2,480:3,640:4},r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},e.instagramFeed=function(t){var i=e.fn.extend({},a,t);if(""==i.username&&""==i.tag)return i.on_error("Instagram Feed: Error, no username nor tag defined.",1),!1;if(void 0!==i.get_data&&console.warn("Instagram Feed: options.get_data is deprecated, options.callback is always called if defined"),null==i.callback&&""==i.container)return i.on_error("Instagram Feed: Error, neither container found nor callback defined.",2),!1;var s=""==i.username,o=s?i.host+"explore/tags/"+i.tag+"/":i.host+i.username+"/";return e.get(o,(function(t){try{t=t.split("window._sharedData = ")[1].split("<\/script>")[0]}catch(t){return void i.on_error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26",3)}if(void 0!==(t=(t=JSON.parse(t.substr(0,t.length-1))).entry_data.ProfilePage||t.entry_data.TagPage)){if(t=t[0].graphql.user||t[0].graphql.hashtag,""!=i.container){var a={profile_container:"",profile_image:"",profile_name:"",profile_biography:"",gallery_image:""};if(i.styling){a.profile_container=" style='text-align:center;'",a.profile_image=" style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'",a.profile_name=" style='font-size:1.2em;'",a.profile_biography=" style='font-size:1em;'";var o=(100-2*i.margin*i.items_per_row)/i.items_per_row;a.gallery_image=" style='margin:"+i.margin+"% "+i.margin+"%;width:"+o+"%;float:left;'"}var l="";i.display_profile&&(l+="<div class='instagram_profile'"+a.profile_container+">",l+="<img class='instagram_profile_image' src='"+t.profile_pic_url+"' alt='"+(s?t.name+" tag pic":t.username+" profile pic")+"'"+a.profile_image+(i.lazy_load?" loading='lazy'":"")+" />",l+=s?"<p class='instagram_tag'"+a.profile_name+"><a href='https://www.instagram.com/explore/tags/"+i.tag+"' rel='noopener' target='_blank'>#"+i.tag+"</a></p>":"<p class='instagram_username'"+a.profile_name+">@"+t.full_name+" (<a href='https://www.instagram.com/"+i.username+"' rel='noopener' target='_blank'>@"+i.username+"</a>)</p>",!s&&i.display_biography&&(l+="<p class='instagram_biography'"+a.profile_biography+">"+t.biography+"</p>"),l+="</div>");var h=void 0!==n[i.image_size]?n[i.image_size]:n[640];if(i.display_gallery)if(void 0!==t.is_private&&!0===t.is_private)l+="<p class='instagram_private'><strong>This profile is private</strong></p>";else{var p=(t.edge_owner_to_timeline_media||t.edge_hashtag_to_media).edges;g=p.length>i.items?i.items:p.length,l+="<div class='instagram_gallery'>";for(var c=0;c<g;c++){var m,d,u,y="https://www.instagram.com/p/"+p[c].node.shortcode;switch(p[c].node.__typename){case"GraphSidecar":d="sidecar",m=p[c].node.thumbnail_resources[h].src;break;case"GraphVideo":d="video",m=p[c].node.thumbnail_src;break;default:d="image",m=p[c].node.thumbnail_resources[h].src}u=void 0!==p[c].node.edge_media_to_caption.edges[0]&&void 0!==p[c].node.edge_media_to_caption.edges[0].node&&void 0!==p[c].node.edge_media_to_caption.edges[0].node.text&&null!==p[c].node.edge_media_to_caption.edges[0].node.text?p[c].node.edge_media_to_caption.edges[0].node.text:void 0!==p[c].node.accessibility_caption&&null!==p[c].node.accessibility_caption?p[c].node.accessibility_caption:(s?t.name:t.username)+" image "+c,l+="<a href='"+y+"' class='instagram-"+d+"' rel='noopener' target='_blank'>",l+="<img"+(i.lazy_load?" loading='lazy'":"")+" src='"+m+"' alt='"+u.replace(/[&<>"'`=\/]/g,(function(t){return r[t]}))+"'"+a.gallery_image+" />",l+="</a>"}l+="</div>"}if(i.display_igtv&&void 0!==t.edge_felix_video_timeline){var f=t.edge_felix_video_timeline.edges,g=f.length>i.items?i.items:f.length;if(f.length>0){for(l+="<div class='instagram_igtv'>",c=0;c<g;c++)l+="<a href='https://www.instagram.com/p/"+f[c].node.shortcode+"' rel='noopener' target='_blank'>",l+="<img"+(i.lazy_load?" loading='lazy'":"")+" src='"+f[c].node.thumbnail_src+"' alt='"+i.username+" instagram image "+c+"'"+a.gallery_image+" />",l+="</a>";l+="</div>"}}e(i.container).html(l)}null!=i.callback&&i.callback(t)}else i.on_error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25",4)})).fail((function(t){i.on_error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: "+t.status,5)})),!0}},function(t,i,e){var a=e(8),n=e(9);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};a(n,r);t.exports=n.locals||{}},,function(t,i,e){},function(t,i,e){"use strict";e.r(i);e(2),e(0);var a=e(1),n=e.n(a);e(6);!function(t,i,e){function a(t,i){this.element=t,this.layers=t.getElementsByClassName("layer");var e={calibrateX:this.data(this.element,"calibrate-x"),calibrateY:this.data(this.element,"calibrate-y"),invertX:this.data(this.element,"invert-x"),invertY:this.data(this.element,"invert-y"),limitX:this.data(this.element,"limit-x"),limitY:this.data(this.element,"limit-y"),scalarX:this.data(this.element,"scalar-x"),scalarY:this.data(this.element,"scalar-y"),frictionX:this.data(this.element,"friction-x"),frictionY:this.data(this.element,"friction-y"),originX:this.data(this.element,"origin-x"),originY:this.data(this.element,"origin-y")};for(var a in e)null===e[a]&&delete e[a];this.extend(this,n,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var n={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};a.prototype.extend=function(){if(arguments.length>1)for(var t=arguments[0],i=1,e=arguments.length;e>i;i++){var a=arguments[i];for(var n in a)t[n]=a[n]}},a.prototype.data=function(t,i){return this.deserialize(t.getAttribute("data-"+i))},a.prototype.deserialize=function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},a.prototype.camelCase=function(t){return t.replace(/-+(.)?/g,(function(t,i){return i?i.toUpperCase():""}))},a.prototype.transformSupport=function(a){for(var n=i.createElement("div"),r=!1,s=null,o=!1,l=null,h=null,p=0,c=this.vendors.length;c>p;p++)if(null!==this.vendors[p]?(l=this.vendors[p][0]+"transform",h=this.vendors[p][1]+"Transform"):(l="transform",h="transform"),n.style[h]!==e){r=!0;break}switch(a){case"2D":o=r;break;case"3D":if(r){var m=i.body||i.createElement("body"),d=i.documentElement,u=d.style.overflow;i.body||(d.style.overflow="hidden",d.appendChild(m),m.style.overflow="hidden",m.style.background=""),m.appendChild(n),n.style[h]="translate3d(1px,1px,1px)",o=(s=t.getComputedStyle(n).getPropertyValue(l))!==e&&s.length>0&&"none"!==s,d.style.overflow=u,m.removeChild(n)}}return o},a.prototype.ww=null,a.prototype.wh=null,a.prototype.wcx=null,a.prototype.wcy=null,a.prototype.wrx=null,a.prototype.wry=null,a.prototype.portrait=null,a.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),a.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],a.prototype.motionSupport=!!t.DeviceMotionEvent,a.prototype.orientationSupport=!!t.DeviceOrientationEvent,a.prototype.orientationStatus=0,a.prototype.transform2DSupport=a.prototype.transformSupport("2D"),a.prototype.transform3DSupport=a.prototype.transformSupport("3D"),a.prototype.propertyCache={},a.prototype.initialise=function(){this.transform3DSupport&&this.accelerate(this.element),"static"===t.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},a.prototype.updateLayers=function(){this.layers=this.element.getElementsByClassName("layer"),this.depths=[];for(var t=0,i=this.layers.length;i>t;t++){var e=this.layers[t];this.transform3DSupport&&this.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0,this.depths.push(this.data(e,"depth")||0)}},a.prototype.updateDimensions=function(){this.ww=t.innerWidth,this.wh=t.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},a.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},a.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},a.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,t.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,t.addEventListener("mousemove",this.onMouseMove)),t.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},a.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?t.removeEventListener("deviceorientation",this.onDeviceOrientation):t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},a.prototype.calibrate=function(t,i){this.calibrateX=t===e?this.calibrateX:t,this.calibrateY=i===e?this.calibrateY:i},a.prototype.invert=function(t,i){this.invertX=t===e?this.invertX:t,this.invertY=i===e?this.invertY:i},a.prototype.friction=function(t,i){this.frictionX=t===e?this.frictionX:t,this.frictionY=i===e?this.frictionY:i},a.prototype.scalar=function(t,i){this.scalarX=t===e?this.scalarX:t,this.scalarY=i===e?this.scalarY:i},a.prototype.limit=function(t,i){this.limitX=t===e?this.limitX:t,this.limitY=i===e?this.limitY:i},a.prototype.origin=function(t,i){this.originX=t===e?this.originX:t,this.originY=i===e?this.originY:i},a.prototype.clamp=function(t,i,e){return t=Math.max(t,i),Math.min(t,e)},a.prototype.css=function(t,i,a){var n=this.propertyCache[i];if(!n)for(var r=0,s=this.vendors.length;s>r;r++)if(n=null!==this.vendors[r]?this.camelCase(this.vendors[r][1]+"-"+i):i,t.style[n]!==e){this.propertyCache[i]=n;break}t.style[n]=a},a.prototype.accelerate=function(t){this.css(t,"transform","translate3d(0,0,0)"),this.css(t,"transform-style","preserve-3d"),this.css(t,"backface-visibility","hidden")},a.prototype.setPosition=function(t,i,e){i+="px",e+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},a.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},a.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},a.prototype.onWindowResize=function(){this.updateDimensions()},a.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,a=this.layers.length;a>e;e++){var n=this.layers[e],r=this.depths[e],s=this.vx*r*(this.invertX?-1:1),o=this.vy*r*(this.invertY?-1:1);this.setPosition(n,s,o)}this.raf=requestAnimationFrame(this.onAnimationFrame)},a.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var i=(t.beta||0)/30,e=(t.gamma||0)/30,a=this.wh>this.ww;this.portrait!==a&&(this.portrait=a,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=i,this.cy=e),this.ix=i,this.iy=e}},a.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)},t.Parallax=a}(window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),a=Math.max(0,16-(e-t)),n=window.setTimeout((function(){i(e+a)}),a);return t=e+a,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();e(7);window.AOS=n.a}]);

document.addEventListener("DOMContentLoaded", function(event) { 
  // page scroll blocker
  var toggleDocumentScrollBlocker = function() {
    var body = document.body;
  
    if (body.classList.contains('scroll-page-locked')) {
      body.classList.remove('scroll-page-locked');
    }
    else {
      body.classList.add('scroll-page-locked');
    }
  }

  var removeDocumentScrollBlocker = function() {
  	document.body.classList.remove('scroll-page-locked');
  }

  // menu
  var bMenu = document.querySelector('.burger-menu');
  if (bMenu) {
    bMenu.addEventListener('click', function() {
      document.body.classList.toggle('menu_opened');
      toggleDocumentScrollBlocker();
    });
  }

  var menuLinks = document.querySelectorAll('.menu-item__link');
  if (menuLinks) {
    for (var link of menuLinks) {
      link.addEventListener('click', function(e) {
        document.body.classList.remove('menu_opened');
        removeDocumentScrollBlocker();
      });
    }
  }

  // scroll top show
  var arrTop = document.querySelector('.arr-top');
  if (arrTop) {
    var showHeightPx = 400;
    
    window.addEventListener('scroll', debounce(
      function(e) {
        if(window.pageYOffset > showHeightPx) {
          arrTop.classList.add('show');
        } else {
          arrTop.classList.remove('show');
        };
      },
      100
    ));
  }

  //scroll to slow
  $("a.arr-top, a.menu-item__link").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });

  // show lang
  var langButton = document.querySelector('.lang-active');


  if (langButton) {
var langButtonParent = langButton.parentElement;

    langButton.addEventListener('click', function() {
      langButtonParent.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
      var targetEl = e.target.closest('.location-h-lang');
      if (targetEl) return;
      langButtonParent.classList.remove('open');
    });
  }

  // scroll animation
  AOS.init({
    // disable: 'mobile',
    duration: 600,
    once: true
  });


  // debounce
  function debounce (fn, wait) {
    var timeout
    return function () {
      clearTimeout(timeout)
      var args = arguments
      timeout = setTimeout(function () {
        fn.apply(this, args)
      }, (wait || 1))
    }
  }

  // value animate
  function animateValue(el, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        el.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
  }
  
  var $counterElements = document.querySelectorAll('.stat-list__val');

  if ($counterElements.length) {
    window.addEventListener('scroll', scrollToNumbers);
    scrollToNumbers();
  }

  function scrollToNumbers() {
    var target = document.querySelector('.target-numbers');
    var edge = window.innerHeight - target.offsetTop + window.pageYOffset;

    if (edge > 50) {
      $counterElements.forEach(el => {
        var val = Number(el.textContent);
        animateValue(el, 0, val, 1000);
        window.removeEventListener('scroll', scrollToNumbers);
      });
    }
  }

  // parallax
  if (window.innerWidth > 980) {
    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);
  }

  // insta
  $.instagramFeed({
    'username': 'zuzincom_agency',
    'callback': function(data){
      var postCount = 2;
      var posts = data.edge_owner_to_timeline_media.edges;
      var $html = '';
      var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

      for (var i = 0; i < postCount; i++) {
        var post = posts[i].node;
        var postCaption = post.edge_media_to_caption.edges[0].node.text;
        var postCaptionCut = postCaption.slice(0, 46) + '...';
        var imgUrl = post.display_url;
        var date = new Date(post.taken_at_timestamp * 1000);

        $html += '<li><a href="https://www.instagram.com/zuzincom_agency/"><span class="footer-posts-info__img"><img src="' + imgUrl + '" alt=""></span><span class="footer-posts-info__about">' + postCaptionCut + '<span class="post-date">' + date.toLocaleDateString('ru', dateOptions) + '</span></span></a></li>';
      }

      $('.footer-posts-info').html($html);
    }
});

  // form
  document.querySelector('#mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var formData = new FormData(form);

    fetch('mail.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response){
      if (response.ok === true) {
        form.parentElement.classList.add('send-success');
      } else {
        form.parentElement.classList.add('send-error');
      }
    })
    .catch(function(e) {
      form.parentElement.classList.add('send-error');
    })
  });

  document.querySelector('#subsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var formData = new FormData(form);

    fetch('subs_mail.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response){
      if (response.ok === true) {
        form.parentElement.classList.add('send-success');
      }
    })
    .catch(function(e) {})
  });
  
});