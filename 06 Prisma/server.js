import express, { json } from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", async (req, res, next) => {
  try {
    const { data, error } = await supabase.from("your-table").select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
