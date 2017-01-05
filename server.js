'use strict';

var Hapi = require('hapi');
var Inert = require('inert'); // serve static content
var Vision = require('vision');
var Handlebars = require('handlebars');
var routes = require('./routes.js');
var port = process.env.PORT || 3000; // heroku define port or use 3000
var server = new Hapi.Server();

server.connection({ port: port });

server.register([Inert, Vision], function () {
  server.route(routes);
  server.views({
    engines: { html: Handlebars },
    relativeTo: __dirname,
    path: 'views',
    layout: 'default',
    layoutPath: 'views/layout',
    partialsPath: 'views/partials'
    // helpersPath: 'views/helpers',
  });
});

server.start(function () {
  console.log('Now Visit: http://localhost:' + port); // eslint-disable-line
});

module.exports = server;
