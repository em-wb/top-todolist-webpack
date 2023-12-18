/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  line-height: 1.3;
  font-family: var(--main-font);
}

header {
  grid-row: 1/2;
  position: sticky;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
}

h1,
h2,
h3,
h4 {
  font-weight: var(--heading-weight);
}

h2 {
  font-size: 1rem;
  font-weight: 400;
}

i {
  font-size: 18px;
}

footer {
  grid-row: 7/8;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: var(--main-font);
  border-radius: 0 0 5px 5px;
  border-top: solid 1px lightgray;
}

hr {
  opacity: 30%;
  margin-bottom: 10px;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  border: none;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 40px;
}

input,
textarea,
.highPriority,
.submitBtn .deleteBtn {
  margin-top: 5px;
  font-family: var(--main-font);
}

.content {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  height: 100vh;
  padding: 40px 20px 5px 20px;
}

.titleCtr {
  grid-column: 5/2;
  display: flex;
  flex-direction: column;

  align-items: center;
}

.ellipsisDiv {
  display: flex;
  justify-content: center;
  padding: 10px;
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
}

.menuItemDiv > i {
  margin-bottom: 5px;
}

.logo {
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
  font-style: italic;
  font-size: 0.9rem;
  opacity: 80%;
  color: aquamarine;
}

.coreAppCtr {
  display: flex;
  flex-direction: column;
  gap: 20%;
  grid-row: 2/7;
  margin-bottom: 10px;
}

.taskItem {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 0;
}

.taskInfoDiv {
  grid-column: 1/5;
}

.taskTitle {
  padding-left: 3px;
}

.taskDesc {
  padding-left: 5px;
}

.moreDiv {
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 19%;
  grid-column: 5/6;
}

.listAssignment,
.editTask {
  border-radius: 50%;
  height: 16px;
  width: 16px;
  margin-bottom: 3px;
}

.listAssignment {
  background-color: blue;
}
.editTask {
  color: grey;
  opacity: 80%;
}

.taskCompleteDiv {
  grid-column: 6/8;
  text-align: center;
}

.priority {
  border-left: solid 3px red;
}

.completeBtn {
  width: 62%;
  text-align: center;
  border-radius: 10px;
  border: none;
  color: grey;
}

.todoBtn {
  background-color: lightgrey;
}

.taskCompleteDiv > .completeBtn {
  height: 16px;
  font-size: 1rem;
}

.addNewBtn {
  position: fixed;
  width: fit-content;
  height: fit-content;
  font-size: 1.8rem;
  padding: 8px;
  border-radius: 50%;
  border: none;
  right: 39px;
  bottom: 159px;
}

.doneItem {
  display: inline-grid;
  grid-template-columns: 2fr, 2fr, 1fr, 2fr;
  font-size: 0.9rem;
  width: 100%;
  justify-items: center;
  padding: 5px 20px 5px 3px;
}

.doneItem > h5,
.doneItem > small {
  justify-self: start;
  text-decoration: line-through;
}

.doneBtn {
  background-color: lightgreen;
}

.doneCtr > .taskItem {
  opacity: 50%;
  text-decoration: line-through;
}

.hidden {
  display: none;
}

/* dialog */

.dialogDivs > button {
  border-radius: 1rem;
}

label {
  font-size: 0.8rem;
}

#taskDialogDiv4 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr auto;
}

#taskDialogDiv4 > p {
  grid-column: 1/7;
  grid-row: 1/2;
}

#taskDialogDiv4 > label {
  margin-top: 14px;
}

#taskDialogDiv0 {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.closeBtn {
  grid-column: 2/3;
  width: fit-content;
  height: fit-content;
  font-size: 2rem;
  background-color: white;
  border: none;
}

.submitBtn,
.deleteBtn {
  font-size: 1rem;
  padding: 0.5rem;
  width: 40%;
  margin: 5%;
  border: none;
}

.highPriority {
  grid-column: 1/2;
  border: none;
  padding: 0.5rem;
  width: 70%;
  margin-top: 10px;
}

.submitBtn {
  background-color: aquamarine;
}

.deleteBtn {
  background-color: lightcoral;
  color: white;
}

