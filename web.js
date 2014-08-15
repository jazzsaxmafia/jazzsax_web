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
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  //:res.send('Hello World!');
  serveStaticFile(res, 'index.html', 'text/html');
  //res.send("fucking awesome!");
  //res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});