import express from 'express';
import { commentPost, createPost, getAllPost, getComment, likePost } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', getAllPost);
router.put('/:id/like', likePost);
router.post('/create', createPost);
router.get('/comment/:postId', getComment);
router.post('/:postId', commentPost);

export default router; 