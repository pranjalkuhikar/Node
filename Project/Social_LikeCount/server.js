import app from "./src/app.js";
import { config } from "dotenv";
import connectDB from "./src/db/db.js";

config();

const port = process.env.PORT || 4000;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
