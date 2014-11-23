function salon() {
$("body").html("<div class=\"col-md-3 bg-info invitacion\" id=\"invitacion\">"+
		"<center>Haz sido invitado por: <span id=\"usuario1\"></span><br>"+
		"<button class=\"btn btn-sm btn-default\" onclick=\"denegado()\">Denegar</button> <button class=\"btn btn-sm btn-default\" onclick=\"invitacionAceptada()\">Aceptar</button></center>"+
	"</div>"+
	"<table class=\"table-bordered table table-hover  table-condensed centrado\" id=\"tablajugadores\">"+
		"<tr class=\"danger\"><td>jugadores</td><td>invitar</td>"+
	"</table>")
}
function juego() {
	$("body").html("<canvas width=\"500px\" height=\"500px\" id=\"pongcanvas\" ></canvas>")
}