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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M64 40c-13.254 0-24 10.738-24 24s10.746 24 24 24c13.262 0 24-10.738 24-24S77.262 40 64 40zm0 32c-4.422 0-8-3.58-8-8s3.578-8 8-8 8 3.58 8 8-3.578 8-8 8z"
  }), _react.default.createElement("path", {
    d: "M64 28C37.078 28 16.586 42.5 4 64c12.586 21.5 33.078 36 60 36s47.414-14.5 60-36c-12.586-21.5-33.078-36-60-36zm0 68C41.112 96 21.549 84.659 8.673 64 21.549 43.341 41.112 32 64 32s42.451 11.341 55.327 32C106.451 84.659 86.888 96 64 96z"
  }));
};

var _default = SvgComponent;
exports.default = _default;