const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DZ5lQ-2k.js","assets/vendor-DnbrPWC7.js","assets/proxy-BBesQkzF.js","assets/ProjectsPage-CawnsOhx.js","assets/MiniProjectsPage-B1u6bAkZ.js","assets/TechStackPage-BwnJMil8.js","assets/FreelancePortfolio-DTFuw0ex.js"])))=>i.map(i=>d[i]);
import{r as J_,a as $_,b as ni,H as eS,R as tS,c as ic}from"./vendor-DnbrPWC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Wf={exports:{}},Ro={};var ux;function nS(){if(ux)return Ro;ux=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var fx;function iS(){return fx||(fx=1,Wf.exports=nS()),Wf.exports}var xn=iS(),qf={exports:{}},Co={},Yf={exports:{}},Zf={};var dx;function aS(){return dx||(dx=1,(function(s){function t(L,Y){var W=L.length;L.push(Y);e:for(;0<W;){var he=W-1>>>1,xe=L[he];if(0<l(xe,Y))L[he]=Y,L[W]=xe,W=he;else break e}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Y=L[0],W=L.pop();if(W!==Y){L[0]=W;e:for(var he=0,xe=L.length,Ue=xe>>>1;he<Ue;){var He=2*(he+1)-1,Ie=L[He],tt=He+1,dt=L[tt];if(0>l(Ie,W))tt<xe&&0>l(dt,Ie)?(L[he]=dt,L[tt]=W,he=tt):(L[he]=Ie,L[He]=W,he=He);else if(tt<xe&&0>l(dt,W))L[he]=dt,L[tt]=W,he=tt;else break e}}return Y}function l(L,Y){var W=L.sortIndex-Y.sortIndex;return W!==0?W:L.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,M=!1,T=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=L)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function V(L){if(R=!1,P(L),!T)if(i(m)!==null)T=!0,N||(N=!0,$());else{var Y=i(p);Y!==null&&ee(V,Y.startTime-L)}}var N=!1,G=-1,ne=5,D=-1;function C(){return y?!0:!(s.unstable_now()-D<ne)}function H(){if(y=!1,N){var L=s.unstable_now();D=L;var Y=!0;try{e:{T=!1,R&&(R=!1,O(G),G=-1),M=!0;var W=S;try{t:{for(P(L),g=i(m);g!==null&&!(g.expirationTime>L&&C());){var he=g.callback;if(typeof he=="function"){g.callback=null,S=g.priorityLevel;var xe=he(g.expirationTime<=L);if(L=s.unstable_now(),typeof xe=="function"){g.callback=xe,P(L),Y=!0;break t}g===i(m)&&r(m),P(L)}else r(m);g=i(m)}if(g!==null)Y=!0;else{var Ue=i(p);Ue!==null&&ee(V,Ue.startTime-L),Y=!1}}break e}finally{g=null,S=W,M=!1}Y=void 0}}finally{Y?$():N=!1}}}var $;if(typeof w=="function")$=function(){w(H)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=H,$=function(){le.postMessage(null)}}else $=function(){v(H,0)};function ee(L,Y){G=v(function(){L(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(L){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var W=S;S=Y;try{return L()}finally{S=W}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=S;S=L;try{return Y()}finally{S=W}},s.unstable_scheduleCallback=function(L,Y,W){var he=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?he+W:he):W=he,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,L={id:_++,callback:Y,priorityLevel:L,startTime:W,expirationTime:xe,sortIndex:-1},W>he?(L.sortIndex=W,t(p,L),i(m)===null&&L===i(p)&&(R?(O(G),G=-1):R=!0,ee(V,W-he))):(L.sortIndex=xe,t(m,L),T||M||(T=!0,N||(N=!0,$()))),L},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(L){var Y=S;return function(){var W=S;S=Y;try{return L.apply(this,arguments)}finally{S=W}}}})(Zf)),Zf}var hx;function sS(){return hx||(hx=1,Yf.exports=aS()),Yf.exports}var px;function rS(){if(px)return Co;px=1;var s=sS(),t=J_(),i=$_();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,o=f;break}if(E===o){x=!0,o=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,o=c;break}if(E===o){x=!0,o=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),w=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case w:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var ee=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},he=[],xe=-1;function Ue(e){return{current:e}}function He(e){0>xe||(e.current=he[xe],he[xe]=null,xe--)}function Ie(e,n){xe++,he[xe]=e.current,e.current=n}var tt=Ue(null),dt=Ue(null),ce=Ue(null),me=Ue(null);function ye(e,n){switch(Ie(ce,n),Ie(dt,e),Ie(tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Nm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Nm(n),e=Om(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}He(tt),Ie(tt,e)}function Xe(){He(tt),He(dt),He(ce)}function Fe(e){e.memoizedState!==null&&Ie(me,e);var n=tt.current,a=Om(n,e.type);n!==a&&(Ie(dt,e),Ie(tt,a))}function st(e){dt.current===e&&(He(tt),He(dt)),me.current===e&&(He(me),bo._currentValue=W)}var Qt,rt;function xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+rt}var B=!1;function Ne(e,n){if(!e||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(ie){var J=ie}Reflect.construct(e,[],de)}else{try{de.call()}catch(ie){J=ie}e.call(de.prototype)}}else{try{throw Error()}catch(ie){J=ie}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(ie){if(ie&&J&&typeof ie.stack=="string")return[ie.stack,J.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var z=x.split(`
`),K=E.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===K.length)for(o=z.length-1,c=K.length-1;1<=o&&0<=c&&z[o]!==K[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==K[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==K[c]){var oe=`
`+z[o].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=o&&0<=c);break}}}finally{B=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function Ve(e,n){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return xt("Activity");default:return""}}function pt(e){try{var n="",a=null;do n+=Ve(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ce=Object.prototype.hasOwnProperty,Nt=s.unstable_scheduleCallback,We=s.unstable_cancelCallback,at=s.unstable_shouldYield,U=s.unstable_requestPaint,b=s.unstable_now,j=s.unstable_getCurrentPriorityLevel,fe=s.unstable_ImmediatePriority,ge=s.unstable_UserBlockingPriority,ae=s.unstable_NormalPriority,qe=s.unstable_LowPriority,Re=s.unstable_IdlePriority,Ke=s.log,ke=s.unstable_setDisableYieldValue,ve=null,Se=null;function Ye(e){if(typeof Ke=="function"&&ke(e),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(ve,e)}catch{}}var Be=Math.clz32?Math.clz32:F,we=Math.log,nt=Math.LN2;function F(e){return e>>>=0,e===0?32:31-(we(e)/nt|0)|0}var Te=256,be=262144,Ee=4194304;function _e(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?c=_e(o):(x&=E,x!==0?c=_e(x):a||(a=E&~e,a!==0&&(c=_e(a))))):(E=o&~f,E!==0?c=_e(E):x!==0?c=_e(x):a||(a=o&~e,a!==0&&(c=_e(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Oe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var e=Ee;return Ee<<=1,(Ee&62914560)===0&&(Ee=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wn(e,n,a,o,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,z=e.expirationTimes,K=e.hiddenUpdates;for(a=x&~a;0<a;){var oe=31-Be(a),de=1<<oe;E[oe]=0,z[oe]=-1;var J=K[oe];if(J!==null)for(K[oe]=null,oe=0;oe<J.length;oe++){var ie=J[oe];ie!==null&&(ie.lane&=-536870913)}a&=~de}o!==0&&qo(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function qo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Be(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Or(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Be(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Pr(e,n){var a=n&-n;return a=(a&42)!==0?1:_i(a),(a&(e.suspendedLanes|n))!==0?0:a}function _i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:ix(e.type))}function Br(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,hn="__reactProps$"+qn,Ii="__reactContainer$"+qn,Us="__reactEvents$"+qn,Fc="__reactListeners$"+qn,Ic="__reactHandles$"+qn,Yo="__reactResources$"+qn,ns="__reactMarker$"+qn;function Fr(e){delete e[on],delete e[hn],delete e[Us],delete e[Fc],delete e[Ic]}function va(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ii]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Gm(e);e!==null;){if(a=e[on])return a;e=Gm(e)}return n}e=a,a=e.parentNode}return null}function A(e){if(e=e[on]||e[Ii]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function k(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function te(e){var n=e[Yo];return n||(n=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[ns]=!0}var q=new Set,Me={};function Ae(e,n){Le(e,n),Le(e+"Capture",n)}function Le(e,n){for(Me[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},et={};function Ze(e){return Ce.call(et,e)?!0:Ce.call(Je,e)?!1:Pe.test(e)?et[e]=!0:(Je[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function At(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ct(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Pt(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function yt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _a=/[\n"\\]/g;function qt(e){return e.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hi(e,n,a,o,c,f,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mt(n)):e.value!==""+Mt(n)&&(e.value=""+Mt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,x,Mt(n)):a!=null?Mn(e,x,Mt(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Mt(E):e.removeAttribute("name")}function Yt(e,n,a,o,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+Mt(a):"",n=n!=null?""+Mt(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Xt(e)}function Mn(e,n,a){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Mt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+Mt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Mt(a):""}function Cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ee(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Mt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Xt(e)}function wi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Gi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Uh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&wh(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&wh(e,f,n[f])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Ns=null;function Lh(e){var n=A(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Hi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[hn]||null;if(!c)throw Error(r(90));Hi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&yt(o)}break e;case"textarea":yn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var kc=!1;function Nh(e,n,a){if(kc)return e(n,a);kc=!0;try{var o=e(n);return o}finally{if(kc=!1,(Ls!==null||Ns!==null)&&(Pl(),Ls&&(n=Ls,e=Ns,Ns=Ls=null,Lh(n),e)))for(n=0;n<e.length;n++)Lh(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var o=a[hn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(ki)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Xc=!1}var Sa=null,Wc=null,jo=null;function Oh(){if(jo)return jo;var e,n=Wc,a=n.length,o,c="value"in Sa?Sa.value:Sa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return jo=c.slice(e,1<o?1-o:void 0)}function Ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function Ph(){return!1}function Fn(e){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qo:Ph,this.isPropagationStopped=Ph,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=Fn(is),Gr=g({},is,{view:0,detail:0}),Kg=Fn(Gr),qc,Yc,Vr,$o=g({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(qc=e.screenX-Vr.screenX,Yc=e.screenY-Vr.screenY):Yc=qc=0,Vr=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),zh=Fn($o),Qg=g({},$o,{dataTransfer:0}),Jg=Fn(Qg),$g=g({},Gr,{relatedTarget:0}),Zc=Fn($g),ev=g({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=Fn(ev),nv=g({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=Fn(nv),av=g({},is,{data:0}),Bh=Fn(av),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ov[e])?!!n[e]:!1}function jc(){return lv}var cv=g({},Gr,{key:function(e){if(e.key){var n=sv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uv=Fn(cv),fv=g({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Fn(fv),dv=g({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),hv=Fn(dv),pv=g({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=Fn(pv),xv=g({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=Fn(xv),vv=g({},is,{newState:0,oldState:0}),_v=Fn(vv),Sv=[9,13,27,32],Kc=ki&&"CompositionEvent"in window,kr=null;ki&&"documentMode"in document&&(kr=document.documentMode);var Mv=ki&&"TextEvent"in window&&!kr,Ih=ki&&(!Kc||kr&&8<kr&&11>=kr),Hh=" ",Gh=!1;function Vh(e,n){switch(e){case"keyup":return Sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function yv(e,n){switch(e){case"compositionend":return kh(n);case"keypress":return n.which!==32?null:(Gh=!0,Hh);case"textInput":return e=n.data,e===Hh&&Gh?null:e;default:return null}}function bv(e,n){if(Os)return e==="compositionend"||!Kc&&Vh(e,n)?(e=Oh(),jo=Wc=Sa=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ih&&n.locale!=="ko"?null:n.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ev[e.type]:n==="textarea"}function Wh(e,n,a,o){Ls?Ns?Ns.push(o):Ns=[o]:Ls=o,n=Vl(n,"onChange"),0<n.length&&(a=new Jo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function Tv(e){Rm(e,0)}function el(e){var n=k(e);if(yt(n))return e}function qh(e,n){if(e==="change")return n}var Yh=!1;if(ki){var Qc;if(ki){var Jc="oninput"in document;if(!Jc){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Jc=typeof Zh.oninput=="function"}Qc=Jc}else Qc=!1;Yh=Qc&&(!document.documentMode||9<document.documentMode)}function jh(){Xr&&(Xr.detachEvent("onpropertychange",Kh),Wr=Xr=null)}function Kh(e){if(e.propertyName==="value"&&el(Wr)){var n=[];Wh(n,Wr,e,Vc(e)),Nh(Tv,n)}}function Av(e,n,a){e==="focusin"?(jh(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",Kh)):e==="focusout"&&jh()}function Rv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Wr)}function Cv(e,n){if(e==="click")return el(n)}function Dv(e,n){if(e==="input"||e==="change")return el(n)}function wv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:wv;function qr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ce.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function Qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jh(e,n){var a=Qh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qh(a)}}function $h(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$h(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sn(e.document)}return n}function $c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Uv=ki&&"documentMode"in document&&11>=document.documentMode,Ps=null,eu=null,Yr=null,tu=!1;function tp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||Ps==null||Ps!==Sn(o)||(o=Ps,"selectionStart"in o&&$c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yr&&qr(Yr,o)||(Yr=o,o=Vl(eu,"onSelect"),0<o.length&&(n=new Jo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ps)))}function as(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},nu={},np={};ki&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function ss(e){if(nu[e])return nu[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return nu[e]=n[a];return e}var ip=ss("animationend"),ap=ss("animationiteration"),sp=ss("animationstart"),Lv=ss("transitionrun"),Nv=ss("transitionstart"),Ov=ss("transitioncancel"),rp=ss("transitionend"),op=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function Si(e,n){op.set(e,n),Ae(n,[e])}var tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Bs=0,au=0;function nl(){for(var e=Bs,n=au=Bs=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var c=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&lp(a,c,f)}}function il(e,n,a,o){li[Bs++]=e,li[Bs++]=n,li[Bs++]=a,li[Bs++]=o,au|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function su(e,n,a,o){return il(e,n,a,o),al(e)}function rs(e,n){return il(e,null,null,n),al(e)}function lp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Be(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function al(e){if(50<xo)throw xo=0,mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function Pv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new Pv(e,n,a,o)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,o,c,f){var x=0;if(o=e,typeof e=="function")ru(e)&&(x=1);else if(typeof e=="string")x=H_(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Zn(31,a,n,c),e.elementType=D,e.lanes=f,e;case R:return os(a.children,c,f,n);case y:x=8,c|=24;break;case v:return e=Zn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case V:return e=Zn(13,a,n,c),e.elementType=V,e.lanes=f,e;case N:return e=Zn(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:x=10;break e;case O:x=9;break e;case P:x=11;break e;case G:x=14;break e;case ne:x=16,o=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Zn(x,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function os(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function ou(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function up(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function lu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:pt(n)},fp.set(e,n),n)}return{value:e,source:n,stack:pt(n)}}var Is=[],Hs=0,rl=null,Zr=0,ui=[],fi=0,Ma=null,Ui=1,Li="";function Wi(e,n){Is[Hs++]=Zr,Is[Hs++]=rl,rl=e,Zr=n}function dp(e,n,a){ui[fi++]=Ui,ui[fi++]=Li,ui[fi++]=Ma,Ma=e;var o=Ui;e=Li;var c=32-Be(o)-1;o&=~(1<<c),a+=1;var f=32-Be(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ui=1<<32-Be(n)+c|a<<c|o,Li=f+e}else Ui=1<<f|a<<c|o,Li=e}function cu(e){e.return!==null&&(Wi(e,1),dp(e,1,0))}function uu(e){for(;e===rl;)rl=Is[--Hs],Is[Hs]=null,Zr=Is[--Hs],Is[Hs]=null;for(;e===Ma;)Ma=ui[--fi],ui[fi]=null,Li=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null}function hp(e,n){ui[fi++]=Ui,ui[fi++]=Li,ui[fi++]=Ma,Ui=n.id,Li=n.overflow,Ma=e}var Dn=null,Zt=null,bt=!1,ya=null,di=!1,fu=Error(r(519));function ba(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(ci(n,e)),fu}function pp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[hn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)vt(vo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Yt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Um(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ba(e,!0)}function mp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Dn=Dn.return}}function Gs(e){if(e!==Dn)return!1;if(!bt)return mp(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wf(e.type,e.memoizedProps)),a=!a),a&&Zt&&ba(e),mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=Hm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=Hm(e)}else n===27?(n=Zt,Ba(e.type)?(e=Pf,Pf=null,Zt=e):Zt=n):Zt=Dn?pi(e.stateNode.nextSibling):null;return!0}function ls(){Zt=Dn=null,bt=!1}function du(){var e=ya;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ya=null),e}function jr(e){ya===null?ya=[e]:ya.push(e)}var hu=Ue(null),cs=null,qi=null;function Ea(e,n,a){Ie(hu,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=hu.current,He(hu)}function pu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function mu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),pu(f.return,a,e),o||(x=null);break e}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),pu(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Vs(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;Yn(c.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(c===me.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}c=c.return}e!==null&&mu(n,e,a,o),n.flags|=262144}function ol(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){cs=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return xp(cs,e)}function ll(e,n){return cs===null&&us(e),xp(e,n)}function xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(r(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var zv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Bv=s.unstable_scheduleCallback,Fv=s.unstable_NormalPriority,ln={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new zv,data:new Map,refCount:0}}function Kr(e){e.refCount--,e.refCount===0&&Bv(Fv,function(){e.controller.abort()})}var Qr=null,gu=0,ks=0,Xs=null;function Iv(e,n){if(Qr===null){var a=Qr=[];gu=0,ks=Mf(),Xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return gu++,n.then(gp,gp),n}function gp(){if(--gu===0&&Qr!==null){Xs!==null&&(Xs.status="fulfilled");var e=Qr;Qr=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Hv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var vp=L.S;L.S=function(e,n){tm=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Iv(e,n),vp!==null&&vp(e,n)};var fs=Ue(null);function vu(){var e=fs.current;return e!==null?e:Wt.pooledCache}function cl(e,n){n===null?Ie(fs,fs.current):Ie(fs,n.pool)}function _p(){var e=vu();return e===null?null:{parent:ln._currentValue,pool:e}}var Ws=Error(r(460)),_u=Error(r(474)),ul=Error(r(542)),fl={then:function(){}};function Sp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e}throw hs=n,Ws}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,Ws):a}}var hs=null;function yp(){if(hs===null)throw Error(r(459));var e=hs;return hs=null,e}function bp(e){if(e===Ws||e===ul)throw Error(r(483))}var qs=null,Jr=0;function dl(e){var n=Jr;return Jr+=1,qs===null&&(qs=[]),Mp(qs,e,n)}function $r(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function hl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ep(e){function n(X,I){if(e){var Z=X.deletions;Z===null?(X.deletions=[I],X.flags|=16):Z.push(I)}}function a(X,I){if(!e)return null;for(;I!==null;)n(X,I),I=I.sibling;return null}function o(X){for(var I=new Map;X!==null;)X.key!==null?I.set(X.key,X):I.set(X.index,X),X=X.sibling;return I}function c(X,I){return X=Xi(X,I),X.index=0,X.sibling=null,X}function f(X,I,Z){return X.index=Z,e?(Z=X.alternate,Z!==null?(Z=Z.index,Z<I?(X.flags|=67108866,I):Z):(X.flags|=67108866,I)):(X.flags|=1048576,I)}function x(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function E(X,I,Z,ue){return I===null||I.tag!==6?(I=ou(Z,X.mode,ue),I.return=X,I):(I=c(I,Z),I.return=X,I)}function z(X,I,Z,ue){var je=Z.type;return je===R?oe(X,I,Z.props.children,ue,Z.key):I!==null&&(I.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&ds(je)===I.type)?(I=c(I,Z.props),$r(I,Z),I.return=X,I):(I=sl(Z.type,Z.key,Z.props,null,X.mode,ue),$r(I,Z),I.return=X,I)}function K(X,I,Z,ue){return I===null||I.tag!==4||I.stateNode.containerInfo!==Z.containerInfo||I.stateNode.implementation!==Z.implementation?(I=lu(Z,X.mode,ue),I.return=X,I):(I=c(I,Z.children||[]),I.return=X,I)}function oe(X,I,Z,ue,je){return I===null||I.tag!==7?(I=os(Z,X.mode,ue,je),I.return=X,I):(I=c(I,Z),I.return=X,I)}function de(X,I,Z){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=ou(""+I,X.mode,Z),I.return=X,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case M:return Z=sl(I.type,I.key,I.props,null,X.mode,Z),$r(Z,I),Z.return=X,Z;case T:return I=lu(I,X.mode,Z),I.return=X,I;case ne:return I=ds(I),de(X,I,Z)}if(ee(I)||$(I))return I=os(I,X.mode,Z,null),I.return=X,I;if(typeof I.then=="function")return de(X,dl(I),Z);if(I.$$typeof===w)return de(X,ll(X,I),Z);hl(X,I)}return null}function J(X,I,Z,ue){var je=I!==null?I.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return je!==null?null:E(X,I,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return Z.key===je?z(X,I,Z,ue):null;case T:return Z.key===je?K(X,I,Z,ue):null;case ne:return Z=ds(Z),J(X,I,Z,ue)}if(ee(Z)||$(Z))return je!==null?null:oe(X,I,Z,ue,null);if(typeof Z.then=="function")return J(X,I,dl(Z),ue);if(Z.$$typeof===w)return J(X,I,ll(X,Z),ue);hl(X,Z)}return null}function ie(X,I,Z,ue,je){if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return X=X.get(Z)||null,E(I,X,""+ue,je);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case M:return X=X.get(ue.key===null?Z:ue.key)||null,z(I,X,ue,je);case T:return X=X.get(ue.key===null?Z:ue.key)||null,K(I,X,ue,je);case ne:return ue=ds(ue),ie(X,I,Z,ue,je)}if(ee(ue)||$(ue))return X=X.get(Z)||null,oe(I,X,ue,je,null);if(typeof ue.then=="function")return ie(X,I,Z,dl(ue),je);if(ue.$$typeof===w)return ie(X,I,Z,ll(I,ue),je);hl(I,ue)}return null}function ze(X,I,Z,ue){for(var je=null,Dt=null,Ge=I,ut=I=0,St=null;Ge!==null&&ut<Z.length;ut++){Ge.index>ut?(St=Ge,Ge=null):St=Ge.sibling;var wt=J(X,Ge,Z[ut],ue);if(wt===null){Ge===null&&(Ge=St);break}e&&Ge&&wt.alternate===null&&n(X,Ge),I=f(wt,I,ut),Dt===null?je=wt:Dt.sibling=wt,Dt=wt,Ge=St}if(ut===Z.length)return a(X,Ge),bt&&Wi(X,ut),je;if(Ge===null){for(;ut<Z.length;ut++)Ge=de(X,Z[ut],ue),Ge!==null&&(I=f(Ge,I,ut),Dt===null?je=Ge:Dt.sibling=Ge,Dt=Ge);return bt&&Wi(X,ut),je}for(Ge=o(Ge);ut<Z.length;ut++)St=ie(Ge,X,ut,Z[ut],ue),St!==null&&(e&&St.alternate!==null&&Ge.delete(St.key===null?ut:St.key),I=f(St,I,ut),Dt===null?je=St:Dt.sibling=St,Dt=St);return e&&Ge.forEach(function(Va){return n(X,Va)}),bt&&Wi(X,ut),je}function $e(X,I,Z,ue){if(Z==null)throw Error(r(151));for(var je=null,Dt=null,Ge=I,ut=I=0,St=null,wt=Z.next();Ge!==null&&!wt.done;ut++,wt=Z.next()){Ge.index>ut?(St=Ge,Ge=null):St=Ge.sibling;var Va=J(X,Ge,wt.value,ue);if(Va===null){Ge===null&&(Ge=St);break}e&&Ge&&Va.alternate===null&&n(X,Ge),I=f(Va,I,ut),Dt===null?je=Va:Dt.sibling=Va,Dt=Va,Ge=St}if(wt.done)return a(X,Ge),bt&&Wi(X,ut),je;if(Ge===null){for(;!wt.done;ut++,wt=Z.next())wt=de(X,wt.value,ue),wt!==null&&(I=f(wt,I,ut),Dt===null?je=wt:Dt.sibling=wt,Dt=wt);return bt&&Wi(X,ut),je}for(Ge=o(Ge);!wt.done;ut++,wt=Z.next())wt=ie(Ge,X,ut,wt.value,ue),wt!==null&&(e&&wt.alternate!==null&&Ge.delete(wt.key===null?ut:wt.key),I=f(wt,I,ut),Dt===null?je=wt:Dt.sibling=wt,Dt=wt);return e&&Ge.forEach(function(Q_){return n(X,Q_)}),bt&&Wi(X,ut),je}function Vt(X,I,Z,ue){if(typeof Z=="object"&&Z!==null&&Z.type===R&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:e:{for(var je=Z.key;I!==null;){if(I.key===je){if(je=Z.type,je===R){if(I.tag===7){a(X,I.sibling),ue=c(I,Z.props.children),ue.return=X,X=ue;break e}}else if(I.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&ds(je)===I.type){a(X,I.sibling),ue=c(I,Z.props),$r(ue,Z),ue.return=X,X=ue;break e}a(X,I);break}else n(X,I);I=I.sibling}Z.type===R?(ue=os(Z.props.children,X.mode,ue,Z.key),ue.return=X,X=ue):(ue=sl(Z.type,Z.key,Z.props,null,X.mode,ue),$r(ue,Z),ue.return=X,X=ue)}return x(X);case T:e:{for(je=Z.key;I!==null;){if(I.key===je)if(I.tag===4&&I.stateNode.containerInfo===Z.containerInfo&&I.stateNode.implementation===Z.implementation){a(X,I.sibling),ue=c(I,Z.children||[]),ue.return=X,X=ue;break e}else{a(X,I);break}else n(X,I);I=I.sibling}ue=lu(Z,X.mode,ue),ue.return=X,X=ue}return x(X);case ne:return Z=ds(Z),Vt(X,I,Z,ue)}if(ee(Z))return ze(X,I,Z,ue);if($(Z)){if(je=$(Z),typeof je!="function")throw Error(r(150));return Z=je.call(Z),$e(X,I,Z,ue)}if(typeof Z.then=="function")return Vt(X,I,dl(Z),ue);if(Z.$$typeof===w)return Vt(X,I,ll(X,Z),ue);hl(X,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,I!==null&&I.tag===6?(a(X,I.sibling),ue=c(I,Z),ue.return=X,X=ue):(a(X,I),ue=ou(Z,X.mode,ue),ue.return=X,X=ue),x(X)):a(X,I)}return function(X,I,Z,ue){try{Jr=0;var je=Vt(X,I,Z,ue);return qs=null,je}catch(Ge){if(Ge===Ws||Ge===ul)throw Ge;var Dt=Zn(29,Ge,null,X.mode);return Dt.lanes=ue,Dt.return=X,Dt}finally{}}}var ps=Ep(!0),Tp=Ep(!1),Ta=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=al(e),lp(e,null,a),n}return il(e,o,n,a),al(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Or(e,a)}}function yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function to(){if(bu){var e=Xs;if(e!==null)throw e}}function no(e,n,a,o){bu=!1;var c=e.updateQueue;Ta=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,K=z.next;z.next=null,x===null?f=K:x.next=K,x=z;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,E=oe.lastBaseUpdate,E!==x&&(E===null?oe.firstBaseUpdate=K:E.next=K,oe.lastBaseUpdate=z))}if(f!==null){var de=c.baseState;x=0,oe=K=z=null,E=f;do{var J=E.lane&-536870913,ie=J!==E.lane;if(ie?(_t&J)===J:(o&J)===J){J!==0&&J===ks&&(bu=!0),oe!==null&&(oe=oe.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ze=e,$e=E;J=n;var Vt=a;switch($e.tag){case 1:if(ze=$e.payload,typeof ze=="function"){de=ze.call(Vt,de,J);break e}de=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=$e.payload,J=typeof ze=="function"?ze.call(Vt,de,J):ze,J==null)break e;de=g({},de,J);break e;case 2:Ta=!0}}J=E.callback,J!==null&&(e.flags|=64,ie&&(e.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[J]:ie.push(J))}else ie={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},oe===null?(K=oe=ie,z=de):oe=oe.next=ie,x|=J;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ie=E,E=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);oe===null&&(z=de),c.baseState=z,c.firstBaseUpdate=K,c.lastBaseUpdate=oe,f===null&&(c.shared.lanes=0),La|=x,e.lanes=x,e.memoizedState=de}}function Ap(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],n)}var Ys=Ue(null),pl=Ue(0);function Cp(e,n){e=na,Ie(pl,e),Ie(Ys,n),na=e|n.baseLanes}function Eu(){Ie(pl,na),Ie(Ys,Ys.current)}function Tu(){na=pl.current,He(Ys),He(pl)}var jn=Ue(null),hi=null;function Ca(e){var n=e.alternate;Ie(en,en.current&1),Ie(jn,e),hi===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(hi=e)}function Au(e){Ie(en,en.current),Ie(jn,e),hi===null&&(hi=e)}function Dp(e){e.tag===22?(Ie(en,en.current),Ie(jn,e),hi===null&&(hi=e)):Da()}function Da(){Ie(en,en.current),Ie(jn,jn.current)}function Kn(e){He(jn),hi===e&&(hi=null),He(en)}var en=Ue(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ot=null,Ht=null,cn=null,xl=!1,Zs=!1,ms=!1,gl=0,io=0,js=null,Gv=0;function Jt(){throw Error(r(321))}function Ru(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Cu(e,n,a,o,c,f){return Zi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?d0:ku,ms=!1,f=a(o,c),ms=!1,Zs&&(f=Up(n,a,o,c)),wp(e),f}function wp(e){L.H=ro;var n=Ht!==null&&Ht.next!==null;if(Zi=0,cn=Ht=ot=null,xl=!1,io=0,js=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&ol(e)&&(un=!0))}function Up(e,n,a,o){ot=e;var c=0;do{if(Zs&&(js=null),io=0,Zs=!1,25<=c)throw Error(r(301));if(c+=1,cn=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=h0,f=n(a,o)}while(Zs);return f}function Vv(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(ot.flags|=1024),n}function Du(){var e=gl!==0;return gl=0,e}function wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Uu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}Zi=0,cn=Ht=ot=null,Zs=!1,io=gl=0,js=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ot.memoizedState=cn=e:cn=cn.next=e,cn}function tn(){if(Ht===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=cn===null?ot.memoizedState:cn.next;if(n!==null)cn=n,Ht=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},cn===null?ot.memoizedState=cn=e:cn=cn.next=e}return cn}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,js===null&&(js=[]),e=Mp(js,e,n),n=ot,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?d0:ku),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===w)return wn(e)}throw Error(r(438,String(e)))}function Lu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=tn();return Nu(n,Ht,e)}function Nu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=x=null,z=null,K=n,oe=!1;do{var de=K.lane&-536870913;if(de!==K.lane?(_t&de)===de:(Zi&de)===de){var J=K.revertLane;if(J===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),de===ks&&(oe=!0);else if((Zi&J)===J){K=K.next,J===ks&&(oe=!0);continue}else de={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},z===null?(E=z=de,x=f):z=z.next=de,ot.lanes|=J,La|=J;de=K.action,ms&&a(f,de),f=K.hasEagerState?K.eagerState:a(f,de)}else J={lane:de,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},z===null?(E=z=J,x=f):z=z.next=J,ot.lanes|=de,La|=de;K=K.next}while(K!==null&&K!==n);if(z===null?x=f:z.next=E,!Yn(f,e.memoizedState)&&(un=!0,oe&&(a=Xs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=z,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ou(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Lp(e,n,a){var o=ot,c=tn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((Ht||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,Bu(Pp.bind(null,o,c,e),[e]),c.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Ks(9,{destroy:void 0},Op.bind(null,o,c,a,n),null),Wt===null)throw Error(r(349));f||(Zi&127)!==0||Np(o,n,a)}return a}function Np(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=vl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Op(e,n,a,o){n.value=a,n.getSnapshot=o,zp(n)&&Bp(e)}function Pp(e,n,a){return a(function(){zp(n)&&Bp(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Bp(e){var n=rs(e,2);n!==null&&kn(n,e,2)}function Pu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),ms){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function Fp(e,n,a,o){return e.baseState=a,Nu(e,Ht,typeof o=="function"?o:ji)}function kv(e,n,a,o,c){if(bl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=L.T,x={};L.T=x;try{var E=a(c,o),z=L.S;z!==null&&z(x,E),Hp(e,n,E)}catch(K){zu(e,n,K)}finally{f!==null&&x.types!==null&&(f.types=x.types),L.T=f}}else try{f=a(c,o),Hp(e,n,f)}catch(K){zu(e,n,K)}}function Hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Gp(e,n,o)},function(o){return zu(e,n,o)}):Gp(e,n,a)}function Gp(e,n,a){n.status="fulfilled",n.value=a,Vp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ip(e,a)))}function zu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Vp(n),n=n.next;while(n!==o)}e.action=null}function Vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function Xp(e,n){if(bt){var a=Wt.formState;if(a!==null){e:{var o=ot;if(bt){if(Zt){t:{for(var c=Zt,f=di;c.nodeType!==8;){if(!f){c=null;break t}if(c=pi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=pi(c.nextSibling),o=c.data==="F!";break e}}ba(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=o,a=c0.bind(null,ot,o),o.dispatch=a,o=Pu(!1),f=Vu.bind(null,ot,!1,o.queue),o=zn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=kv.bind(null,ot,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Wp(e){var n=tn();return qp(n,Ht,e)}function qp(e,n,a){if(n=Nu(e,n,kp)[0],e=Sl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(x){throw x===Ws?ul:x}else o=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,Ks(9,{destroy:void 0},Xv.bind(null,c,a),null)),[o,f,e]}function Xv(e,n){e.action=n}function Yp(e){var n=tn(),a=Ht;if(a!==null)return qp(n,a,e);tn(),n=n.memoizedState,a=tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ks(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=vl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Zp(){return tn().memoizedState}function Ml(e,n,a,o){var c=zn();ot.flags|=e,c.memoizedState=Ks(1|n,{destroy:void 0},a,o===void 0?null:o)}function yl(e,n,a,o){var c=tn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ht!==null&&o!==null&&Ru(o,Ht.memoizedState.deps)?c.memoizedState=Ks(n,f,a,o):(ot.flags|=e,c.memoizedState=Ks(1|n,f,a,o))}function jp(e,n){Ml(8390656,8,e,n)}function Bu(e,n){yl(2048,8,e,n)}function Wv(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=vl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Kp(e){var n=tn().memoizedState;return Wv({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qp(e,n){return yl(4,2,e,n)}function Jp(e,n){return yl(4,4,e,n)}function $p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function e0(e,n,a){a=a!=null?a.concat([e]):null,yl(4,4,$p.bind(null,n,e),a)}function Fu(){}function t0(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ru(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function n0(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ru(n,o[1]))return o[0];if(o=e(),ms){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[o,n],o}function Iu(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=im(),ot.lanes|=e,La|=e,a)}function i0(e,n,a,o){return Yn(a,n)?a:Ys.current!==null?(e=Iu(e,a,o),Yn(e,n)||(un=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(_t&261930)===0?(un=!0,e.memoizedState=a):(e=im(),ot.lanes|=e,La|=e,n)}function a0(e,n,a,o,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var x=L.T,E={};L.T=E,Vu(e,!1,n,a);try{var z=c(),K=L.S;if(K!==null&&K(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=Hv(z,o);so(e,n,oe,$n(e))}else so(e,n,o,$n(e))}catch(de){so(e,n,{then:function(){},status:"rejected",reason:de},$n())}finally{Y.p=f,x!==null&&E.types!==null&&(x.types=E.types),L.T=x}}function qv(){}function Hu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=s0(e).queue;a0(e,c,n,W,a===null?qv:function(){return r0(e),a(o)})}function s0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function r0(e){var n=s0(e);n.next===null&&(n=e.alternate.memoizedState),so(e,n.next.queue,{},$n())}function Gu(){return wn(bo)}function o0(){return tn().memoizedState}function l0(){return tn().memoizedState}function Yv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Aa(a);var o=Ra(n,e,a);o!==null&&(kn(o,n,a),eo(o,n,a)),n={cache:xu()},e.payload=n;return}n=n.return}}function Zv(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?u0(n,a):(a=su(e,n,a,o),a!==null&&(kn(a,e,o),f0(a,n,o)))}function c0(e,n,a){var o=$n();so(e,n,a,o)}function so(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))u0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,x))return il(e,n,c,0),Wt===null&&nl(),!1}catch{}finally{}if(a=su(e,n,c,o),a!==null)return kn(a,e,o),f0(a,n,o),!0}return!1}function Vu(e,n,a,o){if(o={lane:2,revertLane:Mf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(r(479))}else n=su(e,a,o,2),n!==null&&kn(n,e,2)}function bl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function u0(e,n){Zs=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function f0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Or(e,a)}}var ro={readContext:wn,use:_l,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};ro.useEffectEvent=Jt;var d0={readContext:wn,use:_l,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,$p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(ms){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var c=a(n);if(ms){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Zv.bind(null,ot,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pu(e);var n=e.queue,a=c0.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(e,n){var a=zn();return Iu(a,e,n)},useTransition:function(){var e=Pu(!1);return e=a0.bind(null,ot,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ot,c=zn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(_t&127)!==0||Np(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,jp(Pp.bind(null,o,f,e),[e]),o.flags|=2048,Ks(9,{destroy:void 0},Op.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=Wt.identifierPrefix;if(bt){var a=Li,o=Ui;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Gv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lu,useCacheRefresh:function(){return zn().memoizedState=Yv.bind(null,ot)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:wn,use:_l,useCallback:t0,useContext:wn,useEffect:Bu,useImperativeHandle:e0,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:n0,useReducer:Sl,useRef:Zp,useState:function(){return Sl(ji)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=tn();return i0(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Sl(ji)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Lp,useId:o0,useHostTransitionStatus:Gu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=tn();return Fp(a,Ht,e,n)},useMemoCache:Lu,useCacheRefresh:l0};ku.useEffectEvent=Kp;var h0={readContext:wn,use:_l,useCallback:t0,useContext:wn,useEffect:Bu,useImperativeHandle:e0,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:n0,useReducer:Ou,useRef:Zp,useState:function(){return Ou(ji)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=tn();return Ht===null?Iu(a,e,n):i0(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Ou(ji)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Lp,useId:o0,useHostTransitionStatus:Gu,useFormState:Yp,useActionState:Yp,useOptimistic:function(e,n){var a=tn();return Ht!==null?Fp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:l0};h0.useEffectEvent=Kp;function Xu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Aa(o);c.payload=n,a!=null&&(c.callback=a),n=Ra(e,c,o),n!==null&&(kn(n,e,o),eo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Aa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ra(e,c,o),n!==null&&(kn(n,e,o),eo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=Aa(a);o.tag=2,n!=null&&(o.callback=n),n=Ra(e,o,a),n!==null&&(kn(n,e,a),eo(n,e,a))}};function p0(e,n,a,o,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!qr(a,o)||!qr(c,f):!0}function m0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Wu.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function x0(e){tl(e)}function g0(e){console.error(e)}function v0(e){tl(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(e,n,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function S0(e){return e=Aa(e),e.tag=3,e}function M0(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){_0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){_0(n,a,o),typeof c!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function jv(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?zl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===fl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),vf(e,o,c)),!1;case 22:return a.flags|=65536,o===fl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),vf(e,o,c)),!1}throw Error(r(435,a.tag))}return vf(e,o,c),zl(),!1}if(bt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==fu&&(e=Error(r(422),{cause:o}),jr(ci(e,a)))):(o!==fu&&(n=Error(r(423),{cause:o}),jr(ci(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ci(o,a),c=qu(e.stateNode,o,c),yu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:o});if(f=ci(f,a),mo===null?mo=[f]:mo.push(f),$t!==4&&($t=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=qu(a.stateNode,o,e),yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=S0(c),M0(c,e,a,o),yu(a,c),!1}a=a.return}while(a!==null);return!1}var Yu=Error(r(461)),un=!1;function Un(e,n,a,o){n.child=e===null?Tp(n,null,a,o):ps(n,e.child,a,o)}function y0(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var E in o)E!=="ref"&&(x[E]=o[E])}else x=o;return us(n),o=Cu(e,n,a,x,f,c),E=Du(),e!==null&&!un?(wu(e,n,c),Ki(e,n,c)):(bt&&E&&cu(n),n.flags|=1,Un(e,n,o,c),n.child)}function b0(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,E0(e,n,f,o,c)):(e=sl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!tf(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(x,o)&&e.ref===n.ref)return Ki(e,n,c)}return n.flags|=1,e=Xi(f,o),e.ref=n.ref,e.return=n,n.child=e}function E0(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(qr(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,tf(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Ki(e,n,c)}return Zu(e,n,a,o,c)}function T0(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return A0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(n,f!==null?f.cachePool:null),f!==null?Cp(n,f):Eu(),Dp(n);else return o=n.lanes=536870912,A0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(cl(n,f.cachePool),Cp(n,f),Da(),n.memoizedState=null):(e!==null&&cl(n,null),Eu(),Da());return Un(e,n,c,a),n.child}function oo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function A0(e,n,a,o,c){var f=vu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&cl(n,null),Eu(),Dp(n),e!==null&&Vs(e,n,o,!0),n.childLanes=c,null}function Tl(e,n){return n=Rl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function R0(e,n,a){return ps(n,e.child,null,a),e=Tl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Kv(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(o.mode==="hidden")return e=Tl(n,o),n.lanes=536870912,oo(null,e);if(Au(n),(e=Zt)?(e=Im(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=up(e),a.return=n,n.child=a,Dn=n,Zt=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return Tl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Au(n),c)if(n.flags&256)n.flags&=-257,n=R0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Vs(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(o=Wt,o!==null&&(x=Pr(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,rs(e,x),kn(o,e,x),Yu;zl(),n=R0(e,n,a)}else e=f.treeContext,Zt=pi(x.nextSibling),Dn=n,bt=!0,ya=null,di=!1,e!==null&&hp(n,e),n=Tl(n,o),n.flags|=4096;return n}return e=Xi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Al(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zu(e,n,a,o,c){return us(n),a=Cu(e,n,a,o,void 0,c),o=Du(),e!==null&&!un?(wu(e,n,c),Ki(e,n,c)):(bt&&o&&cu(n),n.flags|=1,Un(e,n,a,c),n.child)}function C0(e,n,a,o,c,f){return us(n),n.updateQueue=null,a=Up(n,o,a,c),wp(e),o=Du(),e!==null&&!un?(wu(e,n,f),Ki(e,n,f)):(bt&&o&&cu(n),n.flags|=1,Un(e,n,a,f),n.child)}function D0(e,n,a,o,c){if(us(n),n.stateNode===null){var f=Fs,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Su(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):Fs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Xu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Wu.enqueueReplaceState(f,f.state,null),no(n,o,f,c),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,z=xs(a,E);f.props=z;var K=f.context,oe=a.contextType;x=Fs,typeof oe=="object"&&oe!==null&&(x=wn(oe));var de=a.getDerivedStateFromProps;oe=typeof de=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,oe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||K!==x)&&m0(n,f,o,x),Ta=!1;var J=n.memoizedState;f.state=J,no(n,o,f,c),to(),K=n.memoizedState,E||J!==K||Ta?(typeof de=="function"&&(Xu(n,a,de,o),K=n.memoizedState),(z=Ta||p0(n,a,z,o,J,K,x))?(oe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=K),f.props=o,f.state=K,f.context=x,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Mu(e,n),x=n.memoizedProps,oe=xs(a,x),f.props=oe,de=n.pendingProps,J=f.context,K=a.contextType,z=Fs,typeof K=="object"&&K!==null&&(z=wn(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==de||J!==z)&&m0(n,f,o,z),Ta=!1,J=n.memoizedState,f.state=J,no(n,o,f,c),to();var ie=n.memoizedState;x!==de||J!==ie||Ta||e!==null&&e.dependencies!==null&&ol(e.dependencies)?(typeof E=="function"&&(Xu(n,a,E,o),ie=n.memoizedState),(oe=Ta||p0(n,a,oe,o,J,ie,z)||e!==null&&e.dependencies!==null&&ol(e.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ie,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ie,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=z,o=oe):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Al(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ps(n,e.child,null,c),n.child=ps(n,null,a,c)):Un(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ki(e,n,c),e}function w0(e,n,a,o){return ls(),n.flags|=256,Un(e,n,a,o),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(e){return{baseLanes:e,cachePool:_p()}}function Qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function U0(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(c?Ca(n):Da(),(e=Zt)?(e=Im(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=up(e),a.return=n,n.child=a,Dn=n,Zt=null)):e=null,e===null)throw ba(n);return Of(e)?n.lanes=32:n.lanes=536870912,null}var E=o.children;return o=o.fallback,c?(Da(),c=n.mode,E=Rl({mode:"hidden",children:E},c),o=os(o,c,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,o=n.child,o.memoizedState=Ku(a),o.childLanes=Qu(e,x,a),n.memoizedState=ju,oo(null,o)):(Ca(n),Ju(n,E))}var z=e.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ca(n),n.flags&=-257,n=$u(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),E=o.fallback,c=n.mode,o=Rl({mode:"visible",children:o.children},c),E=os(E,c,a,null),E.flags|=2,o.return=n,E.return=n,o.sibling=E,n.child=o,ps(n,e.child,null,a),o=n.child,o.memoizedState=Ku(a),o.childLanes=Qu(e,x,a),n.memoizedState=ju,n=oo(null,o));else if(Ca(n),Of(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var K=x.dgst;x=K,o=Error(r(419)),o.stack="",o.digest=x,jr({value:o,source:null,stack:null}),n=$u(e,n,a)}else if(un||Vs(e,n,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=Wt,x!==null&&(o=Pr(x,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,rs(e,o),kn(x,e,o),Yu;Nf(E)||zl(),n=$u(e,n,a)}else Nf(E)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Zt=pi(E.nextSibling),Dn=n,bt=!0,ya=null,di=!1,e!==null&&hp(n,e),n=Ju(n,o.children),n.flags|=4096);return n}return c?(Da(),E=o.fallback,c=n.mode,z=e.child,K=z.sibling,o=Xi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,K!==null?E=Xi(K,E):(E=os(E,c,a,null),E.flags|=2),E.return=n,o.return=n,o.sibling=E,n.child=o,oo(null,o),o=n.child,E=e.child.memoizedState,E===null?E=Ku(a):(c=E.cachePool,c!==null?(z=ln._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=_p(),E={baseLanes:E.baseLanes|a,cachePool:c}),o.memoizedState=E,o.childLanes=Qu(e,x,a),n.memoizedState=ju,oo(e.child,o)):(Ca(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Ju(e,n){return n=Rl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function $u(e,n,a){return ps(n,e.child,null,a),e=Ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function L0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),pu(e.return,n,a)}function ef(e,n,a,o,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function N0(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=en.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,Ie(en,x),Un(e,n,o,a),o=bt?Zr:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&L0(e,a,n);else if(e.tag===19)L0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ef(n,!0,a,null,f,o);break;case"together":ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ol(e)))}function Qv(e,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ea(n,ln,e.memoizedState.cache),ls();break;case 27:case 5:Fe(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Au(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?U0(e,n,a):(Ca(n),e=Ki(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Vs(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return N0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ie(en,en.current),o)break;return null;case 22:return n.lanes=0,T0(e,n,a,n.pendingProps);case 24:Ea(n,ln,e.memoizedState.cache)}return Ki(e,n,a)}function O0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!tf(e,a)&&(n.flags&128)===0)return un=!1,Qv(e,n,a);un=(e.flags&131072)!==0}else un=!1,bt&&(n.flags&1048576)!==0&&dp(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")ru(e)?(o=xs(e,o),n.tag=1,n=D0(null,n,e,o,a)):(n.tag=0,n=Zu(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===P){n.tag=11,n=y0(null,n,e,o,a);break e}else if(c===G){n.tag=14,n=b0(null,n,e,o,a);break e}}throw n=le(e)||e,Error(r(306,n,""))}}return n;case 0:return Zu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=xs(o,n.pendingProps),D0(e,n,o,c,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(e,n),no(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ea(n,ln,o),o!==f.cache&&mu(n,[ln],a,!0),to(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=w0(e,n,o,a);break e}else if(o!==c){c=ci(Error(r(424)),n),jr(c),n=w0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=pi(e.firstChild),Dn=n,bt=!0,ya=null,di=!0,a=Tp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ls(),o===c){n=Ki(e,n,a);break e}Un(e,n,o,a)}n=n.child}return n;case 26:return Al(e,n),e===null?(a=Wm(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,o=kl(ce.current).createElement(a),o[on]=n,o[hn]=e,Ln(o,a,e),Q(o),n.stateNode=o):n.memoizedState=Wm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Fe(n),e===null&&bt&&(o=n.stateNode=Vm(n.type,n.pendingProps,ce.current),Dn=n,di=!0,c=Zt,Ba(n.type)?(Pf=c,Zt=pi(o.firstChild)):Zt=c),Un(e,n,n.pendingProps.children,a),Al(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((c=o=Zt)&&(o=R_(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Dn=n,Zt=pi(o.firstChild),di=!1,c=!0):c=!1),c||ba(n)),Fe(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,wf(c,f)?o=null:x!==null&&wf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(e,n,Vv,null,null,a),bo._currentValue=c),Al(e,n),Un(e,n,o,a),n.child;case 6:return e===null&&bt&&((e=a=Zt)&&(a=C_(a,n.pendingProps,di),a!==null?(n.stateNode=a,Dn=n,Zt=null,e=!0):e=!1),e||ba(n)),null;case 13:return U0(e,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ps(n,null,o,a):Un(e,n,o,a),n.child;case 11:return y0(e,n,n.type,n.pendingProps,a);case 7:return Un(e,n,n.pendingProps,a),n.child;case 8:return Un(e,n,n.pendingProps.children,a),n.child;case 12:return Un(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),Un(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,us(n),c=wn(c),o=o(c),n.flags|=1,Un(e,n,o,a),n.child;case 14:return b0(e,n,n.type,n.pendingProps,a);case 15:return E0(e,n,n.type,n.pendingProps,a);case 19:return N0(e,n,a);case 31:return Kv(e,n,a);case 22:return T0(e,n,a,n.pendingProps);case 24:return us(n),o=wn(ln),e===null?(c=vu(),c===null&&(c=Wt,f=xu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Su(n),Ea(n,ln,c)):((e.lanes&a)!==0&&(Mu(e,n),no(n,null,null,a),to()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ea(n,ln,o)):(o=f.cache,Ea(n,ln,o),o!==c.cache&&mu(n,[ln],a,!0))),Un(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(e){e.flags|=4}function nf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(om())e.flags|=8192;else throw hs=fl,_u}else e.flags&=-16777217}function P0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Km(n))if(om())e.flags|=8192;else throw hs=fl,_u}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?It():536870912,e.lanes|=n,er|=n)}function lo(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Jv(e,n,a){var o=n.pendingProps;switch(uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(ln),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),jt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Qi(n),f!==null?(jt(n),P0(n,f)):(jt(n),nf(n,c,null,o,a))):f?f!==e.memoizedState?(Qi(n),jt(n),P0(n,f)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Qi(n),jt(n),nf(n,c,e,o,a)),null;case 27:if(st(n),a=ce.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}e=tt.current,Gs(n)?pp(n):(e=Vm(c,o,a),n.stateNode=e,Qi(n))}return jt(n),null;case 5:if(st(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(f=tt.current,Gs(n))pp(n);else{var x=kl(ce.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[on]=n,f[hn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Ln(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Qi(n)}}return jt(n),nf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ce.current,Gs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Um(e.nodeValue,a)),e||ba(n,!0)}else e=kl(e).createTextNode(o),e[on]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Gs(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Gs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),jt(n),null);case 4:return Xe(),e===null&&Tf(n.stateNode.containerInfo),jt(n),null;case 10:return Yi(n.type),jt(n),null;case 19:if(He(en),o=n.memoizedState,o===null)return jt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)lo(o,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,lo(o,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cp(a,e),a=a.sibling;return Ie(en,en.current&1|2),bt&&Wi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Nl&&(n.flags|=128,c=!0,lo(o,!1),n.lanes=4194304)}else{if(!c)if(e=ml(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return jt(n),null}else 2*b()-o.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,c=!0,lo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=en.current,Ie(en,c?a&1|2:a&1),bt&&Wi(n,o.treeForkCount),e):(jt(n),null);case 22:case 23:return Kn(n),Tu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&He(fs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(ln),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function $v(e,n){switch(uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(ln),Xe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return st(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return He(en),null;case 4:return Xe(),null;case 10:return Yi(n.type),null;case 22:case 23:return Kn(n),Tu(),e!==null&&He(fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(ln),null;case 25:return null;default:return null}}function z0(e,n){switch(uu(n),n.tag){case 3:Yi(ln),Xe();break;case 26:case 27:case 5:st(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:He(en);break;case 10:Yi(n.type);break;case 22:case 23:Kn(n),Tu(),e!==null&&He(fs);break;case 24:Yi(ln)}}function co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(E){Ft(n,n.return,E)}}function wa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var x=o.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var z=a,K=E;try{K()}catch(oe){Ft(c,z,oe)}}}o=o.next}while(o!==f)}}catch(oe){Ft(n,n.return,oe)}}function B0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rp(n,a)}catch(o){Ft(e,e.return,o)}}}function F0(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(e,n,o)}}function uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ft(e,n,c)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function I0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function af(e,n,a){try{var o=e.stateNode;M_(o,e.type,a,n),o[hn]=n}catch(c){Ft(e,e.return,c)}}function H0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(rf(e,n,a),e=e.sibling;e!==null;)rf(e,n,a),e=e.sibling}function Dl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function G0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ln(n,o,a),n[on]=e,n[hn]=a}catch(f){Ft(e,e.return,f)}}var Ji=!1,fn=!1,of=!1,V0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function e_(e,n){if(e=e.containerInfo,Cf=Kl,e=ep(e),$c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,E=-1,z=-1,K=0,oe=0,de=e,J=null;t:for(;;){for(var ie;de!==a||c!==0&&de.nodeType!==3||(E=x+c),de!==f||o!==0&&de.nodeType!==3||(z=x+o),de.nodeType===3&&(x+=de.nodeValue.length),(ie=de.firstChild)!==null;)J=de,de=ie;for(;;){if(de===e)break t;if(J===a&&++K===c&&(E=x),J===f&&++oe===o&&(z=x),(ie=de.nextSibling)!==null)break;de=J,J=de.parentNode}de=ie}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:e,selectionRange:a},Kl=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ze=xs(a.type,c);e=o.getSnapshotBeforeUpdate(ze,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($e){Ft(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Lf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function k0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),o&4&&co(5,a);break;case 1:if(ea(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ft(a,a.return,x)}else{var c=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ft(a,a.return,x)}}o&64&&B0(a),o&512&&uo(a,a.return);break;case 3:if(ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(e,n)}catch(x){Ft(a,a.return,x)}}break;case 27:n===null&&o&4&&G0(a);case 26:case 5:ea(e,a),n===null&&o&4&&I0(a),o&512&&uo(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),o&4&&q0(e,a);break;case 13:ea(e,a),o&4&&Y0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=c_.bind(null,a),D_(e,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||fn,c=Ji;var f=fn;Ji=o,(fn=n)&&!f?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),Ji=c,fn=f}break;case 30:break;default:ea(e,a)}}function X0(e){var n=e.alternate;n!==null&&(e.alternate=null,X0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,In=!1;function $i(e,n,a){for(a=a.child;a!==null;)W0(e,n,a),a=a.sibling}function W0(e,n,a){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(ve,a)}catch{}switch(a.tag){case 26:fn||Ni(a,n),$i(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ni(a,n);var o=Kt,c=In;Ba(a.type)&&(Kt=a.stateNode,In=!1),$i(e,n,a),So(a.stateNode),Kt=o,In=c;break;case 5:fn||Ni(a,n);case 6:if(o=Kt,c=In,Kt=null,$i(e,n,a),Kt=o,In=c,Kt!==null)if(In)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Kt!==null&&(In?(e=Kt,Bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),lr(e)):Bm(Kt,a.stateNode));break;case 4:o=Kt,c=In,Kt=a.stateNode.containerInfo,In=!0,$i(e,n,a),Kt=o,In=c;break;case 0:case 11:case 14:case 15:wa(2,a,n),fn||wa(4,a,n),$i(e,n,a);break;case 1:fn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&F0(a,n,o)),$i(e,n,a);break;case 21:$i(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,$i(e,n,a),fn=o;break;default:$i(e,n,a)}}function q0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lr(e)}catch(a){Ft(n,n.return,a)}}}function Y0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(a){Ft(n,n.return,a)}}function t_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new V0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new V0),n;default:throw Error(r(435,e.tag))}}function wl(e,n){var a=t_(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=u_.bind(null,e,o);o.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,x=n,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(Ba(E.type)){Kt=E.stateNode,In=!1;break e}break;case 5:Kt=E.stateNode,In=!1;break e;case 3:case 4:Kt=E.stateNode.containerInfo,In=!0;break e}E=E.return}if(Kt===null)throw Error(r(160));W0(f,x,c),Kt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Z0(n,e),n=n.sibling}var Mi=null;function Z0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(wa(3,e,e.return),co(3,e),wa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(fn||a===null||Ni(a,a.return)),o&64&&Ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Mi;if(Hn(n,e),Gn(e),o&512&&(fn||a===null||Ni(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ns]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Ln(f,o,a),f[on]=e,Q(f),o=f;break e;case"link":var x=Zm("link","href",c).get(o+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break t}}f=c.createElement(o),Ln(f,o,a),c.head.appendChild(f);break;case"meta":if(x=Zm("meta","content",c).get(o+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break t}}f=c.createElement(o),Ln(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,Q(f),o=f}e.stateNode=o}else jm(c,e.type,e.stateNode);else e.stateNode=Ym(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?jm(c,e.type,e.stateNode):Ym(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&af(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(fn||a===null||Ni(a,a.return)),a!==null&&o&4&&af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(fn||a===null||Ni(a,a.return)),e.flags&32){c=e.stateNode;try{wi(c,"")}catch(ze){Ft(e,e.return,ze)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,af(e,c,a!==null?a.memoizedProps:c)),o&1024&&(of=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ze){Ft(e,e.return,ze)}}break;case 3:if(ql=null,c=Mi,Mi=Xl(n.containerInfo),Hn(n,e),Mi=c,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(ze){Ft(e,e.return,ze)}of&&(of=!1,j0(e));break;case 4:o=Mi,Mi=Xl(e.stateNode.containerInfo),Hn(n,e),Gn(e),Mi=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ll=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,K=Ji,oe=fn;if(Ji=K||c,fn=oe||z,Hn(n,e),fn=oe,Ji=K,Gn(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Ji||fn||gs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=z.stateNode;var de=z.memoizedProps.style,J=de!=null&&de.hasOwnProperty("display")?de.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(ze){Ft(z,z.return,ze)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ze){Ft(z,z.return,ze)}}}else if(n.tag===18){if(a===null){z=n;try{var ie=z.stateNode;c?Fm(ie,!0):Fm(z.stateNode,!1)}catch(ze){Ft(z,z.return,ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(H0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(e);Dl(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(wi(x,""),a.flags&=-33);var E=sf(e);Dl(e,E,x);break;case 3:case 4:var z=a.stateNode.containerInfo,K=sf(e);rf(e,K,z);break;default:throw Error(r(161))}}catch(oe){Ft(e,e.return,oe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)k0(e,n.alternate,n),n=n.sibling}function gs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),gs(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&F0(n,n.return,a),gs(n);break;case 27:So(n.stateNode);case 26:case 5:Ni(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ta(c,f,a),co(4,f);break;case 1:if(ta(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(K){Ft(o,o.return,K)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Ap(z[c],E)}catch(K){Ft(o,o.return,K)}}a&&x&64&&B0(f),uo(f,f.return);break;case 27:G0(f);case 26:case 5:ta(c,f,a),a&&o===null&&x&4&&I0(f),uo(f,f.return);break;case 12:ta(c,f,a);break;case 31:ta(c,f,a),a&&x&4&&q0(c,f);break;case 13:ta(c,f,a),a&&x&4&&Y0(c,f);break;case 22:f.memoizedState===null&&ta(c,f,a),uo(f,f.return);break;case 30:break;default:ta(c,f,a)}n=n.sibling}}function lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kr(a))}function cf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e))}function yi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)K0(e,n,a,o),n=n.sibling}function K0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,o),c&2048&&co(9,n);break;case 1:yi(e,n,a,o);break;case 3:yi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e)));break;case 12:if(c&2048){yi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ft(n,n.return,z)}}else yi(e,n,a,o);break;case 31:yi(e,n,a,o);break;case 13:yi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,o):fo(e,n):f._visibility&2?yi(e,n,a,o):(f._visibility|=2,Qs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&lf(x,n);break;case 24:yi(e,n,a,o),c&2048&&cf(n.alternate,n);break;default:yi(e,n,a,o)}}function Qs(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,E=a,z=o,K=x.flags;switch(x.tag){case 0:case 11:case 15:Qs(f,x,E,z,c),co(8,x);break;case 23:break;case 22:var oe=x.stateNode;x.memoizedState!==null?oe._visibility&2?Qs(f,x,E,z,c):fo(f,x):(oe._visibility|=2,Qs(f,x,E,z,c)),c&&K&2048&&lf(x.alternate,x);break;case 24:Qs(f,x,E,z,c),c&&K&2048&&cf(x.alternate,x);break;default:Qs(f,x,E,z,c)}n=n.sibling}}function fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:fo(a,o),c&2048&&lf(o.alternate,o);break;case 24:fo(a,o),c&2048&&cf(o.alternate,o);break;default:fo(a,o)}n=n.sibling}}var ho=8192;function Js(e,n,a){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)Q0(e,n,a),e=e.sibling}function Q0(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&ho&&e.memoizedState!==null&&G_(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:Js(e,n,a);break;case 3:case 4:var o=Mi;Mi=Xl(e.stateNode.containerInfo),Js(e,n,a),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ho,ho=16777216,Js(e,n,a),ho=o):Js(e,n,a));break;default:Js(e,n,a)}}function J0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,em(o,e)}J0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$0(e),e=e.sibling}function $0(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&wa(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ul(e)):po(e);break;default:po(e)}}function Ul(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,em(o,e)}J0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Ul(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ul(n));break;default:Ul(n)}e=e.sibling}}function em(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=e;bn!==null;){o=bn;var c=o.sibling,f=o.return;if(X0(o),o===a){bn=null;break e}if(c!==null){c.return=f,bn=c;break e}bn=f}}}var n_={getCacheForType:function(e){var n=wn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(ln).controller.signal}},i_=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Wt=null,gt=null,_t=0,Bt=0,Qn=null,Ua=!1,$s=!1,uf=!1,na=0,$t=0,La=0,vs=0,ff=0,Jn=0,er=0,mo=null,Vn=null,df=!1,Ll=0,tm=0,Nl=1/0,Ol=null,Na=null,mn=0,Oa=null,tr=null,ia=0,hf=0,pf=null,nm=null,xo=0,mf=null;function $n(){return(Ot&2)!==0&&_t!==0?_t&-_t:L.T!==null?Mf():zr()}function im(){if(Jn===0)if((_t&536870912)===0||bt){var e=be;be<<=1,(be&3932160)===0&&(be=262144),Jn=e}else Jn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===Wt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Pa(e,_t,Jn,!1)),Nn(e,a),((Ot&2)===0||e!==Wt)&&(e===Wt&&((Ot&2)===0&&(vs|=a),$t===4&&Pa(e,_t,Jn,!1)),Oi(e))}function am(e,n,a){if((Ot&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Oe(e,n),c=o?r_(e,n):gf(e,n,!0),f=o;do{if(c===0){$s&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!a_(a)){c=gf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var E=e;c=mo;var z=E.current.memoizedState.isDehydrated;if(z&&(nr(E,x).flags|=256),x=gf(E,x,!1),x!==2){if(uf&&!z){E.errorRecoveryDisabledLanes|=f,vs|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){nr(e,0),Pa(e,n,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,Jn,!Ua);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ll+300-b(),10<c)){if(Pa(o,n,Jn,!Ua),pe(o,0,!0)!==0)break e;ia=n,o.timeoutHandle=Pm(sm.bind(null,o,a,Vn,Ol,df,n,Jn,vs,er,Ua,f,"Throttled",-0,0),c);break e}sm(o,a,Vn,Ol,df,n,Jn,vs,er,Ua,f,null,-0,0)}}break}while(!0);Oi(e)}function sm(e,n,a,o,c,f,x,E,z,K,oe,de,J,ie){if(e.timeoutHandle=-1,de=n.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Q0(n,f,de);var ze=(f&62914560)===f?Ll-b():(f&4194048)===f?tm-b():0;if(ze=V_(de,ze),ze!==null){ia=f,e.cancelPendingCommit=ze(hm.bind(null,e,n,f,a,o,c,x,E,z,oe,de,null,J,ie)),Pa(e,f,x,!K);return}}hm(e,n,f,a,o,c,x,E,z)}function a_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~ff,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Be(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&qo(e,a,n)}function Pl(){return(Ot&6)===0?(go(0),!1):!0}function xf(){if(gt!==null){if(Bt===0)var e=gt.return;else e=gt,qi=cs=null,Uu(e),qs=null,Jr=0,e=gt;for(;e!==null;)z0(e.alternate,e),e=e.return;gt=null}}function nr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,E_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,xf(),Wt=e,gt=a=Xi(e.current,null),_t=n,Bt=0,Qn=null,Ua=!1,$s=Oe(e,n),uf=!1,er=Jn=ff=vs=La=$t=0,Vn=mo=null,df=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Be(o),f=1<<c;n|=e[c],o&=~f}return na=n,nl(),a}function rm(e,n){ot=null,L.H=ro,n===Ws||n===ul?(n=yp(),Bt=3):n===_u?(n=yp(),Bt=4):Bt=n===Yu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&($t=1,El(e,ci(n,e.current)))}function om(){var e=jn.current;return e===null?!0:(_t&4194048)===_t?hi===null:(_t&62914560)===_t||(_t&536870912)!==0?e===hi:!1}function lm(){var e=L.H;return L.H=ro,e===null?ro:e}function cm(){var e=L.A;return L.A=n_,e}function zl(){$t=4,Ua||(_t&4194048)!==_t&&jn.current!==null||($s=!0),(La&134217727)===0&&(vs&134217727)===0||Wt===null||Pa(Wt,_t,Jn,!1)}function gf(e,n,a){var o=Ot;Ot|=2;var c=lm(),f=cm();(Wt!==e||_t!==n)&&(Ol=null,nr(e,n)),n=!1;var x=$t;e:do try{if(Bt!==0&&gt!==null){var E=gt,z=Qn;switch(Bt){case 8:xf(),x=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var K=Bt;if(Bt=0,Qn=null,ir(e,E,z,K),a&&$s){x=0;break e}break;default:K=Bt,Bt=0,Qn=null,ir(e,E,z,K)}}s_(),x=$t;break}catch(oe){rm(e,oe)}while(!0);return n&&e.shellSuspendCounter++,qi=cs=null,Ot=o,L.H=c,L.A=f,gt===null&&(Wt=null,_t=0,nl()),x}function s_(){for(;gt!==null;)um(gt)}function r_(e,n){var a=Ot;Ot|=2;var o=lm(),c=cm();Wt!==e||_t!==n?(Ol=null,Nl=b()+500,nr(e,n)):$s=Oe(e,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=Qn;t:switch(Bt){case 1:Bt=0,Qn=null,ir(e,n,f,1);break;case 2:case 9:if(Sp(f)){Bt=0,Qn=null,fm(n);break}n=function(){Bt!==2&&Bt!==9||Wt!==e||(Bt=7),Oi(e)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Sp(f)?(Bt=0,Qn=null,fm(n)):(Bt=0,Qn=null,ir(e,n,f,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var E=gt;if(x?Km(x):E.stateNode.complete){Bt=0,Qn=null;var z=E.sibling;if(z!==null)gt=z;else{var K=E.return;K!==null?(gt=K,Bl(K)):gt=null}break t}}Bt=0,Qn=null,ir(e,n,f,5);break;case 6:Bt=0,Qn=null,ir(e,n,f,6);break;case 8:xf(),$t=6;break e;default:throw Error(r(462))}}o_();break}catch(oe){rm(e,oe)}while(!0);return qi=cs=null,L.H=o,L.A=c,Ot=a,gt!==null?0:(Wt=null,_t=0,nl(),$t)}function o_(){for(;gt!==null&&!at();)um(gt)}function um(e){var n=O0(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?Bl(e):gt=n}function fm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=C0(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=C0(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Uu(n);default:z0(a,n),n=gt=cp(n,na),n=O0(a,n,na)}e.memoizedProps=e.pendingProps,n===null?Bl(e):gt=n}function ir(e,n,a,o){qi=cs=null,Uu(n),qs=null,Jr=0;var c=n.return;try{if(jv(e,c,n,a,_t)){$t=1,El(e,ci(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,El(e,ci(a,e.current)),gt=null;return}n.flags&32768?(bt||o===1?e=!0:$s||(_t&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),dm(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){dm(n,Ua);return}e=n.return;var a=Jv(n.alternate,n,na);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function dm(e,n){do{var a=$v(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function hm(e,n,a,o,c,f,x,E,z){e.cancelPendingCommit=null;do Fl();while(mn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=au,Wn(e,a,f,x,E,z),e===Wt&&(gt=Wt=null,_t=0),tr=n,Oa=e,ia=a,hf=f,pf=c,nm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,f_(ae,function(){return vm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,c=Y.p,Y.p=2,x=Ot,Ot|=4;try{e_(e,n,a)}finally{Ot=x,Y.p=c,L.T=o}}mn=1,pm(),mm(),xm()}}function pm(){if(mn===1){mn=0;var e=Oa,n=tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=Y.p;Y.p=2;var c=Ot;Ot|=4;try{Z0(n,e);var f=Df,x=ep(e.containerInfo),E=f.focusedElem,z=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&$h(E.ownerDocument.documentElement,E)){if(z!==null&&$c(E)){var K=z.start,oe=z.end;if(oe===void 0&&(oe=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(oe,E.value.length);else{var de=E.ownerDocument||document,J=de&&de.defaultView||window;if(J.getSelection){var ie=J.getSelection(),ze=E.textContent.length,$e=Math.min(z.start,ze),Vt=z.end===void 0?$e:Math.min(z.end,ze);!ie.extend&&$e>Vt&&(x=Vt,Vt=$e,$e=x);var X=Jh(E,$e),I=Jh(E,Vt);if(X&&I&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==I.node||ie.focusOffset!==I.offset)){var Z=de.createRange();Z.setStart(X.node,X.offset),ie.removeAllRanges(),$e>Vt?(ie.addRange(Z),ie.extend(I.node,I.offset)):(Z.setEnd(I.node,I.offset),ie.addRange(Z))}}}}for(de=[],ie=E;ie=ie.parentNode;)ie.nodeType===1&&de.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<de.length;E++){var ue=de[E];ue.element.scrollLeft=ue.left,ue.element.scrollTop=ue.top}}Kl=!!Cf,Df=Cf=null}finally{Ot=c,Y.p=o,L.T=a}}e.current=n,mn=2}}function mm(){if(mn===2){mn=0;var e=Oa,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=Y.p;Y.p=2;var c=Ot;Ot|=4;try{k0(e,n.alternate,n)}finally{Ot=c,Y.p=o,L.T=a}}mn=3}}function xm(){if(mn===4||mn===3){mn=0,U();var e=Oa,n=tr,a=ia,o=nm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,tr=Oa=null,gm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Na=null),ts(a),n=n.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(ve,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,c=Y.p,Y.p=2,L.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var E=o[x];f(E.value,{componentStack:E.stack})}}finally{L.T=n,Y.p=c}}(ia&3)!==0&&Fl(),Oi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===mf?xo++:(xo=0,mf=e):xo=0,go(0)}}function gm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kr(n)))}function Fl(){return pm(),mm(),xm(),vm()}function vm(){if(mn!==5)return!1;var e=Oa,n=hf;hf=0;var a=ts(ia),o=L.T,c=Y.p;try{Y.p=32>a?32:a,L.T=null,a=pf,pf=null;var f=Oa,x=ia;if(mn=0,tr=Oa=null,ia=0,(Ot&6)!==0)throw Error(r(331));var E=Ot;if(Ot|=4,$0(f.current),K0(f,f.current,x,a),Ot=E,go(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(ve,f)}catch{}return!0}finally{Y.p=c,L.T=o,gm(e,n)}}function _m(e,n,a){n=ci(a,n),n=qu(e.stateNode,n,2),e=Ra(e,n,2),e!==null&&(Nn(e,2),Oi(e))}function Ft(e,n,a){if(e.tag===3)_m(e,e,a);else for(;n!==null;){if(n.tag===3){_m(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){e=ci(a,e),a=S0(2),o=Ra(n,a,2),o!==null&&(M0(a,o,n,e),Nn(o,2),Oi(o));break}}n=n.return}}function vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new i_;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(uf=!0,c.add(a),e=l_.bind(null,e,n,a),n.then(e,e))}function l_(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>b()-Ll?(Ot&2)===0&&nr(e,0):ff|=a,er===_t&&(er=0)),Oi(e)}function Sm(e,n){n===0&&(n=It()),e=rs(e,n),e!==null&&(Nn(e,n),Oi(e))}function c_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Sm(e,a)}function u_(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Sm(e,a)}function f_(e,n){return Nt(e,n)}var Il=null,ar=null,_f=!1,Hl=!1,Sf=!1,za=0;function Oi(e){e!==ar&&e.next===null&&(ar===null?Il=ar=e:ar=ar.next=e),Hl=!0,_f||(_f=!0,h_())}function go(e,n){if(!Sf&&Hl){Sf=!0;do for(var a=!1,o=Il;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Be(42|e)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Em(o,f))}else f=_t,f=pe(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Oe(o,f)||(a=!0,Em(o,f));o=o.next}while(a);Sf=!1}}function d_(){Mm()}function Mm(){Hl=_f=!1;var e=0;za!==0&&b_()&&(e=za);for(var n=b(),a=null,o=Il;o!==null;){var c=o.next,f=ym(o,n);f===0?(o.next=null,a===null?Il=c:a.next=c,c===null&&(ar=a)):(a=o,(e!==0||(f&3)!==0)&&(Hl=!0)),o=c}mn!==0&&mn!==5||go(e),za!==0&&(za=0)}function ym(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Be(f),E=1<<x,z=c[x];z===-1?((E&a)===0||(E&o)!==0)&&(c[x]=it(E,n)):z<=n&&(e.expiredLanes|=E),f&=~E}if(n=Wt,a=_t,a=pe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&We(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Oe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&We(o),ts(a)){case 2:case 8:a=ge;break;case 32:a=ae;break;case 268435456:a=Re;break;default:a=ae}return o=bm.bind(null,e),a=Nt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&We(o),e.callbackPriority=2,e.callbackNode=null,2}function bm(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var o=_t;return o=pe(e,e===Wt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(am(e,o,n),ym(e,b()),e.callbackNode!=null&&e.callbackNode===a?bm.bind(null,e):null)}function Em(e,n){if(Fl())return null;am(e,n,!0)}function h_(){T_(function(){(Ot&6)!==0?Nt(fe,d_):Mm()})}function Mf(){if(za===0){var e=ks;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),za=e}return za}function Tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Am(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function p_(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Tm((c[hn]||null).action),x=o.submitter;x&&(n=(n=x[hn]||null)?Tm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Jo("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var z=x?Am(c,x):new FormData(c);Hu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=x?Am(c,x):new FormData(c),Hu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var yf=0;yf<iu.length;yf++){var bf=iu[yf],m_=bf.toLowerCase(),x_=bf[0].toUpperCase()+bf.slice(1);Si(m_,"on"+x_)}Si(ip,"onAnimationEnd"),Si(ap,"onAnimationIteration"),Si(sp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Lv,"onTransitionRun"),Si(Nv,"onTransitionStart"),Si(Ov,"onTransitionCancel"),Si(rp,"onTransitionEnd"),Le("onMouseEnter",["mouseout","mouseover"]),Le("onMouseLeave",["mouseout","mouseover"]),Le("onPointerEnter",["pointerout","pointerover"]),Le("onPointerLeave",["pointerout","pointerover"]),Ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Rm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var E=o[x],z=E.instance,K=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=K;try{f(c)}catch(oe){tl(oe)}c.currentTarget=null,f=z}else for(x=0;x<o.length;x++){if(E=o[x],z=E.instance,K=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=K;try{f(c)}catch(oe){tl(oe)}c.currentTarget=null,f=z}}}}function vt(e,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var o=e+"__bubble";a.has(o)||(Cm(n,e,2,!1),a.add(o))}function Ef(e,n,a){var o=0;n&&(o|=4),Cm(a,e,o,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Tf(e){if(!e[Gl]){e[Gl]=!0,q.forEach(function(a){a!=="selectionchange"&&(g_.has(a)||Ef(a,!1,e),Ef(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,Ef("selectionchange",!1,n))}}function Cm(e,n,a,o){switch(ix(n)){case 2:var c=W_;break;case 8:c=q_;break;default:c=Hf}a=c.bind(null,n,a,e),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Af(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var E=o.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=va(E),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=f=x;continue e}E=E.parentNode}}o=o.return}Nh(function(){var K=f,oe=Vc(a),de=[];e:{var J=op.get(e);if(J!==void 0){var ie=Jo,ze=e;switch(e){case"keypress":if(Ko(a)===0)break e;case"keydown":case"keyup":ie=uv;break;case"focusin":ze="focus",ie=Zc;break;case"focusout":ze="blur",ie=Zc;break;case"beforeblur":case"afterblur":ie=Zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=hv;break;case ip:case ap:case sp:ie=tv;break;case rp:ie=mv;break;case"scroll":case"scrollend":ie=Kg;break;case"wheel":ie=gv;break;case"copy":case"cut":case"paste":ie=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Fh;break;case"toggle":case"beforetoggle":ie=_v}var $e=(n&4)!==0,Vt=!$e&&(e==="scroll"||e==="scrollend"),X=$e?J!==null?J+"Capture":null:J;$e=[];for(var I=K,Z;I!==null;){var ue=I;if(Z=ue.stateNode,ue=ue.tag,ue!==5&&ue!==26&&ue!==27||Z===null||X===null||(ue=Ir(I,X),ue!=null&&$e.push(_o(I,ue,Z))),Vt)break;I=I.return}0<$e.length&&(J=new ie(J,ze,null,a,oe),de.push({event:J,listeners:$e}))}}if((n&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",ie=e==="mouseout"||e==="pointerout",J&&a!==Gc&&(ze=a.relatedTarget||a.fromElement)&&(va(ze)||ze[Ii]))break e;if((ie||J)&&(J=oe.window===oe?oe:(J=oe.ownerDocument)?J.defaultView||J.parentWindow:window,ie?(ze=a.relatedTarget||a.toElement,ie=K,ze=ze?va(ze):null,ze!==null&&(Vt=u(ze),$e=ze.tag,ze!==Vt||$e!==5&&$e!==27&&$e!==6)&&(ze=null)):(ie=null,ze=K),ie!==ze)){if($e=zh,ue="onMouseLeave",X="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&($e=Fh,ue="onPointerLeave",X="onPointerEnter",I="pointer"),Vt=ie==null?J:k(ie),Z=ze==null?J:k(ze),J=new $e(ue,I+"leave",ie,a,oe),J.target=Vt,J.relatedTarget=Z,ue=null,va(oe)===K&&($e=new $e(X,I+"enter",ze,a,oe),$e.target=Z,$e.relatedTarget=Vt,ue=$e),Vt=ue,ie&&ze)t:{for($e=v_,X=ie,I=ze,Z=0,ue=X;ue;ue=$e(ue))Z++;ue=0;for(var je=I;je;je=$e(je))ue++;for(;0<Z-ue;)X=$e(X),Z--;for(;0<ue-Z;)I=$e(I),ue--;for(;Z--;){if(X===I||I!==null&&X===I.alternate){$e=X;break t}X=$e(X),I=$e(I)}$e=null}else $e=null;ie!==null&&Dm(de,J,ie,$e,!1),ze!==null&&Vt!==null&&Dm(de,Vt,ze,$e,!0)}}e:{if(J=K?k(K):window,ie=J.nodeName&&J.nodeName.toLowerCase(),ie==="select"||ie==="input"&&J.type==="file")var Dt=qh;else if(Xh(J))if(Yh)Dt=Dv;else{Dt=Rv;var Ge=Av}else ie=J.nodeName,!ie||ie.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?K&&Hc(K.elementType)&&(Dt=qh):Dt=Cv;if(Dt&&(Dt=Dt(e,K))){Wh(de,Dt,a,oe);break e}Ge&&Ge(e,J,K),e==="focusout"&&K&&J.type==="number"&&K.memoizedProps.value!=null&&Mn(J,"number",J.value)}switch(Ge=K?k(K):window,e){case"focusin":(Xh(Ge)||Ge.contentEditable==="true")&&(Ps=Ge,eu=K,Yr=null);break;case"focusout":Yr=eu=Ps=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,tp(de,a,oe);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":tp(de,a,oe)}var ut;if(Kc)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Os?Vh(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Ih&&a.locale!=="ko"&&(Os||St!=="onCompositionStart"?St==="onCompositionEnd"&&Os&&(ut=Oh()):(Sa=oe,Wc="value"in Sa?Sa.value:Sa.textContent,Os=!0)),Ge=Vl(K,St),0<Ge.length&&(St=new Bh(St,e,null,a,oe),de.push({event:St,listeners:Ge}),ut?St.data=ut:(ut=kh(a),ut!==null&&(St.data=ut)))),(ut=Mv?yv(e,a):bv(e,a))&&(St=Vl(K,"onBeforeInput"),0<St.length&&(Ge=new Bh("onBeforeInput","beforeinput",null,a,oe),de.push({event:Ge,listeners:St}),Ge.data=ut)),p_(de,e,K,a,oe)}Rm(de,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ir(e,a),c!=null&&o.unshift(_o(e,c,f)),c=Ir(e,n),c!=null&&o.push(_o(e,c,f))),e.tag===3)return o;e=e.return}return[]}function v_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dm(e,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var E=a,z=E.alternate,K=E.stateNode;if(E=E.tag,z!==null&&z===o)break;E!==5&&E!==26&&E!==27||K===null||(z=K,c?(K=Ir(a,f),K!=null&&x.unshift(_o(a,K,z))):c||(K=Ir(a,f),K!=null&&x.push(_o(a,K,z)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var __=/\r\n?/g,S_=/\u0000|\uFFFD/g;function wm(e){return(typeof e=="string"?e:""+e).replace(__,`
`).replace(S_,"")}function Um(e,n){return n=wm(n),wm(e)===n}function Gt(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wi(e,""+o);break;case"className":At(e,"class",o);break;case"tabIndex":At(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":At(e,a,o);break;case"style":Uh(e,o,f);break;case"data":if(n!=="object"){At(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Zo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Zo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Vi);break;case"onScroll":o!=null&&vt("scroll",e);break;case"onScrollEnd":o!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":vt("beforetoggle",e),vt("toggle",e),ct(e,"popover",o);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ct(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zg.get(a)||a,ct(e,a,o))}}function Rf(e,n,a,o,c,f){switch(a){case"style":Uh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wi(e,o):(typeof o=="number"||typeof o=="bigint")&&wi(e,""+o);break;case"onScroll":o!=null&&vt("scroll",e);break;case"onScrollEnd":o!=null&&vt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Me.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ct(e,a,o)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,f,x,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),o&&Gt(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var E=f=x=c=null,z=null,K=null;for(o in a)if(a.hasOwnProperty(o)){var oe=a[o];if(oe!=null)switch(o){case"name":c=oe;break;case"type":x=oe;break;case"checked":z=oe;break;case"defaultChecked":K=oe;break;case"value":f=oe;break;case"defaultValue":E=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Gt(e,n,o,oe,a,null)}}Yt(e,f,E,z,K,x,c,!1);return;case"select":vt("invalid",e),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":o=E;default:Gt(e,n,c,E,a,null)}n=f,a=x,e.multiple=!!o,n!=null?pn(e,!!o,n,!1):a!=null&&pn(e,!!o,a,!0);return;case"textarea":vt("invalid",e),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Gt(e,n,x,E,a,null)}Cn(e,o,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(e,n,z,o,a,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(o=0;o<vo.length;o++)vt(vo[o],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(o=a[K],o!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,K,o,a,null)}return;default:if(Hc(n)){for(oe in a)a.hasOwnProperty(oe)&&(o=a[oe],o!==void 0&&Rf(e,n,oe,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Gt(e,n,E,o,a,null))}function M_(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,z=null,K=null,oe=null;for(ie in a){var de=a[ie];if(a.hasOwnProperty(ie)&&de!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":z=de;default:o.hasOwnProperty(ie)||Gt(e,n,ie,null,o,de)}}for(var J in o){var ie=o[J];if(de=a[J],o.hasOwnProperty(J)&&(ie!=null||de!=null))switch(J){case"type":f=ie;break;case"name":c=ie;break;case"checked":K=ie;break;case"defaultChecked":oe=ie;break;case"value":x=ie;break;case"defaultValue":E=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:ie!==de&&Gt(e,n,J,ie,o,de)}}Hi(e,x,E,z,K,oe,f,c);return;case"select":ie=x=E=J=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ie=z;default:o.hasOwnProperty(f)||Gt(e,n,f,null,o,z)}for(c in o)if(f=o[c],z=a[c],o.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==z&&Gt(e,n,c,f,o,z)}n=E,a=x,o=ie,J!=null?pn(e,!!a,J,!1):!!o!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":ie=J=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Gt(e,n,E,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":J=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(e,n,x,c,o,f)}yn(e,J,ie);return;case"option":for(var ze in a)if(J=a[ze],a.hasOwnProperty(ze)&&J!=null&&!o.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Gt(e,n,ze,null,o,J)}for(z in o)if(J=o[z],ie=a[z],o.hasOwnProperty(z)&&J!==ie&&(J!=null||ie!=null))switch(z){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Gt(e,n,z,J,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)J=a[$e],a.hasOwnProperty($e)&&J!=null&&!o.hasOwnProperty($e)&&Gt(e,n,$e,null,o,J);for(K in o)if(J=o[K],ie=a[K],o.hasOwnProperty(K)&&J!==ie&&(J!=null||ie!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:Gt(e,n,K,J,o,ie)}return;default:if(Hc(n)){for(var Vt in a)J=a[Vt],a.hasOwnProperty(Vt)&&J!==void 0&&!o.hasOwnProperty(Vt)&&Rf(e,n,Vt,void 0,o,J);for(oe in o)J=o[oe],ie=a[oe],!o.hasOwnProperty(oe)||J===ie||J===void 0&&ie===void 0||Rf(e,n,oe,J,o,ie);return}}for(var X in a)J=a[X],a.hasOwnProperty(X)&&J!=null&&!o.hasOwnProperty(X)&&Gt(e,n,X,null,o,J);for(de in o)J=o[de],ie=a[de],!o.hasOwnProperty(de)||J===ie||J==null&&ie==null||Gt(e,n,de,J,o,ie)}function Lm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function y_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Lm(x)){for(x=0,E=c.responseEnd,o+=1;o<a.length;o++){var z=a[o],K=z.startTime;if(K>E)break;var oe=z.transferSize,de=z.initiatorType;oe&&Lm(de)&&(z=z.responseEnd,x+=oe*(z<E?1:(E-K)/(z-K)))}if(--o,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cf=null,Df=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function Nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Om(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function b_(){var e=window.event;return e&&e.type==="popstate"?e===Uf?!1:(Uf=e,!0):(Uf=null,!1)}var Pm=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(e){return zm.resolve(null).then(e).catch(A_)}:Pm;function A_(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function Bm(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),lr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")So(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[ns]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&So(e.ownerDocument.body);a=c}while(a);lr(n)}function Fm(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function R_(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ns])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function C_(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Im(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function Nf(e){return e.data==="$?"||e.data==="$~"}function Of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function D_(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pf=null;function Hm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Gm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Vm(e,n,a){switch(n=kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Fr(e)}var mi=new Map,km=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=Y.d;Y.d={f:w_,r:U_,D:L_,C:N_,L:O_,m:P_,X:B_,S:z_,M:F_};function w_(){var e=aa.f(),n=Pl();return e||n}function U_(e){var n=A(e);n!==null&&n.tag===5&&n.type==="form"?r0(n):aa.r(e)}var sr=typeof document>"u"?null:document;function Xm(e,n,a){var o=sr;if(o&&typeof n=="string"&&n){var c=qt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),km.has(c)||(km.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Ln(n,"link",e),Q(n),o.head.appendChild(n)))}}function L_(e){aa.D(e),Xm("dns-prefetch",e,null)}function N_(e,n){aa.C(e,n),Xm("preconnect",e,n)}function O_(e,n,a){aa.L(e,n,a);var o=sr;if(o&&e&&n){var c='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qt(a.imageSizes)+'"]')):c+='[href="'+qt(e)+'"]';var f=c;switch(n){case"style":f=rr(e);break;case"script":f=or(e)}mi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(yo(f))||(n=o.createElement("link"),Ln(n,"link",e),Q(n),o.head.appendChild(n)))}}function P_(e,n){aa.m(e,n);var a=sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qt(o)+'"][href="'+qt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(e)}if(!mi.has(f)&&(e=g({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}o=a.createElement("link"),Ln(o,"link",e),Q(o),a.head.appendChild(o)}}}function z_(e,n,a){aa.S(e,n,a);var o=sr;if(o&&e){var c=te(o).hoistableStyles,f=rr(e);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=o.querySelector(Mo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&zf(e,a);var z=x=o.createElement("link");Q(z),Ln(z,"link",e),z._p=new Promise(function(K,oe){z.onload=K,z.onerror=oe}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Wl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function B_(e,n){aa.X(e,n);var a=sr;if(a&&e){var o=te(a).hoistableScripts,c=or(e),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(e=g({src:e,async:!0},n),(n=mi.get(c))&&Bf(e,n),f=a.createElement("script"),Q(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function F_(e,n){aa.M(e,n);var a=sr;if(a&&e){var o=te(a).hoistableScripts,c=or(e),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(c))&&Bf(e,n),f=a.createElement("script"),Q(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Wm(e,n,a,o){var c=(c=ce.current)?Xl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=te(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var f=te(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(Mo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||I_(c,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=te(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function rr(e){return'href="'+qt(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function qm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function I_(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),Q(n),e.head.appendChild(n))}function or(e){return'[src="'+qt(e)+'"]'}function yo(e){return"script[async]"+e}function Ym(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Ln(o,"style",c),Wl(o,a.precedence,e),n.instance=o;case"stylesheet":c=rr(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=qm(a),(c=mi.get(c))&&zf(o,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var x=f;return x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),Ln(f,"link",o),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=or(a.src),(c=e.querySelector(yo(f)))?(n.instance=c,Q(c),c):(o=a,(c=mi.get(f))&&(o=g({},a),Bf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Ln(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Wl(o,a.precedence,e));return n.instance}function Wl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var E=o[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function Zm(e,n,a){if(ql===null){var o=new Map,c=ql=new Map;c.set(a,o)}else c=ql,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ns]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var E=o.get(x);E?E.push(f):o.set(x,[f])}}return o}function jm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function H_(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Km(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function G_(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=rr(o.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Q(f);return}f=n.ownerDocument||n,o=qm(o),(c=mi.get(c))&&zf(o,c),f=f.createElement("link"),Q(f);var x=f;x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),Ln(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function V_(e,n){return e.stylesheets&&e.count===0&&jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Ff===0&&(Ff=62500*y_());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Ff?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(k_,e),Zl=null,Yl.call(e))}function k_(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var o=a.get(null);else{a=new Map,Zl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=Yl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:w,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function X_(e,n,a,o,c,f,x,E,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Qm(e,n,a,o,c,f,x,E,z,K,oe,de){return e=new X_(e,n,a,x,z,K,oe,de,E),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=xu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Su(f),e}function Jm(e){return e?(e=Fs,e):Fs}function $m(e,n,a,o,c,f){c=Jm(c),o.context===null?o.context=c:o.pendingContext=c,o=Aa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ra(e,o,n),a!==null&&(kn(a,e,n),eo(a,e,n))}function ex(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function If(e,n){ex(e,n),(e=e.alternate)&&ex(e,n)}function tx(e){if(e.tag===13||e.tag===31){var n=rs(e,67108864);n!==null&&kn(n,e,67108864),If(e,67108864)}}function nx(e){if(e.tag===13||e.tag===31){var n=$n();n=_i(n);var a=rs(e,n);a!==null&&kn(a,e,n),If(e,n)}}var Kl=!0;function W_(e,n,a,o){var c=L.T;L.T=null;var f=Y.p;try{Y.p=2,Hf(e,n,a,o)}finally{Y.p=f,L.T=c}}function q_(e,n,a,o){var c=L.T;L.T=null;var f=Y.p;try{Y.p=8,Hf(e,n,a,o)}finally{Y.p=f,L.T=c}}function Hf(e,n,a,o){if(Kl){var c=Gf(o);if(c===null)Af(e,n,o,Ql,a),ax(e,o);else if(Z_(c,e,n,a,o))o.stopPropagation();else if(ax(e,o),n&4&&-1<Y_.indexOf(e)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=_e(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var z=1<<31-Be(x);E.entanglements[1]|=z,x&=~z}Oi(f),(Ot&6)===0&&(Nl=b()+500,go(0))}}break;case 31:case 13:E=rs(f,2),E!==null&&kn(E,f,2),Pl(),If(f,2)}if(f=Gf(o),f===null&&Af(e,n,o,Ql,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Af(e,n,o,null,a)}}function Gf(e){return e=Vc(e),Vf(e)}var Ql=null;function Vf(e){if(Ql=null,e=va(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function ix(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case fe:return 2;case ge:return 8;case ae:case qe:return 32;case Re:return 268435456;default:return 32}default:return 32}}var kf=!1,Fa=null,Ia=null,Ha=null,Eo=new Map,To=new Map,Ga=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(e,n){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&tx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Z_(e,n,a,o,c){switch(n){case"focusin":return Fa=Ao(Fa,e,n,a,o,c),!0;case"dragenter":return Ia=Ao(Ia,e,n,a,o,c),!0;case"mouseover":return Ha=Ao(Ha,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,Ao(Eo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,Ao(To.get(f)||null,e,n,a,o,c)),!0}return!1}function sx(e){var n=va(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Br(e.priority,function(){nx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Br(e.priority,function(){nx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Gf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gc=o,a.target.dispatchEvent(o),Gc=null}else return n=A(a),n!==null&&tx(n),e.blockedOn=a,!1;n.shift()}return!0}function rx(e,n,a){Jl(e)&&a.delete(n)}function j_(){kf=!1,Fa!==null&&Jl(Fa)&&(Fa=null),Ia!==null&&Jl(Ia)&&(Ia=null),Ha!==null&&Jl(Ha)&&(Ha=null),Eo.forEach(rx),To.forEach(rx)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,kf||(kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,j_)))}var ec=null;function ox(e){ec!==e&&(ec=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Vf(o||a)===null)continue;break}var f=A(a);f!==null&&(e.splice(n,3),n-=3,Hu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function lr(e){function n(z){return $l(z,e)}Fa!==null&&$l(Fa,e),Ia!==null&&$l(Ia,e),Ha!==null&&$l(Ha,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Ga.length;a++){var o=Ga[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ga.length&&(a=Ga[0],a.blockedOn===null);)sx(a),a.blockedOn===null&&Ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[hn]||null;if(typeof f=="function")x||ox(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[hn]||null)E=x.formAction;else if(Vf(c)!==null)continue}else E=x.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),ox(a)}}}function lx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xf(e){this._internalRoot=e}tc.prototype.render=Xf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();$m(a,o,e,n,null,null)},tc.prototype.unmount=Xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$m(e.current,2,null,e,null,null),Pl(),n[Ii]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ga.length&&n!==0&&n<Ga[a].priority;a++);Ga.splice(a,0,e),a===0&&sx(e)}};var cx=t.version;if(cx!=="19.2.0")throw Error(r(527,cx,"19.2.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var K_={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{ve=nc.inject(K_),Se=nc}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=x0,f=g0,x=v0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Qm(e,1,!1,null,null,a,o,null,c,f,x,lx),e[Ii]=n.current,Tf(e),new Xf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=x0,x=g0,E=v0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Qm(e,1,!0,n,a??null,o,c,z,f,x,E,lx),n.context=Jm(null),a=n.current,o=$n(),o=_i(o),c=Aa(o),c.callback=null,Ra(a,c,o),a=o,n.current.lanes=a,Nn(n,a),Oi(n),e[Ii]=n.current,Tf(e),new tc(n)},Co.version="19.2.0",Co}var mx;function oS(){if(mx)return qf.exports;mx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qf.exports=rS(),qf.exports}var lS=oS();const cS="modulepreload",uS=function(s){return"/PersonalPortfolio/"+s},xx={},Io=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");l=m(i.map(p=>{if(p=uS(p),p in xx)return;xx[p]=!0;const _=p.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const S=document.createElement("link");if(S.rel=_?"stylesheet":cS,_||(S.as="script"),S.crossOrigin="",S.href=p,h&&S.setAttribute("nonce",h),document.head.appendChild(S),_)return new Promise((M,T)=>{S.addEventListener("load",M),S.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})};const Oc="181",fS=0,gx=1,dS=2,vg=1,hS=2,fa=3,ma=0,Tn=1,ii=2,Ci=0,br=1,vx=2,_x=3,Sx=4,pS=5,As=100,mS=101,xS=102,gS=103,vS=104,_S=200,SS=201,MS=202,yS=203,Cd=204,Dd=205,bS=206,ES=207,TS=208,AS=209,RS=210,CS=211,DS=212,wS=213,US=214,wd=0,wc=1,Ud=2,Tr=3,Ld=4,Nd=5,Od=6,Pd=7,_g=0,LS=1,NS=2,Ka=0,OS=1,PS=2,zS=3,BS=4,FS=5,IS=6,HS=7,Sg=300,Ar=301,Rr=302,zd=303,Bd=304,Pc=306,Fd=1e3,da=1001,Id=1002,ai=1003,GS=1004,ac=1005,An=1006,jf=1007,Cs=1008,ri=1009,Mg=1010,yg=1011,zo=1012,_h=1013,Qa=1014,ha=1015,Ur=1016,Sh=1017,Mh=1018,Cr=1020,bg=35902,Eg=35899,Tg=1021,Ag=1022,Ri=1023,Bo=1026,Dr=1027,Rg=1028,yh=1029,bh=1030,Eh=1031,Th=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,Hd=35840,Gd=35841,Vd=35842,kd=35843,Xd=36196,Wd=37492,qd=37496,Yd=37808,Zd=37809,jd=37810,Kd=37811,Qd=37812,Jd=37813,$d=37814,eh=37815,th=37816,nh=37817,ih=37818,ah=37819,sh=37820,rh=37821,oh=36492,lh=36494,ch=36495,uh=36283,fh=36284,dh=36285,hh=36286,Ho=3200,VS=3201,kS=0,XS=1,zi="",an="srgb",Ja="srgb-linear",Uc="linear",kt="srgb",cr=7680,Mx=519,WS=512,qS=513,YS=514,Cg=515,ZS=516,jS=517,KS=518,QS=519,yx=35044,ph="300 es",Bi=2e3,Lc=2001;function Dg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Nc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function JS(){const s=Nc("canvas");return s.style.display="block",s}const bx={};function Ex(...s){const t="THREE."+s.shift();console.log(t,...s)}function lt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function sn(...s){const t="THREE."+s.shift();console.error(t,...s)}function Fo(...s){const t=s.join(" ");t in bx||(bx[t]=!0,lt(...s))}function $S(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class $a{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,mh=180/Math.PI;function Go(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Et(s,t,i){return Math.max(t,Math.min(i,s))}function eM(s,t){return(s%t+t)%t}function Qf(s,t,i){return(1-i)*s+i*t}function Do(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,i=0){mt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=u[d+0],M=u[d+1],T=u[d+2],R=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=R;return}if(g!==R||m!==S||p!==M||_!==T){let y=m*S+p*M+_*T+g*R;y<0&&(S=-S,M=-M,T=-T,R=-R,y=-y);let v=1-h;if(y<.9995){const O=Math.acos(y),w=Math.sin(O);v=Math.sin(v*O)/w,h=Math.sin(h*O)/w,m=m*v+S*h,p=p*v+M*h,_=_*v+T*h,g=g*v+R*h}else{m=m*v+S*h,p=p*v+M*h,_=_*v+T*h,g=g*v+R*h;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[d],S=u[d+1],M=u[d+2],T=u[d+3];return t[i]=h*T+_*g+m*M-p*S,t[i+1]=m*T+_*S+p*g-h*M,t[i+2]=p*T+_*M+h*S-m*g,t[i+3]=_*T-h*g-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),S=m(r/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*M*T,this._y=p*M*g-S*_*T,this._z=p*_*T+S*M*g,this._w=p*_*g-S*M*T;break;case"YXZ":this._x=S*_*g+p*M*T,this._y=p*M*g-S*_*T,this._z=p*_*T-S*M*g,this._w=p*_*g+S*M*T;break;case"ZXY":this._x=S*_*g-p*M*T,this._y=p*M*g+S*_*T,this._z=p*_*T+S*M*g,this._w=p*_*g-S*M*T;break;case"ZYX":this._x=S*_*g-p*M*T,this._y=p*M*g+S*_*T,this._z=p*_*T-S*M*g,this._w=p*_*g+S*M*T;break;case"YZX":this._x=S*_*g+p*M*T,this._y=p*M*g+S*_*T,this._z=p*_*T-S*M*g,this._w=p*_*g-S*M*T;break;case"XZY":this._x=S*_*g-p*M*T,this._y=p*M*g-S*_*T,this._z=p*_*T+S*M*g,this._w=p*_*g+S*M*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new re,Tx=new Vo;class ft{constructor(t,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],M=r[5],T=r[8],R=l[0],y=l[3],v=l[6],O=l[1],w=l[4],P=l[7],V=l[2],N=l[5],G=l[8];return u[0]=d*R+h*O+m*V,u[3]=d*y+h*w+m*N,u[6]=d*v+h*P+m*G,u[1]=p*R+_*O+g*V,u[4]=p*y+_*w+g*N,u[7]=p*v+_*P+g*G,u[2]=S*R+M*O+T*V,u[5]=S*y+M*w+T*N,u[8]=S*v+M*P+T*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,S=h*m-_*u,M=p*u-d*m,T=i*g+r*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(h*r-l*d)*R,t[3]=S*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-h*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply($f.makeScale(t,i)),this}rotate(t){return this.premultiply($f.makeRotation(-t)),this}translate(t,i){return this.premultiply($f.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new ft,Ax=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tM(){const s={enabled:!0,workingColorSpace:Ja,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===kt&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Er(l.r),l.g=Er(l.g),l.b=Er(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zi?Uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ja]:{primaries:t,whitePoint:r,transfer:Uc,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),s}const Ut=tM();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ur;class nM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ur===void 0&&(ur=Nc("canvas")),ur.width=t.width,ur.height=t.height;const l=ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ur}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Nc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:t.width,height:t.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iM=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Go(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ed(l[d].image)):u.push(ed(l[d]))}else u=ed(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let aM=0;const td=new re;class Rn extends $a{constructor(t=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,r=da,l=da,u=An,d=Cs,h=Ri,m=ri,p=Rn.DEFAULT_ANISOTROPY,_=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Go(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case Id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case Id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Sg;Rn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],S=m[1],M=m[5],T=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+R)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,P=(M+1)/2,V=(v+1)/2,N=(_+S)/4,G=(g+R)/4,ne=(T+y)/4;return w>P&&w>V?w<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(w),l=N/r,u=G/r):P>V?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=N/l,u=ne/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=G/u,l=ne/u),this.set(r,l,u,i),this}let O=Math.sqrt((y-T)*(y-T)+(g-R)*(g-R)+(S-_)*(S-_));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(g-R)/O,this.z=(S-_)/O,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends $a{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Rn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ah(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends sM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class wg extends Rn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends Rn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,bi):bi.fromBufferAttribute(u,d),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),rc.subVectors(this.max,wo),fr.subVectors(t.a,wo),dr.subVectors(t.b,wo),hr.subVectors(t.c,wo),ka.subVectors(dr,fr),Xa.subVectors(hr,dr),_s.subVectors(fr,hr);let i=[0,-ka.z,ka.y,0,-Xa.z,Xa.y,0,-_s.z,_s.y,ka.z,0,-ka.x,Xa.z,0,-Xa.x,_s.z,0,-_s.x,-ka.y,ka.x,0,-Xa.y,Xa.x,0,-_s.y,_s.x,0];return!nd(i,fr,dr,hr,rc)||(i=[1,0,0,0,1,0,0,0,1],!nd(i,fr,dr,hr,rc))?!1:(oc.crossVectors(ka,Xa),i=[oc.x,oc.y,oc.z],nd(i,fr,dr,hr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new re,new re,new re,new re,new re,new re,new re,new re],bi=new re,sc=new ko,fr=new re,dr=new re,hr=new re,ka=new re,Xa=new re,_s=new re,wo=new re,rc=new re,oc=new re,Ss=new re;function nd(s,t,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){Ss.fromArray(s,u);const h=l.x*Math.abs(Ss.x)+l.y*Math.abs(Ss.y)+l.z*Math.abs(Ss.z),m=t.dot(Ss),p=i.dot(Ss),_=r.dot(Ss);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const oM=new ko,Uo=new re,id=new re;class Rh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):oM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(id)),this.expandByPoint(Uo.copy(t.center).sub(id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new re,ad=new re,lc=new re,Wa=new re,sd=new re,cc=new re,rd=new re;class lM{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ad.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Wa.copy(this.origin).sub(ad);const u=t.distanceTo(i)*.5,d=-this.direction.dot(lc),h=Wa.dot(this.direction),m=-Wa.dot(lc),p=Wa.lengthSq(),_=Math.abs(1-d*d);let g,S,M,T;if(_>0)if(g=d*m-h,S=d*h-m,T=u*_,g>=0)if(S>=-T)if(S<=T){const R=1/_;g*=R,S*=R,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-T?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=T?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ad).addScaledVector(lc,S),M}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const r=ra.dot(this.direction),l=ra.dot(ra)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,r,l,u){sd.subVectors(i,t),cc.subVectors(r,t),rd.crossVectors(sd,cc);let d=this.direction.dot(rd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Wa.subVectors(this.origin,t);const m=h*this.direction.dot(cc.crossVectors(Wa,cc));if(m<0)return null;const p=h*this.direction.dot(sd.cross(Wa));if(p<0||m+p>d)return null;const _=-h*Wa.dot(rd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn{constructor(t,i,r,l,u,d,h,m,p,_,g,S,M,T,R,y){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,g,S,M,T,R,y)}set(t,i,r,l,u,d,h,m,p,_,g,S,M,T,R,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=M,v[7]=T,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/pr.setFromMatrixColumn(t,0).length(),u=1/pr.setFromMatrixColumn(t,1).length(),d=1/pr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*_,M=d*g,T=h*_,R=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=T+M*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,M=m*g,T=p*_,R=p*g;i[0]=S+R*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=M*h-T,i[6]=R+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,M=m*g,T=p*_,R=p*g;i[0]=S-R*h,i[4]=-d*g,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*_,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,M=d*g,T=h*_,R=h*g;i[0]=m*_,i[4]=T*p-M,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,M=d*p,T=h*m,R=h*p;i[0]=m*_,i[4]=R-S*g,i[8]=T*g+M,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+T,i[10]=S-R*g}else if(t.order==="XZY"){const S=d*m,M=d*p,T=h*m,R=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+R,i[5]=d*_,i[9]=M*g-T,i[2]=T*g-M,i[6]=h*_,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cM,t,uM)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),qa.crossVectors(r,ei),qa.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),qa.crossVectors(r,ei)),qa.normalize(),uc.crossVectors(ei,qa),l[0]=qa.x,l[4]=uc.x,l[8]=ei.x,l[1]=qa.y,l[5]=uc.y,l[9]=ei.y,l[2]=qa.z,l[6]=uc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],M=r[13],T=r[2],R=r[6],y=r[10],v=r[14],O=r[3],w=r[7],P=r[11],V=r[15],N=l[0],G=l[4],ne=l[8],D=l[12],C=l[1],H=l[5],$=l[9],se=l[13],le=l[2],ee=l[6],L=l[10],Y=l[14],W=l[3],he=l[7],xe=l[11],Ue=l[15];return u[0]=d*N+h*C+m*le+p*W,u[4]=d*G+h*H+m*ee+p*he,u[8]=d*ne+h*$+m*L+p*xe,u[12]=d*D+h*se+m*Y+p*Ue,u[1]=_*N+g*C+S*le+M*W,u[5]=_*G+g*H+S*ee+M*he,u[9]=_*ne+g*$+S*L+M*xe,u[13]=_*D+g*se+S*Y+M*Ue,u[2]=T*N+R*C+y*le+v*W,u[6]=T*G+R*H+y*ee+v*he,u[10]=T*ne+R*$+y*L+v*xe,u[14]=T*D+R*se+y*Y+v*Ue,u[3]=O*N+w*C+P*le+V*W,u[7]=O*G+w*H+P*ee+V*he,u[11]=O*ne+w*$+P*L+V*xe,u[15]=O*D+w*se+P*Y+V*Ue,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],S=t[10],M=t[14],T=t[3],R=t[7],y=t[11],v=t[15];return T*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*M-r*m*M)+R*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*_-u*m*_)+y*(+i*p*g-i*h*M-u*d*g+r*d*M+u*h*_-r*p*_)+v*(-l*h*_-i*m*g+i*h*S+l*d*g-r*d*S+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],S=t[10],M=t[11],T=t[12],R=t[13],y=t[14],v=t[15],O=g*y*p-R*S*p+R*m*M-h*y*M-g*m*v+h*S*v,w=T*S*p-_*y*p-T*m*M+d*y*M+_*m*v-d*S*v,P=_*R*p-T*g*p+T*h*M-d*R*M-_*h*v+d*g*v,V=T*g*m-_*R*m-T*h*S+d*R*S+_*h*y-d*g*y,N=i*O+r*w+l*P+u*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/N;return t[0]=O*G,t[1]=(R*S*u-g*y*u-R*l*M+r*y*M+g*l*v-r*S*v)*G,t[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*v+r*m*v)*G,t[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*M-r*m*M)*G,t[4]=w*G,t[5]=(_*y*u-T*S*u+T*l*M-i*y*M-_*l*v+i*S*v)*G,t[6]=(T*m*u-d*y*u-T*l*p+i*y*p+d*l*v-i*m*v)*G,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*M+i*m*M)*G,t[8]=P*G,t[9]=(T*g*u-_*R*u-T*r*M+i*R*M+_*r*v-i*g*v)*G,t[10]=(d*R*u-T*h*u+T*r*p-i*R*p-d*r*v+i*h*v)*G,t[11]=(_*h*u-d*g*u-_*r*p+i*g*p+d*r*M-i*h*M)*G,t[12]=V*G,t[13]=(_*R*l-T*g*l+T*r*S-i*R*S-_*r*y+i*g*y)*G,t[14]=(T*h*l-d*R*l-T*r*m+i*R*m+d*r*y-i*h*y)*G,t[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*S+i*h*S)*G,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,M=u*_,T=u*g,R=d*_,y=d*g,v=h*g,O=m*p,w=m*_,P=m*g,V=r.x,N=r.y,G=r.z;return l[0]=(1-(R+v))*V,l[1]=(M+P)*V,l[2]=(T-w)*V,l[3]=0,l[4]=(M-P)*N,l[5]=(1-(S+v))*N,l[6]=(y+O)*N,l[7]=0,l[8]=(T+w)*G,l[9]=(y-O)*G,l[10]=(1-(S+R))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=pr.set(l[0],l[1],l[2]).length();const d=pr.set(l[4],l[5],l[6]).length(),h=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/u,_=1/d,g=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Bi,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let T,R;if(m)T=u/(d-u),R=d*u/(d-u);else if(h===Bi)T=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Lc)T=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Bi,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let T,R;if(m)T=1/(d-u),R=d/(d-u);else if(h===Bi)T=-2/(d-u),R=-(d+u)/(d-u);else if(h===Lc)T=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const pr=new re,Ei=new gn,cM=new re(0,0,0),uM=new re(1,1,1),qa=new re,uc=new re,ei=new re,Cx=new gn,Dx=new Vo;class xa{constructor(t=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Cx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Dx.setFromEuler(this),this.setFromQuaternion(Dx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fM=0;const wx=new re,mr=new Vo,oa=new gn,fc=new re,Lo=new re,dM=new re,hM=new Vo,Ux=new re(1,0,0),Lx=new re(0,1,0),Nx=new re(0,0,1),Ox={type:"added"},pM={type:"removed"},xr={type:"childadded",child:null},od={type:"childremoved",child:null};class si extends $a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const t=new re,i=new xa,r=new Vo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new ft}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(Ux,t)}rotateY(t){return this.rotateOnAxis(Lx,t)}rotateZ(t){return this.rotateOnAxis(Nx,t)}translateOnAxis(t,i){return wx.copy(t).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ux,t)}translateY(t){return this.translateOnAxis(Lx,t)}translateZ(t){return this.translateOnAxis(Nx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Lo,fc,this.up):oa.lookAt(fc,Lo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(oa),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(sn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ox),xr.child=t,this.dispatchEvent(xr),xr.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pM),od.child=t,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ox),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,hM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),S=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}si.DEFAULT_UP=new re(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new re,la=new re,ld=new re,ca=new re,gr=new re,vr=new re,Px=new re,cd=new re,ud=new re,fd=new re,dd=new rn,hd=new rn,pd=new rn;class Ai{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ti.subVectors(l,i),la.subVectors(r,i),ld.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(la),m=Ti.dot(ld),p=la.dot(la),_=la.dot(ld),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-h*_)*S,T=(d*_-h*m)*S;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ca.x),m.addScaledVector(d,ca.y),m.addScaledVector(h,ca.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(t,i),hd.fromBufferAttribute(t,r),pd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(dd,u.x),d.addScaledVector(hd,u.y),d.addScaledVector(pd,u.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),la.subVectors(t,i),Ti.cross(la).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ai.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;gr.subVectors(l,r),vr.subVectors(u,r),cd.subVectors(t,r);const m=gr.dot(cd),p=vr.dot(cd);if(m<=0&&p<=0)return i.copy(r);ud.subVectors(t,l);const _=gr.dot(ud),g=vr.dot(ud);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(gr,d);fd.subVectors(t,u);const M=gr.dot(fd),T=vr.dot(fd);if(T>=0&&M<=T)return i.copy(u);const R=M*p-m*T;if(R<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(vr,h);const y=_*T-M*g;if(y<=0&&g-_>=0&&M-T>=0)return Px.subVectors(u,l),h=(g-_)/(g-_+(M-T)),i.copy(l).addScaledVector(Px,h);const v=1/(y+R+S);return d=R*v,h=S*v,i.copy(r).addScaledVector(gr,d).addScaledVector(vr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},dc={h:0,s:0,l:0};function md(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class zt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ut.workingColorSpace){if(t=eM(t,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=md(d,u,t+1/3),this.g=md(d,u,t),this.b=md(d,u,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=an){function r(u){u!==void 0&&parseFloat(u)<1&&lt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:lt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=an){const r=Lg[t.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Ut.workingToColorSpace(Pn.copy(this),t),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,u=Pn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=an){Ut.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==an?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+i,Ya.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ya),t.getHSL(dc);const r=Qf(Ya.h,dc.h,i),l=Qf(Ya.s,dc.s,i),u=Qf(Ya.l,dc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new zt;zt.NAMES=Lg;let mM=0;class Lr extends $a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=br,this.side=ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Dd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(r.blending=this.blending),this.side!==ma&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Dd&&(r.blendDst=this.blendDst),this.blendEquation!==As&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ng extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new re,hc=new mt;let xM=0;class vi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=yx,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yx&&(t.usage=this.usage),t}}class Og extends vi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Pg extends vi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ds extends vi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let gM=0;const xi=new gn,xd=new si,_r=new re,ti=new ko,No=new ko,En=new re;class ga extends $a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dg(t)?Pg:Og)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,r){return xi.makeTranslation(t,i,r),this.applyMatrix4(xi),this}scale(t,i,r){return xi.makeScale(t,i,r),this.applyMatrix4(xi),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ds(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];No.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ti.min,No.min),ti.expandByPoint(En),En.addVectors(ti.max,No.max),ti.expandByPoint(En)):(ti.expandByPoint(No.min),ti.expandByPoint(No.max))}ti.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)En.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(En));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)En.fromBufferAttribute(h,p),m&&(_r.fromBufferAttribute(t,p),En.add(_r)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<r.count;ne++)h[ne]=new re,m[ne]=new re;const p=new re,_=new re,g=new re,S=new mt,M=new mt,T=new mt,R=new re,y=new re;function v(ne,D,C){p.fromBufferAttribute(r,ne),_.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),S.fromBufferAttribute(u,ne),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,C),_.sub(p),g.sub(p),M.sub(S),T.sub(S);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(H),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(H),h[ne].add(R),h[D].add(R),h[C].add(R),m[ne].add(y),m[D].add(y),m[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let ne=0,D=O.length;ne<D;++ne){const C=O[ne],H=C.start,$=C.count;for(let se=H,le=H+$;se<le;se+=3)v(t.getX(se+0),t.getX(se+1),t.getX(se+2))}const w=new re,P=new re,V=new re,N=new re;function G(ne){V.fromBufferAttribute(l,ne),N.copy(V);const D=h[ne];w.copy(D),w.sub(V.multiplyScalar(V.dot(D))).normalize(),P.crossVectors(N,D);const H=P.dot(m[ne])<0?-1:1;d.setXYZW(ne,w.x,w.y,w.z,H)}for(let ne=0,D=O.length;ne<D;++ne){const C=O[ne],H=C.start,$=C.count;for(let se=H,le=H+$;se<le;se+=3)G(t.getX(se+0)),G(t.getX(se+1)),G(t.getX(se+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,_=new re,g=new re;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),R=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let M=0,T=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*_;for(let v=0;v<_;v++)S[T++]=p[M++]}return new vi(S,_,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ga,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],M=t(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zx=new gn,Ms=new lM,pc=new Rh,Bx=new re,mc=new re,xc=new re,gc=new re,gd=new re,vc=new re,Fx=new re,_c=new re;class Fi extends si{constructor(t=new ga,i=new Ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){vc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(gd.fromBufferAttribute(g,t),d?vc.addScaledVector(gd,_):vc.addScaledVector(gd.sub(i),_))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),Ms.copy(t.ray).recast(t.near),!(pc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(pc,Bx)===null||Ms.origin.distanceToSquared(Bx)>(t.far-t.near)**2))&&(zx.copy(u).invert(),Ms.copy(t.ray).applyMatrix4(zx),!(r.boundingBox!==null&&Ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Ms)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,R=S.length;T<R;T++){const y=S[T],v=d[y.materialIndex],O=Math.max(y.start,M.start),w=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=O,V=w;P<V;P+=3){const N=h.getX(P),G=h.getX(P+1),ne=h.getX(P+2);l=Sc(this,v,t,r,p,_,g,N,G,ne),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=T,v=R;y<v;y+=3){const O=h.getX(y),w=h.getX(y+1),P=h.getX(y+2);l=Sc(this,d,t,r,p,_,g,O,w,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,R=S.length;T<R;T++){const y=S[T],v=d[y.materialIndex],O=Math.max(y.start,M.start),w=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=O,V=w;P<V;P+=3){const N=P,G=P+1,ne=P+2;l=Sc(this,v,t,r,p,_,g,N,G,ne),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=T,v=R;y<v;y+=3){const O=y,w=y+1,P=y+2;l=Sc(this,d,t,r,p,_,g,O,w,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vM(s,t,i,r,l,u,d,h){let m;if(t.side===Tn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ma,h),m===null)return null;_c.copy(h),_c.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:s}}function Sc(s,t,i,r,l,u,d,h,m,p){s.getVertexPosition(h,mc),s.getVertexPosition(m,xc),s.getVertexPosition(p,gc);const _=vM(s,t,i,r,mc,xc,gc,Fx);if(_){const g=new re;Ai.getBarycoord(Fx,mc,xc,gc,g),l&&(_.uv=Ai.getInterpolatedAttribute(l,h,m,p,g,new mt)),u&&(_.uv1=Ai.getInterpolatedAttribute(u,h,m,p,g,new mt)),d&&(_.normal=Ai.getInterpolatedAttribute(d,h,m,p,g,new re),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new re,materialIndex:0};Ai.getNormal(mc,xc,gc,S.normal),_.face=S,_.barycoord=g}return _}class Xo extends ga{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,M=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ds(p,3)),this.setAttribute("normal",new Ds(_,3)),this.setAttribute("uv",new Ds(g,2));function T(R,y,v,O,w,P,V,N,G,ne,D){const C=P/G,H=V/ne,$=P/2,se=V/2,le=N/2,ee=G+1,L=ne+1;let Y=0,W=0;const he=new re;for(let xe=0;xe<L;xe++){const Ue=xe*H-se;for(let He=0;He<ee;He++){const Ie=He*C-$;he[R]=Ie*O,he[y]=Ue*w,he[v]=le,p.push(he.x,he.y,he.z),he[R]=0,he[y]=0,he[v]=N>0?1:-1,_.push(he.x,he.y,he.z),g.push(He/G),g.push(1-xe/ne),Y+=1}}for(let xe=0;xe<ne;xe++)for(let Ue=0;Ue<G;Ue++){const He=S+Ue+ee*xe,Ie=S+Ue+ee*(xe+1),tt=S+(Ue+1)+ee*(xe+1),dt=S+(Ue+1)+ee*xe;m.push(He,Ie,dt),m.push(Ie,tt,dt),W+=6}h.addGroup(M,W,D),M+=W,S+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Bn(s){const t={};for(let i=0;i<s.length;i++){const r=wr(s[i]);for(const l in r)t[l]=r[l]}return t}function _M(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function zg(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const SM={clone:wr,merge:Bn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=_M(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Bg extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new re,Ix=new mt,Hx=new mt;class gi extends Bg{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,i){return this.getViewBounds(t,Ix,Hx),i.subVectors(Hx,Ix)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,Mr=1;class bM extends si{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Sr,Mr,t,i);l.layers=this.layers,this.add(l);const u=new gi(Sr,Mr,t,i);u.layers=this.layers,this.add(u);const d=new gi(Sr,Mr,t,i);d.layers=this.layers,this.add(d);const h=new gi(Sr,Mr,t,i);h.layers=this.layers,this.add(h);const m=new gi(Sr,Mr,t,i);m.layers=this.layers,this.add(m);const p=new gi(Sr,Mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,S,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Fg extends Rn{constructor(t=[],i=Ar,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class EM extends Di{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Fg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xo(5,5,5),u=new oi({name:"CubemapFromEquirect",uniforms:wr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tn,blending:Ci});u.uniforms.tEquirect.value=i;const d=new Fi(l,u),h=i.minFilter;return i.minFilter===Cs&&(i.minFilter=An),new bM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Mc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,r),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Mc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class xh extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class AM extends Rn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ai,_=ai,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new re,RM=new re,CM=new ft;class Ts{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=_d.subVectors(r,i).cross(RM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(_d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||CM.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Rh,DM=new mt(.5,.5),yc=new re;class Ig{constructor(t=new Ts,i=new Ts,r=new Ts,l=new Ts,u=new Ts,d=new Ts){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Bi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],M=u[7],T=u[8],R=u[9],y=u[10],v=u[11],O=u[12],w=u[13],P=u[14],V=u[15];if(l[0].setComponents(p-d,M-_,v-T,V-O).normalize(),l[1].setComponents(p+d,M+_,v+T,V+O).normalize(),l[2].setComponents(p+h,M+g,v+R,V+w).normalize(),l[3].setComponents(p-h,M-g,v-R,V-w).normalize(),r)l[4].setComponents(m,S,y,P).normalize(),l[5].setComponents(p-m,M-S,v-y,V-P).normalize();else if(l[4].setComponents(p-m,M-S,v-y,V-P).normalize(),i===Bi)l[5].setComponents(p+m,M+S,v+y,V+P).normalize();else if(i===Lc)l[5].setComponents(m,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const i=DM.distanceTo(t.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends Rn{constructor(t,i,r=Qa,l,u,d,h=ai,m=ai,p,_=Bo,g=1){if(_!==Bo&&_!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ah(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Hg extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wo extends ga{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=t/h,S=i/m,M=[],T=[],R=[],y=[];for(let v=0;v<_;v++){const O=v*S-d;for(let w=0;w<p;w++){const P=w*g-u;T.push(P,-O,0),R.push(0,0,1),y.push(w/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const w=O+p*v,P=O+p*(v+1),V=O+1+p*(v+1),N=O+1+p*v;M.push(w,P,N),M.push(P,V,N)}this.setIndex(M),this.setAttribute("position",new Ds(T,3)),this.setAttribute("normal",new Ds(R,3)),this.setAttribute("uv",new Ds(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.widthSegments,t.heightSegments)}}class wM extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ho,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class UM extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dh extends Bg{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class NM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class nn{constructor(t){this.value=t}clone(){return new nn(this.value.clone===void 0?this.value:this.value.clone())}}function Gx(s,t,i,r){const l=OM(r);switch(i){case Tg:return s*t;case Rg:return s*t/l.components*l.byteLength;case yh:return s*t/l.components*l.byteLength;case bh:return s*t*2/l.components*l.byteLength;case Eh:return s*t*2/l.components*l.byteLength;case Ag:return s*t*3/l.components*l.byteLength;case Ri:return s*t*4/l.components*l.byteLength;case Th:return s*t*4/l.components*l.byteLength;case Tc:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gd:case kd:return Math.max(s,16)*Math.max(t,8)/4;case Hd:case Vd:return Math.max(s,8)*Math.max(t,8)/2;case Xd:case Wd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case $d:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case oh:case lh:case ch:return Math.ceil(s/4)*Math.ceil(t/4)*16;case uh:case fh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case dh:case hh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OM(s){switch(s){case ri:case Mg:return{byteLength:1,components:1};case zo:case yg:case Ur:return{byteLength:2,components:1};case Sh:case Mh:return{byteLength:2,components:4};case Qa:case _h:case ha:return{byteLength:4,components:1};case bg:case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);function Gg(){let s=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function PM(s){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<g.length;M++){const T=g[S],R=g[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++S,g[S]=R)}g.length=S+1;for(let M=0,T=g.length;M<T;M++){const R=g[M];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,by=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ry=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Oy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Py=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,By=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ab=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ub=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:zM,alphahash_pars_fragment:BM,alphamap_fragment:FM,alphamap_pars_fragment:IM,alphatest_fragment:HM,alphatest_pars_fragment:GM,aomap_fragment:VM,aomap_pars_fragment:kM,batching_pars_vertex:XM,batching_vertex:WM,begin_vertex:qM,beginnormal_vertex:YM,bsdfs:ZM,iridescence_fragment:jM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:ey,color_fragment:ty,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ay,common:sy,cube_uv_reflection_fragment:ry,defaultnormal_vertex:oy,displacementmap_pars_vertex:ly,displacementmap_vertex:cy,emissivemap_fragment:uy,emissivemap_pars_fragment:fy,colorspace_fragment:dy,colorspace_pars_fragment:hy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:xy,envmap_pars_vertex:gy,envmap_physical_pars_fragment:Cy,envmap_vertex:vy,fog_vertex:_y,fog_pars_vertex:Sy,fog_fragment:My,fog_pars_fragment:yy,gradientmap_pars_fragment:by,lightmap_pars_fragment:Ey,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:Ay,lights_pars_begin:Ry,lights_toon_fragment:Dy,lights_toon_pars_fragment:wy,lights_phong_fragment:Uy,lights_phong_pars_fragment:Ly,lights_physical_fragment:Ny,lights_physical_pars_fragment:Oy,lights_fragment_begin:Py,lights_fragment_maps:zy,lights_fragment_end:By,logdepthbuf_fragment:Fy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Gy,map_fragment:Vy,map_pars_fragment:ky,map_particle_fragment:Xy,map_particle_pars_fragment:Wy,metalnessmap_fragment:qy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:Zy,morphcolor_vertex:jy,morphnormal_vertex:Ky,morphtarget_pars_vertex:Qy,morphtarget_vertex:Jy,normal_fragment_begin:$y,normal_fragment_maps:eb,normal_pars_fragment:tb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:ab,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:ob,iridescence_pars_fragment:lb,opaque_fragment:cb,packing:ub,premultiplied_alpha_fragment:fb,project_vertex:db,dithering_fragment:hb,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:vb,shadowmap_vertex:_b,shadowmask_pars_fragment:Sb,skinbase_vertex:Mb,skinning_pars_vertex:yb,skinning_vertex:bb,skinnormal_vertex:Eb,specularmap_fragment:Tb,specularmap_pars_fragment:Ab,tonemapping_fragment:Rb,tonemapping_pars_fragment:Cb,transmission_fragment:Db,transmission_pars_fragment:wb,uv_pars_fragment:Ub,uv_pars_vertex:Lb,uv_vertex:Nb,worldpos_vertex:Ob,background_vert:Pb,background_frag:zb,backgroundCube_vert:Bb,backgroundCube_frag:Fb,cube_vert:Ib,cube_frag:Hb,depth_vert:Gb,depth_frag:Vb,distanceRGBA_vert:kb,distanceRGBA_frag:Xb,equirect_vert:Wb,equirect_frag:qb,linedashed_vert:Yb,linedashed_frag:Zb,meshbasic_vert:jb,meshbasic_frag:Kb,meshlambert_vert:Qb,meshlambert_frag:Jb,meshmatcap_vert:$b,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:aE,meshphysical_vert:sE,meshphysical_frag:rE,meshtoon_vert:oE,meshtoon_frag:lE,points_vert:cE,points_frag:uE,shadow_vert:fE,shadow_frag:dE,sprite_vert:hE,sprite_frag:pE},De={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Pi={basic:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new zt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new zt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Bn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Bn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Bn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Bn([De.common,De.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Bn([De.lights,De.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Pi.physical={uniforms:Bn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const bc={r:0,b:0,g:0},bs=new xa,mE=new gn;function xE(s,t,i,r,l,u,d){const h=new zt(0);let m=u===!0?0:1,p,_,g=null,S=0,M=null;function T(w){let P=w.isScene===!0?w.background:null;return P&&P.isTexture&&(P=(w.backgroundBlurriness>0?i:t).get(P)),P}function R(w){let P=!1;const V=T(w);V===null?v(h,m):V&&V.isColor&&(v(V,1),P=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(w,P){const V=T(P);V&&(V.isCubeTexture||V.mapping===Pc)?(_===void 0&&(_=new Fi(new Xo(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:wr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,G,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(bs)),_.material.toneMapped=Ut.getTransfer(V.colorSpace)!==kt,(g!==V||S!==V.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=V,S=V.version,M=s.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Fi(new Wo(2,2),new oi({name:"BackgroundMaterial",uniforms:wr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(V.colorSpace)!==kt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||S!==V.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=V,S=V.version,M=s.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function v(w,P){w.getRGB(bc,zg(s)),r.buffers.color.setClear(bc.r,bc.g,bc.b,P,d)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,P=1){h.set(w),m=P,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,v(h,m)},render:R,addToRenderList:y,dispose:O}}function gE(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,H,$,se,le){let ee=!1;const L=g(se,$,H);u!==L&&(u=L,p(u.object)),ee=M(C,se,$,le),ee&&T(C,se,$,le),le!==null&&t.update(le,s.ELEMENT_ARRAY_BUFFER),(ee||d)&&(d=!1,P(C,H,$,se),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function g(C,H,$){const se=$.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let ee=le[H.id];ee===void 0&&(ee={},le[H.id]=ee);let L=ee[se];return L===void 0&&(L=S(m()),ee[se]=L),L}function S(C){const H=[],$=[],se=[];for(let le=0;le<i;le++)H[le]=0,$[le]=0,se[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:se,object:C,attributes:{},index:null}}function M(C,H,$,se){const le=u.attributes,ee=H.attributes;let L=0;const Y=$.getAttributes();for(const W in Y)if(Y[W].location>=0){const xe=le[W];let Ue=ee[W];if(Ue===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Ue=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Ue=C.instanceColor)),xe===void 0||xe.attribute!==Ue||Ue&&xe.data!==Ue.data)return!0;L++}return u.attributesNum!==L||u.index!==se}function T(C,H,$,se){const le={},ee=H.attributes;let L=0;const Y=$.getAttributes();for(const W in Y)if(Y[W].location>=0){let xe=ee[W];xe===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const Ue={};Ue.attribute=xe,xe&&xe.data&&(Ue.data=xe.data),le[W]=Ue,L++}u.attributes=le,u.attributesNum=L,u.index=se}function R(){const C=u.newAttributes;for(let H=0,$=C.length;H<$;H++)C[H]=0}function y(C){v(C,0)}function v(C,H){const $=u.newAttributes,se=u.enabledAttributes,le=u.attributeDivisors;$[C]=1,se[C]===0&&(s.enableVertexAttribArray(C),se[C]=1),le[C]!==H&&(s.vertexAttribDivisor(C,H),le[C]=H)}function O(){const C=u.newAttributes,H=u.enabledAttributes;for(let $=0,se=H.length;$<se;$++)H[$]!==C[$]&&(s.disableVertexAttribArray($),H[$]=0)}function w(C,H,$,se,le,ee,L){L===!0?s.vertexAttribIPointer(C,H,$,le,ee):s.vertexAttribPointer(C,H,$,se,le,ee)}function P(C,H,$,se){R();const le=se.attributes,ee=$.getAttributes(),L=H.defaultAttributeValues;for(const Y in ee){const W=ee[Y];if(W.location>=0){let he=le[Y];if(he===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const xe=he.normalized,Ue=he.itemSize,He=t.get(he);if(He===void 0)continue;const Ie=He.buffer,tt=He.type,dt=He.bytesPerElement,ce=tt===s.INT||tt===s.UNSIGNED_INT||he.gpuType===_h;if(he.isInterleavedBufferAttribute){const me=he.data,ye=me.stride,Xe=he.offset;if(me.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)v(W.location+Fe,me.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)y(W.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Fe=0;Fe<W.locationSize;Fe++)w(W.location+Fe,Ue/W.locationSize,tt,xe,ye*dt,(Xe+Ue/W.locationSize*Fe)*dt,ce)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)v(W.location+me,he.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<W.locationSize;me++)y(W.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let me=0;me<W.locationSize;me++)w(W.location+me,Ue/W.locationSize,tt,xe,Ue*dt,Ue/W.locationSize*me*dt,ce)}}else if(L!==void 0){const xe=L[Y];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(W.location,xe);break;case 3:s.vertexAttrib3fv(W.location,xe);break;case 4:s.vertexAttrib4fv(W.location,xe);break;default:s.vertexAttrib1fv(W.location,xe)}}}}O()}function V(){ne();for(const C in r){const H=r[C];for(const $ in H){const se=H[$];for(const le in se)_(se[le].object),delete se[le];delete H[$]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const $ in H){const se=H[$];for(const le in se)_(se[le].object),delete se[le];delete H[$]}delete r[C.id]}function G(C){for(const H in r){const $=r[H];if($[C.id]===void 0)continue;const se=$[C.id];for(const le in se)_(se[le].object),delete se[le];delete $[C.id]}}function ne(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function vE(s,t,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];i.update(M,r,1)}function m(p,_,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let T=0;for(let R=0;R<g;R++)T+=_[R]*S[R];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function _E(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==Ri&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const ne=G===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ri&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==ha&&!ne)}function m(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(lt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=T>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:O,maxVaryings:w,maxFragmentUniforms:P,vertexTextures:V,maxSamples:N}}function SE(s){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Ts,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const T=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const O=u?0:r,w=O*4;let P=v.clippingState||null;m.value=P,P=_(T,S,w,M);for(let V=0;V!==w;++V)P[V]=i[V];v.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,S,M,T){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,T!==!0||y===null){const v=M+R*4,O=S.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let w=0,P=M;w!==R;++w,P+=4)d.copy(g[w]).applyMatrix4(O,h),d.normal.toArray(y,P),y[P+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function ME(s){let t=new WeakMap;function i(d,h){return h===zd?d.mapping=Ar:h===Bd&&(d.mapping=Rr),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zd||h===Bd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new EM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ja=4,Vx=[.125,.215,.35,.446,.526,.582],Rs=20,yE=512,Oo=new Dh,kx=new zt;let Sd=null,Md=0,yd=0,bd=!1;const bE=new re;class Xx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=bE}=u;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sd,Md,yd),this._renderer.xr.enabled=bd,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ar||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ur,format:Ri,colorSpace:Ja,depthBuffer:!1},l=Wx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wx(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EE(u)),this._blurMaterial=AE(u,t,i)}return l}_compileMaterial(t){const i=new Fi(new ga,t);this._renderer.compile(i,Oo)}_sceneToCubeUV(t,i,r,l,u){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(kx),g.toneMapping=Ka,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new Xo,new Ng({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let v=!1;const O=t.background;O?O.isColor&&(y.color.copy(O),t.background=null,v=!0):(y.color.copy(kx),v=!0);for(let w=0;w<6;w++){const P=w%3;P===0?(m.up.set(0,p[w],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[w],u.y,u.z)):P===1?(m.up.set(0,0,p[w]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[w],u.z)):(m.up.set(0,p[w],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[w]));const V=this._cubeSize;yr(l,P*V,w>2?V:0,V,V),g.setRenderTarget(l),v&&g.render(R,m),g.render(t,m)}g.toneMapping=M,g.autoClear=S,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ar||t.mapping===Rr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;yr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Oo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const O=3*Math.max(this._cubeSize,16),w=4*this._cubeSize;this._ggxMaterial=TE(this._lodMax,O,w)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=.05+p*.95,M=g*S,{_lodMax:T}=this,R=this._sizeLods[r],y=3*R*(r>T-ja?r-T+ja:0),v=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,yr(u,y,v,3*R,2*R),l.setRenderTarget(u),l.render(h,Oo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,yr(t,y,v,3*R,2*R),l.setRenderTarget(t),l.render(h,Oo)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Rs-1),R=u/T,y=isFinite(u)?1+Math.floor(_*R):Rs;y>Rs&&lt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const v=[];let O=0;for(let G=0;G<Rs;++G){const ne=G/R,D=Math.exp(-ne*ne/2);v.push(D),G===0?O+=D:G<y&&(O+=2*D)}for(let G=0;G<v.length;G++)v[G]=v[G]/O;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:w}=this;S.dTheta.value=T,S.mipInt.value=w-r;const P=this._sizeLods[l],V=3*P*(l>w-ja?l-w+ja:0),N=4*(this._cubeSize-P);yr(i,V,N,3*P,2*P),m.setRenderTarget(i),m.render(g,Oo)}}function EE(s){const t=[],i=[],r=[];let l=s;const u=s-ja+1+Vx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>s-ja?m=Vx[d-s+ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,R=3,y=2,v=1,O=new Float32Array(R*T*M),w=new Float32Array(y*T*M),P=new Float32Array(v*T*M);for(let N=0;N<M;N++){const G=N%3*2/3-1,ne=N>2?0:-1,D=[G,ne,0,G+2/3,ne,0,G+2/3,ne+1,0,G,ne,0,G+2/3,ne+1,0,G,ne+1,0];O.set(D,R*T*N),w.set(S,y*T*N);const C=[N,N,N,N,N,N];P.set(C,v*T*N)}const V=new ga;V.setAttribute("position",new vi(O,R)),V.setAttribute("uv",new vi(w,y)),V.setAttribute("faceIndex",new vi(P,v)),r.push(new Fi(V,null)),l>ja&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Wx(s,t,i){const r=new Di(s,t,i);return r.texture.mapping=Pc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yr(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function TE(s,t,i){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function AE(s,t,i){const r=new Float32Array(Rs),l=new re(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function qx(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Yx(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RE(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===zd||m===Bd,_=m===Ar||m===Rr;if(p||_){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Xx(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Xx(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function CE(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fo("WebGLRenderer: "+r+" extension not supported."),l}}}function DE(s,t,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)t.update(S[M],s.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,T=g.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let w=0,P=O.length;w<P;w+=3){const V=O[w+0],N=O[w+1],G=O[w+2];S.push(V,N,N,G,G,V)}}else if(T!==void 0){const O=T.array;R=T.version;for(let w=0,P=O.length/3-1;w<P;w+=3){const V=w+0,N=w+1,G=w+2;S.push(V,N,N,G,G,V)}}else return;const y=new(Dg(S)?Pg:Og)(S,1);y.version=R;const v=u.get(g);v&&t.remove(v),u.set(g,y)}function _(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function wE(s,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){s.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,S*d,T),i.update(M,r,T))}function _(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];i.update(y,r,1)}function g(S,M,T,R){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,M[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,T);let v=0;for(let O=0;O<T;O++)v+=M[O]*R[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function UE(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function LE(s,t,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let D=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",D)};S!==void 0&&S.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let w=0;M===!0&&(w=1),T===!0&&(w=2),R===!0&&(w=3);let P=h.attributes.position.count*w,V=1;P>t.maxTextureSize&&(V=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const N=new Float32Array(P*V*4*g),G=new wg(N,P,V,g);G.type=ha,G.needsUpdate=!0;const ne=w*4;for(let C=0;C<g;C++){const H=y[C],$=v[C],se=O[C],le=P*V*4*C;for(let ee=0;ee<H.count;ee++){const L=ee*ne;M===!0&&(l.fromBufferAttribute(H,ee),N[le+L+0]=l.x,N[le+L+1]=l.y,N[le+L+2]=l.z,N[le+L+3]=0),T===!0&&(l.fromBufferAttribute($,ee),N[le+L+4]=l.x,N[le+L+5]=l.y,N[le+L+6]=l.z,N[le+L+7]=0),R===!0&&(l.fromBufferAttribute(se,ee),N[le+L+8]=l.x,N[le+L+9]=l.y,N[le+L+10]=l.z,N[le+L+11]=se.itemSize===4?l.w:1)}}S={count:g,texture:G,size:new mt(P,V)},r.set(h,S),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let M=0;for(let R=0;R<p.length;R++)M+=p[R];const T=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function NE(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Vg=new Rn,Zx=new Ch(1,1),kg=new wg,Xg=new rM,Wg=new Fg,jx=[],Kx=[],Qx=new Float32Array(16),Jx=new Float32Array(9),$x=new Float32Array(4);function Nr(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=jx[l];if(u===void 0&&(u=new Float32Array(l),jx[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(u,h)}return u}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function _n(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Bc(s,t){let i=Kx[t];i===void 0&&(i=new Int32Array(t),Kx[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function OE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function PE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),_n(i,t)}}function zE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),_n(i,t)}}function BE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),_n(i,t)}}function FE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,r))return;$x.set(r),s.uniformMatrix2fv(this.addr,!1,$x),_n(i,r)}}function IE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,r))return;Jx.set(r),s.uniformMatrix3fv(this.addr,!1,Jx),_n(i,r)}}function HE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,r))return;Qx.set(r),s.uniformMatrix4fv(this.addr,!1,Qx),_n(i,r)}}function GE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function VE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),_n(i,t)}}function kE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),_n(i,t)}}function XE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),_n(i,t)}}function WE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function qE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),_n(i,t)}}function YE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),_n(i,t)}}function ZE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),_n(i,t)}}function jE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Zx.compareFunction=Cg,u=Zx):u=Vg,i.setTexture2D(t||u,l)}function KE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Xg,l)}function QE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Wg,l)}function JE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||kg,l)}function $E(s){switch(s){case 5126:return OE;case 35664:return PE;case 35665:return zE;case 35666:return BE;case 35674:return FE;case 35675:return IE;case 35676:return HE;case 5124:case 35670:return GE;case 35667:case 35671:return VE;case 35668:case 35672:return kE;case 35669:case 35673:return XE;case 5125:return WE;case 36294:return qE;case 36295:return YE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}function e3(s,t){s.uniform1fv(this.addr,t)}function t3(s,t){const i=Nr(t,this.size,2);s.uniform2fv(this.addr,i)}function n3(s,t){const i=Nr(t,this.size,3);s.uniform3fv(this.addr,i)}function i3(s,t){const i=Nr(t,this.size,4);s.uniform4fv(this.addr,i)}function a3(s,t){const i=Nr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function s3(s,t){const i=Nr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function r3(s,t){const i=Nr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function o3(s,t){s.uniform1iv(this.addr,t)}function l3(s,t){s.uniform2iv(this.addr,t)}function c3(s,t){s.uniform3iv(this.addr,t)}function u3(s,t){s.uniform4iv(this.addr,t)}function f3(s,t){s.uniform1uiv(this.addr,t)}function d3(s,t){s.uniform2uiv(this.addr,t)}function h3(s,t){s.uniform3uiv(this.addr,t)}function p3(s,t){s.uniform4uiv(this.addr,t)}function m3(s,t,i){const r=this.cache,l=t.length,u=Bc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Vg,u[d])}function x3(s,t,i){const r=this.cache,l=t.length,u=Bc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Xg,u[d])}function g3(s,t,i){const r=this.cache,l=t.length,u=Bc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Wg,u[d])}function v3(s,t,i){const r=this.cache,l=t.length,u=Bc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||kg,u[d])}function _3(s){switch(s){case 5126:return e3;case 35664:return t3;case 35665:return n3;case 35666:return i3;case 35674:return a3;case 35675:return s3;case 35676:return r3;case 5124:case 35670:return o3;case 35667:case 35671:return l3;case 35668:case 35672:return c3;case 35669:case 35673:return u3;case 5125:return f3;case 36294:return d3;case 36295:return h3;case 36296:return p3;case 35678:case 36198:case 36298:case 36306:case 35682:return m3;case 35679:case 36299:case 36307:return x3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return v3}}class S3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$E(i.type)}}class M3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_3(i.type)}}class y3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function eg(s,t){s.seq.push(t),s.map[t.id]=t}function b3(s,t,i){const r=s.name,l=r.length;for(Ed.lastIndex=0;;){const u=Ed.exec(r),d=Ed.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){eg(i,p===void 0?new S3(h,s,t):new M3(h,s,t));break}else{let g=i.map[h];g===void 0&&(g=new y3(h),eg(i,g)),i=g}}}class Dc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);b3(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function tg(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const E3=37297;let T3=0;function A3(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const ng=new ft;function R3(s){Ut._getMatrix(ng,Ut.workingColorSpace,s);const t=`mat3( ${ng.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case Uc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ig(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+A3(s.getShaderSource(t),h)}else return u}function C3(s,t){const i=R3(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function D3(s,t){let i;switch(t){case OS:i="Linear";break;case PS:i="Reinhard";break;case zS:i="Cineon";break;case BS:i="ACESFilmic";break;case IS:i="AgX";break;case HS:i="Neutral";break;case FS:i="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new re;function w3(){Ut.getLuminanceCoefficients(Ec);const s=Ec.x.toFixed(4),t=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function L3(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function N3(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Po(s){return s!==""}function ag(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O3=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(s){return s.replace(O3,z3)}const P3=new Map;function z3(s,t){let i=ht[t];if(i===void 0){const r=P3.get(t);if(r!==void 0)i=ht[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return gh(i)}const B3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(s){return s.replace(B3,F3)}function F3(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function og(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function I3(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vg?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function H3(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ar:case Rr:t="ENVMAP_TYPE_CUBE";break;case Pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G3(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rr:t="ENVMAP_MODE_REFRACTION";break}return t}function V3(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _g:t="ENVMAP_BLENDING_MULTIPLY";break;case LS:t="ENVMAP_BLENDING_MIX";break;case NS:t="ENVMAP_BLENDING_ADD";break}return t}function k3(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function X3(s,t,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=I3(i),p=H3(i),_=G3(i),g=V3(i),S=k3(i),M=U3(i),T=L3(u),R=l.createProgram();let y,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),v.length>0&&(v+=`
`)):(y=[og(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),v=[og(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?ht.tonemapping_pars_fragment:"",i.toneMapping!==Ka?D3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,C3("linearToOutputTexel",i.outputColorSpace),w3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),d=gh(d),d=ag(d,i),d=sg(d,i),h=gh(h),h=ag(h,i),h=sg(h,i),d=rg(d),h=rg(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=O+y+d,P=O+v+h,V=tg(l,l.VERTEX_SHADER,w),N=tg(l,l.FRAGMENT_SHADER,P);l.attachShader(R,V),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function G(H){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(R)||"",se=l.getShaderInfoLog(V)||"",le=l.getShaderInfoLog(N)||"",ee=$.trim(),L=se.trim(),Y=le.trim();let W=!0,he=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,V,N);else{const xe=ig(l,V,"vertex"),Ue=ig(l,N,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ee+`
`+xe+`
`+Ue)}else ee!==""?lt("WebGLProgram: Program Info Log:",ee):(L===""||Y==="")&&(he=!1);he&&(H.diagnostics={runnable:W,programLog:ee,vertexShader:{log:L,prefix:y},fragmentShader:{log:Y,prefix:v}})}l.deleteShader(V),l.deleteShader(N),ne=new Dc(l,R),D=N3(l,R)}let ne;this.getUniforms=function(){return ne===void 0&&G(this),ne};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,E3)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=T3++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=N,this}let W3=0;class q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Y3(t),i.set(t,r)),r}}class Y3{constructor(t){this.id=W3++,this.code=t,this.usedTimes=0}}function Z3(s,t,i,r,l,u,d){const h=new Ug,m=new q3,p=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,H,$,se){const le=$.fog,ee=se.geometry,L=D.isMeshStandardMaterial?$.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),W=Y&&Y.mapping===Pc?Y.image.height:null,he=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&lt("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const xe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ue=xe!==void 0?xe.length:0;let He=0;ee.morphAttributes.position!==void 0&&(He=1),ee.morphAttributes.normal!==void 0&&(He=2),ee.morphAttributes.color!==void 0&&(He=3);let Ie,tt,dt,ce;if(he){const Rt=Pi[he];Ie=Rt.vertexShader,tt=Rt.fragmentShader}else Ie=D.vertexShader,tt=D.fragmentShader,m.update(D),dt=m.getVertexShaderID(D),ce=m.getFragmentShaderID(D);const me=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Xe=se.isInstancedMesh===!0,Fe=se.isBatchedMesh===!0,st=!!D.map,Qt=!!D.matcap,rt=!!Y,xt=!!D.aoMap,B=!!D.lightMap,Ne=!!D.bumpMap,Ve=!!D.normalMap,pt=!!D.displacementMap,Ce=!!D.emissiveMap,Nt=!!D.metalnessMap,We=!!D.roughnessMap,at=D.anisotropy>0,U=D.clearcoat>0,b=D.dispersion>0,j=D.iridescence>0,fe=D.sheen>0,ge=D.transmission>0,ae=at&&!!D.anisotropyMap,qe=U&&!!D.clearcoatMap,Re=U&&!!D.clearcoatNormalMap,Ke=U&&!!D.clearcoatRoughnessMap,ke=j&&!!D.iridescenceMap,ve=j&&!!D.iridescenceThicknessMap,Se=fe&&!!D.sheenColorMap,Ye=fe&&!!D.sheenRoughnessMap,Be=!!D.specularMap,we=!!D.specularColorMap,nt=!!D.specularIntensityMap,F=ge&&!!D.transmissionMap,Te=ge&&!!D.thicknessMap,be=!!D.gradientMap,Ee=!!D.alphaMap,_e=D.alphaTest>0,pe=!!D.alphaHash,Oe=!!D.extensions;let it=Ka;D.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(it=s.toneMapping);const It={shaderID:he,shaderType:D.type,shaderName:D.name,vertexShader:Ie,fragmentShader:tt,defines:D.defines,customVertexShaderID:dt,customFragmentShaderID:ce,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Fe,batchingColor:Fe&&se._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&se.instanceColor!==null,instancingMorph:Xe&&se.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ja,alphaToCoverage:!!D.alphaToCoverage,map:st,matcap:Qt,envMap:rt,envMapMode:rt&&Y.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:B,bumpMap:Ne,normalMap:Ve,displacementMap:S&&pt,emissiveMap:Ce,normalMapObjectSpace:Ve&&D.normalMapType===XS,normalMapTangentSpace:Ve&&D.normalMapType===kS,metalnessMap:Nt,roughnessMap:We,anisotropy:at,anisotropyMap:ae,clearcoat:U,clearcoatMap:qe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ke,dispersion:b,iridescence:j,iridescenceMap:ke,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:Se,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:we,specularIntensityMap:nt,transmission:ge,transmissionMap:F,thicknessMap:Te,gradientMap:be,opaque:D.transparent===!1&&D.blending===br&&D.alphaToCoverage===!1,alphaMap:Ee,alphaTest:_e,alphaHash:pe,combine:D.combine,mapUv:st&&R(D.map.channel),aoMapUv:xt&&R(D.aoMap.channel),lightMapUv:B&&R(D.lightMap.channel),bumpMapUv:Ne&&R(D.bumpMap.channel),normalMapUv:Ve&&R(D.normalMap.channel),displacementMapUv:pt&&R(D.displacementMap.channel),emissiveMapUv:Ce&&R(D.emissiveMap.channel),metalnessMapUv:Nt&&R(D.metalnessMap.channel),roughnessMapUv:We&&R(D.roughnessMap.channel),anisotropyMapUv:ae&&R(D.anisotropyMap.channel),clearcoatMapUv:qe&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Re&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&R(D.sheenRoughnessMap.channel),specularMapUv:Be&&R(D.specularMap.channel),specularColorMapUv:we&&R(D.specularColorMap.channel),specularIntensityMapUv:nt&&R(D.specularIntensityMap.channel),transmissionMapUv:F&&R(D.transmissionMap.channel),thicknessMapUv:Te&&R(D.thicknessMap.channel),alphaMapUv:Ee&&R(D.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ve||at),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!ee.attributes.uv&&(st||Ee),fog:!!le,useFog:D.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ye,skinning:se.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:He,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:st&&D.map.isVideoTexture===!0&&Ut.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:Ce&&D.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ii,flipSided:D.side===Tn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Oe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&D.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(O(C,D),w(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function w(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function P(D){const C=T[D.type];let H;if(C){const $=Pi[C];H=SM.clone($.uniforms)}else H=D.uniforms;return H}function V(D,C){let H;for(let $=0,se=_.length;$<se;$++){const le=_[$];if(le.cacheKey===C){H=le,++H.usedTimes;break}}return H===void 0&&(H=new X3(s,C,D,u),_.push(H)),H}function N(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function G(D){m.remove(D)}function ne(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:V,releaseProgram:N,releaseShaderCache:G,programs:_,dispose:ne}}function j3(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function K3(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function lg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cg(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,S,M,T,R,y){let v=s[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:T,renderOrder:g.renderOrder,z:R,group:y},s[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=R,v.group=y),t++,v}function h(g,S,M,T,R,y){const v=d(g,S,M,T,R,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,T,R,y){const v=d(g,S,M,T,R,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||K3),r.length>1&&r.sort(S||lg),l.length>1&&l.sort(S||lg)}function _(){for(let g=t,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function Q3(){let s=new WeakMap;function t(r,l){const u=s.get(r);let d;return u===void 0?(d=new cg,s.set(r,[d])):l>=u.length?(d=new cg,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function J3(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new zt};break;case"SpotLight":i={position:new re,direction:new re,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[t.id]=i,i}}}function $3(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let e1=0;function t1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function n1(s){const t=new J3,i=$3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new gn,d=new gn;function h(p){let _=0,g=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,R=0,y=0,v=0,O=0,w=0,P=0,V=0,N=0,G=0;p.sort(t1);for(let D=0,C=p.length;D<C;D++){const H=p[D],$=H.color,se=H.intensity,le=H.distance,ee=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=$.r*se,g+=$.g*se,S+=$.b*se;else if(H.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],se);G++}else if(H.isDirectionalLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,W=i.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ee,r.directionalShadowMatrix[M]=H.shadow.matrix,O++}r.directional[M]=L,M++}else if(H.isSpotLight){const L=t.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy($).multiplyScalar(se),L.distance=le,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[R]=L;const Y=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,Y.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[R]=Y.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[R]=W,r.spotShadowMap[R]=ee,P++}R++}else if(H.isRectAreaLight){const L=t.get(H);L.color.copy($).multiplyScalar(se),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=L,y++}else if(H.isPointLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const Y=H.shadow,W=i.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[T]=W,r.pointShadowMap[T]=ee,r.pointShadowMatrix[T]=H.shadow.matrix,w++}r.point[T]=L,T++}else if(H.isHemisphereLight){const L=t.get(H);L.skyColor.copy(H.color).multiplyScalar(se),L.groundColor.copy(H.groundColor).multiplyScalar(se),r.hemi[v]=L,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const ne=r.hash;(ne.directionalLength!==M||ne.pointLength!==T||ne.spotLength!==R||ne.rectAreaLength!==y||ne.hemiLength!==v||ne.numDirectionalShadows!==O||ne.numPointShadows!==w||ne.numSpotShadows!==P||ne.numSpotMaps!==V||ne.numLightProbes!==G)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=G,ne.directionalLength=M,ne.pointLength=T,ne.spotLength=R,ne.rectAreaLength=y,ne.hemiLength=v,ne.numDirectionalShadows=O,ne.numPointShadows=w,ne.numSpotShadows=P,ne.numSpotMaps=V,ne.numLightProbes=G,r.version=e1++)}function m(p,_){let g=0,S=0,M=0,T=0,R=0;const y=_.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const w=p[v];if(w.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),g++}else if(w.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),M++}else if(w.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(y),d.identity(),u.copy(w.matrixWorld),u.premultiply(y),d.extractRotation(u),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(w.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(y),S++}else if(w.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function ug(s){const t=new n1(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function i1(s){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new ug(s),t.set(l,[h])):u>=d.length?(h=new ug(s),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r1(s,t,i){let r=new Ig;const l=new mt,u=new mt,d=new rn,h=new wM({depthPacking:VS}),m=new UM,p={},_=i.maxTextureSize,g={[ma]:Tn,[Tn]:ma,[ii]:ii},S=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:a1,fragmentShader:s1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new ga;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Fi(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let v=this.type;this.render=function(N,G,ne){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Ci),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const se=v!==fa&&this.type===fa,le=v===fa&&this.type!==fa;for(let ee=0,L=N.length;ee<L;ee++){const Y=N[ee],W=Y.shadow;if(W===void 0){lt("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const he=W.getFrameExtents();if(l.multiply(he),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/he.x),l.x=u.x*he.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/he.y),l.y=u.y*he.y,W.mapSize.y=u.y)),W.map===null||se===!0||le===!0){const Ue=this.type!==fa?{minFilter:ai,magFilter:ai}:{};W.map!==null&&W.map.dispose(),W.map=new Di(l.x,l.y,Ue),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const xe=W.getViewportCount();for(let Ue=0;Ue<xe;Ue++){const He=W.getViewport(Ue);d.set(u.x*He.x,u.y*He.y,u.x*He.z,u.y*He.w),$.viewport(d),W.updateMatrices(Y,Ue),r=W.getFrustum(),P(G,ne,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===fa&&O(W,ne),W.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(D,C,H)};function O(N,G){const ne=t.update(R);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Di(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(G,null,ne,S,R,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(G,null,ne,M,R,null)}function w(N,G,ne,D){let C=null;const H=ne.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)C=H;else if(C=ne.isPointLight===!0?m:h,s.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const $=C.uuid,se=G.uuid;let le=p[$];le===void 0&&(le={},p[$]=le);let ee=le[se];ee===void 0&&(ee=C.clone(),le[se]=ee,G.addEventListener("dispose",V)),C=ee}if(C.visible=G.visible,C.wireframe=G.wireframe,D===fa?C.side=G.shadowSide!==null?G.shadowSide:G.side:C.side=G.shadowSide!==null?G.shadowSide:g[G.side],C.alphaMap=G.alphaMap,C.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,C.map=G.map,C.clipShadows=G.clipShadows,C.clippingPlanes=G.clippingPlanes,C.clipIntersection=G.clipIntersection,C.displacementMap=G.displacementMap,C.displacementScale=G.displacementScale,C.displacementBias=G.displacementBias,C.wireframeLinewidth=G.wireframeLinewidth,C.linewidth=G.linewidth,ne.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=s.properties.get(C);$.light=ne}return C}function P(N,G,ne,D,C){if(N.visible===!1)return;if(N.layers.test(G.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===fa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,N.matrixWorld);const se=t.update(N),le=N.material;if(Array.isArray(le)){const ee=se.groups;for(let L=0,Y=ee.length;L<Y;L++){const W=ee[L],he=le[W.materialIndex];if(he&&he.visible){const xe=w(N,he,D,C);N.onBeforeShadow(s,N,G,ne,se,xe,W),s.renderBufferDirect(ne,null,se,xe,N,W),N.onAfterShadow(s,N,G,ne,se,xe,W)}}}else if(le.visible){const ee=w(N,le,D,C);N.onBeforeShadow(s,N,G,ne,se,ee,null),s.renderBufferDirect(ne,null,se,ee,N,null),N.onAfterShadow(s,N,G,ne,se,ee,null)}}const $=N.children;for(let se=0,le=$.length;se<le;se++)P($[se],G,ne,D,C)}function V(N){N.target.removeEventListener("dispose",V);for(const ne in p){const D=p[ne],C=N.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const o1={[wd]:wc,[Ud]:Od,[Ld]:Pd,[Tr]:Nd,[wc]:wd,[Od]:Ud,[Pd]:Ld,[Nd]:Tr};function l1(s,t){function i(){let F=!1;const Te=new rn;let be=null;const Ee=new rn(0,0,0,0);return{setMask:function(_e){be!==_e&&!F&&(s.colorMask(_e,_e,_e,_e),be=_e)},setLocked:function(_e){F=_e},setClear:function(_e,pe,Oe,it,It){It===!0&&(_e*=it,pe*=it,Oe*=it),Te.set(_e,pe,Oe,it),Ee.equals(Te)===!1&&(s.clearColor(_e,pe,Oe,it),Ee.copy(Te))},reset:function(){F=!1,be=null,Ee.set(-1,0,0,0)}}}function r(){let F=!1,Te=!1,be=null,Ee=null,_e=null;return{setReversed:function(pe){if(Te!==pe){const Oe=t.get("EXT_clip_control");pe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Te=pe;const it=_e;_e=null,this.setClear(it)}},getReversed:function(){return Te},setTest:function(pe){pe?me(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){be!==pe&&!F&&(s.depthMask(pe),be=pe)},setFunc:function(pe){if(Te&&(pe=o1[pe]),Ee!==pe){switch(pe){case wd:s.depthFunc(s.NEVER);break;case wc:s.depthFunc(s.ALWAYS);break;case Ud:s.depthFunc(s.LESS);break;case Tr:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Nd:s.depthFunc(s.GEQUAL);break;case Od:s.depthFunc(s.GREATER);break;case Pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=pe}},setLocked:function(pe){F=pe},setClear:function(pe){_e!==pe&&(Te&&(pe=1-pe),s.clearDepth(pe),_e=pe)},reset:function(){F=!1,be=null,Ee=null,_e=null,Te=!1}}}function l(){let F=!1,Te=null,be=null,Ee=null,_e=null,pe=null,Oe=null,it=null,It=null;return{setTest:function(Rt){F||(Rt?me(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!F&&(s.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,Nn,Wn){(be!==Rt||Ee!==Nn||_e!==Wn)&&(s.stencilFunc(Rt,Nn,Wn),be=Rt,Ee=Nn,_e=Wn)},setOp:function(Rt,Nn,Wn){(pe!==Rt||Oe!==Nn||it!==Wn)&&(s.stencilOp(Rt,Nn,Wn),pe=Rt,Oe=Nn,it=Wn)},setLocked:function(Rt){F=Rt},setClear:function(Rt){It!==Rt&&(s.clearStencil(Rt),It=Rt)},reset:function(){F=!1,Te=null,be=null,Ee=null,_e=null,pe=null,Oe=null,it=null,It=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,M=[],T=null,R=!1,y=null,v=null,O=null,w=null,P=null,V=null,N=null,G=new zt(0,0,0),ne=0,D=!1,C=null,H=null,$=null,se=null,le=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,Y=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),L=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),L=Y>=2);let he=null,xe={};const Ue=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),Ie=new rn().fromArray(Ue),tt=new rn().fromArray(He);function dt(F,Te,be,Ee){const _e=new Uint8Array(4),pe=s.createTexture();s.bindTexture(F,pe),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<be;Oe++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Te+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return pe}const ce={};ce[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),me(s.DEPTH_TEST),d.setFunc(Tr),Ne(!1),Ve(gx),me(s.CULL_FACE),xt(Ci);function me(F){_[F]!==!0&&(s.enable(F),_[F]=!0)}function ye(F){_[F]!==!1&&(s.disable(F),_[F]=!1)}function Xe(F,Te){return g[F]!==Te?(s.bindFramebuffer(F,Te),g[F]=Te,F===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Te),F===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Fe(F,Te){let be=M,Ee=!1;if(F){be=S.get(Te),be===void 0&&(be=[],S.set(Te,be));const _e=F.textures;if(be.length!==_e.length||be[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Oe=_e.length;pe<Oe;pe++)be[pe]=s.COLOR_ATTACHMENT0+pe;be.length=_e.length,Ee=!0}}else be[0]!==s.BACK&&(be[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(be)}function st(F){return T!==F?(s.useProgram(F),T=F,!0):!1}const Qt={[As]:s.FUNC_ADD,[mS]:s.FUNC_SUBTRACT,[xS]:s.FUNC_REVERSE_SUBTRACT};Qt[gS]=s.MIN,Qt[vS]=s.MAX;const rt={[_S]:s.ZERO,[SS]:s.ONE,[MS]:s.SRC_COLOR,[Cd]:s.SRC_ALPHA,[RS]:s.SRC_ALPHA_SATURATE,[TS]:s.DST_COLOR,[bS]:s.DST_ALPHA,[yS]:s.ONE_MINUS_SRC_COLOR,[Dd]:s.ONE_MINUS_SRC_ALPHA,[AS]:s.ONE_MINUS_DST_COLOR,[ES]:s.ONE_MINUS_DST_ALPHA,[CS]:s.CONSTANT_COLOR,[DS]:s.ONE_MINUS_CONSTANT_COLOR,[wS]:s.CONSTANT_ALPHA,[US]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(F,Te,be,Ee,_e,pe,Oe,it,It,Rt){if(F===Ci){R===!0&&(ye(s.BLEND),R=!1);return}if(R===!1&&(me(s.BLEND),R=!0),F!==pS){if(F!==y||Rt!==D){if((v!==As||P!==As)&&(s.blendEquation(s.FUNC_ADD),v=As,P=As),Rt)switch(F){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vx:s.blendFunc(s.ONE,s.ONE);break;case _x:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",F);break}else switch(F){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vx:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _x:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sx:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",F);break}O=null,w=null,V=null,N=null,G.set(0,0,0),ne=0,y=F,D=Rt}return}_e=_e||Te,pe=pe||be,Oe=Oe||Ee,(Te!==v||_e!==P)&&(s.blendEquationSeparate(Qt[Te],Qt[_e]),v=Te,P=_e),(be!==O||Ee!==w||pe!==V||Oe!==N)&&(s.blendFuncSeparate(rt[be],rt[Ee],rt[pe],rt[Oe]),O=be,w=Ee,V=pe,N=Oe),(it.equals(G)===!1||It!==ne)&&(s.blendColor(it.r,it.g,it.b,It),G.copy(it),ne=It),y=F,D=!1}function B(F,Te){F.side===ii?ye(s.CULL_FACE):me(s.CULL_FACE);let be=F.side===Tn;Te&&(be=!be),Ne(be),F.blending===br&&F.transparent===!1?xt(Ci):xt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),d.setFunc(F.depthFunc),d.setTest(F.depthTest),d.setMask(F.depthWrite),u.setMask(F.colorWrite);const Ee=F.stencilWrite;h.setTest(Ee),Ee&&(h.setMask(F.stencilWriteMask),h.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),h.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){C!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),C=F)}function Ve(F){F!==fS?(me(s.CULL_FACE),F!==H&&(F===gx?s.cullFace(s.BACK):F===dS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),H=F}function pt(F){F!==$&&(L&&s.lineWidth(F),$=F)}function Ce(F,Te,be){F?(me(s.POLYGON_OFFSET_FILL),(se!==Te||le!==be)&&(s.polygonOffset(Te,be),se=Te,le=be)):ye(s.POLYGON_OFFSET_FILL)}function Nt(F){F?me(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function We(F){F===void 0&&(F=s.TEXTURE0+ee-1),he!==F&&(s.activeTexture(F),he=F)}function at(F,Te,be){be===void 0&&(he===null?be=s.TEXTURE0+ee-1:be=he);let Ee=xe[be];Ee===void 0&&(Ee={type:void 0,texture:void 0},xe[be]=Ee),(Ee.type!==F||Ee.texture!==Te)&&(he!==be&&(s.activeTexture(be),he=be),s.bindTexture(F,Te||ce[F]),Ee.type=F,Ee.texture=Te)}function U(){const F=xe[he];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function fe(){try{s.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ge(){try{s.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Re(){try{s.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Ke(){try{s.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ke(){try{s.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ve(){try{s.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Se(F){Ie.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ie.copy(F))}function Ye(F){tt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),tt.copy(F))}function Be(F,Te){let be=p.get(Te);be===void 0&&(be=new WeakMap,p.set(Te,be));let Ee=be.get(F);Ee===void 0&&(Ee=s.getUniformBlockIndex(Te,F.name),be.set(F,Ee))}function we(F,Te){const Ee=p.get(Te).get(F);m.get(Te)!==Ee&&(s.uniformBlockBinding(Te,Ee,F.__bindingPointIndex),m.set(Te,Ee))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},he=null,xe={},g={},S=new WeakMap,M=[],T=null,R=!1,y=null,v=null,O=null,w=null,P=null,V=null,N=null,G=new zt(0,0,0),ne=0,D=!1,C=null,H=null,$=null,se=null,le=null,Ie.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:me,disable:ye,bindFramebuffer:Xe,drawBuffers:Fe,useProgram:st,setBlending:xt,setMaterial:B,setFlipSided:Ne,setCullFace:Ve,setLineWidth:pt,setPolygonOffset:Ce,setScissorTest:Nt,activeTexture:We,bindTexture:at,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:ke,texImage3D:ve,updateUBOMapping:Be,uniformBlockBinding:we,texStorage2D:Re,texStorage3D:Ke,texSubImage2D:fe,texSubImage3D:ge,compressedTexSubImage2D:ae,compressedTexSubImage3D:qe,scissor:Se,viewport:Ye,reset:nt}}function c1(s,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new mt,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return M?new OffscreenCanvas(U,b):Nc("canvas")}function R(U,b,j){let fe=1;const ge=at(U);if((ge.width>j||ge.height>j)&&(fe=j/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(fe*ge.width),qe=Math.floor(fe*ge.height);g===void 0&&(g=T(ae,qe));const Re=b?T(ae,qe):g;return Re.width=ae,Re.height=qe,Re.getContext("2d").drawImage(U,0,0,ae,qe),lt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ae+"x"+qe+")."),Re}else return"data"in U&&lt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,b,j,fe,ge=!1){if(U!==null){if(s[U]!==void 0)return s[U];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=b;if(b===s.RED&&(j===s.FLOAT&&(ae=s.R32F),j===s.HALF_FLOAT&&(ae=s.R16F),j===s.UNSIGNED_BYTE&&(ae=s.R8)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.R8UI),j===s.UNSIGNED_SHORT&&(ae=s.R16UI),j===s.UNSIGNED_INT&&(ae=s.R32UI),j===s.BYTE&&(ae=s.R8I),j===s.SHORT&&(ae=s.R16I),j===s.INT&&(ae=s.R32I)),b===s.RG&&(j===s.FLOAT&&(ae=s.RG32F),j===s.HALF_FLOAT&&(ae=s.RG16F),j===s.UNSIGNED_BYTE&&(ae=s.RG8)),b===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RG8UI),j===s.UNSIGNED_SHORT&&(ae=s.RG16UI),j===s.UNSIGNED_INT&&(ae=s.RG32UI),j===s.BYTE&&(ae=s.RG8I),j===s.SHORT&&(ae=s.RG16I),j===s.INT&&(ae=s.RG32I)),b===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),j===s.UNSIGNED_INT&&(ae=s.RGB32UI),j===s.BYTE&&(ae=s.RGB8I),j===s.SHORT&&(ae=s.RGB16I),j===s.INT&&(ae=s.RGB32I)),b===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),j===s.UNSIGNED_INT&&(ae=s.RGBA32UI),j===s.BYTE&&(ae=s.RGBA8I),j===s.SHORT&&(ae=s.RGBA16I),j===s.INT&&(ae=s.RGBA32I)),b===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ae=s.R11F_G11F_B10F)),b===s.RGBA){const qe=ge?Uc:Ut.getTransfer(fe);j===s.FLOAT&&(ae=s.RGBA32F),j===s.HALF_FLOAT&&(ae=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ae=qe===kt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ae}function P(U,b){let j;return U?b===null||b===Qa||b===Cr?j=s.DEPTH24_STENCIL8:b===ha?j=s.DEPTH32F_STENCIL8:b===zo&&(j=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qa||b===Cr?j=s.DEPTH_COMPONENT24:b===ha?j=s.DEPTH_COMPONENT32F:b===zo&&(j=s.DEPTH_COMPONENT16),j}function V(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ai&&U.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function N(U){const b=U.target;b.removeEventListener("dispose",N),ne(b),b.isVideoTexture&&_.delete(b)}function G(U){const b=U.target;b.removeEventListener("dispose",G),C(b)}function ne(U){const b=r.get(U);if(b.__webglInit===void 0)return;const j=U.source,fe=S.get(j);if(fe){const ge=fe[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(U),Object.keys(fe).length===0&&S.delete(j)}r.remove(U)}function D(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const j=U.source,fe=S.get(j);delete fe[b.__cacheKey],d.memory.textures--}function C(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let ge=0;ge<b.__webglFramebuffer[fe].length;ge++)s.deleteFramebuffer(b.__webglFramebuffer[fe][ge]);else s.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[fe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=U.textures;for(let fe=0,ge=j.length;fe<ge;fe++){const ae=r.get(j[fe]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),d.memory.textures--),r.remove(j[fe])}r.remove(U)}let H=0;function $(){H=0}function se(){const U=H;return U>=l.maxTextures&&lt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function le(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ee(U,b){const j=r.get(U);if(U.isVideoTexture&&Nt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const fe=U.image;if(fe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(j,U,b);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function L(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){ce(j,U,b);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function Y(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){ce(j,U,b);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function W(U,b){const j=r.get(U);if(U.version>0&&j.__version!==U.version){me(j,U,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const he={[Fd]:s.REPEAT,[da]:s.CLAMP_TO_EDGE,[Id]:s.MIRRORED_REPEAT},xe={[ai]:s.NEAREST,[GS]:s.NEAREST_MIPMAP_NEAREST,[ac]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[jf]:s.LINEAR_MIPMAP_NEAREST,[Cs]:s.LINEAR_MIPMAP_LINEAR},Ue={[WS]:s.NEVER,[QS]:s.ALWAYS,[qS]:s.LESS,[Cg]:s.LEQUAL,[YS]:s.EQUAL,[KS]:s.GEQUAL,[ZS]:s.GREATER,[jS]:s.NOTEQUAL};function He(U,b){if(b.type===ha&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===jf||b.magFilter===ac||b.magFilter===Cs||b.minFilter===An||b.minFilter===jf||b.minFilter===ac||b.minFilter===Cs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,he[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,he[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,he[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,xe[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ue[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ai||b.minFilter!==ac&&b.minFilter!==Cs||b.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",N));const fe=b.source;let ge=S.get(fe);ge===void 0&&(ge={},S.set(fe,ge));const ae=le(b);if(ae!==U.__cacheKey){ge[ae]===void 0&&(ge[ae]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,j=!0),ge[ae].usedTimes++;const qe=ge[U.__cacheKey];qe!==void 0&&(ge[U.__cacheKey].usedTimes--,qe.usedTimes===0&&D(b)),U.__cacheKey=ae,U.__webglTexture=ge[ae].texture}return j}function tt(U,b,j){return Math.floor(Math.floor(U/j)/b)}function dt(U,b,j,fe){const ae=U.updateRanges;if(ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,j,fe,b.data);else{ae.sort((ve,Se)=>ve.start-Se.start);let qe=0;for(let ve=1;ve<ae.length;ve++){const Se=ae[qe],Ye=ae[ve],Be=Se.start+Se.count,we=tt(Ye.start,b.width,4),nt=tt(Se.start,b.width,4);Ye.start<=Be+1&&we===nt&&tt(Ye.start+Ye.count-1,b.width,4)===we?Se.count=Math.max(Se.count,Ye.start+Ye.count-Se.start):(++qe,ae[qe]=Ye)}ae.length=qe+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),Ke=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ve=0,Se=ae.length;ve<Se;ve++){const Ye=ae[ve],Be=Math.floor(Ye.start/4),we=Math.ceil(Ye.count/4),nt=Be%b.width,F=Math.floor(Be/b.width),Te=we,be=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),i.texSubImage2D(s.TEXTURE_2D,0,nt,F,Te,be,j,fe,b.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function ce(U,b,j){let fe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=s.TEXTURE_3D);const ge=Ie(U,b),ae=b.source;i.bindTexture(fe,U.__webglTexture,s.TEXTURE0+j);const qe=r.get(ae);if(ae.version!==qe.__version||ge===!0){i.activeTexture(s.TEXTURE0+j);const Re=Ut.getPrimaries(Ut.workingColorSpace),Ke=b.colorSpace===zi?null:Ut.getPrimaries(b.colorSpace),ke=b.colorSpace===zi||Re===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ve=R(b.image,!1,l.maxTextureSize);ve=We(b,ve);const Se=u.convert(b.format,b.colorSpace),Ye=u.convert(b.type);let Be=w(b.internalFormat,Se,Ye,b.colorSpace,b.isVideoTexture);He(fe,b);let we;const nt=b.mipmaps,F=b.isVideoTexture!==!0,Te=qe.__version===void 0||ge===!0,be=ae.dataReady,Ee=V(b,ve);if(b.isDepthTexture)Be=P(b.format===Dr,b.type),Te&&(F?i.texStorage2D(s.TEXTURE_2D,1,Be,ve.width,ve.height):i.texImage2D(s.TEXTURE_2D,0,Be,ve.width,ve.height,0,Se,Ye,null));else if(b.isDataTexture)if(nt.length>0){F&&Te&&i.texStorage2D(s.TEXTURE_2D,Ee,Be,nt[0].width,nt[0].height);for(let _e=0,pe=nt.length;_e<pe;_e++)we=nt[_e],F?be&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,we.width,we.height,Se,Ye,we.data):i.texImage2D(s.TEXTURE_2D,_e,Be,we.width,we.height,0,Se,Ye,we.data);b.generateMipmaps=!1}else F?(Te&&i.texStorage2D(s.TEXTURE_2D,Ee,Be,ve.width,ve.height),be&&dt(b,ve,Se,Ye)):i.texImage2D(s.TEXTURE_2D,0,Be,ve.width,ve.height,0,Se,Ye,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&Te&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Be,nt[0].width,nt[0].height,ve.depth);for(let _e=0,pe=nt.length;_e<pe;_e++)if(we=nt[_e],b.format!==Ri)if(Se!==null)if(F){if(be)if(b.layerUpdates.size>0){const Oe=Gx(we.width,we.height,b.format,b.type);for(const it of b.layerUpdates){const It=we.data.subarray(it*Oe/we.data.BYTES_PER_ELEMENT,(it+1)*Oe/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,it,we.width,we.height,1,Se,It)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,ve.depth,Se,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Be,we.width,we.height,ve.depth,0,we.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?be&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,ve.depth,Se,Ye,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,_e,Be,we.width,we.height,ve.depth,0,Se,Ye,we.data)}else{F&&Te&&i.texStorage2D(s.TEXTURE_2D,Ee,Be,nt[0].width,nt[0].height);for(let _e=0,pe=nt.length;_e<pe;_e++)we=nt[_e],b.format!==Ri?Se!==null?F?be&&i.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,we.width,we.height,Se,we.data):i.compressedTexImage2D(s.TEXTURE_2D,_e,Be,we.width,we.height,0,we.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?be&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,we.width,we.height,Se,Ye,we.data):i.texImage2D(s.TEXTURE_2D,_e,Be,we.width,we.height,0,Se,Ye,we.data)}else if(b.isDataArrayTexture)if(F){if(Te&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Be,ve.width,ve.height,ve.depth),be)if(b.layerUpdates.size>0){const _e=Gx(ve.width,ve.height,b.format,b.type);for(const pe of b.layerUpdates){const Oe=ve.data.subarray(pe*_e/ve.data.BYTES_PER_ELEMENT,(pe+1)*_e/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ve.width,ve.height,1,Se,Ye,Oe)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Se,Ye,ve.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,Se,Ye,ve.data);else if(b.isData3DTexture)F?(Te&&i.texStorage3D(s.TEXTURE_3D,Ee,Be,ve.width,ve.height,ve.depth),be&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Se,Ye,ve.data)):i.texImage3D(s.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,Se,Ye,ve.data);else if(b.isFramebufferTexture){if(Te)if(F)i.texStorage2D(s.TEXTURE_2D,Ee,Be,ve.width,ve.height);else{let _e=ve.width,pe=ve.height;for(let Oe=0;Oe<Ee;Oe++)i.texImage2D(s.TEXTURE_2D,Oe,Be,_e,pe,0,Se,Ye,null),_e>>=1,pe>>=1}}else if(nt.length>0){if(F&&Te){const _e=at(nt[0]);i.texStorage2D(s.TEXTURE_2D,Ee,Be,_e.width,_e.height)}for(let _e=0,pe=nt.length;_e<pe;_e++)we=nt[_e],F?be&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Se,Ye,we):i.texImage2D(s.TEXTURE_2D,_e,Be,Se,Ye,we);b.generateMipmaps=!1}else if(F){if(Te){const _e=at(ve);i.texStorage2D(s.TEXTURE_2D,Ee,Be,_e.width,_e.height)}be&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Ye,ve)}else i.texImage2D(s.TEXTURE_2D,0,Be,Se,Ye,ve);y(b)&&v(fe),qe.__version=ae.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function me(U,b,j){if(b.image.length!==6)return;const fe=Ie(U,b),ge=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);const ae=r.get(ge);if(ge.version!==ae.__version||fe===!0){i.activeTexture(s.TEXTURE0+j);const qe=Ut.getPrimaries(Ut.workingColorSpace),Re=b.colorSpace===zi?null:Ut.getPrimaries(b.colorSpace),Ke=b.colorSpace===zi||qe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!ke&&!ve?Se[pe]=R(b.image[pe],!0,l.maxCubemapSize):Se[pe]=ve?b.image[pe].image:b.image[pe],Se[pe]=We(b,Se[pe]);const Ye=Se[0],Be=u.convert(b.format,b.colorSpace),we=u.convert(b.type),nt=w(b.internalFormat,Be,we,b.colorSpace),F=b.isVideoTexture!==!0,Te=ae.__version===void 0||fe===!0,be=ge.dataReady;let Ee=V(b,Ye);He(s.TEXTURE_CUBE_MAP,b);let _e;if(ke){F&&Te&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,nt,Ye.width,Ye.height);for(let pe=0;pe<6;pe++){_e=Se[pe].mipmaps;for(let Oe=0;Oe<_e.length;Oe++){const it=_e[Oe];b.format!==Ri?Be!==null?F?be&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,0,0,it.width,it.height,Be,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,nt,it.width,it.height,0,it.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?be&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,0,0,it.width,it.height,Be,we,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,nt,it.width,it.height,0,Be,we,it.data)}}}else{if(_e=b.mipmaps,F&&Te){_e.length>0&&Ee++;const pe=at(Se[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,nt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ve){F?be&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,Be,we,Se[pe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,nt,Se[pe].width,Se[pe].height,0,Be,we,Se[pe].data);for(let Oe=0;Oe<_e.length;Oe++){const It=_e[Oe].image[pe].image;F?be&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,0,0,It.width,It.height,Be,we,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,nt,It.width,It.height,0,Be,we,It.data)}}else{F?be&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be,we,Se[pe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,nt,Be,we,Se[pe]);for(let Oe=0;Oe<_e.length;Oe++){const it=_e[Oe];F?be&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,0,0,Be,we,it.image[pe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,nt,Be,we,it.image[pe])}}}y(b)&&v(s.TEXTURE_CUBE_MAP),ae.__version=ge.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ye(U,b,j,fe,ge,ae){const qe=u.convert(j.format,j.colorSpace),Re=u.convert(j.type),Ke=w(j.internalFormat,qe,Re,j.colorSpace),ke=r.get(b),ve=r.get(j);if(ve.__renderTarget=b,!ke.__hasExternalTextures){const Se=Math.max(1,b.width>>ae),Ye=Math.max(1,b.height>>ae);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?i.texImage3D(ge,ae,Ke,Se,Ye,b.depth,0,qe,Re,null):i.texImage2D(ge,ae,Ke,Se,Ye,0,qe,Re,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Ce(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ge,ve.__webglTexture,0,pt(b)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ge,ve.__webglTexture,ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(U,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const fe=b.depthTexture,ge=fe&&fe.isDepthTexture?fe.type:null,ae=P(b.stencilBuffer,ge),qe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=pt(b);Ce(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,ae,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ae,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ae,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,U)}else{const fe=b.textures;for(let ge=0;ge<fe.length;ge++){const ae=fe[ge],qe=u.convert(ae.format,ae.colorSpace),Re=u.convert(ae.type),Ke=w(ae.internalFormat,qe,Re,ae.colorSpace),ke=pt(b);j&&Ce(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ke,b.width,b.height):Ce(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,Ke,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const ge=fe.__webglTexture,ae=pt(b);if(b.depthTexture.format===Bo)Ce(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(b.depthTexture.format===Dr)Ce(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function st(U){const b=r.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const fe=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",ge)};fe.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=fe}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const fe=U.texture.mipmaps;fe&&fe.length>0?Fe(b.__webglFramebuffer[0],U):Fe(b.__webglFramebuffer,U)}else if(j){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=s.createRenderbuffer(),Xe(b.__webglDepthbuffer[fe],U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ae)}}else{const fe=U.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Xe(b.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(U,b,j){const fe=r.get(U);b!==void 0&&ye(fe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&st(U)}function rt(U){const b=U.texture,j=r.get(U),fe=r.get(b);U.addEventListener("dispose",G);const ge=U.textures,ae=U.isWebGLCubeRenderTarget===!0,qe=ge.length>1;if(qe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=b.version,d.memory.textures++),ae){j.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Re]=[];for(let Ke=0;Ke<b.mipmaps.length;Ke++)j.__webglFramebuffer[Re][Ke]=s.createFramebuffer()}else j.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)j.__webglFramebuffer[Re]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Re=0,Ke=ge.length;Re<Ke;Re++){const ke=r.get(ge[Re]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&Ce(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){const Ke=ge[Re];j.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Re]);const ke=u.convert(Ke.format,Ke.colorSpace),ve=u.convert(Ke.type),Se=w(Ke.internalFormat,ke,ve,Ke.colorSpace,U.isXRRenderTarget===!0),Ye=pt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Se,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,j.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),He(s.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)ye(j.__webglFramebuffer[Re][Ke],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke);else ye(j.__webglFramebuffer[Re],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Re=0,Ke=ge.length;Re<Ke;Re++){const ke=ge[Re],ve=r.get(ke);let Se=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Se=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Se,ve.__webglTexture),He(Se,ke),ye(j.__webglFramebuffer,U,ke,s.COLOR_ATTACHMENT0+Re,Se,0),y(ke)&&v(Se)}i.unbindTexture()}else{let Re=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,fe.__webglTexture),He(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)ye(j.__webglFramebuffer[Ke],U,b,s.COLOR_ATTACHMENT0,Re,Ke);else ye(j.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,Re,0);y(b)&&v(Re),i.unbindTexture()}U.depthBuffer&&st(U)}function xt(U){const b=U.textures;for(let j=0,fe=b.length;j<fe;j++){const ge=b[j];if(y(ge)){const ae=O(U),qe=r.get(ge).__webglTexture;i.bindTexture(ae,qe),v(ae),i.unbindTexture()}}}const B=[],Ne=[];function Ve(U){if(U.samples>0){if(Ce(U)===!1){const b=U.textures,j=U.width,fe=U.height;let ge=s.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(U),Re=b.length>1;if(Re)for(let ke=0;ke<b.length;ke++)i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ke=U.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const ve=r.get(b[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,j,fe,0,0,j,fe,ge,s.NEAREST),m===!0&&(B.length=0,Ne.length=0,B.push(s.COLOR_ATTACHMENT0+ke),U.depthBuffer&&U.resolveDepthBuffer===!1&&(B.push(ae),Ne.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let ke=0;ke<b.length;ke++){i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const ve=r.get(b[ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ve,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function pt(U){return Math.min(l.maxSamples,U.samples)}function Ce(U){const b=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(U){const b=d.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function We(U,b){const j=U.colorSpace,fe=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Ja&&j!==zi&&(Ut.getTransfer(j)===kt?(fe!==Ri||ge!==ri)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",j)),b}function at(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=L,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Qt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ce}function u1(s,t){function i(r,l=zi){let u;const d=Ut.getTransfer(l);if(r===ri)return s.UNSIGNED_BYTE;if(r===Sh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Eg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Mg)return s.BYTE;if(r===yg)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===_h)return s.INT;if(r===Qa)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===Ur)return s.HALF_FLOAT;if(r===Tg)return s.ALPHA;if(r===Ag)return s.RGB;if(r===Ri)return s.RGBA;if(r===Bo)return s.DEPTH_COMPONENT;if(r===Dr)return s.DEPTH_STENCIL;if(r===Rg)return s.RED;if(r===yh)return s.RED_INTEGER;if(r===bh)return s.RG;if(r===Eh)return s.RG_INTEGER;if(r===Th)return s.RGBA_INTEGER;if(r===Tc||r===Ac||r===Rc||r===Cc)if(d===kt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Gd||r===Vd||r===kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Hd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd||r===Wd||r===qd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Xd||r===Wd)return d===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===qd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===sh||r===rh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Yd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===th)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ih)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oh||r===lh||r===ch)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===oh)return d===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ch)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uh||r===fh||r===dh||r===hh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===uh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===fh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class h1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Hg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new oi({vertexShader:f1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p1 extends $a{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,M=null,T=null;const R=typeof XRWebGLBinding<"u",y=new h1,v={},O=i.getContextAttributes();let w=null,P=null;const V=[],N=[],G=new mt;let ne=null;const D=new gi;D.viewport=new rn;const C=new gi;C.viewport=new rn;const H=[D,C],$=new LM;let se=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let me=V[ce];return me===void 0&&(me=new vd,V[ce]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ce){let me=V[ce];return me===void 0&&(me=new vd,V[ce]=me),me.getGripSpace()},this.getHand=function(ce){let me=V[ce];return me===void 0&&(me=new vd,V[ce]=me),me.getHandSpace()};function ee(ce){const me=N.indexOf(ce.inputSource);if(me===-1)return;const ye=V[me];ye!==void 0&&(ye.update(ce.inputSource,ce.frame,p||d),ye.dispatchEvent({type:ce.type,data:ce.inputSource}))}function L(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",Y);for(let ce=0;ce<V.length;ce++){const me=N[ce];me!==null&&(N[ce]=null,V[ce].disconnect(me))}se=null,le=null,y.reset();for(const ce in v)delete v[ce];t.setRenderTarget(w),M=null,S=null,g=null,l=null,P=null,dt.stop(),r.isPresenting=!1,t.setPixelRatio(ne),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){u=ce,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){h=ce,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ce){if(l=ce,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",L),l.addEventListener("inputsourceschange",Y),O.xrCompatible!==!0&&await i.makeXRCompatible(),ne=t.getPixelRatio(),t.getSize(G),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Xe=null,Fe=null;O.depth&&(Fe=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=O.stencil?Dr:Bo,Xe=O.stencil?Cr:Qa);const st={colorFormat:i.RGBA8,depthFormat:Fe,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(st),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new Di(S.textureWidth,S.textureHeight,{format:Ri,type:ri,depthTexture:new Ch(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ye={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Di(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),dt.setContext(l),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(ce){for(let me=0;me<ce.removed.length;me++){const ye=ce.removed[me],Xe=N.indexOf(ye);Xe>=0&&(N[Xe]=null,V[Xe].disconnect(ye))}for(let me=0;me<ce.added.length;me++){const ye=ce.added[me];let Xe=N.indexOf(ye);if(Xe===-1){for(let st=0;st<V.length;st++)if(st>=N.length){N.push(ye),Xe=st;break}else if(N[st]===null){N[st]=ye,Xe=st;break}if(Xe===-1)break}const Fe=V[Xe];Fe&&Fe.connect(ye)}}const W=new re,he=new re;function xe(ce,me,ye){W.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(ye.matrixWorld);const Xe=W.distanceTo(he),Fe=me.projectionMatrix.elements,st=ye.projectionMatrix.elements,Qt=Fe[14]/(Fe[10]-1),rt=Fe[14]/(Fe[10]+1),xt=(Fe[9]+1)/Fe[5],B=(Fe[9]-1)/Fe[5],Ne=(Fe[8]-1)/Fe[0],Ve=(st[8]+1)/st[0],pt=Qt*Ne,Ce=Qt*Ve,Nt=Xe/(-Ne+Ve),We=Nt*-Ne;if(me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(We),ce.translateZ(Nt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Fe[10]===-1)ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const at=Qt+Nt,U=rt+Nt,b=pt-We,j=Ce+(Xe-We),fe=xt*rt/U*at,ge=B*rt/U*at;ce.projectionMatrix.makePerspective(b,j,fe,ge,at,U),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Ue(ce,me){me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(l===null)return;let me=ce.near,ye=ce.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),$.near=C.near=D.near=me,$.far=C.far=D.far=ye,(se!==$.near||le!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),se=$.near,le=$.far),$.layers.mask=ce.layers.mask|6,D.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Xe=ce.parent,Fe=$.cameras;Ue($,Xe);for(let st=0;st<Fe.length;st++)Ue(Fe[st],Xe);Fe.length===2?xe($,D,C):$.projectionMatrix.copy(D.projectionMatrix),He(ce,$,Xe)};function He(ce,me,ye){ye===null?ce.matrix.copy(me.matrixWorld):(ce.matrix.copy(ye.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=mh*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(ce){m=ce,S!==null&&(S.fixedFoveation=ce),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(ce){return v[ce]};let Ie=null;function tt(ce,me){if(_=me.getViewerPose(p||d),T=me,_!==null){const ye=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Xe=!1;ye.length!==$.cameras.length&&($.cameras.length=0,Xe=!0);for(let rt=0;rt<ye.length;rt++){const xt=ye[rt];let B=null;if(M!==null)B=M.getViewport(xt);else{const Ve=g.getViewSubImage(S,xt);B=Ve.viewport,rt===0&&(t.setRenderTargetTextures(P,Ve.colorTexture,Ve.depthStencilTexture),t.setRenderTarget(P))}let Ne=H[rt];Ne===void 0&&(Ne=new gi,Ne.layers.enable(rt),Ne.viewport=new rn,H[rt]=Ne),Ne.matrix.fromArray(xt.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(xt.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(B.x,B.y,B.width,B.height),rt===0&&($.matrix.copy(Ne.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Xe===!0&&$.cameras.push(Ne)}const Fe=l.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const rt=g.getDepthInformation(ye[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,l.renderState)}if(Fe&&Fe.includes("camera-access")&&R){t.state.unbindTexture(),g=r.getBinding();for(let rt=0;rt<ye.length;rt++){const xt=ye[rt].camera;if(xt){let B=v[xt];B||(B=new Hg,v[xt]=B);const Ne=g.getCameraImage(xt);B.sourceTexture=Ne}}}}for(let ye=0;ye<V.length;ye++){const Xe=N[ye],Fe=V[ye];Xe!==null&&Fe!==void 0&&Fe.update(Xe,me,p||d)}Ie&&Ie(ce,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),T=null}const dt=new Gg;dt.setAnimationLoop(tt),this.setAnimationLoop=function(ce){Ie=ce},this.dispose=function(){}}}const Es=new xa,m1=new gn;function x1(s,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,zg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,O,w,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,P)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),R(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,O,w):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Tn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Tn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=t.get(v),w=O.envMap,P=O.envMapRotation;w&&(y.envMap.value=w,Es.copy(P),Es.x*=-1,Es.y*=-1,Es.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),y.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(Es)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,O,w){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=w*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Tn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const O=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function g1(s,t,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,w){const P=w.program;r.uniformBlockBinding(O,P)}function p(O,w){let P=l[O.id];P===void 0&&(T(O),P=_(O),l[O.id]=P,O.addEventListener("dispose",y));const V=w.program;r.updateUBOMapping(O,V);const N=t.render.frame;u[O.id]!==N&&(S(O),u[O.id]=N)}function _(O){const w=g();O.__bindingPointIndex=w;const P=s.createBuffer(),V=O.__size,N=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,P),P}function g(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const w=l[O.id],P=O.uniforms,V=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let N=0,G=P.length;N<G;N++){const ne=Array.isArray(P[N])?P[N]:[P[N]];for(let D=0,C=ne.length;D<C;D++){const H=ne[D];if(M(H,N,D,V)===!0){const $=H.__offset,se=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let ee=0;ee<se.length;ee++){const L=se[ee],Y=R(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,$+le,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,le),le+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(O,w,P,V){const N=O.value,G=w+"_"+P;if(V[G]===void 0)return typeof N=="number"||typeof N=="boolean"?V[G]=N:V[G]=N.clone(),!0;{const ne=V[G];if(typeof N=="number"||typeof N=="boolean"){if(ne!==N)return V[G]=N,!0}else if(ne.equals(N)===!1)return ne.copy(N),!0}return!1}function T(O){const w=O.uniforms;let P=0;const V=16;for(let G=0,ne=w.length;G<ne;G++){const D=Array.isArray(w[G])?w[G]:[w[G]];for(let C=0,H=D.length;C<H;C++){const $=D[C],se=Array.isArray($.value)?$.value:[$.value];for(let le=0,ee=se.length;le<ee;le++){const L=se[le],Y=R(L),W=P%V,he=W%Y.boundary,xe=W+he;P+=he,xe!==0&&V-xe<Y.storage&&(P+=V-xe),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=Y.storage}}}const N=P%V;return N>0&&(P+=V-N),O.__size=P,O.__cache={},this}function R(O){const w={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(w.boundary=4,w.storage=4):O.isVector2?(w.boundary=8,w.storage=8):O.isVector3||O.isColor?(w.boundary=16,w.storage=12):O.isVector4?(w.boundary=16,w.storage=16):O.isMatrix3?(w.boundary=48,w.storage=48):O.isMatrix4?(w.boundary=64,w.storage=64):O.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",O),w}function y(O){const w=O.target;w.removeEventListener("dispose",y);const P=d.indexOf(w.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function v(){for(const O in l)s.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const v1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ua=null;function _1(){return ua===null&&(ua=new AM(v1,32,32,bh,Ur),ua.minFilter=An,ua.magFilter=An,ua.wrapS=da,ua.wrapT=da,ua.generateMipmaps=!1,ua.needsUpdate=!0),ua}class S1{constructor(t={}){const{canvas:i=JS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Set([Th,Eh,yh]),R=new Set([ri,Qa,zo,Cr,Sh,Mh]),y=new Uint32Array(4),v=new Int32Array(4);let O=null,w=null;const P=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let G=!1;this._outputColorSpace=an;let ne=0,D=0,C=null,H=-1,$=null;const se=new rn,le=new rn;let ee=null;const L=new zt(0);let Y=0,W=i.width,he=i.height,xe=1,Ue=null,He=null;const Ie=new rn(0,0,W,he),tt=new rn(0,0,W,he);let dt=!1;const ce=new Ig;let me=!1,ye=!1;const Xe=new gn,Fe=new re,st=new rn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function xt(){return C===null?xe:1}let B=r;function Ne(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oc}`),i.addEventListener("webglcontextlost",_e,!1),i.addEventListener("webglcontextrestored",pe,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),B===null){const k="webgl2";if(B=Ne(k,A),B===null)throw Ne(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let Ve,pt,Ce,Nt,We,at,U,b,j,fe,ge,ae,qe,Re,Ke,ke,ve,Se,Ye,Be,we,nt,F,Te;function be(){Ve=new CE(B),Ve.init(),nt=new u1(B,Ve),pt=new _E(B,Ve,t,nt),Ce=new l1(B,Ve),pt.reversedDepthBuffer&&S&&Ce.buffers.depth.setReversed(!0),Nt=new UE(B),We=new j3,at=new c1(B,Ve,Ce,We,pt,nt,Nt),U=new ME(N),b=new RE(N),j=new PM(B),F=new gE(B,j),fe=new DE(B,j,Nt,F),ge=new NE(B,fe,j,Nt),Ye=new LE(B,pt,at),ke=new SE(We),ae=new Z3(N,U,b,Ve,pt,F,ke),qe=new x1(N,We),Re=new Q3,Ke=new i1(Ve),Se=new xE(N,U,b,Ce,ge,M,m),ve=new r1(N,ge,pt),Te=new g1(B,Nt,pt,Ce),Be=new vE(B,Ve,Nt),we=new wE(B,Ve,Nt),Nt.programs=ae.programs,N.capabilities=pt,N.extensions=Ve,N.properties=We,N.renderLists=Re,N.shadowMap=ve,N.state=Ce,N.info=Nt}be();const Ee=new p1(N,B);this.xr=Ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(A){A!==void 0&&(xe=A,this.setSize(W,he,!1))},this.getSize=function(A){return A.set(W,he)},this.setSize=function(A,k,te=!0){if(Ee.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,he=k,i.width=Math.floor(A*xe),i.height=Math.floor(k*xe),te===!0&&(i.style.width=A+"px",i.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*xe,he*xe).floor()},this.setDrawingBufferSize=function(A,k,te){W=A,he=k,xe=te,i.width=Math.floor(A*te),i.height=Math.floor(k*te),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(se)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,k,te,Q){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,k,te,Q),Ce.viewport(se.copy(Ie).multiplyScalar(xe).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,k,te,Q){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,k,te,Q),Ce.scissor(le.copy(tt).multiplyScalar(xe).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){Ce.setScissorTest(dt=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,te=!0){let Q=0;if(A){let q=!1;if(C!==null){const Me=C.texture.format;q=T.has(Me)}if(q){const Me=C.texture.type,Ae=R.has(Me),Le=Se.getClearColor(),Pe=Se.getClearAlpha(),Je=Le.r,et=Le.g,Ze=Le.b;Ae?(y[0]=Je,y[1]=et,y[2]=Ze,y[3]=Pe,B.clearBufferuiv(B.COLOR,0,y)):(v[0]=Je,v[1]=et,v[2]=Ze,v[3]=Pe,B.clearBufferiv(B.COLOR,0,v))}else Q|=B.COLOR_BUFFER_BIT}k&&(Q|=B.DEPTH_BUFFER_BIT),te&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_e,!1),i.removeEventListener("webglcontextrestored",pe,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Se.dispose(),Re.dispose(),Ke.dispose(),We.dispose(),U.dispose(),b.dispose(),ge.dispose(),F.dispose(),Te.dispose(),ae.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Or),Ee.removeEventListener("sessionend",Pr),_i.stop()};function _e(A){A.preventDefault(),Ex("WebGLRenderer: Context Lost."),G=!0}function pe(){Ex("WebGLRenderer: Context Restored."),G=!1;const A=Nt.autoReset,k=ve.enabled,te=ve.autoUpdate,Q=ve.needsUpdate,q=ve.type;be(),Nt.autoReset=A,ve.enabled=k,ve.autoUpdate=te,ve.needsUpdate=Q,ve.type=q}function Oe(A){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const k=A.target;k.removeEventListener("dispose",it),It(k)}function It(A){Rt(A),We.remove(A)}function Rt(A){const k=We.get(A).programs;k!==void 0&&(k.forEach(function(te){ae.releaseProgram(te)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,te,Q,q,Me){k===null&&(k=Qt);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,Le=Fc(A,k,te,Q,q);Ce.setMaterial(Q,Ae);let Pe=te.index,Je=1;if(Q.wireframe===!0){if(Pe=fe.getWireframeAttribute(te),Pe===void 0)return;Je=2}const et=te.drawRange,Ze=te.attributes.position;let ct=et.start*Je,At=(et.start+et.count)*Je;Me!==null&&(ct=Math.max(ct,Me.start*Je),At=Math.min(At,(Me.start+Me.count)*Je)),Pe!==null?(ct=Math.max(ct,0),At=Math.min(At,Pe.count)):Ze!=null&&(ct=Math.max(ct,0),At=Math.min(At,Ze.count));const Ct=At-ct;if(Ct<0||Ct===1/0)return;F.setup(q,Q,Le,te,Pe);let Mt,Pt=Be;if(Pe!==null&&(Mt=j.get(Pe),Pt=we,Pt.setIndex(Mt)),q.isMesh)Q.wireframe===!0?(Ce.setLineWidth(Q.wireframeLinewidth*xt()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(q.isLine){let Qe=Q.linewidth;Qe===void 0&&(Qe=1),Ce.setLineWidth(Qe*xt()),q.isLineSegments?Pt.setMode(B.LINES):q.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else q.isPoints?Pt.setMode(B.POINTS):q.isSprite&&Pt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qe=q._multiDrawStarts,Xt=q._multiDrawCounts,yt=q._multiDrawCount,Sn=Pe?j.get(Pe).bytesPerElement:1,_a=We.get(Q).currentProgram.getUniforms();for(let qt=0;qt<yt;qt++)_a.setValue(B,"_gl_DrawID",qt),Pt.render(Qe[qt]/Sn,Xt[qt])}else if(q.isInstancedMesh)Pt.renderInstances(ct,Ct,q.count);else if(te.isInstancedBufferGeometry){const Qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xt=Math.min(te.instanceCount,Qe);Pt.renderInstances(ct,Ct,Xt)}else Pt.render(ct,Ct)};function Nn(A,k,te){A.transparent===!0&&A.side===ii&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,hn(A,k,te),A.side=ma,A.needsUpdate=!0,hn(A,k,te),A.side=ii):hn(A,k,te)}this.compile=function(A,k,te=null){te===null&&(te=A),w=Ke.get(te),w.init(k),V.push(w),te.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),A!==te&&A.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const Q=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const Le=Me[Ae];Nn(Le,te,q),Q.add(Le)}else Nn(Me,te,q),Q.add(Me)}),w=V.pop(),Q},this.compileAsync=function(A,k,te=null){const Q=this.compile(A,k,te);return new Promise(q=>{function Me(){if(Q.forEach(function(Ae){We.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){q(A);return}setTimeout(Me,10)}Ve.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Wn=null;function qo(A){Wn&&Wn(A)}function Or(){_i.stop()}function Pr(){_i.start()}const _i=new Gg;_i.setAnimationLoop(qo),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){Wn=A,Ee.setAnimationLoop(A),A===null?_i.stop():_i.start()},Ee.addEventListener("sessionstart",Or),Ee.addEventListener("sessionend",Pr),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(k),k=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,k,C),w=Ke.get(A,V.length),w.init(k),V.push(w),Xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(Xe,Bi,k.reversedDepth),ye=this.localClippingEnabled,me=ke.init(this.clippingPlanes,ye),O=Re.get(A,P.length),O.init(),P.push(O),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=N.xr.getDepthSensingMesh();Me!==null&&ts(Me,k,-1/0,N.sortObjects)}ts(A,k,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(Ue,He),rt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,rt&&Se.addToRenderList(O,A),this.info.render.frame++,me===!0&&ke.beginShadows();const te=w.state.shadowsArray;ve.render(te,A,k),me===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=O.opaque,q=O.transmissive;if(w.setupLights(),k.isArrayCamera){const Me=k.cameras;if(q.length>0)for(let Ae=0,Le=Me.length;Ae<Le;Ae++){const Pe=Me[Ae];Br(Q,q,A,Pe)}rt&&Se.render(A);for(let Ae=0,Le=Me.length;Ae<Le;Ae++){const Pe=Me[Ae];zr(O,A,Pe,Pe.viewport)}}else q.length>0&&Br(Q,q,A,k),rt&&Se.render(A),zr(O,A,k);C!==null&&D===0&&(at.updateMultisampleRenderTarget(C),at.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(N,A,k),F.resetDefaultState(),H=-1,$=null,V.pop(),V.length>0?(w=V[V.length-1],me===!0&&ke.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?O=P[P.length-1]:O=null};function ts(A,k,te,Q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){Q&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Xe);const Ae=ge.update(A),Le=A.material;Le.visible&&O.push(A,Ae,Le,te,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){const Ae=ge.update(A),Le=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),st.copy(Ae.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(Xe)),Array.isArray(Le)){const Pe=Ae.groups;for(let Je=0,et=Pe.length;Je<et;Je++){const Ze=Pe[Je],ct=Le[Ze.materialIndex];ct&&ct.visible&&O.push(A,Ae,ct,te,st.z,Ze)}}else Le.visible&&O.push(A,Ae,Le,te,st.z,null)}}const Me=A.children;for(let Ae=0,Le=Me.length;Ae<Le;Ae++)ts(Me[Ae],k,te,Q)}function zr(A,k,te,Q){const{opaque:q,transmissive:Me,transparent:Ae}=A;w.setupLightsView(te),me===!0&&ke.setGlobalState(N.clippingPlanes,te),Q&&Ce.viewport(se.copy(Q)),q.length>0&&qn(q,k,te),Me.length>0&&qn(Me,k,te),Ae.length>0&&qn(Ae,k,te),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Br(A,k,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[Q.id]===void 0&&(w.state.transmissionRenderTarget[Q.id]=new Di(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ur:ri,minFilter:Cs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Me=w.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||se;Me.setSize(Ae.z*N.transmissionResolutionScale,Ae.w*N.transmissionResolutionScale);const Le=N.getRenderTarget(),Pe=N.getActiveCubeFace(),Je=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(L),Y=N.getClearAlpha(),Y<1&&N.setClearColor(16777215,.5),N.clear(),rt&&Se.render(te);const et=N.toneMapping;N.toneMapping=Ka;const Ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),me===!0&&ke.setGlobalState(N.clippingPlanes,Q),qn(A,te,Q),at.updateMultisampleRenderTarget(Me),at.updateRenderTargetMipmap(Me),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let At=0,Ct=k.length;At<Ct;At++){const Mt=k[At],{object:Pt,geometry:Qe,material:Xt,group:yt}=Mt;if(Xt.side===ii&&Pt.layers.test(Q.layers)){const Sn=Xt.side;Xt.side=Tn,Xt.needsUpdate=!0,on(Pt,te,Q,Qe,Xt,yt),Xt.side=Sn,Xt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Me),at.updateRenderTargetMipmap(Me))}N.setRenderTarget(Le,Pe,Je),N.setClearColor(L,Y),Ze!==void 0&&(Q.viewport=Ze),N.toneMapping=et}function qn(A,k,te){const Q=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Me=A.length;q<Me;q++){const Ae=A[q],{object:Le,geometry:Pe,group:Je}=Ae;let et=Ae.material;et.allowOverride===!0&&Q!==null&&(et=Q),Le.layers.test(te.layers)&&on(Le,k,te,Pe,et,Je)}}function on(A,k,te,Q,q,Me){A.onBeforeRender(N,k,te,Q,q,Me),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(N,k,te,Q,A,Me),q.transparent===!0&&q.side===ii&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,N.renderBufferDirect(te,k,Q,q,A,Me),q.side=ma,q.needsUpdate=!0,N.renderBufferDirect(te,k,Q,q,A,Me),q.side=ii):N.renderBufferDirect(te,k,Q,q,A,Me),A.onAfterRender(N,k,te,Q,q,Me)}function hn(A,k,te){k.isScene!==!0&&(k=Qt);const Q=We.get(A),q=w.state.lights,Me=w.state.shadowsArray,Ae=q.state.version,Le=ae.getParameters(A,q.state,Me,k,te),Pe=ae.getProgramCacheKey(Le);let Je=Q.programs;Q.environment=A.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(A.isMeshStandardMaterial?b:U).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",it),Je=new Map,Q.programs=Je);let et=Je.get(Pe);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===Ae)return Us(A,Le),et}else Le.uniforms=ae.getUniforms(A),A.onBeforeCompile(Le,N),et=ae.acquireProgram(Le,Pe),Je.set(Pe,et),Q.uniforms=Le.uniforms;const Ze=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=ke.uniform),Us(A,Le),Q.needsLights=Yo(A),Q.lightsStateVersion=Ae,Q.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function Ii(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Dc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Us(A,k){const te=We.get(A);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function Fc(A,k,te,Q,q){k.isScene!==!0&&(k=Qt),at.resetTextureUnits();const Me=k.fog,Ae=Q.isMeshStandardMaterial?k.environment:null,Le=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ja,Pe=(Q.isMeshStandardMaterial?b:U).get(Q.envMap||Ae),Je=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!te.morphAttributes.position,ct=!!te.morphAttributes.normal,At=!!te.morphAttributes.color;let Ct=Ka;Q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const Mt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Pt=Mt!==void 0?Mt.length:0,Qe=We.get(Q),Xt=w.state.lights;if(me===!0&&(ye===!0||A!==$)){const yn=A===$&&Q.id===H;ke.setState(Q,A,yn)}let yt=!1;Q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Xt.state.version||Qe.outputColorSpace!==Le||q.isBatchedMesh&&Qe.batching===!1||!q.isBatchedMesh&&Qe.batching===!0||q.isBatchedMesh&&Qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qe.instancing===!1||!q.isInstancedMesh&&Qe.instancing===!0||q.isSkinnedMesh&&Qe.skinning===!1||!q.isSkinnedMesh&&Qe.skinning===!0||q.isInstancedMesh&&Qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qe.instancingMorph===!1&&q.morphTexture!==null||Qe.envMap!==Pe||Q.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==et||Qe.morphTargets!==Ze||Qe.morphNormals!==ct||Qe.morphColors!==At||Qe.toneMapping!==Ct||Qe.morphTargetsCount!==Pt)&&(yt=!0):(yt=!0,Qe.__version=Q.version);let Sn=Qe.currentProgram;yt===!0&&(Sn=hn(Q,k,q));let _a=!1,qt=!1,Hi=!1;const Yt=Sn.getUniforms(),Mn=Qe.uniforms;if(Ce.useProgram(Sn.program)&&(_a=!0,qt=!0,Hi=!0),Q.id!==H&&(H=Q.id,qt=!0),_a||$!==A){Ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Yt.setValue(B,"projectionMatrix",A.projectionMatrix),Yt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Cn=Yt.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,Fe.setFromMatrixPosition(A.matrixWorld)),pt.logarithmicDepthBuffer&&Yt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Yt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,qt=!0,Hi=!0)}if(q.isSkinnedMesh){Yt.setOptional(B,q,"bindMatrix"),Yt.setOptional(B,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Yt.setValue(B,"boneTexture",yn.boneTexture,at))}q.isBatchedMesh&&(Yt.setOptional(B,q,"batchingTexture"),Yt.setValue(B,"batchingTexture",q._matricesTexture,at),Yt.setOptional(B,q,"batchingIdTexture"),Yt.setValue(B,"batchingIdTexture",q._indirectTexture,at),Yt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Yt.setValue(B,"batchingColorTexture",q._colorsTexture,at));const pn=te.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ye.update(q,te,Sn),(qt||Qe.receiveShadow!==q.receiveShadow)&&(Qe.receiveShadow=q.receiveShadow,Yt.setValue(B,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Mn.envMap.value=Pe,Mn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=_1()),qt&&(Yt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Qe.needsLights&&Ic(Mn,Hi),Me&&Q.fog===!0&&qe.refreshFogUniforms(Mn,Me),qe.refreshMaterialUniforms(Mn,Q,xe,he,w.state.transmissionRenderTarget[A.id]),Dc.upload(B,Ii(Qe),Mn,at)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Dc.upload(B,Ii(Qe),Mn,at),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Yt.setValue(B,"center",q.center),Yt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Yt.setValue(B,"normalMatrix",q.normalMatrix),Yt.setValue(B,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const yn=Q.uniformsGroups;for(let Cn=0,wi=yn.length;Cn<wi;Cn++){const Gi=yn[Cn];Te.update(Gi,Sn),Te.bind(Gi,Sn)}}return Sn}function Ic(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Yo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,te){const Q=We.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),We.get(A.texture).__webglTexture=k,We.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const te=We.get(A);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0};const ns=B.createFramebuffer();this.setRenderTarget=function(A,k=0,te=0){C=A,ne=k,D=te;let Q=!0,q=null,Me=!1,Ae=!1;if(A){const Pe=We.get(A);if(Pe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)at.setupRenderTarget(A);else if(Pe.__hasExternalTextures)at.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Pe.__boundDepthTexture!==Ze){if(Ze!==null&&We.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ae=!0);const et=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[k])?q=et[k][te]:q=et[k],Me=!0):A.samples>0&&at.useMultisampledRTT(A)===!1?q=We.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[te]:q=et,se.copy(A.viewport),le.copy(A.scissor),ee=A.scissorTest}else se.copy(Ie).multiplyScalar(xe).floor(),le.copy(tt).multiplyScalar(xe).floor(),ee=dt;if(te!==0&&(q=ns),Ce.bindFramebuffer(B.FRAMEBUFFER,q)&&Q&&Ce.drawBuffers(A,q),Ce.viewport(se),Ce.scissor(le),Ce.setScissorTest(ee),Me){const Pe=We.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,te)}else if(Ae){const Pe=k;for(let Je=0;Je<A.textures.length;Je++){const et=We.get(A.textures[Je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Je,et.__webglTexture,te,Pe)}}else if(A!==null&&te!==0){const Pe=We.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,te)}H=-1},this.readRenderTargetPixels=function(A,k,te,Q,q,Me,Ae,Le=0){if(!(A&&A.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){Ce.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const Je=A.textures[Le],et=Je.format,Ze=Je.type;if(!pt.textureFormatReadable(et)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ze)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Q&&te>=0&&te<=A.height-q&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Le),B.readPixels(k,te,Q,q,nt.convert(et),nt.convert(Ze),Me))}finally{const Je=C!==null?We.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(B.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,k,te,Q,q,Me,Ae,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(k>=0&&k<=A.width-Q&&te>=0&&te<=A.height-q){Ce.bindFramebuffer(B.FRAMEBUFFER,Pe);const Je=A.textures[Le],et=Je.format,Ze=Je.type;if(!pt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Le),B.readPixels(k,te,Q,q,nt.convert(et),nt.convert(Ze),0);const At=C!==null?We.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(B.FRAMEBUFFER,At);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $S(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(ct),B.deleteSync(Ct),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,te=0){const Q=Math.pow(2,-te),q=Math.floor(A.image.width*Q),Me=Math.floor(A.image.height*Q),Ae=k!==null?k.x:0,Le=k!==null?k.y:0;at.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Ae,Le,q,Me),Ce.unbindTexture()};const Fr=B.createFramebuffer(),va=B.createFramebuffer();this.copyTextureToTexture=function(A,k,te=null,Q=null,q=0,Me=null){Me===null&&(q!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Ae,Le,Pe,Je,et,Ze,ct,At,Ct;const Mt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(te!==null)Ae=te.max.x-te.min.x,Le=te.max.y-te.min.y,Pe=te.isBox3?te.max.z-te.min.z:1,Je=te.min.x,et=te.min.y,Ze=te.isBox3?te.min.z:0;else{const pn=Math.pow(2,-q);Ae=Math.floor(Mt.width*pn),Le=Math.floor(Mt.height*pn),A.isDataArrayTexture?Pe=Mt.depth:A.isData3DTexture?Pe=Math.floor(Mt.depth*pn):Pe=1,Je=0,et=0,Ze=0}Q!==null?(ct=Q.x,At=Q.y,Ct=Q.z):(ct=0,At=0,Ct=0);const Pt=nt.convert(k.format),Qe=nt.convert(k.type);let Xt;k.isData3DTexture?(at.setTexture3D(k,0),Xt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(at.setTexture2DArray(k,0),Xt=B.TEXTURE_2D_ARRAY):(at.setTexture2D(k,0),Xt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),Sn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_a=B.getParameter(B.UNPACK_SKIP_PIXELS),qt=B.getParameter(B.UNPACK_SKIP_ROWS),Hi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Mt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Je),B.pixelStorei(B.UNPACK_SKIP_ROWS,et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Yt=A.isDataArrayTexture||A.isData3DTexture,Mn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const pn=We.get(A),yn=We.get(k),Cn=We.get(pn.__renderTarget),wi=We.get(yn.__renderTarget);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Gi=0;Gi<Pe;Gi++)Yt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(A).__webglTexture,q,Ze+Gi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(k).__webglTexture,Me,Ct+Gi)),B.blitFramebuffer(Je,et,Ae,Le,ct,At,Ae,Le,B.DEPTH_BUFFER_BIT,B.NEAREST);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||We.has(A)){const pn=We.get(A),yn=We.get(k);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,Fr),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,va);for(let Cn=0;Cn<Pe;Cn++)Yt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,q,Ze+Cn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,q),Mn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,Me,Ct+Cn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,Me),q!==0?B.blitFramebuffer(Je,et,Ae,Le,ct,At,Ae,Le,B.COLOR_BUFFER_BIT,B.NEAREST):Mn?B.copyTexSubImage3D(Xt,Me,ct,At,Ct+Cn,Je,et,Ae,Le):B.copyTexSubImage2D(Xt,Me,ct,At,Je,et,Ae,Le);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Xt,Me,ct,At,Ct,Ae,Le,Pe,Pt,Qe,Mt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Xt,Me,ct,At,Ct,Ae,Le,Pe,Pt,Mt.data):B.texSubImage3D(Xt,Me,ct,At,Ct,Ae,Le,Pe,Pt,Qe,Mt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Me,ct,At,Ae,Le,Pt,Qe,Mt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Me,ct,At,Mt.width,Mt.height,Pt,Mt.data):B.texSubImage2D(B.TEXTURE_2D,Me,ct,At,Ae,Le,Pt,Qe,Mt);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Sn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_a),B.pixelStorei(B.UNPACK_SKIP_ROWS,qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Hi),Me===0&&k.generateMipmaps&&B.generateMipmap(Xt),Ce.unbindTexture()},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&at.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?at.setTextureCube(A,0):A.isData3DTexture?at.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?at.setTexture2DArray(A,0):at.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){ne=0,D=0,C=null,Ce.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}var Td=1/1e3,M1=1e3,y1=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*Td}get fixedDelta(){return this._fixedDelta*Td}set fixedDelta(s){this._fixedDelta=s*M1}get elapsed(){return this._elapsed*Td}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},b1=(()=>{const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),i=new ga;return i.setAttribute("position",new vi(s,3)),i.setAttribute("uv",new vi(t,2)),i})(),es=class vh{static get fullscreenGeometry(){return b1}constructor(t="Pass",i=new xh,r=new Dh){this.name=t,this.renderer=null,this.scene=i,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let i=this.screen;i!==null?i.material=t:(i=new Fi(vh.fullscreenGeometry,t),i.frustumCulled=!1,this.scene===null&&(this.scene=new xh),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,i=Ho){}render(t,i,r,l,u){throw new Error("Render method not implemented!")}setSize(t,i){}initialize(t,i,r){}dispose(){for(const t of Object.keys(this)){const i=this[t];(i instanceof Di||i instanceof Lr||i instanceof Rn||i instanceof vh)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},E1=class extends es{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,t,i,r,l){const u=s.state.buffers.stencil;u.setLocked(!1),u.setTest(!1)}},T1=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,A1="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",R1=class extends oi{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new nn(null),depthBuffer:new nn(null),channelWeights:new nn(null),opacity:new nn(1)},blending:Ci,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:T1,vertexShader:A1}),this.depthFunc=wc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(s){const t=s!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){const t=s!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=s}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(s){s!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=s):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},C1=class extends es{constructor(s,t=!0){super("CopyPass"),this.fullscreenMaterial=new R1,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new Di(1,1,{minFilter:An,magFilter:An,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,t,i,r,l){this.fullscreenMaterial.inputBuffer=t.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,t){this.autoResize&&this.renderTarget.setSize(s,t)}initialize(s,t,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==ri?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===an&&(this.renderTarget.texture.colorSpace=an))}},fg=new zt,qg=class extends es{constructor(s=!0,t=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=t,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,t,i){this.color=s,this.depth=t,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,t,i,r,l){const u=this.overrideClearColor,d=this.overrideClearAlpha,h=s.getClearAlpha(),m=u!==null,p=d>=0;m?(s.getClearColor(fg),s.setClearColor(u,p?d:h)):p&&s.setClearAlpha(d),s.setRenderTarget(this.renderToScreen?null:t),s.clear(this.color,this.depth,this.stencil),m?s.setClearColor(fg,h):p&&s.setClearAlpha(h)}},D1=class extends es{constructor(s,t){super("MaskPass",s,t),this.needsSwap=!1,this.clearPass=new qg(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,t,i,r,l){const u=s.getContext(),d=s.state.buffers,h=this.scene,m=this.camera,p=this.clearPass,_=this.inverted?0:1,g=1-_;d.color.setMask(!1),d.depth.setMask(!1),d.color.setLocked(!0),d.depth.setLocked(!0),d.stencil.setTest(!0),d.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),d.stencil.setFunc(u.ALWAYS,_,4294967295),d.stencil.setClear(g),d.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(s,null):(p.render(s,t),p.render(s,i))),this.renderToScreen?(s.setRenderTarget(null),s.render(h,m)):(s.setRenderTarget(t),s.render(h,m),s.setRenderTarget(i),s.render(h,m)),d.color.setLocked(!1),d.depth.setLocked(!1),d.stencil.setLocked(!1),d.stencil.setFunc(u.EQUAL,1,4294967295),d.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),d.stencil.setLocked(!0)}},dg=class{constructor(s=null,{depthBuffer:t=!0,stencilBuffer:i=!1,multisampling:r=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,i,l,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new C1,this.depthTexture=null,this.passes=[],this.timer=new y1,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(s){const t=this.inputBuffer,i=this.multisampling;i>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,s),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const t=s.getSize(new mt),i=s.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===ri&&s.outputColorSpace===an&&(this.inputBuffer.texture.colorSpace=an,this.outputBuffer.texture.colorSpace=an,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(t.width,t.height);for(const l of this.passes)l.initialize(s,i,r)}}replaceRenderer(s,t=!0){const i=this.renderer,r=i.domElement.parentNode;return this.setRenderer(s),t&&r!==null&&(r.removeChild(i.domElement),r.appendChild(s.domElement)),i}createDepthTexture(){const s=this.depthTexture=new Ch;return this.inputBuffer.depthTexture=s,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(s.format=Dr,s.type=Cr):s.type=Qa,s}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,t,i,r){const l=this.renderer,u=l===null?new mt:l.getDrawingBufferSize(new mt),d={minFilter:An,magFilter:An,stencilBuffer:t,depthBuffer:s,type:i},h=new Di(u.width,u.height,d);return r>0&&(h.samples=r),i===ri&&l!==null&&l.outputColorSpace===an&&(h.texture.colorSpace=an),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(s){for(const t of this.passes)t.mainScene=s}setMainCamera(s){for(const t of this.passes)t.mainCamera=s}addPass(s,t){const i=this.passes,r=this.renderer,l=r.getDrawingBufferSize(new mt),u=r.getContext().getContextAttributes().alpha,d=this.inputBuffer.texture.type;if(s.setRenderer(r),s.setSize(l.width,l.height),s.initialize(r,u,d),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?i.splice(t,0,s):i.push(s),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(s of i)s.setDepthTexture(h)}else s.setDepthTexture(this.depthTexture)}removePass(s){const t=this.passes,i=t.indexOf(s);if(i!==-1&&t.splice(i,1).length>0){if(this.depthTexture!==null){const u=(h,m)=>h||m.needsDepthTexture;t.reduce(u,!1)||(s.getDepthTexture()===this.depthTexture&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===t.length&&(s.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const t=this.renderer,i=this.copyPass;let r=this.inputBuffer,l=this.outputBuffer,u=!1,d,h,m;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(t,r,l,s,u),p.needsSwap&&(u&&(i.renderToScreen=p.renderToScreen,d=t.getContext(),h=t.state.buffers.stencil,h.setFunc(d.NOTEQUAL,1,4294967295),i.render(t,r,l,s,u),h.setFunc(d.EQUAL,1,4294967295)),m=r,r=l,l=m),p instanceof D1?u=!0:p instanceof E1&&(u=!1))}setSize(s,t,i){const r=this.renderer,l=r.getSize(new mt);(s===void 0||t===void 0)&&(s=l.width,t=l.height),(l.width!==s||l.height!==t)&&r.setSize(s,t,i);const u=r.getDrawingBufferSize(new mt);this.inputBuffer.setSize(u.width,u.height),this.outputBuffer.setSize(u.width,u.height);for(const d of this.passes)d.setSize(u.width,u.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),es.fullscreenGeometry.dispose()}},ws={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},w1=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ws.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ja}},Ad=!1,hg=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let i;if(t.material.flatShading)switch(t.material.side){case ii:i=this.materialsFlatShadedDoubleSide;break;case Tn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(t.material.side){case ii:i=this.materialsDoubleSide;break;case Tn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=i[2]:t.isInstancedMesh?t.material=i[1]:t.material=i[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof oi))return s.clone();const t=s.uniforms,i=new Map;for(const l in t){const u=t[l].value;u.isRenderTargetTexture&&(t[l].value=null,i.set(l,u))}const r=s.clone();for(const l of i)t[l[0]].value=l[1],r.uniforms[l[0]].value=l[1];return r}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const t=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(const i of t)i.uniforms=Object.assign({},s.uniforms),i.side=ma;t[2].skinning=!0,this.materialsBackSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=Tn,r}),this.materialsDoubleSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=ii,r}),this.materialsFlatShaded=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=Tn,r}),this.materialsFlatShadedDoubleSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=ii,r})}}render(s,t,i){const r=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,Ad){const l=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),s.render(t,i);for(const u of l)u[0].material=u[1];this.meshCount!==l.size&&l.clear()}else{const l=t.overrideMaterial;t.overrideMaterial=this.material,s.render(t,i),t.overrideMaterial=l}s.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of s)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ad}static set workaroundEnabled(s){Ad=s}},Tt={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},U1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",L1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",N1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",O1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",P1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",z1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",B1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",F1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",I1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",H1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",G1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",V1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",k1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",X1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",W1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",q1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",Y1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",Z1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",j1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",K1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",Q1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",J1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",$1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",eT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",tT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",nT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",iT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",aT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",sT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",rT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",oT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",lT=new Map([[Tt.ADD,U1],[Tt.AVERAGE,L1],[Tt.COLOR,N1],[Tt.COLOR_BURN,O1],[Tt.COLOR_DODGE,P1],[Tt.DARKEN,z1],[Tt.DIFFERENCE,B1],[Tt.DIVIDE,F1],[Tt.DST,null],[Tt.EXCLUSION,I1],[Tt.HARD_LIGHT,H1],[Tt.HARD_MIX,G1],[Tt.HUE,V1],[Tt.INVERT,k1],[Tt.INVERT_RGB,X1],[Tt.LIGHTEN,W1],[Tt.LINEAR_BURN,q1],[Tt.LINEAR_DODGE,Y1],[Tt.LINEAR_LIGHT,Z1],[Tt.LUMINOSITY,j1],[Tt.MULTIPLY,K1],[Tt.NEGATION,Q1],[Tt.NORMAL,J1],[Tt.OVERLAY,$1],[Tt.PIN_LIGHT,eT],[Tt.REFLECT,tT],[Tt.SATURATION,nT],[Tt.SCREEN,iT],[Tt.SOFT_LIGHT,aT],[Tt.SRC,sT],[Tt.SUBTRACT,rT],[Tt.VIVID_LIGHT,oT]]),cT=class extends $a{constructor(s,t=1){super(),this._blendFunction=s,this.opacity=new nn(t)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return lT.get(this.blendFunction)}},Yg=class extends $a{constructor(s,t,{attributes:i=ws.NONE,blendFunction:r=Tt.NORMAL,defines:l=new Map,uniforms:u=new Map,extensions:d=null,vertexShader:h=null}={}){super(),this.name=s,this.renderer=null,this.attributes=i,this.fragmentShader=t,this.vertexShader=h,this.defines=l,this.uniforms=u,this.extensions=d,this.blendMode=new cT(r),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=Ja,this._outputColorSpace=zi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,t=Ho){}update(s,t,i){}setSize(s,t){}initialize(s,t,i){}dispose(){for(const s of Object.keys(this)){const t=this[s];(t instanceof Di||t instanceof Lr||t instanceof Rn||t instanceof es)&&this[s].dispose()}}},pg=class extends es{constructor(s,t,i=null){super("RenderPass",s,t),this.needsSwap=!1,this.clearPass=new qg,this.overrideMaterialManager=i===null?null:new hg(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const t=this.overrideMaterialManager;s!==null?t!==null?t.setMaterial(s):this.overrideMaterialManager=new hg(s):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,t,i,r,l){const u=this.scene,d=this.camera,h=this.selection,m=d.layers.mask,p=u.background,_=s.shadowMap.autoUpdate,g=this.renderToScreen?null:t;h!==null&&d.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(u.background=null),this.clearPass.enabled&&this.clearPass.render(s,t),s.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,u,d):s.render(u,d),d.layers.mask=m,u.background=p,s.shadowMap.autoUpdate=_}},uT=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,fT="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",dT=class extends oi{constructor(s,t,i,r,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Oc.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new nn(null),depthBuffer:new nn(null),resolution:new nn(new mt),texelSize:new nn(new mt),cameraNear:new nn(.3),cameraFar:new nn(1e3),aspect:new nn(1),time:new nn(0)},blending:Ci,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),s&&this.setShaderParts(s),t&&this.setDefines(t),i&&this.setUniforms(i),this.copyCameraSettings(r)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,t=Ho){this.depthBuffer=s,this.depthPacking=t}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=uT.replace(Lt.FRAGMENT_HEAD,s.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,s.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,s.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=fT.replace(Lt.VERTEX_HEAD,s.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,s.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(const t of s.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(s){for(const t of s.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(s){this.extensions={};for(const t of s)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof gi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,t){const i=this.uniforms;i.resolution.value.set(s,t),i.texelSize.value.set(1/s,1/t),i.aspect.value=s/t}static get Section(){return Lt}};function mg(s,t,i){for(const r of t){const l="$1"+s+r.charAt(0).toUpperCase()+r.slice(1),u=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const d of i.entries())d[1]!==null&&i.set(d[0],d[1].replace(u,l))}}function hT(s,t,i){let r=t.getFragmentShader(),l=t.getVertexShader();const u=r!==void 0&&/mainImage/.test(r),d=r!==void 0&&/mainUv/.test(r);if(i.attributes|=t.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(d&&(i.attributes&ws.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!u&&!d)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Lt.FRAGMENT_HEAD)||"",_=m.get(Lt.FRAGMENT_MAIN_UV)||"",g=m.get(Lt.FRAGMENT_MAIN_IMAGE)||"",S=m.get(Lt.VERTEX_HEAD)||"",M=m.get(Lt.VERTEX_MAIN_SUPPORT)||"";const T=new Set,R=new Set;if(d&&(_+=`	${s}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const O=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);M+=`	${s}MainSupport(`,M+=O?`vUv);
`:`);
`;for(const w of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const P of w[1].split(/\s*,\s*/))i.varyings.add(P),T.add(P),R.add(P);for(const w of l.matchAll(h))R.add(w[1])}for(const O of r.matchAll(h))R.add(O[1]);for(const O of t.defines.keys())R.add(O.replace(/\([\w\s,]*\)/g,""));for(const O of t.uniforms.keys())R.add(O);R.delete("while"),R.delete("for"),R.delete("if"),t.uniforms.forEach((O,w)=>i.uniforms.set(s+w.charAt(0).toUpperCase()+w.slice(1),O)),t.defines.forEach((O,w)=>i.defines.set(s+w.charAt(0).toUpperCase()+w.slice(1),O));const y=new Map([["fragment",r],["vertex",l]]);mg(s,R,i.defines),mg(s,R,y),r=y.get("fragment"),l=y.get("vertex");const v=t.blendMode;if(i.blendModes.set(v.blendFunction,v),u){t.inputColorSpace!==null&&t.inputColorSpace!==i.colorSpace&&(g+=t.inputColorSpace===an?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==zi?i.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(i.colorSpace=t.inputColorSpace);const O=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${s}MainImage(color0, UV, `,(i.attributes&ws.DEPTH)!==0&&O.test(r)&&(g+="depth, ",i.readDepth=!0),g+=`color1);
	`;const w=s+"BlendOpacity";i.uniforms.set(w,v.opacity),g+=`color0 = blend${v.blendFunction}(color0, color1, ${w});

	`,p+=`uniform float ${w};

`}if(p+=r+`
`,l!==null&&(S+=l+`
`),m.set(Lt.FRAGMENT_HEAD,p),m.set(Lt.FRAGMENT_MAIN_UV,_),m.set(Lt.FRAGMENT_MAIN_IMAGE,g),m.set(Lt.VERTEX_HEAD,S),m.set(Lt.VERTEX_MAIN_SUPPORT,M),t.extensions!==null)for(const O of t.extensions)i.extensions.add(O)}}var xg=class extends es{constructor(s,...t){super("EffectPass"),this.fullscreenMaterial=new dT(null,null,null,s),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const t of this.effects)t.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const t of this.effects)t.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const t=this.fullscreenMaterial;t.dithering=s,t.needsUpdate=!0}setEffects(s){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=s.sort((t,i)=>i.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const s=new w1;let t=0;for(const d of this.effects)if(d.blendMode.blendFunction===Tt.DST)s.attributes|=d.getAttributes()&ws.DEPTH;else{if((s.attributes&d.getAttributes()&ws.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${d.name})`);hT("e"+t++,d,s)}let i=s.shaderParts.get(Lt.FRAGMENT_HEAD),r=s.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),l=s.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const u=/\bblend\b/g;for(const d of s.blendModes.values())i+=d.getShaderCode().replace(u,`blend${d.blendFunction}`)+`
`;(s.attributes&ws.DEPTH)!==0?(s.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===an&&(r+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Lt.FRAGMENT_HEAD,i),s.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,r),s.shaderParts.set(Lt.FRAGMENT_MAIN_UV,l);for(const[d,h]of s.shaderParts)h!==null&&s.shaderParts.set(d,h.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,t=Ho){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=t;for(const i of this.effects)i.setDepthTexture(s,t)}render(s,t,i,r,l){for(const u of this.effects)u.update(s,t,r);if(!this.skipRendering||this.renderToScreen){const u=this.fullscreenMaterial;u.inputBuffer=t.texture,u.time+=r*this.timeScale,s.setRenderTarget(this.renderToScreen?null:i),s.render(this.scene,this.camera)}}setSize(s,t){this.fullscreenMaterial.setSize(s,t);for(const i of this.effects)i.setSize(s,t)}initialize(s,t,i){this.renderer=s;for(const r of this.effects)r.initialize(s,t,i);this.updateMaterial(),i!==void 0&&i!==ri&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){switch(s.type){case"change":this.recompile();break}}};const pT=()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,t.width,t.height);const r=new Rn(t);r.minFilter=An,r.magFilter=An,r.generateMipmaps=!1;const l=[];let u=null;const d=64;let h=.1*64;const m=1/d,p=()=>{i.fillStyle="black",i.fillRect(0,0,t.width,t.height)},_=M=>{const T={x:M.x*64,y:(1-M.y)*64};let R=1;const y=P=>Math.sin(P*Math.PI/2),v=P=>-P*(P-2);M.age<d*.3?R=y(M.age/(d*.3)):R=v(1-(M.age-d*.3)/(d*.7))||0,R*=M.force;const O=`${(M.vx+1)/2*255}, ${(M.vy+1)/2*255}, ${R*255}`,w=320;i.shadowOffsetX=w,i.shadowOffsetY=w,i.shadowBlur=h,i.shadowColor=`rgba(${O},${.22*R})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(T.x-w,T.y-w,h,0,Math.PI*2),i.fill()};return{canvas:t,texture:r,addTouch:M=>{let T=0,R=0,y=0;if(u){const v=M.x-u.x,O=M.y-u.y;if(v===0&&O===0)return;const w=v*v+O*O,P=Math.sqrt(w);R=v/(P||1),y=O/(P||1),T=Math.min(w*1e4,1)}u={x:M.x,y:M.y},l.push({x:M.x,y:M.y,age:0,force:T,vx:R,vy:y})},update:()=>{p();for(let M=l.length-1;M>=0;M--){const T=l[M],R=T.force*m*(1-T.age/d);T.x+=T.vx*R,T.y+=T.vy*R,T.age++,T.age>d&&l.splice(M,1)}for(let M=0;M<l.length;M++)_(l[M]);r.needsUpdate=!0},set radiusScale(M){h=.1*64*M},get radiusScale(){return h/(.1*64)},size:64}},mT=(s,t)=>{const i=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new Yg("LiquidEffect",i,{uniforms:new Map([["uTexture",new nn(s)],["uStrength",new nn(t?.strength??.025)],["uTime",new nn(0)],["uFreq",new nn(t?.freq??4.5)]])})},gg={square:0,circle:1,triangle:2,diamond:3},xT=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,gT=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,Rd=10,vT=({variant:s="square",pixelSize:t=3,color:i="#B19EEF",className:r,style:l,antialias:u=!0,patternScale:d=2,patternDensity:h=1,liquid:m=!1,liquidStrength:p=.1,liquidRadius:_=1,pixelSizeJitter:g=0,enableRipples:S=!0,rippleIntensityScale:M=1,rippleThickness:T=.1,rippleSpeed:R=.3,liquidWobbleSpeed:y=4.5,autoPauseOffscreen:v=!0,speed:O=.5,transparent:w=!0,edgeFade:P=.5,noiseAmount:V=0})=>{const N=ni.useRef(null),G=ni.useRef({visible:!0}),ne=ni.useRef(O),D=ni.useRef(null),C=ni.useRef(null);return ni.useEffect(()=>{const H=N.current;if(!H)return;ne.current=O;const $=["antialias","liquid","noiseAmount"],se={antialias:u,liquid:m,noiseAmount:V};let le=!1;if(!D.current)le=!0;else if(C.current){for(const ee of $)if(C.current[ee]!==se[ee]){le=!0;break}}if(le){if(D.current){const Ne=D.current;Ne.resizeObserver?.disconnect(),cancelAnimationFrame(Ne.raf),Ne.quad?.geometry.dispose(),Ne.material.dispose(),Ne.composer?.dispose(),Ne.renderer.dispose(),Ne.renderer.domElement.parentElement===H&&H.removeChild(Ne.renderer.domElement),D.current=null}const ee=document.createElement("canvas"),L=new S1({canvas:ee,antialias:u,alpha:!0,powerPreference:"high-performance"});L.domElement.style.width="100%",L.domElement.style.height="100%",L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(L.domElement),w?L.setClearAlpha(0):L.setClearColor(0,1);const Y={uResolution:{value:new mt(0,0)},uTime:{value:0},uColor:{value:new zt(i)},uClickPos:{value:Array.from({length:Rd},()=>new mt(-1,-1))},uClickTimes:{value:new Float32Array(Rd)},uShapeType:{value:gg[s]??0},uPixelSize:{value:t*L.getPixelRatio()},uScale:{value:d},uDensity:{value:h},uPixelJitter:{value:g},uEnableRipples:{value:S?1:0},uRippleSpeed:{value:R},uRippleThickness:{value:T},uRippleIntensity:{value:M},uEdgeFade:{value:P}},W=new xh,he=new Dh(-1,1,1,-1,0,1),xe=new oi({vertexShader:xT,fragmentShader:gT,uniforms:Y,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:ph}),Ue=new Wo(2,2),He=new Fi(Ue,xe);W.add(He);const Ie=new NM,tt=()=>{const Ne=H.clientWidth||1,Ve=H.clientHeight||1;L.setSize(Ne,Ve,!1),Y.uResolution.value.set(L.domElement.width,L.domElement.height),D.current?.composer&&D.current.composer.setSize(L.domElement.width,L.domElement.height),Y.uPixelSize.value=t*L.getPixelRatio()};tt();const dt=new ResizeObserver(tt);dt.observe(H);const me=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ne=new Uint32Array(1);return window.crypto.getRandomValues(Ne),Ne[0]/4294967295}return Math.random()})()*1e3;let ye,Xe,Fe;if(m){Xe=pT(),Xe.radiusScale=_,ye=new dg(L);const Ne=new pg(W,he);Fe=mT(Xe.texture,{strength:p,freq:y});const Ve=new xg(he,Fe);Ve.renderToScreen=!0,ye.addPass(Ne),ye.addPass(Ve)}if(V>0){ye||(ye=new dg(L),ye.addPass(new pg(W,he)));const Ne=new Yg("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new nn(0)],["uAmount",new nn(V)]])}),Ve=new xg(he,Ne);Ve.renderToScreen=!0,ye&&ye.passes.length>0&&ye.passes.forEach(pt=>pt.renderToScreen=!1),ye.addPass(Ve)}ye&&ye.setSize(L.domElement.width,L.domElement.height);const st=Ne=>{const Ve=L.domElement.getBoundingClientRect(),pt=L.domElement.width/Ve.width,Ce=L.domElement.height/Ve.height,Nt=(Ne.clientX-Ve.left)*pt,We=(Ve.height-(Ne.clientY-Ve.top))*Ce;return{fx:Nt,fy:We,w:L.domElement.width,h:L.domElement.height}},Qt=Ne=>{const{fx:Ve,fy:pt}=st(Ne),Ce=D.current?.clickIx??0;Y.uClickPos.value[Ce].set(Ve,pt),Y.uClickTimes.value[Ce]=Y.uTime.value,D.current&&(D.current.clickIx=(Ce+1)%Rd)},rt=Ne=>{if(!Xe)return;const{fx:Ve,fy:pt,w:Ce,h:Nt}=st(Ne);Xe.addTouch({x:Ve/Ce,y:pt/Nt})};L.domElement.addEventListener("pointerdown",Qt,{passive:!0}),L.domElement.addEventListener("pointermove",rt,{passive:!0});let xt=0;const B=()=>{if(v&&!G.current.visible){xt=requestAnimationFrame(B);return}Y.uTime.value=me+Ie.getElapsedTime()*ne.current,Fe&&(Fe.uniforms.get("uTime").value=Y.uTime.value),ye?(Xe&&Xe.update(),ye.passes.forEach(Ne=>{const Ve=Ne.effects;Ve&&Ve.forEach(pt=>{const Ce=pt.uniforms?.get("uTime");Ce&&(Ce.value=Y.uTime.value)})}),ye.render()):L.render(W,he),xt=requestAnimationFrame(B)};xt=requestAnimationFrame(B),D.current={renderer:L,scene:W,camera:he,material:xe,clock:Ie,clickIx:0,uniforms:Y,resizeObserver:dt,raf:xt,quad:He,timeOffset:me,composer:ye,touch:Xe,liquidEffect:Fe}}else{const ee=D.current;if(ee.uniforms.uShapeType.value=gg[s]??0,ee.uniforms.uPixelSize.value=t*ee.renderer.getPixelRatio(),ee.uniforms.uColor.value.set(i),ee.uniforms.uScale.value=d,ee.uniforms.uDensity.value=h,ee.uniforms.uPixelJitter.value=g,ee.uniforms.uEnableRipples.value=S?1:0,ee.uniforms.uRippleIntensity.value=M,ee.uniforms.uRippleThickness.value=T,ee.uniforms.uRippleSpeed.value=R,ee.uniforms.uEdgeFade.value=P,w?ee.renderer.setClearAlpha(0):ee.renderer.setClearColor(0,1),ee.liquidEffect){const L=ee.liquidEffect;L&&(L.value=p);const Y=ee.liquidEffect.uniforms.get("uFreq");Y&&(Y.value=y)}ee.touch&&(ee.touch.radiusScale=_)}return C.current=se,()=>{if(D.current&&le||!D.current)return;const ee=D.current;ee.resizeObserver?.disconnect(),cancelAnimationFrame(ee.raf),ee.quad?.geometry.dispose(),ee.material.dispose(),ee.composer?.dispose(),ee.renderer.dispose(),ee.renderer.domElement.parentElement===H&&H.removeChild(ee.renderer.domElement),D.current=null}},[u,m,V,t,d,h,S,M,T,R,g,P,w,p,_,y,v,s,i,O]),xn.jsx("div",{ref:N,className:`w-full h-full relative overflow-hidden ${r??""}`,style:l,"aria-label":"PixelBlast interactive background"})},_T=ni.lazy(()=>Io(()=>import("./Home-DZ5lQ-2k.js"),__vite__mapDeps([0,1,2]))),ST=ni.lazy(()=>Io(()=>import("./ProjectsPage-CawnsOhx.js"),__vite__mapDeps([3,1]))),MT=ni.lazy(()=>Io(()=>import("./MiniProjectsPage-B1u6bAkZ.js"),__vite__mapDeps([4,1])));ni.lazy(()=>Io(()=>import("./TechStackPage-BwnJMil8.js"),__vite__mapDeps([5,1])));const yT=ni.lazy(()=>Io(()=>import("./FreelancePortfolio-DTFuw0ex.js"),__vite__mapDeps([6,1,2])));function bT(){return xn.jsxs("div",{className:"min-h-screen relative font-medium",children:[xn.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-10,filter:"blur(1px) opacity(0.6)"},children:xn.jsx(vT,{variant:"circle",pixelSize:6,color:"#B19EEF",patternScale:3,patternDensity:1.5,pixelSizeJitter:0,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,speed:.6,edgeFade:.1,transparent:!0})}),xn.jsx("div",{style:{position:"relative",zIndex:1},children:xn.jsx(eS,{children:xn.jsx(ni.Suspense,{fallback:xn.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."}),children:xn.jsxs(tS,{children:[xn.jsx(ic,{path:"/",element:xn.jsx(_T,{})}),xn.jsx(ic,{path:"/projects",element:xn.jsx(ST,{})}),xn.jsx(ic,{path:"/miniprojects",element:xn.jsx(MT,{})}),xn.jsx(ic,{path:"/freelance",element:xn.jsx(yT,{})})]})})})})]})}lS.createRoot(document.getElementById("root")).render(xn.jsx(ni.StrictMode,{children:xn.jsx(bT,{})}));export{vT as P,xn as j};
