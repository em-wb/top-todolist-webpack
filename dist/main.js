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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  \"All Projects\",\n  \"Description of my project\",\n  \"blue\"\n);\n\nconst todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  \"My first to do\",\n  \"I need to do something\",\n  \"01/03/2024\",\n  \"high\",\n  [defaultProject.title],\n  false\n);\n\n_project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {\n  project.addTodo(todo1);\n});\n\nconst secondProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  \"2 Projects\",\n  \"Description of my project\",\n  \"blue\"\n);\n\nconst todo2 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  \"My first to do\",\n  \"I need to do something\",\n  \"01/03/2024\",\n  \"high\",\n  [defaultProject.title, secondProject.title],\n  false\n);\n\n_project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {\n  project.addTodo(todo2);\n});\n\nconsole.log(todo2);\n\nconsole.log(\"todo\", todo1);\nconsole.log(\"default\", defaultProject);\nconsole.log(\"allprojects\", _project__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVEO0FBQ3ZCOztBQUVoQyx1QkFBdUIsb0RBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxpREFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBVztBQUNYO0FBQ0EsQ0FBQzs7QUFFRCxzQkFBc0Isb0RBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxpREFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBVztBQUNYO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUHJvamVjdCwgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFxuICBcIkFsbCBQcm9qZWN0c1wiLFxuICBcIkRlc2NyaXB0aW9uIG9mIG15IHByb2plY3RcIixcbiAgXCJibHVlXCJcbik7XG5cbmNvbnN0IHRvZG8xID0gY3JlYXRlVG9kbyhcbiAgXCJNeSBmaXJzdCB0byBkb1wiLFxuICBcIkkgbmVlZCB0byBkbyBzb21ldGhpbmdcIixcbiAgXCIwMS8wMy8yMDI0XCIsXG4gIFwiaGlnaFwiLFxuICBbZGVmYXVsdFByb2plY3QudGl0bGVdLFxuICBmYWxzZVxuKTtcblxuYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LmFkZFRvZG8odG9kbzEpO1xufSk7XG5cbmNvbnN0IHNlY29uZFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFxuICBcIjIgUHJvamVjdHNcIixcbiAgXCJEZXNjcmlwdGlvbiBvZiBteSBwcm9qZWN0XCIsXG4gIFwiYmx1ZVwiXG4pO1xuXG5jb25zdCB0b2RvMiA9IGNyZWF0ZVRvZG8oXG4gIFwiTXkgZmlyc3QgdG8gZG9cIixcbiAgXCJJIG5lZWQgdG8gZG8gc29tZXRoaW5nXCIsXG4gIFwiMDEvMDMvMjAyNFwiLFxuICBcImhpZ2hcIixcbiAgW2RlZmF1bHRQcm9qZWN0LnRpdGxlLCBzZWNvbmRQcm9qZWN0LnRpdGxlXSxcbiAgZmFsc2Vcbik7XG5cbmFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgcHJvamVjdC5hZGRUb2RvKHRvZG8yKTtcbn0pO1xuXG5jb25zb2xlLmxvZyh0b2RvMik7XG5cbmNvbnNvbGUubG9nKFwidG9kb1wiLCB0b2RvMSk7XG5jb25zb2xlLmxvZyhcImRlZmF1bHRcIiwgZGVmYXVsdFByb2plY3QpO1xuY29uc29sZS5sb2coXCJhbGxwcm9qZWN0c1wiLCBhbGxQcm9qZWN0cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProjects: () => (/* binding */ allProjects),\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nconst allProjects = [];\n\nfunction addToAllProjects() {\n  allProjects.push(this);\n}\n\nfunction addTodo(todo) {\n  if (todo.assignedProjects.some((project) => project === this.title)) {\n    this.todosArray.push(todo);\n  }\n}\n\nfunction createProject(title, description, colour) {\n  const project = {\n    title: title,\n    description: description,\n    colour: colour,\n    todosArray: [],\n    addToAllProjects: addToAllProjects,\n    addTodo: addTodo,\n  };\n\n  project.addToAllProjects();\n  return project;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9wcm9qZWN0LmpzP2Y1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmZ1bmN0aW9uIGFkZFRvQWxsUHJvamVjdHMoKSB7XG4gIGFsbFByb2plY3RzLnB1c2godGhpcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8odG9kbykge1xuICBpZiAodG9kby5hc3NpZ25lZFByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QgPT09IHRoaXMudGl0bGUpKSB7XG4gICAgdGhpcy50b2Rvc0FycmF5LnB1c2godG9kbyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGNvbG91cikge1xuICBjb25zdCBwcm9qZWN0ID0ge1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgY29sb3VyOiBjb2xvdXIsXG4gICAgdG9kb3NBcnJheTogW10sXG4gICAgYWRkVG9BbGxQcm9qZWN0czogYWRkVG9BbGxQcm9qZWN0cyxcbiAgICBhZGRUb2RvOiBhZGRUb2RvLFxuICB9O1xuXG4gIHByb2plY3QuYWRkVG9BbGxQcm9qZWN0cygpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/project.js\n");

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