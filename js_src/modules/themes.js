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
  reset,
  sessionBtns,
  squareBox,
  start,
  themeToggle,
  timerModes,
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

  const squareBoxCol = (bg, borderBg) => {
    squareBox.style.backgroundColor = bg;
    squareBox.style.borderColor = borderBg;
  };

  const sessionAreaBG = (bg, borderBg) => {
    sessionBtns.style.backgroundColor = bg;
    sessionBtns.style.borderColor = borderBg;
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
    reset.style.color = fg;

    reset.addEventListener("mouseover", () => {
      reset.style.backgroundColor = hoverBg;
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

  const aboutContext = (fg, headingFg) => {
    let temps = document.querySelectorAll("li");

    temps.forEach((temps) => {
      temps.style.color = fg;
    });

    let headers = document.querySelectorAll("h2");

    headers.forEach((temp) => {
      temp.style.color = headingFg;
      temp.style.borderColor = headingFg;
    });
  };

  const start_Pause = (sfg, sbg, pfg, pbg) => {
    start.style.backgroundColor = sbg;
    start.style.color = sfg;

    pause.style.color = pfg;
    pause.style.backgroundColor = pbg;
  };

  const circularStrokes = (outerCBG, innerCBG, svgText) => {
    let innerC = document.querySelector(".innerC");
    let outerC = document.querySelector(".outerC");
    let textTmp = document.querySelector("svg");

    outerC.style.stroke = outerCBG;
    innerC.style.stroke = innerCBG;
    textTmp.style.fill = svgText;
  };

  // dashboard stuff!

  const dashScore = (fg, bg, scorebg, scorefg, wholeBG) => {
    let dashMainBg = document.querySelector(".dashboardPage");
    dashMainBg.style.backgroundColor = wholeBG;

    let currentScore = document.querySelectorAll(".currentScore");

    currentScore.forEach((temp) => {
      temp.style.color = fg;
      temp.style.backgroundColor = bg;
    });

    let score = document.querySelector(".score");
    score.style.backgroundColor = scorebg;
    score.style.color = scorefg;
  };

  const levelProgress = (innerC_stroke, outerC_stroke, scoreFg, wholeDivBg) => {
    let scoreProgress = document.querySelector(".scoreProgress");
    let innerC = document.querySelector(".scoreInnerCircle");
    let outerC = document.querySelector(".scoreOuterCircle");
    let scoreText = document.querySelector(".scoreCircle");

    innerC.style.stroke = innerC_stroke;
    outerC.style.stroke = outerC_stroke;
    scoreText.style.fill = scoreFg;
    scoreProgress.style.backgroundColor = wholeDivBg;
  };

  // settings stuff

  const settingsbtnCol = (fg, bg) => {
    let btn = document.querySelector(".settingsbtn");
    btn.style.color = fg;
    btn.style.backgroundColor = bg;
  };

  const soundsSection = (
    activefg,
    activebg,
    inactivefg,
    inactivebg,
    parentDivBg
  ) => {
    let parentDiv = document.querySelector(".sound_Settings");

    parentDiv.style.backgroundColor = parentDivBg;
    parentDiv.style.color = inactivefg;

    let mp3files = document.querySelectorAll(".timer_audio");

    mp3files.forEach((temp) => {
      temp.style.backgroundColor = inactivebg;

      temp.addEventListener("mouseover", () => {
        temp.style.backgroundColor = activebg;
        temp.style.color = activefg;
      });

      temp.addEventListener("mouseout", () => {
        temp.style.backgroundColor = inactivebg;
        temp.style.color = inactivefg;
      });

      temp.addEventListener("click", () => {
        for (let i = 0; i < all_sounds.length; i++) {
          mp3files[i].style.color = inactivefg;
          mp3files[i].style.textDecoration = "line-through";
          mp3files[i].style.backgroundColor = inactivebg;
          mp3files[i].style.border = "none";
        }

        temp.style.textDecoration = "none";
        temp.style.backgroundColor = "red";
        temp.style.color = "blue";
      });
    });
  };

  return {
    saveThisTheme,
    bodyCol,
    squareBoxCol,
    circularStrokes,
    sessionAreaBG,
    sessionBtnCol,
    resetCol,
    modesPageCol,
    aboutContext,
    start_Pause,
    settingsbtnCol,
    dashScore,
    levelProgress,
    soundsSection,
  };
})();

/*  headingFg, headingBg, activeModeBg, boxBg, innerTimeFg, innerTimeBg */

export const useDraculaTheme = () => {
  createTheme.saveThisTheme("dracula");
  createTheme.bodyCol("#D8DEE9", "#1e1f29");
  createTheme.squareBoxCol("#282a36", "282a36");
  createTheme.sessionAreaBG("#31333f", "#31333f");
  createTheme.sessionBtnCol("#D8DEE9", "#1e1f29", "#FF6E67");
  createTheme.resetCol("#1e1f29", "#FF6E67", "#D8DEE9");

  createTheme.modesPageCol(
    "#D8DEE9",
    "#21232C",
    "#282a36",
    "#3C3E4A",
    "#5AF78E",
    "#282a36"
  );

  createTheme.aboutContext("#AEB4D5", "#82838D");
  createTheme.circularStrokes("#1e1f29", "#5AF78E", "#5AF78E");
  createTheme.settingsbtnCol("#FF6E67", "#242829");

  createTheme.dashScore("#8C8E9A", "#1e1f29", "#6272a4", "#282a36", "#282a36");
  createTheme.levelProgress("#5AF78E", "#282a36", "#646672", "#1e1f29");

  createTheme.soundsSection(
    "#5AF78E",
    "#1e1f29",
    "#8C8E9A",
    "#282a36",
    "#282a36"
  );
};

export const useGruvHardTheme = () => {
  createTheme.saveThisTheme("gruvHard");
  createTheme.bodyCol("#c8ccd4", "#1D2021");
  createTheme.squareBoxCol("#242829", "#242829");
  createTheme.sessionBtnCol("#c8ccd4", "#1D2021", "#83a598");
  createTheme.resetCol("#242829", "#83a598", "#c8ccd4");
  createTheme.sessionAreaBG("#2E3233", "#2E3233");

  createTheme.modesPageCol(
    "#83a598",
    "#2E3233",
    "#242829",
    "#83a598",
    "#83a598",
    "#242829"
  );

  createTheme.aboutContext("#C3C7CF", "#A9ACAD");
  createTheme.settingsbtnCol("#242829", "#A3BE8C");
  createTheme.circularStrokes("#1D2021", "#83a598", "#83a598");

  createTheme.dashScore("#6D7071", "#1D2021", "#665c54", "#1D2021", "#242829");
  createTheme.levelProgress("#EBCB8B", "#242829", "#6D7071", "#1D2021");

  createTheme.soundsSection(
    "#83a598",
    "#1D2021",
    "#6D7071",
    "#242829",
    "#242829",
    "#1D2021"
  );
};

export const useDarkTheme = () => {
  createTheme.saveThisTheme("dark");
  createTheme.bodyCol("#f9fcfb", "#1E222A");
  createTheme.squareBoxCol("#23272f", "#23272f");
  createTheme.sessionAreaBG("#2a2e36", "#2a2e36");
  createTheme.sessionBtnCol("#E78992", "#1E222A", "#E78992");
  createTheme.resetCol("#f9fcfb", "#1E222A", "#61afef");
  createTheme.settingsbtnCol("#1E222A", "#61afef");

  createTheme.modesPageCol(
    "#f9fcfb",
    "#2C323B",
    "#4a5460",
    "#40464F",
    "#61afef",
    "#2C323B"
  );

  createTheme.aboutContext("#C3C7CF", "#AAAEB6");
  createTheme.circularStrokes("#1E222A", "#61afef", "#61afef");

  createTheme.dashScore("#787C84", "#1E222A", "#FF6E67", "#1E222A", "#23272f");
  createTheme.levelProgress("#A3BE8C", "#23272f", "#787C84", "#1E222A");

  createTheme.soundsSection(
    "#FF6E67",
    "#1E222A",
    "#787C84",
    "#2a2e36",
    "#2a2e36",
    "#1E222A"
  );
};

export const useLightTheme = () => {
  createTheme.saveThisTheme("light");
  createTheme.bodyCol("#545E6A", "white");
  createTheme.squareBoxCol("white", "#fafafa");
  createTheme.sessionAreaBG("white", "#fafafa");
  createTheme.sessionBtnCol("#545E6A", "#C0E4FE", "#545e6a");
  createTheme.resetCol("#FD8A89", "#FFD9D8", "white");
  createTheme.settingsbtnCol("#545e6a", "#C0E4FE");

  createTheme.modesPageCol(
    "white",
    "#545E6A",
    "#4a5460",
    "#C0E4FE",
    "#545E6A",
    "white"
  );

  createTheme.aboutContext("#545e6a", "#3C3E4A");
  createTheme.circularStrokes("#f0f0f0", "#C0E4FE", "#545e6a");
  createTheme.dashScore("#82868E", "white", "#545e6a", "white", "#fafafa");
  createTheme.levelProgress("#8deeb9", "#f0f0f0", "#82868E", "white");

  createTheme.soundsSection(
    "#545e6a",
    "white",
    "#545e6a",
    "#8deeb9",
    "#8deeb9"
  );
};

export const useNordTheme = () => {
  createTheme.saveThisTheme("nord");
  createTheme.bodyCol("#D8DEE9", "#282E3A");
  createTheme.squareBoxCol("#2E3440", "#2E3440");
  createTheme.sessionAreaBG("#434C5E", "#434C5E");
  createTheme.sessionBtnCol("#81A1C1", "#282E3A", "#81A1C1");
  createTheme.resetCol("#2E3440", "#A3BE8C", "#D8DEE9");

  createTheme.modesPageCol(
    "#D8DEE9",
    "#2C313D",
    "#2E3440",
    "#81A1C1",
    "#D8DEE9",
    "#2C313D"
  );

  createTheme.aboutContext("#c8ccd4", "#8C929E");
  createTheme.settingsbtnCol("#EBCB8B", "#3C3E4A");
  createTheme.circularStrokes("#282E3A", "#81A1C1", "#81A1C1");

  createTheme.dashScore("#8C929E", "#282E3A", "#81A1C1", "#2E3440", "#2E3440");
  createTheme.levelProgress("#BF616A", "#2E3440", "#8C929E", "#282E3A");

  createTheme.soundsSection(
    "#EBCB8B",
    "#282E3A",
    "#8C929E",
    "#2E3440",
    "#2E3440",
    "#282E3A"
  );
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
