var express = require('express');
var router = express.Router();
const perfilController = require('../controllers/perfilController');

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function( req, res, cb){
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname +  '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage: storage})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',perfilController.create) //create
router.post('/register', upload.single('fotoperfil'), perfilController.store)
router.get('/perfil/:id', perfilController.detalleUsuario);
router.get('/miPerfil/:id',perfilController.miPerfil )
router.get('/login' , perfilController.login)
router.post('/login', perfilController.loginUsuario)
router.get('/editarPerfil/:id', perfilController.editarPerfil)
router.get('/logout', perfilController.logout)


// multer para el router.post de editar perfil : upload.single('foto')

module.exports = router;
