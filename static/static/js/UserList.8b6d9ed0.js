(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserList"],{"0a76":function(e,r,t){"use strict";var n=t("d7df"),a=t.n(n);a.a},"25f0":function(e,r,t){"use strict";var n=t("6eeb"),a=t("825a"),s=t("d039"),i=t("ad6d"),o="toString",c=RegExp.prototype,u=c[o],l=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(l||d)&&n(RegExp.prototype,o,(function(){var e=a(this),r=String(e.source),t=e.flags,n=String(void 0===t&&e instanceof RegExp&&!("flags"in c)?i.call(e):t);return"/"+r+"/"+n}),{unsafe:!0})},"3ca3":function(e,r,t){"use strict";var n=t("6547").charAt,a=t("69f3"),s=t("7dd0"),i="String Iterator",o=a.set,c=a.getterFor(i);s(String,"String",(function(e){o(this,{type:i,string:String(e),index:0})}),(function(){var e,r=c(this),t=r.string,a=r.index;return a>=t.length?{value:void 0,done:!0}:(e=n(t,a),r.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,r,t){"use strict";var n=t("0366"),a=t("7b0b"),s=t("9bdd"),i=t("e95a"),o=t("50c4"),c=t("8418"),u=t("35a1");e.exports=function(e){var r,t,l,d,f,p,g=a(e),m="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,v=void 0!==b,w=u(g),y=0;if(v&&(b=n(b,h>2?arguments[2]:void 0,2)),void 0==w||m==Array&&i(w))for(r=o(g.length),t=new m(r);r>y;y++)p=v?b(g[y],y):g[y],c(t,y,p);else for(d=w.call(g),f=d.next,t=new m;!(l=f.call(d)).done;y++)p=v?s(d,b,[l.value,y],!0):l.value,c(t,y,p);return t.length=y,t}},5530:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b");function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},6547:function(e,r,t){var n=t("a691"),a=t("1d80"),s=function(e){return function(r,t){var s,i,o=String(a(r)),c=n(t),u=o.length;return c<0||c>=u?e?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===u||(i=o.charCodeAt(c+1))<56320||i>57343?e?o.charAt(c):s:e?o.slice(c,c+2):i-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},a630e:function(e,r,t){var n=t("23e7"),a=t("4df4"),s=t("1c7e"),i=!s((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},ad6d:function(e,r,t){"use strict";var n=t("825a");e.exports=function(){var e=n(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}},b0c0:function(e,r,t){var n=t("83ab"),a=t("9bf2").f,s=Function.prototype,i=s.toString,o=/^\s*function ([^ (]*)/,c="name";n&&!(c in s)&&a(s,c,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(e){return""}}})},d28b:function(e,r,t){var n=t("746f");n("iterator")},d7df:function(e,r,t){},dbb4:function(e,r,t){var n=t("23e7"),a=t("83ab"),s=t("56ef"),i=t("fc6a"),o=t("06cf"),c=t("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var r,t,n=i(e),a=o.f,u=s(n),l={},d=0;while(u.length>d)t=a(n,r=u[d++]),void 0!==t&&c(l,r,t);return l}})},ddb0:function(e,r,t){var n=t("da84"),a=t("fdbc"),s=t("e260"),i=t("9112"),o=t("b622"),c=o("iterator"),u=o("toStringTag"),l=s.values;for(var d in a){var f=n[d],p=f&&f.prototype;if(p){if(p[c]!==l)try{i(p,c,l)}catch(m){p[c]=l}if(p[u]||i(p,u,d),a[d])for(var g in s)if(p[g]!==s[g])try{i(p,g,s[g])}catch(m){p[g]=s[g]}}}},e01a:function(e,r,t){"use strict";var n=t("23e7"),a=t("83ab"),s=t("da84"),i=t("5135"),o=t("861d"),c=t("9bf2").f,u=t("e893"),l=s.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof f?new l(e):void 0===e?l():l(e);return""===e&&(d[r]=!0),r};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var g=p.toString,m="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,r=g.call(e);if(i(d,e))return"";var t=m?r.slice(7,-1):r.replace(h,"$1");return""===t?void 0:t}}),n({global:!0,forced:!0},{Symbol:f})}},e439:function(e,r,t){var n=t("23e7"),a=t("d039"),s=t("fc6a"),i=t("06cf").f,o=t("83ab"),c=a((function(){i(1)})),u=!o||c;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(e,r){return i(s(e),r)}})},f74d:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h3",[e._v("用户列表页面")]),t("a-card",[t("a-row",{attrs:{gutter:20}},[t("a-col",{attrs:{span:6}},[t("a-input-search",{attrs:{placeholder:"输入用户名查找","enter-button":"",allowClear:""},on:{search:e.getUserList},model:{value:e.queryParam.username,callback:function(r){e.$set(e.queryParam,"username",r)},expression:"queryParam.username"}})],1),t("a-col",{attrs:{span:4}},[t("a-button",{attrs:{type:"primary"},on:{click:function(r){e.addUserVisible=!0}}},[e._v("新增")])],1)],1),t("a-table",{attrs:{rowKey:"ID",columns:e.columns,pagination:e.pagination,dataSource:e.userlist,bordered:""},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"role",fn:function(r){return t("span",{},[e._v(e._s(1==r?"管理员":"订阅者"))])}},{key:"action",fn:function(r){return[t("div",{staticClass:"actionSlot"},[t("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"edit"},on:{click:function(t){return e.editUser(r.ID)}}},[e._v("编辑")]),t("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"danger",icon:"delete"},on:{click:function(t){return e.deleteUser(r.ID)}}},[e._v("删除")]),t("a-button",{attrs:{type:"info",icon:"info"},on:{click:function(t){return e.updatePass(r.ID)}}},[e._v("重置")])],1)]}}])})],1),t("a-modal",{attrs:{closable:"",title:"新增用户",visible:e.addUserVisible,width:"60%",destroyOnClose:""},on:{ok:e.addUserOk,cancel:e.addUserCancel}},[t("a-form-model",{ref:"addUserRef",attrs:{model:e.newUser,rules:e.addUserRules}},[t("a-form-model-item",{attrs:{label:"用户名",prop:"username"}},[t("a-input",{model:{value:e.newUser.username,callback:function(r){e.$set(e.newUser,"username",r)},expression:"newUser.username"}})],1),t("a-form-model-item",{attrs:{"has-feedback":"",label:"密码",prop:"password"}},[t("a-input-password",{model:{value:e.newUser.password,callback:function(r){e.$set(e.newUser,"password",r)},expression:"newUser.password"}})],1),t("a-form-model-item",{attrs:{"has-feedback":"",label:"确认密码",prop:"checkpass"}},[t("a-input-password",{model:{value:e.newUser.checkpass,callback:function(r){e.$set(e.newUser,"checkpass",r)},expression:"newUser.checkpass"}})],1)],1)],1),t("a-modal",{attrs:{closable:"",destroyOnClose:"",title:"编辑用户",visible:e.editUserVisible,width:"60%"},on:{ok:e.editUserOk,cancel:e.editUserCancel}},[t("a-form-model",{ref:"addUserRef",attrs:{model:e.userInfo,rules:e.userRules}},[t("a-form-model-item",{attrs:{label:"用户名",prop:"username"}},[t("a-input",{model:{value:e.userInfo.username,callback:function(r){e.$set(e.userInfo,"username",r)},expression:"userInfo.username"}})],1),t("a-form-model-item",{attrs:{label:"是否为管理员"}},[t("a-switch",{attrs:{checked:e.IsAdmin,"checked-children":"是","un-checked-children":"否"},on:{change:e.adminChange}})],1)],1)],1)],1)},a=[],s=t("5530"),i=(t("96cf"),t("1da1"));function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e){if(Array.isArray(e))return o(e)}t("a4d3"),t("e01a"),t("d28b"),t("a630e"),t("d3b7"),t("3ca3"),t("ddb0");function u(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}t("fb6a"),t("b0c0"),t("25f0");function l(e,r){if(e){if("string"===typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e){return c(e)||u(e)||l(e)||d()}var p=[{title:"ID",dataIndex:"ID",width:"10%",key:"id",align:"center"},{title:"用户名",dataIndex:"username",width:"20%",key:"username",align:"center"},{title:"角色",dataIndex:"role",width:"20%",key:"role",align:"center",scopedSlots:{customRender:"role"}},{title:"操作",width:"30%",key:"action",align:"center",scopedSlots:{customRender:"action"}}],g={data:function(){var e=this;return{pagination:{pageSizeOptions:["5","10","20"],pageSize:5,total:0,showSizeChanger:!0,showTotal:function(e){return"共".concat(e,"条")}},userlist:[],userInfo:{username:"",password:"",role:2,checkPass:""},newUser:{username:"",password:"",role:2,checkPass:""},columns:p,queryParam:{username:"",pagesize:5,pagenum:1},editVisible:!1,userRules:{username:[{validator:function(r,t,n){""==e.userInfo.username&&n(new Error("请输入用户名")),f(e.userInfo.username).length<4||f(e.userInfo.username).length>12?n(new Error("用户名应当在4到12个字符之间")):n()},trigger:"blur"}],password:[{validator:function(r,t,n){""==e.userInfo.password&&n(new Error("请输入密码")),f(e.userInfo.password).length<6||f(e.userInfo.password).length>20?n(new Error("密码应当在6到20位之间")):n()},trigger:"blur"}],checkpass:[{validator:function(r,t,n){""==e.userInfo.checkpass&&n(new Error("请输入密码")),e.userInfo.password!==e.userInfo.checkpass?n(new Error("密码不一致，请重新输入")):n()},trigger:"blur"}]},addUserRules:{username:[{validator:function(r,t,n){""==e.newUser.username&&n(new Error("请输入用户名")),f(e.newUser.username).length<4||f(e.newUser.username).length>12?n(new Error("用户名应当在4到12个字符之间")):n()},trigger:"blur"}],password:[{validator:function(r,t,n){""==e.newUser.password&&n(new Error("请输入密码")),f(e.newUser.password).length<6||f(e.newUser.password).length>20?n(new Error("密码应当在6到20位之间")):n()},trigger:"blur"}],checkpass:[{validator:function(r,t,n){""==e.newUser.checkpass&&n(new Error("请输入密码")),e.newUser.password!==e.newUser.checkpass?n(new Error("密码不一致，请重新输入")):n()},trigger:"blur"}]},editUserVisible:!1,addUserVisible:!1}},created:function(){this.getUserList()},computed:{IsAdmin:function(){return 1===this.userInfo.role}},methods:{getUserList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("users",{params:{username:e.queryParam.username,pagesize:e.queryParam.pagesize,pagenum:e.queryParam.pagenum}});case 2:if(t=r.sent,n=t.data,200==n.status){r.next=6;break}return r.abrupt("return",e.$message.error(n.message));case 6:e.userlist=n.data,e.pagination.total=n.total;case 8:case"end":return r.stop()}}),r)})))()},handleTableChange:function(e,r,t){var n=Object(s["a"])({},this.pagination);n.current=e.current,n.pageSize=e.pageSize,this.queryParam.pagesize=e.pageSize,this.queryParam.pagenum=e.current,e.pageSize!==this.pagination.pageSize&&(this.queryParam.pagenum=1,n.current=1),this.pagination=n,this.getUserList()},deleteUser:function(e){var r=this;this.$confirm({title:"提示：请再次确认",content:"确定要删除该用户吗？一旦删除，无法恢复",onOk:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$http.delete("user/".concat(e));case 2:if(n=t.sent,a=n.data,200==a.status){t.next=6;break}return t.abrupt("return",r.$message.error(a.message));case 6:r.$message.success("删除成功"),r.getUserList();case 8:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),onCancel:function(){r.$message.info("已取消删除")}})},addUserOk:function(){var e=this;this.$refs.addUserRef.validate(function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(t){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return",e.$message.error("参数不符合要求，请重新输入"));case 2:return r.next=4,e.$http.post("user/add",{username:e.newUser.username,password:e.newUser.password,role:e.newUser.role});case 4:if(n=r.sent,a=n.data,200==a.status){r.next=8;break}return r.abrupt("return",e.$message.error(a.message));case 8:e.$refs.addUserRef.resetFields(),e.addUserVisible=!1,e.$message.success("添加用户成功"),e.getUserList();case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},addUserCancel:function(){this.$refs.addUserRef.resetFields(),this.addUserVisible=!1,this.$message.info("新增用户已取消")},adminChange:function(e){this.userInfo.role=e?1:2},editUser:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.editUserVisible=!0,t.next=3,r.$http.get("user/".concat(e));case 3:n=t.sent,a=n.data,r.userInfo=a.data,r.userInfo.id=e;case 7:case"end":return t.stop()}}),t)})))()},editUserOk:function(){var e=this;this.$refs.addUserRef.validate(function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(t){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return",e.$message.error("参数不符合要求，请重新输入"));case 2:return r.next=4,e.$http.put("user/".concat(e.userInfo.id),{username:e.userInfo.username,role:e.userInfo.role});case 4:if(n=r.sent,a=n.data,200==a.status){r.next=8;break}return r.abrupt("return",e.$message.error(a.message));case 8:e.editUserVisible=!1,e.$message.success("更新用户信息成功"),e.getUserList();case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},editUserCancel:function(){this.$refs.addUserRef.resetFields(),this.editUserVisible=!1,this.$message.info("编辑已取消")}}},m=g,h=(t("0a76"),t("2877")),b=Object(h["a"])(m,n,a,!1,null,"87cfb320",null);r["default"]=b.exports},fb6a:function(e,r,t){"use strict";var n=t("23e7"),a=t("861d"),s=t("e8b5"),i=t("23cb"),o=t("50c4"),c=t("fc6a"),u=t("8418"),l=t("b622"),d=t("1dde"),f=t("ae40"),p=d("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),h=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p||!g},{slice:function(e,r){var t,n,l,d=c(this),f=o(d.length),p=i(e,f),g=i(void 0===r?f:r,f);if(s(d)&&(t=d.constructor,"function"!=typeof t||t!==Array&&!s(t.prototype)?a(t)&&(t=t[m],null===t&&(t=void 0)):t=void 0,t===Array||void 0===t))return h.call(d,p,g);for(n=new(void 0===t?Array:t)(b(g-p,0)),l=0;p<g;p++,l++)p in d&&u(n,l,d[p]);return n.length=l,n}})}}]);
//# sourceMappingURL=UserList.8b6d9ed0.js.map