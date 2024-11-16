const express = require('express');
const router = express.Router();

const teams = require('../controller/teams');

// Route to get all teams
router.get('/', teams.getTeams);

// Route to get a specific team by ID
// router.get('/:id', getTeam);

module.exports = router;