var _excluded = ["data", "isSingle", "checkable", "checkboxType", "onSelect", "onExpand", "expandable", "inputWidth", "inputHeight", "displaySelect", "placeholder", "dropDownPosition", "needInput"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import CheckBox, { iconType } from "./SelectBox";
import TreeSelectInput from "./treeSelectInput";
export var selectType;
(function (selectType) {
  selectType["circle"] = "circle";
  selectType["box"] = "box";
})(selectType || (selectType = {}));
function TreeSelect(props) {
  var _useState = useState(new Set()),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1]; //An array with uniqueness
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    displayTree = _useState6[0],
    setDisplayTree = _useState6[1];
  var _useState7 = useState( /*#__PURE__*/React.createRef()),
    _useState8 = _slicedToArray(_useState7, 2),
    inputRef = _useState8[0],
    setInputRef = _useState8[1];
  var _useState9 = useState( /*#__PURE__*/React.createRef()),
    _useState10 = _slicedToArray(_useState9, 2),
    dropDownRef = _useState10[0],
    setDropDownRef = _useState10[1];
  var data = props.data,
    isSingle = props.isSingle,
    checkable = props.checkable,
    checkboxType = props.checkboxType,
    onSelect = props.onSelect,
    onExpand = props.onExpand,
    expandable = props.expandable,
    inputWidth = props.inputWidth,
    inputHeight = props.inputHeight,
    displaySelect = props.displaySelect,
    placeholder = props.placeholder,
    dropDownPosition = props.dropDownPosition,
    needInput = props.needInput,
    restProps = _objectWithoutProperties(props, _excluded);
  var icon = checkboxType === selectType.circle ? iconType.circle : iconType.box;
  var inputblock = [];
  var treeClass = classNames('treeContainer', {
    'treeContainer-default': needInput,
    'treeContainer-hide': !displayTree && needInput,
    'treeContainer-noInput': !needInput
  });
  var containerClass = classNames('container', {});

  //Get the position of the drop-down box
  var getTopPos = function getTopPos() {
    if (inputRef.current && dropDownRef.current) {
      var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
        height = _inputRef$current$get.height;
      if (dropDownPosition === 'bottom') return "".concat(height + 5, "px");
      return '-2px';
    }
  };
  var getLeftPos = function getLeftPos() {
    if (inputRef.current && dropDownRef.current) {
      var _inputRef$current$get2 = inputRef.current.getBoundingClientRect(),
        width = _inputRef$current$get2.width;
      if (dropDownPosition === 'leftBottom') {
        return "".concat(-width, "px");
      }
      if (dropDownPosition === 'rightBottom') {
        return "".concat(width, "px");
      }
      return '0px';
    }
  };
  var topPos = getTopPos();
  var leftPos = getLeftPos();

  //initialize the selected and expanded nodes
  useEffect(function () {
    var initialSelected = [];
    var initialExpanded = new Set();
    if (displaySelect !== undefined) {
      setDisplayTree(displaySelect);
    }
    var traverse = function traverse(node) {
      if (node.defaultSelected) {
        initialSelected.push(node);
      }
      if (node.unfold && node.children) {
        initialExpanded.add(node.value);
      }
      if (node.children) {
        node.children.forEach(function (child) {
          traverse(child);
        });
      }
    };
    data.forEach(function (node) {
      traverse(node);
    });
    setSelected(initialSelected);
    setExpanded(initialExpanded);
  }, []);

  //Expand or collapse the node
  var handleExpand = function handleExpand(node) {
    var newExpanded = new Set(expanded);
    if (newExpanded.has(node.value)) {
      newExpanded.delete(node.value);
    } else {
      newExpanded.add(node.value);
    }
    setExpanded(newExpanded);
  };

  //Select or cancel the node
  var handleSelect = function handleSelect(node) {
    if (isSingle) {
      setSelected([node]);
    } else {
      var newSelected = _toConsumableArray(selected);
      var index = newSelected.indexOf(node);
      if (index >= 0) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(node);
      }
      setSelected(newSelected);
    }
  };

  //Display the selected node
  var deliverNode = function deliverNode() {
    inputblock.splice(0, inputblock.length);
    selected.forEach(function (item) {
      inputblock.push({
        value: item.value,
        label: item.label
      });
    });
  };

  //Callback function when selected
  useEffect(function () {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  //Callback function when expanded
  useEffect(function () {
    if (onExpand) {
      onExpand(expanded);
    }
  }, [expanded]);

  //Render the tree
  var renderTree = function renderTree(node) {
    var nodeClass = classNames('tree-node', {});
    var checkBoxClass = classNames('tree-node-checkbox', {});
    var labelClass = classNames('tree-node-label', {
      'tree-node-label-selected': selected.includes(node)
    });
    deliverNode(); //Display the selected node

    return /*#__PURE__*/React.createElement("div", {
      key: "tree-node-".concat(node.value),
      className: nodeClass
    }, /*#__PURE__*/React.createElement("div", {
      className: "tree-node-header",
      onClick: function onClick() {
        return handleExpand(node);
      }
    }, expandable ? node.children && node.children.length > 0 ? expanded.has(node.value) ? /*#__PURE__*/React.createElement(IoMdArrowDropdown, null) : /*#__PURE__*/React.createElement(IoMdArrowDropright, null) : /*#__PURE__*/React.createElement(IoMdArrowDropdown, {
      className: "space"
    }) : null, checkable ? /*#__PURE__*/React.createElement("div", {
      className: checkBoxClass,
      onClick: function onClick(e) {
        e.stopPropagation();
        handleSelect(node);
      },
      "data-testid": "checkBoxContainer" + node.label
    }, /*#__PURE__*/React.createElement(CheckBox, {
      displayIcon: checkable,
      icon: icon,
      isSelected: selected.includes(node)
    })) : null, /*#__PURE__*/React.createElement("div", {
      className: labelClass,
      "data-testid": "labelContainer" + node.label,
      onClick: function onClick(e) {
        e.stopPropagation(); //Block the propagation of events to avoid affecting other nodes
        if (node.children && node.children.length > 0) handleExpand(node);
      }
    }, node.label)), node.children && node.children.length > 0 ? /*#__PURE__*/React.createElement("div", {
      "data-testid": "children" + node.label,
      className: classNames('tree-node-children', {
        'tree-node-expanded': expanded.has(node.value)
      })
    }, node.children.map(function (child) {
      return renderTree(child);
    })) : null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    "data-testid": "treeSelect"
  }, needInput ? /*#__PURE__*/React.createElement(TreeSelectInput, {
    data: inputblock,
    width: inputWidth,
    height: inputHeight,
    defaultShow: displayTree,
    inputRef: inputRef,
    placeholder: placeholder,
    deleteItem: function deleteItem(value) {
      var newSelected = _toConsumableArray(selected);
      var index = newSelected.findIndex(function (item) {
        return item.value === value;
      });
      if (index >= 0) {
        newSelected.splice(index, 1);
      }
      setSelected(newSelected);
    },
    showTree: function showTree(_showTree) {
      setDisplayTree(_showTree);
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: treeClass,
    ref: dropDownRef,
    style: {
      width: inputWidth,
      top: topPos,
      left: leftPos
    }
  }, data.map(function (node) {
    return renderTree(node);
  })));
}
TreeSelect.defaultProps = {
  isSingle: true,
  checkable: true,
  expandable: true,
  unfold: false,
  inputWidth: '400px',
  inputHeight: '30px',
  displaySelect: false,
  checkboxType: selectType.box,
  dropDownPosition: 'bottom',
  needInput: true
};
export default TreeSelect;