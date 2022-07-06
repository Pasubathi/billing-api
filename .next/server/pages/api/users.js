"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./helpers/api/api-handler.js":
/*!************************************!*\
  !*** ./helpers/api/api-handler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHandler\": () => (/* binding */ apiHandler)\n/* harmony export */ });\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/api */ \"(api)/./helpers/api/index.js\");\n\n\nfunction apiHandler(handler) {\n    return async (req, res)=>{\n        try {\n            // global middleware\n            await (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.jwtMiddleware)(req, res);\n            // route handler\n            await handler(req, res);\n        } catch (err) {\n            // global error handler\n            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(err, res);\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9hcGktaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRTtBQUU1QztBQUV0QixTQUFTRSxVQUFVLENBQUNDLE9BQU8sRUFBRTtJQUN6QixPQUFPLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO1FBQ3ZCLElBQUk7WUFDQSxvQkFBb0I7WUFDcEIsTUFBTUosMkRBQWEsQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztZQUU5QixnQkFBZ0I7WUFDaEIsTUFBTUYsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCLENBQUMsT0FBT0MsR0FBRyxFQUFFO1lBQ1YsdUJBQXVCO1lBQ3ZCTiwwREFBWSxDQUFDTSxHQUFHLEVBQUVELEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGVuZXh0Ly4vaGVscGVycy9hcGkvYXBpLWhhbmRsZXIuanM/MjcxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlcnJvckhhbmRsZXIsIGp3dE1pZGRsZXdhcmUgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvYXBpJztcblxuZXhwb3J0IHsgYXBpSGFuZGxlciB9O1xuXG5mdW5jdGlvbiBhcGlIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBnbG9iYWwgbWlkZGxld2FyZVxuICAgICAgICAgICAgYXdhaXQgand0TWlkZGxld2FyZShyZXEsIHJlcyk7XG5cbiAgICAgICAgICAgIC8vIHJvdXRlIGhhbmRsZXJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIocmVxLCByZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIoZXJyLCByZXMpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJlcnJvckhhbmRsZXIiLCJqd3RNaWRkbGV3YXJlIiwiYXBpSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/api/api-handler.js\n");

/***/ }),

/***/ "(api)/./helpers/api/error-handler.js":
/*!**************************************!*\
  !*** ./helpers/api/error-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorHandler\": () => (/* binding */ errorHandler)\n/* harmony export */ });\n\nfunction errorHandler(err, res) {\n    if (typeof err === \"string\") {\n        // custom application error\n        return res.status(400).json({\n            message: err\n        });\n    }\n    if (err.name === \"UnauthorizedError\") {\n        // jwt authentication error\n        return res.status(401).json({\n            message: \"Invalid Token\"\n        });\n    }\n    // default to 500 server error\n    return res.status(500).json({\n        message: err.message\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9lcnJvci1oYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBd0I7QUFFeEIsU0FBU0EsWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QixJQUFJLE9BQVFELEdBQUcsS0FBTSxRQUFRLEVBQUU7UUFDM0IsMkJBQTJCO1FBQzNCLE9BQU9DLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFSixHQUFHO1NBQUUsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsSUFBSUEsR0FBRyxDQUFDSyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7UUFDbEMsMkJBQTJCO1FBQzNCLE9BQU9KLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGVBQWU7U0FBRSxDQUFDLENBQUM7S0FDN0Q7SUFFRCw4QkFBOEI7SUFDOUIsT0FBT0gsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUVKLEdBQUcsQ0FBQ0ksT0FBTztLQUFFLENBQUMsQ0FBQztDQUN6RCIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGVuZXh0Ly4vaGVscGVycy9hcGkvZXJyb3ItaGFuZGxlci5qcz83MTE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGVycm9ySGFuZGxlciB9O1xuXG5mdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyLCByZXMpIHtcbiAgICBpZiAodHlwZW9mIChlcnIpID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBjdXN0b20gYXBwbGljYXRpb24gZXJyb3JcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICAgIH1cblxuICAgIGlmIChlcnIubmFtZSA9PT0gJ1VuYXV0aG9yaXplZEVycm9yJykge1xuICAgICAgICAvLyBqd3QgYXV0aGVudGljYXRpb24gZXJyb3JcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgVG9rZW4nIH0pO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgdG8gNTAwIHNlcnZlciBlcnJvclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xufSJdLCJuYW1lcyI6WyJlcnJvckhhbmRsZXIiLCJlcnIiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/api/error-handler.js\n");

/***/ }),

