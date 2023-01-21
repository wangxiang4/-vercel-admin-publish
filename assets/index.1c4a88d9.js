import{j as t,c as e,b as n,a9 as a}from"./index.6a5548ea.js";import{r as s,u,ab as o,B as r,aO as l,j as i,ai as c,Z as d,D as v,_ as f,a2 as p,a9 as m,J as y,a1 as b,ad as C,N as S,O as g,bU as x,X as w,t as h,az as z,ao as B,w as j,a3 as A,ay as F,bw as N}from"./vendor.7c679a32.js";var O=r({name:"CountButton",components:{Button:l},props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(n){const a=s(!1),{currentCount:r,isStart:l,start:d,reset:v}=function(t){const e=s(t),n=s(!1);let a;function r(){a&&window.clearInterval(a)}function l(){n.value=!1,r(),a=null}function i(){u(n)||a||(n.value=!0,a=setInterval((()=>{1===u(e)?(l(),e.value=t):e.value-=1}),1e3))}function c(){e.value=t,l()}return o((()=>{c()})),{start:i,reset:c,restart:function(){c(),i()},clear:r,stop:l,currentCount:e,isStart:n}}(n.count),{t:f}=e(),p=i((()=>u(l)?f("component.countdown.sendText",[u(r)]):f("component.countdown.normalText")));return c((()=>{void 0===n.value&&v()})),{handleStart:function(){return e=this,s=null,u=function*(){const{beforeStartFunc:e}=n;if(e&&t(e)){a.value=!0;try{(yield e())&&d()}finally{a.value=!1}}else d()},new Promise(((t,n)=>{var a=t=>{try{r(u.next(t))}catch(e){n(e)}},o=t=>{try{r(u.throw(t))}catch(e){n(e)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,o);r((u=u.apply(e,s)).next())}));var e,s,u},currentCount:r,loading:a,getButtonText:p,isStart:l}}});function T(t,e="value",n="change",a){const s=C(),o=null==s?void 0:s.emit,r=S({value:t[e]}),l=g(r);c((()=>{r.value=t[e]}));return[i({get:()=>r.value,set(t){x(t,l.value)||(r.value=t,w((()=>{null==o||o(n,t,...h(u(a))||[])})))}}),t=>{r.value=t},l]}O.render=function(t,e,n,a,s,u){const o=d("Button");return v(),f(o,b(t.$attrs,{disabled:t.isStart,loading:t.loading,onClick:t.handleStart}),{default:p((()=>[m(y(t.getButtonText),1)])),_:1},16,["disabled","loading","onClick"])};var $=r({name:"CountDownInput",components:{CountButton:O},inheritAttrs:!1,props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const{prefixCls:e}=n("countdown-input"),[a]=T(t);return{prefixCls:e,state:a}}});$.render=function(t,e,n,a,s,u){const o=d("CountButton"),r=d("a-input");return v(),f(r,b(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),z({addonAfter:p((()=>[j(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])])),_:2},[B(Object.keys(t.$slots).filter((t=>"addonAfter"!==t)),(e=>({name:e,fn:p((n=>[A(t.$slots,e,F(N(n||{})))]))})))]),1040,["class","size","value"])};const k=a($);a(O);export{k as C,T as u};