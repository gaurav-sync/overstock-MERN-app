const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  position: { type: Number, required: true },
  category: { type: String, required: true },
  product_id: { type: String, required: true },
  reviews: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
