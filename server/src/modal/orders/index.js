const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    order_no: {
      type: String,
      require: true,
    },
    total_bill: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    special_instructions: {
      type: String,
      require: true,
    },
    customer_id: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    lat: {
      type: Number,
      require: true,
    },
    lng: {
      type: Number,
      require: true,
    },
    items: [
      {
        id: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
