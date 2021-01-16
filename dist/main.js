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
eval("const box = document.querySelector(\".box\");\n\nconst boxText = (num) => {\n  box.innerText = num;\n};\n\nvar i = 0;\n\nconst timer = setInterval(function () {\n  i++;\n  i == 5 ? (boxText(i), clearInterval(timer)) : boxText(i);\n}, 1000);\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");
/******/ })()
;