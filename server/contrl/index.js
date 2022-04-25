const model = require('../model');

module.exports = {

  getAllProducts: (req, res) => {
    model.getAllProducts((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })},

  getProductReq: (req, res) => {
  model.getProduct(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })},

  getStylesReq: (req, res) => {
    model.getStyles(req.params.id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })},

}