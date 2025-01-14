const express = require("express");
const app = express();
const {
  indexController,
  aboutController,
} = require("./controllers/index.controller");
const {
  userController,
  profileController,
} = require("./controllers/userController");

app.get("/", indexController);
app.get("/about", aboutController);
app.get("/user", userController);
app.get("/user/profile", profileController);

module.exports = app;
