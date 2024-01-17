import { router } from "express";
import {
  getStudent,
  createStudent,
  updateStudentById,
  deleteStudentById,
  getStudentById,
} from "../controllers/student.controller";

router.get("/", getStudent);

router.get("/:studentId", getStudentById);

router.post("/", createStudent);

router.put("/:studentId",  updateStudentById);

router.delete("/:studentId",  deleteStudentById);

export default router;