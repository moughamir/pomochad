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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sessionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sessionButtons */ \"./js_src/modules/sessionButtons.js\");\n/* harmony import */ var _modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/divSelectors */ \"./js_src/modules/divSelectors.js\");\n/* harmony import */ var _modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/miscFuncs */ \"./js_src/modules/miscFuncs.js\");\n/* harmony import */ var _modules_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/themes */ \"./js_src/modules/themes.js\");\n\n\n\n\n\n\n\n(0,_modules_sessionButtons__WEBPACK_IMPORTED_MODULE_0__.makeSessionBtns)();\n\nlet isPaused = false;\nlet wutsClicked,\n  timesClicked = 0;\n\n// timer divided into two blocks : mins and secs\nlet pomoMin = 25,\n  pomoSec = 0;\n\n// saves values when timer paused .\nlet saveMin, saveSec, timer;\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.pomoBox.innerText = `${pomoMin} : 0${pomoSec}`; // initial output\n\nconst checkTimer = (temp) => {\n  if (pomoMin == 0 && pomoSec == 0) {\n    clearInterval(temp), (pomoSec = 0), (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.timerSound)();\n    return;\n  }\n};\n\nconst startPomodoro = () => {\n  isPaused == false\n    ? ((pomoSec = 60), (pomoMin = 24))\n    : ((pomoMin = saveMin), (pomoSec = saveSec));\n\n  timer = setInterval(function () {\n    pomoSec--;\n    pomoSec == 0\n      ? ((0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.boxText)(pomoMin, pomoSec),\n        checkTimer(timer),\n        (pomoSec = 60),\n        pomoMin--)\n      : (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.boxText)(pomoMin, pomoSec);\n  }, 1000);\n\n  return;\n};\n\n[_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.restart, _modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.start].forEach(function (temp) {\n  temp.addEventListener(\"click\", () => {\n    isPaused = false;\n    clearInterval(timer), startPomodoro();\n\n    if (\n      (wutsClicked == undefined && timesClicked == 0) ||\n      wutsClicked == \"pause\"\n    )\n      (wutsClicked = \"restart\"), timesClicked++;\n  });\n});\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.pause.addEventListener(\"click\", () => {\n  if (_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.pomoBox.innerText == \"00 : 0\") {\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.showWarnings)();\n    return;\n  } else if (wutsClicked == undefined || wutsClicked == \"pause\") {\n    wutsClicked = \"pause\";\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.displayError)(\"NO\");\n    return;\n  }\n  saveMin = pomoMin;\n  saveSec = pomoSec;\n\n  isPaused = true;\n  (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.boxText)(saveMin, saveSec);\n  clearInterval(timer);\n  pomoSec, pomoMin;\n});\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.resume.addEventListener(\"click\", () => {\n  if (_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.pomoBox.innerText == \"00 : 0\") {\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.showWarnings)();\n    return;\n  } else if (wutsClicked == \"pause\") {\n    (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.displayError)(\"NO\");\n    return;\n  } else if (isPaused == false) {\n    isPaused = false;\n    alert(\"press pause first !\");\n    return;\n  } else {\n    isPaused = true;\n    saveMin = pomoMin;\n    saveSec = pomoSec;\n\n    clearInterval(timer), startPomodoro();\n  }\n});\n\n_modules_divSelectors__WEBPACK_IMPORTED_MODULE_1__.reset.addEventListener(\"click\", () => {\n  (pomoMin = 25), (pomoSec = 0);\n  clearInterval(timer);\n  (0,_modules_miscFuncs__WEBPACK_IMPORTED_MODULE_2__.boxText)(pomoMin, pomoSec);\n});\n\n// toggles between dark and white theme\n(0,_modules_themes__WEBPACK_IMPORTED_MODULE_3__.toggleTheme)();\n\n\n//# sourceURL=webpack://pomodoro/./js_src/index.js?");

/***/ }),

/***/ "./js_src/modules/divSelectors.js":
/*!****************************************!*\
  !*** ./js_src/modules/divSelectors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pomoBox\": () => /* binding */ pomoBox,\n/* harmony export */   \"restart\": () => /* binding */ restart,\n/* harmony export */   \"pause\": () => /* binding */ pause,\n/* harmony export */   \"resume\": () => /* binding */ resume,\n/* harmony export */   \"start\": () => /* binding */ start,\n/* harmony export */   \"reset\": () => /* binding */ reset,\n/* harmony export */   \"themeToggle\": () => /* binding */ themeToggle,\n/* harmony export */   \"body\": () => /* binding */ body,\n/* harmony export */   \"squareBox\": () => /* binding */ squareBox,\n/* harmony export */   \"sessionBtns\": () => /* binding */ sessionBtns\n/* harmony export */ });\nconst pomoBox = document.querySelector(\".pomoBox\"); // inner circle\nconst restart = document.querySelector(\".restart\");\nconst pause = document.querySelector(\".pause\");\nconst resume = document.querySelector(\".resume\");\nconst start = document.querySelector(\".start\");\nconst reset = document.querySelector(\".reset\");\nconst themeToggle = document.querySelector(\".fa-adjust\");\nconst body = document.querySelector(\"body\");\nconst squareBox = document.querySelector(\".squareBox\");\nconst sessionBtns = document.querySelector(\".sessionBtns\");\n\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/modules/divSelectors.js?");

/***/ }),

