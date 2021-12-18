import { store, view } from "@risingstack/react-easy-state";
import { ArrowClockwise, Pause, Play } from "phosphor-react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "../css/timer.css";

import { numToText, playSound, progressBar, setProgressValue } from "../utils";

import tickSound from "../../assets/audio/tick.mp3";
import timerSound from "../../assets/audio/timerSound.mp3";

export const timer = store({
  timeInText: "25 : 00",
  progress: 0,
  playBtn: true,
  productivityProgress: 0,
});

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

if (!localStorage.date) {
  localStorage.setItem("date", utc);
}

if (localStorage.date === utc && localStorage.currentProgress) {
  timer.productivityProgress = parseInt(localStorage.currentProgress);
}

export let interval, pausedTime, currentClick;
export let totalTime = 25, pomoTime = totalTime * 60;

function update() {
  if (pomoTime === 0) {
    playSound(timerSound);
    clearInterval(interval);

    timer.timeInText = numToText(0, 0);
    timer.progress = 100;
    timer.playBtn = true;

    document.title = "Pomochad";

    if (utc === localStorage.date) {
      timer.productivityProgress += totalTime;
      localStorage.currentProgress = timer.productivityProgress;
    }

    return;
  }

  const min = Math.floor(pomoTime / 60);
  const sec = pomoTime % 60;

  timer.timeInText = numToText(min, sec);
  document.title = numToText(min, sec);
  timer.progress = setProgressValue(totalTime, pomoTime);
  pomoTime--;
}

function run(action) {
  currentClick = action;
  interval = setInterval(update, 1000);

  if (action == "start" || action == "resume") timer.playBtn = false;
  action == "start" ? playSound(tickSound) : (pomoTime = pausedTime);
}

function start() {
  switch (currentClick) {
    // start

    case undefined:
    case "reset":
      run("start");
      break;

    // resume

    default:
      run("resume");
  }
}

function pause() {
  currentClick = "pause";
  pausedTime = pomoTime;

  timer.progress = setProgressValue(totalTime, pausedTime);

  const min = Math.floor(pausedTime / 60);
  const sec = pausedTime % 60;

  timer.timeInText = numToText(min, sec);

  pomoTime = 0;
  clearInterval(interval);
  timer.playBtn = true;
}

function reset() {
  document.title = "Pomochad";

  clearInterval(interval);
  currentClick = "reset";

  timer.progress = 0;
  timer.timeInText = `${totalTime} : 00`;

  pomoTime = totalTime * 60;
  timer.playBtn = true;
}

export function RadialProgress(props) {
  return (
    <CircularProgressbar
      value={props.value}
      text={props.text}
      styles={buildStyles(progressBar)}
      strokeWidth={props.strokeWidth}
    />
  );
}

// Timer

export default view(() => (
  <div className="timer">
    <div className="MainCircle">
      <RadialProgress
        value={timer.progress}
        text={timer.timeInText}
        styles={buildStyles(progressBar)}
        strokeWidth={6}
      />
    </div>

    <div className="sessionBtns">
      {timer.playBtn &&
        <Play onClick={start} className="playBtn" size={24} />}
      {!timer.playBtn &&
        <Pause onClick={pause} className="playBtn" size={24} />}

      <ArrowClockwise
        onClick={reset}
        className="resetBtn"
        size={24}
      />
    </div>
  </div>
));
