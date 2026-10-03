// module 60108 from 8963-234f979bdd6b491c.js
// deps: 56006
const module_60108 = (e,t,i)=>{"use strict";i.d(t,{A:()=>a});var L=i(56006);let a=async e=>{let{lang:t="zh-cn",cate:i,page:a=1,pageSize:n=10}=e,r="/api/content/info_video?lang=".concat(t,"&page=").concat(a,"&pageSize=").concat(n);i&&(r+="&cate=".concat(i));let l=await fetch("".concat(L.a.api_server_host).concat(r));if(l.status>=200&&l.status<400){let e=await l.json();if(0===e.code)return e.data}throw Error("Failed to fetch video list")}};
