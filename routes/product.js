var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');

router.get('/test', product_controller.test);

module.exports = router;