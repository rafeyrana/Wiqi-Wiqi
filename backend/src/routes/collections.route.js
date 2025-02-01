import { Router } from "express";
import {
  getAllCollections,
  getCollectionById,
} from "../controllers/collection.controller.js";
const router = Router();
router.use(protectRoute);
router.get("/", getAllCollections);
router.get("/:id", getCollectionById);
export default router;
