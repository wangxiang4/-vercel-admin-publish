import{u as e,_ as t}from"./useTable.81787a2e.js";import{_ as a}from"./useForm.f93bccee.js";import{b as o}from"./index.1d3e54eb.js";import{c as i,s as n,_ as s}from"./DeptModal.vue_vue&type=script&setup=true&lang.30c83ae0.js";import{l as d,d as r}from"./dept.5ad51f22.js";import{aG as l,a7 as c}from"./index.6a5548ea.js";import{B as p,Z as u,bE as m,D as f,E as b,w as j,a2 as x,F as g,u as h,a9 as _}from"./vendor.7c679a32.js";import"./props.df8b9a2a.js";import"./const.ba9bd2e6.js";import"./useWindowSizeFn.bec912bd.js";import"./onMountedOrActivated.51a605f4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./dateUtil.839e4f2c.js";/* empty css              */import"./useSortable.7806d92e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.1c4a88d9.js";/* empty css              */import"./download.38a3a81a.js";import"./index.3b2c921a.js";const v=_("新增部门"),C=_("展开全部"),y=_("折叠全部");var w=p({setup(p){const{createMessage:_}=c(),[w,{openModal:T}]=o(),[k,{reload:M,expandAll:R,collapseAll:S,getDataSource:D}]=e({title:"部门列表",api:d,rowKey:"deptId",columns:i,formConfig:{labelWidth:120,schemas:n,autoSubmitOnEnter:!0,fieldMapToTime:[["dateRange",["beginTime","endTime"],"YYYY-MM-DD"]]},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:250,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1},afterFetch:e=>l(e,{id:"deptId"})});function F(e){T(!0,{_tag:"add",record:e})}function I(e){T(!0,{_tag:"edit",record:e})}function Y(e){return t=this,a=null,o=function*(){yield r(e.deptId),_.success("删除成功!"),A()},new Promise(((e,i)=>{var n=e=>{try{d(o.next(e))}catch(t){i(t)}},s=e=>{try{d(o.throw(e))}catch(t){i(t)}},d=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,s);d((o=o.apply(t,a)).next())}));var t,a,o}function A(){M()}return(e,o)=>{const i=u("a-button"),n=m("auth");return f(),b("div",null,[j(h(t),{onRegister:h(k)},{toolbar:x((()=>[g(j(i,{type:"primary",onClick:o[0]||(o[0]=e=>F())},{default:x((()=>[v])),_:1},512),[[n,["dept_add"]]]),j(i,{type:"default",onClick:h(R)},{default:x((()=>[C])),_:1},8,["onClick"]),j(i,{type:"default",onClick:h(S)},{default:x((()=>[y])),_:1},8,["onClick"])])),action:x((({record:e})=>[j(h(a),{actions:[{label:"编辑",icon:"fa6-regular:pen-to-square",auth:["dept_edit"],onClick:I.bind(null,e)},{label:"新增",icon:"ant-design:plus-circle-outlined",auth:["dept_add"],onClick:F.bind(null,e)},{label:"删除",icon:"ant-design:delete-outlined",auth:["dept_del"],color:"error",popConfirm:{title:"是否确认删除",confirm:Y.bind(null,e)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(s,{onRegister:h(w),onSuccess:A},null,8,["onRegister"])])}}});export{w as default};