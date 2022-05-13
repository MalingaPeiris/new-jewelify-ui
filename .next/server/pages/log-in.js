"use strict";
(() => {
var exports = {};
exports.id = "pages/log-in";
exports.ids = ["pages/log-in"];
exports.modules = {

/***/ "./pages/log-in.js":
/*!*************************!*\
  !*** ./pages/log-in.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_sdk_clients_kendra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk/clients/kendra */ "aws-sdk/clients/kendra");
/* harmony import */ var aws_sdk_clients_kendra__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_kendra__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\OFFICE WORK\\new\\new-jewelify-ui\\pages\\log-in.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//new login with React





class Register extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", e => {
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
        const response = axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:9000/.netlify/functions/sign-up", {
          email: "",
          password: ""
        });
        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)({
          res
        }, "jwt", response.jwt, {
          httpOnly: true,
          secure: env.NEXTAUTH_UR !== "development",
          path: "./signin.js"
        });
        res.status(200).end();
      } catch (e) {
        // e.status(400).send(e.response.message[0].messages[0]);
        // consol.log("problem");
        console.log("problem");
      }
    });
  }

  // };
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: this.handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "email",
          className: "form-control",
          placeholder: "Email",
          onChange: e => this.email = e.target.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "password",
          className: "form-control",
          placeholder: "Password",
          onChange: e => this.password = e.target.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
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

}

/***/ }),

/***/ "aws-sdk/clients/kendra":
/*!*****************************************!*\
  !*** external "aws-sdk/clients/kendra" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("aws-sdk/clients/kendra");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/log-in.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9nLWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLE1BQU1PLFFBQU4sU0FBdUJOLDRDQUF2QixDQUFpQztBQUFBO0FBQUE7O0FBQUEsMENBQzlCTyxDQUFELElBQU87QUFDcEJBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURvQixDQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxVQUFJO0FBQ0YsY0FBTUMsUUFBUSxHQUFHTixpREFBQSxDQUNmLGtEQURlLEVBRWY7QUFDRVEsVUFBQUEsS0FBSyxFQUFFLEVBRFQ7QUFFRUMsVUFBQUEsUUFBUSxFQUFFO0FBRlosU0FGZSxDQUFqQjtBQVFBUixRQUFBQSxrREFBUyxDQUFDO0FBQUVTLFVBQUFBO0FBQUYsU0FBRCxFQUFVLEtBQVYsRUFBaUJKLFFBQVEsQ0FBQ0ssR0FBMUIsRUFBK0I7QUFDdENDLFVBQUFBLFFBQVEsRUFBRSxJQUQ0QjtBQUV0Q0MsVUFBQUEsTUFBTSxFQUFFQyxHQUFHLENBQUNDLFdBQUosS0FBb0IsYUFGVTtBQUl0Q0MsVUFBQUEsSUFBSSxFQUFFO0FBSmdDLFNBQS9CLENBQVQ7QUFPQU4sUUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxPQWpCRCxDQWlCRSxPQUFPZCxDQUFQLEVBQVU7QUFDVjtBQUNBO0FBQ0FlLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRDtBQUNGLEtBeEM2QztBQUFBOztBQXlDOUM7QUFDQUMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBTSxjQUFRLEVBQUUsS0FBS0MsWUFBckI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxtQkFBUyxFQUFDLGNBRlo7QUFHRSxxQkFBVyxFQUFDLE9BSGQ7QUFJRSxrQkFBUSxFQUFHbEIsQ0FBRCxJQUFRLEtBQUtJLEtBQUwsR0FBYUosQ0FBQyxDQUFDbUIsTUFBRixDQUFTQztBQUoxQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxtQkFBUyxFQUFDLGNBRlo7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxrQkFBUSxFQUFHcEIsQ0FBRCxJQUFRLEtBQUtLLFFBQUwsR0FBZ0JMLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0M7QUFKN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQXFCRTtBQUFRLGlCQUFTLEVBQUMsMkJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBeUJEOztBQXBFNkM7Ozs7Ozs7Ozs7QUNOaEQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pld2VsaWZ5LXVpLy4vcGFnZXMvbG9nLWluLmpzIiwid2VicGFjazovL2pld2VsaWZ5LXVpL2V4dGVybmFsIFwiYXdzLXNkay9jbGllbnRzL2tlbmRyYVwiIiwid2VicGFjazovL2pld2VsaWZ5LXVpL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9qZXdlbGlmeS11aS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9qZXdlbGlmeS11aS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vamV3ZWxpZnktdWkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL25ldyBsb2dpbiB3aXRoIFJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IEp3dFRva2VuVHlwZUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXdzLXNkay9jbGllbnRzL2tlbmRyYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICBlbWFpbDogXCJcIixcclxuICAgIC8vICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9zaWduLXVwXCIsIGRhdGEpXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vIFdpdGggSldUXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvLm5ldGxpZnkvZnVuY3Rpb25zL3NpZ24tdXBcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldENvb2tpZSh7IHJlcyB9LCBcImp3dFwiLCByZXNwb25zZS5qd3QsIHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IGVudi5ORVhUQVVUSF9VUiAhPT0gXCJkZXZlbG9wbWVudFwiLFxyXG5cclxuICAgICAgICBwYXRoOiBcIi4vc2lnbmluLmpzXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBlLnN0YXR1cyg0MDApLnNlbmQoZS5yZXNwb25zZS5tZXNzYWdlWzBdLm1lc3NhZ2VzWzBdKTtcclxuICAgICAgLy8gY29uc29sLmxvZyhcInByb2JsZW1cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvYmxlbVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDM+U2lnbiBVcDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICh0aGlzLmVtYWlsID0gZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHRoaXMucGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGsvY2xpZW50cy9rZW5kcmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwic2V0Q29va2llIiwiSnd0VG9rZW5UeXBlQ29uZmlndXJhdGlvbiIsIlJlZ2lzdGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImp3dCIsImh0dHBPbmx5Iiwic2VjdXJlIiwiZW52IiwiTkVYVEFVVEhfVVIiLCJwYXRoIiwic3RhdHVzIiwiZW5kIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImhhbmRsZVN1Ym1pdCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==