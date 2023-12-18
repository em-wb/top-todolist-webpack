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
      ["completeBtn", "fa-solid", "fa-check"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFV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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0M7QUFDZDtBQUNnQztBQUNyQjtBQUNJO0FBQzFCOztBQUV0QjtBQUNBLGtCQUFrQixrREFBVTs7QUFFNUIsZ0JBQWdCLGtEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isa0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw0Q0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGtEQUFhOztBQUVmO0FBQ0E7QUFDQSwwQkFBMEIsNENBQVE7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svLi9zcmMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9saXN0cy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay8uL3NyYy90YXNrRGlhbG9nLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbWFpbi1mb250OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgLS1oZWFkaW5nLWZvbnQ6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAtLWhlYWRpbmctd2VpZ2h0OiA2MDA7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuXG5oZWFkZXIge1xuICBncmlkLXJvdzogMS8yO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1yb3c6IDcvODtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggbGlnaHRncmF5O1xufVxuXG5ociB7XG4gIG9wYWNpdHk6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuZGlhbG9nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbi5oaWdoUHJpb3JpdHksXG4uc3VibWl0QnRuIC5kZWxldGVCdG4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDQwcHggMjBweCA1cHggMjBweDtcbn1cblxuLnRpdGxlQ3RyIHtcbiAgZ3JpZC1jb2x1bW46IDUvMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWxsaXBzaXNEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lbnVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51SXRlbURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51SXRlbURpdiA+IGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5sb2dvIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG9wYWNpdHk6IDgwJTtcbiAgY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbi5jb3JlQXBwQ3RyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMCU7XG4gIGdyaWQtcm93OiAyLzc7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YXNrSXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLnRhc2tJbmZvRGl2IHtcbiAgZ3JpZC1jb2x1bW46IDEvNTtcbn1cblxuLnRhc2tUaXRsZSB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4udGFza0Rlc2Mge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm1vcmVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgZ2FwOiAxOSU7XG4gIGdyaWQtY29sdW1uOiA1LzY7XG59XG5cbi5saXN0QXNzaWdubWVudCxcbi5lZGl0VGFzayB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4ubGlzdEFzc2lnbm1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLmVkaXRUYXNrIHtcbiAgY29sb3I6IGdyZXk7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuLnRhc2tDb21wbGV0ZURpdiB7XG4gIGdyaWQtY29sdW1uOiA2Lzg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCByZWQ7XG59XG5cbi5jb21wbGV0ZUJ0biB7XG4gIHdpZHRoOiA2MiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuXG4udGFza0NvbXBsZXRlRGl2ID4gLmNvbXBsZXRlQnRuIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5hZGROZXdCdG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHJpZ2h0OiAzOXB4O1xuICBib3R0b206IDE1OXB4O1xufVxuXG4uZG9uZUl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIsIDJmciwgMWZyLCAyZnI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMjBweCA1cHggM3B4O1xufVxuXG4uZG9uZUl0ZW0gPiBoNSxcbi5kb25lSXRlbSA+IHNtYWxsIHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5kb25lSXRlbSA+IC5jb21wbGV0ZUJ0biB7XG4gIGdyaWQtY29sdW1uOiA0LzU7XG4gIHdpZHRoOiAyOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmRvbmUge1xuICBvcGFjaXR5OiA1MCU7XG59XG5cbi8qIGRpYWxvZyAqL1xuXG4uZGlhbG9nRGl2cyA+IGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbiN0YXNrRGlhbG9nRGl2NCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG59XG5cbiN0YXNrRGlhbG9nRGl2NCA+IHAge1xuICBncmlkLWNvbHVtbjogMS83O1xuICBncmlkLXJvdzogMS8yO1xufVxuXG4jdGFza0RpYWxvZ0RpdjQgPiBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbiN0YXNrRGlhbG9nRGl2MCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZUJ0biB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3VibWl0QnRuLFxuLmRlbGV0ZUJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDUlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oaWdoUHJpb3JpdHkge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbi5kZWxldGVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JD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LGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1oZWFkaW5nLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0taGVhZGluZy13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5pIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtcm93OiA3Lzg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggbGlnaHRncmF5O1xcbn1cXG5cXG5ociB7XFxuICBvcGFjaXR5OiAzMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuLmhpZ2hQcmlvcml0eSxcXG4uc3VibWl0QnRuIC5kZWxldGVCdG4ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDQwcHggMjBweCA1cHggMjBweDtcXG59XFxuXFxuLnRpdGxlQ3RyIHtcXG4gIGdyaWQtY29sdW1uOiA1LzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbGxpcHNpc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWVudURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tZW51SXRlbURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51SXRlbURpdiA+IGkge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG9wYWNpdHk6IDgwJTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uY29yZUFwcEN0ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjAlO1xcbiAgZ3JpZC1yb3c6IDIvNztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLnRhc2tJbmZvRGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzU7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbi50YXNrRGVzYyB7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLm1vcmVEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGdhcDogMTklO1xcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXG59XFxuXFxuLmxpc3RBc3NpZ25tZW50LFxcbi5lZGl0VGFzayB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuLmxpc3RBc3NpZ25tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5lZGl0VGFzayB7XFxuICBjb2xvcjogZ3JleTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZURpdiB7XFxuICBncmlkLWNvbHVtbjogNi84O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCByZWQ7XFxufVxcblxcbi5jb21wbGV0ZUJ0biB7XFxuICB3aWR0aDogNjIlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4udGFza0NvbXBsZXRlRGl2ID4gLmNvbXBsZXRlQnRuIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZE5ld0J0biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICByaWdodDogMzlweDtcXG4gIGJvdHRvbTogMTU5cHg7XFxufVxcblxcbi5kb25lSXRlbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyLCAyZnIsIDFmciwgMmZyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAzcHg7XFxufVxcblxcbi5kb25lSXRlbSA+IGg1LFxcbi5kb25lSXRlbSA+IHNtYWxsIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRvbmVJdGVtID4gLmNvbXBsZXRlQnRuIHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxuICB3aWR0aDogMjhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5kb25lIHtcXG4gIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLyogZGlhbG9nICovXFxuXFxuLmRpYWxvZ0RpdnMgPiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiN0YXNrRGlhbG9nRGl2NCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxufVxcblxcbiN0YXNrRGlhbG9nRGl2NCA+IHAge1xcbiAgZ3JpZC1jb2x1bW46IDEvNztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbiN0YXNrRGlhbG9nRGl2NCA+IGxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbiN0YXNrRGlhbG9nRGl2MCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc3VibWl0QnRuLFxcbi5kZWxldGVCdG4ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogNSU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5kZWxldGVCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KFxuICB0YWcsXG4gIGNsYXNzTGlzdCxcbiAgcGFyZW50RWwsXG4gIHRleHQsXG4gIGF0dHJpYnV0ZXNcbikge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgY2xhc3NMaXN0ID0gQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpXG4gICAgICA/IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpXG4gICAgICA6IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICB9XG4gIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShlbGVtZW50WzBdLCBlbGVtZW50WzFdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudEVsLmFwcGVuZChuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyByZW5kZXJDb3JlQXBwIH0gZnJvbSBcIi4vdWlcIjtcblxubGV0IGxpc3RUb1JlbmRlciA9IFwiQWxsIHRhc2tzXCI7XG5cbmV4cG9ydCBjb25zdCBhbGxMaXN0cyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRUb0FsbExpc3RzQXJyYXkoKSB7XG4gIGFsbExpc3RzLnB1c2godGhpcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICBjb25zb2xlLmxvZyhcInRhc2sgaW4gYWRkdGFza1wiLCB0YXNrLmFzc2lnbmVkTGlzdHMpO1xuICBpZiAodGFzay5hc3NpZ25lZExpc3RzLnNvbWUoKGxpc3QpID0+IGxpc3QgPT09IHRoaXMudGl0bGUpKSB7XG4gICAgdGhpcy50YXNrc0FycmF5LnB1c2godGFzayk7XG4gIH1cbiAgbGlzdFRvUmVuZGVyID0gdGFzay5hc3NpZ25lZExpc3RzWzBdO1xuICBmaW5kTGlzdFRvUmVuZGVyKGxpc3RUb1JlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSwgaXRlbUluZGV4KSB7XG4gIGNvbnNvbGUubG9nKFwiSEVZXCIsIGl0ZW1JbmRleCwgdGFza1RvRGVsZXRlKTtcbiAgbGlzdFRvUmVuZGVyID0gdGFza1RvRGVsZXRlLmFzc2lnbmVkTGlzdHNbMF07IC8vUExBQ0VIT0xERVJcbiAgYWxsTGlzdHNbMF0udGFza3NBcnJheS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblxuICBmaW5kTGlzdFRvUmVuZGVyKGxpc3RUb1JlbmRlcik7XG59XG5cbmZ1bmN0aW9uIGZpbmRMaXN0VG9SZW5kZXIobGlzdFRvUmVuZGVyKSB7XG4gIGFsbExpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBpZiAobGlzdC50aXRsZSA9PT0gbGlzdFRvUmVuZGVyKSByZW5kZXJDb3JlQXBwKGxpc3QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGNvbG91cikge1xuICBjb25zdCBsaXN0ID0ge1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgY29sb3VyOiBjb2xvdXIsXG4gICAgdGFza3NBcnJheTogW10sXG4gICAgYWRkVG9BbGxMaXN0c0FycmF5OiBhZGRUb0FsbExpc3RzQXJyYXksXG4gICAgYWRkVGFzazogYWRkVGFzayxcbiAgICByZW1vdmVUYXNrOiByZW1vdmVUYXNrLFxuICB9O1xuXG4gIGxpc3QuYWRkVG9BbGxMaXN0c0FycmF5KCk7XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBhbGxMaXN0cywgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2xpc3RzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyQ29yZUFwcCB9IGZyb20gXCIuL3VpXCI7XG5cbmxldCBuZXdUYXNrID0gdHJ1ZTtcbmxldCBlZGl0ZWRUYXNrID0gbnVsbDtcbmxldCB0YXNrSW5kZXggPSBudWxsO1xuY29uc3QgdGFza0RpYWxvZ0VsZW1lbnRzID0gW1xuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcImgxXCIsIG51bGwsIG51bGwsIFwiTmV3IFRhc2tcIiwgW1tcImlkXCIsIFwidGFza0RpYWxvZ0gxXCJdXV0sXG4gICAgICBbXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFtcImNsb3NlQnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS14bWFya1wiXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1tcImlkXCIsIFwiY2xvc2VUYXNrRGlhbG9nXCJdXSxcbiAgICAgIF0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXCJsYWJlbFwiLCBudWxsLCBudWxsLCBcIlRpdGxlXCJdLFxuICAgICAgW1xuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwiaW5wdXRUYXNrVGl0bGVcIl0sXG4gICAgICAgICAgW1widHlwZVwiLCBcInRleHRcIl0sXG4gICAgICAgICAgW1wicmVxdWlyZWRcIiwgXCJcIl0sXG4gICAgICAgICAgW1wicGxhY2Vob2xkZXJcIiwgXCJEbyB0aGUgZ3JvY2VyeSBzaG9wXCJdLFxuICAgICAgICAgIFtcIm1heGxlbmd0aFwiLCBcIjUwXCJdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcImxhYmVsXCIsIG51bGwsIG51bGwsIFwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiXSxcbiAgICAgIFtcbiAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcImlucHV0VGFza0Rlc2NcIl0sXG4gICAgICAgICAgW1wicm93c1wiLCBcIjJcIl0sXG4gICAgICAgICAgW1wicGxhY2Vob2xkZXJcIiwgXCJFZ2dzLCBtaWxrLCBjZXJlYWwsIGJyZWFkLCBiYW5hbmFzXCJdLFxuICAgICAgICAgIFtcIm1heGxlbmd0aFwiLCBcIjI1MFwiXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXCJsYWJlbFwiLCBcInRleHRJbnB1dFwiLCBudWxsLCBcIkR1ZSBEYXRlIChvcHRpb25hbClcIl0sXG4gICAgICBbXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJpbnB1dFRhc2tEYXRlXCJdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJkYXRlXCJdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudHM6IFtcbiAgICAgIFtcInBcIiwgbnVsbCwgbnVsbCwgXCJQcmlvcml0eVwiXSxcblxuICAgICAgW1xuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwiaGlnaFByaW9yaXR5XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJpZFwiLCBcImhpZ2hQcmlvcml0eVRhc2tcIl0sXG4gICAgICAgICAgW1widHlwZVwiLCBcImNoZWNrYm94XCJdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIFtcImxhYmVsXCIsIG51bGwsIG51bGwsIFwiSGlnaFwiLCBbW1wiZm9yXCIsIFwiaGlnaFByaW9yaXR5VGFza1wiXV1dLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBlbGVtZW50czogW1xuICAgICAgW1wibGFiZWxcIiwgbnVsbCwgbnVsbCwgXCJMaXN0IChvcHRpb25hbClcIl0sXG4gICAgICBbXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1xuICAgICAgICAgIFtcImlkXCIsIFwiZHJvcGRvd25MaXN0XCJdLFxuICAgICAgICAgIFtcImxpc3RcIiwgXCJsaXN0T2ZMaXN0c1wiXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICBbXCJkYXRhbGlzdFwiLCBudWxsLCBudWxsLCBcIlwiLCBbLCBbXCJpZFwiLCBcImxpc3RPZkxpc3RzXCJdXV0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGVsZW1lbnRzOiBbXG4gICAgICBbXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwic3VibWl0QnRuXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiTGlzdCBpdFwiLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiaWRcIiwgXCJzdWJtaXRUYXNrQnRuXCJdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJzdWJtaXRcIl0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgW1wiYnV0dG9uXCIsIFwiZGVsZXRlQnRuXCIsIG51bGwsIFwiRGVsZXRlIGl0XCIsIFtbXCJpZFwiLCBcImRlbGV0ZVRhc2tCdG5cIl1dXSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0RpYWxvZygpIHtcbiAgY29uc3QgZGlhbG9nID0gY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiLCBcInRhc2tEaWFsb2dcIiwgY29udGVudCwgXCJcIiwgW1xuICAgIFtcImlkXCIsIFwidGFza0RpYWxvZ1wiXSxcbiAgXSk7XG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJuZXdUYXNrRm9ybVwiLCBkaWFsb2csIFwiXCIsIFtcbiAgICBbXCJpZFwiLCBcIm5ld1Rhc2tGb3JtXCJdLFxuICBdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCB0YXNrRGlhbG9nRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRpYWxvZ0RpdnNcIiwgbmV3VGFza0Zvcm0sIFwiXCIsIFtcbiAgICAgIFtcImlkXCIsIGB0YXNrRGlhbG9nRGl2JHtpfWBdLFxuICAgIF0pO1xuICAgIGlmICh0YXNrRGlhbG9nRWxlbWVudHNbaV0pIHtcbiAgICAgIHRhc2tEaWFsb2dFbGVtZW50c1tpXS5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50QXJyYXkpID0+IHtcbiAgICAgICAgZWxlbWVudEFycmF5WzJdID0gdGFza0RpYWxvZ0RpdjtcbiAgICAgICAgY3JlYXRlRWxlbWVudCguLi5lbGVtZW50QXJyYXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vUExBQ0VIT0xERVIuLi4gVE8gTE9PUCBUSFJPVUdIIExJU1RTIExBVEVSXG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0T2ZMaXN0c1wiKTtcbiAgY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCBkcm9wZG93biwgXCJcIiwgW1tcInZhbHVlXCIsIFwiQWxsIHRhc2tzXCJdXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRGlhbG9nRm9yVGhpc1Rhc2sodGFza1RvT3BlbiwgaXRlbUluZGV4KSB7XG4gIGlmICh0YXNrVG9PcGVuKSB7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpO1xuICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEaWFsb2dcIik7XG4gICAgKG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrVGl0bGVcIl0udmFsdWUgPSB0YXNrVG9PcGVuLnRpdGxlKSxcbiAgICAgIChuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza0Rlc2NcIl0udmFsdWUgPSB0YXNrVG9PcGVuLmRlc2NyaXB0aW9uKTtcbiAgICBuZXdUYXNrRm9ybS5lbGVtZW50c1tcImlucHV0VGFza0RhdGVcIl0udmFsdWUgPSB0YXNrVG9PcGVuLmR1ZURhdGU7XG4gICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJoaWdoUHJpb3JpdHlUYXNrXCJdLmNoZWNrZWQgPSB0YXNrVG9PcGVuLnByaW9yaXR5O1xuICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiZHJvcGRvd25MaXN0XCJdLnZhbHVlID0gdGFza1RvT3Blbi5hc3NpZ25lZExpc3RzWzBdO1xuICAgIG5ld1Rhc2sgPSBmYWxzZTtcbiAgICBlZGl0ZWRUYXNrID0gdGFza1RvT3BlbjtcbiAgICB0YXNrSW5kZXggPSBpdGVtSW5kZXg7XG4gICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiByZW1vdmVUYXNrKGVkaXRlZFRhc2spIHtcbi8vICAgZWRpdGVkVGFzay5hc3NpZ25lZExpc3RzID0gW107XG4vLyAgIGVkaXRlZFRhc2sgPSBudWxsO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0RpYWxvZ0VMcygpIHtcbiAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RpYWxvZ1wiKTtcbiAgY29uc3QgY2xvc2VUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVRhc2tEaWFsb2dcIik7XG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKTtcbiAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0VGFza0J0blwiKTtcbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlVGFza0J0blwiKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5ld0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSk7XG5cbiAgY2xvc2VUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICB9KTtcblxuICBzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZWRpdGVkVGFzaykge1xuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXQgZWRpdGRcIik7XG4gICAgICByZW1vdmVUYXNrKGVkaXRlZFRhc2ssIHRhc2tJbmRleCk7XG4gICAgfVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJpbnB1dFRhc2tUaXRsZVwiXS52YWx1ZSxcbiAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrRGVzY1wiXS52YWx1ZSxcbiAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaW5wdXRUYXNrRGF0ZVwiXS52YWx1ZSxcbiAgICAgIG5ld1Rhc2tGb3JtLmVsZW1lbnRzW1wiaGlnaFByaW9yaXR5VGFza1wiXS5jaGVja2VkLFxuICAgICAgbmV3VGFza0Zvcm0uZWxlbWVudHNbXCJkcm9wZG93bkxpc3RcIl0udmFsdWUsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBhbGxMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICAgIGxpc3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICB9KTtcblxuICAgIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICB9KTtcblxuICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImVkaXRlZCB0YXNrP1wiLCBlZGl0ZWRUYXNrKTtcbiAgICBpZiAoZWRpdGVkVGFzaykge1xuICAgICAgcmVtb3ZlVGFzayhlZGl0ZWRUYXNrLCB0YXNrSW5kZXgpO1xuICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgYnRuXCIpO1xuICAgIH1cbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBsaXN0cyxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgdGFzayA9IHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGFzc2lnbmVkTGlzdHM6IEFycmF5LmlzQXJyYXkobGlzdHMpID8gbGlzdHMgOiBbbGlzdHNdLFxuICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHRhc2spO1xuICByZXR1cm4gdGFzaztcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGFsbExpc3RzLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vbGlzdHNcIjtcbmltcG9ydCBjcmVhdGVOZXdUYXNrRGlhbG9nLCB7XG4gIGdldFRhc2tEaWFsb2dFTHMsXG4gIG9wZW5EaWFsb2dGb3JUaGlzVGFzayxcbn0gZnJvbSBcIi4vdGFza0RpYWxvZ1wiO1xuXG5jb25zdCBpY29uTGlzdEZvb3RlciA9IFtcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWxpc3RcIl0sIHRleHQ6IFwiQWxsIHRhc2tzXCIgfSxcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLXN0YXJcIl0sIHRleHQ6IFwiVG9kYXlcIiB9LFxuICB7IGNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtZm9sZGVyLXRyZWVcIl0sIHRleHQ6IFwiQWxsIExpc3RzXCIgfSxcbiAgeyBjbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLXVzZXJcIl0sIHRleHQ6IFwiUHJvZmlsZVwiIH0sXG5dO1xuXG5mdW5jdGlvbiBnZXRJY29uTWVudShtZW51RGl2KSB7XG4gIGljb25MaXN0Rm9vdGVyLmZvckVhY2goKGljb24pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbURpdlwiLCBtZW51RGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBpY29uLmNsYXNzZXMsIG1lbnVJdGVtRGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwic21hbGxcIiwgXCJtZW51VGV4dFwiLCBtZW51SXRlbURpdiwgaWNvbi50ZXh0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIZWFkZXIobGlzdCkge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIGNvbnRlbnQpO1xuICBjb25zdCB0aXRsZUN0ciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZUN0clwiLCBoZWFkZXIpO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInRpdGxlXCIsIHRpdGxlQ3RyLCBsaXN0LnRpdGxlKTtcbiAgY29uc3QgbGlzdERlc2MgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJsaXN0RGVzY1wiLCB0aXRsZUN0ciwgbGlzdC5kZXNjcmlwdGlvbik7XG4gIGNvbnN0IGVsbGlwc2lzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVsbGlwc2lzRGl2XCIsIGhlYWRlcik7XG4gIGNvbnN0IGVsbGlwc2lzID0gY3JlYXRlRWxlbWVudChcbiAgICBcImlcIixcbiAgICBbXCJmYS1zb2xpZFwiLCBcImZhLWVsbGlwc2lzLXZlcnRpY2FsXCJdLFxuICAgIGVsbGlwc2lzRGl2XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgY29udGVudCk7XG4gIGNvbnN0IG1lbnVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudURpdlwiLCBmb290ZXIpO1xuICBnZXRJY29uTWVudShtZW51RGl2KTtcbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBcImxvZ29cIiwgZm9vdGVyLCBcIkFic29saXN0bHlcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByaW9yaXR5U3RhdHVzKHRhc2tUaXRsZSwgdGFzaykge1xuICBpZiAodGFzay5wcmlvcml0eSA9PT0gdHJ1ZSkgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0l0ZW1zKHRhc2tzQ3RyLCBkb25lQ3RyLCBsaXN0KSB7XG4gIGxldCBpID0gMDtcbiAgbGlzdC50YXNrc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJ0YXNrSXRlbVwiLFxuICAgICAgdGFzay5jb21wbGV0ZWQgPyBkb25lQ3RyIDogdGFza3NDdHIsXG4gICAgICBcIlwiXG4gICAgKTtcbiAgICBjb25zdCB0YXNrSW5mb0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrSW5mb0RpdlwiLCB0YXNrSXRlbSk7XG4gICAgY29uc3QgbW9yZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtb3JlRGl2XCIsIHRhc2tJdGVtKTtcbiAgICBjb25zdCB0YXNrQ29tcGxldGVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza0NvbXBsZXRlRGl2XCIsIHRhc2tJdGVtKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDRcIiwgXCJ0YXNrVGl0bGVcIiwgdGFza0luZm9EaXYsIHRhc2sudGl0bGUpO1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFza0Rlc2NcIiwgdGFza0luZm9EaXYsIHRhc2suZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBbXCJlZGl0VGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGVuXCJdLFxuICAgICAgbW9yZURpdixcbiAgICAgIFwiXCIsXG4gICAgICBbW1wiZGF0YS1pbmRleC1udW1iZXJcIiwgaV1dXG4gICAgKTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJsaXN0QXNzaWdubWVudFwiLCBtb3JlRGl2KTtcbiAgICBjcmVhdGVFbGVtZW50KFwic21hbGxcIiwgXCJkdWVEYXRlXCIsIHRhc2tDb21wbGV0ZURpdiwgdGFzay5kdWVEYXRlKTtcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFtcImNvbXBsZXRlQnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS1jaGVja1wiXSxcbiAgICAgIHRhc2tDb21wbGV0ZURpdlxuICAgICk7XG4gICAgY3JlYXRlRWxlbWVudChcImhyXCIsIFwiYnJlYWtcIiwgdGFza3NDdHIpO1xuICAgIHJlbmRlclByaW9yaXR5U3RhdHVzKHRhc2tUaXRsZSwgdGFzayk7XG4gICAgaSsrO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlblRoaXNUYXNrRUwodGFza3NDdHIpIHtcbiAgdGFza3NDdHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJvcGVudGhpc1wiKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ID09IFwiZWRpdFRhc2sgZmEtc29saWQgZmEtcGVuXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtbnVtYmVyXCIpO1xuICAgICAgY29uc29sZS5sb2coaXRlbUluZGV4KTtcbiAgICAgIGNvbnN0IHRhc2tUb09wZW4gPSBhbGxMaXN0c1swXS50YXNrc0FycmF5W2l0ZW1JbmRleF07XG4gICAgICBjb25zb2xlLmxvZyh0YXNrVG9PcGVuKTtcbiAgICAgIG9wZW5EaWFsb2dGb3JUaGlzVGFzayh0YXNrVG9PcGVuLCBpdGVtSW5kZXgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVEb25lSXRlbXModGFza3NDdHIsIGxpc3QpIHt9XG5cbi8vIGZ1bmN0aW9uIHJlbmRlckNvbXBsZXRlZFRhc2tJdGVtcyhkb25lQ3RyLCBsaXN0KSB7XG4vLyAgIGxpc3QudGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4vLyAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4vLyAgICAgICBjb25zdCBkb25lSXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkb25lSXRlbVwiLCBkb25lQ3RyKTtcbi8vICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBcImRvbmVcIiwgZG9uZUl0ZW0sIHRhc2sudGl0bGUpO1xuLy8gICAgICAgY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIFwiZG9uZVwiLCBkb25lSXRlbSwgdGFzay5kdWVEYXRlKTtcbi8vICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibGlzdEFzc2lnbm1lbnRcIiwgXCJkb25lXCJdLCBkb25lSXRlbSk7XG4vLyAgICAgICBjcmVhdGVFbGVtZW50KFxuLy8gICAgICAgICBcImJ1dHRvblwiLFxuLy8gICAgICAgICBbXCJjb21wbGV0ZUJ0blwiLCBcImZhLXNvbGlkXCIsIFwiZmEtY2hlY2tcIiwgXCJkb25lXCJdLFxuLy8gICAgICAgICBkb25lSXRlbVxuLy8gICAgICAgKTtcbi8vICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJoclwiLCBcImJyZWFrXCIsIGRvbmVDdHIpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb3JlQXBwKGxpc3QpIHtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZW5kZXJIZWFkZXIobGlzdCk7XG4gIGNvbnN0IGNvcmVBcHBDdHIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29yZUFwcEN0clwiLCBjb250ZW50LCBcIlwiLCBbXG4gICAgW1wiaWRcIiwgXCJjb3JlQXBwQ3RyXCJdLFxuICBdKTtcblxuICBjb25zdCBhZGROZXdCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wiYWRkTmV3QnRuXCIsIFwiZmEtc29saWRcIiwgXCJmYS1wbHVzXCJdLFxuICAgIGNvbnRlbnQsXG4gICAgXCJcIixcbiAgICBbW1wiaWRcIiwgXCJhZGROZXdCdG5cIl1dXG4gICk7XG4gIGNvbnN0IHRhc2tzQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2tzQ3RyXCIsIGNvcmVBcHBDdHIpO1xuICBjb25zdCBkb25lQ3RyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRvbmVDdHJcIiwgY29yZUFwcEN0cik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBcImRvbmVoZWFkZXJcIiwgZG9uZUN0ciwgXCJEb25lXCIpO1xuICByZW5kZXJUYXNrSXRlbXModGFza3NDdHIsIGRvbmVDdHIsIGxpc3QpO1xuICByZW5kZXJGb290ZXIobGlzdCk7XG4gIGNyZWF0ZU5ld1Rhc2tEaWFsb2coKTtcbiAgZ2V0VGFza0RpYWxvZ0VMcygpO1xuICBvcGVuVGhpc1Rhc2tFTCh0YXNrc0N0cik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlTGlzdCwgeyBhbGxMaXN0cyB9IGZyb20gXCIuL2xpc3RzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgcmVuZGVyRm9vdGVyLCByZW5kZXJBcHBDdHIsIHJlbmRlckNvcmVBcHAgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0VGFza0RpYWxvZ0VMcyB9IGZyb20gXCIuL3Rhc2tEaWFsb2dcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGxpc3RBbGwgPSBjcmVhdGVMaXN0KFwiQWxsIHRhc2tzXCIsIFwiQWxsIHlvdXIgdGFza3MgaW4gb25lIGxpc3RcIiwgXCJibHVlXCIpO1xuXG4gIGNvbnN0IHRhc2sxID0gY3JlYXRlVGFzayhcbiAgICBcIk15IGZpcnN0IHRvIGRvXCIsXG4gICAgXCJJIG5lZWQgdG8gZG8gc29tZXRoaW5nXCIsXG4gICAgXCIwMSBNYXIgMjRcIixcbiAgICB0cnVlLFxuICAgIGxpc3RBbGwudGl0bGUsXG4gICAgZmFsc2VcbiAgKTtcblxuICBjb25zdCB0YXNrMiA9IGNyZWF0ZVRhc2soXG4gICAgXCJNeSBzZWNvbmQgdG8gZG9cIixcbiAgICBcIkkgbmVlZCB0byBkbyBzb21ldGhpbmdcIixcbiAgICBcIjAxIEphbiAyNFwiLFxuICAgIGZhbHNlLFxuICAgIGxpc3RBbGwudGl0bGUsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IHRhc2szID0gY3JlYXRlVGFzayhcbiAgICBcIlRhc2sgM1wiLFxuICAgIG51bGwsXG4gICAgXCIxOSBEZWMgMjNcIixcbiAgICBmYWxzZSxcbiAgICBcIkFsbCB0YXNrc1wiLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgYWxsTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGxpc3QuYWRkVGFzayh0YXNrMSk7XG4gICAgbGlzdC5hZGRUYXNrKHRhc2syKTtcbiAgICBsaXN0LmFkZFRhc2sodGFzazMpO1xuICB9KTtcbiAgcmVuZGVyQ29yZUFwcChsaXN0QWxsKTtcblxuICBjb25zb2xlLmxvZyhcInRhc2tcIiwgdGFzazEsIHRhc2syLCB0YXNrMyk7XG4gIGNvbnNvbGUubG9nKFwiYWxsXCIsIGxpc3RBbGwpO1xuICBjb25zb2xlLmxvZyhcImFsbExpc3RzXCIsIGFsbExpc3RzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9