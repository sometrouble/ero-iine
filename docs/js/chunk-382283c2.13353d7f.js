(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-382283c2"],{"4c94":function(t,e,s){},b0af:function(t,e,s){"use strict";s("4c94"),s("d0e7");var a=s("b64a"),r=s("2b0e");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o=r["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?n({},"elevation-"+this.computedElevation,!0):{}}}}),i=s("23bf"),l=s("6a18"),c=s("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},h=Object(c["a"])(a["a"],o,i["a"],l["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return u({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),m=h,p=s("0d01"),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t};e["a"]=Object(c["a"])(p["a"],m).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return v({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},m.options.computed.classes.call(this))},styles:function(){var t=v({},m.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),s=e.tag,a=e.data;return a.style=this.styles,t(s,this.setBackgroundColor(this.color,a),this.$slots.default)}})},b8fa:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{staticClass:"mt-5",attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"mb-3",attrs:{src:s("919b"),contain:"",height:"10vh"}}),a("hr")],1),a("v-flex",{staticClass:"mt-5 mb-5",attrs:{xs12:""}},[a("p",{staticClass:"headline font-weight-bold md-4"},[t._v("Researcher")]),a("p",{staticClass:"body-1"},[t._v("エロいいね研究会は、日本中から選抜された優秀な研究者達によって構成されています。")]),a("p",{staticClass:"body-1"},[t._v("そのうちの数名について、ここで紹介させていただきます。")]),a("v-layout",{staticClass:"mt-4",attrs:{"align-center":"","justify-center":"",column:""}},t._l(t.researchers,(function(e){return a("v-flex",{attrs:{xs6:""}},[a("v-card",{staticClass:"ma-2 pa-4",attrs:{width:"400"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-avatar",{attrs:{size:"100px"}},[a("img",{attrs:{src:e.icon,icon:""}})])],1),a("v-flex",{attrs:{xs8:""}},[a("p",{staticClass:"title font-weight-bold"},[t._v(t._s(e.name))]),a("p",{staticClass:"caption grey--text"},[t._v(t._s(e.position))]),a("v-flex",[a("v-btn",{attrs:{small:"",outline:"",color:"light-blue",href:e.twitter}},[t._v("twitter")]),a("v-btn",{attrs:{small:"",outline:"",color:"black",href:e.web}},[t._v("website")])],1)],1)],1),a("v-flex",{staticClass:"mt-2",attrs:{xs12:""}},[a("p",[t._v(t._s(e.comment))])])],1)],1)})),1),a("v-btn",{attrs:{color:"primary",href:"https://discord.gg/26uyN3y"}},[t._v("Join Discord")])],1)],1)],1)},r=[],n=(s("bc3a"),{data:function(){return{researchers:[{name:"NYLON_1919",icon:"https://pbs.twimg.com/profile_images/1056830832696913921/Nb7RSlBD_400x400.jpg",twitter:"https://twitter.com/NYLON_1919",web:"https://himawarifurutani1919.hatenablog.com",position:"研究会会長",comment:""},{name:"Ryusk",icon:"https://pbs.twimg.com/profile_images/378800000371011441/cd8141e485a5359b9a3adacb4be597c9_400x400.png",twitter:"https://twitter.com/ryuks1228",web:"https://filmarks.com/users/ryuks1228",position:"名誉研究会長",comment:""},{name:"Trouble_SUM",icon:"https://pbs.twimg.com/profile_images/1075024731366031361/9KGXAp7l_400x400.jpg",twitter:"https://twitter.com/sometrouble_",web:"https://sometrouble.hatenablog.com/",position:"研究員",comment:"主に技術的な面でのサポートを行っています。"}]}},methods:{submit:function(){}},mounted:function(){}}),o=n,i=s("2877"),l=s("6544"),c=s.n(l),u=s("8212"),h=s("8336"),m=s("b0af"),p=s("a523"),v=s("0e8f"),f=s("adda"),b=s("a722"),d=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=d.exports;c()(d,{VAvatar:u["a"],VBtn:h["a"],VCard:m["a"],VContainer:p["a"],VFlex:v["a"],VImg:f["a"],VLayout:b["a"]})},d0e7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-382283c2.13353d7f.js.map