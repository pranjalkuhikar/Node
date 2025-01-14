import { Router } from "express";
import { indexController } from "../controllers/index.controller.js";
import { todoData, deleteTodo } from "../controllers/todoData.controller.js";

const router = Router();

router.get("/", indexController);
router.post("/add", todoData);
router.post("/delete", deleteTodo);

export default router;
