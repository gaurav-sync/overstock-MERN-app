const Historymodel = require("../models/history.models");
const express = require("express");
const mongoose = require("mongoose");

const getuserHistory = async (req, res) => {
  try {
    let { userId } = req.params;
    if (userId) {
      let historyProducts = await Historymodel.find({
        userId: userId,
      }).populate("product_id");

      if (historyProducts.length > 0) {
        return res.send({
          status: "success",
          data: historyProducts,
        });
      } else {
        return res.send({
          status: "error",
          data: "No history found",
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

module.exports = getuserHistory;
