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
    d: "M124 60h-8.169C113.887 34.478 93.524 14.113 68 12.168V4h-8v8.168C34.476 14.113 14.113 34.478 12.168 60H4v8h8.168C14.113 93.522 34.476 113.887 60 115.831V124h8v-8.169c25.524-1.944 45.887-22.309 47.831-47.831H124v-8zm-16.19 0H95.742C93.935 45.531 82.471 34.064 68 32.258V20.19c21.075 1.909 37.901 18.735 39.81 39.81zm-16.1 8C89.95 80.244 80.244 89.95 68 91.71V76h-8v15.71C47.756 89.95 38.05 80.244 36.29 68H52v-8H36.29C38.05 47.756 47.756 38.05 60 36.29V52h8V36.29C80.244 38.05 89.95 47.756 91.71 60H76v8h15.71zM60 20.19v12.068C45.529 34.064 34.064 45.531 32.258 60H20.19C22.099 38.925 38.925 22.099 60 20.19zM20.19 68h12.068C34.064 82.469 45.529 93.936 60 95.742v12.068C38.925 105.901 22.099 89.075 20.19 68zM68 107.81V95.742C82.471 93.936 93.935 82.469 95.742 68h12.068c-1.909 21.075-18.735 37.901-39.81 39.81z"
  }));
};

var _default = SvgComponent;
exports.default = _default;