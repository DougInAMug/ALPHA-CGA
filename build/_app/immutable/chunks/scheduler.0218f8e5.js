var B=Object.defineProperty;var D=(t,n,e)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(D(t,typeof n!="symbol"?n+"":n,e),e);function O(){}function G(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function it(){return Object.create(null)}function F(t){t.forEach(z)}function lt(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let p;function ct(t,n){return t===n?!0:(p||(p=document.createElement("a")),p.href=n,t===p.href)}function st(t){return Object.keys(t).length===0}function M(t,...n){if(t==null){for(const i of n)i(void 0);return O}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t){let n;return M(t,e=>n=e)(),n}function ut(t,n,e){t.$$.on_destroy.push(M(n,e))}function at(t,n,e,i){if(t){const l=S(t,n,e,i);return t[0](l)}}function S(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const o=[],r=Math.max(n.dirty.length,l.length);for(let s=0;s<r;s+=1)o[s]=n.dirty[s]|l[s];return o}return n.dirty|l}return n.dirty}function _t(t,n,e,i,l,o){if(l){const r=S(n,e,i,o);t.p(r,l)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function pt(t){return t??""}let y=!1;function gt(){y=!0}function yt(){y=!1}function I(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(l>0&&n[e[l]].claim_order<=u?l+1:I(1,l,q=>n[e[q]].claim_order,u))-1;i[c]=e[a]+1;const w=a+1;e[w]=c,l=Math.max(w,l)}const o=[],r=[];let s=n.length-1;for(let c=e[l]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);s>=c;s--)r.push(n[s]);s--}for(;s>=0;s--)r.push(n[s]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(r[c],a)}}function W(t,n){if(y){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function J(t,n,e){t.insertBefore(n,e||null)}function K(t,n,e){y&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function C(t){return document.createElement(t)}function Q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function xt(){return T(" ")}function vt(){return T("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t){return t.dataset.svelteH}function Nt(t){return Array.from(t.childNodes)}function H(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,l=!1){H(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(n(s)){const c=e(s);return c===void 0?t.splice(r,1):t[r]=c,l||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(n(s)){const c=e(s);return c===void 0?t.splice(r,1):t[r]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function U(t,n,e,i){return j(t,l=>l.nodeName===n,l=>{const o=[];for(let r=0;r<l.attributes.length;r++){const s=l.attributes[r];e[s.name]||o.push(s.name)}o.forEach(r=>l.removeAttribute(r))},()=>i(n))}function At(t,n,e){return U(t,n,e,C)}function V(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function kt(t){return V(t," ")}function N(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function Lt(t,n){const e=N(t,"HTML_TAG_START",0),i=N(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new A(n);H(t);const l=t.splice(e,i-e+1);v(l[0]),v(l[l.length-1]);const o=l.slice(1,l.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(n,o)}function Mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function St(t,n){t.value=n??""}function Ct(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ht(t,n,e){t.classList.toggle(n,!!e)}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class Y{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=Q(e.nodeName):this.e=C(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)J(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class A extends Y{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)K(this.t,this.n[i],e)}}function jt(t,n){return new t(n)}let g;function b(t){g=t}function m(){if(!g)throw new Error("Function called outside component initialization");return g}function Pt(t){m().$$.on_mount.push(t)}function qt(t){m().$$.after_update.push(t)}function Bt(){const t=m();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const o=X(n,e,{cancelable:i});return l.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Dt(t,n){return m().$$.context.set(t,n),n}function Ot(t){return m().$$.context.get(t)}const h=[],k=[];let d=[];const L=[],P=Promise.resolve();let E=!1;function Z(){E||(E=!0,P.then(tt))}function Gt(){return Z(),P}function $(t){d.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const n=h[_];_++,b(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(b(null),h.length=0,_=0;k.length;)k.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];x.has(e)||(x.add(e),e())}d.length=0}while(h.length);for(;L.length;)L.pop()();E=!1,x.clear(),b(t)}function nt(t){if(t.fragment!==null){t.update(),F(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function zt(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{h as $,ut as A,ot as B,Ht as C,pt as D,Et as E,G as F,ht as G,St as H,F as I,A as J,Lt as K,bt as L,M,lt as N,mt as O,Ot as P,ct as Q,Bt as R,Dt as S,it as T,tt as U,st as V,$ as W,zt as X,g as Y,b as Z,z as _,xt as a,Z as a0,gt as a1,yt as a2,qt as b,kt as c,v as d,vt as e,C as f,At as g,Nt as h,K as i,Tt as j,Ct as k,T as l,V as m,Mt as n,Pt as o,k as p,jt as q,at as r,rt as s,Gt as t,wt as u,W as v,_t as w,dt as x,ft as y,O as z};
