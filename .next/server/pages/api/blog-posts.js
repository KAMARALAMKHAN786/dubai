(()=>{var t={};t.id=677,t.ids=[677],t.modules={5600:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3037:(t,e)=>{"use strict";Object.defineProperty(e,"M",{enumerable:!0,get:function(){return function t(e,r){return r in e?e[r]:"then"in e&&"function"==typeof e.then?e.then(function(e){return t(e,r)}):"function"==typeof e&&"default"===r?e:void 0}}})},673:(t,e)=>{"use strict";Object.defineProperty(e,"A",{enumerable:!0,get:function(){return r}});var r=function(t){return t.PAGES="PAGES",t.PAGES_API="PAGES_API",t.APP_PAGE="APP_PAGE",t.APP_ROUTE="APP_ROUTE",t.IMAGE="IMAGE",t}({})},3510:(t,e,r)=>{"use strict";t.exports=r(5600)},4769:(t,e,r)=>{"use strict";r.r(e),r.d(e,{config:()=>d,default:()=>p,routeModule:()=>y});var n={};r.r(n),r.d(n,{default:()=>f});var o=r(3510),i=r(673),a=r(3037);function u(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){r(t);return}u.done?e(c):Promise.resolve(c).then(n,o)}var c=r(7081),s=r.n(c),l=(0,require("@supabase/supabase-js").createClient)("https://jwvjlyzxrsjjgowtbvqo.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dmpseXp4cnNqamdvd3RidnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMjY3NDMsImV4cCI6MjA1MzkwMjc0M30.QjVNPqV-mZkeQXqYx7Bj5fNtTP0iHjNyov5W-eCGJhY");function f(t,e){return h.apply(this,arguments)}function h(){var t;return t=s().mark(function t(e,r){var n,o,i,a,u,c,f,h,p,d,y,v,g;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.method,t.next="GET"===t.t0?3:"POST"===t.t0?18:"DELETE"===t.t0?34:49;break;case 3:return t.prev=3,t.next=6,l.from("blog_posts").select("*").order("created_at",{ascending:!1});case 6:if(o=(n=t.sent).data,!(i=n.error)){t.next=11;break}throw i;case 11:r.status(200).json(o),t.next=17;break;case 14:t.prev=14,t.t1=t.catch(3),r.status(500).json({error:"Error fetching blog posts"});case 17:return t.abrupt("break",51);case 18:return t.prev=18,u=(a=e.body).title,c=a.content,f=a.image_url,h=a.author_id,t.next=22,l.from("blog_posts").insert([{title:u,content:c,image_url:f,author_id:h}]).select();case 22:if(d=(p=t.sent).data,!(y=p.error)){t.next=27;break}throw y;case 27:r.status(201).json(d[0]),t.next=33;break;case 30:t.prev=30,t.t2=t.catch(18),r.status(500).json({error:"Error creating blog post"});case 33:return t.abrupt("break",51);case 34:return t.prev=34,v=e.query.id,t.next=38,l.from("blog_posts").delete().eq("id",v);case 38:if(!(g=t.sent.error)){t.next=42;break}throw g;case 42:r.status(200).json({message:"Post deleted successfully"}),t.next=48;break;case 45:t.prev=45,t.t3=t.catch(34),r.status(500).json({error:"Error deleting blog post"});case 48:return t.abrupt("break",51);case 49:r.setHeader("Allow",["GET","POST","DELETE"]),r.status(405).end("Method ".concat(e.method," Not Allowed"));case 51:case"end":return t.stop()}},t,null,[[3,14],[18,30],[34,45]])}),(h=function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)})}).apply(this,arguments)}let p=(0,a.M)(n,"default"),d=(0,a.M)(n,"config"),y=new o.PagesAPIRouteModule({definition:{kind:i.A.PAGES_API,page:"/api/blog-posts",pathname:"/api/blog-posts",bundlePath:"",filename:""},userland:n})},1026:(t,e,r)=>{var n=r(7945).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function p(t,r,n,o){var i,a,c=Object.create((r&&r.prototype instanceof b?r:b).prototype);return u(c,"_invoke",{value:(i=new O(o||[]),a=y,function(r,o){if(a===v)throw Error("Generator is already running");if(a===g){if("throw"===r)throw o;return{value:e,done:!0}}for(i.method=r,i.arg=o;;){var u=i.delegate;if(u){var c=function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),m;var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var u=a.arg;return u?u.done?(n[r.resultName]=u.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):u:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,m)}(u,i);if(c){if(c===m)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===y)throw a=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=v;var s=d(t,n,i);if("normal"===s.type){if(a=i.done?g:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(a=g,i.method="throw",i.arg=s.arg)}})}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var y="suspendedStart",v="executing",g="completed",m={};function b(){}function x(){}function w(){}var E={};h(E,s,function(){return this});var _=Object.getPrototypeOf,P=_&&_(_(G([])));P&&P!==i&&a.call(P,s)&&(E=P);var j=w.prototype=b.prototype=Object.create(E);function L(t){["next","throw","return"].forEach(function(e){h(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){var r;u(this,"_invoke",{value:function(o,i){function u(){return new e(function(r,u){!function r(o,i,u,c){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,u,c)},function(t){r("throw",t,u,c)}):e.resolve(f).then(function(t){l.value=t,u(l)},function(t){return r("throw",t,u,c)})}c(s.arg)}(o,i,r,u)})}return r=r?r.then(u,u):u()}})}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(n(t)+" is not iterable")}return x.prototype=w,u(j,"constructor",{value:w,configurable:!0}),u(w,"constructor",{value:x,configurable:!0}),x.displayName=h(w,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(k.prototype),h(k.prototype,l,function(){return this}),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(j),h(j,f,"Generator"),h(j,s,function(){return this}),h(j,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},7945:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7081:(t,e,r)=>{var n=r(1026)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}};var e=require("../../webpack-api-runtime.js");e.C(t);var r=e(e.s=4769);module.exports=r})();