const { ProductServices } = require("../../services");
module.exports = (req, res) => {
  return ProductServices.getProductsBycat(req, res);
};
