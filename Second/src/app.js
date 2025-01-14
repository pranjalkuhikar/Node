const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/user.routes");

app.use("/", indexRoutes);
app.use("/users", userRoutes);

module.exports = app;
