import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

// Route to create a new user
router.post("/users", async (req, res) => {
  const userData = req.body;
  await createUser(userData);
  res.status(201).send("User created");
});

// Route to get all users
router.get("/users", async (req, res) => {
  const users = await getUsers();
  res.status(200).json(users);
});

// Route to get a user by ID
router.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  res.status(200).json(user);
});

// Route to update a user by ID
router.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;
  const user = await updateUserById(userId, updateData);
  res.status(200).json(user);
});

// Route to delete a user by ID
router.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
  await deleteUserById(userId);
  res.status(200).send("User deleted");
});

export default router;
