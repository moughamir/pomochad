import { pause, pomoBox, restart, resume, start } from "./modules/divSelectors";
import { boxText, timerSound } from "./modules/miscFuncs";

let isPaused = false;

let wutsClicked,
  timesClicked = 0;
// timer divided into two blocks : mins and secs
let pomoMin = 25,
  pomoSec = 0;

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

const displayError = (text) => (pomoBox.innerText = text);

// stuffs to execute when buttons are clicked!
restart.addEventListener("click", () => {
  isPaused = false;
  clearInterval(timer), startPomodoro();

  if ((wutsClicked == undefined && timesClicked == 0) || wutsClicked == "pause")
    (wutsClicked = "restart"), timesClicked++;
});

start.addEventListener("click", () => {
  isPaused = false;
  clearInterval(timer), startPomodoro();

  if ((wutsClicked == undefined && timesClicked == 0) || wutsClicked == "pause")
    (wutsClicked = "start"), timesClicked++;
});

pause.addEventListener("click", () => {
  if (wutsClicked == undefined || wutsClicked == "pause") {
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
  if (wutsClicked == "pause") {
    displayError("NO");
    return;
  }

  if (isPaused == false) {
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
