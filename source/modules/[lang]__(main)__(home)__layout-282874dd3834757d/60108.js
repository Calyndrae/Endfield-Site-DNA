// module 60108 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 56006
const module_60108 = (e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(56006);let o=async e=>{let{lang:t="zh-cn",cate:n,page:o=1,pageSize:l=10}=e,s="/api/content/info_video?lang=".concat(t,"&page=").concat(o,"&pageSize=").concat(l);n&&(s+="&cate=".concat(n));let a=await fetch("".concat(r.a.api_server_host).concat(s));if(a.status>=200&&a.status<400){let e=await a.json();if(0===e.code)return e.data}throw Error("Failed to fetch video list")}};
