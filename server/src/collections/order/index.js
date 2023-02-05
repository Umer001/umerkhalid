const express = require("express");
const routes = express.Router();
const placeOrder = require("./place-order");
const getOrders = require("./get-orders");
module.exports = () => {
  routes.get("/get-orders", getOrders);
  routes.post("/place-order", placeOrder);

  return routes;
};
