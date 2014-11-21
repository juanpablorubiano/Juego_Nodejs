var agregarusuario = require('./agregarusuario.js'),
	invitar = require('./invitar');
var main = function  (socket) {
	socket.on("peticion", function() {
		socket.emit("info", agregarusuario.jugadores)
	})
	socket.on("invitar", function (args) { 
		socket.emit("invitacion", args)
	})
	socket.on("invitacionAceptada", function (usuarios) {
		console.log("los usuarios son:" + usuarios)
	})
}

module.exports = main