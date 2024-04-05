const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      unique: true,
      required: true,
    },
    division: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("teams", teamsSchema);
