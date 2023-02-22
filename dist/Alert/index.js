function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "alertType", "title", "description", "closeable", "onClose", "position"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
export var AlertType;
(function (AlertType) {
  AlertType["Success"] = "success";
  AlertType["Default"] = "default";
  AlertType["Danger"] = "danger";
  AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
var Alert = function Alert(props) {
  var _classNames;
  var className = props.className,
    alertType = props.alertType,
    title = props.title,
    description = props.description,
    closeable = props.closeable,
    onClose = props.onClose,
    position = props.position,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('alert', className, (_classNames = {}, _defineProperty(_classNames, "alert-".concat(alertType), alertType), _defineProperty(_classNames, "alert-".concat(position), position), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alert-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "alert-in"
  }, description != null && /*#__PURE__*/React.createElement("div", {
    className: "alert-description"
  }, description), (closeable !== null && closeable !== void 0 ? closeable : false) && /*#__PURE__*/React.createElement("button", {
    className: "alert-close",
    onClick: onClose
  }, "x")));
};
Alert.defaultProps = {
  alertType: AlertType.Default,
  closeable: false
};
export default Alert;