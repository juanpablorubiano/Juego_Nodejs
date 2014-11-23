var canvas,ctx
function main() {

	canvas = document.getElementById('pongcanvas');
	ctx = canvas.getContext('2d');
	fondo();
	jugadores();
}
function fondo()
{
	ctx.fillRect(0, 0, 500, 500);
	var i = 0;
	while(i <  500) {
		ctx.fillRect((500-5)/2,i,5,10)
		ctx.fillStyle = "#ffffff";
		i += 30
	};
}
function jugadores()
{
	ctx.fillRect(10, 0, 20, 120);
	ctx.fillRect(470, 0, 20, 120);
	ctx.fillStyle = "#ffffff";

}


