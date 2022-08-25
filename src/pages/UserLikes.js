import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserLikes = ({ userid, postid }) => {
    const [display, setDisplay] = useState(false)
    const [likes, setLikes] = useState([])
    const sendRequest = async () => {
        const result = await axios.get(`http://localhost:5000/blog/likes/${postid}`)
        const response = result.data
        return response
    }
    const handleLike = async () => {
        await axios.put('http://localhost:5000/blog/likes', {
            userid,
            postid
        }).then(() => setDisplay(true)).then(() => window.location.reload(false))
    }
    useEffect(() => {
        sendRequest().then(data => setLikes((data.blog.likes).length))



    }, [])
    return (
        <div className='flex space-x-4 mt-4 '>
            {
                display ? <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" /> : <i className="far fa-heart outline-red-500 text-4xl" onClick={handleLike}></i>
            }


            {[likes].map((data, i) => (
                <div key={i}>
                    <p className='text-2xl font-extralight mt-2'>{data}</p>
                </div>
            ))}
        </div>
    )
}

export default UserLikes