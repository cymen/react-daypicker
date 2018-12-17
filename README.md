# react-daypicker

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
![minified size](https://badgen.net/bundlephobia/min/react-daypicker)
![minzipped size](https://badgen.net/bundlephobia/minzip/react-daypicker)

[![npm badge][npm-badge-png]][package-url]

A simple datepicker inspired by Pikaday.

![DayPicker](react-daypicker.gif)

## Installation

### yarn
```sh
yarn add react-daypicker
```

### npm
```sh
npm install --save react-daypicker
```

## Usage agnostic

Note that this component does not draw any border around itself or handle popping
up. That is up to you and your framework. I am using it with react-bootstrap v3
and it my usage looks like this:

![Usage](usage.png)

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

The root element is `.react-daypicker-root`. The default styling is
intentionally monochrome and basic so that you can drop it into your project
without having to fiddle with styles right away.

## Dependencies

### Peer

* React
* moment
* classnames

## Developing

See `package.json` for details but simply run:

```sh
npm run build
```
[package-url]: https://npmjs.org/package/react-daypicker
[npm-version-svg]: http://versionbadg.es/cymen/react-daypicker.svg
[npm-badge-png]: https://nodei.co/npm/react-daypicker.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/react-daypicker.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-daypicker.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-daypicker
