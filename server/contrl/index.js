const model = require('../model');

const getAllProducts = (req, res) => {
  const query = req.query;
  model.getAllProducts(query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
};

module.exports = {
  getAllProducts
};