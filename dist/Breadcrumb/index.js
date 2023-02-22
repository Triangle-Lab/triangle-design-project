var _excluded = ["objects", "target"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
var Breadcrumb = function Breadcrumb(props) {
  var objects = props.objects,
    target = props.target,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('breadcrumb');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), /*#__PURE__*/React.createElement("ul", {
    className: "breadcrumb-ul"
  }, objects === null || objects === void 0 ? void 0 : objects.map(function (obj, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "breadcrumb-li"
    }, /*#__PURE__*/React.createElement("a", {
      href: obj.link,
      target: target
    }, obj.text)), index !== objects.length - 1 && /*#__PURE__*/React.createElement("li", {
      className: "breadcrumb-li"
    }, "/"));
  })));
};
Breadcrumb.defaultProps = {
  target: '_self'
};
export default Breadcrumb;