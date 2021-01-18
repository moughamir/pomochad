/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*************************!*\
  !*** ./js_src/index.js ***!
  \*************************/
eval("const pomoBox = document.querySelector(\".pomoBox\"); // inner circle\nconst start = document.querySelector(\".startBtn\");\n\n// timer divided into two blocks : mins and secs\nvar pomoMin = 25;\nvar pomoSec = 00;\n\n// displays the initial output for the timer\npomoBox.innerText = `${pomoMin} : 0${pomoSec}`;\n\nconst boxText = (min, sec) => {\n  if (min < 10) pomoBox.innerText = `0${min} : ${sec}`;\n  else if (sec < 10) pomoBox.innerText = `${min} : 0${sec}`;\n  else {\n    pomoBox.innerText = `${min} : ${sec}`;\n  }\n};\n\nconst timerSound = () => {\n  const audio = new Audio(\"./assets/sounds/cocGame.mp3\");\n  audio.play();\n};\n\nconst checkTimer = (temp) => {\n  if (pomoMin == 0 && pomoSec == 0) { \n    clearInterval(temp), (pomoSec = 0), timerSound();\n    return; \n  }\n};\n\nconst startPomodoro = () => {\n  pomoSec = 60 , pomoMin = 24;\n\n  const timer = setInterval(function () {\n    pomoSec--;\n    pomoSec == 0 ?\n      ( boxText(pomoMin, pomoSec) , checkTimer(timer), pomoSec = 60, pomoMin-- ) :\n        boxText(pomoMin, pomoSec);\n  }, 1000);  // checks if secs turn up to 0 and decrements mins and also if the time's up.\n};\n\n// restart btn\nstart.addEventListener(\"click\", () => startPomodoro());\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");
/******/ })()
;