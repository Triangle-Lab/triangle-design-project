function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { getCurrentMonth, getYears, isDisabledDay } from "../utils";
var DatePicker = function DatePicker(_ref) {
  var onChange = _ref.onChange,
    en = _ref.en,
    disabledDateRange = _ref.disabledDateRange;
  // 获取当前的年月
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth() + 1;
  var currentDay = new Date().getDate();
  var _useState = useState({
      year: currentYear,
      month: currentMonth,
      day: currentDay
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var _useState3 = useState(currentYear),
    _useState4 = _slicedToArray(_useState3, 2),
    currentYearData = _useState4[0],
    setCurrentYearData = _useState4[1];
  var _useState5 = useState(currentMonth),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMonthData = _useState6[0],
    setCurrentMonthData = _useState6[1];
  var _useState7 = useState(getCurrentMonth({
      year: currentYear,
      month: currentMonth
    })),
    _useState8 = _slicedToArray(_useState7, 2),
    currentMonthCalendarData = _useState8[0],
    setCurrentMonthCalendarData = _useState8[1];
  var _useState9 = useState('date'),
    _useState10 = _slicedToArray(_useState9, 2),
    mode = _useState10[0],
    setMode = _useState10[1];
  var _useState11 = useState(getYears(currentYear)),
    _useState12 = _slicedToArray(_useState11, 2),
    years = _useState12[0],
    setYears = _useState12[1];
  var Months = en ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  useEffect(function () {
    if (currentMonthData === 0) {
      setCurrentMonthData(12);
      setCurrentYearData(currentYearData - 1);
    }
    if (currentMonthData === 13) {
      setCurrentMonthData(1);
      setCurrentYearData(currentYearData + 1);
    }
    setCurrentMonthCalendarData(getCurrentMonth({
      year: currentYearData,
      month: currentMonthData
    }));
  }, [currentYearData, currentMonthData]);
  var Header = function Header() {
    return /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setCurrentYearData(currentYearData - 1);
      }
    }, /*#__PURE__*/React.createElement(FiChevronsLeft, null)), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setCurrentMonthData(currentMonthData - 1);
      }
    }, /*#__PURE__*/React.createElement(FiChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-title"
    }, en && /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        setMode('month');
      },
      className: "datepicker-header-title-month"
    }, Months[currentMonthData - 1], ","), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        setMode('year');
      },
      className: "datepicker-header-title-year"
    }, currentYearData), en ? '' : '年', !en && /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        setMode('month');
      },
      className: "datepicker-header-title-month"
    }, Months[currentMonthData - 1])), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setCurrentMonthData(currentMonthData + 1);
      }
    }, /*#__PURE__*/React.createElement(FiChevronRight, null)), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setCurrentYearData(currentYearData + 1);
      }
    }, /*#__PURE__*/React.createElement(FiChevronsRight, null)));
  };
  var YearHeader = function YearHeader() {
    return /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setYears(getYears(years[0] - 10));
      }
    }, /*#__PURE__*/React.createElement(FiChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-title"
    }, /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-title-year"
    }, years[0]), "-", /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-title-year"
    }, years[years.length - 1])), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setYears(getYears(years[0] + 10));
      }
    }, /*#__PURE__*/React.createElement(FiChevronRight, null)));
  };
  var MonthHeader = function MonthHeader() {
    return /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setCurrentYearData(currentYearData - 1);
      }
    }, /*#__PURE__*/React.createElement(FiChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-title"
    }, /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-title-year"
    }, currentYearData)), /*#__PURE__*/React.createElement("div", {
      className: "datepicker-header-arrow",
      onClick: function onClick() {
        setCurrentYearData(currentYearData + 1);
      }
    }, /*#__PURE__*/React.createElement(FiChevronRight, null)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "datepicker"
  }, mode === 'date' && /*#__PURE__*/React.createElement(Header, null), mode === 'year' && /*#__PURE__*/React.createElement(YearHeader, null), mode === 'month' && /*#__PURE__*/React.createElement(MonthHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body"
  }, mode === 'date' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-row datepicker-body-week"
  }, /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Sun' : '日'), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Mon' : '一'), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Tue' : '二'), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Wed' : '三'), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Thu' : '四'), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Fri' : '五'), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-col"
  }, en ? 'Sat' : '六')), /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-row"
  }, currentMonthCalendarData.map(function (item, index) {
    var isDisable = false;
    if (disabledDateRange) {
      isDisable = isDisabledDay({
        year: item.isCurrentMonth ? currentYearData : currentMonthData === 1 || currentMonthData === 12 ? item.date > 20 ? currentYearData + 1 : currentYearData - 1 : currentYearData,
        month: item.isCurrentMonth ? currentMonthData : item.date > 20 ? currentMonthData - 1 : currentMonthData + 1,
        day: item.date
      }, {
        start: disabledDateRange.start,
        end: disabledDateRange.end
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "datepicker-body-col\n                         datepicker-item\n                        ".concat(isDisable ? 'datepicker-item-disabled' : ''),
      style: {
        color: !isDisable && item.isCurrentMonth ? 'black' : 'rgb(201,205,212)',
        backgroundColor: !isDisable && item.isCurrentMonth && selectedDate.day === item.date && selectedDate.year === currentYearData && selectedDate.month === currentMonthData ? '#3794ff' : ''
      },
      key: index,
      onClick: function onClick() {
        if (!isDisable) {
          var tempDay = item.date;
          if (item.isCurrentMonth) {
            setSelectedDate({
              year: currentYearData,
              month: currentMonthData,
              day: item.date
            });
          } else {
            if (item.date > 20) {
              setSelectedDate({
                year: currentYearData,
                month: currentMonthData - 1,
                day: tempDay
              });
              setCurrentMonthData(currentMonthData - 1);
            } else {
              setSelectedDate({
                year: currentYearData,
                month: currentMonthData + 1,
                day: tempDay
              });
              setCurrentMonthData(currentMonthData + 1);
            }
          }
          onChange({
            year: currentYearData,
            month: currentMonthData,
            day: item.date
          });
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: !isDisable && item.isCurrentMonth && selectedDate.day === item.date && selectedDate.year === currentYearData && selectedDate.month === currentMonthData ? 'white' : ''
      }
    }, item.date));
  }))), mode === 'year' && /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-year-row"
  }, years.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "datepicker-year-item",
      key: index,
      onClick: function onClick() {
        setCurrentYearData(item);
        setMode('date');
      }
    }, item);
  })), mode === 'month' && /*#__PURE__*/React.createElement("div", {
    className: "datepicker-body-month-row"
  }, Months.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "datepicker-month-item",
      key: index,
      onClick: function onClick() {
        setCurrentMonthData(index + 1);
        setMode('date');
      }
    }, item);
  }))));
};

// default value
DatePicker.defaultProps = {
  en: false
};
export default DatePicker;