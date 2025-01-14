const express = require("express");
const router = express.Router();
const {
  indexController,
  aboutController,
} = require("../controllers/index.controller");
const {
  userController,
  profileController,
} = require("../controllers/user.controller");

router.get("/", indexController);
router.get("/about", aboutController);
router.get("/user", userController);
router.get("/user/profile", profileController);

module.exports = router;
