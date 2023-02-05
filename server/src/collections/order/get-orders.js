const { OrderServices } = require("../../services");
module.exports = (req, res) => {
  return OrderServices.getOrders(req, res);
};
