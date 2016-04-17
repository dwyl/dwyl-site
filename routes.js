var Path = require('path');

module.exports = [
  staticEndpoint('/','index'),
  staticEndpoint('/values','values'),
  staticEndpoint('/team','team'),
  staticEndpoint('/blog','blog'),
  staticEndpoint('/portfolio','portfolio'),
  { path: '/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.join(__dirname + '/public/') }
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
