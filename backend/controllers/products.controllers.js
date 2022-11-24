const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const product = require("../models/product.models.js");
// require('dotenv').config()

// const JWT_SECRET = process.env.JWT_SECRET;

const getdata = async (req, res) => {
  // let { page, sortby, order, category, brand } = req.query;
  // console.log(category, "   ", brand)
  //   let data = [];
  // data = await product.find({$and:[{category:category},{brand:brand}]}).skip(0).limit(9)
  let data = await product.find({ brand: "Costway" }).limit(2);
  // console.log(data)

  // if(sortby && order && category && brand){
  //     data = await product.find({category:category, brand:brand}).skip(page-1 * 9).limit(9).sort({
  //         sortby:order=='asc'? 1 : -1
  //     });
  // }else if(sortby && order && category){
  //     data = await product.find({category:category}).skip(page-1 * 9).limit(9).sort({
  //         sortby:order=='asc'? 1 : -1
  //     });
  // }else if(sortby && order && category){
  //     data = await product.find({category:category}).skip(page-1 * 9).limit(9).sort({
  //         sortby:order=='asc'? 1 : -1
  //     });
  // }

  res.status(200).send({
    status: "success",
    data: {
      data,
    },
  });
};

module.exports = getdata;
