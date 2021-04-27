const express = require('express');
const app = express();
require('dotenv').config();
const pool = require('./config/mysql');

const port = process.env.PORT || 3000;

app.get('/games', function (req, res) {
  pool.query('SELECT * FROM game', function (error, result) {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, function () {
  console.log(`Connected on port ${port}`);
});
