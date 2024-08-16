"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[7974],{"./dist/login/pages/LoginX509Info.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginX509Info});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/login/lib/kcClsx.js");function LoginX509Info(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__.$)({doUseDefaultCss,classes}).kcClsx,url=kcContext.url,x509=kcContext.x509,msg=i18n.msg,msgStr=i18n.msgStr;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,headerNode:msg("doLogIn")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form",Object.assign({id:"kc-x509-login-info",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:kcClsx("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({htmlFor:"certificate_subjectDN",className:kcClsx("kcLabelClass")},{children:msg("clientCertificate")}))})),x509.formData.subjectDN?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:kcClsx("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({id:"certificate_subjectDN",className:kcClsx("kcLabelClass")},{children:x509.formData.subjectDN}))})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:kcClsx("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({id:"certificate_subjectDN",className:kcClsx("kcLabelClass")},{children:msg("noCertificate")}))}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:x509.formData.isUserEnabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:kcClsx("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({htmlFor:"username",className:kcClsx("kcLabelClass")},{children:msg("doX509Login")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:kcClsx("kcLabelWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({id:"username",className:kcClsx("kcLabelClass")},{children:x509.formData.username}))}))]})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormButtonsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:kcClsx("kcFormButtonsWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:msgStr("doContinue")}),x509.formData.isUserEnabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),name:"cancel",id:"kc-cancel",type:"submit",value:msgStr("doIgnore")})]}))}))]}))]}))}))}}}]);