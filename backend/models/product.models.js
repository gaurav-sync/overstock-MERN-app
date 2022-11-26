const mongoose = require("mongoose");

// position: {type: Number},
// category:{type: String},
// product_id:{type: Number},
// slides:{type: [String]},
// title:{type: String},
// thumbnails:{type: [[String]]},
// link:{type: String},
// serpapi_link:{type: String},
// model_number:{type: String},
// brand:{type: String},
// collection:{type: String},
// favorite:{type: Number},
// rating:{type: Number},
// reviews:{type: Number},
// price:{type: Number},
// badges:{type:[String]},
// delivery:{type: Object},
// pickup: {type: Object}

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
