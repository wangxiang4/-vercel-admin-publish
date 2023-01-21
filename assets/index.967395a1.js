var e=(e,t,a)=>new Promise(((n,s)=>{var o=e=>{try{r(a.next(e))}catch(t){s(t)}},i=e=>{try{r(a.throw(e))}catch(t){s(t)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);r((a=a.apply(e,t)).next())}));import{_ as t,u as a}from"./useTable.81787a2e.js";import{_ as n}from"./useForm.f93bccee.js";import{aR as s,aS as o,a7 as i}from"./index.6a5548ea.js";import{_ as r}from"./ResetPwdModal.vue_vue&type=script&setup=true&lang.66fc88c7.js";import{P as d}from"./index.8967a476.js";import l from"./DeptTree.2a3e32ac.js";import{b as c}from"./index.1d3e54eb.js";import{_ as u,c as p,s as m}from"./UserModal.691d97ab.js";import{B as f,N as h,t as b,Z as g,bE as j,D as x,_ as w,a2 as S,w as R,F as T,a9 as _}from"./vendor.7c679a32.js";import"./props.df8b9a2a.js";import"./const.ba9bd2e6.js";import"./useWindowSizeFn.bec912bd.js";import"./onMountedOrActivated.51a605f4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./dateUtil.839e4f2c.js";/* empty css              */import"./useSortable.7806d92e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.1c4a88d9.js";/* empty css              */import"./download.38a3a81a.js";import"./index.3b2c921a.js";/* empty css              *//* empty css              */import"./useContentViewHeight.656bb523.js";import"./Tree.vue_vue&type=style&index=0&lang.a6d5c734.js";import"./dept.5ad51f22.js";import"./role.33dd7932.js";var y=f({name:"UserManagement",components:{BasicTable:t,PageWrapper:d,DeptTree:l,TableAction:n,UserModal:u,ResetPwdModal:r},setup(){const t=h({ids:[],single:!0,multiple:!0,searchInfo:{}}),{createConfirm:n,createMessage:r}=i(),[d,{openModal:l}]=c(),[u,{openModal:f}]=c(),[g,{reload:j,clearSelectedRowKeys:x}]=a({title:"用户列表",api:s,rowKey:"id",columns:p,formConfig:{labelWidth:120,schemas:m,autoSubmitOnEnter:!0,fieldMapToTime:[["dateRange",["beginTime","endTime"],"YYYY-MM-DD"]]},rowSelection:{type:"checkbox"},useSearchForm:!0,showTableSetting:!0,bordered:!0,clickToRowSelect:!1,showIndexColumn:!1,searchInfo:t.searchInfo,actionColumn:{width:220,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1},handleSearchInfoFn:()=>x()});function w(){x(),j()}return{state:t,registerTable:g,registerModal:d,registerResetPwdModal:u,handleAdd:function(){l(!0,{_tag:"add"})},handleEdit:function(e){e=e||{id:b(t.ids)},l(!0,{_tag:"edit",record:e})},handleDel:function(a){return e(this,null,(function*(){const s=(null==a?void 0:a.id)||b(t.ids);n({iconType:"warning",title:"警告",content:`是否确认删除用户编号为${s}用户吗?`,onOk:()=>e(this,null,(function*(){yield o(s),r.success("删除成功!"),w()}))})}))},handleSelectionChange:function(e){const a=b(null==e?void 0:e.keys)||[];t.ids=a,t.single=1!=a.length,t.multiple=!a.length},handleRefreshTable:w,handleSelect:function(e){t.searchInfo.deptId=e,w()},handleResetPassword:function(e){e=e||{id:b(t.ids)},f(!0,{record:e})}}}});const M=_("新增用户"),C=_("修改用户"),v=_("删除用户");y.render=function(e,t,a,n,s,o){const i=g("DeptTree"),r=g("a-button"),d=g("TableAction"),l=g("BasicTable"),c=g("UserModal"),u=g("ResetPwdModal"),p=g("PageWrapper"),m=j("auth");return x(),w(p,{contentClass:"flex",contentFullHeight:"",fixedHeight:"",dense:""},{default:S((()=>[R(i,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),R(l,{class:"w-3/4 xl:w-5/5",onRegister:e.registerTable,onSelectionChange:e.handleSelectionChange},{toolbar:S((()=>[T(R(r,{type:"primary",onClick:t[0]||(t[0]=t=>e.handleAdd())},{default:S((()=>[M])),_:1},512),[[m,["user_add"]]]),T(R(r,{type:"primary",disabled:e.state.single,onClick:t[1]||(t[1]=t=>e.handleEdit())},{default:S((()=>[C])),_:1},8,["disabled"]),[[m,["user_edit"]]]),T(R(r,{type:"primary",disabled:e.state.multiple,onClick:t[2]||(t[2]=t=>e.handleDel())},{default:S((()=>[v])),_:1},8,["disabled"]),[[m,["user_del"]]])])),action:S((({record:t})=>[R(d,{actions:[{label:"重置密码",icon:"fa6-brands:battle-net",auth:["user_reset"],onClick:e.handleResetPassword.bind(null,t)},{label:"编辑",icon:"fa6-regular:pen-to-square",auth:["user_edit"],onClick:e.handleEdit.bind(null,t)},{label:"删除",icon:"ant-design:delete-outlined",color:"error",auth:["user_del"],onClick:e.handleDel.bind(null,t)}]},null,8,["actions"])])),_:1},8,["onRegister","onSelectionChange"]),R(c,{onRegister:e.registerModal,onSuccess:e.handleRefreshTable},null,8,["onRegister","onSuccess"]),R(u,{onRegister:e.registerResetPwdModal,onSuccess:e.handleRefreshTable},null,8,["onRegister","onSuccess"])])),_:1})};export{y as default};