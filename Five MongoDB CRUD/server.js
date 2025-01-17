import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

dotenv.config();
connectDB();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is Running at ${port}`);
});
