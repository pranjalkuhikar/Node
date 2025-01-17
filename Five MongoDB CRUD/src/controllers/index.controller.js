import { user } from "../models/user.models.js";

export const indexController = (req, res) => {
  res.send("Home Pages");
};

export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const users = new user(req.body);
    await users.save();
    res.send("User Created");
  } catch (error) {
    console.log(error.message);
  }
};
