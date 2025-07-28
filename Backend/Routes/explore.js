// Routes/exploreRoutes.js
import express from "express";
import { getAllPost } from "../controllers/getAllPost.js";

const router = express.Router();

router.get("/all/", getAllPost); // Final route: GET /api/v1/explore/all

export default router;
