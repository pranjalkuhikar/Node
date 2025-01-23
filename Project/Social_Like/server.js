import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3001;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
