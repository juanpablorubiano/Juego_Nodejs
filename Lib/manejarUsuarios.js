var jugadores = new Array();
function main(args){
	var bool = true;
	for (var i = jugadores.length - 1; i >= 0; i--) {
		if(args == jugadores[i])
		{
			bool = false;
		}
	};
	if (bool) {jugadores.push(args)};
	console.log(bool + " " + jugadores)
	return bool;
}
function borrar(arg)
{
	var elementoBorar,i = 0,x;
	while( i <= jugadores.length) {
		if(jugadores[i] == arg)
		{	
			elementoBorar = jugadores[i]
			jugadores[i] = jugadores[0]
			jugadores[0] = elementoBorar;
			console.log(elementoBorar)
			i = jugadores.length + 2;
		}
		i++
	};
	jugadores.shift();
}
exports.jugadores = jugadores;
exports.main = main;
exports.borrar = borrar;
