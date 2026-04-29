import express from 'express';
import { AuthController } from '../../controllers/index.js';

const router = express.Router();

// Login endpoint
router.post('/login', AuthController.login);

// Register endpoint
router.post('/register', AuthController.register);

export default router;
