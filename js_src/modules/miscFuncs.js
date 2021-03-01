import { userScore, userTheme, userSound, totalTime, pomoTime } from "../index";
import { modeCurrentTime, score } from "./divSelectors";
import {
  useDarkTheme,
  useLightTheme,
  useNordTheme,
  useDraculaTheme,
  useGruvHardTheme,
} from "./themes";

import {} from "./settings";

let innerCircle = document.querySelector(".timerText");

// timer sound stuff
let tickSound = "./assets/sounds/tick.mp3";

const timerSound = () => {
  let b = document.querySelector("#dingding");

  if (localStorage.savedSound != null) {
    b.setAttribute("src", `./assets/sounds/${localStorage.savedSound}.mp3`);
    b.play();
  }
  b.play();
};

const playTickSound = () => {
  const audio = new Audio(tickSound);
  audio.play();
};

// displays timer's text ( the actual time going on )
const setBoxText = (min, sec) => {
  let temp;

  if (min < 10) temp = `0${min} : ${sec}`;
  else if (sec < 10) temp = `${min} : 0${sec}`;

  temp = `${min} : ${sec}`;
  innerCircle.textContent = temp;
};

// for wrong btn click
const displayError = (text) => (innerCircle.textContent = text);
const showWarnings = () => {
  /* use later */
};

const addTortureAnimation = () => {
  innerCircle.style.backgroundImage =
    "url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')";

  displayError(">:(");
};

const stopTortureAnimation = () => {
  innerCircle.style.animation = " none";
  innerCircle.style.backgroundImage = "none";
};

const addShakeAnimation = () => {
  let svgCirc = document.querySelector("svg");
  svgCirc.style.animation = "wobble 5s";
};

const saveLocalStorage = () => {
  localStorage.setItem("savedScore", userScore);
  localStorage.setItem("savedTheme", userTheme);
  localStorage.setItem("savedSound", userSound);
};

const checkLocalStorage = () => {
  userScore = localStorage.getItem("savedScore");
  userTheme = localStorage.getItem("savedTheme");
  userSound = localStorage.getItem("savedSound");

  if (localStorage.length == 0 || localStorage.savedScore == null) {
    userScore = 0;
    localStorage.savedScore = 0;
    saveLocalStorage()
  } 

  else if (localStorage.length == 3) {
    let ding = document.querySelector("#dingding");
    ding.setAttribute("src", `./assets/sounds/${userSound}.mp3`);
  }

  score.innerText = `${userScore}`;

  switch (userTheme) {
    case "dark":
      useDarkTheme();
      break;

    case "light":
      useLightTheme();
      break;

    case "dracula":
      useDraculaTheme();
      break;

    case "nord":
      useNordTheme();
      break;

    case "gruvHard":
      useGruvHardTheme();
      break;
  }
};

export const setLevel_Progress = () => {
  let score = document.querySelector(".score");

  let usrScore = parseInt(score.textContent);
  let percent = (usrScore / 50000) * 100;
  let progressCircle = document.querySelector(".scoreInnerCircle");
  let radius = progressCircle.r.baseVal.value;

  let circum = radius * 2 * Math.PI;
  progressCircle.style.strokeDasharray = circum;
  progressCircle.style.strokeDashoffset = circum - (percent / 100) * circum;
};

/* show mode's time value */

const displayModeTime = (min) => {
  modeCurrentTime.textContent = min < 10 ? `0${min} : 00` : `${min} : 00`;
};

export const setCircleProgress = () => {
  // get current Time progress in %
  let pro_Time = pomoTime / 60;
  let percent = ((totalTime - pro_Time) / totalTime) * 100;

  let progressCircle = document.querySelector(".innerC");
  let radius = progressCircle.r.baseVal.value;

  let circum = radius * 2 * Math.PI;
  progressCircle.style.strokeDasharray = circum;
  progressCircle.style.strokeDashoffset = circum - (percent / 100) * circum;
};

export {
  timerSound,
  setBoxText,
  displayError,
  showWarnings,
  addTortureAnimation,
  stopTortureAnimation,
  addShakeAnimation,
  saveLocalStorage,
  checkLocalStorage,
  playTickSound,
  displayModeTime,
};
