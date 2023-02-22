function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import classNames from 'classnames';
export var Dragger = function Dragger(props) {
  var onFile = props.onFile,
    children = props.children;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    dragOver = _useState2[0],
    setDragOver = _useState2[1];
  var klass = classNames('triangle-uploader-dragger', {
    'is-dragover': dragOver
  });
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    if (!onFile) return;
    onFile(e.dataTransfer.files);
  };
  var handleDrag = function handleDrag(e, over) {
    e.preventDefault();
    setDragOver(over);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: klass,
    onDragOver: function onDragOver(e) {
      handleDrag(e, true);
    },
    onDragLeave: function onDragLeave(e) {
      handleDrag(e, false);
    },
    onDrop: handleDrop
  }, children);
};
export default Dragger;