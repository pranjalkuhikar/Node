import app from "./src/app.js";
import { config } from "dotenv";

config();

let port = process.env.PORT;

app.listen(() => {
  console.log(`Server is running on port http://localhost:${port}`);
});
