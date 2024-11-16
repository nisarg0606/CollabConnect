const express = require('express');
const router = express.Router();
const { getLocations, getLocation } = require('../controller/locations');

// Route to get all locations
router.get('/', getLocations);

// Route to get a specific location by ID
router.get('/:id', getLocation);

module.exports = router;