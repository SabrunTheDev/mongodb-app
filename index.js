const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connected to MongoDB..."));
  } catch (error) {
    console.error("Could not connect to MongoDB: ", error);
  }
}

// Original Data files (currently unused)
const players = require("./data/players");
const teams = require("./data/teams");
const conferences = require("./data/conferences");

app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(logger);

// Simple View Render for the default page
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { text: "CRUD API" });
});

const conferencesRouter = require("./routes/conferencesRoutes");
app.use("/conferences", conferencesRouter);

const playersRouter = require("./routes/playersRoutes");
app.use("/players", playersRouter);

const teamRouters = require("./routes/teamsRoutes");
app.use("/teams", teamRouters);

// Logger function
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// Listen to the port function
async function startApp() {
  connectToMongoDB();
  portListen();
}

function portListen() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`This server is running on http://localhost:${port}`);
  });
}

// Run the application
startApp();
