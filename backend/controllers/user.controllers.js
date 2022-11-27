const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models.js");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    },
    JWT_SECRET
  );
}

const login = async (req, res) => {
  try {
    const user = req.body;

    let { email, password } = user;

    let existingUser = await userModel.findOne({
      email,
    });

    if (existingUser) {
      let match = bcrypt.compareSync(password, existingUser.password);
      if (match) {
        let token = generateToken(existingUser);
        return res.status(200).send({
          status: "success",
          data: {
            token,
          },
        });
      } else {
        return res.status(400).send({
          status: "error",
          message: "Password is wrong",
        });
      }
    } else {
      return res.status(400).send({
        status: "error",
        message: "User does not exist with the given email",
      });
    }
  } catch (err) {
    return res.status(400).send({
      status: "error",
      data: "Invalid Credientials",
    });
  }
};

const register = async (req, res) => {
  try {
    const user = req.body;
    let { name, email, password } = user;
    let existingUser = await userModel.findOne({
      email,
    });
    if (existingUser) {
      return res.status(400).send({
        status: "error",
        message: "Please Check Your Email or Password",
      });
    } else {
      password = bcrypt.hashSync(password);
      let user = await userModel.create({
        name,
        email,
        password,
      });
      user = user.toJSON();
      delete user.password;
      return res.status(200).send({
        status: "success",
        data: user,
      });
    }
  } catch (err) {
    return res.status(400).send({
      status: "error",
      data: "Invalid Credientials",
    });
  }
};

module.exports = {
  register,
  login,
};
