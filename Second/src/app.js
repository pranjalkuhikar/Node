const express = require("express");
const app = express();
const { indexController } = require("./controllers/index.controller");

app.get("/", indexController);

module.exports = app;
