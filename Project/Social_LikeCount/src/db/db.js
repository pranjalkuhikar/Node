import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MongoDB)
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
