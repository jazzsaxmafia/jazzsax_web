var express = require("express");
var logfmt = require("logfmt");
var fs = require('fs');
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  //:res.send('Hello World!');
  res.send("fucking awesome!");
  //res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});