import express from "express";
import indexRoute from "./routes/index.routes.js";
const app = express();

app.use("/", indexRoute);

export default app;
