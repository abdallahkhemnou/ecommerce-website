const express = require('express');
const server = express();
const pool = require('./db');

server.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(result.rows[0]);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});