.input {
  padding: 5px;
  width: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main-font: \"Montserrat\", sans-serif;\n  --heading-font: \"Montserrat\", sans-serif;\n  --heading-weight: 600;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 16px;\n  line-height: 1.3;\n  font-family: var(--main-font);\n}\n\nheader {\n  grid-row: 1/2;\n  position: sticky;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-weight: var(--heading-weight);\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\ni {\n  font-size: 18px;\n}\n\nfooter {\n  grid-row: 7/8;\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--main-font);\n  border-radius: 0 0 5px 5px;\n  border-top: solid 1px lightgray;\n}\n\nhr {\n  opacity: 30%;\n  margin-bottom: 10px;\n}\n\ndialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 100vh;\n  border: none;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  padding: 40px;\n}\n\ninput,\ntextarea,\n.highPriority,\n.submitBtn .deleteBtn {\n  margin-top: 5px;\n  font-family: var(--main-font);\n}\n\n.content {\n  display: grid;\n  grid-template-rows: repeat(7, 1fr);\n  height: 100vh;\n  padding: 40px 20px 5px 20px;\n}\n\n.titleCtr {\n  grid-column: 5/2;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n}\n\n.ellipsisDiv {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.menuDiv {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.menuItemDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menuItemDiv > i {\n  margin-bottom: 5px;\n}\n\n.logo {\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n  font-style: italic;\n  font-size: 0.9rem;\n  opacity: 80%;\n  color: aquamarine;\n}\n\n.coreAppCtr {\n  display: flex;\n  flex-direction: column;\n  gap: 20%;\n  grid-row: 2/7;\n  margin-bottom: 10px;\n}\n\n.taskItem {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 10px 0;\n}\n\n.taskInfoDiv {\n  grid-column: 1/5;\n}\n\n.taskTitle {\n  padding-left: 3px;\n}\n\n.taskDesc {\n  padding-left: 5px;\n}\n\n.moreDiv {\n  display: flex;\n  justify-content: end;\n  align-items: end;\n  gap: 19%;\n  grid-column: 5/6;\n}\n\n.listAssignment,\n.editTask {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-bottom: 3px;\n}\n\n.listAssignment {\n  background-color: blue;\n}\n.editTask {\n  color: grey;\n  opacity: 80%;\n}\n\n.taskCompleteDiv {\n  grid-column: 6/8;\n  text-align: center;\n}\n\n.priority {\n  border-left: solid 3px red;\n}\n\n.completeBtn {\n  width: 62%;\n  text-align: center;\n  border-radius: 10px;\n  border: none;\n  color: grey;\n}\n\n.todoBtn {\n  background-color: lightgrey;\n}\n\n.taskCompleteDiv > .completeBtn {\n  height: 16px;\n  font-size: 1rem;\n}\n\n.addNewBtn {\n  position: fixed;\n  width: fit-content;\n  height: fit-content;\n  font-size: 1.8rem;\n  padding: 8px;\n  border-radius: 50%;\n  border: none;\n  right: 39px;\n  bottom: 159px;\n}\n\n.doneItem {\n  display: inline-grid;\n  grid-template-columns: 2fr, 2fr, 1fr, 2fr;\n  font-size: 0.9rem;\n  width: 100%;\n  justify-items: center;\n  padding: 5px 20px 5px 3px;\n}\n\n.doneItem > h5,\n.doneItem > small {\n  justify-self: start;\n  text-decoration: line-through;\n}\n\n.doneBtn {\n  background-color: lightgreen;\n}\n\n.doneCtr > .taskItem {\n  opacity: 50%;\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n\n/* dialog */\n\n.dialogDivs > button {\n  border-radius: 1rem;\n}\n\nlabel {\n  font-size: 0.8rem;\n}\n\n#taskDialogDiv4 {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: 1fr auto;\n}\n\n#taskDialogDiv4 > p {\n  grid-column: 1/7;\n  grid-row: 1/2;\n}\n\n#taskDialogDiv4 > label {\n  margin-top: 14px;\n}\n\n#taskDialogDiv0 {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n\n.closeBtn {\n  grid-column: 2/3;\n  width: fit-content;\n  height: fit-content;\n  font-size: 2rem;\n  background-color: white;\n  border: none;\n}\n\n.submitBtn,\n.deleteBtn {\n  font-size: 1rem;\n  padding: 0.5rem;\n  width: 40%;\n  margin: 5%;\n  border: none;\n}\n\n.highPriority {\n  grid-column: 1/2;\n  border: none;\n  padding: 0.5rem;\n  width: 70%;\n  margin-top: 10px;\n}\n\n.submitBtn {\n  background-color: aquamarine;\n}\n\n.deleteBtn {\n  background-color: lightcoral;\n  color: white;\n}\n\n.input {\n  padding: 5px;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allLists: () => (/* binding */ allLists),
/* harmony export */   "default": () => (/* binding */ createList),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


let listToRender = "All tasks";

const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
}

function addTask(task) {
  console.log("task in addtask", task.assignedLists);
  if (task.assignedLists.some((list) => list === this.title)) {
    this.tasksArray.push(task);
  }
  listToRender = task.assignedLists[0];
  findListToRender(listToRender);
}

function removeTask(taskToDelete, itemIndex) {
  console.log("HEY", itemIndex, taskToDelete);
  listToRender = taskToDelete.assignedLists[0]; //PLACEHOLDER
  allLists[0].tasksArray.splice(itemIndex, 1);

  findListToRender(listToRender);
}

function findListToRender(listToRender) {
  allLists.forEach((list) => {
    if (list.title === listToRender) (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderCoreApp)(list);
  });
}

function createList(title, description, colour) {
  const list = {
    title: title,
    description: description,
    colour: colour,
    tasksArray: [],
    addToAllListsArray: addToAllListsArray,
    addTask: addTask,
    removeTask: removeTask,
  };

  list.addToAllListsArray();

  return list;
}


/***/ }),

/***/ "./src/taskDialog.js":
/*!***************************!*\
  !*** ./src/taskDialog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewTaskDialog),
/* harmony export */   getTaskDialogELs: () => (/* binding */ getTaskDialogELs),
/* harmony export */   openDialogForThisTask: () => (/* binding */ openDialogForThisTask)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/ui.js");





