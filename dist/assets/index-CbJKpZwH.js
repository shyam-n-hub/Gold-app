function rE(t,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xu={exports:{}},Vs={},Zu={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function iE(){if(ig)return ie;ig=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function w(x){return x===null||typeof x!="object"?null:(x=y&&x[y]||x["@@iterator"],typeof x=="function"?x:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function O(x,L,ne){this.props=x,this.context=L,this.refs=b,this.updater=ne||I}O.prototype.isReactComponent={},O.prototype.setState=function(x,L){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,L,"setState")},O.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function F(){}F.prototype=O.prototype;function B(x,L,ne){this.props=x,this.context=L,this.refs=b,this.updater=ne||I}var W=B.prototype=new F;W.constructor=B,R(W,O.prototype),W.isPureReactComponent=!0;var q=Array.isArray,ue=Object.prototype.hasOwnProperty,ce={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function Ne(x,L,ne){var re,he={},fe=null,Ee=null;if(L!=null)for(re in L.ref!==void 0&&(Ee=L.ref),L.key!==void 0&&(fe=""+L.key),L)ue.call(L,re)&&!we.hasOwnProperty(re)&&(he[re]=L[re]);var ge=arguments.length-2;if(ge===1)he.children=ne;else if(1<ge){for(var Pe=Array(ge),xt=0;xt<ge;xt++)Pe[xt]=arguments[xt+2];he.children=Pe}if(x&&x.defaultProps)for(re in ge=x.defaultProps,ge)he[re]===void 0&&(he[re]=ge[re]);return{$$typeof:t,type:x,key:fe,ref:Ee,props:he,_owner:ce.current}}function be(x,L){return{$$typeof:t,type:x.type,key:L,ref:x.ref,props:x.props,_owner:x._owner}}function et(x){return typeof x=="object"&&x!==null&&x.$$typeof===t}function Gt(x){var L={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ne){return L[ne]})}var Ot=/\/+/g;function ut(x,L){return typeof x=="object"&&x!==null&&x.key!=null?Gt(""+x.key):L.toString(36)}function It(x,L,ne,re,he){var fe=typeof x;(fe==="undefined"||fe==="boolean")&&(x=null);var Ee=!1;if(x===null)Ee=!0;else switch(fe){case"string":case"number":Ee=!0;break;case"object":switch(x.$$typeof){case t:case e:Ee=!0}}if(Ee)return Ee=x,he=he(Ee),x=re===""?"."+ut(Ee,0):re,q(he)?(ne="",x!=null&&(ne=x.replace(Ot,"$&/")+"/"),It(he,L,ne,"",function(xt){return xt})):he!=null&&(et(he)&&(he=be(he,ne+(!he.key||Ee&&Ee.key===he.key?"":(""+he.key).replace(Ot,"$&/")+"/")+x)),L.push(he)),1;if(Ee=0,re=re===""?".":re+":",q(x))for(var ge=0;ge<x.length;ge++){fe=x[ge];var Pe=re+ut(fe,ge);Ee+=It(fe,L,ne,Pe,he)}else if(Pe=w(x),typeof Pe=="function")for(x=Pe.call(x),ge=0;!(fe=x.next()).done;)fe=fe.value,Pe=re+ut(fe,ge++),Ee+=It(fe,L,ne,Pe,he);else if(fe==="object")throw L=String(x),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Lt(x,L,ne){if(x==null)return x;var re=[],he=0;return It(x,re,"","",function(fe){return L.call(ne,fe,he++)}),re}function tt(x){if(x._status===-1){var L=x._result;L=L(),L.then(function(ne){(x._status===0||x._status===-1)&&(x._status=1,x._result=ne)},function(ne){(x._status===0||x._status===-1)&&(x._status=2,x._result=ne)}),x._status===-1&&(x._status=0,x._result=L)}if(x._status===1)return x._result.default;throw x._result}var xe={current:null},V={transition:null},Q={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:V,ReactCurrentOwner:ce};function A(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Lt,forEach:function(x,L,ne){Lt(x,function(){L.apply(this,arguments)},ne)},count:function(x){var L=0;return Lt(x,function(){L++}),L},toArray:function(x){return Lt(x,function(L){return L})||[]},only:function(x){if(!et(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=O,ie.Fragment=n,ie.Profiler=o,ie.PureComponent=B,ie.StrictMode=s,ie.Suspense=f,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ie.act=A,ie.cloneElement=function(x,L,ne){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var re=R({},x.props),he=x.key,fe=x.ref,Ee=x._owner;if(L!=null){if(L.ref!==void 0&&(fe=L.ref,Ee=ce.current),L.key!==void 0&&(he=""+L.key),x.type&&x.type.defaultProps)var ge=x.type.defaultProps;for(Pe in L)ue.call(L,Pe)&&!we.hasOwnProperty(Pe)&&(re[Pe]=L[Pe]===void 0&&ge!==void 0?ge[Pe]:L[Pe])}var Pe=arguments.length-2;if(Pe===1)re.children=ne;else if(1<Pe){ge=Array(Pe);for(var xt=0;xt<Pe;xt++)ge[xt]=arguments[xt+2];re.children=ge}return{$$typeof:t,type:x.type,key:he,ref:fe,props:re,_owner:Ee}},ie.createContext=function(x){return x={$$typeof:u,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},ie.createElement=Ne,ie.createFactory=function(x){var L=Ne.bind(null,x);return L.type=x,L},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:h,render:x}},ie.isValidElement=et,ie.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:tt}},ie.memo=function(x,L){return{$$typeof:g,type:x,compare:L===void 0?null:L}},ie.startTransition=function(x){var L=V.transition;V.transition={};try{x()}finally{V.transition=L}},ie.unstable_act=A,ie.useCallback=function(x,L){return xe.current.useCallback(x,L)},ie.useContext=function(x){return xe.current.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x){return xe.current.useDeferredValue(x)},ie.useEffect=function(x,L){return xe.current.useEffect(x,L)},ie.useId=function(){return xe.current.useId()},ie.useImperativeHandle=function(x,L,ne){return xe.current.useImperativeHandle(x,L,ne)},ie.useInsertionEffect=function(x,L){return xe.current.useInsertionEffect(x,L)},ie.useLayoutEffect=function(x,L){return xe.current.useLayoutEffect(x,L)},ie.useMemo=function(x,L){return xe.current.useMemo(x,L)},ie.useReducer=function(x,L,ne){return xe.current.useReducer(x,L,ne)},ie.useRef=function(x){return xe.current.useRef(x)},ie.useState=function(x){return xe.current.useState(x)},ie.useSyncExternalStore=function(x,L,ne){return xe.current.useSyncExternalStore(x,L,ne)},ie.useTransition=function(){return xe.current.useTransition()},ie.version="18.3.1",ie}var sg;function Zd(){return sg||(sg=1,Zu.exports=iE()),Zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function sE(){if(og)return Vs;og=1;var t=Zd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,g){var _,y={},w=null,I=null;g!==void 0&&(w=""+g),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(I=f.ref);for(_ in f)s.call(f,_)&&!l.hasOwnProperty(_)&&(y[_]=f[_]);if(h&&h.defaultProps)for(_ in f=h.defaultProps,f)y[_]===void 0&&(y[_]=f[_]);return{$$typeof:e,type:h,key:w,ref:I,props:y,_owner:o.current}}return Vs.Fragment=n,Vs.jsx=u,Vs.jsxs=u,Vs}var ag;function oE(){return ag||(ag=1,Xu.exports=sE()),Xu.exports}var p=oE(),k=Zd();const Rn=Qv(k),aE=rE({__proto__:null,default:Rn},[k]);var Ka={},ed={exports:{}},Et={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function lE(){return lg||(lg=1,(function(t){function e(V,Q){var A=V.length;V.push(Q);e:for(;0<A;){var x=A-1>>>1,L=V[x];if(0<o(L,Q))V[x]=Q,V[A]=L,A=x;else break e}}function n(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var Q=V[0],A=V.pop();if(A!==Q){V[0]=A;e:for(var x=0,L=V.length,ne=L>>>1;x<ne;){var re=2*(x+1)-1,he=V[re],fe=re+1,Ee=V[fe];if(0>o(he,A))fe<L&&0>o(Ee,he)?(V[x]=Ee,V[fe]=A,x=fe):(V[x]=he,V[re]=A,x=re);else if(fe<L&&0>o(Ee,A))V[x]=Ee,V[fe]=A,x=fe;else break e}}return Q}function o(V,Q){var A=V.sortIndex-Q.sortIndex;return A!==0?A:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();t.unstable_now=function(){return u.now()-h}}var f=[],g=[],_=1,y=null,w=3,I=!1,R=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(V){for(var Q=n(g);Q!==null;){if(Q.callback===null)s(g);else if(Q.startTime<=V)s(g),Q.sortIndex=Q.expirationTime,e(f,Q);else break;Q=n(g)}}function q(V){if(b=!1,W(V),!R)if(n(f)!==null)R=!0,tt(ue);else{var Q=n(g);Q!==null&&xe(q,Q.startTime-V)}}function ue(V,Q){R=!1,b&&(b=!1,F(Ne),Ne=-1),I=!0;var A=w;try{for(W(Q),y=n(f);y!==null&&(!(y.expirationTime>Q)||V&&!Gt());){var x=y.callback;if(typeof x=="function"){y.callback=null,w=y.priorityLevel;var L=x(y.expirationTime<=Q);Q=t.unstable_now(),typeof L=="function"?y.callback=L:y===n(f)&&s(f),W(Q)}else s(f);y=n(f)}if(y!==null)var ne=!0;else{var re=n(g);re!==null&&xe(q,re.startTime-Q),ne=!1}return ne}finally{y=null,w=A,I=!1}}var ce=!1,we=null,Ne=-1,be=5,et=-1;function Gt(){return!(t.unstable_now()-et<be)}function Ot(){if(we!==null){var V=t.unstable_now();et=V;var Q=!0;try{Q=we(!0,V)}finally{Q?ut():(ce=!1,we=null)}}else ce=!1}var ut;if(typeof B=="function")ut=function(){B(Ot)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,Lt=It.port2;It.port1.onmessage=Ot,ut=function(){Lt.postMessage(null)}}else ut=function(){O(Ot,0)};function tt(V){we=V,ce||(ce=!0,ut())}function xe(V,Q){Ne=O(function(){V(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,tt(ue))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(V){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var A=w;w=Q;try{return V()}finally{w=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var A=w;w=V;try{return Q()}finally{w=A}},t.unstable_scheduleCallback=function(V,Q,A){var x=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?x+A:x):A=x,V){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=A+L,V={id:_++,callback:Q,priorityLevel:V,startTime:A,expirationTime:L,sortIndex:-1},A>x?(V.sortIndex=A,e(g,V),n(f)===null&&V===n(g)&&(b?(F(Ne),Ne=-1):b=!0,xe(q,A-x))):(V.sortIndex=L,e(f,V),R||I||(R=!0,tt(ue))),V},t.unstable_shouldYield=Gt,t.unstable_wrapCallback=function(V){var Q=w;return function(){var A=w;w=Q;try{return V.apply(this,arguments)}finally{w=A}}}})(nd)),nd}var cg;function cE(){return cg||(cg=1,td.exports=lE()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function uE(){if(ug)return Et;ug=1;var t=Zd(),e=cE();function n(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){u(r,i),u(r+"Capture",i)}function u(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function w(r){return f.call(y,r)?!0:f.call(_,r)?!1:g.test(r)?y[r]=!0:(_[r]=!0,!1)}function I(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function R(r,i,a,c){if(i===null||typeof i>"u"||I(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(r,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){O[r]=new b(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];O[i]=new b(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){O[r]=new b(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){O[r]=new b(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){O[r]=new b(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){O[r]=new b(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){O[r]=new b(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){O[r]=new b(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){O[r]=new b(r,5,!1,r.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function B(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(F,B);O[i]=new b(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(F,B);O[i]=new b(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(F,B);O[i]=new b(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){O[r]=new b(r,1,!1,r.toLowerCase(),null,!1,!1)}),O.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){O[r]=new b(r,1,!1,r.toLowerCase(),null,!0,!0)});function W(r,i,a,c){var d=O.hasOwnProperty(i)?O[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,a,d,c)&&(a=null),c||d===null?w(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var q=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),ce=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),et=Symbol.for("react.provider"),Gt=Symbol.for("react.context"),Ot=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),V=Symbol.iterator;function Q(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var A=Object.assign,x;function L(r){if(x===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+r}var ne=!1;function re(r,i){if(!r||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var c=P}Reflect.construct(r,[],i)}else{try{i.call()}catch(P){c=P}r.call(i.prototype)}else{try{throw Error()}catch(P){c=P}r()}}catch(P){if(P&&c&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,E=m.length-1;1<=v&&0<=E&&d[v]!==m[E];)E--;for(;1<=v&&0<=E;v--,E--)if(d[v]!==m[E]){if(v!==1||E!==1)do if(v--,E--,0>E||d[v]!==m[E]){var C=`
`+d[v].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=v&&0<=E);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?L(r):""}function he(r){switch(r.tag){case 5:return L(r.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return r=re(r.type,!1),r;case 11:return r=re(r.type.render,!1),r;case 1:return r=re(r.type,!0),r;default:return""}}function fe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case we:return"Fragment";case ce:return"Portal";case be:return"Profiler";case Ne:return"StrictMode";case ut:return"Suspense";case It:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Gt:return(r.displayName||"Context")+".Consumer";case et:return(r._context.displayName||"Context")+".Provider";case Ot:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return i=r.displayName||null,i!==null?i:fe(r.type)||"Memo";case tt:i=r._payload,r=r._init;try{return fe(r(i))}catch{}}return null}function Ee(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Pe(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xt(r){var i=Pe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Mo(r){r._valueTracker||(r._valueTracker=xt(r))}function uf(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=Pe(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function Fo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function sc(r,i){var a=i.checked;return A({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function df(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function hf(r,i){i=i.checked,i!=null&&W(r,"checked",i,!1)}function oc(r,i){hf(r,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?ac(r,i.type,a):i.hasOwnProperty("defaultValue")&&ac(r,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function ff(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ac(r,i,a){(i!=="number"||Fo(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var is=Array.isArray;function si(r,i,a,c){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function lc(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return A({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function pf(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(is(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:ge(a)}}function mf(r,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function gf(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function vf(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?vf(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Uo,yf=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Uo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function ss(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aw=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(r){aw.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),os[i]=os[r]})});function _f(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||os.hasOwnProperty(r)&&os[r]?(""+i).trim():i+"px"}function wf(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=_f(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var lw=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(r,i){if(i){if(lw[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function dc(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function fc(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var pc=null,oi=null,ai=null;function Ef(r){if(r=Ns(r)){if(typeof pc!="function")throw Error(n(280));var i=r.stateNode;i&&(i=la(i),pc(r.stateNode,r.type,i))}}function Cf(r){oi?ai?ai.push(r):ai=[r]:oi=r}function Sf(){if(oi){var r=oi,i=ai;if(ai=oi=null,Ef(r),i)for(r=0;r<i.length;r++)Ef(i[r])}}function If(r,i){return r(i)}function xf(){}var mc=!1;function kf(r,i,a){if(mc)return r(i,a);mc=!0;try{return If(r,i,a)}finally{mc=!1,(oi!==null||ai!==null)&&(xf(),Sf())}}function as(r,i){var a=r.stateNode;if(a===null)return null;var c=la(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var gc=!1;if(h)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){gc=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{gc=!1}function cw(r,i,a,c,d,m,v,E,C){var P=Array.prototype.slice.call(arguments,3);try{i.apply(a,P)}catch(D){this.onError(D)}}var cs=!1,zo=null,Bo=!1,vc=null,uw={onError:function(r){cs=!0,zo=r}};function dw(r,i,a,c,d,m,v,E,C){cs=!1,zo=null,cw.apply(uw,arguments)}function hw(r,i,a,c,d,m,v,E,C){if(dw.apply(this,arguments),cs){if(cs){var P=zo;cs=!1,zo=null}else throw Error(n(198));Bo||(Bo=!0,vc=P)}}function Tr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Tf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Nf(r){if(Tr(r)!==r)throw Error(n(188))}function fw(r){var i=r.alternate;if(!i){if(i=Tr(r),i===null)throw Error(n(188));return i!==r?null:r}for(var a=r,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Nf(d),r;if(m===c)return Nf(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,E=d.child;E;){if(E===a){v=!0,a=d,c=m;break}if(E===c){v=!0,c=d,a=m;break}E=E.sibling}if(!v){for(E=m.child;E;){if(E===a){v=!0,a=m,c=d;break}if(E===c){v=!0,c=m,a=d;break}E=E.sibling}if(!v)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:i}function Pf(r){return r=fw(r),r!==null?Rf(r):null}function Rf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Rf(r);if(i!==null)return i;r=r.sibling}return null}var Af=e.unstable_scheduleCallback,bf=e.unstable_cancelCallback,pw=e.unstable_shouldYield,mw=e.unstable_requestPaint,ze=e.unstable_now,gw=e.unstable_getCurrentPriorityLevel,yc=e.unstable_ImmediatePriority,Of=e.unstable_UserBlockingPriority,Wo=e.unstable_NormalPriority,vw=e.unstable_LowPriority,Lf=e.unstable_IdlePriority,Vo=null,an=null;function yw(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Vo,r,void 0,(r.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Ew,_w=Math.log,ww=Math.LN2;function Ew(r){return r>>>=0,r===0?32:31-(_w(r)/ww|0)|0}var Ho=64,$o=4194304;function us(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Go(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var E=v&~d;E!==0?c=us(E):(m&=v,m!==0&&(c=us(m)))}else v=a&~d,v!==0?c=us(v):m!==0&&(c=us(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Kt(i),d=1<<a,c|=r[a],i&=~d;return c}function Cw(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sw(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-Kt(m),E=1<<v,C=d[v];C===-1?((E&a)===0||(E&c)!==0)&&(d[v]=Cw(E,i)):C<=i&&(r.expiredLanes|=E),m&=~E}}function _c(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function jf(){var r=Ho;return Ho<<=1,(Ho&4194240)===0&&(Ho=64),r}function wc(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ds(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Kt(i),r[i]=a}function Iw(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Kt(a),m=1<<d;i[d]=0,c[d]=-1,r[d]=-1,a&=~m}}function Ec(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Kt(a),d=1<<c;d&i|r[c]&i&&(r[c]|=i),a&=~d}}var ve=0;function Df(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Mf,Cc,Ff,Uf,zf,Sc=!1,Ko=[],Wn=null,Vn=null,Hn=null,hs=new Map,fs=new Map,$n=[],xw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(r,i){switch(r){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":hs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(i.pointerId)}}function ps(r,i,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ns(i),i!==null&&Cc(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function kw(r,i,a,c,d){switch(i){case"focusin":return Wn=ps(Wn,r,i,a,c,d),!0;case"dragenter":return Vn=ps(Vn,r,i,a,c,d),!0;case"mouseover":return Hn=ps(Hn,r,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return hs.set(m,ps(hs.get(m)||null,r,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fs.set(m,ps(fs.get(m)||null,r,i,a,c,d)),!0}return!1}function Wf(r){var i=Nr(r.target);if(i!==null){var a=Tr(i);if(a!==null){if(i=a.tag,i===13){if(i=Tf(a),i!==null){r.blockedOn=i,zf(r.priority,function(){Ff(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function qo(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=xc(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);hc=c,a.target.dispatchEvent(c),hc=null}else return i=Ns(a),i!==null&&Cc(i),r.blockedOn=a,!1;i.shift()}return!0}function Vf(r,i,a){qo(r)&&a.delete(i)}function Tw(){Sc=!1,Wn!==null&&qo(Wn)&&(Wn=null),Vn!==null&&qo(Vn)&&(Vn=null),Hn!==null&&qo(Hn)&&(Hn=null),hs.forEach(Vf),fs.forEach(Vf)}function ms(r,i){r.blockedOn===i&&(r.blockedOn=null,Sc||(Sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tw)))}function gs(r){function i(d){return ms(d,r)}if(0<Ko.length){ms(Ko[0],r);for(var a=1;a<Ko.length;a++){var c=Ko[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Wn!==null&&ms(Wn,r),Vn!==null&&ms(Vn,r),Hn!==null&&ms(Hn,r),hs.forEach(i),fs.forEach(i),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&$n.shift()}var li=q.ReactCurrentBatchConfig,Yo=!0;function Nw(r,i,a,c){var d=ve,m=li.transition;li.transition=null;try{ve=1,Ic(r,i,a,c)}finally{ve=d,li.transition=m}}function Pw(r,i,a,c){var d=ve,m=li.transition;li.transition=null;try{ve=4,Ic(r,i,a,c)}finally{ve=d,li.transition=m}}function Ic(r,i,a,c){if(Yo){var d=xc(r,i,a,c);if(d===null)Wc(r,i,c,Qo,a),Bf(r,c);else if(kw(d,r,i,a,c))c.stopPropagation();else if(Bf(r,c),i&4&&-1<xw.indexOf(r)){for(;d!==null;){var m=Ns(d);if(m!==null&&Mf(m),m=xc(r,i,a,c),m===null&&Wc(r,i,c,Qo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Wc(r,i,c,null,a)}}var Qo=null;function xc(r,i,a,c){if(Qo=null,r=fc(c),r=Nr(r),r!==null)if(i=Tr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Tf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Qo=r,null}function Hf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gw()){case yc:return 1;case Of:return 4;case Wo:case vw:return 16;case Lf:return 536870912;default:return 16}default:return 16}}var Gn=null,kc=null,Jo=null;function $f(){if(Jo)return Jo;var r,i=kc,a=i.length,c,d="value"in Gn?Gn.value:Gn.textContent,m=d.length;for(r=0;r<a&&i[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Jo=d.slice(r,1<c?1-c:void 0)}function Xo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Zo(){return!0}function Gf(){return!1}function kt(r){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(a=r[E],this[E]=a?a(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zo:Gf,this.isPropagationStopped=Gf,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=kt(ci),vs=A({},ci,{view:0,detail:0}),Rw=kt(vs),Nc,Pc,ys,ea=A({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ys&&(ys&&r.type==="mousemove"?(Nc=r.screenX-ys.screenX,Pc=r.screenY-ys.screenY):Pc=Nc=0,ys=r),Nc)},movementY:function(r){return"movementY"in r?r.movementY:Pc}}),Kf=kt(ea),Aw=A({},ea,{dataTransfer:0}),bw=kt(Aw),Ow=A({},vs,{relatedTarget:0}),Rc=kt(Ow),Lw=A({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),jw=kt(Lw),Dw=A({},ci,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Mw=kt(Dw),Fw=A({},ci,{data:0}),qf=kt(Fw),Uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ww(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Bw[r])?!!i[r]:!1}function Ac(){return Ww}var Vw=A({},vs,{key:function(r){if(r.key){var i=Uw[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Xo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?zw[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(r){return r.type==="keypress"?Xo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Hw=kt(Vw),$w=A({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=kt($w),Gw=A({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Kw=kt(Gw),qw=A({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yw=kt(qw),Qw=A({},ea,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Jw=kt(Qw),Xw=[9,13,27,32],bc=h&&"CompositionEvent"in window,_s=null;h&&"documentMode"in document&&(_s=document.documentMode);var Zw=h&&"TextEvent"in window&&!_s,Qf=h&&(!bc||_s&&8<_s&&11>=_s),Jf=" ",Xf=!1;function Zf(r,i){switch(r){case"keyup":return Xw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ui=!1;function e1(r,i){switch(r){case"compositionend":return ep(i);case"keypress":return i.which!==32?null:(Xf=!0,Jf);case"textInput":return r=i.data,r===Jf&&Xf?null:r;default:return null}}function t1(r,i){if(ui)return r==="compositionend"||!bc&&Zf(r,i)?(r=$f(),Jo=kc=Gn=null,ui=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qf&&i.locale!=="ko"?null:i.data;default:return null}}var n1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!n1[r.type]:i==="textarea"}function np(r,i,a,c){Cf(c),i=sa(i,"onChange"),0<i.length&&(a=new Tc("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var ws=null,Es=null;function r1(r){wp(r,0)}function ta(r){var i=mi(r);if(uf(i))return r}function i1(r,i){if(r==="change")return i}var rp=!1;if(h){var Oc;if(h){var Lc="oninput"in document;if(!Lc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),Lc=typeof ip.oninput=="function"}Oc=Lc}else Oc=!1;rp=Oc&&(!document.documentMode||9<document.documentMode)}function sp(){ws&&(ws.detachEvent("onpropertychange",op),Es=ws=null)}function op(r){if(r.propertyName==="value"&&ta(Es)){var i=[];np(i,Es,r,fc(r)),kf(r1,i)}}function s1(r,i,a){r==="focusin"?(sp(),ws=i,Es=a,ws.attachEvent("onpropertychange",op)):r==="focusout"&&sp()}function o1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ta(Es)}function a1(r,i){if(r==="click")return ta(i)}function l1(r,i){if(r==="input"||r==="change")return ta(i)}function c1(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var qt=typeof Object.is=="function"?Object.is:c1;function Cs(r,i){if(qt(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!f.call(i,d)||!qt(r[d],i[d]))return!1}return!0}function ap(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lp(r,i){var a=ap(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ap(a)}}function cp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?cp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function up(){for(var r=window,i=Fo();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Fo(r.document)}return i}function jc(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function u1(r){var i=up(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&cp(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!r.extend&&m>c&&(d=c,c=m,m=d),d=lp(a,m);var v=lp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),m>c?(r.addRange(i),r.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var d1=h&&"documentMode"in document&&11>=document.documentMode,di=null,Dc=null,Ss=null,Mc=!1;function dp(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||di==null||di!==Fo(c)||(c=di,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ss&&Cs(Ss,c)||(Ss=c,c=sa(Dc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=di)))}function na(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var hi={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Fc={},hp={};h&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function ra(r){if(Fc[r])return Fc[r];if(!hi[r])return r;var i=hi[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in hp)return Fc[r]=i[a];return r}var fp=ra("animationend"),pp=ra("animationiteration"),mp=ra("animationstart"),gp=ra("transitionend"),vp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(r,i){vp.set(r,i),l(i,[r])}for(var Uc=0;Uc<yp.length;Uc++){var zc=yp[Uc],h1=zc.toLowerCase(),f1=zc[0].toUpperCase()+zc.slice(1);Kn(h1,"on"+f1)}Kn(fp,"onAnimationEnd"),Kn(pp,"onAnimationIteration"),Kn(mp,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(gp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function _p(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,hw(c,i,void 0,r),r.currentTarget=null}function wp(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var E=c[v],C=E.instance,P=E.currentTarget;if(E=E.listener,C!==m&&d.isPropagationStopped())break e;_p(d,E,P),m=C}else for(v=0;v<c.length;v++){if(E=c[v],C=E.instance,P=E.currentTarget,E=E.listener,C!==m&&d.isPropagationStopped())break e;_p(d,E,P),m=C}}}if(Bo)throw r=vc,Bo=!1,vc=null,r}function ke(r,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=r+"__bubble";a.has(c)||(Ep(i,r,2,!1),a.add(c))}function Bc(r,i,a){var c=0;i&&(c|=4),Ep(a,r,c,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function xs(r){if(!r[ia]){r[ia]=!0,s.forEach(function(a){a!=="selectionchange"&&(p1.has(a)||Bc(a,!1,r),Bc(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[ia]||(i[ia]=!0,Bc("selectionchange",!1,i))}}function Ep(r,i,a,c){switch(Hf(i)){case 1:var d=Nw;break;case 4:d=Pw;break;default:d=Ic}a=d.bind(null,i,a,r),d=void 0,!gc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Wc(r,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var E=c.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;E!==null;){if(v=Nr(E),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}E=E.parentNode}}c=c.return}kf(function(){var P=m,D=fc(a),M=[];e:{var j=vp.get(r);if(j!==void 0){var H=Tc,G=r;switch(r){case"keypress":if(Xo(a)===0)break e;case"keydown":case"keyup":H=Hw;break;case"focusin":G="focus",H=Rc;break;case"focusout":G="blur",H=Rc;break;case"beforeblur":case"afterblur":H=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=bw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Kw;break;case fp:case pp:case mp:H=jw;break;case gp:H=Yw;break;case"scroll":H=Rw;break;case"wheel":H=Jw;break;case"copy":case"cut":case"paste":H=Mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Yf}var K=(i&4)!==0,Be=!K&&r==="scroll",T=K?j!==null?j+"Capture":null:j;K=[];for(var S=P,N;S!==null;){N=S;var U=N.stateNode;if(N.tag===5&&U!==null&&(N=U,T!==null&&(U=as(S,T),U!=null&&K.push(ks(S,U,N)))),Be)break;S=S.return}0<K.length&&(j=new H(j,G,null,a,D),M.push({event:j,listeners:K}))}}if((i&7)===0){e:{if(j=r==="mouseover"||r==="pointerover",H=r==="mouseout"||r==="pointerout",j&&a!==hc&&(G=a.relatedTarget||a.fromElement)&&(Nr(G)||G[yn]))break e;if((H||j)&&(j=D.window===D?D:(j=D.ownerDocument)?j.defaultView||j.parentWindow:window,H?(G=a.relatedTarget||a.toElement,H=P,G=G?Nr(G):null,G!==null&&(Be=Tr(G),G!==Be||G.tag!==5&&G.tag!==6)&&(G=null)):(H=null,G=P),H!==G)){if(K=Kf,U="onMouseLeave",T="onMouseEnter",S="mouse",(r==="pointerout"||r==="pointerover")&&(K=Yf,U="onPointerLeave",T="onPointerEnter",S="pointer"),Be=H==null?j:mi(H),N=G==null?j:mi(G),j=new K(U,S+"leave",H,a,D),j.target=Be,j.relatedTarget=N,U=null,Nr(D)===P&&(K=new K(T,S+"enter",G,a,D),K.target=N,K.relatedTarget=Be,U=K),Be=U,H&&G)t:{for(K=H,T=G,S=0,N=K;N;N=fi(N))S++;for(N=0,U=T;U;U=fi(U))N++;for(;0<S-N;)K=fi(K),S--;for(;0<N-S;)T=fi(T),N--;for(;S--;){if(K===T||T!==null&&K===T.alternate)break t;K=fi(K),T=fi(T)}K=null}else K=null;H!==null&&Cp(M,j,H,K,!1),G!==null&&Be!==null&&Cp(M,Be,G,K,!0)}}e:{if(j=P?mi(P):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var Y=i1;else if(tp(j))if(rp)Y=l1;else{Y=o1;var J=s1}else(H=j.nodeName)&&H.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(Y=a1);if(Y&&(Y=Y(r,P))){np(M,Y,a,D);break e}J&&J(r,j,P),r==="focusout"&&(J=j._wrapperState)&&J.controlled&&j.type==="number"&&ac(j,"number",j.value)}switch(J=P?mi(P):window,r){case"focusin":(tp(J)||J.contentEditable==="true")&&(di=J,Dc=P,Ss=null);break;case"focusout":Ss=Dc=di=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,dp(M,a,D);break;case"selectionchange":if(d1)break;case"keydown":case"keyup":dp(M,a,D)}var X;if(bc)e:{switch(r){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ui?Zf(r,a)&&(te="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Qf&&a.locale!=="ko"&&(ui||te!=="onCompositionStart"?te==="onCompositionEnd"&&ui&&(X=$f()):(Gn=D,kc="value"in Gn?Gn.value:Gn.textContent,ui=!0)),J=sa(P,te),0<J.length&&(te=new qf(te,r,null,a,D),M.push({event:te,listeners:J}),X?te.data=X:(X=ep(a),X!==null&&(te.data=X)))),(X=Zw?e1(r,a):t1(r,a))&&(P=sa(P,"onBeforeInput"),0<P.length&&(D=new qf("onBeforeInput","beforeinput",null,a,D),M.push({event:D,listeners:P}),D.data=X))}wp(M,i)})}function ks(r,i,a){return{instance:r,listener:i,currentTarget:a}}function sa(r,i){for(var a=i+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=as(r,a),m!=null&&c.unshift(ks(r,m,d)),m=as(r,i),m!=null&&c.push(ks(r,m,d))),r=r.return}return c}function fi(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Cp(r,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var E=a,C=E.alternate,P=E.stateNode;if(C!==null&&C===c)break;E.tag===5&&P!==null&&(E=P,d?(C=as(a,m),C!=null&&v.unshift(ks(a,C,E))):d||(C=as(a,m),C!=null&&v.push(ks(a,C,E)))),a=a.return}v.length!==0&&r.push({event:i,listeners:v})}var m1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function Sp(r){return(typeof r=="string"?r:""+r).replace(m1,`
`).replace(g1,"")}function oa(r,i,a){if(i=Sp(i),Sp(r)!==i&&a)throw Error(n(425))}function aa(){}var Vc=null,Hc=null;function $c(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(r){return Ip.resolve(null).then(r).catch(_1)}:Gc;function _1(r){setTimeout(function(){throw r})}function Kc(r,i){var a=i,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),gs(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);gs(i)}function qn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function xp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var pi=Math.random().toString(36).slice(2),ln="__reactFiber$"+pi,Ts="__reactProps$"+pi,yn="__reactContainer$"+pi,qc="__reactEvents$"+pi,w1="__reactListeners$"+pi,E1="__reactHandles$"+pi;function Nr(r){var i=r[ln];if(i)return i;for(var a=r.parentNode;a;){if(i=a[yn]||a[ln]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=xp(r);r!==null;){if(a=r[ln])return a;r=xp(r)}return i}r=a,a=r.parentNode}return null}function Ns(r){return r=r[ln]||r[yn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function mi(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function la(r){return r[Ts]||null}var Yc=[],gi=-1;function Yn(r){return{current:r}}function Te(r){0>gi||(r.current=Yc[gi],Yc[gi]=null,gi--)}function Ce(r,i){gi++,Yc[gi]=r.current,r.current=i}var Qn={},ot=Yn(Qn),gt=Yn(!1),Pr=Qn;function vi(r,i){var a=r.type.contextTypes;if(!a)return Qn;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function vt(r){return r=r.childContextTypes,r!=null}function ca(){Te(gt),Te(ot)}function kp(r,i,a){if(ot.current!==Qn)throw Error(n(168));Ce(ot,i),Ce(gt,a)}function Tp(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Ee(r)||"Unknown",d));return A({},a,c)}function ua(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Qn,Pr=ot.current,Ce(ot,r),Ce(gt,gt.current),!0}function Np(r,i,a){var c=r.stateNode;if(!c)throw Error(n(169));a?(r=Tp(r,i,Pr),c.__reactInternalMemoizedMergedChildContext=r,Te(gt),Te(ot),Ce(ot,r)):Te(gt),Ce(gt,a)}var _n=null,da=!1,Qc=!1;function Pp(r){_n===null?_n=[r]:_n.push(r)}function C1(r){da=!0,Pp(r)}function Jn(){if(!Qc&&_n!==null){Qc=!0;var r=0,i=ve;try{var a=_n;for(ve=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}_n=null,da=!1}catch(d){throw _n!==null&&(_n=_n.slice(r+1)),Af(yc,Jn),d}finally{ve=i,Qc=!1}}return null}var yi=[],_i=0,ha=null,fa=0,jt=[],Dt=0,Rr=null,wn=1,En="";function Ar(r,i){yi[_i++]=fa,yi[_i++]=ha,ha=r,fa=i}function Rp(r,i,a){jt[Dt++]=wn,jt[Dt++]=En,jt[Dt++]=Rr,Rr=r;var c=wn;r=En;var d=32-Kt(c)-1;c&=~(1<<d),a+=1;var m=32-Kt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,wn=1<<32-Kt(i)+d|a<<d|c,En=m+r}else wn=1<<m|a<<d|c,En=r}function Jc(r){r.return!==null&&(Ar(r,1),Rp(r,1,0))}function Xc(r){for(;r===ha;)ha=yi[--_i],yi[_i]=null,fa=yi[--_i],yi[_i]=null;for(;r===Rr;)Rr=jt[--Dt],jt[Dt]=null,En=jt[--Dt],jt[Dt]=null,wn=jt[--Dt],jt[Dt]=null}var Tt=null,Nt=null,Re=!1,Yt=null;function Ap(r,i){var a=zt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function bp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Tt=r,Nt=qn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Tt=r,Nt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:wn,overflow:En}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=zt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Tt=r,Nt=null,!0):!1;default:return!1}}function Zc(r){return(r.mode&1)!==0&&(r.flags&128)===0}function eu(r){if(Re){var i=Nt;if(i){var a=i;if(!bp(r,i)){if(Zc(r))throw Error(n(418));i=qn(a.nextSibling);var c=Tt;i&&bp(r,i)?Ap(c,a):(r.flags=r.flags&-4097|2,Re=!1,Tt=r)}}else{if(Zc(r))throw Error(n(418));r.flags=r.flags&-4097|2,Re=!1,Tt=r}}}function Op(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Tt=r}function pa(r){if(r!==Tt)return!1;if(!Re)return Op(r),Re=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!$c(r.type,r.memoizedProps)),i&&(i=Nt)){if(Zc(r))throw Lp(),Error(n(418));for(;i;)Ap(r,i),i=qn(i.nextSibling)}if(Op(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Nt=qn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Nt=null}}else Nt=Tt?qn(r.stateNode.nextSibling):null;return!0}function Lp(){for(var r=Nt;r;)r=qn(r.nextSibling)}function wi(){Nt=Tt=null,Re=!1}function tu(r){Yt===null?Yt=[r]:Yt.push(r)}var S1=q.ReactCurrentBatchConfig;function Ps(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,r));var d=c,m=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var E=d.refs;v===null?delete E[m]:E[m]=v},i._stringRef=m,i)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function ma(r,i){throw r=Object.prototype.toString.call(i),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function jp(r){var i=r._init;return i(r._payload)}function Dp(r){function i(T,S){if(r){var N=T.deletions;N===null?(T.deletions=[S],T.flags|=16):N.push(S)}}function a(T,S){if(!r)return null;for(;S!==null;)i(T,S),S=S.sibling;return null}function c(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function d(T,S){return T=sr(T,S),T.index=0,T.sibling=null,T}function m(T,S,N){return T.index=N,r?(N=T.alternate,N!==null?(N=N.index,N<S?(T.flags|=2,S):N):(T.flags|=2,S)):(T.flags|=1048576,S)}function v(T){return r&&T.alternate===null&&(T.flags|=2),T}function E(T,S,N,U){return S===null||S.tag!==6?(S=Gu(N,T.mode,U),S.return=T,S):(S=d(S,N),S.return=T,S)}function C(T,S,N,U){var Y=N.type;return Y===we?D(T,S,N.props.children,U,N.key):S!==null&&(S.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===tt&&jp(Y)===S.type)?(U=d(S,N.props),U.ref=Ps(T,S,N),U.return=T,U):(U=Ua(N.type,N.key,N.props,null,T.mode,U),U.ref=Ps(T,S,N),U.return=T,U)}function P(T,S,N,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=Ku(N,T.mode,U),S.return=T,S):(S=d(S,N.children||[]),S.return=T,S)}function D(T,S,N,U,Y){return S===null||S.tag!==7?(S=Ur(N,T.mode,U,Y),S.return=T,S):(S=d(S,N),S.return=T,S)}function M(T,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Gu(""+S,T.mode,N),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ue:return N=Ua(S.type,S.key,S.props,null,T.mode,N),N.ref=Ps(T,null,S),N.return=T,N;case ce:return S=Ku(S,T.mode,N),S.return=T,S;case tt:var U=S._init;return M(T,U(S._payload),N)}if(is(S)||Q(S))return S=Ur(S,T.mode,N,null),S.return=T,S;ma(T,S)}return null}function j(T,S,N,U){var Y=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return Y!==null?null:E(T,S,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ue:return N.key===Y?C(T,S,N,U):null;case ce:return N.key===Y?P(T,S,N,U):null;case tt:return Y=N._init,j(T,S,Y(N._payload),U)}if(is(N)||Q(N))return Y!==null?null:D(T,S,N,U,null);ma(T,N)}return null}function H(T,S,N,U,Y){if(typeof U=="string"&&U!==""||typeof U=="number")return T=T.get(N)||null,E(S,T,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ue:return T=T.get(U.key===null?N:U.key)||null,C(S,T,U,Y);case ce:return T=T.get(U.key===null?N:U.key)||null,P(S,T,U,Y);case tt:var J=U._init;return H(T,S,N,J(U._payload),Y)}if(is(U)||Q(U))return T=T.get(N)||null,D(S,T,U,Y,null);ma(S,U)}return null}function G(T,S,N,U){for(var Y=null,J=null,X=S,te=S=0,Je=null;X!==null&&te<N.length;te++){X.index>te?(Je=X,X=null):Je=X.sibling;var pe=j(T,X,N[te],U);if(pe===null){X===null&&(X=Je);break}r&&X&&pe.alternate===null&&i(T,X),S=m(pe,S,te),J===null?Y=pe:J.sibling=pe,J=pe,X=Je}if(te===N.length)return a(T,X),Re&&Ar(T,te),Y;if(X===null){for(;te<N.length;te++)X=M(T,N[te],U),X!==null&&(S=m(X,S,te),J===null?Y=X:J.sibling=X,J=X);return Re&&Ar(T,te),Y}for(X=c(T,X);te<N.length;te++)Je=H(X,T,te,N[te],U),Je!==null&&(r&&Je.alternate!==null&&X.delete(Je.key===null?te:Je.key),S=m(Je,S,te),J===null?Y=Je:J.sibling=Je,J=Je);return r&&X.forEach(function(or){return i(T,or)}),Re&&Ar(T,te),Y}function K(T,S,N,U){var Y=Q(N);if(typeof Y!="function")throw Error(n(150));if(N=Y.call(N),N==null)throw Error(n(151));for(var J=Y=null,X=S,te=S=0,Je=null,pe=N.next();X!==null&&!pe.done;te++,pe=N.next()){X.index>te?(Je=X,X=null):Je=X.sibling;var or=j(T,X,pe.value,U);if(or===null){X===null&&(X=Je);break}r&&X&&or.alternate===null&&i(T,X),S=m(or,S,te),J===null?Y=or:J.sibling=or,J=or,X=Je}if(pe.done)return a(T,X),Re&&Ar(T,te),Y;if(X===null){for(;!pe.done;te++,pe=N.next())pe=M(T,pe.value,U),pe!==null&&(S=m(pe,S,te),J===null?Y=pe:J.sibling=pe,J=pe);return Re&&Ar(T,te),Y}for(X=c(T,X);!pe.done;te++,pe=N.next())pe=H(X,T,te,pe.value,U),pe!==null&&(r&&pe.alternate!==null&&X.delete(pe.key===null?te:pe.key),S=m(pe,S,te),J===null?Y=pe:J.sibling=pe,J=pe);return r&&X.forEach(function(nE){return i(T,nE)}),Re&&Ar(T,te),Y}function Be(T,S,N,U){if(typeof N=="object"&&N!==null&&N.type===we&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ue:e:{for(var Y=N.key,J=S;J!==null;){if(J.key===Y){if(Y=N.type,Y===we){if(J.tag===7){a(T,J.sibling),S=d(J,N.props.children),S.return=T,T=S;break e}}else if(J.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===tt&&jp(Y)===J.type){a(T,J.sibling),S=d(J,N.props),S.ref=Ps(T,J,N),S.return=T,T=S;break e}a(T,J);break}else i(T,J);J=J.sibling}N.type===we?(S=Ur(N.props.children,T.mode,U,N.key),S.return=T,T=S):(U=Ua(N.type,N.key,N.props,null,T.mode,U),U.ref=Ps(T,S,N),U.return=T,T=U)}return v(T);case ce:e:{for(J=N.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){a(T,S.sibling),S=d(S,N.children||[]),S.return=T,T=S;break e}else{a(T,S);break}else i(T,S);S=S.sibling}S=Ku(N,T.mode,U),S.return=T,T=S}return v(T);case tt:return J=N._init,Be(T,S,J(N._payload),U)}if(is(N))return G(T,S,N,U);if(Q(N))return K(T,S,N,U);ma(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,S!==null&&S.tag===6?(a(T,S.sibling),S=d(S,N),S.return=T,T=S):(a(T,S),S=Gu(N,T.mode,U),S.return=T,T=S),v(T)):a(T,S)}return Be}var Ei=Dp(!0),Mp=Dp(!1),ga=Yn(null),va=null,Ci=null,nu=null;function ru(){nu=Ci=va=null}function iu(r){var i=ga.current;Te(ga),r._currentValue=i}function su(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function Si(r,i){va=r,nu=Ci=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(yt=!0),r.firstContext=null)}function Mt(r){var i=r._currentValue;if(nu!==r)if(r={context:r,memoizedValue:i,next:null},Ci===null){if(va===null)throw Error(n(308));Ci=r,va.dependencies={lanes:0,firstContext:r}}else Ci=Ci.next=r;return i}var br=null;function ou(r){br===null?br=[r]:br.push(r)}function Fp(r,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ou(i)):(a.next=d.next,d.next=a),i.interleaved=a,Cn(r,c)}function Cn(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Xn=!1;function au(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Up(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Sn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function Zn(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(de&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Cn(r,a)}return d=c.interleaved,d===null?(i.next=i,ou(c)):(i.next=d.next,d.next=i),c.interleaved=i,Cn(r,a)}function ya(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Ec(r,a)}}function zp(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function _a(r,i,a,c){var d=r.updateQueue;Xn=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var C=E,P=C.next;C.next=null,v===null?m=P:v.next=P,v=C;var D=r.alternate;D!==null&&(D=D.updateQueue,E=D.lastBaseUpdate,E!==v&&(E===null?D.firstBaseUpdate=P:E.next=P,D.lastBaseUpdate=C))}if(m!==null){var M=d.baseState;v=0,D=P=C=null,E=m;do{var j=E.lane,H=E.eventTime;if((c&j)===j){D!==null&&(D=D.next={eventTime:H,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var G=r,K=E;switch(j=i,H=a,K.tag){case 1:if(G=K.payload,typeof G=="function"){M=G.call(H,M,j);break e}M=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,j=typeof G=="function"?G.call(H,M,j):G,j==null)break e;M=A({},M,j);break e;case 2:Xn=!0}}E.callback!==null&&E.lane!==0&&(r.flags|=64,j=d.effects,j===null?d.effects=[E]:j.push(E))}else H={eventTime:H,lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},D===null?(P=D=H,C=M):D=D.next=H,v|=j;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;j=E,E=j.next,j.next=null,d.lastBaseUpdate=j,d.shared.pending=null}}while(!0);if(D===null&&(C=M),d.baseState=C,d.firstBaseUpdate=P,d.lastBaseUpdate=D,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);jr|=v,r.lanes=v,r.memoizedState=M}}function Bp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Rs={},cn=Yn(Rs),As=Yn(Rs),bs=Yn(Rs);function Or(r){if(r===Rs)throw Error(n(174));return r}function lu(r,i){switch(Ce(bs,i),Ce(As,r),Ce(cn,Rs),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:cc(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=cc(i,r)}Te(cn),Ce(cn,i)}function Ii(){Te(cn),Te(As),Te(bs)}function Wp(r){Or(bs.current);var i=Or(cn.current),a=cc(i,r.type);i!==a&&(Ce(As,r),Ce(cn,a))}function cu(r){As.current===r&&(Te(cn),Te(As))}var Oe=Yn(0);function wa(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uu=[];function du(){for(var r=0;r<uu.length;r++)uu[r]._workInProgressVersionPrimary=null;uu.length=0}var Ea=q.ReactCurrentDispatcher,hu=q.ReactCurrentBatchConfig,Lr=0,Le=null,Ve=null,Ye=null,Ca=!1,Os=!1,Ls=0,I1=0;function at(){throw Error(n(321))}function fu(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!qt(r[a],i[a]))return!1;return!0}function pu(r,i,a,c,d,m){if(Lr=m,Le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ea.current=r===null||r.memoizedState===null?N1:P1,r=a(c,d),Os){m=0;do{if(Os=!1,Ls=0,25<=m)throw Error(n(301));m+=1,Ye=Ve=null,i.updateQueue=null,Ea.current=R1,r=a(c,d)}while(Os)}if(Ea.current=xa,i=Ve!==null&&Ve.next!==null,Lr=0,Ye=Ve=Le=null,Ca=!1,i)throw Error(n(300));return r}function mu(){var r=Ls!==0;return Ls=0,r}function un(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Le.memoizedState=Ye=r:Ye=Ye.next=r,Ye}function Ft(){if(Ve===null){var r=Le.alternate;r=r!==null?r.memoizedState:null}else r=Ve.next;var i=Ye===null?Le.memoizedState:Ye.next;if(i!==null)Ye=i,Ve=r;else{if(r===null)throw Error(n(310));Ve=r,r={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ye===null?Le.memoizedState=Ye=r:Ye=Ye.next=r}return Ye}function js(r,i){return typeof i=="function"?i(r):i}function gu(r){var i=Ft(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=Ve,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var E=v=null,C=null,P=m;do{var D=P.lane;if((Lr&D)===D)C!==null&&(C=C.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),c=P.hasEagerState?P.eagerState:r(c,P.action);else{var M={lane:D,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};C===null?(E=C=M,v=c):C=C.next=M,Le.lanes|=D,jr|=D}P=P.next}while(P!==null&&P!==m);C===null?v=c:C.next=E,qt(c,i.memoizedState)||(yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do m=d.lane,Le.lanes|=m,jr|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function vu(r){var i=Ft(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);qt(m,i.memoizedState)||(yt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Vp(){}function Hp(r,i){var a=Le,c=Ft(),d=i(),m=!qt(c.memoizedState,d);if(m&&(c.memoizedState=d,yt=!0),c=c.queue,yu(Kp.bind(null,a,c,r),[r]),c.getSnapshot!==i||m||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ds(9,Gp.bind(null,a,c,d,i),void 0,null),Qe===null)throw Error(n(349));(Lr&30)!==0||$p(a,i,d)}return d}function $p(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Le.updateQueue,i===null?(i={lastEffect:null,stores:null},Le.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Gp(r,i,a,c){i.value=a,i.getSnapshot=c,qp(i)&&Yp(r)}function Kp(r,i,a){return a(function(){qp(i)&&Yp(r)})}function qp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!qt(r,a)}catch{return!0}}function Yp(r){var i=Cn(r,1);i!==null&&Zt(i,r,1,-1)}function Qp(r){var i=un();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:r},i.queue=r,r=r.dispatch=T1.bind(null,Le,r),[i.memoizedState,r]}function Ds(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=Le.updateQueue,i===null?(i={lastEffect:null,stores:null},Le.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function Jp(){return Ft().memoizedState}function Sa(r,i,a,c){var d=un();Le.flags|=r,d.memoizedState=Ds(1|i,a,void 0,c===void 0?null:c)}function Ia(r,i,a,c){var d=Ft();c=c===void 0?null:c;var m=void 0;if(Ve!==null){var v=Ve.memoizedState;if(m=v.destroy,c!==null&&fu(c,v.deps)){d.memoizedState=Ds(i,a,m,c);return}}Le.flags|=r,d.memoizedState=Ds(1|i,a,m,c)}function Xp(r,i){return Sa(8390656,8,r,i)}function yu(r,i){return Ia(2048,8,r,i)}function Zp(r,i){return Ia(4,2,r,i)}function em(r,i){return Ia(4,4,r,i)}function tm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function nm(r,i,a){return a=a!=null?a.concat([r]):null,Ia(4,4,tm.bind(null,i,r),a)}function _u(){}function rm(r,i){var a=Ft();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function im(r,i){var a=Ft();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function sm(r,i,a){return(Lr&21)===0?(r.baseState&&(r.baseState=!1,yt=!0),r.memoizedState=a):(qt(a,i)||(a=jf(),Le.lanes|=a,jr|=a,r.baseState=!0),i)}function x1(r,i){var a=ve;ve=a!==0&&4>a?a:4,r(!0);var c=hu.transition;hu.transition={};try{r(!1),i()}finally{ve=a,hu.transition=c}}function om(){return Ft().memoizedState}function k1(r,i,a){var c=rr(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},am(r))lm(i,a);else if(a=Fp(r,i,a,c),a!==null){var d=ht();Zt(a,r,c,d),cm(a,i,c)}}function T1(r,i,a){var c=rr(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(am(r))lm(i,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,E=m(v,a);if(d.hasEagerState=!0,d.eagerState=E,qt(E,v)){var C=i.interleaved;C===null?(d.next=d,ou(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Fp(r,i,d,c),a!==null&&(d=ht(),Zt(a,r,c,d),cm(a,i,c))}}function am(r){var i=r.alternate;return r===Le||i!==null&&i===Le}function lm(r,i){Os=Ca=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function cm(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Ec(r,a)}}var xa={readContext:Mt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},N1={readContext:Mt,useCallback:function(r,i){return un().memoizedState=[r,i===void 0?null:i],r},useContext:Mt,useEffect:Xp,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,Sa(4194308,4,tm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Sa(4194308,4,r,i)},useInsertionEffect:function(r,i){return Sa(4,2,r,i)},useMemo:function(r,i){var a=un();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=un();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=k1.bind(null,Le,r),[c.memoizedState,r]},useRef:function(r){var i=un();return r={current:r},i.memoizedState=r},useState:Qp,useDebugValue:_u,useDeferredValue:function(r){return un().memoizedState=r},useTransition:function(){var r=Qp(!1),i=r[0];return r=x1.bind(null,r[1]),un().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=Le,d=un();if(Re){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),Qe===null)throw Error(n(349));(Lr&30)!==0||$p(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Xp(Kp.bind(null,c,m,r),[r]),c.flags|=2048,Ds(9,Gp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var r=un(),i=Qe.identifierPrefix;if(Re){var a=En,c=wn;a=(c&~(1<<32-Kt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ls++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=I1++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},P1={readContext:Mt,useCallback:rm,useContext:Mt,useEffect:yu,useImperativeHandle:nm,useInsertionEffect:Zp,useLayoutEffect:em,useMemo:im,useReducer:gu,useRef:Jp,useState:function(){return gu(js)},useDebugValue:_u,useDeferredValue:function(r){var i=Ft();return sm(i,Ve.memoizedState,r)},useTransition:function(){var r=gu(js)[0],i=Ft().memoizedState;return[r,i]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:om,unstable_isNewReconciler:!1},R1={readContext:Mt,useCallback:rm,useContext:Mt,useEffect:yu,useImperativeHandle:nm,useInsertionEffect:Zp,useLayoutEffect:em,useMemo:im,useReducer:vu,useRef:Jp,useState:function(){return vu(js)},useDebugValue:_u,useDeferredValue:function(r){var i=Ft();return Ve===null?i.memoizedState=r:sm(i,Ve.memoizedState,r)},useTransition:function(){var r=vu(js)[0],i=Ft().memoizedState;return[r,i]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:om,unstable_isNewReconciler:!1};function Qt(r,i){if(r&&r.defaultProps){i=A({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function wu(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:A({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ka={isMounted:function(r){return(r=r._reactInternals)?Tr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=ht(),d=rr(r),m=Sn(c,d);m.payload=i,a!=null&&(m.callback=a),i=Zn(r,m,d),i!==null&&(Zt(i,r,d,c),ya(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=ht(),d=rr(r),m=Sn(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Zn(r,m,d),i!==null&&(Zt(i,r,d,c),ya(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=ht(),c=rr(r),d=Sn(a,c);d.tag=2,i!=null&&(d.callback=i),i=Zn(r,d,c),i!==null&&(Zt(i,r,c,a),ya(i,r,c))}};function um(r,i,a,c,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!Cs(a,c)||!Cs(d,m):!0}function dm(r,i,a){var c=!1,d=Qn,m=i.contextType;return typeof m=="object"&&m!==null?m=Mt(m):(d=vt(i)?Pr:ot.current,c=i.contextTypes,m=(c=c!=null)?vi(r,d):Qn),i=new i(a,m),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),i}function hm(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&ka.enqueueReplaceState(i,i.state,null)}function Eu(r,i,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},au(r);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Mt(m):(m=vt(i)?Pr:ot.current,d.context=vi(r,m)),d.state=r.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(wu(r,i,m,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ka.enqueueReplaceState(d,d.state,null),_a(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function xi(r,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:i,stack:d,digest:null}}function Cu(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function Su(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var A1=typeof WeakMap=="function"?WeakMap:Map;function fm(r,i,a){a=Sn(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Oa||(Oa=!0,Fu=c),Su(r,i)},a}function pm(r,i,a){a=Sn(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Su(r,i)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Su(r,i),typeof c!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function mm(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new A1;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),r=$1.bind(null,r,i,a),i.then(r,r))}function gm(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function vm(r,i,a,c,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Sn(-1,1),i.tag=2,Zn(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var b1=q.ReactCurrentOwner,yt=!1;function dt(r,i,a,c){i.child=r===null?Mp(i,null,a,c):Ei(i,r.child,a,c)}function ym(r,i,a,c,d){a=a.render;var m=i.ref;return Si(i,d),c=pu(r,i,a,c,m,d),a=mu(),r!==null&&!yt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,In(r,i,d)):(Re&&a&&Jc(i),i.flags|=1,dt(r,i,c,d),i.child)}function _m(r,i,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!$u(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,wm(r,i,m,c,d)):(r=Ua(a.type,null,c,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Cs,a(v,c)&&r.ref===i.ref)return In(r,i,d)}return i.flags|=1,r=sr(m,c),r.ref=i.ref,r.return=i,i.child=r}function wm(r,i,a,c,d){if(r!==null){var m=r.memoizedProps;if(Cs(m,c)&&r.ref===i.ref)if(yt=!1,i.pendingProps=c=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(yt=!0);else return i.lanes=r.lanes,In(r,i,d)}return Iu(r,i,a,c,d)}function Em(r,i,a){var c=i.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Ti,Pt),Pt|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Ce(Ti,Pt),Pt|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ce(Ti,Pt),Pt|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ce(Ti,Pt),Pt|=c;return dt(r,i,d,a),i.child}function Cm(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Iu(r,i,a,c,d){var m=vt(a)?Pr:ot.current;return m=vi(i,m),Si(i,d),a=pu(r,i,a,c,m,d),c=mu(),r!==null&&!yt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,In(r,i,d)):(Re&&c&&Jc(i),i.flags|=1,dt(r,i,a,d),i.child)}function Sm(r,i,a,c,d){if(vt(a)){var m=!0;ua(i)}else m=!1;if(Si(i,d),i.stateNode===null)Na(r,i),dm(i,a,c),Eu(i,a,c,d),c=!0;else if(r===null){var v=i.stateNode,E=i.memoizedProps;v.props=E;var C=v.context,P=a.contextType;typeof P=="object"&&P!==null?P=Mt(P):(P=vt(a)?Pr:ot.current,P=vi(i,P));var D=a.getDerivedStateFromProps,M=typeof D=="function"||typeof v.getSnapshotBeforeUpdate=="function";M||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==c||C!==P)&&hm(i,v,c,P),Xn=!1;var j=i.memoizedState;v.state=j,_a(i,c,v,d),C=i.memoizedState,E!==c||j!==C||gt.current||Xn?(typeof D=="function"&&(wu(i,a,D,c),C=i.memoizedState),(E=Xn||um(i,a,E,c,j,C,P))?(M||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=P,c=E):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Up(r,i),E=i.memoizedProps,P=i.type===i.elementType?E:Qt(i.type,E),v.props=P,M=i.pendingProps,j=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=Mt(C):(C=vt(a)?Pr:ot.current,C=vi(i,C));var H=a.getDerivedStateFromProps;(D=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==M||j!==C)&&hm(i,v,c,C),Xn=!1,j=i.memoizedState,v.state=j,_a(i,c,v,d);var G=i.memoizedState;E!==M||j!==G||gt.current||Xn?(typeof H=="function"&&(wu(i,a,H,c),G=i.memoizedState),(P=Xn||um(i,a,P,c,j,G,C)||!1)?(D||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,G,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,G,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=G),v.props=c,v.state=G,v.context=C,c=P):(typeof v.componentDidUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(i.flags|=1024),c=!1)}return xu(r,i,a,c,m,d)}function xu(r,i,a,c,d,m){Cm(r,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Np(i,a,!1),In(r,i,m);c=i.stateNode,b1.current=i;var E=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&v?(i.child=Ei(i,r.child,null,m),i.child=Ei(i,null,E,m)):dt(r,i,E,m),i.memoizedState=c.state,d&&Np(i,a,!0),i.child}function Im(r){var i=r.stateNode;i.pendingContext?kp(r,i.pendingContext,i.pendingContext!==i.context):i.context&&kp(r,i.context,!1),lu(r,i.containerInfo)}function xm(r,i,a,c,d){return wi(),tu(d),i.flags|=256,dt(r,i,a,c),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Tu(r){return{baseLanes:r,cachePool:null,transitions:null}}function km(r,i,a){var c=i.pendingProps,d=Oe.current,m=!1,v=(i.flags&128)!==0,E;if((E=v)||(E=r!==null&&r.memoizedState===null?!1:(d&2)!==0),E?(m=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ce(Oe,d&1),r===null)return eu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,r=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=za(v,c,0,null),r=Ur(r,c,a,null),m.return=i,r.return=i,m.sibling=r,i.child=m,i.child.memoizedState=Tu(a),i.memoizedState=ku,r):Nu(i,v));if(d=r.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return O1(r,i,v,c,E,d,a);if(m){m=c.fallback,v=i.mode,d=r.child,E=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=sr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),E!==null?m=sr(E,m):(m=Ur(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=r.child.memoizedState,v=v===null?Tu(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,i.memoizedState=ku,c}return m=r.child,r=m.sibling,c=sr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function Nu(r,i){return i=za({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Ta(r,i,a,c){return c!==null&&tu(c),Ei(i,r.child,null,a),r=Nu(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function O1(r,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Cu(Error(n(422))),Ta(r,i,v,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=za({mode:"visible",children:c.children},d,0,null),m=Ur(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ei(i,r.child,null,v),i.child.memoizedState=Tu(v),i.memoizedState=ku,m);if((i.mode&1)===0)return Ta(r,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var E=c.dgst;return c=E,m=Error(n(419)),c=Cu(m,c,void 0),Ta(r,i,v,c)}if(E=(v&r.childLanes)!==0,yt||E){if(c=Qe,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Cn(r,d),Zt(c,r,d,-1))}return Hu(),c=Cu(Error(n(421))),Ta(r,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=G1.bind(null,r),d._reactRetry=i,null):(r=m.treeContext,Nt=qn(d.nextSibling),Tt=i,Re=!0,Yt=null,r!==null&&(jt[Dt++]=wn,jt[Dt++]=En,jt[Dt++]=Rr,wn=r.id,En=r.overflow,Rr=i),i=Nu(i,c.children),i.flags|=4096,i)}function Tm(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),su(r.return,i,a)}function Pu(r,i,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Nm(r,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(dt(r,i,c.children,a),c=Oe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Tm(r,a,i);else if(r.tag===19)Tm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ce(Oe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&wa(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Pu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&wa(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Pu(i,!0,a,null,m);break;case"together":Pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function In(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),jr|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(n(153));if(i.child!==null){for(r=i.child,a=sr(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=sr(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function L1(r,i,a){switch(i.tag){case 3:Im(i),wi();break;case 5:Wp(i);break;case 1:vt(i.type)&&ua(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ce(ga,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ce(Oe,Oe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?km(r,i,a):(Ce(Oe,Oe.current&1),r=In(r,i,a),r!==null?r.sibling:null);Ce(Oe,Oe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return Nm(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(Oe,Oe.current),c)break;return null;case 22:case 23:return i.lanes=0,Em(r,i,a)}return In(r,i,a)}var Pm,Ru,Rm,Am;Pm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},Rm=function(r,i,a,c){var d=r.memoizedProps;if(d!==c){r=i.stateNode,Or(cn.current);var m=null;switch(a){case"input":d=sc(r,d),c=sc(r,c),m=[];break;case"select":d=A({},d,{value:void 0}),c=A({},c,{value:void 0}),m=[];break;case"textarea":d=lc(r,d),c=lc(r,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=aa)}uc(a,c);var v;a=null;for(P in d)if(!c.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var E=d[P];for(v in E)E.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?m||(m=[]):(m=m||[]).push(P,null));for(P in c){var C=c[P];if(E=d!=null?d[P]:void 0,c.hasOwnProperty(P)&&C!==E&&(C!=null||E!=null))if(P==="style")if(E){for(v in E)!E.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&E[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(P,a)),a=C;else P==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,E=E?E.__html:void 0,C!=null&&E!==C&&(m=m||[]).push(P,C)):P==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(P,""+C):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(C!=null&&P==="onScroll"&&ke("scroll",r),m||E===C||(m=[])):(m=m||[]).push(P,C))}a&&(m=m||[]).push("style",a);var P=m;(i.updateQueue=P)&&(i.flags|=4)}},Am=function(r,i,a,c){a!==c&&(i.flags|=4)};function Ms(r,i){if(!Re)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function lt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function j1(r,i,a){var c=i.pendingProps;switch(Xc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(i),null;case 1:return vt(i.type)&&ca(),lt(i),null;case 3:return c=i.stateNode,Ii(),Te(gt),Te(ot),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(pa(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Yt!==null&&(Bu(Yt),Yt=null))),Ru(r,i),lt(i),null;case 5:cu(i);var d=Or(bs.current);if(a=i.type,r!==null&&i.stateNode!=null)Rm(r,i,a,c,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return lt(i),null}if(r=Or(cn.current),pa(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[ln]=i,c[Ts]=m,r=(i.mode&1)!==0,a){case"dialog":ke("cancel",c),ke("close",c);break;case"iframe":case"object":case"embed":ke("load",c);break;case"video":case"audio":for(d=0;d<Is.length;d++)ke(Is[d],c);break;case"source":ke("error",c);break;case"img":case"image":case"link":ke("error",c),ke("load",c);break;case"details":ke("toggle",c);break;case"input":df(c,m),ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},ke("invalid",c);break;case"textarea":pf(c,m),ke("invalid",c)}uc(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var E=m[v];v==="children"?typeof E=="string"?c.textContent!==E&&(m.suppressHydrationWarning!==!0&&oa(c.textContent,E,r),d=["children",E]):typeof E=="number"&&c.textContent!==""+E&&(m.suppressHydrationWarning!==!0&&oa(c.textContent,E,r),d=["children",""+E]):o.hasOwnProperty(v)&&E!=null&&v==="onScroll"&&ke("scroll",c)}switch(a){case"input":Mo(c),ff(c,m,!0);break;case"textarea":Mo(c),gf(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=aa)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vf(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[ln]=i,r[Ts]=c,Pm(r,i,!1,!1),i.stateNode=r;e:{switch(v=dc(a,c),a){case"dialog":ke("cancel",r),ke("close",r),d=c;break;case"iframe":case"object":case"embed":ke("load",r),d=c;break;case"video":case"audio":for(d=0;d<Is.length;d++)ke(Is[d],r);d=c;break;case"source":ke("error",r),d=c;break;case"img":case"image":case"link":ke("error",r),ke("load",r),d=c;break;case"details":ke("toggle",r),d=c;break;case"input":df(r,c),d=sc(r,c),ke("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=A({},c,{value:void 0}),ke("invalid",r);break;case"textarea":pf(r,c),d=lc(r,c),ke("invalid",r);break;default:d=c}uc(a,d),E=d;for(m in E)if(E.hasOwnProperty(m)){var C=E[m];m==="style"?wf(r,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yf(r,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&ss(r,C):typeof C=="number"&&ss(r,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&ke("scroll",r):C!=null&&W(r,m,C,v))}switch(a){case"input":Mo(r),ff(r,c,!1);break;case"textarea":Mo(r),gf(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ge(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?si(r,!!c.multiple,m,!1):c.defaultValue!=null&&si(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=aa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return lt(i),null;case 6:if(r&&i.stateNode!=null)Am(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Or(bs.current),Or(cn.current),pa(i)){if(c=i.stateNode,a=i.memoizedProps,c[ln]=i,(m=c.nodeValue!==a)&&(r=Tt,r!==null))switch(r.tag){case 3:oa(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&oa(c.nodeValue,a,(r.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ln]=i,i.stateNode=c}return lt(i),null;case 13:if(Te(Oe),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Re&&Nt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lp(),wi(),i.flags|=98560,m=!1;else if(m=pa(i),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[ln]=i}else wi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;lt(i),m=!1}else Yt!==null&&(Bu(Yt),Yt=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Oe.current&1)!==0?He===0&&(He=3):Hu())),i.updateQueue!==null&&(i.flags|=4),lt(i),null);case 4:return Ii(),Ru(r,i),r===null&&xs(i.stateNode.containerInfo),lt(i),null;case 10:return iu(i.type._context),lt(i),null;case 17:return vt(i.type)&&ca(),lt(i),null;case 19:if(Te(Oe),m=i.memoizedState,m===null)return lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Ms(m,!1);else{if(He!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(v=wa(r),v!==null){for(i.flags|=128,Ms(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,r=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ce(Oe,Oe.current&1|2),i.child}r=r.sibling}m.tail!==null&&ze()>Ni&&(i.flags|=128,c=!0,Ms(m,!1),i.lanes=4194304)}else{if(!c)if(r=wa(v),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ms(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Re)return lt(i),null}else 2*ze()-m.renderingStartTime>Ni&&a!==1073741824&&(i.flags|=128,c=!0,Ms(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ze(),i.sibling=null,a=Oe.current,Ce(Oe,c?a&1|2:a&1),i):(lt(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Pt&1073741824)!==0&&(lt(i),i.subtreeFlags&6&&(i.flags|=8192)):lt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function D1(r,i){switch(Xc(i),i.tag){case 1:return vt(i.type)&&ca(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Ii(),Te(gt),Te(ot),du(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return cu(i),null;case 13:if(Te(Oe),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(n(340));wi()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Te(Oe),null;case 4:return Ii(),null;case 10:return iu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Pa=!1,ct=!1,M1=typeof WeakSet=="function"?WeakSet:Set,$=null;function ki(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){De(r,i,c)}else a.current=null}function Au(r,i,a){try{a()}catch(c){De(r,i,c)}}var bm=!1;function F1(r,i){if(Vc=Yo,r=up(),jc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,E=-1,C=-1,P=0,D=0,M=r,j=null;t:for(;;){for(var H;M!==a||d!==0&&M.nodeType!==3||(E=v+d),M!==m||c!==0&&M.nodeType!==3||(C=v+c),M.nodeType===3&&(v+=M.nodeValue.length),(H=M.firstChild)!==null;)j=M,M=H;for(;;){if(M===r)break t;if(j===a&&++P===d&&(E=v),j===m&&++D===c&&(C=v),(H=M.nextSibling)!==null)break;M=j,j=M.parentNode}M=H}a=E===-1||C===-1?null:{start:E,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:r,selectionRange:a},Yo=!1,$=i;$!==null;)if(i=$,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,$=r;else for(;$!==null;){i=$;try{var G=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,Be=G.memoizedState,T=i.stateNode,S=T.getSnapshotBeforeUpdate(i.elementType===i.type?K:Qt(i.type,K),Be);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var N=i.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(U){De(i,i.return,U)}if(r=i.sibling,r!==null){r.return=i.return,$=r;break}$=i.return}return G=bm,bm=!1,G}function Fs(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&Au(i,a,m)}d=d.next}while(d!==c)}}function Ra(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bu(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Om(r){var i=r.alternate;i!==null&&(r.alternate=null,Om(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[ln],delete i[Ts],delete i[qc],delete i[w1],delete i[E1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Lm(r){return r.tag===5||r.tag===3||r.tag===4}function jm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Lm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ou(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=aa));else if(c!==4&&(r=r.child,r!==null))for(Ou(r,i,a),r=r.sibling;r!==null;)Ou(r,i,a),r=r.sibling}function Lu(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Lu(r,i,a),r=r.sibling;r!==null;)Lu(r,i,a),r=r.sibling}var nt=null,Jt=!1;function er(r,i,a){for(a=a.child;a!==null;)Dm(r,i,a),a=a.sibling}function Dm(r,i,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Vo,a)}catch{}switch(a.tag){case 5:ct||ki(a,i);case 6:var c=nt,d=Jt;nt=null,er(r,i,a),nt=c,Jt=d,nt!==null&&(Jt?(r=nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):nt.removeChild(a.stateNode));break;case 18:nt!==null&&(Jt?(r=nt,a=a.stateNode,r.nodeType===8?Kc(r.parentNode,a):r.nodeType===1&&Kc(r,a),gs(r)):Kc(nt,a.stateNode));break;case 4:c=nt,d=Jt,nt=a.stateNode.containerInfo,Jt=!0,er(r,i,a),nt=c,Jt=d;break;case 0:case 11:case 14:case 15:if(!ct&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Au(a,i,v),d=d.next}while(d!==c)}er(r,i,a);break;case 1:if(!ct&&(ki(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(E){De(a,i,E)}er(r,i,a);break;case 21:er(r,i,a);break;case 22:a.mode&1?(ct=(c=ct)||a.memoizedState!==null,er(r,i,a),ct=c):er(r,i,a);break;default:er(r,i,a)}}function Mm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new M1),i.forEach(function(c){var d=K1.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Xt(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=r,v=i,E=v;e:for(;E!==null;){switch(E.tag){case 5:nt=E.stateNode,Jt=!1;break e;case 3:nt=E.stateNode.containerInfo,Jt=!0;break e;case 4:nt=E.stateNode.containerInfo,Jt=!0;break e}E=E.return}if(nt===null)throw Error(n(160));Dm(m,v,d),nt=null,Jt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(P){De(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fm(i,r),i=i.sibling}function Fm(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Xt(i,r),dn(r),c&4){try{Fs(3,r,r.return),Ra(3,r)}catch(K){De(r,r.return,K)}try{Fs(5,r,r.return)}catch(K){De(r,r.return,K)}}break;case 1:Xt(i,r),dn(r),c&512&&a!==null&&ki(a,a.return);break;case 5:if(Xt(i,r),dn(r),c&512&&a!==null&&ki(a,a.return),r.flags&32){var d=r.stateNode;try{ss(d,"")}catch(K){De(r,r.return,K)}}if(c&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,E=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{E==="input"&&m.type==="radio"&&m.name!=null&&hf(d,m),dc(E,v);var P=dc(E,m);for(v=0;v<C.length;v+=2){var D=C[v],M=C[v+1];D==="style"?wf(d,M):D==="dangerouslySetInnerHTML"?yf(d,M):D==="children"?ss(d,M):W(d,D,M,P)}switch(E){case"input":oc(d,m);break;case"textarea":mf(d,m);break;case"select":var j=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var H=m.value;H!=null?si(d,!!m.multiple,H,!1):j!==!!m.multiple&&(m.defaultValue!=null?si(d,!!m.multiple,m.defaultValue,!0):si(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ts]=m}catch(K){De(r,r.return,K)}}break;case 6:if(Xt(i,r),dn(r),c&4){if(r.stateNode===null)throw Error(n(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(K){De(r,r.return,K)}}break;case 3:if(Xt(i,r),dn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(i.containerInfo)}catch(K){De(r,r.return,K)}break;case 4:Xt(i,r),dn(r);break;case 13:Xt(i,r),dn(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Mu=ze())),c&4&&Mm(r);break;case 22:if(D=a!==null&&a.memoizedState!==null,r.mode&1?(ct=(P=ct)||D,Xt(i,r),ct=P):Xt(i,r),dn(r),c&8192){if(P=r.memoizedState!==null,(r.stateNode.isHidden=P)&&!D&&(r.mode&1)!==0)for($=r,D=r.child;D!==null;){for(M=$=D;$!==null;){switch(j=$,H=j.child,j.tag){case 0:case 11:case 14:case 15:Fs(4,j,j.return);break;case 1:ki(j,j.return);var G=j.stateNode;if(typeof G.componentWillUnmount=="function"){c=j,a=j.return;try{i=c,G.props=i.memoizedProps,G.state=i.memoizedState,G.componentWillUnmount()}catch(K){De(c,a,K)}}break;case 5:ki(j,j.return);break;case 22:if(j.memoizedState!==null){Bm(M);continue}}H!==null?(H.return=j,$=H):Bm(M)}D=D.sibling}e:for(D=null,M=r;;){if(M.tag===5){if(D===null){D=M;try{d=M.stateNode,P?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(E=M.stateNode,C=M.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,E.style.display=_f("display",v))}catch(K){De(r,r.return,K)}}}else if(M.tag===6){if(D===null)try{M.stateNode.nodeValue=P?"":M.memoizedProps}catch(K){De(r,r.return,K)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===r)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===r)break e;for(;M.sibling===null;){if(M.return===null||M.return===r)break e;D===M&&(D=null),M=M.return}D===M&&(D=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Xt(i,r),dn(r),c&4&&Mm(r);break;case 21:break;default:Xt(i,r),dn(r)}}function dn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Lm(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ss(d,""),c.flags&=-33);var m=jm(r);Lu(r,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,E=jm(r);Ou(r,E,v);break;default:throw Error(n(161))}}catch(C){De(r,r.return,C)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function U1(r,i,a){$=r,Um(r)}function Um(r,i,a){for(var c=(r.mode&1)!==0;$!==null;){var d=$,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Pa;if(!v){var E=d.alternate,C=E!==null&&E.memoizedState!==null||ct;E=Pa;var P=ct;if(Pa=v,(ct=C)&&!P)for($=d;$!==null;)v=$,C=v.child,v.tag===22&&v.memoizedState!==null?Wm(d):C!==null?(C.return=v,$=C):Wm(d);for(;m!==null;)$=m,Um(m),m=m.sibling;$=d,Pa=E,ct=P}zm(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,$=m):zm(r)}}function zm(r){for(;$!==null;){var i=$;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ct||Ra(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!ct)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Qt(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Bp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Bp(i,v,a)}break;case 5:var E=i.stateNode;if(a===null&&i.flags&4){a=E;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var D=P.memoizedState;if(D!==null){var M=D.dehydrated;M!==null&&gs(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ct||i.flags&512&&bu(i)}catch(j){De(i,i.return,j)}}if(i===r){$=null;break}if(a=i.sibling,a!==null){a.return=i.return,$=a;break}$=i.return}}function Bm(r){for(;$!==null;){var i=$;if(i===r){$=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$=a;break}$=i.return}}function Wm(r){for(;$!==null;){var i=$;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ra(4,i)}catch(C){De(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){De(i,d,C)}}var m=i.return;try{bu(i)}catch(C){De(i,m,C)}break;case 5:var v=i.return;try{bu(i)}catch(C){De(i,v,C)}}}catch(C){De(i,i.return,C)}if(i===r){$=null;break}var E=i.sibling;if(E!==null){E.return=i.return,$=E;break}$=i.return}}var z1=Math.ceil,Aa=q.ReactCurrentDispatcher,ju=q.ReactCurrentOwner,Ut=q.ReactCurrentBatchConfig,de=0,Qe=null,We=null,rt=0,Pt=0,Ti=Yn(0),He=0,Us=null,jr=0,ba=0,Du=0,zs=null,_t=null,Mu=0,Ni=1/0,xn=null,Oa=!1,Fu=null,tr=null,La=!1,nr=null,ja=0,Bs=0,Uu=null,Da=-1,Ma=0;function ht(){return(de&6)!==0?ze():Da!==-1?Da:Da=ze()}function rr(r){return(r.mode&1)===0?1:(de&2)!==0&&rt!==0?rt&-rt:S1.transition!==null?(Ma===0&&(Ma=jf()),Ma):(r=ve,r!==0||(r=window.event,r=r===void 0?16:Hf(r.type)),r)}function Zt(r,i,a,c){if(50<Bs)throw Bs=0,Uu=null,Error(n(185));ds(r,a,c),((de&2)===0||r!==Qe)&&(r===Qe&&((de&2)===0&&(ba|=a),He===4&&ir(r,rt)),wt(r,c),a===1&&de===0&&(i.mode&1)===0&&(Ni=ze()+500,da&&Jn()))}function wt(r,i){var a=r.callbackNode;Sw(r,i);var c=Go(r,r===Qe?rt:0);if(c===0)a!==null&&bf(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&bf(a),i===1)r.tag===0?C1(Hm.bind(null,r)):Pp(Hm.bind(null,r)),y1(function(){(de&6)===0&&Jn()}),a=null;else{switch(Df(c)){case 1:a=yc;break;case 4:a=Of;break;case 16:a=Wo;break;case 536870912:a=Lf;break;default:a=Wo}a=Xm(a,Vm.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Vm(r,i){if(Da=-1,Ma=0,(de&6)!==0)throw Error(n(327));var a=r.callbackNode;if(Pi()&&r.callbackNode!==a)return null;var c=Go(r,r===Qe?rt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Fa(r,c);else{i=c;var d=de;de|=2;var m=Gm();(Qe!==r||rt!==i)&&(xn=null,Ni=ze()+500,Mr(r,i));do try{V1();break}catch(E){$m(r,E)}while(!0);ru(),Aa.current=m,de=d,We!==null?i=0:(Qe=null,rt=0,i=He)}if(i!==0){if(i===2&&(d=_c(r),d!==0&&(c=d,i=zu(r,d))),i===1)throw a=Us,Mr(r,0),ir(r,c),wt(r,ze()),a;if(i===6)ir(r,c);else{if(d=r.current.alternate,(c&30)===0&&!B1(d)&&(i=Fa(r,c),i===2&&(m=_c(r),m!==0&&(c=m,i=zu(r,m))),i===1))throw a=Us,Mr(r,0),ir(r,c),wt(r,ze()),a;switch(r.finishedWork=d,r.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Fr(r,_t,xn);break;case 3:if(ir(r,c),(c&130023424)===c&&(i=Mu+500-ze(),10<i)){if(Go(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){ht(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Gc(Fr.bind(null,r,_t,xn),i);break}Fr(r,_t,xn);break;case 4:if(ir(r,c),(c&4194240)===c)break;for(i=r.eventTimes,d=-1;0<c;){var v=31-Kt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*z1(c/1960))-c,10<c){r.timeoutHandle=Gc(Fr.bind(null,r,_t,xn),c);break}Fr(r,_t,xn);break;case 5:Fr(r,_t,xn);break;default:throw Error(n(329))}}}return wt(r,ze()),r.callbackNode===a?Vm.bind(null,r):null}function zu(r,i){var a=zs;return r.current.memoizedState.isDehydrated&&(Mr(r,i).flags|=256),r=Fa(r,i),r!==2&&(i=_t,_t=a,i!==null&&Bu(i)),r}function Bu(r){_t===null?_t=r:_t.push.apply(_t,r)}function B1(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!qt(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ir(r,i){for(i&=~Du,i&=~ba,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Kt(i),c=1<<a;r[a]=-1,i&=~c}}function Hm(r){if((de&6)!==0)throw Error(n(327));Pi();var i=Go(r,0);if((i&1)===0)return wt(r,ze()),null;var a=Fa(r,i);if(r.tag!==0&&a===2){var c=_c(r);c!==0&&(i=c,a=zu(r,c))}if(a===1)throw a=Us,Mr(r,0),ir(r,i),wt(r,ze()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Fr(r,_t,xn),wt(r,ze()),null}function Wu(r,i){var a=de;de|=1;try{return r(i)}finally{de=a,de===0&&(Ni=ze()+500,da&&Jn())}}function Dr(r){nr!==null&&nr.tag===0&&(de&6)===0&&Pi();var i=de;de|=1;var a=Ut.transition,c=ve;try{if(Ut.transition=null,ve=1,r)return r()}finally{ve=c,Ut.transition=a,de=i,(de&6)===0&&Jn()}}function Vu(){Pt=Ti.current,Te(Ti)}function Mr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,v1(a)),We!==null)for(a=We.return;a!==null;){var c=a;switch(Xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ca();break;case 3:Ii(),Te(gt),Te(ot),du();break;case 5:cu(c);break;case 4:Ii();break;case 13:Te(Oe);break;case 19:Te(Oe);break;case 10:iu(c.type._context);break;case 22:case 23:Vu()}a=a.return}if(Qe=r,We=r=sr(r.current,null),rt=Pt=i,He=0,Us=null,Du=ba=jr=0,_t=zs=null,br!==null){for(i=0;i<br.length;i++)if(a=br[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}br=null}return r}function $m(r,i){do{var a=We;try{if(ru(),Ea.current=xa,Ca){for(var c=Le.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ca=!1}if(Lr=0,Ye=Ve=Le=null,Os=!1,Ls=0,ju.current=null,a===null||a.return===null){He=1,Us=i,We=null;break}e:{var m=r,v=a.return,E=a,C=i;if(i=rt,E.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=C,D=E,M=D.tag;if((D.mode&1)===0&&(M===0||M===11||M===15)){var j=D.alternate;j?(D.updateQueue=j.updateQueue,D.memoizedState=j.memoizedState,D.lanes=j.lanes):(D.updateQueue=null,D.memoizedState=null)}var H=gm(v);if(H!==null){H.flags&=-257,vm(H,v,E,m,i),H.mode&1&&mm(m,P,i),i=H,C=P;var G=i.updateQueue;if(G===null){var K=new Set;K.add(C),i.updateQueue=K}else G.add(C);break e}else{if((i&1)===0){mm(m,P,i),Hu();break e}C=Error(n(426))}}else if(Re&&E.mode&1){var Be=gm(v);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),vm(Be,v,E,m,i),tu(xi(C,E));break e}}m=C=xi(C,E),He!==4&&(He=2),zs===null?zs=[m]:zs.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var T=fm(m,C,i);zp(m,T);break e;case 1:E=C;var S=m.type,N=m.stateNode;if((m.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(tr===null||!tr.has(N)))){m.flags|=65536,i&=-i,m.lanes|=i;var U=pm(m,E,i);zp(m,U);break e}}m=m.return}while(m!==null)}qm(a)}catch(Y){i=Y,We===a&&a!==null&&(We=a=a.return);continue}break}while(!0)}function Gm(){var r=Aa.current;return Aa.current=xa,r===null?xa:r}function Hu(){(He===0||He===3||He===2)&&(He=4),Qe===null||(jr&268435455)===0&&(ba&268435455)===0||ir(Qe,rt)}function Fa(r,i){var a=de;de|=2;var c=Gm();(Qe!==r||rt!==i)&&(xn=null,Mr(r,i));do try{W1();break}catch(d){$m(r,d)}while(!0);if(ru(),de=a,Aa.current=c,We!==null)throw Error(n(261));return Qe=null,rt=0,He}function W1(){for(;We!==null;)Km(We)}function V1(){for(;We!==null&&!pw();)Km(We)}function Km(r){var i=Jm(r.alternate,r,Pt);r.memoizedProps=r.pendingProps,i===null?qm(r):We=i,ju.current=null}function qm(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=j1(a,i,Pt),a!==null){We=a;return}}else{if(a=D1(a,i),a!==null){a.flags&=32767,We=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{He=6,We=null;return}}if(i=i.sibling,i!==null){We=i;return}We=i=r}while(i!==null);He===0&&(He=5)}function Fr(r,i,a){var c=ve,d=Ut.transition;try{Ut.transition=null,ve=1,H1(r,i,a,c)}finally{Ut.transition=d,ve=c}return null}function H1(r,i,a,c){do Pi();while(nr!==null);if((de&6)!==0)throw Error(n(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(Iw(r,m),r===Qe&&(We=Qe=null,rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||La||(La=!0,Xm(Wo,function(){return Pi(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ut.transition,Ut.transition=null;var v=ve;ve=1;var E=de;de|=4,ju.current=null,F1(r,a),Fm(a,r),u1(Hc),Yo=!!Vc,Hc=Vc=null,r.current=a,U1(a),mw(),de=E,ve=v,Ut.transition=m}else r.current=a;if(La&&(La=!1,nr=r,ja=d),m=r.pendingLanes,m===0&&(tr=null),yw(a.stateNode),wt(r,ze()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Oa)throw Oa=!1,r=Fu,Fu=null,r;return(ja&1)!==0&&r.tag!==0&&Pi(),m=r.pendingLanes,(m&1)!==0?r===Uu?Bs++:(Bs=0,Uu=r):Bs=0,Jn(),null}function Pi(){if(nr!==null){var r=Df(ja),i=Ut.transition,a=ve;try{if(Ut.transition=null,ve=16>r?16:r,nr===null)var c=!1;else{if(r=nr,nr=null,ja=0,(de&6)!==0)throw Error(n(331));var d=de;for(de|=4,$=r.current;$!==null;){var m=$,v=m.child;if(($.flags&16)!==0){var E=m.deletions;if(E!==null){for(var C=0;C<E.length;C++){var P=E[C];for($=P;$!==null;){var D=$;switch(D.tag){case 0:case 11:case 15:Fs(8,D,m)}var M=D.child;if(M!==null)M.return=D,$=M;else for(;$!==null;){D=$;var j=D.sibling,H=D.return;if(Om(D),D===P){$=null;break}if(j!==null){j.return=H,$=j;break}$=H}}}var G=m.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var Be=K.sibling;K.sibling=null,K=Be}while(K!==null)}}$=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,$=v;else e:for(;$!==null;){if(m=$,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fs(9,m,m.return)}var T=m.sibling;if(T!==null){T.return=m.return,$=T;break e}$=m.return}}var S=r.current;for($=S;$!==null;){v=$;var N=v.child;if((v.subtreeFlags&2064)!==0&&N!==null)N.return=v,$=N;else e:for(v=S;$!==null;){if(E=$,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:Ra(9,E)}}catch(Y){De(E,E.return,Y)}if(E===v){$=null;break e}var U=E.sibling;if(U!==null){U.return=E.return,$=U;break e}$=E.return}}if(de=d,Jn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Vo,r)}catch{}c=!0}return c}finally{ve=a,Ut.transition=i}}return!1}function Ym(r,i,a){i=xi(a,i),i=fm(r,i,1),r=Zn(r,i,1),i=ht(),r!==null&&(ds(r,1,i),wt(r,i))}function De(r,i,a){if(r.tag===3)Ym(r,r,a);else for(;i!==null;){if(i.tag===3){Ym(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(tr===null||!tr.has(c))){r=xi(a,r),r=pm(i,r,1),i=Zn(i,r,1),r=ht(),i!==null&&(ds(i,1,r),wt(i,r));break}}i=i.return}}function $1(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=ht(),r.pingedLanes|=r.suspendedLanes&a,Qe===r&&(rt&a)===a&&(He===4||He===3&&(rt&130023424)===rt&&500>ze()-Mu?Mr(r,0):Du|=a),wt(r,i)}function Qm(r,i){i===0&&((r.mode&1)===0?i=1:(i=$o,$o<<=1,($o&130023424)===0&&($o=4194304)));var a=ht();r=Cn(r,i),r!==null&&(ds(r,i,a),wt(r,a))}function G1(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Qm(r,a)}function K1(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Qm(r,a)}var Jm;Jm=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||gt.current)yt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return yt=!1,L1(r,i,a);yt=(r.flags&131072)!==0}else yt=!1,Re&&(i.flags&1048576)!==0&&Rp(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Na(r,i),r=i.pendingProps;var d=vi(i,ot.current);Si(i,a),d=pu(null,i,c,r,d,a);var m=mu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vt(c)?(m=!0,ua(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,au(i),d.updater=ka,i.stateNode=d,d._reactInternals=i,Eu(i,c,r,a),i=xu(null,i,c,!0,m,a)):(i.tag=0,Re&&m&&Jc(i),dt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Na(r,i),r=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Y1(c),r=Qt(c,r),d){case 0:i=Iu(null,i,c,r,a);break e;case 1:i=Sm(null,i,c,r,a);break e;case 11:i=ym(null,i,c,r,a);break e;case 14:i=_m(null,i,c,Qt(c.type,r),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Qt(c,d),Iu(r,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Qt(c,d),Sm(r,i,c,d,a);case 3:e:{if(Im(i),r===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Up(r,i),_a(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=xi(Error(n(423)),i),i=xm(r,i,c,a,d);break e}else if(c!==d){d=xi(Error(n(424)),i),i=xm(r,i,c,a,d);break e}else for(Nt=qn(i.stateNode.containerInfo.firstChild),Tt=i,Re=!0,Yt=null,a=Mp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(wi(),c===d){i=In(r,i,a);break e}dt(r,i,c,a)}i=i.child}return i;case 5:return Wp(i),r===null&&eu(i),c=i.type,d=i.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,$c(c,d)?v=null:m!==null&&$c(c,m)&&(i.flags|=32),Cm(r,i),dt(r,i,v,a),i.child;case 6:return r===null&&eu(i),null;case 13:return km(r,i,a);case 4:return lu(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=Ei(i,null,c,a):dt(r,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Qt(c,d),ym(r,i,c,d,a);case 7:return dt(r,i,i.pendingProps,a),i.child;case 8:return dt(r,i,i.pendingProps.children,a),i.child;case 12:return dt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,Ce(ga,c._currentValue),c._currentValue=v,m!==null)if(qt(m.value,v)){if(m.children===d.children&&!gt.current){i=In(r,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var E=m.dependencies;if(E!==null){v=m.child;for(var C=E.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Sn(-1,a&-a),C.tag=2;var P=m.updateQueue;if(P!==null){P=P.shared;var D=P.pending;D===null?C.next=C:(C.next=D.next,D.next=C),P.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),su(m.return,a,i),E.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(n(341));v.lanes|=a,E=v.alternate,E!==null&&(E.lanes|=a),su(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}dt(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Si(i,a),d=Mt(d),c=c(d),i.flags|=1,dt(r,i,c,a),i.child;case 14:return c=i.type,d=Qt(c,i.pendingProps),d=Qt(c.type,d),_m(r,i,c,d,a);case 15:return wm(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Qt(c,d),Na(r,i),i.tag=1,vt(c)?(r=!0,ua(i)):r=!1,Si(i,a),dm(i,c,d),Eu(i,c,d,a),xu(null,i,c,!0,r,a);case 19:return Nm(r,i,a);case 22:return Em(r,i,a)}throw Error(n(156,i.tag))};function Xm(r,i){return Af(r,i)}function q1(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(r,i,a,c){return new q1(r,i,a,c)}function $u(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Y1(r){if(typeof r=="function")return $u(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Ot)return 11;if(r===Lt)return 14}return 2}function sr(r,i){var a=r.alternate;return a===null?(a=zt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ua(r,i,a,c,d,m){var v=2;if(c=r,typeof r=="function")$u(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case we:return Ur(a.children,d,m,i);case Ne:v=8,d|=8;break;case be:return r=zt(12,a,i,d|2),r.elementType=be,r.lanes=m,r;case ut:return r=zt(13,a,i,d),r.elementType=ut,r.lanes=m,r;case It:return r=zt(19,a,i,d),r.elementType=It,r.lanes=m,r;case xe:return za(a,d,m,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:v=10;break e;case Gt:v=9;break e;case Ot:v=11;break e;case Lt:v=14;break e;case tt:v=16,c=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return i=zt(v,a,i,d),i.elementType=r,i.type=c,i.lanes=m,i}function Ur(r,i,a,c){return r=zt(7,r,c,i),r.lanes=a,r}function za(r,i,a,c){return r=zt(22,r,c,i),r.elementType=xe,r.lanes=a,r.stateNode={isHidden:!1},r}function Gu(r,i,a){return r=zt(6,r,null,i),r.lanes=a,r}function Ku(r,i,a){return i=zt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function Q1(r,i,a,c,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function qu(r,i,a,c,d,m,v,E,C){return r=new Q1(r,i,a,E,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=zt(3,null,null,i),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(m),r}function J1(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function Zm(r){if(!r)return Qn;r=r._reactInternals;e:{if(Tr(r)!==r||r.tag!==1)throw Error(n(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(vt(a))return Tp(r,a,i)}return i}function eg(r,i,a,c,d,m,v,E,C){return r=qu(a,c,!0,r,d,m,v,E,C),r.context=Zm(null),a=r.current,c=ht(),d=rr(a),m=Sn(c,d),m.callback=i??null,Zn(a,m,d),r.current.lanes=d,ds(r,d,c),wt(r,c),r}function Ba(r,i,a,c){var d=i.current,m=ht(),v=rr(d);return a=Zm(a),i.context===null?i.context=a:i.pendingContext=a,i=Sn(m,v),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=Zn(d,i,v),r!==null&&(Zt(r,d,v,m),ya(r,d,v)),v}function Wa(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function tg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Yu(r,i){tg(r,i),(r=r.alternate)&&tg(r,i)}function X1(){return null}var ng=typeof reportError=="function"?reportError:function(r){console.error(r)};function Qu(r){this._internalRoot=r}Va.prototype.render=Qu.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(r,i,null,null)},Va.prototype.unmount=Qu.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Dr(function(){Ba(null,r,null,null)}),i[yn]=null}};function Va(r){this._internalRoot=r}Va.prototype.unstable_scheduleHydration=function(r){if(r){var i=Uf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<$n.length&&i!==0&&i<$n[a].priority;a++);$n.splice(a,0,r),a===0&&Wf(r)}};function Ju(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ha(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function rg(){}function Z1(r,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var P=Wa(v);m.call(P)}}var v=eg(i,c,r,0,null,!1,!1,"",rg);return r._reactRootContainer=v,r[yn]=v.current,xs(r.nodeType===8?r.parentNode:r),Dr(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var E=c;c=function(){var P=Wa(C);E.call(P)}}var C=qu(r,0,!1,null,null,!1,!1,"",rg);return r._reactRootContainer=C,r[yn]=C.current,xs(r.nodeType===8?r.parentNode:r),Dr(function(){Ba(i,C,a,c)}),C}function $a(r,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var E=d;d=function(){var C=Wa(v);E.call(C)}}Ba(i,v,r,d)}else v=Z1(a,i,r,d,c);return Wa(v)}Mf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=us(i.pendingLanes);a!==0&&(Ec(i,a|1),wt(i,ze()),(de&6)===0&&(Ni=ze()+500,Jn()))}break;case 13:Dr(function(){var c=Cn(r,1);if(c!==null){var d=ht();Zt(c,r,1,d)}}),Yu(r,1)}},Cc=function(r){if(r.tag===13){var i=Cn(r,134217728);if(i!==null){var a=ht();Zt(i,r,134217728,a)}Yu(r,134217728)}},Ff=function(r){if(r.tag===13){var i=rr(r),a=Cn(r,i);if(a!==null){var c=ht();Zt(a,r,i,c)}Yu(r,i)}},Uf=function(){return ve},zf=function(r,i){var a=ve;try{return ve=r,i()}finally{ve=a}},pc=function(r,i,a){switch(i){case"input":if(oc(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var d=la(c);if(!d)throw Error(n(90));uf(c),oc(c,d)}}}break;case"textarea":mf(r,a);break;case"select":i=a.value,i!=null&&si(r,!!a.multiple,i,!1)}},If=Wu,xf=Dr;var eE={usingClientEntryPoint:!1,Events:[Ns,mi,la,Cf,Sf,Wu]},Ws={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tE={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Pf(r),r===null?null:r.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||X1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Vo=Ga.inject(tE),an=Ga}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE,Et.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(i))throw Error(n(200));return J1(r,i,null,a)},Et.createRoot=function(r,i){if(!Ju(r))throw Error(n(299));var a=!1,c="",d=ng;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=qu(r,1,!1,null,null,a,!1,c,d),r[yn]=i.current,xs(r.nodeType===8?r.parentNode:r),new Qu(i)},Et.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Pf(i),r=r===null?null:r.stateNode,r},Et.flushSync=function(r){return Dr(r)},Et.hydrate=function(r,i,a){if(!Ha(i))throw Error(n(200));return $a(null,r,i,!0,a)},Et.hydrateRoot=function(r,i,a){if(!Ju(r))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=ng;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=eg(i,null,r,1,a??null,d,!1,m,v),r[yn]=i.current,xs(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Va(i)},Et.render=function(r,i,a){if(!Ha(i))throw Error(n(200));return $a(null,r,i,!1,a)},Et.unmountComponentAtNode=function(r){if(!Ha(r))throw Error(n(40));return r._reactRootContainer?(Dr(function(){$a(null,null,r,!1,function(){r._reactRootContainer=null,r[yn]=null})}),!0):!1},Et.unstable_batchedUpdates=Wu,Et.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!Ha(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return $a(r,i,a,!1,c)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var dg;function Jv(){if(dg)return ed.exports;dg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ed.exports=uE(),ed.exports}var hg;function dE(){if(hg)return Ka;hg=1;var t=Jv();return Ka.createRoot=t.createRoot,Ka.hydrateRoot=t.hydrateRoot,Ka}var hE=dE();const fE=Qv(hE);Jv();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},so.apply(this,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const fg="popstate";function pE(t){t===void 0&&(t={});function e(s,o){let{pathname:l,search:u,hash:h}=s.location;return Cd("",{pathname:l,search:u,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:al(o)}return gE(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mE(){return Math.random().toString(36).substr(2,8)}function pg(t,e){return{usr:t.state,key:t.key,idx:e}}function Cd(t,e,n,s){return n===void 0&&(n=null),so({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ki(e):e,{state:n,key:e&&e.key||s||mE()})}function al(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ki(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function gE(t,e,n,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,h=fr.Pop,f=null,g=_();g==null&&(g=0,u.replaceState(so({},u.state,{idx:g}),""));function _(){return(u.state||{idx:null}).idx}function y(){h=fr.Pop;let O=_(),F=O==null?null:O-g;g=O,f&&f({action:h,location:b.location,delta:F})}function w(O,F){h=fr.Push;let B=Cd(b.location,O,F);g=_()+1;let W=pg(B,g),q=b.createHref(B);try{u.pushState(W,"",q)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(q)}l&&f&&f({action:h,location:b.location,delta:1})}function I(O,F){h=fr.Replace;let B=Cd(b.location,O,F);g=_();let W=pg(B,g),q=b.createHref(B);u.replaceState(W,"",q),l&&f&&f({action:h,location:b.location,delta:0})}function R(O){let F=o.location.origin!=="null"?o.location.origin:o.location.href,B=typeof O=="string"?O:al(O);return B=B.replace(/ $/,"%20"),je(F,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,F)}let b={get action(){return h},get location(){return t(o,u)},listen(O){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(fg,y),f=O,()=>{o.removeEventListener(fg,y),f=null}},createHref(O){return e(o,O)},createURL:R,encodeLocation(O){let F=R(O);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:w,replace:I,go(O){return u.go(O)}};return b}var mg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mg||(mg={}));function vE(t,e,n){return n===void 0&&(n="/"),yE(t,e,n)}function yE(t,e,n,s){let o=typeof e=="string"?Ki(e):e,l=Ui(o.pathname||"/",n);if(l==null)return null;let u=Xv(t);_E(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let g=RE(l);h=NE(u[f],g)}return h}function Xv(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let o=(l,u,h)=>{let f={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(je(f.relativePath.startsWith(s),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(s.length));let g=mr([s,f.relativePath]),_=n.concat(f);l.children&&l.children.length>0&&(je(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Xv(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:kE(g,l.index),routesMeta:_})};return t.forEach((l,u)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,u);else for(let f of Zv(l.path))o(l,u,f)}),e}function Zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Zv(s.join("/")),h=[];return h.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...u),h.map(f=>t.startsWith("/")&&f===""?"/":f)}function _E(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TE(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const wE=/^:[\w-]+$/,EE=3,CE=2,SE=1,IE=10,xE=-2,gg=t=>t==="*";function kE(t,e){let n=t.split("/"),s=n.length;return n.some(gg)&&(s+=xE),e&&(s+=CE),n.filter(o=>!gg(o)).reduce((o,l)=>o+(wE.test(l)?EE:l===""?SE:IE),s)}function TE(t,e){return t.length===e.length&&t.slice(0,-1).every((s,o)=>s===e[o])?t[t.length-1]-e[e.length-1]:0}function NE(t,e,n){let{routesMeta:s}=t,o={},l="/",u=[];for(let h=0;h<s.length;++h){let f=s[h],g=h===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",y=Sd({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},_),w=f.route;if(!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:mr([l,y.pathname]),pathnameBase:jE(mr([l,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(l=mr([l,y.pathnameBase]))}return u}function Sd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=PE(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((g,_,y)=>{let{paramName:w,isOptional:I}=_;if(w==="*"){let b=h[y]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const R=h[y];return I&&!R?g[w]=void 0:g[w]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:u,pattern:t}}function PE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function RE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return eh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ui(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}const AE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bE=t=>AE.test(t);function OE(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:o=""}=typeof t=="string"?Ki(t):t,l;if(n)if(bE(n))l=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),eh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+n))}n.startsWith("/")?l=vg(n.substring(1),"/"):l=vg(n,e)}else l=e;return{pathname:l,search:DE(s),hash:ME(o)}}function vg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function rd(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function th(t,e){let n=LE(t);return e?n.map((s,o)=>o===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function nh(t,e,n,s){s===void 0&&(s=!1);let o;typeof t=="string"?o=Ki(t):(o=so({},t),je(!o.pathname||!o.pathname.includes("?"),rd("?","pathname","search",o)),je(!o.pathname||!o.pathname.includes("#"),rd("#","pathname","hash",o)),je(!o.search||!o.search.includes("#"),rd("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,h;if(u==null)h=n;else{let y=e.length-1;if(!s&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),y-=1;o.pathname=w.join("/")}h=y>=0?e[y]:"/"}let f=OE(o,h),g=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(g||_)&&(f.pathname+="/"),f}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),jE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ME=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function FE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ey=["post","put","patch","delete"];new Set(ey);const UE=["get",...ey];new Set(UE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},oo.apply(this,arguments)}const Ml=k.createContext(null),ty=k.createContext(null),Fn=k.createContext(null),Fl=k.createContext(null),Un=k.createContext({outlet:null,matches:[],isDataRoute:!1}),ny=k.createContext(null);function zE(t,e){let{relative:n}=e===void 0?{}:e;qi()||je(!1);let{basename:s,navigator:o}=k.useContext(Fn),{hash:l,pathname:u,search:h}=Ul(t,{relative:n}),f=u;return s!=="/"&&(f=u==="/"?s:mr([s,u])),o.createHref({pathname:f,search:h,hash:l})}function qi(){return k.useContext(Fl)!=null}function Xr(){return qi()||je(!1),k.useContext(Fl).location}function ry(t){k.useContext(Fn).static||k.useLayoutEffect(t)}function Zr(){let{isDataRoute:t}=k.useContext(Un);return t?eC():BE()}function BE(){qi()||je(!1);let t=k.useContext(Ml),{basename:e,future:n,navigator:s}=k.useContext(Fn),{matches:o}=k.useContext(Un),{pathname:l}=Xr(),u=JSON.stringify(th(o,n.v7_relativeSplatPath)),h=k.useRef(!1);return ry(()=>{h.current=!0}),k.useCallback(function(g,_){if(_===void 0&&(_={}),!h.current)return;if(typeof g=="number"){s.go(g);return}let y=nh(g,JSON.parse(u),l,_.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:mr([e,y.pathname])),(_.replace?s.replace:s.push)(y,_.state,_)},[e,s,u,l,t])}function WE(){let{matches:t}=k.useContext(Un),e=t[t.length-1];return e?e.params:{}}function Ul(t,e){let{relative:n}=e===void 0?{}:e,{future:s}=k.useContext(Fn),{matches:o}=k.useContext(Un),{pathname:l}=Xr(),u=JSON.stringify(th(o,s.v7_relativeSplatPath));return k.useMemo(()=>nh(t,JSON.parse(u),l,n==="path"),[t,u,l,n])}function VE(t,e){return HE(t,e)}function HE(t,e,n,s){qi()||je(!1);let{navigator:o}=k.useContext(Fn),{matches:l}=k.useContext(Un),u=l[l.length-1],h=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let g=Xr(),_;if(e){var y;let O=typeof e=="string"?Ki(e):e;f==="/"||(y=O.pathname)!=null&&y.startsWith(f)||je(!1),_=O}else _=g;let w=_.pathname||"/",I=w;if(f!=="/"){let O=f.replace(/^\//,"").split("/");I="/"+w.replace(/^\//,"").split("/").slice(O.length).join("/")}let R=vE(t,{pathname:I}),b=YE(R&&R.map(O=>Object.assign({},O,{params:Object.assign({},h,O.params),pathname:mr([f,o.encodeLocation?o.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?f:mr([f,o.encodeLocation?o.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),l,n,s);return e&&b?k.createElement(Fl.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:fr.Pop}},b):b}function $E(){let t=ZE(),e=FE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:o},n):null,null)}const GE=k.createElement($E,null);class KE extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Un.Provider,{value:this.props.routeContext},k.createElement(ny.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qE(t){let{routeContext:e,match:n,children:s}=t,o=k.useContext(Ml);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Un.Provider,{value:e},s)}function YE(t,e,n,s){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),t==null){var l;if(!n)return null;if(n.errors)t=n.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let u=t,h=(o=n)==null?void 0:o.errors;if(h!=null){let _=u.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);_>=0||je(!1),u=u.slice(0,Math.min(u.length,_+1))}let f=!1,g=-1;if(n&&s&&s.v7_partialHydration)for(let _=0;_<u.length;_++){let y=u[_];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=_),y.route.id){let{loaderData:w,errors:I}=n,R=y.route.loader&&w[y.route.id]===void 0&&(!I||I[y.route.id]===void 0);if(y.route.lazy||R){f=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((_,y,w)=>{let I,R=!1,b=null,O=null;n&&(I=h&&y.route.id?h[y.route.id]:void 0,b=y.route.errorElement||GE,f&&(g<0&&w===0?(tC("route-fallback"),R=!0,O=null):g===w&&(R=!0,O=y.route.hydrateFallbackElement||null)));let F=e.concat(u.slice(0,w+1)),B=()=>{let W;return I?W=b:R?W=O:y.route.Component?W=k.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=_,k.createElement(qE,{match:y,routeContext:{outlet:_,matches:F,isDataRoute:n!=null},children:W})};return n&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?k.createElement(KE,{location:n.location,revalidation:n.revalidation,component:b,error:I,children:B(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):B()},null)}var iy=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(iy||{}),sy=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(sy||{});function QE(t){let e=k.useContext(Ml);return e||je(!1),e}function JE(t){let e=k.useContext(ty);return e||je(!1),e}function XE(t){let e=k.useContext(Un);return e||je(!1),e}function oy(t){let e=XE(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function ZE(){var t;let e=k.useContext(ny),n=JE(),s=oy();return e!==void 0?e:(t=n.errors)==null?void 0:t[s]}function eC(){let{router:t}=QE(iy.UseNavigateStable),e=oy(sy.UseNavigateStable),n=k.useRef(!1);return ry(()=>{n.current=!0}),k.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,oo({fromRouteId:e},l)))},[t,e])}const yg={};function tC(t,e,n){yg[t]||(yg[t]=!0)}function nC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Id(t){let{to:e,replace:n,state:s,relative:o}=t;qi()||je(!1);let{future:l,static:u}=k.useContext(Fn),{matches:h}=k.useContext(Un),{pathname:f}=Xr(),g=Zr(),_=nh(e,th(h,l.v7_relativeSplatPath),f,o==="path"),y=JSON.stringify(_);return k.useEffect(()=>g(JSON.parse(y),{replace:n,state:s,relative:o}),[g,y,o,n,s]),null}function Bt(t){je(!1)}function rC(t){let{basename:e="/",children:n=null,location:s,navigationType:o=fr.Pop,navigator:l,static:u=!1,future:h}=t;qi()&&je(!1);let f=e.replace(/^\/*/,"/"),g=k.useMemo(()=>({basename:f,navigator:l,static:u,future:oo({v7_relativeSplatPath:!1},h)}),[f,h,l,u]);typeof s=="string"&&(s=Ki(s));let{pathname:_="/",search:y="",hash:w="",state:I=null,key:R="default"}=s,b=k.useMemo(()=>{let O=Ui(_,f);return O==null?null:{location:{pathname:O,search:y,hash:w,state:I,key:R},navigationType:o}},[f,_,y,w,I,R,o]);return b==null?null:k.createElement(Fn.Provider,{value:g},k.createElement(Fl.Provider,{children:n,value:b}))}function iC(t){let{children:e,location:n}=t;return VE(xd(e),n)}new Promise(()=>{});function xd(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(s,o)=>{if(!k.isValidElement(s))return;let l=[...e,o];if(s.type===k.Fragment){n.push.apply(n,xd(s.props.children,l));return}s.type!==Bt&&je(!1),!s.props.index||!s.props.children||je(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=xd(s.props.children,l)),n.push(u)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ll.apply(this,arguments)}function ay(t,e){if(t==null)return{};var n={},s=Object.keys(t),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function sC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oC(t,e){return t.button===0&&(!e||e==="_self")&&!sC(t)}function kd(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let s=t[n];return e.concat(Array.isArray(s)?s.map(o=>[n,o]):[[n,s]])},[]))}function aC(t,e){let n=kd(t);return e&&e.forEach((s,o)=>{n.has(o)||e.getAll(o).forEach(l=>{n.append(o,l)})}),n}const lC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cC=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],uC="6";try{window.__reactRouterVersion=uC}catch{}const dC=k.createContext({isTransitioning:!1}),hC="startTransition",_g=aE[hC];function fC(t){let{basename:e,children:n,future:s,window:o}=t,l=k.useRef();l.current==null&&(l.current=pE({window:o,v5Compat:!0}));let u=l.current,[h,f]=k.useState({action:u.action,location:u.location}),{v7_startTransition:g}=s||{},_=k.useCallback(y=>{g&&_g?_g(()=>f(y)):f(y)},[f,g]);return k.useLayoutEffect(()=>u.listen(_),[u,_]),k.useEffect(()=>nC(s),[s]),k.createElement(rC,{basename:e,children:n,location:h.location,navigationType:h.action,navigator:u,future:s})}const pC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=k.forwardRef(function(e,n){let{onClick:s,relative:o,reloadDocument:l,replace:u,state:h,target:f,to:g,preventScrollReset:_,viewTransition:y}=e,w=ay(e,lC),{basename:I}=k.useContext(Fn),R,b=!1;if(typeof g=="string"&&mC.test(g)&&(R=g,pC))try{let W=new URL(window.location.href),q=g.startsWith("//")?new URL(W.protocol+g):new URL(g),ue=Ui(q.pathname,I);q.origin===W.origin&&ue!=null?g=ue+q.search+q.hash:b=!0}catch{}let O=zE(g,{relative:o}),F=vC(g,{replace:u,state:h,target:f,preventScrollReset:_,relative:o,viewTransition:y});function B(W){s&&s(W),W.defaultPrevented||F(W)}return k.createElement("a",ll({},w,{href:R||O,onClick:b||l?s:B,ref:n,target:f}))}),qa=k.forwardRef(function(e,n){let{"aria-current":s="page",caseSensitive:o=!1,className:l="",end:u=!1,style:h,to:f,viewTransition:g,children:_}=e,y=ay(e,cC),w=Ul(f,{relative:y.relative}),I=Xr(),R=k.useContext(ty),{navigator:b,basename:O}=k.useContext(Fn),F=R!=null&&_C(w)&&g===!0,B=b.encodeLocation?b.encodeLocation(w).pathname:w.pathname,W=I.pathname,q=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;o||(W=W.toLowerCase(),q=q?q.toLowerCase():null,B=B.toLowerCase()),q&&O&&(q=Ui(q,O)||q);const ue=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let ce=W===B||!u&&W.startsWith(B)&&W.charAt(ue)==="/",we=q!=null&&(q===B||!u&&q.startsWith(B)&&q.charAt(B.length)==="/"),Ne={isActive:ce,isPending:we,isTransitioning:F},be=ce?s:void 0,et;typeof l=="function"?et=l(Ne):et=[l,ce?"active":null,we?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let Gt=typeof h=="function"?h(Ne):h;return k.createElement(ae,ll({},y,{"aria-current":be,className:et,ref:n,style:Gt,to:f,viewTransition:g}),typeof _=="function"?_(Ne):_)});var Td;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Td||(Td={}));var wg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wg||(wg={}));function gC(t){let e=k.useContext(Ml);return e||je(!1),e}function vC(t,e){let{target:n,replace:s,state:o,preventScrollReset:l,relative:u,viewTransition:h}=e===void 0?{}:e,f=Zr(),g=Xr(),_=Ul(t,{relative:u});return k.useCallback(y=>{if(oC(y,n)){y.preventDefault();let w=s!==void 0?s:al(g)===al(_);f(t,{replace:w,state:o,preventScrollReset:l,relative:u,viewTransition:h})}},[g,f,_,s,o,n,t,l,u,h])}function yC(t){let e=k.useRef(kd(t)),n=k.useRef(!1),s=Xr(),o=k.useMemo(()=>aC(s.search,n.current?null:e.current),[s.search]),l=Zr(),u=k.useCallback((h,f)=>{const g=kd(typeof h=="function"?h(o):h);n.current=!0,l("?"+g,f)},[l,o]);return[o,u]}function _C(t,e){e===void 0&&(e={});let n=k.useContext(dC);n==null&&je(!1);let{basename:s}=gC(Td.useViewTransitionState),o=Ul(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Ui(n.currentLocation.pathname,s)||n.currentLocation.pathname,u=Ui(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Sd(o.pathname,u)!=null||Sd(o.pathname,l)!=null}let wC={data:""},EC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||wC},CC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,SC=/\/\*[^]*?\*\/|  +/g,Eg=/\n+/g,lr=(t,e)=>{let n="",s="",o="";for(let l in t){let u=t[l];l[0]=="@"?l[1]=="i"?n=l+" "+u+";":s+=l[1]=="f"?lr(u,l):l+"{"+lr(u,l[1]=="k"?"":e)+"}":typeof u=="object"?s+=lr(u,e?e.replace(/([^,])+/g,h=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,h):h?h+" "+f:f)):l):u!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=lr.p?lr.p(l,u):l+":"+u+";")}return n+(e&&o?e+"{"+o+"}":o)+s},kn={},ly=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+ly(t[n]);return e}return t},IC=(t,e,n,s,o)=>{let l=ly(t),u=kn[l]||(kn[l]=(f=>{let g=0,_=11;for(;g<f.length;)_=101*_+f.charCodeAt(g++)>>>0;return"go"+_})(l));if(!kn[u]){let f=l!==t?t:(g=>{let _,y,w=[{}];for(;_=CC.exec(g.replace(SC,""));)_[4]?w.shift():_[3]?(y=_[3].replace(Eg," ").trim(),w.unshift(w[0][y]=w[0][y]||{})):w[0][_[1]]=_[2].replace(Eg," ").trim();return w[0]})(t);kn[u]=lr(o?{["@keyframes "+u]:f}:f,n?"":"."+u)}let h=n&&kn.g?kn.g:null;return n&&(kn.g=kn[u]),((f,g,_,y)=>{y?g.data=g.data.replace(y,f):g.data.indexOf(f)===-1&&(g.data=_?f+g.data:g.data+f)})(kn[u],e,s,h),u},xC=(t,e,n)=>t.reduce((s,o,l)=>{let u=e[l];if(u&&u.call){let h=u(n),f=h&&h.props&&h.props.className||/^go/.test(h)&&h;u=f?"."+f:h&&typeof h=="object"?h.props?"":lr(h,""):h===!1?"":h}return s+o+(u??"")},"");function zl(t){let e=this||{},n=t.call?t(e.p):t;return IC(n.unshift?n.raw?xC(n,[].slice.call(arguments,1),e.p):n.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):n,EC(e.target),e.g,e.o,e.k)}let cy,Nd,Pd;zl.bind({g:1});let On=zl.bind({k:1});function kC(t,e,n,s){lr.p=e,cy=t,Nd=n,Pd=s}function Ir(t,e){let n=this||{};return function(){let s=arguments;function o(l,u){let h=Object.assign({},l),f=h.className||o.className;n.p=Object.assign({theme:Nd&&Nd()},h),n.o=/ *go\d+/.test(f),h.className=zl.apply(n,s)+(f?" "+f:"");let g=t;return t[0]&&(g=h.as||t,delete h.as),Pd&&g[0]&&Pd(h),cy(g,h)}return o}}var TC=t=>typeof t=="function",cl=(t,e)=>TC(t)?t(e):t,NC=(()=>{let t=0;return()=>(++t).toString()})(),uy=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),PC=20,rh="default",dy=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(u=>u.id===e.toast.id?{...u,...e.toast}:u)};case 2:let{toast:s}=e;return dy(t,{type:t.toasts.find(u=>u.id===s.id)?1:0,toast:s});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(u=>u.id===o||o===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(u=>u.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let l=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+l}))}}},el=[],hy={toasts:[],pausedAt:void 0,settings:{toastLimit:PC}},hn={},fy=(t,e=rh)=>{hn[e]=dy(hn[e]||hy,t),el.forEach(([n,s])=>{n===e&&s(hn[e])})},py=t=>Object.keys(hn).forEach(e=>fy(t,e)),RC=t=>Object.keys(hn).find(e=>hn[e].toasts.some(n=>n.id===t)),Bl=(t=rh)=>e=>{fy(e,t)},AC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},bC=(t={},e=rh)=>{let[n,s]=k.useState(hn[e]||hy),o=k.useRef(hn[e]);k.useEffect(()=>(o.current!==hn[e]&&s(hn[e]),el.push([e,s]),()=>{let u=el.findIndex(([h])=>h===e);u>-1&&el.splice(u,1)}),[e]);let l=n.toasts.map(u=>{var h,f,g;return{...t,...t[u.type],...u,removeDelay:u.removeDelay||((h=t[u.type])==null?void 0:h.removeDelay)||(t==null?void 0:t.removeDelay),duration:u.duration||((f=t[u.type])==null?void 0:f.duration)||(t==null?void 0:t.duration)||AC[u.type],style:{...t.style,...(g=t[u.type])==null?void 0:g.style,...u.style}}});return{...n,toasts:l}},OC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||NC()}),Co=t=>(e,n)=>{let s=OC(e,t,n);return Bl(s.toasterId||RC(s.id))({type:2,toast:s}),s.id},$e=(t,e)=>Co("blank")(t,e);$e.error=Co("error");$e.success=Co("success");$e.loading=Co("loading");$e.custom=Co("custom");$e.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Bl(e)(n):py(n)};$e.dismissAll=t=>$e.dismiss(void 0,t);$e.remove=(t,e)=>{let n={type:4,toastId:t};e?Bl(e)(n):py(n)};$e.removeAll=t=>$e.remove(void 0,t);$e.promise=(t,e,n)=>{let s=$e.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(o=>{let l=e.success?cl(e.success,o):void 0;return l?$e.success(l,{id:s,...n,...n==null?void 0:n.success}):$e.dismiss(s),o}).catch(o=>{let l=e.error?cl(e.error,o):void 0;l?$e.error(l,{id:s,...n,...n==null?void 0:n.error}):$e.dismiss(s)}),t};var LC=1e3,jC=(t,e="default")=>{let{toasts:n,pausedAt:s}=bC(t,e),o=k.useRef(new Map).current,l=k.useCallback((y,w=LC)=>{if(o.has(y))return;let I=setTimeout(()=>{o.delete(y),u({type:4,toastId:y})},w);o.set(y,I)},[]);k.useEffect(()=>{if(s)return;let y=Date.now(),w=n.map(I=>{if(I.duration===1/0)return;let R=(I.duration||0)+I.pauseDuration-(y-I.createdAt);if(R<0){I.visible&&$e.dismiss(I.id);return}return setTimeout(()=>$e.dismiss(I.id,e),R)});return()=>{w.forEach(I=>I&&clearTimeout(I))}},[n,s,e]);let u=k.useCallback(Bl(e),[e]),h=k.useCallback(()=>{u({type:5,time:Date.now()})},[u]),f=k.useCallback((y,w)=>{u({type:1,toast:{id:y,height:w}})},[u]),g=k.useCallback(()=>{s&&u({type:6,time:Date.now()})},[s,u]),_=k.useCallback((y,w)=>{let{reverseOrder:I=!1,gutter:R=8,defaultPosition:b}=w||{},O=n.filter(W=>(W.position||b)===(y.position||b)&&W.height),F=O.findIndex(W=>W.id===y.id),B=O.filter((W,q)=>q<F&&W.visible).length;return O.filter(W=>W.visible).slice(...I?[B+1]:[0,B]).reduce((W,q)=>W+(q.height||0)+R,0)},[n]);return k.useEffect(()=>{n.forEach(y=>{if(y.dismissed)l(y.id,y.removeDelay);else{let w=o.get(y.id);w&&(clearTimeout(w),o.delete(y.id))}})},[n,l]),{toasts:n,handlers:{updateHeight:f,startPause:h,endPause:g,calculateOffset:_}}},DC=On`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,MC=On`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FC=On`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,UC=Ir("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${DC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${MC} 0.15s ease-out forwards;
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
    animation: ${FC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zC=On`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,BC=Ir("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${zC} 1s linear infinite;
`,WC=On`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,VC=On`
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
}`,HC=Ir("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${WC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${VC} 0.2s ease-out forwards;
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
`,$C=Ir("div")`
  position: absolute;
`,GC=Ir("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,KC=On`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qC=Ir("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${KC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,YC=({toast:t})=>{let{icon:e,type:n,iconTheme:s}=t;return e!==void 0?typeof e=="string"?k.createElement(qC,null,e):e:n==="blank"?null:k.createElement(GC,null,k.createElement(BC,{...s}),n!=="loading"&&k.createElement($C,null,n==="error"?k.createElement(UC,{...s}):k.createElement(HC,{...s})))},QC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,JC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,XC="0%{opacity:0;} 100%{opacity:1;}",ZC="0%{opacity:1;} 100%{opacity:0;}",eS=Ir("div")`
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
`,tS=Ir("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,nS=(t,e)=>{let n=t.includes("top")?1:-1,[s,o]=uy()?[XC,ZC]:[QC(n),JC(n)];return{animation:e?`${On(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${On(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},rS=k.memo(({toast:t,position:e,style:n,children:s})=>{let o=t.height?nS(t.position||e||"top-center",t.visible):{opacity:0},l=k.createElement(YC,{toast:t}),u=k.createElement(tS,{...t.ariaProps},cl(t.message,t));return k.createElement(eS,{className:t.className,style:{...o,...n,...t.style}},typeof s=="function"?s({icon:l,message:u}):k.createElement(k.Fragment,null,l,u))});kC(k.createElement);var iS=({id:t,className:e,style:n,onHeightUpdate:s,children:o})=>{let l=k.useCallback(u=>{if(u){let h=()=>{let f=u.getBoundingClientRect().height;s(t,f)};h(),new MutationObserver(h).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return k.createElement("div",{ref:l,className:e,style:n},o)},sS=(t,e)=>{let n=t.includes("top"),s=n?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:uy()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...s,...o}},oS=zl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ya=16,aS=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:s,children:o,toasterId:l,containerStyle:u,containerClassName:h})=>{let{toasts:f,handlers:g}=jC(n,l);return k.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:Ya,left:Ya,right:Ya,bottom:Ya,pointerEvents:"none",...u},className:h,onMouseEnter:g.startPause,onMouseLeave:g.endPause},f.map(_=>{let y=_.position||e,w=g.calculateOffset(_,{reverseOrder:t,gutter:s,defaultPosition:e}),I=sS(y,w);return k.createElement(iS,{id:_.id,key:_.id,onHeightUpdate:g.updateHeight,className:_.visible?oS:"",style:I},_.type==="custom"?cl(_.message,_):o?o(_):k.createElement(rS,{toast:_,position:y}))}))},Me=$e;const lS=()=>{};var Cg={};/**
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
 */const my={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(t,e){if(!t)throw Yi(e)},Yi=function(t){return new Error("Firebase Database ("+my.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const gy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},cS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const o=t[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],u=t[n++],h=t[n++],f=((o&7)<<18|(l&63)<<12|(u&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(f>>10)),e[s++]=String.fromCharCode(56320+(f&1023))}else{const l=t[n++],u=t[n++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,h=u?t[o+1]:0,f=o+2<t.length,g=f?t[o+2]:0,_=l>>2,y=(l&3)<<4|h>>4;let w=(h&15)<<2|g>>6,I=g&63;f||(I=64,u||(w=64)),s.push(n[_],n[y],n[w],n[I])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const g=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||g==null||y==null)throw new uS;const w=l<<2|h>>4;if(s.push(w),g!==64){const I=h<<4&240|g>>2;if(s.push(I),y!==64){const R=g<<6&192|y;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vy=function(t){const e=gy(t);return ih.encodeByteArray(e,!0)},ul=function(t){return vy(t).replace(/\./g,"")},dl=function(t){try{return ih.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dS(t){return yy(void 0,t)}function yy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hS(n)||(t[n]=yy(t[n],e[n]));return t}function hS(t){return t!=="__proto__"}/**
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
 */function fS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pS=()=>fS().__FIREBASE_DEFAULTS__,mS=()=>{if(typeof process>"u"||typeof Cg>"u")return;const t=Cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dl(t[1]);return e&&JSON.parse(e)},sh=()=>{try{return lS()||pS()||mS()||gS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_y=t=>{var e,n;return(n=(e=sh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vS=t=>{const e=_y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},wy=()=>{var t;return(t=sh())===null||t===void 0?void 0:t.config},Ey=t=>{var e;return(e=sh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class So{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Qi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function yS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ul(JSON.stringify(n)),ul(JSON.stringify(u)),""].join(".")}const Js={};function _S(){const t={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?t.emulator.push(e):t.prod.push(e);return t}function wS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Sg=!1;function Sy(t,e){if(typeof window>"u"||typeof document>"u"||!Qi(window.location.host)||Js[t]===e||Js[t]||Sg)return;Js[t]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=_S().prod.length>0;function u(){const w=document.getElementById(s);w&&w.remove()}function h(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function f(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Sg=!0,u()},w}function _(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=wS(s),I=n("text"),R=document.getElementById(I)||document.createElement("span"),b=n("learnmore"),O=document.getElementById(b)||document.createElement("a"),F=n("preprendIcon"),B=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const W=w.element;h(W),_(O,b);const q=g();f(B,F),W.append(B,R,O,q),document.body.appendChild(W)}l?(R.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function ES(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CS(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SS(){return my.NODE_ADMIN===!0}function ky(){try{return typeof indexedDB=="object"}catch{return!1}}function Ty(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}function IS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const xS="FirebaseError";class gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xS,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?kS(l,s):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new gn(o,h,s)}}function kS(t,e){return t.replace(TS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const TS=/\{\$([^}]+)}/g;/**
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
 */function ao(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const Ny=function(t){let e={},n={},s={},o="";try{const l=t.split(".");e=ao(dl(l[0])||""),n=ao(dl(l[1])||""),o=l[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},NS=function(t){const e=Ny(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},PS=function(t){const e=Ny(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e,n){const s={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=e.call(n,t[o],o,t));return s}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const l=t[o],u=e[o];if(Ig(l)&&Ig(u)){if(!wr(l,u))return!1}else if(l!==u)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Ig(t){return t!==null&&typeof t=="object"}/**
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
 */function Ji(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class RS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const w=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],h=this.chain_[3],f=this.chain_[4],g,_;for(let y=0;y<80;y++){y<40?y<20?(g=h^l&(u^h),_=1518500249):(g=l^u^h,_=1859775393):y<60?(g=l&u|h&(l|u),_=2400959708):(g=l^u^h,_=3395469782);const w=(o<<5|o>>>27)+g+f+_+s[y]&4294967295;f=h,h=u,u=(l<<30|l>>>2)&4294967295,l=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(l[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=e[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function AS(t,e){const n=new bS(t,e);return n.subscribe.bind(n)}class bS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");OS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=id),o.error===void 0&&(o.error=id),o.complete===void 0&&(o.complete=id);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function id(){}function Wl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const LS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,z(s<t.length,"Surrogate pair missing trail surrogate.");const u=t.charCodeAt(s)-56320;o=65536+(l<<10)+u}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Vl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const jS=1e3,DS=2,MS=14400*1e3,FS=.5;function xg(t,e=jS,n=DS){const s=e*Math.pow(n,t),o=Math.round(FS*s*(Math.random()-.5)*2);return Math.min(MS,s+o)}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class US{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new So;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BS(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[l,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&u.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&e(u,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zS(t){return t===zr?void 0:t}function BS(t){return t.instantiationMode==="EAGER"}/**
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
 */class WS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new US(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const VS={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},HS=ye.INFO,$S={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},GS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=$S[e];if(o)console[o](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=HS,this._logHandler=GS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const KS=(t,e)=>e.some(n=>t instanceof n);let kg,Tg;function qS(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YS(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,Ad=new WeakMap,Ry=new WeakMap,sd=new WeakMap,ah=new WeakMap;function QS(t){const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",u)},l=()=>{n(gr(t.result)),o()},u=()=>{s(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&Py.set(n,t)}).catch(()=>{}),ah.set(e,t),e}function JS(t){if(Ad.has(t))return;const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",u),t.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",u),t.addEventListener("abort",u)});Ad.set(t,e)}let bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ry.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XS(t){bd=t(bd)}function ZS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(od(this),e,...n);return Ry.set(s,e.sort?e.sort():[e]),gr(s)}:YS().includes(t)?function(...e){return t.apply(od(this),e),gr(Py.get(this))}:function(...e){return gr(t.apply(od(this),e))}}function eI(t){return typeof t=="function"?ZS(t):(t instanceof IDBTransaction&&JS(t),KS(t,qS())?new Proxy(t,bd):t)}function gr(t){if(t instanceof IDBRequest)return QS(t);if(sd.has(t))return sd.get(t);const e=eI(t);return e!==t&&(sd.set(t,e),ah.set(e,t)),e}const od=t=>ah.get(t);function Ay(t,e,{blocked:n,upgrade:s,blocking:o,terminated:l}={}){const u=indexedDB.open(t,e),h=gr(u);return s&&u.addEventListener("upgradeneeded",f=>{s(gr(u.result),f.oldVersion,f.newVersion,gr(u.transaction),f)}),n&&u.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),h.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const tI=["get","getKey","getAll","getAllKeys","count"],nI=["put","add","delete","clear"],ad=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=nI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||tI.includes(n)))return;const l=async function(u,...h){const f=this.transaction(u,o?"readwrite":"readonly");let g=f.store;return s&&(g=g.index(h.shift())),(await Promise.all([g[n](...h),o&&f.done]))[0]};return ad.set(e,l),l}XS(t=>({...t,get:(e,n,s)=>Ng(e,n)||t.get(e,n,s),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
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
 */class rI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Od="@firebase/app",Pg="0.13.2";/**
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
 */const Ln=new Hl("@firebase/app"),sI="@firebase/app-compat",oI="@firebase/analytics-compat",aI="@firebase/analytics",lI="@firebase/app-check-compat",cI="@firebase/app-check",uI="@firebase/auth",dI="@firebase/auth-compat",hI="@firebase/database",fI="@firebase/data-connect",pI="@firebase/database-compat",mI="@firebase/functions",gI="@firebase/functions-compat",vI="@firebase/installations",yI="@firebase/installations-compat",_I="@firebase/messaging",wI="@firebase/messaging-compat",EI="@firebase/performance",CI="@firebase/performance-compat",SI="@firebase/remote-config",II="@firebase/remote-config-compat",xI="@firebase/storage",kI="@firebase/storage-compat",TI="@firebase/firestore",NI="@firebase/ai",PI="@firebase/firestore-compat",RI="firebase",AI="11.10.0";/**
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
 */const Ld="[DEFAULT]",bI={[Od]:"fire-core",[sI]:"fire-core-compat",[aI]:"fire-analytics",[oI]:"fire-analytics-compat",[cI]:"fire-app-check",[lI]:"fire-app-check-compat",[uI]:"fire-auth",[dI]:"fire-auth-compat",[hI]:"fire-rtdb",[fI]:"fire-data-connect",[pI]:"fire-rtdb-compat",[mI]:"fire-fn",[gI]:"fire-fn-compat",[vI]:"fire-iid",[yI]:"fire-iid-compat",[_I]:"fire-fcm",[wI]:"fire-fcm-compat",[EI]:"fire-perf",[CI]:"fire-perf-compat",[SI]:"fire-rc",[II]:"fire-rc-compat",[xI]:"fire-gcs",[kI]:"fire-gcs-compat",[TI]:"fire-fst",[PI]:"fire-fst-compat",[NI]:"fire-vertex","fire-js":"fire-js",[RI]:"fire-js-all"};/**
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
 */const fl=new Map,OI=new Map,jd=new Map;function Rg(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(jd.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;jd.set(e,t);for(const n of fl.values())Rg(n,t);for(const n of OI.values())Rg(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new ei("app","Firebase",LI);/**
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
 */class jI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xi=AI;function by(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ld,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw vr.create("bad-app-name",{appName:String(o)});if(n||(n=wy()),!n)throw vr.create("no-options");const l=fl.get(o);if(l){if(wr(n,l.options)&&wr(s,l.config))return l;throw vr.create("duplicate-app",{appName:o})}const u=new WS(o);for(const f of jd.values())u.addComponent(f);const h=new jI(n,s,u);return fl.set(o,h),h}function lh(t=Ld){const e=fl.get(t);if(!e&&t===Ld&&wy())return by();if(!e)throw vr.create("no-app",{appName:t});return e}function Ht(t,e,n){var s;let o=(s=bI[t])!==null&&s!==void 0?s:t;n&&(o+=`-${n}`);const l=o.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(h.join(" "));return}mn(new sn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const DI="firebase-heartbeat-database",MI=1,lo="firebase-heartbeat-store";let ld=null;function Oy(){return ld||(ld=Ay(DI,MI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),ld}async function FI(t){try{const n=(await Oy()).transaction(lo),s=await n.objectStore(lo).get(Ly(t));return await n.done,s}catch(e){if(e instanceof gn)Ln.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Ag(t,e){try{const s=(await Oy()).transaction(lo,"readwrite");await s.objectStore(lo).put(e,Ly(t)),await s.done}catch(n){if(n instanceof gn)Ln.warn(n.message);else{const s=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(s.message)}}}function Ly(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UI=1024,zI=30;class BI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=bg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>zI){const u=HI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ln.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:s,unsentEntries:o}=WI(this._heartbeatsCache.heartbeats),l=ul(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Ln.warn(n),""}}}function bg(){return new Date().toISOString().substring(0,10)}function WI(t,e=UI){const n=[];let s=t.slice();for(const o of t){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),Og(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Og(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ky()?Ty().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Og(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}function HI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function $I(t){mn(new sn("platform-logger",e=>new rI(e),"PRIVATE")),mn(new sn("heartbeat",e=>new BI(e),"PRIVATE")),Ht(Od,Pg,t),Ht(Od,Pg,"esm2017"),Ht("fire-js","")}$I("");function ch(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(t);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(n[s[o]]=t[s[o]]);return n}function jy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GI=jy,Dy=new ei("auth","Firebase",jy());/**
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
 */const pl=new Hl("@firebase/auth");function KI(t,...e){pl.logLevel<=ye.WARN&&pl.warn(`Auth (${Xi}): ${t}`,...e)}function tl(t,...e){pl.logLevel<=ye.ERROR&&pl.error(`Auth (${Xi}): ${t}`,...e)}/**
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
 */function on(t,...e){throw uh(t,...e)}function fn(t,...e){return uh(t,...e)}function My(t,e,n){const s=Object.assign(Object.assign({},GI()),{[e]:n});return new ei("auth","Firebase",s).create(e,{appName:t.name})}function An(t){return My(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dy.create(t,...e)}function Z(t,e,...n){if(!t)throw uh(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function jn(t,e){t||Tn(e)}/**
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
 */function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qI(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qI()||Iy()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=oh()||xy()}get(){return YI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dh(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZI=new Io(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,s,o={}){return Uy(t,o,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const h=Ji(Object.assign({key:t.config.apiKey},u)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const g=Object.assign({method:e,headers:f},l);return ES()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Qi(t.emulatorConfig.host)&&(g.credentials="include"),Fy.fetch()(await zy(t,t.config.apiHost,n,h),g)})}async function Uy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},JI),e);try{const o=new tx(t),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Qa(t,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const h=l.ok?u.errorMessage:u.error.message,[f,g]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",u);if(f==="USER_DISABLED")throw Qa(t,"user-disabled",u);const _=s[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw My(t,_,g);on(t,_)}}catch(o){if(o instanceof gn)throw o;on(t,"network-request-failed",{message:String(o)})}}async function xo(t,e,n,s,o={}){const l=await zn(t,e,n,s,o);return"mfaPendingCredential"in l&&on(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function zy(t,e,n,s){const o=`${e}${n}?${s}`,l=t,u=l.config.emulator?dh(t.config,o):`${t.config.apiScheme}://${o}`;return XI.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function ex(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),ZI.get())})}}function Qa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=fn(t,e,s);return o.customData._tokenResponse=n,o}function jg(t){return t!==void 0&&t.enterprise!==void 0}class nx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ex(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rx(t,e){return zn(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function ix(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function ml(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sx(t,e=!1){const n=qe(t),s=await n.getIdToken(e),o=hh(s);Z(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Xs(cd(o.auth_time)),issuedAtTime:Xs(cd(o.iat)),expirationTime:Xs(cd(o.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function cd(t){return Number(t)*1e3}function hh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const o=dl(n);return o?JSON.parse(o):(tl("Failed to decode base64 JWT payload"),null)}catch(o){return tl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Dg(t){const e=hh(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gn&&ox(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ox({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ax{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){var e;const n=t.auth,s=await t.getIdToken(),o=await Bi(t,ml(n,{idToken:s}));Z(o==null?void 0:o.users.length,n,"internal-error");const l=o.users[0];t._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?By(l.providerUserInfo):[],h=cx(t.providerData,u),f=t.isAnonymous,g=!(t.email&&l.passwordHash)&&!(h!=null&&h.length),_=f?g:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Md(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(t,y)}async function lx(t){const e=qe(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cx(t,e){return[...t.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function By(t){return t.map(e=>{var{providerId:n}=e,s=ch(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ux(t,e){const n=await Uy(t,{},async()=>{const s=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,u=await zy(t,o,"/v1/token",`key=${l}`),h=await t._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:s};return t.emulatorConfig&&Qi(t.emulatorConfig.host)&&(f.credentials="include"),Fy.fetch()(u,f)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dx(t,e){return zn(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:l}=await ux(e,n);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:l}=n,u=new Li;return s&&(Z(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),o&&(Z(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(Z(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function ar(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,l=ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ax(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Md(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sx(this,e)}reload(){return lx(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Bi(this,ix(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,l,u,h,f,g,_;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(o=n.email)!==null&&o!==void 0?o:void 0,I=(l=n.phoneNumber)!==null&&l!==void 0?l:void 0,R=(u=n.photoURL)!==null&&u!==void 0?u:void 0,b=(h=n.tenantId)!==null&&h!==void 0?h:void 0,O=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,F=(g=n.createdAt)!==null&&g!==void 0?g:void 0,B=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:W,emailVerified:q,isAnonymous:ue,providerData:ce,stsTokenManager:we}=n;Z(W&&we,e,"internal-error");const Ne=Li.fromJSON(this.name,we);Z(typeof W=="string",e,"internal-error"),ar(y,e.name),ar(w,e.name),Z(typeof q=="boolean",e,"internal-error"),Z(typeof ue=="boolean",e,"internal-error"),ar(I,e.name),ar(R,e.name),ar(b,e.name),ar(O,e.name),ar(F,e.name),ar(B,e.name);const be=new tn({uid:W,auth:e,email:w,emailVerified:q,displayName:y,isAnonymous:ue,photoURL:R,phoneNumber:I,tenantId:b,stsTokenManager:Ne,createdAt:F,lastLoginAt:B});return ce&&Array.isArray(ce)&&(be.providerData=ce.map(et=>Object.assign({},et))),O&&(be._redirectEventId=O),be}static async _fromIdTokenResponse(e,n,s=!1){const o=new Li;o.updateFromServerResponse(n);const l=new tn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await gl(l),l}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Z(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?By(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Li;h.updateFromIdToken(s);const f=new tn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:u}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Md(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(f,g),f}}/**
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
 */const Mg=new Map;function Nn(t){jn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
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
 */class Wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wy.type="NONE";const Fg=Wy;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=nl(this.userKey,o.apiKey,l),this.fullPersistenceKey=nl("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ml(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ji(Nn(Fg),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=o[0]||Nn(Fg);const u=nl(s,e.config.apiKey,e.name);let h=null;for(const g of n)try{const _=await g._get(u);if(_){let y;if(typeof _=="string"){const w=await ml(e,{idToken:_}).catch(()=>{});if(!w)break;y=await tn._fromGetAccountInfoResponse(e,w,_)}else y=tn._fromJSON(e,_);g!==l&&(h=y),l=g;break}}catch{}const f=o.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!f.length?new ji(l,e,s):(l=f[0],h&&await l._set(u,h.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new ji(l,e,s))}}/**
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
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qy(e))return"Blackberry";if(Yy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||$y(e))&&!e.includes("edge/"))return"Chrome";if(Ky(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vy(t=mt()){return/firefox\//i.test(t)}function Hy(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $y(t=mt()){return/crios\//i.test(t)}function Gy(t=mt()){return/iemobile/i.test(t)}function Ky(t=mt()){return/android/i.test(t)}function qy(t=mt()){return/blackberry/i.test(t)}function Yy(t=mt()){return/webos/i.test(t)}function fh(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hx(t=mt()){var e;return fh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fx(){return CS()&&document.documentMode===10}function Qy(t=mt()){return fh(t)||Ky(t)||Yy(t)||qy(t)||/windows phone/i.test(t)||Gy(t)}/**
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
 */function Jy(t,e=[]){let n;switch(t){case"Browser":n=Ug(mt());break;case"Worker":n=`${Ug(mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${s}`}/**
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
 */class px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((u,h)=>{try{const f=e(l);u(f)}catch(f){h(f)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function mx(t,e={}){return zn(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const gx=6;class vx{constructor(e){var n,s,o,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:gx,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,l,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(s=f.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(l=f.containsUppercaseLetter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class yx{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ml(this,{idToken:e}),s=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(o=f.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(An(this));const n=e?qe(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mx(this),n=new vx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await dx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(h,this,"internal-error"),h.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,s,o);return()=>{u=!0,f()}}else{const f=e.addObserver(n);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ni(t){return qe(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=AS(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _x(t){$l=t}function Xy(t){return $l.loadJS(t)}function wx(){return $l.recaptchaEnterpriseScript}function Ex(){return $l.gapiScript}function Cx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Sx{constructor(){this.enterprise=new Ix}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ix{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xx="recaptcha-enterprise",Zy="NO_RECAPTCHA";class kx{constructor(e){this.type=xx,this.auth=ni(e)}async verify(e="verify",n=!1){async function s(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,h)=>{rx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const g=new nx(f);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(f=>{h(f)})})}function o(l,u,h){const f=window.grecaptcha;jg(f)?f.enterprise.ready(()=>{f.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(Zy)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sx().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{s(this.auth).then(h=>{if(!n&&jg(window.grecaptcha))o(h,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=wx();f.length!==0&&(f+=h),Xy(f).then(()=>{o(h,l,u)}).catch(g=>{u(g)})}}).catch(h=>{u(h)})})}}async function Bg(t,e,n,s=!1,o=!1){const l=new kx(t);let u;if(o)u=Zy;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,g=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Fd(t,e,n,s,o){var l;if(!((l=t._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Bg(t,e,n,n==="getOobCode");return s(t,u)}else return s(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Bg(t,e,n,n==="getOobCode");return s(t,h)}else return Promise.reject(u)})}/**
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
 */function Tx(t,e){const n=ti(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(wr(l,e??{}))return o;on(o,"already-initialized")}return n.initialize({options:e})}function Nx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Px(t,e,n){const s=ni(t);Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=e_(e),{host:u,port:h}=Rx(e),f=h===null?"":`:${h}`,g={url:`${l}//${u}${f}/`},_=Object.freeze({host:u,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Z(wr(g,s.config.emulator)&&wr(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,Qi(u)?(Cy(`${l}//${u}${f}`),Sy("Auth",!0)):Ax()}function e_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rx(t){const e=e_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Wg(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:Wg(u)}}}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ax(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ph{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function bx(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ox(t,e){return xo(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
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
 */async function Lx(t,e){return xo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function jx(t,e){return xo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class co extends ph{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new co(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new co(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,n,"signInWithPassword",Ox);case"emailLink":return Lx(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,s,"signUpPassword",bx);case"emailLink":return jx(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Di(t,e){return xo(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const Dx="http://localhost";class $r extends ph{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,l=ch(n,["providerId","signInMethod"]);if(!s||!o)return null;const u=new $r(s,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:Dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
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
 */function Mx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fx(t){const e=qs(Ys(t)).link,n=e?qs(Ys(e)).deep_link_id:null,s=qs(Ys(t)).deep_link_id;return(s?qs(Ys(s)).link:null)||s||n||e||t}class mh{constructor(e){var n,s,o,l,u,h;const f=qs(Ys(e)),g=(n=f.apiKey)!==null&&n!==void 0?n:null,_=(s=f.oobCode)!==null&&s!==void 0?s:null,y=Mx((o=f.mode)!==null&&o!==void 0?o:null);Z(g&&_&&y,"argument-error"),this.apiKey=g,this.operation=y,this.code=_,this.continueUrl=(l=f.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=Fx(e);try{return new mh(n)}catch{return null}}}/**
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
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=mh.parseLink(n);return Z(s,"argument-error"),co._fromEmailAndCode(e,s.code,s.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cr extends ko{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ur.credential(n,s)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class dr extends ko{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class hr extends ko{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hr.credential(n,s)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function Ux(t,e){return xo(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const l=await tn._fromIdTokenResponse(e,s,o),u=Vg(s);return new Gr({user:l,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Vg(s);return new Gr({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vl extends gn{constructor(e,n,s,o){var l;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new vl(e,n,s,o)}}function n_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,l,e,s):l})}async function zx(t,e,n=!1){const s=await Bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",s)}/**
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
 */async function Bx(t,e,n=!1){const{auth:s}=t;if(Wt(s.app))return Promise.reject(An(s));const o="reauthenticate";try{const l=await Bi(t,n_(s,o,e,t),n);Z(l.idToken,s,"internal-error");const u=hh(l.idToken);Z(u,s,"internal-error");const{sub:h}=u;return Z(t.uid===h,s,"user-mismatch"),Gr._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&on(s,"user-mismatch"),l}}/**
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
 */async function r_(t,e,n=!1){if(Wt(t.app))return Promise.reject(An(t));const s="signIn",o=await n_(t,s,e),l=await Gr._fromIdTokenResponse(t,s,o);return n||await t._updateCurrentUser(l.user),l}async function Wx(t,e){return r_(ni(t),e)}/**
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
 */async function i_(t){const e=ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vx(t,e,n){if(Wt(t.app))return Promise.reject(An(t));const s=ni(t),u=await Fd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ux).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&i_(t),f}),h=await Gr._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(h.user),h}function Hx(t,e,n){return Wt(t.app)?Promise.reject(An(t)):Wx(qe(t),Zi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&i_(t),s})}/**
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
 */async function $x(t,e){return zn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Gx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=qe(t),l={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},u=await Bi(s,$x(s.auth,l));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const h=s.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=s.displayName,h.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function Kx(t,e,n,s){return qe(t).onIdTokenChanged(e,n,s)}function qx(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function Yx(t,e,n,s){return qe(t).onAuthStateChanged(e,n,s)}function Qx(t){return qe(t).signOut()}const yl="__sak";/**
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
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Jx=1e3,Xx=10;class o_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);fx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Xx):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o_.type="LOCAL";const Zx=o_;/**
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
 */class a_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a_.type="SESSION";const l_=a_;/**
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
 */function ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Gl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(u).map(async g=>g(n.origin,l)),f=await ek(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
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
 */function gh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((h,f)=>{const g=gh("",20);o.port1.start();const _=setTimeout(()=>{f(new Error("unsupported_event"))},s);u={messageChannel:o,onMessage(y){const w=y;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(w.data.response);break;default:clearTimeout(_),clearTimeout(l),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function pn(){return window}function nk(t){pn().location.href=t}/**
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
 */function c_(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ik(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sk(){return c_()?self:null}/**
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
 */const u_="firebaseLocalStorageDb",ok=1,_l="firebaseLocalStorage",d_="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function ak(){const t=indexedDB.deleteDatabase(u_);return new To(t).toPromise()}function Ud(){const t=indexedDB.open(u_,ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_l,{keyPath:d_})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_l)?e(s):(s.close(),await ak(),e(await Ud()))})})}async function Hg(t,e,n){const s=Kl(t,!0).put({[d_]:e,value:n});return new To(s).toPromise()}async function lk(t,e){const n=Kl(t,!1).get(e),s=await new To(n).toPromise();return s===void 0?null:s.value}function $g(t,e){const n=Kl(t,!0).delete(e);return new To(n).toPromise()}const ck=800,uk=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>uk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rk(),!this.activeServiceWorker)return;this.sender=new tk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await Hg(e,yl,"1"),await $g(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>lk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$g(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Kl(o,!1).getAll();return new To(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const dk=h_;new Io(3e4,6e4);/**
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
 */function hk(t,e){return e?Nn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vh extends ph{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fk(t){return r_(t.auth,new vh(t),t.bypassAuthState)}function pk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Bx(n,new vh(t),t.bypassAuthState)}async function mk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),zx(n,new vh(t),t.bypassAuthState)}/**
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
 */class f_{constructor(e,n,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:l,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:n,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fk;case"linkViaPopup":case"linkViaRedirect":return mk;case"reauthViaPopup":case"reauthViaRedirect":return pk;default:on(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gk=new Io(2e3,1e4);class bi extends f_{constructor(e,n,s,o,l){super(e,n,o,l),this.provider=s,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gk.get())};e()}}bi.currentPopupAction=null;/**
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
 */const vk="pendingRedirect",rl=new Map;class yk extends f_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const s=await _k(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _k(t,e){const n=Ck(e),s=Ek(t);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function wk(t,e){rl.set(t._key(),e)}function Ek(t){return Nn(t._redirectPersistence)}function Ck(t){return nl(vk,t.config.apiKey,t.name)}async function Sk(t,e,n=!1){if(Wt(t.app))return Promise.reject(An(t));const s=ni(t),o=hk(s,e),u=await new yk(s,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
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
 */const Ik=600*1e3;class xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!p_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ik&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gg(e))}saveEventToCache(e){this.cachedEventUids.add(Gg(e)),this.lastProcessedEventTime=Date.now()}}function Gg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p_(t);default:return!1}}/**
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
 */async function Tk(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
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
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pk=/^https?/;async function Rk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tk(t);for(const n of e)try{if(Ak(n))return}catch{}on(t,"unauthorized-domain")}function Ak(t){const e=Dd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!Pk.test(n))return!1;if(Nk.test(t))return s===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const bk=new Io(3e4,6e4);function Kg(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ok(t){return new Promise((e,n)=>{var s,o,l;function u(){Kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kg(),n(fn(t,"network-request-failed"))},timeout:bk.get()})}if(!((o=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=pn().gapi)===null||l===void 0)&&l.load)u();else{const h=Cx("iframefcb");return pn()[h]=()=>{gapi.load?u():n(fn(t,"network-request-failed"))},Xy(`${Ex()}?onload=${h}`).catch(f=>n(f))}}).catch(e=>{throw il=null,e})}let il=null;function Lk(t){return il=il||Ok(t),il}/**
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
 */const jk=new Io(5e3,15e3),Dk="__/auth/iframe",Mk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zk(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dh(e,Mk):`https://${t.config.authDomain}/${Dk}`,s={apiKey:e.apiKey,appName:t.name,v:Xi},o=Uk.get(t.config.apiHost);o&&(s.eid=o);const l=t._getFrameworks();return l.length&&(s.fw=l.join(",")),`${n}?${Ji(s).slice(1)}`}async function Bk(t){const e=await Lk(t),n=pn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:zk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const u=fn(t,"network-request-failed"),h=pn().setTimeout(()=>{l(u)},jk.get());function f(){pn().clearTimeout(h),o(s)}s.ping(f).then(f,()=>{l(u)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vk=500,Hk=600,$k="_blank",Gk="http://localhost";class qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kk(t,e,n,s=Vk,o=Hk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const f=Object.assign(Object.assign({},Wk),{width:s.toString(),height:o.toString(),top:l,left:u}),g=mt().toLowerCase();n&&(h=$y(g)?$k:n),Vy(g)&&(e=e||Gk,f.scrollbars="yes");const _=Object.entries(f).reduce((w,[I,R])=>`${w}${I}=${R},`,"");if(hx(g)&&h!=="_self")return qk(e||"",h),new qg(null);const y=window.open(e||"",h,_);Z(y,t,"popup-blocked");try{y.focus()}catch{}return new qg(y)}function qk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Yk="__/auth/handler",Qk="emulator/auth/handler",Jk=encodeURIComponent("fac");async function Yg(t,e,n,s,o,l){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xi,eventId:o};if(e instanceof t_){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",Rd(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries({}))u[_]=y}if(e instanceof ko){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(u.scopes=_.join(","))}t.tenantId&&(u.tid=t.tenantId);const h=u;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const f=await t._getAppCheckToken(),g=f?`#${Jk}=${encodeURIComponent(f)}`:"";return`${Xk(t)}?${Ji(h).slice(1)}${g}`}function Xk({config:t}){return t.emulator?dh(t,Qk):`https://${t.authDomain}/${Yk}`}/**
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
 */const ud="webStorageSupport";class Zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l_,this._completeRedirectFn=Sk,this._overrideRedirectResult=wk}async _openPopup(e,n,s,o){var l;jn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await Yg(e,n,s,Dd(),o);return Kk(e,u,gh())}async _openRedirect(e,n,s,o){await this._originValidation(e);const l=await Yg(e,n,s,Dd(),o);return nk(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(jn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Bk(e),s=new xk(e);return n.register("authEvent",o=>(Z(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ud,{type:ud},o=>{var l;const u=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[ud];u!==void 0&&n(!!u),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||Hy()||fh()}}const eT=Zk;var Qg="@firebase/auth",Jg="1.10.8";/**
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
 */class tT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rT(t){mn(new sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=s.options;Z(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const f={apiKey:u,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jy(t)},g=new yx(s,o,l,f);return Nx(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mn(new sn("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(s=>new tT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Qg,Jg,nT(t)),Ht(Qg,Jg,"esm2017")}/**
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
 */const iT=300,sT=Ey("authIdTokenMaxAge")||iT;let Xg=null;const oT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>sT)return;const o=n==null?void 0:n.token;Xg!==o&&(Xg=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function aT(t=lh()){const e=ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tx(t,{popupRedirectResolver:eT,persistence:[dk,Zx,l_]}),s=Ey("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=oT(l.toString());qx(n,u,()=>u(n.currentUser)),Kx(n,h=>u(h))}}const o=_y("auth");return o&&Px(n,`http://${o}`),n}function lT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_x({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=o=>{const l=fn("internal-error");l.customData=o,n(l)},s.type="text/javascript",s.charset="UTF-8",lT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rT("Browser");var Zg={};const ev="@firebase/database",tv="1.0.20";/**
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
 */let m_="";function cT(t){m_=t}/**
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
 */class uT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ao(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const g_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uT(e)}}catch{}return new dT},Vr=g_("localStorage"),hT=g_("sessionStorage");/**
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
 */const Mi=new Hl("@firebase/database"),fT=(function(){let t=1;return function(){return t++}})(),v_=function(t){const e=LS(t),n=new RS;n.update(e);const s=n.digest();return ih.encodeByteArray(s)},No=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=No.apply(null,s):typeof s=="object"?e+=Ke(s):e+=s,e+=" "}return e};let Zs=null,nv=!0;const pT=function(t,e){z(!0,"Can't turn on custom loggers persistently."),Mi.logLevel=ye.VERBOSE,Zs=Mi.log.bind(Mi)},it=function(...t){if(nv===!0&&(nv=!1,Zs===null&&hT.get("logging_enabled")===!0&&pT()),Zs){const e=No.apply(null,t);Zs(e)}},Po=function(t){return function(...e){it(t,...e)}},zd=function(...t){const e="FIREBASE INTERNAL ERROR: "+No(...t);Mi.error(e)},Dn=function(...t){const e=`FIREBASE FATAL ERROR: ${No(...t)}`;throw Mi.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+No(...t);Mi.warn(e)},mT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",Kr="[MAX_NAME]",ri=function(t,e){if(t===e)return 0;if(t===Wi||e===Kr)return-1;if(e===Wi||t===Kr)return 1;{const n=rv(t),s=rv(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},vT=function(t,e){return t===e?0:t<e?-1:1},Hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},_h=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ke(e[s]),n+=":",n+=_h(t[e[s]]);return n+="}",n},y_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(t.substring(o,n)):s.push(t.substring(o,o+e));return s};function st(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const __=function(t){z(!yh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,l,u,h,f;t===0?(l=0,u=0,o=1/t===-1/0?1:0):(o=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(t)/Math.LN2),s),l=h+s,u=Math.round(t*Math.pow(2,n-h)-Math.pow(2,n))):(l=0,u=Math.round(t/Math.pow(2,1-s-n))));const g=[];for(f=n;f;f-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(o?1:0),g.reverse();const _=g.join("");let y="";for(f=0;f<64;f+=8){let w=parseInt(_.substr(f,8),2).toString(16);w.length===1&&(w="0"+w),y=y+w}return y.toLowerCase()},yT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_T=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ET=new RegExp("^-?(0*)\\d{1,10}$"),CT=-2147483648,ST=2147483647,rv=function(t){if(ET.test(t)){const e=Number(t);if(e>=CT&&e<=ST)return e}return null},es=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},IT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},eo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xT{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Wt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sl.OWNER="owner";/**
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
 */const wh="5",w_="v",E_="s",C_="r",S_="f",I_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,x_="ls",k_="p",Bd="ac",T_="websocket",N_="long_polling";/**
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
 */class P_{constructor(e,n,s,o,l=!1,u="",h=!1,f=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function R_(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===T_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===N_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TT(t)&&(n.ns=t.namespace);const o=[];return st(n,(l,u)=>{o.push(l+"="+u)}),s+o.join("&")}/**
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
 */class NT{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dS(this.counters_)}}/**
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
 */const dd={},hd={};function Eh(t){const e=t.toString();return dd[e]||(dd[e]=new NT),dd[e]}function PT(t,e){const n=t.toString();return hd[n]||(hd[n]=e()),hd[n]}/**
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
 */class RT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&es(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const iv="start",AT="close",bT="pLPCommand",OT="pRTLPCB",A_="id",b_="pw",O_="ser",LT="cb",jT="seg",DT="ts",MT="d",FT="dframe",L_=1870,j_=30,UT=L_-j_,zT=25e3,BT=3e4;class Oi{constructor(e,n,s,o,l,u,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Po(e),this.stats_=Eh(n),this.urlFn=f=>(this.appCheckToken&&(f[Bd]=this.appCheckToken),R_(n,N_,f))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new RT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BT)),gT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ch((...l)=>{const[u,h,f,g,_]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===iv)this.id=h,this.password=f;else if(u===AT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[iv]="t",s[O_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[LT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[w_]=wh,this.transportSessionId&&(s[E_]=this.transportSessionId),this.lastSessionId&&(s[x_]=this.lastSessionId),this.applicationId&&(s[k_]=this.applicationId),this.appCheckToken&&(s[Bd]=this.appCheckToken),typeof location<"u"&&location.hostname&&I_.test(location.hostname)&&(s[C_]=S_);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oi.forceAllow_=!0}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){return Oi.forceAllow_?!0:!Oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yT()&&!_T()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vy(n),o=y_(s,UT);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[FT]="t",s[A_]=e,s[b_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ch{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fT(),window[bT+this.uniqueCallbackIdentifier]=e,window[OT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ch.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(h){it("frame writing exception"),h.stack&&it(h.stack),it(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[A_]=this.myID,e[b_]=this.myPW,e[O_]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+j_+s.length<=L_;){const u=this.pendingSegs.shift();s=s+"&"+jT+o+"="+u.seg+"&"+DT+o+"="+u.ts+"&"+MT+o+"="+u.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(zT)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const WT=16384,VT=45e3;let wl=null;typeof MozWebSocket<"u"?wl=MozWebSocket:typeof WebSocket<"u"&&(wl=WebSocket);class en{constructor(e,n,s,o,l,u,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Po(this.connId),this.stats_=Eh(n),this.connURL=en.connectionURL_(n,u,h,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,l){const u={};return u[w_]=wh,typeof location<"u"&&location.hostname&&I_.test(location.hostname)&&(u[C_]=S_),n&&(u[E_]=n),s&&(u[x_]=s),o&&(u[Bd]=o),l&&(u[k_]=l),R_(e,T_,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vr.set("previous_websocket_failure",!0);try{let s;SS(),this.mySock=new wl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wl!==null&&!en.forceDisallow_}static previouslyFailed(){return Vr.isInMemoryStorage||Vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ao(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=y_(n,WT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class uo{static get ALL_TRANSPORTS(){return[Oi,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=en&&en.isAvailable();let s=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[en];else{const o=this.transports_=[];for(const l of uo.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}uo.globalTransportInitialized_=!1;/**
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
 */const HT=6e4,$T=5e3,GT=10*1024,KT=100*1024,fd="t",sv="d",qT="s",ov="r",YT="e",av="o",lv="a",cv="n",uv="p",QT="h";class JT{constructor(e,n,s,o,l,u,h,f,g,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=h,this.onDisconnect_=f,this.onKill_=g,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Po("c:"+this.id+":"),this.transportManager_=new uo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=eo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fd in e){const n=e[fd];n===lv?this.upgradeIfSecondaryHealthy_():n===ov?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===av&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hs("t",e),s=Hs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:uv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hs("t",e),s=Hs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hs(fd,e);if(sv in e){const s=e[sv];if(n===QT){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===cv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qT?this.onConnectionShutdown_(s):n===ov?this.onReset_(s):n===YT?zd("Server Error: "+s):n===av?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wh!==s&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),eo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):eo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($T))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:uv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class D_{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class M_{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class El extends M_{static getInstance(){return new El}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dv=32,hv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new _e("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function Sh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ho(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function F_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new _e(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function ft(t,e){const n=le(t),s=le(e);if(n===null)return e;if(n===s)return ft(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ZT(t,e){const n=ho(t,0),s=ho(e,0);for(let o=0;o<n.length&&o<s.length;o++){const l=ri(n[o],s[o]);if(l!==0)return l}return n.length===s.length?0:n.length<s.length?-1:1}function U_(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class eN{constructor(e,n){this.errorPrefix_=n,this.parts_=ho(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vl(this.parts_[s]);z_(this)}}function tN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vl(e),z_(t)}function nN(t){const e=t.parts_.pop();t.byteLength_-=Vl(e),t.parts_.length>0&&(t.byteLength_-=1)}function z_(t){if(t.byteLength_>hv)throw new Error(t.errorPrefix_+"has a key path longer than "+hv+" bytes ("+t.byteLength_+").");if(t.parts_.length>dv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dv+") or object contains a cycle "+Br(t))}function Br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ih extends M_{static getInstance(){return new Ih}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const $s=1e3,rN=300*1e3,fv=30*1e3,iN=1.3,sN=3e4,oN="server_kill",pv=3;class bn extends D_{constructor(e,n,s,o,l,u,h,f){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=bn.nextPersistentConnectionId_++,this.log_=Po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$s,this.maxReconnectDelay_=rN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ih.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,l={r:o,a:e,b:n};this.log_(Ke(l)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new So,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const h=u.d;u.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,s,o){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(u).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},u="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,h=>{const f=h.d,g=h.s;bn.warnOnListenWarnings_(f,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),g!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(g,f))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const s=zi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||PS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=NS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const l=o.s,u=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const l={p:e},u="n";o&&(l.q=s,l.t=o),this.sendRequest(u,l)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const l={p:n,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,l){this.initConnection_();const u={p:n,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zd("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sN&&(this.reconnectDelay_=$s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+bn.nextConnectionId_++,l=this.lastSessionId;let u=!1,h=null;const f=function(){h?h.close():(u=!0,s())},g=function(y){z(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(y)};this.realtime_={close:f,sendRequest:g};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,w]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);u?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=w&&w.token,h=new JT(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,I=>{pt(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(oN)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&pt(y),f())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rd(this.interruptReasons_)&&(this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(l=>_h(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pv&&(this.reconnectDelay_=fv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+m_.replace(/\./g,"-")]=1,oh()?e["framework.cordova"]=1:xy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return Rd(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
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
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
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
 */class ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new se(Wi,e),o=new se(Wi,n);return this.compare(s,o)!==0}minPost(){return se.MIN}}/**
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
 */let Ja;class B_ extends ql{static get __EMPTY_NODE(){return Ja}static set __EMPTY_NODE(e){Ja=e}compare(e,n){return ri(e.name,n.name)}isDefinedOn(e){throw Yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Kr,Ja)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Ja)}toString(){return".key"}}const Fi=new B_;/**
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
 */class Xa{constructor(e,n,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,s,o,l){this.key=e,this.value=n,this.color=s??Ze.RED,this.left=o??Ct.EMPTY_NODE,this.right=l??Ct.EMPTY_NODE}copy(e,n,s,o,l){return new Ze(e??this.key,n??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class aN{copy(e,n,s,o,l){return this}insert(e,n,s){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xa(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new aN;/**
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
 */function lN(t,e){return ri(t.name,e.name)}function xh(t,e){return ri(t,e)}/**
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
 */let Wd;function cN(t){Wd=t}const W_=function(t){return typeof t=="number"?"number:"+__(t):"string:"+t},V_=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else z(t===Wd||t.isEmpty(),"priority of unexpected type.");z(t===Wd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mv;class Xe{static set __childrenNodeConstructor(e){mv=e}static get __childrenNodeConstructor(){return mv}constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),V_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:le(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+W_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=__(this.value_):e+=this.value_,this.lazyHash_=v_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=Xe.VALUE_TYPE_ORDER.indexOf(n),l=Xe.VALUE_TYPE_ORDER.indexOf(s);return z(o>=0,"Unknown leaf type: "+n),z(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let H_,$_;function uN(t){H_=t}function dN(t){$_=t}class hN extends ql{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),l=s.compareTo(o);return l===0?ri(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Kr,new Xe("[PRIORITY-POST]",$_))}makePost(e,n){const s=H_(e);return new se(n,new Xe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ue=new hN;/**
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
 */const fN=Math.log(2);class pN{constructor(e){const n=l=>parseInt(Math.log(l)/fN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cl=function(t,e,n,s){t.sort(e);const o=function(f,g){const _=g-f;let y,w;if(_===0)return null;if(_===1)return y=t[f],w=n?n(y):y,new Ze(w,y.node,Ze.BLACK,null,null);{const I=parseInt(_/2,10)+f,R=o(f,I),b=o(I+1,g);return y=t[I],w=n?n(y):y,new Ze(w,y.node,Ze.BLACK,R,b)}},l=function(f){let g=null,_=null,y=t.length;const w=function(R,b){const O=y-R,F=y;y-=R;const B=o(O+1,F),W=t[O],q=n?n(W):W;I(new Ze(q,W.node,b,null,B))},I=function(R){g?(g.left=R,g=R):(_=R,g=R)};for(let R=0;R<f.count;++R){const b=f.nextBitIsOne(),O=Math.pow(2,f.count-(R+1));b?w(O,Ze.BLACK):(w(O,Ze.BLACK),w(O,Ze.RED))}return _},u=new pN(t.length),h=l(u);return new Ct(s||e,h)};/**
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
 */let pd;const Ri={};class Pn{static get Default(){return z(Ri&&Ue,"ChildrenNode.ts has not been loaded"),pd=pd||new Pn({".priority":Ri},{".priority":Ue}),pd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=zi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=n.getIterator(se.Wrap);let u=l.getNext();for(;u;)o=o||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let h;o?h=Cl(s,e.getCompare()):h=Ri;const f=e.toString(),g=Object.assign({},this.indexSet_);g[f]=e;const _=Object.assign({},this.indexes_);return _[f]=h,new Pn(_,g)}addToIndexes(e,n){const s=hl(this.indexes_,(o,l)=>{const u=zi(this.indexSet_,l);if(z(u,"Missing index implementation for "+l),o===Ri)if(u.isDefinedOn(e.node)){const h=[],f=n.getIterator(se.Wrap);let g=f.getNext();for(;g;)g.name!==e.name&&h.push(g),g=f.getNext();return h.push(e),Cl(h,u.getCompare())}else return Ri;else{const h=n.get(e.name);let f=o;return h&&(f=f.remove(new se(e.name,h))),f.insert(e,e.node)}});return new Pn(s,this.indexSet_)}removeFromIndexes(e,n){const s=hl(this.indexes_,o=>{if(o===Ri)return o;{const l=n.get(e.name);return l?o.remove(new se(e.name,l)):o}});return new Pn(s,this.indexSet_)}}/**
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
 */let Gs;class ee{static get EMPTY_NODE(){return Gs||(Gs=new ee(new Ct(xh),null,Pn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&V_(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gs}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gs:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new se(e,n);let o,l;n.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(s,this.children_));const u=o.isEmpty()?Gs:this.priorityNode_;return new ee(o,u,l)}}updateChild(e,n){const s=le(e);if(s===null)return n;{z(le(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,l=!0;if(this.forEachChild(Ue,(u,h)=>{n[u]=h.val(e),s++,l&&ee.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!e&&l&&o<2*s){const u=[];for(const h in n)u[h]=n[h];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+W_(this.getPriority().val())+":"),this.forEachChild(Ue,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":v_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new se(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,se.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ro?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ue),o=n.getIterator(Ue);let l=s.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mN extends ee{constructor(){super(new Ct(xh),ee.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Ro=new mN;Object.defineProperties(se,{MIN:{value:new se(Wi,ee.EMPTY_NODE)},MAX:{value:new se(Kr,Ro)}});B_.__EMPTY_NODE=ee.EMPTY_NODE;Xe.__childrenNodeConstructor=ee;cN(Ro);dN(Ro);/**
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
 */const gN=!0;function Ge(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,Ge(e))}if(!(t instanceof Array)&&gN){const n=[];let s=!1;if(st(t,(u,h)=>{if(u.substring(0,1)!=="."){const f=Ge(h);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),n.push(new se(u,f)))}}),n.length===0)return ee.EMPTY_NODE;const l=Cl(n,lN,u=>u.name,xh);if(s){const u=Cl(n,Ue.getCompare());return new ee(l,Ge(e),new Pn({".priority":u},{".priority":Ue}))}else return new ee(l,Ge(e),Pn.Default)}else{let n=ee.EMPTY_NODE;return st(t,(s,o)=>{if(vn(t,s)&&s.substring(0,1)!=="."){const l=Ge(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(s,l))}}),n.updatePriority(Ge(e))}}uN(Ge);/**
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
 */class vN extends ql{constructor(e){super(),this.indexPath_=e,z(!oe(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),l=s.compareTo(o);return l===0?ri(e.name,n.name):l}makePost(e,n){const s=Ge(e),o=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new se(n,o)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Ro);return new se(Kr,e)}toString(){return ho(this.indexPath_,0).join("/")}}/**
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
 */class yN extends ql{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ri(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const s=Ge(e);return new se(n,s)}toString(){return".value"}}const _N=new yN;/**
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
 */function G_(t){return{type:"value",snapshotNode:t}}function Vi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function po(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class kh{constructor(e){this.index_=e}updateChild(e,n,s,o,l,u){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(fo(n,h)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?u.trackChildChange(Vi(n,s)):u.trackChildChange(po(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ue,(o,l)=>{n.hasChild(o)||s.trackChildChange(fo(o,l))}),n.isLeafNode()||n.forEachChild(Ue,(o,l)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(l)||s.trackChildChange(po(o,l,u))}else s.trackChildChange(Vi(o,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class mo{constructor(e){this.indexedFilter_=new kh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mo.getStartPost_(e),this.endPost_=mo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,o,l,u){return this.matches(new se(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,o,l,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(ee.EMPTY_NODE);const l=this;return n.forEachChild(Ue,(u,h)=>{l.matches(new se(u,h))||(o=o.updateImmediateChild(u,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class EN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,o,l,u){return this.rangedFilter_.matches(new se(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,o,l,u):this.fullLimitUpdateChild_(e,n,s,l,u)}updateFullNode(e,n,s){let o;if(n.isLeafNode()||n.isEmpty())o=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=ee.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(ee.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const h=l.getNext();u<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?u++:o=o.updateImmediateChild(h.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,o,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(w,I)=>y(I,w)}else u=this.index_.getCompare();const h=e;z(h.numChildren()===this.limit_,"");const f=new se(n,s),g=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),_=this.rangedFilter_.matches(f);if(h.hasChild(n)){const y=h.getImmediateChild(n);let w=o.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===n||h.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const I=w==null?1:u(w,f);if(_&&!s.isEmpty()&&I>=0)return l!=null&&l.trackChildChange(po(n,s,y)),h.updateImmediateChild(n,s);{l!=null&&l.trackChildChange(fo(n,y));const b=h.updateImmediateChild(n,ee.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(Vi(w.name,w.node)),b.updateImmediateChild(w.name,w.node)):b}}else return s.isEmpty()?e:_&&u(g,f)>=0?(l!=null&&(l.trackChildChange(fo(g.name,g.node)),l.trackChildChange(Vi(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(g.name,ee.EMPTY_NODE)):e}}/**
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
 */class Th{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Th;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CN(t){return t.loadsAllData()?new kh(t.getIndex()):t.hasLimit()?new EN(t):new mo(t)}function gv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ue?n="$priority":t.index_===_N?n="$value":t.index_===Fi?n="$key":(z(t.index_ instanceof vN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ke(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ke(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ke(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
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
 */class Sl extends D_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Po("p:rest:"),this.listens_={}}listen(e,n,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=Sl.getListenId_(e,s),h={};this.listens_[u]=h;const f=gv(e._queryParams);this.restRequest_(l+".json",f,(g,_)=>{let y=_;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(l,y,!1,s),zi(this.listens_,u)===h){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",o(w,null)}})}unlisten(e,n){const s=Sl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=gv(e._queryParams),s=e._path.toString(),o=new So;return this.restRequest_(s+".json",n,(l,u)=>{let h=u;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ji(n);this.log_("Sending REST request for "+u);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+u+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=ao(h.responseText)}catch{pt("Failed to parse JSON response for "+u+": "+h.responseText)}s(null,f)}else h.status!==401&&h.status!==404&&pt("Got unsuccessful REST response for "+u+" Status: "+h.status),s(h.status);s=null}},h.open("GET",u,!0),h.send()})}}/**
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
 */class SN{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Il(){return{value:null,children:new Map}}function K_(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=le(e);t.children.has(s)||t.children.set(s,Il());const o=t.children.get(s);e=Ie(e),K_(o,e,n)}}function Vd(t,e,n){t.value!==null?n(e,t.value):IN(t,(s,o)=>{const l=new _e(e.toString()+"/"+s);Vd(o,l,n)})}function IN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class xN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&st(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
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
 */const yv=10*1e3,kN=30*1e3,TN=300*1e3;class NN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xN(e);const s=yv+(kN-yv)*Math.random();eo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;st(e,(o,l)=>{l>0&&vn(this.statsToReport_,o)&&(n[o]=l,s=!0)}),s&&this.server_.reportStats(n),eo(this.reportStats_.bind(this),Math.floor(Math.random()*2*TN))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function Nh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ph(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nn.ACK_USER_WRITE,this.source=Nh()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new xl(me(),n,this.revert)}}else return z(le(this.path)===e,"operationForChild called for unrelated child."),new xl(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class go{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new go(this.source,me()):new go(this.source,Ie(this.path))}}/**
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
 */class qr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nn.OVERWRITE}operationForChild(e){return oe(this.path)?new qr(this.source,me(),this.snap.getImmediateChild(e)):new qr(this.source,Ie(this.path),this.snap)}}/**
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
 */class Hi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new qr(this.source,me(),n.value):new Hi(this.source,me(),n)}else return z(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Cr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class PN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function RN(t,e,n,s){const o=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&t.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(wN(u.childName,u.snapshotNode))}),Ks(t,o,"child_removed",e,s,n),Ks(t,o,"child_added",e,s,n),Ks(t,o,"child_moved",l,s,n),Ks(t,o,"child_changed",e,s,n),Ks(t,o,"value",e,s,n),o}function Ks(t,e,n,s,o,l){const u=s.filter(h=>h.type===n);u.sort((h,f)=>bN(t,h,f)),u.forEach(h=>{const f=AN(t,h,l);o.forEach(g=>{g.respondsTo(h.type)&&e.push(g.createEvent(f,t.query_))})})}function AN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bN(t,e,n){if(e.childName==null||n.childName==null)throw Yi("Should only compare child_ events.");const s=new se(e.childName,e.snapshotNode),o=new se(n.childName,n.snapshotNode);return t.index_.compare(s,o)}/**
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
 */function Yl(t,e){return{eventCache:t,serverCache:e}}function to(t,e,n,s){return Yl(new Cr(e,n,s),t.serverCache)}function q_(t,e,n,s){return Yl(t.eventCache,new Cr(e,n,s))}function kl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let md;const ON=()=>(md||(md=new Ct(vT)),md);class Se{static fromObject(e){let n=new Se(null);return st(e,(s,o)=>{n=n.set(new _e(s),o)}),n}constructor(e,n=ON()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(oe(e))return null;{const s=le(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Ie(e),n);return l!=null?{path:Fe(new _e(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new Se(null)}}set(e,n){if(oe(e))return new Se(n,this.children);{const s=le(e),l=(this.children.get(s)||new Se(null)).set(Ie(e),n),u=this.children.insert(s,l);return new Se(this.value,u)}}remove(e){if(oe(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const o=s.remove(Ie(e));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new Se(null):new Se(this.value,l)}else return this}}get(e){if(oe(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(oe(e))return n;{const s=le(e),l=(this.children.get(s)||new Se(null)).setTree(Ie(e),n);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new Se(this.value,u)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(Fe(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(oe(e))return null;{const l=le(e),u=this.children.get(l);return u?u.findOnPath_(Ie(e),Fe(n,l),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const o=le(e),l=this.children.get(o);return l?l.foreachOnPath_(Ie(e),Fe(n,o),s):new Se(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_(Fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class rn{constructor(e){this.writeTree_=e}static empty(){return new rn(new Se(null))}}function no(t,e,n){if(oe(e))return new rn(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const u=ft(o,e);return l=l.updateChild(u,n),new rn(t.writeTree_.set(o,l))}else{const o=new Se(n),l=t.writeTree_.setTree(e,o);return new rn(l)}}}function Hd(t,e,n){let s=t;return st(n,(o,l)=>{s=no(s,Fe(e,o),l)}),s}function _v(t,e){if(oe(e))return rn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new rn(n)}}function $d(t,e){return ii(t,e)!=null}function ii(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ft(n.path,e)):null}function wv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(s,o)=>{e.push(new se(s,o))}):t.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new se(s,o.value))}),e}function yr(t,e){if(oe(e))return t;{const n=ii(t,e);return n!=null?new rn(new Se(n)):new rn(t.writeTree_.subtree(e))}}function Gd(t){return t.writeTree_.isEmpty()}function $i(t,e){return Y_(me(),t.writeTree_,e)}function Y_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(z(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):n=Y_(Fe(t,o),l,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Fe(t,".priority"),s)),n}}/**
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
 */function Ql(t,e){return Z_(e,t)}function LN(t,e,n,s,o){z(s>t.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(t.visibleWrites=no(t.visibleWrites,e,n)),t.lastWriteId=s}function jN(t,e,n,s){z(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Hd(t.visibleWrites,e,n),t.lastWriteId=s}function DN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function MN(t,e){const n=t.allWrites.findIndex(h=>h.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let o=s.visible,l=!1,u=t.allWrites.length-1;for(;o&&u>=0;){const h=t.allWrites[u];h.visible&&(u>=n&&FN(h,s.path)?o=!1:Vt(s.path,h.path)&&(l=!0)),u--}if(o){if(l)return UN(t),!0;if(s.snap)t.visibleWrites=_v(t.visibleWrites,s.path);else{const h=s.children;st(h,f=>{t.visibleWrites=_v(t.visibleWrites,Fe(s.path,f))})}return!0}else return!1}function FN(t,e){if(t.snap)return Vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vt(Fe(t.path,n),e))return!0;return!1}function UN(t){t.visibleWrites=Q_(t.allWrites,zN,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zN(t){return t.visible}function Q_(t,e,n){let s=rn.empty();for(let o=0;o<t.length;++o){const l=t[o];if(e(l)){const u=l.path;let h;if(l.snap)Vt(n,u)?(h=ft(n,u),s=no(s,h,l.snap)):Vt(u,n)&&(h=ft(u,n),s=no(s,me(),l.snap.getChild(h)));else if(l.children){if(Vt(n,u))h=ft(n,u),s=Hd(s,h,l.children);else if(Vt(u,n))if(h=ft(u,n),oe(h))s=Hd(s,me(),l.children);else{const f=zi(l.children,le(h));if(f){const g=f.getChild(Ie(h));s=no(s,me(),g)}}}else throw Yi("WriteRecord should have .snap or .children")}}return s}function J_(t,e,n,s,o){if(!s&&!o){const l=ii(t.visibleWrites,e);if(l!=null)return l;{const u=yr(t.visibleWrites,e);if(Gd(u))return n;if(n==null&&!$d(u,me()))return null;{const h=n||ee.EMPTY_NODE;return $i(u,h)}}}else{const l=yr(t.visibleWrites,e);if(!o&&Gd(l))return n;if(!o&&n==null&&!$d(l,me()))return null;{const u=function(g){return(g.visible||o)&&(!s||!~s.indexOf(g.writeId))&&(Vt(g.path,e)||Vt(e,g.path))},h=Q_(t.allWrites,u,e),f=n||ee.EMPTY_NODE;return $i(h,f)}}}function BN(t,e,n){let s=ee.EMPTY_NODE;const o=ii(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ue,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(n){const l=yr(t.visibleWrites,e);return n.forEachChild(Ue,(u,h)=>{const f=$i(yr(l,new _e(u)),h);s=s.updateImmediateChild(u,f)}),wv(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=yr(t.visibleWrites,e);return wv(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function WN(t,e,n,s,o){z(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=Fe(e,n);if($d(t.visibleWrites,l))return null;{const u=yr(t.visibleWrites,l);return Gd(u)?o.getChild(n):$i(u,o.getChild(n))}}function VN(t,e,n,s){const o=Fe(e,n),l=ii(t.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(n)){const u=yr(t.visibleWrites,o);return $i(u,s.getNode().getImmediateChild(n))}else return null}function HN(t,e){return ii(t.visibleWrites,e)}function $N(t,e,n,s,o,l,u){let h;const f=yr(t.visibleWrites,e),g=ii(f,me());if(g!=null)h=g;else if(n!=null)h=$i(f,n);else return[];if(h=h.withIndex(u),!h.isEmpty()&&!h.isLeafNode()){const _=[],y=u.getCompare(),w=l?h.getReverseIteratorFrom(s,u):h.getIteratorFrom(s,u);let I=w.getNext();for(;I&&_.length<o;)y(I,s)!==0&&_.push(I),I=w.getNext();return _}else return[]}function GN(){return{visibleWrites:rn.empty(),allWrites:[],lastWriteId:-1}}function Tl(t,e,n,s){return J_(t.writeTree,t.treePath,e,n,s)}function Ah(t,e){return BN(t.writeTree,t.treePath,e)}function Ev(t,e,n,s){return WN(t.writeTree,t.treePath,e,n,s)}function Nl(t,e){return HN(t.writeTree,Fe(t.treePath,e))}function KN(t,e,n,s,o,l){return $N(t.writeTree,t.treePath,e,n,s,o,l)}function bh(t,e,n){return VN(t.writeTree,t.treePath,e,n)}function X_(t,e){return Z_(Fe(t.treePath,e),t.writeTree)}function Z_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(s,po(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(s,fo(s,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(s,Vi(s,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(s,po(s,e.snapshotNode,o.oldSnap));else throw Yi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class YN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const e0=new YN;class Oh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yr(this.viewCache_),l=KN(this.writes_,o,n,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function QN(t){return{filter:t}}function JN(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XN(t,e,n,s,o){const l=new qN;let u,h;if(n.type===nn.OVERWRITE){const g=n;g.source.fromUser?u=Kd(t,e,g.path,g.snap,s,o,l):(z(g.source.fromServer,"Unknown source."),h=g.source.tagged||e.serverCache.isFiltered()&&!oe(g.path),u=Pl(t,e,g.path,g.snap,s,o,h,l))}else if(n.type===nn.MERGE){const g=n;g.source.fromUser?u=eP(t,e,g.path,g.children,s,o,l):(z(g.source.fromServer,"Unknown source."),h=g.source.tagged||e.serverCache.isFiltered(),u=qd(t,e,g.path,g.children,s,o,h,l))}else if(n.type===nn.ACK_USER_WRITE){const g=n;g.revert?u=rP(t,e,g.path,s,o,l):u=tP(t,e,g.path,g.affectedTree,s,o,l)}else if(n.type===nn.LISTEN_COMPLETE)u=nP(t,e,n.path,s,l);else throw Yi("Unknown operation type: "+n.type);const f=l.getChanges();return ZN(e,u,f),{viewCache:u,changes:f}}function ZN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=kl(t);(n.length>0||!t.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&n.push(G_(kl(e)))}}function t0(t,e,n,s,o,l){const u=e.eventCache;if(Nl(s,n)!=null)return e;{let h,f;if(oe(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Yr(e),_=g instanceof ee?g:ee.EMPTY_NODE,y=Ah(s,_);h=t.filter.updateFullNode(e.eventCache.getNode(),y,l)}else{const g=Tl(s,Yr(e));h=t.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=le(n);if(g===".priority"){z(Er(n)===1,"Can't have a priority with additional path components");const _=u.getNode();f=e.serverCache.getNode();const y=Ev(s,n,_,f);y!=null?h=t.filter.updatePriority(_,y):h=u.getNode()}else{const _=Ie(n);let y;if(u.isCompleteForChild(g)){f=e.serverCache.getNode();const w=Ev(s,n,u.getNode(),f);w!=null?y=u.getNode().getImmediateChild(g).updateChild(_,w):y=u.getNode().getImmediateChild(g)}else y=bh(s,g,e.serverCache);y!=null?h=t.filter.updateChild(u.getNode(),g,y,_,o,l):h=u.getNode()}}return to(e,h,u.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Pl(t,e,n,s,o,l,u,h){const f=e.serverCache;let g;const _=u?t.filter:t.filter.getIndexedFilter();if(oe(n))g=_.updateFullNode(f.getNode(),s,null);else if(_.filtersNodes()&&!f.isFiltered()){const I=f.getNode().updateChild(n,s);g=_.updateFullNode(f.getNode(),I,null)}else{const I=le(n);if(!f.isCompleteForPath(n)&&Er(n)>1)return e;const R=Ie(n),O=f.getNode().getImmediateChild(I).updateChild(R,s);I===".priority"?g=_.updatePriority(f.getNode(),O):g=_.updateChild(f.getNode(),I,O,R,e0,null)}const y=q_(e,g,f.isFullyInitialized()||oe(n),_.filtersNodes()),w=new Oh(o,y,l);return t0(t,y,n,o,w,h)}function Kd(t,e,n,s,o,l,u){const h=e.eventCache;let f,g;const _=new Oh(o,e,l);if(oe(n))g=t.filter.updateFullNode(e.eventCache.getNode(),s,u),f=to(e,g,!0,t.filter.filtersNodes());else{const y=le(n);if(y===".priority")g=t.filter.updatePriority(e.eventCache.getNode(),s),f=to(e,g,h.isFullyInitialized(),h.isFiltered());else{const w=Ie(n),I=h.getNode().getImmediateChild(y);let R;if(oe(w))R=s;else{const b=_.getCompleteChild(y);b!=null?Sh(w)===".priority"&&b.getChild(F_(w)).isEmpty()?R=b:R=b.updateChild(w,s):R=ee.EMPTY_NODE}if(I.equals(R))f=e;else{const b=t.filter.updateChild(h.getNode(),y,R,w,_,u);f=to(e,b,h.isFullyInitialized(),t.filter.filtersNodes())}}}return f}function Cv(t,e){return t.eventCache.isCompleteForChild(e)}function eP(t,e,n,s,o,l,u){let h=e;return s.foreach((f,g)=>{const _=Fe(n,f);Cv(e,le(_))&&(h=Kd(t,h,_,g,o,l,u))}),s.foreach((f,g)=>{const _=Fe(n,f);Cv(e,le(_))||(h=Kd(t,h,_,g,o,l,u))}),h}function Sv(t,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function qd(t,e,n,s,o,l,u,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,g;oe(n)?g=s:g=new Se(null).setTree(n,s);const _=e.serverCache.getNode();return g.children.inorderTraversal((y,w)=>{if(_.hasChild(y)){const I=e.serverCache.getNode().getImmediateChild(y),R=Sv(t,I,w);f=Pl(t,f,new _e(y),R,o,l,u,h)}}),g.children.inorderTraversal((y,w)=>{const I=!e.serverCache.isCompleteForChild(y)&&w.value===null;if(!_.hasChild(y)&&!I){const R=e.serverCache.getNode().getImmediateChild(y),b=Sv(t,R,w);f=Pl(t,f,new _e(y),b,o,l,u,h)}}),f}function tP(t,e,n,s,o,l,u){if(Nl(o,n)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(s.value!=null){if(oe(n)&&f.isFullyInitialized()||f.isCompleteForPath(n))return Pl(t,e,n,f.getNode().getChild(n),o,l,h,u);if(oe(n)){let g=new Se(null);return f.getNode().forEachChild(Fi,(_,y)=>{g=g.set(new _e(_),y)}),qd(t,e,n,g,o,l,h,u)}else return e}else{let g=new Se(null);return s.foreach((_,y)=>{const w=Fe(n,_);f.isCompleteForPath(w)&&(g=g.set(_,f.getNode().getChild(w)))}),qd(t,e,n,g,o,l,h,u)}}function nP(t,e,n,s,o){const l=e.serverCache,u=q_(e,l.getNode(),l.isFullyInitialized()||oe(n),l.isFiltered());return t0(t,u,n,s,e0,o)}function rP(t,e,n,s,o,l){let u;if(Nl(s,n)!=null)return e;{const h=new Oh(s,e,o),f=e.eventCache.getNode();let g;if(oe(n)||le(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Tl(s,Yr(e));else{const y=e.serverCache.getNode();z(y instanceof ee,"serverChildren would be complete if leaf node"),_=Ah(s,y)}_=_,g=t.filter.updateFullNode(f,_,l)}else{const _=le(n);let y=bh(s,_,e.serverCache);y==null&&e.serverCache.isCompleteForChild(_)&&(y=f.getImmediateChild(_)),y!=null?g=t.filter.updateChild(f,_,y,Ie(n),h,l):e.eventCache.getNode().hasChild(_)?g=t.filter.updateChild(f,_,ee.EMPTY_NODE,Ie(n),h,l):g=f,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Tl(s,Yr(e)),u.isLeafNode()&&(g=t.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||Nl(s,me())!=null,to(e,g,u,t.filter.filtersNodes())}}/**
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
 */class iP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new kh(s.getIndex()),l=CN(s);this.processor_=QN(l);const u=n.serverCache,h=n.eventCache,f=o.updateFullNode(ee.EMPTY_NODE,u.getNode(),null),g=l.updateFullNode(ee.EMPTY_NODE,h.getNode(),null),_=new Cr(f,u.isFullyInitialized(),o.filtersNodes()),y=new Cr(g,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Yl(y,_),this.eventGenerator_=new PN(this.query_)}get query(){return this.query_}}function sP(t){return t.viewCache_.serverCache.getNode()}function oP(t){return kl(t.viewCache_)}function aP(t,e){const n=Yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Iv(t){return t.eventRegistrations_.length===0}function lP(t,e){t.eventRegistrations_.push(e)}function xv(t,e,n){const s=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const o=t.query._path;t.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&s.push(u)})}if(e){let o=[];for(let l=0;l<t.eventRegistrations_.length;++l){const u=t.eventRegistrations_[l];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(l+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return s}function kv(t,e,n,s){e.type===nn.MERGE&&e.source.queryId!==null&&(z(Yr(t.viewCache_),"We should always have a full cache before handling merges"),z(kl(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,l=XN(t.processor_,o,e,n,s);return JN(t.processor_,l.viewCache),z(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,n0(t,l.changes,l.viewCache.eventCache.getNode(),null)}function cP(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ue,(l,u)=>{s.push(Vi(l,u))}),n.isFullyInitialized()&&s.push(G_(n.getNode())),n0(t,s,n.getNode(),e)}function n0(t,e,n,s){const o=s?[s]:t.eventRegistrations_;return RN(t.eventGenerator_,e,n,o)}/**
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
 */let Rl;class r0{constructor(){this.views=new Map}}function uP(t){z(!Rl,"__referenceConstructor has already been defined"),Rl=t}function dP(){return z(Rl,"Reference.ts has not been loaded"),Rl}function hP(t){return t.views.size===0}function Lh(t,e,n,s){const o=e.source.queryId;if(o!==null){const l=t.views.get(o);return z(l!=null,"SyncTree gave us an op for an invalid query."),kv(l,e,n,s)}else{let l=[];for(const u of t.views.values())l=l.concat(kv(u,e,n,s));return l}}function i0(t,e,n,s,o){const l=e._queryIdentifier,u=t.views.get(l);if(!u){let h=Tl(n,o?s:null),f=!1;h?f=!0:s instanceof ee?(h=Ah(n,s),f=!1):(h=ee.EMPTY_NODE,f=!1);const g=Yl(new Cr(h,f,!1),new Cr(s,o,!1));return new iP(e,g)}return u}function fP(t,e,n,s,o,l){const u=i0(t,e,s,o,l);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,u),lP(u,n),cP(u,n)}function pP(t,e,n,s){const o=e._queryIdentifier,l=[];let u=[];const h=Sr(t);if(o==="default")for(const[f,g]of t.views.entries())u=u.concat(xv(g,n,s)),Iv(g)&&(t.views.delete(f),g.query._queryParams.loadsAllData()||l.push(g.query));else{const f=t.views.get(o);f&&(u=u.concat(xv(f,n,s)),Iv(f)&&(t.views.delete(o),f.query._queryParams.loadsAllData()||l.push(f.query)))}return h&&!Sr(t)&&l.push(new(dP())(e._repo,e._path)),{removed:l,events:u}}function s0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _r(t,e){let n=null;for(const s of t.views.values())n=n||aP(s,e);return n}function o0(t,e){if(e._queryParams.loadsAllData())return Jl(t);{const s=e._queryIdentifier;return t.views.get(s)}}function a0(t,e){return o0(t,e)!=null}function Sr(t){return Jl(t)!=null}function Jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Al;function mP(t){z(!Al,"__referenceConstructor has already been defined"),Al=t}function gP(){return z(Al,"Reference.ts has not been loaded"),Al}let vP=1;class Tv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=GN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function l0(t,e,n,s,o){return LN(t.pendingWriteTree_,e,n,s,o),o?ts(t,new qr(Nh(),e,n)):[]}function yP(t,e,n,s){jN(t.pendingWriteTree_,e,n,s);const o=Se.fromObject(n);return ts(t,new Hi(Nh(),e,o))}function pr(t,e,n=!1){const s=DN(t.pendingWriteTree_,e);if(MN(t.pendingWriteTree_,e)){let l=new Se(null);return s.snap!=null?l=l.set(me(),!0):st(s.children,u=>{l=l.set(new _e(u),!0)}),ts(t,new xl(s.path,l,n))}else return[]}function Ao(t,e,n){return ts(t,new qr(Ph(),e,n))}function _P(t,e,n){const s=Se.fromObject(n);return ts(t,new Hi(Ph(),e,s))}function wP(t,e){return ts(t,new go(Ph(),e))}function EP(t,e,n){const s=Dh(t,n);if(s){const o=Mh(s),l=o.path,u=o.queryId,h=ft(l,e),f=new go(Rh(u),h);return Fh(t,l,f)}else return[]}function c0(t,e,n,s,o=!1){const l=e._path,u=t.syncPointTree_.get(l);let h=[];if(u&&(e._queryIdentifier==="default"||a0(u,e))){const f=pP(u,e,n,s);hP(u)&&(t.syncPointTree_=t.syncPointTree_.remove(l));const g=f.removed;if(h=f.events,!o){const _=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,y=t.syncPointTree_.findOnPath(l,(w,I)=>Sr(I));if(_&&!y){const w=t.syncPointTree_.subtree(l);if(!w.isEmpty()){const I=xP(w);for(let R=0;R<I.length;++R){const b=I[R],O=b.query,F=f0(t,b);t.listenProvider_.startListening(ro(O),vo(t,O),F.hashFn,F.onComplete)}}}!y&&g.length>0&&!s&&(_?t.listenProvider_.stopListening(ro(e),null):g.forEach(w=>{const I=t.queryToTagMap.get(Xl(w));t.listenProvider_.stopListening(ro(w),I)}))}kP(t,g)}return h}function u0(t,e,n,s){const o=Dh(t,s);if(o!=null){const l=Mh(o),u=l.path,h=l.queryId,f=ft(u,e),g=new qr(Rh(h),f,n);return Fh(t,u,g)}else return[]}function CP(t,e,n,s){const o=Dh(t,s);if(o){const l=Mh(o),u=l.path,h=l.queryId,f=ft(u,e),g=Se.fromObject(n),_=new Hi(Rh(h),f,g);return Fh(t,u,_)}else return[]}function SP(t,e,n,s=!1){const o=e._path;let l=null,u=!1;t.syncPointTree_.foreachOnPath(o,(w,I)=>{const R=ft(w,o);l=l||_r(I,R),u=u||Sr(I)});let h=t.syncPointTree_.get(o);h?(u=u||Sr(h),l=l||_r(h,me())):(h=new r0,t.syncPointTree_=t.syncPointTree_.set(o,h));let f;l!=null?f=!0:(f=!1,l=ee.EMPTY_NODE,t.syncPointTree_.subtree(o).foreachChild((I,R)=>{const b=_r(R,me());b&&(l=l.updateImmediateChild(I,b))}));const g=a0(h,e);if(!g&&!e._queryParams.loadsAllData()){const w=Xl(e);z(!t.queryToTagMap.has(w),"View does not exist, but we have a tag");const I=TP();t.queryToTagMap.set(w,I),t.tagToQueryMap.set(I,w)}const _=Ql(t.pendingWriteTree_,o);let y=fP(h,e,n,_,l,f);if(!g&&!u&&!s){const w=o0(h,e);y=y.concat(NP(t,e,w))}return y}function jh(t,e,n){const o=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(u,h)=>{const f=ft(u,e),g=_r(h,f);if(g)return g});return J_(o,e,l,n,!0)}function IP(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(g,_)=>{const y=ft(g,n);s=s||_r(_,y)});let o=t.syncPointTree_.get(n);o?s=s||_r(o,me()):(o=new r0,t.syncPointTree_=t.syncPointTree_.set(n,o));const l=s!=null,u=l?new Cr(s,!0,!1):null,h=Ql(t.pendingWriteTree_,e._path),f=i0(o,e,h,l?u.getNode():ee.EMPTY_NODE,l);return oP(f)}function ts(t,e){return d0(e,t.syncPointTree_,null,Ql(t.pendingWriteTree_,me()))}function d0(t,e,n,s){if(oe(t.path))return h0(t,e,n,s);{const o=e.get(me());n==null&&o!=null&&(n=_r(o,me()));let l=[];const u=le(t.path),h=t.operationForChild(u),f=e.children.get(u);if(f&&h){const g=n?n.getImmediateChild(u):null,_=X_(s,u);l=l.concat(d0(h,f,g,_))}return o&&(l=l.concat(Lh(o,t,s,n))),l}}function h0(t,e,n,s){const o=e.get(me());n==null&&o!=null&&(n=_r(o,me()));let l=[];return e.children.inorderTraversal((u,h)=>{const f=n?n.getImmediateChild(u):null,g=X_(s,u),_=t.operationForChild(u);_&&(l=l.concat(h0(_,h,f,g)))}),o&&(l=l.concat(Lh(o,t,s,n))),l}function f0(t,e){const n=e.query,s=vo(t,n);return{hashFn:()=>(sP(e)||ee.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?EP(t,n._path,s):wP(t,n._path);{const l=wT(o,n);return c0(t,n,null,l)}}}}function vo(t,e){const n=Xl(e);return t.queryToTagMap.get(n)}function Xl(t){return t._path.toString()+"$"+t._queryIdentifier}function Dh(t,e){return t.tagToQueryMap.get(e)}function Mh(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Fh(t,e,n){const s=t.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const o=Ql(t.pendingWriteTree_,e);return Lh(s,n,o,null)}function xP(t){return t.fold((e,n,s)=>{if(n&&Sr(n))return[Jl(n)];{let o=[];return n&&(o=s0(n)),st(s,(l,u)=>{o=o.concat(u)}),o}})}function ro(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(gP())(t._repo,t._path):t}function kP(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const o=Xl(s),l=t.queryToTagMap.get(o);t.queryToTagMap.delete(o),t.tagToQueryMap.delete(l)}}}function TP(){return vP++}function NP(t,e,n){const s=e._path,o=vo(t,e),l=f0(t,n),u=t.listenProvider_.startListening(ro(e),o,l.hashFn,l.onComplete),h=t.syncPointTree_.subtree(s);if(o)z(!Sr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((g,_,y)=>{if(!oe(g)&&_&&Sr(_))return[Jl(_).query];{let w=[];return _&&(w=w.concat(s0(_).map(I=>I.query))),st(y,(I,R)=>{w=w.concat(R)}),w}});for(let g=0;g<f.length;++g){const _=f[g];t.listenProvider_.stopListening(ro(_),vo(t,_))}}return u}/**
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
 */class Uh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uh(n)}node(){return this.node_}}class zh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Fe(this.path_,e);return new zh(this.syncTree_,n)}node(){return jh(this.syncTree_,this.path_)}}const PP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Nv=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return RP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AP(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},RP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},AP=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const o=e.node();if(z(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const u=o.getValue();return typeof u!="number"?s:u+s},p0=function(t,e,n,s){return Bh(e,new zh(n,t),s)},m0=function(t,e,n){return Bh(t,new Uh(e),n)};function Bh(t,e,n){const s=t.getPriority().val(),o=Nv(s,e.getImmediateChild(".priority"),n);let l;if(t.isLeafNode()){const u=t,h=Nv(u.getValue(),e,n);return h!==u.getValue()||o!==u.getPriority().val()?new Xe(h,Ge(o)):t}else{const u=t;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Xe(o))),u.forEachChild(Ue,(h,f)=>{const g=Bh(f,e.getImmediateChild(h),n);g!==f&&(l=l.updateImmediateChild(h,g))}),l}}/**
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
 */class Wh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Vh(t,e){let n=e instanceof _e?e:new _e(e),s=t,o=le(n);for(;o!==null;){const l=zi(s.node.children,o)||{children:{},childCount:0};s=new Wh(o,s,l),n=Ie(n),o=le(n)}return s}function ns(t){return t.node.value}function g0(t,e){t.node.value=e,Yd(t)}function v0(t){return t.node.childCount>0}function bP(t){return ns(t)===void 0&&!v0(t)}function Zl(t,e){st(t.node.children,(n,s)=>{e(new Wh(n,t,s))})}function y0(t,e,n,s){n&&e(t),Zl(t,o=>{y0(o,e,!0)})}function OP(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bo(t){return new _e(t.parent===null?t.name:bo(t.parent)+"/"+t.name)}function Yd(t){t.parent!==null&&LP(t.parent,t.name,t)}function LP(t,e,n){const s=bP(n),o=vn(t.node.children,e);s&&o?(delete t.node.children[e],t.node.childCount--,Yd(t)):!s&&!o&&(t.node.children[e]=n.node,t.node.childCount++,Yd(t))}/**
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
 */const jP=/[\[\].#$\/\u0000-\u001F\u007F]/,DP=/[\[\].#$\u0000-\u001F\u007F]/,gd=10*1024*1024,Hh=function(t){return typeof t=="string"&&t.length!==0&&!jP.test(t)},_0=function(t){return typeof t=="string"&&t.length!==0&&!DP.test(t)},MP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_0(t)},FP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yh(t)||t&&typeof t=="object"&&vn(t,".sv")},w0=function(t,e,n,s){s&&e===void 0||ec(Wl(t,"value"),e,n)},ec=function(t,e,n){const s=n instanceof _e?new eN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Br(s));if(typeof e=="function")throw new Error(t+"contains a function "+Br(s)+" with contents = "+e.toString());if(yh(e))throw new Error(t+"contains "+e.toString()+" "+Br(s));if(typeof e=="string"&&e.length>gd/3&&Vl(e)>gd)throw new Error(t+"contains a string greater than "+gd+" utf8 bytes "+Br(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(st(e,(u,h)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!Hh(u)))throw new Error(t+" contains an invalid key ("+u+") "+Br(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tN(s,u),ec(t,h,s),nN(s)}),o&&l)throw new Error(t+' contains ".value" child '+Br(s)+" in addition to actual children.")}},UP=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const l=ho(s);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!Hh(l[u]))throw new Error(t+"contains an invalid key ("+l[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ZT);let o=null;for(n=0;n<e.length;n++){if(s=e[n],o!==null&&Vt(o,s))throw new Error(t+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},zP=function(t,e,n,s){const o=Wl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];st(e,(u,h)=>{const f=new _e(u);if(ec(o,h,Fe(n,f)),Sh(f)===".priority"&&!FP(h))throw new Error(o+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(f)}),UP(o,l)},E0=function(t,e,n,s){if(!_0(n))throw new Error(Wl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},BP=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),E0(t,e,n)},$h=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},WP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!MP(n))throw new Error(Wl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class VP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gh(t,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();n!==null&&!U_(l,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&t.eventLists_.push(n)}function $t(t,e,n){Gh(t,n),HP(t,s=>Vt(s,e)||Vt(e,s))}function HP(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const o=t.eventLists_[s];if(o){const l=o.path;e(l)?($P(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $P(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zs&&it("event: "+n.toString()),es(s)}}}/**
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
 */const GP="repo_interrupt",KP=25;class qP{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Il(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YP(t,e,n){if(t.stats_=Eh(t.repoInfo_),t.forceRestClient_||IT())t.server_=new Sl(t.repoInfo_,(s,o,l,u)=>{Pv(t,s,o,l,u)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new bn(t.repoInfo_,e,(s,o,l,u)=>{Pv(t,s,o,l,u)},s=>{Rv(t,s)},s=>{QP(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=PT(t.repoInfo_,()=>new NN(t.stats_,t.server_)),t.infoData_=new SN,t.infoSyncTree_=new Tv({startListening:(s,o,l,u)=>{let h=[];const f=t.infoData_.getNode(s._path);return f.isEmpty()||(h=Ao(t.infoSyncTree_,s._path,f),setTimeout(()=>{u("ok")},0)),h},stopListening:()=>{}}),Kh(t,"connected",!1),t.serverSyncTree_=new Tv({startListening:(s,o,l,u)=>(t.server_.listen(s,l,o,(h,f)=>{const g=u(h,f);$t(t.eventQueue_,s._path,g)}),[]),stopListening:(s,o)=>{t.server_.unlisten(s,o)}})}function C0(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tc(t){return PP({timestamp:C0(t)})}function Pv(t,e,n,s,o){t.dataUpdateCount++;const l=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let u=[];if(o)if(s){const f=hl(n,g=>Ge(g));u=CP(t.serverSyncTree_,l,f,o)}else{const f=Ge(n);u=u0(t.serverSyncTree_,l,f,o)}else if(s){const f=hl(n,g=>Ge(g));u=_P(t.serverSyncTree_,l,f)}else{const f=Ge(n);u=Ao(t.serverSyncTree_,l,f)}let h=l;u.length>0&&(h=Gi(t,l)),$t(t.eventQueue_,h,u)}function Rv(t,e){Kh(t,"connected",e),e===!1&&e2(t)}function QP(t,e){st(e,(n,s)=>{Kh(t,n,s)})}function Kh(t,e,n){const s=new _e("/.info/"+e),o=Ge(n);t.infoData_.updateSnapshot(s,o);const l=Ao(t.infoSyncTree_,s,o);$t(t.eventQueue_,s,l)}function qh(t){return t.nextWriteId_++}function JP(t,e,n){const s=IP(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(o=>{const l=Ge(o).withIndex(e._queryParams.getIndex());SP(t.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=Ao(t.serverSyncTree_,e._path,l);else{const h=vo(t.serverSyncTree_,e);u=u0(t.serverSyncTree_,e._path,l,h)}return $t(t.eventQueue_,e._path,u),c0(t.serverSyncTree_,e,n,null,!0),l},o=>(Oo(t,"get for query "+Ke(e)+" failed: "+o),Promise.reject(new Error(o))))}function XP(t,e,n,s,o){Oo(t,"set",{path:e.toString(),value:n,priority:s});const l=tc(t),u=Ge(n,s),h=jh(t.serverSyncTree_,e),f=m0(u,h,l),g=qh(t),_=l0(t.serverSyncTree_,e,f,g,!0);Gh(t.eventQueue_,_),t.server_.put(e.toString(),u.val(!0),(w,I)=>{const R=w==="ok";R||pt("set at "+e+" failed: "+w);const b=pr(t.serverSyncTree_,g,!R);$t(t.eventQueue_,e,b),Qd(t,o,w,I)});const y=Qh(t,e);Gi(t,y),$t(t.eventQueue_,y,[])}function ZP(t,e,n,s){Oo(t,"update",{path:e.toString(),value:n});let o=!0;const l=tc(t),u={};if(st(n,(h,f)=>{o=!1,u[h]=p0(Fe(e,h),Ge(f),t.serverSyncTree_,l)}),o)it("update() called with empty data.  Don't do anything."),Qd(t,s,"ok",void 0);else{const h=qh(t),f=yP(t.serverSyncTree_,e,u,h);Gh(t.eventQueue_,f),t.server_.merge(e.toString(),n,(g,_)=>{const y=g==="ok";y||pt("update at "+e+" failed: "+g);const w=pr(t.serverSyncTree_,h,!y),I=w.length>0?Gi(t,e):e;$t(t.eventQueue_,I,w),Qd(t,s,g,_)}),st(n,g=>{const _=Qh(t,Fe(e,g));Gi(t,_)}),$t(t.eventQueue_,e,[])}}function e2(t){Oo(t,"onDisconnectEvents");const e=tc(t),n=Il();Vd(t.onDisconnect_,me(),(o,l)=>{const u=p0(o,l,t.serverSyncTree_,e);K_(n,o,u)});let s=[];Vd(n,me(),(o,l)=>{s=s.concat(Ao(t.serverSyncTree_,o,l));const u=Qh(t,o);Gi(t,u)}),t.onDisconnect_=Il(),$t(t.eventQueue_,me(),s)}function t2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GP)}function Oo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function Qd(t,e,n,s){e&&es(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let l=o;s&&(l+=": "+s);const u=new Error(l);u.code=o,e(u)}})}function S0(t,e,n){return jh(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function Yh(t,e=t.transactionQueueTree_){if(e||nc(t,e),ns(e)){const n=x0(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&n2(t,bo(e),n)}else v0(e)&&Zl(e,n=>{Yh(t,n)})}function n2(t,e,n){const s=n.map(g=>g.currentWriteId),o=S0(t,e,s);let l=o;const u=o.hash();for(let g=0;g<n.length;g++){const _=n[g];z(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const y=ft(e,_.path);l=l.updateChild(y,_.currentOutputSnapshotRaw)}const h=l.val(!0),f=e;t.server_.put(f.toString(),h,g=>{Oo(t,"transaction put response",{path:f.toString(),status:g});let _=[];if(g==="ok"){const y=[];for(let w=0;w<n.length;w++)n[w].status=2,_=_.concat(pr(t.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&y.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();nc(t,Vh(t.transactionQueueTree_,e)),Yh(t,t.transactionQueueTree_),$t(t.eventQueue_,e,_);for(let w=0;w<y.length;w++)es(y[w])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{pt("transaction at "+f.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}Gi(t,e)}},u)}function Gi(t,e){const n=I0(t,e),s=bo(n),o=x0(t,n);return r2(t,o,s),s}function r2(t,e,n){if(e.length===0)return;const s=[];let o=[];const u=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],g=ft(n,f.path);let _=!1,y;if(z(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)_=!0,y=f.abortReason,o=o.concat(pr(t.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=KP)_=!0,y="maxretry",o=o.concat(pr(t.serverSyncTree_,f.currentWriteId,!0));else{const w=S0(t,f.path,u);f.currentInputSnapshot=w;const I=e[h].update(w.val());if(I!==void 0){ec("transaction failed: Data returned ",I,f.path);let R=Ge(I);typeof I=="object"&&I!=null&&vn(I,".priority")||(R=R.updatePriority(w.getPriority()));const O=f.currentWriteId,F=tc(t),B=m0(R,w,F);f.currentOutputSnapshotRaw=R,f.currentOutputSnapshotResolved=B,f.currentWriteId=qh(t),u.splice(u.indexOf(O),1),o=o.concat(l0(t.serverSyncTree_,f.path,B,f.currentWriteId,f.applyLocally)),o=o.concat(pr(t.serverSyncTree_,O,!0))}else _=!0,y="nodata",o=o.concat(pr(t.serverSyncTree_,f.currentWriteId,!0))}$t(t.eventQueue_,n,o),o=[],_&&(e[h].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(y==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(y),!1,null))))}nc(t,t.transactionQueueTree_);for(let h=0;h<s.length;h++)es(s[h]);Yh(t,t.transactionQueueTree_)}function I0(t,e){let n,s=t.transactionQueueTree_;for(n=le(e);n!==null&&ns(s)===void 0;)s=Vh(s,n),e=Ie(e),n=le(e);return s}function x0(t,e){const n=[];return k0(t,e,n),n.sort((s,o)=>s.order-o.order),n}function k0(t,e,n){const s=ns(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);Zl(e,o=>{k0(t,o,n)})}function nc(t,e){const n=ns(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,g0(e,n.length>0?n:void 0)}Zl(e,s=>{nc(t,s)})}function Qh(t,e){const n=bo(I0(t,e)),s=Vh(t.transactionQueueTree_,e);return OP(s,o=>{vd(t,o)}),vd(t,s),y0(s,o=>{vd(t,o)}),n}function vd(t,e){const n=ns(e);if(n){const s=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(z(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(z(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(pr(t.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?g0(e,void 0):n.length=l+1,$t(t.eventQueue_,bo(e),o);for(let u=0;u<s.length;u++)es(s[u])}}/**
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
 */function i2(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function s2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Av=function(t,e){const n=o2(t),s=n.namespace;n.domain==="firebase.com"&&Dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mT();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new P_(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new _e(n.pathString)}},o2=function(t){let e="",n="",s="",o="",l="",u=!0,h="https",f=443;if(typeof t=="string"){let g=t.indexOf("//");g>=0&&(h=t.substring(0,g-1),t=t.substring(g+2));let _=t.indexOf("/");_===-1&&(_=t.length);let y=t.indexOf("?");y===-1&&(y=t.length),e=t.substring(0,Math.min(_,y)),_<y&&(o=i2(t.substring(_,y)));const w=s2(t.substring(Math.min(t.length,y)));g=e.indexOf(":"),g>=0?(u=h==="https"||h==="wss",f=parseInt(e.substring(g+1),10)):g=e.length;const I=e.slice(0,g);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:f,domain:n,subdomain:s,secure:u,scheme:h,pathString:o,namespace:l}};/**
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
 */const bv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",a2=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=bv.charAt(n%64),n=Math.floor(n/64);z(n===0,"Cannot push at time == 0");let u=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=bv.charAt(e[o]);return z(u.length===20,"nextPushId: Length should be 20."),u}})();/**
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
 */class l2{constructor(e,n,s,o){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class c2{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class u2{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Jh{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return oe(this._path)?null:Sh(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=vv(this._queryParams),n=_h(e);return n==="{}"?"default":n}get _queryObject(){return vv(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof Jh))return!1;const n=this._repo===e._repo,s=U_(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+XT(this._path)}}class Bn extends Jh{constructor(e,n){super(e,n,new Th,!1)}get parent(){const e=F_(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=_o(this.ref,e);return new yo(this._node.getChild(n),s,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new yo(o,_o(this.ref,s),Ue)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function At(t,e){return t=qe(t),t._checkNotDeleted("ref"),e!==void 0?_o(t._root,e):t._root}function _o(t,e){return t=qe(t),le(t._path)===null?BP("child","path",e):E0("child","path",e),new Bn(t._repo,Fe(t._path,e))}function Xh(t,e){t=qe(t),$h("push",t._path),w0("push",e,t._path,!0);const n=C0(t._repo),s=a2(n),o=_o(t,s),l=_o(t,s);let u;return u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function d2(t){return $h("remove",t._path),rs(t,null)}function rs(t,e){t=qe(t),$h("set",t._path),w0("set",e,t._path,!1);const n=new So;return XP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function T0(t,e){zP("update",e,t._path);const n=new So;return ZP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Lo(t){t=qe(t);const e=new u2(()=>{}),n=new Zh(e);return JP(t._repo,t,n).then(s=>new yo(s,new Bn(t._repo,t._path),t._queryParams.getIndex()))}class Zh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new l2("value",this,new yo(e.snapshotNode,new Bn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new c2(this,e,n):null}matches(e){return e instanceof Zh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}uP(Bn);mP(Bn);/**
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
 */const h2="FIREBASE_DATABASE_EMULATOR_HOST",Jd={};let f2=!1;function p2(t,e,n,s){const o=e.lastIndexOf(":"),l=e.substring(0,o),u=Qi(l);t.repoInfo_=new P_(e,u,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function m2(t,e,n,s,o){let l=s||t.options.databaseURL;l===void 0&&(t.options.projectId||Dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let u=Av(l,o),h=u.repoInfo,f;typeof process<"u"&&Zg&&(f=Zg[h2]),f?(l=`http://${f}?ns=${h.namespace}`,u=Av(l,o),h=u.repoInfo):u.repoInfo.secure;const g=new kT(t.name,t.options,e);WP("Invalid Firebase Database URL",u),oe(u.path)||Dn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=v2(h,t,g,new xT(t,n));return new y2(_,t)}function g2(t,e){const n=Jd[e];(!n||n[t.key]!==t)&&Dn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),t2(t),delete n[t.key]}function v2(t,e,n,s){let o=Jd[e.name];o||(o={},Jd[e.name]=o);let l=o[t.toURLString()];return l&&Dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new qP(t,f2,n,s),o[t.toURLString()]=l,l}class y2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(g2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dn("Cannot call "+e+" on a deleted database.")}}function _2(t=lh(),e){const n=ti(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=vS("database");s&&w2(n,...s)}return n}function w2(t,e,n,s={}){t=qe(t),t._checkNotDeleted("useEmulator");const o=`${e}:${n}`,l=t._repoInternal;if(t._instanceStarted){if(o===t._repoInternal.repoInfo_.host&&wr(s,l.repoInfo_.emulatorOptions))return;Dn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new sl(sl.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:yS(s.mockUserToken,t.app.options.projectId);u=new sl(h)}Qi(e)&&(Cy(e),Sy("Database",!0)),p2(l,o,s,u)}/**
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
 */function E2(t){cT(Xi),mn(new sn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return m2(s,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Ht(ev,tv,t),Ht(ev,tv,"esm2017")}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};E2();var C2="firebase",S2="11.10.0";/**
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
 */Ht(C2,S2,"app");const N0="@firebase/installations",ef="0.6.18";/**
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
 */const P0=1e4,R0=`w:${ef}`,A0="FIS_v2",I2="https://firebaseinstallations.googleapis.com/v1",x2=3600*1e3,k2="installations",T2="Installations";/**
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
 */const N2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new ei(k2,T2,N2);function b0(t){return t instanceof gn&&t.code.includes("request-failed")}/**
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
 */function O0({projectId:t}){return`${I2}/projects/${t}/installations`}function L0(t){return{token:t.token,requestStatus:2,expiresIn:R2(t.expiresIn),creationTime:Date.now()}}async function j0(t,e){const s=(await e.json()).error;return Qr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function D0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function P2(t,{refreshToken:e}){const n=D0(t);return n.append("Authorization",A2(e)),n}async function M0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function R2(t){return Number(t.replace("s","000"))}function A2(t){return`${A0} ${t}`}/**
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
 */async function b2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=O0(t),o=D0(t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const u={fid:n,authVersion:A0,appId:t.appId,sdkVersion:R0},h={method:"POST",headers:o,body:JSON.stringify(u)},f=await M0(()=>fetch(s,h));if(f.ok){const g=await f.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:L0(g.authToken)}}else throw await j0("Create Installation",f)}/**
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
 */function F0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function O2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const L2=/^[cdef][\w-]{21}$/,Xd="";function j2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=D2(t);return L2.test(n)?n:Xd}catch{return Xd}}function D2(t){return O2(t).substr(0,22)}/**
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
 */function rc(t){return`${t.appName}!${t.appId}`}/**
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
 */const U0=new Map;function z0(t,e){const n=rc(t);B0(n,e),M2(n,e)}function B0(t,e){const n=U0.get(t);if(n)for(const s of n)s(e)}function M2(t,e){const n=F2();n&&n.postMessage({key:t,fid:e}),U2()}let Hr=null;function F2(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=t=>{B0(t.data.key,t.data.fid)}),Hr}function U2(){U0.size===0&&Hr&&(Hr.close(),Hr=null)}/**
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
 */const z2="firebase-installations-database",B2=1,Jr="firebase-installations-store";let yd=null;function tf(){return yd||(yd=Ay(z2,B2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),yd}async function bl(t,e){const n=rc(t),o=(await tf()).transaction(Jr,"readwrite"),l=o.objectStore(Jr),u=await l.get(n);return await l.put(e,n),await o.done,(!u||u.fid!==e.fid)&&z0(t,e.fid),e}async function W0(t){const e=rc(t),s=(await tf()).transaction(Jr,"readwrite");await s.objectStore(Jr).delete(e),await s.done}async function ic(t,e){const n=rc(t),o=(await tf()).transaction(Jr,"readwrite"),l=o.objectStore(Jr),u=await l.get(n),h=e(u);return h===void 0?await l.delete(n):await l.put(h,n),await o.done,h&&(!u||u.fid!==h.fid)&&z0(t,h.fid),h}/**
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
 */async function nf(t){let e;const n=await ic(t.appConfig,s=>{const o=W2(s),l=V2(t,o);return e=l.registrationPromise,l.installationEntry});return n.fid===Xd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function W2(t){const e=t||{fid:j2(),registrationStatus:0};return V0(e)}function V2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=H2(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$2(t)}:{installationEntry:e}}async function H2(t,e){try{const n=await b2(t,e);return bl(t.appConfig,n)}catch(n){throw b0(n)&&n.customData.serverCode===409?await W0(t.appConfig):await bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $2(t){let e=await Ov(t.appConfig);for(;e.registrationStatus===1;)await F0(100),e=await Ov(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await nf(t);return s||n}return e}function Ov(t){return ic(t,e=>{if(!e)throw Qr.create("installation-not-found");return V0(e)})}function V0(t){return G2(t)?{fid:t.fid,registrationStatus:0}:t}function G2(t){return t.registrationStatus===1&&t.registrationTime+P0<Date.now()}/**
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
 */async function K2({appConfig:t,heartbeatServiceProvider:e},n){const s=q2(t,n),o=P2(t,n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const u={installation:{sdkVersion:R0,appId:t.appId}},h={method:"POST",headers:o,body:JSON.stringify(u)},f=await M0(()=>fetch(s,h));if(f.ok){const g=await f.json();return L0(g)}else throw await j0("Generate Auth Token",f)}function q2(t,{fid:e}){return`${O0(t)}/${e}/authTokens:generate`}/**
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
 */async function rf(t,e=!1){let n;const s=await ic(t.appConfig,l=>{if(!H0(l))throw Qr.create("not-registered");const u=l.authToken;if(!e&&J2(u))return l;if(u.requestStatus===1)return n=Y2(t,e),l;{if(!navigator.onLine)throw Qr.create("app-offline");const h=Z2(l);return n=Q2(t,h),h}});return n?await n:s.authToken}async function Y2(t,e){let n=await Lv(t.appConfig);for(;n.authToken.requestStatus===1;)await F0(100),n=await Lv(t.appConfig);const s=n.authToken;return s.requestStatus===0?rf(t,e):s}function Lv(t){return ic(t,e=>{if(!H0(e))throw Qr.create("not-registered");const n=e.authToken;return eR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Q2(t,e){try{const n=await K2(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await bl(t.appConfig,s),n}catch(n){if(b0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await W0(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bl(t.appConfig,s)}throw n}}function H0(t){return t!==void 0&&t.registrationStatus===2}function J2(t){return t.requestStatus===2&&!X2(t)}function X2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x2}function Z2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function eR(t){return t.requestStatus===1&&t.requestTime+P0<Date.now()}/**
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
 */async function tR(t){const e=t,{installationEntry:n,registrationPromise:s}=await nf(e);return s?s.catch(console.error):rf(e).catch(console.error),n.fid}/**
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
 */async function nR(t,e=!1){const n=t;return await rR(n),(await rf(n,e)).token}async function rR(t){const{registrationPromise:e}=await nf(t);e&&await e}/**
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
 */function iR(t){if(!t||!t.options)throw _d("App Configuration");if(!t.name)throw _d("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _d(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _d(t){return Qr.create("missing-app-config-values",{valueName:t})}/**
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
 */const $0="installations",sR="installations-internal",oR=t=>{const e=t.getProvider("app").getImmediate(),n=iR(e),s=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},aR=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,$0).getImmediate();return{getId:()=>tR(n),getToken:o=>nR(n,o)}};function lR(){mn(new sn($0,oR,"PUBLIC")),mn(new sn(sR,aR,"PRIVATE"))}lR();Ht(N0,ef);Ht(N0,ef,"esm2017");/**
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
 */const Ol="analytics",cR="firebase_id",uR="origin",dR=60*1e3,hR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sf="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new Hl("@firebase/analytics");/**
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
 */const fR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new ei("analytics","Analytics",fR);/**
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
 */function pR(t){if(!t.startsWith(sf)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function G0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function gR(t,e){const n=mR("firebase-js-sdk-policy",{createScriptURL:pR}),s=document.createElement("script"),o=`${sf}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function vR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yR(t,e,n,s,o,l){const u=s[o];try{if(u)await e[u];else{const f=(await G0(n)).find(g=>g.measurementId===o);f&&await e[f.appId]}}catch(h){St.error(h)}t("config",o,l)}async function _R(t,e,n,s,o){try{let l=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const h=await G0(n);for(const f of u){const g=h.find(y=>y.measurementId===f),_=g&&e[g.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),t("event",s,o||{})}catch(l){St.error(l)}}function wR(t,e,n,s){async function o(l,...u){try{if(l==="event"){const[h,f]=u;await _R(t,e,n,h,f)}else if(l==="config"){const[h,f]=u;await yR(t,e,n,s,h,f)}else if(l==="consent"){const[h,f]=u;t("consent",h,f)}else if(l==="get"){const[h,f,g]=u;t("get",h,f,g)}else if(l==="set"){const[h]=u;t("set",h)}else t(l,...u)}catch(h){St.error(h)}}return o}function ER(t,e,n,s,o){let l=function(...u){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=wR(l,t,e,n),{gtagCore:l,wrappedGtag:window[o]}}function CR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(sf)&&n.src.includes(t))return n;return null}/**
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
 */const SR=30,IR=1e3;class xR{constructor(e={},n=IR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const K0=new xR;function kR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function TR(t){var e;const{appId:n,apiKey:s}=t,o={method:"GET",headers:kR(s)},l=hR.replace("{app-id}",n),u=await fetch(l,o);if(u.status!==200&&u.status!==304){let h="";try{const f=await u.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function NR(t,e=K0,n){const{appId:s,apiKey:o,measurementId:l}=t.options;if(!s)throw Rt.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Rt.create("no-api-key")}const u=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new AR;return setTimeout(async()=>{h.abort()},dR),q0({appId:s,apiKey:o,measurementId:l},u,h,e)}async function q0(t,{throttleEndTimeMillis:e,backoffCount:n},s,o=K0){var l;const{appId:u,measurementId:h}=t;try{await PR(s,e)}catch(f){if(h)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:u,measurementId:h};throw f}try{const f=await TR(t);return o.deleteThrottleMetadata(u),f}catch(f){const g=f;if(!RR(g)){if(o.deleteThrottleMetadata(u),h)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:h};throw f}const _=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?xg(n,o.intervalMillis,SR):xg(n,o.intervalMillis),y={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return o.setThrottleMetadata(u,y),St.debug(`Calling attemptFetch again in ${_} millis`),q0(t,y,s,o)}}function PR(t,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(n,o);t.addEventListener(()=>{clearTimeout(l),s(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function RR(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class AR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bR(t,e,n,s,o){if(o&&o.global){t("event",n,s);return}else{const l=await e,u=Object.assign(Object.assign({},s),{send_to:l});t("event",n,u)}}/**
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
 */async function OR(){if(ky())try{await Ty()}catch(t){return St.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LR(t,e,n,s,o,l,u){var h;const f=NR(t);f.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>St.error(I)),e.push(f);const g=OR().then(I=>{if(I)return s.getId()}),[_,y]=await Promise.all([f,g]);CR(l)||gR(l,_.measurementId),o("js",new Date);const w=(h=u==null?void 0:u.config)!==null&&h!==void 0?h:{};return w[uR]="firebase",w.update=!0,y!=null&&(w[cR]=y),o("config",_.measurementId,w),_.measurementId}/**
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
 */class jR{constructor(e){this.app=e}_delete(){return delete io[this.app.options.appId],Promise.resolve()}}let io={},jv=[];const Dv={};let wd="dataLayer",DR="gtag",Mv,Y0,Fv=!1;function MR(){const t=[];if(Iy()&&t.push("This is a browser extension environment."),IS()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function FR(t,e,n){MR();const s=t.options.appId;if(!s)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(io[s]!=null)throw Rt.create("already-exists",{id:s});if(!Fv){vR(wd);const{wrappedGtag:l,gtagCore:u}=ER(io,jv,Dv,wd,DR);Y0=l,Mv=u,Fv=!0}return io[s]=LR(t,jv,Dv,e,Mv,wd,n),new jR(t)}function UR(t=lh()){t=qe(t);const e=ti(t,Ol);return e.isInitialized()?e.getImmediate():zR(t)}function zR(t,e={}){const n=ti(t,Ol);if(n.isInitialized()){const o=n.getImmediate();if(wr(e,n.getOptions()))return o;throw Rt.create("already-initialized")}return n.initialize({options:e})}function BR(t,e,n,s){t=qe(t),bR(Y0,io[t.app.options.appId],e,n,s).catch(o=>St.error(o))}const Uv="@firebase/analytics",zv="0.10.17";function WR(){mn(new sn(Ol,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return FR(s,o,n)},"PUBLIC")),mn(new sn("analytics-internal",t,"PRIVATE")),Ht(Uv,zv),Ht(Uv,zv,"esm2017");function t(e){try{const n=e.getProvider(Ol).getImmediate();return{logEvent:(s,o,l)=>BR(n,s,o,l)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}WR();const VR={apiKey:"AIzaSyBlK_r-ieeCoVyYceCh1lyc8cgUcIM18a4",authDomain:"kgsjewel-98b89.firebaseapp.com",databaseURL:"https://kgsjewel-98b89-default-rtdb.firebaseio.com",projectId:"kgsjewel-98b89",storageBucket:"kgsjewel-98b89.firebasestorage.app",messagingSenderId:"740786421316",appId:"1:740786421316:web:928a95c1b2dc7bb79ac611",measurementId:"G-X3B2JLV6ZG"},of=by(VR),bt=_2(of),Za=aT(of);typeof window<"u"&&UR(of);const Q0=k.createContext();function kr(){return k.useContext(Q0)}function HR({children:t}){const[e,n]=k.useState(null),[s,o]=k.useState("user"),[l,u]=k.useState(!0);async function h(w,I,R){const b=await Vx(Za,w,I);return await Gx(b.user,{displayName:R}),await rs(At(bt,`users/${b.user.uid}`),{email:w,displayName:R,role:"user",createdAt:Date.now()}),b.user}async function f(w,I){return(await Hx(Za,w,I)).user}async function g(){return Qx(Za)}async function _(w){try{const I=At(bt,`users/${w}/role`),R=await Lo(I);return R.exists()?R.val():"user"}catch{return"user"}}k.useEffect(()=>Yx(Za,async I=>{if(n(I),I){const R=await _(I.uid);o(R)}else o("user");u(!1)}),[]);const y={currentUser:e,userRole:s,isAdmin:s==="admin",loading:l,register:h,login:f,logout:g};return p.jsx(Q0.Provider,{value:y,children:!l&&t})}const J0=k.createContext();function jo(){return k.useContext(J0)}function $R({children:t}){const[e,n]=k.useState(()=>{const _=localStorage.getItem("kgs_cart");return _?JSON.parse(_):[]});k.useEffect(()=>{localStorage.setItem("kgs_cart",JSON.stringify(e))},[e]);function s(_,y){n(w=>w.find(R=>R.id===_.id)?w.map(R=>R.id===_.id?{...R,quantity:R.quantity+1}:R):[...w,{..._,calculatedPrice:y,quantity:1}])}function o(_){n(y=>y.filter(w=>w.id!==_))}function l(_,y){if(y<=0){o(_);return}n(w=>w.map(I=>I.id===_?{...I,quantity:y}:I))}function u(){n([])}const h=e.reduce((_,y)=>_+y.calculatedPrice*y.quantity,0),f=e.reduce((_,y)=>_+y.quantity,0),g={cartItems:e,addToCart:s,removeFromCart:o,updateQuantity:l,clearCart:u,totalPrice:h,totalItems:f};return p.jsx(J0.Provider,{value:g,children:t})}function Bv({children:t}){const{currentUser:e}=kr();return e?t:p.jsx(Id,{to:"/login",replace:!0})}function GR({children:t}){const{currentUser:e,isAdmin:n}=kr();return e?n?t:p.jsx(Id,{to:"/",replace:!0}):p.jsx(Id,{to:"/login",replace:!0})}var X0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wv=Rn.createContext&&Rn.createContext(X0),KR=["attr","size","title"];function qR(t,e){if(t==null)return{};var n=YR(t,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function YR(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function Ll(){return Ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ll.apply(this,arguments)}function Vv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,s)}return n}function jl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vv(Object(n),!0).forEach(function(s){QR(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vv(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function QR(t,e,n){return e=JR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JR(t){var e=XR(t,"string");return typeof e=="symbol"?e:e+""}function XR(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Z0(t){return t&&t.map((e,n)=>Rn.createElement(e.tag,jl({key:n},e.attr),Z0(e.child)))}function Ae(t){return e=>Rn.createElement(ZR,Ll({attr:jl({},t.attr)},e),Z0(t.child))}function ZR(t){var e=n=>{var{attr:s,size:o,title:l}=t,u=qR(t,KR),h=o||n.size||"1em",f;return n.className&&(f=n.className),t.className&&(f=(f?f+" ":"")+t.className),Rn.createElement("svg",Ll({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,u,{className:f,style:jl(jl({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&Rn.createElement("title",null,l),t.children)};return Wv!==void 0?Rn.createElement(Wv.Consumer,null,n=>e(n)):e(X0)}function eA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(t)}function ol(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function tA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(t)}function nA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(t)}function Hv(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function rA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function iA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function sA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function oA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function wo(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(t)}function aA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(t)}function ew(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function $v(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"},child:[]},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"},child:[]},{tag:"polyline",attr:{points:"7 3 7 8 15 8"},child:[]}]})(t)}function lA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function Gv(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(t)}function Dl(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(t)}function tw(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(t)}function cA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(t)}function uA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function dA(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function hA(){const{currentUser:t,isAdmin:e,logout:n}=kr(),{totalItems:s}=jo(),o=Zr(),[l,u]=k.useState(!1),[h,f]=k.useState(!1),[g,_]=k.useState(!1),y=k.useRef(null);k.useEffect(()=>{const I=()=>u(window.scrollY>20);return window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)},[]),k.useEffect(()=>{const I=R=>{y.current&&!y.current.contains(R.target)&&_(!1)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]);const w=async()=>{await n(),_(!1),f(!1),o("/")};return p.jsxs(p.Fragment,{children:[p.jsx("nav",{className:`navbar ${l?"scrolled":""}`,children:p.jsxs("div",{className:"navbar-inner",children:[p.jsxs(ae,{to:"/",className:"navbar-brand",children:[p.jsx("div",{className:"logo-icon",children:"KGS"}),p.jsxs("div",{className:"brand-text",children:["K G S ",p.jsx("span",{children:"Jewelry"})]})]}),p.jsxs("div",{className:"navbar-links",children:[p.jsx(qa,{to:"/",children:"Home"}),p.jsx(qa,{to:"/products",children:"Collection"}),p.jsx(qa,{to:"/sell-gold",children:"Sell Gold"}),e&&p.jsx(qa,{to:"/admin",children:"Admin"})]}),p.jsxs("div",{className:"navbar-actions",children:[p.jsxs(ae,{to:"/cart",className:"icon-btn desktop-only",title:"Cart",children:[p.jsx(Dl,{}),s>0&&p.jsx("span",{className:"cart-count",children:s})]}),t?p.jsxs("div",{className:"user-menu",ref:y,children:[p.jsxs("button",{className:"user-menu-toggle",onClick:()=>_(!g),children:[p.jsx(uA,{}),p.jsx("span",{className:"desktop-only",children:t.displayName||"Account"})]}),g&&p.jsxs("div",{className:"user-dropdown",children:[p.jsxs(ae,{to:"/orders",onClick:()=>_(!1),children:[p.jsx(wo,{})," My Orders"]}),e&&p.jsxs(ae,{to:"/admin",onClick:()=>_(!1),children:[p.jsx(Gv,{})," Admin Panel"]}),p.jsx("div",{className:"divider"}),p.jsxs("button",{onClick:w,children:[p.jsx(Hv,{})," Logout"]})]})]}):p.jsx(ae,{to:"/login",className:"btn btn-primary btn-sm",children:"Login"}),p.jsx("button",{className:"mobile-toggle",onClick:()=>f(!h),children:h?p.jsx(dA,{}):p.jsx(sA,{})})]})]})}),p.jsxs("div",{className:`mobile-nav ${h?"open":""}`,children:[p.jsx(ae,{to:"/",onClick:()=>f(!1),children:"Home"}),p.jsx(ae,{to:"/products",onClick:()=>f(!1),children:"Collection"}),p.jsx(ae,{to:"/sell-gold",onClick:()=>f(!1),children:"Sell Gold"}),p.jsxs(ae,{to:"/cart",onClick:()=>f(!1),children:[p.jsx(Dl,{})," Cart ",s>0&&`(${s})`]}),t?p.jsxs(p.Fragment,{children:[p.jsxs(ae,{to:"/orders",onClick:()=>f(!1),children:[p.jsx(wo,{})," My Orders"]}),e&&p.jsxs(ae,{to:"/admin",onClick:()=>f(!1),children:[p.jsx(Gv,{})," Admin Panel"]}),p.jsxs("button",{onClick:w,children:[p.jsx(Hv,{})," Logout"]})]}):p.jsx(ae,{to:"/login",onClick:()=>f(!1),children:"Login"})]})]})}function fA(){return p.jsxs("footer",{className:"footer",children:[p.jsxs("div",{className:"footer-grid",children:[p.jsxs("div",{className:"footer-brand",children:[p.jsxs("div",{className:"brand-name",children:["K G S ",p.jsx("span",{children:"Jewelry"})]}),p.jsx("p",{children:"Crafting timeless elegance since generations. Premium 22K and 24K gold jewelry with expert craftsmanship and transparent pricing."})]}),p.jsxs("div",{children:[p.jsx("h4",{children:"Quick Links"}),p.jsxs("div",{className:"footer-links",children:[p.jsx(ae,{to:"/",children:"Home"}),p.jsx(ae,{to:"/products",children:"Collection"}),p.jsx(ae,{to:"/sell-gold",children:"Sell Gold"}),p.jsx(ae,{to:"/cart",children:"Cart"})]})]}),p.jsxs("div",{children:[p.jsx("h4",{children:"Categories"}),p.jsxs("div",{className:"footer-links",children:[p.jsx(ae,{to:"/products?category=ring",children:"Rings"}),p.jsx(ae,{to:"/products?category=chain",children:"Chains"}),p.jsx(ae,{to:"/products?category=necklace",children:"Necklaces"}),p.jsx(ae,{to:"/products?category=bangle",children:"Bangles"}),p.jsx(ae,{to:"/products?category=earring",children:"Earrings"})]})]}),p.jsxs("div",{className:"footer-contact",children:[p.jsx("h4",{children:"Contact Us"}),p.jsxs("p",{children:[p.jsx(iA,{})," K G S Jewelry, Main Road, Tamil Nadu, India"]}),p.jsxs("p",{children:[p.jsx(aA,{})," +91 98765 43210"]}),p.jsxs("p",{children:[p.jsx(rA,{})," contact@kgsjewelry.com"]})]})]}),p.jsx("div",{className:"footer-bottom",children:p.jsxs("p",{children:["© ",new Date().getFullYear()," K G S Jewelry. All rights reserved."]})})]})}function Mn(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m35.42 188.21 207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75zM48 176h416"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m400 64-48 112-96-128M112 64l48 112 96-128m0 400-96-272m96 272 96-272"},child:[]}]})(t)}function Kv(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M369.4 33.6c-12.3.3-25.6 5.1-38.8 15L341.4 63c14.4-10.8 26.5-12.8 35.9-10.7 9.3 2.1 16.6 8.5 20.5 17.2 7.9 17.4 3.4 43.3-33.1 57.9l-5.7 2.3v45.1h18v-33.2c38.7-18.3 48.8-54.1 37.2-79.5-6.1-13.4-17.8-24-33-27.4-3.8-.8-7.7-1.2-11.8-1.1zm-224 .04c-12.3.32-25.6 5.07-38.8 14.96L117.4 63c14.4-10.81 26.5-12.77 35.9-10.67 9.3 2.1 16.6 8.51 20.5 17.19 7.9 17.37 3.4 43.28-33.1 57.88l-5.7 2.3v45.1h18v-33.2c38.7-18.3 48.8-54.1 37.2-79.52-6.1-13.32-17.8-23.91-33-27.31-3.8-.85-7.7-1.24-11.8-1.13zM89 192.8v30h110v-30H89zm224 0v30h110v-30H313zm-187.7 48l-55.6 69.5L144 496l74.3-185.7-55.6-69.5h-37.4zm224 0l-55.6 69.5L368 496l74.3-185.7-55.6-69.5h-37.4zM135 257.4v31.4l-31.4 7.8 31.4-39.2zm18 0l31.3 39.2-31.3-7.8v-31.4zm206 0v31.4l-31.4 7.8 31.4-39.2zm18 0l31.3 39.2-31.3-7.8v-31.4zm-242 49.9v117.8L92.2 318l42.8-10.7zm18 0l42.8 10.7L153 425.1V307.3zm206 0v117.8L316.2 318l42.8-10.7zm18 0l42.8 10.7L377 425.1V307.3z"},child:[]}]})(t)}function pA(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M191.02 25.346l-22.9 34.35h30.714l22.9-34.35H191.02zm52.347 0l-22.898 34.35h71.06l-22.897-34.35h-25.266zm46.9 0l22.9 34.35h30.714l-22.9-34.35h-30.714zm-117.234 52.35l50.115 50.115-25.058-50.115h-25.057zm45.182 0L256 153.265l37.785-75.57h-75.57zm95.695 0l-25.058 50.115 50.115-50.115H313.91zm-134.435 31.898C109.163 139.5 59.693 209.29 59.693 290.348c0 108.185 88.122 196.306 196.307 196.306 108.185 0 196.307-88.12 196.307-196.306 0-81.057-49.47-150.848-119.782-180.754l-30.517 30.517c64.397 19.592 111.037 79.292 111.037 150.238 0 86.966-70.08 157.045-157.045 157.045-86.966 0-157.045-70.08-157.045-157.045 0-70.946 46.64-130.646 111.037-150.237l-30.517-30.516z"},child:[]}]})(t)}function mA(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M471.1 30.58l17.8 2.84S476 114.1 448.1 204.9c5.4 4.6 8.9 11.5 8.9 19.1 0 13.2-10.5 24.2-23.5 25-18 50.4-40.6 100.6-68.8 139.3-9.1 12.5-18.8 23.8-29.2 33.6-3.9-4.7-8.9-8.6-14.5-11.2 10.2-9.1 19.9-20.2 29.2-33 26.4-36.2 48.5-84.9 66.1-134.3-5.7-4.6-9.3-11.6-9.3-19.4 0-13.4 10.8-24.4 24-25 27.4-89 40.1-168.42 40.1-168.42zm-430.19 0S53.71 110 81.01 199c13.2.5 23.99 11.6 23.99 25 0 7.8-3.7 14.8-9.29 19.4 17.59 49.4 39.69 98.1 66.09 134.3 9.3 12.8 19 23.9 29.2 33-5.6 2.6-10.6 6.5-14.5 11.2-10.4-9.8-20.1-21.1-29.2-33.6-28.2-38.7-50.69-88.9-68.79-139.3-13-.8-23.5-11.8-23.5-25 0-7.6 3.5-14.5 8.9-19.1-27.9-90.8-40.8-171.48-40.8-171.48zM407.1 62.52l17.8 2.96S417 113.4 393 162.2V208h-18v-14.5c-9.6 14.3-20.8 27.9-34.1 39.3-3.8 3.2-7.8 6.3-11.9 9.2v46h-18v-35.5c-13.8 6.7-29.2 11-46 12.2V304h-18v-39.3c-16.8-1.2-32.2-5.5-46-12.2V288h-18v-46c-4.1-2.9-8.1-6-11.9-9.2-13.3-11.4-24.5-25-34.1-39.3V208h-18v-45.8c-23.99-48.8-31.89-96.72-31.89-96.72l17.79-2.96s7.9 46.88 31.2 93.48c11.6 23.3 27 46.3 46.8 63.2 19.7 16.9 43.3 27.8 73.1 27.8 29.8 0 53.4-10.9 73.1-27.8 19.8-16.9 35.2-39.9 46.8-63.2 23.3-46.6 31.2-93.48 31.2-93.48zM304 425c12.8 0 23 10.2 23 23s-10.2 23-23 23c-2.6 0-5.1-.4-7.4-1.2.2-1.9.4-3.8.4-5.8 0-11.3-4.6-21.5-12.1-28.9C289 429 296 425 304 425zm-96 0c8 0 15 4 19.1 10.1-7.5 7.4-12.1 17.6-12.1 28.9 0 2 .2 3.9.4 5.8-2.3.8-4.8 1.2-7.4 1.2-12.8 0-23-10.2-23-23s10.2-23 23-23zm48 16c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23z"},child:[]}]})(t)}const af=31.1035,gA=300*1e3;let Wr=null,Ai=0;async function vA(){const t=await fetch("https://data-asg.goldprice.org/dbXRates/INR",{headers:{Accept:"application/json"},signal:AbortSignal.timeout(8e3)});if(!t.ok)throw new Error(`GoldPrice.org HTTP ${t.status}`);const e=await t.json();if(e.items&&e.items.length>0){const n=e.items[0].xauPrice;if(n&&n>0){const s=n/af;return{"24k":Math.round(s),"22k":Math.round(s*(22/24)),source:"goldprice.org"}}}throw new Error("Invalid data from GoldPrice.org")}async function yA(){var h,f,g;const[t,e]=await Promise.all([fetch("https://data-asg.goldprice.org/dbXRates/USD",{headers:{Accept:"application/json"},signal:AbortSignal.timeout(8e3)}),fetch("https://api.frankfurter.app/latest?from=USD&to=INR",{signal:AbortSignal.timeout(8e3)})]);if(!t.ok||!e.ok)throw new Error("USD conversion APIs failed");const n=await t.json(),s=await e.json();if(!((f=(h=n.items)==null?void 0:h[0])!=null&&f.xauPrice)||!((g=s.rates)!=null&&g.INR))throw new Error("Invalid data from USD conversion");const o=n.items[0].xauPrice,l=s.rates.INR,u=o*l/af;return{"24k":Math.round(u),"22k":Math.round(u*(22/24)),source:"goldprice.org+frankfurter"}}async function _A(){var n;const t=await fetch("https://api.metals.live/v1/spot/gold",{signal:AbortSignal.timeout(8e3)});if(!t.ok)throw new Error(`metals.live HTTP ${t.status}`);const e=await t.json();if(Array.isArray(e)&&e.length>0&&e[0].gold){const s=e[0].gold,o=await fetch("https://api.frankfurter.app/latest?from=USD&to=INR",{signal:AbortSignal.timeout(8e3)});if(!o.ok)throw new Error("FX API failed");const u=(n=(await o.json()).rates)==null?void 0:n.INR;if(!u)throw new Error("No INR rate from frankfurter");const h=s*u/af;return{"24k":Math.round(h),"22k":Math.round(h*(22/24)),source:"metals.live+frankfurter"}}throw new Error("Invalid data from metals.live")}async function Eo(){if(Wr&&Date.now()-Ai<gA)return Wr;const t=await rw();if(t!=null&&t.manualOverride)return Wr=t,Ai=Date.now(),t;const e=[{name:"GoldPrice.org INR",fn:vA},{name:"USD Conversion",fn:yA},{name:"Metals.live",fn:_A}];for(const s of e)try{console.log(`⏳ Trying gold rate source: ${s.name}...`);const o=await s.fn();if(o["24k"]<5e3||o["24k"]>15e3){console.warn(`⚠️ ${s.name} returned suspicious rate: ₹${o["24k"]}/g, skipping`);continue}const l={"24k":o["24k"],"22k":o["22k"],lastUpdated:Date.now(),source:o.source};return console.log(`✅ Gold rates from ${s.name}: 24K=₹${l["24k"]}/g, 22K=₹${l["22k"]}/g`),Wr=l,Ai=Date.now(),await nw(l),l}catch(o){console.warn(`❌ ${s.name} failed:`,o.message)}if(console.warn("⚠️ All live gold rate sources failed, using stored rates"),t&&t["24k"]>0)return Wr=t,Ai=Date.now(),t;const n={"24k":7800,"22k":7150,lastUpdated:Date.now(),source:"fallback"};return Wr=n,Ai=Date.now(),n}async function nw(t){try{const e=At(bt,"goldRates");await rs(e,t)}catch(e){console.error("Failed to save gold rates to Firebase:",e)}}async function rw(){try{const t=At(bt,"goldRates"),e=await Lo(t);return e.exists()?e.val():null}catch(t){return console.error("Failed to get stored gold rates:",t),null}}async function wA(t,e){const n={"24k":Number(t),"22k":Number(e),lastUpdated:Date.now(),manualOverride:!0,source:"admin-manual"};return Wr=n,Ai=Date.now(),await nw(n),n}function Qs(t,e,n,s,o){const u=t*(e+n)+s,h=u*o/100,f=u+h;return Math.round(f)}function iw({product:t,goldRates:e}){const{addToCart:n}=jo(),s=t.goldType==="24K"?(e==null?void 0:e["24k"])||0:(e==null?void 0:e["22k"])||0,o=Qs(s,t.weightInGrams||0,t.wastageInGrams||0,t.makingCharge||0,t.taxPercentage||0),l=u=>{u.preventDefault(),u.stopPropagation(),n(t,o)};return p.jsxs(ae,{to:`/product/${t.id}`,className:"product-card",children:[p.jsxs("div",{className:"product-card-image",children:[t.imageURL?p.jsx("img",{src:t.imageURL,alt:t.name,loading:"lazy"}):p.jsx("div",{className:"no-image-placeholder",children:p.jsx(Mn,{})}),p.jsx("span",{className:"badge badge-gold gold-badge",children:t.goldType})]}),p.jsxs("div",{className:"product-card-body",children:[p.jsx("span",{className:"category-label",children:t.category}),p.jsx("h3",{children:t.name}),p.jsxs("span",{className:"weight-info",children:[t.weightInGrams,"g • ",t.goldType]}),p.jsxs("div",{className:"product-card-footer",children:[p.jsxs("span",{className:"price",children:["₹",o.toLocaleString("en-IN")]}),p.jsx("button",{className:"add-btn",onClick:l,title:"Add to Cart",children:p.jsx(ew,{})})]})]})]})}const EA={display:"flex",gap:"20px",flexWrap:"wrap"},qv={background:"linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",borderRadius:"12px",padding:"20px 28px",color:"#fff",flex:"1",minWidth:"180px",position:"relative",overflow:"hidden"},Yv={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, transparent 0%, rgba(183,110,121,0.08) 50%, transparent 100%)",pointerEvents:"none"};function sw({goldRates:t,compact:e=!1}){if(!t)return null;const n=o=>o?`₹${Number(o).toLocaleString("en-IN")}`:"—",s=t.lastUpdated?new Date(t.lastUpdated).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}):"";return e?p.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",fontSize:"0.85rem"},children:[p.jsxs("span",{style:{color:"#B76E79",fontWeight:600},children:["24K: ",n(t["24k"]),"/g"]}),p.jsx("span",{style:{color:"#999"},children:"|"}),p.jsxs("span",{style:{color:"#B76E79",fontWeight:600},children:["22K: ",n(t["22k"]),"/g"]})]}):p.jsxs("div",{style:EA,children:[p.jsxs("div",{style:qv,children:[p.jsx("div",{style:Yv}),p.jsxs("div",{style:{position:"relative",zIndex:1},children:[p.jsx("div",{style:{fontSize:"0.8rem",opacity:.7,marginBottom:"4px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"24K Gold"}),p.jsx("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.6rem",fontWeight:700,color:"#E8C99B"},children:n(t["24k"])}),p.jsx("div",{style:{fontSize:"0.75rem",opacity:.5,marginTop:"4px"},children:"per gram"})]})]}),p.jsxs("div",{style:qv,children:[p.jsx("div",{style:Yv}),p.jsxs("div",{style:{position:"relative",zIndex:1},children:[p.jsx("div",{style:{fontSize:"0.8rem",opacity:.7,marginBottom:"4px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"22K Gold"}),p.jsx("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.6rem",fontWeight:700,color:"#E8C99B"},children:n(t["22k"])}),p.jsx("div",{style:{fontSize:"0.75rem",opacity:.5,marginTop:"4px"},children:"per gram"})]})]}),s&&p.jsxs("div",{style:{width:"100%",textAlign:"right",fontSize:"0.75rem",color:"#999",marginTop:"-8px"},children:["Last updated: ",s,t.manualOverride&&" (Manual)"]})]})}const Do="products";async function CA(t){try{const e=At(bt,Do),n=Xh(e),s={...t,id:n.key,createdAt:Date.now()};return await rs(n,s),s}catch(e){throw console.error("Error adding product:",e),e}}async function lf(){try{const t=At(bt,Do),e=await Lo(t);if(e.exists()){const n=e.val();return Object.values(n)}return[]}catch(t){throw console.error("Error fetching products:",t),t}}async function SA(t){try{const e=At(bt,`${Do}/${t}`),n=await Lo(e);return n.exists()?n.val():null}catch(e){throw console.error("Error fetching product:",e),e}}async function IA(t,e){try{const n=At(bt,`${Do}/${t}`);return await T0(n,e),{id:t,...e}}catch(n){throw console.error("Error updating product:",n),n}}async function xA(t){try{const e=At(bt,`${Do}/${t}`);return await d2(e),t}catch(e){throw console.error("Error deleting product:",e),e}}const kA=[{name:"Rings",key:"ring",icon:p.jsx(pA,{})},{name:"Chains",key:"chain",icon:p.jsx(Mn,{})},{name:"Necklaces",key:"necklace",icon:p.jsx(mA,{})},{name:"Bangles",key:"bangle",icon:p.jsx(Kv,{})},{name:"Earrings",key:"earring",icon:p.jsx(Kv,{})}];function TA(){const[t,e]=k.useState(null),[n,s]=k.useState([]),[o,l]=k.useState(!0);k.useEffect(()=>{async function h(){try{const[g,_]=await Promise.all([Eo(),lf()]);e(g),s(_)}catch(g){console.error("Error loading home data:",g)}finally{l(!1)}}h();const f=setInterval(async()=>{try{const g=await Eo();e(g)}catch{console.warn("Gold rate refresh failed")}},600*1e3);return()=>clearInterval(f)},[]);const u=n.slice(0,8);return p.jsxs("div",{children:[p.jsx("section",{className:"hero",children:p.jsxs("div",{className:"hero-content",children:[p.jsxs("div",{className:"hero-text",children:[p.jsx("span",{className:"tagline",children:"✦ Premium Jewelry Since 1990"}),p.jsxs("h1",{children:["Timeless ",p.jsx("span",{className:"highlight",children:"Elegance"})," Crafted in Pure Gold"]}),p.jsx("p",{children:"Discover our exquisite collection of handcrafted 22K and 24K gold jewelry. Every piece tells a story of tradition, artistry, and unmatched quality."}),p.jsxs("div",{className:"hero-buttons",children:[p.jsxs(ae,{to:"/products",className:"btn btn-primary btn-lg",children:["Explore Collection ",p.jsx(ol,{})]}),p.jsx(ae,{to:"/sell-gold",className:"btn btn-outline btn-lg",style:{borderColor:"#fff",color:"#fff"},children:"Sell Gold"})]})]}),p.jsx("div",{className:"hero-visual",children:p.jsx("div",{className:"hero-diamond",children:p.jsx(Mn,{className:"icon"})})})]})}),p.jsx("section",{className:"gold-rates-section",children:p.jsxs("div",{className:"container",children:[p.jsx("h3",{children:"📊 Live Gold Rates (India)"}),p.jsx("div",{style:{flex:1},children:p.jsx(sw,{goldRates:t})})]})}),p.jsx("section",{className:"categories-section",children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"section-title",children:[p.jsx("div",{className:"divider"}),p.jsx("h2",{children:"Shop by Category"}),p.jsx("p",{children:"Explore our curated collections of fine gold jewelry"})]}),p.jsx("div",{className:"categories-grid",children:kA.map(h=>p.jsxs(ae,{to:`/products?category=${h.key}`,className:"category-card",children:[p.jsx("div",{className:"cat-icon",children:h.icon}),p.jsx("h3",{children:h.name})]},h.key))})]})}),p.jsx("section",{className:"featured-section",children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"section-title",children:[p.jsx("div",{className:"divider"}),p.jsx("h2",{children:"Featured Collection"}),p.jsx("p",{children:"Our most loved pieces, handpicked for you"})]}),o?p.jsx("div",{className:"spinner-overlay",children:p.jsx("div",{className:"spinner"})}):u.length>0?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"products-grid",children:u.map(h=>p.jsx(iw,{product:h,goldRates:t},h.id))}),p.jsx("div",{style:{textAlign:"center",marginTop:"48px"},children:p.jsxs(ae,{to:"/products",className:"btn btn-outline",children:["View All Collection ",p.jsx(ol,{})]})})]}):p.jsxs("div",{style:{textAlign:"center",padding:"60px 0",color:"var(--text-muted)"},children:[p.jsx(Mn,{style:{fontSize:"3rem",marginBottom:"16px",color:"var(--rose-gold-light)"}}),p.jsx("p",{children:"No products available yet. Check back soon!"})]})]})}),p.jsx("section",{className:"cta-section",children:p.jsxs("div",{className:"container",children:[p.jsx("h2",{children:"Have Old Gold to Sell?"}),p.jsx("p",{children:"Get the best value for your gold with our transparent HUID-based pricing"}),p.jsxs(ae,{to:"/sell-gold",className:"btn btn-gold btn-lg",children:["Sell Your Gold ",p.jsx(ol,{})]})]})})]})}const NA=["all","ring","chain","necklace","bangle","earring","pendant","bracelet"],PA=["all","22K","24K"];function RA(){const[t]=yC(),e=t.get("category")||"all",[n,s]=k.useState([]),[o,l]=k.useState(null),[u,h]=k.useState(!0),[f,g]=k.useState(""),[_,y]=k.useState(e),[w,I]=k.useState("all"),[R,b]=k.useState("newest");k.useEffect(()=>{async function F(){try{const[B,W]=await Promise.all([Eo(),lf()]);l(B),s(W)}catch(B){console.error("Error loading products:",B)}finally{h(!1)}}F()},[]),k.useEffect(()=>{const F=t.get("category");F&&y(F)},[t]);const O=k.useMemo(()=>{let F=[...n];if(f.trim()){const B=f.toLowerCase();F=F.filter(W=>{var q,ue,ce;return((q=W.name)==null?void 0:q.toLowerCase().includes(B))||((ue=W.description)==null?void 0:ue.toLowerCase().includes(B))||((ce=W.category)==null?void 0:ce.toLowerCase().includes(B))})}return _!=="all"&&(F=F.filter(B=>B.category===_)),w!=="all"&&(F=F.filter(B=>B.goldType===w)),R==="price-low"?F.sort((B,W)=>{const q=B.goldType==="24K"?(o==null?void 0:o["24k"])||0:(o==null?void 0:o["22k"])||0,ue=W.goldType==="24K"?(o==null?void 0:o["24k"])||0:(o==null?void 0:o["22k"])||0,ce=Qs(q,B.weightInGrams||0,B.wastageInGrams||0,B.makingCharge||0,B.taxPercentage||0),we=Qs(ue,W.weightInGrams||0,W.wastageInGrams||0,W.makingCharge||0,W.taxPercentage||0);return ce-we}):R==="price-high"?F.sort((B,W)=>{const q=B.goldType==="24K"?(o==null?void 0:o["24k"])||0:(o==null?void 0:o["22k"])||0,ue=W.goldType==="24K"?(o==null?void 0:o["24k"])||0:(o==null?void 0:o["22k"])||0,ce=Qs(q,B.weightInGrams||0,B.wastageInGrams||0,B.makingCharge||0,B.taxPercentage||0);return Qs(ue,W.weightInGrams||0,W.wastageInGrams||0,W.makingCharge||0,W.taxPercentage||0)-ce}):R==="weight"?F.sort((B,W)=>(B.weightInGrams||0)-(W.weightInGrams||0)):F.sort((B,W)=>(W.createdAt||0)-(B.createdAt||0)),F},[n,f,_,w,R,o]);return p.jsx("div",{className:"products-page",children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"page-header",children:[p.jsx("h1",{children:"Our Collection"}),p.jsx("p",{children:"Discover exquisite gold jewelry crafted with perfection"})]}),p.jsxs("div",{className:"filters-bar",children:[p.jsxs("div",{style:{position:"relative",flex:1,minWidth:"200px"},children:[p.jsx(lA,{style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)"}}),p.jsx("input",{type:"text",className:"search-input",placeholder:"Search jewelry...",value:f,onChange:F=>g(F.target.value),style:{paddingLeft:"36px"}})]}),p.jsx("select",{value:_,onChange:F=>y(F.target.value),children:NA.map(F=>p.jsx("option",{value:F,children:F==="all"?"All Categories":F.charAt(0).toUpperCase()+F.slice(1)},F))}),p.jsx("select",{value:w,onChange:F=>I(F.target.value),children:PA.map(F=>p.jsx("option",{value:F,children:F==="all"?"All Gold Types":F},F))}),p.jsxs("select",{value:R,onChange:F=>b(F.target.value),children:[p.jsx("option",{value:"newest",children:"Newest First"}),p.jsx("option",{value:"price-low",children:"Price: Low to High"}),p.jsx("option",{value:"price-high",children:"Price: High to Low"}),p.jsx("option",{value:"weight",children:"Weight"})]}),p.jsxs("span",{className:"result-count",children:[O.length," items"]})]}),u?p.jsx("div",{className:"spinner-overlay",children:p.jsx("div",{className:"spinner"})}):O.length>0?p.jsx("div",{className:"products-grid",children:O.map(F=>p.jsx(iw,{product:F,goldRates:o},F.id))}):p.jsxs("div",{className:"products-empty",children:[p.jsx(Mn,{}),p.jsx("h3",{children:"No products found"}),p.jsx("p",{children:"Try adjusting your filters or search terms"})]})]})})}function AA(){const{id:t}=WE(),{addToCart:e}=jo(),[n,s]=k.useState(null),[o,l]=k.useState(null),[u,h]=k.useState(!0);if(k.useEffect(()=>{async function R(){try{const[b,O]=await Promise.all([SA(t),Eo()]);s(b),l(O)}catch(b){console.error("Error loading product:",b)}finally{h(!1)}}R()},[t]),u)return p.jsx("div",{className:"spinner-overlay",style:{minHeight:"60vh"},children:p.jsx("div",{className:"spinner"})});if(!n)return p.jsxs("div",{className:"container page",style:{textAlign:"center"},children:[p.jsx("h2",{children:"Product not found"}),p.jsx(ae,{to:"/products",className:"btn btn-primary",style:{marginTop:"16px"},children:"Back to Collection"})]});const f=n.goldType==="24K"?(o==null?void 0:o["24k"])||0:(o==null?void 0:o["22k"])||0,g=f*((n.weightInGrams||0)+(n.wastageInGrams||0)),_=g+(n.makingCharge||0),y=_*(n.taxPercentage||0)/100,w=Math.round(_+y),I=()=>{e(n,w),Me.success(`${n.name} added to cart!`)};return p.jsx("div",{className:"product-detail",children:p.jsxs("div",{className:"container",children:[p.jsx("div",{style:{marginBottom:"24px"},children:p.jsxs(ae,{to:"/products",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"var(--rose-gold)",fontSize:"0.9rem"},children:[p.jsx(eA,{})," Back to Collection"]})}),p.jsxs("div",{className:"product-detail-grid",children:[p.jsx("div",{className:"product-image-section",children:p.jsx("div",{className:"product-main-image",children:n.imageURL?p.jsx("img",{src:n.imageURL,alt:n.name}):p.jsx(Mn,{className:"placeholder-icon"})})}),p.jsxs("div",{className:"product-info-section",children:[p.jsxs("div",{className:"breadcrumb",children:[p.jsx(ae,{to:"/",children:"Home"})," / ",p.jsx(ae,{to:"/products",children:"Collection"})," / ",p.jsx("span",{children:n.name})]}),p.jsx("h1",{children:n.name}),p.jsx("span",{className:"badge badge-gold gold-type-badge",children:n.goldType}),p.jsx("p",{className:"description",children:n.description||"A beautiful piece of gold jewelry crafted with precision and care."}),p.jsxs("div",{className:"specs-grid",children:[p.jsxs("div",{className:"spec-item",children:[p.jsx("div",{className:"label",children:"Weight"}),p.jsxs("div",{className:"value",children:[n.weightInGrams,"g"]})]}),p.jsxs("div",{className:"spec-item",children:[p.jsx("div",{className:"label",children:"Gold Type"}),p.jsx("div",{className:"value",children:n.goldType})]}),p.jsxs("div",{className:"spec-item",children:[p.jsx("div",{className:"label",children:"Category"}),p.jsx("div",{className:"value",style:{textTransform:"capitalize"},children:n.category})]}),p.jsxs("div",{className:"spec-item",children:[p.jsx("div",{className:"label",children:"Wastage"}),p.jsxs("div",{className:"value",children:[n.wastageInGrams,"g"]})]})]}),p.jsxs("div",{className:"price-breakdown",children:[p.jsx("h3",{children:"Price Breakdown"}),p.jsxs("div",{className:"price-row",children:[p.jsxs("span",{children:["Gold Rate (",n.goldType,")"]}),p.jsxs("span",{children:["₹",f.toLocaleString("en-IN"),"/g"]})]}),p.jsxs("div",{className:"price-row",children:[p.jsx("span",{children:"Weight + Wastage"}),p.jsxs("span",{children:[n.weightInGrams,"g + ",n.wastageInGrams,"g = ",(n.weightInGrams+n.wastageInGrams).toFixed(2),"g"]})]}),p.jsxs("div",{className:"price-row",children:[p.jsx("span",{children:"Gold Cost"}),p.jsxs("span",{children:["₹",Math.round(g).toLocaleString("en-IN")]})]}),p.jsxs("div",{className:"price-row",children:[p.jsx("span",{children:"Making Charge"}),p.jsxs("span",{children:["₹",(n.makingCharge||0).toLocaleString("en-IN")]})]}),p.jsxs("div",{className:"price-row",children:[p.jsxs("span",{children:["Tax (",n.taxPercentage||0,"%)"]}),p.jsxs("span",{children:["₹",Math.round(y).toLocaleString("en-IN")]})]}),p.jsxs("div",{className:"price-row total",children:[p.jsx("span",{children:"Total"}),p.jsxs("span",{children:["₹",w.toLocaleString("en-IN")]})]})]}),p.jsx("div",{className:"add-to-cart-section",children:p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:I,style:{flex:1},children:[p.jsx(Dl,{})," Add to Cart"]})})]})]})]})})}function bA(){const{cartItems:t,removeFromCart:e,updateQuantity:n,totalPrice:s,totalItems:o}=jo();return t.length===0?p.jsx("div",{className:"cart-page",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"cart-empty",children:[p.jsx(Dl,{}),p.jsx("h2",{children:"Your cart is empty"}),p.jsx("p",{children:"Browse our collection and add your favorite pieces"}),p.jsx(ae,{to:"/products",className:"btn btn-primary",style:{marginTop:"20px"},children:"Explore Collection"})]})})}):p.jsx("div",{className:"cart-page",children:p.jsxs("div",{className:"container",children:[p.jsxs("h1",{children:["Shopping Cart (",o," items)"]}),p.jsxs("div",{className:"cart-layout",children:[p.jsx("div",{className:"cart-items",children:t.map(l=>p.jsxs("div",{className:"cart-item",children:[p.jsx("div",{className:"cart-item-image",children:l.imageURL?p.jsx("img",{src:l.imageURL,alt:l.name}):p.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(Mn,{style:{fontSize:"2rem",color:"var(--rose-gold-light)"}})})}),p.jsxs("div",{className:"cart-item-info",children:[p.jsx("h3",{children:l.name}),p.jsxs("div",{className:"item-meta",children:[l.weightInGrams,"g • ",l.goldType," • ",l.category]}),p.jsxs("div",{className:"item-price",children:["₹",l.calculatedPrice.toLocaleString("en-IN")]})]}),p.jsxs("div",{className:"cart-item-actions",children:[p.jsxs("div",{className:"qty-controls",children:[p.jsx("button",{onClick:()=>n(l.id,l.quantity-1),children:p.jsx(oA,{})}),p.jsx("span",{children:l.quantity}),p.jsx("button",{onClick:()=>n(l.id,l.quantity+1),children:p.jsx(ew,{})})]}),p.jsx("button",{className:"remove-btn",onClick:()=>e(l.id),children:p.jsx(tw,{})})]})]},l.id))}),p.jsxs("div",{className:"cart-summary",children:[p.jsx("h3",{children:"Order Summary"}),t.map(l=>p.jsxs("div",{className:"summary-row",children:[p.jsxs("span",{children:[l.name," × ",l.quantity]}),p.jsxs("span",{children:["₹",(l.calculatedPrice*l.quantity).toLocaleString("en-IN")]})]},l.id)),p.jsxs("div",{className:"summary-row total",children:[p.jsx("span",{children:"Total"}),p.jsxs("span",{children:["₹",s.toLocaleString("en-IN")]})]}),p.jsxs(ae,{to:"/checkout",className:"btn btn-primary btn-lg",style:{width:"100%",marginTop:"24px"},children:["Checkout ",p.jsx(ol,{})]})]})]})]})})}const cf="orders";async function OA(t){try{const e=At(bt,cf),n=Xh(e),s={...t,orderId:n.key,status:"Placed",trackingId:"",createdAt:Date.now()};return await rs(n,s),s}catch(e){throw console.error("Error creating order:",e),e}}async function ow(){try{const t=At(bt,cf),e=await Lo(t);return e.exists()?Object.values(e.val()):[]}catch(t){throw console.error("Error fetching orders:",t),t}}async function LA(t){try{return(await ow()).filter(n=>n.userId===t)}catch(e){throw console.error("Error fetching user orders:",e),e}}async function jA(t,e,n=""){try{const s=At(bt,`${cf}/${t}`);return await T0(s,{status:e,trackingId:n,updatedAt:Date.now()}),{orderId:t,status:e,trackingId:n}}catch(s){throw console.error("Error updating order status:",s),s}}function DA(){const{cartItems:t,totalPrice:e,clearCart:n}=jo(),{currentUser:s}=kr(),o=Zr(),[l,u]=k.useState({name:(s==null?void 0:s.displayName)||"",phone:"",address:"",pincode:""}),[h,f]=k.useState(!1),g=y=>{u({...l,[y.target.name]:y.target.value})},_=async y=>{if(y.preventDefault(),!l.name||!l.phone||!l.address||!l.pincode){Me.error("Please fill all fields");return}f(!0);try{const w={userId:s.uid,userEmail:s.email,customerName:l.name,phone:l.phone,address:l.address,pincode:l.pincode,items:t.map(I=>({id:I.id,name:I.name,goldType:I.goldType,weightInGrams:I.weightInGrams,category:I.category,quantity:I.quantity,price:I.calculatedPrice})),totalAmount:e};await OA(w),n(),Me.success("Order placed successfully! 🎉"),o("/orders")}catch(w){Me.error("Failed to place order. Try again."),console.error("Order error:",w)}finally{f(!1)}};return t.length===0?(o("/cart"),null):p.jsx("div",{className:"checkout-page",children:p.jsxs("div",{className:"container",children:[p.jsx("h1",{children:"Checkout"}),p.jsxs("div",{className:"checkout-layout",children:[p.jsxs("form",{className:"checkout-form",onSubmit:_,children:[p.jsx("h3",{children:"Delivery Information"}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Full Name"}),p.jsx("input",{type:"text",name:"name",value:l.name,onChange:g,placeholder:"Enter your full name",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Phone Number"}),p.jsx("input",{type:"tel",name:"phone",value:l.phone,onChange:g,placeholder:"Enter your phone number",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Delivery Address"}),p.jsx("textarea",{name:"address",value:l.address,onChange:g,placeholder:"Enter your full address",rows:3,required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Pincode"}),p.jsx("input",{type:"text",name:"pincode",value:l.pincode,onChange:g,placeholder:"Enter pincode",required:!0})]}),p.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},disabled:h,children:h?"Placing Order...":`Place Order • ₹${e.toLocaleString("en-IN")}`})]}),p.jsxs("div",{className:"cart-summary",children:[p.jsx("h3",{children:"Order Summary"}),t.map(y=>p.jsxs("div",{className:"summary-row",children:[p.jsxs("span",{children:[y.name," × ",y.quantity]}),p.jsxs("span",{children:["₹",(y.calculatedPrice*y.quantity).toLocaleString("en-IN")]})]},y.id)),p.jsxs("div",{className:"summary-row total",children:[p.jsx("span",{children:"Total"}),p.jsxs("span",{children:["₹",e.toLocaleString("en-IN")]})]})]})]})]})})}function MA(t){const e=(t||"").toLowerCase();return e==="placed"?"placed":e==="packed"?"packed":e==="shipped"?"shipped":e==="delivered"?"delivered":"placed"}function FA(){const{currentUser:t}=kr(),[e,n]=k.useState([]),[s,o]=k.useState(!0);return k.useEffect(()=>{async function l(){if(t)try{const u=await LA(t.uid);u.sort((h,f)=>(f.createdAt||0)-(h.createdAt||0)),n(u)}catch(u){console.error("Error loading orders:",u)}finally{o(!1)}}l()},[t]),s?p.jsx("div",{className:"spinner-overlay",style:{minHeight:"60vh"},children:p.jsx("div",{className:"spinner"})}):p.jsx("div",{className:"orders-page",children:p.jsxs("div",{className:"container",children:[p.jsx("h1",{children:"My Orders"}),e.length===0?p.jsxs("div",{className:"cart-empty",children:[p.jsx(wo,{}),p.jsx("h2",{children:"No orders yet"}),p.jsx("p",{children:"Your order history will appear here"})]}):e.map(l=>{var u,h;return p.jsxs("div",{className:"order-card",children:[p.jsxs("div",{className:"order-header",children:[p.jsxs("h3",{children:["Order #",(u=l.orderId)==null?void 0:u.slice(-8).toUpperCase()]}),p.jsx("span",{className:`status-badge ${MA(l.status)}`,children:l.status})]}),p.jsx("div",{className:"order-items",children:(h=l.items)==null?void 0:h.map((f,g)=>p.jsxs("div",{className:"order-item-row",children:[p.jsxs("span",{children:[f.name," (",f.goldType,") × ",f.quantity]}),p.jsxs("span",{children:["₹",(f.price*f.quantity).toLocaleString("en-IN")]})]},g))}),p.jsxs("div",{className:"order-footer",children:[p.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:[l.createdAt&&new Date(l.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),l.trackingId&&p.jsxs("span",{style:{marginLeft:"16px"},children:["Tracking: ",p.jsx("strong",{children:l.trackingId})]})]}),p.jsxs("div",{className:"price",style:{fontSize:"1.1rem"},children:["Total: ₹",(l.totalAmount||0).toLocaleString("en-IN")]})]})]},l.orderId)})]})})}function UA(){const{login:t}=kr(),e=Zr(),[n,s]=k.useState(""),[o,l]=k.useState(""),[u,h]=k.useState(""),[f,g]=k.useState(!1),_=async y=>{y.preventDefault(),h(""),g(!0);try{await t(n,o),Me.success("Welcome back!"),e("/")}catch(w){h(w.message||"Failed to login")}finally{g(!1)}};return p.jsx("div",{className:"auth-page",children:p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-header",children:[p.jsx("div",{className:"logo-icon",children:"KGS"}),p.jsx("h2",{children:"Welcome Back"}),p.jsx("p",{className:"auth-subtitle",children:"Sign in to your account"})]}),u&&p.jsx("div",{className:"error-msg",children:u}),p.jsxs("form",{onSubmit:_,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Email"}),p.jsx("input",{type:"email",value:n,onChange:y=>s(y.target.value),placeholder:"Enter your email",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password"}),p.jsx("input",{type:"password",value:o,onChange:y=>l(y.target.value),placeholder:"Enter your password",required:!0})]}),p.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},disabled:f,children:f?"Signing in...":"Sign In"})]}),p.jsxs("div",{className:"auth-footer",children:["Don't have an account? ",p.jsx(ae,{to:"/register",children:"Create one"})]})]})})}function zA(){const{register:t}=kr(),e=Zr(),[n,s]=k.useState(""),[o,l]=k.useState(""),[u,h]=k.useState(""),[f,g]=k.useState(""),[_,y]=k.useState(""),[w,I]=k.useState(!1),R=async b=>{if(b.preventDefault(),y(""),u!==f){y("Passwords do not match");return}if(u.length<6){y("Password must be at least 6 characters");return}I(!0);try{await t(o,u,n),Me.success("Account created successfully!"),e("/")}catch(O){y(O.message||"Failed to create account")}finally{I(!1)}};return p.jsx("div",{className:"auth-page",children:p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-header",children:[p.jsx("div",{className:"logo-icon",children:"KGS"}),p.jsx("h2",{children:"Create Account"}),p.jsx("p",{className:"auth-subtitle",children:"Join K G S Jewelry"})]}),_&&p.jsx("div",{className:"error-msg",children:_}),p.jsxs("form",{onSubmit:R,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Full Name"}),p.jsx("input",{type:"text",value:n,onChange:b=>s(b.target.value),placeholder:"Enter your full name",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Email"}),p.jsx("input",{type:"email",value:o,onChange:b=>l(b.target.value),placeholder:"Enter your email",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password"}),p.jsx("input",{type:"password",value:u,onChange:b=>h(b.target.value),placeholder:"Create a password",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Confirm Password"}),p.jsx("input",{type:"password",value:f,onChange:b=>g(b.target.value),placeholder:"Confirm your password",required:!0})]}),p.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},disabled:w,children:w?"Creating Account...":"Create Account"})]}),p.jsxs("div",{className:"auth-footer",children:["Already have an account? ",p.jsx(ae,{to:"/login",children:"Sign in"})]})]})})}const BA="sellRequests";async function WA(t){try{const e=At(bt,BA),n=Xh(e),s={...t,id:n.key,status:"Pending",createdAt:Date.now()};return await rs(n,s),s}catch(e){throw console.error("Error creating sell request:",e),e}}function VA(t,e){return Math.round(t*e)}function HA(){const{currentUser:t}=kr(),[e,n]=k.useState(null),[s,o]=k.useState({huidNumber:"",weight:"",purity:"22K"}),[l,u]=k.useState(null),[h,f]=k.useState(!1),[g,_]=k.useState(!1);k.useEffect(()=>{async function I(){try{const R=await Eo();n(R)}catch(R){console.error("Error loading gold rates:",R)}}I()},[]),k.useEffect(()=>{if(s.weight&&e){const I=s.purity==="24K"?e["24k"]:e["22k"],R=VA(I,parseFloat(s.weight));u(R)}else u(null)},[s.weight,s.purity,e]);const y=I=>{o({...s,[I.target.name]:I.target.value})},w=async I=>{if(I.preventDefault(),!t){Me.error("Please login to submit a sell request");return}if(!s.huidNumber||!s.weight){Me.error("Please fill all fields");return}f(!0);try{await WA({userId:t.uid,userEmail:t.email,userName:t.displayName||"",huidNumber:s.huidNumber,weight:parseFloat(s.weight),purity:s.purity,estimatedValue:l,goldRate:s.purity==="24K"?e["24k"]:e["22k"]}),Me.success("Sell request submitted successfully!"),_(!0)}catch(R){Me.error("Failed to submit. Try again."),console.error("Sell request error:",R)}finally{f(!1)}};return g?p.jsx("div",{className:"sell-gold-page",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"sell-gold-card",style:{textAlign:"center"},children:[p.jsx("div",{style:{fontSize:"4rem",marginBottom:"16px"},children:"✅"}),p.jsx("h2",{style:{fontFamily:"var(--font-display)",marginBottom:"12px"},children:"Request Submitted!"}),p.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"Our team will review your sell request and contact you shortly."}),p.jsxs("div",{className:"sell-value-display",children:[p.jsx("div",{className:"label",children:"Estimated Value"}),p.jsxs("div",{className:"value",children:["₹",l==null?void 0:l.toLocaleString("en-IN")]})]}),p.jsx("button",{className:"btn btn-primary",onClick:()=>{_(!1),o({huidNumber:"",weight:"",purity:"22K"}),u(null)},children:"Submit Another Request"})]})})}):p.jsx("div",{className:"sell-gold-page",children:p.jsxs("div",{className:"container",children:[p.jsx("h1",{children:"Sell Your Gold"}),p.jsx("p",{className:"subtitle",children:"Get the best value for your old gold with HUID-verified transparent pricing"}),p.jsx("div",{style:{maxWidth:"560px",margin:"0 auto 32px"},children:p.jsx(sw,{goldRates:e})}),p.jsx("div",{className:"sell-gold-card",children:p.jsxs("form",{onSubmit:w,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"HUID Number"}),p.jsx("input",{type:"text",name:"huidNumber",value:s.huidNumber,onChange:y,placeholder:"Enter HUID number",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Weight (in grams)"}),p.jsx("input",{type:"number",name:"weight",value:s.weight,onChange:y,placeholder:"Enter gold weight in grams",min:"0.1",step:"0.01",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Purity"}),p.jsxs("select",{name:"purity",value:s.purity,onChange:y,children:[p.jsx("option",{value:"22K",children:"22K Gold"}),p.jsx("option",{value:"24K",children:"24K Gold"})]})]}),l!==null&&p.jsxs("div",{className:"sell-value-display",children:[p.jsx("div",{className:"label",children:"Estimated Sell Value"}),p.jsxs("div",{className:"value",children:["₹",l.toLocaleString("en-IN")]})]}),p.jsx("button",{type:"submit",className:"btn btn-gold btn-lg",style:{width:"100%"},disabled:h,children:h?"Submitting...":"Submit Sell Request"})]})})]})})}const $A="61eafcd9b2b4aa44cb94bda08c71babf",GA="https://api.imgbb.com/1/upload";async function KA(t){try{const e=new FormData;e.append("image",t),e.append("key",$A);const n=await fetch(GA,{method:"POST",body:e});if(!n.ok)throw new Error(`imgbb upload failed: ${n.statusText}`);const s=await n.json();if(s.success)return s.data.display_url;throw new Error("imgbb upload returned unsuccessful response")}catch(e){throw console.error("Image upload error:",e),e}}const qA=["ring","chain","necklace","bangle","earring","pendant","bracelet"],Ed={name:"",category:"ring",description:"",goldType:"22K",weightInGrams:"",makingCharge:"",wastageInGrams:"",taxPercentage:"",imageURL:""};function YA(){var tt,xe,V,Q;const[t,e]=k.useState("products"),[n,s]=k.useState([]),[o,l]=k.useState([]),[u,h]=k.useState(null),[f,g]=k.useState(!0),[_,y]=k.useState({...Ed}),[w,I]=k.useState(null),[R,b]=k.useState(null),[O,F]=k.useState(""),[B,W]=k.useState(!1),[q,ue]=k.useState(""),[ce,we]=k.useState("");k.useEffect(()=>{Ne()},[]);async function Ne(){g(!0);try{const[A,x,L]=await Promise.all([lf(),ow(),rw()]);s(A),l(x.sort((ne,re)=>(re.createdAt||0)-(ne.createdAt||0))),h(L),L&&(ue(L["24k"]||""),we(L["22k"]||""))}catch(A){console.error("Error loading admin data:",A)}finally{g(!1)}}const be=A=>{y({..._,[A.target.name]:A.target.value})},et=A=>{const x=A.target.files[0];x&&(b(x),F(URL.createObjectURL(x)))},Gt=async A=>{if(A.preventDefault(),!_.name||!_.weightInGrams){Me.error("Please fill required fields");return}W(!0);try{let x=_.imageURL;R&&(x=await KA(R),Me.success("Image uploaded!"));const L={name:_.name,category:_.category,description:_.description,goldType:_.goldType,weightInGrams:parseFloat(_.weightInGrams)||0,makingCharge:parseFloat(_.makingCharge)||0,wastageInGrams:parseFloat(_.wastageInGrams)||0,taxPercentage:parseFloat(_.taxPercentage)||0,imageURL:x};w?(await IA(w,L),Me.success("Product updated!")):(await CA(L),Me.success("Product added!")),y({...Ed}),I(null),b(null),F(""),await Ne()}catch(x){Me.error("Failed to save product"),console.error(x)}finally{W(!1)}},Ot=A=>{y({name:A.name||"",category:A.category||"ring",description:A.description||"",goldType:A.goldType||"22K",weightInGrams:A.weightInGrams||"",makingCharge:A.makingCharge||"",wastageInGrams:A.wastageInGrams||"",taxPercentage:A.taxPercentage||"",imageURL:A.imageURL||""}),I(A.id),F(A.imageURL||""),e("products"),window.scrollTo({top:0,behavior:"smooth"})},ut=async(A,x)=>{if(window.confirm(`Delete "${x}"?`))try{await xA(A),Me.success("Product deleted"),await Ne()}catch{Me.error("Failed to delete")}},It=async(A,x,L)=>{try{await jA(A,x,L),Me.success("Order updated!"),await Ne()}catch{Me.error("Failed to update order")}},Lt=async()=>{if(!q||!ce){Me.error("Enter both rates");return}try{await wA(q,ce),Me.success("Gold rates updated!"),await Ne()}catch{Me.error("Failed to update rates")}};return f?p.jsx("div",{className:"spinner-overlay",style:{minHeight:"60vh"},children:p.jsx("div",{className:"spinner"})}):p.jsx("div",{className:"admin-page",children:p.jsxs("div",{className:"container",children:[p.jsx("h1",{children:"Admin Panel"}),p.jsx("p",{className:"admin-subtitle",children:"Manage your jewelry store"}),p.jsxs("div",{className:"admin-stats",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx("div",{className:"stat-value",children:n.length}),p.jsx("div",{className:"stat-label",children:"Products"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("div",{className:"stat-value",children:o.length}),p.jsx("div",{className:"stat-label",children:"Orders"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsxs("div",{className:"stat-value",children:["₹",((tt=u==null?void 0:u["24k"])==null?void 0:tt.toLocaleString("en-IN"))||"—"]}),p.jsx("div",{className:"stat-label",children:"24K Rate"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsxs("div",{className:"stat-value",children:["₹",((xe=u==null?void 0:u["22k"])==null?void 0:xe.toLocaleString("en-IN"))||"—"]}),p.jsx("div",{className:"stat-label",children:"22K Rate"})]})]}),p.jsxs("div",{className:"admin-tabs",children:[p.jsxs("button",{className:t==="products"?"active":"",onClick:()=>e("products"),children:[p.jsx(Mn,{style:{marginRight:6}})," Products"]}),p.jsxs("button",{className:t==="orders"?"active":"",onClick:()=>e("orders"),children:[p.jsx(wo,{style:{marginRight:6}})," Orders"]}),p.jsxs("button",{className:t==="goldRates"?"active":"",onClick:()=>e("goldRates"),children:[p.jsx(tA,{style:{marginRight:6}})," Gold Rates"]})]}),t==="products"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"admin-card",children:[p.jsx("h3",{children:w?"✏️ Edit Product":"➕ Add New Product"}),p.jsx("form",{onSubmit:Gt,children:p.jsxs("div",{className:"product-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Product Name *"}),p.jsx("input",{type:"text",name:"name",value:_.name,onChange:be,placeholder:"e.g. Royal Gold Necklace",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Category"}),p.jsx("select",{name:"category",value:_.category,onChange:be,children:qA.map(A=>p.jsx("option",{value:A,children:A.charAt(0).toUpperCase()+A.slice(1)},A))})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Gold Type"}),p.jsxs("select",{name:"goldType",value:_.goldType,onChange:be,children:[p.jsx("option",{value:"22K",children:"22K"}),p.jsx("option",{value:"24K",children:"24K"})]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Weight (grams) *"}),p.jsx("input",{type:"number",name:"weightInGrams",value:_.weightInGrams,onChange:be,placeholder:"e.g. 10",step:"0.01",required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Making Charge (₹)"}),p.jsx("input",{type:"number",name:"makingCharge",value:_.makingCharge,onChange:be,placeholder:"e.g. 2000"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Wastage (grams)"}),p.jsx("input",{type:"number",name:"wastageInGrams",value:_.wastageInGrams,onChange:be,placeholder:"e.g. 0.5",step:"0.01"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Tax (%)"}),p.jsx("input",{type:"number",name:"taxPercentage",value:_.taxPercentage,onChange:be,placeholder:"e.g. 3",step:"0.1"})]}),p.jsxs("div",{className:"form-group full-width",children:[p.jsx("label",{children:"Description"}),p.jsx("textarea",{name:"description",value:_.description,onChange:be,placeholder:"Product description...",rows:3})]}),p.jsxs("div",{className:"form-group full-width",children:[p.jsx("label",{children:"Product Image"}),p.jsx("div",{className:"image-upload-area",onClick:()=>document.getElementById("imageInput").click(),children:O?p.jsx("img",{src:O,alt:"Preview",className:"preview-img"}):p.jsxs("div",{children:[p.jsx(cA,{style:{fontSize:"2rem",color:"var(--rose-gold)",marginBottom:"8px"}}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Click to upload image"})]})}),p.jsx("input",{id:"imageInput",type:"file",accept:"image/*",onChange:et,style:{display:"none"}})]}),p.jsxs("div",{className:"full-width",style:{display:"flex",gap:"12px"},children:[p.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:B,children:[p.jsx($v,{})," ",B?"Saving...":w?"Update Product":"Add Product"]}),w&&p.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>{y({...Ed}),I(null),F(""),b(null)},children:"Cancel"})]})]})})]}),p.jsxs("div",{className:"admin-card",children:[p.jsxs("h3",{children:["All Products (",n.length,")"]}),p.jsx("div",{className:"table-container",children:p.jsxs("table",{className:"product-list-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Image"}),p.jsx("th",{children:"Name"}),p.jsx("th",{children:"Category"}),p.jsx("th",{children:"Gold"}),p.jsx("th",{children:"Weight"}),p.jsx("th",{children:"Actions"})]})}),p.jsxs("tbody",{children:[n.map(A=>p.jsxs("tr",{children:[p.jsx("td",{children:A.imageURL?p.jsx("img",{src:A.imageURL,alt:A.name,className:"product-thumb"}):p.jsx("div",{className:"product-thumb",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"var(--light-gray)"},children:p.jsx(Mn,{style:{color:"var(--rose-gold-light)"}})})}),p.jsx("td",{children:p.jsx("strong",{children:A.name})}),p.jsx("td",{style:{textTransform:"capitalize"},children:A.category}),p.jsx("td",{children:p.jsx("span",{className:"badge badge-gold",children:A.goldType})}),p.jsxs("td",{children:[A.weightInGrams,"g"]}),p.jsx("td",{children:p.jsxs("div",{className:"actions",children:[p.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>Ot(A),children:p.jsx(nA,{})}),p.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>ut(A.id,A.name),children:p.jsx(tw,{})})]})})]},A.id)),n.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"40px",color:"var(--text-muted)"},children:"No products yet. Add your first product above."})})]})]})})]})]}),t==="orders"&&p.jsx("div",{children:o.length===0?p.jsxs("div",{className:"admin-card",style:{textAlign:"center",padding:"60px"},children:[p.jsx(wo,{style:{fontSize:"3rem",color:"var(--rose-gold-light)",marginBottom:"16px"}}),p.jsx("p",{style:{color:"var(--text-muted)"},children:"No orders yet"})]}):o.map(A=>p.jsx(QA,{order:A,onUpdate:It},A.orderId))}),t==="goldRates"&&p.jsxs("div",{className:"admin-card",children:[p.jsx("h3",{children:"⚡ Manual Gold Rate Override"}),p.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px",fontSize:"0.9rem"},children:"Override the live gold rates with manual values. This will change pricing for all products."}),p.jsxs("div",{className:"gold-rate-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"24K Rate (₹/gram)"}),p.jsx("input",{type:"number",value:q,onChange:A=>ue(A.target.value),placeholder:"e.g. 7200"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"22K Rate (₹/gram)"}),p.jsx("input",{type:"number",value:ce,onChange:A=>we(A.target.value),placeholder:"e.g. 6600"})]}),p.jsxs("button",{className:"btn btn-primary",onClick:Lt,children:[p.jsx($v,{})," Update Rates"]})]}),u&&p.jsxs("div",{style:{marginTop:"24px",padding:"16px",background:"var(--light-gray)",borderRadius:"var(--radius-sm)"},children:[p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Current rates in database:"}),p.jsxs("div",{style:{fontWeight:600,marginTop:"4px"},children:["24K: ₹",(V=u["24k"])==null?void 0:V.toLocaleString("en-IN"),"/g  •  22K: ₹",(Q=u["22k"])==null?void 0:Q.toLocaleString("en-IN"),"/g"]}),p.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"4px"},children:["Last updated: ",u.lastUpdated?new Date(u.lastUpdated).toLocaleString("en-IN"):"N/A",u.manualOverride&&" (Manual Override)"]})]})]})]})})}function QA({order:t,onUpdate:e}){var u,h;const[n,s]=k.useState(t.status||"Placed"),[o,l]=k.useState(t.trackingId||"");return p.jsxs("div",{className:"admin-order",children:[p.jsxs("div",{className:"admin-order-header",children:[p.jsxs("h4",{children:["Order #",(u=t.orderId)==null?void 0:u.slice(-8).toUpperCase()]}),p.jsx("span",{className:`status-badge ${(t.status||"placed").toLowerCase()}`,children:t.status})]}),p.jsxs("div",{className:"admin-order-customer",children:["👤 ",t.customerName||"N/A"," • 📱 ",t.phone||"N/A"," • 📍 ",t.address||"N/A",", ",t.pincode||""]}),(h=t.items)==null?void 0:h.map((f,g)=>p.jsxs("div",{className:"order-item-row",style:{display:"flex",justifyContent:"space-between",padding:"6px 0",fontSize:"0.88rem",color:"var(--text-secondary)"},children:[p.jsxs("span",{children:[f.name," (",f.goldType,") × ",f.quantity]}),p.jsxs("span",{children:["₹",(f.price*f.quantity).toLocaleString("en-IN")]})]},g)),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"12px",fontWeight:600,fontSize:"1rem"},children:[p.jsx("span",{children:"Total"}),p.jsxs("span",{className:"price",children:["₹",(t.totalAmount||0).toLocaleString("en-IN")]})]}),p.jsxs("div",{className:"admin-order-actions",children:[p.jsxs("select",{value:n,onChange:f=>s(f.target.value),children:[p.jsx("option",{value:"Placed",children:"Placed"}),p.jsx("option",{value:"Packed",children:"Packed"}),p.jsx("option",{value:"Shipped",children:"Shipped"}),p.jsx("option",{value:"Delivered",children:"Delivered"})]}),p.jsx("input",{type:"text",value:o,onChange:f=>l(f.target.value),placeholder:"Tracking ID"}),p.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>e(t.orderId,n,o),children:"Update"})]})]})}function JA(){return p.jsx(HR,{children:p.jsxs($R,{children:[p.jsx(aS,{position:"top-right",toastOptions:{duration:3e3,style:{borderRadius:"12px",background:"#1A1A1A",color:"#fff",fontSize:"0.9rem"},success:{iconTheme:{primary:"#B76E79",secondary:"#fff"}}}}),p.jsx(hA,{}),p.jsx("main",{children:p.jsxs(iC,{children:[p.jsx(Bt,{path:"/",element:p.jsx(TA,{})}),p.jsx(Bt,{path:"/products",element:p.jsx(RA,{})}),p.jsx(Bt,{path:"/product/:id",element:p.jsx(AA,{})}),p.jsx(Bt,{path:"/cart",element:p.jsx(bA,{})}),p.jsx(Bt,{path:"/sell-gold",element:p.jsx(HA,{})}),p.jsx(Bt,{path:"/login",element:p.jsx(UA,{})}),p.jsx(Bt,{path:"/register",element:p.jsx(zA,{})}),p.jsx(Bt,{path:"/checkout",element:p.jsx(Bv,{children:p.jsx(DA,{})})}),p.jsx(Bt,{path:"/orders",element:p.jsx(Bv,{children:p.jsx(FA,{})})}),p.jsx(Bt,{path:"/admin",element:p.jsx(GR,{children:p.jsx(YA,{})})}),p.jsx(Bt,{path:"*",element:p.jsxs("div",{style:{textAlign:"center",padding:"100px 24px",minHeight:"50vh"},children:[p.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontSize:"3rem",marginBottom:"12px"},children:"404"}),p.jsx("p",{style:{color:"#999"},children:"Page not found"})]})})]})}),p.jsx(fA,{})]})})}fE.createRoot(document.getElementById("root")).render(p.jsx(Rn.StrictMode,{children:p.jsx(fC,{children:p.jsx(JA,{})})}));
