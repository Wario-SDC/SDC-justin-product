const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let styles = mongoose.Schema({
  name: String,
  original_price: Number,
  sale_price: Number,
  is_default: Boolean
})

let photos = mongoose.Schema({
  thumbnail_url: String,
  url: String
})

let products = mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  default_price: Number,
  features: String,
  value: String,
  styles: [styles],
  photos: [photos],
  skus: Number,
  size: String,
  quantity: Number,
})

let Product = mongoose.model('Product', productSchema);