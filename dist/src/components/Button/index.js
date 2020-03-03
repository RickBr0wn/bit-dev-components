"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-right: ", ";\n  margin-left: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  border: ", ";\n  background-color: ", ";\n  color: ", ";\n  height: ", ";\n  width: ", ";\n  text-transform: ", ";\n  box-shadow: ", ";\n  transition: all 0.2s;\n\n  :focus {\n    outline: none;\n  }\n\n  :active {\n    box-shadow: 0px 0px 0px transparent;\n    transform: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject(), function (_ref) {
  var fontSize = _ref.fontSize;
  return fontSize || '15px';
}, function (_ref2) {
  var margin = _ref2.margin;
  return margin || '0px';
}, function (_ref3) {
  var marginTop = _ref3.marginTop;
  return marginTop || '0px';
}, function (_ref4) {
  var marginBottom = _ref4.marginBottom;
  return marginBottom || '0px';
}, function (_ref5) {
  var marginRight = _ref5.marginRight;
  return marginRight || '0px';
}, function (_ref6) {
  var marginLeft = _ref6.marginLeft;
  return marginLeft || '0px';
}, function (_ref7) {
  var padding = _ref7.padding;
  return padding || '0px';
}, function (_ref8) {
  var borderRadius = _ref8.borderRadius;
  return borderRadius || '3px';
}, function (_ref9) {
  var border = _ref9.border;
  return border || 'none';
}, function (_ref10) {
  var backgroundColor = _ref10.backgroundColor;
  return backgroundColor || '#4286f4';
}, function (_ref11) {
  var textColor = _ref11.textColor;
  return textColor || '#fff';
}, function (_ref12) {
  var height = _ref12.height;
  return height || '40px';
}, function (_ref13) {
  var width = _ref13.width;
  return width || '100px';
}, function (_ref14) {
  var lowercase = _ref14.lowercase;
  return lowercase || 'uppercase';
}, function (_ref15) {
  var boxShadow = _ref15.boxShadow;
  return boxShadow ? '0 10px 20px rgba(0, 0, 0, 0.2)' : null;
}, function (_ref16) {
  var boxShadow = _ref16.boxShadow;
  return boxShadow ? 'translateY(1px)' : null;
});

var Button = function Button(props) {
  return _react.default.createElement(StyledButton, _extends({
    "data-testid": "button-component"
  }, props), props.name || 'submit');
};

Button.propTypes = {
  name: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  height: _propTypes.default.string,
  width: _propTypes.default.string,
  borderRadius: _propTypes.default.string,
  border: _propTypes.default.string,
  onClick: _propTypes.default.func,
  padding: _propTypes.default.string,
  boxShadow: _propTypes.default.bool,
  margin: _propTypes.default.string,
  marginBottom: _propTypes.default.string,
  marginLeft: _propTypes.default.string,
  marginRight: _propTypes.default.string,
  marginTop: _propTypes.default.string
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map