"use strict";(self.webpackChunkjcalc=self.webpackChunkjcalc||[]).push([[842],{5842:(ve,nt,y)=>{y.r(nt),y.d(nt,{MainModule:()=>Re});var o=y(8256),rt=y(529);const ot="c32e2d66399022670fbeb5050a9d6d91";let at=(()=>{class t{constructor(e){this.http=e}getLocation(e){return this.http.get(`http://api.ipstack.com/${e}`,{params:{access_key:"3d34b7c389101f8ccbc8814cc8c3455f"}})}getMyIp(){return this.http.get("https://api.ipify.org/?format=json")}getCurrencyRate(){return this.http.get("https://api.metalpriceapi.com/v1/latest",{params:{api_key:ot,base:"INR",currencies:"USD,SAR,AED,KWD,"}})}getToday(){const e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()}getGoldRate(){const e={api_key:ot,base:"INR",date:this.getToday()};return this.http.get("https://api.metalpriceapi.com/v1/carat",{params:e})}getGoldRate2(){return this.http.get("http://goldpricez.com/api/rates/currency/gbp/measure/gram",{params:{"X-API-KEY":"309443e55e2497e289c2d0c75c64ff24309443e5"}})}copyMessage(e){const r=document.createElement("textarea");r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.opacity="0",r.value=e,document.body.appendChild(r),r.focus(),r.select(),document.execCommand("copy"),document.body.removeChild(r)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(rt.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=y(6895),l=y(433),C=y(9837);function Rt(t,n){if(1&t&&(o.TgZ(0,"option"),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.Oqu(e)}}function vt(t,n){1&t&&(o.TgZ(0,"ngb-toast",11),o._uU(1," Copied to clipboard "),o.qZA()),2&t&&o.Q6J("autohide",!0)}let At=(()=>{class t{constructor(e){this.common=e,this.password="",this.passwordLength=8,this.passwordLengths=[4,5,6,7,8,9,10,11,12,13,14],this.show=!1}ngOnInit(){this.generateToughPassword()}isTemplate(e){return e.textOrTpl instanceof o.Rgc}generatePassword(){const r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let a="";for(let i=0,s=r.length;i<8;++i)a+=r.charAt(Math.floor(Math.random()*s));return a}generateToughPassword(){const e="abcdefghijklmnopqrstuvwxyz",r=e.toUpperCase(),a="0123456789",i='!"@$%+-_?^&*()';let s="",c="";const u=this.passwordLength%4,d=(this.passwordLength-u)/4,f=h=>h[Math.floor(Math.random()*h.length)];for(let h=0;h<=d-1;h++)s+=`${f(e)}${f(r)}${f(a)}${f(i)}`;for(let h=0;h<=u-1;h++)c+=f([...e,...r,...a,...i]);this.password=s+c}showToast(){this.show=!0,setTimeout(()=>{this.show=!1},1e3)}copyMessage(e){this.showToast(),this.common.copyMessage(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(at))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-random-password"]],decls:19,vars:4,consts:[[1,"container"],[1,"justify-content-between"],["id","print-image",1,"row"],[1,"pl-0","pr-0","col-md-8","col-sm-12"],[1,"card","p-3"],[2,"float","right"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["aria-label","Default select example",1,"form-select","mt-2","mb-2",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["href","javascript:void(0)",1,"ml-2",3,"click"],[3,"autohide",4,"ngIf"],[3,"autohide"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),o._uU(6," Random Password "),o.TgZ(7,"div",5)(8,"button",6),o.NdJ("click",function(){return r.generateToughPassword()}),o._uU(9,"Generate Again"),o.qZA()()(),o.TgZ(10,"select",7),o.NdJ("ngModelChange",function(i){return r.passwordLength=i}),o.YNc(11,Rt,2,1,"option",8),o.qZA(),o.TgZ(12,"p"),o._uU(13,"Your Password is: "),o.TgZ(14,"b"),o._uU(15),o.qZA(),o.TgZ(16,"a",9),o.NdJ("click",function(){return r.copyMessage(r.password)}),o._uU(17,"Copy"),o.qZA()(),o.YNc(18,vt,2,1,"ngb-toast",10),o.qZA()()()()()),2&e&&(o.xp6(10),o.Q6J("ngModel",r.passwordLength),o.xp6(1),o.Q6J("ngForOf",r.passwordLengths),o.xp6(4),o.Oqu(r.password),o.xp6(3),o.Q6J("ngIf",r.show))},dependencies:[_.sg,_.O5,l.YN,l.Kr,l.EJ,l.JJ,l.On,C.Iv]}),t})();var it=y(646);let It=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-history"]],decls:1,vars:1,template:function(e,r){1&e&&o._uU(0),2&e&&o.hij("","history Works","\n")}}),t})();function st(t,n,e,r,a,i,s){try{var c=t[i](s),u=c.value}catch(g){return void e(g)}c.done?n(u):Promise.resolve(u).then(r,a)}function m(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var i=t.apply(n,e);function s(u){st(i,r,a,s,c,"next",u)}function c(u){st(i,r,a,s,c,"throw",u)}s(void 0)})}}const ct="application/font-woff",ut="image/jpeg",Pt={woff:ct,woff2:ct,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ut,jpeg:ut,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function S(t){const n=function Et(t){const n=/\.([^./]*?)$/g.exec(t);return n?n[1]:""}(t).toLowerCase();return Pt[n]||""}function Zt(t){return t.split(/,/)[1]}function T(t){return-1!==t.search(/^(data:)/)}function lt(t,n){return`data:${n};base64,${t}`}function mt(t,n,e){return R.apply(this,arguments)}function R(){return(R=m(function*(t,n,e){const r=yield fetch(t,n);if(404===r.status)throw new Error(`Resource "${r.url}" not found`);const a=yield r.blob();return new Promise((i,s)=>{const c=new FileReader;c.onerror=s,c.onloadend=()=>{try{i(e({res:r,result:c.result}))}catch(u){s(u)}},c.readAsDataURL(a)})})).apply(this,arguments)}const v={};function Mt(t,n,e){let r=t.replace(/\?.*/,"");return e&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),n?`[${n}]${r}`:r}function A(t,n,e){return I.apply(this,arguments)}function I(){return(I=m(function*(t,n,e){const r=Mt(t,n,e.includeQueryParams);if(null!=v[r])return v[r];let a;e.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());try{a=lt(yield mt(t,e.fetchRequestInit,({res:s,result:c})=>(n||(n=s.headers.get("Content-Type")||""),Zt(c))),n)}catch(i){a=e.imagePlaceholder||"";let s=`Failed to fetch resource: ${t}`;i&&(s="string"==typeof i?i:i.message),s&&console.warn(s)}return v[r]=a,a})).apply(this,arguments)}function Ut(t,n){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const e=document.implementation.createHTMLDocument(),r=e.createElement("base"),a=e.createElement("a");return e.head.appendChild(r),e.body.appendChild(a),n&&(r.href=n),a.href=t,a.href}const qt=(()=>{let t=0;return()=>(t+=1,`u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${t}`)})();function b(t){const n=[];for(let e=0,r=t.length;e<r;e++)n.push(t[e]);return n}function w(t,n){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(n);return r?parseFloat(r.replace("px","")):0}function pt(t,n={}){const e=n.width||function kt(t){const n=w(t,"border-left-width"),e=w(t,"border-right-width");return t.clientWidth+n+e}(t),r=n.height||function Ft(t){const n=w(t,"border-top-width"),e=w(t,"border-bottom-width");return t.clientHeight+n+e}(t);return{width:e,height:r}}function Lt(){let t,n;try{n=process}catch{}const e=n&&n.env?n.env.devicePixelRatio:null;return e&&(t=parseInt(e,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const p=16384;function $t(t){(t.width>p||t.height>p)&&(t.width>p&&t.height>p?t.width>t.height?(t.height*=p/t.width,t.width=p):(t.width*=p/t.height,t.height=p):t.width>p?(t.height*=p/t.width,t.width=p):(t.width*=p/t.height,t.height=p))}function P(t){return new Promise((n,e)=>{const r=new Image;r.onload=()=>n(r),r.onerror=e,r.crossOrigin="anonymous",r.decoding="sync",r.src=t})}function Dt(t){return E.apply(this,arguments)}function E(){return(E=m(function*(t){return Promise.resolve().then(()=>(new XMLSerializer).serializeToString(t)).then(encodeURIComponent).then(n=>`data:image/svg+xml;charset=utf-8,${n}`)})).apply(this,arguments)}function Gt(t,n,e){return Z.apply(this,arguments)}function Z(){return(Z=m(function*(t,n,e){const r="http://www.w3.org/2000/svg",a=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return a.setAttribute("width",`${n}`),a.setAttribute("height",`${e}`),a.setAttribute("viewBox",`0 0 ${n} ${e}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),a.appendChild(i),i.appendChild(t),Dt(a)})).apply(this,arguments)}function gt(t,n,e){const r=window.getComputedStyle(t,e),a=r.getPropertyValue("content");if(""===a||"none"===a)return;const i=qt();try{n.className=`${n.className} ${i}`}catch{return}const s=document.createElement("style");s.appendChild(function Ot(t,n,e){const r=`.${t}:${n}`,a=e.cssText?function Ht(t){const n=t.getPropertyValue("content");return`${t.cssText} content: '${n.replace(/'|"/g,"")}';`}(e):function Jt(t){return b(t).map(n=>`${n}: ${t.getPropertyValue(n)}${t.getPropertyPriority(n)?" !important":""};`).join(" ")}(e);return document.createTextNode(`${r}{${a}}`)}(i,e,r)),n.appendChild(s)}function Wt(t){return M.apply(this,arguments)}function M(){return(M=m(function*(t){const n=t.toDataURL();return"data:,"===n?t.cloneNode(!1):P(n)})).apply(this,arguments)}function jt(t,n){return U.apply(this,arguments)}function U(){return(U=m(function*(t,n){const e=t.poster,r=S(e);return P(yield A(e,r,n))})).apply(this,arguments)}function Bt(t,n){return q.apply(this,arguments)}function q(){return(q=m(function*(t,n){return t instanceof HTMLCanvasElement?Wt(t):t instanceof HTMLVideoElement&&t.poster?jt(t,n):t.cloneNode(!1)})).apply(this,arguments)}const Nt=t=>null!=t.tagName&&"SLOT"===t.tagName.toUpperCase();function zt(t,n,e){return k.apply(this,arguments)}function k(){return(k=m(function*(t,n,e){var r;const a=Nt(t)&&t.assignedNodes?b(t.assignedNodes()):b((null!==(r=t.shadowRoot)&&void 0!==r?r:t).childNodes);return 0===a.length||t instanceof HTMLVideoElement||(yield a.reduce((i,s)=>i.then(()=>dt(s,e)).then(c=>{c&&n.appendChild(c)}),Promise.resolve())),n})).apply(this,arguments)}function Xt(t,n){return n instanceof Element&&(function Kt(t,n){const e=n.style;if(!e)return;const r=window.getComputedStyle(t);r.cssText?(e.cssText=r.cssText,e.transformOrigin=r.transformOrigin):b(r).forEach(a=>{let i=r.getPropertyValue(a);"font-size"===a&&i.endsWith("px")&&(i=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1+"px"),e.setProperty(a,i,r.getPropertyPriority(a))})}(t,n),function Vt(t,n){gt(t,n,":before"),gt(t,n,":after")}(t,n),function Yt(t,n){t instanceof HTMLTextAreaElement&&(n.innerHTML=t.value),t instanceof HTMLInputElement&&n.setAttribute("value",t.value)}(t,n),function Qt(t,n){if(t instanceof HTMLSelectElement){const r=Array.from(n.children).find(a=>t.value===a.getAttribute("value"));r&&r.setAttribute("selected","")}}(t,n)),n}function dt(t,n,e){return F.apply(this,arguments)}function F(){return(F=m(function*(t,n,e){return e||!n.filter||n.filter(t)?Promise.resolve(t).then(r=>Bt(r,n)).then(r=>zt(t,r,n)).then(r=>Xt(t,r)):null})).apply(this,arguments)}const ht=/url\((['"]?)([^'"]+?)\1\)/g,te=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,ee=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ne(t){const n=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${n})(['"]?\\))`,"g")}function re(t){const n=[];return t.replace(ht,(e,r,a)=>(n.push(a),e)),n.filter(e=>!T(e))}function oe(t,n,e,r,a){return L.apply(this,arguments)}function L(){return(L=m(function*(t,n,e,r,a){try{const i=e?Ut(n,e):n,s=S(n);let c;return c=a?lt(yield a(i),s):yield A(i,s,r),t.replace(ne(n),`$1${c}$3`)}catch{}return t})).apply(this,arguments)}function ae(t,{preferredFontFormat:n}){return n?t.replace(ee,e=>{for(;;){const[r,,a]=te.exec(e)||[];if(!a)return"";if(a===n)return`src: ${r};`}}):t}function ft(t){return-1!==t.search(ht)}function yt(t,n,e){return $.apply(this,arguments)}function $(){return($=m(function*(t,n,e){if(!ft(t))return t;const r=ae(t,e);return re(r).reduce((i,s)=>i.then(c=>oe(c,s,n,e)),Promise.resolve(r))})).apply(this,arguments)}function ie(t,n){return D.apply(this,arguments)}function D(){return(D=m(function*(t,n){var e;const r=null===(e=t.style)||void 0===e?void 0:e.getPropertyValue("background");if(r){const a=yield yt(r,null,n);t.style.setProperty("background",a,t.style.getPropertyPriority("background"))}})).apply(this,arguments)}function se(t,n){return G.apply(this,arguments)}function G(){return(G=m(function*(t,n){if((!(t instanceof HTMLImageElement)||T(t.src))&&(!(t instanceof SVGImageElement)||T(t.href.baseVal)))return;const e=t instanceof HTMLImageElement?t.src:t.href.baseVal,r=yield A(e,S(e),n);yield new Promise((a,i)=>{t.onload=a,t.onerror=i,t instanceof HTMLImageElement?(t.srcset="",t.src=r):t.href.baseVal=r})})).apply(this,arguments)}function ce(t,n){return H.apply(this,arguments)}function H(){return(H=m(function*(t,n){const r=b(t.childNodes).map(a=>bt(a,n));yield Promise.all(r).then(()=>t)})).apply(this,arguments)}function bt(t,n){return J.apply(this,arguments)}function J(){return(J=m(function*(t,n){t instanceof Element&&(yield ie(t,n),yield se(t,n),yield ce(t,n))})).apply(this,arguments)}function ue(t,n){const{style:e}=t;n.backgroundColor&&(e.backgroundColor=n.backgroundColor),n.width&&(e.width=`${n.width}px`),n.height&&(e.height=`${n.height}px`);const r=n.style;return null!=r&&Object.keys(r).forEach(a=>{e[a]=r[a]}),t}const _t={};function wt(t){return O.apply(this,arguments)}function O(){return(O=m(function*(t){let n=_t[t];return null!=n||(n={url:t,cssText:yield(yield fetch(t)).text()},_t[t]=n),n})).apply(this,arguments)}function xt(t,n){return V.apply(this,arguments)}function V(){return V=m(function*(t,n){let e=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,i=(e.match(/url\([^)]+\)/g)||[]).map(function(){var s=m(function*(c){let u=c.replace(r,"$1");return u.startsWith("https://")||(u=new URL(u,t.url).href),mt(u,n.fetchRequestInit,({result:g})=>(e=e.replace(c,`url(${g})`),[c,g]))});return function(c){return s.apply(this,arguments)}}());return Promise.all(i).then(()=>e)}),V.apply(this,arguments)}function Ct(t){if(null==t)return[];const n=[];let r=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const a=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const u=a.exec(r);if(null===u)break;n.push(u[0])}r=r.replace(a,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,c=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let u=i.exec(r);if(null===u){if(u=c.exec(r),null===u)break;i.lastIndex=c.lastIndex}else c.lastIndex=i.lastIndex;n.push(u[0])}return n}function le(t,n){return W.apply(this,arguments)}function W(){return(W=m(function*(t,n){const e=[],r=[];return t.forEach(a=>{if("cssRules"in a)try{b(a.cssRules||[]).forEach((i,s)=>{if(i.type===CSSRule.IMPORT_RULE){let c=s+1;const g=wt(i.href).then(d=>xt(d,n)).then(d=>Ct(d).forEach(f=>{try{a.insertRule(f,f.startsWith("@import")?c+=1:a.cssRules.length)}catch(h){console.error("Error inserting rule from remote css",{rule:f,error:h})}})).catch(d=>{console.error("Error loading remote css",d.toString())});r.push(g)}})}catch(i){const s=t.find(c=>null==c.href)||document.styleSheets[0];null!=a.href&&r.push(wt(a.href).then(c=>xt(c,n)).then(c=>Ct(c).forEach(u=>{s.insertRule(u,a.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c.toString())})),console.error("Error inlining remote css file",i.toString())}}),Promise.all(r).then(()=>(t.forEach(a=>{if("cssRules"in a)try{b(a.cssRules||[]).forEach(i=>{e.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${a.href}`,i.toString())}}),e))})).apply(this,arguments)}function me(t){return t.filter(n=>n.type===CSSRule.FONT_FACE_RULE).filter(n=>ft(n.style.getPropertyValue("src")))}function pe(t,n){return j.apply(this,arguments)}function j(){return(j=m(function*(t,n){if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");const e=b(t.ownerDocument.styleSheets);return me(yield le(e,n))})).apply(this,arguments)}function ge(t,n){return B.apply(this,arguments)}function B(){return(B=m(function*(t,n){const e=yield pe(t,n);return(yield Promise.all(e.map(a=>yt(a.cssText,a.parentStyleSheet?a.parentStyleSheet.href:null,n)))).join("\n")})).apply(this,arguments)}function de(t,n){return N.apply(this,arguments)}function N(){return(N=m(function*(t,n){const e=null!=n.fontEmbedCSS?n.fontEmbedCSS:n.skipFonts?null:yield ge(t,n);if(e){const r=document.createElement("style"),a=document.createTextNode(e);r.appendChild(a),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}})).apply(this,arguments)}function he(t){return z.apply(this,arguments)}function z(){return(z=m(function*(t,n={}){const{width:e,height:r}=pt(t,n),a=yield dt(t,n,!0);return yield de(a,n),yield bt(a,n),ue(a,n),yield Gt(a,e,r)})).apply(this,arguments)}function x(t){return K.apply(this,arguments)}function K(){return(K=m(function*(t,n={}){const{width:e,height:r}=pt(t,n),a=yield he(t,n),i=yield P(a),s=document.createElement("canvas"),c=s.getContext("2d"),u=n.pixelRatio||Lt(),g=n.canvasWidth||e,d=n.canvasHeight||r;return s.width=g*u,s.height=d*u,n.skipAutoScale||$t(s),s.style.width=`${g}`,s.style.height=`${d}`,n.backgroundColor&&(c.fillStyle=n.backgroundColor,c.fillRect(0,0,s.width,s.height)),c.drawImage(i,0,0,s.width,s.height),s})).apply(this,arguments)}function Q(){return(Q=m(function*(t,n={}){return(yield x(t,n)).toDataURL()})).apply(this,arguments)}const ye=["printPdf"],be=["formRoot"];function _e(t,n){if(1&t&&(o.TgZ(0,"small"),o._uU(1),o.qZA()),2&t){const e=o.oxw(2);o.xp6(1),o.hij("(",e.location.zip,")")}}function we(t,n){if(1&t&&(o.TgZ(0,"span",29),o._uU(1),o.YNc(2,_e,2,1,"small",30),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.hij(" ",e.location.city," "),o.xp6(1),o.Q6J("ngIf",e.location.zip)}}function xe(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"button",31),o.NdJ("click",function(){o.CHM(e);const a=o.oxw();return o.KtG(a.reset())}),o._uU(1,"Reset"),o.qZA()}}function Ce(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"button",32),o.NdJ("click",function(){o.CHM(e);const a=o.oxw();return o.KtG(a.printImage())}),o._uU(1,"Print"),o.qZA()}if(2&t){const e=o.oxw();o.Q6J("disabled",0===e.myForm.value.totalAmount)}}const Se=[{path:"",component:(()=>{class t{constructor(e,r){this.fb=e,this.commonService=r,this.showMe=!1,this.hideMe=!1,this.currencyRates={},this.goldRates={},this.today="",this.location={},this.myip=""}ngOnInit(){this.getMyIp(),this.setForm(),this.today=this.commonService.getToday(),this.getCurrency(),this.getGold()}getMyIp(){const e=localStorage.getItem("myip");if(e)return this.myip=e,void this.getLocation(e);this.commonService.getMyIp().subscribe(r=>{r&&(this.myip=r.ip,localStorage.setItem("myip",r.ip),this.getLocation(r.ip))})}getLocation(e){const r=localStorage.getItem("location");r?this.location=JSON.parse(r):this.commonService.getLocation(e).subscribe(a=>{this.location=a,localStorage.setItem("location",JSON.stringify(a))})}getGold(){const e=localStorage.getItem(`goldrate-${this.today}`);e?this.goldRates=JSON.parse(e):this.commonService.getGoldRate2().subscribe(r=>{console.log(r),r&&(r=JSON.parse(r),this.goldRates=r,localStorage.setItem(`goldrate-${this.today}`,JSON.stringify(r)))})}getCurrency(){const e=localStorage.getItem(`currencyrate-${this.today}`);e?this.currencyRates=JSON.parse(e):this.commonService.getCurrencyRate().subscribe(r=>{console.log(r),r&&r.rates&&(this.currencyRates=r,localStorage.setItem(`currencyrate-${this.today}`,JSON.stringify(r)))})}setForm(){this.myForm=this.fb.group({todayRate:[4850,[l.kI.required]],weight:[0,[l.kI.required]],gramRate:[0,[l.kI.required]],wastagePercentage:[0,[l.kI.required]],wastageGram:[0,[l.kI.required]],wastageAmount:[0,[l.kI.required]],gst:[0],totalAmountExclGst:[0,[l.kI.required]],totalAmount:[0,[l.kI.required]],extraAmountPayable:[0,[l.kI.required]],inPoun:[0],inKalangi:[0],inPounAmount:[0],inKalangiAmount:[0]})}doCalc(){const e=this.myForm.controls;e.gramRate.setValue(e.todayRate.value*e.weight.value),e.wastageGram.setValue(e.weight.value*(.01*e.wastagePercentage.value)),e.wastageAmount.setValue(e.wastageGram.value*e.todayRate.value),e.totalAmountExclGst.setValue(e.todayRate.value*e.weight.value+e.wastageAmount.value),e.gst.setValue(.03*e.totalAmountExclGst.value),e.totalAmount.setValue(e.totalAmountExclGst.value+e.gst.value),e.extraAmountPayable.setValue(e.totalAmount.value-e.gramRate.value),e.inPoun.setValue(e.weight.value/8),e.inKalangi.setValue(e.weight.value/5),e.inPounAmount.setValue(8*e.todayRate.value),e.inKalangiAmount.setValue(5*e.todayRate.value),this.setDecimal()}setDecimal(){Object.keys(this.myForm.value).forEach(e=>{this.myForm.controls[e].setValue(this.getDecimal(this.myForm.controls[e].value,e))})}getDecimal(e,r){let a=e;return"todayRate"!==r&&"weight"!==r&&"wastagePercentage"!==r&&(a=e.toFixed(2)),a}print(){this.showMe=!0,this.hideMe=!0,setTimeout(()=>{console.log(this.printPdf);const e=this.printPdf.nativeElement.innerHTML;let r="";r=window.open("","_blank","top=0,left=0,height=100%,width=auto"),e&&(r.document.write(`${e}`),r.document.close(),this.showMe=!1,this.hideMe=!1)},1e3)}printImage(){this.hideMe=!0;const e=this;setTimeout(()=>{(function fe(t){return Q.apply(this,arguments)})(document.getElementById("print-image")).then(function(a){(new Image).src=a;const s=new Date,c="gold-loan-details-"+s.getDate()+"-"+s.getMonth()+"-"+s.getFullYear()+"-"+s.getHours()+"-"+s.getMinutes()+"-"+s.getSeconds();e.downloadURI(a,c)}).catch(function(a){console.error("oops, something went wrong!",a)})},500)}downloadURI(e,r){const a=document.createElement("a");a.download=r,a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),this.hideMe=!1}reset(){this.myForm.reset(),this.setForm()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l.qu),o.Y36(at))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-homepage"]],viewQuery:function(e,r){if(1&e&&(o.Gf(ye,5),o.Gf(be,5)),2&e){let a;o.iGM(a=o.CRH())&&(r.printPdf=a.first),o.iGM(a=o.CRH())&&(r.formRoot=a.first)}},decls:65,vars:11,consts:[["id","print-image",1,"container"],[1,"justify-content-between"],[1,"row"],[1,"pl-0","pr-0","col-md-8","col-sm-12"],[1,"card","p-3"],[2,"float","right"],["class","city",4,"ngIf"],["type","button","class","btn btn-secondary btn-sm ",3,"click",4,"ngIf"],["type","button","class","ml-2 btn btn-primary btn-sm",3,"disabled","click",4,"ngIf"],[1,"form","mt-4",3,"formGroup"],["formRoot",""],[1,"col-4"],["for","typeahead-focus"],["type","number","min","3000","max","9999","placeholder","Rate today","formControlName","todayRate","required","",1,"form-control",3,"blur"],["type","number","min","0.1","max","2000","placeholder","Weight in gms","formControlName","weight","required","",1,"form-control",3,"blur"],[1,"input-group","mb-3"],["type","number","min","0.1","max","60","placeholder","Wastage in percentage ","formControlName","wastagePercentage","required","",1,"form-control",3,"blur"],[1,"input-group-append"],[1,"input-group-text"],[1,"w-100","text-center"],[1,"col-6","mb-3"],["id","disabledInput","type","text","placeholder","Wastage in gram","formControlName","wastageGram","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Wastage amount","formControlName","wastageAmount","required","",1,"form-control"],[1,"col-sm-12","col-md-4","mb-3"],["id","disabledInput","type","text","placeholder","Total excl. GST","formControlName","totalAmountExclGst","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Gst","formControlName","gst","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Total incl. GST","formControlName","totalAmount","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Poun/Savaran","formControlName","inPoun","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Kalanji","formControlName","inKalangi","required","",1,"form-control"],[1,"city"],[4,"ngIf"],["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],["type","button",1,"ml-2","btn","btn-primary","btn-sm",3,"disabled","click"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),o._uU(6," G Calc "),o.TgZ(7,"div",5),o.YNc(8,we,3,2,"span",6),o.YNc(9,xe,2,0,"button",7),o.YNc(10,Ce,2,1,"button",8),o.qZA()(),o.TgZ(11,"form",9,10)(13,"div",2)(14,"div",11)(15,"label",12),o._uU(16,"Today Rate"),o.qZA(),o.TgZ(17,"input",13),o.NdJ("blur",function(){return r.doCalc()}),o.qZA()(),o.TgZ(18,"div",11)(19,"label",12),o._uU(20,"Weight (gm)"),o.qZA(),o.TgZ(21,"input",14),o.NdJ("blur",function(){return r.doCalc()}),o.qZA()(),o.TgZ(22,"div",11)(23,"label",12),o._uU(24,"Wastage"),o.qZA(),o.TgZ(25,"div",15)(26,"input",16),o.NdJ("blur",function(){return r.doCalc()}),o.qZA(),o.TgZ(27,"div",17)(28,"span",18),o._uU(29,"%"),o.qZA()()()()(),o._UZ(30,"hr"),o.TgZ(31,"legend",19),o._uU(32,"Details"),o.qZA(),o.TgZ(33,"div",2)(34,"div",20)(35,"label",12),o._uU(36,"Wastage Gms"),o.qZA(),o._UZ(37,"input",21),o.qZA(),o.TgZ(38,"div",20)(39,"label",12),o._uU(40,"Wastage Amount"),o.qZA(),o._UZ(41,"input",22),o.qZA(),o.TgZ(42,"div",23)(43,"label",12),o._uU(44,"Total Amount Without GST"),o.qZA(),o._UZ(45,"input",24),o.qZA(),o.TgZ(46,"div",23)(47,"label",12),o._uU(48,"Gst (3%)"),o.qZA(),o._UZ(49,"input",25),o.qZA(),o.TgZ(50,"div",23)(51,"label",12),o._uU(52,"Total Amount With GST"),o.qZA(),o._UZ(53,"input",26),o.qZA()(),o.TgZ(54,"div",2)(55,"legend"),o._uU(56,"Savaran/Kalanji"),o.qZA(),o.TgZ(57,"div",20)(58,"label",12),o._uU(59,"Poun/Savaran"),o.qZA(),o._UZ(60,"input",27),o.qZA(),o.TgZ(61,"div",20)(62,"label",12),o._uU(63,"Kalanji"),o.qZA(),o._UZ(64,"input",28),o.qZA()()()()()()()()),2&e&&(o.xp6(8),o.Q6J("ngIf",r.location.city),o.xp6(1),o.Q6J("ngIf",!r.hideMe),o.xp6(1),o.Q6J("ngIf",!r.hideMe),o.xp6(1),o.Q6J("formGroup",r.myForm),o.xp6(26),o.uIk("disabled",!0),o.xp6(4),o.uIk("disabled",!0),o.xp6(4),o.uIk("disabled",!0),o.xp6(4),o.uIk("disabled",!0),o.xp6(4),o.uIk("disabled",!0),o.xp6(7),o.uIk("disabled",!0),o.xp6(4),o.uIk("disabled",!0))},dependencies:[_.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.qQ,l.Fd,l.sg,l.u],styles:[".city[_ngcontent-%COMP%]{font-size:14px;margin-right:11px;color:brown}.card[_ngcontent-%COMP%]{background:aliceblue!important}"]}),t})()},{path:"history",component:It},{path:"password",component:At},{path:"**",redirectTo:"/"}];let Te=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[it.Bz.forChild(Se),it.Bz]}),t})(),Re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[_.ez,Te,l.u5,l.UX,C.IJ,rt.JF,C.IJ]}),t})()}}]);