"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[2370],{"./dist/login/pages/WebauthnRegister.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>WebauthnRegister});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib_kcClsx=__webpack_require__("./dist/login/lib/kcClsx.js"),react=__webpack_require__("./node_modules/react/index.js"),useInsertScriptTags=__webpack_require__("./dist/tools/useInsertScriptTags.js"),assert=__webpack_require__("./dist/tools/assert.js");function WebauthnRegister(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,kcClsx=(0,lib_kcClsx.$)({doUseDefaultCss,classes}).kcClsx,url=kcContext.url,isSetRetry=kcContext.isSetRetry,isAppInitiatedAction=kcContext.isAppInitiatedAction,msg=i18n.msg,msgStr=i18n.msgStr;return function useScript(params){var authButtonId=params.authButtonId,kcContext=params.kcContext,i18n=params.i18n,url=kcContext.url,challenge=kcContext.challenge,userid=kcContext.userid,username=kcContext.username,signatureAlgorithms=kcContext.signatureAlgorithms,rpEntityName=kcContext.rpEntityName,rpId=kcContext.rpId,attestationConveyancePreference=kcContext.attestationConveyancePreference,authenticatorAttachment=kcContext.authenticatorAttachment,requireResidentKey=kcContext.requireResidentKey,userVerificationRequirement=kcContext.userVerificationRequirement,createTimeout=kcContext.createTimeout,excludeCredentialIds=kcContext.excludeCredentialIds,msgStr=i18n.msgStr,isFetchingTranslations=i18n.isFetchingTranslations,insertScriptTags=(0,useInsertScriptTags.m)({componentOrHookName:"LoginRecoveryAuthnCodeConfig",scriptTags:[{type:"module",textContent:function textContent(){return'\n                    import { registerByWebAuthn } from "'+url.resourcesPath+"/js/webauthnRegister.js\";\n                    const registerButton = document.getElementById('"+authButtonId+"');\n                    registerButton.addEventListener(\"click\", function() {\n                        const input = {\n                            challenge : '"+challenge+"',\n                            userid : '"+userid+"',\n                            username : '"+username+"',\n                            signatureAlgorithms : "+JSON.stringify(signatureAlgorithms)+",\n                            rpEntityName : "+JSON.stringify(rpEntityName)+",\n                            rpId : "+JSON.stringify(rpId)+",\n                            attestationConveyancePreference : "+JSON.stringify(attestationConveyancePreference)+",\n                            authenticatorAttachment : "+JSON.stringify(authenticatorAttachment)+",\n                            requireResidentKey : "+JSON.stringify(requireResidentKey)+",\n                            userVerificationRequirement : "+JSON.stringify(userVerificationRequirement)+",\n                            createTimeout : "+createTimeout+",\n                            excludeCredentialIds : "+JSON.stringify(excludeCredentialIds)+",\n                            initLabel : "+JSON.stringify(msgStr("webauthn-registration-init-label"))+",\n                            initLabelPrompt : "+JSON.stringify(msgStr("webauthn-registration-init-label-prompt"))+",\n                            errmsg : "+JSON.stringify(msgStr("webauthn-unsupported-browser-text"))+"\n                        };\n                        registerByWebAuthn(input);\n                    });\n                "}}]}).insertScriptTags;(0,react.useEffect)((function(){isFetchingTranslations||insertScriptTags()}),[isFetchingTranslations])}({authButtonId:"authenticateWebAuthnButton",kcContext,i18n}),(0,jsx_runtime.jsxs)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,headerNode:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:kcClsx("kcWebAuthnKeyIcon")}),msg("webauthn-registration-title")]})},{children:[(0,jsx_runtime.jsx)("form",Object.assign({id:"register",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:(0,jsx_runtime.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,jsx_runtime.jsx)("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON"}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"attestationObject",name:"attestationObject"}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"publicKeyCredentialId",name:"publicKeyCredentialId"}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"authenticatorLabel",name:"authenticatorLabel"}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"transports",name:"transports"}),(0,jsx_runtime.jsx)("input",{type:"hidden",id:"error",name:"error"}),(0,jsx_runtime.jsx)(LogoutOtherSessions,{kcClsx,i18n})]}))})),(0,jsx_runtime.jsx)("input",{type:"submit",className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),id:"authenticateWebAuthnButton",value:msgStr("doRegisterSecurityKey")}),!isSetRetry&&isAppInitiatedAction&&(0,jsx_runtime.jsx)("form",Object.assign({action:url.loginAction,className:kcClsx("kcFormClass"),id:"kc-webauthn-settings-form",method:"post"},{children:(0,jsx_runtime.jsx)("button",Object.assign({type:"submit",className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),id:"cancelWebAuthnAIA",name:"cancel-aia",value:"true"},{children:msg("doCancel")}))}))]}))}function LogoutOtherSessions(props){var kcClsx=props.kcClsx,msg=props.i18n.msg;return(0,jsx_runtime.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,jsx_runtime.jsx)("div",Object.assign({className:kcClsx("kcFormOptionsWrapperClass")},{children:(0,jsx_runtime.jsx)("div",Object.assign({className:"checkbox"},{children:(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",defaultChecked:!0}),msg("logoutOtherSessions")]})}))}))}))}(0,assert.h)(),(0,assert.h)()}}]);