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


app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
							req.query.test === '1';
	next();
});

app.get('/', function(req, res) {
  	res.render('home');
});

app.get('/headers', function(req, res){
	res.set('Content-Type', 'text/plain');
	var s = '';
	for(var name in req.headers){
		s += name + ': ' + req.headers[name] + '\n';		
	}
	s += req.ip + '\n';
	s += req.host + '\n';
	res.send(s);
});

app.get('/machine', function(req, res){
	res.render('machine');
});

app.get('/cv', function(req, res){
	res.render('machine');
});

app.get('/apps', function(req, res){
	res.render('machine');
});

app.get('/application', function(req, res){
	res.render('application');
});

app.get('/board', function(req, res){
	res.render('board');
});

app.get('/contact', function(req, res){
	res.render('contact');
});
app.get('/chatting', function(req, res){
	res.render('chatting');
});

app.post('/process-contact', function(req, res){
	console.log('Received contact from ' + req.body.name + ' <'
				+ req.body.email + '>');

	res.redirect(303, '/thank-you');
})

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