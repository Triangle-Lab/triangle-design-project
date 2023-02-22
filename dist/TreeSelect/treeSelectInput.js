var _excluded = ["data", "itemColor", "width", "height", "deleteItem", "showTree", "defaultShow", "inputRef", "placeholder"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import classNames from 'classnames';
import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
function TreeSelectInput(props) {
  var data = props.data,
    itemColor = props.itemColor,
    width = props.width,
    height = props.height,
    deleteItem = props.deleteItem,
    showTree = props.showTree,
    defaultShow = props.defaultShow,
    inputRef = props.inputRef,
    placeholder = props.placeholder,
    restProps = _objectWithoutProperties(props, _excluded);
  var show = defaultShow;
  var inputClass = classNames('inputClass', {
    'inputClass-active': show === true
  });
  var randerInput = function randerInput(data) {
    return data.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        className: "inputblock",
        key: "".concat(item.value)
      }, /*#__PURE__*/React.createElement("div", {
        className: "blocklabal"
      }, item.label), /*#__PURE__*/React.createElement(RxCross1, {
        className: "cross",
        onClick: function onClick() {
          deleteItem && deleteItem(item.value);
        }
      }));
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: inputRef,
    className: inputClass,
    style: {
      width: width,
      height: height
    }
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "itemsClass"
  }, randerInput(data), data.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "inputPlaceholder",
    "data-testid": "Select an item"
  }, placeholder)), /*#__PURE__*/React.createElement(AiOutlineDown, {
    className: "cross",
    onClick: function onClick() {
      show = !show;
      showTree && showTree(show);
    }
  }));
}
TreeSelectInput.defaultProps = {
  itemColor: 'blue',
  width: '200px',
  height: '30px',
  placeholder: '请选择'
};
export default TreeSelectInput;