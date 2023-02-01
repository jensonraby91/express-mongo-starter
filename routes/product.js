var express = require('express');
var router = express.Router();

var productController = require('../controllers/product');

router.get('/test', productController.test);

module.exports = router;

router.post('/create', productController.productCreate);

router.get('/:id', productController.productDetails);

router.put('/:id/update', productController.productUpdate);

router.delete('/:id/delete', productController.productDelete);

module.exports = router;