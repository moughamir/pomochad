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
eval("const pomoBox = document.querySelector(\".pomoBox\"); // inner circle\nconst restart = document.querySelector(\".restart\");\nconst pause = document.querySelector(\".pause\");\nconst resume = document.querySelector(\".resume\");\nconst start = document.querySelector(\".start\");\n\nlet isPaused = false;\n\n// timer divided into two blocks : mins and secs\nlet pomoMin = 25,\n  pomoSec = 00;\n\nlet saveMin, saveSec;\n\npomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // displays the initial output for the timer\n\n// displays timer's text\nconst boxText = (min, sec) => {\n  if (min < 10) pomoBox.innerText = `0${min} : ${sec}`;\n  else if (sec < 10) pomoBox.innerText = `${min} : 0${sec}`;\n  else {\n    pomoBox.innerText = `${min} : ${sec}`;\n  }\n};\n\nconst timerSound = () => {\n  const audio = new Audio(\"./assets/sounds/cocGame.mp3\");\n  audio.play();\n};\n\nconst checkTimer = (temp) => {\n  if (pomoMin == 0 && pomoSec == 0) {\n    clearInterval(temp), (pomoSec = 0), timerSound();\n    return;\n  }\n};\n\nlet timer;\n\nconst startPomodoro = () => {\n  isPaused == false\n    ? ((pomoSec = 60), (pomoMin = 24))\n    : ((pomoMin = saveMin), (pomoSec = saveSec));\n\n  timer = setInterval(function () {\n    pomoSec--;\n    pomoSec == 0\n      ? (boxText(pomoMin, pomoSec),\n        checkTimer(timer),\n        (pomoSec = 60),\n        pomoMin--)\n      : boxText(pomoMin, pomoSec);\n  }, 1000);\n};\n//\n// restart timer\nrestart.addEventListener(\"click\", () => {\n  isPaused = false;\n  clearInterval(timer), startPomodoro();\n});\n\nstart.addEventListener(\"click\", () => {\n  isPaused = false;\n  clearInterval(timer), startPomodoro();\n});\n\npause.addEventListener(\"click\", () => {\n  saveMin = pomoMin;\n  saveSec = pomoSec;\n\n  isPaused = true;\n  boxText(saveMin, saveSec);\n  clearInterval(timer);\n  pomoSec, pomoMin;\n});\n\nresume.addEventListener(\"click\", () => {\n  saveMin = pomoMin;\n  saveSec = pomoSec;\n\n  isPaused = true;\n  clearInterval(timer), startPomodoro();\n});\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");
/******/ })()
;