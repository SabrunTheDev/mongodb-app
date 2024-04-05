const express = require("express");
const router = express.Router();

const getTeams = require("../controllers/teamsControllers");

router.route("/").get(getTeams);

module.exports = router;
