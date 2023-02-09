const { OrderServices } = require("../../services");
module.exports = (req, res) => {
  return OrderServices.getAllOrders(req, res);
};
