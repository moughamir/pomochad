import {
  currentClick,
  pomoTime,
  saveMin,
  startPomodoro,
  timer,
  totalTime,
  userMode,
} from "../index";

import {
  aboutBtn,
  aboutPage,
  automaticMode,
  breakMode,
  decreaseTimeArrow,
  defaultMode,
  homePage,
  increaseTimeArrow,
  menuLink_toggle,
  modesDiv,
  modesLink,
  pause,
  reset,
  saveBtnFLex,
  sessionBtns,
  settingsBtn,
  settingsPage,
  squareBox,
  start,
  dashboardLink,
  dashboardPage,
  mainFlex,
} from "./divSelectors";
import {
  addTortureAnimation,
  displayModeTime,
  playTickSound,
  setBoxText,
  stopTortureAnimation,
  setCircleProgress,
} from "./miscFuncs";

// Session button click actions

[start, reset].forEach((temp) => {
  temp.addEventListener("click", () => {
    stopTortureAnimation();

    // resets time to default ( freezes it )

    if (temp.className === "reset") {
      currentClick = "reset";
      clearInterval(timer);

      pomoTime = totalTime * 60;
      setBoxText(totalTime, 0);
      setCircleProgress(0);

      return;
    }

    // restarts time
    else {
      currentClick = "start";

      playTickSound();
      clearInterval(timer);

      startPomodoro();
      return;
    }
  });
});

let pauseOrResume = 0;

const pauseTimer = () => {
  if (pomoTime === totalTime * 60 || pomoTime === 0) addTortureAnimation();

  currentClick = "pause";
  saveMin = pomoTime;
  clearInterval(timer);

  const min = Math.floor(saveMin / 60);
  let sec = saveMin % 60;

  setBoxText(min, sec);
};

const resumeTimer = () => {
  if (pomoTime === totalTime * 60 || pomoTime === 0) addTortureAnimation();
  currentClick = "pause";

  if (pomoTime != totalTime * 60) startPomodoro();
};

pause.addEventListener("click", () => {
  pauseOrResume++;
  currentClick = pauseOrResume % 2 == 0 ? "resume" : "pause";
  currentClick == "pause" ? pauseTimer() : resumeTimer();
});

/* settings */
settingsBtn.addEventListener(
  "mouseover",
  () => (settingsBtn.style.textDecoration = "underline")
);
settingsBtn.addEventListener(
  "mouseout",
  () => (settingsBtn.style.textDecoration = "none")
);

/* navlinks actions*/

settingsBtn.addEventListener("click", () => {
  [
    squareBox,
    sessionBtns,
    reset,
    aboutPage,
    modesDiv,
    dashboardPage,
    mainFlex,
  ].forEach((temp) => (temp.style.display = "none"));
  settingsPage.style.display = "flex";
});

/* Home Page */
const jumpToHomePage = () => {
  [squareBox, sessionBtns, reset, mainFlex].forEach((temp) => {
    temp.style.display = "";
  });
  [settingsPage, aboutPage, modesDiv, dashboardPage].forEach(
    (temp) => (temp.style.display = "none")
  );
};

const jumptoAboutPage = () => {
  [
    squareBox,
    sessionBtns,
    reset,
    settingsPage,
    modesDiv,
    dashboardPage,
    mainFlex,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  aboutPage.style.display = "block";
};

const jumptoModesPage = () => {
  [
    settingsPage,
    aboutPage,
    squareBox,
    sessionBtns,
    reset,
    dashboardPage,
    mainFlex,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  modesDiv.style.display = "block";
};

const jumptoDashBoard = () => {
  [
    squareBox,
    sessionBtns,
    reset,
    settingsPage,
    modesDiv,
    aboutPage,
    mainFlex,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  dashboardPage.style.display = "grid";
};

homePage.addEventListener("click", () => jumpToHomePage());
aboutBtn.addEventListener("click", () => jumptoAboutPage());
modesLink.addEventListener("click", () => jumptoModesPage());
dashboardLink.addEventListener("click", () => jumptoDashBoard());

increaseTimeArrow.addEventListener("click", () => {
  totalTime++;
  displayModeTime(totalTime);
  setBoxText(totalTime, 0);
});

decreaseTimeArrow.addEventListener("click", () => {
  if (totalTime > 1) {
    totalTime--;
    displayModeTime(totalTime);
    setBoxText(totalTime, 0);
  }
});

defaultMode.addEventListener("click", () => {
  [breakMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(totalTime);

  defaultMode.style.backgroundColor = "#4a5460";

  userMode = "default";
});

breakMode.addEventListener("click", () => {
  [defaultMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 5;
  displayModeTime(totalTime);

  breakMode.style.backgroundColor = "#4a5460";

  userMode = "break";
});

automaticMode.addEventListener("click", () => {
  [breakMode, defaultMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(totalTime);
  automaticMode.style.backgroundColor = "#4a5460";

  userMode = "automatic";
});

saveBtnFLex.addEventListener("click", () => jumpToHomePage());

/* toggle navbar */

let navBarLinks = document.querySelector(".navBarLinks");
menuLink_toggle.addEventListener("click", () =>
  navBarLinks.classList.toggle("show")
);
