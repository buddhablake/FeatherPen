webpackHotUpdate_N_E("pages/dashboard/editPost/[postid]",{

/***/ "./components/forms/editPostForm.js":
/*!******************************************!*\
  !*** ./components/forms/editPostForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useForm */ \"./utils/useForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/components/forms/editPostForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar EditPostForm = function EditPostForm(_ref) {\n  _s();\n\n  var postid = _ref.postid;\n\n  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useForm, 3),\n      values = _useForm2[0],\n      setValues = _useForm2[1],\n      handleChange = _useForm2[2];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!postid) {\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/api/posts/\" + postid).then(function (res) {\n      console.log(res);\n    });\n  }, [postid]);\n\n  var updatePost = function updatePost(e) {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(\"/api/posts/\" + postid, values).then(function (res) {\n      router.push(\"/\");\n    })[\"catch\"](function (err) {\n      console.log(err.message);\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: updatePost,\n    className: \"grid gap-4 p-16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    className: \"border-4 border-black\",\n    type: \"text\",\n    name: \"title\",\n    onChange: handleChange,\n    value: values ? values.title : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    name: \"body\",\n    onChange: handleChange,\n    value: values ? values.body : \"\",\n    className: \"border-4 border-black\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Update Post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(EditPostForm, \"mebIY9JqGIv8BUyBhhT8p73BPbg=\", false, function () {\n  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = EditPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPostForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditPostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9lZGl0UG9zdEZvcm0uanM/ZjFkYiJdLCJuYW1lcyI6WyJFZGl0UG9zdEZvcm0iLCJwb3N0aWQiLCJ1c2VGb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXQiLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsInRpdGxlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxpQkFDT0MsOERBQU8sRUFEZDtBQUFBO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9CO0FBQUEsTUFDVEMsWUFEUzs7QUFFbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNQLE1BQUwsRUFBYTtBQUNYO0FBQ0Q7O0FBQ0RRLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBZ0JULE1BQTFCLEVBQWtDVSxJQUFsQyxDQUF1QyxVQUFDQyxHQUFELEVBQVM7QUFDOUNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixDQUFDWCxNQUFELENBUE0sQ0FBVDs7QUFTQSxNQUFNYyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBUixnREFBSyxDQUNGUyxHQURILENBQ08sZ0JBQWdCakIsTUFEdkIsRUFDK0JFLE1BRC9CLEVBRUdRLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDYk4sWUFBTSxDQUFDYSxJQUFQLENBQVksR0FBWjtBQUNELEtBSkgsV0FLUyxVQUFDQyxHQUFELEVBQVM7QUFDZFAsYUFBTyxDQUFDQyxHQUFSLENBQVlNLEdBQUcsQ0FBQ0MsT0FBaEI7QUFDRCxLQVBIO0FBUUQsR0FWRDs7QUFZQSxTQUNFO0FBQU0sWUFBUSxFQUFFTixVQUFoQjtBQUE0QixhQUFTLEVBQUMsaUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxZQUFRLEVBQUVWLFlBSlo7QUFLRSxTQUFLLEVBQUVGLE1BQU0sR0FBR0EsTUFBTSxDQUFDbUIsS0FBVixHQUFrQixFQUxqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsWUFBUSxFQUFFakIsWUFGWjtBQUdFLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUNvQixJQUFWLEdBQWlCLEVBSGhDO0FBSUUsYUFBUyxFQUFDLHVCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLGFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBa0JELENBM0NEOztHQUFNdkIsWTtVQUNzQ0Usc0QsRUFDM0JLLHFEOzs7S0FGWFAsWTtBQTZDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL2VkaXRQb3N0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi8uLi91dGlscy91c2VGb3JtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFZGl0UG9zdEZvcm0gPSAoeyBwb3N0aWQgfSkgPT4ge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXMsIGhhbmRsZUNoYW5nZV0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb3N0aWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9wb3N0cy9cIiArIHBvc3RpZCkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pO1xuICB9LCBbcG9zdGlkXSk7XG5cbiAgY29uc3QgdXBkYXRlUG9zdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF4aW9zXG4gICAgICAucHV0KFwiL2FwaS9wb3N0cy9cIiArIHBvc3RpZCwgdmFsdWVzKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlUG9zdH0gY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBwLTE2XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWVzID8gdmFsdWVzLnRpdGxlIDogXCJcIn1cbiAgICAgIC8+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cImJvZHlcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWVzID8gdmFsdWVzLmJvZHkgOiBcIlwifVxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItYmxhY2tcIlxuICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBkYXRlIFBvc3RcIiAvPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQb3N0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/editPostForm.js\n");

/***/ })

})