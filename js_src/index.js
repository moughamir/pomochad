const pomoBox = document.querySelector(".pomoBox"); // inner circle
const start = document.querySelector(".startBtn");

// timer divided into two blocks : mins and secs
var pomoMin = 25;
var pomoSec = 00;

// displays the initial output for the timer
pomoBox.innerText = `${pomoMin} : 0${pomoSec}`;

// displays timer's text on the screen bruh
const boxText = (min, sec) => {
  if (min < 10) pomoBox.innerText = `0${min} : ${sec}`;
  else if (sec < 10) pomoBox.innerText = `${min} : 0${sec}`;
  else {
    pomoBox.innerText = `${min} : ${sec}`;
  }
};

const timerSound = () => {
  const audio = new Audio("./assets/sounds/cocGame.mp3");
  audio.play();
};

const checkTimer = (temp) => {
  if (pomoMin == 0 && pomoSec == 0) {
    clearInterval(temp), (pomoSec = 0), timerSound();
    return;
  }
};

let timer  ; 

const startPomodoro = () => {
  (pomoSec = 60), (pomoMin = 24);

  timer = setInterval(function () {
  pomoSec--;
  pomoSec == 0
    ? (boxText(pomoMin, pomoSec), checkTimer(timer), (pomoSec = 60), pomoMin--)
    : boxText(pomoMin, pomoSec);
}, 1000);
};

// restart timer
start.addEventListener("click", () => {
  clearInterval(timer) , startPomodoro() ;
});
