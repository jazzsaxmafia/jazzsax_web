var express = require("express");
var logfmt = require("logfmt");
var fs = require('fs');
var app = express();


function serveStaticFile(res, path, contentType, responseCode){
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname + path, function(err, data){
		if(err){
			res.writeHead(500, {'contentType':'text/plain'});
			res.end('500 - Internal Error');
		} else {
			res.writeHead(responseCode, 
				{ 'contentType' : contentType});
			res.end(data);
		}
	})
}

//app.set('port', process.env.PORT || 5000);
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  //:res.send('Hello World!');
  serveStaticFile(res, '/public/index.html', 'text/html');
  //res.send("fucking awesome!");
  //res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

// var http = require('http'),
//  fs = require('fs');
// function serveStaticFile(res, path, contentType, responseCode) {
//  if(!responseCode) responseCode = 200;
//  fs.readFile(__dirname + path, function(err,data) {
//  if(err) {
//  res.writeHead(500, { 'Content-Type': 'text/plain' });
//  res.end('500 - Internal Error');
//  } else {
//  res.writeHead(responseCode,
//  { 'Content-Type': contentType });
//  res.end(data);
//  }
//  });
// }
// http.createServer(function(req,res){
//  // normalize url by removing querystring, optional
//  // trailing slash, and making lowercase
//  var path = req.url.replace(/\/?(?:\?.*)?$/, '')
//  .toLowerCase();
//  switch(path) {
//  case '':
//  serveStaticFile(res, '/public/home.html', 'text/html');
//  break;
//  case '/about':
//  serveStaticFile(res, '/public/about.html', 'text/html');
//  break;
//  case '/img/logo.jpg':
//  serveStaticFile(res, '/public/img/logo.jpg','image/jpeg');
//  break;
//  default:
//  serveStaticFile(res, '/public/404.html', 'text/html',
//  404);
//  break;
//  }
// }).listen(process.env.PORT || 5000);
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

