const db = require("../models");
const Project = db.project;
const memberVerify = async function (req, res, next) {
  const project = await Project.findById(req.params["projectId"]);
  if (!project) {
    return res.status(404).json({ msg: "Project not found" });
  }
  const members = project.members.map((member) => member.user);
  if (members.toString().includes(req.user.id)) {
    next();
  } else {
    res
      .status(401)
      .json({ msg: "You must be a member of this project to make changes" });
  }
};

module.exports = memberVerify;
