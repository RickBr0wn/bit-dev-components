"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useInterval = require("@rickbrown/use-interval");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 45px;\n  margin: 10px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIcon = _styledComponents.default.i(_templateObject());

var StyledData = _styledComponents.default.div(_templateObject2());

function Counter(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      amount = _ref.amount,
      secondaryColor = _ref.secondaryColor,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 200 : _ref$speed;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var updater = function updater() {
    data < amount ? setData(function (prev) {
      return prev + Math.floor(amount / speed);
    }) : setData(amount);
  }; // https://overreacted.io/making-setinterval-declarative-with-react-hooks/


  (0, _useInterval.useInterval)(updater, 10);

  if (!icon) {
    throw new Error('There has been an error!\nAn icon string is required: (eg: `fab fa-youtube-square fa-4x`)');
  }

  if (!title) {
    throw new Error('There has been an error!\nA title string is required.');
  }

  if (!amount) {
    throw new Error('There has been an error!\nAn amount number is required.');
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledIcon, {
    style: {
      color: secondaryColor
    },
    className: icon + ' fa-4x'
  }), _react.default.createElement(StyledData, null, data), _react.default.createElement("h3", null, title));
}

Counter.propTypes = {
  icon: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  amount: _propTypes.default.number.isRequired,
  speed: _propTypes.default.number
};
var _default = Counter;
exports.default = _default;

//# sourceMappingURL=counter.js.map