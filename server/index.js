const express = require('express')
const app = express()
const port = 3000
var controllers = require('./controllers');

//connect to frontend here: (?)
//app.use(express.static('client/dist'));

app.get('/products', (req, res) => {
  controllers.products.getAll(req, res);
});

app.get('/products/:product_id', (req, res) => {
  controllers.products.getOne(req, res);
});

app.get('/products/:product_id/styles', (req, res) => {
  controllers.styles.get(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});