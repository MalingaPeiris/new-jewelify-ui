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
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var aws_sdk_clients_kendra__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aws-sdk/clients/kendra */ "./node_modules/aws-sdk/clients/kendra.js");
/* harmony import */ var aws_sdk_clients_kendra__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_kendra__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\OFFICE WORK\\new\\new-jewelify-ui\\pages\\log-in.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//new login with React






var Register = /*#__PURE__*/function (_Component) {
  (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Register, _Component);

  var _super = _createSuper(Register);

  function Register() {
    var _this;

    (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handleSubmit", function (e) {
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
        var response = axios__WEBPACK_IMPORTED_MODULE_8___default().post("http://localhost:9000/.netlify/functions/sign-up", {
          email: "",
          password: ""
        });
        (0,nookies__WEBPACK_IMPORTED_MODULE_9__.setCookie)({
          res: res
        }, "jwt", response.jwt, {
          httpOnly: true,
          secure: env.NEXTAUTH_UR !== "development",
          path: "./signin.js"
        });
        res.status(200).end();
      } catch (e) {
        // e.status(400).send(e.response.message[0].messages[0]);
        consol.log("problem");
        console.log("problem");
      }
    });

    return _this;
  }

  (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Register, [{
    key: "render",
    value: // };
    function render() {
      var _this2 = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("form", {
        onSubmit: this.handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h3", {
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("label", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("input", {
            type: "email",
            className: "form-control",
            placeholder: "Email",
            onChange: function onChange(e) {
              return _this2.email = e.target.value;
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("label", {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("input", {
            type: "password",
            className: "form-control",
            placeholder: "Password",
            onChange: function onChange(e) {
              return _this2.password = e.target.value;
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: "btn btn-primary btn-block",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }, this);
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjVkOTVmNGM3YmYwNmIyNWM5YjljLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFFcUJPOzs7Ozs7Ozs7Ozs7Ozs7O3lVQUNKLFVBQUNDLENBQUQsRUFBTztBQUNwQkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRG9CLENBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFVBQUk7QUFDRixZQUFNQyxRQUFRLEdBQUdOLGlEQUFBLENBQ2Ysa0RBRGUsRUFFZjtBQUNFUSxVQUFBQSxLQUFLLEVBQUUsRUFEVDtBQUVFQyxVQUFBQSxRQUFRLEVBQUU7QUFGWixTQUZlLENBQWpCO0FBUUFSLFFBQUFBLGtEQUFTLENBQUM7QUFBRVMsVUFBQUEsR0FBRyxFQUFIQTtBQUFGLFNBQUQsRUFBVSxLQUFWLEVBQWlCSixRQUFRLENBQUNLLEdBQTFCLEVBQStCO0FBQ3RDQyxVQUFBQSxRQUFRLEVBQUUsSUFENEI7QUFFdENDLFVBQUFBLE1BQU0sRUFBRUMsR0FBRyxDQUFDQyxXQUFKLEtBQW9CLGFBRlU7QUFJdENDLFVBQUFBLElBQUksRUFBRTtBQUpnQyxTQUEvQixDQUFUO0FBT0FOLFFBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsT0FqQkQsQ0FpQkUsT0FBT2QsQ0FBUCxFQUFVO0FBQ1Y7QUFDQWUsUUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsU0FBWDtBQUNBQyxRQUFBQSxPQUFPLENBQUNELEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7QUFDRjs7Ozs7OztXQUNEO0FBQ0Esc0JBQVM7QUFBQTs7QUFDUCwwQkFDRTtBQUFNLGdCQUFRLEVBQUUsS0FBS0UsWUFBckI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLHFCQUFTLEVBQUMsY0FGWjtBQUdFLHVCQUFXLEVBQUMsT0FIZDtBQUlFLG9CQUFRLEVBQUUsa0JBQUNsQixDQUFEO0FBQUEscUJBQVEsTUFBSSxDQUFDSSxLQUFMLEdBQWFKLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0MsS0FBOUI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBV0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUscUJBQVMsRUFBQyxjQUZaO0FBR0UsdUJBQVcsRUFBQyxVQUhkO0FBSUUsb0JBQVEsRUFBRSxrQkFBQ3BCLENBQUQ7QUFBQSxxQkFBUSxNQUFJLENBQUNLLFFBQUwsR0FBZ0JMLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0MsS0FBakM7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBcUJFO0FBQVEsbUJBQVMsRUFBQywyQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBeUJEOzs7O0VBcEVtQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZy1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL25ldyBsb2dpbiB3aXRoIFJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IEp3dFRva2VuVHlwZUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXdzLXNkay9jbGllbnRzL2tlbmRyYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICBlbWFpbDogXCJcIixcclxuICAgIC8vICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9zaWduLXVwXCIsIGRhdGEpXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vIFdpdGggSldUXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvLm5ldGxpZnkvZnVuY3Rpb25zL3NpZ24tdXBcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldENvb2tpZSh7IHJlcyB9LCBcImp3dFwiLCByZXNwb25zZS5qd3QsIHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IGVudi5ORVhUQVVUSF9VUiAhPT0gXCJkZXZlbG9wbWVudFwiLFxyXG5cclxuICAgICAgICBwYXRoOiBcIi4vc2lnbmluLmpzXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBlLnN0YXR1cyg0MDApLnNlbmQoZS5yZXNwb25zZS5tZXNzYWdlWzBdLm1lc3NhZ2VzWzBdKTtcclxuICAgICAgY29uc29sLmxvZyhcInByb2JsZW1cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvYmxlbVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDM+U2lnbiBVcDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICh0aGlzLmVtYWlsID0gZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHRoaXMucGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsInNldENvb2tpZSIsIkp3dFRva2VuVHlwZUNvbmZpZ3VyYXRpb24iLCJSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXMiLCJqd3QiLCJodHRwT25seSIsInNlY3VyZSIsImVudiIsIk5FWFRBVVRIX1VSIiwicGF0aCIsInN0YXR1cyIsImVuZCIsImNvbnNvbCIsImxvZyIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=