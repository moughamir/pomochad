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
  displayError,
  saveLocalStorage,
  showWarnings,
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

let isPaused = false;
let wutsClicked,
  timesClicked = 0;

// default time
let pomoMin = 25,
  pomoSec = 0;

// saves values when timer paused .
let saveMin, saveSec, timer;

pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // initial output

const checkTimer = (temp) => {
  if (pomoMin == 0 && pomoSec == 0) {
    clearInterval(temp), (pomoSec = 0), timerSound();

    userScore = parseInt(userScore);
    userScore += 100;
    score.innerText = "Score : " + userScore;
    saveLocalStorage();

    return;
  }
};

const startPomodoro = () => {
  isPaused == false
    ? ((pomoSec = 60), (pomoMin = 24))
    : ((pomoMin = saveMin), (pomoSec = saveSec));

  timer = setInterval(() => {
    pomoSec--;
    pomoSec == 0
      ? (boxText(pomoMin, pomoSec),
        checkTimer(timer),
        (pomoSec = 60),
        pomoMin--)
      : boxText(pomoMin, pomoSec);
  }, 1000);

  return;
};

// Session button click actions

[restart, start, reset].forEach((temp) => {
  temp.addEventListener("click", () => {
    stopTortureAnimation();
    // resets time to default ( doesnt start the timer )

    if (temp.className == "reset") {
      isPaused = false;

      (pomoMin = 25), (pomoSec = 0);
      clearInterval(timer);
      boxText(pomoMin, pomoSec);
    }

    // just restarts the time
    else {
      isPaused = false;
      clearInterval(timer), startPomodoro();

      if (
        (wutsClicked == undefined && timesClicked == 0) ||
        wutsClicked == "pause"
      )
        (wutsClicked = "restart"), timesClicked++;
    }
  });
});

[pause, resume].forEach((temp) => {
  temp.addEventListener("click", () => {
    if (temp.className == "pause") {
      if (pomoBox.innerText == "00 : 0" || saveMin == 25 || pomoMin == 25) {
        showWarnings();
        addTortureAnimation();
        return;
      } else if (wutsClicked == undefined || wutsClicked == "pause") {
        wutsClicked = "pause";
        showWarnings();
        addTortureAnimation();

        return;
      }

      saveMin = pomoMin;
      saveSec = pomoSec;

      isPaused = true;
      boxText(saveMin, saveSec);
      clearInterval(timer);
      pomoSec, pomoMin;
    }

    // for resume
    else {
      if (pomoBox.innerText == "00 : 0" || saveMin == 25 || pomoMin == 25) {
        showWarnings();
        addTortureAnimation();

        return;
      } else if (wutsClicked == "pause" || isPaused == false) {
        displayError("NO");
        return;
      }
      isPaused = true;
      saveMin = pomoMin;
      saveSec = pomoSec;

      clearInterval(timer), startPomodoro();
    }
  });
});

// toggle between dark and white theme
toggleTheme();
