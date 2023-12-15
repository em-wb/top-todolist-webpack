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

.doneItem > .completeBtn {
  grid-column: 4/5;
  width: 28px;
  text-decoration: none;
  text-align: center;
  background-color: lightgreen;
}

.done {
  opacity: 50%;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main-font: \"Montserrat\", sans-serif;\n  --heading-font: \"Montserrat\", sans-serif;\n  --heading-weight: 600;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 16px;\n  line-height: 1.3;\n  font-family: var(--main-font);\n}\n\nheader {\n  grid-row: 1/2;\n  position: sticky;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-weight: var(--heading-weight);\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\ni {\n  font-size: 18px;\n}\n\nfooter {\n  grid-row: 7/8;\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--main-font);\n  border-radius: 0 0 5px 5px;\n  border-top: solid 1px lightgray;\n}\n\nhr {\n  opacity: 30%;\n  margin-bottom: 10px;\n}\n\ndialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 100vh;\n  border: none;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  padding: 40px;\n}\n\ninput,\ntextarea,\n.highPriority,\n.submitBtn .deleteBtn {\n  margin-top: 5px;\n  font-family: var(--main-font);\n}\n\n.content {\n  display: grid;\n  grid-template-rows: repeat(7, 1fr);\n  height: 100vh;\n  padding: 40px 20px 5px 20px;\n}\n\n.titleCtr {\n  grid-column: 5/2;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n}\n\n.ellipsisDiv {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.menuDiv {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.menuItemDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menuItemDiv > i {\n  margin-bottom: 5px;\n}\n\n.logo {\n  font-family: var(--heading-font);\n  font-weight: var(--heading-weight);\n  font-style: italic;\n  font-size: 0.9rem;\n  opacity: 80%;\n  color: aquamarine;\n}\n\n.coreAppCtr {\n  display: flex;\n  flex-direction: column;\n  gap: 20%;\n  grid-row: 2/7;\n  margin-bottom: 10px;\n}\n\n.taskItem {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 10px 0;\n}\n\n.taskInfoDiv {\n  grid-column: 1/5;\n}\n\n.taskTitle {\n  padding-left: 3px;\n}\n\n.taskDesc {\n  padding-left: 5px;\n}\n\n.moreDiv {\n  display: flex;\n  justify-content: end;\n  align-items: end;\n  gap: 19%;\n  grid-column: 5/6;\n}\n\n.listAssignment,\n.editTask {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-bottom: 3px;\n}\n\n.listAssignment {\n  background-color: blue;\n}\n.editTask {\n  color: grey;\n  opacity: 80%;\n}\n\n.taskCompleteDiv {\n  grid-column: 6/8;\n  text-align: center;\n}\n\n.priority {\n  border-left: solid 3px red;\n}\n\n.completeBtn {\n  width: 62%;\n  text-align: center;\n  border-radius: 10px;\n  border: none;\n  color: grey;\n  background-color: lightgrey;\n}\n\n.taskCompleteDiv > .completeBtn {\n  height: 16px;\n  font-size: 1rem;\n}\n\n.addNewBtn {\n  position: fixed;\n  width: fit-content;\n  height: fit-content;\n  font-size: 1.8rem;\n  padding: 8px;\n  border-radius: 50%;\n  border: none;\n  right: 39px;\n  bottom: 159px;\n}\n\n.doneItem {\n  display: inline-grid;\n  grid-template-columns: 2fr, 2fr, 1fr, 2fr;\n  font-size: 0.9rem;\n  width: 100%;\n  justify-items: center;\n  padding: 5px 20px 5px 3px;\n}\n\n.doneItem > h5,\n.doneItem > small {\n  justify-self: start;\n  text-decoration: line-through;\n}\n\n.doneItem > .completeBtn {\n  grid-column: 4/5;\n  width: 28px;\n  text-decoration: none;\n  text-align: center;\n  background-color: lightgreen;\n}\n\n.done {\n  opacity: 50%;\n}\n\n/* dialog */\n\n.dialogDivs > button {\n  border-radius: 1rem;\n}\n\nlabel {\n  font-size: 0.8rem;\n}\n\n#taskDialogDiv4 {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: 1fr auto;\n}\n\n#taskDialogDiv4 > p {\n  grid-column: 1/7;\n  grid-row: 1/2;\n}\n\n#taskDialogDiv4 > label {\n  margin-top: 14px;\n}\n\n#taskDialogDiv0 {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n\n.closeBtn {\n  grid-column: 2/3;\n  width: fit-content;\n  height: fit-content;\n  font-size: 2rem;\n  background-color: white;\n  border: none;\n}\n\n.submitBtn,\n.deleteBtn {\n  font-size: 1rem;\n  padding: 0.5rem;\n  width: 40%;\n  margin: 5%;\n  border: none;\n}\n\n.highPriority {\n  grid-column: 1/2;\n  border: none;\n  padding: 0.5rem;\n  width: 70%;\n  margin-top: 10px;\n}\n\n.submitBtn {\n  background-color: aquamarine;\n}\n\n.deleteBtn {\n  background-color: lightcoral;\n  color: white;\n}\n\n.input {\n  padding: 5px;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ createList)
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

function removeTask(task) {
  listToRender = task.assignedLists[0];
  allLists.forEach((list) => {
    if (list[i] === task) {
      list.splice(i, 1);
    }
  });
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

function openDialogForThisTask(taskToOpen) {
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
    taskDialog.showModal();
  }
}

function removeTask(editedTask) {
  editedTask.assignedLists = [];
  editedTask = null;
}

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
    if (!newTask) {
      removeTask(editedTask);
    } else {
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
    }
    newTaskForm.reset();
    taskDialog.close();
  });

  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedTask) {
      removeTask(editedTask);
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

function renderCurrentTaskItems(tasksCtr, list) {
  let i = 0;
  list.tasksArray.forEach((task) => {
    if (!task.completed) {
      const taskItem = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "taskItem", tasksCtr, "");
      const taskInfoDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "taskInfoDiv", taskItem);
      const moreDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "moreDiv", taskItem);
      const taskCompleteDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "taskCompleteDiv", taskItem);
      const taskTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "h4",
        "taskTitle",
        taskInfoDiv,
        task.title
      );
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
        ["completeBtn", "fa-solid", "fa-check"],
        taskCompleteDiv
      );
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("hr", "break", tasksCtr);
      renderPriorityStatus(taskTitle, task);
      i++;
    }
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
      (0,_taskDialog__WEBPACK_IMPORTED_MODULE_2__.openDialogForThisTask)(taskToOpen);
    }
  });
}

