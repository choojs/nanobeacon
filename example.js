var nanobeacon = require('./')

var url = 'http://jsfiddle.net?sendbeacon'
var ok = nanobeacon(url, { hello: 'world' })

var msg = ok ? 'OK' : 'NOT OK'
document.body.innerHTML = '<h1>message status: ' + msg + '</h1>'
