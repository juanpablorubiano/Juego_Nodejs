function index() {
	$("body").html("<div class=\"centrado\"><div class=\"form-group\">"+
    	"<label for=\"nombre\"><h2>Digite un nombre:</h2></label>"+
    	"<input type=\"text\" class=\"form-control input-lg\" name=\"nombre\" id=\"nombre\" placeHolder=\"ingrese su nombre\" >"+
    "</div>"+
   	"<button class=\"btn btn-default\" id=\"enviar1\" onclick=\"crearUsuario()\">Enviar</button></div>")
}
function salon() {
$("body").html("<div class=\"col-md-3 bg-info invitacion \" id=\"invitacion\">"+
		"<center>Haz sido invitado por: <span id=\"usuario1\"></span><br>"+
		"<button class=\"btn btn-sm btn-default\" onclick=\"denegado()\">Denegar</button> <button class=\"btn btn-sm btn-default\" onclick=\"invitacionAceptada()\">Aceptar</button></center>"+
	"</div>"+
	"<table class=\"table-bordered table table-hover  table-condensed centrado\" id=\"tablajugadores\">"+
		"<tr class=\"danger\"><td>jugadores</td><td>invitar</td>"+
	"</table>")
}
function juego() {
	$("body").html(	"<h2>Jugador 1: <span id=\"puntaje1\"></span> <br> Jugador 2: <span id=\"puntaje2\"></span></h2>"+
					"<canvas  width=\"500px\" height=\"500px\" id=\"pongcanvas\" ></canvas>"+
					"<button class=\"btn btn-danger\" onclick=\"empezar()\" id=\"btnempezar\">Empezar</button>")
}