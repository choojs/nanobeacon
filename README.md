# nanobeacon [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Small `navigator.sendBeacon` wrapper. Sends an HTTP request with priority
`lowest` to a remote host, and ensures it arrives without blocking page
navigation. Useful for sending analytics data.

Also a friendly reminder not to ever store people's IP addresses. Only store
the minimum amount of data needed to inform decisions. Be kind, don't give
analytics a bad name.

## Usage
```js
var nanobeacon = require('nanobeacon')

var url = 'http://jsfiddle.net?sendbeacon'
var ok = nanobeacon(url, { hello: 'world' })

var msg = ok ? 'OK' : 'NOT OK'
document.body.innerHTML = '<h1>message status: ' + msg + '</h1>'
```

## API
### `ok = nanobeacon(url, [data])`
Send a request with a payload to a remote host.

## See Also
- [dom/navigator/sendBeacon](http://devdocs.io/dom/navigator/sendbeacon)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanobeacon.svg?style=flat-square
[3]: https://npmjs.org/package/nanobeacon
[4]: https://img.shields.io/travis/yoshuawuyts/nanobeacon/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanobeacon
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanobeacon/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanobeacon
[8]: http://img.shields.io/npm/dm/nanobeacon.svg?style=flat-square
[9]: https://npmjs.org/package/nanobeacon
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
