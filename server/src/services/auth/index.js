const { default: mongoose } = require("mongoose");
const customer = require("../../modal/customers");
const bcryptJS = require("bcryptjs");
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
  const { email, password } = req.body;
  const _user = await user.findOne({ email }).lean();
  const _password = await bcryptJS.compare(password, _user.password);
  if (_password) {
    const _token = jwt.sign(_user, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ message: "user login successful!", token: _token });
  } else {
    res.status(403).json({ message: "Password is invalid" });
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
        .json({ message: "user nor registered!!", error: error.message });
    } else {
      const token = jwt.sign(
        { user_id: user._id, fullname: user.fullname },
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

module.exports = { login, register, getUserInfo };
