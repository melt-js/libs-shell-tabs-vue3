(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}})();function La(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var r=t.default;if(typeof r=="function"){var n=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};n.prototype=r.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(e){var i=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,i.get?i:{enumerable:!0,get:function(){return t[e]}})}),n}var Qe={exports:{}};function Dt(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}function Aa(t){if(Array.isArray(t))return t}function wa(t){if(Array.isArray(t))return Dt(t)}function Ia(t,r){var n=typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Kt(t))||r){n&&(t=n);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,f=!0,b=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return f=u.done,u},e:function(u){b=!0,d=u},f:function(){try{f||n.return==null||n.return()}finally{if(b)throw d}}}}function Ot(t,r,n){return(r=Oa(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Ta(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ca(t,r){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e,i,d,f,b=[],u=!0,I=!1;try{if(d=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=d.call(n)).done)&&(b.push(e.value),b.length!==r);u=!0);}catch(V){I=!0,i=V}finally{try{if(!u&&n.return!=null&&(f=n.return(),Object(f)!==f))return}finally{if(I)throw i}}return b}}function Ma(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Na(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,e)}return n}function tt(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?mr(Object(n),!0).forEach(function(e){Ot(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mr(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function mt(t,r){return Aa(t)||Ca(t,r)||Kt(t,r)||Ma()}function wt(t){return wa(t)||Ta(t)||Kt(t)||Na()}function Da(t,r){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,r);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Oa(t){var r=Da(t,"string");return typeof r=="symbol"?r:r+""}function We(t){"@babel/helpers - typeof";return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},We(t)}function Kt(t,r){if(t){if(typeof t=="string")return Dt(t,r);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dt(t,r):void 0}}var Ae=null;function Ba(){if(typeof window!="undefined"){Ae=window;return}if(typeof global!="undefined"){Ae=global;return}throw new Error("unable to locate global object")}function ve(){return Ae||Ba(),Ae}function Pa(t){var r,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=null;(r=Ae)!==null&&r!==void 0&&r.__HEL_MICRO_SHARED__&&(e=Ae.__HEL_MICRO_SHARED__),n?Ae=tt(tt({},Ae),t):Ae=t,e&&(Ae.__HEL_MICRO_SHARED__=e)}function gt(){return ve()}function Ir(){var t=ve();return t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver}function gr(t,r){for(var n=null,e=t.length,i=0;i<e;i++){var d=t[i];if(d.tagName===r){n=d;break}}return n}function Tr(t){return Object.keys(t)}function Va(){var t=function(i){var d=i||{},f=d.search||"";if(!f){var b=d.hash||"",u=b.split("?")[1]||"";u&&(f="?".concat(u))}return f};try{var r;return t((r=ve())===null||r===void 0||(r=r.top)===null||r===void 0?void 0:r.location)}catch(e){var n;return t((n=ve())===null||n===void 0?void 0:n.location)}}function vr(t){var r,n=(r=ve())===null||r===void 0?void 0:r.localStorage;return n==null?void 0:n.getItem(t)}function br(t,r){var n,e=(n=ve())===null||n===void 0?void 0:n.localStorage;return e==null?void 0:e.setItem(t,r)}function $a(){var t=Va(),r={};if(t!=null&&t.startsWith("?")){var n=t.substring(1),e=n.split("&");e.forEach(function(i){var d=i.split("="),f=mt(d,2),b=f[0],u=f[1];r[b]=u})}return r}function Cr(){var t="";try{throw new Error("getJsRunLocation")}catch(e){var r=e.stack.split(`
`),n=r.length;t=r[n-1]||r[n-2]||""}return t}function Se(t,r,n,e){var i=ne(t,r);i[n]=e}function ne(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t[r];return e||(e=n,t[r]=e),e}function Mr(t,r){Object.keys(r).forEach(function(n){var e=r[n];[null,void 0,""].includes(e)||(t[n]=e)})}function Bt(t,r){t.includes(r)||t.push(r)}function Nr(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.nullValues,e=n===void 0?[null,void 0,""]:n,i=r.emptyObjIsNull,d=i===void 0?!0:i,f=r.emptyArrIsNull,b=f===void 0?!0:f,u=e.includes(t);if(u)return!0;if(Array.isArray(t))return b?t.length===0:!1;if(We(t)==="object"){var I=Tr(t),V=I.length;return d?V===0:!1}return!1}function Dr(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r}function Ra(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function Ha(){var t=ve();return t.process&&t.global&&!t.document}function Ka(t,r,n){if(t&&typeof t!="string")return t;try{var e=JSON.parse(t);return e||r}catch(i){if(r!==void 0)return r;throw n?new Error(n):i}}var Or=Nr,Pt=Bt,Br=Tr;function Fa(t,r){var n=[];return t.forEach(function(e){return Pt(n,e)}),r.forEach(function(e){return Pt(n,e)}),n}function Pr(t,r){var n=r||function(i){return!Or(i)},e={};return Br(t).forEach(function(i){n(t[i])&&(e[i]=t[i])}),e}function Ua(t,r,n){var e=n,i=Ia(t),d;try{for(i.s();!(d=i.n()).done;){var f=d.value,b=f[r];if(![null,void 0,""].includes(b)){e=b;break}}}catch(u){i.e(u)}finally{i.f()}return e}function Vr(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"MULTI",n=t.split(`
`),e=n.length-1,i=n.map(function(d,f){var b;if(!d&&(f===0||f===e))return"";var u=function(K,z){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",X=K;return K.endsWith("<br/>")?(X=K.substring(0,X.length-5),"".concat(X).concat(z)):"".concat(X).concat(D)},I=((b=d.trimStart)===null||b===void 0?void 0:b.call(d))||d;return r==="MULTI"?"".concat(u(I,""),`
`):(I=u(I,`
`," "),I)}).join("");return i}function $r(t){return Vr(t,"ONE")}function za(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=ve(),e=$r(t),i=n.alert||Dr;if(r){var d;!((d=n.location)===null||d===void 0)&&d.port&&i(e);return}i(e)}function Me(t,r,n){t.dataset?t.dataset[r]=n:t.setAttribute("data-".concat(r),n)}function vt(t){Me(t,"heldisabled","1"),t.disabled=!0}var Ga=Object.freeze({__proto__:null,noop:Dr,hasProp:Ra,isServer:Ha,safeParse:Ka,isNull:Or,noDupPush:Pt,okeys:Br,merge2List:Fa,purify:Pr,getObjsVal:Ua,pfstr:Vr,nbstr:$r,nbalert:za,setDataset:Me,disableNode:vt});function ja(t,r){var n=this,e=r.fn,i=r.fnName,d=r.arg1PlatObjFnKeys,f=d.includes(i);return function(){for(var b=function(X){return tt({platform:t},Pr(X||{}))},u=arguments.length,I=new Array(u),V=0;V<u;V++)I[V]=arguments[V];var K=I[0],z=I[1];return f?I[0]=b(K):I[1]=b(z),e.apply(n,I)}}function Rr(t,r,n){var e=n||{},i=e.ignoreKeys,d=i===void 0?[]:i,f=e.arg1PlatObjFnKeys,b=f===void 0?[]:f,u={};return Object.keys(r).forEach(function(I){var V=r[I];if(d.includes(I)){u[I]=V;return}var K=We(V);if(K&&K==="object"){u[I]=Rr(t,V,n);return}if(K==="function"){u[I]=ja(t,{arg1PlatObjFnKeys:b,fn:V,fnName:I});return}u[I]=V}),u}var Ya="hel",Hr="unpkg",Ft={NONE:0,LOG:1,TRACE:2},oe="__default_online_ver__",Kr=Hr,le={CORE_VER:"4.13.1",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:oe,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:Kr,LS_LOG_MODE:"HelConfig.logMode",LS_LOG_FILTER:"HelConfig.logFilter",PLAT_HEL:Ya,PLAT_UNPKG:Hr,KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},nt={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},at={NOT_LOAD:0,LOADING:1,LOADED:2},Fr=le.LS_LOG_FILTER,Ur=le.LS_LOG_MODE,ot=Ft.NONE,zr=Ft.LOG,Wa=Ft.TRACE,Pe={isIncludeFilter:function(r,n){if(!n.includes(","))return r.includes(n);var e=n.split(",");return e.some(function(i){return r.includes(i)})},getLogFilter:function(){return He().logFilter},setLogFilter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;He().logFilter=r,n&&br(Fr,r)},setLogMode:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,e=parseInt(r,10);[ot,zr,Wa].includes(e)&&(He().logMode=e,n&&br(Ur,e))},getLogMode:function(){return He().logMode}},Be={};function Xa(){if(!He().isInit){He().isInit=!0;var t=$a(),r=t.hellog,n=t.hellogf,e=r||vr(Ur)||ot;Pe.setLogMode(e,!1);var i=n||vr(Fr)||"";Pe.setLogFilter(i,!1)}}function qa(){return{logMode:ot,logFilter:"",isInit:!1}}function Ja(){if(Be=gt().__HEL_MICRO_DEBUG__,!Nr(Be)){Be.logMode===void 0&&(Be.logMode=ot,Be.logFilter="");return}Be=qa(),gt().__HEL_MICRO_DEBUG__=Be;try{Xa()}catch(t){}}function bt(){return Pe.getLogMode()!==ot}function He(){return Be}var _r="  %c--> HEL LOG:",yr="color:#ad4e00;font-weight:600";function me(){if(bt()){for(var t=Pe.getLogMode()===zr?console.log:console.trace||console.log,r=arguments.length,n=new Array(r),e=0;e<r;e++)n[e]=arguments[e];var i=n[0],d=n.slice(1);if(typeof i!="string")return t.apply(void 0,[_r,yr].concat(n));var f=Pe.getLogFilter(),b=["".concat(_r," ").concat(i),yr].concat(wt(d));if(f){Pe.isIncludeFilter(i,f)&&t.apply(void 0,wt(b));return}t.apply(void 0,wt(b))}}var rt={};function Qa(t){!bt()||rt[t]||(rt[t]=Date.now())}function Ut(t,r,n){if(!(!bt()||!rt[t])){var e=rt[t];me("[[ PerfCheck ]] (".concat(t,"/").concat(r,") costs ").concat(Date.now()-e," ms")),n&&Gr(t)}}function Gr(t){rt[t]=0}var Za=le.DEFAULT_API_URL,eo=le.DEFAULT_USER_LS_KEY,It=le.PLAT_HEL,Er=le.PLAT_UNPKG,to=le.DEFAULT_API_PREFIX,ro=le.CORE_VER,no=le.KEY_CSS_LINK_TAG_ADDED,ao=le.KEY_STYLE_TAG_ADDED,Sr=le.KEY_IGNORE_CSS_PREFIX_LIST,oo=le.KEY_IGNORE_STYLE_TAG_KEY,io=le.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Vt(t){var r=t||{},n=r.apiPrefix;return{apiMode:"get",apiPrefix:n,apiSuffix:"",apiPathOfApp:Za,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,customMetaUrl:"",customMetaJsonpUrl:"",getMeta:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:eo,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function $t(t){var r=tt(tt({isConfigOverwrite:!1,platform:t,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},Vt()),{},{origin:Vt({apiPrefix:to})});return r}function Rt(){var t={};return{on:function(n,e){var i=t[n];if(!i){var d=[];t[n]=d,i=d}i.push(e)},emit:function(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),d=1;d<e;d++)i[d-1]=arguments[d];var f=t[n];if(f){var b=f.slice();b.forEach(function(u){return u.apply(void 0,i)})}},off:function(n,e){var i=t[n];if(i)for(var d=0,f=i.length;d<f;d++){var b=i[d];if(b===e){i.splice(d,1);break}}}}}function lo(){var t=$t(Er),r=$t(It),n={platform:It,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:Ot(Ot({},Er,t),It,r),common:{}},e=Rt(),i=Rt();return{ver:ro,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,patchedHeadAppend:null,patchedBodyAppend:null,createFeature:Cr(),eventBus:e,userEventBus:i,cacheRoot:n,unpkgCache:t,helCache:r,dev:{setLogMode:Pe.setLogMode,setLogFilter:Pe.setLogFilter}}}function xr(t){var r=[no,ao,Sr,oo,io],n=function(i){return i===Sr?[]:{}};r.forEach(function(e){return ne(t,e,n(e))})}function so(){var t=Ke();if(t){var r=t.cacheRoot;ne(r,"appGroupName2platform"),ne(r,"common");var n=r.caches;Object.keys(n).forEach(function(e){var i=n[e];ne(i,"appGroupName2firstVer"),ne(i,"appName2isLibAssigned"),ne(i,"appName2verExtraCssList"),ne(i,"appName2verCustomData"),ne(i,"hook"),ne(i,"origin",Vt()),ne(i.origin,"hook")}),xr(r.common),t.userEventBus||(t.userEventBus=Rt());return}t=lo(),xr(t.cacheRoot.common),gt().__HEL_MICRO_SHARED__=t}function Ke(){var t=gt().__HEL_MICRO_SHARED__;return t}function _t(){return Kr}function ie(t){var r=t||_t(),n=Fe(),e=n.caches[r];if(!e){var i=We(t);if(i!=="string")throw console.error("invalid plaform:",t),new Error("fatal error: platform only can be a string, now it is ".concat(i));var d=$t(t);n.caches[r]=d,e=d}return e}function Fe(){return Ke().cacheRoot}var Ne={getCustomData:function(r,n,e){var i=e.versionId,d=e.platform,f=ie(d),b=f.appName2verCustomData,u=ne(b,r),I=ne(u,n);return I[i||oe]},getAppMeta:function(r,n){var e=ie(n),i=e.appName2app;return i[r]},setVerLoadStatus:function(r,n,e,i){var d=i||{},f=d.versionId,b=d.platform,u=ie(b)[e],I=f||oe;Se(u,r,I,n)},getVerLoadStatus:function(r,n,e){var i,d=e||{},f=d.versionId,b=d.platform,u=ie(b)[n],I=f||oe;return((i=u[r])===null||i===void 0?void 0:i[I])||at.NOT_LOAD},ensureOnlineModule:function(r,n,e){if(!r[oe]){var i=Ne.getAppMeta(n,e),d=r[i==null?void 0:i.online_version];d&&(r[oe]=d)}}};function co(t,r){var n,e=r||{},i=e.versionId,d=e.platform,f=ie(d),b=f.appName2verEmitApp,u=f.appName2Comp,I=f.strictMatchVer,V=f.appName2EmitApp,K=(n=e.strictMatchVer)!==null&&n!==void 0?n:I,z=ne(b,t);Ne.ensureOnlineModule(z,t,d);var D=i||oe,X=z[D],Z=u[t],re=Z?{Comp:Z}:null,ae=K?null:V[t]||re,pe=X||ae||null;return me("[[ core:getVerApp ]] appName,options,result:",t,e,pe),pe}function jr(t,r){me("[[ core:setEmitApp ]] appName,emitApp:",t,r);var n=r.versionId,e=r.platform,i=ie(e),d=i.appName2verEmitApp,f=i.appName2Comp,b=i.appName2EmitApp,u=ne(d,t);u[oe]||(f[t]=r.Comp,b[t]=r,Se(d,t,oe,r)),n&&Se(d,t,n,r)}var kr=le.KEY_CSS_LINK_TAG_ADDED,Tt=le.KEY_STYLE_TAG_ADDED,Lr=le.KEY_IGNORE_CSS_PREFIX_LIST,uo=le.KEY_IGNORE_STYLE_TAG_KEY,Ct=le.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Yr(t){var r=Fe(),n=r.common,e=ne(n,t);return e}function ht(t){var r=Fe(),n=r.common;return n[t]}function et(t,r){var n=Yr(t),e=n[r];return e!==void 0?e:null}function Ze(t,r,n){var e=Yr(t);e[r]=n}var ye={setIgnoreCssPrefix:function(r){var n=ht(Lr);Bt(n,r)},setIgnoreStyleTagKey:function(r){var n=ye.getIgnoreStyleTagMap();n[r]=1},getIgnoreStyleTagMap:function(){var r=ht(uo);return r},setIgnoreCssPrefixKey:function(r,n){var e=et(Ct,r);e||(e=[],Ze(Ct,r,e)),Bt(e,n)},getIgnoreCssPrefixKeys:function(r){var n=ht(Ct);return n[r]||[]},getMatchedIgnoreCssPrefix:function(r){for(var n=ht(Lr),e="",i=0;i<n.length;i++){var d=n[i];if(r.startsWith(d)){e=d;break}}return e},getIgnoreCssPrefixCssUrlList:function(r){var n=et(kr,r);return n||(n=[],Ze(kr,r,n)),n},setIgnoreCssPrefixCssUrl:function(r,n){var e=ye.getIgnoreCssPrefixCssUrlList(r);e.push(n)},getStyleTagText:function(r){var n=et(Tt,r)||"";return n},clearStyleTagText:function(r){Ze(Tt,r,"")},appendStyleTagText:function(r,n){var e=ye.getStyleTagText(r);Ze(Tt,r,"".concat(e," ").concat(n))}};function zt(t,r){var n=t.apiMode,e=t.apiPrefix,i=t.apiSuffix,d=t.apiPathOfApp,f=t.apiPathOfAppVersion,b=t.getSubAppAndItsVersionFn,u=t.onFetchMetaFailed,I=t.strictMatchVer,V=t.getUserName,K=t.userLsKey,z=t.shouldUseGray,D=t.getApiPrefix,X=t.trustAppNames,Z=t.platform,re=t.origin,ae=t.hook,pe=t.customMetaUrl,fe=t.customMetaJsonpUrl,we=t.getMeta,de={apiMode:n,apiPrefix:e,apiSuffix:i,apiPathOfApp:d,apiPathOfAppVersion:f,getSubAppAndItsVersionFn:b,onFetchMetaFailed:u,strictMatchVer:I,getUserName:V,userLsKey:K,shouldUseGray:z,getApiPrefix:D,trustAppNames:X,hook:ae,platform:Z,customMetaUrl:pe,customMetaJsonpUrl:fe,getMeta:we};return r&&(de.origin=re),de}function fo(t){var r=ie(t);return zt(r,!0)}function po(t){var r=Ke(),n=r.nativeHeadAppend,e=r.nativeBodyAppend,i=t.headAppend||null,d=t.bodyAppend||null,f=function(u){return"pass same ".concat(u," handle, hel will ignore it for avlid 'Maximum call stack size exceeded'")};i&&i===n?console.error(f("headAppend")):r.patchedHeadAppend=i,d&&d===e?console.error(f("bodyAppend")):r.patchedBodyAppend=d}function ho(t,r){var n=ie(r),e=zt(t);n.isConfigOverwrite||(n.isConfigOverwrite=!0,Mr(n,e))}function mo(t,r){var n=ie(t),e="[[ core:originInit ]] invalid call, it can only been called";if(n.isConfigOverwrite){me("".concat(e," before init"));return}if(n.isOriginInitCalled){me("".concat(e," one time"));return}var i=zt(r);n.isOriginInitCalled=!0,Mr(n.origin,i)}function yt(t){return Fe().appGroupName2platform[t]||_t()}function go(t,r,n){var e=Fe().appGroupName2platform;return(n||!e[t])&&(e[t]=r),yt(t)}function Gt(t){return Fe().appName2platform[t]||_t()}function vo(t,r,n){var e=Fe().appName2platform;return(n||!e[t])&&(e[t]=r),Gt(t)}function Wr(t,r){var n=r.customKey,e=r.platform,i=e===void 0?Gt(t):e,d=ie(i),f=d.appName2verCustomData,b=ne(f,t),u=ne(b,n);return u}function bo(t,r){var n=Wr(t,r),e=n[r.versionId||oe];return e!==void 0?e:null}function _o(t,r){var n=r.customValue,e=r.versionId,i=Wr(t,r);i[e||oe]=n,i[oe]||(i[oe]=n)}var yo=nt.STYLE_TAG_ADDED,Eo=nt.CSS_LINK_TAG_ADDED;function Xe(){return Ke().eventBus}function So(){return Ke().userEventBus}var Et={styleTagAdded:function(r){return"".concat(yo,"/").concat(r)},cssLinkTagAdded:function(r){return"".concat(Eo,"(").concat(r,")")}};function xo(t,r){var n,e=r||{},i=e.versionId,d=e.platform,f=ie(d),b=f.appName2verEmitLib,u=f.appName2Lib,I=f.strictMatchVer,V=f.appName2isLibAssigned,K=(n=e.strictMatchVer)!==null&&n!==void 0?n:I,z=ne(b,t);Ne.ensureOnlineModule(z,t);var D=i||oe,X=z[D],Z=V[t]?u[t]:null,re=K?null:Z,ae=X||re||null;return me("[[ core:getVerLib ]] appName,options,result:",t,e,ae),ae}function Xr(t,r,n){var e=n||{},i=e.appGroupName,d=r.versionId,f=r.appProperties,b=r.platform||n.platform,u=ie(b),I=u.appName2verEmitLib,V=u.appName2Lib,K=u.appName2isLibAssigned,z=Ne.getAppMeta(t,b),D=function(re){var ae=V[re];ae?We(ae)==="object"&&Object.keys(ae).length===0&&Object.assign(ae,f):V[re]=f,K[re]=!0};D(t),i?D(i):z&&D(z.app_group_name),me("[[ core:setEmitLib ]] appMeta:",z);var X=ne(I,t);X[oe]||Se(I,t,oe,f),d&&Se(I,t,d,f)}function qr(t,r){var n=ie(r),e=n.appName2app;return e[t]}function ko(t,r){var n=ie(r),e=n.appName2app;e[t.name]=t}function jt(t,r,n){Ne.setVerLoadStatus(t,r,"appName2verLoadStatus",n)}function Lo(t,r){return Ne.getVerLoadStatus(t,"appName2verLoadStatus",r)}function Ao(t,r,n){Ne.setVerLoadStatus(t,r,"appName2verStyleFetched",n)}function wo(t,r){return Ne.getVerLoadStatus(t,"appName2verStyleFetched",r)}function Io(t,r){var n,e=r||{},i=e.platform,d=e.versionId,f=ie(i),b=f.appName2verStyleStr,u=f.appName2styleStr,I=u[t]||"";return d?((n=b[t])===null||n===void 0?void 0:n[d])||I||"":I}function To(t,r,n){var e=n||{},i=e.platform,d=e.versionId,f=ie(i),b=f.appName2verStyleStr,u=f.appName2verStyleFetched,I=f.appName2styleStr;if(!d){I[t]=r;return}Se(b,t,d,r),Se(u,t,d,at.LOADED)}function Co(t,r,n){var e=n||{},i=e.versionId,d=e.platform,f=ie(d),b=f.appName2verExtraCssList;me("[[ core:setVerExtraCssList ]] cssList:",r);var u=ne(b,t);u[oe]||Se(b,t,oe,r),i&&Se(b,t,i,r)}function Mo(t,r){var n=r||{},e=n.versionId,i=n.platform,d=ie(i),f=d.appName2verExtraCssList,b=ne(f,t),u=b[e]||b[oe]||[];return me("[[ core:getVerExtraCssList ]] options,cssList:",n,u),u}function No(t,r){var n,e=r||{},i=e.platform,d=e.versionId,f=ie(i),b=f.appName2verAppVersion,u=f.appName2appVersion,I=u[t]||null;return d&&((n=b[t])===null||n===void 0?void 0:n[d])||I}function Do(t,r,n){var e=n||{},i=e.platform,d=ie(i),f=d.appName2verAppVersion,b=d.appGroupName2firstVer,u=d.appName2appVersion,I=r.version_tag||r.sub_app_version;if(I){var V=Ne.getAppMeta(t,i),K=ne(f,t);K[oe]||(Se(f,t,oe,r),u[t]=r),Se(f,t,I,r),b[V.app_group_name]=r.sub_app_version}}function Je(t,r){var n=t.split("@"),e=n.slice(1),i=e.join("@");return i||r||t}function Ar(t){return t==="js"||t==="mjs"}function Yt(t,r){var n=Cr();me("[[ core:tryGetVersion ]] may include ver source > ".concat(n));var e=ie(r),i=e.appGroupName2firstVer,d=i[t]||"";if(n.includes("https://")||n.includes("http://")){var f=n.split("//"),b=mt(f,2),u=b[1],I=u.split("/");if(d){var V=u.includes("/".concat(d,"/"));if(V){var K=d.startsWith("@");if(K){var Z=d.split("/")[1]||"";return Je(Z)}else{var z=I.indexOf(d),D=I[z-1],X=D.startsWith("@");if(!X)return Je(d)}}var re=I[1],ae=I[2];if(re==="static"&&Ar(ae)||Ar(re))return Je(d)}var pe=u.indexOf("@");if(pe>=0){var fe=I.filter(function(Oe){return Oe.includes("@")}),we=fe.findIndex(function(Oe){return Oe.startsWith("@")});if(we>=0){var de=fe[we+1]||"";return Je(de,d)}var Ue=fe[0]||"";return Je(Ue,d)}var De=u.split("/".concat(r,"/")),Ve=mt(De,2),xe=Ve[1],ze=xe===void 0?"":xe,Ge=ze.split("/"),je=mt(Ge,1),Ye=je[0];return Ye||d}return d}function Wt(t,r){if(t===oe)return r||"";if(t.includes("_")){var n=t.substring(0,t.length-15);return n}return r||""}var Ht=!1,Mt=!1;function Oo(t){if(t&&(Ht=!1,Mt=!1),!Mt){Mt=!0;var r=ve();r.__MASTER_APP_LOADED__===void 0&&(r.__MASTER_APP_LOADED__=!0,Ht=!0)}}function Bo(){var t=`WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,
`;return t+="more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat(t),"color:red;"),!Ht}function Po(t,r){var n=r.platform,e=r.groupName,i=r.name,d=r.ver,f=r.elName;Me(t,"el",f),Me(t,"plat",n),Me(t,"gname",e),Me(t,"name",i),Me(t,"ver",d)}var Vo=le.KEY_ASSET_CTX;function Nt(t,r){if(!r||!["LINK","SCRIPT"].includes(r.tagName))return t(r);var n=r.href,e=r.tagName,i=r.src,d=n||i||"",f=e==="LINK",b=et(Vo,d)||{},u=b.platform,I=b.groupName,V=b.name,K=b.ver,z=b.beforeAppend,D=r;if(z){var X=f?"href":"src",Z=r.getAttribute(X),re=function(fe){return r.setAttribute(X,fe)};D=z({el:r,nativeAppend:t,setAssetUrl:re,url:Z,tagName:e})||r}var ae=f?"HelLink":"HelScript";return u&&Po(D,{platform:u,groupName:I,name:V,ver:K,elName:ae}),t(D)}function $o(){var t=ve();if(!(t.__POWERED_BY_QIANKUN__||t.__DISABLE_HEL_MONKEY_PATCH__)){var r=Ke(),n=t.document,e=r.nativeHeadAppend,i=r.nativeBodyAppend;if(!(e||!n)){var d=n.head,f=n.body;if(e=d.appendChild.bind(d),r.nativeHeadAppend=e,f)i=f.appendChild.bind(f),r.nativeBodyAppend=i;else{var b=Ir(),u=new b(function(K){for(var z,D=0;D<K.length;D++){var X=K[D].addedNodes;if(z=gr(X,"BODY"),z)break}z&&(i=z.appendChild.bind(z),r.nativeBodyAppend=i,z.appendChild=function(Z){return Nt(V(i,z,"body"),Z)},u.disconnect())}),I=gr(n.childNodes,"HTML");I&&u.observe(I,{childList:!0})}var V=function(z,D,X){var Z=r.patchedHeadAppend,re=r.patchedBodyAppend,ae=X==="head";if(Z&&ae)return Z;if(re&&!ae)return re;if(t.__POWERED_BY_WUJIE__)return z;var pe=t.Element;return pe?pe.prototype.appendChild.bind(D):z};d.appendChild=function(K){return Nt(V(e,d,"head"),K)},f&&(f.appendChild=function(K){return Nt(V(i,f,"body"),K)})}}}var Jr="preFetch";function Ro(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.platform||yt(t),i=n.versionId||Yt(t,e),d=n.appName||Wt(i,t);me("[[ core:libReady ]] appGroupName ".concat(t,", appName ").concat(d,", versionId ").concat(i));var f=qr(d,e);f!=null&&f.__fromCust&&(i=n.versionId||f.online_version,d=f.name,me("[[ core:libReady ]] fromCust, appGroupName ".concat(t,", appName ").concat(d,", versionId ").concat(i)));var b={platform:e,appName:d,appGroupName:t,versionId:i,appProperties:r,Comp:function(){},lifecycle:{}};Xr(d,b,{appGroupName:t,platform:e}),jt(d,at.LOADED,{versionId:i,platform:e});var u=Xe();Ut(Jr,"libReady"),u.emit(nt.SUB_LIB_LOADED,b)}function Ho(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.lifecycle,i=n.platform||yt(t),d=n.versionId||Yt(t,i),f=n.appName||Wt(d,t),b={Comp:r,appName:f,appGroupName:t,lifecycle:e,platform:i,versionId:d,isLib:!1};jr(f,b),jt(f,at.LOADED,{versionId:d,platform:i});var u=Xe();Ut(Jr,"appReady"),u.emit(nt.SUB_APP_LOADED,b)}var Qr="/* @helstart ",Ko=" @helend */",Fo=Qr.length;function Uo(t,r){var n=Xe(),e=ye.getMatchedIgnoreCssPrefix(r);return e&&(ye.setIgnoreCssPrefixCssUrl(e,r),n.emit(Et.cssLinkTagAdded(e),{nodes:[t]})),e}function zo(t){var r=ve();if(r){var n=r.document.head.querySelectorAll('style[data-gname="'.concat(t,'"]'));if(n.length){ye.clearStyleTagText(t),n.forEach(function(i){vt(i),ye.appendStyleTagText(t,i.innerText)});var e=Xe();e.emit(Et.styleTagAdded(t),{nodes:n})}}}function Go(t,r){var n=t.tagName,e=t.innerText,i=t.href;if(["STYLE","LINK"].includes(n)){if(n==="STYLE"){if(!e)return;var d=e.indexOf(Qr);if(d<0)return;var f=e.indexOf(Ko);if(f<0)return;var b=e.substring(Fo+d,f);if(b){var u=b.trim(),I="",V=u;if(u.includes("/")){var K=u.split("/");I=K[0],V=K[1]}Me(t,"gname",V),I&&Me(t,"plat",I),r[u]&&vt(t);var z=Xe();ye.appendStyleTagText(u,e),z.emit(Et.styleTagAdded(u),{nodes:[t]})}return}var D=Uo(t,i);D&&vt(t)}}function jo(t,r){var n=t.tagName,e=t.src,i=e===void 0?"":e;if(n!=="SCRIPT"||!i.endsWith(".hot-update.js"))return!1;var d=ye.getMatchedIgnoreCssPrefix(i);if(!d)return!1;var f=ye.getIgnoreCssPrefixKeys(d);if(!f.length)return!1;var b=!1;return f.forEach(function(u){r[u]&&(zo(u),b=!0)}),b}function Yo(){var t=Ke(),r=ve(),n=t.isStyleObInit,e=r.document;if(!(n||!e)){t.isStyleObInit=!0;var i=ye.getIgnoreStyleTagMap(),d=Ir();if(d){var f=new d(function(b){b.forEach(function(u){for(var I=u.addedNodes,V=u.removedNodes,K=I.length,z=0;z<K;z++)Go(I[z],i);for(var D=V.length,X=0;X<D&&!jo(V[X],i);X++);})});f.observe(document.head,{childList:!0})}}}Zr();me("hel-micro-core ver ".concat(le.CORE_VER));var Wo=nt,Xo=at,qo=le,Jo=Rr,Qo=Ga,Zo=Bo;function Zr(t){t&&en(t),Oo(!!t),so(),Ja(),$o(),Yo()}var ei=_t,ti=ie,ri=He,ni=bt,ai=me,oi=Qa,ii=Ut,li=Gr,si=ve,en=Pa,ci=co,di=jr,ui=xo,fi=Xr,pi=qr,hi=ko,mi=No,gi=Do,vi=bo,bi=_o,_i=et,yi=Ze,Ei=ye,Si=Lo,xi=jt,ki=wo,Li=Ao,Ai=Io,wi=To,Ii=Mo,Ti=Co,Ci=Yt,Mi=Wt,Ni=fo,Di=yt,Oi=go,Bi=vo,Pi=Gt,Vi=ho,$i=mo,Ri=po,Hi=Xe,Ki=So,Fi=Et,Ui=Ro,zi=Ho;const Gi=Object.freeze(Object.defineProperty({__proto__:null,allowLog:ni,appReady:zi,clearPerfMark:li,commonDataUtil:Ei,commonUtil:Qo,evName:Fi,getAppMeta:pi,getAppPlatform:Di,getAppPlatformByAppName:Pi,getAppStyleStr:Ai,getCommonData:_i,getCustomData:vi,getGlobalThis:si,getHelDebug:ri,getHelEventBus:Hi,getPlatform:ei,getPlatformConfig:Ni,getSharedCache:ti,getUserEventBus:Ki,getVerApp:ci,getVerExtraCssList:Ii,getVerLib:ui,getVerLoadStatus:Si,getVerStyleStrStatus:ki,getVersion:mi,helConsts:qo,helEvents:Wo,helLoadStatus:Xo,inectPlatToMod:Jo,initGlobalConfig:Ri,initPlatformConfig:Vi,isSubApp:Zo,libReady:Ui,log:ai,originInit:$i,perfMark:oi,perfPeek:ii,resetGlobalThis:Zr,setAppMeta:hi,setAppPlatform:Oi,setAppPlatformByAppName:Bi,setAppStyleStr:wi,setCommonData:yi,setCustomData:bi,setEmitApp:di,setEmitLib:fi,setGlobalThis:en,setVerExtraCssList:Ti,setVerLoadStatus:xi,setVerStyleStrStatus:Li,setVersion:gi,tryGetAppName:Mi,tryGetVersion:Ci},Symbol.toStringTag,{value:"Module"})),ji=La(Gi);var Yi=Qe.exports,wr;function Wi(){return wr||(wr=1,(function(t,r){(function(n,e){e(r,ji)})(Yi,function(n,e){var i=function(){return i=Object.assign||function(q){for(var Y,ee=1,se=arguments.length;ee<se;ee++)for(var ue in Y=arguments[ee])Object.prototype.hasOwnProperty.call(Y,ue)&&(q[ue]=Y[ue]);return q},i.apply(this,arguments)};function d(q,Y){var ee=Y||(e.getAppPlatform===null||e.getAppPlatform===void 0?void 0:e.getAppPlatform(q)),se=e.getSharedCache(ee).appName2Lib;return se[q]||(se[q]={}),se[q]}var f="4.12.1";e.log("hel-lib-proxy ver ".concat(f));var b=e.getUserEventBus,u=e.helConsts,I=b();function V(q,Y){var ee=i({},Y||{});return ee.platform=ee.platform||u.DEFAULT_PLAT,e.getVerLib(q,ee)}function K(q,Y){var ee,se=!0,ue="";Y&&(typeof Y=="string"?ue=Y:(ue=Y.platform||"",se=(ee=Y.asProxy)===null||ee===void 0||ee));var ke=d(q,ue=ue||e.getAppPlatform(q)||u.DEFAULT_PLAT);return typeof Proxy=="function"&&se&&(ke=(function(Ie,be,Ee){return new Proxy(be,{get:function(he,_e){var Te=String(_e);return e.log("[[getLibProxy]] call lib [".concat(Ie,"] method [").concat(Te,"]")),Object.keys(he).length?he[Te]:d(Ie,Ee)[Te]}})})(q,ke,ue)),e.log("[[ exposeLib ]] libName, libObj",q,ke),ke}function z(q,Y,ee){var se=(function(ue){var ke={allowDup:!1,platform:e.helConsts.DEFAULT_PLAT};return i(i({},ke),ue||{})})(ee);e.libReady(q,Y,se)}function D(q,Y,ee){e.appReady(q,Y,ee)}function X(q,Y){return e.getVerApp(q,Y)}var Z=e.isSubApp;function re(){return!e.isSubApp()}var ae=Object.freeze({__proto__:null,VER:f,eventBus:I,getLib:V,exposeLib:K,libReady:z,appReady:D,exposeApp:X,isSubApp:Z,isMasterApp:re}),pe=e.commonUtil.purify,fe=["isMasterApp","isSubApp","eventBus"],we=["appReady","libReady"];function de(q,Y){return Y&&typeof Y=="object"&&!Array.isArray(Y)?i({platform:q},pe(Y)):{platform:q}}function Ue(q,Y){var ee={};return Object.keys(q).forEach(function(se){var ue=q[se];if(fe.includes(se))ee[se]=ue;else if(we.includes(se))ee[se]=(function(Ie,be){return function(){for(var Ee=[],he=0;he<arguments.length;he++)Ee[he]=arguments[he];var _e=Ee[0],Te=Ee[1],Ce=Ee[2];return Ie(_e,Te,de(be,Ce===void 0?{}:Ce))}})(ue,Y);else{var ke=se==="exposeLib";ee[se]=(function(Ie,be,Ee){return function(){for(var he=[],_e=0;_e<arguments.length;_e++)he[_e]=arguments[_e];var Te=he[0],Ce=he[1];return Ie(Te,!Ee||typeof Ce!="string"&&Ce!==void 0?de(be,Ce):Ce||be)}})(ue,Y,ke)}}),ee}var De=function q(Y){var ee=Ue(ae,Y);return ee.createInstance=q,ee},Ve=f,xe=z,ze=K,Ge=V,je=Z,Ye=re,Oe=I,it=D,lt=X,st={VER:Ve,libReady:xe,exposeLib:ze,getLib:Ge,isSubApp:je,isMasterApp:Ye,eventBus:Oe,appReady:it,exposeApp:lt,createInstance:De};(function(q){var Y=e.getGlobalThis();e.commonUtil.isServer()||Y.HelLibProxy||(e.log("auto bind hel-lib-proxy to global.HelLibProxy"),Y.HelLibProxy=q)})(st),n.VER=Ve,n.appReady=it,n.createInstance=De,n.default=st,n.eventBus=Oe,n.exposeApp=lt,n.exposeLib=ze,n.getLib=Ge,n.isMasterApp=Ye,n.isSubApp=je,n.libReady=xe,Object.defineProperty(n,"__esModule",{value:!0})})})(Qe,Qe.exports)),Qe.exports}var Xi=Wi();function qi(t){var r=(function(n,e){const i=["others","left","right","all"];function d(a){var o;return(o=a==null?void 0:a.closeScopes)!=null?o:i}function f(a){return a!=null?a:!0}function b(a){var o,l,s,c,m,_,h,g,A;const C=d(a.port),v=d(a.skin),k=d(a.policy);return{closeScopes:i.filter(T=>C.includes(T)&&v.includes(T)&&k.includes(T)),refresh:f((o=a.port)==null?void 0:o.refresh)&&f((l=a.skin)==null?void 0:l.refresh)&&f((s=a.policy)==null?void 0:s.refresh),pin:f((c=a.port)==null?void 0:c.pin)&&f((m=a.skin)==null?void 0:m.pin)&&f((_=a.policy)==null?void 0:_.pin),move:f((h=a.port)==null?void 0:h.move)&&f((g=a.skin)==null?void 0:g.move)&&f((A=a.policy)==null?void 0:A.move)}}const u={applied:"SHELL_APPLIED",noop:"SHELL_NOOP",alreadyActive:"SHELL_ALREADY_ACTIVE",duplicate:"SHELL_DUPLICATE_INTENT",blockedPolicy:"SHELL_BLOCKED_POLICY",blockedGuard:"SHELL_BLOCKED_GUARD",notClosable:"SHELL_NOT_CLOSABLE",cannotMove:"SHELL_CANNOT_MOVE",delegated:"SHELL_DELEGATED",unsupported:"SHELL_UNSUPPORTED",tabNotFound:"SHELL_TAB_NOT_FOUND",menuNotFound:"SHELL_MENU_NOT_FOUND",engineError:"SHELL_ENGINE_ERROR",contractError:"SHELL_CONTRACT_ERROR"},I=Object.freeze([u.applied,u.noop,u.alreadyActive,u.duplicate,u.blockedPolicy,u.blockedGuard,u.notClosable,u.cannotMove,u.delegated,u.unsupported,u.tabNotFound,u.menuNotFound,u.engineError,u.contractError]);function V(a){return!!(a&&typeof a=="object"&&a.name==="TabGuardRejectError")}function K(a,o){return o?{...a,intentId:o}:a}function z(a){var dt,ut,ft;var o,l,s;const c=a.manager,m=b({port:(o=a.capabilityLayers)==null?void 0:o.port,skin:(dt=(l=a.capabilityLayers)==null?void 0:l.skin)!=null?dt:a.capabilities,policy:(s=a.capabilityLayers)==null?void 0:s.policy});let _=!1,h=Promise.resolve();const g=(ut=a.dedupe)!=null?ut:!0,A=Math.max(1,(ft=a.dedupeLimit)!=null?ft:200),C=new Set,v=new Set,k=[];function T(x){return C.has(x)||v.has(x)}function N(x){if(!v.has(x))for(v.add(x),k.push(x);k.length>A;){const U=k.shift();U&&v.delete(U)}}function P(x){var W;var U;return(U=a.menu)!=null&&U.keyOfTab?a.menu.keyOfTab(x):x.target.kind==="micro"?`${x.target.appName}::${x.target.path}`:(W=x.menuId)!=null?W:x.target.viewUrl}function p(){var x;const U=(x=a.menu)==null?void 0:x.menus;return U?typeof U=="function"?U():U:[]}const S=e.ref(0),w=e.computed(()=>{var W;const x=c.state.value,U=x.tabs.map(H=>`${H.id}:${H.pinned?1:0}:${H.closable?1:0}:${H.title}`).join("|");return`${(W=x.activeId)!=null?W:""}::${U}`});let E=w.value;e.watch(w,x=>{x!==E&&(E=x,S.value+=1)},{flush:"sync"});function O(){return{revision:S.value}}function G(x={}){return{status:"applied",code:u.applied,...O(),...x}}function B(x=u.noop,U={}){return{status:"noop",code:x,...O(),...U}}function $(x){const U={policy:u.blockedPolicy,guard:u.blockedGuard,"not-closable":u.notClosable,"cannot-move":u.cannotMove};return{status:"blocked",reason:x,code:U[x],...O()}}function J(x){return{status:"unsupported",code:u.unsupported,...O(),...x?{capability:x}:{}}}function M(x){return{status:"not-found",code:x==="menu"?u.menuNotFound:u.tabNotFound,...O()}}function F(){return{status:"delegate",code:u.delegated,...O()}}function R(x,U=u.engineError){const W=x instanceof Error?x.message:void 0;return{status:"failed",code:U,error:x,...W?{message:W}:{},...O()}}const L=e.computed(()=>{var j;var x,U;const{tabs:W,activeId:H}=c.state.value,ce=H?W.find(Q=>Q.id===H):void 0,ge=ce?P(ce):void 0,Le=ge?[...(j=(U=(x=a.menu)==null?void 0:x.pathOf)==null?void 0:U.call(x,ge))!=null?j:[ge]]:[];return{revision:S.value,tabs:W,activeId:H,selectedMenuKey:ge,activeMenuPath:Le,menus:p(),capabilities:m}});function y(){return c.state.value.tabs.map(x=>x.id)}function te(x){const U=new Set(y());return x.filter(W=>!U.has(W))}async function Re(x){var W,H,ce,ge,Le;var U;switch(x.type){case"menu:select":{const j=(U=a.menu)==null?void 0:U.resolve;if(!j)return J("menu:resolve");const Q=j(x.key);if(Q==="native")return F();if(!Q)return M("menu");if(Q.kind==="micro"){if(!a.controller)return J("micro:controller");const pt=await a.controller.open({appName:Q.appName,path:Q.path,fullPath:Q.fullPath,title:Q.title});return G({activeId:pt})}const Lt=await c.openLocal({viewUrl:Q.viewUrl,viewProps:{_viewName:Q.title,...Q.fullPath?{fullPath:Q.fullPath}:{},...Q.viewProps||{}}});return G({activeId:Lt})}case"tab:open":{const j=await c.openLocal({viewUrl:x.path,viewProps:{title:x.title,query:x.query}});return G({activeId:j})}case"tab:activate":return c.has(x.id)?c.state.value.activeId===x.id?B(u.alreadyActive,{activeId:x.id}):(await c.activate(x.id),G({activeId:x.id})):M("tab");case"tab:close":{const j=(W=x.scope)!=null?W:"self";if(j==="self"){const At=(H=x.id)!=null?H:c.state.value.activeId;if(!At)return B();const pr=c.state.value.tabs.find(ka=>ka.id===At);if(!pr)return M("tab");if(!pr.closable)return $("not-closable");const xa=y();await c.close(At);const hr=te(xa);return hr.length?G({closedIds:hr,activeId:c.state.value.activeId}):B(u.noop,{activeId:c.state.value.activeId})}if(!m.closeScopes.includes(j))return J(`close-scope:${j}`);const Q=(ce=x.id)!=null?ce:c.state.value.activeId;if(!Q)return B();if(!c.has(Q))return M("tab");const Lt=y();j==="all"?await c.closeAll():j==="others"?await c.closeOthers(Q):j==="left"?await c.closeLeft(Q):await c.closeRight(Q);const pt=te(Lt);return pt.length?G({closedIds:pt,activeId:c.state.value.activeId}):B(u.noop,{activeId:c.state.value.activeId})}case"tab:refresh":{if(!m.refresh)return J("refresh");const j=(ge=x.id)!=null?ge:c.state.value.activeId;return j?c.has(j)?j!==c.state.value.activeId?J("refresh:background"):(await c.refresh(j),G({activeId:j})):M("tab"):B()}case"tab:pin":{if(!m.pin)return J("pin");const j=c.state.value.tabs.find(Q=>Q.id===x.id);return j?j.pinned===x.pinned?B(u.noop,{activeId:c.state.value.activeId}):(await c.setPinned(x.id,x.pinned),G({activeId:c.state.value.activeId})):M("tab")}case"tab:move":{if(!m.move)return J("move");const j=(Le=x.position)!=null?Le:"before";return!c.canMove(x.id,x.anchorId,j)||!await c.move(x.id,x.anchorId,j)?$("cannot-move"):G({activeId:c.state.value.activeId})}default:return J("intent")}}async function ct(x,U,W){var H,ce,ge,Le;if(_)return K(R(new Error("ShellAdapter 已 dispose，不能再 dispatch"),u.contractError),W);let j;try{await((H=a.beforeIntent)==null?void 0:H.call(a,x,L.value))===!1?j=$("policy"):j=await Re(x)}catch(Q){j=V(Q)?$("guard"):R(Q),j.status==="failed"&&((ce=a.onError)==null||ce.call(a,Q,x))}j=K(j,W);try{(ge=a.afterIntent)==null||ge.call(a,x,j,U)}catch(Q){(Le=a.onError)==null||Le.call(a,Q,x)}return j}function qe(x,U="api",W={}){const H=W.intentId;if(H&&g&&T(H))return Promise.resolve(K(B(u.duplicate),H));H&&g&&C.add(H);const ce=async()=>{try{const Le=await ct(x,U,H);return H&&g&&Le.status==="applied"&&N(H),Le}finally{H&&g&&C.delete(H)}},ge=h.then(ce,ce);return h=ge.catch(()=>{}),ge}function kt(x){var U;switch(x.type){case"menu:select":return!!((U=a.menu)!=null&&U.resolve);case"tab:activate":return!0;case"tab:close":return!x.scope||x.scope==="self"?!0:m.closeScopes.includes(x.scope);case"tab:refresh":return m.refresh;case"tab:pin":return m.pin;case"tab:move":return m.move;default:return!1}}return{snapshot:L,capabilities:e.computed(()=>m),dispatch:qe,can:kt,dispose(){_=!0}}}const D={ok:"SHELL_AUTH_OK",skipped:"SHELL_AUTH_SKIPPED",expired:"SHELL_AUTH_EXPIRED",unauthorized:"SHELL_AUTH_UNAUTHORIZED",failed:"SHELL_AUTH_FAILED",shellNotCleared:"SHELL_AUTH_SHELL_CLEAR_FAILED"},X=Object.freeze([D.ok,D.skipped,D.expired,D.unauthorized,D.failed,D.shellNotCleared]);function Z(a,o){try{const l=a.snapshot();if(l&&typeof l.status=="string")return l}catch(l){}return o!=null?o:{status:"anonymous"}}function re(a,o){var l;return a&&typeof a=="object"&&"code"in a?{...a,snapshot:(l=a.snapshot)!=null?l:o}:{ok:!0,code:D.ok,snapshot:o}}function ae(a){const{auth:o,shell:l}=a;function s(_){var h,g;try{(g=o.redirectToLogin)==null||g.call(o,{returnUrl:(h=a.returnUrl)==null?void 0:h.call(a),reason:_})}catch(A){}}async function c(){var g;var _,h;try{return await l.dispatch({type:"tab:close",scope:"all"},"host")}catch(A){return{status:"failed",code:u.engineError,revision:(g=(h=(_=l.snapshot)==null?void 0:_.value)==null?void 0:h.revision)!=null?g:0,error:A}}}async function m(_,h){var v;const g=Z(o),A=(v=h.shell)!=null?v:h.clear?await c():void 0,C=!h.clear||(A==null?void 0:A.status)!=="failed";return h.reason&&s(h.reason),{ok:_.ok&&C,code:C?_.code:D.shellNotCleared,snapshot:g,...A?{shell:A}:{}}}return{snapshot(){return Z(o)},async logout(){var h;const _=Z(o);if(_.status==="anonymous")return{ok:!0,code:D.skipped,snapshot:_};try{const g=await o.logout(),A=re(g,Z(o));return A.ok?m({ok:!0,code:D.ok},{clear:!0,reason:"manual"}):{...A,code:(h=A.code)!=null?h:D.failed}}catch(g){return{ok:!1,code:D.failed,snapshot:Z(o,_),cause:g}}},async refresh(){const _=Z(o);try{const h=await o.refresh(),g=re(h,Z(o));if(g.ok)return g;const A=g.code===D.expired,C=g.code===D.unauthorized;return!A&&!C?g:m({ok:!1,code:g.code},{clear:!0,reason:A?"expired":"unauthorized"})}catch(h){return{ok:!1,code:D.failed,snapshot:Z(o,_),cause:h}}},async handleUnauthorized(){var _;try{(_=o.onUnauthorized)==null||_.call(o)}catch(h){}return m({ok:!1,code:D.unauthorized},{clear:!0,reason:"unauthorized"})},async handleExpired(){return m({ok:!1,code:D.expired},{clear:!0,reason:"expired"})}}}const pe=1,fe={ok:"SHELL_SKIN_OK",legacy:"SHELL_SKIN_LEGACY",invalid:"SHELL_SKIN_INVALID_MANIFEST",incompatible:"SHELL_SKIN_INCOMPATIBLE_VERSION",requirementMissing:"SHELL_SKIN_REQUIREMENT_MISSING"};function we(a){return!!a&&typeof a=="object"&&!Array.isArray(a)}function de(a){return{ok:!1,degraded:!1,code:fe.invalid,message:a}}function Ue(a={}){var g,A,C;const o=(g=a.contractVersion)!=null?g:pe,l=a.manifest;if(l==null)return{ok:!0,degraded:!0,code:fe.legacy,message:"皮肤未声明 manifest，按契约 0 降级挂载；能力按缺省处理"};if(!we(l))return de("manifest 必须是对象");const s=l.contractVersion;if(typeof s!="number"||!Number.isInteger(s)||s<1)return de("manifest.contractVersion 必须是正整数");const c=l.provides;if(!we(c))return de("manifest.provides 必须是对象");if(c.layout!==!0)return de("manifest.provides.layout 必须为 true（壳层皮肤必须接管布局）");if(c.tabs!==void 0&&typeof c.tabs!="boolean")return de("manifest.provides.tabs 必须是布尔值");if(c.hasOwnHeader!==void 0&&typeof c.hasOwnHeader!="boolean")return de("manifest.provides.hasOwnHeader 必须是布尔值");if(c.theme!==void 0&&c.theme!=="light"&&c.theme!=="dark"&&c.theme!=="both")return de("manifest.provides.theme 只能是 light / dark / both");if(c.tools!==void 0&&!Array.isArray(c.tools))return de("manifest.provides.tools 必须是数组");if(l.requires!==void 0&&!Array.isArray(l.requires))return de("manifest.requires 必须是数组");if(s!==o)return{ok:!1,degraded:!1,code:fe.incompatible,message:`皮肤契约版本 ${s} 与宿主 ${o} 不一致`};const m=(A=l.requires)!=null?A:[],_=(C=a.hostProvides)!=null?C:[],h=m.filter(v=>typeof v=="string"&&!_.includes(v));return h.length?{ok:!1,degraded:!1,code:fe.requirementMissing,missing:h,message:`宿主未提供皮肤需要的能力：${h.join(", ")}`}:{ok:!0,degraded:!1,code:fe.ok,manifest:l}}const De=`/*
 * 壳层运行时样式：ShellHost / 工具条 / 设置抽屉。
 *
 * 样式随包注入（\`?inline\` + ensureShellStyle），宿主不用自己引 CSS。
 * 开发期零件（壳层调试器 .shell-dev、旧切换器 .skin-switch）的样式在 styles-dev.css，
 * 由 dev 入口自己注入——主入口不含它们，生产也就不用背。
 */
/* ShellHost / SkinSwitch 的样式随包注入，宿主不需要单独 import 样式文件 */

.shell-host {
  height: 100%;
  min-height: 0;
  display: block;
}


.shell-host__loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #6b7280;
  font-size: 14px;
}


/* 右上角工具条：纯 CSS 变量控制色调，三种 UI 基底共用同一套 */
.shell-toolbar {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  --shell-tool-fg: #4b5563;
  --shell-tool-fg-active: #1d4ed8;
  --shell-tool-hover-bg: rgba(15, 23, 42, 0.06);
}


.shell-toolbar.is-dark {
  --shell-tool-fg: rgba(255, 255, 255, 0.72);
  --shell-tool-fg-active: #93c5fd;
  --shell-tool-hover-bg: rgba(255, 255, 255, 0.12);
}


.shell-toolbar__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--shell-tool-fg);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}


.shell-toolbar__btn:hover {
  background: var(--shell-tool-hover-bg);
}


.shell-toolbar__btn.is-active {
  color: var(--shell-tool-fg-active);
}


.shell-toolbar__btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}


.shell-toolbar__icon {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}


html.dark .shell-host__loading {
  color: #8b94a3;
}


/* ---- 壳层设置抽屉 ---- */
.shell-settings {
  position: fixed;
  inset: 0;
  z-index: 3100;
  display: none;
  font-family: inherit;
}


.shell-settings.is-open {
  display: block;
}


.shell-settings__mask {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.35);
}


.shell-settings__panel {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 300px;
  height: 100%;
  padding: 18px 16px 24px;
  overflow: auto;
  background: #fff;
  border-left: 1px solid #e5e7eb;
  box-shadow: -12px 0 32px rgba(15, 23, 42, 0.14);
  box-sizing: border-box;
}


.shell-settings__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.shell-settings__title {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}


.shell-settings__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
}


.shell-settings__close:hover {
  background: #f3f4f6;
}


.shell-settings__close svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
}


.shell-settings__group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.shell-settings__label {
  font-size: 12px;
  color: #6b7280;
  letter-spacing: 0.04em;
}


.shell-settings__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.shell-settings__options {
  display: grid;
  gap: 6px;
}


.shell-settings__option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 9px;
  background: #fff;
  color: #111827;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}


.shell-settings__option:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}


.shell-settings__option.is-active {
  border-color: #1d4ed8;
  background: #eff6ff;
  color: #1d4ed8;
  font-weight: 600;
}


.shell-settings__swatch {
  width: 14px;
  height: 14px;
  flex: none;
  border-radius: 4px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #f3f4f6;
}


.shell-settings__swatch[data-skin='pure'] {
  background: linear-gradient(135deg, #ffffff 0 50%, #f1f5f9 50% 100%);
}


.shell-settings__swatch[data-skin='art'] {
  background: linear-gradient(135deg, #4f46e5 0 50%, #eef2ff 50% 100%);
}


.shell-settings__swatch[data-skin='fan'] {
  background: linear-gradient(135deg, #111827 0 50%, #e5e7eb 50% 100%);
}


.shell-settings__option-label {
  flex: 1;
}


.shell-settings__hint {
  margin: 0;
  font-size: 11px;
  line-height: 1.6;
  color: #9ca3af;
}


.shell-settings__segmented {
  display: flex;
  padding: 3px;
  border-radius: 9px;
  background: #f3f4f6;
}


.shell-settings__segment {
  flex: 1;
  padding: 7px 0;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: #4b5563;
  font-size: 12px;
  cursor: pointer;
}


.shell-settings__segment.is-active {
  background: #fff;
  color: #111827;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
}


.shell-settings__switch {
  width: 36px;
  height: 20px;
  margin: 0;
  appearance: none;
  border-radius: 10px;
  background: #d1d5db;
  cursor: pointer;
  position: relative;
  transition: background-color 0.15s ease;
}


.shell-settings__switch::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.15s ease;
}


.shell-settings__switch:checked {
  background: #1d4ed8;
}


.shell-settings__switch:checked::after {
  transform: translateX(16px);
}


/* 色弱模式：整页灰度，不动任何皮肤的取色 */
html.shell-grayscale {
  filter: grayscale(1);
}


html.dark .shell-settings__mask {
  background: rgba(0, 0, 0, 0.55);
}


html.dark .shell-settings__panel {
  background: #171a21;
  border-left-color: #262b36;
}


html.dark .shell-settings__title {
  color: #e2e8f0;
}


html.dark .shell-settings__close {
  color: #94a3b8;
}


html.dark .shell-settings__close:hover {
  background: rgba(255, 255, 255, 0.08);
}


html.dark .shell-settings__label {
  color: #8b94a3;
}


html.dark .shell-settings__option {
  background: #1d222b;
  border-color: #262b36;
  color: #cbd5e1;
}


html.dark .shell-settings__option:hover {
  background: #232935;
}


html.dark .shell-settings__option.is-active {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.16);
  color: #60a5fa;
}


html.dark .shell-settings__hint {
  color: #6b7280;
}


html.dark .shell-settings__segmented {
  background: #1d222b;
}


html.dark .shell-settings__segment {
  color: #94a3b8;
}


html.dark .shell-settings__segment.is-active {
  background: #262b36;
  color: #e2e8f0;
}


html.dark .shell-settings__switch {
  background: #3a4250;
}


html.dark .shell-settings__switch:checked {
  background: #3b82f6;
}


/* ------------------------------------------------------------------ *
 * 公共 header（ShellHeader）
 *
 * 必须放在这里而不是组件 scoped 样式里：包以字符串内联注入样式，
 * 宿主（vue-cli / vite / hel-micro）不一定会 import 独立 css 文件，
 * 写 scoped 时跨包会整段丢失（实测 header 变成无背景、颜色继承宿主的裸 div）。
 *
 * 颜色全部走父壳的 --sh-* 变量，只在没定义时用 fallback：
 * pure / art 的壳在根节点定义了同一套（含 html.dark 覆盖），header 跟着走就不跑色。
 * 这里**不要**写 html.dark .shell-header 的自带变量，否则会盖掉父壳的 dark 值。
 * ------------------------------------------------------------------ */
.shell-header {
  --sh-header-height: 48px;
  display: flex;
  align-items: center;
  gap: 4px;
  height: var(--sh-header-height);
  flex: none;
  padding: 0 12px;
  border-bottom: 1px solid var(--sh-border, #e5e7eb);
  background: var(--sh-surface, #ffffff);
  color: var(--sh-fg, #1f2937);
  font-size: 13px;
}


/* tone=dark：独立使用（没有父壳变量）时的深色兜底 */
.shell-header.is-dark {
  --sh-fg: #cbd5e1;
  --sh-muted: #8b94a3;
  --sh-hover: rgba(255, 255, 255, 0.07);
  --sh-border: #262b36;
  --sh-surface: #171a21;
  --sh-accent: #60a5fa;
}


.shell-header__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--sh-fg, #1f2937);
  cursor: pointer;
}


.shell-header__btn:hover {
  background: var(--sh-hover, rgba(15, 23, 42, 0.06));
}


.shell-header__icon {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
}


.shell-header__logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  max-width: 200px;
  padding: 4px 6px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--sh-fg, #1f2937);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}


.shell-header__logo:hover {
  background: var(--sh-hover, rgba(15, 23, 42, 0.06));
}


.shell-header__logo-img {
  width: 22px;
  height: 22px;
  flex: none;
  object-fit: contain;
}


.shell-header__logo-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.shell-header__crumb {
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
  margin-left: 4px;
}


.shell-header__sep {
  padding: 0 4px;
  color: var(--sh-muted, #6b7280);
}


.shell-header__crumb-item {
  max-width: 180px;
  overflow: hidden;
  padding: 2px 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--sh-muted, #6b7280);
  cursor: pointer;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.shell-header__crumb-item:hover {
  background: var(--sh-hover, rgba(15, 23, 42, 0.06));
  color: var(--sh-fg, #1f2937);
}


.shell-header__crumb-item.is-group {
  cursor: default;
}


.shell-header__crumb-item.is-current {
  color: var(--sh-fg, #1f2937);
  font-weight: 600;
}


.shell-header__title {
  overflow: hidden;
  color: var(--sh-fg, #1f2937);
  font-size: 13px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.shell-header__grow {
  flex: 1;
  min-width: 0;
}


/* ================= tabs-kit 样式（已整体作用域化） =================
   背景：这些样式原本各在 SFC 的 <style scoped> 里，vite 会把它们抽成独立 css 文件，
   而两个宿主都没有 import 那个 css，导致页签条是无样式裸 DOM，于是被"内联进 styles.css"。
   踩坑：早期是原样内联，于是 .tabs-nav / .tabs-scroll / .tabs-title / .is-active / .is-pinned
   这些极其通用的类名变成了全局规则，直接把 vben 原生 tabs、pure / fan 的页签给覆盖了。
   现在分两类：上下文菜单 teleport 到 body（保留全局，类名自带 tabs-ctx- 前缀）；
   其余全部收进 .shell-tabs-kit 作用域，只在壳页签条内部生效。
*/
/* ---- from tabs-kit/components/context-menu.vue (scoped → global) ---- */
.tabs-ctx-overlay {
  position: fixed;
  inset: 0;
  z-index: 9998;
}

.tabs-ctx-menu {
  position: fixed;
  z-index: 9999;
  margin: 0;
  padding: var(--tab-spacing-xs, 4px) 0;
  list-style: none;
  background: var(--tab-color-bg-elevated, #fff);
  border: 1px solid var(--tab-color-border, #e5e6eb);
  border-radius: var(--tab-radius-md, 6px);
  box-shadow: var(--tab-shadow-medium, 0 4px 16px rgba(0, 0, 0, 0.12));
  min-width: 140px;

  li:not(.tabs-ctx-menu__divider) {
    display: flex;
    align-items: center;
    gap: var(--tab-spacing-md, 8px);
    padding: var(--tab-spacing-sm, 7px) var(--tab-spacing-lg, 16px);
    cursor: pointer;
    font-size: var(--tab-font-size, 14px);
    color: var(--tab-color-text-primary, #1d2129);
    transition: background var(--tab-transition-duration, 0.1s) var(--tab-transition-timing, ease);

    &:hover {
      background: var(--tab-color-bg-hover, #f2f3f5);
    }

    &.is-disabled {
      color: var(--tab-color-text-disabled, #86909c);
      cursor: not-allowed;
      opacity: 0.55;

      &:hover {
        background: transparent;
      }
    }
  }

  &__divider {
    height: 1px;
    margin: var(--tab-spacing-xs, 4px) 0;
    padding: 0;
    background: var(--tab-color-border, #e5e6eb);
    cursor: default;
  }
}

/* 其余全部收进 .shell-tabs-kit:曾是裸 .tabs-nav/.tabs-scroll/.is-active 等通用类名，会撞 vben 原生 tabs 与 pure/fan 页签 */
  .shell-tabs-kit .dynamic-icon {
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: contain;
  }
}
  .shell-tabs-kit {
  /* 对齐 comps-vben tabs-chrome：顶部留 3px，左右不留内边距，页签从栏首贴齐 */
  padding: var(--tab-top-gap, 3px) 0 0;
  width: 100%;
  min-width: 0;
  user-select: none;
  background: var(--tab-color-bg-base, #fff);
}
  .shell-tabs-kit .truncated-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
  .shell-tabs-kit .truncated-text {
  display: inline-block;
  cursor: pointer;
}

.shell-tabs-kit {
  .tabs-title {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--tab-icon-gap, 4px);
  min-width: 0;
  max-width: 220px;
  width: 100%;
}
  .tabs-title__pin {
  flex-shrink: 0;
  color: var(--tab-color-primary, #165dff);
}
  .tabs-nav__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 72px;
  max-width: min(260px, calc(100vw - 96px));
  height: var(--tab-item-height, 33px);
  box-sizing: border-box;
  margin-right: calc(var(--tab-overlap, 12px) * -1);
  padding: 0 var(--tab-item-padding-right, 34px) 0 var(--tab-item-padding-left, 26px);
  border-radius: var(--tab-item-radius, 7px) var(--tab-item-radius, 7px) 0 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: visible;
  flex-shrink: 0;
  color: var(--tab-color-text-secondary, #4e5969);
  font-size: var(--tab-font-size, 14px);
  transition: color var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease);

  &[draggable="true"] {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  &:hover:not(.is-active) {
    color: var(--tab-color-text-primary, #1d2129);
  }

  &.is-dragging {
    opacity: 0.5;
  }

  &.is-drop-before {
    box-shadow: inset 2px 0 0 var(--tab-color-primary, #165dff);
  }

  &.is-drop-after {
    box-shadow: inset -2px 0 0 var(--tab-color-primary, #165dff);
  }

  &.is-active {
    z-index: 2;
    color: var(--tab-color-primary, #165dff);
  }

  &.is-pinned:not(.is-active) {
    color: var(--tab-color-text-primary, #1d2129);
  }

  /* 相邻页签悬停/激活时隐藏自己的分隔线，避免线条压住色块 */
  &:hover .tabs-nav__divider,
  &.is-active .tabs-nav__divider,
  &:has(+ .tabs-nav__item:hover) .tabs-nav__divider,
  &:has(+ .tabs-nav__item.is-active) .tabs-nav__divider {
    opacity: 0;
  }
}
  .tabs-nav__bg {
  position: absolute;
  inset: 0 var(--tab-bg-inset, 10px) 0;
  z-index: 1;
  border-radius: var(--tab-item-radius, 7px) var(--tab-item-radius, 7px) 0 0;
  background: transparent;
  pointer-events: none;
  transition:
    background-color var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease),
    inset var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease),
    border-radius var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease);
}
  .tabs-nav__item:hover:not(.is-active) .tabs-nav__bg {
  inset: 2px calc(var(--tab-bg-inset, 10px) + 2px) 0;
  border-radius: var(--tab-radius-md, 6px);
  background: var(--tab-color-bg-hover, #f2f3f5);
}
  .tabs-nav__item.is-active .tabs-nav__bg {
  background: var(--tab-color-bg-active-soft, rgba(22, 93, 255, 0.15));
}
  .tabs-nav__item.is-active .tabs-nav__bg::before,
.tabs-nav__item.is-active .tabs-nav__bg::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: var(--tab-item-radius, 7px);
  height: var(--tab-item-radius, 7px);
  background: radial-gradient(
    circle at 0 0,
    transparent 0 var(--tab-item-radius, 7px),
    var(--tab-color-bg-active-soft, rgba(22, 93, 255, 0.15)) calc(var(--tab-item-radius, 7px) + 0.5px)
  );
}
  .tabs-nav__item.is-active .tabs-nav__bg::before {
  left: calc(var(--tab-item-radius, 7px) * -1);
}
  .tabs-nav__item.is-active .tabs-nav__bg::after {
  right: calc(var(--tab-item-radius, 7px) * -1);
  background: radial-gradient(
    circle at 100% 0,
    transparent 0 var(--tab-item-radius, 7px),
    var(--tab-color-bg-active-soft, rgba(22, 93, 255, 0.15)) calc(var(--tab-item-radius, 7px) + 0.5px)
  );
}
  .tabs-nav__divider {
  position: absolute;
  top: 50%;
  right: var(--tab-divider-offset, 6px);
  width: 1px;
  height: var(--tab-divider-height, 16px);
  background: var(--tab-color-border, #d8dce3);
  opacity: 0.9;
  pointer-events: none;
  transform: translateY(-50%);
  transition: opacity var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease);
}
  .tabs-nav__close {
  position: absolute;
  top: 50%;
  right: var(--tab-close-inset, 11px);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--tab-close-size, 16px);
  height: var(--tab-close-size, 16px);
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--tab-color-text-disabled, #86909c);
  cursor: pointer;
  opacity: 0.8;
  transform: translateY(-50%);
  transition:
    opacity var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease),
    background var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease),
    color var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease);

  &:hover {
    background: var(--tab-color-bg-hover, #f2f3f5);
    color: var(--tab-color-text-primary, #1d2129);
    opacity: 1;
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid var(--tab-color-primary, #165dff);
    outline-offset: 1px;
  }
}
  .tabs-scroll {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  min-width: 0;
}
  .tabs-scroll__viewport {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
  .tabs-scroll__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--tab-color-text-secondary, #4e5969);
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease),
    border-color var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease),
    color var(--tab-transition-duration, 0.15s) var(--tab-transition-timing, ease);

  &:hover:not(:disabled) {
    background: var(--tab-color-bg-hover, #e8ebef);
    color: var(--tab-color-text-primary, #1d2129);
  }

  &:disabled {
    color: var(--tab-color-text-disabled, #86909c);
    background: transparent;
    cursor: not-allowed;
    opacity: 0.4;
  }
}
  .tabs-nav {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: max-content;
  min-width: 100%;
  /* 页签栏高度 = 页签高度 + 顶部留白，与 comps-vben tabs-chrome 的 pt-0.75 一致 */
  height: calc(var(--tab-item-height, 33px) + var(--tab-top-gap, 3px));

  .tabs-nav__virtual-item {
    position: absolute;
    top: var(--tab-top-gap, 3px);
    left: 0;
    will-change: transform;
  }

  /* text：纯文字页签，不要底色块，仅保留分隔线 */
  &--text .tabs-nav__bg {
    display: none;
  }

  /* line：下划线页签，靠底部 2px 主色描边标识激活 */
  &--line .tabs-nav__item {
    margin-right: 0;
    border-radius: 0;
    border-bottom: 2px solid transparent;
  }

  &--line .tabs-nav__bg,
  &--line .tabs-nav__divider {
    display: none;
  }

  &--line .tabs-nav__item.is-active {
    border-bottom-color: var(--tab-color-primary, #165dff);
    font-weight: 500;
  }

  /* rounded / capsule：胶囊形态，取消页签咬合与圆角外扩补角 */
  &--rounded .tabs-nav__item {
    margin-right: var(--tab-spacing-xs, 4px);
    border-radius: var(--tab-radius-lg, 20px);
  }

  &--rounded .tabs-nav__bg,
  &--capsule .tabs-nav__bg {
    border-radius: inherit;
  }

  &--rounded .tabs-nav__bg::before,
  &--rounded .tabs-nav__bg::after,
  &--capsule .tabs-nav__bg::before,
  &--capsule .tabs-nav__bg::after {
    display: none;
  }

  &--capsule .tabs-nav__item {
    height: calc(var(--tab-item-height, 33px) - var(--tab-spacing-xs, 4px));
    margin-right: var(--tab-spacing-xs, 4px);
    border-radius: var(--tab-radius-capsule, 16px);
  }
}
}
`,Ve="libs-shell-tabs-vue3-style";function xe(){if(typeof document=="undefined")return;const a=document.getElementById(Ve);if(a){a.textContent!==De&&(a.textContent=De);return}const o=document.createElement("style");o.id=Ve,o.textContent=De,document.head.appendChild(o)}const ze=["aria-label"],Ge={class:"shell-settings__header"},je={class:"shell-settings__title"},Ye={key:0,class:"shell-settings__group"},Oe={class:"shell-settings__options"},it=["onClick"],lt=["data-skin"],st={class:"shell-settings__option-label"},q={key:1,class:"shell-settings__group"},Y={class:"shell-settings__segmented"},ee=["onClick"],se={key:2,class:"shell-settings__group"},ue={class:"shell-settings__row"},ke=["checked"],Ie=e.defineComponent({__name:"ShellSettings",props:{open:{type:Boolean,default:!1},title:{default:"壳层设置"},skins:{default:()=>[]},currentKey:{default:""},themeMode:{default:"light"},grayscale:{type:Boolean,default:!1},showAppearance:{type:Boolean,default:!0}},emits:["close","select-skin","theme-mode","grayscale"],setup(a,{emit:o}){xe();const l=a,s=o,c=[{key:"light",label:"浅色"},{key:"dark",label:"深色"},{key:"system",label:"跟随系统"}],m=e.computed(()=>`shell-settings${l.open?" is-open":""}`);return(_,h)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(m.value)},[e.createElementVNode("div",{class:"shell-settings__mask",onClick:h[0]||(h[0]=g=>s("close"))}),e.createElementVNode("aside",{class:"shell-settings__panel",role:"dialog","aria-label":a.title},[e.createElementVNode("header",Ge,[e.createElementVNode("span",je,e.toDisplayString(a.title),1),e.createElementVNode("button",{type:"button",class:"shell-settings__close","aria-label":"关闭",onClick:h[1]||(h[1]=g=>s("close"))},[...h[3]||(h[3]=[e.createElementVNode("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[e.createElementVNode("path",{d:"M6 6l12 12M18 6l-12 12"})],-1)])])]),a.skins.length?(e.openBlock(),e.createElementBlock("section",Ye,[h[4]||(h[4]=e.createElementVNode("div",{class:"shell-settings__label"},"皮肤",-1)),e.createElementVNode("div",Oe,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.skins,g=>(e.openBlock(),e.createElementBlock("button",{key:g.key,type:"button",class:e.normalizeClass(["shell-settings__option",{"is-active":g.key===a.currentKey}]),onClick:A=>s("select-skin",g.key)},[e.createElementVNode("span",{class:"shell-settings__swatch","data-skin":g.key},null,8,lt),e.createElementVNode("span",st,e.toDisplayString(g.label),1)],10,it))),128))]),h[5]||(h[5]=e.createElementVNode("p",{class:"shell-settings__hint"},"切换皮肤会刷新页面，新皮肤单独加载，不会和旧皮肤样式叠加。",-1))])):e.createCommentVNode("v-if",!0),a.showAppearance?(e.openBlock(),e.createElementBlock("section",q,[h[6]||(h[6]=e.createElementVNode("div",{class:"shell-settings__label"},"主题",-1)),e.createElementVNode("div",Y,[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(c,g=>e.createElementVNode("button",{key:g.key,type:"button",class:e.normalizeClass(["shell-settings__segment",{"is-active":g.key===a.themeMode}]),onClick:A=>s("theme-mode",g.key)},e.toDisplayString(g.label),11,ee)),64))])])):e.createCommentVNode("v-if",!0),a.showAppearance?(e.openBlock(),e.createElementBlock("section",se,[e.createElementVNode("label",ue,[h[7]||(h[7]=e.createElementVNode("span",{class:"shell-settings__label"},"色弱模式",-1)),e.createElementVNode("input",{class:"shell-settings__switch",type:"checkbox",checked:a.grayscale,onChange:h[2]||(h[2]=g=>s("grayscale",g.target.checked))},null,40,ke)])])):e.createCommentVNode("v-if",!0)],8,ze)],2))}}),be="hel-shell-skin";function Ee(a=be){var o;try{return(((o=globalThis.localStorage)==null?void 0:o.getItem(a))||"").trim()}catch(l){return""}}function he(a,o=be){var l;try{a&&((l=globalThis.localStorage)==null||l.setItem(o,a))}catch(s){}}function _e(a,o={}){if(!a.length)return;const l=Ee(o.storageKey);return a.find(s=>s.key===l)||a.find(s=>s.key===o.initialKey)||a[0]}function Te(a){var o;const l=a;return(l==null?void 0:l.shellUi)||((o=l==null?void 0:l.default)==null?void 0:o.shellUi)||void 0}function Ce(a){if(typeof a=="function")return!0;if(!a||typeof a!="object")return!1;const o=a;return typeof o.render=="function"||typeof o.setup=="function"}function Xt({entries:a,loader:o,onError:l,storageKey:s=be,persist:c=!0,hostProvides:m}){const _=new Map,h=e.shallowRef(null),g=e.ref(!1),A=e.ref("");let C=0;function v(P){return a.find(p=>p.key===P)}async function k(P){const p=_.get(P);if(p)return p;const S=v(P);if(!S)throw new Error(`未知皮肤：${P}`);if(!S.host)throw new Error(`皮肤 ${S.label} 未配置远程入口（${S.lib}）`);let w;try{w=await o(S)}catch(B){throw new Error(`皮肤 ${S.label} 加载失败：${B instanceof Error?B.message:String(B)}`)}const E=Te(w);if(!(E!=null&&E.ShellLayout))throw new Error(`皮肤 ${S.label} 未导出 shellUi.ShellLayout`);const O=Ue({manifest:E.manifest,hostProvides:m});if(!O.ok)throw new Error(`皮肤 ${S.label} 不可挂载（${O.code}）：${O.message}`);const G={key:P,label:S.label,lib:S.lib,ShellLayout:E.ShellLayout,ShellTabs:Ce(E.ShellTabs)?E.ShellTabs:void 0,hasOwnHeader:S.hasOwnHeader===!0,manifest:O.manifest};return _.set(P,G),G}async function T(P,p={}){var E;var S;if(!P)return null;if(((S=h.value)==null?void 0:S.key)===P)return h.value;const w=++C;g.value=!0,A.value="";try{const O=await k(P);return w===C&&(h.value=O,((E=p.persist)!=null?E:c)&&he(P,s)),O}catch(O){const G=O instanceof Error?O:new Error(String(O));return w===C&&(A.value=G.message),l==null||l(G,P),null}finally{w===C&&(g.value=!1)}}function N(P){var p;const S=P||((p=_e(a,{storageKey:s}))==null?void 0:p.key);return S?T(S):Promise.resolve(null)}return{entries:a,current:h,loading:g,error:A,load:k,switchTo:T,start:N,cache:_,storageKey:s}}const tn=["search","settings","theme","locale","fullscreen","refresh","lock","logout"],rn={search:"搜索",settings:"壳层设置",theme:"切换主题",locale:"切换语言",fullscreen:"全屏",refresh:"刷新当前页签",lock:"锁定屏幕",logout:"退出登录"},qt="shell-toolbar-theme";function Jt(){try{const a=localStorage.getItem(qt);return a==="dark"?!0:a==="light"?!1:null}catch(a){return null}}function nn(a){if(typeof document!="undefined"){document.documentElement.classList.toggle("dark",a);try{localStorage.setItem(qt,a?"dark":"light")}catch(o){}}}function an(){if(typeof document=="undefined")return!1;const a=!document.documentElement.classList.contains("dark");nn(a);const o=globalThis.LibsVbenPreferences;if(o&&typeof o.updatePreferences=="function")try{o.updatePreferences({theme:{mode:a?"dark":"light"}})}catch(l){}return a}function on(){var a,o,l;if(typeof document=="undefined")return;const s=document;if(document.fullscreenElement||s.webkitFullscreenElement){(a=document.exitFullscreen)==null||a.call(document);return}(l=(o=document.documentElement).requestFullscreen)==null||l.call(o)}function Qt(a={}){var o;const l=a.actions||{},s=(o=a.keys)!=null&&o.length?a.keys:tn,c={...rn,...a.labels||{}},m=()=>a.isDark?a.isDark():typeof document=="undefined"?Jt()===!0:document.documentElement.classList.contains("dark")||Jt()===!0,_=e.shallowRef(m()),h=T=>{if(T==="theme")return()=>{var N;_.value=an(),(N=a.onThemeChange)==null||N.call(a,_.value)};if(T==="fullscreen")return on;if(T==="settings")return a.onSettings},g=T=>{const N=l[T];return typeof N=="function"?N:h(T)},A=e.computed(()=>s.filter(T=>typeof g(T)=="function")),C=e.computed(()=>A.value.map(T=>({key:T,label:c[T]||T,...T==="theme"?{active:_.value}:null})));async function v(T){const N=g(T);N&&(await N(),T==="theme"&&(_.value=m()))}return{items:C,dark:e.computed(()=>_.value),run:v,has:T=>typeof g(T)=="function"}}const Zt="hel-shell-settings",ln="shell-grayscale",sn="dark",cn="(prefers-color-scheme: dark)",St={themeMode:"light",grayscale:!1};function dn(a){var o;try{const l=(o=globalThis.localStorage)==null?void 0:o.getItem(a);if(!l)return{...St};const s=JSON.parse(l);return{themeMode:s.themeMode==="dark"||s.themeMode==="system"?s.themeMode:"light",grayscale:s.grayscale===!0}}catch(l){return{...St}}}function un(a,o){var l;try{(l=globalThis.localStorage)==null||l.setItem(o,JSON.stringify(a))}catch(s){}}function fn(a){const o=globalThis.LibsVbenPreferences;if(!(!o||typeof o.updatePreferences!="function"))try{o.updatePreferences({theme:{mode:a?"dark":"light"}})}catch(l){}}function er(a={}){var o;const l=a.storageKey||Zt,s=e.ref(dn(l)),c=typeof window!="undefined"&&window.matchMedia?window.matchMedia(cn):null,m=e.ref(!!(c!=null&&c.matches));(o=c==null?void 0:c.addEventListener)==null||o.call(c,"change",k=>{m.value=k.matches});const _=e.computed(()=>s.value.themeMode==="dark"||s.value.themeMode==="system"&&m.value);function h(){typeof document!="undefined"&&(document.documentElement.classList.toggle(sn,_.value),document.documentElement.classList.toggle(ln,s.value.grayscale),a.syncVben!==!1&&fn(_.value))}function g(k){s.value={...s.value,themeMode:k}}function A(k){s.value={...s.value,grayscale:k}}function C(){const k=_.value?"light":"dark";return g(k),k==="dark"}function v(){s.value={...St}}return e.watch(_,h,{immediate:a.autoApply!==!1}),e.watch(()=>s.value.grayscale,h),e.watch(s,k=>un(k,l),{deep:!0}),{state:s,dark:_,setThemeMode:g,setGrayscale:A,toggleTheme:C,reset:v,apply:h}}const pn={class:"shell-host"},hn={key:1,class:"shell-host__loading"},mn=e.defineComponent({__name:"ShellHost",props:{menus:{default:()=>[]},activeKey:{default:""},adapter:{},onOpenPath:{},hostProvides:{},logoText:{default:""},logoSrc:{default:""},skins:{default:()=>[]},loader:{},initialKey:{default:""},loadingText:{default:"正在加载壳层皮肤…"},toolActions:{default:()=>({})},tools:{default:()=>[]},toolLabels:{default:()=>({})},onThemeChange:{},persistKey:{default:be},reloadOnSwitch:{type:Boolean,default:!0},settings:{type:Boolean,default:!0}},emits:["menu-select","click-logo","skin-change","skin-error","tool-action","tab-select","tab-close","tab-refresh","tab-pin","tab-move"],setup(a,{expose:o,emit:l}){xe();const s=a,c=l,m=Xt({entries:s.skins,storageKey:s.persistKey,hostProvides:s.hostProvides,loader:L=>{if(!s.loader)throw new Error("ShellHost 缺少 loader：请传入加载远程皮肤包的函数");return s.loader(L)},onError:(L,y)=>c("skin-error",L,y)}),_=_e(s.skins,{storageKey:s.persistKey,initialKey:s.initialKey});m.start(_==null?void 0:_.key);const h=e.computed(()=>{var L;return(L=m.current.value)==null?void 0:L.ShellLayout}),g=e.computed(()=>{var L;return((L=m.current.value)==null?void 0:L.key)||""}),A=e.ref(!1),C=e.computed(()=>{var y;var L;return(y=(L=s.adapter)==null?void 0:L.snapshot.value.tabs)!=null?y:[]}),v=e.computed(()=>{var L;return(L=s.adapter)==null?void 0:L.snapshot.value.activeId}),k=e.computed(()=>{var y;var L;return(y=(L=s.adapter)==null?void 0:L.capabilities.value)!=null?y:{}}),T=e.computed(()=>{var L;return s.activeKey||((L=s.adapter)==null?void 0:L.snapshot.value.selectedMenuKey)||""});function N(L,y="skin"){s.adapter&&s.adapter.dispatch(L,y)}function P(L){if(s.onOpenPath){s.onOpenPath(L.path);return}s.adapter&&s.adapter.dispatch({type:"tab:open",path:L.path,title:L.title,query:L.query})}function p(L){N({type:"tab:activate",id:L}),c("tab-select",L)}function S(L,y){N({type:"tab:close",id:L,scope:y}),c("tab-close",L,y)}function w(L){N({type:"tab:refresh",id:L}),c("tab-refresh",L)}function E(L,y){N({type:"tab:pin",id:L,pinned:y}),c("tab-pin",L,y)}function O(L,y,te){N({type:"tab:move",id:L,anchorId:y,position:te}),c("tab-move",L,y,te)}const G=e.computed(()=>{var y;var L;return(y=(L=m.current.value)==null?void 0:L.hasOwnHeader)!=null?y:(_==null?void 0:_.hasOwnHeader)===!0}),B=s.settings?er({autoApply:!G.value}):null,$=e.ref(!1),J=Qt({actions:{...s.adapter?{refresh:()=>{var L;return void((L=s.adapter)==null?void 0:L.dispatch({type:"tab:refresh"},"host"))}}:null,...B?{theme:()=>B.toggleTheme()}:null,...s.toolActions},keys:s.tools,labels:s.toolLabels,onThemeChange:L=>{var y;return(y=s.onThemeChange)==null?void 0:y.call(s,L)},onSettings:s.settings?()=>{$.value=!0}:void 0}),M=e.computed(()=>G.value?[]:J.items.value);async function F(L){await J.run(L),c("tool-action",L)}async function R(L){if(!L||L===g.value){$.value=!1;return}if(s.reloadOnSwitch){A.value=!0,he(L,s.persistKey),c("skin-change",L),typeof location!="undefined"&&location.reload();return}const y=await m.switchTo(L);y&&($.value=!1,c("skin-change",y.key))}return o({registry:m,switchTo:m.switchTo,settings:B,openSettings:()=>$.value=!0}),(L,y)=>(e.openBlock(),e.createElementBlock("div",pn,[e.createCommentVNode(`
      当前皮肤的 ShellLayout。宿主只交菜单树、激活 key、tabbar/content 两个出口，
      换皮肤就是换掉这个组件实例，路由、页签 manager、内容出口都不动。
    `),h.value?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(h.value),{key:0,menus:a.menus,"active-key":T.value,"logo-text":a.logoText,"logo-src":a.logoSrc,toolbar:M.value,tabs:C.value,"active-tab-id":v.value,capabilities:k.value,onMenuSelect:y[0]||(y[0]=te=>c("menu-select",te)),onClickLogo:y[1]||(y[1]=te=>c("click-logo")),onToolAction:y[2]||(y[2]=te=>F(te)),onTabSelect:p,onTabClose:S,onTabRefresh:w,onTabOpen:P,onTabPin:E,onTabMove:O},{tabbar:e.withCtx(()=>[e.renderSlot(L.$slots,"tabbar")]),content:e.withCtx(()=>[e.renderSlot(L.$slots,"content")]),_:3},40,["menus","active-key","logo-text","logo-src","toolbar","tabs","active-tab-id","capabilities"])):(e.openBlock(),e.createElementBlock("div",hn,e.toDisplayString(a.loadingText),1)),e.createCommentVNode(" 齿轮点开的设置抽屉：皮肤单选 + 外观偏好，外观分组在皮肤自带 header 时隐藏 "),e.unref(B)?(e.openBlock(),e.createBlock(Ie,{key:2,open:$.value,skins:a.skins,"current-key":g.value,"theme-mode":e.unref(B).state.value.themeMode,grayscale:e.unref(B).state.value.grayscale,"show-appearance":!G.value,onClose:y[3]||(y[3]=te=>$.value=!1),onSelectSkin:R,onThemeMode:e.unref(B).setThemeMode,onGrayscale:e.unref(B).setGrayscale},null,8,["open","skins","current-key","theme-mode","grayscale","show-appearance","onThemeMode","onGrayscale"])):e.createCommentVNode("v-if",!0)]))}}),gn={class:"shell-tabbar"},vn={class:"shell-tabbar__list"},bn=["draggable","onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],_n={key:0,class:"shell-tabbar__pin",title:"已固定"},yn=["title"],En=["onClick"],Sn=["disabled"],xn=["disabled"],kn=["disabled"],Ln=["disabled"],An=["disabled"],wn=["disabled"],In=["disabled"],Tn=e.defineComponent({__name:"ShellTabBar",props:{adapter:{}},setup(a){const o=a,l=e.computed(()=>o.adapter.snapshot.value.tabs),s=e.reactive({visible:!1,x:0,y:0,tabId:""}),c=e.ref(""),m=e.ref(""),_=e.computed(()=>l.value.find(M=>M.id===s.tabId)),h=e.computed(()=>{var M;return!!((M=_.value)!=null&&M.closable)}),g=e.computed(()=>o.adapter.can({type:"tab:refresh",id:s.tabId})),A=e.computed(()=>o.adapter.can({type:"tab:pin",id:s.tabId,pinned:!0})),C=e.computed(()=>o.adapter.can({type:"tab:close",id:s.tabId,scope:"others"})),v=e.computed(()=>o.adapter.can({type:"tab:close",id:s.tabId,scope:"left"})),k=e.computed(()=>o.adapter.can({type:"tab:close",id:s.tabId,scope:"right"})),T=e.computed(()=>o.adapter.can({type:"tab:close",scope:"all"})),N=e.computed(()=>{var M;return!!((M=_.value)!=null&&M.pinned)});function P(M){o.adapter.dispatch({type:"tab:activate",id:M},"tabbar")}function p(M){o.adapter.dispatch({type:"tab:close",id:M,scope:"self"},"tabbar")}function S(M,F){s.visible=!0,s.tabId=F,s.x=M.clientX,s.y=M.clientY+8}function w(){s.visible=!1}function E(M){const F=s.tabId;F&&(w(),M==="refresh"?o.adapter.dispatch({type:"tab:refresh",id:F},"tabbar"):M==="pin"?o.adapter.dispatch({type:"tab:pin",id:F,pinned:!N.value},"tabbar"):o.adapter.dispatch({type:"tab:close",id:F,scope:M==="close"?"self":M},"tabbar"))}function O(M,F){var R;c.value=F,(R=M.dataTransfer)==null||R.setData("text/plain",F)}function G(M){c.value&&c.value!==M&&(m.value=M)}function B(M){m.value===M&&(m.value="")}function $(M){const F=c.value;J(),!(!F||F===M)&&o.adapter.dispatch({type:"tab:move",id:F,anchorId:M,position:"before"},"tabbar")}function J(){c.value="",m.value=""}return e.onMounted(()=>window.addEventListener("click",w)),e.onBeforeUnmount(()=>window.removeEventListener("click",w)),(M,F)=>(e.openBlock(),e.createElementBlock("div",gn,[e.createElementVNode("div",vn,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.value,R=>(e.openBlock(),e.createElementBlock("div",{key:R.id,class:e.normalizeClass(["shell-tabbar__item",{"is-active":R.active,"is-pinned":R.pinned,"is-dragging":c.value===R.id,"is-drop-target":m.value===R.id}]),draggable:R.draggable,onClick:L=>P(R.id),onContextmenu:e.withModifiers(L=>S(L,R.id),["prevent"]),onDragstart:L=>O(L,R.id),onDragover:e.withModifiers(L=>G(R.id),["prevent"]),onDragleave:L=>B(R.id),onDrop:e.withModifiers(L=>$(R.id),["prevent"]),onDragend:J},[R.pinned?(e.openBlock(),e.createElementBlock("span",_n,"•")):e.createCommentVNode("v-if",!0),e.createElementVNode("span",{class:"shell-tabbar__title",title:R.title},e.toDisplayString(R.title),9,yn),R.closable?(e.openBlock(),e.createElementBlock("span",{key:1,class:"shell-tabbar__close",title:"关闭",onClick:e.withModifiers(L=>p(R.id),["stop"])},"×",8,En)):e.createCommentVNode("v-if",!0)],42,bn))),128))]),s.visible?(e.openBlock(),e.createElementBlock("div",{key:0,class:"shell-tabbar__context",style:e.normalizeStyle({left:`${s.x}px`,top:`${s.y}px`})},[e.createElementVNode("button",{type:"button",disabled:!g.value,onClick:F[0]||(F[0]=R=>E("refresh"))},"刷新当前",8,Sn),e.createElementVNode("button",{type:"button",disabled:!A.value,onClick:F[1]||(F[1]=R=>E("pin"))},e.toDisplayString(N.value?"取消固定":"固定"),9,xn),e.createElementVNode("button",{type:"button",disabled:!h.value,onClick:F[2]||(F[2]=R=>E("close"))},"关闭",8,kn),e.createElementVNode("button",{type:"button",disabled:!C.value,onClick:F[3]||(F[3]=R=>E("others"))},"关闭其他",8,Ln),e.createElementVNode("button",{type:"button",disabled:!v.value,onClick:F[4]||(F[4]=R=>E("left"))},"关闭左侧",8,An),e.createElementVNode("button",{type:"button",disabled:!k.value,onClick:F[5]||(F[5]=R=>E("right"))},"关闭右侧",8,wn),e.createElementVNode("button",{type:"button",disabled:!T.value,onClick:F[6]||(F[6]=R=>E("all"))},"全部关闭",8,In)],4)):e.createCommentVNode("v-if",!0)]))}}),$e=(a,o)=>{const l=a.__vccOpts||a;for(const[s,c]of o)l[s]=c;return l},Cn=$e(Tn,[["__scopeId","data-v-a097173b"]]),Mn=["title","aria-label","disabled","data-tool","onClick"],Nn=["innerHTML"],Dn='<circle cx="12" cy="12" r="8"/><path d="M12 8v4M12 16h.01"/>',tr=e.defineComponent({__name:"ShellToolbar",props:{items:{default:()=>[]},tone:{default:"light"}},emits:["run"],setup(a,{emit:o}){xe();const l=a,s=o,c={search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',theme:'<path d="M12 3a9 9 0 1 0 9 9 6.5 6.5 0 0 1-9-9Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',locale:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3.2 3.6 3.2 14.4 0 18-3.2-3.6-3.2-14.4 0-18Z"/>',fullscreen:'<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3"/>',refresh:'<path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 4v5h-5"/>',lock:'<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>'},m=h=>h.key==="theme"&&h.active?c.sun:c[h.key]||Dn,_=e.computed(()=>`shell-toolbar is-${l.tone}`);return(h,g)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(_.value),role:"toolbar"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.items,A=>(e.openBlock(),e.createElementBlock("button",{key:A.key,type:"button",class:e.normalizeClass(["shell-toolbar__btn",{"is-active":A.active}]),title:A.label,"aria-label":A.label,disabled:A.disabled,"data-tool":A.key,onClick:C=>s("run",A.key)},[(e.openBlock(),e.createElementBlock("svg",{class:"shell-toolbar__icon",viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:m(A)},null,8,Nn))],10,Mn))),128))],2))}});function On(a,o){var s;if(!(a!=null&&a.length)||!o)return[];const l=(c,m)=>{var _,h;for(const g of c){const A={key:g.key,title:g.title,...(_=g.children)!=null&&_.length?{group:!0}:null},C=[...m,A];if(g.key===o)return C;if((h=g.children)!=null&&h.length){const v=l(g.children,C);if(v)return v}}};return(s=l(a,[]))!=null?s:[]}const Bn=["aria-label","title"],Pn=["src"],Vn={key:1,class:"shell-header__logo-text"},$n={class:"shell-header__crumb"},Rn={key:0,class:"shell-header__sep"},Hn=["onClick"],Kn={key:1,class:"shell-header__title"},Fn=e.defineComponent({name:"ShellHeader",__name:"ShellHeader",props:{menus:{default:()=>[]},activeKey:{default:""},logoText:{default:""},logoSrc:{default:""},title:{default:""},toolbar:{default:()=>[]},toolbarActions:{},toolbarKeys:{default:()=>[]},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1},tone:{default:"light"}},emits:["menu-select","click-logo","tool-action","toggle-collapse"],setup(a,{emit:o}){xe();const l=a,s=o,c=l.toolbarActions?Qt({actions:l.toolbarActions,keys:l.toolbarKeys}):void 0,m=e.computed(()=>{var A;return l.toolbar.length?l.toolbar:(A=c==null?void 0:c.items.value)!=null?A:[]}),_=e.computed(()=>On(l.menus,l.activeKey)),h=e.computed(()=>`shell-header is-${l.tone}`);function g(){s("toggle-collapse",!l.collapsed)}return(A,C)=>(e.openBlock(),e.createElementBlock("header",{class:e.normalizeClass(h.value)},[a.collapsible?(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:"shell-header__btn shell-header__toggle","aria-label":a.collapsed?"展开侧栏":"收起侧栏",title:a.collapsed?"展开侧栏":"收起侧栏",onClick:g},[...C[2]||(C[2]=[e.createElementVNode("svg",{class:"shell-header__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[e.createElementVNode("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1)])],8,Bn)):e.createCommentVNode("v-if",!0),e.renderSlot(A.$slots,"logo",{},()=>[a.logoText||a.logoSrc?(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:"shell-header__logo",onClick:C[0]||(C[0]=v=>s("click-logo"))},[a.logoSrc?(e.openBlock(),e.createElementBlock("img",{key:0,class:"shell-header__logo-img",src:a.logoSrc,alt:""},null,8,Pn)):e.createCommentVNode("v-if",!0),a.logoText?(e.openBlock(),e.createElementBlock("span",Vn,e.toDisplayString(a.logoText),1)):e.createCommentVNode("v-if",!0)])):e.createCommentVNode("v-if",!0)]),e.createElementVNode("div",$n,[e.renderSlot(A.$slots,"breadcrumb",{},()=>[_.value.length?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(_.value,(v,k)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:v.key},[k?(e.openBlock(),e.createElementBlock("span",Rn,"/")):e.createCommentVNode("v-if",!0),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["shell-header__crumb-item",{"is-current":k===_.value.length-1,"is-group":v.group}]),onClick:T=>s("menu-select",v.key)},e.toDisplayString(v.title),11,Hn)],64))),128)):a.title?(e.openBlock(),e.createElementBlock("span",Kn,e.toDisplayString(a.title),1)):e.createCommentVNode("v-if",!0)])]),C[3]||(C[3]=e.createElementVNode("div",{class:"shell-header__grow"},null,-1)),e.renderSlot(A.$slots,"center"),e.renderSlot(A.$slots,"actions"),m.value.length?(e.openBlock(),e.createBlock(tr,{key:1,items:m.value,tone:a.tone,onRun:C[1]||(C[1]=v=>s("tool-action",v))},null,8,["items","tone"])):e.createCommentVNode("v-if",!0),e.renderSlot(A.$slots,"account")],2))}});function rr({adapter:a,port:o,options:l={}}){const s=e.computed(()=>{var y;return(y=e.toValue(l))!=null?y:{}}),c=e.computed(()=>a.snapshot.value),m=e.computed(()=>a.capabilities.value),_=e.computed(()=>s.value.hideFirst?c.value.tabs.filter(y=>!y.first):c.value.tabs),h=e.computed(()=>c.value.activeId),g=y=>a.dispatch(y,"tabbar"),A=y=>g({type:"tab:activate",id:y}),C=(y,te="self")=>g({type:"tab:close",scope:te,...y===void 0?{}:{id:y}}),v=y=>C(y,"others"),k=y=>C(y,"left"),T=y=>C(y,"right"),N=()=>C(void 0,"all"),P=y=>g({type:"tab:refresh",...y===void 0?{}:{id:y}}),p=y=>g({type:"tab:pin",id:y.id,pinned:!y.pinned}),S=(y,te,Re="after")=>g({type:"tab:move",id:y,anchorId:te,position:Re}),w=y=>c.value.tabs.find(te=>te.id===y),E=Promise.resolve("unsupported"),O=y=>o!=null&&o.detach?o.detach(y):E,G=()=>o!=null&&o.closeDetached?o.closeDetached():E,B=()=>o!=null&&o.refreshAll?o.refreshAll():E,$=y=>o!=null&&o.openExternal?o.openExternal(y):E,J=e.computed(()=>{var te;var y;return(te=(y=o==null?void 0:o.detached)==null?void 0:y.value)!=null?te:null}),M=y=>{if(o!=null&&o.onDetachedError){o.onDetachedError(y);return}console.warn("[shell-tabs] detached 容器异常",y)},F=e.computed(()=>{var y;return{refresh:m.value.refresh===!0,refreshAll:!!(o!=null&&o.refreshAll),pin:m.value.pin===!0,move:m.value.move===!0,detach:!!(o!=null&&o.detach),openExternal:!!(o!=null&&o.openExternal),detachedView:!!(o!=null&&o.detached),closeScopes:[...(y=m.value.closeScopes)!=null?y:[]]}}),R=(y,te,Re)=>o!=null&&o.canMove?o.canMove(y,te,Re):F.value.move,L=e.computed(()=>{var y;return((y=s.value.draggable)!=null?y:!0)&&F.value.move});return{tabs:_,activeId:h,detachedTab:J,available:F,canDrag:L,options:s,activate:A,close:C,closeOthers:v,closeLeft:k,closeRight:T,closeAll:N,refresh:P,refreshAll:B,togglePin:p,move:S,canMove:R,getTab:w,detach:O,closeDetached:G,openExternal:$,reportDetachedError:M}}const Un=["width","height"],nr=e.defineComponent({__name:"icon-refresh",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M512 170.667a341.333 341.333 0 1 0 320.384 456.107 42.667 42.667 0 0 1 80.213 29.44A426.667 426.667 0 1 1 896 512v85.333l-106.667-106.666L682.667 597.333V512a341.013 341.013 0 0 0-170.667-341.333z"},null,-1)])],8,Un))}}),zn=["width","height"],ar=e.defineComponent({__name:"icon-arrow-left",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M640 213.333L298.667 512 640 810.667 768 682.667 554.667 512 768 341.333z"},null,-1)])],8,zn))}}),Gn=["width","height"],or=e.defineComponent({__name:"icon-arrow-right",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M384 213.333L256 341.333 469.333 512 256 682.667 384 810.667 725.333 512z"},null,-1)])],8,Gn))}}),jn=["width","height"],ir=e.defineComponent({__name:"icon-close",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M195.2 195.2a42.667 42.667 0 0 1 60.267 0L512 451.733l256.533-256.533a42.667 42.667 0 0 1 60.267 60.267L572.267 512l256.533 256.533a42.667 42.667 0 0 1-60.267 60.267L512 572.267 255.467 828.8a42.667 42.667 0 0 1-60.267-60.267L451.733 512 195.2 255.467a42.667 42.667 0 0 1 0-60.267z"},null,-1)])],8,jn))}}),Yn=["width","height"],Wn=e.defineComponent({__name:"icon-folder-delete",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M85.333 213.333h426.667l85.333 85.334H938.667v554.666H85.333V213.333zm85.334 85.334v469.333h682.666V384H554.667L469.333 298.667H170.667zM576 490.667l85.333 85.333 85.334-85.333 60.266 60.266-85.333 85.334 85.333 85.333-60.266 60.267-85.334-85.334-85.333 85.334-60.267-60.267 85.334-85.333-85.334-85.334 60.267-60.266z"},null,-1)])],8,Yn))}}),Xn=["width","height"],qn=e.defineComponent({__name:"icon-external",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M213.333 213.333h298.667v85.334H298.667v426.666h426.666V512h85.334v298.667H213.333V213.333zm384 0h213.334v213.334h-85.334V358.827L469.333 614.827l-60.266-60.267 256-256H597.333v-85.333z"},null,-1)])],8,Xn))}}),Jn=["width","height"],lr=e.defineComponent({__name:"icon-pin",props:{size:{}},setup(a){return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{viewBox:"0 0 1024 1024",width:a.size,height:a.size,fill:"currentColor"},[...l[0]||(l[0]=[e.createElementVNode("path",{d:"M672 85.333 938.667 352l-60.334 60.333-45.333-45.333-196.333 196.333 48 176-60.334 60.334-184.333-184.334-221.333 221.334-60.334-60.334 221.334-221.333-184.334-184.333 60.334-60.334 176 48L628 161.667l-45.333-45.334L672 85.333zm17 145.667L523.667 396.333l-18.334 18.334-110.666-30.334 245 245-30.334-110.666 18.334-18.334L793 335 689 231z"},null,-1)])],8,Jn))}}),Qn=["onClick"],Zn={key:0,class:"tabs-ctx-menu__divider","aria-hidden":"true"},ea=$e(e.defineComponent({__name:"context-menu",props:{visible:{type:Boolean},x:{},y:{},tab:{}},emits:["close","action"],setup(a,{emit:o}){const l=a,s=o,c=e.computed(()=>{var m,_;return[[{action:"detach",icon:e.markRaw(qn),label:"弹窗显示"}],[{action:"toggle-pinned",icon:e.markRaw(lr),label:(m=l.tab)!=null&&m.pinned?"取消置顶":"置顶",disabled:!!((_=l.tab)!=null&&_.first)},{action:"refresh",icon:e.markRaw(nr),label:"刷新此页"}],[{action:"close-left",icon:e.markRaw(ar),label:"关闭左侧"},{action:"close-right",icon:e.markRaw(or),label:"关闭右侧"},{action:"close-other",icon:e.markRaw(ir),label:"关闭其他"},{action:"close-all",icon:e.markRaw(Wn),label:"全部关闭"}],[{action:"refresh-all",icon:e.markRaw(nr),label:"全部刷新"}]]});return(m,_)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[a.visible?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("div",{class:"tabs-ctx-overlay",onClick:_[0]||(_[0]=h=>s("close")),onContextmenu:_[1]||(_[1]=e.withModifiers(h=>s("close"),["prevent"]))},null,32),e.createElementVNode("ul",{class:"tabs-ctx-menu",style:e.normalizeStyle({left:a.x+"px",top:a.y+"px"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,(h,g)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:g},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(h,A=>(e.openBlock(),e.createElementBlock("li",{key:A.action,class:e.normalizeClass({"is-disabled":A.disabled}),onClick:C=>!A.disabled&&s("action",A.action)},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(A.icon),{size:"14"})),e.createTextVNode(" "+e.toDisplayString(A.label),1)],10,Qn))),128)),g<c.value.length-1?(e.openBlock(),e.createElementBlock("li",Zn)):e.createCommentVNode("v-if",!0)],64))),128))],4)],64)):e.createCommentVNode("v-if",!0)]))}}),[["__scopeId","data-v-08347470"]]),ta=["title"],ra=$e(e.defineComponent({__name:"truncated-text",props:{text:{default:""},maxLength:{default:28}},setup(a){const o=a,l=e.computed(()=>{if(o.text.length<=o.maxLength)return o.text;const s=Math.floor((o.maxLength-3)/2),c=o.text.substring(0,s),m=o.text.substring(o.text.length-s);return`${c}...${m}`});return(s,c)=>(e.openBlock(),e.createElementBlock("div",{class:"truncated-text",title:o.text},e.toDisplayString(l.value),9,ta))}}),[["__scopeId","data-v-c3f1ae5a"]]);function sr(a,o){if(!a)return null;const l=a.components;return l!=null&&l[o]?l[o]:a.parent?sr(a.parent,o):a.appContext.components[o]}const na=["innerHTML"],aa=$e(e.defineComponent({__name:"dynamic-icon",props:{icon:{},width:{default:"1em"},height:{default:"1em"}},setup(a){const o=a,l=e.shallowRef(),s=e.getCurrentInstance();let c=0;const m=e.computed(()=>{const p={};return o.width!==void 0&&(p.width=typeof o.width=="number"?`${o.width}px`:o.width),o.height!==void 0&&(p.height=typeof o.height=="number"?`${o.height}px`:o.height),p});e.watch(()=>o.icon,()=>{_()},{immediate:!0});async function _(){const p=++c,S=(o.icon||"").trim();if(!S){h(p);return}try{const w=s?sr(s,S):null;if(g(w)){const E=A(w),O=E.includes("<svg")?await P(E):E;h(p,O)}else if(C(S)){const E=S.includes("<svg")?await P(S):S;h(p,E)}else v(S)||k(S)?h(p,`<img style="width:100%;height:100%;object-fit:contain;" src="${T(S)}" alt="" />`):h(p)}catch(w){h(p)}}function h(p,S){p===c&&(l.value=S)}function g(p){return p!==null&&(typeof p=="object"||typeof p=="function")}function A(p){if(typeof document=="undefined")return"";const S=document.createElement("div"),w=e.createVNode(p);s!=null&&s.appContext&&(w.appContext=s.appContext);try{return e.render(w,S),S.innerHTML}finally{e.render(null,S)}}function C(p){return/<[a-z][\s\S]*>/i.test(p.trim())}function v(p){return/\.(png|jpe?g|gif|svg|webp|avif)([?#].*)?$/i.test(p)}function k(p){return p.startsWith("data:image")}function T(p){return p.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N(p){return new Promise(S=>{if(typeof document=="undefined"){S(void 0);return}const w=document.createElement("div");w.style.position="absolute",w.style.visibility="hidden",w.innerHTML=p.trim();const E=w.querySelector("svg");if(!E){S(void 0);return}document.body.appendChild(w),requestAnimationFrame(()=>{try{const O=Array.from(E.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon, g, use")),G=O.length?O:[E];let B=1/0,$=1/0,J=-1/0,M=-1/0;if(G.forEach(F=>{try{const R=F.getBBox();B=Math.min(B,R.x),$=Math.min($,R.y),J=Math.max(J,R.x+R.width),M=Math.max(M,R.y+R.height)}catch(R){}}),B===1/0||$===1/0||J===-1/0||M===-1/0){S(void 0);return}S(`${B} ${$} ${J-B} ${M-$}`)}finally{document.body.removeChild(w)}})})}async function P(p){if(typeof document=="undefined")return p;const S=document.createElement("div");S.innerHTML=p.trim();const w=S.querySelector("svg");if(!w)return p;const E=await N(p);return w.hasAttribute("viewBox")||(E?w.setAttribute("viewBox",E):w.setAttribute("viewBox","0 0 100 100")),w.removeAttribute("class"),w.removeAttribute("style"),w.removeAttribute("width"),w.removeAttribute("height"),w.setAttribute("style","width:100%;height:100%;display:block;"),S.innerHTML}return(p,S)=>e.renderSlot(p.$slots,"default",{style:e.normalizeStyle(m.value),render:l.value},()=>[l.value?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,class:"dynamic-icon",style:m.value},p.$attrs,{innerHTML:l.value}),null,16,na)):(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:1,class:"dynamic-icon",style:m.value},p.$attrs),[e.renderSlot(p.$slots,"empty",{},void 0,!0)],16))],!0)}}),[["__scopeId","data-v-f567b923"]]),oa=["draggable","title"],ia={class:"tabs-title"},la=$e(e.defineComponent({__name:"tab-item",props:{tab:{},isActive:{type:Boolean},showIcon:{type:Boolean},defaultIcon:{},maxTitleLength:{},draggable:{type:Boolean}},emits:["select","close","contextmenu","dragstart","dragover","dragleave","drop","dragend"],setup(a,{emit:o}){const l=o;return(s,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tabs-nav__item",{"is-active":a.isActive,"is-closable":a.tab.closable,"is-pinned":a.tab.pinned}]),draggable:a.draggable,title:a.tab.pinned?"已置顶":void 0,onClick:c[1]||(c[1]=m=>l("select",a.tab.id)),onContextmenu:c[2]||(c[2]=e.withModifiers(m=>l("contextmenu",m,a.tab),["prevent"])),onDragstart:c[3]||(c[3]=m=>l("dragstart",m,a.tab)),onDragover:c[4]||(c[4]=m=>l("dragover",m,a.tab)),onDragleave:c[5]||(c[5]=m=>l("dragleave",m,a.tab)),onDrop:c[6]||(c[6]=m=>l("drop",m,a.tab)),onDragend:c[7]||(c[7]=m=>l("dragend"))},[c[8]||(c[8]=e.createElementVNode("span",{class:"tabs-nav__bg","aria-hidden":"true"},null,-1)),e.createElementVNode("div",ia,[a.tab.pinned?(e.openBlock(),e.createBlock(lr,{key:0,class:"tabs-title__pin",size:"13","aria-hidden":"true"})):e.createCommentVNode("v-if",!0),a.showIcon&&(a.tab.icon||a.defaultIcon)?(e.openBlock(),e.createBlock(aa,{key:1,width:"16px",height:"16px",icon:a.tab.icon||a.defaultIcon},null,8,["icon"])):e.createCommentVNode("v-if",!0),e.createVNode(ra,{text:a.tab.title||"未命名","max-length":a.maxTitleLength},null,8,["text","max-length"])]),c[9]||(c[9]=e.createElementVNode("span",{class:"tabs-nav__divider"},null,-1)),a.tab.closable?(e.openBlock(),e.createElementBlock("button",{key:0,class:"tabs-nav__close",type:"button","aria-label":"关闭标签页",onClick:c[0]||(c[0]=e.withModifiers(m=>l("close",a.tab.id),["stop"]))},[e.createVNode(ir,{size:"12"})])):e.createCommentVNode("v-if",!0)],42,oa))}}),[["__scopeId","data-v-5a38c91b"]]);function sa(a){const o=e.ref(),l=e.ref(),s=e.ref("before"),c=v=>{const k=v.currentTarget instanceof HTMLElement?v.currentTarget:void 0;if(!k)return s.value;const T=k.getBoundingClientRect();return v.clientX>T.left+T.width/2?"after":"before"},m=(v,k,T)=>!v||!a.isTabDraggable(v)||!a.isTabDraggable(k)?!1:a.model.canMove(v.id,k.id,T),_=(v,k)=>{var T;if(!a.isTabDraggable(k)){v.preventDefault();return}o.value=k.id,l.value=void 0,(T=v.dataTransfer)==null||T.setData("text/plain",k.id),v.dataTransfer&&(v.dataTransfer.effectAllowed="move")},h=(v,k)=>{const T=o.value?a.model.getTab(o.value):void 0,N=c(v);if(!m(T,k,N)){l.value!==void 0&&(l.value=void 0),v.dataTransfer&&(v.dataTransfer.dropEffect="none");return}v.preventDefault(),v.dataTransfer&&(v.dataTransfer.dropEffect="move"),s.value!==N&&(s.value=N),l.value!==k.id&&(l.value=k.id)},g=(v,k)=>{const T=v.currentTarget instanceof HTMLElement?v.currentTarget:void 0,N=v.relatedTarget instanceof Node?v.relatedTarget:void 0;T&&N&&T.contains(N)||l.value===k.id&&(l.value=void 0)},A=async(v,k)=>{var T;v.preventDefault();const N=o.value||((T=v.dataTransfer)==null?void 0:T.getData("text/plain")),P=N?a.model.getTab(N):void 0,p=s.value;P&&m(P,k,p)&&await a.model.move(P.id,k.id,p),C()},C=()=>{o.value=void 0,l.value=void 0,s.value="before"};return{draggingTabId:o,dropPosition:s,dropTargetTabId:l,handleDragEnd:C,handleDragLeave:g,handleDragOver:h,handleDragStart:_,handleDrop:A}}function ca(a){const o=e.ref(!1),l=e.ref(!1),s=e.ref(!1);let c,m=0;const _=v=>v?a.tabs.value.findIndex(k=>k.id===v):-1,h=()=>{m||(m=window.requestAnimationFrame(()=>{m=0;const v=a.tabsViewportRef.value;if(!v)return;const k=Math.max(0,v.scrollWidth-v.clientWidth),T=Math.min(v.scrollLeft,k),N=1;a.viewportWidth.value=v.clientWidth,a.scrollLeft.value=T,o.value=k>N,l.value=T>N,s.value=T<k-N}))},g=v=>{const k=a.tabsViewportRef.value;if(!k)return;const T=Math.max(k.clientWidth*.7,120);k.scrollBy({left:v==="left"?-T:T,behavior:"smooth"})},A=v=>{const k=a.tabsViewportRef.value;if(!k||!o.value)return;const T=Math.max(0,k.scrollWidth-k.clientWidth),N=Math.abs(v.deltaX)>Math.abs(v.deltaY)?v.deltaX:v.deltaY;if(!N)return;const P=Math.min(Math.max(0,k.scrollLeft+N),T);P!==k.scrollLeft&&(v.preventDefault(),k.scrollLeft=P,h())},C=()=>{e.nextTick(()=>{var J,M;const v=a.tabsViewportRef.value,k=_(a.activeTabId.value);if(!v||k<0){h();return}const{offsets:T,widths:N}=a.virtualMetrics.value,P=v.clientWidth,p=(J=T[k])!=null?J:0,S=(M=N[k])!=null?M:a.estimatedActiveWidth.value,w=p+S,E=Math.min(24,Math.max(8,P/12)),O=v.scrollLeft+E,G=v.scrollLeft+P-E,B=Math.max(0,v.scrollWidth-v.clientWidth);let $;S+E*2>=P?p<v.scrollLeft?$=p:w>v.scrollLeft+P&&($=w-P):p<O?$=p-E:w>G&&($=w-P+E),$!==void 0&&v.scrollTo({left:Math.min(Math.max(0,$),B),behavior:"smooth"}),h()})};return e.watch([a.activeTabId,a.tabs],()=>C(),{flush:"post"}),e.onMounted(()=>{let v=-1;c=new ResizeObserver(()=>{const k=a.tabsViewportRef.value;if(!k)return;a.scrollLeft.value=k.scrollLeft,h();const T=k.clientWidth;T!==v&&(v=T,a.viewportWidth.value=T,C())}),a.tabsViewportRef.value&&c.observe(a.tabsViewportRef.value),a.tabsNavRef.value&&c.observe(a.tabsNavRef.value),C()}),e.onBeforeUnmount(()=>{c==null||c.disconnect(),m&&window.cancelAnimationFrame(m)}),{canScrollLeft:l,canScrollRight:s,handleWheel:A,isOverflowing:o,scrollTabs:g,scrollActiveTabIntoView:C,updateScrollState:h}}const cr=-12,dr=0,ur=24,da=60,ua={enabled:!0,threshold:30,overscan:6,estimatedWidth:148,minWidth:72,maxWidth:260},xt=(a,o)=>typeof a=="number"&&Number.isFinite(a)&&a>0?a:o,fr=(a,o)=>typeof a=="number"&&Number.isFinite(a)&&a>=0?Math.floor(a):o,fa=(a,o,l)=>{let s=0,c=a.length-1,m=a.length-1;for(;s<=c;){const _=Math.floor((s+c)/2);a[_]+o[_]>=l?(m=_,c=_-1):s=_+1}return m},pa=(a,o)=>{let l=0,s=a.length-1,c=0;for(;l<=s;){const m=Math.floor((l+s)/2);a[m]<=o?(c=m,l=m+1):s=m-1}return c};function ha(...a){return a.reduce((o,l)=>{var s;return l===void 0?o:typeof l=="boolean"?{...o,enabled:l}:{enabled:(s=l.enabled)!=null?s:o.enabled,threshold:fr(l.threshold,o.threshold),overscan:fr(l.overscan,o.overscan),estimatedWidth:xt(l.estimatedWidth,o.estimatedWidth),minWidth:xt(l.minWidth,o.minWidth),maxWidth:xt(l.maxWidth,o.maxWidth)}},ua)}function ma(a){let o,l=0;const s=new Map,c=e.reactive({}),m=e.computed(()=>{const p=ha(...a.virtualOptions.value);return{...p,maxWidth:Math.max(p.minWidth,p.maxWidth)}}),_=e.computed(()=>m.value.enabled&&a.tabs.value.length>=m.value.threshold),h=p=>{var $;const S=m.value,w=($=a.maxTitleLength.value)!=null?$:28,E=p.title||"未命名",O=Math.min(E.length,w),G=a.showIcon.value&&(p.icon||a.defaultIcon.value)?20:0,B=p.pinned?17:0;return Math.min(S.maxWidth,Math.max(S.minWidth,O*14+G+B+da))},g=p=>c[p.id]||h(p),A=e.computed(()=>{const p=a.tabs.value,S=[],w=[];let E=dr;p.forEach((G,B)=>{S[B]=E;const $=g(G);w[B]=$,E+=$+cr});const O=p.length>0?E-cr+ur:dr+ur;return{offsets:S,widths:w,totalWidth:Math.max(O,a.viewportWidth.value)}}),C=e.computed(()=>A.value.totalWidth),v=e.computed(()=>{const p=a.tabs.value;if(!p.length)return[];if(!_.value)return p.map((J,M)=>({tab:J,offset:A.value.offsets[M]}));const{offsets:S,widths:w}=A.value,E=m.value,O=Math.max(0,a.scrollLeft.value-E.estimatedWidth*E.overscan),G=a.scrollLeft.value+a.viewportWidth.value+E.estimatedWidth*E.overscan;let B=fa(S,w,O),$=pa(S,G);return B=Math.max(0,B-E.overscan),$=Math.min(p.length-1,$+E.overscan),p.slice(B,$+1).map((J,M)=>{const F=B+M;return{tab:J,offset:S[F]}})}),k=(p,S)=>{const w=S.offsetWidth||S.getBoundingClientRect().width;w>0&&Math.abs((c[p]||0)-w)>.5&&(c[p]=w)},T=()=>{l||(l=window.requestAnimationFrame(()=>{var p;l=0,s.forEach((S,w)=>k(w,S)),(p=a.onMeasure)==null||p.call(a)}))},N=p=>{if(p instanceof HTMLElement)return p;if(p&&"$el"in p&&p.$el instanceof HTMLElement)return p.$el},P=(p,S)=>{const w=s.get(p),E=N(S);if(w&&w===E){k(p,w);return}w&&(o==null||o.unobserve(w),s.delete(p)),E&&(s.set(p,E),o==null||o.observe(E),k(p,E))};return e.watch(a.tabs,p=>{var S;const w=new Set(p.map(E=>E.id));Object.keys(c).forEach(E=>{w.has(E)||delete c[E]}),Array.from(s.entries()).forEach(([E,O])=>{w.has(E)||(o==null||o.unobserve(O),s.delete(E))}),(S=a.onMeasure)==null||S.call(a)},{flush:"post"}),e.watch(v,()=>e.nextTick(T),{flush:"post"}),e.onMounted(()=>{o=new ResizeObserver(p=>{var S;p.forEach(w=>{var E,O;const G=w.target instanceof HTMLElement?w.target:void 0,B=G==null?void 0:G.dataset.tabId;if(!B)return;const $=((O=(E=w.borderBoxSize)==null?void 0:E[0])==null?void 0:O.inlineSize)||w.contentRect.width;$>0&&Math.abs((c[B]||0)-$)>.5&&(c[B]=$)}),(S=a.onMeasure)==null||S.call(a)}),s.forEach(p=>o==null?void 0:o.observe(p)),T()}),e.onBeforeUnmount(()=>{o==null||o.disconnect(),l&&window.cancelAnimationFrame(l)}),{isVirtualEnabled:_,resolvedVirtualOptions:m,setTabItemRef:P,virtualMetrics:A,virtualTabs:v,virtualTotalWidth:C}}const ga={class:"tabs-scroll"},va=["disabled"],ba=["disabled"],_a=$e(e.defineComponent({__name:"tabs-nav",props:{tabs:{},activeTabId:{},model:{},type:{},showIcon:{type:Boolean},defaultIcon:{},titleMaxLength:{},draggable:{type:Boolean},virtualOptions:{}},emits:["select","close","contextmenu"],setup(a,{emit:o}){const l=a,s=o,c=e.ref(),m=e.ref(),_=e.ref(0),h=e.ref(0),g=e.computed(()=>l.tabs),A=e.computed(()=>l.activeTabId),C=e.computed(()=>l.virtualOptions),v=e.computed(()=>l.titleMaxLength),k=e.computed(()=>l.showIcon),T=e.computed(()=>l.defaultIcon),N=e.ref(!1);let P=()=>{},p;const S=()=>{N.value=!!(p!=null&&p.matches)};e.onMounted(()=>{var U;typeof window=="undefined"||typeof window.matchMedia!="function"||(p=window.matchMedia("(pointer: coarse)"),S(),(U=p.addEventListener)==null||U.call(p,"change",S))}),e.onBeforeUnmount(()=>{var U;(U=p==null?void 0:p.removeEventListener)==null||U.call(p,"change",S)});const{resolvedVirtualOptions:w,setTabItemRef:E,virtualMetrics:O,virtualTabs:G,virtualTotalWidth:B}=ma({tabs:g,scrollLeft:h,viewportWidth:_,virtualOptions:C,maxTitleLength:v,showIcon:k,defaultIcon:T,onMeasure:()=>P()}),{canScrollLeft:$,canScrollRight:J,handleWheel:M,isOverflowing:F,scrollTabs:R,updateScrollState:L}=ca({tabs:g,activeTabId:A,tabsViewportRef:c,tabsNavRef:m,viewportWidth:_,scrollLeft:h,virtualMetrics:O,estimatedActiveWidth:e.computed(()=>w.value.estimatedWidth)});P=L;const y=e.computed(()=>{if(w.value.enabled&&!(G.value.length>=g.value.length))return{width:`${B.value}px`}}),te=U=>l.draggable&&!N.value&&!U.first&&U.draggable,{draggingTabId:Re,dropPosition:ct,dropTargetTabId:qe,handleDragEnd:kt,handleDragLeave:dt,handleDragOver:ut,handleDragStart:ft,handleDrop:x}=sa({model:l.model,isTabDraggable:te});return(U,W)=>(e.openBlock(),e.createElementBlock("div",ga,[e.unref(F)?(e.openBlock(),e.createElementBlock("button",{key:0,class:"tabs-scroll__button",type:"button","aria-label":"向左滚动标签页",disabled:!e.unref($),onClick:W[0]||(W[0]=H=>e.unref(R)("left"))},[e.createVNode(ar,{size:"16"})],8,va)):e.createCommentVNode("v-if",!0),e.createElementVNode("div",{ref_key:"tabsViewportRef",ref:c,class:"tabs-scroll__viewport",onScroll:W[3]||(W[3]=(...H)=>e.unref(L)&&e.unref(L)(...H)),onWheel:W[4]||(W[4]=(...H)=>e.unref(M)&&e.unref(M)(...H))},[e.createElementVNode("div",{ref_key:"tabsNavRef",ref:m,class:e.normalizeClass(["tabs-nav",`tabs-nav--${a.type}`]),style:e.normalizeStyle(y.value)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(G),H=>(e.openBlock(),e.createBlock(la,{key:H.tab.id,ref_for:!0,ref:ce=>e.unref(E)(H.tab.id,ce),"data-tab-id":H.tab.id,class:e.normalizeClass(["tabs-nav__virtual-item",{"is-dragging":e.unref(Re)===H.tab.id,"is-drop-target":e.unref(qe)===H.tab.id,"is-drop-before":e.unref(qe)===H.tab.id&&e.unref(ct)==="before","is-drop-after":e.unref(qe)===H.tab.id&&e.unref(ct)==="after"}]),style:e.normalizeStyle({transform:`translateX(${H.offset}px)`}),tab:H.tab,"is-active":H.tab.id===a.activeTabId,"show-icon":a.showIcon,"default-icon":a.defaultIcon,"max-title-length":a.titleMaxLength,draggable:te(H.tab),onSelect:W[1]||(W[1]=ce=>s("select",ce)),onClose:W[2]||(W[2]=ce=>s("close",ce)),onContextmenu:ce=>s("contextmenu",ce,H.tab),onDragstart:e.unref(ft),onDragover:e.unref(ut),onDragleave:e.unref(dt),onDrop:e.unref(x),onDragend:e.unref(kt)},null,8,["data-tab-id","class","style","tab","is-active","show-icon","default-icon","max-title-length","draggable","onContextmenu","onDragstart","onDragover","onDragleave","onDrop","onDragend"]))),128))],6)],544),e.unref(F)?(e.openBlock(),e.createElementBlock("button",{key:1,class:"tabs-scroll__button",type:"button","aria-label":"向右滚动标签页",disabled:!e.unref(J),onClick:W[5]||(W[5]=H=>e.unref(R)("right"))},[e.createVNode(or,{size:"16"})],8,ba)):e.createCommentVNode("v-if",!0)]))}}),[["__scopeId","data-v-64b5fec1"]]);function ya(a){const o=e.reactive({visible:!1,x:0,y:0,tab:null}),l=(h,g)=>{o.x=h.clientX,o.y=h.clientY,o.tab=g,o.visible=!0},s=()=>{o.visible=!1,o.tab=null},c=h=>{h.catch(g=>console.warn("[shell-tabs] 右键动作未生效",g))};return{closeContextMenu:s,contextAction:h=>{const g=o.tab;if(s(),!!g)switch(h){case"detach":c(a.detach(g.id));break;case"refresh":c(a.refresh(g.id));break;case"toggle-pinned":c(a.togglePin(g));break;case"close-left":c(a.closeLeft(g.id));break;case"close-right":c(a.closeRight(g.id));break;case"close-other":c(a.closeOthers(g.id));break;case"close-all":c(a.closeAll());break;case"refresh-all":c(a.refreshAll());break}},contextMenu:o,handleDetachedError:h=>{a.reportDetachedError(h)},openContextMenu:l}}const Ea={class:"tabs shell-tabs-kit"},Sa=$e(e.defineComponent({__name:"index",props:{adapter:{},port:{},type:{default:"text"},showIcon:{type:Boolean,default:void 0},defaultIcon:{},titleMaxLength:{},draggable:{type:Boolean,default:void 0},virtual:{type:[Boolean,Object],default:void 0},hideFirst:{type:Boolean,default:!1}},setup(a){const o=a,l=rr({adapter:o.adapter,port:o.port,options:()=>({type:o.type,showIcon:o.showIcon,defaultIcon:o.defaultIcon,titleMaxLength:o.titleMaxLength,draggable:o.draggable,virtual:o.virtual,hideFirst:o.hideFirst})}),s=l.tabs,c=l.activeId,m=l.canDrag,_=l.detachedTab,h=e.computed(()=>l.options.value.showIcon!==!1),g=e.computed(()=>l.options.value.defaultIcon),A=e.computed(()=>l.options.value.titleMaxLength),C=e.computed(()=>[l.options.value.virtual]),v=E=>{l.activate(E).catch(O=>console.warn("[shell-tabs] 切换页签未生效",O))},k=E=>{l.close(E,"self").catch(O=>console.warn("[shell-tabs] 关闭页签未生效",O))},T=()=>{l.closeDetached().catch(E=>l.reportDetachedError(E))},{closeContextMenu:N,contextAction:P,contextMenu:p,handleDetachedError:S,openContextMenu:w}=ya(l);return(E,O)=>(e.openBlock(),e.createElementBlock("div",Ea,[e.createVNode(_a,{tabs:e.unref(s),"active-tab-id":e.unref(c),model:e.unref(l),type:o.type,"show-icon":h.value,"default-icon":g.value,"title-max-length":A.value,draggable:e.unref(m),"virtual-options":C.value,onSelect:v,onClose:k,onContextmenu:e.unref(w)},null,8,["tabs","active-tab-id","model","type","show-icon","default-icon","title-max-length","draggable","virtual-options","onContextmenu"]),e.createVNode(ea,{visible:e.unref(p).visible,x:e.unref(p).x,y:e.unref(p).y,tab:e.unref(p).tab,onClose:e.unref(N),onAction:e.unref(P)},null,8,["visible","x","y","tab","onClose","onAction"]),e.createCommentVNode(`
      detach 出来的容器由引擎注入：qiankun 塞它的 detached-container，wujie 不塞就什么都不渲染。
      壳包不 import 任何引擎组件 —— 这条是「依赖不倒挂」的底线。
    `),e.renderSlot(E.$slots,"detached",{tab:e.unref(_),close:T,onError:e.unref(S)},void 0,!0)]))}}),[["__scopeId","data-v-17f434ed"]]);return n.AUTH_CODES=D,n.AUTH_CODE_TABLE=X,n.SHELL_CODES=u,n.SHELL_CODE_TABLE=I,n.SHELL_SETTINGS_STORAGE_KEY=Zt,n.SHELL_SKIN_STORAGE_KEY=be,n.SKIN_CONTRACT_VERSION=pe,n.SKIN_NEGOTIATION_CODES=fe,n.ShellHeader=Fn,n.ShellHost=mn,n.ShellSettings=Ie,n.ShellTabBar=Cn,n.ShellTabsView=Sa,n.ShellToolbar=tr,n.createShellAdapter=z,n.createShellAuthController=ae,n.createShellSettings=er,n.createShellSkinRegistry=Xt,n.negotiateSkinManifest=Ue,n.pickSkinEntry=_e,n.readStoredSkinKey=Ee,n.resolveCapabilities=b,n.useShellTabsModel=rr,n.writeStoredSkinKey=he,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),n})({},t.dep0);return r}Xi.libReady("libs-shell-tabs-vue3",{createTabsAdapter:qi});
