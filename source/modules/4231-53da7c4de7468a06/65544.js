// module 65544 from 4231-53da7c4de7468a06.js
// deps: 9732, 53327, 83344
const module_65544 = (e,t,i)=>{var r=i(9732),n=i(53327),s=i(83344),o=0/0,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return o;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var i=l.test(e);return i||d.test(e)?u(e.slice(2),i?2:8):a.test(e)?o:+e}};
