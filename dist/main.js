(()=>{"use strict";var e={791:(e,t,o)=>{o.d(t,{gz:()=>h,sS:()=>q,rC:()=>C,DH:()=>I,HT:()=>E,m1:()=>T,LK:()=>x,E5:()=>L});const r=document.querySelector(".pomoBox"),a=document.querySelector(".restart"),c=document.querySelector(".pause"),s=document.querySelector(".resume"),l=document.querySelector(".start"),n=document.querySelector(".reset"),d=document.querySelector(".fa-adjust"),u=document.querySelector("body"),i=document.querySelector(".squareBox"),y=document.querySelector(".sessionBtns"),m=document.querySelector(".score"),g=document.querySelector(".settingsBtn");let f=0;const b=()=>{L="dark",localStorage.savedTheme="dark",u.style.backgroundColor="#222831",u.style.color="#f6ecf0",i.style.backgroundColor="#2C323B",r.style.cssText="border: 6px solid #a7c5eb; background-color: #2C323B;",y.style.backgroundColor="#40464F",[a,l,c,s].forEach((e=>{e.style.backgroundColor="#2C323B",e.style.color="#f6ecf0",e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#a7c5eb",e.style.color="#2C323B"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#2C323B",e.style.color="#f6ecf0"}))})),n.style.backgroundColor="#f6ecf0",n.addEventListener("mouseover",(()=>{n.style.backgroundColor="#a7c5eb",n.style.color="#2C323B"})),n.addEventListener("mouseout",(()=>{n.style.backgroundColor="#f6ecf0"}))},v=()=>{L="light",localStorage.savedTheme="light",u.style.backgroundColor="#fafafa",u.style.color="#36404c",i.style.backgroundColor="#a7c5eb",r.style.cssText="border: 0px solid #36404c; background-color: #36404c;",y.style.backgroundColor="#f9fcfb",[a,l,c,s,n].forEach((e=>{e.style.backgroundColor="#a7c5eb",e.style.color="#36404c",e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#36404c",e.style.color="#f6ecf0"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#a7c5eb",e.style.color="#36404c"}))}))},k=(e,t)=>{r.innerText=e<10?`0${e} : ${t}`:t<10?`${e} : 0${t}`:`${e} : ${t}`},p=()=>{r.style.cssText="background-image: url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038'); ",r.innerText=">:("},S=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const a=document.createElement("i");a.classList.add("fas",o,"fa-lg"),r.appendChild(a)};[a,l,n].forEach((e=>{e.addEventListener("click",(()=>{r.style.cssText="animation: none; background-image: none;","dark"===L&&b(),"reset"===e.className?(h="reset",clearInterval(E),q=60*T,k(25,0)):(h="start"===e.className?"start":"restart",clearInterval(E),I())}))})),c.addEventListener("click",(()=>{q!==60*T&&0!==q||p(),h="pause",C=q,clearInterval(E);const e=Math.floor(C/60);k(e,C%60)})),s.addEventListener("click",(()=>{q===60*T||0===q?p():"pause"==h&&q>0&&I(),h="resume"})),g.addEventListener("mouseover",(()=>{g.style.background="#4A5460"})),g.addEventListener("mouseout",(()=>{g.style.background="#36404c"})),g.addEventListener("click",(()=>{[i,r,y,n].forEach((e=>{e.style.display="none"}))}));let C,E,h,x=0,L="lightTheme";localStorage.length>0&&(x=localStorage.getItem("savedScore"),L=localStorage.getItem("savedTheme"),m.innerText="Score : "+x,"dark"===L?b():v()),S("start","start","fa-rocket"),S("restart","restart","fa-redo"),S("pause","pause","fa-stop"),S("resume","resume","fa-play"),r.innerText="25 : 00";const T=25;let q=60*T;const B=()=>{var e;e=E,0==q&&(clearInterval(e),new Audio("./assets/sounds/cocGame.mp3").play(),x=parseInt(x),x+=100,m.innerText="Score : "+x,localStorage.setItem("savedScore",x),localStorage.setItem("savedTheme",L));const t=Math.floor(q/60);let o=q%60;0!==q?(k(t,o),q--):k(t,o)},I=()=>{q="pause"==h?C:60*T,E=setInterval(B,1e3)};d.addEventListener("click",(()=>{f++,f%2!=0?b():v()}))}},t={};function o(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(791)})();