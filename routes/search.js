const express = require('express');
const router = express.Router();
const products = require('../controller/search');
const authenticateToken = require('../middleware/auth');

router.get('/product/:id', authenticateToken, products.getSearchByProduct);

router.get('/repository/:id', authenticateToken, products.getSearchByRepository);

// Route to get a specific location by ID
router.get('/:id', authenticateToken, products.getSearch);

router.get("/search/temp/:id", products.getSearch);
router.get("/search/tempProduct/:id", products.getSearchByProduct);
router.get("/search/tempRepository/:id", products.getSearchByRepository);

module.exports = router;