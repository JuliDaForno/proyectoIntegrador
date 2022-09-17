var express = require('express');
var router = express.Router();
const perfilController = require('../controllers/perfilController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',perfilController.register)
router.get('/perfil/:id', perfilController.detalleUsuario);
router.get('/miPerfil',perfilController.miPerfil )
router.get('/login' , perfilController.login)
module.exports = router;
