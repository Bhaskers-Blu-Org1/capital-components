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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M15.445 10.5c-.693-1.191-1.968-2-3.445-2s-2.752.809-3.445 2h6.89zm-7.419 1a3.113 3.113 0 0 0-.026.4v1.6h8v-1.6c0-.135-.009-.269-.026-.4H8.026zM8 16.1c0 .135.009.269.026.4h7.948c.017-.131.026-.265.026-.4v-1.6H8v1.6zm.555 1.4c.693 1.191 1.968 2 3.445 2s2.752-.809 3.445-2h-6.89zm-2.199-6.356l-1.191 3.359c-.083.192-.2.365-.349.515a1.648 1.648 0 0 1-2.69-.537 1.628 1.628 0 0 1 0-1.262 1.646 1.646 0 0 1 .873-.885l3.357-1.19M8 9.5l-5.364 1.902a2.654 2.654 0 0 0-1.434 3.462 2.637 2.637 0 0 0 1.433 1.434c.323.134.666.202 1.009.202h.01c.343 0 .686-.068 1.009-.202a2.647 2.647 0 0 0 1.433-1.434L8 9.5zm9.644 1.644l3.357 1.191A1.64 1.64 0 0 1 22 13.851a1.641 1.641 0 0 1-.483 1.166 1.652 1.652 0 0 1-1.8.355 1.62 1.62 0 0 1-.533-.356 1.625 1.625 0 0 1-.349-.515l-1.191-3.357M16 9.5l1.902 5.364c.13.314.32.606.574.86s.546.445.859.574c.323.134.666.202 1.009.202h.01a2.648 2.648 0 0 0 2.444-3.664 2.654 2.654 0 0 0-1.434-1.433L16 9.5zm-6.5-4a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  }));
};

var _default = SvgComponent;
exports.default = _default;