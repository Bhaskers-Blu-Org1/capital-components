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
    d: "M16.006 60c-3.753 0-7.278-1.506-9.926-4.241-5.422-5.601-5.423-14.716 0-20.319L31.24 9.451C34.643 5.936 39.173 4 43.995 4c4.822 0 9.352 1.936 12.755 5.452 6.982 7.214 6.983 18.951.001 26.164L36.258 56.783l-2.874-2.782 20.493-21.168c5.497-5.679 5.497-14.92-.001-20.6C51.233 9.503 47.724 8 43.995 8s-7.238 1.503-9.881 4.234L8.954 38.222c-3.937 4.069-3.937 10.688 0 14.755 1.888 1.95 4.392 3.024 7.052 3.023 2.66 0 5.163-1.074 7.05-3.023l18.817-19.438c2.377-2.455 2.377-6.451-.001-8.906-1.131-1.169-2.63-1.812-4.222-1.812-1.591 0-3.09.644-4.222 1.812L19.281 39.246l-2.874-2.782 14.148-14.613c1.892-1.954 4.412-3.03 7.096-3.03s5.204 1.076 7.096 3.03c3.863 3.99 3.863 10.481.001 14.471L25.93 55.76C23.283 58.494 19.759 60 16.006 60z"
  }));
};

var _default = SvgComponent;
exports.default = _default;