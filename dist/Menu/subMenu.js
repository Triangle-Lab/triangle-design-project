function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from '.';
import Transition from "../Transition";
import Icon from "../Icon";
var SubMenu = function SubMenu(_ref) {
  var index = _ref.index,
    title = _ref.title,
    children = _ref.children,
    className = _ref.className;
  var context = useContext(MenuContext);
  var openedSubMenus = context.defaultOpenSubMenus;
  var isOpend = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;
  var _useState = useState(isOpend),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setOpen = _useState2[1];
  var classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  });
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  var timer;
  var handleMouse = function handleMouse(e, toggle) {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(function () {
      setOpen(toggle);
    }, 300);
  };
  var clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {};
  var hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: function onMouseEnter(e) {
      handleMouse(e, true);
    },
    onMouseLeave: function onMouseLeave(e) {
      handleMouse(e, false);
    }
  } : {};
  var renderChildren = function renderChildren() {
    var subMenuClasses = classNames('triangle-submenu', {
      'menu-opened': menuOpen,
      'triangle-submenu-vertical': context.mode === 'vertical',
      'submenu-item-horizontal': context.mode !== 'vertical'
    });
    var childrenComponent = React.Children.map(children, function (child, i) {
      var childElement = child;
      if (childElement.type.displayName === 'MenuItem') {
        return /*#__PURE__*/React.cloneElement(childElement, {
          index: "".concat(index, "-").concat(i)
        });
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component");
      }
    });
    return /*#__PURE__*/React.createElement(Transition, {
      in: menuOpen,
      timeout: 300,
      animation: "zoom-in-top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
      className: subMenuClasses
    }, childrenComponent)));
  };
  return /*#__PURE__*/React.createElement("li", _extends({
    key: index,
    className: classes
  }, hoverEvents), /*#__PURE__*/React.createElement("div", _extends({
    className: "submenu-title"
  }, clickEvents), title, /*#__PURE__*/React.createElement(Icon, {
    icon: "angle-down",
    className: "arrow-icon"
  })), renderChildren());
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;