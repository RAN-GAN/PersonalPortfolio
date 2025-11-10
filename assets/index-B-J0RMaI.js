(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hd={exports:{}},Fo={};var Wx;function ay(){if(Wx)return Fo;Wx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var qx;function ry(){return qx||(qx=1,hd.exports=ay()),hd.exports}var ze=ry(),pd={exports:{}},ct={};var Yx;function sy(){if(Yx)return ct;Yx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=S&&P[S]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function v(P,ae,Se){this.props=P,this.context=ae,this.refs=b,this.updater=Se||M}v.prototype.isReactComponent={},v.prototype.setState=function(P,ae){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ae,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=v.prototype;function U(P,ae,Se){this.props=P,this.context=ae,this.refs=b,this.updater=Se||M}var B=U.prototype=new D;B.constructor=U,T(B,v.prototype),B.isPureReactComponent=!0;var V=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function w(P,ae,Se){var Ae=Se.ref;return{$$typeof:a,type:P,key:ae,ref:Ae!==void 0?Ae:null,props:Se}}function C(P,ae){return w(P.type,ae,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function te(P){var ae={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return ae[Se]})}var oe=/\/+/g;function he(P,ae){return typeof P=="object"&&P!==null&&P.key!=null?te(""+P.key):ae.toString(36)}function J(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(ae){P.status==="pending"&&(P.status="fulfilled",P.value=ae)},function(ae){P.status==="pending"&&(P.status="rejected",P.reason=ae)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,ae,Se,Ae,Be){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var le=!1;if(P===null)le=!0;else switch(ie){case"bigint":case"string":case"number":le=!0;break;case"object":switch(P.$$typeof){case a:case e:le=!0;break;case x:return le=P._init,N(le(P._payload),ae,Se,Ae,Be)}}if(le)return Be=Be(P),le=Ae===""?"."+he(P,0):Ae,V(Be)?(Se="",le!=null&&(Se=le.replace(oe,"$&/")+"/"),N(Be,ae,Se,"",function(ke){return ke})):Be!=null&&(G(Be)&&(Be=C(Be,Se+(Be.key==null||P&&P.key===Be.key?"":(""+Be.key).replace(oe,"$&/")+"/")+le)),ae.push(Be)),1;le=0;var Ee=Ae===""?".":Ae+":";if(V(P))for(var Pe=0;Pe<P.length;Pe++)Ae=P[Pe],ie=Ee+he(Ae,Pe),le+=N(Ae,ae,Se,ie,Be);else if(Pe=y(P),typeof Pe=="function")for(P=Pe.call(P),Pe=0;!(Ae=P.next()).done;)Ae=Ae.value,ie=Ee+he(Ae,Pe++),le+=N(Ae,ae,Se,ie,Be);else if(ie==="object"){if(typeof P.then=="function")return N(J(P),ae,Se,Ae,Be);throw ae=String(P),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return le}function X(P,ae,Se){if(P==null)return P;var Ae=[],Be=0;return N(P,Ae,"","",function(ie){return ae.call(Se,ie,Be++)}),Ae}function Y(P){if(P._status===-1){var ae=P._result;ae=ae(),ae.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=ae)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},_e={map:X,forEach:function(P,ae,Se){X(P,function(){ae.apply(this,arguments)},Se)},count:function(P){var ae=0;return X(P,function(){ae++}),ae},toArray:function(P){return X(P,function(ae){return ae})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ct.Activity=g,ct.Children=_e,ct.Component=v,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=U,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ct.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ct.cache=function(P){return function(){return P.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(P,ae,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=T({},P.props),Be=P.key;if(ae!=null)for(ie in ae.key!==void 0&&(Be=""+ae.key),ae)!ee.call(ae,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&ae.ref===void 0||(Ae[ie]=ae[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=Se;else if(1<ie){for(var le=Array(ie),Ee=0;Ee<ie;Ee++)le[Ee]=arguments[Ee+2];Ae.children=le}return w(P.type,Be,Ae)},ct.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ct.createElement=function(P,ae,Se){var Ae,Be={},ie=null;if(ae!=null)for(Ae in ae.key!==void 0&&(ie=""+ae.key),ae)ee.call(ae,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ae[Ae]);var le=arguments.length-2;if(le===1)Be.children=Se;else if(1<le){for(var Ee=Array(le),Pe=0;Pe<le;Pe++)Ee[Pe]=arguments[Pe+2];Be.children=Ee}if(P&&P.defaultProps)for(Ae in le=P.defaultProps,le)Be[Ae]===void 0&&(Be[Ae]=le[Ae]);return w(P,ie,Be)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(P){return{$$typeof:h,render:P}},ct.isValidElement=G,ct.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:Y}},ct.memo=function(P,ae){return{$$typeof:p,type:P,compare:ae===void 0?null:ae}},ct.startTransition=function(P){var ae=z.T,Se={};z.T=Se;try{var Ae=P(),Be=z.S;Be!==null&&Be(Se,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,me)}catch(ie){me(ie)}finally{ae!==null&&Se.types!==null&&(ae.types=Se.types),z.T=ae}},ct.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ct.use=function(P){return z.H.use(P)},ct.useActionState=function(P,ae,Se){return z.H.useActionState(P,ae,Se)},ct.useCallback=function(P,ae){return z.H.useCallback(P,ae)},ct.useContext=function(P){return z.H.useContext(P)},ct.useDebugValue=function(){},ct.useDeferredValue=function(P,ae){return z.H.useDeferredValue(P,ae)},ct.useEffect=function(P,ae){return z.H.useEffect(P,ae)},ct.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ct.useId=function(){return z.H.useId()},ct.useImperativeHandle=function(P,ae,Se){return z.H.useImperativeHandle(P,ae,Se)},ct.useInsertionEffect=function(P,ae){return z.H.useInsertionEffect(P,ae)},ct.useLayoutEffect=function(P,ae){return z.H.useLayoutEffect(P,ae)},ct.useMemo=function(P,ae){return z.H.useMemo(P,ae)},ct.useOptimistic=function(P,ae){return z.H.useOptimistic(P,ae)},ct.useReducer=function(P,ae,Se){return z.H.useReducer(P,ae,Se)},ct.useRef=function(P){return z.H.useRef(P)},ct.useState=function(P){return z.H.useState(P)},ct.useSyncExternalStore=function(P,ae,Se){return z.H.useSyncExternalStore(P,ae,Se)},ct.useTransition=function(){return z.H.useTransition()},ct.version="19.2.0",ct}var jx;function jh(){return jx||(jx=1,pd.exports=sy()),pd.exports}var pe=jh(),md={exports:{}},Io={},xd={exports:{}},gd={};var Zx;function oy(){return Zx||(Zx=1,(function(a){function e(N,X){var Y=N.length;N.push(X);e:for(;0<Y;){var me=Y-1>>>1,_e=N[me];if(0<l(_e,X))N[me]=X,N[Y]=_e,Y=me;else break e}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var X=N[0],Y=N.pop();if(Y!==X){N[0]=Y;e:for(var me=0,_e=N.length,P=_e>>>1;me<P;){var ae=2*(me+1)-1,Se=N[ae],Ae=ae+1,Be=N[Ae];if(0>l(Se,Y))Ae<_e&&0>l(Be,Se)?(N[me]=Be,N[Ae]=Y,me=Ae):(N[me]=Se,N[ae]=Y,me=ae);else if(Ae<_e&&0>l(Be,Y))N[me]=Be,N[Ae]=Y,me=Ae;else break e}}return X}function l(N,X){var Y=N.sortIndex-X.sortIndex;return Y!==0?Y:N.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,g=null,S=3,y=!1,M=!1,T=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function B(N){for(var X=i(p);X!==null;){if(X.callback===null)s(p);else if(X.startTime<=N)s(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(p)}}function V(N){if(T=!1,B(N),!M)if(i(m)!==null)M=!0,O||(O=!0,te());else{var X=i(p);X!==null&&J(V,X.startTime-N)}}var O=!1,z=-1,ee=5,w=-1;function C(){return b?!0:!(a.unstable_now()-w<ee)}function G(){if(b=!1,O){var N=a.unstable_now();w=N;var X=!0;try{e:{M=!1,T&&(T=!1,D(z),z=-1),y=!0;var Y=S;try{t:{for(B(N),g=i(m);g!==null&&!(g.expirationTime>N&&C());){var me=g.callback;if(typeof me=="function"){g.callback=null,S=g.priorityLevel;var _e=me(g.expirationTime<=N);if(N=a.unstable_now(),typeof _e=="function"){g.callback=_e,B(N),X=!0;break t}g===i(m)&&s(m),B(N)}else s(m);g=i(m)}if(g!==null)X=!0;else{var P=i(p);P!==null&&J(V,P.startTime-N),X=!1}}break e}finally{g=null,S=Y,y=!1}X=void 0}}finally{X?te():O=!1}}}var te;if(typeof U=="function")te=function(){U(G)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=G,te=function(){he.postMessage(null)}}else te=function(){v(G,0)};function J(N,X){z=v(function(){N(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(N){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var Y=S;S=X;try{return N()}finally{S=Y}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=S;S=N;try{return X()}finally{S=Y}},a.unstable_scheduleCallback=function(N,X,Y){var me=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?me+Y:me):Y=me,N){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Y+_e,N={id:x++,callback:X,priorityLevel:N,startTime:Y,expirationTime:_e,sortIndex:-1},Y>me?(N.sortIndex=Y,e(p,N),i(m)===null&&N===i(p)&&(T?(D(z),z=-1):T=!0,J(V,Y-me))):(N.sortIndex=_e,e(m,N),M||y||(M=!0,O||(O=!0,te()))),N},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(N){var X=S;return function(){var Y=S;S=X;try{return N.apply(this,arguments)}finally{S=Y}}}})(gd)),gd}var Kx;function ly(){return Kx||(Kx=1,xd.exports=oy()),xd.exports}var vd={exports:{}},zn={};var Qx;function cy(){if(Qx)return zn;Qx=1;var a=jh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},zn.flushSync=function(m){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=x,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.0",zn}var Jx;function uy(){if(Jx)return vd.exports;Jx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),vd.exports=cy(),vd.exports}var $x;function fy(){if($x)return Io;$x=1;var a=ly(),e=jh(),i=uy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=d;else{for(var _=!1,A=u.child;A;){if(A===r){_=!0,r=u,o=d;break}if(A===o){_=!0,o=u,r=d;break}A=A.sibling}if(!_){for(A=d.child;A;){if(A===r){_=!0,r=d,o=u;break}if(A===o){_=!0,o=d,r=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case ee:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var J=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},me=[],_e=-1;function P(t){return{current:t}}function ae(t){0>_e||(t.current=me[_e],me[_e]=null,_e--)}function Se(t,n){_e++,me[_e]=t.current,t.current=n}var Ae=P(null),Be=P(null),ie=P(null),le=P(null);function Ee(t,n){switch(Se(ie,n),Se(Be,t),Se(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?px(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=px(n),t=mx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(Ae),Se(Ae,t)}function Pe(){ae(Ae),ae(Be),ae(ie)}function ke(t){t.memoizedState!==null&&Se(le,t);var n=Ae.current,r=mx(n,t.type);n!==r&&(Se(Be,t),Se(Ae,r))}function lt(t){Be.current===t&&(ae(Ae),ae(Be)),le.current===t&&(ae(le),Oo._currentValue=Y)}var en,ut;function _t(t){if(en===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",ut=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+ut}var I=!1;function He(t,n){if(!t||I)return"";I=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(se){var ne=se}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(se){ne=se}t.call(ge.prototype)}}else{try{throw Error()}catch(se){ne=se}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(se){if(se&&ne&&typeof se.stack=="string")return[se.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],A=d[1];if(_&&A){var F=_.split(`
`),Q=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===Q.length)for(o=F.length-1,u=Q.length-1;1<=o&&0<=u&&F[o]!==Q[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==Q[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==Q[u]){var fe=`
`+F[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{I=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?_t(r):""}function Ye(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return He(t.type,!1);case 11:return He(t.type.render,!1);case 1:return He(t.type,!0);case 31:return _t("Activity");default:return""}}function gt(t){try{var n="",r=null;do n+=Ye(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ne=Object.prototype.hasOwnProperty,Bt=a.unstable_scheduleCallback,Ze=a.unstable_cancelCallback,ot=a.unstable_shouldYield,L=a.unstable_requestPaint,E=a.unstable_now,K=a.unstable_getCurrentPriorityLevel,xe=a.unstable_ImmediatePriority,ye=a.unstable_UserBlockingPriority,ce=a.unstable_NormalPriority,Ke=a.unstable_LowPriority,Le=a.unstable_IdlePriority,et=a.log,je=a.unstable_setDisableYieldValue,be=null,Te=null;function Qe(t){if(typeof et=="function"&&je(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(be,t)}catch{}}var We=Math.clz32?Math.clz32:H,Fe=Math.log,rt=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Fe(t)/rt|0)|0}var De=256,Ce=262144,we=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Me(o):(_&=A,_!==0?u=Me(_):r||(r=A&~t,r!==0&&(u=Me(r))))):(A=o&~d,A!==0?u=Me(A):_!==0?u=Me(_):r||(r=o&~t,r!==0&&(u=Me(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function Ge(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function Dt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Bn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zn(t,n,r,o,u,d){var _=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,F=t.expirationTimes,Q=t.hiddenUpdates;for(r=_&~r;0<r;){var fe=31-We(r),ge=1<<fe;A[fe]=0,F[fe]=-1;var ne=Q[fe];if(ne!==null)for(Q[fe]=null,fe=0;fe<ne.length;fe++){var se=ne[fe];se!==null&&(se.lane&=-536870913)}r&=~ge}o!==0&&cl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~n))}function cl(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-We(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Ws(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-We(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function qs(t,n){var r=n&-n;return r=(r&42)!==0?1:bi(r),(r&(t.suspendedLanes|n))!==0?0:r}function bi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Fx(t.type))}function js(t,n){var r=X.p;try{return X.p=t,n()}finally{X.p=r}}var Kn=Math.random().toString(36).slice(2),fn="__reactFiber$"+Kn,gn="__reactProps$"+Kn,Xi="__reactContainer$"+Kn,Gr="__reactEvents$"+Kn,su="__reactListeners$"+Kn,ou="__reactHandles$"+Kn,ul="__reactResources$"+Kn,ur="__reactMarker$"+Kn;function Zs(t){delete t[fn],delete t[gn],delete t[Gr],delete t[su],delete t[ou]}function Aa(t){var n=t[fn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Xi]||r[fn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=bx(t);t!==null;){if(r=t[fn])return r;t=bx(t)}return n}t=r,r=t.parentNode}return null}function R(t){if(t=t[fn]||t[Xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function re(t){var n=t[ul];return n||(n=t[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(t){t[ur]=!0}var j=new Set,Re={};function Ue(t,n){Ie(t,n),Ie(t+"Capture",n)}function Ie(t,n){for(Re[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Ve=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},at={};function Je(t){return Ne.call(at,t)?!0:Ne.call(nt,t)?!1:Ve.test(t)?at[t]=!0:(nt[t]=!0,!1)}function ht(t,n,r){if(Je(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function wt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Ut(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function Et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){r=""+_,d.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(_){r=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){if(!t._valueTracker){var n=Ft(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function Tt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Ft(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ra=/[\n"\\]/g;function Zt(t){return t.replace(Ra,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wi(t,n,r,o,u,d,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Et(n)):t.value!==""+Et(n)&&(t.value=""+Et(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?En(t,_,Et(n)):r!=null?En(t,_,Et(r)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Et(A):t.removeAttribute("name")}function Kt(t,n,r,o,u,d,_,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Yt(t);return}r=r!=null?""+Et(r):"",n=n!=null?""+Et(n):r,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Yt(t)}function En(t,n,r){n==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function vn(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Et(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Tn(t,n,r){if(n!=null&&(n=""+Et(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Et(r):""}function Un(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Et(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Yt(t)}function Oi(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||qi.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function dp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&fp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&fp(t,d,n[d])}function lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return t_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function hp(t){var n=R(t);if(n&&(t=n.stateNode)){var r=t[gn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Wi(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[gn]||null;if(!u)throw Error(s(90));Wi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Tt(o)}break e;case"textarea":Tn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&vn(t,!!r.multiple,n,!1)}}}var fu=!1;function pp(t,n,r){if(fu)return t(n,r);fu=!0;try{var o=t(n);return o}finally{if(fu=!1,(Vr!==null||kr!==null)&&(Jl(),Vr&&(n=Vr,t=kr,kr=Vr=null,hp(n),t)))for(n=0;n<t.length;n++)hp(t[n])}}function Ks(t,n){var r=t.stateNode;if(r===null)return null;var o=r[gn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(ji)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){du=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{du=!1}var Ca=null,hu=null,dl=null;function mp(){if(dl)return dl;var t,n=hu,r=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<r&&n[t]===u[t];t++);var _=r-t;for(o=1;o<=_&&n[r-o]===u[d-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function xp(){return!1}function Vn(t){function n(r,o,u,d,_){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:xp,this.isPropagationStopped=xp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Vn(fr),Js=g({},fr,{view:0,detail:0}),n_=Vn(Js),pu,mu,$s,xl=g({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(pu=t.screenX-$s.screenX,mu=t.screenY-$s.screenY):mu=pu=0,$s=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),gp=Vn(xl),i_=g({},xl,{dataTransfer:0}),a_=Vn(i_),r_=g({},Js,{relatedTarget:0}),xu=Vn(r_),s_=g({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),o_=Vn(s_),l_=g({},fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c_=Vn(l_),u_=g({},fr,{data:0}),vp=Vn(u_),f_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=h_[t])?!!n[t]:!1}function gu(){return p_}var m_=g({},Js,{key:function(t){if(t.key){var n=f_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x_=Vn(m_),g_=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Vn(g_),v_=g({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),__=Vn(v_),S_=g({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=Vn(S_),b_=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M_=Vn(b_),E_=g({},fr,{newState:0,oldState:0}),T_=Vn(E_),A_=[9,13,27,32],vu=ji&&"CompositionEvent"in window,eo=null;ji&&"documentMode"in document&&(eo=document.documentMode);var R_=ji&&"TextEvent"in window&&!eo,Sp=ji&&(!vu||eo&&8<eo&&11>=eo),yp=" ",bp=!1;function Mp(t,n){switch(t){case"keyup":return A_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function C_(t,n){switch(t){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(bp=!0,yp);case"textInput":return t=n.data,t===yp&&bp?null:t;default:return null}}function w_(t,n){if(Xr)return t==="compositionend"||!vu&&Mp(t,n)?(t=mp(),dl=hu=Ca=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sp&&n.locale!=="ko"?null:n.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!D_[t.type]:n==="textarea"}function Ap(t,n,r,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=rc(n,"onChange"),0<n.length&&(r=new ml("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var to=null,no=null;function U_(t){lx(t,0)}function gl(t){var n=W(t);if(Tt(n))return t}function Rp(t,n){if(t==="change")return n}var Cp=!1;if(ji){var _u;if(ji){var Su="oninput"in document;if(!Su){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Su=typeof wp.oninput=="function"}_u=Su}else _u=!1;Cp=_u&&(!document.documentMode||9<document.documentMode)}function Dp(){to&&(to.detachEvent("onpropertychange",Up),no=to=null)}function Up(t){if(t.propertyName==="value"&&gl(no)){var n=[];Ap(n,no,t,uu(t)),pp(U_,n)}}function L_(t,n,r){t==="focusin"?(Dp(),to=n,no=r,to.attachEvent("onpropertychange",Up)):t==="focusout"&&Dp()}function N_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(no)}function O_(t,n){if(t==="click")return gl(n)}function P_(t,n){if(t==="input"||t==="change")return gl(n)}function B_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:B_;function io(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Ne.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,n){var r=Lp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Lp(r)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mn(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Mn(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var z_=ji&&"documentMode"in document&&11>=document.documentMode,Wr=null,bu=null,ao=null,Mu=!1;function Bp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mu||Wr==null||Wr!==Mn(o)||(o=Wr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=rc(bu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Wr)))}function dr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var qr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Eu={},zp={};ji&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function hr(t){if(Eu[t])return Eu[t];if(!qr[t])return t;var n=qr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in zp)return Eu[t]=n[r];return t}var Fp=hr("animationend"),Ip=hr("animationiteration"),Hp=hr("animationstart"),F_=hr("transitionrun"),I_=hr("transitionstart"),H_=hr("transitioncancel"),Gp=hr("transitionend"),Vp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Mi(t,n){Vp.set(t,n),Ue(n,[t])}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],Yr=0,Au=0;function _l(){for(var t=Yr,n=Au=Yr=0;n<t;){var r=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}d!==0&&kp(r,u,d)}}function Sl(t,n,r,o){fi[Yr++]=t,fi[Yr++]=n,fi[Yr++]=r,fi[Yr++]=o,Au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ru(t,n,r,o){return Sl(t,n,r,o),yl(t)}function pr(t,n){return Sl(t,null,null,n),yl(t)}function kp(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-We(r),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),d):null}function yl(t){if(50<Ro)throw Ro=0,zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function G_(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,r,o){return new G_(t,n,r,o)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var r=t.alternate;return r===null?(r=Jn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Xp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,r,o,u,d){var _=0;if(o=t,typeof t=="function")Cu(t)&&(_=1);else if(typeof t=="string")_=qS(t,r,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Jn(31,r,n,u),t.elementType=w,t.lanes=d,t;case T:return mr(r.children,u,d,n);case b:_=8,u|=24;break;case v:return t=Jn(12,r,n,u|2),t.elementType=v,t.lanes=d,t;case V:return t=Jn(13,r,n,u),t.elementType=V,t.lanes=d,t;case O:return t=Jn(19,r,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break e;case D:_=9;break e;case B:_=11;break e;case z:_=14;break e;case ee:_=16,o=null;break e}_=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Jn(_,r,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function mr(t,n,r,o){return t=Jn(7,t,o,n),t.lanes=r,t}function wu(t,n,r){return t=Jn(6,t,null,n),t.lanes=r,t}function Wp(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Du(t,n,r){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qp=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var r=qp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:gt(n)},qp.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var Zr=[],Kr=0,Ml=null,ro=0,hi=[],pi=0,wa=null,Pi=1,Bi="";function Ki(t,n){Zr[Kr++]=ro,Zr[Kr++]=Ml,Ml=t,ro=n}function Yp(t,n,r){hi[pi++]=Pi,hi[pi++]=Bi,hi[pi++]=wa,wa=t;var o=Pi;t=Bi;var u=32-We(o)-1;o&=~(1<<u),r+=1;var d=32-We(n)+u;if(30<d){var _=u-u%5;d=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Pi=1<<32-We(n)+u|r<<u|o,Bi=d+t}else Pi=1<<d|r<<u|o,Bi=t}function Uu(t){t.return!==null&&(Ki(t,1),Yp(t,1,0))}function Lu(t){for(;t===Ml;)Ml=Zr[--Kr],Zr[Kr]=null,ro=Zr[--Kr],Zr[Kr]=null;for(;t===wa;)wa=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,Pi=hi[--pi],hi[pi]=null}function jp(t,n){hi[pi++]=Pi,hi[pi++]=Bi,hi[pi++]=wa,Pi=n.id,Bi=n.overflow,wa=t}var Ln=null,Qt=null,At=!1,Da=null,mi=!1,Nu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(di(n,t)),Nu}function Zp(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[fn]=t,n[gn]=o,r){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(r=0;r<wo.length;r++)yt(wo[r],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Kt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Un(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||dx(n.textContent,r)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ua(t,!0)}function Kp(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Ln=Ln.return}}function Qr(t){if(t!==Ln)return!1;if(!At)return Kp(t),At=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Jf(t.type,t.memoizedProps)),r=!r),r&&Qt&&Ua(t),Kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=yx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=yx(t)}else n===27?(n=Qt,Wa(t.type)?(t=id,id=null,Qt=t):Qt=n):Qt=Ln?gi(t.stateNode.nextSibling):null;return!0}function xr(){Qt=Ln=null,At=!1}function Ou(){var t=Da;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Da=null),t}function so(t){Da===null?Da=[t]:Da.push(t)}var Pu=P(null),gr=null,Qi=null;function La(t,n,r){Se(Pu,n._currentValue),n._currentValue=r}function Ji(t){t._currentValue=Pu.current,ae(Pu)}function Bu(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function zu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var _=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),Bu(d.return,r,t),o||(_=null);break e}d=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=r,d=_.alternate,d!==null&&(d.lanes|=r),Bu(_,r,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Jr(t,n,r,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;Qn(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===le.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&zu(n,t,r,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){gr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Qp(gr,t)}function Tl(t,n){return gr===null&&vr(t),Qp(t,n)}function Qp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return r}var V_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},k_=a.unstable_scheduleCallback,X_=a.unstable_NormalPriority,dn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new V_,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&k_(X_,function(){t.controller.abort()})}var lo=null,Iu=0,$r=0,es=null;function W_(t,n){if(lo===null){var r=lo=[];Iu=0,$r=kf(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Iu++,n.then(Jp,Jp),n}function Jp(){if(--Iu===0&&lo!==null){es!==null&&(es.status="fulfilled");var t=lo;lo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function q_(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var $p=N.S;N.S=function(t,n){B0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&W_(t,n),$p!==null&&$p(t,n)};var _r=P(null);function Hu(){var t=_r.current;return t!==null?t:jt.pooledCache}function Al(t,n){n===null?Se(_r,_r.current):Se(_r,n.pool)}function em(){var t=Hu();return t===null?null:{parent:dn._currentValue,pool:t}}var ts=Error(s(460)),Gu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Yi,Yi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t}throw yr=n,ts}}function Sr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(yr=r,ts):r}}var yr=null;function im(){if(yr===null)throw Error(s(459));var t=yr;return yr=null,t}function am(t){if(t===ts||t===Rl)throw Error(s(483))}var ns=null,co=0;function wl(t){var n=co;return co+=1,ns===null&&(ns=[]),nm(ns,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){function n(q,k){if(t){var Z=q.deletions;Z===null?(q.deletions=[k],q.flags|=16):Z.push(k)}}function r(q,k){if(!t)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Zi(q,k),q.index=0,q.sibling=null,q}function d(q,k,Z){return q.index=Z,t?(Z=q.alternate,Z!==null?(Z=Z.index,Z<k?(q.flags|=67108866,k):Z):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function _(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,k,Z,de){return k===null||k.tag!==6?(k=wu(Z,q.mode,de),k.return=q,k):(k=u(k,Z),k.return=q,k)}function F(q,k,Z,de){var $e=Z.type;return $e===T?fe(q,k,Z.props.children,de,Z.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ee&&Sr($e)===k.type)?(k=u(k,Z.props),uo(k,Z),k.return=q,k):(k=bl(Z.type,Z.key,Z.props,null,q.mode,de),uo(k,Z),k.return=q,k)}function Q(q,k,Z,de){return k===null||k.tag!==4||k.stateNode.containerInfo!==Z.containerInfo||k.stateNode.implementation!==Z.implementation?(k=Du(Z,q.mode,de),k.return=q,k):(k=u(k,Z.children||[]),k.return=q,k)}function fe(q,k,Z,de,$e){return k===null||k.tag!==7?(k=mr(Z,q.mode,de,$e),k.return=q,k):(k=u(k,Z),k.return=q,k)}function ge(q,k,Z){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wu(""+k,q.mode,Z),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return Z=bl(k.type,k.key,k.props,null,q.mode,Z),uo(Z,k),Z.return=q,Z;case M:return k=Du(k,q.mode,Z),k.return=q,k;case ee:return k=Sr(k),ge(q,k,Z)}if(J(k)||te(k))return k=mr(k,q.mode,Z,null),k.return=q,k;if(typeof k.then=="function")return ge(q,wl(k),Z);if(k.$$typeof===U)return ge(q,Tl(q,k),Z);Dl(q,k)}return null}function ne(q,k,Z,de){var $e=k!==null?k.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return $e!==null?null:A(q,k,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return Z.key===$e?F(q,k,Z,de):null;case M:return Z.key===$e?Q(q,k,Z,de):null;case ee:return Z=Sr(Z),ne(q,k,Z,de)}if(J(Z)||te(Z))return $e!==null?null:fe(q,k,Z,de,null);if(typeof Z.then=="function")return ne(q,k,wl(Z),de);if(Z.$$typeof===U)return ne(q,k,Tl(q,Z),de);Dl(q,Z)}return null}function se(q,k,Z,de,$e){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return q=q.get(Z)||null,A(k,q,""+de,$e);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case y:return q=q.get(de.key===null?Z:de.key)||null,F(k,q,de,$e);case M:return q=q.get(de.key===null?Z:de.key)||null,Q(k,q,de,$e);case ee:return de=Sr(de),se(q,k,Z,de,$e)}if(J(de)||te(de))return q=q.get(Z)||null,fe(k,q,de,$e,null);if(typeof de.then=="function")return se(q,k,Z,wl(de),$e);if(de.$$typeof===U)return se(q,k,Z,Tl(k,de),$e);Dl(k,de)}return null}function Xe(q,k,Z,de){for(var $e=null,Lt=null,qe=k,pt=k=0,Mt=null;qe!==null&&pt<Z.length;pt++){qe.index>pt?(Mt=qe,qe=null):Mt=qe.sibling;var Nt=ne(q,qe,Z[pt],de);if(Nt===null){qe===null&&(qe=Mt);break}t&&qe&&Nt.alternate===null&&n(q,qe),k=d(Nt,k,pt),Lt===null?$e=Nt:Lt.sibling=Nt,Lt=Nt,qe=Mt}if(pt===Z.length)return r(q,qe),At&&Ki(q,pt),$e;if(qe===null){for(;pt<Z.length;pt++)qe=ge(q,Z[pt],de),qe!==null&&(k=d(qe,k,pt),Lt===null?$e=qe:Lt.sibling=qe,Lt=qe);return At&&Ki(q,pt),$e}for(qe=o(qe);pt<Z.length;pt++)Mt=se(qe,q,pt,Z[pt],de),Mt!==null&&(t&&Mt.alternate!==null&&qe.delete(Mt.key===null?pt:Mt.key),k=d(Mt,k,pt),Lt===null?$e=Mt:Lt.sibling=Mt,Lt=Mt);return t&&qe.forEach(function(Ka){return n(q,Ka)}),At&&Ki(q,pt),$e}function it(q,k,Z,de){if(Z==null)throw Error(s(151));for(var $e=null,Lt=null,qe=k,pt=k=0,Mt=null,Nt=Z.next();qe!==null&&!Nt.done;pt++,Nt=Z.next()){qe.index>pt?(Mt=qe,qe=null):Mt=qe.sibling;var Ka=ne(q,qe,Nt.value,de);if(Ka===null){qe===null&&(qe=Mt);break}t&&qe&&Ka.alternate===null&&n(q,qe),k=d(Ka,k,pt),Lt===null?$e=Ka:Lt.sibling=Ka,Lt=Ka,qe=Mt}if(Nt.done)return r(q,qe),At&&Ki(q,pt),$e;if(qe===null){for(;!Nt.done;pt++,Nt=Z.next())Nt=ge(q,Nt.value,de),Nt!==null&&(k=d(Nt,k,pt),Lt===null?$e=Nt:Lt.sibling=Nt,Lt=Nt);return At&&Ki(q,pt),$e}for(qe=o(qe);!Nt.done;pt++,Nt=Z.next())Nt=se(qe,q,pt,Nt.value,de),Nt!==null&&(t&&Nt.alternate!==null&&qe.delete(Nt.key===null?pt:Nt.key),k=d(Nt,k,pt),Lt===null?$e=Nt:Lt.sibling=Nt,Lt=Nt);return t&&qe.forEach(function(iy){return n(q,iy)}),At&&Ki(q,pt),$e}function Wt(q,k,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===T&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:e:{for(var $e=Z.key;k!==null;){if(k.key===$e){if($e=Z.type,$e===T){if(k.tag===7){r(q,k.sibling),de=u(k,Z.props.children),de.return=q,q=de;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ee&&Sr($e)===k.type){r(q,k.sibling),de=u(k,Z.props),uo(de,Z),de.return=q,q=de;break e}r(q,k);break}else n(q,k);k=k.sibling}Z.type===T?(de=mr(Z.props.children,q.mode,de,Z.key),de.return=q,q=de):(de=bl(Z.type,Z.key,Z.props,null,q.mode,de),uo(de,Z),de.return=q,q=de)}return _(q);case M:e:{for($e=Z.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===Z.containerInfo&&k.stateNode.implementation===Z.implementation){r(q,k.sibling),de=u(k,Z.children||[]),de.return=q,q=de;break e}else{r(q,k);break}else n(q,k);k=k.sibling}de=Du(Z,q.mode,de),de.return=q,q=de}return _(q);case ee:return Z=Sr(Z),Wt(q,k,Z,de)}if(J(Z))return Xe(q,k,Z,de);if(te(Z)){if($e=te(Z),typeof $e!="function")throw Error(s(150));return Z=$e.call(Z),it(q,k,Z,de)}if(typeof Z.then=="function")return Wt(q,k,wl(Z),de);if(Z.$$typeof===U)return Wt(q,k,Tl(q,Z),de);Dl(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,k!==null&&k.tag===6?(r(q,k.sibling),de=u(k,Z),de.return=q,q=de):(r(q,k),de=wu(Z,q.mode,de),de.return=q,q=de),_(q)):r(q,k)}return function(q,k,Z,de){try{co=0;var $e=Wt(q,k,Z,de);return ns=null,$e}catch(qe){if(qe===ts||qe===Rl)throw qe;var Lt=Jn(29,qe,null,q.mode);return Lt.lanes=de,Lt.return=q,Lt}finally{}}}var br=rm(!0),sm=rm(!1),Na=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),kp(t,null,r),n}return Sl(t,o,n,r),yl(t)}function fo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ws(t,r)}}function Xu(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var _={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=_:d=d.next=_,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Wu=!1;function ho(){if(Wu){var t=es;if(t!==null)throw t}}function po(t,n,r,o){Wu=!1;var u=t.updateQueue;Na=!1;var d=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,Q=F.next;F.next=null,_===null?d=Q:_.next=Q,_=F;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,A=fe.lastBaseUpdate,A!==_&&(A===null?fe.firstBaseUpdate=Q:A.next=Q,fe.lastBaseUpdate=F))}if(d!==null){var ge=u.baseState;_=0,fe=Q=F=null,A=d;do{var ne=A.lane&-536870913,se=ne!==A.lane;if(se?(bt&ne)===ne:(o&ne)===ne){ne!==0&&ne===$r&&(Wu=!0),fe!==null&&(fe=fe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,it=A;ne=n;var Wt=r;switch(it.tag){case 1:if(Xe=it.payload,typeof Xe=="function"){ge=Xe.call(Wt,ge,ne);break e}ge=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=it.payload,ne=typeof Xe=="function"?Xe.call(Wt,ge,ne):Xe,ne==null)break e;ge=g({},ge,ne);break e;case 2:Na=!0}}ne=A.callback,ne!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ne]:se.push(ne))}else se={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},fe===null?(Q=fe=se,F=ge):fe=fe.next=se,_|=ne;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;se=A,A=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);fe===null&&(F=ge),u.baseState=F,u.firstBaseUpdate=Q,u.lastBaseUpdate=fe,d===null&&(u.shared.lanes=0),Ha|=_,t.lanes=_,t.memoizedState=ge}}function om(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function lm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)om(r[t],n)}var is=P(null),Ul=P(0);function cm(t,n){t=oa,Se(Ul,t),Se(is,n),oa=t|n.baseLanes}function qu(){Se(Ul,oa),Se(is,is.current)}function Yu(){oa=Ul.current,ae(is),ae(Ul)}var $n=P(null),xi=null;function Ba(t){var n=t.alternate;Se(rn,rn.current&1),Se($n,t),xi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(xi=t)}function ju(t){Se(rn,rn.current),Se($n,t),xi===null&&(xi=t)}function um(t){t.tag===22?(Se(rn,rn.current),Se($n,t),xi===null&&(xi=t)):za()}function za(){Se(rn,rn.current),Se($n,$n.current)}function ei(t){ae($n),xi===t&&(xi=null),ae(rn)}var rn=P(0);function Ll(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||td(r)||nd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ft=null,kt=null,hn=null,Nl=!1,as=!1,Mr=!1,Ol=0,mo=0,rs=null,Y_=0;function nn(){throw Error(s(321))}function Zu(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Qn(t[r],n[r]))return!1;return!0}function Ku(t,n,r,o,u,d){return $i=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Ym:df,Mr=!1,d=r(o,u),Mr=!1,as&&(d=dm(n,r,o,u)),fm(t),d}function fm(t){N.H=vo;var n=kt!==null&&kt.next!==null;if($i=0,hn=kt=ft=null,Nl=!1,mo=0,rs=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&El(t)&&(pn=!0))}function dm(t,n,r,o){ft=t;var u=0;do{if(as&&(rs=null),mo=0,as=!1,25<=u)throw Error(s(301));if(u+=1,hn=kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=jm,d=n(r,o)}while(as);return d}function j_(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Qu(){var t=Ol!==0;return Ol=0,t}function Ju(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function $u(t){if(Nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Nl=!1}$i=0,hn=kt=ft=null,as=!1,mo=Ol=0,rs=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ft.memoizedState=hn=t:hn=hn.next=t,hn}function sn(){if(kt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=hn===null?ft.memoizedState:hn.next;if(n!==null)hn=n,kt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},hn===null?ft.memoizedState=hn=t:hn=hn.next=t}return hn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=mo;return mo+=1,rs===null&&(rs=[]),t=nm(rs,t,n),n=ft,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Ym:df),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===U)return Nn(t)}throw Error(s(438,String(t)))}function ef(t){var n=null,r=ft.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Pl(),ft.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=C;return n.index++,r}function ea(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=sn();return tf(n,kt,t)}function tf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var _=u.next;u.next=d.next,d.next=_}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=_=null,F=null,Q=n,fe=!1;do{var ge=Q.lane&-536870913;if(ge!==Q.lane?(bt&ge)===ge:($i&ge)===ge){var ne=Q.revertLane;if(ne===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ge===$r&&(fe=!0);else if(($i&ne)===ne){Q=Q.next,ne===$r&&(fe=!0);continue}else ge={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(A=F=ge,_=d):F=F.next=ge,ft.lanes|=ne,Ha|=ne;ge=Q.action,Mr&&r(d,ge),d=Q.hasEagerState?Q.eagerState:r(d,ge)}else ne={lane:ge,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(A=F=ne,_=d):F=F.next=ne,ft.lanes|=ge,Ha|=ge;Q=Q.next}while(Q!==null&&Q!==n);if(F===null?_=d:F.next=A,!Qn(d,t.memoizedState)&&(pn=!0,fe&&(r=es,r!==null)))throw r;t.memoizedState=d,t.baseState=_,t.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nf(t){var n=sn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var _=u=u.next;do d=t(d,_.action),_=_.next;while(_!==u);Qn(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function hm(t,n,r){var o=ft,u=sn(),d=At;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=n();var _=!Qn((kt||u).memoizedState,r);if(_&&(u.memoizedState=r,pn=!0),u=u.queue,sf(xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},mm.bind(null,o,u,r,n),null),jt===null)throw Error(s(349));d||($i&127)!==0||pm(o,n,r)}return r}function pm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ft.updateQueue,n===null?(n=Pl(),ft.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function mm(t,n,r,o){n.value=r,n.getSnapshot=o,gm(n)&&vm(t)}function xm(t,n,r){return r(function(){gm(n)&&vm(t)})}function gm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Qn(t,r)}catch{return!0}}function vm(t){var n=pr(t,2);n!==null&&Yn(n,t,2)}function af(t){var n=Hn();if(typeof t=="function"){var r=t;if(t=r(),Mr){Qe(!0);try{r()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function _m(t,n,r,o){return t.baseState=r,tf(t,kt,typeof o=="function"?o:ea)}function Z_(t,n,r,o,u){if(Hl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};N.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,Sm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function Sm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=N.T,_={};N.T=_;try{var A=r(u,o),F=N.S;F!==null&&F(_,A),ym(t,n,A)}catch(Q){rf(t,n,Q)}finally{d!==null&&_.types!==null&&(d.types=_.types),N.T=d}}else try{d=r(u,o),ym(t,n,d)}catch(Q){rf(t,n,Q)}}function ym(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){bm(t,n,o)},function(o){return rf(t,n,o)}):bm(t,n,r)}function bm(t,n,r){n.status="fulfilled",n.value=r,Mm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Sm(t,r)))}function rf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Mm(n),n=n.next;while(n!==o)}t.action=null}function Mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Em(t,n){return n}function Tm(t,n){if(At){var r=jt.formState;if(r!==null){e:{var o=ft;if(At){if(Qt){t:{for(var u=Qt,d=mi;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=gi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=r[0])}}return r=Hn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},r.queue=o,r=Xm.bind(null,ft,o),o.dispatch=r,o=af(!1),d=ff.bind(null,ft,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=Z_.bind(null,ft,u,d,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Am(t){var n=sn();return Rm(n,kt,t)}function Rm(t,n,r){if(n=tf(t,n,Em)[0],t=zl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(_){throw _===ts?Rl:_}else o=n;n=sn();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(ft.flags|=2048,ss(9,{destroy:void 0},K_.bind(null,u,r),null)),[o,d,t]}function K_(t,n){t.action=n}function Cm(t){var n=sn(),r=kt;if(r!==null)return Rm(n,r,t);sn(),n=n.memoizedState,r=sn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Pl(),ft.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function wm(){return sn().memoizedState}function Fl(t,n,r,o){var u=Hn();ft.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function Il(t,n,r,o){var u=sn();o=o===void 0?null:o;var d=u.memoizedState.inst;kt!==null&&o!==null&&Zu(o,kt.memoizedState.deps)?u.memoizedState=ss(n,d,r,o):(ft.flags|=t,u.memoizedState=ss(1|n,d,r,o))}function Dm(t,n){Fl(8390656,8,t,n)}function sf(t,n){Il(2048,8,t,n)}function Q_(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Pl(),ft.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Um(t){var n=sn().memoizedState;return Q_({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Lm(t,n){return Il(4,2,t,n)}function Nm(t,n){return Il(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pm(t,n,r){r=r!=null?r.concat([t]):null,Il(4,4,Om.bind(null,n,t),r)}function of(){}function Bm(t,n){var r=sn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Zu(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function zm(t,n){var r=sn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Zu(n,o[1]))return o[0];if(o=t(),Mr){Qe(!0);try{t()}finally{Qe(!1)}}return r.memoizedState=[o,n],o}function lf(t,n,r){return r===void 0||($i&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=F0(),ft.lanes|=t,Ha|=t,r)}function Fm(t,n,r,o){return Qn(r,n)?r:is.current!==null?(t=lf(t,r,o),Qn(t,n)||(pn=!0),t):($i&42)===0||($i&1073741824)!==0&&(bt&261930)===0?(pn=!0,t.memoizedState=r):(t=F0(),ft.lanes|=t,Ha|=t,n)}function Im(t,n,r,o,u){var d=X.p;X.p=d!==0&&8>d?d:8;var _=N.T,A={};N.T=A,ff(t,!1,n,r);try{var F=u(),Q=N.S;if(Q!==null&&Q(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var fe=q_(F,o);go(t,n,fe,ii(t))}else go(t,n,o,ii(t))}catch(ge){go(t,n,{then:function(){},status:"rejected",reason:ge},ii())}finally{X.p=d,_!==null&&A.types!==null&&(_.types=A.types),N.T=_}}function J_(){}function cf(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=Hm(t).queue;Im(t,u,n,Y,r===null?J_:function(){return Gm(t),r(o)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gm(t){var n=Hm(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},ii())}function uf(){return Nn(Oo)}function Vm(){return sn().memoizedState}function km(){return sn().memoizedState}function $_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ii();t=Oa(r);var o=Pa(n,t,r);o!==null&&(Yn(o,n,r),fo(o,n,r)),n={cache:Fu()},t.payload=n;return}n=n.return}}function eS(t,n,r){var o=ii();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hl(t)?Wm(n,r):(r=Ru(t,n,r,o),r!==null&&(Yn(r,t,o),qm(r,n,o)))}function Xm(t,n,r){var o=ii();go(t,n,r,o)}function go(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))Wm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,A=d(_,r);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,_))return Sl(t,n,u,0),jt===null&&_l(),!1}catch{}finally{}if(r=Ru(t,n,u,o),r!==null)return Yn(r,t,o),qm(r,n,o),!0}return!1}function ff(t,n,r,o){if(o={lane:2,revertLane:kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(s(479))}else n=Ru(t,r,o,2),n!==null&&Yn(n,t,2)}function Hl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Wm(t,n){as=Nl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function qm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ws(t,r)}}var vo={readContext:Nn,use:Bl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};vo.useEffectEvent=nn;var Ym={readContext:Nn,use:Bl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:Dm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Fl(4194308,4,Om.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var r=Hn();n=n===void 0?null:n;var o=t();if(Mr){Qe(!0);try{t()}finally{Qe(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Hn();if(r!==void 0){var u=r(n);if(Mr){Qe(!0);try{r(n)}finally{Qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=eS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,r=Xm.bind(null,ft,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:of,useDeferredValue:function(t,n){var r=Hn();return lf(r,t,n)},useTransition:function(){var t=af(!1);return t=Im.bind(null,ft,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ft,u=Hn();if(At){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),jt===null)throw Error(s(349));(bt&127)!==0||pm(o,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,Dm(xm.bind(null,o,d,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},mm.bind(null,o,d,r,n),null),r},useId:function(){var t=Hn(),n=jt.identifierPrefix;if(At){var r=Bi,o=Pi;r=(o&~(1<<32-We(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Ol++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Y_++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=ff.bind(null,ft,!0,r),r.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return Hn().memoizedState=$_.bind(null,ft)},useEffectEvent:function(t){var n=Hn(),r={impl:t};return n.memoizedState=r,function(){if((zt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},df={readContext:Nn,use:Bl,useCallback:Bm,useContext:Nn,useEffect:sf,useImperativeHandle:Pm,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:zm,useReducer:zl,useRef:wm,useState:function(){return zl(ea)},useDebugValue:of,useDeferredValue:function(t,n){var r=sn();return Fm(r,kt.memoizedState,t,n)},useTransition:function(){var t=zl(ea)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:uf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var r=sn();return _m(r,kt,t,n)},useMemoCache:ef,useCacheRefresh:km};df.useEffectEvent=Um;var jm={readContext:Nn,use:Bl,useCallback:Bm,useContext:Nn,useEffect:sf,useImperativeHandle:Pm,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:zm,useReducer:nf,useRef:wm,useState:function(){return nf(ea)},useDebugValue:of,useDeferredValue:function(t,n){var r=sn();return kt===null?lf(r,t,n):Fm(r,kt.memoizedState,t,n)},useTransition:function(){var t=nf(ea)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:uf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var r=sn();return kt!==null?_m(r,kt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:ef,useCacheRefresh:km};jm.useEffectEvent=Um;function hf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var pf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ii(),u=Oa(o);u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(Yn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ii(),u=Oa(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(Yn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ii(),o=Oa(r);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,r),n!==null&&(Yn(n,t,r),fo(n,t,r))}};function Zm(t,n,r,o,u,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!io(r,o)||!io(u,d):!0}function Km(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function Er(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function Qm(t){vl(t)}function Jm(t){console.error(t)}function $m(t){vl(t)}function Gl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function e0(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,r){return r=Oa(r),r.tag=3,r.payload={element:null},r.callback=function(){Gl(t,n)},r}function t0(t){return t=Oa(t),t.tag=3,t}function n0(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){e0(n,r,o)}}var _=r.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){e0(n,r,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function tS(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Jr(n,r,u,!0),r=$n.current,r!==null){switch(r.tag){case 31:case 13:return xi===null?$l():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Cl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Hf(t,o,u)),!1;case 22:return r.flags|=65536,o===Cl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Hf(t,o,u)),!1}throw Error(s(435,r.tag))}return Hf(t,o,u),$l(),!1}if(At)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Nu&&(t=Error(s(422),{cause:o}),so(di(t,r)))):(o!==Nu&&(n=Error(s(423),{cause:o}),so(di(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,r),u=mf(t.stateNode,o,u),Xu(t,u),an!==4&&(an=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,r),Ao===null?Ao=[d]:Ao.push(d),an!==4&&(an=2),n===null)return!0;o=di(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=mf(r.stateNode,o,t),Xu(r,t),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=t0(u),n0(u,t,r,o),Xu(r,u),!1}r=r.return}while(r!==null);return!1}var xf=Error(s(461)),pn=!1;function On(t,n,r,o){n.child=t===null?sm(n,null,r,o):br(n,t.child,r,o)}function i0(t,n,r,o,u){r=r.render;var d=n.ref;if("ref"in o){var _={};for(var A in o)A!=="ref"&&(_[A]=o[A])}else _=o;return vr(n),o=Ku(t,n,r,_,d,u),A=Qu(),t!==null&&!pn?(Ju(t,n,u),ta(t,n,u)):(At&&A&&Uu(n),n.flags|=1,On(t,n,o,u),n.child)}function a0(t,n,r,o,u){if(t===null){var d=r.type;return typeof d=="function"&&!Cu(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,r0(t,n,d,o,u)):(t=bl(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Ef(t,u)){var _=d.memoizedProps;if(r=r.compare,r=r!==null?r:io,r(_,o)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(d,o),t.ref=n.ref,t.return=n,n.child=t}function r0(t,n,r,o,u){if(t!==null){var d=t.memoizedProps;if(io(d,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=d,Ef(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ta(t,n,u)}return gf(t,n,r,o,u)}function s0(t,n,r,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return o0(t,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,d!==null?d.cachePool:null),d!==null?cm(n,d):qu(),um(n);else return o=n.lanes=536870912,o0(t,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(Al(n,d.cachePool),cm(n,d),za(),n.memoizedState=null):(t!==null&&Al(n,null),qu(),za());return On(t,n,u,r),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o0(t,n,r,o,u){var d=Hu();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},t!==null&&Al(n,null),qu(),um(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function Vl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l0(t,n,r){return br(n,t.child,null,r),t=Vl(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function nS(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Vl(n,o),n.lanes=536870912,_o(null,t);if(ju(n),(t=Qt)?(t=Sx(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},r=Wp(t),r.return=n,n.child=r,Ln=n,Qt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Vl(n,o)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=l0(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Jr(t,n,r,!1),u=(r&t.childLanes)!==0,pn||u){if(o=jt,o!==null&&(_=qs(o,r),_!==0&&_!==d.retryLane))throw d.retryLane=_,pr(t,_),Yn(o,t,_),xf;$l(),n=l0(t,n,r)}else t=d.treeContext,Qt=gi(_.nextSibling),Ln=n,At=!0,Da=null,mi=!1,t!==null&&jp(n,t),n=Vl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function kl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function gf(t,n,r,o,u){return vr(n),r=Ku(t,n,r,o,void 0,u),o=Qu(),t!==null&&!pn?(Ju(t,n,u),ta(t,n,u)):(At&&o&&Uu(n),n.flags|=1,On(t,n,r,u),n.child)}function c0(t,n,r,o,u,d){return vr(n),n.updateQueue=null,r=dm(n,o,r,u),fm(t),o=Qu(),t!==null&&!pn?(Ju(t,n,d),ta(t,n,d)):(At&&o&&Uu(n),n.flags|=1,On(t,n,r,d),n.child)}function u0(t,n,r,o,u){if(vr(n),n.stateNode===null){var d=jr,_=r.contextType;typeof _=="object"&&_!==null&&(d=Nn(_)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Vu(n),_=r.contextType,d.context=typeof _=="object"&&_!==null?Nn(_):jr,d.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(hf(n,r,_,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&pf.enqueueReplaceState(d,d.state,null),po(n,o,d,u),ho(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,F=Er(r,A);d.props=F;var Q=d.context,fe=r.contextType;_=jr,typeof fe=="object"&&fe!==null&&(_=Nn(fe));var ge=r.getDerivedStateFromProps;fe=typeof ge=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,fe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||Q!==_)&&Km(n,d,o,_),Na=!1;var ne=n.memoizedState;d.state=ne,po(n,o,d,u),ho(),Q=n.memoizedState,A||ne!==Q||Na?(typeof ge=="function"&&(hf(n,r,ge,o),Q=n.memoizedState),(F=Na||Zm(n,r,F,o,ne,Q,_))?(fe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),d.props=o,d.state=Q,d.context=_,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ku(t,n),_=n.memoizedProps,fe=Er(r,_),d.props=fe,ge=n.pendingProps,ne=d.context,Q=r.contextType,F=jr,typeof Q=="object"&&Q!==null&&(F=Nn(Q)),A=r.getDerivedStateFromProps,(Q=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==ge||ne!==F)&&Km(n,d,o,F),Na=!1,ne=n.memoizedState,d.state=ne,po(n,o,d,u),ho();var se=n.memoizedState;_!==ge||ne!==se||Na||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof A=="function"&&(hf(n,r,A,o),se=n.memoizedState),(fe=Na||Zm(n,r,fe,o,ne,se,F)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,se,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,se,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=F,o=fe):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,r,u)):On(t,n,r,u),n.memoizedState=d.state,t=n.child):t=ta(t,n,u),t}function f0(t,n,r,o){return xr(),n.flags|=256,On(t,n,r,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(t){return{baseLanes:t,cachePool:em()}}function Sf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ni),t}function d0(t,n,r){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ba(n):za(),(t=Qt)?(t=Sx(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},r=Wp(t),r.return=n,n.child=r,Ln=n,Qt=null)):t=null,t===null)throw Ua(n);return nd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(za(),u=n.mode,A=Xl({mode:"hidden",children:A},u),o=mr(o,u,r,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=_f(r),o.childLanes=Sf(t,_,r),n.memoizedState=vf,_o(null,o)):(Ba(n),yf(n,A))}var F=t.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(d)n.flags&256?(Ba(n),n.flags&=-257,n=bf(t,n,r)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),A=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),A=mr(A,u,r,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,br(n,t.child,null,r),o=n.child,o.memoizedState=_f(r),o.childLanes=Sf(t,_,r),n.memoizedState=vf,n=_o(null,o));else if(Ba(n),nd(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var Q=_.dgst;_=Q,o=Error(s(419)),o.stack="",o.digest=_,so({value:o,source:null,stack:null}),n=bf(t,n,r)}else if(pn||Jr(t,n,r,!1),_=(r&t.childLanes)!==0,pn||_){if(_=jt,_!==null&&(o=qs(_,r),o!==0&&o!==F.retryLane))throw F.retryLane=o,pr(t,o),Yn(_,t,o),xf;td(A)||$l(),n=bf(t,n,r)}else td(A)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Qt=gi(A.nextSibling),Ln=n,At=!0,Da=null,mi=!1,t!==null&&jp(n,t),n=yf(n,o.children),n.flags|=4096);return n}return u?(za(),A=o.fallback,u=n.mode,F=t.child,Q=F.sibling,o=Zi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,Q!==null?A=Zi(Q,A):(A=mr(A,u,r,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,_o(null,o),o=n.child,A=t.child.memoizedState,A===null?A=_f(r):(u=A.cachePool,u!==null?(F=dn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=em(),A={baseLanes:A.baseLanes|r,cachePool:u}),o.memoizedState=A,o.childLanes=Sf(t,_,r),n.memoizedState=vf,_o(t.child,o)):(Ba(n),r=t.child,t=r.sibling,r=Zi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=r,n.memoizedState=null,r)}function yf(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function bf(t,n,r){return br(n,t.child,null,r),t=yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function h0(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Bu(t.return,n,r)}function Mf(t,n,r,o,u,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=r,_.tailMode=u,_.treeForkCount=d)}function p0(t,n,r){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var _=rn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,Se(rn,_),On(t,n,o,r),o=At?ro:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,r,n);else if(t.tag===19)h0(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Ll(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Mf(n,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ll(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Mf(n,!0,r,null,d,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Jr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Zi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Zi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function iS(t,n,r){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),La(n,dn,t.memoizedState.cache),xr();break;case 27:case 5:ke(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(r&n.child.childLanes)!==0?d0(t,n,r):(Ba(n),t=ta(t,n,r),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Jr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return p0(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(rn,rn.current),o)break;return null;case 22:return n.lanes=0,s0(t,n,r,n.pendingProps);case 24:La(n,dn,t.memoizedState.cache)}return ta(t,n,r)}function m0(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Ef(t,r)&&(n.flags&128)===0)return pn=!1,iS(t,n,r);pn=(t.flags&131072)!==0}else pn=!1,At&&(n.flags&1048576)!==0&&Yp(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Sr(n.elementType),n.type=t,typeof t=="function")Cu(t)?(o=Er(t,o),n.tag=1,n=u0(null,n,t,o,r)):(n.tag=0,n=gf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=i0(null,n,t,o,r);break e}else if(u===z){n.tag=14,n=a0(null,n,t,o,r);break e}}throw n=he(t)||t,Error(s(306,n,""))}}return n;case 0:return gf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Er(o,n.pendingProps),u0(t,n,o,u,r);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ku(t,n),po(n,o,null,r);var _=n.memoizedState;if(o=_.cache,La(n,dn,o),o!==d.cache&&zu(n,[dn],r,!0),ho(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=f0(t,n,o,r);break e}else if(o!==u){u=di(Error(s(424)),n),so(u),n=f0(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=gi(t.firstChild),Ln=n,At=!0,Da=null,mi=!0,r=sm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(xr(),o===u){n=ta(t,n,r);break e}On(t,n,o,r)}n=n.child}return n;case 26:return kl(t,n),t===null?(r=Ax(n.type,null,n.pendingProps,null))?n.memoizedState=r:At||(r=n.type,t=n.pendingProps,o=sc(ie.current).createElement(r),o[fn]=n,o[gn]=t,Pn(o,r,t),$(o),n.stateNode=o):n.memoizedState=Ax(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ke(n),t===null&&At&&(o=n.stateNode=Mx(n.type,n.pendingProps,ie.current),Ln=n,mi=!0,u=Qt,Wa(n.type)?(id=u,Qt=gi(o.firstChild)):Qt=u),On(t,n,n.pendingProps.children,r),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Qt)&&(o=NS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Ln=n,Qt=gi(o.firstChild),mi=!1,u=!0):u=!1),u||Ua(n)),ke(n),u=n.type,d=n.pendingProps,_=t!==null?t.memoizedProps:null,o=d.children,Jf(u,d)?o=null:_!==null&&Jf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,j_,null,null,r),Oo._currentValue=u),kl(t,n),On(t,n,o,r),n.child;case 6:return t===null&&At&&((t=r=Qt)&&(r=OS(r,n.pendingProps,mi),r!==null?(n.stateNode=r,Ln=n,Qt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return d0(t,n,r);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,r):On(t,n,o,r),n.child;case 11:return i0(t,n,n.type,n.pendingProps,r);case 7:return On(t,n,n.pendingProps,r),n.child;case 8:return On(t,n,n.pendingProps.children,r),n.child;case 12:return On(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),On(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vr(n),u=Nn(u),o=o(u),n.flags|=1,On(t,n,o,r),n.child;case 14:return a0(t,n,n.type,n.pendingProps,r);case 15:return r0(t,n,n.type,n.pendingProps,r);case 19:return p0(t,n,r);case 31:return nS(t,n,r);case 22:return s0(t,n,r,n.pendingProps);case 24:return vr(n),o=Nn(dn),t===null?(u=Hu(),u===null&&(u=jt,d=Fu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:o,cache:u},Vu(n),La(n,dn,u)):((t.lanes&r)!==0&&(ku(t,n),po(n,null,null,r),ho()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,dn,o)):(o=d.cache,La(n,dn,o),o!==u.cache&&zu(n,[dn],r,!0))),On(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function Tf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(V0())t.flags|=8192;else throw yr=Cl,Gu}else t.flags&=-16777217}function x0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ux(n))if(V0())t.flags|=8192;else throw yr=Cl,Gu}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vt():536870912,t.lanes|=n,us|=n)}function So(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function aS(t,n,r){var o=n.pendingProps;switch(Lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(dn),Pe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),Jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(na(n),d!==null?(Jt(n),x0(n,d)):(Jt(n),Tf(n,u,null,o,r))):d?d!==t.memoizedState?(na(n),Jt(n),x0(n,d)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Jt(n),Tf(n,u,t,o,r)),null;case 27:if(lt(n),r=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}t=Ae.current,Qr(n)?Zp(n):(t=Mx(u,o,r),n.stateNode=t,na(n))}return Jt(n),null;case 5:if(lt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}if(d=Ae.current,Qr(n))Zp(n);else{var _=sc(ie.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}d[fn]=n,d[gn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=d;e:switch(Pn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Jt(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||dx(t.nodeValue,r)),t||Ua(n,!0)}else t=sc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Jt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else r=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Wl(n,n.updateQueue),Jt(n),null);case 4:return Pe(),t===null&&Yf(n.stateNode.containerInfo),Jt(n),null;case 10:return Ji(n.type),Jt(n),null;case 19:if(ae(rn),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)So(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ll(t),d!==null){for(n.flags|=128,So(o,!1),t=d.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Xp(r,t),r=r.sibling;return Se(rn,rn.current&1|2),At&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Kl&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ll(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return Jt(n),null}else 2*E()-o.renderingStartTime>Kl&&r!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,r=rn.current,Se(rn,u?r&1|2:r&1),At&&Ki(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ei(n),Yu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),r=n.updateQueue,r!==null&&Wl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ae(_r),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(dn),Jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function rS(t,n){switch(Lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(dn),Pe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ae(rn),null;case 4:return Pe(),null;case 10:return Ji(n.type),null;case 22:case 23:return ei(n),Yu(),t!==null&&ae(_r),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(dn),null;case 25:return null;default:return null}}function g0(t,n){switch(Lu(n),n.tag){case 3:Ji(dn),Pe();break;case 26:case 27:case 5:lt(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:ae(rn);break;case 10:Ji(n.type);break;case 22:case 23:ei(n),Yu(),t!==null&&ae(_r);break;case 24:Ji(dn)}}function yo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var d=r.create,_=r.inst;o=d(),_.destroy=o}r=r.next}while(r!==u)}}catch(A){Gt(n,n.return,A)}}function Fa(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var _=o.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var F=r,Q=A;try{Q()}catch(fe){Gt(u,F,fe)}}}o=o.next}while(o!==d)}}catch(fe){Gt(n,n.return,fe)}}function v0(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{lm(n,r)}catch(o){Gt(t,t.return,o)}}}function _0(t,n,r){r.props=Er(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Gt(t,n,o)}}function bo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Gt(t,n,u)}}function zi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Gt(t,n,u)}else r.current=null}function S0(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Gt(t,t.return,u)}}function Af(t,n,r){try{var o=t.stateNode;RS(o,t.type,r,n),o[gn]=n}catch(u){Gt(t,t.return,u)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Wa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Cf(t,n,r),t=t.sibling;t!==null;)Cf(t,n,r),t=t.sibling}function ql(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(ql(t,n,r),t=t.sibling;t!==null;)ql(t,n,r),t=t.sibling}function b0(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,o,r),n[fn]=t,n[gn]=r}catch(d){Gt(t,t.return,d)}}var ia=!1,mn=!1,wf=!1,M0=typeof WeakSet=="function"?WeakSet:Set,An=null;function sS(t,n){if(t=t.containerInfo,Kf=hc,t=Pp(t),yu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var _=0,A=-1,F=-1,Q=0,fe=0,ge=t,ne=null;t:for(;;){for(var se;ge!==r||u!==0&&ge.nodeType!==3||(A=_+u),ge!==d||o!==0&&ge.nodeType!==3||(F=_+o),ge.nodeType===3&&(_+=ge.nodeValue.length),(se=ge.firstChild)!==null;)ne=ge,ge=se;for(;;){if(ge===t)break t;if(ne===r&&++Q===u&&(A=_),ne===d&&++fe===o&&(F=_),(se=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=se}r=A===-1||F===-1?null:{start:A,end:F}}else r=null}r=r||{start:0,end:0}}else r=null;for(Qf={focusedElem:t,selectionRange:r},hc=!1,An=n;An!==null;)if(n=An,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,An=t;else for(;An!==null;){switch(n=An,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var Xe=Er(r.type,u);t=o.getSnapshotBeforeUpdate(Xe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Gt(r,r.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)ed(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,An=t;break}An=n.return}}function E0(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ra(t,r),o&4&&yo(5,r);break;case 1:if(ra(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(_){Gt(r,r.return,_)}else{var u=Er(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Gt(r,r.return,_)}}o&64&&v0(r),o&512&&bo(r,r.return);break;case 3:if(ra(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{lm(t,n)}catch(_){Gt(r,r.return,_)}}break;case 27:n===null&&o&4&&b0(r);case 26:case 5:ra(t,r),n===null&&o&4&&S0(r),o&512&&bo(r,r.return);break;case 12:ra(t,r);break;case 31:ra(t,r),o&4&&R0(t,r);break;case 13:ra(t,r),o&4&&C0(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=mS.bind(null,r),PS(t,r))));break;case 22:if(o=r.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||mn,u=ia;var d=mn;ia=o,(mn=n)&&!d?sa(t,r,(r.subtreeFlags&8772)!==0):ra(t,r),ia=u,mn=d}break;case 30:break;default:ra(t,r)}}function T0(t){var n=t.alternate;n!==null&&(t.alternate=null,T0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,kn=!1;function aa(t,n,r){for(r=r.child;r!==null;)A0(t,n,r),r=r.sibling}function A0(t,n,r){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(be,r)}catch{}switch(r.tag){case 26:mn||zi(r,n),aa(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||zi(r,n);var o=$t,u=kn;Wa(r.type)&&($t=r.stateNode,kn=!1),aa(t,n,r),Uo(r.stateNode),$t=o,kn=u;break;case 5:mn||zi(r,n);case 6:if(o=$t,u=kn,$t=null,aa(t,n,r),$t=o,kn=u,$t!==null)if(kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(r.stateNode)}catch(d){Gt(r,n,d)}else try{$t.removeChild(r.stateNode)}catch(d){Gt(r,n,d)}break;case 18:$t!==null&&(kn?(t=$t,vx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),vs(t)):vx($t,r.stateNode));break;case 4:o=$t,u=kn,$t=r.stateNode.containerInfo,kn=!0,aa(t,n,r),$t=o,kn=u;break;case 0:case 11:case 14:case 15:Fa(2,r,n),mn||Fa(4,r,n),aa(t,n,r);break;case 1:mn||(zi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&_0(r,n,o)),aa(t,n,r);break;case 21:aa(t,n,r);break;case 22:mn=(o=mn)||r.memoizedState!==null,aa(t,n,r),mn=o;break;default:aa(t,n,r)}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vs(t)}catch(r){Gt(n,n.return,r)}}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(r){Gt(n,n.return,r)}}function oS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new M0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new M0),n;default:throw Error(s(435,t.tag))}}function Yl(t,n){var r=oS(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=xS.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=t,_=n,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){$t=A.stateNode,kn=!1;break e}break;case 5:$t=A.stateNode,kn=!1;break e;case 3:case 4:$t=A.stateNode.containerInfo,kn=!0;break e}A=A.return}if($t===null)throw Error(s(160));A0(d,_,u),$t=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,t),n=n.sibling}var Ei=null;function w0(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Fa(3,t,t.return),yo(3,t),Fa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(mn||r===null||zi(r,r.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Ei;if(Xn(n,t),Wn(t),o&512&&(mn||r===null||zi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ur]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Pn(d,o,r),d[fn]=t,$(d),o=d;break e;case"link":var _=wx("link","href",u).get(o+(r.href||""));if(_){for(var A=0;A<_.length;A++)if(d=_[A],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){_.splice(A,1);break t}}d=u.createElement(o),Pn(d,o,r),u.head.appendChild(d);break;case"meta":if(_=wx("meta","content",u).get(o+(r.content||""))){for(A=0;A<_.length;A++)if(d=_[A],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){_.splice(A,1);break t}}d=u.createElement(o),Pn(d,o,r),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[fn]=t,$(d),o=d}t.stateNode=o}else Dx(u,t.type,t.stateNode);else t.stateNode=Cx(u,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?Dx(u,t.type,t.stateNode):Cx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Af(t,t.memoizedProps,r.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(mn||r===null||zi(r,r.return)),r!==null&&o&4&&Af(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(mn||r===null||zi(r,r.return)),t.flags&32){u=t.stateNode;try{Oi(u,"")}catch(Xe){Gt(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Af(t,u,r!==null?r.memoizedProps:u)),o&1024&&(wf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(cc=null,u=Ei,Ei=oc(n.containerInfo),Xn(n,t),Ei=u,Wn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}wf&&(wf=!1,D0(t));break;case 4:o=Ei,Ei=oc(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ei=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 22:u=t.memoizedState!==null;var F=r!==null&&r.memoizedState!==null,Q=ia,fe=mn;if(ia=Q||u,mn=fe||F,Xn(n,t),mn=fe,ia=Q,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||F||ia||mn||Tr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){F=r=n;try{if(d=F.stateNode,u)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=F.stateNode;var ge=F.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Xe){Gt(F,F.return,Xe)}}}else if(n.tag===6){if(r===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Xe){Gt(F,F.return,Xe)}}}else if(n.tag===18){if(r===null){F=n;try{var se=F.stateNode;u?_x(se,!0):_x(F.stateNode,!1)}catch(Xe){Gt(F,F.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Yl(t,r))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(y0(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=Rf(t);ql(t,d,u);break;case 5:var _=r.stateNode;r.flags&32&&(Oi(_,""),r.flags&=-33);var A=Rf(t);ql(t,A,_);break;case 3:case 4:var F=r.stateNode.containerInfo,Q=Rf(t);Cf(t,Q,F);break;default:throw Error(s(161))}}catch(fe){Gt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)E0(t,n.alternate,n),n=n.sibling}function Tr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Tr(n);break;case 1:zi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&_0(n,n.return,r),Tr(n);break;case 27:Uo(n.stateNode);case 26:case 5:zi(n,n.return),Tr(n);break;case 22:n.memoizedState===null&&Tr(n);break;case 30:Tr(n);break;default:Tr(n)}t=t.sibling}}function sa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:sa(u,d,r),yo(4,d);break;case 1:if(sa(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Gt(o,o.return,Q)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)om(F[u],A)}catch(Q){Gt(o,o.return,Q)}}r&&_&64&&v0(d),bo(d,d.return);break;case 27:b0(d);case 26:case 5:sa(u,d,r),r&&o===null&&_&4&&S0(d),bo(d,d.return);break;case 12:sa(u,d,r);break;case 31:sa(u,d,r),r&&_&4&&R0(u,d);break;case 13:sa(u,d,r),r&&_&4&&C0(u,d);break;case 22:d.memoizedState===null&&sa(u,d,r),bo(d,d.return);break;case 30:break;default:sa(u,d,r)}n=n.sibling}}function Df(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&oo(r))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Ti(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(t,n,r,o),n=n.sibling}function U0(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,r,o),u&2048&&yo(9,n);break;case 1:Ti(t,n,r,o);break;case 3:Ti(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){Ti(t,n,r,o),t=n.stateNode;try{var d=n.memoizedProps,_=d.id,A=d.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Gt(n,n.return,F)}}else Ti(t,n,r,o);break;case 31:Ti(t,n,r,o);break;case 13:Ti(t,n,r,o);break;case 23:break;case 22:d=n.stateNode,_=n.alternate,n.memoizedState!==null?d._visibility&2?Ti(t,n,r,o):Mo(t,n):d._visibility&2?Ti(t,n,r,o):(d._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(_,n);break;case 24:Ti(t,n,r,o),u&2048&&Uf(n.alternate,n);break;default:Ti(t,n,r,o)}}function os(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,_=n,A=r,F=o,Q=_.flags;switch(_.tag){case 0:case 11:case 15:os(d,_,A,F,u),yo(8,_);break;case 23:break;case 22:var fe=_.stateNode;_.memoizedState!==null?fe._visibility&2?os(d,_,A,F,u):Mo(d,_):(fe._visibility|=2,os(d,_,A,F,u)),u&&Q&2048&&Df(_.alternate,_);break;case 24:os(d,_,A,F,u),u&&Q&2048&&Uf(_.alternate,_);break;default:os(d,_,A,F,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(r,o),u&2048&&Df(o.alternate,o);break;case 24:Mo(r,o),u&2048&&Uf(o.alternate,o);break;default:Mo(r,o)}n=n.sibling}}var Eo=8192;function ls(t,n,r){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)L0(t,n,r),t=t.sibling}function L0(t,n,r){switch(t.tag){case 26:ls(t,n,r),t.flags&Eo&&t.memoizedState!==null&&YS(r,Ei,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,r);break;case 3:case 4:var o=Ei;Ei=oc(t.stateNode.containerInfo),ls(t,n,r),Ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,ls(t,n,r),Eo=o):ls(t,n,r));break;default:ls(t,n,r)}}function N0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];An=o,P0(o,t)}N0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(t),t=t.sibling}function O0(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):To(t);break;default:To(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];An=o,P0(o,t)}N0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),jl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function P0(t,n){for(;An!==null;){var r=An;switch(r.tag){case 0:case 11:case 15:Fa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,An=o;else e:for(r=t;An!==null;){o=An;var u=o.sibling,d=o.return;if(T0(o),o===r){An=null;break e}if(u!==null){u.return=d,An=u;break e}An=d}}}var lS={getCacheForType:function(t){var n=Nn(dn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return Nn(dn).controller.signal}},cS=typeof WeakMap=="function"?WeakMap:Map,zt=0,jt=null,St=null,bt=0,Ht=0,ti=null,Ia=!1,cs=!1,Lf=!1,oa=0,an=0,Ha=0,Ar=0,Nf=0,ni=0,us=0,Ao=null,qn=null,Of=!1,Zl=0,B0=0,Kl=1/0,Ql=null,Ga=null,_n=0,Va=null,fs=null,la=0,Pf=0,Bf=null,z0=null,Ro=0,zf=null;function ii(){return(zt&2)!==0&&bt!==0?bt&-bt:N.T!==null?kf():Ys()}function F0(){if(ni===0)if((bt&536870912)===0||At){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Yn(t,n,r){(t===jt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(ds(t,0),ka(t,bt,ni,!1)),Bn(t,r),((zt&2)===0||t!==jt)&&(t===jt&&((zt&2)===0&&(Ar|=r),an===4&&ka(t,bt,ni,!1)),Fi(t))}function I0(t,n,r){if((zt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Ge(t,n),u=o?dS(t,n):If(t,n,!0),d=o;do{if(u===0){cs&&!o&&ka(t,n,0,!1);break}else{if(r=t.current.alternate,d&&!uS(r)){u=If(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var A=t;u=Ao;var F=A.current.memoizedState.isDehydrated;if(F&&(ds(A,_).flags|=256),_=If(A,_,!1),_!==2){if(Lf&&!F){A.errorRecoveryDisabledLanes|=d,Ar|=d,u=4;break e}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=_}if(d=!1,u!==2)continue}}if(u===1){ds(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ni,!Ia);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-E(),10<u)){if(ka(o,n,ni,!Ia),ve(o,0,!0)!==0)break e;la=n,o.timeoutHandle=xx(H0.bind(null,o,r,qn,Ql,Of,n,ni,Ar,us,Ia,d,"Throttled",-0,0),u);break e}H0(o,r,qn,Ql,Of,n,ni,Ar,us,Ia,d,null,-0,0)}}break}while(!0);Fi(t)}function H0(t,n,r,o,u,d,_,A,F,Q,fe,ge,ne,se){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},L0(n,d,ge);var Xe=(d&62914560)===d?Zl-E():(d&4194048)===d?B0-E():0;if(Xe=jS(ge,Xe),Xe!==null){la=d,t.cancelPendingCommit=Xe(j0.bind(null,t,n,d,r,o,u,_,A,F,fe,ge,null,ne,se)),ka(t,d,_,!Q);return}}j0(t,n,d,r,o,u,_,A,F)}function uS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!Qn(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,r,o){n&=~Nf,n&=~Ar,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-We(u),_=1<<d;o[d]=-1,u&=~_}r!==0&&cl(t,r,n)}function Jl(){return(zt&6)===0?(Co(0),!1):!0}function Ff(){if(St!==null){if(Ht===0)var t=St.return;else t=St,Qi=gr=null,$u(t),ns=null,co=0,t=St;for(;t!==null;)g0(t.alternate,t),t=t.return;St=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,DS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),la=0,Ff(),jt=t,St=r=Zi(t.current,null),bt=n,Ht=0,ti=null,Ia=!1,cs=Ge(t,n),Lf=!1,us=ni=Nf=Ar=Ha=an=0,qn=Ao=null,Of=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-We(o),d=1<<u;n|=t[u],o&=~d}return oa=n,_l(),r}function G0(t,n){ft=null,N.H=vo,n===ts||n===Rl?(n=im(),Ht=3):n===Gu?(n=im(),Ht=4):Ht=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,St===null&&(an=1,Gl(t,di(n,t.current)))}function V0(){var t=$n.current;return t===null?!0:(bt&4194048)===bt?xi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===xi:!1}function k0(){var t=N.H;return N.H=vo,t===null?vo:t}function X0(){var t=N.A;return N.A=lS,t}function $l(){an=4,Ia||(bt&4194048)!==bt&&$n.current!==null||(cs=!0),(Ha&134217727)===0&&(Ar&134217727)===0||jt===null||ka(jt,bt,ni,!1)}function If(t,n,r){var o=zt;zt|=2;var u=k0(),d=X0();(jt!==t||bt!==n)&&(Ql=null,ds(t,n)),n=!1;var _=an;e:do try{if(Ht!==0&&St!==null){var A=St,F=ti;switch(Ht){case 8:Ff(),_=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var Q=Ht;if(Ht=0,ti=null,hs(t,A,F,Q),r&&cs){_=0;break e}break;default:Q=Ht,Ht=0,ti=null,hs(t,A,F,Q)}}fS(),_=an;break}catch(fe){G0(t,fe)}while(!0);return n&&t.shellSuspendCounter++,Qi=gr=null,zt=o,N.H=u,N.A=d,St===null&&(jt=null,bt=0,_l()),_}function fS(){for(;St!==null;)W0(St)}function dS(t,n){var r=zt;zt|=2;var o=k0(),u=X0();jt!==t||bt!==n?(Ql=null,Kl=E()+500,ds(t,n)):cs=Ge(t,n);e:do try{if(Ht!==0&&St!==null){n=St;var d=ti;t:switch(Ht){case 1:Ht=0,ti=null,hs(t,n,d,1);break;case 2:case 9:if(tm(d)){Ht=0,ti=null,q0(n);break}n=function(){Ht!==2&&Ht!==9||jt!==t||(Ht=7),Fi(t)},d.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:tm(d)?(Ht=0,ti=null,q0(n)):(Ht=0,ti=null,hs(t,n,d,7));break;case 5:var _=null;switch(St.tag){case 26:_=St.memoizedState;case 5:case 27:var A=St;if(_?Ux(_):A.stateNode.complete){Ht=0,ti=null;var F=A.sibling;if(F!==null)St=F;else{var Q=A.return;Q!==null?(St=Q,ec(Q)):St=null}break t}}Ht=0,ti=null,hs(t,n,d,5);break;case 6:Ht=0,ti=null,hs(t,n,d,6);break;case 8:Ff(),an=6;break e;default:throw Error(s(462))}}hS();break}catch(fe){G0(t,fe)}while(!0);return Qi=gr=null,N.H=o,N.A=u,zt=r,St!==null?0:(jt=null,bt=0,_l(),an)}function hS(){for(;St!==null&&!ot();)W0(St)}function W0(t){var n=m0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?ec(t):St=n}function q0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=c0(r,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=c0(r,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:$u(n);default:g0(r,n),n=St=Xp(n,oa),n=m0(r,n,oa)}t.memoizedProps=t.pendingProps,n===null?ec(t):St=n}function hs(t,n,r,o){Qi=gr=null,$u(n),ns=null,co=0;var u=n.return;try{if(tS(t,u,n,r,bt)){an=1,Gl(t,di(r,t.current)),St=null;return}}catch(d){if(u!==null)throw St=u,d;an=1,Gl(t,di(r,t.current)),St=null;return}n.flags&32768?(At||o===1?t=!0:cs||(bt&536870912)!==0?t=!1:(Ia=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),Y0(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){Y0(n,Ia);return}t=n.return;var r=aS(n.alternate,n,oa);if(r!==null){St=r;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);an===0&&(an=5)}function Y0(t,n){do{var r=rS(t.alternate,t);if(r!==null){r.flags&=32767,St=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=r}while(t!==null);an=6,St=null}function j0(t,n,r,o,u,d,_,A,F){t.cancelPendingCommit=null;do tc();while(_n!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Au,Zn(t,r,d,_,A,F),t===jt&&(St=jt=null,bt=0),fs=n,Va=t,la=r,Pf=d,Bf=u,z0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gS(ce,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=X.p,X.p=2,_=zt,zt|=4;try{sS(t,n,r)}finally{zt=_,X.p=u,N.T=o}}_n=1,Z0(),K0(),Q0()}}function Z0(){if(_n===1){_n=0;var t=Va,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var o=X.p;X.p=2;var u=zt;zt|=4;try{w0(n,t);var d=Qf,_=Pp(t.containerInfo),A=d.focusedElem,F=d.selectionRange;if(_!==A&&A&&A.ownerDocument&&Op(A.ownerDocument.documentElement,A)){if(F!==null&&yu(A)){var Q=F.start,fe=F.end;if(fe===void 0&&(fe=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(fe,A.value.length);else{var ge=A.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var se=ne.getSelection(),Xe=A.textContent.length,it=Math.min(F.start,Xe),Wt=F.end===void 0?it:Math.min(F.end,Xe);!se.extend&&it>Wt&&(_=Wt,Wt=it,it=_);var q=Np(A,it),k=Np(A,Wt);if(q&&k&&(se.rangeCount!==1||se.anchorNode!==q.node||se.anchorOffset!==q.offset||se.focusNode!==k.node||se.focusOffset!==k.offset)){var Z=ge.createRange();Z.setStart(q.node,q.offset),se.removeAllRanges(),it>Wt?(se.addRange(Z),se.extend(k.node,k.offset)):(Z.setEnd(k.node,k.offset),se.addRange(Z))}}}}for(ge=[],se=A;se=se.parentNode;)se.nodeType===1&&ge.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var de=ge[A];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}hc=!!Kf,Qf=Kf=null}finally{zt=u,X.p=o,N.T=r}}t.current=n,_n=2}}function K0(){if(_n===2){_n=0;var t=Va,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var o=X.p;X.p=2;var u=zt;zt|=4;try{E0(t,n.alternate,n)}finally{zt=u,X.p=o,N.T=r}}_n=3}}function Q0(){if(_n===4||_n===3){_n=0,L();var t=Va,n=fs,r=la,o=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,fs=Va=null,J0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),cr(r),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=X.p,X.p=2,N.T=null;try{for(var d=t.onRecoverableError,_=0;_<o.length;_++){var A=o[_];d(A.value,{componentStack:A.stack})}}finally{N.T=n,X.p=u}}(la&3)!==0&&tc(),Fi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===zf?Ro++:(Ro=0,zf=t):Ro=0,Co(0)}}function J0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function tc(){return Z0(),K0(),Q0(),$0()}function $0(){if(_n!==5)return!1;var t=Va,n=Pf;Pf=0;var r=cr(la),o=N.T,u=X.p;try{X.p=32>r?32:r,N.T=null,r=Bf,Bf=null;var d=Va,_=la;if(_n=0,fs=Va=null,la=0,(zt&6)!==0)throw Error(s(331));var A=zt;if(zt|=4,O0(d.current),U0(d,d.current,_,r),zt=A,Co(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{X.p=u,N.T=o,J0(t,n)}}function ex(t,n,r){n=di(r,n),n=mf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Bn(t,2),Fi(t))}function Gt(t,n,r){if(t.tag===3)ex(t,t,r);else for(;n!==null;){if(n.tag===3){ex(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=di(r,t),r=t0(2),o=Pa(n,r,2),o!==null&&(n0(r,o,n,t),Bn(o,2),Fi(o));break}}n=n.return}}function Hf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new cS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Lf=!0,u.add(r),t=pS.bind(null,t,n,r),n.then(t,t))}function pS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,jt===t&&(bt&r)===r&&(an===4||an===3&&(bt&62914560)===bt&&300>E()-Zl?(zt&2)===0&&ds(t,0):Nf|=r,us===bt&&(us=0)),Fi(t)}function tx(t,n){n===0&&(n=Vt()),t=pr(t,n),t!==null&&(Bn(t,n),Fi(t))}function mS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),tx(t,r)}function xS(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),tx(t,r)}function gS(t,n){return Bt(t,n)}var nc=null,ps=null,Gf=!1,ic=!1,Vf=!1,Xa=0;function Fi(t){t!==ps&&t.next===null&&(ps===null?nc=ps=t:ps=ps.next=t),ic=!0,Gf||(Gf=!0,_S())}function Co(t,n){if(!Vf&&ic){Vf=!0;do for(var r=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var _=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-We(42|t)+1)-1,d&=u&~(_&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,rx(o,d))}else d=bt,d=ve(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ge(o,d)||(r=!0,rx(o,d));o=o.next}while(r);Vf=!1}}function vS(){nx()}function nx(){ic=Gf=!1;var t=0;Xa!==0&&wS()&&(t=Xa);for(var n=E(),r=null,o=nc;o!==null;){var u=o.next,d=ix(o,n);d===0?(o.next=null,r===null?nc=u:r.next=u,u===null&&(ps=r)):(r=o,(t!==0||(d&3)!==0)&&(ic=!0)),o=u}_n!==0&&_n!==5||Co(t),Xa!==0&&(Xa=0)}function ix(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-We(d),A=1<<_,F=u[_];F===-1?((A&r)===0||(A&o)!==0)&&(u[_]=st(A,n)):F<=n&&(t.expiredLanes|=A),d&=~A}if(n=jt,r=bt,r=ve(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ge(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),cr(r)){case 2:case 8:r=ye;break;case 32:r=ce;break;case 268435456:r=Le;break;default:r=ce}return o=ax.bind(null,t),r=Bt(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function ax(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(tc()&&t.callbackNode!==r)return null;var o=bt;return o=ve(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(I0(t,o,n),ix(t,E()),t.callbackNode!=null&&t.callbackNode===r?ax.bind(null,t):null)}function rx(t,n){if(tc())return null;I0(t,n,!0)}function _S(){US(function(){(zt&6)!==0?Bt(xe,vS):nx()})}function kf(){if(Xa===0){var t=$r;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Xa=t}return Xa}function sx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function ox(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function SS(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var d=sx((u[gn]||null).action),_=o.submitter;_&&(n=(n=_[gn]||null)?sx(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var A=new ml("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var F=_?ox(u,_):new FormData(u);cf(r,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(A.preventDefault(),F=_?ox(u,_):new FormData(u),cf(r,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],yS=Wf.toLowerCase(),bS=Wf[0].toUpperCase()+Wf.slice(1);Mi(yS,"on"+bS)}Mi(Fp,"onAnimationEnd"),Mi(Ip,"onAnimationIteration"),Mi(Hp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(F_,"onTransitionRun"),Mi(I_,"onTransitionStart"),Mi(H_,"onTransitionCancel"),Mi(Gp,"onTransitionEnd"),Ie("onMouseEnter",["mouseout","mouseover"]),Ie("onMouseLeave",["mouseout","mouseover"]),Ie("onPointerEnter",["pointerout","pointerover"]),Ie("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function lx(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var A=o[_],F=A.instance,Q=A.currentTarget;if(A=A.listener,F!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=Q;try{d(u)}catch(fe){vl(fe)}u.currentTarget=null,d=F}else for(_=0;_<o.length;_++){if(A=o[_],F=A.instance,Q=A.currentTarget,A=A.listener,F!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=Q;try{d(u)}catch(fe){vl(fe)}u.currentTarget=null,d=F}}}}function yt(t,n){var r=n[Gr];r===void 0&&(r=n[Gr]=new Set);var o=t+"__bubble";r.has(o)||(cx(n,t,2,!1),r.add(o))}function qf(t,n,r){var o=0;n&&(o|=4),cx(r,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[ac]){t[ac]=!0,j.forEach(function(r){r!=="selectionchange"&&(MS.has(r)||qf(r,!1,t),qf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,qf("selectionchange",!1,n))}}function cx(t,n,r,o){switch(Fx(n)){case 2:var u=QS;break;case 8:u=JS;break;default:u=ld}r=u.bind(null,n,r,t),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function jf(t,n,r,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var A=o.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=o.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Aa(A),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){o=d=_;continue e}A=A.parentNode}}o=o.return}pp(function(){var Q=d,fe=uu(r),ge=[];e:{var ne=Vp.get(t);if(ne!==void 0){var se=ml,Xe=t;switch(t){case"keypress":if(hl(r)===0)break e;case"keydown":case"keyup":se=x_;break;case"focusin":Xe="focus",se=xu;break;case"focusout":Xe="blur",se=xu;break;case"beforeblur":case"afterblur":se=xu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=a_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=__;break;case Fp:case Ip:case Hp:se=o_;break;case Gp:se=y_;break;case"scroll":case"scrollend":se=n_;break;case"wheel":se=M_;break;case"copy":case"cut":case"paste":se=c_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=_p;break;case"toggle":case"beforetoggle":se=T_}var it=(n&4)!==0,Wt=!it&&(t==="scroll"||t==="scrollend"),q=it?ne!==null?ne+"Capture":null:ne;it=[];for(var k=Q,Z;k!==null;){var de=k;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||q===null||(de=Ks(k,q),de!=null&&it.push(Do(k,de,Z))),Wt)break;k=k.return}0<it.length&&(ne=new se(ne,Xe,null,r,fe),ge.push({event:ne,listeners:it}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ne&&r!==cu&&(Xe=r.relatedTarget||r.fromElement)&&(Aa(Xe)||Xe[Xi]))break e;if((se||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,se?(Xe=r.relatedTarget||r.toElement,se=Q,Xe=Xe?Aa(Xe):null,Xe!==null&&(Wt=c(Xe),it=Xe.tag,Xe!==Wt||it!==5&&it!==27&&it!==6)&&(Xe=null)):(se=null,Xe=Q),se!==Xe)){if(it=gp,de="onMouseLeave",q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(it=_p,de="onPointerLeave",q="onPointerEnter",k="pointer"),Wt=se==null?ne:W(se),Z=Xe==null?ne:W(Xe),ne=new it(de,k+"leave",se,r,fe),ne.target=Wt,ne.relatedTarget=Z,de=null,Aa(fe)===Q&&(it=new it(q,k+"enter",Xe,r,fe),it.target=Z,it.relatedTarget=Wt,de=it),Wt=de,se&&Xe)t:{for(it=ES,q=se,k=Xe,Z=0,de=q;de;de=it(de))Z++;de=0;for(var $e=k;$e;$e=it($e))de++;for(;0<Z-de;)q=it(q),Z--;for(;0<de-Z;)k=it(k),de--;for(;Z--;){if(q===k||k!==null&&q===k.alternate){it=q;break t}q=it(q),k=it(k)}it=null}else it=null;se!==null&&ux(ge,ne,se,it,!1),Xe!==null&&Wt!==null&&ux(ge,Wt,Xe,it,!0)}}e:{if(ne=Q?W(Q):window,se=ne.nodeName&&ne.nodeName.toLowerCase(),se==="select"||se==="input"&&ne.type==="file")var Lt=Rp;else if(Tp(ne))if(Cp)Lt=P_;else{Lt=N_;var qe=L_}else se=ne.nodeName,!se||se.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?Q&&lu(Q.elementType)&&(Lt=Rp):Lt=O_;if(Lt&&(Lt=Lt(t,Q))){Ap(ge,Lt,r,fe);break e}qe&&qe(t,ne,Q),t==="focusout"&&Q&&ne.type==="number"&&Q.memoizedProps.value!=null&&En(ne,"number",ne.value)}switch(qe=Q?W(Q):window,t){case"focusin":(Tp(qe)||qe.contentEditable==="true")&&(Wr=qe,bu=Q,ao=null);break;case"focusout":ao=bu=Wr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Bp(ge,r,fe);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":Bp(ge,r,fe)}var pt;if(vu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Xr?Mp(t,r)&&(Mt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Mt="onCompositionStart");Mt&&(Sp&&r.locale!=="ko"&&(Xr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Xr&&(pt=mp()):(Ca=fe,hu="value"in Ca?Ca.value:Ca.textContent,Xr=!0)),qe=rc(Q,Mt),0<qe.length&&(Mt=new vp(Mt,t,null,r,fe),ge.push({event:Mt,listeners:qe}),pt?Mt.data=pt:(pt=Ep(r),pt!==null&&(Mt.data=pt)))),(pt=R_?C_(t,r):w_(t,r))&&(Mt=rc(Q,"onBeforeInput"),0<Mt.length&&(qe=new vp("onBeforeInput","beforeinput",null,r,fe),ge.push({event:qe,listeners:Mt}),qe.data=pt)),SS(ge,t,Q,r,fe)}lx(ge,n)})}function Do(t,n,r){return{instance:t,listener:n,currentTarget:r}}function rc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ks(t,r),u!=null&&o.unshift(Do(t,u,d)),u=Ks(t,n),u!=null&&o.push(Do(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ES(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ux(t,n,r,o,u){for(var d=n._reactName,_=[];r!==null&&r!==o;){var A=r,F=A.alternate,Q=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||Q===null||(F=Q,u?(Q=Ks(r,d),Q!=null&&_.unshift(Do(r,Q,F))):u||(Q=Ks(r,d),Q!=null&&_.push(Do(r,Q,F)))),r=r.return}_.length!==0&&t.push({event:n,listeners:_})}var TS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function fx(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(AS,"")}function dx(t,n){return n=fx(n),fx(t)===n}function Xt(t,n,r,o,u,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Oi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Oi(t,""+o);break;case"className":wt(t,"class",o);break;case"tabIndex":wt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,r,o);break;case"style":dp(t,o,d);break;case"data":if(n!=="object"){wt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=fl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=fl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=e_.get(r)||r,ht(t,r,o))}}function Zf(t,n,r,o,u,d){switch(r){case"style":dp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Oi(t,o):(typeof o=="number"||typeof o=="bigint")&&Oi(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=t[gn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):ht(t,r,o)}}}function Pn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var _=r[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,d,_,r,null)}}u&&Xt(t,n,"srcSet",r.srcSet,r,null),o&&Xt(t,n,"src",r.src,r,null);return;case"input":yt("invalid",t);var A=d=_=u=null,F=null,Q=null;for(o in r)if(r.hasOwnProperty(o)){var fe=r[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":_=fe;break;case"checked":F=fe;break;case"defaultChecked":Q=fe;break;case"value":d=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Xt(t,n,o,fe,r,null)}}Kt(t,d,A,F,Q,_,u,!1);return;case"select":yt("invalid",t),o=_=d=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":_=A;break;case"multiple":o=A;default:Xt(t,n,u,A,r,null)}n=d,r=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):r!=null&&vn(t,!!o,r,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(_ in r)if(r.hasOwnProperty(_)&&(A=r[_],A!=null))switch(_){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xt(t,n,_,A,r,null)}Un(t,o,u,d);return;case"option":for(F in r)if(r.hasOwnProperty(F)&&(o=r[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,F,o,r,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)yt(wo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in r)if(r.hasOwnProperty(Q)&&(o=r[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,Q,o,r,null)}return;default:if(lu(n)){for(fe in r)r.hasOwnProperty(fe)&&(o=r[fe],o!==void 0&&Zf(t,n,fe,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&Xt(t,n,A,o,r,null))}function RS(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,_=null,A=null,F=null,Q=null,fe=null;for(se in r){var ge=r[se];if(r.hasOwnProperty(se)&&ge!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":F=ge;default:o.hasOwnProperty(se)||Xt(t,n,se,null,o,ge)}}for(var ne in o){var se=o[ne];if(ge=r[ne],o.hasOwnProperty(ne)&&(se!=null||ge!=null))switch(ne){case"type":d=se;break;case"name":u=se;break;case"checked":Q=se;break;case"defaultChecked":fe=se;break;case"value":_=se;break;case"defaultValue":A=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ge&&Xt(t,n,ne,se,o,ge)}}Wi(t,_,A,F,Q,fe,d,u);return;case"select":se=_=A=ne=null;for(d in r)if(F=r[d],r.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":se=F;default:o.hasOwnProperty(d)||Xt(t,n,d,null,o,F)}for(u in o)if(d=o[u],F=r[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":ne=d;break;case"defaultValue":A=d;break;case"multiple":_=d;default:d!==F&&Xt(t,n,u,d,o,F)}n=A,r=_,o=se,ne!=null?vn(t,!!r,ne,!1):!!o!=!!r&&(n!=null?vn(t,!!r,n,!0):vn(t,!!r,r?[]:"",!1));return;case"textarea":se=ne=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,n,A,null,o,u)}for(_ in o)if(u=o[_],d=r[_],o.hasOwnProperty(_)&&(u!=null||d!=null))switch(_){case"value":ne=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xt(t,n,_,u,o,d)}Tn(t,ne,se);return;case"option":for(var Xe in r)if(ne=r[Xe],r.hasOwnProperty(Xe)&&ne!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Xt(t,n,Xe,null,o,ne)}for(F in o)if(ne=o[F],se=r[F],o.hasOwnProperty(F)&&ne!==se&&(ne!=null||se!=null))switch(F){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Xt(t,n,F,ne,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in r)ne=r[it],r.hasOwnProperty(it)&&ne!=null&&!o.hasOwnProperty(it)&&Xt(t,n,it,null,o,ne);for(Q in o)if(ne=o[Q],se=r[Q],o.hasOwnProperty(Q)&&ne!==se&&(ne!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Xt(t,n,Q,ne,o,se)}return;default:if(lu(n)){for(var Wt in r)ne=r[Wt],r.hasOwnProperty(Wt)&&ne!==void 0&&!o.hasOwnProperty(Wt)&&Zf(t,n,Wt,void 0,o,ne);for(fe in o)ne=o[fe],se=r[fe],!o.hasOwnProperty(fe)||ne===se||ne===void 0&&se===void 0||Zf(t,n,fe,ne,o,se);return}}for(var q in r)ne=r[q],r.hasOwnProperty(q)&&ne!=null&&!o.hasOwnProperty(q)&&Xt(t,n,q,null,o,ne);for(ge in o)ne=o[ge],se=r[ge],!o.hasOwnProperty(ge)||ne===se||ne==null&&se==null||Xt(t,n,ge,ne,o,se)}function hx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,_=u.initiatorType,A=u.duration;if(d&&A&&hx(_)){for(_=0,A=u.responseEnd,o+=1;o<r.length;o++){var F=r[o],Q=F.startTime;if(Q>A)break;var fe=F.transferSize,ge=F.initiatorType;fe&&hx(ge)&&(F=F.responseEnd,_+=fe*(F<A?1:(A-Q)/(F-Q)))}if(--o,n+=8*(d+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function px(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function wS(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var xx=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,gx=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof gx<"u"?function(t){return gx.resolve(null).then(t).catch(LS)}:xx;function LS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function vx(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),vs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Uo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Uo(r);for(var d=r.firstChild;d;){var _=d.nextSibling,A=d.nodeName;d[ur]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=_}}else r==="body"&&Uo(t.ownerDocument.body);r=u}while(r);vs(n)}function _x(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function ed(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ed(r),Zs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function NS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ur])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function OS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=gi(t.nextSibling),t===null))return null;return t}function Sx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function td(t){return t.data==="$?"||t.data==="$~"}function nd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function PS(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var id=null;function yx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return gi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function bx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function Mx(t,n,r){switch(n=sc(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zs(t)}var vi=new Map,Ex=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=X.d;X.d={f:BS,r:zS,D:FS,C:IS,L:HS,m:GS,X:kS,S:VS,M:XS};function BS(){var t=ca.f(),n=Jl();return t||n}function zS(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?Gm(n):ca.r(t)}var ms=typeof document>"u"?null:document;function Tx(t,n,r){var o=ms;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Ex.has(u)||(Ex.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Pn(n,"link",t),$(n),o.head.appendChild(n)))}}function FS(t){ca.D(t),Tx("dns-prefetch",t,null)}function IS(t,n){ca.C(t,n),Tx("preconnect",t,n)}function HS(t,n,r){ca.L(t,n,r);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Zt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Zt(r.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(n){case"style":d=xs(t);break;case"script":d=gs(t)}vi.has(d)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),vi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Pn(n,"link",t),$(n),o.head.appendChild(n)))}}function GS(t,n){ca.m(t,n);var r=ms;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gs(t)}if(!vi.has(d)&&(t=g({rel:"modulepreload",href:t},n),vi.set(d,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(No(d)))return}o=r.createElement("link"),Pn(o,"link",t),$(o),r.head.appendChild(o)}}}function VS(t,n,r){ca.S(t,n,r);var o=ms;if(o&&t){var u=re(o).hoistableStyles,d=xs(t);n=n||"default";var _=u.get(d);if(!_){var A={loading:0,preload:null};if(_=o.querySelector(Lo(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=vi.get(d))&&ad(t,r);var F=_=o.createElement("link");$(F),Pn(F,"link",t),F._p=new Promise(function(Q,fe){F.onload=Q,F.onerror=fe}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(d,_)}}}function kS(t,n){ca.X(t,n);var r=ms;if(r&&t){var o=re(r).hoistableScripts,u=gs(t),d=o.get(u);d||(d=r.querySelector(No(u)),d||(t=g({src:t,async:!0},n),(n=vi.get(u))&&rd(t,n),d=r.createElement("script"),$(d),Pn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function XS(t,n){ca.M(t,n);var r=ms;if(r&&t){var o=re(r).hoistableScripts,u=gs(t),d=o.get(u);d||(d=r.querySelector(No(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&rd(t,n),d=r.createElement("script"),$(d),Pn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ax(t,n,r,o){var u=(u=ie.current)?oc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=xs(r.href),r=re(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=xs(r.href);var d=re(u).hoistableStyles,_=d.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=u.querySelector(Lo(t)))&&!d._p&&(_.instance=d,_.state.loading=5),vi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},vi.set(t,r),d||WS(u,t,r,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gs(r),r=re(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xs(t){return'href="'+Zt(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function Rx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function WS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Pn(n,"link",r),$(n),t.head.appendChild(n))}function gs(t){return'[src="'+Zt(t)+'"]'}function No(t){return"script[async]"+t}function Cx(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(r.href)+'"]');if(o)return n.instance=o,$(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),$(o),Pn(o,"style",u),lc(o,r.precedence,t),n.instance=o;case"stylesheet":u=xs(r.href);var d=t.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,$(d),d;o=Rx(r),(u=vi.get(u))&&ad(o,u),d=(t.ownerDocument||t).createElement("link"),$(d);var _=d;return _._p=new Promise(function(A,F){_.onload=A,_.onerror=F}),Pn(d,"link",o),n.state.loading|=4,lc(d,r.precedence,t),n.instance=d;case"script":return d=gs(r.src),(u=t.querySelector(No(d)))?(n.instance=u,$(u),u):(o=r,(u=vi.get(d))&&(o=g({},r),rd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),$(u),Pn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,r.precedence,t));return n.instance}function lc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,_=0;_<o.length;_++){var A=o[_];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cc=null;function wx(t,n,r){if(cc===null){var o=new Map,u=cc=new Map;u.set(r,o)}else u=cc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[ur]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=t+_;var A=o.get(_);A?A.push(d):o.set(_,[d])}}return o}function Dx(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function qS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ux(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function YS(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=xs(o.href),d=n.querySelector(Lo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=uc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=d,$(d);return}d=n.ownerDocument||n,o=Rx(o),(u=vi.get(u))&&ad(o,u),d=d.createElement("link"),$(d);var _=d;_._p=new Promise(function(A,F){_.onload=A,_.onerror=F}),Pn(d,"link",o),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=uc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var sd=0;function jS(t,n){return t.stylesheets&&t.count===0&&dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&sd===0&&(sd=62500*CS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>sd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(ZS,t),fc=null,uc.call(t))}function ZS(t,n){if(!(n.state.loading&4)){var r=fc.get(t);if(r)var o=r.get(null);else{r=new Map,fc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var _=u[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(r.set(_.dataset.precedence,_),o=_)}o&&r.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),d=r.get(_)||o,d===o&&r.set(null,u),r.set(_,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function KS(t,n,r,o,u,d,_,A,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Lx(t,n,r,o,u,d,_,A,F,Q,fe,ge){return t=new KS(t,n,r,_,F,Q,fe,ge,A),n=1,d===!0&&(n|=24),d=Jn(3,null,null,n),t.current=d,d.stateNode=t,n=Fu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},Vu(d),t}function Nx(t){return t?(t=jr,t):jr}function Ox(t,n,r,o,u,d){u=Nx(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Pa(t,o,n),r!==null&&(Yn(r,t,n),fo(r,t,n))}function Px(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function od(t,n){Px(t,n),(t=t.alternate)&&Px(t,n)}function Bx(t){if(t.tag===13||t.tag===31){var n=pr(t,67108864);n!==null&&Yn(n,t,67108864),od(t,67108864)}}function zx(t){if(t.tag===13||t.tag===31){var n=ii();n=bi(n);var r=pr(t,n);r!==null&&Yn(r,t,n),od(t,n)}}var hc=!0;function QS(t,n,r,o){var u=N.T;N.T=null;var d=X.p;try{X.p=2,ld(t,n,r,o)}finally{X.p=d,N.T=u}}function JS(t,n,r,o){var u=N.T;N.T=null;var d=X.p;try{X.p=8,ld(t,n,r,o)}finally{X.p=d,N.T=u}}function ld(t,n,r,o){if(hc){var u=cd(o);if(u===null)jf(t,n,o,pc,r),Ix(t,o);else if(ey(u,t,n,r,o))o.stopPropagation();else if(Ix(t,o),n&4&&-1<$S.indexOf(t)){for(;u!==null;){var d=R(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Me(d.pendingLanes);if(_!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var F=1<<31-We(_);A.entanglements[1]|=F,_&=~F}Fi(d),(zt&6)===0&&(Kl=E()+500,Co(0))}}break;case 31:case 13:A=pr(d,2),A!==null&&Yn(A,d,2),Jl(),od(d,2)}if(d=cd(o),d===null&&jf(t,n,o,pc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else jf(t,n,o,null,r)}}function cd(t){return t=uu(t),ud(t)}var pc=null;function ud(t){if(pc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function Fx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case xe:return 2;case ye:return 8;case ce:case Ke:return 32;case Le:return 268435456;default:return 32}default:return 32}}var fd=!1,qa=null,Ya=null,ja=null,Po=new Map,Bo=new Map,Za=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ix(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function zo(t,n,r,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Bx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ey(t,n,r,o,u){switch(n){case"focusin":return qa=zo(qa,t,n,r,o,u),!0;case"dragenter":return Ya=zo(Ya,t,n,r,o,u),!0;case"mouseover":return ja=zo(ja,t,n,r,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,zo(Po.get(d)||null,t,n,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Bo.set(d,zo(Bo.get(d)||null,t,n,r,o,u)),!0}return!1}function Hx(t){var n=Aa(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,js(t.priority,function(){zx(r)});return}}else if(n===31){if(n=h(r),n!==null){t.blockedOn=n,js(t.priority,function(){zx(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=cd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);cu=o,r.target.dispatchEvent(o),cu=null}else return n=R(r),n!==null&&Bx(n),t.blockedOn=r,!1;n.shift()}return!0}function Gx(t,n,r){mc(t)&&r.delete(n)}function ty(){fd=!1,qa!==null&&mc(qa)&&(qa=null),Ya!==null&&mc(Ya)&&(Ya=null),ja!==null&&mc(ja)&&(ja=null),Po.forEach(Gx),Bo.forEach(Gx)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,fd||(fd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ty)))}var gc=null;function Vx(t){gc!==t&&(gc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ud(o||r)===null)continue;break}var d=R(r);d!==null&&(t.splice(n,3),n-=3,cf(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function vs(t){function n(F){return xc(F,t)}qa!==null&&xc(qa,t),Ya!==null&&xc(Ya,t),ja!==null&&xc(ja,t),Po.forEach(n),Bo.forEach(n);for(var r=0;r<Za.length;r++){var o=Za[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(r=Za[0],r.blockedOn===null);)Hx(r),r.blockedOn===null&&Za.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],_=u[gn]||null;if(typeof d=="function")_||Vx(r);else if(_){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,_=d[gn]||null)A=_.formAction;else if(ud(u)!==null)continue}else A=_.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),Vx(r)}}}function kx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function dd(t){this._internalRoot=t}vc.prototype.render=dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ii();Ox(r,o,t,n,null,null)},vc.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ox(t.current,2,null,t,null,null),Jl(),n[Xi]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Za.length&&n!==0&&n<Za[r].priority;r++);Za.splice(r,0,t),r===0&&Hx(t)}};var Xx=e.version;if(Xx!=="19.2.0")throw Error(s(527,Xx,"19.2.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var ny={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{be=_c.inject(ny),Te=_c}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=Qm,d=Jm,_=$m;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Lx(t,1,!1,null,null,r,o,null,u,d,_,kx),t[Xi]=n.current,Yf(t),new dd(n)},Io.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",d=Qm,_=Jm,A=$m,F=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(_=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(F=r.formState)),n=Lx(t,1,!0,n,r??null,o,u,F,d,_,A,kx),n.context=Nx(null),r=n.current,o=ii(),o=bi(o),u=Oa(o),u.callback=null,Pa(r,u,o),r=o,n.current.lanes=r,Bn(n,r),Fi(n),t[Xi]=n.current,Yf(t),new vc(n)},Io.version="19.2.0",Io}var eg;function dy(){if(eg)return md.exports;eg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),md.exports=fy(),md.exports}var hy=dy();var tg="popstate";function py(a={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Ir(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),eh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:Zo(c))}function s(l,c){Li(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return xy(e,i,s,a)}function tn(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Li(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function my(){return Math.random().toString(36).substring(2,10)}function ng(a,e){return{usr:a.state,key:a.key,idx:e}}function eh(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Ir(e):e,state:i,key:e&&e.key||s||my()}}function Zo({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Ir(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function xy(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function g(){h="POP";let b=x(),v=b==null?null:b-p;p=b,m&&m({action:h,location:T.location,delta:v})}function S(b,v){h="PUSH";let D=eh(T.location,b,v);i&&i(D,b),p=x()+1;let U=ng(D,p),B=T.createHref(D);try{f.pushState(U,"",B)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(B)}c&&m&&m({action:h,location:T.location,delta:1})}function y(b,v){h="REPLACE";let D=eh(T.location,b,v);i&&i(D,b),p=x();let U=ng(D,p),B=T.createHref(D);f.replaceState(U,"",B),c&&m&&m({action:h,location:T.location,delta:0})}function M(b){return gy(b)}let T={get action(){return h},get location(){return a(l,f)},listen(b){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(tg,g),m=b,()=>{l.removeEventListener(tg,g),m=null}},createHref(b){return e(l,b)},createURL:M,encodeLocation(b){let v=M(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:y,go(b){return f.go(b)}};return T}function gy(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Zo(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function lv(a,e,i="/"){return vy(a,e,i,!1)}function vy(a,e,i,s){let l=typeof e=="string"?Ir(e):e,c=ya(l.pathname||"/",i);if(c==null)return null;let f=cv(a);_y(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=Dy(c);h=Cy(f[m],p,s)}return h}function cv(a,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&m)return;tn(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let g=_a([s,x.relativePath]),S=i.concat(x);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),cv(f.children,e,S,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:Ay(g,f.index),routesMeta:S})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of uv(f.path))c(f,h,!0,m)}),e}function uv(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=uv(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function _y(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:Ry(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Sy=/^:[\w-]+$/,yy=3,by=2,My=1,Ey=10,Ty=-2,ig=a=>a==="*";function Ay(a,e){let i=a.split("/"),s=i.length;return i.some(ig)&&(s+=Ty),e&&(s+=by),i.filter(l=>!ig(l)).reduce((l,c)=>l+(Sy.test(c)?yy:c===""?My:Ey),s)}function Ry(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function Cy(a,e,i=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=Zc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),S=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=Zc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:_a([c,g.pathname]),pathnameBase:Oy(_a([c,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(c=_a([c,g.pathnameBase]))}return f}function Zc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=wy(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:g},S)=>{if(x==="*"){let M=h[S]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=h[S];return g&&!y?p[x]=void 0:p[x]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:a}}function wy(a,e=!1,i=!0){Li(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function Dy(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Li(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ya(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function Uy(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Ir(a):a;return{pathname:i?i.startsWith("/")?i:Ly(i,e):e,search:Py(s),hash:By(l)}}function Ly(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function _d(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ny(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function fv(a){let e=Ny(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function dv(a,e,i,s=!1){let l;typeof a=="string"?l=Ir(a):(l={...a},tn(!l.pathname||!l.pathname.includes("?"),_d("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),_d("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),_d("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),g-=1;l.pathname=S.join("/")}h=g>=0?e[g]:"/"}let m=Uy(l,h),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var _a=a=>a.join("/").replace(/\/\/+/g,"/"),Oy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Py=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,By=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function zy(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hv=["POST","PUT","PATCH","DELETE"];new Set(hv);var Fy=["GET",...hv];new Set(Fy);var Gs=pe.createContext(null);Gs.displayName="DataRouter";var eu=pe.createContext(null);eu.displayName="DataRouterState";pe.createContext(!1);var pv=pe.createContext({isTransitioning:!1});pv.displayName="ViewTransition";var Iy=pe.createContext(new Map);Iy.displayName="Fetchers";var Hy=pe.createContext(null);Hy.displayName="Await";var ki=pe.createContext(null);ki.displayName="Navigation";var $o=pe.createContext(null);$o.displayName="Location";var Ea=pe.createContext({outlet:null,matches:[],isDataRoute:!1});Ea.displayName="Route";var Zh=pe.createContext(null);Zh.displayName="RouteError";function Gy(a,{relative:e}={}){tn(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=pe.useContext(ki),{hash:l,pathname:c,search:f}=tl(a,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:_a([i,c])),s.createHref({pathname:h,search:f,hash:l})}function el(){return pe.useContext($o)!=null}function Hr(){return tn(el(),"useLocation() may be used only in the context of a <Router> component."),pe.useContext($o).location}var mv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xv(a){pe.useContext(ki).static||pe.useLayoutEffect(a)}function Vy(){let{isDataRoute:a}=pe.useContext(Ea);return a?tb():ky()}function ky(){tn(el(),"useNavigate() may be used only in the context of a <Router> component.");let a=pe.useContext(Gs),{basename:e,navigator:i}=pe.useContext(ki),{matches:s}=pe.useContext(Ea),{pathname:l}=Hr(),c=JSON.stringify(fv(s)),f=pe.useRef(!1);return xv(()=>{f.current=!0}),pe.useCallback((m,p={})=>{if(Li(f.current,mv),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=dv(m,JSON.parse(c),l,p.relative==="path");a==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:_a([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,a])}pe.createContext(null);function tl(a,{relative:e}={}){let{matches:i}=pe.useContext(Ea),{pathname:s}=Hr(),l=JSON.stringify(fv(i));return pe.useMemo(()=>dv(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function Xy(a,e){return gv(a,e)}function gv(a,e,i,s,l){tn(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=pe.useContext(ki),{matches:f}=pe.useContext(Ea),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let D=g&&g.path||"";vv(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let S=Hr(),y;if(e){let D=typeof e=="string"?Ir(e):e;tn(x==="/"||D.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=S;let M=y.pathname||"/",T=M;if(x!=="/"){let D=x.replace(/^\//,"").split("/");T="/"+M.replace(/^\//,"").split("/").slice(D.length).join("/")}let b=lv(a,{pathname:T});Li(g||b!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Li(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Zy(b&&b.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:_a([x,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:_a([x,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,s,l);return e&&v?pe.createElement($o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function Wy(){let a=eb(),e=zy(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=pe.createElement(pe.Fragment,null,pe.createElement("p",null,"💿 Hey developer 👋"),pe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pe.createElement("code",{style:c},"ErrorBoundary")," or"," ",pe.createElement("code",{style:c},"errorElement")," prop on your route.")),pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),i?pe.createElement("pre",{style:l},i):null,f)}var qy=pe.createElement(Wy,null),Yy=class extends pe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?pe.createElement(Ea.Provider,{value:this.props.routeContext},pe.createElement(Zh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jy({routeContext:a,match:e,children:i}){let s=pe.useContext(Gs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),pe.createElement(Ea.Provider,{value:a},i)}function Zy(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let c=a,f=i?.errors;if(f!=null){let p=c.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);tn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let x=c[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=p),x.route.id){let{loaderData:g,errors:S}=i,y=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||y){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,x,g)=>{let S,y=!1,M=null,T=null;i&&(S=f&&x.route.id?f[x.route.id]:void 0,M=x.route.errorElement||qy,h&&(m<0&&g===0?(vv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,T=null):m===g&&(y=!0,T=x.route.hydrateFallbackElement||null)));let b=e.concat(c.slice(0,g+1)),v=()=>{let D;return S?D=M:y?D=T:x.route.Component?D=pe.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=p,pe.createElement(jy,{match:x,routeContext:{outlet:p,matches:b,isDataRoute:i!=null},children:D})};return i&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?pe.createElement(Yy,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0},unstable_onError:s}):v()},null)}function Kh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ky(a){let e=pe.useContext(Gs);return tn(e,Kh(a)),e}function Qy(a){let e=pe.useContext(eu);return tn(e,Kh(a)),e}function Jy(a){let e=pe.useContext(Ea);return tn(e,Kh(a)),e}function Qh(a){let e=Jy(a),i=e.matches[e.matches.length-1];return tn(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function $y(){return Qh("useRouteId")}function eb(){let a=pe.useContext(Zh),e=Qy("useRouteError"),i=Qh("useRouteError");return a!==void 0?a:e.errors?.[i]}function tb(){let{router:a}=Ky("useNavigate"),e=Qh("useNavigate"),i=pe.useRef(!1);return xv(()=>{i.current=!0}),pe.useCallback(async(l,c={})=>{Li(i.current,mv),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var ag={};function vv(a,e,i){!e&&!ag[a]&&(ag[a]=!0,Li(!1,i))}pe.memo(nb);function nb({routes:a,future:e,state:i,unstable_onError:s}){return gv(a,void 0,i,s,e)}function th(a){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ib({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){tn(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=pe.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Ir(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:S="default"}=i,y=pe.useMemo(()=>{let M=ya(m,f);return M==null?null:{location:{pathname:M,search:p,hash:x,state:g,key:S},navigationType:s}},[f,m,p,x,g,S,s]);return Li(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:pe.createElement(ki.Provider,{value:h},pe.createElement($o.Provider,{children:e,value:y}))}function ab({children:a,location:e}){return Xy(nh(a),e)}function nh(a,e=[]){let i=[];return pe.Children.forEach(a,(s,l)=>{if(!pe.isValidElement(s))return;let c=[...e,l];if(s.type===pe.Fragment){i.push.apply(i,nh(s.props.children,c));return}tn(s.type===th,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=nh(s.props.children,c)),i.push(f)}),i}var Vc="get",kc="application/x-www-form-urlencoded";function tu(a){return a!=null&&typeof a.tagName=="string"}function rb(a){return tu(a)&&a.tagName.toLowerCase()==="button"}function sb(a){return tu(a)&&a.tagName.toLowerCase()==="form"}function ob(a){return tu(a)&&a.tagName.toLowerCase()==="input"}function lb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function cb(a,e){return a.button===0&&(!e||e==="_self")&&!lb(a)}var Sc=null;function ub(){if(Sc===null)try{new FormData(document.createElement("form"),0),Sc=!1}catch{Sc=!0}return Sc}var fb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sd(a){return a!=null&&!fb.has(a)?(Li(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kc}"`),null):a}function db(a,e){let i,s,l,c,f;if(sb(a)){let h=a.getAttribute("action");s=h?ya(h,e):null,i=a.getAttribute("method")||Vc,l=Sd(a.getAttribute("enctype"))||kc,c=new FormData(a)}else if(rb(a)||ob(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(s=m?ya(m,e):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||Vc,l=Sd(a.getAttribute("formenctype"))||Sd(h.getAttribute("enctype"))||kc,c=new FormData(h,a),!ub()){let{name:p,type:x,value:g}=a;if(x==="image"){let S=p?`${p}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else p&&c.append(p,g)}}else{if(tu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vc,s=null,l=kc,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jh(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function hb(a,e,i){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&ya(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function pb(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function xb(a,e,i){let s=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await pb(c,i);return f.links?f.links():[]}return[]}));return Sb(s.flat(1).filter(mb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function rg(a,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=s.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function gb(a,e,{includeHydrateFallback:i}={}){return vb(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function vb(a){return[...new Set(a)]}function _b(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function Sb(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let c=JSON.stringify(_b(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function _v(){let a=pe.useContext(Gs);return Jh(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function yb(){let a=pe.useContext(eu);return Jh(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var $h=pe.createContext(void 0);$h.displayName="FrameworkContext";function Sv(){let a=pe.useContext($h);return Jh(a,"You must render this element inside a <HydratedRouter> element"),a}function bb(a,e){let i=pe.useContext($h),[s,l]=pe.useState(!1),[c,f]=pe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,S=pe.useRef(null);pe.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=v=>{v.forEach(D=>{f(D.isIntersecting)})},b=new IntersectionObserver(T,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[a]),pe.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let y=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?a!=="intent"?[c,S,{}]:[c,S,{onFocus:Ho(h,y),onBlur:Ho(m,M),onMouseEnter:Ho(p,y),onMouseLeave:Ho(x,M),onTouchStart:Ho(g,y)}]:[!1,S,{}]}function Ho(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function Mb({page:a,...e}){let{router:i}=_v(),s=pe.useMemo(()=>lv(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?pe.createElement(Tb,{page:a,matches:s,...e}):null}function Eb(a){let{manifest:e,routeModules:i}=Sv(),[s,l]=pe.useState([]);return pe.useEffect(()=>{let c=!1;return xb(a,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,i]),s}function Tb({page:a,matches:e,...i}){let s=Hr(),{manifest:l,routeModules:c}=Sv(),{basename:f}=_v(),{loaderData:h,matches:m}=yb(),p=pe.useMemo(()=>rg(a,e,m,l,s,"data"),[a,e,m,l,s]),x=pe.useMemo(()=>rg(a,e,m,l,s,"assets"),[a,e,m,l,s]),g=pe.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let M=new Set,T=!1;if(e.forEach(v=>{let D=l.routes[v.route.id];!D||!D.hasLoader||(!p.some(U=>U.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||D.hasClientLoader?T=!0:M.add(v.route.id))}),M.size===0)return[];let b=hb(a,f,"data");return T&&M.size>0&&b.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[b.pathname+b.search]},[f,h,s,l,p,e,a,c]),S=pe.useMemo(()=>gb(x,l),[x,l]),y=Eb(x);return pe.createElement(pe.Fragment,null,g.map(M=>pe.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),S.map(M=>pe.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:T})=>pe.createElement("link",{key:M,nonce:i.nonce,...T})))}function Ab(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yv&&(window.__reactRouterVersion="7.9.5")}catch{}function Rb({basename:a,children:e,window:i}){let s=pe.useRef();s.current==null&&(s.current=py({window:i,v5Compat:!0}));let l=s.current,[c,f]=pe.useState({action:l.action,location:l.location}),h=pe.useCallback(m=>{pe.startTransition(()=>f(m))},[f]);return pe.useLayoutEffect(()=>l.listen(h),[l,h]),pe.createElement(ib,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:l})}var bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nl=pe.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,...S},y){let{basename:M}=pe.useContext(ki),T=typeof p=="string"&&bv.test(p),b,v=!1;if(typeof p=="string"&&T&&(b=p,yv))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),G=ya(C.pathname,M);C.origin===w.origin&&G!=null?p=G+C.search+C.hash:v=!0}catch{Li(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Gy(p,{relative:l}),[U,B,V]=bb(s,S),O=Ub(p,{replace:f,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g});function z(w){e&&e(w),w.defaultPrevented||O(w)}let ee=pe.createElement("a",{...S,...V,href:b||D,onClick:v||c?e:z,ref:Ab(y,B),target:m,"data-discover":!T&&i==="render"?"true":void 0});return U&&!T?pe.createElement(pe.Fragment,null,ee,pe.createElement(Mb,{page:D})):ee});nl.displayName="Link";var Cb=pe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},x){let g=tl(f,{relative:p.relative}),S=Hr(),y=pe.useContext(eu),{navigator:M,basename:T}=pe.useContext(ki),b=y!=null&&Bb(g)&&h===!0,v=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,D=S.pathname,U=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(D=D.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&T&&(U=ya(U,T)||U);const B=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let V=D===v||!l&&D.startsWith(v)&&D.charAt(B)==="/",O=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),z={isActive:V,isPending:O,isTransitioning:b},ee=V?e:void 0,w;typeof s=="function"?w=s(z):w=[s,V?"active":null,O?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return pe.createElement(nl,{...p,"aria-current":ee,className:w,ref:x,style:C,to:f,viewTransition:h},typeof m=="function"?m(z):m)});Cb.displayName="NavLink";var wb=pe.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Vc,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...S},y)=>{let M=Ob(),T=Pb(h,{relative:p}),b=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&bv.test(h),D=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let B=U.nativeEvent.submitter,V=B?.getAttribute("formmethod")||f;M(B||U.currentTarget,{fetcherKey:e,method:V,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return pe.createElement("form",{ref:y,method:b,action:T,onSubmit:s?m:D,...S,"data-discover":!v&&a==="render"?"true":void 0})});wb.displayName="Form";function Db(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mv(a){let e=pe.useContext(Gs);return tn(e,Db(a)),e}function Ub(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=Vy(),m=Hr(),p=tl(a,{relative:c});return pe.useCallback(x=>{if(cb(x,e)){x.preventDefault();let g=i!==void 0?i:Zo(m)===Zo(p);h(a,{replace:g,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,s,e,a,l,c,f])}var Lb=0,Nb=()=>`__${String(++Lb)}__`;function Ob(){let{router:a}=Mv("useSubmit"),{basename:e}=pe.useContext(ki),i=$y();return pe.useCallback(async(s,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=db(s,e);if(l.navigate===!1){let x=l.fetcherKey||Nb();await a.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function Pb(a,{relative:e}={}){let{basename:i}=pe.useContext(ki),s=pe.useContext(Ea);tn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...tl(a||".",{relative:e})},f=Hr();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),Zo(c)}function Bb(a,{relative:e}={}){let i=pe.useContext(pv);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Mv("useViewTransitionState"),l=tl(a,{relative:e});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Zc(l.pathname,f)!=null||Zc(l.pathname,c)!=null}const zb=({src:a,alt:e="Profile"})=>ze.jsx("div",{className:"w-36 h-36 rounded-full overflow-hidden bg-gray-500/5 border-2 border-gray-400/10 shadow-2xl shadow-pink-400/20 p-1",children:ze.jsx("img",{src:a,alt:e,className:"w-full h-full object-cover rounded-full  transition-opacity duration-100"})}),Fb=({name:a,tagline:e})=>ze.jsxs("header",{className:"flex flex-col gap-3",children:[ze.jsx("h1",{className:"text-3xl font-bold text-primary leading-tight m-0",children:a}),ze.jsx("h2",{className:"text-lg text-secondary font-medium m-0",children:e})]}),Ib=({href:a,children:e,color:i,isExternal:s=!1})=>{const l="link-item text-primary text-lg font-medium cursor-pointer transition-all duration-200 underline decoration-2 underline-offset-2 border-none bg-transparent p-0 hover:opacity-70 hover:text-muted",c={"--decoration-color":i};return a&&!a.startsWith("http")&&!a.startsWith("#")?ze.jsx(nl,{to:a,className:l,style:c,children:e}):a?ze.jsx("a",{href:a,className:l,style:c,...s&&{target:"_blank",rel:"noopener noreferrer"},children:e}):ze.jsx("button",{className:l,style:c,children:e})},Hb=({links:a})=>ze.jsx("nav",{className:"flex flex-wrap justify-center gap-4 my-8",children:a.map((e,i)=>ze.jsx(Ib,{href:e.href,color:e.color,isExternal:e.isExternal,children:e.text},i))}),sg=({active:a,onClick:e,children:i})=>ze.jsx("button",{className:`px-4 py-2 border-2 rounded-full bg-transparent cursor-pointer font-medium capitalize inline-flex items-center transition-all duration-300 ${a?"border-accent text-accent":"border-muted text-muted hover:border-accent hover:text-accent"}`,onClick:e,children:i}),Gb=({onToggle:a,activeView:e="short"})=>{const[i,s]=pe.useState(e),l=c=>{s(c),a?.(c)};return ze.jsxs("div",{className:"flex gap-3 justify-center flex-wrap",children:[ze.jsx(sg,{active:i==="short",onClick:()=>l("short"),children:"Short"}),ze.jsx(sg,{active:i==="long",onClick:()=>l("long"),children:"Long"}),ze.jsx(nl,{to:"/projects",className:"px-4 py-2 border-2 border-muted text-muted hover:border-accent hover:text-accent rounded-full bg-transparent cursor-pointer font-medium capitalize inline-flex items-center transition-all duration-300 no-underline",children:"Projects"})]})},Vb=({content:a,showLong:e=!1})=>{const i=a?.short||[],s=a?.long||[],l=e?s:i;return ze.jsx("section",{className:"w-full mt-4",children:ze.jsx("div",{className:"space-y-4",children:l.map((c,f)=>ze.jsx("p",{className:"text-lg leading-relaxed text-primary m-0",children:c},f))})})},kb="/PersonalPortfolio/assets/profile-CmSwsu2g.jpg",Xb=kb,Go={name:"Pradeep Chandran M",tagline:"Driven by Curiosity | Learning by Breaking and Building",links:[{text:"email",color:"rgb(16, 162, 245)"},{text:"github",href:"https://github.com/RAN-GAN",color:"rgb(233, 188, 63)",isExternal:!0},{text:"linkedin",href:"https://www.linkedin.com/in/pradeepchandranm/",color:"rgb(36, 208, 90)",isExternal:!0},{text:"resume",href:"#",color:"rgb(36, 208, 90)"}],content:{short:["Hi there! My name is Pradeep Chandran M. I'm a Computer Science Engineering student passionate about building innovative solutions and exploring cutting-edge technologies.","Check out my projects or connect with me if you'd like to collaborate or work on exciting ideas!"],long:["Hi there! My name is Pradeep Chandran M. I'm a Computer Science Engineering student with a deep passion for software development, problem-solving, and technology innovation.","I'm driven by curiosity and love exploring new frameworks, programming languages, and development methodologies. Whether it's web development, devops or backend systems, I enjoy the challenge of turning complex problems into elegant solutions.","When I'm not coding, you'll find me exploring new tech trends, hunting for bugs, or brainstorming ways to solve everyday problems. I enjoy learning how things work—whether it’s a line of code or the world around me.","Feel free to explore my work or reach out if you'd like to discuss technology, collaborate on projects, or just have a great conversation about the future of software development!"]}};function Wb(){const[a,e]=pe.useState(!1),i=s=>{e(s==="long")};return ze.jsxs("main",{className:"max-w-2xl mx-auto min-h-screen px-4 sm:px-6 pt-6 sm:pt-12 pb-16 flex flex-col items-center gap-6 sm:gap-8 font-medium",children:[ze.jsxs("div",{className:"flex flex-col items-center gap-4 sm:gap-6 text-center mt-4 sm:mt-0",children:[ze.jsx(zb,{src:Xb,alt:Go.name}),ze.jsx(Fb,{name:Go.name,tagline:Go.tagline})]}),ze.jsx(Hb,{links:Go.links}),ze.jsx(Gb,{onToggle:i}),ze.jsx(Vb,{content:Go.content,showLong:a})]})}function qb(){const a=[{text:"Automated semester result workflows by developing a service that automatically sends results as soon as they are published staright to mail.",link:"#",color:"yellow",label:""},{text:"Collaborated with a professional team to perform large-scale",link:"https://www.linkedin.com/in/pradeepchandranm/",color:"green",label:"Network Load Testing for my college"},{text:"Discovered and responsibly disclosed vulnerabilities in an",link:"https://www.linkedin.com/in/pradeepchandranm/",color:"pink",label:"EdTech Platform"}],e=[{title:"SGPA Calculator",link:"https://ran-gan.github.io/SKCET-CGPA/",color:"pink",desc:"A student-friendly GPA calculator that helps compute semester grades instantly through a clean and minimal interface."},{title:"Guest Management System",link:"#",color:"green",desc:"A hotel administration tool to manage guest check-ins, bookings, and records efficiently with role-based access control."},{title:"Hotel Landing Page",link:"karpagamresidency.vercel.app",color:"yellow",desc:"A responsive website for a hotel that highlights amenities, nearby attractions, and contact details with a modern design."}],i={pink:"underline decoration-pink-500 decoration-2 underline-offset-2 hover:text-pink-400",yellow:"underline decoration-yellow-400 decoration-2 underline-offset-2 hover:text-yellow-300",green:"underline decoration-green-500 decoration-2 underline-offset-2 hover:text-green-400"};return ze.jsx("div",{className:`max-w-2xl mx-auto flex flex-col items-center min-h-screen px-4 sm:px-6 py-6 
text-gray-800 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200`,children:ze.jsxs("div",{className:"w-full",children:[ze.jsxs(nl,{to:"/",className:"text-base text-gray-500 flex items-center gap-1 cursor-pointer hover:text-gray-700 mb-4",children:[ze.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:ze.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})}),ze.jsx("span",{children:"Back"})]}),ze.jsxs("div",{className:"text-center mb-6",children:[ze.jsx("h1",{className:"text-2xl font-semibold",children:"Artifacts"}),ze.jsx("p",{className:"text-base text-gray-500",children:"Here are things I’m proud of."})]}),ze.jsxs("section",{className:"mb-6",children:[ze.jsx("h2",{className:"text-xl font-medium mb-2",children:"Achievements"}),ze.jsx("ul",{className:"space-y-1.5",children:a.map((s,l)=>ze.jsxs(ze.Fragment,{children:[ze.jsxs("li",{className:"flex text-base",children:[ze.jsx("span",{className:"mr-2 text-gray-400",children:"–"}),ze.jsxs("div",{children:[s.text," ",ze.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:`${i[s.color]}`,children:s.label})]})]},l),ze.jsx("br",{})]}))})]}),ze.jsxs("section",{className:"mb-6",children:[ze.jsx("h2",{className:"text-xl font-medium mb-2",children:"Projects"}),ze.jsx("ul",{className:"space-y-1.5",children:e.map((s,l)=>ze.jsxs(ze.Fragment,{children:[" ",ze.jsxs("li",{className:"flex text-base",children:[ze.jsx("span",{className:"mr-2 text-gray-400",children:"–"}),ze.jsxs("div",{children:[ze.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:`${i[s.color]}`,children:s.title}),": ",s.desc]})]},l),ze.jsx("br",{})]}))})]}),ze.jsxs("p",{className:"text-xs text-center text-gray-500 mt-6",children:["For more projects and scripts, visit"," ",ze.jsx("a",{href:"https://github.com/RAN-GAN",target:"_blank",rel:"noopener noreferrer",className:"underline decoration-yellow-400 decoration-2 underline-offset-2 hover:text-yellow-300",children:"GitHub"}),"."]})]})})}const Yb=()=>ze.jsx("main",{className:"max-w-2xl mx-auto min-h-screen px-4 sm:px-6 pt-4 pb-8 text-zinc-200",children:ze.jsx(qb,{})});const nu="181",jb=0,og=1,Zb=2,Ev=1,Kb=2,xa=3,ba=0,Cn=1,si=2,Ui=0,Ns=1,lg=2,cg=3,ug=4,Qb=5,Or=100,Jb=101,$b=102,eM=103,tM=104,nM=200,iM=201,aM=202,rM=203,ih=204,ah=205,sM=206,oM=207,lM=208,cM=209,uM=210,fM=211,dM=212,hM=213,pM=214,rh=0,Kc=1,sh=2,Ps=3,oh=4,lh=5,ch=6,uh=7,Tv=0,mM=1,xM=2,ar=0,gM=1,vM=2,_M=3,SM=4,yM=5,bM=6,MM=7,Av=300,Bs=301,zs=302,fh=303,dh=304,iu=306,hh=1e3,ga=1001,ph=1002,oi=1003,EM=1004,yc=1005,wn=1006,yd=1007,Br=1008,ci=1009,Rv=1010,Cv=1011,Ko=1012,ep=1013,rr=1014,va=1015,Vs=1016,tp=1017,np=1018,Fs=1020,wv=35902,Dv=35899,Uv=1021,Lv=1022,Di=1023,Qo=1026,Is=1027,Nv=1028,ip=1029,ap=1030,rp=1031,sp=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,mh=35840,xh=35841,gh=35842,vh=35843,_h=36196,Sh=37492,yh=37496,bh=37808,Mh=37809,Eh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,wh=37815,Dh=37816,Uh=37817,Lh=37818,Nh=37819,Oh=37820,Ph=37821,Bh=36492,zh=36494,Fh=36495,Ih=36283,Hh=36284,Gh=36285,Vh=36286,il=3200,TM=3201,AM=0,RM=1,Hi="",ln="srgb",sr="srgb-linear",Qc="linear",qt="srgb",_s=7680,fg=519,CM=512,wM=513,DM=514,Ov=515,UM=516,LM=517,NM=518,OM=519,dg=35044,kh="300 es",Gi=2e3,Jc=2001;function Pv(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function $c(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function PM(){const a=$c("canvas");return a.style.display="block",a}const hg={};function pg(...a){const e="THREE."+a.shift();console.log(e,...a)}function dt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function cn(...a){const e="THREE."+a.shift();console.error(e,...a)}function Jo(...a){const e=a.join(" ");e in hg||(hg[e]=!0,dt(...a))}function BM(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class or{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=Math.PI/180,Xh=180/Math.PI;function al(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function Rt(a,e,i){return Math.max(e,Math.min(i,a))}function zM(a,e){return(a%e+e)%e}function Md(a,e,i){return(1-i)*a+i*e}function Vo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,i=0){vt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],S=c[f+0],y=c[f+1],M=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=y,e[i+2]=M,e[i+3]=T;return}if(g!==T||m!==S||p!==y||x!==M){let b=m*S+p*y+x*M+g*T;b<0&&(S=-S,y=-y,M=-M,T=-T,b=-b);let v=1-h;if(b<.9995){const D=Math.acos(b),U=Math.sin(D);v=Math.sin(v*D)/U,h=Math.sin(h*D)/U,m=m*v+S*h,p=p*v+y*h,x=x*v+M*h,g=g*v+T*h}else{m=m*v+S*h,p=p*v+y*h,x=x*v+M*h,g=g*v+T*h;const D=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=D,p*=D,x*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[f],S=c[f+1],y=c[f+2],M=c[f+3];return e[i]=h*M+x*g+m*y-p*S,e[i+1]=m*M+x*S+p*g-h*y,e[i+2]=p*M+x*y+h*S-m*g,e[i+3]=x*M-h*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(c/2),S=m(s/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=S*x*g+p*y*M,this._y=p*y*g-S*x*M,this._z=p*x*M+S*y*g,this._w=p*x*g-S*y*M;break;case"YXZ":this._x=S*x*g+p*y*M,this._y=p*y*g-S*x*M,this._z=p*x*M-S*y*g,this._w=p*x*g+S*y*M;break;case"ZXY":this._x=S*x*g-p*y*M,this._y=p*y*g+S*x*M,this._z=p*x*M+S*y*g,this._w=p*x*g-S*y*M;break;case"ZYX":this._x=S*x*g-p*y*M,this._y=p*y*g+S*x*M,this._z=p*x*M-S*y*g,this._w=p*x*g+S*y*M;break;case"YZX":this._x=S*x*g+p*y*M,this._y=p*y*g+S*x*M,this._z=p*x*M-S*y*g,this._w=p*x*g-S*y*M;break;case"XZY":this._x=S*x*g-p*y*M,this._y=p*y*g-S*x*M,this._z=p*x*M+S*y*g,this._w=p*x*g+S*y*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-s*p,this._z=c*x+f*p+s*m-l*h,this._w=f*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,i=0,s=0){ue.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(mg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),x=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*x,this.y=s+m*x+h*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ed=new ue,mg=new rl;class mt{constructor(e,i,s,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],y=s[5],M=s[8],T=l[0],b=l[3],v=l[6],D=l[1],U=l[4],B=l[7],V=l[2],O=l[5],z=l[8];return c[0]=f*T+h*D+m*V,c[3]=f*b+h*U+m*O,c[6]=f*v+h*B+m*z,c[1]=p*T+x*D+g*V,c[4]=p*b+x*U+g*O,c[7]=p*v+x*B+g*z,c[2]=S*T+y*D+M*V,c[5]=S*b+y*U+M*O,c[8]=S*v+y*B+M*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*h*p-s*c*x+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*f-h*p,S=h*m-x*c,y=p*c-f*m,M=i*g+s*S+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(l*p-x*s)*T,e[2]=(h*s-l*f)*T,e[3]=S*T,e[4]=(x*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Td.makeScale(e,i)),this}rotate(e){return this.premultiply(Td.makeRotation(-e)),this}translate(e,i){return this.premultiply(Td.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Td=new mt,xg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const a={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qt&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Hi?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[sr]:{primaries:e,whitePoint:s,transfer:Qc,toXYZ:xg,fromXYZ:gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:xg,fromXYZ:gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),a}const Ot=FM();function Sa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Os(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ss;class IM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ss===void 0&&(Ss=$c("canvas")),Ss.width=e.width,Ss.height=e.height;const l=Ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ss}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$c("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HM=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ad(l[f].image)):c.push(Ad(l[f]))}else c=Ad(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ad(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?IM.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let GM=0;const Rd=new ue;class Dn extends or{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=ga,l=ga,c=wn,f=Br,h=Di,m=ci,p=Dn.DEFAULT_ANISOTROPY,x=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=al(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Av)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Av;Dn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],S=m[1],y=m[5],M=m[9],T=m[2],b=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-T)<.01&&Math.abs(M-b)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+T)<.1&&Math.abs(M+b)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,B=(y+1)/2,V=(v+1)/2,O=(x+S)/4,z=(g+T)/4,ee=(M+b)/4;return U>B&&U>V?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=z/s):B>V?B<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),s=O/l,c=ee/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=z/c,l=ee/c),this.set(s,l,c,i),this}let D=Math.sqrt((b-M)*(b-M)+(g-T)*(g-T)+(S-x)*(S-x));return Math.abs(D)<.001&&(D=1),this.x=(b-M)/D,this.y=(g-T)/D,this.z=(S-x)/D,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VM extends or{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Dn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends VM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Bv extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ai):Ai.fromBufferAttribute(c,f),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Mc.subVectors(this.max,ko),ys.subVectors(e.a,ko),bs.subVectors(e.b,ko),Ms.subVectors(e.c,ko),Qa.subVectors(bs,ys),Ja.subVectors(Ms,bs),Rr.subVectors(ys,Ms);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Rr.z,Rr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Rr.z,0,-Rr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Rr.y,Rr.x,0];return!Cd(i,ys,bs,Ms,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,ys,bs,Ms,Mc))?!1:(Ec.crossVectors(Qa,Ja),i=[Ec.x,Ec.y,Ec.z],Cd(i,ys,bs,Ms,Mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Ai=new ue,bc=new sl,ys=new ue,bs=new ue,Ms=new ue,Qa=new ue,Ja=new ue,Rr=new ue,ko=new ue,Mc=new ue,Ec=new ue,Cr=new ue;function Cd(a,e,i,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){Cr.fromArray(a,c);const h=l.x*Math.abs(Cr.x)+l.y*Math.abs(Cr.y)+l.z*Math.abs(Cr.z),m=e.dot(Cr),p=i.dot(Cr),x=s.dot(Cr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const XM=new sl,Xo=new ue,wd=new ue;class lp{constructor(e=new ue,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):XM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(wd)),this.expandByPoint(Xo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new ue,Dd=new ue,Tc=new ue,$a=new ue,Ud=new ue,Ac=new ue,Ld=new ue;class WM{constructor(e=new ue,i=new ue(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Dd.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Dd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=$a.dot(this.direction),m=-$a.dot(Tc),p=$a.lengthSq(),x=Math.abs(1-f*f);let g,S,y,M;if(x>0)if(g=f*m-h,S=f*h-m,M=c*x,g>=0)if(S>=-M)if(S<=M){const T=1/x;g*=T,S*=T,y=g*(g+f*S+2*h)+S*(f*g+S+2*m)+p}else S=c,g=Math.max(0,-(f*S+h)),y=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(f*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-M?(g=Math.max(0,-(-f*c+h)),S=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p):S<=M?(g=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(g=Math.max(0,-(f*c+h)),S=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p);else S=f>0?-c:c,g=Math.max(0,-(f*S+h)),y=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Dd).addScaledVector(Tc,S),y}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,f=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,f=(e.min.y-S.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,c){Ud.subVectors(i,e),Ac.subVectors(s,e),Ld.crossVectors(Ud,Ac);let f=this.direction.dot(Ld),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(Ac.crossVectors($a,Ac));if(m<0)return null;const p=h*this.direction.dot(Ud.cross($a));if(p<0||m+p>f)return null;const x=-h*$a.dot(Ld);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn{constructor(e,i,s,l,c,f,h,m,p,x,g,S,y,M,T,b){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,x,g,S,y,M,T,b)}set(e,i,s,l,c,f,h,m,p,x,g,S,y,M,T,b){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=S,v[3]=y,v[7]=M,v[11]=T,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Es.setFromMatrixColumn(e,0).length(),c=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=f*x,y=f*g,M=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+M*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=M+y*p,i[10]=f*m}else if(e.order==="YXZ"){const S=m*x,y=m*g,M=p*x,T=p*g;i[0]=S+T*h,i[4]=M*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-h,i[2]=y*h-M,i[6]=T+S*h,i[10]=f*m}else if(e.order==="ZXY"){const S=m*x,y=m*g,M=p*x,T=p*g;i[0]=S-T*h,i[4]=-f*g,i[8]=M+y*h,i[1]=y+M*h,i[5]=f*x,i[9]=T-S*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const S=f*x,y=f*g,M=h*x,T=h*g;i[0]=m*x,i[4]=M*p-y,i[8]=S*p+T,i[1]=m*g,i[5]=T*p+S,i[9]=y*p-M,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const S=f*m,y=f*p,M=h*m,T=h*p;i[0]=m*x,i[4]=T-S*g,i[8]=M*g+y,i[1]=g,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*g+M,i[10]=S-T*g}else if(e.order==="XZY"){const S=f*m,y=f*p,M=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+T,i[5]=f*x,i[9]=y*g-M,i[2]=M*g-y,i[6]=h*x,i[10]=T*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qM,e,YM)}lookAt(e,i,s){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),er.crossVectors(s,ai),er.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),er.crossVectors(s,ai)),er.normalize(),Rc.crossVectors(ai,er),l[0]=er.x,l[4]=Rc.x,l[8]=ai.x,l[1]=er.y,l[5]=Rc.y,l[9]=ai.y,l[2]=er.z,l[6]=Rc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],y=s[13],M=s[2],T=s[6],b=s[10],v=s[14],D=s[3],U=s[7],B=s[11],V=s[15],O=l[0],z=l[4],ee=l[8],w=l[12],C=l[1],G=l[5],te=l[9],oe=l[13],he=l[2],J=l[6],N=l[10],X=l[14],Y=l[3],me=l[7],_e=l[11],P=l[15];return c[0]=f*O+h*C+m*he+p*Y,c[4]=f*z+h*G+m*J+p*me,c[8]=f*ee+h*te+m*N+p*_e,c[12]=f*w+h*oe+m*X+p*P,c[1]=x*O+g*C+S*he+y*Y,c[5]=x*z+g*G+S*J+y*me,c[9]=x*ee+g*te+S*N+y*_e,c[13]=x*w+g*oe+S*X+y*P,c[2]=M*O+T*C+b*he+v*Y,c[6]=M*z+T*G+b*J+v*me,c[10]=M*ee+T*te+b*N+v*_e,c[14]=M*w+T*oe+b*X+v*P,c[3]=D*O+U*C+B*he+V*Y,c[7]=D*z+U*G+B*J+V*me,c[11]=D*ee+U*te+B*N+V*_e,c[15]=D*w+U*oe+B*X+V*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],S=e[10],y=e[14],M=e[3],T=e[7],b=e[11],v=e[15];return M*(+c*m*g-l*p*g-c*h*S+s*p*S+l*h*y-s*m*y)+T*(+i*m*y-i*p*S+c*f*S-l*f*y+l*p*x-c*m*x)+b*(+i*p*g-i*h*y-c*f*g+s*f*y+c*h*x-s*p*x)+v*(-l*h*x-i*m*g+i*h*S+l*f*g-s*f*S+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],S=e[10],y=e[11],M=e[12],T=e[13],b=e[14],v=e[15],D=g*b*p-T*S*p+T*m*y-h*b*y-g*m*v+h*S*v,U=M*S*p-x*b*p-M*m*y+f*b*y+x*m*v-f*S*v,B=x*T*p-M*g*p+M*h*y-f*T*y-x*h*v+f*g*v,V=M*g*m-x*T*m-M*h*S+f*T*S+x*h*b-f*g*b,O=i*D+s*U+l*B+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=D*z,e[1]=(T*S*c-g*b*c-T*l*y+s*b*y+g*l*v-s*S*v)*z,e[2]=(h*b*c-T*m*c+T*l*p-s*b*p-h*l*v+s*m*v)*z,e[3]=(g*m*c-h*S*c-g*l*p+s*S*p+h*l*y-s*m*y)*z,e[4]=U*z,e[5]=(x*b*c-M*S*c+M*l*y-i*b*y-x*l*v+i*S*v)*z,e[6]=(M*m*c-f*b*c-M*l*p+i*b*p+f*l*v-i*m*v)*z,e[7]=(f*S*c-x*m*c+x*l*p-i*S*p-f*l*y+i*m*y)*z,e[8]=B*z,e[9]=(M*g*c-x*T*c-M*s*y+i*T*y+x*s*v-i*g*v)*z,e[10]=(f*T*c-M*h*c+M*s*p-i*T*p-f*s*v+i*h*v)*z,e[11]=(x*h*c-f*g*c-x*s*p+i*g*p+f*s*y-i*h*y)*z,e[12]=V*z,e[13]=(x*T*l-M*g*l+M*s*S-i*T*S-x*s*b+i*g*b)*z,e[14]=(M*h*l-f*T*l-M*s*m+i*T*m+f*s*b-i*h*b)*z,e[15]=(f*g*l-x*h*l+x*s*m-i*g*m-f*s*S+i*h*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,x=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,g=h+h,S=c*p,y=c*x,M=c*g,T=f*x,b=f*g,v=h*g,D=m*p,U=m*x,B=m*g,V=s.x,O=s.y,z=s.z;return l[0]=(1-(T+v))*V,l[1]=(y+B)*V,l[2]=(M-U)*V,l[3]=0,l[4]=(y-B)*O,l[5]=(1-(S+v))*O,l[6]=(b+D)*O,l[7]=0,l[8]=(M+U)*z,l[9]=(b-D)*z,l[10]=(1-(S+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Es.set(l[0],l[1],l[2]).length();const f=Es.set(l[4],l[5],l[6]).length(),h=Es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ri.copy(this);const p=1/c,x=1/f,g=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,i.setFromRotationMatrix(Ri),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Gi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let M,T;if(m)M=c/(f-c),T=f*c/(f-c);else if(h===Gi)M=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===Jc)M=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Gi,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let M,T;if(m)M=1/(f-c),T=f/(f-c);else if(h===Gi)M=-2/(f-c),T=-(f+c)/(f-c);else if(h===Jc)M=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Es=new ue,Ri=new Sn,qM=new ue(0,0,0),YM=new ue(1,1,1),er=new ue,Rc=new ue,ai=new ue,vg=new Sn,_g=new rl;class Ma{constructor(e=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jM=0;const Sg=new ue,Ts=new rl,da=new Sn,Cc=new ue,Wo=new ue,ZM=new ue,KM=new rl,yg=new ue(1,0,0),bg=new ue(0,1,0),Mg=new ue(0,0,1),Eg={type:"added"},QM={type:"removed"},As={type:"childadded",child:null},Nd={type:"childremoved",child:null};class li extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new ue,i=new Ma,s=new rl,l=new ue(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Sn},normalMatrix:{value:new mt}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Mg,e)}translateOnAxis(e,i){return Sg.copy(e).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Cc.copy(e):Cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Wo,Cc,this.up):da.lookAt(Cc,Wo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(da),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eg),As.child=e,this.dispatchEvent(As),As.child=null):cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(QM),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eg),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,ZM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,KM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),S=f(e.skeletons),y=f(e.animations),M=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}li.DEFAULT_UP=new ue(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new ue,ha=new ue,Od=new ue,pa=new ue,Rs=new ue,Cs=new ue,Tg=new ue,Pd=new ue,Bd=new ue,zd=new ue,Fd=new un,Id=new un,Hd=new un;class wi{constructor(e=new ue,i=new ue,s=new ue){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),ha.subVectors(s,i),Od.subVectors(e,i);const f=Ci.dot(Ci),h=Ci.dot(ha),m=Ci.dot(Od),p=ha.dot(ha),x=ha.dot(Od),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const S=1/g,y=(p*m-h*x)*S,M=(f*x-h*m)*S;return c.set(1-y-M,M,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(h,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Fd.setScalar(0),Id.setScalar(0),Hd.setScalar(0),Fd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,s),Hd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Fd,c.x),f.addScaledVector(Id,c.y),f.addScaledVector(Hd,c.z),f}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),ha.subVectors(e,i),Ci.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ci.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Rs.subVectors(l,s),Cs.subVectors(c,s),Pd.subVectors(e,s);const m=Rs.dot(Pd),p=Cs.dot(Pd);if(m<=0&&p<=0)return i.copy(s);Bd.subVectors(e,l);const x=Rs.dot(Bd),g=Cs.dot(Bd);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Rs,f);zd.subVectors(e,c);const y=Rs.dot(zd),M=Cs.dot(zd);if(M>=0&&y<=M)return i.copy(c);const T=y*p-m*M;if(T<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(s).addScaledVector(Cs,h);const b=x*M-y*g;if(b<=0&&g-x>=0&&y-M>=0)return Tg.subVectors(c,l),h=(g-x)/(g-x+(y-M)),i.copy(l).addScaledVector(Tg,h);const v=1/(b+T+S);return f=T*v,h=S*v,i.copy(s).addScaledVector(Rs,f).addScaledVector(Cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Gd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class It{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ot.workingColorSpace){if(e=zM(e,1),i=Rt(i,0,1),s=Rt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Gd(f,c,e+1/3),this.g=Gd(f,c,e),this.b=Gd(f,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=ln){function s(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ln){const s=Fv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ot.workingToColorSpace(In.copy(this),e),Math.round(Rt(In.r*255,0,255))*65536+Math.round(Rt(In.g*255,0,255))*256+Math.round(Rt(In.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=x<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ln){Ot.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==ln?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(wc);const s=Md(tr.h,wc.h,i),l=Md(tr.s,wc.s,i),c=Md(tr.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new It;It.NAMES=Fv;let JM=0;class ks extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Ns,this.side=ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=ah,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(s.blending=this.blending),this.side!==ba&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ih&&(s.blendSrc=this.blendSrc),this.blendDst!==ah&&(s.blendDst=this.blendDst),this.blendEquation!==Or&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Iv extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new ue,Dc=new vt;let $M=0;class yi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=dg,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dg&&(e.usage=this.usage),e}}class Hv extends yi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Gv extends yi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class zr extends yi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let eE=0;const _i=new Sn,Vd=new li,ws=new ue,ri=new sl,qo=new sl,Rn=new ue;class Ta extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pv(e)?Gv:Hv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new mt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,s){return _i.makeTranslation(e,i,s),this.applyMatrix4(_i),this}scale(e,i,s){return _i.makeScale(e,i,s),this.applyMatrix4(_i),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new zr(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(ri.min,qo.min),ri.expandByPoint(Rn),Rn.addVectors(ri.max,qo.max),ri.expandByPoint(Rn)):(ri.expandByPoint(qo.min),ri.expandByPoint(qo.max))}ri.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Rn.fromBufferAttribute(h,p),m&&(ws.fromBufferAttribute(e,p),Rn.add(ws)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let ee=0;ee<s.count;ee++)h[ee]=new ue,m[ee]=new ue;const p=new ue,x=new ue,g=new ue,S=new vt,y=new vt,M=new vt,T=new ue,b=new ue;function v(ee,w,C){p.fromBufferAttribute(s,ee),x.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),S.fromBufferAttribute(c,ee),y.fromBufferAttribute(c,w),M.fromBufferAttribute(c,C),x.sub(p),g.sub(p),y.sub(S),M.sub(S);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(T.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(G),b.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(G),h[ee].add(T),h[w].add(T),h[C].add(T),m[ee].add(b),m[w].add(b),m[C].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let ee=0,w=D.length;ee<w;++ee){const C=D[ee],G=C.start,te=C.count;for(let oe=G,he=G+te;oe<he;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const U=new ue,B=new ue,V=new ue,O=new ue;function z(ee){V.fromBufferAttribute(l,ee),O.copy(V);const w=h[ee];U.copy(w),U.sub(V.multiplyScalar(V.dot(w))).normalize(),B.crossVectors(O,w);const G=B.dot(m[ee])<0?-1:1;f.setXYZW(ee,U.x,U.y,U.z,G)}for(let ee=0,w=D.length;ee<w;++ee){const C=D[ee],G=C.start,te=C.count;for(let oe=G,he=G+te;oe<he;oe+=3)z(e.getX(oe+0)),z(e.getX(oe+1)),z(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new ue,c=new ue,f=new ue,h=new ue,m=new ue,p=new ue,x=new ue,g=new ue;if(e)for(let S=0,y=e.count;S<y;S+=3){const M=e.getX(S+0),T=e.getX(S+1),b=e.getX(S+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),h.add(x),m.add(x),p.add(x),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,S=new p.constructor(m.length*x);let y=0,M=0;for(let T=0,b=m.length;T<b;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*x;for(let v=0;v<x;v++)S[M++]=p[y++]}return new yi(S,x,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ta,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const S=p[x],y=e(S,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,y=g.length;S<y;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new Sn,wr=new WM,Uc=new lp,Rg=new ue,Lc=new ue,Nc=new ue,Oc=new ue,kd=new ue,Pc=new ue,Cg=new ue,Bc=new ue;class Vi extends li{constructor(e=new Ta,i=new Iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(kd.fromBufferAttribute(g,e),f?Pc.addScaledVector(kd,x):Pc.addScaledVector(kd.sub(i),x))}i.add(Pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),wr.copy(e.ray).recast(e.near),!(Uc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Uc,Rg)===null||wr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Ag.copy(c).invert(),wr.copy(e.ray).applyMatrix4(Ag),!(s.boundingBox!==null&&wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,wr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=S.length;M<T;M++){const b=S[M],v=f[b.materialIndex],D=Math.max(b.start,y.start),U=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let B=D,V=U;B<V;B+=3){const O=h.getX(B),z=h.getX(B+1),ee=h.getX(B+2);l=zc(this,v,e,s,p,x,g,O,z,ee),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let b=M,v=T;b<v;b+=3){const D=h.getX(b),U=h.getX(b+1),B=h.getX(b+2);l=zc(this,f,e,s,p,x,g,D,U,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,T=S.length;M<T;M++){const b=S[M],v=f[b.materialIndex],D=Math.max(b.start,y.start),U=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let B=D,V=U;B<V;B+=3){const O=B,z=B+1,ee=B+2;l=zc(this,v,e,s,p,x,g,O,z,ee),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let b=M,v=T;b<v;b+=3){const D=b,U=b+1,B=b+2;l=zc(this,f,e,s,p,x,g,D,U,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function tE(a,e,i,s,l,c,f,h){let m;if(e.side===Cn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===ba,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:a}}function zc(a,e,i,s,l,c,f,h,m,p){a.getVertexPosition(h,Lc),a.getVertexPosition(m,Nc),a.getVertexPosition(p,Oc);const x=tE(a,e,i,s,Lc,Nc,Oc,Cg);if(x){const g=new ue;wi.getBarycoord(Cg,Lc,Nc,Oc,g),l&&(x.uv=wi.getInterpolatedAttribute(l,h,m,p,g,new vt)),c&&(x.uv1=wi.getInterpolatedAttribute(c,h,m,p,g,new vt)),f&&(x.normal=wi.getInterpolatedAttribute(f,h,m,p,g,new ue),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ue,materialIndex:0};wi.getNormal(Lc,Nc,Oc,S.normal),x.face=S,x.barycoord=g}return x}class ol extends Ta{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let S=0,y=0;M("z","y","x",-1,-1,s,i,e,f,c,0),M("z","y","x",1,-1,s,i,-e,f,c,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new zr(p,3)),this.setAttribute("normal",new zr(x,3)),this.setAttribute("uv",new zr(g,2));function M(T,b,v,D,U,B,V,O,z,ee,w){const C=B/z,G=V/ee,te=B/2,oe=V/2,he=O/2,J=z+1,N=ee+1;let X=0,Y=0;const me=new ue;for(let _e=0;_e<N;_e++){const P=_e*G-oe;for(let ae=0;ae<J;ae++){const Se=ae*C-te;me[T]=Se*D,me[b]=P*U,me[v]=he,p.push(me.x,me.y,me.z),me[T]=0,me[b]=0,me[v]=O>0?1:-1,x.push(me.x,me.y,me.z),g.push(ae/z),g.push(1-_e/ee),X+=1}}for(let _e=0;_e<ee;_e++)for(let P=0;P<z;P++){const ae=S+P+J*_e,Se=S+P+J*(_e+1),Ae=S+(P+1)+J*(_e+1),Be=S+(P+1)+J*_e;m.push(ae,Se,Be),m.push(Se,Ae,Be),Y+=6}h.addGroup(y,Y,w),y+=Y,S+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(a){const e={};for(let i=0;i<a.length;i++){const s=Hs(a[i]);for(const l in s)e[l]=s[l]}return e}function nE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Vv(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const iE={clone:Hs,merge:Gn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=rE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class kv extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ue,wg=new vt,Dg=new vt;class Si extends kv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,wg,Dg),i.subVectors(Dg,wg)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Us=1;class sE extends li{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ds,Us,e,i);l.layers=this.layers,this.add(l);const c=new Si(Ds,Us,e,i);c.layers=this.layers,this.add(c);const f=new Si(Ds,Us,e,i);f.layers=this.layers,this.add(f);const h=new Si(Ds,Us,e,i);h.layers=this.layers,this.add(h);const m=new Si(Ds,Us,e,i);m.layers=this.layers,this.add(m);const p=new Si(Ds,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,S,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Xv extends Dn{constructor(e=[],i=Bs,s,l,c,f,h,m,p,x){super(e,i,s,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oE extends Ni{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ol(5,5,5),c=new ui({name:"CubemapFromEquirect",uniforms:Hs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Cn,blending:Ui});c.uniforms.tEquirect.value=i;const f=new Vi(l,c),h=i.minFilter;return i.minFilter===Br&&(i.minFilter=wn),new sE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Fc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const b=i.getJointPose(T,s),v=this._getHandJoint(p,T);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),y=.02,M=.005;p.inputState.pinching&&S>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Wh extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cE extends Dn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=oi,x=oi,g,S){super(null,f,h,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wd=new ue,uE=new ue,fE=new mt;class Nr{constructor(e=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Wd.subVectors(s,i).cross(uE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Wd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||fE.getNormalMatrix(e),l=this.coplanarPoint(Wd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new lp,dE=new vt(.5,.5),Ic=new ue;class Wv{constructor(e=new Nr,i=new Nr,s=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],y=c[7],M=c[8],T=c[9],b=c[10],v=c[11],D=c[12],U=c[13],B=c[14],V=c[15];if(l[0].setComponents(p-f,y-x,v-M,V-D).normalize(),l[1].setComponents(p+f,y+x,v+M,V+D).normalize(),l[2].setComponents(p+h,y+g,v+T,V+U).normalize(),l[3].setComponents(p-h,y-g,v-T,V-U).normalize(),s)l[4].setComponents(m,S,b,B).normalize(),l[5].setComponents(p-m,y-S,v-b,V-B).normalize();else if(l[4].setComponents(p-m,y-S,v-b,V-B).normalize(),i===Gi)l[5].setComponents(p+m,y+S,v+b,V+B).normalize();else if(i===Jc)l[5].setComponents(m,S,b,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const i=dE.distanceTo(e.center);return Dr.radius=.7071067811865476+i,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cp extends Dn{constructor(e,i,s=rr,l,c,f,h=oi,m=oi,p,x=Qo,g=1){if(x!==Qo&&x!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,f,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qv extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends Ta{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=e/h,S=i/m,y=[],M=[],T=[],b=[];for(let v=0;v<x;v++){const D=v*S-f;for(let U=0;U<p;U++){const B=U*g-c;M.push(B,-D,0),T.push(0,0,1),b.push(U/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const U=D+p*v,B=D+p*(v+1),V=D+1+p*(v+1),O=D+1+p*v;y.push(U,B,O),y.push(B,V,O)}this.setIndex(y),this.setAttribute("position",new zr(M,3)),this.setAttribute("normal",new zr(T,3)),this.setAttribute("uv",new zr(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}class hE extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pE extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class up extends kv{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mE extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class on{constructor(e){this.value=e}clone(){return new on(this.value.clone===void 0?this.value:this.value.clone())}}function Ug(a,e,i,s){const l=gE(s);switch(i){case Uv:return a*e;case Nv:return a*e/l.components*l.byteLength;case ip:return a*e/l.components*l.byteLength;case ap:return a*e*2/l.components*l.byteLength;case rp:return a*e*2/l.components*l.byteLength;case Lv:return a*e*3/l.components*l.byteLength;case Di:return a*e*4/l.components*l.byteLength;case sp:return a*e*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xh:case vh:return Math.max(a,16)*Math.max(e,8)/4;case mh:case gh:return Math.max(a,8)*Math.max(e,8)/2;case _h:case Sh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Fh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ih:case Hh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Gh:case Vh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gE(a){switch(a){case ci:case Rv:return{byteLength:1,components:1};case Ko:case Cv:case Vs:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case rr:case ep:case va:return{byteLength:4,components:1};case wv:case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);function Yv(){let a=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function vE(a){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,S=a.createBuffer();a.bindBuffer(m,S),a.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(a.bindBuffer(p,h),g.length===0)a.bufferSubData(p,0,x);else{g.sort((y,M)=>y.start-M.start);let S=0;for(let y=1;y<g.length;y++){const M=g[S],T=g[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++S,g[S]=T)}g.length=S+1;for(let y=0,M=g.length;y<M;y++){const T=g[y];a.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var _E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
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
#endif`,yE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TE=`#ifdef USE_AOMAP
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
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
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
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VE=`#define PI 3.141592653589793
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
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",KE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
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
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#endif`,f1=`#ifdef USE_ENVMAP
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
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
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
#endif`,g1=`uniform sampler2D dfgLUT;
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
}`,v1=`
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C1=`#if defined( USE_POINTS_UV )
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
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
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
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i3=`float getShadowMask() {
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
}`,a3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r3=`#ifdef USE_SKINNING
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
#endif`,s3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o3=`#ifdef USE_SKINNING
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
#endif`,l3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d3=`#ifdef USE_TRANSMISSION
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
#endif`,h3=`#ifdef USE_TRANSMISSION
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
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_3=`uniform sampler2D t2D;
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
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`#include <common>
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
}`,T3=`#if DEPTH_PACKING == 3200
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
}`,A3=`#define DISTANCE
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
}`,R3=`#define DISTANCE
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
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D3=`uniform float scale;
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
}`,U3=`uniform vec3 diffuse;
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
}`,L3=`#include <common>
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
}`,N3=`uniform vec3 diffuse;
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
}`,O3=`#define LAMBERT
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
}`,P3=`#define LAMBERT
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
}`,B3=`#define MATCAP
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
}`,z3=`#define MATCAP
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
}`,F3=`#define NORMAL
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
}`,I3=`#define NORMAL
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
}`,H3=`#define PHONG
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
}`,G3=`#define PHONG
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
}`,V3=`#define STANDARD
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
}`,k3=`#define STANDARD
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
}`,X3=`#define TOON
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
}`,W3=`#define TOON
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
}`,q3=`uniform float size;
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
}`,Y3=`uniform vec3 diffuse;
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
}`,j3=`#include <common>
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
}`,Z3=`uniform vec3 color;
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
}`,K3=`uniform float rotation;
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
}`,Q3=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:_E,alphahash_pars_fragment:SE,alphamap_fragment:yE,alphamap_pars_fragment:bE,alphatest_fragment:ME,alphatest_pars_fragment:EE,aomap_fragment:TE,aomap_pars_fragment:AE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:wE,beginnormal_vertex:DE,bsdfs:UE,iridescence_fragment:LE,bumpmap_pars_fragment:NE,clipping_planes_fragment:OE,clipping_planes_pars_fragment:PE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:zE,color_fragment:FE,color_pars_fragment:IE,color_pars_vertex:HE,color_vertex:GE,common:VE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:XE,displacementmap_pars_vertex:WE,displacementmap_vertex:qE,emissivemap_fragment:YE,emissivemap_pars_fragment:jE,colorspace_fragment:ZE,colorspace_pars_fragment:KE,envmap_fragment:QE,envmap_common_pars_fragment:JE,envmap_pars_fragment:$E,envmap_pars_vertex:e1,envmap_physical_pars_fragment:f1,envmap_vertex:t1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:a1,fog_pars_fragment:r1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:o1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:c1,lights_pars_begin:u1,lights_toon_fragment:d1,lights_toon_pars_fragment:h1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:x1,lights_physical_pars_fragment:g1,lights_fragment_begin:v1,lights_fragment_maps:_1,lights_fragment_end:S1,logdepthbuf_fragment:y1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:M1,logdepthbuf_vertex:E1,map_fragment:T1,map_pars_fragment:A1,map_particle_fragment:R1,map_particle_pars_fragment:C1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:D1,morphinstance_vertex:U1,morphcolor_vertex:L1,morphnormal_vertex:N1,morphtarget_pars_vertex:O1,morphtarget_vertex:P1,normal_fragment_begin:B1,normal_fragment_maps:z1,normal_pars_fragment:F1,normal_pars_vertex:I1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:W1,opaque_fragment:q1,packing:Y1,premultiplied_alpha_fragment:j1,project_vertex:Z1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:e3,shadowmap_pars_vertex:t3,shadowmap_vertex:n3,shadowmask_pars_fragment:i3,skinbase_vertex:a3,skinning_pars_vertex:r3,skinning_vertex:s3,skinnormal_vertex:o3,specularmap_fragment:l3,specularmap_pars_fragment:c3,tonemapping_fragment:u3,tonemapping_pars_fragment:f3,transmission_fragment:d3,transmission_pars_fragment:h3,uv_pars_fragment:p3,uv_pars_vertex:m3,uv_vertex:x3,worldpos_vertex:g3,background_vert:v3,background_frag:_3,backgroundCube_vert:S3,backgroundCube_frag:y3,cube_vert:b3,cube_frag:M3,depth_vert:E3,depth_frag:T3,distanceRGBA_vert:A3,distanceRGBA_frag:R3,equirect_vert:C3,equirect_frag:w3,linedashed_vert:D3,linedashed_frag:U3,meshbasic_vert:L3,meshbasic_frag:N3,meshlambert_vert:O3,meshlambert_frag:P3,meshmatcap_vert:B3,meshmatcap_frag:z3,meshnormal_vert:F3,meshnormal_frag:I3,meshphong_vert:H3,meshphong_frag:G3,meshphysical_vert:V3,meshphysical_frag:k3,meshtoon_vert:X3,meshtoon_frag:W3,points_vert:q3,points_frag:Y3,shadow_vert:j3,shadow_frag:Z3,sprite_vert:K3,sprite_frag:Q3},Oe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ii={basic:{uniforms:Gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Gn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Gn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Gn([Oe.points,Oe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Gn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Gn([Oe.common,Oe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Gn([Oe.sprite,Oe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Gn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Gn([Oe.lights,Oe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ii.physical={uniforms:Gn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Hc={r:0,b:0,g:0},Ur=new Ma,J3=new Sn;function $3(a,e,i,s,l,c,f){const h=new It(0);let m=c===!0?0:1,p,x,g=null,S=0,y=null;function M(U){let B=U.isScene===!0?U.background:null;return B&&B.isTexture&&(B=(U.backgroundBlurriness>0?i:e).get(B)),B}function T(U){let B=!1;const V=M(U);V===null?v(h,m):V&&V.isColor&&(v(V,1),B=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||B)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(U,B){const V=M(B);V&&(V.isCubeTexture||V.mapping===iu)?(x===void 0&&(x=new Vi(new ol(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Hs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,z,ee){this.matrixWorld.copyPosition(ee.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ur.copy(B.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(J3.makeRotationFromEuler(Ur)),x.material.toneMapped=Ot.getTransfer(V.colorSpace)!==qt,(g!==V||S!==V.version||y!==a.toneMapping)&&(x.material.needsUpdate=!0,g=V,S=V.version,y=a.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Vi(new ll(2,2),new ui({name:"BackgroundMaterial",uniforms:Hs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(V.colorSpace)!==qt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||S!==V.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,g=V,S=V.version,y=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,B){U.getRGB(Hc,Vv(a)),s.buffers.color.setClear(Hc.r,Hc.g,Hc.b,B,f)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,B=1){h.set(U),m=B,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:T,addToRenderList:b,dispose:D}}function eT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,f=!1;function h(C,G,te,oe,he){let J=!1;const N=g(oe,te,G);c!==N&&(c=N,p(c.object)),J=y(C,oe,te,he),J&&M(C,oe,te,he),he!==null&&e.update(he,a.ELEMENT_ARRAY_BUFFER),(J||f)&&(f=!1,B(C,G,te,oe),he!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function m(){return a.createVertexArray()}function p(C){return a.bindVertexArray(C)}function x(C){return a.deleteVertexArray(C)}function g(C,G,te){const oe=te.wireframe===!0;let he=s[C.id];he===void 0&&(he={},s[C.id]=he);let J=he[G.id];J===void 0&&(J={},he[G.id]=J);let N=J[oe];return N===void 0&&(N=S(m()),J[oe]=N),N}function S(C){const G=[],te=[],oe=[];for(let he=0;he<i;he++)G[he]=0,te[he]=0,oe[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:te,attributeDivisors:oe,object:C,attributes:{},index:null}}function y(C,G,te,oe){const he=c.attributes,J=G.attributes;let N=0;const X=te.getAttributes();for(const Y in X)if(X[Y].location>=0){const _e=he[Y];let P=J[Y];if(P===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),_e===void 0||_e.attribute!==P||P&&_e.data!==P.data)return!0;N++}return c.attributesNum!==N||c.index!==oe}function M(C,G,te,oe){const he={},J=G.attributes;let N=0;const X=te.getAttributes();for(const Y in X)if(X[Y].location>=0){let _e=J[Y];_e===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor));const P={};P.attribute=_e,_e&&_e.data&&(P.data=_e.data),he[Y]=P,N++}c.attributes=he,c.attributesNum=N,c.index=oe}function T(){const C=c.newAttributes;for(let G=0,te=C.length;G<te;G++)C[G]=0}function b(C){v(C,0)}function v(C,G){const te=c.newAttributes,oe=c.enabledAttributes,he=c.attributeDivisors;te[C]=1,oe[C]===0&&(a.enableVertexAttribArray(C),oe[C]=1),he[C]!==G&&(a.vertexAttribDivisor(C,G),he[C]=G)}function D(){const C=c.newAttributes,G=c.enabledAttributes;for(let te=0,oe=G.length;te<oe;te++)G[te]!==C[te]&&(a.disableVertexAttribArray(te),G[te]=0)}function U(C,G,te,oe,he,J,N){N===!0?a.vertexAttribIPointer(C,G,te,he,J):a.vertexAttribPointer(C,G,te,oe,he,J)}function B(C,G,te,oe){T();const he=oe.attributes,J=te.getAttributes(),N=G.defaultAttributeValues;for(const X in J){const Y=J[X];if(Y.location>=0){let me=he[X];if(me===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(me=C.instanceColor)),me!==void 0){const _e=me.normalized,P=me.itemSize,ae=e.get(me);if(ae===void 0)continue;const Se=ae.buffer,Ae=ae.type,Be=ae.bytesPerElement,ie=Ae===a.INT||Ae===a.UNSIGNED_INT||me.gpuType===ep;if(me.isInterleavedBufferAttribute){const le=me.data,Ee=le.stride,Pe=me.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)v(Y.location+ke,le.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<Y.locationSize;ke++)b(Y.location+ke);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let ke=0;ke<Y.locationSize;ke++)U(Y.location+ke,P/Y.locationSize,Ae,_e,Ee*Be,(Pe+P/Y.locationSize*ke)*Be,ie)}else{if(me.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)v(Y.location+le,me.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let le=0;le<Y.locationSize;le++)b(Y.location+le);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let le=0;le<Y.locationSize;le++)U(Y.location+le,P/Y.locationSize,Ae,_e,P*Be,P/Y.locationSize*le*Be,ie)}}else if(N!==void 0){const _e=N[X];if(_e!==void 0)switch(_e.length){case 2:a.vertexAttrib2fv(Y.location,_e);break;case 3:a.vertexAttrib3fv(Y.location,_e);break;case 4:a.vertexAttrib4fv(Y.location,_e);break;default:a.vertexAttrib1fv(Y.location,_e)}}}}D()}function V(){ee();for(const C in s){const G=s[C];for(const te in G){const oe=G[te];for(const he in oe)x(oe[he].object),delete oe[he];delete G[te]}delete s[C]}}function O(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const te in G){const oe=G[te];for(const he in oe)x(oe[he].object),delete oe[he];delete G[te]}delete s[C.id]}function z(C){for(const G in s){const te=s[G];if(te[C.id]===void 0)continue;const oe=te[C.id];for(const he in oe)x(oe[he].object),delete oe[he];delete te[C.id]}}function ee(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:b,disableUnusedAttributes:D}}function tT(a,e,i){let s;function l(p){s=p}function c(p,x){a.drawArrays(s,p,x),i.update(x,s,1)}function f(p,x,g){g!==0&&(a.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];i.update(y,s,1)}function m(p,x,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)f(p[M],x[M],S[M]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let M=0;for(let T=0;T<g;T++)M+=x[T]*S[T];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function nT(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Di&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const ee=z===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ci&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==va&&!ee)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(dt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),D=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),B=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,O=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:B,vertexTextures:V,maxSamples:O}}function iT(a){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Nr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||s!==0||l;return l=S,s=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,y){const M=g.clippingPlanes,T=g.clipIntersection,b=g.clipShadows,v=a.get(g);if(!l||M===null||M.length===0||c&&!b)c?x(null):p();else{const D=c?0:s,U=D*4;let B=v.clippingState||null;m.value=B,B=x(M,S,U,y);for(let V=0;V!==U;++V)B[V]=i[V];v.clippingState=B,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,S,y,M){const T=g!==null?g.length:0;let b=null;if(T!==0){if(b=m.value,M!==!0||b===null){const v=y+T*4,D=S.matrixWorldInverse;h.getNormalMatrix(D),(b===null||b.length<v)&&(b=new Float32Array(v));for(let U=0,B=y;U!==T;++U,B+=4)f.copy(g[U]).applyMatrix4(D,h),f.normal.toArray(b,B),b[B+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function aT(a){let e=new WeakMap;function i(f,h){return h===fh?f.mapping=Bs:h===dh&&(f.mapping=zs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===fh||h===dh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new oE(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ir=4,Lg=[.125,.215,.35,.446,.526,.582],Pr=20,rT=512,Yo=new up,Ng=new It;let qd=null,Yd=0,jd=0,Zd=!1;const sT=new ue;class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=sT}=c;qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Yd,jd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Vs,format:Di,colorSpace:sr,depthBuffer:!1},l=Pg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oT(c)),this._blurMaterial=cT(c,e,i)}return l}_compileMaterial(e){const i=new Vi(new Ta,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Ng),g.toneMapping=ar,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new ol,new Iv({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let v=!1;const D=e.background;D?D.isColor&&(b.color.copy(D),e.background=null,v=!0):(b.color.copy(Ng),v=!0);for(let U=0;U<6;U++){const B=U%3;B===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):B===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const V=this._cubeSize;Ls(l,B*V,U>2?V:0,V,V),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Bs||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const D=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=lT(this._lodMax,D,U)}const f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=.05+p*.95,y=g*S,{_lodMax:M}=this,T=this._sizeLods[s],b=3*T*(s>M-ir?s-M+ir:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-i,Ls(c,b,v,3*T,2*T),l.setRenderTarget(c),l.render(h,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,Ls(e,b,v,3*T,2*T),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&cn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Pr-1),T=c/M,b=isFinite(c)?1+Math.floor(x*T):Pr;b>Pr&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Pr}`);const v=[];let D=0;for(let z=0;z<Pr;++z){const ee=z/T,w=Math.exp(-ee*ee/2);v.push(w),z===0?D+=w:z<b&&(D+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/D;S.envMap.value=e.texture,S.samples.value=b,S.weights.value=v,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=M,S.mipInt.value=U-s;const B=this._sizeLods[l],V=3*B*(l>U-ir?l-U+ir:0),O=4*(this._cubeSize-B);Ls(i,V,O,3*B,2*B),m.setRenderTarget(i),m.render(g,Yo)}}function oT(a){const e=[],i=[],s=[];let l=a;const c=a-ir+1+Lg.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>a-ir?m=Lg[f-a+ir-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,T=3,b=2,v=1,D=new Float32Array(T*M*y),U=new Float32Array(b*M*y),B=new Float32Array(v*M*y);for(let O=0;O<y;O++){const z=O%3*2/3-1,ee=O>2?0:-1,w=[z,ee,0,z+2/3,ee,0,z+2/3,ee+1,0,z,ee,0,z+2/3,ee+1,0,z,ee+1,0];D.set(w,T*M*O),U.set(S,b*M*O);const C=[O,O,O,O,O,O];B.set(C,v*M*O)}const V=new Ta;V.setAttribute("position",new yi(D,T)),V.setAttribute("uv",new yi(U,b)),V.setAttribute("faceIndex",new yi(B,v)),s.push(new Vi(V,null)),l>ir&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Pg(a,e,i){const s=new Ni(a,e,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ls(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function lT(a,e,i){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function cT(a,e,i){const s=new Float32Array(Pr),l=new ue(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Bg(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function zg(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function uT(a){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===fh||m===dh,x=m===Bs||m===zs;if(p||x){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Og(a)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Og(a)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function fT(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Jo("WebGLRenderer: "+s+" extension not supported."),l}}}function dT(a,e,i,s){const l={},c=new WeakMap;function f(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const M in S.attributes)e.remove(S.attributes[M]);S.removeEventListener("dispose",f),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],a.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,M=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let U=0,B=D.length;U<B;U+=3){const V=D[U+0],O=D[U+1],z=D[U+2];S.push(V,O,O,z,z,V)}}else if(M!==void 0){const D=M.array;T=M.version;for(let U=0,B=D.length/3-1;U<B;U+=3){const V=U+0,O=U+1,z=U+2;S.push(V,O,O,z,z,V)}}else return;const b=new(Pv(S)?Gv:Hv)(S,1);b.version=T;const v=c.get(g);v&&e.remove(v),c.set(g,b)}function x(g){const S=c.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function hT(a,e,i){let s;function l(S){s=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function m(S,y){a.drawElements(s,y,c,S*f),i.update(y,s,1)}function p(S,y,M){M!==0&&(a.drawElementsInstanced(s,y,c,S*f,M),i.update(y,s,M))}function x(S,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,M);let b=0;for(let v=0;v<M;v++)b+=y[v];i.update(b,s,1)}function g(S,y,M,T){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<S.length;v++)p(S[v]/f,y[v],T[v]);else{b.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,T,0,M);let v=0;for(let D=0;D<M;D++)v+=y[D]*T[D];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function pT(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:cn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mT(a,e,i){const s=new WeakMap,l=new un;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(h);if(S===void 0||S.count!==g){let C=function(){ee.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let B=0;M===!0&&(B=1),T===!0&&(B=2),b===!0&&(B=3);let V=h.attributes.position.count*B,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*O*4*g),ee=new Bv(z,V,O,g);ee.type=va,ee.needsUpdate=!0;const w=B*4;for(let G=0;G<g;G++){const te=v[G],oe=D[G],he=U[G],J=V*O*4*G;for(let N=0;N<te.count;N++){const X=N*w;M===!0&&(l.fromBufferAttribute(te,N),z[J+X+0]=l.x,z[J+X+1]=l.y,z[J+X+2]=l.z,z[J+X+3]=0),T===!0&&(l.fromBufferAttribute(oe,N),z[J+X+4]=l.x,z[J+X+5]=l.y,z[J+X+6]=l.z,z[J+X+7]=0),b===!0&&(l.fromBufferAttribute(he,N),z[J+X+8]=l.x,z[J+X+9]=l.y,z[J+X+10]=l.z,z[J+X+11]=he.itemSize===4?l.w:1)}}S={count:g,texture:ee,size:new vt(V,O)},s.set(h,S),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const T=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",S.size)}return{update:c}}function xT(a,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const jv=new Dn,Fg=new cp(1,1),Zv=new Bv,Kv=new kM,Qv=new Xv,Ig=[],Hg=[],Gg=new Float32Array(16),Vg=new Float32Array(9),kg=new Float32Array(4);function Xs(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=Ig[l];if(c===void 0&&(c=new Float32Array(l),Ig[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,a[f].toArray(c,h)}return c}function yn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function bn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function ru(a,e){let i=Hg[e];i===void 0&&(i=new Int32Array(e),Hg[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function gT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function vT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;a.uniform2fv(this.addr,e),bn(i,e)}}function _T(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;a.uniform3fv(this.addr,e),bn(i,e)}}function ST(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;a.uniform4fv(this.addr,e),bn(i,e)}}function yT(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,s))return;kg.set(s),a.uniformMatrix2fv(this.addr,!1,kg),bn(i,s)}}function bT(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,s))return;Vg.set(s),a.uniformMatrix3fv(this.addr,!1,Vg),bn(i,s)}}function MT(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,s))return;Gg.set(s),a.uniformMatrix4fv(this.addr,!1,Gg),bn(i,s)}}function ET(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function TT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;a.uniform2iv(this.addr,e),bn(i,e)}}function AT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;a.uniform3iv(this.addr,e),bn(i,e)}}function RT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;a.uniform4iv(this.addr,e),bn(i,e)}}function CT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function wT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;a.uniform2uiv(this.addr,e),bn(i,e)}}function DT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;a.uniform3uiv(this.addr,e),bn(i,e)}}function UT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;a.uniform4uiv(this.addr,e),bn(i,e)}}function LT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(Fg.compareFunction=Ov,c=Fg):c=jv,i.setTexture2D(e||c,l)}function NT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Kv,l)}function OT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Qv,l)}function PT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Zv,l)}function BT(a){switch(a){case 5126:return gT;case 35664:return vT;case 35665:return _T;case 35666:return ST;case 35674:return yT;case 35675:return bT;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function zT(a,e){a.uniform1fv(this.addr,e)}function FT(a,e){const i=Xs(e,this.size,2);a.uniform2fv(this.addr,i)}function IT(a,e){const i=Xs(e,this.size,3);a.uniform3fv(this.addr,i)}function HT(a,e){const i=Xs(e,this.size,4);a.uniform4fv(this.addr,i)}function GT(a,e){const i=Xs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function VT(a,e){const i=Xs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function kT(a,e){const i=Xs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function XT(a,e){a.uniform1iv(this.addr,e)}function WT(a,e){a.uniform2iv(this.addr,e)}function qT(a,e){a.uniform3iv(this.addr,e)}function YT(a,e){a.uniform4iv(this.addr,e)}function jT(a,e){a.uniform1uiv(this.addr,e)}function ZT(a,e){a.uniform2uiv(this.addr,e)}function KT(a,e){a.uniform3uiv(this.addr,e)}function QT(a,e){a.uniform4uiv(this.addr,e)}function JT(a,e,i){const s=this.cache,l=e.length,c=ru(i,l);yn(s,c)||(a.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||jv,c[f])}function $T(a,e,i){const s=this.cache,l=e.length,c=ru(i,l);yn(s,c)||(a.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Kv,c[f])}function eA(a,e,i){const s=this.cache,l=e.length,c=ru(i,l);yn(s,c)||(a.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Qv,c[f])}function tA(a,e,i){const s=this.cache,l=e.length,c=ru(i,l);yn(s,c)||(a.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Zv,c[f])}function nA(a){switch(a){case 5126:return zT;case 35664:return FT;case 35665:return IT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}class iA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class aA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nA(i.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function Xg(a,e){a.seq.push(e),a.map[e.id]=e}function sA(a,e,i){const s=a.name,l=s.length;for(Kd.lastIndex=0;;){const c=Kd.exec(s),f=Kd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Xg(i,p===void 0?new iA(h,a,e):new aA(h,a,e));break}else{let g=i.map[h];g===void 0&&(g=new rA(h),Xg(i,g)),i=g}}}class jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);sA(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Wg(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const oA=37297;let lA=0;function cA(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const qg=new mt;function uA(a){Ot._getMatrix(qg,Ot.workingColorSpace,a);const e=`mat3( ${qg.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(a)){case Qc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Yg(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+cA(a.getShaderSource(e),h)}else return c}function fA(a,e){const i=uA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function dA(a,e){let i;switch(e){case gM:i="Linear";break;case vM:i="Reinhard";break;case _M:i="Cineon";break;case SM:i="ACESFilmic";break;case bM:i="AgX";break;case MM:i="Neutral";break;case yM:i="Custom";break;default:dt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new ue;function hA(){Ot.getLuminanceCoefficients(Gc);const a=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function mA(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function xA(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:h}}return i}function jo(a){return a!==""}function jg(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(a){return a.replace(gA,_A)}const vA=new Map;function _A(a,e){let i=xt[e];if(i===void 0){const s=vA.get(e);if(s!==void 0)i=xt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return qh(i)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(a){return a.replace(SA,yA)}function yA(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Qg(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bA(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Kb?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xa&&(e="SHADOWMAP_TYPE_VSM"),e}function MA(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EA(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function TA(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Tv:e="ENVMAP_BLENDING_MULTIPLY";break;case mM:e="ENVMAP_BLENDING_MIX";break;case xM:e="ENVMAP_BLENDING_ADD";break}return e}function AA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RA(a,e,i,s){const l=a.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=bA(i),p=MA(i),x=EA(i),g=TA(i),S=AA(i),y=pA(i),M=mA(c),T=l.createProgram();let b,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(jo).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(b=[Qg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[Qg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ar?"#define TONE_MAPPING":"",i.toneMapping!==ar?xt.tonemapping_pars_fragment:"",i.toneMapping!==ar?dA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,fA("linearToOutputTexel",i.outputColorSpace),hA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),f=qh(f),f=jg(f,i),f=Zg(f,i),h=qh(h),h=jg(h,i),h=Zg(h,i),f=Kg(f),h=Kg(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=D+b+f,B=D+v+h,V=Wg(l,l.VERTEX_SHADER,U),O=Wg(l,l.FRAGMENT_SHADER,B);l.attachShader(T,V),l.attachShader(T,O),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(G){if(a.debug.checkShaderErrors){const te=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(V)||"",he=l.getShaderInfoLog(O)||"",J=te.trim(),N=oe.trim(),X=he.trim();let Y=!0,me=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,V,O);else{const _e=Yg(l,V,"vertex"),P=Yg(l,O,"fragment");cn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+_e+`
`+P)}else J!==""?dt("WebGLProgram: Program Info Log:",J):(N===""||X==="")&&(me=!1);me&&(G.diagnostics={runnable:Y,programLog:J,vertexShader:{log:N,prefix:b},fragmentShader:{log:X,prefix:v}})}l.deleteShader(V),l.deleteShader(O),ee=new jc(l,T),w=xA(l,T)}let ee;this.getUniforms=function(){return ee===void 0&&z(this),ee};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,oA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=O,this}let CA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new DA(e),i.set(e,s)),s}}class DA{constructor(e){this.id=CA++,this.code=e,this.usedTimes=0}}function UA(a,e,i,s,l,c,f){const h=new zv,m=new wA,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,C,G,te,oe){const he=te.fog,J=oe.geometry,N=w.isMeshStandardMaterial?te.environment:null,X=(w.isMeshStandardMaterial?i:e).get(w.envMap||N),Y=X&&X.mapping===iu?X.image.height:null,me=M[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&dt("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,P=_e!==void 0?_e.length:0;let ae=0;J.morphAttributes.position!==void 0&&(ae=1),J.morphAttributes.normal!==void 0&&(ae=2),J.morphAttributes.color!==void 0&&(ae=3);let Se,Ae,Be,ie;if(me){const Dt=Ii[me];Se=Dt.vertexShader,Ae=Dt.fragmentShader}else Se=w.vertexShader,Ae=w.fragmentShader,m.update(w),Be=m.getVertexShaderID(w),ie=m.getFragmentShaderID(w);const le=a.getRenderTarget(),Ee=a.state.buffers.depth.getReversed(),Pe=oe.isInstancedMesh===!0,ke=oe.isBatchedMesh===!0,lt=!!w.map,en=!!w.matcap,ut=!!X,_t=!!w.aoMap,I=!!w.lightMap,He=!!w.bumpMap,Ye=!!w.normalMap,gt=!!w.displacementMap,Ne=!!w.emissiveMap,Bt=!!w.metalnessMap,Ze=!!w.roughnessMap,ot=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,K=w.iridescence>0,xe=w.sheen>0,ye=w.transmission>0,ce=ot&&!!w.anisotropyMap,Ke=L&&!!w.clearcoatMap,Le=L&&!!w.clearcoatNormalMap,et=L&&!!w.clearcoatRoughnessMap,je=K&&!!w.iridescenceMap,be=K&&!!w.iridescenceThicknessMap,Te=xe&&!!w.sheenColorMap,Qe=xe&&!!w.sheenRoughnessMap,We=!!w.specularMap,Fe=!!w.specularColorMap,rt=!!w.specularIntensityMap,H=ye&&!!w.transmissionMap,De=ye&&!!w.thicknessMap,Ce=!!w.gradientMap,we=!!w.alphaMap,Me=w.alphaTest>0,ve=!!w.alphaHash,Ge=!!w.extensions;let st=ar;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(st=a.toneMapping);const Vt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:Se,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ke,batchingColor:ke&&oe._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&oe.instanceColor!==null,instancingMorph:Pe&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:le===null?a.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:sr,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:en,envMap:ut,envMapMode:ut&&X.mapping,envMapCubeUVHeight:Y,aoMap:_t,lightMap:I,bumpMap:He,normalMap:Ye,displacementMap:S&&gt,emissiveMap:Ne,normalMapObjectSpace:Ye&&w.normalMapType===RM,normalMapTangentSpace:Ye&&w.normalMapType===AM,metalnessMap:Bt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:ce,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Le,clearcoatRoughnessMap:et,dispersion:E,iridescence:K,iridescenceMap:je,iridescenceThicknessMap:be,sheen:xe,sheenColorMap:Te,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:Fe,specularIntensityMap:rt,transmission:ye,transmissionMap:H,thicknessMap:De,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Ns&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:Me,alphaHash:ve,combine:w.combine,mapUv:lt&&T(w.map.channel),aoMapUv:_t&&T(w.aoMap.channel),lightMapUv:I&&T(w.lightMap.channel),bumpMapUv:He&&T(w.bumpMap.channel),normalMapUv:Ye&&T(w.normalMap.channel),displacementMapUv:gt&&T(w.displacementMap.channel),emissiveMapUv:Ne&&T(w.emissiveMap.channel),metalnessMapUv:Bt&&T(w.metalnessMap.channel),roughnessMapUv:Ze&&T(w.roughnessMap.channel),anisotropyMapUv:ce&&T(w.anisotropyMap.channel),clearcoatMapUv:Ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&T(w.sheenRoughnessMap.channel),specularMapUv:We&&T(w.specularMap.channel),specularColorMapUv:Fe&&T(w.specularColorMap.channel),specularIntensityMapUv:rt&&T(w.specularIntensityMap.channel),transmissionMapUv:H&&T(w.transmissionMap.channel),thicknessMapUv:De&&T(w.thicknessMap.channel),alphaMapUv:we&&T(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ye||ot),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!J.attributes.uv&&(lt||we),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ee,skinning:oe.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:st,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Ot.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:Ne&&w.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===si,flipSided:w.side===Cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(D(C,w),U(C,w),C.push(a.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function D(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const C=M[w.type];let G;if(C){const te=Ii[C];G=iE.clone(te.uniforms)}else G=w.uniforms;return G}function V(w,C){let G;for(let te=0,oe=x.length;te<oe;te++){const he=x[te];if(he.cacheKey===C){G=he,++G.usedTimes;break}}return G===void 0&&(G=new RA(a,C,w,c),x.push(G)),G}function O(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function z(w){m.remove(w)}function ee(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:B,acquireProgram:V,releaseProgram:O,releaseShaderCache:z,programs:x,dispose:ee}}function LA(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,m){a.get(f)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function NA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Jg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function $g(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,S,y,M,T,b){let v=a[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:M,renderOrder:g.renderOrder,z:T,group:b},a[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=T,v.group=b),e++,v}function h(g,S,y,M,T,b){const v=f(g,S,y,M,T,b);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,S,y,M,T,b){const v=f(g,S,y,M,T,b);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||NA),s.length>1&&s.sort(S||Jg),l.length>1&&l.sort(S||Jg)}function x(){for(let g=e,S=a.length;g<S;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function OA(){let a=new WeakMap;function e(s,l){const c=a.get(s);let f;return c===void 0?(f=new $g,a.set(s,[f])):l>=c.length?(f=new $g,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function PA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ue,color:new It};break;case"SpotLight":i={position:new ue,direction:new ue,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new It,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new It,groundColor:new It};break;case"RectAreaLight":i={color:new It,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return a[e.id]=i,i}}}function BA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let zA=0;function FA(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function IA(a){const e=new PA,i=BA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ue);const l=new ue,c=new Sn,f=new Sn;function h(p){let x=0,g=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,M=0,T=0,b=0,v=0,D=0,U=0,B=0,V=0,O=0,z=0;p.sort(FA);for(let w=0,C=p.length;w<C;w++){const G=p[w],te=G.color,oe=G.intensity,he=G.distance,J=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=te.r*oe,g+=te.g*oe,S+=te.b*oe;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],oe);z++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,Y=i.get(G);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=J,s.directionalShadowMatrix[y]=G.shadow.matrix,D++}s.directional[y]=N,y++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(te).multiplyScalar(oe),N.distance=he,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[T]=N;const X=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,X.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[T]=X.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,s.spotShadow[T]=Y,s.spotShadowMap[T]=J,B++}T++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(te).multiplyScalar(oe),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[b]=N,b++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const X=G.shadow,Y=i.get(G);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,s.pointShadow[M]=Y,s.pointShadowMap[M]=J,s.pointShadowMatrix[M]=G.shadow.matrix,U++}s.point[M]=N,M++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(oe),N.groundColor.copy(G.groundColor).multiplyScalar(oe),s.hemi[v]=N,v++}}b>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const ee=s.hash;(ee.directionalLength!==y||ee.pointLength!==M||ee.spotLength!==T||ee.rectAreaLength!==b||ee.hemiLength!==v||ee.numDirectionalShadows!==D||ee.numPointShadows!==U||ee.numSpotShadows!==B||ee.numSpotMaps!==V||ee.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=b,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=B+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=z,ee.directionalLength=y,ee.pointLength=M,ee.spotLength=T,ee.rectAreaLength=b,ee.hemiLength=v,ee.numDirectionalShadows=D,ee.numPointShadows=U,ee.numSpotShadows=B,ee.numSpotMaps=V,ee.numLightProbes=z,s.version=zA++)}function m(p,x){let g=0,S=0,y=0,M=0,T=0;const b=x.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const U=p[v];if(U.isDirectionalLight){const B=s.directional[g];B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),g++}else if(U.isSpotLight){const B=s.spot[y];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const B=s.rectArea[M];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),f.identity(),c.copy(U.matrixWorld),c.premultiply(b),f.extractRotation(c),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),B.halfWidth.applyMatrix4(f),B.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const B=s.point[S];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),S++}else if(U.isHemisphereLight){const B=s.hemi[T];B.direction.setFromMatrixPosition(U.matrixWorld),B.direction.transformDirection(b),T++}}}return{setup:h,setupView:m,state:s}}function ev(a){const e=new IA(a),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function HA(a){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new ev(a),e.set(l,[h])):c>=f.length?(h=new ev(a),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
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
}`;function kA(a,e,i){let s=new Wv;const l=new vt,c=new vt,f=new un,h=new hE({depthPacking:TM}),m=new pE,p={},x=i.maxTextureSize,g={[ba]:Cn,[Cn]:ba,[si]:si},S=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ta;M.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Vi(M,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ev;let v=this.type;this.render=function(O,z,ee){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;const w=a.getRenderTarget(),C=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),te=a.state;te.setBlending(Ui),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const oe=v!==xa&&this.type===xa,he=v===xa&&this.type!==xa;for(let J=0,N=O.length;J<N;J++){const X=O[J],Y=X.shadow;if(Y===void 0){dt("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const me=Y.getFrameExtents();if(l.multiply(me),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/me.x),l.x=c.x*me.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/me.y),l.y=c.y*me.y,Y.mapSize.y=c.y)),Y.map===null||oe===!0||he===!0){const P=this.type!==xa?{minFilter:oi,magFilter:oi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ni(l.x,l.y,P),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const _e=Y.getViewportCount();for(let P=0;P<_e;P++){const ae=Y.getViewport(P);f.set(c.x*ae.x,c.y*ae.y,c.x*ae.z,c.y*ae.w),te.viewport(f),Y.updateMatrices(X,P),s=Y.getFrustum(),B(z,ee,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===xa&&D(Y,ee),Y.needsUpdate=!1}v=this.type,b.needsUpdate=!1,a.setRenderTarget(w,C,G)};function D(O,z){const ee=e.update(T);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ni(l.x,l.y)),S.uniforms.shadow_pass.value=O.map.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(z,null,ee,S,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(z,null,ee,y,T,null)}function U(O,z,ee,w){let C=null;const G=ee.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)C=G;else if(C=ee.isPointLight===!0?m:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const te=C.uuid,oe=z.uuid;let he=p[te];he===void 0&&(he={},p[te]=he);let J=he[oe];J===void 0&&(J=C.clone(),he[oe]=J,z.addEventListener("dispose",V)),C=J}if(C.visible=z.visible,C.wireframe=z.wireframe,w===xa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,ee.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=a.properties.get(C);te.light=ee}return C}function B(O,z,ee,w,C){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===xa)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,O.matrixWorld);const oe=e.update(O),he=O.material;if(Array.isArray(he)){const J=oe.groups;for(let N=0,X=J.length;N<X;N++){const Y=J[N],me=he[Y.materialIndex];if(me&&me.visible){const _e=U(O,me,w,C);O.onBeforeShadow(a,O,z,ee,oe,_e,Y),a.renderBufferDirect(ee,null,oe,_e,O,Y),O.onAfterShadow(a,O,z,ee,oe,_e,Y)}}}else if(he.visible){const J=U(O,he,w,C);O.onBeforeShadow(a,O,z,ee,oe,J,null),a.renderBufferDirect(ee,null,oe,J,O,null),O.onAfterShadow(a,O,z,ee,oe,J,null)}}const te=O.children;for(let oe=0,he=te.length;oe<he;oe++)B(te[oe],z,ee,w,C)}function V(O){O.target.removeEventListener("dispose",V);for(const ee in p){const w=p[ee],C=O.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const XA={[rh]:Kc,[sh]:ch,[oh]:uh,[Ps]:lh,[Kc]:rh,[ch]:sh,[uh]:oh,[lh]:Ps};function WA(a,e){function i(){let H=!1;const De=new un;let Ce=null;const we=new un(0,0,0,0);return{setMask:function(Me){Ce!==Me&&!H&&(a.colorMask(Me,Me,Me,Me),Ce=Me)},setLocked:function(Me){H=Me},setClear:function(Me,ve,Ge,st,Vt){Vt===!0&&(Me*=st,ve*=st,Ge*=st),De.set(Me,ve,Ge,st),we.equals(De)===!1&&(a.clearColor(Me,ve,Ge,st),we.copy(De))},reset:function(){H=!1,Ce=null,we.set(-1,0,0,0)}}}function s(){let H=!1,De=!1,Ce=null,we=null,Me=null;return{setReversed:function(ve){if(De!==ve){const Ge=e.get("EXT_clip_control");ve?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),De=ve;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return De},setTest:function(ve){ve?le(a.DEPTH_TEST):Ee(a.DEPTH_TEST)},setMask:function(ve){Ce!==ve&&!H&&(a.depthMask(ve),Ce=ve)},setFunc:function(ve){if(De&&(ve=XA[ve]),we!==ve){switch(ve){case rh:a.depthFunc(a.NEVER);break;case Kc:a.depthFunc(a.ALWAYS);break;case sh:a.depthFunc(a.LESS);break;case Ps:a.depthFunc(a.LEQUAL);break;case oh:a.depthFunc(a.EQUAL);break;case lh:a.depthFunc(a.GEQUAL);break;case ch:a.depthFunc(a.GREATER);break;case uh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}we=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Me!==ve&&(De&&(ve=1-ve),a.clearDepth(ve),Me=ve)},reset:function(){H=!1,Ce=null,we=null,Me=null,De=!1}}}function l(){let H=!1,De=null,Ce=null,we=null,Me=null,ve=null,Ge=null,st=null,Vt=null;return{setTest:function(Dt){H||(Dt?le(a.STENCIL_TEST):Ee(a.STENCIL_TEST))},setMask:function(Dt){De!==Dt&&!H&&(a.stencilMask(Dt),De=Dt)},setFunc:function(Dt,Bn,Zn){(Ce!==Dt||we!==Bn||Me!==Zn)&&(a.stencilFunc(Dt,Bn,Zn),Ce=Dt,we=Bn,Me=Zn)},setOp:function(Dt,Bn,Zn){(ve!==Dt||Ge!==Bn||st!==Zn)&&(a.stencilOp(Dt,Bn,Zn),ve=Dt,Ge=Bn,st=Zn)},setLocked:function(Dt){H=Dt},setClear:function(Dt){Vt!==Dt&&(a.clearStencil(Dt),Vt=Dt)},reset:function(){H=!1,De=null,Ce=null,we=null,Me=null,ve=null,Ge=null,st=null,Vt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,y=[],M=null,T=!1,b=null,v=null,D=null,U=null,B=null,V=null,O=null,z=new It(0,0,0),ee=0,w=!1,C=null,G=null,te=null,oe=null,he=null;const J=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=X>=2);let me=null,_e={};const P=a.getParameter(a.SCISSOR_BOX),ae=a.getParameter(a.VIEWPORT),Se=new un().fromArray(P),Ae=new un().fromArray(ae);function Be(H,De,Ce,we){const Me=new Uint8Array(4),ve=a.createTexture();a.bindTexture(H,ve),a.texParameteri(H,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(H,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ge=0;Ge<Ce;Ge++)H===a.TEXTURE_3D||H===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,we,0,a.RGBA,a.UNSIGNED_BYTE,Me):a.texImage2D(De+Ge,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Me);return ve}const ie={};ie[a.TEXTURE_2D]=Be(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=Be(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[a.TEXTURE_2D_ARRAY]=Be(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=Be(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),le(a.DEPTH_TEST),f.setFunc(Ps),He(!1),Ye(og),le(a.CULL_FACE),_t(Ui);function le(H){x[H]!==!0&&(a.enable(H),x[H]=!0)}function Ee(H){x[H]!==!1&&(a.disable(H),x[H]=!1)}function Pe(H,De){return g[H]!==De?(a.bindFramebuffer(H,De),g[H]=De,H===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=De),H===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=De),!0):!1}function ke(H,De){let Ce=y,we=!1;if(H){Ce=S.get(De),Ce===void 0&&(Ce=[],S.set(De,Ce));const Me=H.textures;if(Ce.length!==Me.length||Ce[0]!==a.COLOR_ATTACHMENT0){for(let ve=0,Ge=Me.length;ve<Ge;ve++)Ce[ve]=a.COLOR_ATTACHMENT0+ve;Ce.length=Me.length,we=!0}}else Ce[0]!==a.BACK&&(Ce[0]=a.BACK,we=!0);we&&a.drawBuffers(Ce)}function lt(H){return M!==H?(a.useProgram(H),M=H,!0):!1}const en={[Or]:a.FUNC_ADD,[Jb]:a.FUNC_SUBTRACT,[$b]:a.FUNC_REVERSE_SUBTRACT};en[eM]=a.MIN,en[tM]=a.MAX;const ut={[nM]:a.ZERO,[iM]:a.ONE,[aM]:a.SRC_COLOR,[ih]:a.SRC_ALPHA,[uM]:a.SRC_ALPHA_SATURATE,[lM]:a.DST_COLOR,[sM]:a.DST_ALPHA,[rM]:a.ONE_MINUS_SRC_COLOR,[ah]:a.ONE_MINUS_SRC_ALPHA,[cM]:a.ONE_MINUS_DST_COLOR,[oM]:a.ONE_MINUS_DST_ALPHA,[fM]:a.CONSTANT_COLOR,[dM]:a.ONE_MINUS_CONSTANT_COLOR,[hM]:a.CONSTANT_ALPHA,[pM]:a.ONE_MINUS_CONSTANT_ALPHA};function _t(H,De,Ce,we,Me,ve,Ge,st,Vt,Dt){if(H===Ui){T===!0&&(Ee(a.BLEND),T=!1);return}if(T===!1&&(le(a.BLEND),T=!0),H!==Qb){if(H!==b||Dt!==w){if((v!==Or||B!==Or)&&(a.blendEquation(a.FUNC_ADD),v=Or,B=Or),Dt)switch(H){case Ns:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lg:a.blendFunc(a.ONE,a.ONE);break;case cg:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ug:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:cn("WebGLState: Invalid blending: ",H);break}else switch(H){case Ns:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lg:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case cg:cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:cn("WebGLState: Invalid blending: ",H);break}D=null,U=null,V=null,O=null,z.set(0,0,0),ee=0,b=H,w=Dt}return}Me=Me||De,ve=ve||Ce,Ge=Ge||we,(De!==v||Me!==B)&&(a.blendEquationSeparate(en[De],en[Me]),v=De,B=Me),(Ce!==D||we!==U||ve!==V||Ge!==O)&&(a.blendFuncSeparate(ut[Ce],ut[we],ut[ve],ut[Ge]),D=Ce,U=we,V=ve,O=Ge),(st.equals(z)===!1||Vt!==ee)&&(a.blendColor(st.r,st.g,st.b,Vt),z.copy(st),ee=Vt),b=H,w=!1}function I(H,De){H.side===si?Ee(a.CULL_FACE):le(a.CULL_FACE);let Ce=H.side===Cn;De&&(Ce=!Ce),He(Ce),H.blending===Ns&&H.transparent===!1?_t(Ui):_t(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),c.setMask(H.colorWrite);const we=H.stencilWrite;h.setTest(we),we&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(a.SAMPLE_ALPHA_TO_COVERAGE):Ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function He(H){C!==H&&(H?a.frontFace(a.CW):a.frontFace(a.CCW),C=H)}function Ye(H){H!==jb?(le(a.CULL_FACE),H!==G&&(H===og?a.cullFace(a.BACK):H===Zb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ee(a.CULL_FACE),G=H}function gt(H){H!==te&&(N&&a.lineWidth(H),te=H)}function Ne(H,De,Ce){H?(le(a.POLYGON_OFFSET_FILL),(oe!==De||he!==Ce)&&(a.polygonOffset(De,Ce),oe=De,he=Ce)):Ee(a.POLYGON_OFFSET_FILL)}function Bt(H){H?le(a.SCISSOR_TEST):Ee(a.SCISSOR_TEST)}function Ze(H){H===void 0&&(H=a.TEXTURE0+J-1),me!==H&&(a.activeTexture(H),me=H)}function ot(H,De,Ce){Ce===void 0&&(me===null?Ce=a.TEXTURE0+J-1:Ce=me);let we=_e[Ce];we===void 0&&(we={type:void 0,texture:void 0},_e[Ce]=we),(we.type!==H||we.texture!==De)&&(me!==Ce&&(a.activeTexture(Ce),me=Ce),a.bindTexture(H,De||ie[H]),we.type=H,we.texture=De)}function L(){const H=_e[me];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{a.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{a.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function xe(){try{a.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{a.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ce(){try{a.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ke(){try{a.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Le(){try{a.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function et(){try{a.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function je(){try{a.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function be(){try{a.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Te(H){Se.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function Qe(H){Ae.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),Ae.copy(H))}function We(H,De){let Ce=p.get(De);Ce===void 0&&(Ce=new WeakMap,p.set(De,Ce));let we=Ce.get(H);we===void 0&&(we=a.getUniformBlockIndex(De,H.name),Ce.set(H,we))}function Fe(H,De){const we=p.get(De).get(H);m.get(De)!==we&&(a.uniformBlockBinding(De,we,H.__bindingPointIndex),m.set(De,we))}function rt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),x={},me=null,_e={},g={},S=new WeakMap,y=[],M=null,T=!1,b=null,v=null,D=null,U=null,B=null,V=null,O=null,z=new It(0,0,0),ee=0,w=!1,C=null,G=null,te=null,oe=null,he=null,Se.set(0,0,a.canvas.width,a.canvas.height),Ae.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:le,disable:Ee,bindFramebuffer:Pe,drawBuffers:ke,useProgram:lt,setBlending:_t,setMaterial:I,setFlipSided:He,setCullFace:Ye,setLineWidth:gt,setPolygonOffset:Ne,setScissorTest:Bt,activeTexture:Ze,bindTexture:ot,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:K,texImage2D:je,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Le,texStorage3D:et,texSubImage2D:xe,texSubImage3D:ye,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ke,scissor:Te,viewport:Qe,reset:rt}}function qA(a,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new vt,x=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return y?new OffscreenCanvas(L,E):$c("canvas")}function T(L,E,K){let xe=1;const ye=ot(L);if((ye.width>K||ye.height>K)&&(xe=K/Math.max(ye.width,ye.height)),xe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(xe*ye.width),Ke=Math.floor(xe*ye.height);g===void 0&&(g=M(ce,Ke));const Le=E?M(ce,Ke):g;return Le.width=ce,Le.height=Ke,Le.getContext("2d").drawImage(L,0,0,ce,Ke),dt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ce+"x"+Ke+")."),Le}else return"data"in L&&dt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function b(L){return L.generateMipmaps}function v(L){a.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(L,E,K,xe,ye=!1){if(L!==null){if(a[L]!==void 0)return a[L];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=E;if(E===a.RED&&(K===a.FLOAT&&(ce=a.R32F),K===a.HALF_FLOAT&&(ce=a.R16F),K===a.UNSIGNED_BYTE&&(ce=a.R8)),E===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.R8UI),K===a.UNSIGNED_SHORT&&(ce=a.R16UI),K===a.UNSIGNED_INT&&(ce=a.R32UI),K===a.BYTE&&(ce=a.R8I),K===a.SHORT&&(ce=a.R16I),K===a.INT&&(ce=a.R32I)),E===a.RG&&(K===a.FLOAT&&(ce=a.RG32F),K===a.HALF_FLOAT&&(ce=a.RG16F),K===a.UNSIGNED_BYTE&&(ce=a.RG8)),E===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.RG8UI),K===a.UNSIGNED_SHORT&&(ce=a.RG16UI),K===a.UNSIGNED_INT&&(ce=a.RG32UI),K===a.BYTE&&(ce=a.RG8I),K===a.SHORT&&(ce=a.RG16I),K===a.INT&&(ce=a.RG32I)),E===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.RGB8UI),K===a.UNSIGNED_SHORT&&(ce=a.RGB16UI),K===a.UNSIGNED_INT&&(ce=a.RGB32UI),K===a.BYTE&&(ce=a.RGB8I),K===a.SHORT&&(ce=a.RGB16I),K===a.INT&&(ce=a.RGB32I)),E===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(ce=a.RGBA16UI),K===a.UNSIGNED_INT&&(ce=a.RGBA32UI),K===a.BYTE&&(ce=a.RGBA8I),K===a.SHORT&&(ce=a.RGBA16I),K===a.INT&&(ce=a.RGBA32I)),E===a.RGB&&(K===a.UNSIGNED_INT_5_9_9_9_REV&&(ce=a.RGB9_E5),K===a.UNSIGNED_INT_10F_11F_11F_REV&&(ce=a.R11F_G11F_B10F)),E===a.RGBA){const Ke=ye?Qc:Ot.getTransfer(xe);K===a.FLOAT&&(ce=a.RGBA32F),K===a.HALF_FLOAT&&(ce=a.RGBA16F),K===a.UNSIGNED_BYTE&&(ce=Ke===qt?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT_4_4_4_4&&(ce=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(ce=a.RGB5_A1)}return(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function B(L,E){let K;return L?E===null||E===rr||E===Fs?K=a.DEPTH24_STENCIL8:E===va?K=a.DEPTH32F_STENCIL8:E===Ko&&(K=a.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rr||E===Fs?K=a.DEPTH_COMPONENT24:E===va?K=a.DEPTH_COMPONENT32F:E===Ko&&(K=a.DEPTH_COMPONENT16),K}function V(L,E){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==oi&&L.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function O(L){const E=L.target;E.removeEventListener("dispose",O),ee(E),E.isVideoTexture&&x.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),C(E)}function ee(L){const E=s.get(L);if(E.__webglInit===void 0)return;const K=L.source,xe=S.get(K);if(xe){const ye=xe[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(L),Object.keys(xe).length===0&&S.delete(K)}s.remove(L)}function w(L){const E=s.get(L);a.deleteTexture(E.__webglTexture);const K=L.source,xe=S.get(K);delete xe[E.__cacheKey],f.memory.textures--}function C(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let ye=0;ye<E.__webglFramebuffer[xe].length;ye++)a.deleteFramebuffer(E.__webglFramebuffer[xe][ye]);else a.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)a.deleteFramebuffer(E.__webglFramebuffer[xe]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=L.textures;for(let xe=0,ye=K.length;xe<ye;xe++){const ce=s.get(K[xe]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),f.memory.textures--),s.remove(K[xe])}s.remove(L)}let G=0;function te(){G=0}function oe(){const L=G;return L>=l.maxTextures&&dt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function he(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function J(L,E){const K=s.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const xe=L.image;if(xe===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(K,L,E);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+E)}function N(L,E){const K=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ie(K,L,E);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+E)}function X(L,E){const K=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ie(K,L,E);return}i.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+E)}function Y(L,E){const K=s.get(L);if(L.version>0&&K.__version!==L.version){le(K,L,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+E)}const me={[hh]:a.REPEAT,[ga]:a.CLAMP_TO_EDGE,[ph]:a.MIRRORED_REPEAT},_e={[oi]:a.NEAREST,[EM]:a.NEAREST_MIPMAP_NEAREST,[yc]:a.NEAREST_MIPMAP_LINEAR,[wn]:a.LINEAR,[yd]:a.LINEAR_MIPMAP_NEAREST,[Br]:a.LINEAR_MIPMAP_LINEAR},P={[CM]:a.NEVER,[OM]:a.ALWAYS,[wM]:a.LESS,[Ov]:a.LEQUAL,[DM]:a.EQUAL,[NM]:a.GEQUAL,[UM]:a.GREATER,[LM]:a.NOTEQUAL};function ae(L,E){if(E.type===va&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===yd||E.magFilter===yc||E.magFilter===Br||E.minFilter===wn||E.minFilter===yd||E.minFilter===yc||E.minFilter===Br)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,me[E.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,me[E.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,me[E.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,_e[E.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==yc&&E.minFilter!==Br||E.type===va&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Se(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",O));const xe=E.source;let ye=S.get(xe);ye===void 0&&(ye={},S.set(xe,ye));const ce=he(E);if(ce!==L.__cacheKey){ye[ce]===void 0&&(ye[ce]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ye[ce].usedTimes++;const Ke=ye[L.__cacheKey];Ke!==void 0&&(ye[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(E)),L.__cacheKey=ce,L.__webglTexture=ye[ce].texture}return K}function Ae(L,E,K){return Math.floor(Math.floor(L/K)/E)}function Be(L,E,K,xe){const ce=L.updateRanges;if(ce.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,K,xe,E.data);else{ce.sort((be,Te)=>be.start-Te.start);let Ke=0;for(let be=1;be<ce.length;be++){const Te=ce[Ke],Qe=ce[be],We=Te.start+Te.count,Fe=Ae(Qe.start,E.width,4),rt=Ae(Te.start,E.width,4);Qe.start<=We+1&&Fe===rt&&Ae(Qe.start+Qe.count-1,E.width,4)===Fe?Te.count=Math.max(Te.count,Qe.start+Qe.count-Te.start):(++Ke,ce[Ke]=Qe)}ce.length=Ke+1;const Le=a.getParameter(a.UNPACK_ROW_LENGTH),et=a.getParameter(a.UNPACK_SKIP_PIXELS),je=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let be=0,Te=ce.length;be<Te;be++){const Qe=ce[be],We=Math.floor(Qe.start/4),Fe=Math.ceil(Qe.count/4),rt=We%E.width,H=Math.floor(We/E.width),De=Fe,Ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,rt),a.pixelStorei(a.UNPACK_SKIP_ROWS,H),i.texSubImage2D(a.TEXTURE_2D,0,rt,H,De,Ce,K,xe,E.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Le),a.pixelStorei(a.UNPACK_SKIP_PIXELS,et),a.pixelStorei(a.UNPACK_SKIP_ROWS,je)}}function ie(L,E,K){let xe=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=a.TEXTURE_3D);const ye=Se(L,E),ce=E.source;i.bindTexture(xe,L.__webglTexture,a.TEXTURE0+K);const Ke=s.get(ce);if(ce.version!==Ke.__version||ye===!0){i.activeTexture(a.TEXTURE0+K);const Le=Ot.getPrimaries(Ot.workingColorSpace),et=E.colorSpace===Hi?null:Ot.getPrimaries(E.colorSpace),je=E.colorSpace===Hi||Le===et?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let be=T(E.image,!1,l.maxTextureSize);be=Ze(E,be);const Te=c.convert(E.format,E.colorSpace),Qe=c.convert(E.type);let We=U(E.internalFormat,Te,Qe,E.colorSpace,E.isVideoTexture);ae(xe,E);let Fe;const rt=E.mipmaps,H=E.isVideoTexture!==!0,De=Ke.__version===void 0||ye===!0,Ce=ce.dataReady,we=V(E,be);if(E.isDepthTexture)We=B(E.format===Is,E.type),De&&(H?i.texStorage2D(a.TEXTURE_2D,1,We,be.width,be.height):i.texImage2D(a.TEXTURE_2D,0,We,be.width,be.height,0,Te,Qe,null));else if(E.isDataTexture)if(rt.length>0){H&&De&&i.texStorage2D(a.TEXTURE_2D,we,We,rt[0].width,rt[0].height);for(let Me=0,ve=rt.length;Me<ve;Me++)Fe=rt[Me],H?Ce&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Te,Qe,Fe.data):i.texImage2D(a.TEXTURE_2D,Me,We,Fe.width,Fe.height,0,Te,Qe,Fe.data);E.generateMipmaps=!1}else H?(De&&i.texStorage2D(a.TEXTURE_2D,we,We,be.width,be.height),Ce&&Be(E,be,Te,Qe)):i.texImage2D(a.TEXTURE_2D,0,We,be.width,be.height,0,Te,Qe,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&De&&i.texStorage3D(a.TEXTURE_2D_ARRAY,we,We,rt[0].width,rt[0].height,be.depth);for(let Me=0,ve=rt.length;Me<ve;Me++)if(Fe=rt[Me],E.format!==Di)if(Te!==null)if(H){if(Ce)if(E.layerUpdates.size>0){const Ge=Ug(Fe.width,Fe.height,E.format,E.type);for(const st of E.layerUpdates){const Vt=Fe.data.subarray(st*Ge/Fe.data.BYTES_PER_ELEMENT,(st+1)*Ge/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,st,Fe.width,Fe.height,1,Te,Vt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,be.depth,Te,Fe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Me,We,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ce&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,be.depth,Te,Qe,Fe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Me,We,Fe.width,Fe.height,be.depth,0,Te,Qe,Fe.data)}else{H&&De&&i.texStorage2D(a.TEXTURE_2D,we,We,rt[0].width,rt[0].height);for(let Me=0,ve=rt.length;Me<ve;Me++)Fe=rt[Me],E.format!==Di?Te!==null?H?Ce&&i.compressedTexSubImage2D(a.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Te,Fe.data):i.compressedTexImage2D(a.TEXTURE_2D,Me,We,Fe.width,Fe.height,0,Fe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ce&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Te,Qe,Fe.data):i.texImage2D(a.TEXTURE_2D,Me,We,Fe.width,Fe.height,0,Te,Qe,Fe.data)}else if(E.isDataArrayTexture)if(H){if(De&&i.texStorage3D(a.TEXTURE_2D_ARRAY,we,We,be.width,be.height,be.depth),Ce)if(E.layerUpdates.size>0){const Me=Ug(be.width,be.height,E.format,E.type);for(const ve of E.layerUpdates){const Ge=be.data.subarray(ve*Me/be.data.BYTES_PER_ELEMENT,(ve+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Te,Qe,Ge)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Te,Qe,be.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,We,be.width,be.height,be.depth,0,Te,Qe,be.data);else if(E.isData3DTexture)H?(De&&i.texStorage3D(a.TEXTURE_3D,we,We,be.width,be.height,be.depth),Ce&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Te,Qe,be.data)):i.texImage3D(a.TEXTURE_3D,0,We,be.width,be.height,be.depth,0,Te,Qe,be.data);else if(E.isFramebufferTexture){if(De)if(H)i.texStorage2D(a.TEXTURE_2D,we,We,be.width,be.height);else{let Me=be.width,ve=be.height;for(let Ge=0;Ge<we;Ge++)i.texImage2D(a.TEXTURE_2D,Ge,We,Me,ve,0,Te,Qe,null),Me>>=1,ve>>=1}}else if(rt.length>0){if(H&&De){const Me=ot(rt[0]);i.texStorage2D(a.TEXTURE_2D,we,We,Me.width,Me.height)}for(let Me=0,ve=rt.length;Me<ve;Me++)Fe=rt[Me],H?Ce&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Te,Qe,Fe):i.texImage2D(a.TEXTURE_2D,Me,We,Te,Qe,Fe);E.generateMipmaps=!1}else if(H){if(De){const Me=ot(be);i.texStorage2D(a.TEXTURE_2D,we,We,Me.width,Me.height)}Ce&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,Qe,be)}else i.texImage2D(a.TEXTURE_2D,0,We,Te,Qe,be);b(E)&&v(xe),Ke.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function le(L,E,K){if(E.image.length!==6)return;const xe=Se(L,E),ye=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+K);const ce=s.get(ye);if(ye.version!==ce.__version||xe===!0){i.activeTexture(a.TEXTURE0+K);const Ke=Ot.getPrimaries(Ot.workingColorSpace),Le=E.colorSpace===Hi?null:Ot.getPrimaries(E.colorSpace),et=E.colorSpace===Hi||Ke===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!je&&!be?Te[ve]=T(E.image[ve],!0,l.maxCubemapSize):Te[ve]=be?E.image[ve].image:E.image[ve],Te[ve]=Ze(E,Te[ve]);const Qe=Te[0],We=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type),rt=U(E.internalFormat,We,Fe,E.colorSpace),H=E.isVideoTexture!==!0,De=ce.__version===void 0||xe===!0,Ce=ye.dataReady;let we=V(E,Qe);ae(a.TEXTURE_CUBE_MAP,E);let Me;if(je){H&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,we,rt,Qe.width,Qe.height);for(let ve=0;ve<6;ve++){Me=Te[ve].mipmaps;for(let Ge=0;Ge<Me.length;Ge++){const st=Me[Ge];E.format!==Di?We!==null?H?Ce&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,st.width,st.height,We,st.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,rt,st.width,st.height,0,st.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,st.width,st.height,We,Fe,st.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,rt,st.width,st.height,0,We,Fe,st.data)}}}else{if(Me=E.mipmaps,H&&De){Me.length>0&&we++;const ve=ot(Te[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,we,rt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){H?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,We,Fe,Te[ve].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Te[ve].width,Te[ve].height,0,We,Fe,Te[ve].data);for(let Ge=0;Ge<Me.length;Ge++){const Vt=Me[Ge].image[ve].image;H?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,Vt.width,Vt.height,We,Fe,Vt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,rt,Vt.width,Vt.height,0,We,Fe,Vt.data)}}else{H?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,We,Fe,Te[ve]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,We,Fe,Te[ve]);for(let Ge=0;Ge<Me.length;Ge++){const st=Me[Ge];H?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,We,Fe,st.image[ve]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,rt,We,Fe,st.image[ve])}}}b(E)&&v(a.TEXTURE_CUBE_MAP),ce.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ee(L,E,K,xe,ye,ce){const Ke=c.convert(K.format,K.colorSpace),Le=c.convert(K.type),et=U(K.internalFormat,Ke,Le,K.colorSpace),je=s.get(E),be=s.get(K);if(be.__renderTarget=E,!je.__hasExternalTextures){const Te=Math.max(1,E.width>>ce),Qe=Math.max(1,E.height>>ce);ye===a.TEXTURE_3D||ye===a.TEXTURE_2D_ARRAY?i.texImage3D(ye,ce,et,Te,Qe,E.depth,0,Ke,Le,null):i.texImage2D(ye,ce,et,Te,Qe,0,Ke,Le,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),Ne(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,xe,ye,be.__webglTexture,0,gt(E)):(ye===a.TEXTURE_2D||ye>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,xe,ye,be.__webglTexture,ce),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Pe(L,E,K){if(a.bindRenderbuffer(a.RENDERBUFFER,L),E.depthBuffer){const xe=E.depthTexture,ye=xe&&xe.isDepthTexture?xe.type:null,ce=B(E.stencilBuffer,ye),Ke=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=gt(E);Ne(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Le,ce,E.width,E.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,ce,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,ce,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ke,a.RENDERBUFFER,L)}else{const xe=E.textures;for(let ye=0;ye<xe.length;ye++){const ce=xe[ye],Ke=c.convert(ce.format,ce.colorSpace),Le=c.convert(ce.type),et=U(ce.internalFormat,Ke,Le,ce.colorSpace),je=gt(E);K&&Ne(E)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,je,et,E.width,E.height):Ne(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,je,et,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,et,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ke(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(E.depthTexture);xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const ye=xe.__webglTexture,ce=gt(E);if(E.depthTexture.format===Qo)Ne(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0);else if(E.depthTexture.format===Is)Ne(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function lt(L){const E=s.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const xe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",ye)};xe.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=xe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const xe=L.texture.mipmaps;xe&&xe.length>0?ke(E.__webglFramebuffer[0],L):ke(E.__webglFramebuffer,L)}else if(K){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=a.createRenderbuffer(),Pe(E.__webglDepthbuffer[xe],L,!1);else{const ye=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[xe];a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,ce)}}else{const xe=L.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Pe(E.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,ce)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function en(L,E,K){const xe=s.get(L);E!==void 0&&Ee(xe.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&lt(L)}function ut(L){const E=L.texture,K=s.get(L),xe=s.get(E);L.addEventListener("dispose",z);const ye=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(xe.__webglTexture===void 0&&(xe.__webglTexture=a.createTexture()),xe.__version=E.version,f.memory.textures++),ce){K.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Le]=[];for(let et=0;et<E.mipmaps.length;et++)K.__webglFramebuffer[Le][et]=a.createFramebuffer()}else K.__webglFramebuffer[Le]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)K.__webglFramebuffer[Le]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(Ke)for(let Le=0,et=ye.length;Le<et;Le++){const je=s.get(ye[Le]);je.__webglTexture===void 0&&(je.__webglTexture=a.createTexture(),f.memory.textures++)}if(L.samples>0&&Ne(L)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){const et=ye[Le];K.__webglColorRenderbuffer[Le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[Le]);const je=c.convert(et.format,et.colorSpace),be=c.convert(et.type),Te=U(et.internalFormat,je,be,et.colorSpace,L.isXRRenderTarget===!0),Qe=gt(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Qe,Te,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,K.__webglColorRenderbuffer[Le])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),Pe(K.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ce){i.bindTexture(a.TEXTURE_CUBE_MAP,xe.__webglTexture),ae(a.TEXTURE_CUBE_MAP,E);for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)Ee(K.__webglFramebuffer[Le][et],L,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Le,et);else Ee(K.__webglFramebuffer[Le],L,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);b(E)&&v(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Le=0,et=ye.length;Le<et;Le++){const je=ye[Le],be=s.get(je);let Te=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Te,be.__webglTexture),ae(Te,je),Ee(K.__webglFramebuffer,L,je,a.COLOR_ATTACHMENT0+Le,Te,0),b(je)&&v(Te)}i.unbindTexture()}else{let Le=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Le,xe.__webglTexture),ae(Le,E),E.mipmaps&&E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)Ee(K.__webglFramebuffer[et],L,E,a.COLOR_ATTACHMENT0,Le,et);else Ee(K.__webglFramebuffer,L,E,a.COLOR_ATTACHMENT0,Le,0);b(E)&&v(Le),i.unbindTexture()}L.depthBuffer&&lt(L)}function _t(L){const E=L.textures;for(let K=0,xe=E.length;K<xe;K++){const ye=E[K];if(b(ye)){const ce=D(L),Ke=s.get(ye).__webglTexture;i.bindTexture(ce,Ke),v(ce),i.unbindTexture()}}}const I=[],He=[];function Ye(L){if(L.samples>0){if(Ne(L)===!1){const E=L.textures,K=L.width,xe=L.height;let ye=a.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ke=s.get(L),Le=E.length>1;if(Le)for(let je=0;je<E.length;je++)i.bindFramebuffer(a.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ke.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const et=L.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let je=0;je<E.length;je++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=a.STENCIL_BUFFER_BIT)),Le){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ke.__webglColorRenderbuffer[je]);const be=s.get(E[je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,be,0)}a.blitFramebuffer(0,0,K,xe,0,0,K,xe,ye,a.NEAREST),m===!0&&(I.length=0,He.length=0,I.push(a.COLOR_ATTACHMENT0+je),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(ce),He.push(ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,He)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Le)for(let je=0;je<E.length;je++){i.bindFramebuffer(a.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,Ke.__webglColorRenderbuffer[je]);const be=s.get(E[je]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ke.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,be,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function gt(L){return Math.min(l.maxSamples,L.samples)}function Ne(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(L){const E=f.render.frame;x.get(L)!==E&&(x.set(L,E),L.update())}function Ze(L,E){const K=L.colorSpace,xe=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==sr&&K!==Hi&&(Ot.getTransfer(K)===qt?(xe!==Di||ye!==ci)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):cn("WebGLTextures: Unsupported texture color space:",K)),E}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=en,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ne}function YA(a,e){function i(s,l=Hi){let c;const f=Ot.getTransfer(l);if(s===ci)return a.UNSIGNED_BYTE;if(s===tp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===np)return a.UNSIGNED_SHORT_5_5_5_1;if(s===wv)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===Dv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===Rv)return a.BYTE;if(s===Cv)return a.SHORT;if(s===Ko)return a.UNSIGNED_SHORT;if(s===ep)return a.INT;if(s===rr)return a.UNSIGNED_INT;if(s===va)return a.FLOAT;if(s===Vs)return a.HALF_FLOAT;if(s===Uv)return a.ALPHA;if(s===Lv)return a.RGB;if(s===Di)return a.RGBA;if(s===Qo)return a.DEPTH_COMPONENT;if(s===Is)return a.DEPTH_STENCIL;if(s===Nv)return a.RED;if(s===ip)return a.RED_INTEGER;if(s===ap)return a.RG;if(s===rp)return a.RG_INTEGER;if(s===sp)return a.RGBA_INTEGER;if(s===Xc||s===Wc||s===qc||s===Yc)if(f===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===xh||s===gh||s===vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_h||s===Sh||s===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_h||s===Sh)return f===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bh||s===Mh||s===Eh||s===Th||s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ch)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ph)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bh||s===zh||s===Fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Bh)return f===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ih||s===Hh||s===Gh||s===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ih)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Hh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fs?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new qv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ui({vertexShader:jA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends or{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,g=null,S=null,y=null,M=null;const T=typeof XRWebGLBinding<"u",b=new KA,v={},D=i.getContextAttributes();let U=null,B=null;const V=[],O=[],z=new vt;let ee=null;const w=new Si;w.viewport=new un;const C=new Si;C.viewport=new un;const G=[w,C],te=new mE;let oe=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let le=V[ie];return le===void 0&&(le=new Xd,V[ie]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ie){let le=V[ie];return le===void 0&&(le=new Xd,V[ie]=le),le.getGripSpace()},this.getHand=function(ie){let le=V[ie];return le===void 0&&(le=new Xd,V[ie]=le),le.getHandSpace()};function J(ie){const le=O.indexOf(ie.inputSource);if(le===-1)return;const Ee=V[le];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,p||f),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function N(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",X);for(let ie=0;ie<V.length;ie++){const le=O[ie];le!==null&&(O[ie]=null,V[ie].disconnect(le))}oe=null,he=null,b.reset();for(const ie in v)delete v[ie];e.setRenderTarget(U),y=null,S=null,g=null,l=null,B=null,Be.stop(),s.isPresenting=!1,e.setPixelRatio(ee),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",N),l.addEventListener("inputsourceschange",X),D.xrCompatible!==!0&&await i.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Pe=null,ke=null;D.depth&&(ke=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=D.stencil?Is:Qo,Pe=D.stencil?Fs:rr);const lt={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(lt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Ni(S.textureWidth,S.textureHeight,{format:Di,type:ci,depthTexture:new cp(S.textureWidth,S.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ee={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Ni(y.framebufferWidth,y.framebufferHeight,{format:Di,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function X(ie){for(let le=0;le<ie.removed.length;le++){const Ee=ie.removed[le],Pe=O.indexOf(Ee);Pe>=0&&(O[Pe]=null,V[Pe].disconnect(Ee))}for(let le=0;le<ie.added.length;le++){const Ee=ie.added[le];let Pe=O.indexOf(Ee);if(Pe===-1){for(let lt=0;lt<V.length;lt++)if(lt>=O.length){O.push(Ee),Pe=lt;break}else if(O[lt]===null){O[lt]=Ee,Pe=lt;break}if(Pe===-1)break}const ke=V[Pe];ke&&ke.connect(Ee)}}const Y=new ue,me=new ue;function _e(ie,le,Ee){Y.setFromMatrixPosition(le.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const Pe=Y.distanceTo(me),ke=le.projectionMatrix.elements,lt=Ee.projectionMatrix.elements,en=ke[14]/(ke[10]-1),ut=ke[14]/(ke[10]+1),_t=(ke[9]+1)/ke[5],I=(ke[9]-1)/ke[5],He=(ke[8]-1)/ke[0],Ye=(lt[8]+1)/lt[0],gt=en*He,Ne=en*Ye,Bt=Pe/(-He+Ye),Ze=Bt*-He;if(le.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ze),ie.translateZ(Bt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ke[10]===-1)ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ot=en+Bt,L=ut+Bt,E=gt-Ze,K=Ne+(Pe-Ze),xe=_t*ut/L*ot,ye=I*ut/L*ot;ie.projectionMatrix.makePerspective(E,K,xe,ye,ot,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,le){le===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(le.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let le=ie.near,Ee=ie.far;b.texture!==null&&(b.depthNear>0&&(le=b.depthNear),b.depthFar>0&&(Ee=b.depthFar)),te.near=C.near=w.near=le,te.far=C.far=w.far=Ee,(oe!==te.near||he!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),oe=te.near,he=te.far),te.layers.mask=ie.layers.mask|6,w.layers.mask=te.layers.mask&3,C.layers.mask=te.layers.mask&5;const Pe=ie.parent,ke=te.cameras;P(te,Pe);for(let lt=0;lt<ke.length;lt++)P(ke[lt],Pe);ke.length===2?_e(te,w,C):te.projectionMatrix.copy(w.projectionMatrix),ae(ie,te,Pe)};function ae(ie,le,Ee){Ee===null?ie.matrix.copy(le.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(le.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Xh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(ie){m=ie,S!==null&&(S.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(te)},this.getCameraTexture=function(ie){return v[ie]};let Se=null;function Ae(ie,le){if(x=le.getViewerPose(p||f),M=le,x!==null){const Ee=x.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let Pe=!1;Ee.length!==te.cameras.length&&(te.cameras.length=0,Pe=!0);for(let ut=0;ut<Ee.length;ut++){const _t=Ee[ut];let I=null;if(y!==null)I=y.getViewport(_t);else{const Ye=g.getViewSubImage(S,_t);I=Ye.viewport,ut===0&&(e.setRenderTargetTextures(B,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(B))}let He=G[ut];He===void 0&&(He=new Si,He.layers.enable(ut),He.viewport=new un,G[ut]=He),He.matrix.fromArray(_t.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(_t.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(I.x,I.y,I.width,I.height),ut===0&&(te.matrix.copy(He.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Pe===!0&&te.cameras.push(He)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ut=g.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&b.init(ut,l.renderState)}if(ke&&ke.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let ut=0;ut<Ee.length;ut++){const _t=Ee[ut].camera;if(_t){let I=v[_t];I||(I=new qv,v[_t]=I);const He=g.getCameraImage(_t);I.sourceTexture=He}}}}for(let Ee=0;Ee<V.length;Ee++){const Pe=O[Ee],ke=V[Ee];Pe!==null&&ke!==void 0&&ke.update(Pe,le,p||f)}Se&&Se(ie,le),le.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:le}),M=null}const Be=new Yv;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const Lr=new Ma,JA=new Sn;function $A(a,e){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function s(b,v){v.color.getRGB(b.fogColor.value,Vv(a)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,D,U,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(b,v):v.isMeshToonMaterial?(c(b,v),g(b,v)):v.isMeshPhongMaterial?(c(b,v),x(b,v)):v.isMeshStandardMaterial?(c(b,v),S(b,v),v.isMeshPhysicalMaterial&&y(b,v,B)):v.isMeshMatcapMaterial?(c(b,v),M(b,v)):v.isMeshDepthMaterial?c(b,v):v.isMeshDistanceMaterial?(c(b,v),T(b,v)):v.isMeshNormalMaterial?c(b,v):v.isLineBasicMaterial?(f(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,D,U):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===Cn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===Cn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const D=e.get(v),U=D.envMap,B=D.envMapRotation;U&&(b.envMap.value=U,Lr.copy(B),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),b.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(Lr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function f(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,D,U){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*D,b.scale.value=U*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function x(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function S(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,D){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Cn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=D.texture,b.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,v){v.matcap&&(b.matcap.value=v.matcap)}function T(b,v){const D=e.get(v).light;b.referencePosition.value.setFromMatrixPosition(D.matrixWorld),b.nearDistance.value=D.shadow.camera.near,b.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e2(a,e,i,s){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const B=U.program;s.uniformBlockBinding(D,B)}function p(D,U){let B=l[D.id];B===void 0&&(M(D),B=x(D),l[D.id]=B,D.addEventListener("dispose",b));const V=U.program;s.updateUBOMapping(D,V);const O=e.render.frame;c[D.id]!==O&&(S(D),c[D.id]=O)}function x(D){const U=g();D.__bindingPointIndex=U;const B=a.createBuffer(),V=D.__size,O=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,B),a.bufferData(a.UNIFORM_BUFFER,V,O),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,B),B}function g(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const U=l[D.id],B=D.uniforms,V=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let O=0,z=B.length;O<z;O++){const ee=Array.isArray(B[O])?B[O]:[B[O]];for(let w=0,C=ee.length;w<C;w++){const G=ee[w];if(y(G,O,w,V)===!0){const te=G.__offset,oe=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let J=0;J<oe.length;J++){const N=oe[J],X=T(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,a.bufferSubData(a.UNIFORM_BUFFER,te+he,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,he),he+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,te,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(D,U,B,V){const O=D.value,z=U+"_"+B;if(V[z]===void 0)return typeof O=="number"||typeof O=="boolean"?V[z]=O:V[z]=O.clone(),!0;{const ee=V[z];if(typeof O=="number"||typeof O=="boolean"){if(ee!==O)return V[z]=O,!0}else if(ee.equals(O)===!1)return ee.copy(O),!0}return!1}function M(D){const U=D.uniforms;let B=0;const V=16;for(let z=0,ee=U.length;z<ee;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,G=w.length;C<G;C++){const te=w[C],oe=Array.isArray(te.value)?te.value:[te.value];for(let he=0,J=oe.length;he<J;he++){const N=oe[he],X=T(N),Y=B%V,me=Y%X.boundary,_e=Y+me;B+=me,_e!==0&&V-_e<X.storage&&(B+=V-_e),te.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=B,B+=X.storage}}}const O=B%V;return O>0&&(B+=V-O),D.__size=B,D.__cache={},this}function T(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",D),U}function b(D){const U=D.target;U.removeEventListener("dispose",b);const B=f.indexOf(U.__bindingPointIndex);f.splice(B,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const D in l)a.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const t2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ma=null;function n2(){return ma===null&&(ma=new cE(t2,32,32,ap,Vs),ma.minFilter=wn,ma.magFilter=wn,ma.wrapS=ga,ma.wrapT=ga,ma.generateMipmaps=!1,ma.needsUpdate=!0),ma}class i2{constructor(e={}){const{canvas:i=PM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const M=new Set([sp,rp,ip]),T=new Set([ci,rr,Ko,Fs,tp,np]),b=new Uint32Array(4),v=new Int32Array(4);let D=null,U=null;const B=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1;this._outputColorSpace=ln;let ee=0,w=0,C=null,G=-1,te=null;const oe=new un,he=new un;let J=null;const N=new It(0);let X=0,Y=i.width,me=i.height,_e=1,P=null,ae=null;const Se=new un(0,0,Y,me),Ae=new un(0,0,Y,me);let Be=!1;const ie=new Wv;let le=!1,Ee=!1;const Pe=new Sn,ke=new ue,lt=new un,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function _t(){return C===null?_e:1}let I=s;function He(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${nu}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",Ge,!1),I===null){const W="webgl2";if(I=He(W,R),I===null)throw He(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let Ye,gt,Ne,Bt,Ze,ot,L,E,K,xe,ye,ce,Ke,Le,et,je,be,Te,Qe,We,Fe,rt,H,De;function Ce(){Ye=new fT(I),Ye.init(),rt=new YA(I,Ye),gt=new nT(I,Ye,e,rt),Ne=new WA(I,Ye),gt.reversedDepthBuffer&&S&&Ne.buffers.depth.setReversed(!0),Bt=new pT(I),Ze=new LA,ot=new qA(I,Ye,Ne,Ze,gt,rt,Bt),L=new aT(O),E=new uT(O),K=new vE(I),H=new eT(I,K),xe=new dT(I,K,Bt,H),ye=new xT(I,xe,K,Bt),Qe=new mT(I,gt,ot),je=new iT(Ze),ce=new UA(O,L,E,Ye,gt,H,je),Ke=new $A(O,Ze),Le=new OA,et=new HA(Ye),Te=new $3(O,L,E,Ne,ye,y,m),be=new kA(O,ye,gt),De=new e2(I,Bt,gt,Ne),We=new tT(I,Ye,Bt),Fe=new hT(I,Ye,Bt),Bt.programs=ce.programs,O.capabilities=gt,O.extensions=Ye,O.properties=Ze,O.renderLists=Le,O.shadowMap=be,O.state=Ne,O.info=Bt}Ce();const we=new QA(O,I);this.xr=we,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(Y,me,!1))},this.getSize=function(R){return R.set(Y,me)},this.setSize=function(R,W,re=!0){if(we.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,me=W,i.width=Math.floor(R*_e),i.height=Math.floor(W*_e),re===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Y*_e,me*_e).floor()},this.setDrawingBufferSize=function(R,W,re){Y=R,me=W,_e=re,i.width=Math.floor(R*re),i.height=Math.floor(W*re),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(oe)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,W,re,$){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,W,re,$),Ne.viewport(oe.copy(Se).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,W,re,$){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,W,re,$),Ne.scissor(he.copy(Ae).multiplyScalar(_e).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){Ne.setScissorTest(Be=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,re=!0){let $=0;if(R){let j=!1;if(C!==null){const Re=C.texture.format;j=M.has(Re)}if(j){const Re=C.texture.type,Ue=T.has(Re),Ie=Te.getClearColor(),Ve=Te.getClearAlpha(),nt=Ie.r,at=Ie.g,Je=Ie.b;Ue?(b[0]=nt,b[1]=at,b[2]=Je,b[3]=Ve,I.clearBufferuiv(I.COLOR,0,b)):(v[0]=nt,v[1]=at,v[2]=Je,v[3]=Ve,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}W&&($|=I.DEPTH_BUFFER_BIT),re&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",Ge,!1),Te.dispose(),Le.dispose(),et.dispose(),Ze.dispose(),L.dispose(),E.dispose(),ye.dispose(),H.dispose(),De.dispose(),ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ws),we.removeEventListener("sessionend",qs),bi.stop()};function Me(R){R.preventDefault(),pg("WebGLRenderer: Context Lost."),z=!0}function ve(){pg("WebGLRenderer: Context Restored."),z=!1;const R=Bt.autoReset,W=be.enabled,re=be.autoUpdate,$=be.needsUpdate,j=be.type;Ce(),Bt.autoReset=R,be.enabled=W,be.autoUpdate=re,be.needsUpdate=$,be.type=j}function Ge(R){cn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const W=R.target;W.removeEventListener("dispose",st),Vt(W)}function Vt(R){Dt(R),Ze.remove(R)}function Dt(R){const W=Ze.get(R).programs;W!==void 0&&(W.forEach(function(re){ce.releaseProgram(re)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,re,$,j,Re){W===null&&(W=en);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,Ie=su(R,W,re,$,j);Ne.setMaterial($,Ue);let Ve=re.index,nt=1;if($.wireframe===!0){if(Ve=xe.getWireframeAttribute(re),Ve===void 0)return;nt=2}const at=re.drawRange,Je=re.attributes.position;let ht=at.start*nt,wt=(at.start+at.count)*nt;Re!==null&&(ht=Math.max(ht,Re.start*nt),wt=Math.min(wt,(Re.start+Re.count)*nt)),Ve!==null?(ht=Math.max(ht,0),wt=Math.min(wt,Ve.count)):Je!=null&&(ht=Math.max(ht,0),wt=Math.min(wt,Je.count));const Ut=wt-ht;if(Ut<0||Ut===1/0)return;H.setup(j,$,Ie,re,Ve);let Et,Ft=We;if(Ve!==null&&(Et=K.get(Ve),Ft=Fe,Ft.setIndex(Et)),j.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*_t()),Ft.setMode(I.LINES)):Ft.setMode(I.TRIANGLES);else if(j.isLine){let tt=$.linewidth;tt===void 0&&(tt=1),Ne.setLineWidth(tt*_t()),j.isLineSegments?Ft.setMode(I.LINES):j.isLineLoop?Ft.setMode(I.LINE_LOOP):Ft.setMode(I.LINE_STRIP)}else j.isPoints?Ft.setMode(I.POINTS):j.isSprite&&Ft.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const tt=j._multiDrawStarts,Yt=j._multiDrawCounts,Tt=j._multiDrawCount,Mn=Ve?K.get(Ve).bytesPerElement:1,Ra=Ze.get($).currentProgram.getUniforms();for(let Zt=0;Zt<Tt;Zt++)Ra.setValue(I,"_gl_DrawID",Zt),Ft.render(tt[Zt]/Mn,Yt[Zt])}else if(j.isInstancedMesh)Ft.renderInstances(ht,Ut,j.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Yt=Math.min(re.instanceCount,tt);Ft.renderInstances(ht,Ut,Yt)}else Ft.render(ht,Ut)};function Bn(R,W,re){R.transparent===!0&&R.side===si&&R.forceSinglePass===!1?(R.side=Cn,R.needsUpdate=!0,gn(R,W,re),R.side=ba,R.needsUpdate=!0,gn(R,W,re),R.side=si):gn(R,W,re)}this.compile=function(R,W,re=null){re===null&&(re=R),U=et.get(re),U.init(W),V.push(U),re.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),R!==re&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),U.setupLights();const $=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Re=j.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Ie=Re[Ue];Bn(Ie,re,j),$.add(Ie)}else Bn(Re,re,j),$.add(Re)}),U=V.pop(),$},this.compileAsync=function(R,W,re=null){const $=this.compile(R,W,re);return new Promise(j=>{function Re(){if($.forEach(function(Ue){Ze.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){j(R);return}setTimeout(Re,10)}Ye.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Zn=null;function cl(R){Zn&&Zn(R)}function Ws(){bi.stop()}function qs(){bi.start()}const bi=new Yv;bi.setAnimationLoop(cl),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(R){Zn=R,we.setAnimationLoop(R),R===null?bi.stop():bi.start()},we.addEventListener("sessionstart",Ws),we.addEventListener("sessionend",qs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,W,C),U=et.get(R,V.length),U.init(W),V.push(U),Pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ie.setFromProjectionMatrix(Pe,Gi,W.reversedDepth),Ee=this.localClippingEnabled,le=je.init(this.clippingPlanes,Ee),D=Le.get(R,B.length),D.init(),B.push(D),we.enabled===!0&&we.isPresenting===!0){const Re=O.xr.getDepthSensingMesh();Re!==null&&cr(Re,W,-1/0,O.sortObjects)}cr(R,W,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(P,ae),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Te.addToRenderList(D,R),this.info.render.frame++,le===!0&&je.beginShadows();const re=U.state.shadowsArray;be.render(re,R,W),le===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=D.opaque,j=D.transmissive;if(U.setupLights(),W.isArrayCamera){const Re=W.cameras;if(j.length>0)for(let Ue=0,Ie=Re.length;Ue<Ie;Ue++){const Ve=Re[Ue];js($,j,R,Ve)}ut&&Te.render(R);for(let Ue=0,Ie=Re.length;Ue<Ie;Ue++){const Ve=Re[Ue];Ys(D,R,Ve,Ve.viewport)}}else j.length>0&&js($,j,R,W),ut&&Te.render(R),Ys(D,R,W);C!==null&&w===0&&(ot.updateMultisampleRenderTarget(C),ot.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(O,R,W),H.resetDefaultState(),G=-1,te=null,V.pop(),V.length>0?(U=V[V.length-1],le===!0&&je.setGlobalState(O.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function cr(R,W,re,$){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){$&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pe);const Ue=ye.update(R),Ie=R.material;Ie.visible&&D.push(R,Ue,Ie,re,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const Ue=ye.update(R),Ie=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),lt.copy(Ue.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ie)){const Ve=Ue.groups;for(let nt=0,at=Ve.length;nt<at;nt++){const Je=Ve[nt],ht=Ie[Je.materialIndex];ht&&ht.visible&&D.push(R,Ue,ht,re,lt.z,Je)}}else Ie.visible&&D.push(R,Ue,Ie,re,lt.z,null)}}const Re=R.children;for(let Ue=0,Ie=Re.length;Ue<Ie;Ue++)cr(Re[Ue],W,re,$)}function Ys(R,W,re,$){const{opaque:j,transmissive:Re,transparent:Ue}=R;U.setupLightsView(re),le===!0&&je.setGlobalState(O.clippingPlanes,re),$&&Ne.viewport(oe.copy($)),j.length>0&&Kn(j,W,re),Re.length>0&&Kn(Re,W,re),Ue.length>0&&Kn(Ue,W,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function js(R,W,re,$){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new Ni(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Vs:ci,minFilter:Br,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Re=U.state.transmissionRenderTarget[$.id],Ue=$.viewport||oe;Re.setSize(Ue.z*O.transmissionResolutionScale,Ue.w*O.transmissionResolutionScale);const Ie=O.getRenderTarget(),Ve=O.getActiveCubeFace(),nt=O.getActiveMipmapLevel();O.setRenderTarget(Re),O.getClearColor(N),X=O.getClearAlpha(),X<1&&O.setClearColor(16777215,.5),O.clear(),ut&&Te.render(re);const at=O.toneMapping;O.toneMapping=ar;const Je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),le===!0&&je.setGlobalState(O.clippingPlanes,$),Kn(R,re,$),ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let wt=0,Ut=W.length;wt<Ut;wt++){const Et=W[wt],{object:Ft,geometry:tt,material:Yt,group:Tt}=Et;if(Yt.side===si&&Ft.layers.test($.layers)){const Mn=Yt.side;Yt.side=Cn,Yt.needsUpdate=!0,fn(Ft,re,$,tt,Yt,Tt),Yt.side=Mn,Yt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re))}O.setRenderTarget(Ie,Ve,nt),O.setClearColor(N,X),Je!==void 0&&($.viewport=Je),O.toneMapping=at}function Kn(R,W,re){const $=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Re=R.length;j<Re;j++){const Ue=R[j],{object:Ie,geometry:Ve,group:nt}=Ue;let at=Ue.material;at.allowOverride===!0&&$!==null&&(at=$),Ie.layers.test(re.layers)&&fn(Ie,W,re,Ve,at,nt)}}function fn(R,W,re,$,j,Re){R.onBeforeRender(O,W,re,$,j,Re),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(O,W,re,$,R,Re),j.transparent===!0&&j.side===si&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,O.renderBufferDirect(re,W,$,j,R,Re),j.side=ba,j.needsUpdate=!0,O.renderBufferDirect(re,W,$,j,R,Re),j.side=si):O.renderBufferDirect(re,W,$,j,R,Re),R.onAfterRender(O,W,re,$,j,Re)}function gn(R,W,re){W.isScene!==!0&&(W=en);const $=Ze.get(R),j=U.state.lights,Re=U.state.shadowsArray,Ue=j.state.version,Ie=ce.getParameters(R,j.state,Re,W,re),Ve=ce.getProgramCacheKey(Ie);let nt=$.programs;$.environment=R.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(R.isMeshStandardMaterial?E:L).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",st),nt=new Map,$.programs=nt);let at=nt.get(Ve);if(at!==void 0){if($.currentProgram===at&&$.lightsStateVersion===Ue)return Gr(R,Ie),at}else Ie.uniforms=ce.getUniforms(R),R.onBeforeCompile(Ie,O),at=ce.acquireProgram(Ie,Ve),nt.set(Ve,at),$.uniforms=Ie.uniforms;const Je=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=je.uniform),Gr(R,Ie),$.needsLights=ul(R),$.lightsStateVersion=Ue,$.needsLights&&(Je.ambientLightColor.value=j.state.ambient,Je.lightProbe.value=j.state.probe,Je.directionalLights.value=j.state.directional,Je.directionalLightShadows.value=j.state.directionalShadow,Je.spotLights.value=j.state.spot,Je.spotLightShadows.value=j.state.spotShadow,Je.rectAreaLights.value=j.state.rectArea,Je.ltc_1.value=j.state.rectAreaLTC1,Je.ltc_2.value=j.state.rectAreaLTC2,Je.pointLights.value=j.state.point,Je.pointLightShadows.value=j.state.pointShadow,Je.hemisphereLights.value=j.state.hemi,Je.directionalShadowMap.value=j.state.directionalShadowMap,Je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Je.spotShadowMap.value=j.state.spotShadowMap,Je.spotLightMatrix.value=j.state.spotLightMatrix,Je.spotLightMap.value=j.state.spotLightMap,Je.pointShadowMap.value=j.state.pointShadowMap,Je.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=at,$.uniformsList=null,at}function Xi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=jc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Gr(R,W){const re=Ze.get(R);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function su(R,W,re,$,j){W.isScene!==!0&&(W=en),ot.resetTextureUnits();const Re=W.fog,Ue=$.isMeshStandardMaterial?W.environment:null,Ie=C===null?O.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sr,Ve=($.isMeshStandardMaterial?E:L).get($.envMap||Ue),nt=$.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,at=!!re.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Je=!!re.morphAttributes.position,ht=!!re.morphAttributes.normal,wt=!!re.morphAttributes.color;let Ut=ar;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=O.toneMapping);const Et=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ft=Et!==void 0?Et.length:0,tt=Ze.get($),Yt=U.state.lights;if(le===!0&&(Ee===!0||R!==te)){const Tn=R===te&&$.id===G;je.setState($,R,Tn)}let Tt=!1;$.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Yt.state.version||tt.outputColorSpace!==Ie||j.isBatchedMesh&&tt.batching===!1||!j.isBatchedMesh&&tt.batching===!0||j.isBatchedMesh&&tt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&tt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&tt.instancing===!1||!j.isInstancedMesh&&tt.instancing===!0||j.isSkinnedMesh&&tt.skinning===!1||!j.isSkinnedMesh&&tt.skinning===!0||j.isInstancedMesh&&tt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&tt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&tt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&tt.instancingMorph===!1&&j.morphTexture!==null||tt.envMap!==Ve||$.fog===!0&&tt.fog!==Re||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==je.numPlanes||tt.numIntersection!==je.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==at||tt.morphTargets!==Je||tt.morphNormals!==ht||tt.morphColors!==wt||tt.toneMapping!==Ut||tt.morphTargetsCount!==Ft)&&(Tt=!0):(Tt=!0,tt.__version=$.version);let Mn=tt.currentProgram;Tt===!0&&(Mn=gn($,W,j));let Ra=!1,Zt=!1,Wi=!1;const Kt=Mn.getUniforms(),En=tt.uniforms;if(Ne.useProgram(Mn.program)&&(Ra=!0,Zt=!0,Wi=!0),$.id!==G&&(G=$.id,Zt=!0),Ra||te!==R){Ne.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Kt.setValue(I,"projectionMatrix",R.projectionMatrix),Kt.setValue(I,"viewMatrix",R.matrixWorldInverse);const Un=Kt.map.cameraPosition;Un!==void 0&&Un.setValue(I,ke.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Kt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Kt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Zt=!0,Wi=!0)}if(j.isSkinnedMesh){Kt.setOptional(I,j,"bindMatrix"),Kt.setOptional(I,j,"bindMatrixInverse");const Tn=j.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Kt.setValue(I,"boneTexture",Tn.boneTexture,ot))}j.isBatchedMesh&&(Kt.setOptional(I,j,"batchingTexture"),Kt.setValue(I,"batchingTexture",j._matricesTexture,ot),Kt.setOptional(I,j,"batchingIdTexture"),Kt.setValue(I,"batchingIdTexture",j._indirectTexture,ot),Kt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Kt.setValue(I,"batchingColorTexture",j._colorsTexture,ot));const vn=re.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Qe.update(j,re,Mn),(Zt||tt.receiveShadow!==j.receiveShadow)&&(tt.receiveShadow=j.receiveShadow,Kt.setValue(I,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(En.envMap.value=Ve,En.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=n2()),Zt&&(Kt.setValue(I,"toneMappingExposure",O.toneMappingExposure),tt.needsLights&&ou(En,Wi),Re&&$.fog===!0&&Ke.refreshFogUniforms(En,Re),Ke.refreshMaterialUniforms(En,$,_e,me,U.state.transmissionRenderTarget[R.id]),jc.upload(I,Xi(tt),En,ot)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(jc.upload(I,Xi(tt),En,ot),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Kt.setValue(I,"center",j.center),Kt.setValue(I,"modelViewMatrix",j.modelViewMatrix),Kt.setValue(I,"normalMatrix",j.normalMatrix),Kt.setValue(I,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Tn=$.uniformsGroups;for(let Un=0,Oi=Tn.length;Un<Oi;Un++){const qi=Tn[Un];De.update(qi,Mn),De.bind(qi,Mn)}}return Mn}function ou(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,re){const $=Ze.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ze.get(R.texture).__webglTexture=W,Ze.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:re,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const re=Ze.get(R);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const ur=I.createFramebuffer();this.setRenderTarget=function(R,W=0,re=0){C=R,ee=W,w=re;let $=!0,j=null,Re=!1,Ue=!1;if(R){const Ve=Ze.get(R);if(Ve.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Ve.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(Ve.__hasExternalTextures)ot.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ve.__boundDepthTexture!==Je){if(Je!==null&&Ze.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ue=!0);const at=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[W])?j=at[W][re]:j=at[W],Re=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?j=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?j=at[re]:j=at,oe.copy(R.viewport),he.copy(R.scissor),J=R.scissorTest}else oe.copy(Se).multiplyScalar(_e).floor(),he.copy(Ae).multiplyScalar(_e).floor(),J=Be;if(re!==0&&(j=ur),Ne.bindFramebuffer(I.FRAMEBUFFER,j)&&$&&Ne.drawBuffers(R,j),Ne.viewport(oe),Ne.scissor(he),Ne.setScissorTest(J),Re){const Ve=Ze.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,re)}else if(Ue){const Ve=W;for(let nt=0;nt<R.textures.length;nt++){const at=Ze.get(R.textures[nt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+nt,at.__webglTexture,re,Ve)}}else if(R!==null&&re!==0){const Ve=Ze.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ve.__webglTexture,re)}G=-1},this.readRenderTargetPixels=function(R,W,re,$,j,Re,Ue,Ie=0){if(!(R&&R.isWebGLRenderTarget)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){Ne.bindFramebuffer(I.FRAMEBUFFER,Ve);try{const nt=R.textures[Ie],at=nt.format,Je=nt.type;if(!gt.textureFormatReadable(at)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Je)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-$&&re>=0&&re<=R.height-j&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),I.readPixels(W,re,$,j,rt.convert(at),rt.convert(Je),Re))}finally{const nt=C!==null?Ze.get(C).__webglFramebuffer:null;Ne.bindFramebuffer(I.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,W,re,$,j,Re,Ue,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(W>=0&&W<=R.width-$&&re>=0&&re<=R.height-j){Ne.bindFramebuffer(I.FRAMEBUFFER,Ve);const nt=R.textures[Ie],at=nt.format,Je=nt.type;if(!gt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.bufferData(I.PIXEL_PACK_BUFFER,Re.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),I.readPixels(W,re,$,j,rt.convert(at),rt.convert(Je),0);const wt=C!==null?Ze.get(C).__webglFramebuffer:null;Ne.bindFramebuffer(I.FRAMEBUFFER,wt);const Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await BM(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Re),I.deleteBuffer(ht),I.deleteSync(Ut),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,re=0){const $=Math.pow(2,-re),j=Math.floor(R.image.width*$),Re=Math.floor(R.image.height*$),Ue=W!==null?W.x:0,Ie=W!==null?W.y:0;ot.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,Ue,Ie,j,Re),Ne.unbindTexture()};const Zs=I.createFramebuffer(),Aa=I.createFramebuffer();this.copyTextureToTexture=function(R,W,re=null,$=null,j=0,Re=null){Re===null&&(j!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=j,j=0):Re=0);let Ue,Ie,Ve,nt,at,Je,ht,wt,Ut;const Et=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(re!==null)Ue=re.max.x-re.min.x,Ie=re.max.y-re.min.y,Ve=re.isBox3?re.max.z-re.min.z:1,nt=re.min.x,at=re.min.y,Je=re.isBox3?re.min.z:0;else{const vn=Math.pow(2,-j);Ue=Math.floor(Et.width*vn),Ie=Math.floor(Et.height*vn),R.isDataArrayTexture?Ve=Et.depth:R.isData3DTexture?Ve=Math.floor(Et.depth*vn):Ve=1,nt=0,at=0,Je=0}$!==null?(ht=$.x,wt=$.y,Ut=$.z):(ht=0,wt=0,Ut=0);const Ft=rt.convert(W.format),tt=rt.convert(W.type);let Yt;W.isData3DTexture?(ot.setTexture3D(W,0),Yt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ot.setTexture2DArray(W,0),Yt=I.TEXTURE_2D_ARRAY):(ot.setTexture2D(W,0),Yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Tt=I.getParameter(I.UNPACK_ROW_LENGTH),Mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ra=I.getParameter(I.UNPACK_SKIP_PIXELS),Zt=I.getParameter(I.UNPACK_SKIP_ROWS),Wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nt),I.pixelStorei(I.UNPACK_SKIP_ROWS,at),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je);const Kt=R.isDataArrayTexture||R.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const vn=Ze.get(R),Tn=Ze.get(W),Un=Ze.get(vn.__renderTarget),Oi=Ze.get(Tn.__renderTarget);Ne.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),Ne.bindFramebuffer(I.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let qi=0;qi<Ve;qi++)Kt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(R).__webglTexture,j,Je+qi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(W).__webglTexture,Re,Ut+qi)),I.blitFramebuffer(nt,at,Ue,Ie,ht,wt,Ue,Ie,I.DEPTH_BUFFER_BIT,I.NEAREST);Ne.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ze.has(R)){const vn=Ze.get(R),Tn=Ze.get(W);Ne.bindFramebuffer(I.READ_FRAMEBUFFER,Zs),Ne.bindFramebuffer(I.DRAW_FRAMEBUFFER,Aa);for(let Un=0;Un<Ve;Un++)Kt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,j,Je+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,j),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tn.__webglTexture,Re,Ut+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tn.__webglTexture,Re),j!==0?I.blitFramebuffer(nt,at,Ue,Ie,ht,wt,Ue,Ie,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(Yt,Re,ht,wt,Ut+Un,nt,at,Ue,Ie):I.copyTexSubImage2D(Yt,Re,ht,wt,nt,at,Ue,Ie);Ne.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Yt,Re,ht,wt,Ut,Ue,Ie,Ve,Ft,tt,Et.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Yt,Re,ht,wt,Ut,Ue,Ie,Ve,Ft,Et.data):I.texSubImage3D(Yt,Re,ht,wt,Ut,Ue,Ie,Ve,Ft,tt,Et):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Re,ht,wt,Ue,Ie,Ft,tt,Et.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Re,ht,wt,Et.width,Et.height,Ft,Et.data):I.texSubImage2D(I.TEXTURE_2D,Re,ht,wt,Ue,Ie,Ft,tt,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ra),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wi),Re===0&&W.generateMipmaps&&I.generateMipmap(Yt),Ne.unbindTexture()},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Ne.unbindTexture()},this.resetState=function(){ee=0,w=0,C=null,Ne.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}var Qd=1/1e3,a2=1e3,r2=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Qd}get fixedDelta(){return this._fixedDelta*Qd}set fixedDelta(a){this._fixedDelta=a*a2}get elapsed(){return this._elapsed*Qd}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},s2=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Ta;return i.setAttribute("position",new yi(a,3)),i.setAttribute("uv",new yi(e,2)),i})(),lr=class Yh{static get fullscreenGeometry(){return s2}constructor(e="Pass",i=new Wh,s=new up){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new Vi(Yh.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Wh),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=il){}render(e,i,s,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof Ni||i instanceof ks||i instanceof Dn||i instanceof Yh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},o2=class extends lr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},l2=`#ifdef COLOR_WRITE
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
}`,c2="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",u2=class extends ui{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new on(null),depthBuffer:new on(null),channelWeights:new on(null),opacity:new on(1)},blending:Ui,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:l2,vertexShader:c2}),this.depthFunc=Kc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},f2=class extends lr{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new u2,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Ni(1,1,{minFilter:wn,magFilter:wn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==ci?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===ln&&(this.renderTarget.texture.colorSpace=ln))}},tv=new It,Jv=class extends lr{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,h=a.getClearAlpha(),m=c!==null,p=f>=0;m?(a.getClearColor(tv),a.setClearColor(c,p?f:h)):p&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),m?a.setClearColor(tv,h):p&&a.setClearAlpha(h)}},d2=class extends lr{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Jv(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const c=a.getContext(),f=a.state.buffers,h=this.scene,m=this.camera,p=this.clearPass,x=this.inverted?0:1,g=1-x;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,x,4294967295),f.stencil.setClear(g),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(a,null):(p.render(a,e),p.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(h,m)):(a.setRenderTarget(e),a.render(h,m),a.setRenderTarget(i),a.render(h,m)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},nv=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new f2,this.depthTexture=null,this.passes=[],this.timer=new r2,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new vt),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===ci&&a.outputColorSpace===ln&&(this.inputBuffer.texture.colorSpace=ln,this.outputBuffer.texture.colorSpace=ln,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.depthTexture=new cp;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Is,a.type=Fs):a.type=rr,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,c=l===null?new vt:l.getDrawingBufferSize(new vt),f={minFilter:wn,magFilter:wn,stencilBuffer:e,depthBuffer:a,type:i},h=new Ni(c.width,c.height,f);return s>0&&(h.samples=s),i===ci&&l!==null&&l.outputColorSpace===ln&&(h.texture.colorSpace=ln),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new vt),c=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,c,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(a of i)a.setDepthTexture(h)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const c=(h,m)=>h||m.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c=!1,f,h,m;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,s,l,a,c),p.needsSwap&&(c&&(i.renderToScreen=p.renderToScreen,f=e.getContext(),h=e.state.buffers.stencil,h.setFunc(f.NOTEQUAL,1,4294967295),i.render(e,s,l,a,c),h.setFunc(f.EQUAL,1,4294967295)),m=s,s=l,l=m),p instanceof d2?c=!0:p instanceof o2&&(c=!1))}setSize(a,e,i){const s=this.renderer,l=s.getSize(new vt);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const c=s.getDrawingBufferSize(new vt);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),lr.fullscreenGeometry.dispose()}},Fr={NONE:0,DEPTH:1,CONVOLUTION:2},Pt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},h2=class{constructor(){this.shaderParts=new Map([[Pt.FRAGMENT_HEAD,null],[Pt.FRAGMENT_MAIN_UV,null],[Pt.FRAGMENT_MAIN_IMAGE,null],[Pt.VERTEX_HEAD,null],[Pt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Fr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=sr}},Jd=!1,iv=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case si:i=this.materialsFlatShadedDoubleSide;break;case Cn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case si:i=this.materialsDoubleSide;break;case Cn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof ui))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=ba;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=Cn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=si,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Cn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=si,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Jd){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Jd}static set workaroundEnabled(a){Jd=a}},Ct={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},p2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",m2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",x2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",g2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",v2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",_2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",S2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",y2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",b2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",M2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",E2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",T2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",A2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",R2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",C2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",w2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",D2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",U2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",L2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",N2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",O2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",P2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",B2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",z2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",F2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",I2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",H2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",G2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",V2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",k2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",X2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",W2=new Map([[Ct.ADD,p2],[Ct.AVERAGE,m2],[Ct.COLOR,x2],[Ct.COLOR_BURN,g2],[Ct.COLOR_DODGE,v2],[Ct.DARKEN,_2],[Ct.DIFFERENCE,S2],[Ct.DIVIDE,y2],[Ct.DST,null],[Ct.EXCLUSION,b2],[Ct.HARD_LIGHT,M2],[Ct.HARD_MIX,E2],[Ct.HUE,T2],[Ct.INVERT,A2],[Ct.INVERT_RGB,R2],[Ct.LIGHTEN,C2],[Ct.LINEAR_BURN,w2],[Ct.LINEAR_DODGE,D2],[Ct.LINEAR_LIGHT,U2],[Ct.LUMINOSITY,L2],[Ct.MULTIPLY,N2],[Ct.NEGATION,O2],[Ct.NORMAL,P2],[Ct.OVERLAY,B2],[Ct.PIN_LIGHT,z2],[Ct.REFLECT,F2],[Ct.SATURATION,I2],[Ct.SCREEN,H2],[Ct.SOFT_LIGHT,G2],[Ct.SRC,V2],[Ct.SUBTRACT,k2],[Ct.VIVID_LIGHT,X2]]),q2=class extends or{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new on(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return W2.get(this.blendFunction)}},$v=class extends or{constructor(a,e,{attributes:i=Fr.NONE,blendFunction:s=Ct.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new q2(s),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=sr,this._outputColorSpace=Hi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=il){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Ni||e instanceof ks||e instanceof Dn||e instanceof lr)&&this[a].dispose()}}},av=class extends lr{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new Jv,this.overrideMaterialManager=i===null?null:new iv(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new iv(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const c=this.scene,f=this.camera,h=this.selection,m=f.layers.mask,p=c.background,x=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,f):a.render(c,f),f.layers.mask=m,c.background=p,a.shadowMap.autoUpdate=x}},Y2=`#include <common>
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
}`,j2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Z2=class extends ui{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:nu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new on(null),depthBuffer:new on(null),resolution:new on(new vt),texelSize:new on(new vt),cameraNear:new on(.3),cameraFar:new on(1e3),aspect:new on(1),time:new on(0)},blending:Ui,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=il){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=Y2.replace(Pt.FRAGMENT_HEAD,a.get(Pt.FRAGMENT_HEAD)||"").replace(Pt.FRAGMENT_MAIN_UV,a.get(Pt.FRAGMENT_MAIN_UV)||"").replace(Pt.FRAGMENT_MAIN_IMAGE,a.get(Pt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=j2.replace(Pt.VERTEX_HEAD,a.get(Pt.VERTEX_HEAD)||"").replace(Pt.VERTEX_MAIN_SUPPORT,a.get(Pt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof Si?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return Pt}};function rv(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(c,l))}}function K2(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&Fr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Pt.FRAGMENT_HEAD)||"",x=m.get(Pt.FRAGMENT_MAIN_UV)||"",g=m.get(Pt.FRAGMENT_MAIN_IMAGE)||"",S=m.get(Pt.VERTEX_HEAD)||"",y=m.get(Pt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,T=new Set;if(f&&(x+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const D=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${a}MainSupport(`,y+=D?`vUv);
`:`);
`;for(const U of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const B of U[1].split(/\s*,\s*/))i.varyings.add(B),M.add(B),T.add(B);for(const U of l.matchAll(h))T.add(U[1])}for(const D of s.matchAll(h))T.add(D[1]);for(const D of e.defines.keys())T.add(D.replace(/\([\w\s,]*\)/g,""));for(const D of e.uniforms.keys())T.add(D);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((D,U)=>i.uniforms.set(a+U.charAt(0).toUpperCase()+U.slice(1),D)),e.defines.forEach((D,U)=>i.defines.set(a+U.charAt(0).toUpperCase()+U.slice(1),D));const b=new Map([["fragment",s],["vertex",l]]);rv(a,T,i.defines),rv(a,T,b),s=b.get("fragment"),l=b.get("vertex");const v=e.blendMode;if(i.blendModes.set(v.blendFunction,v),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(g+=e.inputColorSpace===ln?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Hi?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const D=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(i.attributes&Fr.DEPTH)!==0&&D.test(s)&&(g+="depth, ",i.readDepth=!0),g+=`color1);
	`;const U=a+"BlendOpacity";i.uniforms.set(U,v.opacity),g+=`color0 = blend${v.blendFunction}(color0, color1, ${U});

	`,p+=`uniform float ${U};

`}if(p+=s+`
`,l!==null&&(S+=l+`
`),m.set(Pt.FRAGMENT_HEAD,p),m.set(Pt.FRAGMENT_MAIN_UV,x),m.set(Pt.FRAGMENT_MAIN_IMAGE,g),m.set(Pt.VERTEX_HEAD,S),m.set(Pt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const D of e.extensions)i.extensions.add(D)}}var sv=class extends lr{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new Z2(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new h2;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===Ct.DST)a.attributes|=f.getAttributes()&Fr.DEPTH;else{if((a.attributes&f.getAttributes()&Fr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);K2("e"+e++,f,a)}let i=a.shaderParts.get(Pt.FRAGMENT_HEAD),s=a.shaderParts.get(Pt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Pt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of a.blendModes.values())i+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(a.attributes&Fr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===ln&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Pt.FRAGMENT_HEAD,i),a.shaderParts.set(Pt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Pt.FRAGMENT_MAIN_UV,l);for(const[f,h]of a.shaderParts)h!==null&&a.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=il){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==ci&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const Q2=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,e.width,e.height);const s=new Dn(e);s.minFilter=wn,s.magFilter=wn,s.generateMipmaps=!1;const l=[];let c=null;const f=64;let h=.1*64;const m=1/f,p=()=>{i.fillStyle="black",i.fillRect(0,0,e.width,e.height)},x=y=>{const M={x:y.x*64,y:(1-y.y)*64};let T=1;const b=B=>Math.sin(B*Math.PI/2),v=B=>-B*(B-2);y.age<f*.3?T=b(y.age/(f*.3)):T=v(1-(y.age-f*.3)/(f*.7))||0,T*=y.force;const D=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${T*255}`,U=320;i.shadowOffsetX=U,i.shadowOffsetY=U,i.shadowBlur=h,i.shadowColor=`rgba(${D},${.22*T})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(M.x-U,M.y-U,h,0,Math.PI*2),i.fill()};return{canvas:e,texture:s,addTouch:y=>{let M=0,T=0,b=0;if(c){const v=y.x-c.x,D=y.y-c.y;if(v===0&&D===0)return;const U=v*v+D*D,B=Math.sqrt(U);T=v/(B||1),b=D/(B||1),M=Math.min(U*1e4,1)}c={x:y.x,y:y.y},l.push({x:y.x,y:y.y,age:0,force:M,vx:T,vy:b})},update:()=>{p();for(let y=l.length-1;y>=0;y--){const M=l[y],T=M.force*m*(1-M.age/f);M.x+=M.vx*T,M.y+=M.vy*T,M.age++,M.age>f&&l.splice(y,1)}for(let y=0;y<l.length;y++)x(l[y]);s.needsUpdate=!0},set radiusScale(y){h=.1*64*y},get radiusScale(){return h/(.1*64)},size:64}},J2=(a,e)=>{const i=`
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
    `;return new $v("LiquidEffect",i,{uniforms:new Map([["uTexture",new on(a)],["uStrength",new on(e?.strength??.025)],["uTime",new on(0)],["uFreq",new on(e?.freq??4.5)]])})},ov={square:0,circle:1,triangle:2,diamond:3},$2=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,eR=`
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
`,$d=10,tR=({variant:a="square",pixelSize:e=3,color:i="#B19EEF",className:s,style:l,antialias:c=!0,patternScale:f=2,patternDensity:h=1,liquid:m=!1,liquidStrength:p=.1,liquidRadius:x=1,pixelSizeJitter:g=0,enableRipples:S=!0,rippleIntensityScale:y=1,rippleThickness:M=.1,rippleSpeed:T=.3,liquidWobbleSpeed:b=4.5,autoPauseOffscreen:v=!0,speed:D=.5,transparent:U=!0,edgeFade:B=.5,noiseAmount:V=0})=>{const O=pe.useRef(null),z=pe.useRef({visible:!0}),ee=pe.useRef(D),w=pe.useRef(null),C=pe.useRef(null);return pe.useEffect(()=>{const G=O.current;if(!G)return;ee.current=D;const te=["antialias","liquid","noiseAmount"],oe={antialias:c,liquid:m,noiseAmount:V};let he=!1;if(!w.current)he=!0;else if(C.current){for(const J of te)if(C.current[J]!==oe[J]){he=!0;break}}if(he){if(w.current){const He=w.current;He.resizeObserver?.disconnect(),cancelAnimationFrame(He.raf),He.quad?.geometry.dispose(),He.material.dispose(),He.composer?.dispose(),He.renderer.dispose(),He.renderer.domElement.parentElement===G&&G.removeChild(He.renderer.domElement),w.current=null}const J=document.createElement("canvas"),N=new i2({canvas:J,antialias:c,alpha:!0,powerPreference:"high-performance"});N.domElement.style.width="100%",N.domElement.style.height="100%",N.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),G.appendChild(N.domElement),U?N.setClearAlpha(0):N.setClearColor(0,1);const X={uResolution:{value:new vt(0,0)},uTime:{value:0},uColor:{value:new It(i)},uClickPos:{value:Array.from({length:$d},()=>new vt(-1,-1))},uClickTimes:{value:new Float32Array($d)},uShapeType:{value:ov[a]??0},uPixelSize:{value:e*N.getPixelRatio()},uScale:{value:f},uDensity:{value:h},uPixelJitter:{value:g},uEnableRipples:{value:S?1:0},uRippleSpeed:{value:T},uRippleThickness:{value:M},uRippleIntensity:{value:y},uEdgeFade:{value:B}},Y=new Wh,me=new up(-1,1,1,-1,0,1),_e=new ui({vertexShader:$2,fragmentShader:eR,uniforms:X,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:kh}),P=new ll(2,2),ae=new Vi(P,_e);Y.add(ae);const Se=new xE,Ae=()=>{const He=G.clientWidth||1,Ye=G.clientHeight||1;N.setSize(He,Ye,!1),X.uResolution.value.set(N.domElement.width,N.domElement.height),w.current?.composer&&w.current.composer.setSize(N.domElement.width,N.domElement.height),X.uPixelSize.value=e*N.getPixelRatio()};Ae();const Be=new ResizeObserver(Ae);Be.observe(G);const le=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const He=new Uint32Array(1);return window.crypto.getRandomValues(He),He[0]/4294967295}return Math.random()})()*1e3;let Ee,Pe,ke;if(m){Pe=Q2(),Pe.radiusScale=x,Ee=new nv(N);const He=new av(Y,me);ke=J2(Pe.texture,{strength:p,freq:b});const Ye=new sv(me,ke);Ye.renderToScreen=!0,Ee.addPass(He),Ee.addPass(Ye)}if(V>0){Ee||(Ee=new nv(N),Ee.addPass(new av(Y,me)));const He=new $v("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new on(0)],["uAmount",new on(V)]])}),Ye=new sv(me,He);Ye.renderToScreen=!0,Ee&&Ee.passes.length>0&&Ee.passes.forEach(gt=>gt.renderToScreen=!1),Ee.addPass(Ye)}Ee&&Ee.setSize(N.domElement.width,N.domElement.height);const lt=He=>{const Ye=N.domElement.getBoundingClientRect(),gt=N.domElement.width/Ye.width,Ne=N.domElement.height/Ye.height,Bt=(He.clientX-Ye.left)*gt,Ze=(Ye.height-(He.clientY-Ye.top))*Ne;return{fx:Bt,fy:Ze,w:N.domElement.width,h:N.domElement.height}},en=He=>{const{fx:Ye,fy:gt}=lt(He),Ne=w.current?.clickIx??0;X.uClickPos.value[Ne].set(Ye,gt),X.uClickTimes.value[Ne]=X.uTime.value,w.current&&(w.current.clickIx=(Ne+1)%$d)},ut=He=>{if(!Pe)return;const{fx:Ye,fy:gt,w:Ne,h:Bt}=lt(He);Pe.addTouch({x:Ye/Ne,y:gt/Bt})};N.domElement.addEventListener("pointerdown",en,{passive:!0}),N.domElement.addEventListener("pointermove",ut,{passive:!0});let _t=0;const I=()=>{if(v&&!z.current.visible){_t=requestAnimationFrame(I);return}X.uTime.value=le+Se.getElapsedTime()*ee.current,ke&&(ke.uniforms.get("uTime").value=X.uTime.value),Ee?(Pe&&Pe.update(),Ee.passes.forEach(He=>{const Ye=He.effects;Ye&&Ye.forEach(gt=>{const Ne=gt.uniforms?.get("uTime");Ne&&(Ne.value=X.uTime.value)})}),Ee.render()):N.render(Y,me),_t=requestAnimationFrame(I)};_t=requestAnimationFrame(I),w.current={renderer:N,scene:Y,camera:me,material:_e,clock:Se,clickIx:0,uniforms:X,resizeObserver:Be,raf:_t,quad:ae,timeOffset:le,composer:Ee,touch:Pe,liquidEffect:ke}}else{const J=w.current;if(J.uniforms.uShapeType.value=ov[a]??0,J.uniforms.uPixelSize.value=e*J.renderer.getPixelRatio(),J.uniforms.uColor.value.set(i),J.uniforms.uScale.value=f,J.uniforms.uDensity.value=h,J.uniforms.uPixelJitter.value=g,J.uniforms.uEnableRipples.value=S?1:0,J.uniforms.uRippleIntensity.value=y,J.uniforms.uRippleThickness.value=M,J.uniforms.uRippleSpeed.value=T,J.uniforms.uEdgeFade.value=B,U?J.renderer.setClearAlpha(0):J.renderer.setClearColor(0,1),J.liquidEffect){const N=J.liquidEffect;N&&(N.value=p);const X=J.liquidEffect.uniforms.get("uFreq");X&&(X.value=b)}J.touch&&(J.touch.radiusScale=x)}return C.current=oe,()=>{if(w.current&&he||!w.current)return;const J=w.current;J.resizeObserver?.disconnect(),cancelAnimationFrame(J.raf),J.quad?.geometry.dispose(),J.material.dispose(),J.composer?.dispose(),J.renderer.dispose(),J.renderer.domElement.parentElement===G&&G.removeChild(J.renderer.domElement),w.current=null}},[c,m,V,e,f,h,S,y,M,T,g,B,U,p,x,b,v,a,i,D]),ze.jsx("div",{ref:O,className:`w-full h-full relative overflow-hidden ${s??""}`,style:l,"aria-label":"PixelBlast interactive background"})};function nR(){return ze.jsxs("div",{className:"min-h-screen relative font-medium",children:[ze.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-10,filter:"blur(1px) opacity(0.6)"},children:ze.jsx(tR,{variant:"circle",pixelSize:6,color:"#B19EEF",patternScale:3,patternDensity:1.5,pixelSizeJitter:0,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,speed:.6,edgeFade:.1,transparent:!0})}),ze.jsx("div",{style:{position:"relative",zIndex:1},children:ze.jsx(Rb,{children:ze.jsxs(ab,{children:[ze.jsx(th,{path:"/",element:ze.jsx(Wb,{})}),ze.jsx(th,{path:"/projects",element:ze.jsx(Yb,{})})]})})})]})}hy.createRoot(document.getElementById("root")).render(ze.jsx(pe.StrictMode,{children:ze.jsx(nR,{})}));
