var app = require('express')(),
	http = require('http').Server(app),
	io = require("socket.io")(http),
	routes = require('./routes/routes.js'),
	iofun = require("./Lib/iofun.js");

app.use('/', routes);
io.on("connection", function(socket) {iofun(socket,io)})

http.listen(8000, function() {console.log("listo en puerto 8000  \n PDT: NO OLVIDAR JQUERY")});

