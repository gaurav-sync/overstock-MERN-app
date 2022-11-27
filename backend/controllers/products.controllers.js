const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Product = require("../models/product.models.js");

const getdata = async (req, res) => {
  let {
    page = 1,
    sortby,
    order,
    category,
    brand,
    limit = 9,
    position,
  } = req.query;

  let data = [];
  let total = 0;
  let skipValue = (page - 1) * +limit;

  let sortorder = -1;

  if (order === "asc") sortorder = 1;

  if (sortby && order && category && brand) {
    data = await Product.find({ category, brand })
      .skip(skipValue)
      .limit(+limit)
      .sort({ [sortby]: sortorder });

    total = await Product.find({ category, brand }).count();
  } else if (sortby && order && category) {
    data = await Product.find({ category })
      .skip(skipValue)
      .limit(+limit)
      .sort({ [sortby]: sortorder });
    total = await Product.find({ category }).count();
  } else if (sortby && order && brand) {
    data = await Product.find({ brand })
      .skip(skipValue)
      .limit(+limit)
      .sort({ [sortby]: sortorder });
    total = await Product.find({ brand }).count();
  } else if (sortby && order) {
    data = await Product.find()
      .skip(skipValue)
      .limit(+limit)
      .sort({ [sortby]: sortorder });
    total = await Product.find().count();
  } else if (category && brand) {
    data = await Product.find({ category, brand })
      .skip(skipValue)
      .limit(+limit);
    total = await Product.find({ category, brand }).count();
  } else if (category) {
    data = await Product.find({ category })
      .skip(skipValue)
      .limit(+limit);
    total = await Product.find({ category }).count();
  } else if (brand) {
    data = await Product.find({ brand })
      .skip(skipValue)
      .limit(+limit);
    total = await Product.find({ brand }).count();
  } else {
    data = await Product.find()
      .skip(skipValue)
      .limit(+limit);
    total = await Product.find().count();
  }
  if (position) {
    data = await Product.find({ position });
  }

  return res.status(200).send({
    status: "success",
    page: parseInt(page),
    total,
    limit: parseInt(limit),
    data,
  });
};

module.exports = getdata;
