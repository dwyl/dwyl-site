'use strict';

const Path = require('path');
const members = {members: require('./members.json')};

module.exports = [
  staticEndpoint('/','index'),
  staticEndpoint('/values','values'),
  staticEndpoint('/blog','blog'),
  staticEndpoint('/portfolio','portfolio'),
  staticEndpoint('/team', 'team', members),
  { path: '/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.join(__dirname + '/public/') }
    }
  }
];

function staticEndpoint (path, view, context){
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
