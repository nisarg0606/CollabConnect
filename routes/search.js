const express = require('express');
const router = express.Router();
const products = require('../controller/search');


// Route to get a specific location by ID
router.get('/:id', products.getSearch);

module.exports = router;