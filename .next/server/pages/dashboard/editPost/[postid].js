module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/editPost/[postid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/forms/editPostForm.js":
/*!******************************************!*\
  !*** ./components/forms/editPostForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ \"./utils/useForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/components/forms/editPostForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst EditPostForm = ({\n  postid\n}) => {\n  const [values, setValues, handleChange] = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!postid) {\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/api/posts/\" + postid).then(res => {\n      setValues(res.data.data);\n    });\n  }, [postid]);\n\n  const updatePost = e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(\"/api/posts/\" + postid, values).then(res => {\n      router.push(\"/dashboard\");\n    }).catch(err => {\n      console.log(err.message);\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: updatePost,\n    className: \"grid gap-4 p-16\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    className: \"border-4 border-black\",\n    type: \"text\",\n    name: \"title\",\n    onChange: handleChange,\n    value: values ? values.title : \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    name: \"body\",\n    onChange: handleChange,\n    value: values ? values.body : \"\",\n    className: \"border-4 border-black\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Update Post\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPostForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL2VkaXRQb3N0Rm9ybS5qcz9mMWRiIl0sIm5hbWVzIjpbIkVkaXRQb3N0Rm9ybSIsInBvc3RpZCIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsInVzZUZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXBkYXRlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsInB1c2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUNuQyxRQUFNLENBQUNDLE1BQUQsRUFBU0MsU0FBVCxFQUFvQkMsWUFBcEIsSUFBb0NDLDhEQUFPLEVBQWpEO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNQLE1BQUwsRUFBYTtBQUNYO0FBQ0Q7O0FBQ0RRLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBZ0JULE1BQTFCLEVBQWtDVSxJQUFsQyxDQUF3Q0MsR0FBRCxJQUFTO0FBQzlDVCxlQUFTLENBQUNTLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQVQ7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLENBQUNaLE1BQUQsQ0FQTSxDQUFUOztBQVNBLFFBQU1hLFVBQVUsR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVAsZ0RBQUssQ0FDRlEsR0FESCxDQUNPLGdCQUFnQmhCLE1BRHZCLEVBQytCQyxNQUQvQixFQUVHUyxJQUZILENBRVNDLEdBQUQsSUFBUztBQUNiTixZQUFNLENBQUNZLElBQVAsQ0FBWSxZQUFaO0FBQ0QsS0FKSCxFQUtHQyxLQUxILENBS1VDLEdBQUQsSUFBUztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxPQUFoQjtBQUNELEtBUEg7QUFRRCxHQVZEOztBQVlBLFNBQ0U7QUFBTSxZQUFRLEVBQUVULFVBQWhCO0FBQTRCLGFBQVMsRUFBQyxpQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHVCQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFlBQVEsRUFBRVYsWUFKWjtBQUtFLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUNzQixLQUFWLEdBQWtCLEVBTGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFRLEVBQUVwQixZQUZaO0FBR0UsU0FBSyxFQUFFRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ3VCLElBQVYsR0FBaUIsRUFIaEM7QUFJRSxhQUFTLEVBQUMsdUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUFrQkQsQ0EzQ0Q7O0FBNkNlekIsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL2VkaXRQb3N0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi8uLi91dGlscy91c2VGb3JtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFZGl0UG9zdEZvcm0gPSAoeyBwb3N0aWQgfSkgPT4ge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXMsIGhhbmRsZUNoYW5nZV0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb3N0aWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9wb3N0cy9cIiArIHBvc3RpZCkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRWYWx1ZXMocmVzLmRhdGEuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtwb3N0aWRdKTtcblxuICBjb25zdCB1cGRhdGVQb3N0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3NcbiAgICAgIC5wdXQoXCIvYXBpL3Bvc3RzL1wiICsgcG9zdGlkLCB2YWx1ZXMpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVQb3N0fSBjbGFzc05hbWU9XCJncmlkIGdhcC00IHAtMTZcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItYmxhY2tcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMudGl0bGUgOiBcIlwifVxuICAgICAgLz5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwiYm9keVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMuYm9keSA6IFwiXCJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IGJvcmRlci1ibGFja1wiXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGRhdGUgUG9zdFwiIC8+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFBvc3RGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/editPostForm.js\n");

/***/ }),

/***/ "./pages/dashboard/editPost/[postid].js":
/*!**********************************************!*\
  !*** ./pages/dashboard/editPost/[postid].js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_forms_editPostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/forms/editPostForm */ \"./components/forms/editPostForm.js\");\nvar _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/pages/dashboard/editPost/[postid].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst EditPostPage = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    postid\n  } = router.query;\n  console.log(router);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(_components_forms_editPostForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    postid: postid,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvZWRpdFBvc3QvW3Bvc3RpZF0uanM/N2ZiOSJdLCJuYW1lcyI6WyJFZGl0UG9zdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0aWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFhRixNQUFNLENBQUNHLEtBQTFCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFjLFVBQU0sRUFBRUUsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQVZEOztBQVllSCwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Rhc2hib2FyZC9lZGl0UG9zdC9bcG9zdGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVkaXRQb3N0Rm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9lZGl0UG9zdEZvcm1cIjtcblxuY29uc3QgRWRpdFBvc3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwb3N0aWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc29sZS5sb2cocm91dGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RWRpdFBvc3RGb3JtIHBvc3RpZD17cG9zdGlkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFBvc3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/editPost/[postid].js\n");

/***/ }),

/***/ "./utils/useForm.js":
/*!**************************!*\
  !*** ./utils/useForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst UseForm = () => {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const handleChange = event => {\n    event.persist();\n    console.log(state);\n    setState(state => _objectSpread(_objectSpread({}, state), {}, {\n      [event.target.name]: event.target.value\n    }));\n  };\n\n  return [state, setState, handleChange];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91c2VGb3JtLmpzP2E4MTMiXSwibmFtZXMiOlsiVXNlRm9ybSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLFFBQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCQSxTQUFLLENBQUNDLE9BQU47QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQUMsWUFBUSxDQUFFRCxLQUFELG9DQUNIQSxLQURHO0FBQ0csT0FBQ0ksS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWQsR0FBcUJMLEtBQUssQ0FBQ0ksTUFBTixDQUFhRTtBQURyQyxNQUFELENBQVI7QUFFRCxHQUxEOztBQU9BLFNBQU8sQ0FBQ1YsS0FBRCxFQUFRQyxRQUFSLEVBQWtCRSxZQUFsQixDQUFQO0FBQ0QsQ0FYRDs7QUFhZUosc0VBQWYiLCJmaWxlIjoiLi91dGlscy91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVzZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucGVyc2lzdCgpXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKFxuICAgICAgey4uLnN0YXRlLFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pKVxuICB9XG5cbiAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGUsIGhhbmRsZUNoYW5nZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/useForm.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });