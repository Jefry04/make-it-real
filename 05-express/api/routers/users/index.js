const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/users");
const authentication = require ("./../../middlewares/authentication");
const authorization = require ("./../../middlewares/authorization");
const audits = require ("./../../middlewares/audits");
const validator = require ("./../../middlewares/validator");

router.route("/")
    .post(validator.validateNewUser, controller.newUser)
    .get(authentication, audits, controller.getUsers);

router.route("/login")
    .post(controller.login);

router.route("/:username")
    .get(authentication, controller.getUser)
    .put(authentication, authorization, audits, controller.updateUser)
    .delete(authentication, authorization, audits, controller.deleteUser);



module.exports = router; 