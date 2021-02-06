import { userTheme } from "../index";

import {
  automaticMode,
  body,
  breakMode,
  defaultDark,
  defaultLight,
  defaultMode,
  dracula,
  gruvHard,
  modeCurrentTime,
  modeSettings,
  increaseTimeChevron,
  increaseTimeArrow,
  decreaseTimeArrow,
  saveBtnFLex,
  nord,
  pause,
  pomoBox,
  reset,
  sessionBtns,
  squareBox,
  start,
  themeToggle,
  timerModes,
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

  const squareBoxCol = (bg) => {
    squareBox.style.backgroundColor = bg;
  };

  const progressBarCol = (bg, innerBarbg) => {
    let progressBar = document.querySelector(".timerProgressBar");
    let pro_bar = document.querySelector(".bar");

    pro_bar.style.backgroundColor = innerBarbg;
    progressBar.style.backgroundColor = bg;
  };

  const pomoBoxCol = (fg, bg, borders) => {
    pomoBox.style.color = fg;
    pomoBox.style.backgroundColor = bg;
    pomoBox.style.border = borders;
  };

  const sessionAreaBG = (bg) => {
    sessionBtns.style.backgroundColor = bg;
  };

  const sessionBtnCol = (fg, bg, hoverCol) => {
    [start, pause].forEach((temp) => {
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

  const modesPageCol = (
    headingFg,
    headingBg,
    activeModeBg,
    boxBg,
    innerTimeFg,
    innerTimeBg
  ) => {
    timerModes.style.backgroundColor = headingBg;

    /* timer modes
     let timer_Modes = [defaultMode, breakMode, automaticMode]; */

    [defaultMode, breakMode, automaticMode].forEach((temp) => {
      temp.style.color = headingFg;

      temp.style.backgroundColor = headingBg;

      temp.addEventListener("click", () => {});
    });

    defaultMode.addEventListener("click", () => {
      [breakMode, automaticMode].forEach((temp) => {
        temp.style.backgroundColor = headingBg;
      });

      defaultMode.style.backgroundColor = activeModeBg;
    });

    breakMode.addEventListener("click", () => {
      [defaultMode, automaticMode].forEach((temp) => {
        temp.style.backgroundColor = headingBg;
      });

      breakMode.style.backgroundColor = activeModeBg;
    });

    automaticMode.addEventListener("click", () => {
      [defaultMode, breakMode].forEach((temp) => {
        temp.style.backgroundColor = headingBg;
      });

      automaticMode.style.backgroundColor = activeModeBg;
    });

    modeSettings.style.backgroundColor = boxBg;
    modeCurrentTime.style.color = innerTimeFg;
    modeCurrentTime.style.backgroundColor = innerTimeBg;

    [increaseTimeArrow, decreaseTimeArrow, increaseTimeChevron].forEach(
      (temp) => {
        temp.style.backgroundColor = innerTimeBg;
        temp.style.color = innerTimeFg;

        if (temp != increaseTimeChevron) {
          temp.addEventListener("mouseover", () => {
            temp.style.backgroundColor = innerTimeFg;
            temp.style.color = innerTimeBg;
          });

          temp.addEventListener("mouseout", () => {
            temp.style.backgroundColor = innerTimeBg;
            temp.style.color = innerTimeFg;
          });
        }
      }
    );

    defaultMode.style.backgroundColor = activeModeBg;

    // score

    // save timer mode
    saveBtnFLex.style.backgroundColor = headingBg;
    saveBtnFLex.style.color = headingFg;

    saveBtnFLex.addEventListener("mouseover", () => {
      saveBtnFLex.style.backgroundColor = activeModeBg;
      saveBtnFLex.style.color = headingFg;
    });
    saveBtnFLex.addEventListener("mouseout", () => {
      saveBtnFLex.style.backgroundColor = headingBg;
      saveBtnFLex.style.color = headingFg;
    });
  };

  const aboutContext = (fg) => {
    let temps = document.querySelectorAll("li");

    temps.forEach((temps) => {
      temps.style.color = fg;
    });

    let heading_underline = document.querySelectorAll("h2");

    heading_underline.forEach((heading_underline) => {
      heading_underline.style.borderColor = fg;
    });
  };

  const start_Pause = (sfg, sbg, pfg, pbg) => {
    start.style.backgroundColor = sbg;
    start.style.color = sfg;

    pause.style.color = pfg;
    pause.style.backgroundColor = pbg;
  };

  const scoreCol = (fg, bg) => {
    let scoreBox = document.querySelector(".score");
    scoreBox.style.color = fg;
    scoreBox.style.backgroundColor = bg;
  };

  return {
    saveThisTheme,
    bodyCol,
    squareBoxCol,
    pomoBoxCol,
    sessionAreaBG,
    sessionBtnCol,
    resetCol,
    modesPageCol,
    aboutContext,
    progressBarCol,
    start_Pause,
    scoreCol,
  };
})();

/*  headingFg, headingBg, activeModeBg, boxBg, innerTimeFg, innerTimeBg */

export const useDraculaTheme = () => {
  createTheme.saveThisTheme("dracula");
  createTheme.bodyCol("#D8DEE9", "#282a36");
  createTheme.squareBoxCol("#323440");
  createTheme.pomoBoxCol("#D8DEE9", "#323440", "6px solid #bd93f9");
  createTheme.sessionAreaBG("#464854");
  createTheme.sessionBtnCol("#D8DEE9", "#282a36", "#bd93f9");
  createTheme.resetCol("#282a36", "#bd93f9", "#D8DEE9");
  createTheme.modesPageCol(
    "#D8DEE9",
    "#21232C",
    "#282a36",
    "#3C3E4A",
    "#5AF78E",
    "#282a36"
  );
  createTheme.aboutContext("#AEB4D5");
  createTheme.progressBarCol("#323440", "#5AF78E");
};

export const useGruvHardTheme = () => {
  createTheme.saveThisTheme("gruvHard");
  createTheme.bodyCol("#c8ccd4", "#1D2021");
  createTheme.squareBoxCol("#242829");
  createTheme.pomoBoxCol("c8ccd4", "#242829", "6px solid #83a598");
  createTheme.sessionBtnCol("#c8ccd4", "#1D2021", "#83a598");
  createTheme.resetCol("#242829", "#83a598", "#c8ccd4");
  createTheme.sessionAreaBG("#2E3233");
  createTheme.progressBarCol("#242829", "#c8ccd4");

  createTheme.modesPageCol(
    "#83a598",
    "#2E3233",
    "#242829",
    "#83a598",
    "#83a598",
    "#242829"
  );

  createTheme.aboutContext("#C3C7CF");
};

export const useDarkTheme = () => {
  createTheme.saveThisTheme("dark");
  createTheme.bodyCol("#f9fcfb", "#222831");
  createTheme.squareBoxCol("#2C323B");
  createTheme.pomoBoxCol("#f9fcfb", "#2C323B", "6px solid #B1CFF5");
  createTheme.sessionAreaBG("#40464F");
  createTheme.sessionBtnCol("#f9fcfb", "#2C323B", "#B1CFF5");
  createTheme.resetCol("#2C323B", "#B1CFF5", "#f9fcfb");
  createTheme.progressBarCol("#2C323B", "#81A1C1");

  createTheme.modesPageCol(
    "#f9fcfb",
    "#2C323B",
    "#4a5460",
    "#40464F",
    "#f9fcfb",
    "#2C323B"
  );

  createTheme.aboutContext("#C3C7CF");
};

export const useLightTheme = () => {
  createTheme.saveThisTheme("light");
  createTheme.bodyCol("#545E6A", "white");
  createTheme.squareBoxCol("#B1CFF5");
  createTheme.pomoBoxCol("white", "#545E6A", "0px solid #36404c");
  createTheme.sessionAreaBG("white");
  createTheme.sessionBtnCol("#545E6A", "#B1CFF5", "#36404c");
  createTheme.resetCol("#545E6A", "#B1CFF5", "white");
  createTheme.progressBarCol("#ecebeb", "#B1CFF5");

  createTheme.modesPageCol(
    "white",
    "#545E6A",
    "#4a5460",
    "#B1CFF5",
    "#545E6A",
    "white"
  );

  createTheme.aboutContext("#545e6a");
  createTheme.scoreCol("#494975", "#D5D4F4");
};

export const useNordTheme = () => {
  createTheme.saveThisTheme("nord");
  createTheme.bodyCol("#D8DEE9", "#2E3440");
  createTheme.squareBoxCol("#323846");
  createTheme.pomoBoxCol("#D8DEE9", "#323846", "6px solid #81A1C1");
  createTheme.sessionAreaBG("#40464F");
  createTheme.sessionBtnCol("#D8DEE9", "#2E3440", "#81A1C1");
  createTheme.resetCol("#2E3440", "#81A1C1", "#D8DEE9");
  createTheme.progressBarCol("#323846");

  createTheme.modesPageCol(
    "#D8DEE9",
    "#2C313D",
    "#2E3440",
    "#81A1C1",
    "#D8DEE9",
    "#2C313D"
  );

  createTheme.aboutContext("#c8ccd4");
};

export const useTomatoTheme = () => {
  createTheme.saveThisTheme("tomato");
  createTheme.bodyCol("#623A3F", "#e5707e");
  createTheme.squareBoxCol("#F98492");
  createTheme.pomoBoxCol("#954952", "#F98492", "6px solid #D36774");
  createTheme.sessionAreaBG("#D36774");
  createTheme.sessionBtnCol("#954952", "#FF8E9C", "#623A3F");
  createTheme.resetCol("#222831", "#D36774", "#f9fcfb");
  createTheme.progressBarCol("#FF8E9C", "#954952");

  createTheme.modesPageCol(
    "#623A3F",
    "#D36774",
    "#e5707e",
    "#e5707e",
    "#623A3F",
    "#FF8E9C"
  );

  createTheme.aboutContext("#623A3F");
};

export const toggleTheme = () => {
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
