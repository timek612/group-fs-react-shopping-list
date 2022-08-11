const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.put('/', (req, res)=>{
  const sqlText = `
    UPDATE "items"
    SET "ispurchased" = FALSE;`;
  pool.query(sqlText)
      .then((result) => {
          console.log('Reset items');
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      })
})


module.exports = router;
