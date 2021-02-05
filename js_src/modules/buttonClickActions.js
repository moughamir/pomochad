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
  saveBtnFLex,
  sessionBtns,
  settingsBtn,
  settingsPage,
  squareBox,
  start,
  // menuLink_toggle,
} from "./divSelectors";
import {
  addTortureAnimation,
  getBoxText,
  displayModeTime,
  playTickSound,
  stopTortureAnimation,
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
      getBoxText(totalTime, 0);
      let bar = document.querySelector('.bar');
      bar.style.width =  0;

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

  getBoxText(min, sec);
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
settingsBtn.addEventListener("mouseover", () => {
  settingsBtn.style.textDecoration = "underline";
});

settingsBtn.addEventListener("mouseout", () => {
  settingsBtn.style.textDecoration = "none";
});

/* navlinks actions*/

settingsBtn.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset, aboutPage, modesDiv].forEach(
    (temp) => (temp.style.display = "none")
  );
  settingsPage.style.display = "grid";
});

/* Home Page */
const jumpToHomePage = () => {
  [squareBox, pomoBox, sessionBtns, reset].forEach((temp) => {
    temp.style.display = "";
  });
  [settingsPage, aboutPage, modesDiv].forEach((temp) => {
    temp.style.display = "none";
  });
};

/* About Page */
const jumptoAboutPage = () => {
  [squareBox, pomoBox, sessionBtns, reset, settingsPage, modesDiv].forEach(
    (temp) => {
      temp.style.display = "none";
    }
  );
  aboutPage.style.display = "block";
};

/* Modes Page*/
const jumptoModesPage = () => {
  [settingsPage, aboutPage, squareBox, pomoBox, sessionBtns, reset].forEach(
    (temp) => {
      temp.style.display = "none";
    }
  );

  modesDiv.style.display = "block";
};

homePage.addEventListener("click", () => jumpToHomePage());
aboutBtn.addEventListener("click", () => jumptoAboutPage());
modesLink.addEventListener("click", () => jumptoModesPage());

increaseTimeArrow.addEventListener("click", () => {
  totalTime++;
  displayModeTime(totalTime);
  getBoxText(totalTime, 0);
});

decreaseTimeArrow.addEventListener("click", () => {
  if (totalTime > 1) {
    totalTime--;
    displayModeTime(totalTime);
    getBoxText(totalTime, 0);
  }
});

defaultMode.addEventListener("click", () => {
  [breakMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(totalTime);

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

saveBtnFLex.addEventListener("click", () => {
  jumpToHomePage();
});
