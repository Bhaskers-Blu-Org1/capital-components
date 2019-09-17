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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M6.129 3.956V2.357H0V13.55h15.989V3.956h-9.86zm9.061 8.794H.799V5.555h14.39v7.195zM3.731 11.418h-.8v-4.53h.799v4.53zm5.596 0h-.799v-4.53h.799v4.53zm-3.198 0c.879 0 1.599-.56 1.599-2.292 0-1.706-.746-2.265-1.599-2.265S4.53 7.42 4.53 9.126c0 1.759.72 2.292 1.599 2.292zm0-3.811c.72 0 .72 1.066.72 1.519 0 .48 0 1.572-.72 1.572S5.41 9.632 5.41 9.126c0-.453 0-1.519.719-1.519zm5.596 3.811c.879 0 1.599-.56 1.599-2.292 0-1.706-.746-2.238-1.599-2.238s-1.599.56-1.599 2.238c.001 1.732.747 2.292 1.599 2.292zm0-3.811c.72 0 .72 1.066.72 1.519 0 .48 0 1.546-.72 1.546s-.72-1.066-.72-1.546c.028-.453.001-1.519.72-1.519z"
  }));
};

var _default = SvgComponent;
exports.default = _default;