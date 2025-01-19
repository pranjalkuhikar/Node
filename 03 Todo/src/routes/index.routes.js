import { Router } from "express";
import { indexController } from "../controllers/index.controller.js";
import { todoData, deleteTodo } from "../controllers/todoData.controller.js";
import { notFound } from "../controllers/not-found.controller.js";

const router = Router();

router.get("/", indexController);
router.post("/add", todoData);
router.post("/delete", deleteTodo);
router.get("*", notFound);

export default router;
