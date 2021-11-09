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

export let tickSound = "../../assets/tick.mp3",
  timerSound = "../../assets/pikachu.mp3";

const playSound = (sound) => new Audio(sound).play();

export function switchTheme(name) {
  let body = document.querySelector("body");
  body.setAttribute("data-theme", name);
}

export { numToText, playSound, setProgressValue };