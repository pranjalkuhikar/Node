import express from "express";
import indexRoute from "./routers/index.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", indexRoute);

export default app;
