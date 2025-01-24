import app from "./src/app.js";
import { config } from "dotenv";
import connectDB from "./src/db/db.js";

config();

// const PORT = 4000;
const PORT = process.env.PORT;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
