var _excluded = ["fetchSuggestions", "onSelect", "value", "renderOption", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect, useRef } from 'react';
import { Input } from "../Input";
import Icon from "../Icon";
import useDebounce from "../hooks/useDebounce";
import classNames from 'classnames';
import useClickOutside from "../hooks/useClickOutside";
export var AutoComplete = function AutoComplete(props) {
  var fetchSuggestions = props.fetchSuggestions,
    onSelect = props.onSelect,
    value = props.value,
    renderOption = props.renderOption,
    size = props.size,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    suggestions = _useState4[0],
    setSugestions = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = useState(-1),
    _useState8 = _slicedToArray(_useState7, 2),
    highlightIndex = _useState8[0],
    setHighlightIndex = _useState8[1];
  var triggerSearch = useRef(false);
  var componentRef = useRef(null);
  var debouncedValue = useDebounce(inputValue, 500);
  var width = size === 'lg' ? '300px' : '200px';
  useClickOutside(componentRef, function () {
    setSugestions([]);
  });
  useEffect(function () {
    if (Boolean(debouncedValue) && Boolean(triggerSearch)) {
      var results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        console.log('triggered');
        setLoading(true);
        results.then(function (data) {
          setLoading(false);
          setSugestions(data);
        });
      } else {
        setSugestions(results);
      }
    } else {
      setSugestions([]);
    }
    setHighlightIndex(-1);
  }, [debouncedValue]);
  var highlight = function highlight(index) {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  var handleKeyDown = function handleKeyDown(e) {
    switch (e.keyCode) {
      case 13:
        // enter
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        // 上
        highlight(highlightIndex - 1);
        break;
      case 40:
        // 下
        highlight(highlightIndex + 1);
        break;
      case 27:
        // esc
        setSugestions([]);
        break;
      default:
        break;
    }
  };
  var handleChange = function handleChange(e) {
    var value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  var handleSelect = function handleSelect(item) {
    setInputValue(item.value);
    setSugestions([]);
    if (onSelect != null) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };
  var renderTemplate = function renderTemplate(item) {
    return renderOption != null ? renderOption(item) : item.value;
  };
  var generateDropdown = function generateDropdown() {
    return /*#__PURE__*/React.createElement("ul", {
      className: "ulclass",
      style: {
        width: width
      }
    }, suggestions.map(function (item, index) {
      var cnames = classNames('suggestion-item', {
        'item-highlighted': index === highlightIndex
      });
      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: cnames,
        onClick: function onClick() {
          handleSelect(item);
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, renderTemplate(item)));
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "triangle-auto-compete",
    ref: componentRef
  }, /*#__PURE__*/React.createElement(Input, _extends({
    value: inputValue,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    size: size
  }, restProps)), loading && /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Icon, {
    icon: "spinner",
    spin: true
  })), suggestions.length > 0 && generateDropdown());
};
AutoComplete.defaultProps = {
  size: 'sm'
};
export default AutoComplete;