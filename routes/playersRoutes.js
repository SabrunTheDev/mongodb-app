const express = require("express");
const router = express.Router();

const {
  getPlayers,
  postPlayers,
  getPlayersById,
  updatePlayersById,
  deletePlayersbyId,
} = require("../controllers/playersControllers");

router.route("/").get(getPlayers).post(postPlayers);
router
  .route("/:id")
  .get(getPlayersById)
  .put(updatePlayersById)
  .delete(deletePlayersbyId);

module.exports = router;
