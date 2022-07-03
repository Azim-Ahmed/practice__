const task = require("../controllers/TaskController");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
router.get("/listCards/:listId", auth, task.findAll);
router.post("/:listId", auth, task.create);
router.get("/:id", auth, task.findOne);
router.patch("/edit/:id", auth, task.editTask);
router.patch("/progress/:id", auth, task.updateProgress);
router.patch("/addMember/:add/:taskId/:userId", auth, task.addMember);
router.delete("/delete/:listId/:taskId", auth, task.delete);
module.exports = router;
