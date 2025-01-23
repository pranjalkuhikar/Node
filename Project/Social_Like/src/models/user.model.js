import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: String,
    required: true,
  },
  postImage: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export { User };
