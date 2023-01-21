var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,r=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&c(e,l,t[l]);if(n)for(var l of n(t))s.call(t,l)&&c(e,l,t[l]);return e},o=(e,n)=>t(e,l(n)),i=(e,t,l)=>new Promise(((n,a)=>{var s=e=>{try{r(l.next(e))}catch(t){a(t)}},c=e=>{try{r(l.throw(e))}catch(t){a(t)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,c);r((l=l.apply(e,t)).next())}));import{af as d,B as u,av as y,aw as h,ak as p,r as f,j as v,Q as k,R as b,z as K,A as m,Z as g,D as x,E as A,a3 as L,a8 as E,_ as S,a2 as C,a9 as _,J as w,w as N,a7 as I,ao as T,ay as j,bw as M,au as B,u as D,n as O,W as P,X as $,ae as R,bM as U,cA as V,aM as F,ad as H,N as X,t as Y,cG as G,o as z,ai as J,F as W,G as q,cq as Q,a1 as Z,an as ee,cg as te}from"./vendor.7c679a32.js";/* empty css              */import{a8 as le,_ as ne,ao as ae,p as se,c as ce,aI as re,aJ as oe,b as ie,ai as de,j as ue,aE as ye,S as he,aK as pe,ap as fe,r as ve}from"./index.6a5548ea.js";/* empty css              */const ke=({icon:e})=>e?le(e)?d(ne,{icon:e,class:"mr-1"}):ne:null;var be,Ke;(Ke=be||(be={}))[Ke.SELECT_ALL=0]="SELECT_ALL",Ke[Ke.UN_SELECT_ALL=1]="UN_SELECT_ALL",Ke[Ke.EXPAND_ALL=2]="EXPAND_ALL",Ke[Ke.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",Ke[Ke.CHECK_STRICTLY=4]="CHECK_STRICTLY",Ke[Ke.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY";var me=u({name:"BasicTreeHeader",components:{BasicTitle:ae,Icon:ne,Dropdown:y,Menu:h,MenuItem:h.Item,MenuDivider:h.Divider,InputSearch:p.Search},props:{helpMessage:{type:[String,Array],default:""},title:se.string,toolbar:se.bool,checkable:se.bool,search:se.bool,checkAll:se.func,expandAll:se.func,searchText:se.string},emits:["strictly-change","search"],setup(e,{emit:t}){const{t:l}=ce(),n=f(""),a=v((()=>{const{checkable:t}=e,n=[{label:l("component.tree.expandAll"),value:2},{label:l("component.tree.unExpandAll"),value:3,divider:t}];return t?[{label:l("component.tree.selectAll"),value:0},{label:l("component.tree.unSelectAll"),value:1,divider:t},...n,{label:l("component.tree.checkStrictly"),value:4},{label:l("component.tree.checkUnStrictly"),value:5}]:n}));const s=b((function(e){t("search",e)}),200);return k((()=>n.value),(e=>{s(e)})),k((()=>e.searchText),(e=>{e!==n.value&&(n.value=e)})),{t:l,toolbarList:a,handleMenuClick:function(l){var n,a,s,c;const{key:r}=l;switch(r){case 0:null==(n=e.checkAll)||n.call(e,!0);break;case 1:null==(a=e.checkAll)||a.call(e,!1);break;case 2:null==(s=e.expandAll)||s.call(e,!0);break;case 3:null==(c=e.expandAll)||c.call(e,!1);break;case 4:t("strictly-change",!1);break;case 5:t("strictly-change",!0)}},searchValue:n}}});K("data-v-31c839ae");const ge={class:"flex px-2 py-1.5 items-center basic-tree-header"},xe={key:2,class:"flex flex-1 justify-end items-center cursor-pointer"},Ae={key:0,class:"mr-1 w-2/3"};m(),me.render=function(e,t,l,n,a,s){const c=g("BasicTitle"),r=g("InputSearch"),o=g("Icon"),i=g("MenuItem"),d=g("MenuDivider"),u=g("Menu"),y=g("Dropdown");return x(),A("div",ge,[e.$slots.headerTitle?L(e.$slots,"headerTitle",{key:0},void 0,!0):E("",!0),!e.$slots.headerTitle&&e.title?(x(),S(c,{key:1,helpMessage:e.helpMessage},{default:C((()=>[_(w(e.title),1)])),_:1},8,["helpMessage"])):E("",!0),e.search||e.toolbar?(x(),A("div",xe,[e.search?(x(),A("div",Ae,[N(r,{value:e.searchValue,"onUpdate:value":t[0]||(t[0]=t=>e.searchValue=t),placeholder:e.t("common.searchText"),size:"small",allowClear:""},null,8,["value","placeholder"])])):E("",!0),e.toolbar?(x(),S(y,{key:1,onClick:t[1]||(t[1]=B((()=>{}),["prevent"]))},{overlay:C((()=>[N(u,{onClick:e.handleMenuClick},{default:C((()=>[(x(!0),A(I,null,T(e.toolbarList,(e=>(x(),A(I,{key:e.value},[N(i,j(M({key:e.value})),{default:C((()=>[_(w(e.label),1)])),_:2},1040),e.divider?(x(),S(d,{key:0})):E("",!0)],64)))),128))])),_:1},8,["onClick"])])),default:C((()=>[N(o,{icon:"ion:ellipsis-vertical"})])),_:1})):E("",!0)])):E("",!0)])},me.__scopeId="data-v-31c839ae";const Le={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},Ee=e=>{const{item:t}=e;return N("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&N(ne,{class:"mr-2",icon:t.icon},null),N("span",null,[t.label])])};var Se=u({name:"ContextMenu",props:Le,setup(e){const t=f(null),l=f(!1),n=v((()=>{const{axis:t,items:l,styles:n,width:a}=e,{x:s,y:c}=t||{x:0,y:0},i=40*(l||[]).length,d=a,u=document.body,y=u.clientWidth<s+d?s-d:s,h=u.clientHeight<c+i?c-i:c;return o(r({},n),{width:`${a}px`,left:`${y+1}px`,top:`${h+1}px`})}));function a(e,t){const{handler:n,disabled:a}=e;a||(l.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function s(t){return t.map((t=>{const{disabled:n,label:c,children:r,divider:o=!1}=t,i={item:t,handler:a,showIcon:e.showIcon};return r&&0!==r.length?D(l)?N(h.SubMenu,{key:c,disabled:n,popupClassName:"context-menu__popup"},{title:()=>N(Ee,i,null),default:()=>s(r)}):null:N(I,null,[N(h.Item,{disabled:n,class:"context-menu__item",key:c},{default:()=>[N(Ee,i,null)]}),o?N(U,{key:`d-${c}`},null):null])}))}return P((()=>{$((()=>l.value=!0))})),R((()=>{const e=D(t);e&&document.body.removeChild(e)})),()=>{let a;if(!D(l))return null;const{items:c}=e;return N(h,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:t,style:D(n)},"function"==typeof(r=a=s(c))||"[object Object]"===Object.prototype.toString.call(r)&&!V(r)?a:{default:()=>[a]});var r}}});const Ce={domList:[],resolve:()=>{}},_e=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),oe)return new Promise((l=>{const n=document.body,a=document.createElement("div"),s={};e.styles&&(s.styles=e.styles),e.items&&(s.items=e.items),e.event&&(s.customEvent=t,s.axis={x:t.clientX,y:t.clientY});const c=N(Se,s);F(c,a);const r=function(){Ce.resolve("")};Ce.domList.push(a);const o=function(){Ce.domList.forEach((e=>{try{e&&n.removeChild(e)}catch(t){}})),n.removeEventListener("click",r),n.removeEventListener("scroll",r)};Ce.resolve=function(e){o(),l(e)},o(),n.appendChild(a),n.addEventListener("click",r),n.addEventListener("scroll",r)}))},we=function(){Ce&&(Ce.resolve(""),Ce.domList=[])};var Ne=u({name:"BasicTree",inheritAttrs:!1,props:{value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:se.string,toolbar:se.bool,search:se.bool,searchValue:se.string,checkStrictly:se.bool,clickRowToExpand:se.bool.def(!0),checkable:se.bool.def(!1),defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:se.bool.def(!1),replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}},emits:["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],setup(e,{attrs:t,slots:l,emit:n,expose:a}){const s=X({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),c=X({startSearch:!1,searchData:[]}),d=f([]),[u]=function(e=!0){return H()&&e&&R((()=>{we()})),[_e,we]}(),{prefixCls:y}=ie("basic-tree"),h=v((()=>{const{replaceFields:t}=e;return r({children:"children",title:"title",key:"key"},t)})),p=v((()=>{let l=o(r(r({blockNode:!0},t),e),{expandedKeys:s.expandedKeys,selectedKeys:s.selectedKeys,checkedKeys:s.checkedKeys,checkStrictly:s.checkStrictly,replaceFields:D(h),"onUpdate:expandedKeys":e=>{s.expandedKeys=e,n("update:expandedKeys",e)},"onUpdate:selectedKeys":e=>{s.selectedKeys=e,n("update:selectedKeys",e)},onCheck:(e,t)=>{let l=Y(s.checkedKeys);if(de(l)&&c.startSearch){const{key:e}=D(h);l=G(l,S(t.node.$attrs.node[e])),t.checked&&l.push(t.node.$attrs.node[e]),s.checkedKeys=l}else s.checkedKeys=e;const a=Y(s.checkedKeys);n("update:value",a),n("check",a,t)},onRightClick:_});return z(l,"treeData","class")})),b=v((()=>c.startSearch?c.searchData:D(d))),K=v((()=>!b.value||0===b.value.length)),{deleteNodeByKey:m,insertNodeByKey:g,insertNodesByKey:x,filterByLevel:A,updateNodeByKey:L,getAllKeys:E,getChildrenKeys:S,getEnabledKeys:C}=function(e,t){function l(n){const a=[],s=n||D(e),{key:c,children:r}=D(t);if(!r||!c)return a;for(let e=0;e<s.length;e++){const t=s[e];a.push(t[c]);const n=t[r];n&&n.length&&a.push(...l(n))}return a}return{deleteNodeByKey:function l(n,a){if(!n)return;const s=a||D(e),{key:c,children:r}=D(t);if(r&&c)for(let e=0;e<s.length;e++){const t=s[e],a=t[r];if(t[c]===n){s.splice(e,1);break}a&&a.length&&l(n,t[r])}},insertNodeByKey:function({parentKey:l=null,node:n,push:a="push"}){const s=O(D(e));if(!l)return s[a](n),void(e.value=s);const{key:c,children:r}=D(t);r&&c&&(re(s,(e=>{if(e[c]===l)return e[r]=e[r]||[],e[r][a](n),!0})),e.value=s)},insertNodesByKey:function({parentKey:l=null,list:n,push:a="push"}){const s=O(D(e));if(n&&!(n.length<1))if(l){const{key:c,children:r}=D(t);if(!r||!c)return;re(s,(t=>{if(t[c]===l){t[r]=t[r]||[];for(let e=0;e<n.length;e++)t[r][a](n[e]);return e.value=s,!0}}))}else for(let e=0;e<n.length;e++)s[a](n[e])},filterByLevel:function l(n=1,a,s=1){if(!n)return[];const c=[],r=a||D(e)||[];for(let e=0;e<r.length;e++){const a=r[e],{key:o,children:i}=D(t),d=o?a[o]:"",u=i?a[i]:[];c.push(d),u&&u.length&&s<n&&(s+=1,c.push(...l(n,u,s)))}return c},updateNodeByKey:function l(n,a,s){if(!n)return;const c=s||D(e),{key:o,children:i}=D(t);if(i&&o)for(let e=0;e<c.length;e++){const t=c[e],s=t[i];if(t[o]===n){c[e]=r(r({},c[e]),a);break}s&&s.length&&l(n,a,t[i])}},getAllKeys:l,getChildrenKeys:function n(a,s){const c=[],r=s||D(e),{key:o,children:i}=D(t);if(!i||!o)return c;for(let e=0;e<r.length;e++){const t=r[e],s=t[i];a===t[o]?(c.push(t[o]),s&&s.length&&c.push(...l(s))):s&&s.length&&c.push(...n(a,s))}return c},getEnabledKeys:function l(n){const a=[],s=n||D(e),{key:c,children:r}=D(t);if(!r||!c)return a;for(let e=0;e<s.length;e++){const t=s[e];!0!==t.disabled&&!1!==t.selectable&&a.push(t[c]);const n=t[r];n&&n.length&&a.push(...l(n))}return a}}}(d,h);function _(t){return i(this,arguments,(function*({event:t,node:l}){var n;const{rightMenuList:a=[],beforeRightClick:s}=e;let c={event:t,items:[]};if(s&&ue(s)){let e=yield s(l,t);Array.isArray(e)?c.items=e:Object.assign(c,e)}else c.items=a;(null==(n=c.items)?void 0:n.length)&&u(c)}))}function w(e){s.expandedKeys=e}function T(e){s.checkedKeys=e?C():[]}function j(e){s.expandedKeys=e?E():[]}function M(e){s.checkStrictly=e}const B=f("");function $(e){if(e!==B.value&&(B.value=e),n("update:searchValue",e),!e)return void(c.startSearch=!1);c.startSearch=!0;const{title:t}=D(h);c.searchData=pe(D(d),(l=>{var n,a;return null!=(a=null==(n=l[t])?void 0:n.includes(e))&&a}),D(h))}function U(t,l){if(e.clickRowToExpand&&l&&0!==l.length)if(s.expandedKeys.includes(t)){const e=[...s.expandedKeys],l=e.findIndex((e=>e===t));-1!==l&&e.splice(l,1),w(e)}else w([...s.expandedKeys,t])}J((()=>{e.searchValue!==B.value&&(B.value=e.searchValue)})),J((()=>{d.value=e.treeData})),P((()=>{const t=parseInt(e.defaultExpandLevel);t>0?s.expandedKeys=A(t):e.defaultExpandAll&&j(!0)})),J((()=>{s.expandedKeys=e.expandedKeys})),J((()=>{s.selectedKeys=e.selectedKeys})),J((()=>{s.checkedKeys=e.checkedKeys})),k((()=>e.value),(()=>{s.checkedKeys=Y(e.value||[])})),k((()=>s.checkedKeys),(()=>{const e=Y(s.checkedKeys);n("update:value",e),n("change",e)})),J((()=>{s.checkStrictly=e.checkStrictly}));function F(t){const{actionList:l}=e;if(l&&0!==l.length)return l.map(((e,l)=>{var n;let a=!0;return ue(e.show)?a=null==(n=e.show)?void 0:n.call(e,t):ve(e.show)&&(a=e.show),a?N("span",{key:l,class:`${y}__action`},[e.render(t)]):null}))}function le({data:t,level:n}){return t?t.map((t=>{const{title:a,key:s,children:c}=D(h),i=z(t,"title"),d=function(t,l){return!l&&e.renderIcon&&ue(e.renderIcon)?e.renderIcon(t):l}(o(r({},t),{level:n}),t.icon),u=te(t,c)||[];return N(Q.TreeNode,Z(i,{node:Y(t),key:te(t,s)}),{title:()=>{var e;return N("span",{class:`${y}-title pl-2`,onClick:U.bind(null,t[s],t[c])},[(null==l?void 0:l.title)?fe(l,"title",t):N(I,null,[d&&N(ke,{icon:d},null),N("span",{class:(null==(e=D(p))?void 0:e.blockNode)?`${y}__content`:""},[te(t,a)]),N("span",{class:`${y}__actions`},[F(o(r({},t),{level:n}))])])])},default:()=>le({data:u,level:n+1})})})):null}return a({setExpandedKeys:w,getExpandedKeys:function(){return s.expandedKeys},setSelectedKeys:function(e){s.selectedKeys=e},getSelectedKeys:function(){return s.selectedKeys},setCheckedKeys:function(e){s.checkedKeys=e},getCheckedKeys:function(){return s.checkedKeys},insertNodeByKey:g,insertNodesByKey:x,deleteNodeByKey:m,updateNodeByKey:L,checkAll:T,expandAll:j,filterByLevel:e=>{s.expandedKeys=A(e)},setSearchValue:e=>{$(e)},getSearchValue:()=>B.value}),()=>{let n;const{title:a,helpMessage:s,toolbar:c,search:o,checkable:i}=e,d=a||c||o||l.headerTitle;return N("div",{class:[y,"h-full",t.class]},[d&&N(me,{checkable:i,checkAll:T,expandAll:j,title:a,search:o,toolbar:c,helpMessage:s,onStrictlyChange:M,onSearch:$,searchText:D(B)},(u=n=ye(l),"function"==typeof u||"[object Object]"===Object.prototype.toString.call(u)&&!V(u)?n:{default:()=>[n]})),W(N(he,{style:{height:"calc(100% - 38px)"}},{default:()=>[N(Q,Z(D(p),{showIcon:!1}),r({default:()=>le({data:D(b),level:1})},ye(l)))]}),[[q,!D(K)]]),W(N(ee,{image:ee.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[q,D(K)]])]);var u}}});export{Ne as _};