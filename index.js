const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

mongoose
  .connect(
    "mongodb+srv://officialsabrun:TU45WGNIPHHF6Js1@nba.jtebbk8.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const players = require("./data/players");
const teams = require("./data/teams");
const conferences = require("./data/conference");

app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(logger);