function renderCompletedTaskItems(doneCtr, list) {
  list.tasksArray.forEach((task) => {
    if (task.completed) {
      const doneItem = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "doneItem", doneCtr);
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h5", "done", doneItem, task.title);
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("small", "done", doneItem, task.dueDate);
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["listAssignment", "done"], doneItem);
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "button",
        ["completeBtn", "fa-solid", "fa-check", "done"],
        doneItem
      );
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("hr", "break", doneCtr);
    }
  });
}

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
  renderCompletedTaskItems(doneCtr, list);
  // getCompletedTaskELs();
  renderCurrentTaskItems(tasksCtr, list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFV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QUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNkO0FBQ2dDO0FBQ3JCO0FBQ0k7QUFDMUI7O0FBRXRCO0FBQ0Esa0JBQWtCLGtEQUFVOztBQUU1QixnQkFBZ0Isa0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDRDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsa0RBQWE7O0FBRWY7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBUTtBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2xpc3RzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3Rhc2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWZvbnQ6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAtLWhlYWRpbmctZm9udDogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0taGVhZGluZy13ZWlnaHQ6IDYwMDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbmhlYWRlciB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5mb290ZXIge1xuICBncmlkLXJvdzogNy84O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XG59XG5cbmhyIHtcbiAgb3BhY2l0eTogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuLmhpZ2hQcmlvcml0eSxcbi5zdWJtaXRCdG4gLmRlbGV0ZUJ0biB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogNDBweCAyMHB4IDVweCAyMHB4O1xufVxuXG4udGl0bGVDdHIge1xuICBncmlkLWNvbHVtbjogNS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbGxpcHNpc0RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVudURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1lbnVJdGVtRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVJdGVtRGl2ID4gaSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogODAlO1xuICBjb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLmNvcmVBcHBDdHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwJTtcbiAgZ3JpZC1yb3c6IDIvNztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhc2tJdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4udGFza0luZm9EaXYge1xuICBncmlkLWNvbHVtbjogMS81O1xufVxuXG4udGFza1RpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi50YXNrRGVzYyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubW9yZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBnYXA6IDE5JTtcbiAgZ3JpZC1jb2x1bW46IDUvNjtcbn1cblxuLmxpc3RBc3NpZ25tZW50LFxuLmVkaXRUYXNrIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5saXN0QXNzaWdubWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uZWRpdFRhc2sge1xuICBjb2xvcjogZ3JleTtcbiAgb3BhY2l0eTogODAlO1xufVxuXG4udGFza0NvbXBsZXRlRGl2IHtcbiAgZ3JpZC1jb2x1bW46IDYvODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHJlZDtcbn1cblxuLmNvbXBsZXRlQnRuIHtcbiAgd2lkdGg6IDYyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi50YXNrQ29tcGxldGVEaXYgPiAuY29tcGxldGVCdG4ge1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmFkZE5ld0J0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmlnaHQ6IDM5cHg7XG4gIGJvdHRvbTogMTU5cHg7XG59XG5cbi5kb25lSXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciwgMmZyLCAxZnIsIDJmcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAzcHg7XG59XG5cbi5kb25lSXRlbSA+IGg1LFxuLmRvbmVJdGVtID4gc21hbGwge1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmRvbmVJdGVtID4gLmNvbXBsZXRlQnRuIHtcbiAgZ3JpZC1jb2x1bW46IDQvNTtcbiAgd2lkdGg6IDI4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uZG9uZSB7XG4gIG9wYWNpdHk6IDUwJTtcbn1cblxuLyogZGlhbG9nICovXG5cbi5kaWFsb2dEaXZzID4gYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuI3Rhc2tEaWFsb2dEaXY0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cblxuI3Rhc2tEaWFsb2dEaXY0ID4gcCB7XG4gIGdyaWQtY29sdW1uOiAxLzc7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbiN0YXNrRGlhbG9nRGl2NCA+IGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuI3Rhc2tEaWFsb2dEaXYwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsb3NlQnRuIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zdWJtaXRCdG4sXG4uZGVsZXRlQnRuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogNSU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmhpZ2hQcmlvcml0eSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLmRlbGV0ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5j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QjtBQUMzQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWFpbi1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWhlYWRpbmctZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1oZWFkaW5nLXdlaWdodDogNjAwO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDcvODtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XFxufVxcblxcbmhyIHtcXG4gIG9wYWNpdHk6IDMwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG4uaGlnaFByaW9yaXR5LFxcbi5zdWJtaXRCdG4gLmRlbGV0ZUJ0biB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogNDBweCAyMHB4IDVweCAyMHB4O1xcbn1cXG5cXG4udGl0bGVDdHIge1xcbiAgZ3JpZC1jb2x1bW46IDUvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVsbGlwc2lzRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnVJdGVtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtRGl2ID4gaSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3BhY2l0eTogODAlO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5jb3JlQXBwQ3RyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMCU7XFxuICBncmlkLXJvdzogMi83O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2tJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4udGFza0luZm9EaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvNTtcXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuLnRhc2tEZXNjIHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4ubW9yZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgZ2FwOiAxOSU7XFxuICBncmlkLWNvbHVtbjogNS82O1xcbn1cXG5cXG4ubGlzdEFzc2lnbm1lbnQsXFxuLmVkaXRUYXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ubGlzdEFzc2lnbm1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLmVkaXRUYXNrIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlRGl2IHtcXG4gIGdyaWQtY29sdW1uOiA2Lzg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogc29saWQgM3B4IHJlZDtcXG59XFxuXFxuLmNvbXBsZXRlQnRuIHtcXG4gIHdpZHRoOiA2MiU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi50YXNrQ29tcGxldGVEaXYgPiAuY29tcGxldGVCdG4ge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkTmV3QnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJpZ2h0OiAzOXB4O1xcbiAgYm90dG9tOiAxNTlweDtcXG59XFxuXFxuLmRvbmVJdGVtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIsIDJmciwgMWZyLCAyZnI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDNweDtcXG59XFxuXFxuLmRvbmVJdGVtID4gaDUsXFxuLmRvbmVJdGVtID4gc21hbGwge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZG9uZUl0ZW0gPiAuY29tcGxldGVCdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmRvbmUge1xcbiAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4vKiBkaWFsb2cgKi9cXG5cXG4uZGlhbG9nRGl2cyA+IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI3Rhc2tEaWFsb2dEaXY0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG59XFxuXFxuI3Rhc2tEaWFsb2dEaXY0ID4gcCB7XFxuICBncmlkLWNvbHVtbjogMS83O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuI3Rhc2tEaWFsb2dEaXY0ID4gbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuI3Rhc2tEaWFsb2dEaXYwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zdWJtaXRCdG4sXFxuLmRlbGV0ZUJ0biB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiA1JTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhpZ2hQcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5zdWJtaXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLmRlbGV0ZUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoXG4gIHRhZyxcbiAgY2xhc3NMaXN0LFxuICBwYXJlbnRFbCxcbiAgdGV4dCxcbiAgYXR0cmlidXRlc1xuKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc0xpc3QpIHtcbiAgICBjbGFzc0xpc3QgPSBBcnJheS5pc0FycmF5KGNsYXNzTGlzdClcbiAgICAgID8gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdClcbiAgICAgIDogbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gIH1cbiAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGVsZW1lbnRbMF0sIGVsZW1lbnRbMV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGFyZW50RWwuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbiIsImltcG9ydCB7IHJlbmRlckNvcmVBcHAgfSBmcm9tIFwiLi91aVwiO1xuXG5sZXQgbGlzdFRvUmVuZGVyID0gXCJBbGwgdGFza3NcIjtcbmV4cG9ydCBjb25zdCBhbGxMaXN0cyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRUb0FsbExpc3RzQXJyYXkoKSB7XG4gIGFsbExpc3RzLnB1c2godGhpcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICBjb25zb2xlLmxvZyhcInRhc2sgaW4gYWRkdGFza1wiLCB0YXNrLmFzc2lnbmVkTGlzdHMpO1xuICBpZiAodGFzay5hc3NpZ25lZExpc3RzLnNvbWUoKGxpc3QpID0+IGxpc3QgPT09IHRoaXMudGl0bGUpKSB7XG4gICAgdGhpcy50YXNrc0FycmF5LnB1c2godGFzayk7XG4gIH1cbiAgbGlzdFRvUmVuZGVyID0gdGFzay5hc3NpZ25lZExpc3RzWzBdO1xuICBmaW5kTGlzdFRvUmVuZGVyKGxpc3RUb1JlbmRlcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICBsaXN0VG9SZW5kZXIgPSB0YXNrLmFzc2lnbmVkTGlzdHNbMF07XG4gIGFsbExpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBpZiAobGlzdFtpXSA9PT0gdGFzaykge1xuICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9KTtcbiAgZmluZExpc3RUb1JlbmRlcihsaXN0VG9SZW5kZXIpO1xufVxuXG5mdW5jdGlvbiBmaW5kTGlzdFRvUmVuZGVyKGxpc3RUb1JlbmRlcikge1xuICBhbGxMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgaWYgKGxpc3QudGl0bGUgPT09IGxpc3RUb1JlbmRlcikgcmVuZGVyQ29yZUFwcChsaXN0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBjb2xvdXIpIHtcbiAgY29uc3QgbGlzdCA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGNvbG91cjogY29sb3VyLFxuICAgIHRhc2tzQXJyYXk6IFtdLFxuICAgIGFkZFRvQWxsTGlzdHNBcnJheTogYWRkVG9BbGxMaXN0c0FycmF5LFxuICAgIGFkZFRhc2s6IGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzazogcmVtb3ZlVGFzayxcbiAgfTtcblxuICBsaXN0LmFkZFRvQWxsTGlzdHNBcnJheSgpO1xuXG4gIHJldHVybiBsaXN0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgYWxsTGlzdHMgfSBmcm9tIFwiLi9saXN0c1wiO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHJlbmRlckNvcmVBcHAgfSBmcm9tIFwiLi91aVwiO1xuXG5sZXQgbmV3VGFzayA9IHRydWU7XG5sZXQgZWRpdGVkVGFzayA9IG51bGw7XG5jb25zdCB0YXNrRGlhbG9nRWxlbWVudHMgPSBbXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1wiaDFcIiwgbnVsbCwgbnVsbCwgXCJOZXcgVGFza1wiLCBbW1wiaWRcIiwgXCJ0YXNrRGlhbG9nSDFcIl1dXSxcbiAgICAgIFtcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgW1wiY2xvc2VCdG5cIiwgXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCJdLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbW1wiaWRcIiwgXCJjbG9zZVRhc2tEaWFsb2dcIl1dLFxuICAgICAgXSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcImxhYmVsXCIsIG51bGwsIG51bGwsIFwiVGl0bGVcIl0sXG4gICAgICBbXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJpbnB1dFRhc2tUaXRsZVwiXSxcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwidGV4dFwiXSxcbiAgICAgICAgICBbXCJyZXF1aXJlZFwiLCBcIlwiXSxcbiAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIkRvIHRoZSBncm9jZXJ5IHNob3BcIl0sXG4gICAgICAgICAgW1wibWF4bGVuZ3RoXCIsIFwiNTBcIl0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1wibGFiZWxcIiwgbnVsbCwgbnVsbCwgXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCJdLFxuICAgICAgW1xuICAgICAgICBcInRleHRhcmVhXCIsXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwiaW5wdXRUYXNrRGVzY1wiXSxcbiAgICAgICAgICBbXCJyb3dzXCIsIFwiMlwiXSxcbiAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIkVnZ3MsIG1pbGssIGNlcmVhbCwgYnJlYWQsIGJhbmFuYXNcIl0sXG4gICAgICAgICAgW1wibWF4bGVuZ3RoXCIsIFwiMjUwXCJdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcImxhYmVsXCIsIFwidGV4dElucHV0XCIsIG51bGwsIFwiRHVlIERhdGUgKG9wdGlvbmFsKVwiXSxcbiAgICAgIFtcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcImlucHV0VGFza0RhdGVcIl0sXG4gICAgICAgICAgW1widHlwZVwiLCBcImRhdGVcIl0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1wicFwiLCBudWxsLCBudWxsLCBcIlByaW9yaXR5XCJdLFxuXG4gICAgICBbXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgXCJoaWdoUHJpb3JpdHlcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwiaGlnaFByaW9yaXR5VGFza1wiXSxcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiY2hlY2tib3hcIl0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgW1wibGFiZWxcIiwgbnVsbCwgbnVsbCwgXCJIaWdoXCIsIFtbXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlUYXNrXCJdXV0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXCJsYWJlbFwiLCBudWxsLCBudWxsLCBcIkxpc3QgKG9wdGlvbmFsKVwiXSxcbiAgICAgIFtcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJkcm9wZG93bkxpc3RcIl0sXG4gICAgICAgICAgW1wibGlzdFwiLCBcImxpc3RPZkxpc3RzXCJdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIFtcImRhdGFsaXN0XCIsIG51bGwsIG51bGwsIFwiXCIsIFssIFtcImlkXCIsIFwibGlzdE9mTGlzdHNcIl1dXSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJzdWJtaXRCdG5cIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJMaXN0IGl0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcInN1Ym1pdFRhc2tCdG5cIl0sXG4gICAgICAgICAgW1widHlwZVwiLCBcInN1Ym1pdFwiXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICBbXCJidXR0b25cIiwgXCJkZWxldGVCdG5cIiwgbnVsbCwgXCJEZWxldGUgaXRcIiwgW1tcImlkXCIsIFwiZGVsZXRlVGFza0J0blwiXV1dLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrRGlhbG9nKCkge1xuICBjb25zdCBkaWFsb2cgPSBjcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIsIFwidGFza0RpYWxvZ1wiLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJ0YXNrRGlhbG9nXCJdLFxuICBdKTtcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcIm5ld1Rhc2tGb3JtXCIsIGRpYWxvZywgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwibmV3VGFza0Zvcm1cIl0sXG4gIF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGNvbnN0IHRhc2tEaWFsb2dEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGlhbG9nRGl2c1wiLCBuZXdUYXNrRm9ybSwgXCJcIiwgW1xuICAgICAgW1wiaWRcIiwgYHRhc2tEaWFsb2dEaXYke2l9YF0sXG4gICAgXSk7XG4gICAgaWYgKHRhc2tEaWFsb2dFbGVtZW50c1tpXSkge1xuICAgICAgdGFza0RpYWxvZ0VsZW1lbnRzW2ldLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnRBcnJheSkgPT4ge1xuICAgICAgICBlbGVtZW50QXJyYXlbMl0gPSB0YXNrRGlhbG9nRGl2O1xuICAgICAgICBjcmVhdGVFbGVtZW50KC4uLmVsZW1lbnRBcnJheSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy9QTEFDRUhPTERFUi4uLiBUTyBMT09QIFRIUk9VR0ggTElTVFMgTEFURVJcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RPZkxpc3RzXCIpO1xuICBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIG51bGwsIGRyb3Bkb3duLCBcIlwiLCBbW1widmFsdWVcIiwgXCJBbGwgdGFza3NcIl1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EaWFsb2dGb3JUaGlzVGFzayh0YXNrVG9PcGVuKSB7XG4gIGlmICh0YXNrVG9PcGVuKSB7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpO1xuICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEaWFsb2dcIik7XG4gICAgKG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrVGl0bGVcIl0udmFsdWUgPSB0YXNrVG9PcGVuLnRpdGxlKSxcbiAgICAgIChuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza0Rlc2NcIl0udmFsdWUgPSB0YXNrVG9PcGVuLmRlc2NyaXB0aW9uKTtcbiAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza0RhdGVcIl0udmFsdWUgPSB0YXNrVG9PcGVuLmR1ZURhdGU7XG4gICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJoaWdoUHJpb3JpdHlUYXNrXCJdLmNoZWNrZWQgPSB0YXNrVG9PcGVuLnByaW9yaXR5O1xuICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiZHJvcGRvd25MaXN0XCJdLnZhbHVlID0gdGFza1RvT3Blbi5hc3NpZ25lZExpc3RzWzBdO1xuICAgIG5ld1Rhc2sgPSBmYWxzZTtcbiAgICBlZGl0ZWRUYXNrID0gdGFza1RvT3BlbjtcbiAgICB0YXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZWRpdGVkVGFzaykge1xuICBlZGl0ZWRUYXNrLmFzc2lnbmVkTGlzdHMgPSBbXTtcbiAgZWRpdGVkVGFzayA9IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRGlhbG9nRUxzKCkge1xuICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGlhbG9nXCIpO1xuICBjb25zdCBjbG9zZVRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlVGFza0RpYWxvZ1wiKTtcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpO1xuICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRUYXNrQnRuXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVUYXNrQnRuXCIpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmV3QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBjbG9zZVRhc2tEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuXG4gIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmV3VGFzaykge1xuICAgICAgcmVtb3ZlVGFzayhlZGl0ZWRUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soXG4gICAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrVGl0bGVcIl0udmFsdWUsXG4gICAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrRGVzY1wiXS52YWx1ZSxcbiAgICAgICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJpbnB1dFRhc2tEYXRlXCJdLnZhbHVlLFxuICAgICAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImhpZ2hQcmlvcml0eVRhc2tcIl0uY2hlY2tlZCxcbiAgICAgICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJkcm9wZG93bkxpc3RcIl0udmFsdWUsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuXG4gICAgICBhbGxMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgICAgICBsaXN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlZGl0ZWRUYXNrKSB7XG4gICAgICByZW1vdmVUYXNrKGVkaXRlZFRhc2spO1xuICAgIH1cbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBsaXN0cyxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgdGFzayA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGFzc2lnbmVkTGlzdHM6IEFycmF5LmlzQXJyYXkobGlzdHMpID8gbGlzdHMgOiBbbGlzdHNdLFxuICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHRhc2spO1xuICByZXR1cm4gdGFzaztcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSBcIi4vbGlzdHNcIjtcbmltcG9ydCBjcmVhdGVOZXdUYXNrRGlhbG9nLCB7XG4gIGdldFRhc2tEaWFsb2dFTHMsXG4gIG9wZW5EaWFsb2dGb3JUaGlzVGFzayxcbn0gZnJvbSBcIi4vdGFza0RpYWxvZ1wiO1xuXG5jb25zdCBpY29uTGlzdEZvb3RlciA9IFtcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWxpc3RcIl0sIHRleHQ6IFwiQWxsIHRhc2tzXCIgfSxcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLXN0YXJcIl0sIHRleHQ6IFwiVG9kYXlcIiB9LFxuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtZm9sZGVyLXRyZWVcIl0sIHRleHQ6IFwiQWxsIExpc3RzXCIgfSxcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLXVzZXJcIl0sIHRleHQ6IFwiUHJvZmlsZVwiIH0sXG5dO1xuXG5mdW5jdGlvbiBnZXRJY29uTWVudShtZW51RGl2KSB7XG4gIGljb25MaXN0Rm9vdGVyLmZvckVhY2goKGljb24pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbURpdlwiLCBtZW51RGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBpY29uLmNsYXNzZXMsIG1lbnVJdGVtRGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwic21hbGxcIiwgXCJtZW51VGV4dFwiLCBtZW51SXRlbURpdiwgaWNvbi50ZXh0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIZWFkZXIobGlzdCkge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIGNvbnRlbnQpO1xuICBjb25zdCB0aXRsZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZUN0clwiLCBoZWFkZXIpO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInRpdGxlXCIsIHRpdGxlQ3RyLCBsaXN0LnRpdGxlKTtcbiAgY29uc3QgbGlzdERlc2MgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJsaXN0RGVzY1wiLCB0aXRsZUN0ciwgbGlzdC5kZXNjcmlwdGlvbik7XG4gIGNvbnN0IGVsbGlwc2lzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVsbGlwc2lzRGl2XCIsIGhlYWRlcik7XG4gIGNvbnN0IGVsbGlwc2lzID0gY3JlYXRlRWxlbWVudChcbiAgICBcImlcIixcbiAgICBbXCJmYS1zb2xpZFwiLCBcImZhLWVsbGlwc2lzLXZlcnRpY2FsXCJdLFxuICAgIGVsbGlwc2lzRGl2XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgY29udGVudCk7XG4gIGNvbnN0IG1lbnVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudURpdlwiLCBmb290ZXIpO1xuICBnZXRJY29uTWVudShtZW51RGl2KTtcbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBcImxvZ29cIiwgZm9vdGVyLCBcIkFic29saXN0bHlcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByaW9yaXR5U3RhdHVzKHRhc2tUaXRsZSwgdGFzaykge1xuICBpZiAodGFzay5wcmlvcml0eSA9PT0gdHJ1ZSkgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFRhc2tJdGVtcyh0YXNrc0N0ciwgbGlzdCkge1xuICBsZXQgaSA9IDA7XG4gIGxpc3QudGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKCF0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza0l0ZW1cIiwgdGFza3NDdHIsIFwiXCIpO1xuICAgICAgY29uc3QgdGFza0luZm9EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza0luZm9EaXZcIiwgdGFza0l0ZW0pO1xuICAgICAgY29uc3QgbW9yZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtb3JlRGl2XCIsIHRhc2tJdGVtKTtcbiAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrQ29tcGxldGVEaXZcIiwgdGFza0l0ZW0pO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJoNFwiLFxuICAgICAgICBcInRhc2tUaXRsZVwiLFxuICAgICAgICB0YXNrSW5mb0RpdixcbiAgICAgICAgdGFzay50aXRsZVxuICAgICAgKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFza0Rlc2NcIiwgdGFza0luZm9EaXYsIHRhc2suZGVzY3JpcHRpb24pO1xuICAgICAgY29uc3QgZWRpdFRhc2sgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJlZGl0VGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGVuXCJdLFxuICAgICAgICBtb3JlRGl2LFxuICAgICAgICBcIlwiLFxuICAgICAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaV1dXG4gICAgICApO1xuXG4gICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibGlzdEFzc2lnbm1lbnRcIiwgbW9yZURpdik7XG4gICAgICBjcmVhdGVFbGVtZW50KFwic21hbGxcIiwgXCJkdWVEYXRlXCIsIHRhc2tDb21wbGV0ZURpdiwgdGFzay5kdWVEYXRlKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFtcImNvbXBsZXRlQnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS1jaGVja1wiXSxcbiAgICAgICAgdGFza0NvbXBsZXRlRGl2XG4gICAgICApO1xuICAgICAgY3JlYXRlRWxlbWVudChcImhyXCIsIFwiYnJlYWtcIiwgdGFza3NDdHIpO1xuICAgICAgcmVuZGVyUHJpb3JpdHlTdGF0dXModGFza1RpdGxlLCB0YXNrKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuVGhpc1Rhc2tFTCh0YXNrc0N0cikge1xuICB0YXNrc0N0ci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW50aGlzXCIpO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJlZGl0VGFzayBmYS1zb2xpZCBmYS1wZW5cIikge1xuICAgICAgY29uc29sZS5sb2coXCJvcGVuXCIpO1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1udW1iZXJcIik7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtSW5kZXgpO1xuICAgICAgY29uc3QgdGFza1RvT3BlbiA9IGFsbExpc3RzWzBdLnRhc2tzQXJyYXlbaXRlbUluZGV4XTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tUb09wZW4pO1xuICAgICAgb3BlbkRpYWxvZ0ZvclRoaXNUYXNrKHRhc2tUb09wZW4pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBsZXRlZFRhc2tJdGVtcyhkb25lQ3RyLCBsaXN0KSB7XG4gIGxpc3QudGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICBjb25zdCBkb25lSXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkb25lSXRlbVwiLCBkb25lQ3RyKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBcImRvbmVcIiwgZG9uZUl0ZW0sIHRhc2sudGl0bGUpO1xuICAgICAgY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIFwiZG9uZVwiLCBkb25lSXRlbSwgdGFzay5kdWVEYXRlKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibGlzdEFzc2lnbm1lbnRcIiwgXCJkb25lXCJdLCBkb25lSXRlbSk7XG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBbXCJjb21wbGV0ZUJ0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEtY2hlY2tcIiwgXCJkb25lXCJdLFxuICAgICAgICBkb25lSXRlbVxuICAgICAgKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJoclwiLCBcImJyZWFrXCIsIGRvbmVDdHIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb3JlQXBwKGxpc3QpIHtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZW5kZXJIZWFkZXIobGlzdCk7XG4gIGNvbnN0IGNvcmVBcHBDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29yZUFwcEN0clwiLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJjb3JlQXBwQ3RyXCJdLFxuICBdKTtcblxuICBjb25zdCBhZGROZXdCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wiYWRkTmV3QnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS1wbHVzXCJdLFxuICAgIGNvbnRlbnQsXG4gICAgXCJcIixcbiAgICBbW1wiaWRcIiwgXCJhZGROZXdCdG5cIl1dXG4gICk7XG4gIGNvbnN0IHRhc2tzQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2tzQ3RyXCIsIGNvcmVBcHBDdHIpO1xuICBjb25zdCBkb25lQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRvbmVDdHJcIiwgY29yZUFwcEN0cik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBcImRvbmVoZWFkZXJcIiwgZG9uZUN0ciwgXCJEb25lXCIpO1xuICByZW5kZXJDb21wbGV0ZWRUYXNrSXRlbXMoZG9uZUN0ciwgbGlzdCk7XG4gIC8vIGdldENvbXBsZXRlZFRhc2tFTHMoKTtcbiAgcmVuZGVyQ3VycmVudFRhc2tJdGVtcyh0YXNrc0N0ciwgbGlzdCk7XG4gIHJlbmRlckZvb3RlcihsaXN0KTtcbiAgY3JlYXRlTmV3VGFza0RpYWxvZygpO1xuICBnZXRUYXNrRGlhbG9nRUxzKCk7XG4gIG9wZW5UaGlzVGFza0VMKHRhc2tzQ3RyKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVMaXN0LCB7IGFsbExpc3RzIH0gZnJvbSBcIi4vbGlzdHNcIjtcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyByZW5kZXJGb290ZXIsIHJlbmRlckFwcEN0ciwgcmVuZGVyQ29yZUFwcCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRUYXNrRGlhbG9nRUxzIH0gZnJvbSBcIi4vdGFza0RpYWxvZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbGlzdEFsbCA9IGNyZWF0ZUxpc3QoXCJBbGwgdGFza3NcIiwgXCJBbGwgeW91ciB0YXNrcyBpbiBvbmUgbGlzdFwiLCBcImJsdWVcIik7XG5cbiAgY29uc3QgdGFzazEgPSBjcmVhdGVUYXNrKFxuICAgIFwiTXkgZmlyc3QgdG8gZG9cIixcbiAgICBcIkkgbmVlZCB0byBkbyBzb21ldGhpbmdcIixcbiAgICBcIjAxIE1hciAyNFwiLFxuICAgIHRydWUsXG4gICAgbGlzdEFsbC50aXRsZSxcbiAgICBmYWxzZVxuICApO1xuXG4gIGNvbnN0IHRhc2syID0gY3JlYXRlVGFzayhcbiAgICBcIk15IHNlY29uZCB0byBkb1wiLFxuICAgIFwiSSBuZWVkIHRvIGRvIHNvbWV0aGluZ1wiLFxuICAgIFwiMDEgSmFuIDI0XCIsXG4gICAgZmFsc2UsXG4gICAgbGlzdEFsbC50aXRsZSxcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3QgdGFzazMgPSBjcmVhdGVUYXNrKFxuICAgIFwiVGFzayAzXCIsXG4gICAgbnVsbCxcbiAgICBcIjE5IERlYyAyM1wiLFxuICAgIGZhbHNlLFxuICAgIFwiQWxsIHRhc2tzXCIsXG4gICAgZmFsc2VcbiAgKTtcblxuICBhbGxMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5hZGRUYXNrKHRhc2sxKTtcbiAgICBsaXN0LmFkZFRhc2sodGFzazIpO1xuICAgIGxpc3QuYWRkVGFzayh0YXNrMyk7XG4gIH0pO1xuICByZW5kZXJDb3JlQXBwKGxpc3RBbGwpO1xuXG4gIGNvbnNvbGUubG9nKFwidGFza1wiLCB0YXNrMSwgdGFzazIsIHRhc2szKTtcbiAgY29uc29sZS5sb2coXCJhbGxcIiwgbGlzdEFsbCk7XG4gIGNvbnNvbGUubG9nKFwiYWxsTGlzdHNcIiwgYWxsTGlzdHMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=