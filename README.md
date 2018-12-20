# react-daypicker

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
![minified size](https://badgen.net/bundlephobia/min/react-daypicker)
![minzipped size](https://badgen.net/bundlephobia/minzip/react-daypicker)

[![npm badge][npm-badge-png]][package-url]

A simple datepicker inspired by Pikaday.

![DayPicker](react-daypicker.gif)

## 3.0.0 is a breaking change

With 3.0.0, all external dependencies are removed except react (as a peer). That means for you
as a consumer that the `active` prop which was a `moment` date is *now expected to be a vanilla
JavaScript date*. However, for date equality reasons, `active` is expected to be a day so you
must pass in a `Date` instance with no more accuracy beyond date set.

An example is simplist:

```javascript
<DayPicker active={new Date(2018, 11, 1)} />
```
([remember with JavaScript, months start at 0 so 11 is December](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth))

## Installation

## Agnostic building block

Note that this component does not draw any border around itself or handle popping
up. That is up to you. I am using it with react-bootstrap v3 and it my usage looks
like this:

![Usage](usage.png)

### npm
```sh
npm install --save react-daypicker
```

### yarn
```sh
yarn add react-daypicker
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
  active={new Date(2018, 11, 1)}
  onDayClick={(day) => this.setState({ day })}
/>
```

Note that `active` is expected to be an instance of *Date*. **In prior version of this
component, it was expected to be a Moment.js wrapped date but that is no longer the
case.**

## Options on styling

You can import the Sass stylesheet instead:

```
import 'react-daypicker/src/DayPicker.scss';
```

The root element is `.react-daypicker-root`. The default styling is
intentionally monochrome and basic so that you can drop it into your project
without having to fiddle with styles right away.

This is likely to change in the future with a probable move to `styled-components` or
something similar.

## Dependencies

### Peer

* React

## Developing

See `package.json` for details but simply run `npm run watch` (if changing code,
doesn't work for styles yet) or `npm run build`.

[package-url]: https://npmjs.org/package/react-daypicker
[npm-version-svg]: http://versionbadg.es/cymen/react-daypicker.svg
[npm-badge-png]: https://nodei.co/npm/react-daypicker.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/react-daypicker.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-daypicker.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-daypicker
