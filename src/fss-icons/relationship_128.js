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
    d: "M96 36c8.836 0 16-7.164 16-16S104.836 4 96 4s-16 7.164-16 16 7.164 16 16 16zm0-28c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12S89.383 8 96 8zm12 36H84L64 64 44 44H20a8 8 0 0 0-8 8v32l8 8v28c0 2.209 1.789 4 4 4h16c2.211 0 4-1.791 4-4V64l20 20 20-20v56c0 2.209 1.789 4 4 4h16c2.211 0 4-1.791 4-4V92l8-8V52a8 8 0 0 0-8-8zm-76-8c8.836 0 16-7.164 16-16S40.836 4 32 4s-16 7.164-16 16 7.164 16 16 16zm0-28c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12S25.383 8 32 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;