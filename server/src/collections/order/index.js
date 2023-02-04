const express = require("express");
const routes = express.Router();
const placeOrder = require("./place-order");
module.exports = () => {
  routes.post("/place-order", placeOrder);

  return routes;
};
