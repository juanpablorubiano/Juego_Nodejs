var app = require('express')(),
	http = require('http').Server(app),
	io = require("socket.io")(http),
	routes = require('./routes/index'),
	invitar = require("./Lib/invitar.js"),
	iofun = require("./Lib/iofun.js");

app.use('/', routes.router);
io.on("connection", function(socket) {iofun(socket)})

http.listen(8000, function() {console.log("listo en puerto 8000")});

