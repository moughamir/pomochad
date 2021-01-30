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
  pomoBox,
  squareBox,
  sessionBtns,
  settingsBtn,
  settingsPage,
  homePage,
  // menuLink_toggle,
} from "./divSelectors";
import {
  addTortureAnimation,
  stopTortureAnimation,
  playTickSound,
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

settingsBtn.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset].forEach((temp) => {
    temp.style.display = "none";
  });
  settingsPage.style.display = "grid";
});

homePage.addEventListener("click", () => {
  [squareBox, pomoBox, sessionBtns, reset].forEach((temp) => {
    temp.style.display = "";
  });
  settingsPage.style.display = "none";
});

/*
let tempMenuClick = 0;


const showMenu = () => {
  let navbarlinks = document.querySelector(".navbarlinks");
  navbarlinks.style.display = "grid";

  let navbar = document.querySelector(".navBar");
  navbar.style.marginBottom = "9rem";
};

const hideMenu = () => {
  let navbarlinks = document.querySelector(".navbarlinks");
  navbarlinks.style.display = "none";

  let navbar = document.querySelector(".navBar");
  navbar.style.marginBottom = "2rem";
};

menuLink_toggle.addEventListener("click", () => {
  tempMenuClick++;

  tempMenuClick % 2 == 0 ? hideMenu() : showMenu();
});

hideMenu(); */
