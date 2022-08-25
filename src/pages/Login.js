import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
// import { login } from '../redux/features/authSlice'
import { login } from '../redux/features/authSlice'
import axios from 'axios'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formvalue, setForm] = useState({
        email: '',
        password: ''
    })
    const sendRequest = async () => {
        const res = await axios.post('http://localhost:5000/users/signin', {
            email: formvalue.email,
            password: formvalue.password
        })

        return res
    }
    const handleLogin = (e) => {
        e.preventDefault()
        sendRequest()
            .then((res) => localStorage.setItem('userid', res.data.user))
            .then(() => dispatch(login()))
            .then(() => navigate('/'))
            .then(() => toast.success('successfully login'))
            .catch(() => toast.error('User not found ! please register'))
            .catch(error => console.log(error))

    }
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h2 className='text-4xl text-gray-400 mb-4'>Sign In</h2>
            <form className='flex flex-col space-y-2 items-center shadow-2xl p-4 w-[400px] rounded'>
                <i className="fas fa-user-circle fa-2x"></i>
                <input type="text" value={formvalue.email} className="w-[300px] rounded" placeholder="email" onChange={(e) => setForm({ ...formvalue, email: e.target.value })} />
                <input type="password" value={formvalue.password} className="w-[300px] rounded" placeholder="password" onChange={(e) => setForm({ ...formvalue, password: e.target.value })} />
                <input type="submit" value="Login" onClick={handleLogin} className="w-[300px] rounded bg-sky-500 text-white py-2 px-4" />

                <div className='border-t-2 border-gray-400 mt-4  w-[300px]'></div>
                <Link to="/register" className=' text-sm text-gray-500 font-bold'>Don't have an account ? Register</Link>

            </form>

        </div>
    )
}

export default Login