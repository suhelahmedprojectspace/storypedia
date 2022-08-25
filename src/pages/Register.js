import { toast } from 'react-toastify'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const navigate = useNavigate()
    const [formvalue, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const sendRequest = async () => {
        await axios.post('http://localhost:5000/users/signup', {
            username: formvalue.username,
            email: formvalue.email,
            password: formvalue.password

        }, {
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        sendRequest()
            .then(() => toast.success('Successfully register'))
            .then(() => navigate('/login'))
            .catch(error => console.log(error))
    }
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h2 className='text-4xl text-gray-400 mb-4'>Sign Up</h2>
            <form className='flex flex-col space-y-2 items-center shadow-2xl p-4 w-[400px] rounded'>
                <i className="fas fa-user-circle fa-2x"></i>
                <input type="text" value={formvalue.username} className="w-[300px] rounded" placeholder="username" onChange={(e) => setForm({ ...formvalue, username: e.target.value })} />
                <input type="text" value={formvalue.email} className="w-[300px] rounded" placeholder="email" onChange={(e) => setForm({ ...formvalue, email: e.target.value })} />
                <input type="password" value={formvalue.password} className="w-[300px] rounded" placeholder="password" onChange={(e) => setForm({ ...formvalue, password: e.target.value })} />
                <input type="submit" value="Register" onClick={handleRegister} className="w-[300px] rounded bg-sky-500 text-white py-2 px-4" />

                <div className='border-t-2 border-gray-400 mt-4  w-[300px]'></div>
                <Link to="/login" className=' text-sm text-gray-500 font-bold'>Already have any account ? Login</Link>

            </form>

        </div>
    )
}

export default Register