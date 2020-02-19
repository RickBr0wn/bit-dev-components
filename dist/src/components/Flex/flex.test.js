"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("./"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Flex />', function () {
  it('should render without errors', function () {
    var _render = (0, _react2.render)(_react.default.createElement(_.default, null, _react.default.createElement("h1", null, "TEST"))),
        getByTestId = _render.getByTestId,
        getByText = _render.getByText,
        container = _render.container;

    expect(getByTestId('flex-component')).toBeTruthy();
  });
});

//# sourceMappingURL=flex.test.js.map