/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  \"All Projects\",\n  \"Description of my project\",\n  \"blue\"\n);\n\nconst todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  \"My first to do\",\n  \"I need to do something\",\n  \"01/03/2024\",\n  \"high\",\n  [defaultProject.title],\n  false\n);\n\n_project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {\n  project.addTodo(todo1);\n});\n\nconsole.log(\"todo\", todo1);\nconsole.log(\"default\", defaultProject);\nconsole.log(\"allprojects\", _project__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVEO0FBQ3ZCOztBQUVoQyx1QkFBdUIsb0RBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxpREFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBVztBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUHJvamVjdCwgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFxuICBcIkFsbCBQcm9qZWN0c1wiLFxuICBcIkRlc2NyaXB0aW9uIG9mIG15IHByb2plY3RcIixcbiAgXCJibHVlXCJcbik7XG5cbmNvbnN0IHRvZG8xID0gY3JlYXRlVG9kbyhcbiAgXCJNeSBmaXJzdCB0byBkb1wiLFxuICBcIkkgbmVlZCB0byBkbyBzb21ldGhpbmdcIixcbiAgXCIwMS8wMy8yMDI0XCIsXG4gIFwiaGlnaFwiLFxuICBbZGVmYXVsdFByb2plY3QudGl0bGVdLFxuICBmYWxzZVxuKTtcblxuYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LmFkZFRvZG8odG9kbzEpO1xufSk7XG5cbmNvbnNvbGUubG9nKFwidG9kb1wiLCB0b2RvMSk7XG5jb25zb2xlLmxvZyhcImRlZmF1bHRcIiwgZGVmYXVsdFByb2plY3QpO1xuY29uc29sZS5sb2coXCJhbGxwcm9qZWN0c1wiLCBhbGxQcm9qZWN0cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProjects: () => (/* binding */ allProjects),\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nconst allProjects = [];\n\nfunction createProject(title, description, colour) {\n  const project = {\n    title: title,\n    description: description,\n    colour: colour,\n    todosArray: [],\n    addToAllProjects: function () {\n      allProjects.push(this);\n    },\n    addTodo: function (todo) {\n      if (todo.assignedProjects.some((project) => project === this.title)) {\n        this.todosArray.push(todo);\n      }\n    },\n  };\n  project.addToAllProjects();\n  return project;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPOztBQUVRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9wcm9qZWN0LmpzP2Y1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBjb2xvdXIpIHtcbiAgY29uc3QgcHJvamVjdCA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGNvbG91cjogY29sb3VyLFxuICAgIHRvZG9zQXJyYXk6IFtdLFxuICAgIGFkZFRvQWxsUHJvamVjdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsbFByb2plY3RzLnB1c2godGhpcyk7XG4gICAgfSxcbiAgICBhZGRUb2RvOiBmdW5jdGlvbiAodG9kbykge1xuICAgICAgaWYgKHRvZG8uYXNzaWduZWRQcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0ID09PSB0aGlzLnRpdGxlKSkge1xuICAgICAgICB0aGlzLnRvZG9zQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICBwcm9qZWN0LmFkZFRvQWxsUHJvamVjdHMoKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(\n  title,\n  description,\n  dueDate,\n  priority,\n  projects,\n  completed\n) {\n  const todo = {\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority,\n    assignedProjects: projects,\n    completed: completed,\n  };\n\n  return todo;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3RvZG8uanM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0cyxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgdG9kbyA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGFzc2lnbmVkUHJvamVjdHM6IHByb2plY3RzLFxuICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICB9O1xuXG4gIHJldHVybiB0b2RvO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/todo.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;