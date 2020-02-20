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
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  border: ", ";\n  background-color: ", ";\n  color: ", ";\n  height: ", ";\n  width: ", ";\n  text-transform: ", ";\n  box-shadow: ", ";\n  transition: all 0.2s;\n\n  :focus {\n    outline: none;\n  }\n\n  :active {\n    box-shadow: 0px 0px 0px transparent;\n    transform: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject(), function (props) {
  return props.fontSize || '1em';
}, function (props) {
  return props.margin || '1em';
}, function (props) {
  return props.padding || '0.25em 1em';
}, function (props) {
  return props.borderRadius || '3px';
}, function (props) {
  return props.border || 'none';
}, function (props) {
  return props.backgroundColor || '#4286f4';
}, function (props) {
  return props.textColor || '#fff';
}, function (props) {
  return props.height || '50px';
}, function (props) {
  return props.width || '100px';
}, function (props) {
  return props.lowercase || 'uppercase';
}, function (props) {
  return props.boxShadow ? '3px 3px 5px #999' : null;
}, function (props) {
  return props.boxShadow ? 'translateY(2px)' : null;
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
  boxShadow: _propTypes.default.string
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map