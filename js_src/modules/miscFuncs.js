import { pomoTime, totalTime, userSound, userTheme } from "../index";
import { modeCurrentTime } from "./divSelectors";
import { useDarkTheme, useLightTheme } from "./themes";
import {} from "./settings";

import { saveUserData_toDB } from "./userAuth.js";

let innerCircle = document.querySelector(".timerText");

// timer sound stuff
let tickSound = "./assets/sounds/tick.mp3";

const timerSound = () => {
  saveUserData_toDB();

  let b = document.querySelector("#dingding");
  b.setAttribute("src", `./assets/sounds/${userSound}.mp3`);

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

export const add_loadingAnimation = (n) => {
  n.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
    duration: 1000,
    iterations: 1,
  });
};

export const saveto_localStorage = () => {
  localStorage.setItem("savedTheme", userTheme);
};

export const get_localStorage = () => {
  userTheme = localStorage.getItem("savedTheme");
  userTheme == "light" ? useLightTheme() : useDarkTheme();
};

export {
  addShakeAnimation,
  addTortureAnimation,
  displayError,
  displayModeTime,
  playTickSound,
  setBoxText,
  showWarnings,
  stopTortureAnimation,
  timerSound,
};
