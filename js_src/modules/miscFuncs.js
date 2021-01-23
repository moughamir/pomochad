import { pomoBox, score } from "./divSelectors";
import { userScore } from "../index";

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
  alert("press restart , start or reset :(");
};

const saveLocalStorage = () => {
  localStorage.setItem("savedScore", userScore);
};

const checkLocalStorage = () => {
  if (localStorage.length > 0) {
    userScore = localStorage.getItem("savedScore");
    score.innerText = "Score : " + userScore;
  }
};

export {
  timerSound,
  boxText,
  displayError,
  showWarnings,
  saveLocalStorage,
  checkLocalStorage,
};
