const express = require('express');
const app = express();
const path = require('path');
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
const PORT = 3000 || process.env.PORT;
const controller = require('./contrl');
const directory = 'client/dist';

//Middleware
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Endpoints
app.get('/products', controller.getAllProducts);
app.get('/products/:id', controller.getProductReq);
app.get('/products/:id/styles', controller.getStylesReq);

//Set Up the Sever to Listen on Port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

//Export the App to the testing Library
module.exports = {
  app
}