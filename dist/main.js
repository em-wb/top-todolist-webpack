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

.done-ctr {
  margin-top: 20%;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main-font: \"Montserrat\", sans-serif;\n  --heading-font: \"Montserrat\", sans-serif;\n  --heading-weight: 600;\n  --accent-color: #f6f4f9;\n  --accent-color-2: #fca3b9;\n  --main-font-size: 18px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  max-height: 100vh;\n  overflow: hidden;\n}\n\nfooter {\n  grid-column: 1/3;\n  grid-row: 5/6;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--main-font);\n  border-radius: 0 0 5px 5px;\n  background-color: #6184c6;\n  padding: 1.5rem 0 1.5rem;\n}\n\nheader {\n  display: none;\n}\n\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  height: fit-content;\n  padding: 0.5rem;\n  font-size: var(--main-font-size);\n  font-family: var(--main-font);\n  border-radius: 1rem;\n  border: black 1px solid;\n  background-color: var(--accent-color-2);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\nbutton:hover,\n.list-item {\n  cursor: pointer;\n}\n\nh1,\n.desc {\n  font-family: var(--heading-font);\n  text-align: center;\n  padding-top: 1rem;\n}\n\nh2 {\n  font-size: 1.4rem;\n}\n\nhr {\n  width: 90%;\n  opacity: 80%;\n}\n\nimg {\n  width: 50%;\n  height: auto;\n  padding-right: 1.3rem;\n}\n\nform {\n  grid-row: 2/3;\n  width: 91vw;\n  padding: 1rem;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 25% 75%;\n  grid-template-rows: repeat(5, 1fr);\n  height: 100vh;\n  font-family: var(--main-font);\n  font-size: var(--main-font-size);\n}\n\n.logo {\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n  font-style: italic;\n  font-size: 0.9rem;\n  opacity: 90%;\n  color: #fca3b9;\n}\n\n.menuDiv {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.menuItemDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--accent-color);\n}\n\n.menuItemDiv > i {\n  margin-bottom: 5px;\n}\n\n.menuItemDiv:hover {\n  cursor: pointer;\n  opacity: 80%;\n}\n\n.view-ctr {\n  display: grid;\n  grid-template-rows: 17% 1fr;\n  grid-column: 1/3;\n  grid-row: 1/5;\n  background-color: var(--accent-color);\n}\n\n.add-new-btn {\n  position: fixed;\n  right: 10%;\n  bottom: 25%;\n  z-index: 1000;\n  background-color: #b0b8c7;\n  font-size: 2rem;\n  border-radius: 2rem;\n}\n\n.todo-done-ctr,\n.lists-ctr,\n.add-new,\nform {\n  overflow-y: auto;\n}\n\n.done-ctr {\n  margin: 0 0.5rem;\n}\n\n.done-title {\n  margin-bottom: 2rem;\n}\n\n.nothing-complete {\n  border-bottom: #b0b8c7 solid 1px;\n  padding: 0.5rem 0;\n  text-align: center;\n}\n\n.no-tasks-text {\n  font-size: 0.9rem;\n  opacity: 60%;\n}\n\n.heading-ctr {\n  grid-row: 1/2;\n  position: sticky;\n  padding-bottom: 2rem;\n}\n\n.logo {\n  padding-top: 1rem;\n  font-size: 1.3rem;\n}\n\n.done-ctr {\n  margin-top: 20%;\n}\n\n.item-ctr {\n  display: grid;\n  grid-template-columns: 65% 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  height: fit-content;\n  margin: 0.5rem;\n  border-bottom: rgb(185, 185, 185) solid 1px;\n}\n\n.text-div {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  padding-left: 0.2rem;\n}\n\n.text-div > p {\n  padding-top: 0.3rem;\n}\n\n.open-edit-div {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.open-edit-div > i {\n  font-size: var(--main-font-size);\n}\n\n.open-edit-div,\n.task-complete-div,\n.delete-div,\n.icon-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.task-complete-div,\n.delete-div {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.due-date {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  margin-bottom: 0.4rem;\n}\n\n.icon-div {\n  grid-column: 2/4;\n  grid-row: 1/2;\n}\n\n.list-icon-btn {\n  border-radius: 1.4rem;\n  font-size: 1.4rem;\n  padding: 0rem 2rem;\n}\n\n.priority {\n  border-left: rgb(235, 95, 44) solid 0.3rem;\n  opacity: 90%;\n}\n\n.overdue {\n  color: rgb(235, 95, 44);\n}\n\n.today {\n  color: black;\n}\n\n.today,\n.overdue {\n  font-weight: 600;\n}\n\n.no-tasks-ctr {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.h1-new {\n  grid-row: 1/2;\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.add-new {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--accent-color);\n  z-index: 1001;\n}\n\n.form-ctr,\n.priority-ctr,\n.button-ctr {\n  display: flex;\n  margin-bottom: 0.8rem;\n}\n\n.form-ctr {\n  flex-direction: column;\n}\n\n.priority-ctr {\n  gap: 0.4rem;\n}\n\n.input {\n  width: 100%;\n  padding-left: 0.1rem;\n  font-family: var(--main-font);\n  font-size: 1rem;\n}\n\n.button-ctr {\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\nform > .button-ctr > button,\n.choose-icon-ctr > button {\n  width: 40%;\n}\n\n.choose-icon-ctr > button {\n  background-color: #a0bff8;\n}\n\n.close-ctr {\n  text-align: end;\n}\n\n.choose-icon-ctr {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  margin-bottom: 0.1rem;\n  gap: 1rem;\n}\n\n.choose-icon-ctr > input {\n  width: 1.8rem;\n  height: 1.8rem;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.selected {\n  font-weight: 900;\n  color: var(--accent-color-2);\n}\n\n.profile-ctr {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  padding-bottom: 10%;\n  background-color: var(--accent-color);\n  z-index: 1001;\n}\n\n.avatar {\n  min-height: 180px;\n  width: auto;\n  padding: 0;\n}\n\n.avatar-header {\n  max-height: 5rem;\n  width: fit-content;\n}\n\n.profile-name {\n  font-size: 2rem;\n}\n\n@media (min-width: 720px) {\n  footer {\n    grid-column: 1/2;\n    grid-row: 2/6;\n    justify-content: flex-start;\n    border: none;\n    max-height: 80vh;\n  }\n\n  footer > .logo {\n    display: none;\n  }\n\n  header {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    position: sticky;\n    top: 0;\n    display: grid;\n    grid-template-columns: 25% 75%;\n    justify-content: center;\n    background-color: #fca3b9;\n    border: none;\n    z-index: 1000;\n  }\n\n  img {\n    max-width: 350px;\n  }\n\n  form {\n    width: 70%;\n  }\n\n  .content {\n    min-height: 100vh;\n  }\n\n  .item-ctr {\n    grid-template-columns: 80% 1fr 1fr;\n  }\n\n  .menuDiv {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 80%;\n    margin-top: 10%;\n  }\n\n  .menuItemDiv {\n    width: fit-content;\n  }\n\n  .logo {\n    grid-column: 1/2;\n    font-size: 2rem;\n    text-align: center;\n    color: var(--accent-color);\n    padding: 0;\n  }\n\n  .header-profile {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding-right: 10rem;\n    gap: 2rem;\n  }\n\n  .header-profile > p {\n    color: var(--accent-color);\n    font-weight: var(--heading-weight);\n    font-size: var(--main-font-size);\n  }\n\n  .logo-ctr {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .view-ctr {\n    grid-column: 2/3;\n    grid-row: 2/6;\n    max-height: 80vh;\n    padding-bottom: 1rem;\n  }\n\n  .add-new-btn {\n    position: fixed;\n    right: 10%;\n    top: 25%;\n    z-index: 1000;\n  }\n\n  form > .button-ctr > button,\n  .choose-icon-ctr > button {\n    width: 30%;\n  }\n\n  .todo-done-ctr,\n  .lists-ctr {\n    padding: 0 15%;\n  }\n\n  .profile-ctr {\n    padding-top: 10%;\n  }\n}\n"],"sourceRoot":""}]);
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
  const submitBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "submitBtn", ctr, "Submit", [
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
/* harmony import */ var _listUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listUI */ "./src/listUI.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list */ "./src/list.js");








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
  const listArray = (0,_list__WEBPACK_IMPORTED_MODULE_5__.getStoredLists)();
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

    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(0);
    (0,_listUI__WEBPACK_IMPORTED_MODULE_4__.addTaskEventLis)();
    edited = false;
    editedIndex = null;
  });
}

function closeFormEL() {
  document.getElementById("close-btn").addEventListener("click", (e) => {
    (0,___WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(0);
    (0,_listUI__WEBPACK_IMPORTED_MODULE_4__.addTaskEventLis)();
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
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(chosenIndex);
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
    "View and edit all lists"
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
  (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (index == 0) {
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(index);
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
  if (date) {
    const parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(date);
    checkIfPast(parsedDate, dueDateDiv);
    checkIfToday(parsedDate, dueDateDiv);
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(parsedDate, "dd MMM yy");
    return formattedDate;
  }
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




function createList(title, description, icon) {
  const list = {
    title: title,
    description: description,
    icon: icon,
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
    const allTasks = createList("All tasks", "View all your tasks", null);
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
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _complete_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complete.png */ "./src/complete.png");









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
    const list = (0,_list__WEBPACK_IMPORTED_MODULE_6__.getListData)(listIndex);
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
    noTasksImg.src = _complete_png__WEBPACK_IMPORTED_MODULE_7__;
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
/* harmony import */ var random_avatar_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! random-avatar-generator */ "./node_modules/random-avatar-generator/dist/index.js");
/* harmony import */ var random_avatar_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(random_avatar_generator__WEBPACK_IMPORTED_MODULE_1__);



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
  if (avatar.length > 0) {
    return avatar;
  }
  const generator = new random_avatar_generator__WEBPACK_IMPORTED_MODULE_1__.AvatarGenerator();
  const defaultAvatar = generator.generateRandomAvatar("avatar");
  saveAvatarToStorage(defaultAvatar);
  return defaultAvatar;
}

function getName(name) {
  if (name.length > 0) {
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");






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
  (0,_appUI__WEBPACK_IMPORTED_MODULE_2__.addTaskCtrs)();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
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
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(task.dueDate)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLHNEQUFzRCxhQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVI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QUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDRjtBQUNtQjtBQUNLO0FBQ0o7QUFDUTtBQUs5Qjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0EsR0FBRzs7QUFFSCxRQUFRLDZFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxZQUFZLDZFQUFpQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSx1QkFBdUI7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDZFQUE2RTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1DQUFtQztBQUN0RTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsOEVBQThFLElBQUk7QUFDbkc7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sT0FBTztBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxjQUFjO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0OUJDO0FBQ0k7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGVTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFlBQVk7QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qiw2REFBNkQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFD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RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFb0M7Ozs7Ozs7VUNqcERwQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTs7Ozs7V0NGQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvcmFuZG9tLWF2YXRhci1nZW5lcmF0b3IvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvdHljaGVpLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcnNoaWZ0Ny5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2FkZE5ldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9hZGROZXdMaXN0LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2FkZE5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvYWxsTGlzdHNVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9hcHBVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9saXN0VUkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9wcm9maWxlVUkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svaWdub3JlZHwvaG9tZS9lbS1qaC9Eb2N1bWVudHMvR2l0SHViL3RvZG8td2VicGFjay12Mi90b3AtdG9kb2xpc3Qtd2VicGFjay9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbXxjcnlwdG8iLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzUGFzdC5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlSVNPLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9lbW9qaS1waWNrZXItZWxlbWVudC9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9lbW9qaS1waWNrZXItZWxlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9lbW9qaS1waWNrZXItZWxlbWVudC9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2FtZCBkZWZpbmUiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWZvbnQ6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAtLWhlYWRpbmctZm9udDogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0taGVhZGluZy13ZWlnaHQ6IDYwMDtcbiAgLS1hY2NlbnQtY29sb3I6ICNmNmY0Zjk7XG4gIC0tYWNjZW50LWNvbG9yLTI6ICNmY2EzYjk7XG4gIC0tbWFpbi1mb250LXNpemU6IDE4cHg7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDUvNjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE4NGM2O1xuICBwYWRkaW5nOiAxLjVyZW0gMCAxLjVyZW07XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLTIpO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XG59XG5cbmJ1dHRvbjpob3Zlcixcbi5saXN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxLFxuLmRlc2Mge1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuaHIge1xuICB3aWR0aDogOTAlO1xuICBvcGFjaXR5OiA4MCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMS4zcmVtO1xufVxuXG5mb3JtIHtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgd2lkdGg6IDkxdnc7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG59XG5cbi5sb2dvIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG9wYWNpdHk6IDkwJTtcbiAgY29sb3I6ICNmY2EzYjk7XG59XG5cbi5tZW51RGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWVudUl0ZW1EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm1lbnVJdGVtRGl2ID4gaSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1lbnVJdGVtRGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiA4MCU7XG59XG5cbi52aWV3LWN0ciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTclIDFmcjtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDEvNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmFkZC1uZXctYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTAlO1xuICBib3R0b206IDI1JTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjhjNztcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4udG9kby1kb25lLWN0cixcbi5saXN0cy1jdHIsXG4uYWRkLW5ldyxcbmZvcm0ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZG9uZS1jdHIge1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4uZG9uZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ub3RoaW5nLWNvbXBsZXRlIHtcbiAgYm9yZGVyLWJvdHRvbTogI2IwYjhjNyBzb2xpZCAxcHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby10YXNrcy10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG9wYWNpdHk6IDYwJTtcbn1cblxuLmhlYWRpbmctY3RyIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uZG9uZS1jdHIge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5pdGVtLWN0ciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjUlIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHJnYigxODUsIDE4NSwgMTg1KSBzb2xpZCAxcHg7XG59XG5cbi50ZXh0LWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cblxuLnRleHQtZGl2ID4gcCB7XG4gIHBhZGRpbmctdG9wOiAwLjNyZW07XG59XG5cbi5vcGVuLWVkaXQtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDIvMztcbn1cblxuLm9wZW4tZWRpdC1kaXYgPiBpIHtcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG59XG5cbi5vcGVuLWVkaXQtZGl2LFxuLnRhc2stY29tcGxldGUtZGl2LFxuLmRlbGV0ZS1kaXYsXG4uaWNvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi50YXNrLWNvbXBsZXRlLWRpdixcbi5kZWxldGUtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDIvMztcbn1cblxuLmR1ZS1kYXRlIHtcbiAgZ3JpZC1jb2x1bW46IDIvNDtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuXG4uaWNvbi1kaXYge1xuICBncmlkLWNvbHVtbjogMi80O1xuICBncmlkLXJvdzogMS8yO1xufVxuXG4ubGlzdC1pY29uLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEuNHJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcbn1cblxuLnByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IHJnYigyMzUsIDk1LCA0NCkgc29saWQgMC4zcmVtO1xuICBvcGFjaXR5OiA5MCU7XG59XG5cbi5vdmVyZHVlIHtcbiAgY29sb3I6IHJnYigyMzUsIDk1LCA0NCk7XG59XG5cbi50b2RheSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRvZGF5LFxuLm92ZXJkdWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubm8tdGFza3MtY3RyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uaDEtbmV3IHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG4uYWRkLW5ldyB7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5mb3JtLWN0cixcbi5wcmlvcml0eS1jdHIsXG4uYnV0dG9uLWN0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuLmZvcm0tY3RyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByaW9yaXR5LWN0ciB7XG4gIGdhcDogMC40cmVtO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idXR0b24tY3RyIHtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5mb3JtID4gLmJ1dHRvbi1jdHIgPiBidXR0b24sXG4uY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNob29zZS1pY29uLWN0ciA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGJmZjg7XG59XG5cbi5jbG9zZS1jdHIge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5jaG9vc2UtaWNvbi1jdHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi5jaG9vc2UtaWNvbi1jdHIgPiBpbnB1dCB7XG4gIHdpZHRoOiAxLjhyZW07XG4gIGhlaWdodDogMS44cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcbn1cblxuLnByb2ZpbGUtY3RyIHtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmF2YXRhciB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmF2YXRhci1oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5wcm9maWxlLW5hbWUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICBmb290ZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDIvNjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gIH1cblxuICBmb290ZXIgPiAubG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2EzYjk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLml0ZW0tY3RyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxZnIgMWZyO1xuICB9XG5cbiAgLm1lbnVEaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxuICAubWVudUl0ZW1EaXYge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5oZWFkZXItcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5oZWFkZXItcHJvZmlsZSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG4gIH1cblxuICAubG9nby1jdHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAudmlldy1jdHIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDIvNjtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmFkZC1uZXctYnRuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDI1JTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgZm9ybSA+IC5idXR0b24tY3RyID4gYnV0dG9uLFxuICAuY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgLnRvZG8tZG9uZS1jdHIsXG4gIC5saXN0cy1jdHIge1xuICAgIHBhZGRpbmc6IDAgMTUlO1xuICB9XG5cbiAgLnByb2ZpbGUtY3RyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4Qyxx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O0lBRUUsVUFBVTtFQUNaOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1oZWFkaW5nLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0taGVhZGluZy13ZWlnaHQ6IDYwMDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZjZmNGY5O1xcbiAgLS1hY2NlbnQtY29sb3ItMjogI2ZjYTNiOTtcXG4gIC0tbWFpbi1mb250LXNpemU6IDE4cHg7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiA1LzY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTg0YzY7XFxuICBwYWRkaW5nOiAxLjVyZW0gMCAxLjVyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLmxpc3QtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmgxLFxcbi5kZXNjIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5ociB7XFxuICB3aWR0aDogOTAlO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDEuM3JlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgd2lkdGg6IDkxdnc7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG9wYWNpdHk6IDkwJTtcXG4gIGNvbG9yOiAjZmNhM2I5O1xcbn1cXG5cXG4ubWVudURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tZW51SXRlbURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLm1lbnVJdGVtRGl2ID4gaSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tZW51SXRlbURpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi52aWV3LWN0ciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNyUgMWZyO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAxLzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uYWRkLW5ldy1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDEwJTtcXG4gIGJvdHRvbTogMjUlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGI4Yzc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4udG9kby1kb25lLWN0cixcXG4ubGlzdHMtY3RyLFxcbi5hZGQtbmV3LFxcbmZvcm0ge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRvbmUtY3RyIHtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5kb25lLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5ub3RoaW5nLWNvbXBsZXRlIHtcXG4gIGJvcmRlci1ib3R0b206ICNiMGI4Yzcgc29saWQgMXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uby10YXNrcy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4uaGVhZGluZy1jdHIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmRvbmUtY3RyIHtcXG4gIG1hcmdpbi10b3A6IDIwJTtcXG59XFxuXFxuLml0ZW0tY3RyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1JSAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDE4NSwgMTg1LCAxODUpIHNvbGlkIDFweDtcXG59XFxuXFxuLnRleHQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuLnRleHQtZGl2ID4gcCB7XFxuICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbn1cXG5cXG4ub3Blbi1lZGl0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLm9wZW4tZWRpdC1kaXYgPiBpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xcbn1cXG5cXG4ub3Blbi1lZGl0LWRpdixcXG4udGFzay1jb21wbGV0ZS1kaXYsXFxuLmRlbGV0ZS1kaXYsXFxuLmljb24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWRpdixcXG4uZGVsZXRlLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4uaWNvbi1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5saXN0LWljb24tYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZzogMHJlbSAycmVtO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IHJnYigyMzUsIDk1LCA0NCkgc29saWQgMC4zcmVtO1xcbiAgb3BhY2l0eTogOTAlO1xcbn1cXG5cXG4ub3ZlcmR1ZSB7XFxuICBjb2xvcjogcmdiKDIzNSwgOTUsIDQ0KTtcXG59XFxuXFxuLnRvZGF5IHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRvZGF5LFxcbi5vdmVyZHVlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uby10YXNrcy1jdHIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmgxLW5ldyB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuXFxuLmFkZC1uZXcge1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB6LWluZGV4OiAxMDAxO1xcbn1cXG5cXG4uZm9ybS1jdHIsXFxuLnByaW9yaXR5LWN0cixcXG4uYnV0dG9uLWN0ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4uZm9ybS1jdHIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByaW9yaXR5LWN0ciB7XFxuICBnYXA6IDAuNHJlbTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi1jdHIge1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuZm9ybSA+IC5idXR0b24tY3RyID4gYnV0dG9uLFxcbi5jaG9vc2UtaWNvbi1jdHIgPiBidXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLmNob29zZS1pY29uLWN0ciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBiZmY4O1xcbn1cXG5cXG4uY2xvc2UtY3RyIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNob29zZS1pY29uLWN0ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hvb3NlLWljb24tY3RyID4gaW5wdXQge1xcbiAgd2lkdGg6IDEuOHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLTIpO1xcbn1cXG5cXG4ucHJvZmlsZS1jdHIge1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB6LWluZGV4OiAxMDAxO1xcbn1cXG5cXG4uYXZhdGFyIHtcXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYXZhdGFyLWhlYWRlciB7XFxuICBtYXgtaGVpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvZmlsZS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XFxuICBmb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi82O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IC5sb2dvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTNiOTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC5pdGVtLWN0ciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDFmciAxZnI7XFxuICB9XFxuXFxuICAubWVudURpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtRGl2IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuaGVhZGVyLXByb2ZpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMTByZW07XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItcHJvZmlsZSA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxuICB9XFxuXFxuICAubG9nby1jdHIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC52aWV3LWN0ciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzY7XFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgLmFkZC1uZXctYnRuIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTAlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gIH1cXG5cXG4gIGZvcm0gPiAuYnV0dG9uLWN0ciA+IGJ1dHRvbixcXG4gIC5jaG9vc2UtaWNvbi1jdHIgPiBidXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcblxcbiAgLnRvZG8tZG9uZS1jdHIsXFxuICAubGlzdHMtY3RyIHtcXG4gICAgcGFkZGluZzogMCAxNSU7XFxuICB9XFxuXFxuICAucHJvZmlsZS1jdHIge1xcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXZhdGFyR2VuZXJhdG9yID0gdm9pZCAwO1xyXG52YXIgc2VlZHJhbmRvbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzZWVkcmFuZG9tXCIpKTtcclxuLyoqIEBkZXNjcmlwdGlvbiBDbGFzcyB0byBnZW5lcmF0ZSBhdmF0YXJzICAqL1xyXG52YXIgQXZhdGFyR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXZhdGFyR2VuZXJhdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZXMgcmFuZG9tIGF2YXRhciBpbWFnZSBVUkxcclxuICAgICAqIEByZXR1cm5zIFJhbmRvbSBhdmF0YXIgaW1hZ2UgVVJMXHJcbiAgICAgKi9cclxuICAgIEF2YXRhckdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVSYW5kb21BdmF0YXIgPSBmdW5jdGlvbiAoc2VlZCkge1xyXG4gICAgICAgIHZhciB0b3BUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRvcFR5cGVPcHRpb25zLnB1c2goXCJOb0hhaXJcIiwgXCJFeWVwYXRjaFwiLCBcIkhhdFwiLCBcIkhpamFiXCIsIFwiVHVyYmFuXCIsIFwiV2ludGVySGF0MVwiLCBcIldpbnRlckhhdDJcIiwgXCJXaW50ZXJIYXQzXCIsIFwiV2ludGVySGF0NFwiLCBcIkxvbmdIYWlyQmlnSGFpclwiLCBcIkxvbmdIYWlyQm9iXCIsIFwiTG9uZ0hhaXJCdW5cIiwgXCJMb25nSGFpckN1cmx5XCIsIFwiTG9uZ0hhaXJDdXJ2eVwiLCBcIkxvbmdIYWlyRHJlYWRzXCIsIFwiTG9uZ0hhaXJGcmlkYVwiLCBcIkxvbmdIYWlyRnJvXCIsIFwiTG9uZ0hhaXJGcm9CYW5kXCIsIFwiTG9uZ0hhaXJOb3RUb29Mb25nXCIsIFwiTG9uZ0hhaXJTaGF2ZWRTaWRlc1wiLCBcIkxvbmdIYWlyTWlhV2FsbGFjZVwiLCBcIkxvbmdIYWlyU3RyYWlnaHRcIiwgXCJMb25nSGFpclN0cmFpZ2h0MlwiLCBcIkxvbmdIYWlyU3RyYWlnaHRTdHJhbmRcIiwgXCJTaG9ydEhhaXJEcmVhZHMwMVwiLCBcIlNob3J0SGFpckRyZWFkczAyXCIsIFwiU2hvcnRIYWlyRnJpenpsZVwiLCBcIlNob3J0SGFpclNoYWdneU11bGxldFwiLCBcIlNob3J0SGFpclNob3J0Q3VybHlcIiwgXCJTaG9ydEhhaXJTaG9ydEZsYXRcIiwgXCJTaG9ydEhhaXJTaG9ydFJvdW5kXCIsIFwiU2hvcnRIYWlyU2hvcnRXYXZlZFwiLCBcIlNob3J0SGFpclNpZGVzXCIsIFwiU2hvcnRIYWlyVGhlQ2Flc2FyXCIsIFwiU2hvcnRIYWlyVGhlQ2Flc2FyU2lkZVBhcnRcIik7XHJcbiAgICAgICAgdmFyIGFjY2Vzc29yaWVzVHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zLnB1c2goXCJCbGFua1wiLCBcIkt1cnRcIiwgXCJQcmVzY3JpcHRpb24wMVwiLCBcIlByZXNjcmlwdGlvbjAyXCIsIFwiUm91bmRcIiwgXCJTdW5nbGFzc2VzXCIsIFwiV2F5ZmFyZXJzXCIpO1xyXG4gICAgICAgIHZhciBmYWNpYWxIYWlyVHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmYWNpYWxIYWlyVHlwZU9wdGlvbnMucHVzaChcIkJsYW5rXCIsIFwiQmVhcmRNZWRpdW1cIiwgXCJCZWFyZExpZ2h0XCIsIFwiQmVhcmRNYWdlc3RpY1wiLCBcIk1vdXN0YWNoZUZhbmN5XCIsIFwiTW91c3RhY2hlTWFnbnVtXCIpO1xyXG4gICAgICAgIHZhciBmYWNpYWxIYWlyQ29sb3JPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZmFjaWFsSGFpckNvbG9yT3B0aW9ucy5wdXNoKFwiQXVidXJuXCIsIFwiQmxhY2tcIiwgXCJCbG9uZGVcIiwgXCJCbG9uZGVHb2xkZW5cIiwgXCJCcm93blwiLCBcIkJyb3duRGFya1wiLCBcIlBsYXRpbnVtXCIsIFwiUmVkXCIpO1xyXG4gICAgICAgIHZhciBjbG90aGVUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNsb3RoZVR5cGVPcHRpb25zLnB1c2goXCJCbGF6ZXJTaGlydFwiLCBcIkJsYXplclN3ZWF0ZXJcIiwgXCJDb2xsYXJTd2VhdGVyXCIsIFwiR3JhcGhpY1NoaXJ0XCIsIFwiSG9vZGllXCIsIFwiT3ZlcmFsbFwiLCBcIlNoaXJ0Q3Jld05lY2tcIiwgXCJTaGlydFNjb29wTmVja1wiLCBcIlNoaXJ0Vk5lY2tcIik7XHJcbiAgICAgICAgdmFyIGV5ZVR5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZXllVHlwZU9wdGlvbnMucHVzaChcIkNsb3NlXCIsIFwiQ3J5XCIsIFwiRGVmYXVsdFwiLCBcIkRpenp5XCIsIFwiRXllUm9sbFwiLCBcIkhhcHB5XCIsIFwiSGVhcnRzXCIsIFwiU2lkZVwiLCBcIlNxdWludFwiLCBcIlN1cnByaXNlZFwiLCBcIldpbmtcIiwgXCJXaW5rV2Fja3lcIik7XHJcbiAgICAgICAgdmFyIGV5ZWJyb3dUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGV5ZWJyb3dUeXBlT3B0aW9ucy5wdXNoKFwiQW5ncnlcIiwgXCJBbmdyeU5hdHVyYWxcIiwgXCJEZWZhdWx0XCIsIFwiRGVmYXVsdE5hdHVyYWxcIiwgXCJGbGF0TmF0dXJhbFwiLCBcIlJhaXNlZEV4Y2l0ZWRcIiwgXCJSYWlzZWRFeGNpdGVkTmF0dXJhbFwiLCBcIlNhZENvbmNlcm5lZFwiLCBcIlNhZENvbmNlcm5lZE5hdHVyYWxcIiwgXCJVbmlicm93TmF0dXJhbFwiLCBcIlVwRG93blwiLCBcIlVwRG93bk5hdHVyYWxcIik7XHJcbiAgICAgICAgdmFyIG1vdXRoVHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBtb3V0aFR5cGVPcHRpb25zLnB1c2goXCJDb25jZXJuZWRcIiwgXCJEZWZhdWx0XCIsIFwiRGlzYmVsaWVmXCIsIFwiRWF0aW5nXCIsIFwiR3JpbWFjZVwiLCBcIlNhZFwiLCBcIlNjcmVhbU9wZW5cIiwgXCJTZXJpb3VzXCIsIFwiU21pbGVcIiwgXCJUb25ndWVcIiwgXCJUd2lua2xlXCIsIFwiVm9taXRcIik7XHJcbiAgICAgICAgdmFyIHNraW5Db2xvck9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBza2luQ29sb3JPcHRpb25zLnB1c2goXCJUYW5uZWRcIiwgXCJZZWxsb3dcIiwgXCJQYWxlXCIsIFwiTGlnaHRcIiwgXCJCcm93blwiLCBcIkRhcmtCcm93blwiLCBcIkJsYWNrXCIpO1xyXG4gICAgICAgIHZhciBoYWlyQ29sb3JUeXBlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGhhaXJDb2xvclR5cGVzLnB1c2goXCJBdWJ1cm5cIiwgXCJCbGFja1wiLCBcIkJsb25kZVwiLCBcIkJsb25kZUdvbGRlblwiLCBcIkJyb3duXCIsIFwiQnJvd25EYXJrXCIsIFwiUGFzdGVsUGlua1wiLCBcIlBsYXRpbnVtXCIsIFwiUmVkXCIsIFwiU2lsdmVyR3JheVwiKTtcclxuICAgICAgICB2YXIgaGF0Q29sb3JPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgaGF0Q29sb3JPcHRpb25zLnB1c2goXCJCbGFja1wiLCBcIkJsdWUwMVwiLCBcIkJsdWUwMlwiLCBcIkJsdWUwM1wiLCBcIkdyYXkwMVwiLCBcIkdyYXkwMlwiLCBcIkhlYXRoZXJcIiwgXCJQYXN0ZWxCbHVlXCIsIFwiUGFzdGVsR3JlZW5cIiwgXCJQYXN0ZWxPcmFuZ2VcIiwgXCJQYXN0ZWxSZWRcIiwgXCJQYXN0ZWxZZWxsb3dcIiwgXCJQaW5rXCIsIFwiUmVkXCIsIFwiV2hpdGVcIik7XHJcbiAgICAgICAgdmFyIGNsb3RoZUNvbG9yT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNsb3RoZUNvbG9yT3B0aW9ucy5wdXNoKFwiQmxhY2tcIiwgXCJCbHVlMDFcIiwgXCJCbHVlMDJcIiwgXCJCbHVlMDNcIiwgXCJHcmF5MDFcIiwgXCJHcmF5MDJcIiwgXCJIZWF0aGVyXCIsIFwiUGFzdGVsQmx1ZVwiLCBcIlBhc3RlbEdyZWVuXCIsIFwiUGFzdGVsT3JhbmdlXCIsIFwiUGFzdGVsUmVkXCIsIFwiUGFzdGVsWWVsbG93XCIsIFwiUGlua1wiLCBcIlJlZFwiLCBcIldoaXRlXCIpO1xyXG4gICAgICAgIHZhciBybmcgPSBzZWVkID8gc2VlZHJhbmRvbV8xLmRlZmF1bHQoc2VlZCkgOiBzZWVkcmFuZG9tXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBcImh0dHBzOi8vYXZhdGFhYXJzLmlvLz9hY2Nlc3Nvcmllc1R5cGU9XCIgKyBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zLmxlbmd0aCldICsgXCImYXZhdGFyU3R5bGU9Q2lyY2xlJmNsb3RoZUNvbG9yPVwiICsgY2xvdGhlQ29sb3JPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBjbG90aGVDb2xvck9wdGlvbnMubGVuZ3RoKV0gKyBcIiZjbG90aGVUeXBlPVwiICsgY2xvdGhlVHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGNsb3RoZVR5cGVPcHRpb25zLmxlbmd0aCldICsgXCImZXllVHlwZT1cIiArIGV5ZVR5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBleWVUeXBlT3B0aW9ucy5sZW5ndGgpXSArIFwiJmV5ZWJyb3dUeXBlPVwiICsgZXllYnJvd1R5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBleWVicm93VHlwZU9wdGlvbnMubGVuZ3RoKV0gKyBcIiZmYWNpYWxIYWlyQ29sb3I9XCIgKyBmYWNpYWxIYWlyQ29sb3JPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBmYWNpYWxIYWlyQ29sb3JPcHRpb25zLmxlbmd0aCldICsgXCImZmFjaWFsSGFpclR5cGU9XCIgKyBmYWNpYWxIYWlyVHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIGZhY2lhbEhhaXJUeXBlT3B0aW9ucy5sZW5ndGgpXSArIFwiJmhhaXJDb2xvcj1cIiArIGhhaXJDb2xvclR5cGVzW01hdGguZmxvb3Iocm5nKCkgKiBoYWlyQ29sb3JUeXBlcy5sZW5ndGgpXSArIFwiJmhhdENvbG9yPVwiICsgaGF0Q29sb3JPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBoYXRDb2xvck9wdGlvbnMubGVuZ3RoKV0gKyBcIiZtb3V0aFR5cGU9XCIgKyBtb3V0aFR5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBtb3V0aFR5cGVPcHRpb25zLmxlbmd0aCldICsgXCImc2tpbkNvbG9yPVwiICsgc2tpbkNvbG9yT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogc2tpbkNvbG9yT3B0aW9ucy5sZW5ndGgpXSArIFwiJnRvcFR5cGU9XCIgKyB0b3BUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogdG9wVHlwZU9wdGlvbnMubGVuZ3RoKV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEF2YXRhckdlbmVyYXRvcjtcclxufSgpKTtcclxuZXhwb3J0cy5BdmF0YXJHZW5lcmF0b3IgPSBBdmF0YXJHZW5lcmF0b3I7XHJcbiIsIi8vIEEgbGlicmFyeSBvZiBzZWVkYWJsZSBSTkdzIGltcGxlbWVudGVkIGluIEphdmFzY3JpcHQuXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHNlZWRyYW5kb20gPSByZXF1aXJlKCdzZWVkcmFuZG9tJyk7XG4vLyB2YXIgcmFuZG9tID0gc2VlZHJhbmRvbSgxKTsgLy8gb3IgYW55IHNlZWQuXG4vLyB2YXIgeCA9IHJhbmRvbSgpOyAgICAgICAvLyAwIDw9IHggPCAxLiAgRXZlcnkgYml0IGlzIHJhbmRvbS5cbi8vIHZhciB4ID0gcmFuZG9tLnF1aWNrKCk7IC8vIDAgPD0geCA8IDEuICAzMiBiaXRzIG9mIHJhbmRvbW5lc3MuXG5cbi8vIGFsZWEsIGEgNTMtYml0IG11bHRpcGx5LXdpdGgtY2FycnkgZ2VuZXJhdG9yIGJ5IEpvaGFubmVzIEJhYWfDuGUuXG4vLyBQZXJpb2Q6IH4yXjExNlxuLy8gUmVwb3J0ZWQgdG8gcGFzcyBhbGwgQmlnQ3J1c2ggdGVzdHMuXG52YXIgYWxlYSA9IHJlcXVpcmUoJy4vbGliL2FsZWEnKTtcblxuLy8geG9yMTI4LCBhIHB1cmUgeG9yLXNoaWZ0IGdlbmVyYXRvciBieSBHZW9yZ2UgTWFyc2FnbGlhLlxuLy8gUGVyaW9kOiAyXjEyOC0xLlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogTWF0cml4UmFuayBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3IxMjggPSByZXF1aXJlKCcuL2xpYi94b3IxMjgnKTtcblxuLy8geG9yd293LCBHZW9yZ2UgTWFyc2FnbGlhJ3MgMTYwLWJpdCB4b3Itc2hpZnQgY29tYmluZWQgcGx1cyB3ZXlsLlxuLy8gUGVyaW9kOiAyXjE5Mi0yXjMyXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBDb2xsaXNpb25PdmVyLCBTaW1wUG9rZXIsIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcndvdyA9IHJlcXVpcmUoJy4vbGliL3hvcndvdycpO1xuXG4vLyB4b3JzaGlmdDcsIGJ5IEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyLCB0YWtlc1xuLy8gYSBkaWZmZXJlbnQgYXBwcm9hY2g6IGl0IGFkZHMgcm9idXN0bmVzcyBieSBhbGxvd2luZyBtb3JlIHNoaWZ0c1xuLy8gdGhhbiBNYXJzYWdsaWEncyBvcmlnaW5hbCB0aHJlZS4gIEl0IGlzIGEgNy1zaGlmdCBnZW5lcmF0b3Jcbi8vIHdpdGggMjU2IGJpdHMsIHRoYXQgcGFzc2VzIEJpZ0NydXNoIHdpdGggbm8gc3lzdG1hdGljIGZhaWx1cmVzLlxuLy8gUGVyaW9kIDJeMjU2LTEuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcnNoaWZ0NyA9IHJlcXVpcmUoJy4vbGliL3hvcnNoaWZ0NycpO1xuXG4vLyB4b3I0MDk2LCBieSBSaWNoYXJkIEJyZW50LCBpcyBhIDQwOTYtYml0IHhvci1zaGlmdCB3aXRoIGFcbi8vIHZlcnkgbG9uZyBwZXJpb2QgdGhhdCBhbHNvIGFkZHMgYSBXZXlsIGdlbmVyYXRvci4gSXQgYWxzbyBwYXNzZXNcbi8vIEJpZ0NydXNoIHdpdGggbm8gc3lzdGVtYXRpYyBmYWlsdXJlcy4gIEl0cyBsb25nIHBlcmlvZCBtYXlcbi8vIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBtYW55IGdlbmVyYXRvcnMgYW5kIG5lZWQgdG8gYXZvaWRcbi8vIGNvbGxpc2lvbnMuXG4vLyBQZXJpb2Q6IDJeNDEyOC0yXjMyLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3I0MDk2ID0gcmVxdWlyZSgnLi9saWIveG9yNDA5NicpO1xuXG4vLyBUeWNoZS1pLCBieSBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8sIGlzIGEgYml0LXNoaWZ0aW5nIHJhbmRvbVxuLy8gbnVtYmVyIGdlbmVyYXRvciBkZXJpdmVkIGZyb20gQ2hhQ2hhLCBhIG1vZGVybiBzdHJlYW0gY2lwaGVyLlxuLy8gaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcbi8vIFBlcmlvZDogfjJeMTI3XG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHR5Y2hlaSA9IHJlcXVpcmUoJy4vbGliL3R5Y2hlaScpO1xuXG4vLyBUaGUgb3JpZ2luYWwgQVJDNC1iYXNlZCBwcm5nIGluY2x1ZGVkIGluIHRoaXMgbGlicmFyeS5cbi8vIFBlcmlvZDogfjJeMTYwMFxudmFyIHNyID0gcmVxdWlyZSgnLi9zZWVkcmFuZG9tJyk7XG5cbnNyLmFsZWEgPSBhbGVhO1xuc3IueG9yMTI4ID0geG9yMTI4O1xuc3IueG9yd293ID0geG9yd293O1xuc3IueG9yc2hpZnQ3ID0geG9yc2hpZnQ3O1xuc3IueG9yNDA5NiA9IHhvcjQwOTY7XG5zci50eWNoZWkgPSB0eWNoZWk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3I7XG4iLCIvLyBBIHBvcnQgb2YgYW4gYWxnb3JpdGhtIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2UuY29tPiwgMjAxMFxuLy8gaHR0cDovL2JhYWdvZS5jb20vZW4vUmFuZG9tTXVzaW5ncy9qYXZhc2NyaXB0L1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25xdWlubGFuL2JldHRlci1yYW5kb20tbnVtYmVycy1mb3ItamF2YXNjcmlwdC1taXJyb3Jcbi8vIE9yaWdpbmFsIHdvcmsgaXMgdW5kZXIgTUlUIGxpY2Vuc2UgLVxuXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTAgYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5vcmc+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBtYXNoID0gTWFzaCgpO1xuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIG1lLnMwID0gbWUuczE7XG4gICAgbWUuczEgPSBtZS5zMjtcbiAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gIH07XG5cbiAgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuICBtZS5jID0gMTtcbiAgbWUuczAgPSBtYXNoKCcgJyk7XG4gIG1lLnMxID0gbWFzaCgnICcpO1xuICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgbWUuczAgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMwIDwgMCkgeyBtZS5zMCArPSAxOyB9XG4gIG1lLnMxIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMSA8IDApIHsgbWUuczEgKz0gMTsgfVxuICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczIgPCAwKSB7IG1lLnMyICs9IDE7IH1cbiAgbWFzaCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmMgPSBmLmM7XG4gIHQuczAgPSBmLnMwO1xuICB0LnMxID0gZi5zMTtcbiAgdC5zMiA9IGYuczI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IEFsZWEoc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpICogMHgxMDAwMDAwMDApIHwgMDsgfVxuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwcm5nKCkgKyAocHJuZygpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7IC8vIDJeLTUzXG4gIH07XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5mdW5jdGlvbiBNYXNoKCkge1xuICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgdmFyIG1hc2ggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YSA9IFN0cmluZyhkYXRhKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgaCAqPSBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgIH1cbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgfTtcblxuICByZXR1cm4gbWFzaDtcbn1cblxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLmFsZWEgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcIlR5Y2hlLWlcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLlxuLy8gU2VlIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQsIGEgPSBtZS5hO1xuICAgIGIgPSAoYiA8PCAyNSkgXiAoYiA+Pj4gNykgXiBjO1xuICAgIGMgPSAoYyAtIGQpIHwgMDtcbiAgICBkID0gKGQgPDwgMjQpIF4gKGQgPj4+IDgpIF4gYTtcbiAgICBhID0gKGEgLSBiKSB8IDA7XG4gICAgbWUuYiA9IGIgPSAoYiA8PCAyMCkgXiAoYiA+Pj4gMTIpIF4gYztcbiAgICBtZS5jID0gYyA9IChjIC0gZCkgfCAwO1xuICAgIG1lLmQgPSAoZCA8PCAxNikgXiAoYyA+Pj4gMTYpIF4gYTtcbiAgICByZXR1cm4gbWUuYSA9IChhIC0gYikgfCAwO1xuICB9O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgaXMgbm9uLWludmVydGVkIHR5Y2hlLCB3aGljaCBoYXMgYmV0dGVyIGludGVybmFsXG4gICAqIGJpdCBkaWZmdXNpb24sIGJ1dCB3aGljaCBpcyBhYm91dCAyNSUgc2xvd2VyIHRoYW4gdHljaGUtaSBpbiBKUy5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gbWUuYSwgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZDtcbiAgICBhID0gKG1lLmEgKyBtZS5iIHwgMCkgPj4+IDA7XG4gICAgZCA9IG1lLmQgXiBhOyBkID0gZCA8PCAxNiBeIGQgPj4+IDE2O1xuICAgIGMgPSBtZS5jICsgZCB8IDA7XG4gICAgYiA9IG1lLmIgXiBjOyBiID0gYiA8PCAxMiBeIGQgPj4+IDIwO1xuICAgIG1lLmEgPSBhID0gYSArIGIgfCAwO1xuICAgIGQgPSBkIF4gYTsgbWUuZCA9IGQgPSBkIDw8IDggXiBkID4+PiAyNDtcbiAgICBtZS5jID0gYyA9IGMgKyBkIHwgMDtcbiAgICBiID0gYiBeIGM7XG4gICAgcmV0dXJuIG1lLmIgPSAoYiA8PCA3IF4gYiA+Pj4gMjUpO1xuICB9XG4gICovXG5cbiAgbWUuYSA9IDA7XG4gIG1lLmIgPSAwO1xuICBtZS5jID0gMjY1NDQzNTc2OSB8IDA7XG4gIG1lLmQgPSAxMzY3MTMwNTUxO1xuXG4gIGlmIChzZWVkID09PSBNYXRoLmZsb29yKHNlZWQpKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLmEgPSAoc2VlZCAvIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgbWUuYiA9IHNlZWQgfCAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgMjA7IGsrKykge1xuICAgIG1lLmIgXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYSA9IGYuYTtcbiAgdC5iID0gZi5iO1xuICB0LmMgPSBmLmM7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnR5Y2hlaSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yMTI4XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IG1lLnggXiAobWUueCA8PCAxMSk7XG4gICAgbWUueCA9IG1lLnk7XG4gICAgbWUueSA9IG1lLno7XG4gICAgbWUueiA9IG1lLnc7XG4gICAgcmV0dXJuIG1lLncgXj0gKG1lLncgPj4+IDE5KSBeIHQgXiAodCA+Pj4gOCk7XG4gIH07XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3IxMjggPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIFJpY2hhcmQgQnJlbnQncyBYb3JnZW5zIHhvcjQwOTYgYWxnb3JpdGhtLlxuLy9cbi8vIFRoaXMgZmFzdCBub24tY3J5cHRvZ3JhcGhpYyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBpcyBkZXNpZ25lZCBmb3Jcbi8vIHVzZSBpbiBNb250ZS1DYXJsbyBhbGdvcml0aG1zLiBJdCBjb21iaW5lcyBhIGxvbmctcGVyaW9kIHhvcnNoaWZ0XG4vLyBnZW5lcmF0b3Igd2l0aCBhIFdleWwgZ2VuZXJhdG9yLCBhbmQgaXQgcGFzc2VzIGFsbCBjb21tb24gYmF0dGVyaWVzXG4vLyBvZiBzdGFzdGljaWFsIHRlc3RzIGZvciByYW5kb21uZXNzIHdoaWxlIGNvbnN1bWluZyBvbmx5IGEgZmV3IG5hbm9zZWNvbmRzXG4vLyBmb3IgZWFjaCBwcm5nIGdlbmVyYXRlZC4gIEZvciBiYWNrZ3JvdW5kIG9uIHRoZSBnZW5lcmF0b3IsIHNlZSBCcmVudCdzXG4vLyBwYXBlcjogXCJTb21lIGxvbmctcGVyaW9kIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycyB1c2luZyBzaGlmdHMgYW5kIHhvcnMuXCJcbi8vIGh0dHA6Ly9hcnhpdi5vcmcvcGRmLzEwMDQuMzExNXYxLnBkZlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciB4b3I0MDk2ID0gcmVxdWlyZSgneG9yNDA5NicpO1xuLy8gcmFuZG9tID0geG9yNDA5NigxKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWVkIHdpdGggaW50MzIgb3Igc3RyaW5nLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbSgpLCAwLjE1MjA0MzY0NTA1Mzg1NDcpOyAvLyAoMCwgMSkgcmFuZ2UsIDUzIGJpdHMuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tLmludDMyKCksIDE4MDY1MzQ4OTcpOyAgIC8vIHNpZ25lZCBpbnQzMiwgMzIgYml0cy5cbi8vXG4vLyBGb3Igbm9uemVybyBudW1lcmljIGtleXMsIHRoaXMgaW1wZWxlbWVudGF0aW9uIHByb3ZpZGVzIGEgc2VxdWVuY2Vcbi8vIGlkZW50aWNhbCB0byB0aGF0IGJ5IEJyZW50J3MgeG9yZ2VucyAzIGltcGxlbWVudGFpb24gaW4gQy4gIFRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGFsc28gcHJvdmlkZXMgZm9yIGluaXRhbGl6aW5nIHRoZSBnZW5lcmF0b3Igd2l0aFxuLy8gc3RyaW5nIHNlZWRzLCBvciBmb3Igc2F2aW5nIGFuZCByZXN0b3JpbmcgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuXG4vL1xuLy8gT24gQ2hyb21lLCB0aGlzIHBybmcgYmVuY2htYXJrcyBhYm91dCAyLjEgdGltZXMgc2xvd2VyIHRoYW5cbi8vIEphdmFzY3JpcHQncyBidWlsdC1pbiBNYXRoLnJhbmRvbSgpLlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdyA9IG1lLncsXG4gICAgICAgIFggPSBtZS5YLCBpID0gbWUuaSwgdCwgdjtcbiAgICAvLyBVcGRhdGUgV2V5bCBnZW5lcmF0b3IuXG4gICAgbWUudyA9IHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgdiBePSB2IDw8IDEzO1xuICAgIHQgXj0gdCA8PCAxNztcbiAgICB2IF49IHYgPj4+IDE1O1xuICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgLy8gVXBkYXRlIFhvciBnZW5lcmF0b3IgYXJyYXkgc3RhdGUuXG4gICAgdiA9IFhbaV0gPSB2IF4gdDtcbiAgICBtZS5pID0gaTtcbiAgICAvLyBSZXN1bHQgaXMgdGhlIGNvbWJpbmF0aW9uLlxuICAgIHJldHVybiAodiArICh3IF4gKHcgPj4+IDE2KSkpIHwgMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIHQsIHYsIGksIGosIHcsIFggPSBbXSwgbGltaXQgPSAxMjg7XG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIE51bWVyaWMgc2VlZHMgaW5pdGlhbGl6ZSB2LCB3aGljaCBpcyB1c2VkIHRvIGdlbmVyYXRlcyBYLlxuICAgICAgdiA9IHNlZWQ7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyaW5nIHNlZWRzIGFyZSBtaXhlZCBpbnRvIHYgYW5kIFggb25lIGNoYXJhY3RlciBhdCBhIHRpbWUuXG4gICAgICBzZWVkID0gc2VlZCArICdcXDAnO1xuICAgICAgdiA9IDA7XG4gICAgICBsaW1pdCA9IE1hdGgubWF4KGxpbWl0LCBzZWVkLmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgY2lyY3VsYXIgYXJyYXkgYW5kIHdleWwgdmFsdWUuXG4gICAgZm9yIChpID0gMCwgaiA9IC0zMjsgaiA8IGxpbWl0OyArK2opIHtcbiAgICAgIC8vIFB1dCB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGludG8gdGhlIGFycmF5LCBhbmQgc2h1ZmZsZSB0aGVtLlxuICAgICAgaWYgKHNlZWQpIHYgXj0gc2VlZC5jaGFyQ29kZUF0KChqICsgMzIpICUgc2VlZC5sZW5ndGgpO1xuICAgICAgLy8gQWZ0ZXIgMzIgc2h1ZmZsZXMsIHRha2UgdiBhcyB0aGUgc3RhcnRpbmcgdyB2YWx1ZS5cbiAgICAgIGlmIChqID09PSAwKSB3ID0gdjtcbiAgICAgIHYgXj0gdiA8PCAxMDtcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB2IF49IHYgPDwgNDtcbiAgICAgIHYgXj0gdiA+Pj4gMTM7XG4gICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgIHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDsgICAgIC8vIFdleWwuXG4gICAgICAgIHQgPSAoWFtqICYgMTI3XSBePSAodiArIHcpKTsgIC8vIENvbWJpbmUgeG9yIGFuZCB3ZXlsIHRvIGluaXQgYXJyYXkuXG4gICAgICAgIGkgPSAoMCA9PSB0KSA/IGkgKyAxIDogMDsgICAgIC8vIENvdW50IHplcm9lcy5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBkZXRlY3RlZCBhbGwgemVyb2VzOyBtYWtlIHRoZSBrZXkgbm9uemVyby5cbiAgICBpZiAoaSA+PSAxMjgpIHtcbiAgICAgIFhbKHNlZWQgJiYgc2VlZC5sZW5ndGggfHwgMCkgJiAxMjddID0gLTE7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIDUxMiB0aW1lcyB0byBmdXJ0aGVyIG1peCB0aGUgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgIC8vIEZhY3RvcmluZyB0aGlzIGFzIGEgZnVuY3Rpb24gc2xvd3MgdGhlIG1haW4gZ2VuZXJhdG9yLCBzbyBpdCBpcyBqdXN0XG4gICAgLy8gdW5yb2xsZWQgaGVyZS4gIFRoZSB3ZXlsIGdlbmVyYXRvciBpcyBub3QgYWR2YW5jZWQgd2hpbGUgd2FybWluZyB1cC5cbiAgICBpID0gMTI3O1xuICAgIGZvciAoaiA9IDQgKiAxMjg7IGogPiAwOyAtLWopIHtcbiAgICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgICAgdiBePSB2IDw8IDEzO1xuICAgICAgdCBePSB0IDw8IDE3O1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgICBYW2ldID0gdiBeIHQ7XG4gICAgfVxuICAgIC8vIFN0b3Jpbmcgc3RhdGUgYXMgb2JqZWN0IG1lbWJlcnMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMuXG4gICAgbWUudyA9IHc7XG4gICAgbWUuWCA9IFg7XG4gICAgbWUuaSA9IGk7XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC53ID0gZi53O1xuICB0LlggPSBmLlguc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5YKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yNDA5NiA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cgb2JqZWN0IG9yIGdsb2JhbFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3JzaGlmdDdcIiBhbGdvcml0aG0gYnlcbi8vIEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyOlxuLy8gXCJPbiB0aGUgWG9yZ3NoaWZ0IFJhbmRvbSBOdW1iZXIgR2VuZXJhdG9yc1wiXG4vLyBodHRwOi8vc2FsdWMuZW5nci51Y29ubi5lZHUvcmVmcy9jcnlwdG8vcm5nL3Bhbm5ldG9uMDVvbnRoZXhvcnNoaWZ0LnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2YXIgWCA9IG1lLngsIGkgPSBtZS5pLCB0LCB2LCB3O1xuICAgIHQgPSBYW2ldOyB0IF49ICh0ID4+PiA3KTsgdiA9IHQgXiAodCA8PCAyNCk7XG4gICAgdCA9IFhbKGkgKyAxKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMTApO1xuICAgIHQgPSBYWyhpICsgMykgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDMpO1xuICAgIHQgPSBYWyhpICsgNCkgJiA3XTsgdiBePSB0IF4gKHQgPDwgNyk7XG4gICAgdCA9IFhbKGkgKyA3KSAmIDddOyB0ID0gdCBeICh0IDw8IDEzKTsgdiBePSB0IF4gKHQgPDwgOSk7XG4gICAgWFtpXSA9IHY7XG4gICAgbWUuaSA9IChpICsgMSkgJiA3O1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgaiwgdywgWCA9IFtdO1xuXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgYXJyYXkgdXNpbmcgYSAzMi1iaXQgaW50ZWdlci5cbiAgICAgIHcgPSBYWzBdID0gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VlZCBzdGF0ZSB1c2luZyBhIHN0cmluZy5cbiAgICAgIHNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgc2VlZC5sZW5ndGg7ICsraikge1xuICAgICAgICBYW2ogJiA3XSA9IChYW2ogJiA3XSA8PCAxNSkgXlxuICAgICAgICAgICAgKHNlZWQuY2hhckNvZGVBdChqKSArIFhbKGogKyAxKSAmIDddIDw8IDEzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5mb3JjZSBhbiBhcnJheSBsZW5ndGggb2YgOCwgbm90IGFsbCB6ZXJvZXMuXG4gICAgd2hpbGUgKFgubGVuZ3RoIDwgOCkgWC5wdXNoKDApO1xuICAgIGZvciAoaiA9IDA7IGogPCA4ICYmIFhbal0gPT09IDA7ICsraik7XG4gICAgaWYgKGogPT0gOCkgdyA9IFhbN10gPSAtMTsgZWxzZSB3ID0gWFtqXTtcblxuICAgIG1lLnggPSBYO1xuICAgIG1lLmkgPSAwO1xuXG4gICAgLy8gRGlzY2FyZCBhbiBpbml0aWFsIDI1NiB2YWx1ZXMuXG4gICAgZm9yIChqID0gMjU2OyBqID4gMDsgLS1qKSB7XG4gICAgICBtZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLnguc2xpY2UoKTtcbiAgdC5pID0gZi5pO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUueCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcnNoaWZ0NyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcndvd1wiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAobWUueCBeIChtZS54ID4+PiAyKSk7XG4gICAgbWUueCA9IG1lLnk7IG1lLnkgPSBtZS56OyBtZS56ID0gbWUudzsgbWUudyA9IG1lLnY7XG4gICAgcmV0dXJuIChtZS5kID0gKG1lLmQgKyAzNjI0MzcgfCAwKSkgK1xuICAgICAgIChtZS52ID0gKG1lLnYgXiAobWUudiA8PCA0KSkgXiAodCBeICh0IDw8IDEpKSkgfCAwO1xuICB9O1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuICBtZS52ID0gMDtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgaWYgKGsgPT0gc3Ryc2VlZC5sZW5ndGgpIHtcbiAgICAgIG1lLmQgPSBtZS54IDw8IDEwIF4gbWUueCA+Pj4gNDtcbiAgICB9XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHQudiA9IGYudjtcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3J3b3cgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8qXG5Db3B5cmlnaHQgMjAxOSBEYXZpZCBCYXUuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBwb29sLCBtYXRoKSB7XG4vL1xuLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudHMgYXJlIHJlbGF0ZWQgdG8gSUVFRSA3NTQgbGltaXRzLlxuLy9cblxudmFyIHdpZHRoID0gMjU2LCAgICAgICAgLy8gZWFjaCBSQzQgb3V0cHV0IGlzIDAgPD0geCA8IDI1NlxuICAgIGNodW5rcyA9IDYsICAgICAgICAgLy8gYXQgbGVhc3Qgc2l4IFJDNCBvdXRwdXRzIGZvciBlYWNoIGRvdWJsZVxuICAgIGRpZ2l0cyA9IDUyLCAgICAgICAgLy8gdGhlcmUgYXJlIDUyIHNpZ25pZmljYW50IGRpZ2l0cyBpbiBhIGRvdWJsZVxuICAgIHJuZ25hbWUgPSAncmFuZG9tJywgLy8gcm5nbmFtZTogbmFtZSBmb3IgTWF0aC5yYW5kb20gYW5kIE1hdGguc2VlZHJhbmRvbVxuICAgIHN0YXJ0ZGVub20gPSBtYXRoLnBvdyh3aWR0aCwgY2h1bmtzKSxcbiAgICBzaWduaWZpY2FuY2UgPSBtYXRoLnBvdygyLCBkaWdpdHMpLFxuICAgIG92ZXJmbG93ID0gc2lnbmlmaWNhbmNlICogMixcbiAgICBtYXNrID0gd2lkdGggLSAxLFxuICAgIG5vZGVjcnlwdG87ICAgICAgICAgLy8gbm9kZS5qcyBjcnlwdG8gbW9kdWxlLCBpbml0aWFsaXplZCBhdCB0aGUgYm90dG9tLlxuXG4vL1xuLy8gc2VlZHJhbmRvbSgpXG4vLyBUaGlzIGlzIHRoZSBzZWVkcmFuZG9tIGZ1bmN0aW9uIGRlc2NyaWJlZCBhYm92ZS5cbi8vXG5mdW5jdGlvbiBzZWVkcmFuZG9tKHNlZWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBrZXkgPSBbXTtcbiAgb3B0aW9ucyA9IChvcHRpb25zID09IHRydWUpID8geyBlbnRyb3B5OiB0cnVlIH0gOiAob3B0aW9ucyB8fCB7fSk7XG5cbiAgLy8gRmxhdHRlbiB0aGUgc2VlZCBzdHJpbmcgb3IgYnVpbGQgb25lIGZyb20gbG9jYWwgZW50cm9weSBpZiBuZWVkZWQuXG4gIHZhciBzaG9ydHNlZWQgPSBtaXhrZXkoZmxhdHRlbihcbiAgICBvcHRpb25zLmVudHJvcHkgPyBbc2VlZCwgdG9zdHJpbmcocG9vbCldIDpcbiAgICAoc2VlZCA9PSBudWxsKSA/IGF1dG9zZWVkKCkgOiBzZWVkLCAzKSwga2V5KTtcblxuICAvLyBVc2UgdGhlIHNlZWQgdG8gaW5pdGlhbGl6ZSBhbiBBUkM0IGdlbmVyYXRvci5cbiAgdmFyIGFyYzQgPSBuZXcgQVJDNChrZXkpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHJhbmRvbSBkb3VibGUgaW4gWzAsIDEpIHRoYXQgY29udGFpbnNcbiAgLy8gcmFuZG9tbmVzcyBpbiBldmVyeSBiaXQgb2YgdGhlIG1hbnRpc3NhIG9mIHRoZSBJRUVFIDc1NCB2YWx1ZS5cbiAgdmFyIHBybmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IGFyYzQuZyhjaHVua3MpLCAgICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgbnVtZXJhdG9yIG4gPCAyIF4gNDhcbiAgICAgICAgZCA9IHN0YXJ0ZGVub20sICAgICAgICAgICAgICAgICAvLyAgIGFuZCBkZW5vbWluYXRvciBkID0gMiBeIDQ4LlxuICAgICAgICB4ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYW5kIG5vICdleHRyYSBsYXN0IGJ5dGUnLlxuICAgIHdoaWxlIChuIDwgc2lnbmlmaWNhbmNlKSB7ICAgICAgICAgIC8vIEZpbGwgdXAgYWxsIHNpZ25pZmljYW50IGRpZ2l0cyBieVxuICAgICAgbiA9IChuICsgeCkgKiB3aWR0aDsgICAgICAgICAgICAgIC8vICAgc2hpZnRpbmcgbnVtZXJhdG9yIGFuZFxuICAgICAgZCAqPSB3aWR0aDsgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZGVub21pbmF0b3IgYW5kIGdlbmVyYXRpbmcgYVxuICAgICAgeCA9IGFyYzQuZygxKTsgICAgICAgICAgICAgICAgICAgIC8vICAgbmV3IGxlYXN0LXNpZ25pZmljYW50LWJ5dGUuXG4gICAgfVxuICAgIHdoaWxlIChuID49IG92ZXJmbG93KSB7ICAgICAgICAgICAgIC8vIFRvIGF2b2lkIHJvdW5kaW5nIHVwLCBiZWZvcmUgYWRkaW5nXG4gICAgICBuIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBsYXN0IGJ5dGUsIHNoaWZ0IGV2ZXJ5dGhpbmdcbiAgICAgIGQgLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJpZ2h0IHVzaW5nIGludGVnZXIgbWF0aCB1bnRpbFxuICAgICAgeCA+Pj49IDE7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2UgaGF2ZSBleGFjdGx5IHRoZSBkZXNpcmVkIGJpdHMuXG4gICAgfVxuICAgIHJldHVybiAobiArIHgpIC8gZDsgICAgICAgICAgICAgICAgIC8vIEZvcm0gdGhlIG51bWJlciB3aXRoaW4gWzAsIDEpLlxuICB9O1xuXG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSB8IDA7IH1cbiAgcHJuZy5xdWljayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIC8gMHgxMDAwMDAwMDA7IH1cbiAgcHJuZy5kb3VibGUgPSBwcm5nO1xuXG4gIC8vIE1peCB0aGUgcmFuZG9tbmVzcyBpbnRvIGFjY3VtdWxhdGVkIGVudHJvcHkuXG4gIG1peGtleSh0b3N0cmluZyhhcmM0LlMpLCBwb29sKTtcblxuICAvLyBDYWxsaW5nIGNvbnZlbnRpb246IHdoYXQgdG8gcmV0dXJuIGFzIGEgZnVuY3Rpb24gb2YgcHJuZywgc2VlZCwgaXNfbWF0aC5cbiAgcmV0dXJuIChvcHRpb25zLnBhc3MgfHwgY2FsbGJhY2sgfHxcbiAgICAgIGZ1bmN0aW9uKHBybmcsIHNlZWQsIGlzX21hdGhfY2FsbCwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgLy8gTG9hZCB0aGUgYXJjNCBzdGF0ZSBmcm9tIHRoZSBnaXZlbiBzdGF0ZSBpZiBpdCBoYXMgYW4gUyBhcnJheS5cbiAgICAgICAgICBpZiAoc3RhdGUuUykgeyBjb3B5KHN0YXRlLCBhcmM0KTsgfVxuICAgICAgICAgIC8vIE9ubHkgcHJvdmlkZSB0aGUgLnN0YXRlIG1ldGhvZCBpZiByZXF1ZXN0ZWQgdmlhIG9wdGlvbnMuc3RhdGUuXG4gICAgICAgICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weShhcmM0LCB7fSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGNhbGxlZCBhcyBhIG1ldGhvZCBvZiBNYXRoIChNYXRoLnNlZWRyYW5kb20oKSksIG11dGF0ZVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSBiZWNhdXNlIHRoYXQgaXMgaG93IHNlZWRyYW5kb20uanMgaGFzIHdvcmtlZCBzaW5jZSB2MS4wLlxuICAgICAgICBpZiAoaXNfbWF0aF9jYWxsKSB7IG1hdGhbcm5nbmFtZV0gPSBwcm5nOyByZXR1cm4gc2VlZDsgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgaXQgaXMgYSBuZXdlciBjYWxsaW5nIGNvbnZlbnRpb24sIHNvIHJldHVybiB0aGVcbiAgICAgICAgLy8gcHJuZyBkaXJlY3RseS5cbiAgICAgICAgZWxzZSByZXR1cm4gcHJuZztcbiAgICAgIH0pKFxuICBwcm5nLFxuICBzaG9ydHNlZWQsXG4gICdnbG9iYWwnIGluIG9wdGlvbnMgPyBvcHRpb25zLmdsb2JhbCA6ICh0aGlzID09IG1hdGgpLFxuICBvcHRpb25zLnN0YXRlKTtcbn1cblxuLy9cbi8vIEFSQzRcbi8vXG4vLyBBbiBBUkM0IGltcGxlbWVudGF0aW9uLiAgVGhlIGNvbnN0cnVjdG9yIHRha2VzIGEga2V5IGluIHRoZSBmb3JtIG9mXG4vLyBhbiBhcnJheSBvZiBhdCBtb3N0ICh3aWR0aCkgaW50ZWdlcnMgdGhhdCBzaG91bGQgYmUgMCA8PSB4IDwgKHdpZHRoKS5cbi8vXG4vLyBUaGUgZyhjb3VudCkgbWV0aG9kIHJldHVybnMgYSBwc2V1ZG9yYW5kb20gaW50ZWdlciB0aGF0IGNvbmNhdGVuYXRlc1xuLy8gdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGZyb20gQVJDNC4gIEl0cyByZXR1cm4gdmFsdWUgaXMgYSBudW1iZXIgeFxuLy8gdGhhdCBpcyBpbiB0aGUgcmFuZ2UgMCA8PSB4IDwgKHdpZHRoIF4gY291bnQpLlxuLy9cbmZ1bmN0aW9uIEFSQzQoa2V5KSB7XG4gIHZhciB0LCBrZXlsZW4gPSBrZXkubGVuZ3RoLFxuICAgICAgbWUgPSB0aGlzLCBpID0gMCwgaiA9IG1lLmkgPSBtZS5qID0gMCwgcyA9IG1lLlMgPSBbXTtcblxuICAvLyBUaGUgZW1wdHkga2V5IFtdIGlzIHRyZWF0ZWQgYXMgWzBdLlxuICBpZiAoIWtleWxlbikgeyBrZXkgPSBba2V5bGVuKytdOyB9XG5cbiAgLy8gU2V0IHVwIFMgdXNpbmcgdGhlIHN0YW5kYXJkIGtleSBzY2hlZHVsaW5nIGFsZ29yaXRobS5cbiAgd2hpbGUgKGkgPCB3aWR0aCkge1xuICAgIHNbaV0gPSBpKys7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzW2ldID0gc1tqID0gbWFzayAmIChqICsga2V5W2kgJSBrZXlsZW5dICsgKHQgPSBzW2ldKSldO1xuICAgIHNbal0gPSB0O1xuICB9XG5cbiAgLy8gVGhlIFwiZ1wiIG1ldGhvZCByZXR1cm5zIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBhcyBvbmUgbnVtYmVyLlxuICAobWUuZyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgLy8gVXNpbmcgaW5zdGFuY2UgbWVtYmVycyBpbnN0ZWFkIG9mIGNsb3N1cmUgc3RhdGUgbmVhcmx5IGRvdWJsZXMgc3BlZWQuXG4gICAgdmFyIHQsIHIgPSAwLFxuICAgICAgICBpID0gbWUuaSwgaiA9IG1lLmosIHMgPSBtZS5TO1xuICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICB0ID0gc1tpID0gbWFzayAmIChpICsgMSldO1xuICAgICAgciA9IHIgKiB3aWR0aCArIHNbbWFzayAmICgoc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIHQpXSkgKyAoc1tqXSA9IHQpKV07XG4gICAgfVxuICAgIG1lLmkgPSBpOyBtZS5qID0gajtcbiAgICByZXR1cm4gcjtcbiAgICAvLyBGb3Igcm9idXN0IHVucHJlZGljdGFiaWxpdHksIHRoZSBmdW5jdGlvbiBjYWxsIGJlbG93IGF1dG9tYXRpY2FsbHlcbiAgICAvLyBkaXNjYXJkcyBhbiBpbml0aWFsIGJhdGNoIG9mIHZhbHVlcy4gIFRoaXMgaXMgY2FsbGVkIFJDNC1kcm9wWzI1Nl0uXG4gICAgLy8gU2VlIGh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXJzYStmbHVocmVyK3Jlc3BvbnNlJmJ0bklcbiAgfSkod2lkdGgpO1xufVxuXG4vL1xuLy8gY29weSgpXG4vLyBDb3BpZXMgaW50ZXJuYWwgc3RhdGUgb2YgQVJDNCB0byBvciBmcm9tIGEgcGxhaW4gb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQuaiA9IGYuajtcbiAgdC5TID0gZi5TLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuLy9cbi8vIGZsYXR0ZW4oKVxuLy8gQ29udmVydHMgYW4gb2JqZWN0IHRyZWUgdG8gbmVzdGVkIGFycmF5cyBvZiBzdHJpbmdzLlxuLy9cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqLCBkZXB0aCkge1xuICB2YXIgcmVzdWx0ID0gW10sIHR5cCA9ICh0eXBlb2Ygb2JqKSwgcHJvcDtcbiAgaWYgKGRlcHRoICYmIHR5cCA9PSAnb2JqZWN0Jykge1xuICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgIHRyeSB7IHJlc3VsdC5wdXNoKGZsYXR0ZW4ob2JqW3Byb3BdLCBkZXB0aCAtIDEpKTsgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChyZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogdHlwID09ICdzdHJpbmcnID8gb2JqIDogb2JqICsgJ1xcMCcpO1xufVxuXG4vL1xuLy8gbWl4a2V5KClcbi8vIE1peGVzIGEgc3RyaW5nIHNlZWQgaW50byBhIGtleSB0aGF0IGlzIGFuIGFycmF5IG9mIGludGVnZXJzLCBhbmRcbi8vIHJldHVybnMgYSBzaG9ydGVuZWQgc3RyaW5nIHNlZWQgdGhhdCBpcyBlcXVpdmFsZW50IHRvIHRoZSByZXN1bHQga2V5LlxuLy9cbmZ1bmN0aW9uIG1peGtleShzZWVkLCBrZXkpIHtcbiAgdmFyIHN0cmluZ3NlZWQgPSBzZWVkICsgJycsIHNtZWFyLCBqID0gMDtcbiAgd2hpbGUgKGogPCBzdHJpbmdzZWVkLmxlbmd0aCkge1xuICAgIGtleVttYXNrICYgal0gPVxuICAgICAgbWFzayAmICgoc21lYXIgXj0ga2V5W21hc2sgJiBqXSAqIDE5KSArIHN0cmluZ3NlZWQuY2hhckNvZGVBdChqKyspKTtcbiAgfVxuICByZXR1cm4gdG9zdHJpbmcoa2V5KTtcbn1cblxuLy9cbi8vIGF1dG9zZWVkKClcbi8vIFJldHVybnMgYW4gb2JqZWN0IGZvciBhdXRvc2VlZGluZywgdXNpbmcgd2luZG93LmNyeXB0byBhbmQgTm9kZSBjcnlwdG9cbi8vIG1vZHVsZSBpZiBhdmFpbGFibGUuXG4vL1xuZnVuY3Rpb24gYXV0b3NlZWQoKSB7XG4gIHRyeSB7XG4gICAgdmFyIG91dDtcbiAgICBpZiAobm9kZWNyeXB0byAmJiAob3V0ID0gbm9kZWNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgIC8vIFRoZSB1c2Ugb2YgJ291dCcgdG8gcmVtZW1iZXIgcmFuZG9tQnl0ZXMgbWFrZXMgdGlnaHQgbWluaWZpZWQgY29kZS5cbiAgICAgIG91dCA9IG91dCh3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCA9IG5ldyBVaW50OEFycmF5KHdpZHRoKTtcbiAgICAgIChnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bykuZ2V0UmFuZG9tVmFsdWVzKG91dCk7XG4gICAgfVxuICAgIHJldHVybiB0b3N0cmluZyhvdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGJyb3dzZXIgPSBnbG9iYWwubmF2aWdhdG9yLFxuICAgICAgICBwbHVnaW5zID0gYnJvd3NlciAmJiBicm93c2VyLnBsdWdpbnM7XG4gICAgcmV0dXJuIFsrbmV3IERhdGUsIGdsb2JhbCwgcGx1Z2lucywgZ2xvYmFsLnNjcmVlbiwgdG9zdHJpbmcocG9vbCldO1xuICB9XG59XG5cbi8vXG4vLyB0b3N0cmluZygpXG4vLyBDb252ZXJ0cyBhbiBhcnJheSBvZiBjaGFyY29kZXMgdG8gYSBzdHJpbmdcbi8vXG5mdW5jdGlvbiB0b3N0cmluZyhhKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KDAsIGEpO1xufVxuXG4vL1xuLy8gV2hlbiBzZWVkcmFuZG9tLmpzIGlzIGxvYWRlZCwgd2UgaW1tZWRpYXRlbHkgbWl4IGEgZmV3IGJpdHNcbi8vIGZyb20gdGhlIGJ1aWx0LWluIFJORyBpbnRvIHRoZSBlbnRyb3B5IHBvb2wuICBCZWNhdXNlIHdlIGRvXG4vLyBub3Qgd2FudCB0byBpbnRlcmZlcmUgd2l0aCBkZXRlcm1pbmlzdGljIFBSTkcgc3RhdGUgbGF0ZXIsXG4vLyBzZWVkcmFuZG9tIHdpbGwgbm90IGNhbGwgbWF0aC5yYW5kb20gb24gaXRzIG93biBhZ2FpbiBhZnRlclxuLy8gaW5pdGlhbGl6YXRpb24uXG4vL1xubWl4a2V5KG1hdGgucmFuZG9tKCksIHBvb2wpO1xuXG4vL1xuLy8gTm9kZWpzIGFuZCBBTUQgc3VwcG9ydDogZXhwb3J0IHRoZSBpbXBsZW1lbnRhdGlvbiBhcyBhIG1vZHVsZSB1c2luZ1xuLy8gZWl0aGVyIGNvbnZlbnRpb24uXG4vL1xuaWYgKCh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlZWRyYW5kb207XG4gIC8vIFdoZW4gaW4gbm9kZS5qcywgdHJ5IHVzaW5nIGNyeXB0byBwYWNrYWdlIGZvciBhdXRvc2VlZGluZy5cbiAgdHJ5IHtcbiAgICBub2RlY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gIH0gY2F0Y2ggKGV4KSB7fVxufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIHNlZWRyYW5kb207IH0pO1xufSBlbHNlIHtcbiAgLy8gV2hlbiBpbmNsdWRlZCBhcyBhIHBsYWluIHNjcmlwdCwgc2V0IHVwIE1hdGguc2VlZHJhbmRvbSBnbG9iYWwuXG4gIG1hdGhbJ3NlZWQnICsgcm5nbmFtZV0gPSBzZWVkcmFuZG9tO1xufVxuXG5cbi8vIEVuZCBhbm9ueW1vdXMgc2NvcGUsIGFuZCBwYXNzIGluaXRpYWwgdmFsdWVzLlxufSkoXG4gIC8vIGdsb2JhbDogYHNlbGZgIGluIGJyb3dzZXJzIChpbmNsdWRpbmcgc3RyaWN0IG1vZGUgYW5kIHdlYiB3b3JrZXJzKSxcbiAgLy8gb3RoZXJ3aXNlIGB0aGlzYCBpbiBOb2RlIGFuZCBvdGhlciBlbnZpcm9ubWVudHNcbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogdGhpcyxcbiAgW10sICAgICAvLyBwb29sOiBlbnRyb3B5IHBvb2wgc3RhcnRzIGVtcHR5XG4gIE1hdGggICAgLy8gbWF0aDogcGFja2FnZSBjb250YWluaW5nIHJhbmRvbSwgcG93LCBhbmQgc2VlZHJhbmRvbVxuKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW5Gb3JtKHRpdGxlLCBjdHIsIHRvRWRpdCkge1xuICBjb25zdCBhZGROZXcgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYWRkLW5ld1wiLCBjdHIsIFwiXCIsIFtbXCJpZFwiLCBcImFkZC1uZXdcIl1dKTtcbiAgY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaDEtbmV3XCIsIGFkZE5ldywgdGl0bGUpO1xuICBjb25zdCBmb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJmb3JtXCIsIGFkZE5ldyk7XG4gIGNvbnN0IGNsb3NlQ3RyID0gcmVuZGVyQ2xvc2VCdG4oZm9ybSk7XG4gIGNvbnN0IHRpdGxlQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tY3RyXCIsIGZvcm0pO1xuICBjb25zdCBkZXNjQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tY3RyXCIsIGZvcm0pO1xuICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgdGl0bGVDdHIsIFwiVGl0bGVcIiwgW1tcImZvclwiLCBcImlucHV0VGl0bGVcIl1dKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJpbnB1dFwiLCB0aXRsZUN0ciwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgXCJpbnB1dFRpdGxlXCJdLFxuICAgICAgW1widHlwZVwiLCBcInRleHRcIl0sXG4gICAgICBbXCJyZXF1aXJlZFwiLCBcIlwiXSxcbiAgICAgIFtcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAodGl0bGUgPSBcIlRhc2tcIiA/IFwiRG8gdGhlIGdyb2Nlcnkgc2hvcFwiIDogXCJIb3VzZSByZW5vdmF0aW9uXCIpLFxuICAgICAgXSxcbiAgICAgIFtcIm1heGxlbmd0aFwiLCBcIjUwXCJdLFxuICAgICAgW1widmFsdWVcIiwgdG9FZGl0ID8gdG9FZGl0LnRpdGxlIDogXCJcIl0sXG4gICAgXSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBkZXNjQ3RyLCBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIiwgW1xuICAgIFtcImZvclwiLCBcImlucHV0RGVzY1wiXSxcbiAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwidGV4dGFyZWFcIixcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIGRlc2NDdHIsXG4gICAgICB0b0VkaXQgPyB0b0VkaXQuZGVzY3JpcHRpb24gOiBcIlwiLFxuICAgICAgW1xuICAgICAgICBbXCJpZFwiLCBcImlucHV0RGVzY1wiXSxcbiAgICAgICAgW1wicm93c1wiLCBcIjJcIl0sXG4gICAgICAgIFtcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgKHRpdGxlID0gXCJUYXNrXCJcbiAgICAgICAgICAgID8gXCJFZ2dzLCBtaWxrLCBjZXJlYWwsIGJyZWFkLCBiYW5hbmFzXCJcbiAgICAgICAgICAgIDogXCJUYXNrcyBmb3IgcHJvamVjdCBraWNrLW9mZlwiKSxcbiAgICAgICAgXSxcbiAgICAgICAgW1wibWF4bGVuZ3RoXCIsIFwiMjUwXCJdLFxuICAgICAgXVxuICAgICk7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3Q3RyKCkge1xuICBjb25zdCB2aWV3Q3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3LWN0clwiKTtcbiAgcmV0dXJuIHZpZXdDdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDbG9zZUJ0bihjdHIpIHtcbiAgY29uc3QgY2xvc2VCdG5DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY2xvc2UtY3RyXCIsIGN0cik7XG4gIGNvbnN0IGNsb3NlQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcImNsb3NlLWJ0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEteG1hcmtcIl0sXG4gICAgY2xvc2VCdG5DdHIsXG4gICAgXCJcIixcbiAgICBbW1wiaWRcIiwgXCJjbG9zZS1idG5cIl1dXG4gICk7XG4gIHJldHVybiBjbG9zZUJ0bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN1Ym1pdChjdHIpIHtcbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInN1Ym1pdEJ0blwiLCBjdHIsIFwiU3VibWl0XCIsIFtcbiAgICBbXCJpZFwiLCBcInN1Ym1pdFRhc2tCdG5cIl0sXG4gICAgW1widHlwZVwiLCBcInN1Ym1pdFwiXSxcbiAgXSk7XG4gIHJldHVybiBzdWJtaXRCdG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZWxldGUoY3RyKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkZWxldGVCdG5cIiwgY3RyLCBcIkRlbGV0ZSBpdFwiLCBbXG4gICAgW1wiaWRcIiwgXCJkZWxldGVCdG5cIl0sXG4gIF0pO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufVxuIiwiaW1wb3J0IHJlbmRlck1haW5Gb3JtLCB7XG4gIGdldFZpZXdDdHIsXG4gIHJlbmRlckRlbGV0ZSxcbiAgcmVuZGVyU3VibWl0LFxufSBmcm9tIFwiLi9hZGROZXdcIjtcbmltcG9ydCBjcmVhdGVMaXN0LCB7IGxvYWRMaXN0c0Zyb21TdG9yYWdlLCBkZWxldGVMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGNsZWFyVmlld0N0ciBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgYWRkTGlzdEV2ZW50TGlzIH0gZnJvbSBcIi4vYWxsTGlzdHNVSVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IFwiZW1vamktcGlja2VyLWVsZW1lbnRcIjtcblxubGV0IGVkaXRlZCA9IGZhbHNlO1xubGV0IGVkaXRlZEluZGV4O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTGlzdEZvcm0obGlzdFRvRWRpdCkge1xuICBjb25zdCB2aWV3Q3RyID0gZ2V0Vmlld0N0cigpO1xuICBjb25zdCBtYWluRm9ybSA9IHJlbmRlck1haW5Gb3JtKFwiTGlzdFwiLCB2aWV3Q3RyLCBsaXN0VG9FZGl0KTtcbiAgY29uc3QgaWNvbkN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjaG9vc2UtaWNvbi1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBpY29uQnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImljb24tYnRuXCIsIGljb25DdHIsIFwiQWRkIGljb25cIiwgW1xuICAgIFtcImlkXCIsIFwiaWNvbi1idG5cIl0sXG4gIF0pO1xuICBjb25zdCBzZWxlY3RlZEVtb2ppID0gcmVuZGVyU2VsZWN0ZWRFbW9qaShpY29uQ3RyKTtcbiAgY29uc3QgZW1vamlQaWNrZXIgPSByZW5kZXJFbW9qaVBpY2tlcihtYWluRm9ybSwgc2VsZWN0ZWRFbW9qaSk7XG4gIGNvbnN0IGJ1dHRvbkN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJidXR0b24tY3RyXCIsIG1haW5Gb3JtKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gcmVuZGVyU3VibWl0KGJ1dHRvbkN0cik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IHJlbmRlckRlbGV0ZShidXR0b25DdHIpO1xuICBpY29uQnRuRUwoaWNvbkJ0biwgZW1vamlQaWNrZXIpO1xuICBzdWJtaXRMaXN0RUwoc3VibWl0QnRuKTtcbiAgZGVsZXRlTGlzdEVMKGRlbGV0ZUJ0bik7XG4gIGNsb3NlTGlzdEVMKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGVkRW1vamkobWFpbkZvcm0pIHtcbiAgLy8gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwic2VsZWN0LWVtb2ppXCIsIG1haW5Gb3JtLCBcIkxpc3QgSWNvblwiLCBbXG4gIC8vICAgW1wiZm9yXCIsIFwic2VsZWN0ZWQtZW1vamlcIl0sXG4gIC8vIF0pO1xuICBjb25zdCBzZWxlY3RlZEVtb2ppID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwic2VsZWN0ZWQtZW1vamlcIiwgbWFpbkZvcm0sIFwiXCIsIFtcbiAgICBbXCJpZFwiLCBcInNlbGVjdGVkLWVtb2ppXCJdLFxuICAgIFtcInRpdGxlXCIsIFwiVmlldyBMaXN0XCJdLFxuICBdKTtcblxuICByZXR1cm4gc2VsZWN0ZWRFbW9qaTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRW1vamlQaWNrZXIobWFpbkZvcm0sIHNlbGVjdGVkRW1vamkpIHtcbiAgY29uc3QgZW1vamlQaWNrZXIgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZW1vamktcGlja2VyXCIsXG4gICAgW1wiZW1vamktcGlja2VyXCIsIFwiaGlkZGVuXCJdLFxuICAgIG1haW5Gb3JtXG4gICk7XG4gIGVtb2ppUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbW9qaS1jbGlja1wiLCAoZSkgPT4ge1xuICAgIHNlbGVjdGVkRW1vamkudmFsdWUgPSBlLmRldGFpbC51bmljb2RlO1xuICAgIGVtb2ppUGlja2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICByZXR1cm4gZW1vamlQaWNrZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0ZWRMaXN0TG9nKGluZGV4KSB7XG4gIGVkaXRlZEluZGV4ID0gaW5kZXg7XG4gIGVkaXRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGljb25CdG5FTChpY29uQnRuLCBlbW9qaVBpY2tlcikge1xuICBpY29uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbW9qaVBpY2tlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdEVMKGRlbGV0ZUJ0bikge1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlZGl0ZWQpIHtcbiAgICAgIGRlbGV0ZUxpc3QoZWRpdGVkSW5kZXgpO1xuICAgIH1cbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBsb2FkTGlzdHNGcm9tU3RvcmFnZSgpO1xuICAgIGFkZExpc3RFdmVudExpcygpO1xuICAgIGVkaXRlZCA9IGZhbHNlO1xuICAgIGVkaXRlZEluZGV4ID0gbnVsbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTGlzdEVMKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBsb2FkTGlzdHNGcm9tU3RvcmFnZSgpO1xuICAgIGVkaXRlZCA9IGZhbHNlO1xuICAgIGVkaXRlZEluZGV4ID0gbnVsbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdExpc3RFTChzdWJtaXRMaXN0QnRuKSB7XG4gIHN1Ym1pdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlZGl0ZWQpIHtcbiAgICAgIGRlbGV0ZUxpc3QoZWRpdGVkSW5kZXgpO1xuICAgIH1cbiAgICBjcmVhdGVMaXN0KFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRpdGxlXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERlc2NcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkLWVtb2ppXCIpLnZhbHVlXG4gICAgKTtcbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBsb2FkTGlzdHNGcm9tU3RvcmFnZSgpO1xuICAgIGFkZExpc3RFdmVudExpcygpO1xuICAgIGVkaXRlZCA9IGZhbHNlO1xuICAgIGVkaXRlZEluZGV4ID0gbnVsbDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgcmVuZGVyTWFpbkZvcm0sIHtcbiAgZ2V0Vmlld0N0cixcbiAgcmVuZGVyRGVsZXRlLFxuICByZW5kZXJTdWJtaXQsXG59IGZyb20gXCIuL2FkZE5ld1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZVRhc2ssIHsgZGVsZXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgY2xlYXJWaWV3Q3RyIGZyb20gXCIuXCI7XG5pbXBvcnQgeyBsb2FkVGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhZGRUYXNrRXZlbnRMaXMgfSBmcm9tIFwiLi9saXN0VUlcIjtcbmltcG9ydCB7IGdldFN0b3JlZExpc3RzIH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5sZXQgZWRpdGVkID0gZmFsc2U7XG5sZXQgZWRpdGVkSW5kZXg7XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0ZWRMb2coaW5kZXgpIHtcbiAgZWRpdGVkSW5kZXggPSBpbmRleDtcbiAgZWRpdGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRm9ybURhdGUoY3RyLCB0b0VkaXQpIHtcbiAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwidGV4dElucHV0XCIsIGN0ciwgXCJEdWUgRGF0ZVwiLCBbXG4gICAgW1wiZm9yXCIsIFwiaW5wdXRUYXNrRGF0ZVwiXSxcbiAgXSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImlucHV0XCIsIGN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiaW5wdXRUYXNrRGF0ZVwiXSxcbiAgICBbXCJ0eXBlXCIsIFwiZGF0ZVwiXSxcbiAgICBbXCJyZXF1aXJlZFwiLCBcIlwiXSxcbiAgICBbXCJ2YWx1ZVwiLCB0b0VkaXQgPyB0b0VkaXQuZHVlRGF0ZSA6IFwiXCJdLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJpb3JpdHlTdGF0dXMoY3RyLCB0b0VkaXQpIHtcbiAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIGN0ciwgXCJIaWdoIHByaW9yaXR5XCIsIFtcbiAgICBbXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlUYXNrXCJdLFxuICBdKTtcbiAgY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiaGlnaFByaW9yaXR5XCIsIGN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiaGlnaFByaW9yaXR5VGFza1wiXSxcbiAgICBbXCJ0eXBlXCIsIFwiY2hlY2tib3hcIl0sXG4gICAgW1wiY2hlY2tlZFwiLCB0b0VkaXQgPyB0b0VkaXQucHJpb3JpdHkgOiBmYWxzZV0sXG4gIF0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEcm9wRG93bihjdHIpIHtcbiAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIGN0ciwgXCJMaXN0KHMpXCIsIFtbXCJmb3JcIiwgXCJkcm9wZG93bkxpc3RcIl1dKTtcbiAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcImlucHV0XCIsIGN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiZHJvcGRvd25MaXN0XCJdLFxuICAgIFtcImxpc3RcIiwgXCJsaXN0T2ZMaXN0c1wiXSxcbiAgXSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgbnVsbCwgc2VsZWN0LCBcIkFsbCB0YXNrc1wiLCBbXG4gICAgW1widmFsdWVcIiwgXCJBbGwgdGFza3NcIl0sXG4gICAgW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgMF0sXG4gICAgW1wiZGlzYWJsZWRcIl0sXG4gICAgW1wic2VsZWN0ZWRcIl0sXG4gIF0pO1xuICBjb25zdCBsaXN0QXJyYXkgPSBnZXRMaXN0T3B0aW9ucygpO1xuICByZW5kZXJMaXN0T3B0aW9ucyhzZWxlY3QsIGxpc3RBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGdldExpc3RPcHRpb25zKCkge1xuICBjb25zdCBsaXN0QXJyYXkgPSBnZXRTdG9yZWRMaXN0cygpO1xuICBsaXN0QXJyYXkuc3BsaWNlKDAsIDEpO1xuICByZXR1cm4gbGlzdEFycmF5O1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0T3B0aW9ucyhzZWxlY3QsIGxpc3RBcnJheSkge1xuICBsZXQgaSA9IDE7XG4gIGxpc3RBcnJheS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCBzZWxlY3QsIGxpc3QudGl0bGUsIFtcbiAgICAgIFtcInZhbHVlXCIsIGxpc3QudGl0bGVdLFxuICAgICAgW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaV0sXG4gICAgXSk7XG4gICAgaSsrO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKHRhc2tUb0VkaXQpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGdldFZpZXdDdHIoKTtcbiAgY29uc3QgbWFpbkZvcm0gPSByZW5kZXJNYWluRm9ybShcIlRhc2tcIiwgdmlld0N0ciwgdGFza1RvRWRpdCk7XG4gIGNvbnN0IGRhdGVDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9ybS1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBwcmlvcml0eUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmlvcml0eS1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBsaXN0Q3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tY3RyXCIsIG1haW5Gb3JtKTtcbiAgcmVuZGVyRm9ybURhdGUoZGF0ZUN0ciwgdGFza1RvRWRpdCk7XG4gIHJlbmRlclByaW9yaXR5U3RhdHVzKHByaW9yaXR5Q3RyLCB0YXNrVG9FZGl0KTtcbiAgcmVuZGVyRHJvcERvd24obGlzdEN0cik7XG4gIGNvbnN0IGJ1dHRvbkN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJidXR0b24tY3RyXCIsIG1haW5Gb3JtKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gcmVuZGVyU3VibWl0KGJ1dHRvbkN0cik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IHJlbmRlckRlbGV0ZShidXR0b25DdHIpO1xuICBzdWJtaXRUYXNrRUwoc3VibWl0QnRuKTtcbiAgY2xvc2VGb3JtRUwoKTtcbiAgZGVsZXRlVGFza0VMKGRlbGV0ZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGdldEFzc2lnbmVkTGlzdHMoY2hvc2VuSW5kZXgpIHtcbiAgbGV0IGFzc2lnbmVkTGlzdHM7XG4gIGlmIChjaG9zZW5JbmRleCA9PT0gMCkge1xuICAgIGFzc2lnbmVkTGlzdHMgPSBjaG9zZW5JbmRleDtcbiAgfSBlbHNlIHtcbiAgICBhc3NpZ25lZExpc3RzID0gWzAsIGNob3NlbkluZGV4XTtcbiAgfVxuICByZXR1cm4gYXNzaWduZWRMaXN0cztcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza0VMKGRlbGV0ZVRhc2tCdG4pIHtcbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRlZCkge1xuICAgICAgZGVsZXRlVGFzayhlZGl0ZWRJbmRleCk7XG4gICAgfVxuICAgIGNsZWFyVmlld0N0cigpO1xuXG4gICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoMCk7XG4gICAgYWRkVGFza0V2ZW50TGlzKCk7XG4gICAgZWRpdGVkID0gZmFsc2U7XG4gICAgZWRpdGVkSW5kZXggPSBudWxsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtRUwoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRUYXNrc0Zyb21TdG9yYWdlKDApO1xuICAgIGFkZFRhc2tFdmVudExpcygpO1xuICAgIGVkaXRlZCA9IGZhbHNlO1xuICAgIGVkaXRlZEluZGV4ID0gbnVsbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2tFTChzdWJtaXRUYXNrQnRuKSB7XG4gIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlZGl0ZWQpIHtcbiAgICAgIGRlbGV0ZVRhc2soZWRpdGVkSW5kZXgpO1xuICAgIH1cbiAgICBjb25zdCBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25MaXN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBkcm9wRG93bi5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IGNob3NlbkluZGV4ID0gZHJvcERvd24ub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgIGNvbnN0IGFzc2lnbmVkTGlzdHMgPSBnZXRBc3NpZ25lZExpc3RzKGNob3NlbkluZGV4KTtcbiAgICBjcmVhdGVUYXNrKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRpdGxlXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERlc2NcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VGFza0RhdGVcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hQcmlvcml0eVRhc2tcIikuY2hlY2tlZCxcbiAgICAgIGFzc2lnbmVkTGlzdHMsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoY2hvc2VuSW5kZXgpO1xuICAgIGVkaXRlZCA9IGZhbHNlO1xuICAgIGVkaXRlZEluZGV4ID0gbnVsbDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY2xlYXJWaWV3Q3RyIGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJJdGVtRWRpdCwgcmVuZGVySXRlbVRleHQgfSBmcm9tIFwiLi9hcHBVSVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZWRpdGVkTGlzdExvZyB9IGZyb20gXCIuL2FkZE5ld0xpc3RcIjtcbmltcG9ydCB7IGdldExpc3REYXRhIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgcmVuZGVyTGlzdEZvcm0gfSBmcm9tIFwiLi9hZGROZXdMaXN0XCI7XG5pbXBvcnQgeyBkZWxldGVMaXN0LCBsb2FkTGlzdHNGcm9tU3RvcmFnZSB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGxvYWRUYXNrc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTGlzdChsaXN0LCBpKSB7XG4gIGNvbnN0IGxpc3RzQ3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1jdHJcIik7XG4gIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtcImxpc3QtaXRlbVwiLCBcIml0ZW0tY3RyXCJdLFxuICAgIGxpc3RzQ3RyLFxuICAgIFwiXCIsXG4gICAgW1tcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGAke2l9YF1dXG4gICk7XG4gIGNvbnN0IHRleHRDdHIgPSByZW5kZXJJdGVtVGV4dChsaXN0LCBsaXN0SXRlbSk7XG4gIGNvbnN0IGljb24gPSByZW5kZXJMaXN0SWNvbihsaXN0LCBsaXN0SXRlbSk7XG4gIGlmIChpICE9PSAwKSB7XG4gICAgY29uc3Qgdmlld0VkaXRCdG4gPSByZW5kZXJJdGVtRWRpdChsaXN0SXRlbSwgaSk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gcmVuZGVySXRlbURlbGV0ZShsaXN0SXRlbSwgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdEljb24obGlzdCwgY3RyKSB7XG4gIGNvbnN0IGljb25EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaWNvbi1kaXZcIiwgY3RyKTtcbiAgY29uc3QgbGlzdEljb24gPSBsaXN0Lmljb25cbiAgICA/IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJsaXN0LWljb24tYnRuXCIsIGljb25EaXYsIGxpc3QuaWNvbiwgW1xuICAgICAgICBbXCJpZFwiLCBcImxpc3QtaWNvblwiXSxcbiAgICAgIF0pXG4gICAgOiBudWxsO1xuICByZXR1cm4gaWNvbkRpdjtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdE9mTGlzdHNDdHIodmlld0N0cikge1xuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibGlzdHMtY3RyXCIsIHZpZXdDdHIsIFwiXCIsIFtbXCJpZFwiLCBcImxpc3RzLWN0clwiXV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsTGlzdHNWaWV3KCkge1xuICBjbGVhclZpZXdDdHIoKTtcbiAgY29uc3Qgdmlld0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1jdHJcIik7XG4gIGNvbnN0IGhlYWRpbmdDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGluZy1jdHJcIiwgdmlld0N0cik7XG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaDFcIiwgaGVhZGluZ0N0ciwgXCJBbGwgTGlzdHNcIik7XG4gIGNvbnN0IGRlc2MgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFwiZGVzY1wiLFxuICAgIGhlYWRpbmdDdHIsXG4gICAgXCJWaWV3IGFuZCBlZGl0IGFsbCBsaXN0c1wiXG4gICk7XG4gIGFkZExpc3RPZkxpc3RzQ3RyKHZpZXdDdHIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJdGVtRGVsZXRlKGN0ciwgaW5kZXgpIHtcbiAgY29uc3QgZGVsZXRlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRlbGV0ZS1kaXZcIiwgY3RyKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcImRlbGV0ZS1saXN0XCIsIFwiYnV0dG9uXCJdLFxuICAgIGRlbGV0ZURpdixcbiAgICBcIlwiLFxuICAgIFtbXCJkYXRhLWluZGV4LW51bWJlclwiLCBpbmRleF1dXG4gICk7XG4gIGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJpXCIsXG4gICAgW1wiZGVsZXRlLWxpc3QtaWNvblwiLCBcImZhLXNvbGlkXCIsIFwiZmEtdHJhc2hcIl0sXG5cbiAgICBkZWxldGVCdG4sXG4gICAgXCJcIixcbiAgICBbW1widGl0bGVcIiwgXCJEZWxldGUgbGlzdFwiXV1cbiAgKTtcbiAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RFdmVudExpcygpIHtcbiAgZWRpdExpc3RFTCgpO1xuICBkZWxldGVMaXN0RUwoKTtcbiAgb3Blbkxpc3RFTCgpO1xufVxuXG5mdW5jdGlvbiBlZGl0TGlzdEVMKCkge1xuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3Blbi1lZGl0XCIpO1xuICBlZGl0QnRucy5mb3JFYWNoKChlZGl0QnRuKSA9PiB7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlZGl0QnRuLmRhdGFzZXQuaW5kZXhOdW1iZXI7XG4gICAgICBjb25zdCBsaXN0VG9FZGl0ID0gZ2V0TGlzdERhdGEoaW5kZXgpO1xuICAgICAgZWRpdGVkTGlzdExvZyhpbmRleCk7XG4gICAgICBjbGVhclZpZXdDdHIoKTtcbiAgICAgIHJlbmRlckxpc3RGb3JtKGxpc3RUb0VkaXQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdEVMKCkge1xuICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtbGlzdFwiKTtcbiAgZGVsZXRlQnRucy5mb3JFYWNoKChkZWxldGVCdG4pID0+IHtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGRlbGV0ZUJ0bi5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgICAgZGVsZXRlTGlzdChpbmRleCk7XG4gICAgICBjbGVhclZpZXdDdHIoKTtcbiAgICAgIGxvYWRMaXN0c0Zyb21TdG9yYWdlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTGlzdEVMKCkge1xuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbVwiKTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZTtcbiAgICAgIGlmICh0YWdOYW1lICE9PSBcIklcIikge1xuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RJdGVtLmRhdGFzZXQuaW5kZXhOdW1iZXI7XG4gICAgICAgIGNsZWFyVmlld0N0cigpO1xuICAgICAgICBsb2FkVGFza3NGcm9tU3RvcmFnZShpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNsZWFyVmlld0N0ciBmcm9tIFwiLlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgbG9hZFRhc2tzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgbG9hZExpc3RzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgbG9hZFByb2ZpbGVGcm9tU3RvcmFnZSwge1xuICBsb2FkQXZhdGFyRnJvbVN0b3JhZ2UsXG4gIGxvYWROYW1lRnJvbVN0b3JhZ2UsXG4gIGdldEF2YXRhcixcbiAgZ2V0TmFtZSxcbn0gZnJvbSBcIi4vcHJvZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBcHBVSSgpIHtcbiAgcmVuZGVySGVhZGVyKCk7XG4gIHJlbmRlck5hdigpO1xuICByZW5kZXJWaWV3Q3RyKCk7XG4gIGFkZE5ld0J0bigpO1xuICBhZGRNZW51RXZlbnRMaXMoKTtcbn1cblxuY29uc3QgaWNvbkxpc3ROYXYgPSBbXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1saXN0XCJdLCB0ZXh0OiBcIkFsbCB0YXNrc1wiIH0sXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1zdGFyXCJdLCB0ZXh0OiBcIlRvZGF5XCIgfSxcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWZvbGRlci10cmVlXCJdLCB0ZXh0OiBcIkFsbCBMaXN0c1wiIH0sXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS11c2VyXCJdLCB0ZXh0OiBcIlByb2ZpbGVcIiB9LFxuXTtcblxuZnVuY3Rpb24gZ2V0SWNvbk1lbnUobWVudURpdikge1xuICBsZXQgaSA9IDA7XG4gIGljb25MaXN0TmF2LmZvckVhY2goKGljb24pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbURpdlwiLCBtZW51RGl2LCBcIlwiLCBbXG4gICAgICBbXCJpZFwiLCBgbWVudUl0ZW0ke2l9YF0sXG4gICAgICBbXCJkYXRhLWluZGV4LW51bWJlclwiLCBgJHtpfWBdLFxuICAgIF0pO1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJpXCIsIGljb24uY2xhc3NlcywgbWVudUl0ZW1EaXYpO1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiLCBcIm1lbnVUZXh0XCIsIG1lbnVJdGVtRGl2LCBpY29uLnRleHQpO1xuICAgIGkrKztcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUl0ZW0wXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5hdigpIHtcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBudWxsLCBjb250ZW50KTtcbiAgY29uc3QgbWVudURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51RGl2XCIsIG5hdik7XG4gIGdldEljb25NZW51KG1lbnVEaXYpO1xuICBjcmVhdGVFbGVtZW50KFwiaDNcIiwgXCJsb2dvXCIsIG5hdiwgXCJBYnNvbGlzdGx5XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIGNvbnRlbnQpO1xuICBjb25zdCBsb2dvQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvZ28tY3RyXCIsIGhlYWRlcik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBcImxvZ29cIiwgbG9nb0N0ciwgXCJBYnNvbGlzdGx5XCIpO1xuICBjb25zdCBoZWFkZXJQcm9maWxlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1wcm9maWxlXCIsIGhlYWRlcik7XG4gIGxldCB1c2VyTmFtZSA9IGxvYWROYW1lRnJvbVN0b3JhZ2UoKTtcbiAgbGV0IGF2YXRhciA9IGxvYWRBdmF0YXJGcm9tU3RvcmFnZSgpO1xuICB1c2VyTmFtZSA9IGdldE5hbWUodXNlck5hbWUpO1xuICBhdmF0YXIgPSBnZXRBdmF0YXIoYXZhdGFyKTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJ1c2VyLW5hbWUtaGVhZGVyXCIsIGhlYWRlclByb2ZpbGUsIGBIZWxsbywgJHt1c2VyTmFtZX0uYCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJhdmF0YXItaGVhZGVyXCIsIGhlYWRlclByb2ZpbGUsIFwiXCIsIFtbXCJzcmNcIiwgYXZhdGFyXV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVmlld0N0cigpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ2aWV3LWN0clwiLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJ2aWV3LWN0clwiXSxcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrQ3RycygpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1jdHJcIik7XG4gIGNvbnN0IHRvZG9Eb25lQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRvZG8tZG9uZS1jdHJcIiwgdmlld0N0cik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWN0clwiLCB0b2RvRG9uZUN0ciwgXCJcIiwgW1tcImlkXCIsIFwidG9kby1jdHJcIl1dKTtcbiAgY29uc3QgZG9uZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkb25lLWN0clwiLCB0b2RvRG9uZUN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiZG9uZS1jdHJcIl0sXG4gIF0pO1xuICBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJkb25lLXRpdGxlXCIsIGRvbmVDdHIsIFwiRG9uZVwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3QnRuKCkge1xuICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImFkZC1uZXctYnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS1wbHVzXCJdLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJhZGQtbmV3LWJ0blwiXSxcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtVGV4dChpdGVtLCBjdHIpIHtcbiAgY29uc3QgdGV4dERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZXh0LWRpdlwiLCBjdHIpO1xuICBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJ0YXNrLXRpdGxlXCIsIHRleHREaXYsIGl0ZW0udGl0bGUpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRhc2stZGVzY1wiLCB0ZXh0RGl2LCBpdGVtLmRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIHRleHREaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtRWRpdChjdHIsIGluZGV4KSB7XG4gIGNvbnN0IG9wZW5FZGl0RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm9wZW4tZWRpdC1kaXZcIiwgY3RyLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgYG9wZW4tZWRpdC1kaXYke2luZGV4fWBdLFxuICBdKTtcbiAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJvcGVuLWVkaXRcIiwgXCJidXR0b25cIl0sXG4gICAgb3BlbkVkaXREaXYsXG4gICAgXCJcIixcbiAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaW5kZXhdXVxuICApO1xuICBjcmVhdGVFbGVtZW50KFxuICAgIFwiaVwiLFxuICAgIFtcImVkaXRMaXN0XCIsIFwidmlldy1lZGl0XCIsIFwiZmEtc29saWRcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCJdLFxuXG4gICAgZWRpdEJ0bixcbiAgICBcIlwiLFxuICAgIFtbXCJ0aXRsZVwiLCBcIkVkaXQgJiBEZWxldGVcIl1dXG4gICk7XG4gIHJldHVybiBlZGl0QnRuO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQYXN0U2VsZWN0ZWQobWVudUl0ZW1zKSB7XG4gIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc1NlbGVjdGVkKG1lbnVJdGVtKSB7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudUV2ZW50TGlzKCkge1xuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVJdGVtRGl2XCIpO1xuICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbW92ZVBhc3RTZWxlY3RlZChtZW51SXRlbXMpO1xuICAgICAgbWFya0FzU2VsZWN0ZWQobWVudUl0ZW0pO1xuICAgICAgb3BlblRoaXNQYWdlKG1lbnVJdGVtLmRhdGFzZXQuaW5kZXhOdW1iZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlblRoaXNQYWdlKGluZGV4KSB7XG4gIGNsZWFyVmlld0N0cigpO1xuICBpZiAoaW5kZXggPT0gMCkge1xuICAgIGxvYWRUYXNrc0Zyb21TdG9yYWdlKGluZGV4KTtcbiAgfVxuICBpZiAoaW5kZXggPT0gMSkge1xuICAgIGxvYWRUYXNrc0Zyb21TdG9yYWdlKFwidG9kYXlcIik7XG4gIH1cbiAgaWYgKGluZGV4ID09IDIpIHtcbiAgICBsb2FkTGlzdHNGcm9tU3RvcmFnZSgpO1xuICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHtcbiAgICBsb2FkUHJvZmlsZUZyb21TdG9yYWdlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoXG4gIHRhZyxcbiAgY2xhc3NMaXN0LFxuICBwYXJlbnRFbCxcbiAgdGV4dCxcbiAgYXR0cmlidXRlc1xuKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc0xpc3QpIHtcbiAgICBjbGFzc0xpc3QgPSBBcnJheS5pc0FycmF5KGNsYXNzTGlzdClcbiAgICAgID8gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdClcbiAgICAgIDogbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gIH1cbiAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGVsZW1lbnRbMF0sIGVsZW1lbnRbMV0pO1xuICAgIH0pO1xuICB9XG4gIHBhcmVudEVsLmFwcGVuZChuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPLCBpc1Bhc3QsIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZnVuY3Rpb24gY2hlY2tJZlBhc3QoZGF0ZSwgZHVlRGF0ZURpdikge1xuICBpZiAoaXNQYXN0KGRhdGUpKSBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJvdmVyZHVlXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmVG9kYXkoZGF0ZSwgZHVlRGF0ZURpdikge1xuICBpZiAoaXNUb2RheShkYXRlKSkge1xuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdER1ZURhdGVzKGRhdGUsIGR1ZURhdGVEaXYpIHtcbiAgaWYgKGRhdGUpIHtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VJU08oZGF0ZSk7XG4gICAgY2hlY2tJZlBhc3QocGFyc2VkRGF0ZSwgZHVlRGF0ZURpdik7XG4gICAgY2hlY2tJZlRvZGF5KHBhcnNlZERhdGUsIGR1ZURhdGVEaXYpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQocGFyc2VkRGF0ZSwgXCJkZCBNTU0geXlcIik7XG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG4gIH1cbn1cbiIsImltcG9ydCByZW5kZXJBcHBVSSBmcm9tIFwiLi9hcHBVSVwiO1xuaW1wb3J0IHsgcmVuZGVyVGFza0Zvcm0gfSBmcm9tIFwiLi9hZGROZXdUYXNrXCI7XG5pbXBvcnQgeyByZW5kZXJMaXN0Rm9ybSB9IGZyb20gXCIuL2FkZE5ld0xpc3RcIjtcbmltcG9ydCB7IGxvYWRUYXNrc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlbmRlckFwcFVJKCk7XG4gIGxvYWRUYXNrc0Zyb21TdG9yYWdlKDApO1xuICBhZGROZXdFdmVudExpKCk7XG59KTtcblxuZnVuY3Rpb24gYWRkTmV3RXZlbnRMaSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbmV3LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGNoZWNrVHlwZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUeXBlKCkge1xuICBjb25zdCBhbGxMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUl0ZW0yXCIpO1xuICBpZiAoYWxsTGlzdHMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICByZXR1cm4gcmVuZGVyTGlzdEZvcm0oKTtcbiAgfVxuICByZW5kZXJUYXNrRm9ybSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhclZpZXdDdHIoKSB7XG4gIGNvbnN0IHZpZXdDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXctY3RyXCIpO1xuICBsZXQgaSA9IDA7XG4gIGlmICh2aWV3Q3RyLmhhc0NoaWxkTm9kZXMpIHtcbiAgICB3aGlsZSAodmlld0N0ci5maXJzdENoaWxkKSB7XG4gICAgICB2aWV3Q3RyLnJlbW92ZUNoaWxkKHZpZXdDdHIuZmlyc3RDaGlsZCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXJMaXN0TmFtZSB9IGZyb20gXCIuL2xpc3RVSVwiO1xuaW1wb3J0IHJlbmRlckxpc3QsIHsgYWxsTGlzdHNWaWV3IH0gZnJvbSBcIi4vYWxsTGlzdHNVSVwiO1xuaW1wb3J0IHsgYWRkTGlzdEV2ZW50TGlzIH0gZnJvbSBcIi4vYWxsTGlzdHNVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgaWNvbikge1xuICBjb25zdCBsaXN0ID0ge1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgaWNvbjogaWNvbixcbiAgfTtcbiAgYWRkTGlzdFRvU3RvcmFnZShsaXN0KTtcbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZWRMaXN0cygpIHtcbiAgY29uc3Qgc3RvcmVkTGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdHNcIikpIHx8IFtdO1xuICByZXR1cm4gc3RvcmVkTGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0VG9TdG9yYWdlKGxpc3QpIHtcbiAgY29uc3QgbGlzdHMgPSBnZXRTdG9yZWRMaXN0cygpO1xuICBsaXN0cy5wdXNoKGxpc3QpO1xuICBjb25zdCBsaXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGxpc3RzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBsaXN0RGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0RGF0YShpbmRleCkge1xuICBjb25zdCBzdG9yZWRMaXN0cyA9IGdldFN0b3JlZExpc3RzKCk7XG4gIGlmIChzdG9yZWRMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZm91bmRMaXN0ID0gc3RvcmVkTGlzdHNbaW5kZXhdO1xuICAgIGlmIChmb3VuZExpc3QpIHtcbiAgICAgIHJldHVybiBmb3VuZExpc3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0SW5mbyhJRCkge1xuICBjb25zdCBsaXN0ID0gZ2V0TGlzdERhdGEoSUQpO1xuICBpZiAobGlzdCkge1xuICAgIHJlbmRlckxpc3ROYW1lKGxpc3QudGl0bGUsIGxpc3QuZGVzY3JpcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gY3JlYXRlTGlzdChcIkFsbCB0YXNrc1wiLCBcIlZpZXcgYWxsIHlvdXIgdGFza3NcIiwgbnVsbCk7XG4gICAgcmVuZGVyTGlzdE5hbWUoYWxsVGFza3MudGl0bGUsIGFsbFRhc2tzLmRlc2NyaXB0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExpc3RzRnJvbVN0b3JhZ2UoKSB7XG4gIGFsbExpc3RzVmlldygpO1xuICBjb25zdCBzdG9yZWRMaXN0cyA9IGdldFN0b3JlZExpc3RzKCk7XG4gIGxldCBpID0gMDtcbiAgc3RvcmVkTGlzdHMuZm9yRWFjaCgoc3RvcmVkTGlzdCkgPT4ge1xuICAgIHJlbmRlckxpc3Qoc3RvcmVkTGlzdCwgaSk7XG4gICAgaSsrO1xuICB9KTtcbiAgYWRkTGlzdEV2ZW50TGlzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGluZGV4KSB7XG4gIGNvbnN0IGxpc3RzID0gZ2V0U3RvcmVkTGlzdHMoKTtcbiAgaWYgKGxpc3RzLmxlbmd0aCA+IDApIHtcbiAgICBsaXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnN0IGxpc3REYXRhID0gSlNPTi5zdHJpbmdpZnkobGlzdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdHNcIiwgbGlzdERhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgY2xlYXJWaWV3Q3RyIGZyb20gXCIuXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgZm9ybWF0RHVlRGF0ZXMgZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IHtcbiAgZ2V0VGFza0RhdGEsXG4gIGxvYWRUYXNrc0Zyb21TdG9yYWdlLFxuICB1cGRhdGVDb21wbGV0ZVN0YXR1cyxcbn0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHJlbmRlckl0ZW1FZGl0LCByZW5kZXJJdGVtVGV4dCB9IGZyb20gXCIuL2FwcFVJXCI7XG5pbXBvcnQgeyBlZGl0ZWRMb2csIHJlbmRlclRhc2tGb3JtIH0gZnJvbSBcIi4vYWRkTmV3VGFza1wiO1xuaW1wb3J0IHsgZ2V0TGlzdERhdGEgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgQ29tcGxldGUgZnJvbSBcIi4vY29tcGxldGUucG5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMaXN0TmFtZSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3Qgdmlld0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1jdHJcIik7XG4gIGNvbnN0IGhlYWRpbmdDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGluZy1jdHJcIiwgdmlld0N0cik7XG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaDFcIiwgaGVhZGluZ0N0ciwgdGl0bGUpO1xuICBjb25zdCBkZXNjID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkZXNjXCIsIGhlYWRpbmdDdHIsIGRlc2NyaXB0aW9uKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJpb3JpdHlTdGF0dXMoc3RhdHVzLCB0ZXh0RGl2KSB7XG4gIGlmIChzdGF0dXMpIHtcbiAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0SWNvbih0YXNrLCBjdHIpIHtcbiAgbGV0IGljb25EaXY7XG4gIGlmICh0YXNrLmFzc2lnbmVkTGlzdHMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGxpc3RJbmRleCA9IHRhc2suYXNzaWduZWRMaXN0cy5zbGljZSgxLCAyKTtcbiAgICBjb25zdCBsaXN0ID0gZ2V0TGlzdERhdGEobGlzdEluZGV4KTtcbiAgICBpZiAobGlzdC5pY29uKSB7XG4gICAgICBjb25zdCBpY29uQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImljb24tZGl2XCIsIGN0cik7XG4gICAgICBjb25zdCBsaXN0QnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJsaXN0LWljb24tYnRuXCIsXG4gICAgICAgIGljb25DdHIsXG4gICAgICAgIGxpc3QuaWNvbixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwibGlzdC1pY29uXCJdLFxuICAgICAgICAgIFtcInRpdGxlXCIsIFwiVmlldyBMaXN0XCJdLFxuICAgICAgICBdXG4gICAgICApO1xuICAgICAgb3Blbkxpc3RFTChsaXN0QnRuLCBsaXN0SW5kZXgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWNvbkRpdjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRHVlRGF0ZSh0YXNrLCBjdHIsIGluZGV4KSB7XG4gIGNvbnN0IHRhc2tEdWVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFzay1kdWUtZGl2XCIsIGN0cik7XG4gIGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzbWFsbFwiLFxuICAgIFwiZHVlLWRhdGVcIixcbiAgICB0YXNrRHVlRGl2LFxuICAgIGZvcm1hdER1ZURhdGVzKHRhc2suZHVlRGF0ZSwgdGFza0R1ZURpdilcbiAgKTtcbiAgcmV0dXJuIHRhc2tEdWVEaXY7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tDb21wbGV0ZSh0YXNrLCBjdHIsIGluZGV4KSB7XG4gIGNvbnN0IHRhc2tDb21wbGV0ZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWNvbXBsZXRlLWRpdlwiLCBjdHIpO1xuICBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1xuICAgICAgXCJjb21wbGV0ZS1idG5cIixcbiAgICAgIFwiZmEtc29saWRcIixcbiAgICAgIFwiZmEtY2hlY2tcIixcbiAgICAgIHRhc2suY29tcGxldGVkID8gXCJkb25lQnRuXCIgOiBcInRvZG9CdG5cIixcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgXSxcbiAgICB0YXNrQ29tcGxldGVEaXYsXG4gICAgXCJcIixcbiAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaW5kZXhdXVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFzayh0YXNrLCBpbmRleCkge1xuICBjb25zdCB0b2RvQ3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWN0clwiKTtcbiAgY29uc3QgZG9uZUN0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9uZS1jdHJcIik7XG4gIGNvbnN0IGl0ZW1DdHIgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJpdGVtLWN0clwiLFxuICAgIHRhc2suY29tcGxldGVkID8gZG9uZUN0ciA6IHRvZG9DdHIsXG4gICAgXCJcIixcbiAgICBbW1wiaWRcIiwgYGl0ZW0tY3RyJHtpbmRleH1gXV1cbiAgKTtcbiAgY29uc3QgdGV4dERpdiA9IHJlbmRlckl0ZW1UZXh0KHRhc2ssIGl0ZW1DdHIpO1xuICByZW5kZXJEdWVEYXRlKHRhc2ssIHRleHREaXYsIGluZGV4KTtcbiAgY29uc3Qgdmlld0VkaXREaXYgPSByZW5kZXJJdGVtRWRpdChpdGVtQ3RyLCBpbmRleCk7XG4gIHJlbmRlckxpc3RJY29uKHRhc2ssIGl0ZW1DdHIpO1xuICByZW5kZXJUYXNrQ29tcGxldGUodGFzaywgaXRlbUN0ciwgaW5kZXgpO1xuICByZW5kZXJQcmlvcml0eVN0YXR1cyh0YXNrLnByaW9yaXR5LCB0ZXh0RGl2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZFbXB0eSgpIHtcbiAgY29uc3QgdG9kb0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1jdHJcIik7XG4gIGNvbnN0IGRvbmVDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbmUtY3RyXCIpO1xuICBpZiAoIXRvZG9DdHIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgY29uc3Qgbm9UYXNrc0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJuby10YXNrcy1jdHJcIiwgdG9kb0N0ciwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgXCJuby10YXNrcy1jdHJcIl0sXG4gICAgXSk7XG4gICAgY29uc3Qgbm9UYXNrc0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJuby10YXNrcy1pbWdcIiwgbm9UYXNrc0N0cik7XG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJuby10YXNrcy10ZXh0XCIsIG5vVGFza3NDdHIsIFwiWW91J3JlIHVwIHRvIGRhdGUhXCIpO1xuICAgIG5vVGFza3NJbWcuc3JjID0gQ29tcGxldGU7XG4gIH1cbiAgaWYgKHRvZG9DdHIuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vLXRhc2tzLWN0clwiKTtcbiAgICBpZiAoZW1wdHkpIHtcbiAgICAgIGVtcHR5LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBpZiAoZG9uZUN0ci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFtcIm5vdGhpbmctY29tcGxldGVcIiwgXCJuby10YXNrcy10ZXh0XCJdLFxuICAgICAgZG9uZUN0cixcbiAgICAgIFwiQ29tcGxldGUgYSB0YXNrIHRvIHNlZSBpdCBoZXJlLi4uXCIsXG4gICAgICBbW1wiaWRcIiwgXCJub3RoaW5nLWNvbXBsZXRlXCJdXVxuICAgICk7XG4gIH1cbiAgaWYgKGRvbmVDdHIuY2hpbGROb2Rlcy5sZW5ndGggPiAyKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGhpbmctY29tcGxldGVcIik7XG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBlbXB0eS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tFdmVudExpcygpIHtcbiAgZWRpdFRhc2tFTCgpO1xuICBjb21wbGV0ZVRhc2tFTCgpO1xufVxuXG5mdW5jdGlvbiBvcGVuTGlzdEVMKGxpc3RCdG4sIGxpc3RJbmRleCkge1xuICBsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRUYXNrc0Zyb21TdG9yYWdlKGxpc3RJbmRleCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza0VMKCkge1xuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3Blbi1lZGl0XCIpO1xuICBlZGl0QnRucy5mb3JFYWNoKChlZGl0QnRuKSA9PiB7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZWRpdEJ0bi5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgICAgY29uc3QgdGFza1RvRWRpdCA9IGdldFRhc2tEYXRhKGluZGV4KTtcbiAgICAgIGVkaXRlZExvZyhpbmRleCk7XG4gICAgICBjbGVhclZpZXdDdHIoKTtcbiAgICAgIHJlbmRlclRhc2tGb3JtKHRhc2tUb0VkaXQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyZW50KGluZGV4KSB7XG4gIGNvbnN0IGl0ZW1DdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS1jdHIke2luZGV4fWApO1xuICBsZXQgcGFyZW50SUQgPSBpdGVtQ3RyLnBhcmVudE5vZGUuaWQ7XG4gIHBhcmVudElEID0gcGFyZW50SUQgPT09IFwidG9kby1jdHJcIiA/IFwiZG9uZS1jdHJcIiA6IFwidG9kby1jdHJcIjtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SUQpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoaXRlbUN0cik7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFza0VMKCkge1xuICBjb25zdCBjb21wbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBsZXRlLWJ0blwiKTtcbiAgY29tcGxldGVCdG5zLmZvckVhY2goKGNvbXBsZXRlQnRuKSA9PiB7XG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY29tcGxldGVCdG4uZGF0YXNldC5pbmRleE51bWJlcjtcbiAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBnZXRUYXNrRGF0YShpbmRleCk7XG4gICAgICB1cGRhdGVQYXJlbnQoaW5kZXgpO1xuICAgICAgdXBkYXRlQ29tcGxldGVTdGF0dXMoaW5kZXgpO1xuICAgICAgY2hlY2tJZkVtcHR5KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2ZpbGVVSSBmcm9tIFwiLi9wcm9maWxlVUlcIjtcbmltcG9ydCB7IEF2YXRhckdlbmVyYXRvciB9IGZyb20gXCJyYW5kb20tYXZhdGFyLWdlbmVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvZmlsZUZyb21TdG9yYWdlKCkge1xuICBjb25zdCBuYW1lID0gbG9hZE5hbWVGcm9tU3RvcmFnZSgpO1xuICBjb25zdCBhdmF0YXIgPSBsb2FkQXZhdGFyRnJvbVN0b3JhZ2UoKTtcbiAgY3JlYXRlUHJvZmlsZVVJKG5hbWUsIGF2YXRhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXZhdGFyRnJvbVN0b3JhZ2UoKSB7XG4gIGNvbnN0IGF2YXRhciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdmF0YXJcIikpIHx8IFtdO1xuICByZXR1cm4gYXZhdGFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5hbWVGcm9tU3RvcmFnZSgpIHtcbiAgY29uc3QgbmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpKSB8fCBbXTtcbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTmFtZVRvU3RvcmFnZShuYW1lKSB7XG4gIGNvbnN0IHN0b3JlTmFtZSA9IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgc3RvcmVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBdmF0YXJUb1N0b3JhZ2UoYXZhdGFyKSB7XG4gIGNvbnN0IHN0b3JlQXZhdGFyID0gSlNPTi5zdHJpbmdpZnkoYXZhdGFyKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdmF0YXJcIiwgc3RvcmVBdmF0YXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXZhdGFyKGF2YXRhcikge1xuICBpZiAoYXZhdGFyLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gYXZhdGFyO1xuICB9XG4gIGNvbnN0IGdlbmVyYXRvciA9IG5ldyBBdmF0YXJHZW5lcmF0b3IoKTtcbiAgY29uc3QgZGVmYXVsdEF2YXRhciA9IGdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbUF2YXRhcihcImF2YXRhclwiKTtcbiAgc2F2ZUF2YXRhclRvU3RvcmFnZShkZWZhdWx0QXZhdGFyKTtcbiAgcmV0dXJuIGRlZmF1bHRBdmF0YXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKG5hbWUpIHtcbiAgaWYgKG5hbWUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIG5hbWUgPSBcIk5ld1VzZXJcIjtcbiAgc2F2ZU5hbWVUb1N0b3JhZ2UobmFtZSk7XG4gIHJldHVybiBuYW1lO1xufVxuIiwiaW1wb3J0IHsgQXZhdGFyR2VuZXJhdG9yIH0gZnJvbSBcInJhbmRvbS1hdmF0YXItZ2VuZXJhdG9yXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRWaWV3Q3RyIH0gZnJvbSBcIi4vYWRkTmV3XCI7XG5pbXBvcnQge1xuICBzYXZlTmFtZVRvU3RvcmFnZSxcbiAgc2F2ZUF2YXRhclRvU3RvcmFnZSxcbiAgZ2V0TmFtZSxcbiAgZ2V0QXZhdGFyLFxufSBmcm9tIFwiLi9wcm9maWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVVSShuYW1lLCBhdmF0YXIpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGdldFZpZXdDdHIoKTtcbiAgY29uc3QgcHJvZmlsZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9maWxlLWN0clwiLCB2aWV3Q3RyKTtcbiAgY29uc3QgYXZhdGFyQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImF2YXRhci1jdHJcIiwgcHJvZmlsZUN0cik7XG4gIGNvbnN0IGF2YXRhckltZyA9IGF2YXRhclVJKGF2YXRhciwgYXZhdGFyQ3RyKTtcbiAgY29uc3QgbmFtZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9maWxlLW5hbWUtY3RyXCIsIHByb2ZpbGVDdHIpO1xuICBjb25zdCBjdXJyZW50TmFtZSA9IGdldE5hbWUobmFtZSk7XG4gIGNvbnN0IHByb2ZpbGVOYW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcm9maWxlLW5hbWVcIiwgbmFtZUN0ciwgY3VycmVudE5hbWUpO1xuICBjb25zdCBidXR0b25DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnV0dG9uLWN0clwiLCBwcm9maWxlQ3RyKTtcbiAgY29uc3QgZWRpdE5hbWUgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJlZGl0LW5hbWUtYnRuXCIsXG4gICAgYnV0dG9uQ3RyLFxuICAgIFwiRWRpdCBuYW1lXCJcbiAgKTtcbiAgY29uc3QgZWRpdEF2YXRhciA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBcImF2YXRhci1idG5cIixcbiAgICBidXR0b25DdHIsXG4gICAgXCJSYW5kb20gYXZhdGFyXCJcbiAgKTtcbiAgZWRpdE5hbWVFTChlZGl0TmFtZSwgcHJvZmlsZU5hbWUpO1xuICByYW5kb21BdmF0YXJFTChhdmF0YXJJbWcsIGVkaXRBdmF0YXIpO1xufVxuXG5mdW5jdGlvbiBhdmF0YXJVSShhdmF0YXIsIGF2YXRhckN0cikge1xuICBjb25zdCBjdXJyZW50QXZhdGFyID0gZ2V0QXZhdGFyKGF2YXRhcik7XG4gIGNvbnN0IGF2YXRhckltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJhdmF0YXJcIiwgYXZhdGFyQ3RyLCBcIlwiLCBbXG4gICAgW1wic3JjXCIsIGN1cnJlbnRBdmF0YXJdLFxuICBdKTtcbiAgcmV0dXJuIGF2YXRhckltZztcbn1cblxuZnVuY3Rpb24gcmFuZG9tQXZhdGFyRUwoaW1nLCBidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IEF2YXRhckdlbmVyYXRvcigpO1xuICAgIGNvbnN0IGF2YXRhciA9IGdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbUF2YXRhcigpO1xuICAgIHNhdmVBdmF0YXJUb1N0b3JhZ2UoYXZhdGFyKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGF2YXRhcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0TmFtZUVMKGVkaXROYW1lLCBwcm9maWxlTmFtZSkge1xuICBlZGl0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJFbnRlciBwcm9maWxlIG5hbWVcIik7XG4gICAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHNhdmVOYW1lVG9TdG9yYWdlKG5hbWUpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHJlbmRlckxpc3ROYW1lLCByZW5kZXJUYXNrIH0gZnJvbSBcIi4vbGlzdFVJXCI7XG5pbXBvcnQgeyBnZXRMaXN0SW5mbyB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZFRhc2tFdmVudExpcywgY2hlY2tJZkVtcHR5IH0gZnJvbSBcIi4vbGlzdFVJXCI7XG5pbXBvcnQgeyBhZGRUYXNrQ3RycyB9IGZyb20gXCIuL2FwcFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIGxpc3QsXG4gIGNvbXBsZXRlZFxuKSB7XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBhc3NpZ25lZExpc3RzOiBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdCA6IFtsaXN0XSxcbiAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICBhZGRUYXNrVG9TdG9yYWdlOiBhZGRUYXNrVG9TdG9yYWdlLFxuICB9O1xuICB0YXNrLmFkZFRhc2tUb1N0b3JhZ2UoKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1N0b3JhZ2UoKSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgdGFza3MucHVzaCh0aGlzKTtcbiAgY29uc3QgdGFza0RhdGEgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgdGFza0RhdGEpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZSh0YXNrKSB7XG4gIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tzRnJvbVN0b3JhZ2UobGlzdEluZGV4KSB7XG4gIGFkZFRhc2tDdHJzKCk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgaWYgKGxpc3RJbmRleCA9PSBcInRvZGF5XCIpIHtcbiAgICByZW5kZXJMaXN0TmFtZShcIlRvZGF5XCIsIFwiQWxsIHRhc2tzIGR1ZSB0b2RheVwiKTtcbiAgICBnZXRUb2RheXNUYXNrcyh0YXNrcyk7XG4gIH0gZWxzZSBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgIGdldFRhc2tzRm9yVGhpc0xpc3QobGlzdEluZGV4LCB0YXNrcyk7XG4gICAgZ2V0TGlzdEluZm8obGlzdEluZGV4KTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMaXN0SW5mbyhsaXN0SW5kZXgpO1xuICB9XG4gIGFkZFRhc2tFdmVudExpcygpO1xuICBjaGVja0lmRW1wdHkoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlzVGFza3ModGFza3MpIHtcbiAgbGV0IGkgPSAwO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKGlzVG9kYXkodGFzay5kdWVEYXRlKSkge1xuICAgICAgcmVuZGVyVGFzayh0YXNrLCBpKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrc0ZvclRoaXNMaXN0KGxpc3RJRCwgdGFza3MpIHtcbiAgbGV0IGkgPSAwO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suYXNzaWduZWRMaXN0cy50b1N0cmluZygpLmluY2x1ZGVzKGxpc3RJRC50b1N0cmluZygpKSkge1xuICAgICAgcmVuZGVyVGFzayh0YXNrLCBpKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0RhdGEoaW5kZXgpIHtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0YXNrc1tpbmRleF07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgY29uc3QgdGFza0RhdGEgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCB0YXNrRGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlU3RhdHVzKGluZGV4KSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICB0b2dnbGVDb21wbGV0ZSh0YXNrc1tpbmRleF0pO1xuICAgIGNvbnN0IHRhc2tEYXRhID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgdGFza0RhdGEpO1xuICB9XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tIFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4uLy4uL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMubWpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICBjb25zdCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgZGF0ZS5nZXRIb3VycygpLFxuICAgICAgZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn1cbiIsImNvbnN0IHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFtcIkRcIiwgXCJERFwiXTtcbmNvbnN0IHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gW1wiWVlcIiwgXCJZWVlZXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09IFwiWVlZWVwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYHl5eXlcXGAgaW5zdGVhZCBvZiBcXGBZWVlZXFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVc2UgXFxgeXlcXGAgaW5zdGVhZCBvZiBcXGBZWVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gXCJEXCIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVc2UgXFxgZFxcYCBpbnN0ZWFkIG9mIFxcYERcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09IFwiRERcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGBkZFxcYCBpbnN0ZWFkIG9mIFxcYEREXFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYCxcbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgIHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtXG4gICAgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRMb2NhbGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZSxcbiAgfTtcblxuICBjb25zdCByZXN1bHQgPSBmb3JtYXRTdHJcbiAgICAubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCJwXCIgfHwgZmlyc3RDaGFyYWN0ZXIgPT09IFwiUFwiKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFvcHRpb25zPy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXIoXG4gICAgICAgICAgb3JpZ2luYWxEYXRlLFxuICAgICAgICAgIHN1YnN0cmluZyxcbiAgICAgICAgICBsb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgZm9ybWF0dGVyT3B0aW9ucyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPVxuICAgIHN0YXJ0T2ZJU09XZWVrKF9kYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID1cbiAgICBzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC1cbiAgICBzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNXZWVrX251bWJlcmluZ1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgcGFyc2VJU099IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucz8uYWRkaXRpb25hbERpZ2l0cyA/PyAyO1xuICBjb25zdCBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG5cbiAgbGV0IGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgY29uc3QgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgbGV0IHRpbWUgPSAwO1xuICBsZXQgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8gSlMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKFxuICAgICAgZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCksXG4gICAgKTtcbiAgICByZXN1bHQuc2V0SG91cnMoXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuY29uc3QgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvLFxufTtcblxuY29uc3QgZGF0ZVJlZ2V4ID1cbiAgL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG5jb25zdCB0aW1lUmVnZXggPVxuICAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG5jb25zdCB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICBjb25zdCBkYXRlU3RyaW5ncyA9IHt9O1xuICBjb25zdCBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICBsZXQgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKFxuICAgICAgICBkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCxcbiAgICAgICAgZGF0ZVN0cmluZy5sZW5ndGgsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgY29uc3QgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgXCJcIik7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICBcIl4oPzooXFxcXGR7NH18WystXVxcXFxke1wiICtcbiAgICAgICg0ICsgYWRkaXRpb25hbERpZ2l0cykgK1xuICAgICAgXCJ9KXwoXFxcXGR7Mn18WystXVxcXFxke1wiICtcbiAgICAgICgyICsgYWRkaXRpb25hbERpZ2l0cykgK1xuICAgICAgXCJ9KSQpXCIsXG4gICk7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHsgeWVhcjogTmFOLCByZXN0RGF0ZVN0cmluZzogXCJcIiB9O1xuXG4gIGNvbnN0IHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIGNvbnN0IGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcblxuICBjb25zdCBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgY29uc3Qgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICBjb25zdCBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmIChcbiAgICAgICF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHxcbiAgICAgICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICBjb25zdCBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICBjb25zdCBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICBjb25zdCBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIGNvbnN0IHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoXCIsXCIsIFwiLlwiKSkpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSBcIlpcIikgcmV0dXJuIDA7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG5cbiAgY29uc3Qgc2lnbiA9IGNhcHR1cmVzWzFdID09PSBcIitcIiA/IC0xIDogMTtcbiAgY29uc3QgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICBjb25zdCBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuY29uc3QgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiAoXG4gICAgbW9udGggPj0gMCAmJlxuICAgIG1vbnRoIDw9IDExICYmXG4gICAgZGF0ZSA+PSAxICYmXG4gICAgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBzZWNvbmRzID49IDAgJiZcbiAgICBzZWNvbmRzIDwgNjAgJiZcbiAgICBtaW51dGVzID49IDAgJiZcbiAgICBtaW51dGVzIDwgNjAgJiZcbiAgICBob3VycyA+PSAwICYmXG4gICAgaG91cnMgPCAyNVxuICApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2VJU087XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ1N0ciA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiZnVuY3Rpb24gYXNzZXJ0Tm9uRW1wdHlTdHJpbmcgKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgIXN0cikge1xuICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBub24tZW1wdHkgc3RyaW5nLCBnb3Q6ICcgKyBzdHIpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0TnVtYmVyIChudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiBudW1iZXIgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciwgZ290OiAnICsgbnVtYmVyKVxuICB9XG59XG5cbmNvbnN0IERCX1ZFUlNJT05fQ1VSUkVOVCA9IDE7XG5jb25zdCBEQl9WRVJTSU9OX0lOSVRJQUwgPSAxO1xuY29uc3QgU1RPUkVfRU1PSkkgPSAnZW1vamknO1xuY29uc3QgU1RPUkVfS0VZVkFMVUUgPSAna2V5dmFsdWUnO1xuY29uc3QgU1RPUkVfRkFWT1JJVEVTID0gJ2Zhdm9yaXRlcyc7XG5jb25zdCBGSUVMRF9UT0tFTlMgPSAndG9rZW5zJztcbmNvbnN0IElOREVYX1RPS0VOUyA9ICd0b2tlbnMnO1xuY29uc3QgRklFTERfVU5JQ09ERSA9ICd1bmljb2RlJztcbmNvbnN0IElOREVYX0NPVU5UID0gJ2NvdW50JztcbmNvbnN0IEZJRUxEX0dST1VQID0gJ2dyb3VwJztcbmNvbnN0IEZJRUxEX09SREVSID0gJ29yZGVyJztcbmNvbnN0IElOREVYX0dST1VQX0FORF9PUkRFUiA9ICdncm91cC1vcmRlcic7XG5jb25zdCBLRVlfRVRBRyA9ICdlVGFnJztcbmNvbnN0IEtFWV9VUkwgPSAndXJsJztcbmNvbnN0IEtFWV9QUkVGRVJSRURfU0tJTlRPTkUgPSAnc2tpblRvbmUnO1xuY29uc3QgTU9ERV9SRUFET05MWSA9ICdyZWFkb25seSc7XG5jb25zdCBNT0RFX1JFQURXUklURSA9ICdyZWFkd3JpdGUnO1xuY29uc3QgSU5ERVhfU0tJTl9VTklDT0RFID0gJ3NraW5Vbmljb2Rlcyc7XG5jb25zdCBGSUVMRF9TS0lOX1VOSUNPREUgPSAnc2tpblVuaWNvZGVzJztcblxuY29uc3QgREVGQVVMVF9EQVRBX1NPVVJDRSA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Vtb2ppLXBpY2tlci1lbGVtZW50LWRhdGFAXjEvZW4vZW1vamliYXNlL2RhdGEuanNvbic7XG5jb25zdCBERUZBVUxUX0xPQ0FMRSA9ICdlbic7XG5cbi8vIGxpa2UgbG9kYXNoJ3MgdW5pcUJ5IGJ1dCBtdWNoIHNtYWxsZXJcbmZ1bmN0aW9uIHVuaXFCeSAoYXJyLCBmdW5jKSB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgY29uc3QgcmVzID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICBjb25zdCBrZXkgPSBmdW5jKGl0ZW0pO1xuICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiB1bmlxRW1vamkgKGVtb2ppcykge1xuICByZXR1cm4gdW5pcUJ5KGVtb2ppcywgXyA9PiBfLnVuaWNvZGUpXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxNaWdyYXRpb24gKGRiKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdFN0b3JlIChuYW1lLCBrZXlQYXRoLCBpbmRleGVzKSB7XG4gICAgY29uc3Qgc3RvcmUgPSBrZXlQYXRoXG4gICAgICA/IGRiLmNyZWF0ZU9iamVjdFN0b3JlKG5hbWUsIHsga2V5UGF0aCB9KVxuICAgICAgOiBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lKTtcbiAgICBpZiAoaW5kZXhlcykge1xuICAgICAgZm9yIChjb25zdCBbaW5kZXhOYW1lLCBba2V5UGF0aCwgbXVsdGlFbnRyeV1dIG9mIE9iamVjdC5lbnRyaWVzKGluZGV4ZXMpKSB7XG4gICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KGluZGV4TmFtZSwga2V5UGF0aCwgeyBtdWx0aUVudHJ5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RvcmVcbiAgfVxuXG4gIGNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX0tFWVZBTFVFKTtcbiAgY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfRU1PSkksIC8qIGtleVBhdGggKi8gRklFTERfVU5JQ09ERSwge1xuICAgIFtJTkRFWF9UT0tFTlNdOiBbRklFTERfVE9LRU5TLCAvKiBtdWx0aUVudHJ5ICovIHRydWVdLFxuICAgIFtJTkRFWF9HUk9VUF9BTkRfT1JERVJdOiBbW0ZJRUxEX0dST1VQLCBGSUVMRF9PUkRFUl1dLFxuICAgIFtJTkRFWF9TS0lOX1VOSUNPREVdOiBbRklFTERfU0tJTl9VTklDT0RFLCAvKiBtdWx0aUVudHJ5ICovIHRydWVdXG4gIH0pO1xuICBjcmVhdGVPYmplY3RTdG9yZShTVE9SRV9GQVZPUklURVMsIHVuZGVmaW5lZCwge1xuICAgIFtJTkRFWF9DT1VOVF06IFsnJ11cbiAgfSk7XG59XG5cbmNvbnN0IG9wZW5JbmRleGVkREJSZXF1ZXN0cyA9IHt9O1xuY29uc3QgZGF0YWJhc2VDYWNoZSA9IHt9O1xuY29uc3Qgb25DbG9zZUxpc3RlbmVycyA9IHt9O1xuXG5mdW5jdGlvbiBoYW5kbGVPcGVuT3JEZWxldGVSZXEgKHJlc29sdmUsIHJlamVjdCwgcmVxKSB7XG4gIC8vIFRoZXNlIHRoaW5ncyBhcmUgYWxtb3N0IGltcG9zc2libGUgdG8gdGVzdCB3aXRoIGZha2VJbmRleGVkREIgc2FkbHlcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmVxLm9uYmxvY2tlZCA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ0lEQiBibG9ja2VkJykpO1xuICByZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXEucmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGF0YWJhc2UgKGRiTmFtZSkge1xuICBjb25zdCBkYiA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXEgPSBpbmRleGVkREIub3BlbihkYk5hbWUsIERCX1ZFUlNJT05fQ1VSUkVOVCk7XG4gICAgb3BlbkluZGV4ZWREQlJlcXVlc3RzW2RiTmFtZV0gPSByZXE7XG4gICAgcmVxLm9udXBncmFkZW5lZWRlZCA9IGUgPT4ge1xuICAgICAgLy8gVGVjaG5pY2FsbHkgdGhlcmUgaXMgb25seSBvbmUgdmVyc2lvbiwgc28gd2UgZG9uJ3QgbmVlZCB0aGlzIGBpZmAgY2hlY2tcbiAgICAgIC8vIEJ1dCBpZiBhbiBvbGQgdmVyc2lvbiBvZiB0aGUgSlMgaXMgaW4gYW5vdGhlciBicm93c2VyIHRhYlxuICAgICAgLy8gYW5kIGl0IGdldHMgdXBncmFkZWQgaW4gdGhlIGZ1dHVyZSBhbmQgd2UgaGF2ZSBhIG5ldyBEQiB2ZXJzaW9uLCB3ZWxsLi4uXG4gICAgICAvLyBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5LlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChlLm9sZFZlcnNpb24gPCBEQl9WRVJTSU9OX0lOSVRJQUwpIHtcbiAgICAgICAgaW5pdGlhbE1pZ3JhdGlvbihyZXEucmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGhhbmRsZU9wZW5PckRlbGV0ZVJlcShyZXNvbHZlLCByZWplY3QsIHJlcSk7XG4gIH0pO1xuICAvLyBIYW5kbGUgYWJub3JtYWwgY2xvc2VzLCBlLmcuIFwiZGVsZXRlIGRhdGFiYXNlXCIgaW4gY2hyb21lIGRldiB0b29scy5cbiAgLy8gTm8gbmVlZCBmb3IgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgYmVjYXVzZSBvbmNlIHRoZSBEQiBjYW4gbm8gbG9uZ2VyXG4gIC8vIGZpcmUgXCJjbG9zZVwiIGV2ZW50cywgaXQgd2lsbCBhdXRvLUdDLlxuICAvLyBVbmZvcnR1bmF0ZWx5IGNhbm5vdCB0ZXN0IGluIGZha2VJbmRleGVkREI6IGh0dHBzOi8vZ2l0aHViLmNvbS9kdW1ibWF0dGVyL2Zha2VJbmRleGVkREIvaXNzdWVzLzUwXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGRiLm9uY2xvc2UgPSAoKSA9PiBjbG9zZURhdGFiYXNlKGRiTmFtZSk7XG4gIHJldHVybiBkYlxufVxuXG5mdW5jdGlvbiBvcGVuRGF0YWJhc2UgKGRiTmFtZSkge1xuICBpZiAoIWRhdGFiYXNlQ2FjaGVbZGJOYW1lXSkge1xuICAgIGRhdGFiYXNlQ2FjaGVbZGJOYW1lXSA9IGNyZWF0ZURhdGFiYXNlKGRiTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFiYXNlQ2FjaGVbZGJOYW1lXVxufVxuXG5mdW5jdGlvbiBkYlByb21pc2UgKGRiLCBzdG9yZU5hbWUsIHJlYWRPbmx5T3JSZWFkV3JpdGUsIGNiKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gVXNlIHJlbGF4ZWQgZHVyYWJpbGl0eSBiZWNhdXNlIG5laXRoZXIgdGhlIGVtb2ppIGRhdGEgbm9yIHRoZSBmYXZvcml0ZXMvcHJlZmVycmVkIHNraW4gdG9uZVxuICAgIC8vIGFyZSByZWFsbHkgaXJyZXBsYWNlYWJsZSBkYXRhLiBJbmRleGVkREIgaXMganVzdCBhIGNhY2hlIGluIHRoaXMgY2FzZS5cbiAgICBjb25zdCB0eG4gPSBkYi50cmFuc2FjdGlvbihzdG9yZU5hbWUsIHJlYWRPbmx5T3JSZWFkV3JpdGUsIHsgZHVyYWJpbGl0eTogJ3JlbGF4ZWQnIH0pO1xuICAgIGNvbnN0IHN0b3JlID0gdHlwZW9mIHN0b3JlTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgID8gdHhuLm9iamVjdFN0b3JlKHN0b3JlTmFtZSlcbiAgICAgIDogc3RvcmVOYW1lLm1hcChuYW1lID0+IHR4bi5vYmplY3RTdG9yZShuYW1lKSk7XG4gICAgbGV0IHJlcztcbiAgICBjYihzdG9yZSwgdHhuLCAocmVzdWx0KSA9PiB7XG4gICAgICByZXMgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICB0eG4ub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUocmVzKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHR4bi5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4bi5lcnJvcik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNsb3NlRGF0YWJhc2UgKGRiTmFtZSkge1xuICAvLyBjbG9zZSBhbnkgb3BlbiByZXF1ZXN0c1xuICBjb25zdCByZXEgPSBvcGVuSW5kZXhlZERCUmVxdWVzdHNbZGJOYW1lXTtcbiAgY29uc3QgZGIgPSByZXEgJiYgcmVxLnJlc3VsdDtcbiAgaWYgKGRiKSB7XG4gICAgZGIuY2xvc2UoKTtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBvbkNsb3NlTGlzdGVuZXJzW2RiTmFtZV07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZWxldGUgb3BlbkluZGV4ZWREQlJlcXVlc3RzW2RiTmFtZV07XG4gIGRlbGV0ZSBkYXRhYmFzZUNhY2hlW2RiTmFtZV07XG4gIGRlbGV0ZSBvbkNsb3NlTGlzdGVuZXJzW2RiTmFtZV07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZURhdGFiYXNlIChkYk5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBjbG9zZSBhbnkgb3BlbiByZXF1ZXN0c1xuICAgIGNsb3NlRGF0YWJhc2UoZGJOYW1lKTtcbiAgICBjb25zdCByZXEgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UoZGJOYW1lKTtcbiAgICBoYW5kbGVPcGVuT3JEZWxldGVSZXEocmVzb2x2ZSwgcmVqZWN0LCByZXEpO1xuICB9KVxufVxuXG4vLyBUaGUgXCJjbG9zZVwiIGV2ZW50IG9jY3VycyBkdXJpbmcgYW4gYWJub3JtYWwgc2h1dGRvd24sIGUuZy4gYSB1c2VyIGNsZWFyaW5nIHRoZWlyIGJyb3dzZXIgZGF0YS5cbi8vIEhvd2V2ZXIsIGl0IGRvZXNuJ3Qgb2NjdXIgd2l0aCB0aGUgbm9ybWFsIFwiY2xvc2VcIiBldmVudCwgc28gd2UgaGFuZGxlIHRoYXQgc2VwYXJhdGVseS5cbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9JbmRleGVkREIvI2Nsb3NlLWEtZGF0YWJhc2UtY29ubmVjdGlvblxuZnVuY3Rpb24gYWRkT25DbG9zZUxpc3RlbmVyIChkYk5hbWUsIGxpc3RlbmVyKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSBvbkNsb3NlTGlzdGVuZXJzW2RiTmFtZV07XG4gIGlmICghbGlzdGVuZXJzKSB7XG4gICAgbGlzdGVuZXJzID0gb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdID0gW107XG4gIH1cbiAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xufVxuXG4vLyBsaXN0IG9mIGVtb3RpY29ucyB0aGF0IGRvbid0IG1hdGNoIGEgc2ltcGxlIFxcVysgcmVnZXhcbi8vIGV4dHJhY3RlZCB1c2luZzpcbi8vIHJlcXVpcmUoJ2Vtb2ppLXBpY2tlci1lbGVtZW50LWRhdGEvZW4vZW1vamliYXNlL2RhdGEuanNvbicpLm1hcChfID0+IF8uZW1vdGljb24pLmZpbHRlcihCb29sZWFuKS5maWx0ZXIoXyA9PiAhL15cXFcrJC8udGVzdChfKSlcbmNvbnN0IGlycmVndWxhckVtb3RpY29ucyA9IG5ldyBTZXQoW1xuICAnOkQnLCAnWEQnLCBcIjonRFwiLCAnTzopJyxcbiAgJzpYJywgJzpQJywgJztQJywgJ1hQJyxcbiAgJzpMJywgJzpaJywgJzpqJywgJzhEJyxcbiAgJ1hPJywgJzgpJywgJzpCJywgJzpPJyxcbiAgJzpTJywgXCI6J29cIiwgJ0R4JywgJ1goJyxcbiAgJ0Q6JywgJzpDJywgJz4wKScsICc6MycsXG4gICc8LzMnLCAnPDMnLCAnXFxcXE0vJywgJzpFJyxcbiAgJzgjJ1xuXSk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbnMgKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnNwbGl0KC9bXFxzX10rLylcbiAgICAubWFwKHdvcmQgPT4ge1xuICAgICAgaWYgKCF3b3JkLm1hdGNoKC9cXHcvKSB8fCBpcnJlZ3VsYXJFbW90aWNvbnMuaGFzKHdvcmQpKSB7XG4gICAgICAgIC8vIGZvciBwdXJlIGVtb3RpY29ucyBsaWtlIDopIG9yIDotKSwganVzdCBsZWF2ZSB0aGVtIGFzLWlzXG4gICAgICAgIHJldHVybiB3b3JkLnRvTG93ZXJDYXNlKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdvcmRcbiAgICAgICAgLnJlcGxhY2UoL1spKDosXS9nLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL+KAmS9nLCBcIidcIilcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICB9KS5maWx0ZXIoQm9vbGVhbilcbn1cblxuY29uc3QgTUlOX1NFQVJDSF9URVhUX0xFTkdUSCA9IDI7XG5cbi8vIFRoaXMgaXMgYW4gZXh0cmEgc3RlcCBpbiBhZGRpdGlvbiB0byBleHRyYWN0VG9rZW5zKCkuIFRoZSBkaWZmZXJlbmNlIGhlcmUgaXMgdGhhdCB3ZSBleHBlY3Rcbi8vIHRoZSBpbnB1dCB0byBoYXZlIGFscmVhZHkgYmVlbiBydW4gdGhyb3VnaCBleHRyYWN0VG9rZW5zKCkuIFRoaXMgaXMgdXNlZnVsIGZvciBjYXNlcyBsaWtlXG4vLyBlbW90aWNvbnMsIHdoZXJlIHdlIGRvbid0IHdhbnQgdG8gZG8gYW55IHRva2VuaXphdGlvbiAoYmVjYXVzZSBpdCBtYWtlcyBubyBzZW5zZSB0byBzcGxpdCB1cFxuLy8gXCI+OilcIiBieSB0aGUgY29sb24pIGJ1dCB3ZSBkbyB3YW50IHRvIGxvd2VyY2FzZSBpdCB0byBoYXZlIGNvbnNpc3RlbnQgc2VhcmNoIHJlc3VsdHMsIHNvIHRoYXRcbi8vIHRoZSB1c2VyIGNhbiB0eXBlICc6UCcgb3IgJzpwJyBhbmQgc3RpbGwgZ2V0IHRoZSBzYW1lIHJlc3VsdC5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRva2VucyAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcChfID0+IF8udG9Mb3dlckNhc2UoKSlcbiAgICAuZmlsdGVyKF8gPT4gXy5sZW5ndGggPj0gTUlOX1NFQVJDSF9URVhUX0xFTkdUSClcbn1cblxuLy8gVHJhbnNmb3JtIGVtb2ppIGRhdGEgZm9yIHN0b3JhZ2UgaW4gSURCXG5mdW5jdGlvbiB0cmFuc2Zvcm1FbW9qaURhdGEgKGVtb2ppRGF0YSkge1xuICBjb25zdCByZXMgPSBlbW9qaURhdGEubWFwKCh7IGFubm90YXRpb24sIGVtb3RpY29uLCBncm91cCwgb3JkZXIsIHNob3J0Y29kZXMsIHNraW5zLCB0YWdzLCBlbW9qaSwgdmVyc2lvbiB9KSA9PiB7XG4gICAgY29uc3QgdG9rZW5zID0gWy4uLm5ldyBTZXQoXG4gICAgICBub3JtYWxpemVUb2tlbnMoW1xuICAgICAgICAuLi4oc2hvcnRjb2RlcyB8fCBbXSkubWFwKGV4dHJhY3RUb2tlbnMpLmZsYXQoKSxcbiAgICAgICAgLi4udGFncy5tYXAoZXh0cmFjdFRva2VucykuZmxhdCgpLFxuICAgICAgICAuLi5leHRyYWN0VG9rZW5zKGFubm90YXRpb24pLFxuICAgICAgICBlbW90aWNvblxuICAgICAgXSlcbiAgICApXS5zb3J0KCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgYW5ub3RhdGlvbixcbiAgICAgIGdyb3VwLFxuICAgICAgb3JkZXIsXG4gICAgICB0YWdzLFxuICAgICAgdG9rZW5zLFxuICAgICAgdW5pY29kZTogZW1vamksXG4gICAgICB2ZXJzaW9uXG4gICAgfTtcbiAgICBpZiAoZW1vdGljb24pIHtcbiAgICAgIHJlcy5lbW90aWNvbiA9IGVtb3RpY29uO1xuICAgIH1cbiAgICBpZiAoc2hvcnRjb2Rlcykge1xuICAgICAgcmVzLnNob3J0Y29kZXMgPSBzaG9ydGNvZGVzO1xuICAgIH1cbiAgICBpZiAoc2tpbnMpIHtcbiAgICAgIHJlcy5za2luVG9uZXMgPSBbXTtcbiAgICAgIHJlcy5za2luVW5pY29kZXMgPSBbXTtcbiAgICAgIHJlcy5za2luVmVyc2lvbnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgeyB0b25lLCBlbW9qaSwgdmVyc2lvbiB9IG9mIHNraW5zKSB7XG4gICAgICAgIHJlcy5za2luVG9uZXMucHVzaCh0b25lKTtcbiAgICAgICAgcmVzLnNraW5Vbmljb2Rlcy5wdXNoKGVtb2ppKTtcbiAgICAgICAgcmVzLnNraW5WZXJzaW9ucy5wdXNoKHZlcnNpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH0pO1xuICByZXR1cm4gcmVzXG59XG5cbi8vIGhlbHBlciBmdW5jdGlvbnMgdGhhdCBoZWxwIGNvbXByZXNzIHRoZSBjb2RlIGJldHRlclxuXG5mdW5jdGlvbiBjYWxsU3RvcmUgKHN0b3JlLCBtZXRob2QsIGtleSwgY2IpIHtcbiAgc3RvcmVbbWV0aG9kXShrZXkpLm9uc3VjY2VzcyA9IGUgPT4gKGNiICYmIGNiKGUudGFyZ2V0LnJlc3VsdCkpO1xufVxuXG5mdW5jdGlvbiBnZXRJREIgKHN0b3JlLCBrZXksIGNiKSB7XG4gIGNhbGxTdG9yZShzdG9yZSwgJ2dldCcsIGtleSwgY2IpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxJREIgKHN0b3JlLCBrZXksIGNiKSB7XG4gIGNhbGxTdG9yZShzdG9yZSwgJ2dldEFsbCcsIGtleSwgY2IpO1xufVxuXG5mdW5jdGlvbiBjb21taXQgKHR4bikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHhuLmNvbW1pdCkge1xuICAgIHR4bi5jb21taXQoKTtcbiAgfVxufVxuXG4vLyBsaWtlIGxvZGFzaCdzIG1pbkJ5XG5mdW5jdGlvbiBtaW5CeSAoYXJyYXksIGZ1bmMpIHtcbiAgbGV0IG1pbkl0ZW0gPSBhcnJheVswXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpXTtcbiAgICBpZiAoZnVuYyhtaW5JdGVtKSA+IGZ1bmMoaXRlbSkpIHtcbiAgICAgIG1pbkl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWluSXRlbVxufVxuXG4vLyByZXR1cm4gYW4gYXJyYXkgb2YgcmVzdWx0cyByZXByZXNlbnRpbmcgYWxsIGl0ZW1zIHRoYXQgYXJlIGZvdW5kIGluIGVhY2ggb25lIG9mIHRoZSBhcnJheXNcbi8vXG5cbmZ1bmN0aW9uIGZpbmRDb21tb25NZW1iZXJzIChhcnJheXMsIHVuaXFCeUZ1bmMpIHtcbiAgY29uc3Qgc2hvcnRlc3RBcnJheSA9IG1pbkJ5KGFycmF5cywgXyA9PiBfLmxlbmd0aCk7XG4gIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIHNob3J0ZXN0QXJyYXkpIHtcbiAgICAvLyBpZiB0aGlzIGl0ZW0gaXMgaW5jbHVkZWQgaW4gZXZlcnkgYXJyYXkgaW4gdGhlIGludGVybWVkaWF0ZSByZXN1bHRzLCBhZGQgaXQgdG8gdGhlIGZpbmFsIHJlc3VsdHNcbiAgICBpZiAoIWFycmF5cy5zb21lKGFycmF5ID0+IGFycmF5LmZpbmRJbmRleChfID0+IHVuaXFCeUZ1bmMoXykgPT09IHVuaXFCeUZ1bmMoaXRlbSkpID09PSAtMSkpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNFbXB0eSAoZGIpIHtcbiAgcmV0dXJuICEoYXdhaXQgZ2V0KGRiLCBTVE9SRV9LRVlWQUxVRSwgS0VZX1VSTCkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc0RhdGEgKGRiLCB1cmwsIGVUYWcpIHtcbiAgY29uc3QgW29sZEVUYWcsIG9sZFVybF0gPSBhd2FpdCBQcm9taXNlLmFsbChbS0VZX0VUQUcsIEtFWV9VUkxdXG4gICAgLm1hcChrZXkgPT4gZ2V0KGRiLCBTVE9SRV9LRVlWQUxVRSwga2V5KSkpO1xuICByZXR1cm4gKG9sZEVUYWcgPT09IGVUYWcgJiYgb2xkVXJsID09PSB1cmwpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvRnVsbERhdGFiYXNlU2NhbkZvclNpbmdsZVJlc3VsdCAoZGIsIHByZWRpY2F0ZSkge1xuICAvLyBUaGlzIGJhdGNoaW5nIGFsZ29yaXRobSBpcyBqdXN0IGEgcGVyZiBpbXByb3ZlbWVudCBvdmVyIGEgYmFzaWNcbiAgLy8gY3Vyc29yLiBUaGUgQkFUQ0hfU0laRSBpcyBhbiBlc3RpbWF0ZSBvZiB3aGF0IHdvdWxkIGdpdmUgdGhlIGJlc3RcbiAgLy8gcGVyZiBmb3IgZG9pbmcgYSBmdWxsIERCIHNjYW4gKHdvcnN0IGNhc2UpLlxuICAvL1xuICAvLyBNaW5pLWJlbmNobWFyayBmb3IgZGV0ZXJtaW5pbmcgdGhlIGJlc3QgYmF0Y2ggc2l6ZTpcbiAgLy9cbiAgLy8gUEVSRj0xIHlhcm4gYnVpbGQ6cm9sbHVwICYmIHlhcm4gdGVzdDphZGhvY1xuICAvL1xuICAvLyAoYXN5bmMgKCkgPT4ge1xuICAvLyAgIHBlcmZvcm1hbmNlLm1hcmsoJ3N0YXJ0JylcbiAgLy8gICBhd2FpdCAkKCdlbW9qaS1waWNrZXInKS5kYXRhYmFzZS5nZXRFbW9qaUJ5U2hvcnRjb2RlKCdkb2Vzbm90ZXhpc3QnKVxuICAvLyAgIHBlcmZvcm1hbmNlLm1lYXN1cmUoJ3RvdGFsJywgJ3N0YXJ0JylcbiAgLy8gICBjb25zb2xlLmxvZyhwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKCd0b3RhbCcpLnNsaWNlKC0xKVswXS5kdXJhdGlvbilcbiAgLy8gfSkoKVxuICBjb25zdCBCQVRDSF9TSVpFID0gNTA7IC8vIFR5cGljYWxseSBhcm91bmQgMTUwbXMgZm9yIDZ4IHNsb3dkb3duIGluIENocm9tZSBmb3IgYWJvdmUgYmVuY2htYXJrXG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4ge1xuICAgIGxldCBsYXN0S2V5O1xuXG4gICAgY29uc3QgcHJvY2Vzc05leHRCYXRjaCA9ICgpID0+IHtcbiAgICAgIGVtb2ppU3RvcmUuZ2V0QWxsKGxhc3RLZXkgJiYgSURCS2V5UmFuZ2UubG93ZXJCb3VuZChsYXN0S2V5LCB0cnVlKSwgQkFUQ0hfU0laRSkub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICBsYXN0S2V5ID0gcmVzdWx0LnVuaWNvZGU7XG4gICAgICAgICAgaWYgKHByZWRpY2F0ZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IocmVzdWx0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCBCQVRDSF9TSVpFKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKClcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzTmV4dEJhdGNoKCk7XG4gICAgICB9O1xuICAgIH07XG4gICAgcHJvY2Vzc05leHRCYXRjaCgpO1xuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YSAoZGIsIGVtb2ppRGF0YSwgdXJsLCBlVGFnKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0gdHJhbnNmb3JtRW1vamlEYXRhKGVtb2ppRGF0YSk7XG4gICAgYXdhaXQgZGJQcm9taXNlKGRiLCBbU1RPUkVfRU1PSkksIFNUT1JFX0tFWVZBTFVFXSwgTU9ERV9SRUFEV1JJVEUsIChbZW1vamlTdG9yZSwgbWV0YVN0b3JlXSwgdHhuKSA9PiB7XG4gICAgICBsZXQgb2xkRVRhZztcbiAgICAgIGxldCBvbGRVcmw7XG4gICAgICBsZXQgdG9kbyA9IDA7XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrRmV0Y2hlZCAoKSB7XG4gICAgICAgIGlmICgrK3RvZG8gPT09IDIpIHsgLy8gMiByZXF1ZXN0cyBtYWRlXG4gICAgICAgICAgb25GZXRjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25GZXRjaGVkICgpIHtcbiAgICAgICAgaWYgKG9sZEVUYWcgPT09IGVUYWcgJiYgb2xkVXJsID09PSB1cmwpIHtcbiAgICAgICAgICAvLyBjaGVjayBhZ2FpbiB3aXRoaW4gdGhlIHRyYW5zYWN0aW9uIHRvIGd1YXJkIGFnYWluc3QgY29uY3VycmVuY3ksIGUuZy4gbXVsdGlwbGUgYnJvd3NlciB0YWJzXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVsZXRlIG9sZCBkYXRhXG4gICAgICAgIGVtb2ppU3RvcmUuY2xlYXIoKTtcbiAgICAgICAgLy8gaW5zZXJ0IG5ldyBkYXRhXG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0cmFuc2Zvcm1lZERhdGEpIHtcbiAgICAgICAgICBlbW9qaVN0b3JlLnB1dChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBtZXRhU3RvcmUucHV0KGVUYWcsIEtFWV9FVEFHKTtcbiAgICAgICAgbWV0YVN0b3JlLnB1dCh1cmwsIEtFWV9VUkwpO1xuICAgICAgICBjb21taXQodHhuKTtcbiAgICAgIH1cblxuICAgICAgZ2V0SURCKG1ldGFTdG9yZSwgS0VZX0VUQUcsIHJlc3VsdCA9PiB7XG4gICAgICAgIG9sZEVUYWcgPSByZXN1bHQ7XG4gICAgICAgIGNoZWNrRmV0Y2hlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGdldElEQihtZXRhU3RvcmUsIEtFWV9VUkwsIHJlc3VsdCA9PiB7XG4gICAgICAgIG9sZFVybCA9IHJlc3VsdDtcbiAgICAgICAgY2hlY2tGZXRjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5R3JvdXAgKGRiLCBncm91cCkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKFtncm91cCwgMF0sIFtncm91cCArIDEsIDBdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2V0QWxsSURCKGVtb2ppU3RvcmUuaW5kZXgoSU5ERVhfR1JPVVBfQU5EX09SREVSKSwgcmFuZ2UsIGNiKTtcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5IChkYiwgcXVlcnkpIHtcbiAgY29uc3QgdG9rZW5zID0gbm9ybWFsaXplVG9rZW5zKGV4dHJhY3RUb2tlbnMocXVlcnkpKTtcblxuICBpZiAoIXRva2Vucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4ge1xuICAgIC8vIGdldCBhbGwgcmVzdWx0cyB0aGF0IGNvbnRhaW4gYWxsIHRva2VucyAoaS5lLiBhbiBBTkQgcXVlcnkpXG4gICAgY29uc3QgaW50ZXJtZWRpYXRlUmVzdWx0cyA9IFtdO1xuXG4gICAgY29uc3QgY2hlY2tEb25lID0gKCkgPT4ge1xuICAgICAgaWYgKGludGVybWVkaWF0ZVJlc3VsdHMubGVuZ3RoID09PSB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIG9uRG9uZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkRvbmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gZmluZENvbW1vbk1lbWJlcnMoaW50ZXJtZWRpYXRlUmVzdWx0cywgXyA9PiBfLnVuaWNvZGUpO1xuICAgICAgY2IocmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogMSkpO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBjb25zdCByYW5nZSA9IGkgPT09IHRva2Vucy5sZW5ndGggLSAxXG4gICAgICAgID8gSURCS2V5UmFuZ2UuYm91bmQodG9rZW4sIHRva2VuICsgJ1xcdWZmZmYnLCBmYWxzZSwgdHJ1ZSkgLy8gdHJlYXQgbGFzdCB0b2tlbiBhcyBhIHByZWZpeCBzZWFyY2hcbiAgICAgICAgOiBJREJLZXlSYW5nZS5vbmx5KHRva2VuKTsgLy8gdHJlYXQgYWxsIG90aGVyIHRva2VucyBhcyBhbiBleGFjdCBtYXRjaFxuICAgICAgZ2V0QWxsSURCKGVtb2ppU3RvcmUuaW5kZXgoSU5ERVhfVE9LRU5TKSwgcmFuZ2UsIHJlc3VsdCA9PiB7XG4gICAgICAgIGludGVybWVkaWF0ZVJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcbn1cblxuLy8gVGhpcyBjb3VsZCBoYXZlIGJlZW4gaW1wbGVtZW50ZWQgYXMgYW4gSURCIGluZGV4IG9uIHNob3J0Y29kZXMsIGJ1dCBpdCBzZWVtZWQgd2FzdGVmdWwgdG8gZG8gdGhhdFxuLy8gd2hlbiB3ZSBjYW4gYWxyZWFkeSBxdWVyeSBieSB0b2tlbnMgYW5kIHRoaXMgd2lsbCBnaXZlIHVzIHdoYXQgd2UncmUgbG9va2luZyBmb3IgOTkuOSUgb2YgdGhlIHRpbWVcbmFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppQnlTaG9ydGNvZGUgKGRiLCBzaG9ydGNvZGUpIHtcbiAgY29uc3QgZW1vamlzID0gYXdhaXQgZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5KGRiLCBzaG9ydGNvZGUpO1xuXG4gIC8vIEluIHZlcnkgcmFyZSBjYXNlcyAoZS5nLiB0aGUgc2hvcnRjb2RlIFwidlwiIGFzIGluIFwidiBmb3IgdmljdG9yeVwiKSwgd2UgY2Fubm90IHNlYXJjaCBiZWNhdXNlXG4gIC8vIHRoZXJlIGFyZSBubyB1c2FibGUgdG9rZW5zICh0b28gc2hvcnQgaW4gdGhpcyBjYXNlKS4gSW4gdGhhdCBjYXNlLCB3ZSBoYXZlIHRvIGRvIGFuIGluZWZmaWNpZW50XG4gIC8vIGZ1bGwtZGF0YWJhc2Ugc2Nhbiwgd2hpY2ggSSBiZWxpZXZlIGlzIGFuIGFjY2VwdGFibGUgdHJhZGVvZmYgZm9yIG5vdCBoYXZpbmcgdG8gaGF2ZSBhbiBleHRyYVxuICAvLyBpbmRleCBvbiBzaG9ydGNvZGVzLlxuXG4gIGlmICghZW1vamlzLmxlbmd0aCkge1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IF8gPT4gKChfLnNob3J0Y29kZXMgfHwgW10pLmluY2x1ZGVzKHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgcmV0dXJuIChhd2FpdCBkb0Z1bGxEYXRhYmFzZVNjYW5Gb3JTaW5nbGVSZXN1bHQoZGIsIHByZWRpY2F0ZSkpIHx8IG51bGxcbiAgfVxuXG4gIHJldHVybiBlbW9qaXMuZmlsdGVyKF8gPT4ge1xuICAgIGNvbnN0IGxvd2VyU2hvcnRjb2RlcyA9IChfLnNob3J0Y29kZXMgfHwgW10pLm1hcChfID0+IF8udG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIGxvd2VyU2hvcnRjb2Rlcy5pbmNsdWRlcyhzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSlcbiAgfSlbMF0gfHwgbnVsbFxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5VW5pY29kZSAoZGIsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRU1PSkksIE1PREVfUkVBRE9OTFksIChlbW9qaVN0b3JlLCB0eG4sIGNiKSA9PiAoXG4gICAgZ2V0SURCKGVtb2ppU3RvcmUsIHVuaWNvZGUsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjYihyZXN1bHQpXG4gICAgICB9XG4gICAgICBnZXRJREIoZW1vamlTdG9yZS5pbmRleChJTkRFWF9TS0lOX1VOSUNPREUpLCB1bmljb2RlLCByZXN1bHQgPT4gY2IocmVzdWx0IHx8IG51bGwpKTtcbiAgICB9KVxuICApKVxufVxuXG5mdW5jdGlvbiBnZXQgKGRiLCBzdG9yZU5hbWUsIGtleSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBzdG9yZU5hbWUsIE1PREVfUkVBRE9OTFksIChzdG9yZSwgdHhuLCBjYikgPT4gKFxuICAgIGdldElEQihzdG9yZSwga2V5LCBjYilcbiAgKSlcbn1cblxuZnVuY3Rpb24gc2V0IChkYiwgc3RvcmVOYW1lLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIHN0b3JlTmFtZSwgTU9ERV9SRUFEV1JJVEUsIChzdG9yZSwgdHhuKSA9PiB7XG4gICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIGNvbW1pdCh0eG4pO1xuICB9KVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQgKGRiLCB1bmljb2RlKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0ZBVk9SSVRFUywgTU9ERV9SRUFEV1JJVEUsIChzdG9yZSwgdHhuKSA9PiAoXG4gICAgZ2V0SURCKHN0b3JlLCB1bmljb2RlLCByZXN1bHQgPT4ge1xuICAgICAgc3RvcmUucHV0KChyZXN1bHQgfHwgMCkgKyAxLCB1bmljb2RlKTtcbiAgICAgIGNvbW1pdCh0eG4pO1xuICAgIH0pXG4gICkpXG59XG5cbmZ1bmN0aW9uIGdldFRvcEZhdm9yaXRlRW1vamkgKGRiLCBjdXN0b21FbW9qaUluZGV4LCBsaW1pdCkge1xuICBpZiAobGltaXQgPT09IDApIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gZGJQcm9taXNlKGRiLCBbU1RPUkVfRkFWT1JJVEVTLCBTVE9SRV9FTU9KSV0sIE1PREVfUkVBRE9OTFksIChbZmF2b3JpdGVzU3RvcmUsIGVtb2ppU3RvcmVdLCB0eG4sIGNiKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZhdm9yaXRlc1N0b3JlLmluZGV4KElOREVYX0NPVU5UKS5vcGVuQ3Vyc29yKHVuZGVmaW5lZCwgJ3ByZXYnKS5vbnN1Y2Nlc3MgPSBlID0+IHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmICghY3Vyc29yKSB7IC8vIG5vIG1vcmUgcmVzdWx0c1xuICAgICAgICByZXR1cm4gY2IocmVzdWx0cylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkUmVzdWx0IChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm4gY2IocmVzdWx0cykgLy8gZG9uZSwgcmVhY2hlZCB0aGUgbGltaXRcbiAgICAgICAgfVxuICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdW5pY29kZU9yTmFtZSA9IGN1cnNvci5wcmltYXJ5S2V5O1xuICAgICAgY29uc3QgY3VzdG9tID0gY3VzdG9tRW1vamlJbmRleC5ieU5hbWUodW5pY29kZU9yTmFtZSk7XG4gICAgICBpZiAoY3VzdG9tKSB7XG4gICAgICAgIHJldHVybiBhZGRSZXN1bHQoY3VzdG9tKVxuICAgICAgfVxuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBkb25lIGluIHBhcmFsbGVsIChpLmUuIG1ha2UgdGhlIGN1cnNvciBhbmQgdGhlIGdldCgpcyBwYXJhbGxlbGl6ZWQpLFxuICAgICAgLy8gYnV0IG15IHRlc3Rpbmcgc3VnZ2VzdHMgaXQncyBub3QgYWN0dWFsbHkgZmFzdGVyLlxuICAgICAgZ2V0SURCKGVtb2ppU3RvcmUsIHVuaWNvZGVPck5hbWUsIGVtb2ppID0+IHtcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgcmV0dXJuIGFkZFJlc3VsdChlbW9qaSlcbiAgICAgICAgfVxuICAgICAgICAvLyBlbW9qaSBub3QgZm91bmQgc29tZWhvdywgaWdub3JlIChtYXkgaGFwcGVuIGlmIGN1c3RvbSBlbW9qaSBjaGFuZ2UpXG4gICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSlcbn1cblxuLy8gdHJpZSBkYXRhIHN0cnVjdHVyZSBmb3IgcHJlZml4IHNlYXJjaGVzXG4vLyBsb29zZWx5IGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9zdWJzdHJpbmctdHJpZVxuXG5jb25zdCBDT0RBX01BUktFUiA9ICcnOyAvLyBtYXJrcyB0aGUgZW5kIG9mIHRoZSBzdHJpbmdcblxuZnVuY3Rpb24gdHJpZSAoYXJyLCBpdGVtVG9Ub2tlbnMpIHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgY29uc3QgdG9rZW5zID0gaXRlbVRvVG9rZW5zKGl0ZW0pO1xuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICBsZXQgY3VycmVudE1hcCA9IG1hcDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IHRva2VuLmNoYXJBdChpKTtcbiAgICAgICAgbGV0IG5leHRNYXAgPSBjdXJyZW50TWFwLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCFuZXh0TWFwKSB7XG4gICAgICAgICAgbmV4dE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICBjdXJyZW50TWFwLnNldChjaGFyLCBuZXh0TWFwKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TWFwID0gbmV4dE1hcDtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZXNBdENvZGEgPSBjdXJyZW50TWFwLmdldChDT0RBX01BUktFUik7XG4gICAgICBpZiAoIXZhbHVlc0F0Q29kYSkge1xuICAgICAgICB2YWx1ZXNBdENvZGEgPSBbXTtcbiAgICAgICAgY3VycmVudE1hcC5zZXQoQ09EQV9NQVJLRVIsIHZhbHVlc0F0Q29kYSk7XG4gICAgICB9XG4gICAgICB2YWx1ZXNBdENvZGEucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZWFyY2ggPSAocXVlcnksIGV4YWN0KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRNYXAgPSBtYXA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IHF1ZXJ5LmNoYXJBdChpKTtcbiAgICAgIGNvbnN0IG5leHRNYXAgPSBjdXJyZW50TWFwLmdldChjaGFyKTtcbiAgICAgIGlmIChuZXh0TWFwKSB7XG4gICAgICAgIGN1cnJlbnRNYXAgPSBuZXh0TWFwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4YWN0KSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gY3VycmVudE1hcC5nZXQoQ09EQV9NQVJLRVIpO1xuICAgICAgcmV0dXJuIHJlc3VsdHMgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgLy8gdHJhdmVyc2VcbiAgICBjb25zdCBxdWV1ZSA9IFtjdXJyZW50TWFwXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjdXJyZW50TWFwID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIGNvbnN0IGVudHJpZXNTb3J0ZWRCeUtleSA9IFsuLi5jdXJyZW50TWFwLmVudHJpZXMoKV0uc29ydCgoYSwgYikgPT4gYVswXSA8IGJbMF0gPyAtMSA6IDEpO1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllc1NvcnRlZEJ5S2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09IENPREFfTUFSS0VSKSB7IC8vIENPREFfTUFSS0VSIGFsd2F5cyBjb21lcyBmaXJzdDsgaXQncyB0aGUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9O1xuXG4gIHJldHVybiBzZWFyY2hcbn1cblxuY29uc3QgcmVxdWlyZWRLZXlzJDEgPSBbXG4gICduYW1lJyxcbiAgJ3VybCdcbl07XG5cbmZ1bmN0aW9uIGFzc2VydEN1c3RvbUVtb2ppcyAoY3VzdG9tRW1vamlzKSB7XG4gIGNvbnN0IGlzQXJyYXkgPSBjdXN0b21FbW9qaXMgJiYgQXJyYXkuaXNBcnJheShjdXN0b21FbW9qaXMpO1xuICBjb25zdCBmaXJzdEl0ZW1Jc0ZhdWx0eSA9IGlzQXJyYXkgJiZcbiAgICBjdXN0b21FbW9qaXMubGVuZ3RoICYmXG4gICAgKCFjdXN0b21FbW9qaXNbMF0gfHwgcmVxdWlyZWRLZXlzJDEuc29tZShrZXkgPT4gIShrZXkgaW4gY3VzdG9tRW1vamlzWzBdKSkpO1xuICBpZiAoIWlzQXJyYXkgfHwgZmlyc3RJdGVtSXNGYXVsdHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBlbW9qaXMgYXJlIGluIHRoZSB3cm9uZyBmb3JtYXQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbUVtb2ppSW5kZXggKGN1c3RvbUVtb2ppcykge1xuICBhc3NlcnRDdXN0b21FbW9qaXMoY3VzdG9tRW1vamlzKTtcblxuICBjb25zdCBzb3J0QnlOYW1lID0gKGEsIGIpID0+IGEubmFtZS50b0xvd2VyQ2FzZSgpIDwgYi5uYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDE7XG5cbiAgLy9cbiAgLy8gYWxsKClcbiAgLy9cbiAgY29uc3QgYWxsID0gY3VzdG9tRW1vamlzLnNvcnQoc29ydEJ5TmFtZSk7XG5cbiAgLy9cbiAgLy8gc2VhcmNoKClcbiAgLy9cbiAgY29uc3QgZW1vamlUb1Rva2VucyA9IGVtb2ppID0+IChcbiAgICBbLi4ubmV3IFNldCgoZW1vamkuc2hvcnRjb2RlcyB8fCBbXSkubWFwKHNob3J0Y29kZSA9PiBleHRyYWN0VG9rZW5zKHNob3J0Y29kZSkpLmZsYXQoKSldXG4gICk7XG4gIGNvbnN0IHNlYXJjaFRyaWUgPSB0cmllKGN1c3RvbUVtb2ppcywgZW1vamlUb1Rva2Vucyk7XG4gIGNvbnN0IHNlYXJjaEJ5RXhhY3RNYXRjaCA9IF8gPT4gc2VhcmNoVHJpZShfLCB0cnVlKTtcbiAgY29uc3Qgc2VhcmNoQnlQcmVmaXggPSBfID0+IHNlYXJjaFRyaWUoXywgZmFsc2UpO1xuXG4gIC8vIFNlYXJjaCBieSBxdWVyeSBmb3IgY3VzdG9tIGVtb2ppLiBTaW1pbGFyIHRvIGhvdyB3ZSBkbyB0aGlzIGluIElEQiwgdGhlIGxhc3QgdG9rZW5cbiAgLy8gaXMgdHJlYXRlZCBhcyBhIHByZWZpeCBzZWFyY2gsIGJ1dCBldmVyeSBvdGhlciBvbmUgaXMgdHJlYXRlZCBhcyBhbiBleGFjdCBtYXRjaC5cbiAgLy8gVGhlbiB3ZSBBTkQgdGhlIHJlc3VsdHMgdG9nZXRoZXJcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkgPT4ge1xuICAgIGNvbnN0IHRva2VucyA9IGV4dHJhY3RUb2tlbnMocXVlcnkpO1xuICAgIGNvbnN0IGludGVybWVkaWF0ZVJlc3VsdHMgPSB0b2tlbnMubWFwKCh0b2tlbiwgaSkgPT4gKFxuICAgICAgKGkgPCB0b2tlbnMubGVuZ3RoIC0gMSA/IHNlYXJjaEJ5RXhhY3RNYXRjaCA6IHNlYXJjaEJ5UHJlZml4KSh0b2tlbilcbiAgICApKTtcbiAgICByZXR1cm4gZmluZENvbW1vbk1lbWJlcnMoaW50ZXJtZWRpYXRlUmVzdWx0cywgXyA9PiBfLm5hbWUpLnNvcnQoc29ydEJ5TmFtZSlcbiAgfTtcblxuICAvL1xuICAvLyBieVNob3J0Y29kZSwgYnlOYW1lXG4gIC8vXG4gIGNvbnN0IHNob3J0Y29kZVRvRW1vamkgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG5hbWVUb0Vtb2ppID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IGN1c3RvbUVtb2ppIG9mIGN1c3RvbUVtb2ppcykge1xuICAgIG5hbWVUb0Vtb2ppLnNldChjdXN0b21FbW9qaS5uYW1lLnRvTG93ZXJDYXNlKCksIGN1c3RvbUVtb2ppKTtcbiAgICBmb3IgKGNvbnN0IHNob3J0Y29kZSBvZiAoY3VzdG9tRW1vamkuc2hvcnRjb2RlcyB8fCBbXSkpIHtcbiAgICAgIHNob3J0Y29kZVRvRW1vamkuc2V0KHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpLCBjdXN0b21FbW9qaSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnlTaG9ydGNvZGUgPSBzaG9ydGNvZGUgPT4gc2hvcnRjb2RlVG9FbW9qaS5nZXQoc2hvcnRjb2RlLnRvTG93ZXJDYXNlKCkpO1xuICBjb25zdCBieU5hbWUgPSBuYW1lID0+IG5hbWVUb0Vtb2ppLmdldChuYW1lLnRvTG93ZXJDYXNlKCkpO1xuXG4gIHJldHVybiB7XG4gICAgYWxsLFxuICAgIHNlYXJjaCxcbiAgICBieVNob3J0Y29kZSxcbiAgICBieU5hbWVcbiAgfVxufVxuXG5jb25zdCBpc0ZpcmVmb3hDb250ZW50U2NyaXB0ID0gdHlwZW9mIHdyYXBwZWRKU09iamVjdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIHJlbW92ZSBzb21lIGludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIGkuZS4gdGhlIFwidG9rZW5zXCIgYXJyYXkgb24gdGhlIGVtb2ppIG9iamVjdFxuLy8gZXNzZW50aWFsbHksIGNvbnZlcnQgdGhlIGVtb2ppIGZyb20gdGhlIHZlcnNpb24gc3RvcmVkIGluIElEQiB0byB0aGUgdmVyc2lvbiB1c2VkIGluLW1lbW9yeVxuZnVuY3Rpb24gY2xlYW5FbW9qaSAoZW1vamkpIHtcbiAgaWYgKCFlbW9qaSkge1xuICAgIHJldHVybiBlbW9qaVxuICB9XG4gIC8vIGlmIGluc2lkZSBhIEZpcmVmb3ggY29udGVudCBzY3JpcHQsIG5lZWQgdG8gY2xvbmUgdGhlIGVtb2ppIG9iamVjdCB0byBwcmV2ZW50IEZpcmVmb3ggZnJvbSBjb21wbGFpbmluZyBhYm91dFxuICAvLyBjcm9zcy1vcmlnaW4gb2JqZWN0LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9lbW9qaS1waWNrZXItZWxlbWVudC9pc3N1ZXMvMzU2XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNGaXJlZm94Q29udGVudFNjcmlwdCkge1xuICAgIGVtb2ppID0gc3RydWN0dXJlZENsb25lKGVtb2ppKTtcbiAgfVxuICBkZWxldGUgZW1vamkudG9rZW5zO1xuICBpZiAoZW1vamkuc2tpblRvbmVzKSB7XG4gICAgY29uc3QgbGVuID0gZW1vamkuc2tpblRvbmVzLmxlbmd0aDtcbiAgICBlbW9qaS5za2lucyA9IEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZW1vamkuc2tpbnNbaV0gPSB7XG4gICAgICAgIHRvbmU6IGVtb2ppLnNraW5Ub25lc1tpXSxcbiAgICAgICAgdW5pY29kZTogZW1vamkuc2tpblVuaWNvZGVzW2ldLFxuICAgICAgICB2ZXJzaW9uOiBlbW9qaS5za2luVmVyc2lvbnNbaV1cbiAgICAgIH07XG4gICAgfVxuICAgIGRlbGV0ZSBlbW9qaS5za2luVG9uZXM7XG4gICAgZGVsZXRlIGVtb2ppLnNraW5Vbmljb2RlcztcbiAgICBkZWxldGUgZW1vamkuc2tpblZlcnNpb25zO1xuICB9XG4gIHJldHVybiBlbW9qaVxufVxuXG5mdW5jdGlvbiB3YXJuRVRhZyAoZVRhZykge1xuICBpZiAoIWVUYWcpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Vtb2ppLXBpY2tlci1lbGVtZW50IGlzIG1vcmUgZWZmaWNpZW50IGlmIHRoZSBkYXRhU291cmNlIHNlcnZlciBleHBvc2VzIGFuIEVUYWcgaGVhZGVyLicpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVpcmVkS2V5cyA9IFtcbiAgJ2Fubm90YXRpb24nLFxuICAnZW1vamknLFxuICAnZ3JvdXAnLFxuICAnb3JkZXInLFxuICAndGFncycsXG4gICd2ZXJzaW9uJ1xuXTtcblxuZnVuY3Rpb24gYXNzZXJ0RW1vamlEYXRhIChlbW9qaURhdGEpIHtcbiAgaWYgKCFlbW9qaURhdGEgfHxcbiAgICAhQXJyYXkuaXNBcnJheShlbW9qaURhdGEpIHx8XG4gICAgIWVtb2ppRGF0YVswXSB8fFxuICAgICh0eXBlb2YgZW1vamlEYXRhWzBdICE9PSAnb2JqZWN0JykgfHxcbiAgICByZXF1aXJlZEtleXMuc29tZShrZXkgPT4gKCEoa2V5IGluIGVtb2ppRGF0YVswXSkpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW1vamkgZGF0YSBpcyBpbiB0aGUgd3JvbmcgZm9ybWF0JylcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTdGF0dXMgKHJlc3BvbnNlLCBkYXRhU291cmNlKSB7XG4gIGlmIChNYXRoLmZsb29yKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgIT09IDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaDogJyArIGRhdGFTb3VyY2UgKyAnOiAgJyArIHJlc3BvbnNlLnN0YXR1cylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFVGFnIChkYXRhU291cmNlKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVNvdXJjZSwgeyBtZXRob2Q6ICdIRUFEJyB9KTtcbiAgYXNzZXJ0U3RhdHVzKHJlc3BvbnNlLCBkYXRhU291cmNlKTtcbiAgY29uc3QgZVRhZyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdldGFnJyk7XG4gIHdhcm5FVGFnKGVUYWcpO1xuICByZXR1cm4gZVRhZ1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFVGFnQW5kRGF0YSAoZGF0YVNvdXJjZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFTb3VyY2UpO1xuICBhc3NlcnRTdGF0dXMocmVzcG9uc2UsIGRhdGFTb3VyY2UpO1xuICBjb25zdCBlVGFnID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2V0YWcnKTtcbiAgd2FybkVUYWcoZVRhZyk7XG4gIGNvbnN0IGVtb2ppRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgYXNzZXJ0RW1vamlEYXRhKGVtb2ppRGF0YSk7XG4gIHJldHVybiBbZVRhZywgZW1vamlEYXRhXVxufVxuXG4vLyBUT0RPOiBpbmNsdWRpbmcgdGhlc2UgaW4gYmxvYi11dGlsLnRzIGNhdXNlcyB0eXBlZG9jIHRvIGdlbmVyYXRlIGRvY3MgZm9yIHRoZW0sXG4vLyBldmVuIHdpdGggLS1leGNsdWRlUHJpdmF0ZSDCr1xcXyjjg4QpXy/Cr1xuLyoqIEBwcml2YXRlICovXG4vKipcbiAqIENvbnZlcnQgYW4gYEFycmF5QnVmZmVyYCB0byBhIGJpbmFyeSBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIG15U3RyaW5nID0gYmxvYlV0aWwuYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhhcnJheUJ1ZmYpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYnVmZmVyIC0gYXJyYXkgYnVmZmVyXG4gKiBAcmV0dXJucyBiaW5hcnkgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcoYnVmZmVyKSB7XG4gICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XG4gICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmFyeTtcbn1cbi8qKlxuICogQ29udmVydCBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYEFycmF5QnVmZmVyYC5cbiAqXG4gKiBgYGBqc1xuICogdmFyIG15QnVmZmVyID0gYmxvYlV0aWwuYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcihiaW5hcnlTdHJpbmcpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYmluYXJ5IC0gYmluYXJ5IHN0cmluZ1xuICogQHJldHVybnMgYXJyYXkgYnVmZmVyXG4gKi9cbmZ1bmN0aW9uIGJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoYmluYXJ5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGJpbmFyeS5sZW5ndGg7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIHZhciBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xuICAgICAgICBhcnJbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gZ2VuZXJhdGUgYSBjaGVja3N1bSBiYXNlZCBvbiB0aGUgc3RyaW5naWZpZWQgSlNPTlxuYXN5bmMgZnVuY3Rpb24ganNvbkNoZWNrc3VtIChvYmplY3QpIHtcbiAgY29uc3QgaW5TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICBjb25zdCBpbkJ1ZmZlciA9IGJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoaW5TdHJpbmcpO1xuICAvLyB0aGlzIGRvZXMgbm90IG5lZWQgdG8gYmUgY3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlLCBTSEEtMSBpcyBmaW5lXG4gIGNvbnN0IG91dEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMScsIGluQnVmZmVyKTtcbiAgY29uc3Qgb3V0QmluU3RyaW5nID0gYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhvdXRCdWZmZXIpO1xuICBjb25zdCByZXMgPSBidG9hKG91dEJpblN0cmluZyk7XG4gIHJldHVybiByZXNcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzIChkYiwgZGF0YVNvdXJjZSkge1xuICAvLyBqdXN0IGRvIGEgc2ltcGxlIEhFQUQgcmVxdWVzdCBmaXJzdCB0byBzZWUgaWYgdGhlIGVUYWdzIG1hdGNoXG4gIGxldCBlbW9qaURhdGE7XG4gIGxldCBlVGFnID0gYXdhaXQgZ2V0RVRhZyhkYXRhU291cmNlKTtcbiAgaWYgKCFlVGFnKSB7IC8vIHdvcmsgYXJvdW5kIGxhY2sgb2YgRVRhZy9BY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVyc1xuICAgIGNvbnN0IGVUYWdBbmREYXRhID0gYXdhaXQgZ2V0RVRhZ0FuZERhdGEoZGF0YVNvdXJjZSk7XG4gICAgZVRhZyA9IGVUYWdBbmREYXRhWzBdO1xuICAgIGVtb2ppRGF0YSA9IGVUYWdBbmREYXRhWzFdO1xuICAgIGlmICghZVRhZykge1xuICAgICAgZVRhZyA9IGF3YWl0IGpzb25DaGVja3N1bShlbW9qaURhdGEpO1xuICAgIH1cbiAgfVxuICBpZiAoYXdhaXQgaGFzRGF0YShkYiwgZGF0YVNvdXJjZSwgZVRhZykpIDsgZWxzZSB7XG4gICAgaWYgKCFlbW9qaURhdGEpIHtcbiAgICAgIGNvbnN0IGVUYWdBbmREYXRhID0gYXdhaXQgZ2V0RVRhZ0FuZERhdGEoZGF0YVNvdXJjZSk7XG4gICAgICBlbW9qaURhdGEgPSBlVGFnQW5kRGF0YVsxXTtcbiAgICB9XG4gICAgYXdhaXQgbG9hZERhdGEoZGIsIGVtb2ppRGF0YSwgZGF0YVNvdXJjZSwgZVRhZyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGFGb3JGaXJzdFRpbWUgKGRiLCBkYXRhU291cmNlKSB7XG4gIGxldCBbZVRhZywgZW1vamlEYXRhXSA9IGF3YWl0IGdldEVUYWdBbmREYXRhKGRhdGFTb3VyY2UpO1xuICBpZiAoIWVUYWcpIHtcbiAgICAvLyBIYW5kbGUgbGFjayBvZiBzdXBwb3J0IGZvciBFVGFnIG9yIEFjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL0FjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuICAgIGVUYWcgPSBhd2FpdCBqc29uQ2hlY2tzdW0oZW1vamlEYXRhKTtcbiAgfVxuXG4gIGF3YWl0IGxvYWREYXRhKGRiLCBlbW9qaURhdGEsIGRhdGFTb3VyY2UsIGVUYWcpO1xufVxuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yICh7IGRhdGFTb3VyY2UgPSBERUZBVUxUX0RBVEFfU09VUkNFLCBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRSwgY3VzdG9tRW1vamkgPSBbXSB9ID0ge30pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuX2RiTmFtZSA9IGBlbW9qaS1waWNrZXItZWxlbWVudC0ke3RoaXMubG9jYWxlfWA7XG4gICAgdGhpcy5fZGIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbGF6eVVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b21FbW9qaUluZGV4KGN1c3RvbUVtb2ppKTtcblxuICAgIHRoaXMuX2NsZWFyID0gdGhpcy5fY2xlYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9yZWFkeSA9IHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIGFzeW5jIF9pbml0ICgpIHtcbiAgICBjb25zdCBkYiA9IHRoaXMuX2RiID0gYXdhaXQgb3BlbkRhdGFiYXNlKHRoaXMuX2RiTmFtZSk7XG5cbiAgICBhZGRPbkNsb3NlTGlzdGVuZXIodGhpcy5fZGJOYW1lLCB0aGlzLl9jbGVhcik7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICBjb25zdCBlbXB0eSA9IGF3YWl0IGlzRW1wdHkoZGIpO1xuXG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBhd2FpdCBsb2FkRGF0YUZvckZpcnN0VGltZShkYiwgZGF0YVNvdXJjZSk7XG4gICAgfSBlbHNlIHsgLy8gb2ZmbGluZS1maXJzdCAtIGRvIGFuIHVwZGF0ZSBhc3luY2hyb25vdXNseVxuICAgICAgdGhpcy5fbGF6eVVwZGF0ZSA9IGNoZWNrRm9yVXBkYXRlcyhkYiwgZGF0YVNvdXJjZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVhZHkgKCkge1xuICAgIGNvbnN0IGNoZWNrUmVhZHkgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3JlYWR5KSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdGhpcy5faW5pdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5XG4gICAgfTtcbiAgICBhd2FpdCBjaGVja1JlYWR5KCk7XG4gICAgLy8gVGhlcmUncyBhIHBvc3NpYmlsaXR5IG9mIGEgcmFjZSBjb25kaXRpb24gd2hlcmUgdGhlIGVsZW1lbnQgZ2V0cyBhZGRlZCwgcmVtb3ZlZCwgYW5kIHRoZW4gYWRkZWQgYWdhaW5cbiAgICAvLyB3aXRoIGEgcGFydGljdWxhciB0aW1pbmcsIHdoaWNoIHdvdWxkIHNldCB0aGUgX2RiIHRvIHVuZGVmaW5lZC5cbiAgICAvLyBXZSAqY291bGQqIGRvIGEgd2hpbGUgbG9vcCBoZXJlLCBidXQgdGhhdCBzZWVtcyBleGNlc3NpdmUgYW5kIGNvdWxkIGxlYWQgdG8gYW4gaW5maW5pdGUgbG9vcC5cbiAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICBhd2FpdCBjaGVja1JlYWR5KCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeUdyb3VwIChncm91cCkge1xuICAgIGFzc2VydE51bWJlcihncm91cCk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiB1bmlxRW1vamkoYXdhaXQgZ2V0RW1vamlCeUdyb3VwKHRoaXMuX2RiLCBncm91cCkpLm1hcChjbGVhbkVtb2ppKVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5IChxdWVyeSkge1xuICAgIGFzc2VydE5vbkVtcHR5U3RyaW5nKHF1ZXJ5KTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgY3VzdG9tcyA9IHRoaXMuX2N1c3RvbS5zZWFyY2gocXVlcnkpO1xuICAgIGNvbnN0IG5hdGl2ZXMgPSB1bmlxRW1vamkoYXdhaXQgZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5KHRoaXMuX2RiLCBxdWVyeSkpLm1hcChjbGVhbkVtb2ppKTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uY3VzdG9tcyxcbiAgICAgIC4uLm5hdGl2ZXNcbiAgICBdXG4gIH1cblxuICBhc3luYyBnZXRFbW9qaUJ5U2hvcnRjb2RlIChzaG9ydGNvZGUpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyhzaG9ydGNvZGUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICBjb25zdCBjdXN0b20gPSB0aGlzLl9jdXN0b20uYnlTaG9ydGNvZGUoc2hvcnRjb2RlKTtcbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICByZXR1cm4gY3VzdG9tXG4gICAgfVxuICAgIHJldHVybiBjbGVhbkVtb2ppKGF3YWl0IGdldEVtb2ppQnlTaG9ydGNvZGUodGhpcy5fZGIsIHNob3J0Y29kZSkpXG4gIH1cblxuICBhc3luYyBnZXRFbW9qaUJ5VW5pY29kZU9yTmFtZSAodW5pY29kZU9yTmFtZSkge1xuICAgIGFzc2VydE5vbkVtcHR5U3RyaW5nKHVuaWNvZGVPck5hbWUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICBjb25zdCBjdXN0b20gPSB0aGlzLl9jdXN0b20uYnlOYW1lKHVuaWNvZGVPck5hbWUpO1xuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIHJldHVybiBjdXN0b21cbiAgICB9XG4gICAgcmV0dXJuIGNsZWFuRW1vamkoYXdhaXQgZ2V0RW1vamlCeVVuaWNvZGUodGhpcy5fZGIsIHVuaWNvZGVPck5hbWUpKVxuICB9XG5cbiAgYXN5bmMgZ2V0UHJlZmVycmVkU2tpblRvbmUgKCkge1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gKGF3YWl0IGdldCh0aGlzLl9kYiwgU1RPUkVfS0VZVkFMVUUsIEtFWV9QUkVGRVJSRURfU0tJTlRPTkUpKSB8fCAwXG4gIH1cblxuICBhc3luYyBzZXRQcmVmZXJyZWRTa2luVG9uZSAoc2tpblRvbmUpIHtcbiAgICBhc3NlcnROdW1iZXIoc2tpblRvbmUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gc2V0KHRoaXMuX2RiLCBTVE9SRV9LRVlWQUxVRSwgS0VZX1BSRUZFUlJFRF9TS0lOVE9ORSwgc2tpblRvbmUpXG4gIH1cblxuICBhc3luYyBpbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyh1bmljb2RlT3JOYW1lKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIGluY3JlbWVudEZhdm9yaXRlRW1vamlDb3VudCh0aGlzLl9kYiwgdW5pY29kZU9yTmFtZSlcbiAgfVxuXG4gIGFzeW5jIGdldFRvcEZhdm9yaXRlRW1vamkgKGxpbWl0KSB7XG4gICAgYXNzZXJ0TnVtYmVyKGxpbWl0KTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIChhd2FpdCBnZXRUb3BGYXZvcml0ZUVtb2ppKHRoaXMuX2RiLCB0aGlzLl9jdXN0b20sIGxpbWl0KSkubWFwKGNsZWFuRW1vamkpXG4gIH1cblxuICBzZXQgY3VzdG9tRW1vamkgKGN1c3RvbUVtb2ppcykge1xuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbUVtb2ppSW5kZXgoY3VzdG9tRW1vamlzKTtcbiAgfVxuXG4gIGdldCBjdXN0b21FbW9qaSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbS5hbGxcbiAgfVxuXG4gIGFzeW5jIF9zaHV0ZG93biAoKSB7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpOyAvLyByZW9wZW4gaWYgd2UndmUgYWxyZWFkeSBiZWVuIGNsb3NlZC9kZWxldGVkXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2xhenlVcGRhdGU7IC8vIGFsbG93IGFueSBsYXp5IHVwZGF0ZXMgdG8gcHJvY2VzcyBiZWZvcmUgY2xvc2luZy9kZWxldGluZ1xuICAgIH0gY2F0Y2ggKGVycikgeyAvKiBpZ25vcmUgbmV0d29yayBlcnJvcnMgKG9mZmxpbmUtZmlyc3QpICovIH1cbiAgfVxuXG4gIC8vIGNsZWFyIHJlZmVyZW5jZXMgdG8gSURCLCBlLmcuIGR1cmluZyBhIGNsb3NlIGV2ZW50XG4gIF9jbGVhciAoKSB7XG4gICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBjYWxsIHJlbW92ZUV2ZW50TGlzdGVuZXIgb3IgcmVtb3ZlIHRoZSBtYW51YWwgXCJjbG9zZVwiIGxpc3RlbmVycy5cbiAgICAvLyBUaGUgbWVtb3J5IGxlYWsgdGVzdHMgcHJvdmUgdGhpcyBpcyB1bm5lY2Vzc2FyeS4gSXQncyBiZWNhdXNlOlxuICAgIC8vIDEpIElEQkRhdGFiYXNlcyB0aGF0IGNhbiBubyBsb25nZXIgZmlyZSBcImNsb3NlXCIgYXV0b21hdGljYWxseSBoYXZlIGxpc3RlbmVycyBHQ2VkXG4gICAgLy8gMikgd2UgY2xlYXIgdGhlIG1hbnVhbCBjbG9zZSBsaXN0ZW5lcnMgaW4gZGF0YWJhc2VMaWZlY3ljbGUuanMuXG4gICAgdGhpcy5fZGIgPSB0aGlzLl9yZWFkeSA9IHRoaXMuX2xhenlVcGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBjbG9zZSAoKSB7XG4gICAgYXdhaXQgdGhpcy5fc2h1dGRvd24oKTtcbiAgICBhd2FpdCBjbG9zZURhdGFiYXNlKHRoaXMuX2RiTmFtZSk7XG4gIH1cblxuICBhc3luYyBkZWxldGUgKCkge1xuICAgIGF3YWl0IHRoaXMuX3NodXRkb3duKCk7XG4gICAgYXdhaXQgZGVsZXRlRGF0YWJhc2UodGhpcy5fZGJOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgeyBEYXRhYmFzZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgUGlja2VyIGZyb20gJy4vcGlja2VyLmpzJ1xuaW1wb3J0IERhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UuanMnXG5leHBvcnQgeyBQaWNrZXIsIERhdGFiYXNlIH1cbiIsImltcG9ydCBEYXRhYmFzZSBmcm9tICcuL2RhdGFiYXNlLmpzJztcblxuLy8gdmlhIGh0dHBzOi8vdW5wa2cuY29tL2Jyb3dzZS9lbW9qaWJhc2UtZGF0YUA2LjAuMC9tZXRhL2dyb3Vwcy5qc29uXG5jb25zdCBhbGxHcm91cHMgPSBbXG4gIFstMSwgJ+KcqCcsICdjdXN0b20nXSxcbiAgWzAsICfwn5iAJywgJ3NtaWxleXMtZW1vdGlvbiddLFxuICBbMSwgJ/CfkYsnLCAncGVvcGxlLWJvZHknXSxcbiAgWzMsICfwn5CxJywgJ2FuaW1hbHMtbmF0dXJlJ10sXG4gIFs0LCAn8J+NjicsICdmb29kLWRyaW5rJ10sXG4gIFs1LCAn8J+PoO+4jycsICd0cmF2ZWwtcGxhY2VzJ10sXG4gIFs2LCAn4pq9JywgJ2FjdGl2aXRpZXMnXSxcbiAgWzcsICfwn5OdJywgJ29iamVjdHMnXSxcbiAgWzgsICfim5TvuI8nLCAnc3ltYm9scyddLFxuICBbOSwgJ/Cfj4EnLCAnZmxhZ3MnXVxuXS5tYXAoKFtpZCwgZW1vamksIG5hbWVdKSA9PiAoeyBpZCwgZW1vamksIG5hbWUgfSkpO1xuXG5jb25zdCBncm91cHMgPSBhbGxHcm91cHMuc2xpY2UoMSk7XG5cbmNvbnN0IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEggPSAyO1xuY29uc3QgTlVNX1NLSU5fVE9ORVMgPSA2O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgcklDID0gdHlwZW9mIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyByZXF1ZXN0SWRsZUNhbGxiYWNrIDogc2V0VGltZW91dDtcblxuLy8gY2hlY2sgZm9yIFpXSiAoemVybyB3aWR0aCBqb2luZXIpIGNoYXJhY3RlclxuZnVuY3Rpb24gaGFzWndqIChlbW9qaSkge1xuICByZXR1cm4gZW1vamkudW5pY29kZS5pbmNsdWRlcygnXFx1MjAwZCcpXG59XG5cbi8vIEZpbmQgb25lIGdvb2QgcmVwcmVzZW50YXRpdmUgZW1vamkgZnJvbSBlYWNoIHZlcnNpb24gdG8gdGVzdCBieSBjaGVja2luZyBpdHMgY29sb3IuXG4vLyBJZGVhbGx5IGl0IHNob3VsZCBoYXZlIGNvbG9yIGluIHRoZSBjZW50ZXIuIEZvciBzb21lIGluc3BpcmF0aW9uLCBzZWU6XG4vLyBodHRwczovL2Fib3V0LmdpdGxhYi5jb20vYmxvZy8yMDE4LzA1LzMwL2pvdXJuZXktaW4tbmF0aXZlLXVuaWNvZGUtZW1vamkvXG4vL1xuLy8gTm90ZSB0aGF0IGZvciBjZXJ0YWluIHZlcnNpb25zICgxMi4xLCAxMy4xKSwgdGhlcmUgaXMgbm8gcG9pbnQgaW4gdGVzdGluZyB0aGVtIGV4cGxpY2l0bHksIGJlY2F1c2Vcbi8vIGFsbCB0aGUgZW1vamkgZnJvbSB0aGlzIHZlcnNpb24gYXJlIGNvbXBvdW5kLWVtb2ppIGZyb20gcHJldmlvdXMgdmVyc2lvbnMuIFNvIHRoZXkgd291bGQgcGFzcyBhIGNvbG9yXG4vLyB0ZXN0LCBldmVuIGluIGJyb3dzZXJzIHRoYXQgZGlzcGxheSB0aGVtIGFzIGRvdWJsZSBlbW9qaS4gKEUuZy4gXCJmYWNlIGluIGNsb3Vkc1wiIG1pZ2h0IHJlbmRlciBhc1xuLy8gXCJmYWNlIHdpdGhvdXQgbW91dGhcIiBwbHVzIFwiZm9nXCIuKSBUaGVzZSBlbW9qaSBjYW4gb25seSBiZSBmaWx0ZXJlZCB1c2luZyB0aGUgd2lkdGggdGVzdCxcbi8vIHdoaWNoIGhhcHBlbnMgaW4gY2hlY2tad2pTdXBwb3J0LmpzLlxuY29uc3QgdmVyc2lvbnNBbmRUZXN0RW1vamkgPSB7XG4gICfwn6uoJzogMTUuMSwgLy8gc2hha2luZyBoZWFkLCB0ZWNobmljYWxseSBmcm9tIHYxNSBidXQgc2VlIG5vdGUgYWJvdmVcbiAgJ/Cfq6AnOiAxNCxcbiAgJ/CfpbInOiAxMy4xLCAvLyBzbWlsaW5nIGZhY2Ugd2l0aCB0ZWFyLCB0ZWNobmljYWxseSBmcm9tIHYxMyBidXQgc2VlIG5vdGUgYWJvdmVcbiAgJ/CfpbsnOiAxMi4xLCAvLyBzYXJpLCB0ZWNobmljYWxseSBmcm9tIHYxMiBidXQgc2VlIG5vdGUgYWJvdmVcbiAgJ/CfpbAnOiAxMSxcbiAgJ/CfpKknOiA1LFxuICAn8J+RseKAjeKZgO+4jyc6IDQsXG4gICfwn6SjJzogMyxcbiAgJ/CfkYHvuI/igI3wn5eo77iPJzogMixcbiAgJ/CfmIAnOiAxLFxuICAn8J+YkO+4jyc6IDAuNyxcbiAgJ/CfmIMnOiAwLjZcbn07XG5cbmNvbnN0IFRJTUVPVVRfQkVGT1JFX0xPQURJTkdfTUVTU0FHRSA9IDEwMDA7IC8vIDEgc2Vjb25kXG5jb25zdCBERUZBVUxUX1NLSU5fVE9ORV9FTU9KSSA9ICfwn5aQ77iPJztcbmNvbnN0IERFRkFVTFRfTlVNX0NPTFVNTlMgPSA4O1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2ZpdmV0aGlydHllaWdodC5jb20vZmVhdHVyZXMvdGhlLTEwMC1tb3N0LXVzZWQtZW1vamlzLyBhbmRcbi8vIGh0dHBzOi8vYmxvZy5lbW9qaXBlZGlhLm9yZy9mYWNlYm9vay1yZXZlYWxzLW1vc3QtYW5kLWxlYXN0LXVzZWQtZW1vamlzLyB3aXRoXG4vLyBhIGJpdCBvZiBteSBvd24gY3VyYXRpb24uIChFLmcuIGF2b2lkIHRoZSBcIk9LXCIgZ2VzdHVyZSBiZWNhdXNlIG9mIGNvbm5vdGF0aW9uczpcbi8vIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvb2staGFuZC8pXG5jb25zdCBNT1NUX0NPTU1PTkxZX1VTRURfRU1PSkkgPSBbXG4gICfwn5iKJyxcbiAgJ/CfmJInLFxuICAn4p2k77iPJyxcbiAgJ/CfkY3vuI8nLFxuICAn8J+YjScsXG4gICfwn5iCJyxcbiAgJ/CfmK0nLFxuICAn4pi677iPJyxcbiAgJ/CfmJQnLFxuICAn8J+YqScsXG4gICfwn5iPJyxcbiAgJ/CfkpUnLFxuICAn8J+ZjCcsXG4gICfwn5iYJ1xuXTtcblxuLy8gSXQncyBpbXBvcnRhbnQgdG8gbGlzdCBUd2Vtb2ppIE1vemlsbGEgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSwgYmVjYXVzZSBNb3ppbGxhIGJ1bmRsZXMgdGhlaXJcbi8vIG93biBmb250IG9uIHNvbWUgcGxhdGZvcm1zIChub3RhYmx5IFdpbmRvd3MgYW5kIExpbnV4IGFzIG9mIHRoaXMgd3JpdGluZykuIFR5cGljYWxseSwgTW96aWxsYVxuLy8gdXBkYXRlcyBmYXN0ZXIgdGhhbiB0aGUgdW5kZXJseWluZyBPUywgYW5kIHdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIG9sZGVyIGVtb2ppIGluIG9uZSBmb250IGFuZFxuLy8gbmV3ZXIgZW1vamkgaW4gYW5vdGhlciBmb250OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL2Vtb2ppLXBpY2tlci1lbGVtZW50L3B1bGwvMjY4I2lzc3VlY29tbWVudC0xMDczMzQ3MjgzXG5jb25zdCBGT05UX0ZBTUlMWSA9ICdcIlR3ZW1vamkgTW96aWxsYVwiLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIiwnICtcbiAgJ1wiTm90byBDb2xvciBFbW9qaVwiLFwiRW1vamlPbmUgQ29sb3JcIixcIkFuZHJvaWQgRW1vamlcIixzYW5zLXNlcmlmJztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IERFRkFVTFRfQ0FURUdPUllfU09SVElORyA9IChhLCBiKSA9PiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcblxuLy8gVGVzdCBpZiBhbiBlbW9qaSBpcyBzdXBwb3J0ZWQgYnkgcmVuZGVyaW5nIGl0IHRvIGNhbnZhcyBhbmQgY2hlY2tpbmcgdGhhdCB0aGUgY29sb3IgaXMgbm90IGJsYWNrXG4vLyBTZWUgaHR0cHM6Ly9hYm91dC5naXRsYWIuY29tL2Jsb2cvMjAxOC8wNS8zMC9qb3VybmV5LWluLW5hdGl2ZS11bmljb2RlLWVtb2ppL1xuLy8gYW5kIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2lmLWVtb2ppIGZvciBpbnNwaXJhdGlvblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBsYXJnZWx5IGJvcnJvd2VkIGZyb20gaWYtZW1vamksIGFkZGluZyB0aGUgZm9udC1mYW1pbHlcblxuXG5jb25zdCBnZXRUZXh0RmVhdHVyZSA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IDE7XG5cbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgY3R4LmZvbnQgPSBgMTAwcHggJHtGT05UX0ZBTUlMWX1gO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5zY2FsZSgwLjAxLCAwLjAxKTtcbiAgY3R4LmZpbGxUZXh0KHRleHQsIDAsIDApO1xuXG4gIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGFcbn07XG5cbmNvbnN0IGNvbXBhcmVGZWF0dXJlcyA9IChmZWF0dXJlMSwgZmVhdHVyZTIpID0+IHtcbiAgY29uc3QgZmVhdHVyZTFTdHIgPSBbLi4uZmVhdHVyZTFdLmpvaW4oJywnKTtcbiAgY29uc3QgZmVhdHVyZTJTdHIgPSBbLi4uZmVhdHVyZTJdLmpvaW4oJywnKTtcbiAgLy8gVGhpcyBpcyBSR0JBLCBzbyBmb3IgMCwwLDAsIHdlIGFyZSBjaGVja2luZyB0aGF0IHRoZSBmaXJzdCBSR0IgaXMgbm90IGFsbCB6ZXJvZXMuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgd2hlbiB1bnN1cHBvcnRlZCB0aGlzIGlzIDAsMCwwLDAsIGJ1dCBvbiBDaHJvbWUgb24gTWFjIGl0IGlzXG4gIC8vIDAsMCwwLDYxIC0gdGhlcmUgaXMgYSB0cmFuc3BhcmVuY3kgaGVyZS5cbiAgcmV0dXJuIGZlYXR1cmUxU3RyID09PSBmZWF0dXJlMlN0ciAmJiAhZmVhdHVyZTFTdHIuc3RhcnRzV2l0aCgnMCwwLDAsJylcbn07XG5cbmZ1bmN0aW9uIHRlc3RDb2xvckVtb2ppU3VwcG9ydGVkICh0ZXh0KSB7XG4gIC8vIFJlbmRlciB3aGl0ZSBhbmQgYmxhY2sgYW5kIHRoZW4gY29tcGFyZSB0aGVtIHRvIGVhY2ggb3RoZXIgYW5kIGVuc3VyZSB0aGV5J3JlIHRoZSBzYW1lXG4gIC8vIGNvbG9yLCBhbmQgbmVpdGhlciBvbmUgaXMgYmxhY2suIFRoaXMgc2hvd3MgdGhhdCB0aGUgZW1vamkgd2FzIHJlbmRlcmVkIGluIGNvbG9yLlxuICBjb25zdCBmZWF0dXJlMSA9IGdldFRleHRGZWF0dXJlKHRleHQsICcjMDAwJyk7XG4gIGNvbnN0IGZlYXR1cmUyID0gZ2V0VGV4dEZlYXR1cmUodGV4dCwgJyNmZmYnKTtcbiAgcmV0dXJuIGZlYXR1cmUxICYmIGZlYXR1cmUyICYmIGNvbXBhcmVGZWF0dXJlcyhmZWF0dXJlMSwgZmVhdHVyZTIpXG59XG5cbi8vIHJhdGhlciB0aGFuIGNoZWNrIGV2ZXJ5IGVtb2ppIGV2ZXIsIHdoaWNoIHdvdWxkIGJlIGV4cGVuc2l2ZSwganVzdCBjaGVjayBzb21lIHJlcHJlc2VudGF0aXZlcyBmcm9tIHRoZVxuLy8gZGlmZmVyZW50IGVtb2ppIHJlbGVhc2VzIHRvIGRldGVybWluZSB3aGF0IHRoZSBmb250IHN1cHBvcnRzXG5cbmZ1bmN0aW9uIGRldGVybWluZUVtb2ppU3VwcG9ydExldmVsICgpIHtcbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHZlcnNpb25zQW5kVGVzdEVtb2ppKTtcbiAgdHJ5IHtcbiAgICAvLyBzdGFydCB3aXRoIGxhdGVzdCBlbW9qaSBhbmQgd29yayBiYWNrd2FyZHNcbiAgICBmb3IgKGNvbnN0IFtlbW9qaSwgdmVyc2lvbl0gb2YgZW50cmllcykge1xuICAgICAgaWYgKHRlc3RDb2xvckVtb2ppU3VwcG9ydGVkKGVtb2ppKSkge1xuICAgICAgICByZXR1cm4gdmVyc2lvblxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkgeyAvLyBjYW52YXMgZXJyb3JcbiAgfSBmaW5hbGx5IHtcbiAgfVxuICAvLyBJbiBjYXNlIG9mIGFuIGVycm9yLCBiZSBnZW5lcm91cyBhbmQganVzdCBhc3N1bWUgYWxsIGVtb2ppIGFyZSBzdXBwb3J0ZWQgKGUuZy4gZm9yIGNhbnZhcyBlcnJvcnNcbiAgLy8gZHVlIHRvIGFudGktZmluZ2VycHJpbnRpbmcgYWRkLW9ucykuIEJldHRlciB0byBzaG93IHNvbWUgZ3JheSBib3hlcyB0aGFuIG5vdGhpbmcgYXQgYWxsLlxuICByZXR1cm4gZW50cmllc1swXVsxXSAvLyBmaXJzdCBvbmUgaW4gdGhlIGxpc3QgaXMgdGhlIG1vc3QgcmVjZW50IHZlcnNpb25cbn1cblxuLy8gQ2hlY2sgd2hpY2ggZW1vamlzIHdlIGtub3cgZm9yIHN1cmUgYXJlbid0IHN1cHBvcnRlZCwgYmFzZWQgb24gVW5pY29kZSB2ZXJzaW9uIGxldmVsXG5sZXQgcHJvbWlzZTtcbmNvbnN0IGRldGVjdEVtb2ppU3VwcG9ydExldmVsID0gKCkgPT4ge1xuICBpZiAoIXByb21pc2UpIHtcbiAgICAvLyBEZWxheSBzbyBpdCBjYW4gcnVuIHdoaWxlIHRoZSBJREIgZGF0YWJhc2UgaXMgYmVpbmcgY3JlYXRlZCBieSB0aGUgYnJvd3NlciAob24gYW5vdGhlciB0aHJlYWQpLlxuICAgIC8vIFRoaXMgaGVscHMgZXNwZWNpYWxseSB3aXRoIGZpcnN0IGxvYWQg4oCTIHdlIHdhbnQgdG8gc3RhcnQgcHJlLXBvcHVsYXRpbmcgdGhlIGRhdGFiYXNlIG9uIHRoZSBtYWluIHRocmVhZCxcbiAgICAvLyBhbmQgdGhlbiB3YWl0IGZvciBJREIgdG8gY29tbWl0IGV2ZXJ5dGhpbmcsIGFuZCB3aGlsZSB3YWl0aW5nIHdlIHJ1biB0aGlzIGNoZWNrLlxuICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IChcbiAgICAgIHJJQygoKSA9PiAoXG4gICAgICAgIHJlc29sdmUoZGV0ZXJtaW5lRW1vamlTdXBwb3J0TGV2ZWwoKSkgLy8gZGVsYXkgc28gaWRlYWxseSB0aGlzIGNhbiBydW4gd2hpbGUgSURCIGlzIGZpcnN0IHBvcHVsYXRpbmdcbiAgICAgICkpXG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2Vcbn07XG4vLyBkZXRlcm1pbmUgd2hpY2ggZW1vamlzIGNvbnRhaW5pbmcgWldKICh6ZXJvIHdpZHRoIGpvaW5lcikgY2hhcmFjdGVyc1xuLy8gYXJlIHN1cHBvcnRlZCAocmVuZGVyZWQgYXMgb25lIGdseXBoKSByYXRoZXIgdGhhbiB1bnN1cHBvcnRlZCAocmVuZGVyZWQgYXMgdHdvIG9yIG1vcmUgZ2x5cGhzKVxuY29uc3Qgc3VwcG9ydGVkWndqRW1vamlzID0gbmV3IE1hcCgpO1xuXG5jb25zdCBWQVJJQVRJT05fU0VMRUNUT1IgPSAnXFx1ZmUwZic7XG5jb25zdCBTS0lOVE9ORV9NT0RJRklFUiA9ICdcXHVkODNjJztcbmNvbnN0IFpXSiA9ICdcXHUyMDBkJztcbmNvbnN0IExJR0hUX1NLSU5fVE9ORSA9IDB4MUYzRkI7XG5jb25zdCBMSUdIVF9TS0lOX1RPTkVfTU9ESUZJRVIgPSAweGRmZmI7XG5cbi8vIFRPRE86IHRoaXMgaXMgYSBuYWl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY2FuIGltcHJvdmUgaXQgbGF0ZXJcbi8vIEl0J3Mgb25seSB1c2VkIGZvciB0aGUgc2tpbnRvbmUgcGlja2VyLCBzbyBhcyBsb25nIGFzIHBlb3BsZSBkb24ndCBjdXN0b21pemUgd2l0aFxuLy8gcmVhbGx5IGV4b3RpYyBlbW9qaSB0aGVuIGl0IHNob3VsZCB3b3JrIGZpbmVcbmZ1bmN0aW9uIGFwcGx5U2tpblRvbmUgKHN0ciwgc2tpblRvbmUpIHtcbiAgaWYgKHNraW5Ub25lID09PSAwKSB7XG4gICAgcmV0dXJuIHN0clxuICB9XG4gIGNvbnN0IHp3akluZGV4ID0gc3RyLmluZGV4T2YoWldKKTtcbiAgaWYgKHp3akluZGV4ICE9PSAtMSkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIHp3akluZGV4KSArXG4gICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChMSUdIVF9TS0lOX1RPTkUgKyBza2luVG9uZSAtIDEpICtcbiAgICAgIHN0ci5zdWJzdHJpbmcoendqSW5kZXgpXG4gIH1cbiAgaWYgKHN0ci5lbmRzV2l0aChWQVJJQVRJT05fU0VMRUNUT1IpKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gIH1cbiAgcmV0dXJuIHN0ciArIFNLSU5UT05FX01PRElGSUVSICsgU3RyaW5nLmZyb21Db2RlUG9pbnQoTElHSFRfU0tJTl9UT05FX01PRElGSUVSICsgc2tpblRvbmUgLSAxKVxufVxuXG5mdW5jdGlvbiBoYWx0IChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuLy8gSW1wbGVtZW50YXRpb24gbGVmdC9yaWdodCBvciB1cC9kb3duIG5hdmlnYXRpb24sIGNpcmNsaW5nIGJhY2sgd2hlbiB5b3Vcbi8vIHJlYWNoIHRoZSBzdGFydC9lbmQgb2YgdGhlIGxpc3RcbmZ1bmN0aW9uIGluY3JlbWVudE9yRGVjcmVtZW50IChkZWNyZW1lbnQsIHZhbCwgYXJyKSB7XG4gIHZhbCArPSAoZGVjcmVtZW50ID8gLTEgOiAxKTtcbiAgaWYgKHZhbCA8IDApIHtcbiAgICB2YWwgPSBhcnIubGVuZ3RoIC0gMTtcbiAgfSBlbHNlIGlmICh2YWwgPj0gYXJyLmxlbmd0aCkge1xuICAgIHZhbCA9IDA7XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vLyBsaWtlIGxvZGFzaCdzIHVuaXFCeSBidXQgbXVjaCBzbWFsbGVyXG5mdW5jdGlvbiB1bmlxQnkgKGFyciwgZnVuYykge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgY29uc3Qga2V5ID0gZnVuYyhpdGVtKTtcbiAgICBpZiAoIXNldC5oYXMoa2V5KSkge1xuICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLy8gV2UgZG9uJ3QgbmVlZCBhbGwgdGhlIGRhdGEgb24gZXZlcnkgZW1vamksIGFuZCB0aGVyZSBhcmUgc3BlY2lmaWMgdGhpbmdzIHdlIG5lZWRcbi8vIGZvciB0aGUgVUksIHNvIGJ1aWxkIGEgXCJ2aWV3IG1vZGVsXCIgZnJvbSB0aGUgZW1vamkgb2JqZWN0IHdlIGdvdCBmcm9tIHRoZSBkYXRhYmFzZVxuXG5mdW5jdGlvbiBzdW1tYXJpemVFbW9qaXNGb3JVSSAoZW1vamlzLCBlbW9qaVN1cHBvcnRMZXZlbCkge1xuICBjb25zdCB0b1NpbXBsZVNraW5zTWFwID0gc2tpbnMgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAoY29uc3Qgc2tpbiBvZiBza2lucykge1xuICAgICAgLy8gaWdub3JlIGFycmF5cyBsaWtlIFsxLCAyXSB3aXRoIG11bHRpcGxlIHNraW4gdG9uZXNcbiAgICAgIC8vIGFsc28gaWdub3JlIHZhcmlhbnRzIHRoYXQgYXJlIGluIGFuIHVuc3VwcG9ydGVkIGVtb2ppIHZlcnNpb25cbiAgICAgIC8vICh0aGVzZSBkbyBleGlzdCAtIHZhcmlhbnRzIGZyb20gYSBkaWZmZXJlbnQgdmVyc2lvbiB0aGFuIHRoZWlyIGJhc2UgZW1vamkpXG4gICAgICBpZiAodHlwZW9mIHNraW4udG9uZSA9PT0gJ251bWJlcicgJiYgc2tpbi52ZXJzaW9uIDw9IGVtb2ppU3VwcG9ydExldmVsKSB7XG4gICAgICAgIHJlc1tza2luLnRvbmVdID0gc2tpbi51bmljb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgcmV0dXJuIGVtb2ppcy5tYXAoKHsgdW5pY29kZSwgc2tpbnMsIHNob3J0Y29kZXMsIHVybCwgbmFtZSwgY2F0ZWdvcnksIGFubm90YXRpb24gfSkgPT4gKHtcbiAgICB1bmljb2RlLFxuICAgIG5hbWUsXG4gICAgc2hvcnRjb2RlcyxcbiAgICB1cmwsXG4gICAgY2F0ZWdvcnksXG4gICAgYW5ub3RhdGlvbixcbiAgICBpZDogdW5pY29kZSB8fCBuYW1lLFxuICAgIHNraW5zOiBza2lucyAmJiB0b1NpbXBsZVNraW5zTWFwKHNraW5zKVxuICB9KSlcbn1cblxuLy8gaW1wb3J0IHJBRiBmcm9tIG9uZSBwbGFjZSBzbyB0aGF0IHRoZSBidW5kbGUgc2l6ZSBpcyBhIGJpdCBzbWFsbGVyXG5jb25zdCByQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbi8vIFN2ZWx0ZSBhY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSB3aWR0aCBvZiBhbiBlbGVtZW50IGFuZCBhdXRvLXVwZGF0ZVxuLy8gdXNpbmcgUmVzaXplT2JzZXJ2ZXIuIElmIFJlc2l6ZU9ic2VydmVyIGlzIHVuc3VwcG9ydGVkLCB3ZSBqdXN0IHVzZSByQUYgb25jZVxuLy8gYW5kIGRvbid0IGJvdGhlciB0byB1cGRhdGUuXG5cblxubGV0IHJlc2l6ZU9ic2VydmVyU3VwcG9ydGVkID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVXaWR0aCAobm9kZSwgYWJvcnRTaWduYWwsIG9uVXBkYXRlKSB7XG4gIGxldCByZXNpemVPYnNlcnZlcjtcbiAgaWYgKHJlc2l6ZU9ic2VydmVyU3VwcG9ydGVkKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiAoXG4gICAgICBvblVwZGF0ZShlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LndpZHRoKVxuICAgICkpO1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gIH0gZWxzZSB7IC8vIGp1c3Qgc2V0IHRoZSB3aWR0aCBvbmNlLCBkb24ndCBib3RoZXIgdHJ5aW5nIHRvIHRyYWNrIGl0XG4gICAgckFGKCgpID0+IChcbiAgICAgIG9uVXBkYXRlKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXG4gICAgKSk7XG4gIH1cblxuICAvLyBjbGVhbnVwIGZ1bmN0aW9uIChjYWxsZWQgb24gZGVzdHJveSlcbiAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgaWYgKHJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gZ2V0IHRoZSB3aWR0aCBvZiB0aGUgdGV4dCBpbnNpZGUgb2YgYSBET00gbm9kZSwgdmlhIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81OTUyNTg5MS82ODA3NDJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVRleHRXaWR0aCAobm9kZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZS5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgfVxufVxuXG5sZXQgYmFzZWxpbmVFbW9qaVdpZHRoO1xuXG5mdW5jdGlvbiBjaGVja1p3alN1cHBvcnQgKHp3akVtb2ppc1RvQ2hlY2ssIGJhc2VsaW5lRW1vamksIGVtb2ppVG9Eb21Ob2RlKSB7XG4gIGZvciAoY29uc3QgZW1vamkgb2YgendqRW1vamlzVG9DaGVjaykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBlbW9qaVRvRG9tTm9kZShlbW9qaSk7XG4gICAgY29uc3QgZW1vamlXaWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aChkb21Ob2RlKTtcbiAgICBpZiAodHlwZW9mIGJhc2VsaW5lRW1vamlXaWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8gY2FsY3VsYXRlIHRoZSBiYXNlbGluZSBlbW9qaSB3aWR0aCBvbmx5IG9uY2VcbiAgICAgIGJhc2VsaW5lRW1vamlXaWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aChiYXNlbGluZUVtb2ppKTtcbiAgICB9XG4gICAgLy8gT24gV2luZG93cywgc29tZSBzdXBwb3J0ZWQgZW1vamkgYXJlIH41MCUgYmlnZ2VyIHRoYW4gdGhlIGJhc2VsaW5lIGVtb2ppLCBidXQgd2hhdCB3ZSByZWFsbHkgd2FudCB0byBndWFyZFxuICAgIC8vIGFnYWluc3QgYXJlIHRoZSBvbmVzIHRoYXQgYXJlIDJ4IHRoZSBzaXplLCBiZWNhdXNlIHRob3NlIGFyZSB0cnVseSBicm9rZW4gKHBlcnNvbiB3aXRoIHJlZCBoYWlyID0gcGVyc29uIHdpdGhcbiAgICAvLyBmbG9hdGluZyByZWQgd2lnLCBibGFjayBjYXQgPSBjYXQgd2l0aCBibGFjayBzcXVhcmUsIHBvbGFyIGJlYXIgPSBiZWFyIHdpdGggc25vd2ZsYWtlLCBldGMuKVxuICAgIC8vIFNvIGhlcmUgd2Ugc2V0IHRoZSB0aHJlc2hvbGQgYXQgMS44IHRpbWVzIHRoZSBzaXplIG9mIHRoZSBiYXNlbGluZSBlbW9qaS5cbiAgICBjb25zdCBzdXBwb3J0ZWQgPSBlbW9qaVdpZHRoIC8gMS44IDwgYmFzZWxpbmVFbW9qaVdpZHRoO1xuICAgIHN1cHBvcnRlZFp3akVtb2ppcy5zZXQoZW1vamkudW5pY29kZSwgc3VwcG9ydGVkKTtcbiAgfVxufVxuXG4vLyBsaWtlIGxvZGFzaCdzIHVuaXFcblxuZnVuY3Rpb24gdW5pcSAoYXJyKSB7XG4gIHJldHVybiB1bmlxQnkoYXJyLCBfID0+IF8pXG59XG5cbi8vIE5vdGUgd2UgcHV0IHRoaXMgaW4gaXRzIG93biBmdW5jdGlvbiBvdXRzaWRlIFBpY2tlci5qcyB0byBhdm9pZCBTdmVsdGUgZG9pbmcgYW4gaW52YWxpZGF0aW9uIG9uIHRoZSBcInNldHRlclwiIGhlcmUuXG4vLyBBdCBiZXN0IHRoZSBpbnZhbGlkYXRpb24gaXMgdXNlbGVzcywgYXQgd29yc3QgaXQgY2FuIGNhdXNlIGluZmluaXRlIGxvb3BzOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL2Vtb2ppLXBpY2tlci1lbGVtZW50L3B1bGwvMTgwXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy82NTIxXG4vLyBBbHNvIG5vdGUgdGFicGFuZWxFbGVtZW50IGNhbiBiZSBudWxsIGlmIHRoZSBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCBpbW1lZGlhdGVseSBhZnRlciBjb25uZWN0ZWRcbmZ1bmN0aW9uIHJlc2V0U2Nyb2xsVG9wSWZQb3NzaWJsZSAoZWxlbWVudCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWxlbWVudCkgeyAvLyBNYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIHRoaXMgYGlmYCBndWFyZFxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGcm9tTWFwIChjYWNoZSwga2V5LCBmdW5jKSB7XG4gIGxldCBjYWNoZWQgPSBjYWNoZS5nZXQoa2V5KTtcbiAgaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBmdW5jKCk7XG4gICAgY2FjaGUuc2V0KGtleSwgY2FjaGVkKTtcbiAgfVxuICByZXR1cm4gY2FjaGVkXG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gJycgKyB2YWx1ZVxufVxuXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlIChodG1sU3RyaW5nKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgcmV0dXJuIHRlbXBsYXRlXG59XG5cbmNvbnN0IHBhcnNlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgZG9tSW5zdGFuY2VzQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdW5rZXllZFN5bWJvbCA9IFN5bWJvbCgndW4ta2V5ZWQnKTtcblxuLy8gTm90IHN1cHBvcnRlZCBpbiBTYWZhcmkgPD0xM1xuY29uc3QgaGFzUmVwbGFjZUNoaWxkcmVuID0gJ3JlcGxhY2VDaGlsZHJlbicgaW4gRWxlbWVudC5wcm90b3R5cGU7XG5mdW5jdGlvbiByZXBsYWNlQ2hpbGRyZW4gKHBhcmVudE5vZGUsIG5ld0NoaWxkcmVuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChoYXNSZXBsYWNlQ2hpbGRyZW4pIHtcbiAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZHJlbiguLi5uZXdDaGlsZHJlbik7XG4gIH0gZWxzZSB7IC8vIG1pbmltYWwgcG9seWZpbGwgZm9yIEVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VDaGlsZHJlblxuICAgIHBhcmVudE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmQoLi4ubmV3Q2hpbGRyZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvQ2hpbGRyZW5OZWVkUmVyZW5kZXIgKHBhcmVudE5vZGUsIG5ld0NoaWxkcmVuKSB7XG4gIGxldCBvbGRDaGlsZCA9IHBhcmVudE5vZGUuZmlyc3RDaGlsZDtcbiAgbGV0IG9sZENoaWxkcmVuQ291bnQgPSAwO1xuICAvLyBpdGVyYXRlIHVzaW5nIGZpcnN0Q2hpbGQvbmV4dFNpYmxpbmcgYmVjYXVzZSBicm93c2VycyB1c2UgYSBsaW5rZWQgbGlzdCB1bmRlciB0aGUgaG9vZFxuICB3aGlsZSAob2xkQ2hpbGQpIHtcbiAgICBjb25zdCBuZXdDaGlsZCA9IG5ld0NoaWxkcmVuW29sZENoaWxkcmVuQ291bnRdO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBvbGQgY2hpbGQgYW5kIG5ldyBjaGlsZCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3Q2hpbGQgIT09IG9sZENoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBvbGRDaGlsZCA9IG9sZENoaWxkLm5leHRTaWJsaW5nO1xuICAgIG9sZENoaWxkcmVuQ291bnQrKztcbiAgfVxuICAvLyBpZiBuZXcgY2hpbGRyZW4gbGVuZ3RoIGlzIGRpZmZlcmVudCBmcm9tIG9sZCwgd2UgbXVzdCByZS1yZW5kZXJcbiAgcmV0dXJuIG9sZENoaWxkcmVuQ291bnQgIT09IG5ld0NoaWxkcmVuLmxlbmd0aFxufVxuXG5mdW5jdGlvbiBwYXRjaENoaWxkcmVuIChuZXdDaGlsZHJlbiwgaW5zdGFuY2VCaW5kaW5nKSB7XG4gIGNvbnN0IHsgdGFyZ2V0Tm9kZSB9ID0gaW5zdGFuY2VCaW5kaW5nO1xuICBsZXQgeyB0YXJnZXRQYXJlbnROb2RlIH0gPSBpbnN0YW5jZUJpbmRpbmc7XG5cbiAgbGV0IG5lZWRzUmVyZW5kZXIgPSBmYWxzZTtcblxuICBpZiAodGFyZ2V0UGFyZW50Tm9kZSkgeyAvLyBhbHJlYWR5IHJlbmRlcmVkIG9uY2VcbiAgICBuZWVkc1JlcmVuZGVyID0gZG9DaGlsZHJlbk5lZWRSZXJlbmRlcih0YXJnZXRQYXJlbnROb2RlLCBuZXdDaGlsZHJlbik7XG4gIH0gZWxzZSB7IC8vIGZpcnN0IHJlbmRlciBvZiBsaXN0XG4gICAgbmVlZHNSZXJlbmRlciA9IHRydWU7XG4gICAgaW5zdGFuY2VCaW5kaW5nLnRhcmdldE5vZGUgPSB1bmRlZmluZWQ7IC8vIHBsYWNlaG9sZGVyIGNvbW1lbnQgbm90IG5lZWRlZCBhbnltb3JlLCBmcmVlIG1lbW9yeVxuICAgIGluc3RhbmNlQmluZGluZy50YXJnZXRQYXJlbnROb2RlID0gdGFyZ2V0UGFyZW50Tm9kZSA9IHRhcmdldE5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICAvLyBhdm9pZCByZS1yZW5kZXJpbmcgbGlzdCBpZiB0aGUgZG9tIG5vZGVzIGFyZSBleGFjdGx5IHRoZSBzYW1lIGJlZm9yZSBhbmQgYWZ0ZXJcbiAgaWYgKG5lZWRzUmVyZW5kZXIpIHtcbiAgICByZXBsYWNlQ2hpbGRyZW4odGFyZ2V0UGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhdGNoIChleHByZXNzaW9ucywgaW5zdGFuY2VCaW5kaW5ncykge1xuICBmb3IgKGNvbnN0IGluc3RhbmNlQmluZGluZyBvZiBpbnN0YW5jZUJpbmRpbmdzKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0Tm9kZSxcbiAgICAgIGN1cnJlbnRFeHByZXNzaW9uLFxuICAgICAgYmluZGluZzoge1xuICAgICAgICBleHByZXNzaW9uSW5kZXgsXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlUHJlLFxuICAgICAgICBhdHRyaWJ1dGVWYWx1ZVBvc3RcbiAgICAgIH1cbiAgICB9ID0gaW5zdGFuY2VCaW5kaW5nO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zW2V4cHJlc3Npb25JbmRleF07XG5cbiAgICBpZiAoY3VycmVudEV4cHJlc3Npb24gPT09IGV4cHJlc3Npb24pIHtcbiAgICAgIC8vIG5vIG5lZWQgdG8gdXBkYXRlLCBzYW1lIGFzIGJlZm9yZVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZUJpbmRpbmcuY3VycmVudEV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUpIHsgLy8gYXR0cmlidXRlIHJlcGxhY2VtZW50XG4gICAgICB0YXJnZXROb2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZVByZSArIHRvU3RyaW5nKGV4cHJlc3Npb24pICsgYXR0cmlidXRlVmFsdWVQb3N0KTtcbiAgICB9IGVsc2UgeyAvLyB0ZXh0IG5vZGUgLyBjaGlsZCBlbGVtZW50IC8gY2hpbGRyZW4gcmVwbGFjZW1lbnRcbiAgICAgIGxldCBuZXdOb2RlO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXhwcmVzc2lvbikpIHsgLy8gYXJyYXkgb2YgRE9NIGVsZW1lbnRzIHByb2R1Y2VkIGJ5IHRhZyB0ZW1wbGF0ZSBsaXRlcmFsc1xuICAgICAgICBwYXRjaENoaWxkcmVuKGV4cHJlc3Npb24sIGluc3RhbmNlQmluZGluZyk7XG4gICAgICB9IGVsc2UgaWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBFbGVtZW50KSB7IC8vIGh0bWwgdGFnIHRlbXBsYXRlIHJldHVybmluZyBhIERPTSBlbGVtZW50XG4gICAgICAgIG5ld05vZGUgPSBleHByZXNzaW9uO1xuICAgICAgICB0YXJnZXROb2RlLnJlcGxhY2VXaXRoKG5ld05vZGUpO1xuICAgICAgfSBlbHNlIHsgLy8gcHJpbWl0aXZlIC0gc3RyaW5nLCBudW1iZXIsIGV0Y1xuICAgICAgICBpZiAodGFyZ2V0Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHsgLy8gYWxyZWFkeSB0cmFuc2Zvcm1lZCBpbnRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgLy8gbm9kZVZhbHVlIGlzIGZhc3RlciB0aGFuIHRleHRDb250ZW50IHN1cHBvc2VkbHkgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1MWTZ5M0hiRFZtZ1xuICAgICAgICAgIHRhcmdldE5vZGUubm9kZVZhbHVlID0gdG9TdHJpbmcoZXhwcmVzc2lvbik7XG4gICAgICAgIH0gZWxzZSB7IC8vIHJlcGxhY2UgY29tbWVudCBvciB3aGF0ZXZlciB3YXMgdGhlcmUgYmVmb3JlIHdpdGggYSB0ZXh0IG5vZGVcbiAgICAgICAgICBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9TdHJpbmcoZXhwcmVzc2lvbikpO1xuICAgICAgICAgIHRhcmdldE5vZGUucmVwbGFjZVdpdGgobmV3Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuZXdOb2RlKSB7XG4gICAgICAgIGluc3RhbmNlQmluZGluZy50YXJnZXROb2RlID0gbmV3Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2UgKHRva2Vucykge1xuICBsZXQgaHRtbFN0cmluZyA9ICcnO1xuXG4gIGxldCB3aXRoaW5UYWcgPSBmYWxzZTtcbiAgbGV0IHdpdGhpbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICBsZXQgZWxlbWVudEluZGV4Q291bnRlciA9IC0xOyAvLyBkZXB0aC1maXJzdCB0cmF2ZXJzYWwgb3JkZXJcblxuICBjb25zdCBlbGVtZW50c1RvQmluZGluZ3MgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IGVsZW1lbnRJbmRleGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgIGh0bWxTdHJpbmcgKz0gdG9rZW47XG5cbiAgICBpZiAoaSA9PT0gbGVuIC0gMSkge1xuICAgICAgYnJlYWsgLy8gbm8gbmVlZCB0byBwcm9jZXNzIGNoYXJhY3RlcnMgLSBubyBtb3JlIGV4cHJlc3Npb25zIHRvIGJlIGZvdW5kXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b2tlbi5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgY2hhciA9IHRva2VuLmNoYXJBdChqKTtcbiAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICBjYXNlICc8Jzoge1xuICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gdG9rZW4uY2hhckF0KGogKyAxKTtcbiAgICAgICAgICBpZiAobmV4dENoYXIgPT09ICcvJykgeyAvLyBjbG9zaW5nIHRhZ1xuICAgICAgICAgICAgLy8gbGVhdmluZyBhbiBlbGVtZW50XG4gICAgICAgICAgICBlbGVtZW50SW5kZXhlcy5wb3AoKTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBub3QgYSBjbG9zaW5nIHRhZ1xuICAgICAgICAgICAgd2l0aGluVGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsZW1lbnRJbmRleGVzLnB1c2goKytlbGVtZW50SW5kZXhDb3VudGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICc+Jzoge1xuICAgICAgICAgIHdpdGhpblRhZyA9IGZhbHNlO1xuICAgICAgICAgIHdpdGhpbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnPSc6IHtcbiAgICAgICAgICB3aXRoaW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW5kZXggPSBlbGVtZW50SW5kZXhlc1tlbGVtZW50SW5kZXhlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBiaW5kaW5ncyA9IGdldEZyb21NYXAoZWxlbWVudHNUb0JpbmRpbmdzLCBlbGVtZW50SW5kZXgsICgpID0+IFtdKTtcblxuICAgIGxldCBhdHRyaWJ1dGVOYW1lO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZVByZTtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWVQb3N0O1xuICAgIGlmICh3aXRoaW5BdHRyaWJ1dGUpIHtcbiAgICAgIC8vIEkgbmV2ZXIgdXNlIHNpbmdsZS1xdW90ZXMgZm9yIGF0dHJpYnV0ZSB2YWx1ZXMgaW4gSFRNTCwgc28ganVzdCBzdXBwb3J0IGRvdWJsZS1xdW90ZXMgb3Igbm8tcXVvdGVzXG4gICAgICBjb25zdCBtYXRjaCA9IC8oXFxTKyk9XCI/KFteXCI9XSopJC8uZXhlYyh0b2tlbik7XG4gICAgICBhdHRyaWJ1dGVOYW1lID0gbWF0Y2hbMV07XG4gICAgICBhdHRyaWJ1dGVWYWx1ZVByZSA9IG1hdGNoWzJdO1xuICAgICAgYXR0cmlidXRlVmFsdWVQb3N0ID0gL15bXlwiPl0qLy5leGVjKHRva2Vuc1tpICsgMV0pWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRpbmcgPSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgYXR0cmlidXRlVmFsdWVQcmUsXG4gICAgICBhdHRyaWJ1dGVWYWx1ZVBvc3QsXG4gICAgICBleHByZXNzaW9uSW5kZXg6IGlcbiAgICB9O1xuXG4gICAgYmluZGluZ3MucHVzaChiaW5kaW5nKTtcblxuICAgIC8vIGFkZCBhIHBsYWNlaG9sZGVyIGNvbW1lbnQgdGhhdCB3ZSBjYW4gZmluZCBsYXRlclxuICAgIGh0bWxTdHJpbmcgKz0gKCF3aXRoaW5UYWcgJiYgIXdpdGhpbkF0dHJpYnV0ZSkgPyBgPCEtLSR7YmluZGluZ3MubGVuZ3RoIC0gMX0tLT5gIDogJyc7XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZSA9IHBhcnNlVGVtcGxhdGUoaHRtbFN0cmluZyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZSxcbiAgICBlbGVtZW50c1RvQmluZGluZ3NcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUGxhY2Vob2xkZXJDb21tZW50IChlbGVtZW50LCBiaW5kaW5nSWQpIHtcbiAgLy8gSWYgd2UgaGFkIGEgbG90IG9mIHBsYWNlaG9sZGVyIGNvbW1lbnRzIHRvIGZpbmQsIGl0IHdvdWxkIG1ha2UgbW9yZSBzZW5zZSB0byBidWlsZCB1cCBhIG1hcCBvbmNlXG4gIC8vIHJhdGhlciB0aGFuIHNlYXJjaCB0aGUgRE9NIGV2ZXJ5IHRpbWUuIEJ1dCBpdCB0dXJucyBvdXQgdGhhdCB3ZSBhbHdheXMgb25seSBoYXZlIG9uZSBjaGlsZCxcbiAgLy8gYW5kIGl0J3MgdGhlIGNvbW1lbnQgbm9kZSwgc28gc2VhcmNoaW5nIGV2ZXJ5IHRpbWUgaXMgYWN0dWFsbHkgZmFzdGVyLlxuICBsZXQgY2hpbGROb2RlID0gZWxlbWVudC5maXJzdENoaWxkO1xuICB3aGlsZSAoY2hpbGROb2RlKSB7XG4gICAgLy8gTm90ZSB0aGF0IG1pbmlmeS1odG1sLWxpdGVyYWxzIGhhcyBhbHJlYWR5IHJlbW92ZWQgYWxsIG5vbi1mcmFtZXdvcmsgY29tbWVudHNcbiAgICAvLyBTbyB3ZSBqdXN0IG5lZWQgdG8gbG9vayBmb3IgY29tbWVudHMgdGhhdCBoYXZlIGV4YWN0bHkgdGhlIGJpbmRpbmdJZCBhcyBpdHMgdGV4dCBjb250ZW50XG4gICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUgJiYgY2hpbGROb2RlLm5vZGVWYWx1ZSA9PT0gdG9TdHJpbmcoYmluZGluZ0lkKSkge1xuICAgICAgcmV0dXJuIGNoaWxkTm9kZVxuICAgIH1cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhdmVyc2VBbmRTZXR1cEJpbmRpbmdzIChkb20sIGVsZW1lbnRzVG9CaW5kaW5ncykge1xuICBjb25zdCBpbnN0YW5jZUJpbmRpbmdzID0gW107XG4gIC8vIHRyYXZlcnNlIGRvbVxuICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb20sIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcblxuICBsZXQgZWxlbWVudCA9IGRvbTtcbiAgbGV0IGVsZW1lbnRJbmRleCA9IC0xO1xuICBkbyB7XG4gICAgY29uc3QgYmluZGluZ3MgPSBlbGVtZW50c1RvQmluZGluZ3MuZ2V0KCsrZWxlbWVudEluZGV4KTtcbiAgICBpZiAoYmluZGluZ3MpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzW2ldO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBiaW5kaW5nLmF0dHJpYnV0ZU5hbWVcbiAgICAgICAgICA/IGVsZW1lbnQgLy8gYXR0cmlidXRlIGJpbmRpbmcsIGp1c3QgdXNlIHRoZSBlbGVtZW50IGl0c2VsZlxuICAgICAgICAgIDogZmluZFBsYWNlaG9sZGVyQ29tbWVudChlbGVtZW50LCBpKTsgLy8gbm90IGFuIGF0dHJpYnV0ZSBiaW5kaW5nLCBzbyBoYXMgYSBwbGFjZWhvbGRlciBjb21tZW50XG5cbiAgICAgICAgY29uc3QgaW5zdGFuY2VCaW5kaW5nID0ge1xuICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgdGFyZ2V0Tm9kZSxcbiAgICAgICAgICB0YXJnZXRQYXJlbnROb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgY3VycmVudEV4cHJlc3Npb246IHVuZGVmaW5lZFxuICAgICAgICB9O1xuXG4gICAgICAgIGluc3RhbmNlQmluZGluZ3MucHVzaChpbnN0YW5jZUJpbmRpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSB3aGlsZSAoKGVsZW1lbnQgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkpKVxuXG4gIHJldHVybiBpbnN0YW5jZUJpbmRpbmdzXG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbCAodG9rZW5zKSB7XG4gIC8vIEFsbCB0ZW1wbGF0ZXMgYW5kIGJvdW5kIGV4cHJlc3Npb25zIGFyZSB1bmlxdWUgcGVyIHRva2VucyBhcnJheVxuICBjb25zdCB7IHRlbXBsYXRlLCBlbGVtZW50c1RvQmluZGluZ3MgfSA9IGdldEZyb21NYXAocGFyc2VDYWNoZSwgdG9rZW5zLCAoKSA9PiBwYXJzZSh0b2tlbnMpKTtcblxuICAvLyBXaGVuIHdlIHBhcnNlSHRtbCwgd2UgYWx3YXlzIHJldHVybiBhIGZyZXNoIERPTSBpbnN0YW5jZSByZWFkeSB0byBiZSB1cGRhdGVkXG4gIGNvbnN0IGRvbSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCBpbnN0YW5jZUJpbmRpbmdzID0gdHJhdmVyc2VBbmRTZXR1cEJpbmRpbmdzKGRvbSwgZWxlbWVudHNUb0JpbmRpbmdzKTtcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlRG9tSW5zdGFuY2UgKGV4cHJlc3Npb25zKSB7XG4gICAgcGF0Y2goZXhwcmVzc2lvbnMsIGluc3RhbmNlQmluZGluZ3MpO1xuICAgIHJldHVybiBkb21cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZXdvcmsgKHN0YXRlKSB7XG4gIGNvbnN0IGRvbUluc3RhbmNlcyA9IGdldEZyb21NYXAoZG9tSW5zdGFuY2VzQ2FjaGUsIHN0YXRlLCAoKSA9PiBuZXcgTWFwKCkpO1xuICBsZXQgZG9tSW5zdGFuY2VDYWNoZUtleSA9IHVua2V5ZWRTeW1ib2w7XG5cbiAgZnVuY3Rpb24gaHRtbCAodG9rZW5zLCAuLi5leHByZXNzaW9ucykge1xuICAgIC8vIEVhY2ggdW5pcXVlIGxleGljYWwgdXNhZ2Ugb2YgbWFwKCkgaXMgY29uc2lkZXJlZCB1bmlxdWUgZHVlIHRvIHRoZSBodG1sYGAgdGFnZ2VkIHRlbXBsYXRlIGNhbGwgaXQgbWFrZXMsXG4gICAgLy8gd2hpY2ggaGFzIGxleGljYWxseSB1bmlxdWUgdG9rZW5zLiBUaGUgdW5rZXllZCBzeW1ib2wgaXMganVzdCB1c2VkIGZvciBodG1sYGAgdXNhZ2Ugb3V0c2lkZSBvZiBhIG1hcCgpLlxuICAgIGNvbnN0IGRvbUluc3RhbmNlc0ZvclRva2VucyA9IGdldEZyb21NYXAoZG9tSW5zdGFuY2VzLCB0b2tlbnMsICgpID0+IG5ldyBNYXAoKSk7XG4gICAgY29uc3QgdXBkYXRlRG9tSW5zdGFuY2UgPSBnZXRGcm9tTWFwKGRvbUluc3RhbmNlc0ZvclRva2VucywgZG9tSW5zdGFuY2VDYWNoZUtleSwgKCkgPT4gcGFyc2VIdG1sKHRva2VucykpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZURvbUluc3RhbmNlKGV4cHJlc3Npb25zKSAvLyB1cGRhdGUgd2l0aCBleHByZXNzaW9uc1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwIChhcnJheSwgY2FsbGJhY2ssIGtleUZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsQ2FjaGVLZXkgPSBkb21JbnN0YW5jZUNhY2hlS2V5O1xuICAgICAgZG9tSW5zdGFuY2VDYWNoZUtleSA9IGtleUZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGluZGV4KVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZG9tSW5zdGFuY2VDYWNoZUtleSA9IG9yaWdpbmFsQ2FjaGVLZXk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IG1hcCwgaHRtbCB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlciAoY29udGFpbmVyLCBzdGF0ZSwgaGVscGVycywgZXZlbnRzLCBhY3Rpb25zLCByZWZzLCBhYm9ydFNpZ25hbCwgZmlyc3RSZW5kZXIpIHtcbiAgY29uc3QgeyBsYWJlbFdpdGhTa2luLCB0aXRsZUZvckVtb2ppLCB1bmljb2RlV2l0aFNraW4gfSA9IGhlbHBlcnM7XG4gIGNvbnN0IHsgaHRtbCwgbWFwIH0gPSBjcmVhdGVGcmFtZXdvcmsoc3RhdGUpO1xuXG4gIGZ1bmN0aW9uIGVtb2ppTGlzdCAoZW1vamlzLCBzZWFyY2hNb2RlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gbWFwKGVtb2ppcywgKGVtb2ppLCBpKSA9PiB7XG4gICAgICByZXR1cm4gaHRtbGA8YnV0dG9uIHJvbGU9XCIke3NlYXJjaE1vZGUgPyAnb3B0aW9uJyA6ICdtZW51aXRlbSd9XCIgYXJpYS1zZWxlY3RlZD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/IGkgPT09IHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gOiAnJ31cIiBhcmlhLWxhYmVsPVwiJHtsYWJlbFdpdGhTa2luKGVtb2ppLCBzdGF0ZS5jdXJyZW50U2tpblRvbmUpfVwiIHRpdGxlPVwiJHt0aXRsZUZvckVtb2ppKGVtb2ppKX1cIiBjbGFzcz1cImVtb2ppICR7c2VhcmNoTW9kZSAmJiBpID09PSBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID8gJ2FjdGl2ZScgOiAnJ31cIiBpZD1cIiR7YCR7cHJlZml4fS0ke2Vtb2ppLmlkfWB9XCI+JHtcbiAgICAgICAgZW1vamkudW5pY29kZVxuICAgICAgICAgID8gdW5pY29kZVdpdGhTa2luKGVtb2ppLCBzdGF0ZS5jdXJyZW50U2tpblRvbmUpXG4gICAgICAgICAgOiBodG1sYDxpbWcgY2xhc3M9XCJjdXN0b20tZW1vamlcIiBzcmM9XCIke2Vtb2ppLnVybH1cIiBhbHQ9XCJcIiBsb2FkaW5nPVwibGF6eVwiPmBcbiAgICAgIH08L2J1dHRvbj5gXG4gICAgICAvLyBJdCdzIGltcG9ydGFudCBmb3IgdGhlIGNhY2hlIGtleSB0byBiZSB1bmlxdWUgYmFzZWQgb24gdGhlIHByZWZpeCwgYmVjYXVzZSB0aGUgZnJhbWV3b3JrIGNhY2hlcyBiYXNlZCBvbiB0aGVcbiAgICAgIC8vIHVuaXF1ZSB0b2tlbnMgKyBjYWNoZSBrZXksIGFuZCB0aGUgc2FtZSBlbW9qaSBtYXkgYmUgdXNlZCBpbiB0aGUgdGFiIGFzIHdlbGwgYXMgaW4gdGhlIGZhdiBiYXJcbiAgICB9LCBlbW9qaSA9PiBgJHtwcmVmaXh9LSR7ZW1vamkuaWR9YClcbiAgfVxuXG4gIGNvbnN0IHNlY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGh0bWxgPHNlY3Rpb24gZGF0YS1yZWY9XCJyb290RWxlbWVudFwiIGNsYXNzPVwicGlja2VyXCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5yZWdpb25MYWJlbH1cIiBzdHlsZT1cIiR7c3RhdGUucGlja2VyU3R5bGV9XCI+PGRpdiBjbGFzcz1cInBhZC10b3BcIj48L2Rpdj48ZGl2IGNsYXNzPVwic2VhcmNoLXJvd1wiPjxkaXYgY2xhc3M9XCJzZWFyY2gtd3JhcHBlclwiPjxpbnB1dCBpZD1cInNlYXJjaFwiIGNsYXNzPVwic2VhcmNoXCIgdHlwZT1cInNlYXJjaFwiIHJvbGU9XCJjb21ib2JveFwiIGVudGVya2V5aGludD1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHtzdGF0ZS5pMThuLnNlYXJjaExhYmVsfVwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cIiR7ISEoc3RhdGUuc2VhcmNoTW9kZSAmJiBzdGF0ZS5jdXJyZW50RW1vamlzLmxlbmd0aCl9XCIgYXJpYS1jb250cm9scz1cInNlYXJjaC1yZXN1bHRzXCIgYXJpYS1kZXNjcmliZWRieT1cInNlYXJjaC1kZXNjcmlwdGlvblwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cIiR7c3RhdGUuYWN0aXZlU2VhcmNoSXRlbUlkID8gYGVtby0ke3N0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1JZH1gIDogJyd9XCIgZGF0YS1yZWY9XCJzZWFyY2hFbGVtZW50XCIgZGF0YS1vbi1pbnB1dD1cIm9uU2VhcmNoSW5wdXRcIiBkYXRhLW9uLWtleWRvd249XCJvblNlYXJjaEtleWRvd25cIj48bGFiZWwgY2xhc3M9XCJzci1vbmx5XCIgZm9yPVwic2VhcmNoXCI+JHtzdGF0ZS5pMThuLnNlYXJjaExhYmVsfTwvbGFiZWw+IDxzcGFuIGlkPVwic2VhcmNoLWRlc2NyaXB0aW9uXCIgY2xhc3M9XCJzci1vbmx5XCI+JHtzdGF0ZS5pMThuLnNlYXJjaERlc2NyaXB0aW9ufTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVwic2tpbnRvbmUtYnV0dG9uLXdyYXBwZXIgJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb24gPyAnZXhwYW5kZWQnIDogJyd9XCI+PGJ1dHRvbiBpZD1cInNraW50b25lLWJ1dHRvblwiIGNsYXNzPVwiZW1vamkgJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID8gJ2hpZGUtZm9jdXMnIDogJyd9XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuc2tpblRvbmVCdXR0b25MYWJlbH1cIiB0aXRsZT1cIiR7c3RhdGUuc2tpblRvbmVCdXR0b25MYWJlbH1cIiBhcmlhLWRlc2NyaWJlZGJ5PVwic2tpbnRvbmUtZGVzY3JpcHRpb25cIiBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIGFyaWEtZXhwYW5kZWQ9XCIke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWR9XCIgYXJpYS1jb250cm9scz1cInNraW50b25lLWxpc3RcIiBkYXRhLW9uLWNsaWNrPVwib25DbGlja1NraW5Ub25lQnV0dG9uXCI+JHtzdGF0ZS5za2luVG9uZUJ1dHRvblRleHR9PC9idXR0b24+PC9kaXY+PHNwYW4gaWQ9XCJza2ludG9uZS1kZXNjcmlwdGlvblwiIGNsYXNzPVwic3Itb25seVwiPiR7c3RhdGUuaTE4bi5za2luVG9uZURlc2NyaXB0aW9ufTwvc3Bhbj48ZGl2IGRhdGEtcmVmPVwic2tpblRvbmVEcm9wZG93blwiIGlkPVwic2tpbnRvbmUtbGlzdFwiIGNsYXNzPVwic2tpbnRvbmUtbGlzdCBoaWRlLWZvY3VzICR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA/ICcnIDogJ2hpZGRlbiBuby1hbmltYXRlJ31cIiBzdHlsZT1cInRyYW5zZm9ybTp0cmFuc2xhdGVZKCR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA/IDAgOiAnY2FsYygtMSAqIHZhcigtLW51bS1za2ludG9uZXMpICogdmFyKC0tdG90YWwtZW1vamktc2l6ZSkpJ30pXCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLnNraW5Ub25lc0xhYmVsfVwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cInNraW50b25lLSR7c3RhdGUuYWN0aXZlU2tpblRvbmV9XCIgYXJpYS1oaWRkZW49XCIkeyFzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkfVwiIHRhYkluZGV4PVwiLTFcIiBkYXRhLW9uLWZvY3Vzb3V0PVwib25Ta2luVG9uZU9wdGlvbnNGb2N1c091dFwiIGRhdGEtb24tY2xpY2s9XCJvblNraW5Ub25lT3B0aW9uc0NsaWNrXCIgZGF0YS1vbi1rZXlkb3duPVwib25Ta2luVG9uZU9wdGlvbnNLZXlkb3duXCIgZGF0YS1vbi1rZXl1cD1cIm9uU2tpblRvbmVPcHRpb25zS2V5dXBcIj4ke1xuICAgIG1hcChzdGF0ZS5za2luVG9uZXMsIChza2luVG9uZSwgaSkgPT4ge1xuICAgIHJldHVybiBodG1sYDxkaXYgaWQ9XCJza2ludG9uZS0ke2l9XCIgY2xhc3M9XCJlbW9qaSAke2kgPT09IHN0YXRlLmFjdGl2ZVNraW5Ub25lID8gJ2FjdGl2ZScgOiAnJ31cIiBhcmlhLXNlbGVjdGVkPVwiJHtpID09PSBzdGF0ZS5hY3RpdmVTa2luVG9uZX1cIiByb2xlPVwib3B0aW9uXCIgdGl0bGU9XCIke3N0YXRlLmkxOG4uc2tpblRvbmVzW2ldfVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uc2tpblRvbmVzW2ldfVwiPiR7c2tpblRvbmV9PC9kaXY+YFxuICAgIH0sIHNraW5Ub25lID0+IHNraW5Ub25lKVxuICAgICAgICB9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIm5hdlwiIHJvbGU9XCJ0YWJsaXN0XCIgc3R5bGU9XCJncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KCR7c3RhdGUuZ3JvdXBzLmxlbmd0aH0sMWZyKVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uY2F0ZWdvcmllc0xhYmVsfVwiIGRhdGEtb24ta2V5ZG93bj1cIm9uTmF2S2V5ZG93blwiIGRhdGEtb24tY2xpY2s9XCJvbk5hdkNsaWNrXCI+JHtcbiAgICAgICAgICAgIG1hcChzdGF0ZS5ncm91cHMsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8YnV0dG9uIHJvbGU9XCJ0YWJcIiBjbGFzcz1cIm5hdi1idXR0b25cIiBhcmlhLWNvbnRyb2xzPVwidGFiLSR7Z3JvdXAuaWR9XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5jYXRlZ29yaWVzW2dyb3VwLm5hbWVdfVwiIGFyaWEtc2VsZWN0ZWQ9XCIkeyFzdGF0ZS5zZWFyY2hNb2RlICYmIHN0YXRlLmN1cnJlbnRHcm91cC5pZCA9PT0gZ3JvdXAuaWR9XCIgdGl0bGU9XCIke3N0YXRlLmkxOG4uY2F0ZWdvcmllc1tncm91cC5uYW1lXX1cIiBkYXRhLWdyb3VwLWlkPVwiJHtncm91cC5pZH1cIj48ZGl2IGNsYXNzPVwibmF2LWVtb2ppIGVtb2ppXCI+JHtncm91cC5lbW9qaX08L2Rpdj48L2J1dHRvbj5gXG4gICAgICAgICAgICB9LCBncm91cCA9PiBncm91cC5pZClcbiAgICAgICAgICB9PC9kaXY+PGRpdiBjbGFzcz1cImluZGljYXRvci13cmFwcGVyXCI+PGRpdiBjbGFzcz1cImluZGljYXRvclwiIHN0eWxlPVwidHJhbnNmb3JtOnRyYW5zbGF0ZVgoJHsoLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKHN0YXRlLmlzUnRsID8gLTEgOiAxKSkgKiBzdGF0ZS5jdXJyZW50R3JvdXBJbmRleCAqIDEwMH0lKVwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJtZXNzYWdlICR7c3RhdGUubWVzc2FnZSA/ICcnIDogJ2dvbmUnfVwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPiR7c3RhdGUubWVzc2FnZX08L2Rpdj48ZGl2IGRhdGEtcmVmPVwidGFicGFuZWxFbGVtZW50XCIgY2xhc3M9XCJ0YWJwYW5lbCAkeyghc3RhdGUuZGF0YWJhc2VMb2FkZWQgfHwgc3RhdGUubWVzc2FnZSkgPyAnZ29uZScgOiAnJ31cIiByb2xlPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gJ3JlZ2lvbicgOiAndGFicGFuZWwnfVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyBzdGF0ZS5pMThuLnNlYXJjaFJlc3VsdHNMYWJlbCA6IHN0YXRlLmkxOG4uY2F0ZWdvcmllc1tzdGF0ZS5jdXJyZW50R3JvdXAubmFtZV19XCIgaWQ9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAnJyA6IGB0YWItJHtzdGF0ZS5jdXJyZW50R3JvdXAuaWR9YH1cIiB0YWJJbmRleD1cIjBcIiBkYXRhLW9uLWNsaWNrPVwib25FbW9qaUNsaWNrXCI+PGRpdiBkYXRhLWFjdGlvbj1cImNhbGN1bGF0ZUVtb2ppR3JpZFN0eWxlXCI+JHtcbiAgICAgICAgICAgICAgbWFwKHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcywgKGVtb2ppV2l0aENhdGVnb3J5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPGRpdj48ZGl2IGlkPVwibWVudS1sYWJlbC0ke2l9XCIgY2xhc3M9XCJjYXRlZ29yeSAke3N0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcy5sZW5ndGggPT09IDEgJiYgc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzWzBdLmNhdGVnb3J5ID09PSAnJyA/ICdnb25lJyA6ICcnfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiR7XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5zZWFyY2hNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gc3RhdGUuaTE4bi5zZWFyY2hSZXN1bHRzTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamlXaXRoQ2F0ZWdvcnkuY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZW1vamlXaXRoQ2F0ZWdvcnkuY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RhdGUuaTE4bi5jYXRlZ29yaWVzLmN1c3RvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdGUuaTE4bi5jYXRlZ29yaWVzW3N0YXRlLmN1cnJlbnRHcm91cC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTwvZGl2PjxkaXYgY2xhc3M9XCJlbW9qaS1tZW51XCIgcm9sZT1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/ICdsaXN0Ym94JyA6ICdtZW51J31cIiBhcmlhLWxhYmVsbGVkYnk9XCJtZW51LWxhYmVsLSR7aX1cIiBpZD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/ICdzZWFyY2gtcmVzdWx0cycgOiAnJ31cIj4ke1xuICAgICAgICAgICAgICBlbW9qaUxpc3QoZW1vamlXaXRoQ2F0ZWdvcnkuZW1vamlzLCBzdGF0ZS5zZWFyY2hNb2RlLCAvKiBwcmVmaXggKi8gJ2VtbycpXG4gICAgICAgICAgICB9PC9kaXY+PC9kaXY+YFxuICAgICAgICAgICAgICB9LCBlbW9qaVdpdGhDYXRlZ29yeSA9PiBlbW9qaVdpdGhDYXRlZ29yeS5jYXRlZ29yeSlcbiAgICAgICAgICAgIH08L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiZmF2b3JpdGVzIGVtb2ppLW1lbnUgJHtzdGF0ZS5tZXNzYWdlID8gJ2dvbmUnIDogJyd9XCIgcm9sZT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLmZhdm9yaXRlc0xhYmVsfVwiIHN0eWxlPVwicGFkZGluZy1pbmxpbmUtZW5kOiR7YCR7c3RhdGUuc2Nyb2xsYmFyV2lkdGh9cHhgfVwiIGRhdGEtb24tY2xpY2s9XCJvbkVtb2ppQ2xpY2tcIj4ke1xuICAgICAgICAgICAgZW1vamlMaXN0KHN0YXRlLmN1cnJlbnRGYXZvcml0ZXMsIC8qIHNlYXJjaE1vZGUgKi8gZmFsc2UsIC8qIHByZWZpeCAqLyAnZmF2JylcbiAgICAgICAgICB9PC9kaXY+PGJ1dHRvbiBkYXRhLXJlZj1cImJhc2VsaW5lRW1vamlcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJhYnMtcG9zIGhpZGRlbiBlbW9qaSBiYXNlbGluZS1lbW9qaVwiPvCfmIA8L2J1dHRvbj48L3NlY3Rpb24+YFxuICB9O1xuXG4gIGNvbnN0IHJvb3REb20gPSBzZWN0aW9uKCk7XG5cbiAgaWYgKGZpcnN0UmVuZGVyKSB7IC8vIG5vdCBhIHJlLXJlbmRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290RG9tKTtcblxuICAgIC8vIHdlIG9ubHkgYmluZCBldmVudHMvcmVmcy9hY3Rpb25zIG9uY2UgLSB0aGVyZSBpcyBubyBuZWVkIHRvIGZpbmQgdGhlbSBhZ2FpbiBnaXZlbiB0aGlzIGNvbXBvbmVudCBzdHJ1Y3R1cmVcblxuICAgIC8vIGhlbHBlciBmb3IgdHJhdmVyc2luZyB0aGUgZG9tLCBmaW5kaW5nIGVsZW1lbnRzIGJ5IGFuIGF0dHJpYnV0ZSwgYW5kIGdldHRpbmcgdGhlIGF0dHJpYnV0ZSB2YWx1ZVxuICAgIGNvbnN0IGZvckVsZW1lbnRXaXRoQXR0cmlidXRlID0gKGF0dHJpYnV0ZU5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApKSB7XG4gICAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYmluZCBldmVudHNcbiAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBbJ2NsaWNrJywgJ2ZvY3Vzb3V0JywgJ2lucHV0JywgJ2tleWRvd24nLCAna2V5dXAnXSkge1xuICAgICAgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUoYGRhdGEtb24tJHtldmVudE5hbWV9YCwgKGVsZW1lbnQsIGxpc3RlbmVyTmFtZSkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudHNbbGlzdGVuZXJOYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIHJlZnNcbiAgICBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZSgnZGF0YS1yZWYnLCAoZWxlbWVudCwgcmVmKSA9PiB7XG4gICAgICByZWZzW3JlZl0gPSBlbGVtZW50O1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHVwIGFjdGlvbnNcbiAgICBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nLCAoZWxlbWVudCwgYWN0aW9uKSA9PiB7XG4gICAgICBhY3Rpb25zW2FjdGlvbl0oZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBkZXN0cm95L2Fib3J0IGxvZ2ljXG4gICAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQocm9vdERvbSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IHFNID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nID8gcXVldWVNaWNyb3Rhc2sgOiBjYWxsYmFjayA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGNhbGxiYWNrKTtcblxuZnVuY3Rpb24gY3JlYXRlU3RhdGUgKGFib3J0U2lnbmFsKSB7XG4gIGxldCBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRPYnNlcnZlcjtcblxuICBjb25zdCBwcm9wc1RvT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuICBjb25zdCBkaXJ0eU9ic2VydmVycyA9IG5ldyBTZXQoKTtcblxuICBsZXQgcXVldWVkO1xuXG4gIGNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAgIGlmIChkZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlcnNUb1J1biA9IFsuLi5kaXJ0eU9ic2VydmVyc107XG4gICAgZGlydHlPYnNlcnZlcnMuY2xlYXIoKTsgLy8gY2xlYXIgYmVmb3JlIHJ1bm5pbmcgdG8gZm9yY2UgYW55IG5ldyB1cGRhdGVzIHRvIHJ1biBpbiBhbm90aGVyIHRpY2sgb2YgdGhlIGxvb3BcbiAgICB0cnkge1xuICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiBvYnNlcnZlcnNUb1J1bikge1xuICAgICAgICBvYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBxdWV1ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChkaXJ0eU9ic2VydmVycy5zaXplKSB7IC8vIG5ldyB1cGRhdGVzLCBxdWV1ZSBhbm90aGVyIG9uZVxuICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICBxTShmbHVzaCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0ICh0YXJnZXQsIHByb3ApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWFjdGl2aXR5OiBnZXQnLCBwcm9wKVxuICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlcikge1xuICAgICAgICBsZXQgb2JzZXJ2ZXJzID0gcHJvcHNUb09ic2VydmVycy5nZXQocHJvcCk7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICAgIHByb3BzVG9PYnNlcnZlcnMuc2V0KHByb3AsIG9ic2VydmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXJzLmFkZChjdXJyZW50T2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXVxuICAgIH0sXG4gICAgc2V0ICh0YXJnZXQsIHByb3AsIG5ld1ZhbHVlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncmVhY3Rpdml0eTogc2V0JywgcHJvcCwgbmV3VmFsdWUpXG4gICAgICB0YXJnZXRbcHJvcF0gPSBuZXdWYWx1ZTtcbiAgICAgIGNvbnN0IG9ic2VydmVycyA9IHByb3BzVG9PYnNlcnZlcnMuZ2V0KHByb3ApO1xuICAgICAgaWYgKG9ic2VydmVycykge1xuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIG9ic2VydmVycykge1xuICAgICAgICAgIGRpcnR5T2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFxdWV1ZWQpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHFNKGZsdXNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZUVmZmVjdCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHJ1bm5hYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb2xkT2JzZXJ2ZXIgPSBjdXJyZW50T2JzZXJ2ZXI7XG4gICAgICBjdXJyZW50T2JzZXJ2ZXIgPSBydW5uYWJsZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjdXJyZW50T2JzZXJ2ZXIgPSBvbGRPYnNlcnZlcjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBydW5uYWJsZSgpXG4gIH07XG5cbiAgLy8gZGVzdHJveSBsb2dpY1xuICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIGNyZWF0ZUVmZmVjdFxuICB9XG59XG5cbi8vIENvbXBhcmUgdHdvIGFycmF5cywgd2l0aCBhIGZ1bmN0aW9uIGNhbGxlZCBvbiBlYWNoIGl0ZW0gaW4gdGhlIHR3byBhcnJheXMgdGhhdCByZXR1cm5zIHRydWUgaWYgdGhlIGl0ZW1zIGFyZSBlcXVhbFxuZnVuY3Rpb24gYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uIChsZWZ0LCByaWdodCwgYXJlRXF1YWxGdW5jKSB7XG4gIGlmIChsZWZ0Lmxlbmd0aCAhPT0gcmlnaHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFhcmVFcXVhbEZ1bmMobGVmdFtpXSwgcmlnaHRbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0LG5vLWxhYmVscyxuby1pbm5lci1kZWNsYXJhdGlvbnMgKi9cblxuLy8gY29uc3RhbnRzXG5jb25zdCBFTVBUWV9BUlJBWSA9IFtdO1xuXG5jb25zdCB7IGFzc2lnbiB9ID0gT2JqZWN0O1xuXG5mdW5jdGlvbiBjcmVhdGVSb290IChzaGFkb3dSb290LCBwcm9wcykge1xuICBjb25zdCByZWZzID0ge307XG4gIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgY29uc3QgYWJvcnRTaWduYWwgPSBhYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICBjb25zdCB7IHN0YXRlLCBjcmVhdGVFZmZlY3QgfSA9IGNyZWF0ZVN0YXRlKGFib3J0U2lnbmFsKTtcblxuICAvLyBpbml0aWFsIHN0YXRlXG4gIGFzc2lnbihzdGF0ZSwge1xuICAgIHNraW5Ub25lRW1vamk6IHVuZGVmaW5lZCxcbiAgICBpMThuOiB1bmRlZmluZWQsXG4gICAgZGF0YWJhc2U6IHVuZGVmaW5lZCxcbiAgICBjdXN0b21FbW9qaTogdW5kZWZpbmVkLFxuICAgIGN1c3RvbUNhdGVnb3J5U29ydGluZzogdW5kZWZpbmVkLFxuICAgIGVtb2ppVmVyc2lvbjogdW5kZWZpbmVkXG4gIH0pO1xuXG4gIC8vIHB1YmxpYyBwcm9wc1xuICBhc3NpZ24oc3RhdGUsIHByb3BzKTtcblxuICAvLyBwcml2YXRlIHByb3BzXG4gIGFzc2lnbihzdGF0ZSwge1xuICAgIGluaXRpYWxMb2FkOiB0cnVlLFxuICAgIGN1cnJlbnRFbW9qaXM6IFtdLFxuICAgIGN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllczogW10sXG4gICAgcmF3U2VhcmNoVGV4dDogJycsXG4gICAgc2VhcmNoVGV4dDogJycsXG4gICAgc2VhcmNoTW9kZTogZmFsc2UsXG4gICAgYWN0aXZlU2VhcmNoSXRlbTogLTEsXG4gICAgbWVzc2FnZTogdW5kZWZpbmVkLFxuICAgIHNraW5Ub25lUGlja2VyRXhwYW5kZWQ6IGZhbHNlLFxuICAgIHNraW5Ub25lUGlja2VyRXhwYW5kZWRBZnRlckFuaW1hdGlvbjogZmFsc2UsXG4gICAgY3VycmVudFNraW5Ub25lOiAwLFxuICAgIGFjdGl2ZVNraW5Ub25lOiAwLFxuICAgIHNraW5Ub25lQnV0dG9uVGV4dDogdW5kZWZpbmVkLFxuICAgIHBpY2tlclN0eWxlOiB1bmRlZmluZWQsXG4gICAgc2tpblRvbmVCdXR0b25MYWJlbDogJycsXG4gICAgc2tpblRvbmVzOiBbXSxcbiAgICBjdXJyZW50RmF2b3JpdGVzOiBbXSxcbiAgICBkZWZhdWx0RmF2b3JpdGVFbW9qaXM6IHVuZGVmaW5lZCxcbiAgICBudW1Db2x1bW5zOiBERUZBVUxUX05VTV9DT0xVTU5TLFxuICAgIGlzUnRsOiBmYWxzZSxcbiAgICBzY3JvbGxiYXJXaWR0aDogMCxcbiAgICBjdXJyZW50R3JvdXBJbmRleDogMCxcbiAgICBncm91cHM6IGdyb3VwcyxcbiAgICBkYXRhYmFzZUxvYWRlZDogZmFsc2UsXG4gICAgYWN0aXZlU2VhcmNoSXRlbUlkOiB1bmRlZmluZWRcbiAgfSk7XG5cbiAgLy9cbiAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IGdyb3VwIGJhc2VkIG9uIHRoZSBjdXJyZW50R3JvdXBJbmRleFxuICAvL1xuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jdXJyZW50R3JvdXAgIT09IHN0YXRlLmdyb3Vwc1tzdGF0ZS5jdXJyZW50R3JvdXBJbmRleF0pIHtcbiAgICAgIHN0YXRlLmN1cnJlbnRHcm91cCA9IHN0YXRlLmdyb3Vwc1tzdGF0ZS5jdXJyZW50R3JvdXBJbmRleF07XG4gICAgfVxuICB9KTtcblxuICAvL1xuICAvLyBVdGlscy9oZWxwZXJzXG4gIC8vXG5cbiAgY29uc3QgZm9jdXMgPSBpZCA9PiB7XG4gICAgc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChpZCkuZm9jdXMoKTtcbiAgfTtcblxuICBjb25zdCBlbW9qaVRvRG9tTm9kZSA9IGVtb2ppID0+IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoYGVtby0ke2Vtb2ppLmlkfWApO1xuXG4gIC8vIGZpcmUgYSBjdXN0b20gZXZlbnQgdGhhdCBjcm9zc2VzIHRoZSBzaGFkb3cgYm91bmRhcnlcbiAgY29uc3QgZmlyZUV2ZW50ID0gKG5hbWUsIGRldGFpbCkgPT4ge1xuICAgIHJlZnMucm9vdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgfSkpO1xuICB9O1xuXG4gIC8vXG4gIC8vIENvbXBhcmlzb24gdXRpbHNcbiAgLy9cblxuICBjb25zdCBjb21wYXJlRW1vamlBcnJheXMgPSAoYSwgYikgPT4gYS5pZCA9PT0gYi5pZDtcblxuICBjb25zdCBjb21wYXJlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCB7IGNhdGVnb3J5OiBhQ2F0ZWdvcnksIGVtb2ppczogYUVtb2ppcyB9ID0gYTtcbiAgICBjb25zdCB7IGNhdGVnb3J5OiBiQ2F0ZWdvcnksIGVtb2ppczogYkVtb2ppcyB9ID0gYjtcblxuICAgIGlmIChhQ2F0ZWdvcnkgIT09IGJDYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbihhRW1vamlzLCBiRW1vamlzLCBjb21wYXJlRW1vamlBcnJheXMpXG4gIH07XG5cbiAgLy9cbiAgLy8gVXBkYXRlIHV0aWxzIHRvIGF2b2lkIGV4Y2Vzc2l2ZSByZS1yZW5kZXJzXG4gIC8vXG5cbiAgLy8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnMgYnkgY2hlY2tpbmcgdGhlIHZhbHVlIGJlZm9yZSBzZXR0aW5nXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRFbW9qaXMgPSAobmV3RW1vamlzKSA9PiB7XG4gICAgaWYgKCFhcnJheXNBcmVFcXVhbEJ5RnVuY3Rpb24oc3RhdGUuY3VycmVudEVtb2ppcywgbmV3RW1vamlzLCBjb21wYXJlRW1vamlBcnJheXMpKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50RW1vamlzID0gbmV3RW1vamlzO1xuICAgIH1cbiAgfTtcblxuICAvLyBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVyc1xuICBjb25zdCB1cGRhdGVTZWFyY2hNb2RlID0gKG5ld1NlYXJjaE1vZGUpID0+IHtcbiAgICBpZiAoc3RhdGUuc2VhcmNoTW9kZSAhPT0gbmV3U2VhcmNoTW9kZSkge1xuICAgICAgc3RhdGUuc2VhcmNoTW9kZSA9IG5ld1NlYXJjaE1vZGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIGF2b2lkIGV4Y2Vzc2l2ZSByZS1yZW5kZXJzXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyA9IChuZXdFbW9qaXNXaXRoQ2F0ZWdvcmllcykgPT4ge1xuICAgIGlmICghYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uKHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcywgbmV3RW1vamlzV2l0aENhdGVnb3JpZXMsIGNvbXBhcmVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMpKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgPSBuZXdFbW9qaXNXaXRoQ2F0ZWdvcmllcztcbiAgICB9XG4gIH07XG5cbiAgLy8gSGVscGVycyB1c2VkIGJ5IFBpY2tlclRlbXBsYXRlXG5cbiAgY29uc3QgdW5pY29kZVdpdGhTa2luID0gKGVtb2ppLCBjdXJyZW50U2tpblRvbmUpID0+IChcbiAgICAoY3VycmVudFNraW5Ub25lICYmIGVtb2ppLnNraW5zICYmIGVtb2ppLnNraW5zW2N1cnJlbnRTa2luVG9uZV0pIHx8IGVtb2ppLnVuaWNvZGVcbiAgKTtcblxuICBjb25zdCBsYWJlbFdpdGhTa2luID0gKGVtb2ppLCBjdXJyZW50U2tpblRvbmUpID0+IChcbiAgICB1bmlxKFtcbiAgICAgIChlbW9qaS5uYW1lIHx8IHVuaWNvZGVXaXRoU2tpbihlbW9qaSwgY3VycmVudFNraW5Ub25lKSksXG4gICAgICBlbW9qaS5hbm5vdGF0aW9uLFxuICAgICAgLi4uKGVtb2ppLnNob3J0Y29kZXMgfHwgRU1QVFlfQVJSQVkpXG4gICAgXS5maWx0ZXIoQm9vbGVhbikpLmpvaW4oJywgJylcbiAgKTtcblxuICBjb25zdCB0aXRsZUZvckVtb2ppID0gKGVtb2ppKSA9PiAoXG4gICAgZW1vamkuYW5ub3RhdGlvbiB8fCAoZW1vamkuc2hvcnRjb2RlcyB8fCBFTVBUWV9BUlJBWSkuam9pbignLCAnKVxuICApO1xuXG4gIGNvbnN0IGhlbHBlcnMgPSB7XG4gICAgbGFiZWxXaXRoU2tpbiwgdGl0bGVGb3JFbW9qaSwgdW5pY29kZVdpdGhTa2luXG4gIH07XG4gIGNvbnN0IGV2ZW50cyA9IHtcbiAgICBvbkNsaWNrU2tpblRvbmVCdXR0b24sXG4gICAgb25FbW9qaUNsaWNrLFxuICAgIG9uTmF2Q2xpY2ssXG4gICAgb25OYXZLZXlkb3duLFxuICAgIG9uU2VhcmNoS2V5ZG93bixcbiAgICBvblNraW5Ub25lT3B0aW9uc0NsaWNrLFxuICAgIG9uU2tpblRvbmVPcHRpb25zRm9jdXNPdXQsXG4gICAgb25Ta2luVG9uZU9wdGlvbnNLZXlkb3duLFxuICAgIG9uU2tpblRvbmVPcHRpb25zS2V5dXAsXG4gICAgb25TZWFyY2hJbnB1dFxuICB9O1xuICBjb25zdCBhY3Rpb25zID0ge1xuICAgIGNhbGN1bGF0ZUVtb2ppR3JpZFN0eWxlXG4gIH07XG5cbiAgbGV0IGZpcnN0UmVuZGVyID0gdHJ1ZTtcbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICByZW5kZXIoc2hhZG93Um9vdCwgc3RhdGUsIGhlbHBlcnMsIGV2ZW50cywgYWN0aW9ucywgcmVmcywgYWJvcnRTaWduYWwsIGZpcnN0UmVuZGVyKTtcbiAgICBmaXJzdFJlbmRlciA9IGZhbHNlO1xuICB9KTtcblxuICAvL1xuICAvLyBEZXRlcm1pbmUgdGhlIGVtb2ppIHN1cHBvcnQgbGV2ZWwgKGluIHJlcXVlc3RJZGxlQ2FsbGJhY2spXG4gIC8vXG5cbiAgLy8gbW91bnQgbG9naWNcbiAgaWYgKCFzdGF0ZS5lbW9qaVZlcnNpb24pIHtcbiAgICBkZXRlY3RFbW9qaVN1cHBvcnRMZXZlbCgpLnRoZW4obGV2ZWwgPT4ge1xuICAgICAgLy8gQ2FuJ3QgYWN0dWFsbHkgdGVzdCBlbW9qaSBzdXBwb3J0IGluIEplc3QvSlNEb20sIGVtb2ppIG5ldmVyIHJlbmRlciBpbiBjb2xvciBpbiBDYWlyb1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICghbGV2ZWwpIHtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IHN0YXRlLmkxOG4uZW1vamlVbnN1cHBvcnRlZE1lc3NhZ2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBkYXRhYmFzZSBvYmplY3RcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNob3cgYSBMb2FkaW5nIG1lc3NhZ2UgaWYgaXQgdGFrZXMgYSBsb25nIHRpbWUsIG9yIHNob3cgYW4gZXJyb3IgaWYgdGhlcmUncyBhIG5ldHdvcmsvSURCIGVycm9yXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0YWJhc2VMb2FkaW5nICgpIHtcbiAgICAgIGxldCBzaG93aW5nTG9hZGluZ01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd2luZ0xvYWRpbmdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IHN0YXRlLmkxOG4ubG9hZGluZ01lc3NhZ2U7XG4gICAgICB9LCBUSU1FT1VUX0JFRk9SRV9MT0FESU5HX01FU1NBR0UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc3RhdGUuZGF0YWJhc2UucmVhZHkoKTtcbiAgICAgICAgc3RhdGUuZGF0YWJhc2VMb2FkZWQgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gc3RhdGUuaTE4bi5uZXR3b3JrRXJyb3JNZXNzYWdlO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICBpZiAoc2hvd2luZ0xvYWRpbmdNZXNzYWdlKSB7IC8vIFNlZW1zIHNhZmVyIHRoYW4gY2hlY2tpbmcgdGhlIGkxOG4gc3RyaW5nLCB3aGljaCBtYXkgY2hhbmdlXG4gICAgICAgICAgc2hvd2luZ0xvYWRpbmdNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUubWVzc2FnZSA9ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF0YWJhc2UpIHtcbiAgICAgIC8qIG5vIGF3YWl0ICovXG4gICAgICBoYW5kbGVEYXRhYmFzZUxvYWRpbmcoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIEdsb2JhbCBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgcGlja2VyXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5waWNrZXJTdHlsZSA9IGBcbiAgICAgIC0tbnVtLWdyb3VwczogJHtzdGF0ZS5ncm91cHMubGVuZ3RofTsgXG4gICAgICAtLWluZGljYXRvci1vcGFjaXR5OiAke3N0YXRlLnNlYXJjaE1vZGUgPyAwIDogMX07IFxuICAgICAgLS1udW0tc2tpbnRvbmVzOiAke05VTV9TS0lOX1RPTkVTfTtgO1xuICB9KTtcblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBjdXN0b21FbW9qaVxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1c3RvbUVtb2ppICYmIHN0YXRlLmRhdGFiYXNlKSB7XG4gICAgICB1cGRhdGVDdXN0b21FbW9qaSgpOyAvLyByZS1ydW4gd2hlbmV2ZXIgY3VzdG9tRW1vamkgY2hhbmdlXG4gICAgfVxuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jdXN0b21FbW9qaSAmJiBzdGF0ZS5jdXN0b21FbW9qaS5sZW5ndGgpIHtcbiAgICAgIGlmIChzdGF0ZS5ncm91cHMgIT09IGFsbEdyb3VwcykgeyAvLyBkb24ndCB1cGRhdGUgdW5uZWNlc3NhcmlseVxuICAgICAgICBzdGF0ZS5ncm91cHMgPSBhbGxHcm91cHM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5ncm91cHMgIT09IGdyb3Vwcykge1xuICAgICAgaWYgKHN0YXRlLmN1cnJlbnRHcm91cEluZGV4KSB7XG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGdyb3VwIGlzIGFueXRoaW5nIG90aGVyIHRoYW4gXCJjdXN0b21cIiAod2hpY2ggaXMgZmlyc3QpLCBkZWNyZW1lbnQuXG4gICAgICAgIC8vIFRoaXMgZml4ZXMgdGhlIG9kZCBjYXNlIHdoZXJlIHlvdSBzZXQgY3VzdG9tRW1vamksIHRoZW4gcGljayBhIGNhdGVnb3J5LCB0aGVuIHVuc2V0IGN1c3RvbUVtb2ppXG4gICAgICAgIHN0YXRlLmN1cnJlbnRHcm91cEluZGV4LS07XG4gICAgICB9XG4gICAgICBzdGF0ZS5ncm91cHMgPSBncm91cHM7XG4gICAgfVxuICB9KTtcblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBwcmVmZXJyZWQgc2tpbiB0b25lXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcmVmZXJyZWRTa2luVG9uZSAoKSB7XG4gICAgICBpZiAoc3RhdGUuZGF0YWJhc2VMb2FkZWQpIHtcbiAgICAgICAgc3RhdGUuY3VycmVudFNraW5Ub25lID0gYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0UHJlZmVycmVkU2tpblRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVQcmVmZXJyZWRTa2luVG9uZSgpO1xuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lcyA9IEFycmF5KE5VTV9TS0lOX1RPTkVTKS5maWxsKCkubWFwKChfLCBpKSA9PiBhcHBseVNraW5Ub25lKHN0YXRlLnNraW5Ub25lRW1vamksIGkpKTtcbiAgfSk7XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5za2luVG9uZUJ1dHRvblRleHQgPSBzdGF0ZS5za2luVG9uZXNbc3RhdGUuY3VycmVudFNraW5Ub25lXTtcbiAgfSk7XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5za2luVG9uZUJ1dHRvbkxhYmVsID0gc3RhdGUuaTE4bi5za2luVG9uZUxhYmVsLnJlcGxhY2UoJ3tza2luVG9uZX0nLCBzdGF0ZS5pMThuLnNraW5Ub25lc1tzdGF0ZS5jdXJyZW50U2tpblRvbmVdKTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgZmF2b3JpdGVzIGVtb2ppc1xuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEZhdm9yaXRlRW1vamlzICgpIHtcbiAgICAgIGNvbnN0IHsgZGF0YWJhc2UgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZmF2cyA9IChhd2FpdCBQcm9taXNlLmFsbChNT1NUX0NPTU1PTkxZX1VTRURfRU1PSkkubWFwKHVuaWNvZGUgPT4gKFxuICAgICAgICBkYXRhYmFzZS5nZXRFbW9qaUJ5VW5pY29kZU9yTmFtZSh1bmljb2RlKVxuICAgICAgKSkpKS5maWx0ZXIoQm9vbGVhbik7IC8vIGZpbHRlciBiZWNhdXNlIGluIEplc3QgdGVzdHMgd2UgZG9uJ3QgaGF2ZSBhbGwgdGhlIGVtb2ppIGluIHRoZSBEQlxuICAgICAgc3RhdGUuZGVmYXVsdEZhdm9yaXRlRW1vamlzID0gZmF2cztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF0YWJhc2VMb2FkZWQpIHtcbiAgICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZURlZmF1bHRGYXZvcml0ZUVtb2ppcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tRW1vamkgKCkge1xuICAgIC8vIENlcnRhaW4gZWZmZWN0cyBoYXZlIGFuIGltcGxpY2l0IGRlcGVuZGVuY3kgb24gY3VzdG9tRW1vamkgc2luY2UgaXQgYWZmZWN0cyB0aGUgZGF0YWJhc2VcbiAgICAvLyBHZXR0aW5nIGl0IGhlcmUgb24gdGhlIHN0YXRlIGVuc3VyZXMgdGhpcyBlZmZlY3QgcmUtcnVucyB3aGVuIGN1c3RvbUVtb2ppIGNoYW5nZS5cbiAgICAvLyBTZXR0aW5nIGl0IG9uIHRoZSBkYXRhYmFzZSBpcyBwb2ludGxlc3MgYnV0IHByZXZlbnRzIHRoaXMgY29kZSBmcm9tIGJlaW5nIHJlbW92ZWQgYnkgYSBtaW5pZmllci5cbiAgICBzdGF0ZS5kYXRhYmFzZS5jdXN0b21FbW9qaSA9IHN0YXRlLmN1c3RvbUVtb2ppIHx8IEVNUFRZX0FSUkFZO1xuICB9XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZXMgKCkge1xuICAgICAgdXBkYXRlQ3VzdG9tRW1vamkoKTsgLy8gcmUtcnVuIHdoZW5ldmVyIGN1c3RvbUVtb2ppIGNoYW5nZVxuICAgICAgY29uc3QgeyBkYXRhYmFzZSwgZGVmYXVsdEZhdm9yaXRlRW1vamlzLCBudW1Db2x1bW5zIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGRiRmF2b3JpdGVzID0gYXdhaXQgZGF0YWJhc2UuZ2V0VG9wRmF2b3JpdGVFbW9qaShudW1Db2x1bW5zKTtcbiAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGF3YWl0IHN1bW1hcml6ZUVtb2ppcyh1bmlxQnkoW1xuICAgICAgICAuLi5kYkZhdm9yaXRlcyxcbiAgICAgICAgLi4uZGVmYXVsdEZhdm9yaXRlRW1vamlzXG4gICAgICBdLCBfID0+IChfLnVuaWNvZGUgfHwgXy5uYW1lKSkuc2xpY2UoMCwgbnVtQ29sdW1ucykpO1xuICAgICAgc3RhdGUuY3VycmVudEZhdm9yaXRlcyA9IGZhdm9yaXRlcztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF0YWJhc2VMb2FkZWQgJiYgc3RhdGUuZGVmYXVsdEZhdm9yaXRlRW1vamlzKSB7XG4gICAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVGYXZvcml0ZXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIENhbGN1bGF0ZSB0aGUgd2lkdGggb2YgdGhlIGVtb2ppIGdyaWQuIFRoaXMgc2VydmVzIHR3byBwdXJwb3NlczpcbiAgLy8gMSkgUmUtY2FsY3VsYXRlIHRoZSAtLW51bS1jb2x1bW5zIHZhciBiZWNhdXNlIGl0IG1heSBoYXZlIGNoYW5nZWRcbiAgLy8gMikgUmUtY2FsY3VsYXRlIHRoZSBzY3JvbGxiYXIgd2lkdGggYmVjYXVzZSBpdCBtYXkgaGF2ZSBjaGFuZ2VkXG4gIC8vICAgKGkuZS4gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIGNoYW5nZWQpXG4gIC8vIDMpIFJlLWNhbGN1bGF0ZSB3aGV0aGVyIHdlJ3JlIGluIFJUTCBtb2RlIG9yIG5vdC5cbiAgLy9cbiAgLy8gVGhlIGJlbmVmaXQgb2YgZG9pbmcgdGhpcyBpbiBvbmUgcGxhY2UgaXMgdG8gYWxpZ24gd2l0aCByQUYvUmVzaXplT2JzZXJ2ZXJcbiAgLy8gYW5kIGRvIGFsbCB0aGUgY2FsY3VsYXRpb25zIGluIG9uZSBnby4gUlRMIHZzIExUUiBpcyBub3Qgc3RyaWN0bHkgd2lkdGgtcmVsYXRlZCxcbiAgLy8gYnV0IHNpbmNlIHdlJ3JlIGFscmVhZHkgcmVhZGluZyB0aGUgc3R5bGUgaGVyZSwgYW5kIHNpbmNlIGl0J3MgYWxyZWFkeSBhbGlnbmVkIHdpdGhcbiAgLy8gdGhlIHJBRiBsb29wLCB0aGlzIGlzIHRoZSBtb3N0IGFwcHJvcHJpYXRlIHBsYWNlIHRvIGRvIGl0IHBlcmYtd2lzZS5cbiAgLy9cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVFbW9qaUdyaWRTdHlsZSAobm9kZSkge1xuICAgIGNhbGN1bGF0ZVdpZHRoKG5vZGUsIGFib3J0U2lnbmFsLCB3aWR0aCA9PiB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgeyAvLyBqc2RvbSB0aHJvd3MgZXJyb3JzIGZvciB0aGlzIGtpbmQgb2YgZmFuY3kgc3R1ZmZcbiAgICAgICAgLy8gcmVhZCBhbGwgdGhlIHN0eWxlL2xheW91dCBjYWxjdWxhdGlvbnMgd2UgbmVlZCB0byBtYWtlXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShyZWZzLnJvb3RFbGVtZW50KTtcbiAgICAgICAgY29uc3QgbmV3TnVtQ29sdW1ucyA9IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tbnVtLWNvbHVtbnMnKSwgMTApO1xuICAgICAgICBjb25zdCBuZXdJc1J0bCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgICAgICAgY29uc3QgcGFyZW50V2lkdGggPSBub2RlLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNvbnN0IG5ld1Njcm9sbGJhcldpZHRoID0gcGFyZW50V2lkdGggLSB3aWR0aDtcblxuICAgICAgICAvLyB3cml0ZSB0byBzdGF0ZSB2YXJpYWJsZXNcbiAgICAgICAgc3RhdGUubnVtQ29sdW1ucyA9IG5ld051bUNvbHVtbnM7XG4gICAgICAgIHN0YXRlLnNjcm9sbGJhcldpZHRoID0gbmV3U2Nyb2xsYmFyV2lkdGg7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgc3RhdGUuaXNSdGwgPSBuZXdJc1J0bDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgY3VycmVudEVtb2ppcy4gQ2hlY2sgZm9yIGludmFsaWQgWldKIHJlbmRlcmluZ3NcbiAgLy8gKGkuZS4gZG91YmxlIGVtb2ppKS5cbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtb2ppcyAoKSB7XG4gICAgICBjb25zdCB7IHNlYXJjaFRleHQsIGN1cnJlbnRHcm91cCwgZGF0YWJhc2VMb2FkZWQsIGN1c3RvbUVtb2ppIH0gPSBzdGF0ZTtcbiAgICAgIGlmICghZGF0YWJhc2VMb2FkZWQpIHtcbiAgICAgICAgc3RhdGUuY3VycmVudEVtb2ppcyA9IFtdO1xuICAgICAgICBzdGF0ZS5zZWFyY2hNb2RlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHNlYXJjaFRleHQubGVuZ3RoID49IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEgpIHtcbiAgICAgICAgY29uc3QgbmV3RW1vamlzID0gYXdhaXQgZ2V0RW1vamlzQnlTZWFyY2hRdWVyeShzZWFyY2hUZXh0KTtcbiAgICAgICAgaWYgKHN0YXRlLnNlYXJjaFRleHQgPT09IHNlYXJjaFRleHQpIHsgLy8gaWYgdGhlIHNpdHVhdGlvbiBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LCBkbyBub3QgdXBkYXRlXG4gICAgICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgICAgIHVwZGF0ZVNlYXJjaE1vZGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIGRhdGFiYXNlIGlzIGxvYWRlZCBhbmQgd2UncmUgbm90IGluIHNlYXJjaCBtb2RlLCBzbyB3ZSdyZSBpbiBub3JtYWwgY2F0ZWdvcnkgbW9kZVxuICAgICAgICBjb25zdCB7IGlkOiBjdXJyZW50R3JvdXBJZCB9ID0gY3VycmVudEdyb3VwO1xuICAgICAgICAvLyBhdm9pZCByYWNlIGNvbmRpdGlvbiB3aGVyZSBjdXJyZW50R3JvdXBJZCBpcyAtMSBhbmQgY3VzdG9tRW1vamkgaXMgdW5kZWZpbmVkL2VtcHR5XG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBJZCAhPT0gLTEgfHwgKGN1c3RvbUVtb2ppICYmIGN1c3RvbUVtb2ppLmxlbmd0aCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBhd2FpdCBnZXRFbW9qaXNCeUdyb3VwKGN1cnJlbnRHcm91cElkKTtcbiAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudEdyb3VwLmlkID09PSBjdXJyZW50R3JvdXBJZCkgeyAvLyBpZiB0aGUgc2l0dWF0aW9uIGNoYW5nZXMgYXN5bmNocm9ub3VzbHksIGRvIG5vdCB1cGRhdGVcbiAgICAgICAgICAgIHVwZGF0ZUN1cnJlbnRFbW9qaXMobmV3RW1vamlzKTtcbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaE1vZGUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZUVtb2ppcygpO1xuICB9KTtcblxuICAvLyBTb21lIGVtb2ppcyBoYXZlIHRoZWlyIGxpZ2F0dXJlcyByZW5kZXJlZCBhcyB0d28gb3IgbW9yZSBjb25zZWN1dGl2ZSBlbW9qaXNcbiAgLy8gV2Ugd2FudCB0byB0cmVhdCB0aGVzZSB0aGUgc2FtZSBhcyB1bnN1cHBvcnRlZCBlbW9qaXMsIHNvIHdlIGNvbXBhcmUgdGhlaXJcbiAgLy8gd2lkdGhzIGFnYWluc3QgdGhlIGJhc2VsaW5lIHdpZHRocyBhbmQgcmVtb3ZlIHRoZW0gYXMgbmVjZXNzYXJ5XG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50RW1vamlzLCBlbW9qaVZlcnNpb24gfSA9IHN0YXRlO1xuICAgIGNvbnN0IHp3akVtb2ppc1RvQ2hlY2sgPSBjdXJyZW50RW1vamlzXG4gICAgICAuZmlsdGVyKGVtb2ppID0+IGVtb2ppLnVuaWNvZGUpIC8vIGZpbHRlciBjdXN0b20gZW1vamlcbiAgICAgIC5maWx0ZXIoZW1vamkgPT4gaGFzWndqKGVtb2ppKSAmJiAhc3VwcG9ydGVkWndqRW1vamlzLmhhcyhlbW9qaS51bmljb2RlKSk7XG4gICAgaWYgKCFlbW9qaVZlcnNpb24gJiYgendqRW1vamlzVG9DaGVjay5sZW5ndGgpIHtcbiAgICAgIC8vIHJlbmRlciBub3csIGNoZWNrIHRoZWlyIGxlbmd0aCBsYXRlclxuICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhjdXJyZW50RW1vamlzKTtcbiAgICAgIHJBRigoKSA9PiBjaGVja1p3alN1cHBvcnRBbmRVcGRhdGUoendqRW1vamlzVG9DaGVjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdFbW9qaXMgPSBlbW9qaVZlcnNpb24gPyBjdXJyZW50RW1vamlzIDogY3VycmVudEVtb2ppcy5maWx0ZXIoaXNad2pTdXBwb3J0ZWQpO1xuICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgLy8gUmVzZXQgc2Nyb2xsIHRvcCB0byAwIHdoZW4gZW1vamlzIGNoYW5nZVxuICAgICAgckFGKCgpID0+IHJlc2V0U2Nyb2xsVG9wSWZQb3NzaWJsZShyZWZzLnRhYnBhbmVsRWxlbWVudCkpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tad2pTdXBwb3J0QW5kVXBkYXRlICh6d2pFbW9qaXNUb0NoZWNrKSB7XG4gICAgY2hlY2tad2pTdXBwb3J0KHp3akVtb2ppc1RvQ2hlY2ssIHJlZnMuYmFzZWxpbmVFbW9qaSwgZW1vamlUb0RvbU5vZGUpO1xuICAgIC8vIGZvcmNlIHVwZGF0ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWFzc2lnblxuICAgIHN0YXRlLmN1cnJlbnRFbW9qaXMgPSBzdGF0ZS5jdXJyZW50RW1vamlzO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNad2pTdXBwb3J0ZWQgKGVtb2ppKSB7XG4gICAgcmV0dXJuICFlbW9qaS51bmljb2RlIHx8ICFoYXNad2ooZW1vamkpIHx8IHN1cHBvcnRlZFp3akVtb2ppcy5nZXQoZW1vamkudW5pY29kZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZpbHRlckVtb2ppc0J5VmVyc2lvbiAoZW1vamlzKSB7XG4gICAgY29uc3QgZW1vamlTdXBwb3J0TGV2ZWwgPSBzdGF0ZS5lbW9qaVZlcnNpb24gfHwgYXdhaXQgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwoKTtcbiAgICAvLyAhdmVyc2lvbiBjb3JyZXNwb25kcyB0byBjdXN0b20gZW1vamlcbiAgICByZXR1cm4gZW1vamlzLmZpbHRlcigoeyB2ZXJzaW9uIH0pID0+ICF2ZXJzaW9uIHx8IHZlcnNpb24gPD0gZW1vamlTdXBwb3J0TGV2ZWwpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdW1tYXJpemVFbW9qaXMgKGVtb2ppcykge1xuICAgIHJldHVybiBzdW1tYXJpemVFbW9qaXNGb3JVSShlbW9qaXMsIHN0YXRlLmVtb2ppVmVyc2lvbiB8fCBhd2FpdCBkZXRlY3RFbW9qaVN1cHBvcnRMZXZlbCgpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlzQnlHcm91cCAoZ3JvdXApIHtcbiAgICAvLyAtMSBpcyBjdXN0b20gZW1vamlcbiAgICBjb25zdCBlbW9qaSA9IGdyb3VwID09PSAtMSA/IHN0YXRlLmN1c3RvbUVtb2ppIDogYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0RW1vamlCeUdyb3VwKGdyb3VwKTtcbiAgICByZXR1cm4gc3VtbWFyaXplRW1vamlzKGF3YWl0IGZpbHRlckVtb2ppc0J5VmVyc2lvbihlbW9qaSkpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRFbW9qaXNCeVNlYXJjaFF1ZXJ5IChxdWVyeSkge1xuICAgIHJldHVybiBzdW1tYXJpemVFbW9qaXMoYXdhaXQgZmlsdGVyRW1vamlzQnlWZXJzaW9uKGF3YWl0IHN0YXRlLmRhdGFiYXNlLmdldEVtb2ppQnlTZWFyY2hRdWVyeShxdWVyeSkpKVxuICB9XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gRGVyaXZlIGN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyBmcm9tIGN1cnJlbnRFbW9qaXMuIFRoaXMgaXMgYWx3YXlzIGRvbmUgZXZlbiBpZiB0aGVyZVxuICAvLyBhcmUgbm8gY2F0ZWdvcmllcywgYmVjYXVzZSBpdCdzIGp1c3QgZWFzaWVyIHRvIGNvZGUgdGhlIEhUTUwgdGhpcyB3YXkuXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgKCkge1xuICAgICAgY29uc3QgeyBzZWFyY2hNb2RlLCBjdXJyZW50RW1vamlzIH0gPSBzdGF0ZTtcbiAgICAgIGlmIChzZWFyY2hNb2RlKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgICAgICAgZW1vamlzOiBjdXJyZW50RW1vamlzXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgICBjb25zdCBjYXRlZ29yaWVzVG9FbW9qaSA9IG5ldyBNYXAoKTtcbiAgICAgIGZvciAoY29uc3QgZW1vamkgb2YgY3VycmVudEVtb2ppcykge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGVtb2ppLmNhdGVnb3J5IHx8ICcnO1xuICAgICAgICBsZXQgZW1vamlzID0gY2F0ZWdvcmllc1RvRW1vamkuZ2V0KGNhdGVnb3J5KTtcbiAgICAgICAgaWYgKCFlbW9qaXMpIHtcbiAgICAgICAgICBlbW9qaXMgPSBbXTtcbiAgICAgICAgICBjYXRlZ29yaWVzVG9FbW9qaS5zZXQoY2F0ZWdvcnksIGVtb2ppcyk7XG4gICAgICAgIH1cbiAgICAgICAgZW1vamlzLnB1c2goZW1vamkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFsuLi5jYXRlZ29yaWVzVG9FbW9qaS5lbnRyaWVzKCldXG4gICAgICAgIC5tYXAoKFtjYXRlZ29yeSwgZW1vamlzXSkgPT4gKHsgY2F0ZWdvcnksIGVtb2ppcyB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHN0YXRlLmN1c3RvbUNhdGVnb3J5U29ydGluZyhhLmNhdGVnb3J5LCBiLmNhdGVnb3J5KSlcbiAgICB9XG5cbiAgICBjb25zdCBuZXdFbW9qaXNXaXRoQ2F0ZWdvcmllcyA9IGNhbGN1bGF0ZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcygpO1xuICAgIHVwZGF0ZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyhuZXdFbW9qaXNXaXRoQ2F0ZWdvcmllcyk7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIEhhbmRsZSBhY3RpdmUgc2VhcmNoIGl0ZW0gKGkuZS4gcHJlc3NpbmcgdXAgb3IgZG93biB3aGlsZSBzZWFyY2hpbmcpXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtSWQgPSBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtICE9PSAtMSAmJiBzdGF0ZS5jdXJyZW50RW1vamlzW3N0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1dLmlkO1xuICB9KTtcblxuICAvL1xuICAvLyBIYW5kbGUgdXNlciBpbnB1dCBvbiB0aGUgc2VhcmNoIGlucHV0XG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHJhd1NlYXJjaFRleHQgfSA9IHN0YXRlO1xuICAgIHJJQygoKSA9PiB7XG4gICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gKHJhd1NlYXJjaFRleHQgfHwgJycpLnRyaW0oKTsgLy8gZGVmZXIgdG8gYXZvaWQgaW5wdXQgZGVsYXlzLCBwbHVzIHdlIGNhbiB0cmltIGhlcmVcbiAgICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPSAtMTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25TZWFyY2hLZXlkb3duIChldmVudCkge1xuICAgIGlmICghc3RhdGUuc2VhcmNoTW9kZSB8fCAhc3RhdGUuY3VycmVudEVtb2ppcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGdvVG9OZXh0T3JQcmV2aW91cyA9IChwcmV2aW91cykgPT4ge1xuICAgICAgaGFsdChldmVudCk7XG4gICAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID0gaW5jcmVtZW50T3JEZWNyZW1lbnQocHJldmlvdXMsIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0sIHN0YXRlLmN1cnJlbnRFbW9qaXMpO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgcmV0dXJuIGdvVG9OZXh0T3JQcmV2aW91cyhmYWxzZSlcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICByZXR1cm4gZ29Ub05leHRPclByZXZpb3VzKHRydWUpXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID09PSAtMSkge1xuICAgICAgICAgIC8vIGZvY3VzIHRoZSBmaXJzdCBvcHRpb24gaW4gdGhlIGxpc3Qgc2luY2UgdGhlIGxpc3QgbXVzdCBiZSBub24tZW1wdHkgYXQgdGhpcyBwb2ludCAoaXQncyB2ZXJpZmllZCBhYm92ZSlcbiAgICAgICAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID0gMDtcbiAgICAgICAgfSBlbHNlIHsgLy8gdGhlcmUgaXMgYWxyZWFkeSBhbiBhY3RpdmUgc2VhcmNoIGl0ZW1cbiAgICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgICByZXR1cm4gY2xpY2tFbW9qaShzdGF0ZS5jdXJyZW50RW1vamlzW3N0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1dLmlkKVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9cbiAgLy8gSGFuZGxlIHVzZXIgaW5wdXQgb24gbmF2XG4gIC8vXG5cbiAgZnVuY3Rpb24gb25OYXZDbGljayAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgY29uc3QgY2xvc2VzdFRhcmdldCA9IHRhcmdldC5jbG9zZXN0KCcubmF2LWJ1dHRvbicpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2xvc2VzdFRhcmdldCkge1xuICAgICAgcmV0dXJuIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICB9XG4gICAgY29uc3QgZ3JvdXBJZCA9IHBhcnNlSW50KGNsb3Nlc3RUYXJnZXQuZGF0YXNldC5ncm91cElkLCAxMCk7XG4gICAgcmVmcy5zZWFyY2hFbGVtZW50LnZhbHVlID0gJyc7IC8vIGNsZWFyIHNlYXJjaCBib3ggaW5wdXRcbiAgICBzdGF0ZS5yYXdTZWFyY2hUZXh0ID0gJyc7XG4gICAgc3RhdGUuc2VhcmNoVGV4dCA9ICcnO1xuICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPSAtMTtcbiAgICBzdGF0ZS5jdXJyZW50R3JvdXBJbmRleCA9IHN0YXRlLmdyb3Vwcy5maW5kSW5kZXgoXyA9PiBfLmlkID09PSBncm91cElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTmF2S2V5ZG93biAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCwga2V5IH0gPSBldmVudDtcblxuICAgIGNvbnN0IGRvRm9jdXMgPSBlbCA9PiB7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICByZXR1cm4gZG9Gb2N1cyh0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZylcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICByZXR1cm4gZG9Gb2N1cyh0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKVxuICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZClcbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGUgdXNlciBpbnB1dCBvbiBhbiBlbW9qaVxuICAvL1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNsaWNrRW1vamkgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBjb25zdCBlbW9qaSA9IGF3YWl0IHN0YXRlLmRhdGFiYXNlLmdldEVtb2ppQnlVbmljb2RlT3JOYW1lKHVuaWNvZGVPck5hbWUpO1xuICAgIGNvbnN0IGVtb2ppU3VtbWFyeSA9IFsuLi5zdGF0ZS5jdXJyZW50RW1vamlzLCAuLi5zdGF0ZS5jdXJyZW50RmF2b3JpdGVzXVxuICAgICAgLmZpbmQoXyA9PiAoXy5pZCA9PT0gdW5pY29kZU9yTmFtZSkpO1xuICAgIGNvbnN0IHNraW5Ub25lZFVuaWNvZGUgPSBlbW9qaVN1bW1hcnkudW5pY29kZSAmJiB1bmljb2RlV2l0aFNraW4oZW1vamlTdW1tYXJ5LCBzdGF0ZS5jdXJyZW50U2tpblRvbmUpO1xuICAgIGF3YWl0IHN0YXRlLmRhdGFiYXNlLmluY3JlbWVudEZhdm9yaXRlRW1vamlDb3VudCh1bmljb2RlT3JOYW1lKTtcbiAgICBmaXJlRXZlbnQoJ2Vtb2ppLWNsaWNrJywge1xuICAgICAgZW1vamksXG4gICAgICBza2luVG9uZTogc3RhdGUuY3VycmVudFNraW5Ub25lLFxuICAgICAgLi4uKHNraW5Ub25lZFVuaWNvZGUgJiYgeyB1bmljb2RlOiBza2luVG9uZWRVbmljb2RlIH0pLFxuICAgICAgLi4uKGVtb2ppU3VtbWFyeS5uYW1lICYmIHsgbmFtZTogZW1vamlTdW1tYXJ5Lm5hbWUgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uRW1vamlDbGljayAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbW9qaScpKSB7XG4gICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaGFsdChldmVudCk7XG4gICAgY29uc3QgaWQgPSB0YXJnZXQuaWQuc3Vic3RyaW5nKDQpOyAvLyByZXBsYWNlICdlbW8tJyBvciAnZmF2LScgcHJlZml4XG5cbiAgICAvKiBubyBhd2FpdCAqLyBjbGlja0Vtb2ppKGlkKTtcbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIHRoZSBza2ludG9uZSBwaWNrZXJcbiAgLy9cblxuICBmdW5jdGlvbiBjaGFuZ2VTa2luVG9uZSAoc2tpblRvbmUpIHtcbiAgICBzdGF0ZS5jdXJyZW50U2tpblRvbmUgPSBza2luVG9uZTtcbiAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gZmFsc2U7XG4gICAgZm9jdXMoJ3NraW50b25lLWJ1dHRvbicpO1xuICAgIGZpcmVFdmVudCgnc2tpbi10b25lLWNoYW5nZScsIHsgc2tpblRvbmUgfSk7XG4gICAgLyogbm8gYXdhaXQgKi8gc3RhdGUuZGF0YWJhc2Uuc2V0UHJlZmVycmVkU2tpblRvbmUoc2tpblRvbmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ta2luVG9uZU9wdGlvbnNDbGljayAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldDogeyBpZCB9IH0gPSBldmVudDtcbiAgICBjb25zdCBtYXRjaCA9IGlkICYmIGlkLm1hdGNoKC9ec2tpbnRvbmUtKFxcZCkvKTsgLy8gc2tpbnRvbmUgb3B0aW9uIGZvcm1hdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghbWF0Y2gpIHsgLy8gbm90IGEgc2tpbnRvbmUgb3B0aW9uXG4gICAgICByZXR1cm4gLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIH1cbiAgICBoYWx0KGV2ZW50KTtcbiAgICBjb25zdCBza2luVG9uZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7IC8vIHJlbW92ZSAnc2tpbnRvbmUtJyBwcmVmaXhcbiAgICBjaGFuZ2VTa2luVG9uZShza2luVG9uZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrU2tpblRvbmVCdXR0b24gKGV2ZW50KSB7XG4gICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA9ICFzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkO1xuICAgIHN0YXRlLmFjdGl2ZVNraW5Ub25lID0gc3RhdGUuY3VycmVudFNraW5Ub25lO1xuICAgIC8vIHRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0cnVlLCBzaW5jZSB0aGUgYnV0dG9uIGlzIG9ic2N1cmVkIGJ5IHRoZSBsaXN0Ym94LCBzbyB0aGlzIGBpZmAgaXMganVzdCB0byBiZSBzdXJlXG4gICAgaWYgKHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgckFGKCgpID0+IGZvY3VzKCdza2ludG9uZS1saXN0JykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRvIG1ha2UgdGhlIGFuaW1hdGlvbiBuaWNlciwgY2hhbmdlIHRoZSB6LWluZGV4IG9mIHRoZSBza2ludG9uZSBwaWNrZXIgYnV0dG9uXG4gIC8vICphZnRlciogdGhlIGFuaW1hdGlvbiBoYXMgcGxheWVkLiBUaGlzIG1ha2VzIGl0IGFwcGVhciB0aGF0IHRoZSBwaWNrZXIgYm94XG4gIC8vIGlzIGV4cGFuZGluZyBcImJlbG93XCIgdGhlIGJ1dHRvblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkKSB7XG4gICAgICByZWZzLnNraW5Ub25lRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZEFmdGVyQW5pbWF0aW9uID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb24gPSBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25Ta2luVG9uZU9wdGlvbnNLZXlkb3duIChldmVudCkge1xuICAgIC8vIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VBY3RpdmVTa2luVG9uZSA9IGFzeW5jIG5leHRTa2luVG9uZSA9PiB7XG4gICAgICBoYWx0KGV2ZW50KTtcbiAgICAgIHN0YXRlLmFjdGl2ZVNraW5Ub25lID0gbmV4dFNraW5Ub25lO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZShpbmNyZW1lbnRPckRlY3JlbWVudCh0cnVlLCBzdGF0ZS5hY3RpdmVTa2luVG9uZSwgc3RhdGUuc2tpblRvbmVzKSlcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZShpbmNyZW1lbnRPckRlY3JlbWVudChmYWxzZSwgc3RhdGUuYWN0aXZlU2tpblRvbmUsIHN0YXRlLnNraW5Ub25lcykpXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKDApXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICByZXR1cm4gY2hhbmdlQWN0aXZlU2tpblRvbmUoc3RhdGUuc2tpblRvbmVzLmxlbmd0aCAtIDEpXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIC8vIGVudGVyIG9uIGtleWRvd24sIHNwYWNlIG9uIGtleXVwLiB0aGlzIGlzIGp1c3QgaG93IGJyb3dzZXJzIHdvcmsgZm9yIGJ1dHRvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3czYy13YWktaWcvMjAxOUphbk1hci8wMDg2Lmh0bWxcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VTa2luVG9uZShzdGF0ZS5hY3RpdmVTa2luVG9uZSlcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmb2N1cygnc2tpbnRvbmUtYnV0dG9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0tleXVwIChldmVudCkge1xuICAgIC8vIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIGVudGVyIG9uIGtleWRvd24sIHNwYWNlIG9uIGtleXVwLiB0aGlzIGlzIGp1c3QgaG93IGJyb3dzZXJzIHdvcmsgZm9yIGJ1dHRvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3czYy13YWktaWcvMjAxOUphbk1hci8wMDg2Lmh0bWxcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VTa2luVG9uZShzdGF0ZS5hY3RpdmVTa2luVG9uZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0ZvY3VzT3V0IChldmVudCkge1xuICAgIC8vIE9uIGJsdXIgb3V0c2lkZSBvZiB0aGUgc2tpbnRvbmUgbGlzdGJveCwgY29sbGFwc2UgdGhlIHNraW50b25lIHBpY2tlci5cbiAgICBjb25zdCB7IHJlbGF0ZWRUYXJnZXQgfSA9IGV2ZW50O1xuICAgIC8vIFRoZSBgZWxzZWAgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghcmVsYXRlZFRhcmdldCB8fCByZWxhdGVkVGFyZ2V0LmlkICE9PSAnc2tpbnRvbmUtbGlzdCcpIHtcbiAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNlYXJjaElucHV0IChldmVudCkge1xuICAgIHN0YXRlLnJhd1NlYXJjaFRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgICRzZXQgKG5ld1N0YXRlKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9LFxuICAgICRkZXN0cm95ICgpIHtcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBERUZBVUxUX0RBVEFfU09VUkNFID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1vamktcGlja2VyLWVsZW1lbnQtZGF0YUBeMS9lbi9lbW9qaWJhc2UvZGF0YS5qc29uJztcbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gJ2VuJztcblxudmFyIGVuSTE4biA9IHtcbiAgY2F0ZWdvcmllc0xhYmVsOiAnQ2F0ZWdvcmllcycsXG4gIGVtb2ppVW5zdXBwb3J0ZWRNZXNzYWdlOiAnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY29sb3IgZW1vamkuJyxcbiAgZmF2b3JpdGVzTGFiZWw6ICdGYXZvcml0ZXMnLFxuICBsb2FkaW5nTWVzc2FnZTogJ0xvYWRpbmfigKYnLFxuICBuZXR3b3JrRXJyb3JNZXNzYWdlOiAnQ291bGQgbm90IGxvYWQgZW1vamkuJyxcbiAgcmVnaW9uTGFiZWw6ICdFbW9qaSBwaWNrZXInLFxuICBzZWFyY2hEZXNjcmlwdGlvbjogJ1doZW4gc2VhcmNoIHJlc3VsdHMgYXJlIGF2YWlsYWJsZSwgcHJlc3MgdXAgb3IgZG93biB0byBzZWxlY3QgYW5kIGVudGVyIHRvIGNob29zZS4nLFxuICBzZWFyY2hMYWJlbDogJ1NlYXJjaCcsXG4gIHNlYXJjaFJlc3VsdHNMYWJlbDogJ1NlYXJjaCByZXN1bHRzJyxcbiAgc2tpblRvbmVEZXNjcmlwdGlvbjogJ1doZW4gZXhwYW5kZWQsIHByZXNzIHVwIG9yIGRvd24gdG8gc2VsZWN0IGFuZCBlbnRlciB0byBjaG9vc2UuJyxcbiAgc2tpblRvbmVMYWJlbDogJ0Nob29zZSBhIHNraW4gdG9uZSAoY3VycmVudGx5IHtza2luVG9uZX0pJyxcbiAgc2tpblRvbmVzTGFiZWw6ICdTa2luIHRvbmVzJyxcbiAgc2tpblRvbmVzOiBbXG4gICAgJ0RlZmF1bHQnLFxuICAgICdMaWdodCcsXG4gICAgJ01lZGl1bS1MaWdodCcsXG4gICAgJ01lZGl1bScsXG4gICAgJ01lZGl1bS1EYXJrJyxcbiAgICAnRGFyaydcbiAgXSxcbiAgY2F0ZWdvcmllczoge1xuICAgIGN1c3RvbTogJ0N1c3RvbScsXG4gICAgJ3NtaWxleXMtZW1vdGlvbic6ICdTbWlsZXlzIGFuZCBlbW90aWNvbnMnLFxuICAgICdwZW9wbGUtYm9keSc6ICdQZW9wbGUgYW5kIGJvZHknLFxuICAgICdhbmltYWxzLW5hdHVyZSc6ICdBbmltYWxzIGFuZCBuYXR1cmUnLFxuICAgICdmb29kLWRyaW5rJzogJ0Zvb2QgYW5kIGRyaW5rJyxcbiAgICAndHJhdmVsLXBsYWNlcyc6ICdUcmF2ZWwgYW5kIHBsYWNlcycsXG4gICAgYWN0aXZpdGllczogJ0FjdGl2aXRpZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncydcbiAgfVxufTtcblxuY29uc3QgUFJPUFMgPSBbXG4gICdjdXN0b21FbW9qaScsXG4gICdjdXN0b21DYXRlZ29yeVNvcnRpbmcnLFxuICAnZGF0YWJhc2UnLFxuICAnZGF0YVNvdXJjZScsXG4gICdpMThuJyxcbiAgJ2xvY2FsZScsXG4gICdza2luVG9uZUVtb2ppJyxcbiAgJ2Vtb2ppVmVyc2lvbidcbl07XG5cbi8vIFN0eWxlcyBpbmplY3RlZCBvdXJzZWx2ZXMsIHNvIHdlIGNhbiBkZWNsYXJlIHRoZSBGT05UX0ZBTUlMWSB2YXJpYWJsZSBpbiBvbmUgcGxhY2VcbmNvbnN0IEVYVFJBX1NUWUxFUyA9IGA6aG9zdHstLWVtb2ppLWZvbnQtZmFtaWx5OiR7Rk9OVF9GQU1JTFl9fWA7XG5cbmNsYXNzIFBpY2tlckVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gXCI6aG9zdHstLWVtb2ppLXNpemU6MS4zNzVyZW07LS1lbW9qaS1wYWRkaW5nOjAuNXJlbTstLWNhdGVnb3J5LWVtb2ppLXNpemU6dmFyKC0tZW1vamktc2l6ZSk7LS1jYXRlZ29yeS1lbW9qaS1wYWRkaW5nOnZhcigtLWVtb2ppLXBhZGRpbmcpOy0taW5kaWNhdG9yLWhlaWdodDozcHg7LS1pbnB1dC1ib3JkZXItcmFkaXVzOjAuNXJlbTstLWlucHV0LWJvcmRlci1zaXplOjFweDstLWlucHV0LWZvbnQtc2l6ZToxcmVtOy0taW5wdXQtbGluZS1oZWlnaHQ6MS41Oy0taW5wdXQtcGFkZGluZzowLjI1cmVtOy0tbnVtLWNvbHVtbnM6ODstLW91dGxpbmUtc2l6ZToycHg7LS1ib3JkZXItc2l6ZToxcHg7LS1za2ludG9uZS1ib3JkZXItcmFkaXVzOjFyZW07LS1jYXRlZ29yeS1mb250LXNpemU6MXJlbTtkaXNwbGF5OmZsZXg7d2lkdGg6bWluLWNvbnRlbnQ7aGVpZ2h0OjQwMHB4fTpob3N0LDpob3N0KC5saWdodCl7Y29sb3Itc2NoZW1lOmxpZ2h0Oy0tYmFja2dyb3VuZDojZmZmOy0tYm9yZGVyLWNvbG9yOiNlMGUwZTA7LS1pbmRpY2F0b3ItY29sb3I6IzM4NWFjMTstLWlucHV0LWJvcmRlci1jb2xvcjojOTk5Oy0taW5wdXQtZm9udC1jb2xvcjojMTExOy0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6Izk5OTstLW91dGxpbmUtY29sb3I6Izk5OTstLWNhdGVnb3J5LWZvbnQtY29sb3I6IzExMTstLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZDojZTZlNmU2Oy0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6I2Q5ZDlkOX06aG9zdCguZGFyayl7Y29sb3Itc2NoZW1lOmRhcms7LS1iYWNrZ3JvdW5kOiMyMjI7LS1ib3JkZXItY29sb3I6IzQ0NDstLWluZGljYXRvci1jb2xvcjojNTM3M2VjOy0taW5wdXQtYm9yZGVyLWNvbG9yOiNjY2M7LS1pbnB1dC1mb250LWNvbG9yOiNlZmVmZWY7LS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjojY2NjOy0tb3V0bGluZS1jb2xvcjojZmZmOy0tY2F0ZWdvcnktZm9udC1jb2xvcjojZWZlZmVmOy0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiM1NTU1NTU7LS1idXR0b24taG92ZXItYmFja2dyb3VuZDojNDg0ODQ4fUBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6ZGFyayl7Omhvc3R7Y29sb3Itc2NoZW1lOmRhcms7LS1iYWNrZ3JvdW5kOiMyMjI7LS1ib3JkZXItY29sb3I6IzQ0NDstLWluZGljYXRvci1jb2xvcjojNTM3M2VjOy0taW5wdXQtYm9yZGVyLWNvbG9yOiNjY2M7LS1pbnB1dC1mb250LWNvbG9yOiNlZmVmZWY7LS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjojY2NjOy0tb3V0bGluZS1jb2xvcjojZmZmOy0tY2F0ZWdvcnktZm9udC1jb2xvcjojZWZlZmVmOy0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiM1NTU1NTU7LS1idXR0b24taG92ZXItYmFja2dyb3VuZDojNDg0ODQ4fX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfWJ1dHRvbnttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjA7YmFja2dyb3VuZDowIDA7Ym94LXNoYWRvdzpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9aW5wdXR7cGFkZGluZzowO21hcmdpbjowO2xpbmUtaGVpZ2h0OjEuMTU7Zm9udC1mYW1pbHk6aW5oZXJpdH1pbnB1dFt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9OmZvY3Vze291dGxpbmU6dmFyKC0tb3V0bGluZS1jb2xvcikgc29saWQgdmFyKC0tb3V0bGluZS1zaXplKTtvdXRsaW5lLW9mZnNldDpjYWxjKC0xKnZhcigtLW91dGxpbmUtc2l6ZSkpfTpob3N0KFtkYXRhLWpzLWZvY3VzLXZpc2libGVdKSA6Zm9jdXM6bm90KFtkYXRhLWZvY3VzLXZpc2libGUtYWRkZWRdKXtvdXRsaW5lOjB9OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTowfS5oaWRlLWZvY3Vze291dGxpbmU6MH0qe2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucGlja2Vye2NvbnRhaW46Y29udGVudDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyOnZhcigtLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuOy0tdG90YWwtZW1vamktc2l6ZTpjYWxjKHZhcigtLWVtb2ppLXNpemUpICsgKDIgKiB2YXIoLS1lbW9qaS1wYWRkaW5nKSkpOy0tdG90YWwtY2F0ZWdvcnktZW1vamktc2l6ZTpjYWxjKHZhcigtLWNhdGVnb3J5LWVtb2ppLXNpemUpICsgKDIgKiB2YXIoLS1jYXRlZ29yeS1lbW9qaS1wYWRkaW5nKSkpfS5zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsMCwwLDApO2JvcmRlcjowfS5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmFicy1wb3N7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5nb25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNraW50b25lLWJ1dHRvbi13cmFwcGVyLC5za2ludG9uZS1saXN0e2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7ei1pbmRleDozfS5za2ludG9uZS1idXR0b24td3JhcHBlci5leHBhbmRlZHt6LWluZGV4OjF9LnNraW50b25lLWxpc3R7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtaW5saW5lLWVuZDowO3RvcDowO3otaW5kZXg6MjtvdmVyZmxvdzp2aXNpYmxlO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czowIDAgdmFyKC0tc2tpbnRvbmUtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2tpbnRvbmUtYm9yZGVyLXJhZGl1cyk7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciAwfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5za2ludG9uZS1saXN0e3RyYW5zaXRpb24tZHVyYXRpb246LjAwMXN9fUBzdXBwb3J0cyBub3QgKGluc2V0LWlubGluZS1lbmQ6MCl7LnNraW50b25lLWxpc3R7cmlnaHQ6MH19LnNraW50b25lLWxpc3Qubm8tYW5pbWF0ZXt0cmFuc2l0aW9uOm5vbmV9LnRhYnBhbmVse292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07bWluLWhlaWdodDowO2ZsZXg6MTtjb250YWluOmNvbnRlbnR9LmVtb2ppLW1lbnV7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQodmFyKC0tbnVtLWNvbHVtbnMpLHZhcigtLXRvdGFsLWVtb2ppLXNpemUpKTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7d2lkdGg6MTAwJX0uY2F0ZWdvcnl7cGFkZGluZzp2YXIoLS1lbW9qaS1wYWRkaW5nKTtmb250LXNpemU6dmFyKC0tY2F0ZWdvcnktZm9udC1zaXplKTtjb2xvcjp2YXIoLS1jYXRlZ29yeS1mb250LWNvbG9yKX0uY3VzdG9tLWVtb2ppLC5lbW9qaSxidXR0b24uZW1vaml7aGVpZ2h0OnZhcigtLXRvdGFsLWVtb2ppLXNpemUpO3dpZHRoOnZhcigtLXRvdGFsLWVtb2ppLXNpemUpfS5lbW9qaSxidXR0b24uZW1vaml7Zm9udC1zaXplOnZhcigtLWVtb2ppLXNpemUpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjEwMCU7bGluZS1oZWlnaHQ6MTtvdmVyZmxvdzpoaWRkZW47Zm9udC1mYW1pbHk6dmFyKC0tZW1vamktZm9udC1mYW1pbHkpO2N1cnNvcjpwb2ludGVyfUBtZWRpYSAoaG92ZXI6aG92ZXIpIGFuZCAocG9pbnRlcjpmaW5lKXsuZW1vamk6aG92ZXIsYnV0dG9uLmVtb2ppOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQpfX0uZW1vamkuYWN0aXZlLC5lbW9qaTphY3RpdmUsYnV0dG9uLmVtb2ppLmFjdGl2ZSxidXR0b24uZW1vamk6YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kKX0uY3VzdG9tLWVtb2ppe3BhZGRpbmc6dmFyKC0tZW1vamktcGFkZGluZyk7b2JqZWN0LWZpdDpjb250YWluO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6dmFyKC0tZW1vamktc2l6ZSkgdmFyKC0tZW1vamktc2l6ZSl9Lm5hdiwubmF2LWJ1dHRvbnthbGlnbi1pdGVtczpjZW50ZXJ9Lm5hdntkaXNwbGF5OmdyaWQ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Y29udGFpbjpjb250ZW50fS5uYXYtYnV0dG9ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5uYXYtZW1vaml7Zm9udC1zaXplOnZhcigtLWNhdGVnb3J5LWVtb2ppLXNpemUpO3dpZHRoOnZhcigtLXRvdGFsLWNhdGVnb3J5LWVtb2ppLXNpemUpO2hlaWdodDp2YXIoLS10b3RhbC1jYXRlZ29yeS1lbW9qaS1zaXplKX0uaW5kaWNhdG9yLXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmluZGljYXRvcnt3aWR0aDpjYWxjKDEwMCUvdmFyKC0tbnVtLWdyb3VwcykpO2hlaWdodDp2YXIoLS1pbmRpY2F0b3ItaGVpZ2h0KTtvcGFjaXR5OnZhcigtLWluZGljYXRvci1vcGFjaXR5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWluZGljYXRvci1jb2xvcik7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXIsdHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmluZGljYXRvcnt3aWxsLWNoYW5nZTpvcGFjaXR5O3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyfX0ucGFkLXRvcCxpbnB1dC5zZWFyY2h7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTt3aWR0aDoxMDAlfS5wYWQtdG9we2hlaWdodDp2YXIoLS1lbW9qaS1wYWRkaW5nKTt6LWluZGV4OjN9LnNlYXJjaC1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1lbW9qaS1wYWRkaW5nKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1lbW9qaS1wYWRkaW5nKX0uc2VhcmNoLXdyYXBwZXJ7ZmxleDoxO21pbi13aWR0aDowfWlucHV0LnNlYXJjaHtwYWRkaW5nOnZhcigtLWlucHV0LXBhZGRpbmcpO2JvcmRlci1yYWRpdXM6dmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cyk7Ym9yZGVyOnZhcigtLWlucHV0LWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO2NvbG9yOnZhcigtLWlucHV0LWZvbnQtY29sb3IpO2ZvbnQtc2l6ZTp2YXIoLS1pbnB1dC1mb250LXNpemUpO2xpbmUtaGVpZ2h0OnZhcigtLWlucHV0LWxpbmUtaGVpZ2h0KX1pbnB1dC5zZWFyY2g6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yKX0uZmF2b3JpdGVze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Ym9yZGVyLXRvcDp2YXIoLS1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtjb250YWluOmNvbnRlbnR9Lm1lc3NhZ2V7cGFkZGluZzp2YXIoLS1lbW9qaS1wYWRkaW5nKX1cIiArIEVYVFJBX1NUWUxFUztcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHRoaXMuX2N0eCA9IHtcbiAgICAgIC8vIFNldCBkZWZhdWx0c1xuICAgICAgbG9jYWxlOiBERUZBVUxUX0xPQ0FMRSxcbiAgICAgIGRhdGFTb3VyY2U6IERFRkFVTFRfREFUQV9TT1VSQ0UsXG4gICAgICBza2luVG9uZUVtb2ppOiBERUZBVUxUX1NLSU5fVE9ORV9FTU9KSSxcbiAgICAgIGN1c3RvbUNhdGVnb3J5U29ydGluZzogREVGQVVMVF9DQVRFR09SWV9TT1JUSU5HLFxuICAgICAgY3VzdG9tRW1vamk6IG51bGwsXG4gICAgICBpMThuOiBlbkkxOG4sXG4gICAgICBlbW9qaVZlcnNpb246IG51bGwsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gICAgLy8gSGFuZGxlIHByb3BlcnRpZXMgc2V0IGJlZm9yZSB0aGUgZWxlbWVudCB3YXMgdXBncmFkZWRcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgUFJPUFMpIHtcbiAgICAgIGlmIChwcm9wICE9PSAnZGF0YWJhc2UnICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBwcm9wKSkge1xuICAgICAgICB0aGlzLl9jdHhbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZGJGbHVzaCgpOyAvLyB3YWl0IGZvciBhIGZsdXNoIGJlZm9yZSBjcmVhdGluZyB0aGUgZGIsIGluIGNhc2UgdGhlIHVzZXIgY2FsbHMgZS5nLiBhIHNldHRlciBvciBzZXRBdHRyaWJ1dGVcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAvLyBUaGUgX2NtcCBtYXkgYmUgZGVmaW5lZCBpZiB0aGUgY29tcG9uZW50IHdhcyBpbW1lZGlhdGVseSBkaXNjb25uZWN0ZWQgYW5kIHRoZW4gcmVjb25uZWN0ZWQuIEluIHRoYXQgY2FzZSxcbiAgICAvLyBkbyBub3RoaW5nIChwcmVzZXJ2ZSB0aGUgc3RhdGUpXG4gICAgaWYgKCF0aGlzLl9jbXApIHtcbiAgICAgIHRoaXMuX2NtcCA9IGNyZWF0ZVJvb3QodGhpcy5zaGFkb3dSb290LCB0aGlzLl9jdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAvLyBDaGVjayBpbiBhIG1pY3JvdGFzayBpZiB0aGUgZWxlbWVudCBpcyBzdGlsbCBjb25uZWN0ZWQuIElmIHNvLCB0cmVhdCB0aGlzIGFzIGEgXCJtb3ZlXCIgcmF0aGVyIHRoYW4gYSBkaXNjb25uZWN0XG4gICAgLy8gSW5zcGlyZWQgYnkgVnVlOiBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9leHRyYXMvd2ViLWNvbXBvbmVudHMuaHRtbCNidWlsZGluZy1jdXN0b20tZWxlbWVudHMtd2l0aC12dWVcbiAgICBxTSgoKSA9PiB7XG4gICAgICAvLyB0aGlzLl9jbXAgbWF5IGJlIGRlZmluZWQgaWYgY29ubmVjdC1kaXNjb25uZWN0LWNvbm5lY3QtZGlzY29ubmVjdCBvY2N1cnMgc3luY2hyb25vdXNseVxuICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkICYmIHRoaXMuX2NtcCkge1xuICAgICAgICB0aGlzLl9jbXAuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY21wID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YWJhc2UgfSA9IHRoaXMuX2N0eDtcbiAgICAgICAgZGF0YWJhc2UuY2xvc2UoKVxuICAgICAgICAgIC8vIG9ubHkgaGFwcGVucyBpZiB0aGUgZGF0YWJhc2UgZmFpbGVkIHRvIGxvYWQgaW4gdGhlIGZpcnN0IHBsYWNlLCBzbyB3ZSBkb24ndCBjYXJlXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge1xuICAgIHJldHVybiBbJ2xvY2FsZScsICdkYXRhLXNvdXJjZScsICdza2luLXRvbmUtZW1vamknLCAnZW1vamktdmVyc2lvbiddIC8vIGNvbXBsZXggb2JqZWN0cyBhcmVuJ3Qgc3VwcG9ydGVkLCBhbHNvIHVzZSBrZWJhYi1jYXNlXG4gIH1cblxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKGF0dHJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLl9zZXQoXG4gICAgICAvLyBjb252ZXJ0IGZyb20ga2ViYWItY2FzZSB0byBjYW1lbGNhc2VcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zODUyI2lzc3VlY29tbWVudC02NjUwMzcwMTVcbiAgICAgIGF0dHJOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIChfLCB1cCkgPT4gdXAudG9VcHBlckNhc2UoKSksXG4gICAgICAvLyBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGUgdG8gZmxvYXQgaWYgbmVjZXNzYXJ5XG4gICAgICBhdHRyTmFtZSA9PT0gJ2Vtb2ppLXZlcnNpb24nID8gcGFyc2VGbG9hdChuZXdWYWx1ZSkgOiBuZXdWYWx1ZVxuICAgICk7XG4gIH1cblxuICBfc2V0IChwcm9wLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuX2N0eFtwcm9wXSA9IG5ld1ZhbHVlO1xuICAgIGlmICh0aGlzLl9jbXApIHtcbiAgICAgIHRoaXMuX2NtcC4kc2V0KHsgW3Byb3BdOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgaWYgKFsnbG9jYWxlJywgJ2RhdGFTb3VyY2UnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgdGhpcy5fZGJGbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIF9kYkNyZWF0ZSAoKSB7XG4gICAgY29uc3QgeyBsb2NhbGUsIGRhdGFTb3VyY2UsIGRhdGFiYXNlIH0gPSB0aGlzLl9jdHg7XG4gICAgLy8gb25seSBjcmVhdGUgYSBuZXcgZGF0YWJhc2UgaWYgd2UgcmVhbGx5IG5lZWQgdG9cbiAgICBpZiAoIWRhdGFiYXNlIHx8IGRhdGFiYXNlLmxvY2FsZSAhPT0gbG9jYWxlIHx8IGRhdGFiYXNlLmRhdGFTb3VyY2UgIT09IGRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuX3NldCgnZGF0YWJhc2UnLCBuZXcgRGF0YWJhc2UoeyBsb2NhbGUsIGRhdGFTb3VyY2UgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgRGF0YWJhc2UgaW4gb25lIG1pY3JvdGFzayBpZiB0aGUgbG9jYWxlL2RhdGFTb3VyY2UgY2hhbmdlLiBXZSBkbyBvbmUgbWljcm90YXNrXG4gIC8vIHNvIHdlIGRvbid0IGNyZWF0ZSB0d28gRGF0YWJhc2VzIGlmIGUuZy4gYm90aCB0aGUgbG9jYWxlIGFuZCB0aGUgZGF0YVNvdXJjZSBjaGFuZ2VcbiAgX2RiRmx1c2ggKCkge1xuICAgIHFNKCgpID0+IChcbiAgICAgIHRoaXMuX2RiQ3JlYXRlKClcbiAgICApKTtcbiAgfVxufVxuXG5jb25zdCBkZWZpbml0aW9ucyA9IHt9O1xuXG5mb3IgKGNvbnN0IHByb3Agb2YgUFJPUFMpIHtcbiAgZGVmaW5pdGlvbnNbcHJvcF0gPSB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGlmIChwcm9wID09PSAnZGF0YWJhc2UnKSB7XG4gICAgICAgIC8vIGluIHJhcmUgY2FzZXMsIHRoZSBtaWNyb3Rhc2sgbWF5IG5vdCBiZSBmbHVzaGVkIHlldCwgc28gd2UgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGUgREJcbiAgICAgICAgLy8gbm93IGlmIHRoZSB1c2VyIGlzIGFza2luZyBmb3IgaXRcbiAgICAgICAgdGhpcy5fZGJDcmVhdGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9jdHhbcHJvcF1cbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICBpZiAocHJvcCA9PT0gJ2RhdGFiYXNlJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGFiYXNlIGlzIHJlYWQtb25seScpXG4gICAgICB9XG4gICAgICB0aGlzLl9zZXQocHJvcCwgdmFsKTtcbiAgICB9XG4gIH07XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFBpY2tlckVsZW1lbnQucHJvdG90eXBlLCBkZWZpbml0aW9ucyk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnZW1vamktcGlja2VyJykpIHsgLy8gaWYgYWxyZWFkeSBkZWZpbmVkLCBkbyBub3RoaW5nIChlLmcuIHNhbWUgc2NyaXB0IGltcG9ydGVkIHR3aWNlKVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Vtb2ppLXBpY2tlcicsIFBpY2tlckVsZW1lbnQpO1xufVxuXG5leHBvcnQgeyBQaWNrZXJFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kRCA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3QnKTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==