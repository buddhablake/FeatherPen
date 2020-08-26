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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/posts/[postid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/post.js":
/*!************************!*\
  !*** ./models/post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\nconst PostSchema = new Schema({\n  title: {\n    type: String,\n    required: [true, \"Title is required\"],\n    maxlength: 100\n  },\n  body: {\n    type: String,\n    required: [true, \"Author is required\"]\n  },\n  author: {\n    type: String,\n    required: [true, \"Author is required\"]\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose.models.Post || mongoose.model(\"Post\", PostSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcG9zdC5qcz9hNDg0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsIlBvc3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImJvZHkiLCJhdXRob3IiLCJtb2RlbHMiLCJQb3N0IiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRSxNQUF4QjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJRCxNQUFKLENBQVk7QUFDN0JFLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUNDLE1BREY7QUFFSEMsWUFBUSxFQUFDLENBQUMsSUFBRCxFQUFNLG1CQUFOLENBRk47QUFHSEMsYUFBUyxFQUFDO0FBSFAsR0FEc0I7QUFPN0JDLE1BQUksRUFBRTtBQUNKSixRQUFJLEVBQUVDLE1BREY7QUFFSkMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFNLG9CQUFOO0FBRk4sR0FQdUI7QUFXN0JHLFFBQU0sRUFBRTtBQUNOTCxRQUFJLEVBQUVDLE1BREE7QUFFTkMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFNLG9CQUFOO0FBRko7QUFYcUIsQ0FBWixDQUFuQjtBQW1CZVAsdUVBQVEsQ0FBQ1csTUFBVCxDQUFnQkMsSUFBaEIsSUFDZlosUUFBUSxDQUFDYSxLQUFULENBQWUsTUFBZixFQUF1QlYsVUFBdkIsQ0FEQSIsImZpbGUiOiIuL21vZGVscy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXG5cbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYVxuXG5jb25zdCBQb3N0U2NoZW1hID0gbmV3IFNjaGVtYSAoe1xuICB0aXRsZToge1xuICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICByZXF1aXJlZDpbdHJ1ZSxcIlRpdGxlIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgbWF4bGVuZ3RoOjEwMCxcbiAgICB9LFxuXG4gIGJvZHk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLFwiQXV0aG9yIGlzIHJlcXVpcmVkXCJdLFxuICB9LFxuICBhdXRob3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLFwiQXV0aG9yIGlzIHJlcXVpcmVkXCJdLFxuICB9LFxuXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qb3N0IHx8XG5tb25nb29zZS5tb2RlbChcIlBvc3RcIiwgUG9zdFNjaGVtYSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/post.js\n");

/***/ }),

/***/ "./pages/api/posts/[postid].js":
/*!*************************************!*\
  !*** ./pages/api/posts/[postid].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/post */ \"./models/post.js\");\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method,\n    query: {\n      postid\n    },\n    body\n  } = req;\n\n  switch (method) {\n    case \"DELETE\":\n      try {\n        const posts = await _models_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndRemove(postid);\n        res.status(200).json({\n          success: true,\n          data: posts\n        });\n      } catch (err) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case \"PUT\":\n      try {\n        const newPost = await _models_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(postid, body, {\n          new: true\n        });\n        res.status(200).json({\n          success: true,\n          data: newPost\n        });\n      } catch (err) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case \"GET\":\n      try {\n        const post = await _models_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n          _id: postid\n        });\n        res.status(200).json({\n          success: true,\n          data: post\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdHMvW3Bvc3RpZF0uanM/MzhmMiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsInBvc3RpZCIsImJvZHkiLCJwb3N0cyIsIlBvc3RzIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnIiLCJuZXdQb3N0IiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJuZXciLCJwb3N0IiwiZmluZE9uZSIsIl9pZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQ0pDLFVBREk7QUFFSkMsU0FBSyxFQUFFO0FBQUVDO0FBQUYsS0FGSDtBQUdKQztBQUhJLE1BSUZMLEdBSko7O0FBTUEsVUFBUUUsTUFBUjtBQUNFLFNBQUssUUFBTDtBQUNFLFVBQUk7QUFDRixjQUFNSSxLQUFLLEdBQUcsTUFBTUMsb0RBQUssQ0FBQ0MsaUJBQU4sQ0FBd0JKLE1BQXhCLENBQXBCO0FBQ0FILFdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFTjtBQUF2QixTQUFyQjtBQUNELE9BSEQsQ0FHRSxPQUFPTyxHQUFQLEVBQVk7QUFDWlosV0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLGlCQUFPLEVBQUU7QUFEVSxTQUFyQjtBQUdEOztBQUNEOztBQUVGLFNBQUssS0FBTDtBQUNFLFVBQUk7QUFDRixjQUFNRyxPQUFPLEdBQUcsTUFBTVAsb0RBQUssQ0FBQ1EsaUJBQU4sQ0FBd0JYLE1BQXhCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUMxRFcsYUFBRyxFQUFFO0FBRHFELFNBQXRDLENBQXRCO0FBR0FmLFdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFRTtBQUF2QixTQUFyQjtBQUNELE9BTEQsQ0FLRSxPQUFPRCxHQUFQLEVBQVk7QUFDWlosV0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLGlCQUFPLEVBQUU7QUFEVSxTQUFyQjtBQUdEOztBQUVEOztBQUVGLFNBQUssS0FBTDtBQUNFLFVBQUk7QUFDRixjQUFNTSxJQUFJLEdBQUcsTUFBTVYsb0RBQUssQ0FBQ1csT0FBTixDQUFjO0FBQUVDLGFBQUcsRUFBRWY7QUFBUCxTQUFkLENBQW5CO0FBQ0FILFdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFSztBQUF2QixTQUFyQjtBQUNELE9BSEQsQ0FHRSxPQUFPRyxLQUFQLEVBQWM7QUFDZG5CLFdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxpQkFBTyxFQUFFO0FBRFUsU0FBckI7QUFHRDs7QUFDRDs7QUFFRjtBQUNFVixTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsZUFBTyxFQUFFO0FBRFUsT0FBckI7QUFHQTtBQXpDSjtBQTJDRCxDQWxERCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb3N0cy9bcG9zdGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdFwiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcG9zdFwiO1xuXG5kYkNvbm5lY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtZXRob2QsXG4gICAgcXVlcnk6IHsgcG9zdGlkIH0sXG4gICAgYm9keSxcbiAgfSA9IHJlcTtcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdHMuZmluZEJ5SWRBbmRSZW1vdmUocG9zdGlkKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBwb3N0cyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiUFVUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdQb3N0ID0gYXdhaXQgUG9zdHMuZmluZEJ5SWRBbmRVcGRhdGUocG9zdGlkLCBib2R5LCB7XG4gICAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdQb3N0IH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3RzLmZpbmRPbmUoeyBfaWQ6IHBvc3RpZCB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBwb3N0IH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/posts/[postid].js\n");

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });