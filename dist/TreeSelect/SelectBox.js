import classNames from 'classnames';
import React from 'react';
import { MdCheckBoxOutlineBlank, MdOutlineRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';
// import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBox } from 'react-icons/md';
export var iconType;
(function (iconType) {
  iconType["circle"] = "circle";
  iconType["box"] = "box";
})(iconType || (iconType = {}));
function CheckBox(props) {
  var displayIcon = props.displayIcon,
    icon = props.icon,
    isSelected = props.isSelected;
  var checkBoxClass = classNames('checkBox', {
    'checkBox-checked': isSelected,
    'checkBox-unchecked': !isSelected
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, displayIcon && (icon === iconType.circle ? isSelected ? /*#__PURE__*/React.createElement(MdRadioButtonChecked, {
    className: checkBoxClass
  }) : /*#__PURE__*/React.createElement(MdOutlineRadioButtonUnchecked, {
    className: checkBoxClass
  }) : isSelected ? /*#__PURE__*/React.createElement(MdOutlineCheckBox, {
    className: checkBoxClass
  }) : /*#__PURE__*/React.createElement(MdCheckBoxOutlineBlank, {
    className: checkBoxClass
  })));
}
export default CheckBox;