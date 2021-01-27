import { userTheme } from "../index";

import {
  pause,
  pomoBox,
  restart,
  resume,
  start,
  reset,
  themeToggle,
  body,
  squareBox,
  sessionBtns,
} from "./divSelectors";

let whichTheme = 0;

const useDarkTheme = () => {
  userTheme = "dark";
  localStorage.savedTheme = "dark";

  body.style.backgroundColor = "#222831";
  body.style.color = "#f6ecf0";

  squareBox.style.backgroundColor = "#2C323B";
  pomoBox.style.cssText =
    "border: 6px solid #a7c5eb; background-color: #2C323B;";
  sessionBtns.style.backgroundColor = "#40464F";

  // session button colors , on hover etc
  [restart, start, pause, resume].forEach((temp) => {
    temp.style.backgroundColor = "#2C323B";
    temp.style.color = "#f6ecf0";

    temp.addEventListener("mouseover", () => {
      temp.style.backgroundColor = "#a7c5eb";
      temp.style.color = "#2C323B";
    });

    temp.addEventListener("mouseout", () => {
      temp.style.backgroundColor = "#2C323B";
      temp.style.color = "#f6ecf0";
    });
  });

  reset.style.backgroundColor = "#f6ecf0";

  reset.addEventListener("mouseover", () => {
    reset.style.backgroundColor = "#a7c5eb";
    reset.style.color = "#2C323B";
  });
  reset.addEventListener("mouseout", () => {
    reset.style.backgroundColor = "#f6ecf0";
  });
};

const useLightTheme = () => {
  userTheme = "light";
  localStorage.savedTheme = "light";

  body.style.backgroundColor = "#f6ecf0";
  body.style.color = "#36404c";

  // timer's box and inner circle color
  squareBox.style.backgroundColor = "#a7c5eb";
  pomoBox.style.cssText =
    "border: 0px solid #36404c; background-color: #36404c;";
  sessionBtns.style.backgroundColor = "#f6ecf0";

  // session button colors , on hover etc
  [restart, start, pause, resume, reset].forEach((temp) => {
    temp.style.backgroundColor = "#a7c5eb";
    temp.style.color = "#36404c";

    temp.addEventListener("mouseover", () => {
      temp.style.backgroundColor = "#36404c";
      temp.style.color = "#f6ecf0";
    });

    temp.addEventListener("mouseout", () => {
      temp.style.backgroundColor = "#a7c5eb";
      temp.style.color = "#36404c";
    });
  });
};

const useNordTheme = () => {
  userTheme = "nord";
  localStorage.savedTheme = "nord";

  body.style.backgroundColor = "#2E3440";
  body.style.color = "#f6ecf0";

  squareBox.style.backgroundColor = "#323846";
  pomoBox.style.cssText =
    "border: 6px solid #81A1C1; background-color: #323846;";
  sessionBtns.style.backgroundColor = "#424854";

  // session button colors , on hover etc
  [restart, start, pause, resume].forEach((temp) => {
    temp.style.backgroundColor = "#2E3440";
    temp.style.color = "#f6ecf0";

    temp.addEventListener("mouseover", () => {
      temp.style.backgroundColor = "#81A1C1";
      temp.style.color = "#2E3440";
    });

    temp.addEventListener("mouseout", () => {
      temp.style.backgroundColor = "#2E3440";
      temp.style.color = "#f6ecf0";
    });
  });

  reset.style.backgroundColor = "#f6ecf0";

  reset.addEventListener("mouseover", () => {
    reset.style.backgroundColor = "#81A1C1";
    reset.style.color = "#2E3440";
  });
  reset.addEventListener("mouseout", () => {
    reset.style.backgroundColor = "#f6ecf0";
  });
};

const useDraculaTheme = () => {
  userTheme = "dracula";
  localStorage.savedTheme = "dracula";

  body.style.backgroundColor = "#282a36";
  body.style.color = "#f6ecf0";

  squareBox.style.backgroundColor = "#323440";
  pomoBox.style.cssText =
    "border: 6px solid  #bd93f9 ; background-color: #323440;";
  sessionBtns.style.backgroundColor = "#464854";

  // session button colors , on hover etc
  [restart, start, pause, resume].forEach((temp) => {
    temp.style.backgroundColor = "#282a36";
    temp.style.color = "#f6ecf0";

    temp.addEventListener("mouseover", () => {
      temp.style.backgroundColor = "#bd93f9";
      temp.style.color = "#282a36";
    });

    temp.addEventListener("mouseout", () => {
      temp.style.backgroundColor = "#282a36";
      temp.style.color = "#f6ecf0";
    });
  });

  reset.style.backgroundColor = "#bd93f9";

  reset.addEventListener("mouseover", () => {
    reset.style.backgroundColor = "#f6ecf0";
    reset.style.color = "#2E3440";
  });
  reset.addEventListener("mouseout", () => {
    reset.style.backgroundColor = "#bd93f9";
  });
};

const toggleTheme = () => {
  themeToggle.addEventListener("click", () => {
    whichTheme++;

    whichTheme % 2 != 0 ? useDarkTheme() : useLightTheme();
  });
};

export {
  toggleTheme,
  useDarkTheme,
  useLightTheme,
  useNordTheme,
  useDraculaTheme,
};
