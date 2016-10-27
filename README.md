# react-daypicker

A simple datepicker inspired by Pikaday.

![DayPicker screenshot](/daypicker.png?raw=true)

## Installation

### yarn
```sh
yarn add react-daypicker
```

### npm
```sh
npm install --save react-daypicker
```

## Usage

The only required property is `onDayClick` which is called when a day is clicked.

```javascript
<DayPicker onDayClick={(day) => this.setState({ day })} />
```

An optional property `active` can be added in order to mark a day as active:

```javascript
<DayPicker
  active={moment().add(1, 'day')}
  onDayClick={(day) => this.setState({ day })}
/>
```

Note that `active` is expected to be an instance of moment from Moment.js.

## Dependencies

React and Moment.js are peer dependencies.
