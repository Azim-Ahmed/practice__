const db = require("../models");
const apiResponse = require("../helpers/apiResponse");
const List = db.list;
const Project = db.project;
exports.create = async (req, res) => {
  try {
    const newList = new List({
      name: req.body.name,
    });
    const list = await newList.save();
    const project = await Project.findById(req.params["projectId"]);
    project.lists.push(list.id);
    await project.save();
    res.json(list);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
exports.findAll = async (req, res) => {
  try {
    const project = await Project.findById(req.params["projectId"]);
    const lists = [];
    for (const listId of project.lists) {
      lists.push(await List.findById(listId));
    }
    res.json(lists);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
exports.findOne = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ msg: "List not found" });
    }
    res.json(list);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
