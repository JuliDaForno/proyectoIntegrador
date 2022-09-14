var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
const postController= require('../controllers/postController');

router.get('/detalle/:id_usuario', postController.detallePosteo)
router.get('/agregar', postController.agregar)
module.exports = router;
