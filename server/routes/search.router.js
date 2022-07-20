const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/api/search', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchInput}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(err => {
        console.log ('error getting,', err);
        res.sendStatus(500);
    });
    });
