// module 45965 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 9995, 4948
const module_45965 = (e,a,n)=>{"use strict";n.d(a,{default:()=>s});var i=n(9995);let t=async(e,a)=>{try{let i=new FontFace(e,a);document.fonts.add(i);try{await i.load()}catch(o){var n;document.fonts.delete(i);let t=null!=(n=a.split(",").filter(e=>e.includes(".woff2"))[0])?n:a,r=new FontFace(e,t);document.fonts.add(r),await r.load()}}catch(e){console.error(e)}};var r=n(4948);let o=()=>{let{font:e}=(0,r.PO)();(0,i.i)(()=>{Object.entries(e).forEach(e=>{let[a,n]=e;t(a,n)})},!0)},s=()=>(o(),null)};
