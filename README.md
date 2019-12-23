# blurl

blurring password in url

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i blurl
```

## Usage

```js
const blurl = require('blurl');

blurl('http://user:password@www.site.ru')
// returns 'http://user:********@www.site.ru'

blurl('http://user:password@www.site.ru', {blurPassword: false})
// returns 'http://user:password@www.site.ru'

blurl('http://user:password@www.site.ru', {blurPassword: [1, 2]})
// returns 'http://user:p*****rd@www.site.ru'
```

## License

MIT

[npm-url]: https://npmjs.org/package/blurl
[npm-image]: https://badge.fury.io/js/blurl.svg
[travis-url]: https://travis-ci.org/astur/blurl
[travis-image]: https://travis-ci.org/astur/blurl.svg?branch=master