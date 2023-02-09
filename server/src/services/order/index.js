const { default: mongoose } = require("mongoose");
const order = require("../../modal/orders");
const customers = require("../../modal/customers");
const _Order = require("../../modal/orders");
const { v4: uuidv4 } = require("uuid");
const generateOrderNumber = () => {
  const uniqueId = uuidv4().substring(0, 8);
  //const currentTime = new Date().getTime();
  return uniqueId;
};

const palceOrder = async (req, res) => {
  const { special_instructions, cus_id, items, cart, address, lat, lng } =
    req.body;
  console.log("🚀 ~ file: index.js:49 ~ palceOrder ~  req.body", req.body);
  const _orderno = generateOrderNumber();
  const _order = new order({
    order_no: _orderno,
    total_bill: cart.totalAmount,
    status: "Processing",
    special_instructions: special_instructions,
    items: cart.items,
    customer_id: cus_id,
    address: address,
    lat: lat,
    lng: lng,
  });

  await _order.save((error, order_doc) => {
    if (error) {
      res
        .status(400)
        .json({ message: "order not placed", error: error.message });
    } else {
      res.status(201).json({ message: "order  placed", order_no: _orderno });
    }
  });

  return res;
};
const getOrders = async (req, res) => {
  const { user_id } = req.headers;

  const page = parseInt(req.headers.page) || 1;
  const pageSize = parseInt(req.headers.pagesize) || 8;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const total = await order.find({ customer_id: user_id }).countDocuments();
  console.log(
    "🚀 ~ file: index.js:42 ~ getOrders ~ req.headers;",
    page,
    pageSize
  );
  order
    .find({ customer_id: user_id }, (error, orders) => {
      if (error) {
        res
          .status(500)
          .json({ message: "orders not found", error: error.message });
      } else {
        res
          .status(201)
          .json({ message: "orders found", data: { orders, total } });
      }
    })
    .skip(startIndex)
    .limit(pageSize)
    .sort({ _id: -1 });
};
const getAllOrders = async (req, res) => {
  const page = parseInt(req.headers.page) || 1;
  const pageSize = parseInt(req.headers.pagesize) || 8;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const total = await order.find({}).countDocuments();
  console.log(
    "🚀 ~ file: index.js:42 ~ getOrders ~ req.headers;",
    page,
    pageSize
  );
  // order
  //   .find({}, (error, orders) => {
  //     if (error) {
  //       res
  //         .status(500)
  //         .json({ message: "orders not found", error: error.message });
  //     } else {
  //       res
  //         .status(201)
  //         .json({ message: "orders found", data: { orders, total } });
  //     }
  //   })
  //   .skip(startIndex)
  //   .limit(pageSize)
  //   .sort({ _id: -1 });

  const allorders = await _Order
    .aggregate([
      {
        $lookup: {
          from: "customers",
          localField: "customer_id",
          foreignField: "_id",
          as: "customer",
        },
      },
      {
        $unwind: "$customer",
      },
      {
        $project: {
          order_no: 1,
          total_bill: 1,
          status: 1,
          special_instructions: 1,
          address: 1,
          lat: 1,
          lng: 1,
          items: 1,
          fullname: "$customer.fullname",
        },
      },
    ])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(orders);
      return console.log(
        "🚀 ~ file: index.js:123 ~ getAllOrders ~ orders",
        orders
      );
    });

  res.status(201).json({ message: "orders found", data: { allorders, total } });
};
module.exports = { palceOrder, getOrders, getAllOrders };
