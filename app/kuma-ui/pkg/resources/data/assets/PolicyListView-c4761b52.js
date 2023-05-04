import{d as W,$ as j,Y as G,F as H,i as Z}from"./kongponents.es-ba82ceca.js";import{d as U,o as r,e as b,w as l,g,b as t,h as c,a as J,u as X,r as v,c as A,v as ee,a5 as te,E as ae,j as I,i as p,f as T,Y as V,B as C,t as D,F as se,q as oe,p as le,m as ie}from"./index-bd38c154.js";import{_ as ne}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-a4760449.js";import{D as re}from"./DataOverview-d216744b.js";import{D as ce,a as pe}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-d6e052e1.js";import{T as ue}from"./TabsWidget-59c9beec.js";import{_ as me}from"./YamlView.vue_vue_type_script_setup_true_lang-b71e2184.js";import{u as de}from"./store-82b3ee45.js";import{u as ye,a as he}from"./index-2e645818.js";import{Q as L}from"./QueryParameter-70743f73.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-12b7659b.js";import"./ErrorBlock-99d9a9e3.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-fc8e76df.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-fcd7936c.js";import"./StatusBadge-fac45f76.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-39ef11a2.js";import"./toYaml-4e00099e.js";const ve=U({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(u){const i=u;return(S,x)=>(r(),b(t(j),{class:"docs-link",appearance:"outline",target:"_blank",to:i.href},{default:l(()=>[g(t(W),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),c(`

    Documentation
  `)]),_:1},8,["to"]))}}),_e=u=>(le("data-v-b159875f"),u=u(),ie(),u),be={class:"kcard-stack"},ge={class:"kcard-border"},Pe=_e(()=>p("p",null,[p("strong",null,"Warning"),c(` This policy is experimental. If you encountered any problem please open an
                  `),p("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),ke={class:"kcard-border"},Te={class:"entity-heading","data-testid":"policy-single-entity"},we=U({__name:"PolicyListView",props:{selectedPolicyName:{type:[String,null],required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(u){const i=u,S=ye(),x=he(),q=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],F=J(),_=X(),m=de(),w=v(!0),P=v(null),d=v(null),y=v(null),N=v(null),B=v(i.offset),k=v({headers:[{label:"Name",key:"entity"},{label:"Type",key:"type"}],data:[]}),h=A(()=>m.state.policyTypesByPath[i.policyPath]),M=A(()=>m.state.policyTypes.map(e=>({label:e.name,value:e.path,selected:e.path===i.policyPath}))),R=A(()=>m.state.policyTypes.filter(e=>(m.state.sidebar.insights.mesh.policies[e.name]??0)===0).map(e=>e.name));ee(()=>_.params.mesh,function(){_.name===i.policyPath&&E(0)}),z();function z(){const e=m.state.policyTypesByPath[i.policyPath];e!==void 0&&m.dispatch("updatePageTitle",e.name),E(i.offset)}async function E(e){var n;B.value=e,L.set("offset",e>0?e:null),w.value=!0,P.value=null;const s=_.params.mesh,o=_.params.policyPath,a=C;try{const{items:f,next:Q}=await S.getAllPolicyEntitiesFromMesh({mesh:s,path:o},{size:a,offset:e});N.value=Q,k.value.data=O(f??[]),await $({name:i.selectedPolicyName??((n=k.value.data[0])==null?void 0:n.entity.name),mesh:s,path:o})}catch(f){k.value.data=[],d.value=null,f instanceof Error?P.value=f:console.error(f)}finally{w.value=!1}}function O(e){return e.map(s=>{const{type:o,name:a}=s,n={name:"policy-detail-view",params:{mesh:s.mesh,policyPath:_.params.policyPath,policy:a}};return{entity:s,detailViewRoute:n,type:o}})}async function Y(e){const{name:s,mesh:o,type:a}=e,f=m.state.policyTypesByName[a].path;await $({name:s,mesh:o,path:f})}async function $({name:e,mesh:s,path:o}){if(e===void 0){d.value=null,y.value=null,L.set("policy",null);return}try{const a=await S.getSinglePolicyEntity({mesh:s,path:o,name:e});d.value=te(a,["type","name","mesh"]),L.set("policy",a.name),y.value=ae(a)}catch(a){console.error(a)}}function K(e){F.push({name:"policy-list-view",params:{..._.params,policyPath:e.value}})}return(e,s)=>{var o;return t(h)?(r(),I("div",{key:0,class:V(["relative",t(h).path])},[p("div",be,[p("div",ge,[t(h).isExperimental?(r(),b(t(H),{key:0,"border-variant":"noBorder",class:"mb-4"},{body:l(()=>[g(t(G),{appearance:"warning"},{alertMessage:l(()=>[Pe]),_:1})]),_:1})):T("",!0),c(),g(re,{"selected-entity-name":(o=d.value)==null?void 0:o.name,"page-size":t(C),error:P.value,"is-loading":w.value,"empty-state":{title:"No Data",message:`There are no ${t(h).name} policies present.`},"table-data":k.value,"table-data-is-empty":k.value.data.length===0,next:N.value,"page-offset":B.value,onTableAction:Y,onLoadData:E},{additionalControls:l(()=>[g(t(Z),{label:"Policies",items:t(M),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:K},{"item-template":l(({item:a})=>[p("span",{class:V({"policy-type-empty":t(R).includes(a.label)})},D(a.label),3)]),_:1},8,["items"]),c(),g(ve,{href:`${t(x)("KUMA_DOCS_URL")}/policies/${t(h).path}/?${t(x)("KUMA_UTM_QUERY_PARAMS")}`,"data-testid":"policy-documentation-link"},null,8,["href"])]),default:l(()=>[c(`
          >
          `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),c(),p("div",ke,[d.value!==null?(r(),b(ue,{key:0,"has-error":P.value!==null,error:P.value,"is-loading":w.value,tabs:q},{tabHeader:l(()=>[p("h1",Te,D(t(h).name)+": "+D(d.value.name),1)]),overview:l(()=>[g(pe,{"data-testid":"policy-detail-label-list"},{default:l(()=>[(r(!0),I(se,null,oe(d.value,(a,n)=>(r(),b(ce,{key:n,term:n},{default:l(()=>[c(D(a),1)]),_:2},1032,["term"]))),128))]),_:1}),c(),y.value!==null?(r(),b(me,{key:0,id:"code-block-policy",class:"mt-4",content:y.value,"is-searchable":""},null,8,["content"])):T("",!0)]),"affected-dpps":l(()=>[y.value!==null?(r(),b(ne,{key:0,mesh:y.value.mesh,"policy-name":y.value.name,"policy-path":t(h).path},null,8,["mesh","policy-name","policy-path"])):T("",!0)]),_:1},8,["has-error","error","is-loading"])):T("",!0)])])],2)):T("",!0)}}});const Ye=fe(we,[["__scopeId","data-v-b159875f"]]);export{Ye as default};
