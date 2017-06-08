var liveServer = require("live-server");

var params = {
    port: 8181,
    host: "0.0.0.0",
    root: "./redesign",
    open: false,
    ignore: 'scss,my/templates',
    file: "./index.html",
    wait: 1000,
    mount: [['/components', './node_modules']],
    logLevel: 2,
    middleware: [function(req, res, next) { next(); }]
liveServer.start(params);
