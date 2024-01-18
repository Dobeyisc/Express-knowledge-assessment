import { Router } from "express";

import {
  getTask,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} from "../controllers/task.controller.js";

import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";

const router = Router();

  router.get("/", getTask);

  router.get("/:productId", getTaskById);

  router.post("/", [verifyToken, isModerator], createTask);

  router.put("/:productId", [verifyToken, isModerator], updateTaskById);

  router.delete("/:productId", [verifyToken, isAdmin], deleteTaskById);

export default router;