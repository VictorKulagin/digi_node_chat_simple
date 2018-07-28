var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(req, res){
	console.log('listen on *: 3000');
});

/*Событие подключение к web soccet*/

io.on('connection', function (socket) {
	console.log('connected new client');

	socket.on('message', function(data) {
		io.emit('new message', data);
	})
})