webpackJsonp([15],{173:function(t,e,n){n(449);var a=n(37)(n(214),n(457),null,null);t.exports=a.exports},174:function(t,e,n){"use strict";var a=n(225),o=n.n(a),i=n(187),s=n.n(i),r=n(82);s.a.defaults.timeout=5e3,s.a.interceptors.request.use(function(t){return t},function(t){return o.a.reject(t)}),s.a.interceptors.response.use(function(t){if(console.log(t),200===t.status){if(!t.data||""===t.data)return r.a.commit("requestFail","return null"),o.a.reject(t);try{t.data=JSON.parse(t.data)}catch(e){t.data={ret:400,data:{},msg:"data format error"}}200===t.data.ret?r.a.commit("requestSuccess"):r.a.commit("requestFail",t.data.msg)}return 200!==t.status?(r.a.commit("requestFail",t.status),o.a.reject(t)):t},function(t){return console.log("promise error:"+t),o.a.reject(t)}),e.a=s.a},175:function(t,e,n){"use strict";var a=n(125),o=n.n(a),i=n(126),s=n.n(i),r=n(62),c=n(222),u=n(206),l=n(205);r.a.use(c.a);var p=function(){function t(e,n,a){o()(this,t),this._apiStatusList={},this._wx=null,this._conf={},this._apis={},this._wx=e,this._conf=n,this._apis=a}return s()(t,[{key:"init",value:function(){this.initConf(),this.bindCallBack()}},{key:"initConf",value:function(){this._wx.config(this._conf)}},{key:"bindCallBack",value:function(){var t=this;this._wx.ready(function(){t.checkApi()}),this._wx.error(function(){console.log("error")})}},{key:"checkApi",value:function(){var t=this;this._wx.checkJsApi({jsApiList:t._conf.jsApiList,success:function(e){t._apiStatusList=e.checkResult}})}},{key:"api",value:function(t,e,n){if(this._conf.jsApiList.indexOf[t]<0)return console.log("error"),!1;null!==this._apis[t]?this.apis[t]({wx:this._wx,args:e},n):console.log(t+"not exists")}}]),t}();e.a=new p(r.a.wechat,u.a.conf(),l.a)},176:function(t,e,n){"use strict";var a=n(62),o=n(460);a.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"*",component:function(t){console.log(t),n.e(13).then(function(){var e=[n(475)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/",meta:{requireAuth:!0,keepAlive:!1},component:function(t){console.log(t),n.e(7).then(function(){var e=[n(473)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/bill",meta:{requireAuth:!0},component:function(t){n.e(2).then(function(){var e=[n(477)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/billDetail",meta:{requireAuth:!0},component:function(t){n.e(0).then(function(){var e=[n(478)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail",meta:{requireAuth:!0},component:function(t){n.e(12).then(function(){var e=[n(479)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/addContract",meta:{requireAuth:!0},component:function(t){n.e(5).then(function(){var e=[n(476)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/user",meta:{requireAuth:!0},component:function(t){n.e(10).then(function(){var e=[n(483)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/payment",meta:{requireAuth:!0},component:function(t){n.e(9).then(function(){var e=[n(482)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/doPay",meta:{requireAuth:!0},component:function(t){n.e(11).then(function(){var e=[n(480)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/payApply",meta:{requireAuth:!0},component:function(t){n.e(1).then(function(){var e=[n(472)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/sectionPay",meta:{requireAuth:!0},component:function(t){n.e(3).then(function(){var e=[n(471)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/delayPay",meta:{requireAuth:!0},component:function(t){n.e(6).then(function(){var e=[n(470)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/login",name:"Login",component:function(t){n.e(8).then(function(){var e=[n(474)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedBack",meta:{requireAuth:!0},component:function(t){n.e(4).then(function(){var e=[n(481)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]})},180:function(t,e,n){n(448);var a=n(37)(n(220),n(456),null,null);t.exports=a.exports},205:function(t,e,n){"use strict";var a=n(125),o=n.n(a),i=n(126),s=n.n(i),r=function(){function t(){o()(this,t),this._apis={}}return s()(t,[{key:"registerApi",value:function(t,e){this._apis[t]=e}},{key:"chooseImage",value:function(){return function(t,e){null===t.wx&&e(null),t.wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){e(t)}})}}},{key:"getLoaction",value:function(){return function(t,e){null===t.wx&&e(null),t.wx.getLocation({type:"wgs84",success:function(t){e(t)}})}}},{key:"chooseWXPay",value:function(){return function(t,e){null!==t.wx&&null!==t.args?t.wx.chooseWXPay({timestamp:t.args.timestamp,nonceStr:t.args.nonceStr,package:t.args.package,signType:t.args.signType,paySign:t.args.paySign,success:function(t){e(t)}}):e(null)}}}]),t}(),c=new r;c.registerApi("chooseImage",c.chooseImage()),c.registerApi("getLoaction",c.getLoaction()),c.registerApi("chooseWXPay",c.chooseWXPay()),e.a=c._apis},206:function(t,e,n){"use strict";var a=n(82);e.a={conf:function(){return{debug:!0,appId:a.a.getters.appId,timestamp:a.a.getters.timestamp,nonceStr:a.a.getters.nonceStr,signature:a.a.getters.signature,jsApiList:["checkJsApi","chooseImage","getLocation","chooseWXPay"]}},oauthConfOfUserInfo:function(){return{redirectUrl:"",scope:"snsapi_userinfo"}},oauthConfOfBase:function(){return{redirectUrl:"",scope:"snsapi_base"}}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(62),o=n(178),i=n.n(o),s=n(180),r=n.n(s),c=n(82),u=n(176),l=n(179),p=n.n(l),f=n(174),d=n(177),m=n(175);a.a.use(p.a.plugin,c.a),u.a.beforeEach(function(t,e,n){c.a.commit("prepareLoad"),n()}),u.a.afterEach(function(t){c.a.commit("hasLoad")}),a.a.use(d.a),i.a.attach(document.body),a.a.config.productionTip=!1,a.a.prototype.$http=f.a,a.a.prototype.$wx=m.a,new a.a({router:u.a,store:c.a,WeChart:m.a,render:function(t){return t(r.a)}}).$mount("#app")},208:function(t,e,n){"use strict";e.a={state:{bills:null},mutations:{bills:function(t,e){t.bills=e,sessionStorage.setItem("bills",e)}},actions:{bills:function(t,e){(0,t.commit)("bills",e)}},getters:{bills:function(t){return null===t.bills&&(t.bills=sessionStorage.getItem("bills")),t.bills}}}},209:function(t,e,n){"use strict";e.a={state:{isLoading:!1},mutations:{prepareLoad:function(t){t.isLoading=!0},hasLoad:function(t){t.isLoading=!1}}}},210:function(t,e,n){"use strict";e.a={state:{requestStatus:200,requestMsg:""},mutations:{requestSuccess:function(t){t.requestStatus=200},requestFail:function(t,e){t.requestStatus=400,t.requestMsg=e}},getters:{status:function(t){return t.requestStatus},msg:function(t){return t.requestMsg}}}},211:function(t,e,n){"use strict";e.a={state:{percent:0,sectionPayDays:0,delayPayDay:0},mutations:{percent:function(t,e){t.percent=e,sessionStorage.setItem("percent",e)},sectionPayDays:function(t,e){t.sectionPayDays=e,sessionStorage.setItem("sectionPayDays",e)},delayPayDay:function(t,e){t.delayPayDay=e,sessionStorage.setItem("delayPayDay",e)}},actions:{setPercent:function(t,e){(0,t.commit)("percent",e)},setSectionPayDays:function(t,e){(0,t.commit)("sectionPayDays",e)},setDelayPayDay:function(t,e){(0,t.commit)("delayPayDay",e)}},getters:{percent:function(t){return 0===t.percent?sessionStorage.getItem("percent"):t.percent},sectionPayDays:function(t){return 0===t.sectionPayDays?sessionStorage.getItem("sectionPayDays"):t.sectionPayDays},delayPayDay:function(t){return 0===t.delayPayDay?sessionStorage.getItem("delayPayDay"):t.delayPayDay}}}},212:function(t,e,n){"use strict";var a=n(184),o=n.n(a);e.a={state:{accessKey:"user",isLogin:!1,userInfo:{mobile:"15903466276"},beforeContractNo:"",errorLimit:6,currentErrorNums:0},mutations:{login:function(t,e){t.isLogin=!0,t.userInfo=e,sessionStorage.setItem(t.accessKey,o()(e))},loginOut:function(t){t.isLogin=!1,t.userInfo=null,sessionStorage.removeItem("user")},addContractNo:function(t,e){t.beforeContractNo=e},errorNums:function(t,e){"re"===e?t.currentErrorNums=0:t.currentErrorNums++}},actions:{login:function(t,e){(0,t.commit)("login",e)},loginOut:function(t){(0,t.commit)("loginOut")},addContractNo:function(t,e){(0,t.commit)("addContractNo",e)},increCheckError:function(t){(0,t.commit)("errorNums","i")},restoreCurrentErrorNums:function(t){(0,t.commit)("errorNums","re")}},getters:{isLogin:function(t){return t.isLogin},getUser:function(t){return t.userInfo},getAccessKey:function(t){return t.accessKey},getMobile:function(t){return t.userInfo.mobile},getContractNo:function(t){return t.beforeContractNo},residueDegree:function(t){return t.currentErrorNums>t.errorLimit?0:t.errorLimit-t.currentErrorNums},overLimit:function(t){return!(t.currentErrorNums>t.errorLimit)}}}},213:function(t,e,n){"use strict";e.a={state:{code:"",openId:"",accessToken:"",timestamp:"",nonceStr:"",signature:""},mutations:{code:function(t,e){t.code=e.code},openId:function(t,e){t.openId=e.openId},accessToken:function(t,e){t.accessToken=e.accessToken},timestamp:function(t,e){t.timestamp=e.timestamp},nonceStr:function(t,e){t.nonceStr=e.nonceStr},signature:function(t,e){t.signature=e.signature}},actions:{code:function(t,e){(0,t.commit)("code",e)},openId:function(t,e){(0,t.commit)("openId",e)},accessToken:function(t,e){(0,t.commit)("accessToken",e)},timestamp:function(t,e){(0,t.commit)("timestamp",e)},nonceStr:function(t,e){(0,t.commit)("nonceStr",e)},signature:function(t,e){(0,t.commit)("signature",e)}},getters:{code:function(t){return t.code},openId:function(t){return t.openId},accessToken:function(t){return t.accessToken},timestamp:function(t){return t.timestamp},nonceStr:function(t){return t.nonceStr},signature:function(t){return t.signature}}}},214:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"badge",props:{text:[String,Number]}}},215:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"drawer",props:{show:{type:Boolean,default:!1},placement:{type:String,default:"left"},showMode:{type:String,default:"overlay"},drawerStyle:Object},data:function(){return{drawerWidth:0,translateX:0}},watch:{show:function(){this.show?this.$emit("on-show"):this.$emit("on-hide"),"overlay"!==this.showMode&&(this.show?this.translateX="left"===this.placement?this.drawerWidth:-this.drawerWidth:this.translateX=0)}},methods:{hideMask:function(){this.$emit("update:show",!1)}},mounted:function(){this.$nextTick(function(){this.drawerWidth=this.$refs.drawer.clientWidth})}}},216:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",props:{value:{type:Boolean,default:!1},text:String,position:String,transition:{type:String,default:"vux-mask"}},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(123),o=n(173),i=n.n(o);e.default={name:"tabbar-item",components:{Badge:i.a},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[a.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},218:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(123);e.default={name:"tabbar",mixins:[a.b],props:{iconClass:String}}},219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},220:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(173),o=n.n(a),i=n(462),s=n.n(i),r=n(466),c=n.n(r),u=n(465),l=n.n(u),p=n(464),f=n.n(p);e.default={components:{Badge:o.a,Drawer:s.a,ViewBox:c.a,Tabbar:l.a,TabbarItem:f.a},computed:{path:function(){return this.$route.path}},data:function(){return{drawerVisibility:!1,showMode:"push",showModeValue:"push",showPlacement:"left",showPlacementValue:"left"}}}},445:function(t,e){},446:function(t,e){},447:function(t,e){},448:function(t,e){},449:function(t,e){},450:function(t,e){},453:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),n("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},454:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},455:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},staticRenderFns:[]}},456:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("drawer",{attrs:{width:"200px;","drawer-style":{"background-color":"#35495e",width:"200px"}}},["/"===t.path||"/payment"===t.path||"/user"===t.path?n("view-box",{ref:"viewBox",attrs:{"body-padding-bottom":"55px"}},[n("router-view",{staticClass:"router-view"}),t._v(" "),n("tabbar",{staticClass:"vux-demo-tabbar",attrs:{"icon-class":"vux-center"},slot:"bottom"},[n("tabbar-item",{attrs:{link:{path:"/"}}},["/"===t.path?n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home bottom-tab-span tab-one-active",attrs:{selected:"/"===t.path},slot:"icon"}):n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home bottom-tab-span tab-one",slot:"icon"}),t._v(" "),n("span",{slot:"label"},[t._v("首页")])]),t._v(" "),n("tabbar-item",{attrs:{link:"payment"}},["/payment"===t.path?n("span",{staticClass:"demo-icon-22 bottom-tab-span tab-two-active",attrs:{selected:"/payment"===t.path},slot:"icon"}):n("span",{staticClass:"demo-icon-22 bottom-tab-span tab-two",slot:"icon"}),t._v(" "),n("span",{slot:"label"},[t._v("缴费")])]),t._v(" "),n("tabbar-item",{attrs:{link:"/"}},["repair"===t.path?n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home bottom-tab-span tab-tree-active",slot:"icon"}):n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home bottom-tab-span tab-tree",slot:"icon"}),t._v(" "),n("span",{slot:"label"},[t._v("生活服务")])]),t._v(" "),n("tabbar-item",{attrs:{link:"/user"}},["/user"===t.path?n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home bottom-tab-span tab-four-active",slot:"icon"}):n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home bottom-tab-span tab-four",slot:"icon"}),t._v(" "),n("span",{slot:"label"},[t._v("我的")])])],1)],1):n("view-box",{attrs:{"body-padding-bottom":"0px"}},[n("router-view",{staticClass:"router-view"})],1)],1)],1)},staticRenderFns:[]}},457:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},staticRenderFns:[]}},458:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]}},459:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-drawer"},[n("div",{staticClass:"vux-drawer-body",style:{transform:"translate3d("+t.translateX+"px, 0, 0)"}},[t._t("default"),t._v(" "),n("div",{staticClass:"drawer-mask",class:t.show?"vux-drawer-active":"",on:{click:t.hideMask}})],2),t._v(" "),n("div",{ref:"drawer",staticClass:"vux-drawer-content",class:["left"!==t.placement?"drawer-right":"drawer-left",t.show?"vux-drawer-active":""],style:t.drawerStyle},[t._t("drawer")],2)])},staticRenderFns:[]}},462:function(t,e,n){n(450);var a=n(37)(n(215),n(459),null,null);t.exports=a.exports},463:function(t,e,n){n(446);var a=n(37)(n(216),n(454),null,null);t.exports=a.exports},464:function(t,e,n){var a=n(37)(n(217),n(458),null,null);t.exports=a.exports},465:function(t,e,n){n(447);var a=n(37)(n(218),n(455),null,null);t.exports=a.exports},466:function(t,e,n){n(445);var a=n(37)(n(219),n(453),null,null);t.exports=a.exports},82:function(t,e,n){"use strict";var a=n(223),o=(n.n(a),n(62)),i=n(186),s=n(209),r=n(212),c=n(213),u=n(210),l=n(208),p=n(211);o.a.use(i.b),e.a=new i.b.Store({strict:!1,modules:{frame:s.a,user:r.a,wechat:c.a,net:u.a,bill:l.a,pay:p.a}})}},[207]);
//# sourceMappingURL=app.661909fe27fdc0a10d91.js.map