webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("p7mv")},null,null).exports,l=n("/ocq"),s={componentName:"myHeader",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("我的工作台")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")]),e._v(" "),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[e._v("选项4")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[e._v("消息中心")]),e._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"https://www.ele.me",target:"_blank"}},[e._v("订单管理")])])],1)],1)},staticRenderFns:[]},u={name:"MainView",data:function(){return{}},components:{myHeader:n("VU/8")(s,o,!1,null,null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[t("myHeader")],1),this._v(" "),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[this._v("Aside")]),this._v(" "),t("el-container",[t("el-main",[this._v("Main")])],1)],1),this._v(" "),t("el-container",[t("el-footer",[this._v("Footer")])],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,c,!1,function(e){n("WsMT")},null,null).exports;a.default.use(l.a);var v=new l.a({routes:[{path:"/",name:"MainView",component:d}]}),m=n("zL8q"),_=n.n(m);n("tvR6");a.default.config.productionTip=!1,a.default.use(_.a),new a.default({el:"#app",router:v,components:{App:r},template:"<App/>"})},WsMT:function(e,t){},p7mv:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fc8b2662676c13c8bb79.js.map