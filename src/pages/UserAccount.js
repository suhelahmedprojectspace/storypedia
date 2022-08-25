import React, { useEffect, useState } from 'react'
import UserBlog from './UserBlog'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const UserAccount = () => {
    const [user, setUser] = useState([])
    const followid = localStorage.getItem('userid')
    const id = useParams().id
    const sendRequest = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`)
        const res = result.data
        return res

    }
    useEffect(() => {
        sendRequest().then((data) => console.log(data.user))
    }, [])

    const follow = async () => {
        await axios.put('http://localhost:5000/users/follow', { userid: id, followid: followid })
    }
    return (
        <div>


            <div className='flex justify-center items-center flex-col'>
                <img className='w-[300px] h-[300px] rounded-full object-fit' src='https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg' alt='ls' />


                <div className='flex space-x-2'>
                    <div className='bg-sky-500 rounded shadow-xl shadow-sky-500/50  px-4  py-2 text-white text-center' onClick={follow}>Follow</div>
                    <div className='bg-sky-500 rounded shadow-xl shadow-sky-500/50  px-4  py-2 text-white text-center'>Contact</div>
                </div>


                <div className='flex'>
                    <UserBlog userid={id} />
                </div>

            </div>


        </div>
    )
}

export default UserAccount