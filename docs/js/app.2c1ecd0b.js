(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],u=0,f=[];u<c.length;u++)o=c[u],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-44acb0dc":"e21665dd","chunk-397148e5":"809d8e8a","chunk-469d4898":"b7d64e92","chunk-4856ce3d":"4207554a"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-44acb0dc":1,"chunk-397148e5":1,"chunk-469d4898":1,"chunk-4856ce3d":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-44acb0dc":"ba04345f","chunk-397148e5":"4844bd5f","chunk-469d4898":"cc31d190","chunk-4856ce3d":"5be9877e"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e),s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/ero-iine/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"31f2":function(e,t,n){"use strict";var r=n("e39b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.items,function(t,n){return r("v-list-tile",{key:n,attrs:{href:t.url}},[r("v-list-tile-action",[r("v-icon",{attrs:{small:""},domProps:{innerHTML:e._s(t.icon)}})],1),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}),1)],1),r("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("div",{staticStyle:{width:"150px"}},[r("v-img",{attrs:{src:n("7ba3"),contain:"",height:"60%"}})],1),r("v-spacer"),r("v-btn",{attrs:{flat:"",to:"gallery"}},[r("span",{staticClass:"mr-2"},[e._v("latest Ero-iine(Beta)")]),r("v-icon",[e._v("fas fa-external-link-alt")])],1),r("v-btn",{attrs:{small:"",flat:"",icon:""},on:{click:e.tweet}},[r("v-icon",[e._v("fab fa-twitter")])],1)],1),r("v-content",[r("p",{staticClass:"caption grey--text ma-3"},[e._v("version: "+e._s(e.version))]),r("router-view")],1),r("v-footer",{staticClass:"justify-center"},[r("p",{staticClass:"caption mt-3"},[e._v("©2018-2019 Sexual Favorite Research Society of Japan.")])])],1)},i=[],c={name:"App",data:function(){return{drawer:!1,version:"0.0.4-alpha",items:[{icon:"fas fa-home",title:"Top",url:"/ero-iine/"},{icon:"fab fa-readme",title:"About",url:"/ero-iine/#/about"},{icon:"fas fa-heart",title:"Gallery",url:"/ero-iine/#/gallery"},{icon:"fas fa-address-book",title:"Contact",url:"/ero-iine/#/contact"}]}},methods:{tweet:function(){var e=encodeURIComponent,t=window.location.href,n="エロいいね研究会 - Sexual Favorite Research Society of Japan.",r="エロいいね研究会, SFRS_jp",o="https://twitter.com/intent/tweet?text=".concat(e(n),"&hashtags=").concat(e(r),"&url=").concat(t);navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0?location.href=o:window.open(o,"_blank","top=50,left=50,width=500,height=500,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1")}}},l=c,s=n("2877"),u=n("6544"),f=n.n(u),d=n("7496"),p=n("8336"),h=n("549c"),v=n("553a"),m=n("132d"),b=n("adda"),g=n("8860"),_=n("ba95"),y=n("40fe"),w=n("5d23"),x=n("f774"),k=n("9910"),C=n("71d9"),E=n("706c"),O=Object(s["a"])(l,a,i,!1,null,null,null);O.options.__file="App.vue";var P=O.exports;f()(O,{VApp:d["a"],VBtn:p["a"],VContent:h["a"],VFooter:v["a"],VIcon:m["a"],VImg:b["a"],VList:g["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileContent:w["a"],VListTileTitle:w["c"],VNavigationDrawer:x["a"],VSpacer:k["a"],VToolbar:C["a"],VToolbarSideIcon:E["a"]});var V=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld")},T=[],A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{staticClass:"mt-5",attrs:{"text-xs-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{attrs:{src:n("919b"),contain:"",height:"30vh"}})],1),r("v-flex",{staticClass:"mb-4 mt-3"},[r("p",{staticClass:"subheading font-weight-regular"},[e._v("For help and collaboration with other Ero-iine researchers,\nplease join our online\n"),r("a",{attrs:{href:"https://discord.gg/26uyN3y",target:"_blank"}},[e._v("Discord Community")]),r("v-btn",{attrs:{flat:"",icon:"",color:e.ero_iine_color},on:{click:e.toggle_color}},[r("i",{staticClass:"fas fa-heart"}),r("p",[e._v(e._s(e.ero_iine_num))])])],1)]),e._l(e.contents,function(t,n){return r("v-flex",{key:n,staticClass:"mb-5",attrs:{xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(e._s(n))]),e._l(t.text,function(t,n,o){return r("v-layout",{key:o,attrs:{"justify-center":""}},[r("p",[e._v(e._s(t))])])}),r("v-btn",{attrs:{outline:"",color:t.btn_color,large:"",to:t.url}},[e._v(e._s(t.btn_text))])],2)})],2)],1)},S=[],F=n("bc3a"),L=n.n(F),B={data:function(){return{ero_iine_color:"grey",ero_iine_num:0,contents:{About:{text:["エロいいね研究会は初心者歓迎！","誰でも簡単にエロいいねを始めることができます✨"],url:"/about",btn_text:"learn more",btn_color:"indigo"}}}},methods:{toggle_color:function(){"pink"==this.ero_iine_color?this.ero_iine_color="grey":(this.ero_iine_color="pink",L.a.post("https://script.google.com/macros/s/AKfycbwEf0jiuCUTOxCym_pEE2EFNQwtIXqoiWYCOsixyRPbnBSGvdLg/exec").then(function(e){this.ero_iine_num=e.data.iine_num}.bind(this)))}},mounted:function(){L.a.get("https://script.google.com/macros/s/AKfycbwEf0jiuCUTOxCym_pEE2EFNQwtIXqoiWYCOsixyRPbnBSGvdLg/exec").then(function(e){this.ero_iine_num=e.data.iine_num}.bind(this))}},N=B,I=(n("31f2"),n("a523")),R=n("0e8f"),H=n("a722"),M=Object(s["a"])(N,A,S,!1,null,null,null);M.options.__file="HelloWorld.vue";var W=M.exports;f()(M,{VBtn:p["a"],VContainer:I["a"],VFlex:R["a"],VImg:b["a"],VLayout:H["a"]});var q={components:{HelloWorld:W}},J=q,$=Object(s["a"])(J,j,T,!1,null,null,null);$.options.__file="Home.vue";var G=$.exports;r["a"].use(V["a"]);var U=new V["a"]({mode:"hash",base:"/ero-iine/",routes:[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:function(){return Promise.all([n.e("chunk-44acb0dc"),n.e("chunk-469d4898")]).then(n.bind(null,"f820"))}},{path:"/gallery",name:"gallery",component:function(){return Promise.all([n.e("chunk-44acb0dc"),n.e("chunk-397148e5")]).then(n.bind(null,"0d77"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-4856ce3d").then(n.bind(null,"b8fa"))}}]});n("d5e8"),n("15f5");r["a"].config.productionTip=!1,new r["a"]({router:U,render:function(e){return e(P)}}).$mount("#app")},"7ba3":function(e,t,n){e.exports=n.p+"img/ero-iine.3378d682.png"},"919b":function(e,t,n){e.exports=n.p+"img/ero-iine(large).fba48e18.png"},e39b:function(e,t,n){}});
//# sourceMappingURL=app.2c1ecd0b.js.map