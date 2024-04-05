const mongoose = require("mongoose");

const playersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    rings: Number,
    mvps: Number,
    team: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("players", playersSchema);
