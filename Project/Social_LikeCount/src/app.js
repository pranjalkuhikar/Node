import express from "express";
import indexRoutes from "./routes/index.routes.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", indexRoutes);

export default app;
