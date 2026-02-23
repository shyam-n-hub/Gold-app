function oS(t,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ey(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nd={exports:{}},Ys={},rd={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function aS(){if(ug)return ae;ug=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,b={};function A(k,L,se){this.props=k,this.context=L,this.refs=b,this.updater=se||I}A.prototype.isReactComponent={},A.prototype.setState=function(k,L){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,L,"setState")},A.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function G(){}G.prototype=A.prototype;function K(k,L,se){this.props=k,this.context=L,this.refs=b,this.updater=se||I}var O=K.prototype=new G;O.constructor=K,N(O,A.prototype),O.isPureReactComponent=!0;var j=Array.isArray,J=Object.prototype.hasOwnProperty,ie={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Ie(k,L,se){var oe,he={},fe=null,Se=null;if(L!=null)for(oe in L.ref!==void 0&&(Se=L.ref),L.key!==void 0&&(fe=""+L.key),L)J.call(L,oe)&&!_e.hasOwnProperty(oe)&&(he[oe]=L[oe]);var ge=arguments.length-2;if(ge===1)he.children=se;else if(1<ge){for(var U=Array(ge),we=0;we<ge;we++)U[we]=arguments[we+2];he.children=U}if(k&&k.defaultProps)for(oe in ge=k.defaultProps,ge)he[oe]===void 0&&(he[oe]=ge[oe]);return{$$typeof:t,type:k,key:fe,ref:Se,props:he,_owner:ie.current}}function Oe(k,L){return{$$typeof:t,type:k.type,key:L,ref:k.ref,props:k.props,_owner:k._owner}}function Fe(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function Dt(k){var L={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(se){return L[se]})}var wt=/\/+/g;function ct(k,L){return typeof k=="object"&&k!==null&&k.key!=null?Dt(""+k.key):L.toString(36)}function pt(k,L,se,oe,he){var fe=typeof k;(fe==="undefined"||fe==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(fe){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case t:case e:Se=!0}}if(Se)return Se=k,he=he(Se),k=oe===""?"."+ct(Se,0):oe,j(he)?(se="",k!=null&&(se=k.replace(wt,"$&/")+"/"),pt(he,L,se,"",function(we){return we})):he!=null&&(Fe(he)&&(he=Oe(he,se+(!he.key||Se&&Se.key===he.key?"":(""+he.key).replace(wt,"$&/")+"/")+k)),L.push(he)),1;if(Se=0,oe=oe===""?".":oe+":",j(k))for(var ge=0;ge<k.length;ge++){fe=k[ge];var U=oe+ct(fe,ge);Se+=pt(fe,L,se,U,he)}else if(U=w(k),typeof U=="function")for(k=U.call(k),ge=0;!(fe=k.next()).done;)fe=fe.value,U=oe+ct(fe,ge++),Se+=pt(fe,L,se,U,he);else if(fe==="object")throw L=String(k),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Se}function Rt(k,L,se){if(k==null)return k;var oe=[],he=0;return pt(k,oe,"","",function(fe){return L.call(se,fe,he++)}),oe}function Ue(k){if(k._status===-1){var L=k._result;L=L(),L.then(function(se){(k._status===0||k._status===-1)&&(k._status=1,k._result=se)},function(se){(k._status===0||k._status===-1)&&(k._status=2,k._result=se)}),k._status===-1&&(k._status=0,k._result=L)}if(k._status===1)return k._result.default;throw k._result}var pe={current:null},B={transition:null},ee={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:B,ReactCurrentOwner:ie};function $(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Rt,forEach:function(k,L,se){Rt(k,function(){L.apply(this,arguments)},se)},count:function(k){var L=0;return Rt(k,function(){L++}),L},toArray:function(k){return Rt(k,function(L){return L})||[]},only:function(k){if(!Fe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ae.Component=A,ae.Fragment=n,ae.Profiler=o,ae.PureComponent=K,ae.StrictMode=s,ae.Suspense=p,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ae.act=$,ae.cloneElement=function(k,L,se){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var oe=N({},k.props),he=k.key,fe=k.ref,Se=k._owner;if(L!=null){if(L.ref!==void 0&&(fe=L.ref,Se=ie.current),L.key!==void 0&&(he=""+L.key),k.type&&k.type.defaultProps)var ge=k.type.defaultProps;for(U in L)J.call(L,U)&&!_e.hasOwnProperty(U)&&(oe[U]=L[U]===void 0&&ge!==void 0?ge[U]:L[U])}var U=arguments.length-2;if(U===1)oe.children=se;else if(1<U){ge=Array(U);for(var we=0;we<U;we++)ge[we]=arguments[we+2];oe.children=ge}return{$$typeof:t,type:k.type,key:he,ref:fe,props:oe,_owner:Se}},ae.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},ae.createElement=Ie,ae.createFactory=function(k){var L=Ie.bind(null,k);return L.type=k,L},ae.createRef=function(){return{current:null}},ae.forwardRef=function(k){return{$$typeof:f,render:k}},ae.isValidElement=Fe,ae.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:Ue}},ae.memo=function(k,L){return{$$typeof:g,type:k,compare:L===void 0?null:L}},ae.startTransition=function(k){var L=B.transition;B.transition={};try{k()}finally{B.transition=L}},ae.unstable_act=$,ae.useCallback=function(k,L){return pe.current.useCallback(k,L)},ae.useContext=function(k){return pe.current.useContext(k)},ae.useDebugValue=function(){},ae.useDeferredValue=function(k){return pe.current.useDeferredValue(k)},ae.useEffect=function(k,L){return pe.current.useEffect(k,L)},ae.useId=function(){return pe.current.useId()},ae.useImperativeHandle=function(k,L,se){return pe.current.useImperativeHandle(k,L,se)},ae.useInsertionEffect=function(k,L){return pe.current.useInsertionEffect(k,L)},ae.useLayoutEffect=function(k,L){return pe.current.useLayoutEffect(k,L)},ae.useMemo=function(k,L){return pe.current.useMemo(k,L)},ae.useReducer=function(k,L,se){return pe.current.useReducer(k,L,se)},ae.useRef=function(k){return pe.current.useRef(k)},ae.useState=function(k){return pe.current.useState(k)},ae.useSyncExternalStore=function(k,L,se){return pe.current.useSyncExternalStore(k,L,se)},ae.useTransition=function(){return pe.current.useTransition()},ae.version="18.3.1",ae}var dg;function ah(){return dg||(dg=1,rd.exports=aS()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function lS(){if(hg)return Ys;hg=1;var t=ah(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var _,y={},w=null,I=null;g!==void 0&&(w=""+g),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(I=p.ref);for(_ in p)s.call(p,_)&&!l.hasOwnProperty(_)&&(y[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:f,key:w,ref:I,props:y,_owner:o.current}}return Ys.Fragment=n,Ys.jsx=u,Ys.jsxs=u,Ys}var fg;function cS(){return fg||(fg=1,nd.exports=lS()),nd.exports}var h=cS(),x=ah();const jn=ey(x),uS=oS({__proto__:null,default:jn},[x]);var Qa={},id={exports:{}},Tt={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function dS(){return pg||(pg=1,(function(t){function e(B,ee){var $=B.length;B.push(ee);e:for(;0<$;){var k=$-1>>>1,L=B[k];if(0<o(L,ee))B[k]=ee,B[$]=L,$=k;else break e}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ee=B[0],$=B.pop();if($!==ee){B[0]=$;e:for(var k=0,L=B.length,se=L>>>1;k<se;){var oe=2*(k+1)-1,he=B[oe],fe=oe+1,Se=B[fe];if(0>o(he,$))fe<L&&0>o(Se,he)?(B[k]=Se,B[fe]=$,k=fe):(B[k]=he,B[oe]=$,k=oe);else if(fe<L&&0>o(Se,$))B[k]=Se,B[fe]=$,k=fe;else break e}}return ee}function o(B,ee){var $=B.sortIndex-ee.sortIndex;return $!==0?$:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var p=[],g=[],_=1,y=null,w=3,I=!1,N=!1,b=!1,A=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(B){for(var ee=n(g);ee!==null;){if(ee.callback===null)s(g);else if(ee.startTime<=B)s(g),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=n(g)}}function j(B){if(b=!1,O(B),!N)if(n(p)!==null)N=!0,Ue(J);else{var ee=n(g);ee!==null&&pe(j,ee.startTime-B)}}function J(B,ee){N=!1,b&&(b=!1,G(Ie),Ie=-1),I=!0;var $=w;try{for(O(ee),y=n(p);y!==null&&(!(y.expirationTime>ee)||B&&!Dt());){var k=y.callback;if(typeof k=="function"){y.callback=null,w=y.priorityLevel;var L=k(y.expirationTime<=ee);ee=t.unstable_now(),typeof L=="function"?y.callback=L:y===n(p)&&s(p),O(ee)}else s(p);y=n(p)}if(y!==null)var se=!0;else{var oe=n(g);oe!==null&&pe(j,oe.startTime-ee),se=!1}return se}finally{y=null,w=$,I=!1}}var ie=!1,_e=null,Ie=-1,Oe=5,Fe=-1;function Dt(){return!(t.unstable_now()-Fe<Oe)}function wt(){if(_e!==null){var B=t.unstable_now();Fe=B;var ee=!0;try{ee=_e(!0,B)}finally{ee?ct():(ie=!1,_e=null)}}else ie=!1}var ct;if(typeof K=="function")ct=function(){K(wt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Rt=pt.port2;pt.port1.onmessage=wt,ct=function(){Rt.postMessage(null)}}else ct=function(){A(wt,0)};function Ue(B){_e=B,ie||(ie=!0,ct())}function pe(B,ee){Ie=A(function(){B(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||I||(N=!0,Ue(J))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(p)},t.unstable_next=function(B){switch(w){case 1:case 2:case 3:var ee=3;break;default:ee=w}var $=w;w=ee;try{return B()}finally{w=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=w;w=B;try{return ee()}finally{w=$}},t.unstable_scheduleCallback=function(B,ee,$){var k=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?k+$:k):$=k,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=$+L,B={id:_++,callback:ee,priorityLevel:B,startTime:$,expirationTime:L,sortIndex:-1},$>k?(B.sortIndex=$,e(g,B),n(p)===null&&B===n(g)&&(b?(G(Ie),Ie=-1):b=!0,pe(j,$-k))):(B.sortIndex=L,e(p,B),N||I||(N=!0,Ue(J))),B},t.unstable_shouldYield=Dt,t.unstable_wrapCallback=function(B){var ee=w;return function(){var $=w;w=ee;try{return B.apply(this,arguments)}finally{w=$}}}})(od)),od}var mg;function hS(){return mg||(mg=1,sd.exports=dS()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function fS(){if(gg)return Tt;gg=1;var t=ah(),e=hS();function n(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){u(r,i),u(r+"Capture",i)}function u(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function w(r){return p.call(y,r)?!0:p.call(_,r)?!1:g.test(r)?y[r]=!0:(_[r]=!0,!1)}function I(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,i,a,c){if(i===null||typeof i>"u"||I(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(r,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){A[r]=new b(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];A[i]=new b(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){A[r]=new b(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){A[r]=new b(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){A[r]=new b(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){A[r]=new b(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){A[r]=new b(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){A[r]=new b(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){A[r]=new b(r,5,!1,r.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function K(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(G,K);A[i]=new b(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(G,K);A[i]=new b(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(G,K);A[i]=new b(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){A[r]=new b(r,1,!1,r.toLowerCase(),null,!1,!1)}),A.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){A[r]=new b(r,1,!1,r.toLowerCase(),null,!0,!0)});function O(r,i,a,c){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,a,d,c)&&(a=null),c||d===null?w(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var j=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),ie=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Dt=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ee(r){return r===null||typeof r!="object"?null:(r=B&&r[B]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,k;function L(r){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+r}var se=!1;function oe(r,i){if(!r||se)return"";se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(R){var c=R}Reflect.construct(r,[],i)}else{try{i.call()}catch(R){c=R}r.call(i.prototype)}else{try{throw Error()}catch(R){c=R}r()}}catch(R){if(R&&c&&typeof R.stack=="string"){for(var d=R.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var E=`
`+d[v].replace(" at new "," at ");return r.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",r.displayName)),E}while(1<=v&&0<=S);break}}}finally{se=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?L(r):""}function he(r){switch(r.tag){case 5:return L(r.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return r=oe(r.type,!1),r;case 11:return r=oe(r.type.render,!1),r;case 1:return r=oe(r.type,!0),r;default:return""}}function fe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case _e:return"Fragment";case ie:return"Portal";case Oe:return"Profiler";case Ie:return"StrictMode";case ct:return"Suspense";case pt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Dt:return(r.displayName||"Context")+".Consumer";case Fe:return(r._context.displayName||"Context")+".Provider";case wt:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Rt:return i=r.displayName||null,i!==null?i:fe(r.type)||"Memo";case Ue:i=r._payload,r=r._init;try{return fe(r(i))}catch{}}return null}function Se(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function U(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function we(r){var i=U(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function St(r){r._valueTracker||(r._valueTracker=we(r))}function ln(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=U(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function cn(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Rr(r,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function ui(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yf(r,i){i=i.checked,i!=null&&O(r,"checked",i,!1)}function uc(r,i){yf(r,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?dc(r,i.type,a):i.hasOwnProperty("defaultValue")&&dc(r,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function _f(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function dc(r,i,a){(i!=="number"||cn(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var us=Array.isArray;function di(r,i,a,c){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function hc(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function wf(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(us(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:ge(a)}}function Sf(r,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Ef(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function Cf(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fc(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?Cf(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Bo,xf=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Bo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function ds(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uw=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(r){uw.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),hs[i]=hs[r]})});function If(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||hs.hasOwnProperty(r)&&hs[r]?(""+i).trim():i+"px"}function kf(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=If(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var dw=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pc(r,i){if(i){if(dw[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function mc(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gc=null;function vc(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var yc=null,hi=null,fi=null;function Tf(r){if(r=Os(r)){if(typeof yc!="function")throw Error(n(280));var i=r.stateNode;i&&(i=da(i),yc(r.stateNode,r.type,i))}}function Nf(r){hi?fi?fi.push(r):fi=[r]:hi=r}function Pf(){if(hi){var r=hi,i=fi;if(fi=hi=null,Tf(r),i)for(r=0;r<i.length;r++)Tf(i[r])}}function Rf(r,i){return r(i)}function Af(){}var _c=!1;function bf(r,i,a){if(_c)return r(i,a);_c=!0;try{return Rf(r,i,a)}finally{_c=!1,(hi!==null||fi!==null)&&(Af(),Pf())}}function fs(r,i){var a=r.stateNode;if(a===null)return null;var c=da(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var wc=!1;if(f)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){wc=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{wc=!1}function hw(r,i,a,c,d,m,v,S,E){var R=Array.prototype.slice.call(arguments,3);try{i.apply(a,R)}catch(M){this.onError(M)}}var ms=!1,Vo=null,$o=!1,Sc=null,fw={onError:function(r){ms=!0,Vo=r}};function pw(r,i,a,c,d,m,v,S,E){ms=!1,Vo=null,hw.apply(fw,arguments)}function mw(r,i,a,c,d,m,v,S,E){if(pw.apply(this,arguments),ms){if(ms){var R=Vo;ms=!1,Vo=null}else throw Error(n(198));$o||($o=!0,Sc=R)}}function Ar(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function jf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Of(r){if(Ar(r)!==r)throw Error(n(188))}function gw(r){var i=r.alternate;if(!i){if(i=Ar(r),i===null)throw Error(n(188));return i!==r?null:r}for(var a=r,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Of(d),r;if(m===c)return Of(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:i}function Lf(r){return r=gw(r),r!==null?Df(r):null}function Df(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Df(r);if(i!==null)return i;r=r.sibling}return null}var Mf=e.unstable_scheduleCallback,Ff=e.unstable_cancelCallback,vw=e.unstable_shouldYield,yw=e.unstable_requestPaint,Ve=e.unstable_now,_w=e.unstable_getCurrentPriorityLevel,Ec=e.unstable_ImmediatePriority,Uf=e.unstable_UserBlockingPriority,Ho=e.unstable_NormalPriority,ww=e.unstable_LowPriority,zf=e.unstable_IdlePriority,Go=null,un=null;function Sw(r){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Go,r,void 0,(r.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:xw,Ew=Math.log,Cw=Math.LN2;function xw(r){return r>>>=0,r===0?32:31-(Ew(r)/Cw|0)|0}var qo=64,Ko=4194304;function gs(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Yo(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=gs(S):(m&=v,m!==0&&(c=gs(m)))}else v=a&~d,v!==0?c=gs(v):m!==0&&(c=gs(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Kt(i),d=1<<a,c|=r[a],i&=~d;return c}function Iw(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kw(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-Kt(m),S=1<<v,E=d[v];E===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Iw(S,i)):E<=i&&(r.expiredLanes|=S),m&=~S}}function Cc(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Wf(){var r=qo;return qo<<=1,(qo&4194240)===0&&(qo=64),r}function xc(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function vs(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Kt(i),r[i]=a}function Tw(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Kt(a),m=1<<d;i[d]=0,c[d]=-1,r[d]=-1,a&=~m}}function Ic(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Kt(a),d=1<<c;d&i|r[c]&i&&(r[c]|=i),a&=~d}}var Ee=0;function Bf(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Vf,kc,$f,Hf,Gf,Tc=!1,Qo=[],Hn=null,Gn=null,qn=null,ys=new Map,_s=new Map,Kn=[],Nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(r,i){switch(r){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(i.pointerId)}}function ws(r,i,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Os(i),i!==null&&kc(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function Pw(r,i,a,c,d){switch(i){case"focusin":return Hn=ws(Hn,r,i,a,c,d),!0;case"dragenter":return Gn=ws(Gn,r,i,a,c,d),!0;case"mouseover":return qn=ws(qn,r,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return ys.set(m,ws(ys.get(m)||null,r,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,_s.set(m,ws(_s.get(m)||null,r,i,a,c,d)),!0}return!1}function Kf(r){var i=br(r.target);if(i!==null){var a=Ar(i);if(a!==null){if(i=a.tag,i===13){if(i=jf(a),i!==null){r.blockedOn=i,Gf(r.priority,function(){$f(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Jo(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Pc(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);gc=c,a.target.dispatchEvent(c),gc=null}else return i=Os(a),i!==null&&kc(i),r.blockedOn=a,!1;i.shift()}return!0}function Yf(r,i,a){Jo(r)&&a.delete(i)}function Rw(){Tc=!1,Hn!==null&&Jo(Hn)&&(Hn=null),Gn!==null&&Jo(Gn)&&(Gn=null),qn!==null&&Jo(qn)&&(qn=null),ys.forEach(Yf),_s.forEach(Yf)}function Ss(r,i){r.blockedOn===i&&(r.blockedOn=null,Tc||(Tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rw)))}function Es(r){function i(d){return Ss(d,r)}if(0<Qo.length){Ss(Qo[0],r);for(var a=1;a<Qo.length;a++){var c=Qo[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Hn!==null&&Ss(Hn,r),Gn!==null&&Ss(Gn,r),qn!==null&&Ss(qn,r),ys.forEach(i),_s.forEach(i),a=0;a<Kn.length;a++)c=Kn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Kn.length&&(a=Kn[0],a.blockedOn===null);)Kf(a),a.blockedOn===null&&Kn.shift()}var pi=j.ReactCurrentBatchConfig,Xo=!0;function Aw(r,i,a,c){var d=Ee,m=pi.transition;pi.transition=null;try{Ee=1,Nc(r,i,a,c)}finally{Ee=d,pi.transition=m}}function bw(r,i,a,c){var d=Ee,m=pi.transition;pi.transition=null;try{Ee=4,Nc(r,i,a,c)}finally{Ee=d,pi.transition=m}}function Nc(r,i,a,c){if(Xo){var d=Pc(r,i,a,c);if(d===null)Gc(r,i,c,Zo,a),qf(r,c);else if(Pw(d,r,i,a,c))c.stopPropagation();else if(qf(r,c),i&4&&-1<Nw.indexOf(r)){for(;d!==null;){var m=Os(d);if(m!==null&&Vf(m),m=Pc(r,i,a,c),m===null&&Gc(r,i,c,Zo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Gc(r,i,c,null,a)}}var Zo=null;function Pc(r,i,a,c){if(Zo=null,r=vc(c),r=br(r),r!==null)if(i=Ar(r),i===null)r=null;else if(a=i.tag,a===13){if(r=jf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Zo=r,null}function Qf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_w()){case Ec:return 1;case Uf:return 4;case Ho:case ww:return 16;case zf:return 536870912;default:return 16}default:return 16}}var Yn=null,Rc=null,ea=null;function Jf(){if(ea)return ea;var r,i=Rc,a=i.length,c,d="value"in Yn?Yn.value:Yn.textContent,m=d.length;for(r=0;r<a&&i[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return ea=d.slice(r,1<c?1-c:void 0)}function ta(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function na(){return!0}function Xf(){return!1}function At(r){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?na:Xf,this.isPropagationStopped=Xf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=At(mi),Cs=$({},mi,{view:0,detail:0}),jw=At(Cs),bc,jc,xs,ra=$({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==xs&&(xs&&r.type==="mousemove"?(bc=r.screenX-xs.screenX,jc=r.screenY-xs.screenY):jc=bc=0,xs=r),bc)},movementY:function(r){return"movementY"in r?r.movementY:jc}}),Zf=At(ra),Ow=$({},ra,{dataTransfer:0}),Lw=At(Ow),Dw=$({},Cs,{relatedTarget:0}),Oc=At(Dw),Mw=$({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Fw=At(Mw),Uw=$({},mi,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),zw=At(Uw),Ww=$({},mi,{data:0}),ep=At(Ww),Bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hw(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=$w[r])?!!i[r]:!1}function Lc(){return Hw}var Gw=$({},Cs,{key:function(r){if(r.key){var i=Bw[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=ta(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Vw[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(r){return r.type==="keypress"?ta(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ta(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),qw=At(Gw),Kw=$({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=At(Kw),Yw=$({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),Qw=At(Yw),Jw=$({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xw=At(Jw),Zw=$({},ra,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=At(Zw),t1=[9,13,27,32],Dc=f&&"CompositionEvent"in window,Is=null;f&&"documentMode"in document&&(Is=document.documentMode);var n1=f&&"TextEvent"in window&&!Is,np=f&&(!Dc||Is&&8<Is&&11>=Is),rp=" ",ip=!1;function sp(r,i){switch(r){case"keyup":return t1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var gi=!1;function r1(r,i){switch(r){case"compositionend":return op(i);case"keypress":return i.which!==32?null:(ip=!0,rp);case"textInput":return r=i.data,r===rp&&ip?null:r;default:return null}}function i1(r,i){if(gi)return r==="compositionend"||!Dc&&sp(r,i)?(r=Jf(),ea=Rc=Yn=null,gi=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return np&&i.locale!=="ko"?null:i.data;default:return null}}var s1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!s1[r.type]:i==="textarea"}function lp(r,i,a,c){Nf(c),i=la(i,"onChange"),0<i.length&&(a=new Ac("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var ks=null,Ts=null;function o1(r){kp(r,0)}function ia(r){var i=Si(r);if(ln(i))return r}function a1(r,i){if(r==="change")return i}var cp=!1;if(f){var Mc;if(f){var Fc="oninput"in document;if(!Fc){var up=document.createElement("div");up.setAttribute("oninput","return;"),Fc=typeof up.oninput=="function"}Mc=Fc}else Mc=!1;cp=Mc&&(!document.documentMode||9<document.documentMode)}function dp(){ks&&(ks.detachEvent("onpropertychange",hp),Ts=ks=null)}function hp(r){if(r.propertyName==="value"&&ia(Ts)){var i=[];lp(i,Ts,r,vc(r)),bf(o1,i)}}function l1(r,i,a){r==="focusin"?(dp(),ks=i,Ts=a,ks.attachEvent("onpropertychange",hp)):r==="focusout"&&dp()}function c1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ia(Ts)}function u1(r,i){if(r==="click")return ia(i)}function d1(r,i){if(r==="input"||r==="change")return ia(i)}function h1(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Yt=typeof Object.is=="function"?Object.is:h1;function Ns(r,i){if(Yt(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!Yt(r[d],i[d]))return!1}return!0}function fp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function pp(r,i){var a=fp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fp(a)}}function mp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?mp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function gp(){for(var r=window,i=cn();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=cn(r.document)}return i}function Uc(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function f1(r){var i=gp(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&mp(a.ownerDocument.documentElement,a)){if(c!==null&&Uc(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!r.extend&&m>c&&(d=c,c=m,m=d),d=pp(a,m);var v=pp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),m>c?(r.addRange(i),r.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var p1=f&&"documentMode"in document&&11>=document.documentMode,vi=null,zc=null,Ps=null,Wc=!1;function vp(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||vi==null||vi!==cn(c)||(c=vi,"selectionStart"in c&&Uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ps&&Ns(Ps,c)||(Ps=c,c=la(zc,"onSelect"),0<c.length&&(i=new Ac("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=vi)))}function sa(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var yi={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Bc={},yp={};f&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function oa(r){if(Bc[r])return Bc[r];if(!yi[r])return r;var i=yi[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in yp)return Bc[r]=i[a];return r}var _p=oa("animationend"),wp=oa("animationiteration"),Sp=oa("animationstart"),Ep=oa("transitionend"),Cp=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(r,i){Cp.set(r,i),l(i,[r])}for(var Vc=0;Vc<xp.length;Vc++){var $c=xp[Vc],m1=$c.toLowerCase(),g1=$c[0].toUpperCase()+$c.slice(1);Qn(m1,"on"+g1)}Qn(_p,"onAnimationEnd"),Qn(wp,"onAnimationIteration"),Qn(Sp,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(Ep,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Ip(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,mw(c,i,void 0,r),r.currentTarget=null}function kp(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],E=S.instance,R=S.currentTarget;if(S=S.listener,E!==m&&d.isPropagationStopped())break e;Ip(d,S,R),m=E}else for(v=0;v<c.length;v++){if(S=c[v],E=S.instance,R=S.currentTarget,S=S.listener,E!==m&&d.isPropagationStopped())break e;Ip(d,S,R),m=E}}}if($o)throw r=Sc,$o=!1,Sc=null,r}function Re(r,i){var a=i[Xc];a===void 0&&(a=i[Xc]=new Set);var c=r+"__bubble";a.has(c)||(Tp(i,r,2,!1),a.add(c))}function Hc(r,i,a){var c=0;i&&(c|=4),Tp(a,r,c,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function As(r){if(!r[aa]){r[aa]=!0,s.forEach(function(a){a!=="selectionchange"&&(v1.has(a)||Hc(a,!1,r),Hc(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[aa]||(i[aa]=!0,Hc("selectionchange",!1,i))}}function Tp(r,i,a,c){switch(Qf(i)){case 1:var d=Aw;break;case 4:d=bw;break;default:d=Nc}a=d.bind(null,i,a,r),d=void 0,!wc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Gc(r,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;v=v.return}for(;S!==null;){if(v=br(S),v===null)return;if(E=v.tag,E===5||E===6){c=m=v;continue e}S=S.parentNode}}c=c.return}bf(function(){var R=m,M=vc(a),F=[];e:{var D=Cp.get(r);if(D!==void 0){var V=Ac,q=r;switch(r){case"keypress":if(ta(a)===0)break e;case"keydown":case"keyup":V=qw;break;case"focusin":q="focus",V=Oc;break;case"focusout":q="blur",V=Oc;break;case"beforeblur":case"afterblur":V=Oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Qw;break;case _p:case wp:case Sp:V=Fw;break;case Ep:V=Xw;break;case"scroll":V=jw;break;case"wheel":V=e1;break;case"copy":case"cut":case"paste":V=zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=tp}var Y=(i&4)!==0,$e=!Y&&r==="scroll",T=Y?D!==null?D+"Capture":null:D;Y=[];for(var C=R,P;C!==null;){P=C;var z=P.stateNode;if(P.tag===5&&z!==null&&(P=z,T!==null&&(z=fs(C,T),z!=null&&Y.push(bs(C,z,P)))),$e)break;C=C.return}0<Y.length&&(D=new V(D,q,null,a,M),F.push({event:D,listeners:Y}))}}if((i&7)===0){e:{if(D=r==="mouseover"||r==="pointerover",V=r==="mouseout"||r==="pointerout",D&&a!==gc&&(q=a.relatedTarget||a.fromElement)&&(br(q)||q[Sn]))break e;if((V||D)&&(D=M.window===M?M:(D=M.ownerDocument)?D.defaultView||D.parentWindow:window,V?(q=a.relatedTarget||a.toElement,V=R,q=q?br(q):null,q!==null&&($e=Ar(q),q!==$e||q.tag!==5&&q.tag!==6)&&(q=null)):(V=null,q=R),V!==q)){if(Y=Zf,z="onMouseLeave",T="onMouseEnter",C="mouse",(r==="pointerout"||r==="pointerover")&&(Y=tp,z="onPointerLeave",T="onPointerEnter",C="pointer"),$e=V==null?D:Si(V),P=q==null?D:Si(q),D=new Y(z,C+"leave",V,a,M),D.target=$e,D.relatedTarget=P,z=null,br(M)===R&&(Y=new Y(T,C+"enter",q,a,M),Y.target=P,Y.relatedTarget=$e,z=Y),$e=z,V&&q)t:{for(Y=V,T=q,C=0,P=Y;P;P=_i(P))C++;for(P=0,z=T;z;z=_i(z))P++;for(;0<C-P;)Y=_i(Y),C--;for(;0<P-C;)T=_i(T),P--;for(;C--;){if(Y===T||T!==null&&Y===T.alternate)break t;Y=_i(Y),T=_i(T)}Y=null}else Y=null;V!==null&&Np(F,D,V,Y,!1),q!==null&&$e!==null&&Np(F,$e,q,Y,!0)}}e:{if(D=R?Si(R):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var Q=a1;else if(ap(D))if(cp)Q=d1;else{Q=c1;var X=l1}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(Q=u1);if(Q&&(Q=Q(r,R))){lp(F,Q,a,M);break e}X&&X(r,D,R),r==="focusout"&&(X=D._wrapperState)&&X.controlled&&D.type==="number"&&dc(D,"number",D.value)}switch(X=R?Si(R):window,r){case"focusin":(ap(X)||X.contentEditable==="true")&&(vi=X,zc=R,Ps=null);break;case"focusout":Ps=zc=vi=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,vp(F,a,M);break;case"selectionchange":if(p1)break;case"keydown":case"keyup":vp(F,a,M)}var Z;if(Dc)e:{switch(r){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else gi?sp(r,a)&&(re="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(np&&a.locale!=="ko"&&(gi||re!=="onCompositionStart"?re==="onCompositionEnd"&&gi&&(Z=Jf()):(Yn=M,Rc="value"in Yn?Yn.value:Yn.textContent,gi=!0)),X=la(R,re),0<X.length&&(re=new ep(re,r,null,a,M),F.push({event:re,listeners:X}),Z?re.data=Z:(Z=op(a),Z!==null&&(re.data=Z)))),(Z=n1?r1(r,a):i1(r,a))&&(R=la(R,"onBeforeInput"),0<R.length&&(M=new ep("onBeforeInput","beforeinput",null,a,M),F.push({event:M,listeners:R}),M.data=Z))}kp(F,i)})}function bs(r,i,a){return{instance:r,listener:i,currentTarget:a}}function la(r,i){for(var a=i+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=fs(r,a),m!=null&&c.unshift(bs(r,m,d)),m=fs(r,i),m!=null&&c.push(bs(r,m,d))),r=r.return}return c}function _i(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Np(r,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var S=a,E=S.alternate,R=S.stateNode;if(E!==null&&E===c)break;S.tag===5&&R!==null&&(S=R,d?(E=fs(a,m),E!=null&&v.unshift(bs(a,E,S))):d||(E=fs(a,m),E!=null&&v.push(bs(a,E,S)))),a=a.return}v.length!==0&&r.push({event:i,listeners:v})}var y1=/\r\n?/g,_1=/\u0000|\uFFFD/g;function Pp(r){return(typeof r=="string"?r:""+r).replace(y1,`
`).replace(_1,"")}function ca(r,i,a){if(i=Pp(i),Pp(r)!==i&&a)throw Error(n(425))}function ua(){}var qc=null,Kc=null;function Yc(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(r){return Rp.resolve(null).then(r).catch(E1)}:Qc;function E1(r){setTimeout(function(){throw r})}function Jc(r,i){var a=i,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Es(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Es(i)}function Jn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Ap(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var wi=Math.random().toString(36).slice(2),dn="__reactFiber$"+wi,js="__reactProps$"+wi,Sn="__reactContainer$"+wi,Xc="__reactEvents$"+wi,C1="__reactListeners$"+wi,x1="__reactHandles$"+wi;function br(r){var i=r[dn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[Sn]||a[dn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Ap(r);r!==null;){if(a=r[dn])return a;r=Ap(r)}return i}r=a,a=r.parentNode}return null}function Os(r){return r=r[dn]||r[Sn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Si(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function da(r){return r[js]||null}var Zc=[],Ei=-1;function Xn(r){return{current:r}}function Ae(r){0>Ei||(r.current=Zc[Ei],Zc[Ei]=null,Ei--)}function Te(r,i){Ei++,Zc[Ei]=r.current,r.current=i}var Zn={},ut=Xn(Zn),Et=Xn(!1),jr=Zn;function Ci(r,i){var a=r.type.contextTypes;if(!a)return Zn;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function Ct(r){return r=r.childContextTypes,r!=null}function ha(){Ae(Et),Ae(ut)}function bp(r,i,a){if(ut.current!==Zn)throw Error(n(168));Te(ut,i),Te(Et,a)}function jp(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Se(r)||"Unknown",d));return $({},a,c)}function fa(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Zn,jr=ut.current,Te(ut,r),Te(Et,Et.current),!0}function Op(r,i,a){var c=r.stateNode;if(!c)throw Error(n(169));a?(r=jp(r,i,jr),c.__reactInternalMemoizedMergedChildContext=r,Ae(Et),Ae(ut),Te(ut,r)):Ae(Et),Te(Et,a)}var En=null,pa=!1,eu=!1;function Lp(r){En===null?En=[r]:En.push(r)}function I1(r){pa=!0,Lp(r)}function er(){if(!eu&&En!==null){eu=!0;var r=0,i=Ee;try{var a=En;for(Ee=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}En=null,pa=!1}catch(d){throw En!==null&&(En=En.slice(r+1)),Mf(Ec,er),d}finally{Ee=i,eu=!1}}return null}var xi=[],Ii=0,ma=null,ga=0,Mt=[],Ft=0,Or=null,Cn=1,xn="";function Lr(r,i){xi[Ii++]=ga,xi[Ii++]=ma,ma=r,ga=i}function Dp(r,i,a){Mt[Ft++]=Cn,Mt[Ft++]=xn,Mt[Ft++]=Or,Or=r;var c=Cn;r=xn;var d=32-Kt(c)-1;c&=~(1<<d),a+=1;var m=32-Kt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Cn=1<<32-Kt(i)+d|a<<d|c,xn=m+r}else Cn=1<<m|a<<d|c,xn=r}function tu(r){r.return!==null&&(Lr(r,1),Dp(r,1,0))}function nu(r){for(;r===ma;)ma=xi[--Ii],xi[Ii]=null,ga=xi[--Ii],xi[Ii]=null;for(;r===Or;)Or=Mt[--Ft],Mt[Ft]=null,xn=Mt[--Ft],Mt[Ft]=null,Cn=Mt[--Ft],Mt[Ft]=null}var bt=null,jt=null,je=!1,Qt=null;function Mp(r,i){var a=Bt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Fp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,bt=r,jt=Jn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,bt=r,jt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:Cn,overflow:xn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Bt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,bt=r,jt=null,!0):!1;default:return!1}}function ru(r){return(r.mode&1)!==0&&(r.flags&128)===0}function iu(r){if(je){var i=jt;if(i){var a=i;if(!Fp(r,i)){if(ru(r))throw Error(n(418));i=Jn(a.nextSibling);var c=bt;i&&Fp(r,i)?Mp(c,a):(r.flags=r.flags&-4097|2,je=!1,bt=r)}}else{if(ru(r))throw Error(n(418));r.flags=r.flags&-4097|2,je=!1,bt=r}}}function Up(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;bt=r}function va(r){if(r!==bt)return!1;if(!je)return Up(r),je=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Yc(r.type,r.memoizedProps)),i&&(i=jt)){if(ru(r))throw zp(),Error(n(418));for(;i;)Mp(r,i),i=Jn(i.nextSibling)}if(Up(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){jt=Jn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}jt=null}}else jt=bt?Jn(r.stateNode.nextSibling):null;return!0}function zp(){for(var r=jt;r;)r=Jn(r.nextSibling)}function ki(){jt=bt=null,je=!1}function su(r){Qt===null?Qt=[r]:Qt.push(r)}var k1=j.ReactCurrentBatchConfig;function Ls(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,r));var d=c,m=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},i._stringRef=m,i)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function ya(r,i){throw r=Object.prototype.toString.call(i),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Wp(r){var i=r._init;return i(r._payload)}function Bp(r){function i(T,C){if(r){var P=T.deletions;P===null?(T.deletions=[C],T.flags|=16):P.push(C)}}function a(T,C){if(!r)return null;for(;C!==null;)i(T,C),C=C.sibling;return null}function c(T,C){for(T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function d(T,C){return T=lr(T,C),T.index=0,T.sibling=null,T}function m(T,C,P){return T.index=P,r?(P=T.alternate,P!==null?(P=P.index,P<C?(T.flags|=2,C):P):(T.flags|=2,C)):(T.flags|=1048576,C)}function v(T){return r&&T.alternate===null&&(T.flags|=2),T}function S(T,C,P,z){return C===null||C.tag!==6?(C=Qu(P,T.mode,z),C.return=T,C):(C=d(C,P),C.return=T,C)}function E(T,C,P,z){var Q=P.type;return Q===_e?M(T,C,P.props.children,z,P.key):C!==null&&(C.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ue&&Wp(Q)===C.type)?(z=d(C,P.props),z.ref=Ls(T,C,P),z.return=T,z):(z=Ba(P.type,P.key,P.props,null,T.mode,z),z.ref=Ls(T,C,P),z.return=T,z)}function R(T,C,P,z){return C===null||C.tag!==4||C.stateNode.containerInfo!==P.containerInfo||C.stateNode.implementation!==P.implementation?(C=Ju(P,T.mode,z),C.return=T,C):(C=d(C,P.children||[]),C.return=T,C)}function M(T,C,P,z,Q){return C===null||C.tag!==7?(C=Vr(P,T.mode,z,Q),C.return=T,C):(C=d(C,P),C.return=T,C)}function F(T,C,P){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Qu(""+C,T.mode,P),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case J:return P=Ba(C.type,C.key,C.props,null,T.mode,P),P.ref=Ls(T,null,C),P.return=T,P;case ie:return C=Ju(C,T.mode,P),C.return=T,C;case Ue:var z=C._init;return F(T,z(C._payload),P)}if(us(C)||ee(C))return C=Vr(C,T.mode,P,null),C.return=T,C;ya(T,C)}return null}function D(T,C,P,z){var Q=C!==null?C.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return Q!==null?null:S(T,C,""+P,z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case J:return P.key===Q?E(T,C,P,z):null;case ie:return P.key===Q?R(T,C,P,z):null;case Ue:return Q=P._init,D(T,C,Q(P._payload),z)}if(us(P)||ee(P))return Q!==null?null:M(T,C,P,z,null);ya(T,P)}return null}function V(T,C,P,z,Q){if(typeof z=="string"&&z!==""||typeof z=="number")return T=T.get(P)||null,S(C,T,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case J:return T=T.get(z.key===null?P:z.key)||null,E(C,T,z,Q);case ie:return T=T.get(z.key===null?P:z.key)||null,R(C,T,z,Q);case Ue:var X=z._init;return V(T,C,P,X(z._payload),Q)}if(us(z)||ee(z))return T=T.get(P)||null,M(C,T,z,Q,null);ya(C,z)}return null}function q(T,C,P,z){for(var Q=null,X=null,Z=C,re=C=0,et=null;Z!==null&&re<P.length;re++){Z.index>re?(et=Z,Z=null):et=Z.sibling;var ve=D(T,Z,P[re],z);if(ve===null){Z===null&&(Z=et);break}r&&Z&&ve.alternate===null&&i(T,Z),C=m(ve,C,re),X===null?Q=ve:X.sibling=ve,X=ve,Z=et}if(re===P.length)return a(T,Z),je&&Lr(T,re),Q;if(Z===null){for(;re<P.length;re++)Z=F(T,P[re],z),Z!==null&&(C=m(Z,C,re),X===null?Q=Z:X.sibling=Z,X=Z);return je&&Lr(T,re),Q}for(Z=c(T,Z);re<P.length;re++)et=V(Z,T,re,P[re],z),et!==null&&(r&&et.alternate!==null&&Z.delete(et.key===null?re:et.key),C=m(et,C,re),X===null?Q=et:X.sibling=et,X=et);return r&&Z.forEach(function(cr){return i(T,cr)}),je&&Lr(T,re),Q}function Y(T,C,P,z){var Q=ee(P);if(typeof Q!="function")throw Error(n(150));if(P=Q.call(P),P==null)throw Error(n(151));for(var X=Q=null,Z=C,re=C=0,et=null,ve=P.next();Z!==null&&!ve.done;re++,ve=P.next()){Z.index>re?(et=Z,Z=null):et=Z.sibling;var cr=D(T,Z,ve.value,z);if(cr===null){Z===null&&(Z=et);break}r&&Z&&cr.alternate===null&&i(T,Z),C=m(cr,C,re),X===null?Q=cr:X.sibling=cr,X=cr,Z=et}if(ve.done)return a(T,Z),je&&Lr(T,re),Q;if(Z===null){for(;!ve.done;re++,ve=P.next())ve=F(T,ve.value,z),ve!==null&&(C=m(ve,C,re),X===null?Q=ve:X.sibling=ve,X=ve);return je&&Lr(T,re),Q}for(Z=c(T,Z);!ve.done;re++,ve=P.next())ve=V(Z,T,re,ve.value,z),ve!==null&&(r&&ve.alternate!==null&&Z.delete(ve.key===null?re:ve.key),C=m(ve,C,re),X===null?Q=ve:X.sibling=ve,X=ve);return r&&Z.forEach(function(sS){return i(T,sS)}),je&&Lr(T,re),Q}function $e(T,C,P,z){if(typeof P=="object"&&P!==null&&P.type===_e&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case J:e:{for(var Q=P.key,X=C;X!==null;){if(X.key===Q){if(Q=P.type,Q===_e){if(X.tag===7){a(T,X.sibling),C=d(X,P.props.children),C.return=T,T=C;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ue&&Wp(Q)===X.type){a(T,X.sibling),C=d(X,P.props),C.ref=Ls(T,X,P),C.return=T,T=C;break e}a(T,X);break}else i(T,X);X=X.sibling}P.type===_e?(C=Vr(P.props.children,T.mode,z,P.key),C.return=T,T=C):(z=Ba(P.type,P.key,P.props,null,T.mode,z),z.ref=Ls(T,C,P),z.return=T,T=z)}return v(T);case ie:e:{for(X=P.key;C!==null;){if(C.key===X)if(C.tag===4&&C.stateNode.containerInfo===P.containerInfo&&C.stateNode.implementation===P.implementation){a(T,C.sibling),C=d(C,P.children||[]),C.return=T,T=C;break e}else{a(T,C);break}else i(T,C);C=C.sibling}C=Ju(P,T.mode,z),C.return=T,T=C}return v(T);case Ue:return X=P._init,$e(T,C,X(P._payload),z)}if(us(P))return q(T,C,P,z);if(ee(P))return Y(T,C,P,z);ya(T,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,C!==null&&C.tag===6?(a(T,C.sibling),C=d(C,P),C.return=T,T=C):(a(T,C),C=Qu(P,T.mode,z),C.return=T,T=C),v(T)):a(T,C)}return $e}var Ti=Bp(!0),Vp=Bp(!1),_a=Xn(null),wa=null,Ni=null,ou=null;function au(){ou=Ni=wa=null}function lu(r){var i=_a.current;Ae(_a),r._currentValue=i}function cu(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function Pi(r,i){wa=r,ou=Ni=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(xt=!0),r.firstContext=null)}function Ut(r){var i=r._currentValue;if(ou!==r)if(r={context:r,memoizedValue:i,next:null},Ni===null){if(wa===null)throw Error(n(308));Ni=r,wa.dependencies={lanes:0,firstContext:r}}else Ni=Ni.next=r;return i}var Dr=null;function uu(r){Dr===null?Dr=[r]:Dr.push(r)}function $p(r,i,a,c){var d=i.interleaved;return d===null?(a.next=a,uu(i)):(a.next=d.next,d.next=a),i.interleaved=a,In(r,c)}function In(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var tr=!1;function du(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(me&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,In(r,a)}return d=c.interleaved,d===null?(i.next=i,uu(c)):(i.next=d.next,d.next=i),c.interleaved=i,In(r,a)}function Sa(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Ic(r,a)}}function Gp(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function Ea(r,i,a,c){var d=r.updateQueue;tr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var E=S,R=E.next;E.next=null,v===null?m=R:v.next=R,v=E;var M=r.alternate;M!==null&&(M=M.updateQueue,S=M.lastBaseUpdate,S!==v&&(S===null?M.firstBaseUpdate=R:S.next=R,M.lastBaseUpdate=E))}if(m!==null){var F=d.baseState;v=0,M=R=E=null,S=m;do{var D=S.lane,V=S.eventTime;if((c&D)===D){M!==null&&(M=M.next={eventTime:V,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var q=r,Y=S;switch(D=i,V=a,Y.tag){case 1:if(q=Y.payload,typeof q=="function"){F=q.call(V,F,D);break e}F=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Y.payload,D=typeof q=="function"?q.call(V,F,D):q,D==null)break e;F=$({},F,D);break e;case 2:tr=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,D=d.effects,D===null?d.effects=[S]:D.push(S))}else V={eventTime:V,lane:D,tag:S.tag,payload:S.payload,callback:S.callback,next:null},M===null?(R=M=V,E=F):M=M.next=V,v|=D;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;D=S,S=D.next,D.next=null,d.lastBaseUpdate=D,d.shared.pending=null}}while(!0);if(M===null&&(E=F),d.baseState=E,d.firstBaseUpdate=R,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Ur|=v,r.lanes=v,r.memoizedState=F}}function qp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ds={},hn=Xn(Ds),Ms=Xn(Ds),Fs=Xn(Ds);function Mr(r){if(r===Ds)throw Error(n(174));return r}function hu(r,i){switch(Te(Fs,i),Te(Ms,r),Te(hn,Ds),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:fc(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=fc(i,r)}Ae(hn),Te(hn,i)}function Ri(){Ae(hn),Ae(Ms),Ae(Fs)}function Kp(r){Mr(Fs.current);var i=Mr(hn.current),a=fc(i,r.type);i!==a&&(Te(Ms,r),Te(hn,a))}function fu(r){Ms.current===r&&(Ae(hn),Ae(Ms))}var Le=Xn(0);function Ca(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pu=[];function mu(){for(var r=0;r<pu.length;r++)pu[r]._workInProgressVersionPrimary=null;pu.length=0}var xa=j.ReactCurrentDispatcher,gu=j.ReactCurrentBatchConfig,Fr=0,De=null,Ge=null,Xe=null,Ia=!1,Us=!1,zs=0,T1=0;function dt(){throw Error(n(321))}function vu(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Yt(r[a],i[a]))return!1;return!0}function yu(r,i,a,c,d,m){if(Fr=m,De=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=r===null||r.memoizedState===null?A1:b1,r=a(c,d),Us){m=0;do{if(Us=!1,zs=0,25<=m)throw Error(n(301));m+=1,Xe=Ge=null,i.updateQueue=null,xa.current=j1,r=a(c,d)}while(Us)}if(xa.current=Na,i=Ge!==null&&Ge.next!==null,Fr=0,Xe=Ge=De=null,Ia=!1,i)throw Error(n(300));return r}function _u(){var r=zs!==0;return zs=0,r}function fn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?De.memoizedState=Xe=r:Xe=Xe.next=r,Xe}function zt(){if(Ge===null){var r=De.alternate;r=r!==null?r.memoizedState:null}else r=Ge.next;var i=Xe===null?De.memoizedState:Xe.next;if(i!==null)Xe=i,Ge=r;else{if(r===null)throw Error(n(310));Ge=r,r={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?De.memoizedState=Xe=r:Xe=Xe.next=r}return Xe}function Ws(r,i){return typeof i=="function"?i(r):i}function wu(r){var i=zt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=Ge,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,E=null,R=m;do{var M=R.lane;if((Fr&M)===M)E!==null&&(E=E.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),c=R.hasEagerState?R.eagerState:r(c,R.action);else{var F={lane:M,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};E===null?(S=E=F,v=c):E=E.next=F,De.lanes|=M,Ur|=M}R=R.next}while(R!==null&&R!==m);E===null?v=c:E.next=S,Yt(c,i.memoizedState)||(xt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=E,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do m=d.lane,De.lanes|=m,Ur|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Su(r){var i=zt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);Yt(m,i.memoizedState)||(xt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Yp(){}function Qp(r,i){var a=De,c=zt(),d=i(),m=!Yt(c.memoizedState,d);if(m&&(c.memoizedState=d,xt=!0),c=c.queue,Eu(Zp.bind(null,a,c,r),[r]),c.getSnapshot!==i||m||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,Bs(9,Xp.bind(null,a,c,d,i),void 0,null),Ze===null)throw Error(n(349));(Fr&30)!==0||Jp(a,i,d)}return d}function Jp(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=De.updateQueue,i===null?(i={lastEffect:null,stores:null},De.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Xp(r,i,a,c){i.value=a,i.getSnapshot=c,em(i)&&tm(r)}function Zp(r,i,a){return a(function(){em(i)&&tm(r)})}function em(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Yt(r,a)}catch{return!0}}function tm(r){var i=In(r,1);i!==null&&en(i,r,1,-1)}function nm(r){var i=fn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:r},i.queue=r,r=r.dispatch=R1.bind(null,De,r),[i.memoizedState,r]}function Bs(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=De.updateQueue,i===null?(i={lastEffect:null,stores:null},De.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function rm(){return zt().memoizedState}function ka(r,i,a,c){var d=fn();De.flags|=r,d.memoizedState=Bs(1|i,a,void 0,c===void 0?null:c)}function Ta(r,i,a,c){var d=zt();c=c===void 0?null:c;var m=void 0;if(Ge!==null){var v=Ge.memoizedState;if(m=v.destroy,c!==null&&vu(c,v.deps)){d.memoizedState=Bs(i,a,m,c);return}}De.flags|=r,d.memoizedState=Bs(1|i,a,m,c)}function im(r,i){return ka(8390656,8,r,i)}function Eu(r,i){return Ta(2048,8,r,i)}function sm(r,i){return Ta(4,2,r,i)}function om(r,i){return Ta(4,4,r,i)}function am(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function lm(r,i,a){return a=a!=null?a.concat([r]):null,Ta(4,4,am.bind(null,i,r),a)}function Cu(){}function cm(r,i){var a=zt();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vu(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function um(r,i){var a=zt();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vu(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function dm(r,i,a){return(Fr&21)===0?(r.baseState&&(r.baseState=!1,xt=!0),r.memoizedState=a):(Yt(a,i)||(a=Wf(),De.lanes|=a,Ur|=a,r.baseState=!0),i)}function N1(r,i){var a=Ee;Ee=a!==0&&4>a?a:4,r(!0);var c=gu.transition;gu.transition={};try{r(!1),i()}finally{Ee=a,gu.transition=c}}function hm(){return zt().memoizedState}function P1(r,i,a){var c=or(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fm(r))pm(i,a);else if(a=$p(r,i,a,c),a!==null){var d=gt();en(a,r,c,d),mm(a,i,c)}}function R1(r,i,a){var c=or(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fm(r))pm(i,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,Yt(S,v)){var E=i.interleaved;E===null?(d.next=d,uu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}a=$p(r,i,d,c),a!==null&&(d=gt(),en(a,r,c,d),mm(a,i,c))}}function fm(r){var i=r.alternate;return r===De||i!==null&&i===De}function pm(r,i){Us=Ia=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function mm(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Ic(r,a)}}var Na={readContext:Ut,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},A1={readContext:Ut,useCallback:function(r,i){return fn().memoizedState=[r,i===void 0?null:i],r},useContext:Ut,useEffect:im,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,ka(4194308,4,am.bind(null,i,r),a)},useLayoutEffect:function(r,i){return ka(4194308,4,r,i)},useInsertionEffect:function(r,i){return ka(4,2,r,i)},useMemo:function(r,i){var a=fn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=fn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=P1.bind(null,De,r),[c.memoizedState,r]},useRef:function(r){var i=fn();return r={current:r},i.memoizedState=r},useState:nm,useDebugValue:Cu,useDeferredValue:function(r){return fn().memoizedState=r},useTransition:function(){var r=nm(!1),i=r[0];return r=N1.bind(null,r[1]),fn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=De,d=fn();if(je){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),Ze===null)throw Error(n(349));(Fr&30)!==0||Jp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,im(Zp.bind(null,c,m,r),[r]),c.flags|=2048,Bs(9,Xp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var r=fn(),i=Ze.identifierPrefix;if(je){var a=xn,c=Cn;a=(c&~(1<<32-Kt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=zs++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=T1++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},b1={readContext:Ut,useCallback:cm,useContext:Ut,useEffect:Eu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:um,useReducer:wu,useRef:rm,useState:function(){return wu(Ws)},useDebugValue:Cu,useDeferredValue:function(r){var i=zt();return dm(i,Ge.memoizedState,r)},useTransition:function(){var r=wu(Ws)[0],i=zt().memoizedState;return[r,i]},useMutableSource:Yp,useSyncExternalStore:Qp,useId:hm,unstable_isNewReconciler:!1},j1={readContext:Ut,useCallback:cm,useContext:Ut,useEffect:Eu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:um,useReducer:Su,useRef:rm,useState:function(){return Su(Ws)},useDebugValue:Cu,useDeferredValue:function(r){var i=zt();return Ge===null?i.memoizedState=r:dm(i,Ge.memoizedState,r)},useTransition:function(){var r=Su(Ws)[0],i=zt().memoizedState;return[r,i]},useMutableSource:Yp,useSyncExternalStore:Qp,useId:hm,unstable_isNewReconciler:!1};function Jt(r,i){if(r&&r.defaultProps){i=$({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function xu(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Pa={isMounted:function(r){return(r=r._reactInternals)?Ar(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=gt(),d=or(r),m=kn(c,d);m.payload=i,a!=null&&(m.callback=a),i=nr(r,m,d),i!==null&&(en(i,r,d,c),Sa(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=gt(),d=or(r),m=kn(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=nr(r,m,d),i!==null&&(en(i,r,d,c),Sa(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=gt(),c=or(r),d=kn(a,c);d.tag=2,i!=null&&(d.callback=i),i=nr(r,d,c),i!==null&&(en(i,r,c,a),Sa(i,r,c))}};function gm(r,i,a,c,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!Ns(a,c)||!Ns(d,m):!0}function vm(r,i,a){var c=!1,d=Zn,m=i.contextType;return typeof m=="object"&&m!==null?m=Ut(m):(d=Ct(i)?jr:ut.current,c=i.contextTypes,m=(c=c!=null)?Ci(r,d):Zn),i=new i(a,m),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pa,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),i}function ym(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&Pa.enqueueReplaceState(i,i.state,null)}function Iu(r,i,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},du(r);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Ut(m):(m=Ct(i)?jr:ut.current,d.context=Ci(r,m)),d.state=r.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(xu(r,i,m,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Pa.enqueueReplaceState(d,d.state,null),Ea(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Ai(r,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:i,stack:d,digest:null}}function ku(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function Tu(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var O1=typeof WeakMap=="function"?WeakMap:Map;function _m(r,i,a){a=kn(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Da||(Da=!0,Bu=c),Tu(r,i)},a}function wm(r,i,a){a=kn(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Tu(r,i)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Tu(r,i),typeof c!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Sm(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new O1;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),r=K1.bind(null,r,i,a),i.then(r,r))}function Em(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function Cm(r,i,a,c,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=kn(-1,1),i.tag=2,nr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var L1=j.ReactCurrentOwner,xt=!1;function mt(r,i,a,c){i.child=r===null?Vp(i,null,a,c):Ti(i,r.child,a,c)}function xm(r,i,a,c,d){a=a.render;var m=i.ref;return Pi(i,d),c=yu(r,i,a,c,m,d),a=_u(),r!==null&&!xt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Tn(r,i,d)):(je&&a&&tu(i),i.flags|=1,mt(r,i,c,d),i.child)}function Im(r,i,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Yu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,km(r,i,m,c,d)):(r=Ba(a.type,null,c,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ns,a(v,c)&&r.ref===i.ref)return Tn(r,i,d)}return i.flags|=1,r=lr(m,c),r.ref=i.ref,r.return=i,i.child=r}function km(r,i,a,c,d){if(r!==null){var m=r.memoizedProps;if(Ns(m,c)&&r.ref===i.ref)if(xt=!1,i.pendingProps=c=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(xt=!0);else return i.lanes=r.lanes,Tn(r,i,d)}return Nu(r,i,a,c,d)}function Tm(r,i,a){var c=i.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(ji,Ot),Ot|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Te(ji,Ot),Ot|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Te(ji,Ot),Ot|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Te(ji,Ot),Ot|=c;return mt(r,i,d,a),i.child}function Nm(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Nu(r,i,a,c,d){var m=Ct(a)?jr:ut.current;return m=Ci(i,m),Pi(i,d),a=yu(r,i,a,c,m,d),c=_u(),r!==null&&!xt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Tn(r,i,d)):(je&&c&&tu(i),i.flags|=1,mt(r,i,a,d),i.child)}function Pm(r,i,a,c,d){if(Ct(a)){var m=!0;fa(i)}else m=!1;if(Pi(i,d),i.stateNode===null)Aa(r,i),vm(i,a,c),Iu(i,a,c,d),c=!0;else if(r===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var E=v.context,R=a.contextType;typeof R=="object"&&R!==null?R=Ut(R):(R=Ct(a)?jr:ut.current,R=Ci(i,R));var M=a.getDerivedStateFromProps,F=typeof M=="function"||typeof v.getSnapshotBeforeUpdate=="function";F||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||E!==R)&&ym(i,v,c,R),tr=!1;var D=i.memoizedState;v.state=D,Ea(i,c,v,d),E=i.memoizedState,S!==c||D!==E||Et.current||tr?(typeof M=="function"&&(xu(i,a,M,c),E=i.memoizedState),(S=tr||gm(i,a,S,c,D,E,R))?(F||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=E),v.props=c,v.state=E,v.context=R,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Hp(r,i),S=i.memoizedProps,R=i.type===i.elementType?S:Jt(i.type,S),v.props=R,F=i.pendingProps,D=v.context,E=a.contextType,typeof E=="object"&&E!==null?E=Ut(E):(E=Ct(a)?jr:ut.current,E=Ci(i,E));var V=a.getDerivedStateFromProps;(M=typeof V=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==F||D!==E)&&ym(i,v,c,E),tr=!1,D=i.memoizedState,v.state=D,Ea(i,c,v,d);var q=i.memoizedState;S!==F||D!==q||Et.current||tr?(typeof V=="function"&&(xu(i,a,V,c),q=i.memoizedState),(R=tr||gm(i,a,R,c,D,q,E)||!1)?(M||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,q,E),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,q,E)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&D===r.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&D===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=q),v.props=c,v.state=q,v.context=E,c=R):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&D===r.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&D===r.memoizedState||(i.flags|=1024),c=!1)}return Pu(r,i,a,c,m,d)}function Pu(r,i,a,c,d,m){Nm(r,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Op(i,a,!1),Tn(r,i,m);c=i.stateNode,L1.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&v?(i.child=Ti(i,r.child,null,m),i.child=Ti(i,null,S,m)):mt(r,i,S,m),i.memoizedState=c.state,d&&Op(i,a,!0),i.child}function Rm(r){var i=r.stateNode;i.pendingContext?bp(r,i.pendingContext,i.pendingContext!==i.context):i.context&&bp(r,i.context,!1),hu(r,i.containerInfo)}function Am(r,i,a,c,d){return ki(),su(d),i.flags|=256,mt(r,i,a,c),i.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Au(r){return{baseLanes:r,cachePool:null,transitions:null}}function bm(r,i,a){var c=i.pendingProps,d=Le.current,m=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(m=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Te(Le,d&1),r===null)return iu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,r=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Va(v,c,0,null),r=Vr(r,c,a,null),m.return=i,r.return=i,m.sibling=r,i.child=m,i.child.memoizedState=Au(a),i.memoizedState=Ru,r):bu(i,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return D1(r,i,v,c,S,d,a);if(m){m=c.fallback,v=i.mode,d=r.child,S=d.sibling;var E={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=E,i.deletions=null):(c=lr(d,E),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=lr(S,m):(m=Vr(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=r.child.memoizedState,v=v===null?Au(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,i.memoizedState=Ru,c}return m=r.child,r=m.sibling,c=lr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function bu(r,i){return i=Va({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Ra(r,i,a,c){return c!==null&&su(c),Ti(i,r.child,null,a),r=bu(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function D1(r,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=ku(Error(n(422))),Ra(r,i,v,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Va({mode:"visible",children:c.children},d,0,null),m=Vr(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ti(i,r.child,null,v),i.child.memoizedState=Au(v),i.memoizedState=Ru,m);if((i.mode&1)===0)return Ra(r,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(n(419)),c=ku(m,c,void 0),Ra(r,i,v,c)}if(S=(v&r.childLanes)!==0,xt||S){if(c=Ze,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,In(r,d),en(c,r,d,-1))}return Ku(),c=ku(Error(n(421))),Ra(r,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=Y1.bind(null,r),d._reactRetry=i,null):(r=m.treeContext,jt=Jn(d.nextSibling),bt=i,je=!0,Qt=null,r!==null&&(Mt[Ft++]=Cn,Mt[Ft++]=xn,Mt[Ft++]=Or,Cn=r.id,xn=r.overflow,Or=i),i=bu(i,c.children),i.flags|=4096,i)}function jm(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),cu(r.return,i,a)}function ju(r,i,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Om(r,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(mt(r,i,c.children,a),c=Le.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&jm(r,a,i);else if(r.tag===19)jm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Te(Le,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&Ca(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ju(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&Ca(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ju(i,!0,a,null,m);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Tn(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(n(153));if(i.child!==null){for(r=i.child,a=lr(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=lr(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function M1(r,i,a){switch(i.tag){case 3:Rm(i),ki();break;case 5:Kp(i);break;case 1:Ct(i.type)&&fa(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Te(_a,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Te(Le,Le.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?bm(r,i,a):(Te(Le,Le.current&1),r=Tn(r,i,a),r!==null?r.sibling:null);Te(Le,Le.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return Om(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Te(Le,Le.current),c)break;return null;case 22:case 23:return i.lanes=0,Tm(r,i,a)}return Tn(r,i,a)}var Lm,Ou,Dm,Mm;Lm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ou=function(){},Dm=function(r,i,a,c){var d=r.memoizedProps;if(d!==c){r=i.stateNode,Mr(hn.current);var m=null;switch(a){case"input":d=Rr(r,d),c=Rr(r,c),m=[];break;case"select":d=$({},d,{value:void 0}),c=$({},c,{value:void 0}),m=[];break;case"textarea":d=hc(r,d),c=hc(r,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ua)}pc(a,c);var v;a=null;for(R in d)if(!c.hasOwnProperty(R)&&d.hasOwnProperty(R)&&d[R]!=null)if(R==="style"){var S=d[R];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(o.hasOwnProperty(R)?m||(m=[]):(m=m||[]).push(R,null));for(R in c){var E=c[R];if(S=d!=null?d[R]:void 0,c.hasOwnProperty(R)&&E!==S&&(E!=null||S!=null))if(R==="style")if(S){for(v in S)!S.hasOwnProperty(v)||E&&E.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in E)E.hasOwnProperty(v)&&S[v]!==E[v]&&(a||(a={}),a[v]=E[v])}else a||(m||(m=[]),m.push(R,a)),a=E;else R==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,S=S?S.__html:void 0,E!=null&&S!==E&&(m=m||[]).push(R,E)):R==="children"?typeof E!="string"&&typeof E!="number"||(m=m||[]).push(R,""+E):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(o.hasOwnProperty(R)?(E!=null&&R==="onScroll"&&Re("scroll",r),m||S===E||(m=[])):(m=m||[]).push(R,E))}a&&(m=m||[]).push("style",a);var R=m;(i.updateQueue=R)&&(i.flags|=4)}},Mm=function(r,i,a,c){a!==c&&(i.flags|=4)};function Vs(r,i){if(!je)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function ht(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function F1(r,i,a){var c=i.pendingProps;switch(nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return Ct(i.type)&&ha(),ht(i),null;case 3:return c=i.stateNode,Ri(),Ae(Et),Ae(ut),mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(va(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qt!==null&&(Hu(Qt),Qt=null))),Ou(r,i),ht(i),null;case 5:fu(i);var d=Mr(Fs.current);if(a=i.type,r!==null&&i.stateNode!=null)Dm(r,i,a,c,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return ht(i),null}if(r=Mr(hn.current),va(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[dn]=i,c[js]=m,r=(i.mode&1)!==0,a){case"dialog":Re("cancel",c),Re("close",c);break;case"iframe":case"object":case"embed":Re("load",c);break;case"video":case"audio":for(d=0;d<Rs.length;d++)Re(Rs[d],c);break;case"source":Re("error",c);break;case"img":case"image":case"link":Re("error",c),Re("load",c);break;case"details":Re("toggle",c);break;case"input":ui(c,m),Re("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Re("invalid",c);break;case"textarea":wf(c,m),Re("invalid",c)}pc(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&ca(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&ca(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Re("scroll",c)}switch(a){case"input":St(c),_f(c,m,!0);break;case"textarea":St(c),Ef(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ua)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Cf(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[dn]=i,r[js]=c,Lm(r,i,!1,!1),i.stateNode=r;e:{switch(v=mc(a,c),a){case"dialog":Re("cancel",r),Re("close",r),d=c;break;case"iframe":case"object":case"embed":Re("load",r),d=c;break;case"video":case"audio":for(d=0;d<Rs.length;d++)Re(Rs[d],r);d=c;break;case"source":Re("error",r),d=c;break;case"img":case"image":case"link":Re("error",r),Re("load",r),d=c;break;case"details":Re("toggle",r),d=c;break;case"input":ui(r,c),d=Rr(r,c),Re("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=$({},c,{value:void 0}),Re("invalid",r);break;case"textarea":wf(r,c),d=hc(r,c),Re("invalid",r);break;default:d=c}pc(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var E=S[m];m==="style"?kf(r,E):m==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&xf(r,E)):m==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&ds(r,E):typeof E=="number"&&ds(r,""+E):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?E!=null&&m==="onScroll"&&Re("scroll",r):E!=null&&O(r,m,E,v))}switch(a){case"input":St(r),_f(r,c,!1);break;case"textarea":St(r),Ef(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ge(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?di(r,!!c.multiple,m,!1):c.defaultValue!=null&&di(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ua)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ht(i),null;case 6:if(r&&i.stateNode!=null)Mm(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Mr(Fs.current),Mr(hn.current),va(i)){if(c=i.stateNode,a=i.memoizedProps,c[dn]=i,(m=c.nodeValue!==a)&&(r=bt,r!==null))switch(r.tag){case 3:ca(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ca(c.nodeValue,a,(r.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[dn]=i,i.stateNode=c}return ht(i),null;case 13:if(Ae(Le),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(je&&jt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)zp(),ki(),i.flags|=98560,m=!1;else if(m=va(i),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[dn]=i}else ki(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),m=!1}else Qt!==null&&(Hu(Qt),Qt=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Le.current&1)!==0?qe===0&&(qe=3):Ku())),i.updateQueue!==null&&(i.flags|=4),ht(i),null);case 4:return Ri(),Ou(r,i),r===null&&As(i.stateNode.containerInfo),ht(i),null;case 10:return lu(i.type._context),ht(i),null;case 17:return Ct(i.type)&&ha(),ht(i),null;case 19:if(Ae(Le),m=i.memoizedState,m===null)return ht(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Vs(m,!1);else{if(qe!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(v=Ca(r),v!==null){for(i.flags|=128,Vs(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,r=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Te(Le,Le.current&1|2),i.child}r=r.sibling}m.tail!==null&&Ve()>Oi&&(i.flags|=128,c=!0,Vs(m,!1),i.lanes=4194304)}else{if(!c)if(r=Ca(v),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Vs(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!je)return ht(i),null}else 2*Ve()-m.renderingStartTime>Oi&&a!==1073741824&&(i.flags|=128,c=!0,Vs(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ve(),i.sibling=null,a=Le.current,Te(Le,c?a&1|2:a&1),i):(ht(i),null);case 22:case 23:return qu(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Ot&1073741824)!==0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function U1(r,i){switch(nu(i),i.tag){case 1:return Ct(i.type)&&ha(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Ri(),Ae(Et),Ae(ut),mu(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return fu(i),null;case 13:if(Ae(Le),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ki()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Ae(Le),null;case 4:return Ri(),null;case 10:return lu(i.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var ba=!1,ft=!1,z1=typeof WeakSet=="function"?WeakSet:Set,H=null;function bi(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ze(r,i,c)}else a.current=null}function Lu(r,i,a){try{a()}catch(c){ze(r,i,c)}}var Fm=!1;function W1(r,i){if(qc=Xo,r=gp(),Uc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,E=-1,R=0,M=0,F=r,D=null;t:for(;;){for(var V;F!==a||d!==0&&F.nodeType!==3||(S=v+d),F!==m||c!==0&&F.nodeType!==3||(E=v+c),F.nodeType===3&&(v+=F.nodeValue.length),(V=F.firstChild)!==null;)D=F,F=V;for(;;){if(F===r)break t;if(D===a&&++R===d&&(S=v),D===m&&++M===c&&(E=v),(V=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=V}a=S===-1||E===-1?null:{start:S,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:r,selectionRange:a},Xo=!1,H=i;H!==null;)if(i=H,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,H=r;else for(;H!==null;){i=H;try{var q=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Y=q.memoizedProps,$e=q.memoizedState,T=i.stateNode,C=T.getSnapshotBeforeUpdate(i.elementType===i.type?Y:Jt(i.type,Y),$e);T.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var P=i.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(z){ze(i,i.return,z)}if(r=i.sibling,r!==null){r.return=i.return,H=r;break}H=i.return}return q=Fm,Fm=!1,q}function $s(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&Lu(i,a,m)}d=d.next}while(d!==c)}}function ja(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Du(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Um(r){var i=r.alternate;i!==null&&(r.alternate=null,Um(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[dn],delete i[js],delete i[Xc],delete i[C1],delete i[x1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function zm(r){return r.tag===5||r.tag===3||r.tag===4}function Wm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||zm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Mu(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ua));else if(c!==4&&(r=r.child,r!==null))for(Mu(r,i,a),r=r.sibling;r!==null;)Mu(r,i,a),r=r.sibling}function Fu(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Fu(r,i,a),r=r.sibling;r!==null;)Fu(r,i,a),r=r.sibling}var rt=null,Xt=!1;function rr(r,i,a){for(a=a.child;a!==null;)Bm(r,i,a),a=a.sibling}function Bm(r,i,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Go,a)}catch{}switch(a.tag){case 5:ft||bi(a,i);case 6:var c=rt,d=Xt;rt=null,rr(r,i,a),rt=c,Xt=d,rt!==null&&(Xt?(r=rt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):rt.removeChild(a.stateNode));break;case 18:rt!==null&&(Xt?(r=rt,a=a.stateNode,r.nodeType===8?Jc(r.parentNode,a):r.nodeType===1&&Jc(r,a),Es(r)):Jc(rt,a.stateNode));break;case 4:c=rt,d=Xt,rt=a.stateNode.containerInfo,Xt=!0,rr(r,i,a),rt=c,Xt=d;break;case 0:case 11:case 14:case 15:if(!ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Lu(a,i,v),d=d.next}while(d!==c)}rr(r,i,a);break;case 1:if(!ft&&(bi(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){ze(a,i,S)}rr(r,i,a);break;case 21:rr(r,i,a);break;case 22:a.mode&1?(ft=(c=ft)||a.memoizedState!==null,rr(r,i,a),ft=c):rr(r,i,a);break;default:rr(r,i,a)}}function Vm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new z1),i.forEach(function(c){var d=Q1.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Zt(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=r,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:rt=S.stateNode,Xt=!1;break e;case 3:rt=S.stateNode.containerInfo,Xt=!0;break e;case 4:rt=S.stateNode.containerInfo,Xt=!0;break e}S=S.return}if(rt===null)throw Error(n(160));Bm(m,v,d),rt=null,Xt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(R){ze(d,i,R)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$m(i,r),i=i.sibling}function $m(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Zt(i,r),pn(r),c&4){try{$s(3,r,r.return),ja(3,r)}catch(Y){ze(r,r.return,Y)}try{$s(5,r,r.return)}catch(Y){ze(r,r.return,Y)}}break;case 1:Zt(i,r),pn(r),c&512&&a!==null&&bi(a,a.return);break;case 5:if(Zt(i,r),pn(r),c&512&&a!==null&&bi(a,a.return),r.flags&32){var d=r.stateNode;try{ds(d,"")}catch(Y){ze(r,r.return,Y)}}if(c&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,S=r.type,E=r.updateQueue;if(r.updateQueue=null,E!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&yf(d,m),mc(S,v);var R=mc(S,m);for(v=0;v<E.length;v+=2){var M=E[v],F=E[v+1];M==="style"?kf(d,F):M==="dangerouslySetInnerHTML"?xf(d,F):M==="children"?ds(d,F):O(d,M,F,R)}switch(S){case"input":uc(d,m);break;case"textarea":Sf(d,m);break;case"select":var D=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var V=m.value;V!=null?di(d,!!m.multiple,V,!1):D!==!!m.multiple&&(m.defaultValue!=null?di(d,!!m.multiple,m.defaultValue,!0):di(d,!!m.multiple,m.multiple?[]:"",!1))}d[js]=m}catch(Y){ze(r,r.return,Y)}}break;case 6:if(Zt(i,r),pn(r),c&4){if(r.stateNode===null)throw Error(n(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(Y){ze(r,r.return,Y)}}break;case 3:if(Zt(i,r),pn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(i.containerInfo)}catch(Y){ze(r,r.return,Y)}break;case 4:Zt(i,r),pn(r);break;case 13:Zt(i,r),pn(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Wu=Ve())),c&4&&Vm(r);break;case 22:if(M=a!==null&&a.memoizedState!==null,r.mode&1?(ft=(R=ft)||M,Zt(i,r),ft=R):Zt(i,r),pn(r),c&8192){if(R=r.memoizedState!==null,(r.stateNode.isHidden=R)&&!M&&(r.mode&1)!==0)for(H=r,M=r.child;M!==null;){for(F=H=M;H!==null;){switch(D=H,V=D.child,D.tag){case 0:case 11:case 14:case 15:$s(4,D,D.return);break;case 1:bi(D,D.return);var q=D.stateNode;if(typeof q.componentWillUnmount=="function"){c=D,a=D.return;try{i=c,q.props=i.memoizedProps,q.state=i.memoizedState,q.componentWillUnmount()}catch(Y){ze(c,a,Y)}}break;case 5:bi(D,D.return);break;case 22:if(D.memoizedState!==null){qm(F);continue}}V!==null?(V.return=D,H=V):qm(F)}M=M.sibling}e:for(M=null,F=r;;){if(F.tag===5){if(M===null){M=F;try{d=F.stateNode,R?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=F.stateNode,E=F.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null,S.style.display=If("display",v))}catch(Y){ze(r,r.return,Y)}}}else if(F.tag===6){if(M===null)try{F.stateNode.nodeValue=R?"":F.memoizedProps}catch(Y){ze(r,r.return,Y)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===r)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===r)break e;for(;F.sibling===null;){if(F.return===null||F.return===r)break e;M===F&&(M=null),F=F.return}M===F&&(M=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Zt(i,r),pn(r),c&4&&Vm(r);break;case 21:break;default:Zt(i,r),pn(r)}}function pn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(zm(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ds(d,""),c.flags&=-33);var m=Wm(r);Fu(r,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Wm(r);Mu(r,S,v);break;default:throw Error(n(161))}}catch(E){ze(r,r.return,E)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function B1(r,i,a){H=r,Hm(r)}function Hm(r,i,a){for(var c=(r.mode&1)!==0;H!==null;){var d=H,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ba;if(!v){var S=d.alternate,E=S!==null&&S.memoizedState!==null||ft;S=ba;var R=ft;if(ba=v,(ft=E)&&!R)for(H=d;H!==null;)v=H,E=v.child,v.tag===22&&v.memoizedState!==null?Km(d):E!==null?(E.return=v,H=E):Km(d);for(;m!==null;)H=m,Hm(m),m=m.sibling;H=d,ba=S,ft=R}Gm(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,H=m):Gm(r)}}function Gm(r){for(;H!==null;){var i=H;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ft||ja(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Jt(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&qp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qp(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var R=i.alternate;if(R!==null){var M=R.memoizedState;if(M!==null){var F=M.dehydrated;F!==null&&Es(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ft||i.flags&512&&Du(i)}catch(D){ze(i,i.return,D)}}if(i===r){H=null;break}if(a=i.sibling,a!==null){a.return=i.return,H=a;break}H=i.return}}function qm(r){for(;H!==null;){var i=H;if(i===r){H=null;break}var a=i.sibling;if(a!==null){a.return=i.return,H=a;break}H=i.return}}function Km(r){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ja(4,i)}catch(E){ze(i,a,E)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(E){ze(i,d,E)}}var m=i.return;try{Du(i)}catch(E){ze(i,m,E)}break;case 5:var v=i.return;try{Du(i)}catch(E){ze(i,v,E)}}}catch(E){ze(i,i.return,E)}if(i===r){H=null;break}var S=i.sibling;if(S!==null){S.return=i.return,H=S;break}H=i.return}}var V1=Math.ceil,Oa=j.ReactCurrentDispatcher,Uu=j.ReactCurrentOwner,Wt=j.ReactCurrentBatchConfig,me=0,Ze=null,He=null,it=0,Ot=0,ji=Xn(0),qe=0,Hs=null,Ur=0,La=0,zu=0,Gs=null,It=null,Wu=0,Oi=1/0,Nn=null,Da=!1,Bu=null,ir=null,Ma=!1,sr=null,Fa=0,qs=0,Vu=null,Ua=-1,za=0;function gt(){return(me&6)!==0?Ve():Ua!==-1?Ua:Ua=Ve()}function or(r){return(r.mode&1)===0?1:(me&2)!==0&&it!==0?it&-it:k1.transition!==null?(za===0&&(za=Wf()),za):(r=Ee,r!==0||(r=window.event,r=r===void 0?16:Qf(r.type)),r)}function en(r,i,a,c){if(50<qs)throw qs=0,Vu=null,Error(n(185));vs(r,a,c),((me&2)===0||r!==Ze)&&(r===Ze&&((me&2)===0&&(La|=a),qe===4&&ar(r,it)),kt(r,c),a===1&&me===0&&(i.mode&1)===0&&(Oi=Ve()+500,pa&&er()))}function kt(r,i){var a=r.callbackNode;kw(r,i);var c=Yo(r,r===Ze?it:0);if(c===0)a!==null&&Ff(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&Ff(a),i===1)r.tag===0?I1(Qm.bind(null,r)):Lp(Qm.bind(null,r)),S1(function(){(me&6)===0&&er()}),a=null;else{switch(Bf(c)){case 1:a=Ec;break;case 4:a=Uf;break;case 16:a=Ho;break;case 536870912:a=zf;break;default:a=Ho}a=ig(a,Ym.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Ym(r,i){if(Ua=-1,za=0,(me&6)!==0)throw Error(n(327));var a=r.callbackNode;if(Li()&&r.callbackNode!==a)return null;var c=Yo(r,r===Ze?it:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Wa(r,c);else{i=c;var d=me;me|=2;var m=Xm();(Ze!==r||it!==i)&&(Nn=null,Oi=Ve()+500,Wr(r,i));do try{G1();break}catch(S){Jm(r,S)}while(!0);au(),Oa.current=m,me=d,He!==null?i=0:(Ze=null,it=0,i=qe)}if(i!==0){if(i===2&&(d=Cc(r),d!==0&&(c=d,i=$u(r,d))),i===1)throw a=Hs,Wr(r,0),ar(r,c),kt(r,Ve()),a;if(i===6)ar(r,c);else{if(d=r.current.alternate,(c&30)===0&&!$1(d)&&(i=Wa(r,c),i===2&&(m=Cc(r),m!==0&&(c=m,i=$u(r,m))),i===1))throw a=Hs,Wr(r,0),ar(r,c),kt(r,Ve()),a;switch(r.finishedWork=d,r.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Br(r,It,Nn);break;case 3:if(ar(r,c),(c&130023424)===c&&(i=Wu+500-Ve(),10<i)){if(Yo(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){gt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Qc(Br.bind(null,r,It,Nn),i);break}Br(r,It,Nn);break;case 4:if(ar(r,c),(c&4194240)===c)break;for(i=r.eventTimes,d=-1;0<c;){var v=31-Kt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=Ve()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*V1(c/1960))-c,10<c){r.timeoutHandle=Qc(Br.bind(null,r,It,Nn),c);break}Br(r,It,Nn);break;case 5:Br(r,It,Nn);break;default:throw Error(n(329))}}}return kt(r,Ve()),r.callbackNode===a?Ym.bind(null,r):null}function $u(r,i){var a=Gs;return r.current.memoizedState.isDehydrated&&(Wr(r,i).flags|=256),r=Wa(r,i),r!==2&&(i=It,It=a,i!==null&&Hu(i)),r}function Hu(r){It===null?It=r:It.push.apply(It,r)}function $1(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Yt(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(r,i){for(i&=~zu,i&=~La,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Kt(i),c=1<<a;r[a]=-1,i&=~c}}function Qm(r){if((me&6)!==0)throw Error(n(327));Li();var i=Yo(r,0);if((i&1)===0)return kt(r,Ve()),null;var a=Wa(r,i);if(r.tag!==0&&a===2){var c=Cc(r);c!==0&&(i=c,a=$u(r,c))}if(a===1)throw a=Hs,Wr(r,0),ar(r,i),kt(r,Ve()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Br(r,It,Nn),kt(r,Ve()),null}function Gu(r,i){var a=me;me|=1;try{return r(i)}finally{me=a,me===0&&(Oi=Ve()+500,pa&&er())}}function zr(r){sr!==null&&sr.tag===0&&(me&6)===0&&Li();var i=me;me|=1;var a=Wt.transition,c=Ee;try{if(Wt.transition=null,Ee=1,r)return r()}finally{Ee=c,Wt.transition=a,me=i,(me&6)===0&&er()}}function qu(){Ot=ji.current,Ae(ji)}function Wr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,w1(a)),He!==null)for(a=He.return;a!==null;){var c=a;switch(nu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ha();break;case 3:Ri(),Ae(Et),Ae(ut),mu();break;case 5:fu(c);break;case 4:Ri();break;case 13:Ae(Le);break;case 19:Ae(Le);break;case 10:lu(c.type._context);break;case 22:case 23:qu()}a=a.return}if(Ze=r,He=r=lr(r.current,null),it=Ot=i,qe=0,Hs=null,zu=La=Ur=0,It=Gs=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Dr=null}return r}function Jm(r,i){do{var a=He;try{if(au(),xa.current=Na,Ia){for(var c=De.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ia=!1}if(Fr=0,Xe=Ge=De=null,Us=!1,zs=0,Uu.current=null,a===null||a.return===null){qe=1,Hs=i,He=null;break}e:{var m=r,v=a.return,S=a,E=i;if(i=it,S.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var R=E,M=S,F=M.tag;if((M.mode&1)===0&&(F===0||F===11||F===15)){var D=M.alternate;D?(M.updateQueue=D.updateQueue,M.memoizedState=D.memoizedState,M.lanes=D.lanes):(M.updateQueue=null,M.memoizedState=null)}var V=Em(v);if(V!==null){V.flags&=-257,Cm(V,v,S,m,i),V.mode&1&&Sm(m,R,i),i=V,E=R;var q=i.updateQueue;if(q===null){var Y=new Set;Y.add(E),i.updateQueue=Y}else q.add(E);break e}else{if((i&1)===0){Sm(m,R,i),Ku();break e}E=Error(n(426))}}else if(je&&S.mode&1){var $e=Em(v);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),Cm($e,v,S,m,i),su(Ai(E,S));break e}}m=E=Ai(E,S),qe!==4&&(qe=2),Gs===null?Gs=[m]:Gs.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var T=_m(m,E,i);Gp(m,T);break e;case 1:S=E;var C=m.type,P=m.stateNode;if((m.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(ir===null||!ir.has(P)))){m.flags|=65536,i&=-i,m.lanes|=i;var z=wm(m,S,i);Gp(m,z);break e}}m=m.return}while(m!==null)}eg(a)}catch(Q){i=Q,He===a&&a!==null&&(He=a=a.return);continue}break}while(!0)}function Xm(){var r=Oa.current;return Oa.current=Na,r===null?Na:r}function Ku(){(qe===0||qe===3||qe===2)&&(qe=4),Ze===null||(Ur&268435455)===0&&(La&268435455)===0||ar(Ze,it)}function Wa(r,i){var a=me;me|=2;var c=Xm();(Ze!==r||it!==i)&&(Nn=null,Wr(r,i));do try{H1();break}catch(d){Jm(r,d)}while(!0);if(au(),me=a,Oa.current=c,He!==null)throw Error(n(261));return Ze=null,it=0,qe}function H1(){for(;He!==null;)Zm(He)}function G1(){for(;He!==null&&!vw();)Zm(He)}function Zm(r){var i=rg(r.alternate,r,Ot);r.memoizedProps=r.pendingProps,i===null?eg(r):He=i,Uu.current=null}function eg(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=F1(a,i,Ot),a!==null){He=a;return}}else{if(a=U1(a,i),a!==null){a.flags&=32767,He=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{qe=6,He=null;return}}if(i=i.sibling,i!==null){He=i;return}He=i=r}while(i!==null);qe===0&&(qe=5)}function Br(r,i,a){var c=Ee,d=Wt.transition;try{Wt.transition=null,Ee=1,q1(r,i,a,c)}finally{Wt.transition=d,Ee=c}return null}function q1(r,i,a,c){do Li();while(sr!==null);if((me&6)!==0)throw Error(n(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(Tw(r,m),r===Ze&&(He=Ze=null,it=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ma||(Ma=!0,ig(Ho,function(){return Li(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Wt.transition,Wt.transition=null;var v=Ee;Ee=1;var S=me;me|=4,Uu.current=null,W1(r,a),$m(a,r),f1(Kc),Xo=!!qc,Kc=qc=null,r.current=a,B1(a),yw(),me=S,Ee=v,Wt.transition=m}else r.current=a;if(Ma&&(Ma=!1,sr=r,Fa=d),m=r.pendingLanes,m===0&&(ir=null),Sw(a.stateNode),kt(r,Ve()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Da)throw Da=!1,r=Bu,Bu=null,r;return(Fa&1)!==0&&r.tag!==0&&Li(),m=r.pendingLanes,(m&1)!==0?r===Vu?qs++:(qs=0,Vu=r):qs=0,er(),null}function Li(){if(sr!==null){var r=Bf(Fa),i=Wt.transition,a=Ee;try{if(Wt.transition=null,Ee=16>r?16:r,sr===null)var c=!1;else{if(r=sr,sr=null,Fa=0,(me&6)!==0)throw Error(n(331));var d=me;for(me|=4,H=r.current;H!==null;){var m=H,v=m.child;if((H.flags&16)!==0){var S=m.deletions;if(S!==null){for(var E=0;E<S.length;E++){var R=S[E];for(H=R;H!==null;){var M=H;switch(M.tag){case 0:case 11:case 15:$s(8,M,m)}var F=M.child;if(F!==null)F.return=M,H=F;else for(;H!==null;){M=H;var D=M.sibling,V=M.return;if(Um(M),M===R){H=null;break}if(D!==null){D.return=V,H=D;break}H=V}}}var q=m.alternate;if(q!==null){var Y=q.child;if(Y!==null){q.child=null;do{var $e=Y.sibling;Y.sibling=null,Y=$e}while(Y!==null)}}H=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,H=v;else e:for(;H!==null;){if(m=H,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:$s(9,m,m.return)}var T=m.sibling;if(T!==null){T.return=m.return,H=T;break e}H=m.return}}var C=r.current;for(H=C;H!==null;){v=H;var P=v.child;if((v.subtreeFlags&2064)!==0&&P!==null)P.return=v,H=P;else e:for(v=C;H!==null;){if(S=H,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:ja(9,S)}}catch(Q){ze(S,S.return,Q)}if(S===v){H=null;break e}var z=S.sibling;if(z!==null){z.return=S.return,H=z;break e}H=S.return}}if(me=d,er(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Go,r)}catch{}c=!0}return c}finally{Ee=a,Wt.transition=i}}return!1}function tg(r,i,a){i=Ai(a,i),i=_m(r,i,1),r=nr(r,i,1),i=gt(),r!==null&&(vs(r,1,i),kt(r,i))}function ze(r,i,a){if(r.tag===3)tg(r,r,a);else for(;i!==null;){if(i.tag===3){tg(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))){r=Ai(a,r),r=wm(i,r,1),i=nr(i,r,1),r=gt(),i!==null&&(vs(i,1,r),kt(i,r));break}}i=i.return}}function K1(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=gt(),r.pingedLanes|=r.suspendedLanes&a,Ze===r&&(it&a)===a&&(qe===4||qe===3&&(it&130023424)===it&&500>Ve()-Wu?Wr(r,0):zu|=a),kt(r,i)}function ng(r,i){i===0&&((r.mode&1)===0?i=1:(i=Ko,Ko<<=1,(Ko&130023424)===0&&(Ko=4194304)));var a=gt();r=In(r,i),r!==null&&(vs(r,i,a),kt(r,a))}function Y1(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),ng(r,a)}function Q1(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),ng(r,a)}var rg;rg=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Et.current)xt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return xt=!1,M1(r,i,a);xt=(r.flags&131072)!==0}else xt=!1,je&&(i.flags&1048576)!==0&&Dp(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Aa(r,i),r=i.pendingProps;var d=Ci(i,ut.current);Pi(i,a),d=yu(null,i,c,r,d,a);var m=_u();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ct(c)?(m=!0,fa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,du(i),d.updater=Pa,i.stateNode=d,d._reactInternals=i,Iu(i,c,r,a),i=Pu(null,i,c,!0,m,a)):(i.tag=0,je&&m&&tu(i),mt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Aa(r,i),r=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=X1(c),r=Jt(c,r),d){case 0:i=Nu(null,i,c,r,a);break e;case 1:i=Pm(null,i,c,r,a);break e;case 11:i=xm(null,i,c,r,a);break e;case 14:i=Im(null,i,c,Jt(c.type,r),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Jt(c,d),Nu(r,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Jt(c,d),Pm(r,i,c,d,a);case 3:e:{if(Rm(i),r===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Hp(r,i),Ea(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ai(Error(n(423)),i),i=Am(r,i,c,a,d);break e}else if(c!==d){d=Ai(Error(n(424)),i),i=Am(r,i,c,a,d);break e}else for(jt=Jn(i.stateNode.containerInfo.firstChild),bt=i,je=!0,Qt=null,a=Vp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ki(),c===d){i=Tn(r,i,a);break e}mt(r,i,c,a)}i=i.child}return i;case 5:return Kp(i),r===null&&iu(i),c=i.type,d=i.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,Yc(c,d)?v=null:m!==null&&Yc(c,m)&&(i.flags|=32),Nm(r,i),mt(r,i,v,a),i.child;case 6:return r===null&&iu(i),null;case 13:return bm(r,i,a);case 4:return hu(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=Ti(i,null,c,a):mt(r,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Jt(c,d),xm(r,i,c,d,a);case 7:return mt(r,i,i.pendingProps,a),i.child;case 8:return mt(r,i,i.pendingProps.children,a),i.child;case 12:return mt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,Te(_a,c._currentValue),c._currentValue=v,m!==null)if(Yt(m.value,v)){if(m.children===d.children&&!Et.current){i=Tn(r,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var E=S.firstContext;E!==null;){if(E.context===c){if(m.tag===1){E=kn(-1,a&-a),E.tag=2;var R=m.updateQueue;if(R!==null){R=R.shared;var M=R.pending;M===null?E.next=E:(E.next=M.next,M.next=E),R.pending=E}}m.lanes|=a,E=m.alternate,E!==null&&(E.lanes|=a),cu(m.return,a,i),S.lanes|=a;break}E=E.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(n(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),cu(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}mt(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Pi(i,a),d=Ut(d),c=c(d),i.flags|=1,mt(r,i,c,a),i.child;case 14:return c=i.type,d=Jt(c,i.pendingProps),d=Jt(c.type,d),Im(r,i,c,d,a);case 15:return km(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Jt(c,d),Aa(r,i),i.tag=1,Ct(c)?(r=!0,fa(i)):r=!1,Pi(i,a),vm(i,c,d),Iu(i,c,d,a),Pu(null,i,c,!0,r,a);case 19:return Om(r,i,a);case 22:return Tm(r,i,a)}throw Error(n(156,i.tag))};function ig(r,i){return Mf(r,i)}function J1(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(r,i,a,c){return new J1(r,i,a,c)}function Yu(r){return r=r.prototype,!(!r||!r.isReactComponent)}function X1(r){if(typeof r=="function")return Yu(r)?1:0;if(r!=null){if(r=r.$$typeof,r===wt)return 11;if(r===Rt)return 14}return 2}function lr(r,i){var a=r.alternate;return a===null?(a=Bt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ba(r,i,a,c,d,m){var v=2;if(c=r,typeof r=="function")Yu(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case _e:return Vr(a.children,d,m,i);case Ie:v=8,d|=8;break;case Oe:return r=Bt(12,a,i,d|2),r.elementType=Oe,r.lanes=m,r;case ct:return r=Bt(13,a,i,d),r.elementType=ct,r.lanes=m,r;case pt:return r=Bt(19,a,i,d),r.elementType=pt,r.lanes=m,r;case pe:return Va(a,d,m,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Fe:v=10;break e;case Dt:v=9;break e;case wt:v=11;break e;case Rt:v=14;break e;case Ue:v=16,c=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return i=Bt(v,a,i,d),i.elementType=r,i.type=c,i.lanes=m,i}function Vr(r,i,a,c){return r=Bt(7,r,c,i),r.lanes=a,r}function Va(r,i,a,c){return r=Bt(22,r,c,i),r.elementType=pe,r.lanes=a,r.stateNode={isHidden:!1},r}function Qu(r,i,a){return r=Bt(6,r,null,i),r.lanes=a,r}function Ju(r,i,a){return i=Bt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function Z1(r,i,a,c,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xu(r,i,a,c,d,m,v,S,E){return r=new Z1(r,i,a,S,E),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Bt(3,null,null,i),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(m),r}function eS(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function sg(r){if(!r)return Zn;r=r._reactInternals;e:{if(Ar(r)!==r||r.tag!==1)throw Error(n(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ct(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(Ct(a))return jp(r,a,i)}return i}function og(r,i,a,c,d,m,v,S,E){return r=Xu(a,c,!0,r,d,m,v,S,E),r.context=sg(null),a=r.current,c=gt(),d=or(a),m=kn(c,d),m.callback=i??null,nr(a,m,d),r.current.lanes=d,vs(r,d,c),kt(r,c),r}function $a(r,i,a,c){var d=i.current,m=gt(),v=or(d);return a=sg(a),i.context===null?i.context=a:i.pendingContext=a,i=kn(m,v),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=nr(d,i,v),r!==null&&(en(r,d,v,m),Sa(r,d,v)),v}function Ha(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ag(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Zu(r,i){ag(r,i),(r=r.alternate)&&ag(r,i)}function tS(){return null}var lg=typeof reportError=="function"?reportError:function(r){console.error(r)};function ed(r){this._internalRoot=r}Ga.prototype.render=ed.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(n(409));$a(r,i,null,null)},Ga.prototype.unmount=ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;zr(function(){$a(null,r,null,null)}),i[Sn]=null}};function Ga(r){this._internalRoot=r}Ga.prototype.unstable_scheduleHydration=function(r){if(r){var i=Hf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Kn.length&&i!==0&&i<Kn[a].priority;a++);Kn.splice(a,0,r),a===0&&Kf(r)}};function td(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function qa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function cg(){}function nS(r,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var R=Ha(v);m.call(R)}}var v=og(i,c,r,0,null,!1,!1,"",cg);return r._reactRootContainer=v,r[Sn]=v.current,As(r.nodeType===8?r.parentNode:r),zr(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var R=Ha(E);S.call(R)}}var E=Xu(r,0,!1,null,null,!1,!1,"",cg);return r._reactRootContainer=E,r[Sn]=E.current,As(r.nodeType===8?r.parentNode:r),zr(function(){$a(i,E,a,c)}),E}function Ka(r,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var E=Ha(v);S.call(E)}}$a(i,v,r,d)}else v=nS(a,i,r,d,c);return Ha(v)}Vf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=gs(i.pendingLanes);a!==0&&(Ic(i,a|1),kt(i,Ve()),(me&6)===0&&(Oi=Ve()+500,er()))}break;case 13:zr(function(){var c=In(r,1);if(c!==null){var d=gt();en(c,r,1,d)}}),Zu(r,1)}},kc=function(r){if(r.tag===13){var i=In(r,134217728);if(i!==null){var a=gt();en(i,r,134217728,a)}Zu(r,134217728)}},$f=function(r){if(r.tag===13){var i=or(r),a=In(r,i);if(a!==null){var c=gt();en(a,r,i,c)}Zu(r,i)}},Hf=function(){return Ee},Gf=function(r,i){var a=Ee;try{return Ee=r,i()}finally{Ee=a}},yc=function(r,i,a){switch(i){case"input":if(uc(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var d=da(c);if(!d)throw Error(n(90));ln(c),uc(c,d)}}}break;case"textarea":Sf(r,a);break;case"select":i=a.value,i!=null&&di(r,!!a.multiple,i,!1)}},Rf=Gu,Af=zr;var rS={usingClientEntryPoint:!1,Events:[Os,Si,da,Nf,Pf,Gu]},Ks={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Lf(r),r===null?null:r.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Go=Ya.inject(iS),un=Ya}catch{}}return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS,Tt.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(i))throw Error(n(200));return eS(r,i,null,a)},Tt.createRoot=function(r,i){if(!td(r))throw Error(n(299));var a=!1,c="",d=lg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xu(r,1,!1,null,null,a,!1,c,d),r[Sn]=i.current,As(r.nodeType===8?r.parentNode:r),new ed(i)},Tt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Lf(i),r=r===null?null:r.stateNode,r},Tt.flushSync=function(r){return zr(r)},Tt.hydrate=function(r,i,a){if(!qa(i))throw Error(n(200));return Ka(null,r,i,!0,a)},Tt.hydrateRoot=function(r,i,a){if(!td(r))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=lg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=og(i,null,r,1,a??null,d,!1,m,v),r[Sn]=i.current,As(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ga(i)},Tt.render=function(r,i,a){if(!qa(i))throw Error(n(200));return Ka(null,r,i,!1,a)},Tt.unmountComponentAtNode=function(r){if(!qa(r))throw Error(n(40));return r._reactRootContainer?(zr(function(){Ka(null,null,r,!1,function(){r._reactRootContainer=null,r[Sn]=null})}),!0):!1},Tt.unstable_batchedUpdates=Gu,Tt.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!qa(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return Ka(r,i,a,!1,c)},Tt.version="18.3.1-next-f1338f8080-20240426",Tt}var vg;function ty(){if(vg)return id.exports;vg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),id.exports=fS(),id.exports}var yg;function pS(){if(yg)return Qa;yg=1;var t=ty();return Qa.createRoot=t.createRoot,Qa.hydrateRoot=t.hydrateRoot,Qa}var mS=pS();const gS=ey(mS);ty();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ho.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const _g="popstate";function vS(t){t===void 0&&(t={});function e(s,o){let{pathname:l,search:u,hash:f}=s.location;return Td("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:ul(o)}return _S(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yS(){return Math.random().toString(36).substr(2,8)}function wg(t,e){return{usr:t.state,key:t.key,idx:e}}function Td(t,e,n,s){return n===void 0&&(n=null),ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?es(e):e,{state:n,key:e&&e.key||s||yS()})}function ul(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function _S(t,e,n,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,f=gr.Pop,p=null,g=_();g==null&&(g=0,u.replaceState(ho({},u.state,{idx:g}),""));function _(){return(u.state||{idx:null}).idx}function y(){f=gr.Pop;let A=_(),G=A==null?null:A-g;g=A,p&&p({action:f,location:b.location,delta:G})}function w(A,G){f=gr.Push;let K=Td(b.location,A,G);g=_()+1;let O=wg(K,g),j=b.createHref(K);try{u.pushState(O,"",j)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;o.location.assign(j)}l&&p&&p({action:f,location:b.location,delta:1})}function I(A,G){f=gr.Replace;let K=Td(b.location,A,G);g=_();let O=wg(K,g),j=b.createHref(K);u.replaceState(O,"",j),l&&p&&p({action:f,location:b.location,delta:0})}function N(A){let G=o.location.origin!=="null"?o.location.origin:o.location.href,K=typeof A=="string"?A:ul(A);return K=K.replace(/ $/,"%20"),Me(G,"No window.location.(origin|href) available to create URL for href: "+K),new URL(K,G)}let b={get action(){return f},get location(){return t(o,u)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(_g,y),p=A,()=>{o.removeEventListener(_g,y),p=null}},createHref(A){return e(o,A)},createURL:N,encodeLocation(A){let G=N(A);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:I,go(A){return u.go(A)}};return b}var Sg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sg||(Sg={}));function wS(t,e,n){return n===void 0&&(n="/"),SS(t,e,n)}function SS(t,e,n,s){let o=typeof e=="string"?es(e):e,l=Hi(o.pathname||"/",n);if(l==null)return null;let u=ny(t);ES(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let g=jS(l);f=AS(u[p],g)}return f}function ny(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let o=(l,u,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(Me(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let g=yr([s,p.relativePath]),_=n.concat(p);l.children&&l.children.length>0&&(Me(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),ny(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:PS(g,l.index),routesMeta:_})};return t.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let p of ry(l.path))o(l,u,p)}),e}function ry(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=ry(s.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>t.startsWith("/")&&p===""?"/":p)}function ES(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RS(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const CS=/^:[\w-]+$/,xS=3,IS=2,kS=1,TS=10,NS=-2,Eg=t=>t==="*";function PS(t,e){let n=t.split("/"),s=n.length;return n.some(Eg)&&(s+=NS),e&&(s+=IS),n.filter(o=>!Eg(o)).reduce((o,l)=>o+(CS.test(l)?xS:l===""?kS:TS),s)}function RS(t,e){return t.length===e.length&&t.slice(0,-1).every((s,o)=>s===e[o])?t[t.length-1]-e[e.length-1]:0}function AS(t,e,n){let{routesMeta:s}=t,o={},l="/",u=[];for(let f=0;f<s.length;++f){let p=s[f],g=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",y=Nd({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),w=p.route;if(!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:yr([l,y.pathname]),pathnameBase:FS(yr([l,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(l=yr([l,y.pathnameBase]))}return u}function Nd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=bS(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((g,_,y)=>{let{paramName:w,isOptional:I}=_;if(w==="*"){let b=f[y]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const N=f[y];return I&&!N?g[w]=void 0:g[w]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:u,pattern:t}}function bS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function jS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}const OS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LS=t=>OS.test(t);function DS(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:o=""}=typeof t=="string"?es(t):t,l;if(n)if(LS(n))l=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),lh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+n))}n.startsWith("/")?l=Cg(n.substring(1),"/"):l=Cg(n,e)}else l=e;return{pathname:l,search:US(s),hash:zS(o)}}function Cg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ad(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ch(t,e){let n=MS(t);return e?n.map((s,o)=>o===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function uh(t,e,n,s){s===void 0&&(s=!1);let o;typeof t=="string"?o=es(t):(o=ho({},t),Me(!o.pathname||!o.pathname.includes("?"),ad("?","pathname","search",o)),Me(!o.pathname||!o.pathname.includes("#"),ad("#","pathname","hash",o)),Me(!o.search||!o.search.includes("#"),ad("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let y=e.length-1;if(!s&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),y-=1;o.pathname=w.join("/")}f=y>=0?e[y]:"/"}let p=DS(o,f),g=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),FS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),US=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iy=["post","put","patch","delete"];new Set(iy);const BS=["get",...iy];new Set(BS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},fo.apply(this,arguments)}const Wl=x.createContext(null),sy=x.createContext(null),Wn=x.createContext(null),Bl=x.createContext(null),Bn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),oy=x.createContext(null);function VS(t,e){let{relative:n}=e===void 0?{}:e;ts()||Me(!1);let{basename:s,navigator:o}=x.useContext(Wn),{hash:l,pathname:u,search:f}=Vl(t,{relative:n}),p=u;return s!=="/"&&(p=u==="/"?s:yr([s,u])),o.createHref({pathname:p,search:f,hash:l})}function ts(){return x.useContext(Bl)!=null}function ti(){return ts()||Me(!1),x.useContext(Bl).location}function ay(t){x.useContext(Wn).static||x.useLayoutEffect(t)}function ni(){let{isDataRoute:t}=x.useContext(Bn);return t?rE():$S()}function $S(){ts()||Me(!1);let t=x.useContext(Wl),{basename:e,future:n,navigator:s}=x.useContext(Wn),{matches:o}=x.useContext(Bn),{pathname:l}=ti(),u=JSON.stringify(ch(o,n.v7_relativeSplatPath)),f=x.useRef(!1);return ay(()=>{f.current=!0}),x.useCallback(function(g,_){if(_===void 0&&(_={}),!f.current)return;if(typeof g=="number"){s.go(g);return}let y=uh(g,JSON.parse(u),l,_.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:yr([e,y.pathname])),(_.replace?s.replace:s.push)(y,_.state,_)},[e,s,u,l,t])}function HS(){let{matches:t}=x.useContext(Bn),e=t[t.length-1];return e?e.params:{}}function Vl(t,e){let{relative:n}=e===void 0?{}:e,{future:s}=x.useContext(Wn),{matches:o}=x.useContext(Bn),{pathname:l}=ti(),u=JSON.stringify(ch(o,s.v7_relativeSplatPath));return x.useMemo(()=>uh(t,JSON.parse(u),l,n==="path"),[t,u,l,n])}function GS(t,e){return qS(t,e)}function qS(t,e,n,s){ts()||Me(!1);let{navigator:o}=x.useContext(Wn),{matches:l}=x.useContext(Bn),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let g=ti(),_;if(e){var y;let A=typeof e=="string"?es(e):e;p==="/"||(y=A.pathname)!=null&&y.startsWith(p)||Me(!1),_=A}else _=g;let w=_.pathname||"/",I=w;if(p!=="/"){let A=p.replace(/^\//,"").split("/");I="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=wS(t,{pathname:I}),b=XS(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:yr([p,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:yr([p,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),l,n,s);return e&&b?x.createElement(Bl.Provider,{value:{location:fo({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:gr.Pop}},b):b}function KS(){let t=nE(),e=WS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:o},n):null,null)}const YS=x.createElement(KS,null);class QS extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(Bn.Provider,{value:this.props.routeContext},x.createElement(oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JS(t){let{routeContext:e,match:n,children:s}=t,o=x.useContext(Wl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Bn.Provider,{value:e},s)}function XS(t,e,n,s){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),t==null){var l;if(!n)return null;if(n.errors)t=n.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let u=t,f=(o=n)==null?void 0:o.errors;if(f!=null){let _=u.findIndex(y=>y.route.id&&(f==null?void 0:f[y.route.id])!==void 0);_>=0||Me(!1),u=u.slice(0,Math.min(u.length,_+1))}let p=!1,g=-1;if(n&&s&&s.v7_partialHydration)for(let _=0;_<u.length;_++){let y=u[_];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=_),y.route.id){let{loaderData:w,errors:I}=n,N=y.route.loader&&w[y.route.id]===void 0&&(!I||I[y.route.id]===void 0);if(y.route.lazy||N){p=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((_,y,w)=>{let I,N=!1,b=null,A=null;n&&(I=f&&y.route.id?f[y.route.id]:void 0,b=y.route.errorElement||YS,p&&(g<0&&w===0?(iE("route-fallback"),N=!0,A=null):g===w&&(N=!0,A=y.route.hydrateFallbackElement||null)));let G=e.concat(u.slice(0,w+1)),K=()=>{let O;return I?O=b:N?O=A:y.route.Component?O=x.createElement(y.route.Component,null):y.route.element?O=y.route.element:O=_,x.createElement(JS,{match:y,routeContext:{outlet:_,matches:G,isDataRoute:n!=null},children:O})};return n&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?x.createElement(QS,{location:n.location,revalidation:n.revalidation,component:b,error:I,children:K(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):K()},null)}var ly=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(ly||{}),cy=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(cy||{});function ZS(t){let e=x.useContext(Wl);return e||Me(!1),e}function eE(t){let e=x.useContext(sy);return e||Me(!1),e}function tE(t){let e=x.useContext(Bn);return e||Me(!1),e}function uy(t){let e=tE(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function nE(){var t;let e=x.useContext(oy),n=eE(),s=uy();return e!==void 0?e:(t=n.errors)==null?void 0:t[s]}function rE(){let{router:t}=ZS(ly.UseNavigateStable),e=uy(cy.UseNavigateStable),n=x.useRef(!1);return ay(()=>{n.current=!0}),x.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,fo({fromRouteId:e},l)))},[t,e])}const xg={};function iE(t,e,n){xg[t]||(xg[t]=!0)}function sE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Pd(t){let{to:e,replace:n,state:s,relative:o}=t;ts()||Me(!1);let{future:l,static:u}=x.useContext(Wn),{matches:f}=x.useContext(Bn),{pathname:p}=ti(),g=ni(),_=uh(e,ch(f,l.v7_relativeSplatPath),p,o==="path"),y=JSON.stringify(_);return x.useEffect(()=>g(JSON.parse(y),{replace:n,state:s,relative:o}),[g,y,o,n,s]),null}function Vt(t){Me(!1)}function oE(t){let{basename:e="/",children:n=null,location:s,navigationType:o=gr.Pop,navigator:l,static:u=!1,future:f}=t;ts()&&Me(!1);let p=e.replace(/^\/*/,"/"),g=x.useMemo(()=>({basename:p,navigator:l,static:u,future:fo({v7_relativeSplatPath:!1},f)}),[p,f,l,u]);typeof s=="string"&&(s=es(s));let{pathname:_="/",search:y="",hash:w="",state:I=null,key:N="default"}=s,b=x.useMemo(()=>{let A=Hi(_,p);return A==null?null:{location:{pathname:A,search:y,hash:w,state:I,key:N},navigationType:o}},[p,_,y,w,I,N,o]);return b==null?null:x.createElement(Wn.Provider,{value:g},x.createElement(Bl.Provider,{children:n,value:b}))}function aE(t){let{children:e,location:n}=t;return GS(Rd(e),n)}new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(s,o)=>{if(!x.isValidElement(s))return;let l=[...e,o];if(s.type===x.Fragment){n.push.apply(n,Rd(s.props.children,l));return}s.type!==Vt&&Me(!1),!s.props.index||!s.props.children||Me(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Rd(s.props.children,l)),n.push(u)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},dl.apply(this,arguments)}function dy(t,e){if(t==null)return{};var n={},s=Object.keys(t),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function lE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cE(t,e){return t.button===0&&(!e||e==="_self")&&!lE(t)}function Ad(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let s=t[n];return e.concat(Array.isArray(s)?s.map(o=>[n,o]):[[n,s]])},[]))}function uE(t,e){let n=Ad(t);return e&&e.forEach((s,o)=>{n.has(o)||e.getAll(o).forEach(l=>{n.append(o,l)})}),n}const dE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hE=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],fE="6";try{window.__reactRouterVersion=fE}catch{}const pE=x.createContext({isTransitioning:!1}),mE="startTransition",Ig=uS[mE];function gE(t){let{basename:e,children:n,future:s,window:o}=t,l=x.useRef();l.current==null&&(l.current=vS({window:o,v5Compat:!0}));let u=l.current,[f,p]=x.useState({action:u.action,location:u.location}),{v7_startTransition:g}=s||{},_=x.useCallback(y=>{g&&Ig?Ig(()=>p(y)):p(y)},[p,g]);return x.useLayoutEffect(()=>u.listen(_),[u,_]),x.useEffect(()=>sE(s),[s]),x.createElement(oE,{basename:e,children:n,location:f.location,navigationType:f.action,navigator:u,future:s})}const vE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=x.forwardRef(function(e,n){let{onClick:s,relative:o,reloadDocument:l,replace:u,state:f,target:p,to:g,preventScrollReset:_,viewTransition:y}=e,w=dy(e,dE),{basename:I}=x.useContext(Wn),N,b=!1;if(typeof g=="string"&&yE.test(g)&&(N=g,vE))try{let O=new URL(window.location.href),j=g.startsWith("//")?new URL(O.protocol+g):new URL(g),J=Hi(j.pathname,I);j.origin===O.origin&&J!=null?g=J+j.search+j.hash:b=!0}catch{}let A=VS(g,{relative:o}),G=wE(g,{replace:u,state:f,target:p,preventScrollReset:_,relative:o,viewTransition:y});function K(O){s&&s(O),O.defaultPrevented||G(O)}return x.createElement("a",dl({},w,{href:N||A,onClick:b||l?s:K,ref:n,target:p}))}),Ja=x.forwardRef(function(e,n){let{"aria-current":s="page",caseSensitive:o=!1,className:l="",end:u=!1,style:f,to:p,viewTransition:g,children:_}=e,y=dy(e,hE),w=Vl(p,{relative:y.relative}),I=ti(),N=x.useContext(sy),{navigator:b,basename:A}=x.useContext(Wn),G=N!=null&&EE(w)&&g===!0,K=b.encodeLocation?b.encodeLocation(w).pathname:w.pathname,O=I.pathname,j=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;o||(O=O.toLowerCase(),j=j?j.toLowerCase():null,K=K.toLowerCase()),j&&A&&(j=Hi(j,A)||j);const J=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ie=O===K||!u&&O.startsWith(K)&&O.charAt(J)==="/",_e=j!=null&&(j===K||!u&&j.startsWith(K)&&j.charAt(K.length)==="/"),Ie={isActive:ie,isPending:_e,isTransitioning:G},Oe=ie?s:void 0,Fe;typeof l=="function"?Fe=l(Ie):Fe=[l,ie?"active":null,_e?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Dt=typeof f=="function"?f(Ie):f;return x.createElement(ue,dl({},y,{"aria-current":Oe,className:Fe,ref:n,style:Dt,to:p,viewTransition:g}),typeof _=="function"?_(Ie):_)});var bd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bd||(bd={}));var kg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));function _E(t){let e=x.useContext(Wl);return e||Me(!1),e}function wE(t,e){let{target:n,replace:s,state:o,preventScrollReset:l,relative:u,viewTransition:f}=e===void 0?{}:e,p=ni(),g=ti(),_=Vl(t,{relative:u});return x.useCallback(y=>{if(cE(y,n)){y.preventDefault();let w=s!==void 0?s:ul(g)===ul(_);p(t,{replace:w,state:o,preventScrollReset:l,relative:u,viewTransition:f})}},[g,p,_,s,o,n,t,l,u,f])}function SE(t){let e=x.useRef(Ad(t)),n=x.useRef(!1),s=ti(),o=x.useMemo(()=>uE(s.search,n.current?null:e.current),[s.search]),l=ni(),u=x.useCallback((f,p)=>{const g=Ad(typeof f=="function"?f(o):f);n.current=!0,l("?"+g,p)},[l,o]);return[o,u]}function EE(t,e){e===void 0&&(e={});let n=x.useContext(pE);n==null&&Me(!1);let{basename:s}=_E(bd.useViewTransitionState),o=Vl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Hi(n.currentLocation.pathname,s)||n.currentLocation.pathname,u=Hi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Nd(o.pathname,u)!=null||Nd(o.pathname,l)!=null}let CE={data:""},xE=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||CE},IE=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,kE=/\/\*[^]*?\*\/|  +/g,Tg=/\n+/g,dr=(t,e)=>{let n="",s="",o="";for(let l in t){let u=t[l];l[0]=="@"?l[1]=="i"?n=l+" "+u+";":s+=l[1]=="f"?dr(u,l):l+"{"+dr(u,l[1]=="k"?"":e)+"}":typeof u=="object"?s+=dr(u,e?e.replace(/([^,])+/g,f=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,f):f?f+" "+p:p)):l):u!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=dr.p?dr.p(l,u):l+":"+u+";")}return n+(e&&o?e+"{"+o+"}":o)+s},Pn={},hy=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+hy(t[n]);return e}return t},TE=(t,e,n,s,o)=>{let l=hy(t),u=Pn[l]||(Pn[l]=(p=>{let g=0,_=11;for(;g<p.length;)_=101*_+p.charCodeAt(g++)>>>0;return"go"+_})(l));if(!Pn[u]){let p=l!==t?t:(g=>{let _,y,w=[{}];for(;_=IE.exec(g.replace(kE,""));)_[4]?w.shift():_[3]?(y=_[3].replace(Tg," ").trim(),w.unshift(w[0][y]=w[0][y]||{})):w[0][_[1]]=_[2].replace(Tg," ").trim();return w[0]})(t);Pn[u]=dr(o?{["@keyframes "+u]:p}:p,n?"":"."+u)}let f=n&&Pn.g?Pn.g:null;return n&&(Pn.g=Pn[u]),((p,g,_,y)=>{y?g.data=g.data.replace(y,p):g.data.indexOf(p)===-1&&(g.data=_?p+g.data:g.data+p)})(Pn[u],e,s,f),u},NE=(t,e,n)=>t.reduce((s,o,l)=>{let u=e[l];if(u&&u.call){let f=u(n),p=f&&f.props&&f.props.className||/^go/.test(f)&&f;u=p?"."+p:f&&typeof f=="object"?f.props?"":dr(f,""):f===!1?"":f}return s+o+(u??"")},"");function $l(t){let e=this||{},n=t.call?t(e.p):t;return TE(n.unshift?n.raw?NE(n,[].slice.call(arguments,1),e.p):n.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):n,xE(e.target),e.g,e.o,e.k)}let fy,jd,Od;$l.bind({g:1});let Dn=$l.bind({k:1});function PE(t,e,n,s){dr.p=e,fy=t,jd=n,Od=s}function Tr(t,e){let n=this||{};return function(){let s=arguments;function o(l,u){let f=Object.assign({},l),p=f.className||o.className;n.p=Object.assign({theme:jd&&jd()},f),n.o=/ *go\d+/.test(p),f.className=$l.apply(n,s)+(p?" "+p:"");let g=t;return t[0]&&(g=f.as||t,delete f.as),Od&&g[0]&&Od(f),fy(g,f)}return o}}var RE=t=>typeof t=="function",hl=(t,e)=>RE(t)?t(e):t,AE=(()=>{let t=0;return()=>(++t).toString()})(),py=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),bE=20,dh="default",my=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(u=>u.id===e.toast.id?{...u,...e.toast}:u)};case 2:let{toast:s}=e;return my(t,{type:t.toasts.find(u=>u.id===s.id)?1:0,toast:s});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(u=>u.id===o||o===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(u=>u.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let l=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+l}))}}},rl=[],gy={toasts:[],pausedAt:void 0,settings:{toastLimit:bE}},mn={},vy=(t,e=dh)=>{mn[e]=my(mn[e]||gy,t),rl.forEach(([n,s])=>{n===e&&s(mn[e])})},yy=t=>Object.keys(mn).forEach(e=>vy(t,e)),jE=t=>Object.keys(mn).find(e=>mn[e].toasts.some(n=>n.id===t)),Hl=(t=dh)=>e=>{vy(e,t)},OE={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},LE=(t={},e=dh)=>{let[n,s]=x.useState(mn[e]||gy),o=x.useRef(mn[e]);x.useEffect(()=>(o.current!==mn[e]&&s(mn[e]),rl.push([e,s]),()=>{let u=rl.findIndex(([f])=>f===e);u>-1&&rl.splice(u,1)}),[e]);let l=n.toasts.map(u=>{var f,p,g;return{...t,...t[u.type],...u,removeDelay:u.removeDelay||((f=t[u.type])==null?void 0:f.removeDelay)||(t==null?void 0:t.removeDelay),duration:u.duration||((p=t[u.type])==null?void 0:p.duration)||(t==null?void 0:t.duration)||OE[u.type],style:{...t.style,...(g=t[u.type])==null?void 0:g.style,...u.style}}});return{...n,toasts:l}},DE=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||AE()}),No=t=>(e,n)=>{let s=DE(e,t,n);return Hl(s.toasterId||jE(s.id))({type:2,toast:s}),s.id},Ke=(t,e)=>No("blank")(t,e);Ke.error=No("error");Ke.success=No("success");Ke.loading=No("loading");Ke.custom=No("custom");Ke.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Hl(e)(n):yy(n)};Ke.dismissAll=t=>Ke.dismiss(void 0,t);Ke.remove=(t,e)=>{let n={type:4,toastId:t};e?Hl(e)(n):yy(n)};Ke.removeAll=t=>Ke.remove(void 0,t);Ke.promise=(t,e,n)=>{let s=Ke.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(o=>{let l=e.success?hl(e.success,o):void 0;return l?Ke.success(l,{id:s,...n,...n==null?void 0:n.success}):Ke.dismiss(s),o}).catch(o=>{let l=e.error?hl(e.error,o):void 0;l?Ke.error(l,{id:s,...n,...n==null?void 0:n.error}):Ke.dismiss(s)}),t};var ME=1e3,FE=(t,e="default")=>{let{toasts:n,pausedAt:s}=LE(t,e),o=x.useRef(new Map).current,l=x.useCallback((y,w=ME)=>{if(o.has(y))return;let I=setTimeout(()=>{o.delete(y),u({type:4,toastId:y})},w);o.set(y,I)},[]);x.useEffect(()=>{if(s)return;let y=Date.now(),w=n.map(I=>{if(I.duration===1/0)return;let N=(I.duration||0)+I.pauseDuration-(y-I.createdAt);if(N<0){I.visible&&Ke.dismiss(I.id);return}return setTimeout(()=>Ke.dismiss(I.id,e),N)});return()=>{w.forEach(I=>I&&clearTimeout(I))}},[n,s,e]);let u=x.useCallback(Hl(e),[e]),f=x.useCallback(()=>{u({type:5,time:Date.now()})},[u]),p=x.useCallback((y,w)=>{u({type:1,toast:{id:y,height:w}})},[u]),g=x.useCallback(()=>{s&&u({type:6,time:Date.now()})},[s,u]),_=x.useCallback((y,w)=>{let{reverseOrder:I=!1,gutter:N=8,defaultPosition:b}=w||{},A=n.filter(O=>(O.position||b)===(y.position||b)&&O.height),G=A.findIndex(O=>O.id===y.id),K=A.filter((O,j)=>j<G&&O.visible).length;return A.filter(O=>O.visible).slice(...I?[K+1]:[0,K]).reduce((O,j)=>O+(j.height||0)+N,0)},[n]);return x.useEffect(()=>{n.forEach(y=>{if(y.dismissed)l(y.id,y.removeDelay);else{let w=o.get(y.id);w&&(clearTimeout(w),o.delete(y.id))}})},[n,l]),{toasts:n,handlers:{updateHeight:p,startPause:f,endPause:g,calculateOffset:_}}},UE=Dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,zE=Dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,WE=Dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,BE=Tr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${UE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${zE} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${WE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,VE=Dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$E=Tr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${VE} 1s linear infinite;
`,HE=Dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,GE=Dn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,qE=Tr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${HE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${GE} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,KE=Tr("div")`
  position: absolute;
`,YE=Tr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,QE=Dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,JE=Tr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${QE} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,XE=({toast:t})=>{let{icon:e,type:n,iconTheme:s}=t;return e!==void 0?typeof e=="string"?x.createElement(JE,null,e):e:n==="blank"?null:x.createElement(YE,null,x.createElement($E,{...s}),n!=="loading"&&x.createElement(KE,null,n==="error"?x.createElement(BE,{...s}):x.createElement(qE,{...s})))},ZE=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,tC="0%{opacity:0;} 100%{opacity:1;}",nC="0%{opacity:1;} 100%{opacity:0;}",rC=Tr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,iC=Tr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,sC=(t,e)=>{let n=t.includes("top")?1:-1,[s,o]=py()?[tC,nC]:[ZE(n),eC(n)];return{animation:e?`${Dn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Dn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},oC=x.memo(({toast:t,position:e,style:n,children:s})=>{let o=t.height?sC(t.position||e||"top-center",t.visible):{opacity:0},l=x.createElement(XE,{toast:t}),u=x.createElement(iC,{...t.ariaProps},hl(t.message,t));return x.createElement(rC,{className:t.className,style:{...o,...n,...t.style}},typeof s=="function"?s({icon:l,message:u}):x.createElement(x.Fragment,null,l,u))});PE(x.createElement);var aC=({id:t,className:e,style:n,onHeightUpdate:s,children:o})=>{let l=x.useCallback(u=>{if(u){let f=()=>{let p=u.getBoundingClientRect().height;s(t,p)};f(),new MutationObserver(f).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return x.createElement("div",{ref:l,className:e,style:n},o)},lC=(t,e)=>{let n=t.includes("top"),s=n?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:py()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...s,...o}},cC=$l`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Xa=16,uC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:s,children:o,toasterId:l,containerStyle:u,containerClassName:f})=>{let{toasts:p,handlers:g}=FE(n,l);return x.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:Xa,left:Xa,right:Xa,bottom:Xa,pointerEvents:"none",...u},className:f,onMouseEnter:g.startPause,onMouseLeave:g.endPause},p.map(_=>{let y=_.position||e,w=g.calculateOffset(_,{reverseOrder:t,gutter:s,defaultPosition:e}),I=lC(y,w);return x.createElement(aC,{id:_.id,key:_.id,onHeightUpdate:g.updateHeight,className:_.visible?cC:"",style:I},_.type==="custom"?hl(_.message,_):o?o(_):x.createElement(oC,{toast:_,position:y}))}))},ke=Ke;const dC=()=>{};var Ng={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw ns(e)},ns=function(t){return new Error("Firebase Database ("+_y.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},hC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const o=t[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],u=t[n++],f=t[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],u=t[n++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,f=u?t[o+1]:0,p=o+2<t.length,g=p?t[o+2]:0,_=l>>2,y=(l&3)<<4|f>>4;let w=(f&15)<<2|g>>6,I=g&63;p||(I=64,u||(w=64)),s.push(n[_],n[y],n[w],n[I])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],f=o<t.length?n[t.charAt(o)]:0;++o;const g=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||f==null||g==null||y==null)throw new fC;const w=l<<2|f>>4;if(s.push(w),g!==64){const I=f<<4&240|g>>2;if(s.push(I),y!==64){const N=g<<6&192|y;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sy=function(t){const e=wy(t);return hh.encodeByteArray(e,!0)},fl=function(t){return Sy(t).replace(/\./g,"")},pl=function(t){try{return hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){return Ey(void 0,t)}function Ey(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mC(n)||(t[n]=Ey(t[n],e[n]));return t}function mC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=()=>gC().__FIREBASE_DEFAULTS__,yC=()=>{if(typeof process>"u"||typeof Ng>"u")return;const t=Ng.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_C=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pl(t[1]);return e&&JSON.parse(e)},fh=()=>{try{return dC()||vC()||yC()||_C()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cy=t=>{var e,n;return(n=(e=fh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wC=t=>{const e=Cy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xy=()=>{var t;return(t=fh())===null||t===void 0?void 0:t.config},Iy=t=>{var e;return(e=fh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ky(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(u)),""].join(".")}const ro={};function EC(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function CC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Pg=!1;function Ty(t,e){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||ro[t]===e||ro[t]||Pg)return;ro[t]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=EC().prod.length>0;function u(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Pg=!0,u()},w}function _(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=CC(s),I=n("text"),N=document.getElementById(I)||document.createElement("span"),b=n("learnmore"),A=document.getElementById(b)||document.createElement("a"),G=n("preprendIcon"),K=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const O=w.element;f(O),_(A,b);const j=g();p(K,G),O.append(K,N,A,j),document.body.appendChild(O)}l?(N.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ph(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function xC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ny(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IC(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kC(){return _y.NODE_ADMIN===!0}function Ry(){try{return typeof indexedDB=="object"}catch{return!1}}function Ay(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}function TC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FirebaseError";class _n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=NC,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?PC(l,s):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new _n(o,f,s)}}function PC(t,e){return t.replace(RC,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const RC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=function(t){let e={},n={},s={},o="";try{const l=t.split(".");e=po(pl(l[0])||""),n=po(pl(l[1])||""),o=l[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},AC=function(t){const e=by(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bC=function(t){const e=by(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ld(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ml(t,e,n){const s={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=e.call(n,t[o],o,t));return s}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const l=t[o],u=e[o];if(Rg(l)&&Rg(u)){if(!Cr(l,u))return!1}else if(l!==u)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Rg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const w=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,_;for(let y=0;y<80;y++){y<40?y<20?(g=f^l&(u^f),_=1518500249):(g=l^u^f,_=1859775393):y<60?(g=l&u|f&(l|u),_=2400959708):(g=l^u^f,_=3395469782);const w=(o<<5|o>>>27)+g+p+_+s[y]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(l[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=e[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function OC(t,e){const n=new LC(t,e);return n.subscribe.bind(n)}class LC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");DC(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=ld),o.error===void 0&&(o.error=ld),o.complete===void 0&&(o.complete=ld);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ld(){}function Gl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,W(s<t.length,"Surrogate pair missing trail surrogate.");const u=t.charCodeAt(s)-56320;o=65536+(l<<10)+u}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},ql=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=1e3,UC=2,zC=14400*1e3,WC=.5;function Ag(t,e=FC,n=UC){const s=e*Math.pow(n,t),o=Math.round(WC*s*(Math.random()-.5)*2);return Math.min(zC,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Po;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($C(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&u.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&e(u,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:VC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VC(t){return t===$r?void 0:t}function $C(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const GC={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},qC=Ce.INFO,KC={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},YC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=KC[e];if(o)console[o](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=qC,this._logHandler=YC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const QC=(t,e)=>e.some(n=>t instanceof n);let bg,jg;function JC(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XC(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jy=new WeakMap,Dd=new WeakMap,Oy=new WeakMap,cd=new WeakMap,mh=new WeakMap;function ZC(t){const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",u)},l=()=>{n(_r(t.result)),o()},u=()=>{s(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&jy.set(n,t)}).catch(()=>{}),mh.set(e,t),e}function ex(t){if(Dd.has(t))return;const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",u),t.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",u),t.addEventListener("abort",u)});Dd.set(t,e)}let Md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tx(t){Md=t(Md)}function nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ud(this),e,...n);return Oy.set(s,e.sort?e.sort():[e]),_r(s)}:XC().includes(t)?function(...e){return t.apply(ud(this),e),_r(jy.get(this))}:function(...e){return _r(t.apply(ud(this),e))}}function rx(t){return typeof t=="function"?nx(t):(t instanceof IDBTransaction&&ex(t),QC(t,JC())?new Proxy(t,Md):t)}function _r(t){if(t instanceof IDBRequest)return ZC(t);if(cd.has(t))return cd.get(t);const e=rx(t);return e!==t&&(cd.set(t,e),mh.set(e,t)),e}const ud=t=>mh.get(t);function Ly(t,e,{blocked:n,upgrade:s,blocking:o,terminated:l}={}){const u=indexedDB.open(t,e),f=_r(u);return s&&u.addEventListener("upgradeneeded",p=>{s(_r(u.result),p.oldVersion,p.newVersion,_r(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const ix=["get","getKey","getAll","getAllKeys","count"],sx=["put","add","delete","clear"],dd=new Map;function Og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=sx.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ix.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),o&&p.done]))[0]};return dd.set(e,l),l}tx(t=>({...t,get:(e,n,s)=>Og(e,n)||t.get(e,n,s),has:(e,n)=>!!Og(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ax(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ax(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fd="@firebase/app",Lg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Kl("@firebase/app"),lx="@firebase/app-compat",cx="@firebase/analytics-compat",ux="@firebase/analytics",dx="@firebase/app-check-compat",hx="@firebase/app-check",fx="@firebase/auth",px="@firebase/auth-compat",mx="@firebase/database",gx="@firebase/data-connect",vx="@firebase/database-compat",yx="@firebase/functions",_x="@firebase/functions-compat",wx="@firebase/installations",Sx="@firebase/installations-compat",Ex="@firebase/messaging",Cx="@firebase/messaging-compat",xx="@firebase/performance",Ix="@firebase/performance-compat",kx="@firebase/remote-config",Tx="@firebase/remote-config-compat",Nx="@firebase/storage",Px="@firebase/storage-compat",Rx="@firebase/firestore",Ax="@firebase/ai",bx="@firebase/firestore-compat",jx="firebase",Ox="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="[DEFAULT]",Lx={[Fd]:"fire-core",[lx]:"fire-core-compat",[ux]:"fire-analytics",[cx]:"fire-analytics-compat",[hx]:"fire-app-check",[dx]:"fire-app-check-compat",[fx]:"fire-auth",[px]:"fire-auth-compat",[mx]:"fire-rtdb",[gx]:"fire-data-connect",[vx]:"fire-rtdb-compat",[yx]:"fire-fn",[_x]:"fire-fn-compat",[wx]:"fire-iid",[Sx]:"fire-iid-compat",[Ex]:"fire-fcm",[Cx]:"fire-fcm-compat",[xx]:"fire-perf",[Ix]:"fire-perf-compat",[kx]:"fire-rc",[Tx]:"fire-rc-compat",[Nx]:"fire-gcs",[Px]:"fire-gcs-compat",[Rx]:"fire-fst",[bx]:"fire-fst-compat",[Ax]:"fire-vertex","fire-js":"fire-js",[jx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map,Dx=new Map,zd=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(zd.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;zd.set(e,t);for(const n of gl.values())Dg(n,t);for(const n of Dx.values())Dg(n,t);return!0}function ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new ri("app","Firebase",Mx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=Ox;function Dy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ud,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw wr.create("bad-app-name",{appName:String(o)});if(n||(n=xy()),!n)throw wr.create("no-options");const l=gl.get(o);if(l){if(Cr(n,l.options)&&Cr(s,l.config))return l;throw wr.create("duplicate-app",{appName:o})}const u=new HC(o);for(const p of zd.values())u.addComponent(p);const f=new Fx(n,s,u);return gl.set(o,f),f}function gh(t=Ud){const e=gl.get(t);if(!e&&t===Ud&&xy())return Dy();if(!e)throw wr.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let o=(s=Lx[t])!==null&&s!==void 0?s:t;n&&(o+=`-${n}`);const l=o.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(f.join(" "));return}yn(new on(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="firebase-heartbeat-database",zx=1,mo="firebase-heartbeat-store";let hd=null;function My(){return hd||(hd=Ly(Ux,zx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),hd}async function Wx(t){try{const n=(await My()).transaction(mo),s=await n.objectStore(mo).get(Fy(t));return await n.done,s}catch(e){if(e instanceof _n)Mn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function Mg(t,e){try{const s=(await My()).transaction(mo,"readwrite");await s.objectStore(mo).put(e,Fy(t)),await s.done}catch(n){if(n instanceof _n)Mn.warn(n.message);else{const s=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(s.message)}}}function Fy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=1024,Vx=30;class $x{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gx(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Fg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Vx){const u=qx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Mn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:s,unsentEntries:o}=Hx(this._heartbeatsCache.heartbeats),l=fl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Mn.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function Hx(t,e=Bx){const n=[];let s=t.slice();for(const o of t){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),Ug(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ug(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ry()?Ay().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}function qx(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){yn(new on("platform-logger",e=>new ox(e),"PRIVATE")),yn(new on("heartbeat",e=>new $x(e),"PRIVATE")),Gt(Fd,Lg,t),Gt(Fd,Lg,"esm2017"),Gt("fire-js","")}Kx("");function vh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(t);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(n[s[o]]=t[s[o]]);return n}function Uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yx=Uy,zy=new ri("auth","Firebase",Uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Kl("@firebase/auth");function Qx(t,...e){vl.logLevel<=Ce.WARN&&vl.warn(`Auth (${ss}): ${t}`,...e)}function il(t,...e){vl.logLevel<=Ce.ERROR&&vl.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw yh(t,...e)}function gn(t,...e){return yh(t,...e)}function Wy(t,e,n){const s=Object.assign(Object.assign({},Yx()),{[e]:n});return new ri("auth","Firebase",s).create(e,{appName:t.name})}function On(t){return Wy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zy.create(t,...e)}function te(t,e,...n){if(!t)throw yh(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function Fn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jx(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jx()||Ny()||"connection"in navigator)?navigator.onLine:!0}function Zx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=ph()||Py()}get(){return Xx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nI=new Ro(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vn(t,e,n,s,o={}){return Vy(t,o,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const f=is(Object.assign({key:t.config.apiKey},u)).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g=Object.assign({method:e,headers:p},l);return xC()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&rs(t.emulatorConfig.host)&&(g.credentials="include"),By.fetch()(await $y(t,t.config.apiHost,n,f),g)})}async function Vy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},eI),e);try{const o=new iI(t),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Za(t,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",u);if(p==="USER_DISABLED")throw Za(t,"user-disabled",u);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Wy(t,_,g);an(t,_)}}catch(o){if(o instanceof _n)throw o;an(t,"network-request-failed",{message:String(o)})}}async function Ao(t,e,n,s,o={}){const l=await Vn(t,e,n,s,o);return"mfaPendingCredential"in l&&an(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function $y(t,e,n,s){const o=`${e}${n}?${s}`,l=t,u=l.config.emulator?_h(t.config,o):`${t.config.apiScheme}://${o}`;return tI.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function rI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),nI.get())})}}function Za(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=gn(t,e,s);return o.customData._tokenResponse=n,o}function Wg(t){return t!==void 0&&t.enterprise!==void 0}class sI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oI(t,e){return Vn(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){return Vn(t,"POST","/v1/accounts:delete",e)}async function yl(t,e){return Vn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lI(t,e=!1){const n=Je(t),s=await n.getIdToken(e),o=wh(s);te(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:io(fd(o.auth_time)),issuedAtTime:io(fd(o.iat)),expirationTime:io(fd(o.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function fd(t){return Number(t)*1e3}function wh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const o=pl(n);return o?JSON.parse(o):(il("Failed to decode base64 JWT payload"),null)}catch(o){return il("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Bg(t){const e=wh(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof _n&&cI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function cI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var e;const n=t.auth,s=await t.getIdToken(),o=await qi(t,yl(n,{idToken:s}));te(o==null?void 0:o.users.length,n,"internal-error");const l=o.users[0];t._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Hy(l.providerUserInfo):[],f=hI(t.providerData,u),p=t.isAnonymous,g=!(t.email&&l.passwordHash)&&!(f!=null&&f.length),_=p?g:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Bd(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(t,y)}async function dI(t){const e=Je(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hI(t,e){return[...t.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Hy(t){return t.map(e=>{var{providerId:n}=e,s=vh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e){const n=await Vy(t,{},async()=>{const s=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,u=await $y(t,o,"/v1/token",`key=${l}`),f=await t._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return t.emulatorConfig&&rs(t.emulatorConfig.host)&&(p.credentials="include"),By.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pI(t,e){return Vn(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:l}=await fI(e,n);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:l}=n,u=new zi;return s&&(te(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),o&&(te(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(te(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,l=vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Bd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await qi(this,aI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,l,u,f,p,g,_;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(o=n.email)!==null&&o!==void 0?o:void 0,I=(l=n.phoneNumber)!==null&&l!==void 0?l:void 0,N=(u=n.photoURL)!==null&&u!==void 0?u:void 0,b=(f=n.tenantId)!==null&&f!==void 0?f:void 0,A=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,G=(g=n.createdAt)!==null&&g!==void 0?g:void 0,K=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:O,emailVerified:j,isAnonymous:J,providerData:ie,stsTokenManager:_e}=n;te(O&&_e,e,"internal-error");const Ie=zi.fromJSON(this.name,_e);te(typeof O=="string",e,"internal-error"),ur(y,e.name),ur(w,e.name),te(typeof j=="boolean",e,"internal-error"),te(typeof J=="boolean",e,"internal-error"),ur(I,e.name),ur(N,e.name),ur(b,e.name),ur(A,e.name),ur(G,e.name),ur(K,e.name);const Oe=new nn({uid:O,auth:e,email:w,emailVerified:j,displayName:y,isAnonymous:J,photoURL:N,phoneNumber:I,tenantId:b,stsTokenManager:Ie,createdAt:G,lastLoginAt:K});return ie&&Array.isArray(ie)&&(Oe.providerData=ie.map(Fe=>Object.assign({},Fe))),A&&(Oe._redirectEventId=A),Oe}static async _fromIdTokenResponse(e,n,s=!1){const o=new zi;o.updateFromServerResponse(n);const l=new nn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await _l(l),l}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];te(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Hy(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new zi;f.updateFromIdToken(s);const p=new nn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Map;function An(t){Fn(t instanceof Function,"Expected a class definition");let e=Vg.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gy.type="NONE";const $g=Gy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=sl(this.userKey,o.apiKey,l),this.fullPersistenceKey=sl("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yl(this.auth,{idToken:e}).catch(()=>{});return n?nn._fromGetAccountInfoResponse(this.auth,n,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wi(An($g),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=o[0]||An($g);const u=sl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const _=await g._get(u);if(_){let y;if(typeof _=="string"){const w=await yl(e,{idToken:_}).catch(()=>{});if(!w)break;y=await nn._fromGetAccountInfoResponse(e,w,_)}else y=nn._fromJSON(e,_);g!==l&&(f=y),l=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Wi(l,e,s):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new Wi(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Zy(e))return"Webos";if(Ky(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qy(t=_t()){return/firefox\//i.test(t)}function Ky(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(t=_t()){return/crios\//i.test(t)}function Qy(t=_t()){return/iemobile/i.test(t)}function Jy(t=_t()){return/android/i.test(t)}function Xy(t=_t()){return/blackberry/i.test(t)}function Zy(t=_t()){return/webos/i.test(t)}function Sh(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mI(t=_t()){var e;return Sh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gI(){return IC()&&document.documentMode===10}function e_(t=_t()){return Sh(t)||Jy(t)||Zy(t)||Xy(t)||/windows phone/i.test(t)||Qy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=Hg(_t());break;case"Worker":n=`${Hg(_t())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((u,f)=>{try{const p=e(l);u(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e={}){return Vn(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=6;class wI{constructor(e){var n,s,o,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:_I,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,l,u,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new vI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yl(this,{idToken:e}),s=await nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($t(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(On(this));const n=e?Je(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yI(this),n=new wI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await pI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{u=!0,p()}}else{const p=e.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Qx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return Je(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=OC(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EI(t){Yl=t}function n_(t){return Yl.loadJS(t)}function CI(){return Yl.recaptchaEnterpriseScript}function xI(){return Yl.gapiScript}function II(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kI{constructor(){this.enterprise=new TI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const NI="recaptcha-enterprise",r_="NO_RECAPTCHA";class PI{constructor(e){this.type=NI,this.auth=si(e)}async verify(e="verify",n=!1){async function s(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{oI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new sI(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(p=>{f(p)})})}function o(l,u,f){const p=window.grecaptcha;Wg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(r_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kI().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{s(this.auth).then(f=>{if(!n&&Wg(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=CI();p.length!==0&&(p+=f),n_(p).then(()=>{o(f,l,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function qg(t,e,n,s=!1,o=!1){const l=new PI(t);let u;if(o)u=r_;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Vd(t,e,n,s,o){var l;if(!((l=t._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await qg(t,e,n,n==="getOobCode");return s(t,u)}else return s(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await qg(t,e,n,n==="getOobCode");return s(t,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){const n=ii(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(Cr(l,e??{}))return o;an(o,"already-initialized")}return n.initialize({options:e})}function AI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bI(t,e,n){const s=si(t);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=i_(e),{host:u,port:f}=jI(e),p=f===null?"":`:${f}`,g={url:`${l}//${u}${p}/`},_=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(Cr(g,s.config.emulator)&&Cr(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,rs(u)?(ky(`${l}//${u}${p}`),Ty("Auth",!0)):OI()}function i_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jI(t){const e=i_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Kg(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:Kg(u)}}}function Kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function LI(t,e){return Vn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function FI(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Eh{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new go(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,n,"signInWithPassword",DI);case"emailLink":return MI(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,s,"signUpPassword",LI);case"emailLink":return FI(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="http://localhost";class Kr extends Eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,l=vh(n,["providerId","signInMethod"]);if(!s||!o)return null;const u=new Kr(s,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Bi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=is(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WI(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,s=eo(to(t)).deep_link_id;return(s?eo(to(s)).link:null)||s||n||e||t}class Ch{constructor(e){var n,s,o,l,u,f;const p=eo(to(e)),g=(n=p.apiKey)!==null&&n!==void 0?n:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,y=zI((o=p.mode)!==null&&o!==void 0?o:null);te(g&&_&&y,"argument-error"),this.apiKey=g,this.operation=y,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=WI(e);try{return new Ch(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ch.parseLink(n);return te(s,"argument-error"),go._fromEmailAndCode(e,s.code,s.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends s_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends bo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fr.credential(n,s)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends bo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends bo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mr.credential(n,s)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e){return Ao(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const l=await nn._fromIdTokenResponse(e,s,o),u=Yg(s);return new Yr({user:l,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Yg(s);return new Yr({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends _n{constructor(e,n,s,o){var l;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new wl(e,n,s,o)}}function o_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(t,l,e,s):l})}async function VI(t,e,n=!1){const s=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e,n=!1){const{auth:s}=t;if($t(s.app))return Promise.reject(On(s));const o="reauthenticate";try{const l=await qi(t,o_(s,o,e,t),n);te(l.idToken,s,"internal-error");const u=wh(l.idToken);te(u,s,"internal-error");const{sub:f}=u;return te(t.uid===f,s,"user-mismatch"),Yr._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&an(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(t,e,n=!1){if($t(t.app))return Promise.reject(On(t));const s="signIn",o=await o_(t,s,e),l=await Yr._fromIdTokenResponse(t,s,o);return n||await t._updateCurrentUser(l.user),l}async function HI(t,e){return a_(si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GI(t,e,n){if($t(t.app))return Promise.reject(On(t));const s=si(t),u=await Vd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BI).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&l_(t),p}),f=await Yr._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(f.user),f}function qI(t,e,n){return $t(t.app)?Promise.reject(On(t)):HI(Je(t),os.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&l_(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e){return Vn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Je(t),l={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},u=await qi(s,KI(s.auth,l));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function QI(t,e,n,s){return Je(t).onIdTokenChanged(e,n,s)}function JI(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function XI(t,e,n,s){return Je(t).onAuthStateChanged(e,n,s)}function ZI(t){return Je(t).signOut()}const Sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1e3,tk=10;class u_ extends c_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);gI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,tk):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u_.type="LOCAL";const nk=u_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends c_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d_.type="SESSION";const h_=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Ql(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(u).map(async g=>g(n.origin,l)),p=await rk(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const g=xh("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:o,onMessage(y){const w=y;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(w.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function sk(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ak(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lk(){return f_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="firebaseLocalStorageDb",ck=1,El="firebaseLocalStorage",m_="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(t,e){return t.transaction([El],e?"readwrite":"readonly").objectStore(El)}function uk(){const t=indexedDB.deleteDatabase(p_);return new jo(t).toPromise()}function $d(){const t=indexedDB.open(p_,ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(El,{keyPath:m_})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(El)?e(s):(s.close(),await uk(),e(await $d()))})})}async function Qg(t,e,n){const s=Jl(t,!0).put({[m_]:e,value:n});return new jo(s).toPromise()}async function dk(t,e){const n=Jl(t,!1).get(e),s=await new jo(n).toPromise();return s===void 0?null:s.value}function Jg(t,e){const n=Jl(t,!0).delete(e);return new jo(n).toPromise()}const hk=800,fk=3;class g_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>fk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ql._getInstance(lk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ok(),!this.activeServiceWorker)return;this.sender=new ik(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await Qg(e,Sl,"1"),await Jg(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Jl(o,!1).getAll();return new jo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g_.type="LOCAL";const pk=g_;new Ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return e?An(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends Eh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gk(t){return a_(t.auth,new Ih(t),t.bypassAuthState)}function vk(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),$I(n,new Ih(t),t.bypassAuthState)}async function yk(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),VI(n,new Ih(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:l,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return vk;default:an(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new Ro(2e3,1e4);class Fi extends v_{constructor(e,n,s,o,l){super(e,n,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_k.get())};e()}}Fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="pendingRedirect",ol=new Map;class Sk extends v_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const s=await Ek(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ek(t,e){const n=Ik(e),s=xk(t);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function Ck(t,e){ol.set(t._key(),e)}function xk(t){return An(t._redirectPersistence)}function Ik(t){return sl(wk,t.config.apiKey,t.name)}async function kk(t,e,n=!1){if($t(t.app))return Promise.reject(On(t));const s=si(t),o=mk(s,e),u=await new Sk(s,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=600*1e3;class Nk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!y_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e={}){return Vn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rk(t);for(const n of e)try{if(Ok(n))return}catch{}an(t,"unauthorized-domain")}function Ok(t){const e=Wd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!bk.test(n))return!1;if(Ak.test(t))return s===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new Ro(3e4,6e4);function Zg(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dk(t){return new Promise((e,n)=>{var s,o,l;function u(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(gn(t,"network-request-failed"))},timeout:Lk.get()})}if(!((o=(s=vn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=vn().gapi)===null||l===void 0)&&l.load)u();else{const f=II("iframefcb");return vn()[f]=()=>{gapi.load?u():n(gn(t,"network-request-failed"))},n_(`${xI()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw al=null,e})}let al=null;function Mk(t){return al=al||Dk(t),al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new Ro(5e3,15e3),Uk="__/auth/iframe",zk="emulator/auth/iframe",Wk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_h(e,zk):`https://${t.config.authDomain}/${Uk}`,s={apiKey:e.apiKey,appName:t.name,v:ss},o=Bk.get(t.config.apiHost);o&&(s.eid=o);const l=t._getFrameworks();return l.length&&(s.fw=l.join(",")),`${n}?${is(s).slice(1)}`}async function $k(t){const e=await Mk(t),n=vn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:Vk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wk,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const u=gn(t,"network-request-failed"),f=vn().setTimeout(()=>{l(u)},Fk.get());function p(){vn().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gk=500,qk=600,Kk="_blank",Yk="http://localhost";class ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qk(t,e,n,s=Gk,o=qk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},Hk),{width:s.toString(),height:o.toString(),top:l,left:u}),g=_t().toLowerCase();n&&(f=Yy(g)?Kk:n),qy(g)&&(e=e||Yk,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[I,N])=>`${w}${I}=${N},`,"");if(mI(g)&&f!=="_self")return Jk(e||"",f),new ev(null);const y=window.open(e||"",f,_);te(y,t,"popup-blocked");try{y.focus()}catch{}return new ev(y)}function Jk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="__/auth/handler",Zk="emulator/auth/handler",eT=encodeURIComponent("fac");async function tv(t,e,n,s,o,l){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ss,eventId:o};if(e instanceof s_){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",Ld(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries({}))u[_]=y}if(e instanceof bo){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(u.scopes=_.join(","))}t.tenantId&&(u.tid=t.tenantId);const f=u;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await t._getAppCheckToken(),g=p?`#${eT}=${encodeURIComponent(p)}`:"";return`${tT(t)}?${is(f).slice(1)}${g}`}function tT({config:t}){return t.emulator?_h(t,Zk):`https://${t.authDomain}/${Xk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="webStorageSupport";class nT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h_,this._completeRedirectFn=kk,this._overrideRedirectResult=Ck}async _openPopup(e,n,s,o){var l;Fn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await tv(e,n,s,Wd(),o);return Qk(e,u,xh())}async _openRedirect(e,n,s,o){await this._originValidation(e);const l=await tv(e,n,s,Wd(),o);return sk(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(Fn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $k(e),s=new Nk(e);return n.register("authEvent",o=>(te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pd,{type:pd},o=>{var l;const u=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[pd];u!==void 0&&n(!!u),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Ky()||Sh()}}const rT=nT;var nv="@firebase/auth",rv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oT(t){yn(new on("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;te(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},g=new SI(s,o,l,p);return AI(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yn(new on("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(s=>new iT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(nv,rv,sT(t)),Gt(nv,rv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=300,lT=Iy("authIdTokenMaxAge")||aT;let iv=null;const cT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>lT)return;const o=n==null?void 0:n.token;iv!==o&&(iv=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function uT(t=gh()){const e=ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RI(t,{popupRedirectResolver:rT,persistence:[pk,nk,h_]}),s=Iy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=cT(l.toString());JI(n,u,()=>u(n.currentUser)),QI(n,f=>u(f))}}const o=Cy("auth");return o&&bI(n,`http://${o}`),n}function dT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=o=>{const l=gn("internal-error");l.customData=o,n(l)},s.type="text/javascript",s.charset="UTF-8",dT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oT("Browser");var sv={};const ov="@firebase/database",av="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __="";function hT(t){__=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fT(e)}}catch{}return new pT},Gr=w_("localStorage"),mT=w_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Kl("@firebase/database"),gT=(function(){let t=1;return function(){return t++}})(),S_=function(t){const e=MC(t),n=new jC;n.update(e);const s=n.digest();return hh.encodeByteArray(s)},Oo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Oo.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let so=null,lv=!0;const vT=function(t,e){W(!0,"Can't turn on custom loggers persistently."),Vi.logLevel=Ce.VERBOSE,so=Vi.log.bind(Vi)},st=function(...t){if(lv===!0&&(lv=!1,so===null&&mT.get("logging_enabled")===!0&&vT()),so){const e=Oo.apply(null,t);so(e)}},Lo=function(t){return function(...e){st(t,...e)}},Hd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oo(...t);Vi.error(e)},Un=function(...t){const e=`FIREBASE FATAL ERROR: ${Oo(...t)}`;throw Vi.error(e),new Error(e)},yt=function(...t){const e="FIREBASE WARNING: "+Oo(...t);Vi.warn(e)},yT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_T=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ki="[MIN_NAME]",Qr="[MAX_NAME]",oi=function(t,e){if(t===e)return 0;if(t===Ki||e===Qr)return-1;if(e===Ki||t===Qr)return 1;{const n=cv(t),s=cv(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},wT=function(t,e){return t===e?0:t<e?-1:1},Qs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},Th=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=Th(t[e[s]]);return n+="}",n},E_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(t.substring(o,n)):s.push(t.substring(o,o+e));return s};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const C_=function(t){W(!kh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,l,u,f,p;t===0?(l=0,u=0,o=1/t===-1/0?1:0):(o=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(t)/Math.LN2),s),l=f+s,u=Math.round(t*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(t/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(o?1:0),g.reverse();const _=g.join("");let y="";for(p=0;p<64;p+=8){let w=parseInt(_.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),y=y+w}return y.toLowerCase()},ST=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ET=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const xT=new RegExp("^-?(0*)\\d{1,10}$"),IT=-2147483648,kT=2147483647,cv=function(t){if(xT.test(t)){const e=Number(t);if(e>=IT&&e<=kT)return e}return null},as=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},TT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,$t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class ll{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ll.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="5",x_="v",I_="s",k_="r",T_="f",N_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P_="ls",R_="p",Gd="ac",A_="websocket",b_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,s,o,l=!1,u="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function O_(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let s;if(e===A_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===b_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RT(t)&&(n.ns=t.namespace);const o=[];return ot(n,(l,u)=>{o.push(l+"="+u)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.counters_={}}incrementCounter(e,n=1){wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md={},gd={};function Ph(t){const e=t.toString();return md[e]||(md[e]=new AT),md[e]}function bT(t,e){const n=t.toString();return gd[n]||(gd[n]=e()),gd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&as(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="start",OT="close",LT="pLPCommand",DT="pRTLPCB",L_="id",D_="pw",M_="ser",MT="cb",FT="seg",UT="ts",zT="d",WT="dframe",F_=1870,U_=30,BT=F_-U_,VT=25e3,$T=3e4;class Ui{constructor(e,n,s,o,l,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lo(e),this.stats_=Ph(n),this.urlFn=p=>(this.appCheckToken&&(p[Gd]=this.appCheckToken),O_(n,b_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($T)),_T(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rh((...l)=>{const[u,f,p,g,_]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===uv)this.id=f,this.password=p;else if(u===OT)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[uv]="t",s[M_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[MT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[x_]=Nh,this.transportSessionId&&(s[I_]=this.transportSessionId),this.lastSessionId&&(s[P_]=this.lastSessionId),this.applicationId&&(s[R_]=this.applicationId),this.appCheckToken&&(s[Gd]=this.appCheckToken),typeof location<"u"&&location.hostname&&N_.test(location.hostname)&&(s[k_]=T_);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ST()&&!ET()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Sy(n),o=E_(s,BT);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[WT]="t",s[L_]=e,s[D_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rh{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gT(),window[LT+this.uniqueCallbackIdentifier]=e,window[DT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){st("frame writing exception"),f.stack&&st(f.stack),st(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[L_]=this.myID,e[D_]=this.myPW,e[M_]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U_+s.length<=F_;){const u=this.pendingSegs.shift();s=s+"&"+FT+o+"="+u.seg+"&"+UT+o+"="+u.ts+"&"+zT+o+"="+u.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(VT)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=16384,GT=45e3;let Cl=null;typeof MozWebSocket<"u"?Cl=MozWebSocket:typeof WebSocket<"u"&&(Cl=WebSocket);class tn{constructor(e,n,s,o,l,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lo(this.connId),this.stats_=Ph(n),this.connURL=tn.connectionURL_(n,u,f,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,l){const u={};return u[x_]=Nh,typeof location<"u"&&location.hostname&&N_.test(location.hostname)&&(u[k_]=T_),n&&(u[I_]=n),s&&(u[P_]=s),o&&(u[Gd]=o),l&&(u[R_]=l),O_(e,A_,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gr.set("previous_websocket_failure",!0);try{let s;kC(),this.mySock=new Cl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cl!==null&&!tn.forceDisallow_}static previouslyFailed(){return Gr.isInMemoryStorage||Gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=po(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=E_(n,HT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static get ALL_TRANSPORTS(){return[Ui,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=tn&&tn.isAvailable();let s=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tn];else{const o=this.transports_=[];for(const l of vo.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);vo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=6e4,KT=5e3,YT=10*1024,QT=100*1024,vd="t",dv="d",JT="s",hv="r",XT="e",fv="o",pv="a",mv="n",gv="p",ZT="h";class eN{constructor(e,n,s,o,l,u,f,p,g,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lo("c:"+this.id+":"),this.transportManager_=new vo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vd in e){const n=e[vd];n===pv?this.upgradeIfSecondaryHealthy_():n===hv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qs("t",e),s=Qs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qs("t",e),s=Qs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qs(vd,e);if(dv in e){const s=e[dv];if(n===ZT){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===mv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JT?this.onConnectionShutdown_(s):n===hv?this.onReset_(s):n===XT?Hd("Server Error: "+s):n===fv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nh!==s&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends W_{static getInstance(){return new xl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ph()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=32,yv=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new xe("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xr(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function Ah(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function B_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new xe(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=de(t),s=de(e);if(n===null)return e;if(n===s)return vt(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nN(t,e){const n=yo(t,0),s=yo(e,0);for(let o=0;o<n.length&&o<s.length;o++){const l=oi(n[o],s[o]);if(l!==0)return l}return n.length===s.length?0:n.length<s.length?-1:1}function V_(t,e){if(xr(t)!==xr(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ht(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xr(t)>xr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rN{constructor(e,n){this.errorPrefix_=n,this.parts_=yo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ql(this.parts_[s]);$_(this)}}function iN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ql(e),$_(t)}function sN(t){const e=t.parts_.pop();t.byteLength_-=ql(e),t.parts_.length>0&&(t.byteLength_-=1)}function $_(t){if(t.byteLength_>yv)throw new Error(t.errorPrefix_+"has a key path longer than "+yv+" bytes ("+t.byteLength_+").");if(t.parts_.length>vv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vv+") or object contains a cycle "+Hr(t))}function Hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends W_{static getInstance(){return new bh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=1e3,oN=300*1e3,_v=30*1e3,aN=1.3,lN=3e4,cN="server_kill",wv=3;class Ln extends z_{constructor(e,n,s,o,l,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Ln.nextPersistentConnectionId_++,this.log_=Lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Js,this.maxReconnectDelay_=oN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,l={r:o,a:e,b:n};this.log_(Qe(l)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new Po,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,s,o){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},u="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,g=f.s;Ln.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wn(e,"w")){const s=Gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_v)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const l=o.s,u=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const l={p:e},u="n";o&&(l.q=s,l.t=o),this.sendRequest(u,l)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const l={p:n,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,l){this.initConnection_();const u={p:n,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hd("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lN&&(this.reconnectDelay_=Js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Ln.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(y){W(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:p,sendRequest:g};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,w]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);u?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=w&&w.token,f=new eN(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,I=>{yt(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(cN)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&yt(y),p())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ld(this.interruptReasons_)&&(this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(l=>Th(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wv&&(this.reconnectDelay_=_v,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+__.replace(/\./g,"-")]=1,ph()?e["framework.cordova"]=1:Py()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xl.getInstance().currentlyOnline();return Ld(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(Ki,e),o=new le(Ki,n);return this.compare(s,o)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;class H_ extends Xl{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return oi(e.name,n.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Qr,el)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,el)}toString(){return".key"}}const $i=new H_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,s,o,l){this.key=e,this.value=n,this.color=s??nt.RED,this.left=o??Nt.EMPTY_NODE,this.right=l??Nt.EMPTY_NODE}copy(e,n,s,o,l){return new nt(e??this.key,n??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class uN{copy(e,n,s,o,l){return this}insert(e,n,s){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,n=Nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new uN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){return oi(t.name,e.name)}function jh(t,e){return oi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd;function hN(t){qd=t}const G_=function(t){return typeof t=="number"?"number:"+C_(t):"string:"+t},q_=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wn(e,".sv"),"Priority must be a string or number.")}else W(t===qd||t.isEmpty(),"priority of unexpected type.");W(t===qd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sv;class tt{static set __childrenNodeConstructor(e){Sv=e}static get __childrenNodeConstructor(){return Sv}constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),q_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:de(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(W(s!==".priority"||xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=C_(this.value_):e+=this.value_,this.lazyHash_=S_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=tt.VALUE_TYPE_ORDER.indexOf(n),l=tt.VALUE_TYPE_ORDER.indexOf(s);return W(o>=0,"Unknown leaf type: "+n),W(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K_,Y_;function fN(t){K_=t}function pN(t){Y_=t}class mN extends Xl{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),l=s.compareTo(o);return l===0?oi(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Qr,new tt("[PRIORITY-POST]",Y_))}makePost(e,n){const s=K_(e);return new le(n,new tt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Be=new mN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=Math.log(2);class vN{constructor(e){const n=l=>parseInt(Math.log(l)/gN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(t,e,n,s){t.sort(e);const o=function(p,g){const _=g-p;let y,w;if(_===0)return null;if(_===1)return y=t[p],w=n?n(y):y,new nt(w,y.node,nt.BLACK,null,null);{const I=parseInt(_/2,10)+p,N=o(p,I),b=o(I+1,g);return y=t[I],w=n?n(y):y,new nt(w,y.node,nt.BLACK,N,b)}},l=function(p){let g=null,_=null,y=t.length;const w=function(N,b){const A=y-N,G=y;y-=N;const K=o(A+1,G),O=t[A],j=n?n(O):O;I(new nt(j,O.node,b,null,K))},I=function(N){g?(g.left=N,g=N):(_=N,g=N)};for(let N=0;N<p.count;++N){const b=p.nextBitIsOne(),A=Math.pow(2,p.count-(N+1));b?w(A,nt.BLACK):(w(A,nt.BLACK),w(A,nt.RED))}return _},u=new vN(t.length),f=l(u);return new Nt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;const Di={};class bn{static get Default(){return W(Di&&Be,"ChildrenNode.ts has not been loaded"),yd=yd||new bn({".priority":Di},{".priority":Be}),yd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Nt?n:null}hasIndex(e){return wn(this.indexSet_,e.toString())}addIndex(e,n){W(e!==$i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=n.getIterator(le.Wrap);let u=l.getNext();for(;u;)o=o||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let f;o?f=Il(s,e.getCompare()):f=Di;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const _=Object.assign({},this.indexes_);return _[p]=f,new bn(_,g)}addToIndexes(e,n){const s=ml(this.indexes_,(o,l)=>{const u=Gi(this.indexSet_,l);if(W(u,"Missing index implementation for "+l),o===Di)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(le.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Il(f,u.getCompare())}else return Di;else{const f=n.get(e.name);let p=o;return f&&(p=p.remove(new le(e.name,f))),p.insert(e,e.node)}});return new bn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ml(this.indexes_,o=>{if(o===Di)return o;{const l=n.get(e.name);return l?o.remove(new le(e.name,l)):o}});return new bn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class ne{static get EMPTY_NODE(){return Xs||(Xs=new ne(new Nt(jh),null,bn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&q_(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xs:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let o,l;n.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(s,this.children_));const u=o.isEmpty()?Xs:this.priorityNode_;return new ne(o,u,l)}}updateChild(e,n){const s=de(e);if(s===null)return n;{W(de(e)!==".priority"||xr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Pe(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,l=!0;if(this.forEachChild(Be,(u,f)=>{n[u]=f.val(e),s++,l&&ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!e&&l&&o<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G_(this.getPriority().val())+":"),this.forEachChild(Be,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":S_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new le(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,le.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Do?-1:0}withIndex(e){if(e===$i||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Be),o=n.getIterator(Be);let l=s.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===$i?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yN extends ne{constructor(){super(new Nt(jh),ne.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const Do=new yN;Object.defineProperties(le,{MIN:{value:new le(Ki,ne.EMPTY_NODE)},MAX:{value:new le(Qr,Do)}});H_.__EMPTY_NODE=ne.EMPTY_NODE;tt.__childrenNodeConstructor=ne;hN(Do);pN(Do);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=!0;function Ye(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Ye(e))}if(!(t instanceof Array)&&_N){const n=[];let s=!1;if(ot(t,(u,f)=>{if(u.substring(0,1)!=="."){const p=Ye(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new le(u,p)))}}),n.length===0)return ne.EMPTY_NODE;const l=Il(n,dN,u=>u.name,jh);if(s){const u=Il(n,Be.getCompare());return new ne(l,Ye(e),new bn({".priority":u},{".priority":Be}))}else return new ne(l,Ye(e),bn.Default)}else{let n=ne.EMPTY_NODE;return ot(t,(s,o)=>{if(wn(t,s)&&s.substring(0,1)!=="."){const l=Ye(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(s,l))}}),n.updatePriority(Ye(e))}}fN(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN extends Xl{constructor(e){super(),this.indexPath_=e,W(!ce(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),l=s.compareTo(o);return l===0?oi(e.name,n.name):l}makePost(e,n){const s=Ye(e),o=ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,o)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,Do);return new le(Qr,e)}toString(){return yo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN extends Xl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?oi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=Ye(e);return new le(n,s)}toString(){return".value"}}const EN=new SN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){return{type:"value",snapshotNode:t}}function Yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _o(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.index_=e}updateChild(e,n,s,o,l,u){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(o).equals(s.getChild(o))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(_o(n,f)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Yi(n,s)):u.trackChildChange(wo(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Be,(o,l)=>{n.hasChild(o)||s.trackChildChange(_o(o,l))}),n.isLeafNode()||n.forEachChild(Be,(o,l)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(l)||s.trackChildChange(wo(o,l,u))}else s.trackChildChange(Yi(o,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.indexedFilter_=new Oh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=So.getStartPost_(e),this.endPost_=So.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,o,l,u){return this.matches(new le(n,s))||(s=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,o,l,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(ne.EMPTY_NODE);const l=this;return n.forEachChild(Be,(u,f)=>{l.matches(new le(u,f))||(o=o.updateImmediateChild(u,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new So(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,o,l,u){return this.rangedFilter_.matches(new le(n,s))||(s=ne.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,o,l,u):this.fullLimitUpdateChild_(e,n,s,l,u)}updateFullNode(e,n,s){let o;if(n.isLeafNode()||n.isEmpty())o=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,o,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(w,I)=>y(I,w)}else u=this.index_.getCompare();const f=e;W(f.numChildren()===this.limit_,"");const p=new le(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),_=this.rangedFilter_.matches(p);if(f.hasChild(n)){const y=f.getImmediateChild(n);let w=o.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const I=w==null?1:u(w,p);if(_&&!s.isEmpty()&&I>=0)return l!=null&&l.trackChildChange(wo(n,s,y)),f.updateImmediateChild(n,s);{l!=null&&l.trackChildChange(_o(n,y));const b=f.updateImmediateChild(n,ne.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(Yi(w.name,w.node)),b.updateImmediateChild(w.name,w.node)):b}}else return s.isEmpty()?e:_&&u(g,p)>=0?(l!=null&&(l.trackChildChange(_o(g.name,g.node)),l.trackChildChange(Yi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ne.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ki}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Lh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IN(t){return t.loadsAllData()?new Oh(t.getIndex()):t.hasLimit()?new xN(t):new So(t)}function Ev(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===EN?n="$value":t.index_===$i?n="$key":(W(t.index_ instanceof wN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Qe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Qe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends z_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Lo("p:rest:"),this.listens_={}}listen(e,n,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=kl.getListenId_(e,s),f={};this.listens_[u]=f;const p=Ev(e._queryParams);this.restRequest_(l+".json",p,(g,_)=>{let y=_;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(l,y,!1,s),Gi(this.listens_,u)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",o(w,null)}})}unlisten(e,n){const s=kl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ev(e._queryParams),s=e._path.toString(),o=new Po;return this.restRequest_(s+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+is(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=po(f.responseText)}catch{yt("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&yt("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return{value:null,children:new Map}}function J_(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=de(e);t.children.has(s)||t.children.set(s,Tl());const o=t.children.get(s);e=Pe(e),J_(o,e,n)}}function Kd(t,e,n){t.value!==null?n(e,t.value):TN(t,(s,o)=>{const l=new xe(e.toString()+"/"+s);Kd(o,l,n)})}function TN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=10*1e3,PN=30*1e3,RN=300*1e3;class AN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NN(e);const s=xv+(PN-xv)*Math.random();oo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ot(e,(o,l)=>{l>0&&wn(this.statsToReport_,o)&&(n[o]=l,s=!0)}),s&&this.server_.reportStats(n),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*RN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function Dh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=rn.ACK_USER_WRITE,this.source=Dh()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new Nl(ye(),n,this.revert)}}else return W(de(this.path)===e,"operationForChild called for unrelated child."),new Nl(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.source=e,this.path=n,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Eo(this.source,ye()):new Eo(this.source,Pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=rn.OVERWRITE}operationForChild(e){return ce(this.path)?new Jr(this.source,ye(),this.snap.getImmediateChild(e)):new Jr(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=rn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Jr(this.source,ye(),n.value):new Qi(this.source,ye(),n)}else return W(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qi(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jN(t,e,n,s){const o=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&t.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(CN(u.childName,u.snapshotNode))}),Zs(t,o,"child_removed",e,s,n),Zs(t,o,"child_added",e,s,n),Zs(t,o,"child_moved",l,s,n),Zs(t,o,"child_changed",e,s,n),Zs(t,o,"value",e,s,n),o}function Zs(t,e,n,s,o,l){const u=s.filter(f=>f.type===n);u.sort((f,p)=>LN(t,f,p)),u.forEach(f=>{const p=ON(t,f,l);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,t.query_))})})}function ON(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function LN(t,e,n){if(e.childName==null||n.childName==null)throw ns("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),o=new le(n.childName,n.snapshotNode);return t.index_.compare(s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e){return{eventCache:t,serverCache:e}}function ao(t,e,n,s){return Zl(new Ir(e,n,s),t.serverCache)}function X_(t,e,n,s){return Zl(t.eventCache,new Ir(e,n,s))}function Pl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;const DN=()=>(_d||(_d=new Nt(wT)),_d);class Ne{static fromObject(e){let n=new Ne(null);return ot(e,(s,o)=>{n=n.set(new xe(s),o)}),n}constructor(e,n=DN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ce(e))return null;{const s=de(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Pe(e),n);return l!=null?{path:We(new xe(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Pe(e)):new Ne(null)}}set(e,n){if(ce(e))return new Ne(n,this.children);{const s=de(e),l=(this.children.get(s)||new Ne(null)).set(Pe(e),n),u=this.children.insert(s,l);return new Ne(this.value,u)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const o=s.remove(Pe(e));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new Ne(null):new Ne(this.value,l)}else return this}}get(e){if(ce(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Pe(e)):null}}setTree(e,n){if(ce(e))return n;{const s=de(e),l=(this.children.get(s)||new Ne(null)).setTree(Pe(e),n);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new Ne(this.value,u)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(We(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(ce(e))return null;{const l=de(e),u=this.children.get(l);return u?u.findOnPath_(Pe(e),We(n,l),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(ce(e))return this;{this.value&&s(n,this.value);const o=de(e),l=this.children.get(o);return l?l.foreachOnPath_(Pe(e),We(n,o),s):new Ne(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new Ne(null))}}function lo(t,e,n){if(ce(e))return new sn(new Ne(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const u=vt(o,e);return l=l.updateChild(u,n),new sn(t.writeTree_.set(o,l))}else{const o=new Ne(n),l=t.writeTree_.setTree(e,o);return new sn(l)}}}function Yd(t,e,n){let s=t;return ot(n,(o,l)=>{s=lo(s,We(e,o),l)}),s}function Iv(t,e){if(ce(e))return sn.empty();{const n=t.writeTree_.setTree(e,new Ne(null));return new sn(n)}}function Qd(t,e){return ai(t,e)!=null}function ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function kv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(s,o)=>{e.push(new le(s,o))}):t.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new le(s,o.value))}),e}function Sr(t,e){if(ce(e))return t;{const n=ai(t,e);return n!=null?new sn(new Ne(n)):new sn(t.writeTree_.subtree(e))}}function Jd(t){return t.writeTree_.isEmpty()}function Ji(t,e){return Z_(ye(),t.writeTree_,e)}function Z_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(W(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):n=Z_(We(t,o),l,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){return r0(e,t)}function MN(t,e,n,s,o){W(s>t.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(t.visibleWrites=lo(t.visibleWrites,e,n)),t.lastWriteId=s}function FN(t,e,n,s){W(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Yd(t.visibleWrites,e,n),t.lastWriteId=s}function UN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zN(t,e){const n=t.allWrites.findIndex(f=>f.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let o=s.visible,l=!1,u=t.allWrites.length-1;for(;o&&u>=0;){const f=t.allWrites[u];f.visible&&(u>=n&&WN(f,s.path)?o=!1:Ht(s.path,f.path)&&(l=!0)),u--}if(o){if(l)return BN(t),!0;if(s.snap)t.visibleWrites=Iv(t.visibleWrites,s.path);else{const f=s.children;ot(f,p=>{t.visibleWrites=Iv(t.visibleWrites,We(s.path,p))})}return!0}else return!1}function WN(t,e){if(t.snap)return Ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ht(We(t.path,n),e))return!0;return!1}function BN(t){t.visibleWrites=e0(t.allWrites,VN,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VN(t){return t.visible}function e0(t,e,n){let s=sn.empty();for(let o=0;o<t.length;++o){const l=t[o];if(e(l)){const u=l.path;let f;if(l.snap)Ht(n,u)?(f=vt(n,u),s=lo(s,f,l.snap)):Ht(u,n)&&(f=vt(u,n),s=lo(s,ye(),l.snap.getChild(f)));else if(l.children){if(Ht(n,u))f=vt(n,u),s=Yd(s,f,l.children);else if(Ht(u,n))if(f=vt(u,n),ce(f))s=Yd(s,ye(),l.children);else{const p=Gi(l.children,de(f));if(p){const g=p.getChild(Pe(f));s=lo(s,ye(),g)}}}else throw ns("WriteRecord should have .snap or .children")}}return s}function t0(t,e,n,s,o){if(!s&&!o){const l=ai(t.visibleWrites,e);if(l!=null)return l;{const u=Sr(t.visibleWrites,e);if(Jd(u))return n;if(n==null&&!Qd(u,ye()))return null;{const f=n||ne.EMPTY_NODE;return Ji(u,f)}}}else{const l=Sr(t.visibleWrites,e);if(!o&&Jd(l))return n;if(!o&&n==null&&!Qd(l,ye()))return null;{const u=function(g){return(g.visible||o)&&(!s||!~s.indexOf(g.writeId))&&(Ht(g.path,e)||Ht(e,g.path))},f=e0(t.allWrites,u,e),p=n||ne.EMPTY_NODE;return Ji(f,p)}}}function $N(t,e,n){let s=ne.EMPTY_NODE;const o=ai(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Be,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(n){const l=Sr(t.visibleWrites,e);return n.forEachChild(Be,(u,f)=>{const p=Ji(Sr(l,new xe(u)),f);s=s.updateImmediateChild(u,p)}),kv(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=Sr(t.visibleWrites,e);return kv(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function HN(t,e,n,s,o){W(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=We(e,n);if(Qd(t.visibleWrites,l))return null;{const u=Sr(t.visibleWrites,l);return Jd(u)?o.getChild(n):Ji(u,o.getChild(n))}}function GN(t,e,n,s){const o=We(e,n),l=ai(t.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(n)){const u=Sr(t.visibleWrites,o);return Ji(u,s.getNode().getImmediateChild(n))}else return null}function qN(t,e){return ai(t.visibleWrites,e)}function KN(t,e,n,s,o,l,u){let f;const p=Sr(t.visibleWrites,e),g=ai(p,ye());if(g!=null)f=g;else if(n!=null)f=Ji(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const _=[],y=u.getCompare(),w=l?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let I=w.getNext();for(;I&&_.length<o;)y(I,s)!==0&&_.push(I),I=w.getNext();return _}else return[]}function YN(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Rl(t,e,n,s){return t0(t.writeTree,t.treePath,e,n,s)}function Uh(t,e){return $N(t.writeTree,t.treePath,e)}function Tv(t,e,n,s){return HN(t.writeTree,t.treePath,e,n,s)}function Al(t,e){return qN(t.writeTree,We(t.treePath,e))}function QN(t,e,n,s,o,l){return KN(t.writeTree,t.treePath,e,n,s,o,l)}function zh(t,e,n){return GN(t.writeTree,t.treePath,e,n)}function n0(t,e){return r0(We(t.treePath,e),t.writeTree)}function r0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(s,wo(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(s,_o(s,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(s,Yi(s,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(s,wo(s,e.snapshotNode,o.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const i0=new XN;class Wh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xr(this.viewCache_),l=QN(this.writes_,o,n,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){return{filter:t}}function e2(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function t2(t,e,n,s,o){const l=new JN;let u,f;if(n.type===rn.OVERWRITE){const g=n;g.source.fromUser?u=Xd(t,e,g.path,g.snap,s,o,l):(W(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ce(g.path),u=bl(t,e,g.path,g.snap,s,o,f,l))}else if(n.type===rn.MERGE){const g=n;g.source.fromUser?u=r2(t,e,g.path,g.children,s,o,l):(W(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=Zd(t,e,g.path,g.children,s,o,f,l))}else if(n.type===rn.ACK_USER_WRITE){const g=n;g.revert?u=o2(t,e,g.path,s,o,l):u=i2(t,e,g.path,g.affectedTree,s,o,l)}else if(n.type===rn.LISTEN_COMPLETE)u=s2(t,e,n.path,s,l);else throw ns("Unknown operation type: "+n.type);const p=l.getChanges();return n2(e,u,p),{viewCache:u,changes:p}}function n2(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Pl(t);(n.length>0||!t.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&n.push(Q_(Pl(e)))}}function s0(t,e,n,s,o,l){const u=e.eventCache;if(Al(s,n)!=null)return e;{let f,p;if(ce(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Xr(e),_=g instanceof ne?g:ne.EMPTY_NODE,y=Uh(s,_);f=t.filter.updateFullNode(e.eventCache.getNode(),y,l)}else{const g=Rl(s,Xr(e));f=t.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=de(n);if(g===".priority"){W(xr(n)===1,"Can't have a priority with additional path components");const _=u.getNode();p=e.serverCache.getNode();const y=Tv(s,n,_,p);y!=null?f=t.filter.updatePriority(_,y):f=u.getNode()}else{const _=Pe(n);let y;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const w=Tv(s,n,u.getNode(),p);w!=null?y=u.getNode().getImmediateChild(g).updateChild(_,w):y=u.getNode().getImmediateChild(g)}else y=zh(s,g,e.serverCache);y!=null?f=t.filter.updateChild(u.getNode(),g,y,_,o,l):f=u.getNode()}}return ao(e,f,u.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function bl(t,e,n,s,o,l,u,f){const p=e.serverCache;let g;const _=u?t.filter:t.filter.getIndexedFilter();if(ce(n))g=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(n,s);g=_.updateFullNode(p.getNode(),I,null)}else{const I=de(n);if(!p.isCompleteForPath(n)&&xr(n)>1)return e;const N=Pe(n),A=p.getNode().getImmediateChild(I).updateChild(N,s);I===".priority"?g=_.updatePriority(p.getNode(),A):g=_.updateChild(p.getNode(),I,A,N,i0,null)}const y=X_(e,g,p.isFullyInitialized()||ce(n),_.filtersNodes()),w=new Wh(o,y,l);return s0(t,y,n,o,w,f)}function Xd(t,e,n,s,o,l,u){const f=e.eventCache;let p,g;const _=new Wh(o,e,l);if(ce(n))g=t.filter.updateFullNode(e.eventCache.getNode(),s,u),p=ao(e,g,!0,t.filter.filtersNodes());else{const y=de(n);if(y===".priority")g=t.filter.updatePriority(e.eventCache.getNode(),s),p=ao(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=Pe(n),I=f.getNode().getImmediateChild(y);let N;if(ce(w))N=s;else{const b=_.getCompleteChild(y);b!=null?Ah(w)===".priority"&&b.getChild(B_(w)).isEmpty()?N=b:N=b.updateChild(w,s):N=ne.EMPTY_NODE}if(I.equals(N))p=e;else{const b=t.filter.updateChild(f.getNode(),y,N,w,_,u);p=ao(e,b,f.isFullyInitialized(),t.filter.filtersNodes())}}}return p}function Nv(t,e){return t.eventCache.isCompleteForChild(e)}function r2(t,e,n,s,o,l,u){let f=e;return s.foreach((p,g)=>{const _=We(n,p);Nv(e,de(_))&&(f=Xd(t,f,_,g,o,l,u))}),s.foreach((p,g)=>{const _=We(n,p);Nv(e,de(_))||(f=Xd(t,f,_,g,o,l,u))}),f}function Pv(t,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Zd(t,e,n,s,o,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ce(n)?g=s:g=new Ne(null).setTree(n,s);const _=e.serverCache.getNode();return g.children.inorderTraversal((y,w)=>{if(_.hasChild(y)){const I=e.serverCache.getNode().getImmediateChild(y),N=Pv(t,I,w);p=bl(t,p,new xe(y),N,o,l,u,f)}}),g.children.inorderTraversal((y,w)=>{const I=!e.serverCache.isCompleteForChild(y)&&w.value===null;if(!_.hasChild(y)&&!I){const N=e.serverCache.getNode().getImmediateChild(y),b=Pv(t,N,w);p=bl(t,p,new xe(y),b,o,l,u,f)}}),p}function i2(t,e,n,s,o,l,u){if(Al(o,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ce(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return bl(t,e,n,p.getNode().getChild(n),o,l,f,u);if(ce(n)){let g=new Ne(null);return p.getNode().forEachChild($i,(_,y)=>{g=g.set(new xe(_),y)}),Zd(t,e,n,g,o,l,f,u)}else return e}else{let g=new Ne(null);return s.foreach((_,y)=>{const w=We(n,_);p.isCompleteForPath(w)&&(g=g.set(_,p.getNode().getChild(w)))}),Zd(t,e,n,g,o,l,f,u)}}function s2(t,e,n,s,o){const l=e.serverCache,u=X_(e,l.getNode(),l.isFullyInitialized()||ce(n),l.isFiltered());return s0(t,u,n,s,i0,o)}function o2(t,e,n,s,o,l){let u;if(Al(s,n)!=null)return e;{const f=new Wh(s,e,o),p=e.eventCache.getNode();let g;if(ce(n)||de(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Rl(s,Xr(e));else{const y=e.serverCache.getNode();W(y instanceof ne,"serverChildren would be complete if leaf node"),_=Uh(s,y)}_=_,g=t.filter.updateFullNode(p,_,l)}else{const _=de(n);let y=zh(s,_,e.serverCache);y==null&&e.serverCache.isCompleteForChild(_)&&(y=p.getImmediateChild(_)),y!=null?g=t.filter.updateChild(p,_,y,Pe(n),f,l):e.eventCache.getNode().hasChild(_)?g=t.filter.updateChild(p,_,ne.EMPTY_NODE,Pe(n),f,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Rl(s,Xr(e)),u.isLeafNode()&&(g=t.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||Al(s,ye())!=null,ao(e,g,u,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Oh(s.getIndex()),l=IN(s);this.processor_=ZN(l);const u=n.serverCache,f=n.eventCache,p=o.updateFullNode(ne.EMPTY_NODE,u.getNode(),null),g=l.updateFullNode(ne.EMPTY_NODE,f.getNode(),null),_=new Ir(p,u.isFullyInitialized(),o.filtersNodes()),y=new Ir(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Zl(y,_),this.eventGenerator_=new bN(this.query_)}get query(){return this.query_}}function l2(t){return t.viewCache_.serverCache.getNode()}function c2(t){return Pl(t.viewCache_)}function u2(t,e){const n=Xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Rv(t){return t.eventRegistrations_.length===0}function d2(t,e){t.eventRegistrations_.push(e)}function Av(t,e,n){const s=[];if(n){W(e==null,"A cancel should cancel all event registrations.");const o=t.query._path;t.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&s.push(u)})}if(e){let o=[];for(let l=0;l<t.eventRegistrations_.length;++l){const u=t.eventRegistrations_[l];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(l+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return s}function bv(t,e,n,s){e.type===rn.MERGE&&e.source.queryId!==null&&(W(Xr(t.viewCache_),"We should always have a full cache before handling merges"),W(Pl(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,l=t2(t.processor_,o,e,n,s);return e2(t.processor_,l.viewCache),W(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,o0(t,l.changes,l.viewCache.eventCache.getNode(),null)}function h2(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(l,u)=>{s.push(Yi(l,u))}),n.isFullyInitialized()&&s.push(Q_(n.getNode())),o0(t,s,n.getNode(),e)}function o0(t,e,n,s){const o=s?[s]:t.eventRegistrations_;return jN(t.eventGenerator_,e,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;class a0{constructor(){this.views=new Map}}function f2(t){W(!jl,"__referenceConstructor has already been defined"),jl=t}function p2(){return W(jl,"Reference.ts has not been loaded"),jl}function m2(t){return t.views.size===0}function Bh(t,e,n,s){const o=e.source.queryId;if(o!==null){const l=t.views.get(o);return W(l!=null,"SyncTree gave us an op for an invalid query."),bv(l,e,n,s)}else{let l=[];for(const u of t.views.values())l=l.concat(bv(u,e,n,s));return l}}function l0(t,e,n,s,o){const l=e._queryIdentifier,u=t.views.get(l);if(!u){let f=Rl(n,o?s:null),p=!1;f?p=!0:s instanceof ne?(f=Uh(n,s),p=!1):(f=ne.EMPTY_NODE,p=!1);const g=Zl(new Ir(f,p,!1),new Ir(s,o,!1));return new a2(e,g)}return u}function g2(t,e,n,s,o,l){const u=l0(t,e,s,o,l);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,u),d2(u,n),h2(u,n)}function v2(t,e,n,s){const o=e._queryIdentifier,l=[];let u=[];const f=kr(t);if(o==="default")for(const[p,g]of t.views.entries())u=u.concat(Av(g,n,s)),Rv(g)&&(t.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=t.views.get(o);p&&(u=u.concat(Av(p,n,s)),Rv(p)&&(t.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!kr(t)&&l.push(new(p2())(e._repo,e._path)),{removed:l,events:u}}function c0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Er(t,e){let n=null;for(const s of t.views.values())n=n||u2(s,e);return n}function u0(t,e){if(e._queryParams.loadsAllData())return tc(t);{const s=e._queryIdentifier;return t.views.get(s)}}function d0(t,e){return u0(t,e)!=null}function kr(t){return tc(t)!=null}function tc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;function y2(t){W(!Ol,"__referenceConstructor has already been defined"),Ol=t}function _2(){return W(Ol,"Reference.ts has not been loaded"),Ol}let w2=1;class jv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=YN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h0(t,e,n,s,o){return MN(t.pendingWriteTree_,e,n,s,o),o?ls(t,new Jr(Dh(),e,n)):[]}function S2(t,e,n,s){FN(t.pendingWriteTree_,e,n,s);const o=Ne.fromObject(n);return ls(t,new Qi(Dh(),e,o))}function vr(t,e,n=!1){const s=UN(t.pendingWriteTree_,e);if(zN(t.pendingWriteTree_,e)){let l=new Ne(null);return s.snap!=null?l=l.set(ye(),!0):ot(s.children,u=>{l=l.set(new xe(u),!0)}),ls(t,new Nl(s.path,l,n))}else return[]}function Mo(t,e,n){return ls(t,new Jr(Mh(),e,n))}function E2(t,e,n){const s=Ne.fromObject(n);return ls(t,new Qi(Mh(),e,s))}function C2(t,e){return ls(t,new Eo(Mh(),e))}function x2(t,e,n){const s=$h(t,n);if(s){const o=Hh(s),l=o.path,u=o.queryId,f=vt(l,e),p=new Eo(Fh(u),f);return Gh(t,l,p)}else return[]}function f0(t,e,n,s,o=!1){const l=e._path,u=t.syncPointTree_.get(l);let f=[];if(u&&(e._queryIdentifier==="default"||d0(u,e))){const p=v2(u,e,n,s);m2(u)&&(t.syncPointTree_=t.syncPointTree_.remove(l));const g=p.removed;if(f=p.events,!o){const _=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,y=t.syncPointTree_.findOnPath(l,(w,I)=>kr(I));if(_&&!y){const w=t.syncPointTree_.subtree(l);if(!w.isEmpty()){const I=N2(w);for(let N=0;N<I.length;++N){const b=I[N],A=b.query,G=v0(t,b);t.listenProvider_.startListening(co(A),Co(t,A),G.hashFn,G.onComplete)}}}!y&&g.length>0&&!s&&(_?t.listenProvider_.stopListening(co(e),null):g.forEach(w=>{const I=t.queryToTagMap.get(nc(w));t.listenProvider_.stopListening(co(w),I)}))}P2(t,g)}return f}function p0(t,e,n,s){const o=$h(t,s);if(o!=null){const l=Hh(o),u=l.path,f=l.queryId,p=vt(u,e),g=new Jr(Fh(f),p,n);return Gh(t,u,g)}else return[]}function I2(t,e,n,s){const o=$h(t,s);if(o){const l=Hh(o),u=l.path,f=l.queryId,p=vt(u,e),g=Ne.fromObject(n),_=new Qi(Fh(f),p,g);return Gh(t,u,_)}else return[]}function k2(t,e,n,s=!1){const o=e._path;let l=null,u=!1;t.syncPointTree_.foreachOnPath(o,(w,I)=>{const N=vt(w,o);l=l||Er(I,N),u=u||kr(I)});let f=t.syncPointTree_.get(o);f?(u=u||kr(f),l=l||Er(f,ye())):(f=new a0,t.syncPointTree_=t.syncPointTree_.set(o,f));let p;l!=null?p=!0:(p=!1,l=ne.EMPTY_NODE,t.syncPointTree_.subtree(o).foreachChild((I,N)=>{const b=Er(N,ye());b&&(l=l.updateImmediateChild(I,b))}));const g=d0(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=nc(e);W(!t.queryToTagMap.has(w),"View does not exist, but we have a tag");const I=R2();t.queryToTagMap.set(w,I),t.tagToQueryMap.set(I,w)}const _=ec(t.pendingWriteTree_,o);let y=g2(f,e,n,_,l,p);if(!g&&!u&&!s){const w=u0(f,e);y=y.concat(A2(t,e,w))}return y}function Vh(t,e,n){const o=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(u,f)=>{const p=vt(u,e),g=Er(f,p);if(g)return g});return t0(o,e,l,n,!0)}function T2(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(g,_)=>{const y=vt(g,n);s=s||Er(_,y)});let o=t.syncPointTree_.get(n);o?s=s||Er(o,ye()):(o=new a0,t.syncPointTree_=t.syncPointTree_.set(n,o));const l=s!=null,u=l?new Ir(s,!0,!1):null,f=ec(t.pendingWriteTree_,e._path),p=l0(o,e,f,l?u.getNode():ne.EMPTY_NODE,l);return c2(p)}function ls(t,e){return m0(e,t.syncPointTree_,null,ec(t.pendingWriteTree_,ye()))}function m0(t,e,n,s){if(ce(t.path))return g0(t,e,n,s);{const o=e.get(ye());n==null&&o!=null&&(n=Er(o,ye()));let l=[];const u=de(t.path),f=t.operationForChild(u),p=e.children.get(u);if(p&&f){const g=n?n.getImmediateChild(u):null,_=n0(s,u);l=l.concat(m0(f,p,g,_))}return o&&(l=l.concat(Bh(o,t,s,n))),l}}function g0(t,e,n,s){const o=e.get(ye());n==null&&o!=null&&(n=Er(o,ye()));let l=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,g=n0(s,u),_=t.operationForChild(u);_&&(l=l.concat(g0(_,f,p,g)))}),o&&(l=l.concat(Bh(o,t,s,n))),l}function v0(t,e){const n=e.query,s=Co(t,n);return{hashFn:()=>(l2(e)||ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?x2(t,n._path,s):C2(t,n._path);{const l=CT(o,n);return f0(t,n,null,l)}}}}function Co(t,e){const n=nc(e);return t.queryToTagMap.get(n)}function nc(t){return t._path.toString()+"$"+t._queryIdentifier}function $h(t,e){return t.tagToQueryMap.get(e)}function Hh(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function Gh(t,e,n){const s=t.syncPointTree_.get(e);W(s,"Missing sync point for query tag that we're tracking");const o=ec(t.pendingWriteTree_,e);return Bh(s,n,o,null)}function N2(t){return t.fold((e,n,s)=>{if(n&&kr(n))return[tc(n)];{let o=[];return n&&(o=c0(n)),ot(s,(l,u)=>{o=o.concat(u)}),o}})}function co(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_2())(t._repo,t._path):t}function P2(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const o=nc(s),l=t.queryToTagMap.get(o);t.queryToTagMap.delete(o),t.tagToQueryMap.delete(l)}}}function R2(){return w2++}function A2(t,e,n){const s=e._path,o=Co(t,e),l=v0(t,n),u=t.listenProvider_.startListening(co(e),o,l.hashFn,l.onComplete),f=t.syncPointTree_.subtree(s);if(o)W(!kr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,_,y)=>{if(!ce(g)&&_&&kr(_))return[tc(_).query];{let w=[];return _&&(w=w.concat(c0(_).map(I=>I.query))),ot(y,(I,N)=>{w=w.concat(N)}),w}});for(let g=0;g<p.length;++g){const _=p[g];t.listenProvider_.stopListening(co(_),Co(t,_))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qh(n)}node(){return this.node_}}class Kh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new Kh(this.syncTree_,n)}node(){return Vh(this.syncTree_,this.path_)}}const b2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ov=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return j2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return O2(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},j2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},O2=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&W(!1,"Unexpected increment value: "+s);const o=e.node();if(W(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const u=o.getValue();return typeof u!="number"?s:u+s},y0=function(t,e,n,s){return Yh(e,new Kh(n,t),s)},_0=function(t,e,n){return Yh(t,new qh(e),n)};function Yh(t,e,n){const s=t.getPriority().val(),o=Ov(s,e.getImmediateChild(".priority"),n);let l;if(t.isLeafNode()){const u=t,f=Ov(u.getValue(),e,n);return f!==u.getValue()||o!==u.getPriority().val()?new tt(f,Ye(o)):t}else{const u=t;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new tt(o))),u.forEachChild(Be,(f,p)=>{const g=Yh(p,e.getImmediateChild(f),n);g!==p&&(l=l.updateImmediateChild(f,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Jh(t,e){let n=e instanceof xe?e:new xe(e),s=t,o=de(n);for(;o!==null;){const l=Gi(s.node.children,o)||{children:{},childCount:0};s=new Qh(o,s,l),n=Pe(n),o=de(n)}return s}function cs(t){return t.node.value}function w0(t,e){t.node.value=e,eh(t)}function S0(t){return t.node.childCount>0}function L2(t){return cs(t)===void 0&&!S0(t)}function rc(t,e){ot(t.node.children,(n,s)=>{e(new Qh(n,t,s))})}function E0(t,e,n,s){n&&e(t),rc(t,o=>{E0(o,e,!0)})}function D2(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fo(t){return new xe(t.parent===null?t.name:Fo(t.parent)+"/"+t.name)}function eh(t){t.parent!==null&&M2(t.parent,t.name,t)}function M2(t,e,n){const s=L2(n),o=wn(t.node.children,e);s&&o?(delete t.node.children[e],t.node.childCount--,eh(t)):!s&&!o&&(t.node.children[e]=n.node,t.node.childCount++,eh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=/[\[\].#$\/\u0000-\u001F\u007F]/,U2=/[\[\].#$\u0000-\u001F\u007F]/,wd=10*1024*1024,Xh=function(t){return typeof t=="string"&&t.length!==0&&!F2.test(t)},C0=function(t){return typeof t=="string"&&t.length!==0&&!U2.test(t)},z2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),C0(t)},W2=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!kh(t)||t&&typeof t=="object"&&wn(t,".sv")},x0=function(t,e,n,s){s&&e===void 0||ic(Gl(t,"value"),e,n)},ic=function(t,e,n){const s=n instanceof xe?new rN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hr(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hr(s)+" with contents = "+e.toString());if(kh(e))throw new Error(t+"contains "+e.toString()+" "+Hr(s));if(typeof e=="string"&&e.length>wd/3&&ql(e)>wd)throw new Error(t+"contains a string greater than "+wd+" utf8 bytes "+Hr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(ot(e,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!Xh(u)))throw new Error(t+" contains an invalid key ("+u+") "+Hr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iN(s,u),ic(t,f,s),sN(s)}),o&&l)throw new Error(t+' contains ".value" child '+Hr(s)+" in addition to actual children.")}},B2=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const l=yo(s);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!Xh(l[u]))throw new Error(t+"contains an invalid key ("+l[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nN);let o=null;for(n=0;n<e.length;n++){if(s=e[n],o!==null&&Ht(o,s))throw new Error(t+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},V2=function(t,e,n,s){const o=Gl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];ot(e,(u,f)=>{const p=new xe(u);if(ic(o,f,We(n,p)),Ah(p)===".priority"&&!W2(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),B2(o,l)},I0=function(t,e,n,s){if(!C0(n))throw new Error(Gl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$2=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),I0(t,e,n)},Zh=function(t,e){if(de(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},H2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!z2(n))throw new Error(Gl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ef(t,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();n!==null&&!V_(l,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&t.eventLists_.push(n)}function qt(t,e,n){ef(t,n),q2(t,s=>Ht(s,e)||Ht(e,s))}function q2(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const o=t.eventLists_[s];if(o){const l=o.path;e(l)?(K2(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function K2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();so&&st("event: "+n.toString()),as(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="repo_interrupt",Q2=25;class J2{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new G2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tl(),this.transactionQueueTree_=new Qh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function X2(t,e,n){if(t.stats_=Ph(t.repoInfo_),t.forceRestClient_||TT())t.server_=new kl(t.repoInfo_,(s,o,l,u)=>{Lv(t,s,o,l,u)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(s,o,l,u)=>{Lv(t,s,o,l,u)},s=>{Dv(t,s)},s=>{Z2(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=bT(t.repoInfo_,()=>new AN(t.stats_,t.server_)),t.infoData_=new kN,t.infoSyncTree_=new jv({startListening:(s,o,l,u)=>{let f=[];const p=t.infoData_.getNode(s._path);return p.isEmpty()||(f=Mo(t.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),tf(t,"connected",!1),t.serverSyncTree_=new jv({startListening:(s,o,l,u)=>(t.server_.listen(s,l,o,(f,p)=>{const g=u(f,p);qt(t.eventQueue_,s._path,g)}),[]),stopListening:(s,o)=>{t.server_.unlisten(s,o)}})}function k0(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sc(t){return b2({timestamp:k0(t)})}function Lv(t,e,n,s,o){t.dataUpdateCount++;const l=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let u=[];if(o)if(s){const p=ml(n,g=>Ye(g));u=I2(t.serverSyncTree_,l,p,o)}else{const p=Ye(n);u=p0(t.serverSyncTree_,l,p,o)}else if(s){const p=ml(n,g=>Ye(g));u=E2(t.serverSyncTree_,l,p)}else{const p=Ye(n);u=Mo(t.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=Xi(t,l)),qt(t.eventQueue_,f,u)}function Dv(t,e){tf(t,"connected",e),e===!1&&rP(t)}function Z2(t,e){ot(e,(n,s)=>{tf(t,n,s)})}function tf(t,e,n){const s=new xe("/.info/"+e),o=Ye(n);t.infoData_.updateSnapshot(s,o);const l=Mo(t.infoSyncTree_,s,o);qt(t.eventQueue_,s,l)}function nf(t){return t.nextWriteId_++}function eP(t,e,n){const s=T2(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(o=>{const l=Ye(o).withIndex(e._queryParams.getIndex());k2(t.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=Mo(t.serverSyncTree_,e._path,l);else{const f=Co(t.serverSyncTree_,e);u=p0(t.serverSyncTree_,e._path,l,f)}return qt(t.eventQueue_,e._path,u),f0(t.serverSyncTree_,e,n,null,!0),l},o=>(Uo(t,"get for query "+Qe(e)+" failed: "+o),Promise.reject(new Error(o))))}function tP(t,e,n,s,o){Uo(t,"set",{path:e.toString(),value:n,priority:s});const l=sc(t),u=Ye(n,s),f=Vh(t.serverSyncTree_,e),p=_0(u,f,l),g=nf(t),_=h0(t.serverSyncTree_,e,p,g,!0);ef(t.eventQueue_,_),t.server_.put(e.toString(),u.val(!0),(w,I)=>{const N=w==="ok";N||yt("set at "+e+" failed: "+w);const b=vr(t.serverSyncTree_,g,!N);qt(t.eventQueue_,e,b),th(t,o,w,I)});const y=sf(t,e);Xi(t,y),qt(t.eventQueue_,y,[])}function nP(t,e,n,s){Uo(t,"update",{path:e.toString(),value:n});let o=!0;const l=sc(t),u={};if(ot(n,(f,p)=>{o=!1,u[f]=y0(We(e,f),Ye(p),t.serverSyncTree_,l)}),o)st("update() called with empty data.  Don't do anything."),th(t,s,"ok",void 0);else{const f=nf(t),p=S2(t.serverSyncTree_,e,u,f);ef(t.eventQueue_,p),t.server_.merge(e.toString(),n,(g,_)=>{const y=g==="ok";y||yt("update at "+e+" failed: "+g);const w=vr(t.serverSyncTree_,f,!y),I=w.length>0?Xi(t,e):e;qt(t.eventQueue_,I,w),th(t,s,g,_)}),ot(n,g=>{const _=sf(t,We(e,g));Xi(t,_)}),qt(t.eventQueue_,e,[])}}function rP(t){Uo(t,"onDisconnectEvents");const e=sc(t),n=Tl();Kd(t.onDisconnect_,ye(),(o,l)=>{const u=y0(o,l,t.serverSyncTree_,e);J_(n,o,u)});let s=[];Kd(n,ye(),(o,l)=>{s=s.concat(Mo(t.serverSyncTree_,o,l));const u=sf(t,o);Xi(t,u)}),t.onDisconnect_=Tl(),qt(t.eventQueue_,ye(),s)}function iP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Y2)}function Uo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function th(t,e,n,s){e&&as(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let l=o;s&&(l+=": "+s);const u=new Error(l);u.code=o,e(u)}})}function T0(t,e,n){return Vh(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function rf(t,e=t.transactionQueueTree_){if(e||oc(t,e),cs(e)){const n=P0(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&sP(t,Fo(e),n)}else S0(e)&&rc(e,n=>{rf(t,n)})}function sP(t,e,n){const s=n.map(g=>g.currentWriteId),o=T0(t,e,s);let l=o;const u=o.hash();for(let g=0;g<n.length;g++){const _=n[g];W(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const y=vt(e,_.path);l=l.updateChild(y,_.currentOutputSnapshotRaw)}const f=l.val(!0),p=e;t.server_.put(p.toString(),f,g=>{Uo(t,"transaction put response",{path:p.toString(),status:g});let _=[];if(g==="ok"){const y=[];for(let w=0;w<n.length;w++)n[w].status=2,_=_.concat(vr(t.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&y.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();oc(t,Jh(t.transactionQueueTree_,e)),rf(t,t.transactionQueueTree_),qt(t.eventQueue_,e,_);for(let w=0;w<y.length;w++)as(y[w])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{yt("transaction at "+p.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}Xi(t,e)}},u)}function Xi(t,e){const n=N0(t,e),s=Fo(n),o=P0(t,n);return oP(t,o,s),s}function oP(t,e,n){if(e.length===0)return;const s=[];let o=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=vt(n,p.path);let _=!1,y;if(W(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)_=!0,y=p.abortReason,o=o.concat(vr(t.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Q2)_=!0,y="maxretry",o=o.concat(vr(t.serverSyncTree_,p.currentWriteId,!0));else{const w=T0(t,p.path,u);p.currentInputSnapshot=w;const I=e[f].update(w.val());if(I!==void 0){ic("transaction failed: Data returned ",I,p.path);let N=Ye(I);typeof I=="object"&&I!=null&&wn(I,".priority")||(N=N.updatePriority(w.getPriority()));const A=p.currentWriteId,G=sc(t),K=_0(N,w,G);p.currentOutputSnapshotRaw=N,p.currentOutputSnapshotResolved=K,p.currentWriteId=nf(t),u.splice(u.indexOf(A),1),o=o.concat(h0(t.serverSyncTree_,p.path,K,p.currentWriteId,p.applyLocally)),o=o.concat(vr(t.serverSyncTree_,A,!0))}else _=!0,y="nodata",o=o.concat(vr(t.serverSyncTree_,p.currentWriteId,!0))}qt(t.eventQueue_,n,o),o=[],_&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}oc(t,t.transactionQueueTree_);for(let f=0;f<s.length;f++)as(s[f]);rf(t,t.transactionQueueTree_)}function N0(t,e){let n,s=t.transactionQueueTree_;for(n=de(e);n!==null&&cs(s)===void 0;)s=Jh(s,n),e=Pe(e),n=de(e);return s}function P0(t,e){const n=[];return R0(t,e,n),n.sort((s,o)=>s.order-o.order),n}function R0(t,e,n){const s=cs(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);rc(e,o=>{R0(t,o,n)})}function oc(t,e){const n=cs(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,w0(e,n.length>0?n:void 0)}rc(e,s=>{oc(t,s)})}function sf(t,e){const n=Fo(N0(t,e)),s=Jh(t.transactionQueueTree_,e);return D2(s,o=>{Sd(t,o)}),Sd(t,s),E0(s,o=>{Sd(t,o)}),n}function Sd(t,e){const n=cs(e);if(n){const s=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(W(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(W(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(vr(t.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?w0(e,void 0):n.length=l+1,qt(t.eventQueue_,Fo(e),o);for(let u=0;u<s.length;u++)as(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function lP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mv=function(t,e){const n=cP(t),s=n.namespace;n.domain==="firebase.com"&&Un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yT();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new j_(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new xe(n.pathString)}},cP=function(t){let e="",n="",s="",o="",l="",u=!0,f="https",p=443;if(typeof t=="string"){let g=t.indexOf("//");g>=0&&(f=t.substring(0,g-1),t=t.substring(g+2));let _=t.indexOf("/");_===-1&&(_=t.length);let y=t.indexOf("?");y===-1&&(y=t.length),e=t.substring(0,Math.min(_,y)),_<y&&(o=aP(t.substring(_,y)));const w=lP(t.substring(Math.min(t.length,y)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const I=e.slice(0,g);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),n=e.substring(N+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uP=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=Fv.charAt(n%64),n=Math.floor(n/64);W(n===0,"Cannot push at time == 0");let u=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=Fv.charAt(e[o]);return W(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,s,o){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class hP{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return ce(this._path)?null:Ah(this._path)}get ref(){return new $n(this._repo,this._path)}get _queryIdentifier(){const e=Cv(this._queryParams),n=Th(e);return n==="{}"?"default":n}get _queryObject(){return Cv(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof of))return!1;const n=this._repo===e._repo,s=V_(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+tN(this._path)}}class $n extends of{constructor(e,n){super(e,n,new Lh,!1)}get parent(){const e=B_(this._path);return e===null?null:new $n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),s=Io(this.ref,e);return new xo(this._node.getChild(n),s,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new xo(o,Io(this.ref,s),Be)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function at(t,e){return t=Je(t),t._checkNotDeleted("ref"),e!==void 0?Io(t._root,e):t._root}function Io(t,e){return t=Je(t),de(t._path)===null?$2("child","path",e):I0("child","path",e),new $n(t._repo,We(t._path,e))}function af(t,e){t=Je(t),Zh("push",t._path),x0("push",e,t._path,!0);const n=k0(t._repo),s=uP(n),o=Io(t,s),l=Io(t,s);let u;return u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function pP(t){return Zh("remove",t._path),li(t,null)}function li(t,e){t=Je(t),Zh("set",t._path),x0("set",e,t._path,!1);const n=new Po;return tP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lf(t,e){V2("update",e,t._path);const n=new Po;return nP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ci(t){t=Je(t);const e=new fP(()=>{}),n=new cf(e);return eP(t._repo,t,n).then(s=>new xo(s,new $n(t._repo,t._path),t._queryParams.getIndex()))}class cf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new dP("value",this,new xo(e.snapshotNode,new $n(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hP(this,e,n):null}matches(e){return e instanceof cf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}f2($n);y2($n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="FIREBASE_DATABASE_EMULATOR_HOST",nh={};let gP=!1;function vP(t,e,n,s){const o=e.lastIndexOf(":"),l=e.substring(0,o),u=rs(l);t.repoInfo_=new j_(e,u,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function yP(t,e,n,s,o){let l=s||t.options.databaseURL;l===void 0&&(t.options.projectId||Un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let u=Mv(l,o),f=u.repoInfo,p;typeof process<"u"&&sv&&(p=sv[mP]),p?(l=`http://${p}?ns=${f.namespace}`,u=Mv(l,o),f=u.repoInfo):u.repoInfo.secure;const g=new PT(t.name,t.options,e);H2("Invalid Firebase Database URL",u),ce(u.path)||Un("Database URL must point to the root of a Firebase Database (not including a child path).");const _=wP(f,t,g,new NT(t,n));return new SP(_,t)}function _P(t,e){const n=nh[e];(!n||n[t.key]!==t)&&Un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iP(t),delete n[t.key]}function wP(t,e,n,s){let o=nh[e.name];o||(o={},nh[e.name]=o);let l=o[t.toURLString()];return l&&Un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new J2(t,gP,n,s),o[t.toURLString()]=l,l}class SP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(X2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $n(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_P(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Un("Cannot call "+e+" on a deleted database.")}}function EP(t=gh(),e){const n=ii(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=wC("database");s&&CP(n,...s)}return n}function CP(t,e,n,s={}){t=Je(t),t._checkNotDeleted("useEmulator");const o=`${e}:${n}`,l=t._repoInternal;if(t._instanceStarted){if(o===t._repoInternal.repoInfo_.host&&Cr(s,l.repoInfo_.emulatorOptions))return;Un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ll(ll.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:SC(s.mockUserToken,t.app.options.projectId);u=new ll(f)}rs(e)&&(ky(e),Ty("Database",!0)),vP(l,o,s,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){hT(ss),yn(new on("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return yP(s,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Gt(ov,av,t),Gt(ov,av,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xP();var IP="firebase",kP="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(IP,kP,"app");const A0="@firebase/installations",uf="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=1e4,j0=`w:${uf}`,O0="FIS_v2",TP="https://firebaseinstallations.googleapis.com/v1",NP=3600*1e3,PP="installations",RP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ri(PP,RP,AP);function L0(t){return t instanceof _n&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0({projectId:t}){return`${TP}/projects/${t}/installations`}function M0(t){return{token:t.token,requestStatus:2,expiresIn:jP(t.expiresIn),creationTime:Date.now()}}async function F0(t,e){const s=(await e.json()).error;return Zr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function U0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bP(t,{refreshToken:e}){const n=U0(t);return n.append("Authorization",OP(e)),n}async function z0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jP(t){return Number(t.replace("s","000"))}function OP(t){return`${O0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=D0(t),o=U0(t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const u={fid:n,authVersion:O0,appId:t.appId,sdkVersion:j0},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await z0(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:M0(g.authToken)}}else throw await F0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/^[cdef][\w-]{21}$/,rh="";function FP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UP(t);return MP.test(n)?n:rh}catch{return rh}}function UP(t){return DP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Map;function V0(t,e){const n=ac(t);$0(n,e),zP(n,e)}function $0(t,e){const n=B0.get(t);if(n)for(const s of n)s(e)}function zP(t,e){const n=WP();n&&n.postMessage({key:t,fid:e}),BP()}let qr=null;function WP(){return!qr&&"BroadcastChannel"in self&&(qr=new BroadcastChannel("[Firebase] FID Change"),qr.onmessage=t=>{$0(t.data.key,t.data.fid)}),qr}function BP(){B0.size===0&&qr&&(qr.close(),qr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="firebase-installations-database",$P=1,ei="firebase-installations-store";let Ed=null;function df(){return Ed||(Ed=Ly(VP,$P,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),Ed}async function Ll(t,e){const n=ac(t),o=(await df()).transaction(ei,"readwrite"),l=o.objectStore(ei),u=await l.get(n);return await l.put(e,n),await o.done,(!u||u.fid!==e.fid)&&V0(t,e.fid),e}async function H0(t){const e=ac(t),s=(await df()).transaction(ei,"readwrite");await s.objectStore(ei).delete(e),await s.done}async function lc(t,e){const n=ac(t),o=(await df()).transaction(ei,"readwrite"),l=o.objectStore(ei),u=await l.get(n),f=e(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&V0(t,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(t){let e;const n=await lc(t.appConfig,s=>{const o=HP(s),l=GP(t,o);return e=l.registrationPromise,l.installationEntry});return n.fid===rh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HP(t){const e=t||{fid:FP(),registrationStatus:0};return G0(e)}function GP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qP(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KP(t)}:{installationEntry:e}}async function qP(t,e){try{const n=await LP(t,e);return Ll(t.appConfig,n)}catch(n){throw L0(n)&&n.customData.serverCode===409?await H0(t.appConfig):await Ll(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KP(t){let e=await Uv(t.appConfig);for(;e.registrationStatus===1;)await W0(100),e=await Uv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await hf(t);return s||n}return e}function Uv(t){return lc(t,e=>{if(!e)throw Zr.create("installation-not-found");return G0(e)})}function G0(t){return YP(t)?{fid:t.fid,registrationStatus:0}:t}function YP(t){return t.registrationStatus===1&&t.registrationTime+b0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP({appConfig:t,heartbeatServiceProvider:e},n){const s=JP(t,n),o=bP(t,n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const u={installation:{sdkVersion:j0,appId:t.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await z0(()=>fetch(s,f));if(p.ok){const g=await p.json();return M0(g)}else throw await F0("Generate Auth Token",p)}function JP(t,{fid:e}){return`${D0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(t,e=!1){let n;const s=await lc(t.appConfig,l=>{if(!q0(l))throw Zr.create("not-registered");const u=l.authToken;if(!e&&eR(u))return l;if(u.requestStatus===1)return n=XP(t,e),l;{if(!navigator.onLine)throw Zr.create("app-offline");const f=nR(l);return n=ZP(t,f),f}});return n?await n:s.authToken}async function XP(t,e){let n=await zv(t.appConfig);for(;n.authToken.requestStatus===1;)await W0(100),n=await zv(t.appConfig);const s=n.authToken;return s.requestStatus===0?ff(t,e):s}function zv(t){return lc(t,e=>{if(!q0(e))throw Zr.create("not-registered");const n=e.authToken;return rR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZP(t,e){try{const n=await QP(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ll(t.appConfig,s),n}catch(n){if(L0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await H0(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ll(t.appConfig,s)}throw n}}function q0(t){return t!==void 0&&t.registrationStatus===2}function eR(t){return t.requestStatus===2&&!tR(t)}function tR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+NP}function nR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rR(t){return t.requestStatus===1&&t.requestTime+b0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t){const e=t,{installationEntry:n,registrationPromise:s}=await hf(e);return s?s.catch(console.error):ff(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e=!1){const n=t;return await oR(n),(await ff(n,e)).token}async function oR(t){const{registrationPromise:e}=await hf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){if(!t||!t.options)throw Cd("App Configuration");if(!t.name)throw Cd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Cd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cd(t){return Zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="installations",lR="installations-internal",cR=t=>{const e=t.getProvider("app").getImmediate(),n=aR(e),s=ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uR=t=>{const e=t.getProvider("app").getImmediate(),n=ii(e,K0).getImmediate();return{getId:()=>iR(n),getToken:o=>sR(n,o)}};function dR(){yn(new on(K0,cR,"PUBLIC")),yn(new on(lR,uR,"PRIVATE"))}dR();Gt(A0,uf);Gt(A0,uf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="analytics",hR="firebase_id",fR="origin",pR=60*1e3,mR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Kl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new ri("analytics","Analytics",gR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){if(!t.startsWith(pf)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return Pt.warn(e.message),""}return t}function Y0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _R(t,e){const n=yR("firebase-js-sdk-policy",{createScriptURL:vR}),s=document.createElement("script"),o=`${pf}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function wR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function SR(t,e,n,s,o,l){const u=s[o];try{if(u)await e[u];else{const p=(await Y0(n)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(f){Pt.error(f)}t("config",o,l)}async function ER(t,e,n,s,o){try{let l=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const f=await Y0(n);for(const p of u){const g=f.find(y=>y.measurementId===p),_=g&&e[g.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),t("event",s,o||{})}catch(l){Pt.error(l)}}function CR(t,e,n,s){async function o(l,...u){try{if(l==="event"){const[f,p]=u;await ER(t,e,n,f,p)}else if(l==="config"){const[f,p]=u;await SR(t,e,n,s,f,p)}else if(l==="consent"){const[f,p]=u;t("consent",f,p)}else if(l==="get"){const[f,p,g]=u;t("get",f,p,g)}else if(l==="set"){const[f]=u;t("set",f)}else t(l,...u)}catch(f){Pt.error(f)}}return o}function xR(t,e,n,s,o){let l=function(...u){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=CR(l,t,e,n),{gtagCore:l,wrappedGtag:window[o]}}function IR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=30,TR=1e3;class NR{constructor(e={},n=TR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Q0=new NR;function PR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RR(t){var e;const{appId:n,apiKey:s}=t,o={method:"GET",headers:PR(s)},l=mR.replace("{app-id}",n),u=await fetch(l,o);if(u.status!==200&&u.status!==304){let f="";try{const p=await u.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function AR(t,e=Q0,n){const{appId:s,apiKey:o,measurementId:l}=t.options;if(!s)throw Lt.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Lt.create("no-api-key")}const u=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new OR;return setTimeout(async()=>{f.abort()},pR),J0({appId:s,apiKey:o,measurementId:l},u,f,e)}async function J0(t,{throttleEndTimeMillis:e,backoffCount:n},s,o=Q0){var l;const{appId:u,measurementId:f}=t;try{await bR(s,e)}catch(p){if(f)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw p}try{const p=await RR(t);return o.deleteThrottleMetadata(u),p}catch(p){const g=p;if(!jR(g)){if(o.deleteThrottleMetadata(u),f)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:f};throw p}const _=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?Ag(n,o.intervalMillis,kR):Ag(n,o.intervalMillis),y={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return o.setThrottleMetadata(u,y),Pt.debug(`Calling attemptFetch again in ${_} millis`),J0(t,y,s,o)}}function bR(t,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(n,o);t.addEventListener(()=>{clearTimeout(l),s(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jR(t){if(!(t instanceof _n)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class OR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LR(t,e,n,s,o){if(o&&o.global){t("event",n,s);return}else{const l=await e,u=Object.assign(Object.assign({},s),{send_to:l});t("event",n,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(){if(Ry())try{await Ay()}catch(t){return Pt.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Pt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MR(t,e,n,s,o,l,u){var f;const p=AR(t);p.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Pt.error(I)),e.push(p);const g=DR().then(I=>{if(I)return s.getId()}),[_,y]=await Promise.all([p,g]);IR(l)||_R(l,_.measurementId),o("js",new Date);const w=(f=u==null?void 0:u.config)!==null&&f!==void 0?f:{};return w[fR]="firebase",w.update=!0,y!=null&&(w[hR]=y),o("config",_.measurementId,w),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.app=e}_delete(){return delete uo[this.app.options.appId],Promise.resolve()}}let uo={},Wv=[];const Bv={};let xd="dataLayer",UR="gtag",Vv,X0,$v=!1;function zR(){const t=[];if(Ny()&&t.push("This is a browser extension environment."),TC()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});Pt.warn(n.message)}}function WR(t,e,n){zR();const s=t.options.appId;if(!s)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(uo[s]!=null)throw Lt.create("already-exists",{id:s});if(!$v){wR(xd);const{wrappedGtag:l,gtagCore:u}=xR(uo,Wv,Bv,xd,UR);X0=l,Vv=u,$v=!0}return uo[s]=MR(t,Wv,Bv,e,Vv,xd,n),new FR(t)}function BR(t=gh()){t=Je(t);const e=ii(t,Dl);return e.isInitialized()?e.getImmediate():VR(t)}function VR(t,e={}){const n=ii(t,Dl);if(n.isInitialized()){const o=n.getImmediate();if(Cr(e,n.getOptions()))return o;throw Lt.create("already-initialized")}return n.initialize({options:e})}function $R(t,e,n,s){t=Je(t),LR(X0,uo[t.app.options.appId],e,n,s).catch(o=>Pt.error(o))}const Hv="@firebase/analytics",Gv="0.10.17";function HR(){yn(new on(Dl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return WR(s,o,n)},"PUBLIC")),yn(new on("analytics-internal",t,"PRIVATE")),Gt(Hv,Gv),Gt(Hv,Gv,"esm2017");function t(e){try{const n=e.getProvider(Dl).getImmediate();return{logEvent:(s,o,l)=>$R(n,s,o,l)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}HR();const GR={apiKey:"AIzaSyBlK_r-ieeCoVyYceCh1lyc8cgUcIM18a4",authDomain:"kgsjewel-98b89.firebaseapp.com",databaseURL:"https://kgsjewel-98b89-default-rtdb.firebaseio.com",projectId:"kgsjewel-98b89",storageBucket:"kgsjewel-98b89.firebasestorage.app",messagingSenderId:"740786421316",appId:"1:740786421316:web:928a95c1b2dc7bb79ac611",measurementId:"G-X3B2JLV6ZG"},mf=Dy(GR),lt=EP(mf),nl=uT(mf);typeof window<"u"&&BR(mf);const Z0=x.createContext();function Pr(){return x.useContext(Z0)}const qR=["admin1@gmail.com","admin2@gmail.com"];function KR({children:t}){const[e,n]=x.useState(null),[s,o]=x.useState("user"),[l,u]=x.useState(!0);function f(w){return qR.includes(w==null?void 0:w.toLowerCase())}async function p(w,I,N){const b=await GI(nl,w,I);return await YI(b.user,{displayName:N}),await li(at(lt,`users/${b.user.uid}`),{email:w,displayName:N,role:f(w)?"admin":"user",createdAt:Date.now()}),b.user}async function g(w,I){return(await qI(nl,w,I)).user}async function _(){return ZI(nl)}x.useEffect(()=>XI(nl,I=>{n(I),o(I&&f(I.email)?"admin":"user"),u(!1)}),[]);const y={currentUser:e,userRole:s,isAdmin:s==="admin",loading:l,register:p,login:g,logout:_};return h.jsx(Z0.Provider,{value:y,children:!l&&t})}const ew=x.createContext();function zo(){return x.useContext(ew)}function YR({children:t}){const[e,n]=x.useState(()=>{const _=localStorage.getItem("kgs_cart");return _?JSON.parse(_):[]});x.useEffect(()=>{localStorage.setItem("kgs_cart",JSON.stringify(e))},[e]);function s(_,y){n(w=>w.find(N=>N.id===_.id)?w.map(N=>N.id===_.id?{...N,quantity:N.quantity+1}:N):[...w,{..._,calculatedPrice:y,quantity:1}])}function o(_){n(y=>y.filter(w=>w.id!==_))}function l(_,y){if(y<=0){o(_);return}n(w=>w.map(I=>I.id===_?{...I,quantity:y}:I))}function u(){n([])}const f=e.reduce((_,y)=>_+y.calculatedPrice*y.quantity,0),p=e.reduce((_,y)=>_+y.quantity,0),g={cartItems:e,addToCart:s,removeFromCart:o,updateQuantity:l,clearCart:u,totalPrice:f,totalItems:p};return h.jsx(ew.Provider,{value:g,children:t})}function qv({children:t}){const{currentUser:e}=Pr();return e?t:h.jsx(Pd,{to:"/login",replace:!0})}function QR({children:t}){const{currentUser:e,isAdmin:n}=Pr();return e?n?t:h.jsx(Pd,{to:"/",replace:!0}):h.jsx(Pd,{to:"/login",replace:!0})}var tw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kv=jn.createContext&&jn.createContext(tw),JR=["attr","size","title"];function XR(t,e){if(t==null)return{};var n=ZR(t,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function ZR(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function Ml(){return Ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ml.apply(this,arguments)}function Yv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,s)}return n}function Fl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yv(Object(n),!0).forEach(function(s){eA(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yv(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function eA(t,e,n){return e=tA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tA(t){var e=nA(t,"string");return typeof e=="symbol"?e:e+""}function nA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nw(t){return t&&t.map((e,n)=>jn.createElement(e.tag,Fl({key:n},e.attr),nw(e.child)))}function be(t){return e=>jn.createElement(rA,Ml({attr:Fl({},t.attr)},e),nw(t.child))}function rA(t){var e=n=>{var{attr:s,size:o,title:l}=t,u=XR(t,JR),f=o||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),jn.createElement("svg",Ml({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,u,{className:p,style:Fl(Fl({color:t.color||n.color},n.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&jn.createElement("title",null,l),t.children)};return Kv!==void 0?jn.createElement(Kv.Consumer,null,n=>e(n)):e(tw)}function iA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(t)}function cl(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function sA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(t)}function oA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(t)}function Qv(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function aA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function lA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function cA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function uA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function ko(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(t)}function dA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(t)}function rw(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function Id(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"},child:[]},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"},child:[]},{tag:"polyline",attr:{points:"7 3 7 8 15 8"},child:[]}]})(t)}function hA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function Jv(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(t)}function Ul(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(t)}function iw(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(t)}function fA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(t)}function pA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function mA(t){return be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function gA(){const{currentUser:t,isAdmin:e,logout:n}=Pr(),{totalItems:s}=zo(),o=ni(),[l,u]=x.useState(!1),[f,p]=x.useState(!1),[g,_]=x.useState(!1),y=x.useRef(null);x.useEffect(()=>{const I=()=>u(window.scrollY>20);return window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)},[]),x.useEffect(()=>{const I=N=>{y.current&&!y.current.contains(N.target)&&_(!1)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]);const w=async()=>{await n(),_(!1),p(!1),o("/")};return h.jsxs(h.Fragment,{children:[h.jsx("nav",{className:`navbar ${l?"scrolled":""}`,children:h.jsxs("div",{className:"navbar-inner",children:[h.jsxs(ue,{to:"/",className:"navbar-brand",children:[h.jsx("div",{className:"logo-icon",children:"KGS"}),h.jsxs("div",{className:"brand-text",children:["K G S ",h.jsx("span",{children:"Jewelry"})]})]}),h.jsxs("div",{className:"navbar-links",children:[h.jsx(Ja,{to:"/",children:"Home"}),h.jsx(Ja,{to:"/products",children:"Collection"}),h.jsx(Ja,{to:"/sell-gold",children:"Sell Gold"}),e&&h.jsx(Ja,{to:"/admin",children:"Admin"})]}),h.jsxs("div",{className:"navbar-actions",children:[h.jsxs(ue,{to:"/cart",className:"icon-btn desktop-only",title:"Cart",children:[h.jsx(Ul,{}),s>0&&h.jsx("span",{className:"cart-count",children:s})]}),t?h.jsxs("div",{className:"user-menu",ref:y,children:[h.jsxs("button",{className:"user-menu-toggle",onClick:()=>_(!g),children:[h.jsx(pA,{}),h.jsx("span",{className:"desktop-only",children:t.displayName||"Account"})]}),g&&h.jsxs("div",{className:"user-dropdown",children:[h.jsxs(ue,{to:"/orders",onClick:()=>_(!1),children:[h.jsx(ko,{})," My Orders"]}),e&&h.jsxs(ue,{to:"/admin",onClick:()=>_(!1),children:[h.jsx(Jv,{})," Admin Panel"]}),h.jsx("div",{className:"divider"}),h.jsxs("button",{onClick:w,children:[h.jsx(Qv,{})," Logout"]})]})]}):h.jsx(ue,{to:"/login",className:"btn btn-primary btn-sm",children:"Login"}),h.jsx("button",{className:"mobile-toggle",onClick:()=>p(!f),children:f?h.jsx(mA,{}):h.jsx(cA,{})})]})]})}),h.jsxs("div",{className:`mobile-nav ${f?"open":""}`,children:[h.jsx(ue,{to:"/",onClick:()=>p(!1),children:"Home"}),h.jsx(ue,{to:"/products",onClick:()=>p(!1),children:"Collection"}),h.jsx(ue,{to:"/sell-gold",onClick:()=>p(!1),children:"Sell Gold"}),h.jsxs(ue,{to:"/cart",onClick:()=>p(!1),children:[h.jsx(Ul,{})," Cart ",s>0&&`(${s})`]}),t?h.jsxs(h.Fragment,{children:[h.jsxs(ue,{to:"/orders",onClick:()=>p(!1),children:[h.jsx(ko,{})," My Orders"]}),e&&h.jsxs(ue,{to:"/admin",onClick:()=>p(!1),children:[h.jsx(Jv,{})," Admin Panel"]}),h.jsxs("button",{onClick:w,children:[h.jsx(Qv,{})," Logout"]})]}):h.jsx(ue,{to:"/login",onClick:()=>p(!1),children:"Login"})]})]})}function vA(){return h.jsxs("footer",{className:"footer",children:[h.jsxs("div",{className:"footer-grid",children:[h.jsxs("div",{className:"footer-brand",children:[h.jsxs("div",{className:"brand-name",children:["K G S ",h.jsx("span",{children:"Jewelry"})]}),h.jsx("p",{children:"Crafting timeless elegance since generations. Premium 22K and 24K gold jewelry with expert craftsmanship and transparent pricing."})]}),h.jsxs("div",{children:[h.jsx("h4",{children:"Quick Links"}),h.jsxs("div",{className:"footer-links",children:[h.jsx(ue,{to:"/",children:"Home"}),h.jsx(ue,{to:"/products",children:"Collection"}),h.jsx(ue,{to:"/sell-gold",children:"Sell Gold"}),h.jsx(ue,{to:"/cart",children:"Cart"})]})]}),h.jsxs("div",{children:[h.jsx("h4",{children:"Categories"}),h.jsxs("div",{className:"footer-links",children:[h.jsx(ue,{to:"/products?category=ring",children:"Rings"}),h.jsx(ue,{to:"/products?category=chain",children:"Chains"}),h.jsx(ue,{to:"/products?category=necklace",children:"Necklaces"}),h.jsx(ue,{to:"/products?category=bangle",children:"Bangles"}),h.jsx(ue,{to:"/products?category=earring",children:"Earrings"})]})]}),h.jsxs("div",{className:"footer-contact",children:[h.jsx("h4",{children:"Contact Us"}),h.jsxs("p",{children:[h.jsx(lA,{})," K G S Jewelry, Main Road, Tamil Nadu, India"]}),h.jsxs("p",{children:[h.jsx(dA,{})," +91 98765 43210"]}),h.jsxs("p",{children:[h.jsx(aA,{})," contact@kgsjewelry.com"]})]})]}),h.jsx("div",{className:"footer-bottom",children:h.jsxs("p",{children:["© ",new Date().getFullYear()," K G S Jewelry. All rights reserved."]})})]})}function zn(t){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m35.42 188.21 207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75zM48 176h416"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m400 64-48 112-96-128M112 64l48 112 96-128m0 400-96-272m96 272 96-272"},child:[]}]})(t)}function Xv(t){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M369.4 33.6c-12.3.3-25.6 5.1-38.8 15L341.4 63c14.4-10.8 26.5-12.8 35.9-10.7 9.3 2.1 16.6 8.5 20.5 17.2 7.9 17.4 3.4 43.3-33.1 57.9l-5.7 2.3v45.1h18v-33.2c38.7-18.3 48.8-54.1 37.2-79.5-6.1-13.4-17.8-24-33-27.4-3.8-.8-7.7-1.2-11.8-1.1zm-224 .04c-12.3.32-25.6 5.07-38.8 14.96L117.4 63c14.4-10.81 26.5-12.77 35.9-10.67 9.3 2.1 16.6 8.51 20.5 17.19 7.9 17.37 3.4 43.28-33.1 57.88l-5.7 2.3v45.1h18v-33.2c38.7-18.3 48.8-54.1 37.2-79.52-6.1-13.32-17.8-23.91-33-27.31-3.8-.85-7.7-1.24-11.8-1.13zM89 192.8v30h110v-30H89zm224 0v30h110v-30H313zm-187.7 48l-55.6 69.5L144 496l74.3-185.7-55.6-69.5h-37.4zm224 0l-55.6 69.5L368 496l74.3-185.7-55.6-69.5h-37.4zM135 257.4v31.4l-31.4 7.8 31.4-39.2zm18 0l31.3 39.2-31.3-7.8v-31.4zm206 0v31.4l-31.4 7.8 31.4-39.2zm18 0l31.3 39.2-31.3-7.8v-31.4zm-242 49.9v117.8L92.2 318l42.8-10.7zm18 0l42.8 10.7L153 425.1V307.3zm206 0v117.8L316.2 318l42.8-10.7zm18 0l42.8 10.7L377 425.1V307.3z"},child:[]}]})(t)}function yA(t){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M191.02 25.346l-22.9 34.35h30.714l22.9-34.35H191.02zm52.347 0l-22.898 34.35h71.06l-22.897-34.35h-25.266zm46.9 0l22.9 34.35h30.714l-22.9-34.35h-30.714zm-117.234 52.35l50.115 50.115-25.058-50.115h-25.057zm45.182 0L256 153.265l37.785-75.57h-75.57zm95.695 0l-25.058 50.115 50.115-50.115H313.91zm-134.435 31.898C109.163 139.5 59.693 209.29 59.693 290.348c0 108.185 88.122 196.306 196.307 196.306 108.185 0 196.307-88.12 196.307-196.306 0-81.057-49.47-150.848-119.782-180.754l-30.517 30.517c64.397 19.592 111.037 79.292 111.037 150.238 0 86.966-70.08 157.045-157.045 157.045-86.966 0-157.045-70.08-157.045-157.045 0-70.946 46.64-130.646 111.037-150.237l-30.517-30.516z"},child:[]}]})(t)}function _A(t){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M471.1 30.58l17.8 2.84S476 114.1 448.1 204.9c5.4 4.6 8.9 11.5 8.9 19.1 0 13.2-10.5 24.2-23.5 25-18 50.4-40.6 100.6-68.8 139.3-9.1 12.5-18.8 23.8-29.2 33.6-3.9-4.7-8.9-8.6-14.5-11.2 10.2-9.1 19.9-20.2 29.2-33 26.4-36.2 48.5-84.9 66.1-134.3-5.7-4.6-9.3-11.6-9.3-19.4 0-13.4 10.8-24.4 24-25 27.4-89 40.1-168.42 40.1-168.42zm-430.19 0S53.71 110 81.01 199c13.2.5 23.99 11.6 23.99 25 0 7.8-3.7 14.8-9.29 19.4 17.59 49.4 39.69 98.1 66.09 134.3 9.3 12.8 19 23.9 29.2 33-5.6 2.6-10.6 6.5-14.5 11.2-10.4-9.8-20.1-21.1-29.2-33.6-28.2-38.7-50.69-88.9-68.79-139.3-13-.8-23.5-11.8-23.5-25 0-7.6 3.5-14.5 8.9-19.1-27.9-90.8-40.8-171.48-40.8-171.48zM407.1 62.52l17.8 2.96S417 113.4 393 162.2V208h-18v-14.5c-9.6 14.3-20.8 27.9-34.1 39.3-3.8 3.2-7.8 6.3-11.9 9.2v46h-18v-35.5c-13.8 6.7-29.2 11-46 12.2V304h-18v-39.3c-16.8-1.2-32.2-5.5-46-12.2V288h-18v-46c-4.1-2.9-8.1-6-11.9-9.2-13.3-11.4-24.5-25-34.1-39.3V208h-18v-45.8c-23.99-48.8-31.89-96.72-31.89-96.72l17.79-2.96s7.9 46.88 31.2 93.48c11.6 23.3 27 46.3 46.8 63.2 19.7 16.9 43.3 27.8 73.1 27.8 29.8 0 53.4-10.9 73.1-27.8 19.8-16.9 35.2-39.9 46.8-63.2 23.3-46.6 31.2-93.48 31.2-93.48zM304 425c12.8 0 23 10.2 23 23s-10.2 23-23 23c-2.6 0-5.1-.4-7.4-1.2.2-1.9.4-3.8.4-5.8 0-11.3-4.6-21.5-12.1-28.9C289 429 296 425 304 425zm-96 0c8 0 15 4 19.1 10.1-7.5 7.4-12.1 17.6-12.1 28.9 0 2 .2 3.9.4 5.8-2.3.8-4.8 1.2-7.4 1.2-12.8 0-23-10.2-23-23s10.2-23 23-23zm48 16c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23z"},child:[]}]})(t)}function Zv(t){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(t)}const wA="goldapi-18qrwqsmlxk4cqg-io",SA="/goldapi/XAU/INR",EA="/goldprice/dbXRates/INR";let Mi=null,no=0;const CA=600*1e3;async function xA(){const t=await fetch(SA,{headers:{"x-access-token":wA,"Content-Type":"application/json"},signal:AbortSignal.timeout(1e4)});if(!t.ok){const n=await t.text().catch(()=>"");throw new Error(`GoldAPI.io HTTP ${t.status}: ${n}`)}const e=await t.json();if(e.price_gram_24k&&e.price_gram_22k)return{"24k":Math.round(e.price_gram_24k)+1e3,"22k":Math.round(e.price_gram_22k)+1e3,"21k":e.price_gram_21k?Math.round(e.price_gram_21k):null,"18k":e.price_gram_18k?Math.round(e.price_gram_18k):null,source:"goldapi.io",currency:e.currency||"INR"};throw new Error("GoldAPI.io returned invalid data")}async function IA(){const t=await fetch(EA,{headers:{Accept:"application/json"},signal:AbortSignal.timeout(8e3)});if(!t.ok)throw new Error(`GoldPrice.org HTTP ${t.status}`);const e=await t.json();if(e.items&&e.items.length>0){const s=e.items[0].xauPrice/31.1035;return{"24k":Math.round(s),"22k":Math.round(s*(22/24)),source:"goldprice.org"}}throw new Error("Invalid data from GoldPrice.org")}async function To(){if(Mi&&Date.now()-no<CA)return Mi;const t=await ow();if(t!=null&&t.manualOverride)return Mi=t,no=Date.now(),t;const e=[{name:"GoldAPI.io",fn:xA},{name:"GoldPrice.org",fn:IA}];for(const n of e)try{console.log(`⏳ Fetching gold rate from ${n.name}...`);const s=await n.fn();if(s["24k"]<5e3||s["24k"]>25e3){console.warn(`⚠️ ${n.name} returned suspicious rate: ₹${s["24k"]}/g`);continue}const o={"24k":s["24k"],"22k":s["22k"],"21k":s["21k"]||null,"18k":s["18k"]||null,lastUpdated:Date.now(),source:s.source};return console.log(`✅ Live gold: 24K ₹${o["24k"]}/g • 22K ₹${o["22k"]}/g (${n.name})`),Mi=o,no=Date.now(),await sw(o),o}catch(s){console.warn(`❌ ${n.name} failed:`,s.message)}return t&&t["24k"]>0&&t.source!=="fallback"?(console.warn("⚠️ Using previously stored rates from Firebase"),Mi=t,no=Date.now(),t):{"24k":7800,"22k":7150,lastUpdated:Date.now(),source:"fallback"}}async function sw(t){try{await li(at(lt,"goldRates"),t)}catch(e){console.error("Failed to save gold rates:",e)}}async function ow(){try{const t=await ci(at(lt,"goldRates"));return t.exists()?t.val():null}catch(t){return console.error("Failed to get stored gold rates:",t),null}}async function kA(t,e){const n={"24k":Number(t),"22k":Number(e),lastUpdated:Date.now(),manualOverride:!0,source:"admin-manual"};return Mi=n,no=Date.now(),await sw(n),n}async function Zi(){try{const t=await ci(at(lt,"silverRates"));return t.exists()?t.val():null}catch(t){return console.error("Failed to get silver rates:",t),null}}async function TA(t,e){const n={999:Number(t),925:Number(e),lastUpdated:Date.now(),source:"admin-manual"};try{await li(at(lt,"silverRates"),n)}catch(s){console.error("Failed to save silver rates:",s)}return n}function ih(t,e,n,s,o){const u=t*(e+n)+s,f=u*o/100;return Math.round(u+f)}function zl(t,e,n){if(t.metalType==="silver"){const s=t.silverPurity||"925";return(n==null?void 0:n[s])||0}return t.goldType==="24K"?(e==null?void 0:e["24k"])||0:(e==null?void 0:e["22k"])||0}function aw({product:t,goldRates:e,silverRates:n}){const{addToCart:s}=zo(),o=zl(t,e,n),l=ih(o,t.weightInGrams||0,t.wastageInGrams||0,t.makingCharge||0,t.taxPercentage||0),u=t.metalType!=="silver",f=u?t.goldType||"22K":t.silverPurity==="999"?"999 Fine":"925 Sterling",p=g=>{g.preventDefault(),g.stopPropagation(),s(t,l)};return h.jsxs(ue,{to:`/product/${t.id}`,className:"product-card",children:[h.jsxs("div",{className:"product-card-image",children:[t.imageURL?h.jsx("img",{src:t.imageURL,alt:t.name,loading:"lazy"}):h.jsx("div",{className:"no-image-placeholder",children:h.jsx(zn,{})}),h.jsx("span",{className:`badge ${u?"badge-gold":"badge-silver"} gold-badge`,children:u?"🥇 Gold":"🥈 Silver"})]}),h.jsxs("div",{className:"product-card-body",children:[h.jsx("span",{className:"category-label",children:t.category}),h.jsx("h3",{children:t.name}),h.jsxs("span",{className:"weight-info",children:[t.weightInGrams,"g • ",f]}),h.jsxs("div",{className:"product-card-footer",children:[h.jsxs("span",{className:"price",children:["₹",l.toLocaleString("en-IN")]}),h.jsx("button",{className:"add-btn",onClick:p,title:"Add to Cart",children:h.jsx(rw,{})})]})]})]})}const NA={display:"flex",gap:"20px",flexWrap:"wrap"},sh={background:"linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",borderRadius:"12px",padding:"20px 28px",color:"#fff",flex:"1",minWidth:"150px",position:"relative",overflow:"hidden"},PA={...sh,background:"linear-gradient(135deg, #2D2D3D 0%, #3D3D4D 100%)"},oh={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, transparent 0%, rgba(183,110,121,0.08) 50%, transparent 100%)",pointerEvents:"none"},RA={...oh,background:"linear-gradient(135deg, transparent 0%, rgba(192,192,192,0.08) 50%, transparent 100%)"};function lw({goldRates:t,silverRates:e,compact:n}){const s=l=>!l||l===0?"—":`₹${Number(l).toLocaleString("en-IN")}`,o=t!=null&&t.lastUpdated?new Date(t.lastUpdated).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}):null;return n?h.jsxs("div",{style:{display:"flex",gap:"12px",fontSize:"0.85rem",flexWrap:"wrap"},children:[h.jsxs("span",{children:["🥇 24K: ",h.jsx("strong",{children:s(t==null?void 0:t["24k"])}),"/g"]}),h.jsxs("span",{children:["22K: ",h.jsx("strong",{children:s(t==null?void 0:t["22k"])}),"/g"]}),e&&h.jsxs("span",{children:["🥈 Silver: ",h.jsx("strong",{children:s(e==null?void 0:e["925"])}),"/g"]})]}):h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"},children:[h.jsx("div",{style:{whiteSpace:"nowrap"},children:h.jsx("span",{style:{fontSize:"1.1rem",fontWeight:700,fontFamily:"var(--font-display)"},children:"📊 Live Rates (India)"})}),h.jsxs("div",{style:{...NA,flex:1},children:[h.jsxs("div",{style:sh,children:[h.jsx("div",{style:oh}),h.jsx("div",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1px",color:"#C9A96E",marginBottom:"6px"},children:"24K Gold"}),h.jsx("div",{style:{fontSize:"1.5rem",fontFamily:"var(--font-display)",fontWeight:700,color:"#C9A96E"},children:s(t==null?void 0:t["24k"])}),h.jsx("div",{style:{fontSize:"0.72rem",color:"#888"},children:"per gram"})]}),h.jsxs("div",{style:sh,children:[h.jsx("div",{style:oh}),h.jsx("div",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1px",color:"#C9A96E",marginBottom:"6px"},children:"22K Gold"}),h.jsx("div",{style:{fontSize:"1.5rem",fontFamily:"var(--font-display)",fontWeight:700,color:"#C9A96E"},children:s(t==null?void 0:t["22k"])}),h.jsx("div",{style:{fontSize:"0.72rem",color:"#888"},children:"per gram"})]}),e&&h.jsxs("div",{style:PA,children:[h.jsx("div",{style:RA}),h.jsx("div",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1px",color:"#C0C0C0",marginBottom:"6px"},children:"925 Silver"}),h.jsx("div",{style:{fontSize:"1.5rem",fontFamily:"var(--font-display)",fontWeight:700,color:"#C0C0C0"},children:s(e==null?void 0:e["925"])}),h.jsx("div",{style:{fontSize:"0.72rem",color:"#888"},children:"per gram"})]})]}),o&&h.jsxs("div",{style:{width:"100%",textAlign:"right",fontSize:"0.75rem",color:"#999",marginTop:"-8px"},children:["🔴 Live • Updated: ",o,t.manualOverride&&" (Manual Override)",t.source&&!t.manualOverride&&` • via ${t.source}`]})]})}const Wo="products";async function AA(t){try{const e=at(lt,Wo),n=af(e),s={...t,id:n.key,createdAt:Date.now()};return await li(n,s),s}catch(e){throw console.error("Error adding product:",e),e}}async function gf(){try{const t=at(lt,Wo),e=await ci(t);if(e.exists()){const n=e.val();return Object.values(n)}return[]}catch(t){throw console.error("Error fetching products:",t),t}}async function bA(t){try{const e=at(lt,`${Wo}/${t}`),n=await ci(e);return n.exists()?n.val():null}catch(e){throw console.error("Error fetching product:",e),e}}async function jA(t,e){try{const n=at(lt,`${Wo}/${t}`);return await lf(n,e),{id:t,...e}}catch(n){throw console.error("Error updating product:",n),n}}async function OA(t){try{const e=at(lt,`${Wo}/${t}`);return await pP(e),t}catch(e){throw console.error("Error deleting product:",e),e}}const LA=[{name:"Rings",key:"ring",icon:h.jsx(yA,{})},{name:"Chains",key:"chain",icon:h.jsx(zn,{})},{name:"Necklaces",key:"necklace",icon:h.jsx(_A,{})},{name:"Bangles",key:"bangle",icon:h.jsx(Xv,{})},{name:"Earrings",key:"earring",icon:h.jsx(Xv,{})}];function DA(){const[t,e]=x.useState(null),[n,s]=x.useState(null),[o,l]=x.useState([]),[u,f]=x.useState(!0);x.useEffect(()=>{async function g(){try{const[y,w,I]=await Promise.all([To(),Zi(),gf()]);e(y),s(w),l(I)}catch(y){console.error("Error loading home data:",y)}finally{f(!1)}}g();const _=setInterval(async()=>{try{const[y,w]=await Promise.all([To(),Zi()]);e(y),s(w)}catch{console.warn("Rate refresh failed")}},600*1e3);return()=>clearInterval(_)},[]);const p=o.slice(0,8);return h.jsxs("div",{children:[h.jsx("section",{className:"hero",children:h.jsxs("div",{className:"hero-content",children:[h.jsxs("div",{className:"hero-text",children:[h.jsx("span",{className:"tagline",children:"✦ Premium Jewelry Since 1990"}),h.jsxs("h1",{children:["Timeless ",h.jsx("span",{className:"highlight",children:"Elegance"})," Crafted in Gold & Silver"]}),h.jsx("p",{children:"Discover our exquisite collection of handcrafted gold and silver jewelry. Every piece tells a story of tradition, artistry, and unmatched quality."}),h.jsxs("div",{className:"hero-buttons",children:[h.jsxs(ue,{to:"/products",className:"btn btn-primary btn-lg",children:["Explore Collection ",h.jsx(cl,{})]}),h.jsx(ue,{to:"/sell-gold",className:"btn btn-outline btn-lg",style:{borderColor:"#fff",color:"#fff"},children:"Sell Gold & Silver"})]})]}),h.jsx("div",{className:"hero-visual",children:h.jsx("div",{className:"hero-diamond",children:h.jsx(zn,{className:"icon"})})})]})}),h.jsx("section",{className:"gold-rates-section",children:h.jsx("div",{className:"container",children:h.jsx(lw,{goldRates:t,silverRates:n})})}),h.jsx("section",{className:"categories-section",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"section-title",children:[h.jsx("div",{className:"divider"}),h.jsx("h2",{children:"Shop by Category"}),h.jsx("p",{children:"Explore our curated collections of fine jewelry"})]}),h.jsx("div",{className:"categories-grid",children:LA.map(g=>h.jsxs(ue,{to:`/products?category=${g.key}`,className:"category-card",children:[h.jsx("div",{className:"cat-icon",children:g.icon}),h.jsx("h3",{children:g.name})]},g.key))})]})}),h.jsx("section",{className:"featured-section",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"section-title",children:[h.jsx("div",{className:"divider"}),h.jsx("h2",{children:"Featured Collection"}),h.jsx("p",{children:"Our most loved pieces, handpicked for you"})]}),u?h.jsx("div",{className:"spinner-overlay",children:h.jsx("div",{className:"spinner"})}):p.length>0?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"products-grid",children:p.map(g=>h.jsx(aw,{product:g,goldRates:t,silverRates:n},g.id))}),h.jsx("div",{style:{textAlign:"center",marginTop:"48px"},children:h.jsxs(ue,{to:"/products",className:"btn btn-outline",children:["View All Collection ",h.jsx(cl,{})]})})]}):h.jsxs("div",{style:{textAlign:"center",padding:"60px 0",color:"var(--text-muted)"},children:[h.jsx(zn,{style:{fontSize:"3rem",marginBottom:"16px",color:"var(--rose-gold-light)"}}),h.jsx("p",{children:"No products available yet. Check back soon!"})]})]})}),h.jsx("section",{className:"cta-section",children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{children:"Have Old Gold or Silver to Sell?"}),h.jsx("p",{children:"Get the best value for your precious metals with our transparent HUID-based pricing"}),h.jsxs(ue,{to:"/sell-gold",className:"btn btn-gold btn-lg",children:["Sell Your Gold & Silver ",h.jsx(cl,{})]})]})})]})}const MA=["all","ring","chain","necklace","bangle","earring","pendant","bracelet"],FA=["all","gold","silver"];function UA(){const[t]=SE(),e=t.get("category")||"all",n=t.get("metal")||"all",[s,o]=x.useState([]),[l,u]=x.useState(null),[f,p]=x.useState(null),[g,_]=x.useState(!0),[y,w]=x.useState(""),[I,N]=x.useState(e),[b,A]=x.useState(n),[G,K]=x.useState("newest");x.useEffect(()=>{async function j(){try{const[J,ie,_e]=await Promise.all([To(),Zi(),gf()]);u(J),p(ie),o(_e)}catch(J){console.error("Error loading products:",J)}finally{_(!1)}}j()},[]),x.useEffect(()=>{const j=t.get("category");j&&N(j);const J=t.get("metal");J&&A(J)},[t]);const O=x.useMemo(()=>{let j=[...s];if(y.trim()){const J=y.toLowerCase();j=j.filter(ie=>{var _e,Ie,Oe;return((_e=ie.name)==null?void 0:_e.toLowerCase().includes(J))||((Ie=ie.description)==null?void 0:Ie.toLowerCase().includes(J))||((Oe=ie.category)==null?void 0:Oe.toLowerCase().includes(J))})}return I!=="all"&&(j=j.filter(J=>J.category===I)),b!=="all"&&(j=j.filter(J=>(J.metalType||"gold")===b)),G==="price-low"||G==="price-high"?j.sort((J,ie)=>{const _e=zl(J,l,f),Ie=zl(ie,l,f),Oe=ih(_e,J.weightInGrams||0,J.wastageInGrams||0,J.makingCharge||0,J.taxPercentage||0),Fe=ih(Ie,ie.weightInGrams||0,ie.wastageInGrams||0,ie.makingCharge||0,ie.taxPercentage||0);return G==="price-low"?Oe-Fe:Fe-Oe}):G==="weight"?j.sort((J,ie)=>(J.weightInGrams||0)-(ie.weightInGrams||0)):j.sort((J,ie)=>(ie.createdAt||0)-(J.createdAt||0)),j},[s,y,I,b,G,l,f]);return h.jsx("div",{className:"products-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"page-header",children:[h.jsx("h1",{children:"Our Collection"}),h.jsx("p",{children:"Discover exquisite gold & silver jewelry crafted with perfection"})]}),h.jsxs("div",{className:"filters-bar",children:[h.jsxs("div",{style:{position:"relative",flex:1,minWidth:"200px"},children:[h.jsx(hA,{style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)"}}),h.jsx("input",{type:"text",className:"search-input",placeholder:"Search jewelry...",value:y,onChange:j=>w(j.target.value),style:{paddingLeft:"36px"}})]}),h.jsx("select",{value:I,onChange:j=>N(j.target.value),children:MA.map(j=>h.jsx("option",{value:j,children:j==="all"?"All Categories":j.charAt(0).toUpperCase()+j.slice(1)},j))}),h.jsx("select",{value:b,onChange:j=>A(j.target.value),children:FA.map(j=>h.jsx("option",{value:j,children:j==="all"?"All Metals":j.charAt(0).toUpperCase()+j.slice(1)},j))}),h.jsxs("select",{value:G,onChange:j=>K(j.target.value),children:[h.jsx("option",{value:"newest",children:"Newest First"}),h.jsx("option",{value:"price-low",children:"Price: Low to High"}),h.jsx("option",{value:"price-high",children:"Price: High to Low"}),h.jsx("option",{value:"weight",children:"Weight"})]}),h.jsxs("span",{className:"result-count",children:[O.length," items"]})]}),g?h.jsx("div",{className:"spinner-overlay",children:h.jsx("div",{className:"spinner"})}):O.length>0?h.jsx("div",{className:"products-grid",children:O.map(j=>h.jsx(aw,{product:j,goldRates:l,silverRates:f},j.id))}):h.jsxs("div",{className:"products-empty",children:[h.jsx(zn,{}),h.jsx("h3",{children:"No products found"}),h.jsx("p",{children:"Try adjusting your filters or search terms"})]})]})})}function zA(){const{id:t}=HS(),{addToCart:e}=zo(),[n,s]=x.useState(null),[o,l]=x.useState(null),[u,f]=x.useState(null),[p,g]=x.useState(!0);if(x.useEffect(()=>{async function O(){try{const[j,J,ie]=await Promise.all([bA(t),To(),Zi()]);s(j),l(J),f(ie)}catch(j){console.error("Error loading product:",j)}finally{g(!1)}}O()},[t]),p)return h.jsx("div",{className:"spinner-overlay",style:{minHeight:"60vh"},children:h.jsx("div",{className:"spinner"})});if(!n)return h.jsxs("div",{className:"container page",style:{textAlign:"center"},children:[h.jsx("h2",{children:"Product not found"}),h.jsx(ue,{to:"/products",className:"btn btn-primary",style:{marginTop:"16px"},children:"Back to Collection"})]});const _=n.metalType!=="silver",y=zl(n,o,u),w=y*((n.weightInGrams||0)+(n.wastageInGrams||0)),I=w+(n.makingCharge||0),N=I*(n.taxPercentage||0)/100,b=Math.round(I+N),A=_?"Gold":"Silver",G=_?n.goldType||"22K":n.silverPurity==="999"?"999 Fine Silver":"925 Sterling Silver",K=()=>{e(n,b),ke.success(`${n.name} added to cart!`)};return h.jsx("div",{className:"product-detail",children:h.jsxs("div",{className:"container",children:[h.jsx("div",{style:{marginBottom:"24px"},children:h.jsxs(ue,{to:"/products",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"var(--rose-gold)",fontSize:"0.9rem"},children:[h.jsx(iA,{})," Back to Collection"]})}),h.jsxs("div",{className:"product-detail-grid",children:[h.jsx("div",{className:"product-image-section",children:h.jsx("div",{className:"product-main-image",children:n.imageURL?h.jsx("img",{src:n.imageURL,alt:n.name}):h.jsx(zn,{className:"placeholder-icon"})})}),h.jsxs("div",{className:"product-info-section",children:[h.jsxs("div",{className:"breadcrumb",children:[h.jsx(ue,{to:"/",children:"Home"})," / ",h.jsx(ue,{to:"/products",children:"Collection"})," / ",h.jsx("span",{children:n.name})]}),h.jsx("h1",{children:n.name}),h.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[h.jsx("span",{className:`badge ${_?"badge-gold":"badge-silver"} gold-type-badge`,children:_?"🥇 Gold":"🥈 Silver"}),h.jsx("span",{className:"badge badge-gold gold-type-badge",children:G})]}),h.jsx("p",{className:"description",children:n.description||`A beautiful piece of ${A.toLowerCase()} jewelry crafted with precision and care.`}),h.jsxs("div",{className:"specs-grid",children:[h.jsxs("div",{className:"spec-item",children:[h.jsx("div",{className:"label",children:"Weight"}),h.jsxs("div",{className:"value",children:[n.weightInGrams,"g"]})]}),h.jsxs("div",{className:"spec-item",children:[h.jsx("div",{className:"label",children:"Metal"}),h.jsx("div",{className:"value",children:A})]}),h.jsxs("div",{className:"spec-item",children:[h.jsx("div",{className:"label",children:"Purity"}),h.jsx("div",{className:"value",children:G})]}),h.jsxs("div",{className:"spec-item",children:[h.jsx("div",{className:"label",children:"Category"}),h.jsx("div",{className:"value",style:{textTransform:"capitalize"},children:n.category})]}),h.jsxs("div",{className:"spec-item",children:[h.jsx("div",{className:"label",children:"Wastage"}),h.jsxs("div",{className:"value",children:[n.wastageInGrams,"g"]})]})]}),h.jsxs("div",{className:"price-breakdown",children:[h.jsx("h3",{children:"Price Breakdown"}),h.jsxs("div",{className:"price-row",children:[h.jsxs("span",{children:[A," Rate (",G,")"]}),h.jsxs("span",{children:["₹",y.toLocaleString("en-IN"),"/g"]})]}),h.jsxs("div",{className:"price-row",children:[h.jsx("span",{children:"Weight + Wastage"}),h.jsxs("span",{children:[n.weightInGrams,"g + ",n.wastageInGrams,"g = ",(n.weightInGrams+n.wastageInGrams).toFixed(2),"g"]})]}),h.jsxs("div",{className:"price-row",children:[h.jsxs("span",{children:[A," Cost"]}),h.jsxs("span",{children:["₹",Math.round(w).toLocaleString("en-IN")]})]}),h.jsxs("div",{className:"price-row",children:[h.jsx("span",{children:"Making Charge"}),h.jsxs("span",{children:["₹",(n.makingCharge||0).toLocaleString("en-IN")]})]}),h.jsxs("div",{className:"price-row",children:[h.jsxs("span",{children:["Tax (",n.taxPercentage||0,"%)"]}),h.jsxs("span",{children:["₹",Math.round(N).toLocaleString("en-IN")]})]}),h.jsxs("div",{className:"price-row total",children:[h.jsx("span",{children:"Total"}),h.jsxs("span",{children:["₹",b.toLocaleString("en-IN")]})]})]}),h.jsx("div",{className:"add-to-cart-section",children:h.jsxs("button",{className:"btn btn-primary btn-lg",onClick:K,style:{flex:1},children:[h.jsx(Ul,{})," Add to Cart"]})})]})]})]})})}function WA(){const{cartItems:t,removeFromCart:e,updateQuantity:n,totalPrice:s,totalItems:o}=zo();return t.length===0?h.jsx("div",{className:"cart-page",children:h.jsx("div",{className:"container",children:h.jsxs("div",{className:"cart-empty",children:[h.jsx(Ul,{}),h.jsx("h2",{children:"Your cart is empty"}),h.jsx("p",{children:"Browse our collection and add your favorite pieces"}),h.jsx(ue,{to:"/products",className:"btn btn-primary",style:{marginTop:"20px"},children:"Explore Collection"})]})})}):h.jsx("div",{className:"cart-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("h1",{children:["Shopping Cart (",o," items)"]}),h.jsxs("div",{className:"cart-layout",children:[h.jsx("div",{className:"cart-items",children:t.map(l=>h.jsxs("div",{className:"cart-item",children:[h.jsx("div",{className:"cart-item-image",children:l.imageURL?h.jsx("img",{src:l.imageURL,alt:l.name}):h.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsx(zn,{style:{fontSize:"2rem",color:"var(--rose-gold-light)"}})})}),h.jsxs("div",{className:"cart-item-info",children:[h.jsx("h3",{children:l.name}),h.jsxs("div",{className:"item-meta",children:[l.weightInGrams,"g • ",l.goldType," • ",l.category]}),h.jsxs("div",{className:"item-price",children:["₹",l.calculatedPrice.toLocaleString("en-IN")]})]}),h.jsxs("div",{className:"cart-item-actions",children:[h.jsxs("div",{className:"qty-controls",children:[h.jsx("button",{onClick:()=>n(l.id,l.quantity-1),children:h.jsx(uA,{})}),h.jsx("span",{children:l.quantity}),h.jsx("button",{onClick:()=>n(l.id,l.quantity+1),children:h.jsx(rw,{})})]}),h.jsx("button",{className:"remove-btn",onClick:()=>e(l.id),children:h.jsx(iw,{})})]})]},l.id))}),h.jsxs("div",{className:"cart-summary",children:[h.jsx("h3",{children:"Order Summary"}),t.map(l=>h.jsxs("div",{className:"summary-row",children:[h.jsxs("span",{children:[l.name," × ",l.quantity]}),h.jsxs("span",{children:["₹",(l.calculatedPrice*l.quantity).toLocaleString("en-IN")]})]},l.id)),h.jsxs("div",{className:"summary-row total",children:[h.jsx("span",{children:"Total"}),h.jsxs("span",{children:["₹",s.toLocaleString("en-IN")]})]}),h.jsxs(ue,{to:"/checkout",className:"btn btn-primary btn-lg",style:{width:"100%",marginTop:"24px"},children:["Checkout ",h.jsx(cl,{})]})]})]})]})})}const vf="orders";async function BA(t){try{const e=at(lt,vf),n=af(e),s={...t,orderId:n.key,status:"Placed",trackingId:"",createdAt:Date.now()};return await li(n,s),s}catch(e){throw console.error("Error creating order:",e),e}}async function cw(){try{const t=at(lt,vf),e=await ci(t);return e.exists()?Object.values(e.val()):[]}catch(t){throw console.error("Error fetching orders:",t),t}}async function VA(t){try{return(await cw()).filter(n=>n.userId===t)}catch(e){throw console.error("Error fetching user orders:",e),e}}async function $A(t,e,n=""){try{const s=at(lt,`${vf}/${t}`);return await lf(s,{status:e,trackingId:n,updatedAt:Date.now()}),{orderId:t,status:e,trackingId:n}}catch(s){throw console.error("Error updating order status:",s),s}}function HA(){const{cartItems:t,totalPrice:e,clearCart:n}=zo(),{currentUser:s}=Pr(),o=ni(),[l,u]=x.useState({name:(s==null?void 0:s.displayName)||"",phone:"",address:"",pincode:""}),[f,p]=x.useState(!1),g=y=>{u({...l,[y.target.name]:y.target.value})},_=async y=>{if(y.preventDefault(),!l.name||!l.phone||!l.address||!l.pincode){ke.error("Please fill all fields");return}p(!0);try{const w={userId:s.uid,userEmail:s.email,customerName:l.name,phone:l.phone,address:l.address,pincode:l.pincode,items:t.map(I=>({id:I.id,name:I.name,goldType:I.goldType,weightInGrams:I.weightInGrams,category:I.category,quantity:I.quantity,price:I.calculatedPrice})),totalAmount:e};await BA(w),n(),ke.success("Order placed successfully! 🎉"),o("/orders")}catch(w){ke.error("Failed to place order. Try again."),console.error("Order error:",w)}finally{p(!1)}};return t.length===0?(o("/cart"),null):h.jsx("div",{className:"checkout-page",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{children:"Checkout"}),h.jsxs("div",{className:"checkout-layout",children:[h.jsxs("form",{className:"checkout-form",onSubmit:_,children:[h.jsx("h3",{children:"Delivery Information"}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Full Name"}),h.jsx("input",{type:"text",name:"name",value:l.name,onChange:g,placeholder:"Enter your full name",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Phone Number"}),h.jsx("input",{type:"tel",name:"phone",value:l.phone,onChange:g,placeholder:"Enter your phone number",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Delivery Address"}),h.jsx("textarea",{name:"address",value:l.address,onChange:g,placeholder:"Enter your full address",rows:3,required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Pincode"}),h.jsx("input",{type:"text",name:"pincode",value:l.pincode,onChange:g,placeholder:"Enter pincode",required:!0})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},disabled:f,children:f?"Placing Order...":`Place Order • ₹${e.toLocaleString("en-IN")}`})]}),h.jsxs("div",{className:"cart-summary",children:[h.jsx("h3",{children:"Order Summary"}),t.map(y=>h.jsxs("div",{className:"summary-row",children:[h.jsxs("span",{children:[y.name," × ",y.quantity]}),h.jsxs("span",{children:["₹",(y.calculatedPrice*y.quantity).toLocaleString("en-IN")]})]},y.id)),h.jsxs("div",{className:"summary-row total",children:[h.jsx("span",{children:"Total"}),h.jsxs("span",{children:["₹",e.toLocaleString("en-IN")]})]})]})]})]})})}function GA(t){const e=(t||"").toLowerCase();return e==="placed"?"placed":e==="packed"?"packed":e==="shipped"?"shipped":e==="delivered"?"delivered":"placed"}function qA(){const{currentUser:t}=Pr(),[e,n]=x.useState([]),[s,o]=x.useState(!0);return x.useEffect(()=>{async function l(){if(t)try{const u=await VA(t.uid);u.sort((f,p)=>(p.createdAt||0)-(f.createdAt||0)),n(u)}catch(u){console.error("Error loading orders:",u)}finally{o(!1)}}l()},[t]),s?h.jsx("div",{className:"spinner-overlay",style:{minHeight:"60vh"},children:h.jsx("div",{className:"spinner"})}):h.jsx("div",{className:"orders-page",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{children:"My Orders"}),e.length===0?h.jsxs("div",{className:"cart-empty",children:[h.jsx(ko,{}),h.jsx("h2",{children:"No orders yet"}),h.jsx("p",{children:"Your order history will appear here"})]}):e.map(l=>{var u,f;return h.jsxs("div",{className:"order-card",children:[h.jsxs("div",{className:"order-header",children:[h.jsxs("h3",{children:["Order #",(u=l.orderId)==null?void 0:u.slice(-8).toUpperCase()]}),h.jsx("span",{className:`status-badge ${GA(l.status)}`,children:l.status})]}),h.jsx("div",{className:"order-items",children:(f=l.items)==null?void 0:f.map((p,g)=>h.jsxs("div",{className:"order-item-row",children:[h.jsxs("span",{children:[p.name," (",p.goldType,") × ",p.quantity]}),h.jsxs("span",{children:["₹",(p.price*p.quantity).toLocaleString("en-IN")]})]},g))}),h.jsxs("div",{className:"order-footer",children:[h.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:[l.createdAt&&new Date(l.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),l.trackingId&&h.jsxs("span",{style:{marginLeft:"16px"},children:["Tracking: ",h.jsx("strong",{children:l.trackingId})]})]}),h.jsxs("div",{className:"price",style:{fontSize:"1.1rem"},children:["Total: ₹",(l.totalAmount||0).toLocaleString("en-IN")]})]})]},l.orderId)})]})})}function KA(){const{login:t}=Pr(),e=ni(),[n,s]=x.useState(""),[o,l]=x.useState(""),[u,f]=x.useState(""),[p,g]=x.useState(!1),_=async y=>{y.preventDefault(),f(""),g(!0);try{await t(n,o),ke.success("Welcome back!"),e("/")}catch(w){f(w.message||"Failed to login")}finally{g(!1)}};return h.jsx("div",{className:"auth-page",children:h.jsxs("div",{className:"auth-card",children:[h.jsxs("div",{className:"auth-header",children:[h.jsx("div",{className:"logo-icon",children:"KGS"}),h.jsx("h2",{children:"Welcome Back"}),h.jsx("p",{className:"auth-subtitle",children:"Sign in to your account"})]}),u&&h.jsx("div",{className:"error-msg",children:u}),h.jsxs("form",{onSubmit:_,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Email"}),h.jsx("input",{type:"email",value:n,onChange:y=>s(y.target.value),placeholder:"Enter your email",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Password"}),h.jsx("input",{type:"password",value:o,onChange:y=>l(y.target.value),placeholder:"Enter your password",required:!0})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},disabled:p,children:p?"Signing in...":"Sign In"})]}),h.jsxs("div",{className:"auth-footer",children:["Don't have an account? ",h.jsx(ue,{to:"/register",children:"Create one"})]})]})})}function YA(){const{register:t}=Pr(),e=ni(),[n,s]=x.useState(""),[o,l]=x.useState(""),[u,f]=x.useState(""),[p,g]=x.useState(""),[_,y]=x.useState(""),[w,I]=x.useState(!1),N=async b=>{if(b.preventDefault(),y(""),u!==p){y("Passwords do not match");return}if(u.length<6){y("Password must be at least 6 characters");return}I(!0);try{await t(o,u,n),ke.success("Account created successfully!"),e("/")}catch(A){y(A.message||"Failed to create account")}finally{I(!1)}};return h.jsx("div",{className:"auth-page",children:h.jsxs("div",{className:"auth-card",children:[h.jsxs("div",{className:"auth-header",children:[h.jsx("div",{className:"logo-icon",children:"KGS"}),h.jsx("h2",{children:"Create Account"}),h.jsx("p",{className:"auth-subtitle",children:"Join K G S Jewelry"})]}),_&&h.jsx("div",{className:"error-msg",children:_}),h.jsxs("form",{onSubmit:N,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Full Name"}),h.jsx("input",{type:"text",value:n,onChange:b=>s(b.target.value),placeholder:"Enter your full name",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Email"}),h.jsx("input",{type:"email",value:o,onChange:b=>l(b.target.value),placeholder:"Enter your email",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Password"}),h.jsx("input",{type:"password",value:u,onChange:b=>f(b.target.value),placeholder:"Create a password",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Confirm Password"}),h.jsx("input",{type:"password",value:p,onChange:b=>g(b.target.value),placeholder:"Confirm your password",required:!0})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},disabled:w,children:w?"Creating Account...":"Create Account"})]}),h.jsxs("div",{className:"auth-footer",children:["Already have an account? ",h.jsx(ue,{to:"/login",children:"Sign in"})]})]})})}const cc="sellRequests";async function QA(t){try{const e=at(lt,cc),n=af(e),s={...t,id:n.key,status:"Pending",adminMessage:"",createdAt:Date.now()};return await li(n,s),s}catch(e){throw console.error("Error creating sell request:",e),e}}async function JA(){try{const t=at(lt,cc),e=await ci(t);return e.exists()?Object.values(e.val()):[]}catch(t){throw console.error("Error fetching sell requests:",t),t}}async function XA(t){try{const e=at(lt,cc),n=await ci(e);return n.exists()?Object.values(n.val()).filter(o=>o.userId===t).sort((o,l)=>(l.createdAt||0)-(o.createdAt||0)):[]}catch(e){return console.error("Error fetching user sell requests:",e),[]}}async function ZA(t,e,n){try{const s=at(lt,`${cc}/${t}`);await lf(s,{status:e,adminMessage:n||"",updatedAt:Date.now()})}catch(s){throw console.error("Error updating sell request:",s),s}}function eb(t,e){return Math.round(t*e)}const tb={Pending:"#e6a817",Reviewing:"#3b82f6",Approved:"#22c55e",Rejected:"#ef4444",Completed:"#10b981"};function nb(){const{currentUser:t}=Pr(),[e,n]=x.useState(null),[s,o]=x.useState(null),[l,u]=x.useState({metalType:"gold",huidNumber:"",weight:"",purity:"22K"}),[f,p]=x.useState(null),[g,_]=x.useState(!1),[y,w]=x.useState([]),[I,N]=x.useState(!1);x.useEffect(()=>{async function O(){try{const[j,J]=await Promise.all([To(),Zi()]);n(j),o(J)}catch(j){console.error("Error loading rates:",j)}}O()},[]),x.useEffect(()=>{t&&b()},[t]);async function b(){N(!0);try{const O=await XA(t.uid);w(O)}catch(O){console.error("Error loading requests:",O)}finally{N(!1)}}x.useEffect(()=>{if(l.weight){let O=0;l.metalType==="gold"?O=l.purity==="24K"?(e==null?void 0:e["24k"])||0:(e==null?void 0:e["22k"])||0:O=l.purity==="999"?(s==null?void 0:s["999"])||0:(s==null?void 0:s["925"])||0,p(eb(O,parseFloat(l.weight)))}else p(null)},[l.weight,l.purity,l.metalType,e,s]);const A=O=>{u({...l,metalType:O,purity:O==="gold"?"22K":"925"})},G=O=>{u({...l,[O.target.name]:O.target.value})},K=async O=>{if(O.preventDefault(),!t){ke.error("Please login to submit a sell request");return}if(!l.huidNumber||!l.weight){ke.error("Please fill all fields");return}let j=0;l.metalType==="gold"?j=l.purity==="24K"?(e==null?void 0:e["24k"])||0:(e==null?void 0:e["22k"])||0:j=l.purity==="999"?(s==null?void 0:s["999"])||0:(s==null?void 0:s["925"])||0,_(!0);try{await QA({userId:t.uid,userEmail:t.email,userName:t.displayName||"",metalType:l.metalType,huidNumber:l.huidNumber,weight:parseFloat(l.weight),purity:l.purity,estimatedValue:f,metalRate:j}),ke.success("Sell request submitted successfully!"),u({metalType:"gold",huidNumber:"",weight:"",purity:"22K"}),p(null),await b()}catch(J){ke.error("Failed to submit. Try again."),console.error("Sell request error:",J)}finally{_(!1)}};return h.jsx("div",{className:"sell-gold-page",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{children:"Sell Your Gold & Silver"}),h.jsx("p",{className:"subtitle",children:"Get the best value for your precious metals with HUID-verified transparent pricing"}),h.jsx("div",{style:{maxWidth:"700px",margin:"0 auto 32px"},children:h.jsx(lw,{goldRates:e,silverRates:s})}),h.jsx("div",{className:"sell-gold-card",children:h.jsxs("form",{onSubmit:K,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Metal Type"}),h.jsxs("div",{style:{display:"flex",gap:"8px"},children:[h.jsx("button",{type:"button",className:`btn ${l.metalType==="gold"?"btn-primary":"btn-outline"}`,onClick:()=>A("gold"),style:{flex:1},children:"🥇 Gold"}),h.jsx("button",{type:"button",className:`btn ${l.metalType==="silver"?"btn-primary":"btn-outline"}`,onClick:()=>A("silver"),style:{flex:1},children:"🥈 Silver"})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"HUID Number"}),h.jsx("input",{type:"text",name:"huidNumber",value:l.huidNumber,onChange:G,placeholder:"Enter HUID number",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Weight (in grams)"}),h.jsx("input",{type:"number",name:"weight",value:l.weight,onChange:G,placeholder:"Enter weight in grams",min:"0.1",step:"0.01",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Purity"}),h.jsx("select",{name:"purity",value:l.purity,onChange:G,children:l.metalType==="gold"?h.jsxs(h.Fragment,{children:[h.jsx("option",{value:"22K",children:"22K Gold"}),h.jsx("option",{value:"24K",children:"24K Gold"})]}):h.jsxs(h.Fragment,{children:[h.jsx("option",{value:"925",children:"925 Sterling Silver"}),h.jsx("option",{value:"999",children:"999 Fine Silver"})]})})]}),f!==null&&h.jsxs("div",{className:"sell-value-display",children:[h.jsx("div",{className:"label",children:"Estimated Sell Value"}),h.jsxs("div",{className:"value",children:["₹",f.toLocaleString("en-IN")]})]}),h.jsx("button",{type:"submit",className:"btn btn-gold btn-lg",style:{width:"100%"},disabled:g,children:g?"Submitting...":"Submit Sell Request"})]})}),t&&h.jsxs("div",{style:{marginTop:"48px"},children:[h.jsx("h2",{style:{fontFamily:"var(--font-display)",marginBottom:"20px"},children:"📋 My Sell Requests"}),I?h.jsx("div",{className:"spinner-overlay",style:{minHeight:"100px"},children:h.jsx("div",{className:"spinner"})}):y.length===0?h.jsx("div",{className:"sell-gold-card",style:{textAlign:"center",padding:"40px",color:"var(--text-muted)"},children:"No sell requests yet. Submit your first request above."}):y.map(O=>{var j;return h.jsxs("div",{className:"sell-gold-card",style:{marginBottom:"16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"12px"},children:[h.jsxs("div",{children:[h.jsxs("strong",{style:{fontSize:"1rem"},children:[O.metalType==="silver"?"🥈":"🥇"," HUID: ",O.huidNumber]}),h.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"2px"},children:O.createdAt?new Date(O.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):""})]}),h.jsx("span",{style:{padding:"4px 14px",borderRadius:"20px",fontSize:"0.8rem",fontWeight:600,color:"#fff",background:tb[O.status]||"#999"},children:O.status})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"12px",marginBottom:"12px"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Metal"}),h.jsx("div",{style:{fontWeight:600,textTransform:"capitalize"},children:O.metalType||"gold"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Weight"}),h.jsxs("div",{style:{fontWeight:600},children:[O.weight,"g"]})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Purity"}),h.jsx("div",{style:{fontWeight:600},children:O.purity})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Est. Value"}),h.jsxs("div",{style:{fontWeight:700,color:"var(--rose-gold)"},children:["₹",(j=O.estimatedValue)==null?void 0:j.toLocaleString("en-IN")]})]})]}),O.adminMessage&&h.jsxs("div",{style:{background:"var(--light-gray)",borderRadius:"var(--radius-sm)",padding:"12px 16px",borderLeft:"3px solid var(--rose-gold)"},children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"4px",fontWeight:600},children:"💬 Message from Admin"}),h.jsx("div",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:O.adminMessage}),O.updatedAt&&h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginTop:"4px"},children:new Date(O.updatedAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})})]})]},O.id)})]})]})})}const rb="61eafcd9b2b4aa44cb94bda08c71babf",ib="https://api.imgbb.com/1/upload";async function sb(t){try{const e=new FormData;e.append("image",t),e.append("key",rb);const n=await fetch(ib,{method:"POST",body:e});if(!n.ok)throw new Error(`imgbb upload failed: ${n.statusText}`);const s=await n.json();if(s.success)return s.data.display_url;throw new Error("imgbb upload returned unsuccessful response")}catch(e){throw console.error("Image upload error:",e),e}}const ob=["ring","chain","necklace","bangle","earring","pendant","bracelet"],kd={name:"",category:"ring",description:"",metalType:"gold",goldType:"22K",silverPurity:"925",weightInGrams:"",makingCharge:"",wastageInGrams:"",taxPercentage:"",imageURL:""};function ab(){var oe,he,fe,Se,ge;const[t,e]=x.useState("products"),[n,s]=x.useState([]),[o,l]=x.useState([]),[u,f]=x.useState([]),[p,g]=x.useState(null),[_,y]=x.useState(null),[w,I]=x.useState(!0),[N,b]=x.useState({...kd}),[A,G]=x.useState(null),[K,O]=x.useState(null),[j,J]=x.useState(""),[ie,_e]=x.useState(!1),[Ie,Oe]=x.useState(""),[Fe,Dt]=x.useState(""),[wt,ct]=x.useState(""),[pt,Rt]=x.useState("");x.useEffect(()=>{Ue()},[]);async function Ue(){I(!0);try{const[U,we,St,ln,cn]=await Promise.all([gf(),cw(),JA(),ow(),Zi()]);s(U),l(we.sort((Rr,ui)=>(ui.createdAt||0)-(Rr.createdAt||0))),f(St.sort((Rr,ui)=>(ui.createdAt||0)-(Rr.createdAt||0))),g(ln),y(cn),ln&&(Oe(ln["24k"]||""),Dt(ln["22k"]||"")),cn&&(ct(cn[999]||""),Rt(cn[925]||""))}catch(U){console.error("Error loading admin data:",U)}finally{I(!1)}}const pe=U=>{b({...N,[U.target.name]:U.target.value})},B=U=>{const we=U.target.files[0];we&&(O(we),J(URL.createObjectURL(we)))},ee=async U=>{if(U.preventDefault(),!N.name||!N.weightInGrams){ke.error("Please fill required fields");return}_e(!0);try{let we=N.imageURL;K&&(we=await sb(K),ke.success("Image uploaded!"));const St={name:N.name,category:N.category,description:N.description,metalType:N.metalType,goldType:N.metalType==="gold"?N.goldType:"",silverPurity:N.metalType==="silver"?N.silverPurity:"",weightInGrams:parseFloat(N.weightInGrams)||0,makingCharge:parseFloat(N.makingCharge)||0,wastageInGrams:parseFloat(N.wastageInGrams)||0,taxPercentage:parseFloat(N.taxPercentage)||0,imageURL:we};A?(await jA(A,St),ke.success("Product updated!")):(await AA(St),ke.success("Product added!")),b({...kd}),G(null),O(null),J(""),await Ue()}catch(we){ke.error("Failed to save product"),console.error(we)}finally{_e(!1)}},$=U=>{b({name:U.name||"",category:U.category||"ring",description:U.description||"",metalType:U.metalType||"gold",goldType:U.goldType||"22K",silverPurity:U.silverPurity||"925",weightInGrams:U.weightInGrams||"",makingCharge:U.makingCharge||"",wastageInGrams:U.wastageInGrams||"",taxPercentage:U.taxPercentage||"",imageURL:U.imageURL||""}),G(U.id),J(U.imageURL||""),e("products"),window.scrollTo({top:0,behavior:"smooth"})},k=async(U,we)=>{if(window.confirm(`Delete "${we}"?`))try{await OA(U),ke.success("Product deleted"),await Ue()}catch{ke.error("Failed to delete")}},L=async(U,we,St)=>{try{await $A(U,we,St),ke.success("Order updated!"),await Ue()}catch{ke.error("Failed to update order")}},se=async()=>{if(!Ie||!Fe){ke.error("Enter both rates");return}try{await kA(Ie,Fe),ke.success("Gold rates updated!"),await Ue()}catch{ke.error("Failed to update rates")}};return w?h.jsx("div",{className:"spinner-overlay",style:{minHeight:"60vh"},children:h.jsx("div",{className:"spinner"})}):h.jsx("div",{className:"admin-page",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{children:"Admin Panel"}),h.jsx("p",{className:"admin-subtitle",children:"Manage your jewelry store"}),h.jsxs("div",{className:"admin-stats",children:[h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-value",children:n.length}),h.jsx("div",{className:"stat-label",children:"Products"})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-value",children:o.length}),h.jsx("div",{className:"stat-label",children:"Orders"})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-value",children:u.length}),h.jsx("div",{className:"stat-label",children:"Sell Requests"})]}),h.jsxs("div",{className:"stat-card",children:[h.jsxs("div",{className:"stat-value",children:["₹",((oe=p==null?void 0:p["24k"])==null?void 0:oe.toLocaleString("en-IN"))||"—"]}),h.jsx("div",{className:"stat-label",children:"24K Rate"})]})]}),h.jsxs("div",{className:"admin-tabs",children:[h.jsxs("button",{className:t==="products"?"active":"",onClick:()=>e("products"),children:[h.jsx(zn,{style:{marginRight:6}})," Products"]}),h.jsxs("button",{className:t==="orders"?"active":"",onClick:()=>e("orders"),children:[h.jsx(ko,{style:{marginRight:6}})," Orders"]}),h.jsxs("button",{className:t==="sellRequests"?"active":"",onClick:()=>e("sellRequests"),children:[h.jsx(Zv,{style:{marginRight:6}})," Sell Requests"]}),h.jsxs("button",{className:t==="rates"?"active":"",onClick:()=>e("rates"),children:[h.jsx(sA,{style:{marginRight:6}})," Rates"]})]}),t==="products"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"admin-card",children:[h.jsx("h3",{children:A?"✏️ Edit Product":"➕ Add New Product"}),h.jsx("form",{onSubmit:ee,children:h.jsxs("div",{className:"product-form",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Product Name *"}),h.jsx("input",{type:"text",name:"name",value:N.name,onChange:pe,placeholder:"e.g. Royal Gold Necklace",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Category"}),h.jsx("select",{name:"category",value:N.category,onChange:pe,children:ob.map(U=>h.jsx("option",{value:U,children:U.charAt(0).toUpperCase()+U.slice(1)},U))})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Metal Type"}),h.jsxs("select",{name:"metalType",value:N.metalType,onChange:pe,children:[h.jsx("option",{value:"gold",children:"Gold"}),h.jsx("option",{value:"silver",children:"Silver"})]})]}),N.metalType==="gold"?h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Gold Purity"}),h.jsxs("select",{name:"goldType",value:N.goldType,onChange:pe,children:[h.jsx("option",{value:"22K",children:"22K"}),h.jsx("option",{value:"24K",children:"24K"})]})]}):h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Silver Purity"}),h.jsxs("select",{name:"silverPurity",value:N.silverPurity,onChange:pe,children:[h.jsx("option",{value:"925",children:"925 Sterling"}),h.jsx("option",{value:"999",children:"999 Fine"})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Weight (grams) *"}),h.jsx("input",{type:"number",name:"weightInGrams",value:N.weightInGrams,onChange:pe,placeholder:"e.g. 10",step:"0.01",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Making Charge (₹)"}),h.jsx("input",{type:"number",name:"makingCharge",value:N.makingCharge,onChange:pe,placeholder:"e.g. 2000"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Wastage (grams)"}),h.jsx("input",{type:"number",name:"wastageInGrams",value:N.wastageInGrams,onChange:pe,placeholder:"e.g. 0.5",step:"0.01"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Tax (%)"}),h.jsx("input",{type:"number",name:"taxPercentage",value:N.taxPercentage,onChange:pe,placeholder:"e.g. 3",step:"0.1"})]}),h.jsxs("div",{className:"form-group full-width",children:[h.jsx("label",{children:"Description"}),h.jsx("textarea",{name:"description",value:N.description,onChange:pe,placeholder:"Product description...",rows:3})]}),h.jsxs("div",{className:"form-group full-width",children:[h.jsx("label",{children:"Product Image"}),h.jsx("div",{className:"image-upload-area",onClick:()=>document.getElementById("imageInput").click(),children:j?h.jsx("img",{src:j,alt:"Preview",className:"preview-img"}):h.jsxs("div",{children:[h.jsx(fA,{style:{fontSize:"2rem",color:"var(--rose-gold)",marginBottom:"8px"}}),h.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Click to upload image"})]})}),h.jsx("input",{id:"imageInput",type:"file",accept:"image/*",onChange:B,style:{display:"none"}})]}),h.jsxs("div",{className:"full-width",style:{display:"flex",gap:"12px"},children:[h.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:ie,children:[h.jsx(Id,{})," ",ie?"Saving...":A?"Update Product":"Add Product"]}),A&&h.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>{b({...kd}),G(null),J(""),O(null)},children:"Cancel"})]})]})})]}),h.jsxs("div",{className:"admin-card",children:[h.jsxs("h3",{children:["All Products (",n.length,")"]}),h.jsx("div",{className:"table-container",children:h.jsxs("table",{className:"product-list-table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Image"}),h.jsx("th",{children:"Name"}),h.jsx("th",{children:"Category"}),h.jsx("th",{children:"Metal"}),h.jsx("th",{children:"Purity"}),h.jsx("th",{children:"Weight"}),h.jsx("th",{children:"Actions"})]})}),h.jsxs("tbody",{children:[n.map(U=>h.jsxs("tr",{children:[h.jsx("td",{children:U.imageURL?h.jsx("img",{src:U.imageURL,alt:U.name,className:"product-thumb"}):h.jsx("div",{className:"product-thumb",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"var(--light-gray)"},children:h.jsx(zn,{style:{color:"var(--rose-gold-light)"}})})}),h.jsx("td",{children:h.jsx("strong",{children:U.name})}),h.jsx("td",{style:{textTransform:"capitalize"},children:U.category}),h.jsx("td",{children:h.jsx("span",{className:`badge ${U.metalType==="silver"?"badge-silver":"badge-gold"}`,children:U.metalType==="silver"?"Silver":"Gold"})}),h.jsx("td",{children:U.metalType==="silver"?U.silverPurity==="999"?"999 Fine":"925":U.goldType||"22K"}),h.jsxs("td",{children:[U.weightInGrams,"g"]}),h.jsx("td",{children:h.jsxs("div",{className:"actions",children:[h.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>$(U),children:h.jsx(oA,{})}),h.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>k(U.id,U.name),children:h.jsx(iw,{})})]})})]},U.id)),n.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"40px",color:"var(--text-muted)"},children:"No products yet. Add your first product above."})})]})]})})]})]}),t==="orders"&&h.jsx("div",{children:o.length===0?h.jsxs("div",{className:"admin-card",style:{textAlign:"center",padding:"60px"},children:[h.jsx(ko,{style:{fontSize:"3rem",color:"var(--rose-gold-light)",marginBottom:"16px"}}),h.jsx("p",{style:{color:"var(--text-muted)"},children:"No orders yet"})]}):o.map(U=>h.jsx(lb,{order:U,onUpdate:L},U.orderId))}),t==="sellRequests"&&h.jsx("div",{children:u.length===0?h.jsxs("div",{className:"admin-card",style:{textAlign:"center",padding:"60px"},children:[h.jsx(Zv,{style:{fontSize:"3rem",color:"var(--rose-gold-light)",marginBottom:"16px"}}),h.jsx("p",{style:{color:"var(--text-muted)"},children:"No sell gold requests yet"})]}):u.map(U=>h.jsx(cb,{request:U,onUpdate:async(we,St,ln)=>{try{await ZA(we,St,ln),ke.success("Sell request updated!"),await Ue()}catch{ke.error("Failed to update")}}},U.id))}),t==="rates"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"admin-card",children:[h.jsx("h3",{children:"🥇 Gold Rate Override"}),h.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px",fontSize:"0.9rem"},children:"Override the live gold rates. This changes pricing for all gold products."}),h.jsxs("div",{className:"gold-rate-form",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"24K Rate (₹/gram)"}),h.jsx("input",{type:"number",value:Ie,onChange:U=>Oe(U.target.value),placeholder:"e.g. 7200"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"22K Rate (₹/gram)"}),h.jsx("input",{type:"number",value:Fe,onChange:U=>Dt(U.target.value),placeholder:"e.g. 6600"})]}),h.jsxs("button",{className:"btn btn-primary",onClick:se,children:[h.jsx(Id,{})," Update Gold Rates"]})]}),p&&h.jsxs("div",{style:{marginTop:"24px",padding:"16px",background:"var(--light-gray)",borderRadius:"var(--radius-sm)"},children:[h.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Current gold rates:"}),h.jsxs("div",{style:{fontWeight:600,marginTop:"4px"},children:["24K: ₹",(he=p["24k"])==null?void 0:he.toLocaleString("en-IN"),"/g • 22K: ₹",(fe=p["22k"])==null?void 0:fe.toLocaleString("en-IN"),"/g"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"4px"},children:["Last updated: ",p.lastUpdated?new Date(p.lastUpdated).toLocaleString("en-IN"):"N/A",p.manualOverride&&" (Manual Override)"]})]})]}),h.jsxs("div",{className:"admin-card",style:{marginTop:"24px"},children:[h.jsx("h3",{children:"🥈 Silver Rate Management"}),h.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px",fontSize:"0.9rem"},children:"Set silver rates manually. These are used for all silver product pricing."}),h.jsxs("div",{className:"gold-rate-form",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"999 Fine Silver (₹/gram)"}),h.jsx("input",{type:"number",value:wt,onChange:U=>ct(U.target.value),placeholder:"e.g. 95"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"925 Sterling Silver (₹/gram)"}),h.jsx("input",{type:"number",value:pt,onChange:U=>Rt(U.target.value),placeholder:"e.g. 85"})]}),h.jsxs("button",{className:"btn btn-primary",onClick:async()=>{if(!wt||!pt){ke.error("Enter both silver rates");return}try{await TA(wt,pt),ke.success("Silver rates updated!"),await Ue()}catch{ke.error("Failed to update silver rates")}},children:[h.jsx(Id,{})," Update Silver Rates"]})]}),_&&h.jsxs("div",{style:{marginTop:"24px",padding:"16px",background:"var(--light-gray)",borderRadius:"var(--radius-sm)"},children:[h.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Current silver rates:"}),h.jsxs("div",{style:{fontWeight:600,marginTop:"4px"},children:["999: ₹",(Se=_[999])==null?void 0:Se.toLocaleString("en-IN"),"/g • 925: ₹",(ge=_[925])==null?void 0:ge.toLocaleString("en-IN"),"/g"]})]})]})]})]})})}function lb({order:t,onUpdate:e}){var u,f;const[n,s]=x.useState(t.status||"Placed"),[o,l]=x.useState(t.trackingId||"");return h.jsxs("div",{className:"admin-order",children:[h.jsxs("div",{className:"admin-order-header",children:[h.jsxs("h4",{children:["Order #",(u=t.orderId)==null?void 0:u.slice(-8).toUpperCase()]}),h.jsx("span",{className:`status-badge ${(t.status||"placed").toLowerCase()}`,children:t.status})]}),h.jsxs("div",{className:"admin-order-customer",children:["👤 ",t.customerName||"N/A"," • 📱 ",t.phone||"N/A"," • 📍 ",t.address||"N/A",", ",t.pincode||""]}),(f=t.items)==null?void 0:f.map((p,g)=>h.jsxs("div",{className:"order-item-row",style:{display:"flex",justifyContent:"space-between",padding:"6px 0",fontSize:"0.88rem",color:"var(--text-secondary)"},children:[h.jsxs("span",{children:[p.name," (",p.goldType,") × ",p.quantity]}),h.jsxs("span",{children:["₹",(p.price*p.quantity).toLocaleString("en-IN")]})]},g)),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"12px",fontWeight:600,fontSize:"1rem"},children:[h.jsx("span",{children:"Total"}),h.jsxs("span",{className:"price",children:["₹",(t.totalAmount||0).toLocaleString("en-IN")]})]}),h.jsxs("div",{className:"admin-order-actions",children:[h.jsxs("select",{value:n,onChange:p=>s(p.target.value),children:[h.jsx("option",{value:"Placed",children:"Placed"}),h.jsx("option",{value:"Packed",children:"Packed"}),h.jsx("option",{value:"Shipped",children:"Shipped"}),h.jsx("option",{value:"Delivered",children:"Delivered"})]}),h.jsx("input",{type:"text",value:o,onChange:p=>l(p.target.value),placeholder:"Tracking ID"}),h.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>e(t.orderId,n,o),children:"Update"})]})]})}function cb({request:t,onUpdate:e}){var u,f;const[n,s]=x.useState(t.status||"Pending"),[o,l]=x.useState(t.adminMessage||"");return h.jsxs("div",{className:"admin-order",children:[h.jsxs("div",{className:"admin-order-header",children:[h.jsxs("h4",{children:["Sell #",(u=t.id)==null?void 0:u.slice(-8).toUpperCase()]}),h.jsx("span",{style:{padding:"4px 14px",borderRadius:"20px",fontSize:"0.8rem",fontWeight:600,color:"#fff",background:{Pending:"#e6a817",Reviewing:"#3b82f6",Approved:"#22c55e",Rejected:"#ef4444",Completed:"#10b981"}[t.status]||"#999"},children:t.status})]}),h.jsxs("div",{className:"admin-order-customer",children:["👤 ",t.userName||"N/A"," • 📧 ",t.userEmail||"N/A"]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"12px",margin:"12px 0"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"HUID"}),h.jsx("div",{style:{fontWeight:600},children:t.huidNumber})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Weight"}),h.jsxs("div",{style:{fontWeight:600},children:[t.weight,"g"]})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Purity"}),h.jsx("div",{style:{fontWeight:600},children:t.purity})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Est. Value"}),h.jsxs("div",{style:{fontWeight:700,color:"var(--rose-gold)"},children:["₹",(f=t.estimatedValue)==null?void 0:f.toLocaleString("en-IN")]})]})]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"12px"},children:["Submitted: ",t.createdAt?new Date(t.createdAt).toLocaleString("en-IN"):"N/A"]}),h.jsxs("div",{className:"admin-order-actions",style:{flexDirection:"column",alignItems:"stretch",gap:"12px"},children:[h.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"},children:[h.jsxs("select",{value:n,onChange:p=>s(p.target.value),style:{flex:"0 0 auto"},children:[h.jsx("option",{value:"Pending",children:"Pending"}),h.jsx("option",{value:"Reviewing",children:"Reviewing"}),h.jsx("option",{value:"Approved",children:"Approved"}),h.jsx("option",{value:"Rejected",children:"Rejected"}),h.jsx("option",{value:"Completed",children:"Completed"})]}),h.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>e(t.id,n,o),children:"Update"})]}),h.jsx("textarea",{value:o,onChange:p=>l(p.target.value),placeholder:"Message to customer (visible to them)...",rows:2,style:{width:"100%",padding:"10px 12px",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",fontSize:"0.88rem",resize:"vertical"}})]})]})}function ub(){return h.jsx(KR,{children:h.jsxs(YR,{children:[h.jsx(uC,{position:"top-right",toastOptions:{duration:3e3,style:{borderRadius:"12px",background:"#1A1A1A",color:"#fff",fontSize:"0.9rem"},success:{iconTheme:{primary:"#B76E79",secondary:"#fff"}}}}),h.jsx(gA,{}),h.jsx("main",{children:h.jsxs(aE,{children:[h.jsx(Vt,{path:"/",element:h.jsx(DA,{})}),h.jsx(Vt,{path:"/products",element:h.jsx(UA,{})}),h.jsx(Vt,{path:"/product/:id",element:h.jsx(zA,{})}),h.jsx(Vt,{path:"/cart",element:h.jsx(WA,{})}),h.jsx(Vt,{path:"/sell-gold",element:h.jsx(nb,{})}),h.jsx(Vt,{path:"/login",element:h.jsx(KA,{})}),h.jsx(Vt,{path:"/register",element:h.jsx(YA,{})}),h.jsx(Vt,{path:"/checkout",element:h.jsx(qv,{children:h.jsx(HA,{})})}),h.jsx(Vt,{path:"/orders",element:h.jsx(qv,{children:h.jsx(qA,{})})}),h.jsx(Vt,{path:"/admin",element:h.jsx(QR,{children:h.jsx(ab,{})})}),h.jsx(Vt,{path:"*",element:h.jsxs("div",{style:{textAlign:"center",padding:"100px 24px",minHeight:"50vh"},children:[h.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontSize:"3rem",marginBottom:"12px"},children:"404"}),h.jsx("p",{style:{color:"#999"},children:"Page not found"})]})})]})}),h.jsx(vA,{})]})})}gS.createRoot(document.getElementById("root")).render(h.jsx(jn.StrictMode,{children:h.jsx(gE,{children:h.jsx(ub,{})})}));
