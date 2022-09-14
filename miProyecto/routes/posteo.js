var express = require('express');
var router = express.Router();
const perfilController= require('../controllers/perfilController');

router.get('/agregar', postController.agregar)
router.get('/detalle/:id', postController.detalle);
module.exports = router;
