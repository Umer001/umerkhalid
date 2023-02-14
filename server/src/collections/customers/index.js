const express = require("express");
const routes = express.Router();
const getCustomers = require("./get-customers");
module.exports = () => {
  routes.get("/", getCustomers);

  return routes;
};
