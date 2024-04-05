const express = require("express");
const Conferences = require("../db/Conferences");

async function getConferences(req, res) {
  const conferences = await Conferences.find();
  console.log(conferences);
  res.status(200).json(conferences);
}

module.exports = getConferences;
