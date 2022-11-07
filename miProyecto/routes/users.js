var express = require('express');
var router = express.Router();
const perfilController = require('../controllers/perfilController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',perfilController.register) //create
router.post('/register', perfilController.store)
router.get('/perfil/:id', perfilController.detalleUsuario);
router.get('/miPerfil/:id',perfilController.miPerfil )
router.get('/login' , perfilController.login)
router.post('/login', perfilController.loginUsuario)

router.post('/editarPerfil/:id', perfilController.editarPerfil)

router.get('/logout', perfilController.logout)

module.exports = router;
