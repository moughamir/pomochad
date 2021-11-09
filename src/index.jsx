import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/themes.css";

import { switchTheme } from "./utils";
switchTheme("light");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
