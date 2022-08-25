import express from 'express'
import { signIn, singup, getuser, getuserBlog, follow, getUserById } from '../controllers/user.js'

const router = express.Router()
router.post('/signup', singup)
router.post('/signin', signIn)
router.get('/', getuser)
router.get('/:id', getUserById)
router.get('/userblog/:id', getuserBlog)
router.put('/follow', follow)
export default router