webpackHotUpdate_N_E("pages/register",{

/***/ "./components/forms/RegisterForm.js":
/*!******************************************!*\
  !*** ./components/forms/RegisterForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useForm */ \"./utils/useForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/components/forms/RegisterForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar RegisterForm = function RegisterForm() {\n  _s();\n\n  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useForm, 3),\n      values = _useForm2[0],\n      setValues = _useForm2[1],\n      handleChange = _useForm2[2];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var register = function register(e) {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"/api/register\", values).then(function (res) {\n      localStorage.setItem(\"authorization\", res.data.authorization);\n      location.assign(\"/\");\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: register,\n    className: \"grid gap-4 p-16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    className: \"border-2 border-black\",\n    type: \"text\",\n    name: \"firstName\",\n    onChange: handleChange,\n    value: values ? values.firstName : \"\",\n    placeholder: \"First Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    className: \"border-2 border-black\",\n    type: \"text\",\n    name: \"lastName\",\n    onChange: handleChange,\n    value: values ? values.lastName : \"\",\n    placeholder: \"Last Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    className: \"border-2 border-black\",\n    type: \"email\",\n    name: \"email\",\n    onChange: handleChange,\n    value: values ? values.email : \"\",\n    placeholder: \"e-mail\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    className: \"border-2 border-black\",\n    type: \"password\",\n    name: \"password\",\n    onChange: handleChange,\n    value: values ? values.password : \"\",\n    placeholder: \"Password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    className: \"border-2 border-black\",\n    type: \"URL\",\n    name: \"profileImage\",\n    onChange: handleChange,\n    value: values ? values.profileImage : \"\",\n    placeholder: \"Image URL\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(RegisterForm, \"Vrh6THhMNzXuMIIn5uwl5bGtFQU=\", false, function () {\n  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"RegisterForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9SZWdpc3RlckZvcm0uanM/NGVlZCJdLCJuYW1lcyI6WyJSZWdpc3RlckZvcm0iLCJ1c2VGb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJhdXRob3JpemF0aW9uIiwibG9jYXRpb24iLCJhc3NpZ24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGlCQUNpQkMsOERBQU8sRUFEeEI7QUFBQTtBQUFBLE1BQ2xCQyxNQURrQjtBQUFBLE1BQ1ZDLFNBRFU7QUFBQSxNQUNDQyxZQUREOztBQUV6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGdEQUFLLENBQUNDLElBQU4sQ0FBVyxlQUFYLEVBQTRCVCxNQUE1QixFQUFvQ1UsSUFBcEMsQ0FBeUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hEQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLEVBQXNDRixHQUFHLENBQUNHLElBQUosQ0FBU0MsYUFBL0M7QUFDQUMsY0FBUSxDQUFDQyxNQUFULENBQWdCLEdBQWhCO0FBQ0QsS0FIRDtBQUlELEdBTkQ7O0FBUUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxZQUFRLEVBQUVaLFFBQWhCO0FBQTBCLGFBQVMsRUFBQyxpQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHVCQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFJLEVBQUMsV0FIUDtBQUlFLFlBQVEsRUFBRUgsWUFKWjtBQUtFLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUNrQixTQUFWLEdBQXNCLEVBTHJDO0FBTUUsZUFBVyxFQUFDLFlBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsdUJBRFo7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsWUFBUSxFQUFFaEIsWUFKWjtBQUtFLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUNtQixRQUFWLEdBQXFCLEVBTHBDO0FBTUUsZUFBVyxFQUFDLFdBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBaUJFO0FBQ0UsYUFBUyxFQUFDLHVCQURaO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFlBQVEsRUFBRWpCLFlBSlo7QUFLRSxTQUFLLEVBQUVGLE1BQU0sR0FBR0EsTUFBTSxDQUFDb0IsS0FBVixHQUFrQixFQUxqQztBQU1FLGVBQVcsRUFBQyxRQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUF5QkU7QUFDRSxhQUFTLEVBQUMsdUJBRFo7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsWUFBUSxFQUFFbEIsWUFKWjtBQUtFLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUNxQixRQUFWLEdBQXFCLEVBTHBDO0FBTUUsZUFBVyxFQUFDLFVBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixFQWlDRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLFFBQUksRUFBQyxLQUZQO0FBR0UsUUFBSSxFQUFDLGNBSFA7QUFJRSxZQUFRLEVBQUVuQixZQUpaO0FBS0UsU0FBSyxFQUFFRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ3NCLFlBQVYsR0FBeUIsRUFMeEM7QUFNRSxlQUFXLEVBQUMsV0FOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLEVBMENFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQ0YsQ0FERixDQURGO0FBZ0RELENBNUREOztHQUFNeEIsWTtVQUNzQ0Msc0QsRUFDM0JLLHFEOzs7S0FGWE4sWTtBQTZEU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL1JlZ2lzdGVyRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi8uLi91dGlscy91c2VGb3JtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzLCBoYW5kbGVDaGFuZ2VdID0gdXNlRm9ybSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZWdpc3RlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF4aW9zLnBvc3QoXCIvYXBpL3JlZ2lzdGVyXCIsIHZhbHVlcykudGhlbigocmVzKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhvcml6YXRpb25cIiwgcmVzLmRhdGEuYXV0aG9yaXphdGlvbik7XG4gICAgICBsb2NhdGlvbi5hc3NpZ24oXCIvXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtyZWdpc3Rlcn0gY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBwLTE2XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlcyA/IHZhbHVlcy5maXJzdE5hbWUgOiBcIlwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWVzID8gdmFsdWVzLmxhc3ROYW1lIDogXCJcIn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlcyA/IHZhbHVlcy5lbWFpbCA6IFwiXCJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2tcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMucGFzc3dvcmQgOiBcIlwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2tcIlxuICAgICAgICAgIHR5cGU9XCJVUkxcIlxuICAgICAgICAgIG5hbWU9XCJwcm9maWxlSW1hZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlcyA/IHZhbHVlcy5wcm9maWxlSW1hZ2UgOiBcIlwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/RegisterForm.js\n");

/***/ })

})