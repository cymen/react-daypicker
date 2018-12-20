"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var DayPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    var _this;

    _classCallCheck(this, DayPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayPicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "previousMonth", function () {
      var _this$state = _this.state,
          month = _this$state.month,
          year = _this$state.year;

      _this.setState({
        month: month !== 0 ? month - 1 : 11,
        year: month !== 0 ? year : year - 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextMonth", function () {
      var _this$state2 = _this.state,
          month = _this$state2.month,
          year = _this$state2.year;

      _this.setState({
        month: month !== 11 ? month + 1 : 0,
        year: month !== 11 ? year : year + 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDayClick", function (day) {
      return function () {
        if (day) {
          _this.props.onDayClick(day);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDay", function (day, index) {
      var _this$state3 = _this.state,
          date = _this$state3.date,
          month = _this$state3.month,
          today = _this$state3.today,
          year = _this$state3.year;
      var active = _this.props.active;
      var isToday = day && day.valueOf() === today.valueOf();
      var isActive = active && day && DayPicker.isSameDay(active, day);
      return _react.default.createElement("td", {
        className: ["day", isActive ? "active" : null, !day ? "empty" : null, isToday ? "today" : null].filter(function (v) {
          return v;
        }).join(" "),
        key: "".concat(year, ".").concat(month, ".day.").concat(index),
        onClick: _this.onDayClick(day)
      }, day ? day.getDate() : "");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderWeek", function (days, index) {
      var _this$state4 = _this.state,
          month = _this$state4.month,
          year = _this$state4.year;
      return _react.default.createElement("tr", {
        key: "".concat(year, ".").concat(month, ".week.").concat(index)
      }, days.map(_this.renderDay));
    });

    var now = new Date();
    _this.state = {
      date: now.getDate(),
      month: now.getMonth(),
      today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      year: now.getFullYear()
    };
    return _this;
  }

  _createClass(DayPicker, [{
    key: "longMonthName",
    value: function longMonthName(month) {
      if (this.props.monthNames) {
        return this.props.monthNames[month];
      }

      return MONTHS[month];
    }
  }, {
    key: "longDayName",
    value: function longDayName(dayOfWeek) {
      if (this.props.longDayNames) {
        return this.props.longDayNames[dayOfWeek];
      }

      return DAYS_LONG[dayOfWeek];
    }
  }, {
    key: "shortDayName",
    value: function shortDayName(dayOfWeek) {
      if (this.props.shortDayNames) {
        return this.props.shortDayNames[dayOfWeek];
      }

      return DAYS_SHORT[dayOfWeek];
    }
  }, {
    key: "renderDayHeader",
    value: function renderDayHeader(dayOfWeek) {
      return _react.default.createElement("th", {
        scope: "col"
      }, _react.default.createElement("abbr", {
        title: this.longDayName(dayOfWeek)
      }, this.shortDayName(dayOfWeek)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          month = _this$state5.month,
          year = _this$state5.year;
      return _react.default.createElement("div", {
        className: "react-daypicker-root"
      }, _react.default.createElement("div", {
        className: "header"
      }, _react.default.createElement("div", {
        className: "previous-month",
        onClick: this.previousMonth
      }, "\u25C0"), _react.default.createElement("div", {
        className: "month-year"
      }, this.longMonthName(month), " ", year), _react.default.createElement("div", {
        className: "next-month",
        onClick: this.nextMonth
      }, "\u25B6")), _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, this.renderDayHeader(0), this.renderDayHeader(1), this.renderDayHeader(2), this.renderDayHeader(3), this.renderDayHeader(4), this.renderDayHeader(5), this.renderDayHeader(6))), _react.default.createElement("tbody", null, this.weeks.map(this.renderWeek))));
    }
  }, {
    key: "days",
    get: function get() {
      var _this$state6 = this.state,
          month = _this$state6.month,
          year = _this$state6.year;
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var days = [];
      var offset = new Date(year, month, 1).getDay();

      if (offset < 7) {
        for (var i = 0; i < offset; i++) {
          days.push(null);
        }
      }

      for (var _i = 1; _i <= daysInMonth; _i++) {
        days.push(new Date(year, month, _i));
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
  }], [{
    key: "isSameDay",
    value: function isSameDay(a, b) {
      return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }
  }]);

  return DayPicker;
}(_react.Component);

exports.default = DayPicker;