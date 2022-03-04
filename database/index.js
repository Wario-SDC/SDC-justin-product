// const { Pool } = require('pg')

// const pool = new Pool({
//   host: 'localhost',
//   user: 'justingreer',
//   database: 'product_info',
//   port: 5432
//   // max: 20
//   // idleTimeoutMillis: 30000
//   // connectionTimeoutMillis: 2000
// })

// pool.query('SELECT * FROM products LIMIT 2', (err, result) => {
//   if (err) {
//     console.log('Error executing query', err);
//   } else {
//     console.log('Products Query: ', result)
//   }
// })

// module.exports = {
//   pool
// }