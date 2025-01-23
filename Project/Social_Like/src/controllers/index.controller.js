import { User } from "../models/user.model.js";

export const indexController = async (req, res) => {
  const user = await User.find();
  res.render("index", { user });
};

export const createPost = (req, res) => {
  res.render("create");
};

export const createUser = async (req, res) => {
  const users = new User(req.body);
  await users.save();
  res.redirect("/home");
};
