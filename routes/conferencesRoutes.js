const express = require("express");
const router = express.Router();

const getConferences = require("../controllers/conferencesController");

router.route("/").get(getConferences);

module.exports = router;
