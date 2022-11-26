const express = require('express');
const Cartmodel = require('../models/cart.models.js');



const addtocart = async (req, res)=>{
    try {

        let productpresence = await Cartmodel.find({ product_id: req.body.product_id });
        let userpresence = await Cartmodel.find({ userId: req.body.userId });


        if(productpresence.length>0 && userpresence.length>0){
        
            let data = await Cartmodel.findByIdAndUpdate( productpresence[0]._id, { quantity : req.body.quantity });

            res.send({
                status:"success",
                data:data
            })
        }else{
            let newCart = new Cartmodel(req.body);

            let addedtocart = await newCart.save();
    
            res.send({
                status:"success",
                data:addedtocart
            })
        }

        
        
    } catch(error){
        console.log(error);
        res.status(400).send({
            status:"error",
            data:"Please enter proper details"
        })
    }
}





const getUserCart = async (req,res)=>{
    try {
        let { userId } = req.params;

        if(userId){

            let cartProduct = await Cartmodel.find({ userId: userId }).populate("product_id");

            if(cartProduct.length>0){
                res.send({
                    status:"success",
                    data : cartProduct
                })
            }

            else{
                res.send({
                    status:"error",
                    data:"Your cart is empty"
                })
            }
        }
        else{
            res.send({
                status:"error",
                data:"Please provide proper userdata"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status:"error",
            data:error
        })
    }
}







const updatecart = async (req,res)=>{
    try{
        let { _id}  = req.params;

        if(_id){

            let data = req.body;

            let newcart = await Cartmodel.findByIdAndUpdate( _id, { quantity : req.body.quantity });
            
            res.send({
                status:"success",
                data:newcart
            })
        }
        else{
            res.status(400).send({
                status:"error",
                data:"please provide id"
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send({
            status:"error"
        })
    }
}



const deletecart = async (req,res)=>{
    try{
        const { _id } = req.params;
        
            let deletedcart = await Cartmodel.findByIdAndRemove(_id);
            res.send({
                status:"true",
                data:deletedcart
            })
    }
    catch(err){
        res.status(400).send({
            status:"error",
            data:"Please eneter proper cartID"
        })
    }
}


const getAllcarts = async (req,res)=>{
    let allcarts = await Cartmodel.find().populate("product_id");
    res.send({
        status:"succes",
        data:allcarts
    })
}






module.exports = {
    addtocart,
    getUserCart,
    updatecart,
    deletecart,
    getAllcarts
};