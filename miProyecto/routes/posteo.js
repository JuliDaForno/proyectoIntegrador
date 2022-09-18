var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
const postController= require('../controllers/postController');

router.get('/agregar', postController.agregar)
router.get('/detalle/:id', postController.detallePosteo);

module.exports = router;
