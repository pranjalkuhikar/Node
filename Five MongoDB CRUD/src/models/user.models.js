import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const user = mongoose.model("user", userSchema);

export { user };
