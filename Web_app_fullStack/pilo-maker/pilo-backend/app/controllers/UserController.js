const db = require("../models");
const apiResponse = require("../helpers/apiResponse");
const User = db.user;

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { tile: { $regex: new RegExp(title), $options: "i" } }
    : {};
  User.find(condition)
    .then((data) => {
      return apiResponse.successResponseWithData(res, "List users", data);
      // res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving boards.",
      });
    });
};
