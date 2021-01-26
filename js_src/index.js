import {
  pause,
  pomoBox,
  reset,
  restart,
  resume,
  score,
  start,
} from "./modules/divSelectors";

import {
  addTortureAnimation,
  boxText,
  checkLocalStorage,
  saveLocalStorage,
  stopTortureAnimation,
  timerSound,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";

// user settings ( for localStorage )
export let userScore = 0;
export let userTheme = "lightTheme";

checkLocalStorage();

// start , pause etc btns
makeSessionBtns();

// default time
let pomoMin = 25,
  pomoSec = 0;

// saves values when timer paused .
let saveMin, saveSec, timer, currentClick;

pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // initial output

const checkTimer = (temp) => {
  if (pomoMin === 0 && pomoSec === 0) {
    clearInterval(temp), (pomoSec = 0), timerSound();

    userScore = parseInt(userScore);
    userScore += 100;
    score.innerText = "Score : " + userScore;
    saveLocalStorage();
  }
};

const startPomodoro = () => {
  currentClick === "pause"
    ? ((pomoMin = saveMin), (pomoSec = saveSec))
    : ((pomoSec = 60), (pomoMin = 24));

  timer = setInterval(() => {
    pomoSec--;
    boxText(pomoMin, pomoSec);

    if (pomoSec !== 0) return;

    // if seconds turn to zero then decrement minute and check if time's up
    checkTimer(timer);
    if (pomoSec !== 60 && pomoMin !== 0) {
      pomoSec = 60;
      pomoMin--;
    }
  }, 0);
};

// Session button click actions

[restart, start, reset].forEach((temp) => {
  temp.addEventListener("click", () => {
    stopTortureAnimation();

    // resets time to default ( freezes it )

    if (temp.className === "reset") {
      currentClick = "reset";
      clearInterval(timer);
      pomoMin = 25;
      pomoSec = 0;
      boxText(pomoMin, pomoSec);
    }

    // restarts time
    else {
      temp.className === "start"
        ? (currentClick = "start")
        : (currentClick = "restart");

      clearInterval(timer), startPomodoro();
    }
  });
});

pause.addEventListener("click", () => {
  if ((pomoMin === 0 && pomoSec === 0) || (pomoMin === 25 && pomoSec === 0))
    addTortureAnimation();

  currentClick = "pause";
  saveMin = pomoMin;
  saveSec = pomoSec;

  clearInterval(timer);
  boxText(saveMin, saveSec);
});

resume.addEventListener("click", () => {
  if ((pomoMin === 25 && pomoSec === 0) || (pomoMin === 0 && pomoSec === 0))
    addTortureAnimation();
  else if (currentClick == "pause" && pomoSec >= 1 && pomoMin >= 0) {
    clearInterval(timer);
    startPomodoro();
  }
  currentClick = "resume";
});

toggleTheme();