/***/ "./js_src/modules/miscFuncs.js":
/*!*************************************!*\
  !*** ./js_src/modules/miscFuncs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timerSound\": () => /* binding */ timerSound,\n/* harmony export */   \"boxText\": () => /* binding */ boxText,\n/* harmony export */   \"displayError\": () => /* binding */ displayError,\n/* harmony export */   \"showWarnings\": () => /* binding */ showWarnings\n/* harmony export */ });\n/* harmony import */ var _divSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divSelectors */ \"./js_src/modules/divSelectors.js\");\n\n\nconst timerSound = () => {\n  const audio = new Audio(\"./assets/sounds/cocGame.mp3\");\n  audio.play();\n};\n\n// displays timer's text\nconst boxText = (min, sec) => {\n  if (min < 10) _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `0${min} : ${sec}`;\n  else if (sec < 10) _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `${min} : 0${sec}`;\n  else {\n    _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = `${min} : ${sec}`;\n  }\n};\n\nconst displayError = (text) => (_divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.innerText = text);\n\nconst showWarnings = () => {\n  alert(\"press restart , start or reset :<\");\n};\n\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/modules/miscFuncs.js?");

/***/ }),

/***/ "./js_src/modules/sessionButtons.js":
/*!******************************************!*\
  !*** ./js_src/modules/sessionButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeSessionBtns\": () => /* binding */ makeSessionBtns\n/* harmony export */ });\nconst createIcon = (btnClass, hoverTitle, iconClass) => {\n  const btn = document.querySelector(\".\" + btnClass);\n  btn.setAttribute(\"title\", hoverTitle);\n\n  const icon = document.createElement(\"i\");\n\n  icon.classList.add(\"fas\", iconClass, \"fa-lg\");\n\n  btn.appendChild(icon);\n};\n\nconst makeSessionBtns = () => {\n  createIcon(\"start\", \"start\", \"fa-rocket\");\n  createIcon(\"restart\", \"restart\", \"fa-redo\");\n  createIcon(\"pause\", \"pause\", \"fa-stop\");\n  createIcon(\"resume\", \"resume\", \"fa-play\");\n};\n\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/modules/sessionButtons.js?");

/***/ }),

/***/ "./js_src/modules/themes.js":
/*!**********************************!*\
  !*** ./js_src/modules/themes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleTheme\": () => /* binding */ toggleTheme\n/* harmony export */ });\n/* harmony import */ var _divSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divSelectors */ \"./js_src/modules/divSelectors.js\");\n\n\nlet whichTheme = 0;\n\nconst toggleTheme = () => {\n  _divSelectors__WEBPACK_IMPORTED_MODULE_0__.themeToggle.addEventListener(\"click\", () => {\n    whichTheme++;\n\n    if (whichTheme % 2 != 0) {\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.body.style.backgroundColor = \"#222831\";\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.body.style.color = \"#f6ecf0\";\n\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.squareBox.style.backgroundColor = \"#2C323B\";\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.style.cssText =\n        \"border: 4px solid #a7c5eb; background-color: #2C323B;\";\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.sessionBtns.style.backgroundColor = \"#40464F\";\n\n      // session button colors , on hover etc\n      [_divSelectors__WEBPACK_IMPORTED_MODULE_0__.restart, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.start, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pause, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.resume].forEach(function (temp) {\n        temp.style.backgroundColor = \"#2C323B\";\n        temp.style.color = \"#f6ecf0\";\n\n        temp.addEventListener(\"mouseover\", function () {\n          temp.style.backgroundColor = \"#a7c5eb\";\n          temp.style.color = \"#2C323B\";\n        });\n\n        temp.addEventListener(\"mouseout\", function () {\n          temp.style.backgroundColor = \"#2C323B\";\n          temp.style.color = \"#f6ecf0\";\n        });\n      });\n\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.style.backgroundColor = \"#f6ecf0\";\n\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.addEventListener(\"mouseover\", () => {\n        _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.style.backgroundColor = \"#a7c5eb\";\n        _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.style.color = \"#2C323B\";\n      });\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.addEventListener(\"mouseout\", () => {\n        _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset.style.backgroundColor = \"#f6ecf0\";\n      });\n    } else {\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.body.style.backgroundColor = \"#f6ecf0\";\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.body.style.color = \"#36404c\";\n\n      // timer's box and inner circle color\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.squareBox.style.backgroundColor = \"#a7c5eb\";\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pomoBox.style.cssText =\n        \"border: 0px solid #36404c; background-color: #36404c;\";\n      _divSelectors__WEBPACK_IMPORTED_MODULE_0__.sessionBtns.style.backgroundColor = \"#f6ecf0\";\n\n      // session button colors , on hover etc\n      [_divSelectors__WEBPACK_IMPORTED_MODULE_0__.restart, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.start, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.pause, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.resume, _divSelectors__WEBPACK_IMPORTED_MODULE_0__.reset].forEach(function (temp) {\n        temp.style.backgroundColor = \"#a7c5eb\";\n        temp.style.color = \"#36404c\";\n\n        temp.addEventListener(\"mouseover\", function () {\n          temp.style.backgroundColor = \"#36404c\";\n          temp.style.color = \"#f6ecf0\";\n        });\n\n        temp.addEventListener(\"mouseout\", function () {\n          temp.style.backgroundColor = \"#a7c5eb\";\n          temp.style.color = \"#36404c\";\n        });\n      });\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack://pomodoro/./js_src/modules/themes.js?");

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