import { Router } from "express";
import { deleteRol, getRol, getRols, postRol, updateRol } from "../controllers/rol.controller";

const router = Router();

router.get("/", getRols);
router.get("/:id", getRol);
router.post("/", postRol);
router.put("/:id", updateRol);
router.delete("/:id", deleteRol);

export { router };
