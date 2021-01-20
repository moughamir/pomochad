import { pomoBox } from "./divSelectors";

const timerSound = () => {
  const audio = new Audio("./assets/sounds/cocGame.mp3");
  audio.play();
};

// displays timer's text
const boxText = (min, sec) => {
  if (min < 10) pomoBox.innerText = `0${min} : ${sec}`;
  else if (sec < 10) pomoBox.innerText = `${min} : 0${sec}`;
  else {
    pomoBox.innerText = `${min} : ${sec}`;
  }
};

const displayError = (text) => (pomoBox.innerText = text);

const showWarnings = () => {
  alert("press restart , start or reset :<");
};

export { timerSound, boxText, displayError, showWarnings };
