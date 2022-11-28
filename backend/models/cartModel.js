const mongoose= require("mongoose");

const cartSchema=mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"user"
    },
    cartItems:[{
        product:{
            type:mongoose.ObjectId,
            ref:"product"
        },
        quantity:{
            type:Number,
            requride:true
        }
    }]
})


const CartModel=mongoose.model("Cart",cartSchema);

module.exports={CartModel};