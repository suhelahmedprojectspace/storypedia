import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateBlog = () => {
    const navigate = useNavigate()
    const id = useParams().id
    console.log('params', id)
    const [formvalue, setForm] = useState({
        title: "",
        Blogbody: "",


    })
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/blog/update/${id}`, {
            title: formvalue.title,
            Blogbody: formvalue.Blogbody,

        }).catch(error => console.log(error))
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/blog/${id}`).then(data => setForm(data.data.blog))
    }, [])
    const handleBlog = (e) => {
        e.preventDefault()
        sendRequest().then(() => toast.success('successfully upadate')).then(() => navigate('/'))
    }


    return (
        <div className='flex flex-col mt-4 justify-center items-center'>
            <h2>Upadate Blog </h2>
            <form className='flex flex-col space-y-2 items-center shadow-2xl p-4 w-[400px] rounded'>
                <input type="text" value={formvalue.title} className="w-[300px] rounded" placeholder="title" onChange={(e) => setForm({ ...formvalue, title: e.target.value })} />
                <input type="text" value={formvalue.Blogbody} className="w-[300px] rounded" placeholder="Blogbody" onChange={(e) => setForm({ ...formvalue, Description: e.target.value })} />
                <input type="submit" value="Update blog" onClick={handleBlog} className="w-[300px] rounded bg-sky-500 text-white py-2 px-4" />



            </form>

        </div>
    )
}

export default UpdateBlog