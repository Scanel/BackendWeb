import { Router } from "express";
import { deleteAvatar, getAvatar, getAvatars, postAvatar, updateAvatar } from "../controllers/avatar.controller";

const router = Router();

router.get("/", getAvatars);
router.get("/:id", getAvatar);
router.post("/", postAvatar);
router.put("/:id", updateAvatar);
router.delete("/:id", deleteAvatar);

export { router };
