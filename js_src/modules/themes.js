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
  settingsBtn,
  dracula,
  nord,
  gruvHard,
  defaultDark,
  defaultLight,
  tomato,
} from "./divSelectors";

let whichTheme = 0;

const createTheme = (() => {
  const saveThisTheme = (name) => {
    userTheme = name;
    localStorage.savedTheme = name;
  };

  const bodyCol = (fg, bg) => {
    body.style.backgroundColor = bg;
    body.style.color = fg;
  };

  const squareBoxCol = (bg) => (squareBox.style.backgroundColor = bg);

  const pomoBoxCol = (fg, bg, borders) => {
    pomoBox.style.color = fg;
    pomoBox.style.backgroundColor = bg;
    pomoBox.style.border = borders;
  };

  const sessionAreaBG = (bg) => {
    sessionBtns.style.backgroundColor = bg;
  };

  const sessionBtnCol = (fg, bg, hoverCol) => {
    [restart, start, pause, resume].forEach((temp) => {
      temp.style.backgroundColor = bg;
      temp.style.color = fg;

      temp.addEventListener("mouseover", () => {
        temp.style.backgroundColor = hoverCol;
        temp.style.color = bg;
      });

      temp.addEventListener("mouseout", () => {
        temp.style.backgroundColor = bg;
        temp.style.color = fg;
      });
    });
  };

  const resetCol = (fg, bg, hoverBg) => {
    reset.style.backgroundColor = bg;

    reset.addEventListener("mouseover", () => {
      reset.style.backgroundColor = hoverBg;
      reset.style.color = fg;
    });
    reset.addEventListener("mouseout", () => {
      reset.style.backgroundColor = bg;
    });
  };
  return {
    saveThisTheme,
    bodyCol,
    squareBoxCol,
    pomoBoxCol,
    sessionAreaBG,
    sessionBtnCol,
    resetCol,
  };
})();

const useGruvHardTheme = () => {
  createTheme.saveThisTheme("gruvHard");
  createTheme.bodyCol("#c8ccd4", "#1D2021");
  createTheme.squareBoxCol("#242829");
  createTheme.pomoBoxCol("c8ccd4", "#242829", "6px solid #83a598");
  createTheme.sessionBtnCol("#c8ccd4", "#1D2021", "#83a598");
  createTheme.resetCol("#242829", "#83a598", "#c8ccd4");
  createTheme.sessionAreaBG("#2E3233");
};

const useDarkTheme = () => {
  createTheme.saveThisTheme("dark");
  createTheme.bodyCol("#f9fcfb", "#222831");
  createTheme.squareBoxCol("#2C323B");
  createTheme.pomoBoxCol("#f9fcfb", "#2C323B", "6px solid #a7c5eb");
  createTheme.sessionAreaBG("#40464F");
  createTheme.sessionBtnCol("#f9fcfb", "#2C323B", "#a7c5eb");
  createTheme.resetCol("#2C323B", "#a7c5eb", "#f9fcfb");
};

const useLightTheme = () => {
  createTheme.saveThisTheme("light");
  createTheme.bodyCol("#36404c", "#fafafa");
  createTheme.squareBoxCol("#a7c5eb");
  createTheme.pomoBoxCol("#f9fcfb", "#36404c", "0px solid #36404c");
  createTheme.sessionAreaBG("#f9fcfb");
  createTheme.sessionBtnCol("#f9fcfb", "#36404c", "#a7c5eb");
  createTheme.resetCol("#36404c", "#a7c5eb", "#f9fcfb");
};

const useNordTheme = () => {
  createTheme.saveThisTheme("nord");
  createTheme.bodyCol("#D8DEE9", "#2E3440");
  createTheme.squareBoxCol("#323846");
  createTheme.pomoBoxCol("#D8DEE9", "#323846", "6px solid #81A1C1");
  createTheme.sessionAreaBG("#424854");
  createTheme.sessionBtnCol("#D8DEE9", "#2E3440", "#81A1C1");
  createTheme.resetCol("#2E3440", "#81A1C1", "#D8DEE9");
};

const useDraculaTheme = () => {
  createTheme.saveThisTheme("dracula");
  createTheme.bodyCol("#D8DEE9", "#282a36");
  createTheme.squareBoxCol("#323440");
  createTheme.pomoBoxCol("#D8DEE9", "#323440", "6px solid #bd93f9");
  createTheme.sessionAreaBG("#464854");
  createTheme.sessionBtnCol("#D8DEE9", "#282a36", "#bd93f9");
  createTheme.resetCol("#282a36", "#bd93f9", "#D8DEE9");
};

const useTomatoTheme = () => {
  createTheme.saveThisTheme("tomato");
  createTheme.bodyCol("#623A3F", "#e5707e");
  createTheme.squareBoxCol("#F98492");
  createTheme.pomoBoxCol("#954952", "#F98492", "6px solid #D36774");
  createTheme.sessionAreaBG("#D36774");
  createTheme.sessionBtnCol("#954952", "#FF8E9C", "#a7c5eb");
  createTheme.resetCol("#222831", "#D36774", "#f9fcfb");
};

const toggleTheme = () => {
  themeToggle.addEventListener("click", () => {
    whichTheme++;

    whichTheme % 2 != 0 ? useDarkTheme() : useLightTheme();
  });
};

defaultLight.addEventListener("click", useLightTheme);
defaultDark.addEventListener("click", useDarkTheme);
nord.addEventListener("click", useNordTheme);
dracula.addEventListener("click", useDraculaTheme);
gruvHard.addEventListener("click", useGruvHardTheme);
tomato.addEventListener("click", useTomatoTheme);

export {
  toggleTheme,
  useDarkTheme,
  useLightTheme,
  useNordTheme,
  useDraculaTheme,
  useGruvHardTheme,
  useTomatoTheme,
};
