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

```javascript
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
```

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

## Options on styling

You can import the Sass stylesheet instead:

```
import 'react-daypicker/src/DayPicker.scss';
```

The root element is `.react-daypicker-root`.

## Dependencies

React and Moment.js are peer dependencies.
