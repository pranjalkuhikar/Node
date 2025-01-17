import { user } from "../models/user.models.js";

export const indexController = (req, res) => {
  res.send("Home Pages");
};

export const createUser = async (req, res) => {
  try {
    const users = new user(req.body);
    await users.save();
    res.status(201).send("User created");
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await user.find();
    console.log("Users retrieved:", users);
    res.status(200).json(users);
    return users;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const users = await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(users);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const users = await user.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted");
  } catch (error) {
    console.log(error.message);
  }
};
