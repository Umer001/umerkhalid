const express = require("express");
const routes = express.Router();
const login = require("./login");
const register = require("./register");
const getUserInfo = require("./get-user-info");
const userExist = require("./user-exist");
const adminLogin = require("./admin-login");
module.exports = () => {
  routes.post("/login", login);
  routes.post("/register", register);
  routes.get("/get-user-info", getUserInfo);
  routes.post("/user-exist", userExist);
  routes.post("/admin/login", adminLogin);
  return routes;
};
