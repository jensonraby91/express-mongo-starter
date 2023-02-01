var Product = require('../models/product');

exports.test = function (req, res) {
    res.send('test data');
};

exports.productCreate = function (req, res, next) {
    var product = new Product(
        {
            name: req.body.name,
        }
    );

    product.save(function (err) {
        if (err) return next(err);
        res.send('Product Created')
    })
};

exports.productDetails = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.productUpdate = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated');
    });
};

exports.productDelete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Product deleted successfully');
    })
};