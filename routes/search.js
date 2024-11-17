const express = require('express');
const router = express.Router();
const products = require('../controller/search');



router.get('/product/:id', products.getSearchByProduct);

router.get('/repository/:id', products.getSearchByRepository);

// Route to get a specific location by ID
router.get('/:id', products.getSearch);

module.exports = router;