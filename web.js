var express = require("express");
var logfmt = require("logfmt");
var fs = require('fs');
var app = express();
var handlebars = require('express3-handlebars')
				.create({defaultLayout:'main'});
var fortune = require('./lib/fortune.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  	res.render('home');
});

app.get('/about', function(req, res){
	
	res.render('about', {fortune : fortune.getFortune()});
});

app.get('/application', function(req, res){
	res.render('application');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});