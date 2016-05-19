'use strict';

const Path = require('path');

module.exports = [
  staticEndpoint('/','index'),
  staticEndpoint('/values','values'),
  staticEndpoint('/blog','blog'),
  staticEndpoint('/portfolio','portfolio'),
  { path: '/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.join(__dirname + '/public/') }
    }
  },
  {
    path: '/team',
    method: 'GET',
    config: {
      auth: false,
      handler: function (request, reply) {

        const members = require('./members.json')
        return reply.view('team', {members: members});
      }
    }
  }
];

function staticEndpoint (path, view){
  return {
    path: path,
    method: 'GET',
    config: {
      auth: false,
      handler: function (request, reply) {

        return reply.view(view);
      }
    }
  };
}
