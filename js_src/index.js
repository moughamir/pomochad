const box = document.querySelector(".box");

// timer divided into two blocks : secs and mins
var pomoMin = 25;
var pomoSec = 60;

// displays the initial output for the timer
box.innerText = `${pomoMin} : ${pomoSec}`;

const boxText = (min, sec) => {
  box.innerText = `${min} : ${sec}`;
};

const timerSound = () => {
  var audio = new Audio("./assets/sounds/cocGame.mp3");
  audio.play();
};


const startPomodoro = () => {
  const timer = setInterval(function () {
    const checkk = () => {
      if (pomoMin == 25) {
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

startPomodoro();


