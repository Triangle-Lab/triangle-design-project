function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import DatePicker from "../DatePicker";
import Button, { ButtonType } from "../../Button";
import Space, { Direction, Side } from "../../Space";
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
    startShow = _React$useState2[0],
    setStartShow = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    endShow = _React$useState4[0],
    setEndShow = _React$useState4[1];
  var _React$useState5 = React.useState({
      start: {
        year: currentYear,
        month: currentMonth,
        day: currentDay
      },
      end: {
        year: currentYear,
        month: currentMonth,
        day: currentDay + 2
      }
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedDate = _React$useState6[0],
    setSelectedDate = _React$useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Space, {
    direction: Direction.Horizontal,
    side: Side.Left,
    wrap: false
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "pickerButton",
    btnType: ButtonType.Primary,
    onClick: function onClick() {
      setStartShow(!startShow);
      setEndShow(false);
    }
  }, en ? 'select the start date:' : '开始日期:', selectedDate.start.year, "-", selectedDate.start.month, "-", selectedDate.start.day), startShow && /*#__PURE__*/React.createElement("div", {
    className: "picker"
  }, /*#__PURE__*/React.createElement(DatePicker, {
    en: en,
    disabledDateRange: disabledDateRange ? disabledDateRange : undefined,
    onChange: function onChange(date) {
      if (_onChange) {
        _onChange({
          start: {
            year: date.year,
            month: date.month,
            day: date.day
          },
          end: {
            year: selectedDate.end.year,
            month: selectedDate.end.month,
            day: selectedDate.end.day
          }
        });
        setSelectedDate({
          start: {
            year: date.year,
            month: date.month,
            day: date.day
          },
          end: selectedDate.end
        });
      }
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "pickerButton",
    btnType: ButtonType.Primary,
    onClick: function onClick() {
      setEndShow(!endShow);
      setStartShow(false);
    }
  }, en ? 'select the end date:' : '结束日期:', selectedDate.end.year, "-", selectedDate.end.month, "-", selectedDate.end.day), endShow && /*#__PURE__*/React.createElement("div", {
    className: "picker"
  }, /*#__PURE__*/React.createElement(DatePicker, {
    en: en,
    disabledDateRange: disabledDateRange ? disabledDateRange : undefined,
    onChange: function onChange(date) {
      if (_onChange) {
        _onChange({
          start: {
            year: selectedDate.start.year,
            month: selectedDate.start.month,
            day: selectedDate.start.day
          },
          end: {
            year: date.year,
            month: date.month,
            day: date.day
          }
        });
        setSelectedDate({
          start: selectedDate.start,
          end: {
            year: date.year,
            month: date.month,
            day: date.day
          }
        });
      }
    }
  })))));
};
export default Index;