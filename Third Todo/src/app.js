import express from "express";
import indexRoute from "./routes/index.routes.js";

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
