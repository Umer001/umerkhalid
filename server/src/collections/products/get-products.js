const { ProductServices } = require("../../services");
module.exports = (req, res) => {
  return ProductServices.getProducts(req, res);
};
