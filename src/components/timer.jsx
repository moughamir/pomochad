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
  todaysProgress: 0,
});

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

if (!localStorage.date || localStorage.date != utc) {
  localStorage.setItem("date", utc);
  localStorage.setItem("todaysProgress", 0);
}

if (localStorage.date == utc && localStorage.todaysProgress) {
  timer.todaysProgress = parseInt(localStorage.todaysProgress);
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

    timer.todaysProgress += totalTime;
    localStorage.setItem("todaysProgress", timer.todaysProgress);
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
  <main class="timer">
    <div class="MainCircle">
      <RadialProgress
        value={timer.progress}
        text={timer.timeInText}
        styles={buildStyles(progressBar)}
        strokeWidth={6}
      />
    </div>

    <div class="sessionBtns">
      {timer.playBtn &&
        <Play onClick={start} class="playBtn" size={24} />}
      {!timer.playBtn &&
        <Pause onClick={pause} class="playBtn" size={24} />}

      <ArrowClockwise
        onClick={reset}
        class="resetBtn"
        size={24}
      />
    </div>
  </main>
));
