webpackJsonp([4],{Amy1:function(n,e,o){(n.exports=o("bKW+")(!1)).push([n.i,"\n.login-container[data-v-15154116] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.login-container .login-form[data-v-15154116] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .tips[data-v-15154116] {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .tips span[data-v-15154116]:first-of-type {\n      margin-right: 16px;\n}\n.login-container .svg-container[data-v-15154116] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-15154116] {\n      font-size: 20px;\n}\n.login-container .title[data-v-15154116] {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .show-pwd[data-v-15154116] {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n",""])},"T+/8":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o("xBUk"),i=o.n(t),a={name:"login",data:function(){return{userInfoRequest:"uaa/user",loginRequest:"uaa/oauth/token",loginForm:{username:"",password:"",grant_type:"password"},loginRules:{username:[{required:!0,trigger:"change"}],password:[{required:!0,trigger:"change",validator:function(n,e,o){e.length<5?o(new Error("密码不能小于5位")):o()}}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;n.loading=!0,n.$http.post(n.$baseUrl+n.loginRequest,n.loginForm,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic YW5kcm9pZDphZG1pbg=="},transformRequest:[function(n){var e="";for(var o in n)e+=encodeURIComponent(o)+"="+encodeURIComponent(n[o])+"&";return e}]}).then(function(e){console.log(e),i.a.set("Admin-Token",e.access_token),i.a.set("Admin-Login-Id",n.loginForm.username),n.$store.commit("SET_TOKEN",e.access_token),n.$store.commit("SET_LOGIN_ID",n.loginForm.username),n.$http.get(n.$baseUrl+n.userInfoRequest,{headers:{"Content-Type":"application/x-www-form-urlencoded"},params:{access_token:e.access_token}}).then(function(e){console.log(e),n.loading=!1,e.authorities.filter(function(n){return"admin"===n.authority}).length>0?n.$router.push({path:"/"}):n.$message.error("此账号无管理员权限")}).catch(function(o){console.log(e.access_token),n.$message.error("dsds")})}).catch(function(e){console.log(e),n.loading=!1,n.$message({message:"账号密码错误",type:"error"})})})}}},r={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules,"label-position":"right"}},[o("h3",{staticClass:"title"},[n._v("\n      趣谷\n      "),n.$prodEnv?o("div",{staticClass:"common_environmenthint_item"},[n._v("\n        测试环境\n      ")]):n._e()]),n._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container svg-container_login"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),o("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"username"},model:{value:n.loginForm.username,callback:function(e){n.$set(n.loginForm,"username",e)},expression:"loginForm.username"}})],1),n._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),o("el-input",{attrs:{name:"password",type:n.pwdType,autoComplete:"on",placeholder:"password"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}}),n._v(" "),o("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[o("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),o("el-form-item",[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(e){e.preventDefault(),n.handleLogin(e)}}},[n._v("\n        Sign in\n      ")])],1)],1)],1)},staticRenderFns:[]};var s=o("D8HT")(a,r,!1,function(n){o("xNkt"),o("ncrd")},"data-v-15154116",null);e.default=s.exports},bkG8:function(n,e,o){(n.exports=o("bKW+")(!1)).push([n.i,"/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n",""])},ncrd:function(n,e,o){var t=o("Amy1");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("6imX")("781f5055",t,!0)},xNkt:function(n,e,o){var t=o("bkG8");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("6imX")("5cb06853",t,!0)}});