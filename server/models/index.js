const { Pool } = require('pg')
const pool = new Pool({
  user: 'app',
  host: 'localhost',
  database: 'productdb',
  password: '1',
  port: 5432,
})

module.exports = {
  products: {
    //gets all products from db
    getAll: function (callback) {
      var query = "SELECT * FROM products";
      pool.query(query, function(err, results){
        callback(err, results);
      });
    },

    getOne: function (callback) {
      var query = "SELECT products.*, json_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features FROM products JOIN features ON features.product_id=products.id WHERE products.id=1 GROUP BY products.id";
      pool.query(query, function(err, results){
        callback(err, results);
      });
    }
  },

  styles: {
    get: function (callback) {
      var query =
      `SELECT products.product_id,
      json_agg(json_build_object(
        'style_id', styles.id,
        'name', styles.name,
        'original_price', styles.original_price
        'sale_price', styles.sale_price,
        'default?', styles.default_style,
        'photos', SELECT json_agg(json_build_object(
            'thumbnail_url', photos.thumbnail_url,
            'url', photos.url
          ))
        ))
        AS results,
        'skus', SELECT json_build_object(
          skus.id, SELECT json_build_object(
            'quantity', skus.quantity,
            'size', skus.size
          )
        )
        `;



      pool.query(query, function(err, results){
        callback(err, results);
      });
    }
  }
}