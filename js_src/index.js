import { pomoBox, score } from "./modules/divSelectors";
import {
  boxText,
  checkLocalStorage,
  saveLocalStorage,
  timerSound,
  addShakeAnimation,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";
import {} from "./modules/buttonClickActions";

// localStorage stuffs , save some defaults
let userScore = 0;
let userTheme = "lightTheme";
checkLocalStorage();

makeSessionBtns();

let saveMin, // saves values when timer paused
  timer,
  currentClick;

pomoBox.innerText = `${25} : 0${0}`; // initial output

let totalTime = 25;
let pomoTime = totalTime * 60;

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
    boxText(min, sec);
    return;
  }

  boxText(min, sec);
  pomoTime--;
};

const startPomodoro = () => {
  addShakeAnimation();

  currentClick == "pause" ? (pomoTime = saveMin) : (pomoTime = totalTime * 60);
  timer = setInterval(updatePomodoro, 1000);
};

export {
  currentClick,
  startPomodoro,
  timer,
  saveMin,
  totalTime,
  pomoTime,
  userScore,
  userTheme,
};

toggleTheme();
