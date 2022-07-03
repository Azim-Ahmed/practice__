const checklist = require("../controllers/CheckListController");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
router.post("/:taskId", auth, checklist.create);
router.patch("/:taskId/:itemId", auth, checklist.edit);
router.patch("/:taskId/:complete/:itemId", auth, checklist.status);
router.delete("/:taskId/:itemId", auth, checklist.delete);
module.exports = router;
