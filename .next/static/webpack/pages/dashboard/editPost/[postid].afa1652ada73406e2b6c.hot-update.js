webpackHotUpdate_N_E("pages/dashboard/editPost/[postid]",{

/***/ "./components/forms/editPostForm.js":
/*!******************************************!*\
  !*** ./components/forms/editPostForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/useForm */ \"./utils/useForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/components/forms/editPostForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar EditPostForm = function EditPostForm(_ref) {\n  _s();\n\n  var postid = _ref.postid;\n\n  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useForm, 3),\n      values = _useForm2[0],\n      setValues = _useForm2[1],\n      handleChange = _useForm2[2];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchPost = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(\"before \", postid);\n                _context.next = 3;\n                return postid;\n\n              case 3:\n                console.log(\"after \", postid);\n                axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"/api/posts/\" + postid).then(function (res) {\n                  console.log(res);\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchPost() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchPost();\n  }, [postid]);\n\n  var updatePost = function updatePost(e) {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"/api/posts/\" + postid, values).then(function (res) {\n      router.push(\"/\");\n    })[\"catch\"](function (err) {\n      console.log(err.message);\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: updatePost,\n    className: \"grid gap-4 p-16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    className: \"border-4 border-black\",\n    type: \"text\",\n    name: \"title\",\n    onChange: handleChange,\n    value: values ? values.title : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    name: \"body\",\n    onChange: handleChange,\n    value: values ? values.body : \"\",\n    className: \"border-4 border-black\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Update Post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(EditPostForm, \"mebIY9JqGIv8BUyBhhT8p73BPbg=\", false, function () {\n  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = EditPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPostForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditPostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9lZGl0UG9zdEZvcm0uanM/ZjFkYiJdLCJuYW1lcyI6WyJFZGl0UG9zdEZvcm0iLCJwb3N0aWQiLCJ1c2VGb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZmV0Y2hQb3N0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInVwZGF0ZVBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXQiLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsInRpdGxlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGlCQUNPQyw4REFBTyxFQURkO0FBQUE7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7QUFBQSxNQUNUQyxZQURTOztBQUVuQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSxtTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlYsTUFBdkI7QUFEZ0I7QUFBQSx1QkFFVkEsTUFGVTs7QUFBQTtBQUdoQlMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JWLE1BQXRCO0FBQ0FXLDREQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBZ0JaLE1BQTFCLEVBQWtDYSxJQUFsQyxDQUF1QyxVQUFDQyxHQUFELEVBQVM7QUFDOUNMLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBWjtBQUNELGlCQUZEOztBQUpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUTixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBUUFBLGFBQVM7QUFDVixHQVZRLEVBVU4sQ0FBQ1IsTUFBRCxDQVZNLENBQVQ7O0FBWUEsTUFBTWUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFDQU4sZ0RBQUssQ0FDRk8sR0FESCxDQUNPLGdCQUFnQmxCLE1BRHZCLEVBQytCRSxNQUQvQixFQUVHVyxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JULFlBQU0sQ0FBQ2MsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQUpILFdBS1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFHLENBQUNDLE9BQWhCO0FBQ0QsS0FQSDtBQVFELEdBVkQ7O0FBWUEsU0FDRTtBQUFNLFlBQVEsRUFBRU4sVUFBaEI7QUFBNEIsYUFBUyxFQUFDLGlCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsdUJBRFo7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsWUFBUSxFQUFFWCxZQUpaO0FBS0UsU0FBSyxFQUFFRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ29CLEtBQVYsR0FBa0IsRUFMakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFlBQVEsRUFBRWxCLFlBRlo7QUFHRSxTQUFLLEVBQUVGLE1BQU0sR0FBR0EsTUFBTSxDQUFDcUIsSUFBVixHQUFpQixFQUhoQztBQUlFLGFBQVMsRUFBQyx1QkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFjRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERjtBQWtCRCxDQTlDRDs7R0FBTXhCLFk7VUFDc0NFLHNELEVBQzNCSyxxRDs7O0tBRlhQLFk7QUFnRFNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb3Jtcy9lZGl0UG9zdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRWRpdFBvc3RGb3JtID0gKHsgcG9zdGlkIH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzLCBoYW5kbGVDaGFuZ2VdID0gdXNlRm9ybSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIFwiLCBwb3N0aWQpO1xuICAgICAgYXdhaXQgcG9zdGlkO1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlciBcIiwgcG9zdGlkKTtcbiAgICAgIGF4aW9zLmdldChcIi9hcGkvcG9zdHMvXCIgKyBwb3N0aWQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmZXRjaFBvc3QoKTtcbiAgfSwgW3Bvc3RpZF0pO1xuXG4gIGNvbnN0IHVwZGF0ZVBvc3QgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvc1xuICAgICAgLnB1dChcIi9hcGkvcG9zdHMvXCIgKyBwb3N0aWQsIHZhbHVlcylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3VwZGF0ZVBvc3R9IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgcC0xNlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IGJvcmRlci1ibGFja1wiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlcyA/IHZhbHVlcy50aXRsZSA6IFwiXCJ9XG4gICAgICAvPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIG5hbWU9XCJib2R5XCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlcyA/IHZhbHVlcy5ib2R5IDogXCJcIn1cbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWJsYWNrXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwZGF0ZSBQb3N0XCIgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/editPostForm.js\n");

/***/ })

})