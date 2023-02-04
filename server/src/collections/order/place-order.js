const { OrderServices } = require("../../services");
module.exports = (req, res) => {
  return OrderServices.palceOrder(req, res);
};
