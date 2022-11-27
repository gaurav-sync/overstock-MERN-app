const express = require("express");
const cors = require("cors");
// const { connect } = require('./database/connectdb.js');
const { register, login } = require("./controllers/user.controllers.js");
const { default: mongoose } = require("mongoose");
const productRouter = require("./routes/products.routes.js");
const cartRouter = require("./routes/cart.routes.js");
require("dotenv").config();

const ATLAS_USERNAME = process.env.ATLAS_USERNAME;
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD;
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

// app.use();
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.post("/register", register);
app.post("/login", login);

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@cluster0.obuzm6f.mongodb.net/?retryWrites=true&w=majority`
  );
};

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
