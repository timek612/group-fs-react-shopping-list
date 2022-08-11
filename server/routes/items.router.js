const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "items"
    ;`;

    pool.query(queryText)
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = router;
