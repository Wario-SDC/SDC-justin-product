const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'justingreer',
  database: 'product_info',
  port: 5432
  // max: 20
  // idleTimeoutMillis: 30000
  // connectionTimeoutMillis: 2000
})

module.exports = {

  getProduct: (id, callback) => {
    let queryStr = 'SELECT * FROM products WHERE id=$1';
    //$ indicates which element it's taking in the qryArgs array starting at 1
    let queryArg = [id];
    pool.query(queryStr, queryArg, (err, data) => {
      if (err) {
        console.log('Error executing query', err);
        callback(err);
      } else {
        console.log('Products Query: ', data)
        callback(null, data)
      }
    })
  },

  getStyles: (id, callback) => {
    let queryStr = 'SELECT * FROM styles WHERE id=$1';
    //$ indicates which element it's taking in the array starting at 1
    let queryArg = [id];
    pool.query(queryStr, queryArg, (err, data) => {
      if (err) {
        console.log('Error executing query', err);
        callback(err);
      } else {
        console.log('Products Query: ', data)
        callback(null, data)
      }
    })
  }

}