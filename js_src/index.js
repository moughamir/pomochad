const pomoBox = document.querySelector(".pomoBox"); // inner circle
const start = document.querySelector(".startBtn");

// timer divided into two blocks : mins and secs
var pomoMin = 25;
var pomoSec = 00;
var multipleClicks = 0;

// displays the initial output for the timer
pomoBox.innerText = `${pomoMin} : 0${pomoSec}`;

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

const startPomodoro = () => {
  (pomoSec = 60), (pomoMin = 24);
  const timer = setInterval(function () {
    // check timer done or nu
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
