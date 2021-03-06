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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M31 16c0 .911-.696 1.607-1.607 1.607s-1.607-.696-1.607-1.607.696-1.607 1.607-1.607S31 15.089 31 16zm-4.286 5.357c-2.089 0-3.75 1.661-3.75 3.75s1.661 3.75 3.75 3.75 3.75-1.661 3.75-3.75-1.66-3.75-3.75-3.75zm-10.768 3A7.485 7.485 0 0 1 8.5 31C4.375 31 1 27.625 1 23.5c0-2.143.911-4.071 2.304-5.411-.75-1.607-1.232-3.429-1.232-5.304C2.071 6.304 7.375 1 13.857 1s11.786 5.304 11.786 11.786a11.744 11.744 0 0 1-9.697 11.571zm8.09-11.571c0-5.625-4.554-10.179-10.179-10.179S3.679 7.161 3.679 12.786c0 1.554.375 3 .964 4.286A7.325 7.325 0 0 1 8.5 16a7.457 7.457 0 0 1 7.446 6.75c4.608-.964 8.09-5.089 8.09-9.964z"
  }));
};

var _default = SvgComponent;
exports.default = _default;