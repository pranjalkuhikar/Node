import { Router } from "express";
import {
  createUser,
  indexController,
} from "../controllers/index.controller.js";

const route = Router();

route.get("/", indexController);
route.post("/create", createUser);

export default route;
