import{j as e}from"./jsx-runtime.9YwcPWTT.js";import{u as s,C as a,O as i,a as l}from"./ContactShadows.tDTGiZ8s.js";import{r as u}from"./index.LFf77hJu.js";function m(r){const{nodes:t,materials:o}=s("/gltf/Troquel1p0391.gltf");return e.jsxs("group",{...r,dispose:null,scale:2,position:[0,.1,0],children:[e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.mesh_0.geometry,material:o.BACK}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.mesh_0_1.geometry,material:o.EDGE}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.mesh_0_2.geometry,material:o.FRONT})]})}s.preload("/gltf/Troquel1p0391.gltf");const f=({})=>e.jsxs(a,{style:{},camera:{view:{enabled:!0,fullWidth:100,fullHeight:100,offsetX:0,offsetY:-30,width:100,height:100},focus:10,fov:80,zoom:3,position:[0,.5,1.5]},children:[e.jsx("ambientLight",{intensity:2}),e.jsx(u.Suspense,{fallback:null,children:e.jsx(m,{})}),e.jsx(i,{autoRotate:!0,autoRotateSpeed:1}),e.jsx(l,{resolution:512,scale:1,position:[0,-.03,0],blur:2,opacity:.6,far:1,color:"#202020"})]});export{f as default};