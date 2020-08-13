"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _counter = _interopRequireDefault(require("./counter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 6vh;\n  font-size: 48px;\n\n  @media (max-width: 700px) {\n    font-size: 32px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  padding: 40px 20px;\n  border-top: 3px ", "\n    solid;\n  border-bottom: 3px ", "\n    solid;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  gap: 30px;\n  grid-template-columns: repeat(", ", 1fr);\n  text-align: center;\n  max-width: 1100px;\n  margin: 0 auto;\n  overflow: auto;\n\n  @media (max-width: 700px) {\n    & {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    & > div:nth-of-type(1),\n    & > div:nth-of-type(2) {\n      border-bottom: 1px\n        ", " solid;\n      padding-bottom: 20px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var columns = _ref.columns;
  return columns;
}, function (_ref2) {
  var secondaryColor = _ref2.secondaryColor;
  return secondaryColor || 'lightskyblue';
});

var StyledCounter = _styledComponents.default.section(_templateObject2(), function (_ref3) {
  var primaryColor = _ref3.primaryColor;
  return primaryColor || '#0f479a';
}, function (_ref4) {
  var secondaryColor = _ref4.secondaryColor;
  return secondaryColor || 'lightskyblue';
}, function (_ref5) {
  var secondaryColor = _ref5.secondaryColor;
  return secondaryColor || 'lightskyblue';
}, function (_ref6) {
  var secondaryColor = _ref6.secondaryColor;
  return secondaryColor || 'lightskyblue';
});

var StyledTitle = _styledComponents.default.h1(_templateObject3());

function AnimatedCounter(_ref7) {
  var topics = _ref7.topics,
      title = _ref7.title,
      primaryColor = _ref7.primaryColor,
      secondaryColor = _ref7.secondaryColor;

  if (topics.length > 4) {
    console.warn('This animated counter is best viewed with 1-4 topics.\nIf more are required, please duplicate the component and use 2 rows.');
  }

  return _react.default.createElement(StyledCounter, {
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  }, title && _react.default.createElement(StyledTitle, null, title), _react.default.createElement(StyledContainer, {
    columns: topics.length,
    secondaryColor: secondaryColor
  }, topics.map(function (_ref8) {
    var icon = _ref8.icon,
        title = _ref8.title,
        amount = _ref8.amount;
    return _react.default.createElement("div", {
      key: icon + Math.random()
    }, _react.default.createElement(_counter.default, {
      icon: icon,
      title: title,
      amount: amount,
      secondaryColor: secondaryColor
    }));
  })));
}

AnimatedCounter.propTypes = {
  topics: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    amount: _propTypes.default.number.isRequired
  })),
  primaryColor: _propTypes.default.string,
  secondaryColor: _propTypes.default.string,
  title: _propTypes.default.string
};
var _default = AnimatedCounter;
exports.default = _default;

//# sourceMappingURL=index.js.map