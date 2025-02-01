import {Router} from "express";
import {createTrack} from "../controllers/admin.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import {requireAdmin} from "../middleware/auth.middleware.js";
const router = Router();


router.post('/tracks', protectRoute, requireAdmin, createTrack);


export default router;