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
    d: "M16.893 17.882a9.184 9.184 0 0 1-1.135.848c-.412.265-.807.536-1.187.815-.79.539-1.413 1.172-1.87 1.899-.457.729-.691 1.582-.701 2.556h7.983v-1.715h-5.695c.078-.257.222-.5.436-.73.209-.231.458-.451.74-.665.286-.213.594-.425.928-.638.335-.213.669-.437 1.004-.671.333-.235.657-.489.969-.758.309-.27.589-.563.833-.881a4.11 4.11 0 0 0 .586-1.05A3.6 3.6 0 0 0 20 15.614c0-.38-.062-.782-.183-1.202a3.304 3.304 0 0 0-.628-1.169 3.447 3.447 0 0 0-1.16-.89c-.477-.235-1.075-.353-1.787-.353-.656 0-1.234.116-1.729.345a3.678 3.678 0 0 0-1.262.949 3.988 3.988 0 0 0-.775 1.438 6.04 6.04 0 0 0-.26 1.806h1.903c.013-.413.054-.8.125-1.16.074-.358.185-.668.335-.932.149-.264.351-.471.601-.622.25-.149.564-.228.943-.228.412 0 .745.071 1.002.211.256.141.457.315.601.521.144.208.242.431.293.673.049.241.074.468.074.68a2.326 2.326 0 0 1-.352 1.219 4.4 4.4 0 0 1-.848.982z"
  }), _react.default.createElement("path", {
    d: "M1 4v24h30V4H1zm28 22H3V10h26v16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;