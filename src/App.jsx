import "./css/style.css";
import "./css/animations.css";

import { Route } from "wouter-preact";
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import Settings from "./components/settings";
import TodoPage from "./components/todoPage.jsx"

export default () => {
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
};
