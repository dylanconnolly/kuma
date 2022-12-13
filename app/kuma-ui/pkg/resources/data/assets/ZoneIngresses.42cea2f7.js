import{E as T,cl as B,cm as F,P as N,L as q,s as K,cn as M,co as V,x as H,k as b,i as a,o as r,j as y,c as p,w as n,a as l,e as f,A as D,l as m,t as _,F as I,n as w}from"./index.60b0f0ac.js";import{D as P,p as R}from"./patchQueryParam.ae688d93.js";import{E as W}from"./EnvoyData.7149ad2a.js";import{F as G}from"./FrameSkeleton.cbc6b8ea.js";import{_ as j}from"./LabelList.vue_vue_type_style_index_0_lang.bd2c37a0.js";import{M as Q}from"./MultizoneInfo.047e9d2b.js";import{S as U,a as X}from"./SubscriptionHeader.5a1c32ae.js";import{T as J}from"./TabsWidget.5b63a728.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.548da37c.js";import"./EntityStatus.6fc3c7d6.js";import"./ErrorBlock.2ee4d08e.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.be7e4bb1.js";import"./TagList.b3d2d71f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.85e36160.js";import"./_commonjsHelpers.f037b798.js";const Y={name:"ZoneIngresses",components:{AccordionItem:B,AccordionList:F,DataOverview:P,EnvoyData:W,FrameSkeleton:G,LabelList:j,MultizoneInfo:Q,SubscriptionDetails:U,SubscriptionHeader:X,TabsWidget:J,KButton:N,KCard:q},props:{offset:{type:Number,required:!1,default:0}},data(){return{isLoading:!0,isEmpty:!1,error:null,empty_state:{title:"No Data",message:"There are no Zone Ingresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:K,next:null,subscriptionsReversed:[],pageOffset:this.offset}},computed:{...M({multicluster:"config/getMulticlusterStatus"})},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.init(0)}},beforeMount(){this.init(this.offset)},methods:{init(t){this.multicluster&&this.loadData(t)},tableAction(t){const i=t;this.getEntity(i)},async loadData(t){this.pageOffset=t,R("offset",t>0?t:null),this.isLoading=!0,this.isEmpty=!1;const i=this.$route.query.ns||null,o=this.pageSize;try{const{data:s,next:e}=await this.getZoneIngressOverviews(i,o,t);this.next=e,s.length?(this.isEmpty=!1,this.rawData=s,this.getEntity({name:s[0].name}),this.tableData.data=s.map(c=>{const{zoneIngressInsight:u={}}=c;return{...c,...V(u)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(s){s instanceof Error?this.error=s:console.error(s),this.isEmpty=!0}finally{this.isLoading=!1}},getEntity(t){var e,c;const i=["type","name"],o=this.rawData.find(u=>u.name===t.name),s=(c=(e=o==null?void 0:o.zoneIngressInsight)==null?void 0:e.subscriptions)!=null?c:[];this.subscriptionsReversed=Array.from(s).reverse(),this.entity=H(o,i)},async getZoneIngressOverviews(t,i,o){if(t)return{data:[await b.getZoneIngressOverview({name:t},{size:i,offset:o})],next:null};{const{items:s,next:e}=await b.getAllZoneIngressOverviews({size:i,offset:o});return{data:s!=null?s:[],next:e}}}}},$={class:"zoneingresses"};function ee(t,i,o,s,e,c){const u=a("MultizoneInfo"),z=a("KButton"),L=a("DataOverview"),E=a("LabelList"),S=a("SubscriptionHeader"),k=a("SubscriptionDetails"),A=a("AccordionItem"),x=a("AccordionList"),O=a("KCard"),h=a("EnvoyData"),Z=a("TabsWidget"),C=a("FrameSkeleton");return r(),y("div",$,[t.multicluster===!1?(r(),p(u,{key:0})):(r(),p(C,{key:1},{default:n(()=>{var v;return[l(L,{"selected-entity-name":(v=e.entity)==null?void 0:v.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,"page-offset":e.pageOffset,onTableAction:c.tableAction,onLoadData:c.loadData},{additionalControls:n(()=>[t.$route.query.ns?(r(),p(z,{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zoneingresses"}},{default:n(()=>[f(`
            View all
          `)]),_:1})):D("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","next","page-offset","onTableAction","onLoadData"]),f(),e.isEmpty===!1?(r(),p(Z,{key:0,"has-error":e.error!==null,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:n(()=>[m("div",null,[m("h1",null,"Zone Ingress: "+_(e.entity.name),1)])]),overview:n(()=>[l(E,null,{default:n(()=>[m("div",null,[m("ul",null,[(r(!0),y(I,null,w(e.entity,(d,g)=>(r(),y("li",{key:g},[m("h4",null,_(g),1),f(),m("p",null,_(d),1)]))),128))])])]),_:1})]),insights:n(()=>[l(O,{"border-variant":"noBorder"},{body:n(()=>[l(x,{"initially-open":0},{default:n(()=>[(r(!0),y(I,null,w(e.subscriptionsReversed,(d,g)=>(r(),p(A,{key:g},{"accordion-header":n(()=>[l(S,{details:d},null,8,["details"])]),"accordion-content":n(()=>[l(k,{details:d,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":n(()=>[l(h,{"data-path":"xds","zone-ingress-name":e.entity.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-stats":n(()=>[l(h,{"data-path":"stats","zone-ingress-name":e.entity.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-clusters":n(()=>[l(h,{"data-path":"clusters","zone-ingress-name":e.entity.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1},8,["has-error","is-loading","tabs"])):D("",!0)]}),_:1}))])}const he=T(Y,[["render",ee]]);export{he as default};