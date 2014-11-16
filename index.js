var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	routes = require('./routes/index'),
	agregarusuario = require('./Lib/agregarusuario.js');;

app.use('/', routes.router);

io.on('connection', function(socket){});

http.listen(8000, function() {console.log("listo en puerto 8000")});

