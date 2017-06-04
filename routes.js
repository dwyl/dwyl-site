'use strict';

var Path = require('path');
var json = require('./members.json');
var members = { members: json };

function staticEndpoint (path, view, context) {
  return {
    path: path,
    method: 'GET',
    config: {
      auth: false,
      handler: function (request, reply) {
        return reply.view(view, context);
      }
    }
  };
}

module.exports = [
  staticEndpoint('/', 'index'),
  staticEndpoint('/values', 'values'),
  staticEndpoint('/blog', 'blog'),
  staticEndpoint('/portfolio', 'portfolio'),
  staticEndpoint('/team', 'team', members),
  {
    path: '/{param*}',
    method: 'GET',
    handler: { directory: { path: Path.join(__dirname, '/public/') } }
  }
];
