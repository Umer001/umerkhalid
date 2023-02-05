const { default: mongoose } = require("mongoose");
const customer = require("../../modal/customers");
const jwt = require("jsonwebtoken");

const decodeJWT = (token) => {
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Return the decoded user information
    return decoded;
  } catch (error) {
    // Return an error if the token is invalid
    return error;
  }
};

const getUserInfo = async (req, res) => {
  const { token } = req.headers;
  const _user = decodeJWT(token);
  // If the token is invalid, return an error
  if (_user instanceof Error) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    res.status(201).json({ message: "Verified Successfully", user: _user });
  }
};
const login = async (req, res) => {
  const { phone } = req.body;
  console.log("🚀 ~ file: index.js:31 ~ login ~  req.body", req.body, phone);
  const _user = await customer.findOne({ phone }).lean();
  if (_user) {
    const _token = jwt.sign(
      {
        user_id: _user._id,
        fullname: _user.fullname,
        email: _user.email,
        phone: _user.phone,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ message: "User login successful!", token: _token });
  } else {
    res.status(403).json({ message: "Invalid Request" });
  }
};
const userExist = async (req, res) => {
  const { phone } = req.body;

  const _customer = await customer.findOne({ phone }).lean();
  if (_customer) {
    res.status(201).json({ message: "customer found!", flag: true });
  } else {
    res.status(403).json({ message: "customer not found", flag: false });
  }
};
const register = async (req, res) => {
  const { fullname, email, phone } = req.body;

  const _customer = new customer({
    fullname,
    email,
    phone,
  });

  await _customer.save((error, user) => {
    if (error) {
      res
        .status(400)
        .json({ message: "user not registered!!", error: error.message });
    } else {
      const token = jwt.sign(
        { user_id: user._id, fullname: user.fullname, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res
        .status(201)
        .json({ message: "successfully registered!!", token: token });
    }
  });

  return res;
};

module.exports = { login, register, getUserInfo, userExist };
