const list = require("../controllers/ListController");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/projectLists/:projectId", auth, list.findAll);
router.post("/:projectId", auth, list.create);
router.get("/:id", auth, list.findOne);

module.exports = router;
