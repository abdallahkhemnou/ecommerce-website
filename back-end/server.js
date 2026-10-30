const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const server = express();
server.use(cors());
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
    return res.sendStatus(401);
  };
  const customer = result.rows[0];
  if  (!(await bcrypt.compare(password, customer.password))) {
    return res.sendStatus(401);
  }
  res.status(200).send({
    id_customer: customer.id_customer
  });
});
server.post('/cart_items', async (req, res) => {
  const { id_product, id_customer, } = req.body;
  await pool.query('INSERT INTO cart_items (id_product, id_customer) VALUES ($1, $2)', [id_product, id_customer]);
  res.sendStatus(201);
});
server.delete('/cart_items', async (req, res) => {
  const { id_product , id_customer } = req.body;
  await pool.query('DELETE FROM cart_items where id_product = $1 AND id_customer = $2', [id_product, id_customer]);
  res.sendStatus(200);
});
server.get('/cart_items/:id_customer', async (req, res) => {
  const { id_customer } = req.params;
  const result = await pool.query(`
    SELECT products.product_name, products.price, products.image_url, cart_items.quantity, cart_items.id_product
    FROM cart_items
    JOIN products ON cart_items.id_product = products.id_product
    WHERE cart_items.id_customer = $1
  `, [id_customer]);
  res.send(result.rows);
});
server.get('/orders/:id_customer', async (req, res) => {
  const { id_customer } = req.params;
  const result = await pool.query('SELECT * FROM orders WHERE id_customer = $1', [id_customer]);
  res.send(result.rows);
});
server.post('cart_items', async (req, res) => {
  const { id_product, id_customer, quantity } = req.body;
  await pool.query('INSERT INTO orders (id_customer) VALUES ($1); INSERT INTO cart_itmes (id_product, quantity) values ($2, $3)', [id_customer, id_product, quantity]);
  res.sendStatus(200);
});
server.post('/orders', async (req, res) => {
  const { id_customer } = req.body;
  const orderResult = await pool.query('INSERT INTO orders (id_customer) VALUES ($1) RETURNING id_order', [id_customer]);
  const id_order = orderResult.rows[0].id_order;
  const cartResult = await pool.query('SELECT id_product, quantity FROM cart_items WHERE id_customer = $1', [id_customer]);
  for (const item of cartResult.rows) {
    await pool.query('INSERT INTO order_items (id_order, id_product, quantity) VALUES ($1, $2, $3)', [id_order, item.id_product, item.quantity]);
  }
  await pool.query('DELETE FROM cart_items WHERE id_customer = $1', [id_customer]);
  res.sendStatus(201);
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});