/***/ "(api)/./helpers/api/index.js":
/*!******************************!*\
  !*** ./helpers/api/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-handler */ \"(api)/./helpers/api/api-handler.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _api_handler__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _api_handler__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ \"(api)/./helpers/api/error-handler.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _error_handler__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _error_handler__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-middleware */ \"(api)/./helpers/api/jwt-middleware.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0M7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGVuZXh0Ly4vaGVscGVycy9hcGkvaW5kZXguanM/MDk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiAgZnJvbSAnLi9hcGktaGFuZGxlcic7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9yLWhhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9qd3QtbWlkZGxld2FyZSc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/api/index.js\n");

/***/ }),

/***/ "(api)/./helpers/api/jwt-middleware.js":
/*!***************************************!*\
  !*** ./helpers/api/jwt-middleware.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jwtMiddleware\": () => (/* binding */ jwtMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\nconst expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\nconst util = __webpack_require__(/*! util */ \"util\");\n\nconst { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\n\nfunction jwtMiddleware(req, res) {\n    const middleware = expressJwt({\n        secret: serverRuntimeConfig.secret,\n        algorithms: [\n            \"HS256\"\n        ]\n    }).unless({\n        path: [\n            // public routes that don't require authentication\n            \"/api/login\"\n        ]\n    });\n    return util.promisify(middleware)(req, res);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9qd3QtbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQztBQUN6QyxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsa0JBQU0sQ0FBQztBQUNRO0FBRXBDLE1BQU0sRUFBRUcsbUJBQW1CLEdBQUUsR0FBR0Qsa0RBQVMsRUFBRTtBQUVsQjtBQUV6QixTQUFTRSxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdCLE1BQU1DLFVBQVUsR0FBR1IsVUFBVSxDQUFDO1FBQUVTLE1BQU0sRUFBRUwsbUJBQW1CLENBQUNLLE1BQU07UUFBRUMsVUFBVSxFQUFFO1lBQUMsT0FBTztTQUFDO0tBQUUsQ0FBQyxDQUFDQyxNQUFNLENBQUM7UUFDaEdDLElBQUksRUFBRTtZQUNGLGtEQUFrRDtZQUNsRCxZQUFZO1NBQ2Y7S0FDSixDQUFDO0lBRUYsT0FBT1YsSUFBSSxDQUFDVyxTQUFTLENBQUNMLFVBQVUsQ0FBQyxDQUFDRixHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO0NBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZW5leHQvLi9oZWxwZXJzL2FwaS9qd3QtbWlkZGxld2FyZS5qcz8xODdmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3NKd3QgPSByZXF1aXJlKCdleHByZXNzLWp3dCcpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5jb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG5leHBvcnQgeyBqd3RNaWRkbGV3YXJlIH07XG5cbmZ1bmN0aW9uIGp3dE1pZGRsZXdhcmUocmVxLCByZXMpIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gZXhwcmVzc0p3dCh7IHNlY3JldDogc2VydmVyUnVudGltZUNvbmZpZy5zZWNyZXQsIGFsZ29yaXRobXM6IFsnSFMyNTYnXSB9KS51bmxlc3Moe1xuICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAvLyBwdWJsaWMgcm91dGVzIHRoYXQgZG9uJ3QgcmVxdWlyZSBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgJy9hcGkvbG9naW4nXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHJldHVybiB1dGlsLnByb21pc2lmeShtaWRkbGV3YXJlKShyZXEsIHJlcyk7XG59Il0sIm5hbWVzIjpbImV4cHJlc3NKd3QiLCJyZXF1aXJlIiwidXRpbCIsImdldENvbmZpZyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJqd3RNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibWlkZGxld2FyZSIsInNlY3JldCIsImFsZ29yaXRobXMiLCJ1bmxlc3MiLCJwYXRoIiwicHJvbWlzaWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/api/jwt-middleware.js\n");

/***/ }),

/***/ "(api)/./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMiddleware)\n/* harmony export */ });\nfunction initMiddleware(middleware) {\n    return (req, res)=>new Promise((resolve, reject)=>{\n            middleware(req, res, (result)=>{\n                if (result instanceof Error) {\n                    return reject(result);\n                }\n                return resolve(result);\n            });\n        })\n    ;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxjQUFjLENBQUNDLFVBQVUsRUFBRTtJQUNqRCxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxHQUNkLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sR0FBSztZQUMvQkwsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDSSxNQUFNLEdBQUs7Z0JBQy9CLElBQUlBLE1BQU0sWUFBWUMsS0FBSyxFQUFFO29CQUMzQixPQUFPRixNQUFNLENBQUNDLE1BQU0sQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBT0YsT0FBTyxDQUFDRSxNQUFNLENBQUM7YUFDdkIsQ0FBQztTQUNILENBQUM7SUFBQTtDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZW5leHQvLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzP2FjZWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxufSJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/init-middleware.js\n");

