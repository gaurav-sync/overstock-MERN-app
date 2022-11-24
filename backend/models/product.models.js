const mongoose = require("mongoose")

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
    title:{
        type:String,
        require:true
    },
    category:String,  
    brand:String,
    description:String,    
    price:Number,
    rating:Number, 
    reviews:Number
})

const product = mongoose.model('product', productSchema);

module.exports = product;