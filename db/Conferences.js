const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://officialsabrun:TU45WGNIPHHF6Js1@nba.jtebbk8.mongodb.net/NBA"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const conferencesScheme = new mongoose.Schema({
  conference: String,
  location: String,
  description: String,
  division: [String],
});

const Conferences = mongoose.model("conferences", conferencesScheme);

async function getConferences() {
  const conferences = await Conferences.find();
  console.log(conferences);
}

getConferences();
