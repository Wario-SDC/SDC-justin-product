const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'justingreer',
  database: 'product_information',
  port: 5432
  // max: 20
  // idleTimeoutMillis: 30000
  // connectionTimeoutMillis: 2000
})

module.exports = {

  getAllProducts: (callback) => {
    let queryStr = `SELECT * FROM products LIMIT 10`;
    pool.query(queryStr, (err, data) => {
      if (err) {
        // console.log('Error executing query', err);
        callback(err);
      } else {
        // console.log('Get 10 Products Query: ', data)
        callback(null, data)
      }
    })
  },

  getProduct: (id, callback) => {
    // let queryStr = 'SELECT * FROM products WHERE id=$1';
    // let queryStr = 'SELECT * FROM products, features WHERE id=100, products.id = features.product_id LIMIT 2';
    // let queryStr = 'SELECT products.*, features.feature, features.value FROM products JOIN features ON products.id=features.product_id WHERE products.id=$1';
    let queryStr = `SELECT products.*, json_agg(
      json_build_object(
        'feature', features.feature,
        'value', features.value
      )
    ) AS features FROM products JOIN features
    ON products.id=features.product_id WHERE products.id=$1 GROUP BY products.id`
    //$ indicates which element it's taking in the qryArgs array starting at 1
    let queryArg = [id];
    pool.query(queryStr, queryArg, (err, data) => {
      if (err) {
        // console.log('Error executing query', err);
        callback(err);
      } else {
        // console.log('Get One Product Query: ', data)
        callback(null, data)
      }
    })
  },

  getStyles: (id, callback) => {
    // let queryStr = `SELECT styles.product_id,
    // json_build_object(
    //   'style_id', styles.id,
    //   'name', styles.name,
    //   'original_price', styles.original_price,
    //   'sale_price', styles.sale_price,
    //   'default?', styles.default_style
    // ) AS results FROM styles WHERE product_id=$1`
    // let queryStr =
    // `SELECT styles.product_id,
    //   (SELECT json_agg(
    //     json_build_object(
    //       'style_id', styles.id,
    //       'name', styles.name,
    //       'original_price', styles.original_price,
    //       'sale_price', styles.sale_price,
    //       'default?', styles.default_style,
    //       'photos', (SELECT
    //         json_agg(
    //           json_build_object(
    //             'thumbnail_url', photos.thumbnail_url,
    //             'url', photos.url
    //           )
    //         ) AS photos FROM photos WHERE photos.style_id=styles.id
    //       )
    //     )
    //   ) AS results FROM styles WHERE product_id=$1)
    // FROM styles WHERE product_id=$1`;
    let queryStr = `SELECT styles.product_id,
    (SELECT json_agg
      (json_build_object
        ('style_id', styles.id,
        'name', styles.name,
        'original_price', styles.original_price,
        'sale_price', styles.sale_price,
        'default?', styles.default_style,
        'photos', (SELECT
          json_agg(
            json_build_object(
              'thumbnail_url', photos.thumbnail_url,
              'url', photos.url)
            )FROM photos WHERE photos.style_id=styles.id
          ),
        'skus', (SELECT
          json_object_agg(
            skus.id,
            json_build_object(
              'quantity', skus.quantity,
              'size', skus.size)
            ) FROM skus WHERE skus.style_id=styles.id
          )
        )
      ) AS results FROM styles WHERE styles.product_id=$1
    ) FROM styles WHERE styles.product_id=$1`;
    let queryArg = [id];
    pool.query(queryStr, queryArg, (err, data) => {
      if (err) {
        // console.log('Error executing query', err);
        callback(err);
      } else {
        // console.log('Products Query: ', data)
        callback(null, data)
      }
    })
  }

}//end of module exports