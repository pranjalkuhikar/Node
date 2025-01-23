import { Router } from "express";
import {
  createPost,
  createUser,
  indexController,
} from "../controllers/index.controller.js";

const router = Router();
router.get("/", (req, res) => {
  res.redirect("/home");
});
router.get("/home", indexController);
router.get("/create", createPost);
router.post("/create", createUser);

export default router;
