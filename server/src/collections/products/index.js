const express = require("express");
const routes = express.Router();
const getProducts = require("./get-products");
module.exports = () => {
  routes.get("/", getProducts);

  return routes;
};
