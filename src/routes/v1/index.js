import express from 'express';
import {InfoController} from '../../controllers/index.js';
import authRoutes from './auth-routes.js';

const router = express.Router();

// Health/info endpoint for quick API availability checks
router.get('/info',InfoController.info);

// Auth routes
router.use('/auth', authRoutes);

export default router;
