import { userScore, userTheme, totalTime, pomoTime } from "../index";
import { modeCurrentTime, score } from "./divSelectors";
import {
  useDarkTheme,
  useLightTheme,
  useNordTheme,
  useDraculaTheme,
  useGruvHardTheme,
  useTomatoTheme,
} from "./themes";

let innerCircle = document.querySelector(".timerText");

// timer sound stuff
let tickSound = "./assets/sounds/tick.mp3";
const timerSound = () => document.getElementById("dingding").play();
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
  //alert("wrong button")  will use this later
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
};

const checkLocalStorage = () => {
  userScore = localStorage.getItem("savedScore");
  userTheme = localStorage.getItem("savedTheme");

  if (localStorage.length == 0) userScore = 0;
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
