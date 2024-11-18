/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["miniAxios"] = factory();
	else
		root["miniAxios"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/core/axiosRequest.ts":
/*!**********************************!*\
  !*** ./lib/core/axiosRequest.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AxiosRequest)\n/* harmony export */ });\n/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ \"./lib/core/tool.ts\");\n\nconst defaultConfig = {\n    url: 'http://api.example.com',\n    method: 'GET'\n};\nfunction AxiosRequest(config) {\n    return new Promise((resolve, reject) => {\n        const request = new XMLHttpRequest();\n        console.log(config.method);\n        request.open(config.method.toUpperCase(), (0,_tool__WEBPACK_IMPORTED_MODULE_0__.buildUrl)(config.url, config.params));\n        request.timeout = config.timeout;\n        // 设置请求头\n        Object.keys(config.headers).forEach(item => {\n            request.setRequestHeader(item, config.headers[item]);\n        });\n        request.onreadystatechange = () => {\n            if (request.readyState !== 4) {\n                return;\n            }\n            if (request.status >= 200 && request.status < 300) {\n                let response = {\n                    status: request.status,\n                    data: JSON.parse(request.responseText),\n                    statusText: request.statusText,\n                    config: config,\n                    headers: request.getAllResponseHeaders().split('/n').reduce((prev, curr) => {\n                        let [key, value] = curr.split(': ');\n                        if (key) {\n                            prev[key] = value;\n                        }\n                        return prev;\n                    }, {})\n                };\n                resolve(response);\n            }\n            else {\n                reject(new Error('failed'));\n            }\n        };\n    });\n}\n\n\n//# sourceURL=webpack://miniAxios/./lib/core/axiosRequest.ts?");

/***/ }),

/***/ "./lib/core/tool.ts":
/*!**************************!*\
  !*** ./lib/core/tool.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildUrl: () => (/* binding */ buildUrl)\n/* harmony export */ });\n/**\n * @param url string\n * 补全url\n */\nfunction buildUrl(url, params) {\n    const query = Object.keys(params).map(item => {\n        `${encodeURIComponent(item)}=${encodeURIComponent(params[item])}`;\n    }).join('&');\n    return `${url}${query}`;\n}\n\n\n//# sourceURL=webpack://miniAxios/./lib/core/tool.ts?");

/***/ }),

/***/ "./lib/mini-axios.ts":
/*!***************************!*\
  !*** ./lib/mini-axios.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_axiosRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/axiosRequest */ \"./lib/core/axiosRequest.ts\");\n\nclass MiniAxios {\n    constructor() {\n    }\n    // get 请求\n    get(config) {\n        return (0,_core_axiosRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.assign(Object.assign({}, config), { method: 'GET' }));\n    }\n    // post 请求\n    post(config) {\n        return (0,_core_axiosRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.assign(Object.assign({}, config), { method: 'POST' }));\n    }\n}\nconst miniAxios = new MiniAxios();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (miniAxios);\n\n\n//# sourceURL=webpack://miniAxios/./lib/mini-axios.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/mini-axios.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});