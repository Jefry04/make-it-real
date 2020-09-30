const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/tweets");

router.route("/")
    .post(controller.newTweet)
    .get(controller.getTweets);
/*
router.route("/:username")
    .get(controller.getUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser);

*/

module.exports = router; 