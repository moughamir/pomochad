import { makeSessionBtns } from "./modules/sessionButtons";
import {
  pause,
  pomoBox,
  restart,
  resume,
  start,
  reset,
  score,
} from "./modules/divSelectors";

import {
  boxText,
  timerSound,
  displayError,
  showWarnings,
  saveLocalStorage,
  checkLocalStorage,
} from "./modules/miscFuncs";

import { toggleTheme } from "./modules/themes";

export let userScore = 0;

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
  }, 0);

  return;
};

// Session button click actions

[restart, start].forEach((temp) => {
  temp.addEventListener("click", () => {
    isPaused = false;
    clearInterval(timer), startPomodoro();

    if (
      (wutsClicked == undefined && timesClicked == 0) ||
      wutsClicked == "pause"
    )
      (wutsClicked = "restart"), timesClicked++;
  });
});

pause.addEventListener("click", () => {
  if (pomoBox.innerText == "00 : 0") {
    showWarnings();
    return;
  } else if (wutsClicked == undefined || wutsClicked == "pause") {
    wutsClicked = "pause";
    displayError("NO");
    return;
  }
  saveMin = pomoMin;
  saveSec = pomoSec;

  isPaused = true;
  boxText(saveMin, saveSec);
  clearInterval(timer);
  pomoSec, pomoMin;
});

resume.addEventListener("click", () => {
  if (pomoBox.innerText == "00 : 0") {
    showWarnings();
    return;
  } else if (wutsClicked == "pause") {
    displayError("NO");
    return;
  } else if (isPaused == false) {
    isPaused = false;
    alert("press pause first !");
    return;
  } else {
    isPaused = true;
    saveMin = pomoMin;
    saveSec = pomoSec;

    clearInterval(timer), startPomodoro();
  }
});

// resets time to default ( doesnt start the timer )
reset.addEventListener("click", () => {
  (pomoMin = 25), (pomoSec = 0);
  clearInterval(timer);
  boxText(pomoMin, pomoSec);
});

// toggle between dark and white theme
toggleTheme();
