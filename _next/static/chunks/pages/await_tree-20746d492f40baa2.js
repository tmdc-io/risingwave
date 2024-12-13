(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{83234:function(e,t,n){"use strict";n.d(t,{NI:function(){return _},Yp:function(){return g},lX:function(){return E}});var r=n(67294),l=n(28387),a=n(76734),i=n(32067),o=n(54520),c=n(52494),s=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,d=e=>!!e||void 0;function m(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[f,p]=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,v]=(0,l.k)({strict:!1,name:"FormControlContext"}),_=(0,i.Gp)(function(e,t){let n=(0,i.jC)("Form",e),{getRootProps:l,htmlProps:c,...d}=function(e){let{id:t,isRequired:n,isInvalid:l,isDisabled:i,isReadOnly:o,...c}=e,s=(0,r.useId)(),d=t||`field-${s}`,m=`${d}-label`,f=`${d}-feedback`,p=`${d}-helptext`,[h,v]=(0,r.useState)(!1),[_,g]=(0,r.useState)(!1),[x,y]=(0,r.useState)(!1),E=(0,r.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,a.lq)(t,e=>{e&&g(!0)})}),[p]),b=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":u(x),"data-disabled":u(i),"data-invalid":u(l),"data-readonly":u(o),id:e.id??m,htmlFor:e.htmlFor??d}),[d,i,x,l,o,m]),k=(0,r.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,a.lq)(t,e=>{e&&v(!0)}),"aria-live":"polite"}),[f]),N=(0,r.useCallback)((e={},t=null)=>({...e,...c,ref:t,role:"group"}),[c]);return{isRequired:!!n,isInvalid:!!l,isReadOnly:!!o,isDisabled:!!i,isFocused:!!x,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:h,setHasFeedbackText:v,hasHelpText:_,setHasHelpText:g,id:d,labelId:m,feedbackId:f,helpTextId:p,htmlProps:c,getHelpTextProps:E,getErrorMessageProps:k,getRootProps:N,getLabelProps:b,getRequiredIndicatorProps:(0,r.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[])}}((0,o.Lr)(e)),m=s("chakra-form-control",e.className);return r.createElement(h,{value:d},r.createElement(f,{value:n},r.createElement(i.m$.div,{...l({},t),className:m,__css:n.container})))});function g(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:l,...a}=function(e){let t=v(),{id:n,disabled:r,readOnly:l,required:a,isRequired:i,isInvalid:o,isReadOnly:c,isDisabled:s,onFocus:u,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&p.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??s??(null==t?void 0:t.isDisabled),isReadOnly:l??c??(null==t?void 0:t.isReadOnly),isRequired:a??i??(null==t?void 0:t.isRequired),isInvalid:o??(null==t?void 0:t.isInvalid),onFocus:m(null==t?void 0:t.onFocus,u),onBlur:m(null==t?void 0:t.onBlur,d)}}(e);return{...a,disabled:t,readOnly:r,required:l,"aria-invalid":d(n),"aria-required":d(l),"aria-readonly":d(r)}}_.displayName="FormControl",(0,i.Gp)(function(e,t){let n=v(),l=p(),a=s("chakra-form__helper-text",e.className);return r.createElement(i.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:l.helperText,className:a})}).displayName="FormHelperText";var[x,y]=(0,l.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,i.Gp)((e,t)=>{let n=(0,i.jC)("FormError",e),l=(0,o.Lr)(e),a=v();return(null==a?void 0:a.isInvalid)?r.createElement(x,{value:n},r.createElement(i.m$.div,{...null==a?void 0:a.getErrorMessageProps(l,t),className:s("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,i.Gp)((e,t)=>{let n=y(),l=v();if(!(null==l?void 0:l.isInvalid))return null;let a=s("chakra-form__error-icon",e.className);return r.createElement(c.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:a},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var E=(0,i.Gp)(function(e,t){let n=(0,i.mq)("FormLabel",e),l=(0,o.Lr)(e),{className:a,children:c,requiredIndicator:u=r.createElement(b,null),optionalIndicator:d=null,...m}=l,f=v(),p=(null==f?void 0:f.getLabelProps(m,t))??{ref:t,...m};return r.createElement(i.m$.label,{...p,className:s("chakra-form__label",l.className),__css:{display:"block",textAlign:"start",...n}},c,(null==f?void 0:f.isRequired)?u:d)});E.displayName="FormLabel";var b=(0,i.Gp)(function(e,t){let n=v(),l=p();if(!(null==n?void 0:n.isRequired))return null;let a=s("chakra-form__required-indicator",e.className);return r.createElement(i.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:l.requiredIndicator,className:a})});b.displayName="RequiredIndicator"},57026:function(e,t,n){"use strict";n.d(t,{Ph:function(){return u}});var r=n(67294),l=n(83234),a=n(32067),i=n(54520),o=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,s=(0,a.Gp)(function(e,t){let{children:n,placeholder:l,className:i,...c}=e;return r.createElement(a.m$.select,{...c,ref:t,className:o("chakra-select",i)},l&&r.createElement("option",{value:""},l),n)});s.displayName="SelectField";var u=(0,a.Gp)((e,t)=>{var n;let o=(0,a.jC)("Select",e),{rootProps:u,placeholder:d,icon:m,color:p,height:h,h:v,minH:_,minHeight:g,iconColor:x,iconSize:y,...E}=(0,i.Lr)(e),[b,k]=function(e,t){let n={},r={};for(let[l,a]of Object.entries(e))t.includes(l)?n[l]=a:r[l]=a;return[n,r]}(E,i.oE),N=(0,l.Yp)(k),C={paddingEnd:"2rem",...o.field,_focus:{zIndex:"unset",...null==(n=o.field)?void 0:n._focus}};return r.createElement(a.m$.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:p},...b,...u},r.createElement(s,{ref:t,height:v??h,minH:_??g,placeholder:d,...N,__css:C},e.children),r.createElement(f,{"data-disabled":c(N.disabled),...(x||p)&&{color:x||p},__css:o.icon,...y&&{fontSize:y}},m))});u.displayName="Select";var d=e=>r.createElement("svg",{viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),m=(0,a.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),f=e=>{let{children:t=r.createElement(d,null),...n}=e,l=(0,r.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return r.createElement(m,{...n,className:"chakra-select__icon-wrapper"},(0,r.isValidElement)(t)?l:null)};f.displayName="SelectIcon"},92299:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/await_tree",function(){return n(25736)}])},49636:function(e,t,n){"use strict";n.d(t,{OL:function(){return o},X8:function(){return a},dL:function(){return c},xv:function(){return i}});var r=n(97400),l=n(35862);async function a(){return await l.ZP.get("/metrics/cluster")}async function i(){return(await l.ZP.get("/clusters/1")).map(r.cX.fromJSON)}async function o(){return(await l.ZP.get("/clusters/2")).map(r.cX.fromJSON)}async function c(){return await l.ZP.get("/version")}},44599:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294),l=n(61642);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],[a,i]=(0,r.useState)(),o=(0,l.Z)();return(0,r.useEffect)(()=>{let r=async()=>{if(n)try{let t=await e();i(t)}catch(e){o(e)}};if(r(),!t)return;let l=setInterval(r,t);return()=>clearInterval(l)},[o,t,n]),{response:a}}},25736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(85893),l=n(40639),a=n(83234),i=n(57026),o=n(47741),c=n(63764),s=n(96486),u=n.n(s),d=n(9008),m=n.n(d),f=n(67294),p=n(79613),h=n(64030),v=n(35862),_=n(49636),g=n(44599),x=n(68905);function y(){let{response:e}=(0,g.Z)(_.OL),[t,n]=(0,f.useState)(),[s,d]=(0,f.useState)("");(0,f.useEffect)(()=>{e&&!t&&n("")},[e,t]);let y=async()=>{let e,n;if(void 0!==t){e=""===t?"Await-Tree Dump of All Compute Nodes:":"Await-Tree Dump of Compute Node ".concat(t,":"),d("Loading...");try{let r=x.Kv.fromJSON(await v.ZP.get("/monitor/await_tree/".concat(t))),l=u()(r.actorTraces).entries().map(e=>{let[t,n]=e;return"[Actor ".concat(t,"]\n").concat(n)}).join("\n"),a=u()(r.rpcTraces).entries().map(e=>{let[t,n]=e;return"[RPC ".concat(t,"]\n").concat(n)}).join("\n"),i=u()(r.compactionTaskTraces).entries().map(e=>{let[t,n]=e;return"[Compaction ".concat(t,"]\n").concat(n)}).join("\n"),o=u()(r.inflightBarrierTraces).entries().map(e=>{let[t,n]=e;return"[Barrier ".concat(t,"]\n").concat(n)}).join("\n"),c=u()(r.barrierWorkerState).entries().map(e=>{let[t,n]=e;return"[BarrierWorkerState (Worker ".concat(t,")]\n").concat(n)}).join("\n"),s=u()(r.jvmStackTraces).entries().map(e=>{let[t,n]=e;return"[JVM (Worker ".concat(t,")]\n").concat(n)}).join("\n");n="".concat(e,"\n\n").concat(l,"\n").concat(a,"\n").concat(i,"\n").concat(o,"\n").concat(c,"\n\n").concat(s)}catch(t){n="".concat(e,"\n\nERROR: ").concat(t.message,"\n").concat(t.cause)}d(n)}},E=(0,r.jsxs)(l.kC,{p:3,height:"calc(100vh - 20px)",flexDirection:"column",children:[(0,r.jsx)(h.Z,{children:"Await Tree Dump"}),(0,r.jsxs)(l.kC,{flexDirection:"row",height:"full",width:"full",children:[(0,r.jsx)(l.gC,{mr:3,spacing:3,alignItems:"flex-start",width:200,height:"full",children:(0,r.jsxs)(a.NI,{children:[(0,r.jsx)(a.lX,{children:"Compute Nodes"}),(0,r.jsxs)(l.gC,{children:[(0,r.jsxs)(i.Ph,{onChange:e=>n(e.target.value),children:[e&&(0,r.jsx)("option",{value:"",children:"All"},""),e&&e.map(e=>{var t,n;return(0,r.jsxs)("option",{value:e.id,children:["(",e.id,") ",null===(t=e.host)||void 0===t?void 0:t.host,":",null===(n=e.host)||void 0===n?void 0:n.port]},e.id)})]}),(0,r.jsx)(o.zx,{onClick:e=>y(),width:"full",children:"Dump"})]})]})}),(0,r.jsx)(l.xu,{flex:1,height:"full",ml:3,overflowX:"scroll",overflowY:"scroll",children:void 0===s?(0,r.jsx)(p.Z,{}):(0,r.jsx)(c.ZP,{language:"sql",options:{fontSize:13,readOnly:!0,renderWhitespace:"boundary",wordWrap:"on"},defaultValue:'Select a compute node and click "Dump"...',value:s})})]})]});return(0,r.jsxs)(f.Fragment,{children:[(0,r.jsx)(m(),{children:(0,r.jsx)("title",{children:"Await Tree Dump"})}),E]})}},9008:function(e,t,n){e.exports=n(7828)}},function(e){e.O(0,[662,721,905,888,774,179],function(){return e(e.s=92299)}),_N_E=e.O()}]);