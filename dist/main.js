(()=>{var e={21:(e,t,o)=>{"use strict";o.d(t,{gz:()=>qe,sS:()=>Be,rC:()=>be,DH:()=>xe,HT:()=>ve,m1:()=>Le,_:()=>De,LK:()=>he,g1:()=>Ae,E5:()=>pe});const r=document.querySelector(".flexMain"),l=document.querySelector(".pause"),c=document.querySelector(".start"),a=document.querySelector(".reset"),n=document.querySelector(".fa-adjust"),s=document.querySelector("body"),d=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),i=document.querySelector(".score"),y=document.querySelector(".settingsBtn"),f=document.querySelector(".settingsPage"),E=document.querySelector(".dracula"),m=document.querySelector(".nord"),g=document.querySelector(".gruvHard"),S=document.querySelector(".defaultDark"),C=document.querySelector(".defaultLight"),k=document.querySelector(".brandLogo"),b=document.querySelector(".aboutPage"),v=document.querySelector(".dashboardLink"),q=document.querySelector(".dashboardPage"),h=document.querySelector(".aboutBtn"),p=document.querySelector(".menulink-toggle"),A=document.querySelector(".modesLink"),D=document.querySelector(".modesDiv"),L=document.querySelector(".modeCurrentTime"),B=document.querySelector(".increaseTimeArrow"),I=document.querySelector(".decreaseTimeArrow"),x=document.querySelector(".breakMode"),F=document.querySelector(".defaultMode"),P=document.querySelector(".automaticMode"),w=document.querySelector(".timerModes"),M=document.querySelector(".modeSettings"),T=document.querySelector(".increaseTimeChevron"),$=document.querySelector(".saveBtnFLex");document.querySelector(".timerSoundsDiv");let _=document.querySelector(".sound_Settings");const O=e=>{let t=document.createElement("p");t.classList.add("timer_audio"),t.textContent=e,_.appendChild(t)},j=["cocGame","siren","yooo","pikachuu","angryBird","gnuReload","piano","vasco_shot","pizzaro"];(()=>{for(let e=0;e<j.length;e++)O(j[e])})();let z=document.querySelectorAll(".timer_audio");z.forEach((e=>{e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#545E6A",e.style.cursor="pointer",e.style.color="white"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#fafafa",e.style.cursor="default",e.style.color="#545E6A"})),e.addEventListener("click",(()=>{for(let e=0;e<j.length;e++)z[e].style.border="none",z[e].style.color="#82868E",z[e].style.textDecoration="line-through";e.style.textDecoration="none",e.style.color="#545E6A",e.style.border="5px dotted #545E6A",e.style.backgroundColor="pink";let t=document.querySelector("#dingding");Ae=e.innerText,localStorage.savedSound=Ae,t.setAttribute("src",`./assets/sounds/${Ae}.mp3`),ne()}))}));let H=0;const K=e=>{pe=e,localStorage.savedTheme=e},R=(e,t)=>{s.style.backgroundColor=t,s.style.color=e},U=(e,t)=>{d.style.backgroundColor=e,d.style.borderColor=t},V=(e,t,o)=>{let r=document.querySelector(".innerC"),l=document.querySelector(".outerC"),c=document.querySelector("svg");l.style.stroke=e,r.style.stroke=t,c.style.fill=o},W=(e,t)=>{u.style.backgroundColor=e,u.style.borderColor=t},Y=(e,t,o)=>{[c,l].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},G=(e,t,o)=>{a.style.backgroundColor=t,a.style.color=e,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=o})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=t}))},N=(e,t,o,r,l,c)=>{w.style.backgroundColor=t,[F,x,P].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),F.addEventListener("click",(()=>{[x,P].forEach((e=>{e.style.backgroundColor=t})),F.style.backgroundColor=o})),x.addEventListener("click",(()=>{[F,P].forEach((e=>{e.style.backgroundColor=t})),x.style.backgroundColor=o})),P.addEventListener("click",(()=>{[F,x].forEach((e=>{e.style.backgroundColor=t})),P.style.backgroundColor=o})),M.style.backgroundColor=r,L.style.color=l,L.style.backgroundColor=c,[B,I,T].forEach((e=>{e.style.backgroundColor=c,e.style.color=l,e!=T&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=l,e.style.color=c})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=c,e.style.color=l})))})),F.style.backgroundColor=o,$.style.backgroundColor=t,$.style.color=e,$.addEventListener("mouseover",(()=>{$.style.backgroundColor=o,$.style.color=e})),$.addEventListener("mouseout",(()=>{$.style.backgroundColor=t,$.style.color=e}))},X=(e,t)=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((e=>{e.style.color=t,e.style.borderColor=t}))},Z=(e,t)=>{let o=document.querySelector(".settingsbtn");o.style.color=e,o.style.backgroundColor=t},J=(e,t,o,r,l)=>{document.querySelector(".dashboardPage").style.backgroundColor=l,document.querySelectorAll(".currentScore").forEach((o=>{o.style.color=e,o.style.backgroundColor=t}));let c=document.querySelector(".score");c.style.backgroundColor=o,c.style.color=r},Q=(e,t,o,r)=>{let l=document.querySelector(".scoreProgress"),c=document.querySelector(".scoreInnerCircle"),a=document.querySelector(".scoreOuterCircle"),n=document.querySelector(".scoreCircle");c.style.stroke=e,a.style.stroke=t,n.style.fill=o,l.style.backgroundColor=r},ee=(e,t,o,r,l)=>{let c=document.querySelector(".sound_Settings");c.style.backgroundColor=l,c.style.color=o;let a=document.querySelectorAll(".timer_audio");a.forEach((l=>{l.style.backgroundColor=r,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=t,l.style.color=e})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=r,l.style.color=o})),l.addEventListener("click",(()=>{for(let e=0;e<j.length;e++)a[e].style.color=o,a[e].style.textDecoration="line-through",a[e].style.backgroundColor=r,a[e].style.border="none";l.style.textDecoration="none",l.style.backgroundColor="red",l.style.color="blue"}))}))},te=()=>{K("dracula"),R("#D8DEE9","#1e1f29"),U("#282a36","282a36"),W("#31333f","#31333f"),Y("#D8DEE9","#1e1f29","#FF6E67"),G("#1e1f29","#FF6E67","#D8DEE9"),N("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),X("#AEB4D5","#82838D"),V("#1e1f29","#5AF78E","#5AF78E"),Z("#FF6E67","#242829"),J("#8C8E9A","#1e1f29","#6272a4","#282a36","#282a36"),Q("#5AF78E","#282a36","#646672","#1e1f29"),ee("#5AF78E","#1e1f29","#8C8E9A","#282a36","#282a36"),Ee()},oe=()=>{K("gruvHard"),R("#c8ccd4","#1D2021"),U("#242829","#242829"),Y("#c8ccd4","#1D2021","#83a598"),G("#242829","#83a598","#c8ccd4"),W("#2E3233","#2E3233"),N("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),X("#C3C7CF","#A9ACAD"),Z("#242829","#A3BE8C"),V("#1D2021","#83a598","#83a598"),J("#6D7071","#1D2021","#665c54","#1D2021","#242829"),Q("#EBCB8B","#242829","#6D7071","#1D2021"),ee("#83a598","#1D2021","#6D7071","#242829","#242829","#1D2021"),Ee()},re=()=>{K("dark"),R("#f9fcfb","#1E222A"),U("#23272f","#23272f"),W("#2a2e36","#2a2e36"),Y("#E78992","#1E222A","#E78992"),G("#f9fcfb","#1E222A","#61afef"),Z("#1E222A","#61afef"),N("#f9fcfb","#2C323B","#4a5460","#40464F","#61afef","#2C323B"),X("#C3C7CF","#AAAEB6"),V("#1E222A","#61afef","#61afef"),J("#787C84","#1E222A","#FF6E67","#1E222A","#23272f"),Q("#A3BE8C","#23272f","#787C84","#1E222A"),ee("#FF6E67","#1E222A","#787C84","#2a2e36","#2a2e36","#1E222A"),Ee()},le=()=>{K("light"),R("#545E6A","#ffffff"),U("#ffffff","#fafafa"),W("#ffffff","#fafafa"),Y("#545E6A","#C0E4FE","#545e6a"),G("#FD8A89","#FFD9D8","#ffffff"),Z("#545e6a","#C0E4FE"),N("#ffffff","#545E6A","#4a5460","#C0E4FE","#545E6A","#ffffff"),X("#545e6a","#3C3E4A"),V("#f0f0f0","#C0E4FE","#545e6a"),J("#82868E","#ffffff","#545e6a","#ffffff","#fafafa"),Q("#8deeb9","#f0f0f0","#82868E","#ffffff"),ee("#545e6a","#ffffff","#545e6a","#8deeb9","#8deeb9"),Ee()},ce=()=>{K("nord"),R("#D8DEE9","#282E3A"),U("#2E3440","#2E3440"),W("#434C5E","#434C5E"),Y("#81A1C1","#282E3A","#81A1C1"),G("#2E3440","#A3BE8C","#D8DEE9"),N("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),X("#c8ccd4","#8C929E"),Z("#EBCB8B","#3C3E4A"),V("#282E3A","#81A1C1","#81A1C1"),J("#8C929E","#282E3A","#81A1C1","#2E3440","#2E3440"),Q("#BF616A","#2E3440","#8C929E","#282E3A"),ee("#EBCB8B","#282E3A","#8C929E","#2E3440","#2E3440","#282E3A"),Ee()};C.addEventListener("click",le),S.addEventListener("click",re),m.addEventListener("click",ce),E.addEventListener("click",te),g.addEventListener("click",oe);let ae=document.querySelector(".timerText");const ne=()=>{let e=document.querySelector("#dingding");null!=localStorage.savedSound&&(e.setAttribute("src",`./assets/sounds/${localStorage.savedSound}.mp3`),e.play()),e.play()},se=(e,t)=>{let o;e<10?o=`0${e} : ${t}`:t<10&&(o=`${e} : 0${t}`),o=`${e} : ${t}`,ae.textContent=o},de=()=>{ae.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",ae.textContent=">:("},ue=()=>{localStorage.setItem("savedScore",he),localStorage.setItem("savedTheme",pe),localStorage.setItem("savedSound",Ae)},ie=()=>{let e=document.querySelector(".score"),t=parseInt(e.textContent)/5e4*100,o=document.querySelector(".scoreInnerCircle"),r=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray=r,o.style.strokeDashoffset=r-t/100*r},ye=e=>{L.textContent=e<10?`0${e} : 00`:`${e} : 00`},fe=()=>{let e=(Le-Be/60)/Le*100,t=document.querySelector(".innerC"),o=2*t.r.baseVal.value*Math.PI;t.style.strokeDasharray=o,t.style.strokeDashoffset=o-e/100*o};const Ee=()=>{let e="#"+document.querySelector("body").style.backgroundColor.match(/\d+/g).map((e=>(+e).toString(16).padStart(2,0))).join``;var t;document.querySelector(".aboutCaption").style.backgroundColor=(t="light"!=pe?7:-6,"#"+e.replace(/^#/,"").replace(/../g,(e=>("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2))))};let me=document.querySelector(".auth_Div");[c,a].forEach((e=>{e.addEventListener("click",(()=>(ae.style.animation=" none",ae.style.backgroundImage="none","reset"===e.className?(qe="reset",clearInterval(ve),Be=60*Le,se(Le,0),void fe()):(qe="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(ve),void xe()))))}));let ge=0;l.addEventListener("click",(()=>{ge++,qe=ge%2==0?"resume":"pause","pause"==qe?(()=>{Be!==60*Le&&0!==Be||de(),qe="pause",be=Be,clearInterval(ve);const e=Math.floor(be/60);se(e,be%60)})():(Be!==60*Le&&0!==Be||de(),qe="pause",Be!=60*Le&&xe())})),y.addEventListener("mouseover",(()=>y.style.textDecoration="underline")),y.addEventListener("mouseout",(()=>y.style.textDecoration="none")),y.addEventListener("click",(()=>{[d,u,a,b,D,q,r,me].forEach((e=>e.style.display="none")),f.style.display="flex"}));const Se=()=>{[d,u,a,r].forEach((e=>{e.style.display=""})),[f,b,D,q,me].forEach((e=>e.style.display="none"))};k.addEventListener("click",(()=>Se())),h.addEventListener("click",(()=>([d,u,a,f,D,q,r,me].forEach((e=>{e.style.display="none"})),void(b.style.display="block")))),A.addEventListener("click",(()=>([f,b,d,u,a,q,r,me].forEach((e=>{e.style.display="none"})),void(D.style.display="block")))),v.addEventListener("click",(()=>([d,u,a,f,D,b,r,me].forEach((e=>{e.style.display="none"})),void(q.style.display="grid")))),B.addEventListener("click",(()=>{Le++,ye(Le),se(Le,0)})),I.addEventListener("click",(()=>{Le>1&&(Le--,ye(Le),se(Le,0))})),F.addEventListener("click",(()=>{[x,P].forEach((e=>{e.style.backgroundColor="#36404c"})),Le=25,ye(Le),F.style.backgroundColor="#4a5460",De="default"})),x.addEventListener("click",(()=>{[F,P].forEach((e=>{e.style.backgroundColor="#36404c"})),Le=5,ye(Le),x.style.backgroundColor="#4a5460",De="break"})),P.addEventListener("click",(()=>{[x,F].forEach((e=>{e.style.backgroundColor="#36404c"})),Le=25,ye(Le),P.style.backgroundColor="#4a5460",De="automatic"})),$.addEventListener("click",(()=>Se()));let Ce=document.querySelector(".navBarLinks");p.addEventListener("click",(()=>Ce.classList.toggle("show")));const ke=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const l=document.createElement("i");l.classList.add("fas",o,"fa-lg"),r.appendChild(l)};o(912);let be,ve,qe,he=0,pe="lightTheme",Ae="yooo",De="default";(()=>{switch(he=localStorage.getItem("savedScore"),pe=localStorage.getItem("savedTheme"),Ae=localStorage.getItem("savedSound"),0==localStorage.length||null==localStorage.savedScore?(he=0,localStorage.savedScore=0,ue()):3==localStorage.length&&document.querySelector("#dingding").setAttribute("src",`./assets/sounds/${Ae}.mp3`),i.innerText=`${he}`,pe){case"dark":re();break;case"light":le();break;case"dracula":te();break;case"nord":ce();break;case"gruvHard":oe()}})(),ke("start","start","fa-play"),ke("reset","reset","fa-redo"),ke("pause","pause","fa-stop");let Le=25,Be=60*Le;const Ie=()=>{0==Be&&(clearInterval(ve),ne(),"default"==De&&(he=parseInt(he),he+=4*Le,ie(),i.innerText=`${he}`,ue()));const e=Math.floor(Be/60),t=Be%60;0!==Be?(se(e,t),Be--,fe()):se(e,t)},xe=()=>{Be="pause"==qe?be:60*Le,ve=setInterval(Ie,1e3)};ie(),n.addEventListener("click",(()=>{H++,H%2!=0?re():le()}))},912:()=>{firebase.initializeApp({apiKey:"AIzaSyAk8kebOX8MDqtYYyy7sAdd4fsZa4R8M0s",authDomain:"pomoreward.firebaseapp.com",projectId:"pomoreward",storageBucket:"pomoreward.appspot.com",messagingSenderId:"319256565665",appId:"1:319256565665:web:62d73e7fb1a493d51d5de0"});const e=firebase.auth();e.onAuthStateChanged((e=>{if(e){var t=e.email;console.log(t)}}));let t=document.getElementById("signInBtn"),o=document.getElementById("signOutBtn");document.getElementById("signUpBtn").addEventListener("click",(()=>{(()=>{let t=document.querySelector("#userEmail"),o=document.querySelector("#userPassword");e.createUserWithEmailAndPassword(t.value,o.value).catch((e=>alert(e.message)))})()})),t.addEventListener("click",(()=>{(()=>{let t=document.querySelector("#userEmail"),o=document.querySelector("#userPassword");e.signInWithEmailAndPassword(t.value,o.value).catch((e=>alert(e.message))),console.log("signed in! "+t.value)})()})),o.addEventListener("click",(()=>{e.signOut,alert("Signed out :<")}));let r=document.querySelector(".userStatus"),l=document.querySelector(".auth_Div");const c=document.querySelector(".settingsPage"),a=document.querySelector(".dashboardPage"),n=document.querySelector(".modesDiv"),s=document.querySelector(".aboutPage"),d=document.querySelector(".reset"),u=document.querySelector(".squareBox"),i=document.querySelector(".sessionBtns"),y=document.querySelector(".flexMain");r.addEventListener("click",(()=>{[c,s,u,i,d,a,y,n].forEach((e=>{e.style.display="none"})),l.style.display="grid"}))}},t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(21)})();