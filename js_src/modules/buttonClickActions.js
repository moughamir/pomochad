import {
  pomoMin,
  pomoSec,
  currentClick,
  startPomodoro,
  timer,
  saveMin,
  saveSec,
} from "../index";
import { restart, start, pause, resume, reset } from "./divSelectors";
import {
  addTortureAnimation,
  stopTortureAnimation,
  boxText,
} from "./miscFuncs";

// Session button click actions

[restart, start, reset].forEach((temp) => {
  temp.addEventListener("click", () => {
    stopTortureAnimation();

    // resets time to default ( freezes it )

    if (temp.className === "reset") {
      currentClick = "reset";
      clearInterval(timer);
      pomoMin = 25;
      pomoSec = 0;
      boxText(pomoMin, pomoSec);
    }

    // restarts time
    else {
      temp.className === "start"
        ? (currentClick = "start")
        : (currentClick = "restart");

      clearInterval(timer), startPomodoro();
    }
  });
});

pause.addEventListener("click", () => {
  if ((pomoMin === 0 && pomoSec === 0) || (pomoMin === 25 && pomoSec === 0))
    addTortureAnimation();

  currentClick = "pause";
  saveMin = pomoMin;
  saveSec = pomoSec;

  clearInterval(timer);
  boxText(saveMin, saveSec);
});

resume.addEventListener("click", () => {
  if ((pomoMin === 25 && pomoSec === 0) || (pomoMin === 0 && pomoSec === 0))
    addTortureAnimation();
  else if (currentClick == "pause" && pomoSec >= 1 && pomoMin >= 0) {
    clearInterval(timer);
    startPomodoro();
  }
  currentClick = "resume";
});
