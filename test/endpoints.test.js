'use strict';

var server = require('../server.js');
var test = require('tape');

test('confirm homepage has content', function (t) {
  var options = { url: '/' };

  server.inject(options, function (res) {
    t.ok(res.payload.includes('reach their potential'));
    t.equal(res.statusCode, 200, 'homepage');
    t.end();
  });
});

test.onFinish(function () {
  server.stop();
});
