# React View Tracker

[![npm package][npm-badge]][npm] ![Module formats][module-formats]

Simple react component that watch element when enters or leaves the browser viewport.

### [Demo](https://kaansey.github.io/react-view-tracker/)

### Installation

Add `react-view-tracker` dependency

```bash
yarn add react-view-tracker
npm install react-view-tracker --save
```

### Usage

```js
import ViewTracker from 'react-view-tracker'
;<ViewTracker
  onShow={onShow}
  onHide={onHide}
  onStartObserving={onStartObserving}
  onStopObserving={onStopObserving}
  once={false}
  // it can be 0.5, 0.7 etc... or array of percentage [0.1, 0.5]
  visiblePercentage={1}
>
  <Content />
</ViewTracker>
```

### Options

| Name                  | Type               | Default | Required | Description                                                                                                                                                    |
| --------------------- | ------------------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onShow**            | Function           | null    | false    | When element visible in the view port this function will be called with entry.                                                                                 |
| **onHide**            | Function           | null    | false    | When element visible then not visible in the view port this function will be called with entry                                                                 |  |
| **onStartObserving**  | Function           | null    | false    | When component did load it will `start` observing and call this function with container element                                                                |
| **onStopObserving**   | Function           | null    | false    | When component un mount it will `stop` observing and call this function with container element                                                                 |
| **setRootContainer**  | Function           | null    | false    | The Function should return Element that is used as the viewport for checking visibility of the target.                                                         |
| **once**              | boolean            | false   | false    | Only trigger this method once                                                                                                                                  |
| **visiblePercentage** | number \| number[] | 1       | false    | Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points. |
| **offset** | object | {left: 0, right: 0, top: 0, bottom: 0} | false | Margin around the root. e.g. "10px 20px 30px 40px" (top, right, bottom, left). |


### License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-view-tracker?style=flat-square
[npm]: https://www.npmjs.com/package/react-view-tracker
[module-formats]: https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg?style=flat-square
