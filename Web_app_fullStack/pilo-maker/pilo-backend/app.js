const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

const boardRoutes = require("./app/routes/board.routes");
const authRoutes = require("./app/routes/auth.routes");
const userRoutes = require("./app/routes/user.routes");
const projectRoutes = require("./app/routes/project.routes");
const listRoutes = require("./app/routes/list.routes");
const taskRoutes = require("./app/routes/task.routes");
const checklistRoutes = require("./app/routes/checklist.routes");
// set port, listen for requests
const PORT = process.env.PORT || 8080;

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect to db mongoose

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
    console.log("Connect to mongo db success");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pilo nodejs application." });
});

// use board routes
app.use("/api/boards", boardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/checklists", checklistRoutes);
