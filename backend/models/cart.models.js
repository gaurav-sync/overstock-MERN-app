const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    userId:{type:String,required:true},
    
    product_id: {type: mongoose.Schema.Types.ObjectId, ref:'product', required:true},

    quantity:{type:Number}
})

const Cartmodel = mongoose.model('cart',cartSchema);

module.exports = Cartmodel;

