var express = require('express');
var router = express.Router();

const perfilController = require('../controllers/perfilController')

/* GET home page. */
router.get('/', perfilController.index);

module.exports = router;

