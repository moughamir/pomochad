import { render } from "preact";
import App from "./App";

import "./css/themes.css";

import { switchTheme } from "./utils";

(localStorage.length === 0)
  ? switchTheme("light")
  : switchTheme(localStorage.theme);

render(
  <App />,
  document.getElementById("root"),
);

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
localStorage.setItem("date", utc);
