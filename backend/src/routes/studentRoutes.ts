import express from 'express';
import {authMiddleware} from '../middleware/auth';
import { getAllStudents, getProfile, updateProfile, payFees } from '../controllers/studentController';

const router =express.Router();

router.get('/', authMiddleware, getAllStudents);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.put('/profile/pay-fees', authMiddleware, payFees);
export default router;