module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/newPost.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/forms/newPostForm.js":
/*!*****************************************!*\
  !*** ./components/forms/newPostForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useForm */ \"./utils/useForm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/components/forms/newPostForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst PostForm = () => {\n  const [values, setValues, handleChange] = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const createPost = e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/api/posts\", values, {\n      headers: {\n        authorization: localStorage.getItem('authorization')\n      }\n    }).then(res => {\n      router.push('/');\n    }).catch(err => {\n      console.log(err.message);\n    });\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: createPost,\n    className: \"grid gap-4 p-16\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    className: \"border-4 border-black\",\n    type: \"text\",\n    name: \"title\",\n    onChange: handleChange,\n    value: values ? values.title : \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    name: \"body\",\n    onChange: handleChange,\n    value: values ? values.body : \"\",\n    className: \"border-4 border-black\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Create Post\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL25ld1Bvc3RGb3JtLmpzPzkwYjYiXSwibmFtZXMiOlsiUG9zdEZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3JlYXRlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXMiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInRpdGxlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsRUFBb0JDLFlBQXBCLElBQW9DQyw4REFBTyxFQUFqRDtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsUUFBTUMsVUFBVSxHQUFJQyxDQUFELElBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNFQyxnREFBSyxDQUNGQyxJQURILENBQ1EsWUFEUixFQUNzQlYsTUFEdEIsRUFDNkI7QUFBRVcsYUFBTyxFQUNsQztBQUFDQyxxQkFBYSxFQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckI7QUFBZjtBQUR5QixLQUQ3QixFQUlHQyxJQUpILENBSVNDLEdBQUQsSUFBUztBQUNiWixZQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FOSCxFQU9HQyxLQVBILENBT1VDLEdBQUQsSUFBUztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxPQUFoQjtBQUNELEtBVEg7QUFXSCxHQWJIOztBQWVBLFNBQ0U7QUFBTSxZQUFRLEVBQUVoQixVQUFoQjtBQUE0QixhQUFTLEVBQUMsaUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBQyx1QkFBakI7QUFBeUMsUUFBSSxFQUFDLE1BQTlDO0FBQXFELFFBQUksRUFBQyxPQUExRDtBQUFrRSxZQUFRLEVBQUVKLFlBQTVFO0FBQTBGLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUN1QixLQUFWLEdBQWtCLEVBQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVUsUUFBSSxFQUFDLE1BQWY7QUFDVSxZQUFRLEVBQUVyQixZQURwQjtBQUVVLFNBQUssRUFBRUYsTUFBTSxHQUFHQSxNQUFNLENBQUN3QixJQUFWLEdBQWlCLEVBRnhDO0FBRTRDLGFBQVMsRUFBQyx1QkFGdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREY7QUFVRCxDQTdCRDs7QUErQmV6Qix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybXMvbmV3UG9zdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tICcuLi8uLi91dGlscy91c2VGb3JtJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXMsIGhhbmRsZUNoYW5nZV0gPSB1c2VGb3JtKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBjcmVhdGVQb3N0ID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChcIi9hcGkvcG9zdHNcIiwgdmFsdWVzLHsgaGVhZGVyczpcbiAgICAgICAgICAgIHthdXRob3JpemF0aW9uOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRob3JpemF0aW9uJyl9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuXG4gICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGVQb3N0fSBjbGFzc05hbWU9XCJncmlkIGdhcC00IHAtMTZcIj5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItYmxhY2tcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMudGl0bGUgOiBcIlwiIH0vPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJib2R5XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMgPyB2YWx1ZXMuYm9keSA6IFwiXCJ9IGNsYXNzTmFtZT1cImJvcmRlci00IGJvcmRlci1ibGFja1wiPlxuICAgICAgPC90ZXh0YXJlYSA+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIFBvc3RcIi8+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/newPostForm.js\n");

/***/ }),

