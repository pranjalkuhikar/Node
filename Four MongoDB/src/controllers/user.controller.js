import { User } from "../db/db.js";

// Function to create a new user
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    console.log("User created:", user);
  } catch (err) {
    console.error("Error creating user:", err.message);
  }
};

// Function to get all users
const getUsers = async () => {
  try {
    const users = await User.find();
    console.log("Users retrieved:", users);
    return users;
  } catch (err) {
    console.error("Error retrieving users:", err.message);
  }
};

// Function to get a user by ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    console.log("User retrieved:", user);
    return user;
  } catch (err) {
    console.error("Error retrieving user:", err.message);
  }
};

// Function to update a user by ID
const updateUserById = async (userId, updateData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    console.log("User updated:", user);
    return user;
  } catch (err) {
    console.error("Error updating user:", err.message);
  }
};

// Function to delete a user by ID
const deleteUserById = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
    console.log("User deleted");
  } catch (err) {
    console.error("Error deleting user:", err.message);
  }
};

export { createUser, getUsers, getUserById, updateUserById, deleteUserById };
