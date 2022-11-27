const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({

    userId:{type:String,required:true},
    
    product_id: {type: mongoose.Schema.Types.ObjectId, ref:'product', required:true},

    quantity:{type:Number}
})

const Historymodel = mongoose.model('history',historySchema);

module.exports = Historymodel;


