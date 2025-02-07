import express from 'express';
import { run } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', run);

export default router;