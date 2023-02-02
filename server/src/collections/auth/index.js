const express = require("express");
const routes = express.Router();
const login = require("./login");
const register = require("./register");
const getUserInfo = require("./get-user-info");
module.exports = () => {
  routes.post("/login", login);
  routes.post("/register", register);
  routes.get("/get-user-info", getUserInfo);
  return routes;
};
