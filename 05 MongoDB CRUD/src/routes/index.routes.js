import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  indexController,
  updateUser,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/", indexController);
router.post("/create", createUser);
router.get("/users", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
