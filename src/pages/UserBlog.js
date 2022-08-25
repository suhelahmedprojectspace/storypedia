import React, { useState, useEffect } from 'react';
import UserBlogCard from './UserBlogCard';

import axios from 'axios'
const UserBlog = ({ userid }) => {
    const [blog, SetBlog] = useState()
    const sendRequest = async () => {
        const response = await axios.get(`http://localhost:5000/users/userblog/${userid}`).catch(error => console.log(error))
        const result = await response.data
        return result

    }
    useEffect(() => {
        sendRequest().then(data => SetBlog(data.user.blogs))
    }, [])
    return (
        <div className='flex flex-wrap justify-center space-x-2 '>
            {blog && blog.map((data, i) => (
                <div key={i}>
                    <UserBlogCard id={data._id} isUser={true} title={data.title} image={data.image} createon={data.created} />
                </div>
            ))}
        </div>
    )
}

export default UserBlog