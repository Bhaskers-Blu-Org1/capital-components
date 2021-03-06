"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComponent = function SvgComponent(props) {
  return _react.default.createElement("svg", _extends({
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M25.036 16.988v-6.005H2.018v42.033h60.048V16.988h-37.03zm34.027 33.026H5.02V22.993h54.043v27.021zM16.029 45.01h-3.002V27.997h3.002V45.01zm21.017 0h-3.002V27.997h3.002V45.01zm-12.01 0c3.303 0 6.005-2.102 6.005-8.607 0-6.405-2.802-8.507-6.005-8.507s-6.005 2.102-6.005 8.507c0 6.606 2.703 8.607 6.005 8.607zm0-14.311c2.702 0 2.702 4.003 2.702 5.705 0 1.801 0 5.905-2.702 5.905s-2.702-4.003-2.702-5.905c0-1.702 0-5.705 2.702-5.705zM46.053 45.01c3.303 0 6.005-2.102 6.005-8.607 0-6.405-2.802-8.407-6.005-8.407s-6.005 2.102-6.005 8.407c0 6.506 2.802 8.607 6.005 8.607zm0-14.311c2.702 0 2.702 4.003 2.702 5.705 0 1.801 0 5.805-2.702 5.805s-2.702-4.003-2.702-5.805c.1-1.702 0-5.705 2.702-5.705z"
  }));
};

var _default = SvgComponent;
exports.default = _default;