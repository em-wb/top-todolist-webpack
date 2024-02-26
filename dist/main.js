/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-font: "Montserrat", sans-serif;
  --heading-font: "Montserrat", sans-serif;
  --heading-weight: 600;
  --accent-color: #f6f4f9;
  --accent-color-2: #fca3b9;
  --main-font-size: 18px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  max-height: 100vh;
  overflow: hidden;
}

footer {
  grid-column: 1/3;
  grid-row: 5/6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: var(--main-font);
  border-radius: 0 0 5px 5px;
  background-color: #6184c6;
  padding: 1.5rem 0 1.5rem;
}

header {
  display: none;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  font-size: var(--main-font-size);
  font-family: var(--main-font);
  border-radius: 1rem;
  border: black 1px solid;
  background-color: var(--accent-color-2);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

button:hover,
.list-item {
  cursor: pointer;
}

h1,
.desc {
  font-family: var(--heading-font);
  text-align: center;
  padding-top: 1rem;
}

h2 {
  font-size: 1.4rem;
}

hr {
  width: 90%;
  opacity: 80%;
}

img {
  width: 50%;
  height: auto;
  padding-right: 1.3rem;
}

form {
  grid-row: 2/3;
  width: 91vw;
  padding: 1rem;
}

.content {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(5, 1fr);
  height: 100vh;
  font-family: var(--main-font);
  font-size: var(--main-font-size);
}

.logo {
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
  font-style: italic;
  font-size: 0.9rem;
  opacity: 90%;
  color: #fca3b9;
}

.menuDiv {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
}

.menuItemDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--accent-color);
}

.menuItemDiv > i {
  margin-bottom: 5px;
}

.menuItemDiv:hover {
  cursor: pointer;
  opacity: 80%;
}

.view-ctr {
  display: grid;
  grid-template-rows: 17% 1fr;
  grid-column: 1/3;
  grid-row: 1/5;
  background-color: var(--accent-color);
}

.add-new-btn {
  position: fixed;
  right: 10%;
  bottom: 25%;
  z-index: 1000;
  background-color: #b0b8c7;
  font-size: 2rem;
  border-radius: 2rem;
}

.todo-done-ctr,
.lists-ctr,
.add-new,
form {
  overflow-y: auto;
}

.done-ctr {
  margin: 0 0.5rem;
}

.done-title {
  margin-bottom: 2rem;
}

.nothing-complete {
  border-bottom: #b0b8c7 solid 1px;
  padding: 0.5rem 0;
  text-align: center;
}

.no-tasks-text {
  font-size: 0.9rem;
  opacity: 60%;
}

.heading-ctr {
  grid-row: 1/2;
  position: sticky;
  padding-bottom: 2rem;
}

.logo {
  padding-top: 1rem;
  font-size: 1.3rem;
}

.item-ctr {
  display: grid;
  grid-template-columns: 65% 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: fit-content;
  margin: 0.5rem;
  border-bottom: rgb(185, 185, 185) solid 1px;
}

.text-div {
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding-left: 0.2rem;
}

.text-div > p {
  padding-top: 0.3rem;
}

.open-edit-div {
  grid-column: 2/3;
  grid-row: 2/3;
}

.open-edit-div > i {
  font-size: var(--main-font-size);
}

.open-edit-div,
.task-complete-div,
.delete-div,
.icon-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
}

.task-complete-div,
.delete-div {
  grid-column: 3/4;
  grid-row: 2/3;
}

.due-date {
  grid-column: 2/4;
  grid-row: 1/2;
  margin-bottom: 0.4rem;
}

.icon-div {
  grid-column: 2/4;
  grid-row: 1/2;
}

.list-icon-btn {
  border-radius: 1.4rem;
  font-size: 1.4rem;
  padding: 0rem 2rem;
}

.priority {
  border-left: rgb(235, 95, 44) solid 0.3rem;
  opacity: 90%;
}

.overdue {
  color: rgb(235, 95, 44);
}

.today {
  color: black;
}

.today,
.overdue {
  font-weight: 600;
}

.no-tasks-ctr {
  text-align: center;
  margin-top: 2rem;
}

.h1-new {
  grid-row: 1/2;
  text-align: center;
  margin-bottom: 5rem;
}

.add-new {
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-color);
  z-index: 1001;
}

.form-ctr,
.priority-ctr,
.button-ctr {
  display: flex;
  margin-bottom: 0.8rem;
}

.form-ctr {
  flex-direction: column;
}

.priority-ctr {
  gap: 0.4rem;
}

.input {
  width: 100%;
  padding-left: 0.1rem;
  font-family: var(--main-font);
  font-size: 1rem;
}

.button-ctr {
  gap: 1rem;
  margin-top: 1rem;
}

form > .button-ctr > button,
.choose-icon-ctr > button {
  width: 40%;
}

.choose-icon-ctr > button {
  background-color: #a0bff8;
}

.close-ctr {
  text-align: end;
}

.choose-icon-ctr {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.1rem;
  gap: 1rem;
}

.choose-icon-ctr > input {
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.5rem;
  text-align: center;
}

.hidden {
  display: none;
}

.selected {
  font-weight: 900;
  color: var(--accent-color-2);
}

.profile-ctr {
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-bottom: 10%;
  background-color: var(--accent-color);
  z-index: 1001;
}

.avatar {
  min-height: 180px;
  width: auto;
  padding: 0;
}

.avatar-header {
  max-height: 5rem;
  width: fit-content;
}

.profile-name {
  font-size: 2rem;
}

@media (min-width: 720px) {
  footer {
    grid-column: 1/2;
    grid-row: 2/6;
    justify-content: flex-start;
    border: none;
    max-height: 80vh;
  }

  footer > .logo {
    display: none;
  }

  header {
    grid-column: 1/3;
    grid-row: 1/2;
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 25% 75%;
    justify-content: center;
    background-color: #fca3b9;
    border: none;
    z-index: 1000;
  }

  img {
    max-width: 350px;
  }

  form {
    width: 70%;
  }

  .content {
    min-height: 100vh;
  }

  .item-ctr {
    grid-template-columns: 80% 1fr 1fr;
  }

  .menuDiv {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-top: 10%;
  }

  .menuItemDiv {
    width: fit-content;
  }

  .logo {
    grid-column: 1/2;
    font-size: 2rem;
    text-align: center;
    color: var(--accent-color);
    padding: 0;
  }

  .header-profile {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 10rem;
    gap: 2rem;
  }

  .header-profile > p {
    color: var(--accent-color);
    font-weight: var(--heading-weight);
    font-size: var(--main-font-size);
  }

  .logo-ctr {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .view-ctr {
    grid-column: 2/3;
    grid-row: 2/6;
    max-height: 80vh;
    padding-bottom: 1rem;
  }

  .add-new-btn {
    position: fixed;
    right: 10%;
    top: 25%;
    z-index: 1000;
  }

  form > .button-ctr > button,
  .choose-icon-ctr > button {
    width: 30%;
  }

  .todo-done-ctr,
  .lists-ctr {
    padding: 0 15%;
  }

  .profile-ctr {
    padding-top: 10%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main-font: \"Montserrat\", sans-serif;\n  --heading-font: \"Montserrat\", sans-serif;\n  --heading-weight: 600;\n  --accent-color: #f6f4f9;\n  --accent-color-2: #fca3b9;\n  --main-font-size: 18px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  max-height: 100vh;\n  overflow: hidden;\n}\n\nfooter {\n  grid-column: 1/3;\n  grid-row: 5/6;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--main-font);\n  border-radius: 0 0 5px 5px;\n  background-color: #6184c6;\n  padding: 1.5rem 0 1.5rem;\n}\n\nheader {\n  display: none;\n}\n\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  height: fit-content;\n  padding: 0.5rem;\n  font-size: var(--main-font-size);\n  font-family: var(--main-font);\n  border-radius: 1rem;\n  border: black 1px solid;\n  background-color: var(--accent-color-2);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\nbutton:hover,\n.list-item {\n  cursor: pointer;\n}\n\nh1,\n.desc {\n  font-family: var(--heading-font);\n  text-align: center;\n  padding-top: 1rem;\n}\n\nh2 {\n  font-size: 1.4rem;\n}\n\nhr {\n  width: 90%;\n  opacity: 80%;\n}\n\nimg {\n  width: 50%;\n  height: auto;\n  padding-right: 1.3rem;\n}\n\nform {\n  grid-row: 2/3;\n  width: 91vw;\n  padding: 1rem;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 25% 75%;\n  grid-template-rows: repeat(5, 1fr);\n  height: 100vh;\n  font-family: var(--main-font);\n  font-size: var(--main-font-size);\n}\n\n.logo {\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n  font-style: italic;\n  font-size: 0.9rem;\n  opacity: 90%;\n  color: #fca3b9;\n}\n\n.menuDiv {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.menuItemDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--accent-color);\n}\n\n.menuItemDiv > i {\n  margin-bottom: 5px;\n}\n\n.menuItemDiv:hover {\n  cursor: pointer;\n  opacity: 80%;\n}\n\n.view-ctr {\n  display: grid;\n  grid-template-rows: 17% 1fr;\n  grid-column: 1/3;\n  grid-row: 1/5;\n  background-color: var(--accent-color);\n}\n\n.add-new-btn {\n  position: fixed;\n  right: 10%;\n  bottom: 25%;\n  z-index: 1000;\n  background-color: #b0b8c7;\n  font-size: 2rem;\n  border-radius: 2rem;\n}\n\n.todo-done-ctr,\n.lists-ctr,\n.add-new,\nform {\n  overflow-y: auto;\n}\n\n.done-ctr {\n  margin: 0 0.5rem;\n}\n\n.done-title {\n  margin-bottom: 2rem;\n}\n\n.nothing-complete {\n  border-bottom: #b0b8c7 solid 1px;\n  padding: 0.5rem 0;\n  text-align: center;\n}\n\n.no-tasks-text {\n  font-size: 0.9rem;\n  opacity: 60%;\n}\n\n.heading-ctr {\n  grid-row: 1/2;\n  position: sticky;\n  padding-bottom: 2rem;\n}\n\n.logo {\n  padding-top: 1rem;\n  font-size: 1.3rem;\n}\n\n.item-ctr {\n  display: grid;\n  grid-template-columns: 65% 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  height: fit-content;\n  margin: 0.5rem;\n  border-bottom: rgb(185, 185, 185) solid 1px;\n}\n\n.text-div {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  padding-left: 0.2rem;\n}\n\n.text-div > p {\n  padding-top: 0.3rem;\n}\n\n.open-edit-div {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.open-edit-div > i {\n  font-size: var(--main-font-size);\n}\n\n.open-edit-div,\n.task-complete-div,\n.delete-div,\n.icon-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.task-complete-div,\n.delete-div {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.due-date {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  margin-bottom: 0.4rem;\n}\n\n.icon-div {\n  grid-column: 2/4;\n  grid-row: 1/2;\n}\n\n.list-icon-btn {\n  border-radius: 1.4rem;\n  font-size: 1.4rem;\n  padding: 0rem 2rem;\n}\n\n.priority {\n  border-left: rgb(235, 95, 44) solid 0.3rem;\n  opacity: 90%;\n}\n\n.overdue {\n  color: rgb(235, 95, 44);\n}\n\n.today {\n  color: black;\n}\n\n.today,\n.overdue {\n  font-weight: 600;\n}\n\n.no-tasks-ctr {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.h1-new {\n  grid-row: 1/2;\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.add-new {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--accent-color);\n  z-index: 1001;\n}\n\n.form-ctr,\n.priority-ctr,\n.button-ctr {\n  display: flex;\n  margin-bottom: 0.8rem;\n}\n\n.form-ctr {\n  flex-direction: column;\n}\n\n.priority-ctr {\n  gap: 0.4rem;\n}\n\n.input {\n  width: 100%;\n  padding-left: 0.1rem;\n  font-family: var(--main-font);\n  font-size: 1rem;\n}\n\n.button-ctr {\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\nform > .button-ctr > button,\n.choose-icon-ctr > button {\n  width: 40%;\n}\n\n.choose-icon-ctr > button {\n  background-color: #a0bff8;\n}\n\n.close-ctr {\n  text-align: end;\n}\n\n.choose-icon-ctr {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  margin-bottom: 0.1rem;\n  gap: 1rem;\n}\n\n.choose-icon-ctr > input {\n  width: 1.8rem;\n  height: 1.8rem;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.selected {\n  font-weight: 900;\n  color: var(--accent-color-2);\n}\n\n.profile-ctr {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  padding-bottom: 10%;\n  background-color: var(--accent-color);\n  z-index: 1001;\n}\n\n.avatar {\n  min-height: 180px;\n  width: auto;\n  padding: 0;\n}\n\n.avatar-header {\n  max-height: 5rem;\n  width: fit-content;\n}\n\n.profile-name {\n  font-size: 2rem;\n}\n\n@media (min-width: 720px) {\n  footer {\n    grid-column: 1/2;\n    grid-row: 2/6;\n    justify-content: flex-start;\n    border: none;\n    max-height: 80vh;\n  }\n\n  footer > .logo {\n    display: none;\n  }\n\n  header {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    position: sticky;\n    top: 0;\n    display: grid;\n    grid-template-columns: 25% 75%;\n    justify-content: center;\n    background-color: #fca3b9;\n    border: none;\n    z-index: 1000;\n  }\n\n  img {\n    max-width: 350px;\n  }\n\n  form {\n    width: 70%;\n  }\n\n  .content {\n    min-height: 100vh;\n  }\n\n  .item-ctr {\n    grid-template-columns: 80% 1fr 1fr;\n  }\n\n  .menuDiv {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 80%;\n    margin-top: 10%;\n  }\n\n  .menuItemDiv {\n    width: fit-content;\n  }\n\n  .logo {\n    grid-column: 1/2;\n    font-size: 2rem;\n    text-align: center;\n    color: var(--accent-color);\n    padding: 0;\n  }\n\n  .header-profile {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding-right: 10rem;\n    gap: 2rem;\n  }\n\n  .header-profile > p {\n    color: var(--accent-color);\n    font-weight: var(--heading-weight);\n    font-size: var(--main-font-size);\n  }\n\n  .logo-ctr {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .view-ctr {\n    grid-column: 2/3;\n    grid-row: 2/6;\n    max-height: 80vh;\n    padding-bottom: 1rem;\n  }\n\n  .add-new-btn {\n    position: fixed;\n    right: 10%;\n    top: 25%;\n    z-index: 1000;\n  }\n\n  form > .button-ctr > button,\n  .choose-icon-ctr > button {\n    width: 30%;\n  }\n\n  .todo-done-ctr,\n  .lists-ctr {\n    padding: 0 15%;\n  }\n\n  .profile-ctr {\n    padding-top: 10%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/random-avatar-generator/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/random-avatar-generator/dist/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AvatarGenerator = void 0;
var seedrandom_1 = __importDefault(__webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js"));
/** @description Class to generate avatars  */
var AvatarGenerator = /** @class */ (function () {
    function AvatarGenerator() {
    }
    /** @description Generates random avatar image URL
     * @returns Random avatar image URL
     */
    AvatarGenerator.prototype.generateRandomAvatar = function (seed) {
        var topTypeOptions = new Array();
        topTypeOptions.push("NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart");
        var accessoriesTypeOptions = new Array();
        accessoriesTypeOptions.push("Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers");
        var facialHairTypeOptions = new Array();
        facialHairTypeOptions.push("Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum");
        var facialHairColorOptions = new Array();
        facialHairColorOptions.push("Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red");
        var clotheTypeOptions = new Array();
        clotheTypeOptions.push("BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck");
        var eyeTypeOptions = new Array();
        eyeTypeOptions.push("Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky");
        var eyebrowTypeOptions = new Array();
        eyebrowTypeOptions.push("Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural", "RaisedExcited", "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural", "UnibrowNatural", "UpDown", "UpDownNatural");
        var mouthTypeOptions = new Array();
        mouthTypeOptions.push("Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit");
        var skinColorOptions = new Array();
        skinColorOptions.push("Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black");
        var hairColorTypes = new Array();
        hairColorTypes.push("Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray");
        var hatColorOptions = new Array();
        hatColorOptions.push("Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White");
        var clotheColorOptions = new Array();
        clotheColorOptions.push("Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White");
        var rng = seed ? seedrandom_1.default(seed) : seedrandom_1.default();
        return "https://avataaars.io/?accessoriesType=" + accessoriesTypeOptions[Math.floor(rng() * accessoriesTypeOptions.length)] + "&avatarStyle=Circle&clotheColor=" + clotheColorOptions[Math.floor(rng() * clotheColorOptions.length)] + "&clotheType=" + clotheTypeOptions[Math.floor(rng() * clotheTypeOptions.length)] + "&eyeType=" + eyeTypeOptions[Math.floor(rng() * eyeTypeOptions.length)] + "&eyebrowType=" + eyebrowTypeOptions[Math.floor(rng() * eyebrowTypeOptions.length)] + "&facialHairColor=" + facialHairColorOptions[Math.floor(rng() * facialHairColorOptions.length)] + "&facialHairType=" + facialHairTypeOptions[Math.floor(rng() * facialHairTypeOptions.length)] + "&hairColor=" + hairColorTypes[Math.floor(rng() * hairColorTypes.length)] + "&hatColor=" + hatColorOptions[Math.floor(rng() * hatColorOptions.length)] + "&mouthType=" + mouthTypeOptions[Math.floor(rng() * mouthTypeOptions.length)] + "&skinColor=" + skinColorOptions[Math.floor(rng() * skinColorOptions.length)] + "&topType=" + topTypeOptions[Math.floor(rng() * topTypeOptions.length)];
    };
    return AvatarGenerator;
}());
exports.AvatarGenerator = AvatarGenerator;


/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);


/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);



/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ "?d4c0");
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addNew.js":
/*!***********************!*\
  !*** ./src/addNew.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMainForm),
/* harmony export */   getViewCtr: () => (/* binding */ getViewCtr),
/* harmony export */   renderCloseBtn: () => (/* binding */ renderCloseBtn),
/* harmony export */   renderDelete: () => (/* binding */ renderDelete),
/* harmony export */   renderSubmit: () => (/* binding */ renderSubmit)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");
/* harmony import */ var _listUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listUI */ "./src/listUI.js");







function renderMainForm(title, ctr, toEdit) {
  const addNew = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "add-new", ctr, "", [["id", "add-new"]]);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "h1-new", addNew, title);
  const form = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "form", addNew);
  const closeCtr = renderCloseBtn(form);
  const titleCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "form-ctr", form);
  const descCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "form-ctr", form);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("label", null, titleCtr, "Title", [["for", "inputTitle"]]),
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "input", titleCtr, "", [
      ["id", "inputTitle"],
      ["type", "text"],
      ["required", ""],
      [
        "placeholder",
        (title =  true ? "Do the grocery shop" : 0),
      ],
      ["maxlength", "50"],
      ["value", toEdit ? toEdit.title : ""],
    ]);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("label", null, descCtr, "Description (optional)", [
    ["for", "inputDesc"],
  ]),
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "textarea",
      "input",
      descCtr,
      toEdit ? toEdit.description : "",
      [
        ["id", "inputDesc"],
        ["rows", "2"],
        [
          "placeholder",
          (title =  true
            ? "Eggs, milk, cereal, bread, bananas"
            : 0),
        ],
        ["maxlength", "250"],
      ]
    );

  return form;
}

function getViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  return viewCtr;
}

function renderCloseBtn(ctr) {
  const closeBtnCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "close-ctr", ctr);
  const closeBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    ["close-btn", "fa-solid", "fa-xmark"],
    closeBtnCtr,
    "",
    [["id", "close-btn"]]
  );
  return closeBtn;
}

function renderSubmit(ctr) {
  const submitBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "submitBtn", ctr, "List it", [
    ["id", "submitTaskBtn"],
    ["type", "submit"],
  ]);
  return submitBtn;
}

function renderDelete(ctr) {
  const deleteBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "deleteBtn", ctr, "Delete it", [
    ["id", "deleteBtn"],
  ]);
  return deleteBtn;
}


/***/ }),

/***/ "./src/addNewList.js":
/*!***************************!*\
  !*** ./src/addNewList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editedListLog: () => (/* binding */ editedListLog),
/* harmony export */   renderListForm: () => (/* binding */ renderListForm)
/* harmony export */ });
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNew */ "./src/addNew.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _allListsUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allListsUI */ "./src/allListsUI.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var emoji_picker_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emoji-picker-element */ "./node_modules/emoji-picker-element/index.js");







let edited = false;
let editedIndex;

function renderListForm(listToEdit) {
  const viewCtr = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__.getViewCtr)();
  const mainForm = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__["default"])("List", viewCtr, listToEdit);
  const iconCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])("div", "choose-icon-ctr", mainForm);
  const iconBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])("button", "icon-btn", iconCtr, "Add icon", [
    ["id", "icon-btn"],
  ]);
  const selectedEmoji = renderSelectedEmoji(iconCtr);
  const emojiPicker = renderEmojiPicker(mainForm, selectedEmoji);
  const buttonCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])("div", "button-ctr", mainForm);
  const submitBtn = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__.renderSubmit)(buttonCtr);
  const deleteBtn = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__.renderDelete)(buttonCtr);
  iconBtnEL(iconBtn, emojiPicker);
  submitListEL(submitBtn);
  deleteListEL(deleteBtn);
  closeListEL();
}

function renderSelectedEmoji(mainForm) {
  // createElement("label", "select-emoji", mainForm, "List Icon", [
  //   ["for", "selected-emoji"],
  // ]);
  const selectedEmoji = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])("input", "selected-emoji", mainForm, "", [
    ["id", "selected-emoji"],
    ["title", "View List"],
  ]);

  return selectedEmoji;
}

function renderEmojiPicker(mainForm, selectedEmoji) {
  const emojiPicker = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])(
    "emoji-picker",
    ["emoji-picker", "hidden"],
    mainForm
  );
  emojiPicker.addEventListener("emoji-click", (e) => {
    selectedEmoji.value = e.detail.unicode;
    emojiPicker.classList.toggle("hidden");
  });
  return emojiPicker;
}

function editedListLog(index) {
  editedIndex = index;
  edited = true;
}

function iconBtnEL(iconBtn, emojiPicker) {
  iconBtn.addEventListener("click", (e) => {
    e.preventDefault();
    emojiPicker.classList.toggle("hidden");
  });
}

function deleteListEL(deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      (0,_list__WEBPACK_IMPORTED_MODULE_1__.deleteList)(editedIndex);
    }
    (0,___WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_list__WEBPACK_IMPORTED_MODULE_1__.loadListsFromStorage)();
    (0,_allListsUI__WEBPACK_IMPORTED_MODULE_3__.addListEventLis)();
    edited = false;
    editedIndex = null;
  });
}

function closeListEL() {
  document.getElementById("close-btn").addEventListener("click", (e) => {
    (0,___WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_list__WEBPACK_IMPORTED_MODULE_1__.loadListsFromStorage)();
    edited = false;
    editedIndex = null;
  });
}

function submitListEL(submitListBtn) {
  submitListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      (0,_list__WEBPACK_IMPORTED_MODULE_1__.deleteList)(editedIndex);
    }
    (0,_list__WEBPACK_IMPORTED_MODULE_1__["default"])(
      document.getElementById("inputTitle").value,
      document.getElementById("inputDesc").value,
      document.getElementById("selected-emoji").value
    );
    (0,___WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_list__WEBPACK_IMPORTED_MODULE_1__.loadListsFromStorage)();
    (0,_allListsUI__WEBPACK_IMPORTED_MODULE_3__.addListEventLis)();
    edited = false;
    editedIndex = null;
  });
}


/***/ }),

/***/ "./src/addNewTask.js":
/*!***************************!*\
  !*** ./src/addNewTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editedLog: () => (/* binding */ editedLog),
/* harmony export */   renderTaskForm: () => (/* binding */ renderTaskForm)
/* harmony export */ });
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNew */ "./src/addNew.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");
/* harmony import */ var _listUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listUI */ "./src/listUI.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/list.js");









let edited = false;
let editedIndex;

function editedLog(index) {
  editedIndex = index;
  edited = true;
}

function renderFormDate(ctr, toEdit) {
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("label", "textInput", ctr, "Due Date", [
    ["for", "inputTaskDate"],
  ]);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("input", "input", ctr, "", [
    ["id", "inputTaskDate"],
    ["type", "date"],
    ["required", ""],
    ["value", toEdit ? toEdit.dueDate : ""],
  ]);
}

function renderPriorityStatus(ctr, toEdit) {
  // createElement("p", null, ctr, "Priority");
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("label", null, ctr, "High priority", [
    ["for", "highPriorityTask"],
  ]);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("input", "highPriority", ctr, "", [
    ["id", "highPriorityTask"],
    ["type", "checkbox"],
    ["checked", toEdit ? toEdit.priority : false],
  ]);
}

function renderDropDown(ctr) {
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("label", null, ctr, "List(s)", [["for", "dropdownList"]]);
  const select = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("select", "input", ctr, "", [
    ["id", "dropdownList"],
    ["list", "listOfLists"],
  ]);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("option", null, select, "All tasks", [
    ["value", "All tasks"],
    ["data-index-number", 0],
    ["disabled"],
    ["selected"],
  ]);
  const listArray = getListOptions();
  renderListOptions(select, listArray);
}

function getListOptions() {
  const listArray = (0,_list__WEBPACK_IMPORTED_MODULE_6__.getStoredLists)();
  listArray.splice(0, 1);
  return listArray;
}

function renderListOptions(select, listArray) {
  let i = 1;
  listArray.forEach((list) => {
    (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("option", null, select, list.title, [
      ["value", list.title],
      ["data-index-number", i],
    ]);
    i++;
  });
}

function renderTaskForm(taskToEdit) {
  const viewCtr = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__.getViewCtr)();
  const mainForm = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__["default"])("Task", viewCtr, taskToEdit);
  // const closeBtn = renderCloseBtn(mainForm);
  const dateCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "form-ctr", mainForm);
  const priorityCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "priority-ctr", mainForm);
  const listCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "form-ctr", mainForm);
  renderFormDate(dateCtr, taskToEdit);
  renderPriorityStatus(priorityCtr, taskToEdit);
  renderDropDown(listCtr);
  const buttonCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "button-ctr", mainForm);
  const submitBtn = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__.renderSubmit)(buttonCtr);
  const deleteBtn = (0,_addNew__WEBPACK_IMPORTED_MODULE_0__.renderDelete)(buttonCtr);
  submitTaskEL(submitBtn);
  closeFormEL();
  deleteTaskEL(deleteBtn);
}

function getAssignedLists(chosenIndex) {
  let assignedLists;
  if (chosenIndex === 0) {
    assignedLists = chosenIndex;
  } else {
    assignedLists = [0, chosenIndex];
  }
  return assignedLists;
}

function deleteTaskEL(deleteTaskBtn) {
  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(editedIndex);
    }
    (0,___WEBPACK_IMPORTED_MODULE_3__["default"])();

    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(0); //currentlist
    (0,_listUI__WEBPACK_IMPORTED_MODULE_5__.addTaskEventLis)();
    edited = false;
    editedIndex = null;
  });
}

function closeFormEL() {
  document.getElementById("close-btn").addEventListener("click", (e) => {
    (0,___WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(0); //currentlist
    (0,_listUI__WEBPACK_IMPORTED_MODULE_5__.addTaskEventLis)();
    edited = false;
    editedIndex = null;
  });
}

function submitTaskEL(submitTaskBtn) {
  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(editedIndex);
    }
    const dropDown = document.getElementById("dropdownList");
    const selectedIndex = dropDown.selectedIndex;
    const chosenIndex = dropDown.options[selectedIndex].dataset.indexNumber;
    const assignedLists = getAssignedLists(chosenIndex);
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(
      document.getElementById("inputTitle").value,
      document.getElementById("inputDesc").value,
      document.getElementById("inputTaskDate").value,
      document.getElementById("highPriorityTask").checked,
      assignedLists,
      false
    );
    (0,___WEBPACK_IMPORTED_MODULE_3__["default"])();
    console.log("chose", chosenIndex);
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(chosenIndex);
    (0,_listUI__WEBPACK_IMPORTED_MODULE_5__.addTaskEventLis)();
    edited = false;
    editedIndex = null;
  });
}


/***/ }),

/***/ "./src/allListsUI.js":
/*!***************************!*\
  !*** ./src/allListsUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListEventLis: () => (/* binding */ addListEventLis),
/* harmony export */   allListsView: () => (/* binding */ allListsView),
/* harmony export */   "default": () => (/* binding */ renderList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _addNewList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addNewList */ "./src/addNewList.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");









function renderList(list, i) {
  console.log("i", i);
  const listsCtr = document.getElementById("lists-ctr");
  const listItem = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "div",
    ["list-item", "item-ctr"],
    listsCtr,
    "",
    [["data-index-number", `${i}`]]
  );
  const textCtr = (0,_appUI__WEBPACK_IMPORTED_MODULE_1__.renderItemText)(list, listItem);
  const icon = renderListIcon(list, listItem);
  if (i !== 0) {
    const viewEditBtn = (0,_appUI__WEBPACK_IMPORTED_MODULE_1__.renderItemEdit)(listItem, i);
    const deleteBtn = renderItemDelete(listItem, i);
  }
}

function renderListIcon(list, ctr) {
  const iconDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("div", "icon-div", ctr);
  const listIcon = list.icon
    ? (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("button", "list-icon-btn", iconDiv, list.icon, [
        ["id", "list-icon"],
      ])
    : null;
  return iconDiv;
}

function addListOfListsCtr(viewCtr) {
  (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("div", "lists-ctr", viewCtr, "", [["id", "lists-ctr"]]);
}

function allListsView() {
  (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
  const viewCtr = document.getElementById("view-ctr");
  const headingCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("div", "heading-ctr", viewCtr);
  const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("h1", "h1", headingCtr, "All Lists");
  const desc = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "p",
    "desc",
    headingCtr,
    "View and edit all task lists"
  );
  addListOfListsCtr(viewCtr);
}

function renderItemDelete(ctr, index) {
  const deleteDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("div", "delete-div", ctr);
  const deleteBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "button",
    ["delete-list", "button"],
    deleteDiv,
    "",
    [["data-index-number", index]]
  );
  (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "i",
    ["delete-list-icon", "fa-solid", "fa-trash"],

    deleteBtn,
    "",
    [["title", "Delete list"]]
  );
  return deleteBtn;
}

function addListEventLis() {
  editListEL();
  deleteListEL();
  openListEL();
}

function editListEL() {
  const editBtns = document.querySelectorAll(".open-edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      const index = editBtn.dataset.indexNumber;
      const listToEdit = (0,_list__WEBPACK_IMPORTED_MODULE_4__.getListData)(index);
      console.log(listToEdit, "listtoedit");
      (0,_addNewList__WEBPACK_IMPORTED_MODULE_3__.editedListLog)(index);
      (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_addNewList__WEBPACK_IMPORTED_MODULE_3__.renderListForm)(listToEdit);
    });
  });
}

function deleteListEL() {
  const deleteBtns = document.querySelectorAll(".delete-list");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      const index = deleteBtn.dataset.indexNumber;
      console.log("ind", index);
      (0,_list__WEBPACK_IMPORTED_MODULE_4__.deleteList)(index);
      (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_list__WEBPACK_IMPORTED_MODULE_4__.loadListsFromStorage)();
    });
  });
}

function openListEL() {
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((listItem) => {
    listItem.addEventListener("click", (e) => {
      const tagName = e.target.tagName;
      if (tagName !== "I") {
        console.log(tagName, "tagname");
        const index = listItem.dataset.indexNumber;
        (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
        (0,_tasks__WEBPACK_IMPORTED_MODULE_5__.loadTasksFromStorage)(index);
      }
    });
  });
}


/***/ }),

/***/ "./src/appUI.js":
/*!**********************!*\
  !*** ./src/appUI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskCtrs: () => (/* binding */ addTaskCtrs),
/* harmony export */   "default": () => (/* binding */ renderAppUI),
/* harmony export */   renderHeader: () => (/* binding */ renderHeader),
/* harmony export */   renderItemEdit: () => (/* binding */ renderItemEdit),
/* harmony export */   renderItemText: () => (/* binding */ renderItemText),
/* harmony export */   renderNav: () => (/* binding */ renderNav),
/* harmony export */   renderViewCtr: () => (/* binding */ renderViewCtr)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/profile.js");






function renderAppUI() {
  renderHeader();
  renderNav();
  renderViewCtr();
  addNewBtn();
  addMenuEventLis();
}

const iconListNav = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getIconMenu(menuDiv) {
  let i = 0;
  iconListNav.forEach((icon) => {
    const menuItemDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "menuItemDiv", menuDiv, "", [
      ["id", `menuItem${i}`],
      ["data-index-number", `${i}`],
    ]);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("i", icon.classes, menuItemDiv);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("small", "menuText", menuItemDiv, icon.text);
    i++;
  });
  document.getElementById("menuItem0").classList.add("selected");
}

function renderNav() {
  const nav = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("footer", null, content);
  const menuDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "menuDiv", nav);
  getIconMenu(menuDiv);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("h3", "logo", nav, "Absolistly");
}

function renderHeader() {
  const header = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("header", "header", content);
  const logoCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "logo-ctr", header);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("h3", "logo", logoCtr, "Absolistly");
  const headerProfile = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "header-profile", header);
  let userName = (0,_profile__WEBPACK_IMPORTED_MODULE_4__.loadNameFromStorage)();
  let avatar = (0,_profile__WEBPACK_IMPORTED_MODULE_4__.loadAvatarFromStorage)();
  userName = (0,_profile__WEBPACK_IMPORTED_MODULE_4__.getName)(userName);
  avatar = (0,_profile__WEBPACK_IMPORTED_MODULE_4__.getAvatar)(avatar);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "user-name-header", headerProfile, `Hello, ${userName}.`);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "avatar-header", headerProfile, "", [["src", avatar]]);
}

function renderViewCtr() {
  const viewCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "view-ctr", content, "", [
    ["id", "view-ctr"],
  ]);
}

function addTaskCtrs() {
  const viewCtr = document.getElementById("view-ctr");
  const todoDoneCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "todo-done-ctr", viewCtr);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "todo-ctr", todoDoneCtr, "", [["id", "todo-ctr"]]);
  const doneCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "done-ctr", todoDoneCtr, "", [
    ["id", "done-ctr"],
  ]);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", "done-title", doneCtr, "Done");
}

function addNewBtn() {
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("button", ["add-new-btn", "fa-solid", "fa-plus"], content, "", [
    ["id", "add-new-btn"],
  ]);
}

function renderItemText(item, ctr) {
  const textDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "text-div", ctr);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", "task-title", textDiv, item.title);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "task-desc", textDiv, item.description);
  return textDiv;
}

function renderItemEdit(ctr, index) {
  const openEditDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "open-edit-div", ctr, "", [
    ["id", `open-edit-div${index}`],
  ]);
  const editBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "button",
    ["open-edit", "button"],
    openEditDiv,
    "",
    [["data-index-number", index]]
  );
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "i",
    ["editList", "view-edit", "fa-solid", "fa-pen-to-square"],

    editBtn,
    "",
    [["title", "Edit & Delete"]]
  );
  return editBtn;
}

function removePastSelected(menuItems) {
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove("selected");
  });
}

function markAsSelected(menuItem) {
  menuItem.classList.add("selected");
}

function addMenuEventLis() {
  const menuItems = document.querySelectorAll(".menuItemDiv");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      removePastSelected(menuItems);
      markAsSelected(menuItem);
      openThisPage(menuItem.dataset.indexNumber);
    });
  });
}

function openThisPage(index) {
  console.log(index, "here");
  (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (index == 0) {
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(index);
    console.log("index1", index);
  }
  if (index == 1) {
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)("today");
  }
  if (index == 2) {
    (0,_list__WEBPACK_IMPORTED_MODULE_3__.loadListsFromStorage)();
  } else if (index == 3) {
    (0,_profile__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
}


/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(
  tag,
  classList,
  parentEl,
  text,
  attributes
) {
  const newElement = document.createElement(tag);
  if (classList) {
    classList = Array.isArray(classList)
      ? newElement.classList.add(...classList)
      : newElement.classList.add(classList);
  }
  newElement.textContent = text;

  if (attributes) {
    attributes.forEach((element) => {
      newElement.setAttribute(element[0], element[1]);
    });
  }
  parentEl.append(newElement);
  return newElement;
}


/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDueDates)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isPast.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


function checkIfPast(date, dueDateDiv) {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isPast)(date)) dueDateDiv.classList.add("overdue");
}

function checkIfToday(date, dueDateDiv) {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isToday)(date)) {
    dueDateDiv.classList.add("today");
  }
}

function formatDueDates(date, dueDateDiv) {
  //   const dueDates = document.querySelectorAll(".due-date");
  //   dueDates.forEach((dueDate) => {
  if (date) {
    //   const date = dueDate.innerText;
    const parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(date);
    checkIfPast(parsedDate, dueDateDiv);
    checkIfToday(parsedDate, dueDateDiv);
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(parsedDate, "dd MMM yy");
    //   dueDate.innerText = formattedDate;
    return formattedDate;
  }
  //   });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearViewCtr)
/* harmony export */ });
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");
/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewTask */ "./src/addNewTask.js");
/* harmony import */ var _addNewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewList */ "./src/addNewList.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






document.addEventListener("DOMContentLoaded", () => {
  (0,_appUI__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.loadTasksFromStorage)(0);
  addNewEventLi();
});

function addNewEventLi() {
  document.getElementById("add-new-btn").addEventListener("click", () => {
    clearViewCtr();
    checkType();
  });
}

function checkType() {
  const allLists = document.getElementById("menuItem2");
  if (allLists.classList.contains("selected")) {
    console.log("ys");
    return (0,_addNewList__WEBPACK_IMPORTED_MODULE_2__.renderListForm)();
  }
  (0,_addNewTask__WEBPACK_IMPORTED_MODULE_1__.renderTaskForm)();
}

function clearViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  let i = 0;
  if (viewCtr.hasChildNodes) {
    while (viewCtr.firstChild) {
      viewCtr.removeChild(viewCtr.firstChild);
      console.log("clear", i);
      i++;
    }
  }
}


/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListToStorage: () => (/* binding */ addListToStorage),
/* harmony export */   "default": () => (/* binding */ createList),
/* harmony export */   deleteList: () => (/* binding */ deleteList),
/* harmony export */   getListData: () => (/* binding */ getListData),
/* harmony export */   getListInfo: () => (/* binding */ getListInfo),
/* harmony export */   getStoredLists: () => (/* binding */ getStoredLists),
/* harmony export */   loadListsFromStorage: () => (/* binding */ loadListsFromStorage)
/* harmony export */ });
/* harmony import */ var _listUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listUI */ "./src/listUI.js");
/* harmony import */ var _allListsUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allListsUI */ "./src/allListsUI.js");




// function getListID() {
//   const lists = getStoredLists();
//   let idArray = [];
//   let nextID;
//   if (lists.length > 0) {
//     lists.forEach((list) => {
//       idArray.push(list.listID);
//       nextID = Math.max(...idArray) + 1;
//     });
//   } else nextID = 1;
//   return nextID;
// }

function createList(title, description, icon) {
  // const listID = getListID();
  const list = {
    title: title,
    description: description,
    icon: icon,
    // listID: listID,
  };
  addListToStorage(list);
  return list;
}

function getStoredLists() {
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  return storedLists;
}

function addListToStorage(list) {
  const lists = getStoredLists();
  lists.push(list);
  const listData = JSON.stringify(lists);
  localStorage.setItem("lists", listData);
}

function getListData(index) {
  console.log(index, "listind");
  const storedLists = getStoredLists();
  if (storedLists.length > 0) {
    const foundList = storedLists[index];
    if (foundList) {
      return foundList;
    }
    return null;
  }
}

function getListInfo(ID) {
  const list = getListData(ID);
  if (list) {
    (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.renderListName)(list.title, list.description);
  } else {
    const allTasks = createList(
      "All tasks",
      "All your tasks in one list",
      null
    );
    (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.renderListName)(allTasks.title, allTasks.description);
  }
}

function loadListsFromStorage() {
  (0,_allListsUI__WEBPACK_IMPORTED_MODULE_1__.allListsView)();
  const storedLists = getStoredLists();
  let i = 0;
  storedLists.forEach((storedList) => {
    (0,_allListsUI__WEBPACK_IMPORTED_MODULE_1__["default"])(storedList, i);
    i++;
  });
  (0,_allListsUI__WEBPACK_IMPORTED_MODULE_1__.addListEventLis)();
}

function deleteList(index) {
  const lists = getStoredLists();
  if (lists.length > 0) {
    lists.splice(index, 1);
    const listData = JSON.stringify(lists);
    localStorage.setItem("lists", listData);
  }
}


/***/ }),

/***/ "./src/listUI.js":
/*!***********************!*\
  !*** ./src/listUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskEventLis: () => (/* binding */ addTaskEventLis),
/* harmony export */   checkIfEmpty: () => (/* binding */ checkIfEmpty),
/* harmony export */   renderListName: () => (/* binding */ renderListName),
/* harmony export */   renderTask: () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");
/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addNewTask */ "./src/addNewTask.js");
/* harmony import */ var _allListsUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allListsUI */ "./src/allListsUI.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _complete_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complete.png */ "./src/complete.png");










function renderListName(title, description) {
  const viewCtr = document.getElementById("view-ctr");
  const headingCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "heading-ctr", viewCtr);
  const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("h1", "h1", headingCtr, title);
  const desc = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "desc", headingCtr, description);
}

function renderPriorityStatus(status, textDiv) {
  if (status) {
    textDiv.classList.add("priority");
  }
}

function renderListIcon(task, ctr) {
  let iconDiv;
  if (task.assignedLists.length > 1) {
    const listIndex = task.assignedLists.slice(1, 2);
    const list = (0,_list__WEBPACK_IMPORTED_MODULE_7__.getListData)(listIndex);
    if (list.icon) {
      const iconCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "icon-div", ctr);
      const listBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
        "button",
        "list-icon-btn",
        iconCtr,
        list.icon,
        [
          ["id", "list-icon"],
          ["title", "View List"],
        ]
      );
      openListEL(listBtn, listIndex);
    }
  }
  return iconDiv;
}

function renderDueDate(task, ctr, index) {
  const taskDueDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "task-due-div", ctr);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "small",
    "due-date",
    taskDueDiv,
    (0,_date__WEBPACK_IMPORTED_MODULE_2__["default"])(task.dueDate, taskDueDiv)
  );
  return taskDueDiv;
}

function renderTaskComplete(task, ctr, index) {
  const taskCompleteDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "task-complete-div", ctr);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "button",
    [
      "complete-btn",
      "fa-solid",
      "fa-check",
      task.completed ? "doneBtn" : "todoBtn",
      "button",
    ],
    taskCompleteDiv,
    "",
    [["data-index-number", index]]
  );
}

function renderTask(task, index) {
  console.log(task);
  const todoCtr = document.getElementById("todo-ctr");
  const doneCtr = document.getElementById("done-ctr");
  const itemCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "div",
    "item-ctr",
    task.completed ? doneCtr : todoCtr,
    "",
    [["id", `item-ctr${index}`]]
  );
  const textDiv = (0,_appUI__WEBPACK_IMPORTED_MODULE_4__.renderItemText)(task, itemCtr);
  renderDueDate(task, textDiv, index);
  const viewEditDiv = (0,_appUI__WEBPACK_IMPORTED_MODULE_4__.renderItemEdit)(itemCtr, index);
  renderListIcon(task, itemCtr);
  renderTaskComplete(task, itemCtr, index);
  renderPriorityStatus(task.priority, textDiv);
}

function checkIfEmpty() {
  const todoCtr = document.getElementById("todo-ctr");
  const doneCtr = document.getElementById("done-ctr");
  if (!todoCtr.hasChildNodes()) {
    const noTasksCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "no-tasks-ctr", todoCtr, "", [
      ["id", "no-tasks-ctr"],
    ]);
    const noTasksImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "no-tasks-img", noTasksCtr);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "no-tasks-text", noTasksCtr, "You're up to date!");
    noTasksImg.src = _complete_png__WEBPACK_IMPORTED_MODULE_8__;
  }
  if (todoCtr.childNodes.length > 1) {
    const empty = document.getElementById("no-tasks-ctr");
    if (empty) {
      empty.remove();
    }
  }
  if (doneCtr.childNodes.length === 1) {
    (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      "p",
      ["nothing-complete", "no-tasks-text"],
      doneCtr,
      "Complete a task to see it here...",
      [["id", "nothing-complete"]]
    );
  }
  if (doneCtr.childNodes.length > 2) {
    const empty = document.getElementById("nothing-complete");
    if (empty) {
      empty.remove();
    }
  }
}

function addTaskEventLis() {
  editTaskEL();
  completeTaskEL();
}

function openListEL(listBtn, listIndex) {
  listBtn.addEventListener("click", (e) => {
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.loadTasksFromStorage)(listIndex);
  });
}

function editTaskEL() {
  const editBtns = document.querySelectorAll(".open-edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      const index = editBtn.dataset.indexNumber;
      const taskToEdit = (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.getTaskData)(index);
      (0,_addNewTask__WEBPACK_IMPORTED_MODULE_5__.editedLog)(index);
      (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_addNewTask__WEBPACK_IMPORTED_MODULE_5__.renderTaskForm)(taskToEdit);
    });
  });
}

function updateParent(index) {
  const itemCtr = document.getElementById(`item-ctr${index}`);
  let parentID = itemCtr.parentNode.id;
  parentID = parentID === "todo-ctr" ? "done-ctr" : "todo-ctr";
  const parent = document.getElementById(parentID);
  parent.appendChild(itemCtr);
}

function completeTaskEL() {
  const completeBtns = document.querySelectorAll(".complete-btn");
  completeBtns.forEach((completeBtn) => {
    completeBtn.addEventListener("click", () => {
      const index = completeBtn.dataset.indexNumber;
      const taskToEdit = (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.getTaskData)(index);
      updateParent(index);
      (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.updateCompleteStatus)(index);
      checkIfEmpty();
    });
  });
}


/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadProfileFromStorage),
/* harmony export */   getAvatar: () => (/* binding */ getAvatar),
/* harmony export */   getName: () => (/* binding */ getName),
/* harmony export */   loadAvatarFromStorage: () => (/* binding */ loadAvatarFromStorage),
/* harmony export */   loadNameFromStorage: () => (/* binding */ loadNameFromStorage),
/* harmony export */   saveAvatarToStorage: () => (/* binding */ saveAvatarToStorage),
/* harmony export */   saveNameToStorage: () => (/* binding */ saveNameToStorage)
/* harmony export */ });
/* harmony import */ var _profileUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileUI */ "./src/profileUI.js");


function loadProfileFromStorage() {
  const name = loadNameFromStorage();
  const avatar = loadAvatarFromStorage();
  (0,_profileUI__WEBPACK_IMPORTED_MODULE_0__["default"])(name, avatar);
}

function loadAvatarFromStorage() {
  const avatar = JSON.parse(localStorage.getItem("avatar")) || [];
  return avatar;
}

function loadNameFromStorage() {
  const name = JSON.parse(localStorage.getItem("name")) || [];
  return name;
}

function saveNameToStorage(name) {
  const storeName = JSON.stringify(name);
  localStorage.setItem("name", storeName);
}

function saveAvatarToStorage(avatar) {
  const storeAvatar = JSON.stringify(avatar);
  localStorage.setItem("avatar", storeAvatar);
}

function getAvatar(avatar) {
  if (avatar) {
    return avatar;
  }
  const generator = new AvatarGenerator();
  const defaultAvatar = generator.generateRandomAvatar("avatar");
  saveAvatarToStorage(defaultAvatar);
  return defaultAvatar;
}

function getName(name) {
  if (name) {
    return name;
  }
  name = "NewUser";
  saveNameToStorage(name);
  return name;
}


/***/ }),

/***/ "./src/profileUI.js":
/*!**************************!*\
  !*** ./src/profileUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProfileUI)
/* harmony export */ });
/* harmony import */ var random_avatar_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! random-avatar-generator */ "./node_modules/random-avatar-generator/dist/index.js");
/* harmony import */ var random_avatar_generator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(random_avatar_generator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNew */ "./src/addNew.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/profile.js");





function createProfileUI(name, avatar) {
  const viewCtr = (0,_addNew__WEBPACK_IMPORTED_MODULE_2__.getViewCtr)();
  const profileCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "profile-ctr", viewCtr);
  const avatarCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "avatar-ctr", profileCtr);
  const avatarImg = avatarUI(avatar, avatarCtr);
  const nameCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "profile-name-ctr", profileCtr);
  const currentName = (0,_profile__WEBPACK_IMPORTED_MODULE_3__.getName)(name);
  const profileName = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "profile-name", nameCtr, currentName);
  const buttonCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "button-ctr", profileCtr);
  const editName = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "button",
    "edit-name-btn",
    buttonCtr,
    "Edit name"
  );
  const editAvatar = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "button",
    "avatar-btn",
    buttonCtr,
    "Random avatar"
  );
  editNameEL(editName, profileName);
  randomAvatarEL(avatarImg, editAvatar);
}

function avatarUI(avatar, avatarCtr) {
  const currentAvatar = (0,_profile__WEBPACK_IMPORTED_MODULE_3__.getAvatar)(avatar);
  const avatarImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "avatar", avatarCtr, "", [
    ["src", currentAvatar],
  ]);
  return avatarImg;
}

function randomAvatarEL(img, btn) {
  btn.addEventListener("click", () => {
    const generator = new random_avatar_generator__WEBPACK_IMPORTED_MODULE_0__.AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    (0,_profile__WEBPACK_IMPORTED_MODULE_3__.saveAvatarToStorage)(avatar);
    img.setAttribute("src", avatar);
  });
}

function editNameEL(editName, profileName) {
  editName.addEventListener("click", () => {
    const name = prompt("Enter profile name");
    profileName.textContent = name;
    (0,_profile__WEBPACK_IMPORTED_MODULE_3__.saveNameToStorage)(name);
  });
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTaskData: () => (/* binding */ getTaskData),
/* harmony export */   loadTasksFromStorage: () => (/* binding */ loadTasksFromStorage),
/* harmony export */   updateCompleteStatus: () => (/* binding */ updateCompleteStatus)
/* harmony export */ });
/* harmony import */ var _listUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listUI */ "./src/listUI.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");







function createTask(
  title,
  description,
  dueDate,
  priority,
  list,
  completed
) {
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    assignedLists: Array.isArray(list) ? list : [list],
    completed: completed,
    addTaskToStorage: addTaskToStorage,
  };
  task.addTaskToStorage();
  return task;
}

function addTaskToStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(this);
  const taskData = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskData);
}

function toggleComplete(task) {
  task.completed = !task.completed;
}

function loadTasksFromStorage(listIndex) {
  (0,_appUI__WEBPACK_IMPORTED_MODULE_3__.addTaskCtrs)();
  console.log("listID", listIndex);
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // listIndex = listID.toString();
  if (listIndex == "today") {
    (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.renderListName)("Today", "All tasks due today");
    getTodaysTasks(tasks);
  } else if (tasks.length > 0) {
    getTasksForThisList(listIndex, tasks);
    (0,_list__WEBPACK_IMPORTED_MODULE_1__.getListInfo)(listIndex);
  } else {
    (0,_list__WEBPACK_IMPORTED_MODULE_1__.getListInfo)(listIndex);
  }
  (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.addTaskEventLis)();
  (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.checkIfEmpty)();
}

function getTodaysTasks(tasks) {
  let i = 0;
  tasks.forEach((task) => {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isToday)(task.dueDate)) {
      (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task, i);
      i++;
    }
  });
}

function getTasksForThisList(listID, tasks) {
  let i = 0;
  tasks.forEach((task) => {
    if (task.assignedLists.toString().includes(listID.toString())) {
      (0,_listUI__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task, i);
      i++;
    }
  });
}

function getTaskData(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    return tasks[index];
  }
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    tasks.splice(index, 1);
    const taskData = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskData);
  }
}

function updateCompleteStatus(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    toggleComplete(tasks[index]);
    console.log(tasks[index].completed);
    const taskData = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskData);
  }
}


/***/ }),

/***/ "./src/complete.png":
/*!**************************!*\
  !*** ./src/complete.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b2235bbf8340f25a0bcb.png";

/***/ }),

/***/ "?d4c0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.floor(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
const protectedDayOfYearTokens = ["D", "DD"];
const protectedWeekYearTokens = ["YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}

function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}

function throwProtectedError(token, format, input) {
  if (token === "YYYY") {
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "YY") {
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "D") {
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "DD") {
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  }
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    startOfDayRight.getTime() -
    (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");








// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_2__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_3__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  const formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate,
  };

  const result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_4__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_5__.formatters[firstCharacter];
      if (formatter) {
        if (
          !options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(substring)
        ) {
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.throwProtectedError)(substring, formatStr, String(date));
        }
        if (
          !options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(substring)
        ) {
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.throwProtectedError)(substring, formatStr, String(date));
        }
        return formatter(
          originalDate,
          substring,
          locale.localize,
          formatterOptions,
        );
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return substring;
    })
    .join("");

  return result;
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date).getTime() - (0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options).getTime() -
    (0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isPast.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isPast.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isPast: () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) < Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPast);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parseISO.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/parseISO.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");


/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);

  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  const timestamp = date.getTime();
  let time = 0;
  let offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    const dirtyDate = new Date(timestamp + time);
    // JS parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    const result = new Date(0);
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate(),
    );
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds(),
    );
    return result;
  }

  return new Date(timestamp + time + offset);
}

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

const dateRegex =
  /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex =
  /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length,
      );
    }
  }

  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" +
      (4 + additionalDigits) +
      "})|(\\d{2}|[+-]\\d{" +
      (2 + additionalDigits) +
      "})$)",
  );

  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return { year: NaN, restDateString: "" };

  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);

  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);

  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return (
    hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * 1000
  );
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(",", "."))) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;

  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;

  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  );
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argStr === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/emoji-picker-element/database.js":
/*!*******************************************************!*\
  !*** ./node_modules/emoji-picker-element/database.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Database)
/* harmony export */ });
function assertNonEmptyString (str) {
  if (typeof str !== 'string' || !str) {
    throw new Error('expected a non-empty string, got: ' + str)
  }
}

function assertNumber (number) {
  if (typeof number !== 'number') {
    throw new Error('expected a number, got: ' + number)
  }
}

const DB_VERSION_CURRENT = 1;
const DB_VERSION_INITIAL = 1;
const STORE_EMOJI = 'emoji';
const STORE_KEYVALUE = 'keyvalue';
const STORE_FAVORITES = 'favorites';
const FIELD_TOKENS = 'tokens';
const INDEX_TOKENS = 'tokens';
const FIELD_UNICODE = 'unicode';
const INDEX_COUNT = 'count';
const FIELD_GROUP = 'group';
const FIELD_ORDER = 'order';
const INDEX_GROUP_AND_ORDER = 'group-order';
const KEY_ETAG = 'eTag';
const KEY_URL = 'url';
const KEY_PREFERRED_SKINTONE = 'skinTone';
const MODE_READONLY = 'readonly';
const MODE_READWRITE = 'readwrite';
const INDEX_SKIN_UNICODE = 'skinUnicodes';
const FIELD_SKIN_UNICODE = 'skinUnicodes';

const DEFAULT_DATA_SOURCE = 'https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json';
const DEFAULT_LOCALE = 'en';

// like lodash's uniqBy but much smaller
function uniqBy (arr, func) {
  const set = new Set();
  const res = [];
  for (const item of arr) {
    const key = func(item);
    if (!set.has(key)) {
      set.add(key);
      res.push(item);
    }
  }
  return res
}

function uniqEmoji (emojis) {
  return uniqBy(emojis, _ => _.unicode)
}

function initialMigration (db) {
  function createObjectStore (name, keyPath, indexes) {
    const store = keyPath
      ? db.createObjectStore(name, { keyPath })
      : db.createObjectStore(name);
    if (indexes) {
      for (const [indexName, [keyPath, multiEntry]] of Object.entries(indexes)) {
        store.createIndex(indexName, keyPath, { multiEntry });
      }
    }
    return store
  }

  createObjectStore(STORE_KEYVALUE);
  createObjectStore(STORE_EMOJI, /* keyPath */ FIELD_UNICODE, {
    [INDEX_TOKENS]: [FIELD_TOKENS, /* multiEntry */ true],
    [INDEX_GROUP_AND_ORDER]: [[FIELD_GROUP, FIELD_ORDER]],
    [INDEX_SKIN_UNICODE]: [FIELD_SKIN_UNICODE, /* multiEntry */ true]
  });
  createObjectStore(STORE_FAVORITES, undefined, {
    [INDEX_COUNT]: ['']
  });
}

const openIndexedDBRequests = {};
const databaseCache = {};
const onCloseListeners = {};

function handleOpenOrDeleteReq (resolve, reject, req) {
  // These things are almost impossible to test with fakeIndexedDB sadly
  /* istanbul ignore next */
  req.onerror = () => reject(req.error);
  /* istanbul ignore next */
  req.onblocked = () => reject(new Error('IDB blocked'));
  req.onsuccess = () => resolve(req.result);
}

async function createDatabase (dbName) {
  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, DB_VERSION_CURRENT);
    openIndexedDBRequests[dbName] = req;
    req.onupgradeneeded = e => {
      // Technically there is only one version, so we don't need this `if` check
      // But if an old version of the JS is in another browser tab
      // and it gets upgraded in the future and we have a new DB version, well...
      // better safe than sorry.
      /* istanbul ignore else */
      if (e.oldVersion < DB_VERSION_INITIAL) {
        initialMigration(req.result);
      }
    };
    handleOpenOrDeleteReq(resolve, reject, req);
  });
  // Handle abnormal closes, e.g. "delete database" in chrome dev tools.
  // No need for removeEventListener, because once the DB can no longer
  // fire "close" events, it will auto-GC.
  // Unfortunately cannot test in fakeIndexedDB: https://github.com/dumbmatter/fakeIndexedDB/issues/50
  /* istanbul ignore next */
  db.onclose = () => closeDatabase(dbName);
  return db
}

function openDatabase (dbName) {
  if (!databaseCache[dbName]) {
    databaseCache[dbName] = createDatabase(dbName);
  }
  return databaseCache[dbName]
}

function dbPromise (db, storeName, readOnlyOrReadWrite, cb) {
  return new Promise((resolve, reject) => {
    // Use relaxed durability because neither the emoji data nor the favorites/preferred skin tone
    // are really irreplaceable data. IndexedDB is just a cache in this case.
    const txn = db.transaction(storeName, readOnlyOrReadWrite, { durability: 'relaxed' });
    const store = typeof storeName === 'string'
      ? txn.objectStore(storeName)
      : storeName.map(name => txn.objectStore(name));
    let res;
    cb(store, txn, (result) => {
      res = result;
    });

    txn.oncomplete = () => resolve(res);
    /* istanbul ignore next */
    txn.onerror = () => reject(txn.error);
  })
}

function closeDatabase (dbName) {
  // close any open requests
  const req = openIndexedDBRequests[dbName];
  const db = req && req.result;
  if (db) {
    db.close();
    const listeners = onCloseListeners[dbName];
    /* istanbul ignore else */
    if (listeners) {
      for (const listener of listeners) {
        listener();
      }
    }
  }
  delete openIndexedDBRequests[dbName];
  delete databaseCache[dbName];
  delete onCloseListeners[dbName];
}

function deleteDatabase (dbName) {
  return new Promise((resolve, reject) => {
    // close any open requests
    closeDatabase(dbName);
    const req = indexedDB.deleteDatabase(dbName);
    handleOpenOrDeleteReq(resolve, reject, req);
  })
}

// The "close" event occurs during an abnormal shutdown, e.g. a user clearing their browser data.
// However, it doesn't occur with the normal "close" event, so we handle that separately.
// https://www.w3.org/TR/IndexedDB/#close-a-database-connection
function addOnCloseListener (dbName, listener) {
  let listeners = onCloseListeners[dbName];
  if (!listeners) {
    listeners = onCloseListeners[dbName] = [];
  }
  listeners.push(listener);
}

// list of emoticons that don't match a simple \W+ regex
// extracted using:
// require('emoji-picker-element-data/en/emojibase/data.json').map(_ => _.emoticon).filter(Boolean).filter(_ => !/^\W+$/.test(_))
const irregularEmoticons = new Set([
  ':D', 'XD', ":'D", 'O:)',
  ':X', ':P', ';P', 'XP',
  ':L', ':Z', ':j', '8D',
  'XO', '8)', ':B', ':O',
  ':S', ":'o", 'Dx', 'X(',
  'D:', ':C', '>0)', ':3',
  '</3', '<3', '\\M/', ':E',
  '8#'
]);

function extractTokens (str) {
  return str
    .split(/[\s_]+/)
    .map(word => {
      if (!word.match(/\w/) || irregularEmoticons.has(word)) {
        // for pure emoticons like :) or :-), just leave them as-is
        return word.toLowerCase()
      }

      return word
        .replace(/[)(:,]/g, '')
        .replace(/’/g, "'")
        .toLowerCase()
    }).filter(Boolean)
}

const MIN_SEARCH_TEXT_LENGTH = 2;

// This is an extra step in addition to extractTokens(). The difference here is that we expect
// the input to have already been run through extractTokens(). This is useful for cases like
// emoticons, where we don't want to do any tokenization (because it makes no sense to split up
// ">:)" by the colon) but we do want to lowercase it to have consistent search results, so that
// the user can type ':P' or ':p' and still get the same result.
function normalizeTokens (str) {
  return str
    .filter(Boolean)
    .map(_ => _.toLowerCase())
    .filter(_ => _.length >= MIN_SEARCH_TEXT_LENGTH)
}

// Transform emoji data for storage in IDB
function transformEmojiData (emojiData) {
  const res = emojiData.map(({ annotation, emoticon, group, order, shortcodes, skins, tags, emoji, version }) => {
    const tokens = [...new Set(
      normalizeTokens([
        ...(shortcodes || []).map(extractTokens).flat(),
        ...tags.map(extractTokens).flat(),
        ...extractTokens(annotation),
        emoticon
      ])
    )].sort();
    const res = {
      annotation,
      group,
      order,
      tags,
      tokens,
      unicode: emoji,
      version
    };
    if (emoticon) {
      res.emoticon = emoticon;
    }
    if (shortcodes) {
      res.shortcodes = shortcodes;
    }
    if (skins) {
      res.skinTones = [];
      res.skinUnicodes = [];
      res.skinVersions = [];
      for (const { tone, emoji, version } of skins) {
        res.skinTones.push(tone);
        res.skinUnicodes.push(emoji);
        res.skinVersions.push(version);
      }
    }
    return res
  });
  return res
}

// helper functions that help compress the code better

function callStore (store, method, key, cb) {
  store[method](key).onsuccess = e => (cb && cb(e.target.result));
}

function getIDB (store, key, cb) {
  callStore(store, 'get', key, cb);
}

function getAllIDB (store, key, cb) {
  callStore(store, 'getAll', key, cb);
}

function commit (txn) {
  /* istanbul ignore else */
  if (txn.commit) {
    txn.commit();
  }
}

// like lodash's minBy
function minBy (array, func) {
  let minItem = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (func(minItem) > func(item)) {
      minItem = item;
    }
  }
  return minItem
}

// return an array of results representing all items that are found in each one of the arrays
//

function findCommonMembers (arrays, uniqByFunc) {
  const shortestArray = minBy(arrays, _ => _.length);
  const results = [];
  for (const item of shortestArray) {
    // if this item is included in every array in the intermediate results, add it to the final results
    if (!arrays.some(array => array.findIndex(_ => uniqByFunc(_) === uniqByFunc(item)) === -1)) {
      results.push(item);
    }
  }
  return results
}

async function isEmpty (db) {
  return !(await get(db, STORE_KEYVALUE, KEY_URL))
}

async function hasData (db, url, eTag) {
  const [oldETag, oldUrl] = await Promise.all([KEY_ETAG, KEY_URL]
    .map(key => get(db, STORE_KEYVALUE, key)));
  return (oldETag === eTag && oldUrl === url)
}

async function doFullDatabaseScanForSingleResult (db, predicate) {
  // This batching algorithm is just a perf improvement over a basic
  // cursor. The BATCH_SIZE is an estimate of what would give the best
  // perf for doing a full DB scan (worst case).
  //
  // Mini-benchmark for determining the best batch size:
  //
  // PERF=1 yarn build:rollup && yarn test:adhoc
  //
  // (async () => {
  //   performance.mark('start')
  //   await $('emoji-picker').database.getEmojiByShortcode('doesnotexist')
  //   performance.measure('total', 'start')
  //   console.log(performance.getEntriesByName('total').slice(-1)[0].duration)
  // })()
  const BATCH_SIZE = 50; // Typically around 150ms for 6x slowdown in Chrome for above benchmark
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    let lastKey;

    const processNextBatch = () => {
      emojiStore.getAll(lastKey && IDBKeyRange.lowerBound(lastKey, true), BATCH_SIZE).onsuccess = e => {
        const results = e.target.result;
        for (const result of results) {
          lastKey = result.unicode;
          if (predicate(result)) {
            return cb(result)
          }
        }
        if (results.length < BATCH_SIZE) {
          return cb()
        }
        processNextBatch();
      };
    };
    processNextBatch();
  })
}

async function loadData (db, emojiData, url, eTag) {
  try {
    const transformedData = transformEmojiData(emojiData);
    await dbPromise(db, [STORE_EMOJI, STORE_KEYVALUE], MODE_READWRITE, ([emojiStore, metaStore], txn) => {
      let oldETag;
      let oldUrl;
      let todo = 0;

      function checkFetched () {
        if (++todo === 2) { // 2 requests made
          onFetched();
        }
      }

      function onFetched () {
        if (oldETag === eTag && oldUrl === url) {
          // check again within the transaction to guard against concurrency, e.g. multiple browser tabs
          return
        }
        // delete old data
        emojiStore.clear();
        // insert new data
        for (const data of transformedData) {
          emojiStore.put(data);
        }
        metaStore.put(eTag, KEY_ETAG);
        metaStore.put(url, KEY_URL);
        commit(txn);
      }

      getIDB(metaStore, KEY_ETAG, result => {
        oldETag = result;
        checkFetched();
      });

      getIDB(metaStore, KEY_URL, result => {
        oldUrl = result;
        checkFetched();
      });
    });
  } finally {
  }
}

async function getEmojiByGroup (db, group) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const range = IDBKeyRange.bound([group, 0], [group + 1, 0], false, true);
    getAllIDB(emojiStore.index(INDEX_GROUP_AND_ORDER), range, cb);
  })
}

async function getEmojiBySearchQuery (db, query) {
  const tokens = normalizeTokens(extractTokens(query));

  if (!tokens.length) {
    return []
  }

  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    // get all results that contain all tokens (i.e. an AND query)
    const intermediateResults = [];

    const checkDone = () => {
      if (intermediateResults.length === tokens.length) {
        onDone();
      }
    };

    const onDone = () => {
      const results = findCommonMembers(intermediateResults, _ => _.unicode);
      cb(results.sort((a, b) => a.order < b.order ? -1 : 1));
    };

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const range = i === tokens.length - 1
        ? IDBKeyRange.bound(token, token + '\uffff', false, true) // treat last token as a prefix search
        : IDBKeyRange.only(token); // treat all other tokens as an exact match
      getAllIDB(emojiStore.index(INDEX_TOKENS), range, result => {
        intermediateResults.push(result);
        checkDone();
      });
    }
  })
}

// This could have been implemented as an IDB index on shortcodes, but it seemed wasteful to do that
// when we can already query by tokens and this will give us what we're looking for 99.9% of the time
async function getEmojiByShortcode (db, shortcode) {
  const emojis = await getEmojiBySearchQuery(db, shortcode);

  // In very rare cases (e.g. the shortcode "v" as in "v for victory"), we cannot search because
  // there are no usable tokens (too short in this case). In that case, we have to do an inefficient
  // full-database scan, which I believe is an acceptable tradeoff for not having to have an extra
  // index on shortcodes.

  if (!emojis.length) {
    const predicate = _ => ((_.shortcodes || []).includes(shortcode.toLowerCase()));
    return (await doFullDatabaseScanForSingleResult(db, predicate)) || null
  }

  return emojis.filter(_ => {
    const lowerShortcodes = (_.shortcodes || []).map(_ => _.toLowerCase());
    return lowerShortcodes.includes(shortcode.toLowerCase())
  })[0] || null
}

async function getEmojiByUnicode (db, unicode) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => (
    getIDB(emojiStore, unicode, result => {
      if (result) {
        return cb(result)
      }
      getIDB(emojiStore.index(INDEX_SKIN_UNICODE), unicode, result => cb(result || null));
    })
  ))
}

function get (db, storeName, key) {
  return dbPromise(db, storeName, MODE_READONLY, (store, txn, cb) => (
    getIDB(store, key, cb)
  ))
}

function set (db, storeName, key, value) {
  return dbPromise(db, storeName, MODE_READWRITE, (store, txn) => {
    store.put(value, key);
    commit(txn);
  })
}

function incrementFavoriteEmojiCount (db, unicode) {
  return dbPromise(db, STORE_FAVORITES, MODE_READWRITE, (store, txn) => (
    getIDB(store, unicode, result => {
      store.put((result || 0) + 1, unicode);
      commit(txn);
    })
  ))
}

function getTopFavoriteEmoji (db, customEmojiIndex, limit) {
  if (limit === 0) {
    return []
  }
  return dbPromise(db, [STORE_FAVORITES, STORE_EMOJI], MODE_READONLY, ([favoritesStore, emojiStore], txn, cb) => {
    const results = [];
    favoritesStore.index(INDEX_COUNT).openCursor(undefined, 'prev').onsuccess = e => {
      const cursor = e.target.result;
      if (!cursor) { // no more results
        return cb(results)
      }

      function addResult (result) {
        results.push(result);
        if (results.length === limit) {
          return cb(results) // done, reached the limit
        }
        cursor.continue();
      }

      const unicodeOrName = cursor.primaryKey;
      const custom = customEmojiIndex.byName(unicodeOrName);
      if (custom) {
        return addResult(custom)
      }
      // This could be done in parallel (i.e. make the cursor and the get()s parallelized),
      // but my testing suggests it's not actually faster.
      getIDB(emojiStore, unicodeOrName, emoji => {
        if (emoji) {
          return addResult(emoji)
        }
        // emoji not found somehow, ignore (may happen if custom emoji change)
        cursor.continue();
      });
    };
  })
}

// trie data structure for prefix searches
// loosely based on https://github.com/nolanlawson/substring-trie

const CODA_MARKER = ''; // marks the end of the string

function trie (arr, itemToTokens) {
  const map = new Map();
  for (const item of arr) {
    const tokens = itemToTokens(item);
    for (const token of tokens) {
      let currentMap = map;
      for (let i = 0; i < token.length; i++) {
        const char = token.charAt(i);
        let nextMap = currentMap.get(char);
        if (!nextMap) {
          nextMap = new Map();
          currentMap.set(char, nextMap);
        }
        currentMap = nextMap;
      }
      let valuesAtCoda = currentMap.get(CODA_MARKER);
      if (!valuesAtCoda) {
        valuesAtCoda = [];
        currentMap.set(CODA_MARKER, valuesAtCoda);
      }
      valuesAtCoda.push(item);
    }
  }

  const search = (query, exact) => {
    let currentMap = map;
    for (let i = 0; i < query.length; i++) {
      const char = query.charAt(i);
      const nextMap = currentMap.get(char);
      if (nextMap) {
        currentMap = nextMap;
      } else {
        return []
      }
    }

    if (exact) {
      const results = currentMap.get(CODA_MARKER);
      return results || []
    }

    const results = [];
    // traverse
    const queue = [currentMap];
    while (queue.length) {
      const currentMap = queue.shift();
      const entriesSortedByKey = [...currentMap.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1);
      for (const [key, value] of entriesSortedByKey) {
        if (key === CODA_MARKER) { // CODA_MARKER always comes first; it's the empty string
          results.push(...value);
        } else {
          queue.push(value);
        }
      }
    }
    return results
  };

  return search
}

const requiredKeys$1 = [
  'name',
  'url'
];

function assertCustomEmojis (customEmojis) {
  const isArray = customEmojis && Array.isArray(customEmojis);
  const firstItemIsFaulty = isArray &&
    customEmojis.length &&
    (!customEmojis[0] || requiredKeys$1.some(key => !(key in customEmojis[0])));
  if (!isArray || firstItemIsFaulty) {
    throw new Error('Custom emojis are in the wrong format')
  }
}

function customEmojiIndex (customEmojis) {
  assertCustomEmojis(customEmojis);

  const sortByName = (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;

  //
  // all()
  //
  const all = customEmojis.sort(sortByName);

  //
  // search()
  //
  const emojiToTokens = emoji => (
    [...new Set((emoji.shortcodes || []).map(shortcode => extractTokens(shortcode)).flat())]
  );
  const searchTrie = trie(customEmojis, emojiToTokens);
  const searchByExactMatch = _ => searchTrie(_, true);
  const searchByPrefix = _ => searchTrie(_, false);

  // Search by query for custom emoji. Similar to how we do this in IDB, the last token
  // is treated as a prefix search, but every other one is treated as an exact match.
  // Then we AND the results together
  const search = query => {
    const tokens = extractTokens(query);
    const intermediateResults = tokens.map((token, i) => (
      (i < tokens.length - 1 ? searchByExactMatch : searchByPrefix)(token)
    ));
    return findCommonMembers(intermediateResults, _ => _.name).sort(sortByName)
  };

  //
  // byShortcode, byName
  //
  const shortcodeToEmoji = new Map();
  const nameToEmoji = new Map();
  for (const customEmoji of customEmojis) {
    nameToEmoji.set(customEmoji.name.toLowerCase(), customEmoji);
    for (const shortcode of (customEmoji.shortcodes || [])) {
      shortcodeToEmoji.set(shortcode.toLowerCase(), customEmoji);
    }
  }

  const byShortcode = shortcode => shortcodeToEmoji.get(shortcode.toLowerCase());
  const byName = name => nameToEmoji.get(name.toLowerCase());

  return {
    all,
    search,
    byShortcode,
    byName
  }
}

const isFirefoxContentScript = typeof wrappedJSObject !== 'undefined';

// remove some internal implementation details, i.e. the "tokens" array on the emoji object
// essentially, convert the emoji from the version stored in IDB to the version used in-memory
function cleanEmoji (emoji) {
  if (!emoji) {
    return emoji
  }
  // if inside a Firefox content script, need to clone the emoji object to prevent Firefox from complaining about
  // cross-origin object. See: https://github.com/nolanlawson/emoji-picker-element/issues/356
  /* istanbul ignore if */
  if (isFirefoxContentScript) {
    emoji = structuredClone(emoji);
  }
  delete emoji.tokens;
  if (emoji.skinTones) {
    const len = emoji.skinTones.length;
    emoji.skins = Array(len);
    for (let i = 0; i < len; i++) {
      emoji.skins[i] = {
        tone: emoji.skinTones[i],
        unicode: emoji.skinUnicodes[i],
        version: emoji.skinVersions[i]
      };
    }
    delete emoji.skinTones;
    delete emoji.skinUnicodes;
    delete emoji.skinVersions;
  }
  return emoji
}

function warnETag (eTag) {
  if (!eTag) {
    console.warn('emoji-picker-element is more efficient if the dataSource server exposes an ETag header.');
  }
}

const requiredKeys = [
  'annotation',
  'emoji',
  'group',
  'order',
  'tags',
  'version'
];

function assertEmojiData (emojiData) {
  if (!emojiData ||
    !Array.isArray(emojiData) ||
    !emojiData[0] ||
    (typeof emojiData[0] !== 'object') ||
    requiredKeys.some(key => (!(key in emojiData[0])))) {
    throw new Error('Emoji data is in the wrong format')
  }
}

function assertStatus (response, dataSource) {
  if (Math.floor(response.status / 100) !== 2) {
    throw new Error('Failed to fetch: ' + dataSource + ':  ' + response.status)
  }
}

async function getETag (dataSource) {
  const response = await fetch(dataSource, { method: 'HEAD' });
  assertStatus(response, dataSource);
  const eTag = response.headers.get('etag');
  warnETag(eTag);
  return eTag
}

async function getETagAndData (dataSource) {
  const response = await fetch(dataSource);
  assertStatus(response, dataSource);
  const eTag = response.headers.get('etag');
  warnETag(eTag);
  const emojiData = await response.json();
  assertEmojiData(emojiData);
  return [eTag, emojiData]
}

// TODO: including these in blob-util.ts causes typedoc to generate docs for them,
// even with --excludePrivate ¯\_(ツ)_/¯
/** @private */
/**
 * Convert an `ArrayBuffer` to a binary string.
 *
 * Example:
 *
 * ```js
 * var myString = blobUtil.arrayBufferToBinaryString(arrayBuff)
 * ```
 *
 * @param buffer - array buffer
 * @returns binary string
 */
function arrayBufferToBinaryString(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var length = bytes.byteLength;
    var i = -1;
    while (++i < length) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
/**
 * Convert a binary string to an `ArrayBuffer`.
 *
 * ```js
 * var myBuffer = blobUtil.binaryStringToArrayBuffer(binaryString)
 * ```
 *
 * @param binary - binary string
 * @returns array buffer
 */
function binaryStringToArrayBuffer(binary) {
    var length = binary.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    var i = -1;
    while (++i < length) {
        arr[i] = binary.charCodeAt(i);
    }
    return buf;
}

// generate a checksum based on the stringified JSON
async function jsonChecksum (object) {
  const inString = JSON.stringify(object);
  const inBuffer = binaryStringToArrayBuffer(inString);
  // this does not need to be cryptographically secure, SHA-1 is fine
  const outBuffer = await crypto.subtle.digest('SHA-1', inBuffer);
  const outBinString = arrayBufferToBinaryString(outBuffer);
  const res = btoa(outBinString);
  return res
}

async function checkForUpdates (db, dataSource) {
  // just do a simple HEAD request first to see if the eTags match
  let emojiData;
  let eTag = await getETag(dataSource);
  if (!eTag) { // work around lack of ETag/Access-Control-Expose-Headers
    const eTagAndData = await getETagAndData(dataSource);
    eTag = eTagAndData[0];
    emojiData = eTagAndData[1];
    if (!eTag) {
      eTag = await jsonChecksum(emojiData);
    }
  }
  if (await hasData(db, dataSource, eTag)) ; else {
    if (!emojiData) {
      const eTagAndData = await getETagAndData(dataSource);
      emojiData = eTagAndData[1];
    }
    await loadData(db, emojiData, dataSource, eTag);
  }
}

async function loadDataForFirstTime (db, dataSource) {
  let [eTag, emojiData] = await getETagAndData(dataSource);
  if (!eTag) {
    // Handle lack of support for ETag or Access-Control-Expose-Headers
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers#Browser_compatibility
    eTag = await jsonChecksum(emojiData);
  }

  await loadData(db, emojiData, dataSource, eTag);
}

class Database {
  constructor ({ dataSource = DEFAULT_DATA_SOURCE, locale = DEFAULT_LOCALE, customEmoji = [] } = {}) {
    this.dataSource = dataSource;
    this.locale = locale;
    this._dbName = `emoji-picker-element-${this.locale}`;
    this._db = undefined;
    this._lazyUpdate = undefined;
    this._custom = customEmojiIndex(customEmoji);

    this._clear = this._clear.bind(this);
    this._ready = this._init();
  }

  async _init () {
    const db = this._db = await openDatabase(this._dbName);

    addOnCloseListener(this._dbName, this._clear);
    const dataSource = this.dataSource;
    const empty = await isEmpty(db);

    if (empty) {
      await loadDataForFirstTime(db, dataSource);
    } else { // offline-first - do an update asynchronously
      this._lazyUpdate = checkForUpdates(db, dataSource);
    }
  }

  async ready () {
    const checkReady = async () => {
      if (!this._ready) {
        this._ready = this._init();
      }
      return this._ready
    };
    await checkReady();
    // There's a possibility of a race condition where the element gets added, removed, and then added again
    // with a particular timing, which would set the _db to undefined.
    // We *could* do a while loop here, but that seems excessive and could lead to an infinite loop.
    if (!this._db) {
      await checkReady();
    }
  }

  async getEmojiByGroup (group) {
    assertNumber(group);
    await this.ready();
    return uniqEmoji(await getEmojiByGroup(this._db, group)).map(cleanEmoji)
  }

  async getEmojiBySearchQuery (query) {
    assertNonEmptyString(query);
    await this.ready();
    const customs = this._custom.search(query);
    const natives = uniqEmoji(await getEmojiBySearchQuery(this._db, query)).map(cleanEmoji);
    return [
      ...customs,
      ...natives
    ]
  }

  async getEmojiByShortcode (shortcode) {
    assertNonEmptyString(shortcode);
    await this.ready();
    const custom = this._custom.byShortcode(shortcode);
    if (custom) {
      return custom
    }
    return cleanEmoji(await getEmojiByShortcode(this._db, shortcode))
  }

  async getEmojiByUnicodeOrName (unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    const custom = this._custom.byName(unicodeOrName);
    if (custom) {
      return custom
    }
    return cleanEmoji(await getEmojiByUnicode(this._db, unicodeOrName))
  }

  async getPreferredSkinTone () {
    await this.ready();
    return (await get(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE)) || 0
  }

  async setPreferredSkinTone (skinTone) {
    assertNumber(skinTone);
    await this.ready();
    return set(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE, skinTone)
  }

  async incrementFavoriteEmojiCount (unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    return incrementFavoriteEmojiCount(this._db, unicodeOrName)
  }

  async getTopFavoriteEmoji (limit) {
    assertNumber(limit);
    await this.ready();
    return (await getTopFavoriteEmoji(this._db, this._custom, limit)).map(cleanEmoji)
  }

  set customEmoji (customEmojis) {
    this._custom = customEmojiIndex(customEmojis);
  }

  get customEmoji () {
    return this._custom.all
  }

  async _shutdown () {
    await this.ready(); // reopen if we've already been closed/deleted
    try {
      await this._lazyUpdate; // allow any lazy updates to process before closing/deleting
    } catch (err) { /* ignore network errors (offline-first) */ }
  }

  // clear references to IDB, e.g. during a close event
  _clear () {
    // We don't need to call removeEventListener or remove the manual "close" listeners.
    // The memory leak tests prove this is unnecessary. It's because:
    // 1) IDBDatabases that can no longer fire "close" automatically have listeners GCed
    // 2) we clear the manual close listeners in databaseLifecycle.js.
    this._db = this._ready = this._lazyUpdate = undefined;
  }

  async close () {
    await this._shutdown();
    await closeDatabase(this._dbName);
  }

  async delete () {
    await this._shutdown();
    await deleteDatabase(this._dbName);
  }
}




/***/ }),

/***/ "./node_modules/emoji-picker-element/index.js":
/*!****************************************************!*\
  !*** ./node_modules/emoji-picker-element/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Database: () => (/* reexport safe */ _database_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Picker: () => (/* reexport safe */ _picker_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker.js */ "./node_modules/emoji-picker-element/picker.js");
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database.js */ "./node_modules/emoji-picker-element/database.js");





/***/ }),

/***/ "./node_modules/emoji-picker-element/picker.js":
/*!*****************************************************!*\
  !*** ./node_modules/emoji-picker-element/picker.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PickerElement)
/* harmony export */ });
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.js */ "./node_modules/emoji-picker-element/database.js");


// via https://unpkg.com/browse/emojibase-data@6.0.0/meta/groups.json
const allGroups = [
  [-1, '✨', 'custom'],
  [0, '😀', 'smileys-emotion'],
  [1, '👋', 'people-body'],
  [3, '🐱', 'animals-nature'],
  [4, '🍎', 'food-drink'],
  [5, '🏠️', 'travel-places'],
  [6, '⚽', 'activities'],
  [7, '📝', 'objects'],
  [8, '⛔️', 'symbols'],
  [9, '🏁', 'flags']
].map(([id, emoji, name]) => ({ id, emoji, name }));

const groups = allGroups.slice(1);

const MIN_SEARCH_TEXT_LENGTH = 2;
const NUM_SKIN_TONES = 6;

/* istanbul ignore next */
const rIC = typeof requestIdleCallback === 'function' ? requestIdleCallback : setTimeout;

// check for ZWJ (zero width joiner) character
function hasZwj (emoji) {
  return emoji.unicode.includes('\u200d')
}

// Find one good representative emoji from each version to test by checking its color.
// Ideally it should have color in the center. For some inspiration, see:
// https://about.gitlab.com/blog/2018/05/30/journey-in-native-unicode-emoji/
//
// Note that for certain versions (12.1, 13.1), there is no point in testing them explicitly, because
// all the emoji from this version are compound-emoji from previous versions. So they would pass a color
// test, even in browsers that display them as double emoji. (E.g. "face in clouds" might render as
// "face without mouth" plus "fog".) These emoji can only be filtered using the width test,
// which happens in checkZwjSupport.js.
const versionsAndTestEmoji = {
  '🫨': 15.1, // shaking head, technically from v15 but see note above
  '🫠': 14,
  '🥲': 13.1, // smiling face with tear, technically from v13 but see note above
  '🥻': 12.1, // sari, technically from v12 but see note above
  '🥰': 11,
  '🤩': 5,
  '👱‍♀️': 4,
  '🤣': 3,
  '👁️‍🗨️': 2,
  '😀': 1,
  '😐️': 0.7,
  '😃': 0.6
};

const TIMEOUT_BEFORE_LOADING_MESSAGE = 1000; // 1 second
const DEFAULT_SKIN_TONE_EMOJI = '🖐️';
const DEFAULT_NUM_COLUMNS = 8;

// Based on https://fivethirtyeight.com/features/the-100-most-used-emojis/ and
// https://blog.emojipedia.org/facebook-reveals-most-and-least-used-emojis/ with
// a bit of my own curation. (E.g. avoid the "OK" gesture because of connotations:
// https://emojipedia.org/ok-hand/)
const MOST_COMMONLY_USED_EMOJI = [
  '😊',
  '😒',
  '❤️',
  '👍️',
  '😍',
  '😂',
  '😭',
  '☺️',
  '😔',
  '😩',
  '😏',
  '💕',
  '🙌',
  '😘'
];

// It's important to list Twemoji Mozilla before everything else, because Mozilla bundles their
// own font on some platforms (notably Windows and Linux as of this writing). Typically, Mozilla
// updates faster than the underlying OS, and we don't want to render older emoji in one font and
// newer emoji in another font:
// https://github.com/nolanlawson/emoji-picker-element/pull/268#issuecomment-1073347283
const FONT_FAMILY = '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",' +
  '"Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif';

/* istanbul ignore next */
const DEFAULT_CATEGORY_SORTING = (a, b) => a < b ? -1 : a > b ? 1 : 0;

// Test if an emoji is supported by rendering it to canvas and checking that the color is not black
// See https://about.gitlab.com/blog/2018/05/30/journey-in-native-unicode-emoji/
// and https://www.npmjs.com/package/if-emoji for inspiration
// This implementation is largely borrowed from if-emoji, adding the font-family


const getTextFeature = (text, color) => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;

  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = `100px ${FONT_FAMILY}`;
  ctx.fillStyle = color;
  ctx.scale(0.01, 0.01);
  ctx.fillText(text, 0, 0);

  return ctx.getImageData(0, 0, 1, 1).data
};

const compareFeatures = (feature1, feature2) => {
  const feature1Str = [...feature1].join(',');
  const feature2Str = [...feature2].join(',');
  // This is RGBA, so for 0,0,0, we are checking that the first RGB is not all zeroes.
  // Most of the time when unsupported this is 0,0,0,0, but on Chrome on Mac it is
  // 0,0,0,61 - there is a transparency here.
  return feature1Str === feature2Str && !feature1Str.startsWith('0,0,0,')
};

function testColorEmojiSupported (text) {
  // Render white and black and then compare them to each other and ensure they're the same
  // color, and neither one is black. This shows that the emoji was rendered in color.
  const feature1 = getTextFeature(text, '#000');
  const feature2 = getTextFeature(text, '#fff');
  return feature1 && feature2 && compareFeatures(feature1, feature2)
}

// rather than check every emoji ever, which would be expensive, just check some representatives from the
// different emoji releases to determine what the font supports

function determineEmojiSupportLevel () {
  const entries = Object.entries(versionsAndTestEmoji);
  try {
    // start with latest emoji and work backwards
    for (const [emoji, version] of entries) {
      if (testColorEmojiSupported(emoji)) {
        return version
      }
    }
  } catch (e) { // canvas error
  } finally {
  }
  // In case of an error, be generous and just assume all emoji are supported (e.g. for canvas errors
  // due to anti-fingerprinting add-ons). Better to show some gray boxes than nothing at all.
  return entries[0][1] // first one in the list is the most recent version
}

// Check which emojis we know for sure aren't supported, based on Unicode version level
let promise;
const detectEmojiSupportLevel = () => {
  if (!promise) {
    // Delay so it can run while the IDB database is being created by the browser (on another thread).
    // This helps especially with first load – we want to start pre-populating the database on the main thread,
    // and then wait for IDB to commit everything, and while waiting we run this check.
    promise = new Promise(resolve => (
      rIC(() => (
        resolve(determineEmojiSupportLevel()) // delay so ideally this can run while IDB is first populating
      ))
    ));
  }
  return promise
};
// determine which emojis containing ZWJ (zero width joiner) characters
// are supported (rendered as one glyph) rather than unsupported (rendered as two or more glyphs)
const supportedZwjEmojis = new Map();

const VARIATION_SELECTOR = '\ufe0f';
const SKINTONE_MODIFIER = '\ud83c';
const ZWJ = '\u200d';
const LIGHT_SKIN_TONE = 0x1F3FB;
const LIGHT_SKIN_TONE_MODIFIER = 0xdffb;

// TODO: this is a naive implementation, we can improve it later
// It's only used for the skintone picker, so as long as people don't customize with
// really exotic emoji then it should work fine
function applySkinTone (str, skinTone) {
  if (skinTone === 0) {
    return str
  }
  const zwjIndex = str.indexOf(ZWJ);
  if (zwjIndex !== -1) {
    return str.substring(0, zwjIndex) +
      String.fromCodePoint(LIGHT_SKIN_TONE + skinTone - 1) +
      str.substring(zwjIndex)
  }
  if (str.endsWith(VARIATION_SELECTOR)) {
    str = str.substring(0, str.length - 1);
  }
  return str + SKINTONE_MODIFIER + String.fromCodePoint(LIGHT_SKIN_TONE_MODIFIER + skinTone - 1)
}

function halt (event) {
  event.preventDefault();
  event.stopPropagation();
}

// Implementation left/right or up/down navigation, circling back when you
// reach the start/end of the list
function incrementOrDecrement (decrement, val, arr) {
  val += (decrement ? -1 : 1);
  if (val < 0) {
    val = arr.length - 1;
  } else if (val >= arr.length) {
    val = 0;
  }
  return val
}

// like lodash's uniqBy but much smaller
function uniqBy (arr, func) {
  const set = new Set();
  const res = [];
  for (const item of arr) {
    const key = func(item);
    if (!set.has(key)) {
      set.add(key);
      res.push(item);
    }
  }
  return res
}

// We don't need all the data on every emoji, and there are specific things we need
// for the UI, so build a "view model" from the emoji object we got from the database

function summarizeEmojisForUI (emojis, emojiSupportLevel) {
  const toSimpleSkinsMap = skins => {
    const res = {};
    for (const skin of skins) {
      // ignore arrays like [1, 2] with multiple skin tones
      // also ignore variants that are in an unsupported emoji version
      // (these do exist - variants from a different version than their base emoji)
      if (typeof skin.tone === 'number' && skin.version <= emojiSupportLevel) {
        res[skin.tone] = skin.unicode;
      }
    }
    return res
  };

  return emojis.map(({ unicode, skins, shortcodes, url, name, category, annotation }) => ({
    unicode,
    name,
    shortcodes,
    url,
    category,
    annotation,
    id: unicode || name,
    skins: skins && toSimpleSkinsMap(skins)
  }))
}

// import rAF from one place so that the bundle size is a bit smaller
const rAF = requestAnimationFrame;

// Svelte action to calculate the width of an element and auto-update
// using ResizeObserver. If ResizeObserver is unsupported, we just use rAF once
// and don't bother to update.


let resizeObserverSupported = typeof ResizeObserver === 'function';

function calculateWidth (node, abortSignal, onUpdate) {
  let resizeObserver;
  if (resizeObserverSupported) {
    resizeObserver = new ResizeObserver(entries => (
      onUpdate(entries[0].contentRect.width)
    ));
    resizeObserver.observe(node);
  } else { // just set the width once, don't bother trying to track it
    rAF(() => (
      onUpdate(node.getBoundingClientRect().width)
    ));
  }

  // cleanup function (called on destroy)
  abortSignal.addEventListener('abort', () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
  });
}

// get the width of the text inside of a DOM node, via https://stackoverflow.com/a/59525891/680742
function calculateTextWidth (node) {
  /* istanbul ignore else */
  {
    const range = document.createRange();
    range.selectNode(node.firstChild);
    return range.getBoundingClientRect().width
  }
}

let baselineEmojiWidth;

function checkZwjSupport (zwjEmojisToCheck, baselineEmoji, emojiToDomNode) {
  for (const emoji of zwjEmojisToCheck) {
    const domNode = emojiToDomNode(emoji);
    const emojiWidth = calculateTextWidth(domNode);
    if (typeof baselineEmojiWidth === 'undefined') { // calculate the baseline emoji width only once
      baselineEmojiWidth = calculateTextWidth(baselineEmoji);
    }
    // On Windows, some supported emoji are ~50% bigger than the baseline emoji, but what we really want to guard
    // against are the ones that are 2x the size, because those are truly broken (person with red hair = person with
    // floating red wig, black cat = cat with black square, polar bear = bear with snowflake, etc.)
    // So here we set the threshold at 1.8 times the size of the baseline emoji.
    const supported = emojiWidth / 1.8 < baselineEmojiWidth;
    supportedZwjEmojis.set(emoji.unicode, supported);
  }
}

// like lodash's uniq

function uniq (arr) {
  return uniqBy(arr, _ => _)
}

// Note we put this in its own function outside Picker.js to avoid Svelte doing an invalidation on the "setter" here.
// At best the invalidation is useless, at worst it can cause infinite loops:
// https://github.com/nolanlawson/emoji-picker-element/pull/180
// https://github.com/sveltejs/svelte/issues/6521
// Also note tabpanelElement can be null if the element is disconnected immediately after connected
function resetScrollTopIfPossible (element) {
  /* istanbul ignore else */
  if (element) { // Makes me nervous not to have this `if` guard
    element.scrollTop = 0;
  }
}

function getFromMap (cache, key, func) {
  let cached = cache.get(key);
  if (!cached) {
    cached = func();
    cache.set(key, cached);
  }
  return cached
}

function toString (value) {
  return '' + value
}

function parseTemplate (htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template
}

const parseCache = new WeakMap();
const domInstancesCache = new WeakMap();
const unkeyedSymbol = Symbol('un-keyed');

// Not supported in Safari <=13
const hasReplaceChildren = 'replaceChildren' in Element.prototype;
function replaceChildren (parentNode, newChildren) {
  /* istanbul ignore else */
  if (hasReplaceChildren) {
    parentNode.replaceChildren(...newChildren);
  } else { // minimal polyfill for Element.prototype.replaceChildren
    parentNode.innerHTML = '';
    parentNode.append(...newChildren);
  }
}

function doChildrenNeedRerender (parentNode, newChildren) {
  let oldChild = parentNode.firstChild;
  let oldChildrenCount = 0;
  // iterate using firstChild/nextSibling because browsers use a linked list under the hood
  while (oldChild) {
    const newChild = newChildren[oldChildrenCount];
    // check if the old child and new child are the same
    if (newChild !== oldChild) {
      return true
    }
    oldChild = oldChild.nextSibling;
    oldChildrenCount++;
  }
  // if new children length is different from old, we must re-render
  return oldChildrenCount !== newChildren.length
}

function patchChildren (newChildren, instanceBinding) {
  const { targetNode } = instanceBinding;
  let { targetParentNode } = instanceBinding;

  let needsRerender = false;

  if (targetParentNode) { // already rendered once
    needsRerender = doChildrenNeedRerender(targetParentNode, newChildren);
  } else { // first render of list
    needsRerender = true;
    instanceBinding.targetNode = undefined; // placeholder comment not needed anymore, free memory
    instanceBinding.targetParentNode = targetParentNode = targetNode.parentNode;
  }
  // avoid re-rendering list if the dom nodes are exactly the same before and after
  if (needsRerender) {
    replaceChildren(targetParentNode, newChildren);
  }
}

function patch (expressions, instanceBindings) {
  for (const instanceBinding of instanceBindings) {
    const {
      targetNode,
      currentExpression,
      binding: {
        expressionIndex,
        attributeName,
        attributeValuePre,
        attributeValuePost
      }
    } = instanceBinding;

    const expression = expressions[expressionIndex];

    if (currentExpression === expression) {
      // no need to update, same as before
      continue
    }

    instanceBinding.currentExpression = expression;

    if (attributeName) { // attribute replacement
      targetNode.setAttribute(attributeName, attributeValuePre + toString(expression) + attributeValuePost);
    } else { // text node / child element / children replacement
      let newNode;
      if (Array.isArray(expression)) { // array of DOM elements produced by tag template literals
        patchChildren(expression, instanceBinding);
      } else if (expression instanceof Element) { // html tag template returning a DOM element
        newNode = expression;
        targetNode.replaceWith(newNode);
      } else { // primitive - string, number, etc
        if (targetNode.nodeType === Node.TEXT_NODE) { // already transformed into a text node
          // nodeValue is faster than textContent supposedly https://www.youtube.com/watch?v=LY6y3HbDVmg
          targetNode.nodeValue = toString(expression);
        } else { // replace comment or whatever was there before with a text node
          newNode = document.createTextNode(toString(expression));
          targetNode.replaceWith(newNode);
        }
      }
      if (newNode) {
        instanceBinding.targetNode = newNode;
      }
    }
  }
}

function parse (tokens) {
  let htmlString = '';

  let withinTag = false;
  let withinAttribute = false;
  let elementIndexCounter = -1; // depth-first traversal order

  const elementsToBindings = new Map();
  const elementIndexes = [];

  for (let i = 0, len = tokens.length; i < len; i++) {
    const token = tokens[i];
    htmlString += token;

    if (i === len - 1) {
      break // no need to process characters - no more expressions to be found
    }

    for (let j = 0; j < token.length; j++) {
      const char = token.charAt(j);
      switch (char) {
        case '<': {
          const nextChar = token.charAt(j + 1);
          if (nextChar === '/') { // closing tag
            // leaving an element
            elementIndexes.pop();
          } else { // not a closing tag
            withinTag = true;
            elementIndexes.push(++elementIndexCounter);
          }
          break
        }
        case '>': {
          withinTag = false;
          withinAttribute = false;
          break
        }
        case '=': {
          withinAttribute = true;
          break
        }
      }
    }

    const elementIndex = elementIndexes[elementIndexes.length - 1];
    const bindings = getFromMap(elementsToBindings, elementIndex, () => []);

    let attributeName;
    let attributeValuePre;
    let attributeValuePost;
    if (withinAttribute) {
      // I never use single-quotes for attribute values in HTML, so just support double-quotes or no-quotes
      const match = /(\S+)="?([^"=]*)$/.exec(token);
      attributeName = match[1];
      attributeValuePre = match[2];
      attributeValuePost = /^[^">]*/.exec(tokens[i + 1])[0];
    }

    const binding = {
      attributeName,
      attributeValuePre,
      attributeValuePost,
      expressionIndex: i
    };

    bindings.push(binding);

    // add a placeholder comment that we can find later
    htmlString += (!withinTag && !withinAttribute) ? `<!--${bindings.length - 1}-->` : '';
  }

  const template = parseTemplate(htmlString);

  return {
    template,
    elementsToBindings
  }
}

function findPlaceholderComment (element, bindingId) {
  // If we had a lot of placeholder comments to find, it would make more sense to build up a map once
  // rather than search the DOM every time. But it turns out that we always only have one child,
  // and it's the comment node, so searching every time is actually faster.
  let childNode = element.firstChild;
  while (childNode) {
    // Note that minify-html-literals has already removed all non-framework comments
    // So we just need to look for comments that have exactly the bindingId as its text content
    if (childNode.nodeType === Node.COMMENT_NODE && childNode.nodeValue === toString(bindingId)) {
      return childNode
    }
    childNode = childNode.nextSibling;
  }
}

function traverseAndSetupBindings (dom, elementsToBindings) {
  const instanceBindings = [];
  // traverse dom
  const treeWalker = document.createTreeWalker(dom, NodeFilter.SHOW_ELEMENT);

  let element = dom;
  let elementIndex = -1;
  do {
    const bindings = elementsToBindings.get(++elementIndex);
    if (bindings) {
      for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];

        const targetNode = binding.attributeName
          ? element // attribute binding, just use the element itself
          : findPlaceholderComment(element, i); // not an attribute binding, so has a placeholder comment

        const instanceBinding = {
          binding,
          targetNode,
          targetParentNode: undefined,
          currentExpression: undefined
        };

        instanceBindings.push(instanceBinding);
      }
    }
  } while ((element = treeWalker.nextNode()))

  return instanceBindings
}

function parseHtml (tokens) {
  // All templates and bound expressions are unique per tokens array
  const { template, elementsToBindings } = getFromMap(parseCache, tokens, () => parse(tokens));

  // When we parseHtml, we always return a fresh DOM instance ready to be updated
  const dom = template.cloneNode(true).content.firstElementChild;
  const instanceBindings = traverseAndSetupBindings(dom, elementsToBindings);

  return function updateDomInstance (expressions) {
    patch(expressions, instanceBindings);
    return dom
  }
}

function createFramework (state) {
  const domInstances = getFromMap(domInstancesCache, state, () => new Map());
  let domInstanceCacheKey = unkeyedSymbol;

  function html (tokens, ...expressions) {
    // Each unique lexical usage of map() is considered unique due to the html`` tagged template call it makes,
    // which has lexically unique tokens. The unkeyed symbol is just used for html`` usage outside of a map().
    const domInstancesForTokens = getFromMap(domInstances, tokens, () => new Map());
    const updateDomInstance = getFromMap(domInstancesForTokens, domInstanceCacheKey, () => parseHtml(tokens));

    return updateDomInstance(expressions) // update with expressions
  }

  function map (array, callback, keyFunction) {
    return array.map((item, index) => {
      const originalCacheKey = domInstanceCacheKey;
      domInstanceCacheKey = keyFunction(item);
      try {
        return callback(item, index)
      } finally {
        domInstanceCacheKey = originalCacheKey;
      }
    })
  }

  return { map, html }
}

function render (container, state, helpers, events, actions, refs, abortSignal, firstRender) {
  const { labelWithSkin, titleForEmoji, unicodeWithSkin } = helpers;
  const { html, map } = createFramework(state);

  function emojiList (emojis, searchMode, prefix) {
    return map(emojis, (emoji, i) => {
      return html`<button role="${searchMode ? 'option' : 'menuitem'}" aria-selected="${state.searchMode ? i === state.activeSearchItem : ''}" aria-label="${labelWithSkin(emoji, state.currentSkinTone)}" title="${titleForEmoji(emoji)}" class="emoji ${searchMode && i === state.activeSearchItem ? 'active' : ''}" id="${`${prefix}-${emoji.id}`}">${
        emoji.unicode
          ? unicodeWithSkin(emoji, state.currentSkinTone)
          : html`<img class="custom-emoji" src="${emoji.url}" alt="" loading="lazy">`
      }</button>`
      // It's important for the cache key to be unique based on the prefix, because the framework caches based on the
      // unique tokens + cache key, and the same emoji may be used in the tab as well as in the fav bar
    }, emoji => `${prefix}-${emoji.id}`)
  }

  const section = () => {
    return html`<section data-ref="rootElement" class="picker" aria-label="${state.i18n.regionLabel}" style="${state.pickerStyle}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${state.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(state.searchMode && state.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${state.activeSearchItemId ? `emo-${state.activeSearchItemId}` : ''}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${state.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${state.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${state.skinTonePickerExpandedAfterAnimation ? 'expanded' : ''}"><button id="skintone-button" class="emoji ${state.skinTonePickerExpanded ? 'hide-focus' : ''}" aria-label="${state.skinToneButtonLabel}" title="${state.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${state.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${state.skinToneButtonText}</button></div><span id="skintone-description" class="sr-only">${state.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${state.skinTonePickerExpanded ? '' : 'hidden no-animate'}" style="transform:translateY(${state.skinTonePickerExpanded ? 0 : 'calc(-1 * var(--num-skintones) * var(--total-emoji-size))'})" role="listbox" aria-label="${state.i18n.skinTonesLabel}" aria-activedescendant="skintone-${state.activeSkinTone}" aria-hidden="${!state.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${
    map(state.skinTones, (skinTone, i) => {
    return html`<div id="skintone-${i}" class="emoji ${i === state.activeSkinTone ? 'active' : ''}" aria-selected="${i === state.activeSkinTone}" role="option" title="${state.i18n.skinTones[i]}" aria-label="${state.i18n.skinTones[i]}">${skinTone}</div>`
    }, skinTone => skinTone)
        }</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${state.groups.length},1fr)" aria-label="${state.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${
            map(state.groups, (group) => {
              return html`<button role="tab" class="nav-button" aria-controls="tab-${group.id}" aria-label="${state.i18n.categories[group.name]}" aria-selected="${!state.searchMode && state.currentGroup.id === group.id}" title="${state.i18n.categories[group.name]}" data-group-id="${group.id}"><div class="nav-emoji emoji">${group.emoji}</div></button>`
            }, group => group.id)
          }</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(/* istanbul ignore next */ (state.isRtl ? -1 : 1)) * state.currentGroupIndex * 100}%)"></div></div><div class="message ${state.message ? '' : 'gone'}" role="alert" aria-live="polite">${state.message}</div><div data-ref="tabpanelElement" class="tabpanel ${(!state.databaseLoaded || state.message) ? 'gone' : ''}" role="${state.searchMode ? 'region' : 'tabpanel'}" aria-label="${state.searchMode ? state.i18n.searchResultsLabel : state.i18n.categories[state.currentGroup.name]}" id="${state.searchMode ? '' : `tab-${state.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${
              map(state.currentEmojisWithCategories, (emojiWithCategory, i) => {
                return html`<div><div id="menu-label-${i}" class="category ${state.currentEmojisWithCategories.length === 1 && state.currentEmojisWithCategories[0].category === '' ? 'gone' : ''}" aria-hidden="true">${
                  state.searchMode
                    ? state.i18n.searchResultsLabel
                    : (
                      emojiWithCategory.category
                        ? emojiWithCategory.category
                        : (
                          state.currentEmojisWithCategories.length > 1
                            ? state.i18n.categories.custom
                            : state.i18n.categories[state.currentGroup.name]
                        )
                    )
                }</div><div class="emoji-menu" role="${state.searchMode ? 'listbox' : 'menu'}" aria-labelledby="menu-label-${i}" id="${state.searchMode ? 'search-results' : ''}">${
              emojiList(emojiWithCategory.emojis, state.searchMode, /* prefix */ 'emo')
            }</div></div>`
              }, emojiWithCategory => emojiWithCategory.category)
            }</div></div><div class="favorites emoji-menu ${state.message ? 'gone' : ''}" role="menu" aria-label="${state.i18n.favoritesLabel}" style="padding-inline-end:${`${state.scrollbarWidth}px`}" data-on-click="onEmojiClick">${
            emojiList(state.currentFavorites, /* searchMode */ false, /* prefix */ 'fav')
          }</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`
  };

  const rootDom = section();

  if (firstRender) { // not a re-render
    container.appendChild(rootDom);

    // we only bind events/refs/actions once - there is no need to find them again given this component structure

    // helper for traversing the dom, finding elements by an attribute, and getting the attribute value
    const forElementWithAttribute = (attributeName, callback) => {
      for (const element of container.querySelectorAll(`[${attributeName}]`)) {
        callback(element, element.getAttribute(attributeName));
      }
    };

    // bind events
    for (const eventName of ['click', 'focusout', 'input', 'keydown', 'keyup']) {
      forElementWithAttribute(`data-on-${eventName}`, (element, listenerName) => {
        element.addEventListener(eventName, events[listenerName]);
      });
    }

    // find refs
    forElementWithAttribute('data-ref', (element, ref) => {
      refs[ref] = element;
    });

    // set up actions
    forElementWithAttribute('data-action', (element, action) => {
      actions[action](element);
    });

    // destroy/abort logic
    abortSignal.addEventListener('abort', () => {
      container.removeChild(rootDom);
    });
  }
}

/* istanbul ignore next */
const qM = typeof queueMicrotask === 'function' ? queueMicrotask : callback => Promise.resolve().then(callback);

function createState (abortSignal) {
  let destroyed = false;
  let currentObserver;

  const propsToObservers = new Map();
  const dirtyObservers = new Set();

  let queued;

  const flush = () => {
    if (destroyed) {
      return
    }
    const observersToRun = [...dirtyObservers];
    dirtyObservers.clear(); // clear before running to force any new updates to run in another tick of the loop
    try {
      for (const observer of observersToRun) {
        observer();
      }
    } finally {
      queued = false;
      if (dirtyObservers.size) { // new updates, queue another one
        queued = true;
        qM(flush);
      }
    }
  };

  const state = new Proxy({}, {
    get (target, prop) {
      // console.log('reactivity: get', prop)
      if (currentObserver) {
        let observers = propsToObservers.get(prop);
        if (!observers) {
          observers = new Set();
          propsToObservers.set(prop, observers);
        }
        observers.add(currentObserver);
      }
      return target[prop]
    },
    set (target, prop, newValue) {
      // console.log('reactivity: set', prop, newValue)
      target[prop] = newValue;
      const observers = propsToObservers.get(prop);
      if (observers) {
        for (const observer of observers) {
          dirtyObservers.add(observer);
        }
        if (!queued) {
          queued = true;
          qM(flush);
        }
      }
      return true
    }
  });

  const createEffect = (callback) => {
    const runnable = () => {
      const oldObserver = currentObserver;
      currentObserver = runnable;
      try {
        return callback()
      } finally {
        currentObserver = oldObserver;
      }
    };
    return runnable()
  };

  // destroy logic
  abortSignal.addEventListener('abort', () => {
    destroyed = true;
  });

  return {
    state,
    createEffect
  }
}

// Compare two arrays, with a function called on each item in the two arrays that returns true if the items are equal
function arraysAreEqualByFunction (left, right, areEqualFunc) {
  if (left.length !== right.length) {
    return false
  }
  for (let i = 0; i < left.length; i++) {
    if (!areEqualFunc(left[i], right[i])) {
      return false
    }
  }
  return true
}

/* eslint-disable prefer-const,no-labels,no-inner-declarations */

// constants
const EMPTY_ARRAY = [];

const { assign } = Object;

function createRoot (shadowRoot, props) {
  const refs = {};
  const abortController = new AbortController();
  const abortSignal = abortController.signal;
  const { state, createEffect } = createState(abortSignal);

  // initial state
  assign(state, {
    skinToneEmoji: undefined,
    i18n: undefined,
    database: undefined,
    customEmoji: undefined,
    customCategorySorting: undefined,
    emojiVersion: undefined
  });

  // public props
  assign(state, props);

  // private props
  assign(state, {
    initialLoad: true,
    currentEmojis: [],
    currentEmojisWithCategories: [],
    rawSearchText: '',
    searchText: '',
    searchMode: false,
    activeSearchItem: -1,
    message: undefined,
    skinTonePickerExpanded: false,
    skinTonePickerExpandedAfterAnimation: false,
    currentSkinTone: 0,
    activeSkinTone: 0,
    skinToneButtonText: undefined,
    pickerStyle: undefined,
    skinToneButtonLabel: '',
    skinTones: [],
    currentFavorites: [],
    defaultFavoriteEmojis: undefined,
    numColumns: DEFAULT_NUM_COLUMNS,
    isRtl: false,
    scrollbarWidth: 0,
    currentGroupIndex: 0,
    groups: groups,
    databaseLoaded: false,
    activeSearchItemId: undefined
  });

  //
  // Update the current group based on the currentGroupIndex
  //
  createEffect(() => {
    if (state.currentGroup !== state.groups[state.currentGroupIndex]) {
      state.currentGroup = state.groups[state.currentGroupIndex];
    }
  });

  //
  // Utils/helpers
  //

  const focus = id => {
    shadowRoot.getElementById(id).focus();
  };

  const emojiToDomNode = emoji => shadowRoot.getElementById(`emo-${emoji.id}`);

  // fire a custom event that crosses the shadow boundary
  const fireEvent = (name, detail) => {
    refs.rootElement.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    }));
  };

  //
  // Comparison utils
  //

  const compareEmojiArrays = (a, b) => a.id === b.id;

  const compareCurrentEmojisWithCategories = (a, b) => {
    const { category: aCategory, emojis: aEmojis } = a;
    const { category: bCategory, emojis: bEmojis } = b;

    if (aCategory !== bCategory) {
      return false
    }

    return arraysAreEqualByFunction(aEmojis, bEmojis, compareEmojiArrays)
  };

  //
  // Update utils to avoid excessive re-renders
  //

  // avoid excessive re-renders by checking the value before setting
  const updateCurrentEmojis = (newEmojis) => {
    if (!arraysAreEqualByFunction(state.currentEmojis, newEmojis, compareEmojiArrays)) {
      state.currentEmojis = newEmojis;
    }
  };

  // avoid excessive re-renders
  const updateSearchMode = (newSearchMode) => {
    if (state.searchMode !== newSearchMode) {
      state.searchMode = newSearchMode;
    }
  };

  // avoid excessive re-renders
  const updateCurrentEmojisWithCategories = (newEmojisWithCategories) => {
    if (!arraysAreEqualByFunction(state.currentEmojisWithCategories, newEmojisWithCategories, compareCurrentEmojisWithCategories)) {
      state.currentEmojisWithCategories = newEmojisWithCategories;
    }
  };

  // Helpers used by PickerTemplate

  const unicodeWithSkin = (emoji, currentSkinTone) => (
    (currentSkinTone && emoji.skins && emoji.skins[currentSkinTone]) || emoji.unicode
  );

  const labelWithSkin = (emoji, currentSkinTone) => (
    uniq([
      (emoji.name || unicodeWithSkin(emoji, currentSkinTone)),
      emoji.annotation,
      ...(emoji.shortcodes || EMPTY_ARRAY)
    ].filter(Boolean)).join(', ')
  );

  const titleForEmoji = (emoji) => (
    emoji.annotation || (emoji.shortcodes || EMPTY_ARRAY).join(', ')
  );

  const helpers = {
    labelWithSkin, titleForEmoji, unicodeWithSkin
  };
  const events = {
    onClickSkinToneButton,
    onEmojiClick,
    onNavClick,
    onNavKeydown,
    onSearchKeydown,
    onSkinToneOptionsClick,
    onSkinToneOptionsFocusOut,
    onSkinToneOptionsKeydown,
    onSkinToneOptionsKeyup,
    onSearchInput
  };
  const actions = {
    calculateEmojiGridStyle
  };

  let firstRender = true;
  createEffect(() => {
    render(shadowRoot, state, helpers, events, actions, refs, abortSignal, firstRender);
    firstRender = false;
  });

  //
  // Determine the emoji support level (in requestIdleCallback)
  //

  // mount logic
  if (!state.emojiVersion) {
    detectEmojiSupportLevel().then(level => {
      // Can't actually test emoji support in Jest/JSDom, emoji never render in color in Cairo
      /* istanbul ignore next */
      if (!level) {
        state.message = state.i18n.emojiUnsupportedMessage;
      }
    });
  }

  //
  // Set or update the database object
  //

  createEffect(() => {
    // show a Loading message if it takes a long time, or show an error if there's a network/IDB error
    async function handleDatabaseLoading () {
      let showingLoadingMessage = false;
      const timeoutHandle = setTimeout(() => {
        showingLoadingMessage = true;
        state.message = state.i18n.loadingMessage;
      }, TIMEOUT_BEFORE_LOADING_MESSAGE);
      try {
        await state.database.ready();
        state.databaseLoaded = true; // eslint-disable-line no-unused-vars
      } catch (err) {
        console.error(err);
        state.message = state.i18n.networkErrorMessage;
      } finally {
        clearTimeout(timeoutHandle);
        if (showingLoadingMessage) { // Seems safer than checking the i18n string, which may change
          showingLoadingMessage = false;
          state.message = ''; // eslint-disable-line no-unused-vars
        }
      }
    }

    if (state.database) {
      /* no await */
      handleDatabaseLoading();
    }
  });

  //
  // Global styles for the entire picker
  //

  createEffect(() => {
    state.pickerStyle = `
      --num-groups: ${state.groups.length}; 
      --indicator-opacity: ${state.searchMode ? 0 : 1}; 
      --num-skintones: ${NUM_SKIN_TONES};`;
  });

  //
  // Set or update the customEmoji
  //

  createEffect(() => {
    if (state.customEmoji && state.database) {
      updateCustomEmoji(); // re-run whenever customEmoji change
    }
  });

  createEffect(() => {
    if (state.customEmoji && state.customEmoji.length) {
      if (state.groups !== allGroups) { // don't update unnecessarily
        state.groups = allGroups;
      }
    } else if (state.groups !== groups) {
      if (state.currentGroupIndex) {
        // If the current group is anything other than "custom" (which is first), decrement.
        // This fixes the odd case where you set customEmoji, then pick a category, then unset customEmoji
        state.currentGroupIndex--;
      }
      state.groups = groups;
    }
  });

  //
  // Set or update the preferred skin tone
  //

  createEffect(() => {
    async function updatePreferredSkinTone () {
      if (state.databaseLoaded) {
        state.currentSkinTone = await state.database.getPreferredSkinTone();
      }
    }

    /* no await */ updatePreferredSkinTone();
  });

  createEffect(() => {
    state.skinTones = Array(NUM_SKIN_TONES).fill().map((_, i) => applySkinTone(state.skinToneEmoji, i));
  });

  createEffect(() => {
    state.skinToneButtonText = state.skinTones[state.currentSkinTone];
  });

  createEffect(() => {
    state.skinToneButtonLabel = state.i18n.skinToneLabel.replace('{skinTone}', state.i18n.skinTones[state.currentSkinTone]);
  });

  //
  // Set or update the favorites emojis
  //

  createEffect(() => {
    async function updateDefaultFavoriteEmojis () {
      const { database } = state;
      const favs = (await Promise.all(MOST_COMMONLY_USED_EMOJI.map(unicode => (
        database.getEmojiByUnicodeOrName(unicode)
      )))).filter(Boolean); // filter because in Jest tests we don't have all the emoji in the DB
      state.defaultFavoriteEmojis = favs;
    }

    if (state.databaseLoaded) {
      /* no await */ updateDefaultFavoriteEmojis();
    }
  });

  function updateCustomEmoji () {
    // Certain effects have an implicit dependency on customEmoji since it affects the database
    // Getting it here on the state ensures this effect re-runs when customEmoji change.
    // Setting it on the database is pointless but prevents this code from being removed by a minifier.
    state.database.customEmoji = state.customEmoji || EMPTY_ARRAY;
  }

  createEffect(() => {
    async function updateFavorites () {
      updateCustomEmoji(); // re-run whenever customEmoji change
      const { database, defaultFavoriteEmojis, numColumns } = state;
      const dbFavorites = await database.getTopFavoriteEmoji(numColumns);
      const favorites = await summarizeEmojis(uniqBy([
        ...dbFavorites,
        ...defaultFavoriteEmojis
      ], _ => (_.unicode || _.name)).slice(0, numColumns));
      state.currentFavorites = favorites;
    }

    if (state.databaseLoaded && state.defaultFavoriteEmojis) {
      /* no await */ updateFavorites();
    }
  });

  //
  // Calculate the width of the emoji grid. This serves two purposes:
  // 1) Re-calculate the --num-columns var because it may have changed
  // 2) Re-calculate the scrollbar width because it may have changed
  //   (i.e. because the number of items changed)
  // 3) Re-calculate whether we're in RTL mode or not.
  //
  // The benefit of doing this in one place is to align with rAF/ResizeObserver
  // and do all the calculations in one go. RTL vs LTR is not strictly width-related,
  // but since we're already reading the style here, and since it's already aligned with
  // the rAF loop, this is the most appropriate place to do it perf-wise.
  //

  function calculateEmojiGridStyle (node) {
    calculateWidth(node, abortSignal, width => {
      /* istanbul ignore next */
      { // jsdom throws errors for this kind of fancy stuff
        // read all the style/layout calculations we need to make
        const style = getComputedStyle(refs.rootElement);
        const newNumColumns = parseInt(style.getPropertyValue('--num-columns'), 10);
        const newIsRtl = style.getPropertyValue('direction') === 'rtl';
        const parentWidth = node.parentElement.getBoundingClientRect().width;
        const newScrollbarWidth = parentWidth - width;

        // write to state variables
        state.numColumns = newNumColumns;
        state.scrollbarWidth = newScrollbarWidth; // eslint-disable-line no-unused-vars
        state.isRtl = newIsRtl; // eslint-disable-line no-unused-vars
      }
    });
  }

  //
  // Set or update the currentEmojis. Check for invalid ZWJ renderings
  // (i.e. double emoji).
  //

  createEffect(() => {
    async function updateEmojis () {
      const { searchText, currentGroup, databaseLoaded, customEmoji } = state;
      if (!databaseLoaded) {
        state.currentEmojis = [];
        state.searchMode = false;
      } else if (searchText.length >= MIN_SEARCH_TEXT_LENGTH) {
        const newEmojis = await getEmojisBySearchQuery(searchText);
        if (state.searchText === searchText) { // if the situation changes asynchronously, do not update
          updateCurrentEmojis(newEmojis);
          updateSearchMode(true);
        }
      } else { // database is loaded and we're not in search mode, so we're in normal category mode
        const { id: currentGroupId } = currentGroup;
        // avoid race condition where currentGroupId is -1 and customEmoji is undefined/empty
        if (currentGroupId !== -1 || (customEmoji && customEmoji.length)) {
          const newEmojis = await getEmojisByGroup(currentGroupId);
          if (state.currentGroup.id === currentGroupId) { // if the situation changes asynchronously, do not update
            updateCurrentEmojis(newEmojis);
            updateSearchMode(false);
          }
        }
      }
    }

    /* no await */ updateEmojis();
  });

  // Some emojis have their ligatures rendered as two or more consecutive emojis
  // We want to treat these the same as unsupported emojis, so we compare their
  // widths against the baseline widths and remove them as necessary
  createEffect(() => {
    const { currentEmojis, emojiVersion } = state;
    const zwjEmojisToCheck = currentEmojis
      .filter(emoji => emoji.unicode) // filter custom emoji
      .filter(emoji => hasZwj(emoji) && !supportedZwjEmojis.has(emoji.unicode));
    if (!emojiVersion && zwjEmojisToCheck.length) {
      // render now, check their length later
      updateCurrentEmojis(currentEmojis);
      rAF(() => checkZwjSupportAndUpdate(zwjEmojisToCheck));
    } else {
      const newEmojis = emojiVersion ? currentEmojis : currentEmojis.filter(isZwjSupported);
      updateCurrentEmojis(newEmojis);
      // Reset scroll top to 0 when emojis change
      rAF(() => resetScrollTopIfPossible(refs.tabpanelElement));
    }
  });

  function checkZwjSupportAndUpdate (zwjEmojisToCheck) {
    checkZwjSupport(zwjEmojisToCheck, refs.baselineEmoji, emojiToDomNode);
    // force update
    // eslint-disable-next-line no-self-assign
    state.currentEmojis = state.currentEmojis;
  }

  function isZwjSupported (emoji) {
    return !emoji.unicode || !hasZwj(emoji) || supportedZwjEmojis.get(emoji.unicode)
  }

  async function filterEmojisByVersion (emojis) {
    const emojiSupportLevel = state.emojiVersion || await detectEmojiSupportLevel();
    // !version corresponds to custom emoji
    return emojis.filter(({ version }) => !version || version <= emojiSupportLevel)
  }

  async function summarizeEmojis (emojis) {
    return summarizeEmojisForUI(emojis, state.emojiVersion || await detectEmojiSupportLevel())
  }

  async function getEmojisByGroup (group) {
    // -1 is custom emoji
    const emoji = group === -1 ? state.customEmoji : await state.database.getEmojiByGroup(group);
    return summarizeEmojis(await filterEmojisByVersion(emoji))
  }

  async function getEmojisBySearchQuery (query) {
    return summarizeEmojis(await filterEmojisByVersion(await state.database.getEmojiBySearchQuery(query)))
  }

  createEffect(() => {
  });

  //
  // Derive currentEmojisWithCategories from currentEmojis. This is always done even if there
  // are no categories, because it's just easier to code the HTML this way.
  //

  createEffect(() => {
    function calculateCurrentEmojisWithCategories () {
      const { searchMode, currentEmojis } = state;
      if (searchMode) {
        return [
          {
            category: '',
            emojis: currentEmojis
          }
        ]
      }
      const categoriesToEmoji = new Map();
      for (const emoji of currentEmojis) {
        const category = emoji.category || '';
        let emojis = categoriesToEmoji.get(category);
        if (!emojis) {
          emojis = [];
          categoriesToEmoji.set(category, emojis);
        }
        emojis.push(emoji);
      }
      return [...categoriesToEmoji.entries()]
        .map(([category, emojis]) => ({ category, emojis }))
        .sort((a, b) => state.customCategorySorting(a.category, b.category))
    }

    const newEmojisWithCategories = calculateCurrentEmojisWithCategories();
    updateCurrentEmojisWithCategories(newEmojisWithCategories);
  });

  //
  // Handle active search item (i.e. pressing up or down while searching)
  //

  createEffect(() => {
    state.activeSearchItemId = state.activeSearchItem !== -1 && state.currentEmojis[state.activeSearchItem].id;
  });

  //
  // Handle user input on the search input
  //

  createEffect(() => {
    const { rawSearchText } = state;
    rIC(() => {
      state.searchText = (rawSearchText || '').trim(); // defer to avoid input delays, plus we can trim here
      state.activeSearchItem = -1;
    });
  });

  function onSearchKeydown (event) {
    if (!state.searchMode || !state.currentEmojis.length) {
      return
    }

    const goToNextOrPrevious = (previous) => {
      halt(event);
      state.activeSearchItem = incrementOrDecrement(previous, state.activeSearchItem, state.currentEmojis);
    };

    switch (event.key) {
      case 'ArrowDown':
        return goToNextOrPrevious(false)
      case 'ArrowUp':
        return goToNextOrPrevious(true)
      case 'Enter':
        if (state.activeSearchItem === -1) {
          // focus the first option in the list since the list must be non-empty at this point (it's verified above)
          state.activeSearchItem = 0;
        } else { // there is already an active search item
          halt(event);
          return clickEmoji(state.currentEmojis[state.activeSearchItem].id)
        }
    }
  }

  //
  // Handle user input on nav
  //

  function onNavClick (event) {
    const { target } = event;
    const closestTarget = target.closest('.nav-button');
    /* istanbul ignore if */
    if (!closestTarget) {
      return // This should never happen, but makes me nervous not to have it
    }
    const groupId = parseInt(closestTarget.dataset.groupId, 10);
    refs.searchElement.value = ''; // clear search box input
    state.rawSearchText = '';
    state.searchText = '';
    state.activeSearchItem = -1;
    state.currentGroupIndex = state.groups.findIndex(_ => _.id === groupId);
  }

  function onNavKeydown (event) {
    const { target, key } = event;

    const doFocus = el => {
      if (el) {
        halt(event);
        el.focus();
      }
    };

    switch (key) {
      case 'ArrowLeft':
        return doFocus(target.previousElementSibling)
      case 'ArrowRight':
        return doFocus(target.nextElementSibling)
      case 'Home':
        return doFocus(target.parentElement.firstElementChild)
      case 'End':
        return doFocus(target.parentElement.lastElementChild)
    }
  }

  //
  // Handle user input on an emoji
  //

  async function clickEmoji (unicodeOrName) {
    const emoji = await state.database.getEmojiByUnicodeOrName(unicodeOrName);
    const emojiSummary = [...state.currentEmojis, ...state.currentFavorites]
      .find(_ => (_.id === unicodeOrName));
    const skinTonedUnicode = emojiSummary.unicode && unicodeWithSkin(emojiSummary, state.currentSkinTone);
    await state.database.incrementFavoriteEmojiCount(unicodeOrName);
    fireEvent('emoji-click', {
      emoji,
      skinTone: state.currentSkinTone,
      ...(skinTonedUnicode && { unicode: skinTonedUnicode }),
      ...(emojiSummary.name && { name: emojiSummary.name })
    });
  }

  async function onEmojiClick (event) {
    const { target } = event;
    /* istanbul ignore if */
    if (!target.classList.contains('emoji')) {
      // This should never happen, but makes me nervous not to have it
      return
    }
    halt(event);
    const id = target.id.substring(4); // replace 'emo-' or 'fav-' prefix

    /* no await */ clickEmoji(id);
  }

  //
  // Handle user input on the skintone picker
  //

  function changeSkinTone (skinTone) {
    state.currentSkinTone = skinTone;
    state.skinTonePickerExpanded = false;
    focus('skintone-button');
    fireEvent('skin-tone-change', { skinTone });
    /* no await */ state.database.setPreferredSkinTone(skinTone);
  }

  function onSkinToneOptionsClick (event) {
    const { target: { id } } = event;
    const match = id && id.match(/^skintone-(\d)/); // skintone option format
    /* istanbul ignore if */
    if (!match) { // not a skintone option
      return // This should never happen, but makes me nervous not to have it
    }
    halt(event);
    const skinTone = parseInt(match[1], 10); // remove 'skintone-' prefix
    changeSkinTone(skinTone);
  }

  function onClickSkinToneButton (event) {
    state.skinTonePickerExpanded = !state.skinTonePickerExpanded;
    state.activeSkinTone = state.currentSkinTone;
    // this should always be true, since the button is obscured by the listbox, so this `if` is just to be sure
    if (state.skinTonePickerExpanded) {
      halt(event);
      rAF(() => focus('skintone-list'));
    }
  }

  // To make the animation nicer, change the z-index of the skintone picker button
  // *after* the animation has played. This makes it appear that the picker box
  // is expanding "below" the button
  createEffect(() => {
    if (state.skinTonePickerExpanded) {
      refs.skinToneDropdown.addEventListener('transitionend', () => {
        state.skinTonePickerExpandedAfterAnimation = true; // eslint-disable-line no-unused-vars
      }, { once: true });
    } else {
      state.skinTonePickerExpandedAfterAnimation = false; // eslint-disable-line no-unused-vars
    }
  });

  function onSkinToneOptionsKeydown (event) {
    // this should never happen, but makes me nervous not to have it
    /* istanbul ignore if */
    if (!state.skinTonePickerExpanded) {
      return
    }
    const changeActiveSkinTone = async nextSkinTone => {
      halt(event);
      state.activeSkinTone = nextSkinTone;
    };

    switch (event.key) {
      case 'ArrowUp':
        return changeActiveSkinTone(incrementOrDecrement(true, state.activeSkinTone, state.skinTones))
      case 'ArrowDown':
        return changeActiveSkinTone(incrementOrDecrement(false, state.activeSkinTone, state.skinTones))
      case 'Home':
        return changeActiveSkinTone(0)
      case 'End':
        return changeActiveSkinTone(state.skinTones.length - 1)
      case 'Enter':
        // enter on keydown, space on keyup. this is just how browsers work for buttons
        // https://lists.w3.org/Archives/Public/w3c-wai-ig/2019JanMar/0086.html
        halt(event);
        return changeSkinTone(state.activeSkinTone)
      case 'Escape':
        halt(event);
        state.skinTonePickerExpanded = false;
        return focus('skintone-button')
    }
  }

  function onSkinToneOptionsKeyup (event) {
    // this should never happen, but makes me nervous not to have it
    /* istanbul ignore if */
    if (!state.skinTonePickerExpanded) {
      return
    }
    switch (event.key) {
      case ' ':
        // enter on keydown, space on keyup. this is just how browsers work for buttons
        // https://lists.w3.org/Archives/Public/w3c-wai-ig/2019JanMar/0086.html
        halt(event);
        return changeSkinTone(state.activeSkinTone)
    }
  }

  async function onSkinToneOptionsFocusOut (event) {
    // On blur outside of the skintone listbox, collapse the skintone picker.
    const { relatedTarget } = event;
    // The `else` should never happen, but makes me nervous not to have it
    /* istanbul ignore else */
    if (!relatedTarget || relatedTarget.id !== 'skintone-list') {
      state.skinTonePickerExpanded = false;
    }
  }

  function onSearchInput (event) {
    state.rawSearchText = event.target.value;
  }

  return {
    $set (newState) {
      assign(state, newState);
    },
    $destroy () {
      abortController.abort();
    }
  }
}

const DEFAULT_DATA_SOURCE = 'https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json';
const DEFAULT_LOCALE = 'en';

var enI18n = {
  categoriesLabel: 'Categories',
  emojiUnsupportedMessage: 'Your browser does not support color emoji.',
  favoritesLabel: 'Favorites',
  loadingMessage: 'Loading…',
  networkErrorMessage: 'Could not load emoji.',
  regionLabel: 'Emoji picker',
  searchDescription: 'When search results are available, press up or down to select and enter to choose.',
  searchLabel: 'Search',
  searchResultsLabel: 'Search results',
  skinToneDescription: 'When expanded, press up or down to select and enter to choose.',
  skinToneLabel: 'Choose a skin tone (currently {skinTone})',
  skinTonesLabel: 'Skin tones',
  skinTones: [
    'Default',
    'Light',
    'Medium-Light',
    'Medium',
    'Medium-Dark',
    'Dark'
  ],
  categories: {
    custom: 'Custom',
    'smileys-emotion': 'Smileys and emoticons',
    'people-body': 'People and body',
    'animals-nature': 'Animals and nature',
    'food-drink': 'Food and drink',
    'travel-places': 'Travel and places',
    activities: 'Activities',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags'
  }
};

const PROPS = [
  'customEmoji',
  'customCategorySorting',
  'database',
  'dataSource',
  'i18n',
  'locale',
  'skinToneEmoji',
  'emojiVersion'
];

// Styles injected ourselves, so we can declare the FONT_FAMILY variable in one place
const EXTRA_STYLES = `:host{--emoji-font-family:${FONT_FAMILY}}`;

class PickerElement extends HTMLElement {
  constructor (props) {
    super();
    this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = ":host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.custom-emoji,.emoji,button.emoji{height:var(--total-emoji-size);width:var(--total-emoji-size)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.custom-emoji{padding:var(--emoji-padding);object-fit:contain;pointer-events:none;background-repeat:no-repeat;background-position:center center;background-size:var(--emoji-size) var(--emoji-size)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}" + EXTRA_STYLES;
    this.shadowRoot.appendChild(style);
    this._ctx = {
      // Set defaults
      locale: DEFAULT_LOCALE,
      dataSource: DEFAULT_DATA_SOURCE,
      skinToneEmoji: DEFAULT_SKIN_TONE_EMOJI,
      customCategorySorting: DEFAULT_CATEGORY_SORTING,
      customEmoji: null,
      i18n: enI18n,
      emojiVersion: null,
      ...props
    };
    // Handle properties set before the element was upgraded
    for (const prop of PROPS) {
      if (prop !== 'database' && Object.prototype.hasOwnProperty.call(this, prop)) {
        this._ctx[prop] = this[prop];
        delete this[prop];
      }
    }
    this._dbFlush(); // wait for a flush before creating the db, in case the user calls e.g. a setter or setAttribute
  }

  connectedCallback () {
    // The _cmp may be defined if the component was immediately disconnected and then reconnected. In that case,
    // do nothing (preserve the state)
    if (!this._cmp) {
      this._cmp = createRoot(this.shadowRoot, this._ctx);
    }
  }

  disconnectedCallback () {
    // Check in a microtask if the element is still connected. If so, treat this as a "move" rather than a disconnect
    // Inspired by Vue: https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue
    qM(() => {
      // this._cmp may be defined if connect-disconnect-connect-disconnect occurs synchronously
      if (!this.isConnected && this._cmp) {
        this._cmp.$destroy();
        this._cmp = undefined;

        const { database } = this._ctx;
        database.close()
          // only happens if the database failed to load in the first place, so we don't care
          .catch(err => console.error(err));
      }
    });
  }

  static get observedAttributes () {
    return ['locale', 'data-source', 'skin-tone-emoji', 'emoji-version'] // complex objects aren't supported, also use kebab-case
  }

  attributeChangedCallback (attrName, oldValue, newValue) {
    this._set(
      // convert from kebab-case to camelcase
      // see https://github.com/sveltejs/svelte/issues/3852#issuecomment-665037015
      attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
      // convert string attribute to float if necessary
      attrName === 'emoji-version' ? parseFloat(newValue) : newValue
    );
  }

  _set (prop, newValue) {
    this._ctx[prop] = newValue;
    if (this._cmp) {
      this._cmp.$set({ [prop]: newValue });
    }
    if (['locale', 'dataSource'].includes(prop)) {
      this._dbFlush();
    }
  }

  _dbCreate () {
    const { locale, dataSource, database } = this._ctx;
    // only create a new database if we really need to
    if (!database || database.locale !== locale || database.dataSource !== dataSource) {
      this._set('database', new _database_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ locale, dataSource }));
    }
  }

  // Update the Database in one microtask if the locale/dataSource change. We do one microtask
  // so we don't create two Databases if e.g. both the locale and the dataSource change
  _dbFlush () {
    qM(() => (
      this._dbCreate()
    ));
  }
}

const definitions = {};

for (const prop of PROPS) {
  definitions[prop] = {
    get () {
      if (prop === 'database') {
        // in rare cases, the microtask may not be flushed yet, so we need to instantiate the DB
        // now if the user is asking for it
        this._dbCreate();
      }
      return this._ctx[prop]
    },
    set (val) {
      if (prop === 'database') {
        throw new Error('database is read-only')
      }
      this._set(prop, val);
    }
  };
}

Object.defineProperties(PickerElement.prototype, definitions);

/* istanbul ignore else */
if (!customElements.get('emoji-picker')) { // if already defined, do nothing (e.g. same script imported twice)
  customElements.define('emoji-picker', PickerElement);
}




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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxRUFBZTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFlO0FBQy9CLGtCQUFrQixxRUFBZTtBQUNqQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzd3QnlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN1QjtBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJEQUFVOztBQUVwQztBQUNBLCtCQUErQix5R0FBK0I7QUFDOUQ7QUFDQTtBQUNBLElBQUkseUdBQStCOztBQUVuQztBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQWlCO0FBQ3hFOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNGO0FBQ21CO0FBQ0s7QUFDSjtBQUNRO0FBSzlCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0hBQW9IO0FBQ3BILGdIQUFnSDtBQUNoSCwwSEFBMEg7QUFDMUgsNEhBQTRIO0FBQzVIO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHVCQUF1QjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsNkVBQTZFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw4RUFBOEUsSUFBSTtBQUNuRztBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxPQUFPO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLDhCQUE4QjtBQUM5QixNQUFNLGNBQWM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Q5QkM7QUFDSTtBQUNUOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZVOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCOztBQUVqRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBWTtBQUNoQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9yYW5kb20tYXZhdGFyLWdlbmVyYXRvci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvYWxlYS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi90eWNoZWkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yMTI4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjQwOTYuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yc2hpZnQ3LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcndvdy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL3NlZWRyYW5kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvYWRkTmV3LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2FkZE5ld0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvYWRkTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9hbGxMaXN0c1VJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2FwcFVJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2xpc3RVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9wcm9maWxlLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3Byb2ZpbGVVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay9pZ25vcmVkfC9ob21lL2VtLWpoL0RvY3VtZW50cy9HaXRIdWIvdG9kby13ZWJwYWNrLXYyL3RvcC10b2RvbGlzdC13ZWJwYWNrL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tfGNyeXB0byIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNQYXN0Lm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2VJU08ubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Vtb2ppLXBpY2tlci1lbGVtZW50L2RhdGFiYXNlLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Vtb2ppLXBpY2tlci1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Vtb2ppLXBpY2tlci1lbGVtZW50L3BpY2tlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLW1haW4tZm9udDogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0taGVhZGluZy1mb250OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgLS1oZWFkaW5nLXdlaWdodDogNjAwO1xuICAtLWFjY2VudC1jb2xvcjogI2Y2ZjRmOTtcbiAgLS1hY2NlbnQtY29sb3ItMjogI2ZjYTNiOTtcbiAgLS1tYWluLWZvbnQtc2l6ZTogMThweDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogNS82O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTg0YzY7XG4gIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMik7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcbn1cblxuYnV0dG9uOmhvdmVyLFxuLmxpc3QtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG4uZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5ociB7XG4gIHdpZHRoOiA5MCU7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjNyZW07XG59XG5cbmZvcm0ge1xuICBncmlkLXJvdzogMi8zO1xuICB3aWR0aDogOTF2dztcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogOTAlO1xuICBjb2xvcjogI2ZjYTNiOTtcbn1cblxuLm1lbnVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51SXRlbURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubWVudUl0ZW1EaXYgPiBpIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWVudUl0ZW1EaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuLnZpZXctY3RyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNyUgMWZyO1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMS81O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4uYWRkLW5ldy1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMCU7XG4gIGJvdHRvbTogMjUlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiOGM3O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi50b2RvLWRvbmUtY3RyLFxuLmxpc3RzLWN0cixcbi5hZGQtbmV3LFxuZm9ybSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kb25lLWN0ciB7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG5cbi5kb25lLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm5vdGhpbmctY29tcGxldGUge1xuICBib3JkZXItYm90dG9tOiAjYjBiOGM3IHNvbGlkIDFweDtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vLXRhc2tzLXRleHQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogNjAlO1xufVxuXG4uaGVhZGluZy1jdHIge1xuICBncmlkLXJvdzogMS8yO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5pdGVtLWN0ciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjUlIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHJnYigxODUsIDE4NSwgMTg1KSBzb2xpZCAxcHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cblxuLnRleHQtZGl2ID4gcCB7XG4gIHBhZGRpbmctdG9wOiAwLjNyZW07XG59XG5cbi5vcGVuLWVkaXQtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDIvMztcbn1cblxuLm9wZW4tZWRpdC1kaXYgPiBpIHtcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG59XG5cbi5vcGVuLWVkaXQtZGl2LFxuLnRhc2stY29tcGxldGUtZGl2LFxuLmRlbGV0ZS1kaXYsXG4uaWNvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi50YXNrLWNvbXBsZXRlLWRpdixcbi5kZWxldGUtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDIvMztcbn1cblxuLmR1ZS1kYXRlIHtcbiAgZ3JpZC1jb2x1bW46IDIvNDtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuXG4uaWNvbi1kaXYge1xuICBncmlkLWNvbHVtbjogMi80O1xuICBncmlkLXJvdzogMS8yO1xufVxuXG4ubGlzdC1pY29uLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEuNHJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcbn1cblxuLnByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IHJnYigyMzUsIDk1LCA0NCkgc29saWQgMC4zcmVtO1xuICBvcGFjaXR5OiA5MCU7XG59XG5cbi5vdmVyZHVlIHtcbiAgY29sb3I6IHJnYigyMzUsIDk1LCA0NCk7XG59XG5cbi50b2RheSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRvZGF5LFxuLm92ZXJkdWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubm8tdGFza3MtY3RyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uaDEtbmV3IHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG4uYWRkLW5ldyB7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5mb3JtLWN0cixcbi5wcmlvcml0eS1jdHIsXG4uYnV0dG9uLWN0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuLmZvcm0tY3RyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByaW9yaXR5LWN0ciB7XG4gIGdhcDogMC40cmVtO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idXR0b24tY3RyIHtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5mb3JtID4gLmJ1dHRvbi1jdHIgPiBidXR0b24sXG4uY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNob29zZS1pY29uLWN0ciA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGJmZjg7XG59XG5cbi5jbG9zZS1jdHIge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5jaG9vc2UtaWNvbi1jdHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi5jaG9vc2UtaWNvbi1jdHIgPiBpbnB1dCB7XG4gIHdpZHRoOiAxLjhyZW07XG4gIGhlaWdodDogMS44cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcbn1cblxuLnByb2ZpbGUtY3RyIHtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmF2YXRhciB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmF2YXRhci1oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5wcm9maWxlLW5hbWUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICBmb290ZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDIvNjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gIH1cblxuICBmb290ZXIgPiAubG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2EzYjk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLml0ZW0tY3RyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxZnIgMWZyO1xuICB9XG5cbiAgLm1lbnVEaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxuICAubWVudUl0ZW1EaXYge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5oZWFkZXItcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5oZWFkZXItcHJvZmlsZSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG4gIH1cblxuICAubG9nby1jdHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAudmlldy1jdHIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDIvNjtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmFkZC1uZXctYnRuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDI1JTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgZm9ybSA+IC5idXR0b24tY3RyID4gYnV0dG9uLFxuICAuY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgLnRvZG8tZG9uZS1jdHIsXG4gIC5saXN0cy1jdHIge1xuICAgIHBhZGRpbmc6IDAgMTUlO1xuICB9XG5cbiAgLnByb2ZpbGUtY3RyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLG1EQUFtRDtBQUNyRDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsNkJB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Q0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWFpbi1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWhlYWRpbmctZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1oZWFkaW5nLXdlaWdodDogNjAwO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNmNmY0Zjk7XFxuICAtLWFjY2VudC1jb2xvci0yOiAjZmNhM2I5O1xcbiAgLS1tYWluLWZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDUvNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxODRjNjtcXG4gIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ubGlzdC1pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaDEsXFxuLmRlc2Mge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbmhyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMS4zcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICB3aWR0aDogOTF2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3BhY2l0eTogOTAlO1xcbiAgY29sb3I6ICNmY2EzYjk7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnVJdGVtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubWVudUl0ZW1EaXYgPiBpIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1lbnVJdGVtRGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLnZpZXctY3RyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3JSAxZnI7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5hZGQtbmV3LWJ0biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTAlO1xcbiAgYm90dG9tOiAyNSU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjhjNztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi50b2RvLWRvbmUtY3RyLFxcbi5saXN0cy1jdHIsXFxuLmFkZC1uZXcsXFxuZm9ybSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZG9uZS1jdHIge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLmRvbmUtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm5vdGhpbmctY29tcGxldGUge1xcbiAgYm9yZGVyLWJvdHRvbTogI2IwYjhjNyBzb2xpZCAxcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vLXRhc2tzLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5oZWFkaW5nLWN0ciB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uaXRlbS1jdHIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjUlIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiByZ2IoMTg1LCAxODUsIDE4NSkgc29saWQgMXB4O1xcbn1cXG5cXG4udGV4dC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4udGV4dC1kaXYgPiBwIHtcXG4gIHBhZGRpbmctdG9wOiAwLjNyZW07XFxufVxcblxcbi5vcGVuLWVkaXQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ub3Blbi1lZGl0LWRpdiA+IGkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5vcGVuLWVkaXQtZGl2LFxcbi50YXNrLWNvbXBsZXRlLWRpdixcXG4uZGVsZXRlLWRpdixcXG4uaWNvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtZGl2LFxcbi5kZWxldGUtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmxpc3QtaWNvbi1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMS40cmVtO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nOiAwcmVtIDJyZW07XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogcmdiKDIzNSwgOTUsIDQ0KSBzb2xpZCAwLjNyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi5vdmVyZHVlIHtcXG4gIGNvbG9yOiByZ2IoMjM1LCA5NSwgNDQpO1xcbn1cXG5cXG4udG9kYXkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9kYXksXFxuLm92ZXJkdWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5vLXRhc2tzLWN0ciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaDEtbmV3IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uYWRkLW5ldyB7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHotaW5kZXg6IDEwMDE7XFxufVxcblxcbi5mb3JtLWN0cixcXG4ucHJpb3JpdHktY3RyLFxcbi5idXR0b24tY3RyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcblxcbi5mb3JtLWN0ciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJpb3JpdHktY3RyIHtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWN0ciB7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5mb3JtID4gLmJ1dHRvbi1jdHIgPiBidXR0b24sXFxuLmNob29zZS1pY29uLWN0ciA+IGJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4uY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGJmZjg7XFxufVxcblxcbi5jbG9zZS1jdHIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uY2hvb3NlLWljb24tY3RyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jaG9vc2UtaWNvbi1jdHIgPiBpbnB1dCB7XFxuICB3aWR0aDogMS44cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMik7XFxufVxcblxcbi5wcm9maWxlLWN0ciB7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHotaW5kZXg6IDEwMDE7XFxufVxcblxcbi5hdmF0YXIge1xcbiAgbWluLWhlaWdodDogMTgwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hdmF0YXItaGVhZGVyIHtcXG4gIG1heC1oZWlnaHQ6IDVyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9maWxlLW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzY7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgfVxcblxcbiAgZm9vdGVyID4gLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhM2I5O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuXFxuICAuY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgLml0ZW0tY3RyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5tZW51RGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICB9XFxuXFxuICAubWVudUl0ZW1EaXYge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5oZWFkZXItcHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlci1wcm9maWxlID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcXG4gIH1cXG5cXG4gIC5sb2dvLWN0ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLnZpZXctY3RyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvNjtcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAuYWRkLW5ldy1idG4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxMCU7XFxuICAgIHRvcDogMjUlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgfVxcblxcbiAgZm9ybSA+IC5idXR0b24tY3RyID4gYnV0dG9uLFxcbiAgLmNob29zZS1pY29uLWN0ciA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxuXFxuICAudG9kby1kb25lLWN0cixcXG4gIC5saXN0cy1jdHIge1xcbiAgICBwYWRkaW5nOiAwIDE1JTtcXG4gIH1cXG5cXG4gIC5wcm9maWxlLWN0ciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BdmF0YXJHZW5lcmF0b3IgPSB2b2lkIDA7XHJcbnZhciBzZWVkcmFuZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNlZWRyYW5kb21cIikpO1xyXG4vKiogQGRlc2NyaXB0aW9uIENsYXNzIHRvIGdlbmVyYXRlIGF2YXRhcnMgICovXHJcbnZhciBBdmF0YXJHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBdmF0YXJHZW5lcmF0b3IoKSB7XHJcbiAgICB9XHJcbiAgICAvKiogQGRlc2NyaXB0aW9uIEdlbmVyYXRlcyByYW5kb20gYXZhdGFyIGltYWdlIFVSTFxyXG4gICAgICogQHJldHVybnMgUmFuZG9tIGF2YXRhciBpbWFnZSBVUkxcclxuICAgICAqL1xyXG4gICAgQXZhdGFyR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZVJhbmRvbUF2YXRhciA9IGZ1bmN0aW9uIChzZWVkKSB7XHJcbiAgICAgICAgdmFyIHRvcFR5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdG9wVHlwZU9wdGlvbnMucHVzaChcIk5vSGFpclwiLCBcIkV5ZXBhdGNoXCIsIFwiSGF0XCIsIFwiSGlqYWJcIiwgXCJUdXJiYW5cIiwgXCJXaW50ZXJIYXQxXCIsIFwiV2ludGVySGF0MlwiLCBcIldpbnRlckhhdDNcIiwgXCJXaW50ZXJIYXQ0XCIsIFwiTG9uZ0hhaXJCaWdIYWlyXCIsIFwiTG9uZ0hhaXJCb2JcIiwgXCJMb25nSGFpckJ1blwiLCBcIkxvbmdIYWlyQ3VybHlcIiwgXCJMb25nSGFpckN1cnZ5XCIsIFwiTG9uZ0hhaXJEcmVhZHNcIiwgXCJMb25nSGFpckZyaWRhXCIsIFwiTG9uZ0hhaXJGcm9cIiwgXCJMb25nSGFpckZyb0JhbmRcIiwgXCJMb25nSGFpck5vdFRvb0xvbmdcIiwgXCJMb25nSGFpclNoYXZlZFNpZGVzXCIsIFwiTG9uZ0hhaXJNaWFXYWxsYWNlXCIsIFwiTG9uZ0hhaXJTdHJhaWdodFwiLCBcIkxvbmdIYWlyU3RyYWlnaHQyXCIsIFwiTG9uZ0hhaXJTdHJhaWdodFN0cmFuZFwiLCBcIlNob3J0SGFpckRyZWFkczAxXCIsIFwiU2hvcnRIYWlyRHJlYWRzMDJcIiwgXCJTaG9ydEhhaXJGcml6emxlXCIsIFwiU2hvcnRIYWlyU2hhZ2d5TXVsbGV0XCIsIFwiU2hvcnRIYWlyU2hvcnRDdXJseVwiLCBcIlNob3J0SGFpclNob3J0RmxhdFwiLCBcIlNob3J0SGFpclNob3J0Um91bmRcIiwgXCJTaG9ydEhhaXJTaG9ydFdhdmVkXCIsIFwiU2hvcnRIYWlyU2lkZXNcIiwgXCJTaG9ydEhhaXJUaGVDYWVzYXJcIiwgXCJTaG9ydEhhaXJUaGVDYWVzYXJTaWRlUGFydFwiKTtcclxuICAgICAgICB2YXIgYWNjZXNzb3JpZXNUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGFjY2Vzc29yaWVzVHlwZU9wdGlvbnMucHVzaChcIkJsYW5rXCIsIFwiS3VydFwiLCBcIlByZXNjcmlwdGlvbjAxXCIsIFwiUHJlc2NyaXB0aW9uMDJcIiwgXCJSb3VuZFwiLCBcIlN1bmdsYXNzZXNcIiwgXCJXYXlmYXJlcnNcIik7XHJcbiAgICAgICAgdmFyIGZhY2lhbEhhaXJUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZhY2lhbEhhaXJUeXBlT3B0aW9ucy5wdXNoKFwiQmxhbmtcIiwgXCJCZWFyZE1lZGl1bVwiLCBcIkJlYXJkTGlnaHRcIiwgXCJCZWFyZE1hZ2VzdGljXCIsIFwiTW91c3RhY2hlRmFuY3lcIiwgXCJNb3VzdGFjaGVNYWdudW1cIik7XHJcbiAgICAgICAgdmFyIGZhY2lhbEhhaXJDb2xvck9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmYWNpYWxIYWlyQ29sb3JPcHRpb25zLnB1c2goXCJBdWJ1cm5cIiwgXCJCbGFja1wiLCBcIkJsb25kZVwiLCBcIkJsb25kZUdvbGRlblwiLCBcIkJyb3duXCIsIFwiQnJvd25EYXJrXCIsIFwiUGxhdGludW1cIiwgXCJSZWRcIik7XHJcbiAgICAgICAgdmFyIGNsb3RoZVR5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY2xvdGhlVHlwZU9wdGlvbnMucHVzaChcIkJsYXplclNoaXJ0XCIsIFwiQmxhemVyU3dlYXRlclwiLCBcIkNvbGxhclN3ZWF0ZXJcIiwgXCJHcmFwaGljU2hpcnRcIiwgXCJIb29kaWVcIiwgXCJPdmVyYWxsXCIsIFwiU2hpcnRDcmV3TmVja1wiLCBcIlNoaXJ0U2Nvb3BOZWNrXCIsIFwiU2hpcnRWTmVja1wiKTtcclxuICAgICAgICB2YXIgZXllVHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBleWVUeXBlT3B0aW9ucy5wdXNoKFwiQ2xvc2VcIiwgXCJDcnlcIiwgXCJEZWZhdWx0XCIsIFwiRGl6enlcIiwgXCJFeWVSb2xsXCIsIFwiSGFwcHlcIiwgXCJIZWFydHNcIiwgXCJTaWRlXCIsIFwiU3F1aW50XCIsIFwiU3VycHJpc2VkXCIsIFwiV2lua1wiLCBcIldpbmtXYWNreVwiKTtcclxuICAgICAgICB2YXIgZXllYnJvd1R5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZXllYnJvd1R5cGVPcHRpb25zLnB1c2goXCJBbmdyeVwiLCBcIkFuZ3J5TmF0dXJhbFwiLCBcIkRlZmF1bHRcIiwgXCJEZWZhdWx0TmF0dXJhbFwiLCBcIkZsYXROYXR1cmFsXCIsIFwiUmFpc2VkRXhjaXRlZFwiLCBcIlJhaXNlZEV4Y2l0ZWROYXR1cmFsXCIsIFwiU2FkQ29uY2VybmVkXCIsIFwiU2FkQ29uY2VybmVkTmF0dXJhbFwiLCBcIlVuaWJyb3dOYXR1cmFsXCIsIFwiVXBEb3duXCIsIFwiVXBEb3duTmF0dXJhbFwiKTtcclxuICAgICAgICB2YXIgbW91dGhUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIG1vdXRoVHlwZU9wdGlvbnMucHVzaChcIkNvbmNlcm5lZFwiLCBcIkRlZmF1bHRcIiwgXCJEaXNiZWxpZWZcIiwgXCJFYXRpbmdcIiwgXCJHcmltYWNlXCIsIFwiU2FkXCIsIFwiU2NyZWFtT3BlblwiLCBcIlNlcmlvdXNcIiwgXCJTbWlsZVwiLCBcIlRvbmd1ZVwiLCBcIlR3aW5rbGVcIiwgXCJWb21pdFwiKTtcclxuICAgICAgICB2YXIgc2tpbkNvbG9yT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHNraW5Db2xvck9wdGlvbnMucHVzaChcIlRhbm5lZFwiLCBcIlllbGxvd1wiLCBcIlBhbGVcIiwgXCJMaWdodFwiLCBcIkJyb3duXCIsIFwiRGFya0Jyb3duXCIsIFwiQmxhY2tcIik7XHJcbiAgICAgICAgdmFyIGhhaXJDb2xvclR5cGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgaGFpckNvbG9yVHlwZXMucHVzaChcIkF1YnVyblwiLCBcIkJsYWNrXCIsIFwiQmxvbmRlXCIsIFwiQmxvbmRlR29sZGVuXCIsIFwiQnJvd25cIiwgXCJCcm93bkRhcmtcIiwgXCJQYXN0ZWxQaW5rXCIsIFwiUGxhdGludW1cIiwgXCJSZWRcIiwgXCJTaWx2ZXJHcmF5XCIpO1xyXG4gICAgICAgIHZhciBoYXRDb2xvck9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBoYXRDb2xvck9wdGlvbnMucHVzaChcIkJsYWNrXCIsIFwiQmx1ZTAxXCIsIFwiQmx1ZTAyXCIsIFwiQmx1ZTAzXCIsIFwiR3JheTAxXCIsIFwiR3JheTAyXCIsIFwiSGVhdGhlclwiLCBcIlBhc3RlbEJsdWVcIiwgXCJQYXN0ZWxHcmVlblwiLCBcIlBhc3RlbE9yYW5nZVwiLCBcIlBhc3RlbFJlZFwiLCBcIlBhc3RlbFllbGxvd1wiLCBcIlBpbmtcIiwgXCJSZWRcIiwgXCJXaGl0ZVwiKTtcclxuICAgICAgICB2YXIgY2xvdGhlQ29sb3JPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY2xvdGhlQ29sb3JPcHRpb25zLnB1c2goXCJCbGFja1wiLCBcIkJsdWUwMVwiLCBcIkJsdWUwMlwiLCBcIkJsdWUwM1wiLCBcIkdyYXkwMVwiLCBcIkdyYXkwMlwiLCBcIkhlYXRoZXJcIiwgXCJQYXN0ZWxCbHVlXCIsIFwiUGFzdGVsR3JlZW5cIiwgXCJQYXN0ZWxPcmFuZ2VcIiwgXCJQYXN0ZWxSZWRcIiwgXCJQYXN0ZWxZZWxsb3dcIiwgXCJQaW5rXCIsIFwiUmVkXCIsIFwiV2hpdGVcIik7XHJcbiAgICAgICAgdmFyIHJuZyA9IHNlZWQgPyBzZWVkcmFuZG9tXzEuZGVmYXVsdChzZWVkKSA6IHNlZWRyYW5kb21fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9hdmF0YWFhcnMuaW8vP2FjY2Vzc29yaWVzVHlwZT1cIiArIGFjY2Vzc29yaWVzVHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGFjY2Vzc29yaWVzVHlwZU9wdGlvbnMubGVuZ3RoKV0gKyBcIiZhdmF0YXJTdHlsZT1DaXJjbGUmY2xvdGhlQ29sb3I9XCIgKyBjbG90aGVDb2xvck9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGNsb3RoZUNvbG9yT3B0aW9ucy5sZW5ndGgpXSArIFwiJmNsb3RoZVR5cGU9XCIgKyBjbG90aGVUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogY2xvdGhlVHlwZU9wdGlvbnMubGVuZ3RoKV0gKyBcIiZleWVUeXBlPVwiICsgZXllVHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGV5ZVR5cGVPcHRpb25zLmxlbmd0aCldICsgXCImZXllYnJvd1R5cGU9XCIgKyBleWVicm93VHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGV5ZWJyb3dUeXBlT3B0aW9ucy5sZW5ndGgpXSArIFwiJmZhY2lhbEhhaXJDb2xvcj1cIiArIGZhY2lhbEhhaXJDb2xvck9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGZhY2lhbEhhaXJDb2xvck9wdGlvbnMubGVuZ3RoKV0gKyBcIiZmYWNpYWxIYWlyVHlwZT1cIiArIGZhY2lhbEhhaXJUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogZmFjaWFsSGFpclR5cGVPcHRpb25zLmxlbmd0aCldICsgXCImaGFpckNvbG9yPVwiICsgaGFpckNvbG9yVHlwZXNbTWF0aC5mbG9vcihybmcoKSAqIGhhaXJDb2xvclR5cGVzLmxlbmd0aCldICsgXCImaGF0Q29sb3I9XCIgKyBoYXRDb2xvck9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGhhdENvbG9yT3B0aW9ucy5sZW5ndGgpXSArIFwiJm1vdXRoVHlwZT1cIiArIG1vdXRoVHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIG1vdXRoVHlwZU9wdGlvbnMubGVuZ3RoKV0gKyBcIiZza2luQ29sb3I9XCIgKyBza2luQ29sb3JPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBza2luQ29sb3JPcHRpb25zLmxlbmd0aCldICsgXCImdG9wVHlwZT1cIiArIHRvcFR5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiB0b3BUeXBlT3B0aW9ucy5sZW5ndGgpXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXZhdGFyR2VuZXJhdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkF2YXRhckdlbmVyYXRvciA9IEF2YXRhckdlbmVyYXRvcjtcclxuIiwiLy8gQSBsaWJyYXJ5IG9mIHNlZWRhYmxlIFJOR3MgaW1wbGVtZW50ZWQgaW4gSmF2YXNjcmlwdC5cbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgc2VlZHJhbmRvbSA9IHJlcXVpcmUoJ3NlZWRyYW5kb20nKTtcbi8vIHZhciByYW5kb20gPSBzZWVkcmFuZG9tKDEpOyAvLyBvciBhbnkgc2VlZC5cbi8vIHZhciB4ID0gcmFuZG9tKCk7ICAgICAgIC8vIDAgPD0geCA8IDEuICBFdmVyeSBiaXQgaXMgcmFuZG9tLlxuLy8gdmFyIHggPSByYW5kb20ucXVpY2soKTsgLy8gMCA8PSB4IDwgMS4gIDMyIGJpdHMgb2YgcmFuZG9tbmVzcy5cblxuLy8gYWxlYSwgYSA1My1iaXQgbXVsdGlwbHktd2l0aC1jYXJyeSBnZW5lcmF0b3IgYnkgSm9oYW5uZXMgQmFhZ8O4ZS5cbi8vIFBlcmlvZDogfjJeMTE2XG4vLyBSZXBvcnRlZCB0byBwYXNzIGFsbCBCaWdDcnVzaCB0ZXN0cy5cbnZhciBhbGVhID0gcmVxdWlyZSgnLi9saWIvYWxlYScpO1xuXG4vLyB4b3IxMjgsIGEgcHVyZSB4b3Itc2hpZnQgZ2VuZXJhdG9yIGJ5IEdlb3JnZSBNYXJzYWdsaWEuXG4vLyBQZXJpb2Q6IDJeMTI4LTEuXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBNYXRyaXhSYW5rIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcjEyOCA9IHJlcXVpcmUoJy4vbGliL3hvcjEyOCcpO1xuXG4vLyB4b3J3b3csIEdlb3JnZSBNYXJzYWdsaWEncyAxNjAtYml0IHhvci1zaGlmdCBjb21iaW5lZCBwbHVzIHdleWwuXG4vLyBQZXJpb2Q6IDJeMTkyLTJeMzJcbi8vIFJlcG9ydGVkIHRvIGZhaWw6IENvbGxpc2lvbk92ZXIsIFNpbXBQb2tlciwgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yd293ID0gcmVxdWlyZSgnLi9saWIveG9yd293Jyk7XG5cbi8vIHhvcnNoaWZ0NywgYnkgRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXIsIHRha2VzXG4vLyBhIGRpZmZlcmVudCBhcHByb2FjaDogaXQgYWRkcyByb2J1c3RuZXNzIGJ5IGFsbG93aW5nIG1vcmUgc2hpZnRzXG4vLyB0aGFuIE1hcnNhZ2xpYSdzIG9yaWdpbmFsIHRocmVlLiAgSXQgaXMgYSA3LXNoaWZ0IGdlbmVyYXRvclxuLy8gd2l0aCAyNTYgYml0cywgdGhhdCBwYXNzZXMgQmlnQ3J1c2ggd2l0aCBubyBzeXN0bWF0aWMgZmFpbHVyZXMuXG4vLyBQZXJpb2QgMl4yNTYtMS5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yc2hpZnQ3ID0gcmVxdWlyZSgnLi9saWIveG9yc2hpZnQ3Jyk7XG5cbi8vIHhvcjQwOTYsIGJ5IFJpY2hhcmQgQnJlbnQsIGlzIGEgNDA5Ni1iaXQgeG9yLXNoaWZ0IHdpdGggYVxuLy8gdmVyeSBsb25nIHBlcmlvZCB0aGF0IGFsc28gYWRkcyBhIFdleWwgZ2VuZXJhdG9yLiBJdCBhbHNvIHBhc3Nlc1xuLy8gQmlnQ3J1c2ggd2l0aCBubyBzeXN0ZW1hdGljIGZhaWx1cmVzLiAgSXRzIGxvbmcgcGVyaW9kIG1heVxuLy8gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIG1hbnkgZ2VuZXJhdG9ycyBhbmQgbmVlZCB0byBhdm9pZFxuLy8gY29sbGlzaW9ucy5cbi8vIFBlcmlvZDogMl40MTI4LTJeMzIuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcjQwOTYgPSByZXF1aXJlKCcuL2xpYi94b3I0MDk2Jyk7XG5cbi8vIFR5Y2hlLWksIGJ5IFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqbywgaXMgYSBiaXQtc2hpZnRpbmcgcmFuZG9tXG4vLyBudW1iZXIgZ2VuZXJhdG9yIGRlcml2ZWQgZnJvbSBDaGFDaGEsIGEgbW9kZXJuIHN0cmVhbSBjaXBoZXIuXG4vLyBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuLy8gUGVyaW9kOiB+Ml4xMjdcbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgdHljaGVpID0gcmVxdWlyZSgnLi9saWIvdHljaGVpJyk7XG5cbi8vIFRoZSBvcmlnaW5hbCBBUkM0LWJhc2VkIHBybmcgaW5jbHVkZWQgaW4gdGhpcyBsaWJyYXJ5LlxuLy8gUGVyaW9kOiB+Ml4xNjAwXG52YXIgc3IgPSByZXF1aXJlKCcuL3NlZWRyYW5kb20nKTtcblxuc3IuYWxlYSA9IGFsZWE7XG5zci54b3IxMjggPSB4b3IxMjg7XG5zci54b3J3b3cgPSB4b3J3b3c7XG5zci54b3JzaGlmdDcgPSB4b3JzaGlmdDc7XG5zci54b3I0MDk2ID0geG9yNDA5NjtcbnNyLnR5Y2hlaSA9IHR5Y2hlaTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcjtcbiIsIi8vIEEgcG9ydCBvZiBhbiBhbGdvcml0aG0gYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5jb20+LCAyMDEwXG4vLyBodHRwOi8vYmFhZ29lLmNvbS9lbi9SYW5kb21NdXNpbmdzL2phdmFzY3JpcHQvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbnF1aW5sYW4vYmV0dGVyLXJhbmRvbS1udW1iZXJzLWZvci1qYXZhc2NyaXB0LW1pcnJvclxuLy8gT3JpZ2luYWwgd29yayBpcyB1bmRlciBNSVQgbGljZW5zZSAtXG5cbi8vIENvcHlyaWdodCAoQykgMjAxMCBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLm9yZz5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gQWxlYShzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIG1hc2ggPSBNYXNoKCk7XG5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gMjA5MTYzOSAqIG1lLnMwICsgbWUuYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gICAgbWUuczAgPSBtZS5zMTtcbiAgICBtZS5zMSA9IG1lLnMyO1xuICAgIHJldHVybiBtZS5zMiA9IHQgLSAobWUuYyA9IHQgfCAwKTtcbiAgfTtcblxuICAvLyBBcHBseSB0aGUgc2VlZGluZyBhbGdvcml0aG0gZnJvbSBCYWFnb2UuXG4gIG1lLmMgPSAxO1xuICBtZS5zMCA9IG1hc2goJyAnKTtcbiAgbWUuczEgPSBtYXNoKCcgJyk7XG4gIG1lLnMyID0gbWFzaCgnICcpO1xuICBtZS5zMCAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczAgPCAwKSB7IG1lLnMwICs9IDE7IH1cbiAgbWUuczEgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMxIDwgMCkgeyBtZS5zMSArPSAxOyB9XG4gIG1lLnMyIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMiA8IDApIHsgbWUuczIgKz0gMTsgfVxuICBtYXNoID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYyA9IGYuYztcbiAgdC5zMCA9IGYuczA7XG4gIHQuczEgPSBmLnMxO1xuICB0LnMyID0gZi5zMjtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgQWxlYShzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IHhnLm5leHQ7XG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgKiAweDEwMDAwMDAwMCkgfCAwOyB9XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBybmcoKSArIChwcm5nKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjsgLy8gMl4tNTNcbiAgfTtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmZ1bmN0aW9uIE1hc2goKSB7XG4gIHZhciBuID0gMHhlZmM4MjQ5ZDtcblxuICB2YXIgbWFzaCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkYXRhID0gU3RyaW5nKGRhdGEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICB2YXIgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBoICo9IG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOyAvLyAyXjMyXG4gICAgfVxuICAgIHJldHVybiAobiA+Pj4gMCkgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICB9O1xuXG4gIHJldHVybiBtYXNoO1xufVxuXG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMuYWxlYSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwiVHljaGUtaVwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8uXG4vLyBTZWUgaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZCwgYSA9IG1lLmE7XG4gICAgYiA9IChiIDw8IDI1KSBeIChiID4+PiA3KSBeIGM7XG4gICAgYyA9IChjIC0gZCkgfCAwO1xuICAgIGQgPSAoZCA8PCAyNCkgXiAoZCA+Pj4gOCkgXiBhO1xuICAgIGEgPSAoYSAtIGIpIHwgMDtcbiAgICBtZS5iID0gYiA9IChiIDw8IDIwKSBeIChiID4+PiAxMikgXiBjO1xuICAgIG1lLmMgPSBjID0gKGMgLSBkKSB8IDA7XG4gICAgbWUuZCA9IChkIDw8IDE2KSBeIChjID4+PiAxNikgXiBhO1xuICAgIHJldHVybiBtZS5hID0gKGEgLSBiKSB8IDA7XG4gIH07XG5cbiAgLyogVGhlIGZvbGxvd2luZyBpcyBub24taW52ZXJ0ZWQgdHljaGUsIHdoaWNoIGhhcyBiZXR0ZXIgaW50ZXJuYWxcbiAgICogYml0IGRpZmZ1c2lvbiwgYnV0IHdoaWNoIGlzIGFib3V0IDI1JSBzbG93ZXIgdGhhbiB0eWNoZS1pIGluIEpTLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEgPSBtZS5hLCBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kO1xuICAgIGEgPSAobWUuYSArIG1lLmIgfCAwKSA+Pj4gMDtcbiAgICBkID0gbWUuZCBeIGE7IGQgPSBkIDw8IDE2IF4gZCA+Pj4gMTY7XG4gICAgYyA9IG1lLmMgKyBkIHwgMDtcbiAgICBiID0gbWUuYiBeIGM7IGIgPSBiIDw8IDEyIF4gZCA+Pj4gMjA7XG4gICAgbWUuYSA9IGEgPSBhICsgYiB8IDA7XG4gICAgZCA9IGQgXiBhOyBtZS5kID0gZCA9IGQgPDwgOCBeIGQgPj4+IDI0O1xuICAgIG1lLmMgPSBjID0gYyArIGQgfCAwO1xuICAgIGIgPSBiIF4gYztcbiAgICByZXR1cm4gbWUuYiA9IChiIDw8IDcgXiBiID4+PiAyNSk7XG4gIH1cbiAgKi9cblxuICBtZS5hID0gMDtcbiAgbWUuYiA9IDA7XG4gIG1lLmMgPSAyNjU0NDM1NzY5IHwgMDtcbiAgbWUuZCA9IDEzNjcxMzA1NTE7XG5cbiAgaWYgKHNlZWQgPT09IE1hdGguZmxvb3Ioc2VlZCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUuYSA9IChzZWVkIC8gMHgxMDAwMDAwMDApIHwgMDtcbiAgICBtZS5iID0gc2VlZCB8IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyAyMDsgaysrKSB7XG4gICAgbWUuYiBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5hID0gZi5hO1xuICB0LmIgPSBmLmI7XG4gIHQuYyA9IGYuYztcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMudHljaGVpID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3IxMjhcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgbWUueCA9IDA7XG4gIG1lLnkgPSAwO1xuICBtZS56ID0gMDtcbiAgbWUudyA9IDA7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gbWUueCBeIChtZS54IDw8IDExKTtcbiAgICBtZS54ID0gbWUueTtcbiAgICBtZS55ID0gbWUuejtcbiAgICBtZS56ID0gbWUudztcbiAgICByZXR1cm4gbWUudyBePSAobWUudyA+Pj4gMTkpIF4gdCBeICh0ID4+PiA4KTtcbiAgfTtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjEyOCA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgUmljaGFyZCBCcmVudCdzIFhvcmdlbnMgeG9yNDA5NiBhbGdvcml0aG0uXG4vL1xuLy8gVGhpcyBmYXN0IG5vbi1jcnlwdG9ncmFwaGljIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIGlzIGRlc2lnbmVkIGZvclxuLy8gdXNlIGluIE1vbnRlLUNhcmxvIGFsZ29yaXRobXMuIEl0IGNvbWJpbmVzIGEgbG9uZy1wZXJpb2QgeG9yc2hpZnRcbi8vIGdlbmVyYXRvciB3aXRoIGEgV2V5bCBnZW5lcmF0b3IsIGFuZCBpdCBwYXNzZXMgYWxsIGNvbW1vbiBiYXR0ZXJpZXNcbi8vIG9mIHN0YXN0aWNpYWwgdGVzdHMgZm9yIHJhbmRvbW5lc3Mgd2hpbGUgY29uc3VtaW5nIG9ubHkgYSBmZXcgbmFub3NlY29uZHNcbi8vIGZvciBlYWNoIHBybmcgZ2VuZXJhdGVkLiAgRm9yIGJhY2tncm91bmQgb24gdGhlIGdlbmVyYXRvciwgc2VlIEJyZW50J3Ncbi8vIHBhcGVyOiBcIlNvbWUgbG9uZy1wZXJpb2QgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzIHVzaW5nIHNoaWZ0cyBhbmQgeG9ycy5cIlxuLy8gaHR0cDovL2FyeGl2Lm9yZy9wZGYvMTAwNC4zMTE1djEucGRmXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHhvcjQwOTYgPSByZXF1aXJlKCd4b3I0MDk2Jyk7XG4vLyByYW5kb20gPSB4b3I0MDk2KDEpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZWQgd2l0aCBpbnQzMiBvciBzdHJpbmcuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tKCksIDAuMTUyMDQzNjQ1MDUzODU0Nyk7IC8vICgwLCAxKSByYW5nZSwgNTMgYml0cy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20uaW50MzIoKSwgMTgwNjUzNDg5Nyk7ICAgLy8gc2lnbmVkIGludDMyLCAzMiBiaXRzLlxuLy9cbi8vIEZvciBub256ZXJvIG51bWVyaWMga2V5cywgdGhpcyBpbXBlbGVtZW50YXRpb24gcHJvdmlkZXMgYSBzZXF1ZW5jZVxuLy8gaWRlbnRpY2FsIHRvIHRoYXQgYnkgQnJlbnQncyB4b3JnZW5zIDMgaW1wbGVtZW50YWlvbiBpbiBDLiAgVGhpc1xuLy8gaW1wbGVtZW50YXRpb24gYWxzbyBwcm92aWRlcyBmb3IgaW5pdGFsaXppbmcgdGhlIGdlbmVyYXRvciB3aXRoXG4vLyBzdHJpbmcgc2VlZHMsIG9yIGZvciBzYXZpbmcgYW5kIHJlc3RvcmluZyB0aGUgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci5cbi8vXG4vLyBPbiBDaHJvbWUsIHRoaXMgcHJuZyBiZW5jaG1hcmtzIGFib3V0IDIuMSB0aW1lcyBzbG93ZXIgdGhhblxuLy8gSmF2YXNjcmlwdCdzIGJ1aWx0LWluIE1hdGgucmFuZG9tKCkuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3ID0gbWUudyxcbiAgICAgICAgWCA9IG1lLlgsIGkgPSBtZS5pLCB0LCB2O1xuICAgIC8vIFVwZGF0ZSBXZXlsIGdlbmVyYXRvci5cbiAgICBtZS53ID0gdyA9ICh3ICsgMHg2MWM4ODY0NykgfCAwO1xuICAgIC8vIFVwZGF0ZSB4b3IgZ2VuZXJhdG9yLlxuICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICB2IF49IHYgPDwgMTM7XG4gICAgdCBePSB0IDw8IDE3O1xuICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgdCBePSB0ID4+PiAxMjtcbiAgICAvLyBVcGRhdGUgWG9yIGdlbmVyYXRvciBhcnJheSBzdGF0ZS5cbiAgICB2ID0gWFtpXSA9IHYgXiB0O1xuICAgIG1lLmkgPSBpO1xuICAgIC8vIFJlc3VsdCBpcyB0aGUgY29tYmluYXRpb24uXG4gICAgcmV0dXJuICh2ICsgKHcgXiAodyA+Pj4gMTYpKSkgfCAwO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgdCwgdiwgaSwgaiwgdywgWCA9IFtdLCBsaW1pdCA9IDEyODtcbiAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgLy8gTnVtZXJpYyBzZWVkcyBpbml0aWFsaXplIHYsIHdoaWNoIGlzIHVzZWQgdG8gZ2VuZXJhdGVzIFguXG4gICAgICB2ID0gc2VlZDtcbiAgICAgIHNlZWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdHJpbmcgc2VlZHMgYXJlIG1peGVkIGludG8gdiBhbmQgWCBvbmUgY2hhcmFjdGVyIGF0IGEgdGltZS5cbiAgICAgIHNlZWQgPSBzZWVkICsgJ1xcMCc7XG4gICAgICB2ID0gMDtcbiAgICAgIGxpbWl0ID0gTWF0aC5tYXgobGltaXQsIHNlZWQubGVuZ3RoKTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBjaXJjdWxhciBhcnJheSBhbmQgd2V5bCB2YWx1ZS5cbiAgICBmb3IgKGkgPSAwLCBqID0gLTMyOyBqIDwgbGltaXQ7ICsraikge1xuICAgICAgLy8gUHV0IHRoZSB1bmljb2RlIGNoYXJhY3RlcnMgaW50byB0aGUgYXJyYXksIGFuZCBzaHVmZmxlIHRoZW0uXG4gICAgICBpZiAoc2VlZCkgdiBePSBzZWVkLmNoYXJDb2RlQXQoKGogKyAzMikgJSBzZWVkLmxlbmd0aCk7XG4gICAgICAvLyBBZnRlciAzMiBzaHVmZmxlcywgdGFrZSB2IGFzIHRoZSBzdGFydGluZyB3IHZhbHVlLlxuICAgICAgaWYgKGogPT09IDApIHcgPSB2O1xuICAgICAgdiBePSB2IDw8IDEwO1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHYgXj0gdiA8PCA0O1xuICAgICAgdiBePSB2ID4+PiAxMztcbiAgICAgIGlmIChqID49IDApIHtcbiAgICAgICAgdyA9ICh3ICsgMHg2MWM4ODY0NykgfCAwOyAgICAgLy8gV2V5bC5cbiAgICAgICAgdCA9IChYW2ogJiAxMjddIF49ICh2ICsgdykpOyAgLy8gQ29tYmluZSB4b3IgYW5kIHdleWwgdG8gaW5pdCBhcnJheS5cbiAgICAgICAgaSA9ICgwID09IHQpID8gaSArIDEgOiAwOyAgICAgLy8gQ291bnQgemVyb2VzLlxuICAgICAgfVxuICAgIH1cbiAgICAvLyBXZSBoYXZlIGRldGVjdGVkIGFsbCB6ZXJvZXM7IG1ha2UgdGhlIGtleSBub256ZXJvLlxuICAgIGlmIChpID49IDEyOCkge1xuICAgICAgWFsoc2VlZCAmJiBzZWVkLmxlbmd0aCB8fCAwKSAmIDEyN10gPSAtMTtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBnZW5lcmF0b3IgNTEyIHRpbWVzIHRvIGZ1cnRoZXIgbWl4IHRoZSBzdGF0ZSBiZWZvcmUgdXNpbmcgaXQuXG4gICAgLy8gRmFjdG9yaW5nIHRoaXMgYXMgYSBmdW5jdGlvbiBzbG93cyB0aGUgbWFpbiBnZW5lcmF0b3IsIHNvIGl0IGlzIGp1c3RcbiAgICAvLyB1bnJvbGxlZCBoZXJlLiAgVGhlIHdleWwgZ2VuZXJhdG9yIGlzIG5vdCBhZHZhbmNlZCB3aGlsZSB3YXJtaW5nIHVwLlxuICAgIGkgPSAxMjc7XG4gICAgZm9yIChqID0gNCAqIDEyODsgaiA+IDA7IC0taikge1xuICAgICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgICB2IF49IHYgPDwgMTM7XG4gICAgICB0IF49IHQgPDwgMTc7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdCBePSB0ID4+PiAxMjtcbiAgICAgIFhbaV0gPSB2IF4gdDtcbiAgICB9XG4gICAgLy8gU3RvcmluZyBzdGF0ZSBhcyBvYmplY3QgbWVtYmVycyBpcyBmYXN0ZXIgdGhhbiB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcy5cbiAgICBtZS53ID0gdztcbiAgICBtZS5YID0gWDtcbiAgICBtZS5pID0gaTtcbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LncgPSBmLnc7XG4gIHQuWCA9IGYuWC5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLlgpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3I0MDk2ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdyBvYmplY3Qgb3IgZ2xvYmFsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcnNoaWZ0N1wiIGFsZ29yaXRobSBieVxuLy8gRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXI6XG4vLyBcIk9uIHRoZSBYb3Jnc2hpZnQgUmFuZG9tIE51bWJlciBHZW5lcmF0b3JzXCJcbi8vIGh0dHA6Ly9zYWx1Yy5lbmdyLnVjb25uLmVkdS9yZWZzL2NyeXB0by9ybmcvcGFubmV0b24wNW9udGhleG9yc2hpZnQucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVwZGF0ZSB4b3IgZ2VuZXJhdG9yLlxuICAgIHZhciBYID0gbWUueCwgaSA9IG1lLmksIHQsIHYsIHc7XG4gICAgdCA9IFhbaV07IHQgXj0gKHQgPj4+IDcpOyB2ID0gdCBeICh0IDw8IDI0KTtcbiAgICB0ID0gWFsoaSArIDEpICYgN107IHYgXj0gdCBeICh0ID4+PiAxMCk7XG4gICAgdCA9IFhbKGkgKyAzKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMyk7XG4gICAgdCA9IFhbKGkgKyA0KSAmIDddOyB2IF49IHQgXiAodCA8PCA3KTtcbiAgICB0ID0gWFsoaSArIDcpICYgN107IHQgPSB0IF4gKHQgPDwgMTMpOyB2IF49IHQgXiAodCA8PCA5KTtcbiAgICBYW2ldID0gdjtcbiAgICBtZS5pID0gKGkgKyAxKSAmIDc7XG4gICAgcmV0dXJuIHY7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciBqLCB3LCBYID0gW107XG5cbiAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgLy8gU2VlZCBzdGF0ZSBhcnJheSB1c2luZyBhIDMyLWJpdCBpbnRlZ2VyLlxuICAgICAgdyA9IFhbMF0gPSBzZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIHVzaW5nIGEgc3RyaW5nLlxuICAgICAgc2VlZCA9ICcnICsgc2VlZDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBzZWVkLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIFhbaiAmIDddID0gKFhbaiAmIDddIDw8IDE1KSBeXG4gICAgICAgICAgICAoc2VlZC5jaGFyQ29kZUF0KGopICsgWFsoaiArIDEpICYgN10gPDwgMTMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFbmZvcmNlIGFuIGFycmF5IGxlbmd0aCBvZiA4LCBub3QgYWxsIHplcm9lcy5cbiAgICB3aGlsZSAoWC5sZW5ndGggPCA4KSBYLnB1c2goMCk7XG4gICAgZm9yIChqID0gMDsgaiA8IDggJiYgWFtqXSA9PT0gMDsgKytqKTtcbiAgICBpZiAoaiA9PSA4KSB3ID0gWFs3XSA9IC0xOyBlbHNlIHcgPSBYW2pdO1xuXG4gICAgbWUueCA9IFg7XG4gICAgbWUuaSA9IDA7XG5cbiAgICAvLyBEaXNjYXJkIGFuIGluaXRpYWwgMjU2IHZhbHVlcy5cbiAgICBmb3IgKGogPSAyNTY7IGogPiAwOyAtLWopIHtcbiAgICAgIG1lLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueC5zbGljZSgpO1xuICB0LmkgPSBmLmk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS54KSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yc2hpZnQ3ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yd293XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IChtZS54IF4gKG1lLnggPj4+IDIpKTtcbiAgICBtZS54ID0gbWUueTsgbWUueSA9IG1lLno7IG1lLnogPSBtZS53OyBtZS53ID0gbWUudjtcbiAgICByZXR1cm4gKG1lLmQgPSAobWUuZCArIDM2MjQzNyB8IDApKSArXG4gICAgICAgKG1lLnYgPSAobWUudiBeIChtZS52IDw8IDQpKSBeICh0IF4gKHQgPDwgMSkpKSB8IDA7XG4gIH07XG5cbiAgbWUueCA9IDA7XG4gIG1lLnkgPSAwO1xuICBtZS56ID0gMDtcbiAgbWUudyA9IDA7XG4gIG1lLnYgPSAwO1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBpZiAoayA9PSBzdHJzZWVkLmxlbmd0aCkge1xuICAgICAgbWUuZCA9IG1lLnggPDwgMTAgXiBtZS54ID4+PiA0O1xuICAgIH1cbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgdC52ID0gZi52O1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcndvdyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLypcbkNvcHlyaWdodCAyMDE5IERhdmlkIEJhdS5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG5JTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcblRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG5TT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIHBvb2wsIG1hdGgpIHtcbi8vXG4vLyBUaGUgZm9sbG93aW5nIGNvbnN0YW50cyBhcmUgcmVsYXRlZCB0byBJRUVFIDc1NCBsaW1pdHMuXG4vL1xuXG52YXIgd2lkdGggPSAyNTYsICAgICAgICAvLyBlYWNoIFJDNCBvdXRwdXQgaXMgMCA8PSB4IDwgMjU2XG4gICAgY2h1bmtzID0gNiwgICAgICAgICAvLyBhdCBsZWFzdCBzaXggUkM0IG91dHB1dHMgZm9yIGVhY2ggZG91YmxlXG4gICAgZGlnaXRzID0gNTIsICAgICAgICAvLyB0aGVyZSBhcmUgNTIgc2lnbmlmaWNhbnQgZGlnaXRzIGluIGEgZG91YmxlXG4gICAgcm5nbmFtZSA9ICdyYW5kb20nLCAvLyBybmduYW1lOiBuYW1lIGZvciBNYXRoLnJhbmRvbSBhbmQgTWF0aC5zZWVkcmFuZG9tXG4gICAgc3RhcnRkZW5vbSA9IG1hdGgucG93KHdpZHRoLCBjaHVua3MpLFxuICAgIHNpZ25pZmljYW5jZSA9IG1hdGgucG93KDIsIGRpZ2l0cyksXG4gICAgb3ZlcmZsb3cgPSBzaWduaWZpY2FuY2UgKiAyLFxuICAgIG1hc2sgPSB3aWR0aCAtIDEsXG4gICAgbm9kZWNyeXB0bzsgICAgICAgICAvLyBub2RlLmpzIGNyeXB0byBtb2R1bGUsIGluaXRpYWxpemVkIGF0IHRoZSBib3R0b20uXG5cbi8vXG4vLyBzZWVkcmFuZG9tKClcbi8vIFRoaXMgaXMgdGhlIHNlZWRyYW5kb20gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLlxuLy9cbmZ1bmN0aW9uIHNlZWRyYW5kb20oc2VlZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGtleSA9IFtdO1xuICBvcHRpb25zID0gKG9wdGlvbnMgPT0gdHJ1ZSkgPyB7IGVudHJvcHk6IHRydWUgfSA6IChvcHRpb25zIHx8IHt9KTtcblxuICAvLyBGbGF0dGVuIHRoZSBzZWVkIHN0cmluZyBvciBidWlsZCBvbmUgZnJvbSBsb2NhbCBlbnRyb3B5IGlmIG5lZWRlZC5cbiAgdmFyIHNob3J0c2VlZCA9IG1peGtleShmbGF0dGVuKFxuICAgIG9wdGlvbnMuZW50cm9weSA/IFtzZWVkLCB0b3N0cmluZyhwb29sKV0gOlxuICAgIChzZWVkID09IG51bGwpID8gYXV0b3NlZWQoKSA6IHNlZWQsIDMpLCBrZXkpO1xuXG4gIC8vIFVzZSB0aGUgc2VlZCB0byBpbml0aWFsaXplIGFuIEFSQzQgZ2VuZXJhdG9yLlxuICB2YXIgYXJjNCA9IG5ldyBBUkM0KGtleSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgcmFuZG9tIGRvdWJsZSBpbiBbMCwgMSkgdGhhdCBjb250YWluc1xuICAvLyByYW5kb21uZXNzIGluIGV2ZXJ5IGJpdCBvZiB0aGUgbWFudGlzc2Egb2YgdGhlIElFRUUgNzU0IHZhbHVlLlxuICB2YXIgcHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gYXJjNC5nKGNodW5rcyksICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBudW1lcmF0b3IgbiA8IDIgXiA0OFxuICAgICAgICBkID0gc3RhcnRkZW5vbSwgICAgICAgICAgICAgICAgIC8vICAgYW5kIGRlbm9taW5hdG9yIGQgPSAyIF4gNDguXG4gICAgICAgIHggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbmQgbm8gJ2V4dHJhIGxhc3QgYnl0ZScuXG4gICAgd2hpbGUgKG4gPCBzaWduaWZpY2FuY2UpIHsgICAgICAgICAgLy8gRmlsbCB1cCBhbGwgc2lnbmlmaWNhbnQgZGlnaXRzIGJ5XG4gICAgICBuID0gKG4gKyB4KSAqIHdpZHRoOyAgICAgICAgICAgICAgLy8gICBzaGlmdGluZyBudW1lcmF0b3IgYW5kXG4gICAgICBkICo9IHdpZHRoOyAgICAgICAgICAgICAgICAgICAgICAgLy8gICBkZW5vbWluYXRvciBhbmQgZ2VuZXJhdGluZyBhXG4gICAgICB4ID0gYXJjNC5nKDEpOyAgICAgICAgICAgICAgICAgICAgLy8gICBuZXcgbGVhc3Qtc2lnbmlmaWNhbnQtYnl0ZS5cbiAgICB9XG4gICAgd2hpbGUgKG4gPj0gb3ZlcmZsb3cpIHsgICAgICAgICAgICAgLy8gVG8gYXZvaWQgcm91bmRpbmcgdXAsIGJlZm9yZSBhZGRpbmdcbiAgICAgIG4gLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGxhc3QgYnl0ZSwgc2hpZnQgZXZlcnl0aGluZ1xuICAgICAgZCAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmlnaHQgdXNpbmcgaW50ZWdlciBtYXRoIHVudGlsXG4gICAgICB4ID4+Pj0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGV4YWN0bHkgdGhlIGRlc2lyZWQgYml0cy5cbiAgICB9XG4gICAgcmV0dXJuIChuICsgeCkgLyBkOyAgICAgICAgICAgICAgICAgLy8gRm9ybSB0aGUgbnVtYmVyIHdpdGhpbiBbMCwgMSkuXG4gIH07XG5cbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIHwgMDsgfVxuICBwcm5nLnF1aWNrID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgLyAweDEwMDAwMDAwMDsgfVxuICBwcm5nLmRvdWJsZSA9IHBybmc7XG5cbiAgLy8gTWl4IHRoZSByYW5kb21uZXNzIGludG8gYWNjdW11bGF0ZWQgZW50cm9weS5cbiAgbWl4a2V5KHRvc3RyaW5nKGFyYzQuUyksIHBvb2wpO1xuXG4gIC8vIENhbGxpbmcgY29udmVudGlvbjogd2hhdCB0byByZXR1cm4gYXMgYSBmdW5jdGlvbiBvZiBwcm5nLCBzZWVkLCBpc19tYXRoLlxuICByZXR1cm4gKG9wdGlvbnMucGFzcyB8fCBjYWxsYmFjayB8fFxuICAgICAgZnVuY3Rpb24ocHJuZywgc2VlZCwgaXNfbWF0aF9jYWxsLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAvLyBMb2FkIHRoZSBhcmM0IHN0YXRlIGZyb20gdGhlIGdpdmVuIHN0YXRlIGlmIGl0IGhhcyBhbiBTIGFycmF5LlxuICAgICAgICAgIGlmIChzdGF0ZS5TKSB7IGNvcHkoc3RhdGUsIGFyYzQpOyB9XG4gICAgICAgICAgLy8gT25seSBwcm92aWRlIHRoZSAuc3RhdGUgbWV0aG9kIGlmIHJlcXVlc3RlZCB2aWEgb3B0aW9ucy5zdGF0ZS5cbiAgICAgICAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KGFyYzQsIHt9KTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY2FsbGVkIGFzIGEgbWV0aG9kIG9mIE1hdGggKE1hdGguc2VlZHJhbmRvbSgpKSwgbXV0YXRlXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIGJlY2F1c2UgdGhhdCBpcyBob3cgc2VlZHJhbmRvbS5qcyBoYXMgd29ya2VkIHNpbmNlIHYxLjAuXG4gICAgICAgIGlmIChpc19tYXRoX2NhbGwpIHsgbWF0aFtybmduYW1lXSA9IHBybmc7IHJldHVybiBzZWVkOyB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyBhIG5ld2VyIGNhbGxpbmcgY29udmVudGlvbiwgc28gcmV0dXJuIHRoZVxuICAgICAgICAvLyBwcm5nIGRpcmVjdGx5LlxuICAgICAgICBlbHNlIHJldHVybiBwcm5nO1xuICAgICAgfSkoXG4gIHBybmcsXG4gIHNob3J0c2VlZCxcbiAgJ2dsb2JhbCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuZ2xvYmFsIDogKHRoaXMgPT0gbWF0aCksXG4gIG9wdGlvbnMuc3RhdGUpO1xufVxuXG4vL1xuLy8gQVJDNFxuLy9cbi8vIEFuIEFSQzQgaW1wbGVtZW50YXRpb24uICBUaGUgY29uc3RydWN0b3IgdGFrZXMgYSBrZXkgaW4gdGhlIGZvcm0gb2Zcbi8vIGFuIGFycmF5IG9mIGF0IG1vc3QgKHdpZHRoKSBpbnRlZ2VycyB0aGF0IHNob3VsZCBiZSAwIDw9IHggPCAod2lkdGgpLlxuLy9cbi8vIFRoZSBnKGNvdW50KSBtZXRob2QgcmV0dXJucyBhIHBzZXVkb3JhbmRvbSBpbnRlZ2VyIHRoYXQgY29uY2F0ZW5hdGVzXG4vLyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgZnJvbSBBUkM0LiAgSXRzIHJldHVybiB2YWx1ZSBpcyBhIG51bWJlciB4XG4vLyB0aGF0IGlzIGluIHRoZSByYW5nZSAwIDw9IHggPCAod2lkdGggXiBjb3VudCkuXG4vL1xuZnVuY3Rpb24gQVJDNChrZXkpIHtcbiAgdmFyIHQsIGtleWxlbiA9IGtleS5sZW5ndGgsXG4gICAgICBtZSA9IHRoaXMsIGkgPSAwLCBqID0gbWUuaSA9IG1lLmogPSAwLCBzID0gbWUuUyA9IFtdO1xuXG4gIC8vIFRoZSBlbXB0eSBrZXkgW10gaXMgdHJlYXRlZCBhcyBbMF0uXG4gIGlmICgha2V5bGVuKSB7IGtleSA9IFtrZXlsZW4rK107IH1cblxuICAvLyBTZXQgdXAgUyB1c2luZyB0aGUgc3RhbmRhcmQga2V5IHNjaGVkdWxpbmcgYWxnb3JpdGhtLlxuICB3aGlsZSAoaSA8IHdpZHRoKSB7XG4gICAgc1tpXSA9IGkrKztcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyBrZXlbaSAlIGtleWxlbl0gKyAodCA9IHNbaV0pKV07XG4gICAgc1tqXSA9IHQ7XG4gIH1cblxuICAvLyBUaGUgXCJnXCIgbWV0aG9kIHJldHVybnMgdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGFzIG9uZSBudW1iZXIuXG4gIChtZS5nID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAvLyBVc2luZyBpbnN0YW5jZSBtZW1iZXJzIGluc3RlYWQgb2YgY2xvc3VyZSBzdGF0ZSBuZWFybHkgZG91YmxlcyBzcGVlZC5cbiAgICB2YXIgdCwgciA9IDAsXG4gICAgICAgIGkgPSBtZS5pLCBqID0gbWUuaiwgcyA9IG1lLlM7XG4gICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgIHQgPSBzW2kgPSBtYXNrICYgKGkgKyAxKV07XG4gICAgICByID0gciAqIHdpZHRoICsgc1ttYXNrICYgKChzW2ldID0gc1tqID0gbWFzayAmIChqICsgdCldKSArIChzW2pdID0gdCkpXTtcbiAgICB9XG4gICAgbWUuaSA9IGk7IG1lLmogPSBqO1xuICAgIHJldHVybiByO1xuICAgIC8vIEZvciByb2J1c3QgdW5wcmVkaWN0YWJpbGl0eSwgdGhlIGZ1bmN0aW9uIGNhbGwgYmVsb3cgYXV0b21hdGljYWxseVxuICAgIC8vIGRpc2NhcmRzIGFuIGluaXRpYWwgYmF0Y2ggb2YgdmFsdWVzLiAgVGhpcyBpcyBjYWxsZWQgUkM0LWRyb3BbMjU2XS5cbiAgICAvLyBTZWUgaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9cnNhK2ZsdWhyZXIrcmVzcG9uc2UmYnRuSVxuICB9KSh3aWR0aCk7XG59XG5cbi8vXG4vLyBjb3B5KClcbi8vIENvcGllcyBpbnRlcm5hbCBzdGF0ZSBvZiBBUkM0IHRvIG9yIGZyb20gYSBwbGFpbiBvYmplY3QuXG4vL1xuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC5qID0gZi5qO1xuICB0LlMgPSBmLlMuc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG4vL1xuLy8gZmxhdHRlbigpXG4vLyBDb252ZXJ0cyBhbiBvYmplY3QgdHJlZSB0byBuZXN0ZWQgYXJyYXlzIG9mIHN0cmluZ3MuXG4vL1xuZnVuY3Rpb24gZmxhdHRlbihvYmosIGRlcHRoKSB7XG4gIHZhciByZXN1bHQgPSBbXSwgdHlwID0gKHR5cGVvZiBvYmopLCBwcm9wO1xuICBpZiAoZGVwdGggJiYgdHlwID09ICdvYmplY3QnKSB7XG4gICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgdHJ5IHsgcmVzdWx0LnB1c2goZmxhdHRlbihvYmpbcHJvcF0sIGRlcHRoIC0gMSkpOyB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuICByZXR1cm4gKHJlc3VsdC5sZW5ndGggPyByZXN1bHQgOiB0eXAgPT0gJ3N0cmluZycgPyBvYmogOiBvYmogKyAnXFwwJyk7XG59XG5cbi8vXG4vLyBtaXhrZXkoKVxuLy8gTWl4ZXMgYSBzdHJpbmcgc2VlZCBpbnRvIGEga2V5IHRoYXQgaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMsIGFuZFxuLy8gcmV0dXJucyBhIHNob3J0ZW5lZCBzdHJpbmcgc2VlZCB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHJlc3VsdCBrZXkuXG4vL1xuZnVuY3Rpb24gbWl4a2V5KHNlZWQsIGtleSkge1xuICB2YXIgc3RyaW5nc2VlZCA9IHNlZWQgKyAnJywgc21lYXIsIGogPSAwO1xuICB3aGlsZSAoaiA8IHN0cmluZ3NlZWQubGVuZ3RoKSB7XG4gICAga2V5W21hc2sgJiBqXSA9XG4gICAgICBtYXNrICYgKChzbWVhciBePSBrZXlbbWFzayAmIGpdICogMTkpICsgc3RyaW5nc2VlZC5jaGFyQ29kZUF0KGorKykpO1xuICB9XG4gIHJldHVybiB0b3N0cmluZyhrZXkpO1xufVxuXG4vL1xuLy8gYXV0b3NlZWQoKVxuLy8gUmV0dXJucyBhbiBvYmplY3QgZm9yIGF1dG9zZWVkaW5nLCB1c2luZyB3aW5kb3cuY3J5cHRvIGFuZCBOb2RlIGNyeXB0b1xuLy8gbW9kdWxlIGlmIGF2YWlsYWJsZS5cbi8vXG5mdW5jdGlvbiBhdXRvc2VlZCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3V0O1xuICAgIGlmIChub2RlY3J5cHRvICYmIChvdXQgPSBub2RlY3J5cHRvLnJhbmRvbUJ5dGVzKSkge1xuICAgICAgLy8gVGhlIHVzZSBvZiAnb3V0JyB0byByZW1lbWJlciByYW5kb21CeXRlcyBtYWtlcyB0aWdodCBtaW5pZmllZCBjb2RlLlxuICAgICAgb3V0ID0gb3V0KHdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ID0gbmV3IFVpbnQ4QXJyYXkod2lkdGgpO1xuICAgICAgKGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMob3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRvc3RyaW5nKG91dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgYnJvd3NlciA9IGdsb2JhbC5uYXZpZ2F0b3IsXG4gICAgICAgIHBsdWdpbnMgPSBicm93c2VyICYmIGJyb3dzZXIucGx1Z2lucztcbiAgICByZXR1cm4gWytuZXcgRGF0ZSwgZ2xvYmFsLCBwbHVnaW5zLCBnbG9iYWwuc2NyZWVuLCB0b3N0cmluZyhwb29sKV07XG4gIH1cbn1cblxuLy9cbi8vIHRvc3RyaW5nKClcbi8vIENvbnZlcnRzIGFuIGFycmF5IG9mIGNoYXJjb2RlcyB0byBhIHN0cmluZ1xuLy9cbmZ1bmN0aW9uIHRvc3RyaW5nKGEpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoMCwgYSk7XG59XG5cbi8vXG4vLyBXaGVuIHNlZWRyYW5kb20uanMgaXMgbG9hZGVkLCB3ZSBpbW1lZGlhdGVseSBtaXggYSBmZXcgYml0c1xuLy8gZnJvbSB0aGUgYnVpbHQtaW4gUk5HIGludG8gdGhlIGVudHJvcHkgcG9vbC4gIEJlY2F1c2Ugd2UgZG9cbi8vIG5vdCB3YW50IHRvIGludGVyZmVyZSB3aXRoIGRldGVybWluaXN0aWMgUFJORyBzdGF0ZSBsYXRlcixcbi8vIHNlZWRyYW5kb20gd2lsbCBub3QgY2FsbCBtYXRoLnJhbmRvbSBvbiBpdHMgb3duIGFnYWluIGFmdGVyXG4vLyBpbml0aWFsaXphdGlvbi5cbi8vXG5taXhrZXkobWF0aC5yYW5kb20oKSwgcG9vbCk7XG5cbi8vXG4vLyBOb2RlanMgYW5kIEFNRCBzdXBwb3J0OiBleHBvcnQgdGhlIGltcGxlbWVudGF0aW9uIGFzIGEgbW9kdWxlIHVzaW5nXG4vLyBlaXRoZXIgY29udmVudGlvbi5cbi8vXG5pZiAoKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gc2VlZHJhbmRvbTtcbiAgLy8gV2hlbiBpbiBub2RlLmpzLCB0cnkgdXNpbmcgY3J5cHRvIHBhY2thZ2UgZm9yIGF1dG9zZWVkaW5nLlxuICB0cnkge1xuICAgIG5vZGVjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgfSBjYXRjaCAoZXgpIHt9XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VlZHJhbmRvbTsgfSk7XG59IGVsc2Uge1xuICAvLyBXaGVuIGluY2x1ZGVkIGFzIGEgcGxhaW4gc2NyaXB0LCBzZXQgdXAgTWF0aC5zZWVkcmFuZG9tIGdsb2JhbC5cbiAgbWF0aFsnc2VlZCcgKyBybmduYW1lXSA9IHNlZWRyYW5kb207XG59XG5cblxuLy8gRW5kIGFub255bW91cyBzY29wZSwgYW5kIHBhc3MgaW5pdGlhbCB2YWx1ZXMuXG59KShcbiAgLy8gZ2xvYmFsOiBgc2VsZmAgaW4gYnJvd3NlcnMgKGluY2x1ZGluZyBzdHJpY3QgbW9kZSBhbmQgd2ViIHdvcmtlcnMpLFxuICAvLyBvdGhlcndpc2UgYHRoaXNgIGluIE5vZGUgYW5kIG90aGVyIGVudmlyb25tZW50c1xuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSA/IHNlbGYgOiB0aGlzLFxuICBbXSwgICAgIC8vIHBvb2w6IGVudHJvcHkgcG9vbCBzdGFydHMgZW1wdHlcbiAgTWF0aCAgICAvLyBtYXRoOiBwYWNrYWdlIGNvbnRhaW5pbmcgcmFuZG9tLCBwb3csIGFuZCBzZWVkcmFuZG9tXG4pO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVUYXNrLCB7IGxvYWRUYXNrc0Zyb21TdG9yYWdlLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBjbGVhclZpZXdDdHIgZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGFkZFRhc2tDdHJzIH0gZnJvbSBcIi4vYXBwVUlcIjtcbmltcG9ydCB7IGFkZFRhc2tFdmVudExpcyB9IGZyb20gXCIuL2xpc3RVSVwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW5Gb3JtKHRpdGxlLCBjdHIsIHRvRWRpdCkge1xuICBjb25zdCBhZGROZXcgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYWRkLW5ld1wiLCBjdHIsIFwiXCIsIFtbXCJpZFwiLCBcImFkZC1uZXdcIl1dKTtcbiAgY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaDEtbmV3XCIsIGFkZE5ldywgdGl0bGUpO1xuICBjb25zdCBmb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJmb3JtXCIsIGFkZE5ldyk7XG4gIGNvbnN0IGNsb3NlQ3RyID0gcmVuZGVyQ2xvc2VCdG4oZm9ybSk7XG4gIGNvbnN0IHRpdGxlQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tY3RyXCIsIGZvcm0pO1xuICBjb25zdCBkZXNjQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tY3RyXCIsIGZvcm0pO1xuICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgdGl0bGVDdHIsIFwiVGl0bGVcIiwgW1tcImZvclwiLCBcImlucHV0VGl0bGVcIl1dKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJpbnB1dFwiLCB0aXRsZUN0ciwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgXCJpbnB1dFRpdGxlXCJdLFxuICAgICAgW1widHlwZVwiLCBcInRleHRcIl0sXG4gICAgICBbXCJyZXF1aXJlZFwiLCBcIlwiXSxcbiAgICAgIFtcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAodGl0bGUgPSBcIlRhc2tcIiA/IFwiRG8gdGhlIGdyb2Nlcnkgc2hvcFwiIDogXCJIb3VzZSByZW5vdmF0aW9uXCIpLFxuICAgICAgXSxcbiAgICAgIFtcIm1heGxlbmd0aFwiLCBcIjUwXCJdLFxuICAgICAgW1widmFsdWVcIiwgdG9FZGl0ID8gdG9FZGl0LnRpdGxlIDogXCJcIl0sXG4gICAgXSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBkZXNjQ3RyLCBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIiwgW1xuICAgIFtcImZvclwiLCBcImlucHV0RGVzY1wiXSxcbiAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwidGV4dGFyZWFcIixcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIGRlc2NDdHIsXG4gICAgICB0b0VkaXQgPyB0b0VkaXQuZGVzY3JpcHRpb24gOiBcIlwiLFxuICAgICAgW1xuICAgICAgICBbXCJpZFwiLCBcImlucHV0RGVzY1wiXSxcbiAgICAgICAgW1wicm93c1wiLCBcIjJcIl0sXG4gICAgICAgIFtcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgKHRpdGxlID0gXCJUYXNrXCJcbiAgICAgICAgICAgID8gXCJFZ2dzLCBtaWxrLCBjZXJlYWwsIGJyZWFkLCBiYW5hbmFzXCJcbiAgICAgICAgICAgIDogXCJUYXNrcyBmb3IgcHJvamVjdCBraWNrLW9mZlwiKSxcbiAgICAgICAgXSxcbiAgICAgICAgW1wibWF4bGVuZ3RoXCIsIFwiMjUwXCJdLFxuICAgICAgXVxuICAgICk7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3Q3RyKCkge1xuICBjb25zdCB2aWV3Q3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3LWN0clwiKTtcbiAgcmV0dXJuIHZpZXdDdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDbG9zZUJ0bihjdHIpIHtcbiAgY29uc3QgY2xvc2VCdG5DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY2xvc2UtY3RyXCIsIGN0cik7XG4gIGNvbnN0IGNsb3NlQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcImNsb3NlLWJ0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEteG1hcmtcIl0sXG4gICAgY2xvc2VCdG5DdHIsXG4gICAgXCJcIixcbiAgICBbW1wiaWRcIiwgXCJjbG9zZS1idG5cIl1dXG4gICk7XG4gIHJldHVybiBjbG9zZUJ0bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN1Ym1pdChjdHIpIHtcbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInN1Ym1pdEJ0blwiLCBjdHIsIFwiTGlzdCBpdFwiLCBbXG4gICAgW1wiaWRcIiwgXCJzdWJtaXRUYXNrQnRuXCJdLFxuICAgIFtcInR5cGVcIiwgXCJzdWJtaXRcIl0sXG4gIF0pO1xuICByZXR1cm4gc3VibWl0QnRuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGVsZXRlKGN0cikge1xuICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlQnRuXCIsIGN0ciwgXCJEZWxldGUgaXRcIiwgW1xuICAgIFtcImlkXCIsIFwiZGVsZXRlQnRuXCJdLFxuICBdKTtcbiAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cbiIsImltcG9ydCByZW5kZXJNYWluRm9ybSwge1xuICByZW5kZXJDbG9zZUJ0bixcbiAgZ2V0Vmlld0N0cixcbiAgcmVuZGVyRGVsZXRlLFxuICByZW5kZXJTdWJtaXQsXG59IGZyb20gXCIuL2FkZE5ld1wiO1xuaW1wb3J0IGNyZWF0ZUxpc3QsIHsgbG9hZExpc3RzRnJvbVN0b3JhZ2UsIGRlbGV0ZUxpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgY2xlYXJWaWV3Q3RyIGZyb20gXCIuXCI7XG5pbXBvcnQgeyBhZGRMaXN0RXZlbnRMaXMgfSBmcm9tIFwiLi9hbGxMaXN0c1VJXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgXCJlbW9qaS1waWNrZXItZWxlbWVudFwiO1xuXG5sZXQgZWRpdGVkID0gZmFsc2U7XG5sZXQgZWRpdGVkSW5kZXg7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMaXN0Rm9ybShsaXN0VG9FZGl0KSB7XG4gIGNvbnN0IHZpZXdDdHIgPSBnZXRWaWV3Q3RyKCk7XG4gIGNvbnN0IG1haW5Gb3JtID0gcmVuZGVyTWFpbkZvcm0oXCJMaXN0XCIsIHZpZXdDdHIsIGxpc3RUb0VkaXQpO1xuICBjb25zdCBpY29uQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNob29zZS1pY29uLWN0clwiLCBtYWluRm9ybSk7XG4gIGNvbnN0IGljb25CdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiaWNvbi1idG5cIiwgaWNvbkN0ciwgXCJBZGQgaWNvblwiLCBbXG4gICAgW1wiaWRcIiwgXCJpY29uLWJ0blwiXSxcbiAgXSk7XG4gIGNvbnN0IHNlbGVjdGVkRW1vamkgPSByZW5kZXJTZWxlY3RlZEVtb2ppKGljb25DdHIpO1xuICBjb25zdCBlbW9qaVBpY2tlciA9IHJlbmRlckVtb2ppUGlja2VyKG1haW5Gb3JtLCBzZWxlY3RlZEVtb2ppKTtcbiAgY29uc3QgYnV0dG9uQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImJ1dHRvbi1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBzdWJtaXRCdG4gPSByZW5kZXJTdWJtaXQoYnV0dG9uQ3RyKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gcmVuZGVyRGVsZXRlKGJ1dHRvbkN0cik7XG4gIGljb25CdG5FTChpY29uQnRuLCBlbW9qaVBpY2tlcik7XG4gIHN1Ym1pdExpc3RFTChzdWJtaXRCdG4pO1xuICBkZWxldGVMaXN0RUwoZGVsZXRlQnRuKTtcbiAgY2xvc2VMaXN0RUwoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWRFbW9qaShtYWluRm9ybSkge1xuICAvLyBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJzZWxlY3QtZW1vamlcIiwgbWFpbkZvcm0sIFwiTGlzdCBJY29uXCIsIFtcbiAgLy8gICBbXCJmb3JcIiwgXCJzZWxlY3RlZC1lbW9qaVwiXSxcbiAgLy8gXSk7XG4gIGNvbnN0IHNlbGVjdGVkRW1vamkgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJzZWxlY3RlZC1lbW9qaVwiLCBtYWluRm9ybSwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwic2VsZWN0ZWQtZW1vamlcIl0sXG4gICAgW1widGl0bGVcIiwgXCJWaWV3IExpc3RcIl0sXG4gIF0pO1xuXG4gIHJldHVybiBzZWxlY3RlZEVtb2ppO1xufVxuXG5mdW5jdGlvbiByZW5kZXJFbW9qaVBpY2tlcihtYWluRm9ybSwgc2VsZWN0ZWRFbW9qaSkge1xuICBjb25zdCBlbW9qaVBpY2tlciA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJlbW9qaS1waWNrZXJcIixcbiAgICBbXCJlbW9qaS1waWNrZXJcIiwgXCJoaWRkZW5cIl0sXG4gICAgbWFpbkZvcm1cbiAgKTtcbiAgZW1vamlQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVtb2ppLWNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2VsZWN0ZWRFbW9qaS52YWx1ZSA9IGUuZGV0YWlsLnVuaWNvZGU7XG4gICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIHJldHVybiBlbW9qaVBpY2tlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRlZExpc3RMb2coaW5kZXgpIHtcbiAgZWRpdGVkSW5kZXggPSBpbmRleDtcbiAgZWRpdGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaWNvbkJ0bkVMKGljb25CdG4sIGVtb2ppUGlja2VyKSB7XG4gIGljb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVtb2ppUGlja2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0RUwoZGVsZXRlQnRuKSB7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRlZCkge1xuICAgICAgZGVsZXRlTGlzdChlZGl0ZWRJbmRleCk7XG4gICAgfVxuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRMaXN0c0Zyb21TdG9yYWdlKCk7XG4gICAgYWRkTGlzdEV2ZW50TGlzKCk7XG4gICAgZWRpdGVkID0gZmFsc2U7XG4gICAgZWRpdGVkSW5kZXggPSBudWxsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VMaXN0RUwoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRMaXN0c0Zyb21TdG9yYWdlKCk7XG4gICAgZWRpdGVkID0gZmFsc2U7XG4gICAgZWRpdGVkSW5kZXggPSBudWxsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0TGlzdEVMKHN1Ym1pdExpc3RCdG4pIHtcbiAgc3VibWl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRlZCkge1xuICAgICAgZGVsZXRlTGlzdChlZGl0ZWRJbmRleCk7XG4gICAgfVxuICAgIGNyZWF0ZUxpc3QoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VGl0bGVcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGVzY1wiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWQtZW1vamlcIikudmFsdWVcbiAgICApO1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRMaXN0c0Zyb21TdG9yYWdlKCk7XG4gICAgYWRkTGlzdEV2ZW50TGlzKCk7XG4gICAgZWRpdGVkID0gZmFsc2U7XG4gICAgZWRpdGVkSW5kZXggPSBudWxsO1xuICB9KTtcbn1cbiIsImltcG9ydCByZW5kZXJNYWluRm9ybSwge1xuICByZW5kZXJDbG9zZUJ0bixcbiAgZ2V0Vmlld0N0cixcbiAgcmVuZGVyRGVsZXRlLFxuICByZW5kZXJTdWJtaXQsXG59IGZyb20gXCIuL2FkZE5ld1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZVRhc2ssIHsgZGVsZXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgY2xlYXJWaWV3Q3RyIGZyb20gXCIuXCI7XG5pbXBvcnQgeyBhZGRUYXNrQ3RycyB9IGZyb20gXCIuL2FwcFVJXCI7XG5pbXBvcnQgeyBsb2FkVGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhZGRUYXNrRXZlbnRMaXMgfSBmcm9tIFwiLi9saXN0VUlcIjtcbmltcG9ydCB7IGdldFN0b3JlZExpc3RzIH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5sZXQgZWRpdGVkID0gZmFsc2U7XG5sZXQgZWRpdGVkSW5kZXg7XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0ZWRMb2coaW5kZXgpIHtcbiAgZWRpdGVkSW5kZXggPSBpbmRleDtcbiAgZWRpdGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRm9ybURhdGUoY3RyLCB0b0VkaXQpIHtcbiAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwidGV4dElucHV0XCIsIGN0ciwgXCJEdWUgRGF0ZVwiLCBbXG4gICAgW1wiZm9yXCIsIFwiaW5wdXRUYXNrRGF0ZVwiXSxcbiAgXSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImlucHV0XCIsIGN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiaW5wdXRUYXNrRGF0ZVwiXSxcbiAgICBbXCJ0eXBlXCIsIFwiZGF0ZVwiXSxcbiAgICBbXCJyZXF1aXJlZFwiLCBcIlwiXSxcbiAgICBbXCJ2YWx1ZVwiLCB0b0VkaXQgPyB0b0VkaXQuZHVlRGF0ZSA6IFwiXCJdLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJpb3JpdHlTdGF0dXMoY3RyLCB0b0VkaXQpIHtcbiAgLy8gY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY3RyLCBcIlByaW9yaXR5XCIpO1xuICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgY3RyLCBcIkhpZ2ggcHJpb3JpdHlcIiwgW1xuICAgIFtcImZvclwiLCBcImhpZ2hQcmlvcml0eVRhc2tcIl0sXG4gIF0pO1xuICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJoaWdoUHJpb3JpdHlcIiwgY3RyLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJoaWdoUHJpb3JpdHlUYXNrXCJdLFxuICAgIFtcInR5cGVcIiwgXCJjaGVja2JveFwiXSxcbiAgICBbXCJjaGVja2VkXCIsIHRvRWRpdCA/IHRvRWRpdC5wcmlvcml0eSA6IGZhbHNlXSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRyb3BEb3duKGN0cikge1xuICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgY3RyLCBcIkxpc3QocylcIiwgW1tcImZvclwiLCBcImRyb3Bkb3duTGlzdFwiXV0pO1xuICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwiaW5wdXRcIiwgY3RyLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJkcm9wZG93bkxpc3RcIl0sXG4gICAgW1wibGlzdFwiLCBcImxpc3RPZkxpc3RzXCJdLFxuICBdKTtcbiAgY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCBzZWxlY3QsIFwiQWxsIHRhc2tzXCIsIFtcbiAgICBbXCJ2YWx1ZVwiLCBcIkFsbCB0YXNrc1wiXSxcbiAgICBbXCJkYXRhLWluZGV4LW51bWJlclwiLCAwXSxcbiAgICBbXCJkaXNhYmxlZFwiXSxcbiAgICBbXCJzZWxlY3RlZFwiXSxcbiAgXSk7XG4gIGNvbnN0IGxpc3RBcnJheSA9IGdldExpc3RPcHRpb25zKCk7XG4gIHJlbmRlckxpc3RPcHRpb25zKHNlbGVjdCwgbGlzdEFycmF5KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlzdE9wdGlvbnMoKSB7XG4gIGNvbnN0IGxpc3RBcnJheSA9IGdldFN0b3JlZExpc3RzKCk7XG4gIGxpc3RBcnJheS5zcGxpY2UoMCwgMSk7XG4gIHJldHVybiBsaXN0QXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RPcHRpb25zKHNlbGVjdCwgbGlzdEFycmF5KSB7XG4gIGxldCBpID0gMTtcbiAgbGlzdEFycmF5LmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIG51bGwsIHNlbGVjdCwgbGlzdC50aXRsZSwgW1xuICAgICAgW1widmFsdWVcIiwgbGlzdC50aXRsZV0sXG4gICAgICBbXCJkYXRhLWluZGV4LW51bWJlclwiLCBpXSxcbiAgICBdKTtcbiAgICBpKys7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0odGFza1RvRWRpdCkge1xuICBjb25zdCB2aWV3Q3RyID0gZ2V0Vmlld0N0cigpO1xuICBjb25zdCBtYWluRm9ybSA9IHJlbmRlck1haW5Gb3JtKFwiVGFza1wiLCB2aWV3Q3RyLCB0YXNrVG9FZGl0KTtcbiAgLy8gY29uc3QgY2xvc2VCdG4gPSByZW5kZXJDbG9zZUJ0bihtYWluRm9ybSk7XG4gIGNvbnN0IGRhdGVDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9ybS1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBwcmlvcml0eUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmlvcml0eS1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBsaXN0Q3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tY3RyXCIsIG1haW5Gb3JtKTtcbiAgcmVuZGVyRm9ybURhdGUoZGF0ZUN0ciwgdGFza1RvRWRpdCk7XG4gIHJlbmRlclByaW9yaXR5U3RhdHVzKHByaW9yaXR5Q3RyLCB0YXNrVG9FZGl0KTtcbiAgcmVuZGVyRHJvcERvd24obGlzdEN0cik7XG4gIGNvbnN0IGJ1dHRvbkN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJidXR0b24tY3RyXCIsIG1haW5Gb3JtKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gcmVuZGVyU3VibWl0KGJ1dHRvbkN0cik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IHJlbmRlckRlbGV0ZShidXR0b25DdHIpO1xuICBzdWJtaXRUYXNrRUwoc3VibWl0QnRuKTtcbiAgY2xvc2VGb3JtRUwoKTtcbiAgZGVsZXRlVGFza0VMKGRlbGV0ZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGdldEFzc2lnbmVkTGlzdHMoY2hvc2VuSW5kZXgpIHtcbiAgbGV0IGFzc2lnbmVkTGlzdHM7XG4gIGlmIChjaG9zZW5JbmRleCA9PT0gMCkge1xuICAgIGFzc2lnbmVkTGlzdHMgPSBjaG9zZW5JbmRleDtcbiAgfSBlbHNlIHtcbiAgICBhc3NpZ25lZExpc3RzID0gWzAsIGNob3NlbkluZGV4XTtcbiAgfVxuICByZXR1cm4gYXNzaWduZWRMaXN0cztcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza0VMKGRlbGV0ZVRhc2tCdG4pIHtcbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRlZCkge1xuICAgICAgZGVsZXRlVGFzayhlZGl0ZWRJbmRleCk7XG4gICAgfVxuICAgIGNsZWFyVmlld0N0cigpO1xuXG4gICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoMCk7IC8vY3VycmVudGxpc3RcbiAgICBhZGRUYXNrRXZlbnRMaXMoKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm1FTCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoMCk7IC8vY3VycmVudGxpc3RcbiAgICBhZGRUYXNrRXZlbnRMaXMoKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrRUwoc3VibWl0VGFza0J0bikge1xuICBzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZWRpdGVkKSB7XG4gICAgICBkZWxldGVUYXNrKGVkaXRlZEluZGV4KTtcbiAgICB9XG4gICAgY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duTGlzdFwiKTtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gZHJvcERvd24uc2VsZWN0ZWRJbmRleDtcbiAgICBjb25zdCBjaG9zZW5JbmRleCA9IGRyb3BEb3duLm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5pbmRleE51bWJlcjtcbiAgICBjb25zdCBhc3NpZ25lZExpc3RzID0gZ2V0QXNzaWduZWRMaXN0cyhjaG9zZW5JbmRleCk7XG4gICAgY3JlYXRlVGFzayhcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRUaXRsZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXNjXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRhc2tEYXRlXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoUHJpb3JpdHlUYXNrXCIpLmNoZWNrZWQsXG4gICAgICBhc3NpZ25lZExpc3RzLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGNvbnNvbGUubG9nKFwiY2hvc2VcIiwgY2hvc2VuSW5kZXgpO1xuICAgIGxvYWRUYXNrc0Zyb21TdG9yYWdlKGNob3NlbkluZGV4KTtcbiAgICBhZGRUYXNrRXZlbnRMaXMoKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNsZWFyVmlld0N0ciBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcmVuZGVySXRlbUVkaXQsIHJlbmRlckl0ZW1UZXh0IH0gZnJvbSBcIi4vYXBwVUlcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGVkaXRlZExpc3RMb2cgfSBmcm9tIFwiLi9hZGROZXdMaXN0XCI7XG5pbXBvcnQgeyBnZXRMaXN0RGF0YSB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IHJlbmRlckxpc3RGb3JtIH0gZnJvbSBcIi4vYWRkTmV3TGlzdFwiO1xuaW1wb3J0IHsgZGVsZXRlTGlzdCwgbG9hZExpc3RzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBsb2FkVGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdCwgaSkge1xuICBjb25zb2xlLmxvZyhcImlcIiwgaSk7XG4gIGNvbnN0IGxpc3RzQ3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1jdHJcIik7XG4gIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtcImxpc3QtaXRlbVwiLCBcIml0ZW0tY3RyXCJdLFxuICAgIGxpc3RzQ3RyLFxuICAgIFwiXCIsXG4gICAgW1tcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGAke2l9YF1dXG4gICk7XG4gIGNvbnN0IHRleHRDdHIgPSByZW5kZXJJdGVtVGV4dChsaXN0LCBsaXN0SXRlbSk7XG4gIGNvbnN0IGljb24gPSByZW5kZXJMaXN0SWNvbihsaXN0LCBsaXN0SXRlbSk7XG4gIGlmIChpICE9PSAwKSB7XG4gICAgY29uc3Qgdmlld0VkaXRCdG4gPSByZW5kZXJJdGVtRWRpdChsaXN0SXRlbSwgaSk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gcmVuZGVySXRlbURlbGV0ZShsaXN0SXRlbSwgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdEljb24obGlzdCwgY3RyKSB7XG4gIGNvbnN0IGljb25EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaWNvbi1kaXZcIiwgY3RyKTtcbiAgY29uc3QgbGlzdEljb24gPSBsaXN0Lmljb25cbiAgICA/IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJsaXN0LWljb24tYnRuXCIsIGljb25EaXYsIGxpc3QuaWNvbiwgW1xuICAgICAgICBbXCJpZFwiLCBcImxpc3QtaWNvblwiXSxcbiAgICAgIF0pXG4gICAgOiBudWxsO1xuICByZXR1cm4gaWNvbkRpdjtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdE9mTGlzdHNDdHIodmlld0N0cikge1xuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibGlzdHMtY3RyXCIsIHZpZXdDdHIsIFwiXCIsIFtbXCJpZFwiLCBcImxpc3RzLWN0clwiXV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsTGlzdHNWaWV3KCkge1xuICBjbGVhclZpZXdDdHIoKTtcbiAgY29uc3Qgdmlld0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1jdHJcIik7XG4gIGNvbnN0IGhlYWRpbmdDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGluZy1jdHJcIiwgdmlld0N0cik7XG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaDFcIiwgaGVhZGluZ0N0ciwgXCJBbGwgTGlzdHNcIik7XG4gIGNvbnN0IGRlc2MgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFwiZGVzY1wiLFxuICAgIGhlYWRpbmdDdHIsXG4gICAgXCJWaWV3IGFuZCBlZGl0IGFsbCB0YXNrIGxpc3RzXCJcbiAgKTtcbiAgYWRkTGlzdE9mTGlzdHNDdHIodmlld0N0cik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1EZWxldGUoY3RyLCBpbmRleCkge1xuICBjb25zdCBkZWxldGVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGVsZXRlLWRpdlwiLCBjdHIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wiZGVsZXRlLWxpc3RcIiwgXCJidXR0b25cIl0sXG4gICAgZGVsZXRlRGl2LFxuICAgIFwiXCIsXG4gICAgW1tcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGluZGV4XV1cbiAgKTtcbiAgY3JlYXRlRWxlbWVudChcbiAgICBcImlcIixcbiAgICBbXCJkZWxldGUtbGlzdC1pY29uXCIsIFwiZmEtc29saWRcIiwgXCJmYS10cmFzaFwiXSxcblxuICAgIGRlbGV0ZUJ0bixcbiAgICBcIlwiLFxuICAgIFtbXCJ0aXRsZVwiLCBcIkRlbGV0ZSBsaXN0XCJdXVxuICApO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdEV2ZW50TGlzKCkge1xuICBlZGl0TGlzdEVMKCk7XG4gIGRlbGV0ZUxpc3RFTCgpO1xuICBvcGVuTGlzdEVMKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRMaXN0RUwoKSB7XG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuLWVkaXRcIik7XG4gIGVkaXRCdG5zLmZvckVhY2goKGVkaXRCdG4pID0+IHtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGVkaXRCdG4uZGF0YXNldC5pbmRleE51bWJlcjtcbiAgICAgIGNvbnN0IGxpc3RUb0VkaXQgPSBnZXRMaXN0RGF0YShpbmRleCk7XG4gICAgICBjb25zb2xlLmxvZyhsaXN0VG9FZGl0LCBcImxpc3R0b2VkaXRcIik7XG4gICAgICBlZGl0ZWRMaXN0TG9nKGluZGV4KTtcbiAgICAgIGNsZWFyVmlld0N0cigpO1xuICAgICAgcmVuZGVyTGlzdEZvcm0obGlzdFRvRWRpdCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0RUwoKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1saXN0XCIpO1xuICBkZWxldGVCdG5zLmZvckVhY2goKGRlbGV0ZUJ0bikgPT4ge1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVsZXRlQnRuLmRhdGFzZXQuaW5kZXhOdW1iZXI7XG4gICAgICBjb25zb2xlLmxvZyhcImluZFwiLCBpbmRleCk7XG4gICAgICBkZWxldGVMaXN0KGluZGV4KTtcbiAgICAgIGNsZWFyVmlld0N0cigpO1xuICAgICAgbG9hZExpc3RzRnJvbVN0b3JhZ2UoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5MaXN0RUwoKSB7XG4gIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1pdGVtXCIpO1xuICBsaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuICAgICAgaWYgKHRhZ05hbWUgIT09IFwiSVwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhZ05hbWUsIFwidGFnbmFtZVwiKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0SXRlbS5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgICAgICBjbGVhclZpZXdDdHIoKTtcbiAgICAgICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBjbGVhclZpZXdDdHIgZnJvbSBcIi5cIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRUYXNrc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGxvYWRMaXN0c0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGxvYWRQcm9maWxlRnJvbVN0b3JhZ2UsIHtcbiAgbG9hZEF2YXRhckZyb21TdG9yYWdlLFxuICBsb2FkTmFtZUZyb21TdG9yYWdlLFxuICBnZXRBdmF0YXIsXG4gIGdldE5hbWUsXG59IGZyb20gXCIuL3Byb2ZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQXBwVUkoKSB7XG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJOYXYoKTtcbiAgcmVuZGVyVmlld0N0cigpO1xuICBhZGROZXdCdG4oKTtcbiAgYWRkTWVudUV2ZW50TGlzKCk7XG59XG5cbmNvbnN0IGljb25MaXN0TmF2ID0gW1xuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtbGlzdFwiXSwgdGV4dDogXCJBbGwgdGFza3NcIiB9LFxuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtc3RhclwiXSwgdGV4dDogXCJUb2RheVwiIH0sXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1mb2xkZXItdHJlZVwiXSwgdGV4dDogXCJBbGwgTGlzdHNcIiB9LFxuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtdXNlclwiXSwgdGV4dDogXCJQcm9maWxlXCIgfSxcbl07XG5cbmZ1bmN0aW9uIGdldEljb25NZW51KG1lbnVEaXYpIHtcbiAgbGV0IGkgPSAwO1xuICBpY29uTGlzdE5hdi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUl0ZW1EaXZcIiwgbWVudURpdiwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgYG1lbnVJdGVtJHtpfWBdLFxuICAgICAgW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgYCR7aX1gXSxcbiAgICBdKTtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBpY29uLmNsYXNzZXMsIG1lbnVJdGVtRGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwic21hbGxcIiwgXCJtZW51VGV4dFwiLCBtZW51SXRlbURpdiwgaWNvbi50ZXh0KTtcbiAgICBpKys7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJdGVtMFwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgY29udGVudCk7XG4gIGNvbnN0IG1lbnVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudURpdlwiLCBuYXYpO1xuICBnZXRJY29uTWVudShtZW51RGl2KTtcbiAgY3JlYXRlRWxlbWVudChcImgzXCIsIFwibG9nb1wiLCBuYXYsIFwiQWJzb2xpc3RseVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiLCBjb250ZW50KTtcbiAgY29uc3QgbG9nb0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJsb2dvLWN0clwiLCBoZWFkZXIpO1xuICBjcmVhdGVFbGVtZW50KFwiaDNcIiwgXCJsb2dvXCIsIGxvZ29DdHIsIFwiQWJzb2xpc3RseVwiKTtcbiAgY29uc3QgaGVhZGVyUHJvZmlsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItcHJvZmlsZVwiLCBoZWFkZXIpO1xuICBsZXQgdXNlck5hbWUgPSBsb2FkTmFtZUZyb21TdG9yYWdlKCk7XG4gIGxldCBhdmF0YXIgPSBsb2FkQXZhdGFyRnJvbVN0b3JhZ2UoKTtcbiAgdXNlck5hbWUgPSBnZXROYW1lKHVzZXJOYW1lKTtcbiAgYXZhdGFyID0gZ2V0QXZhdGFyKGF2YXRhcik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXNlci1uYW1lLWhlYWRlclwiLCBoZWFkZXJQcm9maWxlLCBgSGVsbG8sICR7dXNlck5hbWV9LmApO1xuICBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiYXZhdGFyLWhlYWRlclwiLCBoZWFkZXJQcm9maWxlLCBcIlwiLCBbW1wic3JjXCIsIGF2YXRhcl1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclZpZXdDdHIoKSB7XG4gIGNvbnN0IHZpZXdDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidmlldy1jdHJcIiwgY29udGVudCwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwidmlldy1jdHJcIl0sXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza0N0cnMoKSB7XG4gIGNvbnN0IHZpZXdDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXctY3RyXCIpO1xuICBjb25zdCB0b2RvRG9uZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWRvbmUtY3RyXCIsIHZpZXdDdHIpO1xuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidG9kby1jdHJcIiwgdG9kb0RvbmVDdHIsIFwiXCIsIFtbXCJpZFwiLCBcInRvZG8tY3RyXCJdXSk7XG4gIGNvbnN0IGRvbmVDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZG9uZS1jdHJcIiwgdG9kb0RvbmVDdHIsIFwiXCIsIFtcbiAgICBbXCJpZFwiLCBcImRvbmUtY3RyXCJdLFxuICBdKTtcbiAgY3JlYXRlRWxlbWVudChcImgyXCIsIFwiZG9uZS10aXRsZVwiLCBkb25lQ3RyLCBcIkRvbmVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0J0bigpIHtcbiAgY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJhZGQtbmV3LWJ0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGx1c1wiXSwgY29udGVudCwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiYWRkLW5ldy1idG5cIl0sXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySXRlbVRleHQoaXRlbSwgY3RyKSB7XG4gIGNvbnN0IHRleHREaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGV4dC1kaXZcIiwgY3RyKTtcbiAgY3JlYXRlRWxlbWVudChcImgyXCIsIFwidGFzay10aXRsZVwiLCB0ZXh0RGl2LCBpdGVtLnRpdGxlKTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0YXNrLWRlc2NcIiwgdGV4dERpdiwgaXRlbS5kZXNjcmlwdGlvbik7XG4gIHJldHVybiB0ZXh0RGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySXRlbUVkaXQoY3RyLCBpbmRleCkge1xuICBjb25zdCBvcGVuRWRpdERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJvcGVuLWVkaXQtZGl2XCIsIGN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIGBvcGVuLWVkaXQtZGl2JHtpbmRleH1gXSxcbiAgXSk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wib3Blbi1lZGl0XCIsIFwiYnV0dG9uXCJdLFxuICAgIG9wZW5FZGl0RGl2LFxuICAgIFwiXCIsXG4gICAgW1tcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGluZGV4XV1cbiAgKTtcbiAgY3JlYXRlRWxlbWVudChcbiAgICBcImlcIixcbiAgICBbXCJlZGl0TGlzdFwiLCBcInZpZXctZWRpdFwiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiXSxcblxuICAgIGVkaXRCdG4sXG4gICAgXCJcIixcbiAgICBbW1widGl0bGVcIiwgXCJFZGl0ICYgRGVsZXRlXCJdXVxuICApO1xuICByZXR1cm4gZWRpdEJ0bjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUGFzdFNlbGVjdGVkKG1lbnVJdGVtcykge1xuICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXJrQXNTZWxlY3RlZChtZW51SXRlbSkge1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVFdmVudExpcygpIHtcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51SXRlbURpdlwiKTtcbiAgbWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICByZW1vdmVQYXN0U2VsZWN0ZWQobWVudUl0ZW1zKTtcbiAgICAgIG1hcmtBc1NlbGVjdGVkKG1lbnVJdGVtKTtcbiAgICAgIG9wZW5UaGlzUGFnZShtZW51SXRlbS5kYXRhc2V0LmluZGV4TnVtYmVyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5UaGlzUGFnZShpbmRleCkge1xuICBjb25zb2xlLmxvZyhpbmRleCwgXCJoZXJlXCIpO1xuICBjbGVhclZpZXdDdHIoKTtcbiAgaWYgKGluZGV4ID09IDApIHtcbiAgICBsb2FkVGFza3NGcm9tU3RvcmFnZShpbmRleCk7XG4gICAgY29uc29sZS5sb2coXCJpbmRleDFcIiwgaW5kZXgpO1xuICB9XG4gIGlmIChpbmRleCA9PSAxKSB7XG4gICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoXCJ0b2RheVwiKTtcbiAgfVxuICBpZiAoaW5kZXggPT0gMikge1xuICAgIGxvYWRMaXN0c0Zyb21TdG9yYWdlKCk7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT0gMykge1xuICAgIGxvYWRQcm9maWxlRnJvbVN0b3JhZ2UoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChcbiAgdGFnLFxuICBjbGFzc0xpc3QsXG4gIHBhcmVudEVsLFxuICB0ZXh0LFxuICBhdHRyaWJ1dGVzXG4pIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKGNsYXNzTGlzdCkge1xuICAgIGNsYXNzTGlzdCA9IEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KVxuICAgICAgPyBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KVxuICAgICAgOiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgfVxuICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoZWxlbWVudFswXSwgZWxlbWVudFsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcGFyZW50RWwuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08sIGlzUGFzdCwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBjaGVja0lmUGFzdChkYXRlLCBkdWVEYXRlRGl2KSB7XG4gIGlmIChpc1Bhc3QoZGF0ZSkpIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcIm92ZXJkdWVcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUb2RheShkYXRlLCBkdWVEYXRlRGl2KSB7XG4gIGlmIChpc1RvZGF5KGRhdGUpKSB7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RHVlRGF0ZXMoZGF0ZSwgZHVlRGF0ZURpdikge1xuICAvLyAgIGNvbnN0IGR1ZURhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdWUtZGF0ZVwiKTtcbiAgLy8gICBkdWVEYXRlcy5mb3JFYWNoKChkdWVEYXRlKSA9PiB7XG4gIGlmIChkYXRlKSB7XG4gICAgLy8gICBjb25zdCBkYXRlID0gZHVlRGF0ZS5pbm5lclRleHQ7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlSVNPKGRhdGUpO1xuICAgIGNoZWNrSWZQYXN0KHBhcnNlZERhdGUsIGR1ZURhdGVEaXYpO1xuICAgIGNoZWNrSWZUb2RheShwYXJzZWREYXRlLCBkdWVEYXRlRGl2KTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KHBhcnNlZERhdGUsIFwiZGQgTU1NIHl5XCIpO1xuICAgIC8vICAgZHVlRGF0ZS5pbm5lclRleHQgPSBmb3JtYXR0ZWREYXRlO1xuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICB9XG4gIC8vICAgfSk7XG59XG4iLCJpbXBvcnQgcmVuZGVyQXBwVUkgZnJvbSBcIi4vYXBwVUlcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtIH0gZnJvbSBcIi4vYWRkTmV3VGFza1wiO1xuaW1wb3J0IHsgcmVuZGVyTGlzdEZvcm0gfSBmcm9tIFwiLi9hZGROZXdMaXN0XCI7XG5pbXBvcnQgeyBsb2FkVGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJBcHBVSSgpO1xuICBsb2FkVGFza3NGcm9tU3RvcmFnZSgwKTtcbiAgYWRkTmV3RXZlbnRMaSgpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZE5ld0V2ZW50TGkoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5ldy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBjaGVja1R5cGUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVHlwZSgpIHtcbiAgY29uc3QgYWxsTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJdGVtMlwiKTtcbiAgaWYgKGFsbExpc3RzLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgY29uc29sZS5sb2coXCJ5c1wiKTtcbiAgICByZXR1cm4gcmVuZGVyTGlzdEZvcm0oKTtcbiAgfVxuICByZW5kZXJUYXNrRm9ybSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhclZpZXdDdHIoKSB7XG4gIGNvbnN0IHZpZXdDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXctY3RyXCIpO1xuICBsZXQgaSA9IDA7XG4gIGlmICh2aWV3Q3RyLmhhc0NoaWxkTm9kZXMpIHtcbiAgICB3aGlsZSAodmlld0N0ci5maXJzdENoaWxkKSB7XG4gICAgICB2aWV3Q3RyLnJlbW92ZUNoaWxkKHZpZXdDdHIuZmlyc3RDaGlsZCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFyXCIsIGkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyTGlzdE5hbWUsIHJlbmRlclRhc2sgfSBmcm9tIFwiLi9saXN0VUlcIjtcbmltcG9ydCByZW5kZXJMaXN0LCB7IGFsbExpc3RzVmlldyB9IGZyb20gXCIuL2FsbExpc3RzVUlcIjtcbmltcG9ydCB7IGFkZExpc3RFdmVudExpcyB9IGZyb20gXCIuL2FsbExpc3RzVUlcIjtcblxuLy8gZnVuY3Rpb24gZ2V0TGlzdElEKCkge1xuLy8gICBjb25zdCBsaXN0cyA9IGdldFN0b3JlZExpc3RzKCk7XG4vLyAgIGxldCBpZEFycmF5ID0gW107XG4vLyAgIGxldCBuZXh0SUQ7XG4vLyAgIGlmIChsaXN0cy5sZW5ndGggPiAwKSB7XG4vLyAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuLy8gICAgICAgaWRBcnJheS5wdXNoKGxpc3QubGlzdElEKTtcbi8vICAgICAgIG5leHRJRCA9IE1hdGgubWF4KC4uLmlkQXJyYXkpICsgMTtcbi8vICAgICB9KTtcbi8vICAgfSBlbHNlIG5leHRJRCA9IDE7XG4vLyAgIHJldHVybiBuZXh0SUQ7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uKSB7XG4gIC8vIGNvbnN0IGxpc3RJRCA9IGdldExpc3RJRCgpO1xuICBjb25zdCBsaXN0ID0ge1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgaWNvbjogaWNvbixcbiAgICAvLyBsaXN0SUQ6IGxpc3RJRCxcbiAgfTtcbiAgYWRkTGlzdFRvU3RvcmFnZShsaXN0KTtcbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZWRMaXN0cygpIHtcbiAgY29uc3Qgc3RvcmVkTGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdHNcIikpIHx8IFtdO1xuICByZXR1cm4gc3RvcmVkTGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0VG9TdG9yYWdlKGxpc3QpIHtcbiAgY29uc3QgbGlzdHMgPSBnZXRTdG9yZWRMaXN0cygpO1xuICBsaXN0cy5wdXNoKGxpc3QpO1xuICBjb25zdCBsaXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGxpc3RzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBsaXN0RGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0RGF0YShpbmRleCkge1xuICBjb25zb2xlLmxvZyhpbmRleCwgXCJsaXN0aW5kXCIpO1xuICBjb25zdCBzdG9yZWRMaXN0cyA9IGdldFN0b3JlZExpc3RzKCk7XG4gIGlmIChzdG9yZWRMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZm91bmRMaXN0ID0gc3RvcmVkTGlzdHNbaW5kZXhdO1xuICAgIGlmIChmb3VuZExpc3QpIHtcbiAgICAgIHJldHVybiBmb3VuZExpc3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0SW5mbyhJRCkge1xuICBjb25zdCBsaXN0ID0gZ2V0TGlzdERhdGEoSUQpO1xuICBpZiAobGlzdCkge1xuICAgIHJlbmRlckxpc3ROYW1lKGxpc3QudGl0bGUsIGxpc3QuZGVzY3JpcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gY3JlYXRlTGlzdChcbiAgICAgIFwiQWxsIHRhc2tzXCIsXG4gICAgICBcIkFsbCB5b3VyIHRhc2tzIGluIG9uZSBsaXN0XCIsXG4gICAgICBudWxsXG4gICAgKTtcbiAgICByZW5kZXJMaXN0TmFtZShhbGxUYXNrcy50aXRsZSwgYWxsVGFza3MuZGVzY3JpcHRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTGlzdHNGcm9tU3RvcmFnZSgpIHtcbiAgYWxsTGlzdHNWaWV3KCk7XG4gIGNvbnN0IHN0b3JlZExpc3RzID0gZ2V0U3RvcmVkTGlzdHMoKTtcbiAgbGV0IGkgPSAwO1xuICBzdG9yZWRMaXN0cy5mb3JFYWNoKChzdG9yZWRMaXN0KSA9PiB7XG4gICAgcmVuZGVyTGlzdChzdG9yZWRMaXN0LCBpKTtcbiAgICBpKys7XG4gIH0pO1xuICBhZGRMaXN0RXZlbnRMaXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QoaW5kZXgpIHtcbiAgY29uc3QgbGlzdHMgPSBnZXRTdG9yZWRMaXN0cygpO1xuICBpZiAobGlzdHMubGVuZ3RoID4gMCkge1xuICAgIGxpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgY29uc3QgbGlzdERhdGEgPSBKU09OLnN0cmluZ2lmeShsaXN0cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBsaXN0RGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCBjbGVhclZpZXdDdHIgZnJvbSBcIi5cIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBmb3JtYXREdWVEYXRlcyBmcm9tIFwiLi9kYXRlXCI7XG5pbXBvcnQge1xuICBnZXRUYXNrRGF0YSxcbiAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UsXG4gIHVwZGF0ZUNvbXBsZXRlU3RhdHVzLFxufSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVySXRlbUVkaXQsIHJlbmRlckl0ZW1UZXh0IH0gZnJvbSBcIi4vYXBwVUlcIjtcbmltcG9ydCB7IGVkaXRlZExvZywgcmVuZGVyVGFza0Zvcm0gfSBmcm9tIFwiLi9hZGROZXdUYXNrXCI7XG5pbXBvcnQgeyBhZGRMaXN0RXZlbnRMaXMgfSBmcm9tIFwiLi9hbGxMaXN0c1VJXCI7XG5pbXBvcnQgeyBnZXRMaXN0RGF0YSB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBDb21wbGV0ZSBmcm9tIFwiLi9jb21wbGV0ZS5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckxpc3ROYW1lKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCB2aWV3Q3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3LWN0clwiKTtcbiAgY29uc3QgaGVhZGluZ0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkaW5nLWN0clwiLCB2aWV3Q3RyKTtcbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJoMVwiLCBoZWFkaW5nQ3RyLCB0aXRsZSk7XG4gIGNvbnN0IGRlc2MgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRlc2NcIiwgaGVhZGluZ0N0ciwgZGVzY3JpcHRpb24pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcmlvcml0eVN0YXR1cyhzdGF0dXMsIHRleHREaXYpIHtcbiAgaWYgKHN0YXR1cykge1xuICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RJY29uKHRhc2ssIGN0cikge1xuICBsZXQgaWNvbkRpdjtcbiAgaWYgKHRhc2suYXNzaWduZWRMaXN0cy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgbGlzdEluZGV4ID0gdGFzay5hc3NpZ25lZExpc3RzLnNsaWNlKDEsIDIpO1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0RGF0YShsaXN0SW5kZXgpO1xuICAgIGlmIChsaXN0Lmljb24pIHtcbiAgICAgIGNvbnN0IGljb25DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaWNvbi1kaXZcIiwgY3RyKTtcbiAgICAgIGNvbnN0IGxpc3RCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcImxpc3QtaWNvbi1idG5cIixcbiAgICAgICAgaWNvbkN0cixcbiAgICAgICAgbGlzdC5pY29uLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJsaXN0LWljb25cIl0sXG4gICAgICAgICAgW1widGl0bGVcIiwgXCJWaWV3IExpc3RcIl0sXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgICBvcGVuTGlzdEVMKGxpc3RCdG4sIGxpc3RJbmRleCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpY29uRGl2O1xufVxuXG5mdW5jdGlvbiByZW5kZXJEdWVEYXRlKHRhc2ssIGN0ciwgaW5kZXgpIHtcbiAgY29uc3QgdGFza0R1ZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWR1ZS1kaXZcIiwgY3RyKTtcbiAgY3JlYXRlRWxlbWVudChcbiAgICBcInNtYWxsXCIsXG4gICAgXCJkdWUtZGF0ZVwiLFxuICAgIHRhc2tEdWVEaXYsXG4gICAgZm9ybWF0RHVlRGF0ZXModGFzay5kdWVEYXRlLCB0YXNrRHVlRGl2KVxuICApO1xuICByZXR1cm4gdGFza0R1ZURpdjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0NvbXBsZXRlKHRhc2ssIGN0ciwgaW5kZXgpIHtcbiAgY29uc3QgdGFza0NvbXBsZXRlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stY29tcGxldGUtZGl2XCIsIGN0cik7XG4gIGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBbXG4gICAgICBcImNvbXBsZXRlLWJ0blwiLFxuICAgICAgXCJmYS1zb2xpZFwiLFxuICAgICAgXCJmYS1jaGVja1wiLFxuICAgICAgdGFzay5jb21wbGV0ZWQgPyBcImRvbmVCdG5cIiA6IFwidG9kb0J0blwiLFxuICAgICAgXCJidXR0b25cIixcbiAgICBdLFxuICAgIHRhc2tDb21wbGV0ZURpdixcbiAgICBcIlwiLFxuICAgIFtbXCJkYXRhLWluZGV4LW51bWJlclwiLCBpbmRleF1dXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrKHRhc2ssIGluZGV4KSB7XG4gIGNvbnNvbGUubG9nKHRhc2spO1xuICBjb25zdCB0b2RvQ3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWN0clwiKTtcbiAgY29uc3QgZG9uZUN0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9uZS1jdHJcIik7XG4gIGNvbnN0IGl0ZW1DdHIgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJpdGVtLWN0clwiLFxuICAgIHRhc2suY29tcGxldGVkID8gZG9uZUN0ciA6IHRvZG9DdHIsXG4gICAgXCJcIixcbiAgICBbW1wiaWRcIiwgYGl0ZW0tY3RyJHtpbmRleH1gXV1cbiAgKTtcbiAgY29uc3QgdGV4dERpdiA9IHJlbmRlckl0ZW1UZXh0KHRhc2ssIGl0ZW1DdHIpO1xuICByZW5kZXJEdWVEYXRlKHRhc2ssIHRleHREaXYsIGluZGV4KTtcbiAgY29uc3Qgdmlld0VkaXREaXYgPSByZW5kZXJJdGVtRWRpdChpdGVtQ3RyLCBpbmRleCk7XG4gIHJlbmRlckxpc3RJY29uKHRhc2ssIGl0ZW1DdHIpO1xuICByZW5kZXJUYXNrQ29tcGxldGUodGFzaywgaXRlbUN0ciwgaW5kZXgpO1xuICByZW5kZXJQcmlvcml0eVN0YXR1cyh0YXNrLnByaW9yaXR5LCB0ZXh0RGl2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZFbXB0eSgpIHtcbiAgY29uc3QgdG9kb0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1jdHJcIik7XG4gIGNvbnN0IGRvbmVDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbmUtY3RyXCIpO1xuICBpZiAoIXRvZG9DdHIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgY29uc3Qgbm9UYXNrc0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJuby10YXNrcy1jdHJcIiwgdG9kb0N0ciwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgXCJuby10YXNrcy1jdHJcIl0sXG4gICAgXSk7XG4gICAgY29uc3Qgbm9UYXNrc0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJuby10YXNrcy1pbWdcIiwgbm9UYXNrc0N0cik7XG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJuby10YXNrcy10ZXh0XCIsIG5vVGFza3NDdHIsIFwiWW91J3JlIHVwIHRvIGRhdGUhXCIpO1xuICAgIG5vVGFza3NJbWcuc3JjID0gQ29tcGxldGU7XG4gIH1cbiAgaWYgKHRvZG9DdHIuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vLXRhc2tzLWN0clwiKTtcbiAgICBpZiAoZW1wdHkpIHtcbiAgICAgIGVtcHR5LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBpZiAoZG9uZUN0ci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFtcIm5vdGhpbmctY29tcGxldGVcIiwgXCJuby10YXNrcy10ZXh0XCJdLFxuICAgICAgZG9uZUN0cixcbiAgICAgIFwiQ29tcGxldGUgYSB0YXNrIHRvIHNlZSBpdCBoZXJlLi4uXCIsXG4gICAgICBbW1wiaWRcIiwgXCJub3RoaW5nLWNvbXBsZXRlXCJdXVxuICAgICk7XG4gIH1cbiAgaWYgKGRvbmVDdHIuY2hpbGROb2Rlcy5sZW5ndGggPiAyKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGhpbmctY29tcGxldGVcIik7XG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBlbXB0eS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tFdmVudExpcygpIHtcbiAgZWRpdFRhc2tFTCgpO1xuICBjb21wbGV0ZVRhc2tFTCgpO1xufVxuXG5mdW5jdGlvbiBvcGVuTGlzdEVMKGxpc3RCdG4sIGxpc3RJbmRleCkge1xuICBsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRUYXNrc0Zyb21TdG9yYWdlKGxpc3RJbmRleCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza0VMKCkge1xuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3Blbi1lZGl0XCIpO1xuICBlZGl0QnRucy5mb3JFYWNoKChlZGl0QnRuKSA9PiB7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZWRpdEJ0bi5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgICAgY29uc3QgdGFza1RvRWRpdCA9IGdldFRhc2tEYXRhKGluZGV4KTtcbiAgICAgIGVkaXRlZExvZyhpbmRleCk7XG4gICAgICBjbGVhclZpZXdDdHIoKTtcbiAgICAgIHJlbmRlclRhc2tGb3JtKHRhc2tUb0VkaXQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyZW50KGluZGV4KSB7XG4gIGNvbnN0IGl0ZW1DdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS1jdHIke2luZGV4fWApO1xuICBsZXQgcGFyZW50SUQgPSBpdGVtQ3RyLnBhcmVudE5vZGUuaWQ7XG4gIHBhcmVudElEID0gcGFyZW50SUQgPT09IFwidG9kby1jdHJcIiA/IFwiZG9uZS1jdHJcIiA6IFwidG9kby1jdHJcIjtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SUQpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoaXRlbUN0cik7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFza0VMKCkge1xuICBjb25zdCBjb21wbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBsZXRlLWJ0blwiKTtcbiAgY29tcGxldGVCdG5zLmZvckVhY2goKGNvbXBsZXRlQnRuKSA9PiB7XG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY29tcGxldGVCdG4uZGF0YXNldC5pbmRleE51bWJlcjtcbiAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBnZXRUYXNrRGF0YShpbmRleCk7XG4gICAgICB1cGRhdGVQYXJlbnQoaW5kZXgpO1xuICAgICAgdXBkYXRlQ29tcGxldGVTdGF0dXMoaW5kZXgpO1xuICAgICAgY2hlY2tJZkVtcHR5KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2ZpbGVVSSBmcm9tIFwiLi9wcm9maWxlVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2ZpbGVGcm9tU3RvcmFnZSgpIHtcbiAgY29uc3QgbmFtZSA9IGxvYWROYW1lRnJvbVN0b3JhZ2UoKTtcbiAgY29uc3QgYXZhdGFyID0gbG9hZEF2YXRhckZyb21TdG9yYWdlKCk7XG4gIGNyZWF0ZVByb2ZpbGVVSShuYW1lLCBhdmF0YXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEF2YXRhckZyb21TdG9yYWdlKCkge1xuICBjb25zdCBhdmF0YXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXZhdGFyXCIpKSB8fCBbXTtcbiAgcmV0dXJuIGF2YXRhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROYW1lRnJvbVN0b3JhZ2UoKSB7XG4gIGNvbnN0IG5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSkgfHwgW107XG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU5hbWVUb1N0b3JhZ2UobmFtZSkge1xuICBjb25zdCBzdG9yZU5hbWUgPSBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIHN0b3JlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXZhdGFyVG9TdG9yYWdlKGF2YXRhcikge1xuICBjb25zdCBzdG9yZUF2YXRhciA9IEpTT04uc3RyaW5naWZ5KGF2YXRhcik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXZhdGFyXCIsIHN0b3JlQXZhdGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF2YXRhcihhdmF0YXIpIHtcbiAgaWYgKGF2YXRhcikge1xuICAgIHJldHVybiBhdmF0YXI7XG4gIH1cbiAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IEF2YXRhckdlbmVyYXRvcigpO1xuICBjb25zdCBkZWZhdWx0QXZhdGFyID0gZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tQXZhdGFyKFwiYXZhdGFyXCIpO1xuICBzYXZlQXZhdGFyVG9TdG9yYWdlKGRlZmF1bHRBdmF0YXIpO1xuICByZXR1cm4gZGVmYXVsdEF2YXRhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUobmFtZSkge1xuICBpZiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIG5hbWUgPSBcIk5ld1VzZXJcIjtcbiAgc2F2ZU5hbWVUb1N0b3JhZ2UobmFtZSk7XG4gIHJldHVybiBuYW1lO1xufVxuIiwiaW1wb3J0IHsgQXZhdGFyR2VuZXJhdG9yIH0gZnJvbSBcInJhbmRvbS1hdmF0YXItZ2VuZXJhdG9yXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRWaWV3Q3RyIH0gZnJvbSBcIi4vYWRkTmV3XCI7XG5pbXBvcnQge1xuICBzYXZlTmFtZVRvU3RvcmFnZSxcbiAgc2F2ZUF2YXRhclRvU3RvcmFnZSxcbiAgZ2V0TmFtZSxcbiAgZ2V0QXZhdGFyLFxufSBmcm9tIFwiLi9wcm9maWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVVSShuYW1lLCBhdmF0YXIpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGdldFZpZXdDdHIoKTtcbiAgY29uc3QgcHJvZmlsZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9maWxlLWN0clwiLCB2aWV3Q3RyKTtcbiAgY29uc3QgYXZhdGFyQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImF2YXRhci1jdHJcIiwgcHJvZmlsZUN0cik7XG4gIGNvbnN0IGF2YXRhckltZyA9IGF2YXRhclVJKGF2YXRhciwgYXZhdGFyQ3RyKTtcbiAgY29uc3QgbmFtZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9maWxlLW5hbWUtY3RyXCIsIHByb2ZpbGVDdHIpO1xuICBjb25zdCBjdXJyZW50TmFtZSA9IGdldE5hbWUobmFtZSk7XG4gIGNvbnN0IHByb2ZpbGVOYW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcm9maWxlLW5hbWVcIiwgbmFtZUN0ciwgY3VycmVudE5hbWUpO1xuICBjb25zdCBidXR0b25DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnV0dG9uLWN0clwiLCBwcm9maWxlQ3RyKTtcbiAgY29uc3QgZWRpdE5hbWUgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJlZGl0LW5hbWUtYnRuXCIsXG4gICAgYnV0dG9uQ3RyLFxuICAgIFwiRWRpdCBuYW1lXCJcbiAgKTtcbiAgY29uc3QgZWRpdEF2YXRhciA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBcImF2YXRhci1idG5cIixcbiAgICBidXR0b25DdHIsXG4gICAgXCJSYW5kb20gYXZhdGFyXCJcbiAgKTtcbiAgZWRpdE5hbWVFTChlZGl0TmFtZSwgcHJvZmlsZU5hbWUpO1xuICByYW5kb21BdmF0YXJFTChhdmF0YXJJbWcsIGVkaXRBdmF0YXIpO1xufVxuXG5mdW5jdGlvbiBhdmF0YXJVSShhdmF0YXIsIGF2YXRhckN0cikge1xuICBjb25zdCBjdXJyZW50QXZhdGFyID0gZ2V0QXZhdGFyKGF2YXRhcik7XG4gIGNvbnN0IGF2YXRhckltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJhdmF0YXJcIiwgYXZhdGFyQ3RyLCBcIlwiLCBbXG4gICAgW1wic3JjXCIsIGN1cnJlbnRBdmF0YXJdLFxuICBdKTtcbiAgcmV0dXJuIGF2YXRhckltZztcbn1cblxuZnVuY3Rpb24gcmFuZG9tQXZhdGFyRUwoaW1nLCBidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IEF2YXRhckdlbmVyYXRvcigpO1xuICAgIGNvbnN0IGF2YXRhciA9IGdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbUF2YXRhcigpO1xuICAgIHNhdmVBdmF0YXJUb1N0b3JhZ2UoYXZhdGFyKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGF2YXRhcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0TmFtZUVMKGVkaXROYW1lLCBwcm9maWxlTmFtZSkge1xuICBlZGl0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJFbnRlciBwcm9maWxlIG5hbWVcIik7XG4gICAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHNhdmVOYW1lVG9TdG9yYWdlKG5hbWUpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHJlbmRlckxpc3ROYW1lLCByZW5kZXJUYXNrIH0gZnJvbSBcIi4vbGlzdFVJXCI7XG5pbXBvcnQgeyBnZXRMaXN0SW5mbyB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZFRhc2tFdmVudExpcywgY2hlY2tJZkVtcHR5IH0gZnJvbSBcIi4vbGlzdFVJXCI7XG5pbXBvcnQgY2xlYXJWaWV3Q3RyIGZyb20gXCIuXCI7XG5pbXBvcnQgeyBhZGRUYXNrQ3RycyB9IGZyb20gXCIuL2FwcFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIGxpc3QsXG4gIGNvbXBsZXRlZFxuKSB7XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBhc3NpZ25lZExpc3RzOiBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdCA6IFtsaXN0XSxcbiAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICBhZGRUYXNrVG9TdG9yYWdlOiBhZGRUYXNrVG9TdG9yYWdlLFxuICB9O1xuICB0YXNrLmFkZFRhc2tUb1N0b3JhZ2UoKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1N0b3JhZ2UoKSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgdGFza3MucHVzaCh0aGlzKTtcbiAgY29uc3QgdGFza0RhdGEgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgdGFza0RhdGEpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZSh0YXNrKSB7XG4gIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tzRnJvbVN0b3JhZ2UobGlzdEluZGV4KSB7XG4gIGFkZFRhc2tDdHJzKCk7XG4gIGNvbnNvbGUubG9nKFwibGlzdElEXCIsIGxpc3RJbmRleCk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgLy8gbGlzdEluZGV4ID0gbGlzdElELnRvU3RyaW5nKCk7XG4gIGlmIChsaXN0SW5kZXggPT0gXCJ0b2RheVwiKSB7XG4gICAgcmVuZGVyTGlzdE5hbWUoXCJUb2RheVwiLCBcIkFsbCB0YXNrcyBkdWUgdG9kYXlcIik7XG4gICAgZ2V0VG9kYXlzVGFza3ModGFza3MpO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICBnZXRUYXNrc0ZvclRoaXNMaXN0KGxpc3RJbmRleCwgdGFza3MpO1xuICAgIGdldExpc3RJbmZvKGxpc3RJbmRleCk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TGlzdEluZm8obGlzdEluZGV4KTtcbiAgfVxuICBhZGRUYXNrRXZlbnRMaXMoKTtcbiAgY2hlY2tJZkVtcHR5KCk7XG59XG5cbmZ1bmN0aW9uIGdldFRvZGF5c1Rhc2tzKHRhc2tzKSB7XG4gIGxldCBpID0gMDtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmIChpc1RvZGF5KHRhc2suZHVlRGF0ZSkpIHtcbiAgICAgIHJlbmRlclRhc2sodGFzaywgaSk7XG4gICAgICBpKys7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza3NGb3JUaGlzTGlzdChsaXN0SUQsIHRhc2tzKSB7XG4gIGxldCBpID0gMDtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmFzc2lnbmVkTGlzdHMudG9TdHJpbmcoKS5pbmNsdWRlcyhsaXN0SUQudG9TdHJpbmcoKSkpIHtcbiAgICAgIHJlbmRlclRhc2sodGFzaywgaSk7XG4gICAgICBpKys7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tEYXRhKGluZGV4KSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdGFza3NbaW5kZXhdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnN0IHRhc2tEYXRhID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgdGFza0RhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZVN0YXR1cyhpbmRleCkge1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4gIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgdG9nZ2xlQ29tcGxldGUodGFza3NbaW5kZXhdKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrc1tpbmRleF0uY29tcGxldGVkKTtcbiAgICBjb25zdCB0YXNrRGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIHRhc2tEYXRhKTtcbiAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwienp6elwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59XG4iLCJjb25zdCBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbXCJEXCIsIFwiRERcIl07XG5jb25zdCBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFtcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSBcIllZWVlcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGB5eXl5XFxgIGluc3RlYWQgb2YgXFxgWVlZWVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYHl5XFxgIGluc3RlYWQgb2YgXFxgWVlcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09IFwiRFwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYGRcXGAgaW5zdGVhZCBvZiBcXGBEXFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSBcIkREXCIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVc2UgXFxgZGRcXGAgaW5zdGVhZCBvZiBcXGBERFxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgIHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLVxuICAgIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB0aHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGUsXG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiBcIidcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVyKFxuICAgICAgICAgIG9yaWdpbmFsRGF0ZSxcbiAgICAgICAgICBzdWJzdHJpbmcsXG4gICAgICAgICAgbG9jYWxlLmxvY2FsaXplLFxuICAgICAgICAgIGZvcm1hdHRlck9wdGlvbnMsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiLi9zdGFydE9mWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID1cbiAgICBzdGFydE9mSVNPV2VlayhfZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZklTT1dlZWtZZWFyKF9kYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9XG4gICAgc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtXG4gICAgc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCBmaXJzdFdlZWtPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYXN0KGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPCBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzUGFzdDtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGUpXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdmFsaWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoIWlzRGF0ZShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoX2RhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGJ1aWxkRm9ybWF0TG9uZ0ZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4ubWpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5tanNcIjtcbmltcG9ydCB7IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHBhcnNlSVNPfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnM/LmFkZGl0aW9uYWxEaWdpdHMgPz8gMjtcbiAgY29uc3QgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuXG4gIGxldCBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIGNvbnN0IHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGxldCB0aW1lID0gMDtcbiAgbGV0IG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIC8vIEpTIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpLFxuICAgICk7XG4gICAgcmVzdWx0LnNldEhvdXJzKFxuICAgICAgZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG5cbmNvbnN0IHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkLyxcbn07XG5cbmNvbnN0IGRhdGVSZWdleCA9XG4gIC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xuY29uc3QgdGltZVJlZ2V4ID1cbiAgL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xuY29uc3QgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgY29uc3QgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgbGV0IHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihcbiAgICAgICAgZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsXG4gICAgICAgIGRhdGVTdHJpbmcubGVuZ3RoLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIGNvbnN0IHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sIFwiXCIpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgXCJeKD86KFxcXFxkezR9fFsrLV1cXFxcZHtcIiArXG4gICAgICAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICtcbiAgICAgIFwifSl8KFxcXFxkezJ9fFsrLV1cXFxcZHtcIiArXG4gICAgICAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICtcbiAgICAgIFwifSkkKVwiLFxuICApO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7IHllYXI6IE5hTiwgcmVzdERhdGVTdHJpbmc6IFwiXCIgfTtcblxuICBjb25zdCB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICBjb25zdCBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG5cbiAgY29uc3QgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIGNvbnN0IGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICBjb25zdCBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgY29uc3QgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIGNvbnN0IHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgY29uc3QgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoXG4gICAgICAhdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8XG4gICAgICAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcilcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgY29uc3QgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgY29uc3QgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICBjb25zdCBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMFxuICApO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKFwiLFwiLCBcIi5cIikpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gXCJaXCIpIHJldHVybiAwO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuXG4gIGNvbnN0IHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gXCIrXCIgPyAtMSA6IDE7XG4gIGNvbnN0IGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICBjb25zdCBtaW51dGVzID0gKGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgY29uc3QgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbmNvbnN0IGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gKFxuICAgIG1vbnRoID49IDAgJiZcbiAgICBtb250aCA8PSAxMSAmJlxuICAgIGRhdGUgPj0gMSAmJlxuICAgIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKVxuICApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgc2Vjb25kcyA+PSAwICYmXG4gICAgc2Vjb25kcyA8IDYwICYmXG4gICAgbWludXRlcyA+PSAwICYmXG4gICAgbWludXRlcyA8IDYwICYmXG4gICAgaG91cnMgPj0gMCAmJlxuICAgIGhvdXJzIDwgMjVcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHBhcnNlSVNPO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2VlaztcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGZpcnN0V2VlayA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IF9kYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmdTdHIgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsImZ1bmN0aW9uIGFzc2VydE5vbkVtcHR5U3RyaW5nIChzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8ICFzdHIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgbm9uLWVtcHR5IHN0cmluZywgZ290OiAnICsgc3RyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE51bWJlciAobnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBudW1iZXIsIGdvdDogJyArIG51bWJlcilcbiAgfVxufVxuXG5jb25zdCBEQl9WRVJTSU9OX0NVUlJFTlQgPSAxO1xuY29uc3QgREJfVkVSU0lPTl9JTklUSUFMID0gMTtcbmNvbnN0IFNUT1JFX0VNT0pJID0gJ2Vtb2ppJztcbmNvbnN0IFNUT1JFX0tFWVZBTFVFID0gJ2tleXZhbHVlJztcbmNvbnN0IFNUT1JFX0ZBVk9SSVRFUyA9ICdmYXZvcml0ZXMnO1xuY29uc3QgRklFTERfVE9LRU5TID0gJ3Rva2Vucyc7XG5jb25zdCBJTkRFWF9UT0tFTlMgPSAndG9rZW5zJztcbmNvbnN0IEZJRUxEX1VOSUNPREUgPSAndW5pY29kZSc7XG5jb25zdCBJTkRFWF9DT1VOVCA9ICdjb3VudCc7XG5jb25zdCBGSUVMRF9HUk9VUCA9ICdncm91cCc7XG5jb25zdCBGSUVMRF9PUkRFUiA9ICdvcmRlcic7XG5jb25zdCBJTkRFWF9HUk9VUF9BTkRfT1JERVIgPSAnZ3JvdXAtb3JkZXInO1xuY29uc3QgS0VZX0VUQUcgPSAnZVRhZyc7XG5jb25zdCBLRVlfVVJMID0gJ3VybCc7XG5jb25zdCBLRVlfUFJFRkVSUkVEX1NLSU5UT05FID0gJ3NraW5Ub25lJztcbmNvbnN0IE1PREVfUkVBRE9OTFkgPSAncmVhZG9ubHknO1xuY29uc3QgTU9ERV9SRUFEV1JJVEUgPSAncmVhZHdyaXRlJztcbmNvbnN0IElOREVYX1NLSU5fVU5JQ09ERSA9ICdza2luVW5pY29kZXMnO1xuY29uc3QgRklFTERfU0tJTl9VTklDT0RFID0gJ3NraW5Vbmljb2Rlcyc7XG5cbmNvbnN0IERFRkFVTFRfREFUQV9TT1VSQ0UgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbW9qaS1waWNrZXItZWxlbWVudC1kYXRhQF4xL2VuL2Vtb2ppYmFzZS9kYXRhLmpzb24nO1xuY29uc3QgREVGQVVMVF9MT0NBTEUgPSAnZW4nO1xuXG4vLyBsaWtlIGxvZGFzaCdzIHVuaXFCeSBidXQgbXVjaCBzbWFsbGVyXG5mdW5jdGlvbiB1bmlxQnkgKGFyciwgZnVuYykge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgY29uc3Qga2V5ID0gZnVuYyhpdGVtKTtcbiAgICBpZiAoIXNldC5oYXMoa2V5KSkge1xuICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gdW5pcUVtb2ppIChlbW9qaXMpIHtcbiAgcmV0dXJuIHVuaXFCeShlbW9qaXMsIF8gPT4gXy51bmljb2RlKVxufVxuXG5mdW5jdGlvbiBpbml0aWFsTWlncmF0aW9uIChkYikge1xuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RTdG9yZSAobmFtZSwga2V5UGF0aCwgaW5kZXhlcykge1xuICAgIGNvbnN0IHN0b3JlID0ga2V5UGF0aFxuICAgICAgPyBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lLCB7IGtleVBhdGggfSlcbiAgICAgIDogZGIuY3JlYXRlT2JqZWN0U3RvcmUobmFtZSk7XG4gICAgaWYgKGluZGV4ZXMpIHtcbiAgICAgIGZvciAoY29uc3QgW2luZGV4TmFtZSwgW2tleVBhdGgsIG11bHRpRW50cnldXSBvZiBPYmplY3QuZW50cmllcyhpbmRleGVzKSkge1xuICAgICAgICBzdG9yZS5jcmVhdGVJbmRleChpbmRleE5hbWUsIGtleVBhdGgsIHsgbXVsdGlFbnRyeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0b3JlXG4gIH1cblxuICBjcmVhdGVPYmplY3RTdG9yZShTVE9SRV9LRVlWQUxVRSk7XG4gIGNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX0VNT0pJLCAvKiBrZXlQYXRoICovIEZJRUxEX1VOSUNPREUsIHtcbiAgICBbSU5ERVhfVE9LRU5TXTogW0ZJRUxEX1RPS0VOUywgLyogbXVsdGlFbnRyeSAqLyB0cnVlXSxcbiAgICBbSU5ERVhfR1JPVVBfQU5EX09SREVSXTogW1tGSUVMRF9HUk9VUCwgRklFTERfT1JERVJdXSxcbiAgICBbSU5ERVhfU0tJTl9VTklDT0RFXTogW0ZJRUxEX1NLSU5fVU5JQ09ERSwgLyogbXVsdGlFbnRyeSAqLyB0cnVlXVxuICB9KTtcbiAgY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfRkFWT1JJVEVTLCB1bmRlZmluZWQsIHtcbiAgICBbSU5ERVhfQ09VTlRdOiBbJyddXG4gIH0pO1xufVxuXG5jb25zdCBvcGVuSW5kZXhlZERCUmVxdWVzdHMgPSB7fTtcbmNvbnN0IGRhdGFiYXNlQ2FjaGUgPSB7fTtcbmNvbnN0IG9uQ2xvc2VMaXN0ZW5lcnMgPSB7fTtcblxuZnVuY3Rpb24gaGFuZGxlT3Blbk9yRGVsZXRlUmVxIChyZXNvbHZlLCByZWplY3QsIHJlcSkge1xuICAvLyBUaGVzZSB0aGluZ3MgYXJlIGFsbW9zdCBpbXBvc3NpYmxlIHRvIHRlc3Qgd2l0aCBmYWtlSW5kZXhlZERCIHNhZGx5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcik7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJlcS5vbmJsb2NrZWQgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKCdJREIgYmxvY2tlZCcpKTtcbiAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURhdGFiYXNlIChkYk5hbWUpIHtcbiAgY29uc3QgZGIgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCBEQl9WRVJTSU9OX0NVUlJFTlQpO1xuICAgIG9wZW5JbmRleGVkREJSZXF1ZXN0c1tkYk5hbWVdID0gcmVxO1xuICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBlID0+IHtcbiAgICAgIC8vIFRlY2huaWNhbGx5IHRoZXJlIGlzIG9ubHkgb25lIHZlcnNpb24sIHNvIHdlIGRvbid0IG5lZWQgdGhpcyBgaWZgIGNoZWNrXG4gICAgICAvLyBCdXQgaWYgYW4gb2xkIHZlcnNpb24gb2YgdGhlIEpTIGlzIGluIGFub3RoZXIgYnJvd3NlciB0YWJcbiAgICAgIC8vIGFuZCBpdCBnZXRzIHVwZ3JhZGVkIGluIHRoZSBmdXR1cmUgYW5kIHdlIGhhdmUgYSBuZXcgREIgdmVyc2lvbiwgd2VsbC4uLlxuICAgICAgLy8gYmV0dGVyIHNhZmUgdGhhbiBzb3JyeS5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoZS5vbGRWZXJzaW9uIDwgREJfVkVSU0lPTl9JTklUSUFMKSB7XG4gICAgICAgIGluaXRpYWxNaWdyYXRpb24ocmVxLnJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBoYW5kbGVPcGVuT3JEZWxldGVSZXEocmVzb2x2ZSwgcmVqZWN0LCByZXEpO1xuICB9KTtcbiAgLy8gSGFuZGxlIGFibm9ybWFsIGNsb3NlcywgZS5nLiBcImRlbGV0ZSBkYXRhYmFzZVwiIGluIGNocm9tZSBkZXYgdG9vbHMuXG4gIC8vIE5vIG5lZWQgZm9yIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGJlY2F1c2Ugb25jZSB0aGUgREIgY2FuIG5vIGxvbmdlclxuICAvLyBmaXJlIFwiY2xvc2VcIiBldmVudHMsIGl0IHdpbGwgYXV0by1HQy5cbiAgLy8gVW5mb3J0dW5hdGVseSBjYW5ub3QgdGVzdCBpbiBmYWtlSW5kZXhlZERCOiBodHRwczovL2dpdGh1Yi5jb20vZHVtYm1hdHRlci9mYWtlSW5kZXhlZERCL2lzc3Vlcy81MFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBkYi5vbmNsb3NlID0gKCkgPT4gY2xvc2VEYXRhYmFzZShkYk5hbWUpO1xuICByZXR1cm4gZGJcbn1cblxuZnVuY3Rpb24gb3BlbkRhdGFiYXNlIChkYk5hbWUpIHtcbiAgaWYgKCFkYXRhYmFzZUNhY2hlW2RiTmFtZV0pIHtcbiAgICBkYXRhYmFzZUNhY2hlW2RiTmFtZV0gPSBjcmVhdGVEYXRhYmFzZShkYk5hbWUpO1xuICB9XG4gIHJldHVybiBkYXRhYmFzZUNhY2hlW2RiTmFtZV1cbn1cblxuZnVuY3Rpb24gZGJQcm9taXNlIChkYiwgc3RvcmVOYW1lLCByZWFkT25seU9yUmVhZFdyaXRlLCBjYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIFVzZSByZWxheGVkIGR1cmFiaWxpdHkgYmVjYXVzZSBuZWl0aGVyIHRoZSBlbW9qaSBkYXRhIG5vciB0aGUgZmF2b3JpdGVzL3ByZWZlcnJlZCBza2luIHRvbmVcbiAgICAvLyBhcmUgcmVhbGx5IGlycmVwbGFjZWFibGUgZGF0YS4gSW5kZXhlZERCIGlzIGp1c3QgYSBjYWNoZSBpbiB0aGlzIGNhc2UuXG4gICAgY29uc3QgdHhuID0gZGIudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCByZWFkT25seU9yUmVhZFdyaXRlLCB7IGR1cmFiaWxpdHk6ICdyZWxheGVkJyB9KTtcbiAgICBjb25zdCBzdG9yZSA9IHR5cGVvZiBzdG9yZU5hbWUgPT09ICdzdHJpbmcnXG4gICAgICA/IHR4bi5vYmplY3RTdG9yZShzdG9yZU5hbWUpXG4gICAgICA6IHN0b3JlTmFtZS5tYXAobmFtZSA9PiB0eG4ub2JqZWN0U3RvcmUobmFtZSkpO1xuICAgIGxldCByZXM7XG4gICAgY2Ioc3RvcmUsIHR4biwgKHJlc3VsdCkgPT4ge1xuICAgICAgcmVzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgdHhuLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKHJlcyk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0eG4ub25lcnJvciA9ICgpID0+IHJlamVjdCh0eG4uZXJyb3IpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBjbG9zZURhdGFiYXNlIChkYk5hbWUpIHtcbiAgLy8gY2xvc2UgYW55IG9wZW4gcmVxdWVzdHNcbiAgY29uc3QgcmVxID0gb3BlbkluZGV4ZWREQlJlcXVlc3RzW2RiTmFtZV07XG4gIGNvbnN0IGRiID0gcmVxICYmIHJlcS5yZXN1bHQ7XG4gIGlmIChkYikge1xuICAgIGRiLmNsb3NlKCk7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVsZXRlIG9wZW5JbmRleGVkREJSZXF1ZXN0c1tkYk5hbWVdO1xuICBkZWxldGUgZGF0YWJhc2VDYWNoZVtkYk5hbWVdO1xuICBkZWxldGUgb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEYXRhYmFzZSAoZGJOYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gY2xvc2UgYW55IG9wZW4gcmVxdWVzdHNcbiAgICBjbG9zZURhdGFiYXNlKGRiTmFtZSk7XG4gICAgY29uc3QgcmVxID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKGRiTmFtZSk7XG4gICAgaGFuZGxlT3Blbk9yRGVsZXRlUmVxKHJlc29sdmUsIHJlamVjdCwgcmVxKTtcbiAgfSlcbn1cblxuLy8gVGhlIFwiY2xvc2VcIiBldmVudCBvY2N1cnMgZHVyaW5nIGFuIGFibm9ybWFsIHNodXRkb3duLCBlLmcuIGEgdXNlciBjbGVhcmluZyB0aGVpciBicm93c2VyIGRhdGEuXG4vLyBIb3dldmVyLCBpdCBkb2Vzbid0IG9jY3VyIHdpdGggdGhlIG5vcm1hbCBcImNsb3NlXCIgZXZlbnQsIHNvIHdlIGhhbmRsZSB0aGF0IHNlcGFyYXRlbHkuXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvSW5kZXhlZERCLyNjbG9zZS1hLWRhdGFiYXNlLWNvbm5lY3Rpb25cbmZ1bmN0aW9uIGFkZE9uQ2xvc2VMaXN0ZW5lciAoZGJOYW1lLCBsaXN0ZW5lcikge1xuICBsZXQgbGlzdGVuZXJzID0gb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdO1xuICBpZiAoIWxpc3RlbmVycykge1xuICAgIGxpc3RlbmVycyA9IG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXSA9IFtdO1xuICB9XG4gIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn1cblxuLy8gbGlzdCBvZiBlbW90aWNvbnMgdGhhdCBkb24ndCBtYXRjaCBhIHNpbXBsZSBcXFcrIHJlZ2V4XG4vLyBleHRyYWN0ZWQgdXNpbmc6XG4vLyByZXF1aXJlKCdlbW9qaS1waWNrZXItZWxlbWVudC1kYXRhL2VuL2Vtb2ppYmFzZS9kYXRhLmpzb24nKS5tYXAoXyA9PiBfLmVtb3RpY29uKS5maWx0ZXIoQm9vbGVhbikuZmlsdGVyKF8gPT4gIS9eXFxXKyQvLnRlc3QoXykpXG5jb25zdCBpcnJlZ3VsYXJFbW90aWNvbnMgPSBuZXcgU2V0KFtcbiAgJzpEJywgJ1hEJywgXCI6J0RcIiwgJ086KScsXG4gICc6WCcsICc6UCcsICc7UCcsICdYUCcsXG4gICc6TCcsICc6WicsICc6aicsICc4RCcsXG4gICdYTycsICc4KScsICc6QicsICc6TycsXG4gICc6UycsIFwiOidvXCIsICdEeCcsICdYKCcsXG4gICdEOicsICc6QycsICc+MCknLCAnOjMnLFxuICAnPC8zJywgJzwzJywgJ1xcXFxNLycsICc6RScsXG4gICc4Iydcbl0pO1xuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW5zIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5zcGxpdCgvW1xcc19dKy8pXG4gICAgLm1hcCh3b3JkID0+IHtcbiAgICAgIGlmICghd29yZC5tYXRjaCgvXFx3LykgfHwgaXJyZWd1bGFyRW1vdGljb25zLmhhcyh3b3JkKSkge1xuICAgICAgICAvLyBmb3IgcHVyZSBlbW90aWNvbnMgbGlrZSA6KSBvciA6LSksIGp1c3QgbGVhdmUgdGhlbSBhcy1pc1xuICAgICAgICByZXR1cm4gd29yZC50b0xvd2VyQ2FzZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3b3JkXG4gICAgICAgIC5yZXBsYWNlKC9bKSg6LF0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC/igJkvZywgXCInXCIpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pXG59XG5cbmNvbnN0IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEggPSAyO1xuXG4vLyBUaGlzIGlzIGFuIGV4dHJhIHN0ZXAgaW4gYWRkaXRpb24gdG8gZXh0cmFjdFRva2VucygpLiBUaGUgZGlmZmVyZW5jZSBoZXJlIGlzIHRoYXQgd2UgZXhwZWN0XG4vLyB0aGUgaW5wdXQgdG8gaGF2ZSBhbHJlYWR5IGJlZW4gcnVuIHRocm91Z2ggZXh0cmFjdFRva2VucygpLiBUaGlzIGlzIHVzZWZ1bCBmb3IgY2FzZXMgbGlrZVxuLy8gZW1vdGljb25zLCB3aGVyZSB3ZSBkb24ndCB3YW50IHRvIGRvIGFueSB0b2tlbml6YXRpb24gKGJlY2F1c2UgaXQgbWFrZXMgbm8gc2Vuc2UgdG8gc3BsaXQgdXBcbi8vIFwiPjopXCIgYnkgdGhlIGNvbG9uKSBidXQgd2UgZG8gd2FudCB0byBsb3dlcmNhc2UgaXQgdG8gaGF2ZSBjb25zaXN0ZW50IHNlYXJjaCByZXN1bHRzLCBzbyB0aGF0XG4vLyB0aGUgdXNlciBjYW4gdHlwZSAnOlAnIG9yICc6cCcgYW5kIHN0aWxsIGdldCB0aGUgc2FtZSByZXN1bHQuXG5mdW5jdGlvbiBub3JtYWxpemVUb2tlbnMgKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAoXyA9PiBfLnRvTG93ZXJDYXNlKCkpXG4gICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoID49IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEgpXG59XG5cbi8vIFRyYW5zZm9ybSBlbW9qaSBkYXRhIGZvciBzdG9yYWdlIGluIElEQlxuZnVuY3Rpb24gdHJhbnNmb3JtRW1vamlEYXRhIChlbW9qaURhdGEpIHtcbiAgY29uc3QgcmVzID0gZW1vamlEYXRhLm1hcCgoeyBhbm5vdGF0aW9uLCBlbW90aWNvbiwgZ3JvdXAsIG9yZGVyLCBzaG9ydGNvZGVzLCBza2lucywgdGFncywgZW1vamksIHZlcnNpb24gfSkgPT4ge1xuICAgIGNvbnN0IHRva2VucyA9IFsuLi5uZXcgU2V0KFxuICAgICAgbm9ybWFsaXplVG9rZW5zKFtcbiAgICAgICAgLi4uKHNob3J0Y29kZXMgfHwgW10pLm1hcChleHRyYWN0VG9rZW5zKS5mbGF0KCksXG4gICAgICAgIC4uLnRhZ3MubWFwKGV4dHJhY3RUb2tlbnMpLmZsYXQoKSxcbiAgICAgICAgLi4uZXh0cmFjdFRva2Vucyhhbm5vdGF0aW9uKSxcbiAgICAgICAgZW1vdGljb25cbiAgICAgIF0pXG4gICAgKV0uc29ydCgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIGFubm90YXRpb24sXG4gICAgICBncm91cCxcbiAgICAgIG9yZGVyLFxuICAgICAgdGFncyxcbiAgICAgIHRva2VucyxcbiAgICAgIHVuaWNvZGU6IGVtb2ppLFxuICAgICAgdmVyc2lvblxuICAgIH07XG4gICAgaWYgKGVtb3RpY29uKSB7XG4gICAgICByZXMuZW1vdGljb24gPSBlbW90aWNvbjtcbiAgICB9XG4gICAgaWYgKHNob3J0Y29kZXMpIHtcbiAgICAgIHJlcy5zaG9ydGNvZGVzID0gc2hvcnRjb2RlcztcbiAgICB9XG4gICAgaWYgKHNraW5zKSB7XG4gICAgICByZXMuc2tpblRvbmVzID0gW107XG4gICAgICByZXMuc2tpblVuaWNvZGVzID0gW107XG4gICAgICByZXMuc2tpblZlcnNpb25zID0gW107XG4gICAgICBmb3IgKGNvbnN0IHsgdG9uZSwgZW1vamksIHZlcnNpb24gfSBvZiBza2lucykge1xuICAgICAgICByZXMuc2tpblRvbmVzLnB1c2godG9uZSk7XG4gICAgICAgIHJlcy5za2luVW5pY29kZXMucHVzaChlbW9qaSk7XG4gICAgICAgIHJlcy5za2luVmVyc2lvbnMucHVzaCh2ZXJzaW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRoYXQgaGVscCBjb21wcmVzcyB0aGUgY29kZSBiZXR0ZXJcblxuZnVuY3Rpb24gY2FsbFN0b3JlIChzdG9yZSwgbWV0aG9kLCBrZXksIGNiKSB7XG4gIHN0b3JlW21ldGhvZF0oa2V5KS5vbnN1Y2Nlc3MgPSBlID0+IChjYiAmJiBjYihlLnRhcmdldC5yZXN1bHQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SURCIChzdG9yZSwga2V5LCBjYikge1xuICBjYWxsU3RvcmUoc3RvcmUsICdnZXQnLCBrZXksIGNiKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsSURCIChzdG9yZSwga2V5LCBjYikge1xuICBjYWxsU3RvcmUoc3RvcmUsICdnZXRBbGwnLCBrZXksIGNiKTtcbn1cblxuZnVuY3Rpb24gY29tbWl0ICh0eG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR4bi5jb21taXQpIHtcbiAgICB0eG4uY29tbWl0KCk7XG4gIH1cbn1cblxuLy8gbGlrZSBsb2Rhc2gncyBtaW5CeVxuZnVuY3Rpb24gbWluQnkgKGFycmF5LCBmdW5jKSB7XG4gIGxldCBtaW5JdGVtID0gYXJyYXlbMF07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gYXJyYXlbaV07XG4gICAgaWYgKGZ1bmMobWluSXRlbSkgPiBmdW5jKGl0ZW0pKSB7XG4gICAgICBtaW5JdGVtID0gaXRlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbkl0ZW1cbn1cblxuLy8gcmV0dXJuIGFuIGFycmF5IG9mIHJlc3VsdHMgcmVwcmVzZW50aW5nIGFsbCBpdGVtcyB0aGF0IGFyZSBmb3VuZCBpbiBlYWNoIG9uZSBvZiB0aGUgYXJyYXlzXG4vL1xuXG5mdW5jdGlvbiBmaW5kQ29tbW9uTWVtYmVycyAoYXJyYXlzLCB1bmlxQnlGdW5jKSB7XG4gIGNvbnN0IHNob3J0ZXN0QXJyYXkgPSBtaW5CeShhcnJheXMsIF8gPT4gXy5sZW5ndGgpO1xuICBjb25zdCByZXN1bHRzID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBzaG9ydGVzdEFycmF5KSB7XG4gICAgLy8gaWYgdGhpcyBpdGVtIGlzIGluY2x1ZGVkIGluIGV2ZXJ5IGFycmF5IGluIHRoZSBpbnRlcm1lZGlhdGUgcmVzdWx0cywgYWRkIGl0IHRvIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgaWYgKCFhcnJheXMuc29tZShhcnJheSA9PiBhcnJheS5maW5kSW5kZXgoXyA9PiB1bmlxQnlGdW5jKF8pID09PSB1bmlxQnlGdW5jKGl0ZW0pKSA9PT0gLTEpKSB7XG4gICAgICByZXN1bHRzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGlzRW1wdHkgKGRiKSB7XG4gIHJldHVybiAhKGF3YWl0IGdldChkYiwgU1RPUkVfS0VZVkFMVUUsIEtFWV9VUkwpKVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYXNEYXRhIChkYiwgdXJsLCBlVGFnKSB7XG4gIGNvbnN0IFtvbGRFVGFnLCBvbGRVcmxdID0gYXdhaXQgUHJvbWlzZS5hbGwoW0tFWV9FVEFHLCBLRVlfVVJMXVxuICAgIC5tYXAoa2V5ID0+IGdldChkYiwgU1RPUkVfS0VZVkFMVUUsIGtleSkpKTtcbiAgcmV0dXJuIChvbGRFVGFnID09PSBlVGFnICYmIG9sZFVybCA9PT0gdXJsKVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb0Z1bGxEYXRhYmFzZVNjYW5Gb3JTaW5nbGVSZXN1bHQgKGRiLCBwcmVkaWNhdGUpIHtcbiAgLy8gVGhpcyBiYXRjaGluZyBhbGdvcml0aG0gaXMganVzdCBhIHBlcmYgaW1wcm92ZW1lbnQgb3ZlciBhIGJhc2ljXG4gIC8vIGN1cnNvci4gVGhlIEJBVENIX1NJWkUgaXMgYW4gZXN0aW1hdGUgb2Ygd2hhdCB3b3VsZCBnaXZlIHRoZSBiZXN0XG4gIC8vIHBlcmYgZm9yIGRvaW5nIGEgZnVsbCBEQiBzY2FuICh3b3JzdCBjYXNlKS5cbiAgLy9cbiAgLy8gTWluaS1iZW5jaG1hcmsgZm9yIGRldGVybWluaW5nIHRoZSBiZXN0IGJhdGNoIHNpemU6XG4gIC8vXG4gIC8vIFBFUkY9MSB5YXJuIGJ1aWxkOnJvbGx1cCAmJiB5YXJuIHRlc3Q6YWRob2NcbiAgLy9cbiAgLy8gKGFzeW5jICgpID0+IHtcbiAgLy8gICBwZXJmb3JtYW5jZS5tYXJrKCdzdGFydCcpXG4gIC8vICAgYXdhaXQgJCgnZW1vamktcGlja2VyJykuZGF0YWJhc2UuZ2V0RW1vamlCeVNob3J0Y29kZSgnZG9lc25vdGV4aXN0JylcbiAgLy8gICBwZXJmb3JtYW5jZS5tZWFzdXJlKCd0b3RhbCcsICdzdGFydCcpXG4gIC8vICAgY29uc29sZS5sb2cocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSgndG90YWwnKS5zbGljZSgtMSlbMF0uZHVyYXRpb24pXG4gIC8vIH0pKClcbiAgY29uc3QgQkFUQ0hfU0laRSA9IDUwOyAvLyBUeXBpY2FsbHkgYXJvdW5kIDE1MG1zIGZvciA2eCBzbG93ZG93biBpbiBDaHJvbWUgZm9yIGFib3ZlIGJlbmNobWFya1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IHtcbiAgICBsZXQgbGFzdEtleTtcblxuICAgIGNvbnN0IHByb2Nlc3NOZXh0QmF0Y2ggPSAoKSA9PiB7XG4gICAgICBlbW9qaVN0b3JlLmdldEFsbChsYXN0S2V5ICYmIElEQktleVJhbmdlLmxvd2VyQm91bmQobGFzdEtleSwgdHJ1ZSksIEJBVENIX1NJWkUpLm9uc3VjY2VzcyA9IGUgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgbGFzdEtleSA9IHJlc3VsdC51bmljb2RlO1xuICAgICAgICAgIGlmIChwcmVkaWNhdGUocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHJlc3VsdClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgQkFUQ0hfU0laRSkge1xuICAgICAgICAgIHJldHVybiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc05leHRCYXRjaCgpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHByb2Nlc3NOZXh0QmF0Y2goKTtcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEgKGRiLCBlbW9qaURhdGEsIHVybCwgZVRhZykge1xuICB0cnkge1xuICAgIGNvbnN0IHRyYW5zZm9ybWVkRGF0YSA9IHRyYW5zZm9ybUVtb2ppRGF0YShlbW9qaURhdGEpO1xuICAgIGF3YWl0IGRiUHJvbWlzZShkYiwgW1NUT1JFX0VNT0pJLCBTVE9SRV9LRVlWQUxVRV0sIE1PREVfUkVBRFdSSVRFLCAoW2Vtb2ppU3RvcmUsIG1ldGFTdG9yZV0sIHR4bikgPT4ge1xuICAgICAgbGV0IG9sZEVUYWc7XG4gICAgICBsZXQgb2xkVXJsO1xuICAgICAgbGV0IHRvZG8gPSAwO1xuXG4gICAgICBmdW5jdGlvbiBjaGVja0ZldGNoZWQgKCkge1xuICAgICAgICBpZiAoKyt0b2RvID09PSAyKSB7IC8vIDIgcmVxdWVzdHMgbWFkZVxuICAgICAgICAgIG9uRmV0Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uRmV0Y2hlZCAoKSB7XG4gICAgICAgIGlmIChvbGRFVGFnID09PSBlVGFnICYmIG9sZFVybCA9PT0gdXJsKSB7XG4gICAgICAgICAgLy8gY2hlY2sgYWdhaW4gd2l0aGluIHRoZSB0cmFuc2FjdGlvbiB0byBndWFyZCBhZ2FpbnN0IGNvbmN1cnJlbmN5LCBlLmcuIG11bHRpcGxlIGJyb3dzZXIgdGFic1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGRlbGV0ZSBvbGQgZGF0YVxuICAgICAgICBlbW9qaVN0b3JlLmNsZWFyKCk7XG4gICAgICAgIC8vIGluc2VydCBuZXcgZGF0YVxuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNmb3JtZWREYXRhKSB7XG4gICAgICAgICAgZW1vamlTdG9yZS5wdXQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0YVN0b3JlLnB1dChlVGFnLCBLRVlfRVRBRyk7XG4gICAgICAgIG1ldGFTdG9yZS5wdXQodXJsLCBLRVlfVVJMKTtcbiAgICAgICAgY29tbWl0KHR4bik7XG4gICAgICB9XG5cbiAgICAgIGdldElEQihtZXRhU3RvcmUsIEtFWV9FVEFHLCByZXN1bHQgPT4ge1xuICAgICAgICBvbGRFVGFnID0gcmVzdWx0O1xuICAgICAgICBjaGVja0ZldGNoZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBnZXRJREIobWV0YVN0b3JlLCBLRVlfVVJMLCByZXN1bHQgPT4ge1xuICAgICAgICBvbGRVcmwgPSByZXN1bHQ7XG4gICAgICAgIGNoZWNrRmV0Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeUdyb3VwIChkYiwgZ3JvdXApIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRU1PSkksIE1PREVfUkVBRE9OTFksIChlbW9qaVN0b3JlLCB0eG4sIGNiKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChbZ3JvdXAsIDBdLCBbZ3JvdXAgKyAxLCAwXSwgZmFsc2UsIHRydWUpO1xuICAgIGdldEFsbElEQihlbW9qaVN0b3JlLmluZGV4KElOREVYX0dST1VQX0FORF9PUkRFUiksIHJhbmdlLCBjYik7XG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppQnlTZWFyY2hRdWVyeSAoZGIsIHF1ZXJ5KSB7XG4gIGNvbnN0IHRva2VucyA9IG5vcm1hbGl6ZVRva2VucyhleHRyYWN0VG9rZW5zKHF1ZXJ5KSk7XG5cbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IHtcbiAgICAvLyBnZXQgYWxsIHJlc3VsdHMgdGhhdCBjb250YWluIGFsbCB0b2tlbnMgKGkuZS4gYW4gQU5EIHF1ZXJ5KVxuICAgIGNvbnN0IGludGVybWVkaWF0ZVJlc3VsdHMgPSBbXTtcblxuICAgIGNvbnN0IGNoZWNrRG9uZSA9ICgpID0+IHtcbiAgICAgIGlmIChpbnRlcm1lZGlhdGVSZXN1bHRzLmxlbmd0aCA9PT0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBvbkRvbmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25Eb25lID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGZpbmRDb21tb25NZW1iZXJzKGludGVybWVkaWF0ZVJlc3VsdHMsIF8gPT4gXy51bmljb2RlKTtcbiAgICAgIGNiKHJlc3VsdHMuc29ydCgoYSwgYikgPT4gYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IDEpKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgY29uc3QgcmFuZ2UgPSBpID09PSB0b2tlbnMubGVuZ3RoIC0gMVxuICAgICAgICA/IElEQktleVJhbmdlLmJvdW5kKHRva2VuLCB0b2tlbiArICdcXHVmZmZmJywgZmFsc2UsIHRydWUpIC8vIHRyZWF0IGxhc3QgdG9rZW4gYXMgYSBwcmVmaXggc2VhcmNoXG4gICAgICAgIDogSURCS2V5UmFuZ2Uub25seSh0b2tlbik7IC8vIHRyZWF0IGFsbCBvdGhlciB0b2tlbnMgYXMgYW4gZXhhY3QgbWF0Y2hcbiAgICAgIGdldEFsbElEQihlbW9qaVN0b3JlLmluZGV4KElOREVYX1RPS0VOUyksIHJhbmdlLCByZXN1bHQgPT4ge1xuICAgICAgICBpbnRlcm1lZGlhdGVSZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG59XG5cbi8vIFRoaXMgY291bGQgaGF2ZSBiZWVuIGltcGxlbWVudGVkIGFzIGFuIElEQiBpbmRleCBvbiBzaG9ydGNvZGVzLCBidXQgaXQgc2VlbWVkIHdhc3RlZnVsIHRvIGRvIHRoYXRcbi8vIHdoZW4gd2UgY2FuIGFscmVhZHkgcXVlcnkgYnkgdG9rZW5zIGFuZCB0aGlzIHdpbGwgZ2l2ZSB1cyB3aGF0IHdlJ3JlIGxvb2tpbmcgZm9yIDk5LjklIG9mIHRoZSB0aW1lXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5U2hvcnRjb2RlIChkYiwgc2hvcnRjb2RlKSB7XG4gIGNvbnN0IGVtb2ppcyA9IGF3YWl0IGdldEVtb2ppQnlTZWFyY2hRdWVyeShkYiwgc2hvcnRjb2RlKTtcblxuICAvLyBJbiB2ZXJ5IHJhcmUgY2FzZXMgKGUuZy4gdGhlIHNob3J0Y29kZSBcInZcIiBhcyBpbiBcInYgZm9yIHZpY3RvcnlcIiksIHdlIGNhbm5vdCBzZWFyY2ggYmVjYXVzZVxuICAvLyB0aGVyZSBhcmUgbm8gdXNhYmxlIHRva2VucyAodG9vIHNob3J0IGluIHRoaXMgY2FzZSkuIEluIHRoYXQgY2FzZSwgd2UgaGF2ZSB0byBkbyBhbiBpbmVmZmljaWVudFxuICAvLyBmdWxsLWRhdGFiYXNlIHNjYW4sIHdoaWNoIEkgYmVsaWV2ZSBpcyBhbiBhY2NlcHRhYmxlIHRyYWRlb2ZmIGZvciBub3QgaGF2aW5nIHRvIGhhdmUgYW4gZXh0cmFcbiAgLy8gaW5kZXggb24gc2hvcnRjb2Rlcy5cblxuICBpZiAoIWVtb2ppcy5sZW5ndGgpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBfID0+ICgoXy5zaG9ydGNvZGVzIHx8IFtdKS5pbmNsdWRlcyhzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSkpO1xuICAgIHJldHVybiAoYXdhaXQgZG9GdWxsRGF0YWJhc2VTY2FuRm9yU2luZ2xlUmVzdWx0KGRiLCBwcmVkaWNhdGUpKSB8fCBudWxsXG4gIH1cblxuICByZXR1cm4gZW1vamlzLmZpbHRlcihfID0+IHtcbiAgICBjb25zdCBsb3dlclNob3J0Y29kZXMgPSAoXy5zaG9ydGNvZGVzIHx8IFtdKS5tYXAoXyA9PiBfLnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiBsb3dlclNob3J0Y29kZXMuaW5jbHVkZXMoc2hvcnRjb2RlLnRvTG93ZXJDYXNlKCkpXG4gIH0pWzBdIHx8IG51bGxcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeVVuaWNvZGUgKGRiLCB1bmljb2RlKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4gKFxuICAgIGdldElEQihlbW9qaVN0b3JlLCB1bmljb2RlLCByZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gY2IocmVzdWx0KVxuICAgICAgfVxuICAgICAgZ2V0SURCKGVtb2ppU3RvcmUuaW5kZXgoSU5ERVhfU0tJTl9VTklDT0RFKSwgdW5pY29kZSwgcmVzdWx0ID0+IGNiKHJlc3VsdCB8fCBudWxsKSk7XG4gICAgfSlcbiAgKSlcbn1cblxuZnVuY3Rpb24gZ2V0IChkYiwgc3RvcmVOYW1lLCBrZXkpIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgc3RvcmVOYW1lLCBNT0RFX1JFQURPTkxZLCAoc3RvcmUsIHR4biwgY2IpID0+IChcbiAgICBnZXRJREIoc3RvcmUsIGtleSwgY2IpXG4gICkpXG59XG5cbmZ1bmN0aW9uIHNldCAoZGIsIHN0b3JlTmFtZSwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBzdG9yZU5hbWUsIE1PREVfUkVBRFdSSVRFLCAoc3RvcmUsIHR4bikgPT4ge1xuICAgIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICBjb21taXQodHhuKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50IChkYiwgdW5pY29kZSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9GQVZPUklURVMsIE1PREVfUkVBRFdSSVRFLCAoc3RvcmUsIHR4bikgPT4gKFxuICAgIGdldElEQihzdG9yZSwgdW5pY29kZSwgcmVzdWx0ID0+IHtcbiAgICAgIHN0b3JlLnB1dCgocmVzdWx0IHx8IDApICsgMSwgdW5pY29kZSk7XG4gICAgICBjb21taXQodHhuKTtcbiAgICB9KVxuICApKVxufVxuXG5mdW5jdGlvbiBnZXRUb3BGYXZvcml0ZUVtb2ppIChkYiwgY3VzdG9tRW1vamlJbmRleCwgbGltaXQpIHtcbiAgaWYgKGxpbWl0ID09PSAwKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgW1NUT1JFX0ZBVk9SSVRFUywgU1RPUkVfRU1PSkldLCBNT0RFX1JFQURPTkxZLCAoW2Zhdm9yaXRlc1N0b3JlLCBlbW9qaVN0b3JlXSwgdHhuLCBjYikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmYXZvcml0ZXNTdG9yZS5pbmRleChJTkRFWF9DT1VOVCkub3BlbkN1cnNvcih1bmRlZmluZWQsICdwcmV2Jykub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoIWN1cnNvcikgeyAvLyBubyBtb3JlIHJlc3VsdHNcbiAgICAgICAgcmV0dXJuIGNiKHJlc3VsdHMpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFJlc3VsdCAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IGxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuIGNiKHJlc3VsdHMpIC8vIGRvbmUsIHJlYWNoZWQgdGhlIGxpbWl0XG4gICAgICAgIH1cbiAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVuaWNvZGVPck5hbWUgPSBjdXJzb3IucHJpbWFyeUtleTtcbiAgICAgIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUVtb2ppSW5kZXguYnlOYW1lKHVuaWNvZGVPck5hbWUpO1xuICAgICAgaWYgKGN1c3RvbSkge1xuICAgICAgICByZXR1cm4gYWRkUmVzdWx0KGN1c3RvbSlcbiAgICAgIH1cbiAgICAgIC8vIFRoaXMgY291bGQgYmUgZG9uZSBpbiBwYXJhbGxlbCAoaS5lLiBtYWtlIHRoZSBjdXJzb3IgYW5kIHRoZSBnZXQoKXMgcGFyYWxsZWxpemVkKSxcbiAgICAgIC8vIGJ1dCBteSB0ZXN0aW5nIHN1Z2dlc3RzIGl0J3Mgbm90IGFjdHVhbGx5IGZhc3Rlci5cbiAgICAgIGdldElEQihlbW9qaVN0b3JlLCB1bmljb2RlT3JOYW1lLCBlbW9qaSA9PiB7XG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIHJldHVybiBhZGRSZXN1bHQoZW1vamkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZW1vamkgbm90IGZvdW5kIHNvbWVob3csIGlnbm9yZSAobWF5IGhhcHBlbiBpZiBjdXN0b20gZW1vamkgY2hhbmdlKVxuICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pXG59XG5cbi8vIHRyaWUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHByZWZpeCBzZWFyY2hlc1xuLy8gbG9vc2VseSBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vc3Vic3RyaW5nLXRyaWVcblxuY29uc3QgQ09EQV9NQVJLRVIgPSAnJzsgLy8gbWFya3MgdGhlIGVuZCBvZiB0aGUgc3RyaW5nXG5cbmZ1bmN0aW9uIHRyaWUgKGFyciwgaXRlbVRvVG9rZW5zKSB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgIGNvbnN0IHRva2VucyA9IGl0ZW1Ub1Rva2VucyhpdGVtKTtcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgbGV0IGN1cnJlbnRNYXAgPSBtYXA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSB0b2tlbi5jaGFyQXQoaSk7XG4gICAgICAgIGxldCBuZXh0TWFwID0gY3VycmVudE1hcC5nZXQoY2hhcik7XG4gICAgICAgIGlmICghbmV4dE1hcCkge1xuICAgICAgICAgIG5leHRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgY3VycmVudE1hcC5zZXQoY2hhciwgbmV4dE1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1hcCA9IG5leHRNYXA7XG4gICAgICB9XG4gICAgICBsZXQgdmFsdWVzQXRDb2RhID0gY3VycmVudE1hcC5nZXQoQ09EQV9NQVJLRVIpO1xuICAgICAgaWYgKCF2YWx1ZXNBdENvZGEpIHtcbiAgICAgICAgdmFsdWVzQXRDb2RhID0gW107XG4gICAgICAgIGN1cnJlbnRNYXAuc2V0KENPREFfTUFSS0VSLCB2YWx1ZXNBdENvZGEpO1xuICAgICAgfVxuICAgICAgdmFsdWVzQXRDb2RhLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoID0gKHF1ZXJ5LCBleGFjdCkgPT4ge1xuICAgIGxldCBjdXJyZW50TWFwID0gbWFwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBxdWVyeS5jaGFyQXQoaSk7XG4gICAgICBjb25zdCBuZXh0TWFwID0gY3VycmVudE1hcC5nZXQoY2hhcik7XG4gICAgICBpZiAobmV4dE1hcCkge1xuICAgICAgICBjdXJyZW50TWFwID0gbmV4dE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleGFjdCkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGN1cnJlbnRNYXAuZ2V0KENPREFfTUFSS0VSKTtcbiAgICAgIHJldHVybiByZXN1bHRzIHx8IFtdXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIC8vIHRyYXZlcnNlXG4gICAgY29uc3QgcXVldWUgPSBbY3VycmVudE1hcF07XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgY3VycmVudE1hcCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjb25zdCBlbnRyaWVzU29ydGVkQnlLZXkgPSBbLi4uY3VycmVudE1hcC5lbnRyaWVzKCldLnNvcnQoKGEsIGIpID0+IGFbMF0gPCBiWzBdID8gLTEgOiAxKTtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXNTb3J0ZWRCeUtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSBDT0RBX01BUktFUikgeyAvLyBDT0RBX01BUktFUiBhbHdheXMgY29tZXMgZmlyc3Q7IGl0J3MgdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgIHJlc3VsdHMucHVzaCguLi52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfTtcblxuICByZXR1cm4gc2VhcmNoXG59XG5cbmNvbnN0IHJlcXVpcmVkS2V5cyQxID0gW1xuICAnbmFtZScsXG4gICd1cmwnXG5dO1xuXG5mdW5jdGlvbiBhc3NlcnRDdXN0b21FbW9qaXMgKGN1c3RvbUVtb2ppcykge1xuICBjb25zdCBpc0FycmF5ID0gY3VzdG9tRW1vamlzICYmIEFycmF5LmlzQXJyYXkoY3VzdG9tRW1vamlzKTtcbiAgY29uc3QgZmlyc3RJdGVtSXNGYXVsdHkgPSBpc0FycmF5ICYmXG4gICAgY3VzdG9tRW1vamlzLmxlbmd0aCAmJlxuICAgICghY3VzdG9tRW1vamlzWzBdIHx8IHJlcXVpcmVkS2V5cyQxLnNvbWUoa2V5ID0+ICEoa2V5IGluIGN1c3RvbUVtb2ppc1swXSkpKTtcbiAgaWYgKCFpc0FycmF5IHx8IGZpcnN0SXRlbUlzRmF1bHR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gZW1vamlzIGFyZSBpbiB0aGUgd3JvbmcgZm9ybWF0JylcbiAgfVxufVxuXG5mdW5jdGlvbiBjdXN0b21FbW9qaUluZGV4IChjdXN0b21FbW9qaXMpIHtcbiAgYXNzZXJ0Q3VzdG9tRW1vamlzKGN1c3RvbUVtb2ppcyk7XG5cbiAgY29uc3Qgc29ydEJ5TmFtZSA9IChhLCBiKSA9PiBhLm5hbWUudG9Mb3dlckNhc2UoKSA8IGIubmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxO1xuXG4gIC8vXG4gIC8vIGFsbCgpXG4gIC8vXG4gIGNvbnN0IGFsbCA9IGN1c3RvbUVtb2ppcy5zb3J0KHNvcnRCeU5hbWUpO1xuXG4gIC8vXG4gIC8vIHNlYXJjaCgpXG4gIC8vXG4gIGNvbnN0IGVtb2ppVG9Ub2tlbnMgPSBlbW9qaSA9PiAoXG4gICAgWy4uLm5ldyBTZXQoKGVtb2ppLnNob3J0Y29kZXMgfHwgW10pLm1hcChzaG9ydGNvZGUgPT4gZXh0cmFjdFRva2VucyhzaG9ydGNvZGUpKS5mbGF0KCkpXVxuICApO1xuICBjb25zdCBzZWFyY2hUcmllID0gdHJpZShjdXN0b21FbW9qaXMsIGVtb2ppVG9Ub2tlbnMpO1xuICBjb25zdCBzZWFyY2hCeUV4YWN0TWF0Y2ggPSBfID0+IHNlYXJjaFRyaWUoXywgdHJ1ZSk7XG4gIGNvbnN0IHNlYXJjaEJ5UHJlZml4ID0gXyA9PiBzZWFyY2hUcmllKF8sIGZhbHNlKTtcblxuICAvLyBTZWFyY2ggYnkgcXVlcnkgZm9yIGN1c3RvbSBlbW9qaS4gU2ltaWxhciB0byBob3cgd2UgZG8gdGhpcyBpbiBJREIsIHRoZSBsYXN0IHRva2VuXG4gIC8vIGlzIHRyZWF0ZWQgYXMgYSBwcmVmaXggc2VhcmNoLCBidXQgZXZlcnkgb3RoZXIgb25lIGlzIHRyZWF0ZWQgYXMgYW4gZXhhY3QgbWF0Y2guXG4gIC8vIFRoZW4gd2UgQU5EIHRoZSByZXN1bHRzIHRvZ2V0aGVyXG4gIGNvbnN0IHNlYXJjaCA9IHF1ZXJ5ID0+IHtcbiAgICBjb25zdCB0b2tlbnMgPSBleHRyYWN0VG9rZW5zKHF1ZXJ5KTtcbiAgICBjb25zdCBpbnRlcm1lZGlhdGVSZXN1bHRzID0gdG9rZW5zLm1hcCgodG9rZW4sIGkpID0+IChcbiAgICAgIChpIDwgdG9rZW5zLmxlbmd0aCAtIDEgPyBzZWFyY2hCeUV4YWN0TWF0Y2ggOiBzZWFyY2hCeVByZWZpeCkodG9rZW4pXG4gICAgKSk7XG4gICAgcmV0dXJuIGZpbmRDb21tb25NZW1iZXJzKGludGVybWVkaWF0ZVJlc3VsdHMsIF8gPT4gXy5uYW1lKS5zb3J0KHNvcnRCeU5hbWUpXG4gIH07XG5cbiAgLy9cbiAgLy8gYnlTaG9ydGNvZGUsIGJ5TmFtZVxuICAvL1xuICBjb25zdCBzaG9ydGNvZGVUb0Vtb2ppID0gbmV3IE1hcCgpO1xuICBjb25zdCBuYW1lVG9FbW9qaSA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBjdXN0b21FbW9qaSBvZiBjdXN0b21FbW9qaXMpIHtcbiAgICBuYW1lVG9FbW9qaS5zZXQoY3VzdG9tRW1vamkubmFtZS50b0xvd2VyQ2FzZSgpLCBjdXN0b21FbW9qaSk7XG4gICAgZm9yIChjb25zdCBzaG9ydGNvZGUgb2YgKGN1c3RvbUVtb2ppLnNob3J0Y29kZXMgfHwgW10pKSB7XG4gICAgICBzaG9ydGNvZGVUb0Vtb2ppLnNldChzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSwgY3VzdG9tRW1vamkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ5U2hvcnRjb2RlID0gc2hvcnRjb2RlID0+IHNob3J0Y29kZVRvRW1vamkuZ2V0KHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpKTtcbiAgY29uc3QgYnlOYW1lID0gbmFtZSA9PiBuYW1lVG9FbW9qaS5nZXQobmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICByZXR1cm4ge1xuICAgIGFsbCxcbiAgICBzZWFyY2gsXG4gICAgYnlTaG9ydGNvZGUsXG4gICAgYnlOYW1lXG4gIH1cbn1cblxuY29uc3QgaXNGaXJlZm94Q29udGVudFNjcmlwdCA9IHR5cGVvZiB3cmFwcGVkSlNPYmplY3QgIT09ICd1bmRlZmluZWQnO1xuXG4vLyByZW1vdmUgc29tZSBpbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLCBpLmUuIHRoZSBcInRva2Vuc1wiIGFycmF5IG9uIHRoZSBlbW9qaSBvYmplY3Rcbi8vIGVzc2VudGlhbGx5LCBjb252ZXJ0IHRoZSBlbW9qaSBmcm9tIHRoZSB2ZXJzaW9uIHN0b3JlZCBpbiBJREIgdG8gdGhlIHZlcnNpb24gdXNlZCBpbi1tZW1vcnlcbmZ1bmN0aW9uIGNsZWFuRW1vamkgKGVtb2ppKSB7XG4gIGlmICghZW1vamkpIHtcbiAgICByZXR1cm4gZW1vamlcbiAgfVxuICAvLyBpZiBpbnNpZGUgYSBGaXJlZm94IGNvbnRlbnQgc2NyaXB0LCBuZWVkIHRvIGNsb25lIHRoZSBlbW9qaSBvYmplY3QgdG8gcHJldmVudCBGaXJlZm94IGZyb20gY29tcGxhaW5pbmcgYWJvdXRcbiAgLy8gY3Jvc3Mtb3JpZ2luIG9iamVjdC4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vZW1vamktcGlja2VyLWVsZW1lbnQvaXNzdWVzLzM1NlxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRmlyZWZveENvbnRlbnRTY3JpcHQpIHtcbiAgICBlbW9qaSA9IHN0cnVjdHVyZWRDbG9uZShlbW9qaSk7XG4gIH1cbiAgZGVsZXRlIGVtb2ppLnRva2VucztcbiAgaWYgKGVtb2ppLnNraW5Ub25lcykge1xuICAgIGNvbnN0IGxlbiA9IGVtb2ppLnNraW5Ub25lcy5sZW5ndGg7XG4gICAgZW1vamkuc2tpbnMgPSBBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGVtb2ppLnNraW5zW2ldID0ge1xuICAgICAgICB0b25lOiBlbW9qaS5za2luVG9uZXNbaV0sXG4gICAgICAgIHVuaWNvZGU6IGVtb2ppLnNraW5Vbmljb2Rlc1tpXSxcbiAgICAgICAgdmVyc2lvbjogZW1vamkuc2tpblZlcnNpb25zW2ldXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWxldGUgZW1vamkuc2tpblRvbmVzO1xuICAgIGRlbGV0ZSBlbW9qaS5za2luVW5pY29kZXM7XG4gICAgZGVsZXRlIGVtb2ppLnNraW5WZXJzaW9ucztcbiAgfVxuICByZXR1cm4gZW1vamlcbn1cblxuZnVuY3Rpb24gd2FybkVUYWcgKGVUYWcpIHtcbiAgaWYgKCFlVGFnKSB7XG4gICAgY29uc29sZS53YXJuKCdlbW9qaS1waWNrZXItZWxlbWVudCBpcyBtb3JlIGVmZmljaWVudCBpZiB0aGUgZGF0YVNvdXJjZSBzZXJ2ZXIgZXhwb3NlcyBhbiBFVGFnIGhlYWRlci4nKTtcbiAgfVxufVxuXG5jb25zdCByZXF1aXJlZEtleXMgPSBbXG4gICdhbm5vdGF0aW9uJyxcbiAgJ2Vtb2ppJyxcbiAgJ2dyb3VwJyxcbiAgJ29yZGVyJyxcbiAgJ3RhZ3MnLFxuICAndmVyc2lvbidcbl07XG5cbmZ1bmN0aW9uIGFzc2VydEVtb2ppRGF0YSAoZW1vamlEYXRhKSB7XG4gIGlmICghZW1vamlEYXRhIHx8XG4gICAgIUFycmF5LmlzQXJyYXkoZW1vamlEYXRhKSB8fFxuICAgICFlbW9qaURhdGFbMF0gfHxcbiAgICAodHlwZW9mIGVtb2ppRGF0YVswXSAhPT0gJ29iamVjdCcpIHx8XG4gICAgcmVxdWlyZWRLZXlzLnNvbWUoa2V5ID0+ICghKGtleSBpbiBlbW9qaURhdGFbMF0pKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vtb2ppIGRhdGEgaXMgaW4gdGhlIHdyb25nIGZvcm1hdCcpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U3RhdHVzIChyZXNwb25zZSwgZGF0YVNvdXJjZSkge1xuICBpZiAoTWF0aC5mbG9vcihyZXNwb25zZS5zdGF0dXMgLyAxMDApICE9PSAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2g6ICcgKyBkYXRhU291cmNlICsgJzogICcgKyByZXNwb25zZS5zdGF0dXMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RVRhZyAoZGF0YVNvdXJjZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFTb3VyY2UsIHsgbWV0aG9kOiAnSEVBRCcgfSk7XG4gIGFzc2VydFN0YXR1cyhyZXNwb25zZSwgZGF0YVNvdXJjZSk7XG4gIGNvbnN0IGVUYWcgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnZXRhZycpO1xuICB3YXJuRVRhZyhlVGFnKTtcbiAgcmV0dXJuIGVUYWdcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RVRhZ0FuZERhdGEgKGRhdGFTb3VyY2UpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhU291cmNlKTtcbiAgYXNzZXJ0U3RhdHVzKHJlc3BvbnNlLCBkYXRhU291cmNlKTtcbiAgY29uc3QgZVRhZyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdldGFnJyk7XG4gIHdhcm5FVGFnKGVUYWcpO1xuICBjb25zdCBlbW9qaURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGFzc2VydEVtb2ppRGF0YShlbW9qaURhdGEpO1xuICByZXR1cm4gW2VUYWcsIGVtb2ppRGF0YV1cbn1cblxuLy8gVE9ETzogaW5jbHVkaW5nIHRoZXNlIGluIGJsb2ItdXRpbC50cyBjYXVzZXMgdHlwZWRvYyB0byBnZW5lcmF0ZSBkb2NzIGZvciB0aGVtLFxuLy8gZXZlbiB3aXRoIC0tZXhjbHVkZVByaXZhdGUgwq9cXF8o44OEKV8vwq9cbi8qKiBAcHJpdmF0ZSAqL1xuLyoqXG4gKiBDb252ZXJ0IGFuIGBBcnJheUJ1ZmZlcmAgdG8gYSBiaW5hcnkgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciBteVN0cmluZyA9IGJsb2JVdGlsLmFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcoYXJyYXlCdWZmKVxuICogYGBgXG4gKlxuICogQHBhcmFtIGJ1ZmZlciAtIGFycmF5IGJ1ZmZlclxuICogQHJldHVybnMgYmluYXJ5IHN0cmluZ1xuICovXG5mdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmluYXJ5U3RyaW5nKGJ1ZmZlcikge1xuICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIHZhciBsZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoO1xuICAgIHZhciBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xuICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5hcnk7XG59XG4vKipcbiAqIENvbnZlcnQgYSBiaW5hcnkgc3RyaW5nIHRvIGFuIGBBcnJheUJ1ZmZlcmAuXG4gKlxuICogYGBganNcbiAqIHZhciBteUJ1ZmZlciA9IGJsb2JVdGlsLmJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoYmluYXJ5U3RyaW5nKVxuICogYGBgXG4gKlxuICogQHBhcmFtIGJpbmFyeSAtIGJpbmFyeSBzdHJpbmdcbiAqIEByZXR1cm5zIGFycmF5IGJ1ZmZlclxuICovXG5mdW5jdGlvbiBiaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGJpbmFyeSkge1xuICAgIHZhciBsZW5ndGggPSBiaW5hcnkubGVuZ3RoO1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoKTtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcbiAgICAgICAgYXJyW2ldID0gYmluYXJ5LmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5cbi8vIGdlbmVyYXRlIGEgY2hlY2tzdW0gYmFzZWQgb24gdGhlIHN0cmluZ2lmaWVkIEpTT05cbmFzeW5jIGZ1bmN0aW9uIGpzb25DaGVja3N1bSAob2JqZWN0KSB7XG4gIGNvbnN0IGluU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgY29uc3QgaW5CdWZmZXIgPSBiaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGluU3RyaW5nKTtcbiAgLy8gdGhpcyBkb2VzIG5vdCBuZWVkIHRvIGJlIGNyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSwgU0hBLTEgaXMgZmluZVxuICBjb25zdCBvdXRCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTEnLCBpbkJ1ZmZlcik7XG4gIGNvbnN0IG91dEJpblN0cmluZyA9IGFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcob3V0QnVmZmVyKTtcbiAgY29uc3QgcmVzID0gYnRvYShvdXRCaW5TdHJpbmcpO1xuICByZXR1cm4gcmVzXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcyAoZGIsIGRhdGFTb3VyY2UpIHtcbiAgLy8ganVzdCBkbyBhIHNpbXBsZSBIRUFEIHJlcXVlc3QgZmlyc3QgdG8gc2VlIGlmIHRoZSBlVGFncyBtYXRjaFxuICBsZXQgZW1vamlEYXRhO1xuICBsZXQgZVRhZyA9IGF3YWl0IGdldEVUYWcoZGF0YVNvdXJjZSk7XG4gIGlmICghZVRhZykgeyAvLyB3b3JrIGFyb3VuZCBsYWNrIG9mIEVUYWcvQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnNcbiAgICBjb25zdCBlVGFnQW5kRGF0YSA9IGF3YWl0IGdldEVUYWdBbmREYXRhKGRhdGFTb3VyY2UpO1xuICAgIGVUYWcgPSBlVGFnQW5kRGF0YVswXTtcbiAgICBlbW9qaURhdGEgPSBlVGFnQW5kRGF0YVsxXTtcbiAgICBpZiAoIWVUYWcpIHtcbiAgICAgIGVUYWcgPSBhd2FpdCBqc29uQ2hlY2tzdW0oZW1vamlEYXRhKTtcbiAgICB9XG4gIH1cbiAgaWYgKGF3YWl0IGhhc0RhdGEoZGIsIGRhdGFTb3VyY2UsIGVUYWcpKSA7IGVsc2Uge1xuICAgIGlmICghZW1vamlEYXRhKSB7XG4gICAgICBjb25zdCBlVGFnQW5kRGF0YSA9IGF3YWl0IGdldEVUYWdBbmREYXRhKGRhdGFTb3VyY2UpO1xuICAgICAgZW1vamlEYXRhID0gZVRhZ0FuZERhdGFbMV07XG4gICAgfVxuICAgIGF3YWl0IGxvYWREYXRhKGRiLCBlbW9qaURhdGEsIGRhdGFTb3VyY2UsIGVUYWcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhRm9yRmlyc3RUaW1lIChkYiwgZGF0YVNvdXJjZSkge1xuICBsZXQgW2VUYWcsIGVtb2ppRGF0YV0gPSBhd2FpdCBnZXRFVGFnQW5kRGF0YShkYXRhU291cmNlKTtcbiAgaWYgKCFlVGFnKSB7XG4gICAgLy8gSGFuZGxlIGxhY2sgb2Ygc3VwcG9ydCBmb3IgRVRhZyBvciBBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVyc1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvSGVhZGVycy9BY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVycyNCcm93c2VyX2NvbXBhdGliaWxpdHlcbiAgICBlVGFnID0gYXdhaXQganNvbkNoZWNrc3VtKGVtb2ppRGF0YSk7XG4gIH1cblxuICBhd2FpdCBsb2FkRGF0YShkYiwgZW1vamlEYXRhLCBkYXRhU291cmNlLCBlVGFnKTtcbn1cblxuY2xhc3MgRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3RvciAoeyBkYXRhU291cmNlID0gREVGQVVMVF9EQVRBX1NPVVJDRSwgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUsIGN1c3RvbUVtb2ppID0gW10gfSA9IHt9KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLl9kYk5hbWUgPSBgZW1vamktcGlja2VyLWVsZW1lbnQtJHt0aGlzLmxvY2FsZX1gO1xuICAgIHRoaXMuX2RiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhenlVcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tRW1vamlJbmRleChjdXN0b21FbW9qaSk7XG5cbiAgICB0aGlzLl9jbGVhciA9IHRoaXMuX2NsZWFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcmVhZHkgPSB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBhc3luYyBfaW5pdCAoKSB7XG4gICAgY29uc3QgZGIgPSB0aGlzLl9kYiA9IGF3YWl0IG9wZW5EYXRhYmFzZSh0aGlzLl9kYk5hbWUpO1xuXG4gICAgYWRkT25DbG9zZUxpc3RlbmVyKHRoaXMuX2RiTmFtZSwgdGhpcy5fY2xlYXIpO1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgY29uc3QgZW1wdHkgPSBhd2FpdCBpc0VtcHR5KGRiKTtcblxuICAgIGlmIChlbXB0eSkge1xuICAgICAgYXdhaXQgbG9hZERhdGFGb3JGaXJzdFRpbWUoZGIsIGRhdGFTb3VyY2UpO1xuICAgIH0gZWxzZSB7IC8vIG9mZmxpbmUtZmlyc3QgLSBkbyBhbiB1cGRhdGUgYXN5bmNocm9ub3VzbHlcbiAgICAgIHRoaXMuX2xhenlVcGRhdGUgPSBjaGVja0ZvclVwZGF0ZXMoZGIsIGRhdGFTb3VyY2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlYWR5ICgpIHtcbiAgICBjb25zdCBjaGVja1JlYWR5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZWFkeSkge1xuICAgICAgICB0aGlzLl9yZWFkeSA9IHRoaXMuX2luaXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZWFkeVxuICAgIH07XG4gICAgYXdhaXQgY2hlY2tSZWFkeSgpO1xuICAgIC8vIFRoZXJlJ3MgYSBwb3NzaWJpbGl0eSBvZiBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIHRoZSBlbGVtZW50IGdldHMgYWRkZWQsIHJlbW92ZWQsIGFuZCB0aGVuIGFkZGVkIGFnYWluXG4gICAgLy8gd2l0aCBhIHBhcnRpY3VsYXIgdGltaW5nLCB3aGljaCB3b3VsZCBzZXQgdGhlIF9kYiB0byB1bmRlZmluZWQuXG4gICAgLy8gV2UgKmNvdWxkKiBkbyBhIHdoaWxlIGxvb3AgaGVyZSwgYnV0IHRoYXQgc2VlbXMgZXhjZXNzaXZlIGFuZCBjb3VsZCBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgaWYgKCF0aGlzLl9kYikge1xuICAgICAgYXdhaXQgY2hlY2tSZWFkeSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEVtb2ppQnlHcm91cCAoZ3JvdXApIHtcbiAgICBhc3NlcnROdW1iZXIoZ3JvdXApO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gdW5pcUVtb2ppKGF3YWl0IGdldEVtb2ppQnlHcm91cCh0aGlzLl9kYiwgZ3JvdXApKS5tYXAoY2xlYW5FbW9qaSlcbiAgfVxuXG4gIGFzeW5jIGdldEVtb2ppQnlTZWFyY2hRdWVyeSAocXVlcnkpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyhxdWVyeSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIGNvbnN0IGN1c3RvbXMgPSB0aGlzLl9jdXN0b20uc2VhcmNoKHF1ZXJ5KTtcbiAgICBjb25zdCBuYXRpdmVzID0gdW5pcUVtb2ppKGF3YWl0IGdldEVtb2ppQnlTZWFyY2hRdWVyeSh0aGlzLl9kYiwgcXVlcnkpKS5tYXAoY2xlYW5FbW9qaSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmN1c3RvbXMsXG4gICAgICAuLi5uYXRpdmVzXG4gICAgXVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeVNob3J0Y29kZSAoc2hvcnRjb2RlKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHlTdHJpbmcoc2hvcnRjb2RlKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgY3VzdG9tID0gdGhpcy5fY3VzdG9tLmJ5U2hvcnRjb2RlKHNob3J0Y29kZSk7XG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgcmV0dXJuIGN1c3RvbVxuICAgIH1cbiAgICByZXR1cm4gY2xlYW5FbW9qaShhd2FpdCBnZXRFbW9qaUJ5U2hvcnRjb2RlKHRoaXMuX2RiLCBzaG9ydGNvZGUpKVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeVVuaWNvZGVPck5hbWUgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyh1bmljb2RlT3JOYW1lKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgY3VzdG9tID0gdGhpcy5fY3VzdG9tLmJ5TmFtZSh1bmljb2RlT3JOYW1lKTtcbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICByZXR1cm4gY3VzdG9tXG4gICAgfVxuICAgIHJldHVybiBjbGVhbkVtb2ppKGF3YWl0IGdldEVtb2ppQnlVbmljb2RlKHRoaXMuX2RiLCB1bmljb2RlT3JOYW1lKSlcbiAgfVxuXG4gIGFzeW5jIGdldFByZWZlcnJlZFNraW5Ub25lICgpIHtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIChhd2FpdCBnZXQodGhpcy5fZGIsIFNUT1JFX0tFWVZBTFVFLCBLRVlfUFJFRkVSUkVEX1NLSU5UT05FKSkgfHwgMFxuICB9XG5cbiAgYXN5bmMgc2V0UHJlZmVycmVkU2tpblRvbmUgKHNraW5Ub25lKSB7XG4gICAgYXNzZXJ0TnVtYmVyKHNraW5Ub25lKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIHNldCh0aGlzLl9kYiwgU1RPUkVfS0VZVkFMVUUsIEtFWV9QUkVGRVJSRURfU0tJTlRPTkUsIHNraW5Ub25lKVxuICB9XG5cbiAgYXN5bmMgaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50ICh1bmljb2RlT3JOYW1lKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHlTdHJpbmcodW5pY29kZU9yTmFtZSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiBpbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQodGhpcy5fZGIsIHVuaWNvZGVPck5hbWUpXG4gIH1cblxuICBhc3luYyBnZXRUb3BGYXZvcml0ZUVtb2ppIChsaW1pdCkge1xuICAgIGFzc2VydE51bWJlcihsaW1pdCk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiAoYXdhaXQgZ2V0VG9wRmF2b3JpdGVFbW9qaSh0aGlzLl9kYiwgdGhpcy5fY3VzdG9tLCBsaW1pdCkpLm1hcChjbGVhbkVtb2ppKVxuICB9XG5cbiAgc2V0IGN1c3RvbUVtb2ppIChjdXN0b21FbW9qaXMpIHtcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b21FbW9qaUluZGV4KGN1c3RvbUVtb2ppcyk7XG4gIH1cblxuICBnZXQgY3VzdG9tRW1vamkgKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b20uYWxsXG4gIH1cblxuICBhc3luYyBfc2h1dGRvd24gKCkge1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTsgLy8gcmVvcGVuIGlmIHdlJ3ZlIGFscmVhZHkgYmVlbiBjbG9zZWQvZGVsZXRlZFxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9sYXp5VXBkYXRlOyAvLyBhbGxvdyBhbnkgbGF6eSB1cGRhdGVzIHRvIHByb2Nlc3MgYmVmb3JlIGNsb3NpbmcvZGVsZXRpbmdcbiAgICB9IGNhdGNoIChlcnIpIHsgLyogaWdub3JlIG5ldHdvcmsgZXJyb3JzIChvZmZsaW5lLWZpcnN0KSAqLyB9XG4gIH1cblxuICAvLyBjbGVhciByZWZlcmVuY2VzIHRvIElEQiwgZS5nLiBkdXJpbmcgYSBjbG9zZSBldmVudFxuICBfY2xlYXIgKCkge1xuICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gY2FsbCByZW1vdmVFdmVudExpc3RlbmVyIG9yIHJlbW92ZSB0aGUgbWFudWFsIFwiY2xvc2VcIiBsaXN0ZW5lcnMuXG4gICAgLy8gVGhlIG1lbW9yeSBsZWFrIHRlc3RzIHByb3ZlIHRoaXMgaXMgdW5uZWNlc3NhcnkuIEl0J3MgYmVjYXVzZTpcbiAgICAvLyAxKSBJREJEYXRhYmFzZXMgdGhhdCBjYW4gbm8gbG9uZ2VyIGZpcmUgXCJjbG9zZVwiIGF1dG9tYXRpY2FsbHkgaGF2ZSBsaXN0ZW5lcnMgR0NlZFxuICAgIC8vIDIpIHdlIGNsZWFyIHRoZSBtYW51YWwgY2xvc2UgbGlzdGVuZXJzIGluIGRhdGFiYXNlTGlmZWN5Y2xlLmpzLlxuICAgIHRoaXMuX2RiID0gdGhpcy5fcmVhZHkgPSB0aGlzLl9sYXp5VXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UgKCkge1xuICAgIGF3YWl0IHRoaXMuX3NodXRkb3duKCk7XG4gICAgYXdhaXQgY2xvc2VEYXRhYmFzZSh0aGlzLl9kYk5hbWUpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlICgpIHtcbiAgICBhd2FpdCB0aGlzLl9zaHV0ZG93bigpO1xuICAgIGF3YWl0IGRlbGV0ZURhdGFiYXNlKHRoaXMuX2RiTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRGF0YWJhc2UgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IFBpY2tlciBmcm9tICcuL3BpY2tlci5qcydcbmltcG9ydCBEYXRhYmFzZSBmcm9tICcuL2RhdGFiYXNlLmpzJ1xuZXhwb3J0IHsgUGlja2VyLCBEYXRhYmFzZSB9XG4iLCJpbXBvcnQgRGF0YWJhc2UgZnJvbSAnLi9kYXRhYmFzZS5qcyc7XG5cbi8vIHZpYSBodHRwczovL3VucGtnLmNvbS9icm93c2UvZW1vamliYXNlLWRhdGFANi4wLjAvbWV0YS9ncm91cHMuanNvblxuY29uc3QgYWxsR3JvdXBzID0gW1xuICBbLTEsICfinKgnLCAnY3VzdG9tJ10sXG4gIFswLCAn8J+YgCcsICdzbWlsZXlzLWVtb3Rpb24nXSxcbiAgWzEsICfwn5GLJywgJ3Blb3BsZS1ib2R5J10sXG4gIFszLCAn8J+QsScsICdhbmltYWxzLW5hdHVyZSddLFxuICBbNCwgJ/CfjY4nLCAnZm9vZC1kcmluayddLFxuICBbNSwgJ/Cfj6DvuI8nLCAndHJhdmVsLXBsYWNlcyddLFxuICBbNiwgJ+KavScsICdhY3Rpdml0aWVzJ10sXG4gIFs3LCAn8J+TnScsICdvYmplY3RzJ10sXG4gIFs4LCAn4puU77iPJywgJ3N5bWJvbHMnXSxcbiAgWzksICfwn4+BJywgJ2ZsYWdzJ11cbl0ubWFwKChbaWQsIGVtb2ppLCBuYW1lXSkgPT4gKHsgaWQsIGVtb2ppLCBuYW1lIH0pKTtcblxuY29uc3QgZ3JvdXBzID0gYWxsR3JvdXBzLnNsaWNlKDEpO1xuXG5jb25zdCBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIID0gMjtcbmNvbnN0IE5VTV9TS0lOX1RPTkVTID0gNjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IHJJQyA9IHR5cGVvZiByZXF1ZXN0SWRsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcmVxdWVzdElkbGVDYWxsYmFjayA6IHNldFRpbWVvdXQ7XG5cbi8vIGNoZWNrIGZvciBaV0ogKHplcm8gd2lkdGggam9pbmVyKSBjaGFyYWN0ZXJcbmZ1bmN0aW9uIGhhc1p3aiAoZW1vamkpIHtcbiAgcmV0dXJuIGVtb2ppLnVuaWNvZGUuaW5jbHVkZXMoJ1xcdTIwMGQnKVxufVxuXG4vLyBGaW5kIG9uZSBnb29kIHJlcHJlc2VudGF0aXZlIGVtb2ppIGZyb20gZWFjaCB2ZXJzaW9uIHRvIHRlc3QgYnkgY2hlY2tpbmcgaXRzIGNvbG9yLlxuLy8gSWRlYWxseSBpdCBzaG91bGQgaGF2ZSBjb2xvciBpbiB0aGUgY2VudGVyLiBGb3Igc29tZSBpbnNwaXJhdGlvbiwgc2VlOlxuLy8gaHR0cHM6Ly9hYm91dC5naXRsYWIuY29tL2Jsb2cvMjAxOC8wNS8zMC9qb3VybmV5LWluLW5hdGl2ZS11bmljb2RlLWVtb2ppL1xuLy9cbi8vIE5vdGUgdGhhdCBmb3IgY2VydGFpbiB2ZXJzaW9ucyAoMTIuMSwgMTMuMSksIHRoZXJlIGlzIG5vIHBvaW50IGluIHRlc3RpbmcgdGhlbSBleHBsaWNpdGx5LCBiZWNhdXNlXG4vLyBhbGwgdGhlIGVtb2ppIGZyb20gdGhpcyB2ZXJzaW9uIGFyZSBjb21wb3VuZC1lbW9qaSBmcm9tIHByZXZpb3VzIHZlcnNpb25zLiBTbyB0aGV5IHdvdWxkIHBhc3MgYSBjb2xvclxuLy8gdGVzdCwgZXZlbiBpbiBicm93c2VycyB0aGF0IGRpc3BsYXkgdGhlbSBhcyBkb3VibGUgZW1vamkuIChFLmcuIFwiZmFjZSBpbiBjbG91ZHNcIiBtaWdodCByZW5kZXIgYXNcbi8vIFwiZmFjZSB3aXRob3V0IG1vdXRoXCIgcGx1cyBcImZvZ1wiLikgVGhlc2UgZW1vamkgY2FuIG9ubHkgYmUgZmlsdGVyZWQgdXNpbmcgdGhlIHdpZHRoIHRlc3QsXG4vLyB3aGljaCBoYXBwZW5zIGluIGNoZWNrWndqU3VwcG9ydC5qcy5cbmNvbnN0IHZlcnNpb25zQW5kVGVzdEVtb2ppID0ge1xuICAn8J+rqCc6IDE1LjEsIC8vIHNoYWtpbmcgaGVhZCwgdGVjaG5pY2FsbHkgZnJvbSB2MTUgYnV0IHNlZSBub3RlIGFib3ZlXG4gICfwn6ugJzogMTQsXG4gICfwn6WyJzogMTMuMSwgLy8gc21pbGluZyBmYWNlIHdpdGggdGVhciwgdGVjaG5pY2FsbHkgZnJvbSB2MTMgYnV0IHNlZSBub3RlIGFib3ZlXG4gICfwn6W7JzogMTIuMSwgLy8gc2FyaSwgdGVjaG5pY2FsbHkgZnJvbSB2MTIgYnV0IHNlZSBub3RlIGFib3ZlXG4gICfwn6WwJzogMTEsXG4gICfwn6SpJzogNSxcbiAgJ/CfkbHigI3imYDvuI8nOiA0LFxuICAn8J+koyc6IDMsXG4gICfwn5GB77iP4oCN8J+XqO+4jyc6IDIsXG4gICfwn5iAJzogMSxcbiAgJ/CfmJDvuI8nOiAwLjcsXG4gICfwn5iDJzogMC42XG59O1xuXG5jb25zdCBUSU1FT1VUX0JFRk9SRV9MT0FESU5HX01FU1NBR0UgPSAxMDAwOyAvLyAxIHNlY29uZFxuY29uc3QgREVGQVVMVF9TS0lOX1RPTkVfRU1PSkkgPSAn8J+WkO+4jyc7XG5jb25zdCBERUZBVUxUX05VTV9DT0xVTU5TID0gODtcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9maXZldGhpcnR5ZWlnaHQuY29tL2ZlYXR1cmVzL3RoZS0xMDAtbW9zdC11c2VkLWVtb2ppcy8gYW5kXG4vLyBodHRwczovL2Jsb2cuZW1vamlwZWRpYS5vcmcvZmFjZWJvb2stcmV2ZWFscy1tb3N0LWFuZC1sZWFzdC11c2VkLWVtb2ppcy8gd2l0aFxuLy8gYSBiaXQgb2YgbXkgb3duIGN1cmF0aW9uLiAoRS5nLiBhdm9pZCB0aGUgXCJPS1wiIGdlc3R1cmUgYmVjYXVzZSBvZiBjb25ub3RhdGlvbnM6XG4vLyBodHRwczovL2Vtb2ppcGVkaWEub3JnL29rLWhhbmQvKVxuY29uc3QgTU9TVF9DT01NT05MWV9VU0VEX0VNT0pJID0gW1xuICAn8J+YiicsXG4gICfwn5iSJyxcbiAgJ+KdpO+4jycsXG4gICfwn5GN77iPJyxcbiAgJ/CfmI0nLFxuICAn8J+YgicsXG4gICfwn5itJyxcbiAgJ+KYuu+4jycsXG4gICfwn5iUJyxcbiAgJ/CfmKknLFxuICAn8J+YjycsXG4gICfwn5KVJyxcbiAgJ/CfmYwnLFxuICAn8J+YmCdcbl07XG5cbi8vIEl0J3MgaW1wb3J0YW50IHRvIGxpc3QgVHdlbW9qaSBNb3ppbGxhIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UsIGJlY2F1c2UgTW96aWxsYSBidW5kbGVzIHRoZWlyXG4vLyBvd24gZm9udCBvbiBzb21lIHBsYXRmb3JtcyAobm90YWJseSBXaW5kb3dzIGFuZCBMaW51eCBhcyBvZiB0aGlzIHdyaXRpbmcpLiBUeXBpY2FsbHksIE1vemlsbGFcbi8vIHVwZGF0ZXMgZmFzdGVyIHRoYW4gdGhlIHVuZGVybHlpbmcgT1MsIGFuZCB3ZSBkb24ndCB3YW50IHRvIHJlbmRlciBvbGRlciBlbW9qaSBpbiBvbmUgZm9udCBhbmRcbi8vIG5ld2VyIGVtb2ppIGluIGFub3RoZXIgZm9udDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9lbW9qaS1waWNrZXItZWxlbWVudC9wdWxsLzI2OCNpc3N1ZWNvbW1lbnQtMTA3MzM0NzI4M1xuY29uc3QgRk9OVF9GQU1JTFkgPSAnXCJUd2Vtb2ppIE1vemlsbGFcIixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsJyArXG4gICdcIk5vdG8gQ29sb3IgRW1vamlcIixcIkVtb2ppT25lIENvbG9yXCIsXCJBbmRyb2lkIEVtb2ppXCIsc2Fucy1zZXJpZic7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBERUZBVUxUX0NBVEVHT1JZX1NPUlRJTkcgPSAoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG5cbi8vIFRlc3QgaWYgYW4gZW1vamkgaXMgc3VwcG9ydGVkIGJ5IHJlbmRlcmluZyBpdCB0byBjYW52YXMgYW5kIGNoZWNraW5nIHRoYXQgdGhlIGNvbG9yIGlzIG5vdCBibGFja1xuLy8gU2VlIGh0dHBzOi8vYWJvdXQuZ2l0bGFiLmNvbS9ibG9nLzIwMTgvMDUvMzAvam91cm5leS1pbi1uYXRpdmUtdW5pY29kZS1lbW9qaS9cbi8vIGFuZCBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9pZi1lbW9qaSBmb3IgaW5zcGlyYXRpb25cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgbGFyZ2VseSBib3Jyb3dlZCBmcm9tIGlmLWVtb2ppLCBhZGRpbmcgdGhlIGZvbnQtZmFtaWx5XG5cblxuY29uc3QgZ2V0VGV4dEZlYXR1cmUgPSAodGV4dCwgY29sb3IpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5oZWlnaHQgPSAxO1xuXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gIGN0eC5mb250ID0gYDEwMHB4ICR7Rk9OVF9GQU1JTFl9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguc2NhbGUoMC4wMSwgMC4wMSk7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCAwKTtcblxuICByZXR1cm4gY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhXG59O1xuXG5jb25zdCBjb21wYXJlRmVhdHVyZXMgPSAoZmVhdHVyZTEsIGZlYXR1cmUyKSA9PiB7XG4gIGNvbnN0IGZlYXR1cmUxU3RyID0gWy4uLmZlYXR1cmUxXS5qb2luKCcsJyk7XG4gIGNvbnN0IGZlYXR1cmUyU3RyID0gWy4uLmZlYXR1cmUyXS5qb2luKCcsJyk7XG4gIC8vIFRoaXMgaXMgUkdCQSwgc28gZm9yIDAsMCwwLCB3ZSBhcmUgY2hlY2tpbmcgdGhhdCB0aGUgZmlyc3QgUkdCIGlzIG5vdCBhbGwgemVyb2VzLlxuICAvLyBNb3N0IG9mIHRoZSB0aW1lIHdoZW4gdW5zdXBwb3J0ZWQgdGhpcyBpcyAwLDAsMCwwLCBidXQgb24gQ2hyb21lIG9uIE1hYyBpdCBpc1xuICAvLyAwLDAsMCw2MSAtIHRoZXJlIGlzIGEgdHJhbnNwYXJlbmN5IGhlcmUuXG4gIHJldHVybiBmZWF0dXJlMVN0ciA9PT0gZmVhdHVyZTJTdHIgJiYgIWZlYXR1cmUxU3RyLnN0YXJ0c1dpdGgoJzAsMCwwLCcpXG59O1xuXG5mdW5jdGlvbiB0ZXN0Q29sb3JFbW9qaVN1cHBvcnRlZCAodGV4dCkge1xuICAvLyBSZW5kZXIgd2hpdGUgYW5kIGJsYWNrIGFuZCB0aGVuIGNvbXBhcmUgdGhlbSB0byBlYWNoIG90aGVyIGFuZCBlbnN1cmUgdGhleSdyZSB0aGUgc2FtZVxuICAvLyBjb2xvciwgYW5kIG5laXRoZXIgb25lIGlzIGJsYWNrLiBUaGlzIHNob3dzIHRoYXQgdGhlIGVtb2ppIHdhcyByZW5kZXJlZCBpbiBjb2xvci5cbiAgY29uc3QgZmVhdHVyZTEgPSBnZXRUZXh0RmVhdHVyZSh0ZXh0LCAnIzAwMCcpO1xuICBjb25zdCBmZWF0dXJlMiA9IGdldFRleHRGZWF0dXJlKHRleHQsICcjZmZmJyk7XG4gIHJldHVybiBmZWF0dXJlMSAmJiBmZWF0dXJlMiAmJiBjb21wYXJlRmVhdHVyZXMoZmVhdHVyZTEsIGZlYXR1cmUyKVxufVxuXG4vLyByYXRoZXIgdGhhbiBjaGVjayBldmVyeSBlbW9qaSBldmVyLCB3aGljaCB3b3VsZCBiZSBleHBlbnNpdmUsIGp1c3QgY2hlY2sgc29tZSByZXByZXNlbnRhdGl2ZXMgZnJvbSB0aGVcbi8vIGRpZmZlcmVudCBlbW9qaSByZWxlYXNlcyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgZm9udCBzdXBwb3J0c1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVFbW9qaVN1cHBvcnRMZXZlbCAoKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyh2ZXJzaW9uc0FuZFRlc3RFbW9qaSk7XG4gIHRyeSB7XG4gICAgLy8gc3RhcnQgd2l0aCBsYXRlc3QgZW1vamkgYW5kIHdvcmsgYmFja3dhcmRzXG4gICAgZm9yIChjb25zdCBbZW1vamksIHZlcnNpb25dIG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICh0ZXN0Q29sb3JFbW9qaVN1cHBvcnRlZChlbW9qaSkpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgLy8gY2FudmFzIGVycm9yXG4gIH0gZmluYWxseSB7XG4gIH1cbiAgLy8gSW4gY2FzZSBvZiBhbiBlcnJvciwgYmUgZ2VuZXJvdXMgYW5kIGp1c3QgYXNzdW1lIGFsbCBlbW9qaSBhcmUgc3VwcG9ydGVkIChlLmcuIGZvciBjYW52YXMgZXJyb3JzXG4gIC8vIGR1ZSB0byBhbnRpLWZpbmdlcnByaW50aW5nIGFkZC1vbnMpLiBCZXR0ZXIgdG8gc2hvdyBzb21lIGdyYXkgYm94ZXMgdGhhbiBub3RoaW5nIGF0IGFsbC5cbiAgcmV0dXJuIGVudHJpZXNbMF1bMV0gLy8gZmlyc3Qgb25lIGluIHRoZSBsaXN0IGlzIHRoZSBtb3N0IHJlY2VudCB2ZXJzaW9uXG59XG5cbi8vIENoZWNrIHdoaWNoIGVtb2ppcyB3ZSBrbm93IGZvciBzdXJlIGFyZW4ndCBzdXBwb3J0ZWQsIGJhc2VkIG9uIFVuaWNvZGUgdmVyc2lvbiBsZXZlbFxubGV0IHByb21pc2U7XG5jb25zdCBkZXRlY3RFbW9qaVN1cHBvcnRMZXZlbCA9ICgpID0+IHtcbiAgaWYgKCFwcm9taXNlKSB7XG4gICAgLy8gRGVsYXkgc28gaXQgY2FuIHJ1biB3aGlsZSB0aGUgSURCIGRhdGFiYXNlIGlzIGJlaW5nIGNyZWF0ZWQgYnkgdGhlIGJyb3dzZXIgKG9uIGFub3RoZXIgdGhyZWFkKS5cbiAgICAvLyBUaGlzIGhlbHBzIGVzcGVjaWFsbHkgd2l0aCBmaXJzdCBsb2FkIOKAkyB3ZSB3YW50IHRvIHN0YXJ0IHByZS1wb3B1bGF0aW5nIHRoZSBkYXRhYmFzZSBvbiB0aGUgbWFpbiB0aHJlYWQsXG4gICAgLy8gYW5kIHRoZW4gd2FpdCBmb3IgSURCIHRvIGNvbW1pdCBldmVyeXRoaW5nLCBhbmQgd2hpbGUgd2FpdGluZyB3ZSBydW4gdGhpcyBjaGVjay5cbiAgICBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiAoXG4gICAgICBySUMoKCkgPT4gKFxuICAgICAgICByZXNvbHZlKGRldGVybWluZUVtb2ppU3VwcG9ydExldmVsKCkpIC8vIGRlbGF5IHNvIGlkZWFsbHkgdGhpcyBjYW4gcnVuIHdoaWxlIElEQiBpcyBmaXJzdCBwb3B1bGF0aW5nXG4gICAgICApKVxuICAgICkpO1xuICB9XG4gIHJldHVybiBwcm9taXNlXG59O1xuLy8gZGV0ZXJtaW5lIHdoaWNoIGVtb2ppcyBjb250YWluaW5nIFpXSiAoemVybyB3aWR0aCBqb2luZXIpIGNoYXJhY3RlcnNcbi8vIGFyZSBzdXBwb3J0ZWQgKHJlbmRlcmVkIGFzIG9uZSBnbHlwaCkgcmF0aGVyIHRoYW4gdW5zdXBwb3J0ZWQgKHJlbmRlcmVkIGFzIHR3byBvciBtb3JlIGdseXBocylcbmNvbnN0IHN1cHBvcnRlZFp3akVtb2ppcyA9IG5ldyBNYXAoKTtcblxuY29uc3QgVkFSSUFUSU9OX1NFTEVDVE9SID0gJ1xcdWZlMGYnO1xuY29uc3QgU0tJTlRPTkVfTU9ESUZJRVIgPSAnXFx1ZDgzYyc7XG5jb25zdCBaV0ogPSAnXFx1MjAwZCc7XG5jb25zdCBMSUdIVF9TS0lOX1RPTkUgPSAweDFGM0ZCO1xuY29uc3QgTElHSFRfU0tJTl9UT05FX01PRElGSUVSID0gMHhkZmZiO1xuXG4vLyBUT0RPOiB0aGlzIGlzIGEgbmFpdmUgaW1wbGVtZW50YXRpb24sIHdlIGNhbiBpbXByb3ZlIGl0IGxhdGVyXG4vLyBJdCdzIG9ubHkgdXNlZCBmb3IgdGhlIHNraW50b25lIHBpY2tlciwgc28gYXMgbG9uZyBhcyBwZW9wbGUgZG9uJ3QgY3VzdG9taXplIHdpdGhcbi8vIHJlYWxseSBleG90aWMgZW1vamkgdGhlbiBpdCBzaG91bGQgd29yayBmaW5lXG5mdW5jdGlvbiBhcHBseVNraW5Ub25lIChzdHIsIHNraW5Ub25lKSB7XG4gIGlmIChza2luVG9uZSA9PT0gMCkge1xuICAgIHJldHVybiBzdHJcbiAgfVxuICBjb25zdCB6d2pJbmRleCA9IHN0ci5pbmRleE9mKFpXSik7XG4gIGlmICh6d2pJbmRleCAhPT0gLTEpIHtcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCB6d2pJbmRleCkgK1xuICAgICAgU3RyaW5nLmZyb21Db2RlUG9pbnQoTElHSFRfU0tJTl9UT05FICsgc2tpblRvbmUgLSAxKSArXG4gICAgICBzdHIuc3Vic3RyaW5nKHp3akluZGV4KVxuICB9XG4gIGlmIChzdHIuZW5kc1dpdGgoVkFSSUFUSU9OX1NFTEVDVE9SKSkge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICB9XG4gIHJldHVybiBzdHIgKyBTS0lOVE9ORV9NT0RJRklFUiArIFN0cmluZy5mcm9tQ29kZVBvaW50KExJR0hUX1NLSU5fVE9ORV9NT0RJRklFUiArIHNraW5Ub25lIC0gMSlcbn1cblxuZnVuY3Rpb24gaGFsdCAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbi8vIEltcGxlbWVudGF0aW9uIGxlZnQvcmlnaHQgb3IgdXAvZG93biBuYXZpZ2F0aW9uLCBjaXJjbGluZyBiYWNrIHdoZW4geW91XG4vLyByZWFjaCB0aGUgc3RhcnQvZW5kIG9mIHRoZSBsaXN0XG5mdW5jdGlvbiBpbmNyZW1lbnRPckRlY3JlbWVudCAoZGVjcmVtZW50LCB2YWwsIGFycikge1xuICB2YWwgKz0gKGRlY3JlbWVudCA/IC0xIDogMSk7XG4gIGlmICh2YWwgPCAwKSB7XG4gICAgdmFsID0gYXJyLmxlbmd0aCAtIDE7XG4gIH0gZWxzZSBpZiAodmFsID49IGFyci5sZW5ndGgpIHtcbiAgICB2YWwgPSAwO1xuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLy8gbGlrZSBsb2Rhc2gncyB1bmlxQnkgYnV0IG11Y2ggc21hbGxlclxuZnVuY3Rpb24gdW5pcUJ5IChhcnIsIGZ1bmMpIHtcbiAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuICBjb25zdCByZXMgPSBbXTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgIGNvbnN0IGtleSA9IGZ1bmMoaXRlbSk7XG4gICAgaWYgKCFzZXQuaGFzKGtleSkpIHtcbiAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIFdlIGRvbid0IG5lZWQgYWxsIHRoZSBkYXRhIG9uIGV2ZXJ5IGVtb2ppLCBhbmQgdGhlcmUgYXJlIHNwZWNpZmljIHRoaW5ncyB3ZSBuZWVkXG4vLyBmb3IgdGhlIFVJLCBzbyBidWlsZCBhIFwidmlldyBtb2RlbFwiIGZyb20gdGhlIGVtb2ppIG9iamVjdCB3ZSBnb3QgZnJvbSB0aGUgZGF0YWJhc2VcblxuZnVuY3Rpb24gc3VtbWFyaXplRW1vamlzRm9yVUkgKGVtb2ppcywgZW1vamlTdXBwb3J0TGV2ZWwpIHtcbiAgY29uc3QgdG9TaW1wbGVTa2luc01hcCA9IHNraW5zID0+IHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHNraW4gb2Ygc2tpbnMpIHtcbiAgICAgIC8vIGlnbm9yZSBhcnJheXMgbGlrZSBbMSwgMl0gd2l0aCBtdWx0aXBsZSBza2luIHRvbmVzXG4gICAgICAvLyBhbHNvIGlnbm9yZSB2YXJpYW50cyB0aGF0IGFyZSBpbiBhbiB1bnN1cHBvcnRlZCBlbW9qaSB2ZXJzaW9uXG4gICAgICAvLyAodGhlc2UgZG8gZXhpc3QgLSB2YXJpYW50cyBmcm9tIGEgZGlmZmVyZW50IHZlcnNpb24gdGhhbiB0aGVpciBiYXNlIGVtb2ppKVxuICAgICAgaWYgKHR5cGVvZiBza2luLnRvbmUgPT09ICdudW1iZXInICYmIHNraW4udmVyc2lvbiA8PSBlbW9qaVN1cHBvcnRMZXZlbCkge1xuICAgICAgICByZXNbc2tpbi50b25lXSA9IHNraW4udW5pY29kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9O1xuXG4gIHJldHVybiBlbW9qaXMubWFwKCh7IHVuaWNvZGUsIHNraW5zLCBzaG9ydGNvZGVzLCB1cmwsIG5hbWUsIGNhdGVnb3J5LCBhbm5vdGF0aW9uIH0pID0+ICh7XG4gICAgdW5pY29kZSxcbiAgICBuYW1lLFxuICAgIHNob3J0Y29kZXMsXG4gICAgdXJsLFxuICAgIGNhdGVnb3J5LFxuICAgIGFubm90YXRpb24sXG4gICAgaWQ6IHVuaWNvZGUgfHwgbmFtZSxcbiAgICBza2luczogc2tpbnMgJiYgdG9TaW1wbGVTa2luc01hcChza2lucylcbiAgfSkpXG59XG5cbi8vIGltcG9ydCByQUYgZnJvbSBvbmUgcGxhY2Ugc28gdGhhdCB0aGUgYnVuZGxlIHNpemUgaXMgYSBiaXQgc21hbGxlclxuY29uc3QgckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4vLyBTdmVsdGUgYWN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgd2lkdGggb2YgYW4gZWxlbWVudCBhbmQgYXV0by11cGRhdGVcbi8vIHVzaW5nIFJlc2l6ZU9ic2VydmVyLiBJZiBSZXNpemVPYnNlcnZlciBpcyB1bnN1cHBvcnRlZCwgd2UganVzdCB1c2UgckFGIG9uY2Vcbi8vIGFuZCBkb24ndCBib3RoZXIgdG8gdXBkYXRlLlxuXG5cbmxldCByZXNpemVPYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gY2FsY3VsYXRlV2lkdGggKG5vZGUsIGFib3J0U2lnbmFsLCBvblVwZGF0ZSkge1xuICBsZXQgcmVzaXplT2JzZXJ2ZXI7XG4gIGlmIChyZXNpemVPYnNlcnZlclN1cHBvcnRlZCkge1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4gKFxuICAgICAgb25VcGRhdGUoZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aClcbiAgICApKTtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xuICB9IGVsc2UgeyAvLyBqdXN0IHNldCB0aGUgd2lkdGggb25jZSwgZG9uJ3QgYm90aGVyIHRyeWluZyB0byB0cmFjayBpdFxuICAgIHJBRigoKSA9PiAoXG4gICAgICBvblVwZGF0ZShub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuICAgICkpO1xuICB9XG5cbiAgLy8gY2xlYW51cCBmdW5jdGlvbiAoY2FsbGVkIG9uIGRlc3Ryb3kpXG4gIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgIGlmIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGdldCB0aGUgd2lkdGggb2YgdGhlIHRleHQgaW5zaWRlIG9mIGEgRE9NIG5vZGUsIHZpYSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTk1MjU4OTEvNjgwNzQyXG5mdW5jdGlvbiBjYWxjdWxhdGVUZXh0V2lkdGggKG5vZGUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAge1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cbn1cblxubGV0IGJhc2VsaW5lRW1vamlXaWR0aDtcblxuZnVuY3Rpb24gY2hlY2tad2pTdXBwb3J0ICh6d2pFbW9qaXNUb0NoZWNrLCBiYXNlbGluZUVtb2ppLCBlbW9qaVRvRG9tTm9kZSkge1xuICBmb3IgKGNvbnN0IGVtb2ppIG9mIHp3akVtb2ppc1RvQ2hlY2spIHtcbiAgICBjb25zdCBkb21Ob2RlID0gZW1vamlUb0RvbU5vZGUoZW1vamkpO1xuICAgIGNvbnN0IGVtb2ppV2lkdGggPSBjYWxjdWxhdGVUZXh0V2lkdGgoZG9tTm9kZSk7XG4gICAgaWYgKHR5cGVvZiBiYXNlbGluZUVtb2ppV2lkdGggPT09ICd1bmRlZmluZWQnKSB7IC8vIGNhbGN1bGF0ZSB0aGUgYmFzZWxpbmUgZW1vamkgd2lkdGggb25seSBvbmNlXG4gICAgICBiYXNlbGluZUVtb2ppV2lkdGggPSBjYWxjdWxhdGVUZXh0V2lkdGgoYmFzZWxpbmVFbW9qaSk7XG4gICAgfVxuICAgIC8vIE9uIFdpbmRvd3MsIHNvbWUgc3VwcG9ydGVkIGVtb2ppIGFyZSB+NTAlIGJpZ2dlciB0aGFuIHRoZSBiYXNlbGluZSBlbW9qaSwgYnV0IHdoYXQgd2UgcmVhbGx5IHdhbnQgdG8gZ3VhcmRcbiAgICAvLyBhZ2FpbnN0IGFyZSB0aGUgb25lcyB0aGF0IGFyZSAyeCB0aGUgc2l6ZSwgYmVjYXVzZSB0aG9zZSBhcmUgdHJ1bHkgYnJva2VuIChwZXJzb24gd2l0aCByZWQgaGFpciA9IHBlcnNvbiB3aXRoXG4gICAgLy8gZmxvYXRpbmcgcmVkIHdpZywgYmxhY2sgY2F0ID0gY2F0IHdpdGggYmxhY2sgc3F1YXJlLCBwb2xhciBiZWFyID0gYmVhciB3aXRoIHNub3dmbGFrZSwgZXRjLilcbiAgICAvLyBTbyBoZXJlIHdlIHNldCB0aGUgdGhyZXNob2xkIGF0IDEuOCB0aW1lcyB0aGUgc2l6ZSBvZiB0aGUgYmFzZWxpbmUgZW1vamkuXG4gICAgY29uc3Qgc3VwcG9ydGVkID0gZW1vamlXaWR0aCAvIDEuOCA8IGJhc2VsaW5lRW1vamlXaWR0aDtcbiAgICBzdXBwb3J0ZWRad2pFbW9qaXMuc2V0KGVtb2ppLnVuaWNvZGUsIHN1cHBvcnRlZCk7XG4gIH1cbn1cblxuLy8gbGlrZSBsb2Rhc2gncyB1bmlxXG5cbmZ1bmN0aW9uIHVuaXEgKGFycikge1xuICByZXR1cm4gdW5pcUJ5KGFyciwgXyA9PiBfKVxufVxuXG4vLyBOb3RlIHdlIHB1dCB0aGlzIGluIGl0cyBvd24gZnVuY3Rpb24gb3V0c2lkZSBQaWNrZXIuanMgdG8gYXZvaWQgU3ZlbHRlIGRvaW5nIGFuIGludmFsaWRhdGlvbiBvbiB0aGUgXCJzZXR0ZXJcIiBoZXJlLlxuLy8gQXQgYmVzdCB0aGUgaW52YWxpZGF0aW9uIGlzIHVzZWxlc3MsIGF0IHdvcnN0IGl0IGNhbiBjYXVzZSBpbmZpbml0ZSBsb29wczpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9lbW9qaS1waWNrZXItZWxlbWVudC9wdWxsLzE4MFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvNjUyMVxuLy8gQWxzbyBub3RlIHRhYnBhbmVsRWxlbWVudCBjYW4gYmUgbnVsbCBpZiB0aGUgZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgY29ubmVjdGVkXG5mdW5jdGlvbiByZXNldFNjcm9sbFRvcElmUG9zc2libGUgKGVsZW1lbnQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsZW1lbnQpIHsgLy8gTWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSB0aGlzIGBpZmAgZ3VhcmRcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbU1hcCAoY2FjaGUsIGtleSwgZnVuYykge1xuICBsZXQgY2FjaGVkID0gY2FjaGUuZ2V0KGtleSk7XG4gIGlmICghY2FjaGVkKSB7XG4gICAgY2FjaGVkID0gZnVuYygpO1xuICAgIGNhY2hlLnNldChrZXksIGNhY2hlZCk7XG4gIH1cbiAgcmV0dXJuIGNhY2hlZFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuICcnICsgdmFsdWVcbn1cblxuZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAoaHRtbFN0cmluZykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiB0ZW1wbGF0ZVxufVxuXG5jb25zdCBwYXJzZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGRvbUluc3RhbmNlc0NhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVua2V5ZWRTeW1ib2wgPSBTeW1ib2woJ3VuLWtleWVkJyk7XG5cbi8vIE5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpIDw9MTNcbmNvbnN0IGhhc1JlcGxhY2VDaGlsZHJlbiA9ICdyZXBsYWNlQ2hpbGRyZW4nIGluIEVsZW1lbnQucHJvdG90eXBlO1xuZnVuY3Rpb24gcmVwbGFjZUNoaWxkcmVuIChwYXJlbnROb2RlLCBuZXdDaGlsZHJlbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaGFzUmVwbGFjZUNoaWxkcmVuKSB7XG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGRyZW4oLi4ubmV3Q2hpbGRyZW4pO1xuICB9IGVsc2UgeyAvLyBtaW5pbWFsIHBvbHlmaWxsIGZvciBFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlQ2hpbGRyZW5cbiAgICBwYXJlbnROb2RlLmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kKC4uLm5ld0NoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb0NoaWxkcmVuTmVlZFJlcmVuZGVyIChwYXJlbnROb2RlLCBuZXdDaGlsZHJlbikge1xuICBsZXQgb2xkQ2hpbGQgPSBwYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gIGxldCBvbGRDaGlsZHJlbkNvdW50ID0gMDtcbiAgLy8gaXRlcmF0ZSB1c2luZyBmaXJzdENoaWxkL25leHRTaWJsaW5nIGJlY2F1c2UgYnJvd3NlcnMgdXNlIGEgbGlua2VkIGxpc3QgdW5kZXIgdGhlIGhvb2RcbiAgd2hpbGUgKG9sZENoaWxkKSB7XG4gICAgY29uc3QgbmV3Q2hpbGQgPSBuZXdDaGlsZHJlbltvbGRDaGlsZHJlbkNvdW50XTtcbiAgICAvLyBjaGVjayBpZiB0aGUgb2xkIGNoaWxkIGFuZCBuZXcgY2hpbGQgYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0NoaWxkICE9PSBvbGRDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgb2xkQ2hpbGQgPSBvbGRDaGlsZC5uZXh0U2libGluZztcbiAgICBvbGRDaGlsZHJlbkNvdW50Kys7XG4gIH1cbiAgLy8gaWYgbmV3IGNoaWxkcmVuIGxlbmd0aCBpcyBkaWZmZXJlbnQgZnJvbSBvbGQsIHdlIG11c3QgcmUtcmVuZGVyXG4gIHJldHVybiBvbGRDaGlsZHJlbkNvdW50ICE9PSBuZXdDaGlsZHJlbi5sZW5ndGhcbn1cblxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbiAobmV3Q2hpbGRyZW4sIGluc3RhbmNlQmluZGluZykge1xuICBjb25zdCB7IHRhcmdldE5vZGUgfSA9IGluc3RhbmNlQmluZGluZztcbiAgbGV0IHsgdGFyZ2V0UGFyZW50Tm9kZSB9ID0gaW5zdGFuY2VCaW5kaW5nO1xuXG4gIGxldCBuZWVkc1JlcmVuZGVyID0gZmFsc2U7XG5cbiAgaWYgKHRhcmdldFBhcmVudE5vZGUpIHsgLy8gYWxyZWFkeSByZW5kZXJlZCBvbmNlXG4gICAgbmVlZHNSZXJlbmRlciA9IGRvQ2hpbGRyZW5OZWVkUmVyZW5kZXIodGFyZ2V0UGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pO1xuICB9IGVsc2UgeyAvLyBmaXJzdCByZW5kZXIgb2YgbGlzdFxuICAgIG5lZWRzUmVyZW5kZXIgPSB0cnVlO1xuICAgIGluc3RhbmNlQmluZGluZy50YXJnZXROb2RlID0gdW5kZWZpbmVkOyAvLyBwbGFjZWhvbGRlciBjb21tZW50IG5vdCBuZWVkZWQgYW55bW9yZSwgZnJlZSBtZW1vcnlcbiAgICBpbnN0YW5jZUJpbmRpbmcudGFyZ2V0UGFyZW50Tm9kZSA9IHRhcmdldFBhcmVudE5vZGUgPSB0YXJnZXROb2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgLy8gYXZvaWQgcmUtcmVuZGVyaW5nIGxpc3QgaWYgdGhlIGRvbSBub2RlcyBhcmUgZXhhY3RseSB0aGUgc2FtZSBiZWZvcmUgYW5kIGFmdGVyXG4gIGlmIChuZWVkc1JlcmVuZGVyKSB7XG4gICAgcmVwbGFjZUNoaWxkcmVuKHRhcmdldFBhcmVudE5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXRjaCAoZXhwcmVzc2lvbnMsIGluc3RhbmNlQmluZGluZ3MpIHtcbiAgZm9yIChjb25zdCBpbnN0YW5jZUJpbmRpbmcgb2YgaW5zdGFuY2VCaW5kaW5ncykge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldE5vZGUsXG4gICAgICBjdXJyZW50RXhwcmVzc2lvbixcbiAgICAgIGJpbmRpbmc6IHtcbiAgICAgICAgZXhwcmVzc2lvbkluZGV4LFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVWYWx1ZVByZSxcbiAgICAgICAgYXR0cmlidXRlVmFsdWVQb3N0XG4gICAgICB9XG4gICAgfSA9IGluc3RhbmNlQmluZGluZztcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uc1tleHByZXNzaW9uSW5kZXhdO1xuXG4gICAgaWYgKGN1cnJlbnRFeHByZXNzaW9uID09PSBleHByZXNzaW9uKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIHVwZGF0ZSwgc2FtZSBhcyBiZWZvcmVcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VCaW5kaW5nLmN1cnJlbnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblxuICAgIGlmIChhdHRyaWJ1dGVOYW1lKSB7IC8vIGF0dHJpYnV0ZSByZXBsYWNlbWVudFxuICAgICAgdGFyZ2V0Tm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWVQcmUgKyB0b1N0cmluZyhleHByZXNzaW9uKSArIGF0dHJpYnV0ZVZhbHVlUG9zdCk7XG4gICAgfSBlbHNlIHsgLy8gdGV4dCBub2RlIC8gY2hpbGQgZWxlbWVudCAvIGNoaWxkcmVuIHJlcGxhY2VtZW50XG4gICAgICBsZXQgbmV3Tm9kZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4cHJlc3Npb24pKSB7IC8vIGFycmF5IG9mIERPTSBlbGVtZW50cyBwcm9kdWNlZCBieSB0YWcgdGVtcGxhdGUgbGl0ZXJhbHNcbiAgICAgICAgcGF0Y2hDaGlsZHJlbihleHByZXNzaW9uLCBpbnN0YW5jZUJpbmRpbmcpO1xuICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgRWxlbWVudCkgeyAvLyBodG1sIHRhZyB0ZW1wbGF0ZSByZXR1cm5pbmcgYSBET00gZWxlbWVudFxuICAgICAgICBuZXdOb2RlID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGFyZ2V0Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcbiAgICAgIH0gZWxzZSB7IC8vIHByaW1pdGl2ZSAtIHN0cmluZywgbnVtYmVyLCBldGNcbiAgICAgICAgaWYgKHRhcmdldE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7IC8vIGFscmVhZHkgdHJhbnNmb3JtZWQgaW50byBhIHRleHQgbm9kZVxuICAgICAgICAgIC8vIG5vZGVWYWx1ZSBpcyBmYXN0ZXIgdGhhbiB0ZXh0Q29udGVudCBzdXBwb3NlZGx5IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TFk2eTNIYkRWbWdcbiAgICAgICAgICB0YXJnZXROb2RlLm5vZGVWYWx1ZSA9IHRvU3RyaW5nKGV4cHJlc3Npb24pO1xuICAgICAgICB9IGVsc2UgeyAvLyByZXBsYWNlIGNvbW1lbnQgb3Igd2hhdGV2ZXIgd2FzIHRoZXJlIGJlZm9yZSB3aXRoIGEgdGV4dCBub2RlXG4gICAgICAgICAgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRvU3RyaW5nKGV4cHJlc3Npb24pKTtcbiAgICAgICAgICB0YXJnZXROb2RlLnJlcGxhY2VXaXRoKG5ld05vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobmV3Tm9kZSkge1xuICAgICAgICBpbnN0YW5jZUJpbmRpbmcudGFyZ2V0Tm9kZSA9IG5ld05vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlICh0b2tlbnMpIHtcbiAgbGV0IGh0bWxTdHJpbmcgPSAnJztcblxuICBsZXQgd2l0aGluVGFnID0gZmFsc2U7XG4gIGxldCB3aXRoaW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgbGV0IGVsZW1lbnRJbmRleENvdW50ZXIgPSAtMTsgLy8gZGVwdGgtZmlyc3QgdHJhdmVyc2FsIG9yZGVyXG5cbiAgY29uc3QgZWxlbWVudHNUb0JpbmRpbmdzID0gbmV3IE1hcCgpO1xuICBjb25zdCBlbGVtZW50SW5kZXhlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBodG1sU3RyaW5nICs9IHRva2VuO1xuXG4gICAgaWYgKGkgPT09IGxlbiAtIDEpIHtcbiAgICAgIGJyZWFrIC8vIG5vIG5lZWQgdG8gcHJvY2VzcyBjaGFyYWN0ZXJzIC0gbm8gbW9yZSBleHByZXNzaW9ucyB0byBiZSBmb3VuZFxuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG9rZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSB0b2tlbi5jaGFyQXQoaik7XG4gICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgY2FzZSAnPCc6IHtcbiAgICAgICAgICBjb25zdCBuZXh0Q2hhciA9IHRva2VuLmNoYXJBdChqICsgMSk7XG4gICAgICAgICAgaWYgKG5leHRDaGFyID09PSAnLycpIHsgLy8gY2xvc2luZyB0YWdcbiAgICAgICAgICAgIC8vIGxlYXZpbmcgYW4gZWxlbWVudFxuICAgICAgICAgICAgZWxlbWVudEluZGV4ZXMucG9wKCk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gbm90IGEgY2xvc2luZyB0YWdcbiAgICAgICAgICAgIHdpdGhpblRhZyA9IHRydWU7XG4gICAgICAgICAgICBlbGVtZW50SW5kZXhlcy5wdXNoKCsrZWxlbWVudEluZGV4Q291bnRlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnPic6IHtcbiAgICAgICAgICB3aXRoaW5UYWcgPSBmYWxzZTtcbiAgICAgICAgICB3aXRoaW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJz0nOiB7XG4gICAgICAgICAgd2l0aGluQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEluZGV4ID0gZWxlbWVudEluZGV4ZXNbZWxlbWVudEluZGV4ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYmluZGluZ3MgPSBnZXRGcm9tTWFwKGVsZW1lbnRzVG9CaW5kaW5ncywgZWxlbWVudEluZGV4LCAoKSA9PiBbXSk7XG5cbiAgICBsZXQgYXR0cmlidXRlTmFtZTtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWVQcmU7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlUG9zdDtcbiAgICBpZiAod2l0aGluQXR0cmlidXRlKSB7XG4gICAgICAvLyBJIG5ldmVyIHVzZSBzaW5nbGUtcXVvdGVzIGZvciBhdHRyaWJ1dGUgdmFsdWVzIGluIEhUTUwsIHNvIGp1c3Qgc3VwcG9ydCBkb3VibGUtcXVvdGVzIG9yIG5vLXF1b3Rlc1xuICAgICAgY29uc3QgbWF0Y2ggPSAvKFxcUyspPVwiPyhbXlwiPV0qKSQvLmV4ZWModG9rZW4pO1xuICAgICAgYXR0cmlidXRlTmFtZSA9IG1hdGNoWzFdO1xuICAgICAgYXR0cmlidXRlVmFsdWVQcmUgPSBtYXRjaFsyXTtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUG9zdCA9IC9eW15cIj5dKi8uZXhlYyh0b2tlbnNbaSArIDFdKVswXTtcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kaW5nID0ge1xuICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUHJlLFxuICAgICAgYXR0cmlidXRlVmFsdWVQb3N0LFxuICAgICAgZXhwcmVzc2lvbkluZGV4OiBpXG4gICAgfTtcblxuICAgIGJpbmRpbmdzLnB1c2goYmluZGluZyk7XG5cbiAgICAvLyBhZGQgYSBwbGFjZWhvbGRlciBjb21tZW50IHRoYXQgd2UgY2FuIGZpbmQgbGF0ZXJcbiAgICBodG1sU3RyaW5nICs9ICghd2l0aGluVGFnICYmICF3aXRoaW5BdHRyaWJ1dGUpID8gYDwhLS0ke2JpbmRpbmdzLmxlbmd0aCAtIDF9LS0+YCA6ICcnO1xuICB9XG5cbiAgY29uc3QgdGVtcGxhdGUgPSBwYXJzZVRlbXBsYXRlKGh0bWxTdHJpbmcpO1xuXG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGUsXG4gICAgZWxlbWVudHNUb0JpbmRpbmdzXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFBsYWNlaG9sZGVyQ29tbWVudCAoZWxlbWVudCwgYmluZGluZ0lkKSB7XG4gIC8vIElmIHdlIGhhZCBhIGxvdCBvZiBwbGFjZWhvbGRlciBjb21tZW50cyB0byBmaW5kLCBpdCB3b3VsZCBtYWtlIG1vcmUgc2Vuc2UgdG8gYnVpbGQgdXAgYSBtYXAgb25jZVxuICAvLyByYXRoZXIgdGhhbiBzZWFyY2ggdGhlIERPTSBldmVyeSB0aW1lLiBCdXQgaXQgdHVybnMgb3V0IHRoYXQgd2UgYWx3YXlzIG9ubHkgaGF2ZSBvbmUgY2hpbGQsXG4gIC8vIGFuZCBpdCdzIHRoZSBjb21tZW50IG5vZGUsIHNvIHNlYXJjaGluZyBldmVyeSB0aW1lIGlzIGFjdHVhbGx5IGZhc3Rlci5cbiAgbGV0IGNoaWxkTm9kZSA9IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgd2hpbGUgKGNoaWxkTm9kZSkge1xuICAgIC8vIE5vdGUgdGhhdCBtaW5pZnktaHRtbC1saXRlcmFscyBoYXMgYWxyZWFkeSByZW1vdmVkIGFsbCBub24tZnJhbWV3b3JrIGNvbW1lbnRzXG4gICAgLy8gU28gd2UganVzdCBuZWVkIHRvIGxvb2sgZm9yIGNvbW1lbnRzIHRoYXQgaGF2ZSBleGFjdGx5IHRoZSBiaW5kaW5nSWQgYXMgaXRzIHRleHQgY29udGVudFxuICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFICYmIGNoaWxkTm9kZS5ub2RlVmFsdWUgPT09IHRvU3RyaW5nKGJpbmRpbmdJZCkpIHtcbiAgICAgIHJldHVybiBjaGlsZE5vZGVcbiAgICB9XG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlQW5kU2V0dXBCaW5kaW5ncyAoZG9tLCBlbGVtZW50c1RvQmluZGluZ3MpIHtcbiAgY29uc3QgaW5zdGFuY2VCaW5kaW5ncyA9IFtdO1xuICAvLyB0cmF2ZXJzZSBkb21cbiAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9tLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG5cbiAgbGV0IGVsZW1lbnQgPSBkb207XG4gIGxldCBlbGVtZW50SW5kZXggPSAtMTtcbiAgZG8ge1xuICAgIGNvbnN0IGJpbmRpbmdzID0gZWxlbWVudHNUb0JpbmRpbmdzLmdldCgrK2VsZW1lbnRJbmRleCk7XG4gICAgaWYgKGJpbmRpbmdzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nc1tpXTtcblxuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gYmluZGluZy5hdHRyaWJ1dGVOYW1lXG4gICAgICAgICAgPyBlbGVtZW50IC8vIGF0dHJpYnV0ZSBiaW5kaW5nLCBqdXN0IHVzZSB0aGUgZWxlbWVudCBpdHNlbGZcbiAgICAgICAgICA6IGZpbmRQbGFjZWhvbGRlckNvbW1lbnQoZWxlbWVudCwgaSk7IC8vIG5vdCBhbiBhdHRyaWJ1dGUgYmluZGluZywgc28gaGFzIGEgcGxhY2Vob2xkZXIgY29tbWVudFxuXG4gICAgICAgIGNvbnN0IGluc3RhbmNlQmluZGluZyA9IHtcbiAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgIHRhcmdldE5vZGUsXG4gICAgICAgICAgdGFyZ2V0UGFyZW50Tm9kZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGN1cnJlbnRFeHByZXNzaW9uOiB1bmRlZmluZWRcbiAgICAgICAgfTtcblxuICAgICAgICBpbnN0YW5jZUJpbmRpbmdzLnB1c2goaW5zdGFuY2VCaW5kaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKChlbGVtZW50ID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSlcblxuICByZXR1cm4gaW5zdGFuY2VCaW5kaW5nc1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwgKHRva2Vucykge1xuICAvLyBBbGwgdGVtcGxhdGVzIGFuZCBib3VuZCBleHByZXNzaW9ucyBhcmUgdW5pcXVlIHBlciB0b2tlbnMgYXJyYXlcbiAgY29uc3QgeyB0ZW1wbGF0ZSwgZWxlbWVudHNUb0JpbmRpbmdzIH0gPSBnZXRGcm9tTWFwKHBhcnNlQ2FjaGUsIHRva2VucywgKCkgPT4gcGFyc2UodG9rZW5zKSk7XG5cbiAgLy8gV2hlbiB3ZSBwYXJzZUh0bWwsIHdlIGFsd2F5cyByZXR1cm4gYSBmcmVzaCBET00gaW5zdGFuY2UgcmVhZHkgdG8gYmUgdXBkYXRlZFxuICBjb25zdCBkb20gPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgaW5zdGFuY2VCaW5kaW5ncyA9IHRyYXZlcnNlQW5kU2V0dXBCaW5kaW5ncyhkb20sIGVsZW1lbnRzVG9CaW5kaW5ncyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZURvbUluc3RhbmNlIChleHByZXNzaW9ucykge1xuICAgIHBhdGNoKGV4cHJlc3Npb25zLCBpbnN0YW5jZUJpbmRpbmdzKTtcbiAgICByZXR1cm4gZG9tXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhbWV3b3JrIChzdGF0ZSkge1xuICBjb25zdCBkb21JbnN0YW5jZXMgPSBnZXRGcm9tTWFwKGRvbUluc3RhbmNlc0NhY2hlLCBzdGF0ZSwgKCkgPT4gbmV3IE1hcCgpKTtcbiAgbGV0IGRvbUluc3RhbmNlQ2FjaGVLZXkgPSB1bmtleWVkU3ltYm9sO1xuXG4gIGZ1bmN0aW9uIGh0bWwgKHRva2VucywgLi4uZXhwcmVzc2lvbnMpIHtcbiAgICAvLyBFYWNoIHVuaXF1ZSBsZXhpY2FsIHVzYWdlIG9mIG1hcCgpIGlzIGNvbnNpZGVyZWQgdW5pcXVlIGR1ZSB0byB0aGUgaHRtbGBgIHRhZ2dlZCB0ZW1wbGF0ZSBjYWxsIGl0IG1ha2VzLFxuICAgIC8vIHdoaWNoIGhhcyBsZXhpY2FsbHkgdW5pcXVlIHRva2Vucy4gVGhlIHVua2V5ZWQgc3ltYm9sIGlzIGp1c3QgdXNlZCBmb3IgaHRtbGBgIHVzYWdlIG91dHNpZGUgb2YgYSBtYXAoKS5cbiAgICBjb25zdCBkb21JbnN0YW5jZXNGb3JUb2tlbnMgPSBnZXRGcm9tTWFwKGRvbUluc3RhbmNlcywgdG9rZW5zLCAoKSA9PiBuZXcgTWFwKCkpO1xuICAgIGNvbnN0IHVwZGF0ZURvbUluc3RhbmNlID0gZ2V0RnJvbU1hcChkb21JbnN0YW5jZXNGb3JUb2tlbnMsIGRvbUluc3RhbmNlQ2FjaGVLZXksICgpID0+IHBhcnNlSHRtbCh0b2tlbnMpKTtcblxuICAgIHJldHVybiB1cGRhdGVEb21JbnN0YW5jZShleHByZXNzaW9ucykgLy8gdXBkYXRlIHdpdGggZXhwcmVzc2lvbnNcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcCAoYXJyYXksIGNhbGxiYWNrLCBrZXlGdW5jdGlvbikge1xuICAgIHJldHVybiBhcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbENhY2hlS2V5ID0gZG9tSW5zdGFuY2VDYWNoZUtleTtcbiAgICAgIGRvbUluc3RhbmNlQ2FjaGVLZXkgPSBrZXlGdW5jdGlvbihpdGVtKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhpdGVtLCBpbmRleClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGRvbUluc3RhbmNlQ2FjaGVLZXkgPSBvcmlnaW5hbENhY2hlS2V5O1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4geyBtYXAsIGh0bWwgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIgKGNvbnRhaW5lciwgc3RhdGUsIGhlbHBlcnMsIGV2ZW50cywgYWN0aW9ucywgcmVmcywgYWJvcnRTaWduYWwsIGZpcnN0UmVuZGVyKSB7XG4gIGNvbnN0IHsgbGFiZWxXaXRoU2tpbiwgdGl0bGVGb3JFbW9qaSwgdW5pY29kZVdpdGhTa2luIH0gPSBoZWxwZXJzO1xuICBjb25zdCB7IGh0bWwsIG1hcCB9ID0gY3JlYXRlRnJhbWV3b3JrKHN0YXRlKTtcblxuICBmdW5jdGlvbiBlbW9qaUxpc3QgKGVtb2ppcywgc2VhcmNoTW9kZSwgcHJlZml4KSB7XG4gICAgcmV0dXJuIG1hcChlbW9qaXMsIChlbW9qaSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiByb2xlPVwiJHtzZWFyY2hNb2RlID8gJ29wdGlvbicgOiAnbWVudWl0ZW0nfVwiIGFyaWEtc2VsZWN0ZWQ9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyBpID09PSBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtIDogJyd9XCIgYXJpYS1sYWJlbD1cIiR7bGFiZWxXaXRoU2tpbihlbW9qaSwgc3RhdGUuY3VycmVudFNraW5Ub25lKX1cIiB0aXRsZT1cIiR7dGl0bGVGb3JFbW9qaShlbW9qaSl9XCIgY2xhc3M9XCJlbW9qaSAke3NlYXJjaE1vZGUgJiYgaSA9PT0gc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA/ICdhY3RpdmUnIDogJyd9XCIgaWQ9XCIke2Ake3ByZWZpeH0tJHtlbW9qaS5pZH1gfVwiPiR7XG4gICAgICAgIGVtb2ppLnVuaWNvZGVcbiAgICAgICAgICA/IHVuaWNvZGVXaXRoU2tpbihlbW9qaSwgc3RhdGUuY3VycmVudFNraW5Ub25lKVxuICAgICAgICAgIDogaHRtbGA8aW1nIGNsYXNzPVwiY3VzdG9tLWVtb2ppXCIgc3JjPVwiJHtlbW9qaS51cmx9XCIgYWx0PVwiXCIgbG9hZGluZz1cImxhenlcIj5gXG4gICAgICB9PC9idXR0b24+YFxuICAgICAgLy8gSXQncyBpbXBvcnRhbnQgZm9yIHRoZSBjYWNoZSBrZXkgdG8gYmUgdW5pcXVlIGJhc2VkIG9uIHRoZSBwcmVmaXgsIGJlY2F1c2UgdGhlIGZyYW1ld29yayBjYWNoZXMgYmFzZWQgb24gdGhlXG4gICAgICAvLyB1bmlxdWUgdG9rZW5zICsgY2FjaGUga2V5LCBhbmQgdGhlIHNhbWUgZW1vamkgbWF5IGJlIHVzZWQgaW4gdGhlIHRhYiBhcyB3ZWxsIGFzIGluIHRoZSBmYXYgYmFyXG4gICAgfSwgZW1vamkgPT4gYCR7cHJlZml4fS0ke2Vtb2ppLmlkfWApXG4gIH1cblxuICBjb25zdCBzZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBodG1sYDxzZWN0aW9uIGRhdGEtcmVmPVwicm9vdEVsZW1lbnRcIiBjbGFzcz1cInBpY2tlclwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4ucmVnaW9uTGFiZWx9XCIgc3R5bGU9XCIke3N0YXRlLnBpY2tlclN0eWxlfVwiPjxkaXYgY2xhc3M9XCJwYWQtdG9wXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNlYXJjaC1yb3dcIj48ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBwZXJcIj48aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzcz1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIiByb2xlPVwiY29tYm9ib3hcIiBlbnRlcmtleWhpbnQ9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7c3RhdGUuaTE4bi5zZWFyY2hMYWJlbH1cIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCIkeyEhKHN0YXRlLnNlYXJjaE1vZGUgJiYgc3RhdGUuY3VycmVudEVtb2ppcy5sZW5ndGgpfVwiIGFyaWEtY29udHJvbHM9XCJzZWFyY2gtcmVzdWx0c1wiIGFyaWEtZGVzY3JpYmVkYnk9XCJzZWFyY2gtZGVzY3JpcHRpb25cIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCIke3N0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1JZCA/IGBlbW8tJHtzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtSWR9YCA6ICcnfVwiIGRhdGEtcmVmPVwic2VhcmNoRWxlbWVudFwiIGRhdGEtb24taW5wdXQ9XCJvblNlYXJjaElucHV0XCIgZGF0YS1vbi1rZXlkb3duPVwib25TZWFyY2hLZXlkb3duXCI+PGxhYmVsIGNsYXNzPVwic3Itb25seVwiIGZvcj1cInNlYXJjaFwiPiR7c3RhdGUuaTE4bi5zZWFyY2hMYWJlbH08L2xhYmVsPiA8c3BhbiBpZD1cInNlYXJjaC1kZXNjcmlwdGlvblwiIGNsYXNzPVwic3Itb25seVwiPiR7c3RhdGUuaTE4bi5zZWFyY2hEZXNjcmlwdGlvbn08L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cInNraW50b25lLWJ1dHRvbi13cmFwcGVyICR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZEFmdGVyQW5pbWF0aW9uID8gJ2V4cGFuZGVkJyA6ICcnfVwiPjxidXR0b24gaWQ9XCJza2ludG9uZS1idXR0b25cIiBjbGFzcz1cImVtb2ppICR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA/ICdoaWRlLWZvY3VzJyA6ICcnfVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLnNraW5Ub25lQnV0dG9uTGFiZWx9XCIgdGl0bGU9XCIke3N0YXRlLnNraW5Ub25lQnV0dG9uTGFiZWx9XCIgYXJpYS1kZXNjcmliZWRieT1cInNraW50b25lLWRlc2NyaXB0aW9uXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBhcmlhLWV4cGFuZGVkPVwiJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkfVwiIGFyaWEtY29udHJvbHM9XCJza2ludG9uZS1saXN0XCIgZGF0YS1vbi1jbGljaz1cIm9uQ2xpY2tTa2luVG9uZUJ1dHRvblwiPiR7c3RhdGUuc2tpblRvbmVCdXR0b25UZXh0fTwvYnV0dG9uPjwvZGl2PjxzcGFuIGlkPVwic2tpbnRvbmUtZGVzY3JpcHRpb25cIiBjbGFzcz1cInNyLW9ubHlcIj4ke3N0YXRlLmkxOG4uc2tpblRvbmVEZXNjcmlwdGlvbn08L3NwYW4+PGRpdiBkYXRhLXJlZj1cInNraW5Ub25lRHJvcGRvd25cIiBpZD1cInNraW50b25lLWxpc3RcIiBjbGFzcz1cInNraW50b25lLWxpc3QgaGlkZS1mb2N1cyAke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPyAnJyA6ICdoaWRkZW4gbm8tYW5pbWF0ZSd9XCIgc3R5bGU9XCJ0cmFuc2Zvcm06dHJhbnNsYXRlWSgke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPyAwIDogJ2NhbGMoLTEgKiB2YXIoLS1udW0tc2tpbnRvbmVzKSAqIHZhcigtLXRvdGFsLWVtb2ppLXNpemUpKSd9KVwiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5za2luVG9uZXNMYWJlbH1cIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJza2ludG9uZS0ke3N0YXRlLmFjdGl2ZVNraW5Ub25lfVwiIGFyaWEtaGlkZGVuPVwiJHshc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZH1cIiB0YWJJbmRleD1cIi0xXCIgZGF0YS1vbi1mb2N1c291dD1cIm9uU2tpblRvbmVPcHRpb25zRm9jdXNPdXRcIiBkYXRhLW9uLWNsaWNrPVwib25Ta2luVG9uZU9wdGlvbnNDbGlja1wiIGRhdGEtb24ta2V5ZG93bj1cIm9uU2tpblRvbmVPcHRpb25zS2V5ZG93blwiIGRhdGEtb24ta2V5dXA9XCJvblNraW5Ub25lT3B0aW9uc0tleXVwXCI+JHtcbiAgICBtYXAoc3RhdGUuc2tpblRvbmVzLCAoc2tpblRvbmUsIGkpID0+IHtcbiAgICByZXR1cm4gaHRtbGA8ZGl2IGlkPVwic2tpbnRvbmUtJHtpfVwiIGNsYXNzPVwiZW1vamkgJHtpID09PSBzdGF0ZS5hY3RpdmVTa2luVG9uZSA/ICdhY3RpdmUnIDogJyd9XCIgYXJpYS1zZWxlY3RlZD1cIiR7aSA9PT0gc3RhdGUuYWN0aXZlU2tpblRvbmV9XCIgcm9sZT1cIm9wdGlvblwiIHRpdGxlPVwiJHtzdGF0ZS5pMThuLnNraW5Ub25lc1tpXX1cIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLnNraW5Ub25lc1tpXX1cIj4ke3NraW5Ub25lfTwvZGl2PmBcbiAgICB9LCBza2luVG9uZSA9PiBza2luVG9uZSlcbiAgICAgICAgfTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJuYXZcIiByb2xlPVwidGFibGlzdFwiIHN0eWxlPVwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgke3N0YXRlLmdyb3Vwcy5sZW5ndGh9LDFmcilcIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLmNhdGVnb3JpZXNMYWJlbH1cIiBkYXRhLW9uLWtleWRvd249XCJvbk5hdktleWRvd25cIiBkYXRhLW9uLWNsaWNrPVwib25OYXZDbGlja1wiPiR7XG4gICAgICAgICAgICBtYXAoc3RhdGUuZ3JvdXBzLCAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiByb2xlPVwidGFiXCIgY2xhc3M9XCJuYXYtYnV0dG9uXCIgYXJpYS1jb250cm9scz1cInRhYi0ke2dyb3VwLmlkfVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uY2F0ZWdvcmllc1tncm91cC5uYW1lXX1cIiBhcmlhLXNlbGVjdGVkPVwiJHshc3RhdGUuc2VhcmNoTW9kZSAmJiBzdGF0ZS5jdXJyZW50R3JvdXAuaWQgPT09IGdyb3VwLmlkfVwiIHRpdGxlPVwiJHtzdGF0ZS5pMThuLmNhdGVnb3JpZXNbZ3JvdXAubmFtZV19XCIgZGF0YS1ncm91cC1pZD1cIiR7Z3JvdXAuaWR9XCI+PGRpdiBjbGFzcz1cIm5hdi1lbW9qaSBlbW9qaVwiPiR7Z3JvdXAuZW1vaml9PC9kaXY+PC9idXR0b24+YFxuICAgICAgICAgICAgfSwgZ3JvdXAgPT4gZ3JvdXAuaWQpXG4gICAgICAgICAgfTwvZGl2PjxkaXYgY2xhc3M9XCJpbmRpY2F0b3Itd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIiBzdHlsZT1cInRyYW5zZm9ybTp0cmFuc2xhdGVYKCR7KC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChzdGF0ZS5pc1J0bCA/IC0xIDogMSkpICogc3RhdGUuY3VycmVudEdyb3VwSW5kZXggKiAxMDB9JSlcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwibWVzc2FnZSAke3N0YXRlLm1lc3NhZ2UgPyAnJyA6ICdnb25lJ31cIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj4ke3N0YXRlLm1lc3NhZ2V9PC9kaXY+PGRpdiBkYXRhLXJlZj1cInRhYnBhbmVsRWxlbWVudFwiIGNsYXNzPVwidGFicGFuZWwgJHsoIXN0YXRlLmRhdGFiYXNlTG9hZGVkIHx8IHN0YXRlLm1lc3NhZ2UpID8gJ2dvbmUnIDogJyd9XCIgcm9sZT1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/ICdyZWdpb24nIDogJ3RhYnBhbmVsJ31cIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gc3RhdGUuaTE4bi5zZWFyY2hSZXN1bHRzTGFiZWwgOiBzdGF0ZS5pMThuLmNhdGVnb3JpZXNbc3RhdGUuY3VycmVudEdyb3VwLm5hbWVdfVwiIGlkPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gJycgOiBgdGFiLSR7c3RhdGUuY3VycmVudEdyb3VwLmlkfWB9XCIgdGFiSW5kZXg9XCIwXCIgZGF0YS1vbi1jbGljaz1cIm9uRW1vamlDbGlja1wiPjxkaXYgZGF0YS1hY3Rpb249XCJjYWxjdWxhdGVFbW9qaUdyaWRTdHlsZVwiPiR7XG4gICAgICAgICAgICAgIG1hcChzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMsIChlbW9qaVdpdGhDYXRlZ29yeSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYDxkaXY+PGRpdiBpZD1cIm1lbnUtbGFiZWwtJHtpfVwiIGNsYXNzPVwiY2F0ZWdvcnkgJHtzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMubGVuZ3RoID09PSAxICYmIHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllc1swXS5jYXRlZ29yeSA9PT0gJycgPyAnZ29uZScgOiAnJ31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke1xuICAgICAgICAgICAgICAgICAgc3RhdGUuc2VhcmNoTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IHN0YXRlLmkxOG4uc2VhcmNoUmVzdWx0c0xhYmVsXG4gICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppV2l0aENhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVtb2ppV2l0aENhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRlLmkxOG4uY2F0ZWdvcmllcy5jdXN0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmkxOG4uY2F0ZWdvcmllc1tzdGF0ZS5jdXJyZW50R3JvdXAubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH08L2Rpdj48ZGl2IGNsYXNzPVwiZW1vamktbWVudVwiIHJvbGU9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAnbGlzdGJveCcgOiAnbWVudSd9XCIgYXJpYS1sYWJlbGxlZGJ5PVwibWVudS1sYWJlbC0ke2l9XCIgaWQ9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAnc2VhcmNoLXJlc3VsdHMnIDogJyd9XCI+JHtcbiAgICAgICAgICAgICAgZW1vamlMaXN0KGVtb2ppV2l0aENhdGVnb3J5LmVtb2ppcywgc3RhdGUuc2VhcmNoTW9kZSwgLyogcHJlZml4ICovICdlbW8nKVxuICAgICAgICAgICAgfTwvZGl2PjwvZGl2PmBcbiAgICAgICAgICAgICAgfSwgZW1vamlXaXRoQ2F0ZWdvcnkgPT4gZW1vamlXaXRoQ2F0ZWdvcnkuY2F0ZWdvcnkpXG4gICAgICAgICAgICB9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImZhdm9yaXRlcyBlbW9qaS1tZW51ICR7c3RhdGUubWVzc2FnZSA/ICdnb25lJyA6ICcnfVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5mYXZvcml0ZXNMYWJlbH1cIiBzdHlsZT1cInBhZGRpbmctaW5saW5lLWVuZDoke2Ake3N0YXRlLnNjcm9sbGJhcldpZHRofXB4YH1cIiBkYXRhLW9uLWNsaWNrPVwib25FbW9qaUNsaWNrXCI+JHtcbiAgICAgICAgICAgIGVtb2ppTGlzdChzdGF0ZS5jdXJyZW50RmF2b3JpdGVzLCAvKiBzZWFyY2hNb2RlICovIGZhbHNlLCAvKiBwcmVmaXggKi8gJ2ZhdicpXG4gICAgICAgICAgfTwvZGl2PjxidXR0b24gZGF0YS1yZWY9XCJiYXNlbGluZUVtb2ppXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiYWJzLXBvcyBoaWRkZW4gZW1vamkgYmFzZWxpbmUtZW1vamlcIj7wn5iAPC9idXR0b24+PC9zZWN0aW9uPmBcbiAgfTtcblxuICBjb25zdCByb290RG9tID0gc2VjdGlvbigpO1xuXG4gIGlmIChmaXJzdFJlbmRlcikgeyAvLyBub3QgYSByZS1yZW5kZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdERvbSk7XG5cbiAgICAvLyB3ZSBvbmx5IGJpbmQgZXZlbnRzL3JlZnMvYWN0aW9ucyBvbmNlIC0gdGhlcmUgaXMgbm8gbmVlZCB0byBmaW5kIHRoZW0gYWdhaW4gZ2l2ZW4gdGhpcyBjb21wb25lbnQgc3RydWN0dXJlXG5cbiAgICAvLyBoZWxwZXIgZm9yIHRyYXZlcnNpbmcgdGhlIGRvbSwgZmluZGluZyBlbGVtZW50cyBieSBhbiBhdHRyaWJ1dGUsIGFuZCBnZXR0aW5nIHRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICBjb25zdCBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGVOYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyaWJ1dGVOYW1lfV1gKSkge1xuICAgICAgICBjYWxsYmFjayhlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgWydjbGljaycsICdmb2N1c291dCcsICdpbnB1dCcsICdrZXlkb3duJywgJ2tleXVwJ10pIHtcbiAgICAgIGZvckVsZW1lbnRXaXRoQXR0cmlidXRlKGBkYXRhLW9uLSR7ZXZlbnROYW1lfWAsIChlbGVtZW50LCBsaXN0ZW5lck5hbWUpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRzW2xpc3RlbmVyTmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmluZCByZWZzXG4gICAgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUoJ2RhdGEtcmVmJywgKGVsZW1lbnQsIHJlZikgPT4ge1xuICAgICAgcmVmc1tyZWZdID0gZWxlbWVudDtcbiAgICB9KTtcblxuICAgIC8vIHNldCB1cCBhY3Rpb25zXG4gICAgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJywgKGVsZW1lbnQsIGFjdGlvbikgPT4ge1xuICAgICAgYWN0aW9uc1thY3Rpb25dKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gZGVzdHJveS9hYm9ydCBsb2dpY1xuICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHJvb3REb20pO1xuICAgIH0pO1xuICB9XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBxTSA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJyA/IHF1ZXVlTWljcm90YXNrIDogY2FsbGJhY2sgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjYWxsYmFjayk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlIChhYm9ydFNpZ25hbCkge1xuICBsZXQgZGVzdHJveWVkID0gZmFsc2U7XG4gIGxldCBjdXJyZW50T2JzZXJ2ZXI7XG5cbiAgY29uc3QgcHJvcHNUb09ic2VydmVycyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgZGlydHlPYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cbiAgbGV0IHF1ZXVlZDtcblxuICBjb25zdCBmbHVzaCA9ICgpID0+IHtcbiAgICBpZiAoZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXJzVG9SdW4gPSBbLi4uZGlydHlPYnNlcnZlcnNdO1xuICAgIGRpcnR5T2JzZXJ2ZXJzLmNsZWFyKCk7IC8vIGNsZWFyIGJlZm9yZSBydW5uaW5nIHRvIGZvcmNlIGFueSBuZXcgdXBkYXRlcyB0byBydW4gaW4gYW5vdGhlciB0aWNrIG9mIHRoZSBsb29wXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzVG9SdW4pIHtcbiAgICAgICAgb2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgcXVldWVkID0gZmFsc2U7XG4gICAgICBpZiAoZGlydHlPYnNlcnZlcnMuc2l6ZSkgeyAvLyBuZXcgdXBkYXRlcywgcXVldWUgYW5vdGhlciBvbmVcbiAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgcU0oZmx1c2gpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGF0ZSA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldCAodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncmVhY3Rpdml0eTogZ2V0JywgcHJvcClcbiAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZXIpIHtcbiAgICAgICAgbGV0IG9ic2VydmVycyA9IHByb3BzVG9PYnNlcnZlcnMuZ2V0KHByb3ApO1xuICAgICAgICBpZiAoIW9ic2VydmVycykge1xuICAgICAgICAgIG9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBwcm9wc1RvT2JzZXJ2ZXJzLnNldChwcm9wLCBvYnNlcnZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVycy5hZGQoY3VycmVudE9ic2VydmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRbcHJvcF1cbiAgICB9LFxuICAgIHNldCAodGFyZ2V0LCBwcm9wLCBuZXdWYWx1ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3JlYWN0aXZpdHk6IHNldCcsIHByb3AsIG5ld1ZhbHVlKVxuICAgICAgdGFyZ2V0W3Byb3BdID0gbmV3VmFsdWU7XG4gICAgICBjb25zdCBvYnNlcnZlcnMgPSBwcm9wc1RvT2JzZXJ2ZXJzLmdldChwcm9wKTtcbiAgICAgIGlmIChvYnNlcnZlcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiBvYnNlcnZlcnMpIHtcbiAgICAgICAgICBkaXJ0eU9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcXVldWVkKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBxTShmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjcmVhdGVFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBydW5uYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG9sZE9ic2VydmVyID0gY3VycmVudE9ic2VydmVyO1xuICAgICAgY3VycmVudE9ic2VydmVyID0gcnVubmFibGU7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY3VycmVudE9ic2VydmVyID0gb2xkT2JzZXJ2ZXI7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gcnVubmFibGUoKVxuICB9O1xuXG4gIC8vIGRlc3Ryb3kgbG9naWNcbiAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZSxcbiAgICBjcmVhdGVFZmZlY3RcbiAgfVxufVxuXG4vLyBDb21wYXJlIHR3byBhcnJheXMsIHdpdGggYSBmdW5jdGlvbiBjYWxsZWQgb24gZWFjaCBpdGVtIGluIHRoZSB0d28gYXJyYXlzIHRoYXQgcmV0dXJucyB0cnVlIGlmIHRoZSBpdGVtcyBhcmUgZXF1YWxcbmZ1bmN0aW9uIGFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbiAobGVmdCwgcmlnaHQsIGFyZUVxdWFsRnVuYykge1xuICBpZiAobGVmdC5sZW5ndGggIT09IHJpZ2h0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghYXJlRXF1YWxGdW5jKGxlZnRbaV0sIHJpZ2h0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCxuby1sYWJlbHMsbm8taW5uZXItZGVjbGFyYXRpb25zICovXG5cbi8vIGNvbnN0YW50c1xuY29uc3QgRU1QVFlfQVJSQVkgPSBbXTtcblxuY29uc3QgeyBhc3NpZ24gfSA9IE9iamVjdDtcblxuZnVuY3Rpb24gY3JlYXRlUm9vdCAoc2hhZG93Um9vdCwgcHJvcHMpIHtcbiAgY29uc3QgcmVmcyA9IHt9O1xuICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IGFib3J0U2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcbiAgY29uc3QgeyBzdGF0ZSwgY3JlYXRlRWZmZWN0IH0gPSBjcmVhdGVTdGF0ZShhYm9ydFNpZ25hbCk7XG5cbiAgLy8gaW5pdGlhbCBzdGF0ZVxuICBhc3NpZ24oc3RhdGUsIHtcbiAgICBza2luVG9uZUVtb2ppOiB1bmRlZmluZWQsXG4gICAgaTE4bjogdW5kZWZpbmVkLFxuICAgIGRhdGFiYXNlOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tRW1vamk6IHVuZGVmaW5lZCxcbiAgICBjdXN0b21DYXRlZ29yeVNvcnRpbmc6IHVuZGVmaW5lZCxcbiAgICBlbW9qaVZlcnNpb246IHVuZGVmaW5lZFxuICB9KTtcblxuICAvLyBwdWJsaWMgcHJvcHNcbiAgYXNzaWduKHN0YXRlLCBwcm9wcyk7XG5cbiAgLy8gcHJpdmF0ZSBwcm9wc1xuICBhc3NpZ24oc3RhdGUsIHtcbiAgICBpbml0aWFsTG9hZDogdHJ1ZSxcbiAgICBjdXJyZW50RW1vamlzOiBbXSxcbiAgICBjdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXM6IFtdLFxuICAgIHJhd1NlYXJjaFRleHQ6ICcnLFxuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIHNlYXJjaE1vZGU6IGZhbHNlLFxuICAgIGFjdGl2ZVNlYXJjaEl0ZW06IC0xLFxuICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICBza2luVG9uZVBpY2tlckV4cGFuZGVkOiBmYWxzZSxcbiAgICBza2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb246IGZhbHNlLFxuICAgIGN1cnJlbnRTa2luVG9uZTogMCxcbiAgICBhY3RpdmVTa2luVG9uZTogMCxcbiAgICBza2luVG9uZUJ1dHRvblRleHQ6IHVuZGVmaW5lZCxcbiAgICBwaWNrZXJTdHlsZTogdW5kZWZpbmVkLFxuICAgIHNraW5Ub25lQnV0dG9uTGFiZWw6ICcnLFxuICAgIHNraW5Ub25lczogW10sXG4gICAgY3VycmVudEZhdm9yaXRlczogW10sXG4gICAgZGVmYXVsdEZhdm9yaXRlRW1vamlzOiB1bmRlZmluZWQsXG4gICAgbnVtQ29sdW1uczogREVGQVVMVF9OVU1fQ09MVU1OUyxcbiAgICBpc1J0bDogZmFsc2UsXG4gICAgc2Nyb2xsYmFyV2lkdGg6IDAsXG4gICAgY3VycmVudEdyb3VwSW5kZXg6IDAsXG4gICAgZ3JvdXBzOiBncm91cHMsXG4gICAgZGF0YWJhc2VMb2FkZWQ6IGZhbHNlLFxuICAgIGFjdGl2ZVNlYXJjaEl0ZW1JZDogdW5kZWZpbmVkXG4gIH0pO1xuXG4gIC8vXG4gIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBncm91cCBiYXNlZCBvbiB0aGUgY3VycmVudEdyb3VwSW5kZXhcbiAgLy9cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VycmVudEdyb3VwICE9PSBzdGF0ZS5ncm91cHNbc3RhdGUuY3VycmVudEdyb3VwSW5kZXhdKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50R3JvdXAgPSBzdGF0ZS5ncm91cHNbc3RhdGUuY3VycmVudEdyb3VwSW5kZXhdO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9cbiAgLy8gVXRpbHMvaGVscGVyc1xuICAvL1xuXG4gIGNvbnN0IGZvY3VzID0gaWQgPT4ge1xuICAgIHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoaWQpLmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgZW1vamlUb0RvbU5vZGUgPSBlbW9qaSA9PiBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKGBlbW8tJHtlbW9qaS5pZH1gKTtcblxuICAvLyBmaXJlIGEgY3VzdG9tIGV2ZW50IHRoYXQgY3Jvc3NlcyB0aGUgc2hhZG93IGJvdW5kYXJ5XG4gIGNvbnN0IGZpcmVFdmVudCA9IChuYW1lLCBkZXRhaWwpID0+IHtcbiAgICByZWZzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcblxuICAvL1xuICAvLyBDb21wYXJpc29uIHV0aWxzXG4gIC8vXG5cbiAgY29uc3QgY29tcGFyZUVtb2ppQXJyYXlzID0gKGEsIGIpID0+IGEuaWQgPT09IGIuaWQ7XG5cbiAgY29uc3QgY29tcGFyZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgeyBjYXRlZ29yeTogYUNhdGVnb3J5LCBlbW9qaXM6IGFFbW9qaXMgfSA9IGE7XG4gICAgY29uc3QgeyBjYXRlZ29yeTogYkNhdGVnb3J5LCBlbW9qaXM6IGJFbW9qaXMgfSA9IGI7XG5cbiAgICBpZiAoYUNhdGVnb3J5ICE9PSBiQ2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheXNBcmVFcXVhbEJ5RnVuY3Rpb24oYUVtb2ppcywgYkVtb2ppcywgY29tcGFyZUVtb2ppQXJyYXlzKVxuICB9O1xuXG4gIC8vXG4gIC8vIFVwZGF0ZSB1dGlscyB0byBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVyc1xuICAvL1xuXG4gIC8vIGF2b2lkIGV4Y2Vzc2l2ZSByZS1yZW5kZXJzIGJ5IGNoZWNraW5nIHRoZSB2YWx1ZSBiZWZvcmUgc2V0dGluZ1xuICBjb25zdCB1cGRhdGVDdXJyZW50RW1vamlzID0gKG5ld0Vtb2ppcykgPT4ge1xuICAgIGlmICghYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uKHN0YXRlLmN1cnJlbnRFbW9qaXMsIG5ld0Vtb2ppcywgY29tcGFyZUVtb2ppQXJyYXlzKSkge1xuICAgICAgc3RhdGUuY3VycmVudEVtb2ppcyA9IG5ld0Vtb2ppcztcbiAgICB9XG4gIH07XG5cbiAgLy8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnNcbiAgY29uc3QgdXBkYXRlU2VhcmNoTW9kZSA9IChuZXdTZWFyY2hNb2RlKSA9PiB7XG4gICAgaWYgKHN0YXRlLnNlYXJjaE1vZGUgIT09IG5ld1NlYXJjaE1vZGUpIHtcbiAgICAgIHN0YXRlLnNlYXJjaE1vZGUgPSBuZXdTZWFyY2hNb2RlO1xuICAgIH1cbiAgfTtcblxuICAvLyBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVyc1xuICBjb25zdCB1cGRhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgPSAobmV3RW1vamlzV2l0aENhdGVnb3JpZXMpID0+IHtcbiAgICBpZiAoIWFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbihzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMsIG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzLCBjb21wYXJlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzKSkge1xuICAgICAgc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzID0gbmV3RW1vamlzV2l0aENhdGVnb3JpZXM7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhlbHBlcnMgdXNlZCBieSBQaWNrZXJUZW1wbGF0ZVxuXG4gIGNvbnN0IHVuaWNvZGVXaXRoU2tpbiA9IChlbW9qaSwgY3VycmVudFNraW5Ub25lKSA9PiAoXG4gICAgKGN1cnJlbnRTa2luVG9uZSAmJiBlbW9qaS5za2lucyAmJiBlbW9qaS5za2luc1tjdXJyZW50U2tpblRvbmVdKSB8fCBlbW9qaS51bmljb2RlXG4gICk7XG5cbiAgY29uc3QgbGFiZWxXaXRoU2tpbiA9IChlbW9qaSwgY3VycmVudFNraW5Ub25lKSA9PiAoXG4gICAgdW5pcShbXG4gICAgICAoZW1vamkubmFtZSB8fCB1bmljb2RlV2l0aFNraW4oZW1vamksIGN1cnJlbnRTa2luVG9uZSkpLFxuICAgICAgZW1vamkuYW5ub3RhdGlvbixcbiAgICAgIC4uLihlbW9qaS5zaG9ydGNvZGVzIHx8IEVNUFRZX0FSUkFZKVxuICAgIF0uZmlsdGVyKEJvb2xlYW4pKS5qb2luKCcsICcpXG4gICk7XG5cbiAgY29uc3QgdGl0bGVGb3JFbW9qaSA9IChlbW9qaSkgPT4gKFxuICAgIGVtb2ppLmFubm90YXRpb24gfHwgKGVtb2ppLnNob3J0Y29kZXMgfHwgRU1QVFlfQVJSQVkpLmpvaW4oJywgJylcbiAgKTtcblxuICBjb25zdCBoZWxwZXJzID0ge1xuICAgIGxhYmVsV2l0aFNraW4sIHRpdGxlRm9yRW1vamksIHVuaWNvZGVXaXRoU2tpblxuICB9O1xuICBjb25zdCBldmVudHMgPSB7XG4gICAgb25DbGlja1NraW5Ub25lQnV0dG9uLFxuICAgIG9uRW1vamlDbGljayxcbiAgICBvbk5hdkNsaWNrLFxuICAgIG9uTmF2S2V5ZG93bixcbiAgICBvblNlYXJjaEtleWRvd24sXG4gICAgb25Ta2luVG9uZU9wdGlvbnNDbGljayxcbiAgICBvblNraW5Ub25lT3B0aW9uc0ZvY3VzT3V0LFxuICAgIG9uU2tpblRvbmVPcHRpb25zS2V5ZG93bixcbiAgICBvblNraW5Ub25lT3B0aW9uc0tleXVwLFxuICAgIG9uU2VhcmNoSW5wdXRcbiAgfTtcbiAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICBjYWxjdWxhdGVFbW9qaUdyaWRTdHlsZVxuICB9O1xuXG4gIGxldCBmaXJzdFJlbmRlciA9IHRydWU7XG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVuZGVyKHNoYWRvd1Jvb3QsIHN0YXRlLCBoZWxwZXJzLCBldmVudHMsIGFjdGlvbnMsIHJlZnMsIGFib3J0U2lnbmFsLCBmaXJzdFJlbmRlcik7XG4gICAgZmlyc3RSZW5kZXIgPSBmYWxzZTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gRGV0ZXJtaW5lIHRoZSBlbW9qaSBzdXBwb3J0IGxldmVsIChpbiByZXF1ZXN0SWRsZUNhbGxiYWNrKVxuICAvL1xuXG4gIC8vIG1vdW50IGxvZ2ljXG4gIGlmICghc3RhdGUuZW1vamlWZXJzaW9uKSB7XG4gICAgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwoKS50aGVuKGxldmVsID0+IHtcbiAgICAgIC8vIENhbid0IGFjdHVhbGx5IHRlc3QgZW1vamkgc3VwcG9ydCBpbiBKZXN0L0pTRG9tLCBlbW9qaSBuZXZlciByZW5kZXIgaW4gY29sb3IgaW4gQ2Fpcm9cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoIWxldmVsKSB7XG4gICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBzdGF0ZS5pMThuLmVtb2ppVW5zdXBwb3J0ZWRNZXNzYWdlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgZGF0YWJhc2Ugb2JqZWN0XG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzaG93IGEgTG9hZGluZyBtZXNzYWdlIGlmIGl0IHRha2VzIGEgbG9uZyB0aW1lLCBvciBzaG93IGFuIGVycm9yIGlmIHRoZXJlJ3MgYSBuZXR3b3JrL0lEQiBlcnJvclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURhdGFiYXNlTG9hZGluZyAoKSB7XG4gICAgICBsZXQgc2hvd2luZ0xvYWRpbmdNZXNzYWdlID0gZmFsc2U7XG4gICAgICBjb25zdCB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dpbmdMb2FkaW5nTWVzc2FnZSA9IHRydWU7XG4gICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBzdGF0ZS5pMThuLmxvYWRpbmdNZXNzYWdlO1xuICAgICAgfSwgVElNRU9VVF9CRUZPUkVfTE9BRElOR19NRVNTQUdFKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHN0YXRlLmRhdGFiYXNlLnJlYWR5KCk7XG4gICAgICAgIHN0YXRlLmRhdGFiYXNlTG9hZGVkID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IHN0YXRlLmkxOG4ubmV0d29ya0Vycm9yTWVzc2FnZTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgaWYgKHNob3dpbmdMb2FkaW5nTWVzc2FnZSkgeyAvLyBTZWVtcyBzYWZlciB0aGFuIGNoZWNraW5nIHRoZSBpMThuIHN0cmluZywgd2hpY2ggbWF5IGNoYW5nZVxuICAgICAgICAgIHNob3dpbmdMb2FkaW5nTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLm1lc3NhZ2UgPSAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmRhdGFiYXNlKSB7XG4gICAgICAvKiBubyBhd2FpdCAqL1xuICAgICAgaGFuZGxlRGF0YWJhc2VMb2FkaW5nKCk7XG4gICAgfVxuICB9KTtcblxuICAvL1xuICAvLyBHbG9iYWwgc3R5bGVzIGZvciB0aGUgZW50aXJlIHBpY2tlclxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUucGlja2VyU3R5bGUgPSBgXG4gICAgICAtLW51bS1ncm91cHM6ICR7c3RhdGUuZ3JvdXBzLmxlbmd0aH07IFxuICAgICAgLS1pbmRpY2F0b3Itb3BhY2l0eTogJHtzdGF0ZS5zZWFyY2hNb2RlID8gMCA6IDF9OyBcbiAgICAgIC0tbnVtLXNraW50b25lczogJHtOVU1fU0tJTl9UT05FU307YDtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgY3VzdG9tRW1vamlcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jdXN0b21FbW9qaSAmJiBzdGF0ZS5kYXRhYmFzZSkge1xuICAgICAgdXBkYXRlQ3VzdG9tRW1vamkoKTsgLy8gcmUtcnVuIHdoZW5ldmVyIGN1c3RvbUVtb2ppIGNoYW5nZVxuICAgIH1cbiAgfSk7XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VzdG9tRW1vamkgJiYgc3RhdGUuY3VzdG9tRW1vamkubGVuZ3RoKSB7XG4gICAgICBpZiAoc3RhdGUuZ3JvdXBzICE9PSBhbGxHcm91cHMpIHsgLy8gZG9uJ3QgdXBkYXRlIHVubmVjZXNzYXJpbHlcbiAgICAgICAgc3RhdGUuZ3JvdXBzID0gYWxsR3JvdXBzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUuZ3JvdXBzICE9PSBncm91cHMpIHtcbiAgICAgIGlmIChzdGF0ZS5jdXJyZW50R3JvdXBJbmRleCkge1xuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBncm91cCBpcyBhbnl0aGluZyBvdGhlciB0aGFuIFwiY3VzdG9tXCIgKHdoaWNoIGlzIGZpcnN0KSwgZGVjcmVtZW50LlxuICAgICAgICAvLyBUaGlzIGZpeGVzIHRoZSBvZGQgY2FzZSB3aGVyZSB5b3Ugc2V0IGN1c3RvbUVtb2ppLCB0aGVuIHBpY2sgYSBjYXRlZ29yeSwgdGhlbiB1bnNldCBjdXN0b21FbW9qaVxuICAgICAgICBzdGF0ZS5jdXJyZW50R3JvdXBJbmRleC0tO1xuICAgICAgfVxuICAgICAgc3RhdGUuZ3JvdXBzID0gZ3JvdXBzO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgcHJlZmVycmVkIHNraW4gdG9uZVxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJlZmVycmVkU2tpblRvbmUgKCkge1xuICAgICAgaWYgKHN0YXRlLmRhdGFiYXNlTG9hZGVkKSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRTa2luVG9uZSA9IGF3YWl0IHN0YXRlLmRhdGFiYXNlLmdldFByZWZlcnJlZFNraW5Ub25lKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogbm8gYXdhaXQgKi8gdXBkYXRlUHJlZmVycmVkU2tpblRvbmUoKTtcbiAgfSk7XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5za2luVG9uZXMgPSBBcnJheShOVU1fU0tJTl9UT05FUykuZmlsbCgpLm1hcCgoXywgaSkgPT4gYXBwbHlTa2luVG9uZShzdGF0ZS5za2luVG9uZUVtb2ppLCBpKSk7XG4gIH0pO1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuc2tpblRvbmVCdXR0b25UZXh0ID0gc3RhdGUuc2tpblRvbmVzW3N0YXRlLmN1cnJlbnRTa2luVG9uZV07XG4gIH0pO1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuc2tpblRvbmVCdXR0b25MYWJlbCA9IHN0YXRlLmkxOG4uc2tpblRvbmVMYWJlbC5yZXBsYWNlKCd7c2tpblRvbmV9Jywgc3RhdGUuaTE4bi5za2luVG9uZXNbc3RhdGUuY3VycmVudFNraW5Ub25lXSk7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIGZhdm9yaXRlcyBlbW9qaXNcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRGYXZvcml0ZUVtb2ppcyAoKSB7XG4gICAgICBjb25zdCB7IGRhdGFiYXNlIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGZhdnMgPSAoYXdhaXQgUHJvbWlzZS5hbGwoTU9TVF9DT01NT05MWV9VU0VEX0VNT0pJLm1hcCh1bmljb2RlID0+IChcbiAgICAgICAgZGF0YWJhc2UuZ2V0RW1vamlCeVVuaWNvZGVPck5hbWUodW5pY29kZSlcbiAgICAgICkpKSkuZmlsdGVyKEJvb2xlYW4pOyAvLyBmaWx0ZXIgYmVjYXVzZSBpbiBKZXN0IHRlc3RzIHdlIGRvbid0IGhhdmUgYWxsIHRoZSBlbW9qaSBpbiB0aGUgREJcbiAgICAgIHN0YXRlLmRlZmF1bHRGYXZvcml0ZUVtb2ppcyA9IGZhdnM7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmRhdGFiYXNlTG9hZGVkKSB7XG4gICAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVEZWZhdWx0RmF2b3JpdGVFbW9qaXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbUVtb2ppICgpIHtcbiAgICAvLyBDZXJ0YWluIGVmZmVjdHMgaGF2ZSBhbiBpbXBsaWNpdCBkZXBlbmRlbmN5IG9uIGN1c3RvbUVtb2ppIHNpbmNlIGl0IGFmZmVjdHMgdGhlIGRhdGFiYXNlXG4gICAgLy8gR2V0dGluZyBpdCBoZXJlIG9uIHRoZSBzdGF0ZSBlbnN1cmVzIHRoaXMgZWZmZWN0IHJlLXJ1bnMgd2hlbiBjdXN0b21FbW9qaSBjaGFuZ2UuXG4gICAgLy8gU2V0dGluZyBpdCBvbiB0aGUgZGF0YWJhc2UgaXMgcG9pbnRsZXNzIGJ1dCBwcmV2ZW50cyB0aGlzIGNvZGUgZnJvbSBiZWluZyByZW1vdmVkIGJ5IGEgbWluaWZpZXIuXG4gICAgc3RhdGUuZGF0YWJhc2UuY3VzdG9tRW1vamkgPSBzdGF0ZS5jdXN0b21FbW9qaSB8fCBFTVBUWV9BUlJBWTtcbiAgfVxuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGVzICgpIHtcbiAgICAgIHVwZGF0ZUN1c3RvbUVtb2ppKCk7IC8vIHJlLXJ1biB3aGVuZXZlciBjdXN0b21FbW9qaSBjaGFuZ2VcbiAgICAgIGNvbnN0IHsgZGF0YWJhc2UsIGRlZmF1bHRGYXZvcml0ZUVtb2ppcywgbnVtQ29sdW1ucyB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBkYkZhdm9yaXRlcyA9IGF3YWl0IGRhdGFiYXNlLmdldFRvcEZhdm9yaXRlRW1vamkobnVtQ29sdW1ucyk7XG4gICAgICBjb25zdCBmYXZvcml0ZXMgPSBhd2FpdCBzdW1tYXJpemVFbW9qaXModW5pcUJ5KFtcbiAgICAgICAgLi4uZGJGYXZvcml0ZXMsXG4gICAgICAgIC4uLmRlZmF1bHRGYXZvcml0ZUVtb2ppc1xuICAgICAgXSwgXyA9PiAoXy51bmljb2RlIHx8IF8ubmFtZSkpLnNsaWNlKDAsIG51bUNvbHVtbnMpKTtcbiAgICAgIHN0YXRlLmN1cnJlbnRGYXZvcml0ZXMgPSBmYXZvcml0ZXM7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmRhdGFiYXNlTG9hZGVkICYmIHN0YXRlLmRlZmF1bHRGYXZvcml0ZUVtb2ppcykge1xuICAgICAgLyogbm8gYXdhaXQgKi8gdXBkYXRlRmF2b3JpdGVzKCk7XG4gICAgfVxuICB9KTtcblxuICAvL1xuICAvLyBDYWxjdWxhdGUgdGhlIHdpZHRoIG9mIHRoZSBlbW9qaSBncmlkLiBUaGlzIHNlcnZlcyB0d28gcHVycG9zZXM6XG4gIC8vIDEpIFJlLWNhbGN1bGF0ZSB0aGUgLS1udW0tY29sdW1ucyB2YXIgYmVjYXVzZSBpdCBtYXkgaGF2ZSBjaGFuZ2VkXG4gIC8vIDIpIFJlLWNhbGN1bGF0ZSB0aGUgc2Nyb2xsYmFyIHdpZHRoIGJlY2F1c2UgaXQgbWF5IGhhdmUgY2hhbmdlZFxuICAvLyAgIChpLmUuIGJlY2F1c2UgdGhlIG51bWJlciBvZiBpdGVtcyBjaGFuZ2VkKVxuICAvLyAzKSBSZS1jYWxjdWxhdGUgd2hldGhlciB3ZSdyZSBpbiBSVEwgbW9kZSBvciBub3QuXG4gIC8vXG4gIC8vIFRoZSBiZW5lZml0IG9mIGRvaW5nIHRoaXMgaW4gb25lIHBsYWNlIGlzIHRvIGFsaWduIHdpdGggckFGL1Jlc2l6ZU9ic2VydmVyXG4gIC8vIGFuZCBkbyBhbGwgdGhlIGNhbGN1bGF0aW9ucyBpbiBvbmUgZ28uIFJUTCB2cyBMVFIgaXMgbm90IHN0cmljdGx5IHdpZHRoLXJlbGF0ZWQsXG4gIC8vIGJ1dCBzaW5jZSB3ZSdyZSBhbHJlYWR5IHJlYWRpbmcgdGhlIHN0eWxlIGhlcmUsIGFuZCBzaW5jZSBpdCdzIGFscmVhZHkgYWxpZ25lZCB3aXRoXG4gIC8vIHRoZSByQUYgbG9vcCwgdGhpcyBpcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBwbGFjZSB0byBkbyBpdCBwZXJmLXdpc2UuXG4gIC8vXG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlRW1vamlHcmlkU3R5bGUgKG5vZGUpIHtcbiAgICBjYWxjdWxhdGVXaWR0aChub2RlLCBhYm9ydFNpZ25hbCwgd2lkdGggPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHsgLy8ganNkb20gdGhyb3dzIGVycm9ycyBmb3IgdGhpcyBraW5kIG9mIGZhbmN5IHN0dWZmXG4gICAgICAgIC8vIHJlYWQgYWxsIHRoZSBzdHlsZS9sYXlvdXQgY2FsY3VsYXRpb25zIHdlIG5lZWQgdG8gbWFrZVxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocmVmcy5yb290RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG5ld051bUNvbHVtbnMgPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLW51bS1jb2x1bW5zJyksIDEwKTtcbiAgICAgICAgY29uc3QgbmV3SXNSdGwgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XG4gICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gbm9kZS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjb25zdCBuZXdTY3JvbGxiYXJXaWR0aCA9IHBhcmVudFdpZHRoIC0gd2lkdGg7XG5cbiAgICAgICAgLy8gd3JpdGUgdG8gc3RhdGUgdmFyaWFibGVzXG4gICAgICAgIHN0YXRlLm51bUNvbHVtbnMgPSBuZXdOdW1Db2x1bW5zO1xuICAgICAgICBzdGF0ZS5zY3JvbGxiYXJXaWR0aCA9IG5ld1Njcm9sbGJhcldpZHRoOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHN0YXRlLmlzUnRsID0gbmV3SXNSdGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIGN1cnJlbnRFbW9qaXMuIENoZWNrIGZvciBpbnZhbGlkIFpXSiByZW5kZXJpbmdzXG4gIC8vIChpLmUuIGRvdWJsZSBlbW9qaSkuXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbW9qaXMgKCkge1xuICAgICAgY29uc3QgeyBzZWFyY2hUZXh0LCBjdXJyZW50R3JvdXAsIGRhdGFiYXNlTG9hZGVkLCBjdXN0b21FbW9qaSB9ID0gc3RhdGU7XG4gICAgICBpZiAoIWRhdGFiYXNlTG9hZGVkKSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXMgPSBbXTtcbiAgICAgICAgc3RhdGUuc2VhcmNoTW9kZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChzZWFyY2hUZXh0Lmxlbmd0aCA+PSBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIKSB7XG4gICAgICAgIGNvbnN0IG5ld0Vtb2ppcyA9IGF3YWl0IGdldEVtb2ppc0J5U2VhcmNoUXVlcnkoc2VhcmNoVGV4dCk7XG4gICAgICAgIGlmIChzdGF0ZS5zZWFyY2hUZXh0ID09PSBzZWFyY2hUZXh0KSB7IC8vIGlmIHRoZSBzaXR1YXRpb24gY2hhbmdlcyBhc3luY2hyb25vdXNseSwgZG8gbm90IHVwZGF0ZVxuICAgICAgICAgIHVwZGF0ZUN1cnJlbnRFbW9qaXMobmV3RW1vamlzKTtcbiAgICAgICAgICB1cGRhdGVTZWFyY2hNb2RlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBkYXRhYmFzZSBpcyBsb2FkZWQgYW5kIHdlJ3JlIG5vdCBpbiBzZWFyY2ggbW9kZSwgc28gd2UncmUgaW4gbm9ybWFsIGNhdGVnb3J5IG1vZGVcbiAgICAgICAgY29uc3QgeyBpZDogY3VycmVudEdyb3VwSWQgfSA9IGN1cnJlbnRHcm91cDtcbiAgICAgICAgLy8gYXZvaWQgcmFjZSBjb25kaXRpb24gd2hlcmUgY3VycmVudEdyb3VwSWQgaXMgLTEgYW5kIGN1c3RvbUVtb2ppIGlzIHVuZGVmaW5lZC9lbXB0eVxuICAgICAgICBpZiAoY3VycmVudEdyb3VwSWQgIT09IC0xIHx8IChjdXN0b21FbW9qaSAmJiBjdXN0b21FbW9qaS5sZW5ndGgpKSB7XG4gICAgICAgICAgY29uc3QgbmV3RW1vamlzID0gYXdhaXQgZ2V0RW1vamlzQnlHcm91cChjdXJyZW50R3JvdXBJZCk7XG4gICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRHcm91cC5pZCA9PT0gY3VycmVudEdyb3VwSWQpIHsgLy8gaWYgdGhlIHNpdHVhdGlvbiBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LCBkbyBub3QgdXBkYXRlXG4gICAgICAgICAgICB1cGRhdGVDdXJyZW50RW1vamlzKG5ld0Vtb2ppcyk7XG4gICAgICAgICAgICB1cGRhdGVTZWFyY2hNb2RlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVFbW9qaXMoKTtcbiAgfSk7XG5cbiAgLy8gU29tZSBlbW9qaXMgaGF2ZSB0aGVpciBsaWdhdHVyZXMgcmVuZGVyZWQgYXMgdHdvIG9yIG1vcmUgY29uc2VjdXRpdmUgZW1vamlzXG4gIC8vIFdlIHdhbnQgdG8gdHJlYXQgdGhlc2UgdGhlIHNhbWUgYXMgdW5zdXBwb3J0ZWQgZW1vamlzLCBzbyB3ZSBjb21wYXJlIHRoZWlyXG4gIC8vIHdpZHRocyBhZ2FpbnN0IHRoZSBiYXNlbGluZSB3aWR0aHMgYW5kIHJlbW92ZSB0aGVtIGFzIG5lY2Vzc2FyeVxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudEVtb2ppcywgZW1vamlWZXJzaW9uIH0gPSBzdGF0ZTtcbiAgICBjb25zdCB6d2pFbW9qaXNUb0NoZWNrID0gY3VycmVudEVtb2ppc1xuICAgICAgLmZpbHRlcihlbW9qaSA9PiBlbW9qaS51bmljb2RlKSAvLyBmaWx0ZXIgY3VzdG9tIGVtb2ppXG4gICAgICAuZmlsdGVyKGVtb2ppID0+IGhhc1p3aihlbW9qaSkgJiYgIXN1cHBvcnRlZFp3akVtb2ppcy5oYXMoZW1vamkudW5pY29kZSkpO1xuICAgIGlmICghZW1vamlWZXJzaW9uICYmIHp3akVtb2ppc1RvQ2hlY2subGVuZ3RoKSB7XG4gICAgICAvLyByZW5kZXIgbm93LCBjaGVjayB0aGVpciBsZW5ndGggbGF0ZXJcbiAgICAgIHVwZGF0ZUN1cnJlbnRFbW9qaXMoY3VycmVudEVtb2ppcyk7XG4gICAgICByQUYoKCkgPT4gY2hlY2tad2pTdXBwb3J0QW5kVXBkYXRlKHp3akVtb2ppc1RvQ2hlY2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3RW1vamlzID0gZW1vamlWZXJzaW9uID8gY3VycmVudEVtb2ppcyA6IGN1cnJlbnRFbW9qaXMuZmlsdGVyKGlzWndqU3VwcG9ydGVkKTtcbiAgICAgIHVwZGF0ZUN1cnJlbnRFbW9qaXMobmV3RW1vamlzKTtcbiAgICAgIC8vIFJlc2V0IHNjcm9sbCB0b3AgdG8gMCB3aGVuIGVtb2ppcyBjaGFuZ2VcbiAgICAgIHJBRigoKSA9PiByZXNldFNjcm9sbFRvcElmUG9zc2libGUocmVmcy50YWJwYW5lbEVsZW1lbnQpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNoZWNrWndqU3VwcG9ydEFuZFVwZGF0ZSAoendqRW1vamlzVG9DaGVjaykge1xuICAgIGNoZWNrWndqU3VwcG9ydCh6d2pFbW9qaXNUb0NoZWNrLCByZWZzLmJhc2VsaW5lRW1vamksIGVtb2ppVG9Eb21Ob2RlKTtcbiAgICAvLyBmb3JjZSB1cGRhdGVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1hc3NpZ25cbiAgICBzdGF0ZS5jdXJyZW50RW1vamlzID0gc3RhdGUuY3VycmVudEVtb2ppcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzWndqU3VwcG9ydGVkIChlbW9qaSkge1xuICAgIHJldHVybiAhZW1vamkudW5pY29kZSB8fCAhaGFzWndqKGVtb2ppKSB8fCBzdXBwb3J0ZWRad2pFbW9qaXMuZ2V0KGVtb2ppLnVuaWNvZGUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmaWx0ZXJFbW9qaXNCeVZlcnNpb24gKGVtb2ppcykge1xuICAgIGNvbnN0IGVtb2ppU3VwcG9ydExldmVsID0gc3RhdGUuZW1vamlWZXJzaW9uIHx8IGF3YWl0IGRldGVjdEVtb2ppU3VwcG9ydExldmVsKCk7XG4gICAgLy8gIXZlcnNpb24gY29ycmVzcG9uZHMgdG8gY3VzdG9tIGVtb2ppXG4gICAgcmV0dXJuIGVtb2ppcy5maWx0ZXIoKHsgdmVyc2lvbiB9KSA9PiAhdmVyc2lvbiB8fCB2ZXJzaW9uIDw9IGVtb2ppU3VwcG9ydExldmVsKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VtbWFyaXplRW1vamlzIChlbW9qaXMpIHtcbiAgICByZXR1cm4gc3VtbWFyaXplRW1vamlzRm9yVUkoZW1vamlzLCBzdGF0ZS5lbW9qaVZlcnNpb24gfHwgYXdhaXQgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwoKSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppc0J5R3JvdXAgKGdyb3VwKSB7XG4gICAgLy8gLTEgaXMgY3VzdG9tIGVtb2ppXG4gICAgY29uc3QgZW1vamkgPSBncm91cCA9PT0gLTEgPyBzdGF0ZS5jdXN0b21FbW9qaSA6IGF3YWl0IHN0YXRlLmRhdGFiYXNlLmdldEVtb2ppQnlHcm91cChncm91cCk7XG4gICAgcmV0dXJuIHN1bW1hcml6ZUVtb2ppcyhhd2FpdCBmaWx0ZXJFbW9qaXNCeVZlcnNpb24oZW1vamkpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlzQnlTZWFyY2hRdWVyeSAocXVlcnkpIHtcbiAgICByZXR1cm4gc3VtbWFyaXplRW1vamlzKGF3YWl0IGZpbHRlckVtb2ppc0J5VmVyc2lvbihhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRFbW9qaUJ5U2VhcmNoUXVlcnkocXVlcnkpKSlcbiAgfVxuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIERlcml2ZSBjdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgZnJvbSBjdXJyZW50RW1vamlzLiBUaGlzIGlzIGFsd2F5cyBkb25lIGV2ZW4gaWYgdGhlcmVcbiAgLy8gYXJlIG5vIGNhdGVnb3JpZXMsIGJlY2F1c2UgaXQncyBqdXN0IGVhc2llciB0byBjb2RlIHRoZSBIVE1MIHRoaXMgd2F5LlxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzICgpIHtcbiAgICAgIGNvbnN0IHsgc2VhcmNoTW9kZSwgY3VycmVudEVtb2ppcyB9ID0gc3RhdGU7XG4gICAgICBpZiAoc2VhcmNoTW9kZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgICAgIGVtb2ppczogY3VycmVudEVtb2ppc1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgY29uc3QgY2F0ZWdvcmllc1RvRW1vamkgPSBuZXcgTWFwKCk7XG4gICAgICBmb3IgKGNvbnN0IGVtb2ppIG9mIGN1cnJlbnRFbW9qaXMpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBlbW9qaS5jYXRlZ29yeSB8fCAnJztcbiAgICAgICAgbGV0IGVtb2ppcyA9IGNhdGVnb3JpZXNUb0Vtb2ppLmdldChjYXRlZ29yeSk7XG4gICAgICAgIGlmICghZW1vamlzKSB7XG4gICAgICAgICAgZW1vamlzID0gW107XG4gICAgICAgICAgY2F0ZWdvcmllc1RvRW1vamkuc2V0KGNhdGVnb3J5LCBlbW9qaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVtb2ppcy5wdXNoKGVtb2ppKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbLi4uY2F0ZWdvcmllc1RvRW1vamkuZW50cmllcygpXVxuICAgICAgICAubWFwKChbY2F0ZWdvcnksIGVtb2ppc10pID0+ICh7IGNhdGVnb3J5LCBlbW9qaXMgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBzdGF0ZS5jdXN0b21DYXRlZ29yeVNvcnRpbmcoYS5jYXRlZ29yeSwgYi5jYXRlZ29yeSkpXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RW1vamlzV2l0aENhdGVnb3JpZXMgPSBjYWxjdWxhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMoKTtcbiAgICB1cGRhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMobmV3RW1vamlzV2l0aENhdGVnb3JpZXMpO1xuICB9KTtcblxuICAvL1xuICAvLyBIYW5kbGUgYWN0aXZlIHNlYXJjaCBpdGVtIChpLmUuIHByZXNzaW5nIHVwIG9yIGRvd24gd2hpbGUgc2VhcmNoaW5nKVxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbUlkID0gc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSAhPT0gLTEgJiYgc3RhdGUuY3VycmVudEVtb2ppc1tzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtXS5pZDtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gSGFuZGxlIHVzZXIgaW5wdXQgb24gdGhlIHNlYXJjaCBpbnB1dFxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyByYXdTZWFyY2hUZXh0IH0gPSBzdGF0ZTtcbiAgICBySUMoKCkgPT4ge1xuICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IChyYXdTZWFyY2hUZXh0IHx8ICcnKS50cmltKCk7IC8vIGRlZmVyIHRvIGF2b2lkIGlucHV0IGRlbGF5cywgcGx1cyB3ZSBjYW4gdHJpbSBoZXJlXG4gICAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID0gLTE7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uU2VhcmNoS2V5ZG93biAoZXZlbnQpIHtcbiAgICBpZiAoIXN0YXRlLnNlYXJjaE1vZGUgfHwgIXN0YXRlLmN1cnJlbnRFbW9qaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBnb1RvTmV4dE9yUHJldmlvdXMgPSAocHJldmlvdXMpID0+IHtcbiAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IGluY3JlbWVudE9yRGVjcmVtZW50KHByZXZpb3VzLCBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtLCBzdGF0ZS5jdXJyZW50RW1vamlzKTtcbiAgICB9O1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHJldHVybiBnb1RvTmV4dE9yUHJldmlvdXMoZmFsc2UpXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgcmV0dXJuIGdvVG9OZXh0T3JQcmV2aW91cyh0cnVlKVxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBpZiAoc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBmb2N1cyB0aGUgZmlyc3Qgb3B0aW9uIGluIHRoZSBsaXN0IHNpbmNlIHRoZSBsaXN0IG11c3QgYmUgbm9uLWVtcHR5IGF0IHRoaXMgcG9pbnQgKGl0J3MgdmVyaWZpZWQgYWJvdmUpXG4gICAgICAgICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IDA7XG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZXJlIGlzIGFscmVhZHkgYW4gYWN0aXZlIHNlYXJjaCBpdGVtXG4gICAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgICAgcmV0dXJuIGNsaWNrRW1vamkoc3RhdGUuY3VycmVudEVtb2ppc1tzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtXS5pZClcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIG5hdlxuICAvL1xuXG4gIGZ1bmN0aW9uIG9uTmF2Q2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGNvbnN0IGNsb3Nlc3RUYXJnZXQgPSB0YXJnZXQuY2xvc2VzdCgnLm5hdi1idXR0b24nKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNsb3Nlc3RUYXJnZXQpIHtcbiAgICAgIHJldHVybiAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwSWQgPSBwYXJzZUludChjbG9zZXN0VGFyZ2V0LmRhdGFzZXQuZ3JvdXBJZCwgMTApO1xuICAgIHJlZnMuc2VhcmNoRWxlbWVudC52YWx1ZSA9ICcnOyAvLyBjbGVhciBzZWFyY2ggYm94IGlucHV0XG4gICAgc3RhdGUucmF3U2VhcmNoVGV4dCA9ICcnO1xuICAgIHN0YXRlLnNlYXJjaFRleHQgPSAnJztcbiAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID0gLTE7XG4gICAgc3RhdGUuY3VycmVudEdyb3VwSW5kZXggPSBzdGF0ZS5ncm91cHMuZmluZEluZGV4KF8gPT4gXy5pZCA9PT0gZ3JvdXBJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk5hdktleWRvd24gKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQsIGtleSB9ID0gZXZlbnQ7XG5cbiAgICBjb25zdCBkb0ZvY3VzID0gZWwgPT4ge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0Lm5leHRFbGVtZW50U2libGluZylcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICByZXR1cm4gZG9Gb2N1cyh0YXJnZXQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZClcbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgfVxuICB9XG5cbiAgLy9cbiAgLy8gSGFuZGxlIHVzZXIgaW5wdXQgb24gYW4gZW1vamlcbiAgLy9cblxuICBhc3luYyBmdW5jdGlvbiBjbGlja0Vtb2ppICh1bmljb2RlT3JOYW1lKSB7XG4gICAgY29uc3QgZW1vamkgPSBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRFbW9qaUJ5VW5pY29kZU9yTmFtZSh1bmljb2RlT3JOYW1lKTtcbiAgICBjb25zdCBlbW9qaVN1bW1hcnkgPSBbLi4uc3RhdGUuY3VycmVudEVtb2ppcywgLi4uc3RhdGUuY3VycmVudEZhdm9yaXRlc11cbiAgICAgIC5maW5kKF8gPT4gKF8uaWQgPT09IHVuaWNvZGVPck5hbWUpKTtcbiAgICBjb25zdCBza2luVG9uZWRVbmljb2RlID0gZW1vamlTdW1tYXJ5LnVuaWNvZGUgJiYgdW5pY29kZVdpdGhTa2luKGVtb2ppU3VtbWFyeSwgc3RhdGUuY3VycmVudFNraW5Ub25lKTtcbiAgICBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5pbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQodW5pY29kZU9yTmFtZSk7XG4gICAgZmlyZUV2ZW50KCdlbW9qaS1jbGljaycsIHtcbiAgICAgIGVtb2ppLFxuICAgICAgc2tpblRvbmU6IHN0YXRlLmN1cnJlbnRTa2luVG9uZSxcbiAgICAgIC4uLihza2luVG9uZWRVbmljb2RlICYmIHsgdW5pY29kZTogc2tpblRvbmVkVW5pY29kZSB9KSxcbiAgICAgIC4uLihlbW9qaVN1bW1hcnkubmFtZSAmJiB7IG5hbWU6IGVtb2ppU3VtbWFyeS5uYW1lIH0pXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkVtb2ppQ2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZW1vamknKSkge1xuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGhhbHQoZXZlbnQpO1xuICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkLnN1YnN0cmluZyg0KTsgLy8gcmVwbGFjZSAnZW1vLScgb3IgJ2Zhdi0nIHByZWZpeFxuXG4gICAgLyogbm8gYXdhaXQgKi8gY2xpY2tFbW9qaShpZCk7XG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGUgdXNlciBpbnB1dCBvbiB0aGUgc2tpbnRvbmUgcGlja2VyXG4gIC8vXG5cbiAgZnVuY3Rpb24gY2hhbmdlU2tpblRvbmUgKHNraW5Ub25lKSB7XG4gICAgc3RhdGUuY3VycmVudFNraW5Ub25lID0gc2tpblRvbmU7XG4gICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA9IGZhbHNlO1xuICAgIGZvY3VzKCdza2ludG9uZS1idXR0b24nKTtcbiAgICBmaXJlRXZlbnQoJ3NraW4tdG9uZS1jaGFuZ2UnLCB7IHNraW5Ub25lIH0pO1xuICAgIC8qIG5vIGF3YWl0ICovIHN0YXRlLmRhdGFiYXNlLnNldFByZWZlcnJlZFNraW5Ub25lKHNraW5Ub25lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2tpblRvbmVPcHRpb25zQ2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgaWQgfSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgbWF0Y2ggPSBpZCAmJiBpZC5tYXRjaCgvXnNraW50b25lLShcXGQpLyk7IC8vIHNraW50b25lIG9wdGlvbiBmb3JtYXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIW1hdGNoKSB7IC8vIG5vdCBhIHNraW50b25lIG9wdGlvblxuICAgICAgcmV0dXJuIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICB9XG4gICAgaGFsdChldmVudCk7XG4gICAgY29uc3Qgc2tpblRvbmUgPSBwYXJzZUludChtYXRjaFsxXSwgMTApOyAvLyByZW1vdmUgJ3NraW50b25lLScgcHJlZml4XG4gICAgY2hhbmdlU2tpblRvbmUoc2tpblRvbmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DbGlja1NraW5Ub25lQnV0dG9uIChldmVudCkge1xuICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSAhc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZDtcbiAgICBzdGF0ZS5hY3RpdmVTa2luVG9uZSA9IHN0YXRlLmN1cnJlbnRTa2luVG9uZTtcbiAgICAvLyB0aGlzIHNob3VsZCBhbHdheXMgYmUgdHJ1ZSwgc2luY2UgdGhlIGJ1dHRvbiBpcyBvYnNjdXJlZCBieSB0aGUgbGlzdGJveCwgc28gdGhpcyBgaWZgIGlzIGp1c3QgdG8gYmUgc3VyZVxuICAgIGlmIChzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkKSB7XG4gICAgICBoYWx0KGV2ZW50KTtcbiAgICAgIHJBRigoKSA9PiBmb2N1cygnc2tpbnRvbmUtbGlzdCcpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUbyBtYWtlIHRoZSBhbmltYXRpb24gbmljZXIsIGNoYW5nZSB0aGUgei1pbmRleCBvZiB0aGUgc2tpbnRvbmUgcGlja2VyIGJ1dHRvblxuICAvLyAqYWZ0ZXIqIHRoZSBhbmltYXRpb24gaGFzIHBsYXllZC4gVGhpcyBtYWtlcyBpdCBhcHBlYXIgdGhhdCB0aGUgcGlja2VyIGJveFxuICAvLyBpcyBleHBhbmRpbmcgXCJiZWxvd1wiIHRoZSBidXR0b25cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgcmVmcy5za2luVG9uZURyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWRBZnRlckFuaW1hdGlvbiA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZEFmdGVyQW5pbWF0aW9uID0gZmFsc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uU2tpblRvbmVPcHRpb25zS2V5ZG93biAoZXZlbnQpIHtcbiAgICAvLyB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2hhbmdlQWN0aXZlU2tpblRvbmUgPSBhc3luYyBuZXh0U2tpblRvbmUgPT4ge1xuICAgICAgaGFsdChldmVudCk7XG4gICAgICBzdGF0ZS5hY3RpdmVTa2luVG9uZSA9IG5leHRTa2luVG9uZTtcbiAgICB9O1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICByZXR1cm4gY2hhbmdlQWN0aXZlU2tpblRvbmUoaW5jcmVtZW50T3JEZWNyZW1lbnQodHJ1ZSwgc3RhdGUuYWN0aXZlU2tpblRvbmUsIHN0YXRlLnNraW5Ub25lcykpXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICByZXR1cm4gY2hhbmdlQWN0aXZlU2tpblRvbmUoaW5jcmVtZW50T3JEZWNyZW1lbnQoZmFsc2UsIHN0YXRlLmFjdGl2ZVNraW5Ub25lLCBzdGF0ZS5za2luVG9uZXMpKVxuICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZSgwKVxuICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKHN0YXRlLnNraW5Ub25lcy5sZW5ndGggLSAxKVxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAvLyBlbnRlciBvbiBrZXlkb3duLCBzcGFjZSBvbiBrZXl1cC4gdGhpcyBpcyBqdXN0IGhvdyBicm93c2VycyB3b3JrIGZvciBidXR0b25zXG4gICAgICAgIC8vIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93M2Mtd2FpLWlnLzIwMTlKYW5NYXIvMDA4Ni5odG1sXG4gICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICByZXR1cm4gY2hhbmdlU2tpblRvbmUoc3RhdGUuYWN0aXZlU2tpblRvbmUpXG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm9jdXMoJ3NraW50b25lLWJ1dHRvbicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ta2luVG9uZU9wdGlvbnNLZXl1cCAoZXZlbnQpIHtcbiAgICAvLyB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICAvLyBlbnRlciBvbiBrZXlkb3duLCBzcGFjZSBvbiBrZXl1cC4gdGhpcyBpcyBqdXN0IGhvdyBicm93c2VycyB3b3JrIGZvciBidXR0b25zXG4gICAgICAgIC8vIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93M2Mtd2FpLWlnLzIwMTlKYW5NYXIvMDA4Ni5odG1sXG4gICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICByZXR1cm4gY2hhbmdlU2tpblRvbmUoc3RhdGUuYWN0aXZlU2tpblRvbmUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Ta2luVG9uZU9wdGlvbnNGb2N1c091dCAoZXZlbnQpIHtcbiAgICAvLyBPbiBibHVyIG91dHNpZGUgb2YgdGhlIHNraW50b25lIGxpc3Rib3gsIGNvbGxhcHNlIHRoZSBza2ludG9uZSBwaWNrZXIuXG4gICAgY29uc3QgeyByZWxhdGVkVGFyZ2V0IH0gPSBldmVudDtcbiAgICAvLyBUaGUgYGVsc2VgIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXJlbGF0ZWRUYXJnZXQgfHwgcmVsYXRlZFRhcmdldC5pZCAhPT0gJ3NraW50b25lLWxpc3QnKSB7XG4gICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25TZWFyY2hJbnB1dCAoZXZlbnQpIHtcbiAgICBzdGF0ZS5yYXdTZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkc2V0IChuZXdTdGF0ZSkge1xuICAgICAgYXNzaWduKHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfSxcbiAgICAkZGVzdHJveSAoKSB7XG4gICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9EQVRBX1NPVVJDRSA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Vtb2ppLXBpY2tlci1lbGVtZW50LWRhdGFAXjEvZW4vZW1vamliYXNlL2RhdGEuanNvbic7XG5jb25zdCBERUZBVUxUX0xPQ0FMRSA9ICdlbic7XG5cbnZhciBlbkkxOG4gPSB7XG4gIGNhdGVnb3JpZXNMYWJlbDogJ0NhdGVnb3JpZXMnLFxuICBlbW9qaVVuc3VwcG9ydGVkTWVzc2FnZTogJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNvbG9yIGVtb2ppLicsXG4gIGZhdm9yaXRlc0xhYmVsOiAnRmF2b3JpdGVzJyxcbiAgbG9hZGluZ01lc3NhZ2U6ICdMb2FkaW5n4oCmJyxcbiAgbmV0d29ya0Vycm9yTWVzc2FnZTogJ0NvdWxkIG5vdCBsb2FkIGVtb2ppLicsXG4gIHJlZ2lvbkxhYmVsOiAnRW1vamkgcGlja2VyJyxcbiAgc2VhcmNoRGVzY3JpcHRpb246ICdXaGVuIHNlYXJjaCByZXN1bHRzIGFyZSBhdmFpbGFibGUsIHByZXNzIHVwIG9yIGRvd24gdG8gc2VsZWN0IGFuZCBlbnRlciB0byBjaG9vc2UuJyxcbiAgc2VhcmNoTGFiZWw6ICdTZWFyY2gnLFxuICBzZWFyY2hSZXN1bHRzTGFiZWw6ICdTZWFyY2ggcmVzdWx0cycsXG4gIHNraW5Ub25lRGVzY3JpcHRpb246ICdXaGVuIGV4cGFuZGVkLCBwcmVzcyB1cCBvciBkb3duIHRvIHNlbGVjdCBhbmQgZW50ZXIgdG8gY2hvb3NlLicsXG4gIHNraW5Ub25lTGFiZWw6ICdDaG9vc2UgYSBza2luIHRvbmUgKGN1cnJlbnRseSB7c2tpblRvbmV9KScsXG4gIHNraW5Ub25lc0xhYmVsOiAnU2tpbiB0b25lcycsXG4gIHNraW5Ub25lczogW1xuICAgICdEZWZhdWx0JyxcbiAgICAnTGlnaHQnLFxuICAgICdNZWRpdW0tTGlnaHQnLFxuICAgICdNZWRpdW0nLFxuICAgICdNZWRpdW0tRGFyaycsXG4gICAgJ0RhcmsnXG4gIF0sXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICAgICdzbWlsZXlzLWVtb3Rpb24nOiAnU21pbGV5cyBhbmQgZW1vdGljb25zJyxcbiAgICAncGVvcGxlLWJvZHknOiAnUGVvcGxlIGFuZCBib2R5JyxcbiAgICAnYW5pbWFscy1uYXR1cmUnOiAnQW5pbWFscyBhbmQgbmF0dXJlJyxcbiAgICAnZm9vZC1kcmluayc6ICdGb29kIGFuZCBkcmluaycsXG4gICAgJ3RyYXZlbC1wbGFjZXMnOiAnVHJhdmVsIGFuZCBwbGFjZXMnLFxuICAgIGFjdGl2aXRpZXM6ICdBY3Rpdml0aWVzJyxcbiAgICBvYmplY3RzOiAnT2JqZWN0cycsXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxuICAgIGZsYWdzOiAnRmxhZ3MnXG4gIH1cbn07XG5cbmNvbnN0IFBST1BTID0gW1xuICAnY3VzdG9tRW1vamknLFxuICAnY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nJyxcbiAgJ2RhdGFiYXNlJyxcbiAgJ2RhdGFTb3VyY2UnLFxuICAnaTE4bicsXG4gICdsb2NhbGUnLFxuICAnc2tpblRvbmVFbW9qaScsXG4gICdlbW9qaVZlcnNpb24nXG5dO1xuXG4vLyBTdHlsZXMgaW5qZWN0ZWQgb3Vyc2VsdmVzLCBzbyB3ZSBjYW4gZGVjbGFyZSB0aGUgRk9OVF9GQU1JTFkgdmFyaWFibGUgaW4gb25lIHBsYWNlXG5jb25zdCBFWFRSQV9TVFlMRVMgPSBgOmhvc3R7LS1lbW9qaS1mb250LWZhbWlseToke0ZPTlRfRkFNSUxZfX1gO1xuXG5jbGFzcyBQaWNrZXJFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFwiOmhvc3R7LS1lbW9qaS1zaXplOjEuMzc1cmVtOy0tZW1vamktcGFkZGluZzowLjVyZW07LS1jYXRlZ29yeS1lbW9qaS1zaXplOnZhcigtLWVtb2ppLXNpemUpOy0tY2F0ZWdvcnktZW1vamktcGFkZGluZzp2YXIoLS1lbW9qaS1wYWRkaW5nKTstLWluZGljYXRvci1oZWlnaHQ6M3B4Oy0taW5wdXQtYm9yZGVyLXJhZGl1czowLjVyZW07LS1pbnB1dC1ib3JkZXItc2l6ZToxcHg7LS1pbnB1dC1mb250LXNpemU6MXJlbTstLWlucHV0LWxpbmUtaGVpZ2h0OjEuNTstLWlucHV0LXBhZGRpbmc6MC4yNXJlbTstLW51bS1jb2x1bW5zOjg7LS1vdXRsaW5lLXNpemU6MnB4Oy0tYm9yZGVyLXNpemU6MXB4Oy0tc2tpbnRvbmUtYm9yZGVyLXJhZGl1czoxcmVtOy0tY2F0ZWdvcnktZm9udC1zaXplOjFyZW07ZGlzcGxheTpmbGV4O3dpZHRoOm1pbi1jb250ZW50O2hlaWdodDo0MDBweH06aG9zdCw6aG9zdCgubGlnaHQpe2NvbG9yLXNjaGVtZTpsaWdodDstLWJhY2tncm91bmQ6I2ZmZjstLWJvcmRlci1jb2xvcjojZTBlMGUwOy0taW5kaWNhdG9yLWNvbG9yOiMzODVhYzE7LS1pbnB1dC1ib3JkZXItY29sb3I6Izk5OTstLWlucHV0LWZvbnQtY29sb3I6IzExMTstLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiM5OTk7LS1vdXRsaW5lLWNvbG9yOiM5OTk7LS1jYXRlZ29yeS1mb250LWNvbG9yOiMxMTE7LS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6I2U2ZTZlNjstLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiNkOWQ5ZDl9Omhvc3QoLmRhcmspe2NvbG9yLXNjaGVtZTpkYXJrOy0tYmFja2dyb3VuZDojMjIyOy0tYm9yZGVyLWNvbG9yOiM0NDQ7LS1pbmRpY2F0b3ItY29sb3I6IzUzNzNlYzstLWlucHV0LWJvcmRlci1jb2xvcjojY2NjOy0taW5wdXQtZm9udC1jb2xvcjojZWZlZmVmOy0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6I2NjYzstLW91dGxpbmUtY29sb3I6I2ZmZjstLWNhdGVnb3J5LWZvbnQtY29sb3I6I2VmZWZlZjstLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZDojNTU1NTU1Oy0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6IzQ4NDg0OH1AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspezpob3N0e2NvbG9yLXNjaGVtZTpkYXJrOy0tYmFja2dyb3VuZDojMjIyOy0tYm9yZGVyLWNvbG9yOiM0NDQ7LS1pbmRpY2F0b3ItY29sb3I6IzUzNzNlYzstLWlucHV0LWJvcmRlci1jb2xvcjojY2NjOy0taW5wdXQtZm9udC1jb2xvcjojZWZlZmVmOy0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6I2NjYzstLW91dGxpbmUtY29sb3I6I2ZmZjstLWNhdGVnb3J5LWZvbnQtY29sb3I6I2VmZWZlZjstLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZDojNTU1NTU1Oy0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6IzQ4NDg0OH19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1idXR0b257bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWlucHV0e3BhZGRpbmc6MDttYXJnaW46MDtsaW5lLWhlaWdodDoxLjE1O2ZvbnQtZmFtaWx5OmluaGVyaXR9aW5wdXRbdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTpmb2N1c3tvdXRsaW5lOnZhcigtLW91dGxpbmUtY29sb3IpIHNvbGlkIHZhcigtLW91dGxpbmUtc2l6ZSk7b3V0bGluZS1vZmZzZXQ6Y2FsYygtMSp2YXIoLS1vdXRsaW5lLXNpemUpKX06aG9zdChbZGF0YS1qcy1mb2N1cy12aXNpYmxlXSkgOmZvY3VzOm5vdChbZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkXSl7b3V0bGluZTowfTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpe291dGxpbmU6MH0uaGlkZS1mb2N1c3tvdXRsaW5lOjB9Kntib3gtc2l6aW5nOmJvcmRlci1ib3h9LnBpY2tlcntjb250YWluOmNvbnRlbnQ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjstLXRvdGFsLWVtb2ppLXNpemU6Y2FsYyh2YXIoLS1lbW9qaS1zaXplKSArICgyICogdmFyKC0tZW1vamktcGFkZGluZykpKTstLXRvdGFsLWNhdGVnb3J5LWVtb2ppLXNpemU6Y2FsYyh2YXIoLS1jYXRlZ29yeS1lbW9qaS1zaXplKSArICgyICogdmFyKC0tY2F0ZWdvcnktZW1vamktcGFkZGluZykpKX0uc3Itb25seXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLDAsMCwwKTtib3JkZXI6MH0uaGlkZGVue29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5hYnMtcG9ze3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MH0uZ29uZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5za2ludG9uZS1idXR0b24td3JhcHBlciwuc2tpbnRvbmUtbGlzdHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO3otaW5kZXg6M30uc2tpbnRvbmUtYnV0dG9uLXdyYXBwZXIuZXhwYW5kZWR7ei1pbmRleDoxfS5za2ludG9uZS1saXN0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWlubGluZS1lbmQ6MDt0b3A6MDt6LWluZGV4OjI7b3ZlcmZsb3c6dmlzaWJsZTtib3JkZXItYm90dG9tOnZhcigtLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6MCAwIHZhcigtLXNraW50b25lLWJvcmRlci1yYWRpdXMpIHZhcigtLXNraW50b25lLWJvcmRlci1yYWRpdXMpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgMH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuc2tpbnRvbmUtbGlzdHt0cmFuc2l0aW9uLWR1cmF0aW9uOi4wMDFzfX1Ac3VwcG9ydHMgbm90IChpbnNldC1pbmxpbmUtZW5kOjApey5za2ludG9uZS1saXN0e3JpZ2h0OjB9fS5za2ludG9uZS1saXN0Lm5vLWFuaW1hdGV7dHJhbnNpdGlvbjpub25lfS50YWJwYW5lbHtvdmVyZmxvdy15OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO21pbi1oZWlnaHQ6MDtmbGV4OjE7Y29udGFpbjpjb250ZW50fS5lbW9qaS1tZW51e2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KHZhcigtLW51bS1jb2x1bW5zKSx2YXIoLS10b3RhbC1lbW9qaS1zaXplKSk7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3dpZHRoOjEwMCV9LmNhdGVnb3J5e3BhZGRpbmc6dmFyKC0tZW1vamktcGFkZGluZyk7Zm9udC1zaXplOnZhcigtLWNhdGVnb3J5LWZvbnQtc2l6ZSk7Y29sb3I6dmFyKC0tY2F0ZWdvcnktZm9udC1jb2xvcil9LmN1c3RvbS1lbW9qaSwuZW1vamksYnV0dG9uLmVtb2ppe2hlaWdodDp2YXIoLS10b3RhbC1lbW9qaS1zaXplKTt3aWR0aDp2YXIoLS10b3RhbC1lbW9qaS1zaXplKX0uZW1vamksYnV0dG9uLmVtb2ppe2ZvbnQtc2l6ZTp2YXIoLS1lbW9qaS1zaXplKTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czoxMDAlO2xpbmUtaGVpZ2h0OjE7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtZmFtaWx5OnZhcigtLWVtb2ppLWZvbnQtZmFtaWx5KTtjdXJzb3I6cG9pbnRlcn1AbWVkaWEgKGhvdmVyOmhvdmVyKSBhbmQgKHBvaW50ZXI6ZmluZSl7LmVtb2ppOmhvdmVyLGJ1dHRvbi5lbW9qaTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kKX19LmVtb2ppLmFjdGl2ZSwuZW1vamk6YWN0aXZlLGJ1dHRvbi5lbW9qaS5hY3RpdmUsYnV0dG9uLmVtb2ppOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZCl9LmN1c3RvbS1lbW9qaXtwYWRkaW5nOnZhcigtLWVtb2ppLXBhZGRpbmcpO29iamVjdC1maXQ6Y29udGFpbjtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7YmFja2dyb3VuZC1zaXplOnZhcigtLWVtb2ppLXNpemUpIHZhcigtLWVtb2ppLXNpemUpfS5uYXYsLm5hdi1idXR0b257YWxpZ24taXRlbXM6Y2VudGVyfS5uYXZ7ZGlzcGxheTpncmlkO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2NvbnRhaW46Y29udGVudH0ubmF2LWJ1dHRvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubmF2LWVtb2ppe2ZvbnQtc2l6ZTp2YXIoLS1jYXRlZ29yeS1lbW9qaS1zaXplKTt3aWR0aDp2YXIoLS10b3RhbC1jYXRlZ29yeS1lbW9qaS1zaXplKTtoZWlnaHQ6dmFyKC0tdG90YWwtY2F0ZWdvcnktZW1vamktc2l6ZSl9LmluZGljYXRvci13cmFwcGVye2Rpc3BsYXk6ZmxleDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpfS5pbmRpY2F0b3J7d2lkdGg6Y2FsYygxMDAlL3ZhcigtLW51bS1ncm91cHMpKTtoZWlnaHQ6dmFyKC0taW5kaWNhdG9yLWhlaWdodCk7b3BhY2l0eTp2YXIoLS1pbmRpY2F0b3Itb3BhY2l0eSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pbmRpY2F0b3ItY29sb3IpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyLHRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0fUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5pbmRpY2F0b3J7d2lsbC1jaGFuZ2U6b3BhY2l0eTt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcn19LnBhZC10b3AsaW5wdXQuc2VhcmNoe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7d2lkdGg6MTAwJX0ucGFkLXRvcHtoZWlnaHQ6dmFyKC0tZW1vamktcGFkZGluZyk7ei1pbmRleDozfS5zZWFyY2gtcm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tZW1vamktcGFkZGluZyk7cGFkZGluZy1ib3R0b206dmFyKC0tZW1vamktcGFkZGluZyl9LnNlYXJjaC13cmFwcGVye2ZsZXg6MTttaW4td2lkdGg6MH1pbnB1dC5zZWFyY2h7cGFkZGluZzp2YXIoLS1pbnB1dC1wYWRkaW5nKTtib3JkZXItcmFkaXVzOnZhcigtLWlucHV0LWJvcmRlci1yYWRpdXMpO2JvcmRlcjp2YXIoLS1pbnB1dC1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0taW5wdXQtYm9yZGVyLWNvbG9yKTtjb2xvcjp2YXIoLS1pbnB1dC1mb250LWNvbG9yKTtmb250LXNpemU6dmFyKC0taW5wdXQtZm9udC1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS1pbnB1dC1saW5lLWhlaWdodCl9aW5wdXQuc2VhcmNoOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcil9LmZhdm9yaXRlc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2JvcmRlci10b3A6dmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Y29udGFpbjpjb250ZW50fS5tZXNzYWdle3BhZGRpbmc6dmFyKC0tZW1vamktcGFkZGluZyl9XCIgKyBFWFRSQV9TVFlMRVM7XG4gICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB0aGlzLl9jdHggPSB7XG4gICAgICAvLyBTZXQgZGVmYXVsdHNcbiAgICAgIGxvY2FsZTogREVGQVVMVF9MT0NBTEUsXG4gICAgICBkYXRhU291cmNlOiBERUZBVUxUX0RBVEFfU09VUkNFLFxuICAgICAgc2tpblRvbmVFbW9qaTogREVGQVVMVF9TS0lOX1RPTkVfRU1PSkksXG4gICAgICBjdXN0b21DYXRlZ29yeVNvcnRpbmc6IERFRkFVTFRfQ0FURUdPUllfU09SVElORyxcbiAgICAgIGN1c3RvbUVtb2ppOiBudWxsLFxuICAgICAgaTE4bjogZW5JMThuLFxuICAgICAgZW1vamlWZXJzaW9uOiBudWxsLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICAgIC8vIEhhbmRsZSBwcm9wZXJ0aWVzIHNldCBiZWZvcmUgdGhlIGVsZW1lbnQgd2FzIHVwZ3JhZGVkXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIFBST1BTKSB7XG4gICAgICBpZiAocHJvcCAhPT0gJ2RhdGFiYXNlJyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywgcHJvcCkpIHtcbiAgICAgICAgdGhpcy5fY3R4W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2RiRmx1c2goKTsgLy8gd2FpdCBmb3IgYSBmbHVzaCBiZWZvcmUgY3JlYXRpbmcgdGhlIGRiLCBpbiBjYXNlIHRoZSB1c2VyIGNhbGxzIGUuZy4gYSBzZXR0ZXIgb3Igc2V0QXR0cmlidXRlXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgLy8gVGhlIF9jbXAgbWF5IGJlIGRlZmluZWQgaWYgdGhlIGNvbXBvbmVudCB3YXMgaW1tZWRpYXRlbHkgZGlzY29ubmVjdGVkIGFuZCB0aGVuIHJlY29ubmVjdGVkLiBJbiB0aGF0IGNhc2UsXG4gICAgLy8gZG8gbm90aGluZyAocHJlc2VydmUgdGhlIHN0YXRlKVxuICAgIGlmICghdGhpcy5fY21wKSB7XG4gICAgICB0aGlzLl9jbXAgPSBjcmVhdGVSb290KHRoaXMuc2hhZG93Um9vdCwgdGhpcy5fY3R4KTtcbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgLy8gQ2hlY2sgaW4gYSBtaWNyb3Rhc2sgaWYgdGhlIGVsZW1lbnQgaXMgc3RpbGwgY29ubmVjdGVkLiBJZiBzbywgdHJlYXQgdGhpcyBhcyBhIFwibW92ZVwiIHJhdGhlciB0aGFuIGEgZGlzY29ubmVjdFxuICAgIC8vIEluc3BpcmVkIGJ5IFZ1ZTogaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZXh0cmFzL3dlYi1jb21wb25lbnRzLmh0bWwjYnVpbGRpbmctY3VzdG9tLWVsZW1lbnRzLXdpdGgtdnVlXG4gICAgcU0oKCkgPT4ge1xuICAgICAgLy8gdGhpcy5fY21wIG1heSBiZSBkZWZpbmVkIGlmIGNvbm5lY3QtZGlzY29ubmVjdC1jb25uZWN0LWRpc2Nvbm5lY3Qgb2NjdXJzIHN5bmNocm9ub3VzbHlcbiAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCAmJiB0aGlzLl9jbXApIHtcbiAgICAgICAgdGhpcy5fY21wLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2NtcCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCB7IGRhdGFiYXNlIH0gPSB0aGlzLl9jdHg7XG4gICAgICAgIGRhdGFiYXNlLmNsb3NlKClcbiAgICAgICAgICAvLyBvbmx5IGhhcHBlbnMgaWYgdGhlIGRhdGFiYXNlIGZhaWxlZCB0byBsb2FkIGluIHRoZSBmaXJzdCBwbGFjZSwgc28gd2UgZG9uJ3QgY2FyZVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcbiAgICByZXR1cm4gWydsb2NhbGUnLCAnZGF0YS1zb3VyY2UnLCAnc2tpbi10b25lLWVtb2ppJywgJ2Vtb2ppLXZlcnNpb24nXSAvLyBjb21wbGV4IG9iamVjdHMgYXJlbid0IHN1cHBvcnRlZCwgYWxzbyB1c2Uga2ViYWItY2FzZVxuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIChhdHRyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5fc2V0KFxuICAgICAgLy8gY29udmVydCBmcm9tIGtlYmFiLWNhc2UgdG8gY2FtZWxjYXNlXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMzg1MiNpc3N1ZWNvbW1lbnQtNjY1MDM3MDE1XG4gICAgICBhdHRyTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoXywgdXApID0+IHVwLnRvVXBwZXJDYXNlKCkpLFxuICAgICAgLy8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlIHRvIGZsb2F0IGlmIG5lY2Vzc2FyeVxuICAgICAgYXR0ck5hbWUgPT09ICdlbW9qaS12ZXJzaW9uJyA/IHBhcnNlRmxvYXQobmV3VmFsdWUpIDogbmV3VmFsdWVcbiAgICApO1xuICB9XG5cbiAgX3NldCAocHJvcCwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLl9jdHhbcHJvcF0gPSBuZXdWYWx1ZTtcbiAgICBpZiAodGhpcy5fY21wKSB7XG4gICAgICB0aGlzLl9jbXAuJHNldCh7IFtwcm9wXTogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIGlmIChbJ2xvY2FsZScsICdkYXRhU291cmNlJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgIHRoaXMuX2RiRmx1c2goKTtcbiAgICB9XG4gIH1cblxuICBfZGJDcmVhdGUgKCkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBkYXRhU291cmNlLCBkYXRhYmFzZSB9ID0gdGhpcy5fY3R4O1xuICAgIC8vIG9ubHkgY3JlYXRlIGEgbmV3IGRhdGFiYXNlIGlmIHdlIHJlYWxseSBuZWVkIHRvXG4gICAgaWYgKCFkYXRhYmFzZSB8fCBkYXRhYmFzZS5sb2NhbGUgIT09IGxvY2FsZSB8fCBkYXRhYmFzZS5kYXRhU291cmNlICE9PSBkYXRhU291cmNlKSB7XG4gICAgICB0aGlzLl9zZXQoJ2RhdGFiYXNlJywgbmV3IERhdGFiYXNlKHsgbG9jYWxlLCBkYXRhU291cmNlIH0pKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIERhdGFiYXNlIGluIG9uZSBtaWNyb3Rhc2sgaWYgdGhlIGxvY2FsZS9kYXRhU291cmNlIGNoYW5nZS4gV2UgZG8gb25lIG1pY3JvdGFza1xuICAvLyBzbyB3ZSBkb24ndCBjcmVhdGUgdHdvIERhdGFiYXNlcyBpZiBlLmcuIGJvdGggdGhlIGxvY2FsZSBhbmQgdGhlIGRhdGFTb3VyY2UgY2hhbmdlXG4gIF9kYkZsdXNoICgpIHtcbiAgICBxTSgoKSA9PiAoXG4gICAgICB0aGlzLl9kYkNyZWF0ZSgpXG4gICAgKSk7XG4gIH1cbn1cblxuY29uc3QgZGVmaW5pdGlvbnMgPSB7fTtcblxuZm9yIChjb25zdCBwcm9wIG9mIFBST1BTKSB7XG4gIGRlZmluaXRpb25zW3Byb3BdID0ge1xuICAgIGdldCAoKSB7XG4gICAgICBpZiAocHJvcCA9PT0gJ2RhdGFiYXNlJykge1xuICAgICAgICAvLyBpbiByYXJlIGNhc2VzLCB0aGUgbWljcm90YXNrIG1heSBub3QgYmUgZmx1c2hlZCB5ZXQsIHNvIHdlIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhlIERCXG4gICAgICAgIC8vIG5vdyBpZiB0aGUgdXNlciBpcyBhc2tpbmcgZm9yIGl0XG4gICAgICAgIHRoaXMuX2RiQ3JlYXRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fY3R4W3Byb3BdXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgaWYgKHByb3AgPT09ICdkYXRhYmFzZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhYmFzZSBpcyByZWFkLW9ubHknKVxuICAgICAgfVxuICAgICAgdGhpcy5fc2V0KHByb3AsIHZhbCk7XG4gICAgfVxuICB9O1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhQaWNrZXJFbGVtZW50LnByb3RvdHlwZSwgZGVmaW5pdGlvbnMpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2Vtb2ppLXBpY2tlcicpKSB7IC8vIGlmIGFscmVhZHkgZGVmaW5lZCwgZG8gbm90aGluZyAoZS5nLiBzYW1lIHNjcmlwdCBpbXBvcnRlZCB0d2ljZSlcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbW9qaS1waWNrZXInLCBQaWNrZXJFbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgUGlja2VyRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=