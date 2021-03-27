(()=>{"use strict";var e={717:(e,t,o)=>{o.d(t,{gz:()=>Me,sS:()=>ze,rC:()=>$e,DH:()=>Ue,HT:()=>Pe,m1:()=>je,jW:()=>We,_:()=>Oe,LK:()=>Te,g1:()=>Fe,E5:()=>_e});const r=document.querySelector(".flexMain"),l=document.querySelector(".pause"),n=document.querySelector(".start"),a=document.querySelector(".reset"),s=document.querySelector(".themeToggle_btn"),c=document.querySelector("body"),d=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),i=document.querySelector(".score"),y=document.querySelector(".settingsBtn"),m=document.querySelector(".settingsPage"),f=document.querySelector(".defaultDark"),g=document.querySelector(".defaultLight"),S=document.querySelector(".brandLogo"),E=document.querySelector(".aboutPage"),b=document.querySelector(".dashboardLink"),k=document.querySelector(".dashboardPage"),v=document.querySelector(".aboutBtn"),h=document.querySelector(".menulink-toggle"),p=document.querySelector(".modesLink"),C=document.querySelector(".modesDiv"),q=document.querySelector(".modeCurrentTime"),L=document.querySelector(".increaseTimeArrow"),A=document.querySelector(".decreaseTimeArrow"),I=document.querySelector(".breakMode"),x=document.querySelector(".defaultMode"),B=document.querySelector(".automaticMode"),D=document.querySelector(".timerModes"),w=document.querySelector(".modeSettings"),$=document.querySelector(".increaseTimeChevron"),P=document.querySelector(".saveBtnFLex");document.querySelector(".timerSoundsDiv");let M=document.querySelector(".sound_Settings");const T=e=>{let t=document.createElement("p");t.classList.add("timer_audio"),t.textContent=e,M.appendChild(t)},_=["cocGame","siren","yooo","pikachuu","angryBird","gnuReload","piano","vasco_shot","pizzaro"];(()=>{for(let e=0;e<_.length;e++)T(_[e])})();let F=document.querySelectorAll(".timer_audio");F.forEach((e=>{e.addEventListener("mouseover",(()=>{e.style.backgroundColor="#545E6A",e.style.cursor="pointer",e.style.color="white"})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor="#fafafa",e.style.cursor="default",e.style.color="#545E6A"})),e.addEventListener("click",(()=>{for(let e=0;e<_.length;e++)F[e].style.border="none",F[e].style.color="#82868E",F[e].style.textDecoration="line-through";e.style.textDecoration="none",e.style.color="#545E6A",e.style.border="5px dotted #545E6A",e.style.backgroundColor="pink";let t=document.querySelector("#dingding");Fe=e.innerText,localStorage.savedSound=Fe,t.setAttribute("src",`./assets/sounds/${Fe}.mp3`),oe()}))}));let O=0;const j=e=>{_e=e,localStorage.savedTheme=e},z=(e,t)=>{c.style.backgroundColor=t,c.style.color=e},H=(e,t)=>{let o=document.querySelector(".current_Mode");o.style.color=e,o.style.backgroundColor=t},U=(e,t)=>{d.style.backgroundColor=e,d.style.borderColor=t},W=(e,t,o)=>{let r=document.querySelector(".innerC"),l=document.querySelector(".outerC"),n=document.querySelector("svg");l.style.stroke=e,r.style.stroke=t,n.style.fill=o},K=(e,t)=>{u.style.backgroundColor=e,u.style.borderColor=t},R=(e,t,o)=>{[n,l].forEach((r=>{r.style.backgroundColor=t,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=o,r.style.color=t})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=t,r.style.color=e}))}))},V=(e,t,o)=>{a.style.backgroundColor=t,a.style.color=e,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=o})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=t}))},Y=(e,t,o,r,l,n)=>{D.style.backgroundColor=t,[x,I,B].forEach((o=>{o.style.color=e,o.style.backgroundColor=t,o.addEventListener("click",(()=>{}))})),x.addEventListener("click",(()=>{[I,B].forEach((e=>{e.style.backgroundColor=t})),x.style.backgroundColor=o})),I.addEventListener("click",(()=>{[x,B].forEach((e=>{e.style.backgroundColor=t})),I.style.backgroundColor=o})),B.addEventListener("click",(()=>{[x,I].forEach((e=>{e.style.backgroundColor=t})),B.style.backgroundColor=o})),w.style.backgroundColor=r,q.style.color=l,q.style.backgroundColor=n,[L,A,$].forEach((e=>{e.style.backgroundColor=n,e.style.color=l,e!=$&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=l,e.style.color=n})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=n,e.style.color=l})))})),x.style.backgroundColor=o,P.style.backgroundColor=t,P.style.color=e,P.addEventListener("mouseover",(()=>{P.style.backgroundColor=o,P.style.color=e})),P.addEventListener("mouseout",(()=>{P.style.backgroundColor=t,P.style.color=e}))},G=(e,t)=>{document.querySelectorAll("li").forEach((t=>{t.style.color=e})),document.querySelectorAll("h2").forEach((e=>{e.style.color=t,e.style.borderColor=t}))},N=(e,t)=>{let o=document.querySelector(".settingsbtn");o.style.color=e,o.style.backgroundColor=t},X=(e,t,o,r,l)=>{document.querySelector(".dashboardPage").style.backgroundColor=l,document.querySelectorAll(".currentScore").forEach((o=>{o.style.color=e,o.style.backgroundColor=t}));let n=document.querySelector(".score");n.style.backgroundColor=o,n.style.color=r},Z=(e,t,o,r)=>{let l=document.querySelector(".scoreProgress"),n=document.querySelector(".scoreInnerCircle"),a=document.querySelector(".scoreOuterCircle"),s=document.querySelector(".scoreCircle");n.style.stroke=e,a.style.stroke=t,s.style.fill=o,l.style.backgroundColor=r},J=(e,t,o,r,l)=>{let n=document.querySelector(".sound_Settings");n.style.backgroundColor=l,n.style.color=o;let a=document.querySelectorAll(".timer_audio");a.forEach((l=>{l.style.backgroundColor=r,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=t,l.style.color=e})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=r,l.style.color=o})),l.addEventListener("click",(()=>{for(let e=0;e<_.length;e++)a[e].style.color=o,a[e].style.textDecoration="line-through",a[e].style.backgroundColor=r,a[e].style.border="none";l.style.textDecoration="none",l.style.backgroundColor="red",l.style.color="blue"}))}))},Q=()=>{j("light"),z("#545E6A","#ffffff"),U("#ffffff","#fafafa"),H("#527f6b","#caf7e3"),K("#ffffff","#fafafa"),R("#668aa4","#C0E4FE","#668aa4"),V("#FD8A89","#FFD9D8","#ffffff"),N("white","#545E6A"),Y("#ffffff","#545E6A","#4a5460","#C0E4FE","#545E6A","#ffffff"),G("#545e6a","#545e6a"),W("#f0f0f0","#C0E4FE","#545e6a"),X("#82868E","#ffffff","#545e6a","#ffffff","#fafafa"),Z("#8deeb9","#f0f0f0","#82868E","#ffffff"),J("#545e6a","#ffffff","#545e6a","#8deeb9","#8deeb9"),de()},ee=()=>{j("dark"),z("#a4aeba","#1E222A"),U("#23272f","#23272f"),H("#878b93","#2d3139"),K("#2a2e36","#2a2e36"),R("#E78992","#1E222A","#E78992"),V("#a4aeba","#1E222A","#61afef"),N("#8deeb9","#23272f"),Y("#a4aeba","#2C323B","#4a5460","#40464F","#61afef","#2C323B"),G("#C3C7CF","#AAAEB6"),W("#1E222A","#61afef","#61afef"),X("#787C84","#1E222A","#FF6E67","#1E222A","#23272f"),Z("#A3BE8C","#23272f","#787C84","#1E222A"),J("#FF6E67","#1E222A","#787C84","#2a2e36","#2a2e36","#1E222A"),de()};g.addEventListener("click",Q),f.addEventListener("click",ee);let te=document.querySelector(".timerText");const oe=()=>{let e=document.querySelector("#dingding");null!=localStorage.savedSound&&(e.setAttribute("src",`./assets/sounds/${localStorage.savedSound}.mp3`),e.play()),e.play()},re=(e,t)=>{let o;e<10?o=`0${e} : ${t}`:t<10&&(o=`${e} : 0${t}`),o=`${e} : ${t}`,te.textContent=o},le=()=>{te.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",te.textContent=">:("},ne=()=>{localStorage.setItem("savedScore",Te),localStorage.setItem("savedTheme",_e),localStorage.setItem("savedSound",Fe)},ae=()=>{let e=document.querySelector(".score"),t=parseInt(e.textContent)/5e4*100,o=document.querySelector(".scoreInnerCircle"),r=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray=r,o.style.strokeDashoffset=r-t/100*r},se=e=>{q.textContent=e<10?`0${e} : 00`:`${e} : 00`},ce=()=>{let e=(je-ze/60)/je*100,t=document.querySelector(".innerC"),o=2*t.r.baseVal.value*Math.PI;t.style.strokeDasharray=o,t.style.strokeDashoffset=o-e/100*o};const de=()=>{let e="#"+document.querySelector("body").style.backgroundColor.match(/\d+/g).map((e=>(+e).toString(16).padStart(2,0))).join``;var t;document.querySelector(".aboutCaption").style.backgroundColor=(t="light"!=_e?10:-7,"#"+e.replace(/^#/,"").replace(/../g,(e=>("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2))))};let ue=document.querySelector(".auth_Div");[n,a].forEach((e=>{e.addEventListener("click",(()=>(te.style.animation=" none",te.style.backgroundImage="none","reset"===e.className?(Me="reset",clearInterval(Pe),ze=60*je,re(je,0),void ce()):(Me="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(Pe),void Ue()))))}));let ie=0;l.addEventListener("click",(()=>{ie++,Me=ie%2==0?"resume":"pause","pause"==Me?(()=>{ze!==60*je&&0!==ze||le(),Me="pause",$e=ze,clearInterval(Pe);const e=Math.floor($e/60);re(e,$e%60)})():(ze!==60*je&&0!==ze||le(),Me="pause",ze!=60*je&&Ue())})),y.addEventListener("mouseover",(()=>y.style.textDecoration="underline")),y.addEventListener("mouseout",(()=>y.style.textDecoration="none")),y.addEventListener("click",(()=>{[d,u,a,E,C,k,r,ue].forEach((e=>e.style.display="none")),m.style.display="flex"}));const ye=()=>{[d,u,a,r].forEach((e=>{e.style.display=""})),[m,E,C,k,ue].forEach((e=>e.style.display="none"))};S.addEventListener("click",(()=>ye())),v.addEventListener("click",(()=>([d,u,a,m,C,k,r,ue].forEach((e=>{e.style.display="none"})),void(E.style.display="block")))),p.addEventListener("click",(()=>([m,E,d,u,a,k,r,ue].forEach((e=>{e.style.display="none"})),void(C.style.display="block")))),b.addEventListener("click",(()=>([d,u,a,m,C,E,r,ue].forEach((e=>{e.style.display="none"})),void(k.style.display="grid")))),L.addEventListener("click",(()=>{je++,se(je),re(je,0)})),A.addEventListener("click",(()=>{je>1&&(je--,se(je),re(je,0))})),x.addEventListener("click",(()=>{[I,B].forEach((e=>{e.style.backgroundColor="#36404c"})),je=25,se(je),x.style.backgroundColor="#4a5460",Oe="default",We()})),I.addEventListener("click",(()=>{[x,B].forEach((e=>{e.style.backgroundColor="#36404c"})),je=5,se(je),I.style.backgroundColor="#4a5460",Oe="break",We()})),B.addEventListener("click",(()=>{[I,x].forEach((e=>{e.style.backgroundColor="#36404c"})),je=25,se(je),B.style.backgroundColor="#4a5460",Oe="automatic",alert("in progress!"),We()})),P.addEventListener("click",(()=>ye()));let me=document.querySelector(".navBarLinks");h.addEventListener("click",(()=>me.classList.toggle("show")));const fe=(e,t,o)=>{const r=document.querySelector("."+e);r.setAttribute("title",t);const l=document.createElement("i");l.classList.add("fas",o,"fa-lg"),r.appendChild(l)};firebase.initializeApp({apiKey:"AIzaSyAk8kebOX8MDqtYYyy7sAdd4fsZa4R8M0s",authDomain:"pomoreward.firebaseapp.com",projectId:"pomoreward",storageBucket:"pomoreward.appspot.com",messagingSenderId:"319256565665",appId:"1:319256565665:web:62d73e7fb1a493d51d5de0"});const ge=firebase.auth(),Se=e=>{let t=document.querySelector(".userAvatar_Div"),o=document.querySelector(".email_InputDiv"),r=document.querySelector(".pass_InputDiv");"show"==e?(o.style.display="none",r.style.display="none",t.style.display="flex"):(t.style.display="none",o.style.display="flex",r.style.display="flex")};let Ee=document.getElementById("signUpBtn"),be=document.getElementById("signInBtn"),ke=document.getElementById("signOutBtn"),ve=document.querySelector(".authDiv_Header");const he=e=>{let t="";for(let o=0;o<e.length&&"@"!=e[o];o++)t+=e[o];return t};ge.onAuthStateChanged((function(e){if(e){let t=e.email;ve.innerText=he(t),be.style.display="none",Ee.style.display="none",Se("show")}else Se("hide"),ve.innerText="Account",be.style.display="flex",Ee.style.display="flex"})),Ee.addEventListener("click",(()=>{(()=>{let e=document.getElementById("userEmail"),t=document.getElementById("userPassword");ge.createUserWithEmailAndPassword(e.value,t.value).catch((e=>alert(e.message))),alert("Signed Up")})()})),be.addEventListener("click",(()=>{(()=>{let e=document.getElementById("userEmail"),t=document.getElementById("userPassword");ge.signInWithEmailAndPassword(e.value,t.value).catch((e=>alert(e.message)))})()})),ke.addEventListener("click",(()=>{(()=>{let e=document.getElementById("userEmail"),t=document.getElementById("userPassword");e.value="",t.value="",ge.signOut()})()}));let pe=document.querySelector(".userStatus"),Ce=document.querySelector(".auth_Div");const qe=document.querySelector(".settingsPage"),Le=document.querySelector(".dashboardPage"),Ae=document.querySelector(".modesDiv"),Ie=document.querySelector(".aboutPage"),xe=document.querySelector(".reset"),Be=document.querySelector(".squareBox"),De=document.querySelector(".sessionBtns"),we=document.querySelector(".flexMain");pe.addEventListener("click",(()=>{[qe,Ie,Be,De,xe,Le,we,Ae].forEach((e=>{e.style.display="none"})),Ce.style.display="flex"}));let $e,Pe,Me,Te=0,_e="lightTheme",Fe="piano",Oe="default";(()=>{switch(Te=localStorage.getItem("savedScore"),_e=localStorage.getItem("savedTheme"),Fe=localStorage.getItem("savedSound"),0==localStorage.length||null==localStorage.savedScore?(Te=0,localStorage.savedScore=0,ne()):3==localStorage.length&&document.querySelector("#dingding").setAttribute("src",`./assets/sounds/${Fe}.mp3`),i.innerText=`${Te}`,_e){case"dark":ee();break;case"light":Q()}})(),fe("start","start","fa-play"),fe("reset","reset","fa-redo"),fe("pause","pause","fa-stop");let je=25,ze=60*je;const He=()=>{0==ze&&(clearInterval(Pe),oe(),"default"==Oe&&(Te=parseInt(Te),Te+=4*je,ae(),i.innerText=`${Te}`,ne()));const e=Math.floor(ze/60),t=ze%60;0!==ze?(re(e,t),ze--,ce()):re(e,t)},Ue=()=>{ze="pause"==Me?$e:60*je,Pe=setInterval(He,1e3)};ae(),s.addEventListener("click",(()=>{s.classList.toggle("ph-toggle-right"),O++,O%2!=0?ee():Q()}));const We=()=>{document.querySelector(".current_Mode").textContent=`${Oe} mode`};We(),ge.onAuthStateChanged((function(e){if(e){let t=he(e.email);firebase.database().ref(`users/${t}`).set({score:`${Te}`,theme:`${_e}`,sound:`${Fe}`})}})),ge.onAuthStateChanged((function(e){if(e){let t=he(e.email);firebase.database().ref("users").child(t).on("value",(function(e){console.log(e.val().score)}))}}))}},t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(717)})();