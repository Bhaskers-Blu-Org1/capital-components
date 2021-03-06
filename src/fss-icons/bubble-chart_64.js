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
    d: "M62.044 31.956c0 1.824-1.395 3.219-3.219 3.219s-3.219-1.395-3.219-3.219 1.395-3.219 3.219-3.219 3.219 1.395 3.219 3.219zm-8.584 10.73c-4.185 0-7.511 3.326-7.511 7.511s3.326 7.511 7.511 7.511 7.511-3.326 7.511-7.511-3.326-7.511-7.511-7.511zm-21.567 6.009C31.034 56.206 24.704 62 16.978 62 8.716 62 1.956 55.24 1.956 46.978c0-4.292 1.824-8.155 4.614-10.837-1.502-3.219-2.468-6.867-2.468-10.623 0-12.983 10.623-23.606 23.606-23.606s23.606 10.623 23.606 23.606c0 11.588-8.369 21.245-19.421 23.177zm16.202-23.177c0-11.267-9.121-20.387-20.387-20.387S7.321 14.251 7.321 25.518c0 3.112.751 6.009 1.931 8.584 2.253-1.395 4.936-2.146 7.726-2.146 7.833 0 14.164 5.902 14.915 13.52 9.228-1.932 16.202-10.194 16.202-19.958z"
  }));
};

var _default = SvgComponent;
exports.default = _default;