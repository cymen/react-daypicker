import React, { Component } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAYS_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default class DayPicker extends Component {
  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      date: now.getDate(),
      month: now.getMonth(),
      today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      year: now.getFullYear()
    };
  }

  static isSameDay(a, b) {
    return (
      a &&
      b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  get days() {
    const { month, year } = this.state;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    const offset = new Date(year, month, 1).getDay();
    if (offset < 7) {
      for (let i = 0; i < offset; i++) {
        days.push(null);
      }
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }

  get weeks() {
    const days = this.days;
    const weeks = [];
    const weekCount = Math.ceil(days.length / 7);
    for (let i = 0; i < weekCount; i++) {
      weeks.push(days.slice(i * 7, (i + 1) * 7));
    }
    return weeks;
  }

  longMonthName(month) {
    if (this.props.monthNames) {
      return this.props.monthNames[month];
    }

    return MONTHS[month];
  }

  longDayName(dayOfWeek) {
    if (this.props.longDayNames) {
      return this.props.longDayNames[dayOfWeek];
    }

    return DAYS_LONG[dayOfWeek];
  }

  shortDayName(dayOfWeek) {
    if (this.props.shortDayNames) {
      return this.props.shortDayNames[dayOfWeek];
    }

    return DAYS_SHORT[dayOfWeek];
  }

  previousMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month !== 0 ? month - 1 : 11,
      year: month !== 0 ? year : year - 1
    });
  };

  nextMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month !== 11 ? month + 1 : 0,
      year: month !== 11 ? year : year + 1
    });
  };

  onDayClick = day => () => {
    if (day) {
      this.props.onDayClick(day);
    }
  };

  renderDay = (day, index) => {
    const { date, month, today, year } = this.state;
    const { active } = this.props;

    const isToday = day && day.valueOf() === today.valueOf();
    const isActive = active && day && DayPicker.isSameDay(active, day);

    return (
      <td
        className={[
          "day",
          isActive ? "active" : null,
          !day ? "empty" : null,
          isToday ? "today" : null
        ]
          .filter(v => v)
          .join(" ")}
        key={`${year}.${month}.day.${index}`}
        onClick={this.onDayClick(day)}
      >
        {day ? day.getDate() : ""}
      </td>
    );
  };

  renderWeek = (days, index) => {
    const { month, year } = this.state;

    return (
      <tr key={`${year}.${month}.week.${index}`}>{days.map(this.renderDay)}</tr>
    );
  };

  renderDayHeader(dayOfWeek) {
    return (
      <th scope="col">
        <abbr title={this.longDayName(dayOfWeek)}>
          {this.shortDayName(dayOfWeek)}
        </abbr>
      </th>
    );
  }

  render() {
    const { month, year } = this.state;

    return (
      <div className="react-daypicker-root">
        <div className="header">
          <div className="previous-month" onClick={this.previousMonth}>
            ◀
          </div>
          <div className="month-year">
            {this.longMonthName(month)} {year}
          </div>
          <div className="next-month" onClick={this.nextMonth}>
            ▶
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {this.renderDayHeader(0)}
              {this.renderDayHeader(1)}
              {this.renderDayHeader(2)}
              {this.renderDayHeader(3)}
              {this.renderDayHeader(4)}
              {this.renderDayHeader(5)}
              {this.renderDayHeader(6)}
            </tr>
          </thead>
          <tbody>{this.weeks.map(this.renderWeek)}</tbody>
        </table>
      </div>
    );
  }
}
