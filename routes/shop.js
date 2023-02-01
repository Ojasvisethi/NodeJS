const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const productsController = require('../controllers/shop');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop/shop', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });

router.get('/', productsController.getIndex);

router.get('/products', productsController.getProducts);

router.get('/cart', productsController.getCart);

router.get('/orders', productsController.getOrders);

router.get('/checkout', productsController.getCheckout);


exports.routes = router;
