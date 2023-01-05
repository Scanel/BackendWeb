import { Router } from "express";
import { deleteStatusTask, getStatusTask, getStatusTasks, postStatusTask, updateStatusTask } from "../controllers/statustask.controller";

const router = Router();

router.get("/", getStatusTasks);
router.get("/:id", getStatusTask);
router.post("/", postStatusTask);
router.put("/:id", updateStatusTask);
router.delete("/:id", deleteStatusTask);

export { router };
