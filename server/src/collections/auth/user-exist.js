const { AuthServices } = require("../../services");
module.exports = (req, res) => {
  return AuthServices.userExist(req, res);
};
