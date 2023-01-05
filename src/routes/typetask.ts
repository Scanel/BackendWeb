import { Router } from "express";
import { deleteTypeTask, getTypeTask, getTypeTasks, postTypeTask, updateTypeTask } from "../controllers/typetask.controller";

const router = Router();

router.get("/", getTypeTasks);
router.get("/:id", getTypeTask);
router.post("/", postTypeTask);
router.put("/:id", updateTypeTask);
router.delete("/:id", deleteTypeTask);

export { router };
