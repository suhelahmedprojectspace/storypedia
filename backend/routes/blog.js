import express from 'express'
import { createBlog, deleteBlog, getAllBlog, getById, Getlikes, likepost, UpdateBlog } from '../controllers/Blog.js'
import { auth } from '../middleware/auth.js'
const BlogRouter = express.Router()
BlogRouter.get('/', getAllBlog)
BlogRouter.post('/', createBlog)
BlogRouter.put('/update/:id', UpdateBlog)
BlogRouter.get('/:id', getById)
BlogRouter.delete('/:id', deleteBlog)
BlogRouter.put('/likes', likepost)
BlogRouter.get('/likes/:id', Getlikes)
export default BlogRouter