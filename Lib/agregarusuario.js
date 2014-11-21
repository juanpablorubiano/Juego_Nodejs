var jugadores = new Array();
var jugador;
jugadores[0] = "test";
function main (arg) {
		jugadores.push(arg)
		jugador = arg;
}
exports.main = main
exports.jugadores = jugadores;