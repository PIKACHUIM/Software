(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4],{1008:function(e,t,r){var content=r(1051);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("57af285a",content,!0,{sourceMap:!1})},1050:function(e,t,r){"use strict";var o=r(1008);r.n(o).a},1051:function(e,t,r){(t=r(78)(!1)).push([e.i,".xly-dialog-share{width:500px}.xly-dialog-share .td-select+.xly-dialog-share__label{margin-left:32px}.xly-dialog-share .td-select-group{width:144px}.xly-dialog-share .td-input__label{margin-right:10px}.xly-dialog-share .td-dropdown-menu{max-height:120px;box-shadow:0 0 10px 0 rgba(26,26,26,.2);border:unset;overflow-y:auto}.xly-dialog-share .td-dropdown-menu::-webkit-scrollbar{width:8px;background:transparent}.xly-dialog-share .td-dropdown-menu::-webkit-scrollbar:horizontal{height:8px}.xly-dialog-share .td-dropdown-menu::-webkit-scrollbar-thumb{border-radius:2px;width:8px;background:#e6e6e6}.xly-dialog-share .td-dropdown-menu::-webkit-scrollbar-thumb:hover{background:#ccc}.xly-dialog-share .xly-input--link .td-input__inner{width:260px}.xly-dialog-share .xly-input--code{margin-left:20px}.xly-dialog-share .xly-input--code .td-input__inner{width:72px}.xly-dialog-share .xly-icon-success-fill{margin-right:6px;color:#00b36a}.xly-dialog-share h2{text-align:left}.xly-dialog-share__name{display:inline-block;max-width:17em;vertical-align:top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xly-dialog-share__form{margin-top:10px}.xly-dialog-share__form .xly-dialog-share__form-item{display:flex;align-items:center;margin-bottom:24px}.xly-dialog-share__form .td-select:nth-child(0){margin-right:32px}.xly-dialog-share__label{width:60px}.xly-dialog-share__tips{margin-left:12px;color:var(--color-secondary)}.xly-dialog-share__footer{padding-top:6px;width:100%}.xly-dialog-share__footer p{margin-top:12px;text-align:center;font-size:11px;color:var(--color-secondary)}",""]),e.exports=t},1103:function(e,t,r){"use strict";r.r(t);r(7),r(8),r(32),r(16),r(10),r(515);var o=r(146),n=r(149),l=r(212),c=r(213),d=r(148),f=(r(1),r(88)),h=r(365),x=r(12),_=r(21);r(43);function y(e){return Object(_.a)("share",e,{method:"post"})}var v=r(230),m=r(518),w=r(109),k=r.n(w);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(d.a)(e);if(t){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var O=function(e,t,r,desc){var o,n=arguments.length,l=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l},R=function(e,t,r,o){return new(r||(r=Promise))((function(n,l){function c(e){try{f(o.next(e))}catch(e){l(e)}}function d(e){try{f(o.throw(e))}catch(e){l(e)}}function f(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,d)}f((o=o.apply(e,t||[])).next())}))},j=function(e){Object(l.a)(r,e);var t=C(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).isCreating=!1,e.isCreated=!1,e.visible=!0,e.timesOptions=Object.freeze(["不限","1次","2次","3次","4次","5次","6次","7次","8次","9次","10次","11次","12次","13次","14次","15次","16次","17次","18次","19次","20次"]),e.timesValue="不限",e.daysOptions=Object.freeze(["不限","1天","2天","3天","4天","5天","6天","7天"]),e.daysValue="不限",e.shareLink="",e.shareCode="",e.files=[],e}return Object(n.a)(r,[{key:"createShareLink",value:function(){return R(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==this.isCreating){e.next=2;break}return e.abrupt("return");case 2:this.isCreating=!0,t=this.timesOptions.indexOf(this.timesValue),r=this.daysOptions.indexOf(this.daysValue),y({file_ids:this.fileIds,share_to:"copy",title:"云盘资源分享",restore_limit:String(0===t?-1:t),expiration_days:String(0===r?-1:r)}).then((function(e){v.clipboard.writeText("链接：".concat(e.share_url,"\n提取码：").concat(e.pass_code)),o.isCreated=!0,o.shareLink=e.share_url||"",o.shareCode=e.pass_code||"",o.$eventTrack("share_finish",{result:"success",num_limit:t,time_limit:r})})).catch((function(e){var n;try{n=JSON.parse(e.message).error_description}catch(e){console.error(e)}o.$message({message:n,type:"error",position:"middle",duration:1e3}),o.$eventTrack("share_finish",{result:"fail",num_limit:t,time_limit:r})})).finally((function(){o.isCreating=!1}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"closeWindow",value:function(){window.close()}},{key:"created",value:function(){return R(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.client=x.client,e.next=3,x.client.callRemoteClientFunction("ThunderPanPluginWebview","GetShareFiles");case 3:void 0===(t=e.sent)[1]?this.files=t[0]||[]:console.error(t[1]);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"mounted",value:function(){return R(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.isLogEnable)();case 2:if(!e.sent){e.next=4;break}window.addEventListener("keyup",(function(e){return R(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("F12"!==e.key||!e.shiftKey){t.next=5;break}return t.next=3,k.a.getCurrentWindow().__resolve();case 3:t.sent.webContents.openDevTools();case 5:case"end":return t.stop()}}),t)})))}),!0);case 4:case"end":return e.stop()}}),e)})))}},{key:"fileIds",get:function(){return this.files.map((function(e){return e.id||""}))}},{key:"fileNames",get:function(){return this.files.map((function(e){return e.name||""})).join("，")}}]),r}(h.Vue),V=j=O([Object(h.Component)({})],j),z=(r(986),r(1050),r(147)),component=Object(z.a)(V,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td-dialog",{attrs:{"custom-class":"xly-dialog-task xly-dialog-share",visible:e.visible},on:{"update:visible":function(t){e.visible=t},ok:function(t){e.visible=!1},close:e.closeWindow}},[r("h2",{attrs:{slot:"header"},slot:"header"},[e._v("\n    分享文件："),r("span",{staticClass:"xly-dialog-share__name"},[e._v(e._s(e.fileNames))]),e._v(e._s("（共"+e.files.length+"项）")+"\n  ")]),e._v(" "),r("div",{staticClass:"xly-dialog-share__form"},[e.isCreated?[r("ul",[r("li",{staticClass:"xly-dialog-share__form-item"},[r("i",{staticClass:"xly-icon-success-fill"}),e._v(" 分享链接以及提取码已复制\n          "),r("span",{staticClass:"xly-dialog-share__tips"},[e._v("仅限拥有提取码者查看，更安全")])]),e._v(" "),r("li",{staticClass:"xly-dialog-share__form-item"},[r("td-input",{staticClass:"xly-input--link",attrs:{label:"链接"},model:{value:e.shareLink,callback:function(t){e.shareLink=t},expression:"shareLink"}}),e._v(" "),r("td-input",{staticClass:"xly-input--code",attrs:{label:"提取码"},model:{value:e.shareCode,callback:function(t){e.shareCode=t},expression:"shareCode"}})],1)])]:[r("ul",[r("li",{staticClass:"xly-dialog-share__form-item"},[r("span",{staticClass:"xly-dialog-share__label"},[e._v("分享形式")]),e._v(" "),r("td-radio",[e._v("有提取码")]),e._v(" "),r("span",{staticClass:"xly-dialog-share__tips"},[e._v("仅限拥有提取码者查看，更安全")])],1),e._v(" "),r("li",{staticClass:"xly-dialog-share__form-item"},[r("span",{staticClass:"xly-dialog-share__label"},[e._v("提取次数")]),e._v(" "),r("td-select",{attrs:{placeholder:"请选择",options:e.timesOptions},model:{value:e.timesValue,callback:function(t){e.timesValue=t},expression:"timesValue"}}),e._v(" "),r("span",{staticClass:"xly-dialog-share__label"},[e._v("提取期限")]),e._v(" "),r("td-select",{attrs:{placeholder:"请选择",options:e.daysOptions},model:{value:e.daysValue,callback:function(t){e.daysValue=t},expression:"daysValue"}})],1)])]],2),e._v(" "),r("div",{staticClass:"xly-dialog-share__footer",attrs:{slot:"footer"},slot:"footer"},[e.isCreated||e.isCreating?e.isCreating?[r("td-button",{attrs:{size:"large",status:"","status-icon":"loading"}},[e._v("\n        创建中\n      ")])]:[r("td-button",{attrs:{size:"large"},on:{click:e.closeWindow}},[e._v("\n        确定\n      ")])]:[r("td-button",{attrs:{size:"large"},on:{click:e.createShareLink}},[e._v("\n        创建链接\n      ")])],e._v(" "),r("p",{attrs:{slot:"footer"},slot:"footer"},[e._v("\n      配合净网行动，迅雷严厉打击不良、色情低俗信息的传播，如发现，或将封号处理。\n    ")])],2)])}),[],!1,null,null,null);t.default=component.exports},518:function(e,t,r){"use strict";r.r(t),r.d(t,"isLogEnable",(function(){return l}));r(10),r(1);var o=r(5),n=function(e,t,r,o){return new(r||(r=Promise))((function(n,l){function c(e){try{f(o.next(e))}catch(e){l(e)}}function d(e){try{f(o.throw(e))}catch(e){l(e)}}function f(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,d)}f((o=o.apply(e,t||[])).next())}))};function l(){return n(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.callServer)("IsDevToolsEnable");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}},983:function(e,t,r){var content=r(987);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("4421b217",content,!0,{sourceMap:!1})},986:function(e,t,r){"use strict";var o=r(983);r.n(o).a},987:function(e,t,r){(t=r(78)(!1)).push([e.i,".td-dialog .td-dialog__close:hover{background-color:#ff7b5f}.td-dialog h2{color:#1a1a1a}.td-dialog .xly-dialog__footer{position:relative;display:flex;justify-content:flex-end;width:100%}.td-dialog .xly-dialog__footer .xly-dialog-path__new{width:90px}.td-dialog .xly-dialog__footer-operate{position:absolute;left:0;display:flex;align-items:center;height:30px}.td-dialog .xly-dialog__footer-link{color:var(--color-primary)}.td-dialog .xly-dialog__button{display:flex}.td-dialog .xly-dialog__button .td-button{width:80px}.xly-dialog-site{margin-top:28px}.xly-dialog-site .td-select{margin-top:12px}.xly-dialog-site .td-select.is-checked .td-select-group{border-color:var(--color-primary)}.xly-dialog-site .td-select.is-checked .xly-select__file{color:var(--color-primary)}.xly-dialog-site .td-select.is-checked .xly-select__file:hover{color:var(--color-hover)}.xly-dialog-site .td-select .td-checkbox{margin-left:12px}.xly-dialog-site .td-select .td-checkbox__label{margin:0 12px;color:var(--color-primary)}.xly-dialog-site .td-select .td-select__drop{margin-right:34px}.xly-dialog-site .xly-select__file{position:absolute;right:8px;color:var(--color-primary)}.xly-dialog-site .xly-select__size{margin-right:10px;color:var(--color-secondary)}.xly-dialog-site .xly-select__size.is-warn{color:#ff9700}.xly-dialog-site .xly-select__size.is-danger{color:var(--color-danger)}.xly-dialog-site .xly-select__link{position:absolute;top:2px;left:80px;width:calc(100% - 110px);line-height:26px;text-indent:5px;color:var(--color-primary);background:#fff}.xly-dialog-site .td-input__inner{padding:6px 10px}.xly-dialog-site__checkbox{margin:12px 0 0}",""]),e.exports=t}}]);