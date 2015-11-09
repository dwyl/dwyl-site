var Hapi   = require('hapi');
var Inert  = require('inert'); // serve static content
var Path   = require('path');
var port   = process.env.PORT || 3000; // heroku define port or use 3000
var server = new Hapi.Server();

server.connection({ port: port });

server.register(Inert, function (err) {
  server.route( require('./routes.js') );
});

server.start(function(){
  console.log('Now Visit: http://localhost:'+port);
});

module.exports = server;
