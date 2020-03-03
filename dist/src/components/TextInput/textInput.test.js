"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("./"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TextInput />', function () {
  it('should render without errors', function () {
    var _render = (0, _react2.render)(_react.default.createElement(_.default, null)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('text-input-component'));
  });
});

//# sourceMappingURL=textInput.test.js.map