const db = require("../models");
const apiResponse = require("../helpers/apiResponse");
const { project } = require("../models");
const Project = db.project;
const User = db.user;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  try {
    if (!req.body.name) {
      res.status(400).send({ message: "name can not be empty!" });
      return;
    }
    // Create a project
    const newProject = new Project({
      name: req.body.name,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      thumbnail: req.body.thumbnail,
      description: req.body.description,
    });
    const project = await newProject.save();
    const user = await User.findById(req.user.id);
    user.projects.unshift(project.id);
    await user.save();

    project.members.push({ user: user.id, email: user.email });
    // Save Tutorial in the database
    await project.save();

    return res.json(project);
    // project.save(project)
    //   .then((data) => {
    //     return apiResponse.successResponseWithData(
    //       res,
    //       "Project created successfully !.",
    //       data
    //     );
    //   })
    //   .catch((err) => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the board.",
    //     });
    //   });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  // const title = req.query.title;
  // var condition = title
  //   ? { tile: { $regex: new RegExp(title), $options: "i" } }
  //   : {};
  // console.log(title, condition);
  const user = await User.findById(req.user.id);
  const projects = [];
  for (const projectId of user.projects) {
    projects.push(await Project.findById(projectId));
  }
  // Project
  //   .save(projects)
  //   .then((data) => {
  //     return apiResponse.successResponseWithData(res, "List projects", data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while retrieving boards.",
  //     });
  //   });
  return res.json(projects);
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Project.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if (!project || !user) {
      return res.status(404).json({ msg: "Project/User not found" });
    }
    user.projects.splice(user.projects.indexOf(req.params.id), 1);
    await user.save();
    await project.remove();
    res.json(user.projects);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};
// Add a project members
exports.addMember = async (req, res) => {
  try {
    const project = await Project.findById(req.params["projectId"]);
    const user = await User.findById(req.params["userId"]);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (
      project.members
        .map((member) => member.user)
        .includes(req.params["userId"])
    ) {
      return res.status(400).json({ msg: "Already member of board" });
    }
    // Add board to user's boards
    user.projects.unshift(project.id);
    await user.save();

    project.members.push({ user: user.id, email: user.email, role: "normal" });
    await project.save();
    res.json(project.members);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
