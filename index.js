var assert = require('assert')

var MAX_SIZE = 65536

module.exports = nanobeacon

function nanobeacon (url, data) {
  data = data || {}

  assert.equal(typeof url, 'string', 'nanobeacon: url should be type string')
  assert.equal(typeof data, 'object', 'nanobeacon: data should be type object')
  assert.equal(typeof window, 'object', 'nanobeacon: no window object found')
  assert.ok(window.navigator && window.navigator.sendBeacon, 'nanobeacon: window.navigator.beacon not found. Consider using a polyfill')

  try {
    var json = JSON.stringify(data)
  } catch (e) {
    throw new Error('nanobeacon: could not stringify data')
  }

  assert.ok(json.length < MAX_SIZE, 'nanobeacon: data should be smaller than ' + MAX_SIZE + ' bytes. Was ' + json.length + ' bytes')

  var blob = new window.Blob([ json ], { type: 'text/plain; charset=UTF-8' })

  if (window.navigator.doNotTrack || !window.navigator.sendBeacon) return false
  return window.navigator.sendBeacon(url, blob)
}
