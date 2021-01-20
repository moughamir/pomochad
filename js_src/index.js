import { pomoBox, restart, pause, resume, start } from "./modules/divSelectors";
import { timerSound, boxText } from "./modules/miscFuncs";

let isPaused = false;

// timer divided into two blocks : mins and secs
let pomoMin = 25,
  pomoSec = 0;

let saveMin, saveSec;

pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // displays the initial output for the timer

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
  }, 0);
};

// stuffs to execute when buttons are clicked!

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
  isPaused == false ? isPaused == false : (isPaused = true);
  saveMin = pomoMin;
  saveSec = pomoSec;

  clearInterval(timer), startPomodoro();
});
