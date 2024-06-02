import { Router } from 'express'
import { findPosts, findByIdPost, createPost, allPost, likePost, deletePost, updatePost } from '../controllers/postsControllers.js'

const router = Router()

router.get('/posts', findPosts)
router.get('/posts/:id', findByIdPost)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)
router.put('/posts/like/:id', likePost)
router.all('*', allPost)

export default router