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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
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

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ \"./models/user.js\");\n/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/session */ \"./models/session.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);\n// import dbConnect from '../../utils/dbConnect'\n// import Users from '../../models/user'\n// import Sessions from '../../models/session'\n// import { v4 as uuidv4 } from 'uuid'\n// import bcrypt from 'bcrypt'\n//\n// dbConnect()\n//\n// export default async ( req, res ) => {\n//   const { method, body } = req\n//   console.log('method');\n//   switch (method){\n//     case \"POST\":\n//       try {\n//         const user = await Users.findOne({email:body.email})\n//         const validPassword = await bcrypt.compare(body.password, user.password)\n//\n//         const session = await Sessions.create({userId: user._id, sessionId: uuidv4()})\n//           res.status(200).json({ success:true, authorization: session.sessionId })\n//       } catch(err) {\n//           res.status(400).json({ success: false, error: err.message})\n//       }\n//       break\n//       default:\n//         res.status(400).json({ success:false })\n//   }\n// }\n\n\n\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method,\n    body\n  } = req;\n\n  switch (method) {\n    case \"POST\":\n      try {\n        const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n          email: body.email\n        });\n        const validPass = await bcrypt__WEBPACK_IMPORTED_MODULE_3__[\"compare\"](body.password, user.password);\n        const session = await _models_session__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n          userId: user._id,\n          sessionId: Object(uuid__WEBPACK_IMPORTED_MODULE_4__[\"v4\"])()\n        });\n        res.status(200).json({\n          success: true,\n          authorization: session.sessionId\n        });\n      } catch (e) {\n        res.status(400).json({\n          success: false,\n          error: e.message\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwidXNlciIsIlVzZXJzIiwiZmluZE9uZSIsImVtYWlsIiwidmFsaWRQYXNzIiwiYmNyeXB0IiwicGFzc3dvcmQiLCJzZXNzaW9uIiwiU2Vzc2lvbnMiLCJjcmVhdGUiLCJ1c2VySWQiLCJfaWQiLCJzZXNzaW9uSWQiLCJ1dWlkdjQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImF1dGhvcml6YXRpb24iLCJlIiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxnRUFBUztBQUVNLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDO0FBQVYsTUFBbUJILEdBQXpCOztBQUNBLFVBQVFFLE1BQVI7QUFDRSxTQUFLLE1BQUw7QUFDRSxVQUFJO0FBQ0YsY0FBTUUsSUFBSSxHQUFHLE1BQU1DLG9EQUFLLENBQUNDLE9BQU4sQ0FBYztBQUFFQyxlQUFLLEVBQUVKLElBQUksQ0FBQ0k7QUFBZCxTQUFkLENBQW5CO0FBRUEsY0FBTUMsU0FBUyxHQUFHLE1BQU1DLDhDQUFBLENBQWVOLElBQUksQ0FBQ08sUUFBcEIsRUFBOEJOLElBQUksQ0FBQ00sUUFBbkMsQ0FBeEI7QUFFQSxjQUFNQyxPQUFPLEdBQUcsTUFBTUMsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQjtBQUNwQ0MsZ0JBQU0sRUFBRVYsSUFBSSxDQUFDVyxHQUR1QjtBQUVwQ0MsbUJBQVMsRUFBRUMsK0NBQU07QUFGbUIsU0FBaEIsQ0FBdEI7QUFLQWhCLFdBQUcsQ0FDQWlCLE1BREgsQ0FDVSxHQURWLEVBRUdDLElBRkgsQ0FFUTtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLHVCQUFhLEVBQUVWLE9BQU8sQ0FBQ0s7QUFBeEMsU0FGUjtBQUdELE9BYkQsQ0FhRSxPQUFPTSxDQUFQLEVBQVU7QUFDVnJCLFdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLEtBQVg7QUFBa0JHLGVBQUssRUFBRUQsQ0FBQyxDQUFDRTtBQUEzQixTQUFyQjtBQUNEOztBQUNEOztBQUNGO0FBQ0V2QixTQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFwQko7QUFzQkQsQ0F4QkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uL3V0aWxzL2RiQ29ubmVjdCdcbi8vIGltcG9ydCBVc2VycyBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcidcbi8vIGltcG9ydCBTZXNzaW9ucyBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbidcbi8vIGltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbi8vXG4vLyBkYkNvbm5lY3QoKVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jICggcmVxLCByZXMgKSA9PiB7XG4vLyAgIGNvbnN0IHsgbWV0aG9kLCBib2R5IH0gPSByZXFcbi8vICAgY29uc29sZS5sb2coJ21ldGhvZCcpO1xuLy8gICBzd2l0Y2ggKG1ldGhvZCl7XG4vLyAgICAgY2FzZSBcIlBPU1RcIjpcbi8vICAgICAgIHRyeSB7XG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtlbWFpbDpib2R5LmVtYWlsfSlcbi8vICAgICAgICAgY29uc3QgdmFsaWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4vL1xuLy8gICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgU2Vzc2lvbnMuY3JlYXRlKHt1c2VySWQ6IHVzZXIuX2lkLCBzZXNzaW9uSWQ6IHV1aWR2NCgpfSlcbi8vICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6dHJ1ZSwgYXV0aG9yaXphdGlvbjogc2Vzc2lvbi5zZXNzaW9uSWQgfSlcbi8vICAgICAgIH0gY2F0Y2goZXJyKSB7XG4vLyAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVyci5tZXNzYWdlfSlcbi8vICAgICAgIH1cbi8vICAgICAgIGJyZWFrXG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6ZmFsc2UgfSlcbi8vICAgfVxuLy8gfVxuXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4uLy4uL21vZGVscy9zZXNzaW9uXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5kYkNvbm5lY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kLCBib2R5IH0gPSByZXE7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWw6IGJvZHkuZW1haWwgfSk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRQYXNzID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoYm9keS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IFNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcbiAgICAgICAgICBzZXNzaW9uSWQ6IHV1aWR2NCgpLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXNcbiAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGF1dGhvcml6YXRpb246IHNlc3Npb24uc2Vzc2lvbklkIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZS5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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