const express = require('express');
const getdata = require('../controllers/products.controllers.js');
// import controllers
const productRouter = express.Router();

productRouter.get('/', getdata);

// productRouter.get('/user/:userId', getBlogsByUserId)
// productRouter.get('/:id', getBlogById)
// productRouter.get('/', getBlogsPaginated)

module.exports = productRouter;