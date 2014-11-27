var canvas,ctx;
var jugador1, jugador2, pelota, dirPelota = 0,
	fondorp = new Image(),
	fondopelotaanterior = new Image(),
	fondopelotanuevo = new Image();
/*Informacion de los componentes del juego (Paletas y la pelota)*/	
jugador1 = {
	imagen : new Image(),
	x : 10,
	y : 0,
	ay: 0,
	puntaje: 0
}
jugador2 = {
	imagen : new Image(),
	x : 470,
	y :  0,
	ay:  0,
	puntaje: 0
}
pelota = {
	imagen : new Image(),
	x:300,
	y:0,
	ax:300,
	ay:0
}
function juegoDibujo() {
	canvas = document.getElementById('pongcanvas');
	ctx = canvas.getContext('2d');
	fondo();
	fondopelotaanterior = ctx.getImageData(0,480,20,20);
	jugadoresDibujar();
	fondorp = ctx.getImageData(0,490,20,10);
	jugador1.imagen = ctx.getImageData(10,0,20,120);
	jugador2.imagen = ctx.getImageData(470,0,20,120);
	pelota.imagen = ctx.getImageData(300,0,20,20);
	ctx.putImageData(fondopelotaanterior,300,0)
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
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(10, 0, 20, 120);
	ctx.fillRect(470, 0, 20, 120);
	ctx.fillRect((300),0,20,20)	
}
function start() {
	$("#btnempezar").css("display","none")
	dirPelota = 1;
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
}
function moverJugador2(dir) {
	if(dir && jugador2.y > 0)
	{
		jugador2.ay = jugador2.y;
		jugador2.y -= 10;
		ctx.putImageData(fondorp, jugador2.x, jugador2.ay + 110)
	}else if(!dir && jugador2.y < 380) {
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
	var pared = false;
	switch(dirPelota)
	{
		case 1:
			if(pelota.x <= 30 && pelota.y > jugador1.y && pelota.y < (jugador1.y + 120))
			{
				dirPelota = 3
				var pared = true
			} else if(pelota.x <= 30){
				pelota.x = 250;
    		pelota.y = 250;
    		jugador2.puntaje += 1;
    	  $("#puntaje2").html(jugador2.puntaje)
			} else if(pelota.y < 480)
			{	
				pelota.x -= 20;
				pelota.y += 20;		
			}  else 
			{
				dirPelota = 2 
				var pared = true
			}
		break;
		case 2:
			if(pelota.x > 30) {	
				pelota.x -= 20;
				pelota.y -= 20;
			} else if(pelota.x <= 30 && pelota.y > jugador1.y && pelota.y < (jugador1.y + 120))
			{
				dirPelota = 3
				var pared = true
			} else if(pelota.x <= 30){
				pelota.x = 250;
    		pelota.y = 250;
    		jugador2.puntaje += 1;
    		$("#puntaje2").html(jugador2.puntaje)
			}
		break;
		case 3:
			if(pelota.x >= 450 && pelota.y > jugador2.y && pelota.y < (jugador2.y + 120)) {
    		dirPelota = 1
    		var pared = true
    	} else if(pelota.x >= 450){
    			pelota.x = 250;
    			pelota.y = 250;
    			jugador1.puntaje += 1; 
    			$("#puntaje1").html(jugador1.puntaje)
    	}
    	 else if(pelota.y > 0) {	
					pelota.x += 20;
					pelota.y -= 20;
    	}else 
			{
				dirPelota = 4
				var pared = true
			}

    break;     
    case 4:   
    	if(pelota.x >= 450 && pelota.y > jugador2.y && pelota.y < (jugador2.y + 120)) {
    		var pared = true
    		dirPelota = 1
    	} else if(pelota.x >= 450){
    			pelota.x = 250;
    			pelota.y = 250;
    			jugador1.puntaje += 1; 
    			$("#puntaje1").html(jugador1.puntaje)
    	}	else  if(pelota.x < 450) {
    		pelota.x += 20;         
    	  pelota.y += 20;
    	}
    break; 
  } 
  if(!pared){
  	fondopelotanuevo = ctx.getImageData(pelota.x,pelota.y,20,20)
  }  else{
  	fondopelotanuevo = ctx.getImageData(100,0,20,20)
  	ctx.putImageData(jugador1.imagen , jugador1.x , jugador1.y);
		ctx.putImageData(jugador2.imagen , jugador2.x , jugador2.y);s
  }
	ctx.putImageData(pelota.imagen, pelota.x, pelota.y);
	ctx.putImageData(fondopelotaanterior, pelota.ax, pelota.ay);
	fondopelotaanterior = fondopelotanuevo;	
	console.log(dirPelota)
}


var timePelota = setInterval(moverPelota, 200);

