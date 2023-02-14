const { default: mongoose } = require("mongoose");
const order = require("../../modal/orders");
const customers = require("../../modal/customers");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const generateOrderNumber = () => {
  const uniqueId = uuidv4().substring(0, 8);
  //const currentTime = new Date().getTime();
  return uniqueId;
};
const transporter = nodemailer.createTransport({
  host: "mail.alphatechhome.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "cheezious@alphatechhome.com",
    pass: "0oO7w)I$I65Y", // generated ethereal password
  },
});
const getEstimateTime = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 40);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return (result = `${hours12}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`);
};
const sendOrderPlacementEmail = (to, orderno, amount, items, address) => {
  const mailOptions = {
    from: "cheezious@alphatechhome.com",
    to,
    subject: "Order Placement Confirmation",
    html: `<!DOCTYPE html>
    <html>
    <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
    
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    @media screen and (max-width: 480px) {
        .mobile-hide {
            display: none !important;
        }
        .mobile-center {
            text-align: center !important;
        }
    }
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
    </style>
    <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
    
    
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them. 
    </div>
    
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
            
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#FFCB04">
                   
                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                            <tr>
                                <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;" class="mobile-center">
                                    <h1 style="font-size: 32px; font-weight: 800; margin: 0; color: #ffffff;text-align:center;color:black;font-family: 'Google Sans';">Cheezious</h1>
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                   
                  
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                        <tr>
                            <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                            <center><img
                            src="https://www.linkpicture.com/q/thanks.gif"
                            type="image"
                            width="160" 
                          /></center><h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                    Thank You For Your Order!
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;padding-left: 10px;margin:0">
                                   Here is your order summary.
                                   </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding-top: 20px;">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                            Order Confirmation #
                                        </td>
                                        <td width="25%" align="right" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                        ${orderno}
                                        </td>
                                    </tr>

                                    ${items.map((item) => {
                                      return item.name.trim() != ", "
                                        ? `<tr>
                                     <td width="75%" align="left" style=" font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;   padding: 10px 0px 0px 10px">
                                         ${item.name} x ${item.quantity}
                                     </td>
                                     <td width="25%" align="right" style=" font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;   padding: 10px 0px 0px 0px">
                                         Rs. ${item.quantity * item.price}
                                     </td>
                                 </tr>`
                                        : "";
                                    })}
                                    




                                     
                                     
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding-top: 20px;">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 24px; padding: 10px; border-top: 2px solid #eeeeee; ">
                                            Delivery
                                        </td>
                                        <td width="25%" align="right" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 24px; padding: 10px; border-top: 2px solid #eeeeee; ">
                                            Rs.0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-bottom: 2px solid #eeeeee;">
                                            TOTAL
                                        </td>
                                        <td width="25%" align="right" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-bottom: 2px solid #eeeeee;">
                                            Rs.${amount}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    </td>
                </tr>
                 <tr>
                    <td align="center" height="100%" valign="top" width="100%" style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">
                        <tr>
                            <td align="center" valign="top" style="font-size:0;">
                                <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
    
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                        <tr>
                                            <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                <p style="font-weight: 800;">Delivery Address</p>
                                                <p>${address}</p>
    
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                    <table align="right" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                        <tr>
                                            <td align="right" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                <p style="font-weight: 800;">Estimated Delivery Time</p>
                                                <p>${getEstimateTime()}</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
           
               
            </table>
            </td>
        </tr>
    </table>
        
    </body>
    </html>
     `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
const palceOrder = async (req, res) => {
  const { special_instructions, cus_id, cart, address, lat, lng } = req.body;
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

  await _order.save(async (error, order_doc) => {
    if (error) {
      res
        .status(400)
        .json({ message: "order not placed", error: error.message });
    } else {
      await sendOrderPlacementEmail(
        "umerkhalid01@gmail.com",
        _orderno,
        cart.totalAmount,
        cart.items,
        address
      );
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

  order
    .find()
    .populate("customer_id")
    .exec((err, orders) => {
      if (err) {
        res
          .status(500)
          .json({ message: "orders not found", error: error.message });
        console.error(err);
        return;
      }
      res
        .status(201)
        .json({ message: "orders found", data: { orders, total } });
      console.log("🚀 ~ file: index.js:123 ~ getAllOrders ~ allOrders", orders);
    });
};
const filterOrders = async (req, res) => {
  const { query } = req.headers;
  console.log("🚀 ~ file: index.js:330 ~ filterOrders ~ query", Number(query));

  const page = parseInt(req.headers.page) || 1;
  const pageSize = parseInt(req.headers.pagesize) || 8;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const total = 3;
  let totalBillQuery = null;
  if (!Number.isNaN(Number(query))) {
    totalBillQuery = Number(query);
  }
  order
    .find({
      $or: [
        { order_no: { $regex: query, $options: "i" } },
        { total_bill: totalBillQuery },

        { status: { $regex: query, $options: "i" } },
      ],
    })
    .populate("customer_id", "fullname")
    .skip(startIndex)
    .limit(pageSize)
    .sort({ _id: -1 })
    .exec((error, orders) => {
      if (error) {
        res
          .status(500)
          .json({ message: "orders not found", error: error.message });
      } else {
        res
          .status(201)
          .json({ message: "orders found", data: { orders, total } });
      }
      console.log("🚀 ~ file: index.js:133 ~ filterOrders ~ orders", orders);
    });
};
module.exports = { palceOrder, getOrders, getAllOrders, filterOrders };
