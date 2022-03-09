var models = require('../models');

module.exports = {
  products: {
    //gets all products from db
    getAll: (req, res) => {
      models.products.getAll((err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },

    getOne: (req, res) => {
      models.products.getOne((err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  },

  styles: {
    get: (req, res) => {
      models.styles.get((err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  }
}