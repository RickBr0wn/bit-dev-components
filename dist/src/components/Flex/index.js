"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = function Flex(props) {
  return _react.default.createElement("div", {
    "test-id": "flex-component",
    className: props.className,
    style: {
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || 'auto',
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: props.alignItems || 'stretch',
      margin: props.margin || '0',
      padding: props.padding || '0',
      width: props.width || 'auto',
      height: props.height || 'auto',
      maxWidth: props.maxWidth || 'none'
    }
  }, props.children);
};

Flex.propTypes = {
  container: _propTypes.default.bool,
  justifyContent: _propTypes.default.string,
  flexDirection: _propTypes.default.string,
  flexGrow: _propTypes.default.number,
  flexBasis: _propTypes.default.string,
  flexShrink: _propTypes.default.number,
  flexWrap: _propTypes.default.string,
  flex: _propTypes.default.string,
  alignItems: _propTypes.default.string,
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  maxWidth: _propTypes.default.string,
  children: _propTypes.default.element.isRequired
};
var _default = Flex;
exports.default = _default;

//# sourceMappingURL=index.js.map