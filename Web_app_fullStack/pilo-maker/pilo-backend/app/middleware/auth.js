const jwt = require("jsonwebtoken");
const apiResponse = require("../helpers/apiResponse");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader;

  if (token == null)
    return apiResponse.unauthorizedResponse(res, "Unauthenticated !");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return apiResponse.errorUnauthenticated(res, "Invalid token ");

    req.user = user;

    next();
  });
};

module.exports = authenticateToken;
