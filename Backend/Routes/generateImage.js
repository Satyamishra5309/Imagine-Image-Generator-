// Routes/generateImageRoute.js
import express from "express";
import { generateImage } from "../controllers/generateImage.js";

const router = express.Router();

router.post("/generate", generateImage); // Final route: POST /api/v1/generate

export default router;
