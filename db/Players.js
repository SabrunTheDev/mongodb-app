const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://officialsabrun:TU45WGNIPHHF6Js1@nba.jtebbk8.mongodb.net/NBA"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const playersSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  rings: Number,
  mvps: Number,
  team: String,
});

module.exports = mongoose.model("players", playersSchema);
