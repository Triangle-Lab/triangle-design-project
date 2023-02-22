function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import DatePicker from "./DatePicker";
import Button, { ButtonType } from "../Button";
var Index = function Index(_ref) {
  var _onChange = _ref.onChange,
    en = _ref.en,
    disabledDateRange = _ref.disabledDateRange;
  // 获取今天的年月日
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth() + 1;
  var currentDay = new Date().getDate();
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _React$useState3 = React.useState({
      year: currentYear,
      month: currentMonth,
      day: currentDay
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedDate = _React$useState4[0],
    setSelectedDate = _React$useState4[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "pickerButton",
    btnType: ButtonType.Primary,
    onClick: function onClick() {
      setShow(!show);
    }
  }, en ? 'select date:' : '选择日期:', selectedDate.year, "-", selectedDate.month, "-", selectedDate.day), show && /*#__PURE__*/React.createElement("div", {
    className: "picker"
  }, /*#__PURE__*/React.createElement(DatePicker, {
    en: en,
    disabledDateRange: disabledDateRange ? disabledDateRange : undefined,
    onChange: function onChange(date) {
      if (_onChange) {
        _onChange({
          year: date.year,
          month: date.month,
          day: date.day
        });
        setSelectedDate({
          year: date.year,
          month: date.month,
          day: date.day
        });
      }
    }
  })));
};
export default Index;