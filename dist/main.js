(()=>{"use strict";var e={791:(e,t,r)=>{r.d(t,{gz:()=>R,sS:()=>X,rC:()=>J,DH:()=>Z,HT:()=>Q,m1:()=>W,LK:()=>U,E5:()=>V});const o=document.querySelector(".pomoBox"),c=document.querySelector(".restart"),a=document.querySelector(".pause"),s=document.querySelector(".resume"),l=document.querySelector(".start"),n=document.querySelector(".reset"),d=document.querySelector(".fa-adjust"),u=document.querySelector("body"),i=document.querySelector(".squareBox"),y=document.querySelector(".sessionBtns"),m=document.querySelector(".score"),f=document.querySelector(".settingsBtn"),E=document.querySelector(".settingsPage"),b=document.querySelector(".dracula"),g=document.querySelector(".nord"),k=document.querySelector(".gruvHard"),v=document.querySelector(".defaultDark"),p=document.querySelector(".defaultLight"),S=document.querySelector(".tomato"),q=document.querySelector(".brandLogo"),D=document.querySelector(".aboutPage"),L=document.querySelector(".aboutBtn"),h=(document.querySelector(".menulink-toggle"),document.querySelector(".modesLink")),C=document.querySelector(".modesDiv");let x=0;const I=e=>{V=e,localStorage.savedTheme=e},T=(e,t)=>{u.style.backgroundColor=t,u.style.color=e},B=e=>i.style.backgroundColor=e,A=(e,t,r)=>{o.style.color=e,o.style.backgroundColor=t,o.style.border=r},F=e=>{y.style.backgroundColor=e},$=(e,t,r)=>{[c,l,a,s].forEach((o=>{o.style.backgroundColor=t,o.style.color=e,o.addEventListener("mouseover",(()=>{o.style.backgroundColor=r,o.style.color=t})),o.addEventListener("mouseout",(()=>{o.style.backgroundColor=t,o.style.color=e}))}))},H=(e,t,r)=>{n.style.backgroundColor=t,n.addEventListener("mouseover",(()=>{n.style.backgroundColor=r,n.style.color=e})),n.addEventListener("mouseout",(()=>{n.style.backgroundColor=t}))},w=()=>{I("gruvHard"),T("#c8ccd4","#1D2021"),B("#242829"),A("c8ccd4","#242829","6px solid #83a598"),$("#c8ccd4","#1D2021","#83a598"),H("#242829","#83a598","#c8ccd4"),F("#2E3233")},P=()=>{I("dark"),T("#f9fcfb","#222831"),B("#2C323B"),A("#f9fcfb","#2C323B","6px solid #a7c5eb"),F("#40464F"),$("#f9fcfb","#2C323B","#a7c5eb"),H("#2C323B","#a7c5eb","#f9fcfb")},j=()=>{I("light"),T("#36404c","#fafafa"),B("#a7c5eb"),A("#f9fcfb","#36404c","0px solid #36404c"),F("#f9fcfb"),$("#f9fcfb","#36404c","#a7c5eb"),H("#36404c","#a7c5eb","#f9fcfb")},O=()=>{I("nord"),T("#D8DEE9","#2E3440"),B("#323846"),A("#D8DEE9","#323846","6px solid #81A1C1"),F("#424854"),$("#D8DEE9","#2E3440","#81A1C1"),H("#2E3440","#81A1C1","#D8DEE9")},M=()=>{I("dracula"),T("#D8DEE9","#282a36"),B("#323440"),A("#D8DEE9","#323440","6px solid #bd93f9"),F("#464854"),$("#D8DEE9","#282a36","#bd93f9"),H("#282a36","#bd93f9","#D8DEE9")},N=()=>{I("tomato"),T("#623A3F","#e5707e"),B("#F98492"),A("#954952","#F98492","6px solid #D36774"),F("#D36774"),$("#954952","#FF8E9C","#a7c5eb"),H("#222831","#D36774","#f9fcfb")};p.addEventListener("click",j),v.addEventListener("click",P),g.addEventListener("click",O),b.addEventListener("click",M),k.addEventListener("click",w),S.addEventListener("click",N);const z=(e,t)=>{o.innerText=e<10?`0${e} : ${t}`:t<10?`${e} : 0${t}`:`${e} : ${t}`},K=()=>{o.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",o.innerText=">:("},G=(e,t,r)=>{const o=document.querySelector("."+e);o.setAttribute("title",t);const c=document.createElement("i");c.classList.add("fas",r,"fa-lg"),o.appendChild(c)};[c,l,n].forEach((e=>{e.addEventListener("click",(()=>{o.style.animation=" none",o.style.backgroundImage="none","reset"===e.className?(R="reset",clearInterval(Q),X=60*W,z(25,0)):(new Audio("./assets/sounds/tick.mp3").play(),R="start"===e.className?"start":"restart",clearInterval(Q),Z())}))})),a.addEventListener("click",(()=>{X!==60*W&&0!==X||K(),R="pause",J=X,clearInterval(Q);const e=Math.floor(J/60);z(e,J%60)})),s.addEventListener("click",(()=>{X===60*W||0===X?K():"pause"==R&&X>0&&Z(),R="resume"})),f.addEventListener("mouseover",(()=>{f.style.textDecoration="underline"})),f.addEventListener("mouseout",(()=>{f.style.textDecoration="none"})),f.addEventListener("click",(()=>{[i,o,y,n,D].forEach((e=>{e.style.display="none"})),E.style.display="grid"})),q.addEventListener("click",(()=>{[i,o,y,n].forEach((e=>{e.style.display=""})),[E,D,C].forEach((e=>{e.style.display="none"}))})),L.addEventListener("click",(()=>{[i,o,y,n,E,C].forEach((e=>{e.style.display="none"})),D.style.display="block"})),h.addEventListener("click",(()=>{[E,D,i,o,y,n].forEach((e=>{e.style.display="none"})),C.style.display="block"}));let J,Q,R,U=0,V="lightTheme";(()=>{if(localStorage.length>0)switch(U=localStorage.getItem("savedScore"),V=localStorage.getItem("savedTheme"),m.innerText="Score : "+U,V){case"dark":P();break;case"light":j();break;case"dracula":M();break;case"nord":O();break;case"gruvHard":w();break;case"tomato":N()}})(),G("start","start","fa-rocket"),G("restart","restart","fa-redo"),G("pause","pause","fa-stop"),G("resume","resume","fa-play"),o.innerText="25 : 00";let W=25,X=60*W;const Y=()=>{var e;e=Q,0==X&&(clearInterval(e),new Audio("./assets/sounds/siren.mp3").play(),U=parseInt(U),U+=100,m.innerText="Score : "+U,localStorage.setItem("savedScore",U),localStorage.setItem("savedTheme",V));const t=Math.floor(X/60);let r=X%60;0!==X?(z(t,r),X--):z(t,r)},Z=()=>{o.style.animation="shake 4s",X="pause"==R?J:60*W,Q=setInterval(Y,1e3)};d.addEventListener("click",(()=>{x++,x%2!=0?P():j()}))}},t={};function r(o){if(t[o])return t[o].exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(791)})();