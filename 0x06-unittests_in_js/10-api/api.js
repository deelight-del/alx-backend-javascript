/**
 * Create an express app.
 */

const express = require('express');
const app = express();

const port = 7865;

app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.param('id')}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  if (req.body !== undefined) {
    res.send(`Welcome ${req.body.userName}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
