import {} from "./modules/buttonClickActions";
import { score } from "./modules/divSelectors";
import {
  setBoxText,
  timerSound,
  setCircleProgress,
  setLevel_Progress,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";
import { saveUserData_toDB, getUserData_fromDB } from "./modules/userAuth.js";

import { showRemaining_Gems } from "./modules/rewardsPage.js";

// user info
export let userScore = 0,
  userTheme = "light",
  userSound = "piano",
  userMode = "default",
  userCards = 0;

//sync user data
getUserData_fromDB();
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

      score.innerText =
        parseInt(`${userScore}`) + parseInt(`${userCards}` * 2000); // shows the actual score (with purchases points included )

      showRemaining_Gems(userScore);
      saveUserData_toDB();
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
  timer = setInterval(updatePomodoro, 1000);
};

toggleTheme();

export const update_CurrentMode = () => {
  let c = document.querySelector(".current_Mode");
  c.textContent = `${userMode} mode`;
};

update_CurrentMode();

score.innerText = parseInt(`${userScore}`) + parseInt(`${userCards}` * 2000);

showRemaining_Gems(userScore);
