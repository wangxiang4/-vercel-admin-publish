var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,a=(e,a)=>{for(var r in a||(a={}))n.call(a,r)&&o(e,r,a[r]);if(t)for(var r of t(a))l.call(a,r)&&o(e,r,a[r]);return e},r=(e,t,n)=>new Promise(((l,o)=>{var a=e=>{try{s(n.next(e))}catch(t){o(t)}},r=e=>{try{s(n.throw(e))}catch(t){o(t)}},s=e=>e.done?l(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,t)).next())}));import{c as s,r as i,j as c,aD as u,ae as f,p as d}from"./index.6a5548ea.js";import{P as h,a as y,R as p,b,c as g,F as m}from"./const.ba9bd2e6.js";import{r as w,ai as S,u as v,j as R,w as j,cC as F,cD as O,o as C,Q as x,X as P,t as H,R as z}from"./vendor.7c679a32.js";import{u as K}from"./useWindowSizeFn.bec912bd.js";import{u as I}from"./index.1d3e54eb.js";import{o as L}from"./onMountedOrActivated.51a605f4.js";function T({page:e,type:t,originalElement:n}){return"prev"===t?0===e?null:j(F,null,null):"next"===t?1===e?null:j(O,null,null):n}function A(e){const{t:t}=s(),n=w({}),l=w(!0);S((()=>{const{pagination:t}=v(e);!i(t)&&t&&(n.value=a(a({},v(n)),null!=t?t:{}))}));const o=R((()=>{const{pagination:o}=v(e);return!(!v(l)||i(o)&&!o)&&a(a({current:1,pageSize:h,size:"small",defaultPageSize:h,showTotal:e=>t("component.table.total",{total:e}),showSizeChanger:!0,pageSizeOptions:y,itemRender:T,showQuickJumper:!0},i(o)?{}:o),v(n))}));return{getPagination:function(){return v(o)},getPaginationInfo:o,setShowPagination:function(e){return r(this,null,(function*(){l.value=e}))},getShowPagination:function(){return v(l)},setPagination:function(e){const t=v(o);n.value=a(a({},i(t)?{}:t),e)}}}function D(e,t,n){const l=w([]),o=w([]),r=R((()=>{const{rowSelection:t}=v(e);return t?a({selectedRowKeys:v(l),hideDefaultSelections:!1,onChange:e=>{f(e)}},C(t,["onChange"])):null}));x((()=>{var t;return null==(t=v(e).rowSelection)?void 0:t.selectedRowKeys}),(e=>{f(e)})),x((()=>v(l)),(()=>{P((()=>{const{rowSelection:t}=v(e);if(t){const{onChange:e}=t;e&&c(e)&&e(d(),h())}n("selection-change",{keys:d(),rows:h()})}))}),{deep:!0});const s=R((()=>v(e).autoCreateKey&&!v(e).rowKey)),i=R((()=>{const{rowKey:t}=v(e);return v(s)?p:t}));function f(n){var a;l.value=n;const r=u(H(v(t)).concat(H(v(o))),(e=>n.includes(e[v(i)])),{children:null!=(a=e.value.childrenColumnName)?a:"children"}),s=[];n.forEach((e=>{const t=r.find((t=>t[v(i)]===e));t&&s.push(t)})),o.value=s}function d(){return v(l)}function h(){return v(o)}return{getRowSelection:function(){return v(r)},getRowSelectionRef:r,getSelectRows:h,getSelectRowKeys:d,setSelectedRowKeys:f,clearSelectedRowKeys:function(){o.value=[],l.value=[]},deleteSelectRowByKey:function(e){const t=v(l).findIndex((t=>t===e));-1!==t&&v(l).splice(t,1)},setSelectedRows:function(e){o.value=e}}}function N(e,t,n,l,o){const s=w(null),c=I(),u=z(h,100),d=R((()=>{const{canResize:t,scroll:n}=v(e);return t&&!(n||{}).y}));function h(){P((()=>{g()}))}let y,p,b;function g(){return r(this,null,(function*(){var n;const{resizeHeightOffset:l,pagination:a,maxHeight:r}=v(e),u=v(o),h=v(t);if(!h)return;const g=h.$el;if(!g)return;if(!b&&(b=g.querySelector(".ant-table-body"),!b))return;const m=b.scrollHeight>b.clientHeight,w=b.scrollWidth>b.clientWidth;if(m?g.classList.contains("hide-scrollbar-y")&&g.classList.remove("hide-scrollbar-y"):!g.classList.contains("hide-scrollbar-y")&&g.classList.add("hide-scrollbar-y"),w?g.classList.contains("hide-scrollbar-x")&&g.classList.remove("hide-scrollbar-x"):!g.classList.contains("hide-scrollbar-x")&&g.classList.add("hide-scrollbar-x"),b.style.height="unset",!v(d)||0===u.length)return;yield P();const S=g.querySelector(".ant-table-thead ");if(!S)return;const{bottomIncludeBody:R}=f(S);let j=2;if(i(a))j=-8;else if(y=g.querySelector(".ant-pagination"),y){j+=y.offsetHeight||0}else j+=24;let F=0;if(!i(a))if(p){F+=p.offsetHeight||0}else p=g.querySelector(".ant-table-footer");let O=0;S&&(O=S.offsetHeight);let C=R-(l||0)-32-j-F-O;C=null!=(n=C>r?r:C)?n:C,function(e){var t;s.value=e,null==(t=null==c?void 0:c.redoModalHeight)||t.call(c)}(C),b.style.height=`${C}px`}))}x((()=>{var e;return[v(d),null==(e=v(o))?void 0:e.length]}),(()=>{u()}),{flush:"post"}),K(g,280),L((()=>{g(),P((()=>{u()}))}));const m=R((()=>{var e,o;let a=0;v(l)&&(a+=60);const r=v(n).filter((e=>!e.defaultHidden));r.forEach((e=>{a+=Number.parseInt(e.width)||0}));const s=r.filter((e=>!Reflect.has(e,"width"))).length;0!==s&&(a+=150*s);const i=v(t);return(null!=(o=null==(e=null==i?void 0:i.$el)?void 0:e.offsetWidth)?o:0)>a?"100%":a}));return{getScrollRef:R((()=>{const t=v(s),{canResize:n,scroll:l}=v(e);return a({x:v(m),y:n?t:null,scrollToFirstRowOnChange:!1},l)})),redoHeight:h}}function q(e,t){return{getRowClassName:function(n,l){const{striped:o,rowClassName:a}=v(e);if(o)return a&&c(a)?a(n):(l||0)%2==1?`${t}-row__striped`:""}}}const E={clickToRowSelect:d.bool.def(!0),isTreeTable:d.bool.def(!1),tableSetting:d.shape({}),inset:d.bool,sortFn:{type:Function,default:b},filterFn:{type:Function,default:g},showTableSetting:d.bool,autoCreateKey:d.bool.def(!0),striped:d.bool.def(!0),showSummary:d.bool,summaryFunc:{type:[Function,Array],default:null},summaryData:{type:Array,default:null},indentSize:d.number.def(24),canColDrag:d.bool.def(!0),api:{type:Function,default:null},beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null},handleSearchInfoFn:{type:Function,default:null},fetchSetting:{type:Object,default:()=>m},immediate:d.bool.def(!0),emptyDataIsShowTable:d.bool.def(!0),searchInfo:{type:Object,default:null},useSearchForm:d.bool,formConfig:{type:Object,default:null},columns:{type:[Array],default:()=>[]},showIndexColumn:d.bool.def(!0),indexColumnProps:{type:Object,default:null},actionColumn:{type:Object,default:null},ellipsis:d.bool.def(!0),canResize:d.bool.def(!0),clearSelectOnPageChange:d.bool,resizeHeightOffset:d.number.def(0),rowSelection:{type:Object,default:null},title:{type:[String,Function],default:null},titleHelpMessage:{type:[String,Array]},maxHeight:d.number,dataSource:{type:Array,default:null},rowKey:{type:[String,Function],default:""},bordered:d.bool,pagination:{type:[Object,Boolean],default:null},loading:d.bool,rowClassName:{type:Function},scroll:{type:Object,default:null}};export{D as a,E as b,N as c,q as d,A as u};