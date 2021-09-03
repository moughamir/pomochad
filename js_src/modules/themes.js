import { userTheme } from "../index";

import {
  automaticMode,
  body,
  breakMode,
  decreaseTimeArrow,
  defaultDark,
  defaultLight,
  defaultMode,
  increaseTimeArrow,
  increaseTimeChevron,
  modeCurrentTime,
  modeSettings,
  pause,
  reset,
  saveBtnFLex,
  sessionBtns,
  squareBox,
  start,
  themeToggle,
  timerModes,
} from "./divSelectors";
import { all_sounds } from "./settings";
import { saveUserData_toDB } from "./userAuth";
import { saveto_localStorage } from "./miscFuncs";

let whichTheme = 0;

const createTheme = (() => {
  const saveThisTheme = (name) => {
    userTheme = name;
    saveto_localStorage();
    saveUserData_toDB();
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
    innerTimeBg,
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
      [breakMode, automaticMode].forEach(
        (temp) => {
          temp.style.backgroundColor = headingBg;
        },
      );

      defaultMode.style.backgroundColor = activeModeBg;
    });

    breakMode.addEventListener("click", () => {
      [defaultMode, automaticMode].forEach(
        (temp) => {
          temp.style.backgroundColor = headingBg;
        },
      );

      breakMode.style.backgroundColor = activeModeBg;
    });

    automaticMode.addEventListener("click", () => {
      [defaultMode, breakMode].forEach(
        (temp) => {
          temp.style.backgroundColor = headingBg;
        },
      );

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
      },
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
    parentDivBg,
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

  const currentMode_Div = (fg, bg) => {
    let tempDiv = document.querySelector(".current_Mode");

    tempDiv.style.color = fg;
    tempDiv.style.backgroundColor = bg;
  };

  const auth_Section = (
    bg,
    authIconsBG,
    inputDivsFG,
    authBtnsFG,
    signOutBtnFG,
    signOutBtnBG,
  ) => {
    let authDiv = document.querySelector(".auth_Div");
    authDiv.style.backgroundColor = bg;

    let passwdIcon = document.querySelector(".ph-key");
    let emailIcon = document.querySelector(".ph-at");

    let emailInputDiv = document.querySelector("#userEmail");
    let passInputDiv = document.querySelector("#userPassword");

    let userAvatarDiv = document.querySelector(".userAvatar_Div");

    [passwdIcon, emailIcon, emailInputDiv, passInputDiv, userAvatarDiv].forEach(
      (t) => {
        t.style.backgroundColor = authIconsBG;

        if (t == emailInputDiv || t == passInputDiv) {
          t.style.color = inputDivsFG;
        }
      },
    );

    // auth buttons

    let signUpBtn = document.querySelector("#signUpBtn");
    let signInBtn = document.querySelector("#signInBtn");
    let signOutBtn = document.querySelector("#signOutBtn");

    [signUpBtn, signInBtn].forEach((t) => {
      t.style.backgroundColor = authIconsBG;
      t.style.color = authBtnsFG;
    });

    signOutBtn.style.backgroundColor = signOutBtnBG;
    signOutBtn.style.color = signOutBtnFG;
  };
  return {
    saveThisTheme,
    bodyCol,
    currentMode_Div,
    squareBoxCol,
    circularStrokes,
    sessionAreaBG,
    sessionBtnCol,
    resetCol,
    modesPageCol,
    start_Pause,
    settingsbtnCol,
    soundsSection,
    auth_Section,
  };
})();

/*  headingFg, headingBg, activeModeBg, boxBg, innerTimeFg, innerTimeBg */

export const useLightTheme = () => {
  createTheme.saveThisTheme("light");
  createTheme.bodyCol("#545E6A", "#ffffff");
  createTheme.squareBoxCol("#ffffff", "#f6f6f6");
  createTheme.currentMode_Div("#527f6b", "#caf7e3");
  createTheme.sessionAreaBG("#ffffff", "#f6f6f6");
  createTheme.sessionBtnCol("#668aa4", "#C0E4FE", "#668aa4");
  createTheme.resetCol("#FD8A89", "#FFD9D8", "#545E6A");
  createTheme.settingsbtnCol("white", "#545E6A");

  createTheme.modesPageCol(
    "#ffffff",
    "#545E6A",
    "#4a5460",
    "#C0E4FE",
    "#545E6A",
    "#ffffff",
  );

  createTheme.circularStrokes("#f0f0f0", "#C0E4FE", "#545e6a");

  createTheme.soundsSection(
    "#545e6a",
    "#ffffff",
    "#545e6a",
    "#8deeb9",
    "#8deeb9",
  );

  createTheme.auth_Section(
    "#CAEEFF",
    "white",
    "#545e6a",
    "#545e6a",
    "white",
    "#545e6a",
  );
};

export const useDarkTheme = () => {
  createTheme.saveThisTheme("dark");
  createTheme.bodyCol("#a4aeba", "#1E222A");
  createTheme.squareBoxCol("#23272f", "#23272f");
  createTheme.currentMode_Div("#878b93", "#2d3139");
  createTheme.sessionAreaBG("#2a2e36", "#2a2e36");
  createTheme.sessionBtnCol("#D08770", "#1E222A", "#D08770");
  createTheme.sessionAreaBG("#2a2e36", "#2a2e36");
  createTheme.sessionBtnCol("#D08770", "#1E222A", "#D08770");
  createTheme.resetCol("#23272f", "#D08770", "#8deeb9");
  createTheme.settingsbtnCol("#8deeb9", "#23272f");

  createTheme.modesPageCol(
    "#a4aeba",
    "#2C323B",
    "#4a5460",
    "#40464F",
    "#81A1C1",
    "#2C323B",
  );

  createTheme.circularStrokes("#1E222A", "#81A1C1", "#81A1C1");

  createTheme.soundsSection(
    "#FF6E67",
    "#1E222A",
    "#787C84",
    "#2a2e36",
    "#2a2e36",
    "#1E222A",
  );

  createTheme.auth_Section(
    "#23272F",
    "#2D3139",
    "#C3C7CF",
    "#C3C7CF",
    "#FF6E67",
    "#2D3139",
  );
};

export const toggleTheme = () => {
  themeToggle.addEventListener("click", () => {
    themeToggle.classList.toggle("ph-toggle-right");
    whichTheme++;

    whichTheme % 2 != 0 ? useDarkTheme() : useLightTheme();
  });
};

defaultLight.addEventListener("click", useLightTheme);
defaultDark.addEventListener("click", useDarkTheme);
