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

const toggleTheme = () => {
  themeToggle.addEventListener("click", () => {
    whichTheme++;

    //Dark theme
    if (whichTheme % 2 != 0) {
      body.style.backgroundColor = "#222831";
      body.style.color = "#f6ecf0";

      squareBox.style.backgroundColor = "#2C323B";
      pomoBox.style.cssText =
        "border: 4px solid #a7c5eb; background-color: #2C323B;";
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
    }

    // Default theme ( light )
    else {
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
    }
  });
};

export { toggleTheme };
