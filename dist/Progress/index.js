import React from 'react';
var Progress = function Progress(props) {
  var percent = props.percent,
    strokeHeight = props.strokeHeight,
    showText = props.showText,
    theme = props.theme;
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "progress",
    className: "triangle-progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "triangle-progress-bar-outer",
    style: {
      height: "".concat(strokeHeight, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "triangle-bar-inner color-".concat(theme),
    style: {
      width: "".concat(percent, "%")
    }
  }, showText ? /*#__PURE__*/React.createElement("span", {
    className: "inner-text"
  }, "".concat(percent, "%")) : null)));
};
Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
};
export default Progress;