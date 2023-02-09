const { AuthServices } = require("../../services");
module.exports = (req, res) => {
  return AuthServices.adminLogin(req, res);
};
