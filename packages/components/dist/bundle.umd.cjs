(function(k,N){typeof exports=="object"&&typeof module<"u"?N(exports,require("react"),require("lucide-react"),require("@remix-run/react"),require("@react-input/mask"),require("framer-motion")):typeof define=="function"&&define.amd?define(["exports","react","lucide-react","@remix-run/react","@react-input/mask","framer-motion"],N):(k=typeof globalThis<"u"?globalThis:k||self,N(k["@arkyn/components"]={},k.require$$0,k.lucideReact,k.react,k.mask,k.framerMotion))})(this,function(k,N,Q,ye,qe,xe){"use strict";var be={exports:{}},ue={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function er(){if(we)return ue;we=1;var n=N,s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(u,f,m){var v,y={},S=null,C=null;m!==void 0&&(S=""+m),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(C=f.ref);for(v in f)a.call(f,v)&&!l.hasOwnProperty(v)&&(y[v]=f[v]);if(u&&u.defaultProps)for(v in f=u.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:s,type:u,key:S,ref:C,props:y,_owner:c.current}}return ue.Fragment=t,ue.jsx=h,ue.jsxs=h,ue}var le={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function rr(){return Te||(Te=1,process.env.NODE_ENV!=="production"&&function(){var n=N,s=Symbol.for("react.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),T=Symbol.iterator,O="@@iterator";function F(e){if(e===null||typeof e!="object")return null;var r=T&&e[T]||e[O];return typeof r=="function"?r:null}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];E("error",e,i)}}function E(e,r,i){{var d=b.ReactDebugCurrentFrame,_=d.getStackAddendum();_!==""&&(r+="%s",i=i.concat([_]));var R=i.map(function(x){return String(x)});R.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,R)}}var $=!1,V=!1,z=!1,D=!1,Y=!1,L;L=Symbol.for("react.module.reference");function A(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===l||Y||e===c||e===m||e===v||D||e===C||$||V||z||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===f||e.$$typeof===L||e.getModuleId!==void 0))}function I(e,r,i){var d=e.displayName;if(d)return d;var _=r.displayName||r.name||"";return _!==""?i+"("+_+")":i}function W(e){return e.displayName||"Context"}function j(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case t:return"Portal";case l:return"Profiler";case c:return"StrictMode";case m:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u:var r=e;return W(r)+".Consumer";case h:var i=e;return W(i._context)+".Provider";case f:return I(e,e.render,"ForwardRef");case y:var d=e.displayName||null;return d!==null?d:j(e.type)||"Memo";case S:{var _=e,R=_._payload,x=_._init;try{return j(x(R))}catch{return null}}}return null}var U=Object.assign,G=0,H,ne,te,se,ie,oe,K;function X(){}X.__reactDisabledLog=!0;function Z(){{if(G===0){H=console.log,ne=console.info,te=console.warn,se=console.error,ie=console.group,oe=console.groupCollapsed,K=console.groupEnd;var e={configurable:!0,enumerable:!0,value:X,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}G++}}function De(){{if(G--,G===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:U({},e,{value:H}),info:U({},e,{value:ne}),warn:U({},e,{value:te}),error:U({},e,{value:se}),group:U({},e,{value:ie}),groupCollapsed:U({},e,{value:oe}),groupEnd:U({},e,{value:K})})}G<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Se=b.ReactCurrentDispatcher,Re;function me(e,r,i){{if(Re===void 0)try{throw Error()}catch(_){var d=_.stack.trim().match(/\n( *(at )?)/);Re=d&&d[1]||""}return`
`+Re+e}}var Ce=!1,ve;{var zr=typeof WeakMap=="function"?WeakMap:Map;ve=new zr}function We(e,r){if(!e||Ce)return"";{var i=ve.get(e);if(i!==void 0)return i}var d;Ce=!0;var _=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var R;R=Se.current,Se.current=null,Z();try{if(r){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(M){d=M}Reflect.construct(e,[],x)}else{try{x.call()}catch(M){d=M}e.call(x.prototype)}}else{try{throw Error()}catch(M){d=M}e()}}catch(M){if(M&&d&&typeof M.stack=="string"){for(var p=M.stack.split(`
`),B=d.stack.split(`
`),P=p.length-1,w=B.length-1;P>=1&&w>=0&&p[P]!==B[w];)w--;for(;P>=1&&w>=0;P--,w--)if(p[P]!==B[w]){if(P!==1||w!==1)do if(P--,w--,w<0||p[P]!==B[w]){var J=`
`+p[P].replace(" at new "," at ");return e.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",e.displayName)),typeof e=="function"&&ve.set(e,J),J}while(P>=1&&w>=0);break}}}finally{Ce=!1,Se.current=R,De(),Error.prepareStackTrace=_}var ce=e?e.displayName||e.name:"",ee=ce?me(ce):"";return typeof e=="function"&&ve.set(e,ee),ee}function Dr(e,r,i){return We(e,!1)}function Wr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ge(e,r,i){if(e==null)return"";if(typeof e=="function")return We(e,Wr(e));if(typeof e=="string")return me(e);switch(e){case m:return me("Suspense");case v:return me("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Dr(e.render);case y:return ge(e.type,r,i);case S:{var d=e,_=d._payload,R=d._init;try{return ge(R(_),r,i)}catch{}}}return""}var fe=Object.prototype.hasOwnProperty,Ae={},Be=b.ReactDebugCurrentFrame;function pe(e){if(e){var r=e._owner,i=ge(e.type,e._source,r?r.type:null);Be.setExtraStackFrame(i)}else Be.setExtraStackFrame(null)}function Ar(e,r,i,d,_){{var R=Function.call.bind(fe);for(var x in e)if(R(e,x)){var p=void 0;try{if(typeof e[x]!="function"){var B=Error((d||"React class")+": "+i+" type `"+x+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[x]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw B.name="Invariant Violation",B}p=e[x](r,x,d,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(P){p=P}p&&!(p instanceof Error)&&(pe(_),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",i,x,typeof p),pe(null)),p instanceof Error&&!(p.message in Ae)&&(Ae[p.message]=!0,pe(_),g("Failed %s type: %s",i,p.message),pe(null))}}}var Br=Array.isArray;function Ee(e){return Br(e)}function Vr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function Yr(e){try{return Ve(e),!1}catch{return!0}}function Ve(e){return""+e}function Ye(e){if(Yr(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Vr(e)),Ve(e)}var de=b.ReactCurrentOwner,Mr={key:!0,ref:!0,__self:!0,__source:!0},Me,Ue,je;je={};function Ur(e){if(fe.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Kr(e){if(fe.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Jr(e,r){if(typeof e.ref=="string"&&de.current&&r&&de.current.stateNode!==r){var i=j(de.current.type);je[i]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',j(de.current.type),e.ref),je[i]=!0)}}function Gr(e,r){{var i=function(){Me||(Me=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function Xr(e,r){{var i=function(){Ue||(Ue=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var Hr=function(e,r,i,d,_,R,x){var p={$$typeof:s,type:e,key:r,ref:i,props:x,_owner:R};return p._store={},Object.defineProperty(p._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(p,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(p,"_source",{configurable:!1,enumerable:!1,writable:!1,value:_}),Object.freeze&&(Object.freeze(p.props),Object.freeze(p)),p};function Zr(e,r,i,d,_){{var R,x={},p=null,B=null;i!==void 0&&(Ye(i),p=""+i),Kr(r)&&(Ye(r.key),p=""+r.key),Ur(r)&&(B=r.ref,Jr(r,_));for(R in r)fe.call(r,R)&&!Mr.hasOwnProperty(R)&&(x[R]=r[R]);if(e&&e.defaultProps){var P=e.defaultProps;for(R in P)x[R]===void 0&&(x[R]=P[R])}if(p||B){var w=typeof e=="function"?e.displayName||e.name||"Unknown":e;p&&Gr(x,w),B&&Xr(x,w)}return Hr(e,p,B,_,d,de.current,x)}}var ke=b.ReactCurrentOwner,Ke=b.ReactDebugCurrentFrame;function ae(e){if(e){var r=e._owner,i=ge(e.type,e._source,r?r.type:null);Ke.setExtraStackFrame(i)}else Ke.setExtraStackFrame(null)}var Ne;Ne=!1;function Ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===s}function Je(){{if(ke.current){var e=j(ke.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Qr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),i=e.lineNumber;return`

Check your code at `+r+":"+i+"."}return""}}var Ge={};function qr(e){{var r=Je();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function Xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=qr(r);if(Ge[i])return;Ge[i]=!0;var d="";e&&e._owner&&e._owner!==ke.current&&(d=" It was passed a child from "+j(e._owner.type)+"."),ae(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,d),ae(null)}}function He(e,r){{if(typeof e!="object")return;if(Ee(e))for(var i=0;i<e.length;i++){var d=e[i];Ie(d)&&Xe(d,r)}else if(Ie(e))e._store&&(e._store.validated=!0);else if(e){var _=F(e);if(typeof _=="function"&&_!==e.entries)for(var R=_.call(e),x;!(x=R.next()).done;)Ie(x.value)&&Xe(x.value,r)}}}function en(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===y))i=r.propTypes;else return;if(i){var d=j(r);Ar(i,e.props,"prop",d,e)}else if(r.PropTypes!==void 0&&!Ne){Ne=!0;var _=j(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",_||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function rn(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var d=r[i];if(d!=="children"&&d!=="key"){ae(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),ae(null);break}}e.ref!==null&&(ae(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),ae(null))}}var Ze={};function Qe(e,r,i,d,_,R){{var x=A(e);if(!x){var p="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(p+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var B=Qr(_);B?p+=B:p+=Je();var P;e===null?P="null":Ee(e)?P="array":e!==void 0&&e.$$typeof===s?(P="<"+(j(e.type)||"Unknown")+" />",p=" Did you accidentally export a JSX literal instead of a component?"):P=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",P,p)}var w=Zr(e,r,i,_,R);if(w==null)return w;if(x){var J=r.children;if(J!==void 0)if(d)if(Ee(J)){for(var ce=0;ce<J.length;ce++)He(J[ce],e);Object.freeze&&Object.freeze(J)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else He(J,e)}if(fe.call(r,"key")){var ee=j(e),M=Object.keys(r).filter(function(cn){return cn!=="key"}),Pe=M.length>0?"{key: someKey, "+M.join(": ..., ")+": ...}":"{key: someKey}";if(!Ze[ee+Pe]){var an=M.length>0?"{"+M.join(": ..., ")+": ...}":"{}";g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Pe,ee,an,ee),Ze[ee+Pe]=!0}}return e===a?rn(w):en(w),w}}function nn(e,r,i){return Qe(e,r,i,!0)}function tn(e,r,i){return Qe(e,r,i,!1)}var sn=tn,on=nn;le.Fragment=a,le.jsx=sn,le.jsxs=on}()),le}process.env.NODE_ENV==="production"?be.exports=er():be.exports=rr();var o=be.exports;function he(n,s){return s?o.jsx(s,{size:n,strokeWidth:2.5}):o.jsx(o.Fragment,{})}function nr(n){const{variant:s="ghost",scheme:t="primary",size:a="md",leftIcon:c,rightIcon:l,className:h="",children:u,...f}=n,v={md:12,lg:14}[a];return{className:`arkyn_badge ${s} ${t} ${a} ${h}`.trim(),children:u,leftIcon:he(v,c),rightIcon:he(v,l),...f}}function tr(n){const{leftIcon:s,children:t,rightIcon:a,...c}=nr(n);return o.jsxs("div",{...c,children:[s,t,a]})}function sr(n){const{className:s,orientation:t="horizontal",...a}=n,c=`arkyn_divider ${t} ${s}`;return o.jsx("div",{className:c,...a})}function ir(n){const{isLoading:s=!1,scheme:t="primary",variant:a="solid",loadingText:c,size:l="md",leftIcon:h,rightIcon:u,disabled:f,className:m="",children:v,...y}=n,C={xs:12,sm:16,md:20,lg:24}[l];return{className:`arkyn_button loading_text_${!!c} ${a} ${t} ${l} loading_${s} ${m}`.trim(),loadingText:c,children:v,iconSize:C,disabled:f||s,leftIcon:he(C,h),rightIcon:he(C,u),...y}}function or(n){const{leftIcon:s,rightIcon:t,iconSize:a,children:c,loadingText:l,...h}=ir(n);return o.jsxs("button",{...h,children:[o.jsxs("div",{className:"spinner",children:[o.jsx(Q.Loader2,{size:a,strokeWidth:2.5}),l&&l]}),o.jsxs("div",{className:"content",children:[s,c,t]})]})}const Oe=N.createContext({});function ar({children:n,...s}){var u,f;const t=ye.useActionData(),a=N.useRef(null),c=((u=a.current)==null?void 0:u.name)||"",l=((f=t==null?void 0:t.fieldErrors)==null?void 0:f[c])||null,h=N.useId();return o.jsx(Oe.Provider,{value:{error:l,id:h,inputRef:a},children:o.jsx("section",{className:"arkyn_form_controller",...s,children:n})})}function re(){return N.useContext(Oe)}function cr(){const{error:n}=re();return n?o.jsx("strong",{className:"arkyn_form_error",children:n}):o.jsx(o.Fragment,{})}function ur(n){const{showAsterisk:s=!1,className:t="",...a}=n;return{className:`arkyn_form_label ${s?"show-asterisk":""} ${t}`.trim(),...a}}function lr(n){const{id:s}=re();return o.jsx("label",{...ur(n),htmlFor:s})}const Fe={xs:12,sm:16,md:20,lg:24};function fr(n){const{isLoading:s=!1,scheme:t="primary",variant:a="solid",size:c="md",icon:l,disabled:h,className:u="",...f}=n,m=`arkyn_icon_button ${a} ${t} ${c} loading_${s} ${u}`;return o.jsxs("button",{disabled:h||s,className:m.trim(),...f,children:[o.jsx("div",{className:"spinner",children:o.jsx(Q.Loader2,{size:Fe[c],strokeWidth:2.5})}),o.jsx("div",{className:"content "+c,children:o.jsx(l,{size:Fe[c],strokeWidth:2.5})})]})}function q(n,s,t){if(!n)return o.jsx(o.Fragment,{});if(typeof n=="string")return o.jsx("p",{className:t,children:n});const a=n;return o.jsx("p",{className:t,children:o.jsx(a,{color:"var(--secondary-600)",size:s,strokeWidth:2.5})})}function dr(n,s){const{isLoading:t,isError:a,size:c="md",className:l="",variant:h="solid",prefix:u,sufix:f,leftIcon:m,rightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,onChange:b,...g}=n,E=v?"right":"left",L=`arkyn_input ${u?"hasPrefix":""} ${f?"hasSufix":""} ${h} ${c} ${y||S||t?"opacity":""} ${a?"errored":""} ${s?"focused":""} ${l}`,I={md:14,lg:16}[c];return{isLoading:t,className:L,prefix:q(u,I,"prefix"),sufix:q(f,I,"sufix"),LeftIcon:m,RightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,onChange:b,loadingPosition:E,iconSize:I,Spinner:o.jsx(Q.Loader2,{className:"spinner",size:I,strokeWidth:2.5}),...g}}function _e(n){return n&&n.replace(/[^0-9]/g,"")}function hr(n,s){let t="",a=0;return Array.from(n).forEach((c,l)=>{s[l+a].match(/[0-9]/)||(t+=s[l+a],a++),t+=c}),t}function mr(n){return n.length>11?"CNPJ":"CPF"}const Le={CPF:"999.999.999-999",CNPJ:"99.999.999/9999-99"},vr=_e(Le.CNPJ).length;function gr(n){const[s,t]=N.useState(!1),[a,c]=N.useState(_e((n==null?void 0:n.defaultValue)||"")),l=N.useRef(null),{inputRef:h,id:u,error:f}=re(),m=h||l,v=n.isError||!!f,{disabled:y,title:S,style:C,className:T,prefix:O,sufix:F,iconSize:b,loadingPosition:g,isLoading:E,LeftIcon:$,readOnly:V,onFocus:z,onBlur:D,RightIcon:Y,Spinner:L,onChange:A,value:I,defaultValue:W="",...j}=dr({...n,id:u,isError:v},s),U=$&&!E,G=Y&&!E,H=g==="left"&&E,ne=g==="right"&&E;function te(){y||!(m!=null&&m.current)||(t(!0),m.current.focus())}function se(K){let X=_e(K.target.value);const Z=mr(X);X.length>vr||(X=hr(X,Le[Z]),K.target.value=X,c(X),A&&A(K))}function ie(K){t(!0),z&&z(K)}function oe(K){t(!1),D&&D(K)}return o.jsxs("section",{title:S,style:C,onClick:te,className:T,children:[O,H&&L,U&&o.jsx($,{size:b,strokeWidth:2.5}),o.jsx("input",{disabled:y||E,readOnly:V,ref:m,value:I||a,onFocus:ie,onChange:se,onBlur:oe,...j}),G&&o.jsx(Y,{size:b,strokeWidth:2.5}),ne&&L,F]})}function pr(n,s){const{isLoading:t,isError:a,size:c="md",className:l="",variant:h="solid",prefix:u,sufix:f,leftIcon:m,rightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,showCents:b=!1,max:g=1e9,onChange:E,...$}=n,V=v?"right":"left",I=`arkyn_input ${u?"hasPrefix":""} ${f?"hasSufix":""} ${h} ${c} ${y||S||t?"opacity":""} ${a?"errored":""} ${s?"focused":""} ${l}`,j={md:14,lg:16}[c];return{isLoading:t,className:I,prefix:q(u,j,"prefix"),sufix:q(f,j,"sufix"),LeftIcon:m,RightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,max:g,onChange:E,showCents:b,loadingPosition:V,iconSize:j,Spinner:o.jsx(Q.Loader2,{className:"spinner",size:j,strokeWidth:2.5}),...$}}const yr=/^[1-9]{1}$/,xr=/^[0-9]{1}$/,$e=8;function br(n,s){if(n===0)return"";const t=(n/100).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});return s?t:t.replace("R$","").trim()}function _r(n){const{currencyValue:s,event:t,max:a,setCurrencyValue:c}=n,{key:l,keyCode:h}=t;if(s===0&&!yr.test(l)||s!==0&&!xr.test(l)&&h!==$e)return;const u=s.toString();let f;if(h!==$e){const m=s===0?l:`${u}${l}`;f=Number.parseInt(m,10)}else{const m=u.slice(0,-1);f=m===""?0:Number.parseInt(m,10)}f>Number(a)||c(f)}function Sr(n){const[s,t]=N.useState(!1),[a,c]=N.useState(n.defaultValue||0),l=N.useRef(null),{inputRef:h,id:u,error:f}=re(),m=h||l,v=n.isError||!!f,{disabled:y,title:S,style:C,className:T,prefix:O,sufix:F,iconSize:b,loadingPosition:g,isLoading:E,LeftIcon:$,readOnly:V,onFocus:z,onBlur:D,RightIcon:Y,Spinner:L,value:A,max:I,onKeyDown:W,onChange:j,showCents:U,...G}=pr({...n,id:u,isError:v},s),H=$&&!E,ne=Y&&!E,te=g==="left"&&E,se=g==="right"&&E;function ie(){y||!(m!=null&&m.current)||(t(!0),m.current.focus())}function oe(Z){_r({currencyValue:a,event:Z,max:I,setCurrencyValue:c}),j&&j(a),W&&W(Z)}function K(Z){t(!0),z&&z(Z)}function X(Z){t(!1),D&&D(Z)}return o.jsxs("section",{title:S,style:C,onClick:ie,className:T,children:[O,te&&L,H&&o.jsx($,{size:b,strokeWidth:2.5}),o.jsx("input",{value:br(A||a,U),onKeyDown:oe,disabled:y||E,readOnly:V,ref:m,onFocus:K,onChange:()=>{},onBlur:X,...G}),se&&L,ne&&o.jsx(Y,{size:b,strokeWidth:2.5}),F]})}function Rr(n,s){const{isLoading:t,isError:a,size:c="md",className:l="",variant:h="solid",prefix:u,sufix:f,leftIcon:m,rightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,onChange:b,showMask:g=!0,...E}=n,$=v?"right":"left",A=`arkyn_input ${u?"hasPrefix":""} ${f?"hasSufix":""} ${h} ${c} ${y||S||t?"opacity":""} ${a?"errored":""} ${s?"focused":""} ${l}`,W={md:14,lg:16}[c];return{isLoading:t,className:A,prefix:q(u,W,"prefix"),sufix:q(f,W,"sufix"),LeftIcon:m,RightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,onChange:b,loadingPosition:$,iconSize:W,showMask:g,Spinner:o.jsx(Q.Loader2,{className:"spinner",size:W,strokeWidth:2.5}),...E}}function Cr(n){const[s,t]=N.useState(!1),a=N.useRef(null),{inputRef:c,id:l,error:h}=re(),u=c||a,f=n.isError||!!h,{disabled:m,title:v,style:y,className:S,prefix:C,sufix:T,iconSize:O,loadingPosition:F,isLoading:b,LeftIcon:g,readOnly:E,onFocus:$,onBlur:V,RightIcon:z,Spinner:D,...Y}=Rr({...n,id:l,isError:f},s),L=g&&!b,A=z&&!b,I=F==="left"&&b,W=F==="right"&&b;function j(){m||!(u!=null&&u.current)||(t(!0),u.current.focus())}return o.jsxs("section",{title:v,style:y,onClick:j,className:S,children:[C,I&&D,L&&o.jsx(g,{size:O,strokeWidth:2.5}),o.jsx(qe.InputMask,{}),A&&o.jsx(z,{size:O,strokeWidth:2.5}),W&&D,T]})}function Er(n,s){const{isLoading:t,isError:a,size:c="md",className:l="",variant:h="solid",prefix:u,sufix:f,leftIcon:m,rightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,onChange:b,...g}=n,E=v?"right":"left",L=`arkyn_input ${u?"hasPrefix":""} ${f?"hasSufix":""} ${h} ${c} ${y||S||t?"opacity":""} ${a?"errored":""} ${s?"focused":""} ${l}`,I={md:14,lg:16}[c];return{isLoading:t,className:L,prefix:q(u,I,"prefix"),sufix:q(f,I,"sufix"),LeftIcon:m,RightIcon:v,disabled:y,readOnly:S,onFocus:C,onBlur:T,title:O,style:F,onChange:b,loadingPosition:E,iconSize:I,Spinner:o.jsx(Q.Loader2,{className:"spinner",size:I,strokeWidth:2.5}),...g}}function jr(n){const[s,t]=N.useState(!1),a=N.useRef(null),{inputRef:c,id:l,error:h}=re(),u=c||a,f=n.isError||!!h,{disabled:m,title:v,style:y,className:S,prefix:C,sufix:T,iconSize:O,loadingPosition:F,isLoading:b,LeftIcon:g,readOnly:E,onFocus:$,onBlur:V,RightIcon:z,Spinner:D,...Y}=Er({...n,id:l,isError:f},s),L=g&&!b,A=z&&!b,I=F==="left"&&b,W=F==="right"&&b;function j(){m||!(u!=null&&u.current)||(t(!0),u.current.focus())}function U(H){t(!0),$&&$(H)}function G(H){t(!1),V&&V(H)}return o.jsxs("section",{title:v,style:y,onClick:j,className:S,children:[C,I&&D,L&&o.jsx(g,{size:O,strokeWidth:2.5}),o.jsx("input",{disabled:m||b,readOnly:E,ref:u,onFocus:U,onBlur:G,...Y}),A&&o.jsx(z,{size:O,strokeWidth:2.5}),W&&D,T]})}function kr(n){return n.type==="currency"?o.jsx(Sr,{...n}):n.type==="masked"?o.jsx(Cr,{...n}):n.type==="cpf-cpnj"?o.jsx(gr,{...n}):o.jsx(jr,{...n})}function Nr(n){const{className:s="",...t}=n;return{className:`arkyn_breadcrumb ${s}`.trim(),...t}}function Ir(n){const{pathname:s}=ye.useLocation(),{className:t="",disabled:a=!1,to:c,...l}=n,h=s===c?"active":"inactive",u=`arkyn_breadcrumb_link ${h} ${t}`;return{to:c,className:u.trim(),disabled:a||h==="active",...l}}function Pr(n){const{className:s,...t}=Nr(n);return o.jsx("nav",{className:s,...t})}function wr(n){const{children:s,className:t,disabled:a,...c}=Ir(n);return a?o.jsxs("p",{className:t,children:[o.jsx(Q.ChevronRight,{size:14,strokeWidth:2.5}),s]}):o.jsxs(ye.Link,{className:t,...c,children:[o.jsx(Q.ChevronRight,{size:14,strokeWidth:2.5}),s]})}const ze=N.createContext({});function Tr(n){const{isVisibled:s,makeInvisible:t,children:a,className:c="",...l}=n,u=`arkyn_modal_container ${s?"visible":""} ${c}`;return o.jsx(ze.Provider,{value:{makeInvisible:t},children:o.jsx(xe.AnimatePresence,{children:s&&o.jsxs("aside",{className:u.trim(),...l,children:[o.jsx(xe.motion.div,{className:"overlay",transition:{duration:.15,ease:"easeOut"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t}),o.jsx(xe.motion.div,{className:"content",transition:{duration:.15,ease:"easeOut"},initial:{opacity:0,scale:.75},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:a})]})})})}function Or(n){const{alignment:s="right",className:t,...a}=n,c=`arkyn_modal_footer ${s} ${t}`;return o.jsx("footer",{className:c.trim(),...a})}function Fr(n){const{showCloseButton:s,className:t,children:a,...c}=n,{makeInvisible:l}=N.useContext(ze),u=`arkyn_modal_header ${s?"show-close":""} ${t}`;return o.jsxs("header",{className:u.trim(),...c,children:[a,o.jsx("button",{type:"button",onClick:l,children:o.jsx(Q.X,{size:24})})]})}const Lr={Container:Tr,Header:Fr,Footer:Or};function $r(n){const{text:s,size:t="lg",children:a,orientation:c="top",className:l,...h}=n;return o.jsxs("div",{className:`arkyn_tooltip ${t} ${c} ${l}`,...h,children:[a,o.jsx("div",{className:"arkyn_tooltip_text",children:s})]})}k.Badge=tr,k.Breadcrumb=Pr,k.BreadcrumbLink=wr,k.Button=or,k.Divider=sr,k.FormController=ar,k.FormError=cr,k.FormLabel=lr,k.IconButton=fr,k.Input=kr,k.Modal=Lr,k.Tooltip=$r,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});