var agregarusuario = require('./agregarusuario.js');
var main = function  (socket, io) {
	socket.on("usuariohome", function(args) {
		agregarusuario.main(args)
		io.emit("info", agregarusuario.jugadores)
	})
	socket.on("peticion", function() {
		io.emit("info", agregarusuario.jugadores)
	})
	socket.on("invitar", function (args) { 
		io.emit("invitacion", args)
	})
	socket.on("invitacionAceptada", function (usuarios) {
		console.log("los usuarios son:" + usuarios)
	})
	socket.on("has", function (argument) {
	console.log("argument")
	})
}

module.exports = main