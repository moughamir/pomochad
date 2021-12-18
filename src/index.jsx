import { switchTheme } from "./utils";
import { render } from "preact";

import App from "./App";

import "./css/themes.css";

(localStorage.theme == "undefined" || !localStorage.theme)
  ? switchTheme("light")
  : switchTheme(localStorage.theme);

render(
  <App />,
  document.getElementById("root"),
);
