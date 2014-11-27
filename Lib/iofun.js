var manejarUsuarios = require('./manejarUsuarios.js');
var main = function  (socket, io) {
	socket.on("usuariohome", function(args) {
		if(manejarUsuarios.main(args)){
			io.emit("info", manejarUsuarios.jugadores)
			console.log(manejarUsuarios.jugadores)
		} else {
			socket.emit("error1")
		}
	})
	socket.on("peticion", function() {
		io.emit("info", manejarUsuarios.jugadores)
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
	socket.on("borrarUsuario", function(arg) {
		manejarUsuarios.borrar(arg)
		io.emit("info", manejarUsuarios.jugadores)
	})
	socket.on("empezar", function() {
		io.emit("empezar")	
	})
}
module.exports = main