let newTask = true;
let editedTask = null;
let taskIndex = null;
const taskDialogElements = [
  {
    elements: [
      ["h1", null, null, "New Task", [["id", "taskDialogH1"]]],
      [
        "button",
        ["closeBtn", "fa-solid", "fa-xmark"],
        null,
        "",
        [["id", "closeTaskDialog"]],
      ],
    ],
  },
  {
    elements: [
      ["label", null, null, "Title"],
      [
        "input",
        "input",
        null,
        "",
        [
          ["id", "inputTaskTitle"],
          ["type", "text"],
          ["required", ""],
          ["placeholder", "Do the grocery shop"],
          ["maxlength", "50"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["label", null, null, "Description (optional)"],
      [
        "textarea",
        "input",
        null,
        "",
        [
          ["id", "inputTaskDesc"],
          ["rows", "2"],
          ["placeholder", "Eggs, milk, cereal, bread, bananas"],
          ["maxlength", "250"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["label", "textInput", null, "Due Date (optional)"],
      [
        "input",
        "input",
        null,
        "",
        [
          ["id", "inputTaskDate"],
          ["type", "date"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["p", null, null, "Priority"],

      [
        "input",
        "highPriority",
        null,
        "",
        [
          ["id", "highPriorityTask"],
          ["type", "checkbox"],
        ],
      ],
      ["label", null, null, "High", [["for", "highPriorityTask"]]],
    ],
  },
  {
    elements: [
      ["label", null, null, "List (optional)"],
      [
        "input",
        null,
        null,
        "",
        [
          ["id", "dropdownList"],
          ["list", "listOfLists"],
        ],
      ],
      ["datalist", null, null, "", [, ["id", "listOfLists"]]],
    ],
  },
  {
    elements: [
      [
        "button",
        "submitBtn",
        null,
        "List it",
        [
          ["id", "submitTaskBtn"],
          ["type", "submit"],
        ],
      ],
      ["button", "deleteBtn", null, "Delete it", [["id", "deleteTaskBtn"]]],
    ],
  },
];

function createNewTaskDialog() {
  const dialog = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("dialog", "taskDialog", content, "", [
    ["id", "taskDialog"],
  ]);
  const newTaskForm = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "newTaskForm", dialog, "", [
    ["id", "newTaskForm"],
  ]);
  for (let i = 0; i < 7; i++) {
    const taskDialogDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "dialogDivs", newTaskForm, "", [
      ["id", `taskDialogDiv${i}`],
    ]);
    if (taskDialogElements[i]) {
      taskDialogElements[i].elements.forEach((elementArray) => {
        elementArray[2] = taskDialogDiv;
        (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(...elementArray);
      });
    }
  }
  //PLACEHOLDER... TO LOOP THROUGH LISTS LATER
  const dropdown = document.getElementById("listOfLists");
  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("option", null, dropdown, "", [["value", "All tasks"]]);
}

function openDialogForThisTask(taskToOpen, itemIndex) {
  if (taskToOpen) {
    const newTaskForm = document.getElementById("newTaskForm");
    const taskDialog = document.getElementById("taskDialog");
    (newTaskForm.elements["inputTaskTitle"].value = taskToOpen.title),
      (newTaskForm.elements["inputTaskDesc"].value = taskToOpen.description);
    newTaskForm.elements["inputTaskDate"].value = taskToOpen.dueDate;
    newTaskForm.elements["highPriorityTask"].checked = taskToOpen.priority;
    newTaskForm.elements["dropdownList"].value = taskToOpen.assignedLists[0];
    newTask = false;
    editedTask = taskToOpen;
    taskIndex = itemIndex;
    taskDialog.showModal();
  }
}

// function removeTask(editedTask) {
//   editedTask.assignedLists = [];
//   editedTask = null;
// }

function getTaskDialogELs() {
  const taskDialog = document.getElementById("taskDialog");
  const closeTaskDialog = document.getElementById("closeTaskDialog");
  const newTaskForm = document.getElementById("newTaskForm");
  const submitTaskBtn = document.getElementById("submitTaskBtn");
  const deleteTaskBtn = document.getElementById("deleteTaskBtn");

  document.getElementById("addNewBtn").addEventListener("click", (e) => {
    e.preventDefault();
    taskDialog.showModal();
  });

  closeTaskDialog.addEventListener("click", (e) => {
    newTaskForm.reset();
    taskDialog.close();
  });

  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedTask) {
      console.log("submit editd");
      (0,_lists__WEBPACK_IMPORTED_MODULE_1__.removeTask)(editedTask, taskIndex);
    }
    const newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(
      newTaskForm.elements["inputTaskTitle"].value,
      newTaskForm.elements["inputTaskDesc"].value,
      newTaskForm.elements["inputTaskDate"].value,
      newTaskForm.elements["highPriorityTask"].checked,
      newTaskForm.elements["dropdownList"].value,
      false
    );

    _lists__WEBPACK_IMPORTED_MODULE_1__.allLists.forEach((list) => {
      console.log(list);
      list.addTask(newTask);
    });

    newTaskForm.reset();
    taskDialog.close();
  });

  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("edited task?", editedTask);
    if (editedTask) {
      (0,_lists__WEBPACK_IMPORTED_MODULE_1__.removeTask)(editedTask, taskIndex);
      console.log("delete btn");
    }
    newTaskForm.reset();
    taskDialog.close();
  });
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(
  title,
  description,
  dueDate,
  priority,
  lists,
  completed
) {
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    assignedLists: Array.isArray(lists) ? lists : [lists],
    completed: completed,
  };

  console.log(task);
  return task;
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCoreApp: () => (/* binding */ renderCoreApp),
/* harmony export */   renderFooter: () => (/* binding */ renderFooter),
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _taskDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDialog */ "./src/taskDialog.js");




const iconListFooter = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getIconMenu(menuDiv) {
  iconListFooter.forEach((icon) => {
    const menuItemDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menuItemDiv", menuDiv);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("i", icon.classes, menuItemDiv);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("small", "menuText", menuItemDiv, icon.text);
  });
}

function renderHeader(list) {
  const header = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("header", "header", content);
  const titleCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "titleCtr", header);
  const title = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "title", titleCtr, list.title);
  const listDesc = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", "listDesc", titleCtr, list.description);
  const ellipsisDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "ellipsisDiv", header);
  const ellipsis = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "i",
    ["fa-solid", "fa-ellipsis-vertical"],
    ellipsisDiv
  );
}

function renderFooter() {
  const footer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("footer", null, content);
  const menuDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menuDiv", footer);
  getIconMenu(menuDiv);
  const logo = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", "logo", footer, "Absolistly");
}

function renderPriorityStatus(taskTitle, task) {
  if (task.priority === true) taskTitle.classList.add("priority");
}

function renderTaskItems(tasksCtr, doneCtr, list) {
  let i = 0;
  list.tasksArray.forEach((task) => {
    const taskItem = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "div",
      "taskItem",
      task.completed ? doneCtr : tasksCtr,
      ""
    );
    const taskInfoDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "taskInfoDiv", taskItem);
    const moreDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "moreDiv", taskItem);
    const taskCompleteDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "taskCompleteDiv", taskItem);
    const taskTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h4", "taskTitle", taskInfoDiv, task.title);

    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "taskDesc", taskInfoDiv, task.description);
    const editTask = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "div",
      ["editTask", "fa-solid", "fa-pen"],
      moreDiv,
      "",
      [["data-index-number", i]]
    );
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "listAssignment", moreDiv);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("small", "dueDate", taskCompleteDiv, task.dueDate);
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "button",
      [
        "completeBtn",
        "fa-solid",
        "fa-check",
        task.completed ? "doneBtn" : "todoBtn",
      ],
      taskCompleteDiv
    );
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("hr", "break", tasksCtr);
    renderPriorityStatus(taskTitle, task);
    i++;
  });
}

function openThisTaskEL(tasksCtr) {
  tasksCtr.addEventListener("click", (e) => {
    console.log("openthis");
    if (e.target.classList == "editTask fa-solid fa-pen") {
      console.log("open");
      const itemIndex = e.target.getAttribute("data-index-number");
      console.log(itemIndex);
      const taskToOpen = _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[0].tasksArray[itemIndex];
      console.log(taskToOpen);
      (0,_taskDialog__WEBPACK_IMPORTED_MODULE_2__.openDialogForThisTask)(taskToOpen, itemIndex);
    }
  });
}

function moveDoneItems(tasksCtr, list) {}

// function renderCompletedTaskItems(doneCtr, list) {
//   list.tasksArray.forEach((task) => {
//     if (task.completed) {
//       const doneItem = createElement("div", "doneItem", doneCtr);
//       createElement("h5", "done", doneItem, task.title);
//       createElement("small", "done", doneItem, task.dueDate);
//       createElement("div", ["listAssignment", "done"], doneItem);
//       createElement(
//         "button",
//         ["completeBtn", "fa-solid", "fa-check", "done"],
//         doneItem
//       );
//       createElement("hr", "break", doneCtr);
//     }
//   });
// }

