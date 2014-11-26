var canvas,ctx;
var jugador1, jugador2, pelota, dirPelota = 1,
	fondorp = new Image(),
	fondopelota = new Image();

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
pelota = {
	imagen : new Image(),
	x:(500-20)/2,
	y:(500-20)/2,
	ax:(500-20)/2,
	ay:(500-20)/2
}
function juegoDibujo() {
	canvas = document.getElementById('pongcanvas');
	ctx = canvas.getContext('2d');
	fondo();
	jugadoresDibujar();
	fondorp = ctx.getImageData(0,490,20,10);
	jugador1.imagen = ctx.getImageData(10,0,20,120);
	jugador2.imagen = ctx.getImageData(470,0,20,120);
	pelota.imagen = ctx.getImageData((500-20)/2,(500-20)/2,20,20);
	fondopelota = ctx.getImageData(0,480,20,20);
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
	ctx.fillRect((500-20)/2,(500-20)/2,20,20)
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
		ctx.putImageData(fondorp, jugador1.x, jugador1.ay + 110)
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
		ctx.putImageData(fondorp, jugador2.x, jugador2.ay + 110)
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
	pelota.ax = pelota.x;
	pelota.ay = pelota.y;
	switch(dirPelota)
	{
		case 1:
			if(pelota.y < 480)
			{	
				pelota.x -= 5;
				pelota.y += 10;		
			} else {
				dirPelota = 2 
			}
		break;
		case 2:
			if(pelota.x > 30)
			{	
				pelota.x -= 5;
				pelota.y -= 5;
			} else if(pelota.x == 30 && pelota.y > jugador1.y && pelota.y < (jugador1.y + 120))
			{
				dirPelota = 3
			}

		break;
		case 3:
			if(pelota.y > 0){	
					pelota.x += 5;
					pelota.y -= 5;
			} else 
			{
				dirPelota = 4
			}

    break;     
    case 4:         
    	if(pelota.x < 450){
    		pelota.x += 5;         
    	  pelota.y += 5;
    	} else if(pelota.x == 450 && pelota.y > jugador2.y && pelota.y < (jugador2.y + 120)) 
    	{
    		dirPelota = 1
    	}
    break; 
  } 
	ctx.putImageData(fondopelota, pelota.ax, pelota.ay);
	ctx.putImageData(pelota.imagen, pelota.x, pelota.y);
	console.log("pelota Y: " + pelota.y + ", pelota X:" + pelota.x + " \n , jugador1.y" + jugador1.y + ", jugador2.y"+ jugador2.y)
}
var timePelota = setInterval(moverPelota, 100);