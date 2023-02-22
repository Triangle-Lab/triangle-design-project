function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useRef, useState } from 'react';
import axios from 'axios';
import UploadList from "./uploadList";
import Dragger from "./dragger";
export var Upload = function Upload(props) {
  var action = props.action,
    defaultFileList = props.defaultFileList,
    beforeUpload = props.beforeUpload,
    onProgress = props.onProgress,
    onSuccess = props.onSuccess,
    onError = props.onError,
    onChange = props.onChange,
    onRemove = props.onRemove,
    name = props.name,
    headers = props.headers,
    data = props.data,
    withCredentials = props.withCredentials,
    accept = props.accept,
    multiple = props.multiple,
    children = props.children,
    drag = props.drag;
  var fileInput = useRef(null);
  var _useState = useState(defaultFileList || []),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];
  var updateFileList = function updateFileList(updateFile, updateObj) {
    setFileList(function (prevList) {
      return prevList.map(function (file) {
        if (file.uid === updateFile.uid) {
          return _objectSpread(_objectSpread({}, file), updateObj);
        } else {
          return file;
        }
      });
    });
  };
  var handleClick = function handleClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  var handleFileChange = function handleFileChange(e) {
    var files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };
  var handleRemove = function handleRemove(file) {
    setFileList(function (prevList) {
      return prevList.filter(function (item) {
        return item.uid !== file.uid;
      });
    });
    if (onRemove) {
      onRemove(file);
    }
  };
  var uploadFiles = function uploadFiles(files) {
    var postFiles = Array.from(files);
    postFiles.forEach(function (file) {
      if (!beforeUpload) {
        post(file);
      } else {
        var result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(function (processedFile) {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  var post = function post(file) {
    var _file = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    };
    //setFileList([_file, ...fileList])
    setFileList(function (prevList) {
      return [_file].concat(_toConsumableArray(prevList));
    });
    var formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach(function (key) {
        formData.append(key, data[key]);
      });
    }
    if (action === undefined) {
      console.error('action is undefined');
      return;
    }
    axios.post(action, formData, {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        'Content-Type': 'multipart/form-data'
      }),
      withCredentials: withCredentials,
      onUploadProgress: function onUploadProgress(e) {
        var percentage = Math.round(e.loaded * 100 / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, {
            percent: percentage,
            status: 'uploading'
          });
          if (onProgress) {
            onProgress(percentage, file);
          }
        }
      }
    }).then(function (resp) {
      updateFileList(_file, {
        status: 'success',
        response: resp.data
      });
      if (onSuccess) {
        onSuccess(resp.data, file);
      }
      if (onChange) {
        onChange(file);
      }
    }).catch(function (err) {
      updateFileList(_file, {
        status: 'error',
        error: err
      });
      if (onError) {
        onError(err, file);
      }
      if (onChange) {
        onChange(file);
      }
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "triangle-upload-component"
  }, /*#__PURE__*/React.createElement("div", {
    className: "triangle-upload-input",
    style: {
      display: 'inline-block'
    },
    onClick: handleClick
  }, drag ? /*#__PURE__*/React.createElement(Dragger, {
    onFile: function onFile(files) {
      uploadFiles(files);
    }
  }, children) : children, /*#__PURE__*/React.createElement("input", {
    className: "triangle-file-input",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleFileChange,
    type: "file",
    accept: accept,
    multiple: multiple
  })), /*#__PURE__*/React.createElement(UploadList, {
    fileList: fileList,
    onRemove: handleRemove
  }));
};
Upload.defaultProps = {
  name: 'file'
};
export default Upload;