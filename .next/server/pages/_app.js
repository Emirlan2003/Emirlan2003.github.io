"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 62254:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 9933:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _async_to_generator = (__webpack_require__(93510)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(62254)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(18038));
var _utils = __webpack_require__(73355);
function appGetInitialProps(_) {
    return _appGetInitialProps.apply(this, arguments);
}
function _appGetInitialProps() {
    _appGetInitialProps = /**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ _async_to_generator(function*({ Component , ctx  }) {
        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
        return {
            pageProps
        };
    });
    return _appGetInitialProps.apply(this, arguments);
}
var _Component;
class App extends (_Component = _react.default.Component) {
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));
    }
}
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports["default"] = App;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map


/***/ }),

/***/ 73355:
/***/ ((module) => {

module.exports = require("../../../../../node_modules/next/dist/shared/lib/utils.js");

/***/ }),

/***/ 18038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [510], () => (__webpack_exec__(9933)));
module.exports = __webpack_exports__;

})();