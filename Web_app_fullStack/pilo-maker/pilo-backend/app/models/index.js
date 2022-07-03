const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.board = require("./boards")(mongoose);
db.user = require("./users")(mongoose);
db.project = require("./projects")(mongoose);
db.task = require("./tasks")(mongoose);
db.list = require("./lists")(mongoose);
module.exports = db;
