import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
