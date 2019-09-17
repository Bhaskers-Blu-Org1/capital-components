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
    d: "M121.465 23.503l-16.98 16.983A11.963 11.963 0 0 1 96 44c-3.07 0-6.142-1.171-8.484-3.515-4.688-4.687-4.688-12.284-.002-16.971l16.98-16.981A31.885 31.885 0 0 0 92 4C74.326 4 60 18.326 60 36c0 3.656.645 7.154 1.773 10.427L8.1 100.101c-5.467 5.468-5.467 14.331.002 19.799 2.733 2.733 6.316 4.1 9.898 4.1s7.165-1.367 9.898-4.101L81.57 66.226C84.844 67.356 88.344 68 92 68c17.674 0 32-14.326 32-32 0-4.435-.904-8.657-2.535-12.497zM92 64c-3.066 0-6.137-.523-9.123-1.555l-2.365-.817-1.77 1.77-53.672 53.673A9.932 9.932 0 0 1 18 120a9.93 9.93 0 0 1-7.07-2.929c-3.899-3.899-3.9-10.243-.002-14.142l53.674-53.674 1.769-1.769-.815-2.365C64.524 42.132 64 39.062 64 36 64 20.56 76.561 8 92 8c1.672 0 3.32.144 4.938.433L84.686 20.687c-6.238 6.239-6.237 16.39.002 22.627C87.709 46.336 91.727 48 96 48s8.291-1.664 11.312-4.687l12.254-12.255c.29 1.62.434 3.27.434 4.942 0 15.439-12.56 28-28 28z"
  }), _react.default.createElement("circle", {
    cx: 18,
    cy: 110,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;