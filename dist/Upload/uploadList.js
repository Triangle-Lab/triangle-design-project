import React from 'react';
import Icon from "../Icon";
import Progress from "../Progress";
export var UploadList = function UploadList(props) {
  var fileList = props.fileList,
    onRemove = props.onRemove;
  return /*#__PURE__*/React.createElement("ul", {
    className: "triangle-upload-list"
  }, fileList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      className: "triangle-upload-list-item",
      key: item.uid
    }, /*#__PURE__*/React.createElement("span", {
      className: "file-name file-name-".concat(item.status)
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "file-alt",
      theme: "secondary"
    }), item.name), /*#__PURE__*/React.createElement("span", {
      className: "file-status"
    }, (item.status === 'uploading' || item.status === 'ready') && /*#__PURE__*/React.createElement(Icon, {
      icon: "spinner",
      spin: true,
      theme: "primary"
    }), item.status === 'success' && /*#__PURE__*/React.createElement(Icon, {
      icon: "check-circle",
      theme: "success"
    }), item.status === 'error' && /*#__PURE__*/React.createElement(Icon, {
      icon: "times-circle",
      theme: "danger"
    })), /*#__PURE__*/React.createElement("span", {
      className: "file-actions"
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "times",
      onClick: function onClick() {
        onRemove(item);
      }
    })), item.status === 'uploading' && /*#__PURE__*/React.createElement(Progress, {
      percent: item.percent || 0
    }));
  }));
};
export default UploadList;