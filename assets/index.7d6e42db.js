var e=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,l=(e,l)=>{for(var i in l||(l={}))o.call(l,i)&&n(e,i,l[i]);if(a)for(var i of a(l))t.call(l,i)&&n(e,i,l[i]);return e},i=(e,a,o)=>new Promise(((t,n)=>{var l=e=>{try{s(o.next(e))}catch(a){n(a)}},i=e=>{try{s(o.throw(e))}catch(a){n(a)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(l,i);s((o=o.apply(e,a)).next())}));import{p as s,_ as r,a1 as p,a7 as d,aa as c,a9 as u}from"./index.6a5548ea.js";import{bV as f,z as m,A as g,B as v,Z as b,D as A,E as h,_ as w,a2 as M,w as y,u as C,a8 as I,a9 as L,J as P,a5 as k,bW as O,N as U,bX as x,bJ as z,r as _,aq as Z,bY as S,bZ as j,ae as W,ai as $,F as E,G as B,H as D,ad as T,X as H}from"./vendor.7c679a32.js";/* empty css              *//* empty css              */var J={exports:{}},R=J.exports=function(){function e(e){var t=[];return e.AMapUI&&t.push(a(e.AMapUI)),e.Loca&&t.push(o(e.Loca)),Promise.all(t)}function a(e){return new Promise((function(a,o){var n=[];if(e.plugins)for(var r=0;r<e.plugins.length;r+=1)-1==l.AMapUI.plugins.indexOf(e.plugins[r])&&n.push(e.plugins[r]);if(i.AMapUI===t.failed)o("前次请求 AMapUI 失败");else if(i.AMapUI===t.notload){i.AMapUI=t.loading,l.AMapUI.version=e.version||l.AMapUI.version,r=l.AMapUI.version;var p=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+r+"/main.js",d.onerror=function(e){i.AMapUI=t.failed,o("请求 AMapUI 失败")},d.onload=function(){if(i.AMapUI=t.loaded,n.length)window.AMapUI.loadUI(n,(function(){for(var e=0,o=n.length;e<o;e++){var t=n[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}for(a();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(a();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},p.appendChild(d)}else i.AMapUI===t.loaded?e.version&&e.version!==l.AMapUI.version?o("不允许多个版本 AMapUI 混用"):n.length?window.AMapUI.loadUI(n,(function(){for(var e=0,o=n.length;e<o;e++){var t=n[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}a()})):a():e.version&&e.version!==l.AMapUI.version?o("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(e){e?o(e):n.length?window.AMapUI.loadUI(n,(function(){for(var e=0,o=n.length;e<o;e++){var t=n[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}a()})):a()}))}))}function o(e){return new Promise((function(a,o){if(i.Loca===t.failed)o("前次请求 Loca 失败");else if(i.Loca===t.notload){i.Loca=t.loading,l.Loca.version=e.version||l.Loca.version;var n=l.Loca.version,r=l.AMap.version.startsWith("2"),p=n.startsWith("2");if(r&&!p||!r&&p)o("JSAPI 与 Loca 版本不对应！！");else{r=l.key,p=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+n+"&key="+r,d.onerror=function(e){i.Loca=t.failed,o("请求 AMapUI 失败")},d.onload=function(){for(i.Loca=t.loaded,a();s.Loca.length;)s.Loca.splice(0,1)[0]()},p.appendChild(d)}}else i.Loca===t.loaded?e.version&&e.version!==l.Loca.version?o("不允许多个版本 Loca 混用"):a():e.version&&e.version!==l.Loca.version?o("不允许多个版本 Loca 混用"):s.Loca.push((function(e){e?o(e):o()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var t,n;(n=t||(t={})).notload="notload",n.loading="loading",n.loaded="loaded",n.failed="failed";var l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:t.notload,AMapUI:t.notload,Loca:t.notload},s={AMap:[],AMapUI:[],Loca:[]},r=[],p=function(e){"function"==typeof e&&(i.AMap===t.loaded?e(window.AMap):r.push(e))};return{load:function(a){return new Promise((function(o,n){if(i.AMap==t.failed)n("");else if(i.AMap==t.notload){var s=a.key,d=a.version,c=a.plugins;s?(window.AMap&&"lbs.amap.com"!==location.host&&n("禁止多种API加载方式混用"),l.key=s,l.AMap.version=d||l.AMap.version,l.AMap.plugins=c||l.AMap.plugins,i.AMap=t.loading,d=document.body||document.head,window.___onAPILoaded=function(l){if(delete window.___onAPILoaded,l)i.AMap=t.failed,n(l);else for(i.AMap=t.loaded,e(a).then((function(){o(window.AMap)})).catch(n);r.length;)r.splice(0,1)[0]()},(c=document.createElement("script")).type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+l.AMap.version+"&key="+s+"&plugin="+l.AMap.plugins.join(","),c.onerror=function(e){i.AMap=t.failed,n(e)},d.appendChild(c)):n("请填写key")}else if(i.AMap==t.loaded)if(a.key&&a.key!==l.key)n("多个不一致的 key");else if(a.version&&a.version!==l.AMap.version)n("不允许多个版本 JSAPI 混用");else{if(s=[],a.plugins)for(d=0;d<a.plugins.length;d+=1)-1==l.AMap.plugins.indexOf(a.plugins[d])&&s.push(a.plugins[d]);s.length?window.AMap.plugin(s,(function(){e(a).then((function(){o(window.AMap)})).catch(n)})):e(a).then((function(){o(window.AMap)})).catch(n)}else if(a.key&&a.key!==l.key)n("多个不一致的 key");else if(a.version&&a.version!==l.AMap.version)n("不允许多个版本 JSAPI 混用");else{var u=[];if(a.plugins)for(d=0;d<a.plugins.length;d+=1)-1==l.AMap.plugins.indexOf(a.plugins[d])&&u.push(a.plugins[d]);p((function(){u.length?window.AMap.plugin(u,(function(){e(a).then((function(){o(window.AMap)})).catch(n)})):e(a).then((function(){o(window.AMap)})).catch(n)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:t.notload,AMapUI:t.notload,Loca:t.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}();m("data-v-77eb9d9b");const F={class:"headToolbar"},N=L("保存 ");g();var K=v({props:{defaultZoom:s.number.def(1),toolbar:{type:Array,default:()=>["save","zoomIn","zoomOut","reset"]}},emits:["save","zoomIn","zoomOut","reset"],setup(e,{emit:a}){const o=k;return(t,n)=>{const l=b("a-button");return A(),h("div",F,[e.toolbar.includes("save")?(A(),w(C(o),{key:0,title:"保存并发布",placement:"bottom",arrowPointAtCenter:!0},{default:M((()=>[y(l,{type:"primary",onClick:n[0]||(n[0]=e=>a("save"))},{default:M((()=>[y(C(r),{icon:"fa6-regular:floppy-disk",size:"13"}),N])),_:1})])),_:1})):I("",!0),e.toolbar.includes("zoomIn")?(A(),w(C(o),{key:1,title:"放大",placement:"bottom",arrowPointAtCenter:!0},{default:M((()=>[y(l,{disabled:e.defaultZoom>=9,onClick:n[1]||(n[1]=e=>a("zoomIn"))},{default:M((()=>[y(C(r),{icon:"fa6-solid:magnifying-glass-plus",size:"13"})])),_:1},8,["disabled"])])),_:1})):I("",!0),y(l,null,{default:M((()=>[L(P(Math.ceil(10*e.defaultZoom*1.1)+"%"),1)])),_:1}),e.toolbar.includes("zoomOut")?(A(),w(C(o),{key:2,title:"缩小",placement:"bottom",arrowPointAtCenter:!0},{default:M((()=>[y(l,{disabled:e.defaultZoom<=0,onClick:n[2]||(n[2]=e=>a("zoomOut"))},{default:M((()=>[y(C(r),{icon:"fa6-solid:magnifying-glass-minus",size:"13"})])),_:1},8,["disabled"])])),_:1})):I("",!0),e.toolbar.includes("reset")?(A(),w(C(o),{key:3,title:"重置",placement:"bottom",arrowPointAtCenter:!0},{default:M((()=>[y(l,{onClick:n[3]||(n[3]=e=>a("reset"))},{default:M((()=>[y(C(r),{icon:"fa-solid:broom",size:"13"})])),_:1})])),_:1})):I("",!0)])}}});K.__scopeId="data-v-77eb9d9b";const V=[{value:"001",label:"小黄车",mapOrientation:0,mapLng:112.918119,mapLat:28.282891},{value:"002",label:"小绿车",mapOrientation:0,mapLng:112.918919,mapLat:28.282991},{value:"003",label:"小红车",mapOrientation:0,mapLng:112.918019,mapLat:28.283991}],X=[{value:"001",label:"地沟油加油站",mapOrientation:0,mapLng:112.919043,mapLat:28.288623},{value:"002",label:"一路平安加油站",mapOrientation:0,mapLng:112.919165,mapLat:28.289924},{value:"003",label:"一把火加油站",mapOrientation:0,mapLng:112.919965,mapLat:28.289924}];var q="/assets/car.49c93ba9.svg",G="/assets/gasStation.60f795b9.svg";m("data-v-245edd27");const Y={class:"amap-designer"},Q={class:"operatePanel"},ee=[D("span",{title:"展开"},"‹",-1),D("p",{title:"隐藏"},"›",-1)],ae={class:"operatePanel-form"};g();var oe=v({props:{sidebarControl:s.bool.def(!0),siderWidth:s.number.def(371),toolbar:{type:Array,default:()=>["save","zoomIn","zoomOut","reset"]},toolbarHeight:s.number.def(48),toolbarControl:s.bool.def(!0),mapControl:{type:Array,default:()=>["toolBar","controlBar","scale","mapType"]},navigatePanel:s.bool.def(!0)},emits:["success"],setup(e,{expose:a,emit:o}){const t=e;O((e=>({"6b9036be":C(v).toggleOperatePanelClass.toolbarHeight+"px","63dbfecc":C(v).toggleOperatePanelClass.siderWidth+"px","54789c00":C(v).toggleOperatePanelClass.span,"5520877a":C(v).toggleOperatePanelClass.p})));const{notification:n}=d();let s,r,u,f;p();const m=T(),{mapDesigner:g}=c,v=U({first:!1,loading:!1,defaultZoom:7,toggleOperatePanelClass:{span:"none",p:"block",siderWidth:0,toolbarHeight:0},toggleStatus:!0,mapConfig:{amapKey:"f59abc154a58fa38dd34d520ac20881a",options:{pitch:60,viewMode:"3D",resizeEnable:!0,center:x(g.mapCenter,",",2),zoom:g.defaultZoom,keyboardEnable:!0,zooms:[2,20]}}}),w=z,I=z.Item,L=_();function P(){s.zoomIn()}function k(){s.zoomOut()}function J(){return i(this,null,(function*(){o("success")}))}function F(){H((()=>{var e,a;null==s||s.resize(),null==s||s.clearMap(),null==(e=L.value)||e.resetFields(),null==(a=L.value)||a.clearValidate(),null==f||f.clear(),null==s||s.setZoomAndCenter(v.mapConfig.options.zoom,v.mapConfig.options.center)}))}return Z((()=>{m&&(v.loading=!0,R.load({key:v.mapConfig.amapKey,version:"2.0",plugins:["AMap.MarkerCluster","AMap.Driving"]}).then((e=>i(this,null,(function*(){s=new e.Map(m.refs.mapview,v.mapConfig.options),s.plugin(["AMap.ToolBar","AMap.MapType","AMap.ControlBar","AMap.Scale"],(()=>{var a,o,n,l;if((null==(a=t.mapControl)?void 0:a.includes("toolBar"))&&s.addControl(new e.ToolBar),(null==(o=t.mapControl)?void 0:o.includes("controlBar"))&&s.addControl(new e.ControlBar),null==(n=t.mapControl)?void 0:n.includes("scale")){const a=new e.Scale;a.show(),s.addControl(a)}(null==(l=t.mapControl)?void 0:l.includes("mapType"))&&s.addControl(new e.MapType({defaultType:0,showRoad:!0}))})),s.on("zoomchange",(e=>{v.defaultZoom=S(j(s.getZoom(),2),1)})),u=new e.MarkerCluster(s,[],{gridSize:80,maxZoom:14,renderMarker(a){const{marker:o,data:t}=a;if(Array.isArray(t)&&t[0]){const{label:a,mapOrientation:n}=t[0];let l=`<img width="30px" height="30px" style="transform: scale(1) rotate(${360-Number(n)}deg);" src='${q}'/>`;o.setLabel({direction:"bottom",offset:new e.Pixel(-4,0),content:`<div>${a}</div>`}),o.setOffset(new e.Pixel(-18,-10)),o.setContent(l)}},renderClusterMarker(a){const{clusterData:o,marker:t,count:n}=a;let l=`<img width="30px" height="30px" src='${q}'/>`;t.setContent(l);const i=1==n?o[0].label:`出租车数量:${n}`;t.setLabel({direction:"bottom",offset:new e.Pixel(-4,0),content:`<div>${i}</div>`}),t.setOffset(new e.Pixel(-18,-10))}}),u.on("click",(e=>{const{lnglat:a}=e;s.setZoomAndCenter(18,a)})),r=new e.MarkerCluster(s,[],{gridSize:80,maxZoom:14,renderMarker(a){const{marker:o,data:t}=a;if(Array.isArray(t)&&t[0]){const{label:a,mapOrientation:n}=t[0];let l=`<img width="30px" height="30px" style="transform: scale(1) rotate(${360-Number(n)}deg);" src='${G}'/>`;o.setLabel({direction:"bottom",offset:new e.Pixel(-4,0),content:`<div>${a}</div>`}),o.setOffset(new e.Pixel(-18,-10)),o.setContent(l)}},renderClusterMarker(a){const{clusterData:o,marker:t,count:n}=a;let l=`<img width="30px" height="30px" src='${G}'/>`;t.setContent(l);const i=1==n?o[0].label:`出租车数量:${n}`;t.setLabel({direction:"bottom",offset:new e.Pixel(-4,0),content:`<div>${i}</div>`}),t.setOffset(new e.Pixel(-18,-10))}}),u.on("click",(e=>{const{lnglat:a}=e;s.setZoomAndCenter(18,a)}));const a=V.map((e=>l({lnglat:[e.mapLng,e.mapLat]},e)));null==u||u.setData(a);const o=X.map((e=>l({lnglat:[e.mapLng,e.mapLat]},e)));null==r||r.setData(o),f=new e.Driving({map:s,panel:m.refs.mapPanel}),f.search(new e.LngLat(V[0].mapLng,V[0].mapLat),new e.LngLat(X[0].mapLng,X[0].mapLat),{waypoints:[]},(function(e,a){n.success({message:"complete"===e?"绘制地图路线完成!":`获取地图数据失败：${a}`,duration:2})})),s&&(v.loading=!1,v.first=!0)})))).catch((e=>{throw v.loading=!1,e})))})),W((()=>{(null==s?void 0:s.destroy())&&s.clearEvents()})),$((()=>{v.toggleOperatePanelClass.siderWidth=t.siderWidth,v.toggleOperatePanelClass.toolbarHeight=t.toolbarHeight,t.sidebarControl||(v.toggleOperatePanelClass.siderWidth=0),t.toolbarControl||(v.toggleOperatePanelClass.toolbarHeight=0)})),a({mapReset:F}),(a,o)=>{const n=b("a-input");return A(),h("div",Y,[E(y(K,{class:"headToolbar","default-zoom":C(v).defaultZoom,toolbar:e.toolbar,onSave:J,onZoomIn:P,onZoomOut:k,onReset:F},null,8,["default-zoom","toolbar"]),[[B,e.toolbarControl]]),D("div",{id:"mapview",ref:(e,a)=>{a.mapview=e}},[E(D("div",{id:"mapPanel",ref:(e,a)=>{a.mapPanel=e}},null,512),[[B,e.navigatePanel]])],512),E(D("div",Q,[D("div",{class:"operatePanel-arrow",onClick:o[0]||(o[0]=e=>(v.toggleStatus=!v.toggleStatus,void(v.toggleStatus?(v.toggleOperatePanelClass.span="none",v.toggleOperatePanelClass.p="block",v.toggleOperatePanelClass.siderWidth=t.siderWidth):(v.toggleOperatePanelClass.span="block",v.toggleOperatePanelClass.p="none",v.toggleOperatePanelClass.siderWidth=0))))},ee),D("div",ae,[y(C(w),{ref:(e,a)=>{a.formElRef=e,L.value=e},labelCol:{style:{width:"80px"}},wrapperCol:{style:{width:"100%","margin-right":"10px"}},scrollToFirstError:!0},{default:M((()=>[y(C(I),{label:"名称"},{default:M((()=>[y(n,{placeholder:"请输入地图名称",allowClear:""})])),_:1}),y(C(I),{label:"起点"},{default:M((()=>[y(n,{placeholder:"请输入起点",allowClear:""})])),_:1}),y(C(I),{label:"终点"},{default:M((()=>[y(n,{placeholder:"请输入终点",allowClear:""})])),_:1})])),_:1},512)])],512),[[B,e.sidebarControl]])])}}});oe.__scopeId="data-v-245edd27";const te=u(oe);var ne=v({setup(e){const{createMessage:a}=d(),o=U({toolbar:["save","zoomIn","zoomOut","reset"]});function t(){return i(this,null,(function*(){a.success("保存成功!")}))}return(e,a)=>(A(),w(C(te),{ref:(e,a)=>{a.aMapDesigner=e},toolbar:C(o).toolbar,siderWidth:300,sidebarControl:!1,onSuccess:t},null,8,["toolbar"]))}});export{ne as default};