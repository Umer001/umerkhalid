const express = require("express");
const routes = express.Router();
const placeOrder = require("./place-order");
const getOrders = require("./get-orders");
const getAllOrders = require("./get-all-orders");
const filterOrders = require("./filter-orders");
module.exports = () => {
  routes.get("/get-orders", getOrders);
  routes.post("/place-order", placeOrder);
  routes.get("/get-all-orders", getAllOrders);
  routes.get("/filter-orders", filterOrders);
  return routes;
};
