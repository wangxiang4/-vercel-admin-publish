import{B as t,c2 as a,c6 as e,Z as s,D as i,_ as n,a2 as r,w as o,a9 as m,J as d,H as l,a1 as c}from"./vendor.7c679a32.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as u}from"./data.ff8b1ea8.js";import{_ as p}from"./index.6a5548ea.js";var f=t({components:{Card:a,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:p},setup:()=>({items:u})});const I=m("更多"),L=["innerHTML"];f.render=function(t,a,e,u,p,f){const j=s("a-button"),x=s("Icon"),_=s("ListItemMeta"),M=s("ListItem"),v=s("List"),z=s("Card");return i(),n(z,c({title:"最新动态"},t.$attrs),{extra:r((()=>[o(j,{type:"link",size:"small"},{default:r((()=>[I])),_:1})])),default:r((()=>[o(v,{"item-layout":"horizontal","data-source":t.items},{renderItem:r((({item:t})=>[o(M,null,{default:r((()=>[o(_,null,{description:r((()=>[m(d(t.date),1)])),title:r((()=>[m(d(t.name)+" ",1),l("span",{innerHTML:t.desc},null,8,L)])),avatar:r((()=>[o(x,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export{f as default};