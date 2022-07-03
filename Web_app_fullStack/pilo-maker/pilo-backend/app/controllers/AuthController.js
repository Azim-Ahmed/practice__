const db = require("../models");
const apiResponse = require("../helpers/apiResponse");
const bcrypt = require("bcrypt");
const User = db.user;
const jwt = require("jsonwebtoken");

// Create and Save a new Tutorial

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Validate request
  if (!email) {
    res.status(400).send({ message: "Email can not be empty!" });
    return;
  }

  if (!password) {
    res.status(400).send({ message: "Password can not be empty!" });
    return;
  }
  User.findOne({ email: email }, (err, user) => {
    if (user == null) {
      return apiResponse.notFoundResponse(res, "User not found !.");
    }
    if (bcrypt.compareSync(password, user.password)) {
      let userData = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      const token = generateToken(userData);
      let currentUser = {
        ...userData,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        token,
      };

      return apiResponse.successResponseWithData(
        res,
        "Login successfully !",
        currentUser
      );
    } else {
      return apiResponse.ErrorResponse(res, "Email or password is incorrect !");
    }
  });
  // Save Tutorial in the database
};

exports.signUp = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Username can not be empty!" });
    return;
  }
  if (!req.body.position) {
    res.status(400).send({ message: "Position can not be empty!" });
    return;
  }

  if (!req.body.email) {
    res.status(400).send({ message: "email can not be empty!" });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({ message: "Password can not be empty!" });
    return;
  }
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    position: req.body.position,
  });

  // hash password
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(req.body.password, salt);

  // Save user in the database
  user
    .save()
    .then((data) => {
      let userData = {
        id: data.id,
        username: data.username,
        email: data.email,
        position: data.position,
      };
      const token = generateToken(userData);
      let currentUser = {
        ...userData,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        token,
      };
      return apiResponse.successResponseWithData(
        res,
        "User created successfully !.",
        currentUser
      );
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the board.",
      });
    });
};
