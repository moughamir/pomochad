import { render } from "preact";
import App from "./App";

import "./css/themes.css";

import { switchTheme } from "./utils";

(localStorage.theme == 'undefined' || !localStorage.theme)
  ? switchTheme("light")
  : switchTheme(localStorage.theme);

render(
  <App />,
  document.getElementById("root"),
);
