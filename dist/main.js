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
eval("const pomoBox = document.querySelector(\".pomoBox\"); // inner circle\nconst start = document.querySelector(\".startBtn\");\n\n// timer divided into two blocks : mins and secs\nvar pomoMin = 25;\nvar pomoSec = 00;\nvar multipleClicks = 0;\n\n// displays the initial output for the timer\npomoBox.innerText = `${pomoMin} : 0${pomoSec}`;\n\nconst boxText = (min, sec) => {\n  pomoBox.innerText = `${min} : ${sec}`;\n};\n\nconst timerSound = () => {\n  var audio = new Audio(\"./assets/sounds/cocGame.mp3\");\n  audio.play();\n};\n\nconst startPomodoro = () => {\n  (pomoSec = 60), (pomoMin = 24);\n  const timer = setInterval(function () {\n    // check timer done or nu\n    const checkk = () => {\n      if (pomoMin == 0) {\n        if (pomoSec == 0) {\n          clearInterval(timer);\n          pomoSec = 0;\n          timerSound();\n        }\n      }\n    };\n    pomoSec--;\n    pomoSec == 0\n      ? (boxText(pomoMin, pomoSec), checkk(), (pomoSec = 60), pomoMin--)\n      : boxText(pomoMin, pomoSec);\n  }, 1000);\n};\n\n// restart btn\nstart.addEventListener(\"click\", () => {\n  multipleClicks++;\n  multipleClicks >= 2 ? startPomodoro() : startPomodoro();\n});\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");
/******/ })()
;