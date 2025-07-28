// Routes/PostRoutes.js
import express from "express";
import { postImage } from "../controllers/postImage.js";

const router = express.Router();

router.post("/upload/", postImage); // Final route: POST /api/v1/posts/upload

export default router;
