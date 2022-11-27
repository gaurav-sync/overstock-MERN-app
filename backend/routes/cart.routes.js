const express = require('express');
const { addtocart, getUserCart, updatecart, deletecart, getAllcarts, cartcheckout } = require('../controllers/cart.controllers');

// const getdata = require('../controllers/products.controllers.js');

const cartRouter = express.Router();

cartRouter.post("/", addtocart)

cartRouter.get("/:userId", getUserCart)
cartRouter.patch("/:_id", updatecart)
cartRouter.delete("/:_id", deletecart)

cartRouter.delete("/checkout/:userId", cartcheckout)

cartRouter.get("/", getAllcarts)


module.exports = cartRouter;