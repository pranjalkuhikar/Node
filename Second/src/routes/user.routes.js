const express = require("express");
const router = express.Router();

const {
  userController,
  profileController,
} = require("../controllers/user.controller");

router.get("/", userController);
router.get("/profile", profileController);

module.exports = router;
