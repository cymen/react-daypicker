import React from 'react';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import classNames from 'classnames';

export default class DayPicker extends React.Component {
  static propTypes = {
    active: momentPropTypes.momentObj,
    onDayClick: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const date = moment();

    this.state = {
      month: date,
      keyPrefix: date.format('YYYY.MM'),
    };
  }

  get days() {
    const days = [];
    const daysInMonth = this.month.daysInMonth();
    const offset = this.month.date(0).day() + 1;
    if (offset < 7) {
      for (let i = 0; i < offset; i++) {
        days.push(null);
      }
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
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

  get month() {
    return this.state.month.clone();
  }

  previousMonth = () => {
    const month = this.month.subtract(1, 'month');

    this.setState({
      month,
      keyPrefix: month.format('YYYY.MM'),
    });
  }

  nextMonth = () => {
    const month = this.month.add(1, 'month');

    this.setState({
      month,
      keyPrefix: month.format('YYYY.MM'),
    });
  }

  onDayClick = (event) => {
    const dayOfMonth = event.nativeEvent.target.innerText
    const day = this.month.date(dayOfMonth);

    this.props.onDayClick(day);
  }

  renderDay = (day, index) => {
    const { keyPrefix } = this.state;
    const { active } = this.props;
    const today = moment();
    const currentMonth = this.month;

    const isToday = day
      && currentMonth.year() == today.year()
      && currentMonth.month() == today.month()
      && day == today.date();

    const isActive = day
      && active
      && currentMonth.year() == active.year()
      && currentMonth.month() == active.month()
      && day == active.date();

    return (
      <td
        className={classNames('day', {
          active: isActive,
          empty: !day,
          today: isToday,
        })}
        key={`${keyPrefix}.day.${index}`}
        onClick={this.onDayClick}
      >{day || ''}</td>
    );
  }

  renderWeek = (days, index) => {
    const { keyPrefix } = this.state;

    return (
      <tr
        key={`${keyPrefix}.week.${index}`}
      >
        {days.map(this.renderDay)}
      </tr>
    );
  }

  render() {
    return (
      <div className="react-daypicker-root">
        <div className="header">
          <div className="previous-month" onClick={this.previousMonth}>◀</div>
          <div className="month-year">{this.month.format('MMMM YYYY')}</div>
          <div className="next-month" onClick={this.nextMonth}>▶</div>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">
                <abbr title="Sunday">Sun</abbr>
              </th>
              <th scope="col">
                <abbr title="Monday">Mon</abbr>
              </th>
              <th scope="col">
                <abbr title="Tuesday">Tue</abbr>
              </th>
              <th scope="col">
                <abbr title="Wednesday">Wed</abbr>
              </th>
              <th scope="col">
                <abbr title="Thursday">Thu</abbr>
              </th>
              <th scope="col">
                <abbr title="Friday">Fri</abbr>
              </th>
              <th scope="col">
                <abbr title="Saturday">Sat</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.weeks.map(this.renderWeek)}
          </tbody>
        </table>
      </div>
    );
  }
}
