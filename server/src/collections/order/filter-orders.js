const { OrderServices } = require("../../services");
module.exports = (req, res) => {
  return OrderServices.filterOrders(req, res);
};
