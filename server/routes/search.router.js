const express = require('express');
const pool = require('../modules/pool');
const { search } = require('./favorite.router');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/:searchInput', (req, res) => {

    const searchInput = req.params.searchInput;
    console.log('searchInput', searchInput)

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

    module.exports = router;
