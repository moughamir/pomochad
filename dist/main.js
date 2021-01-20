/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js_src/index.js":
/*!*************************!*\
  !*** ./js_src/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/divSelectors */ \"./js_src/modules/divSelectors.js\");\n/* harmony import */ var _modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/miscFuncs */ \"./js_src/modules/miscFuncs.js\");\n\n\n\n\nlet isPaused = false;\nlet wutsClicked,\n  timesClicked = 0;\n\n// timer divided into two blocks : mins and secs\nlet pomoMin = 25,\n  pomoSec = 0;\n\n// saves values when timer paused .\nlet saveMin, saveSec, timer;\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // displays the initial output for the timer\n\nconst checkTimer = (temp) => {\n  if (pomoMin == 0 && pomoSec == 0) {\n    clearInterval(temp), (pomoSec = 0), (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.timerSound)();\n    return;\n  }\n};\n\nconst startPomodoro = () => {\n  isPaused == false\n    ? ((pomoSec = 60), (pomoMin = 24))\n    : ((pomoMin = saveMin), (pomoSec = saveSec));\n\n  timer = setInterval(function () {\n    pomoSec--;\n    pomoSec == 0\n      ? ((0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.boxText)(pomoMin, pomoSec),\n        checkTimer(timer),\n        (pomoSec = 60),\n        pomoMin--)\n      : (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.boxText)(pomoMin, pomoSec);\n  }, 1000);\n\n  return;\n};\n\n[_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.restart, _modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.start].forEach(function (temp) {\n  temp.addEventListener(\"click\", () => {\n    isPaused = false;\n    clearInterval(timer), startPomodoro();\n\n    if (\n      (wutsClicked == undefined && timesClicked == 0) ||\n      wutsClicked == \"pause\"\n    )\n      (wutsClicked = \"restart\"), timesClicked++;\n  });\n});\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.pause.addEventListener(\"click\", () => {\n  if (_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText == \"00 : 0\") {\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.showWarnings)();\n    return;\n  } else if (wutsClicked == undefined || wutsClicked == \"pause\") {\n    wutsClicked = \"pause\";\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.displayError)(\"NO\");\n    return;\n  }\n  saveMin = pomoMin;\n  saveSec = pomoSec;\n\n  isPaused = true;\n  (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.boxText)(saveMin, saveSec);\n  clearInterval(timer);\n  pomoSec, pomoMin;\n});\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.resume.addEventListener(\"click\", () => {\n  if (_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText == \"00 : 0\") {\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.showWarnings)();\n    return;\n  } else if (wutsClicked == \"pause\") {\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.displayError)(\"NO\");\n    return;\n  } else if (isPaused == false) {\n    isPaused = false;\n    alert(\"press pause first !\");\n    return;\n  } else {\n    isPaused = true;\n    saveMin = pomoMin;\n    saveSec = pomoSec;\n\n    clearInterval(timer), startPomodoro();\n  }\n});\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.addEventListener(\"click\", () => {\n  (pomoMin = 25), (pomoSec = 0);\n  clearInterval(timer);\n  (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_1__.boxText)(pomoMin, pomoSec);\n});\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");

/***/ }),

/***/ "./js_src/modules/divSelectors.js":
/*!****************************************!*\
  !*** ./js_src/modules/divSelectors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pomoBox\": () => /* binding */ pomoBox,\n/* harmony export */   \"restart\": () => /* binding */ restart,\n/* harmony export */   \"pause\": () => /* binding */ pause,\n/* harmony export */   \"resume\": () => /* binding */ resume,\n/* harmony export */   \"start\": () => /* binding */ start,\n/* harmony export */   \"reset\": () => /* binding */ reset\n/* harmony export */ });\nconst pomoBox = document.querySelector(\".pomoBox\"); // inner circle\nconst restart = document.querySelector(\".restart\");\nconst pause = document.querySelector(\".pause\");\nconst resume = document.querySelector(\".resume\");\nconst start = document.querySelector(\".start\");\nconst reset = document.querySelector(\".reset\");\n\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/modules/divSelectors.js?");

/***/ }),

/***/ "./js_src/modules/miscFuncs.js":
/*!*************************************!*\
  !*** ./js_src/modules/miscFuncs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timerSound\": () => /* binding */ timerSound,\n/* harmony export */   \"boxText\": () => /* binding */ boxText,\n/* harmony export */   \"displayError\": () => /* binding */ displayError,\n/* harmony export */   \"showWarnings\": () => /* binding */ showWarnings\n/* harmony export */ });\n/* harmony import */ var _divSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divSelectors */ \"./js_src/modules/divSelectors.js\");\n\n\nconst timerSound = () => {\n  const audio = new Audio(\"./assets/sounds/cocGame.mp3\");\n  audio.play();\n};\n\n// displays timer's text\nconst boxText = (min, sec) => {\n  if (min < 10) _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `0${min} : ${sec}`;\n  else if (sec < 10) _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `${min} : 0${sec}`;\n  else {\n    _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `${min} : ${sec}`;\n  }\n};\n\nconst displayError = (text) => (_divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = text);\n\nconst showWarnings = () => {\n  alert(\"press restart , start or reset :<\");\n};\n\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/modules/miscFuncs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js_src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;