# React-Tocas

[Tocas UI 2](https://tocas-ui.com/) components built with react

[![npm](https://img.shields.io/npm/v/react-tocas.svg?style=flat-square)](https://www.npmjs.com/package/react-tocas)

[![npm](https://img.shields.io/npm/dm/react-tocas.svg?style=flat-square)](https://www.npmjs.com/package/react-tocas)

## Demo & Docs

[react-tocas.github.io](https://react-tocas.github.io/)

## Installation

``` bash
npm install --save react-tocas
```

## Usage

### 1. Import css file

``` html
<link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/master/dist/tocas.min.css">
```

### 2. Use react components

``` js
import Button from 'react-tocas/lib/Button';
// or this way:
// import { Button } from 'react-tocas';

let App = () => (
  <div>
    <Button info onClick={() => alert('World')}>
      Hello
    </Button>
  </div>
);
```
