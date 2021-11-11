import { render } from "preact";
import App from "./App";

import "./css/themes.css";

import { switchTheme } from "./utils";
switchTheme("light");

render(
  <App />,
  document.getElementById("root"),
);
