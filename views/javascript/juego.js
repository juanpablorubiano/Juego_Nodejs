var canvas,ctx;
var jugador1, jugador2,pelota, 
	fondorp = new Image();

jugador1 = {
	imagen : new Image(),
	x : 10,
	y : 0,
	ay: 0
}

jugador2 = {
	imagen : new Image(),
	x : 470,
	y :  0,
	ay:  0
}
pelota {
	imagen : new Image(),
	x: 250,
	y: 250,
	ax: 250,
	ay: 250
}
function juegoDibujo() {
	canvas = document.getElementById('pongcanvas');
	ctx = canvas.getContext('2d');
	fondo();
	jugadoresDibujar();
	fondorp = ctx.getImageData(0,490,20,10);
	jugador1.imagen = ctx.getImageData(10,0,20,120);
	jugador2.imagen = ctx.getImageData(470,0,20,120);
	pelota.imagen = ctx.getImageData(80,80,20,20);
}
function fondo()
{
	ctx.fillRect(0, 0, 500, 500);
	var i = -30;
	while(i <  500) {
		ctx.fillRect((500-5)/2,i,5,10)
		ctx.fillStyle = "#ffffff";
		i += 30
	};
}
function jugadoresDibujar()
{
	ctx.fillRect(10, 0, 20, 120);
	ctx.fillRect(470, 0, 20, 120);
	ctx.fillRect(80,80,20,20)
	ctx.fillStyle = "#ffffff";
}
function controles(elEvento){
	var evento = elEvento || window.event;
	if(evento.keyCode == 38) {
			enviarDireccion(true)
	}else if(evento.keyCode == 40) {
		enviarDireccion(false)
	}
}
function moverJugador1(dir) {
	if(dir && jugador1.y > 0)
	{
		jugador1.ay = jugador1.y;
		jugador1.y -= 10;
		ctx.putImageData(fondorp, jugador1.x, jugador1.ay +110)
	}else if(!dir && jugador1.y < 380){
		jugador1.ay = jugador1.y;
		jugador1.y += 10;
		ctx.putImageData(fondorp, jugador1.x, jugador1.ay)
	}
	ctx.putImageData(jugador1.imagen , jugador1.x , jugador1.y);
	console.log(jugador1.y)
}
function moverJugador2(dir) {
	if(dir && jugador2.y > 0)
	{
		jugador2.ay = jugador2.y;
		jugador2.y -= 10;
		ctx.putImageData(fondorp, jugador2.x, jugador2.ay+110)
	}else if(!dir && jugador2.y < 380){
		jugador2.ay = jugador2.y;
		jugador2.y += 10;
		ctx.putImageData(fondorp, jugador2.x, jugador2.ay)
	}
	console.log(jugador2.ay )
	ctx.putImageData(jugador2.imagen , jugador2.x , jugador2.y);
}
function moverPelota()
{
	console.log("contafos")
}
var timePelota = setInterval(moverPelota, 1000);


