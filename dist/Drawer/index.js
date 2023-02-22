function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["position", "width", "close", "title", "mask", "maskClosable", "extra", "children", "isShow", "onClose", "headerClass", "titleClass", "extraClass", "bodyClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
import { FiX } from 'react-icons/fi';

// drawer component

export var DrawerPosition;
(function (DrawerPosition) {
  DrawerPosition["Left"] = "left";
  DrawerPosition["Right"] = "right";
})(DrawerPosition || (DrawerPosition = {}));
// Drawer with children
function Drawer(props) {
  var position = props.position,
    width = props.width,
    close = props.close,
    title = props.title,
    mask = props.mask,
    maskClosable = props.maskClosable,
    extra = props.extra,
    children = props.children,
    isShow = props.isShow,
    onClose = props.onClose,
    headerClass = props.headerClass,
    titleClass = props.titleClass,
    extraClass = props.extraClass,
    bodyClass = props.bodyClass,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('drawer', _defineProperty({}, "drawer-".concat(position), position));
  var headerClasses = classNames('drawer-header', headerClass);
  var titleClasses = classNames('drawer-title', titleClass);
  var extraClasses = classNames('drawer-extra', extraClass);
  var bodyClasses = classNames('drawer-body', bodyClass);
  var closeFunction = function closeFunction() {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, (mask !== null && mask !== void 0 ? mask : false) && /*#__PURE__*/React.createElement("div", {
    className: "drawer-mask",
    id: "drawer-mask",
    style: {
      height: '100%',
      width: '100%',
      display: (isShow !== null && isShow !== void 0 ? isShow : false) ? '' : 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    onClick: (maskClosable !== null && maskClosable !== void 0 ? maskClosable : false) ? closeFunction : undefined
  }), /*#__PURE__*/React.createElement("div", _extends({
    id: "drawer",
    style: {
      width: "".concat(width, "px"),
      display: (isShow !== null && isShow !== void 0 ? isShow : false) ? '' : 'none'
    },
    className: classes
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "drawer-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: headerClasses
  }, /*#__PURE__*/React.createElement("div", {
    className: titleClasses
  }, title), /*#__PURE__*/React.createElement("div", {
    className: extraClasses
  }, extra), (close !== null && close !== void 0 ? close : false) && /*#__PURE__*/React.createElement("div", {
    className: "drawer-close",
    onClick: closeFunction
  }, /*#__PURE__*/React.createElement(FiX, null))), /*#__PURE__*/React.createElement("div", {
    className: bodyClasses
  }, children))));
}
Drawer.defaultProps = {
  position: DrawerPosition.Left,
  width: 300,
  close: true,
  mask: true,
  maskClosable: true,
  isShow: true
};
export default Drawer;