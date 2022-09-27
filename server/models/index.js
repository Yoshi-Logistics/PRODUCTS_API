const { Pool } = require('pg');
const { localConfig } = require('../../config.js');

const pool = new Pool({
  user: localConfig.user,
  host: localConfig.host,
  database: localConfig.database,
  password: localConfig.password,
  port: localConfig.port,
});

module.exports = {
  products: {
    //gets all products from db
    getAll: function (callback) {
      var query = "SELECT * FROM products";
      pool.query(query, function(err, results){
        callback(err, results.rows);
      });
    },

    getOne: function (req, callback) {
      var query = `SELECT products.*,
       json_agg(
         json_build_object(
           'feature', features.feature, 'value', features.value
           )) AS features FROM products JOIN features
            ON features.product_id=products.id WHERE products.id = ${req.params.product_id || 1} GROUP BY products.id`;
      var query2 = `select json_build_object(
        'id', products.id,
        'name', products.name,
        'slogan', products.slogan,
        'description', products.description,
        'category', products.category,
        'default_price', products.default_price,
        'features', (SELECT json_agg(row_to_json(features)) FROM (SELECT feature, value FROM "features" where product_id=$1) AS features
        ))
        from products
        WHERE products.id=$1`;
      //let queryArg = [req.query.product_id];
      pool.query(query, function(err, results){
        callback(err, results.rows);
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