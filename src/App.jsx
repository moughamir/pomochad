import "./css/style.css";
import "./css/themes.css";
import "./css/animations.css";

// components
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import Settings from "./components/settings";
import TodoPage from "./components/todoPage.jsx";

import { switchTheme } from "./utils";
import { render } from "preact";
import { Route } from "wouter-preact";

function App() {
  return (
    <>
      <Navbar />

      <Route path="/">
        <Timer />
      </Route>

      <Route path="/todos">
        <TodoPage />
      </Route>

      <Route path="/settings">
        <Settings />
      </Route>
    </>
  );
}

// set theme
(localStorage.theme == "undefined" || !localStorage.theme)
  ? switchTheme("light")
  : switchTheme(localStorage.theme);

render(
  <App />,
  document.getElementById("root"),
);
