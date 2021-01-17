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
eval("const box = document.querySelector(\".box\");\nconst start = document.querySelector(\".startBtn\");\n\n// timer divided into two blocks : secs and mins\nvar pomoMin = 25;\nvar pomoSec = 00;\n\n// displays the initial output for the timer\nbox.innerText = `${pomoMin} : ${pomoSec}`;\n\nconst boxText = (min, sec) => {\n  box.innerText = `${min} : ${sec}`;\n};\n\nconst timerSound = () => {\n  var audio = new Audio(\"./assets/sounds/cocGame.mp3\");\n  audio.play();\n};\n\nconst startPomodoro = () => {\n  (pomoSec = 60), pomoMin--;\n  const timer = setInterval(function () {\n    const checkk = () => {\n      if (pomoMin == 0) {\n        if (pomoSec == 0) {\n          clearInterval(timer);\n          pomoSec = 0;\n          timerSound();\n        }\n      }\n    };\n    pomoSec--;\n    pomoSec == 0\n      ? (boxText(pomoMin, pomoSec), checkk(), (pomoSec = 60), pomoMin--)\n      : boxText(pomoMin, pomoSec);\n  }, 1000);\n};\n\nstart.addEventListener(\"click\", () => {\n  startPomodoro();\n});\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");
/******/ })()
;