import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddBlog = () => {
    const navigate = useNavigate()
    const [formvalue, setForm] = useState({
        title: '',
        Description: '',
        image: ''
    })
    const sendRequest = async () => {
        return await axios.post('http://localhost:5000/blog', {
            title: formvalue.title,
            Blogbody: formvalue.Description,
            image: formvalue.image,
            user: localStorage.getItem('userid')
        }).catch(error => console.log(error))
    }
    const handleBlog = (e) => {
        e.preventDefault()
        sendRequest().then(() => navigate('/getAllBlog')).then(() => toast.success('Done')).catch(error => console.log(error))

    }
    return (
        <div className='flex flex-col mt-4 justify-center items-center'>
            <h2>Create kora blog </h2>
            <form className='flex flex-col space-y-2 items-center shadow-2xl p-4 w-[400px] rounded'>
                <input type="text" value={formvalue.title} className="w-[300px] rounded" placeholder="title" onChange={(e) => setForm({ ...formvalue, title: e.target.value })} />
                <input type="text" value={formvalue.Description} className="w-[300px] rounded" placeholder="Description" onChange={(e) => setForm({ ...formvalue, Description: e.target.value })} />
                <input type="text" value={formvalue.image} className="w-[300px] rounded" placeholder="image url" onChange={(e) => setForm({ ...formvalue, image: e.target.value })} />
                <input type="submit" value="Create blog" onClick={handleBlog} className="w-[300px] rounded bg-sky-500 text-white py-2 px-4" />



            </form>

        </div>
    )
}

export default AddBlog