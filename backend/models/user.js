import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true }],
    follower: [{ type: mongoose.Schema.Types.ObjectId }]



})

const User = mongoose.model('user', userSchema)
export default User