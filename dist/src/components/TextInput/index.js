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
  var data = _taggedTemplateLiteral(["\n  font-size: 15px;\n  margin: 5px;\n  font-family: inherit;\n  color: inherit;\n  padding: 12px 18px;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border: none;\n  border-bottom: 3px solid transparent;\n  height: 40px;\n  width: ", ";\n  display: border-box;\n  transition: all 0.3s;\n  &:focus {\n    outline: none;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    border-bottom: 3px solid #4286f4;\n    border-color: ", ";\n    &::-webkit-input-placeholder {\n      opacity: 0.3;\n    }\n  }\n  &::-webkit-input-placeholder {\n    color: #999;\n  }\n  &:focus:invalid {\n    border-bottom: 3px solid #ff7730;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextInput = _styledComponents.default.input(_templateObject(), function (props) {
  return props.inputWidth || '300px';
}, function (props) {
  return props.inputColor || '#4286f4';
});

var TextInput = function TextInput(props) {
  var type = props.type,
      placeholder = props.placeholder,
      text = props.text,
      setText = props.setText;
  return _react.default.createElement("div", null, _react.default.createElement(StyledTextInput, _extends({
    "data-testid": "text-input-component",
    className: "form__input",
    type: type || 'text',
    placeholder: placeholder || 'text_field',
    onChange: function onChange(e) {
      return setText ? setText(e.target.value) : null;
    },
    text: text ? text : null
  }, props)));
};

TextInput.propTypes = {
  inputColor: _propTypes.default.string,
  inputWidth: _propTypes.default.string,
  type: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  text: _propTypes.default.func,
  setText: _propTypes.default.func
};
var _default = TextInput;
exports.default = _default;

//# sourceMappingURL=index.js.map