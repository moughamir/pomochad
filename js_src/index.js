import { pomoBox, score } from "./modules/divSelectors";
import {
  getBoxText,
  checkLocalStorage,
  saveLocalStorage,
  timerSound,
  addShakeAnimation,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";
import {} from "./modules/buttonClickActions";

// localStorage stuffs , save some defaults
export let userScore = 0;
export let userTheme = "lightTheme";
checkLocalStorage();

makeSessionBtns();

export let saveMin; // saves values when timer paused
export let timer;
export let currentClick;

pomoBox.innerText = `${25} : 0${0}`; // initial output

export let totalTime = 25;
export let pomoTime = totalTime * 60;

const checkTimer = (temp) => {
  if (pomoTime == 0) {
    clearInterval(temp), timerSound();

    userScore = parseInt(userScore);
    userScore += 100;

    score.innerText = "Score : " + userScore;
    saveLocalStorage();
  }
};

const updatePomodoro = () => {
  checkTimer(timer);
  
  const min = Math.floor(pomoTime / 60);
  let sec = pomoTime % 60;

  if (pomoTime === 0) {
    getBoxText(min, sec);
    return;
  }

  getBoxText(min, sec);
  pomoTime--;
};

export const startPomodoro = () => {
  addShakeAnimation();

  currentClick == "pause" ? (pomoTime = saveMin) : (pomoTime = totalTime * 60);
  timer = setInterval(updatePomodoro,0);
};

toggleTheme();
