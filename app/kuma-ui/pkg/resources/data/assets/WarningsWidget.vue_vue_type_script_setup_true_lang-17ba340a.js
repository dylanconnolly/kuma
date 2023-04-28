import{I as _}from"./kongponents.es-5adaddec.js";import{d as l,o as a,j as r,t,h as n,i as s,F as d,q as m,g as y,w as g,e as P,s as f,b as D,I as O,U as b,V as h,W as C}from"./index-a24b4f04.js";const I=l({__name:"WarningDefault",props:{payload:{type:[String,Object],required:!0}},setup(e){return(o,u)=>(a(),r("span",null,t(e.payload),1))}}),N=l({__name:"WarningEnvoyIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(o,u)=>(a(),r("span",null,[n(`
    Envoy (`),s("strong",null,t(e.payload.envoy),1),n(") is unsupported by the current version of Kuma DP ("),s("strong",null,t(e.payload.kumaDp),1),n(") [Requirements: "),s("strong",null,t(e.payload.requirements),1),n(`].
  `)]))}}),E=l({__name:"WarningUnsupportedKumaDPVersion",props:{payload:{type:Object,required:!0}},setup(e){return(o,u)=>(a(),r("span",null,[n(`
    Unsupported version of Kuma DP (`),s("strong",null,t(e.payload.kumaDp),1),n(`)
  `)]))}}),A=l({__name:"WarningZoneAndGlobalCPSVersionsIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(o,u)=>(a(),r("span",null,[n(`
    There is mismatch between versions of Zone CP (`),s("strong",null,t(e.payload.zoneCpVersion),1),n(`)
    and the Global CP (`),s("strong",null,t(e.payload.globalCpVersion),1),n(`)
  `)]))}}),V=l({__name:"WarningZoneAndKumaDPVersionsIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(o,u)=>(a(),r("span",null,[n(`
    There is a mismatch between versions of Kuma DP (`),s("strong",null,t(e.payload.kumaDp),1),n(`) and the Zone CP.
  `)]))}}),x=l({__name:"WarningsWidget",props:{warnings:{type:Array,required:!0}},setup(e){const o=e;function u(c=""){switch(c){case C:return N;case h:return E;case b:return V;case O:return A;default:return I}}return(c,S)=>(a(),r("ul",null,[(a(!0),r(d,null,m(o.warnings,(p,i)=>(a(),r("li",{key:`${p.kind}/${i}`,class:"mb-1"},[y(D(_),{appearance:"warning"},{alertMessage:g(()=>[(a(),P(f(u(p.kind)),{payload:p.payload},null,8,["payload"]))]),_:2},1024)]))),128))]))}});export{x as _};