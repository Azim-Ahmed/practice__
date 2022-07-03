const db = require("../models");
const Task = db.task;

// add a checklist
exports.create = async (req, res) => {
  try {
    const task = await Task.findById(req.params["taskId"]);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    task.checklists.push({ text: req.body.text, complete: false });
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// edit checklist's text
exports.edit = async (req, res) => {
  try {
    const task = await Task.findById(req.params["taskId"]);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    task.checklists.find((item) => item.id === req.params.itemId).text =
      req.body.text;
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// complete/uncomplete checklist
exports.status = async (req, res) => {
  try {
    const task = await Task.findById(req.params["taskId"]);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    task.checklists.find((item) => item.id === req.params["itemId"]).complete =
      req.params.complete === "true";
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
// delete a checklist
exports.delete = async (req, res) => {
  try {
    const task = await Task.findById(req.params["taskId"]);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    const index = task.checklists.findIndex(
      (item) => item.id === req.params["itemId"]
    );
    if (index !== -1) {
      task.checklists.splice(index, 1);
      await task.save();
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
