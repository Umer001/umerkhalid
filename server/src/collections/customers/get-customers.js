const { CustomerServices } = require("../../services");
module.exports = (req, res) => {
  return CustomerServices.getCustomers(req, res);
};
