const express = require("express");
const auth = require("./auth");
const order = require("./order");
const routes = express.Router();

module.exports = () => {
  routes.use("/auth", auth());
  routes.use("/order", order());
  return routes;
};
