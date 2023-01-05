import { Router } from "express";
import { deleteRoomUser, getRoomUser, getRoomUsers, postRoomUser, updateRoomUser } from "../controllers/roomuser.controller";

const router = Router();

router.get("/", getRoomUsers);
router.get("/:id", getRoomUser);
router.post("/", postRoomUser);
router.put("/:id", updateRoomUser);
router.delete("/:id", deleteRoomUser);

export { router };
