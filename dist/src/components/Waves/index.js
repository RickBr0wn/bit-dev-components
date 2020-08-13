"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  & > use {\n    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;\n  }\n  & > use:nth-child(1) {\n    animation-delay: -2s;\n    animation-duration: 7s;\n  }\n  & > use:nth-child(2) {\n    animation-delay: -3s;\n    animation-duration: 10s;\n  }\n  & > use:nth-child(3) {\n    animation-delay: -4s;\n    animation-duration: 13s;\n  }\n  & > use:nth-child(4) {\n    animation-delay: -5s;\n    animation-duration: 20s;\n  }\n\n  @keyframes move-forever {\n    0% {\n      transform: translate3d(-90px, 0, 0);\n    }\n    100% {\n      transform: translate3d(85px, 0, 0);\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  top: 10vh;\n  width: 100vw;\n  height: 25vh;\n  margin-bottom: -7px;\n  /*Fix for safari gap*/\n  min-height: 100px;\n  max-height: 150px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 300;\n  /* letter-spacing: 2px; */\n  font-size: 24px;\n  /* margin-top: 2rem; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  letter-spacing: 2px;\n  font-size: 48px;\n  margin-top: 2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: center;\n  height: 65vh;\n  width: 100vw;\n  background: linear-gradient(\n    60deg,\n    rgba(84, 58, 183, 1) 0%,\n    rgba(0, 172, 193, 1) 100%\n  );\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.header(_templateObject());

var Title = _styledComponents.default.h1(_templateObject2());

var HookLine = _styledComponents.default.p(_templateObject3());

var SVG = _styledComponents.default.svg(_templateObject4());

var Parallax = _styledComponents.default.g(_templateObject5());

var Waves = function Waves() {
  return _react.default.createElement(Header, {
    className: "header"
  }, _react.default.createElement(Title, null, "Wave Component"), _react.default.createElement(HookLine, null, "Easy to use header component"), _react.default.createElement("div", null, _react.default.createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 24 150 28",
    preserveAspectRatio: "none",
    "shape-rendering": "auto"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "gentle-wave",
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  })), _react.default.createElement(Parallax, null, _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "0",
    fill: "rgba(255,255,255,0.7)"
  }), _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "3",
    fill: "rgba(255,255,255,0.5)"
  }), _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "5",
    fill: "rgba(255,255,255,0.3)"
  }), _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "7",
    fill: "#fff"
  })))));
};

var _default = Waves;
exports.default = _default;

//# sourceMappingURL=index.js.map