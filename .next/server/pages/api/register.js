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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/session.js":
/*!***************************!*\
  !*** ./models/session.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nconst SessionSchema = new Schema({\n  userId: {\n    type: String\n  },\n  sessionId: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Session || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Session\", SessionSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2Vzc2lvbi5qcz9kZGVlIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiU2Vzc2lvblNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJTdHJpbmciLCJzZXNzaW9uSWQiLCJyZXF1aXJlZCIsIm1vZGVscyIsIlNlc3Npb24iLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLCtDQUFRLENBQUNELE1BQXhCO0FBRUEsTUFBTUUsYUFBYSxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUMvQkcsUUFBTSxFQUFFO0FBQUVDLFFBQUksRUFBQ0M7QUFBUCxHQUR1QjtBQUUvQkMsV0FBUyxFQUFFO0FBQUVGLFFBQUksRUFBQ0MsTUFBUDtBQUFlRSxZQUFRLEVBQUU7QUFBekI7QUFGb0IsQ0FBWCxDQUF0QjtBQUtlTiw4R0FBUSxDQUFDTyxNQUFULENBQWdCQyxPQUFoQixJQUNmUiwrQ0FBUSxDQUFDUyxLQUFULENBQWUsU0FBZixFQUEwQlIsYUFBMUIsQ0FEQSIsImZpbGUiOiIuL21vZGVscy9zZXNzaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcblxuY29uc3QgU2Vzc2lvblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VySWQ6IHsgdHlwZTpTdHJpbmd9LFxuICBzZXNzaW9uSWQ6IHsgdHlwZTpTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuU2Vzc2lvbiB8fFxubW9uZ29vc2UubW9kZWwoXCJTZXNzaW9uXCIsIFNlc3Npb25TY2hlbWEpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/session.js\n");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nconst UserSchema = new Schema({\n  firstName: {\n    type: String,\n    required: true\n  },\n  lastName: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  profileImage: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlci5qcz8xZjY5Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInByb2ZpbGVJbWFnZSIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLCtDQUFRLENBQUNELE1BQXhCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUM1QkcsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRUMsTUFERztBQUVUQyxZQUFRLEVBQUM7QUFGQSxHQURpQjtBQUs1QkMsVUFBUSxFQUFFO0FBQ1JILFFBQUksRUFBRUMsTUFERTtBQUVSQyxZQUFRLEVBQUM7QUFGRCxHQUxrQjtBQVM1QkUsT0FBSyxFQUFFO0FBQ0xKLFFBQUksRUFBRUMsTUFERDtBQUVMQyxZQUFRLEVBQUMsSUFGSjtBQUdMRyxVQUFNLEVBQUM7QUFIRixHQVRxQjtBQWM1QkMsVUFBUSxFQUFFO0FBQ1JOLFFBQUksRUFBQ0MsTUFERztBQUVSQyxZQUFRLEVBQUM7QUFGRCxHQWRrQjtBQWtCNUJLLGNBQVksRUFBRTtBQUNaUCxRQUFJLEVBQUVDLE1BRE07QUFFWkMsWUFBUSxFQUFDO0FBRkc7QUFsQmMsQ0FBWCxDQUFuQjtBQXlCZUwsOEdBQVEsQ0FBQ1csTUFBVCxDQUFnQkMsSUFBaEIsSUFDZlosK0NBQVEsQ0FBQ2EsS0FBVCxDQUFlLE1BQWYsRUFBdUJaLFVBQXZCLENBREEiLCJmaWxlIjoiLi9tb2RlbHMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGZpcnN0TmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDp0cnVlLFxuICB9LFxuICBsYXN0TmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDp0cnVlLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDp0cnVlLFxuICAgIHVuaXF1ZTp0cnVlLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6U3RyaW5nLFxuICAgIHJlcXVpcmVkOnRydWUsXG4gIH0sXG4gIHByb2ZpbGVJbWFnZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDp0cnVlLFxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8XG5tb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ \"./models/user.js\");\n/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/session */ \"./models/session.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method,\n    body\n  } = req;\n\n  switch (method) {\n    case \"POST\":\n      try {\n        //defining the level of encryption\n        const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default.a.genSalt(10); // hashing the password\n\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default.a.hash(req.body.password, salt);\n        req.body.password = hashedPassword;\n        const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n        const session = await _models_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n          userId: user._id,\n          sessionId: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])()\n        });\n        res.status(200).json({\n          success: true,\n          authorization: session.sessionId\n        });\n      } catch (err) {\n        res.status(400).json({\n          success: false,\n          err: err.message\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanM/MTU5YiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5Iiwic2FsdCIsImJjcnlwdCIsImdlblNhbHQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJwYXNzd29yZCIsInVzZXIiLCJVc2VycyIsImNyZWF0ZSIsInNlc3Npb24iLCJTZXNzaW9ucyIsInVzZXJJZCIsIl9pZCIsInNlc3Npb25JZCIsInV1aWR2NCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiYXV0aG9yaXphdGlvbiIsImVyciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdFQUFTO0FBR00sc0VBQU1DLEdBQU4sRUFBV0MsR0FBWCxLQUFrQjtBQUMvQixRQUFNO0FBQUVDLFVBQUY7QUFBVUM7QUFBVixNQUFtQkgsR0FBekI7O0FBRUEsVUFBUUUsTUFBUjtBQUNFLFNBQUssTUFBTDtBQUNGLFVBQUc7QUFFRDtBQUNBLGNBQU1FLElBQUksR0FBRyxNQUFNQyw2Q0FBTSxDQUFDQyxPQUFQLENBQWUsRUFBZixDQUFuQixDQUhDLENBS0Q7O0FBQ0EsY0FBTUMsY0FBYyxHQUFHLE1BQU1GLDZDQUFNLENBQUNHLElBQVAsQ0FBWVIsR0FBRyxDQUFDRyxJQUFKLENBQVNNLFFBQXJCLEVBQStCTCxJQUEvQixDQUE3QjtBQUNBSixXQUFHLENBQUNHLElBQUosQ0FBU00sUUFBVCxHQUFvQkYsY0FBcEI7QUFFQSxjQUFNRyxJQUFJLEdBQUcsTUFBTUMsb0RBQUssQ0FBQ0MsTUFBTixDQUFhVCxJQUFiLENBQW5CO0FBQ0EsY0FBTVUsT0FBTyxHQUFHLE1BQU1DLHVEQUFRLENBQUNGLE1BQVQsQ0FBZ0I7QUFBQ0csZ0JBQU0sRUFBRUwsSUFBSSxDQUFDTSxHQUFkO0FBQW1CQyxtQkFBUyxFQUFDQywrQ0FBTTtBQUFuQyxTQUFoQixDQUF0QjtBQUNBakIsV0FBRyxDQUNGa0IsTUFERCxDQUNRLEdBRFIsRUFFQ0MsSUFGRCxDQUVNO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsdUJBQWEsRUFBRVQsT0FBTyxDQUFDSTtBQUF4QyxTQUZOO0FBSUQsT0FmRCxDQWVFLE9BQU9NLEdBQVAsRUFBVztBQUNUdEIsV0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3JCQyxpQkFBTyxFQUFDLEtBRGE7QUFDTkUsYUFBRyxFQUFDQSxHQUFHLENBQUNDO0FBREYsU0FBckI7QUFFSDs7QUFFRzs7QUFDRjtBQUNFdkIsU0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2ZDLGVBQU8sRUFBQztBQURPLE9BQXJCO0FBeEJKO0FBNkJELENBaENEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3JlZ2lzdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi91dGlscy9kYkNvbm5lY3QnXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInXG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5cbmRiQ29ubmVjdCgpXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMocmVxLCByZXMpPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxXG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiUE9TVFwiOlxuICB0cnl7XG5cbiAgICAvL2RlZmluaW5nIHRoZSBsZXZlbCBvZiBlbmNyeXB0aW9uXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKVxuXG4gICAgLy8gaGFzaGluZyB0aGUgcGFzc3dvcmRcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHJlcS5ib2R5LnBhc3N3b3JkLCBzYWx0KVxuICAgIHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaGVkUGFzc3dvcmRcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5jcmVhdGUoYm9keSlcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgU2Vzc2lvbnMuY3JlYXRlKHt1c2VySWQ6IHVzZXIuX2lkLCBzZXNzaW9uSWQ6dXVpZHY0KCl9KVxuICAgIHJlc1xuICAgIC5zdGF0dXMoMjAwKVxuICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgYXV0aG9yaXphdGlvbjogc2Vzc2lvbi5zZXNzaW9uSWR9KVxuICAgIFxuICB9IGNhdGNoIChlcnIpe1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczpmYWxzZSwgZXJyOmVyci5tZXNzYWdlfSlcbiAgfVxuXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzczpmYWxzZVxuICAgICAgfSlcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/register.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nconst dbConnect = async () => {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://BigDaddy29:Koooleo$1@cluster0-oa9kw.mongodb.net/FeatherPen?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false\n  });\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDNUIsTUFBR0QsVUFBVSxDQUFDRSxXQUFkLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU1DLCtDQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHNHQUFqQixFQUEwQztBQUN6REMsbUJBQWUsRUFBQyxJQUR5QztBQUV6REMsc0JBQWtCLEVBQUMsSUFGc0M7QUFHekRDLG9CQUFnQixFQUFDO0FBSHdDLEdBQTFDLENBQWpCO0FBTUFULFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDTyxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVliLFVBQVUsQ0FBQ0UsV0FBdkI7QUFDRCxDQWJEOztBQWdCZUQsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fVxuXG5jb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOnRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OnRydWUsXG4gICAgdXNlRmluZEFuZE1vZGlmeTpmYWxzZSxcbiAgfSlcblxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZVxuICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });