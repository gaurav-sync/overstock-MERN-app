const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  quantity: { type: Number, required: true },
});

const Cartmodel = mongoose.model("cart", cartSchema);

module.exports = Cartmodel;
