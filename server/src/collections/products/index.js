const express = require("express");
const routes = express.Router();
const getProducts = require("./get-products");
const getProductsBycat = require("./get-products-by-cat");
module.exports = () => {
  routes.get("/", getProducts);
  routes.get("/category_id/:id", getProductsBycat);

  return routes;
};
