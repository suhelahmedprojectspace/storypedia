import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlogCard from './BlogCard'
const AllBlog = () => {
    const [blog, SetBlog] = useState()
    const sendRequest = async () => {
        const res = await axios.get('http://localhost:5000/blog').catch(error => console.log(error))
        const result = await res.data
        return result
    }
    useEffect(() => {
        sendRequest().then(data => SetBlog(data.blog))
    }, [])
    return (
        <div>
            {blog && blog.map((data, i) => (
                <div key={i} className="flex justify-center items-center mt-4">
                    <BlogCard id={data._id} isUser={localStorage.getItem('userid') === data.user._id} title={data.title} Blogbody={data.Blogbody} image={data.image} author={data.user.username} userid={data.user._id} createon={data.created} />
                </div>
            ))}
        </div>
    )
}

export default AllBlog