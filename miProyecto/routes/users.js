var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
//Requerimos el multer y el path en el archivo para subir archivos
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function( req, res, cb){
        cb(null,  'public/images/users')
    },
    filename: function(req, file, cb){
        cb(null, (path.join(__dirname,file.fieldname +  '-' + Date.now() + path.extname(file.originalname))))
    }
})

let upload = multer({storage: storage})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',userController.create) //create
router.post('/register', upload.single('fotoDePerfil'), userController.store)
router.get('/perfil/:id', userController.detalleUsuario);
router.get('/miPerfil/:id',userController.miPerfil )
router.get('/login' , userController.login)
router.post('/login', userController.loginUsuario)


router.get('/editarPerfil/:id', userController.editarPerfil)
router.post('/update/:id', upload.single('foto'), userController.update)
router.post('/editarPerfil/:id', userController.editarPerfil)

router.get('/logout', userController.logout)


// multer para el router.post de editar perfil : upload.single('foto')
module.exports = router;