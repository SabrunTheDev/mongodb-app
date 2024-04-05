const express = require("express");
const Players = require("../db/Players");

async function getPlayers(req, res) {
  try {
    const players = await Players.find();
    let filteredPlayers = [...players];
    const { team, rings } = req.query;

    if (team) {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.team === team
      );
    }

    if (rings) {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.rings === parseInt(rings)
      );
    }

    const dataPlayers = team || rings ? filteredPlayers : players;
    console.log(dataPlayers);
    res.status(200).json(dataPlayers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function postPlayers(req, res) {
  try {
    const players = await Players.find();

    if (req.body.name && req.body.team) {
      if (players.find((player) => player.name === req.body.name)) {
        res
          .status(400)
          .json({ error: `Player already exists: ${req.body.name}` });
        return;
      }

      const newPlayer = await Players.create({
        name: req.body.name,
        rings: parseInt(req.body.rings),
        mvps: parseInt(req.body.mvps),
        team: req.body.team,
      });

      players.push(newPlayer);

      res.json({ message: "Player added successfully", player: newPlayer });
      console.log({ message: "Player added successfully", player: newPlayer });
    } else {
      res.status(400).json({ error: "Missing required fields" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getPlayersById(req, res, next) {
  try {
    const eachplayer = await Players.findById(req.params.id);
    if (eachplayer) {
      res.json(eachplayer);
      console.log(eachplayer);
    } else {
      const err = new Error("Player not found");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updatePlayersById(req, res, next) {
  try {
    const updatedPlayer = await Players.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (updatedPlayer) {
      res.json({
        message: "Player updated successfully",
        player: updatedPlayer,
      });
    } else {
      const err = new Error("Player not found");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deletePlayersbyId(req, res, next) {
  try {
    const deletedPlayer = await Players.findByIdAndDelete(req.params.id);
    if (deletedPlayer) {
      console.log(`Deleted player: ${deletedPlayer}`);
      res
        .status(200)
        .json({ message: "Player deleted successfully", deletedPlayer });
    } else {
      const err = new Error("Player not found");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getPlayers,
  postPlayers,
  getPlayersById,
  updatePlayersById,
  deletePlayersbyId,
};
