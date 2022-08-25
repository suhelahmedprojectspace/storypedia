import mongoose from 'mongoose'
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    Blogbody: { type: String, required: true },
    created: { type: Date, default: Date.now() },
    image: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
})

const Blog = mongoose.model('Blog', BlogSchema)
export default Blog