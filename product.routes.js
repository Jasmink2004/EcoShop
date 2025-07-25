const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct } = require('../controllers/product.controller');

router.get('/', getProducts);
router.post('/', createProduct);

// Add this to update product by ID
router.patch('/:id', updateProduct);

module.exports = router;
