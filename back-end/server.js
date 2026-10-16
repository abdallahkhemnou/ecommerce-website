const express = require('express');
const bcrypt = require('bcrypt');
const server = express();
const pool = require('./db');
server.use(express.json());
server.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.send(result.rows);
});
server.get('/products/:id', async (req, res) => {
  const { id_product } = req.params;
  const result = await pool.query('SELECT * FROM products where id_product = $1', [id_product]);
  res.send(result.rows);
});
server.post('/signup', async (req, res) => { 
  const { full_name, email, password } = req.body; 
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO customers (full_name, email, password) VALUES ($1, $2, $3)', [full_name, email, hashedPassword]);
  res.status(201).send('Customer created successfully');
});
server.post('/signin', async (req, res) => { 
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM customers WHERE email = $1', [email]);
  if (result.rows.length === 0) {
    return res.status(401).send('Email not found');
  };
  const customer = result.rows[0];
  if  (!(await bcrypt.compare(password, customer.password))) {
    return res.sendStatus(401);
  }
  res.status(200).send(customer);
});
server.post('/cart_items', async (req, res) => {
  const { id_product, id_customer, quantity } = req.body;
  await pool.query('INSERT INTO cart_items (id_product, id_customer, quantity) VALUES ($1, $2, $3)', [id_product, id_customer, quantity]);
  res.sendStatus(201);
});
server.delete('/cart_items', async (req, res) => {
  const { id_product , id_customer } = req.body;
  await pool.query('DELETE FROM cart_items where id_product = $1 AND id_customer = $2', [id_product, id_customer]);
  res.sendStatus(200);
});
server.get('/cart_items/:id_customer', async (req, res) => {
  const { id_customer } = req.params;
  const result = await pool.query('SELECT * FROM cart_items WHERE id_customer = $1', [id_customer]);
  res.send(result.rows);
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});