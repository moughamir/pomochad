import { pomoBox, score, progressBar } from "./modules/divSelectors";

import {
  boxText,
  checkLocalStorage,
  saveLocalStorage,
  timerSound,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";
import {} from "./modules/buttonClickActions";

// user settings ( for localStorage )
export let userScore = 0;
export let userTheme = "lightTheme";

checkLocalStorage();

// start , pause etc btns
makeSessionBtns();

// default time
let pomoMin = 25,
  pomoSec = 0,
  saveMin, // saves values when timer paused .
  saveSec,
  timer,
  currentClick;

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

  let progressBarWidth = 0;

  timer = setInterval(() => {
    if (progressBarWidth < 100) {
      progressBarWidth++;
      progressBar.value = progressBarWidth;
    }

    pomoSec--;
    boxText(pomoMin, pomoSec);

    if (pomoSec !== 0) return;

    checkTimer(timer); // if seconds turn to zero then decrement minute and check if time's up
    if (pomoSec !== 60 && pomoMin !== 0) {
      pomoSec = 60;
      pomoMin--;
    }
  }, 0);
};

export {
  pomoMin,
  pomoSec,
  currentClick,
  startPomodoro,
  timer,
  saveMin,
  saveSec,
};

toggleTheme();
