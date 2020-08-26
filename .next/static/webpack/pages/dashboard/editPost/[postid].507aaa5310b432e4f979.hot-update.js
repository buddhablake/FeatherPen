webpackHotUpdate_N_E("pages/dashboard/editPost/[postid]",{

/***/ "./components/forms/editPostForm.js":
/*!******************************************!*\
  !*** ./components/forms/editPostForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useForm */ \"./utils/useForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/components/forms/editPostForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar EditPostForm = function EditPostForm(_ref) {\n  _s();\n\n  var postid = _ref.postid;\n\n  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useForm, 3),\n      values = _useForm2[0],\n      setValues = _useForm2[1],\n      handleChange = _useForm2[2];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/api/posts/\" + postid).then(function (res) {\n      console.log(res);\n    });\n  }, [postid]);\n\n  var updatePost = function updatePost(e) {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(\"/api/posts/\" + postid, values).then(function (res) {\n      router.push(\"/\");\n    })[\"catch\"](function (err) {\n      console.log(err.message);\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: updatePost,\n    className: \"grid gap-4 p-16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    className: \"border-4 border-black\",\n    type: \"text\",\n    name: \"title\",\n    onChange: handleChange,\n    value: values ? values.title : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    name: \"body\",\n    onChange: handleChange,\n    value: values ? values.body : \"\",\n    className: \"border-4 border-black\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Update Post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(EditPostForm, \"mebIY9JqGIv8BUyBhhT8p73BPbg=\", false, function () {\n  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = EditPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPostForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditPostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9lZGl0UG9zdEZvcm0uanM/ZjFkYiJdLCJuYW1lcyI6WyJFZGl0UG9zdEZvcm0iLCJwb3N0aWQiLCJ1c2VGb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXQiLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsInRpdGxlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxpQkFDT0MsOERBQU8sRUFEZDtBQUFBO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9CO0FBQUEsTUFDVEMsWUFEUzs7QUFFbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLGdCQUFnQlQsTUFBMUIsRUFBa0NVLElBQWxDLENBQXVDLFVBQUNDLEdBQUQsRUFBUztBQUM5Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLENBQUNYLE1BQUQsQ0FKTSxDQUFUOztBQU1BLE1BQU1jLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FSLGdEQUFLLENBQ0ZTLEdBREgsQ0FDTyxnQkFBZ0JqQixNQUR2QixFQUMrQkUsTUFEL0IsRUFFR1EsSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUNiTixZQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNDLEdBQUQsRUFBUztBQUNkUCxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBRyxDQUFDQyxPQUFoQjtBQUNELEtBUEg7QUFRRCxHQVZEOztBQVlBLFNBQ0U7QUFBTSxZQUFRLEVBQUVOLFVBQWhCO0FBQTRCLGFBQVMsRUFBQyxpQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHVCQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFlBQVEsRUFBRVYsWUFKWjtBQUtFLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUNtQixLQUFWLEdBQWtCLEVBTGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFRLEVBQUVqQixZQUZaO0FBR0UsU0FBSyxFQUFFRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ29CLElBQVYsR0FBaUIsRUFIaEM7QUFJRSxhQUFTLEVBQUMsdUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUFrQkQsQ0F4Q0Q7O0dBQU12QixZO1VBQ3NDRSxzRCxFQUMzQksscUQ7OztLQUZYUCxZO0FBMENTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybXMvZWRpdFBvc3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUZvcm1cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEVkaXRQb3N0Rm9ybSA9ICh7IHBvc3RpZCB9KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlcywgaGFuZGxlQ2hhbmdlXSA9IHVzZUZvcm0oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCIvYXBpL3Bvc3RzL1wiICsgcG9zdGlkKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSk7XG4gIH0sIFtwb3N0aWRdKTtcblxuICBjb25zdCB1cGRhdGVQb3N0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3NcbiAgICAgIC5wdXQoXCIvYXBpL3Bvc3RzL1wiICsgcG9zdGlkLCB2YWx1ZXMpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVQb3N0fSBjbGFzc05hbWU9XCJncmlkIGdhcC00IHAtMTZcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItYmxhY2tcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMudGl0bGUgOiBcIlwifVxuICAgICAgLz5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwiYm9keVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMuYm9keSA6IFwiXCJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IGJvcmRlci1ibGFja1wiXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGRhdGUgUG9zdFwiIC8+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFBvc3RGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/editPostForm.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false

})