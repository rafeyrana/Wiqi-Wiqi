import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getAllTracks,
  getFeaturedTracks,
  getMadeForYouTracks,
  getTrendingTracks,
} from "../controllers/track.controller";


const router = Router();
router.get("/", protectRoute, getAllTracks);
router.get("/featured", getFeaturedTracks);
router.get("/made-for-you", getMadeForYouTracks);
router.get("/trending", getTrendingTracks);
export default router;
