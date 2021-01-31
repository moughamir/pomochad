import {
  currentClick,
  pomoTime,
  saveMin,
  startPomodoro,
  timer,
  totalTime,
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
  modesDiv,
  modesLink,
  pause,
  pomoBox,
  reset,
  restart,
  resume,
  sessionBtns,
  settingsBtn,
  settingsPage,
  squareBox,
  start,

  // menuLink_toggle,
} from "./divSelectors";
import {
  addTortureAnimation,
  boxText,
  displayModeTime,
  playTickSound,
  stopTortureAnimation,
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
      boxText(totalTime, 0);
    }

    // restarts time
    else {
      playTickSound();
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
  settingsBtn.style.textDecoration = "underline";
});

settingsBtn.addEventListener("mouseout", () => {
  settingsBtn.style.textDecoration = "none";
});

/* navlinks actions*/

settingsBtn.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset, aboutPage].forEach((temp) => {
    temp.style.display = "none";
  });
  settingsPage.style.display = "grid";
});

/* Home Page */

homePage.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset].forEach((temp) => {
    temp.style.display = "";
  });
  [settingsPage, aboutPage, modesDiv].forEach((temp) => {
    temp.style.display = "none";
  });
});

/* About Page */
aboutBtn.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset, settingsPage, modesDiv].forEach(
    (temp) => {
      temp.style.display = "none";
    }
  );
  aboutPage.style.display = "block";
});

/* Modes Page*/

modesLink.addEventListener("click", () => {
  [settingsPage, aboutPage, squareBox, pomoBox, sessionBtns, reset].forEach(
    (temp) => {
      temp.style.display = "none";
    }
  );

  modesDiv.style.display = "block";
});

increaseTimeArrow.addEventListener("click", () => {
  totalTime++;
  displayModeTime(totalTime);
  boxText(totalTime, 0);
});

decreaseTimeArrow.addEventListener("click", () => {
  if (totalTime > 1) {
    totalTime--;
    displayModeTime(totalTime);
    boxText(totalTime, 0);
  }
});

defaultMode.addEventListener("click", () => {
  [breakMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(25);

  defaultMode.style.backgroundColor = "#4a5460";
});

breakMode.addEventListener("click", () => {
  [defaultMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 5;
  displayModeTime(totalTime);
  breakMode.style.backgroundColor = "#4a5460";
});

automaticMode.addEventListener("click", () => {
  [breakMode, defaultMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(totalTime);
  automaticMode.style.backgroundColor = "#4a5460";
});
