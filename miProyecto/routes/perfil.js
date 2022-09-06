const express = require('express');
const router = express.Router();

const perfilController = require('../data/perfil')
router.get('/usuario/:usuario', perfilController.detalleUsuario);

module.exports = router;
