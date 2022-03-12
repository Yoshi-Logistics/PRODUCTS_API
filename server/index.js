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

app.get('/products', controllers.products.getAll);

app.get('/products/:product_id', controllers.products.getOne);

app.get('/products/:product_id/styles', controllers.styles.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});