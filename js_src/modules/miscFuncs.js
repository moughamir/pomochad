import { userScore, userTheme, userSound, totalTime, pomoTime } from "../index";
import { modeCurrentTime, score } from "./divSelectors";

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

function adjustColor(color, amount) {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

export const create_LighterShade = () => {
  let b = document.querySelector("body");
  let tmpBg = b.style.backgroundColor;

  let rgb2hex = (c) =>
    "#" + c.match(/\d+/g).map((x) => (+x).toString(16).padStart(2, 0)).join``;
  let finalCol = rgb2hex(tmpBg);

  let aboutCaption = document.querySelector(".aboutCaption");

  if (userTheme == "light") {
    aboutCaption.style.backgroundColor = adjustColor(finalCol, -7);
    return;
  }

  aboutCaption.style.backgroundColor = adjustColor(finalCol, 10);
};

export const add_loadingAnimation = (n) => {
  n.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
    duration: 1000,
    iterations: 1,
  });
};

export {
  timerSound,
  setBoxText,
  displayError,
  showWarnings,
  addTortureAnimation,
  stopTortureAnimation,
  addShakeAnimation,
  playTickSound,
  displayModeTime,
};
