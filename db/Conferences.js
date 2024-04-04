const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://officialsabrun:TU45WGNIPHHF6Js1@nba.jtebbk8.mongodb.net/NBA"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const conferencesSchema = new mongoose.Schema({
  conference: {
    type: String,
    unique: true,
    required: true,
  },
  location: String,
  description: String,
  division: [String],
});

module.exports = mongoose.model("conferences", conferencesSchema);

// const Conferences = mongoose.model("conferences", conferencesSchema);

// async function getConferences() {
//   const conferences = await Conferences.find();
//   console.log(conferences);
// }

// getConferences();
