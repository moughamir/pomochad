import { render } from "preact";
import App from "./App";

import "./css/themes.css";

import { switchTheme } from "./utils";
switchTheme("dark");

render(
  <App />,
  document.getElementById("root"),
);
