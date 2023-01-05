import { Router } from "express";
import { deleteImgRoom, getImgRoom, getImgRooms, postImgRoom, updateImgRoom } from "../controllers/imgroom.controller";

const router = Router();

router.get("/", getImgRooms);
router.get("/:id", getImgRoom);
router.post("/", postImgRoom);
router.put("/:id", updateImgRoom);
router.delete("/:id", deleteImgRoom);

export { router };
