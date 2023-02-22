function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["disabled", "size", "icon", "prepend", "append", "style"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import classNames from 'classnames';
import React from 'react';
import Icon from "../Icon";
export var Input = function Input(props) {
  var _classNames;
  // 取出所有的属性
  var disabled = props.disabled,
    size = props.size,
    icon = props.icon,
    prepend = props.prepend,
    append = props.append,
    style = props.style,
    restProps = _objectWithoutProperties(props, _excluded);
  // 根据属性计算不同的className
  var cnames = classNames('input-wrapper', (_classNames = {}, _defineProperty(_classNames, "input-size-".concat(size), size), _defineProperty(_classNames, 'input-group', prepend !== null && prepend !== void 0 ? prepend : append), _defineProperty(_classNames, 'input-group-pend', !!append || !!prepend), _classNames));
  var innerClass = classNames('input-inner', {
    'is-alive': !disabled,
    'is-disabled': disabled
  });
  var fixControlledValue = function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  };
  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cnames,
    style: style,
    "data-testid": "input-wrapper"
  }, prepend && /*#__PURE__*/React.createElement("div", {
    className: "input-group-prepend"
  }, prepend), /*#__PURE__*/React.createElement("input", _extends({
    className: innerClass,
    disabled: disabled
  }, restProps, {
    style: {
      borderTopLeftRadius: prepend ? 0 : "",
      borderBottomLeftRadius: prepend ? 0 : "",
      borderTopRightRadius: append ? 0 : "",
      borderBottomRightRadius: append ? 0 : "",
      zIndex: 1
    }
  })), icon && !(prepend || append) ? /*#__PURE__*/React.createElement("div", {
    className: "icon-wrapper"
  }, /*#__PURE__*/React.createElement(Icon, {
    style: {
      cursor: "pointer"
    },
    icon: icon,
    title: 'title'
  })) : null, append && /*#__PURE__*/React.createElement("div", {
    className: "input-group-append"
  }, append));
};
Input.defaultProps = {
  disabled: false,
  size: 'default'
};
export default Input;