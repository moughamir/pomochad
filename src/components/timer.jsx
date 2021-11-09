import { useState } from "react";
import { ArrowClockwise, Pause, Play } from "phosphor-react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "../css/timer.css";

import {
  numToText,
  playSound,
  setProgressValue,
  tickSound,
  timerSound,
} from "../utils";

export let timer, pausedTime, currentClick;
export let totalTime = 25,
  pomoTime = totalTime * 60;

let progressBar = {
  rotation: 0.25,
  strokeLinecap: "butt",
  textSize: "1.2rem",
  pathTransitionDuration: 0.3,
};

function Timer() {
  let [time, setTime] = useState("25 : 00");
  let [progress, setProgress] = useState(0);
  let [playMode, setplayMode] = useState(true);

  function update() {
    if (pomoTime === 0) {
      clearInterval(timer);
      playSound(timerSound);
      setTime(numToText(0, 0));
      setProgress(100);
      setplayMode(true);
      return;
    }

    const min = Math.floor(pomoTime / 60);
    const sec = pomoTime % 60;

    setTime(numToText(min, sec));
    setProgress(setProgressValue(totalTime, pomoTime));
    pomoTime--;
  }

  function run(action) {
    currentClick = action;
    timer = setInterval(update, 10);

    if (action == "start" || action == "resume") setplayMode(false);

    action == "start" ? playSound(tickSound) : (pomoTime = pausedTime);
  }

  function start() {
    switch (currentClick) {
      // start
      case undefined:
      case "reset":
        run("start");
        break;

      // pause timer

      case "start":
      case "resume":
        currentClick = "pause";
        pausedTime = pomoTime;

        setProgress(setProgressValue(totalTime, pausedTime));

        const min = Math.floor(pausedTime / 60);
        const sec = pausedTime % 60;

        setTime(numToText(min, sec));
        pomoTime = 0;
        clearInterval(timer);
        setplayMode(true);

        break;

      // resume

      default:
        run("resume");
    }
  }

  function reset() {
    currentClick = "reset";

    setplayMode(true);
    clearInterval(timer);

    setProgress(0);
    setTime(`${totalTime} : 00`);
    pomoTime = totalTime * 60;
  }

  return (
    <div className="timer">
      <div className="MainCircle">
        <CircularProgressbar
          value={progress}
          text={time}
          styles={buildStyles(progressBar)}
        />
      </div>
      <div className="sessionBtns">
        {playMode && (
          <Play onClick={() => start()} className="playBtn" size={24} />
        )}
        {!playMode && (
          <Pause onClick={() => start()} className="playBtn" size={24} />
        )}

        <ArrowClockwise
          onClick={() => reset()}
          className="restartBtn"
          size={24}
        />
      </div>
    </div>
  );
}

export default Timer;
