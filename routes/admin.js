const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsController = require('../controllers/admin');

const products = [];

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

router.get('/ares', (req, res, next) => {
    res.render('admin/ares');
});

router.post('/ares',productsController.postAresProduct);

router.get('/products',productsController.getProducts);

router.get('/edit-product',productsController.getProducts);

// /admin/add-product => POST
router.post('/add-product',productsController.postAddProduct);

exports.routes = router;
exports.products = products;

