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
    d: "M6 6v52h52V6H6zm2 2h48v40H8V8z"
  }), _react.default.createElement("path", {
    d: "M38 34L24 20 14 30v12h36v-8l-6-6z"
  }), _react.default.createElement("circle", {
    cx: 46,
    cy: 18,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;