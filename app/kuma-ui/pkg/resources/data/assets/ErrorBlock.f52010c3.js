import{d as f,N as n,I as g,e as s,a as d,B as h,J as a,w as l,c as v,k as p,o as r,f as o,F as i,h as B,t,b as c,y as w,M as E,O as k,p as b,l as x,_ as I}from"./index.dbfc69fe.js";const S=e=>(b("data-v-7a254205"),e=e(),x(),e),N={class:"error-block"},C={class:"card-icon mb-3"},V=S(()=>o("summary",null,"Details",-1)),K={key:0,class:"badge-list"},A=f({__name:"ErrorBlock",props:{error:{type:[Error,n],required:!1,default:null}},setup(e){const u=e,_=g(()=>u.error instanceof n?u.error.causes:[]);return(D,F)=>(r(),s("div",N,[d(a(E),{"cta-is-hidden":""},h({title:l(()=>[o("div",C,[d(a(w),{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),o("p",null,[e.error instanceof a(n)?(r(),s(i,{key:0},[c(t(e.error.message),1)],64)):(r(),s(i,{key:1},[c(" An error has occurred while trying to load this data. ")],64))])]),_:2},[a(_).length>0?{name:"message",fn:l(()=>[o("details",null,[V,o("ul",null,[(r(!0),s(i,null,B(a(_),(m,y)=>(r(),s("li",{key:y},[o("b",null,[o("code",null,t(m.field),1)]),c(": "+t(m.message),1)]))),128))])])]),key:"0"}:void 0]),1024),e.error instanceof a(n)?(r(),s("div",K,[e.error.code?(r(),v(a(k),{key:0,appearance:"warning"},{default:l(()=>[c(t(e.error.code),1)]),_:1})):p("",!0),d(a(k),{appearance:"warning"},{default:l(()=>[c(t(e.error.statusCode),1)]),_:1})])):p("",!0)]))}});const z=I(A,[["__scopeId","data-v-7a254205"]]);export{z as E};