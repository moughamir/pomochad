const pomoBox = document.querySelector(".pomoBox"); // inner circle
const restart = document.querySelector(".restart");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const start = document.querySelector(".start");

let isPaused = false;

// timer divided into two blocks : mins and secs
let pomoMin = 25,
  pomoSec = 00;

let saveMin, saveSec;

pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // displays the initial output for the timer

// displays timer's text
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

let timer;

const startPomodoro = () => {
  isPaused == false
    ? ((pomoSec = 60), (pomoMin = 24))
    : ((pomoMin = saveMin), (pomoSec = saveSec));

  timer = setInterval(function () {
    pomoSec--;
    pomoSec == 0
      ? (boxText(pomoMin, pomoSec),
        checkTimer(timer),
        (pomoSec = 60),
        pomoMin--)
      : boxText(pomoMin, pomoSec);
  }, 1000);
};
//
// restart timer
restart.addEventListener("click", () => {
  isPaused = false;
  clearInterval(timer), startPomodoro();
});

start.addEventListener("click", () => {
  isPaused = false;
  clearInterval(timer), startPomodoro();
});

pause.addEventListener("click", () => {
  saveMin = pomoMin;
  saveSec = pomoSec;

  isPaused = true;
  boxText(saveMin, saveSec);
  clearInterval(timer);
  pomoSec, pomoMin;
});

resume.addEventListener("click", () => {
  saveMin = pomoMin;
  saveSec = pomoSec;

  isPaused = true;
  clearInterval(timer), startPomodoro();
});
