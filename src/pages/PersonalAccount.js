import React, { useEffect, useState } from 'react'
import UserBlog from './UserBlog'
import axios from 'axios'
const PersonalAccount = () => {
    const [user, setUser] = useState([])
    const followid = localStorage.getItem('userid')
    const sendRequest = async () => {
        const result = await axios.get(`http://localhost:5000/users/${followid}`)
        const res = result.data
        return res

    }
    useEffect(() => {
        sendRequest().then((data) => setUser(data.user))
    }, [])
    const follow = async () => {

    }
    return (
        <div>
            {/* <h1>Welcome,{userid}</h1> */}
            <div className='flex justify-center items-center flex-col'>
                <img className='w-[300px] h-[300px] rounded-full object-fit' src='https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg' alt='ls' />
                {[user].map((data, i) => (
                    <div key={i}>
                        <h4>{data.username}</h4>
                    </div>
                ))}
                <div className='flex space-x-8 text-center mt-4'>
                    <div className='flex flex-col  w-[100px]'>
                        <h2 className='text-4xl font-bold '>39</h2>
                        <p className='font-bold'>Post</p>
                    </div>
                    <div className='flex flex-col w-[100px]'>
                        <h2 className='text-4xl font-bold '>390</h2>
                        <p className='font-bold'>Followers</p>
                    </div>
                    <div className='flex flex-col w-[100px]'>
                        <h2 className='text-4xl font-bold '>39</h2>
                        <p className='font-bold'>Following</p>
                    </div>
                </div>
                {followid ? <button>Update</button> : ""}
                <div className='flex'>
                    <UserBlog userid={followid} />
                </div>

            </div>


        </div>
    )
}

export default PersonalAccount