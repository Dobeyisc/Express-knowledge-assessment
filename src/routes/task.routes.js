import { Router } from "express";

import {
  getTask,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} from "../controllers/task.controller.js";

import { verifyToken, isAdmin, isTeacher } from "../middlewares/authJwt.js";

const router = Router();

  router.get("/", getTask);

  router.get("/:taskId", getTaskById);

  router.post("/", [verifyToken, isTeacher], createTask);

  router.put("/:taskId", [verifyToken, isTeacher], updateTaskById);

  router.delete("/:taskId", [verifyToken, isAdmin], deleteTaskById);

export default router;