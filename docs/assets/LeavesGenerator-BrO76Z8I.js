import{r as u,j as m,l as p,a as d}from"./index-CeGssBK2.js";const y="/assets/leaf-DhszCEBv.svg";function c(s,e,a){const o=p([[e*1e3,a*1e3],[0,2500],[.75,1],[0,5]]);s.style.setProperty("--duration",`${o[0]}ms`),s.style.setProperty("--spin-speed",`${3e3-o[1]}ms`),s.style.setProperty("--height-multiplier",""+o[2]);let i=d(0,2)**2;Math.random()>.5&&(i*=-1),s.style.setProperty("--rotate-amount",`${i}turn`),s.style.setProperty("--position",`${d(5,95)}vw`),s.style.setProperty("--delay",`${d(0,a*1e3)}ms`)}function v({leafCount:s,spawnDelay:e,gustFrequency:a}){const o=[],i=[];for(let r=0;r<s;r++){const n=`falling-leaf-${r}`;i.push(n),o.push(m.jsx("img",{src:y,id:n,className:"falling-decoration"},r))}return u.useEffect(()=>{function r(n,t){n.animationName==="fade-and-turn"&&(c(t,e[0],e[1]),t.classList.contains("blown")||t.classList.remove("wind-gust"),t.classList.add("animation-restart"),t.offsetTop,t.classList.remove("animation-restart"),t.classList.remove("smooth-removal"))}i.forEach(n=>{const t=document.getElementById(n);c(t,e[0],e[1]),t.addEventListener("animationend",l=>r(l,t))})},[]),m.jsx(m.Fragment,{children:o})}export{v as default};
