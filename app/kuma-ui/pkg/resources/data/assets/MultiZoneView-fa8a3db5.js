import{k as b,bU as Z,c5 as O,c8 as d,cc as t,o as s,i as f,w as r,a as c,b as o,e as i,bV as x,c as a,j as y,bW as z}from"./index-08ba2993.js";import{L as v}from"./LoadingBox-231f7899.js";import{O as k}from"./OnboardingNavigation-b714f80c.js";import{O as I,a as T}from"./OnboardingPage-88092117.js";const V=z(),l=1e3,A={name:"MultiZoneView",components:{OnboardingNavigation:k,OnboardingHeading:I,OnboardingPage:T,LoadingBox:v,KCard:Z},data(){return{env:V,hasZones:!1,hasZoneIngresses:!1,zoneTimeout:null,zoneIngressTimeout:null}},computed:{servicesOnline(){return this.hasZoneIngresses&&this.hasZones},...O({kumaDocsVersion:"config/getKumaDocsVersion"}),documentationLink(){return`https://kuma.io/docs/${this.kumaDocsVersion}/deployments/multi-zone/#zone-control-plane`}},created(){this.getZoneIngresses(),this.getZones()},unmounted(){clearTimeout(this.zoneTimeout),clearTimeout(this.zoneIngressTimeout)},methods:{async getZones(){try{const{total:e}=await d.getZones();this.hasZones=e>0}catch(e){console.error(e)}this.hasZones||(this.zoneTimeout=setTimeout(()=>this.getZones(),l))},async getZoneIngresses(){try{const{total:e}=await d.getAllZoneIngressOverviews();this.hasZoneIngresses=e>0}catch(e){console.error(e)}this.hasZoneIngresses||(this.zoneIngressTimeout=setTimeout(()=>this.getZoneIngresses(),l))}}},C=i("p",{class:"text-center mb-4"},`
        A zone requires both the zone control plane and zone ingress. On Kubernetes, you run a single command to create both resources. On Universal, you must create them separately.
      `,-1),L=["href"],N={class:"text-center my-4"},w={key:0,class:"text-green-500","data-testid":"zone-connected"},D={key:1,class:"text-red-500","data-testid":"zone-disconnected"},U={class:"text-center mt-4 mb-10"},B={key:0,class:"text-green-500","data-testid":"zone-ingress-connected"},K={key:1,class:"text-red-500","data-testid":"zone-ingress-disconnected"},M={key:0,class:"flex justify-center"};function P(e,R,S,E,n,g){const m=t("OnboardingHeading"),h=t("KCard"),u=t("LoadingBox"),_=t("OnboardingNavigation"),p=t("OnboardingPage");return s(),f(p,null,{header:r(()=>[c(m,{title:"Add zones"})]),content:r(()=>[C,o(),c(h,{title:"See the documentation for options to install:","border-variant":"noBorder"},{body:r(()=>[i("a",{target:"_blank",class:"external-link-code-block",href:`${n.env("KUMA_DOCS_URL")}/deployments/multi-zone/?${n.env("KUMA_UTM_QUERY_PARAMS")}#zone-control-plane`},x(n.env("KUMA_DOCS_URL"))+`/deployments/multi-zone/#zone-control-plane
          `,9,L)]),_:1}),o(),i("div",null,[i("p",N,[o(`
          Zone status:
          `),n.hasZones?(s(),a("span",w,"Connected")):(s(),a("span",D,"Disconnected"))]),o(),i("p",U,[o(`
          Zone ingress status:
          `),n.hasZoneIngresses?(s(),a("span",B,"Connected")):(s(),a("span",K,"Disconnected"))]),o(),!n.hasZoneIngresses||!n.hasZones?(s(),a("div",M,[c(u)])):y("",!0)])]),navigation:r(()=>[c(_,{"next-step":"onboarding-create-mesh","previous-step":"onboarding-configuration-types","should-allow-next":g.servicesOnline},null,8,["should-allow-next"])]),_:1})}const Q=b(A,[["render",P]]);export{Q as default};