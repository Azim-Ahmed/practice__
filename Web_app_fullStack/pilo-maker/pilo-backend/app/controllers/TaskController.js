const db = require("../models");
const Task = db.task;
const List = db.list;
const User = db.user;
const Project = db.project;
exports.create = async (req, res) => {
  try {
    const newTask = new Task({
      name: req.body.name,
      duedate: req.body.duedate,
      description: req.body.description,
    });
    console.log("hihi")
    const task = await newTask.save();
    const list = await List.findById(req.params["listId"]);
    list.tasks.push(task.id);
    await list.save();
    res.json({ task: task, listId: list.id });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
exports.findAll = async (req, res) => {
  try {
    const list = await List.findById(req.params["listId"]);
    if (!list) {
      return res.status(404).json({ msg: "List not found" });
    }
    console.log("hello")
    const tasks = [];
    for (const taskId of list.tasks) {
      tasks.push(await Task.findById(taskId));
    }
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
// edit name, description, duedate
exports.editTask = async (req, res) => {
  try {
    const { description } = req.body;
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    if (description || description === "") {
      task.description = description;
    }
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
// Tien do cong viec
exports.updateProgress = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    task.progress = req.body.progress;
    await task.save();
    res.json(task);
  } catch (error) {}
};
exports.findOne = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
exports.addMember = async (req, res) => {
  try {
    const { taskId, userId } = req.params;
    const task = await Task.findById(taskId);
    const user = await User.findById(userId);
    if (!task || !user) {
      return res.status(404).json({ msg: "Card/user not found" });
    }
    const add = req.params["add"] === "true";
    const members = task.members.map((member) => member.user);
    const index = members.indexOf(userId);
    if ((add && members.includes(userId)) || (!add && index === -1)) {
      return res.json(task);
    }
    if (add) {
      task.members.push({ user: user.id, username: user.username });
    } else {
      task.members.splice(index, 1);
    }
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
exports.delete = async (req, res) => {
  try {
    const task = await Task.findById(req.params["taskId"]);
    const list = await List.findById(req.params["listId"]);
    if (!task || !list) {
      return res.status(404).json({ msg: "List/task not found" });
    }
    list.tasks.splice(list.tasks.indexOf(req.params.id), 1);
    await list.save();
    await task.remove();
    res.json(list.tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
