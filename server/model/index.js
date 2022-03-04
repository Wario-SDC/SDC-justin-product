//IMPORT DB from /databse/index.js
const db = require('../../database/index.js');

const API = '';

const getAllProducts = (params, callback) => {
  db.query('SELECT * FROM products LIMIT 2', (err, result) => {
    if (err) {
      console.log('Error executing query', err);
    } else {
      console.log('Products Query: ', result)
    }
  })};

module.exports = {
  getAllProducts
};