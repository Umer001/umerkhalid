const express = require("express");
const auth = require("./auth");
const order = require("./order");
const products = require("./products");
const routes = express.Router();

module.exports = () => {
  routes.use("/auth", auth());
  routes.use("/order", order());
  routes.use("/products", products());
  return routes;
};
