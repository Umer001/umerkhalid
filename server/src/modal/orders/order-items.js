const mongoose = require("mongoose");

const orderItemsSchema = mongoose.Schema({
  item_id: {
    type: String,
    require: true,
  },
  item_qty: {
    type: Number,
    require: true,
  },
  item_name: {
    type: String,
    require: true,
  },
  item_price: {
    type: Number,
    require: true,
  },
  order_no: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("orders_items", orderItemsSchema);
