import {} from "./modules/buttonClickActions";
import { score } from "./modules/divSelectors";
import {
  checkLocalStorage,
  setBoxText,
  saveLocalStorage,
  timerSound,
  setCircleProgress,
  setLevel_Progress,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";

// localStorage stuffs , save some defaults
export let userScore = 0,
  userTheme = "lightTheme",
  userSound = "yooo",
  userMode = "default";

checkLocalStorage();

makeSessionBtns();

// saveMin saves values when timer paused
export let saveMin, timer, currentClick;
export let totalTime = 25,
  pomoTime = totalTime * 60;

const checkTimer = (temp) => {
  if (pomoTime == 0) {
    clearInterval(temp), timerSound();

    if (userMode == "default") {
      userScore = parseInt(userScore);
      userScore += totalTime * 4;
      setLevel_Progress();

      score.innerText = `${userScore}`;
      saveLocalStorage();
    }
  }
};

const updatePomodoro = () => {
  checkTimer(timer);

  const min = Math.floor(pomoTime / 60);
  const sec = pomoTime % 60;

  if (pomoTime === 0) {
    setBoxText(min, sec);
    return;
  }

  setBoxText(min, sec);
  pomoTime--;
  setCircleProgress();
};

export const startPomodoro = () => {
  currentClick == "pause" ? (pomoTime = saveMin) : (pomoTime = totalTime * 60);
  timer = setInterval(updatePomodoro, 0);
};

setLevel_Progress();
toggleTheme();
