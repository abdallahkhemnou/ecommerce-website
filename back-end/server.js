const express = require('express');
const server = express();
const pool = require('./db');
server.use(express.json());
server.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.send(result.rows);
});
server.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM products where id_product = $1', [id]);
  res.send(result.rows);
});
server.post('/signup', async (req, res) => { 
  const { full_name, email, password } = req.body; 
  await pool.query('INSERT INTO customers (full_name, email, password) VALUES ($1, $2, $3)', [full_name, email, password]);
  res.status(201).send('Customer created successfully');
});
server.post('/signin', async (req, res) => { 
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM customers WHERE email = $1', [email]);
  if (result.rows.length === 0) {
    return res.status(401).send('Email not found');
  };
  const customer = result.rows[0];
  if (customer.password !== password) {
    return res.sendStatus(401);
  }
  res.sendStatus(200);
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});