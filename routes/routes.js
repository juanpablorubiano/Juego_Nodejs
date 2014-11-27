var express = require('express'),
	router = express.Router();

/* GET home page. */
router.get ('/', function (req, res) {
	res.sendfile('./views/index.html');
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
router.get ('/javascript/javascript.js', function (req, res) {
	res.sendfile('./views/javascript/javascript.js');
});
router.get ('/javascript/jquery.js', function (req, res) {
	res.sendfile('./views/javascript/jquery.js');
});
router.get ('/javascript/cambiodepagina.js', function (req, res) {
	res.sendfile('./views/javascript/cambiodepagina.js');
});

module.exports = router;