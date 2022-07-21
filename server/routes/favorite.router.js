const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY "favorites"."id"`
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('error in router.get', error)
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const favorites = req.body;
  // console.log('We are posting,',favorite, req.body );
  const queryText = `INSERT INTO "favorites" ("url", "category_id")
  VALUES ($1, $2);`; 

  pool.query(queryText, [favorites.favorite, 1])
  .then(() => {
  res.sendStatus(201);
  })
  .catch((err) => {
    console.log("Error in server/route post", err);
    res.sendStatus(500);
  });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;


// http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}