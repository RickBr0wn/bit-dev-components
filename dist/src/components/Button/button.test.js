"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("./"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
  it('should render without errors', function () {
    var _render = (0, _react2.render)(_react.default.createElement(_.default, null)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('button-component')).toBeTruthy();
  });
  describe('prop.name', function () {
    it('should render `SUBMIT` when supplied no name', function () {
      var _render2 = (0, _react2.render)(_react.default.createElement(_.default, null)),
          container = _render2.container;

      expect(container.firstChild.textContent).toBe('submit');
    });
    it('should render the correct name when a name is entered', function () {
      var _render3 = (0, _react2.render)(_react.default.createElement(_.default, {
        name: 'TEST'
      })),
          container = _render3.container;

      expect(container.firstChild.textContent).toBe('TEST');
    });
  });
  it('should call any entered onClick function', function () {
    var mockedCallBack = jest.fn();

    var _render4 = (0, _react2.render)(_react.default.createElement(_.default, {
      onClick: mockedCallBack
    })),
        container = _render4.container;

    expect(mockedCallBack.mock.calls.length).toBe(0);

    _react2.fireEvent.click(container.querySelector('button'));

    expect(mockedCallBack.mock.calls.length).toBe(1);

    _react2.fireEvent.click(container.querySelector('button'));

    expect(mockedCallBack.mock.calls.length).toBe(2);
  });
});

//# sourceMappingURL=button.test.js.map