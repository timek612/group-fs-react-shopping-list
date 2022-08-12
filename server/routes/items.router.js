const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res)=> {
    console.log('req.body is', req.body)
    
    const package=req.body
    const sqlText=`
    INSERT INTO "items" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);`;

    pool.query(sqlText, [package.item, package.quantity, package.unit])
        .then( (result) => {
            res.sendStatus(210)
        }).catch( (err) =>{
            console.log('error in making db query')
            res.sendStatus(500)
        })
})

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

router.delete('/', (req, res)=>{
  const sqlText = `
    DELETE FROM "items";`;

  pool.query(sqlText)
      .then((result) => {
          console.log('Deleted all items!');
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      })
    })

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
