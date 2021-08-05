import express from "express";
import { authController } from "../controllers/auth.controller.js";

var router = express.Router();

router.get("/", authController.index);

export default router;
