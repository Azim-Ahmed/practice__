const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const user = require("../controllers/UserController");
// Create a new Tutorial
router.get("/:id", auth, user.findOne);
router.get("/", auth, user.findAll);
module.exports = router;
