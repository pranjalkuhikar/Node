import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/kodr")
    .then(() => {
      console.log("MongoDB connected...");
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

// Define a schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model
const User = mongoose.model("User", userSchema);

export default connectDB;
export { User };
