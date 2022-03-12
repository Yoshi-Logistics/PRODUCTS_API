const express = require('express')
const app = express()
const port = 3000
var controllers = require('./controllers');
const path = require('path');

//connect to frontend here: (?)
//app.use(express.static('client/dist'));
app.get('/loaderio-fff75b162192bedf66f71ed992fdae08.txt', (req,res) => {
  res.sendFile(path.resolve('loaderio-fff75b162192bedf66f71ed992fdae08.txt'))
});

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