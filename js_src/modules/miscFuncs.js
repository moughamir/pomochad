import { pomoBox, score } from "./divSelectors";
import { userScore, userTheme } from "../index";
import { darkTheme, lightTheme } from "./themes";

let defaultSound = "./assets/sounds/cocGame.mp3";

const timerSound = () => {
  const audio = new Audio(defaultSound);
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
  pomoBox.innerText = "Bruh dont";
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
    userTheme == "dark" ? darkTheme() : lightTheme();
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
  saveLocalStorage,
  checkLocalStorage,
  // makeSettings,
};
