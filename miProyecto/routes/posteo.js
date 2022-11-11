var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
const postController= require('../controllers/postController');

router.get('/agregar', postController.create);
router.post('/agregar', postController.store);
router.get('/detalle/:id', postController.detallePosteo);
router.get('/search', postController.showOne);
router.get('/editar/:id', postController.update);
router.post('/editar', postController.editarPerfil);
router.post('/delete/', postController.destroy);


module.exports = router;
