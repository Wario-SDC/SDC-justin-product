const model = require('../model');

module.exports = {

  getAllProducts: (req, res) => {
    // console.log('id', req.params.id);
    model.getAllProducts((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })},

  getProductReq: (req, res) => {
  // console.log('id', req.params.id);
  model.getProduct(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })},

  getStylesReq: (req, res) => {
    // console.log('id', req.params.id);
    model.getStyles(req.params.id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })},

}