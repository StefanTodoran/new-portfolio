import{r as i,j as t,P as s}from"./index-CeGssBK2.js";const m="/assets/leaf-logo-BZavRQ94.png",u="/assets/bamboo-BmYjV5GC.svg",l="/assets/mushrooms-CU8vhZYa.svg",d="/assets/cattail-Ba93TC2w.svg",h="/assets/shrubs-Cj6oOoCf.svg",g="/assets/shrubs-3-D2yLbLQY.svg",f="/assets/shrubs-4-rw3gy1VV.svg";async function x(r,a){const o=`https://api.github.com/repos/${r}/${a}/commits`;try{const n=await(await fetch(o)).json();if(!(n.length>0))throw new Error("No commits found in the repository.");const c=n[0];return new Date(c.commit.author.date)}catch(e){console.error("Error retrieving commit data:",e.message)}return null}function j(){const[r,a]=i.useState("8/29/2023");return i.useEffect(()=>{x("StefanTodoran","StefanTodoran.github.io").then(o=>{if(!o)return;const e=o.toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"});a(e)})},[]),t.jsxs("section",{id:"footer",className:"container",children:[t.jsx("div",{className:"hr"}),t.jsxs("div",{className:"footer-row",children:["Last updated ",t.jsx("span",{id:"last-updated",children:r}),t.jsx("img",{id:"leaf-logo",src:m})]}),t.jsx("div",{className:"footer-row",children:"© Stefan Todoran"}),t.jsx(s,{src:u,bottom:!0,left:"30vw",maxWidth:"20vmin"}),t.jsx(s,{src:l,bottom:!0,right:"35vw"}),t.jsx(s,{src:g,top:!0,right:!0,long:!0}),t.jsx(s,{src:f,left:!0,long:!0,bottom:"12.5vmin",maxWidth:"15vmin",customClass:"tiny-width-fix"}),t.jsx(s,{src:d,bottom:!0,left:!0,long:!0}),t.jsx(s,{src:h,bottom:!0,right:!0,long:!0})]})}export{j as default};
