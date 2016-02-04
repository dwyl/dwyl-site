var Hapi   = require('hapi');
var Inert  = require('inert'); // serve static content
var Path   = require('path');
var Vision = require('vision');
var port   = process.env.PORT || 3000; // heroku define port or use 3000
var server = new Hapi.Server();

server.connection({ port: port });

server.register([Inert, Vision], function (err) {
  server.route( require('./routes.js') );
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname, 
    path: 'views'
  });
});

server.start(function(){
  console.log('Now Visit: http://localhost:'+port);
});

module.exports = server;
