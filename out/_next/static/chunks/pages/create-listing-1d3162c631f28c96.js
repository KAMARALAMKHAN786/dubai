(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{8787:(e,t,r)=>{"use strict";var a,n;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(4130)},4130:e=>{!function(){var t={229:function(e){var t,r,a,n=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],c=!1,d=-1;function m(){c&&a&&(c=!1,a.length?l=a.concat(l):d=-1,l.length&&u())}function u(){if(!c){var e=s(m);c=!0;for(var t=l.length;t;){for(a=l,l=[];++d<t;)a&&a[d].run();d=-1,t=l.length}a=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new g(e,t)),1!==l.length||c||s(u)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,a),i=!1}finally{i&&delete r[e]}return o.exports}a.ab="//";var n=a(229);e.exports=n}()},9658:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-listing",function(){return r(433)}])},6883:(e,t,r)=>{"use strict";r.d(t,{V:()=>s});var a=r(5507),n=r(3003),o=r.n(n),i=r(8787),s=function(){var e=(0,a.A)(o().mark(function e(t){var r,a,n,s,l,c,d;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r="dmbabahte",a=i.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET||"ml_default",r){e.next=5;break}throw Error("Cloudinary cloud name is missing.");case 5:if(a){e.next=7;break}throw Error("Cloudinary upload preset is missing.");case 7:return(n=new FormData).append("file",t),n.append("upload_preset",a),e.next=12,fetch("https://api.cloudinary.com/v1_1/".concat(r,"/image/upload/"),{method:"POST",body:n});case 12:if((s=e.sent).ok){e.next=18;break}return e.next=16,s.json();case 16:throw c=e.sent,Error("Cloudinary Upload Failed: ".concat((null===(l=c.error)||void 0===l?void 0:l.message)||"Unknown error"));case 18:return e.next=20,s.json();case 20:return d=e.sent.secure_url.replace("/upload/","/upload/f_webp,q_auto:eco/"),e.abrupt("return",d);case 25:throw e.prev=25,e.t0=e.catch(0),console.error("Image Upload Error:",e.t0),e.t0;case 29:case"end":return e.stop()}},e,null,[[0,25]])}));return function(t){return e.apply(this,arguments)}}()},433:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var a=r(615),n=r(6431),o=r(2963),i=r(5507),s=r(3003),l=r.n(s),c=r(7851),d=r(6392),m=r(5041),u=r(6666),g=r(9269),p=r(6883),f=c.createElement;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,o.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h=["Call girl","Escort Agency","Massage Girls","Independent Escorts"],x=["Dubai","Sharjah","Ajman","Ras Al Khaimah","Fujairah"],v=[{id:"free",name:"FREE",price:"$0 / month",description:"Perfect for Casual free Postings."},{id:"pro",name:"PRO",price:"$50 / month",description:"For Regular Postings! 100+ posting with VIP Tab !"},{id:"team",name:"TEAM",price:"$100 / month",description:" For Agency Escorts 1000+ Postings with team !"}];function w(){var e,t=(0,u.A)().user,r=(0,d.useRouter)(),s=(0,c.useState)({title:"",description:"",price:"",category:h[0],state:x[0],telegramId:"",zipCode:"",address:"",phone:"",whatsapp:"",email:"",website:"",profileImage:null,additionalImages:[],services:{classicVaginalSex:!1,eroticMassage:!1,masturbation:!1,cumInFace:!1,withTwoMen:!1,cumOnBody:!1,handjob:!1,oralWithoutCondom:!1,duoWithGirl:!1,dirtyTalk:!1,kamasutra:!1,position69:!1,goldenShowerGive:!1,drink:!1},paymentPlan:"free"}),b=s[0],w=s[1],N=(e=(0,i.A)(l().mark(function e(a){var n,o,i,s,c,d;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t){e.next=5;break}return g.Ay.error("Please login to create a listing"),r.push("/login"),e.abrupt("return");case 5:if(e.prev=5,n="",o=[],!b.profileImage){e.next=12;break}return e.next=11,(0,p.V)(b.profileImage);case 11:n=e.sent;case 12:if(!(b.additionalImages.length>0)){e.next=16;break}return e.next=15,Promise.all(b.additionalImages.map(p.V));case 15:o=e.sent;case 16:return e.next=18,m.N.from("listings").insert([{title:b.title,description:b.description,price:parseFloat(b.price),category:b.category,state:b.state,telegram_id:b.telegramId,zip_code:b.zipCode,address:b.address,phone:b.phone,whatsapp:b.whatsapp,email:b.email,website:b.website,profile_image:n,additional_images:o,status:"pending",user_id:t.id,payment_plan:b.paymentPlan}]);case 18:(i=e.sent.error)?(g.Ay.error("Error creating listing"),console.error(i)):(g.Ay.success("Listing created successfully and is pending approval"),"free"!==b.paymentPlan&&(s=b.paymentPlan.toUpperCase(),c="I want to upgrade to the ".concat(s," plan for my listing"),d="https://wa.me/+447446613550?text=".concat(encodeURIComponent(c)),window.open(d,"_blank")),r.push("/dashboard")),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(5),g.Ay.error("Error uploading images"),console.error(e.t0);case 27:case"end":return e.stop()}},e,null,[[5,23]])})),function(t){return e.apply(this,arguments)}),k=function(e){var t=e.target,r=t.name,a=t.value;w(function(e){return y(y({},e),{},(0,o.A)({},r,a))})},P=function(e){w(function(t){return y(y({},t),{},{services:y(y({},t.services),{},(0,o.A)({},e,!t.services[e]))})})},C=function(e){var t=e.target.files;t&&("profileImage"===e.target.name?w(function(e){return y(y({},e),{},{profileImage:t[0]})}):w(function(e){return y(y({},e),{},{additionalImages:(0,n.A)(Array.from(t))})}))};return f("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},f("h1",{className:"text-4xl font-bold text-gray-100 mb-8 text-center"},"Create New Listing"),f("form",{onSubmit:N,className:"space-y-8 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-lg"},f("div",{className:"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow"},f("h2",{className:"text-2xl font-semibold text-gray-100 mb-4"},"Basic Information"),f("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Title"),f("input",{type:"text",name:"title",required:!0,className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.title,onChange:k})),f("div",{className:"md:col-span-2"},f("label",{className:"block text-sm font-medium text-gray-100"},"Description"),f("textarea",{name:"description",rows:4,required:!0,className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.description,onChange:k})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Price (AED)"),f("input",{type:"number",name:"price",required:!0,min:"0",step:"0.01",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.price,onChange:k})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Category"),f("select",{name:"category",required:!0,className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.category,onChange:k},h.map(function(e){return f("option",{key:e,value:e},e)}))))),f("div",{className:"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow"},f("h2",{className:"text-2xl font-semibold text-gray-100 mb-4"},"Contact Information"),f("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Phone"),f("input",{type:"tel",name:"phone",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.phone,onChange:k})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"WhatsApp"),f("input",{type:"tel",name:"whatsapp",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.whatsapp,onChange:k})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Email"),f("input",{type:"email",name:"email",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.email,onChange:k})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Website"),f("input",{type:"url",name:"website",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.website,onChange:k})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Telegram ID"),f("input",{type:"text",name:"telegramId",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.telegramId,onChange:k})))),f("div",{className:"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow"},f("h2",{className:"text-2xl font-semibold text-gray-100 mb-4"},"Location"),f("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"State"),f("select",{name:"state",required:!0,className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.state,onChange:k},x.map(function(e){return f("option",{key:e,value:e},e)}))),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"ZIP Code"),f("input",{type:"text",name:"zipCode",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.zipCode,onChange:k})),f("div",{className:"md:col-span-2"},f("label",{className:"block text-sm font-medium text-gray-100"},"Address"),f("input",{type:"text",name:"address",className:"mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:b.address,onChange:k})))),f("div",{className:"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow"},f("h2",{className:"text-2xl font-semibold text-gray-100 mb-4"},"Images"),f("div",{className:"space-y-4"},f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Profile Image"),f("input",{type:"file",name:"profileImage",accept:"image/*",required:!0,className:"mt-1 block w-full text-gray-100",onChange:C})),f("div",null,f("label",{className:"block text-sm font-medium text-gray-100"},"Additional Images"),f("input",{type:"file",name:"additionalImages",accept:"image/*",multiple:!0,className:"mt-1 block w-full text-gray-100",onChange:C})))),f("div",{className:"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow"},f("h2",{className:"text-2xl font-semibold text-gray-100 mb-4"},"Services"),f("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},Object.entries(b.services).map(function(e){var t=(0,a.A)(e,2),r=t[0];return f("div",{key:r,className:"flex items-center"},f("input",{type:"checkbox",id:r,checked:t[1],onChange:function(){return P(r)},className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),f("label",{htmlFor:r,className:"ml-2 block text-sm text-gray-100"},r.replace(/([A-Z])/g," $1").trim()))}))),f("div",{className:"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow"},f("h2",{className:"text-2xl font-semibold text-gray-100 mb-6"},"Choose Your Plan"),f("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},v.map(function(e){var t={free:["1 Basic Listing","24h Visibility","3 Photos Maximum","Basic Support"],pro:["100+ Listings","VIP Profile Highlight","10 Photos Per Listing","Priority Support","Featured in Top Section","Analytics Dashboard"],team:["1000+ Listings","Team Management","20 Photos Per Listing","24/7 Priority Support","Custom Profile Domain","Advanced Analytics","Bulk Upload Tools","Dedicated Account Manager"]}[e.id];return f("div",{key:e.id,className:"relative p-6 rounded-lg border-2 cursor-pointer transition-colors ".concat(b.paymentPlan===e.id?"border-indigo-600 bg-gray-700":"border-gray-600 hover:border-indigo-500"),onClick:function(){return w(function(t){return y(y({},t),{},{paymentPlan:e.id})})}},f("div",{className:"flex flex-col h-full"},f("div",{className:"flex-1"},f("h3",{className:"text-xl font-bold text-gray-100 mb-2"},e.name),f("p",{className:"text-2xl font-semibold text-indigo-400 mb-4"},e.price),f("p",{className:"text-sm text-gray-300 mb-4"},e.description),f("ul",{className:"space-y-3 mb-6"},t.map(function(e){return f("li",{key:e,className:"flex items-center text-sm text-gray-300"},f("svg",{className:"w-4 h-4 mr-2 text-green-400 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})),e)}))),f("div",{className:"mt-4"},f("div",{className:"flex items-center"},f("input",{type:"radio",id:e.id,name:"paymentPlan",value:e.id,checked:b.paymentPlan===e.id,onChange:k,className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),f("label",{htmlFor:e.id,className:"ml-2 block text-sm font-medium text-gray-100"},"Select ",e.name," Plan")))))}))),f("div",{className:"flex justify-center"},f("button",{type:"submit",className:"w-max-md flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"free"===b.paymentPlan?"Create Free Listing":"Continue to Payment"))))}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(9658)),_N_E=e.O()}]);