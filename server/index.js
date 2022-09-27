const express = require('express')
const app = express()
const port = 3000
var controllers = require('./controllers');
const path = require('path');

//app.use(express.static('client/dist'));
// app.get('/', (req, res) => {
//   res.send('hello buddy!');
// })
app.get('/loaderio-50b9596098f417c2fd2a8f20587a9185/', (req,res) => {
  res.sendFile(path.resolve('loaderio-fff75b162192bedf66f71ed992fdae08.txt'))
});

app.get('/products', controllers.products.getAll);

app.get('/products/:product_id', controllers.products.getOne);

app.get('/products/:product_id/styles', controllers.styles.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});