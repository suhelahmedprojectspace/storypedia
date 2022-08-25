import mongoose from "mongoose";
import Blog from "../models/Blog.js";
import User from "../models/user.js";

export const getAllBlog = async (req, res) => {
    let blog;
    try {
        blog = await Blog.find().populate('user')
    }
    catch (error) {
        console.log(error)
    }
    if (!blog) {
        return res.status(404).json({ message: "no blog found" })
    }
    return res.status(200).json({ blog })
}
export const createBlog = async (req, res) => {
    const { title, Blogbody, image, user } = req.body
    let existingUser;
    try {
        existingUser = await User.findById(user)

    } catch (error) {
        return console.log(error)
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find the user with this id" })
    }
    const result = new Blog({
        title,
        Blogbody,
        image,
        user: existingUser._id
    })
    try {
        const session = await mongoose.startSession();
        session.startTransaction()
        await result.save({ session });
        existingUser.blogs.push(result)
        await existingUser.save({ session })
        await session.commitTransaction()
        res.status(200).json({ result })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ error })
    }
}
export const UpdateBlog = async (req, res) => {
    const { title, Blogbody } = req.body
    const id = req.params.id
    let blog
    try {
        const blog = await Blog.findByIdAndUpdate(id, {
            title,
            Blogbody,

        })
    }
    catch (error) {
        return res.status(404).json({ error })
    }
    if (!blog) {
        return res.status(404).json({ messge: 'Not found' })
    }
    return res.status(200).json({ blog })
}
export const deleteBlog = async (req, res) => {
    const id = req.params.id
    let blog
    try {
        const blog = await Blog.findByIdAndRemove(id)

    }

    catch (error) {
        return res.status(404).json({ error })
    }
    if (!blog) {
        return res.status(500).status({ message: 'Not found' })
    }
    return res.status(200).json({ message: "successfully Deleted" })
}
export const getById = async (req, res) => {
    const id = req.params.id
    let blog;
    try {
        blog = await Blog.findById(id)

    }
    catch (error) {
        console.log(error)
    }
    if (!blog) {
        return res.status(404).json({ message: 'No blog found' })
    }
    return res.status(200).json({ blog })
}
export const likepost = async (req, res) => {
    const { postid, userid } = req.body
    Blog.findByIdAndUpdate(postid,
        { $push: { likes: userid } },
        { new: true }).exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })

            }
            else {
                res.json({ result })
            }
        })
}
export const Getlikes = async (req, res) => {
    const id = req.params.id
    let blog;
    try {
        blog = await Blog.findById(id).populate('likes')
    }
    catch (error) {
        return res.status(404).json({ message: 'not found' })
    }
    if (!blog) {
        res.status(404).json({ message: 'not found ' })
    }
    return res.status(200).json({ blog })

}