import {Router} from 'express'
const router = Router();
import { getAllStats } from '../controllers/stats.controller';
import { protectRoute } from '../middleware/auth.middleware';

router.get('/', protectRoute, getAllStats)
export default router;