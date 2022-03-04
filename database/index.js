// const { Pool } = require('pg')

// const pool = new Pool({
//   host: 'localhost',
//   user: 'justin-tg',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })

// pool.query('select * from products limit 2', (err, result) => {
//   if (err) {
//     console.log('Error executing query', err);
//   } else {
//     console.log('There is a result: ', result)
//   }
// })