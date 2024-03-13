const pool = require("../db/server");

const getPlayers = (req, res) => {
    pool.query("SELECT * FROM players", (error, results) => {
        if (error) throw error;
        console.log(results);
        res.status(200).json({ success: true });

    })
}

module.exports = {
    getPlayers
}