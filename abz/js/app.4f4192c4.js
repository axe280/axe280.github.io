(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1ae4":function(e,t,a){e.exports=a.p+"img/logo.146e2926.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.isMenuOpen?"menu_opened":"",attrs:{id:"app"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closeMenu(t)}}},[e.isModalOpened?a("modal"):e._e(),a("div",{staticClass:"site-wrapper"},[a("header-page"),a("main",{staticClass:"main"},[a("main-banner"),a("acquainted"),a("users",{key:e.getUsersReRenderProp}),a("form-component",{key:e.getFormReRenderProp})],1)],1),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer",attrs:{id:"footer"}},[a("div",{staticClass:"container"},[a("span",{staticClass:"copy"},[e._v("© abz.agency specially for the test task")])])])}],i=(a("96cf"),a("1da1")),o=a("5530"),l=a("2f62");a("d3b7");function c(e){return u.apply(this,arguments)}function u(){return u=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function m(){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e,t){return v.apply(this,arguments)}function v(){return v=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:t,headers:{Token:a}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}var f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header",attrs:{id:"header"}},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"head-menu"},[a("div",{staticClass:"burger-menu",on:{click:e.openMenu}},[e._m(1)]),a("div",{staticClass:"menu-wrapper-fixed"},[a("div",{staticClass:"menu-open-wrapper"},[a("nav",{staticClass:"header-nav"},[a("ul",{staticClass:"menu"},[a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("About me")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Relationships")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Requirements")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Users")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Sign Up")])])]),a("ul",{staticClass:"menu menu_devices"},[a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("How it works")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Partnership")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Help")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Leave testimonial")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Contact us")])])]),a("ul",{staticClass:"menu menu_devices"},[a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Articles")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Our news")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Testimonials")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Licenses")])]),a("li",{staticClass:"menu-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"menu-item__link",attrs:{href:""},on:{click:e.closeMenu}},[e._v("Privacy Policy")])])])])])])])])])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:a("1ae4"),alt:"logo"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"burger-menu-box"},[a("div",{staticClass:"burger-menu-inner"})])}],h={methods:Object(o["a"])({},Object(l["c"])(["openMenu","closeMenu"]))},g=h,b=a("2877"),C=Object(b["a"])(g,f,_,!1,null,null,null),x=C.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"main-banner"},[a("div",{staticClass:"container"},[a("h1",[e._v("Test assignment for Frontend Developer position")]),e._m(0),a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"btn",attrs:{type:"button"}},[e._v("Sing up now")])])])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. "),a("span",{staticClass:"hidden-mobile"},[e._v("Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")])])}],y={},k=Object(b["a"])(y,w,$,!1,null,null,null),O=k.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"acquainted-section"},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"acquainted-info"},[e._m(1),a("div",{staticClass:"acquainted-info__text"},[a("h2",[e._v("I am cool frontend developer")]),a("p",[e._v("We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.")]),a("p",[e._v("If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.")]),a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#formWrapper",expression:"'#formWrapper'"}],staticClass:"btn btn_flat",attrs:{type:"button"}},[e._v("Sing up now")])])])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"seciton-header"},[a("div",{staticClass:"title-site title-site_h1 text_center"},[e._v("Let's get acquainted")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"acquainted-info__img"},[r("img",{attrs:{src:a("92cc"),alt:""}})])}],R={},P=Object(b["a"])(R,M,j,!1,null,null,null),T=P.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"users-section"},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"users-wrap-list"},[a("ul",{staticClass:"users-list"},e._l(e.users,(function(t){return a("li",{key:t.id,staticClass:"user-item"},[a("div",{staticClass:"user-item-info"},[a("div",{staticClass:"user-item__avatar"},[a("img",{attrs:{src:t.photo}})]),a("div",{staticClass:"user-item__name"},[e._v(" "+e._s(t.name)+" ")]),a("div",{staticClass:"user-item_position"},[e._v(" "+e._s(t.position)+" ")]),a("div",{staticClass:"user-item__contact"},[a("a",{directives:[{name:"tippy",rawName:"v-tippy",value:{followCursor:"horizontal",placement:"bottom",animateFill:!1,animation:"shift-toward"},expression:"{\n                  followCursor: 'horizontal',\n                  placement: 'bottom',\n                  animateFill: false,\n                  animation : 'shift-toward'\n                }"}],attrs:{href:"mailto: "+t.email,content:t.email}},[e._v(" "+e._s(t.email)+" ")])]),a("div",{staticClass:"user-item__contact"},[a("a",{directives:[{name:"tippy",rawName:"v-tippy",value:{followCursor:"horizontal",placement:"bottom",animateFill:!1,animation:"shift-toward"},expression:"{\n                  followCursor: 'horizontal',\n                  placement: 'bottom',\n                  animateFill: false,\n                  animation : 'shift-toward'\n                }"}],attrs:{href:"tel: "+t.phone,content:t.phone}},[e._v(" "+e._s(t.phone)+" ")])])])])})),0),a("button",{staticClass:"btn",style:{display:e.showMoreButton?"":"none"},attrs:{type:"button"},on:{click:e.showMore}},[e._v("Show more")])])])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"seciton-header"},[a("div",{staticClass:"title-site title-site_h1 text_center"},[e._v("Our cheerful users")]),a("p",[e._v("Attention! Sorting users by registration date")])])}],S=(a("99af"),a("4160"),a("159b"),{data:function(){return{showMoreButton:!0,page:null,count:null,users:[]}},methods:{showMore:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.page=e.page+1,t.next=3,c("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(e.page,"&count=").concat(e.count));case 3:a=t.sent,a.success?a.users.forEach((function(t){e.users.push(t)})):e.page=e.page-1,a.total_pages===e.page&&(e.showMoreButton=!1);case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6");case 2:a=t.sent,e.count=a.count,e.page=a.page,e.users=a.users;case 6:case"end":return t.stop()}}),t)})))()}}),q=S,F=Object(b["a"])(q,W,N,!1,null,null,null),z=F.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"form-section",attrs:{id:"formWrapper"}},[a("div",{staticClass:"container"},[e._m(0),a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[a("div",{staticClass:"form-group",class:{"form-group_error":e.$v.name.$error}},[a("label",{staticClass:"field-item"},[a("div",{staticClass:"field-item__label"},[e._v("Name")]),a("div",{staticClass:"field-item__field"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.$v.name.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.name,"$model",t.target.value.trim())},function(t){return e.delayTouch(e.$v.name)}],blur:function(t){return e.$forceUpdate()}}})]),e.$v.name.required?e.$v.name.minLength?e.$v.name.maxLength?e._e():a("div",{staticClass:"field-item__error"},[e._v(" "+e._s("Max length is "+e.$v.name.$params.maxLength.max+" characters")+" ")]):a("div",{staticClass:"field-item__error"},[e._v(" "+e._s("The name must be at least "+e.$v.name.$params.minLength.min+" characters")+" ")]):a("div",{staticClass:"field-item__error"},[e._v(" Please fill in this field ")])])]),a("div",{staticClass:"form-group",class:{"form-group_error":e.$v.email.$error}},[a("label",{staticClass:"field-item"},[a("div",{staticClass:"field-item__label"},[e._v("Email")]),a("div",{staticClass:"field-item__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.email.$model,expression:"$v.email.$model"}],attrs:{type:"email",placeholder:"Your email"},domProps:{value:e.$v.email.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.email,"$model",t.target.value)},function(t){return e.delayTouch(e.$v.email)}]}})]),e.$v.email.required?e.$v.email.minLength?e.$v.email.maxLength?e.$v.email.validateEmail?e._e():a("div",{staticClass:"field-item__error"},[e._v(" The email must be a valid email address ")]):a("div",{staticClass:"field-item__error"},[e._v(" "+e._s("Max length is "+e.$v.email.$params.maxLength.max+" characters")+" ")]):a("div",{staticClass:"field-item__error"},[e._v(" "+e._s("The email must be at least "+e.$v.email.$params.minLength.min+" characters")+" ")]):a("div",{staticClass:"field-item__error"},[e._v(" Please fill in this field ")])])]),a("div",{staticClass:"form-group",class:{"form-group_error":e.$v.phone.$error}},[a("label",{staticClass:"field-item"},[a("div",{staticClass:"field-item__label"},[e._v("Phone number")]),a("div",{staticClass:"field-item__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.phone.$model,expression:"$v.phone.$model"}],attrs:{type:"tel",placeholder:"+380 XX XXX XX XX"},domProps:{value:e.$v.phone.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.phone,"$model",t.target.value)},e.phoneOnInput],focus:e.phoneOnFocus}})]),a("div",{staticClass:"field-item__info"},[e._v(" Enter phone number in open format ")]),e.$v.phone.required?e.$v.phone.validatePhone?e._e():a("div",{staticClass:"field-item__error"},[e._v(" Check your phone number ")]):a("div",{staticClass:"field-item__error"},[e._v(" Please fill in this field ")])])]),a("div",{staticClass:"form-group",class:{"form-group_error":e.$v.positionName.$error}},[a("div",{staticClass:"field-item"},[a("div",{staticClass:"field-item__label"},[e._v("Select your position")]),a("div",{staticClass:"form-st-radio-group"},e._l(e.positions,(function(t){return a("div",{key:t.id,staticClass:"form-st-radio"},[a("label",[e._v(" "+e._s(t.name)+" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.positionName.$model,expression:"$v.positionName.$model"}],attrs:{type:"radio",name:"position"},domProps:{value:t.name,checked:e._q(e.$v.positionName.$model,t.name)},on:{change:function(a){return e.$set(e.$v.positionName,"$model",t.name)}}}),a("span",{staticClass:"fake-control"})])])})),0),e.$v.positionName.required?e._e():a("div",{staticClass:"field-item__error"},[e._v(" Please choose position ")])])]),a("div",{staticClass:"form-group",class:{"form-group_error":e.$v.file.$error}},[a("label",{staticClass:"field-item"},[a("div",{staticClass:"field-item__label"},[e._v("Photo")]),a("div",{staticClass:"field-item__field"},[a("div",{staticClass:"custom-file"},[a("div",{staticClass:"custom-file__name",class:{active:e.file}},[e._v(" "+e._s(e.file?e.file.name:"Upload your photo")+" ")]),a("div",{staticClass:"custom-file__btn"},[e._v("Browse")]),a("input",{attrs:{type:"file",placeholder:"Upload your photo"},on:{change:e.setFile}})])]),e.$v.file.required?e._e():a("div",{staticClass:"field-item__error"},[e._v(" Please add your photo ")]),e.$v.file.typeImage?e.$v.file.sizeImage?e._e():a("div",{staticClass:"field-item__error"},[e._v(" The photo size must not be greater than 5 Mb ")]):a("div",{staticClass:"field-item__error"},[e._v(" The photo format must be jpeg/jpg type ")])])]),e._m(1)])])])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"seciton-header"},[a("div",{staticClass:"title-site title-site_h1 text_center"},[e._v("Register to get a work")]),a("p",[e._v("Attention! After successful registration and alert, update the list of users in the block from the top")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-button-wrap"},[a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Sing up now")])])}],D=(a("7db0"),a("fb6a"),a("b0c0"),a("ac1f"),a("3ca3"),a("5319"),a("10d1"),a("ddb0"),a("b5ae")),I=new WeakMap,U=/^[+]{0,1}380([0-9]{9})$/,X=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,A={data:function(){return{positions:[],positionName:"",name:"",email:"",phone:"",file:null,submitStatus:null}},computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["getToken"])),{},{getPositionId:function(){var e=this,t=this.positions.find((function(t){return t.name===e.positionName}));return t.id}}),methods:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["openCloseModal","setModalData","forceRerenderForm","forceRerenderUsers","setToken"])),{},{setFile:function(e){this.file=e.target.files[0],this.$v.file.$touch()},phoneOnFocus:function(){this.phone||(this.phone="+380")},phoneOnInput:function(e){this.delayTouch(this.$v.phone);var t=e.target.value;this.phone="+380"+t.slice(4,13).replace(/\D+/g,"")},delayTouch:function(e){e.$reset(),I.has(e)&&clearTimeout(I.get(e)),I.set(e,setTimeout(e.$touch,1e3))},createFormData:function(){var e=new FormData;return e.append("position_id",this.getPositionId),e.append("name",this.name),e.append("email",this.email),e.append("phone",this.phone),e.append("photo",this.file),e},submitForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$v.$touch(),!e.$v.$invalid){t.next=5;break}e.submitStatus="ERROR",t.next=26;break;case 5:return e.submitStatus="OK",a=e.createFormData(),r=e.getToken,t.next=10,d(a,r);case 10:if(s=t.sent,401!==s.status){t.next=20;break}return t.next=14,m();case 14:return n=t.sent,e.setToken(n),r=n.token,t.next=19,d(a,r);case 19:s=t.sent;case 20:return t.next=22,s.json();case 22:i=t.sent,i.success&&(e.forceRerenderForm(),e.forceRerenderUsers()),e.setModalData(i),e.openCloseModal(!0);case 26:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c("https://frontend-test-assignment-api.abz.agency/api/v1/positions");case 2:a=t.sent,e.positions=a.positions;case 4:case"end":return t.stop()}}),t)})))()},validations:{name:{required:D["required"],minLength:Object(D["minLength"])(2),maxLength:Object(D["maxLength"])(60)},email:{required:D["required"],minLength:Object(D["minLength"])(2),maxLength:Object(D["maxLength"])(100),validateEmail:function(e){return X.test(String(e).toLowerCase())}},phone:{required:D["required"],validatePhone:function(e){return U.test(String(e))}},positionName:{required:D["required"]},file:{required:D["required"],typeImage:function(e){var t="image/jpeg";return!e||e.type===t},sizeImage:function(e){var t=5242880;return!(e&&e.size>t)}}}},B=A,H=Object(b["a"])(B,E,L,!1,null,null,null),J=H.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"simple-modal",on:{click:function(t){return t.target!==t.currentTarget?null:e.openCloseModal(!1)}}},[a("div",{staticClass:"modal-inner"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-head"},[a("button",{staticClass:"modal-close",on:{click:function(t){return e.openCloseModal(!1)}}},[e._v("×")]),a("span",{staticClass:"title-site title-site_h2"},[e._v(" "+e._s(e.getModalData.title)+" ")])]),a("div",{staticClass:"modal-body"},[a("p",[e._v(e._s(e.getModalData.message))])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn_min",on:{click:function(t){return e.openCloseModal(!1)}}},[e._v("Great")])])])])])},Y=[],G={computed:Object(o["a"])({},Object(l["b"])(["getModalData"])),methods:Object(o["a"])({},Object(l["c"])(["openCloseModal"]))},Q=G,V=Object(b["a"])(Q,K,Y,!1,null,null,null),Z=V.exports,ee={name:"App",components:{HeaderPage:x,MainBanner:O,Acquainted:T,Users:z,FormComponent:J,Modal:Z},computed:Object(o["a"])({},Object(l["b"])(["isMenuOpen","getToken","isModalOpened","getFormReRenderProp","getUsersReRenderProp"])),methods:Object(o["a"])({},Object(l["c"])(["closeMenu","setToken"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.getToken,a){t.next=6;break}return t.next=4,m();case 4:r=t.sent,e.setToken(r);case 6:case"end":return t.stop()}}),t)})))()}},te=ee,ae=Object(b["a"])(te,s,n,!1,null,null,null),re=ae.exports;r["a"].use(l["a"]);var se=new l["a"].Store({state:{menuIsOpen:!1,token:localStorage.getItem("token")||"",modalOpened:!1,modalData:{title:"Oops!",message:""},componentFormToRerederPoperty:"componentFormToRerederPopertyKey",componentUsersToRerederPoperty:"componentUsersToRerederPopertyKey"},getters:{isMenuOpen:function(e){return e.menuIsOpen},getToken:function(e){return e.token},isModalOpened:function(e){return e.modalOpened},getModalData:function(e){return e.modalData},getFormReRenderProp:function(e){return e.componentFormToRerederPoperty},getUsersReRenderProp:function(e){return e.componentUsersToRerederPoperty}},mutations:{openMenu:function(e){e.menuIsOpen=!0},closeMenu:function(e){e.menuIsOpen=!1},openCloseModal:function(e,t){e.modalOpened=t},setToken:function(e,t){var a=t.token;e.token=a,localStorage.setItem("token",e.token)},setModalData:function(e,t){var a=t.success,r=t.message;e.modalData.title=a?"Congratulations":"Oops, something went wrong",e.modalData.message=r},forceRerenderForm:function(e){e.componentFormToRerederPoperty+=1},forceRerenderUsers:function(e){e.componentUsersToRerederPoperty+=1}}}),ne=a("1dce"),ie=a.n(ne),oe=a("f13c"),le=a.n(oe),ce=a("6018");a("6aaa");r["a"].use(le.a),r["a"].use(ie.a),r["a"].use(ce["b"]),r["a"].component("tippy",ce["a"]),r["a"].config.productionTip=!1,new r["a"]({store:se,render:function(e){return e(re)}}).$mount("#app")},"6aaa":function(e,t,a){},"92cc":function(e,t,a){e.exports=a.p+"img/man-laptop-v1.3cdf7897.svg"}});
//# sourceMappingURL=app.4f4192c4.js.map