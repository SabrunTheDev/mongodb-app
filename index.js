const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(
    "mongodb+srv://officialsabrun:TU45WGNIPHHF6Js1@nba.jtebbk8.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));
