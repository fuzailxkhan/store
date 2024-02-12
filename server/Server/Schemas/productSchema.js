const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  id: Number,
  images:[String],
  title: String,
  description: String,
  price:Number,
});


module.exports = mongoose.model('Product', productSchema);
