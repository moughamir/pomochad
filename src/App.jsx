import "./css/style.css";
import "./css/animations.css";

import { Route } from "wouter-preact";
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import Settings from "./components/settings";

export default () => {
  return (
    <>
      <Navbar />

      <Route path="/">
        <Timer />
      </Route>

      <Route path="/settings">
        <Settings />
      </Route>
    </>
  );
};
