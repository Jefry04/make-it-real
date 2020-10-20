const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/tweets");
const authentication = require ("./../../middlewares/authentication");
const audits = require ("./../../middlewares/audits");

router.route("/")
    .post( controller.newTweet)
    .get(controller.getTweets);

router.route("/stream/:username")
    .get(controller.getTweetsStream);

router.route("/:id")
    .get(controller.getTweet)
    .delete (controller.deleteTweet);



module.exports = router; 