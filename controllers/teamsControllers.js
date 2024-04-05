const express = require("express");
const Teams = require("../db/Teams");

async function getTeams(req, res) {
  const teams = await Teams.find();
  console.log(teams);
  res.status(200).json(teams);
}

module.exports = getTeams;
