import { userScore, userTheme } from "../index";

import { pomoBox, score } from "./divSelectors";
import {
  useDarkTheme,
  useLightTheme,
  useNordTheme,
  useDraculaTheme,
  useGruvHardTheme,
  useTomatoTheme,
} from "./themes";

let defaultSound = "./assets/sounds/siren.mp3";
let tickSound = "./assets/sounds/tick.mp3";

const timerSound = () => {
  const audio = new Audio(defaultSound);
  audio.play();
};

const playTickSound = () => {
  const audio = new Audio(tickSound);
  audio.play();
};

// displays timer's text ( the actual time going on )
const boxText = (min, sec) => {
  if (min < 10) pomoBox.innerText = `0${min} : ${sec}`;
  else if (sec < 10) pomoBox.innerText = `${min} : 0${sec}`;
  else {
    pomoBox.innerText = `${min} : ${sec}`;
  }
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
  if (localStorage.length > 0) {
    userScore = localStorage.getItem("savedScore");
    userTheme = localStorage.getItem("savedTheme");

    score.innerText = "Score : " + userScore;

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
  }
};

/*
const makeSettings = function (theme, score) {
  return { theme, score };
}; */

export {
  timerSound,
  boxText,
  displayError,
  showWarnings,
  addTortureAnimation,
  stopTortureAnimation,
  addShakeAnimation,
  saveLocalStorage,
  checkLocalStorage,
  playTickSound,
  // makeSettings,
};
