function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "avatarType", "size", "src", "alt", "circle", "text"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';

// avatar
export var AvatarSize;
(function (AvatarSize) {
  AvatarSize["Large"] = "lg";
  AvatarSize["Small"] = "sm";
})(AvatarSize || (AvatarSize = {}));
export var AvatarType;
(function (AvatarType) {
  AvatarType["Primary"] = "primary";
  AvatarType["Secondary"] = "secondary";
  AvatarType["Success"] = "success";
  AvatarType["Default"] = "default";
  AvatarType["Danger"] = "danger";
  AvatarType["Warning"] = "warning";
})(AvatarType || (AvatarType = {}));
var Avatar = function Avatar(props) {
  var _classNames;
  var className = props.className,
    avatarType = props.avatarType,
    size = props.size,
    src = props.src,
    alt = props.alt,
    circle = props.circle,
    text = props.text,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('avatar', className, (_classNames = {}, _defineProperty(_classNames, "avatar-".concat(size), size), _defineProperty(_classNames, "avatar-".concat(avatarType), avatarType), _defineProperty(_classNames, 'avatar-circle', circle), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), src != null ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("p", {
    className: "avatar-text"
  }, text));
};
Avatar.defaultProps = {
  avatarType: AvatarType.Default,
  circle: false
};
export default Avatar;