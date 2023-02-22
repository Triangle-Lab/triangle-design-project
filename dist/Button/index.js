function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["btnType", "className", "disabled", "size", "children", "href"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* eslint-disable quote-props */
import React from 'react';
import classNames from 'classnames';
export var ButtonSize;
(function (ButtonSize) {
  ButtonSize["Large"] = "lg";
  ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
export var ButtonType;
(function (ButtonType) {
  ButtonType["Primary"] = "primary";
  ButtonType["Secondary"] = "secondary";
  ButtonType["Success"] = "success";
  ButtonType["Default"] = "default";
  ButtonType["Danger"] = "danger";
  ButtonType["Link"] = "link";
  ButtonType["Outline"] = "outline";
})(ButtonType || (ButtonType = {}));
var Button = function Button(props) {
  var _classNames;
  var btnType = props.btnType,
    className = props.className,
    disabled = props.disabled,
    size = props.size,
    children = props.children,
    href = props.href,
    restProps = _objectWithoutProperties(props, _excluded);
  // btn btn-lg btn-primary
  var classes = classNames('btn', className, (_classNames = {}, _defineProperty(_classNames, "btn-".concat(btnType), btnType), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, 'disabled', btnType === ButtonType.Link && disabled), _classNames));
  if (btnType === ButtonType.Link && href != null) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: "".concat(classes) // `btn btn-${btnType} btn-${size} ${props.className}
      ,
      href: href
    }, restProps), children);
  } else {
    return /*#__PURE__*/React.createElement("button", _extends({
      className: "".concat(classes),
      disabled: disabled
    }, restProps), children);
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
};
export default Button;