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
    d: "M16 2C8.269 2 2 8.269 2 16s6.269 14 14 14 14-6.269 14-14S23.731 2 16 2zm7 14a7.019 7.019 0 0 1-7 7 7.022 7.022 0 0 1-7-7 7.025 7.025 0 0 1 7-7 7.022 7.022 0 0 1 7 7zm-3.714-7.286C18.282 8.259 17.172 8 16 8s-2.282.259-3.286.714L9.766 5.766A11.906 11.906 0 0 1 16 4c2.285 0 4.414.653 6.234 1.766l-2.948 2.948zM8.714 19.286l-2.948 2.948C4.653 20.415 4 18.285 4 16s.653-4.415 1.766-6.234l2.948 2.948C8.26 13.718 8 14.828 8 16s.26 2.282.714 3.286zm4 4c1.004.455 2.114.714 3.286.714s2.282-.259 3.286-.714l2.948 2.948A11.906 11.906 0 0 1 16 28c-2.285 0-4.414-.653-6.234-1.766l2.948-2.948zm10.572-10.572l2.948-2.948C27.347 11.585 28 13.715 28 16s-.653 4.415-1.766 6.234l-2.948-2.948C23.74 18.282 24 17.172 24 16s-.26-2.282-.714-3.286z"
  }));
};

var _default = SvgComponent;
exports.default = _default;