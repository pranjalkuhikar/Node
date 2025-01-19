import express from "express";
import indexRoute from "./routes/index.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();

app.use(express.json());

app.use("/", indexRoute);
app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
