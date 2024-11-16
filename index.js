const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./supaBase'); // Import the database connection

const app = express();
app.use(bodyParser.json());

// Get all locations
app.get('/locations', async (req, res) => {
    try {
        // Perform the SELECT query on the 'locations' table
        const result = await pool.query('SELECT * FROM locations');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching locations:', error.message);
        res.status(500).send('Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
