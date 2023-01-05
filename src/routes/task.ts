import { Router } from "express";
import { getTask, getTasks, postTask } from "../controllers/task.controller";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", postTask);

export { router };
