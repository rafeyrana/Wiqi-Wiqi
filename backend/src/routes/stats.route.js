import {Router} from 'express'
const router = Router();
import { getAllStats } from '../controllers/stats.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

router.get('/', protectRoute, getAllStats)
export default router;