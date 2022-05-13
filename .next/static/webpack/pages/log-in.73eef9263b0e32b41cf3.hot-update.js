"use strict";
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./pages/log-in.js":
/*!*************************!*\
  !*** ./pages/log-in.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");






var _jsxFileName = "D:\\OFFICE WORK\\new\\new-jewelify-ui\\pages\\log-in.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//new login with React





var Register = /*#__PURE__*/function (_Component) {
  (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Register, _Component);

  var _super = _createSuper(Register);

  function Register() {
    var _this;

    (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handleSubmit", function (e) {
      e.preventDefault(); // const data = {
      //   email: "",
      //   password: "",
      // };
      // axios
      //   .post("http://localhost:9000/.netlify/functions/sign-up", data)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // With JWT

      try {
        var response = axios__WEBPACK_IMPORTED_MODULE_7___default().post("http://localhost:9000/.netlify/functions/sign-up", {
          email: "",
          password: ""
        });
        (0,nookies__WEBPACK_IMPORTED_MODULE_8__.setCookie)({
          res: res
        }, "jwt", response.jwt, {
          httpOnly: true,
          secure: process.env.NEXTAUTH_URL !== "development",
          path: "./signin.js"
        });
        res.status(200).end();
      } catch (e) {
        status(400).send(e.response.message[0].messages[0]);
        consol.log(e); // }
      }

      ; // };
      // render() {

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
        onSubmit: _this.handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            type: "email",
            className: "form-control",
            placeholder: "Email",
            onChange: function onChange(e) {
              return _this.email = e.target.value;
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            type: "password",
            className: "form-control",
            placeholder: "Password",
            onChange: function onChange(e) {
              return _this.password = e.target.value;
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          className: "btn btn-primary btn-block",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
    });

    return _this;
  }

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjczZWVmOTI2M2IwZTMyYjQxY2YzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCTTs7Ozs7Ozs7Ozs7Ozs7Ozt5VUFDSixVQUFDQyxDQUFELEVBQU87QUFDcEJBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURvQixDQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxVQUFJO0FBQ0YsWUFBTUMsUUFBUSxHQUFHTCxpREFBQSxDQUNmLGtEQURlLEVBRWY7QUFDRU8sVUFBQUEsS0FBSyxFQUFFLEVBRFQ7QUFFRUMsVUFBQUEsUUFBUSxFQUFFO0FBRlosU0FGZSxDQUFqQjtBQVFBUCxRQUFBQSxrREFBUyxDQUFDO0FBQUVRLFVBQUFBLEdBQUcsRUFBSEE7QUFBRixTQUFELEVBQVUsS0FBVixFQUFpQkosUUFBUSxDQUFDSyxHQUExQixFQUErQjtBQUN0Q0MsVUFBQUEsUUFBUSxFQUFFLElBRDRCO0FBRXRDQyxVQUFBQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFaLEtBQTZCLGFBRkM7QUFJdENDLFVBQUFBLElBQUksRUFBRTtBQUpnQyxTQUEvQixDQUFUO0FBT0FQLFFBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsT0FqQkQsQ0FpQkUsT0FBT2YsQ0FBUCxFQUFVO0FBQ1ZjLFFBQUFBLE1BQU0sQ0FBQyxHQUFELENBQU4sQ0FBWUUsSUFBWixDQUFpQmhCLENBQUMsQ0FBQ0UsUUFBRixDQUFXZSxPQUFYLENBQW1CLENBQW5CLEVBQXNCQyxRQUF0QixDQUErQixDQUEvQixDQUFqQjtBQUNBQyxRQUFBQSxNQUFNLENBQUNDLEdBQVAsQ0FBV3BCLENBQVgsRUFGVSxDQUdaO0FBQ0Q7O0FBQUEsT0F0Q3FCLENBdUN0QjtBQUNBOztBQUNFLDBCQUNFO0FBQU0sZ0JBQVEsRUFBRSxNQUFLcUIsWUFBckI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0S0FERixlQUVFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEtBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLHFCQUFTLEVBQUMsY0FGWjtBQUdFLHVCQUFXLEVBQUMsT0FIZDtBQUlFLG9CQUFRLEVBQUUsa0JBQUNyQixDQUFEO0FBQUEscUJBQVEsTUFBS0ksS0FBTCxHQUFhSixDQUFDLENBQUNzQixNQUFGLENBQVNDLEtBQTlCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhLQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0S0FGRixlQVdFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEtBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHFCQUFTLEVBQUMsY0FGWjtBQUdFLHVCQUFXLEVBQUMsVUFIZDtBQUlFLG9CQUFRLEVBQUUsa0JBQUN2QixDQUFEO0FBQUEscUJBQVEsTUFBS0ssUUFBTCxHQUFnQkwsQ0FBQyxDQUFDc0IsTUFBRixDQUFTQyxLQUFqQztBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4S0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBWEYsZUFxQkU7QUFBUSxtQkFBUyxFQUFDLDJCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0S0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBLQURGO0FBeUJEOzs7Ozs7RUFuRW1DN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9nLWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vbmV3IGxvZ2luIHdpdGggUmVhY3RcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IHtcclxuICAgIC8vICAgZW1haWw6IFwiXCIsXHJcbiAgICAvLyAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBheGlvc1xyXG4gICAgLy8gICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC8ubmV0bGlmeS9mdW5jdGlvbnMvc2lnbi11cFwiLCBkYXRhKVxyXG4gICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyBXaXRoIEpXVFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9zaWduLXVwXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRDb29raWUoeyByZXMgfSwgXCJqd3RcIiwgcmVzcG9uc2Uuand0LCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuXHJcbiAgICAgICAgcGF0aDogXCIuL3NpZ25pbi5qc1wiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc3RhdHVzKDQwMCkuc2VuZChlLnJlc3BvbnNlLm1lc3NhZ2VbMF0ubWVzc2FnZXNbMF0pO1xyXG4gICAgICBjb25zb2wubG9nKGUpO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbiAgLy8gfTtcclxuICAvLyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMz5TaWduIFVwPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHRoaXMuZW1haWwgPSBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAodGhpcy5wYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwic2V0Q29va2llIiwiUmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwiand0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfVVJMIiwicGF0aCIsInN0YXR1cyIsImVuZCIsInNlbmQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJjb25zb2wiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=