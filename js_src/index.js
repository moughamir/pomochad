const pomoBox = document.querySelector(".pomoBox");   // inner circle 
const start = document.querySelector(".startBtn");  

// timer divided into two blocks : mins and secs
var pomoMin = 25;
var pomoSec = 00;
var multipleClicks = 0;

// displays the initial output for the timer
pomoBox.innerText = `${pomoMin} : 0${pomoSec}`;

const boxText = (min, sec) => {
  pomoBox.innerText = `${min} : ${sec}`;
};

const timerSound = () => {
  var audio = new Audio("./assets/sounds/cocGame.mp3");
  audio.play();
};

const startPomodoro = () => {
  (pomoSec = 60), pomoMin--;
  const timer = setInterval(function () {
    const checkk = () => {
      if (pomoMin == 0) {
        if (pomoSec == 0) {
          clearInterval(timer);
          pomoSec = 0;
          timerSound();
        }
      }
    };
    pomoSec--;
    pomoSec == 0
      ? (boxText(pomoMin, pomoSec), checkk(), (pomoSec = 60), pomoMin--)
      : boxText(pomoMin, pomoSec);
  }, 1000);
};

// restart btn 
start.addEventListener("click", () => {
  multipleClicks++;
  multipleClicks >= 2 ? startPomodoro() : startPomodoro();
});
