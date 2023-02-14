const { default: mongoose } = require("mongoose");
const customers = require("../../modal/customers");

const getCustomers = async (req, res) => {
  const page = parseInt(req.headers.page) || 1;
  const pageSize = parseInt(req.headers.pagesize) || 8;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const total = await customers.find({}).countDocuments();
  console.log(
    "🚀 ~ file: index.js:42 ~ getOrders ~ req.headers;",
    page,
    pageSize
  );
  customers
    .find({}, (error, rez) => {
      if (error) {
        res
          .status(500)
          .json({ message: "orders not found", error: error.message });
      } else {
        res.status(201).json({ message: "orders found", data: { rez, total } });
      }
    })
    .skip(startIndex)
    .limit(pageSize)
    .sort({ _id: -1 });
};
module.exports = { getCustomers };
