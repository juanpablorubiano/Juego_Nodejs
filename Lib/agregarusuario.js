var jugadores = new Array();
function main(arg){
	var bool = true;
	for (var i = jugadores.length - 1; i >= 0; i--) {
		if(arg == jugadores[i])
		{
			bool = false;
		}
	};
	if (bool) {jugadores.push(arg)};
	return bool;
}
exports.jugadores = jugadores
exports.main = main;

