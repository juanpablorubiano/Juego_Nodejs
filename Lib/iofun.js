var agregarusuario = require('./agregarusuario.js');
var main = function  (socket, io) {
	socket.on("usuariohome", function(args) {
		if(agregarusuario.main(args)){
			io.emit("info", agregarusuario.jugadores)
		} else {
			socket.emit("error1")
		}
	})
	socket.on("peticion", function() {
		io.emit("info", agregarusuario.jugadores)
	})
	socket.on("invitar", function (args) { 
		io.emit("invitacion", args)
	})
	socket.on("invitacionAceptada", function (jugadores) {
		io.emit("invitacionAceptada", jugadores)
	})
	socket.on("direccion",function(args) {
		io.emit("direccion", args)
	})
}

module.exports = main