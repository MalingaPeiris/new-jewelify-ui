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
        }, "jwt", response.data.jwt, {
          httpOnly: true,
          secure: process.env.NEXTAUTH_URL !== "development",
          path: "./signin.js"
        });
        res.status(200).end();
      } catch (e) {
        status(400).send(e.response.data.message[0].messages[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nLWluLjVjYzA0ODNkODZkMmNmOGFlNjYzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCTTs7Ozs7Ozs7Ozs7Ozs7Ozt5VUFDSixVQUFDQyxDQUFELEVBQU87QUFDcEJBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURvQixDQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxVQUFJO0FBQ0YsWUFBTUMsUUFBUSxHQUFHTCxpREFBQSxDQUNmLGtEQURlLEVBRWY7QUFDRU8sVUFBQUEsS0FBSyxFQUFFLEVBRFQ7QUFFRUMsVUFBQUEsUUFBUSxFQUFFO0FBRlosU0FGZSxDQUFqQjtBQVFBUCxRQUFBQSxrREFBUyxDQUFDO0FBQUVRLFVBQUFBLEdBQUcsRUFBSEE7QUFBRixTQUFELEVBQVUsS0FBVixFQUFpQkosUUFBUSxDQUFDSyxJQUFULENBQWNDLEdBQS9CLEVBQW9DO0FBQzNDQyxVQUFBQSxRQUFRLEVBQUUsSUFEaUM7QUFFM0NDLFVBQUFBLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQVosS0FBNkIsYUFGTTtBQUkzQ0MsVUFBQUEsSUFBSSxFQUFFO0FBSnFDLFNBQXBDLENBQVQ7QUFPQVIsUUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxPQWpCRCxDQWlCRSxPQUFPaEIsQ0FBUCxFQUFVO0FBQ1ZlLFFBQUFBLE1BQU0sQ0FBQyxHQUFELENBQU4sQ0FBWUUsSUFBWixDQUFpQmpCLENBQUMsQ0FBQ0UsUUFBRixDQUFXSyxJQUFYLENBQWdCVyxPQUFoQixDQUF3QixDQUF4QixFQUEyQkMsUUFBM0IsQ0FBb0MsQ0FBcEMsQ0FBakI7QUFDQUMsUUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVdyQixDQUFYLEVBRlUsQ0FHWjtBQUNEOztBQUFBLE9BdENxQixDQXVDdEI7QUFDQTs7QUFDRSwwQkFDRTtBQUFNLGdCQUFRLEVBQUUsTUFBS3NCLFlBQXJCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhLQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLE9BRFA7QUFFRSxxQkFBUyxFQUFDLGNBRlo7QUFHRSx1QkFBVyxFQUFDLE9BSGQ7QUFJRSxvQkFBUSxFQUFFLGtCQUFDdEIsQ0FBRDtBQUFBLHFCQUFRLE1BQUtJLEtBQUwsR0FBYUosQ0FBQyxDQUFDdUIsTUFBRixDQUFTQyxLQUE5QjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4S0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBRkYsZUFXRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhLQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSxxQkFBUyxFQUFDLGNBRlo7QUFHRSx1QkFBVyxFQUFDLFVBSGQ7QUFJRSxvQkFBUSxFQUFFLGtCQUFDeEIsQ0FBRDtBQUFBLHFCQUFRLE1BQUtLLFFBQUwsR0FBZ0JMLENBQUMsQ0FBQ3VCLE1BQUYsQ0FBU0MsS0FBakM7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEtBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRLQVhGLGVBcUJFO0FBQVEsbUJBQVMsRUFBQywyQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwS0FERjtBQXlCRDs7Ozs7O0VBbkVtQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZy1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL25ldyBsb2dpbiB3aXRoIFJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAvLyAgIGVtYWlsOiBcIlwiLFxyXG4gICAgLy8gICBwYXNzd29yZDogXCJcIixcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvLm5ldGxpZnkvZnVuY3Rpb25zL3NpZ24tdXBcIiwgZGF0YSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gV2l0aCBKV1RcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC8ubmV0bGlmeS9mdW5jdGlvbnMvc2lnbi11cFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0Q29va2llKHsgcmVzIH0sIFwiand0XCIsIHJlc3BvbnNlLmRhdGEuand0LCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuXHJcbiAgICAgICAgcGF0aDogXCIuL3NpZ25pbi5qc1wiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc3RhdHVzKDQwMCkuc2VuZChlLnJlc3BvbnNlLmRhdGEubWVzc2FnZVswXS5tZXNzYWdlc1swXSk7XHJcbiAgICAgIGNvbnNvbC5sb2coZSk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuICAvLyB9O1xyXG4gIC8vIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgzPlNpZ24gVXA8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAodGhpcy5lbWFpbCA9IGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICh0aGlzLnBhc3N3b3JkID0gZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiYXhpb3MiLCJzZXRDb29raWUiLCJSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXMiLCJkYXRhIiwiand0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfVVJMIiwicGF0aCIsInN0YXR1cyIsImVuZCIsInNlbmQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJjb25zb2wiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=