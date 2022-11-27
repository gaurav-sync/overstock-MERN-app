const express = require("express");
const Cartmodel = require("../models/cart.models.js");
const Historymodel = require("../models/history.models.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;
const addtocart = async (req, res) => {
  try {
    const decoded = jwt.verify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgyMTExYWQyNWEyZGM0ZTVhNzE3NzQiLCJlbWFpbCI6ImFrYXNoMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJEhkWDhjdVpycS5RQ0tYb1BFN1R1NS5mbVNWZXd4V092VTdPLkU4TjZkTVh1aW16YzdYUmpXIiwiaWF0IjoxNjY5NTU2OTY0fQ.iVb_ILuPzhvSqNvcuR4DA3OZLfsCWnRP_i6AMVGRXa8",
      secretKey
    );
    let productpresence = await Cartmodel.find({
      product_id: req.body.product_id,
    });
    let userpresence = await Cartmodel.find({ userId: decoded._id });
    if (productpresence.length > 0 && userpresence.length > 0) {
      let data = await Cartmodel.findByIdAndUpdate(productpresence[0]._id, {
        quantity: req.body.quantity,
      });
      return res.send({
        status: "success",
        data: data,
      });
    } else {
      let newCart = new Cartmodel(req.body);

      let addedtocart = await newCart.save();

      return res.send({
        status: "success",
        data: addedtocart,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      status: "error",
      data: "Please enter proper details",
    });
  }
};

const getUserCart = async (req, res) => {
  try {
    let { userId } = req.params;

    if (userId) {
      let cartProduct = await Cartmodel.find({ userId: userId }).populate(
        "product_id"
      );

      if (cartProduct.length > 0) {
        return res.send({
          status: "success",
          data: cartProduct,
        });
      } else {
        return res.send({
          status: "error",
          data: "Your cart is empty",
        });
      }
    } else {
      return res.send({
        status: "error",
        data: "Please provide proper userdata",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "error",
      data: error,
    });
  }
};

const updatecart = async (req, res) => {
  try {
    let { _id } = req.params;

    if (_id) {
      let data = req.body;

      let newcart = await Cartmodel.findByIdAndUpdate(_id, {
        quantity: req.body.quantity,
      });

      return res.send({
        status: "success",
        data: newcart,
      });
    } else {
      return res.status(400).send({
        status: "error",
        data: "please provide id",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      status: "error",
    });
  }
};

const deletecart = async (req, res) => {
  try {
    const { _id } = req.params;
    let deletedcart = await Cartmodel.findByIdAndRemove(_id);
    return res.send({
      status: "true",
      data: deletedcart,
    });
  } catch (err) {
    return res.status(400).send({
      status: "error",
      data: "Please eneter proper cartID",
    });
  }
};

const getAllcarts = async (req, res) => {
  let allcarts = await Cartmodel.find().populate("product_id");
  return res.send({
    status: "success",
    data: allcarts,
  });
};

const cartcheckout = async (req, res) => {
  try {
    const { userId } = req.params;

    let data = await Cartmodel.find({ userId: userId }); // need to work
    await Historymodel.insertMany(data);

    let deletedcart = await Cartmodel.deleteMany({ userId: userId });

    return res.send({
      status: "true",
      data: deletedcart,
    });
  } catch (err) {
    return res.status(400).send({
      status: "error",
      data: "Please eneter proper userId",
    });
  }
};

module.exports = {
  addtocart,
  getUserCart,
  updatecart,
  deletecart,
  getAllcarts,
  cartcheckout,
};