/***/ "./pages/dashboard/newPost.js":
/*!************************************!*\
  !*** ./pages/dashboard/newPost.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_newPostForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/forms/newPostForm */ \"./components/forms/newPostForm.js\");\n/* harmony import */ var _utils_useVerify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useVerify */ \"./utils/useVerify.js\");\nvar _jsxFileName = \"/Users/blakedouglass/Desktop/projects/Pair_Programming/FeatherPen/pages/dashboard/newPost.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst NewPost = () => {\n  const [verified, checkForSession] = Object(_utils_useVerify__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    checkForSession();\n  }, []);\n\n  if (verified) {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 7\n      }\n    }, __jsx(\"h2\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }, \"MAKE NEW POST\"), __jsx(_components_forms_newPostForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 12\n      }\n    }, \"You need to login to access this page\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvbmV3UG9zdC5qcz9iN2VmIl0sIm5hbWVzIjpbIk5ld1Bvc3QiLCJ2ZXJpZmllZCIsImNoZWNrRm9yU2Vzc2lvbiIsInVzZVZlcmlmeSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTSxDQUFDQyxRQUFELEVBQVdDLGVBQVgsSUFBOEJDLGdFQUFTLEVBQTdDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixtQkFBZTtBQUNoQixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQUlELFFBQUosRUFBYztBQUNaLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGO0FBTUQsR0FQRCxNQU9PO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUFQO0FBQ0Q7QUFDRixDQWpCRDs7QUFrQmVELHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkL25ld1Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3UG9zdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvbmV3UG9zdEZvcm1cIjtcbmltcG9ydCB1c2VWZXJpZnkgZnJvbSBcIi4uLy4uL3V0aWxzL3VzZVZlcmlmeVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFt2ZXJpZmllZCwgY2hlY2tGb3JTZXNzaW9uXSA9IHVzZVZlcmlmeSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tGb3JTZXNzaW9uKCk7XG4gIH0sIFtdKTtcblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPk1BS0UgTkVXIFBPU1Q8L2gyPlxuICAgICAgICA8TmV3UG9zdEZvcm0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxkaXY+WW91IG5lZWQgdG8gbG9naW4gdG8gYWNjZXNzIHRoaXMgcGFnZTwvZGl2PjtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard/newPost.js\n");

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

