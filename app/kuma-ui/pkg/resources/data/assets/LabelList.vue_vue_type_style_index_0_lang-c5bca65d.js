import{_ as r}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-3ae2c0e5.js";import{E as n}from"./ErrorBlock-8e7637fe.js";import{_}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-2aa4a7bd.js";import{d as i,o as e,c as t,k as o,R as c}from"./index-1f1e085f.js";const p={class:"label-list"},m={key:3,class:"label-list__content"},B=i({__name:"LabelList",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},setup(a){const s=a;return(l,f)=>(e(),t("div",p,[s.isLoading?(e(),o(_,{key:0})):s.hasError?(e(),o(n,{key:1})):s.isEmpty?(e(),o(r,{key:2})):(e(),t("div",m,[c(l.$slots,"default")]))]))}});export{B as _};