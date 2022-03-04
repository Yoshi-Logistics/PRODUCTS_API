const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let productSchema = mongoose.Schema({
  "id": Number,
  "name": String,
  "slogan": String,
  "description": String,
  "category": String,
  "default_price": Number,
  "features": [{
    "feature": String,
    "value": String,
  }],
  "photos": [{
    "thumbnail_url": String,
    "url": String,
  }],
  "styles": [{
    "name": String,
    "sale_price": Number,
    "default?": Boolean,
    "photos": [{
      "thumbnail_url": String,
      "url": String,
    }],
    "skus": {
      "id": {
        "quantity": Number,
        "size": String,
      }
    }
  }]
});
