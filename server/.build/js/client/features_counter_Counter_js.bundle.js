"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["features_counter_Counter_js"],{

/***/ "./features/counter/Counter.js":
/*!*************************************!*\
  !*** ./features/counter/Counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterSlice */ "./features/counter/counterSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/dist/index.js");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Counter.module.css */ "./features/counter/Counter.module.css");





function Counter() {
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_counterSlice__WEBPACK_IMPORTED_MODULE_2__.selectCount);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [incrementAmount, setIncrementAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('2');
  const incrementValue = Number(incrementAmount) || 0;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const toHome = () => {
    navigate('/home1');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].row
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    "aria-label": "Decrement value",
    onClick: () => dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.decrement)())
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].value
  }, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    "aria-label": "Increment value",
    onClick: () => dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.increment)())
  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].row
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].textbox,
    "aria-label": "Set increment amount",
    value: incrementAmount,
    onChange: e => setIncrementAmount(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    onClick: () => dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementByAmount)(incrementValue))
  }, "Add Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].asyncButton,
    onClick: () => dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementAsync)(incrementValue))
  }, "Add Async"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    onClick: () => dispatch((0,_counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementIfOdd)(incrementValue))
  }, "Add If Odd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toHome
  }, "home page")));
}

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[2]!./features/counter/Counter.module.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[2]!./features/counter/Counter.module.css ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ie_EcjV6l0pFWmz8BqCK {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: center;
      justify-content: center;
}

.ie_EcjV6l0pFWmz8BqCK > button {
  margin-left: 4px;
  margin-right: 8px;
}
.ie_EcjV6l0pFWmz8BqCK:not(:last-child) {
  margin-bottom: 16px;
}

.cL4I9QfCIH4amxJhiQw7 {
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
}

.palVV04yKNMaR75g5vhB {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  -webkit-transition: all 0.15s;
  transition: all 0.15s;
}

.PyplXZRvpVIh9REWOVYw {
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 4px;
}

.palVV04yKNMaR75g5vhB:hover,
.palVV04yKNMaR75g5vhB:focus {
  border: 2px solid rgba(112, 76, 182, 0.4);
}

.palVV04yKNMaR75g5vhB:active {
  background-color: rgba(112, 76, 182, 0.2);
}

.aWPjmih0ngY8nhunJrW3 {
  position: relative;
}

.aWPjmih0ngY8nhunJrW3:after {
  content: '';
  background-color: rgba(112, 76, 182, 0.15);
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  -webkit-transition: width 1s linear, opacity 0.5s ease 1s;
  transition: width 1s linear, opacity 0.5s ease 1s;
}

.aWPjmih0ngY8nhunJrW3:active:after {
  width: 0%;
  opacity: 1;
  -webkit-transition: 0s;
  transition: 0s;
}
`, "",{"version":3,"sources":["webpack://./features/counter/Counter.module.css"],"names":[],"mappings":"AAAA;EACE,oBAAa;EAAb,aAAa;EACb,sBAAmB;MAAnB,mBAAmB;EACnB,qBAAuB;MAAvB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,8CAA8C;AAChD;;AAEA;EACE,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;EACf,yCAAyC;EACzC,kBAAkB;EAClB,6BAAqB;EAArB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;EAEE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EAEE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,0CAA0C;EAC1C,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,OAAO;EACP,MAAM;EACN,UAAU;EACV,yDAAiD;EAAjD,iDAAiD;AACnD;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAc;EAAd,cAAc;AAChB","sourcesContent":[".row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.row > button {\n  margin-left: 4px;\n  margin-right: 8px;\n}\n.row:not(:last-child) {\n  margin-bottom: 16px;\n}\n\n.value {\n  font-size: 78px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 2px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\n.button {\n  appearance: none;\n  background: none;\n  font-size: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  outline: none;\n  border: 2px solid transparent;\n  color: rgb(112, 76, 182);\n  padding-bottom: 4px;\n  cursor: pointer;\n  background-color: rgba(112, 76, 182, 0.1);\n  border-radius: 2px;\n  transition: all 0.15s;\n}\n\n.textbox {\n  font-size: 32px;\n  padding: 2px;\n  width: 64px;\n  text-align: center;\n  margin-right: 4px;\n}\n\n.button:hover,\n.button:focus {\n  border: 2px solid rgba(112, 76, 182, 0.4);\n}\n\n.button:active {\n  background-color: rgba(112, 76, 182, 0.2);\n}\n\n.asyncButton {\n  composes: button;\n  position: relative;\n}\n\n.asyncButton:after {\n  content: '';\n  background-color: rgba(112, 76, 182, 0.15);\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transition: width 1s linear, opacity 0.5s ease 1s;\n}\n\n.asyncButton:active:after {\n  width: 0%;\n  opacity: 1;\n  transition: 0s;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"row": `ie_EcjV6l0pFWmz8BqCK`,
	"value": `cL4I9QfCIH4amxJhiQw7`,
	"button": `palVV04yKNMaR75g5vhB`,
	"textbox": `PyplXZRvpVIh9REWOVYw`,
	"asyncButton": `aWPjmih0ngY8nhunJrW3 palVV04yKNMaR75g5vhB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./features/counter/Counter.module.css":
/*!*********************************************!*\
  !*** ./features/counter/Counter.module.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_2_Counter_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[2]!./Counter.module.css */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[2].use[2]!./features/counter/Counter.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_2_Counter_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_2_Counter_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_2_Counter_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_2_use_2_Counter_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=features_counter_Counter_js.bundle.js.map