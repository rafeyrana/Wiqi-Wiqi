import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getAllUsers,
} from "../controllers/user.controller.js";
const router = Router();

router.get("/", protectRoute, getAllUsers);
// todo: get all messages for a user
export default router;
