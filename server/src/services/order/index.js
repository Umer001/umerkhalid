const { default: mongoose } = require("mongoose");
const order = require("../../modal/orders");
const orders_items = require("../../modal//orders/order-items");

const { v4: uuidv4 } = require("uuid");
const generateOrderNumber = () => {
  const uniqueId = uuidv4().substring(0, 8);
  //const currentTime = new Date().getTime();
  return uniqueId;
};

const addOrderItems = (items) => {
  orderItemsCollection.insertMany(items, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.send(result.ops);
    }
  });
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

module.exports = { palceOrder };
