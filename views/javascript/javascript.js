var socket = io();
var usuarios,usuariohome,jugadores;

function crearusuario() {
	usuariohome = $("#nombre").val();
	socket.emit("usuariohome",usuariohome)
	socket.emit("peticion")
	salon();
}
function mostrarusuarios(info) {
	console.log(info)
	var tabla = $('#tablajugadores');
	var usuarios = info.toString().split(",")
	var nuevosElementos = "<tr class=\"danger\"><td>jugadores</td><td>invitar</td>";
	for (var i = 0; i < usuarios.length; i++) {
		nuevosElementos += "<tr><td>" + usuarios[i] + "</td><td><button class=\"btn btn-link\" id="+usuarios[i]+" onclick=\"invitar(this.id)\">invitar</button></form></td></tr>";
		tabla.html(nuevosElementos)
	};
}
function invitar(usuario)
{
	 jugadores = {
		usuario1 : usuariohome,
		usuario2 : usuario
	}
	if(jugadores.usuario1 != jugadores.usuario2) { socket.emit("invitar", jugadores) };

}
function invitacion (args) {
	if(args.usuario2 == usuariohome)
	{
		jugadores = args;
		$("#usuario1").innerHTML = args.usuario1
		$("#invitacion").css("display", "inherit");
	};
}
function denegado() {$("#invitacion").css("display", "none")}
function invitacionAceptada(){socket.emit("invitacionAceptada", jugadores);}
socket.on("info", function(args){mostrarusuarios(args)})
socket.on("invitacion", function(args){invitacion(args)})


/**** JUEGO ****/