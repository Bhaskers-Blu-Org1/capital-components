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
    d: "M15.802 4.818c-1.394 0-2.704.38-3.802 1.098a7.27 7.27 0 0 0-3.802-1.098c-3.971 0-7.182 3.211-7.182 7.182s3.211 7.182 7.182 7.182c1.394 0 2.704-.38 3.802-1.098a7.27 7.27 0 0 0 3.802 1.098c3.971 0 7.182-3.211 7.182-7.182s-3.21-7.182-7.182-7.182zM12 7.48c.253.211.507.465.718.718h-1.436A5.73 5.73 0 0 1 12 7.48zm-1.732 6.632h3.422c-.127.296-.253.591-.422.845h-2.619c-.128-.253-.254-.549-.381-.845zm-.254-3.379h3.929c.042.253.084.549.127.845H9.888c.042-.296.084-.592.126-.845zm-.084 1.689h4.182c0 .296-.042.591-.127.845h-3.929a2.736 2.736 0 0 1-.126-.845zm3.802-2.534H10.31c.127-.296.253-.591.422-.845h2.619c.128.253.254.549.381.845zm-5.534 8.027c-3.253 0-5.915-2.662-5.915-5.915s2.662-5.915 5.915-5.915a5.82 5.82 0 0 1 2.704.676C9.507 8.071 8.62 9.93 8.62 12s.887 3.929 2.281 5.239a5.828 5.828 0 0 1-2.703.676zM12 16.52a5.797 5.797 0 0 1-.718-.718h1.436a5.73 5.73 0 0 1-.718.718z"
  }));
};

var _default = SvgComponent;
exports.default = _default;