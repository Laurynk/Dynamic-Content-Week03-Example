"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_education_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/education.json */ \"./data/education.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card */ \"./components/Card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    console.log(_data_education_json__WEBPACK_IMPORTED_MODULE_3__);\n    const [information, setInformation] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        ..._data_education_json__WEBPACK_IMPORTED_MODULE_3__\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    information && information.map((info, index)=>{\n                        if (info.department.toLowerCase() === \"business\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                degree: info.degree,\n                                colour: \"#99C2A2;\",\n                                font: \"50px\"\n                            }, index, false, {\n                                fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this);\n                        }\n                    }),\n                    information && information.map((info, index)=>{\n                        if (info.department.toLowerCase() === \"computing\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                degree: info.degree,\n                                colour: \"blue\",\n                                font: \"50px\"\n                            }, index, false, {\n                                fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lauryn/Desktop/Dynamic Content Design/Dynamic-Content-Week03-Example/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"axublSqsaFVApoANZsutMY3Ki9o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBUU1BO0FBUnNCO0FBQ0U7QUFFZTtBQUNKO0FBQ1Y7QUFDSztBQUlyQixTQUFTTyxPQUFPOztJQUczQkMsUUFBUUMsR0FBRyxDQUFDTCxpREFBSUE7SUFDaEIsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO1dBQUlELGlEQUFJQTtLQUFDO0lBRTFELHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ1c7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVdqQixxRUFBVzs7b0JBRXhCTyxlQUFlQSxZQUFZVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTt3QkFDOUMsSUFBSUQsS0FBS0UsVUFBVSxDQUFDQyxXQUFXLE9BQU8sWUFBWTs0QkFDbEQscUJBQ0UsOERBQUNuQix3REFBSUE7Z0NBQWFvQixRQUFRSixLQUFLSSxNQUFNO2dDQUFFQyxRQUFPO2dDQUFXQyxNQUFLOytCQUFuREw7Ozs7O3dCQUVmLENBQUM7b0JBQ0Q7b0JBSUFiLGVBQWVBLFlBQVlXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO3dCQUM5QyxJQUFJRCxLQUFLRSxVQUFVLENBQUNDLFdBQVcsT0FBTyxhQUFhOzRCQUNuRCxxQkFDRSw4REFBQ25CLHdEQUFJQTtnQ0FBYW9CLFFBQVFKLEtBQUtJLE1BQU07Z0NBQUVDLFFBQU87Z0NBQU9DLE1BQUs7K0JBQS9DTDs7Ozs7d0JBRWYsQ0FBQztvQkFDRDs7Ozs7Ozs7O0FBTVYsQ0FBQztHQXRDdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9lZHVjYXRpb24uanNvbidcbmltcG9ydCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IFtpbmZvcm1hdGlvbiwgc2V0SW5mb3JtYXRpb25dID0gdXNlU3RhdGUoWy4uLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge1xuICAgICAgICAgIGluZm9ybWF0aW9uICYmIGluZm9ybWF0aW9uLm1hcCgoaW5mbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmZvLmRlcGFydG1lbnQudG9Mb3dlckNhc2UoKSA9PT0gXCJidXNpbmVzc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IGRlZ3JlZT17aW5mby5kZWdyZWV9IGNvbG91cj1cIiM5OUMyQTI7XCIgZm9udD1cIjUwcHhcIiAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbntcbiAgICAgICAgICBpbmZvcm1hdGlvbiAmJiBpbmZvcm1hdGlvbi5tYXAoKGluZm8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5mby5kZXBhcnRtZW50LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcHV0aW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gZGVncmVlPXtpbmZvLmRlZ3JlZX0gY29sb3VyPVwiYmx1ZVwiIGZvbnQ9XCI1MHB4XCIgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICBcbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiZGF0YSIsInVzZVN0YXRlIiwiQ2FyZCIsIkhvbWUiLCJjb25zb2xlIiwibG9nIiwiaW5mb3JtYXRpb24iLCJzZXRJbmZvcm1hdGlvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5mbyIsImluZGV4IiwiZGVwYXJ0bWVudCIsInRvTG93ZXJDYXNlIiwiZGVncmVlIiwiY29sb3VyIiwiZm9udCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});