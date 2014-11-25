var socket = io();
var usuariohome,jugadores,home;

function crearusuario() {
	usuariohome = $("#nombre").val();
	socket.emit("usuariohome",usuariohome)
	socket.emit("peticion")
	salon();
}
function borrarUsuario() {
	socket.emit("borrarUsuario", usuariohome)
}
function mostrarusuarios(info) {
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
function confirmacion(args)
{
	if(args.usuario1 == usuariohome)
	{
		home = true;
		juego(); 
		juegoDibujo();
	}
}
function invitacionAceptada(){
	home = false;
	socket.emit("invitacionAceptada", jugadores);
	juego(); 
	juegoDibujo();
}
function error1() {
	usuariohome  = "";
	index();
	alert("ese usuario ya existe por favor coloque otro nombre")
}
function denegado() {$("#invitacion").css("display", "none")}
socket.on("error1",function() { error1()})
socket.on("info", function(args){mostrarusuarios(args)})
socket.on("invitacion", function(args){invitacion(args)})
socket.on("invitacionAceptada", function(args){confirmacion(args)})


/**** JUEGO ****/
function enviarDireccion(dir) {
	socket.emit("direccion",{dir: dir, jugadores: jugadores, home: home})
}
function direccionRecibida(args)
{
	if(args.home)
	{
		moverJugador1(args.dir)
	} else {
		moverJugador2(args.dir)
	}
}
socket.on("direccion", function (args) {direccionRecibida(args)})