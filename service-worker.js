if(!self.define){let e,o={};const s=(s,c)=>(s=new URL(s+".js",c).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let d={};const n=e=>s(e,i),t={module:{uri:i},exports:d,require:n};o[i]=Promise.all(c.map((e=>t[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"ckeditor.css",revision:"38819d66e051d8fb0610c41b16aa6d3d"},{url:"goog.css",revision:"6bbdef8629d2e2b3b592e9fbf024a95d"},{url:"goog/bubble.css",revision:"189574953040bda9dc6a27ac4f531ca5"},{url:"goog/button.css",revision:"94d6a128b5fca86b35cbf031b7adb21e"},{url:"goog/colormenubutton.css",revision:"9e3ce61ae1440f689c2824aa66665087"},{url:"goog/colorpalette.css",revision:"c001cf87b449f34251fa8ae3e77803d1"},{url:"goog/common.css",revision:"ecc88417539ced7af14905eee264c34d"},{url:"goog/custombutton.css",revision:"a14d3c2c2819bd97bd7a8e78c1ed2c6c"},{url:"goog/dialog.css",revision:"fb738697202edbf5167d849271269006"},{url:"goog/editortoolbar.css",revision:"0375b7586fee8817f93de9360adfe7cf"},{url:"goog/linkbutton.css",revision:"938c83c1b68546b67c09cc2921d021ca"},{url:"goog/linkdialog.css",revision:"55a2ad939785d263022e11f8313d63e2"},{url:"goog/menu.css",revision:"9d48fafd110cb97218a8fcba80d10c1d"},{url:"goog/menuitem.css",revision:"0361776108767187af83ed7addbadf12"},{url:"goog/menuseparator.css",revision:"9960dbe4832b01f807cdcb8b7d6119c2"},{url:"goog/palette.css",revision:"bf3e3f9f9d7786a62307640dde6b9a56"},{url:"goog/toolbar.css",revision:"b4d85c6f2df098913b7abd48004991dd"},{url:"index.html",revision:"a016e64ee608e9e412d921b3480214de"}],{})}));
//# sourceMappingURL=service-worker.js.map
