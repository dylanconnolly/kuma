import{P as c}from"./index.ea0d4a24.js";function x(n){return[...n].sort((r,a)=>r.name>a.name||r.name===a.name&&r.mesh>a.mesh?1:-1)}const I=n=>n.total!==0&&n.items&&n.items.length>0?x(n.items):[];function P({getSingleEntity:n,getAllEntities:r,getAllEntitiesFromPath:a,getAllEntitiesFromMesh:u,path:o,mesh:e,query:f,size:i,offset:m,params:s={}}){const t={size:i,offset:m,...s};return n&&f?n({mesh:e,path:o,name:f},t):r&&!e?r(t):a&&!e?a({path:o},t):u&&e?u({mesh:e,path:o},t):Promise.resolve()}async function D({getSingleEntity:n,getAllEntities:r,getAllEntitiesFromPath:a,getAllEntitiesFromMesh:u,path:o,mesh:e,query:f,size:i=c,offset:m,params:s={}}){const t=await P({getSingleEntity:n,getAllEntities:r,getAllEntitiesFromPath:a,getAllEntitiesFromMesh:u,path:o,mesh:e,query:f,size:i,offset:m,params:s});return t?{data:t.items?I(t):[t],next:Boolean(t.next)}:{data:[],next:!1}}export{D as g};