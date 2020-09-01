webpackHotUpdate_N_E("pages/post/[postid]",{

/***/ "./pages/post/[postid].js":
/*!********************************!*\
  !*** ./pages/post/[postid].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/pages/post/[postid].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar ViewPost = function ViewPost(_ref) {\n  var post = _ref.post;\n  console.log();\n  return __jsx(\"div\", {\n    className: \"mb-10  p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: \"text-2xl underline tracking-wide\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, post.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, post.body));\n};\n\n_c = ViewPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewPost);\n\nViewPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var postid, post;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            postid = _ref2.query.postid;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"http://localhost:3000/api/posts/\".concat(postid));\n\n          case 3:\n            post = _context.sent;\n            return _context.abrupt(\"return\", {\n              post: post.data.data\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"ViewPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bcG9zdGlkXS5qcz9iYTVjIl0sIm5hbWVzIjpbIlZpZXdQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJwb3N0aWQiLCJxdWVyeSIsImF4aW9zIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrREYsSUFBSSxDQUFDRyxLQUF2RCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJSCxJQUFJLENBQUNJLElBQVQsQ0FGRixDQURGO0FBTUQsQ0FSRDs7S0FBTUwsUTtBQVVTQSx1RUFBZjs7QUFFQUEsUUFBUSxDQUFDTSxlQUFUO0FBQUEsK0xBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQkMsa0JBQWxCLFNBQVNDLEtBQVQsQ0FBa0JELE1BQWxCO0FBQUE7QUFBQSxtQkFDTkUsNENBQUssQ0FBQ0MsR0FBTiwyQ0FBNkNILE1BQTdDLEVBRE07O0FBQUE7QUFDbkJOLGdCQURtQjtBQUFBLDZDQUdsQjtBQUFFQSxrQkFBSSxFQUFFQSxJQUFJLENBQUNVLElBQUwsQ0FBVUE7QUFBbEIsYUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1twb3N0aWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFZpZXdQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCAgcC00XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdW5kZXJsaW5lIHRyYWNraW5nLXdpZGVcIj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3UG9zdDtcblxuVmlld1Bvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgcG9zdGlkIH0gfSkgPT4ge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdGlkfWApO1xuXG4gIHJldHVybiB7IHBvc3Q6IHBvc3QuZGF0YS5kYXRhIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[postid].js\n");

/***/ })

})