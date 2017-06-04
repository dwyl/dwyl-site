'use strict';

var server = require('../server.js');
var members = require('../members.json');
var test = require('tape');

test('check all members images are available', function (t) {
  members.forEach(function (member) {
    var options = { url: '/img/common/team/' + member.image };

    server.inject(options, function (res) {
      t.equal(res.statusCode, 200, 'found member image ' + member.image);
    });
  });

  t.end();
});

test.onFinish(function () {
  server.stop();
});

