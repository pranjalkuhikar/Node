import app from "./src/app.js";
import { config } from "dotenv";
import connectDB from "./src/db/db.js";

config();

let port = process.env.PORT;
connectDB();
app.listen(() => {
  console.log(`Server is running on port http://localhost:${port}`);
});
