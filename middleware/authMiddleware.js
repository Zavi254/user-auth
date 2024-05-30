const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports = (req, res, next) => {
  // Get token from header
  const authHeader = req.header("Authorization");

  // Check if not token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
