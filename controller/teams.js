const pool = require('../supaBase');

module.exports.getTeams = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM teams');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching teams:', error.message);
        res.status(500).send(`Error Message: ${error.message}`);
    }
};

// module.exports.getTeam = async (req, res) => {
//     try {
//         const searchValue = req.params.id;

//         const query = `
//             SELECT *
//             FROM teams
//             WHERE CAST(team_id AS TEXT) = $1
//                OR LOWER(location_id) = LOWER($1)
//         `;

//         const result = await pool.query(query, [searchValue]);

//         if (result.rows.length === 0) {
//             res.status(404).json({ message: 'No team found' });
//         } else {
//             res.json(result.rows);
//         }
//     } catch (error) {
//         console.error('Error fetching team:', error.message);
//         res.status(500).send(`Error Message: ${error.message}`);
//     }
// }

