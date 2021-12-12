import "./css/style.css";
import "./css/animations.css";

import { Route } from "wouter-preact";
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import Settings from "./components/settings";
import Todos from "./components/todos/todos.jsx"

export default () => {
  return (
    <>
      <Navbar />

      <Route path="/">
        <Timer />
      </Route>

      <Route path="/todos">
        <Todos />
      </Route>

      <Route path="/settings">
        <Settings />
      </Route>
    </>
  );
};
