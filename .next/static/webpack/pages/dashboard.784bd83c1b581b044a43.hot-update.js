webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_buttons_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/buttons/index */ \"./components/buttons/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/pages/dashboard/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      posts = _useState[0],\n      setPosts = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (localStorage.getItem(\"authorization\") === null) {\n      return;\n    } else {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/api/posts/getUserPosts\", {\n        headers: {\n          authorization: localStorage.getItem(\"authorization\")\n        }\n      }).then(function (res) {\n        setPosts(res.data.userPosts);\n        console.log(res);\n      });\n    }\n  }, []);\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"h-16 w-16 bg-indigo-700 flex justify-center items-center rounded-full text-4xl text-white absolute m-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/dashboard/newPost\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"+\"))), posts ? posts.map(function (post, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }\n    }, \" \", post.title, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }), __jsx(_components_buttons_index__WEBPACK_IMPORTED_MODULE_2__[\"DeleteButton\"], {\n      postid: post._id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"dashboard/editPost/\".concat(post._id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }, \"Edit Post\")));\n  }) : null);\n};\n\n_s(Dashboard, \"IXHfFv1wdQOIB40pKHrcxhWtCZU=\");\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzP2U1NDkiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZXJQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJ0aXRsZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBR3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsTUFBMEMsSUFBOUMsRUFBb0Q7QUFDbEQ7QUFDRCxLQUZELE1BRU87QUFDTEMsa0RBQUssQ0FDRkMsR0FESCxDQUNPLHlCQURQLEVBQ2tDO0FBQzlCQyxlQUFPLEVBQUU7QUFDUEMsdUJBQWEsRUFBRUwsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCO0FBRFI7QUFEcUIsT0FEbEMsRUFNR0ssSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxnQkFBUSxDQUFDUyxHQUFHLENBQUNDLElBQUosQ0FBU0MsU0FBVixDQUFSO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0QsT0FUSDtBQVVEO0FBQ0YsR0FmUSxFQWVOLEVBZk0sQ0FBVDtBQWlCQSxTQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FERixDQURGLEVBT0dWLEtBQUssR0FDRkEsS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3pCLFdBQ0U7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLEdBREgsRUFFR0QsSUFBSSxDQUFDRSxLQUZSLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUUsTUFBQyxzRUFBRDtBQUFjLFlBQU0sRUFBRUYsSUFBSSxDQUFDRyxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSwrQkFBd0JILElBQUksQ0FBQ0csR0FBN0IsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQU5GLENBREY7QUFZRCxHQWJELENBREUsR0FlRixJQXRCTixDQURGO0FBMEJELENBOUNEOztHQUFNckIsUzs7S0FBQUEsUztBQWdEU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBEZWxldGVCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2luZGV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRob3JpemF0aW9uXCIpID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL3Bvc3RzL2dldFVzZXJQb3N0c1wiLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRob3JpemF0aW9uXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS51c2VyUG9zdHMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHctMTYgYmctaW5kaWdvLTcwMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC00eGwgdGV4dC13aGl0ZSBhYnNvbHV0ZSBtLThcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvbmV3UG9zdFwiPlxuICAgICAgICAgIDxhPis8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7cG9zdHNcbiAgICAgICAgPyBwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIHBvc3RpZD17cG9zdC5faWR9IC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGRhc2hib2FyZC9lZGl0UG9zdC8ke3Bvc3QuX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgPGE+RWRpdCBQb3N0PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/index.js\n");

/***/ })

})