/***/ }),

/***/ "(api)/./pages/api/_base.js":
/*!****************************!*\
  !*** ./pages/api/_base.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvX2Jhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLElBQUlDLE1BQU0sQ0FBQztBQUVsQixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDSCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsTUFBTSxFQUFFO1FBQ2hCRSxNQUFNLENBQUNGLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFLENBQUM7S0FDdEM7SUFFREMsTUFBTSxHQUFHRSxNQUFNLENBQUNGLE1BQU0sQ0FBQztDQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGVuZXh0Ly4vcGFnZXMvYXBpL19iYXNlLmpzPzkwN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBsZXQgcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICB9XG5cbiAgICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/_base.js\n");

/***/ }),

/***/ "(api)/./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/init-middleware */ \"(api)/./lib/init-middleware.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_base */ \"(api)/./pages/api/_base.js\");\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../helpers/api */ \"(api)/./helpers/api/index.js\");\n// Fake users data\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api__WEBPACK_IMPORTED_MODULE_3__.apiHandler)(userHandler));\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"GET\",\n        \"POST\",\n        \"OPTIONS\"\n    ]\n}));\nasync function userHandler(req, res) {\n    await cors(req, res);\n    try {\n        console.log(\"ss\");\n        const tmpuser = await _base__WEBPACK_IMPORTED_MODULE_2__.prisma.tmpuser.findMany();\n        res.status(200).json(tmpuser);\n    } catch (error) {\n        console.error(error);\n        res.status(500).send({\n            message: error.message ? error.message : error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0JBQWtCO0FBQ007QUFDOEI7QUFDckI7QUFDZ0I7QUFDakQsaUVBQWVHLHdEQUFVLENBQUNDLFdBQVcsQ0FBQyxFQUFDO0FBQ3ZDLE1BQU1DLElBQUksR0FBR0osZ0VBQWMsQ0FDekJELDJDQUFJLENBQUM7SUFDSE0sT0FBTyxFQUFFO1FBQUMsS0FBSztRQUFFLE1BQU07UUFBRSxTQUFTO0tBQUM7Q0FDcEMsQ0FBQyxDQUNIO0FBQ0QsZUFBZUYsV0FBVyxDQUFDRyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNqQyxNQUFNSCxJQUFJLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBSTtRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNQyxPQUFPLEdBQUcsTUFBTVQsMERBQXVCLEVBQUU7UUFDN0NNLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILE9BQU8sQ0FBQztLQUVoQyxDQUFDLE9BQU9JLEtBQUssRUFBRTtRQUNYTixPQUFPLENBQUNNLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7UUFDdEJQLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFRixLQUFLLENBQUNFLE9BQU8sR0FBQ0YsS0FBSyxDQUFDRSxPQUFPLEdBQUNGLEtBQUs7U0FBQyxDQUFDO0tBQ3JFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlbmV4dC8uL3BhZ2VzL2FwaS91c2Vycy5qcz80OWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZha2UgdXNlcnMgZGF0YVxyXG5pbXBvcnQgQ29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuL19iYXNlXCI7XHJcbmltcG9ydCB7IGFwaUhhbmRsZXIgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvYXBpJztcclxuZXhwb3J0IGRlZmF1bHQgYXBpSGFuZGxlcih1c2VySGFuZGxlcik7XHJcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcclxuICBDb3JzKHtcclxuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnT1BUSU9OUyddLFxyXG4gIH0pXHJcbilcclxuYXN5bmMgZnVuY3Rpb24gdXNlckhhbmRsZXIocmVxLHJlcyl7XHJcbiAgYXdhaXQgY29ycyhyZXEsIHJlcyk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3NcIik7XHJcbiAgICBjb25zdCB0bXB1c2VyID0gYXdhaXQgcHJpc21hLnRtcHVzZXIuZmluZE1hbnkoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odG1wdXNlcilcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogZXJyb3IubWVzc2FnZT9lcnJvci5tZXNzYWdlOmVycm9yfSlcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIkNvcnMiLCJpbml0TWlkZGxld2FyZSIsInByaXNtYSIsImFwaUhhbmRsZXIiLCJ1c2VySGFuZGxlciIsImNvcnMiLCJtZXRob2RzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRtcHVzZXIiLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.js"));
module.exports = __webpack_exports__;

})();