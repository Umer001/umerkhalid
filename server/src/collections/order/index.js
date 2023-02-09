const express = require("express");
const routes = express.Router();
const placeOrder = require("./place-order");
const getOrders = require("./get-orders");
const getAllOrders = require("./get-all-orders");
module.exports = () => {
  routes.get("/get-orders", getOrders);
  routes.post("/place-order", placeOrder);
  routes.get("/get-all-orders", getAllOrders);

  return routes;
};
