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
exports.id = "pages/api/forget_password";
exports.ids = ["pages/api/forget_password"];
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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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

/***/ "(api)/./pages/api/forget_password.js":
/*!**************************************!*\
  !*** ./pages/api/forget_password.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ forgetPass)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/init-middleware */ \"(api)/./lib/init-middleware.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_base */ \"(api)/./pages/api/_base.js\");\n\n// Fake users data\n\n\n\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cors__WEBPACK_IMPORTED_MODULE_1___default()({\n    methods: [\n        \"GET\",\n        \"POST\",\n        \"OPTIONS\"\n    ]\n}));\nasync function forgetPass(req, res) {\n    await cors(req, res);\n    try {\n        switch(req.method){\n            case \"POST\":\n                return forgetPass1();\n            default:\n                return res.status(500).end(`Method ${req.method} Not Allowed`);\n        }\n        async function forgetPass1() {\n            const { email  } = req.body;\n            if (email == \"\" || email == undefined) return res.status(200).send({\n                status: \"error\",\n                message: \"Email is mandatory\"\n            });\n            try {\n                const user = await _base__WEBPACK_IMPORTED_MODULE_3__.prisma.account__c.findUnique({\n                    where: {\n                        email__c: email\n                    }\n                });\n                if (!user) {\n                    return res.status(200).send({\n                        status: \"error\",\n                        message: \"Invalid Email\"\n                    });\n                } else {\n                    const transport = {\n                        host: \"mail.ivagaminfotech.com\",\n                        port: 465,\n                        secure: false,\n                        auth: {\n                            user: \"vignesh@ivagaminfotech.com\",\n                            pass: \"iRjFTQ)XC&m*\"\n                        }\n                    };\n                    const transporter = nodemailer.createTransport(transport);\n                    const mailData = {\n                        from: \"vignesh@ivagaminfotech.com\",\n                        to: email,\n                        subject: `Message From Ivagam`,\n                        text: \"Text Message\",\n                        html: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Text Message\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ivagam-team\\\\billing-api\\\\pages\\\\api\\\\forget_password.js\",\n                            lineNumber: 48,\n                            columnNumber: 31\n                        }, this)\n                    };\n                    transporter.sendMail(mailData, function(err, info) {\n                        if (err) console.log(\"err\", err);\n                        else console.log(\"info\", info);\n                    });\n                    return res.status(200).send({\n                        status: \"success\",\n                        message: \"Password sent successfully\"\n                    });\n                }\n            } catch (e) {\n                res.status(200).send({\n                    status: \"error\",\n                    message: e.message ? e.message : e\n                });\n                return;\n            } // update otp process\n        }\n    } catch (error) {\n        res.status(200).send({\n            status: \"error\",\n            message: error.message ? error.message : error\n        });\n    } // get mobile number process\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0Y7YUFDSixDQUFDLE9BQU8wQixDQUFDLEVBQUU7Z0JBQ1JsQyxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ssSUFBSSxDQUFDO29CQUFFTCxNQUFNLEVBQUMsT0FBTztvQkFBRU0sT0FBTyxFQUFFMEIsQ0FBQyxDQUFDMUIsT0FBTyxHQUFHMEIsQ0FBQyxDQUFDMUIsT0FBTyxHQUFHMEIsQ0FBQztpQkFBRSxDQUFDLENBQUM7Z0JBQzdFLE9BQU87YUFDVixzQkFBcUI7U0FDekI7S0FDSixDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNabkMsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLElBQUksQ0FBQztZQUFFTCxNQUFNLEVBQUMsT0FBTztZQUFFTSxPQUFPLEVBQUUyQixLQUFLLENBQUMzQixPQUFPLEdBQUcyQixLQUFLLENBQUMzQixPQUFPLEdBQUcyQixLQUFLO1NBQUUsQ0FBQztLQUMzRixDQUFDLDRCQUE0QjtDQUVqQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGVuZXh0Ly4vcGFnZXMvYXBpL2ZvcmdldF9wYXNzd29yZC5qcz9lNDNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZha2UgdXNlcnMgZGF0YVxyXG5pbXBvcnQgQ29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9fYmFzZVwiO1xyXG5jb25zdCBub2RlbWFpbGVyID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7XHJcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcclxuICAgIENvcnMoe1xyXG4gICAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnXSxcclxuICAgIH0pXHJcbilcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZm9yZ2V0UGFzcyhyZXEsIHJlcykge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JnZXRQYXNzKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmb3JnZXRQYXNzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgaWYgKGVtYWlsID09IFwiXCIgfHwgZW1haWwgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgc3RhdHVzOidlcnJvcicsIG1lc3NhZ2U6IFwiRW1haWwgaXMgbWFuZGF0b3J5XCIgfSlcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEuYWNjb3VudF9fYy5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbF9fYzogZW1haWxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHN0YXR1czonZXJyb3InLCAgbWVzc2FnZTogXCJJbnZhbGlkIEVtYWlsXCIgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiAnbWFpbC5pdmFnYW1pbmZvdGVjaC5jb20nLCAvLyBEb27igJl0IGZvcmdldCB0byByZXBsYWNlIHdpdGggdGhlIFNNVFAgaG9zdCBvZiB5b3VyIHByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQ6IDQ2NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogJ3ZpZ25lc2hAaXZhZ2FtaW5mb3RlY2guY29tJywgLy8gaW1wb3J0ZWQgZnJvbSB0aGUgY29uZmlnLmpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzOiAnaVJqRlRRKVhDJm0qJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWlsRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ3ZpZ25lc2hAaXZhZ2FtaW5mb3RlY2guY29tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBgTWVzc2FnZSBGcm9tIEl2YWdhbWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGV4dCBNZXNzYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IDxkaXY+eydUZXh0IE1lc3NhZ2UnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVyciwgaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgc3RhdHVzOidzdWNjZXNzJywgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgc2VudCBzdWNjZXNzZnVsbHlcIn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgc3RhdHVzOidlcnJvcicsIG1lc3NhZ2U6IGUubWVzc2FnZSA/IGUubWVzc2FnZSA6IGUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0vLyB1cGRhdGUgb3RwIHByb2Nlc3NcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgc3RhdHVzOidlcnJvcicsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IgfSlcclxuICAgIH0gLy8gZ2V0IG1vYmlsZSBudW1iZXIgcHJvY2Vzc1xyXG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkNvcnMiLCJpbml0TWlkZGxld2FyZSIsInByaXNtYSIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwiY29ycyIsIm1ldGhvZHMiLCJmb3JnZXRQYXNzIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiZW1haWwiLCJib2R5IiwidW5kZWZpbmVkIiwic2VuZCIsIm1lc3NhZ2UiLCJ1c2VyIiwiYWNjb3VudF9fYyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsX19jIiwidHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwicGFzcyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJkaXYiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/forget_password.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/forget_password.js"));
module.exports = __webpack_exports__;

})();