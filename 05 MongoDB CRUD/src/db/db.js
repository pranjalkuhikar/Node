import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error ", err.message));
};

export default connectDB;
