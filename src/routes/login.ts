import { Router } from "express";
import { postLogin } from "../controllers/login.controller";

const router = Router();

router.post("/", postLogin);

export { router };