/***/ "./utils/useVerify.js":
/*!****************************!*\
  !*** ./utils/useVerify.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n// import { useState } from \"react\";\n// import axios from \"axios\";\n// import Register from \"../pages/register\";\n// import Link from \"next/link\";\n//\n// const verifySession = () => {\n//   const [verified, setVerified] = useState({\n//     data: (\n//       <div>\n//         <h1>Loading...</h1>\n//       </div>\n//     ),\n//   });\n//\n//   const checkForSession = () => {\n//     axios\n//       .get(\"/api/session\", {\n//         headers: {\n//           authorization: localStorage.getItem(\"authorization\"),\n//         },\n//       })\n//       .then((res) => {\n//         if (res.data.success) {\n//           setVerified({\n//             success: true,\n//           });\n//         } else {\n//           setVerified({\n//             loading: false,\n//             success: false,\n//             data: (\n//               <div>\n//                 <h1>Ooops, somethings not right on our end</h1>\n//                 <p>\n//                   Please{\" \"}\n//                   <Link href=\"/register\">\n//                     <a>register</a>\n//                   </Link>{\" \"}\n//                   to continue\n//                 </p>\n//               </div>\n//             ),\n//           });\n//         }\n//       })\n//       .catch((err) => {\n//         console.log(err);\n//         setVerified({\n//           data: (\n//             <div>\n//               <h1>Ooops, somethings not right on our end</h1>\n//               <p>\n//                 Please{\" \"}\n//                 <Link href=\"/register\">\n//                   <a>register</a>\n//                 </Link>{\" \"}\n//                 to continue\n//               </p>\n//             </div>\n//           ),\n//         });\n//       });\n//   };\n//   return [verified, checkForSession];\n// };\n// export default verifySession;\n\n\n\nconst useVerify = () => {\n  const {\n    0: verified,\n    1: setVerified\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    loading: true\n  });\n\n  const checkForSession = () => {\n    if (localStorage.getItem(\"authorization\") === null) {\n      setVerified(false);\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/api/session\", {\n      headers: {\n        authorization: localStorage.getItem(\"authorization\")\n      }\n    }).then(res => {\n      if (res.data.success) {\n        setVerified(true);\n      } else {\n        setVerified(false);\n      }\n    }).catch(err => {\n      setVerified(false);\n    });\n  };\n\n  return [verified, checkForSession];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useVerify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91c2VWZXJpZnkuanM/OTI0ZSJdLCJuYW1lcyI6WyJ1c2VWZXJpZnkiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiY2hlY2tGb3JTZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBR0EsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQUQsQ0FBeEM7O0FBQ0EsUUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsUUFBSUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLE1BQTBDLElBQTlDLEVBQW9EO0FBQ2xETCxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBO0FBQ0Q7O0FBQ0RNLGdEQUFLLENBQ0ZDLEdBREgsQ0FDTyxjQURQLEVBQ3VCO0FBQ25CQyxhQUFPLEVBQUU7QUFDUEMscUJBQWEsRUFBRUwsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCO0FBRFI7QUFEVSxLQUR2QixFQU1HSyxJQU5ILENBTVNDLEdBQUQsSUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxPQUFiLEVBQXNCO0FBQ3BCYixtQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELE9BRkQsTUFFTztBQUNMQSxtQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsS0FaSCxFQWFHYyxLQWJILENBYVVDLEdBQUQsSUFBUztBQUNkZixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNELEtBZkg7QUFnQkQsR0FyQkQ7O0FBc0JBLFNBQU8sQ0FBQ0QsUUFBRCxFQUFXSSxlQUFYLENBQVA7QUFDRCxDQXpCRDs7QUEwQmVMLHdFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvdXNlVmVyaWZ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vcGFnZXMvcmVnaXN0ZXJcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vXG4vLyBjb25zdCB2ZXJpZnlTZXNzaW9uID0gKCkgPT4ge1xuLy8gICBjb25zdCBbdmVyaWZpZWQsIHNldFZlcmlmaWVkXSA9IHVzZVN0YXRlKHtcbi8vICAgICBkYXRhOiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApLFxuLy8gICB9KTtcbi8vXG4vLyAgIGNvbnN0IGNoZWNrRm9yU2Vzc2lvbiA9ICgpID0+IHtcbi8vICAgICBheGlvc1xuLy8gICAgICAgLmdldChcIi9hcGkvc2Vzc2lvblwiLCB7XG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICBhdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhvcml6YXRpb25cIiksXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9KVxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuLy8gICAgICAgICAgIHNldFZlcmlmaWVkKHtcbi8vICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4vLyAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgc2V0VmVyaWZpZWQoe1xuLy8gICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4vLyAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbi8vICAgICAgICAgICAgIGRhdGE6IChcbi8vICAgICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgICA8aDE+T29vcHMsIHNvbWV0aGluZ3Mgbm90IHJpZ2h0IG9uIG91ciBlbmQ8L2gxPlxuLy8gICAgICAgICAgICAgICAgIDxwPlxuLy8gICAgICAgICAgICAgICAgICAgUGxlYXNle1wiIFwifVxuLy8gICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8YT5yZWdpc3RlcjwvYT5cbi8vICAgICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4vLyAgICAgICAgICAgICAgICAgICB0byBjb250aW51ZVxuLy8gICAgICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbi8vICAgICAgICAgc2V0VmVyaWZpZWQoe1xuLy8gICAgICAgICAgIGRhdGE6IChcbi8vICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgIDxoMT5Pb29wcywgc29tZXRoaW5ncyBub3QgcmlnaHQgb24gb3VyIGVuZDwvaDE+XG4vLyAgICAgICAgICAgICAgIDxwPlxuLy8gICAgICAgICAgICAgICAgIFBsZWFzZXtcIiBcIn1cbi8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4vLyAgICAgICAgICAgICAgICAgICA8YT5yZWdpc3RlcjwvYT5cbi8vICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuLy8gICAgICAgICAgICAgICAgIHRvIGNvbnRpbnVlXG4vLyAgICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICksXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSk7XG4vLyAgIH07XG4vLyAgIHJldHVybiBbdmVyaWZpZWQsIGNoZWNrRm9yU2Vzc2lvbl07XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U2Vzc2lvbjtcblxuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5cbmNvbnN0IHVzZVZlcmlmeSA9ICgpID0+IHtcbiAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gIGNvbnN0IGNoZWNrRm9yU2Vzc2lvbiA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRob3JpemF0aW9uXCIpID09PSBudWxsKSB7XG4gICAgICBzZXRWZXJpZmllZChmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9zZXNzaW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGF1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aG9yaXphdGlvblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VmVyaWZpZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgc2V0VmVyaWZpZWQoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG4gIHJldHVybiBbdmVyaWZpZWQsIGNoZWNrRm9yU2Vzc2lvbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVmVyaWZ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/useVerify.js\n");

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