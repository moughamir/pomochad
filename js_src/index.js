import { pause, pomoBox, restart, resume, start } from "./modules/divSelectors";
import {
  boxText,
  timerSound,
  displayError,
  showWarnings,
} from "./modules/miscFuncs";

let isPaused = false;
let wutsClicked,
  timesClicked = 0;

// timer divided into two blocks : mins and secs
let pomoMin = 25,
  pomoSec = 0;

// saves values when timer paused .
let saveMin, saveSec, timer;

pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // displays the initial output for the timer

const checkTimer = (temp) => {
  if (pomoMin == 0 && pomoSec == 0) {
    clearInterval(temp), (pomoSec = 0), timerSound();
    return;
  }
};

const startPomodoro = () => {
  isPaused == false
    ? ((pomoSec = 60), (pomoMin = 24))
    : ((pomoMin = saveMin), (pomoSec = saveSec));

  timer = setInterval(function () {
    pomoSec--;
    pomoSec == 0
      ? (boxText(pomoMin, pomoSec),
        checkTimer(timer),
        (pomoSec = 60),
        pomoMin--)
      : boxText(pomoMin, pomoSec);
  }, 0);

  return;
};

[restart, start].forEach(function (temp) {
  temp.addEventListener("click", () => {
    isPaused = false;
    clearInterval(timer), startPomodoro();

    if (
      (wutsClicked == undefined && timesClicked == 0) ||
      wutsClicked == "pause"
    )
      (wutsClicked = "restart"), timesClicked++;
  });
});

pause.addEventListener("click", () => {
  if (pomoBox.innerText == "00 : 0") {
    showWarnings();
    return;
  } else if (wutsClicked == undefined || wutsClicked == "pause") {
    wutsClicked = "pause";
    displayError("NO");
    return;
  }
  saveMin = pomoMin;
  saveSec = pomoSec;

  isPaused = true;
  boxText(saveMin, saveSec);
  clearInterval(timer);
  pomoSec, pomoMin;
});

resume.addEventListener("click", () => {
  if (pomoBox.innerText == "00 : 0") {
    showWarnings();
    return;
  } else if (wutsClicked == "pause") {
    displayError("NO");
    return;
  } else if (isPaused == false) {
    isPaused = false;
    alert("press pause first !");
    return;
  } else {
    isPaused = true;
    saveMin = pomoMin;
    saveSec = pomoSec;

    clearInterval(timer), startPomodoro();
  }
});
