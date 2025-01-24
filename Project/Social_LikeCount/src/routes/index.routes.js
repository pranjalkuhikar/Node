import { Router } from "express";
import { indexController } from "../controllers/index.controller.js";

const router = Router();

router.get("/", indexController);
// router.post("/create", createUser);
// router.get("/home", home);

export default router;
