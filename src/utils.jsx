import { volume } from "./components/options/volumeSlider";

function numToText(min, sec) {
  let temp;

  if (min < 10) temp = `0${min} : ${sec}`;
  else if (sec < 10) temp = `${min} : 0${sec}`;
  else {
    temp = `${min} : ${sec}`;
  }

  return temp;
}

function setProgressValue(ogTime, newTime) {
  newTime = newTime / 60;
  const timeProgres = ((ogTime - newTime) / ogTime) * 100;
  return timeProgres;
}

const playSound = (path) => {
  let n = document.querySelector("audio");
  n.setAttribute("src", path);
  n.volume = volume.value / 100;
  n.play();
};

export function switchTheme(name) {
  let body = document.querySelector("body");
  body.setAttribute("data-theme", name);
}

let progressBar = {
  rotation: 0.25,
  strokeLinecap: "butt",
  textSize: "1.2rem",
  pathTransitionDuration: 0.3,
};

export { numToText, playSound, progressBar, setProgressValue };
