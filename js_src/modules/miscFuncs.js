import { userScore, userTheme } from "../index";
import { modeCurrentTime, pomoBox, score } from "./divSelectors";

import {
  useDarkTheme,
  useLightTheme,
  useNordTheme,
  useDraculaTheme,
  useGruvHardTheme,
  useTomatoTheme,
} from "./themes";

let tickSound = "./assets/sounds/tick.mp3";

const timerSound = () => document.getElementById("dingding").play();

const playTickSound = () => {
  const audio = new Audio(tickSound);
  audio.play();
};

// displays timer's text ( the actual time going on )
const getBoxText = (min, sec) => {
  let temp;

  if (min < 10) temp = `0${min} : ${sec}`;
  else if (sec < 10) temp = `${min} : 0${sec}`;

  temp = `${min} : ${sec}`;
  pomoBox.innerText = temp;
};

// for wrong btn click
const displayError = (text) => (pomoBox.innerText = text);
const showWarnings = () => {
  //alert("wrong button")  will use this later
};

const addTortureAnimation = () => {
  pomoBox.style.backgroundImage =
    "url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')";

  displayError(">:(");
};

const stopTortureAnimation = () => {
  pomoBox.style.animation = " none";
  pomoBox.style.backgroundImage = "none";
};

const addShakeAnimation = () => {
  pomoBox.style.animation = "shake 4s";
};
const saveLocalStorage = () => {
  localStorage.setItem("savedScore", userScore);
  localStorage.setItem("savedTheme", userTheme);
};

const checkLocalStorage = () => {
  userScore = localStorage.getItem("savedScore");
  userTheme = localStorage.getItem("savedTheme");

  if(localStorage.length == 0) userScore = 0 ;
  score.innerText = `score : ${userScore}`;

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

    case "tomato":
      useTomatoTheme();
      break;
  }
};

/* show mode's time value */

const displayModeTime = (min) => {
  min < 10
    ? (modeCurrentTime.textContent = `0${min} : 00`)
    : (modeCurrentTime.textContent = `${min} : 00`);
};

export {
  timerSound,
  getBoxText,
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