function renderCoreApp(list) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  renderHeader(list);
  const coreAppCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "coreAppCtr", content, "", [
    ["id", "coreAppCtr"],
  ]);

  const addNewBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    ["addNewBtn", "fa-solid", "fa-plus"],
    content,
    "",
    [["id", "addNewBtn"]]
  );
  const tasksCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "tasksCtr", coreAppCtr);
  const doneCtr = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "doneCtr", coreAppCtr);
  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h4", "doneheader", doneCtr, "Done");
  renderTaskItems(tasksCtr, doneCtr, list);
  renderFooter(list);
  (0,_taskDialog__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_taskDialog__WEBPACK_IMPORTED_MODULE_2__.getTaskDialogELs)();
  openThisTaskEL(tasksCtr);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _taskDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDialog */ "./src/taskDialog.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







document.addEventListener("DOMContentLoaded", () => {
  const listAll = (0,_lists__WEBPACK_IMPORTED_MODULE_0__["default"])("All tasks", "All your tasks in one list", "blue");

  const task1 = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "My first to do",
    "I need to do something",
    "01 Mar 24",
    true,
    listAll.title,
    false
  );

  const task2 = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "My second to do",
    "I need to do something",
    "01 Jan 24",
    false,
    listAll.title,
    true
  );

  const task3 = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "Task 3",
    null,
    "19 Dec 23",
    false,
    "All tasks",
    false
  );

  _lists__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((list) => {
    list.addTask(task1);
    list.addTask(task2);
    list.addTask(task3);
  });
  (0,_ui__WEBPACK_IMPORTED_MODULE_2__.renderCoreApp)(listAll);

  console.log("task", task1, task2, task3);
  console.log("all", listAll);
  console.log("allLists", _lists__WEBPACK_IMPORTED_MODULE_0__.allLists);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLE1B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O1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNkO0FBQ2dDO0FBQ3JCO0FBQ0k7QUFDMUI7O0FBRXRCO0FBQ0Esa0JBQWtCLGtEQUFVOztBQUU1QixnQkFBZ0Isa0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDRDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsa0RBQWE7O0FBRWY7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBUTtBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2xpc3RzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3Rhc2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWZvbnQ6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAtLWhlYWRpbmctZm9udDogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0taGVhZGluZy13ZWlnaHQ6IDYwMDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbmhlYWRlciB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5mb290ZXIge1xuICBncmlkLXJvdzogNy84O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XG59XG5cbmhyIHtcbiAgb3BhY2l0eTogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuLmhpZ2hQcmlvcml0eSxcbi5zdWJtaXRCdG4gLmRlbGV0ZUJ0biB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogNDBweCAyMHB4IDVweCAyMHB4O1xufVxuXG4udGl0bGVDdHIge1xuICBncmlkLWNvbHVtbjogNS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbGxpcHNpc0RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVudURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1lbnVJdGVtRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVJdGVtRGl2ID4gaSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogODAlO1xuICBjb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLmNvcmVBcHBDdHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwJTtcbiAgZ3JpZC1yb3c6IDIvNztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhc2tJdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4udGFza0luZm9EaXYge1xuICBncmlkLWNvbHVtbjogMS81O1xufVxuXG4udGFza1RpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi50YXNrRGVzYyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubW9yZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBnYXA6IDE5JTtcbiAgZ3JpZC1jb2x1bW46IDUvNjtcbn1cblxuLmxpc3RBc3NpZ25tZW50LFxuLmVkaXRUYXNrIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5saXN0QXNzaWdubWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uZWRpdFRhc2sge1xuICBjb2xvcjogZ3JleTtcbiAgb3BhY2l0eTogODAlO1xufVxuXG4udGFza0NvbXBsZXRlRGl2IHtcbiAgZ3JpZC1jb2x1bW46IDYvODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHJlZDtcbn1cblxuLmNvbXBsZXRlQnRuIHtcbiAgd2lkdGg6IDYyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4udG9kb0J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLnRhc2tDb21wbGV0ZURpdiA+IC5jb21wbGV0ZUJ0biB7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYWRkTmV3QnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICByaWdodDogMzlweDtcbiAgYm90dG9tOiAxNTlweDtcbn1cblxuLmRvbmVJdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyLCAyZnIsIDFmciwgMmZyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDNweDtcbn1cblxuLmRvbmVJdGVtID4gaDUsXG4uZG9uZUl0ZW0gPiBzbWFsbCB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uZG9uZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbi5kb25lQ3RyID4gLnRhc2tJdGVtIHtcbiAgb3BhY2l0eTogNTAlO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIGRpYWxvZyAqL1xuXG4uZGlhbG9nRGl2cyA+IGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbiN0YXNrRGlhbG9nRGl2NCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG59XG5cbiN0YXNrRGlhbG9nRGl2NCA+IHAge1xuICBncmlkLWNvbHVtbjogMS83O1xuICBncmlkLXJvdzogMS8yO1xufVxuXG4jdGFza0RpYWxvZ0RpdjQgPiBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbiN0YXNrRGlhbG9nRGl2MCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZUJ0biB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3VibWl0QnRuLFxuLmRlbGV0ZUJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDUlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oaWdoUHJpb3JpdHkge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbi5kZWxldGVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJd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LHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWFpbi1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWhlYWRpbmctZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1oZWFkaW5nLXdlaWdodDogNjAwO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDcvODtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XFxufVxcblxcbmhyIHtcXG4gIG9wYWNpdHk6IDMwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG4uaGlnaFByaW9yaXR5LFxcbi5zdWJtaXRCdG4gLmRlbGV0ZUJ0biB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogNDBweCAyMHB4IDVweCAyMHB4O1xcbn1cXG5cXG4udGl0bGVDdHIge1xcbiAgZ3JpZC1jb2x1bW46IDUvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVsbGlwc2lzRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnVJdGVtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtRGl2ID4gaSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3BhY2l0eTogODAlO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5jb3JlQXBwQ3RyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMCU7XFxuICBncmlkLXJvdzogMi83O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2tJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4udGFza0luZm9EaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvNTtcXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuLnRhc2tEZXNjIHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4ubW9yZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgZ2FwOiAxOSU7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbn1cXG5cXG4ubGlzdEFzc2lnbm1lbnQsXFxuLmVkaXRUYXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ubGlzdEFzc2lnbm1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLmVkaXRUYXNrIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlRGl2IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogc29saWQgM3B4IHJlZDtcXG59XFxuXFxuLmNvbXBsZXRlQnRuIHtcXG4gIHdpZHRoOiA2MiU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi50b2RvQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZURpdiA+IC5jb21wbGV0ZUJ0biB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGROZXdCdG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmlnaHQ6IDM5cHg7XFxuICBib3R0b206IDE1OXB4O1xcbn1cXG5cXG4uZG9uZUl0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciwgMmZyLCAxZnIsIDJmcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggM3B4O1xcbn1cXG5cXG4uZG9uZUl0ZW0gPiBoNSxcXG4uZG9uZUl0ZW0gPiBzbWFsbCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kb25lQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5kb25lQ3RyID4gLnRhc2tJdGVtIHtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGRpYWxvZyAqL1xcblxcbi5kaWFsb2dEaXZzID4gYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jdGFza0RpYWxvZ0RpdjQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbn1cXG5cXG4jdGFza0RpYWxvZ0RpdjQgPiBwIHtcXG4gIGdyaWQtY29sdW1uOiAxLzc7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jdGFza0RpYWxvZ0RpdjQgPiBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4jdGFza0RpYWxvZ0RpdjAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdEJ0bixcXG4uZGVsZXRlQnRuIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDUlO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnN1Ym1pdEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uZGVsZXRlQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChcbiAgdGFnLFxuICBjbGFzc0xpc3QsXG4gIHBhcmVudEVsLFxuICB0ZXh0LFxuICBhdHRyaWJ1dGVzXG4pIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKGNsYXNzTGlzdCkge1xuICAgIGNsYXNzTGlzdCA9IEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KVxuICAgICAgPyBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KVxuICAgICAgOiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgfVxuICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoZWxlbWVudFswXSwgZWxlbWVudFsxXSk7XG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRFbC5hcHBlbmQobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyQ29yZUFwcCB9IGZyb20gXCIuL3VpXCI7XG5cbmxldCBsaXN0VG9SZW5kZXIgPSBcIkFsbCB0YXNrc1wiO1xuXG5leHBvcnQgY29uc3QgYWxsTGlzdHMgPSBbXTtcblxuZnVuY3Rpb24gYWRkVG9BbGxMaXN0c0FycmF5KCkge1xuICBhbGxMaXN0cy5wdXNoKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgY29uc29sZS5sb2coXCJ0YXNrIGluIGFkZHRhc2tcIiwgdGFzay5hc3NpZ25lZExpc3RzKTtcbiAgaWYgKHRhc2suYXNzaWduZWRMaXN0cy5zb21lKChsaXN0KSA9PiBsaXN0ID09PSB0aGlzLnRpdGxlKSkge1xuICAgIHRoaXMudGFza3NBcnJheS5wdXNoKHRhc2spO1xuICB9XG4gIGxpc3RUb1JlbmRlciA9IHRhc2suYXNzaWduZWRMaXN0c1swXTtcbiAgZmluZExpc3RUb1JlbmRlcihsaXN0VG9SZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrVG9EZWxldGUsIGl0ZW1JbmRleCkge1xuICBjb25zb2xlLmxvZyhcIkhFWVwiLCBpdGVtSW5kZXgsIHRhc2tUb0RlbGV0ZSk7XG4gIGxpc3RUb1JlbmRlciA9IHRhc2tUb0RlbGV0ZS5hc3NpZ25lZExpc3RzWzBdOyAvL1BMQUNFSE9MREVSXG4gIGFsbExpc3RzWzBdLnRhc2tzQXJyYXkuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG5cbiAgZmluZExpc3RUb1JlbmRlcihsaXN0VG9SZW5kZXIpO1xufVxuXG5mdW5jdGlvbiBmaW5kTGlzdFRvUmVuZGVyKGxpc3RUb1JlbmRlcikge1xuICBhbGxMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgaWYgKGxpc3QudGl0bGUgPT09IGxpc3RUb1JlbmRlcikgcmVuZGVyQ29yZUFwcChsaXN0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBjb2xvdXIpIHtcbiAgY29uc3QgbGlzdCA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGNvbG91cjogY29sb3VyLFxuICAgIHRhc2tzQXJyYXk6IFtdLFxuICAgIGFkZFRvQWxsTGlzdHNBcnJheTogYWRkVG9BbGxMaXN0c0FycmF5LFxuICAgIGFkZFRhc2s6IGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzazogcmVtb3ZlVGFzayxcbiAgfTtcblxuICBsaXN0LmFkZFRvQWxsTGlzdHNBcnJheSgpO1xuXG4gIHJldHVybiBsaXN0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgYWxsTGlzdHMsIHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9saXN0c1wiO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHJlbmRlckNvcmVBcHAgfSBmcm9tIFwiLi91aVwiO1xuXG5sZXQgbmV3VGFzayA9IHRydWU7XG5sZXQgZWRpdGVkVGFzayA9IG51bGw7XG5sZXQgdGFza0luZGV4ID0gbnVsbDtcbmNvbnN0IHRhc2tEaWFsb2dFbGVtZW50cyA9IFtcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXCJoMVwiLCBudWxsLCBudWxsLCBcIk5ldyBUYXNrXCIsIFtbXCJpZFwiLCBcInRhc2tEaWFsb2dIMVwiXV1dLFxuICAgICAgW1xuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBbXCJjbG9zZUJ0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEteG1hcmtcIl0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtbXCJpZFwiLCBcImNsb3NlVGFza0RpYWxvZ1wiXV0sXG4gICAgICBdLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1wibGFiZWxcIiwgbnVsbCwgbnVsbCwgXCJUaXRsZVwiXSxcbiAgICAgIFtcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcImlucHV0VGFza1RpdGxlXCJdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJ0ZXh0XCJdLFxuICAgICAgICAgIFtcInJlcXVpcmVkXCIsIFwiXCJdLFxuICAgICAgICAgIFtcInBsYWNlaG9sZGVyXCIsIFwiRG8gdGhlIGdyb2Nlcnkgc2hvcFwiXSxcbiAgICAgICAgICBbXCJtYXhsZW5ndGhcIiwgXCI1MFwiXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXCJsYWJlbFwiLCBudWxsLCBudWxsLCBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIl0sXG4gICAgICBbXG4gICAgICAgIFwidGV4dGFyZWFcIixcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJpbnB1dFRhc2tEZXNjXCJdLFxuICAgICAgICAgIFtcInJvd3NcIiwgXCIyXCJdLFxuICAgICAgICAgIFtcInBsYWNlaG9sZGVyXCIsIFwiRWdncywgbWlsaywgY2VyZWFsLCBicmVhZCwgYmFuYW5hc1wiXSxcbiAgICAgICAgICBbXCJtYXhsZW5ndGhcIiwgXCIyNTBcIl0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1wibGFiZWxcIiwgXCJ0ZXh0SW5wdXRcIiwgbnVsbCwgXCJEdWUgRGF0ZSAob3B0aW9uYWwpXCJdLFxuICAgICAgW1xuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwiaW5wdXRUYXNrRGF0ZVwiXSxcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiZGF0ZVwiXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXCJwXCIsIG51bGwsIG51bGwsIFwiUHJpb3JpdHlcIl0sXG5cbiAgICAgIFtcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBcImhpZ2hQcmlvcml0eVwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJoaWdoUHJpb3JpdHlUYXNrXCJdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJjaGVja2JveFwiXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICBbXCJsYWJlbFwiLCBudWxsLCBudWxsLCBcIkhpZ2hcIiwgW1tcImZvclwiLCBcImhpZ2hQcmlvcml0eVRhc2tcIl1dXSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcImxhYmVsXCIsIG51bGwsIG51bGwsIFwiTGlzdCAob3B0aW9uYWwpXCJdLFxuICAgICAgW1xuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcImRyb3Bkb3duTGlzdFwiXSxcbiAgICAgICAgICBbXCJsaXN0XCIsIFwibGlzdE9mTGlzdHNcIl0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgW1wiZGF0YWxpc3RcIiwgbnVsbCwgbnVsbCwgXCJcIiwgWywgW1wiaWRcIiwgXCJsaXN0T2ZMaXN0c1wiXV1dLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1xuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcInN1Ym1pdEJ0blwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIkxpc3QgaXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwic3VibWl0VGFza0J0blwiXSxcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwic3VibWl0XCJdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIFtcImJ1dHRvblwiLCBcImRlbGV0ZUJ0blwiLCBudWxsLCBcIkRlbGV0ZSBpdFwiLCBbW1wiaWRcIiwgXCJkZWxldGVUYXNrQnRuXCJdXV0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tEaWFsb2coKSB7XG4gIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIiwgXCJ0YXNrRGlhbG9nXCIsIGNvbnRlbnQsIFwiXCIsIFtcbiAgICBbXCJpZFwiLCBcInRhc2tEaWFsb2dcIl0sXG4gIF0pO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwibmV3VGFza0Zvcm1cIiwgZGlhbG9nLCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJuZXdUYXNrRm9ybVwiXSxcbiAgXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgY29uc3QgdGFza0RpYWxvZ0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkaWFsb2dEaXZzXCIsIG5ld1Rhc2tGb3JtLCBcIlwiLCBbXG4gICAgICBbXCJpZFwiLCBgdGFza0RpYWxvZ0RpdiR7aX1gXSxcbiAgICBdKTtcbiAgICBpZiAodGFza0RpYWxvZ0VsZW1lbnRzW2ldKSB7XG4gICAgICB0YXNrRGlhbG9nRWxlbWVudHNbaV0uZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudEFycmF5KSA9PiB7XG4gICAgICAgIGVsZW1lbnRBcnJheVsyXSA9IHRhc2tEaWFsb2dEaXY7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoLi4uZWxlbWVudEFycmF5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvL1BMQUNFSE9MREVSLi4uIFRPIExPT1AgVEhST1VHSCBMSVNUUyBMQVRFUlxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdE9mTGlzdHNcIik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgbnVsbCwgZHJvcGRvd24sIFwiXCIsIFtbXCJ2YWx1ZVwiLCBcIkFsbCB0YXNrc1wiXV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRpYWxvZ0ZvclRoaXNUYXNrKHRhc2tUb09wZW4sIGl0ZW1JbmRleCkge1xuICBpZiAodGFza1RvT3Blbikge1xuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKTtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGlhbG9nXCIpO1xuICAgIChuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza1RpdGxlXCJdLnZhbHVlID0gdGFza1RvT3Blbi50aXRsZSksXG4gICAgICAobmV3VGFza0Zvcm0uZWxlbWVudHNbXCJpbnB1dFRhc2tEZXNjXCJdLnZhbHVlID0gdGFza1RvT3Blbi5kZXNjcmlwdGlvbik7XG4gICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJpbnB1dFRhc2tEYXRlXCJdLnZhbHVlID0gdGFza1RvT3Blbi5kdWVEYXRlO1xuICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaGlnaFByaW9yaXR5VGFza1wiXS5jaGVja2VkID0gdGFza1RvT3Blbi5wcmlvcml0eTtcbiAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImRyb3Bkb3duTGlzdFwiXS52YWx1ZSA9IHRhc2tUb09wZW4uYXNzaWduZWRMaXN0c1swXTtcbiAgICBuZXdUYXNrID0gZmFsc2U7XG4gICAgZWRpdGVkVGFzayA9IHRhc2tUb09wZW47XG4gICAgdGFza0luZGV4ID0gaXRlbUluZGV4O1xuICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcmVtb3ZlVGFzayhlZGl0ZWRUYXNrKSB7XG4vLyAgIGVkaXRlZFRhc2suYXNzaWduZWRMaXN0cyA9IFtdO1xuLy8gICBlZGl0ZWRUYXNrID0gbnVsbDtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tEaWFsb2dFTHMoKSB7XG4gIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEaWFsb2dcIik7XG4gIGNvbnN0IGNsb3NlVGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VUYXNrRGlhbG9nXCIpO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFRhc2tCdG5cIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZVRhc2tCdG5cIik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROZXdCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gIH0pO1xuXG4gIGNsb3NlVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG5cbiAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRlZFRhc2spIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0IGVkaXRkXCIpO1xuICAgICAgcmVtb3ZlVGFzayhlZGl0ZWRUYXNrLCB0YXNrSW5kZXgpO1xuICAgIH1cbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhcbiAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrVGl0bGVcIl0udmFsdWUsXG4gICAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza0Rlc2NcIl0udmFsdWUsXG4gICAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza0RhdGVcIl0udmFsdWUsXG4gICAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImhpZ2hQcmlvcml0eVRhc2tcIl0uY2hlY2tlZCxcbiAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiZHJvcGRvd25MaXN0XCJdLnZhbHVlLFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgYWxsTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobGlzdCk7XG4gICAgICBsaXN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgfSk7XG5cbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG5cbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJlZGl0ZWQgdGFzaz9cIiwgZWRpdGVkVGFzayk7XG4gICAgaWYgKGVkaXRlZFRhc2spIHtcbiAgICAgIHJlbW92ZVRhc2soZWRpdGVkVGFzaywgdGFza0luZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIGJ0blwiKTtcbiAgICB9XG4gICAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayhcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgbGlzdHMsXG4gIGNvbXBsZXRlZFxuKSB7XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBhc3NpZ25lZExpc3RzOiBBcnJheS5pc0FycmF5KGxpc3RzKSA/IGxpc3RzIDogW2xpc3RzXSxcbiAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgfTtcblxuICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgcmV0dXJuIHRhc2s7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBhbGxMaXN0cywgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2xpc3RzXCI7XG5pbXBvcnQgY3JlYXRlTmV3VGFza0RpYWxvZywge1xuICBnZXRUYXNrRGlhbG9nRUxzLFxuICBvcGVuRGlhbG9nRm9yVGhpc1Rhc2ssXG59IGZyb20gXCIuL3Rhc2tEaWFsb2dcIjtcblxuY29uc3QgaWNvbkxpc3RGb290ZXIgPSBbXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1saXN0XCJdLCB0ZXh0OiBcIkFsbCB0YXNrc1wiIH0sXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1zdGFyXCJdLCB0ZXh0OiBcIlRvZGF5XCIgfSxcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWZvbGRlci10cmVlXCJdLCB0ZXh0OiBcIkFsbCBMaXN0c1wiIH0sXG4gIHsgY2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS11c2VyXCJdLCB0ZXh0OiBcIlByb2ZpbGVcIiB9LFxuXTtcblxuZnVuY3Rpb24gZ2V0SWNvbk1lbnUobWVudURpdikge1xuICBpY29uTGlzdEZvb3Rlci5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUl0ZW1EaXZcIiwgbWVudURpdik7XG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgaWNvbi5jbGFzc2VzLCBtZW51SXRlbURpdik7XG4gICAgY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIFwibWVudVRleHRcIiwgbWVudUl0ZW1EaXYsIGljb24udGV4dCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVhZGVyKGxpc3QpIHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiLCBjb250ZW50KTtcbiAgY29uc3QgdGl0bGVDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGl0bGVDdHJcIiwgaGVhZGVyKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiLCB0aXRsZUN0ciwgbGlzdC50aXRsZSk7XG4gIGNvbnN0IGxpc3REZXNjID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwibGlzdERlc2NcIiwgdGl0bGVDdHIsIGxpc3QuZGVzY3JpcHRpb24pO1xuICBjb25zdCBlbGxpcHNpc0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlbGxpcHNpc0RpdlwiLCBoZWFkZXIpO1xuICBjb25zdCBlbGxpcHNpcyA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJpXCIsXG4gICAgW1wiZmEtc29saWRcIiwgXCJmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiXSxcbiAgICBlbGxpcHNpc0RpdlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIG51bGwsIGNvbnRlbnQpO1xuICBjb25zdCBtZW51RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVEaXZcIiwgZm9vdGVyKTtcbiAgZ2V0SWNvbk1lbnUobWVudURpdik7XG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KFwiaDNcIiwgXCJsb2dvXCIsIGZvb3RlciwgXCJBYnNvbGlzdGx5XCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcmlvcml0eVN0YXR1cyh0YXNrVGl0bGUsIHRhc2spIHtcbiAgaWYgKHRhc2sucHJpb3JpdHkgPT09IHRydWUpIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tJdGVtcyh0YXNrc0N0ciwgZG9uZUN0ciwgbGlzdCkge1xuICBsZXQgaSA9IDA7XG4gIGxpc3QudGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwidGFza0l0ZW1cIixcbiAgICAgIHRhc2suY29tcGxldGVkID8gZG9uZUN0ciA6IHRhc2tzQ3RyLFxuICAgICAgXCJcIlxuICAgICk7XG4gICAgY29uc3QgdGFza0luZm9EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza0luZm9EaXZcIiwgdGFza0l0ZW0pO1xuICAgIGNvbnN0IG1vcmVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9yZURpdlwiLCB0YXNrSXRlbSk7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2tDb21wbGV0ZURpdlwiLCB0YXNrSXRlbSk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWxlbWVudChcImg0XCIsIFwidGFza1RpdGxlXCIsIHRhc2tJbmZvRGl2LCB0YXNrLnRpdGxlKTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFza0Rlc2NcIiwgdGFza0luZm9EaXYsIHRhc2suZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBbXCJlZGl0VGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGVuXCJdLFxuICAgICAgbW9yZURpdixcbiAgICAgIFwiXCIsXG4gICAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaV1dXG4gICAgKTtcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibGlzdEFzc2lnbm1lbnRcIiwgbW9yZURpdik7XG4gICAgY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIFwiZHVlRGF0ZVwiLCB0YXNrQ29tcGxldGVEaXYsIHRhc2suZHVlRGF0ZSk7XG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBbXG4gICAgICAgIFwiY29tcGxldGVCdG5cIixcbiAgICAgICAgXCJmYS1zb2xpZFwiLFxuICAgICAgICBcImZhLWNoZWNrXCIsXG4gICAgICAgIHRhc2suY29tcGxldGVkID8gXCJkb25lQnRuXCIgOiBcInRvZG9CdG5cIixcbiAgICAgIF0sXG4gICAgICB0YXNrQ29tcGxldGVEaXZcbiAgICApO1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJoclwiLCBcImJyZWFrXCIsIHRhc2tzQ3RyKTtcbiAgICByZW5kZXJQcmlvcml0eVN0YXR1cyh0YXNrVGl0bGUsIHRhc2spO1xuICAgIGkrKztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5UaGlzVGFza0VMKHRhc2tzQ3RyKSB7XG4gIHRhc2tzQ3RyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwib3BlbnRoaXNcIik7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSBcImVkaXRUYXNrIGZhLXNvbGlkIGZhLXBlblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LW51bWJlclwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1JbmRleCk7XG4gICAgICBjb25zdCB0YXNrVG9PcGVuID0gYWxsTGlzdHNbMF0udGFza3NBcnJheVtpdGVtSW5kZXhdO1xuICAgICAgY29uc29sZS5sb2codGFza1RvT3Blbik7XG4gICAgICBvcGVuRGlhbG9nRm9yVGhpc1Rhc2sodGFza1RvT3BlbiwgaXRlbUluZGV4KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3ZlRG9uZUl0ZW1zKHRhc2tzQ3RyLCBsaXN0KSB7fVxuXG4vLyBmdW5jdGlvbiByZW5kZXJDb21wbGV0ZWRUYXNrSXRlbXMoZG9uZUN0ciwgbGlzdCkge1xuLy8gICBsaXN0LnRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuLy8gICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuLy8gICAgICAgY29uc3QgZG9uZUl0ZW0gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZG9uZUl0ZW1cIiwgZG9uZUN0cik7XG4vLyAgICAgICBjcmVhdGVFbGVtZW50KFwiaDVcIiwgXCJkb25lXCIsIGRvbmVJdGVtLCB0YXNrLnRpdGxlKTtcbi8vICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiLCBcImRvbmVcIiwgZG9uZUl0ZW0sIHRhc2suZHVlRGF0ZSk7XG4vLyAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImxpc3RBc3NpZ25tZW50XCIsIFwiZG9uZVwiXSwgZG9uZUl0ZW0pO1xuLy8gICAgICAgY3JlYXRlRWxlbWVudChcbi8vICAgICAgICAgXCJidXR0b25cIixcbi8vICAgICAgICAgW1wiY29tcGxldGVCdG5cIiwgXCJmYS1zb2xpZFwiLCBcImZhLWNoZWNrXCIsIFwiZG9uZVwiXSxcbi8vICAgICAgICAgZG9uZUl0ZW1cbi8vICAgICAgICk7XG4vLyAgICAgICBjcmVhdGVFbGVtZW50KFwiaHJcIiwgXCJicmVha1wiLCBkb25lQ3RyKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29yZUFwcChsaXN0KSB7XG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmVuZGVySGVhZGVyKGxpc3QpO1xuICBjb25zdCBjb3JlQXBwQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvcmVBcHBDdHJcIiwgY29udGVudCwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwiY29yZUFwcEN0clwiXSxcbiAgXSk7XG5cbiAgY29uc3QgYWRkTmV3QnRuID0gY3JlYXRlRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcImFkZE5ld0J0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGx1c1wiXSxcbiAgICBjb250ZW50LFxuICAgIFwiXCIsXG4gICAgW1tcImlkXCIsIFwiYWRkTmV3QnRuXCJdXVxuICApO1xuICBjb25zdCB0YXNrc0N0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrc0N0clwiLCBjb3JlQXBwQ3RyKTtcbiAgY29uc3QgZG9uZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkb25lQ3RyXCIsIGNvcmVBcHBDdHIpO1xuICBjcmVhdGVFbGVtZW50KFwiaDRcIiwgXCJkb25laGVhZGVyXCIsIGRvbmVDdHIsIFwiRG9uZVwiKTtcbiAgcmVuZGVyVGFza0l0ZW1zKHRhc2tzQ3RyLCBkb25lQ3RyLCBsaXN0KTtcbiAgcmVuZGVyRm9vdGVyKGxpc3QpO1xuICBjcmVhdGVOZXdUYXNrRGlhbG9nKCk7XG4gIGdldFRhc2tEaWFsb2dFTHMoKTtcbiAgb3BlblRoaXNUYXNrRUwodGFza3NDdHIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZUxpc3QsIHsgYWxsTGlzdHMgfSBmcm9tIFwiLi9saXN0c1wiO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHJlbmRlckZvb3RlciwgcmVuZGVyQXBwQ3RyLCByZW5kZXJDb3JlQXBwIH0gZnJvbSBcIi4vdWlcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFRhc2tEaWFsb2dFTHMgfSBmcm9tIFwiLi90YXNrRGlhbG9nXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBsaXN0QWxsID0gY3JlYXRlTGlzdChcIkFsbCB0YXNrc1wiLCBcIkFsbCB5b3VyIHRhc2tzIGluIG9uZSBsaXN0XCIsIFwiYmx1ZVwiKTtcblxuICBjb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2soXG4gICAgXCJNeSBmaXJzdCB0byBkb1wiLFxuICAgIFwiSSBuZWVkIHRvIGRvIHNvbWV0aGluZ1wiLFxuICAgIFwiMDEgTWFyIDI0XCIsXG4gICAgdHJ1ZSxcbiAgICBsaXN0QWxsLnRpdGxlLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgY29uc3QgdGFzazIgPSBjcmVhdGVUYXNrKFxuICAgIFwiTXkgc2Vjb25kIHRvIGRvXCIsXG4gICAgXCJJIG5lZWQgdG8gZG8gc29tZXRoaW5nXCIsXG4gICAgXCIwMSBKYW4gMjRcIixcbiAgICBmYWxzZSxcbiAgICBsaXN0QWxsLnRpdGxlLFxuICAgIHRydWVcbiAgKTtcblxuICBjb25zdCB0YXNrMyA9IGNyZWF0ZVRhc2soXG4gICAgXCJUYXNrIDNcIixcbiAgICBudWxsLFxuICAgIFwiMTkgRGVjIDIzXCIsXG4gICAgZmFsc2UsXG4gICAgXCJBbGwgdGFza3NcIixcbiAgICBmYWxzZVxuICApO1xuXG4gIGFsbExpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBsaXN0LmFkZFRhc2sodGFzazEpO1xuICAgIGxpc3QuYWRkVGFzayh0YXNrMik7XG4gICAgbGlzdC5hZGRUYXNrKHRhc2szKTtcbiAgfSk7XG4gIHJlbmRlckNvcmVBcHAobGlzdEFsbCk7XG5cbiAgY29uc29sZS5sb2coXCJ0YXNrXCIsIHRhc2sxLCB0YXNrMiwgdGFzazMpO1xuICBjb25zb2xlLmxvZyhcImFsbFwiLCBsaXN0QWxsKTtcbiAgY29uc29sZS5sb2coXCJhbGxMaXN0c1wiLCBhbGxMaXN0cyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==