var Je=Object.defineProperty;var Ke=(s,e,t)=>e in s?Je(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var h=(s,e,t)=>(Ke(s,typeof e!="symbol"?e+"":e,t),t);import{I as Z,s as Be,r as Ue,f as b,a as H,g as v,h as C,d,c as P,j as _,J as ie,k as Le,K as ce,i as S,y as m,L as Oe,z as Ye,A as Qe,B as Xe,H as Ie,u as he,E as ue,M as De,G as ve,N as qe,l as T,m as O,n as x,O as Ze,e as Fe,P as xe,C as et}from"../chunks/scheduler.8aec7823.js";import{S as Ae,i as $e,a as F,t as I,b as G,d as M,m as q,e as V}from"../chunks/index.f82d2824.js";import{e as We}from"../chunks/each.e59479a4.js";import{w as se,d as X}from"../chunks/index.272f647c.js";const Ve=s=>s==null||s==="",tt=s=>!Ve(s),be=s=>{const e=s.toString();if(typeof s=="string")return{callback:t=>t[s],identifier:e,key:s};if(typeof s=="function")return{callback:s,identifier:e,key:void 0};throw new Error(`Invalid field argument: ${String(s)}`)},Ne={contains:(s,e)=>oe(s).indexOf(oe(e))>-1,startsWith:(s,e)=>oe(s).startsWith(oe(e)),endsWith:(s,e)=>oe(s).endsWith(oe(e)),isEqualTo:(s,e)=>oe(s)===oe(e),isGreaterThan:(s,e)=>_e(s)?!1:s>e,isGreaterThanOrEqualTo:(s,e)=>_e(s)?!1:s>=e,isLessThan:(s,e)=>_e(s)?!1:s<e,isLessThanOrEqualTo:(s,e)=>_e(s)?!1:s<=e,isBetween:(s,e)=>{if(_e(s))return!1;const[t,r]=e;return s>=t&&s<=r},isStrictlyBetween:(s,e)=>{if(_e(s))return!1;const[t,r]=e;return s>t&&s<r},isTrue:(s,e)=>s===!0,isFalse:(s,e)=>s===!1,isNull:(s,e)=>s==null,isNotNull:(s,e)=>s!=null,whereIn:(s,e=[])=>{if(_e(s)||e.length===0)return!1;for(const{value:t,comparator:r}of e)if(r(s,t))return!0;return!1}};function oe(s=null){return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function _e(s){if(s==null)return!0}class rt{constructor(){h(this,"events",{change:[],clearFilters:[],clearSearch:[]});h(this,"triggerChange",se(0))}add(e,t){this.events[e].push(t)}trigger(e){for(const t of this.events[e])t();e==="change"&&this.triggerChange.update(t=>t+1)}}class st{constructor(e,t){h(this,"event");h(this,"rowsPerPage");h(this,"pageNumber");h(this,"search");h(this,"filters");h(this,"filterCount");h(this,"rawRows");h(this,"filteredRows");h(this,"pagedRows");h(this,"rowCount");h(this,"pages");h(this,"pagesWithEllipsis");h(this,"pageCount");h(this,"sort");h(this,"selected");h(this,"selectScope");h(this,"isAllSelected");this.event=new rt,this.rowsPerPage=se(t.rowsPerPage),this.pageNumber=se(1),this.search=se({}),this.filters=se([]),this.filterCount=this.createFilterCount(),this.rawRows=se(e),this.filteredRows=this.createFilteredRows(),this.pagedRows=this.createPagedRows(),this.rowCount=this.createRowCount(),this.pages=this.createPages(),this.pagesWithEllipsis=this.createPagesWithEllipsis(),this.pageCount=this.createPageCount(),this.sort=se({}),this.selected=se([]),this.selectScope=se("all"),this.isAllSelected=this.createIsAllSelected()}createFilterCount(){return X(this.filters,e=>e.length)}createFilteredRows(){return X([this.rawRows,this.search,this.filters],([e,t,r])=>(t.value&&(e=e.filter(l=>(t.scope??Object.keys(l)).map(a=>{const{callback:g}=be(a);return g}).some(a=>this.match(a(l),t.value))),this.pageNumber.set(1),this.selected.set([]),this.event.trigger("change")),r.length>0&&(r.forEach(l=>e=e.filter(n=>{const i=l.callback(n);return this.match(i,l.value,l.comparator)})),this.pageNumber.set(1),this.selected.set([]),this.event.trigger("change")),e))}match(e,t,r=null){if(Ve(t))return!0;if(!e&&r)return r(e,t);if(e){if(typeof e=="object")return Object.keys(e).some(l=>this.match(e[l],t,r))}else return Ne.contains(e,t);return r?r(e,t):Ne.contains(e,t)}createPagedRows(){return X([this.filteredRows,this.rowsPerPage,this.pageNumber],([e,t,r])=>t?e.slice((r-1)*t,r*t):e)}createRowCount(){return X([this.filteredRows,this.pageNumber,this.rowsPerPage],([e,t,r])=>{const l=e.length;return r?{total:l,start:t*r-r+1,end:Math.min(t*r,e.length)}:{total:l,start:1,end:l}})}createPages(){return X([this.rowsPerPage,this.filteredRows],([e,t])=>e?Array.from(Array(Math.ceil(t.length/e))).map((l,n)=>n+1):[1])}createPagesWithEllipsis(){return X([this.pages,this.pageNumber],([e,t])=>{if(e.length<=7)return e;const r=null,l=1,n=e.length;return t<=4?[...e.slice(0,5),r,n]:t<e.length-3?[l,r,...e.slice(t-2,t+1),r,n]:[l,r,...e.slice(e.length-5,e.length)]})}createPageCount(){return X(this.pages,e=>e.length)}createIsAllSelected(){return X([this.selected,this.pagedRows,this.filteredRows,this.selectScope],([e,t,r,l])=>{const n=l==="currentPage"?t.length:r.length;return n===e.length&&n!==0})}}class lt{constructor(e){h(this,"rawRows");h(this,"event");h(this,"sort");h(this,"backup");this.rawRows=e.rawRows,this.event=e.event,this.sort=e.sort,this.backup=[]}set(e=null){if(!e)return;const t=Z(this.sort),{identifier:r}=be(e);t.identifier!==r&&this.sort.update(l=>l.direction=null),t.direction===null||t.direction==="desc"?this.asc(e):t.direction==="asc"&&this.desc(e)}asc(e,t="asc"){if(!e)return;const{identifier:r,callback:l,key:n}=be(e);this.sort.set({identifier:r,callback:l,direction:t,key:n}),this.rawRows.update(i=>(i.sort((a,g)=>{const[u,f]=[l(a),l(g)];return u===f?0:u===null?1:f===null?-1:typeof u=="boolean"?u===!1?1:-1:typeof u=="string"?u.localeCompare(f):typeof u=="number"?u-f:typeof u=="object"?JSON.stringify(u).localeCompare(JSON.stringify(f)):String(u).localeCompare(String(f))}),i)),this.log({identifier:r,callback:l,direction:t}),this.event.trigger("change")}desc(e,t="desc"){if(!e)return;const{identifier:r,callback:l,key:n}=be(e);this.sort.set({identifier:r,callback:l,direction:t,key:n}),this.rawRows.update(i=>(i.sort((a,g)=>{const[u,f]=[l(a),l(g)];return u===f?0:u===null?1:f===null?-1:typeof f=="boolean"?f===!1?1:-1:typeof f=="string"?f.localeCompare(u):typeof f=="number"?f-u:typeof f=="object"?JSON.stringify(f).localeCompare(JSON.stringify(u)):String(f).localeCompare(String(u))}),i)),this.log({identifier:r,callback:l,direction:t}),this.event.trigger("change")}apply(e=null){if(e)switch(e.direction){case"asc":return this.asc(e.orderBy);case"desc":return this.desc(e.orderBy);default:return this.set(e.orderBy)}else this.restore()}clear(){this.backup=[],this.sort.set({})}define(e,t="asc"){if(!e)return;const{identifier:r,callback:l,key:n}=be(e);this.sort.set({identifier:r,callback:l,direction:t,key:n})}restore(){for(const e of this.backup){const{key:t,callback:r,direction:l}=e,n=t??r;this[l](n)}}log(e){if(this.backup=this.backup.filter(t=>t.identifier!==e.identifier),this.backup.length>=3){const[t,r,l]=this.backup;this.backup=[r,l,e]}else this.backup=[...this.backup,e]}}class nt{constructor(e){h(this,"filteredRows");h(this,"pagedRows");h(this,"selected");h(this,"scope");h(this,"isAllSelected");h(this,"event");this.filteredRows=e.filteredRows,this.pagedRows=e.pagedRows,this.selected=e.selected,this.scope=e.selectScope,this.isAllSelected=e.isAllSelected,this.event=e.event}set(e){const t=Z(this.selected);t.includes(e)?this.selected.set(t.filter(r=>r!==e)):this.selected.set([e,...t])}all(e=null){if(Z(this.isAllSelected))return this.clear();const r=Z(this.scope),l=r==="currentPage"?Z(this.pagedRows):Z(this.filteredRows);r==="currentPage"&&this.event.add("change",()=>this.clear()),e?this.selected.set(l.map(n=>n[e])):this.selected.set(l)}clear(){this.selected.set([])}}class at{constructor(e){h(this,"pageNumber");h(this,"rowCount");h(this,"rowsPerPage");h(this,"event");this.pageNumber=e.pageNumber,this.rowCount=e.rowCount,this.rowsPerPage=e.rowsPerPage,this.event=e.event}goto(e){this.pageNumber.update(t=>{const r=Z(this.rowsPerPage);if(r){const l=Z(this.rowCount).total;e>=1&&e<=Math.ceil(l/r)&&(t=e,this.event.trigger("change"))}return t})}previous(){const e=Z(this.pageNumber)-1;this.goto(e)}next(){const e=Z(this.pageNumber)+1;this.goto(e)}}class it{constructor(e){h(this,"search");h(this,"event");this.search=e.search,this.event=e.event}set(e,t=null){this.search.update(r=>(r={value:e??"",scope:t??null},r))}clear(){this.search.set({value:null,scope:null}),this.event.trigger("change"),this.event.trigger("clearSearch")}}class ot{constructor(e){h(this,"filters");h(this,"event");h(this,"collection");this.filters=e.filters,this.event=e.event}set(e,t,r=null){const{callback:l,identifier:n,key:i}=be(t),a={value:e,identifier:n,callback:l,comparator:r,key:i};this.filters.update(g=>(g=g.filter(u=>u.identifier!==n),tt(e)&&g.push(a),g))}clear(){this.filters.set([]),this.event.trigger("change"),this.event.trigger("clearFilters")}get(){return this.collection?this.collection:(this.collection=this.createCollection(),this.collection)}createCollection(){return X(this.filters,e=>e.map(({value:t,callback:r,key:l,comparator:n})=>({value:t,filterBy:l??r,check:n?n.name:"contains"})))}}class ct{constructor(e,t,r){h(this,"filterHandler");h(this,"filterBy");h(this,"comparator");h(this,"callback");this.filterHandler=e,this.filterBy=t,this.comparator=r??Ne.contains,this.callback=()=>null}set(e,t){t&&(this.comparator=t),this.filterHandler.set(e,this.filterBy,this.comparator)}clear(){this.callback(),this.filterHandler.set(void 0,this.filterBy)}on(e,t){this.callback=t}}class ht{constructor(e,t){h(this,"filterHandler");h(this,"criteria");h(this,"filterBy");h(this,"selected");this.filterHandler=e,this.filterBy=t,this.criteria=[],this.selected=se([])}set(e,t=Ne.contains){if(this.criteria.find(r=>r.value===e)?this.criteria=this.criteria.filter(r=>r.value!==e):this.criteria=[{value:e,comparator:t},...this.criteria],this.criteria.length===0)return this.clear();this.filterHandler.set(this.criteria,this.filterBy,Ne.whereIn),this.selected.set(this.criteria.map(r=>r.value))}getSelected(){return this.selected}clear(){this.criteria=[],this.selected.set([]),this.filterHandler.set(void 0,this.filterBy,Ne.whereIn)}}class ut{constructor(e,t,r){h(this,"rawRows");h(this,"filteredRows");h(this,"callback");h(this,"precision");this.rawRows=e.rawRows,this.filteredRows=e.filteredRows,this.callback=be(t).callback,this.precision=r.precision}distinct(e=null){const r=Z(this.rawRows).map(i=>this.callback(i)),n=(e?e(r):r).reduce((i,a)=>(i[a]=(i[a]??0)+1,i),{});return Object.entries(n).map(([i,a])=>({value:i,count:a}))}avg(e=null){return X(this.filteredRows,t=>{if(t.length===0)return 0;const r=t.map(n=>this.callback(n)).filter(Boolean),l=e?e(r):r;return this.round(l.reduce((n,i)=>n+i,0)/l.length)})}sum(e=null){return X(this.filteredRows,t=>{const r=t.map(n=>this.callback(n)),l=e?e(r):r;return this.round(l.reduce((n,i)=>n+i,0))})}setPrecision(e){this.precision=e}round(e){if(this.precision===0)return Math.round(e);const t=Math.pow(10,this.precision);return Math.round((e+Number.EPSILON)*t)/t}}class ft{constructor(e=[],t={rowsPerPage:null}){h(this,"context");h(this,"sortHandler");h(this,"selectHandler");h(this,"pageHandler");h(this,"searchHandler");h(this,"filterHandler");h(this,"i18n");this.i18n=this.translate(t.i18n),this.context=new st(e,t),this.sortHandler=new lt(this.context),this.selectHandler=new nt(this.context),this.pageHandler=new at(this.context),this.searchHandler=new it(this.context),this.filterHandler=new ot(this.context)}setRows(e){this.context.rawRows.set(e),this.applySort()}getRows(){return this.context.pagedRows}getRowCount(){return this.context.rowCount}getRowsPerPage(){return this.context.rowsPerPage}getPages(e={ellipsis:!1}){return e.ellipsis?this.context.pagesWithEllipsis:this.context.pages}getPageCount(){return this.context.pageCount}getPageNumber(){return this.context.pageNumber}setPage(e){switch(e){case"previous":return this.pageHandler.previous();case"next":return this.pageHandler.next();default:return this.pageHandler.goto(e)}}search(e,t=null){this.searchHandler.set(e,t)}clearSearch(){this.searchHandler.clear()}sort(e){this.setPage(1),this.sortHandler.set(e)}sortAsc(e){this.setPage(1),this.sortHandler.asc(e)}sortDesc(e){this.setPage(1),this.sortHandler.desc(e)}getSort(){return this.context.sort}applySort(e=null){this.sortHandler.apply(e)}defineSort(e,t){this.sortHandler.define(e,t)}clearSort(){this.sortHandler.clear()}filter(e,t,r=null){this.filterHandler.set(e,t,r)}getFilters(){return this.filterHandler.get()}createFilter(e,t){return new ct(this.filterHandler,e,t)}createAdvancedFilter(e){return new ht(this.filterHandler,e)}getFilterCount(){return this.context.filterCount}clearFilters(){this.filterHandler.clear()}select(e){this.selectHandler.set(e)}getSelected(){return this.context.selected}selectAll(e={}){this.context.selectScope.set(e.scope==="currentPage"?"currentPage":"all"),this.selectHandler.all(e.selectBy??null)}isAllSelected(){return this.context.isAllSelected}on(e,t){this.context.event.add(e,t)}createCalculation(e,t=null){return new ut(this.context,e,{precision:(t==null?void 0:t.precision)??2})}translate(e){return{search:"Search...",show:"Show",entries:"entries",filter:"Filter",rowCount:"Showing {start} to {end} of {total} entries",noRows:"No entries found",previous:"Previous",next:"Next",...e}}update(e){console.log("%c%s","color:#e65100;background:#fff3e0;font-size:12px;border-radius:4px;padding:4px;text-align:center;","DataHandler.update(data) method is deprecated. Please use DataHandler.setRows(data) instead"),this.context.rawRows.set(e)}applySorting(e=null){this.applySort(e)}getSorted(){return this.getSort()}getTriggerChange(){return this.context.event.triggerChange}}function dt(s){let e,t,r,l,n,i,a,g,u;const f=s[8].default,k=Ue(f,s,s[7],null);return{c(){e=b("th"),t=b("div"),r=b("strong"),k&&k.c(),l=H(),n=b("span"),this.h()},l(o){e=v(o,"TH",{class:!0});var p=C(e);t=v(p,"DIV",{class:!0});var E=C(t);r=v(E,"STRONG",{class:!0});var A=C(r);k&&k.l(A),A.forEach(d),l=P(E),n=v(E,"SPAN",{class:!0}),C(n).forEach(d),E.forEach(d),p.forEach(d),this.h()},h(){_(r,"class","svelte-1311rr9"),_(n,"class","svelte-1311rr9"),ie(n,"asc",s[3].direction==="asc"),ie(n,"desc",s[3].direction==="desc"),_(t,"class","flex svelte-1311rr9"),Le(t,"justify-content",s[2]==="left"?"flex-start":s[2]==="right"?"flex-end":"center"),_(e,"class",i=ce(s[6].class??"")+" svelte-1311rr9"),ie(e,"sortable",s[1]),ie(e,"active",s[3].identifier===s[4])},m(o,p){S(o,e,p),m(e,t),m(t,r),k&&k.m(r,null),m(t,l),m(t,n),a=!0,g||(u=Oe(e,"click",s[9]),g=!0)},p(o,[p]){k&&k.p&&(!a||p&128)&&Ye(k,f,o,o[7],a?Xe(f,o[7],p,null):Qe(o[7]),null),(!a||p&8)&&ie(n,"asc",o[3].direction==="asc"),(!a||p&8)&&ie(n,"desc",o[3].direction==="desc"),p&4&&Le(t,"justify-content",o[2]==="left"?"flex-start":o[2]==="right"?"flex-end":"center"),(!a||p&64&&i!==(i=ce(o[6].class??"")+" svelte-1311rr9"))&&_(e,"class",i),(!a||p&66)&&ie(e,"sortable",o[1]),(!a||p&88)&&ie(e,"active",o[3].identifier===o[4])},i(o){a||(F(k,o),a=!0)},o(o){I(k,o),a=!1},d(o){o&&d(e),k&&k.d(o),g=!1,u()}}}function gt(s,e,t){let r,{$$slots:l={},$$scope:n}=e,{handler:i}=e,{orderBy:a}=e,{align:g="left"}=e;const u=a==null?void 0:a.toString(),f=i.getSort();Ie(s,f,o=>t(3,r=o));const k=()=>i.sort(a);return s.$$set=o=>{t(6,e=he(he({},e),ue(o))),"handler"in o&&t(0,i=o.handler),"orderBy"in o&&t(1,a=o.orderBy),"align"in o&&t(2,g=o.align),"$$scope"in o&&t(7,n=o.$$scope)},e=ue(e),[i,a,g,r,u,f,e,n,l,k]}class He extends Ae{constructor(e){super(),$e(this,e,gt,dt,Be,{handler:0,orderBy:1,align:2})}}function mt(s){let e,t,r,l,n,i;return{c(){e=b("th"),t=b("input"),this.h()},l(a){e=v(a,"TH",{class:!0});var g=C(e);t=v(g,"INPUT",{type:!0,placeholder:!0,spellcheck:!0,class:!0}),g.forEach(d),this.h()},h(){_(t,"type","text"),_(t,"placeholder",r=s[0].i18n.filter),_(t,"spellcheck","false"),_(t,"class","svelte-11i3j5h"),Le(t,"text-align",s[2]),_(e,"class",l=ce(s[5].class??"")+" svelte-11i3j5h")},m(a,g){S(a,e,g),m(e,t),De(t,s[4]),n||(i=[Oe(t,"input",s[6]),Oe(t,"input",s[7])],n=!0)},p(a,[g]){g&1&&r!==(r=a[0].i18n.filter)&&_(t,"placeholder",r),g&16&&t.value!==a[4]&&De(t,a[4]),g&4&&Le(t,"text-align",a[2]),g&32&&l!==(l=ce(a[5].class??"")+" svelte-11i3j5h")&&_(e,"class",l)},i:ve,o:ve,d(a){a&&d(e),n=!1,qe(i)}}}function pt(s,e,t){let{handler:r}=e,{filterBy:l}=e,{align:n="left"}=e,{comparator:i=null}=e,a="";r.on("clearFilters",()=>t(4,a=""));function g(){a=this.value,t(4,a)}const u=()=>r.filter(a,l,i);return s.$$set=f=>{t(5,e=he(he({},e),ue(f))),"handler"in f&&t(0,r=f.handler),"filterBy"in f&&t(1,l=f.filterBy),"align"in f&&t(2,n=f.align),"comparator"in f&&t(3,i=f.comparator)},e=ue(e),[r,l,n,i,a,e,g,u]}class Pe extends Ae{constructor(e){super(),$e(this,e,pt,mt,Be,{handler:0,filterBy:1,align:2,comparator:3})}}function _t(s){let e=s[0].i18n.noRows+"",t;return{c(){t=T(e)},l(r){t=O(r,e)},m(r,l){S(r,t,l)},p(r,l){l&1&&e!==(e=r[0].i18n.noRows+"")&&x(t,e)},d(r){r&&d(t)}}}function bt(s){let e,t=s[0].i18n.rowCount.replace("{start}",`<b>${s[2].start}</b>`).replace("{end}",`<b>${s[2].end}</b>`).replace("{total}",`<b>${s[2].total}</b>`)+"",r;return{c(){e=new Ze(!1),r=Fe(),this.h()},l(l){e=xe(l,!1),r=Fe(),this.h()},h(){e.a=r},m(l,n){e.m(t,l,n),S(l,r,n)},p(l,n){n&5&&t!==(t=l[0].i18n.rowCount.replace("{start}",`<b>${l[2].start}</b>`).replace("{end}",`<b>${l[2].end}</b>`).replace("{total}",`<b>${l[2].total}</b>`)+"")&&e.p(t)},d(l){l&&(d(r),e.d())}}}function vt(s){let e;function t(n,i){return n[2].total>0?wt:kt}let r=t(s),l=r(s);return{c(){l.c(),e=Fe()},l(n){l.l(n),e=Fe()},m(n,i){l.m(n,i),S(n,e,i)},p(n,i){r===(r=t(n))&&l?l.p(n,i):(l.d(1),l=r(n),l&&(l.c(),l.m(e.parentNode,e)))},d(n){n&&d(e),l.d(n)}}}function kt(s){let e=s[0].i18n.noRows+"",t;return{c(){t=T(e)},l(r){t=O(r,e)},m(r,l){S(r,t,l)},p(r,l){l&1&&e!==(e=r[0].i18n.noRows+"")&&x(t,e)},d(r){r&&d(t)}}}function wt(s){let e,t=s[2].start+"",r,l,n,i=s[2].end+"",a,g,u,f=s[2].total+"",k;return{c(){e=b("b"),r=T(t),l=T(`-\r
            `),n=b("b"),a=T(i),g=T(`/\r
            `),u=b("b"),k=T(f)},l(o){e=v(o,"B",{});var p=C(e);r=O(p,t),p.forEach(d),l=O(o,`-\r
            `),n=v(o,"B",{});var E=C(n);a=O(E,i),E.forEach(d),g=O(o,`/\r
            `),u=v(o,"B",{});var A=C(u);k=O(A,f),A.forEach(d)},m(o,p){S(o,e,p),m(e,r),S(o,l,p),S(o,n,p),m(n,a),S(o,g,p),S(o,u,p),m(u,k)},p(o,p){p&4&&t!==(t=o[2].start+"")&&x(r,t),p&4&&i!==(i=o[2].end+"")&&x(a,i),p&4&&f!==(f=o[2].total+"")&&x(k,f)},d(o){o&&(d(e),d(l),d(n),d(g),d(u))}}}function Ct(s){let e,t;function r(i,a){return i[1]?vt:i[2].total>0?bt:_t}let l=r(s),n=l(s);return{c(){e=b("aside"),n.c(),this.h()},l(i){e=v(i,"ASIDE",{class:!0});var a=C(e);n.l(a),a.forEach(d),this.h()},h(){_(e,"class",t=ce(s[4].class??"")+" svelte-1tjrquk")},m(i,a){S(i,e,a),n.m(e,null)},p(i,[a]){l===(l=r(i))&&n?n.p(i,a):(n.d(1),n=l(i),n&&(n.c(),n.m(e,null))),a&16&&t!==(t=ce(i[4].class??"")+" svelte-1tjrquk")&&_(e,"class",t)},i:ve,o:ve,d(i){i&&d(e),n.d()}}}function St(s,e,t){let r,{handler:l}=e,{small:n=!1}=e;const i=l.getRowCount();return Ie(s,i,a=>t(2,r=a)),s.$$set=a=>{t(4,e=he(he({},e),ue(a))),"handler"in a&&t(0,l=a.handler),"small"in a&&t(1,n=a.small)},e=ue(e),[l,n,r,i,e]}class Rt extends Ae{constructor(e){super(),$e(this,e,St,Ct,Be,{handler:0,small:1})}}function Et(s){let e,t,r,l,n;return{c(){e=b("input"),this.h()},l(i){e=v(i,"INPUT",{class:!0,placeholder:!0,spellcheck:!0}),this.h()},h(){_(e,"class",t=ce(s[2].class??"")+" svelte-ykkz3r"),_(e,"placeholder",r=s[0].i18n.search),_(e,"spellcheck","false")},m(i,a){S(i,e,a),De(e,s[1]),l||(n=[Oe(e,"input",s[3]),Oe(e,"input",s[4])],l=!0)},p(i,[a]){a&4&&t!==(t=ce(i[2].class??"")+" svelte-ykkz3r")&&_(e,"class",t),a&1&&r!==(r=i[0].i18n.search)&&_(e,"placeholder",r),a&2&&e.value!==i[1]&&De(e,i[1])},i:ve,o:ve,d(i){i&&d(e),l=!1,qe(n)}}}function yt(s,e,t){let{handler:r}=e,l="";r.on("clearSearch",()=>t(1,l=""));function n(){l=this.value,t(1,l)}const i=()=>r.search(l);return s.$$set=a=>{t(2,e=he(he({},e),ue(a))),"handler"in a&&t(0,r=a.handler)},e=ue(e),[r,l,e,n,i]}class Ht extends Ae{constructor(e){super(),$e(this,e,yt,Et,Be,{handler:0})}}const Pt=[{organizationName:"Ökodorf Sieben Linden",artefactTitle:"Entscheidungsfindung",artefactLink:"https://siebenlinden.org/de/oekodorf/soziales/entscheidungsfindung/",language:"DE",numberOfCharacters:4444,lastChecked:"2023-09-19"},{organizationName:"East Lake Commons",artefactTitle:"The Book of Commons",artefactLink:"https://www.eastlakecommons.org/Documents/Public/BOC_Public.pdf",language:"EN",numberOfCharacters:44896,lastChecked:"2023-09-19"},{organizationName:"Kanthaus",artefactTitle:"Constitution",artefactLink:"https://kanthaus.online/en/governance/constitution",language:"EN",numberOfCharacters:15092,lastChecked:"2023-09-14"},{organizationName:"Kanthaus",artefactTitle:"Verfassung",artefactLink:"https://kanthaus.online/de/governance/constitution",translationOf:"Constitution",translationOfLink:"https://kanthaus.online/en/governance/constitution",language:"DE",numberOfCharacters:17327,lastChecked:"2023-09-14"},{organizationName:"Kanthaus",artefactTitle:"Collective Agreements",artefactLink:"https://kanthaus.online/en/governance/collectiveagreements",language:"EN",numberOfCharacters:4385,lastChecked:"2023-09-14"},{organizationName:"Kanthaus",artefactTitle:"Gemeinschaftliche Vereinbarungen",artefactLink:"https://kanthaus.online/de/governance/collectiveagreements",translationOf:"Collective Agreements",translationOfLink:"https://kanthaus.online/en/governance/collectiveagreements",language:"DE",numberOfCharacters:5280,lastChecked:"2023-09-14"},{organizationName:"S14",artefactTitle:"(no title)",artefactLink:"https://www.ooooo.be/etherhtml/e2h.php?_=S14",language:"EN",numberOfCharacters:20292,lastChecked:"2023-09-14"},{organizationName:"Schwarz 10",artefactTitle:"Task Auction",artefactLink:"http://schwarz10.de/taskauction/index.html",language:"EN",numberOfCharacters:5393,lastChecked:"2023-09-14"},{organizationName:"Schwarz 10",artefactTitle:"Wahlbörse",artefactLink:"http://schwarz10.de/wahlboerse/index.html",language:"EN",numberOfCharacters:2732,lastChecked:"2023-09-14"}];function Ge(s,e,t){const r=s.slice();return r[3]=e[t],r}function Nt(s){let e;return{c(){e=T("Organization name")},l(t){e=O(t,"Organization name")},m(t,r){S(t,e,r)},d(t){t&&d(e)}}}function Tt(s){let e;return{c(){e=T("Artefact title")},l(t){e=O(t,"Artefact title")},m(t,r){S(t,e,r)},d(t){t&&d(e)}}}function Ot(s){let e;return{c(){e=T("Translated from")},l(t){e=O(t,"Translated from")},m(t,r){S(t,e,r)},d(t){t&&d(e)}}}function Bt(s){let e;return{c(){e=T("Language")},l(t){e=O(t,"Language")},m(t,r){S(t,e,r)},d(t){t&&d(e)}}}function At(s){let e;return{c(){e=T("Number of characters")},l(t){e=O(t,"Number of characters")},m(t,r){S(t,e,r)},d(t){t&&d(e)}}}function $t(s){let e;return{c(){e=T("Last checked on")},l(t){e=O(t,"Last checked on")},m(t,r){S(t,e,r)},d(t){t&&d(e)}}}function jt(s){let e;return{c(){e=T("—")},l(t){e=O(t,"—")},m(t,r){S(t,e,r)},p:ve,d(t){t&&d(e)}}}function zt(s){let e=s[3].translationOf+"",t;return{c(){t=T(e)},l(r){t=O(r,e)},m(r,l){S(r,t,l)},p(r,l){l&1&&e!==(e=r[3].translationOf+"")&&x(t,e)},d(r){r&&d(t)}}}function Me(s){let e,t,r=s[3].organizationName+"",l,n,i,a,g=s[3].artefactTitle+"",u,f,k,o,p,E,A=s[3].language+"",J,fe,$,le=s[3].numberOfCharacters+"",K,de,N,U=s[3].lastChecked+"",ne,Q;function ke(R,w){return R[3].translationOf?zt:jt}let Y=ke(s),j=Y(s);return{c(){e=b("tr"),t=b("td"),l=T(r),n=H(),i=b("td"),a=b("a"),u=T(g),k=H(),o=b("td"),j.c(),p=H(),E=b("td"),J=T(A),fe=H(),$=b("td"),K=T(le),de=H(),N=b("td"),ne=T(U),Q=H(),this.h()},l(R){e=v(R,"TR",{class:!0});var w=C(e);t=v(w,"TD",{class:!0});var ee=C(t);l=O(ee,r),ee.forEach(d),n=P(w),i=v(w,"TD",{class:!0});var we=C(i);a=v(we,"A",{href:!0});var te=C(a);u=O(te,g),te.forEach(d),we.forEach(d),k=P(w),o=v(w,"TD",{class:!0});var Ce=C(o);j.l(Ce),Ce.forEach(d),p=P(w),E=v(w,"TD",{class:!0});var re=C(E);J=O(re,A),re.forEach(d),fe=P(w),$=v(w,"TD",{class:!0});var Se=C($);K=O(Se,le),Se.forEach(d),de=P(w),N=v(w,"TD",{class:!0});var ae=C(N);ne=O(ae,U),ae.forEach(d),Q=P(w),w.forEach(d),this.h()},h(){_(t,"class","svelte-b1klpj"),_(a,"href",f=s[3].artefactLink),_(i,"class","svelte-b1klpj"),_(o,"class","svelte-b1klpj"),_(E,"class","svelte-b1klpj"),_($,"class","svelte-b1klpj"),_(N,"class","svelte-b1klpj"),_(e,"class","svelte-b1klpj")},m(R,w){S(R,e,w),m(e,t),m(t,l),m(e,n),m(e,i),m(i,a),m(a,u),m(e,k),m(e,o),j.m(o,null),m(e,p),m(e,E),m(E,J),m(e,fe),m(e,$),m($,K),m(e,de),m(e,N),m(N,ne),m(e,Q)},p(R,w){w&1&&r!==(r=R[3].organizationName+"")&&x(l,r),w&1&&g!==(g=R[3].artefactTitle+"")&&x(u,g),w&1&&f!==(f=R[3].artefactLink)&&_(a,"href",f),Y===(Y=ke(R))&&j?j.p(R,w):(j.d(1),j=Y(R),j&&(j.c(),j.m(o,null))),w&1&&A!==(A=R[3].language+"")&&x(J,A),w&1&&le!==(le=R[3].numberOfCharacters+"")&&x(K,le),w&1&&U!==(U=R[3].lastChecked+"")&&x(ne,U)},d(R){R&&d(e),j.d()}}}function Lt(s){let e,t,r,l,n,i,a,g,u,f,k,o,p,E,A,J,fe,$,le,K,de,N,U,ne,Q,ke,Y,j,R,w,ee,we,te,Ce,re,Se,ae,je,Re,ge,ze;t=new Ht({props:{handler:s[1],class:"searchBar"}}),f=new He({props:{handler:s[1],orderBy:"organizationName",$$slots:{default:[Nt]},$$scope:{ctx:s}}}),o=new He({props:{handler:s[1],orderBy:"artefactTitle",$$slots:{default:[Tt]},$$scope:{ctx:s}}}),E=new He({props:{handler:s[1],orderBy:"translationOf",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),J=new He({props:{handler:s[1],orderBy:"language",$$slots:{default:[Bt]},$$scope:{ctx:s}}}),$=new He({props:{handler:s[1],orderBy:"numberOfCharacters",$$slots:{default:[At]},$$scope:{ctx:s}}}),K=new He({props:{handler:s[1],orderBy:"lastChecked",$$slots:{default:[$t]},$$scope:{ctx:s}}}),U=new Pe({props:{handler:s[1],filterBy:"organizationName"}}),Q=new Pe({props:{handler:s[1],filterBy:"artefactTitle"}}),Y=new Pe({props:{handler:s[1],filterBy:"translationOf"}}),R=new Pe({props:{handler:s[1],filterBy:"language"}}),ee=new Pe({props:{handler:s[1],filterBy:"numberOfCharacters"}}),te=new Pe({props:{handler:s[1],filterBy:"lastChecked"}});let Ee=We(s[0]),B=[];for(let c=0;c<Ee.length;c+=1)B[c]=Me(Ge(s,Ee,c));return ge=new Rt({props:{handler:s[1]}}),{c(){e=b("header"),G(t.$$.fragment),r=H(),l=b("div"),n=b("div"),i=H(),a=b("table"),g=b("thead"),u=b("tr"),G(f.$$.fragment),k=H(),G(o.$$.fragment),p=H(),G(E.$$.fragment),A=H(),G(J.$$.fragment),fe=H(),G($.$$.fragment),le=H(),G(K.$$.fragment),de=H(),N=b("tr"),G(U.$$.fragment),ne=H(),G(Q.$$.fragment),ke=H(),G(Y.$$.fragment),j=H(),G(R.$$.fragment),w=H(),G(ee.$$.fragment),we=H(),G(te.$$.fragment),Ce=H(),re=b("tbody");for(let c=0;c<B.length;c+=1)B[c].c();Se=H(),ae=b("div"),je=H(),Re=b("footer"),G(ge.$$.fragment),this.h()},l(c){e=v(c,"HEADER",{class:!0});var y=C(e);M(t.$$.fragment,y),y.forEach(d),r=P(c),l=v(c,"DIV",{class:!0});var W=C(l);n=v(W,"DIV",{class:!0}),C(n).forEach(d),i=P(W),a=v(W,"TABLE",{class:!0});var me=C(a);g=v(me,"THEAD",{});var pe=C(g);u=v(pe,"TR",{});var z=C(u);M(f.$$.fragment,z),k=P(z),M(o.$$.fragment,z),p=P(z),M(E.$$.fragment,z),A=P(z),M(J.$$.fragment,z),fe=P(z),M($.$$.fragment,z),le=P(z),M(K.$$.fragment,z),z.forEach(d),de=P(pe),N=v(pe,"TR",{});var L=C(N);M(U.$$.fragment,L),ne=P(L),M(Q.$$.fragment,L),ke=P(L),M(Y.$$.fragment,L),j=P(L),M(R.$$.fragment,L),w=P(L),M(ee.$$.fragment,L),we=P(L),M(te.$$.fragment,L),L.forEach(d),pe.forEach(d),Ce=P(me),re=v(me,"TBODY",{class:!0});var Te=C(re);for(let ye=0;ye<B.length;ye+=1)B[ye].l(Te);Te.forEach(d),me.forEach(d),Se=P(W),ae=v(W,"DIV",{class:!0}),C(ae).forEach(d),W.forEach(d),je=P(c),Re=v(c,"FOOTER",{});var D=C(Re);M(ge.$$.fragment,D),D.forEach(d),this.h()},h(){_(e,"class","mb1 svelte-b1klpj"),_(n,"class","flexGrower svelte-b1klpj"),_(re,"class","svelte-b1klpj"),_(a,"class","mb1 svelte-b1klpj"),_(ae,"class","flexGrower svelte-b1klpj"),_(l,"class","tableContainer svelte-b1klpj")},m(c,y){S(c,e,y),q(t,e,null),S(c,r,y),S(c,l,y),m(l,n),m(l,i),m(l,a),m(a,g),m(g,u),q(f,u,null),m(u,k),q(o,u,null),m(u,p),q(E,u,null),m(u,A),q(J,u,null),m(u,fe),q($,u,null),m(u,le),q(K,u,null),m(g,de),m(g,N),q(U,N,null),m(N,ne),q(Q,N,null),m(N,ke),q(Y,N,null),m(N,j),q(R,N,null),m(N,w),q(ee,N,null),m(N,we),q(te,N,null),m(a,Ce),m(a,re);for(let W=0;W<B.length;W+=1)B[W]&&B[W].m(re,null);m(l,Se),m(l,ae),S(c,je,y),S(c,Re,y),q(ge,Re,null),ze=!0},p(c,[y]){const W={};y&64&&(W.$$scope={dirty:y,ctx:c}),f.$set(W);const me={};y&64&&(me.$$scope={dirty:y,ctx:c}),o.$set(me);const pe={};y&64&&(pe.$$scope={dirty:y,ctx:c}),E.$set(pe);const z={};y&64&&(z.$$scope={dirty:y,ctx:c}),J.$set(z);const L={};y&64&&(L.$$scope={dirty:y,ctx:c}),$.$set(L);const Te={};if(y&64&&(Te.$$scope={dirty:y,ctx:c}),K.$set(Te),y&1){Ee=We(c[0]);let D;for(D=0;D<Ee.length;D+=1){const ye=Ge(c,Ee,D);B[D]?B[D].p(ye,y):(B[D]=Me(ye),B[D].c(),B[D].m(re,null))}for(;D<B.length;D+=1)B[D].d(1);B.length=Ee.length}},i(c){ze||(F(t.$$.fragment,c),F(f.$$.fragment,c),F(o.$$.fragment,c),F(E.$$.fragment,c),F(J.$$.fragment,c),F($.$$.fragment,c),F(K.$$.fragment,c),F(U.$$.fragment,c),F(Q.$$.fragment,c),F(Y.$$.fragment,c),F(R.$$.fragment,c),F(ee.$$.fragment,c),F(te.$$.fragment,c),F(ge.$$.fragment,c),ze=!0)},o(c){I(t.$$.fragment,c),I(f.$$.fragment,c),I(o.$$.fragment,c),I(E.$$.fragment,c),I(J.$$.fragment,c),I($.$$.fragment,c),I(K.$$.fragment,c),I(U.$$.fragment,c),I(Q.$$.fragment,c),I(Y.$$.fragment,c),I(R.$$.fragment,c),I(ee.$$.fragment,c),I(te.$$.fragment,c),I(ge.$$.fragment,c),ze=!1},d(c){c&&(d(e),d(r),d(l),d(je),d(Re)),V(t),V(f),V(o),V(E),V(J),V($),V(K),V(U),V(Q),V(Y),V(R),V(ee),V(te),et(B,c),V(ge)}}}function Dt(s,e,t){let r;const l=new ft(Pt,{rowsPerPage:50}),n=l.getRows();return Ie(s,n,i=>t(0,r=i)),[r,l,n]}class qt extends Ae{constructor(e){super(),$e(this,e,Dt,Lt,Be,{})}}export{qt as component};
