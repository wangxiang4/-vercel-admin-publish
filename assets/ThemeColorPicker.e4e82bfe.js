import{b as e}from"./index.6a5548ea.js";import{b as s}from"./index.744cfd1d.js";import{B as i,cf as t,Z as r,D as n,E as o,a7 as a,ao as d,K as c,U as p,w as l}from"./vendor.7c679a32.js";import"./index.32a4a07a.js";/* empty css              *//* empty css              */import"./index.d6af9fdd.js";import"./index.9c1492dc.js";import"./useWindowSizeFn.bec912bd.js";import"./useContentViewHeight.656bb523.js";/* empty css              */import"./useSortable.7806d92e.js";import"./lock.dd301a8d.js";var m=i({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(i){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){i.event&&s(i.event,e)}}}});const f=["onClick"];m.render=function(e,s,i,t,m,u){const x=r("CheckOutlined");return n(),o("div",{class:c(e.prefixCls)},[(n(!0),o(a,null,d(e.colorList||[],(s=>(n(),o("span",{key:s,class:c([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===s}]),style:p({background:s}),onClick:i=>e.handleClick(s)},[l(x)],14,f)))),128))],2)};export{m as default};