function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import Button, { ButtonType, ButtonSize } from "../Button";
var TimePicker = function TimePicker() {
  var _useState = useState({
      hour: '00',
      minute: '00',
      second: '00'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    currentTime = _useState2[0],
    setCurrentTime = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "timepicker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-header-title"
  }, "\u9009\u62E9\u65F6\u95F4")), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column-title"
  }, "\u65F6")), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column-title"
  }, "\u5206")), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column-title"
  }, "\u79D2"))), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column"
  }, Array.from({
    length: 24
  }, function (v, k) {
    return k;
  }).map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "timepicker-body-column-item",
      onClick: function onClick() {
        if (item < 10) {
          setCurrentTime(_objectSpread(_objectSpread({}, currentTime), {}, {
            hour: '0' + item.toString()
          }));
        } else {
          setCurrentTime(_objectSpread(_objectSpread({}, currentTime), {}, {
            hour: item.toString()
          }));
        }
      }
    }, item < 10 ? '0' + item.toString() : item);
  })), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column"
  }, Array.from({
    length: 60
  }, function (v, k) {
    return k;
  }).map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "timepicker-body-column-item",
      onClick: function onClick() {
        if (item < 10) {
          setCurrentTime(_objectSpread(_objectSpread({}, currentTime), {}, {
            minute: '0' + item.toString()
          }));
        } else {
          setCurrentTime(_objectSpread(_objectSpread({}, currentTime), {}, {
            minute: item.toString()
          }));
        }
      }
    }, item < 10 ? '0' + item.toString() : item);
  })), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-body-column"
  }, Array.from({
    length: 60
  }, function (v, k) {
    return k;
  }).map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "timepicker-body-column-item",
      onClick: function onClick() {
        if (item < 10) {
          setCurrentTime(_objectSpread(_objectSpread({}, currentTime), {}, {
            second: '0' + item.toString()
          }));
        } else {
          setCurrentTime(_objectSpread(_objectSpread({}, currentTime), {}, {
            second: item.toString()
          }));
        }
      }
    }, item < 10 ? '0' + item.toString() : item);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "timepicker-footer"
  }, /*#__PURE__*/React.createElement("div", null, currentTime.hour, ":", currentTime.minute, ":", currentTime.second), /*#__PURE__*/React.createElement(Button, {
    btnType: ButtonType.Default,
    size: ButtonSize.Small
  }, "\u786E\u5B9A")));
};
export default TimePicker;