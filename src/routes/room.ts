import { Router } from "express";
import { getRoom, postRoom } from "../controllers/room.controller";

const router = Router();

// router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", postRoom);
// router.put("/:id", updateRoom);
// router.delete("/:id", deleteRoom);

export { router };
