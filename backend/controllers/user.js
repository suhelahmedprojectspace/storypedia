import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
export const singup = async (req, res) => {
    const { email, password, username } = req.body
    try {
        const Olduser = await User.findOne({ email })
        if (Olduser) {
            return res.status(400).json({ message: 'User already exist' })
        }
        const salt = await bcrypt.genSalt(10)
        const hasedpassword = await bcrypt.hash(password, salt)
        const result = await User.create({
            email,
            password: hasedpassword,
            username,
            blogs: []
        })
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRECT_ACCESS_TOKEN, { expiresIn: '1hr' })
        res.status(200).json({ result: result._id, token })

    }
    catch (error) {
        res.status(500).json({ message: 'please login again' })
        console.log(error)
    }
}
export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const validatepassword = await bcrypt.compareSync(password, user.password)
        if (!validatepassword) {
            return res.status(404).json({ message: 'Invalid password' })
        }
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRECT_ACCESS_TOKEN, { expiresIn: '1hr' })
        return res.status(200).json({ user: user._id, token })
    }
    catch (error) {
        res.status(500).json({ message: 'please register' })
        console.log(error)
    }
}
export const getuser = async (req, res) => {
    let user;
    try {
        user = await User.find()
        res.status(200).json({ user })
    }
    catch (error) {
        console.log(error)
    }
}

export const getUserById = async (req, res) => {
    const id = req.params.id
    let user;
    try {
        user = await User.findById(id)
        console.log('user', user)
        res.status(200).json({ user })
    }
    catch (error) {
        console.log(error)
    }
}

export const getuserBlog = async (req, res) => {
    const id = req.params.id
    let user;
    try {
        user = await User.findById(id).populate('blogs')
        res.status(200).json({ user })
    }
    catch (error) {
        console.log(error)
    }
}
export const follow = async (req, res) => {
    const { userid, followid } = req.body
    try {
        User.findByIdAndUpdate(userid, {
            $push: { follower: followid }
        }, { new: true }).exec((err, result) => {
            if (err) {
                return res.status(400).json({ error })
            }
            else {
                res.json({ result })
            }

        })

    }
    catch (error) {
        return res.status(404).json({ error })
    }
}