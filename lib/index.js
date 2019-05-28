"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Store = _interopRequireDefault(require("./Store"));

var _queryString = _interopRequireDefault(require("query-string"));

var _utils = require("./utils");

var RouterMute =
/*#__PURE__*/
function () {
  function RouterMute(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        path = _ref.path,
        params = _ref.params;

    // super({});
    this.path = path;
    this.params = params || [];
    this.Store = new _Store["default"]({});
  }

  var _proto = RouterMute.prototype;

  _proto.init = function init() {
    if (_utils.isBrowser) {
      // get current params when new RouterMute created
      var searchUrl = _queryString["default"].parse(window.location.search);

      this.Store.setData(this.filterParams(searchUrl));
    }
  };

  _proto.navigate = function navigate(navigateParams) {
    this.Store.setData(this.filterParams(navigateParams));
  };

  _proto.subscribe = function subscribe(cb) {
    this.Store.subscribe(cb);
  };

  _proto.filterParams = function filterParams(rawParams) {
    var _this = this;

    if (rawParams === void 0) {
      rawParams = {};
    }

    if (Array.isArray(this.params)) {
      var result = {};
      Object.keys(rawParams).filter(function (key) {
        return _this.params.includes(key);
      }).forEach(function (key) {
        result[key] = rawParams[key];
      });
      return result;
    } else {
      return {};
    }
  };

  return RouterMute;
}();

module.exports = RouterMute;