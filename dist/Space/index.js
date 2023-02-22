function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["size", "wrap", "side", "direction", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
export var SpaceingSize;
(function (SpaceingSize) {
  SpaceingSize["Small"] = "small";
  SpaceingSize["Medium"] = "medium";
  SpaceingSize["Large"] = "large";
})(SpaceingSize || (SpaceingSize = {}));
export var Direction;
(function (Direction) {
  Direction["Horizontal"] = "horizontal";
  Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));
export var Side;
(function (Side) {
  Side["Left"] = "left";
  Side["Right"] = "right";
  Side["Center"] = "center";
})(Side || (Side = {}));
var Space = function Space(props) {
  var _classNames, _classNames3;
  var size = props.size,
    wrap = props.wrap,
    side = props.side,
    direction = props.direction,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('Space', (_classNames = {}, _defineProperty(_classNames, "Space-".concat(direction), direction), _defineProperty(_classNames, 'Space-break', direction === Direction.Horizontal && wrap), _defineProperty(_classNames, "Space-vertical-".concat(side), direction === Direction.Vertical && side), _defineProperty(_classNames, "Space-horizontal-".concat(side), direction === Direction.Horizontal && side), _classNames));
  var itemClasses = classNames('Space-item', _defineProperty({}, "Space-".concat(size), size));
  var fitstItemClasses = classNames('Space-item-first', (_classNames3 = {}, _defineProperty(_classNames3, "Space-first-".concat(size), size && direction === Direction.Horizontal), _defineProperty(_classNames3, "Space-".concat(size), size && direction === Direction.Vertical), _classNames3));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), React.Children.map(children, function (child, index) {
    return (
      //第一个不添加margin
      index === 0 ? /*#__PURE__*/React.createElement("div", {
        className: fitstItemClasses
      }, child) : /*#__PURE__*/React.createElement("div", {
        className: itemClasses
      }, child)
    );
  }));
};
Space.defaultProps = {
  size: SpaceingSize.Medium,
  direction: Direction.Horizontal,
  wrap: true,
  side: Side.Left
};
export default Space;