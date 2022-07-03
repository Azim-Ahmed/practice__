const auth = require("../controllers/AuthController");
const express = require("express");
const router = express.Router();
// Create a new Tutorial
router.post("/login", auth.login);
router.post("/register", auth.signUp);
module.exports = router;
