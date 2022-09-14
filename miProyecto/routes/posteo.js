var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
const postController= require('../controllers/postController');

<<<<<<< HEAD
router.get('/agregar', postController.agregar)
router.get('/detalle/:id', postController.detalle);
=======
router.get('/detalle/:id_usuario', postController.detallePosteo)
router.get('/agregar', postController.agregar)
>>>>>>> e88b060f7d4eeef27100d862f72be6e2c440fa85
module.exports = router;
