// module 89359 from 491-d00f740e9c6ed637.js
// deps: 81678, 16878
const module_89359 = (e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return u},normalizeRscURL:function(){return l}});let n=r(81678),o=r(16878);function u(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,o.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function l(e){return e.replace(/\.rsc($|\?)/,"$1")}};
