var express = require('express');
var router = express.Router();

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function( req, res, cb){
        cb(null,  'public/images/posts')
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
const postController= require('../controllers/postController');

router.get('/agregar', postController.create);
router.post('/agregar', upload.single('imagen'),  postController.store);
router.get('/detalle/:id', postController.detallePosteo);
router.get('/search', postController.showOne);

//router.post('/editar/:id', postController.editarPost);
router.get('/editar/:id', postController.update);

router.post('/editar/:id', upload.single('imagen'), postController.editarPost);
router.get('/delete/:id', postController.destroy);

router.post('/addComment', postController.comment);




module.exports = router; 