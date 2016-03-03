var Path = require('path');

module.exports = [
  staticEndpoint('/','index'),
  staticEndpoint('/values','values'),
  staticEndpoint('/team','team'),
  staticEndpoint('/blog','blog'),
  staticEndpoint('/portfolio','portfolio'),
  { path: '/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.normalize(__dirname + '/') }
    }
  },
  { path: '/img/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.normalize(__dirname + '/img/') }
    }
  },
  { path: '/css/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.normalize(__dirname + '/css/') }
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
        reply.view(view);
      }
    }
  };
}
