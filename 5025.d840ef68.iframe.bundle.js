"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[5025],{"./dist/login/pages/LoginOtp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginOtp});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/login/lib/kcClsx.js"),_lib_kcSanitize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/lib/kcSanitize/index.js");function LoginOtp(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_4__.$)({doUseDefaultCss,classes}).kcClsx,otpLogin=kcContext.otpLogin,url=kcContext.url,messagesPerField=kcContext.messagesPerField,msg=i18n.msg,msgStr=i18n.msgStr;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:!messagesPerField.existsError("totp"),headerNode:msg("doLogIn")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form",Object.assign({id:"kc-otp-login-form",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:[otpLogin.userOtpCredentials.length>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:kcClsx("kcInputWrapperClass")},{children:otpLogin.userOtpCredentials.map((function(otpCredential,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{id:"kc-otp-credential-"+index,className:kcClsx("kcLoginOTPListInputClass"),type:"radio",name:"selectedCredentialId",value:otpCredential.id,defaultChecked:otpCredential.id===otpLogin.selectedCredentialId}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",Object.assign({htmlFor:"kc-otp-credential-"+index,className:kcClsx("kcLoginOTPListClass"),tabIndex:index},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",Object.assign({className:kcClsx("kcLoginOTPListItemHeaderClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({className:kcClsx("kcLoginOTPListItemIconBodyClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:kcClsx("kcLoginOTPListItemIconClass"),"aria-hidden":"true"})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({className:kcClsx("kcLoginOTPListItemTitleClass")},{children:otpCredential.userLabel}))]}))}))]},index)}))}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:kcClsx("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",Object.assign({htmlFor:"otp",className:kcClsx("kcLabelClass")},{children:msg("loginOtpOneTime")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:kcClsx("kcInputWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{id:"otp",name:"otp",autoComplete:"off",type:"text",className:kcClsx("kcInputClass"),autoFocus:!0,"aria-invalid":messagesPerField.existsError("totp")}),messagesPerField.existsError("totp")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{id:"input-error-otp-code",className:kcClsx("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:(0,_lib_kcSanitize__WEBPACK_IMPORTED_MODULE_5__.p)(messagesPerField.get("totp"))}})]}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormButtonsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn")})}))]}))]}))}))}}}]);