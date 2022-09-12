var express = require('express');
var router = express.Router();
const perfilController= require('../controllers/perfilController');


router.get('/id_usuario/:id_usuario', perfilController.detallePosteo);
module.exports = router;
