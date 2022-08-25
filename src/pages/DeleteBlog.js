import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
const DeleteBlog = () => {
    const [blog, SetBlog] = useState([])
    const id = useParams().id
    const sendRequest = async () => {
        const res = await axios.get(`http://localhost:5000/blog/${id}`).catch(error => console.log(error))
        const result = await res.data
        return result
    }
    useEffect(() => {
        sendRequest().then(data => SetBlog(data.blog))
    }, [])
    const handleDelete = async (key) => {
        await axios.delete(`http://localhost:5000/blog/${key}`)
        toast.success('deleted successfully ')

    }
    return (
        <div className='flex  flex-col justify-center items-center '>
            <h1 className='text-red-500 text-xl text-center font-bold'>Are your sure  about Deleting? this Blog</h1>
            {[blog].map((data, i) => (
                <div key={i} className="w-[400px] p-4 shadow-md" >
                    <h1 className='text-xl font-bold'>{data.title}</h1>
                    <p>{data.Blogbody}</p>
                    <button className='bg-red-500 text-white p-2 rounded' onClick={() => handleDelete(data._id)}>Delete</button>
                </div>

            ))}
        </div>
    )
}

export default DeleteBlog