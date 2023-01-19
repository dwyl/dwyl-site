'use strict';
var fs = require('fs');
var path = require('path');
var http_request = require('./http_request');
var cheerio = require('cheerio'); // Server-side JQuery. v. useful for scraping!

// Adding Colors to Terminal *Without* a Library/Module
var bgRedBlack = '\x1b[41m\x1b[30m';
var bgGreenBlack = '\x1b[42m\x1b[30m';
var RESET = '\x1b[0m'; // see: https://stackoverflow.com/a/41407246/1148249

var URL = 'https://github.com/dwyl/home/blob/master/README.md';

http_request(URL, function (status, html) {
  if (status !== 200 || !html) {
    console.log(bgRedBlack,
        " - - - GitHub Scraper FAIL >> " + URL + "  - - - ", RESET);
    process.exit();
  }
  else {
    var $ = cheerio.load(html); // load the HTML of the rendered markdown "page"
    var body = $('#readme').html() // parse the contents of #readme (article)
    var css = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');
    var template = fs.readFileSync(path.resolve(__dirname, './template.html'),
      'utf8'); // rudimentary "template" with string subtitution.
    var out = template.replace('{css}', css).replace('{content}', body);
    fs.writeFileSync('./home.html', out, 'utf8'); // save the file
    console.log(bgGreenBlack, 'done.', RESET);
  }
});
