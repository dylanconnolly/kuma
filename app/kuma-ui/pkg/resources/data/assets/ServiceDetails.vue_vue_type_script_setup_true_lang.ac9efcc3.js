import{d as x,cH as E,I as m,e as f,f as e,a as y,w as $,J as n,c as u,k as S,t as c,F as R,h as j,r as D,p as b,l as T,s as C,o as i,b as q,_ as B,n as O,cu as A,H as g,cI as k,K as w}from"./index.dbfc69fe.js";import{E as F}from"./EntityTag.76f5c7c9.js";import{E as L}from"./EntityURLControl.79d97268.js";import{Y as V}from"./YamlView.aa325bb9.js";import{_ as H}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.5dc5cc90.js";import{E as K}from"./ErrorBlock.f52010c3.js";import{_ as M}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.f2781028.js";const h=s=>(b("data-v-f07c944d"),s=s(),T(),s),U={class:"entity-summary entity-section-list"},Y={class:"entity-title"},z=h(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),J={class:"definition"},G=h(()=>e("span",null,"Mesh:",-1)),P={class:"definition"},Q=h(()=>e("span",null,"Address:",-1)),W={class:"definition"},X=h(()=>e("span",null,"TLD:",-1)),Z={key:0},ee=h(()=>e("h4",null,"Tags",-1)),te={class:"tag-list"},se=x({__name:"ExternalServiceDetails",props:{externalService:{type:Object,required:!0}},setup(s){const t=s,o=E(),a=m(()=>({name:"external-service-detail-view",params:{service:t.externalService.name,mesh:t.externalService.mesh}})),r=m(()=>Object.entries(t.externalService.tags).map(([_,d])=>({label:_,value:d}))),l=m(()=>C(t.externalService));return(_,d)=>{const v=D("router-link");return i(),f("div",U,[e("h3",Y,[z,y(v,{to:n(a)},{default:$(()=>[q(c(s.externalService.name),1)]),_:1},8,["to"]),n(o).name!==n(a).name?(i(),u(L,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",J,[G,e("span",null,c(s.externalService.mesh),1)]),e("div",P,[Q,e("span",null,c(t.externalService.networking.address),1)]),e("div",W,[X,e("span",null,c(t.externalService.networking.tls.enabled?"Enabled":"Disabled"),1)])]),n(r).length>0?(i(),f("section",Z,[ee,e("div",te,[(i(!0),f(R,null,j(n(r),(p,N)=>(i(),u(F,{key:N,tag:p},null,8,["tag"]))),128))])])):S("",!0),y(V,{content:n(l)},null,8,["content"])])}}});const ne=B(se,[["__scopeId","data-v-f07c944d"]]),I=s=>(b("data-v-cd95f11c"),s=s(),T(),s),ae={class:"entity-summary entity-section-list"},ie={class:"entity-title"},re=I(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),ce={class:"definition"},oe=I(()=>e("span",null,"Mesh:",-1)),le={class:"definition"},ue=I(()=>e("span",null,"Data planes:",-1)),_e=x({__name:"ServiceInsightDetails",props:{serviceInsight:{type:Object,required:!0}},setup(s){const t=s,o=E(),a=m(()=>({name:"service-insight-detail-view",params:{service:t.serviceInsight.name,mesh:t.serviceInsight.mesh}})),r=m(()=>A[t.serviceInsight.status]),l=m(()=>C(t.serviceInsight));return(_,d)=>{const v=D("router-link");return i(),f("div",ae,[e("h3",ie,[re,y(v,{to:n(a)},{default:$(()=>[q(c(s.serviceInsight.name),1)]),_:1},8,["to"]),e("div",{class:O(`status status--${n(r).appearance}`),"data-testid":"data-plane-status-badge"},c(n(r).title.toLowerCase()),3),n(o).name!==n(a).name?(i(),u(L,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",ce,[oe,e("span",null,c(s.serviceInsight.mesh),1)]),e("div",le,[ue,e("span",null,"Total: "+c(t.serviceInsight.dataplanes.total)+" (online: "+c(t.serviceInsight.dataplanes.online)+")",1)])]),y(V,{content:n(l)},null,8,["content"])])}}});const de=B(_e,[["__scopeId","data-v-cd95f11c"]]),Se=x({__name:"ServiceDetails",props:{type:{type:String,required:!0},name:{type:String,required:!0},mesh:{type:String,required:!0}},setup(s){const t=s,o=g(null),a=g(null),r=g(!0),l=g(null);k(()=>t.mesh,function(){_()}),k(()=>t.name,function(){_()}),_();async function _(){r.value=!0,l.value=null,o.value=null,a.value=null;const d=t.mesh,v=t.name;try{t.type==="ServiceInsight"?o.value=await w.getServiceInsight({mesh:d,name:v}):a.value=await w.getExternalService({mesh:d,name:v})}catch(p){p instanceof Error?l.value=p:console.error(p)}finally{r.value=!1}}return(d,v)=>r.value?(i(),u(M,{key:0})):l.value!==null?(i(),u(K,{key:1,error:l.value},null,8,["error"])):o.value!==null?(i(),u(de,{key:2,"service-insight":o.value},null,8,["service-insight"])):a.value!==null?(i(),u(ne,{key:3,"external-service":a.value},null,8,["external-service"])):(i(),u(H,{key:4}))}});export{Se as _};