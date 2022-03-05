const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const controller = require('./contrl');

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/products/:id', controller.getProductReq);
app.get('/products/:id/styles', controller.getStylesReq);


// app.post(endpoint, (req, res) => {
//   controller.addProduct(req, res);
// });

// explain (analyze, buffers, verbose, format text)
// explain (analyze, buffers, verbose, format json)
// EXPLAIN - runs estimated status
// EXPLAIN ANALYZE - runs estimated and runs query

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})