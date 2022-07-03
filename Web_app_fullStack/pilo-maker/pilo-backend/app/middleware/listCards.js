const db = require("../models");
const List = db.list;
const listVerify = async function (req, res, next) {
  const list = await List.findById(req.params["listId"]);
  if (!list) {
    return res.status(404).json({ msg: "List not found" });
  } else {
    next();
  }
};
module.exports = listVerify;
