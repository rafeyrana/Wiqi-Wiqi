import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", protectRoute, getAllUsers);
// todo: get all messages for a user
export default router;
