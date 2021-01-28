import {
  currentClick,
  startPomodoro,
  timer,
  saveMin,
  totalTime,
  pomoTime,
} from "../index";
import {
  restart,
  start,
  pause,
  resume,
  reset,
  settingsBtn,
  pomoBox,
  squareBox,
  sessionBtns,
} from "./divSelectors";
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

      pomoTime = totalTime * 60;
      boxText(25, 0);
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
  if (pomoTime === totalTime * 60 || pomoTime === 0) addTortureAnimation();

  currentClick = "pause";
  saveMin = pomoTime;
  clearInterval(timer);

  const min = Math.floor(saveMin / 60);
  let sec = saveMin % 60;

  boxText(min, sec);
});

resume.addEventListener("click", () => {
  if (pomoTime === totalTime * 60 || pomoTime === 0) addTortureAnimation();
  else if (currentClick == "pause" && pomoTime > 0) startPomodoro();

  currentClick = "resume";
});

settingsBtn.addEventListener("mouseover", () => {
  settingsBtn.style.background = "#4A5460";
});

settingsBtn.addEventListener("mouseout", () => {
  settingsBtn.style.background = "#36404c";
});

settingsBtn.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset].forEach((temp) => {
    temp.style.display = "none";
  });
});
