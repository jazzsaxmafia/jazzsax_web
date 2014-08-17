var express = require("express");
var logfmt = require("logfmt");
var http = require("http");
var fs = require('fs');
var app = express();
var pg = require('pg');
var socketio = require('socket.io');
var handlebars = require('express3-handlebars')
				.create({defaultLayout:'main'});
var fortune = require('./lib/fortune.js');
var io;
var server;
process.env.DATABASE_URL = "postgres://sjdqlhodimuxxc:A9BEmPib2ynTzEoAHDaJ8brc2s@ec2-23-23-183-5.compute-1.amazonaws.com:5432/ddsbjvelldv31i";
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

server = app.listen(port, function() {
  console.log("Listening on " + port);
});

io = socketio.listen(server);
io.on("connection", function(socket){
	socket.on("message", function(data){

		pg.connect(process.env.DATABASE_URL, function(err, client){
			var query = client.query('SELECT * FROM chatting');
			query.on('row', function(row){
				console.log(JSON.stringfy(row));

			});
		});


		socket.emit("message", data);



	});
});

