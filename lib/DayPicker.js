'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./DayPicker.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = function (_React$Component) {
  _inherits(DayPicker, _React$Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _this.previousMonth = function () {
      _this.setState({
        month: _this.month.subtract(1, 'month')
      });
    };

    _this.nextMonth = function () {
      _this.setState({
        month: _this.month.add(1, 'month')
      });
    };

    _this.onDayClick = function (event) {
      var dayOfMonth = event.nativeEvent.target.innerText;
      var day = _this.month.date(dayOfMonth);
      _this.props.onDayClick(day);
    };

    _this.renderDay = function (day, index) {
      var keyPrefix = _this.state.keyPrefix;
      var active = _this.props.active;

      var today = (0, _moment2.default)();
      var currentMonth = _this.month;

      var isToday = day && currentMonth.year() == today.year() && currentMonth.month() == today.month() && day == today.date();

      var isActive = day && active && currentMonth.year() == active.year() && currentMonth.month() == active.month() && day == active.date();

      return _react2.default.createElement(
        'td',
        {
          className: (0, _classnames2.default)('day', {
            active: isActive,
            empty: !day,
            today: isToday
          }),
          key: keyPrefix + '.day.' + index,
          onClick: _this.onDayClick
        },
        day || ''
      );
    };

    _this.renderWeek = function (days, index) {
      var keyPrefix = _this.state.keyPrefix;


      return _react2.default.createElement(
        'tr',
        {
          key: keyPrefix + '.week.' + index
        },
        days.map(_this.renderDay)
      );
    };

    var date = (0, _moment2.default)();

    _this.state = {
      month: date,
      keyPrefix: date.format('YYYY.MM')
    };
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-daypicker-root' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'div',
            { className: 'previous-month', onClick: this.previousMonth },
            '\u25C0'
          ),
          _react2.default.createElement(
            'div',
            { className: 'month-year' },
            this.month.format('MMMM YYYY')
          ),
          _react2.default.createElement(
            'div',
            { className: 'next-month', onClick: this.nextMonth },
            '\u25B6'
          )
        ),
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Sunday' },
                  'Sun'
                )
              ),
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Monday' },
                  'Mon'
                )
              ),
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Tuesday' },
                  'Tue'
                )
              ),
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Wednesday' },
                  'Wed'
                )
              ),
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Thursday' },
                  'Thu'
                )
              ),
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Friday' },
                  'Fri'
                )
              ),
              _react2.default.createElement(
                'th',
                { scope: 'col' },
                _react2.default.createElement(
                  'abbr',
                  { title: 'Saturday' },
                  'Sat'
                )
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.weeks.map(this.renderWeek)
          )
        )
      );
    }
  }, {
    key: 'days',
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
    key: 'weeks',
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
    key: 'month',
    get: function get() {
      var month = this.state.month;


      return month.clone();
    }
  }]);

  return DayPicker;
}(_react2.default.Component);

DayPicker.propTypes = {
  active: _react2.default.PropTypes.object,
  onDayClick: _react2.default.PropTypes.func.isRequired
};

exports.default = DayPicker;