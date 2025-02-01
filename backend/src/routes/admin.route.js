import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/auth.middleware.js";
import {
  checkAdmin,
  createTrack,
  deleteTrack,
  createCollection,
  deleteCollection,
} from "../controllers/admin.controller.js";

const router = Router();
// admin auth middleware
router.use(protectRoute, requireAdmin);

router.get("check-admin", checkAdmin);
router.post("/tracks", createTrack);
router.delete("/tracks:id", deleteTrack);

router.post("/collection", createCollection);
router.delete("/collection:id", deleteCollection);
export default router;
