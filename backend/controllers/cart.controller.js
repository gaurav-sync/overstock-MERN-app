const { CartModel } = require("../models/cartModel");


 async function AddToCart(req,res){
    try {
        const {user}=req
        if(!user){
          return   res.status(404).send({message:"user not loged-in"});
        }
      const cart= await CartModel.findOne({user:user._id});
      if(cart){
        const result=  await CartModel.findOneAndUpdate({user:user._id}, {
            $push: {
              cartItems: {
                product: req.body.productId,
                quantity: req.body.quantity,
              },
            },
          })
          return res.send({message:"Iteam added to cart"})
      }
      cart=await CartModel.create({user:user._id,cartItems:[{product:req.body.productId,quantity:req.body.quantity}]})
      return res.send({message:"Iteam added to cart"});
        
    } catch (error) {
        res.status(500).send({message:error.message})
    }
 }

 