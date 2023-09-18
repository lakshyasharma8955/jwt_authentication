const userController = require("../controllers/users.controller");
const  User = require("../models/user.model")

const express = require("express");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/user-profile", userController.userProfile);

module.exports = router;