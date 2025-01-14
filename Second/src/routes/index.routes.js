const express = require("express");
const router = express.Router();
const {
  indexController,
  aboutController,
} = require("../controllers/index.controller");

router.get("/", indexController);
router.get("/about", aboutController);

module.exports = router;
