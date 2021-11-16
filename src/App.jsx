import "./css/style.css";

import { Route } from "wouter-preact";
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import Settings from "./components/settings";

function App() {
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
}

export default App;
