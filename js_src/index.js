import "./modules/buttonClickActions";

import {
  get_localStorage,
  setBoxText,
  setCircleProgress,
  timerSound,
} from "./modules/miscFuncs";

import {makeSessionBtns} from "./modules/sessionButtons";
import {toggleTheme} from "./modules/themes";
import {getUserData_fromDB} from "./modules/userAuth.js";

// user info
export let userTheme = "light", userSound = "pikachuu", userMode = "default";

get_localStorage();
getUserData_fromDB();
makeSessionBtns();

// saveMin saves values when timer paused
export let saveMin, timer, currentClick;
export let totalTime = 25, pomoTime = totalTime * 60;

const checkTimer = (temp) => {
  if (pomoTime == 0) {
    clearInterval(temp), timerSound();
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
  if (currentClick != undefined) {
    currentClick == "pause" ? (pomoTime = saveMin)
                            : (pomoTime = totalTime * 60);
  }

  timer = setInterval(updatePomodoro, 0);
};

toggleTheme(); // enables theme toggle with  dark/light

export const update_CurrentMode = () => {
  let c = document.querySelector(".current_Mode");
  c.textContent = `${userMode} mode`;
};

update_CurrentMode();
