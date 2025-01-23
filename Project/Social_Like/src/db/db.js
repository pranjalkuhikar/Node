import mongoose from "mongoose";
import { config } from "dotenv";
config();
const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MongoDB)
      .then(() => console.log("Database connection established"));
  } catch (error) {
    console.log(`MongoDB ${error.message}`);
  }
};
export default connectDB;
