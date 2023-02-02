const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("customers", customerSchema);
