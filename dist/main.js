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
.list-item:hover,
.header-profile:hover {
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

.todo-ctr {
  min-height: 194.875px;
}

.done-ctr {
  margin: 10% 0.5rem 0 0;
  opacity: 60%;
}

.done-title {
  margin-bottom: 2rem;
  padding-left: 0.5rem;
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
  text-shadow: 0.1rem 0.1rem 0px rgba(0, 0, 0, 0.2);
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
  padding-left: 0.1rem;
}

.form-ctr {
  flex-direction: column;
}

.priority-ctr {
  gap: 0.4rem;
}

.input {
  width: 98%;
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

.default {
  font-style: italic;
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

#inputTaskDate {
  width: fit-content;
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
    max-width: 260px;
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
    opacity: 100%;
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

  .todo-ctr {
    min-height: 243.797px;
  }
  .profile-ctr {
    padding-top: 10%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,wCAAwC;EACxC,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,6BAA6B;EAC7B,0BAA0B;EAC1B,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gCAAgC;EAChC,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;EACvB,uCAAuC;EACvC,mDAAmD;AACrD;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;;EAEE,gCAAgC;EAChC,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;EAClC,aAAa;EACb,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;EAChC,kCAAkC;EAClC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,UAAU;EACV,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;;;EAIE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,2BAA2B;EAC3B,mBAAmB;EACnB,cAAc;EACd,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gCAAgC;AAClC;;AAEA;;;;EAIE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;EAEE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,qCAAqC;EACrC,aAAa;AACf;;AAEA;;;EAGE,aAAa;EACb,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,oBAAoB;EACpB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;EACrC,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,MAAM;IACN,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;IACb,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,SAAS;EACX;;EAEA;IACE,0BAA0B;IAC1B,kCAAkC;IAClC,gCAAgC;EAClC;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,QAAQ;IACR,aAAa;EACf;;EAEA;;IAEE,UAAU;EACZ;;EAEA;;IAEE,cAAc;EAChB;;EAEA;IACE,qBAAqB;EACvB;EACA;IACE,gBAAgB;EAClB;AACF","sourcesContent":[":root {\n  --main-font: \"Montserrat\", sans-serif;\n  --heading-font: \"Montserrat\", sans-serif;\n  --heading-weight: 600;\n  --accent-color: #f6f4f9;\n  --accent-color-2: #fca3b9;\n  --main-font-size: 18px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  max-height: 100vh;\n  overflow: hidden;\n}\n\nfooter {\n  grid-column: 1/3;\n  grid-row: 5/6;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--main-font);\n  border-radius: 0 0 5px 5px;\n  background-color: #6184c6;\n  padding: 1.5rem 0 1.5rem;\n}\n\nheader {\n  display: none;\n}\n\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  height: fit-content;\n  padding: 0.5rem;\n  font-size: var(--main-font-size);\n  font-family: var(--main-font);\n  border-radius: 1rem;\n  border: black 1px solid;\n  background-color: var(--accent-color-2);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\nbutton:hover,\n.list-item:hover,\n.header-profile:hover {\n  cursor: pointer;\n}\n\nh1,\n.desc {\n  font-family: var(--heading-font);\n  text-align: center;\n  padding-top: 1rem;\n}\n\nh2 {\n  font-size: 1.4rem;\n}\n\nhr {\n  width: 90%;\n  opacity: 80%;\n}\n\nimg {\n  width: 50%;\n  height: auto;\n  padding-right: 1.3rem;\n}\n\nform {\n  grid-row: 2/3;\n  width: 91vw;\n  padding: 1rem;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 25% 75%;\n  grid-template-rows: repeat(5, 1fr);\n  height: 100vh;\n  font-family: var(--main-font);\n  font-size: var(--main-font-size);\n}\n\n.logo {\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n  font-style: italic;\n  font-size: 0.9rem;\n  opacity: 90%;\n  color: #fca3b9;\n}\n\n.menuDiv {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.menuItemDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--accent-color);\n}\n\n.menuItemDiv > i {\n  margin-bottom: 5px;\n}\n\n.menuItemDiv:hover {\n  cursor: pointer;\n  opacity: 80%;\n}\n\n.view-ctr {\n  display: grid;\n  grid-template-rows: 17% 1fr;\n  grid-column: 1/3;\n  grid-row: 1/5;\n  background-color: var(--accent-color);\n}\n\n.add-new-btn {\n  position: fixed;\n  right: 10%;\n  bottom: 25%;\n  z-index: 1000;\n  background-color: #b0b8c7;\n  font-size: 2rem;\n  border-radius: 2rem;\n}\n\n.todo-done-ctr,\n.lists-ctr,\n.add-new,\nform {\n  overflow-y: auto;\n}\n\n.todo-ctr {\n  min-height: 194.875px;\n}\n\n.done-ctr {\n  margin: 10% 0.5rem 0 0;\n  opacity: 60%;\n}\n\n.done-title {\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n}\n\n.nothing-complete {\n  border-bottom: #b0b8c7 solid 1px;\n  padding: 0.5rem 0;\n  text-align: center;\n}\n\n.no-tasks-text {\n  font-size: 0.9rem;\n  opacity: 60%;\n}\n\n.heading-ctr {\n  grid-row: 1/2;\n  position: sticky;\n  padding-bottom: 2rem;\n}\n\n.logo {\n  padding-top: 1rem;\n  font-size: 1.3rem;\n  text-shadow: 0.1rem 0.1rem 0px rgba(0, 0, 0, 0.2);\n}\n\n.item-ctr {\n  display: grid;\n  grid-template-columns: 65% 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  height: fit-content;\n  margin: 0.5rem;\n  border-bottom: rgb(185, 185, 185) solid 1px;\n}\n\n.text-div {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  padding-left: 0.2rem;\n}\n\n.text-div > p {\n  padding-top: 0.3rem;\n}\n\n.open-edit-div {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.open-edit-div > i {\n  font-size: var(--main-font-size);\n}\n\n.open-edit-div,\n.task-complete-div,\n.delete-div,\n.icon-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.task-complete-div,\n.delete-div {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.due-date {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  margin-bottom: 0.4rem;\n}\n\n.icon-div {\n  grid-column: 2/4;\n  grid-row: 1/2;\n}\n\n.list-icon-btn {\n  border-radius: 1.4rem;\n  font-size: 1.4rem;\n  padding: 0rem 2rem;\n}\n\n.priority {\n  border-left: rgb(235, 95, 44) solid 0.3rem;\n  opacity: 90%;\n}\n\n.overdue {\n  color: rgb(235, 95, 44);\n}\n\n.today {\n  color: black;\n}\n\n.today,\n.overdue {\n  font-weight: 600;\n}\n\n.no-tasks-ctr {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.h1-new {\n  grid-row: 1/2;\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.add-new {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--accent-color);\n  z-index: 1001;\n}\n\n.form-ctr,\n.priority-ctr,\n.button-ctr {\n  display: flex;\n  margin-bottom: 0.8rem;\n  padding-left: 0.1rem;\n}\n\n.form-ctr {\n  flex-direction: column;\n}\n\n.priority-ctr {\n  gap: 0.4rem;\n}\n\n.input {\n  width: 98%;\n  padding-left: 0.1rem;\n  font-family: var(--main-font);\n  font-size: 1rem;\n}\n\n.button-ctr {\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\nform > .button-ctr > button,\n.choose-icon-ctr > button {\n  width: 40%;\n}\n\n.choose-icon-ctr > button {\n  background-color: #a0bff8;\n}\n\n.close-ctr {\n  text-align: end;\n}\n\n.choose-icon-ctr {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  margin-bottom: 0.1rem;\n  gap: 1rem;\n}\n\n.choose-icon-ctr > input {\n  width: 1.8rem;\n  height: 1.8rem;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.default {\n  font-style: italic;\n}\n\n.hidden {\n  display: none;\n}\n\n.selected {\n  font-weight: 900;\n  color: var(--accent-color-2);\n}\n\n.profile-ctr {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  padding-bottom: 10%;\n  background-color: var(--accent-color);\n  z-index: 1001;\n}\n\n.avatar {\n  min-height: 180px;\n  width: auto;\n  padding: 0;\n}\n\n.avatar-header {\n  max-height: 5rem;\n  width: fit-content;\n}\n\n.profile-name {\n  font-size: 2rem;\n}\n\n#inputTaskDate {\n  width: fit-content;\n}\n\n@media (min-width: 720px) {\n  footer {\n    grid-column: 1/2;\n    grid-row: 2/6;\n    justify-content: flex-start;\n    border: none;\n    max-height: 80vh;\n  }\n\n  footer > .logo {\n    display: none;\n  }\n\n  header {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    position: sticky;\n    top: 0;\n    display: grid;\n    grid-template-columns: 25% 75%;\n    justify-content: center;\n    background-color: #fca3b9;\n    border: none;\n    z-index: 1000;\n  }\n\n  img {\n    max-width: 260px;\n  }\n\n  form {\n    width: 70%;\n  }\n\n  .content {\n    min-height: 100vh;\n  }\n\n  .item-ctr {\n    grid-template-columns: 80% 1fr 1fr;\n  }\n\n  .menuDiv {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 80%;\n    margin-top: 10%;\n  }\n\n  .menuItemDiv {\n    width: fit-content;\n  }\n\n  .logo {\n    grid-column: 1/2;\n    font-size: 2rem;\n    text-align: center;\n    color: var(--accent-color);\n    opacity: 100%;\n    padding: 0;\n  }\n\n  .header-profile {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding-right: 10rem;\n    gap: 2rem;\n  }\n\n  .header-profile > p {\n    color: var(--accent-color);\n    font-weight: var(--heading-weight);\n    font-size: var(--main-font-size);\n  }\n\n  .logo-ctr {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .view-ctr {\n    grid-column: 2/3;\n    grid-row: 2/6;\n    max-height: 80vh;\n    padding-bottom: 1rem;\n  }\n\n  .add-new-btn {\n    position: fixed;\n    right: 10%;\n    top: 25%;\n    z-index: 1000;\n  }\n\n  form > .button-ctr > button,\n  .choose-icon-ctr > button {\n    width: 30%;\n  }\n\n  .todo-done-ctr,\n  .lists-ctr {\n    padding: 0 15%;\n  }\n\n  .todo-ctr {\n    min-height: 243.797px;\n  }\n  .profile-ctr {\n    padding-top: 10%;\n  }\n}\n"],"sourceRoot":""}]);
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
  console.log("toedit", toEdit);
  const priorityInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("input", "highPriority", ctr, "", [
    ["id", "highPriorityTask"],
    ["type", "checkbox"],
  ]);
  if (toEdit && toEdit.priority === true) {
    priorityInput.setAttribute("checked", true);
  }
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
    edited = false;
    editedIndex = null;
  });
}

function closeFormEL() {
  document.getElementById("close-btn").addEventListener("click", (e) => {
    (0,___WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)(0);
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
  if (i === 0) {
    listItem.classList.add("default");
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
  addProfileEL(headerProfile);
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

function addProfileEL(profileHeader) {
  profileHeader.addEventListener("click", () => {
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_profile__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNew */ "./src/addNew.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/profile.js");
/* harmony import */ var random_avatar_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random-avatar-generator */ "./node_modules/random-avatar-generator/dist/index.js");
/* harmony import */ var random_avatar_generator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(random_avatar_generator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appUI */ "./src/appUI.js");






function createProfileUI(name, avatar) {
  const viewCtr = (0,_addNew__WEBPACK_IMPORTED_MODULE_1__.getViewCtr)();
  const profileCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "profile-ctr", viewCtr);
  const avatarCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "avatar-ctr", profileCtr);
  const avatarImg = avatarUI(avatar, avatarCtr);
  const nameCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "profile-name-ctr", profileCtr);
  const currentName = (0,_profile__WEBPACK_IMPORTED_MODULE_2__.getName)(name);
  const profileName = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "profile-name", nameCtr, currentName);
  const buttonCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "button-ctr", profileCtr);
  const editName = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    "edit-name-btn",
    buttonCtr,
    "Edit name"
  );
  const editAvatar = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    "avatar-btn",
    buttonCtr,
    "Random avatar"
  );
  editNameEL(editName, profileName);
  randomAvatarEL(avatarImg, editAvatar);
}

function avatarUI(avatar, avatarCtr) {
  const currentAvatar = (0,_profile__WEBPACK_IMPORTED_MODULE_2__.getAvatar)(avatar);
  const avatarImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "avatar", avatarCtr, "", [
    ["src", currentAvatar],
  ]);
  return avatarImg;
}

function randomAvatarEL(img, btn) {
  btn.addEventListener("click", () => {
    const generator = new random_avatar_generator__WEBPACK_IMPORTED_MODULE_3__.AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.saveAvatarToStorage)(avatar);
    img.setAttribute("src", avatar);
    (0,_appUI__WEBPACK_IMPORTED_MODULE_4__.renderHeader)();
  });
}

function editNameEL(editName, profileName) {
  editName.addEventListener("click", () => {
    const name = prompt("Enter profile name");
    profileName.textContent = name;
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.saveNameToStorage)(name);
    (0,_appUI__WEBPACK_IMPORTED_MODULE_4__.renderHeader)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsNENBQTRDLCtDQUErQywwQkFBMEIsNEJBQTRCLDhCQUE4QiwyQkFBMkIsR0FBRyxPQUFPLGVBQWUsY0FBYywyQkFBMkIsR0FBRyxVQUFVLHNCQUFzQixxQkFBcUIsR0FBRyxZQUFZLHFCQUFxQixrQkFBa0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLGtDQUFrQywrQkFBK0IsOEJBQThCLDZCQUE2QixHQUFHLFlBQVksa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLG9CQUFvQixxQ0FBcUMsa0NBQWtDLHdCQUF3Qiw0QkFBNEIsNENBQTRDLHdEQUF3RCxHQUFHLDZEQUE2RCxvQkFBb0IsR0FBRyxnQkFBZ0IscUNBQXFDLHVCQUF1QixzQkFBc0IsR0FBRyxRQUFRLHNCQUFzQixHQUFHLFFBQVEsZUFBZSxpQkFBaUIsR0FBRyxTQUFTLGVBQWUsaUJBQWlCLDBCQUEwQixHQUFHLFVBQVUsa0JBQWtCLGdCQUFnQixrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQixtQ0FBbUMsdUNBQXVDLGtCQUFrQixrQ0FBa0MscUNBQXFDLEdBQUcsV0FBVyxxQ0FBcUMsdUNBQXVDLHVCQUF1QixzQkFBc0IsaUJBQWlCLG1CQUFtQixHQUFHLGNBQWMsa0JBQWtCLGtDQUFrQyxnQkFBZ0Isd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLCtCQUErQixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyx3QkFBd0Isb0JBQW9CLGlCQUFpQixHQUFHLGVBQWUsa0JBQWtCLGdDQUFnQyxxQkFBcUIsa0JBQWtCLDBDQUEwQyxHQUFHLGtCQUFrQixvQkFBb0IsZUFBZSxnQkFBZ0Isa0JBQWtCLDhCQUE4QixvQkFBb0Isd0JBQXdCLEdBQUcsbURBQW1ELHFCQUFxQixHQUFHLGVBQWUsMEJBQTBCLEdBQUcsZUFBZSwyQkFBMkIsaUJBQWlCLEdBQUcsaUJBQWlCLHdCQUF3Qix5QkFBeUIsR0FBRyx1QkFBdUIscUNBQXFDLHNCQUFzQix1QkFBdUIsR0FBRyxvQkFBb0Isc0JBQXNCLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IscUJBQXFCLHlCQUF5QixHQUFHLFdBQVcsc0JBQXNCLHNCQUFzQixzREFBc0QsR0FBRyxlQUFlLGtCQUFrQix1Q0FBdUMsZ0NBQWdDLHdCQUF3QixtQkFBbUIsZ0RBQWdELEdBQUcsZUFBZSxxQkFBcUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLDBCQUEwQix5QkFBeUIsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsb0JBQW9CLHFCQUFxQixrQkFBa0IsR0FBRyx3QkFBd0IscUNBQXFDLEdBQUcsbUVBQW1FLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQix5QkFBeUIsR0FBRyxzQ0FBc0MscUJBQXFCLGtCQUFrQixHQUFHLGVBQWUscUJBQXFCLGtCQUFrQiwwQkFBMEIsR0FBRyxlQUFlLHFCQUFxQixrQkFBa0IsR0FBRyxvQkFBb0IsMEJBQTBCLHNCQUFzQix1QkFBdUIsR0FBRyxlQUFlLCtDQUErQyxpQkFBaUIsR0FBRyxjQUFjLDRCQUE0QixHQUFHLFlBQVksaUJBQWlCLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUcsYUFBYSxrQkFBa0IsdUJBQXVCLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDBDQUEwQyxrQkFBa0IsR0FBRyw2Q0FBNkMsa0JBQWtCLDBCQUEwQix5QkFBeUIsR0FBRyxlQUFlLDJCQUEyQixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxZQUFZLGVBQWUseUJBQXlCLGtDQUFrQyxvQkFBb0IsR0FBRyxpQkFBaUIsY0FBYyxxQkFBcUIsR0FBRyw2REFBNkQsZUFBZSxHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLDBCQUEwQixjQUFjLEdBQUcsOEJBQThCLGtCQUFrQixtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxlQUFlLHFCQUFxQixpQ0FBaUMsR0FBRyxrQkFBa0Isa0JBQWtCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3Qix1QkFBdUIsd0JBQXdCLDBDQUEwQyxrQkFBa0IsR0FBRyxhQUFhLHNCQUFzQixnQkFBZ0IsZUFBZSxHQUFHLG9CQUFvQixxQkFBcUIsdUJBQXVCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLG9CQUFvQix1QkFBdUIsR0FBRywrQkFBK0IsWUFBWSx1QkFBdUIsb0JBQW9CLGtDQUFrQyxtQkFBbUIsdUJBQXVCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLGNBQWMsdUJBQXVCLG9CQUFvQix1QkFBdUIsYUFBYSxvQkFBb0IscUNBQXFDLDhCQUE4QixnQ0FBZ0MsbUJBQW1CLG9CQUFvQixLQUFLLFdBQVcsdUJBQXVCLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxnQkFBZ0Isd0JBQXdCLEtBQUssaUJBQWlCLHlDQUF5QyxLQUFLLGdCQUFnQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixrQkFBa0Isc0JBQXNCLEtBQUssb0JBQW9CLHlCQUF5QixLQUFLLGFBQWEsdUJBQXVCLHNCQUFzQix5QkFBeUIsaUNBQWlDLG9CQUFvQixpQkFBaUIsS0FBSyx1QkFBdUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIsMkJBQTJCLGdCQUFnQixLQUFLLDJCQUEyQixpQ0FBaUMseUNBQXlDLHVDQUF1QyxLQUFLLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLGVBQWUsdUJBQXVCLG9CQUFvQix1QkFBdUIsMkJBQTJCLEtBQUssb0JBQW9CLHNCQUFzQixpQkFBaUIsZUFBZSxvQkFBb0IsS0FBSyxpRUFBaUUsaUJBQWlCLEtBQUsscUNBQXFDLHFCQUFxQixLQUFLLGlCQUFpQiw0QkFBNEIsS0FBSyxrQkFBa0IsdUJBQXVCLEtBQUssR0FBRyxxQkFBcUI7QUFDaGtYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pnQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCLG1DQUFtQyxtQkFBTyxDQUFDLHNEQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx1QkFBdUI7Ozs7Ozs7Ozs7O0FDNUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQU8sQ0FBQyx5REFBWTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDZEQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsNkRBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLG1FQUFpQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsK0RBQWU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsNkRBQWM7O0FBRW5DO0FBQ0E7QUFDQSxTQUFTLG1CQUFPLENBQUMsNkRBQWM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEVBQUUsU0FBUyx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sYUFBYSxjQUFjO0FBQUEsa0dBQUM7QUFDckMsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLHdCQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsd0JBQU0sSUFBSSx3QkFBVTtBQUMvQixFQUFFLG1DQUFPLGFBQWEsY0FBYztBQUFBLGtHQUFDO0FBQ3JDLEVBQUU7QUFDRjtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSx3QkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsd0JBQU0sSUFBSSx3QkFBVTtBQUMvQixFQUFFLG1DQUFPLGFBQWEsY0FBYztBQUFBLGtHQUFDO0FBQ3JDLEVBQUU7QUFDRjtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSx3QkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLHdCQUFNLElBQUksd0JBQVU7QUFDL0IsRUFBRSxtQ0FBTyxhQUFhLGNBQWM7QUFBQSxrR0FBQztBQUNyQyxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQywrQkFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsU0FBUyx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sYUFBYSxjQUFjO0FBQUEsa0dBQUM7QUFDckMsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLHdCQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWEsYUFBYTtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsU0FBUyx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sYUFBYSxjQUFjO0FBQUEsa0dBQUM7QUFDckMsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLHdCQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQixnQkFBZ0I7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEM7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEM7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4Q0FBOEM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLHFCQUFRO0FBQ2pDLElBQUk7QUFDSixFQUFFLFNBQVMsSUFBMkM7QUFDdEQsRUFBRSxtQ0FBTyxhQUFhLG9CQUFvQjtBQUFBLGtHQUFDO0FBQzNDLEVBQUUsS0FBSyxFQUdOOzs7QUFHRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNQQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I0Qzs7QUFFN0I7QUFDZixpQkFBaUIsMERBQWE7QUFDOUIsRUFBRSwwREFBYTtBQUNmLGVBQWUsMERBQWE7QUFDNUI7QUFDQSxtQkFBbUIsMERBQWE7QUFDaEMsa0JBQWtCLDBEQUFhO0FBQy9CLEVBQUUsMERBQWE7QUFDZixJQUFJLDBEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBTSwyQkFBMkIsQ0FBa0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQU07QUFDekI7QUFDQSxjQUFjLENBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQkFBc0IsMERBQWE7QUFDbkMsbUJBQW1CLDBEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IsMERBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9CQUFvQiwwREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWtCO0FBQ29EO0FBQ3pDO0FBQ2tCO0FBQ0g7QUFDZDs7QUFFOUI7QUFDQTs7QUFFTztBQUNQLGtCQUFrQixtREFBVTtBQUM1QixtQkFBbUIsbURBQWM7QUFDakMsa0JBQWtCLDBEQUFhO0FBQy9CLGtCQUFrQiwwREFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwREFBYTtBQUNqQyxvQkFBb0IscURBQVk7QUFDaEMsb0JBQW9CLHFEQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQWE7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsMERBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVU7QUFDaEI7QUFDQSxJQUFJLDZDQUFZO0FBQ2hCLElBQUksMkRBQW9CO0FBQ3hCLElBQUksNERBQWU7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBWTtBQUNoQixJQUFJLDJEQUFvQjtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBVTtBQUNoQjtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVk7QUFDaEIsSUFBSSwyREFBb0I7QUFDeEIsSUFBSSw0REFBZTtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHa0I7QUFDMEI7QUFDSztBQUNwQjtBQUNrQjtBQUNKO0FBQ0g7O0FBRXhDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBLEVBQUUsMERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwREFBYTtBQUNmLGlCQUFpQiwwREFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxREFBYztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQLGtCQUFrQixtREFBVTtBQUM1QixtQkFBbUIsbURBQWM7QUFDakMsa0JBQWtCLDBEQUFhO0FBQy9CLHNCQUFzQiwwREFBYTtBQUNuQyxrQkFBa0IsMERBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFhO0FBQ2pDLG9CQUFvQixxREFBWTtBQUNoQyxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFVO0FBQ2hCO0FBQ0EsSUFBSSw2Q0FBWTs7QUFFaEIsSUFBSSw0REFBb0I7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBWTtBQUNoQixJQUFJLDREQUFvQjtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBWTtBQUNoQixJQUFJLDREQUFvQjtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SjZCO0FBQzRCO0FBQ2I7QUFDQztBQUNSO0FBQ1M7QUFDWTtBQUNYOztBQUVoQztBQUNmO0FBQ0EsbUJBQW1CLDBEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEM7QUFDQSxrQkFBa0Isc0RBQWM7QUFDaEM7QUFDQTtBQUNBLHdCQUF3QixzREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMERBQWE7QUFDL0I7QUFDQSxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7O0FBRU87QUFDUCxFQUFFLDZDQUFZO0FBQ2Q7QUFDQSxxQkFBcUIsMERBQWE7QUFDbEMsYUFBYSwwREFBYTtBQUMxQixlQUFlLDBEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBEQUFhO0FBQ2pDLG9CQUFvQiwwREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFXO0FBQ3BDLE1BQU0sMERBQWE7QUFDbkIsTUFBTSw2Q0FBWTtBQUNsQixNQUFNLDJEQUFjO0FBQ3BCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVU7QUFDaEIsTUFBTSw2Q0FBWTtBQUNsQixNQUFNLDJEQUFvQjtBQUMxQixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBWTtBQUNwQixRQUFRLDREQUFvQjtBQUM1QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hINkI7QUFDZTtBQUNHO0FBQ0Q7QUFNM0I7O0FBRUo7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFxRDtBQUN6RCxJQUFJLGlEQUFpRDtBQUNyRCxJQUFJLDREQUE0RDtBQUNoRSxJQUFJLG1EQUFtRDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQWE7QUFDckMsd0JBQXdCLEVBQUU7QUFDMUIsK0JBQStCLEVBQUU7QUFDakM7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCLElBQUksMERBQWE7QUFDakI7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQLGNBQWMsMERBQWE7QUFDM0Isa0JBQWtCLDBEQUFhO0FBQy9CO0FBQ0EsRUFBRSwwREFBYTtBQUNmOztBQUVPO0FBQ1AsaUJBQWlCLDBEQUFhO0FBQzlCLGtCQUFrQiwwREFBYTtBQUMvQixFQUFFLDBEQUFhO0FBQ2Ysd0JBQXdCLDBEQUFhO0FBQ3JDLGlCQUFpQiw2REFBbUI7QUFDcEMsZUFBZSwrREFBcUI7QUFDcEMsYUFBYSxpREFBTztBQUNwQixXQUFXLG1EQUFTO0FBQ3BCLEVBQUUsMERBQWEsbURBQW1ELFNBQVM7QUFDM0UsRUFBRSwwREFBYTtBQUNmO0FBQ0E7O0FBRU87QUFDUCxrQkFBa0IsMERBQWE7QUFDL0I7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzQkFBc0IsMERBQWE7QUFDbkMsRUFBRSwwREFBYTtBQUNmLGtCQUFrQiwwREFBYTtBQUMvQjtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmOztBQUVBO0FBQ0EsRUFBRSwwREFBYTtBQUNmO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGtCQUFrQiwwREFBYTtBQUMvQixFQUFFLDBEQUFhO0FBQ2YsRUFBRSwwREFBYTtBQUNmO0FBQ0E7O0FBRU87QUFDUCxzQkFBc0IsMERBQWE7QUFDbkMsMkJBQTJCLE1BQU07QUFDakM7QUFDQSxrQkFBa0IsMERBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZDQUFZO0FBQ2hCLElBQUksb0RBQXNCO0FBQzFCLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsNkNBQVk7QUFDZDtBQUNBLElBQUksNERBQW9CO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJLDREQUFvQjtBQUN4QjtBQUNBO0FBQ0EsSUFBSSwyREFBb0I7QUFDeEIsSUFBSTtBQUNKLElBQUksb0RBQXNCO0FBQzFCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI2RDs7QUFFN0Q7QUFDQSxNQUFNLGdEQUFNO0FBQ1o7O0FBRUE7QUFDQSxNQUFNLGlEQUFPO0FBQ2I7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSx1QkFBdUIsa0RBQVE7QUFDL0I7QUFDQTtBQUNBLDBCQUEwQixnREFBTTtBQUNoQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCa0M7QUFDWTtBQUNBO0FBQ0M7QUFDekI7O0FBRXRCO0FBQ0EsRUFBRSxrREFBVztBQUNiLEVBQUUsNERBQW9CO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFjO0FBQ3pCO0FBQ0EsRUFBRSwyREFBYztBQUNoQjs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEMwQztBQUNjO0FBQ1Q7O0FBRWhDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQixJQUFJO0FBQ0o7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCO0FBQ0E7O0FBRU87QUFDUCxFQUFFLHlEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkO0FBQ0EsR0FBRztBQUNILEVBQUUsNERBQWU7QUFDakI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakU2QjtBQUNlO0FBQ1I7QUFLbkI7QUFDd0M7QUFDQTtBQUNwQjtBQUNDOztBQUUvQjtBQUNQO0FBQ0EscUJBQXFCLDBEQUFhO0FBQ2xDLGFBQWEsMERBQWE7QUFDMUIsZUFBZSwwREFBYTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFXO0FBQzVCO0FBQ0Esc0JBQXNCLDBEQUFhO0FBQ25DLHNCQUFzQiwwREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBEQUFhO0FBQ2xDLEVBQUUsMERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFjO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwwREFBYTtBQUN2QyxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQSxrQkFBa0Isc0RBQWM7QUFDaEM7QUFDQSxzQkFBc0Isc0RBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQWE7QUFDcEM7QUFDQTtBQUNBLHVCQUF1QiwwREFBYTtBQUNwQyxJQUFJLDBEQUFhO0FBQ2pCLHFCQUFxQiwwQ0FBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZDQUFZO0FBQ2hCLElBQUksNERBQW9CO0FBQ3hCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFXO0FBQ3BDLE1BQU0sc0RBQVM7QUFDZixNQUFNLDZDQUFZO0FBQ2xCLE1BQU0sMkRBQWM7QUFDcEIsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFEQUFxRCxNQUFNO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBVztBQUNwQztBQUNBLE1BQU0sNERBQW9CO0FBQzFCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLMEM7QUFDZ0I7O0FBRTNDO0FBQ2Y7QUFDQTtBQUNBLEVBQUUsc0RBQWU7QUFDakI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDNEM7QUFDTjtBQU1uQjtBQUN1QztBQUNuQjs7QUFFeEI7QUFDZixrQkFBa0IsbURBQVU7QUFDNUIscUJBQXFCLDBEQUFhO0FBQ2xDLG9CQUFvQiwwREFBYTtBQUNqQztBQUNBLGtCQUFrQiwwREFBYTtBQUMvQixzQkFBc0IsaURBQU87QUFDN0Isc0JBQXNCLDBEQUFhO0FBQ25DLG9CQUFvQiwwREFBYTtBQUNqQyxtQkFBbUIsMERBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG1EQUFTO0FBQ2pDLG9CQUFvQiwwREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG9FQUFlO0FBQ3pDO0FBQ0EsSUFBSSw2REFBbUI7QUFDdkI7QUFDQSxJQUFJLG9EQUFZO0FBQ2hCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWlCO0FBQ3JCLElBQUksb0RBQVk7QUFDaEIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHNEO0FBQ2pCO0FBQ0Y7QUFDc0I7QUFDbkI7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLEVBQUUsbURBQVc7QUFDYjtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUksa0RBQVc7QUFDZixJQUFJO0FBQ0osSUFBSSxrREFBVztBQUNmO0FBQ0EsRUFBRSx3REFBZTtBQUNqQixFQUFFLHFEQUFZO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBTztBQUNmLE1BQU0sbURBQVU7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVU7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnNEO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDSztBQUNEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDJCQUEyQiw2REFBVztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEOztBQUVBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSx3QkFBd0IsbUVBQWM7O0FBRXRDO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFlO0FBQzlCO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0EsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQ0FBc0M7QUFDN0U7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpQkFBaUIscURBQU87O0FBRXhCO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQVU7O0FBRTlCO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFOztBQUVBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFZOztBQUVsQztBQUNBLGlEQUFpRCxtQkFBbUI7QUFDcEU7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esc0RBQXNELGFBQWE7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEOztBQUVBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxnQkFBZ0I7QUFDekU7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxnQkFBZ0I7QUFDekU7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxRUFBZTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFlO0FBQy9CLGtCQUFrQixxRUFBZTtBQUNqQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzd3QnlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCLGdCQUFnQixNQUFNO0FBQ3RCOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsZ0RBQWdELE9BQU8sMENBQTBDLE1BQU0sSUFBSTtBQUMzRztBQUNBLElBQUk7QUFDSjtBQUNBLDRDQUE0QyxPQUFPLDBDQUEwQyxNQUFNLElBQUk7QUFDdkc7QUFDQSxJQUFJO0FBQ0o7QUFDQSwwQ0FBMEMsT0FBTyxzREFBc0QsTUFBTSxJQUFJO0FBQ2pIO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNENBQTRDLE9BQU8sc0RBQXNELE1BQU0sSUFBSTtBQUNuSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN1QjtBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJEQUFVOztBQUVwQztBQUNBLCtCQUErQix5R0FBK0I7QUFDOUQ7QUFDQTtBQUNBLElBQUkseUdBQStCOztBQUVuQztBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQWlCO0FBQ3hFOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNGO0FBQ21CO0FBQ0s7QUFDSjtBQUNRO0FBSzlCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHVCQUF1QjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsNkVBQTZFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw4RUFBOEUsSUFBSTtBQUNuRztBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxPQUFPO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLDhCQUE4QjtBQUM5QixNQUFNLGNBQWM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Q5QkM7QUFDSTtBQUNUOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZVOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCOztBQUVqRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBWTtBQUNoQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLFNBQVM7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtRUFBbUUsU0FBUzs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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QTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9yYW5kb20tYXZhdGFyLWdlbmVyYXRvci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvYWxlYS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi90eWNoZWkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yMTI4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjQwOTYuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yc2hpZnQ3LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcndvdy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL3NlZWRyYW5kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvYWRkTmV3LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2FkZE5ld0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvYWRkTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9hbGxMaXN0c1VJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2FwcFVJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2xpc3RVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9wcm9maWxlLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3Byb2ZpbGVVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay9pZ25vcmVkfC9ob21lL2VtLWpoL0RvY3VtZW50cy9HaXRIdWIvdG9kby13ZWJwYWNrLXYyL3RvcC10b2RvbGlzdC13ZWJwYWNrL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tfGNyeXB0byIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNQYXN0Lm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2VJU08ubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Vtb2ppLXBpY2tlci1lbGVtZW50L2RhdGFiYXNlLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Vtb2ppLXBpY2tlci1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Vtb2ppLXBpY2tlci1lbGVtZW50L3BpY2tlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLW1haW4tZm9udDogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0taGVhZGluZy1mb250OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgLS1oZWFkaW5nLXdlaWdodDogNjAwO1xuICAtLWFjY2VudC1jb2xvcjogI2Y2ZjRmOTtcbiAgLS1hY2NlbnQtY29sb3ItMjogI2ZjYTNiOTtcbiAgLS1tYWluLWZvbnQtc2l6ZTogMThweDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogNS82O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTg0YzY7XG4gIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMik7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcbn1cblxuYnV0dG9uOmhvdmVyLFxuLmxpc3QtaXRlbTpob3Zlcixcbi5oZWFkZXItcHJvZmlsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG4uZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5ociB7XG4gIHdpZHRoOiA5MCU7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjNyZW07XG59XG5cbmZvcm0ge1xuICBncmlkLXJvdzogMi8zO1xuICB3aWR0aDogOTF2dztcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogOTAlO1xuICBjb2xvcjogI2ZjYTNiOTtcbn1cblxuLm1lbnVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51SXRlbURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubWVudUl0ZW1EaXYgPiBpIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWVudUl0ZW1EaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuLnZpZXctY3RyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNyUgMWZyO1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMS81O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4uYWRkLW5ldy1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMCU7XG4gIGJvdHRvbTogMjUlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiOGM3O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi50b2RvLWRvbmUtY3RyLFxuLmxpc3RzLWN0cixcbi5hZGQtbmV3LFxuZm9ybSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50b2RvLWN0ciB7XG4gIG1pbi1oZWlnaHQ6IDE5NC44NzVweDtcbn1cblxuLmRvbmUtY3RyIHtcbiAgbWFyZ2luOiAxMCUgMC41cmVtIDAgMDtcbiAgb3BhY2l0eTogNjAlO1xufVxuXG4uZG9uZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4ubm90aGluZy1jb21wbGV0ZSB7XG4gIGJvcmRlci1ib3R0b206ICNiMGI4Yzcgc29saWQgMXB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tdGFza3MtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBvcGFjaXR5OiA2MCU7XG59XG5cbi5oZWFkaW5nLWN0ciB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4ubG9nbyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLml0ZW0tY3RyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NSUgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDE4NSwgMTg1LCAxODUpIHNvbGlkIDFweDtcbn1cblxuLnRleHQtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG4udGV4dC1kaXYgPiBwIHtcbiAgcGFkZGluZy10b3A6IDAuM3JlbTtcbn1cblxuLm9wZW4tZWRpdC1kaXYge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMi8zO1xufVxuXG4ub3Blbi1lZGl0LWRpdiA+IGkge1xuICBmb250LXNpemU6IHZhcigtLW1haW4tZm9udC1zaXplKTtcbn1cblxuLm9wZW4tZWRpdC1kaXYsXG4udGFzay1jb21wbGV0ZS1kaXYsXG4uZGVsZXRlLWRpdixcbi5pY29uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhc2stY29tcGxldGUtZGl2LFxuLmRlbGV0ZS1kaXYge1xuICBncmlkLWNvbHVtbjogMy80O1xuICBncmlkLXJvdzogMi8zO1xufVxuXG4uZHVlLWRhdGUge1xuICBncmlkLWNvbHVtbjogMi80O1xuICBncmlkLXJvdzogMS8yO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG59XG5cbi5pY29uLWRpdiB7XG4gIGdyaWQtY29sdW1uOiAyLzQ7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbi5saXN0LWljb24tYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMS40cmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMHJlbSAycmVtO1xufVxuXG4ucHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogcmdiKDIzNSwgOTUsIDQ0KSBzb2xpZCAwLjNyZW07XG4gIG9wYWNpdHk6IDkwJTtcbn1cblxuLm92ZXJkdWUge1xuICBjb2xvcjogcmdiKDIzNSwgOTUsIDQ0KTtcbn1cblxuLnRvZGF5IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9kYXksXG4ub3ZlcmR1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uby10YXNrcy1jdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5oMS1uZXcge1xuICBncmlkLXJvdzogMS8yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5hZGQtbmV3IHtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmZvcm0tY3RyLFxuLnByaW9yaXR5LWN0cixcbi5idXR0b24tY3RyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbn1cblxuLmZvcm0tY3RyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByaW9yaXR5LWN0ciB7XG4gIGdhcDogMC40cmVtO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogOTglO1xuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmJ1dHRvbi1jdHIge1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmZvcm0gPiAuYnV0dG9uLWN0ciA+IGJ1dHRvbixcbi5jaG9vc2UtaWNvbi1jdHIgPiBidXR0b24ge1xuICB3aWR0aDogNDAlO1xufVxuXG4uY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYmZmODtcbn1cblxuLmNsb3NlLWN0ciB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmNob29zZS1pY29uLWN0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG4gIGdhcDogMXJlbTtcbn1cblxuLmNob29zZS1pY29uLWN0ciA+IGlucHV0IHtcbiAgd2lkdGg6IDEuOHJlbTtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWZhdWx0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcbn1cblxuLnByb2ZpbGUtY3RyIHtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmF2YXRhciB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmF2YXRhci1oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5wcm9maWxlLW5hbWUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbiNpbnB1dFRhc2tEYXRlIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgZm9vdGVyIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAyLzY7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG5cbiAgZm9vdGVyID4gLmxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhM2I5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5pdGVtLWN0ciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMWZyIDFmcjtcbiAgfVxuXG4gIC5tZW51RGl2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgLm1lbnVJdGVtRGl2IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAubG9nbyB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5oZWFkZXItcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5oZWFkZXItcHJvZmlsZSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XG4gIH1cblxuICAubG9nby1jdHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAudmlldy1jdHIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDIvNjtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmFkZC1uZXctYnRuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDI1JTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgZm9ybSA+IC5idXR0b24tY3RyID4gYnV0dG9uLFxuICAuY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgLnRvZG8tZG9uZS1jdHIsXG4gIC5saXN0cy1jdHIge1xuICAgIHBhZGRpbmc6IDAgMTUlO1xuICB9XG5cbiAgLnRvZG8tY3RyIHtcbiAgICBtaW4taGVpZ2h0OiAyNDMuNzk3cHg7XG4gIH1cbiAgLnByb2ZpbGUtY3RyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFC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YWluLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0taGVhZGluZy1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWhlYWRpbmctd2VpZ2h0OiA2MDA7XFxuICAtLWFjY2VudC1jb2xvcjogI2Y2ZjRmOTtcXG4gIC0tYWNjZW50LWNvbG9yLTI6ICNmY2EzYjk7XFxuICAtLW1haW4tZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogNS82O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE4NGM2O1xcbiAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5saXN0LWl0ZW06aG92ZXIsXFxuLmhlYWRlci1wcm9maWxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaDEsXFxuLmRlc2Mge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbmhyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMS4zcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICB3aWR0aDogOTF2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3BhY2l0eTogOTAlO1xcbiAgY29sb3I6ICNmY2EzYjk7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnVJdGVtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubWVudUl0ZW1EaXYgPiBpIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1lbnVJdGVtRGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLnZpZXctY3RyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3JSAxZnI7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5hZGQtbmV3LWJ0biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTAlO1xcbiAgYm90dG9tOiAyNSU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjhjNztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi50b2RvLWRvbmUtY3RyLFxcbi5saXN0cy1jdHIsXFxuLmFkZC1uZXcsXFxuZm9ybSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udG9kby1jdHIge1xcbiAgbWluLWhlaWdodDogMTk0Ljg3NXB4O1xcbn1cXG5cXG4uZG9uZS1jdHIge1xcbiAgbWFyZ2luOiAxMCUgMC41cmVtIDAgMDtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmRvbmUtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ubm90aGluZy1jb21wbGV0ZSB7XFxuICBib3JkZXItYm90dG9tOiAjYjBiOGM3IHNvbGlkIDFweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm8tdGFza3MtdGV4dCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmhlYWRpbmctY3RyIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uaXRlbS1jdHIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjUlIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiByZ2IoMTg1LCAxODUsIDE4NSkgc29saWQgMXB4O1xcbn1cXG5cXG4udGV4dC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4udGV4dC1kaXYgPiBwIHtcXG4gIHBhZGRpbmctdG9wOiAwLjNyZW07XFxufVxcblxcbi5vcGVuLWVkaXQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ub3Blbi1lZGl0LWRpdiA+IGkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1tYWluLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5vcGVuLWVkaXQtZGl2LFxcbi50YXNrLWNvbXBsZXRlLWRpdixcXG4uZGVsZXRlLWRpdixcXG4uaWNvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtZGl2LFxcbi5kZWxldGUtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5pY29uLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmxpc3QtaWNvbi1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMS40cmVtO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nOiAwcmVtIDJyZW07XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogcmdiKDIzNSwgOTUsIDQ0KSBzb2xpZCAwLjNyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi5vdmVyZHVlIHtcXG4gIGNvbG9yOiByZ2IoMjM1LCA5NSwgNDQpO1xcbn1cXG5cXG4udG9kYXkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9kYXksXFxuLm92ZXJkdWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5vLXRhc2tzLWN0ciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaDEtbmV3IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uYWRkLW5ldyB7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHotaW5kZXg6IDEwMDE7XFxufVxcblxcbi5mb3JtLWN0cixcXG4ucHJpb3JpdHktY3RyLFxcbi5idXR0b24tY3RyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcXG59XFxuXFxuLmZvcm0tY3RyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcmlvcml0eS1jdHIge1xcbiAgZ2FwOiAwLjRyZW07XFxufVxcblxcbi5pbnB1dCB7XFxuICB3aWR0aDogOTglO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi1jdHIge1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuZm9ybSA+IC5idXR0b24tY3RyID4gYnV0dG9uLFxcbi5jaG9vc2UtaWNvbi1jdHIgPiBidXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLmNob29zZS1pY29uLWN0ciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBiZmY4O1xcbn1cXG5cXG4uY2xvc2UtY3RyIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNob29zZS1pY29uLWN0ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hvb3NlLWljb24tY3RyID4gaW5wdXQge1xcbiAgd2lkdGg6IDEuOHJlbTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZWZhdWx0IHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMik7XFxufVxcblxcbi5wcm9maWxlLWN0ciB7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHotaW5kZXg6IDEwMDE7XFxufVxcblxcbi5hdmF0YXIge1xcbiAgbWluLWhlaWdodDogMTgwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hdmF0YXItaGVhZGVyIHtcXG4gIG1heC1oZWlnaHQ6IDVyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9maWxlLW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jaW5wdXRUYXNrRGF0ZSB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xcbiAgZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvNjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxuICB9XFxuXFxuICBmb290ZXIgPiAubG9nbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2EzYjk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMjYwcHg7XFxuICB9XFxuXFxuICBmb3JtIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAuaXRlbS1jdHIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLm1lbnVEaXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbURpdiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmhlYWRlci1wcm9maWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyLXByb2ZpbGUgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi1mb250LXNpemUpO1xcbiAgfVxcblxcbiAgLmxvZ28tY3RyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAudmlldy1jdHIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi82O1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtbmV3LWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDEwJTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICB9XFxuXFxuICBmb3JtID4gLmJ1dHRvbi1jdHIgPiBidXR0b24sXFxuICAuY2hvb3NlLWljb24tY3RyID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG5cXG4gIC50b2RvLWRvbmUtY3RyLFxcbiAgLmxpc3RzLWN0ciB7XFxuICAgIHBhZGRpbmc6IDAgMTUlO1xcbiAgfVxcblxcbiAgLnRvZG8tY3RyIHtcXG4gICAgbWluLWhlaWdodDogMjQzLjc5N3B4O1xcbiAgfVxcbiAgLnByb2ZpbGUtY3RyIHtcXG4gICAgcGFkZGluZy10b3A6IDEwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkF2YXRhckdlbmVyYXRvciA9IHZvaWQgMDtcclxudmFyIHNlZWRyYW5kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic2VlZHJhbmRvbVwiKSk7XHJcbi8qKiBAZGVzY3JpcHRpb24gQ2xhc3MgdG8gZ2VuZXJhdGUgYXZhdGFycyAgKi9cclxudmFyIEF2YXRhckdlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEF2YXRhckdlbmVyYXRvcigpIHtcclxuICAgIH1cclxuICAgIC8qKiBAZGVzY3JpcHRpb24gR2VuZXJhdGVzIHJhbmRvbSBhdmF0YXIgaW1hZ2UgVVJMXHJcbiAgICAgKiBAcmV0dXJucyBSYW5kb20gYXZhdGFyIGltYWdlIFVSTFxyXG4gICAgICovXHJcbiAgICBBdmF0YXJHZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlUmFuZG9tQXZhdGFyID0gZnVuY3Rpb24gKHNlZWQpIHtcclxuICAgICAgICB2YXIgdG9wVHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0b3BUeXBlT3B0aW9ucy5wdXNoKFwiTm9IYWlyXCIsIFwiRXllcGF0Y2hcIiwgXCJIYXRcIiwgXCJIaWphYlwiLCBcIlR1cmJhblwiLCBcIldpbnRlckhhdDFcIiwgXCJXaW50ZXJIYXQyXCIsIFwiV2ludGVySGF0M1wiLCBcIldpbnRlckhhdDRcIiwgXCJMb25nSGFpckJpZ0hhaXJcIiwgXCJMb25nSGFpckJvYlwiLCBcIkxvbmdIYWlyQnVuXCIsIFwiTG9uZ0hhaXJDdXJseVwiLCBcIkxvbmdIYWlyQ3VydnlcIiwgXCJMb25nSGFpckRyZWFkc1wiLCBcIkxvbmdIYWlyRnJpZGFcIiwgXCJMb25nSGFpckZyb1wiLCBcIkxvbmdIYWlyRnJvQmFuZFwiLCBcIkxvbmdIYWlyTm90VG9vTG9uZ1wiLCBcIkxvbmdIYWlyU2hhdmVkU2lkZXNcIiwgXCJMb25nSGFpck1pYVdhbGxhY2VcIiwgXCJMb25nSGFpclN0cmFpZ2h0XCIsIFwiTG9uZ0hhaXJTdHJhaWdodDJcIiwgXCJMb25nSGFpclN0cmFpZ2h0U3RyYW5kXCIsIFwiU2hvcnRIYWlyRHJlYWRzMDFcIiwgXCJTaG9ydEhhaXJEcmVhZHMwMlwiLCBcIlNob3J0SGFpckZyaXp6bGVcIiwgXCJTaG9ydEhhaXJTaGFnZ3lNdWxsZXRcIiwgXCJTaG9ydEhhaXJTaG9ydEN1cmx5XCIsIFwiU2hvcnRIYWlyU2hvcnRGbGF0XCIsIFwiU2hvcnRIYWlyU2hvcnRSb3VuZFwiLCBcIlNob3J0SGFpclNob3J0V2F2ZWRcIiwgXCJTaG9ydEhhaXJTaWRlc1wiLCBcIlNob3J0SGFpclRoZUNhZXNhclwiLCBcIlNob3J0SGFpclRoZUNhZXNhclNpZGVQYXJ0XCIpO1xyXG4gICAgICAgIHZhciBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgYWNjZXNzb3JpZXNUeXBlT3B0aW9ucy5wdXNoKFwiQmxhbmtcIiwgXCJLdXJ0XCIsIFwiUHJlc2NyaXB0aW9uMDFcIiwgXCJQcmVzY3JpcHRpb24wMlwiLCBcIlJvdW5kXCIsIFwiU3VuZ2xhc3Nlc1wiLCBcIldheWZhcmVyc1wiKTtcclxuICAgICAgICB2YXIgZmFjaWFsSGFpclR5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZmFjaWFsSGFpclR5cGVPcHRpb25zLnB1c2goXCJCbGFua1wiLCBcIkJlYXJkTWVkaXVtXCIsIFwiQmVhcmRMaWdodFwiLCBcIkJlYXJkTWFnZXN0aWNcIiwgXCJNb3VzdGFjaGVGYW5jeVwiLCBcIk1vdXN0YWNoZU1hZ251bVwiKTtcclxuICAgICAgICB2YXIgZmFjaWFsSGFpckNvbG9yT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZhY2lhbEhhaXJDb2xvck9wdGlvbnMucHVzaChcIkF1YnVyblwiLCBcIkJsYWNrXCIsIFwiQmxvbmRlXCIsIFwiQmxvbmRlR29sZGVuXCIsIFwiQnJvd25cIiwgXCJCcm93bkRhcmtcIiwgXCJQbGF0aW51bVwiLCBcIlJlZFwiKTtcclxuICAgICAgICB2YXIgY2xvdGhlVHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjbG90aGVUeXBlT3B0aW9ucy5wdXNoKFwiQmxhemVyU2hpcnRcIiwgXCJCbGF6ZXJTd2VhdGVyXCIsIFwiQ29sbGFyU3dlYXRlclwiLCBcIkdyYXBoaWNTaGlydFwiLCBcIkhvb2RpZVwiLCBcIk92ZXJhbGxcIiwgXCJTaGlydENyZXdOZWNrXCIsIFwiU2hpcnRTY29vcE5lY2tcIiwgXCJTaGlydFZOZWNrXCIpO1xyXG4gICAgICAgIHZhciBleWVUeXBlT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGV5ZVR5cGVPcHRpb25zLnB1c2goXCJDbG9zZVwiLCBcIkNyeVwiLCBcIkRlZmF1bHRcIiwgXCJEaXp6eVwiLCBcIkV5ZVJvbGxcIiwgXCJIYXBweVwiLCBcIkhlYXJ0c1wiLCBcIlNpZGVcIiwgXCJTcXVpbnRcIiwgXCJTdXJwcmlzZWRcIiwgXCJXaW5rXCIsIFwiV2lua1dhY2t5XCIpO1xyXG4gICAgICAgIHZhciBleWVicm93VHlwZU9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBleWVicm93VHlwZU9wdGlvbnMucHVzaChcIkFuZ3J5XCIsIFwiQW5ncnlOYXR1cmFsXCIsIFwiRGVmYXVsdFwiLCBcIkRlZmF1bHROYXR1cmFsXCIsIFwiRmxhdE5hdHVyYWxcIiwgXCJSYWlzZWRFeGNpdGVkXCIsIFwiUmFpc2VkRXhjaXRlZE5hdHVyYWxcIiwgXCJTYWRDb25jZXJuZWRcIiwgXCJTYWRDb25jZXJuZWROYXR1cmFsXCIsIFwiVW5pYnJvd05hdHVyYWxcIiwgXCJVcERvd25cIiwgXCJVcERvd25OYXR1cmFsXCIpO1xyXG4gICAgICAgIHZhciBtb3V0aFR5cGVPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgbW91dGhUeXBlT3B0aW9ucy5wdXNoKFwiQ29uY2VybmVkXCIsIFwiRGVmYXVsdFwiLCBcIkRpc2JlbGllZlwiLCBcIkVhdGluZ1wiLCBcIkdyaW1hY2VcIiwgXCJTYWRcIiwgXCJTY3JlYW1PcGVuXCIsIFwiU2VyaW91c1wiLCBcIlNtaWxlXCIsIFwiVG9uZ3VlXCIsIFwiVHdpbmtsZVwiLCBcIlZvbWl0XCIpO1xyXG4gICAgICAgIHZhciBza2luQ29sb3JPcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc2tpbkNvbG9yT3B0aW9ucy5wdXNoKFwiVGFubmVkXCIsIFwiWWVsbG93XCIsIFwiUGFsZVwiLCBcIkxpZ2h0XCIsIFwiQnJvd25cIiwgXCJEYXJrQnJvd25cIiwgXCJCbGFja1wiKTtcclxuICAgICAgICB2YXIgaGFpckNvbG9yVHlwZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBoYWlyQ29sb3JUeXBlcy5wdXNoKFwiQXVidXJuXCIsIFwiQmxhY2tcIiwgXCJCbG9uZGVcIiwgXCJCbG9uZGVHb2xkZW5cIiwgXCJCcm93blwiLCBcIkJyb3duRGFya1wiLCBcIlBhc3RlbFBpbmtcIiwgXCJQbGF0aW51bVwiLCBcIlJlZFwiLCBcIlNpbHZlckdyYXlcIik7XHJcbiAgICAgICAgdmFyIGhhdENvbG9yT3B0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGhhdENvbG9yT3B0aW9ucy5wdXNoKFwiQmxhY2tcIiwgXCJCbHVlMDFcIiwgXCJCbHVlMDJcIiwgXCJCbHVlMDNcIiwgXCJHcmF5MDFcIiwgXCJHcmF5MDJcIiwgXCJIZWF0aGVyXCIsIFwiUGFzdGVsQmx1ZVwiLCBcIlBhc3RlbEdyZWVuXCIsIFwiUGFzdGVsT3JhbmdlXCIsIFwiUGFzdGVsUmVkXCIsIFwiUGFzdGVsWWVsbG93XCIsIFwiUGlua1wiLCBcIlJlZFwiLCBcIldoaXRlXCIpO1xyXG4gICAgICAgIHZhciBjbG90aGVDb2xvck9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjbG90aGVDb2xvck9wdGlvbnMucHVzaChcIkJsYWNrXCIsIFwiQmx1ZTAxXCIsIFwiQmx1ZTAyXCIsIFwiQmx1ZTAzXCIsIFwiR3JheTAxXCIsIFwiR3JheTAyXCIsIFwiSGVhdGhlclwiLCBcIlBhc3RlbEJsdWVcIiwgXCJQYXN0ZWxHcmVlblwiLCBcIlBhc3RlbE9yYW5nZVwiLCBcIlBhc3RlbFJlZFwiLCBcIlBhc3RlbFllbGxvd1wiLCBcIlBpbmtcIiwgXCJSZWRcIiwgXCJXaGl0ZVwiKTtcclxuICAgICAgICB2YXIgcm5nID0gc2VlZCA/IHNlZWRyYW5kb21fMS5kZWZhdWx0KHNlZWQpIDogc2VlZHJhbmRvbV8xLmRlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gXCJodHRwczovL2F2YXRhYWFycy5pby8/YWNjZXNzb3JpZXNUeXBlPVwiICsgYWNjZXNzb3JpZXNUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogYWNjZXNzb3JpZXNUeXBlT3B0aW9ucy5sZW5ndGgpXSArIFwiJmF2YXRhclN0eWxlPUNpcmNsZSZjbG90aGVDb2xvcj1cIiArIGNsb3RoZUNvbG9yT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogY2xvdGhlQ29sb3JPcHRpb25zLmxlbmd0aCldICsgXCImY2xvdGhlVHlwZT1cIiArIGNsb3RoZVR5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBjbG90aGVUeXBlT3B0aW9ucy5sZW5ndGgpXSArIFwiJmV5ZVR5cGU9XCIgKyBleWVUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogZXllVHlwZU9wdGlvbnMubGVuZ3RoKV0gKyBcIiZleWVicm93VHlwZT1cIiArIGV5ZWJyb3dUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogZXllYnJvd1R5cGVPcHRpb25zLmxlbmd0aCldICsgXCImZmFjaWFsSGFpckNvbG9yPVwiICsgZmFjaWFsSGFpckNvbG9yT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogZmFjaWFsSGFpckNvbG9yT3B0aW9ucy5sZW5ndGgpXSArIFwiJmZhY2lhbEhhaXJUeXBlPVwiICsgZmFjaWFsSGFpclR5cGVPcHRpb25zW01hdGguZmxvb3Iocm5nKCkgKiBmYWNpYWxIYWlyVHlwZU9wdGlvbnMubGVuZ3RoKV0gKyBcIiZoYWlyQ29sb3I9XCIgKyBoYWlyQ29sb3JUeXBlc1tNYXRoLmZsb29yKHJuZygpICogaGFpckNvbG9yVHlwZXMubGVuZ3RoKV0gKyBcIiZoYXRDb2xvcj1cIiArIGhhdENvbG9yT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogaGF0Q29sb3JPcHRpb25zLmxlbmd0aCldICsgXCImbW91dGhUeXBlPVwiICsgbW91dGhUeXBlT3B0aW9uc1tNYXRoLmZsb29yKHJuZygpICogbW91dGhUeXBlT3B0aW9ucy5sZW5ndGgpXSArIFwiJnNraW5Db2xvcj1cIiArIHNraW5Db2xvck9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIHNraW5Db2xvck9wdGlvbnMubGVuZ3RoKV0gKyBcIiZ0b3BUeXBlPVwiICsgdG9wVHlwZU9wdGlvbnNbTWF0aC5mbG9vcihybmcoKSAqIHRvcFR5cGVPcHRpb25zLmxlbmd0aCldO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBdmF0YXJHZW5lcmF0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXZhdGFyR2VuZXJhdG9yID0gQXZhdGFyR2VuZXJhdG9yO1xyXG4iLCIvLyBBIGxpYnJhcnkgb2Ygc2VlZGFibGUgUk5HcyBpbXBsZW1lbnRlZCBpbiBKYXZhc2NyaXB0LlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciBzZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuLy8gdmFyIHJhbmRvbSA9IHNlZWRyYW5kb20oMSk7IC8vIG9yIGFueSBzZWVkLlxuLy8gdmFyIHggPSByYW5kb20oKTsgICAgICAgLy8gMCA8PSB4IDwgMS4gIEV2ZXJ5IGJpdCBpcyByYW5kb20uXG4vLyB2YXIgeCA9IHJhbmRvbS5xdWljaygpOyAvLyAwIDw9IHggPCAxLiAgMzIgYml0cyBvZiByYW5kb21uZXNzLlxuXG4vLyBhbGVhLCBhIDUzLWJpdCBtdWx0aXBseS13aXRoLWNhcnJ5IGdlbmVyYXRvciBieSBKb2hhbm5lcyBCYWFnw7hlLlxuLy8gUGVyaW9kOiB+Ml4xMTZcbi8vIFJlcG9ydGVkIHRvIHBhc3MgYWxsIEJpZ0NydXNoIHRlc3RzLlxudmFyIGFsZWEgPSByZXF1aXJlKCcuL2xpYi9hbGVhJyk7XG5cbi8vIHhvcjEyOCwgYSBwdXJlIHhvci1zaGlmdCBnZW5lcmF0b3IgYnkgR2VvcmdlIE1hcnNhZ2xpYS5cbi8vIFBlcmlvZDogMl4xMjgtMS5cbi8vIFJlcG9ydGVkIHRvIGZhaWw6IE1hdHJpeFJhbmsgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yMTI4ID0gcmVxdWlyZSgnLi9saWIveG9yMTI4Jyk7XG5cbi8vIHhvcndvdywgR2VvcmdlIE1hcnNhZ2xpYSdzIDE2MC1iaXQgeG9yLXNoaWZ0IGNvbWJpbmVkIHBsdXMgd2V5bC5cbi8vIFBlcmlvZDogMl4xOTItMl4zMlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogQ29sbGlzaW9uT3ZlciwgU2ltcFBva2VyLCBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3J3b3cgPSByZXF1aXJlKCcuL2xpYi94b3J3b3cnKTtcblxuLy8geG9yc2hpZnQ3LCBieSBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllciwgdGFrZXNcbi8vIGEgZGlmZmVyZW50IGFwcHJvYWNoOiBpdCBhZGRzIHJvYnVzdG5lc3MgYnkgYWxsb3dpbmcgbW9yZSBzaGlmdHNcbi8vIHRoYW4gTWFyc2FnbGlhJ3Mgb3JpZ2luYWwgdGhyZWUuICBJdCBpcyBhIDctc2hpZnQgZ2VuZXJhdG9yXG4vLyB3aXRoIDI1NiBiaXRzLCB0aGF0IHBhc3NlcyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RtYXRpYyBmYWlsdXJlcy5cbi8vIFBlcmlvZCAyXjI1Ni0xLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3JzaGlmdDcgPSByZXF1aXJlKCcuL2xpYi94b3JzaGlmdDcnKTtcblxuLy8geG9yNDA5NiwgYnkgUmljaGFyZCBCcmVudCwgaXMgYSA0MDk2LWJpdCB4b3Itc2hpZnQgd2l0aCBhXG4vLyB2ZXJ5IGxvbmcgcGVyaW9kIHRoYXQgYWxzbyBhZGRzIGEgV2V5bCBnZW5lcmF0b3IuIEl0IGFsc28gcGFzc2VzXG4vLyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RlbWF0aWMgZmFpbHVyZXMuICBJdHMgbG9uZyBwZXJpb2QgbWF5XG4vLyBiZSB1c2VmdWwgaWYgeW91IGhhdmUgbWFueSBnZW5lcmF0b3JzIGFuZCBuZWVkIHRvIGF2b2lkXG4vLyBjb2xsaXNpb25zLlxuLy8gUGVyaW9kOiAyXjQxMjgtMl4zMi5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yNDA5NiA9IHJlcXVpcmUoJy4vbGliL3hvcjQwOTYnKTtcblxuLy8gVHljaGUtaSwgYnkgU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLCBpcyBhIGJpdC1zaGlmdGluZyByYW5kb21cbi8vIG51bWJlciBnZW5lcmF0b3IgZGVyaXZlZCBmcm9tIENoYUNoYSwgYSBtb2Rlcm4gc3RyZWFtIGNpcGhlci5cbi8vIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG4vLyBQZXJpb2Q6IH4yXjEyN1xuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB0eWNoZWkgPSByZXF1aXJlKCcuL2xpYi90eWNoZWknKTtcblxuLy8gVGhlIG9yaWdpbmFsIEFSQzQtYmFzZWQgcHJuZyBpbmNsdWRlZCBpbiB0aGlzIGxpYnJhcnkuXG4vLyBQZXJpb2Q6IH4yXjE2MDBcbnZhciBzciA9IHJlcXVpcmUoJy4vc2VlZHJhbmRvbScpO1xuXG5zci5hbGVhID0gYWxlYTtcbnNyLnhvcjEyOCA9IHhvcjEyODtcbnNyLnhvcndvdyA9IHhvcndvdztcbnNyLnhvcnNoaWZ0NyA9IHhvcnNoaWZ0NztcbnNyLnhvcjQwOTYgPSB4b3I0MDk2O1xuc3IudHljaGVpID0gdHljaGVpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNyO1xuIiwiLy8gQSBwb3J0IG9mIGFuIGFsZ29yaXRobSBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbi8vIGh0dHA6Ly9iYWFnb2UuY29tL2VuL1JhbmRvbU11c2luZ3MvamF2YXNjcmlwdC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ucXVpbmxhbi9iZXR0ZXItcmFuZG9tLW51bWJlcnMtZm9yLWphdmFzY3JpcHQtbWlycm9yXG4vLyBPcmlnaW5hbCB3b3JrIGlzIHVuZGVyIE1JVCBsaWNlbnNlIC1cblxuLy8gQ29weXJpZ2h0IChDKSAyMDEwIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2Uub3JnPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cblxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBBbGVhKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgbWFzaCA9IE1hc2goKTtcblxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICBtZS5zMCA9IG1lLnMxO1xuICAgIG1lLnMxID0gbWUuczI7XG4gICAgcmV0dXJuIG1lLnMyID0gdCAtIChtZS5jID0gdCB8IDApO1xuICB9O1xuXG4gIC8vIEFwcGx5IHRoZSBzZWVkaW5nIGFsZ29yaXRobSBmcm9tIEJhYWdvZS5cbiAgbWUuYyA9IDE7XG4gIG1lLnMwID0gbWFzaCgnICcpO1xuICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgbWUuczIgPSBtYXNoKCcgJyk7XG4gIG1lLnMwIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMCA8IDApIHsgbWUuczAgKz0gMTsgfVxuICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczEgPCAwKSB7IG1lLnMxICs9IDE7IH1cbiAgbWUuczIgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMyIDwgMCkgeyBtZS5zMiArPSAxOyB9XG4gIG1hc2ggPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5jID0gZi5jO1xuICB0LnMwID0gZi5zMDtcbiAgdC5zMSA9IGYuczE7XG4gIHQuczIgPSBmLnMyO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0geGcubmV4dDtcbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSAqIDB4MTAwMDAwMDAwKSB8IDA7IH1cbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJuZygpICsgKHBybmcoKSAqIDB4MjAwMDAwIHwgMCkgKiAxLjExMDIyMzAyNDYyNTE1NjVlLTE2OyAvLyAyXi01M1xuICB9O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuZnVuY3Rpb24gTWFzaCgpIHtcbiAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gIHZhciBtYXNoID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEgPSBTdHJpbmcoZGF0YSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIGggKj0gbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICB9XG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gIH07XG5cbiAgcmV0dXJuIG1hc2g7XG59XG5cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5hbGVhID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJUeWNoZS1pXCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqby5cbi8vIFNlZSBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kLCBhID0gbWUuYTtcbiAgICBiID0gKGIgPDwgMjUpIF4gKGIgPj4+IDcpIF4gYztcbiAgICBjID0gKGMgLSBkKSB8IDA7XG4gICAgZCA9IChkIDw8IDI0KSBeIChkID4+PiA4KSBeIGE7XG4gICAgYSA9IChhIC0gYikgfCAwO1xuICAgIG1lLmIgPSBiID0gKGIgPDwgMjApIF4gKGIgPj4+IDEyKSBeIGM7XG4gICAgbWUuYyA9IGMgPSAoYyAtIGQpIHwgMDtcbiAgICBtZS5kID0gKGQgPDwgMTYpIF4gKGMgPj4+IDE2KSBeIGE7XG4gICAgcmV0dXJuIG1lLmEgPSAoYSAtIGIpIHwgMDtcbiAgfTtcblxuICAvKiBUaGUgZm9sbG93aW5nIGlzIG5vbi1pbnZlcnRlZCB0eWNoZSwgd2hpY2ggaGFzIGJldHRlciBpbnRlcm5hbFxuICAgKiBiaXQgZGlmZnVzaW9uLCBidXQgd2hpY2ggaXMgYWJvdXQgMjUlIHNsb3dlciB0aGFuIHR5Y2hlLWkgaW4gSlMuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG1lLmEsIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQ7XG4gICAgYSA9IChtZS5hICsgbWUuYiB8IDApID4+PiAwO1xuICAgIGQgPSBtZS5kIF4gYTsgZCA9IGQgPDwgMTYgXiBkID4+PiAxNjtcbiAgICBjID0gbWUuYyArIGQgfCAwO1xuICAgIGIgPSBtZS5iIF4gYzsgYiA9IGIgPDwgMTIgXiBkID4+PiAyMDtcbiAgICBtZS5hID0gYSA9IGEgKyBiIHwgMDtcbiAgICBkID0gZCBeIGE7IG1lLmQgPSBkID0gZCA8PCA4IF4gZCA+Pj4gMjQ7XG4gICAgbWUuYyA9IGMgPSBjICsgZCB8IDA7XG4gICAgYiA9IGIgXiBjO1xuICAgIHJldHVybiBtZS5iID0gKGIgPDwgNyBeIGIgPj4+IDI1KTtcbiAgfVxuICAqL1xuXG4gIG1lLmEgPSAwO1xuICBtZS5iID0gMDtcbiAgbWUuYyA9IDI2NTQ0MzU3NjkgfCAwO1xuICBtZS5kID0gMTM2NzEzMDU1MTtcblxuICBpZiAoc2VlZCA9PT0gTWF0aC5mbG9vcihzZWVkKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS5hID0gKHNlZWQgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIG1lLmIgPSBzZWVkIHwgMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDIwOyBrKyspIHtcbiAgICBtZS5iIF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmEgPSBmLmE7XG4gIHQuYiA9IGYuYjtcbiAgdC5jID0gZi5jO1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy50eWNoZWkgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcjEyOFwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBtZS54IF4gKG1lLnggPDwgMTEpO1xuICAgIG1lLnggPSBtZS55O1xuICAgIG1lLnkgPSBtZS56O1xuICAgIG1lLnogPSBtZS53O1xuICAgIHJldHVybiBtZS53IF49IChtZS53ID4+PiAxOSkgXiB0IF4gKHQgPj4+IDgpO1xuICB9O1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yMTI4ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiBSaWNoYXJkIEJyZW50J3MgWG9yZ2VucyB4b3I0MDk2IGFsZ29yaXRobS5cbi8vXG4vLyBUaGlzIGZhc3Qgbm9uLWNyeXB0b2dyYXBoaWMgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgaXMgZGVzaWduZWQgZm9yXG4vLyB1c2UgaW4gTW9udGUtQ2FybG8gYWxnb3JpdGhtcy4gSXQgY29tYmluZXMgYSBsb25nLXBlcmlvZCB4b3JzaGlmdFxuLy8gZ2VuZXJhdG9yIHdpdGggYSBXZXlsIGdlbmVyYXRvciwgYW5kIGl0IHBhc3NlcyBhbGwgY29tbW9uIGJhdHRlcmllc1xuLy8gb2Ygc3Rhc3RpY2lhbCB0ZXN0cyBmb3IgcmFuZG9tbmVzcyB3aGlsZSBjb25zdW1pbmcgb25seSBhIGZldyBuYW5vc2Vjb25kc1xuLy8gZm9yIGVhY2ggcHJuZyBnZW5lcmF0ZWQuICBGb3IgYmFja2dyb3VuZCBvbiB0aGUgZ2VuZXJhdG9yLCBzZWUgQnJlbnQnc1xuLy8gcGFwZXI6IFwiU29tZSBsb25nLXBlcmlvZCByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMgdXNpbmcgc2hpZnRzIGFuZCB4b3JzLlwiXG4vLyBodHRwOi8vYXJ4aXYub3JnL3BkZi8xMDA0LjMxMTV2MS5wZGZcbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgeG9yNDA5NiA9IHJlcXVpcmUoJ3hvcjQwOTYnKTtcbi8vIHJhbmRvbSA9IHhvcjQwOTYoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZCB3aXRoIGludDMyIG9yIHN0cmluZy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20oKSwgMC4xNTIwNDM2NDUwNTM4NTQ3KTsgLy8gKDAsIDEpIHJhbmdlLCA1MyBiaXRzLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbS5pbnQzMigpLCAxODA2NTM0ODk3KTsgICAvLyBzaWduZWQgaW50MzIsIDMyIGJpdHMuXG4vL1xuLy8gRm9yIG5vbnplcm8gbnVtZXJpYyBrZXlzLCB0aGlzIGltcGVsZW1lbnRhdGlvbiBwcm92aWRlcyBhIHNlcXVlbmNlXG4vLyBpZGVudGljYWwgdG8gdGhhdCBieSBCcmVudCdzIHhvcmdlbnMgMyBpbXBsZW1lbnRhaW9uIGluIEMuICBUaGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBhbHNvIHByb3ZpZGVzIGZvciBpbml0YWxpemluZyB0aGUgZ2VuZXJhdG9yIHdpdGhcbi8vIHN0cmluZyBzZWVkcywgb3IgZm9yIHNhdmluZyBhbmQgcmVzdG9yaW5nIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuLy9cbi8vIE9uIENocm9tZSwgdGhpcyBwcm5nIGJlbmNobWFya3MgYWJvdXQgMi4xIHRpbWVzIHNsb3dlciB0aGFuXG4vLyBKYXZhc2NyaXB0J3MgYnVpbHQtaW4gTWF0aC5yYW5kb20oKS5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSBtZS53LFxuICAgICAgICBYID0gbWUuWCwgaSA9IG1lLmksIHQsIHY7XG4gICAgLy8gVXBkYXRlIFdleWwgZ2VuZXJhdG9yLlxuICAgIG1lLncgPSB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgIHYgXj0gdiA8PCAxMztcbiAgICB0IF49IHQgPDwgMTc7XG4gICAgdiBePSB2ID4+PiAxNTtcbiAgICB0IF49IHQgPj4+IDEyO1xuICAgIC8vIFVwZGF0ZSBYb3IgZ2VuZXJhdG9yIGFycmF5IHN0YXRlLlxuICAgIHYgPSBYW2ldID0gdiBeIHQ7XG4gICAgbWUuaSA9IGk7XG4gICAgLy8gUmVzdWx0IGlzIHRoZSBjb21iaW5hdGlvbi5cbiAgICByZXR1cm4gKHYgKyAodyBeICh3ID4+PiAxNikpKSB8IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciB0LCB2LCBpLCBqLCB3LCBYID0gW10sIGxpbWl0ID0gMTI4O1xuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBOdW1lcmljIHNlZWRzIGluaXRpYWxpemUgdiwgd2hpY2ggaXMgdXNlZCB0byBnZW5lcmF0ZXMgWC5cbiAgICAgIHYgPSBzZWVkO1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0cmluZyBzZWVkcyBhcmUgbWl4ZWQgaW50byB2IGFuZCBYIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lLlxuICAgICAgc2VlZCA9IHNlZWQgKyAnXFwwJztcbiAgICAgIHYgPSAwO1xuICAgICAgbGltaXQgPSBNYXRoLm1heChsaW1pdCwgc2VlZC5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIGNpcmN1bGFyIGFycmF5IGFuZCB3ZXlsIHZhbHVlLlxuICAgIGZvciAoaSA9IDAsIGogPSAtMzI7IGogPCBsaW1pdDsgKytqKSB7XG4gICAgICAvLyBQdXQgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBpbnRvIHRoZSBhcnJheSwgYW5kIHNodWZmbGUgdGhlbS5cbiAgICAgIGlmIChzZWVkKSB2IF49IHNlZWQuY2hhckNvZGVBdCgoaiArIDMyKSAlIHNlZWQubGVuZ3RoKTtcbiAgICAgIC8vIEFmdGVyIDMyIHNodWZmbGVzLCB0YWtlIHYgYXMgdGhlIHN0YXJ0aW5nIHcgdmFsdWUuXG4gICAgICBpZiAoaiA9PT0gMCkgdyA9IHY7XG4gICAgICB2IF49IHYgPDwgMTA7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdiBePSB2IDw8IDQ7XG4gICAgICB2IF49IHYgPj4+IDEzO1xuICAgICAgaWYgKGogPj0gMCkge1xuICAgICAgICB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7ICAgICAvLyBXZXlsLlxuICAgICAgICB0ID0gKFhbaiAmIDEyN10gXj0gKHYgKyB3KSk7ICAvLyBDb21iaW5lIHhvciBhbmQgd2V5bCB0byBpbml0IGFycmF5LlxuICAgICAgICBpID0gKDAgPT0gdCkgPyBpICsgMSA6IDA7ICAgICAvLyBDb3VudCB6ZXJvZXMuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgZGV0ZWN0ZWQgYWxsIHplcm9lczsgbWFrZSB0aGUga2V5IG5vbnplcm8uXG4gICAgaWYgKGkgPj0gMTI4KSB7XG4gICAgICBYWyhzZWVkICYmIHNlZWQubGVuZ3RoIHx8IDApICYgMTI3XSA9IC0xO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIGdlbmVyYXRvciA1MTIgdGltZXMgdG8gZnVydGhlciBtaXggdGhlIHN0YXRlIGJlZm9yZSB1c2luZyBpdC5cbiAgICAvLyBGYWN0b3JpbmcgdGhpcyBhcyBhIGZ1bmN0aW9uIHNsb3dzIHRoZSBtYWluIGdlbmVyYXRvciwgc28gaXQgaXMganVzdFxuICAgIC8vIHVucm9sbGVkIGhlcmUuICBUaGUgd2V5bCBnZW5lcmF0b3IgaXMgbm90IGFkdmFuY2VkIHdoaWxlIHdhcm1pbmcgdXAuXG4gICAgaSA9IDEyNztcbiAgICBmb3IgKGogPSA0ICogMTI4OyBqID4gMDsgLS1qKSB7XG4gICAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICAgIHYgXj0gdiA8PCAxMztcbiAgICAgIHQgXj0gdCA8PCAxNztcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB0IF49IHQgPj4+IDEyO1xuICAgICAgWFtpXSA9IHYgXiB0O1xuICAgIH1cbiAgICAvLyBTdG9yaW5nIHN0YXRlIGFzIG9iamVjdCBtZW1iZXJzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzLlxuICAgIG1lLncgPSB3O1xuICAgIG1lLlggPSBYO1xuICAgIG1lLmkgPSBpO1xuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQudyA9IGYudztcbiAgdC5YID0gZi5YLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuWCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjQwOTYgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IG9iamVjdCBvciBnbG9iYWxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yc2hpZnQ3XCIgYWxnb3JpdGhtIGJ5XG4vLyBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllcjpcbi8vIFwiT24gdGhlIFhvcmdzaGlmdCBSYW5kb20gTnVtYmVyIEdlbmVyYXRvcnNcIlxuLy8gaHR0cDovL3NhbHVjLmVuZ3IudWNvbm4uZWR1L3JlZnMvY3J5cHRvL3JuZy9wYW5uZXRvbjA1b250aGV4b3JzaGlmdC5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdmFyIFggPSBtZS54LCBpID0gbWUuaSwgdCwgdiwgdztcbiAgICB0ID0gWFtpXTsgdCBePSAodCA+Pj4gNyk7IHYgPSB0IF4gKHQgPDwgMjQpO1xuICAgIHQgPSBYWyhpICsgMSkgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDEwKTtcbiAgICB0ID0gWFsoaSArIDMpICYgN107IHYgXj0gdCBeICh0ID4+PiAzKTtcbiAgICB0ID0gWFsoaSArIDQpICYgN107IHYgXj0gdCBeICh0IDw8IDcpO1xuICAgIHQgPSBYWyhpICsgNykgJiA3XTsgdCA9IHQgXiAodCA8PCAxMyk7IHYgXj0gdCBeICh0IDw8IDkpO1xuICAgIFhbaV0gPSB2O1xuICAgIG1lLmkgPSAoaSArIDEpICYgNztcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIGosIHcsIFggPSBbXTtcblxuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIGFycmF5IHVzaW5nIGEgMzItYml0IGludGVnZXIuXG4gICAgICB3ID0gWFswXSA9IHNlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgdXNpbmcgYSBzdHJpbmcuXG4gICAgICBzZWVkID0gJycgKyBzZWVkO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHNlZWQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgWFtqICYgN10gPSAoWFtqICYgN10gPDwgMTUpIF5cbiAgICAgICAgICAgIChzZWVkLmNoYXJDb2RlQXQoaikgKyBYWyhqICsgMSkgJiA3XSA8PCAxMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgYW4gYXJyYXkgbGVuZ3RoIG9mIDgsIG5vdCBhbGwgemVyb2VzLlxuICAgIHdoaWxlIChYLmxlbmd0aCA8IDgpIFgucHVzaCgwKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgOCAmJiBYW2pdID09PSAwOyArK2opO1xuICAgIGlmIChqID09IDgpIHcgPSBYWzddID0gLTE7IGVsc2UgdyA9IFhbal07XG5cbiAgICBtZS54ID0gWDtcbiAgICBtZS5pID0gMDtcblxuICAgIC8vIERpc2NhcmQgYW4gaW5pdGlhbCAyNTYgdmFsdWVzLlxuICAgIGZvciAoaiA9IDI1NjsgaiA+IDA7IC0taikge1xuICAgICAgbWUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54LnNsaWNlKCk7XG4gIHQuaSA9IGYuaTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLngpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3JzaGlmdDcgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3J3b3dcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gKG1lLnggXiAobWUueCA+Pj4gMikpO1xuICAgIG1lLnggPSBtZS55OyBtZS55ID0gbWUuejsgbWUueiA9IG1lLnc7IG1lLncgPSBtZS52O1xuICAgIHJldHVybiAobWUuZCA9IChtZS5kICsgMzYyNDM3IHwgMCkpICtcbiAgICAgICAobWUudiA9IChtZS52IF4gKG1lLnYgPDwgNCkpIF4gKHQgXiAodCA8PCAxKSkpIHwgMDtcbiAgfTtcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcbiAgbWUudiA9IDA7XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIGlmIChrID09IHN0cnNlZWQubGVuZ3RoKSB7XG4gICAgICBtZS5kID0gbWUueCA8PCAxMCBeIG1lLnggPj4+IDQ7XG4gICAgfVxuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICB0LnYgPSBmLnY7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yd293ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvKlxuQ29weXJpZ2h0IDIwMTkgRGF2aWQgQmF1LlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgcG9vbCwgbWF0aCkge1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnRzIGFyZSByZWxhdGVkIHRvIElFRUUgNzU0IGxpbWl0cy5cbi8vXG5cbnZhciB3aWR0aCA9IDI1NiwgICAgICAgIC8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcbiAgICBjaHVua3MgPSA2LCAgICAgICAgIC8vIGF0IGxlYXN0IHNpeCBSQzQgb3V0cHV0cyBmb3IgZWFjaCBkb3VibGVcbiAgICBkaWdpdHMgPSA1MiwgICAgICAgIC8vIHRoZXJlIGFyZSA1MiBzaWduaWZpY2FudCBkaWdpdHMgaW4gYSBkb3VibGVcbiAgICBybmduYW1lID0gJ3JhbmRvbScsIC8vIHJuZ25hbWU6IG5hbWUgZm9yIE1hdGgucmFuZG9tIGFuZCBNYXRoLnNlZWRyYW5kb21cbiAgICBzdGFydGRlbm9tID0gbWF0aC5wb3cod2lkdGgsIGNodW5rcyksXG4gICAgc2lnbmlmaWNhbmNlID0gbWF0aC5wb3coMiwgZGlnaXRzKSxcbiAgICBvdmVyZmxvdyA9IHNpZ25pZmljYW5jZSAqIDIsXG4gICAgbWFzayA9IHdpZHRoIC0gMSxcbiAgICBub2RlY3J5cHRvOyAgICAgICAgIC8vIG5vZGUuanMgY3J5cHRvIG1vZHVsZSwgaW5pdGlhbGl6ZWQgYXQgdGhlIGJvdHRvbS5cblxuLy9cbi8vIHNlZWRyYW5kb20oKVxuLy8gVGhpcyBpcyB0aGUgc2VlZHJhbmRvbSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUuXG4vL1xuZnVuY3Rpb24gc2VlZHJhbmRvbShzZWVkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIga2V5ID0gW107XG4gIG9wdGlvbnMgPSAob3B0aW9ucyA9PSB0cnVlKSA/IHsgZW50cm9weTogdHJ1ZSB9IDogKG9wdGlvbnMgfHwge30pO1xuXG4gIC8vIEZsYXR0ZW4gdGhlIHNlZWQgc3RyaW5nIG9yIGJ1aWxkIG9uZSBmcm9tIGxvY2FsIGVudHJvcHkgaWYgbmVlZGVkLlxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXG4gICAgb3B0aW9ucy5lbnRyb3B5ID8gW3NlZWQsIHRvc3RyaW5nKHBvb2wpXSA6XG4gICAgKHNlZWQgPT0gbnVsbCkgPyBhdXRvc2VlZCgpIDogc2VlZCwgMyksIGtleSk7XG5cbiAgLy8gVXNlIHRoZSBzZWVkIHRvIGluaXRpYWxpemUgYW4gQVJDNCBnZW5lcmF0b3IuXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSByYW5kb20gZG91YmxlIGluIFswLCAxKSB0aGF0IGNvbnRhaW5zXG4gIC8vIHJhbmRvbW5lc3MgaW4gZXZlcnkgYml0IG9mIHRoZSBtYW50aXNzYSBvZiB0aGUgSUVFRSA3NTQgdmFsdWUuXG4gIHZhciBwcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XG4gICAgICAgIGQgPSBzdGFydGRlbm9tLCAgICAgICAgICAgICAgICAgLy8gICBhbmQgZGVub21pbmF0b3IgZCA9IDIgXiA0OC5cbiAgICAgICAgeCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFuZCBubyAnZXh0cmEgbGFzdCBieXRlJy5cbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcbiAgICAgIG4gPSAobiArIHgpICogd2lkdGg7ICAgICAgICAgICAgICAvLyAgIHNoaWZ0aW5nIG51bWVyYXRvciBhbmRcbiAgICAgIGQgKj0gd2lkdGg7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRlbm9taW5hdG9yIGFuZCBnZW5lcmF0aW5nIGFcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxuICAgIH1cbiAgICB3aGlsZSAobiA+PSBvdmVyZmxvdykgeyAgICAgICAgICAgICAvLyBUbyBhdm9pZCByb3VuZGluZyB1cCwgYmVmb3JlIGFkZGluZ1xuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXG4gICAgICBkIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByaWdodCB1c2luZyBpbnRlZ2VyIG1hdGggdW50aWxcbiAgICAgIHggPj4+PSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgZXhhY3RseSB0aGUgZGVzaXJlZCBiaXRzLlxuICAgIH1cbiAgICByZXR1cm4gKG4gKyB4KSAvIGQ7ICAgICAgICAgICAgICAgICAvLyBGb3JtIHRoZSBudW1iZXIgd2l0aGluIFswLCAxKS5cbiAgfTtcblxuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgfCAwOyB9XG4gIHBybmcucXVpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSAvIDB4MTAwMDAwMDAwOyB9XG4gIHBybmcuZG91YmxlID0gcHJuZztcblxuICAvLyBNaXggdGhlIHJhbmRvbW5lc3MgaW50byBhY2N1bXVsYXRlZCBlbnRyb3B5LlxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XG5cbiAgLy8gQ2FsbGluZyBjb252ZW50aW9uOiB3aGF0IHRvIHJldHVybiBhcyBhIGZ1bmN0aW9uIG9mIHBybmcsIHNlZWQsIGlzX21hdGguXG4gIHJldHVybiAob3B0aW9ucy5wYXNzIHx8IGNhbGxiYWNrIHx8XG4gICAgICBmdW5jdGlvbihwcm5nLCBzZWVkLCBpc19tYXRoX2NhbGwsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIC8vIExvYWQgdGhlIGFyYzQgc3RhdGUgZnJvbSB0aGUgZ2l2ZW4gc3RhdGUgaWYgaXQgaGFzIGFuIFMgYXJyYXkuXG4gICAgICAgICAgaWYgKHN0YXRlLlMpIHsgY29weShzdGF0ZSwgYXJjNCk7IH1cbiAgICAgICAgICAvLyBPbmx5IHByb3ZpZGUgdGhlIC5zdGF0ZSBtZXRob2QgaWYgcmVxdWVzdGVkIHZpYSBvcHRpb25zLnN0YXRlLlxuICAgICAgICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoYXJjNCwge30pOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBjYWxsZWQgYXMgYSBtZXRob2Qgb2YgTWF0aCAoTWF0aC5zZWVkcmFuZG9tKCkpLCBtdXRhdGVcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gYmVjYXVzZSB0aGF0IGlzIGhvdyBzZWVkcmFuZG9tLmpzIGhhcyB3b3JrZWQgc2luY2UgdjEuMC5cbiAgICAgICAgaWYgKGlzX21hdGhfY2FsbCkgeyBtYXRoW3JuZ25hbWVdID0gcHJuZzsgcmV0dXJuIHNlZWQ7IH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0IGlzIGEgbmV3ZXIgY2FsbGluZyBjb252ZW50aW9uLCBzbyByZXR1cm4gdGhlXG4gICAgICAgIC8vIHBybmcgZGlyZWN0bHkuXG4gICAgICAgIGVsc2UgcmV0dXJuIHBybmc7XG4gICAgICB9KShcbiAgcHJuZyxcbiAgc2hvcnRzZWVkLFxuICAnZ2xvYmFsJyBpbiBvcHRpb25zID8gb3B0aW9ucy5nbG9iYWwgOiAodGhpcyA9PSBtYXRoKSxcbiAgb3B0aW9ucy5zdGF0ZSk7XG59XG5cbi8vXG4vLyBBUkM0XG4vL1xuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxuLy8gYW4gYXJyYXkgb2YgYXQgbW9zdCAod2lkdGgpIGludGVnZXJzIHRoYXQgc2hvdWxkIGJlIDAgPD0geCA8ICh3aWR0aCkuXG4vL1xuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcbi8vIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBmcm9tIEFSQzQuICBJdHMgcmV0dXJuIHZhbHVlIGlzIGEgbnVtYmVyIHhcbi8vIHRoYXQgaXMgaW4gdGhlIHJhbmdlIDAgPD0geCA8ICh3aWR0aCBeIGNvdW50KS5cbi8vXG5mdW5jdGlvbiBBUkM0KGtleSkge1xuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcbiAgICAgIG1lID0gdGhpcywgaSA9IDAsIGogPSBtZS5pID0gbWUuaiA9IDAsIHMgPSBtZS5TID0gW107XG5cbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cbiAgaWYgKCFrZXlsZW4pIHsga2V5ID0gW2tleWxlbisrXTsgfVxuXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXG4gIHdoaWxlIChpIDwgd2lkdGgpIHtcbiAgICBzW2ldID0gaSsrO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIGtleVtpICUga2V5bGVuXSArICh0ID0gc1tpXSkpXTtcbiAgICBzW2pdID0gdDtcbiAgfVxuXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cbiAgKG1lLmcgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIC8vIFVzaW5nIGluc3RhbmNlIG1lbWJlcnMgaW5zdGVhZCBvZiBjbG9zdXJlIHN0YXRlIG5lYXJseSBkb3VibGVzIHNwZWVkLlxuICAgIHZhciB0LCByID0gMCxcbiAgICAgICAgaSA9IG1lLmksIGogPSBtZS5qLCBzID0gbWUuUztcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcbiAgICAgIHIgPSByICogd2lkdGggKyBzW21hc2sgJiAoKHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyB0KV0pICsgKHNbal0gPSB0KSldO1xuICAgIH1cbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XG4gICAgcmV0dXJuIHI7XG4gICAgLy8gRm9yIHJvYnVzdCB1bnByZWRpY3RhYmlsaXR5LCB0aGUgZnVuY3Rpb24gY2FsbCBiZWxvdyBhdXRvbWF0aWNhbGx5XG4gICAgLy8gZGlzY2FyZHMgYW4gaW5pdGlhbCBiYXRjaCBvZiB2YWx1ZXMuICBUaGlzIGlzIGNhbGxlZCBSQzQtZHJvcFsyNTZdLlxuICAgIC8vIFNlZSBodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1yc2ErZmx1aHJlcityZXNwb25zZSZidG5JXG4gIH0pKHdpZHRoKTtcbn1cblxuLy9cbi8vIGNvcHkoKVxuLy8gQ29waWVzIGludGVybmFsIHN0YXRlIG9mIEFSQzQgdG8gb3IgZnJvbSBhIHBsYWluIG9iamVjdC5cbi8vXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LmogPSBmLmo7XG4gIHQuUyA9IGYuUy5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbi8vXG4vLyBmbGF0dGVuKClcbi8vIENvbnZlcnRzIGFuIG9iamVjdCB0cmVlIHRvIG5lc3RlZCBhcnJheXMgb2Ygc3RyaW5ncy5cbi8vXG5mdW5jdGlvbiBmbGF0dGVuKG9iaiwgZGVwdGgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLCB0eXAgPSAodHlwZW9mIG9iaiksIHByb3A7XG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICB0cnkgeyByZXN1bHQucHVzaChmbGF0dGVuKG9ialtwcm9wXSwgZGVwdGggLSAxKSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAocmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCA6IHR5cCA9PSAnc3RyaW5nJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcbn1cblxuLy9cbi8vIG1peGtleSgpXG4vLyBNaXhlcyBhIHN0cmluZyBzZWVkIGludG8gYSBrZXkgdGhhdCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycywgYW5kXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cbi8vXG5mdW5jdGlvbiBtaXhrZXkoc2VlZCwga2V5KSB7XG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XG4gIHdoaWxlIChqIDwgc3RyaW5nc2VlZC5sZW5ndGgpIHtcbiAgICBrZXlbbWFzayAmIGpdID1cbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XG4gIH1cbiAgcmV0dXJuIHRvc3RyaW5nKGtleSk7XG59XG5cbi8vXG4vLyBhdXRvc2VlZCgpXG4vLyBSZXR1cm5zIGFuIG9iamVjdCBmb3IgYXV0b3NlZWRpbmcsIHVzaW5nIHdpbmRvdy5jcnlwdG8gYW5kIE5vZGUgY3J5cHRvXG4vLyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxuLy9cbmZ1bmN0aW9uIGF1dG9zZWVkKCkge1xuICB0cnkge1xuICAgIHZhciBvdXQ7XG4gICAgaWYgKG5vZGVjcnlwdG8gJiYgKG91dCA9IG5vZGVjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAvLyBUaGUgdXNlIG9mICdvdXQnIHRvIHJlbWVtYmVyIHJhbmRvbUJ5dGVzIG1ha2VzIHRpZ2h0IG1pbmlmaWVkIGNvZGUuXG4gICAgICBvdXQgPSBvdXQod2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCk7XG4gICAgICAoZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdG9zdHJpbmcob3V0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBicm93c2VyID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICAgICAgcGx1Z2lucyA9IGJyb3dzZXIgJiYgYnJvd3Nlci5wbHVnaW5zO1xuICAgIHJldHVybiBbK25ldyBEYXRlLCBnbG9iYWwsIHBsdWdpbnMsIGdsb2JhbC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcbiAgfVxufVxuXG4vL1xuLy8gdG9zdHJpbmcoKVxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXG4vL1xuZnVuY3Rpb24gdG9zdHJpbmcoYSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcbn1cblxuLy9cbi8vIFdoZW4gc2VlZHJhbmRvbS5qcyBpcyBsb2FkZWQsIHdlIGltbWVkaWF0ZWx5IG1peCBhIGZldyBiaXRzXG4vLyBmcm9tIHRoZSBidWlsdC1pbiBSTkcgaW50byB0aGUgZW50cm9weSBwb29sLiAgQmVjYXVzZSB3ZSBkb1xuLy8gbm90IHdhbnQgdG8gaW50ZXJmZXJlIHdpdGggZGV0ZXJtaW5pc3RpYyBQUk5HIHN0YXRlIGxhdGVyLFxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIG1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcbi8vIGluaXRpYWxpemF0aW9uLlxuLy9cbm1peGtleShtYXRoLnJhbmRvbSgpLCBwb29sKTtcblxuLy9cbi8vIE5vZGVqcyBhbmQgQU1EIHN1cHBvcnQ6IGV4cG9ydCB0aGUgaW1wbGVtZW50YXRpb24gYXMgYSBtb2R1bGUgdXNpbmdcbi8vIGVpdGhlciBjb252ZW50aW9uLlxuLy9cbmlmICgodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWVkcmFuZG9tO1xuICAvLyBXaGVuIGluIG5vZGUuanMsIHRyeSB1c2luZyBjcnlwdG8gcGFja2FnZSBmb3IgYXV0b3NlZWRpbmcuXG4gIHRyeSB7XG4gICAgbm9kZWNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICB9IGNhdGNoIChleCkge31cbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWVkcmFuZG9tOyB9KTtcbn0gZWxzZSB7XG4gIC8vIFdoZW4gaW5jbHVkZWQgYXMgYSBwbGFpbiBzY3JpcHQsIHNldCB1cCBNYXRoLnNlZWRyYW5kb20gZ2xvYmFsLlxuICBtYXRoWydzZWVkJyArIHJuZ25hbWVdID0gc2VlZHJhbmRvbTtcbn1cblxuXG4vLyBFbmQgYW5vbnltb3VzIHNjb3BlLCBhbmQgcGFzcyBpbml0aWFsIHZhbHVlcy5cbn0pKFxuICAvLyBnbG9iYWw6IGBzZWxmYCBpbiBicm93c2VycyAoaW5jbHVkaW5nIHN0cmljdCBtb2RlIGFuZCB3ZWIgd29ya2VycyksXG4gIC8vIG90aGVyd2lzZSBgdGhpc2AgaW4gTm9kZSBhbmQgb3RoZXIgZW52aXJvbm1lbnRzXG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IHRoaXMsXG4gIFtdLCAgICAgLy8gcG9vbDogZW50cm9weSBwb29sIHN0YXJ0cyBlbXB0eVxuICBNYXRoICAgIC8vIG1hdGg6IHBhY2thZ2UgY29udGFpbmluZyByYW5kb20sIHBvdywgYW5kIHNlZWRyYW5kb21cbik7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYWluRm9ybSh0aXRsZSwgY3RyLCB0b0VkaXQpIHtcbiAgY29uc3QgYWRkTmV3ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImFkZC1uZXdcIiwgY3RyLCBcIlwiLCBbW1wiaWRcIiwgXCJhZGQtbmV3XCJdXSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImgxLW5ld1wiLCBhZGROZXcsIHRpdGxlKTtcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwiZm9ybVwiLCBhZGROZXcpO1xuICBjb25zdCBjbG9zZUN0ciA9IHJlbmRlckNsb3NlQnRuKGZvcm0pO1xuICBjb25zdCB0aXRsZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWN0clwiLCBmb3JtKTtcbiAgY29uc3QgZGVzY0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWN0clwiLCBmb3JtKTtcbiAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIHRpdGxlQ3RyLCBcIlRpdGxlXCIsIFtbXCJmb3JcIiwgXCJpbnB1dFRpdGxlXCJdXSksXG4gICAgY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiaW5wdXRcIiwgdGl0bGVDdHIsIFwiXCIsIFtcbiAgICAgIFtcImlkXCIsIFwiaW5wdXRUaXRsZVwiXSxcbiAgICAgIFtcInR5cGVcIiwgXCJ0ZXh0XCJdLFxuICAgICAgW1wicmVxdWlyZWRcIiwgXCJcIl0sXG4gICAgICBbXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgKHRpdGxlID0gXCJUYXNrXCIgPyBcIkRvIHRoZSBncm9jZXJ5IHNob3BcIiA6IFwiSG91c2UgcmVub3ZhdGlvblwiKSxcbiAgICAgIF0sXG4gICAgICBbXCJtYXhsZW5ndGhcIiwgXCI1MFwiXSxcbiAgICAgIFtcInZhbHVlXCIsIHRvRWRpdCA/IHRvRWRpdC50aXRsZSA6IFwiXCJdLFxuICAgIF0pO1xuICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgZGVzY0N0ciwgXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCIsIFtcbiAgICBbXCJmb3JcIiwgXCJpbnB1dERlc2NcIl0sXG4gIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRleHRhcmVhXCIsXG4gICAgICBcImlucHV0XCIsXG4gICAgICBkZXNjQ3RyLFxuICAgICAgdG9FZGl0ID8gdG9FZGl0LmRlc2NyaXB0aW9uIDogXCJcIixcbiAgICAgIFtcbiAgICAgICAgW1wiaWRcIiwgXCJpbnB1dERlc2NcIl0sXG4gICAgICAgIFtcInJvd3NcIiwgXCIyXCJdLFxuICAgICAgICBbXG4gICAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAgICh0aXRsZSA9IFwiVGFza1wiXG4gICAgICAgICAgICA/IFwiRWdncywgbWlsaywgY2VyZWFsLCBicmVhZCwgYmFuYW5hc1wiXG4gICAgICAgICAgICA6IFwiVGFza3MgZm9yIHByb2plY3Qga2ljay1vZmZcIiksXG4gICAgICAgIF0sXG4gICAgICAgIFtcIm1heGxlbmd0aFwiLCBcIjI1MFwiXSxcbiAgICAgIF1cbiAgICApO1xuXG4gIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0N0cigpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1jdHJcIik7XG4gIHJldHVybiB2aWV3Q3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdG4oY3RyKSB7XG4gIGNvbnN0IGNsb3NlQnRuQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNsb3NlLWN0clwiLCBjdHIpO1xuICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJjbG9zZS1idG5cIiwgXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCJdLFxuICAgIGNsb3NlQnRuQ3RyLFxuICAgIFwiXCIsXG4gICAgW1tcImlkXCIsIFwiY2xvc2UtYnRuXCJdXVxuICApO1xuICByZXR1cm4gY2xvc2VCdG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdWJtaXQoY3RyKSB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzdWJtaXRCdG5cIiwgY3RyLCBcIlN1Ym1pdFwiLCBbXG4gICAgW1wiaWRcIiwgXCJzdWJtaXRUYXNrQnRuXCJdLFxuICAgIFtcInR5cGVcIiwgXCJzdWJtaXRcIl0sXG4gIF0pO1xuICByZXR1cm4gc3VibWl0QnRuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGVsZXRlKGN0cikge1xuICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlQnRuXCIsIGN0ciwgXCJEZWxldGUgaXRcIiwgW1xuICAgIFtcImlkXCIsIFwiZGVsZXRlQnRuXCJdLFxuICBdKTtcbiAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cbiIsImltcG9ydCByZW5kZXJNYWluRm9ybSwge1xuICBnZXRWaWV3Q3RyLFxuICByZW5kZXJEZWxldGUsXG4gIHJlbmRlclN1Ym1pdCxcbn0gZnJvbSBcIi4vYWRkTmV3XCI7XG5pbXBvcnQgY3JlYXRlTGlzdCwgeyBsb2FkTGlzdHNGcm9tU3RvcmFnZSwgZGVsZXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBjbGVhclZpZXdDdHIgZnJvbSBcIi5cIjtcbmltcG9ydCB7IGFkZExpc3RFdmVudExpcyB9IGZyb20gXCIuL2FsbExpc3RzVUlcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBcImVtb2ppLXBpY2tlci1lbGVtZW50XCI7XG5cbmxldCBlZGl0ZWQgPSBmYWxzZTtcbmxldCBlZGl0ZWRJbmRleDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckxpc3RGb3JtKGxpc3RUb0VkaXQpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGdldFZpZXdDdHIoKTtcbiAgY29uc3QgbWFpbkZvcm0gPSByZW5kZXJNYWluRm9ybShcIkxpc3RcIiwgdmlld0N0ciwgbGlzdFRvRWRpdCk7XG4gIGNvbnN0IGljb25DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY2hvb3NlLWljb24tY3RyXCIsIG1haW5Gb3JtKTtcbiAgY29uc3QgaWNvbkJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJpY29uLWJ0blwiLCBpY29uQ3RyLCBcIkFkZCBpY29uXCIsIFtcbiAgICBbXCJpZFwiLCBcImljb24tYnRuXCJdLFxuICBdKTtcbiAgY29uc3Qgc2VsZWN0ZWRFbW9qaSA9IHJlbmRlclNlbGVjdGVkRW1vamkoaWNvbkN0cik7XG4gIGNvbnN0IGVtb2ppUGlja2VyID0gcmVuZGVyRW1vamlQaWNrZXIobWFpbkZvcm0sIHNlbGVjdGVkRW1vamkpO1xuICBjb25zdCBidXR0b25DdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnV0dG9uLWN0clwiLCBtYWluRm9ybSk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IHJlbmRlclN1Ym1pdChidXR0b25DdHIpO1xuICBjb25zdCBkZWxldGVCdG4gPSByZW5kZXJEZWxldGUoYnV0dG9uQ3RyKTtcbiAgaWNvbkJ0bkVMKGljb25CdG4sIGVtb2ppUGlja2VyKTtcbiAgc3VibWl0TGlzdEVMKHN1Ym1pdEJ0bik7XG4gIGRlbGV0ZUxpc3RFTChkZWxldGVCdG4pO1xuICBjbG9zZUxpc3RFTCgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTZWxlY3RlZEVtb2ppKG1haW5Gb3JtKSB7XG4gIC8vIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInNlbGVjdC1lbW9qaVwiLCBtYWluRm9ybSwgXCJMaXN0IEljb25cIiwgW1xuICAvLyAgIFtcImZvclwiLCBcInNlbGVjdGVkLWVtb2ppXCJdLFxuICAvLyBdKTtcbiAgY29uc3Qgc2VsZWN0ZWRFbW9qaSA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcInNlbGVjdGVkLWVtb2ppXCIsIG1haW5Gb3JtLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJzZWxlY3RlZC1lbW9qaVwiXSxcbiAgICBbXCJ0aXRsZVwiLCBcIlZpZXcgTGlzdFwiXSxcbiAgXSk7XG5cbiAgcmV0dXJuIHNlbGVjdGVkRW1vamk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVtb2ppUGlja2VyKG1haW5Gb3JtLCBzZWxlY3RlZEVtb2ppKSB7XG4gIGNvbnN0IGVtb2ppUGlja2VyID0gY3JlYXRlRWxlbWVudChcbiAgICBcImVtb2ppLXBpY2tlclwiLFxuICAgIFtcImVtb2ppLXBpY2tlclwiLCBcImhpZGRlblwiXSxcbiAgICBtYWluRm9ybVxuICApO1xuICBlbW9qaVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiZW1vamktY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzZWxlY3RlZEVtb2ppLnZhbHVlID0gZS5kZXRhaWwudW5pY29kZTtcbiAgICBlbW9qaVBpY2tlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGVtb2ppUGlja2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdGVkTGlzdExvZyhpbmRleCkge1xuICBlZGl0ZWRJbmRleCA9IGluZGV4O1xuICBlZGl0ZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBpY29uQnRuRUwoaWNvbkJ0biwgZW1vamlQaWNrZXIpIHtcbiAgaWNvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3RFTChkZWxldGVCdG4pIHtcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZWRpdGVkKSB7XG4gICAgICBkZWxldGVMaXN0KGVkaXRlZEluZGV4KTtcbiAgICB9XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgbG9hZExpc3RzRnJvbVN0b3JhZ2UoKTtcbiAgICBhZGRMaXN0RXZlbnRMaXMoKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUxpc3RFTCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgbG9hZExpc3RzRnJvbVN0b3JhZ2UoKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRMaXN0RUwoc3VibWl0TGlzdEJ0bikge1xuICBzdWJtaXRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZWRpdGVkKSB7XG4gICAgICBkZWxldGVMaXN0KGVkaXRlZEluZGV4KTtcbiAgICB9XG4gICAgY3JlYXRlTGlzdChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRUaXRsZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXNjXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZC1lbW9qaVwiKS52YWx1ZVxuICAgICk7XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgbG9hZExpc3RzRnJvbVN0b3JhZ2UoKTtcbiAgICBhZGRMaXN0RXZlbnRMaXMoKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHJlbmRlck1haW5Gb3JtLCB7XG4gIGdldFZpZXdDdHIsXG4gIHJlbmRlckRlbGV0ZSxcbiAgcmVuZGVyU3VibWl0LFxufSBmcm9tIFwiLi9hZGROZXdcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVUYXNrLCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IGNsZWFyVmlld0N0ciBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgbG9hZFRhc2tzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgYWRkVGFza0V2ZW50TGlzIH0gZnJvbSBcIi4vbGlzdFVJXCI7XG5pbXBvcnQgeyBnZXRTdG9yZWRMaXN0cyB9IGZyb20gXCIuL2xpc3RcIjtcblxubGV0IGVkaXRlZCA9IGZhbHNlO1xubGV0IGVkaXRlZEluZGV4O1xuXG5leHBvcnQgZnVuY3Rpb24gZWRpdGVkTG9nKGluZGV4KSB7XG4gIGVkaXRlZEluZGV4ID0gaW5kZXg7XG4gIGVkaXRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvcm1EYXRlKGN0ciwgdG9FZGl0KSB7XG4gIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInRleHRJbnB1dFwiLCBjdHIsIFwiRHVlIERhdGVcIiwgW1xuICAgIFtcImZvclwiLCBcImlucHV0VGFza0RhdGVcIl0sXG4gIF0pO1xuICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJpbnB1dFwiLCBjdHIsIFwiXCIsIFtcbiAgICBbXCJpZFwiLCBcImlucHV0VGFza0RhdGVcIl0sXG4gICAgW1widHlwZVwiLCBcImRhdGVcIl0sXG4gICAgW1wicmVxdWlyZWRcIiwgXCJcIl0sXG4gICAgW1widmFsdWVcIiwgdG9FZGl0ID8gdG9FZGl0LmR1ZURhdGUgOiBcIlwiXSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByaW9yaXR5U3RhdHVzKGN0ciwgdG9FZGl0KSB7XG4gIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBjdHIsIFwiSGlnaCBwcmlvcml0eVwiLCBbXG4gICAgW1wiZm9yXCIsIFwiaGlnaFByaW9yaXR5VGFza1wiXSxcbiAgXSk7XG4gIGNvbnNvbGUubG9nKFwidG9lZGl0XCIsIHRvRWRpdCk7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJoaWdoUHJpb3JpdHlcIiwgY3RyLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJoaWdoUHJpb3JpdHlUYXNrXCJdLFxuICAgIFtcInR5cGVcIiwgXCJjaGVja2JveFwiXSxcbiAgXSk7XG4gIGlmICh0b0VkaXQgJiYgdG9FZGl0LnByaW9yaXR5ID09PSB0cnVlKSB7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRyb3BEb3duKGN0cikge1xuICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgY3RyLCBcIkxpc3QocylcIiwgW1tcImZvclwiLCBcImRyb3Bkb3duTGlzdFwiXV0pO1xuICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwiaW5wdXRcIiwgY3RyLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJkcm9wZG93bkxpc3RcIl0sXG4gICAgW1wibGlzdFwiLCBcImxpc3RPZkxpc3RzXCJdLFxuICBdKTtcbiAgY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCBzZWxlY3QsIFwiQWxsIHRhc2tzXCIsIFtcbiAgICBbXCJ2YWx1ZVwiLCBcIkFsbCB0YXNrc1wiXSxcbiAgICBbXCJkYXRhLWluZGV4LW51bWJlclwiLCAwXSxcbiAgICBbXCJkaXNhYmxlZFwiXSxcbiAgICBbXCJzZWxlY3RlZFwiXSxcbiAgXSk7XG4gIGNvbnN0IGxpc3RBcnJheSA9IGdldExpc3RPcHRpb25zKCk7XG4gIHJlbmRlckxpc3RPcHRpb25zKHNlbGVjdCwgbGlzdEFycmF5KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlzdE9wdGlvbnMoKSB7XG4gIGNvbnN0IGxpc3RBcnJheSA9IGdldFN0b3JlZExpc3RzKCk7XG4gIGxpc3RBcnJheS5zcGxpY2UoMCwgMSk7XG4gIHJldHVybiBsaXN0QXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RPcHRpb25zKHNlbGVjdCwgbGlzdEFycmF5KSB7XG4gIGxldCBpID0gMTtcbiAgbGlzdEFycmF5LmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIG51bGwsIHNlbGVjdCwgbGlzdC50aXRsZSwgW1xuICAgICAgW1widmFsdWVcIiwgbGlzdC50aXRsZV0sXG4gICAgICBbXCJkYXRhLWluZGV4LW51bWJlclwiLCBpXSxcbiAgICBdKTtcbiAgICBpKys7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0odGFza1RvRWRpdCkge1xuICBjb25zdCB2aWV3Q3RyID0gZ2V0Vmlld0N0cigpO1xuICBjb25zdCBtYWluRm9ybSA9IHJlbmRlck1haW5Gb3JtKFwiVGFza1wiLCB2aWV3Q3RyLCB0YXNrVG9FZGl0KTtcbiAgY29uc3QgZGF0ZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWN0clwiLCBtYWluRm9ybSk7XG4gIGNvbnN0IHByaW9yaXR5Q3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByaW9yaXR5LWN0clwiLCBtYWluRm9ybSk7XG4gIGNvbnN0IGxpc3RDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9ybS1jdHJcIiwgbWFpbkZvcm0pO1xuICByZW5kZXJGb3JtRGF0ZShkYXRlQ3RyLCB0YXNrVG9FZGl0KTtcbiAgcmVuZGVyUHJpb3JpdHlTdGF0dXMocHJpb3JpdHlDdHIsIHRhc2tUb0VkaXQpO1xuICByZW5kZXJEcm9wRG93bihsaXN0Q3RyKTtcbiAgY29uc3QgYnV0dG9uQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImJ1dHRvbi1jdHJcIiwgbWFpbkZvcm0pO1xuICBjb25zdCBzdWJtaXRCdG4gPSByZW5kZXJTdWJtaXQoYnV0dG9uQ3RyKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gcmVuZGVyRGVsZXRlKGJ1dHRvbkN0cik7XG4gIHN1Ym1pdFRhc2tFTChzdWJtaXRCdG4pO1xuICBjbG9zZUZvcm1FTCgpO1xuICBkZWxldGVUYXNrRUwoZGVsZXRlQnRuKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXNzaWduZWRMaXN0cyhjaG9zZW5JbmRleCkge1xuICBsZXQgYXNzaWduZWRMaXN0cztcbiAgaWYgKGNob3NlbkluZGV4ID09PSAwKSB7XG4gICAgYXNzaWduZWRMaXN0cyA9IGNob3NlbkluZGV4O1xuICB9IGVsc2Uge1xuICAgIGFzc2lnbmVkTGlzdHMgPSBbMCwgY2hvc2VuSW5kZXhdO1xuICB9XG4gIHJldHVybiBhc3NpZ25lZExpc3RzO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRUwoZGVsZXRlVGFza0J0bikge1xuICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZWRpdGVkKSB7XG4gICAgICBkZWxldGVUYXNrKGVkaXRlZEluZGV4KTtcbiAgICB9XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG5cbiAgICBsb2FkVGFza3NGcm9tU3RvcmFnZSgwKTtcbiAgICBlZGl0ZWQgPSBmYWxzZTtcbiAgICBlZGl0ZWRJbmRleCA9IG51bGw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm1FTCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoMCk7XG4gICAgZWRpdGVkID0gZmFsc2U7XG4gICAgZWRpdGVkSW5kZXggPSBudWxsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFza0VMKHN1Ym1pdFRhc2tCdG4pIHtcbiAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRlZCkge1xuICAgICAgZGVsZXRlVGFzayhlZGl0ZWRJbmRleCk7XG4gICAgfVxuICAgIGNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bkxpc3RcIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGRyb3BEb3duLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgY2hvc2VuSW5kZXggPSBkcm9wRG93bi5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaW5kZXhOdW1iZXI7XG4gICAgY29uc3QgYXNzaWduZWRMaXN0cyA9IGdldEFzc2lnbmVkTGlzdHMoY2hvc2VuSW5kZXgpO1xuICAgIGNyZWF0ZVRhc2soXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VGl0bGVcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGVzY1wiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRUYXNrRGF0ZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFByaW9yaXR5VGFza1wiKS5jaGVja2VkLFxuICAgICAgYXNzaWduZWRMaXN0cyxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBsb2FkVGFza3NGcm9tU3RvcmFnZShjaG9zZW5JbmRleCk7XG4gICAgZWRpdGVkID0gZmFsc2U7XG4gICAgZWRpdGVkSW5kZXggPSBudWxsO1xuICB9KTtcbn1cbiIsImltcG9ydCBjbGVhclZpZXdDdHIgZnJvbSBcIi5cIjtcbmltcG9ydCB7IHJlbmRlckl0ZW1FZGl0LCByZW5kZXJJdGVtVGV4dCB9IGZyb20gXCIuL2FwcFVJXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBlZGl0ZWRMaXN0TG9nIH0gZnJvbSBcIi4vYWRkTmV3TGlzdFwiO1xuaW1wb3J0IHsgZ2V0TGlzdERhdGEgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyByZW5kZXJMaXN0Rm9ybSB9IGZyb20gXCIuL2FkZE5ld0xpc3RcIjtcbmltcG9ydCB7IGRlbGV0ZUxpc3QsIGxvYWRMaXN0c0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgbG9hZFRhc2tzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJMaXN0KGxpc3QsIGkpIHtcbiAgY29uc3QgbGlzdHNDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RzLWN0clwiKTtcbiAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW1wibGlzdC1pdGVtXCIsIFwiaXRlbS1jdHJcIl0sXG4gICAgbGlzdHNDdHIsXG4gICAgXCJcIixcbiAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgYCR7aX1gXV1cbiAgKTtcbiAgY29uc3QgdGV4dEN0ciA9IHJlbmRlckl0ZW1UZXh0KGxpc3QsIGxpc3RJdGVtKTtcbiAgY29uc3QgaWNvbiA9IHJlbmRlckxpc3RJY29uKGxpc3QsIGxpc3RJdGVtKTtcbiAgaWYgKGkgIT09IDApIHtcbiAgICBjb25zdCB2aWV3RWRpdEJ0biA9IHJlbmRlckl0ZW1FZGl0KGxpc3RJdGVtLCBpKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSByZW5kZXJJdGVtRGVsZXRlKGxpc3RJdGVtLCBpKTtcbiAgfVxuICBpZiAoaSA9PT0gMCkge1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RJY29uKGxpc3QsIGN0cikge1xuICBjb25zdCBpY29uRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImljb24tZGl2XCIsIGN0cik7XG4gIGNvbnN0IGxpc3RJY29uID0gbGlzdC5pY29uXG4gICAgPyBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibGlzdC1pY29uLWJ0blwiLCBpY29uRGl2LCBsaXN0Lmljb24sIFtcbiAgICAgICAgW1wiaWRcIiwgXCJsaXN0LWljb25cIl0sXG4gICAgICBdKVxuICAgIDogbnVsbDtcbiAgcmV0dXJuIGljb25EaXY7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RPZkxpc3RzQ3RyKHZpZXdDdHIpIHtcbiAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxpc3RzLWN0clwiLCB2aWV3Q3RyLCBcIlwiLCBbW1wiaWRcIiwgXCJsaXN0cy1jdHJcIl1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbExpc3RzVmlldygpIHtcbiAgY2xlYXJWaWV3Q3RyKCk7XG4gIGNvbnN0IHZpZXdDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXctY3RyXCIpO1xuICBjb25zdCBoZWFkaW5nQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImhlYWRpbmctY3RyXCIsIHZpZXdDdHIpO1xuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImgxXCIsIGhlYWRpbmdDdHIsIFwiQWxsIExpc3RzXCIpO1xuICBjb25zdCBkZXNjID0gY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBcImRlc2NcIixcbiAgICBoZWFkaW5nQ3RyLFxuICAgIFwiVmlldyBhbmQgZWRpdCBhbGwgbGlzdHNcIlxuICApO1xuICBhZGRMaXN0T2ZMaXN0c0N0cih2aWV3Q3RyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySXRlbURlbGV0ZShjdHIsIGluZGV4KSB7XG4gIGNvbnN0IGRlbGV0ZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkZWxldGUtZGl2XCIsIGN0cik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJkZWxldGUtbGlzdFwiLCBcImJ1dHRvblwiXSxcbiAgICBkZWxldGVEaXYsXG4gICAgXCJcIixcbiAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaW5kZXhdXVxuICApO1xuICBjcmVhdGVFbGVtZW50KFxuICAgIFwiaVwiLFxuICAgIFtcImRlbGV0ZS1saXN0LWljb25cIiwgXCJmYS1zb2xpZFwiLCBcImZhLXRyYXNoXCJdLFxuXG4gICAgZGVsZXRlQnRuLFxuICAgIFwiXCIsXG4gICAgW1tcInRpdGxlXCIsIFwiRGVsZXRlIGxpc3RcIl1dXG4gICk7XG4gIHJldHVybiBkZWxldGVCdG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0RXZlbnRMaXMoKSB7XG4gIGVkaXRMaXN0RUwoKTtcbiAgZGVsZXRlTGlzdEVMKCk7XG4gIG9wZW5MaXN0RUwoKTtcbn1cblxuZnVuY3Rpb24gZWRpdExpc3RFTCgpIHtcbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW4tZWRpdFwiKTtcbiAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdEJ0bikgPT4ge1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZWRpdEJ0bi5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgICAgY29uc3QgbGlzdFRvRWRpdCA9IGdldExpc3REYXRhKGluZGV4KTtcbiAgICAgIGVkaXRlZExpc3RMb2coaW5kZXgpO1xuICAgICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgICByZW5kZXJMaXN0Rm9ybShsaXN0VG9FZGl0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3RFTCgpIHtcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWxpc3RcIik7XG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoZGVsZXRlQnRuKSA9PiB7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBkZWxldGVCdG4uZGF0YXNldC5pbmRleE51bWJlcjtcbiAgICAgIGRlbGV0ZUxpc3QoaW5kZXgpO1xuICAgICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgICBsb2FkTGlzdHNGcm9tU3RvcmFnZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3Blbkxpc3RFTCgpIHtcbiAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1cIik7XG4gIGxpc3RJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWU7XG4gICAgICBpZiAodGFnTmFtZSAhPT0gXCJJXCIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0SXRlbS5kYXRhc2V0LmluZGV4TnVtYmVyO1xuICAgICAgICBjbGVhclZpZXdDdHIoKTtcbiAgICAgICAgbG9hZFRhc2tzRnJvbVN0b3JhZ2UoaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBjbGVhclZpZXdDdHIgZnJvbSBcIi5cIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRUYXNrc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGxvYWRMaXN0c0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGxvYWRQcm9maWxlRnJvbVN0b3JhZ2UsIHtcbiAgbG9hZEF2YXRhckZyb21TdG9yYWdlLFxuICBsb2FkTmFtZUZyb21TdG9yYWdlLFxuICBnZXRBdmF0YXIsXG4gIGdldE5hbWUsXG59IGZyb20gXCIuL3Byb2ZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQXBwVUkoKSB7XG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJOYXYoKTtcbiAgcmVuZGVyVmlld0N0cigpO1xuICBhZGROZXdCdG4oKTtcbiAgYWRkTWVudUV2ZW50TGlzKCk7XG59XG5cbmNvbnN0IGljb25MaXN0TmF2ID0gW1xuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtbGlzdFwiXSwgdGV4dDogXCJBbGwgdGFza3NcIiB9LFxuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtc3RhclwiXSwgdGV4dDogXCJUb2RheVwiIH0sXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1mb2xkZXItdHJlZVwiXSwgdGV4dDogXCJBbGwgTGlzdHNcIiB9LFxuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtdXNlclwiXSwgdGV4dDogXCJQcm9maWxlXCIgfSxcbl07XG5cbmZ1bmN0aW9uIGdldEljb25NZW51KG1lbnVEaXYpIHtcbiAgbGV0IGkgPSAwO1xuICBpY29uTGlzdE5hdi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUl0ZW1EaXZcIiwgbWVudURpdiwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgYG1lbnVJdGVtJHtpfWBdLFxuICAgICAgW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgYCR7aX1gXSxcbiAgICBdKTtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBpY29uLmNsYXNzZXMsIG1lbnVJdGVtRGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwic21hbGxcIiwgXCJtZW51VGV4dFwiLCBtZW51SXRlbURpdiwgaWNvbi50ZXh0KTtcbiAgICBpKys7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJdGVtMFwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgY29udGVudCk7XG4gIGNvbnN0IG1lbnVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudURpdlwiLCBuYXYpO1xuICBnZXRJY29uTWVudShtZW51RGl2KTtcbiAgY3JlYXRlRWxlbWVudChcImgzXCIsIFwibG9nb1wiLCBuYXYsIFwiQWJzb2xpc3RseVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiLCBjb250ZW50KTtcbiAgY29uc3QgbG9nb0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJsb2dvLWN0clwiLCBoZWFkZXIpO1xuICBjcmVhdGVFbGVtZW50KFwiaDNcIiwgXCJsb2dvXCIsIGxvZ29DdHIsIFwiQWJzb2xpc3RseVwiKTtcbiAgY29uc3QgaGVhZGVyUHJvZmlsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItcHJvZmlsZVwiLCBoZWFkZXIpO1xuICBsZXQgdXNlck5hbWUgPSBsb2FkTmFtZUZyb21TdG9yYWdlKCk7XG4gIGxldCBhdmF0YXIgPSBsb2FkQXZhdGFyRnJvbVN0b3JhZ2UoKTtcbiAgdXNlck5hbWUgPSBnZXROYW1lKHVzZXJOYW1lKTtcbiAgYXZhdGFyID0gZ2V0QXZhdGFyKGF2YXRhcik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXNlci1uYW1lLWhlYWRlclwiLCBoZWFkZXJQcm9maWxlLCBgSGVsbG8sICR7dXNlck5hbWV9LmApO1xuICBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiYXZhdGFyLWhlYWRlclwiLCBoZWFkZXJQcm9maWxlLCBcIlwiLCBbW1wic3JjXCIsIGF2YXRhcl1dKTtcbiAgYWRkUHJvZmlsZUVMKGhlYWRlclByb2ZpbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVmlld0N0cigpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ2aWV3LWN0clwiLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJ2aWV3LWN0clwiXSxcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrQ3RycygpIHtcbiAgY29uc3Qgdmlld0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1jdHJcIik7XG4gIGNvbnN0IHRvZG9Eb25lQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRvZG8tZG9uZS1jdHJcIiwgdmlld0N0cik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWN0clwiLCB0b2RvRG9uZUN0ciwgXCJcIiwgW1tcImlkXCIsIFwidG9kby1jdHJcIl1dKTtcbiAgY29uc3QgZG9uZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkb25lLWN0clwiLCB0b2RvRG9uZUN0ciwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiZG9uZS1jdHJcIl0sXG4gIF0pO1xuICBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJkb25lLXRpdGxlXCIsIGRvbmVDdHIsIFwiRG9uZVwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3QnRuKCkge1xuICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImFkZC1uZXctYnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS1wbHVzXCJdLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJhZGQtbmV3LWJ0blwiXSxcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtVGV4dChpdGVtLCBjdHIpIHtcbiAgY29uc3QgdGV4dERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZXh0LWRpdlwiLCBjdHIpO1xuICBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJ0YXNrLXRpdGxlXCIsIHRleHREaXYsIGl0ZW0udGl0bGUpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRhc2stZGVzY1wiLCB0ZXh0RGl2LCBpdGVtLmRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIHRleHREaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtRWRpdChjdHIsIGluZGV4KSB7XG4gIGNvbnN0IG9wZW5FZGl0RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm9wZW4tZWRpdC1kaXZcIiwgY3RyLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgYG9wZW4tZWRpdC1kaXYke2luZGV4fWBdLFxuICBdKTtcbiAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJvcGVuLWVkaXRcIiwgXCJidXR0b25cIl0sXG4gICAgb3BlbkVkaXREaXYsXG4gICAgXCJcIixcbiAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaW5kZXhdXVxuICApO1xuICBjcmVhdGVFbGVtZW50KFxuICAgIFwiaVwiLFxuICAgIFtcImVkaXRMaXN0XCIsIFwidmlldy1lZGl0XCIsIFwiZmEtc29saWRcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCJdLFxuXG4gICAgZWRpdEJ0bixcbiAgICBcIlwiLFxuICAgIFtbXCJ0aXRsZVwiLCBcIkVkaXQgJiBEZWxldGVcIl1dXG4gICk7XG4gIHJldHVybiBlZGl0QnRuO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQYXN0U2VsZWN0ZWQobWVudUl0ZW1zKSB7XG4gIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc1NlbGVjdGVkKG1lbnVJdGVtKSB7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudUV2ZW50TGlzKCkge1xuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVJdGVtRGl2XCIpO1xuICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbW92ZVBhc3RTZWxlY3RlZChtZW51SXRlbXMpO1xuICAgICAgbWFya0FzU2VsZWN0ZWQobWVudUl0ZW0pO1xuICAgICAgb3BlblRoaXNQYWdlKG1lbnVJdGVtLmRhdGFzZXQuaW5kZXhOdW1iZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvZmlsZUVMKHByb2ZpbGVIZWFkZXIpIHtcbiAgcHJvZmlsZUhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVmlld0N0cigpO1xuICAgIGxvYWRQcm9maWxlRnJvbVN0b3JhZ2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5UaGlzUGFnZShpbmRleCkge1xuICBjbGVhclZpZXdDdHIoKTtcbiAgaWYgKGluZGV4ID09IDApIHtcbiAgICBsb2FkVGFza3NGcm9tU3RvcmFnZShpbmRleCk7XG4gIH1cbiAgaWYgKGluZGV4ID09IDEpIHtcbiAgICBsb2FkVGFza3NGcm9tU3RvcmFnZShcInRvZGF5XCIpO1xuICB9XG4gIGlmIChpbmRleCA9PSAyKSB7XG4gICAgbG9hZExpc3RzRnJvbVN0b3JhZ2UoKTtcbiAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XG4gICAgbG9hZFByb2ZpbGVGcm9tU3RvcmFnZSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KFxuICB0YWcsXG4gIGNsYXNzTGlzdCxcbiAgcGFyZW50RWwsXG4gIHRleHQsXG4gIGF0dHJpYnV0ZXNcbikge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgY2xhc3NMaXN0ID0gQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpXG4gICAgICA/IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpXG4gICAgICA6IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICB9XG4gIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShlbGVtZW50WzBdLCBlbGVtZW50WzFdKTtcbiAgICB9KTtcbiAgfVxuICBwYXJlbnRFbC5hcHBlbmQobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTywgaXNQYXN0LCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmZ1bmN0aW9uIGNoZWNrSWZQYXN0KGRhdGUsIGR1ZURhdGVEaXYpIHtcbiAgaWYgKGlzUGFzdChkYXRlKSkgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZVwiKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlRvZGF5KGRhdGUsIGR1ZURhdGVEaXYpIHtcbiAgaWYgKGlzVG9kYXkoZGF0ZSkpIHtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREdWVEYXRlcyhkYXRlLCBkdWVEYXRlRGl2KSB7XG4gIGlmIChkYXRlKSB7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlSVNPKGRhdGUpO1xuICAgIGNoZWNrSWZQYXN0KHBhcnNlZERhdGUsIGR1ZURhdGVEaXYpO1xuICAgIGNoZWNrSWZUb2RheShwYXJzZWREYXRlLCBkdWVEYXRlRGl2KTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KHBhcnNlZERhdGUsIFwiZGQgTU1NIHl5XCIpO1xuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICB9XG59XG4iLCJpbXBvcnQgcmVuZGVyQXBwVUkgZnJvbSBcIi4vYXBwVUlcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tGb3JtIH0gZnJvbSBcIi4vYWRkTmV3VGFza1wiO1xuaW1wb3J0IHsgcmVuZGVyTGlzdEZvcm0gfSBmcm9tIFwiLi9hZGROZXdMaXN0XCI7XG5pbXBvcnQgeyBsb2FkVGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJBcHBVSSgpO1xuICBsb2FkVGFza3NGcm9tU3RvcmFnZSgwKTtcbiAgYWRkTmV3RXZlbnRMaSgpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZE5ld0V2ZW50TGkoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5ldy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBjaGVja1R5cGUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVHlwZSgpIHtcbiAgY29uc3QgYWxsTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJdGVtMlwiKTtcbiAgaWYgKGFsbExpc3RzLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgcmV0dXJuIHJlbmRlckxpc3RGb3JtKCk7XG4gIH1cbiAgcmVuZGVyVGFza0Zvcm0oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJWaWV3Q3RyKCkge1xuICBjb25zdCB2aWV3Q3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3LWN0clwiKTtcbiAgbGV0IGkgPSAwO1xuICBpZiAodmlld0N0ci5oYXNDaGlsZE5vZGVzKSB7XG4gICAgd2hpbGUgKHZpZXdDdHIuZmlyc3RDaGlsZCkge1xuICAgICAgdmlld0N0ci5yZW1vdmVDaGlsZCh2aWV3Q3RyLmZpcnN0Q2hpbGQpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyTGlzdE5hbWUgfSBmcm9tIFwiLi9saXN0VUlcIjtcbmltcG9ydCByZW5kZXJMaXN0LCB7IGFsbExpc3RzVmlldyB9IGZyb20gXCIuL2FsbExpc3RzVUlcIjtcbmltcG9ydCB7IGFkZExpc3RFdmVudExpcyB9IGZyb20gXCIuL2FsbExpc3RzVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGljb24pIHtcbiAgY29uc3QgbGlzdCA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGljb246IGljb24sXG4gIH07XG4gIGFkZExpc3RUb1N0b3JhZ2UobGlzdCk7XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmVkTGlzdHMoKSB7XG4gIGNvbnN0IHN0b3JlZExpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKSB8fCBbXTtcbiAgcmV0dXJuIHN0b3JlZExpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdFRvU3RvcmFnZShsaXN0KSB7XG4gIGNvbnN0IGxpc3RzID0gZ2V0U3RvcmVkTGlzdHMoKTtcbiAgbGlzdHMucHVzaChsaXN0KTtcbiAgY29uc3QgbGlzdERhdGEgPSBKU09OLnN0cmluZ2lmeShsaXN0cyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdHNcIiwgbGlzdERhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdERhdGEoaW5kZXgpIHtcbiAgY29uc3Qgc3RvcmVkTGlzdHMgPSBnZXRTdG9yZWRMaXN0cygpO1xuICBpZiAoc3RvcmVkTGlzdHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZvdW5kTGlzdCA9IHN0b3JlZExpc3RzW2luZGV4XTtcbiAgICBpZiAoZm91bmRMaXN0KSB7XG4gICAgICByZXR1cm4gZm91bmRMaXN0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdEluZm8oSUQpIHtcbiAgY29uc3QgbGlzdCA9IGdldExpc3REYXRhKElEKTtcbiAgaWYgKGxpc3QpIHtcbiAgICByZW5kZXJMaXN0TmFtZShsaXN0LnRpdGxlLCBsaXN0LmRlc2NyaXB0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZUxpc3QoXCJBbGwgdGFza3NcIiwgXCJWaWV3IGFsbCB5b3VyIHRhc2tzXCIsIG51bGwpO1xuICAgIHJlbmRlckxpc3ROYW1lKGFsbFRhc2tzLnRpdGxlLCBhbGxUYXNrcy5kZXNjcmlwdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMaXN0c0Zyb21TdG9yYWdlKCkge1xuICBhbGxMaXN0c1ZpZXcoKTtcbiAgY29uc3Qgc3RvcmVkTGlzdHMgPSBnZXRTdG9yZWRMaXN0cygpO1xuICBsZXQgaSA9IDA7XG4gIHN0b3JlZExpc3RzLmZvckVhY2goKHN0b3JlZExpc3QpID0+IHtcbiAgICByZW5kZXJMaXN0KHN0b3JlZExpc3QsIGkpO1xuICAgIGkrKztcbiAgfSk7XG4gIGFkZExpc3RFdmVudExpcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlzdChpbmRleCkge1xuICBjb25zdCBsaXN0cyA9IGdldFN0b3JlZExpc3RzKCk7XG4gIGlmIChsaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgbGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBjb25zdCBsaXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGxpc3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIGxpc3REYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IGNsZWFyVmlld0N0ciBmcm9tIFwiLlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGZvcm1hdER1ZURhdGVzIGZyb20gXCIuL2RhdGVcIjtcbmltcG9ydCB7XG4gIGdldFRhc2tEYXRhLFxuICBsb2FkVGFza3NGcm9tU3RvcmFnZSxcbiAgdXBkYXRlQ29tcGxldGVTdGF0dXMsXG59IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyByZW5kZXJJdGVtRWRpdCwgcmVuZGVySXRlbVRleHQgfSBmcm9tIFwiLi9hcHBVSVwiO1xuaW1wb3J0IHsgZWRpdGVkTG9nLCByZW5kZXJUYXNrRm9ybSB9IGZyb20gXCIuL2FkZE5ld1Rhc2tcIjtcbmltcG9ydCB7IGdldExpc3REYXRhIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IENvbXBsZXRlIGZyb20gXCIuL2NvbXBsZXRlLnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTGlzdE5hbWUodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IHZpZXdDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXctY3RyXCIpO1xuICBjb25zdCBoZWFkaW5nQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImhlYWRpbmctY3RyXCIsIHZpZXdDdHIpO1xuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImgxXCIsIGhlYWRpbmdDdHIsIHRpdGxlKTtcbiAgY29uc3QgZGVzYyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGVzY1wiLCBoZWFkaW5nQ3RyLCBkZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByaW9yaXR5U3RhdHVzKHN0YXR1cywgdGV4dERpdikge1xuICBpZiAoc3RhdHVzKSB7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdEljb24odGFzaywgY3RyKSB7XG4gIGxldCBpY29uRGl2O1xuICBpZiAodGFzay5hc3NpZ25lZExpc3RzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBsaXN0SW5kZXggPSB0YXNrLmFzc2lnbmVkTGlzdHMuc2xpY2UoMSwgMik7XG4gICAgY29uc3QgbGlzdCA9IGdldExpc3REYXRhKGxpc3RJbmRleCk7XG4gICAgaWYgKGxpc3QuaWNvbikge1xuICAgICAgY29uc3QgaWNvbkN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpY29uLWRpdlwiLCBjdHIpO1xuICAgICAgY29uc3QgbGlzdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwibGlzdC1pY29uLWJ0blwiLFxuICAgICAgICBpY29uQ3RyLFxuICAgICAgICBsaXN0Lmljb24sXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcImxpc3QtaWNvblwiXSxcbiAgICAgICAgICBbXCJ0aXRsZVwiLCBcIlZpZXcgTGlzdFwiXSxcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICAgIG9wZW5MaXN0RUwobGlzdEJ0biwgbGlzdEluZGV4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGljb25EaXY7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckR1ZURhdGUodGFzaywgY3RyLCBpbmRleCkge1xuICBjb25zdCB0YXNrRHVlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stZHVlLWRpdlwiLCBjdHIpO1xuICBjcmVhdGVFbGVtZW50KFxuICAgIFwic21hbGxcIixcbiAgICBcImR1ZS1kYXRlXCIsXG4gICAgdGFza0R1ZURpdixcbiAgICBmb3JtYXREdWVEYXRlcyh0YXNrLmR1ZURhdGUsIHRhc2tEdWVEaXYpXG4gICk7XG4gIHJldHVybiB0YXNrRHVlRGl2O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrQ29tcGxldGUodGFzaywgY3RyLCBpbmRleCkge1xuICBjb25zdCB0YXNrQ29tcGxldGVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFzay1jb21wbGV0ZS1kaXZcIiwgY3RyKTtcbiAgY3JlYXRlRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcbiAgICAgIFwiY29tcGxldGUtYnRuXCIsXG4gICAgICBcImZhLXNvbGlkXCIsXG4gICAgICBcImZhLWNoZWNrXCIsXG4gICAgICB0YXNrLmNvbXBsZXRlZCA/IFwiZG9uZUJ0blwiIDogXCJ0b2RvQnRuXCIsXG4gICAgICBcImJ1dHRvblwiLFxuICAgIF0sXG4gICAgdGFza0NvbXBsZXRlRGl2LFxuICAgIFwiXCIsXG4gICAgW1tcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGluZGV4XV1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaywgaW5kZXgpIHtcbiAgY29uc3QgdG9kb0N0ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1jdHJcIik7XG4gIGNvbnN0IGRvbmVDdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbmUtY3RyXCIpO1xuICBjb25zdCBpdGVtQ3RyID0gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwiaXRlbS1jdHJcIixcbiAgICB0YXNrLmNvbXBsZXRlZCA/IGRvbmVDdHIgOiB0b2RvQ3RyLFxuICAgIFwiXCIsXG4gICAgW1tcImlkXCIsIGBpdGVtLWN0ciR7aW5kZXh9YF1dXG4gICk7XG4gIGNvbnN0IHRleHREaXYgPSByZW5kZXJJdGVtVGV4dCh0YXNrLCBpdGVtQ3RyKTtcbiAgcmVuZGVyRHVlRGF0ZSh0YXNrLCB0ZXh0RGl2LCBpbmRleCk7XG4gIGNvbnN0IHZpZXdFZGl0RGl2ID0gcmVuZGVySXRlbUVkaXQoaXRlbUN0ciwgaW5kZXgpO1xuICByZW5kZXJMaXN0SWNvbih0YXNrLCBpdGVtQ3RyKTtcbiAgcmVuZGVyVGFza0NvbXBsZXRlKHRhc2ssIGl0ZW1DdHIsIGluZGV4KTtcbiAgcmVuZGVyUHJpb3JpdHlTdGF0dXModGFzay5wcmlvcml0eSwgdGV4dERpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmRW1wdHkoKSB7XG4gIGNvbnN0IHRvZG9DdHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tY3RyXCIpO1xuICBjb25zdCBkb25lQ3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb25lLWN0clwiKTtcbiAgaWYgKCF0b2RvQ3RyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGNvbnN0IG5vVGFza3NDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibm8tdGFza3MtY3RyXCIsIHRvZG9DdHIsIFwiXCIsIFtcbiAgICAgIFtcImlkXCIsIFwibm8tdGFza3MtY3RyXCJdLFxuICAgIF0pO1xuICAgIGNvbnN0IG5vVGFza3NJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwibm8tdGFza3MtaW1nXCIsIG5vVGFza3NDdHIpO1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwibm8tdGFza3MtdGV4dFwiLCBub1Rhc2tzQ3RyLCBcIllvdSdyZSB1cCB0byBkYXRlIVwiKTtcbiAgICBub1Rhc2tzSW1nLnNyYyA9IENvbXBsZXRlO1xuICB9XG4gIGlmICh0b2RvQ3RyLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby10YXNrcy1jdHJcIik7XG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBlbXB0eS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRvbmVDdHIuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBbXCJub3RoaW5nLWNvbXBsZXRlXCIsIFwibm8tdGFza3MtdGV4dFwiXSxcbiAgICAgIGRvbmVDdHIsXG4gICAgICBcIkNvbXBsZXRlIGEgdGFzayB0byBzZWUgaXQgaGVyZS4uLlwiLFxuICAgICAgW1tcImlkXCIsIFwibm90aGluZy1jb21wbGV0ZVwiXV1cbiAgICApO1xuICB9XG4gIGlmIChkb25lQ3RyLmNoaWxkTm9kZXMubGVuZ3RoID4gMikge1xuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RoaW5nLWNvbXBsZXRlXCIpO1xuICAgIGlmIChlbXB0eSkge1xuICAgICAgZW1wdHkucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrRXZlbnRMaXMoKSB7XG4gIGVkaXRUYXNrRUwoKTtcbiAgY29tcGxldGVUYXNrRUwoKTtcbn1cblxuZnVuY3Rpb24gb3Blbkxpc3RFTChsaXN0QnRuLCBsaXN0SW5kZXgpIHtcbiAgbGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjbGVhclZpZXdDdHIoKTtcbiAgICBsb2FkVGFza3NGcm9tU3RvcmFnZShsaXN0SW5kZXgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tFTCgpIHtcbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW4tZWRpdFwiKTtcbiAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdEJ0bikgPT4ge1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGVkaXRCdG4uZGF0YXNldC5pbmRleE51bWJlcjtcbiAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBnZXRUYXNrRGF0YShpbmRleCk7XG4gICAgICBlZGl0ZWRMb2coaW5kZXgpO1xuICAgICAgY2xlYXJWaWV3Q3RyKCk7XG4gICAgICByZW5kZXJUYXNrRm9ybSh0YXNrVG9FZGl0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudChpbmRleCkge1xuICBjb25zdCBpdGVtQ3RyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tY3RyJHtpbmRleH1gKTtcbiAgbGV0IHBhcmVudElEID0gaXRlbUN0ci5wYXJlbnROb2RlLmlkO1xuICBwYXJlbnRJRCA9IHBhcmVudElEID09PSBcInRvZG8tY3RyXCIgPyBcImRvbmUtY3RyXCIgOiBcInRvZG8tY3RyXCI7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElEKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGl0ZW1DdHIpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2tFTCgpIHtcbiAgY29uc3QgY29tcGxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wbGV0ZS1idG5cIik7XG4gIGNvbXBsZXRlQnRucy5mb3JFYWNoKChjb21wbGV0ZUJ0bikgPT4ge1xuICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGNvbXBsZXRlQnRuLmRhdGFzZXQuaW5kZXhOdW1iZXI7XG4gICAgICBjb25zdCB0YXNrVG9FZGl0ID0gZ2V0VGFza0RhdGEoaW5kZXgpO1xuICAgICAgdXBkYXRlUGFyZW50KGluZGV4KTtcbiAgICAgIHVwZGF0ZUNvbXBsZXRlU3RhdHVzKGluZGV4KTtcbiAgICAgIGNoZWNrSWZFbXB0eSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVQcm9maWxlVUkgZnJvbSBcIi4vcHJvZmlsZVVJXCI7XG5pbXBvcnQgeyBBdmF0YXJHZW5lcmF0b3IgfSBmcm9tIFwicmFuZG9tLWF2YXRhci1nZW5lcmF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2ZpbGVGcm9tU3RvcmFnZSgpIHtcbiAgY29uc3QgbmFtZSA9IGxvYWROYW1lRnJvbVN0b3JhZ2UoKTtcbiAgY29uc3QgYXZhdGFyID0gbG9hZEF2YXRhckZyb21TdG9yYWdlKCk7XG4gIGNyZWF0ZVByb2ZpbGVVSShuYW1lLCBhdmF0YXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEF2YXRhckZyb21TdG9yYWdlKCkge1xuICBjb25zdCBhdmF0YXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXZhdGFyXCIpKSB8fCBbXTtcbiAgcmV0dXJuIGF2YXRhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROYW1lRnJvbVN0b3JhZ2UoKSB7XG4gIGNvbnN0IG5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSkgfHwgW107XG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU5hbWVUb1N0b3JhZ2UobmFtZSkge1xuICBjb25zdCBzdG9yZU5hbWUgPSBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIHN0b3JlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXZhdGFyVG9TdG9yYWdlKGF2YXRhcikge1xuICBjb25zdCBzdG9yZUF2YXRhciA9IEpTT04uc3RyaW5naWZ5KGF2YXRhcik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXZhdGFyXCIsIHN0b3JlQXZhdGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF2YXRhcihhdmF0YXIpIHtcbiAgaWYgKGF2YXRhci5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGF2YXRhcjtcbiAgfVxuICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgQXZhdGFyR2VuZXJhdG9yKCk7XG4gIGNvbnN0IGRlZmF1bHRBdmF0YXIgPSBnZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21BdmF0YXIoXCJhdmF0YXJcIik7XG4gIHNhdmVBdmF0YXJUb1N0b3JhZ2UoZGVmYXVsdEF2YXRhcik7XG4gIHJldHVybiBkZWZhdWx0QXZhdGFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShuYW1lKSB7XG4gIGlmIChuYW1lLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBuYW1lID0gXCJOZXdVc2VyXCI7XG4gIHNhdmVOYW1lVG9TdG9yYWdlKG5hbWUpO1xuICByZXR1cm4gbmFtZTtcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFZpZXdDdHIgfSBmcm9tIFwiLi9hZGROZXdcIjtcbmltcG9ydCB7XG4gIHNhdmVOYW1lVG9TdG9yYWdlLFxuICBzYXZlQXZhdGFyVG9TdG9yYWdlLFxuICBnZXROYW1lLFxuICBnZXRBdmF0YXIsXG59IGZyb20gXCIuL3Byb2ZpbGVcIjtcbmltcG9ydCB7IEF2YXRhckdlbmVyYXRvciB9IGZyb20gXCJyYW5kb20tYXZhdGFyLWdlbmVyYXRvclwiO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vYXBwVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvZmlsZVVJKG5hbWUsIGF2YXRhcikge1xuICBjb25zdCB2aWV3Q3RyID0gZ2V0Vmlld0N0cigpO1xuICBjb25zdCBwcm9maWxlQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2ZpbGUtY3RyXCIsIHZpZXdDdHIpO1xuICBjb25zdCBhdmF0YXJDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYXZhdGFyLWN0clwiLCBwcm9maWxlQ3RyKTtcbiAgY29uc3QgYXZhdGFySW1nID0gYXZhdGFyVUkoYXZhdGFyLCBhdmF0YXJDdHIpO1xuICBjb25zdCBuYW1lQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2ZpbGUtbmFtZS1jdHJcIiwgcHJvZmlsZUN0cik7XG4gIGNvbnN0IGN1cnJlbnROYW1lID0gZ2V0TmFtZShuYW1lKTtcbiAgY29uc3QgcHJvZmlsZU5hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByb2ZpbGUtbmFtZVwiLCBuYW1lQ3RyLCBjdXJyZW50TmFtZSk7XG4gIGNvbnN0IGJ1dHRvbkN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJidXR0b24tY3RyXCIsIHByb2ZpbGVDdHIpO1xuICBjb25zdCBlZGl0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICBcImVkaXQtbmFtZS1idG5cIixcbiAgICBidXR0b25DdHIsXG4gICAgXCJFZGl0IG5hbWVcIlxuICApO1xuICBjb25zdCBlZGl0QXZhdGFyID0gY3JlYXRlRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiYXZhdGFyLWJ0blwiLFxuICAgIGJ1dHRvbkN0cixcbiAgICBcIlJhbmRvbSBhdmF0YXJcIlxuICApO1xuICBlZGl0TmFtZUVMKGVkaXROYW1lLCBwcm9maWxlTmFtZSk7XG4gIHJhbmRvbUF2YXRhckVMKGF2YXRhckltZywgZWRpdEF2YXRhcik7XG59XG5cbmZ1bmN0aW9uIGF2YXRhclVJKGF2YXRhciwgYXZhdGFyQ3RyKSB7XG4gIGNvbnN0IGN1cnJlbnRBdmF0YXIgPSBnZXRBdmF0YXIoYXZhdGFyKTtcbiAgY29uc3QgYXZhdGFySW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImF2YXRhclwiLCBhdmF0YXJDdHIsIFwiXCIsIFtcbiAgICBbXCJzcmNcIiwgY3VycmVudEF2YXRhcl0sXG4gIF0pO1xuICByZXR1cm4gYXZhdGFySW1nO1xufVxuXG5mdW5jdGlvbiByYW5kb21BdmF0YXJFTChpbWcsIGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgQXZhdGFyR2VuZXJhdG9yKCk7XG4gICAgY29uc3QgYXZhdGFyID0gZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tQXZhdGFyKCk7XG4gICAgc2F2ZUF2YXRhclRvU3RvcmFnZShhdmF0YXIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXZhdGFyKTtcbiAgICByZW5kZXJIZWFkZXIoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXROYW1lRUwoZWRpdE5hbWUsIHByb2ZpbGVOYW1lKSB7XG4gIGVkaXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcIkVudGVyIHByb2ZpbGUgbmFtZVwiKTtcbiAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgc2F2ZU5hbWVUb1N0b3JhZ2UobmFtZSk7XG4gICAgcmVuZGVySGVhZGVyKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyTGlzdE5hbWUsIHJlbmRlclRhc2sgfSBmcm9tIFwiLi9saXN0VUlcIjtcbmltcG9ydCB7IGdldExpc3RJbmZvIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgYWRkVGFza0V2ZW50TGlzLCBjaGVja0lmRW1wdHkgfSBmcm9tIFwiLi9saXN0VUlcIjtcbmltcG9ydCB7IGFkZFRhc2tDdHJzIH0gZnJvbSBcIi4vYXBwVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayhcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgbGlzdCxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgdGFzayA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGFzc2lnbmVkTGlzdHM6IEFycmF5LmlzQXJyYXkobGlzdCkgPyBsaXN0IDogW2xpc3RdLFxuICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgIGFkZFRhc2tUb1N0b3JhZ2U6IGFkZFRhc2tUb1N0b3JhZ2UsXG4gIH07XG4gIHRhc2suYWRkVGFza1RvU3RvcmFnZSgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvU3RvcmFnZSgpIHtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICB0YXNrcy5wdXNoKHRoaXMpO1xuICBjb25zdCB0YXNrRGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCB0YXNrRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKHRhc2spIHtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza3NGcm9tU3RvcmFnZShsaXN0SW5kZXgpIHtcbiAgYWRkVGFza0N0cnMoKTtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICBpZiAobGlzdEluZGV4ID09IFwidG9kYXlcIikge1xuICAgIHJlbmRlckxpc3ROYW1lKFwiVG9kYXlcIiwgXCJBbGwgdGFza3MgZHVlIHRvZGF5XCIpO1xuICAgIGdldFRvZGF5c1Rhc2tzKHRhc2tzKTtcbiAgfSBlbHNlIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgZ2V0VGFza3NGb3JUaGlzTGlzdChsaXN0SW5kZXgsIHRhc2tzKTtcbiAgICBnZXRMaXN0SW5mbyhsaXN0SW5kZXgpO1xuICB9IGVsc2Uge1xuICAgIGdldExpc3RJbmZvKGxpc3RJbmRleCk7XG4gIH1cbiAgYWRkVGFza0V2ZW50TGlzKCk7XG4gIGNoZWNrSWZFbXB0eSgpO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RheXNUYXNrcyh0YXNrcykge1xuICBsZXQgaSA9IDA7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoaXNUb2RheSh0YXNrLmR1ZURhdGUpKSB7XG4gICAgICByZW5kZXJUYXNrKHRhc2ssIGkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tzRm9yVGhpc0xpc3QobGlzdElELCB0YXNrcykge1xuICBsZXQgaSA9IDA7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5hc3NpZ25lZExpc3RzLnRvU3RyaW5nKCkuaW5jbHVkZXMobGlzdElELnRvU3RyaW5nKCkpKSB7XG4gICAgICByZW5kZXJUYXNrKHRhc2ssIGkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRGF0YShpbmRleCkge1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4gIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRhc2tzW2luZGV4XTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4gIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBjb25zdCB0YXNrRGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIHRhc2tEYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVTdGF0dXMoaW5kZXgpIHtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgIHRvZ2dsZUNvbXBsZXRlKHRhc2tzW2luZGV4XSk7XG4gICAgY29uc3QgdGFza0RhdGEgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCB0YXNrRGF0YSk7XG4gIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKCksXG4gICAgICBkYXRlLmdldEhvdXJzKCksXG4gICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufVxuIiwiY29uc3QgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gW1wiRFwiLCBcIkREXCJdO1xuY29uc3QgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gXCJZWVlZXCIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVc2UgXFxgeXl5eVxcYCBpbnN0ZWFkIG9mIFxcYFlZWVlcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGB5eVxcYCBpbnN0ZWFkIG9mIFxcYFlZXFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSBcIkRcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGBkXFxgIGluc3RlYWQgb2YgXFxgRFxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gXCJERFwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYGRkXFxgIGluc3RlYWQgb2YgXFxgRERcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC1cbiAgICBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgdGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4gXCInXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlcihcbiAgICAgICAgICBvcmlnaW5hbERhdGUsXG4gICAgICAgICAgc3Vic3RyaW5nLFxuICAgICAgICAgIGxvY2FsZS5sb2NhbGl6ZSxcbiAgICAgICAgICBmb3JtYXR0ZXJPcHRpb25zLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICBjb25zdCBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGUsIHN0YXJ0T2ZZZWFyKF9kYXRlKSk7XG4gIGNvbnN0IGRheU9mWWVhciA9IGRpZmYgKyAxO1xuICByZXR1cm4gZGF5T2ZZZWFyO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheU9mWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9XG4gICAgc3RhcnRPZklTT1dlZWsoX2RhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPVxuICAgIHN0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGFzdChkYXRlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpIDwgRGF0ZS5ub3coKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1Bhc3Q7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZUlTT30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zPy5hZGRpdGlvbmFsRGlnaXRzID8/IDI7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcblxuICBsZXQgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICBjb25zdCBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBsZXQgdGltZSA9IDA7XG4gIGxldCBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBKUyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSxcbiAgICApO1xuICAgIHJlc3VsdC5zZXRIb3VycyhcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxuXG5jb25zdCBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG59O1xuXG5jb25zdCBkYXRlUmVnZXggPVxuICAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbmNvbnN0IHRpbWVSZWdleCA9XG4gIC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbmNvbnN0IHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0ge307XG4gIGNvbnN0IGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIGxldCB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoXG4gICAgICAgIGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLFxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCBcIlwiKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIFwiXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pfChcXFxcZHsyfXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pJClcIixcbiAgKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4geyB5ZWFyOiBOYU4sIHJlc3REYXRlU3RyaW5nOiBcIlwiIH07XG5cbiAgY29uc3QgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgY29uc3QgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICBjb25zdCBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIGNvbnN0IGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIGNvbnN0IGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fFxuICAgICAgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIGNvbnN0IGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZShcIixcIiwgXCIuXCIpKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09IFwiWlwiKSByZXR1cm4gMDtcblxuICBjb25zdCBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcblxuICBjb25zdCBzaWduID0gY2FwdHVyZXNbMV0gPT09IFwiK1wiID8gLTEgOiAxO1xuICBjb25zdCBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgY29uc3QgbWludXRlcyA9IChjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkpIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIGNvbnN0IGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5jb25zdCBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIChcbiAgICBtb250aCA+PSAwICYmXG4gICAgbW9udGggPD0gMTEgJiZcbiAgICBkYXRlID49IDEgJiZcbiAgICBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIHNlY29uZHMgPj0gMCAmJlxuICAgIHNlY29uZHMgPCA2MCAmJlxuICAgIG1pbnV0ZXMgPj0gMCAmJlxuICAgIG1pbnV0ZXMgPCA2MCAmJlxuICAgIGhvdXJzID49IDAgJiZcbiAgICBob3VycyA8IDI1XG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBwYXJzZUlTTztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSkge1xuICBjb25zdCBjbGVhbkRhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJnU3RyID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJmdW5jdGlvbiBhc3NlcnROb25FbXB0eVN0cmluZyAoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCAhc3RyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG5vbi1lbXB0eSBzdHJpbmcsIGdvdDogJyArIHN0cilcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnROdW1iZXIgKG51bWJlcikge1xuICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgbnVtYmVyLCBnb3Q6ICcgKyBudW1iZXIpXG4gIH1cbn1cblxuY29uc3QgREJfVkVSU0lPTl9DVVJSRU5UID0gMTtcbmNvbnN0IERCX1ZFUlNJT05fSU5JVElBTCA9IDE7XG5jb25zdCBTVE9SRV9FTU9KSSA9ICdlbW9qaSc7XG5jb25zdCBTVE9SRV9LRVlWQUxVRSA9ICdrZXl2YWx1ZSc7XG5jb25zdCBTVE9SRV9GQVZPUklURVMgPSAnZmF2b3JpdGVzJztcbmNvbnN0IEZJRUxEX1RPS0VOUyA9ICd0b2tlbnMnO1xuY29uc3QgSU5ERVhfVE9LRU5TID0gJ3Rva2Vucyc7XG5jb25zdCBGSUVMRF9VTklDT0RFID0gJ3VuaWNvZGUnO1xuY29uc3QgSU5ERVhfQ09VTlQgPSAnY291bnQnO1xuY29uc3QgRklFTERfR1JPVVAgPSAnZ3JvdXAnO1xuY29uc3QgRklFTERfT1JERVIgPSAnb3JkZXInO1xuY29uc3QgSU5ERVhfR1JPVVBfQU5EX09SREVSID0gJ2dyb3VwLW9yZGVyJztcbmNvbnN0IEtFWV9FVEFHID0gJ2VUYWcnO1xuY29uc3QgS0VZX1VSTCA9ICd1cmwnO1xuY29uc3QgS0VZX1BSRUZFUlJFRF9TS0lOVE9ORSA9ICdza2luVG9uZSc7XG5jb25zdCBNT0RFX1JFQURPTkxZID0gJ3JlYWRvbmx5JztcbmNvbnN0IE1PREVfUkVBRFdSSVRFID0gJ3JlYWR3cml0ZSc7XG5jb25zdCBJTkRFWF9TS0lOX1VOSUNPREUgPSAnc2tpblVuaWNvZGVzJztcbmNvbnN0IEZJRUxEX1NLSU5fVU5JQ09ERSA9ICdza2luVW5pY29kZXMnO1xuXG5jb25zdCBERUZBVUxUX0RBVEFfU09VUkNFID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1vamktcGlja2VyLWVsZW1lbnQtZGF0YUBeMS9lbi9lbW9qaWJhc2UvZGF0YS5qc29uJztcbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gJ2VuJztcblxuLy8gbGlrZSBsb2Rhc2gncyB1bmlxQnkgYnV0IG11Y2ggc21hbGxlclxuZnVuY3Rpb24gdW5pcUJ5IChhcnIsIGZ1bmMpIHtcbiAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuICBjb25zdCByZXMgPSBbXTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgIGNvbnN0IGtleSA9IGZ1bmMoaXRlbSk7XG4gICAgaWYgKCFzZXQuaGFzKGtleSkpIHtcbiAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHVuaXFFbW9qaSAoZW1vamlzKSB7XG4gIHJldHVybiB1bmlxQnkoZW1vamlzLCBfID0+IF8udW5pY29kZSlcbn1cblxuZnVuY3Rpb24gaW5pdGlhbE1pZ3JhdGlvbiAoZGIpIHtcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0U3RvcmUgKG5hbWUsIGtleVBhdGgsIGluZGV4ZXMpIHtcbiAgICBjb25zdCBzdG9yZSA9IGtleVBhdGhcbiAgICAgID8gZGIuY3JlYXRlT2JqZWN0U3RvcmUobmFtZSwgeyBrZXlQYXRoIH0pXG4gICAgICA6IGRiLmNyZWF0ZU9iamVjdFN0b3JlKG5hbWUpO1xuICAgIGlmIChpbmRleGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IFtpbmRleE5hbWUsIFtrZXlQYXRoLCBtdWx0aUVudHJ5XV0gb2YgT2JqZWN0LmVudHJpZXMoaW5kZXhlcykpIHtcbiAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoaW5kZXhOYW1lLCBrZXlQYXRoLCB7IG11bHRpRW50cnkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdG9yZVxuICB9XG5cbiAgY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfS0VZVkFMVUUpO1xuICBjcmVhdGVPYmplY3RTdG9yZShTVE9SRV9FTU9KSSwgLyoga2V5UGF0aCAqLyBGSUVMRF9VTklDT0RFLCB7XG4gICAgW0lOREVYX1RPS0VOU106IFtGSUVMRF9UT0tFTlMsIC8qIG11bHRpRW50cnkgKi8gdHJ1ZV0sXG4gICAgW0lOREVYX0dST1VQX0FORF9PUkRFUl06IFtbRklFTERfR1JPVVAsIEZJRUxEX09SREVSXV0sXG4gICAgW0lOREVYX1NLSU5fVU5JQ09ERV06IFtGSUVMRF9TS0lOX1VOSUNPREUsIC8qIG11bHRpRW50cnkgKi8gdHJ1ZV1cbiAgfSk7XG4gIGNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX0ZBVk9SSVRFUywgdW5kZWZpbmVkLCB7XG4gICAgW0lOREVYX0NPVU5UXTogWycnXVxuICB9KTtcbn1cblxuY29uc3Qgb3BlbkluZGV4ZWREQlJlcXVlc3RzID0ge307XG5jb25zdCBkYXRhYmFzZUNhY2hlID0ge307XG5jb25zdCBvbkNsb3NlTGlzdGVuZXJzID0ge307XG5cbmZ1bmN0aW9uIGhhbmRsZU9wZW5PckRlbGV0ZVJlcSAocmVzb2x2ZSwgcmVqZWN0LCByZXEpIHtcbiAgLy8gVGhlc2UgdGhpbmdzIGFyZSBhbG1vc3QgaW1wb3NzaWJsZSB0byB0ZXN0IHdpdGggZmFrZUluZGV4ZWREQiBzYWRseVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXEub25ibG9ja2VkID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignSURCIGJsb2NrZWQnKSk7XG4gIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEYXRhYmFzZSAoZGJOYW1lKSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgREJfVkVSU0lPTl9DVVJSRU5UKTtcbiAgICBvcGVuSW5kZXhlZERCUmVxdWVzdHNbZGJOYW1lXSA9IHJlcTtcbiAgICByZXEub251cGdyYWRlbmVlZGVkID0gZSA9PiB7XG4gICAgICAvLyBUZWNobmljYWxseSB0aGVyZSBpcyBvbmx5IG9uZSB2ZXJzaW9uLCBzbyB3ZSBkb24ndCBuZWVkIHRoaXMgYGlmYCBjaGVja1xuICAgICAgLy8gQnV0IGlmIGFuIG9sZCB2ZXJzaW9uIG9mIHRoZSBKUyBpcyBpbiBhbm90aGVyIGJyb3dzZXIgdGFiXG4gICAgICAvLyBhbmQgaXQgZ2V0cyB1cGdyYWRlZCBpbiB0aGUgZnV0dXJlIGFuZCB3ZSBoYXZlIGEgbmV3IERCIHZlcnNpb24sIHdlbGwuLi5cbiAgICAgIC8vIGJldHRlciBzYWZlIHRoYW4gc29ycnkuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGUub2xkVmVyc2lvbiA8IERCX1ZFUlNJT05fSU5JVElBTCkge1xuICAgICAgICBpbml0aWFsTWlncmF0aW9uKHJlcS5yZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgaGFuZGxlT3Blbk9yRGVsZXRlUmVxKHJlc29sdmUsIHJlamVjdCwgcmVxKTtcbiAgfSk7XG4gIC8vIEhhbmRsZSBhYm5vcm1hbCBjbG9zZXMsIGUuZy4gXCJkZWxldGUgZGF0YWJhc2VcIiBpbiBjaHJvbWUgZGV2IHRvb2xzLlxuICAvLyBObyBuZWVkIGZvciByZW1vdmVFdmVudExpc3RlbmVyLCBiZWNhdXNlIG9uY2UgdGhlIERCIGNhbiBubyBsb25nZXJcbiAgLy8gZmlyZSBcImNsb3NlXCIgZXZlbnRzLCBpdCB3aWxsIGF1dG8tR0MuXG4gIC8vIFVuZm9ydHVuYXRlbHkgY2Fubm90IHRlc3QgaW4gZmFrZUluZGV4ZWREQjogaHR0cHM6Ly9naXRodWIuY29tL2R1bWJtYXR0ZXIvZmFrZUluZGV4ZWREQi9pc3N1ZXMvNTBcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZGIub25jbG9zZSA9ICgpID0+IGNsb3NlRGF0YWJhc2UoZGJOYW1lKTtcbiAgcmV0dXJuIGRiXG59XG5cbmZ1bmN0aW9uIG9wZW5EYXRhYmFzZSAoZGJOYW1lKSB7XG4gIGlmICghZGF0YWJhc2VDYWNoZVtkYk5hbWVdKSB7XG4gICAgZGF0YWJhc2VDYWNoZVtkYk5hbWVdID0gY3JlYXRlRGF0YWJhc2UoZGJOYW1lKTtcbiAgfVxuICByZXR1cm4gZGF0YWJhc2VDYWNoZVtkYk5hbWVdXG59XG5cbmZ1bmN0aW9uIGRiUHJvbWlzZSAoZGIsIHN0b3JlTmFtZSwgcmVhZE9ubHlPclJlYWRXcml0ZSwgY2IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBVc2UgcmVsYXhlZCBkdXJhYmlsaXR5IGJlY2F1c2UgbmVpdGhlciB0aGUgZW1vamkgZGF0YSBub3IgdGhlIGZhdm9yaXRlcy9wcmVmZXJyZWQgc2tpbiB0b25lXG4gICAgLy8gYXJlIHJlYWxseSBpcnJlcGxhY2VhYmxlIGRhdGEuIEluZGV4ZWREQiBpcyBqdXN0IGEgY2FjaGUgaW4gdGhpcyBjYXNlLlxuICAgIGNvbnN0IHR4biA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgcmVhZE9ubHlPclJlYWRXcml0ZSwgeyBkdXJhYmlsaXR5OiAncmVsYXhlZCcgfSk7XG4gICAgY29uc3Qgc3RvcmUgPSB0eXBlb2Ygc3RvcmVOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgPyB0eG4ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKVxuICAgICAgOiBzdG9yZU5hbWUubWFwKG5hbWUgPT4gdHhuLm9iamVjdFN0b3JlKG5hbWUpKTtcbiAgICBsZXQgcmVzO1xuICAgIGNiKHN0b3JlLCB0eG4sIChyZXN1bHQpID0+IHtcbiAgICAgIHJlcyA9IHJlc3VsdDtcbiAgICB9KTtcblxuICAgIHR4bi5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZShyZXMpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdHhuLm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHhuLmVycm9yKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2xvc2VEYXRhYmFzZSAoZGJOYW1lKSB7XG4gIC8vIGNsb3NlIGFueSBvcGVuIHJlcXVlc3RzXG4gIGNvbnN0IHJlcSA9IG9wZW5JbmRleGVkREJSZXF1ZXN0c1tkYk5hbWVdO1xuICBjb25zdCBkYiA9IHJlcSAmJiByZXEucmVzdWx0O1xuICBpZiAoZGIpIHtcbiAgICBkYi5jbG9zZSgpO1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlbGV0ZSBvcGVuSW5kZXhlZERCUmVxdWVzdHNbZGJOYW1lXTtcbiAgZGVsZXRlIGRhdGFiYXNlQ2FjaGVbZGJOYW1lXTtcbiAgZGVsZXRlIG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRGF0YWJhc2UgKGRiTmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIGNsb3NlIGFueSBvcGVuIHJlcXVlc3RzXG4gICAgY2xvc2VEYXRhYmFzZShkYk5hbWUpO1xuICAgIGNvbnN0IHJlcSA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShkYk5hbWUpO1xuICAgIGhhbmRsZU9wZW5PckRlbGV0ZVJlcShyZXNvbHZlLCByZWplY3QsIHJlcSk7XG4gIH0pXG59XG5cbi8vIFRoZSBcImNsb3NlXCIgZXZlbnQgb2NjdXJzIGR1cmluZyBhbiBhYm5vcm1hbCBzaHV0ZG93biwgZS5nLiBhIHVzZXIgY2xlYXJpbmcgdGhlaXIgYnJvd3NlciBkYXRhLlxuLy8gSG93ZXZlciwgaXQgZG9lc24ndCBvY2N1ciB3aXRoIHRoZSBub3JtYWwgXCJjbG9zZVwiIGV2ZW50LCBzbyB3ZSBoYW5kbGUgdGhhdCBzZXBhcmF0ZWx5LlxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0luZGV4ZWREQi8jY2xvc2UtYS1kYXRhYmFzZS1jb25uZWN0aW9uXG5mdW5jdGlvbiBhZGRPbkNsb3NlTGlzdGVuZXIgKGRiTmFtZSwgbGlzdGVuZXIpIHtcbiAgbGV0IGxpc3RlbmVycyA9IG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXTtcbiAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICBsaXN0ZW5lcnMgPSBvbkNsb3NlTGlzdGVuZXJzW2RiTmFtZV0gPSBbXTtcbiAgfVxuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59XG5cbi8vIGxpc3Qgb2YgZW1vdGljb25zIHRoYXQgZG9uJ3QgbWF0Y2ggYSBzaW1wbGUgXFxXKyByZWdleFxuLy8gZXh0cmFjdGVkIHVzaW5nOlxuLy8gcmVxdWlyZSgnZW1vamktcGlja2VyLWVsZW1lbnQtZGF0YS9lbi9lbW9qaWJhc2UvZGF0YS5qc29uJykubWFwKF8gPT4gXy5lbW90aWNvbikuZmlsdGVyKEJvb2xlYW4pLmZpbHRlcihfID0+ICEvXlxcVyskLy50ZXN0KF8pKVxuY29uc3QgaXJyZWd1bGFyRW1vdGljb25zID0gbmV3IFNldChbXG4gICc6RCcsICdYRCcsIFwiOidEXCIsICdPOiknLFxuICAnOlgnLCAnOlAnLCAnO1AnLCAnWFAnLFxuICAnOkwnLCAnOlonLCAnOmonLCAnOEQnLFxuICAnWE8nLCAnOCknLCAnOkInLCAnOk8nLFxuICAnOlMnLCBcIjonb1wiLCAnRHgnLCAnWCgnLFxuICAnRDonLCAnOkMnLCAnPjApJywgJzozJyxcbiAgJzwvMycsICc8MycsICdcXFxcTS8nLCAnOkUnLFxuICAnOCMnXG5dKTtcblxuZnVuY3Rpb24gZXh0cmFjdFRva2VucyAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAuc3BsaXQoL1tcXHNfXSsvKVxuICAgIC5tYXAod29yZCA9PiB7XG4gICAgICBpZiAoIXdvcmQubWF0Y2goL1xcdy8pIHx8IGlycmVndWxhckVtb3RpY29ucy5oYXMod29yZCkpIHtcbiAgICAgICAgLy8gZm9yIHB1cmUgZW1vdGljb25zIGxpa2UgOikgb3IgOi0pLCBqdXN0IGxlYXZlIHRoZW0gYXMtaXNcbiAgICAgICAgcmV0dXJuIHdvcmQudG9Mb3dlckNhc2UoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gd29yZFxuICAgICAgICAucmVwbGFjZSgvWykoOixdL2csICcnKVxuICAgICAgICAucmVwbGFjZSgv4oCZL2csIFwiJ1wiKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgIH0pLmZpbHRlcihCb29sZWFuKVxufVxuXG5jb25zdCBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIID0gMjtcblxuLy8gVGhpcyBpcyBhbiBleHRyYSBzdGVwIGluIGFkZGl0aW9uIHRvIGV4dHJhY3RUb2tlbnMoKS4gVGhlIGRpZmZlcmVuY2UgaGVyZSBpcyB0aGF0IHdlIGV4cGVjdFxuLy8gdGhlIGlucHV0IHRvIGhhdmUgYWxyZWFkeSBiZWVuIHJ1biB0aHJvdWdoIGV4dHJhY3RUb2tlbnMoKS4gVGhpcyBpcyB1c2VmdWwgZm9yIGNhc2VzIGxpa2Vcbi8vIGVtb3RpY29ucywgd2hlcmUgd2UgZG9uJ3Qgd2FudCB0byBkbyBhbnkgdG9rZW5pemF0aW9uIChiZWNhdXNlIGl0IG1ha2VzIG5vIHNlbnNlIHRvIHNwbGl0IHVwXG4vLyBcIj46KVwiIGJ5IHRoZSBjb2xvbikgYnV0IHdlIGRvIHdhbnQgdG8gbG93ZXJjYXNlIGl0IHRvIGhhdmUgY29uc2lzdGVudCBzZWFyY2ggcmVzdWx0cywgc28gdGhhdFxuLy8gdGhlIHVzZXIgY2FuIHR5cGUgJzpQJyBvciAnOnAnIGFuZCBzdGlsbCBnZXQgdGhlIHNhbWUgcmVzdWx0LlxuZnVuY3Rpb24gbm9ybWFsaXplVG9rZW5zIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKF8gPT4gXy50b0xvd2VyQ2FzZSgpKVxuICAgIC5maWx0ZXIoXyA9PiBfLmxlbmd0aCA+PSBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIKVxufVxuXG4vLyBUcmFuc2Zvcm0gZW1vamkgZGF0YSBmb3Igc3RvcmFnZSBpbiBJREJcbmZ1bmN0aW9uIHRyYW5zZm9ybUVtb2ppRGF0YSAoZW1vamlEYXRhKSB7XG4gIGNvbnN0IHJlcyA9IGVtb2ppRGF0YS5tYXAoKHsgYW5ub3RhdGlvbiwgZW1vdGljb24sIGdyb3VwLCBvcmRlciwgc2hvcnRjb2Rlcywgc2tpbnMsIHRhZ3MsIGVtb2ppLCB2ZXJzaW9uIH0pID0+IHtcbiAgICBjb25zdCB0b2tlbnMgPSBbLi4ubmV3IFNldChcbiAgICAgIG5vcm1hbGl6ZVRva2VucyhbXG4gICAgICAgIC4uLihzaG9ydGNvZGVzIHx8IFtdKS5tYXAoZXh0cmFjdFRva2VucykuZmxhdCgpLFxuICAgICAgICAuLi50YWdzLm1hcChleHRyYWN0VG9rZW5zKS5mbGF0KCksXG4gICAgICAgIC4uLmV4dHJhY3RUb2tlbnMoYW5ub3RhdGlvbiksXG4gICAgICAgIGVtb3RpY29uXG4gICAgICBdKVxuICAgICldLnNvcnQoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICBhbm5vdGF0aW9uLFxuICAgICAgZ3JvdXAsXG4gICAgICBvcmRlcixcbiAgICAgIHRhZ3MsXG4gICAgICB0b2tlbnMsXG4gICAgICB1bmljb2RlOiBlbW9qaSxcbiAgICAgIHZlcnNpb25cbiAgICB9O1xuICAgIGlmIChlbW90aWNvbikge1xuICAgICAgcmVzLmVtb3RpY29uID0gZW1vdGljb247XG4gICAgfVxuICAgIGlmIChzaG9ydGNvZGVzKSB7XG4gICAgICByZXMuc2hvcnRjb2RlcyA9IHNob3J0Y29kZXM7XG4gICAgfVxuICAgIGlmIChza2lucykge1xuICAgICAgcmVzLnNraW5Ub25lcyA9IFtdO1xuICAgICAgcmVzLnNraW5Vbmljb2RlcyA9IFtdO1xuICAgICAgcmVzLnNraW5WZXJzaW9ucyA9IFtdO1xuICAgICAgZm9yIChjb25zdCB7IHRvbmUsIGVtb2ppLCB2ZXJzaW9uIH0gb2Ygc2tpbnMpIHtcbiAgICAgICAgcmVzLnNraW5Ub25lcy5wdXNoKHRvbmUpO1xuICAgICAgICByZXMuc2tpblVuaWNvZGVzLnB1c2goZW1vamkpO1xuICAgICAgICByZXMuc2tpblZlcnNpb25zLnB1c2godmVyc2lvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfSk7XG4gIHJldHVybiByZXNcbn1cblxuLy8gaGVscGVyIGZ1bmN0aW9ucyB0aGF0IGhlbHAgY29tcHJlc3MgdGhlIGNvZGUgYmV0dGVyXG5cbmZ1bmN0aW9uIGNhbGxTdG9yZSAoc3RvcmUsIG1ldGhvZCwga2V5LCBjYikge1xuICBzdG9yZVttZXRob2RdKGtleSkub25zdWNjZXNzID0gZSA9PiAoY2IgJiYgY2IoZS50YXJnZXQucmVzdWx0KSk7XG59XG5cbmZ1bmN0aW9uIGdldElEQiAoc3RvcmUsIGtleSwgY2IpIHtcbiAgY2FsbFN0b3JlKHN0b3JlLCAnZ2V0Jywga2V5LCBjYik7XG59XG5cbmZ1bmN0aW9uIGdldEFsbElEQiAoc3RvcmUsIGtleSwgY2IpIHtcbiAgY2FsbFN0b3JlKHN0b3JlLCAnZ2V0QWxsJywga2V5LCBjYik7XG59XG5cbmZ1bmN0aW9uIGNvbW1pdCAodHhuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eG4uY29tbWl0KSB7XG4gICAgdHhuLmNvbW1pdCgpO1xuICB9XG59XG5cbi8vIGxpa2UgbG9kYXNoJ3MgbWluQnlcbmZ1bmN0aW9uIG1pbkJ5IChhcnJheSwgZnVuYykge1xuICBsZXQgbWluSXRlbSA9IGFycmF5WzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2ldO1xuICAgIGlmIChmdW5jKG1pbkl0ZW0pID4gZnVuYyhpdGVtKSkge1xuICAgICAgbWluSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW5JdGVtXG59XG5cbi8vIHJldHVybiBhbiBhcnJheSBvZiByZXN1bHRzIHJlcHJlc2VudGluZyBhbGwgaXRlbXMgdGhhdCBhcmUgZm91bmQgaW4gZWFjaCBvbmUgb2YgdGhlIGFycmF5c1xuLy9cblxuZnVuY3Rpb24gZmluZENvbW1vbk1lbWJlcnMgKGFycmF5cywgdW5pcUJ5RnVuYykge1xuICBjb25zdCBzaG9ydGVzdEFycmF5ID0gbWluQnkoYXJyYXlzLCBfID0+IF8ubGVuZ3RoKTtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hvcnRlc3RBcnJheSkge1xuICAgIC8vIGlmIHRoaXMgaXRlbSBpcyBpbmNsdWRlZCBpbiBldmVyeSBhcnJheSBpbiB0aGUgaW50ZXJtZWRpYXRlIHJlc3VsdHMsIGFkZCBpdCB0byB0aGUgZmluYWwgcmVzdWx0c1xuICAgIGlmICghYXJyYXlzLnNvbWUoYXJyYXkgPT4gYXJyYXkuZmluZEluZGV4KF8gPT4gdW5pcUJ5RnVuYyhfKSA9PT0gdW5pcUJ5RnVuYyhpdGVtKSkgPT09IC0xKSkge1xuICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0c1xufVxuXG5hc3luYyBmdW5jdGlvbiBpc0VtcHR5IChkYikge1xuICByZXR1cm4gIShhd2FpdCBnZXQoZGIsIFNUT1JFX0tFWVZBTFVFLCBLRVlfVVJMKSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFzRGF0YSAoZGIsIHVybCwgZVRhZykge1xuICBjb25zdCBbb2xkRVRhZywgb2xkVXJsXSA9IGF3YWl0IFByb21pc2UuYWxsKFtLRVlfRVRBRywgS0VZX1VSTF1cbiAgICAubWFwKGtleSA9PiBnZXQoZGIsIFNUT1JFX0tFWVZBTFVFLCBrZXkpKSk7XG4gIHJldHVybiAob2xkRVRhZyA9PT0gZVRhZyAmJiBvbGRVcmwgPT09IHVybClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZG9GdWxsRGF0YWJhc2VTY2FuRm9yU2luZ2xlUmVzdWx0IChkYiwgcHJlZGljYXRlKSB7XG4gIC8vIFRoaXMgYmF0Y2hpbmcgYWxnb3JpdGhtIGlzIGp1c3QgYSBwZXJmIGltcHJvdmVtZW50IG92ZXIgYSBiYXNpY1xuICAvLyBjdXJzb3IuIFRoZSBCQVRDSF9TSVpFIGlzIGFuIGVzdGltYXRlIG9mIHdoYXQgd291bGQgZ2l2ZSB0aGUgYmVzdFxuICAvLyBwZXJmIGZvciBkb2luZyBhIGZ1bGwgREIgc2NhbiAod29yc3QgY2FzZSkuXG4gIC8vXG4gIC8vIE1pbmktYmVuY2htYXJrIGZvciBkZXRlcm1pbmluZyB0aGUgYmVzdCBiYXRjaCBzaXplOlxuICAvL1xuICAvLyBQRVJGPTEgeWFybiBidWlsZDpyb2xsdXAgJiYgeWFybiB0ZXN0OmFkaG9jXG4gIC8vXG4gIC8vIChhc3luYyAoKSA9PiB7XG4gIC8vICAgcGVyZm9ybWFuY2UubWFyaygnc3RhcnQnKVxuICAvLyAgIGF3YWl0ICQoJ2Vtb2ppLXBpY2tlcicpLmRhdGFiYXNlLmdldEVtb2ppQnlTaG9ydGNvZGUoJ2RvZXNub3RleGlzdCcpXG4gIC8vICAgcGVyZm9ybWFuY2UubWVhc3VyZSgndG90YWwnLCAnc3RhcnQnKVxuICAvLyAgIGNvbnNvbGUubG9nKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoJ3RvdGFsJykuc2xpY2UoLTEpWzBdLmR1cmF0aW9uKVxuICAvLyB9KSgpXG4gIGNvbnN0IEJBVENIX1NJWkUgPSA1MDsgLy8gVHlwaWNhbGx5IGFyb3VuZCAxNTBtcyBmb3IgNnggc2xvd2Rvd24gaW4gQ2hyb21lIGZvciBhYm92ZSBiZW5jaG1hcmtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRU1PSkksIE1PREVfUkVBRE9OTFksIChlbW9qaVN0b3JlLCB0eG4sIGNiKSA9PiB7XG4gICAgbGV0IGxhc3RLZXk7XG5cbiAgICBjb25zdCBwcm9jZXNzTmV4dEJhdGNoID0gKCkgPT4ge1xuICAgICAgZW1vamlTdG9yZS5nZXRBbGwobGFzdEtleSAmJiBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGxhc3RLZXksIHRydWUpLCBCQVRDSF9TSVpFKS5vbnN1Y2Nlc3MgPSBlID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgIGxhc3RLZXkgPSByZXN1bHQudW5pY29kZTtcbiAgICAgICAgICBpZiAocHJlZGljYXRlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYihyZXN1bHQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IEJBVENIX1NJWkUpIHtcbiAgICAgICAgICByZXR1cm4gY2IoKVxuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NOZXh0QmF0Y2goKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBwcm9jZXNzTmV4dEJhdGNoKCk7XG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhIChkYiwgZW1vamlEYXRhLCB1cmwsIGVUYWcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2Zvcm1lZERhdGEgPSB0cmFuc2Zvcm1FbW9qaURhdGEoZW1vamlEYXRhKTtcbiAgICBhd2FpdCBkYlByb21pc2UoZGIsIFtTVE9SRV9FTU9KSSwgU1RPUkVfS0VZVkFMVUVdLCBNT0RFX1JFQURXUklURSwgKFtlbW9qaVN0b3JlLCBtZXRhU3RvcmVdLCB0eG4pID0+IHtcbiAgICAgIGxldCBvbGRFVGFnO1xuICAgICAgbGV0IG9sZFVybDtcbiAgICAgIGxldCB0b2RvID0gMDtcblxuICAgICAgZnVuY3Rpb24gY2hlY2tGZXRjaGVkICgpIHtcbiAgICAgICAgaWYgKCsrdG9kbyA9PT0gMikgeyAvLyAyIHJlcXVlc3RzIG1hZGVcbiAgICAgICAgICBvbkZldGNoZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbkZldGNoZWQgKCkge1xuICAgICAgICBpZiAob2xkRVRhZyA9PT0gZVRhZyAmJiBvbGRVcmwgPT09IHVybCkge1xuICAgICAgICAgIC8vIGNoZWNrIGFnYWluIHdpdGhpbiB0aGUgdHJhbnNhY3Rpb24gdG8gZ3VhcmQgYWdhaW5zdCBjb25jdXJyZW5jeSwgZS5nLiBtdWx0aXBsZSBicm93c2VyIHRhYnNcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBkZWxldGUgb2xkIGRhdGFcbiAgICAgICAgZW1vamlTdG9yZS5jbGVhcigpO1xuICAgICAgICAvLyBpbnNlcnQgbmV3IGRhdGFcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zZm9ybWVkRGF0YSkge1xuICAgICAgICAgIGVtb2ppU3RvcmUucHV0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIG1ldGFTdG9yZS5wdXQoZVRhZywgS0VZX0VUQUcpO1xuICAgICAgICBtZXRhU3RvcmUucHV0KHVybCwgS0VZX1VSTCk7XG4gICAgICAgIGNvbW1pdCh0eG4pO1xuICAgICAgfVxuXG4gICAgICBnZXRJREIobWV0YVN0b3JlLCBLRVlfRVRBRywgcmVzdWx0ID0+IHtcbiAgICAgICAgb2xkRVRhZyA9IHJlc3VsdDtcbiAgICAgICAgY2hlY2tGZXRjaGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgZ2V0SURCKG1ldGFTdG9yZSwgS0VZX1VSTCwgcmVzdWx0ID0+IHtcbiAgICAgICAgb2xkVXJsID0gcmVzdWx0O1xuICAgICAgICBjaGVja0ZldGNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppQnlHcm91cCAoZGIsIGdyb3VwKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4ge1xuICAgIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoW2dyb3VwLCAwXSwgW2dyb3VwICsgMSwgMF0sIGZhbHNlLCB0cnVlKTtcbiAgICBnZXRBbGxJREIoZW1vamlTdG9yZS5pbmRleChJTkRFWF9HUk9VUF9BTkRfT1JERVIpLCByYW5nZSwgY2IpO1xuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5U2VhcmNoUXVlcnkgKGRiLCBxdWVyeSkge1xuICBjb25zdCB0b2tlbnMgPSBub3JtYWxpemVUb2tlbnMoZXh0cmFjdFRva2VucyhxdWVyeSkpO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRU1PSkksIE1PREVfUkVBRE9OTFksIChlbW9qaVN0b3JlLCB0eG4sIGNiKSA9PiB7XG4gICAgLy8gZ2V0IGFsbCByZXN1bHRzIHRoYXQgY29udGFpbiBhbGwgdG9rZW5zIChpLmUuIGFuIEFORCBxdWVyeSlcbiAgICBjb25zdCBpbnRlcm1lZGlhdGVSZXN1bHRzID0gW107XG5cbiAgICBjb25zdCBjaGVja0RvbmUgPSAoKSA9PiB7XG4gICAgICBpZiAoaW50ZXJtZWRpYXRlUmVzdWx0cy5sZW5ndGggPT09IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgb25Eb25lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRG9uZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBmaW5kQ29tbW9uTWVtYmVycyhpbnRlcm1lZGlhdGVSZXN1bHRzLCBfID0+IF8udW5pY29kZSk7XG4gICAgICBjYihyZXN1bHRzLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAxKSk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIGNvbnN0IHJhbmdlID0gaSA9PT0gdG9rZW5zLmxlbmd0aCAtIDFcbiAgICAgICAgPyBJREJLZXlSYW5nZS5ib3VuZCh0b2tlbiwgdG9rZW4gKyAnXFx1ZmZmZicsIGZhbHNlLCB0cnVlKSAvLyB0cmVhdCBsYXN0IHRva2VuIGFzIGEgcHJlZml4IHNlYXJjaFxuICAgICAgICA6IElEQktleVJhbmdlLm9ubHkodG9rZW4pOyAvLyB0cmVhdCBhbGwgb3RoZXIgdG9rZW5zIGFzIGFuIGV4YWN0IG1hdGNoXG4gICAgICBnZXRBbGxJREIoZW1vamlTdG9yZS5pbmRleChJTkRFWF9UT0tFTlMpLCByYW5nZSwgcmVzdWx0ID0+IHtcbiAgICAgICAgaW50ZXJtZWRpYXRlUmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KVxufVxuXG4vLyBUaGlzIGNvdWxkIGhhdmUgYmVlbiBpbXBsZW1lbnRlZCBhcyBhbiBJREIgaW5kZXggb24gc2hvcnRjb2RlcywgYnV0IGl0IHNlZW1lZCB3YXN0ZWZ1bCB0byBkbyB0aGF0XG4vLyB3aGVuIHdlIGNhbiBhbHJlYWR5IHF1ZXJ5IGJ5IHRva2VucyBhbmQgdGhpcyB3aWxsIGdpdmUgdXMgd2hhdCB3ZSdyZSBsb29raW5nIGZvciA5OS45JSBvZiB0aGUgdGltZVxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeVNob3J0Y29kZSAoZGIsIHNob3J0Y29kZSkge1xuICBjb25zdCBlbW9qaXMgPSBhd2FpdCBnZXRFbW9qaUJ5U2VhcmNoUXVlcnkoZGIsIHNob3J0Y29kZSk7XG5cbiAgLy8gSW4gdmVyeSByYXJlIGNhc2VzIChlLmcuIHRoZSBzaG9ydGNvZGUgXCJ2XCIgYXMgaW4gXCJ2IGZvciB2aWN0b3J5XCIpLCB3ZSBjYW5ub3Qgc2VhcmNoIGJlY2F1c2VcbiAgLy8gdGhlcmUgYXJlIG5vIHVzYWJsZSB0b2tlbnMgKHRvbyBzaG9ydCBpbiB0aGlzIGNhc2UpLiBJbiB0aGF0IGNhc2UsIHdlIGhhdmUgdG8gZG8gYW4gaW5lZmZpY2llbnRcbiAgLy8gZnVsbC1kYXRhYmFzZSBzY2FuLCB3aGljaCBJIGJlbGlldmUgaXMgYW4gYWNjZXB0YWJsZSB0cmFkZW9mZiBmb3Igbm90IGhhdmluZyB0byBoYXZlIGFuIGV4dHJhXG4gIC8vIGluZGV4IG9uIHNob3J0Y29kZXMuXG5cbiAgaWYgKCFlbW9qaXMubGVuZ3RoKSB7XG4gICAgY29uc3QgcHJlZGljYXRlID0gXyA9PiAoKF8uc2hvcnRjb2RlcyB8fCBbXSkuaW5jbHVkZXMoc2hvcnRjb2RlLnRvTG93ZXJDYXNlKCkpKTtcbiAgICByZXR1cm4gKGF3YWl0IGRvRnVsbERhdGFiYXNlU2NhbkZvclNpbmdsZVJlc3VsdChkYiwgcHJlZGljYXRlKSkgfHwgbnVsbFxuICB9XG5cbiAgcmV0dXJuIGVtb2ppcy5maWx0ZXIoXyA9PiB7XG4gICAgY29uc3QgbG93ZXJTaG9ydGNvZGVzID0gKF8uc2hvcnRjb2RlcyB8fCBbXSkubWFwKF8gPT4gXy50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gbG93ZXJTaG9ydGNvZGVzLmluY2x1ZGVzKHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpKVxuICB9KVswXSB8fCBudWxsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppQnlVbmljb2RlIChkYiwgdW5pY29kZSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IChcbiAgICBnZXRJREIoZW1vamlTdG9yZSwgdW5pY29kZSwgcmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNiKHJlc3VsdClcbiAgICAgIH1cbiAgICAgIGdldElEQihlbW9qaVN0b3JlLmluZGV4KElOREVYX1NLSU5fVU5JQ09ERSksIHVuaWNvZGUsIHJlc3VsdCA9PiBjYihyZXN1bHQgfHwgbnVsbCkpO1xuICAgIH0pXG4gICkpXG59XG5cbmZ1bmN0aW9uIGdldCAoZGIsIHN0b3JlTmFtZSwga2V5KSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIHN0b3JlTmFtZSwgTU9ERV9SRUFET05MWSwgKHN0b3JlLCB0eG4sIGNiKSA9PiAoXG4gICAgZ2V0SURCKHN0b3JlLCBrZXksIGNiKVxuICApKVxufVxuXG5mdW5jdGlvbiBzZXQgKGRiLCBzdG9yZU5hbWUsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgc3RvcmVOYW1lLCBNT0RFX1JFQURXUklURSwgKHN0b3JlLCB0eG4pID0+IHtcbiAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgY29tbWl0KHR4bik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudEZhdm9yaXRlRW1vamlDb3VudCAoZGIsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRkFWT1JJVEVTLCBNT0RFX1JFQURXUklURSwgKHN0b3JlLCB0eG4pID0+IChcbiAgICBnZXRJREIoc3RvcmUsIHVuaWNvZGUsIHJlc3VsdCA9PiB7XG4gICAgICBzdG9yZS5wdXQoKHJlc3VsdCB8fCAwKSArIDEsIHVuaWNvZGUpO1xuICAgICAgY29tbWl0KHR4bik7XG4gICAgfSlcbiAgKSlcbn1cblxuZnVuY3Rpb24gZ2V0VG9wRmF2b3JpdGVFbW9qaSAoZGIsIGN1c3RvbUVtb2ppSW5kZXgsIGxpbWl0KSB7XG4gIGlmIChsaW1pdCA9PT0gMCkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHJldHVybiBkYlByb21pc2UoZGIsIFtTVE9SRV9GQVZPUklURVMsIFNUT1JFX0VNT0pJXSwgTU9ERV9SRUFET05MWSwgKFtmYXZvcml0ZXNTdG9yZSwgZW1vamlTdG9yZV0sIHR4biwgY2IpID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgZmF2b3JpdGVzU3RvcmUuaW5kZXgoSU5ERVhfQ09VTlQpLm9wZW5DdXJzb3IodW5kZWZpbmVkLCAncHJldicpLm9uc3VjY2VzcyA9IGUgPT4ge1xuICAgICAgY29uc3QgY3Vyc29yID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKCFjdXJzb3IpIHsgLy8gbm8gbW9yZSByZXN1bHRzXG4gICAgICAgIHJldHVybiBjYihyZXN1bHRzKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRSZXN1bHQgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSBsaW1pdCkge1xuICAgICAgICAgIHJldHVybiBjYihyZXN1bHRzKSAvLyBkb25lLCByZWFjaGVkIHRoZSBsaW1pdFxuICAgICAgICB9XG4gICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1bmljb2RlT3JOYW1lID0gY3Vyc29yLnByaW1hcnlLZXk7XG4gICAgICBjb25zdCBjdXN0b20gPSBjdXN0b21FbW9qaUluZGV4LmJ5TmFtZSh1bmljb2RlT3JOYW1lKTtcbiAgICAgIGlmIChjdXN0b20pIHtcbiAgICAgICAgcmV0dXJuIGFkZFJlc3VsdChjdXN0b20pXG4gICAgICB9XG4gICAgICAvLyBUaGlzIGNvdWxkIGJlIGRvbmUgaW4gcGFyYWxsZWwgKGkuZS4gbWFrZSB0aGUgY3Vyc29yIGFuZCB0aGUgZ2V0KClzIHBhcmFsbGVsaXplZCksXG4gICAgICAvLyBidXQgbXkgdGVzdGluZyBzdWdnZXN0cyBpdCdzIG5vdCBhY3R1YWxseSBmYXN0ZXIuXG4gICAgICBnZXRJREIoZW1vamlTdG9yZSwgdW5pY29kZU9yTmFtZSwgZW1vamkgPT4ge1xuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICByZXR1cm4gYWRkUmVzdWx0KGVtb2ppKVxuICAgICAgICB9XG4gICAgICAgIC8vIGVtb2ppIG5vdCBmb3VuZCBzb21laG93LCBpZ25vcmUgKG1heSBoYXBwZW4gaWYgY3VzdG9tIGVtb2ppIGNoYW5nZSlcbiAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KVxufVxuXG4vLyB0cmllIGRhdGEgc3RydWN0dXJlIGZvciBwcmVmaXggc2VhcmNoZXNcbi8vIGxvb3NlbHkgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL3N1YnN0cmluZy10cmllXG5cbmNvbnN0IENPREFfTUFSS0VSID0gJyc7IC8vIG1hcmtzIHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xuXG5mdW5jdGlvbiB0cmllIChhcnIsIGl0ZW1Ub1Rva2Vucykge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBpdGVtVG9Ub2tlbnMoaXRlbSk7XG4gICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgIGxldCBjdXJyZW50TWFwID0gbWFwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gdG9rZW4uY2hhckF0KGkpO1xuICAgICAgICBsZXQgbmV4dE1hcCA9IGN1cnJlbnRNYXAuZ2V0KGNoYXIpO1xuICAgICAgICBpZiAoIW5leHRNYXApIHtcbiAgICAgICAgICBuZXh0TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgIGN1cnJlbnRNYXAuc2V0KGNoYXIsIG5leHRNYXApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRNYXAgPSBuZXh0TWFwO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlc0F0Q29kYSA9IGN1cnJlbnRNYXAuZ2V0KENPREFfTUFSS0VSKTtcbiAgICAgIGlmICghdmFsdWVzQXRDb2RhKSB7XG4gICAgICAgIHZhbHVlc0F0Q29kYSA9IFtdO1xuICAgICAgICBjdXJyZW50TWFwLnNldChDT0RBX01BUktFUiwgdmFsdWVzQXRDb2RhKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlc0F0Q29kYS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlYXJjaCA9IChxdWVyeSwgZXhhY3QpID0+IHtcbiAgICBsZXQgY3VycmVudE1hcCA9IG1hcDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gcXVlcnkuY2hhckF0KGkpO1xuICAgICAgY29uc3QgbmV4dE1hcCA9IGN1cnJlbnRNYXAuZ2V0KGNoYXIpO1xuICAgICAgaWYgKG5leHRNYXApIHtcbiAgICAgICAgY3VycmVudE1hcCA9IG5leHRNYXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXhhY3QpIHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBjdXJyZW50TWFwLmdldChDT0RBX01BUktFUik7XG4gICAgICByZXR1cm4gcmVzdWx0cyB8fCBbXVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAvLyB0cmF2ZXJzZVxuICAgIGNvbnN0IHF1ZXVlID0gW2N1cnJlbnRNYXBdO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRNYXAgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc3QgZW50cmllc1NvcnRlZEJ5S2V5ID0gWy4uLmN1cnJlbnRNYXAuZW50cmllcygpXS5zb3J0KChhLCBiKSA9PiBhWzBdIDwgYlswXSA/IC0xIDogMSk7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzU29ydGVkQnlLZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gQ09EQV9NQVJLRVIpIHsgLy8gQ09EQV9NQVJLRVIgYWx3YXlzIGNvbWVzIGZpcnN0OyBpdCdzIHRoZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICByZXN1bHRzLnB1c2goLi4udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXVlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzXG4gIH07XG5cbiAgcmV0dXJuIHNlYXJjaFxufVxuXG5jb25zdCByZXF1aXJlZEtleXMkMSA9IFtcbiAgJ25hbWUnLFxuICAndXJsJ1xuXTtcblxuZnVuY3Rpb24gYXNzZXJ0Q3VzdG9tRW1vamlzIChjdXN0b21FbW9qaXMpIHtcbiAgY29uc3QgaXNBcnJheSA9IGN1c3RvbUVtb2ppcyAmJiBBcnJheS5pc0FycmF5KGN1c3RvbUVtb2ppcyk7XG4gIGNvbnN0IGZpcnN0SXRlbUlzRmF1bHR5ID0gaXNBcnJheSAmJlxuICAgIGN1c3RvbUVtb2ppcy5sZW5ndGggJiZcbiAgICAoIWN1c3RvbUVtb2ppc1swXSB8fCByZXF1aXJlZEtleXMkMS5zb21lKGtleSA9PiAhKGtleSBpbiBjdXN0b21FbW9qaXNbMF0pKSk7XG4gIGlmICghaXNBcnJheSB8fCBmaXJzdEl0ZW1Jc0ZhdWx0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGVtb2ppcyBhcmUgaW4gdGhlIHdyb25nIGZvcm1hdCcpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRW1vamlJbmRleCAoY3VzdG9tRW1vamlzKSB7XG4gIGFzc2VydEN1c3RvbUVtb2ppcyhjdXN0b21FbW9qaXMpO1xuXG4gIGNvbnN0IHNvcnRCeU5hbWUgPSAoYSwgYikgPT4gYS5uYW1lLnRvTG93ZXJDYXNlKCkgPCBiLm5hbWUudG9Mb3dlckNhc2UoKSA/IC0xIDogMTtcblxuICAvL1xuICAvLyBhbGwoKVxuICAvL1xuICBjb25zdCBhbGwgPSBjdXN0b21FbW9qaXMuc29ydChzb3J0QnlOYW1lKTtcblxuICAvL1xuICAvLyBzZWFyY2goKVxuICAvL1xuICBjb25zdCBlbW9qaVRvVG9rZW5zID0gZW1vamkgPT4gKFxuICAgIFsuLi5uZXcgU2V0KChlbW9qaS5zaG9ydGNvZGVzIHx8IFtdKS5tYXAoc2hvcnRjb2RlID0+IGV4dHJhY3RUb2tlbnMoc2hvcnRjb2RlKSkuZmxhdCgpKV1cbiAgKTtcbiAgY29uc3Qgc2VhcmNoVHJpZSA9IHRyaWUoY3VzdG9tRW1vamlzLCBlbW9qaVRvVG9rZW5zKTtcbiAgY29uc3Qgc2VhcmNoQnlFeGFjdE1hdGNoID0gXyA9PiBzZWFyY2hUcmllKF8sIHRydWUpO1xuICBjb25zdCBzZWFyY2hCeVByZWZpeCA9IF8gPT4gc2VhcmNoVHJpZShfLCBmYWxzZSk7XG5cbiAgLy8gU2VhcmNoIGJ5IHF1ZXJ5IGZvciBjdXN0b20gZW1vamkuIFNpbWlsYXIgdG8gaG93IHdlIGRvIHRoaXMgaW4gSURCLCB0aGUgbGFzdCB0b2tlblxuICAvLyBpcyB0cmVhdGVkIGFzIGEgcHJlZml4IHNlYXJjaCwgYnV0IGV2ZXJ5IG90aGVyIG9uZSBpcyB0cmVhdGVkIGFzIGFuIGV4YWN0IG1hdGNoLlxuICAvLyBUaGVuIHdlIEFORCB0aGUgcmVzdWx0cyB0b2dldGhlclxuICBjb25zdCBzZWFyY2ggPSBxdWVyeSA9PiB7XG4gICAgY29uc3QgdG9rZW5zID0gZXh0cmFjdFRva2VucyhxdWVyeSk7XG4gICAgY29uc3QgaW50ZXJtZWRpYXRlUmVzdWx0cyA9IHRva2Vucy5tYXAoKHRva2VuLCBpKSA9PiAoXG4gICAgICAoaSA8IHRva2Vucy5sZW5ndGggLSAxID8gc2VhcmNoQnlFeGFjdE1hdGNoIDogc2VhcmNoQnlQcmVmaXgpKHRva2VuKVxuICAgICkpO1xuICAgIHJldHVybiBmaW5kQ29tbW9uTWVtYmVycyhpbnRlcm1lZGlhdGVSZXN1bHRzLCBfID0+IF8ubmFtZSkuc29ydChzb3J0QnlOYW1lKVxuICB9O1xuXG4gIC8vXG4gIC8vIGJ5U2hvcnRjb2RlLCBieU5hbWVcbiAgLy9cbiAgY29uc3Qgc2hvcnRjb2RlVG9FbW9qaSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbmFtZVRvRW1vamkgPSBuZXcgTWFwKCk7XG4gIGZvciAoY29uc3QgY3VzdG9tRW1vamkgb2YgY3VzdG9tRW1vamlzKSB7XG4gICAgbmFtZVRvRW1vamkuc2V0KGN1c3RvbUVtb2ppLm5hbWUudG9Mb3dlckNhc2UoKSwgY3VzdG9tRW1vamkpO1xuICAgIGZvciAoY29uc3Qgc2hvcnRjb2RlIG9mIChjdXN0b21FbW9qaS5zaG9ydGNvZGVzIHx8IFtdKSkge1xuICAgICAgc2hvcnRjb2RlVG9FbW9qaS5zZXQoc2hvcnRjb2RlLnRvTG93ZXJDYXNlKCksIGN1c3RvbUVtb2ppKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBieVNob3J0Y29kZSA9IHNob3J0Y29kZSA9PiBzaG9ydGNvZGVUb0Vtb2ppLmdldChzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSk7XG4gIGNvbnN0IGJ5TmFtZSA9IG5hbWUgPT4gbmFtZVRvRW1vamkuZ2V0KG5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGwsXG4gICAgc2VhcmNoLFxuICAgIGJ5U2hvcnRjb2RlLFxuICAgIGJ5TmFtZVxuICB9XG59XG5cbmNvbnN0IGlzRmlyZWZveENvbnRlbnRTY3JpcHQgPSB0eXBlb2Ygd3JhcHBlZEpTT2JqZWN0ICE9PSAndW5kZWZpbmVkJztcblxuLy8gcmVtb3ZlIHNvbWUgaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlscywgaS5lLiB0aGUgXCJ0b2tlbnNcIiBhcnJheSBvbiB0aGUgZW1vamkgb2JqZWN0XG4vLyBlc3NlbnRpYWxseSwgY29udmVydCB0aGUgZW1vamkgZnJvbSB0aGUgdmVyc2lvbiBzdG9yZWQgaW4gSURCIHRvIHRoZSB2ZXJzaW9uIHVzZWQgaW4tbWVtb3J5XG5mdW5jdGlvbiBjbGVhbkVtb2ppIChlbW9qaSkge1xuICBpZiAoIWVtb2ppKSB7XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cbiAgLy8gaWYgaW5zaWRlIGEgRmlyZWZveCBjb250ZW50IHNjcmlwdCwgbmVlZCB0byBjbG9uZSB0aGUgZW1vamkgb2JqZWN0IHRvIHByZXZlbnQgRmlyZWZveCBmcm9tIGNvbXBsYWluaW5nIGFib3V0XG4gIC8vIGNyb3NzLW9yaWdpbiBvYmplY3QuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL2Vtb2ppLXBpY2tlci1lbGVtZW50L2lzc3Vlcy8zNTZcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0ZpcmVmb3hDb250ZW50U2NyaXB0KSB7XG4gICAgZW1vamkgPSBzdHJ1Y3R1cmVkQ2xvbmUoZW1vamkpO1xuICB9XG4gIGRlbGV0ZSBlbW9qaS50b2tlbnM7XG4gIGlmIChlbW9qaS5za2luVG9uZXMpIHtcbiAgICBjb25zdCBsZW4gPSBlbW9qaS5za2luVG9uZXMubGVuZ3RoO1xuICAgIGVtb2ppLnNraW5zID0gQXJyYXkobGVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBlbW9qaS5za2luc1tpXSA9IHtcbiAgICAgICAgdG9uZTogZW1vamkuc2tpblRvbmVzW2ldLFxuICAgICAgICB1bmljb2RlOiBlbW9qaS5za2luVW5pY29kZXNbaV0sXG4gICAgICAgIHZlcnNpb246IGVtb2ppLnNraW5WZXJzaW9uc1tpXVxuICAgICAgfTtcbiAgICB9XG4gICAgZGVsZXRlIGVtb2ppLnNraW5Ub25lcztcbiAgICBkZWxldGUgZW1vamkuc2tpblVuaWNvZGVzO1xuICAgIGRlbGV0ZSBlbW9qaS5za2luVmVyc2lvbnM7XG4gIH1cbiAgcmV0dXJuIGVtb2ppXG59XG5cbmZ1bmN0aW9uIHdhcm5FVGFnIChlVGFnKSB7XG4gIGlmICghZVRhZykge1xuICAgIGNvbnNvbGUud2FybignZW1vamktcGlja2VyLWVsZW1lbnQgaXMgbW9yZSBlZmZpY2llbnQgaWYgdGhlIGRhdGFTb3VyY2Ugc2VydmVyIGV4cG9zZXMgYW4gRVRhZyBoZWFkZXIuJyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWlyZWRLZXlzID0gW1xuICAnYW5ub3RhdGlvbicsXG4gICdlbW9qaScsXG4gICdncm91cCcsXG4gICdvcmRlcicsXG4gICd0YWdzJyxcbiAgJ3ZlcnNpb24nXG5dO1xuXG5mdW5jdGlvbiBhc3NlcnRFbW9qaURhdGEgKGVtb2ppRGF0YSkge1xuICBpZiAoIWVtb2ppRGF0YSB8fFxuICAgICFBcnJheS5pc0FycmF5KGVtb2ppRGF0YSkgfHxcbiAgICAhZW1vamlEYXRhWzBdIHx8XG4gICAgKHR5cGVvZiBlbW9qaURhdGFbMF0gIT09ICdvYmplY3QnKSB8fFxuICAgIHJlcXVpcmVkS2V5cy5zb21lKGtleSA9PiAoIShrZXkgaW4gZW1vamlEYXRhWzBdKSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbW9qaSBkYXRhIGlzIGluIHRoZSB3cm9uZyBmb3JtYXQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFN0YXR1cyAocmVzcG9uc2UsIGRhdGFTb3VyY2UpIHtcbiAgaWYgKE1hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAhPT0gMikge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoOiAnICsgZGF0YVNvdXJjZSArICc6ICAnICsgcmVzcG9uc2Uuc3RhdHVzKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVUYWcgKGRhdGFTb3VyY2UpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhU291cmNlLCB7IG1ldGhvZDogJ0hFQUQnIH0pO1xuICBhc3NlcnRTdGF0dXMocmVzcG9uc2UsIGRhdGFTb3VyY2UpO1xuICBjb25zdCBlVGFnID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2V0YWcnKTtcbiAgd2FybkVUYWcoZVRhZyk7XG4gIHJldHVybiBlVGFnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVUYWdBbmREYXRhIChkYXRhU291cmNlKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVNvdXJjZSk7XG4gIGFzc2VydFN0YXR1cyhyZXNwb25zZSwgZGF0YVNvdXJjZSk7XG4gIGNvbnN0IGVUYWcgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnZXRhZycpO1xuICB3YXJuRVRhZyhlVGFnKTtcbiAgY29uc3QgZW1vamlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhc3NlcnRFbW9qaURhdGEoZW1vamlEYXRhKTtcbiAgcmV0dXJuIFtlVGFnLCBlbW9qaURhdGFdXG59XG5cbi8vIFRPRE86IGluY2x1ZGluZyB0aGVzZSBpbiBibG9iLXV0aWwudHMgY2F1c2VzIHR5cGVkb2MgdG8gZ2VuZXJhdGUgZG9jcyBmb3IgdGhlbSxcbi8vIGV2ZW4gd2l0aCAtLWV4Y2x1ZGVQcml2YXRlIMKvXFxfKOODhClfL8KvXG4vKiogQHByaXZhdGUgKi9cbi8qKlxuICogQ29udmVydCBhbiBgQXJyYXlCdWZmZXJgIHRvIGEgYmluYXJ5IHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgbXlTdHJpbmcgPSBibG9iVXRpbC5hcnJheUJ1ZmZlclRvQmluYXJ5U3RyaW5nKGFycmF5QnVmZilcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBidWZmZXIgLSBhcnJheSBidWZmZXJcbiAqIEByZXR1cm5zIGJpbmFyeSBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhidWZmZXIpIHtcbiAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgbGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcbiAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYmluYXJ5O1xufVxuLyoqXG4gKiBDb252ZXJ0IGEgYmluYXJ5IHN0cmluZyB0byBhbiBgQXJyYXlCdWZmZXJgLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgbXlCdWZmZXIgPSBibG9iVXRpbC5iaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGJpbmFyeVN0cmluZylcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBiaW5hcnkgLSBiaW5hcnkgc3RyaW5nXG4gKiBAcmV0dXJucyBhcnJheSBidWZmZXJcbiAqL1xuZnVuY3Rpb24gYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcihiaW5hcnkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYmluYXJ5Lmxlbmd0aDtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XG4gICAgICAgIGFycltpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuXG4vLyBnZW5lcmF0ZSBhIGNoZWNrc3VtIGJhc2VkIG9uIHRoZSBzdHJpbmdpZmllZCBKU09OXG5hc3luYyBmdW5jdGlvbiBqc29uQ2hlY2tzdW0gKG9iamVjdCkge1xuICBjb25zdCBpblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XG4gIGNvbnN0IGluQnVmZmVyID0gYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcihpblN0cmluZyk7XG4gIC8vIHRoaXMgZG9lcyBub3QgbmVlZCB0byBiZSBjcnlwdG9ncmFwaGljYWxseSBzZWN1cmUsIFNIQS0xIGlzIGZpbmVcbiAgY29uc3Qgb3V0QnVmZmVyID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0xJywgaW5CdWZmZXIpO1xuICBjb25zdCBvdXRCaW5TdHJpbmcgPSBhcnJheUJ1ZmZlclRvQmluYXJ5U3RyaW5nKG91dEJ1ZmZlcik7XG4gIGNvbnN0IHJlcyA9IGJ0b2Eob3V0QmluU3RyaW5nKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMgKGRiLCBkYXRhU291cmNlKSB7XG4gIC8vIGp1c3QgZG8gYSBzaW1wbGUgSEVBRCByZXF1ZXN0IGZpcnN0IHRvIHNlZSBpZiB0aGUgZVRhZ3MgbWF0Y2hcbiAgbGV0IGVtb2ppRGF0YTtcbiAgbGV0IGVUYWcgPSBhd2FpdCBnZXRFVGFnKGRhdGFTb3VyY2UpO1xuICBpZiAoIWVUYWcpIHsgLy8gd29yayBhcm91bmQgbGFjayBvZiBFVGFnL0FjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzXG4gICAgY29uc3QgZVRhZ0FuZERhdGEgPSBhd2FpdCBnZXRFVGFnQW5kRGF0YShkYXRhU291cmNlKTtcbiAgICBlVGFnID0gZVRhZ0FuZERhdGFbMF07XG4gICAgZW1vamlEYXRhID0gZVRhZ0FuZERhdGFbMV07XG4gICAgaWYgKCFlVGFnKSB7XG4gICAgICBlVGFnID0gYXdhaXQganNvbkNoZWNrc3VtKGVtb2ppRGF0YSk7XG4gICAgfVxuICB9XG4gIGlmIChhd2FpdCBoYXNEYXRhKGRiLCBkYXRhU291cmNlLCBlVGFnKSkgOyBlbHNlIHtcbiAgICBpZiAoIWVtb2ppRGF0YSkge1xuICAgICAgY29uc3QgZVRhZ0FuZERhdGEgPSBhd2FpdCBnZXRFVGFnQW5kRGF0YShkYXRhU291cmNlKTtcbiAgICAgIGVtb2ppRGF0YSA9IGVUYWdBbmREYXRhWzFdO1xuICAgIH1cbiAgICBhd2FpdCBsb2FkRGF0YShkYiwgZW1vamlEYXRhLCBkYXRhU291cmNlLCBlVGFnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YUZvckZpcnN0VGltZSAoZGIsIGRhdGFTb3VyY2UpIHtcbiAgbGV0IFtlVGFnLCBlbW9qaURhdGFdID0gYXdhaXQgZ2V0RVRhZ0FuZERhdGEoZGF0YVNvdXJjZSk7XG4gIGlmICghZVRhZykge1xuICAgIC8vIEhhbmRsZSBsYWNrIG9mIHN1cHBvcnQgZm9yIEVUYWcgb3IgQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnNcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0hlYWRlcnMvQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMjQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG4gICAgZVRhZyA9IGF3YWl0IGpzb25DaGVja3N1bShlbW9qaURhdGEpO1xuICB9XG5cbiAgYXdhaXQgbG9hZERhdGEoZGIsIGVtb2ppRGF0YSwgZGF0YVNvdXJjZSwgZVRhZyk7XG59XG5cbmNsYXNzIERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IgKHsgZGF0YVNvdXJjZSA9IERFRkFVTFRfREFUQV9TT1VSQ0UsIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFLCBjdXN0b21FbW9qaSA9IFtdIH0gPSB7fSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5fZGJOYW1lID0gYGVtb2ppLXBpY2tlci1lbGVtZW50LSR7dGhpcy5sb2NhbGV9YDtcbiAgICB0aGlzLl9kYiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9sYXp5VXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbUVtb2ppSW5kZXgoY3VzdG9tRW1vamkpO1xuXG4gICAgdGhpcy5fY2xlYXIgPSB0aGlzLl9jbGVhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3JlYWR5ID0gdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgYXN5bmMgX2luaXQgKCkge1xuICAgIGNvbnN0IGRiID0gdGhpcy5fZGIgPSBhd2FpdCBvcGVuRGF0YWJhc2UodGhpcy5fZGJOYW1lKTtcblxuICAgIGFkZE9uQ2xvc2VMaXN0ZW5lcih0aGlzLl9kYk5hbWUsIHRoaXMuX2NsZWFyKTtcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlO1xuICAgIGNvbnN0IGVtcHR5ID0gYXdhaXQgaXNFbXB0eShkYik7XG5cbiAgICBpZiAoZW1wdHkpIHtcbiAgICAgIGF3YWl0IGxvYWREYXRhRm9yRmlyc3RUaW1lKGRiLCBkYXRhU291cmNlKTtcbiAgICB9IGVsc2UgeyAvLyBvZmZsaW5lLWZpcnN0IC0gZG8gYW4gdXBkYXRlIGFzeW5jaHJvbm91c2x5XG4gICAgICB0aGlzLl9sYXp5VXBkYXRlID0gY2hlY2tGb3JVcGRhdGVzKGRiLCBkYXRhU291cmNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZWFkeSAoKSB7XG4gICAgY29uc3QgY2hlY2tSZWFkeSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVhZHkpIHtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSB0aGlzLl9pbml0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZHlcbiAgICB9O1xuICAgIGF3YWl0IGNoZWNrUmVhZHkoKTtcbiAgICAvLyBUaGVyZSdzIGEgcG9zc2liaWxpdHkgb2YgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSB0aGUgZWxlbWVudCBnZXRzIGFkZGVkLCByZW1vdmVkLCBhbmQgdGhlbiBhZGRlZCBhZ2FpblxuICAgIC8vIHdpdGggYSBwYXJ0aWN1bGFyIHRpbWluZywgd2hpY2ggd291bGQgc2V0IHRoZSBfZGIgdG8gdW5kZWZpbmVkLlxuICAgIC8vIFdlICpjb3VsZCogZG8gYSB3aGlsZSBsb29wIGhlcmUsIGJ1dCB0aGF0IHNlZW1zIGV4Y2Vzc2l2ZSBhbmQgY291bGQgbGVhZCB0byBhbiBpbmZpbml0ZSBsb29wLlxuICAgIGlmICghdGhpcy5fZGIpIHtcbiAgICAgIGF3YWl0IGNoZWNrUmVhZHkoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRFbW9qaUJ5R3JvdXAgKGdyb3VwKSB7XG4gICAgYXNzZXJ0TnVtYmVyKGdyb3VwKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIHVuaXFFbW9qaShhd2FpdCBnZXRFbW9qaUJ5R3JvdXAodGhpcy5fZGIsIGdyb3VwKSkubWFwKGNsZWFuRW1vamkpXG4gIH1cblxuICBhc3luYyBnZXRFbW9qaUJ5U2VhcmNoUXVlcnkgKHF1ZXJ5KSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHlTdHJpbmcocXVlcnkpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICBjb25zdCBjdXN0b21zID0gdGhpcy5fY3VzdG9tLnNlYXJjaChxdWVyeSk7XG4gICAgY29uc3QgbmF0aXZlcyA9IHVuaXFFbW9qaShhd2FpdCBnZXRFbW9qaUJ5U2VhcmNoUXVlcnkodGhpcy5fZGIsIHF1ZXJ5KSkubWFwKGNsZWFuRW1vamkpO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5jdXN0b21zLFxuICAgICAgLi4ubmF0aXZlc1xuICAgIF1cbiAgfVxuXG4gIGFzeW5jIGdldEVtb2ppQnlTaG9ydGNvZGUgKHNob3J0Y29kZSkge1xuICAgIGFzc2VydE5vbkVtcHR5U3RyaW5nKHNob3J0Y29kZSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIGNvbnN0IGN1c3RvbSA9IHRoaXMuX2N1c3RvbS5ieVNob3J0Y29kZShzaG9ydGNvZGUpO1xuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIHJldHVybiBjdXN0b21cbiAgICB9XG4gICAgcmV0dXJuIGNsZWFuRW1vamkoYXdhaXQgZ2V0RW1vamlCeVNob3J0Y29kZSh0aGlzLl9kYiwgc2hvcnRjb2RlKSlcbiAgfVxuXG4gIGFzeW5jIGdldEVtb2ppQnlVbmljb2RlT3JOYW1lICh1bmljb2RlT3JOYW1lKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHlTdHJpbmcodW5pY29kZU9yTmFtZSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIGNvbnN0IGN1c3RvbSA9IHRoaXMuX2N1c3RvbS5ieU5hbWUodW5pY29kZU9yTmFtZSk7XG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgcmV0dXJuIGN1c3RvbVxuICAgIH1cbiAgICByZXR1cm4gY2xlYW5FbW9qaShhd2FpdCBnZXRFbW9qaUJ5VW5pY29kZSh0aGlzLl9kYiwgdW5pY29kZU9yTmFtZSkpXG4gIH1cblxuICBhc3luYyBnZXRQcmVmZXJyZWRTa2luVG9uZSAoKSB7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiAoYXdhaXQgZ2V0KHRoaXMuX2RiLCBTVE9SRV9LRVlWQUxVRSwgS0VZX1BSRUZFUlJFRF9TS0lOVE9ORSkpIHx8IDBcbiAgfVxuXG4gIGFzeW5jIHNldFByZWZlcnJlZFNraW5Ub25lIChza2luVG9uZSkge1xuICAgIGFzc2VydE51bWJlcihza2luVG9uZSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiBzZXQodGhpcy5fZGIsIFNUT1JFX0tFWVZBTFVFLCBLRVlfUFJFRkVSUkVEX1NLSU5UT05FLCBza2luVG9uZSlcbiAgfVxuXG4gIGFzeW5jIGluY3JlbWVudEZhdm9yaXRlRW1vamlDb3VudCAodW5pY29kZU9yTmFtZSkge1xuICAgIGFzc2VydE5vbkVtcHR5U3RyaW5nKHVuaWNvZGVPck5hbWUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50KHRoaXMuX2RiLCB1bmljb2RlT3JOYW1lKVxuICB9XG5cbiAgYXN5bmMgZ2V0VG9wRmF2b3JpdGVFbW9qaSAobGltaXQpIHtcbiAgICBhc3NlcnROdW1iZXIobGltaXQpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gKGF3YWl0IGdldFRvcEZhdm9yaXRlRW1vamkodGhpcy5fZGIsIHRoaXMuX2N1c3RvbSwgbGltaXQpKS5tYXAoY2xlYW5FbW9qaSlcbiAgfVxuXG4gIHNldCBjdXN0b21FbW9qaSAoY3VzdG9tRW1vamlzKSB7XG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tRW1vamlJbmRleChjdXN0b21FbW9qaXMpO1xuICB9XG5cbiAgZ2V0IGN1c3RvbUVtb2ppICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tLmFsbFxuICB9XG5cbiAgYXN5bmMgX3NodXRkb3duICgpIHtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7IC8vIHJlb3BlbiBpZiB3ZSd2ZSBhbHJlYWR5IGJlZW4gY2xvc2VkL2RlbGV0ZWRcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fbGF6eVVwZGF0ZTsgLy8gYWxsb3cgYW55IGxhenkgdXBkYXRlcyB0byBwcm9jZXNzIGJlZm9yZSBjbG9zaW5nL2RlbGV0aW5nXG4gICAgfSBjYXRjaCAoZXJyKSB7IC8qIGlnbm9yZSBuZXR3b3JrIGVycm9ycyAob2ZmbGluZS1maXJzdCkgKi8gfVxuICB9XG5cbiAgLy8gY2xlYXIgcmVmZXJlbmNlcyB0byBJREIsIGUuZy4gZHVyaW5nIGEgY2xvc2UgZXZlbnRcbiAgX2NsZWFyICgpIHtcbiAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGNhbGwgcmVtb3ZlRXZlbnRMaXN0ZW5lciBvciByZW1vdmUgdGhlIG1hbnVhbCBcImNsb3NlXCIgbGlzdGVuZXJzLlxuICAgIC8vIFRoZSBtZW1vcnkgbGVhayB0ZXN0cyBwcm92ZSB0aGlzIGlzIHVubmVjZXNzYXJ5LiBJdCdzIGJlY2F1c2U6XG4gICAgLy8gMSkgSURCRGF0YWJhc2VzIHRoYXQgY2FuIG5vIGxvbmdlciBmaXJlIFwiY2xvc2VcIiBhdXRvbWF0aWNhbGx5IGhhdmUgbGlzdGVuZXJzIEdDZWRcbiAgICAvLyAyKSB3ZSBjbGVhciB0aGUgbWFudWFsIGNsb3NlIGxpc3RlbmVycyBpbiBkYXRhYmFzZUxpZmVjeWNsZS5qcy5cbiAgICB0aGlzLl9kYiA9IHRoaXMuX3JlYWR5ID0gdGhpcy5fbGF6eVVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzeW5jIGNsb3NlICgpIHtcbiAgICBhd2FpdCB0aGlzLl9zaHV0ZG93bigpO1xuICAgIGF3YWl0IGNsb3NlRGF0YWJhc2UodGhpcy5fZGJOYW1lKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZSAoKSB7XG4gICAgYXdhaXQgdGhpcy5fc2h1dGRvd24oKTtcbiAgICBhd2FpdCBkZWxldGVEYXRhYmFzZSh0aGlzLl9kYk5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCB7IERhdGFiYXNlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBQaWNrZXIgZnJvbSAnLi9waWNrZXIuanMnXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSAnLi9kYXRhYmFzZS5qcydcbmV4cG9ydCB7IFBpY2tlciwgRGF0YWJhc2UgfVxuIiwiaW1wb3J0IERhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UuanMnO1xuXG4vLyB2aWEgaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlL2Vtb2ppYmFzZS1kYXRhQDYuMC4wL21ldGEvZ3JvdXBzLmpzb25cbmNvbnN0IGFsbEdyb3VwcyA9IFtcbiAgWy0xLCAn4pyoJywgJ2N1c3RvbSddLFxuICBbMCwgJ/CfmIAnLCAnc21pbGV5cy1lbW90aW9uJ10sXG4gIFsxLCAn8J+RiycsICdwZW9wbGUtYm9keSddLFxuICBbMywgJ/CfkLEnLCAnYW5pbWFscy1uYXR1cmUnXSxcbiAgWzQsICfwn42OJywgJ2Zvb2QtZHJpbmsnXSxcbiAgWzUsICfwn4+g77iPJywgJ3RyYXZlbC1wbGFjZXMnXSxcbiAgWzYsICfimr0nLCAnYWN0aXZpdGllcyddLFxuICBbNywgJ/Cfk50nLCAnb2JqZWN0cyddLFxuICBbOCwgJ+KblO+4jycsICdzeW1ib2xzJ10sXG4gIFs5LCAn8J+PgScsICdmbGFncyddXG5dLm1hcCgoW2lkLCBlbW9qaSwgbmFtZV0pID0+ICh7IGlkLCBlbW9qaSwgbmFtZSB9KSk7XG5cbmNvbnN0IGdyb3VwcyA9IGFsbEdyb3Vwcy5zbGljZSgxKTtcblxuY29uc3QgTUlOX1NFQVJDSF9URVhUX0xFTkdUSCA9IDI7XG5jb25zdCBOVU1fU0tJTl9UT05FUyA9IDY7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBySUMgPSB0eXBlb2YgcmVxdWVzdElkbGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHJlcXVlc3RJZGxlQ2FsbGJhY2sgOiBzZXRUaW1lb3V0O1xuXG4vLyBjaGVjayBmb3IgWldKICh6ZXJvIHdpZHRoIGpvaW5lcikgY2hhcmFjdGVyXG5mdW5jdGlvbiBoYXNad2ogKGVtb2ppKSB7XG4gIHJldHVybiBlbW9qaS51bmljb2RlLmluY2x1ZGVzKCdcXHUyMDBkJylcbn1cblxuLy8gRmluZCBvbmUgZ29vZCByZXByZXNlbnRhdGl2ZSBlbW9qaSBmcm9tIGVhY2ggdmVyc2lvbiB0byB0ZXN0IGJ5IGNoZWNraW5nIGl0cyBjb2xvci5cbi8vIElkZWFsbHkgaXQgc2hvdWxkIGhhdmUgY29sb3IgaW4gdGhlIGNlbnRlci4gRm9yIHNvbWUgaW5zcGlyYXRpb24sIHNlZTpcbi8vIGh0dHBzOi8vYWJvdXQuZ2l0bGFiLmNvbS9ibG9nLzIwMTgvMDUvMzAvam91cm5leS1pbi1uYXRpdmUtdW5pY29kZS1lbW9qaS9cbi8vXG4vLyBOb3RlIHRoYXQgZm9yIGNlcnRhaW4gdmVyc2lvbnMgKDEyLjEsIDEzLjEpLCB0aGVyZSBpcyBubyBwb2ludCBpbiB0ZXN0aW5nIHRoZW0gZXhwbGljaXRseSwgYmVjYXVzZVxuLy8gYWxsIHRoZSBlbW9qaSBmcm9tIHRoaXMgdmVyc2lvbiBhcmUgY29tcG91bmQtZW1vamkgZnJvbSBwcmV2aW91cyB2ZXJzaW9ucy4gU28gdGhleSB3b3VsZCBwYXNzIGEgY29sb3Jcbi8vIHRlc3QsIGV2ZW4gaW4gYnJvd3NlcnMgdGhhdCBkaXNwbGF5IHRoZW0gYXMgZG91YmxlIGVtb2ppLiAoRS5nLiBcImZhY2UgaW4gY2xvdWRzXCIgbWlnaHQgcmVuZGVyIGFzXG4vLyBcImZhY2Ugd2l0aG91dCBtb3V0aFwiIHBsdXMgXCJmb2dcIi4pIFRoZXNlIGVtb2ppIGNhbiBvbmx5IGJlIGZpbHRlcmVkIHVzaW5nIHRoZSB3aWR0aCB0ZXN0LFxuLy8gd2hpY2ggaGFwcGVucyBpbiBjaGVja1p3alN1cHBvcnQuanMuXG5jb25zdCB2ZXJzaW9uc0FuZFRlc3RFbW9qaSA9IHtcbiAgJ/Cfq6gnOiAxNS4xLCAvLyBzaGFraW5nIGhlYWQsIHRlY2huaWNhbGx5IGZyb20gdjE1IGJ1dCBzZWUgbm90ZSBhYm92ZVxuICAn8J+roCc6IDE0LFxuICAn8J+lsic6IDEzLjEsIC8vIHNtaWxpbmcgZmFjZSB3aXRoIHRlYXIsIHRlY2huaWNhbGx5IGZyb20gdjEzIGJ1dCBzZWUgbm90ZSBhYm92ZVxuICAn8J+luyc6IDEyLjEsIC8vIHNhcmksIHRlY2huaWNhbGx5IGZyb20gdjEyIGJ1dCBzZWUgbm90ZSBhYm92ZVxuICAn8J+lsCc6IDExLFxuICAn8J+kqSc6IDUsXG4gICfwn5Gx4oCN4pmA77iPJzogNCxcbiAgJ/CfpKMnOiAzLFxuICAn8J+Rge+4j+KAjfCfl6jvuI8nOiAyLFxuICAn8J+YgCc6IDEsXG4gICfwn5iQ77iPJzogMC43LFxuICAn8J+Ygyc6IDAuNlxufTtcblxuY29uc3QgVElNRU9VVF9CRUZPUkVfTE9BRElOR19NRVNTQUdFID0gMTAwMDsgLy8gMSBzZWNvbmRcbmNvbnN0IERFRkFVTFRfU0tJTl9UT05FX0VNT0pJID0gJ/CflpDvuI8nO1xuY29uc3QgREVGQVVMVF9OVU1fQ09MVU1OUyA9IDg7XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZml2ZXRoaXJ0eWVpZ2h0LmNvbS9mZWF0dXJlcy90aGUtMTAwLW1vc3QtdXNlZC1lbW9qaXMvIGFuZFxuLy8gaHR0cHM6Ly9ibG9nLmVtb2ppcGVkaWEub3JnL2ZhY2Vib29rLXJldmVhbHMtbW9zdC1hbmQtbGVhc3QtdXNlZC1lbW9qaXMvIHdpdGhcbi8vIGEgYml0IG9mIG15IG93biBjdXJhdGlvbi4gKEUuZy4gYXZvaWQgdGhlIFwiT0tcIiBnZXN0dXJlIGJlY2F1c2Ugb2YgY29ubm90YXRpb25zOlxuLy8gaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9vay1oYW5kLylcbmNvbnN0IE1PU1RfQ09NTU9OTFlfVVNFRF9FTU9KSSA9IFtcbiAgJ/CfmIonLFxuICAn8J+YkicsXG4gICfinaTvuI8nLFxuICAn8J+Rje+4jycsXG4gICfwn5iNJyxcbiAgJ/CfmIInLFxuICAn8J+YrScsXG4gICfimLrvuI8nLFxuICAn8J+YlCcsXG4gICfwn5ipJyxcbiAgJ/CfmI8nLFxuICAn8J+SlScsXG4gICfwn5mMJyxcbiAgJ/CfmJgnXG5dO1xuXG4vLyBJdCdzIGltcG9ydGFudCB0byBsaXN0IFR3ZW1vamkgTW96aWxsYSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlLCBiZWNhdXNlIE1vemlsbGEgYnVuZGxlcyB0aGVpclxuLy8gb3duIGZvbnQgb24gc29tZSBwbGF0Zm9ybXMgKG5vdGFibHkgV2luZG93cyBhbmQgTGludXggYXMgb2YgdGhpcyB3cml0aW5nKS4gVHlwaWNhbGx5LCBNb3ppbGxhXG4vLyB1cGRhdGVzIGZhc3RlciB0aGFuIHRoZSB1bmRlcmx5aW5nIE9TLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgb2xkZXIgZW1vamkgaW4gb25lIGZvbnQgYW5kXG4vLyBuZXdlciBlbW9qaSBpbiBhbm90aGVyIGZvbnQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vZW1vamktcGlja2VyLWVsZW1lbnQvcHVsbC8yNjgjaXNzdWVjb21tZW50LTEwNzMzNDcyODNcbmNvbnN0IEZPTlRfRkFNSUxZID0gJ1wiVHdlbW9qaSBNb3ppbGxhXCIsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLCcgK1xuICAnXCJOb3RvIENvbG9yIEVtb2ppXCIsXCJFbW9qaU9uZSBDb2xvclwiLFwiQW5kcm9pZCBFbW9qaVwiLHNhbnMtc2VyaWYnO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgREVGQVVMVF9DQVRFR09SWV9TT1JUSU5HID0gKGEsIGIpID0+IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xuXG4vLyBUZXN0IGlmIGFuIGVtb2ppIGlzIHN1cHBvcnRlZCBieSByZW5kZXJpbmcgaXQgdG8gY2FudmFzIGFuZCBjaGVja2luZyB0aGF0IHRoZSBjb2xvciBpcyBub3QgYmxhY2tcbi8vIFNlZSBodHRwczovL2Fib3V0LmdpdGxhYi5jb20vYmxvZy8yMDE4LzA1LzMwL2pvdXJuZXktaW4tbmF0aXZlLXVuaWNvZGUtZW1vamkvXG4vLyBhbmQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaWYtZW1vamkgZm9yIGluc3BpcmF0aW9uXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGxhcmdlbHkgYm9ycm93ZWQgZnJvbSBpZi1lbW9qaSwgYWRkaW5nIHRoZSBmb250LWZhbWlseVxuXG5cbmNvbnN0IGdldFRleHRGZWF0dXJlID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gMTtcblxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICBjdHguZm9udCA9IGAxMDBweCAke0ZPTlRfRkFNSUxZfWA7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LnNjYWxlKDAuMDEsIDAuMDEpO1xuICBjdHguZmlsbFRleHQodGV4dCwgMCwgMCk7XG5cbiAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YVxufTtcblxuY29uc3QgY29tcGFyZUZlYXR1cmVzID0gKGZlYXR1cmUxLCBmZWF0dXJlMikgPT4ge1xuICBjb25zdCBmZWF0dXJlMVN0ciA9IFsuLi5mZWF0dXJlMV0uam9pbignLCcpO1xuICBjb25zdCBmZWF0dXJlMlN0ciA9IFsuLi5mZWF0dXJlMl0uam9pbignLCcpO1xuICAvLyBUaGlzIGlzIFJHQkEsIHNvIGZvciAwLDAsMCwgd2UgYXJlIGNoZWNraW5nIHRoYXQgdGhlIGZpcnN0IFJHQiBpcyBub3QgYWxsIHplcm9lcy5cbiAgLy8gTW9zdCBvZiB0aGUgdGltZSB3aGVuIHVuc3VwcG9ydGVkIHRoaXMgaXMgMCwwLDAsMCwgYnV0IG9uIENocm9tZSBvbiBNYWMgaXQgaXNcbiAgLy8gMCwwLDAsNjEgLSB0aGVyZSBpcyBhIHRyYW5zcGFyZW5jeSBoZXJlLlxuICByZXR1cm4gZmVhdHVyZTFTdHIgPT09IGZlYXR1cmUyU3RyICYmICFmZWF0dXJlMVN0ci5zdGFydHNXaXRoKCcwLDAsMCwnKVxufTtcblxuZnVuY3Rpb24gdGVzdENvbG9yRW1vamlTdXBwb3J0ZWQgKHRleHQpIHtcbiAgLy8gUmVuZGVyIHdoaXRlIGFuZCBibGFjayBhbmQgdGhlbiBjb21wYXJlIHRoZW0gdG8gZWFjaCBvdGhlciBhbmQgZW5zdXJlIHRoZXkncmUgdGhlIHNhbWVcbiAgLy8gY29sb3IsIGFuZCBuZWl0aGVyIG9uZSBpcyBibGFjay4gVGhpcyBzaG93cyB0aGF0IHRoZSBlbW9qaSB3YXMgcmVuZGVyZWQgaW4gY29sb3IuXG4gIGNvbnN0IGZlYXR1cmUxID0gZ2V0VGV4dEZlYXR1cmUodGV4dCwgJyMwMDAnKTtcbiAgY29uc3QgZmVhdHVyZTIgPSBnZXRUZXh0RmVhdHVyZSh0ZXh0LCAnI2ZmZicpO1xuICByZXR1cm4gZmVhdHVyZTEgJiYgZmVhdHVyZTIgJiYgY29tcGFyZUZlYXR1cmVzKGZlYXR1cmUxLCBmZWF0dXJlMilcbn1cblxuLy8gcmF0aGVyIHRoYW4gY2hlY2sgZXZlcnkgZW1vamkgZXZlciwgd2hpY2ggd291bGQgYmUgZXhwZW5zaXZlLCBqdXN0IGNoZWNrIHNvbWUgcmVwcmVzZW50YXRpdmVzIGZyb20gdGhlXG4vLyBkaWZmZXJlbnQgZW1vamkgcmVsZWFzZXMgdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGZvbnQgc3VwcG9ydHNcblxuZnVuY3Rpb24gZGV0ZXJtaW5lRW1vamlTdXBwb3J0TGV2ZWwgKCkge1xuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXModmVyc2lvbnNBbmRUZXN0RW1vamkpO1xuICB0cnkge1xuICAgIC8vIHN0YXJ0IHdpdGggbGF0ZXN0IGVtb2ppIGFuZCB3b3JrIGJhY2t3YXJkc1xuICAgIGZvciAoY29uc3QgW2Vtb2ppLCB2ZXJzaW9uXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAodGVzdENvbG9yRW1vamlTdXBwb3J0ZWQoZW1vamkpKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IC8vIGNhbnZhcyBlcnJvclxuICB9IGZpbmFsbHkge1xuICB9XG4gIC8vIEluIGNhc2Ugb2YgYW4gZXJyb3IsIGJlIGdlbmVyb3VzIGFuZCBqdXN0IGFzc3VtZSBhbGwgZW1vamkgYXJlIHN1cHBvcnRlZCAoZS5nLiBmb3IgY2FudmFzIGVycm9yc1xuICAvLyBkdWUgdG8gYW50aS1maW5nZXJwcmludGluZyBhZGQtb25zKS4gQmV0dGVyIHRvIHNob3cgc29tZSBncmF5IGJveGVzIHRoYW4gbm90aGluZyBhdCBhbGwuXG4gIHJldHVybiBlbnRyaWVzWzBdWzFdIC8vIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCBpcyB0aGUgbW9zdCByZWNlbnQgdmVyc2lvblxufVxuXG4vLyBDaGVjayB3aGljaCBlbW9qaXMgd2Uga25vdyBmb3Igc3VyZSBhcmVuJ3Qgc3VwcG9ydGVkLCBiYXNlZCBvbiBVbmljb2RlIHZlcnNpb24gbGV2ZWxcbmxldCBwcm9taXNlO1xuY29uc3QgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwgPSAoKSA9PiB7XG4gIGlmICghcHJvbWlzZSkge1xuICAgIC8vIERlbGF5IHNvIGl0IGNhbiBydW4gd2hpbGUgdGhlIElEQiBkYXRhYmFzZSBpcyBiZWluZyBjcmVhdGVkIGJ5IHRoZSBicm93c2VyIChvbiBhbm90aGVyIHRocmVhZCkuXG4gICAgLy8gVGhpcyBoZWxwcyBlc3BlY2lhbGx5IHdpdGggZmlyc3QgbG9hZCDigJMgd2Ugd2FudCB0byBzdGFydCBwcmUtcG9wdWxhdGluZyB0aGUgZGF0YWJhc2Ugb24gdGhlIG1haW4gdGhyZWFkLFxuICAgIC8vIGFuZCB0aGVuIHdhaXQgZm9yIElEQiB0byBjb21taXQgZXZlcnl0aGluZywgYW5kIHdoaWxlIHdhaXRpbmcgd2UgcnVuIHRoaXMgY2hlY2suXG4gICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gKFxuICAgICAgcklDKCgpID0+IChcbiAgICAgICAgcmVzb2x2ZShkZXRlcm1pbmVFbW9qaVN1cHBvcnRMZXZlbCgpKSAvLyBkZWxheSBzbyBpZGVhbGx5IHRoaXMgY2FuIHJ1biB3aGlsZSBJREIgaXMgZmlyc3QgcG9wdWxhdGluZ1xuICAgICAgKSlcbiAgICApKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZVxufTtcbi8vIGRldGVybWluZSB3aGljaCBlbW9qaXMgY29udGFpbmluZyBaV0ogKHplcm8gd2lkdGggam9pbmVyKSBjaGFyYWN0ZXJzXG4vLyBhcmUgc3VwcG9ydGVkIChyZW5kZXJlZCBhcyBvbmUgZ2x5cGgpIHJhdGhlciB0aGFuIHVuc3VwcG9ydGVkIChyZW5kZXJlZCBhcyB0d28gb3IgbW9yZSBnbHlwaHMpXG5jb25zdCBzdXBwb3J0ZWRad2pFbW9qaXMgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IFZBUklBVElPTl9TRUxFQ1RPUiA9ICdcXHVmZTBmJztcbmNvbnN0IFNLSU5UT05FX01PRElGSUVSID0gJ1xcdWQ4M2MnO1xuY29uc3QgWldKID0gJ1xcdTIwMGQnO1xuY29uc3QgTElHSFRfU0tJTl9UT05FID0gMHgxRjNGQjtcbmNvbnN0IExJR0hUX1NLSU5fVE9ORV9NT0RJRklFUiA9IDB4ZGZmYjtcblxuLy8gVE9ETzogdGhpcyBpcyBhIG5haXZlIGltcGxlbWVudGF0aW9uLCB3ZSBjYW4gaW1wcm92ZSBpdCBsYXRlclxuLy8gSXQncyBvbmx5IHVzZWQgZm9yIHRoZSBza2ludG9uZSBwaWNrZXIsIHNvIGFzIGxvbmcgYXMgcGVvcGxlIGRvbid0IGN1c3RvbWl6ZSB3aXRoXG4vLyByZWFsbHkgZXhvdGljIGVtb2ppIHRoZW4gaXQgc2hvdWxkIHdvcmsgZmluZVxuZnVuY3Rpb24gYXBwbHlTa2luVG9uZSAoc3RyLCBza2luVG9uZSkge1xuICBpZiAoc2tpblRvbmUgPT09IDApIHtcbiAgICByZXR1cm4gc3RyXG4gIH1cbiAgY29uc3QgendqSW5kZXggPSBzdHIuaW5kZXhPZihaV0opO1xuICBpZiAoendqSW5kZXggIT09IC0xKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgendqSW5kZXgpICtcbiAgICAgIFN0cmluZy5mcm9tQ29kZVBvaW50KExJR0hUX1NLSU5fVE9ORSArIHNraW5Ub25lIC0gMSkgK1xuICAgICAgc3RyLnN1YnN0cmluZyh6d2pJbmRleClcbiAgfVxuICBpZiAoc3RyLmVuZHNXaXRoKFZBUklBVElPTl9TRUxFQ1RPUikpIHtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgfVxuICByZXR1cm4gc3RyICsgU0tJTlRPTkVfTU9ESUZJRVIgKyBTdHJpbmcuZnJvbUNvZGVQb2ludChMSUdIVF9TS0lOX1RPTkVfTU9ESUZJRVIgKyBza2luVG9uZSAtIDEpXG59XG5cbmZ1bmN0aW9uIGhhbHQgKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBsZWZ0L3JpZ2h0IG9yIHVwL2Rvd24gbmF2aWdhdGlvbiwgY2lyY2xpbmcgYmFjayB3aGVuIHlvdVxuLy8gcmVhY2ggdGhlIHN0YXJ0L2VuZCBvZiB0aGUgbGlzdFxuZnVuY3Rpb24gaW5jcmVtZW50T3JEZWNyZW1lbnQgKGRlY3JlbWVudCwgdmFsLCBhcnIpIHtcbiAgdmFsICs9IChkZWNyZW1lbnQgPyAtMSA6IDEpO1xuICBpZiAodmFsIDwgMCkge1xuICAgIHZhbCA9IGFyci5sZW5ndGggLSAxO1xuICB9IGVsc2UgaWYgKHZhbCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgdmFsID0gMDtcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8vIGxpa2UgbG9kYXNoJ3MgdW5pcUJ5IGJ1dCBtdWNoIHNtYWxsZXJcbmZ1bmN0aW9uIHVuaXFCeSAoYXJyLCBmdW5jKSB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgY29uc3QgcmVzID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICBjb25zdCBrZXkgPSBmdW5jKGl0ZW0pO1xuICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBXZSBkb24ndCBuZWVkIGFsbCB0aGUgZGF0YSBvbiBldmVyeSBlbW9qaSwgYW5kIHRoZXJlIGFyZSBzcGVjaWZpYyB0aGluZ3Mgd2UgbmVlZFxuLy8gZm9yIHRoZSBVSSwgc28gYnVpbGQgYSBcInZpZXcgbW9kZWxcIiBmcm9tIHRoZSBlbW9qaSBvYmplY3Qgd2UgZ290IGZyb20gdGhlIGRhdGFiYXNlXG5cbmZ1bmN0aW9uIHN1bW1hcml6ZUVtb2ppc0ZvclVJIChlbW9qaXMsIGVtb2ppU3VwcG9ydExldmVsKSB7XG4gIGNvbnN0IHRvU2ltcGxlU2tpbnNNYXAgPSBza2lucyA9PiB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChjb25zdCBza2luIG9mIHNraW5zKSB7XG4gICAgICAvLyBpZ25vcmUgYXJyYXlzIGxpa2UgWzEsIDJdIHdpdGggbXVsdGlwbGUgc2tpbiB0b25lc1xuICAgICAgLy8gYWxzbyBpZ25vcmUgdmFyaWFudHMgdGhhdCBhcmUgaW4gYW4gdW5zdXBwb3J0ZWQgZW1vamkgdmVyc2lvblxuICAgICAgLy8gKHRoZXNlIGRvIGV4aXN0IC0gdmFyaWFudHMgZnJvbSBhIGRpZmZlcmVudCB2ZXJzaW9uIHRoYW4gdGhlaXIgYmFzZSBlbW9qaSlcbiAgICAgIGlmICh0eXBlb2Ygc2tpbi50b25lID09PSAnbnVtYmVyJyAmJiBza2luLnZlcnNpb24gPD0gZW1vamlTdXBwb3J0TGV2ZWwpIHtcbiAgICAgICAgcmVzW3NraW4udG9uZV0gPSBza2luLnVuaWNvZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICByZXR1cm4gZW1vamlzLm1hcCgoeyB1bmljb2RlLCBza2lucywgc2hvcnRjb2RlcywgdXJsLCBuYW1lLCBjYXRlZ29yeSwgYW5ub3RhdGlvbiB9KSA9PiAoe1xuICAgIHVuaWNvZGUsXG4gICAgbmFtZSxcbiAgICBzaG9ydGNvZGVzLFxuICAgIHVybCxcbiAgICBjYXRlZ29yeSxcbiAgICBhbm5vdGF0aW9uLFxuICAgIGlkOiB1bmljb2RlIHx8IG5hbWUsXG4gICAgc2tpbnM6IHNraW5zICYmIHRvU2ltcGxlU2tpbnNNYXAoc2tpbnMpXG4gIH0pKVxufVxuXG4vLyBpbXBvcnQgckFGIGZyb20gb25lIHBsYWNlIHNvIHRoYXQgdGhlIGJ1bmRsZSBzaXplIGlzIGEgYml0IHNtYWxsZXJcbmNvbnN0IHJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuLy8gU3ZlbHRlIGFjdGlvbiB0byBjYWxjdWxhdGUgdGhlIHdpZHRoIG9mIGFuIGVsZW1lbnQgYW5kIGF1dG8tdXBkYXRlXG4vLyB1c2luZyBSZXNpemVPYnNlcnZlci4gSWYgUmVzaXplT2JzZXJ2ZXIgaXMgdW5zdXBwb3J0ZWQsIHdlIGp1c3QgdXNlIHJBRiBvbmNlXG4vLyBhbmQgZG9uJ3QgYm90aGVyIHRvIHVwZGF0ZS5cblxuXG5sZXQgcmVzaXplT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVdpZHRoIChub2RlLCBhYm9ydFNpZ25hbCwgb25VcGRhdGUpIHtcbiAgbGV0IHJlc2l6ZU9ic2VydmVyO1xuICBpZiAocmVzaXplT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcbiAgICByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IChcbiAgICAgIG9uVXBkYXRlKGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgpXG4gICAgKSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgfSBlbHNlIHsgLy8ganVzdCBzZXQgdGhlIHdpZHRoIG9uY2UsIGRvbid0IGJvdGhlciB0cnlpbmcgdG8gdHJhY2sgaXRcbiAgICByQUYoKCkgPT4gKFxuICAgICAgb25VcGRhdGUobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aClcbiAgICApKTtcbiAgfVxuXG4gIC8vIGNsZWFudXAgZnVuY3Rpb24gKGNhbGxlZCBvbiBkZXN0cm95KVxuICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICBpZiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBnZXQgdGhlIHdpZHRoIG9mIHRoZSB0ZXh0IGluc2lkZSBvZiBhIERPTSBub2RlLCB2aWEgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU5NTI1ODkxLzY4MDc0MlxuZnVuY3Rpb24gY2FsY3VsYXRlVGV4dFdpZHRoIChub2RlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIHtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShub2RlLmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICB9XG59XG5cbmxldCBiYXNlbGluZUVtb2ppV2lkdGg7XG5cbmZ1bmN0aW9uIGNoZWNrWndqU3VwcG9ydCAoendqRW1vamlzVG9DaGVjaywgYmFzZWxpbmVFbW9qaSwgZW1vamlUb0RvbU5vZGUpIHtcbiAgZm9yIChjb25zdCBlbW9qaSBvZiB6d2pFbW9qaXNUb0NoZWNrKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IGVtb2ppVG9Eb21Ob2RlKGVtb2ppKTtcbiAgICBjb25zdCBlbW9qaVdpZHRoID0gY2FsY3VsYXRlVGV4dFdpZHRoKGRvbU5vZGUpO1xuICAgIGlmICh0eXBlb2YgYmFzZWxpbmVFbW9qaVdpZHRoID09PSAndW5kZWZpbmVkJykgeyAvLyBjYWxjdWxhdGUgdGhlIGJhc2VsaW5lIGVtb2ppIHdpZHRoIG9ubHkgb25jZVxuICAgICAgYmFzZWxpbmVFbW9qaVdpZHRoID0gY2FsY3VsYXRlVGV4dFdpZHRoKGJhc2VsaW5lRW1vamkpO1xuICAgIH1cbiAgICAvLyBPbiBXaW5kb3dzLCBzb21lIHN1cHBvcnRlZCBlbW9qaSBhcmUgfjUwJSBiaWdnZXIgdGhhbiB0aGUgYmFzZWxpbmUgZW1vamksIGJ1dCB3aGF0IHdlIHJlYWxseSB3YW50IHRvIGd1YXJkXG4gICAgLy8gYWdhaW5zdCBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgMnggdGhlIHNpemUsIGJlY2F1c2UgdGhvc2UgYXJlIHRydWx5IGJyb2tlbiAocGVyc29uIHdpdGggcmVkIGhhaXIgPSBwZXJzb24gd2l0aFxuICAgIC8vIGZsb2F0aW5nIHJlZCB3aWcsIGJsYWNrIGNhdCA9IGNhdCB3aXRoIGJsYWNrIHNxdWFyZSwgcG9sYXIgYmVhciA9IGJlYXIgd2l0aCBzbm93Zmxha2UsIGV0Yy4pXG4gICAgLy8gU28gaGVyZSB3ZSBzZXQgdGhlIHRocmVzaG9sZCBhdCAxLjggdGltZXMgdGhlIHNpemUgb2YgdGhlIGJhc2VsaW5lIGVtb2ppLlxuICAgIGNvbnN0IHN1cHBvcnRlZCA9IGVtb2ppV2lkdGggLyAxLjggPCBiYXNlbGluZUVtb2ppV2lkdGg7XG4gICAgc3VwcG9ydGVkWndqRW1vamlzLnNldChlbW9qaS51bmljb2RlLCBzdXBwb3J0ZWQpO1xuICB9XG59XG5cbi8vIGxpa2UgbG9kYXNoJ3MgdW5pcVxuXG5mdW5jdGlvbiB1bmlxIChhcnIpIHtcbiAgcmV0dXJuIHVuaXFCeShhcnIsIF8gPT4gXylcbn1cblxuLy8gTm90ZSB3ZSBwdXQgdGhpcyBpbiBpdHMgb3duIGZ1bmN0aW9uIG91dHNpZGUgUGlja2VyLmpzIHRvIGF2b2lkIFN2ZWx0ZSBkb2luZyBhbiBpbnZhbGlkYXRpb24gb24gdGhlIFwic2V0dGVyXCIgaGVyZS5cbi8vIEF0IGJlc3QgdGhlIGludmFsaWRhdGlvbiBpcyB1c2VsZXNzLCBhdCB3b3JzdCBpdCBjYW4gY2F1c2UgaW5maW5pdGUgbG9vcHM6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vZW1vamktcGlja2VyLWVsZW1lbnQvcHVsbC8xODBcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzY1MjFcbi8vIEFsc28gbm90ZSB0YWJwYW5lbEVsZW1lbnQgY2FuIGJlIG51bGwgaWYgdGhlIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGltbWVkaWF0ZWx5IGFmdGVyIGNvbm5lY3RlZFxuZnVuY3Rpb24gcmVzZXRTY3JvbGxUb3BJZlBvc3NpYmxlIChlbGVtZW50KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChlbGVtZW50KSB7IC8vIE1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgdGhpcyBgaWZgIGd1YXJkXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEZyb21NYXAgKGNhY2hlLCBrZXksIGZ1bmMpIHtcbiAgbGV0IGNhY2hlZCA9IGNhY2hlLmdldChrZXkpO1xuICBpZiAoIWNhY2hlZCkge1xuICAgIGNhY2hlZCA9IGZ1bmMoKTtcbiAgICBjYWNoZS5zZXQoa2V5LCBjYWNoZWQpO1xuICB9XG4gIHJldHVybiBjYWNoZWRcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcgKHZhbHVlKSB7XG4gIHJldHVybiAnJyArIHZhbHVlXG59XG5cbmZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUgKGh0bWxTdHJpbmcpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICByZXR1cm4gdGVtcGxhdGVcbn1cblxuY29uc3QgcGFyc2VDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBkb21JbnN0YW5jZXNDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB1bmtleWVkU3ltYm9sID0gU3ltYm9sKCd1bi1rZXllZCcpO1xuXG4vLyBOb3Qgc3VwcG9ydGVkIGluIFNhZmFyaSA8PTEzXG5jb25zdCBoYXNSZXBsYWNlQ2hpbGRyZW4gPSAncmVwbGFjZUNoaWxkcmVuJyBpbiBFbGVtZW50LnByb3RvdHlwZTtcbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbiAocGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGhhc1JlcGxhY2VDaGlsZHJlbikge1xuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLm5ld0NoaWxkcmVuKTtcbiAgfSBlbHNlIHsgLy8gbWluaW1hbCBwb2x5ZmlsbCBmb3IgRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZUNoaWxkcmVuXG4gICAgcGFyZW50Tm9kZS5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnROb2RlLmFwcGVuZCguLi5uZXdDaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9DaGlsZHJlbk5lZWRSZXJlbmRlciAocGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pIHtcbiAgbGV0IG9sZENoaWxkID0gcGFyZW50Tm9kZS5maXJzdENoaWxkO1xuICBsZXQgb2xkQ2hpbGRyZW5Db3VudCA9IDA7XG4gIC8vIGl0ZXJhdGUgdXNpbmcgZmlyc3RDaGlsZC9uZXh0U2libGluZyBiZWNhdXNlIGJyb3dzZXJzIHVzZSBhIGxpbmtlZCBsaXN0IHVuZGVyIHRoZSBob29kXG4gIHdoaWxlIChvbGRDaGlsZCkge1xuICAgIGNvbnN0IG5ld0NoaWxkID0gbmV3Q2hpbGRyZW5bb2xkQ2hpbGRyZW5Db3VudF07XG4gICAgLy8gY2hlY2sgaWYgdGhlIG9sZCBjaGlsZCBhbmQgbmV3IGNoaWxkIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdDaGlsZCAhPT0gb2xkQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIG9sZENoaWxkID0gb2xkQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgb2xkQ2hpbGRyZW5Db3VudCsrO1xuICB9XG4gIC8vIGlmIG5ldyBjaGlsZHJlbiBsZW5ndGggaXMgZGlmZmVyZW50IGZyb20gb2xkLCB3ZSBtdXN0IHJlLXJlbmRlclxuICByZXR1cm4gb2xkQ2hpbGRyZW5Db3VudCAhPT0gbmV3Q2hpbGRyZW4ubGVuZ3RoXG59XG5cbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4gKG5ld0NoaWxkcmVuLCBpbnN0YW5jZUJpbmRpbmcpIHtcbiAgY29uc3QgeyB0YXJnZXROb2RlIH0gPSBpbnN0YW5jZUJpbmRpbmc7XG4gIGxldCB7IHRhcmdldFBhcmVudE5vZGUgfSA9IGluc3RhbmNlQmluZGluZztcblxuICBsZXQgbmVlZHNSZXJlbmRlciA9IGZhbHNlO1xuXG4gIGlmICh0YXJnZXRQYXJlbnROb2RlKSB7IC8vIGFscmVhZHkgcmVuZGVyZWQgb25jZVxuICAgIG5lZWRzUmVyZW5kZXIgPSBkb0NoaWxkcmVuTmVlZFJlcmVuZGVyKHRhcmdldFBhcmVudE5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgfSBlbHNlIHsgLy8gZmlyc3QgcmVuZGVyIG9mIGxpc3RcbiAgICBuZWVkc1JlcmVuZGVyID0gdHJ1ZTtcbiAgICBpbnN0YW5jZUJpbmRpbmcudGFyZ2V0Tm9kZSA9IHVuZGVmaW5lZDsgLy8gcGxhY2Vob2xkZXIgY29tbWVudCBub3QgbmVlZGVkIGFueW1vcmUsIGZyZWUgbWVtb3J5XG4gICAgaW5zdGFuY2VCaW5kaW5nLnRhcmdldFBhcmVudE5vZGUgPSB0YXJnZXRQYXJlbnROb2RlID0gdGFyZ2V0Tm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIC8vIGF2b2lkIHJlLXJlbmRlcmluZyBsaXN0IGlmIHRoZSBkb20gbm9kZXMgYXJlIGV4YWN0bHkgdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlclxuICBpZiAobmVlZHNSZXJlbmRlcikge1xuICAgIHJlcGxhY2VDaGlsZHJlbih0YXJnZXRQYXJlbnROb2RlLCBuZXdDaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGF0Y2ggKGV4cHJlc3Npb25zLCBpbnN0YW5jZUJpbmRpbmdzKSB7XG4gIGZvciAoY29uc3QgaW5zdGFuY2VCaW5kaW5nIG9mIGluc3RhbmNlQmluZGluZ3MpIHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXROb2RlLFxuICAgICAgY3VycmVudEV4cHJlc3Npb24sXG4gICAgICBiaW5kaW5nOiB7XG4gICAgICAgIGV4cHJlc3Npb25JbmRleCxcbiAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgYXR0cmlidXRlVmFsdWVQcmUsXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlUG9zdFxuICAgICAgfVxuICAgIH0gPSBpbnN0YW5jZUJpbmRpbmc7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnNbZXhwcmVzc2lvbkluZGV4XTtcblxuICAgIGlmIChjdXJyZW50RXhwcmVzc2lvbiA9PT0gZXhwcmVzc2lvbikge1xuICAgICAgLy8gbm8gbmVlZCB0byB1cGRhdGUsIHNhbWUgYXMgYmVmb3JlXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlQmluZGluZy5jdXJyZW50RXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cbiAgICBpZiAoYXR0cmlidXRlTmFtZSkgeyAvLyBhdHRyaWJ1dGUgcmVwbGFjZW1lbnRcbiAgICAgIHRhcmdldE5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlUHJlICsgdG9TdHJpbmcoZXhwcmVzc2lvbikgKyBhdHRyaWJ1dGVWYWx1ZVBvc3QpO1xuICAgIH0gZWxzZSB7IC8vIHRleHQgbm9kZSAvIGNoaWxkIGVsZW1lbnQgLyBjaGlsZHJlbiByZXBsYWNlbWVudFxuICAgICAgbGV0IG5ld05vZGU7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShleHByZXNzaW9uKSkgeyAvLyBhcnJheSBvZiBET00gZWxlbWVudHMgcHJvZHVjZWQgYnkgdGFnIHRlbXBsYXRlIGxpdGVyYWxzXG4gICAgICAgIHBhdGNoQ2hpbGRyZW4oZXhwcmVzc2lvbiwgaW5zdGFuY2VCaW5kaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEVsZW1lbnQpIHsgLy8gaHRtbCB0YWcgdGVtcGxhdGUgcmV0dXJuaW5nIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgbmV3Tm9kZSA9IGV4cHJlc3Npb247XG4gICAgICAgIHRhcmdldE5vZGUucmVwbGFjZVdpdGgobmV3Tm9kZSk7XG4gICAgICB9IGVsc2UgeyAvLyBwcmltaXRpdmUgLSBzdHJpbmcsIG51bWJlciwgZXRjXG4gICAgICAgIGlmICh0YXJnZXROb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkgeyAvLyBhbHJlYWR5IHRyYW5zZm9ybWVkIGludG8gYSB0ZXh0IG5vZGVcbiAgICAgICAgICAvLyBub2RlVmFsdWUgaXMgZmFzdGVyIHRoYW4gdGV4dENvbnRlbnQgc3VwcG9zZWRseSBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUxZNnkzSGJEVm1nXG4gICAgICAgICAgdGFyZ2V0Tm9kZS5ub2RlVmFsdWUgPSB0b1N0cmluZyhleHByZXNzaW9uKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gcmVwbGFjZSBjb21tZW50IG9yIHdoYXRldmVyIHdhcyB0aGVyZSBiZWZvcmUgd2l0aCBhIHRleHQgbm9kZVxuICAgICAgICAgIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b1N0cmluZyhleHByZXNzaW9uKSk7XG4gICAgICAgICAgdGFyZ2V0Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5ld05vZGUpIHtcbiAgICAgICAgaW5zdGFuY2VCaW5kaW5nLnRhcmdldE5vZGUgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZSAodG9rZW5zKSB7XG4gIGxldCBodG1sU3RyaW5nID0gJyc7XG5cbiAgbGV0IHdpdGhpblRhZyA9IGZhbHNlO1xuICBsZXQgd2l0aGluQXR0cmlidXRlID0gZmFsc2U7XG4gIGxldCBlbGVtZW50SW5kZXhDb3VudGVyID0gLTE7IC8vIGRlcHRoLWZpcnN0IHRyYXZlcnNhbCBvcmRlclxuXG4gIGNvbnN0IGVsZW1lbnRzVG9CaW5kaW5ncyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgZWxlbWVudEluZGV4ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgaHRtbFN0cmluZyArPSB0b2tlbjtcblxuICAgIGlmIChpID09PSBsZW4gLSAxKSB7XG4gICAgICBicmVhayAvLyBubyBuZWVkIHRvIHByb2Nlc3MgY2hhcmFjdGVycyAtIG5vIG1vcmUgZXhwcmVzc2lvbnMgdG8gYmUgZm91bmRcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRva2VuLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjaGFyID0gdG9rZW4uY2hhckF0KGopO1xuICAgICAgc3dpdGNoIChjaGFyKSB7XG4gICAgICAgIGNhc2UgJzwnOiB7XG4gICAgICAgICAgY29uc3QgbmV4dENoYXIgPSB0b2tlbi5jaGFyQXQoaiArIDEpO1xuICAgICAgICAgIGlmIChuZXh0Q2hhciA9PT0gJy8nKSB7IC8vIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICAvLyBsZWF2aW5nIGFuIGVsZW1lbnRcbiAgICAgICAgICAgIGVsZW1lbnRJbmRleGVzLnBvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIG5vdCBhIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICB3aXRoaW5UYWcgPSB0cnVlO1xuICAgICAgICAgICAgZWxlbWVudEluZGV4ZXMucHVzaCgrK2VsZW1lbnRJbmRleENvdW50ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJz4nOiB7XG4gICAgICAgICAgd2l0aGluVGFnID0gZmFsc2U7XG4gICAgICAgICAgd2l0aGluQXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICc9Jzoge1xuICAgICAgICAgIHdpdGhpbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IGVsZW1lbnRJbmRleGVzW2VsZW1lbnRJbmRleGVzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGJpbmRpbmdzID0gZ2V0RnJvbU1hcChlbGVtZW50c1RvQmluZGluZ3MsIGVsZW1lbnRJbmRleCwgKCkgPT4gW10pO1xuXG4gICAgbGV0IGF0dHJpYnV0ZU5hbWU7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlUHJlO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZVBvc3Q7XG4gICAgaWYgKHdpdGhpbkF0dHJpYnV0ZSkge1xuICAgICAgLy8gSSBuZXZlciB1c2Ugc2luZ2xlLXF1b3RlcyBmb3IgYXR0cmlidXRlIHZhbHVlcyBpbiBIVE1MLCBzbyBqdXN0IHN1cHBvcnQgZG91YmxlLXF1b3RlcyBvciBuby1xdW90ZXNcbiAgICAgIGNvbnN0IG1hdGNoID0gLyhcXFMrKT1cIj8oW15cIj1dKikkLy5leGVjKHRva2VuKTtcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSBtYXRjaFsxXTtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUHJlID0gbWF0Y2hbMl07XG4gICAgICBhdHRyaWJ1dGVWYWx1ZVBvc3QgPSAvXlteXCI+XSovLmV4ZWModG9rZW5zW2kgKyAxXSlbMF07XG4gICAgfVxuXG4gICAgY29uc3QgYmluZGluZyA9IHtcbiAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICBhdHRyaWJ1dGVWYWx1ZVByZSxcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUG9zdCxcbiAgICAgIGV4cHJlc3Npb25JbmRleDogaVxuICAgIH07XG5cbiAgICBiaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuXG4gICAgLy8gYWRkIGEgcGxhY2Vob2xkZXIgY29tbWVudCB0aGF0IHdlIGNhbiBmaW5kIGxhdGVyXG4gICAgaHRtbFN0cmluZyArPSAoIXdpdGhpblRhZyAmJiAhd2l0aGluQXR0cmlidXRlKSA/IGA8IS0tJHtiaW5kaW5ncy5sZW5ndGggLSAxfS0tPmAgOiAnJztcbiAgfVxuXG4gIGNvbnN0IHRlbXBsYXRlID0gcGFyc2VUZW1wbGF0ZShodG1sU3RyaW5nKTtcblxuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlLFxuICAgIGVsZW1lbnRzVG9CaW5kaW5nc1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQbGFjZWhvbGRlckNvbW1lbnQgKGVsZW1lbnQsIGJpbmRpbmdJZCkge1xuICAvLyBJZiB3ZSBoYWQgYSBsb3Qgb2YgcGxhY2Vob2xkZXIgY29tbWVudHMgdG8gZmluZCwgaXQgd291bGQgbWFrZSBtb3JlIHNlbnNlIHRvIGJ1aWxkIHVwIGEgbWFwIG9uY2VcbiAgLy8gcmF0aGVyIHRoYW4gc2VhcmNoIHRoZSBET00gZXZlcnkgdGltZS4gQnV0IGl0IHR1cm5zIG91dCB0aGF0IHdlIGFsd2F5cyBvbmx5IGhhdmUgb25lIGNoaWxkLFxuICAvLyBhbmQgaXQncyB0aGUgY29tbWVudCBub2RlLCBzbyBzZWFyY2hpbmcgZXZlcnkgdGltZSBpcyBhY3R1YWxseSBmYXN0ZXIuXG4gIGxldCBjaGlsZE5vZGUgPSBlbGVtZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZE5vZGUpIHtcbiAgICAvLyBOb3RlIHRoYXQgbWluaWZ5LWh0bWwtbGl0ZXJhbHMgaGFzIGFscmVhZHkgcmVtb3ZlZCBhbGwgbm9uLWZyYW1ld29yayBjb21tZW50c1xuICAgIC8vIFNvIHdlIGp1c3QgbmVlZCB0byBsb29rIGZvciBjb21tZW50cyB0aGF0IGhhdmUgZXhhY3RseSB0aGUgYmluZGluZ0lkIGFzIGl0cyB0ZXh0IGNvbnRlbnRcbiAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSAmJiBjaGlsZE5vZGUubm9kZVZhbHVlID09PSB0b1N0cmluZyhiaW5kaW5nSWQpKSB7XG4gICAgICByZXR1cm4gY2hpbGROb2RlXG4gICAgfVxuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmF2ZXJzZUFuZFNldHVwQmluZGluZ3MgKGRvbSwgZWxlbWVudHNUb0JpbmRpbmdzKSB7XG4gIGNvbnN0IGluc3RhbmNlQmluZGluZ3MgPSBbXTtcbiAgLy8gdHJhdmVyc2UgZG9tXG4gIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvbSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuXG4gIGxldCBlbGVtZW50ID0gZG9tO1xuICBsZXQgZWxlbWVudEluZGV4ID0gLTE7XG4gIGRvIHtcbiAgICBjb25zdCBiaW5kaW5ncyA9IGVsZW1lbnRzVG9CaW5kaW5ncy5nZXQoKytlbGVtZW50SW5kZXgpO1xuICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ3NbaV07XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGJpbmRpbmcuYXR0cmlidXRlTmFtZVxuICAgICAgICAgID8gZWxlbWVudCAvLyBhdHRyaWJ1dGUgYmluZGluZywganVzdCB1c2UgdGhlIGVsZW1lbnQgaXRzZWxmXG4gICAgICAgICAgOiBmaW5kUGxhY2Vob2xkZXJDb21tZW50KGVsZW1lbnQsIGkpOyAvLyBub3QgYW4gYXR0cmlidXRlIGJpbmRpbmcsIHNvIGhhcyBhIHBsYWNlaG9sZGVyIGNvbW1lbnRcblxuICAgICAgICBjb25zdCBpbnN0YW5jZUJpbmRpbmcgPSB7XG4gICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICB0YXJnZXROb2RlLFxuICAgICAgICAgIHRhcmdldFBhcmVudE5vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjdXJyZW50RXhwcmVzc2lvbjogdW5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgaW5zdGFuY2VCaW5kaW5ncy5wdXNoKGluc3RhbmNlQmluZGluZyk7XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlICgoZWxlbWVudCA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSkpXG5cbiAgcmV0dXJuIGluc3RhbmNlQmluZGluZ3Ncbn1cblxuZnVuY3Rpb24gcGFyc2VIdG1sICh0b2tlbnMpIHtcbiAgLy8gQWxsIHRlbXBsYXRlcyBhbmQgYm91bmQgZXhwcmVzc2lvbnMgYXJlIHVuaXF1ZSBwZXIgdG9rZW5zIGFycmF5XG4gIGNvbnN0IHsgdGVtcGxhdGUsIGVsZW1lbnRzVG9CaW5kaW5ncyB9ID0gZ2V0RnJvbU1hcChwYXJzZUNhY2hlLCB0b2tlbnMsICgpID0+IHBhcnNlKHRva2VucykpO1xuXG4gIC8vIFdoZW4gd2UgcGFyc2VIdG1sLCB3ZSBhbHdheXMgcmV0dXJuIGEgZnJlc2ggRE9NIGluc3RhbmNlIHJlYWR5IHRvIGJlIHVwZGF0ZWRcbiAgY29uc3QgZG9tID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IGluc3RhbmNlQmluZGluZ3MgPSB0cmF2ZXJzZUFuZFNldHVwQmluZGluZ3MoZG9tLCBlbGVtZW50c1RvQmluZGluZ3MpO1xuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVEb21JbnN0YW5jZSAoZXhwcmVzc2lvbnMpIHtcbiAgICBwYXRjaChleHByZXNzaW9ucywgaW5zdGFuY2VCaW5kaW5ncyk7XG4gICAgcmV0dXJuIGRvbVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYW1ld29yayAoc3RhdGUpIHtcbiAgY29uc3QgZG9tSW5zdGFuY2VzID0gZ2V0RnJvbU1hcChkb21JbnN0YW5jZXNDYWNoZSwgc3RhdGUsICgpID0+IG5ldyBNYXAoKSk7XG4gIGxldCBkb21JbnN0YW5jZUNhY2hlS2V5ID0gdW5rZXllZFN5bWJvbDtcblxuICBmdW5jdGlvbiBodG1sICh0b2tlbnMsIC4uLmV4cHJlc3Npb25zKSB7XG4gICAgLy8gRWFjaCB1bmlxdWUgbGV4aWNhbCB1c2FnZSBvZiBtYXAoKSBpcyBjb25zaWRlcmVkIHVuaXF1ZSBkdWUgdG8gdGhlIGh0bWxgYCB0YWdnZWQgdGVtcGxhdGUgY2FsbCBpdCBtYWtlcyxcbiAgICAvLyB3aGljaCBoYXMgbGV4aWNhbGx5IHVuaXF1ZSB0b2tlbnMuIFRoZSB1bmtleWVkIHN5bWJvbCBpcyBqdXN0IHVzZWQgZm9yIGh0bWxgYCB1c2FnZSBvdXRzaWRlIG9mIGEgbWFwKCkuXG4gICAgY29uc3QgZG9tSW5zdGFuY2VzRm9yVG9rZW5zID0gZ2V0RnJvbU1hcChkb21JbnN0YW5jZXMsIHRva2VucywgKCkgPT4gbmV3IE1hcCgpKTtcbiAgICBjb25zdCB1cGRhdGVEb21JbnN0YW5jZSA9IGdldEZyb21NYXAoZG9tSW5zdGFuY2VzRm9yVG9rZW5zLCBkb21JbnN0YW5jZUNhY2hlS2V5LCAoKSA9PiBwYXJzZUh0bWwodG9rZW5zKSk7XG5cbiAgICByZXR1cm4gdXBkYXRlRG9tSW5zdGFuY2UoZXhwcmVzc2lvbnMpIC8vIHVwZGF0ZSB3aXRoIGV4cHJlc3Npb25zXG4gIH1cblxuICBmdW5jdGlvbiBtYXAgKGFycmF5LCBjYWxsYmFjaywga2V5RnVuY3Rpb24pIHtcbiAgICByZXR1cm4gYXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxDYWNoZUtleSA9IGRvbUluc3RhbmNlQ2FjaGVLZXk7XG4gICAgICBkb21JbnN0YW5jZUNhY2hlS2V5ID0ga2V5RnVuY3Rpb24oaXRlbSk7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soaXRlbSwgaW5kZXgpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkb21JbnN0YW5jZUNhY2hlS2V5ID0gb3JpZ2luYWxDYWNoZUtleTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHsgbWFwLCBodG1sIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyIChjb250YWluZXIsIHN0YXRlLCBoZWxwZXJzLCBldmVudHMsIGFjdGlvbnMsIHJlZnMsIGFib3J0U2lnbmFsLCBmaXJzdFJlbmRlcikge1xuICBjb25zdCB7IGxhYmVsV2l0aFNraW4sIHRpdGxlRm9yRW1vamksIHVuaWNvZGVXaXRoU2tpbiB9ID0gaGVscGVycztcbiAgY29uc3QgeyBodG1sLCBtYXAgfSA9IGNyZWF0ZUZyYW1ld29yayhzdGF0ZSk7XG5cbiAgZnVuY3Rpb24gZW1vamlMaXN0IChlbW9qaXMsIHNlYXJjaE1vZGUsIHByZWZpeCkge1xuICAgIHJldHVybiBtYXAoZW1vamlzLCAoZW1vamksIGkpID0+IHtcbiAgICAgIHJldHVybiBodG1sYDxidXR0b24gcm9sZT1cIiR7c2VhcmNoTW9kZSA/ICdvcHRpb24nIDogJ21lbnVpdGVtJ31cIiBhcmlhLXNlbGVjdGVkPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gaSA9PT0gc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA6ICcnfVwiIGFyaWEtbGFiZWw9XCIke2xhYmVsV2l0aFNraW4oZW1vamksIHN0YXRlLmN1cnJlbnRTa2luVG9uZSl9XCIgdGl0bGU9XCIke3RpdGxlRm9yRW1vamkoZW1vamkpfVwiIGNsYXNzPVwiZW1vamkgJHtzZWFyY2hNb2RlICYmIGkgPT09IHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPyAnYWN0aXZlJyA6ICcnfVwiIGlkPVwiJHtgJHtwcmVmaXh9LSR7ZW1vamkuaWR9YH1cIj4ke1xuICAgICAgICBlbW9qaS51bmljb2RlXG4gICAgICAgICAgPyB1bmljb2RlV2l0aFNraW4oZW1vamksIHN0YXRlLmN1cnJlbnRTa2luVG9uZSlcbiAgICAgICAgICA6IGh0bWxgPGltZyBjbGFzcz1cImN1c3RvbS1lbW9qaVwiIHNyYz1cIiR7ZW1vamkudXJsfVwiIGFsdD1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+YFxuICAgICAgfTwvYnV0dG9uPmBcbiAgICAgIC8vIEl0J3MgaW1wb3J0YW50IGZvciB0aGUgY2FjaGUga2V5IHRvIGJlIHVuaXF1ZSBiYXNlZCBvbiB0aGUgcHJlZml4LCBiZWNhdXNlIHRoZSBmcmFtZXdvcmsgY2FjaGVzIGJhc2VkIG9uIHRoZVxuICAgICAgLy8gdW5pcXVlIHRva2VucyArIGNhY2hlIGtleSwgYW5kIHRoZSBzYW1lIGVtb2ppIG1heSBiZSB1c2VkIGluIHRoZSB0YWIgYXMgd2VsbCBhcyBpbiB0aGUgZmF2IGJhclxuICAgIH0sIGVtb2ppID0+IGAke3ByZWZpeH0tJHtlbW9qaS5pZH1gKVxuICB9XG5cbiAgY29uc3Qgc2VjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gaHRtbGA8c2VjdGlvbiBkYXRhLXJlZj1cInJvb3RFbGVtZW50XCIgY2xhc3M9XCJwaWNrZXJcIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLnJlZ2lvbkxhYmVsfVwiIHN0eWxlPVwiJHtzdGF0ZS5waWNrZXJTdHlsZX1cIj48ZGl2IGNsYXNzPVwicGFkLXRvcFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJzZWFyY2gtcm93XCI+PGRpdiBjbGFzcz1cInNlYXJjaC13cmFwcGVyXCI+PGlucHV0IGlkPVwic2VhcmNoXCIgY2xhc3M9XCJzZWFyY2hcIiB0eXBlPVwic2VhcmNoXCIgcm9sZT1cImNvbWJvYm94XCIgZW50ZXJrZXloaW50PVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3N0YXRlLmkxOG4uc2VhcmNoTGFiZWx9XCIgYXV0b2NhcGl0YWxpemU9XCJub25lXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgc3BlbGxjaGVjaz1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiJHshIShzdGF0ZS5zZWFyY2hNb2RlICYmIHN0YXRlLmN1cnJlbnRFbW9qaXMubGVuZ3RoKX1cIiBhcmlhLWNvbnRyb2xzPVwic2VhcmNoLXJlc3VsdHNcIiBhcmlhLWRlc2NyaWJlZGJ5PVwic2VhcmNoLWRlc2NyaXB0aW9uXCIgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwiJHtzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtSWQgPyBgZW1vLSR7c3RhdGUuYWN0aXZlU2VhcmNoSXRlbUlkfWAgOiAnJ31cIiBkYXRhLXJlZj1cInNlYXJjaEVsZW1lbnRcIiBkYXRhLW9uLWlucHV0PVwib25TZWFyY2hJbnB1dFwiIGRhdGEtb24ta2V5ZG93bj1cIm9uU2VhcmNoS2V5ZG93blwiPjxsYWJlbCBjbGFzcz1cInNyLW9ubHlcIiBmb3I9XCJzZWFyY2hcIj4ke3N0YXRlLmkxOG4uc2VhcmNoTGFiZWx9PC9sYWJlbD4gPHNwYW4gaWQ9XCJzZWFyY2gtZGVzY3JpcHRpb25cIiBjbGFzcz1cInNyLW9ubHlcIj4ke3N0YXRlLmkxOG4uc2VhcmNoRGVzY3JpcHRpb259PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJza2ludG9uZS1idXR0b24td3JhcHBlciAke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWRBZnRlckFuaW1hdGlvbiA/ICdleHBhbmRlZCcgOiAnJ31cIj48YnV0dG9uIGlkPVwic2tpbnRvbmUtYnV0dG9uXCIgY2xhc3M9XCJlbW9qaSAke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPyAnaGlkZS1mb2N1cycgOiAnJ31cIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5za2luVG9uZUJ1dHRvbkxhYmVsfVwiIHRpdGxlPVwiJHtzdGF0ZS5za2luVG9uZUJ1dHRvbkxhYmVsfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJza2ludG9uZS1kZXNjcmlwdGlvblwiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgYXJpYS1leHBhbmRlZD1cIiR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZH1cIiBhcmlhLWNvbnRyb2xzPVwic2tpbnRvbmUtbGlzdFwiIGRhdGEtb24tY2xpY2s9XCJvbkNsaWNrU2tpblRvbmVCdXR0b25cIj4ke3N0YXRlLnNraW5Ub25lQnV0dG9uVGV4dH08L2J1dHRvbj48L2Rpdj48c3BhbiBpZD1cInNraW50b25lLWRlc2NyaXB0aW9uXCIgY2xhc3M9XCJzci1vbmx5XCI+JHtzdGF0ZS5pMThuLnNraW5Ub25lRGVzY3JpcHRpb259PC9zcGFuPjxkaXYgZGF0YS1yZWY9XCJza2luVG9uZURyb3Bkb3duXCIgaWQ9XCJza2ludG9uZS1saXN0XCIgY2xhc3M9XCJza2ludG9uZS1saXN0IGhpZGUtZm9jdXMgJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID8gJycgOiAnaGlkZGVuIG5vLWFuaW1hdGUnfVwiIHN0eWxlPVwidHJhbnNmb3JtOnRyYW5zbGF0ZVkoJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID8gMCA6ICdjYWxjKC0xICogdmFyKC0tbnVtLXNraW50b25lcykgKiB2YXIoLS10b3RhbC1lbW9qaS1zaXplKSknfSlcIiByb2xlPVwibGlzdGJveFwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uc2tpblRvbmVzTGFiZWx9XCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwic2tpbnRvbmUtJHtzdGF0ZS5hY3RpdmVTa2luVG9uZX1cIiBhcmlhLWhpZGRlbj1cIiR7IXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWR9XCIgdGFiSW5kZXg9XCItMVwiIGRhdGEtb24tZm9jdXNvdXQ9XCJvblNraW5Ub25lT3B0aW9uc0ZvY3VzT3V0XCIgZGF0YS1vbi1jbGljaz1cIm9uU2tpblRvbmVPcHRpb25zQ2xpY2tcIiBkYXRhLW9uLWtleWRvd249XCJvblNraW5Ub25lT3B0aW9uc0tleWRvd25cIiBkYXRhLW9uLWtleXVwPVwib25Ta2luVG9uZU9wdGlvbnNLZXl1cFwiPiR7XG4gICAgbWFwKHN0YXRlLnNraW5Ub25lcywgKHNraW5Ub25lLCBpKSA9PiB7XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBpZD1cInNraW50b25lLSR7aX1cIiBjbGFzcz1cImVtb2ppICR7aSA9PT0gc3RhdGUuYWN0aXZlU2tpblRvbmUgPyAnYWN0aXZlJyA6ICcnfVwiIGFyaWEtc2VsZWN0ZWQ9XCIke2kgPT09IHN0YXRlLmFjdGl2ZVNraW5Ub25lfVwiIHJvbGU9XCJvcHRpb25cIiB0aXRsZT1cIiR7c3RhdGUuaTE4bi5za2luVG9uZXNbaV19XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5za2luVG9uZXNbaV19XCI+JHtza2luVG9uZX08L2Rpdj5gXG4gICAgfSwgc2tpblRvbmUgPT4gc2tpblRvbmUpXG4gICAgICAgIH08L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwibmF2XCIgcm9sZT1cInRhYmxpc3RcIiBzdHlsZT1cImdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoJHtzdGF0ZS5ncm91cHMubGVuZ3RofSwxZnIpXCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5jYXRlZ29yaWVzTGFiZWx9XCIgZGF0YS1vbi1rZXlkb3duPVwib25OYXZLZXlkb3duXCIgZGF0YS1vbi1jbGljaz1cIm9uTmF2Q2xpY2tcIj4ke1xuICAgICAgICAgICAgbWFwKHN0YXRlLmdyb3VwcywgKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYDxidXR0b24gcm9sZT1cInRhYlwiIGNsYXNzPVwibmF2LWJ1dHRvblwiIGFyaWEtY29udHJvbHM9XCJ0YWItJHtncm91cC5pZH1cIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLmNhdGVnb3JpZXNbZ3JvdXAubmFtZV19XCIgYXJpYS1zZWxlY3RlZD1cIiR7IXN0YXRlLnNlYXJjaE1vZGUgJiYgc3RhdGUuY3VycmVudEdyb3VwLmlkID09PSBncm91cC5pZH1cIiB0aXRsZT1cIiR7c3RhdGUuaTE4bi5jYXRlZ29yaWVzW2dyb3VwLm5hbWVdfVwiIGRhdGEtZ3JvdXAtaWQ9XCIke2dyb3VwLmlkfVwiPjxkaXYgY2xhc3M9XCJuYXYtZW1vamkgZW1vamlcIj4ke2dyb3VwLmVtb2ppfTwvZGl2PjwvYnV0dG9uPmBcbiAgICAgICAgICAgIH0sIGdyb3VwID0+IGdyb3VwLmlkKVxuICAgICAgICAgIH08L2Rpdj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCIgc3R5bGU9XCJ0cmFuc2Zvcm06dHJhbnNsYXRlWCgkeygvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoc3RhdGUuaXNSdGwgPyAtMSA6IDEpKSAqIHN0YXRlLmN1cnJlbnRHcm91cEluZGV4ICogMTAwfSUpXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIm1lc3NhZ2UgJHtzdGF0ZS5tZXNzYWdlID8gJycgOiAnZ29uZSd9XCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCI+JHtzdGF0ZS5tZXNzYWdlfTwvZGl2PjxkaXYgZGF0YS1yZWY9XCJ0YWJwYW5lbEVsZW1lbnRcIiBjbGFzcz1cInRhYnBhbmVsICR7KCFzdGF0ZS5kYXRhYmFzZUxvYWRlZCB8fCBzdGF0ZS5tZXNzYWdlKSA/ICdnb25lJyA6ICcnfVwiIHJvbGU9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAncmVnaW9uJyA6ICd0YWJwYW5lbCd9XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/IHN0YXRlLmkxOG4uc2VhcmNoUmVzdWx0c0xhYmVsIDogc3RhdGUuaTE4bi5jYXRlZ29yaWVzW3N0YXRlLmN1cnJlbnRHcm91cC5uYW1lXX1cIiBpZD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/ICcnIDogYHRhYi0ke3N0YXRlLmN1cnJlbnRHcm91cC5pZH1gfVwiIHRhYkluZGV4PVwiMFwiIGRhdGEtb24tY2xpY2s9XCJvbkVtb2ppQ2xpY2tcIj48ZGl2IGRhdGEtYWN0aW9uPVwiY2FsY3VsYXRlRW1vamlHcmlkU3R5bGVcIj4ke1xuICAgICAgICAgICAgICBtYXAoc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLCAoZW1vamlXaXRoQ2F0ZWdvcnksIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2PjxkaXYgaWQ9XCJtZW51LWxhYmVsLSR7aX1cIiBjbGFzcz1cImNhdGVnb3J5ICR7c3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMSAmJiBzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXNbMF0uY2F0ZWdvcnkgPT09ICcnID8gJ2dvbmUnIDogJyd9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLnNlYXJjaE1vZGVcbiAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZS5pMThuLnNlYXJjaFJlc3VsdHNMYWJlbFxuICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaVdpdGhDYXRlZ29yeS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlbW9qaVdpdGhDYXRlZ29yeS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZS5pMThuLmNhdGVnb3JpZXMuY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5pMThuLmNhdGVnb3JpZXNbc3RhdGUuY3VycmVudEdyb3VwLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9PC9kaXY+PGRpdiBjbGFzcz1cImVtb2ppLW1lbnVcIiByb2xlPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gJ2xpc3Rib3gnIDogJ21lbnUnfVwiIGFyaWEtbGFiZWxsZWRieT1cIm1lbnUtbGFiZWwtJHtpfVwiIGlkPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gJ3NlYXJjaC1yZXN1bHRzJyA6ICcnfVwiPiR7XG4gICAgICAgICAgICAgIGVtb2ppTGlzdChlbW9qaVdpdGhDYXRlZ29yeS5lbW9qaXMsIHN0YXRlLnNlYXJjaE1vZGUsIC8qIHByZWZpeCAqLyAnZW1vJylcbiAgICAgICAgICAgIH08L2Rpdj48L2Rpdj5gXG4gICAgICAgICAgICAgIH0sIGVtb2ppV2l0aENhdGVnb3J5ID0+IGVtb2ppV2l0aENhdGVnb3J5LmNhdGVnb3J5KVxuICAgICAgICAgICAgfTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgZW1vamktbWVudSAke3N0YXRlLm1lc3NhZ2UgPyAnZ29uZScgOiAnJ31cIiByb2xlPVwibWVudVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uZmF2b3JpdGVzTGFiZWx9XCIgc3R5bGU9XCJwYWRkaW5nLWlubGluZS1lbmQ6JHtgJHtzdGF0ZS5zY3JvbGxiYXJXaWR0aH1weGB9XCIgZGF0YS1vbi1jbGljaz1cIm9uRW1vamlDbGlja1wiPiR7XG4gICAgICAgICAgICBlbW9qaUxpc3Qoc3RhdGUuY3VycmVudEZhdm9yaXRlcywgLyogc2VhcmNoTW9kZSAqLyBmYWxzZSwgLyogcHJlZml4ICovICdmYXYnKVxuICAgICAgICAgIH08L2Rpdj48YnV0dG9uIGRhdGEtcmVmPVwiYmFzZWxpbmVFbW9qaVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImFicy1wb3MgaGlkZGVuIGVtb2ppIGJhc2VsaW5lLWVtb2ppXCI+8J+YgDwvYnV0dG9uPjwvc2VjdGlvbj5gXG4gIH07XG5cbiAgY29uc3Qgcm9vdERvbSA9IHNlY3Rpb24oKTtcblxuICBpZiAoZmlyc3RSZW5kZXIpIHsgLy8gbm90IGEgcmUtcmVuZGVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3REb20pO1xuXG4gICAgLy8gd2Ugb25seSBiaW5kIGV2ZW50cy9yZWZzL2FjdGlvbnMgb25jZSAtIHRoZXJlIGlzIG5vIG5lZWQgdG8gZmluZCB0aGVtIGFnYWluIGdpdmVuIHRoaXMgY29tcG9uZW50IHN0cnVjdHVyZVxuXG4gICAgLy8gaGVscGVyIGZvciB0cmF2ZXJzaW5nIHRoZSBkb20sIGZpbmRpbmcgZWxlbWVudHMgYnkgYW4gYXR0cmlidXRlLCBhbmQgZ2V0dGluZyB0aGUgYXR0cmlidXRlIHZhbHVlXG4gICAgY29uc3QgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUgPSAoYXR0cmlidXRlTmFtZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYCkpIHtcbiAgICAgICAgY2FsbGJhY2soZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIFsnY2xpY2snLCAnZm9jdXNvdXQnLCAnaW5wdXQnLCAna2V5ZG93bicsICdrZXl1cCddKSB7XG4gICAgICBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZShgZGF0YS1vbi0ke2V2ZW50TmFtZX1gLCAoZWxlbWVudCwgbGlzdGVuZXJOYW1lKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50c1tsaXN0ZW5lck5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgcmVmc1xuICAgIGZvckVsZW1lbnRXaXRoQXR0cmlidXRlKCdkYXRhLXJlZicsIChlbGVtZW50LCByZWYpID0+IHtcbiAgICAgIHJlZnNbcmVmXSA9IGVsZW1lbnQ7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdXAgYWN0aW9uc1xuICAgIGZvckVsZW1lbnRXaXRoQXR0cmlidXRlKCdkYXRhLWFjdGlvbicsIChlbGVtZW50LCBhY3Rpb24pID0+IHtcbiAgICAgIGFjdGlvbnNbYWN0aW9uXShlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIC8vIGRlc3Ryb3kvYWJvcnQgbG9naWNcbiAgICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChyb290RG9tKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgcU0gPSB0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09ICdmdW5jdGlvbicgPyBxdWV1ZU1pY3JvdGFzayA6IGNhbGxiYWNrID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY2FsbGJhY2spO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZSAoYWJvcnRTaWduYWwpIHtcbiAgbGV0IGRlc3Ryb3llZCA9IGZhbHNlO1xuICBsZXQgY3VycmVudE9ic2VydmVyO1xuXG4gIGNvbnN0IHByb3BzVG9PYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IGRpcnR5T2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuXG4gIGxldCBxdWV1ZWQ7XG5cbiAgY29uc3QgZmx1c2ggPSAoKSA9PiB7XG4gICAgaWYgKGRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyc1RvUnVuID0gWy4uLmRpcnR5T2JzZXJ2ZXJzXTtcbiAgICBkaXJ0eU9ic2VydmVycy5jbGVhcigpOyAvLyBjbGVhciBiZWZvcmUgcnVubmluZyB0byBmb3JjZSBhbnkgbmV3IHVwZGF0ZXMgdG8gcnVuIGluIGFub3RoZXIgdGljayBvZiB0aGUgbG9vcFxuICAgIHRyeSB7XG4gICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIG9ic2VydmVyc1RvUnVuKSB7XG4gICAgICAgIG9ic2VydmVyKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHF1ZXVlZCA9IGZhbHNlO1xuICAgICAgaWYgKGRpcnR5T2JzZXJ2ZXJzLnNpemUpIHsgLy8gbmV3IHVwZGF0ZXMsIHF1ZXVlIGFub3RoZXIgb25lXG4gICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgIHFNKGZsdXNoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhdGUgPSBuZXcgUHJveHkoe30sIHtcbiAgICBnZXQgKHRhcmdldCwgcHJvcCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3JlYWN0aXZpdHk6IGdldCcsIHByb3ApXG4gICAgICBpZiAoY3VycmVudE9ic2VydmVyKSB7XG4gICAgICAgIGxldCBvYnNlcnZlcnMgPSBwcm9wc1RvT2JzZXJ2ZXJzLmdldChwcm9wKTtcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMpIHtcbiAgICAgICAgICBvYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgcHJvcHNUb09ic2VydmVycy5zZXQocHJvcCwgb2JzZXJ2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlcnMuYWRkKGN1cnJlbnRPYnNlcnZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdXG4gICAgfSxcbiAgICBzZXQgKHRhcmdldCwgcHJvcCwgbmV3VmFsdWUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWFjdGl2aXR5OiBzZXQnLCBwcm9wLCBuZXdWYWx1ZSlcbiAgICAgIHRhcmdldFtwcm9wXSA9IG5ld1ZhbHVlO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXJzID0gcHJvcHNUb09ic2VydmVycy5nZXQocHJvcCk7XG4gICAgICBpZiAob2JzZXJ2ZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgZGlydHlPYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXF1ZXVlZCkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgcU0oZmx1c2gpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlRWZmZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgcnVubmFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvbGRPYnNlcnZlciA9IGN1cnJlbnRPYnNlcnZlcjtcbiAgICAgIGN1cnJlbnRPYnNlcnZlciA9IHJ1bm5hYmxlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGN1cnJlbnRPYnNlcnZlciA9IG9sZE9ic2VydmVyO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHJ1bm5hYmxlKClcbiAgfTtcblxuICAvLyBkZXN0cm95IGxvZ2ljXG4gIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgY3JlYXRlRWZmZWN0XG4gIH1cbn1cblxuLy8gQ29tcGFyZSB0d28gYXJyYXlzLCB3aXRoIGEgZnVuY3Rpb24gY2FsbGVkIG9uIGVhY2ggaXRlbSBpbiB0aGUgdHdvIGFycmF5cyB0aGF0IHJldHVybnMgdHJ1ZSBpZiB0aGUgaXRlbXMgYXJlIGVxdWFsXG5mdW5jdGlvbiBhcnJheXNBcmVFcXVhbEJ5RnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBhcmVFcXVhbEZ1bmMpIHtcbiAgaWYgKGxlZnQubGVuZ3RoICE9PSByaWdodC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWFyZUVxdWFsRnVuYyhsZWZ0W2ldLCByaWdodFtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3Qsbm8tbGFiZWxzLG5vLWlubmVyLWRlY2xhcmF0aW9ucyAqL1xuXG4vLyBjb25zdGFudHNcbmNvbnN0IEVNUFRZX0FSUkFZID0gW107XG5cbmNvbnN0IHsgYXNzaWduIH0gPSBPYmplY3Q7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvb3QgKHNoYWRvd1Jvb3QsIHByb3BzKSB7XG4gIGNvbnN0IHJlZnMgPSB7fTtcbiAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBjb25zdCBhYm9ydFNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gIGNvbnN0IHsgc3RhdGUsIGNyZWF0ZUVmZmVjdCB9ID0gY3JlYXRlU3RhdGUoYWJvcnRTaWduYWwpO1xuXG4gIC8vIGluaXRpYWwgc3RhdGVcbiAgYXNzaWduKHN0YXRlLCB7XG4gICAgc2tpblRvbmVFbW9qaTogdW5kZWZpbmVkLFxuICAgIGkxOG46IHVuZGVmaW5lZCxcbiAgICBkYXRhYmFzZTogdW5kZWZpbmVkLFxuICAgIGN1c3RvbUVtb2ppOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nOiB1bmRlZmluZWQsXG4gICAgZW1vamlWZXJzaW9uOiB1bmRlZmluZWRcbiAgfSk7XG5cbiAgLy8gcHVibGljIHByb3BzXG4gIGFzc2lnbihzdGF0ZSwgcHJvcHMpO1xuXG4gIC8vIHByaXZhdGUgcHJvcHNcbiAgYXNzaWduKHN0YXRlLCB7XG4gICAgaW5pdGlhbExvYWQ6IHRydWUsXG4gICAgY3VycmVudEVtb2ppczogW10sXG4gICAgY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzOiBbXSxcbiAgICByYXdTZWFyY2hUZXh0OiAnJyxcbiAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICBzZWFyY2hNb2RlOiBmYWxzZSxcbiAgICBhY3RpdmVTZWFyY2hJdGVtOiAtMSxcbiAgICBtZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgc2tpblRvbmVQaWNrZXJFeHBhbmRlZDogZmFsc2UsXG4gICAgc2tpblRvbmVQaWNrZXJFeHBhbmRlZEFmdGVyQW5pbWF0aW9uOiBmYWxzZSxcbiAgICBjdXJyZW50U2tpblRvbmU6IDAsXG4gICAgYWN0aXZlU2tpblRvbmU6IDAsXG4gICAgc2tpblRvbmVCdXR0b25UZXh0OiB1bmRlZmluZWQsXG4gICAgcGlja2VyU3R5bGU6IHVuZGVmaW5lZCxcbiAgICBza2luVG9uZUJ1dHRvbkxhYmVsOiAnJyxcbiAgICBza2luVG9uZXM6IFtdLFxuICAgIGN1cnJlbnRGYXZvcml0ZXM6IFtdLFxuICAgIGRlZmF1bHRGYXZvcml0ZUVtb2ppczogdW5kZWZpbmVkLFxuICAgIG51bUNvbHVtbnM6IERFRkFVTFRfTlVNX0NPTFVNTlMsXG4gICAgaXNSdGw6IGZhbHNlLFxuICAgIHNjcm9sbGJhcldpZHRoOiAwLFxuICAgIGN1cnJlbnRHcm91cEluZGV4OiAwLFxuICAgIGdyb3VwczogZ3JvdXBzLFxuICAgIGRhdGFiYXNlTG9hZGVkOiBmYWxzZSxcbiAgICBhY3RpdmVTZWFyY2hJdGVtSWQ6IHVuZGVmaW5lZFxuICB9KTtcblxuICAvL1xuICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgZ3JvdXAgYmFzZWQgb24gdGhlIGN1cnJlbnRHcm91cEluZGV4XG4gIC8vXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1cnJlbnRHcm91cCAhPT0gc3RhdGUuZ3JvdXBzW3N0YXRlLmN1cnJlbnRHcm91cEluZGV4XSkge1xuICAgICAgc3RhdGUuY3VycmVudEdyb3VwID0gc3RhdGUuZ3JvdXBzW3N0YXRlLmN1cnJlbnRHcm91cEluZGV4XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFV0aWxzL2hlbHBlcnNcbiAgLy9cblxuICBjb25zdCBmb2N1cyA9IGlkID0+IHtcbiAgICBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKGlkKS5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IGVtb2ppVG9Eb21Ob2RlID0gZW1vamkgPT4gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChgZW1vLSR7ZW1vamkuaWR9YCk7XG5cbiAgLy8gZmlyZSBhIGN1c3RvbSBldmVudCB0aGF0IGNyb3NzZXMgdGhlIHNoYWRvdyBib3VuZGFyeVxuICBjb25zdCBmaXJlRXZlbnQgPSAobmFtZSwgZGV0YWlsKSA9PiB7XG4gICAgcmVmcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBkZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICB9KSk7XG4gIH07XG5cbiAgLy9cbiAgLy8gQ29tcGFyaXNvbiB1dGlsc1xuICAvL1xuXG4gIGNvbnN0IGNvbXBhcmVFbW9qaUFycmF5cyA9IChhLCBiKSA9PiBhLmlkID09PSBiLmlkO1xuXG4gIGNvbnN0IGNvbXBhcmVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnk6IGFDYXRlZ29yeSwgZW1vamlzOiBhRW1vamlzIH0gPSBhO1xuICAgIGNvbnN0IHsgY2F0ZWdvcnk6IGJDYXRlZ29yeSwgZW1vamlzOiBiRW1vamlzIH0gPSBiO1xuXG4gICAgaWYgKGFDYXRlZ29yeSAhPT0gYkNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uKGFFbW9qaXMsIGJFbW9qaXMsIGNvbXBhcmVFbW9qaUFycmF5cylcbiAgfTtcblxuICAvL1xuICAvLyBVcGRhdGUgdXRpbHMgdG8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnNcbiAgLy9cblxuICAvLyBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVycyBieSBjaGVja2luZyB0aGUgdmFsdWUgYmVmb3JlIHNldHRpbmdcbiAgY29uc3QgdXBkYXRlQ3VycmVudEVtb2ppcyA9IChuZXdFbW9qaXMpID0+IHtcbiAgICBpZiAoIWFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbihzdGF0ZS5jdXJyZW50RW1vamlzLCBuZXdFbW9qaXMsIGNvbXBhcmVFbW9qaUFycmF5cykpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXMgPSBuZXdFbW9qaXM7XG4gICAgfVxuICB9O1xuXG4gIC8vIGF2b2lkIGV4Y2Vzc2l2ZSByZS1yZW5kZXJzXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaE1vZGUgPSAobmV3U2VhcmNoTW9kZSkgPT4ge1xuICAgIGlmIChzdGF0ZS5zZWFyY2hNb2RlICE9PSBuZXdTZWFyY2hNb2RlKSB7XG4gICAgICBzdGF0ZS5zZWFyY2hNb2RlID0gbmV3U2VhcmNoTW9kZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnNcbiAgY29uc3QgdXBkYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzID0gKG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzKSA9PiB7XG4gICAgaWYgKCFhcnJheXNBcmVFcXVhbEJ5RnVuY3Rpb24oc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLCBuZXdFbW9qaXNXaXRoQ2F0ZWdvcmllcywgY29tcGFyZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcykpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyA9IG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzO1xuICAgIH1cbiAgfTtcblxuICAvLyBIZWxwZXJzIHVzZWQgYnkgUGlja2VyVGVtcGxhdGVcblxuICBjb25zdCB1bmljb2RlV2l0aFNraW4gPSAoZW1vamksIGN1cnJlbnRTa2luVG9uZSkgPT4gKFxuICAgIChjdXJyZW50U2tpblRvbmUgJiYgZW1vamkuc2tpbnMgJiYgZW1vamkuc2tpbnNbY3VycmVudFNraW5Ub25lXSkgfHwgZW1vamkudW5pY29kZVxuICApO1xuXG4gIGNvbnN0IGxhYmVsV2l0aFNraW4gPSAoZW1vamksIGN1cnJlbnRTa2luVG9uZSkgPT4gKFxuICAgIHVuaXEoW1xuICAgICAgKGVtb2ppLm5hbWUgfHwgdW5pY29kZVdpdGhTa2luKGVtb2ppLCBjdXJyZW50U2tpblRvbmUpKSxcbiAgICAgIGVtb2ppLmFubm90YXRpb24sXG4gICAgICAuLi4oZW1vamkuc2hvcnRjb2RlcyB8fCBFTVBUWV9BUlJBWSlcbiAgICBdLmZpbHRlcihCb29sZWFuKSkuam9pbignLCAnKVxuICApO1xuXG4gIGNvbnN0IHRpdGxlRm9yRW1vamkgPSAoZW1vamkpID0+IChcbiAgICBlbW9qaS5hbm5vdGF0aW9uIHx8IChlbW9qaS5zaG9ydGNvZGVzIHx8IEVNUFRZX0FSUkFZKS5qb2luKCcsICcpXG4gICk7XG5cbiAgY29uc3QgaGVscGVycyA9IHtcbiAgICBsYWJlbFdpdGhTa2luLCB0aXRsZUZvckVtb2ppLCB1bmljb2RlV2l0aFNraW5cbiAgfTtcbiAgY29uc3QgZXZlbnRzID0ge1xuICAgIG9uQ2xpY2tTa2luVG9uZUJ1dHRvbixcbiAgICBvbkVtb2ppQ2xpY2ssXG4gICAgb25OYXZDbGljayxcbiAgICBvbk5hdktleWRvd24sXG4gICAgb25TZWFyY2hLZXlkb3duLFxuICAgIG9uU2tpblRvbmVPcHRpb25zQ2xpY2ssXG4gICAgb25Ta2luVG9uZU9wdGlvbnNGb2N1c091dCxcbiAgICBvblNraW5Ub25lT3B0aW9uc0tleWRvd24sXG4gICAgb25Ta2luVG9uZU9wdGlvbnNLZXl1cCxcbiAgICBvblNlYXJjaElucHV0XG4gIH07XG4gIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgY2FsY3VsYXRlRW1vamlHcmlkU3R5bGVcbiAgfTtcblxuICBsZXQgZmlyc3RSZW5kZXIgPSB0cnVlO1xuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHJlbmRlcihzaGFkb3dSb290LCBzdGF0ZSwgaGVscGVycywgZXZlbnRzLCBhY3Rpb25zLCByZWZzLCBhYm9ydFNpZ25hbCwgZmlyc3RSZW5kZXIpO1xuICAgIGZpcnN0UmVuZGVyID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIERldGVybWluZSB0aGUgZW1vamkgc3VwcG9ydCBsZXZlbCAoaW4gcmVxdWVzdElkbGVDYWxsYmFjaylcbiAgLy9cblxuICAvLyBtb3VudCBsb2dpY1xuICBpZiAoIXN0YXRlLmVtb2ppVmVyc2lvbikge1xuICAgIGRldGVjdEVtb2ppU3VwcG9ydExldmVsKCkudGhlbihsZXZlbCA9PiB7XG4gICAgICAvLyBDYW4ndCBhY3R1YWxseSB0ZXN0IGVtb2ppIHN1cHBvcnQgaW4gSmVzdC9KU0RvbSwgZW1vamkgbmV2ZXIgcmVuZGVyIGluIGNvbG9yIGluIENhaXJvXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKCFsZXZlbCkge1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gc3RhdGUuaTE4bi5lbW9qaVVuc3VwcG9ydGVkTWVzc2FnZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIGRhdGFiYXNlIG9iamVjdFxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2hvdyBhIExvYWRpbmcgbWVzc2FnZSBpZiBpdCB0YWtlcyBhIGxvbmcgdGltZSwgb3Igc2hvdyBhbiBlcnJvciBpZiB0aGVyZSdzIGEgbmV0d29yay9JREIgZXJyb3JcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRhYmFzZUxvYWRpbmcgKCkge1xuICAgICAgbGV0IHNob3dpbmdMb2FkaW5nTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93aW5nTG9hZGluZ01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gc3RhdGUuaTE4bi5sb2FkaW5nTWVzc2FnZTtcbiAgICAgIH0sIFRJTUVPVVRfQkVGT1JFX0xPQURJTkdfTUVTU0FHRSk7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5yZWFkeSgpO1xuICAgICAgICBzdGF0ZS5kYXRhYmFzZUxvYWRlZCA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBzdGF0ZS5pMThuLm5ldHdvcmtFcnJvck1lc3NhZ2U7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgIGlmIChzaG93aW5nTG9hZGluZ01lc3NhZ2UpIHsgLy8gU2VlbXMgc2FmZXIgdGhhbiBjaGVja2luZyB0aGUgaTE4biBzdHJpbmcsIHdoaWNoIG1heSBjaGFuZ2VcbiAgICAgICAgICBzaG93aW5nTG9hZGluZ01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5tZXNzYWdlID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kYXRhYmFzZSkge1xuICAgICAgLyogbm8gYXdhaXQgKi9cbiAgICAgIGhhbmRsZURhdGFiYXNlTG9hZGluZygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9cbiAgLy8gR2xvYmFsIHN0eWxlcyBmb3IgdGhlIGVudGlyZSBwaWNrZXJcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnBpY2tlclN0eWxlID0gYFxuICAgICAgLS1udW0tZ3JvdXBzOiAke3N0YXRlLmdyb3Vwcy5sZW5ndGh9OyBcbiAgICAgIC0taW5kaWNhdG9yLW9wYWNpdHk6ICR7c3RhdGUuc2VhcmNoTW9kZSA/IDAgOiAxfTsgXG4gICAgICAtLW51bS1za2ludG9uZXM6ICR7TlVNX1NLSU5fVE9ORVN9O2A7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIGN1c3RvbUVtb2ppXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VzdG9tRW1vamkgJiYgc3RhdGUuZGF0YWJhc2UpIHtcbiAgICAgIHVwZGF0ZUN1c3RvbUVtb2ppKCk7IC8vIHJlLXJ1biB3aGVuZXZlciBjdXN0b21FbW9qaSBjaGFuZ2VcbiAgICB9XG4gIH0pO1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1c3RvbUVtb2ppICYmIHN0YXRlLmN1c3RvbUVtb2ppLmxlbmd0aCkge1xuICAgICAgaWYgKHN0YXRlLmdyb3VwcyAhPT0gYWxsR3JvdXBzKSB7IC8vIGRvbid0IHVwZGF0ZSB1bm5lY2Vzc2FyaWx5XG4gICAgICAgIHN0YXRlLmdyb3VwcyA9IGFsbEdyb3VwcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXRlLmdyb3VwcyAhPT0gZ3JvdXBzKSB7XG4gICAgICBpZiAoc3RhdGUuY3VycmVudEdyb3VwSW5kZXgpIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZ3JvdXAgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBcImN1c3RvbVwiICh3aGljaCBpcyBmaXJzdCksIGRlY3JlbWVudC5cbiAgICAgICAgLy8gVGhpcyBmaXhlcyB0aGUgb2RkIGNhc2Ugd2hlcmUgeW91IHNldCBjdXN0b21FbW9qaSwgdGhlbiBwaWNrIGEgY2F0ZWdvcnksIHRoZW4gdW5zZXQgY3VzdG9tRW1vamlcbiAgICAgICAgc3RhdGUuY3VycmVudEdyb3VwSW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmdyb3VwcyA9IGdyb3VwcztcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIHByZWZlcnJlZCBza2luIHRvbmVcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByZWZlcnJlZFNraW5Ub25lICgpIHtcbiAgICAgIGlmIChzdGF0ZS5kYXRhYmFzZUxvYWRlZCkge1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2tpblRvbmUgPSBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRQcmVmZXJyZWRTa2luVG9uZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZVByZWZlcnJlZFNraW5Ub25lKCk7XG4gIH0pO1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuc2tpblRvbmVzID0gQXJyYXkoTlVNX1NLSU5fVE9ORVMpLmZpbGwoKS5tYXAoKF8sIGkpID0+IGFwcGx5U2tpblRvbmUoc3RhdGUuc2tpblRvbmVFbW9qaSwgaSkpO1xuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lQnV0dG9uVGV4dCA9IHN0YXRlLnNraW5Ub25lc1tzdGF0ZS5jdXJyZW50U2tpblRvbmVdO1xuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lQnV0dG9uTGFiZWwgPSBzdGF0ZS5pMThuLnNraW5Ub25lTGFiZWwucmVwbGFjZSgne3NraW5Ub25lfScsIHN0YXRlLmkxOG4uc2tpblRvbmVzW3N0YXRlLmN1cnJlbnRTa2luVG9uZV0pO1xuICB9KTtcblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBmYXZvcml0ZXMgZW1vamlzXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0RmF2b3JpdGVFbW9qaXMgKCkge1xuICAgICAgY29uc3QgeyBkYXRhYmFzZSB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBmYXZzID0gKGF3YWl0IFByb21pc2UuYWxsKE1PU1RfQ09NTU9OTFlfVVNFRF9FTU9KSS5tYXAodW5pY29kZSA9PiAoXG4gICAgICAgIGRhdGFiYXNlLmdldEVtb2ppQnlVbmljb2RlT3JOYW1lKHVuaWNvZGUpXG4gICAgICApKSkpLmZpbHRlcihCb29sZWFuKTsgLy8gZmlsdGVyIGJlY2F1c2UgaW4gSmVzdCB0ZXN0cyB3ZSBkb24ndCBoYXZlIGFsbCB0aGUgZW1vamkgaW4gdGhlIERCXG4gICAgICBzdGF0ZS5kZWZhdWx0RmF2b3JpdGVFbW9qaXMgPSBmYXZzO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kYXRhYmFzZUxvYWRlZCkge1xuICAgICAgLyogbm8gYXdhaXQgKi8gdXBkYXRlRGVmYXVsdEZhdm9yaXRlRW1vamlzKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVDdXN0b21FbW9qaSAoKSB7XG4gICAgLy8gQ2VydGFpbiBlZmZlY3RzIGhhdmUgYW4gaW1wbGljaXQgZGVwZW5kZW5jeSBvbiBjdXN0b21FbW9qaSBzaW5jZSBpdCBhZmZlY3RzIHRoZSBkYXRhYmFzZVxuICAgIC8vIEdldHRpbmcgaXQgaGVyZSBvbiB0aGUgc3RhdGUgZW5zdXJlcyB0aGlzIGVmZmVjdCByZS1ydW5zIHdoZW4gY3VzdG9tRW1vamkgY2hhbmdlLlxuICAgIC8vIFNldHRpbmcgaXQgb24gdGhlIGRhdGFiYXNlIGlzIHBvaW50bGVzcyBidXQgcHJldmVudHMgdGhpcyBjb2RlIGZyb20gYmVpbmcgcmVtb3ZlZCBieSBhIG1pbmlmaWVyLlxuICAgIHN0YXRlLmRhdGFiYXNlLmN1c3RvbUVtb2ppID0gc3RhdGUuY3VzdG9tRW1vamkgfHwgRU1QVFlfQVJSQVk7XG4gIH1cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlcyAoKSB7XG4gICAgICB1cGRhdGVDdXN0b21FbW9qaSgpOyAvLyByZS1ydW4gd2hlbmV2ZXIgY3VzdG9tRW1vamkgY2hhbmdlXG4gICAgICBjb25zdCB7IGRhdGFiYXNlLCBkZWZhdWx0RmF2b3JpdGVFbW9qaXMsIG51bUNvbHVtbnMgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZGJGYXZvcml0ZXMgPSBhd2FpdCBkYXRhYmFzZS5nZXRUb3BGYXZvcml0ZUVtb2ppKG51bUNvbHVtbnMpO1xuICAgICAgY29uc3QgZmF2b3JpdGVzID0gYXdhaXQgc3VtbWFyaXplRW1vamlzKHVuaXFCeShbXG4gICAgICAgIC4uLmRiRmF2b3JpdGVzLFxuICAgICAgICAuLi5kZWZhdWx0RmF2b3JpdGVFbW9qaXNcbiAgICAgIF0sIF8gPT4gKF8udW5pY29kZSB8fCBfLm5hbWUpKS5zbGljZSgwLCBudW1Db2x1bW5zKSk7XG4gICAgICBzdGF0ZS5jdXJyZW50RmF2b3JpdGVzID0gZmF2b3JpdGVzO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kYXRhYmFzZUxvYWRlZCAmJiBzdGF0ZS5kZWZhdWx0RmF2b3JpdGVFbW9qaXMpIHtcbiAgICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZUZhdm9yaXRlcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9cbiAgLy8gQ2FsY3VsYXRlIHRoZSB3aWR0aCBvZiB0aGUgZW1vamkgZ3JpZC4gVGhpcyBzZXJ2ZXMgdHdvIHB1cnBvc2VzOlxuICAvLyAxKSBSZS1jYWxjdWxhdGUgdGhlIC0tbnVtLWNvbHVtbnMgdmFyIGJlY2F1c2UgaXQgbWF5IGhhdmUgY2hhbmdlZFxuICAvLyAyKSBSZS1jYWxjdWxhdGUgdGhlIHNjcm9sbGJhciB3aWR0aCBiZWNhdXNlIGl0IG1heSBoYXZlIGNoYW5nZWRcbiAgLy8gICAoaS5lLiBiZWNhdXNlIHRoZSBudW1iZXIgb2YgaXRlbXMgY2hhbmdlZClcbiAgLy8gMykgUmUtY2FsY3VsYXRlIHdoZXRoZXIgd2UncmUgaW4gUlRMIG1vZGUgb3Igbm90LlxuICAvL1xuICAvLyBUaGUgYmVuZWZpdCBvZiBkb2luZyB0aGlzIGluIG9uZSBwbGFjZSBpcyB0byBhbGlnbiB3aXRoIHJBRi9SZXNpemVPYnNlcnZlclxuICAvLyBhbmQgZG8gYWxsIHRoZSBjYWxjdWxhdGlvbnMgaW4gb25lIGdvLiBSVEwgdnMgTFRSIGlzIG5vdCBzdHJpY3RseSB3aWR0aC1yZWxhdGVkLFxuICAvLyBidXQgc2luY2Ugd2UncmUgYWxyZWFkeSByZWFkaW5nIHRoZSBzdHlsZSBoZXJlLCBhbmQgc2luY2UgaXQncyBhbHJlYWR5IGFsaWduZWQgd2l0aFxuICAvLyB0aGUgckFGIGxvb3AsIHRoaXMgaXMgdGhlIG1vc3QgYXBwcm9wcmlhdGUgcGxhY2UgdG8gZG8gaXQgcGVyZi13aXNlLlxuICAvL1xuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUVtb2ppR3JpZFN0eWxlIChub2RlKSB7XG4gICAgY2FsY3VsYXRlV2lkdGgobm9kZSwgYWJvcnRTaWduYWwsIHdpZHRoID0+IHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICB7IC8vIGpzZG9tIHRocm93cyBlcnJvcnMgZm9yIHRoaXMga2luZCBvZiBmYW5jeSBzdHVmZlxuICAgICAgICAvLyByZWFkIGFsbCB0aGUgc3R5bGUvbGF5b3V0IGNhbGN1bGF0aW9ucyB3ZSBuZWVkIHRvIG1ha2VcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHJlZnMucm9vdEVsZW1lbnQpO1xuICAgICAgICBjb25zdCBuZXdOdW1Db2x1bW5zID0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1udW0tY29sdW1ucycpLCAxMCk7XG4gICAgICAgIGNvbnN0IG5ld0lzUnRsID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xuICAgICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IG5vZGUucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY29uc3QgbmV3U2Nyb2xsYmFyV2lkdGggPSBwYXJlbnRXaWR0aCAtIHdpZHRoO1xuXG4gICAgICAgIC8vIHdyaXRlIHRvIHN0YXRlIHZhcmlhYmxlc1xuICAgICAgICBzdGF0ZS5udW1Db2x1bW5zID0gbmV3TnVtQ29sdW1ucztcbiAgICAgICAgc3RhdGUuc2Nyb2xsYmFyV2lkdGggPSBuZXdTY3JvbGxiYXJXaWR0aDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICBzdGF0ZS5pc1J0bCA9IG5ld0lzUnRsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBjdXJyZW50RW1vamlzLiBDaGVjayBmb3IgaW52YWxpZCBaV0ogcmVuZGVyaW5nc1xuICAvLyAoaS5lLiBkb3VibGUgZW1vamkpLlxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRW1vamlzICgpIHtcbiAgICAgIGNvbnN0IHsgc2VhcmNoVGV4dCwgY3VycmVudEdyb3VwLCBkYXRhYmFzZUxvYWRlZCwgY3VzdG9tRW1vamkgfSA9IHN0YXRlO1xuICAgICAgaWYgKCFkYXRhYmFzZUxvYWRlZCkge1xuICAgICAgICBzdGF0ZS5jdXJyZW50RW1vamlzID0gW107XG4gICAgICAgIHN0YXRlLnNlYXJjaE1vZGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoVGV4dC5sZW5ndGggPj0gTUlOX1NFQVJDSF9URVhUX0xFTkdUSCkge1xuICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBhd2FpdCBnZXRFbW9qaXNCeVNlYXJjaFF1ZXJ5KHNlYXJjaFRleHQpO1xuICAgICAgICBpZiAoc3RhdGUuc2VhcmNoVGV4dCA9PT0gc2VhcmNoVGV4dCkgeyAvLyBpZiB0aGUgc2l0dWF0aW9uIGNoYW5nZXMgYXN5bmNocm9ub3VzbHksIGRvIG5vdCB1cGRhdGVcbiAgICAgICAgICB1cGRhdGVDdXJyZW50RW1vamlzKG5ld0Vtb2ppcyk7XG4gICAgICAgICAgdXBkYXRlU2VhcmNoTW9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gZGF0YWJhc2UgaXMgbG9hZGVkIGFuZCB3ZSdyZSBub3QgaW4gc2VhcmNoIG1vZGUsIHNvIHdlJ3JlIGluIG5vcm1hbCBjYXRlZ29yeSBtb2RlXG4gICAgICAgIGNvbnN0IHsgaWQ6IGN1cnJlbnRHcm91cElkIH0gPSBjdXJyZW50R3JvdXA7XG4gICAgICAgIC8vIGF2b2lkIHJhY2UgY29uZGl0aW9uIHdoZXJlIGN1cnJlbnRHcm91cElkIGlzIC0xIGFuZCBjdXN0b21FbW9qaSBpcyB1bmRlZmluZWQvZW1wdHlcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cElkICE9PSAtMSB8fCAoY3VzdG9tRW1vamkgJiYgY3VzdG9tRW1vamkubGVuZ3RoKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0Vtb2ppcyA9IGF3YWl0IGdldEVtb2ppc0J5R3JvdXAoY3VycmVudEdyb3VwSWQpO1xuICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50R3JvdXAuaWQgPT09IGN1cnJlbnRHcm91cElkKSB7IC8vIGlmIHRoZSBzaXR1YXRpb24gY2hhbmdlcyBhc3luY2hyb25vdXNseSwgZG8gbm90IHVwZGF0ZVxuICAgICAgICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgICAgICAgdXBkYXRlU2VhcmNoTW9kZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogbm8gYXdhaXQgKi8gdXBkYXRlRW1vamlzKCk7XG4gIH0pO1xuXG4gIC8vIFNvbWUgZW1vamlzIGhhdmUgdGhlaXIgbGlnYXR1cmVzIHJlbmRlcmVkIGFzIHR3byBvciBtb3JlIGNvbnNlY3V0aXZlIGVtb2ppc1xuICAvLyBXZSB3YW50IHRvIHRyZWF0IHRoZXNlIHRoZSBzYW1lIGFzIHVuc3VwcG9ydGVkIGVtb2ppcywgc28gd2UgY29tcGFyZSB0aGVpclxuICAvLyB3aWR0aHMgYWdhaW5zdCB0aGUgYmFzZWxpbmUgd2lkdGhzIGFuZCByZW1vdmUgdGhlbSBhcyBuZWNlc3NhcnlcbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRFbW9qaXMsIGVtb2ppVmVyc2lvbiB9ID0gc3RhdGU7XG4gICAgY29uc3QgendqRW1vamlzVG9DaGVjayA9IGN1cnJlbnRFbW9qaXNcbiAgICAgIC5maWx0ZXIoZW1vamkgPT4gZW1vamkudW5pY29kZSkgLy8gZmlsdGVyIGN1c3RvbSBlbW9qaVxuICAgICAgLmZpbHRlcihlbW9qaSA9PiBoYXNad2ooZW1vamkpICYmICFzdXBwb3J0ZWRad2pFbW9qaXMuaGFzKGVtb2ppLnVuaWNvZGUpKTtcbiAgICBpZiAoIWVtb2ppVmVyc2lvbiAmJiB6d2pFbW9qaXNUb0NoZWNrLmxlbmd0aCkge1xuICAgICAgLy8gcmVuZGVyIG5vdywgY2hlY2sgdGhlaXIgbGVuZ3RoIGxhdGVyXG4gICAgICB1cGRhdGVDdXJyZW50RW1vamlzKGN1cnJlbnRFbW9qaXMpO1xuICAgICAgckFGKCgpID0+IGNoZWNrWndqU3VwcG9ydEFuZFVwZGF0ZSh6d2pFbW9qaXNUb0NoZWNrKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0Vtb2ppcyA9IGVtb2ppVmVyc2lvbiA/IGN1cnJlbnRFbW9qaXMgOiBjdXJyZW50RW1vamlzLmZpbHRlcihpc1p3alN1cHBvcnRlZCk7XG4gICAgICB1cGRhdGVDdXJyZW50RW1vamlzKG5ld0Vtb2ppcyk7XG4gICAgICAvLyBSZXNldCBzY3JvbGwgdG9wIHRvIDAgd2hlbiBlbW9qaXMgY2hhbmdlXG4gICAgICByQUYoKCkgPT4gcmVzZXRTY3JvbGxUb3BJZlBvc3NpYmxlKHJlZnMudGFicGFuZWxFbGVtZW50KSk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBjaGVja1p3alN1cHBvcnRBbmRVcGRhdGUgKHp3akVtb2ppc1RvQ2hlY2spIHtcbiAgICBjaGVja1p3alN1cHBvcnQoendqRW1vamlzVG9DaGVjaywgcmVmcy5iYXNlbGluZUVtb2ppLCBlbW9qaVRvRG9tTm9kZSk7XG4gICAgLy8gZm9yY2UgdXBkYXRlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtYXNzaWduXG4gICAgc3RhdGUuY3VycmVudEVtb2ppcyA9IHN0YXRlLmN1cnJlbnRFbW9qaXM7XG4gIH1cblxuICBmdW5jdGlvbiBpc1p3alN1cHBvcnRlZCAoZW1vamkpIHtcbiAgICByZXR1cm4gIWVtb2ppLnVuaWNvZGUgfHwgIWhhc1p3aihlbW9qaSkgfHwgc3VwcG9ydGVkWndqRW1vamlzLmdldChlbW9qaS51bmljb2RlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmlsdGVyRW1vamlzQnlWZXJzaW9uIChlbW9qaXMpIHtcbiAgICBjb25zdCBlbW9qaVN1cHBvcnRMZXZlbCA9IHN0YXRlLmVtb2ppVmVyc2lvbiB8fCBhd2FpdCBkZXRlY3RFbW9qaVN1cHBvcnRMZXZlbCgpO1xuICAgIC8vICF2ZXJzaW9uIGNvcnJlc3BvbmRzIHRvIGN1c3RvbSBlbW9qaVxuICAgIHJldHVybiBlbW9qaXMuZmlsdGVyKCh7IHZlcnNpb24gfSkgPT4gIXZlcnNpb24gfHwgdmVyc2lvbiA8PSBlbW9qaVN1cHBvcnRMZXZlbClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZUVtb2ppcyAoZW1vamlzKSB7XG4gICAgcmV0dXJuIHN1bW1hcml6ZUVtb2ppc0ZvclVJKGVtb2ppcywgc3RhdGUuZW1vamlWZXJzaW9uIHx8IGF3YWl0IGRldGVjdEVtb2ppU3VwcG9ydExldmVsKCkpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRFbW9qaXNCeUdyb3VwIChncm91cCkge1xuICAgIC8vIC0xIGlzIGN1c3RvbSBlbW9qaVxuICAgIGNvbnN0IGVtb2ppID0gZ3JvdXAgPT09IC0xID8gc3RhdGUuY3VzdG9tRW1vamkgOiBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRFbW9qaUJ5R3JvdXAoZ3JvdXApO1xuICAgIHJldHVybiBzdW1tYXJpemVFbW9qaXMoYXdhaXQgZmlsdGVyRW1vamlzQnlWZXJzaW9uKGVtb2ppKSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppc0J5U2VhcmNoUXVlcnkgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHN1bW1hcml6ZUVtb2ppcyhhd2FpdCBmaWx0ZXJFbW9qaXNCeVZlcnNpb24oYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5KHF1ZXJ5KSkpXG4gIH1cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICB9KTtcblxuICAvL1xuICAvLyBEZXJpdmUgY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzIGZyb20gY3VycmVudEVtb2ppcy4gVGhpcyBpcyBhbHdheXMgZG9uZSBldmVuIGlmIHRoZXJlXG4gIC8vIGFyZSBubyBjYXRlZ29yaWVzLCBiZWNhdXNlIGl0J3MganVzdCBlYXNpZXIgdG8gY29kZSB0aGUgSFRNTCB0aGlzIHdheS5cbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyAoKSB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGUsIGN1cnJlbnRFbW9qaXMgfSA9IHN0YXRlO1xuICAgICAgaWYgKHNlYXJjaE1vZGUpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgICAgICBlbW9qaXM6IGN1cnJlbnRFbW9qaXNcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhdGVnb3JpZXNUb0Vtb2ppID0gbmV3IE1hcCgpO1xuICAgICAgZm9yIChjb25zdCBlbW9qaSBvZiBjdXJyZW50RW1vamlzKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZW1vamkuY2F0ZWdvcnkgfHwgJyc7XG4gICAgICAgIGxldCBlbW9qaXMgPSBjYXRlZ29yaWVzVG9FbW9qaS5nZXQoY2F0ZWdvcnkpO1xuICAgICAgICBpZiAoIWVtb2ppcykge1xuICAgICAgICAgIGVtb2ppcyA9IFtdO1xuICAgICAgICAgIGNhdGVnb3JpZXNUb0Vtb2ppLnNldChjYXRlZ29yeSwgZW1vamlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbW9qaXMucHVzaChlbW9qaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLmNhdGVnb3JpZXNUb0Vtb2ppLmVudHJpZXMoKV1cbiAgICAgICAgLm1hcCgoW2NhdGVnb3J5LCBlbW9qaXNdKSA9PiAoeyBjYXRlZ29yeSwgZW1vamlzIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gc3RhdGUuY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nKGEuY2F0ZWdvcnksIGIuY2F0ZWdvcnkpKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzID0gY2FsY3VsYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzKCk7XG4gICAgdXBkYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzKG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzKTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gSGFuZGxlIGFjdGl2ZSBzZWFyY2ggaXRlbSAoaS5lLiBwcmVzc2luZyB1cCBvciBkb3duIHdoaWxlIHNlYXJjaGluZylcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1JZCA9IHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gIT09IC0xICYmIHN0YXRlLmN1cnJlbnRFbW9qaXNbc3RhdGUuYWN0aXZlU2VhcmNoSXRlbV0uaWQ7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIHRoZSBzZWFyY2ggaW5wdXRcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgcmF3U2VhcmNoVGV4dCB9ID0gc3RhdGU7XG4gICAgcklDKCgpID0+IHtcbiAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSAocmF3U2VhcmNoVGV4dCB8fCAnJykudHJpbSgpOyAvLyBkZWZlciB0byBhdm9pZCBpbnB1dCBkZWxheXMsIHBsdXMgd2UgY2FuIHRyaW0gaGVyZVxuICAgICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IC0xO1xuICAgIH0pO1xuICB9KTtcblxuICBmdW5jdGlvbiBvblNlYXJjaEtleWRvd24gKGV2ZW50KSB7XG4gICAgaWYgKCFzdGF0ZS5zZWFyY2hNb2RlIHx8ICFzdGF0ZS5jdXJyZW50RW1vamlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ29Ub05leHRPclByZXZpb3VzID0gKHByZXZpb3VzKSA9PiB7XG4gICAgICBoYWx0KGV2ZW50KTtcbiAgICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPSBpbmNyZW1lbnRPckRlY3JlbWVudChwcmV2aW91cywgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSwgc3RhdGUuY3VycmVudEVtb2ppcyk7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICByZXR1cm4gZ29Ub05leHRPclByZXZpb3VzKGZhbHNlKVxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHJldHVybiBnb1RvTmV4dE9yUHJldmlvdXModHJ1ZSlcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPT09IC0xKSB7XG4gICAgICAgICAgLy8gZm9jdXMgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgbGlzdCBzaW5jZSB0aGUgbGlzdCBtdXN0IGJlIG5vbi1lbXB0eSBhdCB0aGlzIHBvaW50IChpdCdzIHZlcmlmaWVkIGFib3ZlKVxuICAgICAgICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPSAwO1xuICAgICAgICB9IGVsc2UgeyAvLyB0aGVyZSBpcyBhbHJlYWR5IGFuIGFjdGl2ZSBzZWFyY2ggaXRlbVxuICAgICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICAgIHJldHVybiBjbGlja0Vtb2ppKHN0YXRlLmN1cnJlbnRFbW9qaXNbc3RhdGUuYWN0aXZlU2VhcmNoSXRlbV0uaWQpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGUgdXNlciBpbnB1dCBvbiBuYXZcbiAgLy9cblxuICBmdW5jdGlvbiBvbk5hdkNsaWNrIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBjb25zdCBjbG9zZXN0VGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5uYXYtYnV0dG9uJyk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjbG9zZXN0VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIH1cbiAgICBjb25zdCBncm91cElkID0gcGFyc2VJbnQoY2xvc2VzdFRhcmdldC5kYXRhc2V0Lmdyb3VwSWQsIDEwKTtcbiAgICByZWZzLnNlYXJjaEVsZW1lbnQudmFsdWUgPSAnJzsgLy8gY2xlYXIgc2VhcmNoIGJveCBpbnB1dFxuICAgIHN0YXRlLnJhd1NlYXJjaFRleHQgPSAnJztcbiAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gJyc7XG4gICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IC0xO1xuICAgIHN0YXRlLmN1cnJlbnRHcm91cEluZGV4ID0gc3RhdGUuZ3JvdXBzLmZpbmRJbmRleChfID0+IF8uaWQgPT09IGdyb3VwSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25OYXZLZXlkb3duIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0LCBrZXkgfSA9IGV2ZW50O1xuXG4gICAgY29uc3QgZG9Gb2N1cyA9IGVsID0+IHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICByZXR1cm4gZG9Gb2N1cyh0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIGFuIGVtb2ppXG4gIC8vXG5cbiAgYXN5bmMgZnVuY3Rpb24gY2xpY2tFbW9qaSAodW5pY29kZU9yTmFtZSkge1xuICAgIGNvbnN0IGVtb2ppID0gYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0RW1vamlCeVVuaWNvZGVPck5hbWUodW5pY29kZU9yTmFtZSk7XG4gICAgY29uc3QgZW1vamlTdW1tYXJ5ID0gWy4uLnN0YXRlLmN1cnJlbnRFbW9qaXMsIC4uLnN0YXRlLmN1cnJlbnRGYXZvcml0ZXNdXG4gICAgICAuZmluZChfID0+IChfLmlkID09PSB1bmljb2RlT3JOYW1lKSk7XG4gICAgY29uc3Qgc2tpblRvbmVkVW5pY29kZSA9IGVtb2ppU3VtbWFyeS51bmljb2RlICYmIHVuaWNvZGVXaXRoU2tpbihlbW9qaVN1bW1hcnksIHN0YXRlLmN1cnJlbnRTa2luVG9uZSk7XG4gICAgYXdhaXQgc3RhdGUuZGF0YWJhc2UuaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50KHVuaWNvZGVPck5hbWUpO1xuICAgIGZpcmVFdmVudCgnZW1vamktY2xpY2snLCB7XG4gICAgICBlbW9qaSxcbiAgICAgIHNraW5Ub25lOiBzdGF0ZS5jdXJyZW50U2tpblRvbmUsXG4gICAgICAuLi4oc2tpblRvbmVkVW5pY29kZSAmJiB7IHVuaWNvZGU6IHNraW5Ub25lZFVuaWNvZGUgfSksXG4gICAgICAuLi4oZW1vamlTdW1tYXJ5Lm5hbWUgJiYgeyBuYW1lOiBlbW9qaVN1bW1hcnkubmFtZSB9KVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25FbW9qaUNsaWNrIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Vtb2ppJykpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBoYWx0KGV2ZW50KTtcbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZC5zdWJzdHJpbmcoNCk7IC8vIHJlcGxhY2UgJ2Vtby0nIG9yICdmYXYtJyBwcmVmaXhcblxuICAgIC8qIG5vIGF3YWl0ICovIGNsaWNrRW1vamkoaWQpO1xuICB9XG5cbiAgLy9cbiAgLy8gSGFuZGxlIHVzZXIgaW5wdXQgb24gdGhlIHNraW50b25lIHBpY2tlclxuICAvL1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVNraW5Ub25lIChza2luVG9uZSkge1xuICAgIHN0YXRlLmN1cnJlbnRTa2luVG9uZSA9IHNraW5Ub25lO1xuICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSBmYWxzZTtcbiAgICBmb2N1cygnc2tpbnRvbmUtYnV0dG9uJyk7XG4gICAgZmlyZUV2ZW50KCdza2luLXRvbmUtY2hhbmdlJywgeyBza2luVG9uZSB9KTtcbiAgICAvKiBubyBhd2FpdCAqLyBzdGF0ZS5kYXRhYmFzZS5zZXRQcmVmZXJyZWRTa2luVG9uZShza2luVG9uZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0NsaWNrIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IGlkIH0gfSA9IGV2ZW50O1xuICAgIGNvbnN0IG1hdGNoID0gaWQgJiYgaWQubWF0Y2goL15za2ludG9uZS0oXFxkKS8pOyAvLyBza2ludG9uZSBvcHRpb24gZm9ybWF0XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFtYXRjaCkgeyAvLyBub3QgYSBza2ludG9uZSBvcHRpb25cbiAgICAgIHJldHVybiAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgfVxuICAgIGhhbHQoZXZlbnQpO1xuICAgIGNvbnN0IHNraW5Ub25lID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTsgLy8gcmVtb3ZlICdza2ludG9uZS0nIHByZWZpeFxuICAgIGNoYW5nZVNraW5Ub25lKHNraW5Ub25lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tTa2luVG9uZUJ1dHRvbiAoZXZlbnQpIHtcbiAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gIXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQ7XG4gICAgc3RhdGUuYWN0aXZlU2tpblRvbmUgPSBzdGF0ZS5jdXJyZW50U2tpblRvbmU7XG4gICAgLy8gdGhpcyBzaG91bGQgYWx3YXlzIGJlIHRydWUsIHNpbmNlIHRoZSBidXR0b24gaXMgb2JzY3VyZWQgYnkgdGhlIGxpc3Rib3gsIHNvIHRoaXMgYGlmYCBpcyBqdXN0IHRvIGJlIHN1cmVcbiAgICBpZiAoc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgaGFsdChldmVudCk7XG4gICAgICByQUYoKCkgPT4gZm9jdXMoJ3NraW50b25lLWxpc3QnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVG8gbWFrZSB0aGUgYW5pbWF0aW9uIG5pY2VyLCBjaGFuZ2UgdGhlIHotaW5kZXggb2YgdGhlIHNraW50b25lIHBpY2tlciBidXR0b25cbiAgLy8gKmFmdGVyKiB0aGUgYW5pbWF0aW9uIGhhcyBwbGF5ZWQuIFRoaXMgbWFrZXMgaXQgYXBwZWFyIHRoYXQgdGhlIHBpY2tlciBib3hcbiAgLy8gaXMgZXhwYW5kaW5nIFwiYmVsb3dcIiB0aGUgYnV0dG9uXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIHJlZnMuc2tpblRvbmVEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb24gPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWRBZnRlckFuaW1hdGlvbiA9IGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0tleWRvd24gKGV2ZW50KSB7XG4gICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZVNraW5Ub25lID0gYXN5bmMgbmV4dFNraW5Ub25lID0+IHtcbiAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgc3RhdGUuYWN0aXZlU2tpblRvbmUgPSBuZXh0U2tpblRvbmU7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKGluY3JlbWVudE9yRGVjcmVtZW50KHRydWUsIHN0YXRlLmFjdGl2ZVNraW5Ub25lLCBzdGF0ZS5za2luVG9uZXMpKVxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKGluY3JlbWVudE9yRGVjcmVtZW50KGZhbHNlLCBzdGF0ZS5hY3RpdmVTa2luVG9uZSwgc3RhdGUuc2tpblRvbmVzKSlcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICByZXR1cm4gY2hhbmdlQWN0aXZlU2tpblRvbmUoMClcbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZShzdGF0ZS5za2luVG9uZXMubGVuZ3RoIC0gMSlcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgLy8gZW50ZXIgb24ga2V5ZG93biwgc3BhY2Ugb24ga2V5dXAuIHRoaXMgaXMganVzdCBob3cgYnJvd3NlcnMgd29yayBmb3IgYnV0dG9uc1xuICAgICAgICAvLyBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvdzNjLXdhaS1pZy8yMDE5SmFuTWFyLzAwODYuaHRtbFxuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGNoYW5nZVNraW5Ub25lKHN0YXRlLmFjdGl2ZVNraW5Ub25lKVxuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvY3VzKCdza2ludG9uZS1idXR0b24nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2tpblRvbmVPcHRpb25zS2V5dXAgKGV2ZW50KSB7XG4gICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgLy8gZW50ZXIgb24ga2V5ZG93biwgc3BhY2Ugb24ga2V5dXAuIHRoaXMgaXMganVzdCBob3cgYnJvd3NlcnMgd29yayBmb3IgYnV0dG9uc1xuICAgICAgICAvLyBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvdzNjLXdhaS1pZy8yMDE5SmFuTWFyLzAwODYuaHRtbFxuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGNoYW5nZVNraW5Ub25lKHN0YXRlLmFjdGl2ZVNraW5Ub25lKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU2tpblRvbmVPcHRpb25zRm9jdXNPdXQgKGV2ZW50KSB7XG4gICAgLy8gT24gYmx1ciBvdXRzaWRlIG9mIHRoZSBza2ludG9uZSBsaXN0Ym94LCBjb2xsYXBzZSB0aGUgc2tpbnRvbmUgcGlja2VyLlxuICAgIGNvbnN0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG4gICAgLy8gVGhlIGBlbHNlYCBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFyZWxhdGVkVGFyZ2V0IHx8IHJlbGF0ZWRUYXJnZXQuaWQgIT09ICdza2ludG9uZS1saXN0Jykge1xuICAgICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2VhcmNoSW5wdXQgKGV2ZW50KSB7XG4gICAgc3RhdGUucmF3U2VhcmNoVGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJHNldCAobmV3U3RhdGUpIHtcbiAgICAgIGFzc2lnbihzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH0sXG4gICAgJGRlc3Ryb3kgKCkge1xuICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfREFUQV9TT1VSQ0UgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbW9qaS1waWNrZXItZWxlbWVudC1kYXRhQF4xL2VuL2Vtb2ppYmFzZS9kYXRhLmpzb24nO1xuY29uc3QgREVGQVVMVF9MT0NBTEUgPSAnZW4nO1xuXG52YXIgZW5JMThuID0ge1xuICBjYXRlZ29yaWVzTGFiZWw6ICdDYXRlZ29yaWVzJyxcbiAgZW1vamlVbnN1cHBvcnRlZE1lc3NhZ2U6ICdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjb2xvciBlbW9qaS4nLFxuICBmYXZvcml0ZXNMYWJlbDogJ0Zhdm9yaXRlcycsXG4gIGxvYWRpbmdNZXNzYWdlOiAnTG9hZGluZ+KApicsXG4gIG5ldHdvcmtFcnJvck1lc3NhZ2U6ICdDb3VsZCBub3QgbG9hZCBlbW9qaS4nLFxuICByZWdpb25MYWJlbDogJ0Vtb2ppIHBpY2tlcicsXG4gIHNlYXJjaERlc2NyaXB0aW9uOiAnV2hlbiBzZWFyY2ggcmVzdWx0cyBhcmUgYXZhaWxhYmxlLCBwcmVzcyB1cCBvciBkb3duIHRvIHNlbGVjdCBhbmQgZW50ZXIgdG8gY2hvb3NlLicsXG4gIHNlYXJjaExhYmVsOiAnU2VhcmNoJyxcbiAgc2VhcmNoUmVzdWx0c0xhYmVsOiAnU2VhcmNoIHJlc3VsdHMnLFxuICBza2luVG9uZURlc2NyaXB0aW9uOiAnV2hlbiBleHBhbmRlZCwgcHJlc3MgdXAgb3IgZG93biB0byBzZWxlY3QgYW5kIGVudGVyIHRvIGNob29zZS4nLFxuICBza2luVG9uZUxhYmVsOiAnQ2hvb3NlIGEgc2tpbiB0b25lIChjdXJyZW50bHkge3NraW5Ub25lfSknLFxuICBza2luVG9uZXNMYWJlbDogJ1NraW4gdG9uZXMnLFxuICBza2luVG9uZXM6IFtcbiAgICAnRGVmYXVsdCcsXG4gICAgJ0xpZ2h0JyxcbiAgICAnTWVkaXVtLUxpZ2h0JyxcbiAgICAnTWVkaXVtJyxcbiAgICAnTWVkaXVtLURhcmsnLFxuICAgICdEYXJrJ1xuICBdLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgICAnc21pbGV5cy1lbW90aW9uJzogJ1NtaWxleXMgYW5kIGVtb3RpY29ucycsXG4gICAgJ3Blb3BsZS1ib2R5JzogJ1Blb3BsZSBhbmQgYm9keScsXG4gICAgJ2FuaW1hbHMtbmF0dXJlJzogJ0FuaW1hbHMgYW5kIG5hdHVyZScsXG4gICAgJ2Zvb2QtZHJpbmsnOiAnRm9vZCBhbmQgZHJpbmsnLFxuICAgICd0cmF2ZWwtcGxhY2VzJzogJ1RyYXZlbCBhbmQgcGxhY2VzJyxcbiAgICBhY3Rpdml0aWVzOiAnQWN0aXZpdGllcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJ1xuICB9XG59O1xuXG5jb25zdCBQUk9QUyA9IFtcbiAgJ2N1c3RvbUVtb2ppJyxcbiAgJ2N1c3RvbUNhdGVnb3J5U29ydGluZycsXG4gICdkYXRhYmFzZScsXG4gICdkYXRhU291cmNlJyxcbiAgJ2kxOG4nLFxuICAnbG9jYWxlJyxcbiAgJ3NraW5Ub25lRW1vamknLFxuICAnZW1vamlWZXJzaW9uJ1xuXTtcblxuLy8gU3R5bGVzIGluamVjdGVkIG91cnNlbHZlcywgc28gd2UgY2FuIGRlY2xhcmUgdGhlIEZPTlRfRkFNSUxZIHZhcmlhYmxlIGluIG9uZSBwbGFjZVxuY29uc3QgRVhUUkFfU1RZTEVTID0gYDpob3N0ey0tZW1vamktZm9udC1mYW1pbHk6JHtGT05UX0ZBTUlMWX19YDtcblxuY2xhc3MgUGlja2VyRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBcIjpob3N0ey0tZW1vamktc2l6ZToxLjM3NXJlbTstLWVtb2ppLXBhZGRpbmc6MC41cmVtOy0tY2F0ZWdvcnktZW1vamktc2l6ZTp2YXIoLS1lbW9qaS1zaXplKTstLWNhdGVnb3J5LWVtb2ppLXBhZGRpbmc6dmFyKC0tZW1vamktcGFkZGluZyk7LS1pbmRpY2F0b3ItaGVpZ2h0OjNweDstLWlucHV0LWJvcmRlci1yYWRpdXM6MC41cmVtOy0taW5wdXQtYm9yZGVyLXNpemU6MXB4Oy0taW5wdXQtZm9udC1zaXplOjFyZW07LS1pbnB1dC1saW5lLWhlaWdodDoxLjU7LS1pbnB1dC1wYWRkaW5nOjAuMjVyZW07LS1udW0tY29sdW1uczo4Oy0tb3V0bGluZS1zaXplOjJweDstLWJvcmRlci1zaXplOjFweDstLXNraW50b25lLWJvcmRlci1yYWRpdXM6MXJlbTstLWNhdGVnb3J5LWZvbnQtc2l6ZToxcmVtO2Rpc3BsYXk6ZmxleDt3aWR0aDptaW4tY29udGVudDtoZWlnaHQ6NDAwcHh9Omhvc3QsOmhvc3QoLmxpZ2h0KXtjb2xvci1zY2hlbWU6bGlnaHQ7LS1iYWNrZ3JvdW5kOiNmZmY7LS1ib3JkZXItY29sb3I6I2UwZTBlMDstLWluZGljYXRvci1jb2xvcjojMzg1YWMxOy0taW5wdXQtYm9yZGVyLWNvbG9yOiM5OTk7LS1pbnB1dC1mb250LWNvbG9yOiMxMTE7LS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjojOTk5Oy0tb3V0bGluZS1jb2xvcjojOTk5Oy0tY2F0ZWdvcnktZm9udC1jb2xvcjojMTExOy0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiNlNmU2ZTY7LS1idXR0b24taG92ZXItYmFja2dyb3VuZDojZDlkOWQ5fTpob3N0KC5kYXJrKXtjb2xvci1zY2hlbWU6ZGFyazstLWJhY2tncm91bmQ6IzIyMjstLWJvcmRlci1jb2xvcjojNDQ0Oy0taW5kaWNhdG9yLWNvbG9yOiM1MzczZWM7LS1pbnB1dC1ib3JkZXItY29sb3I6I2NjYzstLWlucHV0LWZvbnQtY29sb3I6I2VmZWZlZjstLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiNjY2M7LS1vdXRsaW5lLWNvbG9yOiNmZmY7LS1jYXRlZ29yeS1mb250LWNvbG9yOiNlZmVmZWY7LS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6IzU1NTU1NTstLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiM0ODQ4NDh9QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXs6aG9zdHtjb2xvci1zY2hlbWU6ZGFyazstLWJhY2tncm91bmQ6IzIyMjstLWJvcmRlci1jb2xvcjojNDQ0Oy0taW5kaWNhdG9yLWNvbG9yOiM1MzczZWM7LS1pbnB1dC1ib3JkZXItY29sb3I6I2NjYzstLWlucHV0LWZvbnQtY29sb3I6I2VmZWZlZjstLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiNjY2M7LS1vdXRsaW5lLWNvbG9yOiNmZmY7LS1jYXRlZ29yeS1mb250LWNvbG9yOiNlZmVmZWY7LS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6IzU1NTU1NTstLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiM0ODQ4NDh9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9YnV0dG9ue21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtib3gtc2hhZG93Om5vbmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH1pbnB1dHtwYWRkaW5nOjA7bWFyZ2luOjA7bGluZS1oZWlnaHQ6MS4xNTtmb250LWZhbWlseTppbmhlcml0fWlucHV0W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Zm9jdXN7b3V0bGluZTp2YXIoLS1vdXRsaW5lLWNvbG9yKSBzb2xpZCB2YXIoLS1vdXRsaW5lLXNpemUpO291dGxpbmUtb2Zmc2V0OmNhbGMoLTEqdmFyKC0tb3V0bGluZS1zaXplKSl9Omhvc3QoW2RhdGEtanMtZm9jdXMtdmlzaWJsZV0pIDpmb2N1czpub3QoW2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZF0pe291dGxpbmU6MH06Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKXtvdXRsaW5lOjB9LmhpZGUtZm9jdXN7b3V0bGluZTowfSp7Ym94LXNpemluZzpib3JkZXItYm94fS5waWNrZXJ7Y29udGFpbjpjb250ZW50O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXI6dmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47LS10b3RhbC1lbW9qaS1zaXplOmNhbGModmFyKC0tZW1vamktc2l6ZSkgKyAoMiAqIHZhcigtLWVtb2ppLXBhZGRpbmcpKSk7LS10b3RhbC1jYXRlZ29yeS1lbW9qaS1zaXplOmNhbGModmFyKC0tY2F0ZWdvcnktZW1vamktc2l6ZSkgKyAoMiAqIHZhcigtLWNhdGVnb3J5LWVtb2ppLXBhZGRpbmcpKSl9LnNyLW9ubHl7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwwLDAsMCk7Ym9yZGVyOjB9LmhpZGRlbntvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uYWJzLXBvc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LmdvbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc2tpbnRvbmUtYnV0dG9uLXdyYXBwZXIsLnNraW50b25lLWxpc3R7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTt6LWluZGV4OjN9LnNraW50b25lLWJ1dHRvbi13cmFwcGVyLmV4cGFuZGVke3otaW5kZXg6MX0uc2tpbnRvbmUtbGlzdHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1pbmxpbmUtZW5kOjA7dG9wOjA7ei1pbmRleDoyO292ZXJmbG93OnZpc2libGU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOjAgMCB2YXIoLS1za2ludG9uZS1ib3JkZXItcmFkaXVzKSB2YXIoLS1za2ludG9uZS1ib3JkZXItcmFkaXVzKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIDB9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LnNraW50b25lLWxpc3R7dHJhbnNpdGlvbi1kdXJhdGlvbjouMDAxc319QHN1cHBvcnRzIG5vdCAoaW5zZXQtaW5saW5lLWVuZDowKXsuc2tpbnRvbmUtbGlzdHtyaWdodDowfX0uc2tpbnRvbmUtbGlzdC5uby1hbmltYXRle3RyYW5zaXRpb246bm9uZX0udGFicGFuZWx7b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTttaW4taGVpZ2h0OjA7ZmxleDoxO2NvbnRhaW46Y29udGVudH0uZW1vamktbWVudXtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCh2YXIoLS1udW0tY29sdW1ucyksdmFyKC0tdG90YWwtZW1vamktc2l6ZSkpO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDt3aWR0aDoxMDAlfS5jYXRlZ29yeXtwYWRkaW5nOnZhcigtLWVtb2ppLXBhZGRpbmcpO2ZvbnQtc2l6ZTp2YXIoLS1jYXRlZ29yeS1mb250LXNpemUpO2NvbG9yOnZhcigtLWNhdGVnb3J5LWZvbnQtY29sb3IpfS5jdXN0b20tZW1vamksLmVtb2ppLGJ1dHRvbi5lbW9qaXtoZWlnaHQ6dmFyKC0tdG90YWwtZW1vamktc2l6ZSk7d2lkdGg6dmFyKC0tdG90YWwtZW1vamktc2l6ZSl9LmVtb2ppLGJ1dHRvbi5lbW9qaXtmb250LXNpemU6dmFyKC0tZW1vamktc2l6ZSk7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6MTAwJTtsaW5lLWhlaWdodDoxO292ZXJmbG93OmhpZGRlbjtmb250LWZhbWlseTp2YXIoLS1lbW9qaS1mb250LWZhbWlseSk7Y3Vyc29yOnBvaW50ZXJ9QG1lZGlhIChob3Zlcjpob3ZlcikgYW5kIChwb2ludGVyOmZpbmUpey5lbW9qaTpob3ZlcixidXR0b24uZW1vamk6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZCl9fS5lbW9qaS5hY3RpdmUsLmVtb2ppOmFjdGl2ZSxidXR0b24uZW1vamkuYWN0aXZlLGJ1dHRvbi5lbW9qaTphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQpfS5jdXN0b20tZW1vaml7cGFkZGluZzp2YXIoLS1lbW9qaS1wYWRkaW5nKTtvYmplY3QtZml0OmNvbnRhaW47cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO2JhY2tncm91bmQtc2l6ZTp2YXIoLS1lbW9qaS1zaXplKSB2YXIoLS1lbW9qaS1zaXplKX0ubmF2LC5uYXYtYnV0dG9ue2FsaWduLWl0ZW1zOmNlbnRlcn0ubmF2e2Rpc3BsYXk6Z3JpZDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtjb250YWluOmNvbnRlbnR9Lm5hdi1idXR0b257ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm5hdi1lbW9qaXtmb250LXNpemU6dmFyKC0tY2F0ZWdvcnktZW1vamktc2l6ZSk7d2lkdGg6dmFyKC0tdG90YWwtY2F0ZWdvcnktZW1vamktc2l6ZSk7aGVpZ2h0OnZhcigtLXRvdGFsLWNhdGVnb3J5LWVtb2ppLXNpemUpfS5pbmRpY2F0b3Itd3JhcHBlcntkaXNwbGF5OmZsZXg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0uaW5kaWNhdG9ye3dpZHRoOmNhbGMoMTAwJS92YXIoLS1udW0tZ3JvdXBzKSk7aGVpZ2h0OnZhcigtLWluZGljYXRvci1oZWlnaHQpO29wYWNpdHk6dmFyKC0taW5kaWNhdG9yLW9wYWNpdHkpO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW5kaWNhdG9yLWNvbG9yKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcix0cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuaW5kaWNhdG9ye3dpbGwtY2hhbmdlOm9wYWNpdHk7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXJ9fS5wYWQtdG9wLGlucHV0LnNlYXJjaHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO3dpZHRoOjEwMCV9LnBhZC10b3B7aGVpZ2h0OnZhcigtLWVtb2ppLXBhZGRpbmcpO3otaW5kZXg6M30uc2VhcmNoLXJvd3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWVtb2ppLXBhZGRpbmcpO3BhZGRpbmctYm90dG9tOnZhcigtLWVtb2ppLXBhZGRpbmcpfS5zZWFyY2gtd3JhcHBlcntmbGV4OjE7bWluLXdpZHRoOjB9aW5wdXQuc2VhcmNoe3BhZGRpbmc6dmFyKC0taW5wdXQtcGFkZGluZyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1pbnB1dC1ib3JkZXItcmFkaXVzKTtib3JkZXI6dmFyKC0taW5wdXQtYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWlucHV0LWJvcmRlci1jb2xvcik7Y29sb3I6dmFyKC0taW5wdXQtZm9udC1jb2xvcik7Zm9udC1zaXplOnZhcigtLWlucHV0LWZvbnQtc2l6ZSk7bGluZS1oZWlnaHQ6dmFyKC0taW5wdXQtbGluZS1oZWlnaHQpfWlucHV0LnNlYXJjaDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW5wdXQtcGxhY2Vob2xkZXItY29sb3IpfS5mYXZvcml0ZXN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztib3JkZXItdG9wOnZhcigtLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2NvbnRhaW46Y29udGVudH0ubWVzc2FnZXtwYWRkaW5nOnZhcigtLWVtb2ppLXBhZGRpbmcpfVwiICsgRVhUUkFfU1RZTEVTO1xuICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgdGhpcy5fY3R4ID0ge1xuICAgICAgLy8gU2V0IGRlZmF1bHRzXG4gICAgICBsb2NhbGU6IERFRkFVTFRfTE9DQUxFLFxuICAgICAgZGF0YVNvdXJjZTogREVGQVVMVF9EQVRBX1NPVVJDRSxcbiAgICAgIHNraW5Ub25lRW1vamk6IERFRkFVTFRfU0tJTl9UT05FX0VNT0pJLFxuICAgICAgY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nOiBERUZBVUxUX0NBVEVHT1JZX1NPUlRJTkcsXG4gICAgICBjdXN0b21FbW9qaTogbnVsbCxcbiAgICAgIGkxOG46IGVuSTE4bixcbiAgICAgIGVtb2ppVmVyc2lvbjogbnVsbCxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICAvLyBIYW5kbGUgcHJvcGVydGllcyBzZXQgYmVmb3JlIHRoZSBlbGVtZW50IHdhcyB1cGdyYWRlZFxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBQUk9QUykge1xuICAgICAgaWYgKHByb3AgIT09ICdkYXRhYmFzZScgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIHByb3ApKSB7XG4gICAgICAgIHRoaXMuX2N0eFtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kYkZsdXNoKCk7IC8vIHdhaXQgZm9yIGEgZmx1c2ggYmVmb3JlIGNyZWF0aW5nIHRoZSBkYiwgaW4gY2FzZSB0aGUgdXNlciBjYWxscyBlLmcuIGEgc2V0dGVyIG9yIHNldEF0dHJpYnV0ZVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIC8vIFRoZSBfY21wIG1heSBiZSBkZWZpbmVkIGlmIHRoZSBjb21wb25lbnQgd2FzIGltbWVkaWF0ZWx5IGRpc2Nvbm5lY3RlZCBhbmQgdGhlbiByZWNvbm5lY3RlZC4gSW4gdGhhdCBjYXNlLFxuICAgIC8vIGRvIG5vdGhpbmcgKHByZXNlcnZlIHRoZSBzdGF0ZSlcbiAgICBpZiAoIXRoaXMuX2NtcCkge1xuICAgICAgdGhpcy5fY21wID0gY3JlYXRlUm9vdCh0aGlzLnNoYWRvd1Jvb3QsIHRoaXMuX2N0eCk7XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIC8vIENoZWNrIGluIGEgbWljcm90YXNrIGlmIHRoZSBlbGVtZW50IGlzIHN0aWxsIGNvbm5lY3RlZC4gSWYgc28sIHRyZWF0IHRoaXMgYXMgYSBcIm1vdmVcIiByYXRoZXIgdGhhbiBhIGRpc2Nvbm5lY3RcbiAgICAvLyBJbnNwaXJlZCBieSBWdWU6IGh0dHBzOi8vdnVlanMub3JnL2d1aWRlL2V4dHJhcy93ZWItY29tcG9uZW50cy5odG1sI2J1aWxkaW5nLWN1c3RvbS1lbGVtZW50cy13aXRoLXZ1ZVxuICAgIHFNKCgpID0+IHtcbiAgICAgIC8vIHRoaXMuX2NtcCBtYXkgYmUgZGVmaW5lZCBpZiBjb25uZWN0LWRpc2Nvbm5lY3QtY29ubmVjdC1kaXNjb25uZWN0IG9jY3VycyBzeW5jaHJvbm91c2x5XG4gICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQgJiYgdGhpcy5fY21wKSB7XG4gICAgICAgIHRoaXMuX2NtcC4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jbXAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhYmFzZSB9ID0gdGhpcy5fY3R4O1xuICAgICAgICBkYXRhYmFzZS5jbG9zZSgpXG4gICAgICAgICAgLy8gb25seSBoYXBwZW5zIGlmIHRoZSBkYXRhYmFzZSBmYWlsZWQgdG8gbG9hZCBpbiB0aGUgZmlyc3QgcGxhY2UsIHNvIHdlIGRvbid0IGNhcmVcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7XG4gICAgcmV0dXJuIFsnbG9jYWxlJywgJ2RhdGEtc291cmNlJywgJ3NraW4tdG9uZS1lbW9qaScsICdlbW9qaS12ZXJzaW9uJ10gLy8gY29tcGxleCBvYmplY3RzIGFyZW4ndCBzdXBwb3J0ZWQsIGFsc28gdXNlIGtlYmFiLWNhc2VcbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAoYXR0ck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuX3NldChcbiAgICAgIC8vIGNvbnZlcnQgZnJvbSBrZWJhYi1jYXNlIHRvIGNhbWVsY2FzZVxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzM4NTIjaXNzdWVjb21tZW50LTY2NTAzNzAxNVxuICAgICAgYXR0ck5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgKF8sIHVwKSA9PiB1cC50b1VwcGVyQ2FzZSgpKSxcbiAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZSB0byBmbG9hdCBpZiBuZWNlc3NhcnlcbiAgICAgIGF0dHJOYW1lID09PSAnZW1vamktdmVyc2lvbicgPyBwYXJzZUZsb2F0KG5ld1ZhbHVlKSA6IG5ld1ZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIF9zZXQgKHByb3AsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5fY3R4W3Byb3BdID0gbmV3VmFsdWU7XG4gICAgaWYgKHRoaXMuX2NtcCkge1xuICAgICAgdGhpcy5fY21wLiRzZXQoeyBbcHJvcF06IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAoWydsb2NhbGUnLCAnZGF0YVNvdXJjZSddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICB0aGlzLl9kYkZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgX2RiQ3JlYXRlICgpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgZGF0YVNvdXJjZSwgZGF0YWJhc2UgfSA9IHRoaXMuX2N0eDtcbiAgICAvLyBvbmx5IGNyZWF0ZSBhIG5ldyBkYXRhYmFzZSBpZiB3ZSByZWFsbHkgbmVlZCB0b1xuICAgIGlmICghZGF0YWJhc2UgfHwgZGF0YWJhc2UubG9jYWxlICE9PSBsb2NhbGUgfHwgZGF0YWJhc2UuZGF0YVNvdXJjZSAhPT0gZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5fc2V0KCdkYXRhYmFzZScsIG5ldyBEYXRhYmFzZSh7IGxvY2FsZSwgZGF0YVNvdXJjZSB9KSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBEYXRhYmFzZSBpbiBvbmUgbWljcm90YXNrIGlmIHRoZSBsb2NhbGUvZGF0YVNvdXJjZSBjaGFuZ2UuIFdlIGRvIG9uZSBtaWNyb3Rhc2tcbiAgLy8gc28gd2UgZG9uJ3QgY3JlYXRlIHR3byBEYXRhYmFzZXMgaWYgZS5nLiBib3RoIHRoZSBsb2NhbGUgYW5kIHRoZSBkYXRhU291cmNlIGNoYW5nZVxuICBfZGJGbHVzaCAoKSB7XG4gICAgcU0oKCkgPT4gKFxuICAgICAgdGhpcy5fZGJDcmVhdGUoKVxuICAgICkpO1xuICB9XG59XG5cbmNvbnN0IGRlZmluaXRpb25zID0ge307XG5cbmZvciAoY29uc3QgcHJvcCBvZiBQUk9QUykge1xuICBkZWZpbml0aW9uc1twcm9wXSA9IHtcbiAgICBnZXQgKCkge1xuICAgICAgaWYgKHByb3AgPT09ICdkYXRhYmFzZScpIHtcbiAgICAgICAgLy8gaW4gcmFyZSBjYXNlcywgdGhlIG1pY3JvdGFzayBtYXkgbm90IGJlIGZsdXNoZWQgeWV0LCBzbyB3ZSBuZWVkIHRvIGluc3RhbnRpYXRlIHRoZSBEQlxuICAgICAgICAvLyBub3cgaWYgdGhlIHVzZXIgaXMgYXNraW5nIGZvciBpdFxuICAgICAgICB0aGlzLl9kYkNyZWF0ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2N0eFtwcm9wXVxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIGlmIChwcm9wID09PSAnZGF0YWJhc2UnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YWJhc2UgaXMgcmVhZC1vbmx5JylcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldChwcm9wLCB2YWwpO1xuICAgIH1cbiAgfTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUGlja2VyRWxlbWVudC5wcm90b3R5cGUsIGRlZmluaXRpb25zKTtcblxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdlbW9qaS1waWNrZXInKSkgeyAvLyBpZiBhbHJlYWR5IGRlZmluZWQsIGRvIG5vdGhpbmcgKGUuZy4gc2FtZSBzY3JpcHQgaW1wb3J0ZWQgdHdpY2UpXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW1vamktcGlja2VyJywgUGlja2VyRWxlbWVudCk7XG59XG5cbmV4cG9ydCB7IFBpY2tlckVsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWREID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2RlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdCcpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9