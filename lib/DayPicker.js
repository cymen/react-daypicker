"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DayPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    var _this;

    _classCallCheck(this, DayPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayPicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "previousMonth", function () {
      var month = _this.month.subtract(1, 'month');

      _this.setState({
        month: month,
        keyPrefix: month.format('YYYY.MM')
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextMonth", function () {
      var month = _this.month.add(1, 'month');

      _this.setState({
        month: month,
        keyPrefix: month.format('YYYY.MM')
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDayClick", function (event) {
      var dayOfMonth = event.nativeEvent.target.innerText;

      var day = _this.month.date(dayOfMonth);

      _this.props.onDayClick(day);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDay", function (day, index) {
      var keyPrefix = _this.state.keyPrefix;
      var active = _this.props.active;
      var today = (0, _moment.default)();
      var currentMonth = _this.month;
      var isToday = day && currentMonth.year() == today.year() && currentMonth.month() == today.month() && day == today.date();
      var isActive = day && active && currentMonth.year() == active.year() && currentMonth.month() == active.month() && day == active.date();
      return _react.default.createElement("td", {
        className: (0, _classnames.default)('day', {
          active: isActive,
          empty: !day,
          today: isToday
        }),
        key: "".concat(keyPrefix, ".day.").concat(index),
        onClick: _this.onDayClick
      }, day || '');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderWeek", function (days, index) {
      var keyPrefix = _this.state.keyPrefix;
      return _react.default.createElement("tr", {
        key: "".concat(keyPrefix, ".week.").concat(index)
      }, days.map(_this.renderDay));
    });

    var date = (0, _moment.default)();
    _this.state = {
      month: date,
      keyPrefix: date.format('YYYY.MM')
    };
    return _this;
  }

  _createClass(DayPicker, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "react-daypicker-root"
      }, _react.default.createElement("div", {
        className: "header"
      }, _react.default.createElement("div", {
        className: "previous-month",
        onClick: this.previousMonth
      }, "\u25C0"), _react.default.createElement("div", {
        className: "month-year"
      }, this.month.format('MMMM YYYY')), _react.default.createElement("div", {
        className: "next-month",
        onClick: this.nextMonth
      }, "\u25B6")), _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Sunday"
      }, "Sun")), _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Monday"
      }, "Mon")), _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Tuesday"
      }, "Tue")), _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Wednesday"
      }, "Wed")), _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Thursday"
      }, "Thu")), _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Friday"
      }, "Fri")), _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: "Saturday"
      }, "Sat")))), _react.default.createElement("tbody", null, this.weeks.map(this.renderWeek))));
    }
  }, {
    key: "days",
    get: function get() {
      var days = [];
      var daysInMonth = this.month.daysInMonth();
      var offset = this.month.date(0).day() + 1;

      if (offset < 7) {
        for (var i = 0; i < offset; i++) {
          days.push(null);
        }
      }

      for (var _i = 1; _i <= daysInMonth; _i++) {
        days.push(_i);
      }

      return days;
    }
  }, {
    key: "weeks",
    get: function get() {
      var days = this.days;
      var weeks = [];
      var weekCount = Math.ceil(days.length / 7);

      for (var i = 0; i < weekCount; i++) {
        weeks.push(days.slice(i * 7, (i + 1) * 7));
      }

      return weeks;
    }
  }, {
    key: "month",
    get: function get() {
      return this.state.month.clone();
    }
  }]);

  return DayPicker;
}(_react.Component);

exports.default = DayPicker;

_defineProperty(DayPicker, "propTypes", {
  active: _reactMomentProptypes.default.momentObj,
  onDayClick: _propTypes.default.func.isRequired
});