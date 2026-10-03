// module 90286 from 8963-234f979bdd6b491c.js
// deps: 97028, 90145
const module_90286 = (e,t,i)=>{"use strict";i.d(t,{M:()=>r});var L=i(97028),a=i(90145);let n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[null];(0,L.useEffect)(()=>{e();let t=(0,a.A)(e,100);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},t)},r=()=>{let[e,t]=(0,L.useState)("landscape");return n(()=>{t(window.innerWidth>=window.innerHeight?"landscape":"portrait")}),e}};
