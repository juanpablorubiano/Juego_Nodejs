var express = require('express'),
	router = express.Router()
	agregarusuario = require('../Lib/agregarusuario.js');

/* GET home page. */
router.get ('/', function (req, res) {
	res.sendfile('./views/index.html');
});
router.get ('/salon', function (req, res) {
	res.sendfile('./views/salon.html');
});
router.get ('/juego', function (req, res) {
	res.sendfile('./views/juego.html');
});

router.get ('/stylesheet/bootstrap.min.css', function (req, res) {
	res.sendfile('./views/stylesheet/bootstrap.min.css');
});
router.get ('/stylesheet/style.css', function (req, res) {
	res.sendfile('./views/stylesheet/style.css');
});

router.get ('/javascript/juego.js', function (req, res) {
	res.sendfile('./views/javascript/juego.js');
});
/*POST paginas*/

router.post("/agregar", function(req, res) {
	req.setEncoding("utf8");
	req.addListener("data", function (datos) {
		agregarusuario.main(datos.substring(7), res);
	})
	res.redirect("/salon")
})
exports.router = router;